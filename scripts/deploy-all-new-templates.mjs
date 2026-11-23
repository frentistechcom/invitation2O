import fs from "fs";
import path from "path";
import sharp from "sharp";

function escapeXml(unsafe) {
  return String(unsafe).replace(/[<>&"']/g, (c) => {
    switch (c) {
      case "<": return "&lt;";
      case ">": return "&gt;";
      case "&": return "&amp;";
      case "\"": return "&quot;";
      case "'": return "&apos;";
    }
  });
}

// -------------------------------------------------------------
// REUSABLE RICH PAINTERLY SVG DECORATIONS
// -------------------------------------------------------------

const COMMON_DEFS = `
  <defs>
    <!-- Rich Gold Gradients -->
    <linearGradient id="gold-foil" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FDE047" />
      <stop offset="25%" stop-color="#F59E0B" />
      <stop offset="50%" stop-color="#FEF08A" />
      <stop offset="75%" stop-color="#D97706" />
      <stop offset="100%" stop-color="#B45309" />
    </linearGradient>
    <radialGradient id="gold-sphere" cx="35%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#FEF08A" />
      <stop offset="40%" stop-color="#F59E0B" />
      <stop offset="85%" stop-color="#B45309" />
      <stop offset="100%" stop-color="#78350F" />
    </radialGradient>
    <radialGradient id="ruby-gem" cx="35%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#FCA5A5" />
      <stop offset="50%" stop-color="#DC2626" />
      <stop offset="100%" stop-color="#7F1D1D" />
    </radialGradient>
    <radialGradient id="sapphire-gem" cx="35%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#93C5FD" />
      <stop offset="50%" stop-color="#2563EB" />
      <stop offset="100%" stop-color="#1E3A8A" />
    </radialGradient>
    <radialGradient id="emerald-gem" cx="35%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#86EFAC" />
      <stop offset="50%" stop-color="#16A34A" />
      <stop offset="100%" stop-color="#14532D" />
    </radialGradient>
    <radialGradient id="flame-grad" cx="50%" cy="80%" r="70%">
      <stop offset="0%" stop-color="#FEF08A" />
      <stop offset="40%" stop-color="#F59E0B" />
      <stop offset="80%" stop-color="#EA580C" />
      <stop offset="100%" stop-color="#DC2626" stop-opacity="0" />
    </radialGradient>

    <!-- Drop Shadows and Filters -->
    <filter id="art-shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="4" stdDeviation="5" flood-color="#000000" flood-opacity="0.25" />
    </filter>
    <filter id="soft-shadow" x="-15%" y="-15%" width="130%" height="130%">
      <feDropShadow dx="0" dy="3" stdDeviation="3.5" flood-color="#000000" flood-opacity="0.18" />
    </filter>
    <filter id="gold-glow" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="6" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>
`;

function renderRichMarigoldToran() {
  let s = `<g id="rich-toran" filter="url(#soft-shadow)">`;
  // Double swag lines
  s += `<path d="M 0,35 Q 182,105 365,60 Q 548,105 731,35" fill="none" stroke="#15803D" stroke-width="4.5" stroke-linecap="round"/>`;
  s += `<path d="M 0,55 Q 182,135 365,90 Q 548,135 731,55" fill="none" stroke="#166534" stroke-width="3" stroke-linecap="round"/>`;

  // Lush Mango Leaves
  for (let x = 20; x <= 710; x += 35) {
    const y = 35 + Math.sin((x / 731) * Math.PI) * 45;
    s += `<path d="M ${x},${y} C ${x-12},${y+22} ${x-8},${y+48} ${x},${y+65} C ${x+8},${y+48} ${x+12},${y+22} ${x},${y} Z" fill="#15803D" stroke="#14532D" stroke-width="0.8"/>`;
    s += `<line x1="${x}" y1="${y}" x2="${x}" y2="${y+58}" stroke="#4ADE80" stroke-width="1.2" opacity="0.65"/>`;
  }

  // Realistic Marigold Balls (Multi-layered shaded petals)
  for (let x = 16; x <= 715; x += 28) {
    const y = 35 + Math.sin((x / 731) * Math.PI) * 45;
    const isOrange = (Math.floor(x / 28) % 2 === 0);
    const c1 = isOrange ? "#EA580C" : "#F59E0B";
    const c2 = isOrange ? "#F97316" : "#FBBF24";
    const c3 = isOrange ? "#FEF08A" : "#FFFBEB";

    s += `<circle cx="${x}" cy="${y}" r="13" fill="${c1}"/>`;
    s += `<circle cx="${x}" cy="${y}" r="10" fill="${c2}"/>`;
    s += `<circle cx="${x}" cy="${y}" r="6" fill="${c3}" opacity="0.9"/>`;
    s += `<circle cx="${x}" cy="${y}" r="3" fill="#B45309"/>`;
  }

  // Hanging Garlands with Brass Bells
  [75, 190, 365, 540, 655].forEach((hx, idx) => {
    const len = idx === 2 ? 115 : (idx % 2 === 1 ? 95 : 75);
    const sy = 60 + Math.sin((hx / 731) * Math.PI) * 35;
    for (let y = sy; y < sy + len; y += 18) {
      const isO = (Math.floor(y / 18) % 2 === 0);
      s += `<circle cx="${hx}" cy="${y}" r="8" fill="${isO ? '#EA580C' : '#F59E0B'}"/>`;
      s += `<circle cx="${hx}" cy="${y}" r="5" fill="#FEF08A"/>`;
    }
    const by = sy + len + 8;
    // 3D Brass Bell
    s += `
      <path d="M ${hx-10},${by+14} C ${hx-8},${by} ${hx-5},${by-4} ${hx},${by-4} C ${hx+5},${by-4} ${hx+8},${by} ${hx+10},${by+14} Z" fill="url(#gold-sphere)" stroke="#78350F" stroke-width="1.2"/>
      <ellipse cx="${hx}" cy="${by+14}" rx="10" ry="3.5" fill="#B45309"/>
      <circle cx="${hx}" cy="${by+17}" r="3" fill="#FDE047"/>
    `;
  });
  s += `</g>`;
  return s;
}

function renderGlitterStars() {
  let s = `<g id="glitter-stars" filter="url(#gold-glow)">`;
  const pts = [
    {x: 45, y: 70, r: 11}, {x: 105, y: 115, r: 15}, {x: 175, y: 65, r: 13},
    {x: 255, y: 105, r: 17}, {x: 365, y: 70, r: 24}, {x: 475, y: 105, r: 17},
    {x: 555, y: 65, r: 13}, {x: 625, y: 115, r: 15}, {x: 685, y: 70, r: 11}
  ];
  pts.forEach(p => {
    s += `<line x1="${p.x}" y1="0" x2="${p.x}" y2="${p.y-p.r}" stroke="#FBBF24" stroke-width="1" stroke-dasharray="2,3" opacity="0.7"/>`;
    s += `<polygon points="${p.x},${p.y-p.r} ${p.x+p.r*0.28},${p.y-p.r*0.28} ${p.x+p.r},${p.y} ${p.x+p.r*0.28},${p.y+p.r*0.28} ${p.x},${p.y+p.r} ${p.x-p.r*0.28},${p.y+p.r*0.28} ${p.x-p.r},${p.y} ${p.x-p.r*0.28},${p.y-p.r*0.28}" fill="url(#gold-foil)" stroke="#FFF" stroke-width="0.8"/>`;
    s += `<circle cx="${p.x}" cy="${p.y}" r="${p.r*0.25}" fill="#FFF"/>`;
  });
  s += `</g>`;
  return s;
}

function renderLushBunting(colors) {
  let s = `<g id="lush-bunting" filter="url(#soft-shadow)">`;
  s += `<path d="M 0,45 Q 365,100 731,45" fill="none" stroke="#6B7280" stroke-width="2" stroke-dasharray="5,2"/>`;
  let ci = 0;
  for (let x = 40; x <= 690; x += 36) {
    const y = 45 + Math.sin((x / 731) * Math.PI) * 45;
    const c = colors[ci % colors.length];
    ci++;
    s += `<polygon points="${x-16},${y} ${x+16},${y} ${x},${y+32}" fill="${c}" stroke="#FFFFFF" stroke-width="1.2" opacity="0.95"/>`;
    s += `<circle cx="${x-15}" cy="${y}" r="2.5" fill="#FDE047"/>`;
    s += `<circle cx="${x}" cy="${y+31}" r="1.5" fill="#FFFFFF"/>`;
  }
  s += `</g>`;
  return s;
}

function renderLushPeoniesTop() {
  let s = `<g id="peonies-top" filter="url(#soft-shadow)">`;
  s += `<path d="M 30,35 Q 365,90 701,35" fill="none" stroke="#65A30D" stroke-width="2.5" opacity="0.7"/>`;
  for (let x = 45; x <= 685; x += 40) {
    const y = 35 + Math.sin((x / 731) * Math.PI) * 45;
    s += `<ellipse cx="${x}" cy="${y+10}" rx="16" ry="8" fill="#15803D" opacity="0.8" transform="rotate(-15 ${x} ${y+10})"/>`;
    s += `<ellipse cx="${x+12}" cy="${y+16}" rx="14" ry="7" fill="#16A34A" opacity="0.8" transform="rotate(25 ${x+12} ${y+16})"/>`;
    // Layered Peony Blossom
    s += `<circle cx="${x+6}" cy="${y+24}" r="12" fill="#BE185D" opacity="0.9"/>`;
    s += `<circle cx="${x+6}" cy="${y+24}" r="8" fill="#EC4899"/>`;
    s += `<circle cx="${x+6}" cy="${y+24}" r="5" fill="#F472B6"/>`;
    s += `<circle cx="${x+6}" cy="${y+24}" r="2" fill="#FDE047"/>`;
  }
  s += `</g>`;
  return s;
}

function renderOrnateFoilBorder(color = "url(#gold-foil)", inset = 24) {
  const w = 731 - inset * 2;
  const h = 1024 - inset * 2;
  const x = inset;
  const y = inset;
  return `
    <rect x="${x}" y="${y}" width="${w}" height="${h}" fill="none" stroke="${color}" stroke-width="2.2" rx="6" filter="url(#art-shadow)" />
    <rect x="${x+6}" y="${y+6}" width="${w-12}" height="${h-12}" fill="none" stroke="${color}" stroke-width="0.9" stroke-dasharray="5,4" opacity="0.6" rx="3"/>
    <!-- Ornate Corner Filigree -->
    <path d="M${x+2},${y+48} L${x+2},${y+2} L${x+48},${y+2}" fill="none" stroke="${color}" stroke-width="3" stroke-linecap="round"/>
    <path d="M${x+w-2},${y+48} L${x+w-2},${y+2} L${x+w-48},${y+2}" fill="none" stroke="${color}" stroke-width="3" stroke-linecap="round"/>
    <path d="M${x+2},${y+h-48} L${x+2},${y+h-2} L${x+48},${y+h-2}" fill="none" stroke="${color}" stroke-width="3" stroke-linecap="round"/>
    <path d="M${x+w-2},${y+h-48} L${x+w-2},${y+h-2} L${x+w-48},${y+h-2}" fill="none" stroke="${color}" stroke-width="3" stroke-linecap="round"/>
    <circle cx="${x+14}" cy="${y+14}" r="4" fill="${color}" filter="url(#gold-glow)"/>
    <circle cx="${x+w-14}" cy="${y+14}" r="4" fill="${color}" filter="url(#gold-glow)"/>
    <circle cx="${x+14}" cy="${y+h-14}" r="4" fill="${color}" filter="url(#gold-glow)"/>
    <circle cx="${x+w-14}" cy="${y+h-14}" r="4" fill="${color}" filter="url(#gold-glow)"/>
  `;
}

