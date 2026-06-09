import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Åpenhetsloven",
  description:
    "Elektro Sør AS sin redegjørelse etter Åpenhetsloven.",
};

export default function Apenhetsloven() {
  return (
    <>
      <section className="bg-blue-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <h1 className="text-3xl sm:text-4xl font-bold">Åpenhetsloven</h1>
          <p className="text-blue-100 mt-2 max-w-xl">
            Redegjørelse etter Lov om virksomheters åpenhet og arbeid med grunnleggende
            menneskerettigheter og anstendige arbeidsforhold.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-8 text-gray-700 leading-relaxed">
        <div>
          <h2 className="font-semibold text-gray-900 mb-2">Om loven</h2>
          <p>
            Åpenhetsloven trådte i kraft 1. juli 2022 og pålegger større virksomheter å utføre
            aktsomhetsvurderinger og offentliggjøre en redegjørelse.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-gray-900 mb-2">Vår forpliktelse</h2>
          <p>
            Elektro Sør AS respekterer grunnleggende menneskerettigheter og anstendige
            arbeidsforhold, og forventer det samme av våre leverandører.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-gray-900 mb-2">Aktsomhetsvurderinger</h2>
          <p className="mb-3">
            Vi gjennomfører aktsomhetsvurderinger i tråd med OECDs retningslinjer:
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Forankring av ansvarlig næringsliv i selskapets retningslinjer</li>
            <li>Kartlegging og vurdering av negativ påvirkning i leverandørkjeden</li>
            <li>Iverksettelse av tiltak for å stanse eller redusere negativ påvirkning</li>
            <li>Overvåking av tiltak og kommunikasjon om håndtering</li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-gray-900 mb-2">Funn</h2>
          <p>
            Per dags dato har vi ikke avdekket vesentlige negative påvirkninger i vår
            leverandørkjede. Hovedleverandørene er norske grossister for elektromateriell og
            lokale underleverandører, underlagt norsk arbeidsmiljølovgivning.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-gray-900 mb-2">Retten til informasjon</h2>
          <p>
            Enhver kan rette skriftlig forespørsel til oss om informasjon knyttet til vår
            håndtering av faktiske og potensielle negative konsekvenser.
          </p>
          <p className="mt-2">
            Henvendelser:{" "}
            <a href="mailto:firmapost@elektro-sor.no" className="text-blue-900 underline">
              firmapost@elektro-sor.no
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
