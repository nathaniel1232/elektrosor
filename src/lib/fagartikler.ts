// Fagartikler — alt innholdet er definert her som enkle TypeScript-objekter.
// For å legge til en ny artikkel: kopier en eksisterende oppføring og endre feltene.
// `slug` blir URL-en (/fagartikler/<slug>) og må være unik.

export type Fagartikkel = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string; // YYYY-MM-DD
  author: string;
  readMinutes: number;
  // Innholdet skrives som en liste med blokker. Hver blokk er enten et avsnitt
  // (`p`), en mellomtittel (`h2`), eller en punktliste (`ul`).
  body: Block[];
};

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

export const FAGARTIKLER: Fagartikkel[] = [
  {
    slug: "slik-velger-du-riktig-elbillader-til-boligen",
    title: "Slik velger du riktig elbillader til boligen",
    description:
      "Hva du må tenke på før du installerer hjemmelader: kapasitet i sikringsskapet, lastbalansering, og hvilke ladere som passer for borettslag.",
    publishedAt: "2026-04-22",
    author: "Elektro Sør",
    readMinutes: 5,
    body: [
      {
        type: "p",
        text: "Mange tror at en hjemmelader er en hyllevare du bare kobler til veggen. Det stemmer ikke helt. Riktig lader avhenger av hvor mye strøm sikringsskapet kan levere, om du har enfas eller trefas inntak, og om laderen skal stå alene eller deles med naboer.",
      },
      {
        type: "h2",
        text: "Sjekk inntaket først",
      },
      {
        type: "p",
        text: "Eldre eneboliger har ofte enfas inntak med 63 A hovedsikring. Det holder til en lader på 3,7 kW eller 7,4 kW — som lader en moderne elbil fullt over natten. Trefas inntak gir mulighet for 11 kW eller 22 kW lading, men da må også laderen og bilen støtte det.",
      },
      {
        type: "h2",
        text: "Lastbalansering",
      },
      {
        type: "p",
        text: "Hvis du installerer flere ladere — for eksempel i et borettslag eller i en garasje med to biler — bør laderne kommunisere med hverandre. Da fordeles tilgjengelig strøm dynamisk slik at hovedsikringen ikke ryker når koketoppen og varmtvannsberederen går samtidig.",
      },
      {
        type: "h2",
        text: "Det praktiske",
      },
      {
        type: "ul",
        items: [
          "Plassering: helst tett på sikringsskapet for å unngå lange kabelstrekk.",
          "Type 2-kontakt er standard i Norge.",
          "Be om jordfeilautomat type B — den fanger feilstrøm som vanlige A-automater ikke ser.",
          "Velg en lader med app-styring hvis du vil utnytte timer eller spotpris.",
        ],
      },
      {
        type: "p",
        text: "Vi monterer både Easee, Zaptec og Defa, og hjelper deg med å velge ut fra hvordan du faktisk bruker bilen — ikke ut fra hvilken lader leverandøren har på lager.",
      },
    ],
  },
  {
    slug: "internkontroll-elektro-for-bedrifter",
    title: "Internkontroll elektro — hva må bedriften din ha på plass?",
    description:
      "Forskrift om elektriske lavspenningsanlegg krever dokumentert internkontroll. Her er en kort oversikt over hva som faktisk må være på plass.",
    publishedAt: "2026-03-10",
    author: "Elektro Sør",
    readMinutes: 4,
    body: [
      {
        type: "p",
        text: "Eier av et elektrisk anlegg har ansvaret for at anlegget er forsvarlig — også når noen andre faktisk bruker bygget. For bedrifter betyr det at internkontroll elektro må være dokumentert og oppdatert, ikke bare «utført».",
      },
      {
        type: "h2",
        text: "Hva DSB faktisk ser etter",
      },
      {
        type: "ul",
        items: [
          "Risikovurdering av det elektriske anlegget.",
          "Rutiner for hvordan feil og avvik meldes og lukkes.",
          "Logg over termografering, jordfeilmålinger og periodisk kontroll.",
          "Dokumentasjon på utførte endringer (samsvarserklæringer fra elektriker).",
        ],
      },
      {
        type: "h2",
        text: "Hvor ofte må man kontrollere?",
      },
      {
        type: "p",
        text: "Intervallene avhenger av type bygg og bruk. Kontor og butikk klarer seg ofte med fem års intervall, mens industri, landbruk og bygg med spesielle risikoer bør vurderes årlig. Termografering anbefales hvert år eller annethvert år for sentrale tavler.",
      },
      {
        type: "p",
        text: "Vi tar både kontrollen og dokumentasjonen, slik at du har en samlet mappe å vise frem ved tilsyn eller forsikringsoppgjør.",
      },
    ],
  },
];

export function getArticle(slug: string): Fagartikkel | undefined {
  return FAGARTIKLER.find((a) => a.slug === slug);
}

export function listArticles(): Fagartikkel[] {
  return [...FAGARTIKLER].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}
