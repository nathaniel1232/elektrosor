// scripts/seed.mjs
// Laster inn eksisterende data til Sanity
// Kjør: node scripts/seed.mjs

import { createClient } from "@sanity/client";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Les .env.local manuelt
function loadEnv() {
  try {
    const envPath = join(__dirname, "../.env.local");
    const content = readFileSync(envPath, "utf8");
    content.split("\n").forEach((line) => {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) return;
      const eqIdx = trimmed.indexOf("=");
      if (eqIdx < 0) return;
      const key = trimmed.slice(0, eqIdx).trim();
      const val = trimmed.slice(eqIdx + 1).trim();
      if (!process.env[key]) process.env[key] = val;
    });
  } catch {
    // .env.local ikke funnet, bruker process.env
  }
}

loadEnv();

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const writeToken = process.env.SANITY_API_WRITE_TOKEN;

if (!projectId) {
  console.error("❌  Mangler NEXT_PUBLIC_SANITY_PROJECT_ID i .env.local");
  process.exit(1);
}

if (!writeToken) {
  console.error("❌  Mangler SANITY_API_WRITE_TOKEN i .env.local");
  console.error("");
  console.error("📋  Slik får du en write token:");
  console.error("   1. Gå til: https://www.sanity.io/manage/personal/project/" + projectId + "/api#tokens");
  console.error("   2. Trykk «Add API token»");
  console.error("   3. Gi den et navn (f.eks. «Seed script»), velg «Editor» tilgang");
  console.error("   4. Kopier tokenet");
  console.error("   5. Legg til i .env.local:  SANITY_API_WRITE_TOKEN=<token>");
  console.error("   6. Kjør skriptet på nytt: node scripts/seed.mjs");
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2025-04-28",
  token: writeToken,
  useCdn: false,
});

// ── Nettstedets innstillinger ──────────────────────────────────────────────
async function seedSiteSettings() {
  const existing = await client.fetch('*[_type == "siteSettings"][0]._id');
  if (existing) {
    console.log("ℹ️   Innstillinger finnes allerede – hopper over");
    return;
  }
  await client.createOrReplace({
    _id: "siteSettings",
    _type: "siteSettings",
    heroTitle: "Din lokale elektriker – rask og pålitelig",
    heroSubtitle:
      "Vi holder til i Mandal og utfører alt fra enkle hjemmeinstallasjoner til totale elektrotekniske prosjekter for industri og næringsliv.",
    phone: "38 27 13 90",
    email: "firmapost@elektro-sor.no",
    address: "Mikkelsmyrveien 4B, 4515 Mandal",
    openingHours: "Man–fre 07:00–15:00",
  });
  console.log("✅  Opprettet nettstedets innstillinger");
}

// ── AI-chatbot innstillinger ───────────────────────────────────────────────
async function seedChatSettings() {
  const existing = await client.fetch('*[_type == "chatSettings"][0]._id');
  if (existing) {
    console.log("ℹ️   AI-innstillinger finnes allerede – hopper over");
    return;
  }
  await client.createOrReplace({
    _id: "chatSettings",
    _type: "chatSettings",
    systemPrompt: `Du er en hjelpsom assistent for Elektro Sør AS, en lokal elektroentreprenør i Lindesnesregionen (Mandal/Spangereid).

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
Ikke svar på spørsmål som ikke har med Elektro Sør eller elektrofaget å gjøre.`,
    welcomeMessage: "Hei! Jeg er her for å hjelpe deg med spørsmål om Elektro Sør AS. Hva lurer du på? 😊",
  });
  console.log("✅  Opprettet AI-chatbot innstillinger");
}

