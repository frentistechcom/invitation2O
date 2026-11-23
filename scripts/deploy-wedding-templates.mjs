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

const weddingTemplates = [
  {
    id: "charming-dulha-dulhan-wedding",
    src: "/Users/maddy/.gemini/antigravity/brain/fd644735-e249-4594-91fa-90714a1c8429/indian_wedding_invitation_card_bg_1795421509068.jpg",
    slug: "charming-dulha-dulhan-wedding",
    title: "Charming Royal Dulha & Dulhan Wedding",
    category: "wedding",
    categoryName: "Wedding & Reception",
    description: "Delightful handcrafted Indian wedding invitation featuring an adorable illustrated bride and groom in royal attire, festive marigold torans, brass bells, and warm cream calligraphy.",
    width: 731,
    height: 1024,
    tags: ["Indian Wedding", "Dulha Dulhan", "Bride and Groom", "Marigold", "Traditional", "Hindu Ceremony", "Royal"],
    featured: true,
    layers: [
      { id: "cdd-shloka", type: "text", text: "|| श्री गणेशाय नमः ||", fontFamily: "'Rozha One', serif", fontSize: 20, fontWeight: "normal", color: "#B45309", y: 195, height: 28 },
      { id: "cdd-header", type: "text", text: "TOGETHER WITH THEIR FAMILIES", fontFamily: "'Cinzel', serif", fontSize: 13, fontWeight: "600", color: "#78350F", y: 240, height: 22, letterSpacing: 3 },
      { id: "cdd-couple", type: "text", text: "Aditya & Sanjana", fontFamily: "'Playfair Display', serif", fontSize: 48, fontWeight: "bold", color: "#991B1B", y: 285, height: 58, letterSpacing: 1.5 },
      { id: "cdd-invite", type: "text", text: "Request the honour of your presence to celebrate their wedding ceremony", fontFamily: "'Outfit', sans-serif", fontSize: 15, fontWeight: "500", color: "#451A03", y: 360, height: 42 },
      { id: "cdd-datetime", type: "text", text: "Sunday, 14 December 2025 • 10:30 AM", fontFamily: "'Cinzel', serif", fontSize: 18, fontWeight: "600", color: "#9A3412", y: 415, height: 28, letterSpacing: 1 },
      { id: "cdd-venue", type: "text", text: "Grand Heritage Palace, MG Road, Bengaluru", fontFamily: "'Outfit', sans-serif", fontSize: 16, fontWeight: "600", color: "#451A03", y: 465, height: 28 },
      { id: "cdd-rsvp", type: "text", text: "Blessings & Best Compliments from Sharma & Verma Families", fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: "500", color: "#78350F", y: 525, height: 24 }
    ]
  },
  {
    id: "sacred-ganesha-kalash-wedding",
    src: "/Users/maddy/.gemini/antigravity/brain/fd644735-e249-4594-91fa-90714a1c8429/indian_wedding_invitation_bg_1795421508331.jpg",
    slug: "sacred-ganesha-kalash-wedding",
    title: "Auspicious Ganesha & Lotus Urli Wedding",
    category: "wedding",
    categoryName: "Wedding & Reception",
    description: "Sacred traditional Hindu wedding invitation featuring Lord Ganesha, auspicious coconut Kalash, brass temple bells, and floating lotus urlis on warm ivory.",
    width: 731,
    height: 1024,
    tags: ["Indian Wedding", "Lord Ganesha", "Kalash", "Temple Bells", "Marigold", "Hindu Ceremony", "Traditional"],
    featured: true,
    layers: [
      { id: "sgk-shloka", type: "text", text: "|| वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ ||", fontFamily: "'Rozha One', serif", fontSize: 18, fontWeight: "normal", color: "#B45309", y: 300, height: 26 },
      { id: "sgk-heading", type: "text", text: "INVITATION TO THE AUSPICIOUS WEDDING OF", fontFamily: "'Cinzel', serif", fontSize: 13, fontWeight: "600", color: "#78350F", y: 345, height: 22, letterSpacing: 2.5 },
      { id: "sgk-couple", type: "text", text: "Rohan & Ananya", fontFamily: "'Playfair Display', serif", fontSize: 48, fontWeight: "bold", color: "#991B1B", y: 385, height: 58, letterSpacing: 1.5 },
      { id: "sgk-invite", type: "text", text: "Cordially invite you to bless the newly wedded couple", fontFamily: "'Outfit', sans-serif", fontSize: 15, fontWeight: "500", color: "#451A03", y: 460, height: 42 },
      { id: "sgk-datetime", type: "text", text: "Friday, 21 November 2025 • 6:30 PM Onwards", fontFamily: "'Cinzel', serif", fontSize: 18, fontWeight: "600", color: "#B45309", y: 515, height: 28, letterSpacing: 1 },
      { id: "sgk-venue", type: "text", text: "Mayur Grand Ballroom, Connaught Place, New Delhi", fontFamily: "'Outfit', sans-serif", fontSize: 16, fontWeight: "600", color: "#451A03", y: 565, height: 28 },
      { id: "sgk-rsvp", type: "text", text: "With Warm Regards: Kapoor & Mehra Families", fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: "500", color: "#78350F", y: 625, height: 24 }
    ]
  },
  {
    id: "royal-elephant-procession-wedding",
    src: "/Users/maddy/.gemini/antigravity/brain/fd644735-e249-4594-91fa-90714a1c8429/wedding_card_background_1795421510124.jpg",
    slug: "royal-elephant-procession-wedding",
    title: "Royal Baraat Elephant & Lotus Arch Wedding",
    category: "wedding",
    categoryName: "Wedding & Reception",
    description: "Regal Indian wedding invitation featuring an adorned royal ceremonial elephant (Baraat Hathi), arched pink lotus garland, hanging diyas, and warm ivory background.",
    width: 731,
    height: 1024,
    tags: ["Indian Wedding", "Royal Elephant", "Baraat", "Lotus Arch", "Palace Wedding", "Luxury", "Royal"],
    featured: true,
    layers: [
      { id: "rep-shloka", type: "text", text: "|| शुभ विवाह ||", fontFamily: "'Rozha One', serif", fontSize: 22, fontWeight: "normal", color: "#B45309", y: 280, height: 30, letterSpacing: 3 },
      { id: "rep-heading", type: "text", text: "YOU ARE CORDIALLY INVITED TO CELEBRATE THE WEDDING OF", fontFamily: "'Cinzel', serif", fontSize: 12, fontWeight: "600", color: "#78350F", y: 325, height: 20, letterSpacing: 2 },
      { id: "rep-couple", type: "text", text: "Devendra & Meera", fontFamily: "'Playfair Display', serif", fontSize: 44, fontWeight: "bold", color: "#991B1B", y: 360, height: 54, letterSpacing: 1.5 },
      { id: "rep-invite", type: "text", text: "As they unite their hearts in sacred matrimony", fontFamily: "'Outfit', sans-serif", fontSize: 14, fontWeight: "500", color: "#451A03", y: 430, height: 32 },
      { id: "rep-datetime", type: "text", text: "Sunday, 28 December 2025 • 7:00 PM", fontFamily: "'Cinzel', serif", fontSize: 17, fontWeight: "600", color: "#B45309", y: 475, height: 26, letterSpacing: 1 },
      { id: "rep-venue", type: "text", text: "The Leela Palace, Udaipur, Rajasthan", fontFamily: "'Outfit', sans-serif", fontSize: 15, fontWeight: "600", color: "#451A03", y: 520, height: 26 }
    ]
  },
  {
    id: "traditional-wedding-doli-palki",
    src: "/Users/maddy/.gemini/antigravity/brain/fd644735-e249-4594-91fa-90714a1c8429/indian_wedding_doli_invitation_bg_1795421505488.jpg",
    slug: "traditional-wedding-doli-palki",
    title: "Traditional Royal Doli & Fairylight Wedding",
    category: "wedding",
    categoryName: "Wedding & Reception",
    description: "Enchanting Indian wedding invitation featuring an exquisitely adorned golden doli palanquin, lush ivy canopy with twinkling fairy lights, and gold glitter stars.",
    width: 731,
    height: 1024,
    tags: ["Indian Wedding", "Doli", "Palanquin", "Fairy Lights", "Ivy Canopy", "Traditional", "Royal"],
    featured: true,
    layers: [
      { id: "twd-shloka", type: "text", text: "|| श्री गणेशाय नमः ||", fontFamily: "'Rozha One', serif", fontSize: 20, fontWeight: "normal", color: "#166534", y: 250, height: 28 },
      { id: "twd-header", type: "text", text: "CELEBRATING LOVE & NEW BEGINNINGS", fontFamily: "'Cinzel', serif", fontSize: 13, fontWeight: "600", color: "#78350F", y: 295, height: 22, letterSpacing: 3 },
      { id: "twd-couple", type: "text", text: "Vikram & Pooja", fontFamily: "'Playfair Display', serif", fontSize: 48, fontWeight: "bold", color: "#991B1B", y: 335, height: 58, letterSpacing: 1.5 },
      { id: "twd-invite", type: "text", text: "Request the pleasure of your company on their auspicious wedding celebration", fontFamily: "'Outfit', sans-serif", fontSize: 15, fontWeight: "500", color: "#27272A", y: 410, height: 42 },
      { id: "twd-datetime", type: "text", text: "Saturday, 17 January 2026 • 11:00 AM", fontFamily: "'Cinzel', serif", fontSize: 18, fontWeight: "600", color: "#166534", y: 465, height: 28, letterSpacing: 1 },
      { id: "twd-venue", type: "text", text: "Gulmohar Lawns, Koregaon Park, Pune", fontFamily: "'Outfit', sans-serif", fontSize: 16, fontWeight: "600", color: "#27272A", y: 515, height: 28 },
      { id: "twd-rsvp", type: "text", text: "RSVP: Deshmukh & Kulkarni Families", fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: "500", color: "#78350F", y: 575, height: 24 }
    ]
  },
  {
    id: "peacock-lotus-mandap-wedding",
    src: "/Users/maddy/.gemini/antigravity/brain/fd644735-e249-4594-91fa-90714a1c8429/indian_wedding_peacock_invitation_bg_1795421511319.jpg",
    slug: "peacock-lotus-mandap-wedding",
    title: "Twin Royal Peacocks & Golden Arch Wedding",
    category: "wedding",
    categoryName: "Wedding & Reception",
    description: "Majestic Indian wedding invitation featuring twin sapphire peacocks, blooming pink lotus ponds, and an ornate Mughal golden palace archway on warm ivory.",
    width: 731,
    height: 1024,
    tags: ["Indian Wedding", "Twin Peacocks", "Lotus Pond", "Golden Arch", "Mughal Palace", "Luxury", "Royal"],
    featured: true,
    layers: [
      { id: "plm-shloka", type: "text", text: "|| श्री गणेशाय नमः ||", fontFamily: "'Rozha One', serif", fontSize: 20, fontWeight: "normal", color: "#B45309", y: 280, height: 28 },
      { id: "plm-header", type: "text", text: "TOGETHER WITH THEIR FAMILIES", fontFamily: "'Cinzel', serif", fontSize: 13, fontWeight: "600", color: "#78350F", y: 325, height: 22, letterSpacing: 3 },
      { id: "plm-couple", type: "text", text: "Kabir & Riya", fontFamily: "'Playfair Display', serif", fontSize: 48, fontWeight: "bold", color: "#047857", y: 365, height: 58, letterSpacing: 1.5 },
      { id: "plm-invite", type: "text", text: "Invite you to join them in celebrating their sacred wedding vows", fontFamily: "'Outfit', sans-serif", fontSize: 15, fontWeight: "500", color: "#1F2937", y: 440, height: 42 },
      { id: "plm-datetime", type: "text", text: "Sunday, 8 February 2026 • 6:00 PM", fontFamily: "'Cinzel', serif", fontSize: 18, fontWeight: "600", color: "#B45309", y: 505, height: 28, letterSpacing: 1 },
      { id: "plm-venue", type: "text", text: "Taj Falaknuma Palace, Hyderabad", fontFamily: "'Outfit', sans-serif", fontSize: 16, fontWeight: "600", color: "#1F2937", y: 545, height: 28 },
      { id: "plm-rsvp", type: "text", text: "With Love: Singhania & Oberoi Families", fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: "500", color: "#047857", y: 605, height: 24 }
    ]
  },
  {
    id: "pichwai-sacred-cows-lotus-wedding",
    src: "/Users/maddy/.gemini/antigravity/brain/fd644735-e249-4594-91fa-90714a1c8429/pichwai_wedding_invitation_background_1795423008250.jpg",
    slug: "pichwai-sacred-cows-lotus-wedding",
    title: "Pichwai Sacred Cow & Lotus Pond Wedding",
    category: "wedding",
    categoryName: "Wedding & Reception",
    description: "Authentic Pichwai art Indian wedding invitation featuring an adorned holy white cow, blooming pink lotus pond, hanging marigold torans, and temple bells on antique cream.",
    width: 731,
    height: 1024,
    tags: ["Indian Wedding", "Pichwai Art", "Holy Cow", "Lotus Pond", "Marigold", "Traditional", "Vrindavan"],
    featured: true,
    layers: [
      { id: "psc-shloka", type: "text", text: "|| श्री राधाकृष्णाय नमः ||", fontFamily: "'Rozha One', serif", fontSize: 20, fontWeight: "normal", color: "#B45309", y: 270, height: 28 },
      { id: "psc-header", type: "text", text: "WITH THE BLESSINGS OF ALMIGHTY", fontFamily: "'Cinzel', serif", fontSize: 13, fontWeight: "600", color: "#78350F", y: 315, height: 22, letterSpacing: 3 },
      { id: "psc-couple", type: "text", text: "Aarav & Ishita", fontFamily: "'Playfair Display', serif", fontSize: 48, fontWeight: "bold", color: "#991B1B", y: 355, height: 58, letterSpacing: 1.5 },
      { id: "psc-invite", type: "text", text: "Invite you to celebrate their wedding and auspicious union", fontFamily: "'Outfit', sans-serif", fontSize: 15, fontWeight: "500", color: "#451A03", y: 430, height: 42 },
      { id: "psc-datetime", type: "text", text: "Friday, 6 March 2026 • 11:30 AM", fontFamily: "'Cinzel', serif", fontSize: 18, fontWeight: "600", color: "#B45309", y: 485, height: 28, letterSpacing: 1 },
      { id: "psc-venue", type: "text", text: "Radha Krishna Mandir Hall, Vrindavan Dham, Mathura", fontFamily: "'Outfit', sans-serif", fontSize: 16, fontWeight: "600", color: "#451A03", y: 535, height: 28 },
      { id: "psc-rsvp", type: "text", text: "Warm Regards from Agarwal & Gupta Families", fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: "500", color: "#78350F", y: 585, height: 24 }
    ]
  },
  {
    id: "botanical-blush-rose-gold-wedding",
    src: "/Users/maddy/.gemini/antigravity/brain/fd644735-e249-4594-91fa-90714a1c8429/wedding_reception_botanical_background_1795423011797.jpg",
    slug: "botanical-blush-rose-gold-wedding",
    title: "Botanical Blush Rose & Gold Hexagon Wedding & Reception",
    category: "wedding",
    categoryName: "Wedding & Reception",
    description: "Modern romantic wedding and reception invitation featuring watercolor blush pink roses, sage eucalyptus foliage, and a brushed champagne gold geometric hexagon arch.",
    width: 731,
    height: 1024,
    tags: ["Wedding & Reception", "Botanical", "Blush Pink", "Geometric Arch", "Eucalyptus", "Modern Romance", "Gold Foil"],
    featured: true,
    layers: [
      { id: "bbr-header", type: "text", text: "TOGETHER WITH THEIR FAMILIES", fontFamily: "'Cinzel', serif", fontSize: 13, fontWeight: "600", color: "#9F7275", y: 265, height: 22, letterSpacing: 3.5 },
      { id: "bbr-couple", type: "text", text: "Neil & Natasha", fontFamily: "'Playfair Display', serif", fontSize: 50, fontWeight: "bold", color: "#83434B", y: 310, height: 60, letterSpacing: 1.5 },
      { id: "bbr-invite", type: "text", text: "Request the honour of your presence at their Wedding & Reception celebration", fontFamily: "'Outfit', sans-serif", fontSize: 15, fontWeight: "500", color: "#4A5568", y: 385, height: 44 },
      { id: "bbr-datetime", type: "text", text: "Saturday, 21 February 2026 • 5:00 PM Onwards", fontFamily: "'Cinzel', serif", fontSize: 18, fontWeight: "600", color: "#9F7275", y: 450, height: 28, letterSpacing: 1 },
      { id: "bbr-venue", type: "text", text: "The Glasshouse at The Grand, Vasant Kunj, New Delhi", fontFamily: "'Outfit', sans-serif", fontSize: 16, fontWeight: "600", color: "#2D3748", y: 495, height: 28 },
      { id: "bbr-reception", type: "text", text: "Dinner, Cocktails & Dancing to follow", fontFamily: "'Caveat', cursive", fontSize: 26, fontWeight: "bold", color: "#83434B", y: 565, height: 36 },
      { id: "bbr-rsvp", type: "text", text: "RSVP: Kapur & Malhotra Families", fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: "500", color: "#718096", y: 620, height: 24 }
    ]
  }
];

