"use client";

import React, { useState } from "react";
import { CardTemplate, CanvasLayer } from "@/types/editor";
import { exportCard } from "@/lib/export";
import confetti from "canvas-confetti";
import { X, Download, FileImage, CheckCircle2, Loader2, Sparkles, ShieldCheck } from "lucide-react";

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  template: CardTemplate;
  layers: CanvasLayer[];
}

export const DownloadModal: React.FC<DownloadModalProps> = ({ isOpen, onClose, template, layers }) => {
  const [isExporting, setIsExporting] = useState<boolean>(false);
  const [exportComplete, setExportComplete] = useState<boolean>(false);
  const [includeWatermark, setIncludeWatermark] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleDownload = async () => {
    try {
      setIsExporting(true);
      const result = await exportCard(template, layers, {
        format: "png",
        scaleMultiplier: 2.5, // 2000x3000px Ultra HD 300 DPI
        includeWatermark,
      });

      // Trigger browser download
      const downloadUrl = URL.createObjectURL(result.blob);
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = result.filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(downloadUrl);

      // Confetti burst
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
        colors: ["#D4AF37", "#8B1E2F", "#F39C12", "#E87A90"],
      });

      setExportComplete(true);
      setTimeout(() => {
        setExportComplete(false);
        onClose();
      }, 1800);
    } catch (err) {
      console.error("Download failed:", err);
      alert("Failed to export invitation card. Please try again.");
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="w-full max-w-md bg-card border border-border rounded-3xl p-6 sm:p-7 shadow-2xl relative text-card-foreground">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-1.5">
          <Sparkles className="w-5 h-5 text-amber-500" />
          <h2 className="text-xl font-serif font-bold text-foreground">Download Invitation Card</h2>
        </div>
        <p className="text-xs text-muted-foreground mb-6 leading-relaxed">
          High-definition 300 DPI vector export ready for WhatsApp, social media, and digital printing.
        </p>

        {/* Dedicated PNG HD Image Option */}
        <div className="mb-5">
          <label className="text-xs font-semibold text-muted-foreground block mb-2 uppercase tracking-wider">
            Export Format
          </label>
          <div className="p-4 rounded-2xl border bg-amber-500/10 border-amber-500 text-amber-600 dark:text-amber-400 flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-500 shrink-0">
                <FileImage className="w-5 h-5" />
              </div>
              <div>
                <span className="text-sm font-bold text-foreground block">PNG HD Image</span>
                <span className="text-xs text-muted-foreground">Crisp Lossless • 300 DPI Ultra HD (2000 × 3000)</span>
              </div>
            </div>
            <div className="w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Clean Print (No Watermark) */}
        <div className="flex items-center justify-between p-3.5 rounded-2xl bg-secondary/60 border border-border mb-6">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-emerald-500" />
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-foreground">Clean Print (No Watermark)</span>
              <span className="text-[11px] text-muted-foreground">100% crystal clean export for your guests</span>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setIncludeWatermark(!includeWatermark)}
            className={`w-11 h-6 rounded-full transition-colors relative p-0.5 ${
              !includeWatermark ? "bg-emerald-500" : "bg-neutral-400 dark:bg-neutral-700"
            }`}
          >
            <div
              className={`w-5 h-5 rounded-full bg-white transition-transform ${
                !includeWatermark ? "translate-x-5" : "translate-x-0"
              }`}
            />
          </button>
        </div>

        {/* Download Action CTA */}
        <button
          type="button"
          onClick={handleDownload}
          disabled={isExporting || exportComplete}
          className="w-full py-4 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:to-orange-600 text-white font-semibold text-sm rounded-2xl shadow-xl shadow-orange-500/25 flex items-center justify-center gap-2 active:scale-[0.98] transition-all disabled:opacity-60 cursor-pointer"
        >
          {isExporting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Rendering 300 DPI PNG HD...</span>
            </>
          ) : exportComplete ? (
            <>
              <CheckCircle2 className="w-5 h-5 text-emerald-200" />
              <span>Downloaded Successfully!</span>
            </>
          ) : (
            <>
              <Download className="w-5 h-5" />
              <span>Download PNG HD Card</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
