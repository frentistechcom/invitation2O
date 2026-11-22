"use client";

import React, { useState } from "react";
import { CardTemplate, CanvasLayer, ExportFormat } from "@/types/editor";
import { exportCard } from "@/lib/export";
import confetti from "canvas-confetti";
import { X, Download, FileImage, FileText, CheckCircle2, Loader2, Sparkles, ShieldCheck } from "lucide-react";

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  template: CardTemplate;
  layers: CanvasLayer[];
}

export const DownloadModal: React.FC<DownloadModalProps> = ({ isOpen, onClose, template, layers }) => {
  const [format, setFormat] = useState<ExportFormat>("png");
  const [scale, setScale] = useState<number>(2.5); // 2.5x ~ 2000x3000px ultra high-res
  const [includeWatermark, setIncludeWatermark] = useState<boolean>(false);
  const [isExporting, setIsExporting] = useState<boolean>(false);
  const [exportComplete, setExportComplete] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleDownload = async () => {
    try {
      setIsExporting(true);
      const result = await exportCard(template, layers, {
        format,
        scaleMultiplier: scale,
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

        {/* Format Selector */}
        <div className="mb-5">
          <label className="text-xs font-semibold text-muted-foreground block mb-2 uppercase tracking-wider">
            Select File Format
          </label>
          <div className="grid grid-cols-3 gap-2.5">
            <button
              type="button"
              onClick={() => setFormat("png")}
              className={`p-3.5 rounded-2xl border flex flex-col items-center gap-1.5 transition-all shadow-sm ${
                format === "png"
                  ? "bg-amber-500/15 border-amber-500 text-amber-500 font-semibold scale-102"
                  : "bg-secondary/60 border-border text-foreground hover:border-amber-500/40"
              }`}
            >
              <FileImage className="w-5 h-5" />
              <span className="text-xs font-medium">PNG Image</span>
              <span className="text-[10px] text-muted-foreground">Crisp Lossless</span>
            </button>

            <button
              type="button"
              onClick={() => setFormat("jpg")}
              className={`p-3.5 rounded-2xl border flex flex-col items-center gap-1.5 transition-all shadow-sm ${
                format === "jpg"
                  ? "bg-amber-500/15 border-amber-500 text-amber-500 font-semibold scale-102"
                  : "bg-secondary/60 border-border text-foreground hover:border-amber-500/40"
              }`}
            >
              <FileImage className="w-5 h-5" />
              <span className="text-xs font-medium">JPG / JPEG</span>
              <span className="text-[10px] text-muted-foreground">WhatsApp Fast</span>
            </button>

            <button
              type="button"
              onClick={() => setFormat("pdf")}
              className={`p-3.5 rounded-2xl border flex flex-col items-center gap-1.5 transition-all shadow-sm ${
                format === "pdf"
                  ? "bg-amber-500/15 border-amber-500 text-amber-500 font-semibold scale-102"
                  : "bg-secondary/60 border-border text-foreground hover:border-amber-500/40"
              }`}
            >
              <FileText className="w-5 h-5" />
              <span className="text-xs font-medium">PDF Print</span>
              <span className="text-[10px] text-muted-foreground">Print Ready</span>
            </button>
          </div>
        </div>

        {/* Resolution Quality */}
        <div className="mb-5">
          <label className="text-xs font-semibold text-muted-foreground block mb-2 uppercase tracking-wider">
            Resolution &amp; Clarity
          </label>
          <div className="grid grid-cols-3 gap-2 text-xs">
            <button
              type="button"
              onClick={() => setScale(1.5)}
              className={`py-2 px-2.5 rounded-xl border text-center transition-all ${
                scale === 1.5
                  ? "bg-amber-500/15 border-amber-500 text-amber-500 font-semibold"
                  : "bg-secondary/60 border-border text-muted-foreground"
              }`}
            >
              Standard (HD)
              <span className="block text-[10px] text-muted-foreground mt-0.5">1200 × 1800</span>
            </button>
            <button
              type="button"
              onClick={() => setScale(2.5)}
              className={`py-2 px-2.5 rounded-xl border text-center transition-all ${
                scale === 2.5
                  ? "bg-amber-500/15 border-amber-500 text-amber-500 font-semibold"
                  : "bg-secondary/60 border-border text-muted-foreground"
              }`}
            >
              Ultra HD
              <span className="block text-[10px] text-muted-foreground mt-0.5">2000 × 3000</span>
            </button>
            <button
              type="button"
              onClick={() => setScale(3.5)}
              className={`py-2 px-2.5 rounded-xl border text-center transition-all ${
                scale === 3.5
                  ? "bg-amber-500/15 border-amber-500 text-amber-500 font-semibold"
                  : "bg-secondary/60 border-border text-muted-foreground"
              }`}
            >
              300 DPI Print
              <span className="block text-[10px] text-muted-foreground mt-0.5">2800 × 4200</span>
            </button>
          </div>
        </div>

        {/* Watermark Toggle */}
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
              <span>Rendering 300 DPI Vector Canvas...</span>
            </>
          ) : exportComplete ? (
            <>
              <CheckCircle2 className="w-5 h-5 text-emerald-200" />
              <span>Downloaded Successfully!</span>
            </>
          ) : (
            <>
              <Download className="w-5 h-5" />
              <span>Download High-Resolution Card</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
