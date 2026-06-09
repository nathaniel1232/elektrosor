import type { Metadata } from "next";
import JobApplicationForm from "@/components/JobApplicationForm";

export const metadata: Metadata = {
  title: "Karriere – ledige stillinger",
  description:
    "Elektro Sør søker industrielektrikere, serviceelektrikere og lærlinger i Mandalsregionen.",
};

type PositionId = "industri" | "service" | "laerling";

type Position = {
  id: PositionId;
  title: string;
  openings: number;
  tag: string;
  intro: string;
  tasks: string[];
  qualifications: string[];
  offers: string[];
};

const POSITIONS: Position[] = [
  {
    id: "industri",
    title: "Industrielektriker",
    openings: 2,
    tag: "Industri",
    intro:
      "Vi har et langvarig samarbeid med GE Healthcare i Spangereid. Nå trenger vi to industrielektrikere som ønsker en stabil hverdag med hovedbase på GE-anlegget.",
    tasks: [
      "Installasjon og service på industrianlegg",
      "Feilsøking i sensor- og styringssystemer",
      "Dokumentasjon",
      "Samarbeid med lærlinger",
    ],
    qualifications: [
      "Fagbrev som elektriker (Gr. L) eller automatiker",
      "Norsk eller engelsk muntlig og skriftlig",
      "Gjerne industrierfaring",
    ],
    offers: [
      "Fast stilling",
      "Konkurransedyktig lønn",
      "Variert arbeid og faglig utvikling",
      "Fast arbeidssted hos GE Healthcare",
    ],
  },
  {
    id: "service",
    title: "Serviceelektriker",
    openings: 2,
    tag: "Service",
    intro:
      "Bredt spekter av oppdrag — fra hjemmelader og belysning hos privatkunder til mindre næringsprosjekter. Du jobber i hele Lindesnesregionen.",
    tasks: [
      "Service og vedlikehold hos privat- og bedriftskunder",
      "Installasjoner",
      "Feilsøking og utbedring",
      "Mindre prosjektarbeid",
    ],
    qualifications: [
      "Fagbrev som elektriker (Gr. L)",
      "Førerkort klasse B",
      "Serviceinnstilt",
    ],
    offers: [
      "Fast stilling",
      "Moderne arbeidsverktøy",
      "Gode kollegaer",
    ],
  },
  {
    id: "laerling",
    title: "Elektrikerlærling",
    openings: 4,
    tag: "Lærling",
    intro:
      "Vi er godkjent lærebedrift og tar inn fire nye lærlinger. Du får erfaring fra både service og industri, og solid oppfølging gjennom læretiden.",
    tasks: [
      "Delta i installasjon og vedlikehold",
      "Assistere erfarne elektrikere",
      "Lære feilsøking og dokumentasjon",
      "Bidra til orden og sikkerhet på arbeidsplassen",
    ],
    qualifications: [
      "Fullført VG2 Elenergi og ekom",
      "Lærevillig og punktlig",
    ],
    offers: [
      "God oppfølging gjennom læretiden",
      "Erfaring fra industri (inkl. EX-miljø)",
      "Mulighet for fast jobb etter læretiden",
    ],
  },
];

export default function Karriere() {
  return (
    <>
      <section className="bg-blue-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <h1 className="text-3xl sm:text-4xl font-bold">Jobb hos oss</h1>
          <p className="text-blue-100 mt-2 max-w-xl">
            Vi har åtte ledige plasser akkurat nå. Søknader vurderes fortløpende.
            Spørsmål? Ring Eilef på{" "}
            <a href="tel:+4792457542" className="text-white underline">92 45 75 42</a>.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-12">
        {POSITIONS.map((p) => (
          <article key={p.id} className="border-t border-gray-200 pt-8">
            <div className="flex items-baseline justify-between gap-4 mb-3">
              <h2 className="text-xl font-bold text-gray-900">{p.title}</h2>
              <span className="text-xs text-gray-500">{p.openings} ledige · {p.tag}</span>
            </div>

            <p className="text-gray-700 leading-relaxed mb-5">{p.intro}</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 text-sm">
              <div>
                <p className="font-semibold text-gray-900 mb-2">Arbeidsoppgaver</p>
                <ul className="space-y-1 text-gray-700 list-disc list-inside">
                  {p.tasks.map((t) => <li key={t}>{t}</li>)}
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">Vi ser etter</p>
                <ul className="space-y-1 text-gray-700 list-disc list-inside">
                  {p.qualifications.map((q) => <li key={q}>{q}</li>)}
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">Vi tilbyr</p>
                <ul className="space-y-1 text-gray-700 list-disc list-inside">
                  {p.offers.map((o) => <li key={o}>{o}</li>)}
                </ul>
              </div>
            </div>

            <JobApplicationForm positionId={p.id} positionTitle={p.title} />
          </article>
        ))}
      </section>
    </>
  );
}
