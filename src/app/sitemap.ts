import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.elektrosor.no";
  const routes = [
    "",
    "/tjenester/privat",
    "/tjenester/naring",
    "/fagartikler",
    "/referanser",
    "/om-oss",
    "/sertifiseringer",
    "/esg",
    "/apenhetsloven",
    "/karriere",
    "/kontakt",
    "/bestilling",
  ];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));
}
