import type { Metadata } from "next";
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Kontakt oss",
  description:
    "Ta kontakt med Elektro Sør AS i Mandal. Ring 38 27 13 90, send e-post til firmapost@elektro-sor.no eller besøk oss i Mikkelsmyrveien 4B.",
};

const contactItems = [
  {
    Icon: PhoneIcon,
    label: "Telefon",
    value: "38 27 13 90",
    href: "tel:+4738271390",
    sub: "Utenom kontortiden viderekobles du til vakttelefon",
  },
  {
    Icon: EnvelopeIcon,
    label: "E-post",
    value: "firmapost@elektro-sor.no",
    href: "mailto:firmapost@elektro-sor.no",
  },
  {
    Icon: MapPinIcon,
    label: "Adresse",
    value: "Mikkelsmyrveien 4B, 4515 Mandal",
    sub: "Skinsnes-området",
  },
  {
    Icon: ClockIcon,
    label: "Åpningstider",
    value: "Mandag–fredag 07:00–15:00",
    sub: "Utenom åpningstid: vakttelefon",
  },
];

export default function Kontakt() {
  return (
    <>
      {/* Hero */}
      <section className="bg-blue-900 text-white py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block bg-red-600 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            Kontakt
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-3">Kontakt oss</h1>
          <p className="text-blue-200 text-lg max-w-lg leading-relaxed">
            Vi svarer raskt – ring, send mail eller fyll ut skjemaet nedenfor.
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

          {/* Contact info */}
          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-6">Kontaktinformasjon</h2>
            <div className="space-y-4">
              {contactItems.map(({ Icon, label, value, href, sub }) => (
                <div key={label} className="flex gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100 transition-all duration-200 hover:border-blue-100 hover:bg-blue-50/30">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-900 rounded-xl flex items-center justify-center">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-gray-400 mb-0.5">{label}</p>
                    {href ? (
                      <a href={href} className="font-semibold text-gray-900 hover:text-blue-800 transition-colors text-sm">
                        {value}
                      </a>
                    ) : (
                      <p className="font-semibold text-gray-900 text-sm">{value}</p>
                    )}
                    {sub && <p className="text-xs text-gray-400 mt-0.5">{sub}</p>}
                  </div>
                </div>
              ))}
            </div>

            {/* Emergency */}
            <div className="mt-6 p-5 bg-blue-900 rounded-2xl text-white">
              <p className="text-xs font-bold uppercase tracking-widest text-blue-300 mb-1">Akutt hjelp?</p>
              <p className="text-2xl font-extrabold">38 27 13 90</p>
              <p className="text-blue-300 text-xs mt-1">Vakttelefon 24 timer, 7 dager i uken</p>
            </div>
          </div>

          {/* Form */}
          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-6">Send oss en melding</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Fornavn</label>
                  <input
                    type="text"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-gray-50 focus:bg-white"
                    placeholder="Ola"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Etternavn</label>
                  <input
                    type="text"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-gray-50 focus:bg-white"
                    placeholder="Nordmann"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">E-post</label>
                <input
                  type="email"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-gray-50 focus:bg-white"
                  placeholder="deg@epost.no"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Melding</label>
                <textarea
                  rows={5}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none bg-gray-50 focus:bg-white"
                  placeholder="Beskriv hva du trenger hjelp med..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-bold py-3.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-red-600/20"
              >
                Send melding
              </button>
              <p className="text-xs text-center text-gray-400">
                Vi svarer innen 1 virkedag
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
