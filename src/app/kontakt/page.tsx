import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontakt Elektro Sør AS i Mandal. Ring 38 27 13 90 eller send oss en melding.",
};

export default function Kontakt() {
  return (
    <>
      <section className="bg-blue-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <h1 className="text-3xl sm:text-4xl font-bold">Kontakt oss</h1>
          <p className="text-blue-100 mt-2 max-w-lg">
            Ring eller send en melding. Hastesak utenom åpningstid? Ring nummeret —
            samtalen viderekobles til vakttelefonen.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="font-semibold text-gray-900 mb-4">Send melding</h2>
          <ContactForm />
        </div>

        <div>
          <h2 className="font-semibold text-gray-900 mb-4">Direkte</h2>
          <dl className="text-sm divide-y divide-gray-200 border-y border-gray-200">
            <div className="flex py-3">
              <dt className="w-28 text-gray-500">Telefon</dt>
              <dd>
                <a href="tel:+4738271390" className="text-blue-900 font-semibold">38 27 13 90</a>
              </dd>
            </div>
            <div className="flex py-3">
              <dt className="w-28 text-gray-500">E-post</dt>
              <dd>
                <a href="mailto:firmapost@elektro-sor.no" className="text-blue-900">firmapost@elektro-sor.no</a>
              </dd>
            </div>
            <div className="flex py-3">
              <dt className="w-28 text-gray-500">Adresse</dt>
              <dd className="text-gray-900">Mikkelsmyrveien 4B<br/>4515 Mandal</dd>
            </div>
            <div className="flex py-3">
              <dt className="w-28 text-gray-500">Åpningstid</dt>
              <dd className="text-gray-900">Man–fre 07:00–15:00<br/><span className="text-gray-500">Vakttelefon utenom</span></dd>
            </div>
            <div className="flex py-3">
              <dt className="w-28 text-gray-500">Daglig leder</dt>
              <dd className="text-gray-900">Eilef Fiskå<br/><a href="tel:+4792457542" className="text-blue-900">92 45 75 42</a></dd>
            </div>
          </dl>
        </div>
      </section>
    </>
  );
}
