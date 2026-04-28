import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sertifiseringer og godkjenninger",
  description:
    "Elektro Sør AS er sertifisert og godkjent av relevante myndigheter og bransjeorganisasjoner. Se alle våre godkjenninger.",
};

const certs = [
  {
    name: "NELFO",
    full: "Nelfo – El og It Bedriftene",
    desc: "Elektro Sør er medlem av NELFO, bransjeforeningen for elektrofag i Norge. Medlemskapet sikrer at vi følger bransjens kvalitets- og HMS-standarder.",
    category: "Bransje",
  },
  {
    name: "DSB",
    full: "Direktoratet for samfunnssikkerhet og beredskap",
    desc: "Vi er registrert hos DSB og har godkjenning til å utføre elektriske installasjoner i henhold til norsk lov.",
    category: "Myndighet",
  },
  {
    name: "ISO 9001",
    full: "ISO 9001:2015 – Kvalitetsstyring",
    desc: "Sertifisert etter ISO 9001 for systematisk kvalitetsstyring i alle ledd av virksomheten.",
    category: "Kvalitet",
  },
  {
    name: "Mesterbrev",
    full: "Mesterbrev i elektrofaget",
    desc: "Vår faglige leder er godkjent mester i elektrofaget – den høyeste faglige sertifiseringen i bransjen.",
    category: "Fag",
  },
  {
    name: "Stifinner",
    full: "Seriøsitetserklæring",
    desc: "Vi er registrert som seriøs aktør og oppfyller kravene til lønns- og arbeidsvilkår, skatt og HMS.",
    category: "Seriøsitet",
  },
];

const categoryColors: Record<string, string> = {
  Bransje: "bg-blue-50 text-blue-600",
  Myndighet: "bg-red-50 text-red-600",
  Kvalitet: "bg-green-50 text-green-600",
  Fag: "bg-yellow-50 text-yellow-600",
  Seriøsitet: "bg-purple-50 text-purple-600",
};

export default function Sertifiseringer() {
  return (
    <>
      <section className="bg-blue-900 text-white py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block bg-red-600 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            Tillit
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">Sertifiseringer</h1>
          <p className="text-blue-200 text-lg max-w-xl leading-relaxed">
            Dokumentert kvalitet og godkjenninger som gir deg trygghet som kunde.
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {certs.map((c) => (
              <div key={c.name} className="bg-white border border-gray-100 rounded-2xl p-5 sm:p-6 flex gap-4 shadow-sm transition-all duration-200 hover:shadow-md">
                <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 bg-blue-900 rounded-xl flex items-center justify-center text-red-400 font-extrabold text-xs sm:text-sm text-center leading-tight p-2">
                  {c.name}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h2 className="font-bold text-gray-900 text-sm sm:text-base">{c.full}</h2>
                    <span className={`text-xs font-bold uppercase tracking-wide px-2 py-0.5 rounded-full ${categoryColors[c.category] ?? ""}`}>
                      {c.category}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