// ── Kundeomtaler ───────────────────────────────────────────────────────────
async function seedTestimonials() {
  const existing = await client.fetch('count(*[_type == "testimonial"])');
  if (existing > 0) {
    console.log(`ℹ️   ${existing} anmeldelse(r) finnes allerede – hopper over`);
    return;
  }
  const testimonials = [
    {
      _type: "testimonial",
      name: "Marius Romedal",
      role: "Privatkunde",
      initials: "MR",
      rating: 5,
      text: "Veldig god service og de holder det de lover. Kjempefornøyd med kvalitet på produktene og utført jobb.",
      featured: true,
      order: 0,
    },
    {
      _type: "testimonial",
      name: "Ingrid Hansen",
      role: "Bedriftseier",
      initials: "IH",
      rating: 5,
      text: "Profesjonell gjeng som vet hva de gjør. Anbefaler sterkt til alle som trenger elektriker.",
      featured: true,
      order: 1,
    },
    {
      _type: "testimonial",
      name: "Johan Eriksen",
      role: "Næringsvirksomhet",
      initials: "JE",
      rating: 5,
      text: "Løste komplisert elektroproblem på kort tid. Ung, dyktig og pålitelig. Takk!",
      featured: true,
      order: 2,
    },
    {
      _type: "testimonial",
      name: "Maria Andersen",
      role: "Privatkunde",
      initials: "MA",
      rating: 5,
      text: "Ryddig, effektivt og gode priser. Vil absolutt bruke dem igjen.",
      featured: true,
      order: 3,
    },
  ];
  for (const t of testimonials) {
    await client.create(t);
    console.log(`✅  Opprettet anmeldelse: ${t.name}`);
  }
}

// ── Referanseprosjekter ────────────────────────────────────────────────────
async function seedReferanser() {
  const existing = await client.fetch('count(*[_type == "referanse"])');
  if (existing > 0) {
    console.log(`ℹ️   ${existing} referanse(r) finnes allerede – hopper over`);
    return;
  }
  const refs = [
    {
      _type: "referanse",
      title: "GE Healthcare",
      category: "industri",
      location: "Ramslandsvågen, Spangereid",
      description: "Utbygging av elektrisk anlegg ved fabrikker i Ramslandsvågen.",
      featured: true,
      order: 0,
    },
    {
      _type: "referanse",
      title: "Mandal Fengsel",
      category: "offentlig",
      location: "Mandal",
      description: "Elektrotekniske installasjoner i forbindelse med bygging av fengsel.",
      featured: true,
      order: 1,
    },
    {
      _type: "referanse",
      title: "Mandal Golfklubb",
      category: "naring",
      location: "Mandal",
      description: "Elektriske arbeider på klubbhus og anlegg.",
      featured: true,
      order: 2,
    },
  ];
  for (const r of refs) {
    await client.create(r);
    console.log(`✅  Opprettet referanse: ${r.title}`);
  }
}

// ── Sertifiseringer ────────────────────────────────────────────────────────
async function seedSertifiseringer() {
  const existing = await client.fetch('count(*[_type == "sertifisering"])');
  if (existing > 0) {
    console.log(`ℹ️   ${existing} sertifisering(er) finnes allerede – hopper over`);
    return;
  }
  const certs = [
    { _type: "sertifisering", name: "Registrert El-installatør", order: 0 },
    { _type: "sertifisering", name: "Godkjent lærebedrift", order: 1 },
    { _type: "sertifisering", name: "Registrert EKOM-installatør", order: 2 },
    { _type: "sertifisering", name: "Sertifisert KNX Partner", order: 3 },
    { _type: "sertifisering", name: "Godkjent for ansvarsrett", order: 4 },
  ];
  for (const c of certs) {
    await client.create(c);
    console.log(`✅  Opprettet sertifisering: ${c.name}`);
  }
}

// ── Main ───────────────────────────────────────────────────────────────────
async function main() {
  console.log("🌱  Starter datainnlasting til Sanity...\n");
  try {
    await seedSiteSettings();
    await seedChatSettings();
    await seedTestimonials();
    await seedReferanser();
    await seedSertifiseringer();
    console.log("\n✅  Ferdig! Alle data er nå i Sanity.");
    console.log("→  Åpne http://localhost:3000/studio for å redigere innholdet.");
    console.log("→  Husk å trykke «Publish» på hvert element i Studio for at det skal vises på nettsiden.");
  } catch (err) {
    console.error("\n❌  Feil under datainnlasting:", err.message);
    process.exit(1);
  }
}

main();
