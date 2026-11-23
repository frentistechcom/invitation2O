"use client";

import React, { useState, useEffect, useCallback } from "react";
import { CardTemplate, CanvasLayer, TextLayer, StickerLayer, QRLayer, ImageLayer } from "@/types/editor";
import { SAMPLE_TEMPLATES } from "@/data/templates";
import { STICKERS_COLLECTION } from "@/lib/stickers";
import { CardCanvas } from "./CardCanvas";
import { EditorToolbar } from "./EditorToolbar";
import { MobileEditorBar } from "./MobileEditorBar";
import { DownloadModal } from "./DownloadModal";
import { TextEditModal } from "./TextEditModal";
import QRCode from "qrcode";

interface TemplateEditorProps {
  initialTemplateId?: string;
}

export const TemplateEditor: React.FC<TemplateEditorProps> = ({ initialTemplateId }) => {
  const [template, setTemplate] = useState<CardTemplate>(() => {
    const found = SAMPLE_TEMPLATES.find((t) => t.id === initialTemplateId || t.slug === initialTemplateId);
    return found || SAMPLE_TEMPLATES[0];
  });

  const [layers, setLayers] = useState<CanvasLayer[]>(() => template.layers);
  const [selectedLayerId, setSelectedLayerId] = useState<string | null>(null);
  const [zoom, setZoom] = useState<number>(1.0);
  const [isDownloadOpen, setIsDownloadOpen] = useState<boolean>(false);
  const [isTextModalOpen, setIsTextModalOpen] = useState<boolean>(false);

  // Synchronize when initialTemplateId changes in URL
  useEffect(() => {
    const found = SAMPLE_TEMPLATES.find((t) => t.id === initialTemplateId || t.slug === initialTemplateId);
    if (found && found.id !== template.id) {
      setTemplate(found);
      setLayers(found.layers);
      setHistory([found.layers]);
      setHistoryIndex(0);
      setSelectedLayerId(null);
    }
  }, [initialTemplateId, template.id]);

  // Undo / Redo History
  const [history, setHistory] = useState<CanvasLayer[][]>([template.layers]);
  const [historyIndex, setHistoryIndex] = useState<number>(0);

  // Helper to commit new state with undo history
  const commitLayers = useCallback(
    (newLayers: CanvasLayer[]) => {
      setLayers(newLayers);
      const newHistory = history.slice(0, historyIndex + 1);
      newHistory.push(newLayers);
      if (newHistory.length > 30) newHistory.shift();
      setHistory(newHistory);
      setHistoryIndex(newHistory.length - 1);
    },
    [history, historyIndex]
  );

  // Undo / Redo
  const handleUndo = useCallback(() => {
    if (historyIndex > 0) {
      const prevIndex = historyIndex - 1;
      setHistoryIndex(prevIndex);
      setLayers(history[prevIndex]);
    }
  }, [history, historyIndex]);

  const handleRedo = useCallback(() => {
    if (historyIndex < history.length - 1) {
      const nextIndex = historyIndex + 1;
      setHistoryIndex(nextIndex);
      setLayers(history[nextIndex]);
    }
  }, [history, historyIndex]);

  // Pre-generate QR data URLs for any QR layers in template
  useEffect(() => {
    async function initQRs() {
      let changed = false;
      const updated = await Promise.all(
        layers.map(async (l) => {
          if (l.type === "qr" && (!l.dataUrl || l.dataUrl === "")) {
            try {
              const url = await QRCode.toDataURL(l.link || "https://maps.google.com", {
                margin: 1,
                width: 256,
                color: { dark: l.color || "#000000", light: l.backgroundColor || "#FFFFFF" },
              });
              changed = true;
              return { ...l, dataUrl: url };
            } catch (e) {
              console.error("QR generation error", e);
              return l;
            }
          }
          return l;
        })
      );
      if (changed) setLayers(updated);
    }
    initQRs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Update specific layer
  const handleUpdateLayer = (updated: CanvasLayer) => {
    const newLayers = layers.map((l) => (l.id === updated.id ? updated : l));
    commitLayers(newLayers);
  };

  // Delete layer
  const handleDeleteLayer = (id: string) => {
    const newLayers = layers.filter((l) => l.id !== id);
    if (selectedLayerId === id) setSelectedLayerId(null);
    commitLayers(newLayers);
  };

  // Duplicate layer
  const handleDuplicateLayer = (id: string) => {
    const target = layers.find((l) => l.id === id);
    if (!target) return;
    const duplicated: CanvasLayer = {
      ...target,
      id: `layer-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
      x: target.x + 20,
      y: target.y + 20,
      zIndex: Math.max(...layers.map((l) => l.zIndex), 0) + 1,
    };
    commitLayers([...layers, duplicated]);
    setSelectedLayerId(duplicated.id);
  };

  // Center layer horizontally
  const handleCenterLayer = (id: string) => {
    const target = layers.find((l) => l.id === id);
    if (!target) return;
    const newX = Math.round((template.width - target.width) / 2);
    handleUpdateLayer({ ...target, x: newX });
  };

  // Bring layer forward
  const handleBringForward = (id: string) => {
    const target = layers.find((l) => l.id === id);
    if (!target) return;
    handleUpdateLayer({ ...target, zIndex: target.zIndex + 1 });
  };

  // Send layer backward
  const handleSendBackward = (id: string) => {
    const target = layers.find((l) => l.id === id);
    if (!target) return;
    handleUpdateLayer({ ...target, zIndex: Math.max(1, target.zIndex - 1) });
  };

  // Open edit text modal
  const handleOpenEditText = (layerId?: string) => {
    if (layerId) {
      setSelectedLayerId(layerId);
    } else {
      const current = layers.find((l) => l.id === selectedLayerId);
      if (!current || current.type !== "text") {
        const firstText = layers.find((l) => l.type === "text");
        if (firstText) {
          setSelectedLayerId(firstText.id);
        }
      }
    }
    setIsTextModalOpen(true);
  };

  // Add text layer
  const handleAddText = (variant: "heading" | "subheading" | "body" | "shloka") => {
    const maxZ = Math.max(...layers.map((l) => l.zIndex), 0);
    let newTextLayer: TextLayer;

    if (variant === "heading") {
      newTextLayer = {
        id: `text-${Date.now()}`,
        type: "text",
        text: "Bride   &   Groom",
        fontFamily: "'Playfair Display', serif",
        fontSize: 34,
        fontWeight: "bold",
        fontStyle: "normal",
        textAlign: "center",
        color: "#8B1E2F",
        letterSpacing: 1.5,
        lineHeight: 1.2,
        textTransform: "none",
        x: Math.round((template.width - 500) / 2),
        y: 400,
        width: 500,
        height: 50,
        rotation: 0,
        opacity: 1,
        isLocked: false,
        zIndex: maxZ + 1,
      };
    } else if (variant === "subheading") {
      newTextLayer = {
        id: `text-${Date.now()}`,
        type: "text",
        text: "Wedding Ceremony",
        fontFamily: "'Great Vibes', cursive",
        fontSize: 48,
        fontWeight: "normal",
        fontStyle: "normal",
        textAlign: "center",
        color: "#C28524",
        letterSpacing: 2,
        lineHeight: 1.2,
        textTransform: "none",
        x: Math.round((template.width - 500) / 2),
        y: 340,
        width: 500,
        height: 60,
        rotation: 0,
        opacity: 1,
        isLocked: false,
        zIndex: maxZ + 1,
      };
    } else if (variant === "shloka") {
      newTextLayer = {
        id: `text-${Date.now()}`,
        type: "text",
        text: "|| श्री गणेशाय नमः ||",
        fontFamily: "'Rozha One', serif",
        fontSize: 24,
        fontWeight: "normal",
        fontStyle: "normal",
        textAlign: "center",
        color: "#8B1E2F",
        letterSpacing: 2,
        lineHeight: 1.2,
        textTransform: "none",
        x: Math.round((template.width - 400) / 2),
        y: 200,
        width: 400,
        height: 40,
        rotation: 0,
        opacity: 1,
        isLocked: false,
        zIndex: maxZ + 1,
      };
    } else {
      newTextLayer = {
        id: `text-${Date.now()}`,
        type: "text",
        text: "Grand Palace Ballroom, Bangalore",
        fontFamily: "'Montserrat', sans-serif",
        fontSize: 16,
        fontWeight: "500",
        fontStyle: "normal",
        textAlign: "center",
        color: "#4A3928",
        letterSpacing: 1,
        lineHeight: 1.4,
        textTransform: "none",
        x: Math.round((template.width - 400) / 2),
        y: 650,
        width: 400,
        height: 40,
        rotation: 0,
        opacity: 1,
        isLocked: false,
        zIndex: maxZ + 1,
      };
    }

    commitLayers([...layers, newTextLayer]);
    setSelectedLayerId(newTextLayer.id);
  };

  // Add Sticker layer
  const handleAddSticker = (stickerId: string) => {
    const stickerDef = STICKERS_COLLECTION.find((s) => s.id === stickerId) || STICKERS_COLLECTION[0];
    const maxZ = Math.max(...layers.map((l) => l.zIndex), 0);
    const newSticker: StickerLayer = {
      id: `sticker-${Date.now()}`,
      type: "sticker",
      stickerId,
      svgContent: stickerDef.svg,
      color: "#C28524",
      x: Math.round((template.width - 70) / 2),
      y: 220,
      width: 70,
      height: 70,
      rotation: 0,
      opacity: 1,
      isLocked: false,
      zIndex: maxZ + 1,
    };
    commitLayers([...layers, newSticker]);
    setSelectedLayerId(newSticker.id);
  };

  // Add QR layer
  const handleAddQR = async (link: string, label: string) => {
    try {
      const dataUrl = await QRCode.toDataURL(link || "https://maps.google.com", {
        margin: 1,
        width: 256,
        color: { dark: "#8B1E2F", light: "#FFFFFF" },
      });
      const maxZ = Math.max(...layers.map((l) => l.zIndex), 0);
      const newQR: QRLayer = {
        id: `qr-${Date.now()}`,
        type: "qr",
        link,
        label,
        dataUrl,
        color: "#8B1E2F",
        backgroundColor: "#FFFFFF",
        x: Math.round((template.width - 110) / 2),
        y: 750,
        width: 110,
        height: 110,
        rotation: 0,
        opacity: 1,
        isLocked: false,
        zIndex: maxZ + 1,
      };
      commitLayers([...layers, newQR]);
      setSelectedLayerId(newQR.id);
    } catch (e) {
      console.error("Failed to generate QR Code", e);
    }
  };

  // Add Image layer
  const handleAddImage = (base64Src: string, maskShape: "rect" | "circle" | "rounded" | "arch") => {
    const maxZ = Math.max(...layers.map((l) => l.zIndex), 0);
    const newImg: ImageLayer = {
      id: `img-${Date.now()}`,
      type: "image",
      src: base64Src,
      maskShape,
      borderColor: "#D4AF37",
      borderWidth: 2,
      x: Math.round((template.width - 180) / 2),
      y: 350,
      width: 180,
      height: 180,
      rotation: 0,
      opacity: 1,
      isLocked: false,
      zIndex: maxZ + 1,
    };
    commitLayers([...layers, newImg]);
    setSelectedLayerId(newImg.id);
  };

  // Switch template
  const handleSelectTemplate = (newTemplate: CardTemplate) => {
    setTemplate(newTemplate);
    commitLayers(newTemplate.layers);
    setSelectedLayerId(null);
  };

  const selectedLayer = layers.find((l) => l.id === selectedLayerId) || null;

  return (
    <div className="fixed inset-0 flex flex-col w-full h-[100dvh] max-h-[100dvh] overflow-hidden bg-background text-foreground font-sans select-none transition-colors duration-200">
      {/* Top Toolbar */}
      <div className="shrink-0 z-30 w-full">
        <EditorToolbar
          selectedLayer={selectedLayer}
          onUpdateLayer={handleUpdateLayer}
          onDeleteLayer={handleDeleteLayer}
          onDuplicateLayer={handleDuplicateLayer}
          onCenterLayer={handleCenterLayer}
          onBringForward={handleBringForward}
          onSendBackward={handleSendBackward}
          canUndo={historyIndex > 0}
          canRedo={historyIndex < history.length - 1}
          onUndo={handleUndo}
          onRedo={handleRedo}
          zoom={zoom}
          onZoomChange={setZoom}
          onOpenDownload={() => setIsDownloadOpen(true)}
          onOpenEditText={() => handleOpenEditText()}
          templateTitle={template.title}
          templateCategory={template.category}
        />
      </div>

      {/* Main Interactive Canvas Area */}
      <main
        className="flex-1 relative overflow-hidden flex items-center justify-center min-w-0 min-h-0 w-full h-full"
        onPointerDown={() => setSelectedLayerId(null)}
      >
        <CardCanvas
          template={template}
          layers={layers}
          selectedLayerId={selectedLayerId}
          onSelectLayer={setSelectedLayerId}
          onUpdateLayer={handleUpdateLayer}
          onDeleteLayer={handleDeleteLayer}
          onDuplicateLayer={handleDuplicateLayer}
          onEditText={handleOpenEditText}
          zoom={zoom}
        />
      </main>

      {/* Bottom Tool Bar */}
      <div className="shrink-0 z-30 w-full">
        <MobileEditorBar
          onAddText={handleAddText}
          onAddSticker={handleAddSticker}
          onAddQR={handleAddQR}
          onAddImage={handleAddImage}
          layers={layers}
          selectedLayerId={selectedLayerId}
          onSelectLayer={setSelectedLayerId}
          onDeleteLayer={handleDeleteLayer}
          onToggleLock={(id) => {
            const l = layers.find((x) => x.id === id);
            if (l) handleUpdateLayer({ ...l, isLocked: !l.isLocked });
          }}
          templates={SAMPLE_TEMPLATES}
          onSelectTemplate={handleSelectTemplate}
          onOpenEditText={() => handleOpenEditText()}
        />
      </div>

      {/* Download / Export Modal */}
      <DownloadModal
        isOpen={isDownloadOpen}
        onClose={() => setIsDownloadOpen(false)}
        template={template}
        layers={layers}
      />

      {/* Direct Text Edit Modal */}
      <TextEditModal
        isOpen={isTextModalOpen}
        onClose={() => setIsTextModalOpen(false)}
        textLayer={selectedLayer?.type === "text" ? (selectedLayer as TextLayer) : null}
        onUpdateLayer={handleUpdateLayer}
      />
    </div>
  );
};
