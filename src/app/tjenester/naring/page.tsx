import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tjenester for næring og industri",
  description:
    "Elektro Sør leverer elektriske installasjoner, service og industriarbeid i Mandalsregionen.",
};

export default function TjenesterNaring() {
  return (
    <>
      <section className="bg-blue-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <h1 className="text-3xl sm:text-4xl font-bold">Næring og industri</h1>
          <p className="text-blue-100 mt-2 max-w-xl">
            Installasjoner og service for bedrifter, samt større industrioppdrag — inkludert
            arbeid i EX-miljø.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-12">
        <div>
          <h2 className="font-semibold text-gray-900 mb-3">Næring</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Vi tar oppdrag for butikker, kontor og mindre næringsbygg — fra enkle endringer i et
            eksisterende anlegg til komplette installasjoner i nybygg eller etter ombygging.
          </p>
          <ul className="text-sm text-gray-700 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5">
            <li>· Installasjoner og service</li>
            <li>· Belysning og LED-oppgradering</li>
            <li>· Sikringsanlegg</li>
            <li>· Lading til ansatte og kunder</li>
            <li>· Periodisk kontroll</li>
            <li>· Nødlys og brannvarsling</li>
          </ul>
        </div>

        <div id="industri">
          <h2 className="font-semibold text-gray-900 mb-3">Industri</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Vi har lang erfaring med industrianlegg, blant annet gjennom et langvarig samarbeid
            med <span className="font-medium text-gray-900">GE Healthcare</span> i Spangereid og
            elektroarbeider ved <span className="font-medium text-gray-900">Mandal Fengsel</span>.
          </p>
          <ul className="text-sm text-gray-700 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5">
            <li>· Sterkstrømsanlegg</li>
            <li>· Automasjon og styring</li>
            <li>· Feilsøking og service</li>
            <li>· EX-miljø</li>
            <li>· Dokumentasjon</li>
          </ul>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <p className="text-gray-700 mb-4">
            Skal du ha tilbud på et større prosjekt? Ta kontakt direkte — vi kommer gjerne på
            befaring.
          </p>
          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center bg-blue-900 hover:bg-blue-800 text-white font-medium px-5 py-2.5 rounded text-sm"
          >
            Be om tilbud
          </Link>
        </div>
      </section>
    </>
  );
}
