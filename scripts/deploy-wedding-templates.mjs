import fs from "fs";
import path from "path";
import sharp from "sharp";

const weddingArtworks = [
  {
    id: "charming-dulha-dulhan-wedding",
    src: "/Users/maddy/.gemini/antigravity/brain/fd644735-e249-4594-91fa-90714a1c8429/indian_wedding_invitation_card_bg_1795421509068.jpg",
    title: "Charming Royal Dulha & Dulhan Wedding",
    category: "wedding",
    layers: [
      { text: "|| श्री गणेशाय नमः ||", fontFam: "Rozha One", size: 20, color: "#B45309", y: 155, align: "center", weight: "normal" },
      { text: "TOGETHER WITH THEIR FAMILIES", fontFam: "Cinzel", size: 14, color: "#78350F", y: 195, align: "center", weight: "600" },
      { text: "Aditya & Sanjana", fontFam: "Playfair Display", size: 46, color: "#991B1B", y: 235, align: "center", weight: "bold" },
      { text: "Request the honour of your presence to celebrate their wedding ceremony", fontFam: "Outfit", size: 15, color: "#451A03", y: 300, align: "center", weight: "500" },
      { text: "Sunday, 14 December 2025 • 10:30 AM", fontFam: "Cinzel", size: 18, color: "#9A3412", y: 355, align: "center", weight: "600" },
      { text: "Grand Heritage Palace, MG Road, Bengaluru", fontFam: "Outfit", size: 16, color: "#451A03", y: 395, align: "center", weight: "600" },
      { text: "Blessings & Best Compliments from Sharma & Verma Families", fontFam: "Outfit", size: 13, color: "#78350F", y: 445, align: "center", weight: "500" }
    ]
  },
  {
    id: "sacred-ganesha-kalash-wedding",
    src: "/Users/maddy/.gemini/antigravity/brain/fd644735-e249-4594-91fa-90714a1c8429/indian_wedding_invitation_bg_1795421508331.jpg",
    title: "Auspicious Ganesha & Lotus Urli Wedding",
    category: "wedding",
    layers: [
      { text: "|| वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ ||", fontFam: "Rozha One", size: 18, color: "#B45309", y: 260, align: "center", weight: "normal" },
      { text: "INVITATION TO THE AUSPICIOUS", fontFam: "Cinzel", size: 14, color: "#78350F", y: 305, align: "center", weight: "600" },
      { text: "WEDDING CEREMONY", fontFam: "Cinzel", size: 28, color: "#991B1B", y: 335, align: "center", weight: "bold" },
      { text: "Rohan & Ananya", fontFam: "Playfair Display", size: 46, color: "#C2410C", y: 385, align: "center", weight: "bold" },
      { text: "Cordially invite you to bless the newly wedded couple", fontFam: "Outfit", size: 15, color: "#451A03", y: 450, align: "center", weight: "500" },
      { text: "Friday, 21 November 2025 • 6:30 PM Onwards", fontFam: "Cinzel", size: 18, color: "#B45309", y: 505, align: "center", weight: "600" },
      { text: "Mayur Grand Ballroom, Connaught Place, New Delhi", fontFam: "Outfit", size: 16, color: "#451A03", y: 545, align: "center", weight: "600" },
      { text: "With Warm Regards: Kapoor & Mehra Families", fontFam: "Outfit", size: 13, color: "#78350F", y: 595, align: "center", weight: "500" }
    ]
  },
  {
    id: "royal-elephant-procession-wedding",
    src: "/Users/maddy/.gemini/antigravity/brain/fd644735-e249-4594-91fa-90714a1c8429/wedding_card_background_1795421510124.jpg",
    title: "Royal Baraat Elephant & Lotus Arch Wedding",
    category: "wedding",
    layers: [
      { text: "|| शुभ विवाह ||", fontFam: "Rozha One", size: 24, color: "#B45309", y: 220, align: "center", weight: "normal" },
      { text: "YOU ARE CORDIALLY INVITED TO CELEBRATE", fontFam: "Cinzel", size: 14, color: "#78350F", y: 260, align: "center", weight: "600" },
      { text: "THE ROYAL WEDDING OF", fontFam: "Cinzel", size: 22, color: "#991B1B", y: 290, align: "center", weight: "bold" },
      { text: "Devendra & Meera", fontFam: "Playfair Display", size: 46, color: "#991B1B", y: 335, align: "center", weight: "bold" },
      { text: "As they unite their hearts in sacred matrimony", fontFam: "Outfit", size: 15, color: "#451A03", y: 400, align: "center", weight: "500" },
      { text: "Sunday, 28 December 2025 • 7:00 PM", fontFam: "Cinzel", size: 18, color: "#B45309", y: 445, align: "center", weight: "600" },
      { text: "The Leela Palace, Udaipur, Rajasthan", fontFam: "Outfit", size: 16, color: "#451A03", y: 485, align: "center", weight: "600" }
    ]
  },
  {
    id: "traditional-wedding-doli-palki",
    src: "/Users/maddy/.gemini/antigravity/brain/fd644735-e249-4594-91fa-90714a1c8429/indian_wedding_doli_invitation_bg_1795421505488.jpg",
    title: "Traditional Royal Doli & Fairylight Wedding",
    category: "wedding",
    layers: [
      { text: "|| श्री गणेशाय नमः ||", fontFam: "Rozha One", size: 20, color: "#166534", y: 155, align: "center", weight: "normal" },
      { text: "CELEBRATING LOVE & NEW BEGINNINGS", fontFam: "Cinzel", size: 14, color: "#78350F", y: 195, align: "center", weight: "600" },
      { text: "Vikram & Pooja", fontFam: "Playfair Display", size: 46, color: "#991B1B", y: 235, align: "center", weight: "bold" },
      { text: "Request the pleasure of your company on their auspicious wedding", fontFam: "Outfit", size: 15, color: "#27272A", y: 300, align: "center", weight: "500" },
      { text: "Saturday, 17 January 2026 • 11:00 AM", fontFam: "Cinzel", size: 18, color: "#166534", y: 355, align: "center", weight: "600" },
      { text: "Gulmohar Lawns, Koregaon Park, Pune", fontFam: "Outfit", size: 16, color: "#27272A", y: 395, align: "center", weight: "600" },
      { text: "RSVP: Deshmukh & Kulkarni Families", fontFam: "Outfit", size: 13, color: "#78350F", y: 445, align: "center", weight: "500" }
    ]
  },
  {
    id: "peacock-lotus-mandap-wedding",
    src: "/Users/maddy/.gemini/antigravity/brain/fd644735-e249-4594-91fa-90714a1c8429/indian_wedding_peacock_invitation_bg_1795421511319.jpg",
    title: "Twin Royal Peacocks & Golden Arch Wedding",
    category: "wedding",
    layers: [
      { text: "|| श्री गणेशाय नमः ||", fontFam: "Rozha One", size: 20, color: "#B45309", y: 190, align: "center", weight: "normal" },
      { text: "TOGETHER WITH THEIR FAMILIES", fontFam: "Cinzel", size: 14, color: "#78350F", y: 230, align: "center", weight: "600" },
      { text: "Kabir & Riya", fontFam: "Playfair Display", size: 46, color: "#047857", y: 270, align: "center", weight: "bold" },
      { text: "Invite you to join them in celebrating their sacred wedding vows", fontFam: "Outfit", size: 15, color: "#1F2937", y: 335, align: "center", weight: "500" },
      { text: "Sunday, 8 February 2026 • 6:00 PM", fontFam: "Cinzel", size: 18, color: "#B45309", y: 390, align: "center", weight: "600" },
      { text: "Taj Falaknuma Palace, Hyderabad", fontFam: "Outfit", size: 16, color: "#1F2937", y: 430, align: "center", weight: "600" },
      { text: "With Love: Singhania & Oberoi Families", fontFam: "Outfit", size: 13, color: "#047857", y: 480, align: "center", weight: "500" }
    ]
  }
];

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

