import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ESG og bærekraft",
  description:
    "Elektro Sør AS sitt arbeid med miljø, sosiale forhold og forretningspraksis.",
};

export default function ESG() {
  return (
    <>
      <section className="bg-blue-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <h1 className="text-3xl sm:text-4xl font-bold">ESG og bærekraft</h1>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-10 text-gray-700">
        <div>
          <h2 className="font-semibold text-gray-900 mb-3">Miljø</h2>
          <ul className="list-disc list-inside space-y-1 text-sm leading-relaxed">
            <li>Kildesortering og levering av elektrisk avfall (EE-avfall)</li>
            <li>Energieffektive løsninger anbefales i alle prosjekter</li>
            <li>Vi installerer ladeinfrastruktur og solanlegg når kunden ønsker det</li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-gray-900 mb-3">Sosiale forhold</h2>
          <ul className="list-disc list-inside space-y-1 text-sm leading-relaxed">
            <li>Tariffavtale og ordnede lønns- og arbeidsvilkår</li>
            <li>Godkjent lærebedrift — vi tar inn nye lærlinger hvert år</li>
            <li>HMS-fokus og jevnlig opplæring</li>
            <li>Nulltoleranse for sosial dumping i leverandørkjeden</li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-gray-900 mb-3">Forretningspraksis</h2>
          <ul className="list-disc list-inside space-y-1 text-sm leading-relaxed">
            <li>Etterlevelse av lover og forskrifter</li>
            <li>Åpen kommunikasjon med kunder og samarbeidspartnere</li>
            <li>Rapportering i henhold til Åpenhetsloven</li>
          </ul>
        </div>
      </section>
    </>
  );
}
