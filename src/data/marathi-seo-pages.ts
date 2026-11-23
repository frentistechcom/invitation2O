export interface MarathiSeoPageData {
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
  marathiCultureSection: {
    heading: string;
    subheading: string;
    devnagariIntro: string;
    customs: {
      title: string;
      devnagariTitle: string;
      description: string;
    }[];
    lullabyPoem?: {
      title: string;
      devnagariText: string;
      meaning: string;
    };
  };
  samplePatrikaFormats: {
    type: string;
    title: string;
    marathiText: string;
    englishText: string;
  }[];
  designFeatures: {
    iconName: string;
    title: string;
    description: string;
  }[];
  editingSteps: {
    step: number;
    title: string;
    detail: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  seoKeywordCloud: string[];
}

export const MARATHI_SEO_PAGES: MarathiSeoPageData[] = [
  // =========================================================================
  // PAGE 1: /marathi/namkaran-invitation-card
  // (English conversion of Marathi text: Namkaran Invitation Card / Barse Patrika)
  // =========================================================================
  {
    slug: "namkaran-invitation-card",
    aliases: [
      "namkaran-nimantran-patrika",
      "barse-invitation-card",
      "marathi-namkaran-card",
      "namkaran-card-maker",
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
      "Design personalized Marathi Namkaran and Barse invitation cards in seconds. Beautiful floral cradle themes, traditional Devanagari typography, venue Google Maps QR code, and free 300 DPI high-resolution export.",
    introTitle: "Design Authentic Marathi Namkaran & Barse Cards Online",
    introEnglish:
      "In Maharashtrian households, the arrival of a newborn is one of the most sacred and joyful blessings in life. The naming ceremony, popularly celebrated as Barse (बारसे) and Namkaran (नामकरण सोहळा), brings together extended families, doting grandparents, and dear friends to shower blessings on the baby and officially bestow a meaningful name. Our free online invitation studio makes it effortless to design a traditional Maharashtrian invitation card featuring authentic Devanagari calligraphy, auspicious symbols like Lord Ganesha, floral swings (फुलांचा पाळणा), and scannable Google Maps QR codes. You can fully customize parents' names, baby's birth star, date, muhurat, and venue in both Marathi and English.",
    focusCallout: {
      title: "Looking for more styles or other family celebrations?",
      description:
        "You can explore our entire English catalog with dozens of ready-to-edit templates across weddings, birthdays, baby showers, and Griha Pravesh on our main category page or homepage.",
      homeLinkText: "Go to Main Invitation Maker Homepage",
      categoryLinkText: "View All Naming Ceremony Invitation Templates",
      categorySlug: "naming-ceremony",
    },
    marathiCultureSection: {
      heading: "बारसे व नामकरण सोहळ्याची महाराष्ट्रीयन परंपरा व संस्कृती",
      subheading: "बाळाचे नाव ठेवण्याचा मंगलमय सोहळा - बाराव्या दिवसाचे महत्त्व",
      devnagariIntro:
        "महाराष्ट्रात बाळाच्या जन्मानंतर १२ व्या दिवशी अथवा सोयीस्कर शुभ मुहूर्तावर 'बारसे' हा आनंदाचा कौटुंबिक सण साजरा केला जातो. या दिवशी सुवासिनी महिला एकत्र येऊन पारंपरिक पाळणा गीते गातात, बाळगोपाळाला सजवलेल्या पाळण्यात झुलवले जाते आणि आत्याच्या हस्ते बाळाच्या कानात त्याचे सुंदर नाव कुजबुजले जाते. या मंगल प्रसंगी सर्व आप्तेष्टांना आदरपूर्वक आमंत्रित करण्यासाठी पारंपरिक निमंत्रण पत्रिका अत्यंत महत्त्वाची ठरते.",
      customs: [
        {
          title: "Palna Sajavat (फुलांचा पाळणा)",
          devnagariTitle: "सजवलेला पाळणा व पाळणा गीते",
          description:
            "सुवासिक मोगरा, झेंडू आणि शेवंतीच्या फुलांनी लाकडी पाळणा सजवला जातो. महिला वर्तुळ करून बसतात आणि 'बाळा जो जो रे', 'गाय गोठ्यात हंबरते' यांसारखी मंजुळ पारंपरिक पाळणा गीते गाऊन बाळाला आशीर्वाद देतात.",
        },
        {
          title: "Aatya's Sacred Role (आत्याचे महत्त्व)",
          devnagariTitle: "कानात नाव सांगण्याचा विधी",
          description:
            "महाराष्ट्रीयन परंपरेनुसार बाळाची आत्या (वडिलांची बहीण) बाळाच्या उजव्या कानात हळूवारपणे नाव उच्चारते. आत्याला या दिवशी विशेष मान दिला जातो आणि मानाची साडी व भेटवस्तू दिली जाते.",
        },
        {
          title: "Khirapat & Gulpani (खिरापत व गुळपाणी वाटप)",
          devnagariTitle: "गोडधोड प्रसाद वाटप",
          description:
            "कार्यक्रमाच्या शेवटी उपस्थित सर्व पाहुण्यांना आणि आप्तेष्टांना खोबरे, खडीसाखर आणि पोह्यांची चविष्ट खिरापत तसेच गुळपाणी देऊन आनंद साजरा केला जातो.",
        },
      ],
      lullabyPoem: {
        title: "पारंपरिक पाळणा गीत (Traditional Marathi Palna Geet)",
        devnagariText: `जो जो रे बाळ जो जो रे | 
रत्नजडित पाळणा सुंदर रे |
आईच्या कुशीत विसावलास तू | 
सोनुल्या, सुखाने निज रे ||`,
        meaning:
          "Traditional Marathi lullaby sung by elders and mothers wishing deep peace, glowing health, and sweet slumber to the newborn nestled in the jeweled cradle.",
      },
    },
    samplePatrikaFormats: [
      {
        type: "Baby Boy (मुलगा - बाळगोपाळ)",
        title: "पारंपरिक मराठी निमंत्रण पत्रिका (बाळासाठी)",
        marathiText: `|| श्री गणेशाय नमः ||
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
        englishText: `|| Shree Ganeshay Namah ||

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
        marathiText: `|| श्री गणेशाय नमः ||
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
        englishText: `|| Shree Ganeshay Namah ||

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
    designFeatures: [
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
    editingSteps: [
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
    seoKeywordCloud: [
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
  // PAGE 2: /marathi/naming-ceremony
  // (Naming Ceremony - Dedicated English & Marathi guide for Maharashtra)
  // =========================================================================
  {
    slug: "naming-ceremony",
    aliases: [
      "naming-ceremony-invitation-card",
      "naming-ceremony-card-maker",
      "naming-ceremony-marathi",
    ],
    seoTitle: "Naming Ceremony Invitation Card in Marathi & English - Online Maker",
    metaDescription:
      "Design personalized Naming Ceremony invitation cards for Marathi families in English and Marathi. Adorable cradle illustrations, Google Maps venue QR code, and free 300 DPI print download.",
    keywords: [
      "naming ceremony invitation card marathi",
      "naming ceremony card maker online free",
      "marathi naming ceremony invitation card wordings",
      "baby naming ceremony invitation card with photo",
      "naming ceremony invitation card in english and marathi",
      "digital naming ceremony invitation whatsapp",
      "baby naming ceremony cradle invitation template",
      "online naming ceremony card maker no watermark",
      "cradle ceremony invitation card maker online",
    ],
    h1: "Naming Ceremony Invitation Card Maker (English & Marathi)",
    heroBadge: "Modern & Traditional Naming Ceremony Studio",
    subtitle:
      "Celebrate your baby's milestone with elegant naming ceremony cards. Effortlessly blend Marathi cultural sentiments with modern English design aesthetics, complete with Google Maps QR navigation.",
    introTitle: "Create Heartfelt Naming Day Invitations for Your Newborn",
    introEnglish:
      "A naming ceremony is the first grand social milestone in your child's journey. For Maharashtrian families, whether based in Pune, Mumbai, Nagpur, or living overseas, naming day combines age-old Vedic blessings with joyful celebrations among loved ones. Our online design studio offers a seamless way to create bilingual naming ceremony invitations in English and Marathi. Featuring delicate watercolor florals, suspended brass cradles (झुला), golden stars, and playful baby elements, you can prepare an unforgettable invite in less than two minutes. The high-definition card looks stunning on high-resolution smartphone screens and prints with crisp clarity on cardstock.",
    focusCallout: {
      title: "Explore the Full English Catalog & Additional Categories",
      description:
        "Looking for different themes, wedding cards, housewarming invites, or first birthday invitations? Browse our comprehensive English catalog and start creating instantly on our homepage.",
      homeLinkText: "Return to Main Online Invitation Maker",
      categoryLinkText: "Browse All Naming Ceremony Templates",
      categorySlug: "naming-ceremony",
    },
    marathiCultureSection: {
      heading: "मराठी व इंग्रजी भाषेतील नामकरण सोहळा निमंत्रण पत्रिका",
      subheading: "आधुनिक डिजिटल डिझाईन आणि अस्सल संस्कृतीचा सुंदर संगम",
      devnagariIntro:
        "आजच्या डिजिटल युगात व्हॉट्सॲप आणि सोशल मीडियावर निमंत्रण पाठवताना मराठी आणि इंग्रजी दोन्ही भाषांचा सुवर्णमध्य साधणे पसंत केले जाते. ज्येष्ठांच्या समाधानासाठी पारंपरिक श्लोक व मराठी मजकूर, तर मित्रमंडळी व सहकाऱ्यांसाठी स्पष्ट इंग्रजी माहिती असणारी आमची निमंत्रण पत्रिका सर्वांच्या पसंतीस उतरते.",
      customs: [
        {
          title: "Auspicious Muhurat & Nakshatra",
          devnagariTitle: "शुभ मुहूर्त व नक्षत्र पूजन",
          description:
            "बाळाच्या जन्म नक्षत्रानुसार ज्योतिष शास्त्रानुसार नाव निश्चित केले जाते. पत्रिका तयार करताना जन्म तारीख, वार आणि शुभ मुहूर्ताची वेळ ठळक अक्षरांमध्ये नमूद करता येते.",
        },
        {
          title: "Family Unity & Blessings",
          devnagariTitle: "कुटुंबाचे प्रेम व शुभाशीर्वाद",
          description:
            "आई-वडील, आजी-आजोबा आणि मामा-मामी या सर्वांच्या वतीने बाळाचे स्वागत करण्यासाठी सस्नेह निमंत्रण संदेश पत्रिकेत समाविष्ट केला जातो.",
        },
        {
          title: "Interactive Digital Experience",
          devnagariTitle: "क्यूआर कोडद्वारे हॉलचा थेट पत्ता",
          description:
            "पाहुण्यांना कार्यालयाचा अथवा घराचा पत्ता शोधण्यात अडचण येऊ नये म्हणून गुगल मॅप्सचा स्कॅन करता येणारा क्यूआर कोड पत्रिकेवर सहज जोडता येतो.",
        },
      ],
    },
    samplePatrikaFormats: [
      {
        type: "Bilingual English & Marathi (दोन्ही भाषांमध्ये)",
        title: "द्विभाषिक नामकरण सोहळा निमंत्रण (Bilingual Invitation)",
        marathiText: `|| श्री गणेशाय नमः ||

'हर्ष, आनंद आणि समाधानाने भरलेला क्षण'
आमच्या लाडक्या बाळाच्या
'नामकरण सोहळ्यास'
आपण सहकुटुंब उपस्थित राहून आशीर्वाद द्यावेत.

वार: रविवार, १२ ऑक्टोबर २०२६ | वेळ: सकाळी ११:३० वाजता
स्थळ: नक्षत्र बँक्वेट हॉल, सेनापती बापट रोड, पुणे.
निमंत्रक: सौ. स्नेहल व श्री. मंदार कुलकर्णी`,
        englishText: `A sweet new beginning!
We joyfully invite you to celebrate the
NAMING CEREMONY
of our beloved baby boy / girl

Date: Sunday, October 12, 2026 | Time: 11:30 AM onwards
Venue: Nakshatra Banquet Hall, Senapati Bapat Road, Pune
Warmly invited by: Snehal & Mandar Kulkarni and Family`,
      },
      {
        type: "Modern Minimalist Card",
        title: "मॉडर्न डिजिटल निमंत्रण पत्रिका (Modern Style)",
        marathiText: `|| ॐ नमः शिवाय ||
बाळाच्या बारशाचे सस्नेह निमंत्रण!
आमच्या घरी आलेल्या गोड परीचे नाव ठेवण्याचा सोहळा आयोजित केला आहे.
आपली उपस्थिती आमच्या आनंदात भर घालेल.

तारीख: १५ नोव्हेंबर २०२६ | वेळ: दुपारी १२:०० वाजता
पत्ता: ड्रीम व्हिला, बाणेर, पुणे.
स्नेही: जोशी परिवार`,
        englishText: `Our hearts are full of gratitude!
Please join us for an afternoon of lunch and celebrations as we name our little darling.
Date: November 15, 2026 | Time: 12:00 PM
Venue: Dream Villa, Baner, Pune
Hosted with love by the Joshi Family`,
      },
    ],
    designFeatures: [
      {
        iconName: "Edit3",
        title: "Clean Dual-Font Typography",
        description:
          "Website and card interfaces seamlessly render Inter for modern English titles and Poppins / Rozha One for traditional Devanagari lettering.",
      },
      {
        iconName: "QrCode",
        title: "Dynamic Google Maps Navigation",
        description:
          "Never send confusing written landmarks. Guests tap or scan the QR code to open Google Maps turn-by-turn driving directions directly.",
      },
      {
        iconName: "Printer",
        title: "High-DPI 300 Resolution",
        description:
          "Razor-sharp graphics that maintain crisp quality whether viewed on an iPhone screen or printed on professional A5 wedding card stock.",
      },
      {
        iconName: "Smartphone",
        title: "Instant WhatsApp Sharing",
        description:
          "Download lightweight, high-clarity files that send without compression blur on WhatsApp, Telegram, or email.",
      },
    ],
    editingSteps: [
      {
        step: 1,
        title: "Choose Your Theme",
        detail:
          "Select a design from our curated collection featuring traditional Indian cradle swings or soft modern pastel illustrations.",
      },
      {
        step: 2,
        title: "Customize the Event Information",
        detail:
          "Edit baby's name, parents' names, venue address, and auspicious muhurat time in English or Marathi.",
      },
      {
        step: 3,
        title: "Generate Location QR Code",
        detail:
          "Input your Google Maps pin link to add a modern scannable QR code directly on the card corner.",
      },
      {
        step: 4,
        title: "Instant Download & Share",
        detail:
          "Export your customized card with one click in print-ready 300 DPI resolution with zero watermarks.",
      },
    ],
    faqs: [
      {
        question: "Can I create a card with both English and Marathi on the same invite?",
        answer:
          "Yes! You can easily place Marathi shlokas or headings alongside English venue details and family names in our canvas editor.",
      },
      {
        question: "Can I add the baby's photo to the naming ceremony card?",
        answer:
          "Yes, simply click the 'Add Image' button in the editor toolbar, upload any photo from your phone or computer, and resize or reposition it on your card.",
      },
      {
        question: "How do I access the main collection of card templates?",
        answer:
          "Click the 'Templates' tab in the navigation bar or head directly to /templates/naming-ceremony to explore all available naming ceremony designs in English.",
      },
    ],
    seoKeywordCloud: [
      "naming ceremony invitation card marathi",
      "naming ceremony card maker online free",
      "baby naming ceremony invitation card in english",
      "digital naming ceremony invitation",
      "marathi naming ceremony wordings",
      "naming ceremony card editor online",
      "baby boy naming ceremony invitation",
      "baby girl naming ceremony card maker",
    ],
  },

  // =========================================================================
  // PAGE 3: /marathi/namkaran-sanskar
  // (What naming ceremony is called in Hindi: Namkaran Sanskar / Naamkaran)
  // =========================================================================
  {
    slug: "namkaran-sanskar",
    aliases: [
      "naamkaran-sanskar",
      "namkaran",
      "naamkaran",
      "namkaran-sanskar-invitation-card",
      "marathi-namkaran-sanskar",
    ],
    seoTitle: "Namkaran Sanskar Invitation Card Maker Online - नामकरण संस्कार पत्रिका (Free 300 DPI)",
    metaDescription:
      "Design auspicious Namkaran Sanskar (नामकरण संस्कार) invitation cards online in Marathi, Hindi, and English. Traditional Vedic motifs, Bal Gopal artwork, venue QR codes, and free print-ready download.",
    keywords: [
      "namkaran sanskar invitation card maker online",
      "namkaran sanskar patrika format marathi hindi",
      "naamkaran invitation card maker free",
      "namkaran sanskar card in marathi and english",
      "baby namkaran sanskar shloka format",
      "namkaran ceremony card maker online free",
      "vedic namkaran sanskar invitation card",
      "namkaran invitation card with photo",
      "whatsapp namkaran sanskar patrika maker",
    ],
    h1: "Namkaran Sanskar Invitation Card Maker (नामकरण संस्कार)",
    heroBadge: "वैदिक नामकरण संस्कार • शुभ निमंत्रण पत्रिका",
    subtitle:
      "Create holy Vedic Namkaran Sanskar invitations online. Honor the sacred fifth, eleventh, or twelfth-day ceremony with Bal Gopal artwork, auspicious Mantras, venue QR codes, and instant 300 DPI download.",
    introTitle: "The Holy Tradition of Namkaran Sanskar (नामकरण संस्कार)",
    introEnglish:
      "In Sanatan Vedic tradition and Indian culture, Namkaran Sanskar (नामकरण संस्कार) is one of the foundational sixteen life sacraments (Shodasha Samskaras). Known in Hindi as Namkaran Sanskar and in Marathi as Namkaran Sohalla, this sacred rite formally bestows identity, planetary alignment, and spiritual blessings upon the newborn child. Usually performed on the 11th, 12th, or 101st day after birth, the rituals include Havan, purification, reciting the child's astrological Nakshatra name, and offering honey and ghee with gold. Our online card maker lets you craft a deeply meaningful Namkaran Sanskar card in Hindi, Marathi, and English. With curated Devanagari typography, Bal Gopal motifs, and Google Maps venue navigation, inviting your loved ones is quick, free, and dignified.",
    focusCallout: {
      title: "Discover More Invitation Categories & English Catalog",
      description:
        "Explore our main English catalog with hundreds of customizable templates across weddings, birthdays, baby showers, and Griha Pravesh on our category page and homepage.",
      homeLinkText: "Visit Main InvitationCardMaker Homepage",
      categoryLinkText: "View All Naming Ceremony & Namkaran Templates",
      categorySlug: "naming-ceremony",
    },
    marathiCultureSection: {
      heading: "नामकरण संस्काराचे धार्मिक महत्त्व व विधी विधान",
      subheading: "सोळा संस्कारांमधील पवित्र नामकरण संस्कार - वैदिक परंपरेनुसार निमंत्रण",
      devnagariIntro:
        "हिंदू संस्कृतीमध्ये नामकरण संस्कार हा अत्यंत पवित्र मानला जातो. या संस्काराद्वारे बाळाला केवळ एक नावच मिळत नाही, तर त्याचे आयुष्य दीर्घ, आरोग्यसंपन्न आणि यशदायी व्हावे यासाठी वैदिक मंत्रोच्चारांसह होम-हवन केले जाते. महाराष्ट्र व संपूर्ण भारतात हा सोहळा मोठ्या श्रद्धेने व उत्साहाने साजरा होतो.",
      customs: [
        {
          title: "Vedic Havan & Shanti Pooja (होम-हवन व शांती पूजा)",
          devnagariTitle: "नवग्रह पूजन व हवन",
          description:
            "घरातील वातावरण शुद्ध करण्यासाठी आणि नवग्रहांचे शुभ आशीर्वाद मिळवण्यासाठी पुरोहितांच्या उपस्थितीत पवित्र हवन आणि मंत्रपठण केले जाते.",
        },
        {
          title: "Kaanat Naav Sangane (कानात नाव सांगणे)",
          devnagariTitle: "सुवर्णशलाकेने मध-तूप चाटवणे व नाव सांगणे",
          description:
            "बाळाच्या जिभेवर सोन्याच्या चमच्याने मध व तूप लावून 'त्वं जीव शरदः शतम्' असा आशीर्वाद दिला जातो आणि उजव्या कानात शुभ नाव उच्चारले जाते.",
        },
        {
          title: "Aashirwad & Preetibhoj (आशीर्वाद व प्रीतीभोजन)",
          devnagariTitle: "वडीलधाऱ्यांचे आशीर्वाद व भोजन समारंभ",
          description:
            "सर्व आप्तेष्ट आणि पाहुणे बाळाला कपडे, खेळणी व आभूषणे भेट देऊन शुभाशीर्वाद देतात, त्यानंतर सर्वांसाठी स्नेहभोजनाचे आयोजन केले जाते.",
        },
      ],
      lullabyPoem: {
        title: "पवित्र वैदिक श्लोक (Sacred Vedic Shloka for Namkaran)",
        devnagariText: `|| ॐ स्वस्ति न इन्द्रो वृद्धश्रवाः स्वस्ति नः पूषा विश्ववेदाः |
स्वस्ति नस्तार्क्ष्यो अरिष्टनेमिः स्वस्ति नो बृहस्पतिर्दधातु ||`,
        meaning:
          "May the Divine Supreme bestow prosperity, boundless wisdom, untroubled longevity, and righteous strength upon this newborn soul on this holy Namkaran day.",
      },
    },
    samplePatrikaFormats: [
      {
        type: "Traditional Vedic Namkaran (वैदिक नामकरण संस्कार)",
        title: "पारंपरिक नामकरण संस्कार पत्रिका (Marathi / Hindi)",
        marathiText: `|| ॐ श्री गणेशाय नमः ||
|| ॐ नमो भगवते वासुदेवाय ||

ईश्वराच्या असीम कृपेने आमच्या घरी
पुत्ररत्नाचे / कन्यारत्नाचे आगमन झाले असून
त्याच्या 'पवित्र नामकरण संस्कार व प्रीतीभोजन' सोहळ्याचे
आयोजन करण्यात आले आहे.

तरी आपण सर्वांनी या मांगलिक प्रसंगी उपस्थित राहून
नवजात बालकास आपले शुभाशीर्वाद प्रदान करावेत.

हवन व संस्कार: सकाळी १०:०० वाजता
स्नेहभोजन: दुपारी १२:३० वाजता
वार: रविवार, १८ ऑक्टोबर २०२६
स्थान: श्री कृष्ण पॅलेस, रिंग रोड, नागपूर.

विनीत:
समस्त शर्मा व जोशी परिवार`,
        englishText: `|| Om Shree Ganeshay Namah ||

With the divine blessings of God and our elders,
we cordially invite you to the auspicious
NAMKARAN SANSKAR & LUNCH
of our newborn bundle of joy!

Havan & Rituals: 10:00 AM | Lunch: 12:30 PM onwards
Date: Sunday, October 18, 2026
Venue: Shree Krishna Palace, Ring Road, Nagpur
Warm Wishes: Sharma & Joshi Family`,
      },
      {
        type: "Modern Hindi & English Invite",
        title: "हिंदी व इंग्रजी नामकरण निमंत्रण (Hindi & English Format)",
        marathiText: `|| ॐ नमः शिवाय ||
अतिशय हर्ष के साथ आपको सूचित किया जाता है कि
हमारे पौत्र / सुपुत्र के
'नामकरण संस्कार' के पावन अवसर पर
आप सपरिवार सादर आमंत्रित हैं।

दिनांक: रविवार, २५ अक्टूबर २०२६ | समय: दोपहर १२:०० बजे
स्थान: आशीर्वाद उत्सव भवन, रामदास पेठ, अमरावती.
दर्शनाभिलाषी: समस्त अग्रवाल परिवार`,
        englishText: `We are blessed with a new star in our family!
You are warmly invited to join us for the
NAMKARAN CEREMONY
of our beloved child.

Date: Sunday, October 25, 2026 | Time: 12:00 PM onwards
Venue: Ashirwad Hall, Ramdas Peth, Amravati
RSVP: Agarwal Family`,
      },
    ],
    designFeatures: [
      {
        iconName: "Sparkles",
        title: "Sacred Spiritual Symbols",
        description:
          "Preloaded icons of Lord Ganesha, Bal Gopal with flute, Om, Swastika, and sacred Kalash to give your card authentic spiritual sanctity.",
      },
      {
        iconName: "QrCode",
        title: "Google Maps Venue Locator",
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
          "Standard smartphone aspect ratio for seamless messaging, WhatsApp statuses, and Instagram story announcements.",
      },
    ],
    editingSteps: [
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
          "Enter puja timings, family names, baby's birth star or name, and venue address in Hindi, Marathi, or English.",
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
        question: "What is the difference between Namkaran and Barse?",
        answer:
          "Namkaran (नामकरण संस्कार) is the Sanskrit/Hindi Vedic term referring to the solemn ritual of conferring a name. Barse (बारसे) is the regional Marathi term specifically honoring the celebration traditionally held on the 12th day (बारावा दिवस) with cradle songs and sweets.",
      },
      {
        question: "Can I type in Hindi and Marathi in the editor?",
        answer:
          "Yes! Our studio supports full Devanagari Unicode script, which works equally for Hindi, Marathi, and Sanskrit with fonts like Poppins, Rozha One, and Yatra One.",
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
    seoKeywordCloud: [
      "namkaran sanskar invitation card maker online",
      "namkaran invitation card in hindi and marathi",
      "naamkaran ceremony card maker free",
      "vedic namkaran patrika format",
      "baby naming ceremony card maker online",
      "namkaran card with venue google map qr",
      "bal gopal namkaran invitation template",
      "300 dpi namkaran patrika download free",
    ],
  },
];

export function getMarathiSeoPage(slug: string): MarathiSeoPageData | undefined {
  const normalized = slug.toLowerCase().trim();
  return MARATHI_SEO_PAGES.find(
    (page) => page.slug === normalized || page.aliases.includes(normalized)
  );
}

export function getAllMarathiSeoSlugs(): string[] {
  const set = new Set<string>();
  MARATHI_SEO_PAGES.forEach((page) => {
    set.add(page.slug);
    page.aliases.forEach((alias) => set.add(alias));
  });
  return Array.from(set);
}

export function getCanonicalMarathiSlugs(): string[] {
  return MARATHI_SEO_PAGES.map((page) => page.slug);
}