// -------------------------------------------------------------
// COMPLETE SPECIFICATIONS FOR THE 20 NEW TEMPLATES
// -------------------------------------------------------------
export const NEW_RICH_TEMPLATES = [
  // ==================== BIRTHDAY (5) ====================
  {
    id: "royal-prince-crown-birthday",
    slug: "royal-prince-crown-birthday",
    title: "Royal Prince Crown & Gold Confetti 1st Birthday",
    category: "birthday",
    categoryName: "Birthday Invitations",
    description: "Luxurious royal prince first birthday invitation featuring an ornate 3D golden crown, sapphire blue drapery, celebratory balloon bouquets, and royal gold confetti.",
    tags: ["Royal Prince", "1st Birthday", "Crown", "Gold Confetti", "Blue and Gold", "Boy Birthday"],
    featured: true,
    bgSvg: `
      <defs>
        <linearGradient id="bg-rpc" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#EFF6FF"/>
          <stop offset="35%" stop-color="#F8FAFC"/>
          <stop offset="70%" stop-color="#FFFDF7"/>
          <stop offset="100%" stop-color="#EFF6FF"/>
        </linearGradient>
        <radialGradient id="balloon-blue" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stop-color="#93C5FD"/>
          <stop offset="50%" stop-color="#3B82F6"/>
          <stop offset="100%" stop-color="#1E3A8A"/>
        </radialGradient>
        <radialGradient id="balloon-gold" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stop-color="#FEF08A"/>
          <stop offset="50%" stop-color="#F59E0B"/>
          <stop offset="100%" stop-color="#B45309"/>
        </radialGradient>
      </defs>
      <rect width="731" height="1024" fill="url(#bg-rpc)"/>
      ${renderOrnateFoilBorder("url(#gold-foil)", 24)}
      ${renderGlitterStars()}
      <!-- 3D Shaded Royal Crown at Top -->
      <g transform="translate(365, 125)" filter="url(#art-shadow)">
        <path d="M -70,25 C -40,32 40,32 70,25 L 85,-20 L 40,0 L 0,-45 L -40,0 L -85,-20 Z" fill="url(#gold-foil)" stroke="#92400E" stroke-width="2"/>
        <path d="M -65,15 C -45,-30 45,-30 65,15 Z" fill="#991B1B" opacity="0.85"/>
        <circle cx="0" cy="-45" r="9" fill="url(#ruby-gem)"/>
        <circle cx="-85" cy="-20" r="7" fill="url(#gold-sphere)"/>
        <circle cx="85" cy="-20" r="7" fill="url(#gold-sphere)"/>
        <circle cx="-40" cy="0" r="6" fill="url(#ruby-gem)"/>
        <circle cx="40" cy="0" r="6" fill="url(#ruby-gem)"/>
        <circle cx="-45" cy="23" r="4.5" fill="url(#sapphire-gem)"/>
        <circle cx="-15" cy="25" r="4.5" fill="url(#ruby-gem)"/>
        <circle cx="15" cy="25" r="4.5" fill="url(#ruby-gem)"/>
        <circle cx="45" cy="23" r="4.5" fill="url(#sapphire-gem)"/>
      </g>
      <!-- Bottom Royal Balloon Clusters and Ribbons -->
      <g transform="translate(365, 870)" filter="url(#art-shadow)">
        <g transform="translate(-160, 0)">
          <ellipse cx="-40" cy="15" rx="36" ry="46" fill="url(#balloon-blue)" transform="rotate(-15 -40 15)"/>
          <ellipse cx="10" cy="5" rx="38" ry="50" fill="url(#balloon-gold)" transform="rotate(10 10 5)"/>
          <ellipse cx="-15" cy="-35" rx="40" ry="52" fill="url(#balloon-blue)"/>
          <path d="M -40,55 Q -25,90 0,110" fill="none" stroke="#94A3B8" stroke-width="1.2"/>
          <path d="M 10,50 Q 5,85 0,110" fill="none" stroke="#94A3B8" stroke-width="1.2"/>
          <path d="M -15,12 Q -10,70 0,110" fill="none" stroke="#94A3B8" stroke-width="1.2"/>
        </g>
        <g transform="translate(160, 0)">
          <ellipse cx="40" cy="15" rx="36" ry="46" fill="url(#balloon-blue)" transform="rotate(15 40 15)"/>
          <ellipse cx="-10" cy="5" rx="38" ry="50" fill="url(#balloon-gold)" transform="rotate(-10 -10 5)"/>
          <ellipse cx="15" cy="-35" rx="40" ry="52" fill="url(#balloon-blue)"/>
          <path d="M 40,55 Q 25,90 0,110" fill="none" stroke="#94A3B8" stroke-width="1.2"/>
          <path d="M -10,50 Q -5,85 0,110" fill="none" stroke="#94A3B8" stroke-width="1.2"/>
          <path d="M 15,12 Q 10,70 0,110" fill="none" stroke="#94A3B8" stroke-width="1.2"/>
        </g>
        <circle cx="0" cy="30" r="28" fill="url(#gold-sphere)" filter="url(#gold-glow)"/>
        <polygon points="0,-18 5,-5 18,-5 8,4 12,16 0,8 -12,16 -8,4 -18,-5 -5,-5" fill="#FFF"/>
      </g>
    `,
    layers: [
      { id: "rpc-invoc", type: "text", text: "★ YOU ARE CORDIALLY INVITED TO CELEBRATE ★", fontFamily: "'Cinzel', serif", fontSize: 13, fontWeight: "600", color: "#1D4ED8", y: 195, height: 22, letterSpacing: 2.5 },
      { id: "rpc-sub", type: "text", text: "OUR PRECIOUS LITTLE PRINCE IS TURNING ONE!", fontFamily: "'Outfit', sans-serif", fontSize: 15, fontWeight: "600", color: "#475569", y: 235, height: 22, letterSpacing: 1.5 },
      { id: "rpc-name", type: "text", text: "Aarav Sharma", fontFamily: "'Playfair Display', serif", fontSize: 48, fontWeight: "bold", color: "#1E3A8A", y: 280, height: 58, letterSpacing: 1.5 },
      { id: "rpc-msg", type: "text", text: "Step into a magical kingdom of joy, sweet treats, and laughter as we celebrate our boy's first milestone year!", fontFamily: "'Outfit', sans-serif", fontSize: 15, fontWeight: "500", color: "#334155", y: 355, height: 44 },
      { id: "rpc-dt", type: "text", text: "Saturday, 18 April 2026 • 5:00 PM Onwards", fontFamily: "'Cinzel', serif", fontSize: 17, fontWeight: "bold", color: "#B45309", y: 415, height: 28, letterSpacing: 1 },
      { id: "rpc-venue", type: "text", text: "The Royal Orchid Banquet, Indiranagar, Bengaluru - 560038", fontFamily: "'Outfit', sans-serif", fontSize: 16, fontWeight: "600", color: "#1E293B", y: 465, height: 28 },
      { id: "rpc-rsvp", type: "text", text: "Warm Regards: Rohit & Ananya Sharma • Contact: +91 98860 12345", fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: "500", color: "#64748B", y: 520, height: 24 }
    ]
  },
  {
    id: "whimsical-hot-air-balloon-birthday",
    slug: "whimsical-hot-air-balloon-birthday",
    title: "Whimsical Hot Air Balloon & Clouds Birthday",
    category: "birthday",
    categoryName: "Birthday Invitations",
    description: "Charming pastel watercolor hot air balloon invitation with fluffy clouds, floating bunting, and sparkling golden stardust.",
    tags: ["Hot Air Balloon", "Clouds", "Pastel Birthday", "Whimsical", "Kids Party", "Up Up and Away"],
    featured: true,
    bgSvg: `
      <defs>
        <linearGradient id="bg-hab" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#FFF7ED"/>
          <stop offset="45%" stop-color="#FFFBEB"/>
          <stop offset="100%" stop-color="#FEF3C7"/>
        </linearGradient>
      </defs>
      <rect width="731" height="1024" fill="url(#bg-hab)"/>
      ${renderOrnateFoilBorder("#F59E0B", 24)}
      ${renderLushBunting(["#38BDF8", "#F472B6", "#FBBF24", "#34D399", "#A78BFA"])}
      <!-- Bottom Hot Air Balloon & Clouds -->
      <g transform="translate(365, 875)" filter="url(#art-shadow)">
        <ellipse cx="-140" cy="30" rx="90" ry="40" fill="#FFFFFF" opacity="0.95"/>
        <ellipse cx="140" cy="30" rx="90" ry="40" fill="#FFFFFF" opacity="0.95"/>
        <ellipse cx="0" cy="50" rx="130" ry="48" fill="#FFFFFF" opacity="0.98"/>
        <!-- Hot Air Balloon -->
        <g transform="translate(0, -50)">
          <path d="M 0,-70 C -48,-70 -60,-20 -25,25 L -15,40 L 15,40 L 25,25 C 60,-20 48,-70 0,-70 Z" fill="#F472B6" stroke="#DB2777" stroke-width="1.8"/>
          <path d="M 0,-70 C -20,-70 -25,-20 -10,40 L 10,40 C 25,-20 20,-70 0,-70 Z" fill="#38BDF8"/>
          <!-- Ropes & Basket -->
          <line x1="-10" y1="40" x2="-8" y2="52" stroke="#92400E" stroke-width="1.5"/>
          <line x1="10" y1="40" x2="8" y2="52" stroke="#92400E" stroke-width="1.5"/>
          <rect x="-14" y="52" width="28" height="20" rx="4" fill="#D97706" stroke="#92400E" stroke-width="1.2"/>
        </g>
      </g>
    `,
    layers: [
      { id: "hab-invoc", type: "text", text: "☁ UP, UP AND AWAY! ☁", fontFamily: "'Cinzel', serif", fontSize: 14, fontWeight: "600", color: "#0284C7", y: 195, height: 22, letterSpacing: 2 },
      { id: "hab-sub", type: "text", text: "COME FLY HIGH WITH US AS WE CELEBRATE", fontFamily: "'Outfit', sans-serif", fontSize: 14, fontWeight: "600", color: "#64748B", y: 235, height: 22, letterSpacing: 1.5 },
      { id: "hab-name", type: "text", text: "Ishaan's 2nd Birthday", fontFamily: "'Playfair Display', serif", fontSize: 44, fontWeight: "bold", color: "#0369A1", y: 280, height: 56, letterSpacing: 1 },
      { id: "hab-msg", type: "text", text: "Our little adventurer is floating into year two! Come enjoy sky-high games, delicious cake, and endless giggles.", fontFamily: "'Outfit', sans-serif", fontSize: 15, fontWeight: "500", color: "#334155", y: 355, height: 44 },
      { id: "hab-dt", type: "text", text: "Sunday, 10 May 2026 • 4:30 PM", fontFamily: "'Cinzel', serif", fontSize: 17, fontWeight: "bold", color: "#D97706", y: 415, height: 28, letterSpacing: 1 },
      { id: "hab-venue", type: "text", text: "Palm Meadows Club, Whitefield, Bengaluru - 560066", fontFamily: "'Outfit', sans-serif", fontSize: 16, fontWeight: "600", color: "#1E293B", y: 465, height: 28 },
      { id: "hab-rsvp", type: "text", text: "Warm Wishes: Kapoor & Khanna Families", fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: "500", color: "#64748B", y: 520, height: 24 }
    ]
  },
  {
    id: "enchanted-fairy-garden-birthday",
    slug: "enchanted-fairy-garden-birthday",
    title: "Enchanted Fairy Garden & Peony Birthday",
    category: "birthday",
    categoryName: "Birthday Invitations",
    description: "Magical fairy garden birthday card adorned with delicate blush peonies, fluttering golden butterflies, and fairy dust sparkles.",
    tags: ["Fairy Garden", "Peony", "Blush Pink", "Girl Birthday", "Butterfly", "Magical"],
    featured: true,
    bgSvg: `
      <defs>
        <linearGradient id="bg-efg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#FFF1F2"/>
          <stop offset="45%" stop-color="#FDF2F8"/>
          <stop offset="100%" stop-color="#FCE7F3"/>
        </linearGradient>
      </defs>
      <rect width="731" height="1024" fill="url(#bg-efg)"/>
      ${renderOrnateFoilBorder("#DB2777", 24)}
      ${renderLushPeoniesTop()}
      <!-- Bottom Fairy Garden Floral & Butterfly -->
      <g transform="translate(365, 880)" filter="url(#art-shadow)">
        <ellipse cx="0" cy="50" rx="200" ry="35" fill="#FBCFE8" opacity="0.6"/>
        <circle cx="-100" cy="0" r="32" fill="#F472B6" opacity="0.9"/>
        <circle cx="-100" cy="0" r="22" fill="#FB7185"/>
        <circle cx="-100" cy="0" r="10" fill="#FFF"/>
        <circle cx="100" cy="0" r="32" fill="#F472B6" opacity="0.9"/>
        <circle cx="100" cy="0" r="22" fill="#FB7185"/>
        <circle cx="100" cy="0" r="10" fill="#FFF"/>
        <circle cx="0" cy="-10" r="38" fill="#EC4899"/>
        <circle cx="0" cy="-10" r="26" fill="#F43F5E"/>
        <circle cx="0" cy="-10" r="12" fill="#FDE047"/>
        <!-- Shaded Butterflies -->
        <g transform="translate(-160, -60) rotate(-20)">
          <ellipse cx="-12" cy="-8" rx="16" ry="10" fill="url(#gold-sphere)"/>
          <ellipse cx="12" cy="-8" rx="16" ry="10" fill="url(#gold-sphere)"/>
          <line x1="0" y1="-18" x2="0" y2="18" stroke="#78350F" stroke-width="2.5"/>
        </g>
        <g transform="translate(160, -60) rotate(20)">
          <ellipse cx="-12" cy="-8" rx="16" ry="10" fill="url(#gold-sphere)"/>
          <ellipse cx="12" cy="-8" rx="16" ry="10" fill="url(#gold-sphere)"/>
          <line x1="0" y1="-18" x2="0" y2="18" stroke="#78350F" stroke-width="2.5"/>
        </g>
      </g>
    `,
    layers: [
      { id: "efg-invoc", type: "text", text: "🌸 A MAGICAL GARDEN CELEBRATION 🌸", fontFamily: "'Cinzel', serif", fontSize: 13, fontWeight: "600", color: "#BE185D", y: 195, height: 22, letterSpacing: 2 },
      { id: "efg-sub", type: "text", text: "ONCE UPON A TIME IN A FAIRY TALE WONDERLAND", fontFamily: "'Outfit', sans-serif", fontSize: 14, fontWeight: "600", color: "#701A75", y: 235, height: 22, letterSpacing: 1.5 },
      { id: "efg-name", type: "text", text: "Princess Anvi Turns 3", fontFamily: "'Playfair Display', serif", fontSize: 44, fontWeight: "bold", color: "#9D174D", y: 280, height: 56, letterSpacing: 1 },
      { id: "efg-msg", type: "text", text: "Spread your wings and flutter by! Join us in an enchanted garden of joy, sweet cupcakes, and sparkling laughter.", fontFamily: "'Outfit', sans-serif", fontSize: 15, fontWeight: "500", color: "#4A044E", y: 355, height: 44 },
      { id: "efg-dt", type: "text", text: "Saturday, 23 May 2026 • 4:00 PM", fontFamily: "'Cinzel', serif", fontSize: 17, fontWeight: "bold", color: "#BE185D", y: 415, height: 28, letterSpacing: 1 },
      { id: "efg-venue", type: "text", text: "Rosewood Manor, Jubilee Hills, Hyderabad - 500033", fontFamily: "'Outfit', sans-serif", fontSize: 16, fontWeight: "600", color: "#374151", y: 465, height: 28 },
      { id: "efg-rsvp", type: "text", text: "RSVP: Rahul & Sneha Patel • Contact: +91 97000 54321", fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: "500", color: "#6B7280", y: 520, height: 24 }
    ]
  },
  {
    id: "cosmic-astronaut-galaxy-birthday",
    slug: "cosmic-astronaut-galaxy-birthday",
    title: "Cosmic Space Astronaut & Galaxy Kids Birthday",
    category: "birthday",
    categoryName: "Birthday Invitations",
    description: "Epic deep midnight cosmic invitation featuring a retro space rocket, planets with orbital rings, and twinkling constellation stars.",
    tags: ["Space", "Astronaut", "Galaxy", "Rocket", "Midnight Navy", "Boy Birthday"],
    featured: true,
    bgSvg: `
      <defs>
        <linearGradient id="bg-cag" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#0F172A"/>
          <stop offset="45%" stop-color="#1E1B4B"/>
          <stop offset="100%" stop-color="#020617"/>
        </linearGradient>
      </defs>
      <rect width="731" height="1024" fill="url(#bg-cag)"/>
      ${renderOrnateFoilBorder("#38BDF8", 24)}
      ${renderGlitterStars()}
      <!-- Saturn -->
      <g transform="translate(100, 140)" filter="url(#art-shadow)">
        <circle cx="0" cy="0" r="24" fill="#F59E0B"/>
        <ellipse cx="0" cy="0" rx="42" ry="10" fill="none" stroke="#FDE047" stroke-width="4.5" transform="rotate(-25)"/>
      </g>
      <!-- Moon -->
      <g transform="translate(630, 140)" filter="url(#gold-glow)">
        <path d="M 0,-25 A 25 25 0 0 0 20,20 A 20 20 0 1 1 0,-25 Z" fill="#FDE047"/>
      </g>
      <!-- Bottom Rocket -->
      <g transform="translate(365, 875)" filter="url(#art-shadow)">
        <path d="M -300,60 Q 0,0 300,60 L 300,120 L -300,120 Z" fill="#1E293B"/>
        <g transform="translate(0, -35) rotate(-15)">
          <path d="M 0,-50 C -20,-30 -20,20 -15,40 L 15,40 C 20,20 20,-30 0,-50 Z" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="2"/>
          <path d="M 0,-50 C -15,-35 -15,-20 0,-20 C 15,-20 15,-35 0,-50 Z" fill="#EF4444"/>
          <circle cx="0" cy="-5" r="11" fill="#38BDF8" stroke="#0284C7" stroke-width="2.5"/>
          <path d="M -15,20 L -34,45 L -15,40 Z" fill="#EF4444"/>
          <path d="M 15,20 L 34,45 L 15,40 Z" fill="#EF4444"/>
          <polygon points="-8,42 0,68 8,42" fill="#F59E0B"/>
          <polygon points="-4,42 0,55 4,42" fill="#FDE047"/>
        </g>
      </g>
    `,
    layers: [
      { id: "cag-invoc", type: "text", text: "🚀 3... 2... 1... BLAST OFF! 🚀", fontFamily: "'Cinzel', serif", fontSize: 13, fontWeight: "bold", color: "#38BDF8", y: 195, height: 22, letterSpacing: 2.5 },
      { id: "cag-sub", type: "text", text: "JOIN OUR ASTRONAUT CREW FOR AN OUT OF THIS WORLD CELEBRATION", fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: "600", color: "#94A3B8", y: 235, height: 22, letterSpacing: 1.5 },
      { id: "cag-name", type: "text", text: "Reyansh's 5th Birthday", fontFamily: "'Playfair Display', serif", fontSize: 44, fontWeight: "bold", color: "#F8FAFC", y: 280, height: 56, letterSpacing: 1.5 },
      { id: "cag-msg", type: "text", text: "Put on your space helmets and get ready for a cosmic mission filled with galactic games, astronaut snacks, and rocket fun!", fontFamily: "'Outfit', sans-serif", fontSize: 15, fontWeight: "500", color: "#CBD5E1", y: 355, height: 44 },
      { id: "cag-dt", type: "text", text: "Sunday, 7 June 2026 • 5:00 PM", fontFamily: "'Cinzel', serif", fontSize: 17, fontWeight: "bold", color: "#FDE047", y: 415, height: 28, letterSpacing: 1 },
      { id: "cag-venue", type: "text", text: "Starlight Arena, HSR Layout Sector 2, Bengaluru - 560102", fontFamily: "'Outfit', sans-serif", fontSize: 16, fontWeight: "600", color: "#F1F5F9", y: 465, height: 28 },
      { id: "cag-rsvp", type: "text", text: "With Love: Vikram & Neha Verma • RSVP: +91 98450 67890", fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: "500", color: "#94A3B8", y: 520, height: 24 }
    ]
  },
  {
    id: "boho-woodland-safari-birthday",
    slug: "boho-woodland-safari-birthday",
    title: "Boho Woodland Safari & Party Cake Birthday",
    category: "birthday",
    categoryName: "Birthday Invitations",
    description: "Cute earthy boho woodland animals invitation with eucalyptus wreath, party bunting garland, and sweet birthday animal friends.",
    tags: ["Woodland Safari", "Boho Birthday", "Lion Cub", "Eucalyptus", "Party Cake", "Cute Animals"],
    featured: true,
    bgSvg: `
      <defs>
        <linearGradient id="bg-bws" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#FEFCE8"/>
          <stop offset="45%" stop-color="#FDFBF7"/>
          <stop offset="100%" stop-color="#FEF9C3"/>
        </linearGradient>
      </defs>
      <rect width="731" height="1024" fill="url(#bg-bws)"/>
      ${renderOrnateFoilBorder("#CA8A04", 24)}
      ${renderLushBunting(["#EAB308", "#84CC16", "#F97316", "#14B8A6", "#EC4899"])}
      <!-- Bottom Woodland Safari Animals & Cake -->
      <g transform="translate(365, 875)" filter="url(#art-shadow)">
        <ellipse cx="0" cy="50" rx="220" ry="35" fill="#FEF08A" opacity="0.6"/>
        <!-- Lion Cub with Mane -->
        <g transform="translate(-110, 0)">
          <circle cx="0" cy="0" r="34" fill="#D97706"/>
          <circle cx="0" cy="0" r="26" fill="#FBBF24"/>
          <circle cx="-18" cy="-18" r="8" fill="#F59E0B"/>
          <circle cx="18" cy="-18" r="8" fill="#F59E0B"/>
          <circle cx="-9" cy="-3" r="3.5" fill="#1E293B"/>
          <circle cx="9" cy="-3" r="3.5" fill="#1E293B"/>
          <polygon points="-5,5 5,5 0,10" fill="#92400E"/>
        </g>
        <!-- Birthday Cake in center -->
        <g transform="translate(0, 10)">
          <rect x="-35" y="-10" width="70" height="35" rx="5" fill="#F472B6"/>
          <rect x="-25" y="-30" width="50" height="22" rx="4" fill="#FDE047"/>
          <rect x="-3" y="-45" width="6" height="16" fill="#38BDF8"/>
          <ellipse cx="0" cy="-50" rx="4" ry="7" fill="url(#flame-grad)"/>
        </g>
        <!-- Cute Deer -->
        <g transform="translate(110, 0)">
          <circle cx="0" cy="0" r="28" fill="#F97316"/>
          <ellipse cx="-20" cy="-22" rx="7" ry="14" fill="#EA580C" transform="rotate(-20 -20 -22)"/>
          <ellipse cx="20" cy="-22" rx="7" ry="14" fill="#EA580C" transform="rotate(20 20 -22)"/>
          <circle cx="-8" cy="-4" r="3.5" fill="#1E293B"/>
          <circle cx="8" cy="-4" r="3.5" fill="#1E293B"/>
          <circle cx="0" cy="5" r="4" fill="#7C2D12"/>
        </g>
      </g>
    `,
    layers: [
      { id: "bws-invoc", type: "text", text: "🌿 WILD & WONDERFUL CELEBRATION 🌿", fontFamily: "'Cinzel', serif", fontSize: 13, fontWeight: "600", color: "#65A30D", y: 195, height: 22, letterSpacing: 2 },
      { id: "bws-sub", type: "text", text: "JOIN OUR JUNGLE PACK AS OUR LITTLE ROARER TURNS TWO", fontFamily: "'Outfit', sans-serif", fontSize: 14, fontWeight: "600", color: "#78350F", y: 235, height: 22, letterSpacing: 1.5 },
      { id: "bws-name", type: "text", text: "Vihaan Joshi Turns 2", fontFamily: "'Playfair Display', serif", fontSize: 44, fontWeight: "bold", color: "#B45309", y: 280, height: 56, letterSpacing: 1 },
      { id: "bws-msg", type: "text", text: "Grab your safari hats! Join us for a roaring good time with jungle games, delicious cake, and happy surprises.", fontFamily: "'Outfit', sans-serif", fontSize: 15, fontWeight: "500", color: "#451A03", y: 355, height: 44 },
      { id: "bws-dt", type: "text", text: "Sunday, 21 June 2026 • 4:30 PM", fontFamily: "'Cinzel', serif", fontSize: 17, fontWeight: "bold", color: "#EA580C", y: 415, height: 28, letterSpacing: 1 },
      { id: "bws-venue", type: "text", text: "Green Valley Country Club, Aundh, Pune - 411007", fontFamily: "'Outfit', sans-serif", fontSize: 16, fontWeight: "600", color: "#1F2937", y: 465, height: 28 },
      { id: "bws-rsvp", type: "text", text: "Warm Regards: Amit & Pooja Joshi • RSVP: +91 98220 12345", fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: "500", color: "#78350F", y: 520, height: 24 }
    ]
  },

  // ==================== BABY SHOWER (5) ====================
  {
    id: "traditional-dohale-jevan-jhula-baby-shower",
    slug: "traditional-dohale-jevan-jhula-baby-shower",
    title: "Traditional Dohale Jevan Floral Jhula Baby Shower",
    category: "baby-shower",
    categoryName: "Baby Shower & Godh Bharai",
    description: "Auspicious Maharashtrian Dohale Jevan and South Indian Seemantham invitation featuring a decorated floral wooden swing, marigold torans, and temple bells.",
    tags: ["Dohale Jevan", "Baby Shower", "Jhula Swing", "Marigold", "Seemantham", "Traditional Indian"],
    featured: true,
    bgSvg: `
      <defs>
        <linearGradient id="bg-tdj" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#FFFBEB"/>
          <stop offset="45%" stop-color="#FEF9C3"/>
          <stop offset="100%" stop-color="#FEF08A"/>
        </linearGradient>
      </defs>
      <rect width="731" height="1024" fill="url(#bg-tdj)"/>
      ${renderOrnateFoilBorder("url(#gold-foil)", 24)}
      ${renderRichMarigoldToran()}
      <!-- Bottom Decorated Floral Jhula Swing -->
      <g transform="translate(365, 875)" filter="url(#art-shadow)">
        <line x1="-130" y1="-80" x2="-100" y2="15" stroke="#92400E" stroke-width="4.5"/>
        <line x1="130" y1="-80" x2="100" y2="15" stroke="#92400E" stroke-width="4.5"/>
        <circle cx="-115" cy="-30" r="10" fill="#EA580C"/>
        <circle cx="-108" cy="0" r="10" fill="#F59E0B"/>
        <circle cx="115" cy="-30" r="10" fill="#EA580C"/>
        <circle cx="108" cy="0" r="10" fill="#F59E0B"/>
        <!-- Wooden Plank -->
        <rect x="-120" y="15" width="240" height="22" rx="6" fill="#78350F" stroke="#451A03" stroke-width="2.5"/>
        <ellipse cx="0" cy="12" rx="85" ry="15" fill="#DC2626"/>
        <ellipse cx="0" cy="10" rx="65" ry="11" fill="#FEF08A"/>
        <!-- Lit Diyas -->
        <g transform="translate(-180, 25)">
          <path d="M -16,6 Q 0,18 16,6 Q 0,-4 -16,6 Z" fill="url(#gold-sphere)"/>
          <ellipse cx="0" cy="-6" rx="4.5" ry="10" fill="url(#flame-grad)"/>
        </g>
        <g transform="translate(180, 25)">
          <path d="M -16,6 Q 0,18 16,6 Q 0,-4 -16,6 Z" fill="url(#gold-sphere)"/>
          <ellipse cx="0" cy="-6" rx="4.5" ry="10" fill="url(#flame-grad)"/>
        </g>
      </g>
    `,
    layers: [
      { id: "tdj-invoc", type: "text", text: "|| श्री गणेशाय नमः ||", fontFamily: "'Rozha One', serif", fontSize: 20, fontWeight: "normal", color: "#B45309", y: 195, height: 28 },
      { id: "tdj-sub", type: "text", text: "INVITATION TO AUSPICIOUS DOHALE JEVAN & SEEMANTHAM", fontFamily: "'Cinzel', serif", fontSize: 13, fontWeight: "600", color: "#78350F", y: 240, height: 22, letterSpacing: 2 },
      { id: "tdj-name", type: "text", text: "Radhika & Aditya", fontFamily: "'Playfair Display', serif", fontSize: 46, fontWeight: "bold", color: "#991B1B", y: 285, height: 58, letterSpacing: 1.5 },
      { id: "tdj-msg", type: "text", text: "With love in our hearts and blessings in the air, we joyfully invite you to shower the mother-to-be and our upcoming blessing.", fontFamily: "'Outfit', sans-serif", fontSize: 15, fontWeight: "500", color: "#451A03", y: 360, height: 42 },
      { id: "tdj-dt", type: "text", text: "Sunday, 12 July 2026 • 11:30 AM", fontFamily: "'Cinzel', serif", fontSize: 17, fontWeight: "bold", color: "#B45309", y: 415, height: 28, letterSpacing: 1 },
      { id: "tdj-venue", type: "text", text: "Mahalaxmi Sanskritik Bhavan, Shivaji Nagar, Pune - 411005", fontFamily: "'Outfit', sans-serif", fontSize: 16, fontWeight: "600", color: "#1F2937", y: 465, height: 28 },
      { id: "tdj-rsvp", type: "text", text: "Warm Welcome: Deshmukh & Kulkarni Families", fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: "500", color: "#78350F", y: 520, height: 24 }
    ]
  },





  // ==================== HOUSEWARMING (5) ====================
  {
    id: "sacred-kalash-swastik-griha-pravesh",
    slug: "sacred-kalash-swastik-griha-pravesh",
    title: "Auspicious Mangal Kalash & Swastik Griha Pravesh",
    category: "housewarming",
    categoryName: "Housewarming & Griha Pravesh",
    description: "Traditional Hindu Griha Pravesh and Vastu Pooja invitation featuring an auspicious brass Kalash, coconut, fresh mango leaves, and lit ghee diyas.",
    tags: ["Griha Pravesh", "Mangal Kalash", "Swastik", "Vastu Shanti", "Housewarming", "Traditional"],
    featured: true,
    bgSvg: `
      <defs>
        <linearGradient id="bg-sks" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#FFFBEB"/>
          <stop offset="45%" stop-color="#FEF3C7"/>
          <stop offset="100%" stop-color="#FDE68A"/>
        </linearGradient>
      </defs>
      <rect width="731" height="1024" fill="url(#bg-sks)"/>
      ${renderOrnateFoilBorder("url(#gold-foil)", 24)}
      ${renderRichMarigoldToran()}
      <!-- Bottom Auspicious Kalash, Coconut, and Diyas on Rangoli -->
      <g transform="translate(365, 875)" filter="url(#art-shadow)">
        <circle cx="0" cy="30" r="140" fill="#FEF08A" opacity="0.6"/>
        <circle cx="0" cy="30" r="100" fill="#FED7AA" opacity="0.8"/>
        <!-- Sacred Kalash Pot -->
        <path d="M -42,30 C -48,10 -36,-15 0,-15 C 36,-15 48,10 42,30 Z" fill="url(#gold-sphere)" stroke="#78350F" stroke-width="2.2"/>
        <rect x="-32" y="30" width="64" height="13" rx="4" fill="#B45309"/>
        <!-- Swastik on Kalash -->
        <path d="M 0,-5 L 0,15 M -10,5 L 10,5 M 0,-5 L 8,-5 M 10,5 L 10,13 M 0,15 L -8,15 M -10,5 L -10,-3" stroke="#DC2626" stroke-width="2.5" stroke-linecap="round"/>
        <!-- Mango Leaves -->
        <path d="M -26,-15 C -48,-38 -32,-52 -16,-30 Z" fill="#15803D" stroke="#14532D" stroke-width="1"/>
        <path d="M 26,-15 C 48,-38 32,-52 16,-30 Z" fill="#15803D" stroke="#14532D" stroke-width="1"/>
        <path d="M 0,-15 C 0,-48 12,-48 0,-15 Z" fill="#16A34A" stroke="#14532D" stroke-width="1"/>
        <!-- Coconut -->
        <ellipse cx="0" cy="-30" rx="20" ry="26" fill="#78350F"/>
        <!-- Diyas with Glowing Flame -->
        <g transform="translate(-140, 25)">
          <path d="M -16,6 Q 0,18 16,6 Q 0,-4 -16,6 Z" fill="url(#gold-sphere)"/>
          <ellipse cx="0" cy="-6" rx="4.5" ry="10" fill="url(#flame-grad)"/>
        </g>
        <g transform="translate(140, 25)">
          <path d="M -16,6 Q 0,18 16,6 Q 0,-4 -16,6 Z" fill="url(#gold-sphere)"/>
          <ellipse cx="0" cy="-6" rx="4.5" ry="10" fill="url(#flame-grad)"/>
        </g>
      </g>
    `,
    layers: [
      { id: "sks-invoc", type: "text", text: "|| ॐ श्री गणेशाय नमः ||", fontFamily: "'Rozha One', serif", fontSize: 20, fontWeight: "normal", color: "#B45309", y: 195, height: 28 },
      { id: "sks-sub", type: "text", text: "INVITATION TO AUSPICIOUS GRIHA PRAVESH & VASTU POOJA", fontFamily: "'Cinzel', serif", fontSize: 13, fontWeight: "600", color: "#78350F", y: 240, height: 22, letterSpacing: 2 },
      { id: "sks-name", type: "text", text: "Rajesh & Meera Hegde", fontFamily: "'Playfair Display', serif", fontSize: 46, fontWeight: "bold", color: "#991B1B", y: 285, height: 58, letterSpacing: 1.5 },
      { id: "sks-msg", type: "text", text: "With the divine grace of our ancestors and the Almighty, we step across the threshold of our new abode. Please join us for Vastu Pooja & Lunch.", fontFamily: "'Outfit', sans-serif", fontSize: 15, fontWeight: "500", color: "#451A03", y: 360, height: 42 },
      { id: "sks-dt", type: "text", text: "Sunday, 4 October 2026 • 9:30 AM", fontFamily: "'Cinzel', serif", fontSize: 17, fontWeight: "bold", color: "#B45309", y: 415, height: 28, letterSpacing: 1 },
      { id: "sks-venue", type: "text", text: "Villa 42, Palm Meadows Estates, Sarjapur Road, Bengaluru - 562125", fontFamily: "'Outfit', sans-serif", fontSize: 16, fontWeight: "600", color: "#1F2937", y: 465, height: 28 },
      { id: "sks-rsvp", type: "text", text: "Warm Welcome: Hegde Family • RSVP: +91 98450 11223", fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: "500", color: "#78350F", y: 520, height: 24 }
    ]
  },
  {
    id: "kamadhenu-holy-cow-housewarming",
    slug: "kamadhenu-holy-cow-housewarming",
    title: "Sacred Kamadhenu & Lotus Vastu Housewarming",
    category: "housewarming",
    categoryName: "Housewarming & Griha Pravesh",
    description: "Pichwai-style sacred housewarming invitation with mother Kamadhenu cow and calf, lotus pond, and auspicious Kadamba canopy.",
    tags: ["Kamadhenu", "Gau Pooja", "Pichwai", "Lotus Pond", "Griha Pravesh", "Sacred Housewarming"],
    featured: true,
    bgSvg: `
      <defs>
        <linearGradient id="bg-khc" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#FCFAF2"/>
          <stop offset="45%" stop-color="#FEF9E7"/>
          <stop offset="100%" stop-color="#F5EFE0"/>
        </linearGradient>
      </defs>
      <rect width="731" height="1024" fill="url(#bg-khc)"/>
      ${renderOrnateFoilBorder("url(#gold-foil)", 24)}
      ${renderRichMarigoldToran()}
      <!-- Bottom Holy Cow & Calf Motif -->
      <g transform="translate(365, 875)" filter="url(#art-shadow)">
        <ellipse cx="0" cy="50" rx="220" ry="35" fill="#FEF3C7" opacity="0.7"/>
        <g transform="translate(-40, 0)">
          <ellipse cx="0" cy="10" rx="68" ry="40" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="2.2"/>
          <path d="M -30,0 Q 0,16 30,0 L 25,26 Q 0,36 -25,26 Z" fill="#DC2626"/>
          <ellipse cx="62" cy="-10" rx="22" ry="28" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1.8"/>
          <path d="M 56,-32 Q 52,-52 42,-54" fill="none" stroke="url(#gold-foil)" stroke-width="3.5"/>
          <path d="M 68,-32 Q 72,-52 82,-54" fill="none" stroke="url(#gold-foil)" stroke-width="3.5"/>
          <circle cx="52" cy="8" r="6" fill="url(#gold-sphere)"/>
        </g>
        <g transform="translate(75, 15)">
          <ellipse cx="0" cy="5" rx="34" ry="22" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1.8"/>
          <ellipse cx="-26" cy="-8" rx="13" ry="16" fill="#FFFFFF"/>
        </g>
      </g>
    `,
    layers: [
      { id: "khc-invoc", type: "text", text: "|| शुभ गृहप्रवेश ||", fontFamily: "'Rozha One', serif", fontSize: 20, fontWeight: "normal", color: "#B45309", y: 195, height: 28 },
      { id: "khc-sub", type: "text", text: "INVITATION TO AUSPICIOUS GAU POOJA & GRIHA PRAVESH", fontFamily: "'Cinzel', serif", fontSize: 13, fontWeight: "600", color: "#78350F", y: 240, height: 22, letterSpacing: 2 },
      { id: "khc-name", type: "text", text: "Ashok & Vandana Sharma", fontFamily: "'Playfair Display', serif", fontSize: 46, fontWeight: "bold", color: "#991B1B", y: 285, height: 58, letterSpacing: 1.5 },
      { id: "khc-msg", type: "text", text: "We seek your gracious presence and blessings as we perform sacred Gau Pooja and step into our newly built dream home.", fontFamily: "'Outfit', sans-serif", fontSize: 15, fontWeight: "500", color: "#451A03", y: 360, height: 42 },
      { id: "khc-dt", type: "text", text: "Friday, 16 October 2026 • 10:00 AM", fontFamily: "'Cinzel', serif", fontSize: 17, fontWeight: "bold", color: "#B45309", y: 415, height: 28, letterSpacing: 1 },
      { id: "khc-venue", type: "text", text: "Aashirwad, Plot 108, Model Town, Jaipur - 302017", fontFamily: "'Outfit', sans-serif", fontSize: 16, fontWeight: "600", color: "#1F2937", y: 465, height: 28 },
      { id: "khc-rsvp", type: "text", text: "Warm Greetings: Sharma Family • RSVP: +91 94140 98765", fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: "500", color: "#78350F", y: 520, height: 24 }
    ]
  },
  {
    id: "traditional-wooden-doors-toran-housewarming",
    slug: "traditional-wooden-doors-toran-housewarming",
    title: "Traditional Carved Wooden Doors & Marigold Housewarming",
    category: "housewarming",
    categoryName: "Housewarming & Griha Pravesh",
    description: "Heritage Indian home entrance invitation featuring carved teak double doors, fresh mango leaf toran, and glowing brass urlis with floating rose petals.",
    tags: ["Wooden Doors", "Entrance", "Toran", "Urli", "Housewarming", "Heritage Indian"],
    featured: true,
    bgSvg: `
      <defs>
        <linearGradient id="bg-twd" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#FCFAF5"/>
          <stop offset="45%" stop-color="#FFFDF8"/>
          <stop offset="100%" stop-color="#F4EADB"/>
        </linearGradient>
      </defs>
      <rect width="731" height="1024" fill="url(#bg-twd)"/>
      ${renderOrnateFoilBorder("#92400E", 24)}
      ${renderRichMarigoldToran()}
      <!-- Bottom Heritage Carved Wooden Doors & Urli -->
      <g transform="translate(365, 875)" filter="url(#art-shadow)">
        <ellipse cx="0" cy="50" rx="220" ry="35" fill="#E5E7EB" opacity="0.6"/>
        <rect x="-95" y="-75" width="190" height="125" fill="#78350F" stroke="#451A03" stroke-width="3.5"/>
        <line x1="0" y1="-75" x2="0" y2="50" stroke="#451A03" stroke-width="2.5"/>
        <circle cx="-14" cy="-5" r="5.5" fill="url(#gold-sphere)"/>
        <circle cx="14" cy="-5" r="5.5" fill="url(#gold-sphere)"/>
        <ellipse cx="0" cy="45" rx="38" ry="13" fill="url(#gold-sphere)" stroke="#92400E" stroke-width="1.8"/>
        <circle cx="-13" cy="43" r="3.5" fill="#DC2626"/>
        <circle cx="0" cy="44" r="4" fill="#F472B6"/>
        <circle cx="13" cy="43" r="3.5" fill="#DC2626"/>
      </g>
    `,
    layers: [
      { id: "twd-invoc", type: "text", text: "|| गृहप्रवेशस्य शुभाशयाः ||", fontFamily: "'Rozha One', serif", fontSize: 20, fontWeight: "normal", color: "#92400E", y: 195, height: 28 },
      { id: "twd-sub", type: "text", text: "OPENING OUR DOORS TO NEW BLESSINGS & MEMORIES", fontFamily: "'Cinzel', serif", fontSize: 13, fontWeight: "600", color: "#78350F", y: 240, height: 22, letterSpacing: 2 },
      { id: "twd-name", type: "text", text: "Kavita & Suresh Nair", fontFamily: "'Playfair Display', serif", fontSize: 46, fontWeight: "bold", color: "#7C2D12", y: 285, height: 58, letterSpacing: 1.5 },
      { id: "twd-msg", type: "text", text: "Our dream home is finally complete! We warmly invite you with family to grace our housewarming ceremony followed by traditional lunch feast.", fontFamily: "'Outfit', sans-serif", fontSize: 15, fontWeight: "500", color: "#451A03", y: 360, height: 42 },
      { id: "twd-dt", type: "text", text: "Sunday, 1 November 2026 • 10:30 AM", fontFamily: "'Cinzel', serif", fontSize: 17, fontWeight: "bold", color: "#92400E", y: 415, height: 28, letterSpacing: 1 },
      { id: "twd-venue", type: "text", text: "Nair Villa, Netaji Nagar, Kadavanthra, Kochi - 682020", fontFamily: "'Outfit', sans-serif", fontSize: 16, fontWeight: "600", color: "#1F2937", y: 465, height: 28 },
      { id: "twd-rsvp", type: "text", text: "Warm Welcome: Nair & Menon Families • RSVP: +91 98470 54321", fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: "500", color: "#78350F", y: 520, height: 24 }
    ]
  },
  {
    id: "modern-luxury-villa-twilight-housewarming",
    slug: "modern-luxury-villa-twilight-housewarming",
    title: "Modern Architectural Villa & Fairylights Housewarming",
    category: "housewarming",
    categoryName: "Housewarming & Griha Pravesh",
    description: "Chic contemporary housewarming invitation featuring a glowing luxury villa at twilight, string fairylights, and champagne gold border.",
    tags: ["Modern Villa", "Twilight", "Contemporary", "Fairylights", "Housewarming", "Luxury Home"],
    featured: true,
    bgSvg: `
      <defs>
        <linearGradient id="bg-mlv" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#1E293B"/>
          <stop offset="45%" stop-color="#334155"/>
          <stop offset="100%" stop-color="#0F172A"/>
        </linearGradient>
      </defs>
      <rect width="731" height="1024" fill="url(#bg-mlv)"/>
      ${renderOrnateFoilBorder("url(#gold-foil)", 24)}
      ${renderGlitterStars()}
      <!-- Bottom Modern Villa Silhouette with Glowing Glass Windows -->
      <g transform="translate(365, 875)" filter="url(#art-shadow)">
        <ellipse cx="0" cy="50" rx="220" ry="35" fill="#020617"/>
        <rect x="-120" y="-55" width="140" height="85" fill="#0F172A" stroke="#334155" stroke-width="1.8"/>
        <rect x="20" y="-35" width="100" height="65" fill="#1E293B" stroke="#334155" stroke-width="1.8"/>
        <rect x="-105" y="-45" width="50" height="35" rx="3" fill="#FEF08A" opacity="0.95" filter="url(#gold-glow)"/>
        <rect x="-45" y="-45" width="50" height="35" rx="3" fill="#FEF08A" opacity="0.95" filter="url(#gold-glow)"/>
        <rect x="35" y="-25" width="70" height="40" rx="3" fill="#FDE047" opacity="0.95" filter="url(#gold-glow)"/>
        <circle cx="-60" cy="40" r="3.5" fill="#FEF08A"/>
        <circle cx="0" cy="40" r="3.5" fill="#FEF08A"/>
        <circle cx="60" cy="40" r="3.5" fill="#FEF08A"/>
      </g>
    `,
    layers: [
      { id: "mlv-invoc", type: "text", text: "✨ NEW HOME • NEW CHAPTER • NEW MEMORIES ✨", fontFamily: "'Cinzel', serif", fontSize: 13, fontWeight: "600", color: "#FDE047", y: 195, height: 22, letterSpacing: 2 },
      { id: "mlv-sub", type: "text", text: "WARMLY INVITING YOU TO THE HOUSEWARMING CELEBRATION OF", fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: "600", color: "#CBD5E1", y: 235, height: 22, letterSpacing: 1.5 },
      { id: "mlv-name", type: "text", text: "Vikram & Ananya Sen", fontFamily: "'Playfair Display', serif", fontSize: 46, fontWeight: "bold", color: "#FFFFFF", y: 280, height: 58, letterSpacing: 1.5 },
      { id: "mlv-msg", type: "text", text: "We have unlocked the door to our dreams! Join us for an enchanting evening of house blessings, dinner, music, and celebration.", fontFamily: "'Outfit', sans-serif", fontSize: 15, fontWeight: "500", color: "#E2E8F0", y: 355, height: 44 },
      { id: "mlv-dt", type: "text", text: "Saturday, 14 November 2026 • 6:30 PM Onwards", fontFamily: "'Cinzel', serif", fontSize: 17, fontWeight: "bold", color: "#F59E0B", y: 415, height: 28, letterSpacing: 1 },
      { id: "mlv-venue", type: "text", text: "Villa 17, The Palms, Golf Course Road, Gurugram - 122009", fontFamily: "'Outfit', sans-serif", fontSize: 16, fontWeight: "600", color: "#F8FAFC", y: 465, height: 28 },
      { id: "mlv-rsvp", type: "text", text: "RSVP: Sen & Banerjee Families • +91 98100 45678", fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: "500", color: "#94A3B8", y: 520, height: 24 }
    ]
  },
  {
    id: "tulsi-vrindavan-diya-griha-pravesh",
    slug: "tulsi-vrindavan-diya-griha-pravesh",
    title: "Sacred Tulsi Vrindavan & Diya Griha Pravesh",
    category: "housewarming",
    categoryName: "Housewarming & Griha Pravesh",
    description: "Devotional Griha Pravesh card with sacred Tulsi Vrindavan planter, holy basil leaves, lit brass deepaks, and colorful peacock rangoli.",
    tags: ["Tulsi Vrindavan", "Satyanarayan Pooja", "Diyas", "Rangoli", "Griha Pravesh", "Devotional"],
    featured: true,
    bgSvg: `
      <defs>
        <linearGradient id="bg-tvd" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#FFFDF7"/>
          <stop offset="45%" stop-color="#FEF9EE"/>
          <stop offset="100%" stop-color="#FCE7D0"/>
        </linearGradient>
      </defs>
      <rect width="731" height="1024" fill="url(#bg-tvd)"/>
      ${renderOrnateFoilBorder("#C2410C", 24)}
      ${renderRichMarigoldToran()}
      <!-- Bottom Tulsi Vrindavan & Diyas -->
      <g transform="translate(365, 875)" filter="url(#art-shadow)">
        <ellipse cx="0" cy="50" rx="220" ry="35" fill="#FED7AA" opacity="0.6"/>
        <rect x="-35" y="10" width="70" height="30" rx="4" fill="#C2410C"/>
        <rect x="-25" y="-20" width="50" height="30" rx="4" fill="#EA580C"/>
        <!-- Tulsi Plant Foliage -->
        <circle cx="0" cy="-35" r="24" fill="#15803D"/>
        <circle cx="-15" cy="-30" r="17" fill="#16A34A"/>
        <circle cx="15" cy="-30" r="17" fill="#16A34A"/>
        <circle cx="0" cy="-46" r="15" fill="#22C55E"/>
        <!-- Glowing Diyas -->
        <g transform="translate(-110, 30)">
          <path d="M -16,6 Q 0,18 16,6 Q 0,-4 -16,6 Z" fill="url(#gold-sphere)"/>
          <ellipse cx="0" cy="-6" rx="4.5" ry="10" fill="url(#flame-grad)"/>
        </g>
        <g transform="translate(110, 30)">
          <path d="M -16,6 Q 0,18 16,6 Q 0,-4 -16,6 Z" fill="url(#gold-sphere)"/>
          <ellipse cx="0" cy="-6" rx="4.5" ry="10" fill="url(#flame-grad)"/>
        </g>
      </g>
    `,
    layers: [
      { id: "tvd-invoc", type: "text", text: "|| ॐ नमो भगवते वासुदेवाय ||", fontFamily: "'Rozha One', serif", fontSize: 20, fontWeight: "normal", color: "#C2410C", y: 195, height: 28 },
      { id: "tvd-sub", type: "text", text: "INVITATION TO AUSPICIOUS GRIHA PRAVESH & SATYANARAYAN POOJA", fontFamily: "'Cinzel', serif", fontSize: 13, fontWeight: "600", color: "#78350F", y: 240, height: 22, letterSpacing: 2 },
      { id: "tvd-name", type: "text", text: "Deepak & Sunidhi Agarwal", fontFamily: "'Playfair Display', serif", fontSize: 46, fontWeight: "bold", color: "#9A3412", y: 285, height: 58, letterSpacing: 1.5 },
      { id: "tvd-msg", type: "text", text: "We request the honour of your presence with family on the auspicious occasion of our new house pooja followed by Mahaprasad.", fontFamily: "'Outfit', sans-serif", fontSize: 15, fontWeight: "500", color: "#451A03", y: 360, height: 42 },
      { id: "tvd-dt", type: "text", text: "Sunday, 29 November 2026 • 10:00 AM", fontFamily: "'Cinzel', serif", fontSize: 17, fontWeight: "bold", color: "#C2410C", y: 415, height: 28, letterSpacing: 1 },
      { id: "tvd-venue", type: "text", text: "Agarwal Niwas, Sector 15, Chandigarh - 160015", fontFamily: "'Outfit', sans-serif", fontSize: 16, fontWeight: "600", color: "#1F2937", y: 465, height: 28 },
      { id: "tvd-rsvp", type: "text", text: "Warm Greetings: Agarwal Family • RSVP: +91 98150 12345", fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: "500", color: "#78350F", y: 520, height: 24 }
    ]
  },

  // ==================== NAMING CEREMONY (5) ====================
  {
    id: "baby-in-golden-lotus-namkaran",
    slug: "baby-in-golden-lotus-namkaran",
    title: "Divine Baby in Golden Lotus Naming Ceremony",
    category: "naming-ceremony",
    categoryName: "Naming Ceremony & Namkaran",
    description: "Heavenly Namkaran invitation featuring a peaceful sleeping baby inside a blooming golden lotus flower with divine sunbeams and marigold torans.",
    tags: ["Lotus", "Sleeping Baby", "Namkaran", "Golden Sunbeam", "Naming Ceremony", "Divine"],
    featured: true,
    bgSvg: `
      <defs>
        <linearGradient id="bg-bgl" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#FFFDF7"/>
          <stop offset="45%" stop-color="#FEF9EE"/>
          <stop offset="100%" stop-color="#FEF08A"/>
        </linearGradient>
      </defs>
      <rect width="731" height="1024" fill="url(#bg-bgl)"/>
      ${renderOrnateFoilBorder("url(#gold-foil)", 24)}
      ${renderRichMarigoldToran()}
      <!-- Bottom Blooming Lotus with Sleeping Baby -->
      <g transform="translate(365, 875)" filter="url(#art-shadow)">
        <ellipse cx="0" cy="50" rx="220" ry="35" fill="#FEF08A" opacity="0.6"/>
        <path d="M -80,10 C -120,-30 -80,-60 -50,-10 Z" fill="#F472B6"/>
        <path d="M 80,10 C 120,-30 80,-60 50,-10 Z" fill="#F472B6"/>
        <path d="M -50,15 C -70,-45 -30,-65 0,-15 Z" fill="#FB7185"/>
        <path d="M 50,15 C 70,-45 30,-65 0,-15 Z" fill="#FB7185"/>
        <path d="M 0,20 C 0,-60 40,-60 0,20 Z" fill="#F43F5E"/>
        <!-- Baby in Swaddle -->
        <g transform="translate(0, -5)">
          <ellipse cx="0" cy="0" rx="36" ry="24" fill="#FDE047"/>
          <circle cx="18" cy="-8" r="14" fill="#FED7AA"/>
          <circle cx="16" cy="-8" r="3" fill="#F472B6" opacity="0.6"/>
        </g>
      </g>
    `,
    layers: [
      { id: "bgl-invoc", type: "text", text: "|| ॐ श्री गणेशाय नमः ||", fontFamily: "'Rozha One', serif", fontSize: 20, fontWeight: "normal", color: "#B45309", y: 195, height: 28 },
      { id: "bgl-sub", type: "text", text: "AUSPICIOUS NAMKARAN SANSKAR CEREMONY", fontFamily: "'Cinzel', serif", fontSize: 13, fontWeight: "600", color: "#78350F", y: 240, height: 22, letterSpacing: 2 },
      { id: "bgl-name", type: "text", text: "Naming Our Little Bundle of Joy", fontFamily: "'Playfair Display', serif", fontSize: 44, fontWeight: "bold", color: "#991B1B", y: 285, height: 58, letterSpacing: 1.5 },
      { id: "bgl-msg", type: "text", text: "With hearts overflowing with gratitude, we invite you to whisper a sweet name and shower your blessings on our newborn angel.", fontFamily: "'Outfit', sans-serif", fontSize: 15, fontWeight: "500", color: "#451A03", y: 360, height: 42 },
      { id: "bgl-dt", type: "text", text: "Sunday, 13 December 2026 • 11:00 AM", fontFamily: "'Cinzel', serif", fontSize: 17, fontWeight: "bold", color: "#B45309", y: 415, height: 28, letterSpacing: 1 },
      { id: "bgl-venue", type: "text", text: "Shree Balaji Banquet, FC Road, Pune - 411004", fontFamily: "'Outfit', sans-serif", fontSize: 16, fontWeight: "600", color: "#1F2937", y: 465, height: 28 },
      { id: "bgl-rsvp", type: "text", text: "Warm Regards: Joshi & Bhave Families • +91 98222 33445", fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: "500", color: "#78350F", y: 520, height: 24 }
    ]
  },
  {
    id: "krishna-flute-peacock-cradle-namkaran",
    slug: "krishna-flute-peacock-cradle-namkaran",
    title: "Sacred Krishna Flute & Peacock Palna Namkaran",
    category: "naming-ceremony",
    categoryName: "Naming Ceremony & Namkaran",
    description: "Devotional Namkaran invitation featuring Lord Krishna's golden flute, vibrant peacock feather, butter handi, and royal silver cradle.",
    tags: ["Lord Krishna", "Flute", "Peacock Feather", "Palna", "Namkaran", "Devotional"],
    featured: true,
    bgSvg: `
      <defs>
        <linearGradient id="bg-kfp" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#F0FDF4"/>
          <stop offset="45%" stop-color="#FDFBF7"/>
          <stop offset="100%" stop-color="#DCFCE7"/>
        </linearGradient>
      </defs>
      <rect width="731" height="1024" fill="url(#bg-kfp)"/>
      ${renderOrnateFoilBorder("#0D9488", 24)}
      ${renderRichMarigoldToran()}
      <!-- Bottom Krishna Flute, Peacock Feather & Cradle -->
      <g transform="translate(365, 875)" filter="url(#art-shadow)">
        <ellipse cx="0" cy="50" rx="220" ry="35" fill="#CCFBF1" opacity="0.6"/>
        <g transform="translate(30, -20) rotate(40)">
          <path d="M 0,-40 C -25,-25 -25,25 0,40 C 25,25 25,-25 0,-40 Z" fill="#0284C7"/>
          <ellipse cx="0" cy="0" rx="15" ry="22" fill="#059669"/>
          <circle cx="0" cy="2" r="8" fill="#1E3A8A"/>
        </g>
        <rect x="-120" y="5" width="240" height="13" rx="5" fill="url(#gold-sphere)" stroke="#B45309" stroke-width="1.8" transform="rotate(-15)"/>
        <circle cx="-60" cy="18" r="3.5" fill="#78350F"/>
        <circle cx="-30" cy="10" r="3.5" fill="#78350F"/>
        <circle cx="0" cy="2" r="3.5" fill="#78350F"/>
        <circle cx="30" cy="-6" r="3.5" fill="#78350F"/>
        <g transform="translate(-100, 20)">
          <ellipse cx="0" cy="5" rx="22" ry="26" fill="#D97706"/>
          <ellipse cx="0" cy="-14" rx="15" ry="7" fill="#FFFFFF"/>
        </g>
      </g>
    `,
    layers: [
      { id: "kfp-invoc", type: "text", text: "|| ॐ नमो नारायणाय ||", fontFamily: "'Rozha One', serif", fontSize: 20, fontWeight: "normal", color: "#0D9488", y: 195, height: 28 },
      { id: "kfp-sub", type: "text", text: "WITH THE DIVINE BLESSINGS OF LORD KRISHNA", fontFamily: "'Cinzel', serif", fontSize: 13, fontWeight: "600", color: "#115E59", y: 240, height: 22, letterSpacing: 2 },
      { id: "kfp-name", type: "text", text: "Namkaran of Our Little Kanha", fontFamily: "'Playfair Display', serif", fontSize: 44, fontWeight: "bold", color: "#0F766E", y: 285, height: 58, letterSpacing: 1.5 },
      { id: "kfp-msg", type: "text", text: "A little miracle sent from heaven above! Join us as we place our baby boy in the sacred cradle and reveal his blessed name.", fontFamily: "'Outfit', sans-serif", fontSize: 15, fontWeight: "500", color: "#134E4A", y: 360, height: 42 },
      { id: "kfp-dt", type: "text", text: "Saturday, 19 December 2026 • 10:30 AM", fontFamily: "'Cinzel', serif", fontSize: 17, fontWeight: "bold", color: "#D97706", y: 415, height: 28, letterSpacing: 1 },
      { id: "kfp-venue", type: "text", text: "Vrindavan Gardens, Mathura Road, Faridabad - 121003", fontFamily: "'Outfit', sans-serif", fontSize: 16, fontWeight: "600", color: "#1F2937", y: 465, height: 28 },
      { id: "kfp-rsvp", type: "text", text: "Warm Greetings: Mathur & Saxena Families • +91 98110 55667", fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: "500", color: "#115E59", y: 520, height: 24 }
    ]
  },
  {
    id: "celestial-moon-stars-slumber-naming",
    slug: "celestial-moon-stars-slumber-naming",
    title: "Celestial Moon & Starry Night Cradle Naming Ceremony",
    category: "naming-ceremony",
    categoryName: "Naming Ceremony & Namkaran",
    description: "Enchanting night sky Namkaran invitation with smiling golden crescent moon, sleeping baby on cloud pillows, and sparkling constellation stars.",
    tags: ["Celestial", "Moon", "Stars", "Sleeping Baby", "Namkaran", "Night Sky"],
    featured: true,
    bgSvg: `
      <defs>
        <linearGradient id="bg-cms" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#0F172A"/>
          <stop offset="45%" stop-color="#1E293B"/>
          <stop offset="100%" stop-color="#020617"/>
        </linearGradient>
      </defs>
      <rect width="731" height="1024" fill="url(#bg-cms)"/>
      ${renderOrnateFoilBorder("url(#gold-foil)", 24)}
      ${renderGlitterStars()}
      <!-- Bottom Moon with Sleeping Baby on Cloud -->
      <g transform="translate(365, 875)" filter="url(#art-shadow)">
        <ellipse cx="0" cy="50" rx="220" ry="35" fill="#020617"/>
        <ellipse cx="0" cy="25" rx="140" ry="40" fill="#FFFFFF" opacity="0.95"/>
        <ellipse cx="-80" cy="15" rx="60" ry="30" fill="#FFFFFF" opacity="0.95"/>
        <ellipse cx="80" cy="15" rx="60" ry="30" fill="#FFFFFF" opacity="0.95"/>
        <g transform="translate(0, -25)">
          <path d="M -45,-55 A 55 55 0 0 0 45,45 A 45 45 0 1 1 -45,-55 Z" fill="url(#gold-foil)" filter="url(#gold-glow)"/>
          <ellipse cx="5" cy="5" rx="30" ry="17" fill="#38BDF8"/>
          <circle cx="20" cy="-2" r="11" fill="#FED7AA"/>
          <circle cx="18" cy="-2" r="3" fill="#F472B6" opacity="0.6"/>
        </g>
      </g>
    `,
    layers: [
      { id: "cms-invoc", type: "text", text: "★ A PRECIOUS LITTLE STAR HAS JOINED OUR SKY ★", fontFamily: "'Cinzel', serif", fontSize: 13, fontWeight: "600", color: "#FDE047", y: 195, height: 22, letterSpacing: 2 },
      { id: "cms-sub", type: "text", text: "JOIN US FOR THE OFFICIAL NAMING CEREMONY OF", fontFamily: "'Outfit', sans-serif", fontSize: 14, fontWeight: "600", color: "#94A3B8", y: 235, height: 22, letterSpacing: 1.5 },
      { id: "cms-name", type: "text", text: "Our Sweet Little Princess", fontFamily: "'Playfair Display', serif", fontSize: 46, fontWeight: "bold", color: "#FFFFFF", y: 280, height: 58, letterSpacing: 1.5 },
      { id: "cms-msg", type: "text", text: "Ten tiny fingers, ten tiny toes, and a sweet name only our hearts know! Come celebrate this precious cradle milestone with us.", fontFamily: "'Outfit', sans-serif", fontSize: 15, fontWeight: "500", color: "#E2E8F0", y: 355, height: 44 },
      { id: "cms-dt", type: "text", text: "Sunday, 3 January 2027 • 4:30 PM", fontFamily: "'Cinzel', serif", fontSize: 17, fontWeight: "bold", color: "#F59E0B", y: 415, height: 28, letterSpacing: 1 },
      { id: "cms-venue", type: "text", text: "Moonlight Terrace, 100ft Road, Indiranagar, Bengaluru - 560038", fontFamily: "'Outfit', sans-serif", fontSize: 16, fontWeight: "600", color: "#F8FAFC", y: 465, height: 28 },
      { id: "cms-rsvp", type: "text", text: "With Love: Siddharth & Meera Roy • RSVP: +91 98800 66778", fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: "500", color: "#94A3B8", y: 520, height: 24 }
    ]
  },
  {
    id: "royal-rajasthani-jhula-namkaran",
    slug: "royal-rajasthani-jhula-namkaran",
    title: "Royal Rajasthani Jharokha Jhula Namkaran",
    category: "naming-ceremony",
    categoryName: "Naming Ceremony & Namkaran",
    description: "Palatial Rajasthani Jharokha window invitation with hanging brass bells, carved silver cradle, and royal festive torans.",
    tags: ["Jharokha", "Rajasthani", "Royal Cradle", "Palace", "Namkaran", "Heritage"],
    featured: true,
    bgSvg: `
      <defs>
        <linearGradient id="bg-rrj" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#FFFDF5"/>
          <stop offset="45%" stop-color="#FEF3C7"/>
          <stop offset="100%" stop-color="#FDE68A"/>
        </linearGradient>
      </defs>
      <rect width="731" height="1024" fill="url(#bg-rrj)"/>
      ${renderOrnateFoilBorder("url(#gold-foil)", 24)}
      ${renderRichMarigoldToran()}
      <!-- Bottom Royal Jharokha Arch & Silver Jhula -->
      <g transform="translate(365, 875)" filter="url(#art-shadow)">
        <ellipse cx="0" cy="50" rx="220" ry="35" fill="#FDE68A" opacity="0.6"/>
        <rect x="-140" y="-80" width="22" height="130" fill="url(#gold-sphere)" rx="4"/>
        <rect x="118" y="-80" width="22" height="130" fill="url(#gold-sphere)" rx="4"/>
        <path d="M -140,-80 Q -70,-118 0,-88 Q 70,-118 140,-80" fill="none" stroke="#B45309" stroke-width="4.5"/>
        <line x1="-80" y1="-75" x2="-60" y2="10" stroke="#94A3B8" stroke-width="3.5"/>
        <line x1="80" y1="-75" x2="60" y2="10" stroke="#94A3B8" stroke-width="3.5"/>
        <rect x="-70" y="10" width="140" height="26" rx="6" fill="#F1F5F9" stroke="#64748B" stroke-width="2.5"/>
        <ellipse cx="0" cy="10" rx="55" ry="11" fill="#DC2626"/>
      </g>
    `,
    layers: [
      { id: "rrj-invoc", type: "text", text: "|| शुभ नामकरण संस्कार ||", fontFamily: "'Rozha One', serif", fontSize: 20, fontWeight: "normal", color: "#B45309", y: 195, height: 28 },
      { id: "rrj-sub", type: "text", text: "TOGETHER WITH OUR FAMILIES WE INVITE YOU TO", fontFamily: "'Cinzel', serif", fontSize: 13, fontWeight: "600", color: "#78350F", y: 240, height: 22, letterSpacing: 2 },
      { id: "rrj-name", type: "text", text: "The Royal Cradle Ceremony", fontFamily: "'Playfair Display', serif", fontSize: 44, fontWeight: "bold", color: "#991B1B", y: 285, height: 58, letterSpacing: 1.5 },
      { id: "rrj-msg", type: "text", text: "Join us as our little prince is placed in the royal cradle and blessed with his auspicious name amidst prayers and Vedic chants.", fontFamily: "'Outfit', sans-serif", fontSize: 15, fontWeight: "500", color: "#451A03", y: 360, height: 42 },
      { id: "rrj-dt", type: "text", text: "Sunday, 17 January 2027 • 11:30 AM", fontFamily: "'Cinzel', serif", fontSize: 17, fontWeight: "bold", color: "#B45309", y: 415, height: 28, letterSpacing: 1 },
      { id: "rrj-venue", type: "text", text: "Rajputana Grand Hall, MI Road, Jaipur - 302001", fontFamily: "'Outfit', sans-serif", fontSize: 16, fontWeight: "600", color: "#1F2937", y: 465, height: 28 },
      { id: "rrj-rsvp", type: "text", text: "Warm Greetings: Rathore Family • RSVP: +91 98290 12345", fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: "500", color: "#78350F", y: 520, height: 24 }
    ]
  },
  {
    id: "cute-woodland-safari-nursery-namkaran",
    slug: "cute-woodland-safari-nursery-namkaran",
    title: "Cute Woodland Safari Nursery Naming Ceremony",
    category: "naming-ceremony",
    categoryName: "Naming Ceremony & Namkaran",
    description: "Delightful nursery invitation with cute woodland safari animal friends, woven wicker bassinet, pastel balloons, and botanical greenery.",
    tags: ["Safari Animals", "Nursery", "Wicker Bassinet", "Namkaran", "Cute", "Baby Boy"],
    featured: true,
    bgSvg: `
      <defs>
        <linearGradient id="bg-cws" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#FEFCE8"/>
          <stop offset="45%" stop-color="#FFFDF7"/>
          <stop offset="100%" stop-color="#F4EADB"/>
        </linearGradient>
      </defs>
      <rect width="731" height="1024" fill="url(#bg-cws)"/>
      ${renderOrnateFoilBorder("#CA8A04", 24)}
      ${renderLushBunting(["#38BDF8", "#34D399", "#FBBF24", "#F472B6"])}
      <!-- Bottom Safari Friends around Wicker Cradle -->
      <g transform="translate(365, 875)" filter="url(#art-shadow)">
        <ellipse cx="0" cy="50" rx="220" ry="35" fill="#FEF08A" opacity="0.6"/>
        <g transform="translate(-120, 0)">
          <circle cx="0" cy="0" r="30" fill="#94A3B8"/>
          <ellipse cx="-20" cy="-5" rx="18" ry="24" fill="#64748B"/>
          <path d="M 10,5 Q 26,26 38,15" fill="none" stroke="#94A3B8" stroke-width="7" stroke-linecap="round"/>
          <circle cx="0" cy="-6" r="3.5" fill="#1E293B"/>
        </g>
        <g transform="translate(0, 10)">
          <rect x="-48" y="-16" width="96" height="48" rx="12" fill="#D97706" stroke="#92400E" stroke-width="2.5"/>
          <ellipse cx="0" cy="-16" rx="42" ry="13" fill="#FEF3C7"/>
          <circle cx="0" cy="-18" r="14" fill="#FED7AA"/>
          <circle cx="-8" cy="-24" r="3.5" fill="#F472B6" opacity="0.6"/>
        </g>
        <g transform="translate(120, 0)">
          <circle cx="0" cy="0" r="28" fill="#FBBF24"/>
          <circle cx="-20" cy="-18" r="9" fill="#D97706"/>
          <circle cx="20" cy="-18" r="9" fill="#D97706"/>
          <circle cx="-8" cy="-4" r="3.5" fill="#1E293B"/>
          <circle cx="8" cy="-4" r="3.5" fill="#1E293B"/>
          <polygon points="-4,4 4,4 0,8" fill="#92400E"/>
        </g>
      </g>
    `,
    layers: [
      { id: "cws-invoc", type: "text", text: "🌿 WELCOME TO THE WORLD LITTLE ONE 🌿", fontFamily: "'Cinzel', serif", fontSize: 13, fontWeight: "600", color: "#65A30D", y: 195, height: 22, letterSpacing: 2 },
      { id: "cws-sub", type: "text", text: "WE JOYFULLY INVITE YOU TO THE NAMING CEREMONY OF", fontFamily: "'Outfit', sans-serif", fontSize: 14, fontWeight: "600", color: "#78350F", y: 235, height: 22, letterSpacing: 1.5 },
      { id: "cws-name", type: "text", text: "Baby Boy of Karan & Priya", fontFamily: "'Playfair Display', serif", fontSize: 44, fontWeight: "bold", color: "#B45309", y: 280, height: 56, letterSpacing: 1 },
      { id: "cws-msg", type: "text", text: "Our family has grown by two little feet! Come join us for a delightful afternoon of love, cradle blessings, and delicious feast.", fontFamily: "'Outfit', sans-serif", fontSize: 15, fontWeight: "500", color: "#451A03", y: 355, height: 44 },
      { id: "cws-dt", type: "text", text: "Saturday, 30 January 2027 • 11:00 AM", fontFamily: "'Cinzel', serif", fontSize: 17, fontWeight: "bold", color: "#EA580C", y: 415, height: 28, letterSpacing: 1 },
      { id: "cws-venue", type: "text", text: "The Grove Club, Road No. 12, Banjara Hills, Hyderabad - 500034", fontFamily: "'Outfit', sans-serif", fontSize: 16, fontWeight: "600", color: "#1F2937", y: 465, height: 28 },
      { id: "cws-rsvp", type: "text", text: "Warm Welcome: Karan & Priya Reddy • RSVP: +91 99890 12345", fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: "500", color: "#78350F", y: 520, height: 24 }
    ]
  }
];

