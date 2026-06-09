import { NextRequest, NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";
import { LIMITS, email as parseEmail, isHoneypotTriggered, optStr, str } from "@/lib/validation";
import { rateLimit } from "@/lib/ratelimit";
import { createInstallerOrder } from "@/lib/installer";

export async function POST(req: NextRequest) {
  const rl = rateLimit(req, { key: "bestilling", limit: 5, windowMs: 60_000 });
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

  // Silently accept honeypot-triggered submissions to avoid telling bots they're caught.
  if (isHoneypotTriggered(body)) {
    return NextResponse.json({ ok: true }, { status: 201 });
  }

  const name = str(body.name, LIMITS.name);
  const emailValue = parseEmail(body.email);
  const phoneNumber = str(body.phoneNumber, LIMITS.phone);
  const description = str(body.description, LIMITS.description);
  // Installer krever full adresse, så disse er nå påkrevd (også server-side, ikke
  // bare via `required` i skjemaet — klient-validering kan omgås).
  const address = str(body.address, LIMITS.address);
  const city = str(body.city, LIMITS.city);
  const postalCode = str(body.postalCode, LIMITS.postalCode);

  if (!name || !emailValue || !phoneNumber || !description || !address || !city || !postalCode) {
    return NextResponse.json({ error: "Mangler eller ugyldige felt." }, { status: 400 });
  }

  const supabase = getSupabase();
  if (!supabase) {
    return NextResponse.json(
      { error: "Bestillingen kunne ikke lagres. Ring oss på 38 27 13 90." },
      { status: 503 }
    );
  }

  const serviceType = optStr(body.serviceType, LIMITS.serviceType);

  const { data, error } = await supabase
    .from("bestilling")
    .insert({
      name,
      email: emailValue,
      phone_number: phoneNumber,
      address,
      city,
      postal_code: postalCode,
      service_type: serviceType,
      description,
    })
    .select("id")
    .single();

  if (error) {
    console.error("Bestilling insert failed:", error.message);
    return NextResponse.json(
      { error: "Kunne ikke lagre bestillingen. Prøv igjen eller ring 38 27 13 90." },
      { status: 500 }
    );
  }

  // Send videre til Installer. Vi feiler IKKE bestillingen om dette feiler — den
  // er allerede lagret i Supabase, så pappa kan ringe kunden manuelt. Feilen
  // logges i serverloggen så vi kan rydde opp etterpå.
  const installer = await createInstallerOrder({
    name,
    email: emailValue,
    phoneNumber,
    address,
    city,
    postalCode,
    serviceType,
    description,
    orderRef: data.id,
  });

  if ("ok" in installer && installer.ok) {
    await supabase
      .from("bestilling")
      .update({ installer_order_id: installer.orderId })
      .eq("id", data.id);
    console.log(
      "Installer-ordre opprettet:",
      installer.displayId ?? installer.orderId,
      installer.clientUrl ?? ""
    );
  } else if ("ok" in installer && !installer.ok) {
    console.error("Installer-ordre feilet:", installer.error, "bestilling id:", data.id);
  } else if ("skipped" in installer) {
    console.info("Installer-videresending hoppet over:", installer.reason, "bestilling id:", data.id);
  }

  return NextResponse.json({ ok: true, id: data.id }, { status: 201 });
}
