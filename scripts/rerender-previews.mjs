import fs from "fs";
import path from "path";
import sharp from "sharp";

function escapeXml(unsafe) {
  return unsafe.replace(/[<>&"']/g, (c) => {
    switch (c) {
      case "<": return "&lt;";
      case ">": return "&gt;";
      case "&": return "&amp;";
      case "\"": return "&quot;";
      case "'": return "&apos;";
    }
  });
}

const content = fs.readFileSync("src/data/templates.ts", "utf8");
const tPart = content.split("export const CATEGORIES")[0].replace("import { CardTemplate } from \"@/types/editor\";\n\nexport const SAMPLE_TEMPLATES: CardTemplate[] =", "");
const templates = eval(tPart);

const updateIds = [
  "golden-stars-cradle-swing-naming-ceremony",
  "mother-deer-cradle-naming-ceremony",
  "royal-bronze-cradle-naming-ceremony",
  "night-safari-naming-ceremony",
  "sleeping-baby-cradle-naming-ceremony",
  "garden-ivy-family-naming-ceremony",
  "indian-mom-baby-shower",
  "gau-pooja-couple-housewarming",
  "ganesha-banana-tree-housewarming",
  "modern-twilight-cottage-housewarming",
  "rustic-cottage-kites-griha-pravesh"
];

async function generate() {
  for (const id of updateIds) {
    const t = templates.find((x) => x.id === id);
    if (!t) {
      console.log("Not found:", id);
      continue;
    }

    const bgPath = "public" + t.backgroundImage;
    if (!fs.existsSync(bgPath)) {
      console.log("Missing bg:", bgPath);
      continue;
    }

    const svgElements = [];
    for (const l of t.layers) {
      if (l.type !== "text") continue;
      const lines = l.text.split("\n");
      const fontFam = (l.fontFamily || "Outfit, sans-serif").replace(/'/g, "");
      const fontSize = l.fontSize || 20;
      const fontWeight = l.fontWeight || "normal";
      const fontStyle = l.fontStyle || "normal";
      const color = l.color || "#FFFFFF";
      const letterSpacing = l.letterSpacing || 0;
      const textTransform = l.textTransform || "none";

      const x = l.textAlign === "center" ? l.x + l.width / 2 : l.x;
      const textAnchor = l.textAlign === "center" ? "middle" : "start";

      const tspans = lines.map((line, idx) => {
        let lineText = escapeXml(line);
        if (textTransform === "uppercase") lineText = lineText.toUpperCase();
        if (idx === 0) {
          return `<tspan x="${x}">${lineText}</tspan>`;
        } else {
          return `<tspan x="${x}" dy="1.25em">${lineText}</tspan>`;
        }
      }).join("");

      svgElements.push(`
        <text 
          x="${x}" 
          y="${l.y + fontSize}" 
          font-family="${fontFam}, serif, sans-serif" 
          font-size="${fontSize}px" 
          font-weight="${fontWeight}" 
          font-style="${fontStyle}" 
          fill="${color}" 
          text-anchor="${textAnchor}" 
          letter-spacing="${letterSpacing}px"
        >${tspans}</text>
      `);
    }

    const svg = `
      <svg width="731" height="1024" viewBox="0 0 731 1024" xmlns="http://www.w3.org/2000/svg">
        ${svgElements.join("\n")}
      </svg>
    `;

    const svgBuffer = Buffer.from(svg);
    const destJpg = "public" + t.thumbnail;
    const destWebp = destJpg.replace(/\.jpg$/, ".webp");
    const masterJpg = `assets/raw-masters/previews/${id}-card.jpg`;

    await sharp(bgPath)
      .resize(731, 1024)
      .composite([{ input: svgBuffer, top: 0, left: 0 }])
      .jpeg({ quality: 92, progressive: true })
      .toFile(destJpg);

    await sharp(destJpg)
      .webp({ quality: 90, effort: 6 })
      .toFile(destWebp);

    if (fs.existsSync(path.dirname(masterJpg))) {
      fs.copyFileSync(destJpg, masterJpg);
    }

    console.log(`✓ Re-rendered: ${id} -> ${destJpg}`);
  }
}

generate().then(() => {
  console.log("Done generating preview cards!");
  process.exit(0);
}).catch((err) => {
  console.error("Error:", err);
  process.exit(1);
});
