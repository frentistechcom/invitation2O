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
// SVG DECORATIVE GENERATORS
// -------------------------------------------------------------

function renderMarigoldToran() {
  let s = `<g id="toran">`;
  s += `<path d="M 0,35 Q 182,100 365,55 Q 548,100 731,35" fill="none" stroke="#15803D" stroke-width="4" stroke-linecap="round"/>`;
  for (let x = 25; x <= 705; x += 36) {
    const y = 35 + Math.sin((x / 731) * Math.PI) * 45;
    s += `<path d="M ${x},${y} C ${x-10},${y+20} ${x-6},${y+40} ${x},${y+55} C ${x+6},${y+40} ${x+10},${y+20} ${x},${y} Z" fill="#166534" opacity="0.9"/>`;
    s += `<line x1="${x}" y1="${y}" x2="${x}" y2="${y+50}" stroke="#4ADE80" stroke-width="1" opacity="0.6"/>`;
  }
  for (let x = 20; x <= 710; x += 28) {
    const y = 35 + Math.sin((x / 731) * Math.PI) * 45;
    const col = (Math.floor(x / 28) % 2 === 0) ? "#F59E0B" : "#EA580C";
    s += `<circle cx="${x}" cy="${y}" r="12" fill="${col}" filter="drop-shadow(0 2px 3px rgba(0,0,0,0.15))"/>`;
    s += `<circle cx="${x}" cy="${y}" r="8" fill="#FDE047" opacity="0.8"/>`;
    s += `<circle cx="${x}" cy="${y}" r="4" fill="#B45309"/>`;
  }
  [75, 190, 365, 540, 655].forEach((hx, i) => {
    const len = i === 2 ? 110 : 85;
    const sy = 55 + Math.sin((hx / 731) * Math.PI) * 35;
    for (let y = sy; y < sy + len; y += 18) {
      s += `<circle cx="${hx}" cy="${y}" r="7" fill="${y%36===0 ? '#EA580C':'#F59E0B'}"/>`;
      s += `<circle cx="${hx}" cy="${y}" r="3.5" fill="#FEF08A"/>`;
    }
    const by = sy + len + 8;
    s += `<path d="M ${hx-9},${by+10} C ${hx-7},${by} ${hx-4},${by-2} ${hx},${by-2} C ${hx+4},${by-2} ${hx+7},${by} ${hx+9},${by+10} Z" fill="#D97706" stroke="#92400E" stroke-width="1.2"/>`;
    s += `<ellipse cx="${hx}" cy="${by+10}" rx="9" ry="3" fill="#B45309"/>`;
    s += `<circle cx="${hx}" cy="${by+13}" r="2.5" fill="#FDE047"/>`;
  });
  s += `</g>`;
  return s;
}

function renderGlitterStars() {
  let s = `<g id="stars">`;
  const pts = [
    {x: 45, y: 70, r: 10}, {x: 100, y: 110, r: 14}, {x: 170, y: 65, r: 12},
    {x: 250, y: 105, r: 16}, {x: 365, y: 70, r: 22}, {x: 480, y: 105, r: 16},
    {x: 560, y: 65, r: 12}, {x: 630, y: 110, r: 14}, {x: 685, y: 70, r: 10}
  ];
  pts.forEach(p => {
    s += `<line x1="${p.x}" y1="0" x2="${p.x}" y2="${p.y-p.r}" stroke="#FBBF24" stroke-width="0.8" stroke-dasharray="2,3" opacity="0.6"/>`;
    s += `<polygon points="${p.x},${p.y-p.r} ${p.x+p.r*0.3},${p.y-p.r*0.3} ${p.x+p.r},${p.y} ${p.x+p.r*0.3},${p.y+p.r*0.3} ${p.x},${p.y+p.r} ${p.x-p.r*0.3},${p.y+p.r*0.3} ${p.x-p.r},${p.y} ${p.x-p.r*0.3},${p.y-p.r*0.3}" fill="#F59E0B" stroke="#FEF08A" stroke-width="0.8"/>`;
    s += `<circle cx="${p.x}" cy="${p.y}" r="${p.r*0.25}" fill="#FFF"/>`;
  });
  s += `</g>`;
  return s;
}

function renderPartyBunting(colors) {
  let s = `<g id="bunting">`;
  s += `<path d="M 0,45 Q 365,95 731,45" fill="none" stroke="#9CA3AF" stroke-width="1.5" stroke-dasharray="4,2"/>`;
  let ci = 0;
  for (let x = 40; x <= 690; x += 36) {
    const y = 45 + Math.sin((x / 731) * Math.PI) * 45;
    const c = colors[ci % colors.length];
    ci++;
    s += `<polygon points="${x-15},${y} ${x+15},${y} ${x},${y+28}" fill="${c}" stroke="#FFF" stroke-width="0.8" opacity="0.95"/>`;
    s += `<circle cx="${x-14}" cy="${y}" r="2" fill="#FDE047"/>`;
  }
  s += `</g>`;
  return s;
}

function renderEucalyptusGarland() {
  let s = `<g id="eucalyptus">`;
  s += `<path d="M 30,35 Q 365,85 701,35" fill="none" stroke="#65A30D" stroke-width="2" opacity="0.6"/>`;
  for (let x = 40; x <= 690; x += 40) {
    const y = 35 + Math.sin((x / 731) * Math.PI) * 45;
    s += `<ellipse cx="${x}" cy="${y+8}" rx="14" ry="7" fill="#84CC16" opacity="0.5" transform="rotate(-15 ${x} ${y+8})"/>`;
    s += `<ellipse cx="${x+10}" cy="${y+14}" rx="12" ry="6" fill="#15803D" opacity="0.6" transform="rotate(20 ${x+10} ${y+14})"/>`;
    s += `<circle cx="${x+5}" cy="${y+22}" r="7" fill="#F472B6" opacity="0.9"/>`;
    s += `<circle cx="${x+5}" cy="${y+22}" r="4" fill="#FDA4AF"/>`;
    s += `<circle cx="${x+5}" cy="${y+22}" r="2" fill="#FFF"/>`;
  }
  s += `</g>`;
  return s;
}

function renderOrnateBorder(color = "#D97706", inset = 24) {
  const w = 731 - inset * 2;
  const h = 1024 - inset * 2;
  const x = inset;
  const y = inset;
  return `
    <rect x="${x}" y="${y}" width="${w}" height="${h}" fill="none" stroke="${color}" stroke-width="1.8" stroke-opacity="0.65" rx="4"/>
    <rect x="${x+6}" y="${y+6}" width="${w-12}" height="${h-12}" fill="none" stroke="${color}" stroke-width="0.8" stroke-dasharray="4,4" stroke-opacity="0.45" rx="2"/>
    <path d="M${x+2},${y+45} L${x+2},${y+2} L${x+45},${y+2}" fill="none" stroke="${color}" stroke-width="2.5"/>
    <path d="M${x+w-2},${y+45} L${x+w-2},${y+2} L${x+w-45},${y+2}" fill="none" stroke="${color}" stroke-width="2.5"/>
    <path d="M${x+2},${y+h-45} L${x+2},${y+h-2} L${x+45},${y+h-2}" fill="none" stroke="${color}" stroke-width="2.5"/>
    <path d="M${x+w-2},${y+h-45} L${x+w-2},${y+h-2} L${x+w-45},${y+h-2}" fill="none" stroke="${color}" stroke-width="2.5"/>
    <circle cx="${x+12}" cy="${y+12}" r="3" fill="${color}" opacity="0.8"/>
    <circle cx="${x+w-12}" cy="${y+12}" r="3" fill="${color}" opacity="0.8"/>
    <circle cx="${x+12}" cy="${y+h-12}" r="3" fill="${color}" opacity="0.8"/>
    <circle cx="${x+w-12}" cy="${y+h-12}" r="3" fill="${color}" opacity="0.8"/>
  `;
}

