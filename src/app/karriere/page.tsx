import type { Metadata } from "next";
import { CheckIcon, PhoneIcon, EnvelopeIcon } from "@/components/Icons";
import { getJobPostings } from "@/sanity/queries";

export const metadata: Metadata = {
  title: "Karriere – Ledige stillinger",
  description:
    "Elektro Sør søker industrielektrikere, serviceelektrikere og lærlinger. Se ledige stillinger og søk jobb hos oss i Lindesnesregionen.",
};

// Fallback data used when Sanity is not yet configured
const FALLBACK_POSITIONS = [
  {
    id: "industri",
    title: "Industrielektriker",
    count: 2,
    badge: "Industri",
    badgeColor: "bg-blue-100 text-blue-800",
    email: "eilef+industri@elektro-sor.no",
    intro:
      "Elektro Sør er en lokal elektroentreprenør i Lindesnesregionen med høy fagkompetanse og solide industriprosjekter i porteføljen. Gjennom flere år har vi vært en viktig samarbeidspartner i arbeidet ved GE Healthcares fabrikker i Spangereid. Nå søker vi to dyktige industrielektrikere som ønsker en stabil arbeidshverdag med hovedbase på GE-anlegget.",
    tasks: [
      "Installasjon av elektriske anlegg i industri",
      "Feilsøking og service på elektriske industrisystemer",
      "Arbeid med automasjon, sensor- og styringssystemer",
      "Godt samarbeid med lærlinger",
      "Dokumentasjon av utført arbeid",
    ],
    qualifications: [
      "Fagbrev som elektriker (Gr. L) eller automatiker",
      "Gode norsk- eller engelskkunnskaper",
      "Gjerne erfaring fra industri",
    ],
    offers: [
      "Fast stilling i et solid selskap",
      "Konkurransedyktige betingelser",
      "Et godt og inkluderende arbeidsmiljø",
      "Varierte arbeidsoppgaver og faglig utvikling",
      "Fast arbeidssted med Elektro Sør hos GE Healthcare",
    ],
  },
  {
    id: "service",
    title: "Serviceelektriker",
    count: 2,
    badge: "Service",
    badgeColor: "bg-red-100 text-red-800",
    email: "eilef+service@elektro-sor.no",
    intro:
      "Elektro Sør leverer elektrotjenester til både privatpersoner, næringsliv og offentlige virksomheter. Våre serviceelektrikere jobber med et bredt spekter av oppdrag – fra installasjon av belysning og elbilladere i private hjem til oppdrag for bedrifter og mindre næringsprosjekter.",
    tasks: [
      "Service og vedlikehold hos privat- og bedriftskunder",
      "Installasjon av elektriske anlegg",
      "Feilsøking og utbedring",
      "Mindre prosjektarbeid",
      "Godt samarbeid med lærlinger",
      "Dokumentasjon og rapportering",
    ],
    qualifications: [
      "Fagbrev som elektriker (Gr. L)",
      "Erfaring fra servicearbeid er en fordel",
      "Serviceinnstilt og løsningsorientert",
      "Førerkort klasse B",
      "Gode kommunikasjonsevner",
    ],
    offers: [
      "Fast stilling",
      "Konkurransedyktig lønn",
      "Et solid selskap som satser på moderne og digitale arbeidsverktøy",
      "Et godt arbeidsmiljø med dyktige kollegaer",
    ],
  },
  {
    id: "laerling",
    title: "Elektrikerlærling",
    count: 4,
    badge: "Lærling",
    badgeColor: "bg-green-100 text-green-800",
    email: "eilef+laerling@elektro-sor.no",
    intro:
      "Hos Elektro Sør får du være med på et bredt spekter av oppgaver og lære elektrofaget i praksis sammen med erfarne elektrikere. Vi forsetter satsingen på fremtidens elektrikere og søker nå fire motiverte lærlinger. Hos oss vil du få unik erfaring fra både industri og service.",
    tasks: [
      "Delta i installasjon og vedlikehold av elektriske anlegg",
      "Bidra til orden og sikkerhet på arbeidsplassen",
      "Assistere erfarne elektrikere i prosjekter",
      "Lære feilsøking og dokumentasjon",
    ],
    qualifications: [
      "Fullført VG2 Elenergi og ekom",
      "Interesse for elektrofaget",
      "Lærevillig og positiv innstilling",
      "Punktlig og ansvarsfull",
    ],
    offers: [
      "God oppfølging gjennom læretiden",
      "Et trygt og inkluderende arbeidsmiljø",
      "Unik erfaring med industri og arbeid i EX-miljø",
      "Et solid selskap som satser på moderne og digitale arbeidsverktøy",
      "Variert praksis og faglig utvikling",
      "Mulighet for fast jobb etter læretiden",
    ],
  },
];

// Map Sanity category value to badge display info
const BADGE_MAP: Record<string, { label: string; color: string }> = {
  industri: { label: "Industri", color: "bg-blue-100 text-blue-800" },
  service: { label: "Service", color: "bg-red-100 text-red-800" },
  laerling: { label: "Lærling", color: "bg-green-100 text-green-800" },
  prosjekt: { label: "Prosjekt", color: "bg-purple-100 text-purple-800" },
  annet: { label: "Annet", color: "bg-gray-100 text-gray-800" },
};

type Position = {
  _id?: string;
  id?: string;
  title: string;
  openings?: number;
  count?: number;
  category?: string;
  badge?: string;
  badgeColor?: string;
  contactEmail?: string;
  email?: string;
  contactName?: string;
  contactPhone?: string;
  deadline?: string;
  intro?: string;
  tasks?: string[];
  qualifications?: string[];
  offers?: string[];
};

