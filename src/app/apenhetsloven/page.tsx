import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Åpenhetsloven",
  description:
    "Elektro Sør AS sin rapport og redegjørelse etter Åpenhetsloven om aktsomhetsvurderinger og menneskerettigheter i leverandørkjeden.",
};

export default function Apenhetsloven() {
  return (
    <>
      <section className="bg-blue-900 text-white py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block bg-red-600 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            Ansvarlig næringsliv
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">Åpenhetsloven</h1>
          <p className="text-blue-200 text-lg max-w-xl leading-relaxed">
            Redegjørelse etter Lov om virksomheters åpenhet og arbeid med grunnleggende menneskerettigheter og anstendige arbeidsforhold.
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-gray-700">
          <div>
            <h2 className="text-xl font-extrabold text-gray-900 mb-3">Om loven</h2>
            <p className="leading-relaxed">
              Åpenhetsloven (Lov om virksomheters åpenhet og arbeid med grunnleggende menneskerettigheter og anstendige arbeidsforhold) trådte i kraft 1. juli 2022. Loven pålegger større virksomheter å utføre aktsomhetsvurderinger og offentliggjøre en redegjørelse.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-extrabold text-gray-900 mb-3">Vår forpliktelse</h2>
            <p className="leading-relaxed">
              Elektro Sør AS er forpliktet til å respektere grunnleggende menneskerettigheter og anstendige arbeidsforhold, og forventer det samme av våre leverandører og forretningspartnere.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-extrabold text-gray-900 mb-3">Aktsomhetsvurderinger</h2>
            <p className="leading-relaxed mb-3">
              Vi gjennomfører aktsomhetsvurderinger i tråd med OECDs retningslinjer for flernasjonale selskaper. Dette innebærer:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm ml-2">
              <li>Forankring av ansvarlig næringsliv i selskapets retningslinjer</li>
              <li>Kartlegging og vurdering av negativ påvirkning i leverandørkjede</li>
              <li>Iverksettelse av tiltak for å stanse eller redusere negativ påvirkning</li>
              <li>Overvåking av gjennomføring og resultater av tiltak</li>
              <li>Kommunikasjon om håndteringen av negativ påvirkning</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-extrabold text-gray-900 mb-3">Funn og risikoområder</h2>
            <p className="leading-relaxed">
              Per dags dato har vi ikke avdekket vesentlige negative påvirkninger i vår leverandørkjede. Viktigste leverandørgrupper er norske grossister for elektromateriell, og lokale underleverandører. Disse er underlagt norsk arbeidsmiljølovgivning og tariffavtaler.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-extrabold text-gray-900 mb-3">Retten til informasjon</h2>
            <p className="leading-relaxed">
              Enhver kan rette skriftlig forespørsel til oss om informasjon knyttet til vår håndtering av faktiske og potensielle negative konsekvenser for grunnleggende menneskerettigheter og anstendige arbeidsforhold.
            </p>
            <p className="mt-3">
              Henvendelser rettes til:{" "}
              <a href="mailto:firmapost@elektro-sor.no" className="text-red-600 hover:underline">
                firmapost@elektro-sor.no
              </a>
            </p>
          </div>

          <div className="text-sm text-gray-400 border-t border-gray-100 pt-6">
            Redegjørelsen er sist oppdatert: april 2026
          </div>
        </div>
      </section>
    </>
  );
}
