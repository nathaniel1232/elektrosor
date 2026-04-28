import type { Metadata } from "next";
import BestillingForm from "@/components/BestillingForm";

export const metadata: Metadata = {
  title: "Bestill elektriker",
  description:
    "Bestill elektriker fra Elektro Sør AS. Fyll ut skjemaet, så tar vi kontakt raskt med tilbud og tidspunkt.",
};

export default function Bestilling() {
  return (
    <>
      {/* Hero */}
      <section className="bg-blue-900 text-white py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block bg-red-600 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            Bestilling
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">Bestill elektriker</h1>
          <p className="text-blue-200 text-lg max-w-xl leading-relaxed">
            Fortell oss hva du trenger – vi tar kontakt innen 1 virkedag med tilbud og tidspunkt.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Left – info */}
          <div className="md:col-span-2">
            <h2 className="text-xl font-extrabold text-gray-900 mb-5">Slik fungerer det</h2>
            <div className="space-y-5">
              {[
                { step: "1", title: "Fyll ut skjemaet", desc: "Beskriv hva du trenger hjelp med og oppgi kontaktinformasjon." },
                { step: "2", title: "Vi tar kontakt", desc: "En av våre teknikere ringer deg innen 1 virkedag for avklaring og tilbud." },
                { step: "3", title: "Vi kommer og utfører", desc: "Vi avtaler tidspunkt og utfører jobben trygt og sertifisert." },
              ].map((s) => (
                <div key={s.step} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center font-extrabold text-sm">
                    {s.step}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm">{s.title}</div>
                    <div className="text-gray-500 text-xs mt-0.5">{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-gray-50 border border-gray-100 rounded-xl">
              <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide mb-2">Trenger hjelp nå?</p>
              <a href="tel:+4738271390" className="text-lg font-extrabold text-gray-900 hover:text-blue-800 transition-colors">
                38 27 13 90
              </a>
            </div>
          </div>

          {/* Right – form */}
          <div className="md:col-span-3 bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
            <BestillingForm />
          </div>
        </div>
      </section>
    </>
  );
}
