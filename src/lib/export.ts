import { CanvasLayer, TextLayer, ImageLayer, StickerLayer, QRLayer, CardTemplate, ExportOptions } from "@/types/editor";
import { ensureFontsLoaded } from "./fonts";
import jsPDF from "jspdf";

// Load an image safely with crossOrigin
export function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => resolve(img);
    img.onerror = (err) => reject(new Error(`Failed to load image: ${src}`));
    img.src = src;
  });
}

/**
 * High-DPI Canvas Rendering Engine
 * Renders the entire card at native or scaled resolution (e.g. 3x = 2400x3600 for 300 DPI print quality)
 */
export async function renderCardToCanvas(
  template: CardTemplate,
  layers: CanvasLayer[],
  options: {
    scale?: number;
    includeWatermark?: boolean;
    watermarkText?: string;
  } = {}
): Promise<HTMLCanvasElement> {
  const scale = options.scale || 2.5; // Default 2.5x crisp print quality
  const targetWidth = Math.round(template.width * scale);
  const targetHeight = Math.round(template.height * scale);

  const canvas = document.createElement("canvas");
  canvas.width = targetWidth;
  canvas.height = targetHeight;
  const ctx = canvas.getContext("2d", { willReadFrequently: true });

  if (!ctx) {
    throw new Error("Unable to obtain 2D canvas context");
  }

  // Pre-load all required fonts
  const usedFonts = layers
    .filter((l): l is TextLayer => l.type === "text")
    .map((l) => l.fontFamily);
  await ensureFontsLoaded(usedFonts);

  // High quality image smoothing
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = "high";

  // 1. Draw Background
  if (template.backgroundImage) {
    try {
      const bgImg = await loadImage(template.backgroundImage);
      ctx.drawImage(bgImg, 0, 0, targetWidth, targetHeight);
    } catch {
      // Fallback elegant gradient background if image load fails
      const grad = ctx.createLinearGradient(0, 0, 0, targetHeight);
      grad.addColorStop(0, "#FFF9F0");
      grad.addColorStop(1, "#F7EBD9");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, targetWidth, targetHeight);
    }
  } else {
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 0, targetWidth, targetHeight);
  }

  // Sort layers by zIndex ascending
  const sortedLayers = [...layers].sort((a, b) => a.zIndex - b.zIndex);

  // 2. Render each layer
  for (const layer of sortedLayers) {
    ctx.save();
    ctx.globalAlpha = layer.opacity ?? 1;

    const layerX = layer.x * scale;
    const layerY = layer.y * scale;
    const layerW = layer.width * scale;
    const layerH = layer.height * scale;

    // Apply rotation around center
    if (layer.rotation) {
      const centerX = layerX + layerW / 2;
      const centerY = layerY + layerH / 2;
      ctx.translate(centerX, centerY);
      ctx.rotate((layer.rotation * Math.PI) / 180);
      ctx.translate(-centerX, -centerY);
    }

    if (layer.type === "text") {
      drawTextLayer(ctx, layer, layerX, layerY, layerW, layerH, scale);
    } else if (layer.type === "image") {
      await drawImageLayer(ctx, layer, layerX, layerY, layerW, layerH);
    } else if (layer.type === "sticker") {
      await drawStickerLayer(ctx, layer, layerX, layerY, layerW, layerH);
    } else if (layer.type === "qr") {
      await drawQRLayer(ctx, layer, layerX, layerY, layerW, layerH, scale);
    }

    ctx.restore();
  }

  // 3. Optional Watermark
  if (options.includeWatermark) {
    const watermarkText = options.watermarkText || "Created with InvitationCardMaker.in";
    ctx.save();
    ctx.globalAlpha = 0.55;
    ctx.font = `600 ${Math.round(14 * scale)}px sans-serif`;
    ctx.fillStyle = "#888888";
    ctx.textAlign = "right";
    ctx.fillText(watermarkText, targetWidth - 20 * scale, targetHeight - 20 * scale);
    ctx.restore();
  }

  return canvas;
}

function drawTextLayer(
  ctx: CanvasRenderingContext2D,
  layer: TextLayer,
  x: number,
  y: number,
  width: number,
  height: number,
  scale: number
) {
  const scaledFontSize = Math.round(layer.fontSize * scale);
  const fontStyle = layer.fontStyle === "italic" ? "italic" : "normal";
  const fontWeight = layer.fontWeight || "normal";
  ctx.font = `${fontStyle} ${fontWeight} ${scaledFontSize}px ${layer.fontFamily}`;
  ctx.fillStyle = layer.color;
  ctx.textAlign = layer.textAlign;
  ctx.textBaseline = "middle";

  if (layer.shadowColor && layer.shadowBlur) {
    ctx.shadowColor = layer.shadowColor;
    ctx.shadowBlur = layer.shadowBlur * scale;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 2 * scale;
  }

  let displayText = layer.text;
  if (layer.textTransform === "uppercase") displayText = displayText.toUpperCase();
  else if (layer.textTransform === "lowercase") displayText = displayText.toLowerCase();
  else if (layer.textTransform === "capitalize") {
    displayText = displayText.replace(/\b\w/g, (c) => c.toUpperCase());
  }

  // Split lines
  const lines = displayText.split("\n");
  const lineHeightPx = scaledFontSize * (layer.lineHeight || 1.3);
  const totalTextHeight = lines.length * lineHeightPx;
  const startY = y + (height - totalTextHeight) / 2 + lineHeightPx / 2;

  lines.forEach((line, index) => {
    let drawX = x;
    if (layer.textAlign === "center") drawX = x + width / 2;
    else if (layer.textAlign === "right") drawX = x + width;

    // Optional letter spacing
    if (layer.letterSpacing && layer.letterSpacing > 0 && "letterSpacing" in ctx) {
      (ctx as unknown as { letterSpacing: string }).letterSpacing = `${layer.letterSpacing * scale}px`;
    }

    ctx.fillText(line, drawX, startY + index * lineHeightPx);
  });
}

