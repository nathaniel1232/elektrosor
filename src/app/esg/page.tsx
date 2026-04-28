import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ESG og bærekraft",
  description:
    "Elektro Sør AS sitt arbeid med miljø, sosiale forhold og god selskapsstyring (ESG og bærekraft).",
};

export default function ESG() {
  return (
    <>
      <section className="bg-blue-900 text-white py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block bg-red-600 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            Ansvar
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">ESG og bærekraft</h1>
          <p className="text-blue-200 text-lg max-w-xl leading-relaxed">
            Vi tar ansvar – for miljøet, for menneskene og for god forretningspraksis.
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* E */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 rounded-full bg-blue-100 text-blue-900 flex items-center justify-center font-extrabold text-lg">E</span>
              <h2 className="text-xl font-extrabold text-blue-900">Miljø (Environment)</h2>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 space-y-3 text-gray-600 text-sm leading-relaxed">
              <p>Vi jobber aktivt for å redusere vår miljøpåvirkning. Dette gjør vi blant annet gjennom:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Kildesortering og riktig håndtering av elektrisk avfall (EE-avfall)</li>
                <li>Valg av energieffektive løsninger i alle prosjekter</li>
                <li>Bruk av elektriske kjøretøy i vår servicebilpark</li>
                <li>Å bidra til installasjon av sol og elbil-lading – infrastruktur for det grønne skiftet</li>
              </ul>
            </div>
          </div>

          {/* S */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 rounded-full bg-red-100 text-red-900 flex items-center justify-center font-extrabold text-lg">S</span>
              <h2 className="text-xl font-extrabold text-blue-900">Sosiale forhold (Social)</h2>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 space-y-3 text-gray-600 text-sm leading-relaxed">
              <p>Vi er en seriøs arbeidsgiver med fokus på et trygt og inkluderende arbeidsmiljø:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Tariffavtale og ordnede lønns- og arbeidsvilkår</li>
                <li>Aktiv satsing på lærlinger og fagopplæring</li>
                <li>Nulltoleranse for sosial dumping i leverandørkjeden</li>
                <li>HMS-fokus og jevnlig opplæring av alle ansatte</li>
              </ul>
            </div>
          </div>

          {/* G */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 rounded-full bg-blue-100 text-blue-900 flex items-center justify-center font-extrabold text-lg">G</span>
              <h2 className="text-xl font-extrabold text-blue-900">Selskapsstyring (Governance)</h2>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 space-y-3 text-gray-600 text-sm leading-relaxed">
              <p>Elektro Sør drives med ryddige og transparente forretningsprinsipper:</p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Etterlevelse av alle relevante lover og forskrifter</li>
                <li>Nulltoleranse for korrupsjon og misligheter</li>
                <li>Åpen kommunikasjon med kunder og samarbeidspartnere</li>
                <li>Rapportering i henhold til Åpenhetsloven</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
