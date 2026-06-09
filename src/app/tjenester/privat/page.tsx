import type { Metadata } from "next";
import Link from "next/link";
import { PhoneIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Tjenester for privatpersoner",
  description:
    "Vi gjør elektriske installasjoner, sikringsskap, elbillader, smarthus og termografering for privatkunder i Mandalsregionen.",
};

const services = [
  {
    title: "Installasjoner",
    desc: "Stikkontakter, kurser, belysning ute og inne, kjøkken og bad. Både nybygg, renovering og enkle reparasjoner.",
  },
  {
    title: "Sikringsskap",
    desc: "Bytte fra gamle skrusikringer, jordfeilbryter, overspenningsvern og kapasitetsutvidelse. Tryggere anlegg og bedre forsikringsdekning.",
  },
  {
    title: "Elbillader",
    desc: "Godkjent installasjon av hjemmelader. Vi hjelper med valg av modell og dimensjonering av kursen.",
  },
  {
    title: "Varme og smarthus",
    desc: "Gulvvarme, termostater, smart belysning og styringssystemer. Vi installerer og setter opp så det faktisk fungerer.",
  },
  {
    id: "termografi",
    title: "Elektrotermografering",
    desc: "Vi avdekker varmegang og feil i anlegg før det blir et problem. Forsikringsselskaper gir ofte rabatt ved jevnlig termografering.",
  },
];

export default function TjenesterPrivat() {
  return (
    <>
      <section className="bg-blue-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <h1 className="text-3xl sm:text-4xl font-bold">Tjenester for hjemmet</h1>
          <p className="text-blue-100 mt-2 max-w-xl">
            Alt det elektriske i boligen — fra én ny stikkontakt til full renovering.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="divide-y divide-gray-200 border-y border-gray-200">
          {services.map((s) => (
            <div key={s.title} id={s.id} className="py-6">
              <h2 className="font-semibold text-gray-900 mb-2">{s.title}</h2>
              <p className="text-gray-700 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <Link
            href="/bestilling"
            className="inline-flex items-center justify-center bg-blue-900 hover:bg-blue-800 text-white font-medium px-5 py-2.5 rounded text-sm"
          >
            Bestill elektriker
          </Link>
          <a
            href="tel:+4738271390"
            className="inline-flex items-center justify-center gap-2 border border-gray-300 hover:border-gray-400 text-gray-900 font-medium px-5 py-2.5 rounded text-sm"
          >
            <PhoneIcon className="w-4 h-4" />
            38 27 13 90
          </a>
        </div>
      </section>
    </>
  );
}
