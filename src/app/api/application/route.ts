import { NextRequest, NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";
import { LIMITS, email as parseEmail, isHoneypotTriggered, optStr, str } from "@/lib/validation";
import { rateLimit } from "@/lib/ratelimit";

const VALID_POSITIONS = new Set(["industri", "service", "laerling"]);

export async function POST(req: NextRequest) {
  const rl = rateLimit(req, { key: "application", limit: 5, windowMs: 60_000 });
  if (!rl.ok) {
    return NextResponse.json(
      { error: "For mange forespørsler. Prøv igjen om litt." },
      { status: 429, headers: { "Retry-After": String(rl.retryAfterSec) } }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Ugyldig forespørsel." }, { status: 400 });
  }

  if (isHoneypotTriggered(body)) {
    return NextResponse.json({ ok: true }, { status: 201 });
  }

  const positionId = str(body.positionId, LIMITS.positionId);
  const positionTitle = str(body.positionTitle, LIMITS.positionTitle);
  const name = str(body.name, LIMITS.name);
  const emailValue = parseEmail(body.email);

  if (!positionId || !VALID_POSITIONS.has(positionId) || !positionTitle || !name || !emailValue) {
    return NextResponse.json({ error: "Mangler eller ugyldige felt." }, { status: 400 });
  }

  const supabase = getSupabase();
  if (!supabase) {
    return NextResponse.json(
      { error: "Søknaden kunne ikke sendes. Ring Eilef på 92 45 75 42." },
      { status: 503 }
    );
  }

  const { error } = await supabase.from("job_application").insert({
    position_id: positionId,
    position_title: positionTitle,
    name,
    email: emailValue,
    phone: optStr(body.phone, LIMITS.phone),
    message: optStr(body.message, LIMITS.message),
  });

  if (error) {
    console.error("Application insert failed:", error.message);
    return NextResponse.json({ error: "Kunne ikke sende søknaden." }, { status: 500 });
  }

  return NextResponse.json({ ok: true }, { status: 201 });
}
