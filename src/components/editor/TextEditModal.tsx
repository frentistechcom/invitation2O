"use client";

import React, { useState, useEffect } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { TextLayer } from "@/types/editor";
import { CURATED_FONTS } from "@/lib/fonts";
import {
  X,
  Type,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Bold,
  Italic,
  Underline,
  Sparkles,
  Check,
  CaseSensitive,
  Sliders,
  Palette,
  ArrowLeftRight,
  Eraser,
  Wand2,
  Layers,
  Search,
  Flame,
  Minus,
  Plus,
} from "lucide-react";

interface TextEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  textLayer: TextLayer | null;
  onUpdateLayer: (layer: TextLayer) => void;
}

type TabType = "content" | "font" | "effects" | "spacing";

interface PresetCategory {
  name: string;
  items: { label: string; text: string }[];
}

const PRESET_CATEGORIES: PresetCategory[] = [
  {
    name: "Wedding & Couple",
    items: [
      { label: "Bride & Groom", text: "Raveendra & Kanchana" },
      { label: "Weds Format", text: "Aditya   weds   Sneha" },
      { label: "Ceremony Title", text: "Wedding Ceremony" },
      { label: "Save The Date", text: "SAVE THE DATE" },
      { label: "Joyous Union", text: "Together with their families\nrequest the honour of your presence" },
      { label: "Cordial Invitation", text: "Cordially invite you to celebrate the joyous union of our children" },
    ],
  },
  {
    name: "Sacred Shlokas & Blessings",
    items: [
      { label: "Ganesha Shloka", text: "|| श्री गणेशाय नमः ||" },
      { label: "Om Ganesha", text: "|| ॐ श्री गणेशाय नमः ||" },
      { label: "Shubh Vivah", text: "|| शुभ विवाह ||" },
      { label: "Mangalyam Shloka", text: "मांगल्यं तन्तुनानेन मम जीवनहेतुना ।\nकंठे बध्नामि सुभगे त्वं जीव शरदः शतम् ॥" },
      { label: "Vakratunda Shloka", text: "वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ ।\nनिर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥" },
      { label: "Mangalam Bhagwan", text: "मंगलम् भगवान विष्णुः मंगलम् गरुड़ध्वजः ।\nमंगलम् पुण्डरीकाक्षः मंगलाय तनो हरिः ॥" },
    ],
  },
  {
    name: "Auspicious Date & Time",
    items: [
      { label: "Muhurtham Date", text: "Sunday, December 28, 2026\nMuhurtham: 10:15 AM Onwards" },
      { label: "Evening Reception", text: "Followed by Dinner & Reception\n7:00 PM Onwards" },
      { label: "Sangeet & Mehendi", text: "Sangeet & Cocktail Night\nSaturday, Dec 27 | 6:30 PM" },
      { label: "Haldi Ceremony", text: "Auspicious Haldi Ceremony\nMorning 9:00 AM to 11:30 AM" },
    ],
  },
  {
    name: "Venue & Reception",
    items: [
      { label: "Palace Venue", text: "Palace Junction Convention Hall\n4th Cross Road, Rajajinagar\nBengaluru, Karnataka - 560010" },
      { label: "Grand Ballroom", text: "The Grand Regal Ballroom, 5th Floor\nMG Road, Mumbai - 400001" },
      { label: "Resort Destination", text: "The Leela Palace Lakefront Gardens\nUdaipur, Rajasthan - 313001" },
    ],
  },
  {
    name: "RSVP & Family",
    items: [
      { label: "Near & Dear", text: "With Best Compliments from Near & Dear\nRSVP: +91 98765 43210" },
      { label: "Family Note", text: "With Best Wishes from Kith & Kin\nSharma & Verma Family" },
      { label: "No Gifts Request", text: "Blessings Only • No Gifts Please" },
    ],
  },
];

const LUXURY_PALETTE = [
  { name: "Imperial Gold", hex: "#D4AF37" },
  { name: "Royal Amber", hex: "#C28524" },
  { name: "Deep Crimson", hex: "#8B1E2F" },
  { name: "Velvet Maroon", hex: "#5E101E" },
  { name: "Emerald Green", hex: "#27AE60" },
  { name: "Peacock Navy", hex: "#1A365D" },
  { name: "Rose Gold", hex: "#B76E79" },
  { name: "Champagne", hex: "#E5C899" },
  { name: "Charcoal Slate", hex: "#1C1917" },
  { name: "Pure Ivory", hex: "#FFFFFF" },
  { name: "Silver Ash", hex: "#E2E8F0" },
  { name: "Saffron Bronze", hex: "#D97706" },
];

