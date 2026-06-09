import type { Metadata } from "next";
import Link from "next/link";
import { listArticles } from "@/lib/fagartikler";

export const metadata: Metadata = {
  title: "Fagartikler",
  description:
    "Fagartikler om elektroteknikk, elsikkerhet, elbillading, internkontroll og smarthus — skrevet av elektrikerne i Elektro Sør.",
};

export default function Fagartikler() {
  const articles = listArticles();

  return (
    <>
      <section className="bg-blue-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <h1 className="text-3xl sm:text-4xl font-bold">Fagartikler</h1>
          <p className="text-blue-100 mt-2 max-w-2xl">
            Kunnskap fra hverdagen vår — om elsikkerhet, lading, smarthus og hva
            forskriftene faktisk krever.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <ul className="space-y-8">
          {articles.map((a) => (
            <li key={a.slug} className="border-b border-gray-200 pb-8 last:border-b-0">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                <Link href={`/fagartikler/${a.slug}`} className="hover:text-blue-900">
                  {a.title}
                </Link>
              </h2>
              <p className="text-xs text-gray-500 mt-1">
                {formatDate(a.publishedAt)} · {a.readMinutes} min lesing
              </p>
              <p className="text-gray-700 mt-3">{a.description}</p>
              <Link
                href={`/fagartikler/${a.slug}`}
                className="inline-block mt-3 text-blue-900 font-medium text-sm hover:underline"
              >
                Les artikkelen →
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

function formatDate(iso: string): string {
  const [y, m, d] = iso.split("-");
  const months = [
    "januar", "februar", "mars", "april", "mai", "juni",
    "juli", "august", "september", "oktober", "november", "desember",
  ];
  return `${parseInt(d, 10)}. ${months[parseInt(m, 10) - 1]} ${y}`;
}
