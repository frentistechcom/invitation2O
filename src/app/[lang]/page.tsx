import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { TemplateCard } from "@/components/catalog/TemplateCard";
import { SAMPLE_TEMPLATES } from "@/data/templates";
import {
  MULTILINGUAL_SEO_PAGES,
} from "@/data/multilingual-seo-pages";
import {
  ChevronRight,
  Sparkles,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import type { Metadata } from "next";

interface LangIndexProps {
  params: Promise<{ lang: string }>;
}

export async function generateStaticParams() {
  return [
    { lang: "marathi" },
    { lang: "english" },
    { lang: "hindi" },
  ];
}

export async function generateMetadata({ params }: LangIndexProps): Promise<Metadata> {
  const { lang } = await params;
  const page = MULTILINGUAL_SEO_PAGES.find((p) => p.lang === lang);

  if (!page) {
    return { title: "Invitation Card Maker Online | InvitationCardMaker.in" };
  }

  return {
    title: `${page.langName} Invitation Card Templates & Online Maker | InvitationCardMaker.in`,
    description: `Create authentic ${page.langName} invitation cards for Naming Ceremony (Namkaran), Baby Shower, Wedding, and Housewarming. Download free 300 DPI cards with Google Maps QR code.`,
    alternates: {
      canonical: `/${lang}`,
    },
  };
}

export default async function LanguageIndexPage({ params }: LangIndexProps) {
  const { lang } = await params;
  const targetPages = MULTILINGUAL_SEO_PAGES.filter((p) => p.lang === lang);

  if (targetPages.length === 0) {
    notFound();
  }

  const primaryPage = targetPages[0];
  const namingTemplates = SAMPLE_TEMPLATES.filter((t) => t.category === "naming-ceremony");

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-200 font-sans">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-1.5 text-xs text-muted-foreground mb-6"
        >
          <Link href="/" className="hover:text-amber-500 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link
            href="/templates/naming-ceremony"
            className="hover:text-amber-500 transition-colors"
          >
            Naming Ceremony
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-foreground font-medium">{primaryPage.langName} Invitation Cards</span>
        </nav>

        {/* Hero Header */}
        <header className="max-w-4xl mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/25 mb-3 shadow-sm font-devanagari">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>{primaryPage.heroBadge}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-foreground tracking-tight leading-tight">
            {primaryPage.langName} Invitation Card Maker Online
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground mt-3 leading-relaxed max-w-3xl">
            {primaryPage.subtitle}
          </p>
        </header>

        {/* Priority Dedicated Editions Cards */}
        <section className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-5">
          {MULTILINGUAL_SEO_PAGES.map((page) => (
            <div
              key={page.lang}
              className="p-6 rounded-2xl bg-card border border-border shadow-sm flex flex-col justify-between hover:border-amber-500/50 transition-all group"
            >
              <div>
                <span className="text-[11px] font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wide block mb-1">
                  {page.langName} Edition
                </span>
                <h2 className="text-lg font-serif font-bold text-foreground group-hover:text-amber-500 transition-colors">
                  {page.h1}
                </h2>
                <p className="text-xs text-muted-foreground mt-2 line-clamp-3 leading-relaxed">
                  {page.subtitle}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-border">
                <Link
                  href={`/${page.lang}/${page.slug}`}
                  className="w-full py-2 px-3 rounded-xl bg-secondary hover:bg-amber-500 hover:text-white text-foreground text-xs font-semibold flex items-center justify-between transition-all"
                >
                  <span>Open {page.langName} ({page.slug})</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </section>

        {/* Focus Funnel to Home Page & Main Category Page */}
        <section className="mb-12 p-6 rounded-3xl bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/5 border border-amber-500/30">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                Main English Catalog
              </span>
              <h2 className="text-xl font-serif font-bold text-foreground mt-1">
                Explore All Invitation Categories &amp; Design Studio
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                Looking for wedding invitations, Griha Pravesh, baby showers, or birthday cards? Visit our English home page and category catalog.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/templates/naming-ceremony"
                className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white text-xs font-semibold shadow-md shadow-amber-500/20 flex items-center gap-1.5"
              >
                <span>Naming Ceremony Category</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/"
                className="px-4 py-2.5 rounded-xl bg-card hover:bg-secondary border border-border text-foreground text-xs font-semibold shadow-sm flex items-center gap-1.5"
              >
                <span>Visit Homepage</span>
                <ExternalLink className="w-3.5 h-3.5 text-muted-foreground" />
              </Link>
            </div>
          </div>
        </section>

        {/* Compact Templates Grid */}
        <section className="mb-14">
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-foreground mb-4">
            Popular Naming Ceremony &amp; Namkaran Designs
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4">
            {namingTemplates.map((template) => (
              <TemplateCard key={template.id} template={template} compact={true} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
