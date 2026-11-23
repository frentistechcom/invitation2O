import React from "react";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { TemplateCard } from "@/components/catalog/TemplateCard";
import { SAMPLE_TEMPLATES, CATEGORIES } from "@/data/templates";
import { getLanguagesForCategory } from "@/data/seo-content";
import Link from "next/link";
import { ChevronRight, Sparkles, LayoutGrid, Check } from "lucide-react";
import type { Metadata } from "next";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return [
    { category: "wedding" },
    { category: "birthday" },
    { category: "baby-shower" },
    { category: "housewarming" },
    { category: "naming-ceremony" },
  ];
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  const cat = CATEGORIES.find((c) => c.slug === category);
  if (!cat) return { title: "Templates Not Found" };

  return {
    title: `${cat.name} Invitation Card Templates - Online Maker | InvitationCardMaker.in`,
    description: `Create customized ${cat.name} cards online in 2 minutes. Free demo text placement, Google Maps QR code, traditional Indian fonts, and print-ready 300 DPI download.`,
    alternates: {
      canonical: `/templates/${category}`,
    },
    openGraph: {
      title: `${cat.name} Invitation Card Templates - Online Maker`,
      description: `Create customized ${cat.name} cards online in 2 minutes. 300 DPI vector clarity & Google Maps QR codes.`,
      url: `https://invitationcardmaker.in/templates/${category}`,
      siteName: "InvitationCardMaker.in",
      locale: "en_IN",
      type: "website",
    },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const currentCategory = CATEGORIES.find((c) => c.slug === category);

  if (!currentCategory) {
    notFound();
  }

  const categoryTemplates = SAMPLE_TEMPLATES.filter((t) => t.category === category);
  const regionalLanguages = getLanguagesForCategory(category);

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://invitationcardmaker.in",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Templates",
        item: "https://invitationcardmaker.in/templates",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: currentCategory.name,
        item: `https://invitationcardmaker.in/templates/${category}`,
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-200">
      <Navbar />

      <script
        id="category-breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-1.5 text-xs text-muted-foreground mb-6">
          <Link href="/" className="hover:text-amber-500 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/templates" className="hover:text-amber-500 transition-colors">
            Templates
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-foreground font-medium">{currentCategory.name}</span>
        </nav>

        {/* Category Header */}
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/25 mb-2 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ready-to-Edit Templates</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">{currentCategory.name}</h1>
          <p className="text-sm text-muted-foreground mt-2">{currentCategory.description}</p>
        </div>

        {/* Regional Language & Cultural Editions Bar */}
        {regionalLanguages.length > 0 && (
          <div className="mb-8 p-3 sm:p-4 rounded-2xl bg-card border border-border shadow-sm">
            <div className="flex items-center justify-between mb-2 px-1">
              <span className="text-xs font-semibold text-muted-foreground">
                Browse Regional &amp; Cultural Wording Editions:
              </span>
            </div>
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              <span className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-amber-500 text-white shadow-sm shrink-0">
                All Designs ({categoryTemplates.length})
              </span>
              {regionalLanguages.map((l) => (
                <Link
                  key={l.lang}
                  href={`/templates/${category}/${l.lang}`}
                  className="px-3.5 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap bg-secondary hover:bg-secondary/80 text-foreground border border-border transition-all flex items-center gap-1.5 shrink-0"
                >
                  <span>{l.langName}</span>
                  <span className="text-[10px] text-muted-foreground">({l.ceremonyName.split(" ")[0]})</span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Small Small Compact Template Grid Section */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <LayoutGrid className="w-4 h-4 text-amber-500" />
            <h2 className="text-base sm:text-lg font-serif font-bold text-foreground">
              Compact Template Preview ({categoryTemplates.length} Designs)
            </h2>
          </div>
          <span className="text-xs text-muted-foreground hidden sm:inline">
            Click any card to launch online editor
          </span>
        </div>

        {/* Dense Small Small Grid: 2 cols mobile, 3-4 tablet, 5-6 desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 mb-16">
          {categoryTemplates.map((template) => (
            <TemplateCard key={template.id} template={template} compact={true} />
          ))}
        </div>

        {/* Detailed Showcase Section */}
        <div className="border-t border-border pt-12 mb-12">
          <div className="max-w-2xl mb-8">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-foreground">
              Detailed Card Showcase
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1">
              Explore full-size preview cards with customizable typography layers, background artwork, and color palettes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categoryTemplates.map((template) => (
              <TemplateCard key={template.id} template={template} compact={false} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
