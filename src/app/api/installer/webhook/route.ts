// Webhook-endepunkt for Installer.
//
// Installer kan sende tilstands-/workflow-oppdateringer tilbake hit (triggere som
// active, done, cancelled osv.). Payloaden er brukerdefinert via Handlebars-maler
// satt opp i Installer-dashbordet, så feltnavnene under er ikke garantert.
//
//   https://docs.installer.com/guides/webhooks
//
// MERK: Installer-dokumentasjonen beskriver foreløpig IKKE hvordan webhooks signeres
// (header-navn/algoritme). Vi verifiserer derfor kun hvis INSTALLER_WEBHOOK_SECRET er
// satt — og det bør først settes når signaturmetoden er bekreftet med Installer-support.
// Header-navn og format under er en kvalifisert gjetning inntil da. Hendelsen logges.

import { NextRequest, NextResponse } from "next/server";
import { createHmac, timingSafeEqual } from "crypto";

export async function POST(req: NextRequest) {
  const raw = await req.text();

  const secret = process.env.INSTALLER_WEBHOOK_SECRET;
  if (secret) {
    // De fleste systemer bruker en HMAC-SHA256-signatur i en header. Det eksakte
    // header-navnet og formatet må sjekkes mot Installer-doks — typiske navn:
    // "X-Installer-Signature", "X-Signature", "X-Hub-Signature-256".
    const provided =
      req.headers.get("x-installer-signature") ?? req.headers.get("x-signature") ?? "";
    const expected = createHmac("sha256", secret).update(raw).digest("hex");
    if (!safeEqual(provided.replace(/^sha256=/, ""), expected)) {
      return NextResponse.json({ error: "Ugyldig signatur." }, { status: 401 });
    }
  }

  let event: { type?: string; orderId?: string; status?: string } | null;
  try {
    event = JSON.parse(raw);
  } catch {
    return NextResponse.json({ error: "Ugyldig JSON." }, { status: 400 });
  }

  // Inntil vi har bekreftet datamodellen fra Installer logger vi bare hendelsen
  // slik at pappa kan se i Vercel-loggene at webhooken kommer fram.
  console.log("Installer webhook mottatt:", {
    type: event?.type,
    orderId: event?.orderId,
    status: event?.status,
  });

  return NextResponse.json({ received: true }, { status: 200 });
}

function safeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  try {
    return timingSafeEqual(Buffer.from(a), Buffer.from(b));
  } catch {
    return false;
  }
}
