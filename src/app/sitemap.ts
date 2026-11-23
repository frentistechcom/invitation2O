import { MetadataRoute } from "next";
import { CATEGORIES, SAMPLE_TEMPLATES } from "@/data/templates";
import { MULTILINGUAL_SEO_PAGES } from "@/data/multilingual-seo-pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://invitationcardmaker.in";
  const currentDate = new Date().toISOString();

  // 1. Root and Catalog pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/templates`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 0.95,
    },
  ];

  // 2. Category Pages
  const categoryRoutes: MetadataRoute.Sitemap = CATEGORIES.filter((c) => c.slug !== "all").map((cat) => ({
    url: `${baseUrl}/templates/${cat.slug}`,
    lastModified: currentDate,
    changeFrequency: "daily",
    priority: 0.9,
  }));

  // 3. Multilingual Landing Pages (/marathi/namkaran-invitation-card, /english/naming-ceremony, /hindi/namkaran-sanskar)
  const multilingualRoutes: MetadataRoute.Sitemap = MULTILINGUAL_SEO_PAGES.map((page) => ({
    url: `${baseUrl}/${page.lang}/${page.slug}`,
    lastModified: currentDate,
    changeFrequency: "daily",
    priority: 0.92,
  }));

  // 4. Language Index Pages (/marathi, /english, /hindi)
  const languageRootRoutes: MetadataRoute.Sitemap = ["marathi", "english", "hindi"].map((lang) => ({
    url: `${baseUrl}/${lang}`,
    lastModified: currentDate,
    changeFrequency: "daily",
    priority: 0.88,
  }));

  // 5. Editor Deeplinks for Individual Templates
  const templateRoutes: MetadataRoute.Sitemap = SAMPLE_TEMPLATES.map((template) => ({
    url: `${baseUrl}/editor?template=${template.id}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [
    ...staticRoutes,
    ...categoryRoutes,
    ...multilingualRoutes,
    ...languageRootRoutes,
    ...templateRoutes,
  ];
}