async function deployAll() {
  console.log("=== Deploying Wedding Templates ===");

  for (const t of weddingTemplates) {
    const bgJpg = `public/templates/backgrounds/${t.id}-bg.jpg`;
    const bgWebp = `public/templates/backgrounds/${t.id}-bg.webp`;
    const masterBg = `assets/raw-masters/backgrounds/${t.id}-bg.jpg`;

    const prevJpg = `public/templates/previews/${t.id}-card.jpg`;
    const prevWebp = `public/templates/previews/${t.id}-card.webp`;
    const masterPrev = `assets/raw-masters/previews/${t.id}-card.jpg`;

    // 1. Process Background (731x1024)
    await sharp(t.src)
      .resize(731, 1024, { fit: "cover", position: "center" })
      .jpeg({ quality: 92, progressive: true })
      .toFile(bgJpg);

    await sharp(bgJpg)
      .webp({ quality: 90, effort: 6 })
      .toFile(bgWebp);

    fs.copyFileSync(bgJpg, masterBg);

    // 2. Build SVG text overlay
    const svgElements = t.layers.map((l) => {
      const x = 365.5; // center of 731
      const fontFam = (l.fontFamily || "Outfit, sans-serif").replace(/'/g, "");
      const letterSpacing = l.letterSpacing ? `letter-spacing="${l.letterSpacing}px"` : "";
      return `
        <text 
          x="${x}" 
          y="${l.y + l.fontSize}" 
          font-family="${fontFam}, serif, sans-serif" 
          font-size="${l.fontSize}px" 
          font-weight="${l.fontWeight || "normal"}" 
          fill="${l.color}" 
          text-anchor="middle"
          ${letterSpacing}
        >${escapeXml(l.text)}</text>
      `;
    });

    const svg = `
      <svg width="731" height="1024" viewBox="0 0 731 1024" xmlns="http://www.w3.org/2000/svg">
        ${svgElements.join("\n")}
      </svg>
    `;

    // 3. Composite Preview Card
    await sharp(bgJpg)
      .composite([{ input: Buffer.from(svg), top: 0, left: 0 }])
      .jpeg({ quality: 92, progressive: true })
      .toFile(prevJpg);

    await sharp(prevJpg)
      .webp({ quality: 90, effort: 6 })
      .toFile(prevWebp);

    fs.copyFileSync(prevJpg, masterPrev);

    console.log(`✓ Processed and rendered: ${t.id}`);
  }

  // 4. Update src/data/templates.ts
  const content = fs.readFileSync("src/data/templates.ts", "utf8");
  const tPart = content.split("export const CATEGORIES")[0].replace("import { CardTemplate } from \"@/types/editor\";\n\nexport const SAMPLE_TEMPLATES: CardTemplate[] =", "");
  const currentTemplates = eval(tPart);
  const otherTemplates = currentTemplates.filter((x) => x.category !== "wedding");

  // Format templates with full layer properties
  const formattedWedding = weddingTemplates.map((t) => ({
    id: t.id,
    slug: t.slug,
    title: t.title,
    category: t.category,
    categoryName: t.categoryName,
    description: t.description,
    width: 731,
    height: 1024,
    backgroundImage: `/templates/backgrounds/${t.id}-bg.jpg`,
    thumbnail: `/templates/previews/${t.id}-card.jpg`,
    tags: t.tags,
    featured: true,
    layers: t.layers.map((l, idx) => ({
      id: l.id,
      type: "text",
      text: l.text,
      fontFamily: l.fontFamily,
      fontSize: l.fontSize,
      fontWeight: l.fontWeight,
      fontStyle: "normal",
      textAlign: "center",
      color: l.color,
      letterSpacing: l.letterSpacing || 0,
      lineHeight: 1.2,
      textTransform: "none",
      x: 45,
      y: l.y,
      width: 641,
      height: l.height || 28,
      rotation: 0,
      opacity: 1,
      isLocked: false,
      zIndex: idx + 1
    }))
  }));

  const allTemplates = [...formattedWedding, ...otherTemplates];
  const categoriesPart = content.substring(content.indexOf("export const CATEGORIES"));

  // Update categories counts: wedding is now 7
  let updatedCategoriesPart = categoriesPart.replace(/id:\s*"wedding",\s*name:\s*"Wedding & Reception",\s*slug:\s*"wedding",\s*count:\s*\d+/, `id: "wedding", name: "Wedding & Reception", slug: "wedding", count: ${formattedWedding.length}`);
  updatedCategoriesPart = updatedCategoriesPart.replace(/id:\s*"all",\s*name:\s*"All Templates",\s*slug:\s*"all",\s*count:\s*\d+/, `id: "all", name: "All Templates", slug: "all", count: ${allTemplates.length}`);

  const newTemplatesFile = `import { CardTemplate } from "@/types/editor";

export const SAMPLE_TEMPLATES: CardTemplate[] = ${JSON.stringify(allTemplates, null, 2)};

${updatedCategoriesPart}`;

  fs.writeFileSync("src/data/templates.ts", newTemplatesFile, "utf8");
  console.log(`Updated src/data/templates.ts! Total templates: ${allTemplates.length} (${formattedWedding.length} in wedding)`);

  // 5. Update assets/raw-masters/manifest.json
  const manifest = JSON.parse(fs.readFileSync("./assets/raw-masters/manifest.json", "utf8"));
  const filteredManifest = manifest.filter((m) => m.category !== "wedding" && !m.id.includes("wedding"));
  const weddingManifestEntries = formattedWedding.map((t) => ({
    id: t.id,
    type: "deployed",
    masterBackground: `assets/raw-masters/backgrounds/${t.id}-bg.jpg`,
    masterPreview: `assets/raw-masters/previews/${t.id}-card.jpg`,
    dimensions: "731x1024",
    title: t.title,
    category: "wedding"
  }));

  fs.writeFileSync("assets/raw-masters/manifest.json", JSON.stringify([...weddingManifestEntries, ...filteredManifest], null, 2), "utf8");
  console.log("Updated manifest.json!");
}

deployAll().then(() => {
  console.log("Deployment complete!");
  process.exit(0);
}).catch((err) => {
  console.error("Error:", err);
  process.exit(1);
});
