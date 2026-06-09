# Supabase-oppsett — guide til pappa

Hei! Denne guiden tar deg gjennom alt du trenger å gjøre for å koble nettsiden til Supabase, slik at bestillinger, kontaktskjema, jobbsøknader og chat-samtaler blir lagret et trygt sted som du eier.

**Tid:** ca. 20–30 minutter. Du trenger bare nettleser og en e-postadresse.

---

## Hva er Supabase?

En tjeneste som lagrer data for nettsiden. Tenk på det som en database i skyen. Gratisversjonen holder lenge for Elektro Sør.

---

## Steg 1 — Opprett konto

1. Gå til **https://supabase.com**
2. Klikk **Start your project** (oppe til høyre).
3. Velg **Sign in with GitHub** hvis du har konto der — ellers **Sign up with email** og lag en ny.
4. Bekreft e-posten du fikk fra Supabase.

---

## Steg 2 — Opprett et prosjekt

1. Etter innlogging havner du på dashbordet. Klikk **New project**.
2. Hvis det spør om "Organization": lag en ny med navnet ditt eller "Elektro Sør". Velg gratisplanen (**Free**).
3. Fyll ut:
   - **Name:** `elektro-sor`
   - **Database Password:** klikk **Generate a password** — *kopier passordet og lim det inn et trygt sted (f.eks. en notatfil på maskinen)*. Du trenger det ikke daglig, men det er greit å ha.
   - **Region:** velg **North EU (Stockholm)** eller **West EU (Ireland)** — det som er nærmest.
   - **Pricing Plan:** Free.
4. Klikk **Create new project**.
5. Vent ca. 1–2 minutter mens prosjektet settes opp.

---

## Steg 3 — Lag tabellene (kjør SQL-en)

Vi har en ferdig SQL-fil som lager alle tabellene som trengs. Du trenger bare å lime den inn og trykke "Run".

1. I venstre menyen, klikk **SQL Editor** (ikonet som ser ut som et terminalvindu, kalt "SQL").
2. Klikk **+ New query** (eller "New snippet").
3. Åpne filen **`supabase/schema.sql`** i prosjektmappen på maskinen (eller spør sønnen din om å sende den).
4. Marker alt innholdet (Ctrl+A / Cmd+A), kopier (Ctrl+C / Cmd+C).
5. Lim inn i Supabase SQL Editor (Ctrl+V / Cmd+V).
6. Klikk den grønne **Run**-knappen nederst til høyre.
7. Du skal få meldingen "Success. No rows returned" — det er riktig svar.

Nå har du fire tabeller: `bestilling`, `contact_message`, `job_application`, `chat_conversation`.

---

## Steg 4 — Finn frem to nøkler

Disse to verdiene må gis til den som setter opp nettsiden (Vercel).

1. I venstre meny, klikk tannhjul-ikonet (**Project Settings**) nederst.
2. Klikk **API** i undermenyen.
3. På siden ser du to ting du trenger:

   **a) Project URL** — under "Project URL". Ser ut som:
   ```
   https://abcdefghijklmn.supabase.co
   ```
   Kopier denne.

   **b) Service role key** — under "Project API keys". Det er en lang tekst som starter med `eyJ…`.
   
   **VIKTIG:** klikk på "Reveal" for å se hele. Det er **service_role**-nøkkelen vi skal ha — *ikke* "anon public".
   
   Kopier denne også.

   ⚠️ **Service-role-nøkkelen er som et hovedpassord.** Ikke send den i e-post eller chat som lagres. Bruk f.eks. Signal, Bitwarden Send, eller bare gi den muntlig over telefon. Hvis du er usikker — sett den rett inn i Vercel selv (steg 6).

---

## Steg 5 — Inviter sønnen din som "Developer"

Slik kan han hjelpe deg uten at du må gi fra deg eierskapet.

1. Klikk tannhjul-ikonet → **Team** (eller **Members**).
2. Klikk **Invite member**.
3. Skriv inn e-posten hans.
4. Velg rolle **Developer** (han får jobbe med databasen, men ikke slette prosjektet eller endre fakturering).
5. Klikk **Send invite**.

Han får en e-post med en lenke han må klikke for å bli med.

---

## Steg 6 — Sett nøklene inn i Vercel

Når nettsiden ligger på Vercel, må Vercel vite hvor Supabase er.

1. Gå til **https://vercel.com** og logg inn.
2. Klikk på prosjektet (heter sannsynligvis `elektrosor` eller lignende).
3. Klikk **Settings** øverst → **Environment Variables** i venstre meny.
4. Legg til disse to (én av gangen):

   | Name | Value |
   |---|---|
   | `NEXT_PUBLIC_SUPABASE_URL` | Project URL fra steg 4a |
   | `SUPABASE_SERVICE_ROLE_KEY` | Service role-nøkkelen fra steg 4b |

   For hver: lim inn navn og verdi, kryss av **Production**, **Preview** og **Development**, klikk **Save**.

5. Når begge er lagt til: gå til **Deployments** øverst, finn den nyeste, klikk på de tre prikkene (`⋯`) → **Redeploy**. Nettsiden bygges på nytt med de nye nøklene.

---

## Steg 7 — Sjekk at det fungerer

1. Åpne nettsiden (f.eks. `https://elektrosor.no/bestilling`).
2. Fyll ut bestillingsskjemaet med testdata og send inn.
3. Gå tilbake til Supabase, klikk **Table Editor** i venstre meny.
4. Klikk på tabellen `bestilling`. Du skal se en ny rad med testen din.

Hvis du ser raden — alt fungerer. 🎉

---

## Hvor ser du innkomne henvendelser?

I Supabase, klikk **Table Editor** i venstre meny. Der har du:

- **`bestilling`** — alle bestillinger fra `/bestilling`-skjemaet
- **`contact_message`** — meldinger fra kontaktskjemaet på `/kontakt`
- **`job_application`** — jobbsøknader fra `/karriere`
- **`chat_conversation`** — alt folk har skrevet til chatboten

Du kan sortere etter `created_at` (nyest øverst) ved å klikke på den kolonneoverskriften.

---

## Hvis noe går galt

- **"Success" i SQL Editor men ingen tabeller:** klikk **Table Editor** og oppdater siden — de skal dukke opp.
- **Skjemaet sier "Bestillingen kunne ikke lagres":** sjekk at nøklene i Vercel stemmer (Settings → Environment Variables). Husk redeploy etter endring.
- **Du har glemt nøklene:** de finnes alltid igjen under Project Settings → API.

---

## Hva koster det?

Gratisplanen i Supabase gir:
- 500 MB lagring
- 2 GB datatrafikk per måned
- Ubegrenset antall API-kall

Det rekker for tusenvis av bestillinger og chat-samtaler i måneden. Hvis dere noen gang nærmer dere taket, sender Supabase varsel.

---

Spørsmål? Si fra til sønnen din. Han har hovedguiden og koden — denne fila er bare for å forklare hva du skal gjøre.
