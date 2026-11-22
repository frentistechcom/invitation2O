"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { TemplateCard } from "@/components/catalog/TemplateCard";
import { SAMPLE_TEMPLATES, CATEGORIES } from "@/data/templates";
import { Search, Sparkles, Filter } from "lucide-react";

export default function TemplatesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

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
    <div className="min-h-screen flex flex-col bg-neutral-950 text-white">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>High-Definition Invitation Catalog</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-neutral-100 tracking-tight">
            Indian Invitation Card Templates
          </h1>
          <p className="text-sm text-neutral-400 mt-2">
            Click on any template to open our online studio, customize bride & groom names, add your venue Google Maps
            QR code, and download in print-ready 300 DPI resolution.
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
                    ? "bg-amber-500 text-white shadow-md shadow-amber-500/20"
                    : "bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by ceremony, theme..."
              className="w-full pl-9 pr-3 py-2 bg-neutral-900 border border-neutral-800 rounded-xl text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500 transition-colors"
            />
          </div>
        </div>

        {/* Templates Grid */}
        {filteredTemplates.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredTemplates.map((template) => (
              <TemplateCard key={template.id} template={template} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 border border-dashed border-neutral-800 rounded-2xl">
            <p className="text-neutral-400 text-sm">No templates matched your search criteria.</p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
              }}
              className="mt-3 text-xs text-amber-400 hover:underline"
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
