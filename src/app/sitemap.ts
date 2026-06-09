import type { MetadataRoute } from "next";
import { listArticles } from "@/lib/fagartikler";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.elektrosor.no";
  const routes = [
    "",
    "/tjenester/privat",
    "/tjenester/naring",
    "/referanser",
    "/fagartikler",
    "/om-oss",
    "/sertifiseringer",
    "/esg",
    "/apenhetsloven",
    "/karriere",
    "/kontakt",
    "/bestilling",
  ];

  const staticEntries = routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const articleEntries = listArticles().map((a) => ({
    url: `${base}/fagartikler/${a.slug}`,
    lastModified: new Date(a.publishedAt),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...staticEntries, ...articleEntries];
}
