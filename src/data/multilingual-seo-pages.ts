export interface MultilingualSeoPageData {
  lang: "marathi" | "english" | "hindi";
  langName: string;
  nativeScriptName: string;
  slug: string;
  aliases: string[];
  seoTitle: string;
  metaDescription: string;
  keywords: string[];
  h1: string;
  heroBadge: string;
  subtitle: string;
  introTitle: string;
  introEnglish: string;
  focusCallout: {
    title: string;
    description: string;
    homeLinkText: string;
    categoryLinkText: string;
    categorySlug: string;
  };
  nativeLanguageSection?: {
    heading: string;
    subheading: string;
    nativeIntro: string;
    ritualsOrCustoms: {
      title: string;
      nativeTitle: string;
      description: string;
    }[];
    culturalSnippet?: {
      title: string;
      nativeText: string;
      meaning: string;
    };
  };
  sampleInvitationWording: {
    type: string;
    title: string;
    nativeScriptText?: string;
    englishScriptText: string;
  }[];
  features: {
    iconName: "QrCode" | "Printer" | "Smartphone" | "Edit3" | "Sparkles";
    title: string;
    description: string;
  }[];
  stepByStepGuide: {
    step: number;
    title: string;
    detail: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  stuffedKeywords: string[];
}

export const MULTILINGUAL_SEO_PAGES: MultilingualSeoPageData[] = [
  // =========================================================================
  // 1. MARATHI: ourdomain/marathi/namkaran-invitation-card
  // (slug: English conversion of Marathi text for Namkaran Invitation Card)
  // Page content includes authentic Marathi language text!
  // =========================================================================
  {
    lang: "marathi",
    langName: "Marathi",
    nativeScriptName: "मराठी",
    slug: "namkaran-invitation-card",
    aliases: [
      "namkaran-nimantran-patrika",
      "barse-invitation-card",
      "barse-nimantran-patrika",
      "marathi-namkaran-card",
    ],
    seoTitle: "Marathi Namkaran Invitation Card Maker Online - बारसे निमंत्रण पत्रिका (Free 300 DPI)",
    metaDescription:
      "Create authentic Marathi Namkaran (नामकरण सोहळा व बारसे) invitation cards online in Marathi and English. Traditional wooden cradle (फुलांचा पाळणा), Google Maps venue QR code, and print-ready 300 DPI WhatsApp download.",
    keywords: [
      "marathi namkaran invitation card maker",
      "namkaran invitation card in marathi online",
      "barse nimantran patrika marathi text format",
      "naming ceremony card maker in marathi",
      "marathi baby naming invitation template free",
      "palna barse invitation card online",
      "namkaran patrika photo editing",
      "whatsapp marathi barse card with venue qr",
      "baby boy namkaran invitation in marathi",
      "baby girl barse patrika wording marathi",
    ],
    h1: "Marathi Namkaran Invitation Card Maker (नामकरण निमंत्रण पत्रिका)",
    heroBadge: "सस्नेह निमंत्रण • बारसे व नामकरण सोहळा",
    subtitle:
      "Design personalized Marathi Namkaran and Barse invitation cards in seconds. Beautiful floral cradle themes, authentic Devanagari calligraphy, venue Google Maps QR code, and free 300 DPI high-resolution export.",
    introTitle: "Design Authentic Marathi Namkaran & Barse Cards Online",
    introEnglish:
      "In Maharashtrian culture, the birth of a child brings boundless happiness and sacred family rituals. Known affectionately as Barse (बारसे) or Namkaran (नामकरण सोहळा), the twelfth day or an auspicious muhurat is chosen for the baby's official naming. Our free online invitation card maker allows parents and grandparents to design a traditional Maharashtrian invitation card featuring authentic Devanagari typography, divine symbols like Lord Ganesha, floral cradle swings (फुलांचा पाळणा), and scannable Google Maps QR codes. You can fully customize parents' names, baby's birth star, date, muhurat, and venue in both Marathi and English.",
    focusCallout: {
      title: "Looking for more styles or other family celebrations?",
      description:
        "You can explore our entire English catalog with dozens of ready-to-edit templates across weddings, birthdays, baby showers, and Griha Pravesh on our main category page or homepage.",
      homeLinkText: "Go to Main Invitation Maker Homepage",
      categoryLinkText: "View All Naming Ceremony Invitation Templates",
      categorySlug: "naming-ceremony",
    },
    nativeLanguageSection: {
      heading: "बारसे व नामकरण सोहळ्याची महाराष्ट्रीयन परंपरा व संस्कृती",
      subheading: "बाळाचे नाव ठेवण्याचा मंगलमय सोहळा - बाराव्या दिवसाचे महत्त्व",
      nativeIntro:
        "महाराष्ट्रात बाळाच्या जन्मानंतर १२ व्या दिवशी अथवा सोयीस्कर शुभ मुहूर्तावर 'बारसे' हा आनंदाचा कौटुंबिक सण साजरा केला जातो. या दिवशी सुवासिनी महिला एकत्र येऊन पारंपरिक पाळणा गीते गातात, बाळगोपाळाला सजवलेल्या पाळण्यात झुलवले जाते आणि आत्याच्या हस्ते बाळाच्या कानात त्याचे सुंदर नाव कुजबुजले जाते. या मंगल प्रसंगी सर्व आप्तेष्टांना आदरपूर्वक आमंत्रित करण्यासाठी पारंपरिक निमंत्रण पत्रिका अत्यंत महत्त्वाची ठरते.",
      ritualsOrCustoms: [
        {
          title: "Palna Sajavat (फुलांचा पाळणा)",
          nativeTitle: "सजवलेला पाळणा व पाळणा गीते",
          description:
            "सुवासिक मोगरा, झेंडू आणि शेवंतीच्या फुलांनी लाकडी पाळणा सजवला जातो. महिला वर्तुळ करून बसतात आणि 'बाळा जो जो रे', 'गाय गोठ्यात हंबरते' यांसारखी मंजुळ पारंपरिक पाळणा गीते गाऊन बाळाला आशीर्वाद देतात.",
        },
        {
          title: "Aatya's Sacred Role (आत्याचे महत्त्व)",
          nativeTitle: "कानात नाव सांगण्याचा विधी",
          description:
            "महाराष्ट्रीयन परंपरेनुसार बाळाची आत्या (वडिलांची बहीण) बाळाच्या उजव्या कानात हळूवारपणे नाव उच्चारते. आत्याला या दिवशी विशेष मान दिला जातो आणि मानाची साडी व भेटवस्तू दिली जाते.",
        },
        {
          title: "Khirapat & Gulpani (खिरापत व गुळपाणी वाटप)",
          nativeTitle: "गोडधोड प्रसाद वाटप",
          description:
            "कार्यक्रमाच्या शेवटी उपस्थित सर्व पाहुण्यांना आणि आप्तेष्टांना खोबरे, खडीसाखर आणि पोह्यांची चविष्ट खिरापत तसेच गुळपाणी देऊन आनंद साजरा केला जातो.",
        },
      ],
      culturalSnippet: {
        title: "पारंपरिक पाळणा गीत (Traditional Marathi Palna Geet)",
        nativeText: `जो जो रे बाळ जो जो रे | 
रत्नजडित पाळणा सुंदर रे |
आईच्या कुशीत विसावलास तू | 
सोनुल्या, सुखाने निज रे ||`,
        meaning:
          "Traditional Marathi lullaby sung by elders and mothers wishing deep peace, glowing health, and sweet slumber to the newborn nestled in the jeweled cradle.",
      },
    },
    sampleInvitationWording: [
      {
        type: "Baby Boy (मुलगा - बाळगोपाळ)",
        title: "पारंपरिक मराठी निमंत्रण पत्रिका (बाळासाठी)",
        nativeScriptText: `|| श्री गणेशाय नमः ||
|| कुलदैवत प्रसन्न ||

'आमच्या घरी चिमुकल्या पावलांचे आगमन झाले आहे'

आमचे चिरंजीव
चि. आरव
याच्या 'बारसे व नामकरण सोहळ्याचे' औचित्य साधून
स्नेहभोजनाचे आयोजन केले आहे.

तरी आपण सहकुटुंब, सहपरिवार उपस्थित राहून
बाळगोपाळाला आपले शुभाशीर्वाद द्यावेत, हीच सस्नेह विनंती.

वार व तारीख: रविवार, २५ ऑक्टोबर २०२६
वेळ: दुपारी १२:०० वाजता
स्थळ: संस्कृती बँक्वेट हॉल, टिळक रोड, सदाशिव पेठ, पुणे.

निमंत्रक:
समस्त कुलकर्णी व देशमुख परिवार
मो. ९८XXXXXXXX`,
        englishScriptText: `|| Shree Ganeshay Namah ||

A sweet little prince has entered our lives!
We cordially invite you with family to the
BARSE & NAMING CEREMONY
of our beloved son
AARAV

Please join us to shower your blessings and love on the little one.

Date: Sunday, October 25, 2026 | Time: 12:00 PM onwards
Venue: Sanskruti Banquet Hall, Tilak Road, Sadashiv Peth, Pune
With Best Compliments: Kulkarni & Deshmukh Family`,
      },
      {
        type: "Baby Girl (मुलगी - कन्यारत्न)",
        title: "सुंदर मराठी निमंत्रण पत्रिका (कन्येसाठी)",
        nativeScriptText: `|| श्री गणेशाय नमः ||
|| महालक्ष्मी प्रसन्न ||

'आमच्या अंगणात उमलली एक सुंदर कळी,
गौरीच्या रूपाने घरात आली लक्ष्मी साजिरी'

आमची सुकन्या
कु. अन्विका
याच्या 'नामकरण संस्कार व बारसे' कार्यक्रमास
आपण उपस्थित राहून कन्येला उदंड आयुष्याचे आशीर्वाद द्यावेत.

वार: रविवार, १५ नोव्हेंबर २०२६ | वेळ: दुपारी १२:३० वाजता
स्थळ: राजलक्ष्मी मंगल कार्यालय, कोल्हापूर रोड, सातारा.

आपले नम्र:
सौ. पूजा आणि श्री. सचिन पाटील
व समस्त पाटील परिवार`,
        englishScriptText: `|| Shree Ganeshay Namah ||

Blessed with a beautiful little angel!
With utmost happiness, we invite you to the
NAMING CEREMONY & BARSE
of our precious daughter
ANVIKA

Date: Sunday, November 15, 2026 | Time: 12:30 PM onwards
Venue: Rajlaxmi Hall, Kolhapur Road, Satara
Warm Regards: Pooja & Sachin Patil and Family`,
      },
    ],
    features: [
      {
        iconName: "QrCode",
        title: "Google Maps Venue QR Code",
        description:
          "Paste your event hall or home Google Maps link. A crystal-clear QR code is generated instantly so guests can navigate with a simple mobile scan.",
      },
      {
        iconName: "Printer",
        title: "Print-Ready 300 DPI Export",
        description:
          "Download in uncompressed high-resolution JPEG or PNG. Print directly on textured cardstock or send straight to photo studios without blur.",
      },
      {
        iconName: "Smartphone",
        title: "WhatsApp Ready Layouts",
        description:
          "Perfect 2:3 vertical mobile aspect ratio that opens beautifully in WhatsApp chats and status updates with zero awkward cropping.",
      },
      {
        iconName: "Edit3",
        title: "100% Editable Devanagari & English",
        description:
          "Type in Marathi or English with curated Google Fonts like Poppins, Rozha One, Yatra One, and Inter for clean, legible typography.",
      },
    ],
    stepByStepGuide: [
      {
        step: 1,
        title: "Select a Cradle or Traditional Template",
        detail:
          "Pick from modern pastel cradles, golden star swings, or royal traditional Indian backgrounds from our naming ceremony collection.",
      },
      {
        step: 2,
        title: "Personalize Baby & Family Names",
        detail:
          "Click on the text boxes to edit baby's name, parents' names, grandparents, muhurat time, and event hall address in Marathi or English.",
      },
      {
        step: 3,
        title: "Add Google Maps QR & Baby Photo",
        detail:
          "Add your venue map link to produce a scannable QR code and upload baby's sweet picture if you want a photo invitation.",
      },
      {
        step: 4,
        title: "Download Instantly with Zero Watermark",
        detail:
          "Click Download to get your 300 DPI print-quality image instantly for WhatsApp sharing or local color printing.",
      },
    ],
    faqs: [
      {
        question: "Can I type directly in Marathi Unicode fonts on the card?",
        answer:
          "Yes! Our card editor fully supports Unicode Marathi text and Devanagari fonts (such as Poppins, Rozha One, and Yatra One). You can type in Marathi or paste text directly from WhatsApp or Google Input Tools.",
      },
      {
        question: "Is this Marathi Namkaran invitation card maker completely free?",
        answer:
          "Yes, it is 100% free with no watermarks and no sign-up or credit card required. You get unlimited downloads in high-resolution 300 DPI.",
      },
      {
        question: "How do I print the downloaded Barse invitation card?",
        answer:
          "The exported file is formatted in 300 DPI. You can print it on any color photo printer at home or take it to a local print shop for printing on 300 GSM matte cardstock or metallic art paper.",
      },
      {
        question: "Where can I view more English templates or other celebration categories?",
        answer:
          "Visit our main category page at /templates/naming-ceremony for all naming card themes or our homepage at / to browse weddings, baby showers, and Griha Pravesh invitations.",
      },
    ],
    stuffedKeywords: [
      "marathi namkaran invitation card",
      "barse patrika format in marathi",
      "naming ceremony card maker online free",
      "namkaran patrika marathi wording",
      "marathi baby naming card maker",
      "barse nimantran patrika background",
      "whatsapp naming ceremony invitation marathi",
      "namkaran banner marathi text",
      "cradle ceremony card maker with photo",
    ],
  },

  // =========================================================================
  // 2. ENGLISH: ourdomain/english/naming-ceremony
  // Dedicated English Naming Ceremony page with deep focus on Home & Category
  // =========================================================================
  {
    lang: "english",
    langName: "English",
    nativeScriptName: "English",
    slug: "naming-ceremony",
    aliases: [
      "naming-ceremony-invitation-card",
      "baby-naming-ceremony",
      "cradle-ceremony-invitation",
      "naming-day-invitation-maker",
    ],
    seoTitle: "Naming Ceremony Invitation Card Maker Online - Free 300 DPI Digital Invites",
    metaDescription:
      "Design personalized baby Naming Ceremony & Cradle celebration invitations online for free. Cute cradle swing designs, venue Google Maps QR code, stylish modern fonts, and instant 300 DPI download.",
    keywords: [
      "naming ceremony invitation card maker online free",
      "baby naming ceremony invitation card in english",
      "cradle ceremony invitation card editor free",
      "naming day invitation card maker with photo",
      "digital naming ceremony invitation whatsapp",
      "baby boy naming ceremony invitation template",
      "baby girl naming ceremony card maker online",
      "free online naming ceremony card maker no watermark",
      "cradle ceremony whatsapp invitation with venue qr",
      "high resolution 300 dpi baby naming card maker",
    ],
    h1: "Online Naming Ceremony Invitation Card Maker (100% Free)",
    heroBadge: "Modern Naming Day & Cradle Celebration Studio",
    subtitle:
      "Welcome your newborn into the world with elegant, personalized naming day invitations. Edit names, dates, and venue in seconds, add a venue Google Maps QR code, and download in print-ready 300 DPI.",
    introTitle: "Create Unforgettable Naming Day Invitations in Minutes",
    introEnglish:
      "A naming ceremony is your child's very first introduction to the world of family, friends, and lifelong well-wishers. Whether you are hosting a close-knit backyard gathering, a vibrant cradle celebration, or an auspicious cultural feast, an exquisite invitation card sets the tone of warmth and celebration. Our online card studio provides parents with beautifully designed templates featuring delicate watercolor florals, celestial golden glitter stars, suspended wooden cradles, and playful baby animal artwork. With our intuitive interface, you can customize every detail, include grandparents' blessings, add a live Google Maps location QR code, and download high-resolution 300 DPI cards suitable for WhatsApp broadcasting and physical printing.",
    focusCallout: {
      title: "Explore the Full Catalog & Additional Celebrations",
      description:
        "Looking for other family occasions? Browse our complete collection of Indian wedding cards, baby shower (Godh Bharai) invites, housewarming (Griha Pravesh) templates, and birthday party cards on our main catalog and homepage.",
      homeLinkText: "Go to Main InvitationCardMaker Homepage",
      categoryLinkText: "Browse All Naming Ceremony Templates",
      categorySlug: "naming-ceremony",
    },
    sampleInvitationWording: [
      {
        type: "Modern Formal Naming Ceremony",
        title: "Elegant Family Invitation Wording",
        englishScriptText: `A brand new journey begins with a name!

With hearts full of joy and gratitude,
we cordially invite you to celebrate the
NAMING CEREMONY
of our beloved daughter
ARIA SHARMA

Please join us in blessing our little angel as she receives her official name.

Date: Sunday, October 18, 2026 | Time: 11:30 AM onwards
Venue: The Grand Ballroom, Orchid Pavilion, MG Road, Bengaluru
Hosted with love by: Priya & Vikram Sharma
RSVP: 98XXXXXXXX`,
      },
      {
        type: "Playful & Casual Baby Boy Celebration",
        title: "Cute Cradle & Stars Celebration Invite",
        englishScriptText: `Twinkle, twinkle little star,
Do you know how loved you are?

Join us as we welcome and officially name our sweet baby boy
KIAN KAPOOR

Date: Saturday, November 14, 2026
Cradle Blessing: 12:00 PM | Celebration Lunch to follow
Venue: Maple Hall, Park Avenue, Bandra West, Mumbai
Warm Wishes: Sunita & Rohan Kapoor`,
      },
      {
        type: "Traditional Indian Cradle & Namkaran Blend",
        title: "Bilingual English Traditional Wording",
        englishScriptText: `|| Shree Ganeshay Namah ||

Together with our families, we take immense pleasure
in inviting you to the auspicious
NAMING & CRADLE CEREMONY
of our grandson / granddaughter

May your presence and warm blessings fill our little one's life with health, happiness, and prosperity.

Date: Sunday, December 6, 2026 | Time: 10:30 AM onwards
Venue: Royal Heritage Banquet, Palace Road, Jaipur
With Best Compliments: Gupta & Singhal Family`,
      },
    ],
    features: [
      {
        iconName: "QrCode",
        title: "Interactive Google Maps QR Code",
        description:
          "Paste your event hall or home address Google Maps link. A crystal-clear scannable QR code is generated automatically so your guests navigate effortlessly.",
      },
      {
        iconName: "Printer",
        title: "True 300 DPI Print Quality",
        description:
          "Export in uncompressed high-resolution JPEG. Print on professional 300 GSM textured cardstock without blurry text or pixelated borders.",
      },
      {
        iconName: "Smartphone",
        title: "WhatsApp & Mobile Optimized",
        description:
          "Designed in high-clarity 2:3 mobile vertical aspect ratio that looks stunning on iPhone Retina and OLED Android screens.",
      },
      {
        iconName: "Edit3",
        title: "100% Free with Zero Watermark",
        description:
          "No subscription fees, no locked features, and no watermark on your exported files. Download as many copies as you need.",
      },
    ],
    stepByStepGuide: [
      {
        step: 1,
        title: "Browse and Select a Template",
        detail:
          "Choose your favorite design from our curated naming ceremony collection featuring golden cradle swings, celestial stars, or floral wreaths.",
      },
      {
        step: 2,
        title: "Edit Names, Date & Time",
        detail:
          "Click directly on any text layer to change baby's name, parents' and grandparents' names, muhurat time, and event hall address.",
      },
      {
        step: 3,
        title: "Generate Location QR & Add Baby Photo",
        detail:
          "Input your Google Maps pin link to add a scannable navigation QR code, or upload your baby's photo using the toolbar.",
      },
      {
        step: 4,
        title: "Download in 300 DPI Instantly",
        detail:
          "Click Download to get your print-ready high-definition card immediately with zero watermarks.",
      },
    ],
    faqs: [
      {
        question: "How do I make a naming ceremony invitation card online for free?",
        answer:
          "Simply pick any template from our naming ceremony collection above, tap 'Customize' to open the online canvas editor, personalize the text details and venue address, and download your 300 DPI image file with zero watermarks.",
      },
      {
        question: "Can I add our baby's picture on the card?",
        answer:
          "Yes! Click the 'Add Image' button in the editor toolbar, upload any picture of your baby from your smartphone or computer, and reposition or resize it freely.",
      },
      {
        question: "Will the Google Maps QR code work when printed on paper?",
        answer:
          "Yes! The QR code is rendered in vector-sharp clarity. Any smartphone camera scanning the printed invitation will immediately launch Google Maps with turn-by-turn driving directions to your venue.",
      },
      {
        question: "Where can I view all naming ceremony designs or browse other categories?",
        answer:
          "Visit our main category catalog at /templates/naming-ceremony for all naming themes or explore our homepage at / to create wedding, birthday, baby shower, and housewarming invitations.",
      },
    ],
    stuffedKeywords: [
      "naming ceremony invitation card maker online free",
      "baby naming ceremony invitation card in english",
      "cradle ceremony invitation card editor free",
      "naming day invitation card maker with photo",
      "digital naming ceremony invitation whatsapp",
      "baby boy naming ceremony invitation template",
      "baby girl naming ceremony card maker online",
      "free online naming ceremony card maker no watermark",
      "cradle ceremony whatsapp invitation with venue qr",
      "high resolution 300 dpi baby naming card maker",
    ],
  },

  // =========================================================================
  // 3. HINDI: ourdomain/hindi/namkaran-sanskar
  // (What naming ceremony is called in Hindi: Namkaran / Namkaran Sanskar)
  // Page content includes authentic Hindi language text!
  // =========================================================================
  {
    lang: "hindi",
    langName: "Hindi",
    nativeScriptName: "हिन्दी",
    slug: "namkaran-sanskar",
    aliases: [
      "namkaran",
      "naamkaran-sanskar",
      "naamkaran",
      "namkaran-invitation-card",
      "hindi-namkaran-card",
      "namkaran-patrika-maker",
    ],
    seoTitle: "Hindi Namkaran Sanskar Invitation Card Maker Online - नामकरण संस्कार पत्रिका (Free 300 DPI)",
    metaDescription:
      "Design auspicious Hindi Namkaran Sanskar (नामकरण संस्कार) invitation cards online for free. Traditional Vedic motifs, Bal Gopal artwork, venue Google Maps QR code, and free print-ready 300 DPI download.",
    keywords: [
      "namkaran sanskar invitation card maker online free",
      "hindi namkaran sanskar patrika format",
      "naamkaran card maker in hindi online",
      "baby naming ceremony card in hindi and english",
      "namkaran sanskar shloka invitation card",
      "bal gopal namkaran invitation template",
      "whatsapp namkaran invitation card with qr code",
      "namkaran patrika format hindi free download",
      "shodasha samskara namkaran card maker",
      "free online namkaran invitation editor no watermark",
    ],
    h1: "Hindi Namkaran Sanskar Invitation Card Maker (नामकरण संस्कार)",
    heroBadge: "वैदिक नामकरण संस्कार • शुभ निमंत्रण पत्रिका",
    subtitle:
      "Create holy Vedic Namkaran Sanskar invitation cards in Hindi and English. Honor the sacred naming ceremony with Bal Gopal artwork, auspicious Mantras, venue Google Maps QR codes, and instant 300 DPI download.",
    introTitle: "The Holy Rites of Namkaran Sanskar (नामकरण संस्कार)",
    introEnglish:
      "In Hindu Sanatan tradition, Namkaran Sanskar (नामकरण संस्कार) is one of the revered sixteen sacraments (Shodasha Samskaras). Celebrated typically on the 11th, 12th, or 101st day after childbirth, this auspicious Vedic ceremony welcomes the newborn into society, invokes the blessings of the Navagrahas, and announces the child's astrological and formal names. Our free online Namkaran card studio lets families design an authentic, dignified invitation in Hindi and English. With pre-loaded sacred shlokas, Bal Gopal motifs, traditional Devanagari typography, and Google Maps venue QR codes, inviting your close kin is fast, effortless, and 100% free.",
    focusCallout: {
      title: "Looking for more templates across all Indian celebrations?",
      description:
        "Explore our main English catalog with hundreds of customizable templates across weddings (विवाह), birthdays (जन्मदिन), baby showers (गोद भराई), and Griha Pravesh (गृह प्रवेश) on our category page and homepage.",
      homeLinkText: "Go to Main InvitationCardMaker Homepage",
      categoryLinkText: "View All Naming Ceremony & Namkaran Templates",
      categorySlug: "naming-ceremony",
    },
    nativeLanguageSection: {
      heading: "नामकरण संस्कार का धार्मिक एवं वैदिक महत्व",
      subheading: "षोडश संस्कारों में पावन नामकरण संस्कार - बालक के उज्ज्वल भविष्य की कामना",
      nativeIntro:
        "सनातन धर्म में नाम केवल पहचान नहीं, बल्कि व्यक्ति के व्यक्तित्व, ग्रहों की स्थिति और संस्कारों का दर्पण होता है। नामकरण संस्कार के पावन अवसर पर घर में शुद्धि हेतु हवन-यज्ञ किया जाता है, कुलदेवता व इष्टदेवता का पूजन होता है, और बालक के कान में वेदमंत्रों के साथ उसका शुभ नाम उच्चारित किया जाता है। इस पावन अवसर पर सगे-संबंधियों को आदरपूर्वक आमंत्रित करने हेतु यह निमंत्रण पत्रिका अत्यंत मंगलकारी है।",
      ritualsOrCustoms: [
        {
          title: "Vedic Havan & Navagraha Pooja (हवन व नवग्रह पूजन)",
          nativeTitle: "हवन एवं गृह शुद्धि",
          description:
            "योग्य विप्र जनों द्वारा घर में नवग्रह शांति एवं शिशु के दीर्घायु हेतु पवित्र आहुतियां दी जाती हैं। पवित्र अग्नि से वातावरण सात्विक और सकारात्मक बनता है।",
        },
        {
          title: "Honey & Gold Ritual (मधु-सर्पि प्राशन)",
          nativeTitle: "स्वर्ण शलाका से शहद व घी का स्पर्श",
          description:
            "सोने की सलाई अथवा चम्मच से शिशु को शहद व घी का स्पर्श कराया जाता है और 'त्वं जीव शरदः शतम्' वेदमंत्र से सौ वर्ष की स्वस्थ आयु का आशीर्वाद दिया जाता है।",
        },
        {
          title: "Whispering in the Ear (कान में नाम बोलना)",
          nativeTitle: "दाहिने कान में नाम उच्चारण",
          description:
            "पिता अथवा कुल के वरिष्ठजन पान के पत्ते से शिशु के दाहिने कान में नक्षत्र नाम व व्यावहारिक नाम तीन बार प्रेमपूर्वक उच्चारित करते हैं।",
        },
      ],
      culturalSnippet: {
        title: "पवित्र वैदिक मंगल श्लोक (Sacred Vedic Shloka for Namkaran)",
        nativeText: `|| ॐ स्वस्ति न इन्द्रो वृद्धश्रवाः स्वस्ति नः पूषा विश्ववेदाः |
स्वस्ति नस्तार्क्ष्यो अरिष्टनेमिः स्वस्ति नो बृहस्पतिर्दधातु ||`,
        meaning:
          "May the Divine Supreme and all celestial deities bestow good fortune, wisdom, longevity, and righteous protection upon our newborn child on this auspicious Namkaran Sanskar.",
      },
    },
    sampleInvitationWording: [
      {
        type: "Traditional Vedic Namkaran (बालक - पुत्ररत्न)",
        title: "पारंपरिक हिंदी नामकरण संस्कार पत्रिका (पुत्र के लिए)",
        nativeScriptText: `|| ॐ श्री गणेशाय नमः ||
|| ॐ नमो भगवते वासुदेवाय ||

ईश्वर की असीम अनुकम्पा एवं पूज्य बुजुर्गों के आशीर्वाद से
हमारे यहाँ पौत्र / सुपुत्र के जन्म पर
'नामकरण संस्कार एवं प्रीतिभोज'
का मांगलिक आयोजन निश्चित हुआ है।

अतः आप सपरिवार पधारकर नवजात शिशु को
अपना स्नेहपूर्ण शुभाशीर्वाद प्रदान कर हमें अनुगृहीत करें।

हवन एवं संस्कार: प्रातः १०:०० बजे
प्रीतिभोज: दोपहर १२:३० बजे से
दिनांक: रविवार, १८ अक्टूबर २०२६
स्थान: श्री कृष्ण वाटिका, मालवीय नगर, जयपुर (राज.)

दर्शनाभिलाषी:
समस्त शर्मा एवं भारद्वाज परिवार
मो. ९८XXXXXXXX`,
        englishScriptText: `|| Om Shree Ganeshay Namah ||

With the divine grace of the Almighty and blessings of our elders,
we cordially invite you with family to the auspicious
NAMKARAN SANSKAR & LUNCH
of our beloved newborn son!

Havan & Rituals: 10:00 AM | Lunch: 12:30 PM onwards
Date: Sunday, October 18, 2026
Venue: Shree Krishna Vatika, Malviya Nagar, Jaipur
Warm Wishes: Sharma & Bhardwaj Family`,
      },
      {
        type: "Baby Girl Namkaran (बालिका - कन्यारत्न)",
        title: "सुंदर हिंदी नामकरण निमंत्रण (कन्या के लिए)",
        nativeScriptText: `|| ॐ श्री गणेशाय नमः ||
|| माँ लक्ष्मी प्रसन्न ||

'घर में आई नन्ही परी, खुशियों से झोली भरी'

हमारी सुपुत्री / पौत्री के
'नामकरण संस्कार'
के शुभ अवसर पर आप सादर आमंत्रित हैं।
कृपया पधारकर बिटिया को अपना स्नेह एवं आशीर्वाद दें।

दिनांक: रविवार, १५ नवंबर २०२६ | समय: दोपहर १२:०० बजे
स्थान: रॉयल पैलेस बैंक्वेट, सिविल लाइन्स, लखनऊ
विनीत:
अमित एवं नेहा वर्मा
समस्त वर्मा परिवार`,
        englishScriptText: `|| Shree Ganeshay Namah ||

A little angel has filled our lives with boundless joy!
You are warmly invited to the
NAMKARAN CEREMONY
of our precious daughter.

Date: Sunday, November 15, 2026 | Time: 12:00 PM onwards
Venue: Royal Palace Banquet, Civil Lines, Lucknow
RSVP: Amit & Neha Verma and Family`,
      },
    ],
    features: [
      {
        iconName: "Sparkles",
        title: "Auspicious Spiritual Motifs",
        description:
          "Preloaded icons of Bal Gopal with peacock feather, Lord Ganesha, sacred Kalash, and Swastik for authentic Vedic dignity.",
      },
      {
        iconName: "QrCode",
        title: "Google Maps Venue QR Code",
        description:
          "Guests scanning the printed or digital card get one-tap directions directly to the banquet hall or puja location on their phones.",
      },
      {
        iconName: "Printer",
        title: "Studio-Quality 300 DPI Export",
        description:
          "Guaranteed print-shop-ready resolution with no compression artifacts, fuzzy text, or raster pixelation.",
      },
      {
        iconName: "Smartphone",
        title: "WhatsApp & Social Media Optimized",
        description:
          "Standard smartphone aspect ratio for seamless messaging, WhatsApp statuses, and family group announcements.",
      },
    ],
    stepByStepGuide: [
      {
        step: 1,
        title: "Pick an Auspicious Namkaran Design",
        detail:
          "Select from temple-themed gold borders, Bal Gopal motifs, or modern floral cradle aesthetics in our studio.",
      },
      {
        step: 2,
        title: "Fill in Vedic Havan & Muhurat Details",
        detail:
          "Enter puja timings, family names, baby's birth star or name, and venue address in Hindi or English.",
      },
      {
        step: 3,
        title: "Include Venue Google Maps Link",
        detail:
          "Generate an instant scannable QR code so your guests never get lost finding your auspicious venue.",
      },
      {
        step: 4,
        title: "Free Instant 300 DPI Download",
        detail:
          "Export your customized Namkaran Sanskar card in full resolution with zero watermarks.",
      },
    ],
    faqs: [
      {
        question: "What is naming ceremony called in Hindi?",
        answer:
          "In Hindi, the naming ceremony is called 'Namkaran' (नामकरण) or 'Namkaran Sanskar' (नामकरण संस्कार). It is one of the sixteen primary Vedic Samskaras performed with Havan and blessings.",
      },
      {
        question: "Can I type directly in Hindi on the card?",
        answer:
          "Yes! Our canvas editor supports full Devanagari Hindi text and fonts like Poppins, Rozha One, and Yatra One. You can type in Hindi or paste text directly.",
      },
      {
        question: "How do I print my Namkaran Sanskar card?",
        answer:
          "Download the card as a high-resolution 300 DPI image file. You can send it directly to any photo laboratory, offset printer, or local digital print shop to print on textured or matte cardstock.",
      },
      {
        question: "How can I see all English templates across other celebrations?",
        answer:
          "Head to /templates/naming-ceremony for all naming card themes, or explore our homepage at / to customize wedding, birthday, baby shower, and Griha Pravesh invitations.",
      },
    ],
    stuffedKeywords: [
      "namkaran sanskar invitation card maker online free",
      "hindi namkaran sanskar patrika format",
      "naamkaran card maker in hindi online",
      "baby naming ceremony card in hindi and english",
      "namkaran sanskar shloka invitation card",
      "bal gopal namkaran invitation template",
      "whatsapp namkaran invitation card with qr code",
      "namkaran patrika format hindi free download",
      "shodasha samskara namkaran card maker",
      "free online namkaran invitation editor no watermark",
    ],
  },
];

export function getMultilingualSeoPage(
  lang: string,
  slug: string
): MultilingualSeoPageData | undefined {
  const normLang = lang.toLowerCase().trim();
  const normSlug = slug.toLowerCase().trim();

  return MULTILINGUAL_SEO_PAGES.find(
    (page) =>
      page.lang === normLang &&
      (page.slug === normSlug || page.aliases.includes(normSlug))
  );
}

export function getAllMultilingualParams(): { lang: string; slug: string }[] {
  const params: { lang: string; slug: string }[] = [];
  MULTILINGUAL_SEO_PAGES.forEach((page) => {
    params.push({ lang: page.lang, slug: page.slug });
    page.aliases.forEach((alias) => {
      params.push({ lang: page.lang, slug: alias });
    });
  });
  return params;
}

export function getCanonicalMultilingualParams(): { lang: string; slug: string }[] {
  return MULTILINGUAL_SEO_PAGES.map((page) => ({
    lang: page.lang,
    slug: page.slug,
  }));
}
