import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Om oss",
  description:
    "Elektro Sør AS er en lokal elektroentreprenør i Mandal. Godkjent lærebedrift og NELFO-medlem.",
};

export default function OmOss() {
  return (
    <>
      <section className="bg-blue-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <h1 className="text-3xl sm:text-4xl font-bold">Om Elektro Sør</h1>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-5 text-gray-700 leading-relaxed">
        <p>
          Elektro Sør AS er en elektroentreprenør med kontor og lager i Mikkelsmyrveien 4B på
          Skinsnes i Mandal. Vi tar oppdrag for privatpersoner, bedrifter og industri i
          Lindesnesregionen.
        </p>
        <p>
          Vi er en relativt liten virksomhet med korte beslutningsveier. Du snakker som regel med
          den samme personen fra første henvendelse til oppdraget er ferdig. Det er en bevisst
          måte å jobbe på — vi tror det gir bedre resultater enn å sette enkeltkunder på en
          callsenter-kø.
        </p>
        <p>
          Daglig leder er Eilef Fiskå. Han kan nås på{" "}
          <a href="tel:+4792457542" className="text-blue-900 underline">92 45 75 42</a> for
          spørsmål rundt prosjekter og samarbeid.
        </p>
      </section>

      <section className="bg-gray-50 border-y border-gray-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="font-semibold text-gray-900 mb-4">Selskapsinformasjon</h2>
          <dl className="text-sm divide-y divide-gray-200 border-y border-gray-200">
            {[
              ["Selskapsnavn", "Elektro Sør AS"],
              ["Org.nr.", "985 022 036"],
              ["Adresse", "Mikkelsmyrveien 4B, 4515 Mandal"],
              ["Telefon", "38 27 13 90"],
              ["E-post", "firmapost@elektro-sor.no"],
              ["Daglig leder", "Eilef Fiskå"],
            ].map(([k, v]) => (
              <div key={k} className="flex py-3">
                <dt className="w-36 text-gray-500">{k}</dt>
                <dd className="text-gray-900">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <Link href="/sertifiseringer" className="text-blue-900 hover:underline">Sertifiseringer →</Link>
          <Link href="/karriere" className="text-blue-900 hover:underline">Jobb hos oss →</Link>
          <Link href="/apenhetsloven" className="text-blue-900 hover:underline">Åpenhetsloven →</Link>
          <Link href="/esg" className="text-blue-900 hover:underline">ESG og bærekraft →</Link>
        </div>
      </section>
    </>
  );
}
