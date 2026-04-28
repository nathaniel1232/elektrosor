import type { Metadata } from "next";
import Link from "next/link";
import { BoltIcon, LockClosedIcon, TruckIcon, DevicePhoneMobileIcon, CheckIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Elektrikertjenester for privatpersoner – Elektro Sør AS",
  description: "Elektro Sør utfører alle elektriske arbeider for privatpersoner – installasjoner, sikringsskap, ladeanlegg for elbil, varmepumpe og smarthus.",
};

const services = [
  {
    id: "installasjon",
    Icon: BoltIcon,
    title: "Elektriske installasjoner",
    desc: "Vi utfører alle typer elektriske installasjoner i boliger – fra enkle reparasjoner til fullstendige installasjoner i nybygg og ved renovering.",
    items: ["Ny stikkontakt og lys", "Kjøkken og bad", "Utebelysning", "Oppvarming"],
  },
  {
    id: "sikring",
    Icon: LockClosedIcon,
    title: "Sikringsskap og kurssikring",
    desc: "Oppgradering av gammelt sikringsanlegg til moderne jordfeilbryter og kurssikring – tryggere hjem og bedre forsikringsdekning.",
    items: ["Nytt sikringsskap", "Jordfeilbryter", "Overspenningsvern", "Kapasitetsutvidelse"],
  },
  {
    id: "lading",
    Icon: TruckIcon,
    title: "EL-bil ladeanlegg",
    desc: "Godkjent installasjon av hjemmelader for elbil. Vi hjelper deg med riktig løsning enten du bor i enebolig, rekkehus eller leilighet.",
    items: ["Hjemmelader installasjon", "Ladeboks i garasje", "Smart lading", "Borettslag/sameie"],
  },
  {
    id: "smarthus",
    Icon: DevicePhoneMobileIcon,
    title: "Smarthus og automasjon",
    desc: "Kontroller lys, varme og sikkerhet via mobilen. Vi installerer og programmerer smarthusløsninger tilpasset din bolig.",
    items: ["Smartlys", "Termostat og gulvvarme", "Alarm og kamera", "Porttelefon"],
  },
];

export default function TjenesterPrivat() {
  return (
    <>
      {/* Hero */}
      <section className="bg-blue-900 text-white py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-block bg-red-600 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
              For privatpersoner
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">
              Elektriker for <span className="text-red-400">hjemmet</span>
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed">
              Fra sikringsskap til ladeanlegg og smarthus – vi tar oss av alt det elektriske i boligen din. Sertifisert arbeid med garanti.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/bestilling"
                className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-bold px-7 py-3.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-red-600/30"
              >
                Bestill elektriker
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
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-2">Hva vi tilbyr privatpersoner</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((s) => (
              <div
                key={s.id}
                id={s.id}
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

      {/* Trust strip */}
      <section className="bg-gray-50 border-y border-gray-100 py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {["Sertifisert arbeid", "Garanti på alt", "Fast pris", "24/7 Vakttelefon"].map((t) => (
              <div key={t} className="bg-white border border-gray-100 rounded-xl py-4 px-3">
                <p className="text-sm font-semibold text-blue-900">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-900 text-white py-14 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">Trenger du elektriker?</h2>
          <p className="text-blue-200 mb-7 text-lg">Ring oss eller bestill direkte – vi svarer raskt og stiller opp.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+4738271390"
              className="inline-flex items-center justify-center bg-white text-blue-900 font-bold px-7 py-3.5 rounded-full hover:bg-blue-50 transition-all duration-200"
            >
              Ring 38 27 13 90
            </a>
            <Link
              href="/bestilling"
              className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-bold px-7 py-3.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-red-600/30"
            >
              Bestill elektriker
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
