"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { TemplateCard } from "@/components/catalog/TemplateCard";
import { SAMPLE_TEMPLATES, CATEGORIES } from "@/data/templates";
import { Search, Sparkles, LayoutGrid, Grid3X3 } from "lucide-react";

export default function TemplatesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isCompact, setIsCompact] = useState<boolean>(true);

  const filteredTemplates = SAMPLE_TEMPLATES.filter((t) => {
    const matchesCat = selectedCategory === "all" || t.category === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === "" ||
      t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
      t.categoryName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-200">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/25 mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>High-Resolution Invitation Catalog</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-foreground tracking-tight">
            Indian Invitation Card Templates
          </h1>
          <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
            Click any template to customize names, wedding dates, or baby details. Add a Google Maps venue QR code and download in 300 DPI for WhatsApp and print.
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 scrollbar-none">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.slug)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                  selectedCategory === cat.slug
                    ? "bg-amber-500 text-white shadow-md shadow-amber-500/20 font-semibold"
                    : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-amber-500/40"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Search Box & View Density Toggle */}
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <div className="relative flex-1 sm:w-64">
              <Search className="w-4 h-4 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search templates, themes..."
                className="w-full pl-9 pr-3 py-2 bg-card border border-border rounded-xl text-xs text-foreground placeholder-muted-foreground focus:outline-none focus:border-amber-500 transition-colors"
              />
            </div>

            {/* Density Toggle Button */}
            <div className="flex items-center bg-card border border-border rounded-xl p-1 shrink-0">
              <button
                type="button"
                onClick={() => setIsCompact(true)}
                title="Small Compact View"
                className={`p-1.5 rounded-lg text-xs transition-colors ${
                  isCompact ? "bg-amber-500 text-white shadow-sm" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Grid3X3 className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setIsCompact(false)}
                title="Detailed View"
                className={`p-1.5 rounded-lg text-xs transition-colors ${
                  !isCompact ? "bg-amber-500 text-white shadow-sm" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Templates Grid (Compact Small or Detailed) */}
        {filteredTemplates.length > 0 ? (
          isCompact ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4">
              {filteredTemplates.map((template) => (
                <TemplateCard key={template.id} template={template} compact={true} />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredTemplates.map((template) => (
                <TemplateCard key={template.id} template={template} compact={false} />
              ))}
            </div>
          )
        ) : (
          <div className="text-center py-20 border border-dashed border-border rounded-2xl bg-card/40">
            <p className="text-muted-foreground text-sm">No templates matched your search criteria.</p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
              }}
              className="mt-3 text-xs text-amber-500 font-semibold hover:underline"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