// -------------------------------------------------------------
// EXECUTION PIPELINE
// -------------------------------------------------------------
async function main() {
  console.log("=== Upgrading 20 Templates with Rich 3D Shaded Art & Cultural Cartoons ===");

  for (const t of NEW_RICH_TEMPLATES) {
    console.log(`\nRendering Rich Art: [${t.category}] ${t.id} - "${t.title}"`);

    const fullSvg = `
<svg width="731" height="1024" viewBox="0 0 731 1024" xmlns="http://www.w3.org/2000/svg">
  ${COMMON_DEFS}
  ${t.bgSvg}
</svg>
`;

    const bgBuffer = await sharp(Buffer.from(fullSvg)).jpeg({ quality: 92 }).toBuffer();

    const bgJpgPath = `public/templates/backgrounds/${t.id}-bg.jpg`;
    const bgWebpPath = `public/templates/backgrounds/${t.id}-bg.webp`;
    const rawBgPath = `assets/raw-masters/backgrounds/${t.id}-bg.jpg`;

    fs.writeFileSync(bgJpgPath, bgBuffer);
    fs.writeFileSync(rawBgPath, bgBuffer);
    await sharp(bgBuffer).webp({ quality: 90, effort: 6 }).toFile(bgWebpPath);
    console.log("  ✓ Rich Art Background saved (JPEG & WebP)");

    // Text Overlay
    let textOverlaySvg = `<svg width="731" height="1024" viewBox="0 0 731 1024" xmlns="http://www.w3.org/2000/svg">`;
    textOverlaySvg += `<style><![CDATA[
      @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;800&family=Playfair+Display:wght@700;800;900&family=Rozha+One&family=Outfit:wght@400;500;600;700&display=swap');
      .txt { text-anchor: middle; }
    ]]></style>`;

    for (const l of t.layers) {
      const cx = 365.5;
      const cy = l.y + Math.round(l.height * 0.72);
      const ff = l.fontFamily.replace(/'/g, "");
      const ls = l.letterSpacing ? `letter-spacing="${l.letterSpacing}px"` : "";
      textOverlaySvg += `<text x="${cx}" y="${cy}" class="txt" font-family="${escapeXml(ff)}" font-size="${l.fontSize}" font-weight="${l.fontWeight}" fill="${escapeXml(l.color)}" ${ls} filter="drop-shadow(0 1px 2px rgba(255,255,255,0.75))">${escapeXml(l.text)}</text>`;
    }
    textOverlaySvg += `</svg>`;

    const previewBuffer = await sharp(bgBuffer)
      .composite([{ input: Buffer.from(textOverlaySvg), top: 0, left: 0 }])
      .jpeg({ quality: 92 })
      .toBuffer();

    const cardJpgPath = `public/templates/previews/${t.id}-card.jpg`;
    const cardWebpPath = `public/templates/previews/${t.id}-card.webp`;
    const rawCardPath = `assets/raw-masters/previews/${t.id}-card.jpg`;

    fs.writeFileSync(cardJpgPath, previewBuffer);
    fs.writeFileSync(rawCardPath, previewBuffer);
    await sharp(previewBuffer).webp({ quality: 90, effort: 6 }).toFile(cardWebpPath);
    console.log("  ✓ Preview Card rendered (JPEG & WebP)");
  }

  console.log("\nUpdating src/data/templates.ts with rich template objects...");
  const templatesTsPath = "src/data/templates.ts";
  const origContent = fs.readFileSync(templatesTsPath, "utf8");

  const splitMarker = "export const CATEGORIES = [";
  const [samplesPart] = origContent.split(splitMarker);
  const cleanSamplesJson = samplesPart
    .replace("import { CardTemplate } from \"@/types/editor\";\n\nexport const SAMPLE_TEMPLATES: CardTemplate[] =", "")
    .trim()
    .replace(/;$/, "");

  let existingTemplates = eval(cleanSamplesJson);

  // Replace definitions of these 20 templates
  const richMap = new Map(NEW_RICH_TEMPLATES.map(t => [t.id, t]));
  existingTemplates = existingTemplates.map(t => {
    if (!richMap.has(t.id)) return t;
    const r = richMap.get(t.id);
    return {
      ...t,
      title: r.title,
      description: r.description,
      tags: r.tags,
      layers: r.layers.map((l, idx) => ({
        id: l.id,
        type: l.type,
        text: l.text,
        fontFamily: l.fontFamily,
        fontSize: l.fontSize,
        fontWeight: l.fontWeight,
        fontStyle: "normal",
        textAlign: "center",
        color: l.color,
        letterSpacing: l.letterSpacing || 0,
        lineHeight: 1.25,
        textTransform: "none",
        x: 45,
        y: l.y,
        width: 641,
        height: l.height,
        rotation: 0,
        opacity: 1,
        isLocked: false,
        zIndex: idx + 1
      }))
    };
  });

  // Re-write templates.ts
  const counts = {};
  existingTemplates.forEach(t => counts[t.category] = (counts[t.category] || 0) + 1);

  const newCategories = [
    { id: "all", name: "All Templates", slug: "all", count: existingTemplates.length },
    { id: "wedding", name: "Wedding & Reception", slug: "wedding", count: counts["wedding"] || 7, description: "Traditional Indian, Royal Palace & Modern Floral wedding invitation cards" },
    { id: "birthday", name: "Birthday Invitations", slug: "birthday", count: counts["birthday"] || 10, description: "Milestone, 1st birthday & celebratory party invitation cards" },
    { id: "baby-shower", name: "Baby Shower & Godh Bharai", slug: "baby-shower", count: counts["baby-shower"] || 10, description: "Delightful Godh Bharai, Seemantham & Baby Shower designs" },
    { id: "housewarming", name: "Housewarming & Griha Pravesh", slug: "housewarming", count: counts["housewarming"] || 10, description: "Traditional Marigold Vastu Pooja & Griha Pravesh invitations" },
    { id: "naming-ceremony", name: "Naming Ceremony & Namkaran", slug: "naming-ceremony", count: counts["naming-ceremony"] || 11, description: "Sacred Cradle Ceremony & Namkaran invitations" },
  ];

  const updatedFileContent = `import { CardTemplate } from "@/types/editor";

export const SAMPLE_TEMPLATES: CardTemplate[] = ${JSON.stringify(existingTemplates, null, 2)};

export const CATEGORIES = ${JSON.stringify(newCategories, null, 2)};
`;

  fs.writeFileSync(templatesTsPath, updatedFileContent, "utf8");
  console.log("✓ src/data/templates.ts successfully updated with rich artwork templates!");
}

main().catch(err => {
  console.error("Error in main:", err);
  process.exit(1);
});
