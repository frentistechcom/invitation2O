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
  Sparkles,
  Check,
  CaseSensitive,
} from "lucide-react";

interface TextEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  textLayer: TextLayer | null;
  onUpdateLayer: (layer: TextLayer) => void;
}

const QUICK_PHRASES = [
  { label: "Bride & Groom", text: "Raveendra & Kanchana" },
  { label: "Wedding Ceremony", text: "Wedding Ceremony" },
  { label: "Save The Date", text: "SAVE THE DATE" },
  { label: "Sacred Shloka", text: "|| श्री गणेशाय नमः ||" },
  { label: "Shubh Vivah", text: "|| शुभ विवाह ||" },
  { label: "Invitation Note", text: "Cordially invite you to celebrate the joyous union of our children" },
  { label: "Date & Time", text: "Sunday, December 28, 2026\nMuhurtham: 10:15 AM Onwards" },
  { label: "Venue Sample", text: "Palace Convention Hall, 4th Cross Road\nRajajinagar, Bengaluru - 560010" },
  { label: "RSVP Sample", text: "With Best Compliments from Near & Dear\nRSVP: +91 98765 43210" },
];

const LUXURY_PALETTE = [
  { name: "Imperial Gold", hex: "#D4AF37" },
  { name: "Royal Amber", hex: "#C28524" },
  { name: "Deep Crimson", hex: "#8B1E2F" },
  { name: "Velvet Maroon", hex: "#5E101E" },
  { name: "Emerald Green", hex: "#27AE60" },
  { name: "Peacock Navy", hex: "#1A365D" },
  { name: "Rose Gold", hex: "#B76E79" },
  { name: "Charcoal Obsidian", hex: "#1C1917" },
  { name: "Ivory White", hex: "#FFFFFF" },
];

