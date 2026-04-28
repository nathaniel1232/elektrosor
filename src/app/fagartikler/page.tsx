import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fagartikler om elektro",
  description: "Les fagartikler og kunnskapsstoff om elektriske installasjoner, elbil-lading, regelverk og mer fra Elektro Sør AS.",
};

const articles = [
  {
    slug: "hva-koster-elbil-lader",
    title: "Hva koster installasjon av hjemmelader for elbil?",
    category: "Ladeanlegg",
    date: "12. april 2026",
    excerpt: "Prisen på hjemmelader varierer etter type lader, kabelstrekk og om det må legges ny kurs. Vi gir deg en full oversikt.",
  },
  {
    slug: "oppgradere-sikringsskap",
    title: "Slik oppgraderer du sikringsskapet i boligen",
    category: "Installasjoner",
    date: "5. mars 2026",
    excerpt: "Et gammelt sikringsanlegg med porselenssikringer bør byttes. Her forklarer vi prosessen og hva det koster.",
  },
  {
    slug: "krav-elektrisk-anlegg",
    title: "Krav til elektrisk anlegg i norske boliger",
    category: "Regelverk",
    date: "20. februar 2026",
    excerpt: "Forskrift om elektriske lavspenningsanlegg (FEL) setter krav til alle elektriske installasjoner. Her er det viktigste du må vite.",
  },
  {
    slug: "smarthus-muligheter",
    title: "Smarthus – hva er mulig og hva koster det?",
    category: "Smarthus",
    date: "10. januar 2026",
    excerpt: "Fra smart lys til full hjemmeautomasjon – vi ser på de mest populære løsningene og hva de faktisk koster å installere.",
  },
  {
    slug: "jordfeilbryter-viktig",
    title: "Hvorfor jordfeilbryter er livsviktig i badet",
    category: "Sikkerhet",
    date: "3. desember 2025",
    excerpt: "Jordfeilbryter redder liv. Mange boliger mangler fortsatt dette i bad og uterom. Her er hva du trenger å vite.",
  },
  {
    slug: "solcelleintegrasjon",
    title: "Solceller og elektrisk anlegg – slik kobles det sammen",
    category: "Solenergi",
    date: "15. november 2025",
    excerpt: "Skal du installere solceller? Da trengs det en elektriker for tilkobling til husets anlegg. Vi forklarer prosessen.",
  },
];

const categoryColor: Record<string, string> = {
  Ladeanlegg: "bg-green-50 text-green-700",
  Installasjoner: "bg-blue-50 text-blue-700",
  Regelverk: "bg-gray-100 text-gray-600",
  Smarthus: "bg-purple-50 text-purple-700",
  Sikkerhet: "bg-red-50 text-red-700",
  Solenergi: "bg-yellow-50 text-yellow-700",
};

export default function Fagartikler() {
  return (
    <>
      {/* Hero */}
      <section className="bg-blue-900 text-white py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block bg-red-600 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            Kunnskap
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">Fagartikler</h1>
          <p className="text-blue-200 text-lg max-w-xl leading-relaxed">
            Nyttig og faktabasert informasjon om elektriske anlegg, regelverk og ny teknologi – skrevet av våre fagfolk.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((a) => (
              <article
                key={a.slug}
                className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 flex flex-col"
              >
                {/* Image placeholder */}
                <div className="h-40 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                  <svg className="w-8 h-8 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                  </svg>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <span className={`text-xs font-bold uppercase tracking-wide px-2.5 py-1 rounded-full self-start ${categoryColor[a.category] ?? "bg-gray-100 text-gray-600"}`}>
                    {a.category}
                  </span>
                  <h2 className="mt-3 text-sm font-bold text-gray-900 leading-snug">
                    {a.title}
                  </h2>
                  <p className="mt-2 text-gray-500 text-sm leading-relaxed flex-1">{a.excerpt}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs text-gray-400">{a.date}</span>
                    <Link
                      href={`/fagartikler/${a.slug}`}
                      className="text-sm font-semibold text-red-600 hover:text-red-500 transition-colors"
                    >
                      Les mer →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 border-t border-gray-100 py-14">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-xl font-extrabold text-gray-900 mb-2">Har du spørsmål?</h2>
          <p className="text-gray-500 text-sm mb-6">Ta kontakt med oss direkte – vi hjelper deg gjerne.</p>
          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center bg-blue-900 hover:bg-blue-800 text-white font-bold px-7 py-3.5 rounded-full transition-all duration-200"
          >
            Kontakt oss
          </Link>
        </div>
      </section>
    </>
  );
}
