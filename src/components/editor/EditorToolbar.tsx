"use client";

import React, { useState } from "react";
import * as Popover from "@radix-ui/react-popover";
import { CanvasLayer, TextLayer, StickerLayer } from "@/types/editor";
import { CURATED_FONTS } from "@/lib/fonts";
import { ThemeToggle } from "@/components/ThemeToggle";
import {
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Trash2,
  Copy,
  Lock,
  Unlock,
  ChevronDown,
  ArrowUp,
  ArrowDown,
  CaseSensitive,
  Maximize2,
  ZoomIn,
  ZoomOut,
  Undo2,
  Redo2,
  Download,
  ChevronLeft,
  Pencil,
  Search,
  Check,
  Flame,
} from "lucide-react";
import Link from "next/link";

interface EditorToolbarProps {
  selectedLayer: CanvasLayer | null;
  onUpdateLayer: (layer: CanvasLayer) => void;
  onDeleteLayer: (id: string) => void;
  onDuplicateLayer: (id: string) => void;
  onCenterLayer: (id: string) => void;
  onBringForward: (id: string) => void;
  onSendBackward: (id: string) => void;
  canUndo: boolean;
  canRedo: boolean;
  onUndo: () => void;
  onRedo: () => void;
  zoom: number;
  onZoomChange: (newZoom: number) => void;
  onOpenDownload: () => void;
  onOpenEditText?: () => void;
  templateTitle: string;
  templateCategory?: string;
}

const LUXURY_PALETTE = [
  { name: "Imperial Gold", hex: "#D4AF37" },
  { name: "Royal Amber", hex: "#C28524" },
  { name: "Deep Crimson", hex: "#8B1E2F" },
  { name: "Velvet Maroon", hex: "#5E101E" },
  { name: "Emerald Green", hex: "#27AE60" },
  { name: "Peacock Navy", hex: "#1A365D" },
  { name: "Rose Gold", hex: "#B76E79" },
  { name: "Ivory White", hex: "#FFFFFF" },
  { name: "Obsidian Slate", hex: "#1C1917" },
];

