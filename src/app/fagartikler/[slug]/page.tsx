import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FAGARTIKLER, getArticle } from "@/lib/fagartikler";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return FAGARTIKLER.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<Params> }
): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { title: "Fagartikkel" };
  return {
    title: article.title,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      publishedTime: article.publishedAt,
    },
  };
}

export default async function ArticlePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  return (
    <>
      <section className="bg-blue-900 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <p className="text-xs uppercase tracking-wider text-blue-200">Fagartikkel</p>
          <h1 className="text-3xl sm:text-4xl font-bold mt-2">{article.title}</h1>
          <p className="text-blue-100 text-sm mt-3">
            {formatDate(article.publishedAt)} · {article.readMinutes} min lesing
          </p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-5 text-gray-700 leading-relaxed">
        {article.body.map((block, i) => {
          if (block.type === "p") {
            return <p key={i}>{block.text}</p>;
          }
          if (block.type === "h2") {
            return (
              <h2 key={i} className="text-xl font-semibold text-gray-900 pt-3">
                {block.text}
              </h2>
            );
          }
          return (
            <ul key={i} className="list-disc pl-6 space-y-2">
              {block.items.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          );
        })}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: article.title,
              description: article.description,
              datePublished: article.publishedAt,
              author: { "@type": "Organization", name: article.author },
              publisher: {
                "@type": "Organization",
                name: "Elektro Sør AS",
                logo: {
                  "@type": "ImageObject",
                  url: "https://www.elektrosor.no/images/elektro_sor_positiv.png",
                },
              },
            }),
          }}
        />
      </article>

      <section className="border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <Link href="/fagartikler" className="text-blue-900 font-medium hover:underline">
            ← Alle fagartikler
          </Link>
        </div>
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
