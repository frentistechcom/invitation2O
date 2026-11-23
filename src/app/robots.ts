import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://invitationcardmaker.in";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/templates/backgrounds/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
