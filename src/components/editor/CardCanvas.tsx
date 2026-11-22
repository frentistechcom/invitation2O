"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { CanvasLayer, TextLayer, CardTemplate } from "@/types/editor";
import { Move, RotateCw, Trash2, Copy, Sparkles, Pencil } from "lucide-react";

interface CardCanvasProps {
  template: CardTemplate;
  layers: CanvasLayer[];
  selectedLayerId: string | null;
  onSelectLayer: (id: string | null) => void;
  onUpdateLayer: (layer: CanvasLayer) => void;
  onDeleteLayer: (id: string) => void;
  onDuplicateLayer: (id: string) => void;
  onEditText?: (id: string) => void;
  zoom: number; // 0.6 to 2.0 (1.0 = auto fit)
}

export const CardCanvas: React.FC<CardCanvasProps> = ({
  template,
  layers,
  selectedLayerId,
  onSelectLayer,
  onUpdateLayer,
  onDeleteLayer,
  onDuplicateLayer,
  onEditText,
  zoom,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState<string | null>(null);
  const [isRotating, setIsRotating] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [editingTextId, setEditingTextId] = useState<string | null>(null);
  const [snapX, setSnapX] = useState<number | null>(null);

  // ResizeObserver for reliable viewport dimension tracking
  useEffect(() => {
    if (!containerRef.current) return;
    const el = containerRef.current;
    const updateSize = () => {
      if (el.clientWidth > 0 && el.clientHeight > 0) {
        setContainerSize({ width: el.clientWidth, height: el.clientHeight });
      }
    };
    updateSize();

    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        if (width > 0 && height > 0) {
          setContainerSize({ width, height });
        }
      }
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Compute scale multiplier so card fills available viewport without squishing
  const isMobile = containerSize.width < 640;
  const paddingH = isMobile ? 24 : 48;
  const paddingV = isMobile ? 24 : 48;
  const availableWidth = Math.max(containerSize.width - paddingH, 240);
  const availableHeight = Math.max(containerSize.height - paddingV, 340);

  // Calculate clean fit scale
  const rawFitScale = Math.min(availableWidth / template.width, availableHeight / template.height);
  const fitScale = rawFitScale > 0 ? rawFitScale : 0.45;
  const effectiveScale = fitScale * zoom;

  // Exact display dimensions to lock aspect ratio and prevent flexbox squishing
  const displayWidth = Math.round(template.width * effectiveScale);
  const displayHeight = Math.round(template.height * effectiveScale);

  const selectedLayer = layers.find((l) => l.id === selectedLayerId);

  // Pointer drag start
  const handlePointerDown = (e: React.PointerEvent, layerId: string) => {
    e.stopPropagation();
    onSelectLayer(layerId);
    const layer = layers.find((l) => l.id === layerId);
    if (!layer || layer.isLocked || editingTextId === layerId) return;

    setIsDragging(true);
    setDragStart({ x: e.clientX, y: e.clientY });
  };

  const handlePointerMove = useCallback(
    (e: PointerEvent) => {
      if (!selectedLayer || selectedLayer.isLocked) return;

      const deltaScreenX = e.clientX - dragStart.x;
      const deltaScreenY = e.clientY - dragStart.y;
      const deltaCanonicalX = deltaScreenX / effectiveScale;
      const deltaCanonicalY = deltaScreenY / effectiveScale;

      if (isDragging) {
        let newX = Math.round(selectedLayer.x + deltaCanonicalX);
        const newY = Math.round(selectedLayer.y + deltaCanonicalY);

        // Center snapping guide
        const centerX = newX + selectedLayer.width / 2;
        if (Math.abs(centerX - template.width / 2) < 8) {
          newX = template.width / 2 - selectedLayer.width / 2;
          setSnapX(template.width / 2);
        } else {
          setSnapX(null);
        }

        onUpdateLayer({
          ...selectedLayer,
          x: newX,
          y: newY,
        });
        setDragStart({ x: e.clientX, y: e.clientY });
      } else if (isResizing) {
        let newW = selectedLayer.width;
        let newH = selectedLayer.height;
        let newX = selectedLayer.x;
        let newY = selectedLayer.y;

        if (isResizing.includes("r")) newW += deltaCanonicalX;
        if (isResizing.includes("b")) newH += deltaCanonicalY;
        if (isResizing.includes("l")) {
          newW -= deltaCanonicalX;
          newX += deltaCanonicalX;
        }
        if (isResizing.includes("t")) {
          newH -= deltaCanonicalY;
          newY += deltaCanonicalY;
        }

        if (newW > 40 && newH > 20) {
          onUpdateLayer({
            ...selectedLayer,
            x: Math.round(newX),
            y: Math.round(newY),
            width: Math.round(newW),
            height: Math.round(newH),
          });
          setDragStart({ x: e.clientX, y: e.clientY });
        }
      } else if (isRotating) {
        if (containerRef.current) {
          const rect = containerRef.current.getBoundingClientRect();
          const canvasLeft = rect.left + (containerSize.width - displayWidth) / 2;
          const canvasTop = rect.top + (containerSize.height - displayHeight) / 2;
          const layerCenterScreenX = canvasLeft + (selectedLayer.x + selectedLayer.width / 2) * effectiveScale;
          const layerCenterScreenY = canvasTop + (selectedLayer.y + selectedLayer.height / 2) * effectiveScale;
          const rad = Math.atan2(e.clientY - layerCenterScreenY, e.clientX - layerCenterScreenX);
          const deg = Math.round((rad * 180) / Math.PI) + 90;
          onUpdateLayer({
            ...selectedLayer,
            rotation: deg,
          });
        }
      }
    },
    [
      isDragging,
      isResizing,
      isRotating,
      selectedLayer,
      dragStart,
      effectiveScale,
      template.width,
      onUpdateLayer,
      containerSize,
      displayWidth,
      displayHeight,
    ]
  );

  const handlePointerUp = useCallback(() => {
    setIsDragging(false);
    setIsResizing(null);
    setIsRotating(false);
    setSnapX(null);
  }, []);

  useEffect(() => {
    if (isDragging || isResizing || isRotating) {
      window.addEventListener("pointermove", handlePointerMove);
      window.addEventListener("pointerup", handlePointerUp);
      return () => {
        window.removeEventListener("pointermove", handlePointerMove);
        window.removeEventListener("pointerup", handlePointerUp);
      };
    }
  }, [isDragging, isResizing, isRotating, handlePointerMove, handlePointerUp]);

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedLayer || editingTextId) return;

      if (e.key === "Delete" || e.key === "Backspace") {
        onDeleteLayer(selectedLayer.id);
      } else if (e.key === "Escape") {
        onSelectLayer(null);
      } else if (e.key.startsWith("Arrow")) {
        e.preventDefault();
        const step = e.shiftKey ? 10 : 1;
        let newX = selectedLayer.x;
        let newY = selectedLayer.y;
        if (e.key === "ArrowLeft") newX -= step;
        if (e.key === "ArrowRight") newX += step;
        if (e.key === "ArrowUp") newY -= step;
        if (e.key === "ArrowDown") newY += step;
        onUpdateLayer({ ...selectedLayer, x: newX, y: newY });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedLayer, editingTextId, onDeleteLayer, onSelectLayer, onUpdateLayer]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full flex items-center justify-center overflow-auto select-none touch-none p-3 md:p-6 bg-neutral-900/40 dark:bg-neutral-950/70"
      onPointerDown={(e) => {
        if (e.target === containerRef.current) {
          onSelectLayer(null);
          setEditingTextId(null);
        }
      }}
    >
      {/* Aspect-Ratio Locked Outer Bounding Box (Never squished by flexbox!) */}
      <div
        className="relative shrink-0 rounded-2xl shadow-2xl overflow-hidden border border-neutral-300 dark:border-neutral-800 bg-card transition-all duration-75"
        style={{
          width: `${displayWidth}px`,
          height: `${displayHeight}px`,
          boxShadow: "0 25px 60px -15px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(212, 175, 55, 0.15)",
        }}
      >
        {/* Scaled Canonical 800x1200 Canvas */}
        <div
          className="absolute top-0 left-0 origin-top-left"
          style={{
            width: `${template.width}px`,
            height: `${template.height}px`,
            transform: `scale(${effectiveScale})`,
          }}
        >
          {/* Background Image / SVG */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={template.backgroundImage}
            alt="Card Background"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          />

          {/* Center Snapping Guide Line */}
          {snapX !== null && (
            <div
              className="absolute top-0 bottom-0 w-[2px] bg-amber-500 z-50 pointer-events-none shadow-sm"
              style={{ left: `${snapX}px` }}
            />
          )}

          {/* Render Layers */}
          {layers
            .slice()
            .sort((a, b) => a.zIndex - b.zIndex)
            .map((layer) => {
              const isSelected = selectedLayerId === layer.id;
              const isEditing = editingTextId === layer.id;

              return (
                <div
                  key={layer.id}
                  onPointerDown={(e) => {
                    if (editingTextId === layer.id) {
                      e.stopPropagation();
                      return;
                    }
                    handlePointerDown(e, layer.id);
                  }}
                  onDoubleClick={(e) => {
                    e.stopPropagation();
                    if (layer.type === "text" && onEditText) {
                      onEditText(layer.id);
                    }
                  }}
                  className={`absolute cursor-pointer transition-shadow ${
                    isSelected ? "ring-2 ring-amber-500 ring-offset-2 ring-offset-black/50" : "hover:ring-1 hover:ring-amber-400/50"
                  }`}
                  style={{
                    left: `${layer.x}px`,
                    top: `${layer.y}px`,
                    width: `${layer.width}px`,
                    height: `${layer.height}px`,
                    transform: `rotate(${layer.rotation || 0}deg)`,
                    opacity: layer.opacity ?? 1,
                    zIndex: layer.zIndex,
                  }}
                >
                  {/* Text Layer Rendering */}
                  {layer.type === "text" && (
                    <>
                      {isEditing ? (
                        <textarea
                          autoFocus
                          value={layer.text}
                          onPointerDown={(e) => e.stopPropagation()}
                          onMouseDown={(e) => e.stopPropagation()}
                          onTouchStart={(e) => e.stopPropagation()}
                          onClick={(e) => e.stopPropagation()}
                          onChange={(e) => {
                            onUpdateLayer({ ...layer, text: e.target.value });
                          }}
                          onBlur={() => setEditingTextId(null)}
                          onKeyDown={(e) => {
                            e.stopPropagation();
                            if (e.key === "Escape") setEditingTextId(null);
                          }}
                          className="w-full h-full p-0 bg-transparent resize-none border-none outline-none focus:ring-0 leading-tight"
                          style={{
                            fontFamily: layer.fontFamily,
                            fontSize: `${layer.fontSize}px`,
                            fontWeight: layer.fontWeight,
                            fontStyle: layer.fontStyle,
                            textAlign: layer.textAlign,
                            color: layer.color,
                            letterSpacing: `${layer.letterSpacing || 0}px`,
                          }}
                        />
                      ) : (
                        <div
                          className="w-full h-full flex flex-col justify-center whitespace-pre-wrap select-none pointer-events-none"
                          style={{
                            fontFamily: layer.fontFamily,
                            fontSize: `${layer.fontSize}px`,
                            fontWeight: layer.fontWeight,
                            fontStyle: layer.fontStyle,
                            textAlign: layer.textAlign,
                            color: layer.color,
                            letterSpacing: `${layer.letterSpacing || 0}px`,
                            lineHeight: layer.lineHeight || 1.3,
                            textTransform: layer.textTransform || "none",
                            textShadow:
                              layer.shadowColor && layer.shadowBlur
                                ? `0 2px ${layer.shadowBlur}px ${layer.shadowColor}`
                                : "none",
                          }}
                        >
                          {layer.text}
                        </div>
                      )}
                    </>
                  )}

                  {/* Sticker Layer */}
                  {layer.type === "sticker" && (
                    <div
                      className="w-full h-full pointer-events-none flex items-center justify-center"
                      style={{ color: layer.color }}
                      dangerouslySetInnerHTML={{ __html: layer.svgContent }}
                    />
                  )}

                  {/* QR Code Layer */}
                  {layer.type === "qr" && (
                    <div
                      className="w-full h-full flex flex-col items-center justify-center p-1 rounded-lg bg-white shadow-md"
                      style={{ backgroundColor: layer.backgroundColor || "#FFFFFF" }}
                    >
                      {layer.dataUrl ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={layer.dataUrl} alt="QR Code" className="w-full h-full object-contain pointer-events-none" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-[10px] text-neutral-400">
                          QR Code
                        </div>
                      )}
                      {layer.label && (
                        <span className="text-[10px] font-bold tracking-wider uppercase text-neutral-800 mt-1">
                          {layer.label}
                        </span>
                      )}
                    </div>
                  )}

                  {/* Image Layer */}
                  {layer.type === "image" && (
                    <div
                      className={`w-full h-full overflow-hidden ${
                        layer.maskShape === "circle"
                          ? "rounded-full"
                          : layer.maskShape === "rounded"
                          ? "rounded-2xl"
                          : layer.maskShape === "arch"
                          ? "rounded-t-full"
                          : ""
                      }`}
                      style={{
                        border: layer.borderWidth ? `${layer.borderWidth}px solid ${layer.borderColor || "#D4AF37"}` : "none",
                      }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={layer.src} alt="Uploaded Portrait" className="w-full h-full object-cover pointer-events-none" />
                    </div>
                  )}

                  {/* Active Selection Bounds & Handles */}
                  {isSelected && !layer.isLocked && (
                    <>
                      {/* Move Handle Icon */}
                      <div className="absolute -top-3.5 -left-3.5 w-7 h-7 bg-amber-500 rounded-full flex items-center justify-center text-white shadow-lg cursor-grab active:cursor-grabbing hover:scale-110 transition-transform">
                        <Move className="w-3.5 h-3.5" />
                      </div>

                      {/* Quick Action Floating Bar with Prominent Edit Button */}
                      <div className="absolute -top-11 right-0 flex items-center gap-1.5 bg-neutral-900 border border-neutral-700 text-white rounded-xl shadow-xl px-2 py-1 z-50">
                        {layer.type === "text" && (
                          <>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                if (onEditText) onEditText(layer.id);
                              }}
                              title="Edit Text"
                              className="flex items-center gap-1 px-2 py-0.5 bg-amber-500/20 text-amber-400 hover:bg-amber-500/30 rounded-lg text-xs font-semibold transition-colors"
                            >
                              <Pencil className="w-3.5 h-3.5" />
                              <span>Edit</span>
                            </button>
                            <div className="w-[1px] h-3.5 bg-neutral-700" />
                          </>
                        )}
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            onDuplicateLayer(layer.id);
                          }}
                          title="Duplicate Layer"
                          className="p-1 hover:text-amber-400 transition-colors"
                        >
                          <Copy className="w-3.5 h-3.5" />
                        </button>
                        <div className="w-[1px] h-3 bg-neutral-700" />
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            onDeleteLayer(layer.id);
                          }}
                          title="Delete Layer"
                          className="p-1 hover:text-red-400 transition-colors"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Rotation Handle */}
                      <div
                        onPointerDown={(e) => {
                          e.stopPropagation();
                          setIsRotating(true);
                        }}
                        className="absolute -top-8 left-1/2 -translate-x-1/2 w-6 h-6 bg-white dark:bg-neutral-900 border-2 border-amber-500 rounded-full flex items-center justify-center cursor-alias shadow-lg hover:scale-110 transition-transform"
                        title="Drag to rotate"
                      >
                        <RotateCw className="w-3 h-3 text-amber-500" />
                      </div>
                      <div className="absolute -top-3 left-1/2 w-0.5 h-4 bg-amber-500 -translate-x-1/2 pointer-events-none" />

                      {/* 4 Corner Resize Handles */}
                      {["tl", "tr", "bl", "br"].map((corner) => {
                        const posClass =
                          corner === "tl"
                            ? "-top-2 -left-2 cursor-nwse-resize"
                            : corner === "tr"
                            ? "-top-2 -right-2 cursor-nesw-resize"
                            : corner === "bl"
                            ? "-bottom-2 -left-2 cursor-nesw-resize"
                            : "-bottom-2 -right-2 cursor-nwse-resize";

                        return (
                          <div
                            key={corner}
                            onPointerDown={(e) => {
                              e.stopPropagation();
                              setIsResizing(corner);
                              setDragStart({ x: e.clientX, y: e.clientY });
                            }}
                            className={`absolute w-4 h-4 bg-white dark:bg-neutral-900 border-2 border-amber-500 rounded-md shadow-md hover:scale-125 transition-transform ${posClass}`}
                          />
                        );
                      })}
                    </>
                  )}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
