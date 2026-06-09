// Installer API-integrasjon.
//
// Bestillinger fra nettsiden sendes til Installer (https://installer.com) slik at de
// havner som en ordre i systemet deres. Offisiell dokumentasjon:
//
//   https://docs.installer.com/getting-started/authentication      (Bearer-token)
//   https://docs.installer.com/api-reference/v1/createApiV1Order    (felt-skjema)
//
// Autentisering: Authorization: Bearer <INSTALLER_API_KEY>
// Endepunkt:     POST https://api.installer.com/api/v1/order  (settes som INSTALLER_API_URL)
//
// Installer KREVER feltene email, phoneNumber, contactPersonName, address, city,
// postalCode og countryCode. I bestillingsskjemaet vårt er adresse/postnr/sted
// valgfritt — mangler de, kan vi ikke opprette en gyldig ordre, og vi hopper over
// videresendingen (bestillingen er uansett allerede lagret i Supabase). Det samme
// skjer hvis INSTALLER_API_URL/INSTALLER_API_KEY ikke er satt.

type Input = {
  name: string;
  email: string;
  phoneNumber: string;
  address: string | null;
  city: string | null;
  postalCode: string | null;
  serviceType: string | null;
  description: string;
  // Supabase-bestillingens id. Brukes som idempotency-nøkkel mot Installer slik at
  // en eventuell retry/dobbel innsending ikke oppretter to ordre.
  orderRef?: string | null;
};

export type InstallerResult =
  | { ok: true; orderId: string; displayId?: string; clientUrl?: string }
  | { ok: false; error: string }
  | { skipped: true; reason: string };

// ISO 3166-1 alpha-2. Elektro Sør opererer i Norge; skjemaet samler ikke inn land.
const DEFAULT_COUNTRY_CODE = "NO";

export async function createInstallerOrder(input: Input): Promise<InstallerResult> {
  const url = process.env.INSTALLER_API_URL;
  const apiKey = process.env.INSTALLER_API_KEY;

  if (!url || !apiKey) {
    return {
      skipped: true,
      reason: "INSTALLER_API_URL eller INSTALLER_API_KEY er ikke satt — hopper over.",
    };
  }

  // Installer krever full leveringsadresse. Mangler noe av den, kan vi ikke opprette
  // ordren — bestillingen er allerede trygt lagret i Supabase.
  if (!input.address || !input.city || !input.postalCode) {
    return {
      skipped: true,
      reason:
        "Mangler adresse/postnr/sted — Installer krever full adresse. Bestillingen er lagret i Supabase.",
    };
  }

  const payload = buildPayload(input);

  let res: Response;
  try {
    res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(payload),
      // Ikke cache — dette er en mutasjon.
      cache: "no-store",
    });
  } catch (e) {
    return { ok: false, error: `Nettverksfeil mot Installer: ${(e as Error).message}` };
  }

  // 409 = ordren finnes allerede (samme idempotencyKey). Det er ikke en feil — vi
  // henter ut den eksisterende ordre-id-en og regner det som vellykket.
  if (res.status === 409) {
    const conflict = (await res.json().catch(() => null)) as
      | { orderId?: string; displayId?: string }
      | null;
    if (conflict?.orderId) {
      return { ok: true, orderId: conflict.orderId, displayId: conflict.displayId };
    }
  }

  if (!res.ok) {
    const text = await safeText(res);
    return { ok: false, error: `Installer svarte ${res.status}: ${text.slice(0, 300)}` };
  }

  // 201 Created → { value: <uuid>, displayId, clientUrl }. Ordre-id-en ligger i `value`.
  const data = (await res.json().catch(() => null)) as
    | { value?: string; displayId?: string; clientUrl?: string }
    | null;
  if (!data?.value) {
    return { ok: false, error: "Installer svarte 2xx, men uten ordre-id (value)." };
  }
  return {
    ok: true,
    orderId: data.value,
    displayId: data.displayId,
    clientUrl: data.clientUrl,
  };
}

// Bygger JSON-payloaden for POST /api/v1/order.
// Feltnavn følger https://docs.installer.com/api-reference/v1/createApiV1Order
function buildPayload(input: Input) {
  return {
    // Påkrevde felt:
    email: input.email,
    phoneNumber: input.phoneNumber,
    contactPersonName: input.name,
    address: input.address,
    city: input.city,
    postalCode: input.postalCode,
    countryCode: DEFAULT_COUNTRY_CODE,
    // Valgfrie felt:
    name: input.serviceType ?? "Nettbestilling",
    description: input.description,
    // Valgfri arbeidsflyt — settes kun hvis Installer-kontoen krever en bestemt.
    workflowId: process.env.INSTALLER_WORKFLOW_ID || undefined,
    // Hindrer dobbel ordre ved retry. JSON.stringify dropper feltet hvis det er undefined.
    idempotencyKey: input.orderRef ?? undefined,
    metadata: {
      source: "elektrosor.no",
      ...(input.serviceType ? { serviceType: input.serviceType } : {}),
      ...(input.orderRef ? { supabaseId: input.orderRef } : {}),
    },
  };
}

async function safeText(res: Response): Promise<string> {
  try {
    return await res.text();
  } catch {
    return "<kunne ikke lese feilmelding>";
  }
}
