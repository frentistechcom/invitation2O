import React from "react";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { TemplateCard } from "@/components/catalog/TemplateCard";
import { SAMPLE_TEMPLATES, CATEGORIES } from "@/data/templates";
import { getSeoContent, getLanguagesForCategory, getAllSeoRoutes } from "@/data/seo-content";
import Link from "next/link";
import { ChevronRight, Sparkles, MapPin, QrCode, FileText, Check, Copy } from "lucide-react";
import type { Metadata } from "next";

interface RegionalCategoryPageProps {
  params: Promise<{ category: string; lang: string }>;
}

export async function generateStaticParams() {
  return getAllSeoRoutes();
}

export async function generateMetadata({ params }: RegionalCategoryPageProps): Promise<Metadata> {
  const { category, lang } = await params;
  const seo = getSeoContent(category, lang);
  if (!seo) return { title: "Invitation Templates" };

  return {
    title: `${seo.seoTitle} | InvitationCardMaker.in`,
    description: seo.metaDescription,
    keywords: seo.keywords,
    alternates: {
      canonical: `/templates/${category}/${lang}`,
    },
    openGraph: {
      title: seo.seoTitle,
      description: seo.metaDescription,
      url: `https://invitationcardmaker.in/templates/${category}/${lang}`,
      siteName: "InvitationCardMaker.in",
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: seo.seoTitle,
      description: seo.metaDescription,
    },
  };
}

export default async function RegionalCategoryPage({ params }: RegionalCategoryPageProps) {
  const { category, lang } = await params;
  const currentCategory = CATEGORIES.find((c) => c.slug === category);
  const seo = getSeoContent(category, lang);

  if (!currentCategory || !seo) {
    notFound();
  }

  const categoryTemplates = SAMPLE_TEMPLATES.filter((t) => t.category === category);
  const availableLanguages = getLanguagesForCategory(category);

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
      {
        "@type": "ListItem",
        position: 4,
        name: `${seo.langName} (${seo.ceremonyName})`,
        item: `https://invitationcardmaker.in/templates/${category}/${lang}`,
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: seo.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-200">
      <Navbar />

      <script
        id="regional-breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        id="regional-faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center flex-wrap gap-1.5 text-xs text-muted-foreground mb-6">
          <Link href="/" className="hover:text-amber-500 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/templates" className="hover:text-amber-500 transition-colors">
            Templates
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href={`/templates/${category}`} className="hover:text-amber-500 transition-colors">
            {currentCategory.name}
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-foreground font-medium">{seo.langName}</span>
        </nav>

        {/* Header Hero Area */}
        <div className="max-w-4xl mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/25 mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{seo.heroBadge}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-foreground tracking-tight leading-tight">
            {seo.h1}
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground mt-3 leading-relaxed max-w-3xl">
            {seo.subtitle}
          </p>
        </div>

        {/* Regional Language Switcher Tabs */}
        {availableLanguages.length > 1 && (
          <div className="mb-8 p-3 rounded-2xl bg-card border border-border shadow-sm">
            <div className="text-xs font-semibold text-muted-foreground mb-2 px-1">
              Select Language &amp; Cultural Ceremony:
            </div>
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              <Link
                href={`/templates/${category}`}
                className="px-3.5 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap bg-secondary hover:bg-secondary/80 text-foreground border border-border transition-all"
              >
                All {currentCategory.name}
              </Link>
              {availableLanguages.map((l) => {
                const isActive = l.lang === lang;
                return (
                  <Link
                    key={l.lang}
                    href={`/templates/${category}/${l.lang}`}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all flex items-center gap-1.5 ${
                      isActive
                        ? "bg-amber-500 text-white font-semibold shadow-md shadow-amber-500/20"
                        : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-amber-500/40"
                    }`}
                  >
                    <span>{l.langName}</span>
                    <span className="opacity-75 text-[10px]">({l.ceremonyName.split(" ")[0]})</span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        {/* Small Small Compact Template Grid Section */}
        <section className="mb-14">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-foreground">
                Available {currentCategory.name} Designs ({categoryTemplates.length})
              </h2>
              <p className="text-xs text-muted-foreground mt-0.5">
                Click any design to customize in 300 DPI vector studio. All titles and text are 100% editable in English &amp; {seo.langName}.
              </p>
            </div>
          </div>

          {/* Compact Small Grid (2 cols mobile, 3 tablet, 4-6 desktop) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4">
            {categoryTemplates.map((template) => (
              <TemplateCard key={template.id} template={template} compact={true} />
            ))}
          </div>
        </section>

        {/* Cultural Background & Authentic Traditions Guide */}
        <section className="mb-14 bg-card border border-border rounded-3xl p-6 sm:p-8 shadow-sm">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-500">
              Cultural Heritage &amp; Rituals
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mt-1">
              {seo.culturalStory.title}
            </h2>
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
              {seo.culturalStory.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              {seo.culturalStory.rituals.map((ritual, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-secondary/60 border border-border/80">
                  <h3 className="font-semibold text-sm text-foreground flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-amber-500" />
                    {ritual.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">
                    {ritual.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Authentic Sample Wording Box */}
        <section className="mb-14">
          <div className="border border-border bg-card rounded-3xl p-6 sm:p-8 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-border">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-500">
                  Ready-to-Use Copy
                </span>
                <h2 className="text-2xl font-serif font-bold text-foreground mt-0.5">
                  {seo.sampleWording.title}
                </h2>
                <p className="text-xs text-muted-foreground mt-1">
                  Copy and paste directly into any card in our editor.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Regional Text Box */}
              <div className="p-5 rounded-2xl bg-secondary/40 border border-border">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wide">
                    {seo.nativeScript} Script
                  </span>
                </div>
                <pre className="text-xs text-foreground font-sans whitespace-pre-wrap leading-relaxed select-all bg-card/60 p-4 rounded-xl border border-border/60">
                  {seo.sampleWording.regional}
                </pre>
              </div>

              {/* English Text Box */}
              <div className="p-5 rounded-2xl bg-secondary/40 border border-border">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wide">
                    English Script
                  </span>
                </div>
                <pre className="text-xs text-foreground font-sans whitespace-pre-wrap leading-relaxed select-all bg-card/60 p-4 rounded-xl border border-border/60">
                  {seo.sampleWording.english}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Real Practical FAQs */}
        {seo.faqs.length > 0 && (
          <section className="mb-14">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-500">
                Frequently Asked Questions
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mt-1">
                Help &amp; Tips for {seo.ceremonyName} Cards
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {seo.faqs.map((faq, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-card border border-border shadow-sm">
                  <h3 className="text-sm font-semibold text-foreground flex items-start gap-2">
                    <span className="text-amber-500 font-bold">Q.</span>
                    <span>{faq.question}</span>
                  </h3>
                  <p className="text-xs text-muted-foreground mt-2 leading-relaxed pl-5">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
