import { NextRequest, NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";
import { LIMITS } from "@/lib/validation";
import { rateLimit } from "@/lib/ratelimit";

const SYSTEM_PROMPT = `Du er en hjelpsom assistent for Elektro Sør AS, en elektroentreprenør i Mandal.

Svar alltid på norsk. Vær kort og konkret, ikke selge inn med flotte adjektiv.

Fakta:
- Adresse: Mikkelsmyrveien 4B, 4515 Mandal (Skinsnes)
- Telefon: 38 27 13 90
- Daglig leder: Eilef Fiskå, 92 45 75 42
- E-post: firmapost@elektro-sor.no
- Åpningstider: mandag–fredag 07:00–15:00. Vakttelefon utenom dette.
- Tjenester: installasjoner, sikringsskap, elbil-ladere, smarthus, termografi, næring og industri.
- Referanser i regionen: GE Healthcare (Spangereid), Mandal Fengsel, Mandal Golfklubb.
- Stillinger akkurat nå: industrielektriker (2), serviceelektriker (2), lærling (4 plasser).

Hvis noen spør om pris: si at de bør ringe eller sende inn bestilling på /bestilling for å få et uforpliktende tilbud.
Hvis du ikke vet svaret: si det rett ut og foreslå at de ringer 38 27 13 90.
Ikke svar på spørsmål som ikke har med Elektro Sør eller elektrofaget å gjøre.`;

type ClientMsg = { role: "user" | "assistant"; content: string };

function sanitizeMessages(input: unknown): ClientMsg[] | null {
  if (!Array.isArray(input)) return null;
  // Cap history length to prevent unbounded prompt-injection / cost-inflation.
  const slice = input.slice(-LIMITS.chatHistoryItems);
  const cleaned: ClientMsg[] = [];
  for (const m of slice) {
    if (!m || typeof m !== "object") return null;
    const role = (m as { role?: unknown }).role;
    const content = (m as { content?: unknown }).content;
    if (role !== "user" && role !== "assistant") return null;
    if (typeof content !== "string") return null;
    const trimmed = content.trim();
    if (trimmed.length === 0) continue;
    if (trimmed.length > LIMITS.chatMessage) return null;
    cleaned.push({ role, content: trimmed });
  }
  if (cleaned.length === 0) return null;
  return cleaned;
}

export async function POST(req: NextRequest) {
  const rl = rateLimit(req, { key: "chat", limit: 20, windowMs: 60_000 });
  if (!rl.ok) {
    return NextResponse.json(
      { error: "For mange meldinger. Prøv igjen om litt." },
      { status: 429, headers: { "Retry-After": String(rl.retryAfterSec) } }
    );
  }

  let payload: { messages?: unknown; sessionId?: unknown };
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ error: "Ugyldig forespørsel." }, { status: 400 });
  }

  const messages = sanitizeMessages(payload.messages);
  if (!messages) {
    return NextResponse.json({ error: "Ugyldige meldinger." }, { status: 400 });
  }

  const sessionId =
    typeof payload.sessionId === "string" && payload.sessionId.length > 0 && payload.sessionId.length <= 100
      ? payload.sessionId
      : null;

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Chatten er ikke konfigurert. Ring 38 27 13 90." },
      { status: 503 }
    );
  }

  let response: Response;
  try {
    response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
        max_tokens: 400,
        temperature: 0.5,
      }),
    });
  } catch (err) {
    console.error("OpenAI fetch failed:", err instanceof Error ? err.message : err);
    return NextResponse.json(
      { error: "Tjenesten er midlertidig utilgjengelig. Ring 38 27 13 90." },
      { status: 502 }
    );
  }

  if (!response.ok) {
    console.error("OpenAI non-OK:", response.status);
    return NextResponse.json(
      { error: "Tjenesten er midlertidig utilgjengelig. Ring 38 27 13 90." },
      { status: 502 }
    );
  }

  const data = (await response.json().catch(() => null)) as
    | { choices?: Array<{ message?: { content?: string } }> }
    | null;
  const reply: string = data?.choices?.[0]?.message?.content ?? "Beklager, prøv igjen.";

  // Fire-and-forget log to Supabase.
  const supabase = getSupabase();
  if (supabase && sessionId) {
    const lastUser = [...messages].reverse().find((m) => m.role === "user");
    if (lastUser) {
      supabase
        .from("chat_conversation")
        .insert({
          session_id: sessionId,
          user_message: lastUser.content,
          assistant_reply: reply,
          history: messages,
        })
        .then(({ error }) => {
          if (error) console.error("Chat log failed:", error.message);
        });
    }
  }

  return NextResponse.json({ reply });
}
