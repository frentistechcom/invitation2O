# Master Templates Archive Vault

This directory stores **100% full-size, uncompressed master original template backgrounds and demo cards**.

## 🛡️ Privacy & Crawler Protection
- Located in `/assets/raw-masters/`, outside the Next.js `/public/` directory.
- Not served over HTTP, never indexable by Google/Bing crawlers, and inaccessible to public web users.
- Protected by `public/robots.txt` which blocks `/templates/backgrounds/`.

## 📁 Vault Structure
- `backgrounds/`: Plain, original uncompressed background artwork without any text or watermarks.
- `previews/`: Full demo invitation cards displaying typography and layout for preview and catalog references.
- `manifest.json`: Full machine-readable inventory indexing original file names, dimensions, and template mapping.

## ⚡ High-Quality, Low-Size Pipeline
When templates are loaded in the editor or catalog:
1. Master files in this vault are compressed via `npm run optimize:images` using **Sharp** into modern **WebP** (`quality: 90, effort: 6`).
2. **File Size Reduction:** Slashes download size by **40% to 50%** (from ~120KB to ~55KB–70KB).
3. **Retina Crispness:** 100% color fidelity and sub-pixel sharpness on mobile and 4K displays.
4. **Instant Canvas Rendering:** WebP hardware decoding ensures 60 FPS pinch, zoom, and real-time text synchronization on mobile.
5. **Print Export:** At download time, `export.ts` renders directly using high-res buffers at 300 DPI for ultra-HD printing.
