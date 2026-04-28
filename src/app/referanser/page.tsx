import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Referanser og prosjekter",
  description: "Se utvalgte referanseprosjekter fra Elektro Sør AS – bolig, næring og industri i Sør-Norge.",
};

const projects = [
  {
    title: "Nybygg boligfelt – 32 eneboliger",
    category: "Bolig",
    location: "Kristiansand",
    desc: "Komplett elektrisk installasjon for 32 eneboliger inkludert smarthus og ladeinfrastruktur.",
    year: "2025",
  },
  {
    title: "Kontorbygg – Energioppgradering",
    category: "Næring",
    location: "Arendal",
    desc: "LED-konvertering, nytt styringssystem og energioptimalisering. Reduserte strømkostnader med 40 %.",
    year: "2025",
  },
  {
    title: "Industrihall – Sterkstrømsanlegg",
    category: "Industri",
    location: "Grimstad",
    desc: "Totalinstallasjon av sterkstrømsanlegg for ny produksjonshall, inkl. automatisering og nødlys.",
    year: "2024",
  },
  {
    title: "Borettslag – Ladeinfrastruktur",
    category: "Lading",
    location: "Mandal",
    desc: "Installasjon av 48 ladepunkter i borettslag med smart energistyring og per-leilighets fakturering.",
    year: "2024",
  },
  {
    title: "Skolebygg – Rehabilitering",
    category: "Offentlig",
    location: "Farsund",
    desc: "Totalrehabilitering av elektrisk anlegg i eksisterende skolebygg. Utført i sommerferien.",
    year: "2023",
  },
  {
    title: "Restaurant – Kjøkkeninstallasjon",
    category: "Næring",
    location: "Lyngdal",
    desc: "Ny sikringstablå og kraftuttak for nytt profesjonelt kjøkken. Inkludert jordfeilbrytere og kurskart.",
    year: "2023",
  },
];

const categoryColors: Record<string, string> = {
  Bolig: "bg-blue-50 text-blue-700",
  Næring: "bg-purple-50 text-purple-700",
  Industri: "bg-orange-50 text-orange-700",
  Lading: "bg-green-50 text-green-700",
  Offentlig: "bg-gray-100 text-gray-600",
};

export default function Referanser() {
  return (
    <>
      {/* Hero */}
      <section className="bg-blue-900 text-white py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block bg-red-600 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            Prosjekter
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">Referanser</h1>
          <p className="text-blue-200 text-lg max-w-xl leading-relaxed">
            Utvalgte prosjekter vi er stolte av – fra bolig til industri i Sør-Norge.
          </p>
        </div>
      </section>

      {/* Projects grid */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <div
                key={p.title}
                className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 flex flex-col"
              >
                {/* Image placeholder */}
                <div className="h-44 bg-gradient-to-br from-gray-100 to-blue-50 relative flex items-center justify-center">
                  <svg className="w-8 h-8 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M13.5 12h.008v.008H13.5V12z" />
                  </svg>
                  <div className="absolute top-3 left-3">
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${categoryColors[p.category] ?? "bg-gray-100 text-gray-600"}`}>
                      {p.category}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="text-xs font-medium text-gray-400 bg-white/80 backdrop-blur-sm px-2 py-0.5 rounded-full">
                      {p.year}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <h2 className="font-bold text-gray-900 text-sm leading-snug mb-2">{p.title}</h2>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1">{p.desc}</p>
                  <div className="mt-4 flex items-center gap-1.5 text-xs text-gray-400">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                    <span>{p.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-900 text-white py-14 sm:py-20">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">
            Har du et prosjekt vi kan hjelpe med?
          </h2>
          <p className="text-blue-200 mb-7">Vi er klare for oppdrag i hele Sør-Norge.</p>
          <Link
            href="/kontakt"
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-red-600/30"
          >
            Kontakt oss
          </Link>
        </div>
      </section>
    </>
  );
}
