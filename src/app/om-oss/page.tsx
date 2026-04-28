import type { Metadata } from "next";
import Link from "next/link";
import { MagnifyingGlassIcon, UserGroupIcon, ShieldCheckIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Om oss",
  description: "Lær om Elektro Sør AS – vår historie, verdier og teamet som leverer kvalitetselektro i Sør-Norge.",
};

export default function OmOss() {
  return (
    <>
      {/* Hero */}
      <section className="bg-blue-900 text-white py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block bg-red-600 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            Selskapet
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">Om Elektro Sør</h1>
          <p className="text-blue-200 text-lg max-w-xl leading-relaxed">
            Et lokalt elektroforetak med over 20 års erfaring – for privatpersoner og næringsliv i Sør-Norge.
          </p>
        </div>
      </section>

      {/* Story + image */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image placeholder */}
          <div className="relative aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden order-last lg:order-first">
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-gray-400">
              <svg className="w-10 h-10 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M13.5 12h.008v.008H13.5V12zm0 0H12m1.5 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
              </svg>
              <p className="text-xs font-medium opacity-40">Legg til bilde</p>
            </div>
          </div>

          {/* Text */}
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-red-600">Vår historie</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-2 mb-5 leading-snug">
              Faglig stolthet siden starten
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Elektro Sør AS ble etablert med en klar visjon: å levere pålitelige og trygge elektriske løsninger til folk og bedrifter i Sør-Norge. Siden starten har vi vokst til å bli en av regionens mest anerkjente elektroentreprenører.
              </p>
              <p>
                Vi jobber tett med kunden fra første kontakt til overlevering. Enten det er en enkel installasjon hjemme eller en total elektroteknisk entreprise for et næringsbygg – vi behandler hvert oppdrag med samme seriøsitet og faglig stolthet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-14 sm:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-red-600">Verdier</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-2">Det vi står for</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                Icon: MagnifyingGlassIcon,
                title: "Kvalitet",
                desc: "Vi gjør jobben riktig første gang. Sertifisert arbeid, dokumentasjon og garanti på alt vi leverer.",
              },
              {
                Icon: UserGroupIcon,
                title: "Pålitelighet",
                desc: "Vi holder det vi lover – tidsfrister, pris og kommunikasjon underveis i prosjektet.",
              },
              {
                Icon: ShieldCheckIcon,
                title: "Bærekraft",
                desc: "Vi velger løsninger som er energieffektive og fremtidsrettede – for deg og for miljøet.",
              },
            ].map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-0.5">
                <div className="w-11 h-11 bg-blue-900 rounded-xl flex items-center justify-center mb-4">
                  <v.Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-base">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Org info */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-red-600">Om selskapet</span>
          <h2 className="text-2xl font-extrabold text-gray-900 mt-2 mb-6">Selskapsinformasjon</h2>
          <div className="bg-gray-50 rounded-2xl border border-gray-100 divide-y divide-gray-100 overflow-hidden">
            {[
              { label: "Selskapsnavn", value: "Elektro Sør AS" },
              { label: "Org.nr.", value: "985 022 036" },
              { label: "Adresse", value: "Mikkelsmyrveien 4B, 4515 Mandal" },
              { label: "E-post", value: "firmapost@elektro-sor.no" },
              { label: "Telefon", value: "38 27 13 90" },
            ].map((row) => (
              <div key={row.label} className="flex px-6 py-4 text-sm gap-4">
                <span className="w-36 font-semibold text-gray-400 shrink-0">{row.label}</span>
                <span className="text-gray-900">{row.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Links */}
      <section className="py-12 bg-gray-50 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Les mer</p>
          <div className="flex flex-wrap gap-3">
            {[
              { href: "/sertifiseringer", label: "Sertifiseringer" },
              { href: "/esg", label: "ESG og bærekraft" },
              { href: "/apenhetsloven", label: "Åpenhetsloven" },
              { href: "/karriere", label: "Jobb hos oss" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm font-semibold text-blue-900 bg-white border border-blue-100 hover:border-blue-300 hover:bg-blue-50 px-4 py-2 rounded-full transition-all duration-150"
              >
                {l.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
