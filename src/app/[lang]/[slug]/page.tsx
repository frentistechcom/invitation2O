import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { TemplateCard } from "@/components/catalog/TemplateCard";
import { SAMPLE_TEMPLATES } from "@/data/templates";
import {
  getMultilingualSeoPage,
  getAllMultilingualParams,
  MULTILINGUAL_SEO_PAGES,
} from "@/data/multilingual-seo-pages";
import {
  ChevronRight,
  Sparkles,
  ArrowRight,
  QrCode,
  Printer,
  Smartphone,
  Edit3,
  CheckCircle2,
  LayoutGrid,
  ExternalLink,
} from "lucide-react";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ lang: string; slug: string }>;
}

export async function generateStaticParams() {
  return getAllMultilingualParams();
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang, slug } = await params;
  const page = getMultilingualSeoPage(lang, slug);
  if (!page) {
    return { title: "Invitation Card Maker Online | InvitationCardMaker.in" };
  }

  const canonicalUrl = `https://invitationcardmaker.in/${page.lang}/${page.slug}`;

  return {
    title: `${page.seoTitle} | InvitationCardMaker.in`,
    description: page.metaDescription,
    keywords: page.keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: page.seoTitle,
      description: page.metaDescription,
      url: canonicalUrl,
      siteName: "InvitationCardMaker.in",
      locale: page.lang === "marathi" ? "mr_IN" : page.lang === "hindi" ? "hi_IN" : "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: page.seoTitle,
      description: page.metaDescription,
    },
  };
}

