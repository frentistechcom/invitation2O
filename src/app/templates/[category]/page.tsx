import React from "react";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { TemplateCard } from "@/components/catalog/TemplateCard";
import { SAMPLE_TEMPLATES, CATEGORIES } from "@/data/templates";
import { getLanguagesForCategory } from "@/data/seo-content";
import { CATEGORY_SEO_DATA } from "@/data/category-seo";
import Link from "next/link";
import {
  ChevronRight,
  Sparkles,
  LayoutGrid,
  CheckCircle2,
  ArrowRight,
  QrCode,
  Printer,
  Smartphone,
  ExternalLink,
} from "lucide-react";
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
  const seo = CATEGORY_SEO_DATA[category];

  if (!cat) return { title: "Templates Not Found" };

  const title = seo
    ? `${seo.seoTitle} | InvitationCardMaker.in`
    : `${cat.name} Invitation Card Templates - Online Maker | InvitationCardMaker.in`;
  const description =
    seo?.metaDescription ||
    `Create customized ${cat.name} cards online in 2 minutes. Free demo text placement, Google Maps QR code, traditional Indian fonts, and print-ready 300 DPI download.`;

  return {
    title,
    description,
    keywords: seo?.stuffedKeywords,
    alternates: {
      canonical: `/templates/${category}`,
    },
    openGraph: {
      title,
      description,
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
  const seo = CATEGORY_SEO_DATA[category];

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

  const faqJsonLd = seo?.faqs?.length
    ? {
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
      }
    : null;

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-200 font-sans">
      <Navbar />

      <script
        id="category-breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {faqJsonLd && (
        <script
          id="category-faq-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-1.5 text-xs text-muted-foreground mb-6"
        >
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

        {/* Category Header with Rich Keywords & H1 */}
        <div className="max-w-4xl mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/25 mb-2 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{seo?.heroBadge || "Ready-to-Edit Templates • 100% Free"}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-foreground tracking-tight leading-tight">
            {seo?.h1 || currentCategory.name}
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground mt-3 leading-relaxed max-w-3xl">
            {seo?.leadParagraph || currentCategory.description}
          </p>

          {/* Quick focus link to Home Page */}
          <div className="flex items-center gap-2 mt-4 text-xs">
            <Link
              href="/"
              className="text-amber-600 dark:text-amber-400 font-semibold hover:underline flex items-center gap-1"
            >
              <span>← Back to Main Invitation Maker Homepage</span>
            </Link>
          </div>
        </div>

        {/* Specialized Regional Editions & Marathi Landing Links (Super High Priority!) */}
        {seo?.regionalLinks && seo.regionalLinks.length > 0 && (
          <div className="mb-10 p-5 rounded-3xl bg-card border border-amber-500/30 shadow-sm">
            <div className="flex items-center justify-between mb-3 px-1">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                  Specialized Cultural &amp; Language Editions
                </span>
                <h2 className="text-base sm:text-lg font-serif font-bold text-foreground">
                  {seo.regionalEditionsTitle}
                </h2>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 mt-2">
              {seo.regionalLinks.map((rLink, idx) => (
                <Link
                  key={idx}
                  href={rLink.href}
                  className="p-4 rounded-2xl bg-secondary/60 hover:bg-amber-500/10 border border-border hover:border-amber-500/40 transition-all group flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-foreground group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors flex items-center justify-between">
                      <span>{rLink.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                    </h3>
                    <p className="text-[11px] text-muted-foreground mt-1.5 leading-relaxed line-clamp-2">
                      {rLink.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Regional Language Bar from Database */}
        {regionalLanguages.length > 0 && (
          <div className="mb-8 p-3 sm:p-4 rounded-2xl bg-card border border-border shadow-sm">
            <div className="flex items-center justify-between mb-2 px-1">
              <span className="text-xs font-semibold text-muted-foreground">
                Browse Regional Wording Variations:
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
              Select a Template to Customize ({categoryTemplates.length} Designs)
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

        {/* Comprehensive SEO Editorial & Guide Section (Fed with high intent keywords) */}
        {seo?.detailedGuide && (
          <section className="mb-14 p-6 sm:p-8 rounded-3xl bg-card border border-border shadow-sm">
            <div className="max-w-4xl">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-500">
                Editorial Guide &amp; Features
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mt-1 mb-4">
                {seo.detailedGuide.heading}
              </h2>
              <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                {seo.detailedGuide.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              {/* Feature Highlights Grid */}
              {seo.keyFeatures && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-6 border-t border-border">
                  {seo.keyFeatures.map((feat, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-secondary/50 border border-border/70">
                      <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                        <span>{feat.title}</span>
                      </h3>
                      <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed pl-6">
                        {feat.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        )}

        {/* Category FAQs Section */}
        {seo?.faqs && seo.faqs.length > 0 && (
          <section className="mb-14">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-500">
                Got Questions?
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mt-1">
                Frequently Asked Questions about {currentCategory.name} Cards
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

        {/* High-Intent SEO Keyword Tag Cloud */}
        {seo?.stuffedKeywords && (
          <section className="mb-12 p-6 rounded-3xl bg-secondary/30 border border-border">
            <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
              Popular Searches &amp; Card Maker Keywords:
            </h3>
            <div className="flex flex-wrap gap-2">
              {seo.stuffedKeywords.map((kw, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md text-[11px] bg-card border border-border text-muted-foreground"
                >
                  {kw}
                </span>
              ))}
            </div>

            {/* Direct Link to Home Page & Other Categories */}
            <div className="pt-4 mt-4 border-t border-border flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/"
                  className="font-semibold text-amber-600 dark:text-amber-400 hover:underline flex items-center gap-1"
                >
                  <span>InvitationCardMaker.in Home</span>
                  <ChevronRight className="w-3 h-3" />
                </Link>
                <span className="text-border">•</span>
                <Link href="/templates" className="text-foreground hover:text-amber-500">
                  All Templates
                </Link>
                <span className="text-border">•</span>
                <Link href="/marathi" className="text-foreground hover:text-amber-500 font-devanagari">
                  मराठी निमंत्रण पत्रिका
                </Link>
              </div>

              <Link
                href="/editor?template=golden-stars-cradle-swing-naming-ceremony"
                className="px-3.5 py-1.5 rounded-lg bg-amber-500 text-white font-semibold hover:bg-amber-600 transition-colors"
              >
                Customize a Card Now
              </Link>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
