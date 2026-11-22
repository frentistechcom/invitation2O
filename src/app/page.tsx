import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { TemplateCard } from "@/components/catalog/TemplateCard";
import { SAMPLE_TEMPLATES, CATEGORIES } from "@/data/templates";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  QrCode,
  Smartphone,
  ShieldCheck,
  Zap,
  Edit3,
  Layers,
  Heart,
  Printer,
  ChevronRight,
  Star,
} from "lucide-react";

export default function HomePage() {
  const featuredTemplates = SAMPLE_TEMPLATES.filter((t) => t.featured);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How do I create an Indian wedding invitation card online?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Simply select any Indian wedding template on InvitationCardMaker.in, click 'Customize This Card', type your bride & groom names, date, and venue details, paste your Google Maps link for the venue QR code, and click Download.",
        },
      },
      {
        "@type": "Question",
        name: "Can I add a Google Maps venue QR code to my invitation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! Our built-in QR Map feature lets you paste any Google Maps location URL. It automatically generates a crisp, scannable QR code on your card so guests can navigate directly with their phone cameras.",
        },
      },
      {
        "@type": "Question",
        name: "What resolution are the downloaded invitation cards?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Cards are rendered using our high-DPI vector canvas engine up to 300 DPI (2400x3600 pixels or higher). They are ultra-crisp with zero blurriness, perfect for WhatsApp sharing and professional offset/digital printing.",
        },
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-200">
      <Navbar />

      <script
        id="home-faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* LUXURY EDITORIAL HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-20 md:pt-24 md:pb-32 border-b border-border/60">
        {/* Soft Golden Ambient Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-amber-500/15 via-orange-500/10 to-amber-600/5 blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Editorial Headline & Actions */}
            <div className="lg:col-span-7 flex flex-col gap-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/25 w-fit mx-auto lg:mx-0 shadow-sm">
                <Sparkles className="w-3.5 h-3.5" />
                <span>The Premier Indian Invitation Studio</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-foreground leading-[1.1]">
                Bespoke Invitations for Life&apos;s Most{" "}
                <span className="italic font-normal font-serif text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600">
                  Sacred Moments.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Design royal Hindu wedding cards, Griha Pravesh, birthdays, and baby shower invitations online in
                minutes. High-definition 300 DPI vector clarity, authentic Indian calligraphy, and instant Google Maps
                venue QR codes.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center gap-3.5 justify-center lg:justify-start pt-2">
                <Link
                  href="/editor?template=royal-traditional-wedding"
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:to-orange-600 text-white font-semibold text-sm rounded-2xl shadow-xl shadow-orange-500/25 flex items-center justify-center gap-2.5 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Edit3 className="w-4 h-4" />
                  <span>Customize Wedding Card</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/templates"
                  className="w-full sm:w-auto px-7 py-4 bg-card hover:bg-secondary border border-border hover:border-muted-foreground/30 text-foreground font-semibold text-sm rounded-2xl transition-all shadow-sm"
                >
                  Explore All 50+ Templates
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-5 pt-4 text-xs text-muted-foreground border-t border-border/80">
                <span className="flex items-center gap-1.5">
                  <Printer className="w-4 h-4 text-amber-500" />
                  Print-Ready 300 DPI
                </span>
                <span className="flex items-center gap-1.5">
                  <QrCode className="w-4 h-4 text-amber-500" />
                  Live GPS Venue QR
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  Zero Watermark Export
                </span>
              </div>
            </div>

            {/* Right Column: Hero Interactive Mockup Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group max-w-sm w-full">
                {/* Ambient Card Shadow */}
                <div className="absolute -inset-2 bg-gradient-to-tr from-amber-500 to-orange-500 rounded-[2.5rem] blur-2xl opacity-20 group-hover:opacity-35 transition-opacity" />

                <div className="relative bg-card border border-border/80 rounded-3xl overflow-hidden shadow-2xl p-3.5 transition-all">
                  {/* Card Display Area */}
                  <div className="relative aspect-[2/3] w-full rounded-2xl overflow-hidden shadow-inner bg-secondary">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={SAMPLE_TEMPLATES[0].backgroundImage}
                      alt="Royal Arch Wedding Card"
                      className="absolute inset-0 w-full h-full object-cover"
                    />

                    {/* Interactive Floating Badge Overlays */}
                    <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-black/75 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-amber-500/40 text-[11px] text-amber-300 font-medium shadow-xl flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                      <span>Click to Edit Couple Names</span>
                    </div>

                    <div className="absolute bottom-6 right-6 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-amber-500/40 text-[10px] text-white font-medium shadow-xl flex items-center gap-2">
                      <QrCode className="w-4 h-4 text-amber-400" />
                      <span>GPS Venue Navigation</span>
                    </div>
                  </div>

                  {/* Launch Bar */}
                  <Link
                    href="/editor?template=royal-traditional-wedding"
                    className="w-full mt-3.5 py-3 bg-secondary hover:bg-secondary/80 text-foreground text-xs font-semibold rounded-xl flex items-center justify-center gap-2 border border-border shadow-sm transition-all"
                  >
                    <span>Open in Studio &amp; Customize</span>
                    <ArrowRight className="w-3.5 h-3.5 text-amber-500" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LUXURY CATEGORY SHOWCASE */}
      <section className="py-8 bg-secondary/40 border-b border-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none justify-start md:justify-center">
            {CATEGORIES.filter((c) => c.slug !== "all").map((cat) => (
              <Link
                key={cat.id}
                href={`/templates/${cat.slug}`}
                className="px-4 py-2.5 rounded-2xl bg-card border border-border hover:border-amber-500/60 hover:bg-card/80 text-xs font-medium text-foreground transition-all whitespace-nowrap flex items-center gap-2.5 shadow-sm hover:scale-105"
              >
                <span className="font-semibold">{cat.name}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TRENDING TEMPLATES COLLECTION */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-500 block mb-1">
                Handcrafted Collections
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                Trending Invitation Designs
              </h2>
            </div>
            <Link
              href="/templates"
              className="text-xs font-semibold text-amber-500 hover:text-amber-600 flex items-center gap-1 group"
            >
              <span>View All Templates</span>
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featuredTemplates.map((template) => (
              <TemplateCard key={template.id} template={template} />
            ))}
          </div>
        </div>
      </section>

      {/* WHY INVITATIONCARDMAKER IS 1000X BETTER (BENTO GRID) */}
      <section className="py-16 md:py-24 bg-secondary/30 border-y border-border/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-500 block mb-1">
              Architectural Superiority
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-foreground">
              Built for Modern Perfection
            </h2>
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
              Why our vector-precision canvas engine completely outperforms old WordPress sites and screenshot-based
              tools like InvitationBazaar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="p-8 rounded-3xl bg-card border border-border shadow-sm flex flex-col gap-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-500 flex items-center justify-center shadow-inner">
                <Printer className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-lg text-foreground">300 DPI Subpixel Precision</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                InvitationBazaar takes blurry DOM screenshots (html2canvas) that degrade on high-resolution phones. Our
                engine directly computes glyph vector coordinates up to 2800×4200 pixels for crisp professional
                printing.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-8 rounded-3xl bg-card border border-border shadow-sm flex flex-col gap-4">
              <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 text-orange-500 flex items-center justify-center shadow-inner">
                <QrCode className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-lg text-foreground">Built-in Google Maps GPS QR</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Paste any Google Maps link. Your guests scan the QR code from their mobile screen or physical card to
                launch turn-by-turn navigation directly in Google Maps without typing confusing addresses.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-8 rounded-3xl bg-card border border-border shadow-sm flex flex-col gap-4">
              <div className="w-12 h-12 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-rose-500 flex items-center justify-center shadow-inner">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-lg text-foreground">Touch-First Mobile Ergonomics</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Designed for smartphones from the ground up. Enjoy pinch-to-zoom, 4-corner drag handles, and bottom
                sheets for fast, frictionless editing without cumbersome desktop sidebars.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-500 block mb-1">
              Simple 3-Step Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              From Template to WhatsApp in 2 Minutes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="flex flex-col items-center text-center p-6 bg-card rounded-2xl border border-border">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-amber-500 to-orange-500 text-white font-bold text-lg flex items-center justify-center shadow-lg mb-4">
                1
              </div>
              <h3 className="font-semibold text-base mb-2">Pick Any Template</h3>
              <p className="text-xs text-muted-foreground">
                Browse our curated gallery of Hindu wedding arches, royal mandaps, birthdays, and Griha Pravesh designs.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-card rounded-2xl border border-border">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-amber-500 to-orange-500 text-white font-bold text-lg flex items-center justify-center shadow-lg mb-4">
                2
              </div>
              <h3 className="font-semibold text-base mb-2">Customize Details &amp; QR</h3>
              <p className="text-xs text-muted-foreground">
                Type bride &amp; groom names, date, and venue. Paste your Google Maps link to generate your venue QR
                code.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-card rounded-2xl border border-border">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-amber-500 to-orange-500 text-white font-bold text-lg flex items-center justify-center shadow-lg mb-4">
                3
              </div>
              <h3 className="font-semibold text-base mb-2">Instant High-DPI Download</h3>
              <p className="text-xs text-muted-foreground">
                Download lossless 300 DPI PNG, WhatsApp-ready JPG, or print-ready PDF ready to send to all your guests.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO FAQS ACCORDION */}
      <section className="py-16 md:py-24 bg-secondary/30 border-t border-border/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-500 block mb-1">
              Have Questions?
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            <div className="p-6 rounded-2xl bg-card border border-border shadow-sm">
              <h3 className="text-sm font-semibold text-foreground mb-2">
                How do I create an Indian wedding invitation card online?
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Select any Indian wedding template on our catalog, click &quot;Customize This Card&quot;, replace the demo text with
                your bride &amp; groom names, date, and venue details, paste your Google Maps link for the venue QR code, and
                click Download.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border shadow-sm">
              <h3 className="text-sm font-semibold text-foreground mb-2">
                Can I add a Google Maps venue QR code to my invitation?
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Yes! Our built-in QR Map feature lets you paste any Google Maps location URL. It automatically generates a
                crisp, scannable QR code on your card so guests can navigate directly with their phone cameras.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border shadow-sm">
              <h3 className="text-sm font-semibold text-foreground mb-2">
                What resolution are the downloaded invitation cards?
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Cards are rendered using our high-DPI vector canvas engine up to 300 DPI (2400×3600 pixels or higher).
                They are ultra-crisp with zero blurriness, perfect for WhatsApp sharing and professional offset/digital
                printing.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border shadow-sm">
              <h3 className="text-sm font-semibold text-foreground mb-2">
                Can I upload custom background templates later?
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Yes! The architecture is built to support any custom background image. Each background has pre-configured
                demo placements so users can immediately customize names, timings, and venues.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="py-20 bg-gradient-to-b from-card to-background border-t border-border text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-foreground">
            Design Your Dream Card Today
          </h2>
          <p className="text-sm text-muted-foreground mt-3 mb-8">
            Experience the ease of our next-generation online invitation studio.
          </p>
          <Link
            href="/editor?template=royal-traditional-wedding"
            className="inline-flex items-center gap-2.5 px-9 py-4 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:to-orange-600 text-white font-semibold text-sm rounded-2xl shadow-xl shadow-orange-500/25 transition-all hover:scale-105"
          >
            <Sparkles className="w-4 h-4" />
            <span>Launch Online Card Studio</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