const QUICK_FONT_SIZES = [16, 20, 24, 28, 34, 42, 54, 68];

export const TextEditModal: React.FC<TextEditModalProps> = ({
  isOpen,
  onClose,
  textLayer,
  onUpdateLayer,
}) => {
  const [activeTab, setActiveTab] = useState<TabType>("content");
  const [localText, setLocalText] = useState("");
  const [fontSearch, setFontSearch] = useState("");
  const [fontCategory, setFontCategory] = useState<string>("all");
  const [activePresetCategory, setActivePresetCategory] = useState<number>(0);

  useEffect(() => {
    if (textLayer) {
      setLocalText(textLayer.text);
    }
  }, [textLayer]);

  if (!textLayer) return null;

  // Real-time updates
  const handleTextChange = (newText: string) => {
    setLocalText(newText);
    onUpdateLayer({ ...textLayer, text: newText });
  };

  // Smart transformation helpers
  const handleSwapNames = () => {
    const connectors = [" & ", " and ", " weds ", " + ", " WEDS "];
    for (const conn of connectors) {
      if (localText.includes(conn)) {
        const parts = localText.split(conn);
        if (parts.length === 2) {
          const swapped = `${parts[1].trim()}${conn}${parts[0].trim()}`;
          handleTextChange(swapped);
          return;
        }
      }
    }
  };

  const handleTitleCase = () => {
    const minorWords = new Set(["and", "of", "the", "in", "at", "to", "for", "with", "a", "an", "weds", "&"]);
    const words = localText.split(" ");
    const transformed = words
      .map((word, i) => {
        const lower = word.toLowerCase();
        if (i !== 0 && minorWords.has(lower)) {
          return lower;
        }
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(" ");
    handleTextChange(transformed);
  };

  const handleUpperCase = () => {
    handleTextChange(localText.toUpperCase());
  };

  const handleCleanSpacing = () => {
    const cleaned = localText
      .split("\n")
      .map((line) => line.trim().replace(/\s+/g, " "))
      .join("\n")
      .trim();
    handleTextChange(cleaned);
  };

  const handleInsertSymbol = (sym: string) => {
    handleTextChange(localText ? `${localText}\n${sym}` : sym);
  };

  // Filtered fonts
  const filteredFonts = CURATED_FONTS.filter((font) => {
    const matchesSearch = font.name.toLowerCase().includes(fontSearch.toLowerCase());
    const matchesCategory =
      fontCategory === "all" ||
      (fontCategory === "calligraphy" && font.category === "Calligraphy") ||
      (fontCategory === "serif" && font.category === "Serif") ||
      (fontCategory === "traditional" && (font.category === "Indian Traditional" || font.category === "Regional")) ||
      (fontCategory === "sans" && font.category === "Modern Sans");
    return matchesSearch && matchesCategory;
  });

  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/75 backdrop-blur-md z-50 animate-in fade-in duration-200" />
        <Dialog.Content className="fixed bottom-0 left-0 right-0 sm:bottom-auto sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 w-full sm:max-w-xl bg-card border border-border sm:rounded-3xl rounded-t-3xl shadow-2xl z-50 flex flex-col max-h-[92vh] sm:max-h-[88vh] overflow-hidden animate-in fade-in slide-in-from-bottom-8 sm:zoom-in-95 duration-200 text-card-foreground">
          {/* Header */}
          <div className="flex items-center justify-between px-5 pt-4 pb-3 border-b border-border shrink-0 bg-card/90">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-amber-500/20 to-orange-500/20 border border-amber-500/40 flex items-center justify-center text-amber-500 shadow-sm">
                <Wand2 className="w-4 h-4" />
              </div>
              <div>
                <Dialog.Title className="text-sm font-bold tracking-tight text-foreground flex items-center gap-2">
                  <span>Smart Text Studio</span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30">
                    Live Sync
                  </span>
                </Dialog.Title>
                <p className="text-[11px] text-muted-foreground">
                  {localText.length} chars • {localText.trim().split(/\s+/).filter(Boolean).length} words
                </p>
              </div>
            </div>
            <Dialog.Close asChild>
              <button
                type="button"
                className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                title="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </Dialog.Close>
          </div>

          {/* Studio Navigation Tabs */}
          <div className="flex items-center border-b border-border bg-secondary/40 px-3 py-1.5 gap-1 shrink-0 overflow-x-auto scrollbar-none text-xs">
            <button
              type="button"
              onClick={() => setActiveTab("content")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-medium transition-all shrink-0 ${
                activeTab === "content"
                  ? "bg-amber-500 text-white shadow-md shadow-amber-500/20 font-semibold"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              <Type className="w-3.5 h-3.5" />
              <span>Content & AI</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("font")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-medium transition-all shrink-0 ${
                activeTab === "font"
                  ? "bg-amber-500 text-white shadow-md shadow-amber-500/20 font-semibold"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Font & Size</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("effects")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-medium transition-all shrink-0 ${
                activeTab === "effects"
                  ? "bg-amber-500 text-white shadow-md shadow-amber-500/20 font-semibold"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              <Palette className="w-3.5 h-3.5" />
              <span>Gold Foil & Colors</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("spacing")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-medium transition-all shrink-0 ${
                activeTab === "spacing"
                  ? "bg-amber-500 text-white shadow-md shadow-amber-500/20 font-semibold"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>Align & Spacing</span>
            </button>
          </div>

          {/* Scrollable Studio Content Body */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
            {/* 1. CONTENT & AI TAB */}
            {activeTab === "content" && (
              <div className="space-y-4 animate-in fade-in duration-150">
                {/* Textarea */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                      Invitation Text
                    </label>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={handleCleanSpacing}
                        className="text-[11px] text-muted-foreground hover:text-amber-500 flex items-center gap-1 transition-colors"
                        title="Remove extra whitespace & empty lines"
                      >
                        <Eraser className="w-3 h-3" />
                        <span>Clean Spacing</span>
                      </button>
                      <span className="text-muted-foreground/30">•</span>
                      <button
                        type="button"
                        onClick={() => handleTextChange("")}
                        className="text-[11px] text-muted-foreground hover:text-destructive transition-colors"
                      >
                        Clear
                      </button>
                    </div>
                  </div>
                  <textarea
                    autoFocus
                    rows={4}
                    value={localText}
                    onChange={(e) => handleTextChange(e.target.value)}
                    placeholder="Type or paste your invitation wording here..."
                    className="w-full p-3.5 rounded-2xl bg-secondary/80 border border-border focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 text-foreground text-sm font-sans leading-relaxed outline-none transition-all resize-y shadow-inner"
                  />
                </div>

                {/* Smart AI Quick Actions */}
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1 mb-2">
                    <Sparkles className="w-3 h-3 text-amber-500" />
                    Smart Quick Actions
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    <button
                      type="button"
                      onClick={handleTitleCase}
                      className="px-2.5 py-1.5 text-xs rounded-xl bg-secondary hover:bg-secondary/80 border border-border text-foreground hover:border-amber-500/50 flex items-center gap-1.5 transition-all shadow-sm active:scale-95"
                    >
                      <CaseSensitive className="w-3.5 h-3.5 text-amber-500" />
                      <span>Title Case</span>
                    </button>
                    <button
                      type="button"
                      onClick={handleUpperCase}
                      className="px-2.5 py-1.5 text-xs rounded-xl bg-secondary hover:bg-secondary/80 border border-border text-foreground hover:border-amber-500/50 flex items-center gap-1.5 transition-all shadow-sm active:scale-95"
                    >
                      <span className="font-bold text-[10px] text-amber-500">AA</span>
                      <span>UPPERCASE</span>
                    </button>
                    <button
                      type="button"
                      onClick={handleSwapNames}
                      className="px-2.5 py-1.5 text-xs rounded-xl bg-secondary hover:bg-secondary/80 border border-border text-foreground hover:border-amber-500/50 flex items-center gap-1.5 transition-all shadow-sm active:scale-95"
                      title="Swap couple names (e.g. Groom & Bride to Bride & Groom)"
                    >
                      <ArrowLeftRight className="w-3.5 h-3.5 text-amber-500" />
                      <span>Swap Names (A & B)</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => handleInsertSymbol("✦  ❦  ✦")}
                      className="px-2.5 py-1.5 text-xs rounded-xl bg-secondary hover:bg-secondary/80 border border-border text-foreground hover:border-amber-500/50 transition-all shadow-sm active:scale-95"
                    >
                      <span>Add Divider (✦ ❦ ✦)</span>
                    </button>
                  </div>
                </div>

                {/* Categorized Wording & Shloka Library */}
                <div className="pt-2 border-t border-border">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1">
                      <Layers className="w-3 h-3 text-amber-500" />
                      Wording & Shloka Library
                    </span>
                  </div>

                  {/* Category Pills */}
                  <div className="flex gap-1.5 overflow-x-auto pb-2 scrollbar-none text-[11px]">
                    {PRESET_CATEGORIES.map((cat, idx) => (
                      <button
                        key={cat.name}
                        type="button"
                        onClick={() => setActivePresetCategory(idx)}
                        className={`px-3 py-1 rounded-xl whitespace-nowrap transition-all border ${
                          activePresetCategory === idx
                            ? "bg-amber-500/20 border-amber-500 text-amber-600 dark:text-amber-400 font-semibold shadow-sm"
                            : "bg-secondary/60 border-border text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {cat.name}
                      </button>
                    ))}
                  </div>

                  {/* Preset Items for Active Category */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-44 overflow-y-auto pr-1">
                    {PRESET_CATEGORIES[activePresetCategory].items.map((item) => (
                      <button
                        key={item.label}
                        type="button"
                        onClick={() => handleTextChange(item.text)}
                        className="p-2.5 text-left rounded-xl bg-secondary/50 hover:bg-secondary border border-border hover:border-amber-500/50 transition-all flex flex-col gap-0.5 group shadow-sm"
                      >
                        <span className="text-[10px] font-bold text-amber-500 tracking-wide uppercase">
                          {item.label}
                        </span>
                        <span className="text-xs text-foreground line-clamp-2 leading-relaxed">
                          {item.text}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* 2. FONT & SIZE TAB */}
            {activeTab === "font" && (
              <div className="space-y-4 animate-in fade-in duration-150">
                {/* Font Size Stepper & Slider */}
                <div className="p-3 rounded-2xl bg-secondary/50 border border-border space-y-2.5">
                  <div className="flex items-center justify-between">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                      Font Size
                    </label>
                    <span className="font-mono text-sm font-bold text-amber-500">
                      {textLayer.fontSize}px
                    </span>
                  </div>

                  {/* Stepper + Slider */}
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => onUpdateLayer({ ...textLayer, fontSize: Math.max(10, textLayer.fontSize - 2) })}
                      className="w-8 h-8 rounded-xl bg-secondary border border-border hover:bg-card text-foreground font-bold flex items-center justify-center shrink-0 active:scale-95 shadow-sm"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <input
                      type="range"
                      min={10}
                      max={120}
                      step={1}
                      value={textLayer.fontSize}
                      onChange={(e) => onUpdateLayer({ ...textLayer, fontSize: Number(e.target.value) })}
                      className="flex-1 accent-amber-500 cursor-pointer"
                    />
                    <button
                      type="button"
                      onClick={() => onUpdateLayer({ ...textLayer, fontSize: Math.min(120, textLayer.fontSize + 2) })}
                      className="w-8 h-8 rounded-xl bg-secondary border border-border hover:bg-card text-foreground font-bold flex items-center justify-center shrink-0 active:scale-95 shadow-sm"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Quick Preset Buttons */}
                  <div className="flex items-center gap-1.5 overflow-x-auto pt-1 scrollbar-none">
                    <span className="text-[10px] text-muted-foreground mr-1">Presets:</span>
                    {QUICK_FONT_SIZES.map((sz) => (
                      <button
                        key={sz}
                        type="button"
                        onClick={() => onUpdateLayer({ ...textLayer, fontSize: sz })}
                        className={`px-2 py-0.5 rounded-lg text-xs font-mono transition-colors ${
                          textLayer.fontSize === sz
                            ? "bg-amber-500 text-white font-bold"
                            : "bg-secondary text-muted-foreground hover:text-foreground border border-border"
                        }`}
                      >
                        {sz}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Font Search & Category Filters */}
                <div>
                  <div className="relative mb-2">
                    <Search className="w-3.5 h-3.5 absolute left-3 top-3 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Search 20+ wedding & regional fonts..."
                      value={fontSearch}
                      onChange={(e) => setFontSearch(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 bg-secondary/80 text-xs rounded-xl border border-border outline-none focus:border-amber-500 text-foreground shadow-inner"
                    />
                  </div>

                  {/* Categories */}
                  <div className="flex gap-1.5 overflow-x-auto pb-2 border-b border-border scrollbar-none text-[11px]">
                    {[
                      { id: "all", label: "All Fonts" },
                      { id: "calligraphy", label: "Wedding Script" },
                      { id: "serif", label: "Luxury Serif" },
                      { id: "traditional", label: "Traditional & Devanagari" },
                      { id: "sans", label: "Modern Clean" },
                    ].map((cat) => (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => setFontCategory(cat.id)}
                        className={`px-3 py-1 rounded-xl whitespace-nowrap transition-all border ${
                          fontCategory === cat.id
                            ? "bg-amber-500 text-white font-semibold border-amber-500 shadow-sm"
                            : "bg-secondary/60 border-border text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {cat.label}
                      </button>
                    ))}
                  </div>

                  {/* Font List with Live Actual Text Preview */}
                  <div className="max-h-60 overflow-y-auto space-y-1.5 pr-1 mt-2">
                    {filteredFonts.map((font) => {
                      const isSelected = textLayer.fontFamily.includes(font.name);
                      const sampleText = localText.trim() ? localText.split("\n")[0].slice(0, 32) : font.sample;

                      return (
                        <button
                          key={font.name}
                          type="button"
                          onClick={() => onUpdateLayer({ ...textLayer, fontFamily: font.family })}
                          className={`w-full text-left p-3 rounded-2xl border transition-all flex items-center justify-between group shadow-sm ${
                            isSelected
                              ? "bg-amber-500/15 border-amber-500 text-amber-500 ring-1 ring-amber-500"
                              : "bg-secondary/40 border-border hover:bg-secondary text-foreground"
                          }`}
                        >
                          <div className="flex flex-col min-w-0 pr-2">
                            <div className="flex items-center gap-2 mb-0.5">
                              <span className="text-xs font-semibold text-foreground">{font.name}</span>
                              <span className="text-[10px] px-1.5 py-0.2 rounded-md bg-secondary text-muted-foreground">
                                {font.category}
                              </span>
                            </div>
                            <span
                              className="text-lg truncate leading-relaxed py-0.5 text-foreground group-hover:text-amber-500 transition-colors"
                              style={{ fontFamily: font.family }}
                            >
                              {sampleText}
                            </span>
                          </div>
                          {isSelected && <Check className="w-4 h-4 text-amber-500 shrink-0" />}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* 3. EFFECTS & LUXURY COLORS TAB */}
            {activeTab === "effects" && (
              <div className="space-y-4 animate-in fade-in duration-150">
                {/* Gold Foil Effects Section */}
                <div className="p-3.5 rounded-2xl bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/10 border border-amber-500/30">
                  <div className="flex items-center justify-between mb-2.5">
                    <div className="flex items-center gap-1.5">
                      <Flame className="w-4 h-4 text-amber-500" />
                      <span className="text-xs font-bold uppercase tracking-wider text-foreground">
                        Luxury Foil Stamp
                      </span>
                    </div>
                    {textLayer.isGoldFoil && (
                      <span className="text-[10px] font-bold text-amber-500 uppercase tracking-wider animate-pulse">
                        Active Foil Effect
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-4 gap-2">
                    <button
                      type="button"
                      onClick={() => onUpdateLayer({ ...textLayer, isGoldFoil: false })}
                      className={`p-2 rounded-xl border text-xs font-medium text-center transition-all ${
                        !textLayer.isGoldFoil
                          ? "bg-card border-amber-500 text-amber-500 shadow-sm"
                          : "bg-secondary/60 border-border text-muted-foreground"
                      }`}
                    >
                      Flat Color
                    </button>
                    <button
                      type="button"
                      onClick={() => onUpdateLayer({ ...textLayer, isGoldFoil: true, foilStyle: "gold" })}
                      className={`p-2 rounded-xl border text-xs font-bold text-center transition-all shadow-sm ${
                        textLayer.isGoldFoil && (!textLayer.foilStyle || textLayer.foilStyle === "gold")
                          ? "bg-amber-500 text-white border-amber-400 ring-2 ring-amber-400/50"
                          : "bg-gradient-to-r from-[#FFE599] via-[#D4AF37] to-[#996515] text-neutral-900 border-amber-300 hover:scale-102"
                      }`}
                    >
                      Imperial Gold
                    </button>
                    <button
                      type="button"
                      onClick={() => onUpdateLayer({ ...textLayer, isGoldFoil: true, foilStyle: "rose-gold" })}
                      className={`p-2 rounded-xl border text-xs font-bold text-center transition-all shadow-sm ${
                        textLayer.isGoldFoil && textLayer.foilStyle === "rose-gold"
                          ? "bg-rose-600 text-white border-rose-400 ring-2 ring-rose-400/50"
                          : "bg-gradient-to-r from-[#FADBD8] via-[#B76E79] to-[#944855] text-neutral-900 border-rose-300 hover:scale-102"
                      }`}
                    >
                      Rose Gold
                    </button>
                    <button
                      type="button"
                      onClick={() => onUpdateLayer({ ...textLayer, isGoldFoil: true, foilStyle: "silver" })}
                      className={`p-2 rounded-xl border text-xs font-bold text-center transition-all shadow-sm ${
                        textLayer.isGoldFoil && textLayer.foilStyle === "silver"
                          ? "bg-neutral-600 text-white border-neutral-300 ring-2 ring-neutral-300/50"
                          : "bg-gradient-to-r from-[#FFFFFF] via-[#C0C0C0] to-[#8A8A8A] text-neutral-900 border-neutral-300 hover:scale-102"
                      }`}
                    >
                      Silver Foil
                    </button>
                  </div>
                </div>

                {/* Luxury Wedding Palette */}
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block mb-2">
                    Luxury Wedding Palette
                  </label>
                  <div className="grid grid-cols-6 sm:grid-cols-6 gap-2.5">
                    {LUXURY_PALETTE.map((c) => {
                      const isSelected = !textLayer.isGoldFoil && textLayer.color.toLowerCase() === c.hex.toLowerCase();
                      return (
                        <button
                          key={c.hex}
                          type="button"
                          onClick={() => onUpdateLayer({ ...textLayer, color: c.hex, isGoldFoil: false })}
                          className={`h-10 rounded-2xl border flex flex-col items-center justify-center transition-transform shadow-sm relative ${
                            isSelected
                              ? "scale-105 ring-2 ring-amber-500 ring-offset-2 ring-offset-card border-amber-500"
                              : "border-border hover:scale-105"
                          }`}
                          style={{ backgroundColor: c.hex }}
                          title={c.name}
                        >
                          {isSelected && (
                            <Check className={`w-4 h-4 ${c.hex === "#FFFFFF" || c.hex === "#E5C899" || c.hex === "#E2E8F0" ? "text-black" : "text-white"}`} />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Custom Hex Color Picker */}
                  <div className="flex items-center gap-3 mt-3 p-2.5 rounded-xl bg-secondary/50 border border-border">
                    <span className="text-xs text-muted-foreground font-medium">Custom Color:</span>
                    <input
                      type="color"
                      value={textLayer.color}
                      onChange={(e) => onUpdateLayer({ ...textLayer, color: e.target.value, isGoldFoil: false })}
                      className="w-8 h-8 rounded-lg border border-border bg-transparent cursor-pointer"
                    />
                    <input
                      type="text"
                      value={textLayer.color}
                      onChange={(e) => onUpdateLayer({ ...textLayer, color: e.target.value, isGoldFoil: false })}
                      className="w-24 px-2 py-1 text-xs bg-secondary border border-border rounded-lg text-foreground font-mono"
                    />
                  </div>
                </div>

                {/* Text Shadow & Glow Presets */}
                <div className="pt-2 border-t border-border">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block mb-2">
                    Text Shadow & Glow
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    <button
                      type="button"
                      onClick={() => onUpdateLayer({ ...textLayer, shadowColor: undefined, shadowBlur: 0 })}
                      className={`p-2 text-xs rounded-xl border text-center transition-all ${
                        !textLayer.shadowBlur ? "bg-amber-500/15 border-amber-500 text-amber-500 font-semibold" : "bg-secondary border-border text-muted-foreground"
                      }`}
                    >
                      None
                    </button>
                    <button
                      type="button"
                      onClick={() => onUpdateLayer({ ...textLayer, shadowColor: "#D4AF37", shadowBlur: 8, shadowOffsetX: 0, shadowOffsetY: 0 })}
                      className={`p-2 text-xs rounded-xl border text-center transition-all ${
                        textLayer.shadowColor === "#D4AF37" ? "bg-amber-500/15 border-amber-500 text-amber-500 font-semibold" : "bg-secondary border-border text-muted-foreground"
                      }`}
                    >
                      Golden Glow
                    </button>
                    <button
                      type="button"
                      onClick={() => onUpdateLayer({ ...textLayer, shadowColor: "rgba(0,0,0,0.5)", shadowBlur: 8, shadowOffsetX: 0, shadowOffsetY: 3 })}
                      className={`p-2 text-xs rounded-xl border text-center transition-all ${
                        textLayer.shadowColor === "rgba(0,0,0,0.5)" ? "bg-amber-500/15 border-amber-500 text-amber-500 font-semibold" : "bg-secondary border-border text-muted-foreground"
                      }`}
                    >
                      Drop Shadow
                    </button>
                    <button
                      type="button"
                      onClick={() => onUpdateLayer({ ...textLayer, shadowColor: "rgba(139,30,47,0.4)", shadowBlur: 6, shadowOffsetX: 0, shadowOffsetY: 2 })}
                      className={`p-2 text-xs rounded-xl border text-center transition-all ${
                        textLayer.shadowColor === "rgba(139,30,47,0.4)" ? "bg-amber-500/15 border-amber-500 text-amber-500 font-semibold" : "bg-secondary border-border text-muted-foreground"
                      }`}
                    >
                      Warm Crimson
                    </button>
                  </div>
                </div>

                {/* Text Stroke / Outline */}
                <div className="pt-2 border-t border-border">
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                      Contrast Outline / Stroke
                    </label>
                    <span className="text-xs text-muted-foreground">
                      {textLayer.strokeWidth ? `${textLayer.strokeWidth}px` : "None"}
                    </span>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {[
                      { label: "None", width: 0 },
                      { label: "Thin (1px)", width: 1 },
                      { label: "Medium (2px)", width: 2 },
                      { label: "Bold (3px)", width: 3 },
                    ].map((st) => (
                      <button
                        key={st.label}
                        type="button"
                        onClick={() =>
                          onUpdateLayer({
                            ...textLayer,
                            strokeWidth: st.width,
                            strokeColor: st.width > 0 ? (textLayer.strokeColor || "#FFFFFF") : undefined,
                          })
                        }
                        className={`p-2 text-xs rounded-xl border text-center transition-all ${
                          (textLayer.strokeWidth || 0) === st.width
                            ? "bg-amber-500/15 border-amber-500 text-amber-500 font-semibold"
                            : "bg-secondary border-border text-muted-foreground"
                        }`}
                      >
                        {st.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* 4. ALIGN & SPACING TAB */}
            {activeTab === "spacing" && (
              <div className="space-y-4 animate-in fade-in duration-150">
                {/* Alignment */}
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block mb-1.5">
                    Text Alignment
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => onUpdateLayer({ ...textLayer, textAlign: "left" })}
                      className={`p-2.5 rounded-xl border flex items-center justify-center gap-1.5 transition-all ${
                        textLayer.textAlign === "left"
                          ? "bg-amber-500/15 border-amber-500 text-amber-500 font-semibold shadow-sm"
                          : "bg-secondary border-border text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <AlignLeft className="w-4 h-4" />
                      <span className="text-xs">Left</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => onUpdateLayer({ ...textLayer, textAlign: "center" })}
                      className={`p-2.5 rounded-xl border flex items-center justify-center gap-1.5 transition-all ${
                        textLayer.textAlign === "center"
                          ? "bg-amber-500/15 border-amber-500 text-amber-500 font-semibold shadow-sm"
                          : "bg-secondary border-border text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <AlignCenter className="w-4 h-4" />
                      <span className="text-xs">Center</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => onUpdateLayer({ ...textLayer, textAlign: "right" })}
                      className={`p-2.5 rounded-xl border flex items-center justify-center gap-1.5 transition-all ${
                        textLayer.textAlign === "right"
                          ? "bg-amber-500/15 border-amber-500 text-amber-500 font-semibold shadow-sm"
                          : "bg-secondary border-border text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <AlignRight className="w-4 h-4" />
                      <span className="text-xs">Right</span>
                    </button>
                  </div>
                </div>

                {/* Typography Styling (Bold, Italic, Underline, Case) */}
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block mb-1.5">
                    Font Styles
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    <button
                      type="button"
                      onClick={() =>
                        onUpdateLayer({
                          ...textLayer,
                          fontWeight: textLayer.fontWeight === "bold" ? "normal" : "bold",
                        })
                      }
                      className={`p-2.5 rounded-xl border flex items-center justify-center gap-1.5 transition-all ${
                        textLayer.fontWeight === "bold"
                          ? "bg-amber-500/15 border-amber-500 text-amber-500 font-semibold shadow-sm"
                          : "bg-secondary border-border text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <Bold className="w-4 h-4" />
                      <span className="text-xs">Bold</span>
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        onUpdateLayer({
                          ...textLayer,
                          fontStyle: textLayer.fontStyle === "italic" ? "normal" : "italic",
                        })
                      }
                      className={`p-2.5 rounded-xl border flex items-center justify-center gap-1.5 transition-all ${
                        textLayer.fontStyle === "italic"
                          ? "bg-amber-500/15 border-amber-500 text-amber-500 font-semibold shadow-sm"
                          : "bg-secondary border-border text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <Italic className="w-4 h-4" />
                      <span className="text-xs">Italic</span>
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        onUpdateLayer({
                          ...textLayer,
                          isUnderline: !textLayer.isUnderline,
                        })
                      }
                      className={`p-2.5 rounded-xl border flex items-center justify-center gap-1.5 transition-all ${
                        textLayer.isUnderline
                          ? "bg-amber-500/15 border-amber-500 text-amber-500 font-semibold shadow-sm"
                          : "bg-secondary border-border text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <Underline className="w-4 h-4" />
                      <span className="text-xs">Underline</span>
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        onUpdateLayer({
                          ...textLayer,
                          textTransform:
                            textLayer.textTransform === "uppercase"
                              ? "none"
                              : textLayer.textTransform === "capitalize"
                              ? "uppercase"
                              : "capitalize",
                        })
                      }
                      className={`p-2.5 rounded-xl border flex items-center justify-center gap-1.5 transition-all ${
                        textLayer.textTransform !== "none"
                          ? "bg-amber-500/15 border-amber-500 text-amber-500 font-semibold shadow-sm"
                          : "bg-secondary border-border text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <CaseSensitive className="w-4 h-4" />
                      <span className="text-xs capitalize">{textLayer.textTransform || "Normal"}</span>
                    </button>
                  </div>
                </div>

                {/* Letter Spacing (Tracking) Slider */}
                <div className="p-3 rounded-2xl bg-secondary/50 border border-border space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                      Letter Spacing (Tracking)
                    </label>
                    <span className="font-mono text-xs font-semibold text-amber-500">
                      {textLayer.letterSpacing || 0}px
                    </span>
                  </div>
                  <input
                    type="range"
                    min={-2}
                    max={12}
                    step={0.5}
                    value={textLayer.letterSpacing || 0}
                    onChange={(e) => onUpdateLayer({ ...textLayer, letterSpacing: Number(e.target.value) })}
                    className="w-full accent-amber-500 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-muted-foreground">
                    <span>Tight (-2)</span>
                    <span>Default (0)</span>
                    <span>Luxury Wide (+12)</span>
                  </div>
                </div>

                {/* Line Height (Leading) Slider */}
                <div className="p-3 rounded-2xl bg-secondary/50 border border-border space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                      Line Height (Leading)
                    </label>
                    <span className="font-mono text-xs font-semibold text-amber-500">
                      {textLayer.lineHeight || 1.3}x
                    </span>
                  </div>
                  <input
                    type="range"
                    min={0.9}
                    max={2.2}
                    step={0.05}
                    value={textLayer.lineHeight || 1.3}
                    onChange={(e) => onUpdateLayer({ ...textLayer, lineHeight: Number(e.target.value) })}
                    className="w-full accent-amber-500 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-muted-foreground">
                    <span>Compact (0.9x)</span>
                    <span>Standard (1.3x)</span>
                    <span>Airy (2.2x)</span>
                  </div>
                </div>

                {/* Layer Opacity Slider */}
                <div className="p-3 rounded-2xl bg-secondary/50 border border-border space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                      Layer Opacity
                    </label>
                    <span className="font-mono text-xs font-semibold text-amber-500">
                      {Math.round((textLayer.opacity ?? 1) * 100)}%
                    </span>
                  </div>
                  <input
                    type="range"
                    min={0.1}
                    max={1.0}
                    step={0.05}
                    value={textLayer.opacity ?? 1}
                    onChange={(e) => onUpdateLayer({ ...textLayer, opacity: Number(e.target.value) })}
                    className="w-full accent-amber-500 cursor-pointer"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Sticky Bottom Bar */}
          <div className="p-4 border-t border-border bg-card/95 backdrop-blur-sm shrink-0 flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-3 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:to-orange-600 text-white font-bold text-sm rounded-2xl shadow-lg shadow-orange-500/25 active:scale-98 transition-all flex items-center justify-center gap-2"
            >
              <Check className="w-4 h-4" />
              <span>Done & Apply to Card</span>
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
