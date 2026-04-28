import { NextRequest, NextResponse } from "next/server";
import { getChatSettings } from "@/sanity/queries";

const DEFAULT_SYSTEM_PROMPT = `Du er en hjelpsom assistent for Elektro Sør AS, en lokal elektroentreprenør i Lindesnesregionen (Mandal/Spangereid).

Svar alltid på norsk. Vær kortfattet, vennlig og profesjonell.

Fakta om Elektro Sør AS:
- Adresse: Mikkelsmyrveien 4B, 4515 Mandal (Skinsnes)
- Telefon: 38 27 13 90
- Daglig leder: Eilef Fiskå, telefon 92 45 75 42
- E-post: firmapost@elektro-sor.no
- Åpningstider: Mandag–fredag 07:00–15:00. Utenom dette viderekobles til vakttelefon.
- Tjenester: Elektriske installasjoner, elbil-ladeanlegg, sikringsskap, smarthus, industri, næringsliv, elektrotermografi
- Viktige referanser: GE Healthcare (Spangereid), Mandal Fengsel, Mandal Golfklubb
- Ledige stillinger: Industrielektriker (2 stillinger), Serviceelektriker (2 stillinger), Elektrikerlærling (4 plasser)

Hvis noen spør om pris, si at de bør ringe eller bruke bestillingsskjemaet for et uforpliktende tilbud.
Hvis du ikke vet svaret, oppfordre dem til å ringe 38 27 13 90 eller sende e-post til firmapost@elektro-sor.no.
Ikke svar på spørsmål som ikke har med Elektro Sør eller elektrofaget å gjøre.`;

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: "Ingen meldinger mottatt." }, { status: 400 });
    }

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Chatboten er ikke konfigurert ennå. Ring oss på 38 27 13 90." },
        { status: 503 }
      );
    }

    // Load system prompt from Sanity (falls back to default if not set)
    const chatSettings = await getChatSettings().catch(() => null);
    const systemPrompt = chatSettings?.systemPrompt || DEFAULT_SYSTEM_PROMPT;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: systemPrompt },
          ...messages.slice(-10), // max 10 meldinger i kontekst
        ],
        max_tokens: 400,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const err = await response.json().catch(() => ({}));
      console.error("OpenAI error:", err);
      return NextResponse.json(
        { error: "Tjenesten er midlertidig utilgjengelig. Ring 38 27 13 90." },
        { status: 502 }
      );
    }

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content ?? "Beklager, prøv igjen.";
    return NextResponse.json({ reply });
  } catch (err) {
    console.error("Chat API error:", err);
    return NextResponse.json(
      { error: "Noe gikk galt. Ring oss på 38 27 13 90." },
      { status: 500 }
    );
  }
}