export const EditorToolbar: React.FC<EditorToolbarProps> = ({
  selectedLayer,
  onUpdateLayer,
  onDeleteLayer,
  onDuplicateLayer,
  onCenterLayer,
  onBringForward,
  onSendBackward,
  canUndo,
  canRedo,
  onUndo,
  onRedo,
  zoom,
  onZoomChange,
  onOpenDownload,
  onOpenEditText,
  templateTitle,
  templateCategory,
}) => {
  const [fontSearch, setFontSearch] = useState("");
  const [fontCategory, setFontCategory] = useState<string>("all");
  const [isFontOpen, setIsFontOpen] = useState(false);
  const [isColorOpen, setIsColorOpen] = useState(false);

  const backHref = templateCategory ? `/templates/${templateCategory}` : "/templates";

  const handleBackClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (typeof window !== "undefined" && window.history.length > 1 && document.referrer) {
      try {
        const refUrl = new URL(document.referrer);
        if (refUrl.origin === window.location.origin) {
          // If the referrer is a template directory or category/regional page, use history.back() to keep scroll position
          if (
            refUrl.pathname.includes("/templates") ||
            (templateCategory && refUrl.pathname.includes(templateCategory)) ||
            refUrl.pathname.includes("/marathi") ||
            refUrl.pathname.includes("/hindi") ||
            refUrl.pathname.includes("/english")
          ) {
            e.preventDefault();
            window.history.back();
            return;
          }
        }
      } catch {
        // Fall back to direct link navigation
      }
    }
  };

  const textLayer = selectedLayer?.type === "text" ? (selectedLayer as TextLayer) : null;
  const stickerLayer = selectedLayer?.type === "sticker" ? (selectedLayer as StickerLayer) : null;

  const filteredFonts = CURATED_FONTS.filter((font) => {
    const matchesSearch = font.name.toLowerCase().includes(fontSearch.toLowerCase());
    const matchesCategory = fontCategory === "all" || font.category === fontCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <header className="w-full bg-card/95 backdrop-blur-md border-b border-border text-foreground select-none z-30 transition-colors">
      {/* Top Main Navigation Row */}
      <div className="flex items-center justify-between px-3 md:px-6 py-2.5 gap-2">
        {/* Left: Back & Title */}
        <div className="flex items-center gap-2.5 min-w-0">
          <Link
            href={backHref}
            onClick={handleBackClick}
            className="flex items-center justify-center w-8 h-8 rounded-xl border border-border bg-card/80 hover:bg-accent/20 text-foreground transition-all active:scale-95 shrink-0"
            title={`Back to ${templateCategory ? `${templateCategory} templates` : "catalog"}`}
          >
            <ChevronLeft className="w-4 h-4" />
          </Link>
          <div className="flex flex-col min-w-0">
            <h1 className="text-xs sm:text-sm font-semibold truncate text-foreground">{templateTitle}</h1>
            <span className="text-[10px] text-muted-foreground hidden sm:inline">300 DPI Vector Studio</span>
          </div>
        </div>

        {/* Center: Undo / Redo & Zoom Controls */}
        <div className="flex items-center gap-0.5 sm:gap-1 bg-secondary/80 p-1 rounded-xl border border-border shadow-inner">
          <button
            type="button"
            onClick={onUndo}
            disabled={!canUndo}
            title="Undo (Ctrl+Z)"
            className="p-1.5 rounded-lg text-foreground hover:bg-card disabled:opacity-30 disabled:hover:bg-transparent transition-all active:scale-95"
          >
            <Undo2 className="w-3.5 h-3.5" />
          </button>
          <button
            type="button"
            onClick={onRedo}
            disabled={!canRedo}
            title="Redo (Ctrl+Shift+Z)"
            className="p-1.5 rounded-lg text-foreground hover:bg-card disabled:opacity-30 disabled:hover:bg-transparent transition-all active:scale-95"
          >
            <Redo2 className="w-3.5 h-3.5" />
          </button>

          <div className="w-[1px] h-3.5 bg-border mx-0.5 hidden sm:block" />

          {/* Zoom controls */}
          <div className="hidden sm:flex items-center">
            <button
              type="button"
              onClick={() => onZoomChange(Math.max(0.6, zoom - 0.1))}
              title="Zoom Out"
              className="p-1.5 rounded-lg text-foreground hover:bg-card transition-all"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <span className="text-[11px] font-mono px-1 text-muted-foreground min-w-[36px] text-center">
              {Math.round(zoom * 100)}%
            </span>
            <button
              type="button"
              onClick={() => onZoomChange(Math.min(2.0, zoom + 0.1))}
              title="Zoom In"
              className="p-1.5 rounded-lg text-foreground hover:bg-card transition-all"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={() => onZoomChange(1.0)}
              title="Reset Fit"
              className="p-1.5 rounded-lg text-foreground hover:bg-card transition-all hidden md:inline-flex"
            >
              <Maximize2 className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Right: Theme Toggle & Download CTA */}
        <div className="flex items-center gap-2 shrink-0">
          <ThemeToggle />
          <button
            type="button"
            onClick={onOpenDownload}
            className="flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:to-orange-600 text-white font-medium text-xs sm:text-sm rounded-xl shadow-lg shadow-orange-500/25 active:scale-95 transition-all"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download</span>
          </button>
        </div>
      </div>

      {/* Contextual Layer Property Bar (Shown whenever an element is selected) */}
      {selectedLayer && (
        <div className="flex items-center gap-2 px-3 md:px-6 py-2 overflow-x-auto scrollbar-none bg-card/95 border-t border-border text-xs shadow-sm">
          {/* Text Controls */}
          {textLayer && (
            <>
              {/* Prominent Edit Text Button */}
              <button
                type="button"
                onClick={() => onOpenEditText?.()}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/40 text-amber-500 rounded-lg font-semibold transition-all active:scale-95 shrink-0"
                title="Edit Text Content"
              >
                <Pencil className="w-3.5 h-3.5" />
                <span>Edit</span>
              </button>

              {/* Font Picker with Radix Popover and Portal to eliminate clipping */}
              <Popover.Root open={isFontOpen} onOpenChange={setIsFontOpen}>
                <Popover.Trigger asChild>
                  <button
                    type="button"
                    className="flex items-center gap-1.5 px-2.5 py-1.5 bg-secondary hover:bg-secondary/80 rounded-lg border border-border text-foreground transition-all shrink-0"
                  >
                    <span className="truncate max-w-[100px] font-medium">
                      {textLayer.fontFamily.replace(/['",]/g, "").split(" ")[0]}
                    </span>
                    <ChevronDown className="w-3 h-3 text-muted-foreground" />
                  </button>
                </Popover.Trigger>
                <Popover.Portal>
                  <Popover.Content
                    side="bottom"
                    align="start"
                    sideOffset={6}
                    className="z-50 w-72 max-h-80 overflow-hidden bg-card border border-border rounded-2xl shadow-2xl p-2 text-card-foreground animate-in fade-in zoom-in-95 duration-150"
                  >
                    {/* Search & Filter */}
                    <div className="relative mb-2">
                      <Search className="w-3.5 h-3.5 absolute left-2.5 top-2.5 text-muted-foreground" />
                      <input
                        type="text"
                        placeholder="Search fonts..."
                        value={fontSearch}
                        onChange={(e) => setFontSearch(e.target.value)}
                        className="w-full pl-8 pr-3 py-1.5 bg-secondary text-xs rounded-xl border border-border outline-none focus:border-amber-500 text-foreground"
                      />
                    </div>

                    {/* Category tabs */}
                    <div className="flex gap-1 overflow-x-auto pb-1.5 mb-1.5 border-b border-border scrollbar-none text-[10px]">
                      {["all", "serif", "calligraphy", "traditional", "modern"].map((cat) => (
                        <button
                          key={cat}
                          type="button"
                          onClick={() => setFontCategory(cat)}
                          className={`px-2 py-0.5 rounded-md capitalize transition-colors whitespace-nowrap ${
                            fontCategory === cat ? "bg-amber-500 text-white font-semibold" : "bg-secondary text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>

                    {/* Font List */}
                    <div className="max-h-52 overflow-y-auto space-y-1 pr-1">
                      {filteredFonts.map((font) => {
                        const previewText = textLayer.text.trim()
                          ? textLayer.text.split("\n")[0].slice(0, 26)
                          : font.sample;
                        return (
                          <button
                            key={font.name}
                            type="button"
                            onClick={() => {
                              onUpdateLayer({ ...textLayer, fontFamily: font.family });
                              setIsFontOpen(false);
                            }}
                            className={`w-full text-left px-2.5 py-1.5 rounded-xl hover:bg-secondary flex items-center justify-between transition-all ${
                              textLayer.fontFamily.includes(font.name) ? "bg-amber-500/15 text-amber-500 font-semibold" : "text-foreground"
                            }`}
                          >
                            <div className="flex flex-col min-w-0 pr-2">
                              <span className="text-[10px] text-muted-foreground">{font.name}</span>
                              <span className="text-sm truncate" style={{ fontFamily: font.family }}>
                                {previewText}
                              </span>
                            </div>
                            {textLayer.fontFamily.includes(font.name) && (
                              <Check className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </Popover.Content>
                </Popover.Portal>
              </Popover.Root>

              {/* Font Size Stepper */}
              <div className="flex items-center bg-secondary border border-border rounded-lg shadow-inner shrink-0">
                <button
                  type="button"
                  onClick={() => onUpdateLayer({ ...textLayer, fontSize: Math.max(10, textLayer.fontSize - 2) })}
                  className="px-2 py-1 hover:bg-card text-foreground rounded-l-lg transition-colors font-bold"
                >
                  -
                </button>
                <span className="px-2 font-mono text-center min-w-[28px] text-[11px] font-semibold">{textLayer.fontSize}</span>
                <button
                  type="button"
                  onClick={() => onUpdateLayer({ ...textLayer, fontSize: Math.min(120, textLayer.fontSize + 2) })}
                  className="px-2 py-1 hover:bg-card text-foreground rounded-r-lg transition-colors font-bold"
                >
                  +
                </button>
              </div>

              {/* Color Swatch Picker with Radix Popover and Portal to eliminate clipping */}
              <Popover.Root open={isColorOpen} onOpenChange={setIsColorOpen}>
                <Popover.Trigger asChild>
                  <button
                    type="button"
                    className="flex items-center gap-1.5 px-2 py-1.5 bg-secondary hover:bg-secondary/80 rounded-lg border border-border shadow-sm shrink-0"
                    title="Text Color"
                  >
                    <div
                      className={`w-4 h-4 rounded-full border border-border shadow-inner ${
                        textLayer.isGoldFoil ? "bg-gradient-to-tr from-amber-300 via-amber-500 to-amber-700" : ""
                      }`}
                      style={{ backgroundColor: textLayer.isGoldFoil ? undefined : textLayer.color }}
                    />
                    <ChevronDown className="w-3 h-3 text-muted-foreground" />
                  </button>
                </Popover.Trigger>
                <Popover.Portal>
                  <Popover.Content
                    side="bottom"
                    align="start"
                    sideOffset={6}
                    className="z-50 w-64 bg-card border border-border rounded-2xl shadow-2xl p-3 text-card-foreground animate-in fade-in zoom-in-95 duration-150"
                  >
                    {/* Gold Foil Shortcut */}
                    <div className="mb-3 pb-2.5 border-b border-border">
                      <span className="text-[10px] font-bold text-amber-500 uppercase tracking-wider block mb-1.5 flex items-center gap-1">
                        <Flame className="w-3 h-3 text-amber-500" />
                        Luxury Foil
                      </span>
                      <div className="grid grid-cols-3 gap-1.5">
                        <button
                          type="button"
                          onClick={() => {
                            onUpdateLayer({ ...textLayer, isGoldFoil: true, foilStyle: "gold" });
                            setIsColorOpen(false);
                          }}
                          className="px-2 py-1 text-[11px] font-bold rounded-lg bg-gradient-to-r from-[#FFE599] via-[#D4AF37] to-[#996515] text-neutral-900 border border-amber-300"
                        >
                          Gold Foil
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            onUpdateLayer({ ...textLayer, isGoldFoil: true, foilStyle: "rose-gold" });
                            setIsColorOpen(false);
                          }}
                          className="px-2 py-1 text-[11px] font-bold rounded-lg bg-gradient-to-r from-[#FADBD8] via-[#B76E79] to-[#944855] text-neutral-900 border border-rose-300"
                        >
                          Rose Gold
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            onUpdateLayer({ ...textLayer, isGoldFoil: false });
                            setIsColorOpen(false);
                          }}
                          className="px-2 py-1 text-[11px] font-medium rounded-lg bg-secondary text-foreground border border-border"
                        >
                          Flat Color
                        </button>
                      </div>
                    </div>

                    <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider block mb-2">
                      Luxury Color Palette
                    </span>
                    <div className="grid grid-cols-5 gap-2 mb-3">
                      {LUXURY_PALETTE.map((c) => (
                        <button
                          key={c.hex}
                          type="button"
                          onClick={() => {
                            onUpdateLayer({ ...textLayer, color: c.hex, isGoldFoil: false });
                            setIsColorOpen(false);
                          }}
                          title={c.name}
                          className={`w-7 h-7 rounded-full border flex items-center justify-center transition-transform ${
                            !textLayer.isGoldFoil && textLayer.color.toLowerCase() === c.hex.toLowerCase()
                              ? "scale-110 ring-2 ring-amber-500 ring-offset-2 ring-offset-card"
                              : "border-border hover:scale-110"
                          }`}
                          style={{ backgroundColor: c.hex }}
                        >
                          {!textLayer.isGoldFoil && textLayer.color.toLowerCase() === c.hex.toLowerCase() && (
                            <Check className={`w-3 h-3 ${c.hex === "#FFFFFF" ? "text-black" : "text-white"}`} />
                          )}
                        </button>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 pt-2 border-t border-border">
                      <span className="text-[11px] text-muted-foreground">Custom:</span>
                      <input
                        type="color"
                        value={textLayer.color}
                        onChange={(e) => onUpdateLayer({ ...textLayer, color: e.target.value, isGoldFoil: false })}
                        className="w-7 h-7 rounded-lg border border-border bg-transparent cursor-pointer"
                      />
                      <input
                        type="text"
                        value={textLayer.color}
                        onChange={(e) => onUpdateLayer({ ...textLayer, color: e.target.value, isGoldFoil: false })}
                        className="w-20 px-1.5 py-1 text-[11px] bg-secondary border border-border rounded text-foreground font-mono"
                      />
                    </div>
                  </Popover.Content>
                </Popover.Portal>
              </Popover.Root>

              {/* Bold, Italic & Underline */}
              <div className="flex items-center bg-secondary border border-border rounded-lg overflow-hidden shadow-inner shrink-0">
                <button
                  type="button"
                  onClick={() =>
                    onUpdateLayer({
                      ...textLayer,
                      fontWeight: textLayer.fontWeight === "bold" ? "normal" : "bold",
                    })
                  }
                  className={`p-1.5 hover:bg-card transition-colors ${
                    textLayer.fontWeight === "bold" ? "bg-amber-500/20 text-amber-500 font-bold" : "text-muted-foreground"
                  }`}
                  title="Bold"
                >
                  <Bold className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() =>
                    onUpdateLayer({
                      ...textLayer,
                      fontStyle: textLayer.fontStyle === "italic" ? "normal" : "italic",
                    })
                  }
                  className={`p-1.5 hover:bg-card transition-colors ${
                    textLayer.fontStyle === "italic" ? "bg-amber-500/20 text-amber-500" : "text-muted-foreground"
                  }`}
                  title="Italic"
                >
                  <Italic className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() =>
                    onUpdateLayer({
                      ...textLayer,
                      isUnderline: !textLayer.isUnderline,
                    })
                  }
                  className={`p-1.5 hover:bg-card transition-colors ${
                    textLayer.isUnderline ? "bg-amber-500/20 text-amber-500" : "text-muted-foreground"
                  }`}
                  title="Underline"
                >
                  <Underline className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Gold Foil Quick Button */}
              <button
                type="button"
                onClick={() =>
                  onUpdateLayer({
                    ...textLayer,
                    isGoldFoil: !textLayer.isGoldFoil,
                    foilStyle: textLayer.foilStyle || "gold",
                  })
                }
                title="Toggle Luxury Gold Foil"
                className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg border font-semibold text-xs transition-all shrink-0 ${
                  textLayer.isGoldFoil
                    ? "bg-amber-500 text-white border-amber-400 shadow-sm"
                    : "bg-secondary hover:bg-card border-border text-muted-foreground hover:text-amber-500"
                }`}
              >
                <Flame className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Gold Foil</span>
              </button>

              {/* Alignment */}
              <div className="flex items-center bg-secondary border border-border rounded-lg overflow-hidden shadow-inner shrink-0">
                <button
                  type="button"
                  onClick={() => onUpdateLayer({ ...textLayer, textAlign: "left" })}
                  className={`p-1.5 hover:bg-card ${
                    textLayer.textAlign === "left" ? "bg-amber-500/20 text-amber-500" : "text-muted-foreground"
                  }`}
                  title="Align Left"
                >
                  <AlignLeft className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => onUpdateLayer({ ...textLayer, textAlign: "center" })}
                  className={`p-1.5 hover:bg-card ${
                    textLayer.textAlign === "center" ? "bg-amber-500/20 text-amber-500" : "text-muted-foreground"
                  }`}
                  title="Align Center"
                >
                  <AlignCenter className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => onUpdateLayer({ ...textLayer, textAlign: "right" })}
                  className={`p-1.5 hover:bg-card ${
                    textLayer.textAlign === "right" ? "bg-amber-500/20 text-amber-500" : "text-muted-foreground"
                  }`}
                  title="Align Right"
                >
                  <AlignRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Text Transform */}
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
                title="Toggle Text Case"
                className={`p-1.5 rounded-lg border border-border bg-secondary hover:bg-card transition-colors shrink-0 ${
                  textLayer.textTransform !== "none" ? "text-amber-500" : "text-muted-foreground"
                }`}
              >
                <CaseSensitive className="w-3.5 h-3.5" />
              </button>
            </>
          )}

          {/* Sticker Color */}
          {stickerLayer && (
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-muted-foreground text-xs">Motif Tint:</span>
              <div className="flex items-center gap-1">
                {LUXURY_PALETTE.slice(0, 6).map((c) => (
                  <button
                    key={c.hex}
                    type="button"
                    onClick={() => onUpdateLayer({ ...stickerLayer, color: c.hex })}
                    className="w-5 h-5 rounded-full border border-border hover:scale-110 shadow-sm"
                    style={{ backgroundColor: c.hex }}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Divider */}
          <div className="w-[1px] h-4 bg-border mx-1 shrink-0" />

          {/* Center Layer */}
          <button
            type="button"
            onClick={() => onCenterLayer(selectedLayer.id)}
            title="Center Horizontally"
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-secondary hover:bg-card text-foreground font-medium text-xs border border-border transition-colors shrink-0"
          >
            <span>Center</span>
          </button>

          {/* Reorder Buttons */}
          <button
            type="button"
            onClick={() => onBringForward(selectedLayer.id)}
            title="Bring Forward"
            className="p-1.5 rounded-lg bg-secondary hover:bg-card text-muted-foreground hover:text-foreground border border-border shrink-0"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
          <button
            type="button"
            onClick={() => onSendBackward(selectedLayer.id)}
            title="Send Backward"
            className="p-1.5 rounded-lg bg-secondary hover:bg-card text-muted-foreground hover:text-foreground border border-border shrink-0"
          >
            <ArrowDown className="w-3.5 h-3.5" />
          </button>

          {/* Duplicate */}
          <button
            type="button"
            onClick={() => onDuplicateLayer(selectedLayer.id)}
            title="Duplicate Layer"
            className="p-1.5 rounded-lg bg-secondary hover:bg-card text-muted-foreground hover:text-foreground border border-border shrink-0"
          >
            <Copy className="w-3.5 h-3.5" />
          </button>

          {/* Lock / Unlock */}
          <button
            type="button"
            onClick={() => onUpdateLayer({ ...selectedLayer, isLocked: !selectedLayer.isLocked })}
            title={selectedLayer.isLocked ? "Unlock" : "Lock"}
            className={`p-1.5 rounded-lg bg-secondary hover:bg-card border border-border shrink-0 ${
              selectedLayer.isLocked ? "text-amber-500" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {selectedLayer.isLocked ? <Lock className="w-3.5 h-3.5" /> : <Unlock className="w-3.5 h-3.5" />}
          </button>

          {/* Delete */}
          <button
            type="button"
            onClick={() => onDeleteLayer(selectedLayer.id)}
            title="Delete Layer"
            className="p-1.5 rounded-lg bg-secondary hover:bg-destructive/10 text-muted-foreground hover:text-destructive border border-border transition-colors shrink-0 ml-auto"
          >
            <Trash2 className="w-3.5 h-3.5" />
          </button>
        </div>
      )}
    </header>
  );
};
