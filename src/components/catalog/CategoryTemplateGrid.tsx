"use client";

import React, { useState } from "react";
import { CardTemplate } from "@/types/editor";
import { TemplateCard } from "./TemplateCard";
import { LayoutGrid, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

interface CategoryTemplateGridProps {
  templates: CardTemplate[];
  category: string;
  categoryName: string;
  subLabels: {
    english: string;
    marathi: string;
    hindi: string;
  };
  regionalHrefs?: {
    english?: string;
    marathi?: string;
    hindi?: string;
  };
}

export const CategoryTemplateGrid: React.FC<CategoryTemplateGridProps> = ({
  templates,
  category,
  categoryName,
  subLabels,
  regionalHrefs,
}) => {
  // English is selected by default
  const [activeTab, setActiveTab] = useState<"english" | "all" | "marathi" | "hindi">("english");

  // Separate designs by language
  const isMarathiTemplate = (t: CardTemplate) => {
    const idLower = t.id.toLowerCase();
    const slugLower = t.slug.toLowerCase();
    const titleLower = t.title.toLowerCase();
    const tagsLower = t.tags.map((tag) => tag.toLowerCase());

    return (
      idLower.includes("marathi") ||
      slugLower.includes("marathi") ||
      titleLower.includes("(marathi)") ||
      tagsLower.includes("marathi") ||
      tagsLower.includes("marathi birthday") ||
      t.tags.includes("मराठी")
    );
  };

  const isHindiTemplate = (t: CardTemplate) => {
    const idLower = t.id.toLowerCase();
    const slugLower = t.slug.toLowerCase();
    const titleLower = t.title.toLowerCase();
    const tagsLower = t.tags.map((tag) => tag.toLowerCase());

    return (
      idLower.includes("hindi") ||
      slugLower.includes("hindi") ||
      titleLower.includes("(hindi)") ||
      tagsLower.includes("hindi") ||
      tagsLower.includes("hindi birthday") ||
      t.tags.includes("हिन्दी")
    );
  };

  const englishTemplates = templates.filter((t) => !isMarathiTemplate(t) && !isHindiTemplate(t));
  const marathiTemplates = templates.filter(isMarathiTemplate);
  const hindiTemplates = templates.filter(isHindiTemplate);

  // Tab definitions in exact user-requested order: English by default, then All designs, then other languages
  const tabs: {
    id: "english" | "all" | "marathi" | "hindi";
    label: string;
    subLabel?: string;
    count: number;
    href?: string;
  }[] = [
    {
      id: "english",
      label: "English",
      subLabel: subLabels.english,
      count: englishTemplates.length,
      href: regionalHrefs?.english,
    },
    {
      id: "all",
      label: "All Designs",
      count: templates.length,
    },
    {
      id: "marathi",
      label: "Marathi",
      subLabel: subLabels.marathi,
      count: marathiTemplates.length,
      href: regionalHrefs?.marathi,
    },
    {
      id: "hindi",
      label: "Hindi",
      subLabel: subLabels.hindi,
      count: hindiTemplates.length,
      href: regionalHrefs?.hindi,
    },
  ];

  // Get current active templates
  const currentTemplates =
    activeTab === "english"
      ? englishTemplates
      : activeTab === "all"
      ? templates
      : activeTab === "marathi"
      ? marathiTemplates
      : hindiTemplates;

  return (
    <div>
      {/* Regional Language Bar in exact order: English -> All Designs -> Marathi -> Hindi */}
      <div className="mb-8 p-3 sm:p-4 rounded-2xl bg-card border border-border shadow-sm">
        <div className="flex items-center justify-between mb-2.5 px-1">
          <span className="text-xs font-semibold text-muted-foreground">
            Browse Regional Wording Variations:
          </span>
          {regionalHrefs?.[activeTab === "all" ? "english" : activeTab] && (
            <Link
              href={regionalHrefs[activeTab === "all" ? "english" : activeTab]!}
              className="text-[11px] font-semibold text-amber-600 dark:text-amber-400 hover:underline flex items-center gap-1"
            >
              <span>Dedicated {activeTab.toUpperCase()} Page</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          )}
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 shrink-0 cursor-pointer ${
                  isActive
                    ? "bg-amber-500 text-white shadow-md shadow-amber-500/20"
                    : "bg-secondary hover:bg-secondary/80 text-foreground border border-border hover:border-amber-500/30"
                }`}
              >
                <span>{tab.label}</span>
                {tab.subLabel ? (
                  <span className={`text-[10px] ${isActive ? "text-amber-100" : "text-muted-foreground"}`}>
                    ({tab.subLabel})
                  </span>
                ) : (
                  <span className={`text-[10px] ${isActive ? "text-amber-100" : "text-muted-foreground"}`}>
                    ({tab.count})
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid Heading with live count of filtered designs */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <LayoutGrid className="w-4 h-4 text-amber-500" />
          <h2 className="text-base sm:text-lg font-serif font-bold text-foreground">
            {activeTab === "english"
              ? `English ${categoryName} Templates (${currentTemplates.length} Designs)`
              : activeTab === "all"
              ? `All ${categoryName} Templates (${currentTemplates.length} Designs)`
              : `${activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} ${categoryName} Templates (${currentTemplates.length} ${
                  currentTemplates.length === 1 ? "Design" : "Designs"
                })`}
          </h2>
        </div>
        <span className="text-xs text-muted-foreground hidden sm:inline">
          Click any card to launch online editor
        </span>
      </div>

      {/* Template Grid or Empty State */}
      {currentTemplates.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 mb-16">
          {currentTemplates.map((template) => (
            <TemplateCard key={template.id} template={template} compact={true} />
          ))}
        </div>
      ) : (
        <div className="p-8 sm:p-12 rounded-3xl bg-card border border-border text-center mb-16">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-500 mx-auto flex items-center justify-center mb-3">
            <Sparkles className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-foreground">
            Custom {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Wording Available in Editor
          </h3>
          <p className="text-xs text-muted-foreground max-w-md mx-auto mt-1 mb-5">
            You can customize any template into {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} using our live editor with Devanagari fonts (Poppins, Rozha One) and custom shlokas.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => setActiveTab("english")}
              className="px-4 py-2 rounded-xl bg-amber-500 text-white text-xs font-semibold hover:bg-amber-600 transition-colors cursor-pointer"
            >
              Browse English Designs ({englishTemplates.length})
            </button>
            {activeTab !== "all" && regionalHrefs?.[activeTab] && (
              <Link
                href={regionalHrefs[activeTab]!}
                className="px-4 py-2 rounded-xl bg-secondary text-foreground border border-border text-xs font-semibold hover:bg-secondary/80 transition-colors"
              >
                View {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Guide &amp; Wordings
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
