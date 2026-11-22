"use client";

import React from "react";
import Link from "next/link";
import { CardTemplate } from "@/types/editor";
import { Edit3, Sparkles } from "lucide-react";

interface TemplateCardProps {
  template: CardTemplate;
}

export const TemplateCard: React.FC<TemplateCardProps> = ({ template }) => {
  return (
    <div className="group relative flex flex-col bg-card border border-border/80 hover:border-amber-500/60 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-300">
      {/* Thumbnail Aspect Ratio 2:3 */}
      <div className="relative w-full aspect-[2/3] bg-secondary overflow-hidden">
        {/* Render Background */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={template.backgroundImage}
          alt={template.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Category Pill */}
        <div className="absolute top-3.5 left-3.5 z-10">
          <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-background/80 dark:bg-black/70 backdrop-blur-md text-amber-600 dark:text-amber-400 border border-amber-500/30 shadow-md">
            {template.categoryName}
          </span>
        </div>

        {/* Hover Quick Action Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-5">
          <Link
            href={`/editor?template=${template.id}`}
            className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:to-orange-600 text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-xl shadow-orange-500/30 transition-all transform translate-y-2 group-hover:translate-y-0"
          >
            <Edit3 className="w-4 h-4" />
            <span>Customize This Card</span>
          </Link>
        </div>
      </div>

      {/* Card Info Below */}
      <div className="p-4 sm:p-5 flex flex-col gap-2 flex-1 justify-between bg-card">
        <div>
          <h3 className="font-semibold text-sm text-foreground group-hover:text-amber-500 transition-colors line-clamp-1 font-serif">
            {template.title}
          </h3>
          <p className="text-xs text-muted-foreground line-clamp-2 mt-0.5 leading-relaxed">
            {template.description}
          </p>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-border/80 mt-1">
          <div className="flex flex-wrap gap-1.5">
            {template.tags.slice(0, 2).map((tag) => (
              <span key={tag} className="text-[10px] text-muted-foreground bg-secondary px-2 py-0.5 rounded-md font-medium">
                #{tag}
              </span>
            ))}
          </div>
          <Link
            href={`/editor?template=${template.id}`}
            className="text-xs font-semibold text-amber-500 hover:text-amber-600 flex items-center gap-1 group/btn"
          >
            <span>Edit</span>
            <Sparkles className="w-3 h-3 transition-transform group-hover/btn:scale-125" />
          </Link>
        </div>
      </div>
    </div>
  );
};
