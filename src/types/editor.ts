export type LayerType = "text" | "image" | "sticker" | "qr";

export interface BaseLayer {
  id: string;
  type: LayerType;
  x: number; // in canvas canonical coordinates (e.g. 0 to 800)
  y: number; // in canvas canonical coordinates (e.g. 0 to 1200)
  width: number;
  height: number;
  rotation: number; // in degrees
  opacity: number; // 0 to 1
  isLocked: boolean;
  zIndex: number;
}

export interface TextLayer extends BaseLayer {
  type: "text";
  text: string;
  fontFamily: string;
  fontSize: number;
  fontWeight: "normal" | "500" | "600" | "700" | "bold";
  fontStyle: "normal" | "italic";
  textAlign: "left" | "center" | "right";
  color: string;
  letterSpacing: number; // in pixels
  lineHeight: number; // multiplier e.g. 1.2
  textTransform: "none" | "uppercase" | "capitalize" | "lowercase";
  shadowColor?: string;
  shadowBlur?: number;
  shadowOffsetX?: number;
  shadowOffsetY?: number;
  isCurved?: boolean;
  curveRadius?: number;
  isGoldFoil?: boolean;
  foilStyle?: "gold" | "rose-gold" | "silver";
  isUnderline?: boolean;
  strokeColor?: string;
  strokeWidth?: number;
}

export interface ImageLayer extends BaseLayer {
  type: "image";
  src: string;
  maskShape: "rect" | "circle" | "heart" | "rounded" | "arch";
  borderColor?: string;
  borderWidth?: number;
}

export interface StickerLayer extends BaseLayer {
  type: "sticker";
  stickerId: string;
  svgContent: string;
  color: string; // Dynamic fill/stroke tint
}

export interface QRLayer extends BaseLayer {
  type: "qr";
  link: string;
  dataUrl: string;
  color: string;
  backgroundColor: string;
  label?: string;
}

export type CanvasLayer = TextLayer | ImageLayer | StickerLayer | QRLayer;

export interface CardTemplate {
  id: string;
  slug: string;
  title: string;
  category: "wedding" | "birthday" | "baby-shower" | "housewarming" | "naming-ceremony" | "anniversary" | "pooja";
  categoryName: string;
  subCategory?: string;
  description: string;
  language?: "en" | "hi" | "mr" | "gu" | "te" | "ta" | "kn" | "bn" | string;
  width: number; // e.g. 800
  height: number; // e.g. 1200
  backgroundImage: string;
  thumbnail: string;
  layers: CanvasLayer[];
  tags: string[];
  featured?: boolean;
}

export type ExportFormat = "png" | "jpg" | "pdf";

export interface ExportOptions {
  format: ExportFormat;
  quality?: number; // 0.1 to 1.0 (for jpg)
  scaleMultiplier?: number; // 1x, 2x, 3x for 300DPI
  includeWatermark?: boolean;
}