// -------------------------------------------------------------
// TEMPLATES SPECIFICATION (20 TEMPLATES)
// -------------------------------------------------------------
export const NEW_TEMPLATES = [
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
          <stop offset="0%" stop-color="#EBF4FF"/>
          <stop offset="50%" stop-color="#F8FAFC"/>
          <stop offset="100%" stop-color="#EFF6FF"/>
        </linearGradient>
      </defs>
      <rect width="731" height="1024" fill="url(#bg-rpc)"/>
      ${renderOrnateBorder("#2563EB", 24)}
      ${renderGlitterStars()}
      <!-- Royal Crown Motif at top -->
      <g transform="translate(365, 140)">
        <path d="M -45,15 L -55,-15 L -25,-2 L 0,-30 L 25,-2 L 55,-15 L 45,15 Z" fill="#F59E0B" stroke="#B45309" stroke-width="2"/>
        <rect x="-42" y="15" width="84" height="10" rx="3" fill="#D97706"/>
        <circle cx="0" cy="-30" r="5" fill="#EF4444"/>
        <circle cx="-55" cy="-15" r="4" fill="#3B82F6"/>
        <circle cx="55" cy="-15" r="4" fill="#3B82F6"/>
        <circle cx="-25" cy="-2" r="3.5" fill="#10B981"/>
        <circle cx="25" cy="-2" r="3.5" fill="#10B981"/>
      </g>
      <!-- Bottom Royal Balloons & Confetti -->
      <g transform="translate(365, 870)">
        <!-- Left Balloons -->
        <ellipse cx="-160" cy="0" rx="42" ry="52" fill="#3B82F6" opacity="0.85"/>
        <ellipse cx="-200" cy="-30" rx="38" ry="48" fill="#F59E0B" opacity="0.85"/>
        <ellipse cx="-130" cy="-45" rx="36" ry="46" fill="#60A5FA" opacity="0.85"/>
        <!-- Right Balloons -->
        <ellipse cx="160" cy="0" rx="42" ry="52" fill="#3B82F6" opacity="0.85"/>
        <ellipse cx="200" cy="-30" rx="38" ry="48" fill="#F59E0B" opacity="0.85"/>
        <ellipse cx="130" cy="-45" rx="36" ry="46" fill="#60A5FA" opacity="0.85"/>
        <!-- Confetti -->
        <circle cx="-60" cy="20" r="4" fill="#F59E0B"/>
        <circle cx="60" cy="20" r="4" fill="#3B82F6"/>
        <circle cx="0" cy="35" r="5" fill="#EF4444"/>
        <rect x="-20" y="10" width="8" height="8" rx="2" fill="#10B981" transform="rotate(45 -20 10)"/>
        <rect x="25" y="15" width="8" height="8" rx="2" fill="#F59E0B" transform="rotate(30 25 15)"/>
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
          <stop offset="50%" stop-color="#FFFBEB"/>
          <stop offset="100%" stop-color="#FEF3C7"/>
        </linearGradient>
      </defs>
      <rect width="731" height="1024" fill="url(#bg-hab)"/>
      ${renderOrnateBorder("#F59E0B", 24)}
      ${renderPartyBunting(["#38BDF8", "#F472B6", "#FBBF24", "#34D399", "#A78BFA"])}
      <!-- Bottom Hot Air Balloon & Clouds -->
      <g transform="translate(365, 875)">
        <!-- Clouds -->
        <ellipse cx="-140" cy="30" rx="90" ry="40" fill="#FFFFFF" opacity="0.95"/>
        <ellipse cx="140" cy="30" rx="90" ry="40" fill="#FFFFFF" opacity="0.95"/>
        <ellipse cx="0" cy="50" rx="120" ry="45" fill="#FFFFFF" opacity="0.95"/>
        <!-- Hot Air Balloon -->
        <g transform="translate(0, -50)">
          <path d="M 0,-70 C -48,-70 -60,-20 -25,25 L -15,40 L 15,40 L 25,25 C 60,-20 48,-70 0,-70 Z" fill="#F472B6" stroke="#DB2777" stroke-width="1.5"/>
          <path d="M 0,-70 C -20,-70 -25,-20 -10,40 L 10,40 C 25,-20 20,-70 0,-70 Z" fill="#38BDF8"/>
          <!-- Basket -->
          <line x1="-10" y1="40" x2="-8" y2="52" stroke="#92400E" stroke-width="1.2"/>
          <line x1="10" y1="40" x2="8" y2="52" stroke="#92400E" stroke-width="1.2"/>
          <rect x="-12" y="52" width="24" height="18" rx="3" fill="#D97706" stroke="#92400E" stroke-width="1"/>
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
          <stop offset="50%" stop-color="#FDF2F8"/>
          <stop offset="100%" stop-color="#FCE7F3"/>
        </linearGradient>
      </defs>
      <rect width="731" height="1024" fill="url(#bg-efg)"/>
      ${renderOrnateBorder("#DB2777", 24)}
      ${renderEucalyptusGarland()}
      <!-- Bottom Fairy Garden Floral & Butterfly -->
      <g transform="translate(365, 880)">
        <ellipse cx="0" cy="50" rx="200" ry="35" fill="#FBCFE8" opacity="0.6"/>
        <!-- Peonies -->
        <circle cx="-100" cy="0" r="32" fill="#F472B6" opacity="0.9"/>
        <circle cx="-100" cy="0" r="22" fill="#FB7185"/>
        <circle cx="-100" cy="0" r="10" fill="#FFF"/>
        <circle cx="100" cy="0" r="32" fill="#F472B6" opacity="0.9"/>
        <circle cx="100" cy="0" r="22" fill="#FB7185"/>
        <circle cx="100" cy="0" r="10" fill="#FFF"/>
        <circle cx="0" cy="-10" r="38" fill="#EC4899"/>
        <circle cx="0" cy="-10" r="26" fill="#F43F5E"/>
        <circle cx="0" cy="-10" r="12" fill="#FDE047"/>
        <!-- Butterflies -->
        <g transform="translate(-160, -60) rotate(-20)">
          <ellipse cx="-10" cy="-8" rx="14" ry="9" fill="#F59E0B" opacity="0.85"/>
          <ellipse cx="10" cy="-8" rx="14" ry="9" fill="#F59E0B" opacity="0.85"/>
          <line x1="0" y1="-15" x2="0" y2="15" stroke="#78350F" stroke-width="2"/>
        </g>
        <g transform="translate(160, -60) rotate(20)">
          <ellipse cx="-10" cy="-8" rx="14" ry="9" fill="#F59E0B" opacity="0.85"/>
          <ellipse cx="10" cy="-8" rx="14" ry="9" fill="#F59E0B" opacity="0.85"/>
          <line x1="0" y1="-15" x2="0" y2="15" stroke="#78350F" stroke-width="2"/>
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
          <stop offset="50%" stop-color="#1E1B4B"/>
          <stop offset="100%" stop-color="#020617"/>
        </linearGradient>
      </defs>
      <rect width="731" height="1024" fill="url(#bg-cag)"/>
      ${renderOrnateBorder("#38BDF8", 24)}
      ${renderGlitterStars()}
      <!-- Planet Saturn at top left -->
      <g transform="translate(100, 140)">
        <circle cx="0" cy="0" r="24" fill="#F59E0B"/>
        <ellipse cx="0" cy="0" rx="42" ry="10" fill="none" stroke="#FDE047" stroke-width="4" transform="rotate(-25)"/>
      </g>
      <!-- Crescent Moon at top right -->
      <g transform="translate(630, 140)">
        <path d="M 0,-25 A 25 25 0 0 0 20,20 A 20 20 0 1 1 0,-25 Z" fill="#FDE047"/>
      </g>
      <!-- Bottom Rocket and Space Elements -->
      <g transform="translate(365, 875)">
        <!-- Planet surface -->
        <path d="M -300,60 Q 0,0 300,60 L 300,120 L -300,120 Z" fill="#1E293B"/>
        <!-- Rocket -->
        <g transform="translate(0, -35) rotate(-15)">
          <path d="M 0,-50 C -20,-30 -20,20 -15,40 L 15,40 C 20,20 20,-30 0,-50 Z" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="1.5"/>
          <path d="M 0,-50 C -15,-35 -15,-20 0,-20 C 15,-20 15,-35 0,-50 Z" fill="#EF4444"/>
          <!-- Window -->
          <circle cx="0" cy="-5" r="10" fill="#38BDF8" stroke="#0284C7" stroke-width="2"/>
          <!-- Fins -->
          <path d="M -15,20 L -32,45 L -15,40 Z" fill="#EF4444"/>
          <path d="M 15,20 L 32,45 L 15,40 Z" fill="#EF4444"/>
          <!-- Flames -->
          <polygon points="-8,42 0,65 8,42" fill="#F59E0B"/>
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
          <stop offset="50%" stop-color="#FDFBF7"/>
          <stop offset="100%" stop-color="#FEF9C3"/>
        </linearGradient>
      </defs>
      <rect width="731" height="1024" fill="url(#bg-bws)"/>
      ${renderOrnateBorder("#CA8A04", 24)}
      ${renderPartyBunting(["#EAB308", "#84CC16", "#F97316", "#14B8A6", "#EC4899"])}
      <!-- Bottom Woodland Safari Animals & Cake -->
      <g transform="translate(365, 875)">
        <ellipse cx="0" cy="50" rx="220" ry="35" fill="#FEF08A" opacity="0.6"/>
        <!-- Lion Cub -->
        <g transform="translate(-110, 0)">
          <circle cx="0" cy="0" r="32" fill="#FBBF24"/>
          <circle cx="-28" cy="-24" r="10" fill="#D97706"/>
          <circle cx="28" cy="-24" r="10" fill="#D97706"/>
          <circle cx="-10" cy="-4" r="3.5" fill="#1E293B"/>
          <circle cx="10" cy="-4" r="3.5" fill="#1E293B"/>
          <polygon points="-5,5 5,5 0,10" fill="#92400E"/>
        </g>
        <!-- Birthday Cake in center -->
        <g transform="translate(0, 10)">
          <rect x="-35" y="-10" width="70" height="35" rx="5" fill="#F472B6"/>
          <rect x="-25" y="-30" width="50" height="22" rx="4" fill="#FDE047"/>
          <!-- Candle -->
          <rect x="-3" y="-45" width="6" height="16" fill="#38BDF8"/>
          <ellipse cx="0" cy="-50" rx="3.5" ry="6" fill="#F97316"/>
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
          <stop offset="50%" stop-color="#FEF9C3"/>
          <stop offset="100%" stop-color="#FEF08A"/>
        </linearGradient>
      </defs>
      <rect width="731" height="1024" fill="url(#bg-tdj)"/>
      ${renderOrnateBorder("#B45309", 24)}
      ${renderMarigoldToran()}
      <!-- Bottom Decorated Floral Jhula Swing -->
      <g transform="translate(365, 875)">
        <!-- Swing Support Ropes -->
        <line x1="-130" y1="-80" x2="-100" y2="15" stroke="#92400E" stroke-width="4"/>
        <line x1="130" y1="-80" x2="100" y2="15" stroke="#92400E" stroke-width="4"/>
        <!-- Floral Garlands on ropes -->
        <circle cx="-115" cy="-30" r="9" fill="#EA580C"/>
        <circle cx="-108" cy="0" r="9" fill="#F59E0B"/>
        <circle cx="115" cy="-30" r="9" fill="#EA580C"/>
        <circle cx="108" cy="0" r="9" fill="#F59E0B"/>
        <!-- Wooden Plank -->
        <rect x="-120" y="15" width="240" height="20" rx="5" fill="#78350F" stroke="#451A03" stroke-width="2"/>
        <!-- Cushions & Flowers on Plank -->
        <ellipse cx="0" cy="12" rx="80" ry="14" fill="#DC2626"/>
        <ellipse cx="0" cy="10" rx="60" ry="10" fill="#FEF08A"/>
        <!-- Diyas on both sides -->
        <g transform="translate(-180, 25)">
          <path d="M -15,5 Q 0,15 15,5 Q 0,-3 -15,5 Z" fill="#D97706"/>
          <ellipse cx="0" cy="-6" rx="4" ry="8" fill="#F97316"/>
        </g>
        <g transform="translate(180, 25)">
          <path d="M -15,5 Q 0,15 15,5 Q 0,-3 -15,5 Z" fill="#D97706"/>
          <ellipse cx="0" cy="-6" rx="4" ry="8" fill="#F97316"/>
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
  {
    id: "pastel-stork-clouds-baby-shower",
    slug: "pastel-stork-clouds-baby-shower",
    title: "Pastel Stork & Golden Moon Baby Shower",
    category: "baby-shower",
    categoryName: "Baby Shower & Godh Bharai",
    description: "Dreamy lavender and sky blue baby shower card with an illustrated flying stork carrying a sweet bundle among golden moon and clouds.",
    tags: ["Stork", "Clouds", "Golden Moon", "Baby Shower", "Sweet Bundle", "Pastel Shower"],
    featured: true,
    bgSvg: `
      <defs>
        <linearGradient id="bg-psc" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#EFF6FF"/>
          <stop offset="50%" stop-color="#F5F3FF"/>
          <stop offset="100%" stop-color="#EDE9FE"/>
        </linearGradient>
      </defs>
      <rect width="731" height="1024" fill="url(#bg-psc)"/>
      ${renderOrnateBorder("#8B5CF6", 24)}
      ${renderGlitterStars()}
      <!-- Bottom Stork and Cloud Nest -->
      <g transform="translate(365, 875)">
        <ellipse cx="0" cy="40" rx="220" ry="40" fill="#FFFFFF" opacity="0.95"/>
        <ellipse cx="-120" cy="20" rx="80" ry="35" fill="#FFFFFF" opacity="0.95"/>
        <ellipse cx="120" cy="20" rx="80" ry="35" fill="#FFFFFF" opacity="0.95"/>
        <!-- Flying Stork -->
        <g transform="translate(0, -35)">
          <!-- Wings -->
          <path d="M 0,-10 C -50,-40 -80,-20 -90,0 C -50,-5 -20,-5 0,-10 Z" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1.5"/>
          <path d="M 0,-10 C 50,-40 80,-20 90,0 C 50,-5 20,-5 0,-10 Z" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1.5"/>
          <!-- Body -->
          <ellipse cx="0" cy="5" rx="30" ry="16" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1.5"/>
          <!-- Neck & Head -->
          <path d="M 15,5 Q 35,-15 45,-25" fill="none" stroke="#FFFFFF" stroke-width="6" stroke-linecap="round"/>
          <circle cx="45" cy="-25" r="7" fill="#FFFFFF"/>
          <polygon points="48,-28 72,-25 48,-22" fill="#F97316"/>
          <!-- Hanging Bundle -->
          <path d="M 55,-25 Q 50,15 25,25 Q 0,15 55,-25 Z" fill="#F472B6" opacity="0.85"/>
        </g>
      </g>
    `,
    layers: [
      { id: "psc-invoc", type: "text", text: "✨ A PRECIOUS LITTLE MIRACLE IS ON THE WAY ✨", fontFamily: "'Cinzel', serif", fontSize: 13, fontWeight: "600", color: "#6D28D9", y: 195, height: 22, letterSpacing: 2 },
      { id: "psc-sub", type: "text", text: "WE ARE OVERJOYED TO INVITE YOU TO SHOWER", fontFamily: "'Outfit', sans-serif", fontSize: 14, fontWeight: "600", color: "#4B5563", y: 235, height: 22, letterSpacing: 1.5 },
      { id: "psc-name", type: "text", text: "Pooja & Sameer", fontFamily: "'Playfair Display', serif", fontSize: 48, fontWeight: "bold", color: "#5B21B6", y: 280, height: 58, letterSpacing: 1.5 },
      { id: "psc-msg", type: "text", text: "Before we welcome our sweetest bundle of joy, join us for a delightful afternoon of laughter, tea party games, and wishes.", fontFamily: "'Outfit', sans-serif", fontSize: 15, fontWeight: "500", color: "#374151", y: 355, height: 44 },
      { id: "psc-dt", type: "text", text: "Saturday, 8 August 2026 • 3:30 PM", fontFamily: "'Cinzel', serif", fontSize: 17, fontWeight: "bold", color: "#D97706", y: 415, height: 28, letterSpacing: 1 },
      { id: "psc-venue", type: "text", text: "The Glass House Cafe, Koregaon Park, Pune - 411001", fontFamily: "'Outfit', sans-serif", fontSize: 16, fontWeight: "600", color: "#1F2937", y: 465, height: 28 },
      { id: "psc-rsvp", type: "text", text: "Warm Welcome: Mehta & Shah Families • RSVP: +91 98230 45678", fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: "500", color: "#6B7280", y: 520, height: 24 }
    ]
  },
  {
    id: "royal-peacock-oti-baby-shower",
    slug: "royal-peacock-oti-baby-shower",
    title: "Royal Peacock & Traditional Oti Baby Shower",
    category: "baby-shower",
    categoryName: "Baby Shower & Godh Bharai",
    description: "Regal Indian Godh Bharai invitation adorned with royal peacocks, golden jali archway, sacred green glass bangles, and lotus blossoms.",
    tags: ["Godh Bharai", "Peacock", "Green Bangles", "Oti", "Baby Shower", "Royal Indian"],
    featured: true,
    bgSvg: `
      <defs>
        <linearGradient id="bg-rpo" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#FCFAF2"/>
          <stop offset="50%" stop-color="#FFFDF5"/>
          <stop offset="100%" stop-color="#F5EFE0"/>
        </linearGradient>
      </defs>
      <rect width="731" height="1024" fill="url(#bg-rpo)"/>
      ${renderOrnateBorder("#B45309", 24)}
      ${renderMarigoldToran()}
      <!-- Bottom Royal Peacocks & Traditional Oti Thali -->
      <g transform="translate(365, 875)">
        <ellipse cx="0" cy="50" rx="220" ry="35" fill="#FEF3C7" opacity="0.7"/>
        <!-- Left Peacock -->
        <g transform="translate(-140, 0)">
          <path d="M 0,20 C -20,-10 -30,-40 -10,-55 C 5,-45 5,-20 0,20 Z" fill="#0284C7"/>
          <circle cx="-10" cy="-55" r="9" fill="#0369A1"/>
          <!-- Crest -->
          <circle cx="-14" cy="-66" r="2.5" fill="#F59E0B"/>
          <circle cx="-10" cy="-68" r="2.5" fill="#F59E0B"/>
          <circle cx="-6" cy="-66" r="2.5" fill="#F59E0B"/>
          <!-- Beak -->
          <polygon points="-16,-56 -24,-53 -16,-50" fill="#F59E0B"/>
          <!-- Plumage -->
          <path d="M 0,20 C 20,40 40,30 60,40 C 30,10 10,15 0,20 Z" fill="#059669"/>
        </g>
        <!-- Center Oti Thali with Green Bangles & Coconut -->
        <g transform="translate(0, 15)">
          <ellipse cx="0" cy="0" rx="45" ry="16" fill="#D97706" stroke="#B45309" stroke-width="2"/>
          <!-- Green Glass Bangles -->
          <circle cx="-12" cy="-2" r="14" fill="none" stroke="#16A34A" stroke-width="3"/>
          <circle cx="12" cy="-2" r="14" fill="none" stroke="#16A34A" stroke-width="3"/>
          <!-- Coconut with Tilak -->
          <ellipse cx="0" cy="-8" rx="14" ry="18" fill="#78350F"/>
          <line x1="-8" y1="-8" x2="8" y2="-8" stroke="#DC2626" stroke-width="3"/>
        </g>
        <!-- Right Peacock -->
        <g transform="translate(140, 0) scale(-1, 1)">
          <path d="M 0,20 C -20,-10 -30,-40 -10,-55 C 5,-45 5,-20 0,20 Z" fill="#0284C7"/>
          <circle cx="-10" cy="-55" r="9" fill="#0369A1"/>
          <circle cx="-14" cy="-66" r="2.5" fill="#F59E0B"/>
          <circle cx="-10" cy="-68" r="2.5" fill="#F59E0B"/>
          <circle cx="-6" cy="-66" r="2.5" fill="#F59E0B"/>
          <polygon points="-16,-56 -24,-53 -16,-50" fill="#F59E0B"/>
          <path d="M 0,20 C 20,40 40,30 60,40 C 30,10 10,15 0,20 Z" fill="#059669"/>
        </g>
      </g>
    `,
    layers: [
      { id: "rpo-invoc", type: "text", text: "|| श्री कुलदेवताय नमः ||", fontFamily: "'Rozha One', serif", fontSize: 20, fontWeight: "normal", color: "#B45309", y: 195, height: 28 },
      { id: "rpo-sub", type: "text", text: "AUSPICIOUS GODH BHARAI CEREMONY OF", fontFamily: "'Cinzel', serif", fontSize: 13, fontWeight: "600", color: "#78350F", y: 240, height: 22, letterSpacing: 2 },
      { id: "rpo-name", type: "text", text: "Sunita & Arvind Singhania", fontFamily: "'Playfair Display', serif", fontSize: 44, fontWeight: "bold", color: "#991B1B", y: 285, height: 58, letterSpacing: 1.5 },
      { id: "rpo-msg", type: "text", text: "We warmly invite our family and dear friends to perform the sacred Oti ritual and bless the mother with health, joy, and prosperity.", fontFamily: "'Outfit', sans-serif", fontSize: 15, fontWeight: "500", color: "#451A03", y: 360, height: 42 },
      { id: "rpo-dt", type: "text", text: "Sunday, 23 August 2026 • 10:30 AM", fontFamily: "'Cinzel', serif", fontSize: 17, fontWeight: "bold", color: "#B45309", y: 415, height: 28, letterSpacing: 1 },
      { id: "rpo-venue", type: "text", text: "Singhania Grand Palace, Alkapuri, Vadodara - 390007", fontFamily: "'Outfit', sans-serif", fontSize: 16, fontWeight: "600", color: "#1F2937", y: 465, height: 28 },
      { id: "rpo-rsvp", type: "text", text: "Cordially Invited By: Singhania Family • RSVP: +91 99000 88776", fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: "500", color: "#78350F", y: 520, height: 24 }
    ]
  },
  {
    id: "botanical-eucalyptus-gold-baby-shower",
    slug: "botanical-eucalyptus-gold-baby-shower",
    title: "Botanical Eucalyptus & Rose Gold Baby Shower",
    category: "baby-shower",
    categoryName: "Baby Shower & Godh Bharai",
    description: "Modern minimalist baby shower card featuring sage eucalyptus branches, geometric gold hexagon framing, and delicate baby breath florals.",
    tags: ["Botanical", "Eucalyptus", "Rose Gold", "Modern Baby Shower", "Minimalist", "Gender Neutral"],
    featured: true,
    bgSvg: `
      <defs>
        <linearGradient id="bg-beg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#F9FAF7"/>
          <stop offset="50%" stop-color="#FFFFFF"/>
          <stop offset="100%" stop-color="#F0F4EC"/>
        </linearGradient>
      </defs>
      <rect width="731" height="1024" fill="url(#bg-beg)"/>
      ${renderOrnateBorder("#15803D", 24)}
      ${renderEucalyptusGarland()}
      <!-- Bottom Botanical Foliage & Baby Footprint Emblem -->
      <g transform="translate(365, 875)">
        <ellipse cx="0" cy="45" rx="180" ry="30" fill="#DCFCE7" opacity="0.6"/>
        <!-- Golden Hexagon Ring -->
        <polygon points="0,-40 35,-20 35,20 0,40 -35,20 -35,-20" fill="none" stroke="#D97706" stroke-width="2"/>
        <!-- Baby Footprint inside -->
        <g transform="translate(0, 0)">
          <!-- Left foot -->
          <ellipse cx="-6" cy="4" rx="4" ry="7" fill="#D97706" transform="rotate(-10 -6 4)"/>
          <circle cx="-10" cy="-7" r="1.8" fill="#D97706"/>
          <circle cx="-6" cy="-8" r="1.8" fill="#D97706"/>
          <circle cx="-2" cy="-7" r="1.8" fill="#D97706"/>
          <!-- Right foot -->
          <ellipse cx="6" cy="4" rx="4" ry="7" fill="#D97706" transform="rotate(10 6 4)"/>
          <circle cx="2" cy="-7" r="1.8" fill="#D97706"/>
          <circle cx="6" cy="-8" r="1.8" fill="#D97706"/>
          <circle cx="10" cy="-7" r="1.8" fill="#D97706"/>
        </g>
        <!-- Flanking Eucalyptus Leaves -->
        <ellipse cx="-80" cy="10" rx="22" ry="10" fill="#15803D" opacity="0.7" transform="rotate(-25 -80 10)"/>
        <ellipse cx="80" cy="10" rx="22" ry="10" fill="#15803D" opacity="0.7" transform="rotate(25 80 10)"/>
      </g>
    `,
    layers: [
      { id: "beg-invoc", type: "text", text: "🌿 OH BABY! A NEW ADVENTURE BEGINS 🌿", fontFamily: "'Cinzel', serif", fontSize: 13, fontWeight: "600", color: "#15803D", y: 195, height: 22, letterSpacing: 2 },
      { id: "beg-sub", type: "text", text: "WE ARE OVERJOYED TO CELEBRATE THE BABY SHOWER OF", fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: "600", color: "#4B5563", y: 235, height: 22, letterSpacing: 1.5 },
      { id: "beg-name", type: "text", text: "Rhea & Karan Malhotra", fontFamily: "'Playfair Display', serif", fontSize: 44, fontWeight: "bold", color: "#14532D", y: 280, height: 56, letterSpacing: 1 },
      { id: "beg-msg", type: "text", text: "Join us for an elegant botanical brunch filled with sweet toasts, joyful conversations, and blessings for our growing family.", fontFamily: "'Outfit', sans-serif", fontSize: 15, fontWeight: "500", color: "#374151", y: 355, height: 44 },
      { id: "beg-dt", type: "text", text: "Sunday, 6 September 2026 • 12:00 PM", fontFamily: "'Cinzel', serif", fontSize: 17, fontWeight: "bold", color: "#B45309", y: 415, height: 28, letterSpacing: 1 },
      { id: "beg-venue", type: "text", text: "The Amber Pavilion, Cyber City, Gurugram - 122002", fontFamily: "'Outfit', sans-serif", fontSize: 16, fontWeight: "600", color: "#1F2937", y: 465, height: 28 },
      { id: "beg-rsvp", type: "text", text: "RSVP: Malhotra & Oberoi Families • +91 98111 22334", fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: "500", color: "#6B7280", y: 520, height: 24 }
    ]
  },
  {
    id: "twin-cradles-blessing-baby-shower",
    slug: "twin-cradles-blessing-baby-shower",
    title: "Sweet Twin Blessings Double Joy Baby Shower",
    category: "baby-shower",
    categoryName: "Baby Shower & Godh Bharai",
    description: "Heartwarming twin baby shower card featuring dual pastel wicker bassinets, cute teddy bears, and celebratory baby bunting.",
    tags: ["Twins", "Baby Shower", "Double Joy", "Cradles", "Pastel", "Teddy Bears"],
    featured: true,
    bgSvg: `
      <defs>
        <linearGradient id="bg-tcb" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#FEFCE8"/>
          <stop offset="50%" stop-color="#FDF4FF"/>
          <stop offset="100%" stop-color="#F5F3FF"/>
        </linearGradient>
      </defs>
      <rect width="731" height="1024" fill="url(#bg-tcb)"/>
      ${renderOrnateBorder("#EAB308", 24)}
      ${renderPartyBunting(["#38BDF8", "#F472B6", "#FBBF24", "#34D399"])}
      <!-- Bottom Twin Cradles with Teddy Bears -->
      <g transform="translate(365, 875)">
        <ellipse cx="0" cy="50" rx="220" ry="35" fill="#FEF9C3" opacity="0.6"/>
        <!-- Left Cradle (Blue Ribbon) -->
        <g transform="translate(-85, 0)">
          <rect x="-45" y="-15" width="90" height="45" rx="10" fill="#E0F2FE" stroke="#38BDF8" stroke-width="2"/>
          <ellipse cx="0" cy="-15" rx="40" ry="12" fill="#BAE6FD"/>
          <circle cx="0" cy="-18" r="14" fill="#F59E0B"/>
          <circle cx="-12" cy="-28" r="5" fill="#D97706"/>
          <circle cx="12" cy="-28" r="5" fill="#D97706"/>
          <!-- Bow -->
          <circle cx="0" cy="18" r="4" fill="#0284C7"/>
        </g>
        <!-- Right Cradle (Pink Ribbon) -->
        <g transform="translate(85, 0)">
          <rect x="-45" y="-15" width="90" height="45" rx="10" fill="#FCE7F3" stroke="#F472B6" stroke-width="2"/>
          <ellipse cx="0" cy="-15" rx="40" ry="12" fill="#FBCFE8"/>
          <circle cx="0" cy="-18" r="14" fill="#F59E0B"/>
          <circle cx="-12" cy="-28" r="5" fill="#D97706"/>
          <circle cx="12" cy="-28" r="5" fill="#D97706"/>
          <!-- Bow -->
          <circle cx="0" cy="18" r="4" fill="#DB2777"/>
        </g>
      </g>
    `,
    layers: [
      { id: "tcb-invoc", type: "text", text: "🍼 DOUBLE THE BLESSINGS, TWICE THE LOVE! 🍼", fontFamily: "'Cinzel', serif", fontSize: 13, fontWeight: "600", color: "#D97706", y: 195, height: 22, letterSpacing: 2 },
      { id: "tcb-sub", type: "text", text: "JOIN US FOR A JOYFUL TWIN BABY SHOWER CELEBRATING", fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: "600", color: "#4B5563", y: 235, height: 22, letterSpacing: 1.5 },
      { id: "tcb-name", type: "text", text: "Neha & Aniket Rane", fontFamily: "'Playfair Display', serif", fontSize: 46, fontWeight: "bold", color: "#831843", y: 280, height: 58, letterSpacing: 1.5 },
      { id: "tcb-msg", type: "text", text: "Two sweet miracles are on their way to double the happiness in our home! Come shower the parents-to-be with your love and blessings.", fontFamily: "'Outfit', sans-serif", fontSize: 15, fontWeight: "500", color: "#374151", y: 355, height: 44 },
      { id: "tcb-dt", type: "text", text: "Sunday, 20 September 2026 • 11:00 AM", fontFamily: "'Cinzel', serif", fontSize: 17, fontWeight: "bold", color: "#BE185D", y: 415, height: 28, letterSpacing: 1 },
      { id: "tcb-venue", type: "text", text: "Emerald Banquet Hall, Bandra West, Mumbai - 400050", fontFamily: "'Outfit', sans-serif", fontSize: 16, fontWeight: "600", color: "#1F2937", y: 465, height: 28 },
      { id: "tcb-rsvp", type: "text", text: "Warm Greetings: Rane & Sawant Families • +91 98200 99887", fontFamily: "'Outfit', sans-serif", fontSize: 13, fontWeight: "500", color: "#6B7280", y: 520, height: 24 }
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
          <stop offset="50%" stop-color="#FEF3C7"/>
          <stop offset="100%" stop-color="#FDE68A"/>
        </linearGradient>
      </defs>
      <rect width="731" height="1024" fill="url(#bg-sks)"/>
      ${renderOrnateBorder("#B45309", 24)}
      ${renderMarigoldToran()}
      <!-- Bottom Auspicious Kalash, Coconut, and Diyas on Rangoli -->
      <g transform="translate(365, 875)">
        <!-- Floral Rangoli -->
        <circle cx="0" cy="30" r="140" fill="#FEF08A" opacity="0.6"/>
        <circle cx="0" cy="30" r="100" fill="#FED7AA" opacity="0.8"/>
        <!-- Sacred Kalash Pot -->
        <path d="M -40,30 C -45,10 -35,-15 0,-15 C 35,-15 45,10 40,30 Z" fill="#D97706" stroke="#92400E" stroke-width="2"/>
        <rect x="-30" y="30" width="60" height="12" rx="3" fill="#B45309"/>
        <!-- Swastik on Kalash -->
        <path d="M 0,-5 L 0,15 M -10,5 L 10,5 M 0,-5 L 8,-5 M 10,5 L 10,13 M 0,15 L -8,15 M -10,5 L -10,-3" stroke="#DC2626" stroke-width="2" stroke-linecap="round"/>
        <!-- Mango Leaves -->
        <path d="M -25,-15 C -45,-35 -30,-50 -15,-30 Z" fill="#15803D"/>
        <path d="M 25,-15 C 45,-35 30,-50 15,-30 Z" fill="#15803D"/>
        <path d="M 0,-15 C 0,-45 10,-45 0,-15 Z" fill="#16A34A"/>
        <!-- Coconut -->
        <ellipse cx="0" cy="-28" rx="18" ry="24" fill="#78350F"/>
        <!-- Diya on Left -->
        <g transform="translate(-140, 25)">
          <path d="M -16,6 Q 0,18 16,6 Q 0,-4 -16,6 Z" fill="#D97706"/>
          <ellipse cx="0" cy="-6" rx="4" ry="9" fill="#F97316"/>
        </g>
        <!-- Diya on Right -->
        <g transform="translate(140, 25)">
          <path d="M -16,6 Q 0,18 16,6 Q 0,-4 -16,6 Z" fill="#D97706"/>
          <ellipse cx="0" cy="-6" rx="4" ry="9" fill="#F97316"/>
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
          <stop offset="50%" stop-color="#FEF9E7"/>
          <stop offset="100%" stop-color="#F5EFE0"/>
        </linearGradient>
      </defs>
      <rect width="731" height="1024" fill="url(#bg-khc)"/>
      ${renderOrnateBorder("#D97706", 24)}
      ${renderMarigoldToran()}
      <!-- Bottom Holy Cow & Calf Motif -->
      <g transform="translate(365, 875)">
        <ellipse cx="0" cy="50" rx="220" ry="35" fill="#FEF3C7" opacity="0.7"/>
        <!-- Mother Cow -->
        <g transform="translate(-40, 0)">
          <!-- Body -->
          <ellipse cx="0" cy="10" rx="65" ry="38" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="2"/>
          <!-- Ornate Cloth on Back -->
          <path d="M -30,0 Q 0,15 30,0 L 25,25 Q 0,35 -25,25 Z" fill="#DC2626"/>
          <!-- Neck & Head -->
          <ellipse cx="60" cy="-10" rx="20" ry="26" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1.5"/>
          <!-- Horns -->
          <path d="M 55,-30 Q 50,-48 42,-50" fill="none" stroke="#F59E0B" stroke-width="3"/>
          <path d="M 65,-30 Q 70,-48 78,-50" fill="none" stroke="#F59E0B" stroke-width="3"/>
          <!-- Bell around neck -->
          <circle cx="50" cy="8" r="5" fill="#F59E0B"/>
        </g>
        <!-- Little Calf -->
        <g transform="translate(70, 15)">
          <ellipse cx="0" cy="5" rx="32" ry="20" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1.5"/>
          <ellipse cx="-25" cy="-8" rx="12" ry="15" fill="#FFFFFF"/>
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
          <stop offset="50%" stop-color="#FFFDF8"/>
          <stop offset="100%" stop-color="#F4EADB"/>
        </linearGradient>
      </defs>
      <rect width="731" height="1024" fill="url(#bg-twd)"/>
      ${renderOrnateBorder("#92400E", 24)}
      ${renderMarigoldToran()}
      <!-- Bottom Heritage Carved Wooden Doors & Urli -->
      <g transform="translate(365, 875)">
        <ellipse cx="0" cy="50" rx="220" ry="35" fill="#E5E7EB" opacity="0.6"/>
        <!-- Carved Door Frame -->
        <rect x="-90" y="-70" width="180" height="120" fill="#78350F" stroke="#451A03" stroke-width="3"/>
        <line x1="0" y1="-70" x2="0" y2="50" stroke="#451A03" stroke-width="2"/>
        <!-- Brass Door Knobs -->
        <circle cx="-12" cy="-5" r="5" fill="#F59E0B"/>
        <circle cx="12" cy="-5" r="5" fill="#F59E0B"/>
        <!-- Brass Urli with Floating Petals in Center -->
        <ellipse cx="0" cy="45" rx="35" ry="12" fill="#D97706" stroke="#92400E" stroke-width="1.5"/>
        <circle cx="-12" cy="43" r="3" fill="#DC2626"/>
        <circle cx="0" cy="44" r="3.5" fill="#F472B6"/>
        <circle cx="12" cy="43" r="3" fill="#DC2626"/>
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
      ${renderOrnateBorder("#F59E0B", 24)}
      ${renderGlitterStars()}
      <!-- Bottom Modern Villa Silhouette with Glowing Glass Windows -->
      <g transform="translate(365, 875)">
        <ellipse cx="0" cy="50" rx="220" ry="35" fill="#020617"/>
        <!-- Villa Structure -->
        <rect x="-120" y="-55" width="140" height="85" fill="#0F172A" stroke="#334155" stroke-width="1.5"/>
        <rect x="20" y="-35" width="100" height="65" fill="#1E293B" stroke="#334155" stroke-width="1.5"/>
        <!-- Glowing Windows -->
        <rect x="-105" y="-45" width="50" height="35" rx="3" fill="#FEF08A" opacity="0.9"/>
        <rect x="-45" y="-45" width="50" height="35" rx="3" fill="#FEF08A" opacity="0.9"/>
        <rect x="35" y="-25" width="70" height="40" rx="3" fill="#FDE047" opacity="0.9"/>
        <!-- Garden pathway lights -->
        <circle cx="-60" cy="40" r="3" fill="#FEF08A"/>
        <circle cx="0" cy="40" r="3" fill="#FEF08A"/>
        <circle cx="60" cy="40" r="3" fill="#FEF08A"/>
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
          <stop offset="50%" stop-color="#FEF9EE"/>
          <stop offset="100%" stop-color="#FCE7D0"/>
        </linearGradient>
      </defs>
      <rect width="731" height="1024" fill="url(#bg-tvd)"/>
      ${renderOrnateBorder("#C2410C", 24)}
      ${renderMarigoldToran()}
      <!-- Bottom Tulsi Vrindavan & Diyas -->
      <g transform="translate(365, 875)">
        <ellipse cx="0" cy="50" rx="220" ry="35" fill="#FED7AA" opacity="0.6"/>
        <!-- Tulsi Vrindavan Base -->
        <rect x="-35" y="10" width="70" height="30" rx="3" fill="#C2410C"/>
        <rect x="-25" y="-20" width="50" height="30" rx="3" fill="#EA580C"/>
        <!-- Tulsi Plant Foliage -->
        <circle cx="0" cy="-35" r="24" fill="#15803D"/>
        <circle cx="-14" cy="-30" r="16" fill="#16A34A"/>
        <circle cx="14" cy="-30" r="16" fill="#16A34A"/>
        <circle cx="0" cy="-45" r="14" fill="#22C55E"/>
        <!-- Flanking Diyas -->
        <g transform="translate(-110, 30)">
          <path d="M -15,5 Q 0,16 15,5 Q 0,-3 -15,5 Z" fill="#D97706"/>
          <ellipse cx="0" cy="-6" rx="4" ry="8" fill="#F97316"/>
        </g>
        <g transform="translate(110, 30)">
          <path d="M -15,5 Q 0,16 15,5 Q 0,-3 -15,5 Z" fill="#D97706"/>
          <ellipse cx="0" cy="-6" rx="4" ry="8" fill="#F97316"/>
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
          <stop offset="50%" stop-color="#FEF9EE"/>
          <stop offset="100%" stop-color="#FEF08A"/>
        </linearGradient>
      </defs>
      <rect width="731" height="1024" fill="url(#bg-bgl)"/>
      ${renderOrnateBorder("#D97706", 24)}
      ${renderMarigoldToran()}
      <!-- Bottom Blooming Lotus with Sleeping Baby -->
      <g transform="translate(365, 875)">
        <ellipse cx="0" cy="50" rx="220" ry="35" fill="#FEF08A" opacity="0.6"/>
        <!-- Lotus Petals Outer -->
        <path d="M -80,10 C -120,-30 -80,-60 -50,-10 Z" fill="#F472B6"/>
        <path d="M 80,10 C 120,-30 80,-60 50,-10 Z" fill="#F472B6"/>
        <path d="M -50,15 C -70,-45 -30,-65 0,-15 Z" fill="#FB7185"/>
        <path d="M 50,15 C 70,-45 30,-65 0,-15 Z" fill="#FB7185"/>
        <path d="M 0,20 C 0,-60 40,-60 0,20 Z" fill="#F43F5E"/>
        <!-- Baby in Swaddle in Lotus center -->
        <g transform="translate(0, -5)">
          <ellipse cx="0" cy="0" rx="35" ry="22" fill="#FDE047"/>
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
          <stop offset="50%" stop-color="#FDFBF7"/>
          <stop offset="100%" stop-color="#DCFCE7"/>
        </linearGradient>
      </defs>
      <rect width="731" height="1024" fill="url(#bg-kfp)"/>
      ${renderOrnateBorder("#0D9488", 24)}
      ${renderMarigoldToran()}
      <!-- Bottom Krishna Flute, Peacock Feather & Cradle -->
      <g transform="translate(365, 875)">
        <ellipse cx="0" cy="50" rx="220" ry="35" fill="#CCFBF1" opacity="0.6"/>
        <!-- Peacock Feather -->
        <g transform="translate(30, -20) rotate(40)">
          <path d="M 0,-40 C -25,-25 -25,25 0,40 C 25,25 25,-25 0,-40 Z" fill="#0284C7"/>
          <ellipse cx="0" cy="0" rx="14" ry="20" fill="#059669"/>
          <circle cx="0" cy="2" r="7" fill="#1E3A8A"/>
        </g>
        <!-- Golden Flute -->
        <rect x="-120" y="5" width="240" height="12" rx="4" fill="#F59E0B" stroke="#B45309" stroke-width="1.5" transform="rotate(-15)"/>
        <!-- Flute Holes -->
        <circle cx="-60" cy="18" r="3" fill="#78350F"/>
        <circle cx="-30" cy="10" r="3" fill="#78350F"/>
        <circle cx="0" cy="2" r="3" fill="#78350F"/>
        <circle cx="30" cy="-6" r="3" fill="#78350F"/>
        <!-- Makhan Handi -->
        <g transform="translate(-100, 20)">
          <ellipse cx="0" cy="5" rx="20" ry="24" fill="#D97706"/>
          <ellipse cx="0" cy="-14" rx="14" ry="6" fill="#FFFFFF"/>
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
          <stop offset="50%" stop-color="#1E293B"/>
          <stop offset="100%" stop-color="#020617"/>
        </linearGradient>
      </defs>
      <rect width="731" height="1024" fill="url(#bg-cms)"/>
      ${renderOrnateBorder("#F59E0B", 24)}
      ${renderGlitterStars()}
      <!-- Bottom Moon with Sleeping Baby on Cloud -->
      <g transform="translate(365, 875)">
        <ellipse cx="0" cy="50" rx="220" ry="35" fill="#020617"/>
        <!-- Cloud Pillow -->
        <ellipse cx="0" cy="25" rx="140" ry="40" fill="#FFFFFF" opacity="0.95"/>
        <ellipse cx="-80" cy="15" rx="60" ry="30" fill="#FFFFFF" opacity="0.95"/>
        <ellipse cx="80" cy="15" rx="60" ry="30" fill="#FFFFFF" opacity="0.95"/>
        <!-- Golden Crescent Moon -->
        <g transform="translate(0, -25)">
          <path d="M -45,-55 A 55 55 0 0 0 45,45 A 45 45 0 1 1 -45,-55 Z" fill="#FDE047"/>
          <!-- Sleeping Baby in Moon cradle -->
          <ellipse cx="5" cy="5" rx="28" ry="16" fill="#38BDF8"/>
          <circle cx="20" cy="-2" r="10" fill="#FED7AA"/>
          <circle cx="18" cy="-2" r="2.5" fill="#F472B6" opacity="0.6"/>
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
          <stop offset="50%" stop-color="#FEF3C7"/>
          <stop offset="100%" stop-color="#FDE68A"/>
        </linearGradient>
      </defs>
      <rect width="731" height="1024" fill="url(#bg-rrj)"/>
      ${renderOrnateBorder("#B45309", 24)}
      ${renderMarigoldToran()}
      <!-- Bottom Royal Jharokha Arch & Silver Jhula -->
      <g transform="translate(365, 875)">
        <ellipse cx="0" cy="50" rx="220" ry="35" fill="#FDE68A" opacity="0.6"/>
        <!-- Ornate Cusped Arch Pillars -->
        <rect x="-140" y="-80" width="20" height="130" fill="#D97706" rx="3"/>
        <rect x="120" y="-80" width="20" height="130" fill="#D97706" rx="3"/>
        <!-- Cusped Arch Header -->
        <path d="M -140,-80 Q -70,-115 0,-85 Q 70,-115 140,-80" fill="none" stroke="#B45309" stroke-width="4"/>
        <!-- Hanging Silver Cradle -->
        <line x1="-80" y1="-75" x2="-60" y2="10" stroke="#CBD5E1" stroke-width="3"/>
        <line x1="80" y1="-75" x2="60" y2="10" stroke="#CBD5E1" stroke-width="3"/>
        <rect x="-70" y="10" width="140" height="25" rx="6" fill="#F1F5F9" stroke="#94A3B8" stroke-width="2"/>
        <ellipse cx="0" cy="10" rx="55" ry="10" fill="#DC2626"/>
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
          <stop offset="50%" stop-color="#FFFDF7"/>
          <stop offset="100%" stop-color="#F4EADB"/>
        </linearGradient>
      </defs>
      <rect width="731" height="1024" fill="url(#bg-cws)"/>
      ${renderOrnateBorder("#CA8A04", 24)}
      ${renderPartyBunting(["#38BDF8", "#34D399", "#FBBF24", "#F472B6"])}
      <!-- Bottom Safari Friends around Wicker Cradle -->
      <g transform="translate(365, 875)">
        <ellipse cx="0" cy="50" rx="220" ry="35" fill="#FEF08A" opacity="0.6"/>
        <!-- Baby Elephant on left -->
        <g transform="translate(-120, 0)">
          <circle cx="0" cy="0" r="28" fill="#94A3B8"/>
          <ellipse cx="-20" cy="-5" rx="16" ry="22" fill="#64748B"/>
          <!-- Trunk -->
          <path d="M 10,5 Q 25,25 35,15" fill="none" stroke="#94A3B8" stroke-width="6" stroke-linecap="round"/>
          <circle cx="0" cy="-6" r="3" fill="#1E293B"/>
        </g>
        <!-- Wicker Bassinet in Center -->
        <g transform="translate(0, 10)">
          <rect x="-45" y="-15" width="90" height="45" rx="10" fill="#D97706" stroke="#92400E" stroke-width="2"/>
          <ellipse cx="0" cy="-15" rx="40" ry="12" fill="#FEF3C7"/>
          <!-- Sleeping Baby -->
          <circle cx="0" cy="-18" r="12" fill="#FED7AA"/>
          <circle cx="-8" cy="-24" r="3" fill="#F472B6" opacity="0.6"/>
        </g>
        <!-- Baby Lion Cub on right -->
        <g transform="translate(120, 0)">
          <circle cx="0" cy="0" r="26" fill="#FBBF24"/>
          <circle cx="-20" cy="-18" r="8" fill="#D97706"/>
          <circle cx="20" cy="-18" r="8" fill="#D97706"/>
          <circle cx="-8" cy="-4" r="3" fill="#1E293B"/>
          <circle cx="8" cy="-4" r="3" fill="#1E293B"/>
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
  console.log(`=== Deploying ${NEW_TEMPLATES.length} Brand New Templates Across 4 Categories ===`);

  for (const t of NEW_TEMPLATES) {
    console.log(`\nProcessing: [${t.category}] ${t.id} - "${t.title}"`);
    
    // 1. Build Background SVG
    const bgSvg = `
<svg width="731" height="1024" viewBox="0 0 731 1024" xmlns="http://www.w3.org/2000/svg">
  ${t.bgSvg}
</svg>
`;
    const bgBuffer = await sharp(Buffer.from(bgSvg)).jpeg({ quality: 92 }).toBuffer();

    // Save backgrounds
    const bgJpgPath = `public/templates/backgrounds/${t.id}-bg.jpg`;
    const bgWebpPath = `public/templates/backgrounds/${t.id}-bg.webp`;
    const rawBgPath = `assets/raw-masters/backgrounds/${t.id}-bg.jpg`;

    fs.writeFileSync(bgJpgPath, bgBuffer);
    fs.writeFileSync(rawBgPath, bgBuffer);
    await sharp(bgBuffer).webp({ quality: 90, effort: 6 }).toFile(bgWebpPath);
    console.log(`  ✓ Backgrounds generated: JPEG & WebP`);

    // 2. Build Text Overlay SVG for Preview
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
      textOverlaySvg += `<text x="${cx}" y="${cy}" class="txt" font-family="${escapeXml(ff)}" font-size="${l.fontSize}" font-weight="${l.fontWeight}" fill="${escapeXml(l.color)}" ${ls} filter="drop-shadow(0 1px 2px rgba(255,255,255,0.7))">${escapeXml(l.text)}</text>`;
    }
    textOverlaySvg += `</svg>`;

    // Composite Preview Card
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
    console.log(`  ✓ Preview Card generated: JPEG & WebP`);
  }

  // 3. Update assets/raw-masters/manifest.json
  const manifestPath = "assets/raw-masters/manifest.json";
  let manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
  for (const t of NEW_TEMPLATES) {
    const existingIdx = manifest.findIndex(m => m.id === t.id);
    const item = {
      id: t.id,
      category: t.category,
      title: t.title,
      type: "handcrafted-vector-art",
      masterBackground: `assets/raw-masters/backgrounds/${t.id}-bg.jpg`,
      masterPreview: `assets/raw-masters/previews/${t.id}-card.jpg`,
      dimensions: "731x1024"
    };
    if (existingIdx >= 0) {
      manifest[existingIdx] = item;
    } else {
      manifest.push(item);
    }
  }
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), "utf8");
  console.log(`\n✓ Updated manifest.json with all ${NEW_TEMPLATES.length} templates (Total: ${manifest.length})`);

  // 4. Update src/data/templates.ts
  console.log("\nUpdating src/data/templates.ts...");
  const templatesTsPath = "src/data/templates.ts";
  const origContent = fs.readFileSync(templatesTsPath, "utf8");

  // Read existing templates by parsing
  // Keep ALL existing templates (including the 7 wedding templates!)
  const splitMarker = "export const CATEGORIES = [";
  const [samplesPart, catPart] = origContent.split(splitMarker);

  // Parse existing SAMPLE_TEMPLATES
  const cleanSamplesJson = samplesPart
    .replace("import { CardTemplate } from \"@/types/editor\";\n\nexport const SAMPLE_TEMPLATES: CardTemplate[] =", "")
    .trim()
    .replace(/;$/, "");

  let existingTemplates = eval(cleanSamplesJson);
  console.log(`Existing templates in file: ${existingTemplates.length}`);

  // Filter out any duplicates if they exist, then append new ones
  const newIds = new Set(NEW_TEMPLATES.map(t => t.id));
  existingTemplates = existingTemplates.filter(t => !newIds.has(t.id));

  // Transform new templates to CardTemplate objects
  for (const t of NEW_TEMPLATES) {
    const cardTemplate = {
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
      featured: t.featured,
      layers: t.layers.map((l, idx) => ({
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
    existingTemplates.push(cardTemplate);
  }

  // Count by category
  const counts = {};
  existingTemplates.forEach(t => counts[t.category] = (counts[t.category] || 0) + 1);
  console.log("New category counts:", counts);
  console.log(`Total templates now: ${existingTemplates.length}`);

  // Write new templates.ts
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
  console.log("✓ src/data/templates.ts written successfully!");
}

main().catch(err => {
  console.error("FATAL ERROR in deploy script:", err);
  process.exit(1);
});
