import type { Metadata } from "next";
import BestillingForm from "@/components/BestillingForm";

export const metadata: Metadata = {
  title: "Bestill elektriker",
  description:
    "Bestill elektriker fra Elektro Sør. Fyll ut skjemaet — vi tar kontakt innen én virkedag.",
};

export default function Bestilling() {
  return (
    <>
      <section className="bg-blue-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <h1 className="text-3xl sm:text-4xl font-bold">Bestill elektriker</h1>
          <p className="text-blue-100 mt-2 max-w-xl">
            Fortell hva du trenger hjelp med. Vi tar kontakt innen én virkedag for å avtale
            tidspunkt og gi et uforpliktende tilbud.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <BestillingForm />

        <div className="border-t border-gray-200 mt-12 pt-6 text-sm text-gray-700">
          <p>
            Haster det? Ring{" "}
            <a href="tel:+4738271390" className="text-blue-900 font-semibold underline">38 27 13 90</a> —
            samtalen viderekobles til vakttelefonen utenom åpningstid.
          </p>
        </div>
      </section>
    </>
  );
}
