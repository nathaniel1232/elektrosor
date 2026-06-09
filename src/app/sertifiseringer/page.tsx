import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sertifiseringer og godkjenninger",
  description:
    "Elektro Sør AS er registrert hos DSB, godkjent lærebedrift, EKOM-installatør og sertifisert KNX-partner.",
};

type Cert = {
  name: string;
  icon: string; // relative to /public
  body: string;
};

const certs: Cert[] = [
  {
    name: "Registrert El-installatør",
    icon: "/images/certs/registrert-el-installator.png",
    body:
      "Vi er registrert som elvirksomhet hos Direktoratet for samfunnssikkerhet og beredskap (DSB) og kan utføre elektriske installasjoner i tråd med norsk regelverk.",
  },
  {
    name: "Godkjent lærebedrift",
    icon: "/images/certs/godkjent-laerebedrift.png",
    body:
      "Godkjent for å ta inn elektrikerlærlinger. Vi har flere lærlinger til enhver tid.",
  },
  {
    name: "Registrert EKOM-installatør",
    icon: "/images/certs/registrert-ekom-installator.png",
    body:
      "Godkjenning for å gjøre arbeider på elektroniske kommunikasjonsanlegg.",
  },
  {
    name: "Sertifisert KNX Partner",
    icon: "/images/certs/sertifisert-knx-partner.png",
    body:
      "Sertifisert for planlegging og installasjon av KNX-baserte styringssystemer for smarthus og næringsbygg.",
  },
  {
    name: "Godkjent for ansvarsrett",
    icon: "/images/certs/godkjent-for-ansvarsrett.png",
    body:
      "Sentralt godkjent for ansvarsrett etter plan- og bygningsloven.",
  },
];

export default function Sertifiseringer() {
  return (
    <>
      <section className="bg-blue-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <h1 className="text-3xl sm:text-4xl font-bold">Sertifiseringer</h1>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-6">
        {certs.map((c) => (
          <div
            key={c.name}
            className="flex gap-5 border-t border-gray-200 pt-5 items-start"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 rounded-full border border-gray-200 bg-white flex items-center justify-center overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={c.icon}
                alt={c.name}
                className="w-full h-full object-contain p-2"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="font-semibold text-gray-900 mb-1">{c.name}</h2>
              <p className="text-gray-700 leading-relaxed text-sm">{c.body}</p>
            </div>
          </div>
        ))}
        <p className="text-xs text-gray-500 pt-4">
          Dokumentasjon på sertifiseringer kan oversendes på forespørsel.
        </p>
      </section>
    </>
  );
}