export const TextEditModal: React.FC<TextEditModalProps> = ({
  isOpen,
  onClose,
  textLayer,
  onUpdateLayer,
}) => {
  const [localText, setLocalText] = useState("");

  useEffect(() => {
    if (textLayer) {
      setLocalText(textLayer.text);
    }
  }, [textLayer]);

  if (!textLayer) return null;

  const handleTextChange = (newText: string) => {
    setLocalText(newText);
    onUpdateLayer({ ...textLayer, text: newText });
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 animate-in fade-in duration-200" />
        <Dialog.Content className="fixed bottom-0 left-0 right-0 sm:bottom-auto sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 w-full sm:max-w-lg bg-card border border-border sm:rounded-3xl rounded-t-3xl shadow-2xl z-50 p-5 sm:p-6 max-h-[90vh] overflow-y-auto animate-in fade-in slide-in-from-bottom-6 sm:zoom-in-95 duration-200 text-card-foreground">
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-border mb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-500">
                <Type className="w-4 h-4" />
              </div>
              <div>
                <Dialog.Title className="text-sm font-bold tracking-tight text-foreground">
                  Edit Text Content
                </Dialog.Title>
                <p className="text-[11px] text-muted-foreground">
                  Changes reflect in real-time on your invitation card
                </p>
              </div>
            </div>
            <Dialog.Close asChild>
              <button
                type="button"
                className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </Dialog.Close>
          </div>

          {/* Main Textarea */}
          <div className="space-y-4">
            <div>
              <label className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground block mb-1.5">
                Text Body
              </label>
              <textarea
                autoFocus
                rows={4}
                value={localText}
                onChange={(e) => handleTextChange(e.target.value)}
                placeholder="Type your card invitation text here..."
                className="w-full p-3.5 rounded-2xl bg-secondary/80 border border-border focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 text-foreground text-sm font-sans leading-relaxed outline-none transition-all resize-y shadow-inner"
              />
              <div className="flex justify-between items-center text-[11px] text-muted-foreground mt-1 px-1">
                <span>{localText.length} characters</span>
                <button
                  type="button"
                  onClick={() => handleTextChange("")}
                  className="hover:text-destructive text-muted-foreground transition-colors"
                >
                  Clear text
                </button>
              </div>
            </div>

            {/* Quick Inspiration / Templates */}
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5 mb-2">
                <Sparkles className="w-3 h-3 text-amber-500" />
                Quick Presets & Suggestions
              </span>
              <div className="flex flex-wrap gap-1.5 max-h-32 overflow-y-auto pr-1">
                {QUICK_PHRASES.map((phrase) => (
                  <button
                    key={phrase.label}
                    type="button"
                    onClick={() => handleTextChange(phrase.text)}
                    className="px-2.5 py-1 text-xs rounded-lg bg-secondary hover:bg-secondary/80 border border-border text-foreground hover:border-amber-500/40 transition-all text-left"
                    title={phrase.text}
                  >
                    {phrase.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Typography Controls In Modal */}
            <div className="pt-3 border-t border-border grid grid-cols-2 gap-3">
              {/* Font Size */}
              <div>
                <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block mb-1">
                  Font Size ({textLayer.fontSize}px)
                </label>
                <div className="flex items-center bg-secondary border border-border rounded-xl overflow-hidden p-0.5">
                  <button
                    type="button"
                    onClick={() => onUpdateLayer({ ...textLayer, fontSize: Math.max(10, textLayer.fontSize - 2) })}
                    className="w-8 h-8 flex items-center justify-center text-foreground hover:bg-card rounded-lg font-bold"
                  >
                    -
                  </button>
                  <span className="flex-1 text-center font-mono text-xs font-semibold">
                    {textLayer.fontSize}
                  </span>
                  <button
                    type="button"
                    onClick={() => onUpdateLayer({ ...textLayer, fontSize: Math.min(120, textLayer.fontSize + 2) })}
                    className="w-8 h-8 flex items-center justify-center text-foreground hover:bg-card rounded-lg font-bold"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Text Alignment */}
              <div>
                <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block mb-1">
                  Alignment
                </label>
                <div className="flex items-center justify-around bg-secondary border border-border rounded-xl p-0.5">
                  <button
                    type="button"
                    onClick={() => onUpdateLayer({ ...textLayer, textAlign: "left" })}
                    className={`p-1.5 rounded-lg flex-1 flex justify-center ${
                      textLayer.textAlign === "left" ? "bg-card shadow-sm text-amber-500" : "text-muted-foreground"
                    }`}
                  >
                    <AlignLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => onUpdateLayer({ ...textLayer, textAlign: "center" })}
                    className={`p-1.5 rounded-lg flex-1 flex justify-center ${
                      textLayer.textAlign === "center" ? "bg-card shadow-sm text-amber-500" : "text-muted-foreground"
                    }`}
                  >
                    <AlignCenter className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => onUpdateLayer({ ...textLayer, textAlign: "right" })}
                    className={`p-1.5 rounded-lg flex-1 flex justify-center ${
                      textLayer.textAlign === "right" ? "bg-card shadow-sm text-amber-500" : "text-muted-foreground"
                    }`}
                  >
                    <AlignRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Color Swatches */}
            <div>
              <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block mb-1.5">
                Quick Text Color
              </label>
              <div className="flex items-center gap-2 overflow-x-auto py-1">
                {LUXURY_PALETTE.map((c) => (
                  <button
                    key={c.hex}
                    type="button"
                    onClick={() => onUpdateLayer({ ...textLayer, color: c.hex })}
                    className={`w-7 h-7 rounded-full border shrink-0 transition-transform flex items-center justify-center shadow-sm ${
                      textLayer.color.toLowerCase() === c.hex.toLowerCase()
                        ? "scale-110 ring-2 ring-amber-500 ring-offset-2 ring-offset-card"
                        : "border-border hover:scale-105"
                    }`}
                    style={{ backgroundColor: c.hex }}
                    title={c.name}
                  >
                    {textLayer.color.toLowerCase() === c.hex.toLowerCase() && (
                      <Check className={`w-3.5 h-3.5 ${c.hex === "#FFFFFF" ? "text-black" : "text-white"}`} />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Action Done Button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={onClose}
                className="w-full py-3 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:to-orange-600 text-white font-semibold text-sm rounded-2xl shadow-lg shadow-orange-500/25 active:scale-98 transition-all flex items-center justify-center gap-2"
              >
                <Check className="w-4 h-4" />
                <span>Save & Apply Changes</span>
              </button>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
