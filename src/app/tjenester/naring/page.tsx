import type { Metadata } from "next";
import Link from "next/link";
import { BuildingOfficeIcon, WrenchScrewdriverIcon, LightBulbIcon, TruckIcon, CheckIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Elektrikertjenester for næringsliv – Elektro Sør AS",
  description: "Elektro Sør leverer komplette elektriske installasjoner for næringsliv, industri og offentlig sektor. Totalentrepriser, prosjektledelse og drift.",
};

const services = [
  {
    Icon: BuildingOfficeIcon,
    title: "Bygg og anlegg",
    desc: "Vi leverer totalentrepriser for elektriske anlegg i nybygg, rehabilitering og ombygging av næringsbygg.",
    items: ["Nybygg og rehabilitering", "Tekniske anlegg", "Prosjektledelse", "Ferdigstillelse og dokumentasjon"],
  },
  {
    Icon: WrenchScrewdriverIcon,
    title: "Industri og produksjon",
    desc: "Elektriske installasjoner og vedlikehold for industri, produksjonsanlegg og lagerbygg.",
    items: ["Sterkstrømsanlegg", "Automatisering", "Nødlys og sikkerhet", "Periodisk kontroll"],
  },
  {
    Icon: LightBulbIcon,
    title: "Lys og energieffektivisering",
    desc: "LED-oppgradering, styringssystemer og energioptimalisering for lavere strømregning.",
    items: ["LED-konvertering", "Dagslyskontroll", "Bevegelsessensorer", "Energimåling"],
  },
  {
    Icon: TruckIcon,
    title: "Ladeinfrastruktur for flåter",
    desc: "Vi planlegger og installerer ladeinfrastruktur for bedrifter med elbilflåte eller parkering for ansatte og kunder.",
    items: ["Ladestasjon for bedrift", "Flåteladning", "Smart energistyring", "Fakturering per bruker"],
  },
];

export default function TjenesterNaring() {
  return (
    <>
      {/* Hero */}
      <section className="bg-blue-900 text-white py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-block bg-red-600 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
              For næringsliv
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">
              Elektriker for <span className="text-red-400">bedrifter</span>
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed">
              Elektro Sør AS leverer komplette elektrotekniske løsninger for næringsbygg, industri og offentlig sektor. Solid kompetanse, forutsigbar leveranse.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-bold px-7 py-3.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-red-600/30"
              >
                Be om tilbud
              </Link>
              <a
                href="tel:+4738271390"
                className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200"
              >
                Ring 38 27 13 90
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-red-600">Tjenester</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-2">Hva vi tilbyr næringslivet</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
              >
                {/* Image placeholder */}
                <div className="h-36 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                  <div className="w-14 h-14 bg-blue-900 rounded-2xl flex items-center justify-center shadow-lg">
                    <s.Icon className="w-7 h-7 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h2>
                  <p className="text-gray-500 mb-5 leading-relaxed text-sm">{s.desc}</p>
                  <ul className="space-y-2">
                    {s.items.map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-sm text-gray-700">
                        <CheckIcon className="w-4 h-4 text-red-600 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="bg-gray-50 border-y border-gray-100 py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-red-600">Hvorfor oss</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-2">Hvorfor velge Elektro Sør?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Erfaring", desc: "Over 20 år med næringsprosjekter av alle størrelser i Sør-Norge." },
              { title: "Sertifisert", desc: "Alle arbeider utføres av godkjente fagarbeidere og mestere." },
              { title: "Forutsigbar", desc: "Vi holder tidsfrister, budsjett og kommuniserer underveis." },
            ].map((p) => (
              <div key={p.title} className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-0.5">
                <div className="w-8 h-1 bg-red-600 rounded-full mb-4" />
                <h3 className="font-bold text-gray-900 mb-2 text-base">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-900 text-white py-14 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">Ønsker du et tilbud?</h2>
          <p className="text-blue-200 mb-7 text-lg">Kontakt oss direkte – vi tar næringsprosjekter seriøst.</p>
          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-red-600/30"
          >
            Send forespørsel
          </Link>
        </div>
      </section>
    </>
  );
}
