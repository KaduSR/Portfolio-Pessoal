import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const pages = ["", "/politica-de-privacidade", "/termos-de-servico"];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((path) => ({
    url: `https://kadudev.com${path}`,
    changeFrequency: path ? "yearly" : "monthly",
    priority: path ? 0.3 : 1,
  }));
}