async function drawImageLayer(
  ctx: CanvasRenderingContext2D,
  layer: ImageLayer,
  x: number,
  y: number,
  width: number,
  height: number
) {
  try {
    const img = await loadImage(layer.src);

    ctx.save();
    // Clipping mask based on maskShape
    if (layer.maskShape === "circle") {
      ctx.beginPath();
      const radius = Math.min(width, height) / 2;
      ctx.arc(x + width / 2, y + height / 2, radius, 0, Math.PI * 2);
      ctx.clip();
    } else if (layer.maskShape === "rounded") {
      ctx.beginPath();
      const r = 16;
      ctx.roundRect(x, y, width, height, r);
      ctx.clip();
    } else if (layer.maskShape === "arch") {
      ctx.beginPath();
      const r = width / 2;
      ctx.moveTo(x, y + height);
      ctx.lineTo(x, y + r);
      ctx.arc(x + r, y + r, r, Math.PI, 0, false);
      ctx.lineTo(x + width, y + height);
      ctx.closePath();
      ctx.clip();
    }

    ctx.drawImage(img, x, y, width, height);

    // Optional border
    if (layer.borderWidth && layer.borderWidth > 0 && layer.borderColor) {
      ctx.strokeStyle = layer.borderColor;
      ctx.lineWidth = layer.borderWidth;
      ctx.stroke();
    }
    ctx.restore();
  } catch (err) {
    console.error("Failed to render image layer", err);
  }
}

async function drawStickerLayer(
  ctx: CanvasRenderingContext2D,
  layer: StickerLayer,
  x: number,
  y: number,
  width: number,
  height: number
) {
  try {
    // Convert SVG string to data URI with dynamic color tint
    let svg = layer.svgContent;
    if (layer.color) {
      svg = svg.replace(/currentColor/g, layer.color).replace(/fill="none"/g, 'fill="none"');
      // If svg does not have fill, inject it
      if (!svg.includes('fill="') && !svg.includes("fill='")) {
        svg = svg.replace("<svg", `<svg fill="${layer.color}"`);
      }
    }
    const blob = new Blob([svg], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const img = await loadImage(url);
    ctx.drawImage(img, x, y, width, height);
    URL.revokeObjectURL(url);
  } catch (err) {
    console.error("Failed to render sticker layer", err);
  }
}

async function drawQRLayer(
  ctx: CanvasRenderingContext2D,
  layer: QRLayer,
  x: number,
  y: number,
  width: number,
  height: number,
  scale: number
) {
  try {
    if (layer.dataUrl) {
      const img = await loadImage(layer.dataUrl);
      // Clean background for QR
      ctx.fillStyle = layer.backgroundColor || "#FFFFFF";
      ctx.fillRect(x, y, width, height);
      ctx.drawImage(img, x, y, width, height);

      // Draw label below QR if available
      if (layer.label) {
        ctx.fillStyle = layer.color || "#000000";
        ctx.font = `600 ${Math.round(11 * scale)}px sans-serif`;
        ctx.textAlign = "center";
        ctx.fillText(layer.label, x + width / 2, y + height + 14 * scale);
      }
    }
  } catch (err) {
    console.error("Failed to render QR layer", err);
  }
}

/**
 * Export execution function
 */
export async function exportCard(
  template: CardTemplate,
  layers: CanvasLayer[],
  options: ExportOptions
): Promise<{ blob: Blob; filename: string }> {
  const scale = options.scaleMultiplier || 2.5;
  const canvas = await renderCardToCanvas(template, layers, {
    scale,
    includeWatermark: options.includeWatermark ?? false,
  });

  const baseFilename = `${template.slug}-invitation`;

  if (options.format === "pdf") {
    // Generate high-resolution PDF
    const pdf = new jsPDF({
      orientation: template.height > template.width ? "portrait" : "landscape",
      unit: "pt",
      format: [template.width, template.height],
    });

    const imgData = canvas.toDataURL("image/jpeg", 0.95);
    pdf.addImage(imgData, "JPEG", 0, 0, template.width, template.height);
    const pdfBlob = pdf.output("blob");

    return {
      blob: pdfBlob,
      filename: `${baseFilename}.pdf`,
    };
  }

  if (options.format === "jpg") {
    return new Promise((resolve) => {
      canvas.toBlob(
        (blob) => {
          resolve({
            blob: blob || new Blob(),
            filename: `${baseFilename}.jpg`,
          });
        },
        "image/jpeg",
        options.quality || 0.92
      );
    });
  }

  // Default PNG (lossless high-res)
  return new Promise((resolve) => {
    canvas.toBlob(
      (blob) => {
        resolve({
          blob: blob || new Blob(),
          filename: `${baseFilename}.png`,
        });
      },
      "image/png"
    );
  });
}