export default async function Karriere() {
  let positions: Position[] = [];
  try {
    const sanityJobs = await getJobPostings();
    positions = sanityJobs?.length ? sanityJobs : FALLBACK_POSITIONS;
  } catch {
    positions = FALLBACK_POSITIONS;
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-blue-900 text-white py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block bg-red-600 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            Bli en av oss
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">
            Jobb hos <span className="text-red-400">Elektro Sør</span>
          </h1>
          <p className="text-blue-200 text-lg max-w-xl leading-relaxed">
            Vi søker dyktige fagpersoner til industriprosjekter og serviceoppdrag i Lindesnesregionen. Se ledige stillinger nedenfor.
          </p>
        </div>
      </section>

      {/* Benefits strip */}
      <section className="bg-blue-50 border-y border-blue-100 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { label: "Konkurransedyktig lønn" },
              { label: "Faglig utvikling" },
              { label: "Godt arbeidsmiljø" },
              { label: "Fast stilling" },
            ].map((b) => (
              <div key={b.label} className="bg-white rounded-xl py-4 px-3 border border-blue-100">
                <div className="font-semibold text-blue-900 text-sm">{b.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Positions */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <p className="text-sm text-gray-500 text-center">
            {positions[0]?.deadline
              ? <><strong>{positions[0].deadline}</strong> – søknader vurderes fortløpende. </>
              : <>Søknader vurderes fortløpende. </>
            }
            Spørsmål? Ring{" "}
            <strong>{positions[0]?.contactName ?? "Eilef Fiskå"}</strong> på{" "}
            <a
              href={`tel:+47${(positions[0]?.contactPhone ?? "92 45 75 42").replace(/\s/g, "")}`}
              className="text-blue-800 hover:underline"
            >
              {positions[0]?.contactPhone ?? "92 45 75 42"}
            </a>.
          </p>

          {positions.map((p) => {
            const key = p._id ?? p.id ?? p.title;
            const openings = p.openings ?? p.count ?? 1;
            const email = p.contactEmail ?? p.email ?? "firmapost@elektro-sor.no";
            const badgeInfo = BADGE_MAP[p.category ?? ""] ?? {
              label: p.badge ?? "",
              color: p.badgeColor ?? "bg-gray-100 text-gray-800",
            };
            return (
              <div key={key} className="bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden">
                {/* Card header */}
                <div className="bg-blue-900 text-white px-6 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-xs font-bold uppercase tracking-wide px-2 py-0.5 rounded-full ${badgeInfo.color}`}>
                        {badgeInfo.label}
                      </span>
                      <span className="text-xs text-blue-300">Fast stilling</span>
                    </div>
                    <h2 className="text-xl font-extrabold">{p.title}</h2>
                    <p className="text-blue-300 text-sm mt-0.5">{openings} stilling{openings !== 1 ? "er" : ""} ledig</p>
                  </div>
                  <a
                    href={`mailto:${email}`}
                    className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-5 py-2.5 rounded-full text-sm transition-colors whitespace-nowrap"
                  >
                    <EnvelopeIcon className="w-4 h-4" />
                    Søk stilling
                  </a>
                </div>

                {/* Card body */}
                <div className="px-6 py-6 space-y-6">
                  {p.intro && <p className="text-gray-600 leading-relaxed">{p.intro}</p>}

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {p.tasks && p.tasks.length > 0 && (
                      <div>
                        <h3 className="font-bold text-sm uppercase tracking-wide mb-3 text-blue-900">Arbeidsoppgaver</h3>
                        <ul className="space-y-1.5">
                          {p.tasks.map((t) => (
                            <li key={t} className="flex items-start gap-2 text-sm text-gray-700">
                              <CheckIcon className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                              {t}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {p.qualifications && p.qualifications.length > 0 && (
                      <div>
                        <h3 className="font-bold text-sm uppercase tracking-wide mb-3 text-blue-900">Kvalifikasjoner</h3>
                        <ul className="space-y-1.5">
                          {p.qualifications.map((q) => (
                            <li key={q} className="flex items-start gap-2 text-sm text-gray-700">
                              <CheckIcon className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                              {q}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {p.offers && p.offers.length > 0 && (
                      <div>
                        <h3 className="font-bold text-sm uppercase tracking-wide mb-3 text-blue-900">Vi tilbyr</h3>
                        <ul className="space-y-1.5">
                          {p.offers.map((o) => (
                            <li key={o} className="flex items-start gap-2 text-sm text-gray-700">
                              <CheckIcon className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                              {o}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="border-t border-gray-200 pt-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-sm text-gray-500">
                    <p>
                      Vi ønsker et inkluderende og mangfoldig arbeidsmiljø, og oppfordrer alle kvalifiserte kandidater til å søke.
                    </p>
                    <a
                      href={`mailto:${email}`}
                      className="flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold whitespace-nowrap"
                    >
                      <EnvelopeIcon className="w-4 h-4" />
                      {email}
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-blue-900 text-white py-14">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-extrabold mb-2">Spørsmål om stillingene?</h2>
          <p className="text-blue-200 mb-6">Ta direkte kontakt med daglig leder Eilef Fiskå.</p>
          <a
            href="tel:+4792457542"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-7 py-3 rounded-full transition-colors"
          >
            <PhoneIcon className="w-5 h-5" />
            Ring 92 45 75 42
          </a>
        </div>
      </section>
    </>
  );
}

