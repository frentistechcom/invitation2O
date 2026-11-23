import { permanentRedirect } from "next/navigation";
import { getSeoPageForCategoryAndLang } from "@/data/multilingual-seo-pages";
import { getAllSeoRoutes } from "@/data/seo-content";

interface LegacyProps {
  params: Promise<{ category: string; lang: string }>;
}

export async function generateStaticParams() {
  return getAllSeoRoutes();
}

export default async function LegacyRegionalRedirectPage({ params }: LegacyProps) {
  const { category, lang } = await params;
  const targetPage = getSeoPageForCategoryAndLang(category, lang);

  if (targetPage) {
    // 301 Permanent Redirect to canonical URL structure domain/{language}/{template-name-in-that-language}
    permanentRedirect(`/${targetPage.lang}/${targetPage.slug}`);
  }

  // Fallback to language home or category page
  permanentRedirect(`/${lang}`);
}
