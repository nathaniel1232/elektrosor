import { NextRequest, NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";
import { LIMITS, email as parseEmail, isHoneypotTriggered, optStr, str } from "@/lib/validation";
import { rateLimit } from "@/lib/ratelimit";

export async function POST(req: NextRequest) {
  const rl = rateLimit(req, { key: "contact", limit: 5, windowMs: 60_000 });
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

  const firstName = str(body.firstName, LIMITS.name);
  const emailValue = parseEmail(body.email);
  const message = str(body.message, LIMITS.message);

  if (!firstName || !emailValue || !message) {
    return NextResponse.json({ error: "Mangler eller ugyldige felt." }, { status: 400 });
  }

  const supabase = getSupabase();
  if (!supabase) {
    return NextResponse.json(
      { error: "Meldingen kunne ikke sendes. Ring oss på 38 27 13 90." },
      { status: 503 }
    );
  }

  const { error } = await supabase.from("contact_message").insert({
    first_name: firstName,
    last_name: optStr(body.lastName, LIMITS.name),
    email: emailValue,
    message,
  });

  if (error) {
    console.error("Contact insert failed:", error.message);
    return NextResponse.json({ error: "Kunne ikke sende meldingen." }, { status: 500 });
  }

  return NextResponse.json({ ok: true }, { status: 201 });
}