async function processAll() {
  for (const item of weddingArtworks) {
    console.log(`Processing: ${item.id}...`);

    const publicBgJpg = `public/templates/backgrounds/${item.id}-bg.jpg`;
    const publicBgWebp = `public/templates/backgrounds/${item.id}-bg.webp`;
    const masterBgJpg = `assets/raw-masters/backgrounds/${item.id}-bg.jpg`;

    const publicCardJpg = `public/templates/previews/${item.id}-card.jpg`;
    const publicCardWebp = `public/templates/previews/${item.id}-card.webp`;
    const masterCardJpg = `assets/raw-masters/previews/${item.id}-card.jpg`;

    // 1. Process Background (731x1024)
    await sharp(item.src)
      .resize(731, 1024, { fit: "cover", position: "center" })
      .jpeg({ quality: 92, progressive: true })
      .toFile(publicBgJpg);

    await sharp(publicBgJpg)
      .webp({ quality: 90, effort: 6 })
      .toFile(publicBgWebp);

    fs.copyFileSync(publicBgJpg, masterBgJpg);

    // 2. Build SVG text overlay
    const svgElements = item.layers.map((l) => {
      const x = 365.5; // center of 731
      return `
        <text 
          x="${x}" 
          y="${l.y + l.size}" 
          font-family="'${l.fontFam}', serif, sans-serif" 
          font-size="${l.size}px" 
          font-weight="${l.weight}" 
          fill="${l.color}" 
          text-anchor="middle"
        >${escapeXml(l.text)}</text>
      `;
    });

    const svg = `
      <svg width="731" height="1024" viewBox="0 0 731 1024" xmlns="http://www.w3.org/2000/svg">
        ${svgElements.join("\n")}
      </svg>
    `;

    // 3. Composite Preview Card
    await sharp(publicBgJpg)
      .composite([{ input: Buffer.from(svg), top: 0, left: 0 }])
      .jpeg({ quality: 92, progressive: true })
      .toFile(publicCardJpg);

    await sharp(publicCardJpg)
      .webp({ quality: 90, effort: 6 })
      .toFile(publicCardWebp);

    fs.copyFileSync(publicCardJpg, masterCardJpg);

    console.log(`✓ Completed: ${item.id}`);
  }
}

processAll().then(() => {
  console.log("All 5 wedding templates successfully created and optimized!");
  process.exit(0);
}).catch((err) => {
  console.error(err);
  process.exit(1);
});
