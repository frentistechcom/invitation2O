"use client";

import React, { useState, useRef } from "react";
import { CanvasLayer, TextLayer, CardTemplate } from "@/types/editor";
import { STICKERS_COLLECTION } from "@/lib/stickers";
import {
  Type,
  Image as ImageIcon,
  Smile,
  QrCode,
  Layers,
  LayoutGrid,
  Plus,
  X,
  Upload,
  MapPin,
  Trash2,
  Lock,
  Unlock,
  Sparkles,
  Pencil,
} from "lucide-react";

interface MobileEditorBarProps {
  onAddText: (variant: "heading" | "subheading" | "body" | "shloka") => void;
  onAddSticker: (stickerId: string) => void;
  onAddQR: (link: string, label: string) => void;
  onAddImage: (base64Src: string, maskShape: "rect" | "circle" | "rounded" | "arch") => void;
  layers: CanvasLayer[];
  selectedLayerId: string | null;
  onSelectLayer: (id: string | null) => void;
  onDeleteLayer: (id: string) => void;
  onToggleLock: (id: string) => void;
  templates: CardTemplate[];
  onSelectTemplate: (template: CardTemplate) => void;
  onOpenEditText?: () => void;
}

export const MobileEditorBar: React.FC<MobileEditorBarProps> = ({
  onAddText,
  onAddSticker,
  onAddQR,
  onAddImage,
  layers,
  selectedLayerId,
  onSelectLayer,
  onDeleteLayer,
  onToggleLock,
  templates,
  onSelectTemplate,
  onOpenEditText,
}) => {
  const [activeModal, setActiveModal] = useState<"text" | "photo" | "sticker" | "qr" | "layers" | "templates" | null>(
    null
  );
  const [qrLink, setQrLink] = useState("https://maps.google.com");
  const [qrLabel, setQrLabel] = useState("Scan For Venue Map");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [photoShape, setPhotoShape] = useState<"rect" | "circle" | "rounded" | "arch">("circle");

  const selectedLayer = layers.find((l) => l.id === selectedLayerId);
  const isTextSelected = selectedLayer?.type === "text";

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          onAddImage(event.target.result as string, photoShape);
          setActiveModal(null);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCreateQR = () => {
    if (!qrLink.trim()) return;
    onAddQR(qrLink, qrLabel);
    setActiveModal(null);
  };

  return (
    <>
      {/* Bottom Floating Bar */}
      <nav className="w-full bg-card/95 backdrop-blur-md border-t border-border px-1 sm:px-4 pt-1.5 pb-2.5 sm:py-2 flex items-center justify-around z-30 select-none shadow-2xl transition-colors shrink-0">
        {/* Contextual Action: Edit Text if selected, else Add Text */}
        {isTextSelected ? (
          <button
            type="button"
            onClick={() => onOpenEditText?.()}
            className="flex flex-col items-center justify-center gap-0.5 text-amber-500 active:scale-95 transition-all p-1 min-w-[44px]"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-tr from-amber-500 via-orange-500 to-amber-600 text-white flex items-center justify-center shadow-lg shadow-orange-500/30 ring-2 ring-amber-400 animate-pulse">
              <Pencil className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
            <span className="text-[10px] font-bold tracking-tight text-center leading-none">Edit Text</span>
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setActiveModal("text")}
            className="flex flex-col items-center justify-center gap-0.5 text-foreground hover:text-amber-500 active:scale-95 transition-all p-1 min-w-[44px]"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-tr from-amber-500 via-orange-500 to-amber-600 text-white flex items-center justify-center shadow-md shadow-orange-500/20">
              <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
            <span className="text-[10px] font-semibold tracking-tight text-center leading-none">Add Text</span>
          </button>
        )}

        {/* If text is selected, also give quick Add Text option */}
        {isTextSelected && (
          <button
            type="button"
            onClick={() => setActiveModal("text")}
            className="flex flex-col items-center justify-center gap-0.5 text-muted-foreground hover:text-foreground active:scale-95 transition-all p-1 min-w-[44px]"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-secondary flex items-center justify-center text-foreground border border-border">
              <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
            <span className="text-[10px] text-center leading-none">+ Text</span>
          </button>
        )}

        {/* Photo */}
        <button
          type="button"
          onClick={() => setActiveModal("photo")}
          className="flex flex-col items-center justify-center gap-0.5 text-muted-foreground hover:text-foreground active:scale-95 transition-all p-1 min-w-[44px]"
        >
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-secondary flex items-center justify-center text-foreground border border-border">
            <ImageIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </div>
          <span className="text-[10px] text-center leading-none">Photo</span>
        </button>

        {/* Sticker / Motifs */}
        <button
          type="button"
          onClick={() => setActiveModal("sticker")}
          className="flex flex-col items-center justify-center gap-0.5 text-muted-foreground hover:text-foreground active:scale-95 transition-all p-1 min-w-[44px]"
        >
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-secondary flex items-center justify-center text-foreground border border-border">
            <Smile className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </div>
          <span className="text-[10px] text-center leading-none">Motifs</span>
        </button>

        {/* QR Map */}
        <button
          type="button"
          onClick={() => setActiveModal("qr")}
          className="flex flex-col items-center justify-center gap-0.5 text-muted-foreground hover:text-foreground active:scale-95 transition-all p-1 min-w-[44px]"
        >
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-secondary flex items-center justify-center text-foreground border border-border">
            <QrCode className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </div>
          <span className="text-[10px] text-center leading-none">Venue QR</span>
        </button>

        {/* Layers */}
        <button
          type="button"
          onClick={() => setActiveModal("layers")}
          className="flex flex-col items-center justify-center gap-0.5 text-muted-foreground hover:text-foreground active:scale-95 transition-all p-1 min-w-[44px]"
        >
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-secondary flex items-center justify-center text-foreground border border-border">
            <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </div>
          <span className="text-[10px] text-center leading-none">Layers ({layers.length})</span>
        </button>

        {/* Templates */}
        <button
          type="button"
          onClick={() => setActiveModal("templates")}
          className="flex flex-col items-center justify-center gap-0.5 text-muted-foreground hover:text-foreground active:scale-95 transition-all p-1 min-w-[44px]"
        >
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-secondary flex items-center justify-center text-foreground border border-border">
            <LayoutGrid className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </div>
          <span className="text-[10px] text-center leading-none">Templates</span>
        </button>
      </nav>

      {/* MODAL / BOTTOM SHEET OVERLAYS */}
      {activeModal && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 animate-in fade-in duration-150"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="w-full sm:max-w-md bg-card border border-border rounded-t-3xl sm:rounded-3xl p-6 shadow-2xl max-h-[85vh] overflow-y-auto text-card-foreground"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-border mb-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                {activeModal === "text" && "Add New Text Block"}
                {activeModal === "photo" && "Upload Photo / Portrait"}
                {activeModal === "sticker" && "Cultural Motifs & Symbols"}
                {activeModal === "qr" && "Google Maps GPS QR Code"}
                {activeModal === "layers" && "Manage Layers"}
                {activeModal === "templates" && "Switch Card Template"}
              </h3>
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="p-1.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* TEXT PRESETS */}
            {activeModal === "text" && (
              <div className="grid grid-cols-1 gap-2.5">
                <button
                  type="button"
                  onClick={() => {
                    onAddText("heading");
                    setActiveModal(null);
                  }}
                  className="p-3.5 text-left bg-secondary/60 hover:bg-secondary border border-border rounded-2xl hover:border-amber-500/50 transition-all flex flex-col gap-0.5 shadow-sm"
                >
                  <span className="text-[11px] text-muted-foreground font-medium uppercase tracking-wider">Main Heading</span>
                  <span className="text-xl font-bold font-serif text-amber-500">Bride & Groom Names</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    onAddText("subheading");
                    setActiveModal(null);
                  }}
                  className="p-3.5 text-left bg-secondary/60 hover:bg-secondary border border-border rounded-2xl hover:border-amber-500/50 transition-all flex flex-col gap-0.5 shadow-sm"
                >
                  <span className="text-[11px] text-muted-foreground font-medium uppercase tracking-wider">Calligraphy Subtitle</span>
                  <span className="text-base font-serif text-foreground">Wedding Ceremony</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    onAddText("body");
                    setActiveModal(null);
                  }}
                  className="p-3.5 text-left bg-secondary/60 hover:bg-secondary border border-border rounded-2xl hover:border-amber-500/50 transition-all flex flex-col gap-0.5 shadow-sm"
                >
                  <span className="text-[11px] text-muted-foreground font-medium uppercase tracking-wider">Venue & RSVP Details</span>
                  <span className="text-xs text-foreground font-sans">Palace Convention Hall, 7:00 PM</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    onAddText("shloka");
                    setActiveModal(null);
                  }}
                  className="p-3.5 text-left bg-secondary/60 hover:bg-secondary border border-border rounded-2xl hover:border-amber-500/50 transition-all flex flex-col gap-0.5 shadow-sm"
                >
                  <span className="text-[11px] text-muted-foreground font-medium uppercase tracking-wider">Sacred Inscription</span>
                  <span className="text-sm font-serif text-amber-600 dark:text-amber-400">|| श्री गणेशाय नमः ||</span>
                </button>
              </div>
            )}

            {/* PHOTO UPLOADER */}
            {activeModal === "photo" && (
              <div className="flex flex-col gap-4">
                <div>
                  <span className="text-xs text-muted-foreground mb-2 block font-medium">Choose Mask Shape:</span>
                  <div className="grid grid-cols-4 gap-2">
                    {(["circle", "rounded", "arch", "rect"] as const).map((shape) => (
                      <button
                        key={shape}
                        type="button"
                        onClick={() => setPhotoShape(shape)}
                        className={`p-2.5 rounded-xl border text-xs capitalize text-center flex flex-col items-center gap-1.5 transition-all ${
                          photoShape === shape
                            ? "bg-amber-500/15 border-amber-500 text-amber-500 font-semibold"
                            : "bg-secondary border-border text-muted-foreground"
                        }`}
                      >
                        <div
                          className={`w-6 h-6 border-2 border-current ${
                            shape === "circle"
                              ? "rounded-full"
                              : shape === "rounded"
                              ? "rounded-lg"
                              : shape === "arch"
                              ? "rounded-t-full"
                              : ""
                          }`}
                        />
                        <span>{shape}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="border-2 border-dashed border-border hover:border-amber-500 rounded-2xl p-8 flex flex-col items-center justify-center gap-2 cursor-pointer bg-secondary/50 hover:bg-secondary transition-all"
                >
                  <Upload className="w-8 h-8 text-amber-500" />
                  <span className="text-xs font-semibold text-foreground">Click to Upload Photo</span>
                  <span className="text-[10px] text-muted-foreground">PNG, JPG or WEBP (Max 5MB)</span>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </div>
              </div>
            )}

            {/* STICKERS & MOTIFS */}
            {activeModal === "sticker" && (
              <div className="grid grid-cols-4 gap-3 max-h-72 overflow-y-auto pr-1">
                {STICKERS_COLLECTION.map((stk) => (
                  <button
                    key={stk.id}
                    type="button"
                    onClick={() => {
                      onAddSticker(stk.id);
                      setActiveModal(null);
                    }}
                    className="flex flex-col items-center gap-2 p-3 rounded-2xl bg-secondary/70 hover:bg-secondary border border-border hover:border-amber-500 transition-all group"
                  >
                    <div
                      className="w-10 h-10 text-amber-500 group-hover:scale-110 transition-transform flex items-center justify-center"
                      dangerouslySetInnerHTML={{ __html: stk.svg }}
                    />
                    <span className="text-[10px] text-muted-foreground line-clamp-1">{stk.name}</span>
                  </button>
                ))}
              </div>
            )}

            {/* QR CODE GENERATOR */}
            {activeModal === "qr" && (
              <div className="space-y-4">
                <div>
                  <label className="text-[11px] font-semibold uppercase text-muted-foreground block mb-1">
                    Google Maps Link or Venue URL
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-amber-500 absolute left-3 top-3" />
                    <input
                      type="url"
                      value={qrLink}
                      onChange={(e) => setQrLink(e.target.value)}
                      placeholder="https://maps.app.goo.gl/..."
                      className="w-full pl-9 pr-3 py-2 bg-secondary border border-border rounded-xl text-xs text-foreground shadow-inner"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-semibold uppercase text-muted-foreground block mb-1">
                    QR Bottom Label
                  </label>
                  <input
                    type="text"
                    value={qrLabel}
                    onChange={(e) => setQrLabel(e.target.value)}
                    placeholder="Scan For Venue Map"
                    className="w-full bg-secondary border border-border rounded-xl px-3 py-2 text-xs text-foreground shadow-inner"
                  />
                </div>

                <button
                  type="button"
                  onClick={handleCreateQR}
                  className="w-full py-3 mt-2 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:to-orange-600 text-white font-medium text-xs rounded-xl shadow-lg shadow-orange-500/20 active:scale-95 transition-all"
                >
                  Insert QR Code on Card
                </button>
              </div>
            )}

            {/* LAYERS */}
            {activeModal === "layers" && (
              <div className="flex flex-col gap-2 max-h-64 overflow-y-auto pr-1">
                {layers.length === 0 ? (
                  <p className="text-xs text-muted-foreground text-center py-6">No layers yet.</p>
                ) : (
                  layers
                    .slice()
                    .reverse()
                    .map((layer) => {
                      const isSelected = selectedLayerId === layer.id;
                      const label =
                        layer.type === "text"
                          ? `Text: ${(layer as TextLayer).text.slice(0, 24)}...`
                          : layer.type === "sticker"
                          ? "Cultural Motif"
                          : layer.type === "qr"
                          ? "Venue QR Map"
                          : "Photo";

                      return (
                        <div
                          key={layer.id}
                          onClick={() => {
                            onSelectLayer(layer.id);
                            setActiveModal(null);
                          }}
                          className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all ${
                            isSelected
                              ? "bg-amber-500/15 border-amber-500 text-amber-500 font-medium"
                              : "bg-secondary/60 border-border text-foreground hover:bg-secondary"
                          }`}
                        >
                          <span className="text-xs truncate max-w-[180px]">{label}</span>
                          <div className="flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
                            {layer.type === "text" && (
                              <button
                                type="button"
                                onClick={() => {
                                  onSelectLayer(layer.id);
                                  setActiveModal(null);
                                  onOpenEditText?.();
                                }}
                                className="p-1.5 text-amber-500 hover:bg-card rounded-lg"
                                title="Edit Text"
                              >
                                <Pencil className="w-3.5 h-3.5" />
                              </button>
                            )}
                            <button
                              type="button"
                              onClick={() => onToggleLock(layer.id)}
                              className="p-1.5 text-muted-foreground hover:text-foreground rounded-lg hover:bg-card"
                            >
                              {layer.isLocked ? <Lock className="w-3.5 h-3.5 text-amber-500" /> : <Unlock className="w-3.5 h-3.5" />}
                            </button>
                            <button
                              type="button"
                              onClick={() => onDeleteLayer(layer.id)}
                              className="p-1.5 text-muted-foreground hover:text-destructive rounded-lg hover:bg-card"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      );
                    })
                )}
              </div>
            )}

            {/* TEMPLATES */}
            {activeModal === "templates" && (
              <div className="grid grid-cols-2 gap-3 max-h-72 overflow-y-auto">
                {templates.map((tpl) => (
                  <button
                    key={tpl.id}
                    type="button"
                    onClick={() => {
                      onSelectTemplate(tpl);
                      setActiveModal(null);
                    }}
                    className="group border border-border hover:border-amber-500 rounded-2xl overflow-hidden bg-card text-left transition-all shadow-sm"
                  >
                    <div className="w-full h-28 relative overflow-hidden bg-secondary">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={tpl.backgroundImage}
                        alt={tpl.title}
                        className="w-full h-full object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <div className="p-2.5">
                      <span className="text-xs font-semibold text-foreground line-clamp-1 group-hover:text-amber-500 transition-colors">
                        {tpl.title}
                      </span>
                      <span className="text-[10px] text-muted-foreground block">{tpl.categoryName}</span>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
