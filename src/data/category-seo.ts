export interface CategorySeoData {
  categorySlug: string;
  categoryName: string;
  h1: string;
  seoTitle: string;
  metaDescription: string;
  heroBadge: string;
  leadParagraph: string;
  detailedGuide: {
    heading: string;
    paragraphs: string[];
  };
  keyFeatures: {
    title: string;
    description: string;
  }[];
  regionalEditionsTitle: string;
  regionalLinks: {
    title: string;
    href: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  stuffedKeywords: string[];
}

export const CATEGORY_SEO_DATA: Record<string, CategorySeoData> = {
  "naming-ceremony": {
    categorySlug: "naming-ceremony",
    categoryName: "Naming Ceremony & Namkaran",
    h1: "Free Online Naming Ceremony & Namkaran Invitation Card Maker",
    seoTitle: "Naming Ceremony Invitation Card Maker Online Free - 300 DPI Namkaran Cards",
    metaDescription:
      "Design personalized Naming Ceremony & Namkaran invitation cards online for free. Cute cradle swing designs, venue Google Maps QR code, Devanagari & English fonts, and instant 300 DPI WhatsApp download.",
    heroBadge: "100% Free Naming Ceremony Studio • No Watermark",
    leadParagraph:
      "Celebrate your baby's naming milestone with handcrafted digital and print-ready invitation cards. Choose from traditional wooden cradle swings, golden glitter stars, Bal Gopal motifs, and modern pastel watercolor themes. Add parents' and grandparents' names, muhurat timings, and a scannable Google Maps venue QR code in English, Marathi, or Hindi.",
    detailedGuide: {
      heading: "How to Create a Professional Naming Ceremony Invitation in 2 Minutes",
      paragraphs: [
        "Welcoming a newborn into the family and conferring their name is one of life's most precious occasions. Whether you are hosting a traditional Vedic Namkaran Sanskar, a Maharashtrian Barse (बारसे), a South Indian Cradle Ceremony (Peyattu / Thottil), or a modern Western naming day party, an invitation card sets the joyous tone for your celebration.",
        "With InvitationCardMaker.in, you no longer need expensive graphic designers or complicated software. Simply browse our curated collection of high-resolution templates, click on any text box to edit names, date, and venue details, paste your venue Google Maps link to generate an instant scannable QR code, and export your 300 DPI print-ready image with zero watermarks.",
        "Our canvas studio fully supports Indian regional languages. You can seamlessly type or paste Marathi, Hindi, Telugu, Tamil, and Gujarati text using authentic Google Fonts like Poppins, Rozha One, Yatra One, and Inter.",
      ],
    },
    keyFeatures: [
      {
        title: "Google Maps Venue QR Code",
        description:
          "Help your guests arrive smoothly by adding a scannable Google Maps pin code directly on the invitation card.",
      },
      {
        title: "Ultra-Clear 300 DPI Quality",
        description:
          "Export uncompressed high-resolution cards suitable for professional 300 GSM cardstock printing and photo studio prints.",
      },
      {
        title: "WhatsApp & Mobile Ready",
        description:
          "Optimized 2:3 vertical aspect ratio that displays sharply on iPhone and Android screens without WhatsApp compression artifacts.",
      },
      {
        title: "Multi-Language & Devanagari Fonts",
        description:
          "Pair English headers with sacred Sanskrit Shlokas or Marathi/Hindi text using Google Fonts like Inter and Poppins.",
      },
    ],
    regionalEditionsTitle: "Special Regional & Marathi Naming Ceremony Editions",
    regionalLinks: [
      {
        title: "Marathi Namkaran Invitation Card (नामकरण निमंत्रण पत्रिका)",
        href: "/marathi/namkaran-invitation-card",
        description:
          "Authentic Marathi Barse & Namkaran invitation cards with traditional cradle themes, Palna geet, and bilingual Marathi-English wording.",
      },
      {
        title: "Naming Ceremony in Marathi (नामकरण सोहळा)",
        href: "/marathi/naming-ceremony",
        description:
          "Dedicated guide for Maharashtrian families with modern digital designs, baby boy/girl wording, and venue QR code.",
      },
      {
        title: "Namkaran Sanskar Invitation Card (नामकरण संस्कार)",
        href: "/marathi/namkaran-sanskar",
        description:
          "Vedic Namkaran Sanskar invitation cards in Hindi & Marathi with Bal Gopal art, Havan timings, and auspicious shlokas.",
      },
    ],
    faqs: [
      {
        question: "How do I make a naming ceremony invitation card online for free?",
        answer:
          "Select any template from our Naming Ceremony category above. Click 'Customize' to launch the online studio. Edit the baby's name, parents' names, date, and venue. Optionally add a Google Maps venue QR code and download your 300 DPI print-ready image instantly.",
      },
      {
        question: "Can I add the baby's photo to the naming ceremony card?",
        answer:
          "Yes! Click the 'Add Image' button in the toolbar, select your favorite photo of your baby, and adjust its position and size anywhere on your card.",
      },
      {
        question: "Is there any watermark on the downloaded card?",
        answer:
          "No, there is 100% zero watermark. All downloads are completely free and unbranded in full 300 DPI resolution.",
      },
      {
        question: "Can I write invitation wording in Marathi or Hindi?",
        answer:
          "Yes! You can type or paste Marathi and Hindi Devanagari text directly into any text field. Our editor supports Google Fonts like Poppins, Rozha One, and Yatra One for beautiful typography.",
      },
    ],
    stuffedKeywords: [
      "naming ceremony invitation card maker online free",
      "baby naming ceremony card maker with photo",
      "namkaran invitation card maker in marathi and english",
      "barse nimantran patrika format online",
      "namkaran sanskar invitation card maker free",
      "cradle ceremony invitation card editor",
      "online naming ceremony card maker no watermark",
      "digital naming ceremony invitation whatsapp 300 dpi",
      "baby boy naming ceremony invitation template",
      "baby girl namkaran card design with venue qr code",
      "free indian baby naming card maker",
    ],
  },

  wedding: {
    categorySlug: "wedding",
    categoryName: "Wedding & Lagna Patrika",
    h1: "Free Online Indian Wedding Invitation Card Maker - 300 DPI Shaadi Cards",
    seoTitle: "Indian Wedding Invitation Card Maker Online Free - Royal Shaadi & Lagna Patrika",
    metaDescription:
      "Create luxury Indian wedding invitations online for free. Royal Rajasthani, South Indian temple, and modern floral templates with Google Maps QR code, Ganesh shlokas, and 300 DPI WhatsApp download.",
    heroBadge: "Royal Indian Wedding Studio • 100% Free",
    leadParagraph:
      "Craft timeless Indian wedding cards, Hindu Vivah Nimantran Patrika, and royal wedding invitations online. Personalize Dulha-Dulhan names, Sangeet & Haldi dates, and add an interactive Google Maps venue locator.",
    detailedGuide: {
      heading: "Design Royal Indian Wedding Invitations with Ease",
      paragraphs: [
        "An Indian wedding is a magnificent multi-day celebration of heritage, family love, and sacred rituals. From Ganesh Pooja and Haldi-Mehendi to Sangeet and Pheras, your wedding invitation sets the royal expectation for your big day.",
        "Our free online wedding card maker offers authentic traditional motifs like Lord Ganesha, Kalash, royal elephants, peacock feathers, and gold foil borders. Add your Google Maps venue link to create an interactive QR code that makes venue navigation effortless for your guests.",
      ],
    },
    keyFeatures: [
      {
        title: "Traditional Hindu Cultural Motifs",
        description:
          "Incorporate sacred Ganesha shlokas, mangal sutra, kalash, and royal palace arches into your wedding card design.",
      },
      {
        title: "Multi-Day Event Program",
        description:
          "Customize schedules for Haldi, Mehendi, Sangeet, Wedding Muhurat, and Reception on one elegant digital invite.",
      },
      {
        title: "Interactive Google Maps QR",
        description:
          "Guests simply scan the card with their smartphone camera to open GPS turn-by-turn navigation straight to the wedding hall.",
      },
      {
        title: "Print-Ready 300 DPI Output",
        description:
          "Download in vector-sharp resolution suitable for luxury wedding card printing presses or instant WhatsApp broadcasting.",
      },
    ],
    regionalEditionsTitle: "Regional Wedding Invitations",
    regionalLinks: [
      {
        title: "Marathi Lagna Patrika (लग्न पत्रिका)",
        href: "/templates/wedding/marathi",
        description: "Authentic Marathi wedding cards with traditional shlokas and fonts.",
      },
      {
        title: "Hindi Vivah Nimantran (विवाह निमंत्रण)",
        href: "/templates/wedding/hindi",
        description: "Traditional Hindi wedding card wording and sacred Vedic verses.",
      },
    ],
    faqs: [
      {
        question: "Can I download my wedding card in print quality?",
        answer:
          "Yes! All wedding invitation templates export in 300 DPI resolution, which is the exact standard required by printing presses and digital photo labs.",
      },
      {
        question: "How do I add our venue location on Google Maps?",
        answer:
          "Click the QR Code tool in the editor, paste your Google Maps link, and a scannable QR code will be placed on your card.",
      },
    ],
    stuffedKeywords: [
      "indian wedding invitation card maker online free",
      "hindu wedding card templates with ganesh shloka",
      "digital wedding invitation card maker whatsapp",
      "lagna patrika maker online in marathi and english",
      "royal wedding invitation card with google maps qr code",
      "free online shaadi card maker 300 dpi print download",
      "online indian wedding card editor no watermark",
    ],
  },

  "baby-shower": {
    categorySlug: "baby-shower",
    categoryName: "Baby Shower & Dohale Jevan",
    h1: "Free Online Baby Shower & Dohale Jevan Invitation Card Maker",
    seoTitle: "Baby Shower Invitation Card Maker Online Free - Godh Bharai & Dohale Jevan",
    metaDescription:
      "Design traditional Godh Bharai, Dohale Jevan, Seemantham, and modern Baby Shower invitations online. Add venue Google Maps QR code and download free 300 DPI print-ready cards.",
    heroBadge: "Baby Shower & Godh Bharai Studio • 100% Free",
    leadParagraph:
      "Celebrate the mother-to-be with joyous baby shower and Dohale Jevan invitations. Choose from floral swings, Bal Gopal themes, and pastel nurseries with bilingual English, Hindi, and Marathi wording.",
    detailedGuide: {
      heading: "Celebrate the Miracle on the Way",
      paragraphs: [
        "In Indian culture, welcoming a new baby begins months before birth with sacred celebrations like Godh Bharai (North India), Dohale Jevan & Oti Bharane (Maharashtra), Seemantham & Valaikappu (South India), and Shrimant (Gujarat).",
        "Our free online baby shower studio provides culturally authentic and contemporary Western pastel templates with zero watermarks and instant 300 DPI downloads.",
      ],
    },
    keyFeatures: [
      {
        title: "Floral Swings & Green Bangles",
        description:
          "Traditional motifs like Phulancha Palna, green chuda bangles, and lotus blossoms for authentic celebrations.",
      },
      {
        title: "Google Maps Venue QR Code",
        description: "Let your loved ones find your banquet hall or home address with one simple camera scan.",
      },
    ],
    regionalEditionsTitle: "Regional Baby Shower Editions",
    regionalLinks: [
      {
        title: "Marathi Dohale Jevan (डोहळे जेवण व ओटी भरणे)",
        href: "/templates/baby-shower/marathi",
        description: "Authentic Marathi Dohale Jevan cards with traditional customs and wording.",
      },
      {
        title: "Hindi Godh Bharai (गोद भराई निमंत्रण)",
        href: "/templates/baby-shower/hindi",
        description: "Traditional Hindi baby shower wording with Bal Gopal art and blessings.",
      },
    ],
    faqs: [
      {
        question: "Can I type in regional Indian languages?",
        answer: "Yes, our editor supports Marathi, Hindi, Tamil, Telugu, Gujarati, and English.",
      },
    ],
    stuffedKeywords: [
      "baby shower invitation card maker online free",
      "godh bharai invitation card in hindi and english",
      "dohale jevan invitation card maker in marathi",
      "seemantham invitation card maker online",
      "valaikappu invitation card in tamil",
      "baby shower whatsapp invitation with venue qr code",
    ],
  },

  housewarming: {
    categorySlug: "housewarming",
    categoryName: "Housewarming & Griha Pravesh",
    h1: "Free Online Housewarming & Griha Pravesh Invitation Card Maker",
    seoTitle: "Griha Pravesh & Housewarming Invitation Card Maker Online Free",
    metaDescription:
      "Create auspicious Griha Pravesh & Vastu Shanti invitation cards online. Traditional Kalash, marigold toran, Google Maps QR code, and free 300 DPI high-resolution download.",
    heroBadge: "Griha Pravesh & New Home Studio • 100% Free",
    leadParagraph:
      "Announce your new home with auspicious Griha Pravesh, Vastu Shanti, and modern housewarming invitation cards. Customize puja timings, add your home Google Maps QR code, and download in 300 DPI.",
    detailedGuide: {
      heading: "Blessing Your New Home with Loved Ones",
      paragraphs: [
        "Stepping into a new home is one of life's proudest accomplishments. A Griha Pravesh or Vastu Shanti ceremony sanctifies the premises with positive energy, family blessings, and gratitude.",
        "Add an interactive Google Maps QR code to your invitation card so guests can drive straight to your new doorstep without calling for directions.",
      ],
    },
    keyFeatures: [
      {
        title: "Sacred Kalash & Toran Artwork",
        description: "Authentic Vedic symbols like mango leaf torans, holy Kalash, and Swastik.",
      },
      {
        title: "Exact Doorstep Location QR",
        description: "Paste your new apartment or villa Google Maps pin for seamless navigation.",
      },
    ],
    regionalEditionsTitle: "Regional Griha Pravesh Editions",
    regionalLinks: [
      {
        title: "Marathi Vastu Shanti (वास्तु शांत व गृहप्रवेश)",
        href: "/templates/housewarming/marathi",
        description: "Traditional Marathi Vastu Shanti invitation cards and Satyanarayan pooja wording.",
      },
      {
        title: "Hindi Griha Pravesh (गृह प्रवेश एवं वास्तु पूजन)",
        href: "/templates/housewarming/hindi",
        description: "Auspicious Hindi Griha Pravesh card templates with havan timings.",
      },
    ],
    faqs: [
      {
        question: "How do guests scan the location QR code?",
        answer: "Guests simply point their phone camera at the QR code on the card, and Google Maps opens immediately.",
      },
    ],
    stuffedKeywords: [
      "housewarming invitation card maker online free",
      "griha pravesh invitation card in hindi and english",
      "marathi vastu shanti invitation card maker",
      "gruhapravesam invitation cards in telugu",
      "new home blessing invitation template with venue google maps qr code",
    ],
  },

  birthday: {
    categorySlug: "birthday",
    categoryName: "Birthday Party & 1st Birthday",
    h1: "Free Online Birthday Invitation Card Maker - 1st Birthday & Kids Themes",
    seoTitle: "Birthday Invitation Card Maker Online Free - 1st Birthday & Kids Cards",
    metaDescription:
      "Design creative 1st birthday, kids party, and milestone birthday invitation cards online. Jungle safari, unicorn, superhero themes with venue Google Maps QR and 300 DPI download.",
    heroBadge: "Birthday Celebration Studio • 100% Free",
    leadParagraph:
      "Make memorable birthday party invitation cards online for kids and adults. Personalize party themes, cake cutting timings, party venue location QR code, and export in 300 DPI print quality.",
    detailedGuide: {
      heading: "Design Fun and Exciting Birthday Invitations",
      paragraphs: [
        "Every birthday is a celebration of another year of memories, growth, and joy. Whether it's a baby's milestone first birthday, a vibrant jungle safari theme, or an elegant adult party, an exciting invitation card gets everyone thrilled.",
        "Add the birthday star's photo, party theme details, and an instant venue location QR code for hassle-free guest arrivals.",
      ],
    },
    keyFeatures: [
      {
        title: "Fun Kids & Adult Themes",
        description: "Jungle safari, hot air balloons, princess castles, space rockets, and minimalist modern layouts.",
      },
      {
        title: "Photo Upload Support",
        description: "Upload a cute portrait of the birthday child with one click in our canvas editor.",
      },
    ],
    regionalEditionsTitle: "Birthday Themes & Editions",
    regionalLinks: [
      {
        title: "1st Birthday Milestone Cards",
        href: "/templates/birthday",
        description: "Celebrate baby's first turning milestone with adorable themes.",
      },
    ],
    faqs: [
      {
        question: "Can I add the child's photo?",
        answer: "Yes! Use the 'Add Image' button in the toolbar to upload and position any photo on the card.",
      },
    ],
    stuffedKeywords: [
      "first birthday invitation card maker online free",
      "baby birthday invitation card with photo",
      "kids birthday party invitation template whatsapp",
      "jungle theme birthday invitation card",
      "1st birthday card maker 300 dpi print ready",
    ],
  },
};
