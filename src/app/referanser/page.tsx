import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Referanser",
  description:
    "Et utvalg av referanseprosjekter fra Elektro Sør AS i Mandalsregionen.",
};

const refs = [
  {
    title: "GE Healthcare",
    location: "Spangereid",
    image: "/images/referanser/ge-healthcare.png",
    body:
      "Utbygging av elektrisk anlegg ved fabrikkene i Ramslandsvågen, samt løpende service. Et langvarig samarbeid som er hovedbase for industrielektrikerne våre.",
  },
  {
    title: "Mandal Fengsel",
    location: "Mandal",
    image: "/images/referanser/mandal-fengsel.jpg",
    body: "Elektrotekniske installasjoner i forbindelse med oppføring av bygget.",
  },
  {
    title: "Mandal Golfklubb",
    location: "Mandal",
    image: "/images/referanser/mandal-golfklubb.jpg",
    body: "Elektriske arbeider på klubbhus og uteanlegg.",
  },
];

export default function Referanser() {
  return (
    <>
      <section className="bg-blue-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <h1 className="text-3xl sm:text-4xl font-bold">Referanser</h1>
          <p className="text-blue-100 mt-2 max-w-xl">
            Et utvalg. Flere referanser kan vises på forespørsel.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-12">
        {refs.map((r, i) => (
          <article
            key={r.title}
            className={`grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center ${
              i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
            }`}
          >
            <div className="rounded-xl overflow-hidden bg-gray-100 aspect-[4/3] md:aspect-[3/2]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={r.image}
                alt={r.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">{r.location}</p>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">{r.title}</h2>
              <p className="text-gray-700 leading-relaxed">{r.body}</p>
            </div>
          </article>
        ))}

        <div className="border-t border-gray-200 pt-8 text-sm text-gray-700">
          <p>
            Skal du sjekke en referanse på et tidligere prosjekt før du tildeler oppdrag? Ta
            kontakt med Eilef på{" "}
            <a href="tel:+4792457542" className="text-blue-900 underline">92 45 75 42</a> eller{" "}
            <Link href="/kontakt" className="text-blue-900 underline">via skjemaet</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
