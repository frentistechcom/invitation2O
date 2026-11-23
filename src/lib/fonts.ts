export interface FontOption {
  name: string;
  family: string;
  category: "Calligraphy" | "Serif" | "Modern Sans" | "Indian Traditional" | "Regional";
  sample: string;
}

export const CURATED_FONTS: FontOption[] = [
  // Wedding Calligraphy & Script
  { name: "Great Vibes", family: "'Great Vibes', cursive", category: "Calligraphy", sample: "Wedding Ceremony" },
  { name: "Alex Brush", family: "'Alex Brush', cursive", category: "Calligraphy", sample: "Save The Date" },
  { name: "Dancing Script", family: "'Dancing Script', cursive", category: "Calligraphy", sample: "Celebration of Love" },
  { name: "Pinyon Script", family: "'Pinyon Script', cursive", category: "Calligraphy", sample: "Cordially Invited" },
  { name: "Marck Script", family: "'Marck Script', cursive", category: "Calligraphy", sample: "Together With Parents" },
  { name: "Playfair Display", family: "'Playfair Display', serif", category: "Serif", sample: "Raveendra & Kanchana" },
  { name: "Cinzel Decorative", family: "'Cinzel Decorative', serif", category: "Serif", sample: "ROYAL WEDDING" },
  { name: "Cinzel", family: "'Cinzel', serif", category: "Serif", sample: "CORDIALLY INVITED" },
  { name: "Cormorant Garamond", family: "'Cormorant Garamond', serif", category: "Serif", sample: "December 28, 2026" },
  { name: "Marcellus", family: "'Marcellus', serif", category: "Indian Traditional", sample: "Shree Ganeshay Namah" },
  { name: "Rozha One", family: "'Rozha One', serif", category: "Indian Traditional", sample: "शुभ विवाह" },
  { name: "Yatra One", family: "'Yatra One', cursive", category: "Indian Traditional", sample: "संगीत एवं हल्दी" },
  { name: "Montserrat", family: "'Montserrat', sans-serif", category: "Modern Sans", sample: "Palace Junction Hall, Bengaluru" },
  { name: "Poppins", family: "'Poppins', sans-serif", category: "Modern Sans", sample: "TIME: 12:45 PM ONWARDS" },
  { name: "Outfit", family: "'Outfit', sans-serif", category: "Modern Sans", sample: "RSVP & DIRECTIONS" },
  { name: "Noto Serif Devanagari", family: "'Noto Serif Devanagari', serif", category: "Regional", sample: "श्रीमती एवं श्री" },
  { name: "Noto Sans Gujarati", family: "'Noto Sans Gujarati', sans-serif", category: "Regional", sample: "માંગલિક પ્રસંગ" },
  { name: "Noto Sans Telugu", family: "'Noto Sans Telugu', sans-serif", category: "Regional", sample: "శుభకార్యం" },
  { name: "Noto Serif Tamil", family: "'Noto Serif Tamil', serif", category: "Regional", sample: "திருமண அழைப்பிதழ்" },
];

export const GOOGLE_FONTS_STYLESHEET =
  "https://fonts.googleapis.com/css2?" +
  "family=Alex+Brush&" +
  "family=Cinzel:wght@400;600;700&" +
  "family=Cinzel+Decorative:wght@400;700&" +
  "family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&" +
  "family=Dancing+Script:wght@400;700&" +
  "family=Great+Vibes&" +
  "family=Inter:wght@300;400;500;600;700;800&" +
  "family=Marcellus&" +
  "family=Marck+Script&" +
  "family=Montserrat:wght@300;400;500;600;700&" +
  "family=Noto+Sans+Gujarati:wght@400;600&" +
  "family=Noto+Sans+Telugu:wght@400;600&" +
  "family=Noto+Serif+Devanagari:wght@400;600;700&" +
  "family=Noto+Serif+Tamil:wght@400;600&" +
  "family=Outfit:wght@300;400;500;600;700&" +
  "family=Pinyon+Script&" +
  "family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&" +
  "family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&" +
  "family=Rozha+One&" +
  "family=Yatra+One&display=swap";

// Helper to ensure fonts are fully loaded into document before canvas export
export async function ensureFontsLoaded(fonts: string[]): Promise<void> {
  if (typeof document === "undefined" || !("fonts" in document)) return;

  const loadPromises = fonts.map(async (fontName) => {
    try {
      await document.fonts.load(`16px ${fontName}`);
    } catch (e) {
      console.warn(`Font ${fontName} load warning:`, e);
    }
  });

  await Promise.all(loadPromises);
}
