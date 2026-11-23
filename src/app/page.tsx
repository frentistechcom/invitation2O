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
  Edit3,
  Printer,
  ChevronRight,
  Star,
  MapPin,
  HeartHandshake,
} from "lucide-react";

export default function HomePage() {
  const featuredTemplates = SAMPLE_TEMPLATES.filter((t) => t.featured);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How do I make an Indian invitation card online?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Choose any template for weddings, baby showers, or Griha Pravesh. Tap to customize names, date, and venue details. Paste your Google Maps link to add a venue QR code, and download in 300 DPI for WhatsApp or physical printing.",
        },
      },
      {
        "@type": "Question",
        name: "Can I add a Google Maps venue QR code to the card?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Simply paste your Google Maps link into the QR code generator in our editor. Guests can scan the QR code using their phone camera to get turn-by-turn directions to the venue.",
        },
      },
      {
        "@type": "Question",
        name: "Is this free to use, and is there any watermark?",
        answer: {
          "@type": "Answer",
          text: "It is 100% free with no watermarks and no sign-up required. You can download crisp 300 DPI images ready for WhatsApp and printing.",
        },
      },
      {
        "@type": "Question",
        name: "Can I type invitation text in Hindi or Marathi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! Our editor fully supports Unicode Hindi, Marathi, Gujarati, Telugu, and Tamil fonts (including Rozha One, Yatra One, and Noto Serif Devanagari) as well as English.",
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

      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-10 pb-16 md:pt-20 md:pb-28 border-b border-border/70">
        {/* Warm Ambient Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-amber-500/15 via-orange-500/10 to-amber-600/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Column: Direct Human Headline & Actions */}
            <div className="lg:col-span-7 flex flex-col gap-5 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/25 w-fit mx-auto lg:mx-0 shadow-sm">
                <Sparkles className="w-3.5 h-3.5" />
                <span>100% Free • No Watermark • Instant Download</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-foreground leading-[1.15]">
                Make Beautiful Indian Invitation Cards in{" "}
                <span className="italic font-normal font-serif text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600">
                  2 Minutes.
                </span>
              </h1>

              <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Customize wedding cards, Griha Pravesh, Dohale Jevan, Namkaran, and birthdays online. Edit names and dates easily, add a Google Maps venue QR code, and download in print-ready 300 DPI or share straight to WhatsApp.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start pt-2">
                <Link
                  href="/editor?template=royal-traditional-wedding"
                  className="w-full sm:w-auto px-7 py-3.5 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:to-orange-600 text-white font-semibold text-sm rounded-xl shadow-lg shadow-orange-500/20 flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Edit3 className="w-4 h-4" />
                  <span>Customize a Wedding Card</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/templates"
                  className="w-full sm:w-auto px-6 py-3.5 bg-card hover:bg-secondary border border-border text-foreground font-semibold text-sm rounded-xl transition-all shadow-sm"
                >
                  Browse All Templates
                </Link>
              </div>

              {/* Direct Trust Indicators */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-5 pt-4 text-xs text-muted-foreground border-t border-border/80">
                <span className="flex items-center gap-1.5">
                  <Printer className="w-4 h-4 text-amber-500" />
                  Print-Ready 300 DPI
                </span>
                <span className="flex items-center gap-1.5">
                  <QrCode className="w-4 h-4 text-amber-500" />
                  Scannable Google Maps QR
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  Zero Watermark, 100% Free
                </span>
              </div>
            </div>

            {/* Right Column: Interactive Card Preview */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group max-w-sm w-full">
                <div className="relative bg-card border border-border rounded-3xl overflow-hidden shadow-xl p-3.5 transition-all">
                  <div className="relative aspect-[2/3] w-full rounded-2xl overflow-hidden shadow-inner bg-secondary">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={SAMPLE_TEMPLATES[0].thumbnail || SAMPLE_TEMPLATES[0].backgroundImage}
                      alt="Sample Indian Wedding Invitation Card"
                      className="absolute inset-0 w-full h-full object-cover"
                    />

                    {/* Floating Badges */}
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-black/75 backdrop-blur-md px-3 py-1 rounded-full border border-amber-500/40 text-[11px] text-amber-300 font-medium shadow-lg flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-amber-400" />
                      <span>Tap to edit any text</span>
                    </div>

                    <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-amber-500/40 text-[10px] text-white font-medium shadow-md flex items-center gap-1.5">
                      <QrCode className="w-3.5 h-3.5 text-amber-400" />
                      <span>Venue Navigation QR</span>
                    </div>
                  </div>

                  <Link
                    href="/editor?template=royal-traditional-wedding"
                    className="w-full mt-3 py-2.5 bg-secondary hover:bg-secondary/80 text-foreground text-xs font-semibold rounded-xl flex items-center justify-center gap-2 border border-border shadow-sm transition-all"
                  >
                    <span>Open in Editor</span>
                    <ArrowRight className="w-3.5 h-3.5 text-amber-500" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK CATEGORY STRIP */}
      <section className="py-6 bg-secondary/30 border-b border-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2.5 overflow-x-auto pb-1 scrollbar-none justify-start md:justify-center">
            {CATEGORIES.filter((c) => c.slug !== "all").map((cat) => (
              <Link
                key={cat.id}
                href={`/templates/${cat.slug}`}
                className="px-4 py-2 rounded-xl bg-card border border-border hover:border-amber-500/60 hover:bg-secondary text-xs font-medium text-foreground transition-all whitespace-nowrap flex items-center gap-2 shadow-sm"
              >
                <span className="font-semibold">{cat.name}</span>
                <span className="text-[10px] text-muted-foreground">({cat.count})</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* POPULAR REGIONAL SEARCHES */}
      <section className="py-8 border-b border-border/60 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-500">
              Popular Cultural Traditions:
            </span>
            <div className="flex flex-wrap gap-2 text-xs">
              <Link
                href="/templates/baby-shower/marathi"
                className="px-3 py-1.5 rounded-lg bg-secondary hover:bg-amber-500/10 hover:text-amber-600 dark:hover:text-amber-400 border border-border transition-colors font-medium"
              >
                डोहळे जेवण (Dohale Jevan)
              </Link>
              <Link
                href="/templates/baby-shower/hindi"
                className="px-3 py-1.5 rounded-lg bg-secondary hover:bg-amber-500/10 hover:text-amber-600 dark:hover:text-amber-400 border border-border transition-colors font-medium"
              >
                गोद भराई (Godh Bharai)
              </Link>
              <Link
                href="/templates/housewarming/marathi"
                className="px-3 py-1.5 rounded-lg bg-secondary hover:bg-amber-500/10 hover:text-amber-600 dark:hover:text-amber-400 border border-border transition-colors font-medium"
              >
                वास्तु शांत (Vastu Shanti)
              </Link>
              <Link
                href="/templates/housewarming/hindi"
                className="px-3 py-1.5 rounded-lg bg-secondary hover:bg-amber-500/10 hover:text-amber-600 dark:hover:text-amber-400 border border-border transition-colors font-medium"
              >
                गृह प्रवेश (Griha Pravesh)
              </Link>
              <Link
                href="/templates/naming-ceremony/marathi"
                className="px-3 py-1.5 rounded-lg bg-secondary hover:bg-amber-500/10 hover:text-amber-600 dark:hover:text-amber-400 border border-border transition-colors font-medium"
              >
                बारसे (Barse)
              </Link>
              <Link
                href="/templates/wedding/marathi"
                className="px-3 py-1.5 rounded-lg bg-secondary hover:bg-amber-500/10 hover:text-amber-600 dark:hover:text-amber-400 border border-border transition-colors font-medium"
              >
                लग्नपत्रिका (Lagna Patrika)
              </Link>
              <Link
                href="/templates/birthday/first-birthday"
                className="px-3 py-1.5 rounded-lg bg-secondary hover:bg-amber-500/10 hover:text-amber-600 dark:hover:text-amber-400 border border-border transition-colors font-medium"
              >
                1st Birthday
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TRENDING TEMPLATES COLLECTION */}
      <section className="py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-500 block mb-1">
                Handcrafted Designs
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground">
                Featured Invitation Cards
              </h2>
            </div>
            <Link
              href="/templates"
              className="text-xs font-semibold text-amber-500 hover:text-amber-600 flex items-center gap-1 group"
            >
              <span>View All 22+ Templates</span>
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Compact 6-column grid for fast scanning */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
            {featuredTemplates.slice(0, 12).map((template) => (
              <TemplateCard key={template.id} template={template} compact={true} />
            ))}
          </div>
        </div>
      </section>

      {/* REAL HUMAN BENEFITS */}
      <section className="py-14 md:py-20 bg-secondary/30 border-y border-border/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-500 block mb-1">
              Why People Love It
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground">
              Everything You Need to Invite Guests
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-card border border-border shadow-sm flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center">
                <Printer className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-base text-foreground">Crisp 300 DPI Print Quality</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Most online tools generate low-res screenshots that look blurry when sent on WhatsApp or printed. Our generator creates ultra-clear vector files that look sharp on phone screens and print cleanly at any local photo lab.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border shadow-sm flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center">
                <QrCode className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-base text-foreground">Google Maps Venue QR Code</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Save your guests from getting lost or calling for directions. Paste your Google Maps link to add an instant scannable QR code on the card. Guests simply scan with their phone camera to start turn-by-turn navigation.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border shadow-sm flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-500 flex items-center justify-center">
                <Smartphone className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-base text-foreground">Easy to Edit on Your Phone</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Built from scratch for mobile touchscreens. Tap any name or date to edit, resize with simple handles, and download directly to your photos gallery. No app install or account needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS (SIMPLE 3 STEPS) */}
      <section className="py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-500 block mb-1">
              Easy Steps
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground">
              From Template to WhatsApp in 2 Minutes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center p-6 bg-card rounded-2xl border border-border">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-500 to-orange-500 text-white font-bold text-sm flex items-center justify-center shadow-md mb-3">
                1
              </div>
              <h3 className="font-semibold text-sm mb-1.5">Pick a Design</h3>
              <p className="text-xs text-muted-foreground">
                Choose from traditional Indian wedding mandaps, marigold housewarming torans, or cute cradle baby themes.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-card rounded-2xl border border-border">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-500 to-orange-500 text-white font-bold text-sm flex items-center justify-center shadow-md mb-3">
                2
              </div>
              <h3 className="font-semibold text-sm mb-1.5">Edit Names &amp; Venue</h3>
              <p className="text-xs text-muted-foreground">
                Type names, muhurat time, and address. Paste your Google Maps link to add your scannable venue QR code.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-card rounded-2xl border border-border">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-500 to-orange-500 text-white font-bold text-sm flex items-center justify-center shadow-md mb-3">
                3
              </div>
              <h3 className="font-semibold text-sm mb-1.5">Download &amp; Send</h3>
              <p className="text-xs text-muted-foreground">
                Download a sharp, watermark-free image or PDF ready to send on WhatsApp or print at a photo studio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* REAL HUMAN REVIEWS */}
      <section className="py-14 md:py-20 bg-secondary/30 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-500 block mb-1">
              Real Experiences
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground">
              What Families Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-card border border-border shadow-sm flex flex-col justify-between">
              <div className="flex items-center gap-1 text-amber-500 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <p className="text-xs text-foreground leading-relaxed italic mb-4">
                &ldquo;Created our wedding card in 5 minutes on my phone. The Google Maps QR code was a lifesaver for our guests driving to the banquet hall in Pune.&rdquo;
              </p>
              <div className="text-xs font-semibold text-muted-foreground">
                — Rohit &amp; Pooja Deshmukh, Pune
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border shadow-sm flex flex-col justify-between">
              <div className="flex items-center gap-1 text-amber-500 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <p className="text-xs text-foreground leading-relaxed italic mb-4">
                &ldquo;Printed our Griha Pravesh card at our local press on 300 GSM textured paper. The resolution was completely sharp, zero blurriness.&rdquo;
              </p>
              <div className="text-xs font-semibold text-muted-foreground">
                — Ananya &amp; Kartik Sharma, Delhi
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border shadow-sm flex flex-col justify-between">
              <div className="flex items-center gap-1 text-amber-500 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <p className="text-xs text-foreground leading-relaxed italic mb-4">
                &ldquo;The Marathi wording for Dohale Jevan was exactly what our elders wanted. So simple to copy, customize, and share on family WhatsApp groups.&rdquo;
              </p>
              <div className="text-xs font-semibold text-muted-foreground">
                — Snehal &amp; Mandar Patil, Mumbai
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section className="py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-500 block mb-1">
              Common Questions
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            <div className="p-5 rounded-2xl bg-card border border-border shadow-sm">
              <h3 className="text-sm font-semibold text-foreground mb-1.5">
                How do I make an Indian invitation card online?
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Choose any template from our catalog, tap &ldquo;Customize This Card&rdquo;, replace the demo text with your family names, date, and venue details, paste your Google Maps link for the venue QR code, and click Download.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-card border border-border shadow-sm">
              <h3 className="text-sm font-semibold text-foreground mb-1.5">
                Can I add a Google Maps venue QR code to the card?
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Yes. Just paste your Google Maps link into our QR code tool. It places a clean, scannable QR code on your card so guests can scan and navigate straight to your venue.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-card border border-border shadow-sm">
              <h3 className="text-sm font-semibold text-foreground mb-1.5">
                Is this free, and does it add a watermark?
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                It is 100% free with zero watermarks and no sign-up or registration required. You get clean, high-resolution downloads ready for immediate use.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-card border border-border shadow-sm">
              <h3 className="text-sm font-semibold text-foreground mb-1.5">
                Can I type invitation text in Hindi, Marathi, or Gujarati?
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Yes. Our editor supports full Unicode Indian languages and comes loaded with genuine regional fonts like Rozha One, Yatra One, and Noto Serif Devanagari. You can type or paste regional text easily.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-16 bg-gradient-to-b from-card to-background border-t border-border text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-foreground">
            Ready to Create Your Invitation?
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground mt-2 mb-6">
            Pick a design, add your names and venue QR code, and download in seconds.
          </p>
          <Link
            href="/templates"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:to-orange-600 text-white font-semibold text-xs sm:text-sm rounded-xl shadow-lg shadow-orange-500/20 transition-all hover:scale-105 active:scale-95"
          >
            <Sparkles className="w-4 h-4" />
            <span>Browse All Invitation Templates</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
