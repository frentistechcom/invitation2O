export interface StickerItem {
  id: string;
  name: string;
  category: "Religious" | "Wedding" | "Floral" | "Celebration";
  svg: string;
}

export const STICKERS_COLLECTION: StickerItem[] = [
  {
    id: "ganesha-traditional",
    name: "Shree Ganesha",
    category: "Religious",
    svg: `<svg viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 12C45 12 40 16 38 21C34 19 28 20 25 24C21 29 22 36 26 40C24 43 23 47 24 51C25 57 29 62 34 65C33 67 33 70 34 72C36 76 40 78 45 78C46 80 48 82 51 82C55 82 58 79 59 75C61 74 63 72 65 69C70 65 73 59 73 52C73 47 71 42 67 38C70 33 69 27 65 23C61 19 55 18 50 12ZM48 20C51 22 55 24 57 27C54 29 50 30 46 29C45 25 46 22 48 20ZM36 30C38 30 40 31 41 33C38 35 34 35 32 33C32 31 34 30 36 30ZM63 33C64 34 64 36 62 37C60 38 57 37 56 35C58 33 61 32 63 33ZM50 34C55 34 58 38 58 43C58 48 55 52 50 52C45 52 42 48 42 43C42 38 45 34 50 34ZM32 44C34 44 35 46 35 48C33 50 30 50 29 48C29 46 30 44 32 44ZM67 48C67 49 66 51 64 51C62 50 62 48 63 47C64 46 66 46 67 48ZM50 56C56 56 61 60 61 66C61 71 56 75 50 75C44 75 39 71 39 66C39 60 44 56 50 56Z"/>
    </svg>`,
  },
  {
    id: "om-sacred",
    name: "Om Sacred",
    category: "Religious",
    svg: `<svg viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M48 20C42 20 37 24 35 30C32 26 27 24 22 26C15 29 12 37 15 44C18 51 25 54 32 53C33 58 36 63 41 66C47 70 55 70 61 66C66 62 69 56 68 50C67 44 62 40 56 41C54 41 52 42 50 43C50 41 51 39 53 37C56 34 61 34 64 37L68 32C63 27 56 25 50 27C49 23 49 20 48 20ZM72 22C68 22 65 24 64 26C66 28 69 28 72 27C75 26 79 28 80 31C81 33 80 36 78 37C76 38 73 38 71 37L69 41C73 43 78 43 82 40C86 37 87 31 84 27C82 24 77 22 72 22ZM75 14C73 14 71 16 71 18C71 20 73 22 75 22C77 22 79 20 79 18C79 16 77 14 75 14Z"/>
    </svg>`,
  },
  {
    id: "kalash",
    name: "Mangal Kalash",
    category: "Religious",
    svg: `<svg viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 14C45 14 42 18 42 22C38 22 34 25 32 29C35 30 38 30 40 29C38 33 38 37 40 40C43 38 46 36 47 33C48 37 52 37 53 33C54 36 57 38 60 40C62 37 62 33 60 29C62 30 65 30 68 29C66 25 62 22 58 22C58 18 55 14 50 14ZM36 44L34 48H66L64 44H36ZM32 50C30 55 28 62 30 69C32 76 38 82 46 84V88H54V84C62 82 68 76 70 69C72 62 70 55 68 50H32ZM50 56C53 56 55 58 55 61C55 64 53 66 50 66C47 66 45 64 45 61C45 58 47 56 50 56Z"/>
    </svg>`,
  },
  {
    id: "wedding-rings",
    name: "Wedding Rings",
    category: "Wedding",
    svg: `<svg viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M42 28C32 28 24 36 24 46C24 56 32 64 42 64C46 64 50 62 53 60C56 62 60 64 64 64C74 64 82 56 82 46C82 36 74 28 64 28C60 28 56 30 53 32C50 30 46 28 42 28ZM42 34C48 34 53 39 53 46C53 52 48 58 42 58C35 58 30 52 30 46C30 39 35 34 42 34ZM64 34C70 34 76 39 76 46C76 52 70 58 64 58C58 58 53 52 53 46C53 39 58 34 64 34ZM42 16L39 22H45L42 16Z"/>
    </svg>`,
  },
  {
    id: "diya-traditional",
    name: "Deepam Diya",
    category: "Religious",
    svg: `<svg viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 10C48 16 44 24 44 32C44 40 48 46 50 48C52 46 56 40 56 32C56 24 52 16 50 10ZM25 50C22 55 22 62 26 68C32 76 41 80 50 80C59 80 68 76 74 68C78 62 78 55 75 50C68 56 59 60 50 60C41 60 32 56 25 50ZM35 84H65V88H35V84Z"/>
    </svg>`,
  },
  {
    id: "floral-corner",
    name: "Royal Floral Corner",
    category: "Floral",
    svg: `<svg viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 12V42C14 38 18 36 22 36C26 36 30 39 32 44C36 38 42 36 48 38C44 32 42 26 44 20C40 24 34 26 28 24C30 20 34 16 38 14C32 14 26 16 22 20C20 16 16 13 12 12ZM20 22C24 22 26 24 26 27C26 30 24 32 20 32C18 32 16 30 16 27C16 24 18 22 20 22Z"/>
    </svg>`,
  },
  {
    id: "celebration-balloons",
    name: "Birthday Balloons",
    category: "Celebration",
    svg: `<svg viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M42 16C32 16 24 25 24 36C24 47 31 56 40 57L39 62H45L44 57C53 56 60 47 60 36C60 25 52 16 42 16ZM64 24C58 24 53 28 51 34C54 35 56 37 57 40C64 41 70 48 70 56C70 63 65 69 59 71L58 74H62L61 71C70 69 76 61 76 52C76 43 71 36 64 34C64 30 64 24 64 24ZM42 62C42 74 46 86 50 94H48C44 86 40 74 40 62H42Z"/>
    </svg>`,
  },
  {
    id: "swastik",
    name: "Shubh Swastik",
    category: "Religious",
    svg: `<svg viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 22H54V46H22V22ZM46 30H30V38H46V30ZM78 22V54H54V78H46V54H22V46H70V30H62V22H78ZM54 54V70H70V62H54V54ZM30 62H46V70H30V62Z"/>
      <circle cx="38" cy="34" r="3"/>
      <circle cx="62" cy="34" r="3"/>
      <circle cx="38" cy="66" r="3"/>
      <circle cx="62" cy="66" r="3"/>
    </svg>`,
  },
];
