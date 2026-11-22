import React from "react";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { TemplateCard } from "@/components/catalog/TemplateCard";
import { SAMPLE_TEMPLATES, CATEGORIES } from "@/data/templates";
import Link from "next/link";
import { ChevronRight, Sparkles } from "lucide-react";
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
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const currentCategory = CATEGORIES.find((c) => c.slug === category);

  if (!currentCategory) {
    notFound();
  }

  const categoryTemplates = SAMPLE_TEMPLATES.filter((t) => t.category === category);

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
    <div className="min-h-screen flex flex-col bg-neutral-950 text-white">
      <Navbar />

      <script
        id="category-breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-1.5 text-xs text-neutral-400 mb-6">
          <Link href="/" className="hover:text-amber-400 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/templates" className="hover:text-amber-400 transition-colors">
            Templates
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-neutral-200 font-medium">{currentCategory.name}</span>
        </nav>

        {/* Category Header */}
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ready-to-Edit Templates</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-neutral-100">{currentCategory.name}</h1>
          <p className="text-sm text-neutral-400 mt-2">{currentCategory.description}</p>
        </div>

        {/* Template Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categoryTemplates.map((template) => (
            <TemplateCard key={template.id} template={template} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
