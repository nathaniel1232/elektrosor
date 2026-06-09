# Installer-integrasjon — status og hva som gjenstår

Nettsiden er nå koblet til Installer. Bestillinger fra nettsiden opprettes som ordre
i Installer via API-et deres, og lagres **alltid** i Supabase først — så ingen
henvendelser går tapt selv om Installer-kallet skulle feile.

Dokumentasjon: https://docs.installer.com

## ✅ Det som er gjort og verifisert

- **Endepunkt:** `POST https://api.installer.com/api/v1/order`
- **Autentisering:** `Authorization: Bearer <nøkkel>` — testnøkkelen er lagt inn lokalt
  i `.env.local`, og et test-kall mot Installer ga `HTTP 200` (nøkkelen er gyldig).
- **Feltene** som sendes (e-post, telefon, kontaktperson, adresse, postnr, sted,
  landkode `NO`, beskrivelse m.m.) følger Installers offisielle ordre-skjema.
- Ved suksess lagres Installer sin ordre-id i Supabase-kolonnen `installer_order_id`.

## ⚠️ 1 — Adresse er valgfritt i skjemaet (viktig å bestemme)

Installer **krever** full adresse (gate, postnr, sted) for å opprette en ordre.
I bestillingsskjemaet er disse feltene i dag **valgfrie**. Konsekvens:

- Bestillinger **med** full adresse → sendes automatisk til Installer.
- Bestillinger **uten** adresse → lagres i Supabase, men sendes **ikke** videre
  (det logges hvorfor). Dere må da legge dem inn i Installer manuelt.

**Valg:** Vil dere at *alle* bestillinger skal gå rett til Installer, bør adresse,
postnr og sted gjøres obligatoriske i skjemaet. Si fra, så ordner jeg det (5 min).

## 🔑 2 — Produksjonsnøkkel i Vercel

Nøkkelen i `.env.local` (testnøkkelen «test2») gjelder bare lokalt på maskinen.
For at det skal virke på den publiserte siden:

1. Åpne Vercel-prosjektet → **Settings → Environment Variables**
2. Legg til:
   - `INSTALLER_API_URL` = `https://api.installer.com/api/v1/order`
   - `INSTALLER_API_KEY` = nøkkelen fra Installer (helst en egen **produksjonsnøkkel**,
     ikke testnøkkelen)
3. Trykk **Redeploy** på siste deploy.

> Tips: lag gjerne en egen produksjonsnøkkel i Installer, så testnøkkelen kan brukes
> til testing uten å påvirke ekte ordre.

## 🗄️ 3 — Database-kolonnen må finnes

Migrasjonen `supabase/migrations/20260519000000_add_installer_order_id.sql` legger til
kolonnen som lagrer Installer sin ordre-id. Kjør Supabase-migrasjonene, eller kjør
manuelt i Supabase → SQL Editor:

```sql
alter table public.bestilling
  add column if not exists installer_order_id text;
```

## 🔔 4 — Webhook (status tilbake fra Installer) — valgfritt

Hvis Installer skal sende statusoppdateringer tilbake (f.eks. «ordre fullført»), gi
dem denne URL-en:

```
https://www.elektrosor.no/api/installer/webhook
```

**Merk:** Installer-dokumentasjonen beskriver foreløpig ikke *hvordan* webhooks
signeres (header-navn/algoritme). Inntil det er bekreftet med Installer-support lar
vi `INSTALLER_WEBHOOK_SECRET` stå tom — da tar ruten imot og logger hendelsen uten
signatursjekk. Når dere får signaturdetaljene fra support, si fra, så ferdigstiller
jeg verifiseringen.

## Hva skjer hvis noe feiler?

- **Bestillingen lagres alltid i Supabase først** — kunden får aldri en feilmelding.
- **Feil mot Installer logges** i Vercel → Logs (søk på «Installer»).
- Vellykkede ordre får `installer_order_id` fylt inn i Supabase.