export default async function MultilingualSeoLandingPage({ params }: PageProps) {
  const { lang, slug } = await params;
  const page = getMultilingualSeoPage(lang, slug);

  if (!page) {
    notFound();
  }

  // Filter naming ceremony templates
  const namingTemplates = SAMPLE_TEMPLATES.filter((t) => t.category === "naming-ceremony");

  // Schema: BreadcrumbList
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
        name: "Naming Ceremony Templates",
        item: "https://invitationcardmaker.in/templates/naming-ceremony",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: page.langName,
        item: `https://invitationcardmaker.in/${page.lang}`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: page.h1,
        item: `https://invitationcardmaker.in/${page.lang}/${page.slug}`,
      },
    ],
  };

  // Schema: FAQPage
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-200 font-sans">
      <Navbar />

      <script
        id="multilingual-breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        id="multilingual-faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        {/* Breadcrumb Navigation with clear anchors */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center flex-wrap gap-1.5 text-xs text-muted-foreground mb-6"
        >
          <Link href="/" className="hover:text-amber-500 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link
            href="/templates/naming-ceremony"
            className="hover:text-amber-500 transition-colors font-medium text-foreground"
          >
            Naming Ceremony (Main Category)
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href={`/${page.lang}`} className="hover:text-amber-500 transition-colors">
            {page.langName}
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-foreground font-medium truncate max-w-xs">{page.h1}</span>
        </nav>

        {/* HERO HEADER AREA */}
        <header className="max-w-4xl mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/25 mb-3 shadow-sm font-devanagari">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>{page.heroBadge}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-foreground tracking-tight leading-tight">
            {page.h1}
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground mt-3 leading-relaxed max-w-3xl">
            {page.subtitle}
          </p>

          {/* Quick Language Edition Switcher (Marathi / English / Hindi) */}
          <div className="flex flex-wrap items-center gap-2 mt-5 pt-2">
            <span className="text-xs text-muted-foreground font-medium mr-1">Other Editions:</span>
            {MULTILINGUAL_SEO_PAGES.map((p) => {
              const isActive = p.lang === page.lang;
              return (
                <Link
                  key={p.lang}
                  href={`/${p.lang}/${p.slug}`}
                  className={`text-xs px-3.5 py-1.5 rounded-xl border transition-all flex items-center gap-1.5 ${
                    isActive
                      ? "bg-amber-500 text-white font-semibold border-amber-500 shadow-sm"
                      : "bg-card hover:bg-secondary text-foreground border-border"
                  }`}
                >
                  <span className="font-semibold">{p.langName}</span>
                  <span className="text-[10px] opacity-80">({p.slug})</span>
                </Link>
              );
            })}
          </div>
        </header>

        {/* HIGH-IMPACT FOCUS CALLOUT: FUNNEL TO HOME & MAIN CATEGORY */}
        <section className="mb-10 p-5 sm:p-6 rounded-3xl bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/5 border border-amber-500/30 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="max-w-2xl">
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                Explore The Complete Collection
              </span>
              <h2 className="text-lg sm:text-xl font-serif font-bold text-foreground mt-0.5">
                {page.focusCallout.title}
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1 leading-relaxed">
                {page.focusCallout.description}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 shrink-0">
              <Link
                href="/templates/naming-ceremony"
                className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white text-xs font-semibold shadow-md shadow-amber-500/20 flex items-center justify-center gap-1.5 transition-all text-center"
              >
                <span>{page.focusCallout.categoryLinkText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/"
                className="px-4 py-2.5 rounded-xl bg-card hover:bg-secondary border border-border text-foreground text-xs font-semibold shadow-sm flex items-center justify-center gap-1.5 transition-all text-center"
              >
                <span>{page.focusCallout.homeLinkText}</span>
                <ExternalLink className="w-3.5 h-3.5 text-muted-foreground" />
              </Link>
            </div>
          </div>
        </section>

        {/* TEMPLATE SHOWCASE: Small Small Compact Preview Grid */}
        <section className="mb-14">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="flex items-center gap-2">
                <LayoutGrid className="w-4 h-4 text-amber-500" />
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-foreground">
                  Ready-to-Edit Naming Ceremony Templates ({namingTemplates.length} Designs)
                </h2>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Tap any card to open the live online editor. Change text to Marathi, Hindi, or English with custom fonts and venue QR.
              </p>
            </div>
            <Link
              href="/templates/naming-ceremony"
              className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold text-amber-600 dark:text-amber-400 hover:underline"
            >
              <span>View Main Category Page</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Compact 2 cols mobile, 3-4 tablet, 5-6 desktop */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4">
            {namingTemplates.map((template) => (
              <TemplateCard key={template.id} template={template} compact={true} />
            ))}
          </div>
        </section>

        {/* HUMAN-WRITTEN ENGLISH EDITORIAL & CULTURAL OVERVIEW */}
        <section className="mb-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 bg-card border border-border rounded-3xl p-6 sm:p-8 shadow-sm">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-500">
              Ceremony Guide &amp; Overview
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mt-1">
              {page.introTitle}
            </h2>
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
              {page.introEnglish}
            </p>

            {/* Design Features Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-6 border-t border-border">
              {page.features.map((feat, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-secondary/50 border border-border/70">
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <div className="w-7 h-7 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold text-xs">
                      {feat.iconName === "QrCode" ? (
                        <QrCode className="w-4 h-4" />
                      ) : feat.iconName === "Printer" ? (
                        <Printer className="w-4 h-4" />
                      ) : feat.iconName === "Smartphone" ? (
                        <Smartphone className="w-4 h-4" />
                      ) : (
                        <Edit3 className="w-4 h-4" />
                      )}
                    </div>
                    <h3 className="text-sm font-semibold text-foreground">{feat.title}</h3>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Quick Step-by-Step Guide */}
          <div className="lg:col-span-4 bg-secondary/40 border border-border rounded-3xl p-6 shadow-sm">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-500">
              Fast 2-Minute Process
            </span>
            <h3 className="text-lg font-serif font-bold text-foreground mt-1 mb-4">
              How to Create Your Card
            </h3>
            <div className="space-y-4">
              {page.stepByStepGuide.map((step) => (
                <div key={step.step} className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    {step.step}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-foreground">{step.title}</h4>
                    <p className="text-[11px] text-muted-foreground mt-0.5 leading-relaxed">
                      {step.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-5 border-t border-border/80">
              <Link
                href="/editor?template=golden-stars-cradle-swing-naming-ceremony"
                className="w-full py-2.5 px-4 bg-amber-500 hover:bg-amber-600 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>Launch Card Editor Now</span>
              </Link>
            </div>
          </div>
        </section>

        {/* NATIVE LANGUAGE CULTURAL SECTION (POPPINS DEVANAGARI FONT FOR MARATHI & HINDI) */}
        {page.nativeLanguageSection && (
          <section className="mb-14 bg-card border border-border rounded-3xl p-6 sm:p-8 shadow-sm">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-500 font-devanagari">
                {page.lang === "marathi" ? "महाराष्ट्रीयन परंपरा व संस्कृती" : "वैदिक परंपरा एवं संस्कृति"}
              </span>
              <h2 className="text-2xl sm:text-3xl font-devanagari font-bold text-foreground mt-1">
                {page.nativeLanguageSection.heading}
              </h2>
              <p className="text-xs sm:text-sm text-amber-600 dark:text-amber-400 font-medium mt-1 font-devanagari">
                {page.nativeLanguageSection.subheading}
              </p>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed font-devanagari">
                {page.nativeLanguageSection.nativeIntro}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                {page.nativeLanguageSection.ritualsOrCustoms.map((custom, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-secondary/50 border border-border/80">
                    <h3 className="font-semibold text-sm text-foreground flex items-center gap-1.5 font-devanagari">
                      <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0" />
                      <span>{custom.nativeTitle}</span>
                    </h3>
                    <span className="text-[10px] text-muted-foreground uppercase tracking-wide block mt-0.5">
                      {custom.title}
                    </span>
                    <p className="text-xs text-muted-foreground mt-2 leading-relaxed font-devanagari">
                      {custom.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Cultural Snippet (Palna Geet or Vedic Shloka) */}
              {page.nativeLanguageSection.culturalSnippet && (
                <div className="mt-6 p-5 rounded-2xl bg-amber-500/10 border border-amber-500/20">
                  <span className="text-xs font-bold text-amber-700 dark:text-amber-300 font-devanagari">
                    {page.nativeLanguageSection.culturalSnippet.title}
                  </span>
                  <pre className="text-xs sm:text-sm text-foreground font-devanagari whitespace-pre-wrap leading-relaxed mt-2 bg-card/60 p-4 rounded-xl border border-amber-500/20">
                    {page.nativeLanguageSection.culturalSnippet.nativeText}
                  </pre>
                  <p className="text-[11px] text-muted-foreground mt-2 italic">
                    {page.nativeLanguageSection.culturalSnippet.meaning}
                  </p>
                </div>
              )}
            </div>
          </section>
        )}

        {/* READY-TO-USE SAMPLE WORDINGS (AUTHENTIC SCRIPT & ENGLISH) */}
        <section className="mb-14">
          <div className="border border-border bg-card rounded-3xl p-6 sm:p-8 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-border">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-500">
                  Ready-to-Use Invitation Formats
                </span>
                <h2 className="text-2xl font-serif font-bold text-foreground mt-0.5">
                  Sample Wording &amp; Invitation Templates
                </h2>
                <p className="text-xs text-muted-foreground mt-1">
                  Copy and paste directly into any card layer in our online studio.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              {page.sampleInvitationWording.map((fmt, idx) => (
                <div key={idx} className="p-5 sm:p-6 rounded-2xl bg-secondary/40 border border-border">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/30">
                      {fmt.type}
                    </span>
                    <h3 className="text-sm font-bold text-foreground font-devanagari">{fmt.title}</h3>
                  </div>

                  <div className={`grid grid-cols-1 ${fmt.nativeScriptText ? "md:grid-cols-2" : ""} gap-5`}>
                    {/* Native Script Box (Poppins) if available */}
                    {fmt.nativeScriptText && (
                      <div className="p-4 rounded-xl bg-card border border-border/80">
                        <div className="text-[11px] font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wide mb-2">
                          {page.nativeScriptName} मजकूर (Devanagari Poppins)
                        </div>
                        <pre className="text-xs text-foreground font-devanagari whitespace-pre-wrap leading-relaxed select-all bg-secondary/30 p-3.5 rounded-lg border border-border/60">
                          {fmt.nativeScriptText}
                        </pre>
                      </div>
                    )}

                    {/* English Script Box (Inter) */}
                    <div className="p-4 rounded-xl bg-card border border-border/80">
                      <div className="text-[11px] font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wide mb-2">
                        English Script (Inter Font)
                      </div>
                      <pre className="text-xs text-foreground font-sans whitespace-pre-wrap leading-relaxed select-all bg-secondary/30 p-3.5 rounded-lg border border-border/60">
                        {fmt.englishScriptText}
                      </pre>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRACTICAL FAQS WITH STRUCTURED SCHEMA */}
        <section className="mb-14">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-500">
              Got Questions?
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mt-1">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {page.faqs.map((faq, idx) => (
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

        {/* SEO KEYWORD CLOUD & INTERNAL LINKS TO HOME AND CATEGORY */}
        <section className="mb-12 p-6 rounded-3xl bg-secondary/30 border border-border">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
              Explore More Invitation Topics &amp; Related Categories:
            </h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {page.stuffedKeywords.map((kw, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md text-[11px] bg-card border border-border text-muted-foreground"
                >
                  {kw}
                </span>
              ))}
            </div>

            {/* Strategic Internal Links */}
            <div className="pt-4 border-t border-border flex flex-wrap items-center justify-between gap-4 text-xs">
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/"
                  className="font-semibold text-amber-600 dark:text-amber-400 hover:underline flex items-center gap-1"
                >
                  <span>InvitationCardMaker.in Home</span>
                  <ChevronRight className="w-3 h-3" />
                </Link>
                <span className="text-border">•</span>
                <Link
                  href="/templates/naming-ceremony"
                  className="text-foreground hover:text-amber-500 font-medium"
                >
                  Naming Ceremony Category
                </Link>
                <span className="text-border">•</span>
                <Link
                  href="/templates/baby-shower"
                  className="text-foreground hover:text-amber-500 font-medium"
                >
                  Baby Shower (Dohale Jevan / Godh Bharai)
                </Link>
                <span className="text-border">•</span>
                <Link
                  href="/templates/housewarming"
                  className="text-foreground hover:text-amber-500 font-medium"
                >
                  Housewarming (Griha Pravesh)
                </Link>
                <span className="text-border">•</span>
                <Link
                  href="/templates/wedding"
                  className="text-foreground hover:text-amber-500 font-medium"
                >
                  Wedding (Lagna Patrika)
                </Link>
              </div>

              <Link
                href="/templates"
                className="px-3.5 py-1.5 rounded-lg bg-amber-500 text-white font-semibold hover:bg-amber-600 transition-colors"
              >
                Browse All Templates
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
