export interface MultilingualSeoPageData {
  category: "baby-shower" | "naming-ceremony" | "wedding" | "housewarming" | "birthday";
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
  // 1. BABY SHOWER (Dohale Jevan / Godh Bharai / Baby Shower)
  // =========================================================================
  {
    category: "baby-shower",
    lang: "marathi",
    langName: "Marathi",
    nativeScriptName: "मराठी",
    slug: "dohala-jewan-invitation-card-make-marathi",
    aliases: [
      "dohale-jevan-invitation-card-maker-marathi",
      "dohala-jewan-invitation-card-maker",
      "dohale-jevan-invitation-card-maker",
      "oti-bharane-nimantran-patrika",
      "marathi-baby-shower-invitation-card",
    ],
    seoTitle: "Marathi Dohale Jevan Invitation Card Maker - डोहळे जेवण व ओटी भरणे (Free 300 DPI)",
    metaDescription:
      "Create authentic Marathi Dohale Jevan (डोहळे जेवण) and Oti Bharane invitation cards online. Traditional floral swing (फुलांचा पाळणा), green bangles (हिरवा चुडा), venue Google Maps QR code, and print-ready 300 DPI download.",
    keywords: [
      "dohala jewan invitation card make marathi",
      "dohale jevan invitation card maker marathi",
      "marathi baby shower invitation card maker",
      "oti bharane nimantran patrika marathi format",
      "dohale jevan card in marathi and english",
      "dohale jevan nimantran patrika online free",
      "phulancha palna dohale jevan card",
      "whatsapp dohale jevan invitation card maker",
    ],
    h1: "Marathi Dohale Jevan Invitation Card Maker (डोहळे जेवण निमंत्रण पत्रिका)",
    heroBadge: "सस्नेह निमंत्रण • डोहळे जेवण व ओटी भरणे सोहळा",
    subtitle:
      "Design personalized Marathi Dohale Jevan and Oti Bharane baby shower invitation cards in seconds. Beautiful floral swings, traditional Devanagari typography, venue Google Maps QR code, and free 300 DPI high-resolution export.",
    introTitle: "Authentic Marathi Dohale Jevan & Oti Bharane Invitations",
    introEnglish:
      "In Maharashtrian households, Dohale Jevan (डोहळे जेवण) and Oti Bharane mark the blessed 7th month of pregnancy. Families gather to shower the expectant mother with love, blessings, and sweet treats. Our free online card studio allows you to design authentic Marathi invitations featuring floral swings (फुलांचा पाळणा), green bangles (हिरवा चुडा), Lord Ganesha shlokas, and scannable Google Maps QR codes. Fully customize parents' names, venue, and lunch timings in both Marathi and English.",
    focusCallout: {
      title: "Explore the Complete Baby Shower Collection",
      description:
        "Looking for more templates, modern pastel designs, or other celebrations like naming ceremonies and weddings? Browse our main English catalog or visit the homepage.",
      homeLinkText: "Go to Main Invitation Maker Homepage",
      categoryLinkText: "Browse All Baby Shower Templates",
    },
    nativeLanguageSection: {
      heading: "डोहळे जेवण व ओटी भरण्याची महाराष्ट्रीयन संस्कृती",
      subheading: "भावी मातेला शुभाशीर्वाद देणारा पावन कौटुंबिक सोहळा",
      nativeIntro:
        "महाराष्ट्रात सातव्या महिन्यात भावी मातेचे डोहाळे पुरवण्यासाठी 'डोहळे जेवण' व 'ओटी भरणे' हा मंगलमय सोहळा आयोजित केला जातो. सुवासिनी स्त्रिया एकत्र येऊन भावी मातेला हिरवा चुडा भरतात, फुलांच्या पाळण्यात बसवतात आणि विविध पदार्थांची मेजवानी देतात.",
      ritualsOrCustoms: [
        {
          title: "Oti Bharane (ओटी भरणे)",
          nativeTitle: "ओटी भरण्याचा मंगल विधी",
          description:
            "तांदूळ, नारळ, सुपारी, खारीक-बदाम आणि फळे देऊन ज्येष्ठांकडून भावी मातेची ओटी भरली जाते व सुखरूप प्रसूतीसाठी प्रार्थना केली जाते.",
        },
        {
          title: "Hirva Chuda & Phulancha Palna",
          nativeTitle: "हिरवा चुडा व फुलांचा पाळणा",
          description:
            "मोगरा आणि झेंडूच्या सुवासिक फुलांनी पाळणा सजवला जातो. मातेला हिरव्या काचेच्या बांगड्या भरून पाळण्यात झुलवले जाते.",
        },
        {
          title: "Dohale Jevan Feasting",
          nativeTitle: "गोडधोड स्नेहभोजन व डोहाळे",
          description:
            "पेढा, बर्फी, खीर आणि पारंपरिक पदार्थांची मेजवानी दिली जाते. यामध्ये बाळाच्या लिंगाबद्दल गमतीदार कोडी घातली जातात.",
        },
      ],
      culturalSnippet: {
        title: "डोहळे जेवण पारंपरिक चारोळी (Marathi Dohale Jevan Chardolya)",
        nativeText: `फुलांचा सजवला पाळणा, हाती हिरवा चुडा साजिरा |
आमच्या लाडक्या कन्येचे डोहळे जेवण, यावे आपण सहपरिवारा ||`,
        meaning:
          "Adorned with sweet flowers and green bangles, please join our family to shower affectionate blessings on the mother-to-be.",
      },
    },
    sampleInvitationWording: [
      {
        type: "Traditional Marathi Dohale Jevan",
        title: "पारंपरिक मराठी डोहळे जेवण निमंत्रण",
        nativeScriptText: `|| श्री गणेशाय नमः ||
|| कुलस्वामिनी प्रसन्न ||

'आई होण्याचे भाग्य, आनंदाचे क्षण साजिरे'

आमची लाडकी कन्या / सून
सौ. पूजा राहुल देशमुख
यांच्या 'डोहळे जेवण व ओटी भरणाचा' मंगल सोहळा आयोजित केला आहे.

तरी आपण सहकुटुंब, सहपरिवार उपस्थित राहून
भावी मातेला व बाळाला आपले शुभाशीर्वाद द्यावेत, हीच सस्नेह विनंती.

वार व तारीख: रविवार, १५ ऑक्टोबर २०२६
स्नेहभोजन: दुपारी १२:३० वाजता
स्थळ: संस्कृती बँक्वेट हॉल, कर्वे रोड, पुणे.

निमंत्रक:
समस्त देशमुख व पाटील परिवार`,
        englishScriptText: `|| Shree Ganeshay Namah ||

Together with our families, we joyfully invite you to the
DOHALE JEVAN & BABY SHOWER CEREMONY
of our beloved
Pooja & Rahul Deshmukh

Please join us to bless the mother-to-be and the little miracle on the way!

Date: Sunday, October 15, 2026 | Time: 12:30 PM onwards
Venue: Sanskruti Banquet Hall, Karve Road, Pune
RSVP: Deshmukh & Patil Family`,
      },
    ],
    features: [
      {
        iconName: "QrCode",
        title: "Google Maps Venue QR Code",
        description:
          "Guests simply scan the QR code to open Google Maps navigation directly to your banquet hall or home.",
      },
      {
        iconName: "Printer",
        title: "Print-Ready 300 DPI Export",
        description:
          "High-definition rasterization ensures cards print crisply on 300 GSM textured cardstock or photo paper.",
      },
      {
        iconName: "Smartphone",
        title: "WhatsApp & Mobile Ready",
        description:
          "2:3 mobile vertical ratio opens without blur on WhatsApp chats and status updates.",
      },
      {
        iconName: "Edit3",
        title: "Devanagari Poppins & Inter Fonts",
        description:
          "Seamless dual-language editing using Google Fonts like Poppins for Marathi and Inter for English.",
      },
    ],
    stepByStepGuide: [
      {
        step: 1,
        title: "Select a Dohale Jevan Design",
        detail: "Pick from floral cradle swings, traditional green chuda borders, or modern baby motifs.",
      },
      {
        step: 2,
        title: "Edit Parents & Family Names",
        detail: "Customize names, auspicious muhurat, lunch timings, and venue in Marathi or English.",
      },
      {
        step: 3,
        title: "Add Venue Google Maps Link",
        detail: "Generate a scannable QR code so guests find your hall with zero confusion.",
      },
      {
        step: 4,
        title: "Free Instant 300 DPI Download",
        detail: "Export your card in uncompressed high-resolution with zero watermark.",
      },
    ],
    faqs: [
      {
        question: "Can I type Marathi text directly in the Dohale Jevan editor?",
        answer: "Yes, our editor fully supports Unicode Marathi text and Devanagari Google Fonts like Poppins, Rozha One, and Yatra One.",
      },
      {
        question: "Is this baby shower card maker completely free?",
        answer: "Yes, 100% free with no watermarks and unlimited 300 DPI downloads.",
      },
      {
        question: "Can I print this invitation at a local photo studio?",
        answer: "Yes! The exported image is 300 DPI high resolution, perfect for digital color printing on cardstock.",
      },
      {
        question: "Where can I view more baby shower templates?",
        answer: "Visit /templates/baby-shower for all baby shower designs or / for our complete invitation maker.",
      },
    ],
    stuffedKeywords: [
      "dohala jewan invitation card make marathi",
      "dohale jevan invitation card maker marathi",
      "marathi baby shower invitation card maker",
      "oti bharane nimantran patrika marathi format",
      "dohale jevan card in marathi and english",
      "dohale jevan nimantran patrika online free",
      "phulancha palna dohale jevan card",
      "whatsapp dohale jevan invitation card maker",
    ],
  },
  {
    category: "baby-shower",
    lang: "english",
    langName: "English",
    nativeScriptName: "English",
    slug: "baby-shower-invitation-card-maker-english",
    aliases: [
      "baby-shower-invitation-card-maker",
      "baby-shower-invitation-card",
      "online-baby-shower-card-maker",
      "baby-shower",
    ],
    seoTitle: "Online Baby Shower Invitation Card Maker - Free 300 DPI Digital Invites",
    metaDescription:
      "Design personalized Baby Shower & Godh Bharai invitations online for free. Cute cradle, safari animals, pastel floral designs, venue Google Maps QR code, and instant 300 DPI WhatsApp download.",
    keywords: [
      "baby shower invitation card maker english",
      "online baby shower card maker free",
      "baby shower invitation whatsapp image free",
      "baby shower card maker with photo",
      "godh bharai invitation card in english",
      "free baby shower invitation maker no watermark",
      "300 dpi baby shower invitation card online",
    ],
    h1: "Online Baby Shower Invitation Card Maker (100% Free)",
    heroBadge: "Modern Baby Shower & Godh Bharai Studio",
    subtitle:
      "Celebrate the mom-to-be with beautiful digital and print baby shower invitation cards. Edit names and dates easily, add a Google Maps venue QR code, and export in 300 DPI vector clarity.",
    introTitle: "Create Heartwarming Baby Shower Invitations Online",
    introEnglish:
      "Welcoming a new life is a milestone filled with excitement, love, and anticipation. Whether you are hosting a traditional Indian Godh Bharai, an intimate brunch with friends, or a grand themed baby shower, our free invitation maker provides elegant watercolor templates, charming cradle motifs, and modern pastel designs. Add parents' names, venue details, and an interactive Google Maps QR code for effortless mobile navigation.",
    focusCallout: {
      title: "Explore the Full Catalog & Other Celebrations",
      description:
        "Browse our complete catalog of Indian wedding cards, naming ceremony invites, and first birthday cards on our homepage.",
      homeLinkText: "Return to Homepage",
      categoryLinkText: "Browse All Baby Shower Templates",
    },
    sampleInvitationWording: [
      {
        type: "Modern Elegant Baby Shower",
        title: "Chic Pastel Baby Shower Invite",
        englishScriptText: `A little miracle is on the way!

Please join us for a joyful Baby Shower celebrating
ANANYA & ROHIT SHARMA

Date: Saturday, October 10, 2026 | Time: 3:00 PM - 6:00 PM
Venue: The Grand Orchid Ballroom, Indiranagar, Bengaluru
Hosted with love by the Sharma Family
RSVP: 98XXXXXXXX`,
      },
    ],
    features: [
      {
        iconName: "QrCode",
        title: "Google Maps Venue QR Code",
        description: "Guests scan the QR code on the card to open turn-by-turn navigation directly.",
      },
      {
        iconName: "Printer",
        title: "300 DPI Print Quality",
        description: "Vector-sharp quality designed for 300 GSM cardstock or WhatsApp sharing.",
      },
      {
        iconName: "Smartphone",
        title: "WhatsApp & Story Optimized",
        description: "Smartphone 2:3 vertical ratio fits mobile screens perfectly.",
      },
      {
        iconName: "Edit3",
        title: "100% Free with No Watermark",
        description: "Unlimited edits and downloads with zero watermark or hidden charges.",
      },
    ],
    stepByStepGuide: [
      { step: 1, title: "Choose a Design", detail: "Pick your favorite pastel cradle or floral theme." },
      { step: 2, title: "Edit Details", detail: "Personalize names, date, and venue address in seconds." },
      { step: 3, title: "Add Location QR", detail: "Generate a Google Maps QR code for smooth arrivals." },
      { step: 4, title: "Download in 300 DPI", detail: "Get your print-ready card instantly." },
    ],
    faqs: [
      {
        question: "How do I make a baby shower card online for free?",
        answer: "Select any template, click customize, personalize the text and venue, and download in 300 DPI.",
      },
    ],
    stuffedKeywords: [
      "baby shower invitation card maker english",
      "online baby shower card maker free",
      "baby shower invitation whatsapp image free",
      "godh bharai invitation card in english",
    ],
  },
  {
    category: "baby-shower",
    lang: "hindi",
    langName: "Hindi",
    nativeScriptName: "हिन्दी",
    slug: "godh-bharai-invitation-card-maker-hindi",
    aliases: [
      "godh-bharai-invitation-card-maker",
      "hindi-baby-shower-invitation-card",
      "godh-bharai-patrika-maker",
      "baby-shower-card-hindi",
    ],
    seoTitle: "Hindi Godh Bharai Invitation Card Maker - गोद भराई पत्रिका (Free 300 DPI)",
    metaDescription:
      "Design traditional Hindi Godh Bharai (गोद भराई) invitation cards online for free. Bal Gopal motifs, floral cradles, Devanagari script, venue Google Maps QR code, and print-ready 300 DPI download.",
    keywords: [
      "godh bharai invitation card maker hindi",
      "hindi baby shower invitation card",
      "godh bharai patrika format hindi",
      "online godh bharai card maker free",
      "laddu gopal baby shower invitation",
      "godh bharai shloka invitation card",
    ],
    h1: "Hindi Godh Bharai Invitation Card Maker (गोद भराई निमंत्रण पत्रिका)",
    heroBadge: "मांगलिक निमंत्रण • गोद भराई एवं सीमंत संस्कार",
    subtitle:
      "Create auspicious Godh Bharai invitation cards in Hindi and English. Traditional Bal Gopal artwork, auspicious shlokas, venue Google Maps QR codes, and free 300 DPI high-resolution export.",
    introTitle: "The Joyous Rites of Godh Bharai (गोद भराई)",
    introEnglish:
      "Godh Bharai, literally meaning 'filling the lap', is the sacred Indian baby shower held in the seventh or eighth month of pregnancy. The expecting mother is blessed by elders with fruits, coconuts, and traditional folk songs. Our free online card studio allows you to design authentic Hindi Godh Bharai cards with Bal Gopal motifs, Devanagari fonts, and venue Google Maps QR codes.",
    focusCallout: {
      title: "Explore the Full English Catalog & Celebrations",
      description: "Looking for more templates across weddings, Namkaran, or birthdays? Visit our homepage.",
      homeLinkText: "Return to Homepage",
      categoryLinkText: "Browse All Baby Shower Templates",
    },
    sampleInvitationWording: [
      {
        type: "Traditional Hindi Godh Bharai",
        title: "पारंपरिक हिंदी गोद भराई निमंत्रण पत्रिका",
        nativeScriptText: `|| ॐ श्री गणेशाय नमः ||
|| कुलदेवी प्रसन्न ||

हर्षोल्लास के साथ आपको सूचित किया जाता है कि हमारी कुलवधू
सौ. स्नेहा (पत्नी श्री अमित शर्मा)
का 'गोद भराई एवं सीमंत संस्कार' निश्चित हुआ है।

कृपया इस मांगलिक अवसर पर पधारकर भावी माता एवं शिशु को
अपना स्नेहपूर्ण आशीर्वाद प्रदान कर अनुगृहीत करें।

दिनांक: रविवार, २० नवंबर २०२६ | समय: दोपहर १:०० बजे
स्थान: वृंदावन उत्सव भवन, सिविल लाइन्स, जयपुर
दर्शनाभिलाषी: समस्त शर्मा एवं वर्मा परिवार`,
        englishScriptText: `|| Shree Ganeshay Namah ||

We cordially invite you to celebrate the
GODH BHARAI CEREMONY
of our dear
Sneha & Amit Sharma

Date: Sunday, November 20, 2026 | Time: 1:00 PM onwards
Venue: Vrindavan Banquet Hall, Jaipur
With best compliments: Sharma & Verma Family`,
      },
    ],
    features: [
      { iconName: "QrCode", title: "Google Maps Venue QR Code", description: "One-scan GPS navigation to your venue." },
      { iconName: "Printer", title: "300 DPI Print Quality", description: "Crystal-clear export for cardstock printing." },
      { iconName: "Smartphone", title: "WhatsApp Optimized", description: "Standard mobile vertical aspect ratio." },
      { iconName: "Edit3", title: "100% Free No Watermark", description: "Completely free with unlimited downloads." },
    ],
    stepByStepGuide: [
      { step: 1, title: "Select a Template", detail: "Choose a Bal Gopal or traditional cradle design." },
      { step: 2, title: "Enter Details", detail: "Personalize names, muhurat time, and venue in Hindi." },
      { step: 3, title: "Add Location QR", detail: "Paste your Google Maps link for instant QR generation." },
      { step: 4, title: "Download Free", detail: "Export in 300 DPI resolution immediately." },
    ],
    faqs: [
      {
        question: "Can I type directly in Hindi on the card?",
        answer: "Yes, our canvas editor supports full Devanagari Hindi text and fonts like Poppins and Rozha One.",
      },
    ],
    stuffedKeywords: [
      "godh bharai invitation card maker hindi",
      "hindi baby shower invitation card",
      "godh bharai patrika format hindi",
      "online godh bharai card maker free",
    ],
  },

  // =========================================================================
  // 2. NAMING CEREMONY (Namkaran / Barse / Naming Ceremony)
  // =========================================================================
  {
    category: "naming-ceremony",
    lang: "marathi",
    langName: "Marathi",
    nativeScriptName: "मराठी",
    slug: "namkaran-invitation-card-maker-marathi",
    aliases: [
      "namkaran-invitation-card",
      "barse-invitation-card-maker-marathi",
      "barse-nimantran-patrika",
      "namkaran-nimantran-patrika",
      "barse-invitation-card",
      "namkaran-invitation-card-maker",
    ],
    seoTitle: "Marathi Namkaran Invitation Card Maker Online - बारसे निमंत्रण पत्रिका (Free 300 DPI)",
    metaDescription:
      "Create authentic Marathi Namkaran (नामकरण सोहळा व बारसे) invitation cards online in Marathi and English. Traditional wooden cradle (फुलांचा पाळणा), Google Maps venue QR code, and print-ready 300 DPI WhatsApp download.",
    keywords: [
      "namkaran invitation card maker marathi",
      "marathi namkaran invitation card maker",
      "namkaran invitation card in marathi online",
      "barse nimantran patrika marathi text format",
      "naming ceremony card maker in marathi",
      "marathi baby naming invitation template free",
      "palna barse invitation card online",
      "whatsapp marathi barse card with venue qr",
    ],
    h1: "Marathi Namkaran Invitation Card Maker (नामकरण निमंत्रण पत्रिका)",
    heroBadge: "सस्नेह निमंत्रण • बारसे व नामकरण सोहळा",
    subtitle:
      "Design personalized Marathi Namkaran and Barse invitation cards in seconds. Beautiful floral cradle themes, authentic Devanagari calligraphy, venue Google Maps QR code, and free 300 DPI high-resolution export.",
    introTitle: "Design Authentic Marathi Namkaran & Barse Cards Online",
    introEnglish:
      "In Maharashtrian culture, the naming ceremony, celebrated as Barse (बारसे) and Namkaran (नामकरण सोहळा), brings together extended families and friends to shower blessings on the baby and bestow a meaningful name. Our free online invitation studio makes it effortless to design a traditional Maharashtrian card with authentic Devanagari calligraphy, floral swings (फुलांचा पाळणा), and scannable Google Maps QR codes.",
    focusCallout: {
      title: "Looking for more styles or other family celebrations?",
      description: "Explore our entire English catalog across weddings, baby showers, and birthdays on our homepage.",
      homeLinkText: "Go to Main Invitation Maker Homepage",
      categoryLinkText: "View All Naming Ceremony Invitation Templates",
    },
    nativeLanguageSection: {
      heading: "बारसे व नामकरण सोहळ्याची महाराष्ट्रीयन परंपरा व संस्कृती",
      subheading: "बाळाचे नाव ठेवण्याचा मंगलमय सोहळा - बाराव्या दिवसाचे महत्त्व",
      nativeIntro:
        "महाराष्ट्रात बाळाच्या जन्मानंतर १२ व्या दिवशी अथवा सोयीस्कर शुभ मुहूर्तावर 'बारसे' हा आनंदाचा कौटुंबिक सण साजरा केला जातो. सुवासिनी महिला एकत्र येऊन पारंपरिक पाळणा गीते गातात, बाळगोपाळाला सजवलेल्या पाळण्यात झुलवले जाते आणि आत्याच्या हस्ते बाळाच्या कानात त्याचे सुंदर नाव कुजबुजले जाते.",
      ritualsOrCustoms: [
        {
          title: "Palna Sajavat (फुलांचा पाळणा)",
          nativeTitle: "सजवलेला पाळणा व पाळणा गीते",
          description: "सुवासिक फुलांनी लाकडी पाळणा सजवला जातो आणि 'बाळा जो जो रे' ही पारंपरिक पाळणा गीते गायली जातात.",
        },
        {
          title: "Aatya's Sacred Role (आत्याचे महत्त्व)",
          nativeTitle: "कानात नाव सांगण्याचा विधी",
          description: "परंपरेनुसार बाळाची आत्या बाळाच्या उजव्या कानात हळूवारपणे नाव उच्चारते.",
        },
      ],
      culturalSnippet: {
        title: "पारंपरिक पाळणा गीत (Traditional Marathi Palna Geet)",
        nativeText: `जो जो रे बाळ जो जो रे | 
रत्नजडित पाळणा सुंदर रे ||`,
        meaning: "Traditional Marathi lullaby wishing deep peace and health to the newborn nestled in the cradle.",
      },
    },
    sampleInvitationWording: [
      {
        type: "Baby Boy Barse Wording",
        title: "पारंपरिक मराठी बारसे निमंत्रण पत्रिका",
        nativeScriptText: `|| श्री गणेशाय नमः ||

'आमच्या घरी चिमुकल्या पावलांचे आगमन झाले आहे'

आमचे चिरंजीव
चि. आरव
याच्या 'बारसे व नामकरण सोहळ्याचे' औचित्य साधून
स्नेहभोजनाचे आयोजन केले आहे.

वार: रविवार, २५ ऑक्टोबर २०२६ | वेळ: दुपारी १२:०० वाजता
स्थळ: संस्कृती बँक्वेट हॉल, सदाशिव पेठ, पुणे.
निमंत्रक: समस्त कुलकर्णी व देशमुख परिवार`,
        englishScriptText: `|| Shree Ganeshay Namah ||

A sweet little prince has entered our lives!
We cordially invite you with family to the
BARSE & NAMING CEREMONY of our son AARAV.

Date: Sunday, October 25, 2026 | Time: 12:00 PM onwards
Venue: Sanskruti Banquet Hall, Sadashiv Peth, Pune`,
      },
    ],
    features: [
      { iconName: "QrCode", title: "Google Maps Venue QR Code", description: "One-scan GPS navigation to your venue." },
      { iconName: "Printer", title: "300 DPI Print Quality", description: "Vector-sharp clarity for professional printing." },
      { iconName: "Smartphone", title: "WhatsApp Ready Layouts", description: "2:3 vertical aspect ratio for mobile screens." },
      { iconName: "Edit3", title: "Devanagari Poppins & Inter", description: "Crisp typography for Marathi and English." },
    ],
    stepByStepGuide: [
      { step: 1, title: "Choose a Template", detail: "Select a traditional wooden cradle or stars theme." },
      { step: 2, title: "Edit Details", detail: "Personalize names, date, and venue in Marathi or English." },
      { step: 3, title: "Add Location QR", detail: "Generate a Google Maps QR code for effortless arrivals." },
      { step: 4, title: "Download Instantly", detail: "Get your 300 DPI card free with zero watermark." },
    ],
    faqs: [
      {
        question: "Can I type directly in Marathi Unicode fonts?",
        answer: "Yes, our studio fully supports Unicode Marathi text and Devanagari fonts like Poppins and Rozha One.",
      },
    ],
    stuffedKeywords: [
      "namkaran invitation card maker marathi",
      "marathi namkaran invitation card maker",
      "barse nimantran patrika marathi text format",
      "naming ceremony card maker in marathi",
    ],
  },
  {
    category: "naming-ceremony",
    lang: "english",
    langName: "English",
    nativeScriptName: "English",
    slug: "naming-ceremony-invitation-card-maker-english",
    aliases: [
      "naming-ceremony-invitation-card-maker",
      "naming-ceremony",
      "naming-ceremony-invitation-card",
      "cradle-ceremony-invitation-maker",
    ],
    seoTitle: "Naming Ceremony Invitation Card Maker Online - Free 300 DPI Digital Invites",
    metaDescription:
      "Design personalized baby Naming Ceremony & Cradle celebration invitations online for free. Cute cradle swing designs, venue Google Maps QR code, stylish modern fonts, and instant 300 DPI download.",
    keywords: [
      "naming ceremony invitation card maker english",
      "baby naming ceremony invitation card in english",
      "cradle ceremony invitation card editor free",
      "naming day invitation card maker with photo",
      "digital naming ceremony invitation whatsapp",
      "baby boy naming ceremony invitation template",
      "free online naming ceremony card maker no watermark",
    ],
    h1: "Online Naming Ceremony Invitation Card Maker (100% Free)",
    heroBadge: "Modern Naming Day & Cradle Celebration Studio",
    subtitle:
      "Welcome your newborn into the world with elegant, personalized naming day invitations. Edit names, dates, and venue in seconds, add a venue Google Maps QR code, and download in print-ready 300 DPI.",
    introTitle: "Create Unforgettable Naming Day Invitations in Minutes",
    introEnglish:
      "A naming ceremony is your child's very first introduction to the world of family, friends, and lifelong well-wishers. Our online card studio provides parents with beautifully designed templates featuring delicate watercolor florals, celestial golden glitter stars, suspended wooden cradles, and playful baby artwork. Customize every detail and export in high-resolution 300 DPI.",
    focusCallout: {
      title: "Explore the Full Catalog & Additional Celebrations",
      description: "Browse our complete collection of Indian wedding cards, baby showers, and birthday cards on our homepage.",
      homeLinkText: "Go to Main InvitationCardMaker Homepage",
      categoryLinkText: "Browse All Naming Ceremony Templates",
    },
    sampleInvitationWording: [
      {
        type: "Modern Formal Naming Ceremony",
        title: "Elegant Family Invitation Wording",
        englishScriptText: `A brand new journey begins with a name!

With hearts full of joy and gratitude,
we cordially invite you to celebrate the
NAMING CEREMONY of our beloved daughter ARIA SHARMA.

Date: Sunday, October 18, 2026 | Time: 11:30 AM onwards
Venue: The Grand Ballroom, Orchid Pavilion, MG Road, Bengaluru
Hosted with love by: Priya & Vikram Sharma`,
      },
    ],
    features: [
      { iconName: "QrCode", title: "Google Maps Venue QR Code", description: "Scannable QR code for smooth GPS navigation." },
      { iconName: "Printer", title: "300 DPI Print Quality", description: "Vector-sharp quality for cardstock printing." },
      { iconName: "Smartphone", title: "WhatsApp & Story Ready", description: "Optimized mobile vertical aspect ratio." },
      { iconName: "Edit3", title: "Zero Watermark", description: "100% free with unlimited high-resolution downloads." },
    ],
    stepByStepGuide: [
      { step: 1, title: "Pick a Theme", detail: "Select golden cradle swings or celestial stars." },
      { step: 2, title: "Personalize Details", detail: "Edit baby's name, parents' names, and venue." },
      { step: 3, title: "Generate QR", detail: "Add a Google Maps pin link for effortless guest arrivals." },
      { step: 4, title: "Download Free", detail: "Export in 300 DPI print-ready quality." },
    ],
    faqs: [
      {
        question: "How do I make a naming ceremony invitation card online for free?",
        answer: "Select any template, click customize, personalize the text details, and download your 300 DPI image file.",
      },
    ],
    stuffedKeywords: [
      "naming ceremony invitation card maker english",
      "baby naming ceremony invitation card in english",
      "cradle ceremony invitation card editor free",
      "naming day invitation card maker with photo",
    ],
  },
  {
    category: "naming-ceremony",
    lang: "hindi",
    langName: "Hindi",
    nativeScriptName: "हिन्दी",
    slug: "namkaran-sanskar-invitation-card-maker-hindi",
    aliases: [
      "namkaran-sanskar-invitation-card-maker",
      "namkaran-sanskar",
      "namkaran",
      "naamkaran-sanskar",
      "naamkaran",
      "namkaran-invitation-card-maker-hindi",
    ],
    seoTitle: "Hindi Namkaran Sanskar Invitation Card Maker Online - नामकरण संस्कार पत्रिका (Free 300 DPI)",
    metaDescription:
      "Design auspicious Hindi Namkaran Sanskar (नामकरण संस्कार) invitation cards online for free. Traditional Vedic motifs, Bal Gopal artwork, venue Google Maps QR code, and free print-ready 300 DPI download.",
    keywords: [
      "namkaran sanskar invitation card maker hindi",
      "hindi namkaran sanskar patrika format",
      "naamkaran card maker in hindi online",
      "baby naming ceremony card in hindi and english",
      "bal gopal namkaran invitation template",
      "whatsapp namkaran invitation card with qr code",
    ],
    h1: "Hindi Namkaran Sanskar Invitation Card Maker (नामकरण संस्कार)",
    heroBadge: "वैदिक नामकरण संस्कार • शुभ निमंत्रण पत्रिका",
    subtitle:
      "Create holy Vedic Namkaran Sanskar invitation cards in Hindi and English. Honor the sacred naming ceremony with Bal Gopal artwork, auspicious Mantras, venue Google Maps QR codes, and instant 300 DPI download.",
    introTitle: "The Holy Rites of Namkaran Sanskar (नामकरण संस्कार)",
    introEnglish:
      "In Hindu Sanatan tradition, Namkaran Sanskar (नामकरण संस्कार) is one of the revered sixteen sacraments (Shodasha Samskaras). Our free online Namkaran card studio lets families design an authentic, dignified invitation in Hindi and English with Bal Gopal motifs, traditional Devanagari typography, and Google Maps venue QR codes.",
    focusCallout: {
      title: "Looking for more templates across all Indian celebrations?",
      description: "Explore our main English catalog across weddings, baby showers, and Griha Pravesh on our homepage.",
      homeLinkText: "Go to Main InvitationCardMaker Homepage",
      categoryLinkText: "View All Naming Ceremony & Namkaran Templates",
    },
    sampleInvitationWording: [
      {
        type: "Traditional Vedic Namkaran",
        title: "पारंपरिक हिंदी नामकरण संस्कार पत्रिका",
        nativeScriptText: `|| ॐ श्री गणेशाय नमः ||
|| ॐ नमो भगवते वासुदेवाय ||

ईश्वर की असीम अनुकम्पा से हमारे यहाँ पौत्र / सुपुत्र के जन्म पर
'नामकरण संस्कार एवं प्रीतिभोज' का आयोजन किया गया है।
कृपया पधारकर नवजात शिशु को अपना स्नेह एवं शुभाशीर्वाद प्रदान करें।

हवन: प्रातः १०:०० बजे | प्रीतिभोज: दोपहर १२:३० बजे
दिनांक: रविवार, १८ अक्टूबर २०२६
स्थान: श्री कृष्ण वाटिका, मालवीय नगर, जयपुर
दर्शनाभिलाषी: समस्त शर्मा एवं भारद्वाज परिवार`,
        englishScriptText: `|| Om Shree Ganeshay Namah ||

We cordially invite you with family to the auspicious
NAMKARAN SANSKAR & LUNCH of our newborn son!
Date: Sunday, October 18, 2026 | Havan: 10:00 AM | Lunch: 12:30 PM
Venue: Shree Krishna Vatika, Malviya Nagar, Jaipur`,
      },
    ],
    features: [
      { iconName: "Sparkles", title: "Spiritual Vedic Motifs", description: "Bal Gopal, Kalash, and Swastik symbols." },
      { iconName: "QrCode", title: "Venue QR Code", description: "Instant mobile GPS navigation for guests." },
      { iconName: "Printer", title: "300 DPI Clarity", description: "Uncompressed print-quality rasterization." },
      { iconName: "Smartphone", title: "WhatsApp Ready", description: "Flawless mobile display without compression blur." },
    ],
    stepByStepGuide: [
      { step: 1, title: "Choose a Design", detail: "Select temple-themed gold borders or cradle artwork." },
      { step: 2, title: "Enter Details", detail: "Fill in Vedic havan timings and venue in Hindi or English." },
      { step: 3, title: "Add Location QR", detail: "Paste your Google Maps link for instant QR generation." },
      { step: 4, title: "Download Free", detail: "Export in 300 DPI resolution immediately." },
    ],
    faqs: [
      {
        question: "What is naming ceremony called in Hindi?",
        answer: "In Hindi, naming ceremony is called 'Namkaran' (नामकरण) or 'Namkaran Sanskar' (नामकरण संस्कार).",
      },
    ],
    stuffedKeywords: [
      "namkaran sanskar invitation card maker hindi",
      "hindi namkaran sanskar patrika format",
      "naamkaran card maker in hindi online",
      "baby naming ceremony card in hindi and english",
    ],
  },

  // =========================================================================
  // 3. WEDDING (Lagna Patrika / Vivah Nimantran / Wedding Invitation)
  // =========================================================================
  {
    category: "wedding",
    lang: "marathi",
    langName: "Marathi",
    nativeScriptName: "मराठी",
    slug: "lagna-patrika-maker-marathi",
    aliases: [
      "lagna-patrika-invitation-card-maker-marathi",
      "lagna-patrika-maker",
      "marathi-wedding-card-maker",
      "lagna-nimantran-patrika-marathi",
    ],
    seoTitle: "Marathi Lagna Patrika Maker Online - लग्न पत्रिका निमंत्रण (Free 300 DPI)",
    metaDescription:
      "Create authentic Marathi Lagna Patrika (लग्न पत्रिका) online for free. Royal Kalash, Lord Ganesha shlokas, turmeric Haldi motifs, venue Google Maps QR code, and print-ready 300 DPI WhatsApp download.",
    keywords: [
      "lagna patrika maker marathi",
      "marathi lagna patrika maker online free",
      "marathi wedding card maker online",
      "lagna nimantran patrika marathi format",
      "hindu wedding card maker marathi and english",
      "lagna patrika photo format download",
      "whatsapp lagna patrika with venue qr",
    ],
    h1: "Marathi Lagna Patrika Maker Online (लग्न पत्रिका)",
    heroBadge: "शुभ विवाह • सस्नेह निमंत्रण पत्रिका",
    subtitle:
      "Design royal Marathi Lagna Patrika online in minutes. Traditional Ganesha calligraphy, royal kalash motifs, multi-event schedules (हळद, विवाह, स्वागत समारंभ), venue QR codes, and 300 DPI download.",
    introTitle: "Design Royal Marathi Lagna Patrika Online",
    introEnglish:
      "A Maharashtrian wedding is a sacred union steeped in Vedic rituals, joyous shehnai tunes, and warm familial hospitality. From Sakharpuda and Halad to the auspicious Lagna Muhurat and Satyanarayan pooja, every moment deserves an elegant invite. Our online Lagna Patrika studio allows you to design authentic Marathi wedding cards with traditional shlokas, royal temple arches, and Google Maps venue QR codes.",
    focusCallout: {
      title: "Explore the Full Wedding Catalog",
      description: "Browse royal Rajasthani palaces, modern floral gateways, and luxury wedding cards on our homepage.",
      homeLinkText: "Return to Homepage",
      categoryLinkText: "Browse All Wedding Templates",
    },
    sampleInvitationWording: [
      {
        type: "Traditional Marathi Lagna Patrika",
        title: "पारंपरिक मराठी लग्नपत्रिका मजकूर",
        nativeScriptText: `|| श्री गणेशाय नमः ||
|| कुलदैवत प्रसन्न ||

'दोन जीवांचे रेशीमबंध, साजरी झाली लग्नगाठ'

आमचे सुपुत्र
चि. रोहन (B.E., M.B.A.)
आणि
आमची सुकन्या
चि.सौ.कां. श्रेया (M.Sc.)
यांचा 'शुभ विवाह सोहळा' खालील शुभ मुहूर्तावर करण्याचे योजिले आहे.

शुभ विवाह मुहूर्त: रविवार, २० डिसेंबर २०२६, दुपारी १२:३५ वाजता
स्थळ: संस्कृती लॉन्स, बाणेर-बालेवाडी रोड, पुणे.

आपले नम्र:
समस्त शिंदे व मोहिते परिवार`,
        englishScriptText: `|| Shree Ganeshay Namah ||

Together with our families, we request the honor of your presence
at the wedding ceremony of
ROHAN & SHREYA

Date: Sunday, December 20, 2026 | Muhurat: 12:35 PM
Venue: Sanskruti Lawns, Baner-Balewadi Road, Pune
Warm Regards: Shinde & Mohite Family`,
      },
    ],
    features: [
      { iconName: "QrCode", title: "Google Maps Venue QR Code", description: "One-scan GPS navigation to wedding hall." },
      { iconName: "Printer", title: "300 DPI Print Quality", description: "Guaranteed sharp printing on wedding cardstock." },
      { iconName: "Smartphone", title: "WhatsApp Broadcast Ready", description: "2:3 vertical ratio for mobile chats." },
      { iconName: "Edit3", title: "Devanagari Poppins Fonts", description: "Elegant fonts for Marathi calligraphy." },
    ],
    stepByStepGuide: [
      { step: 1, title: "Select a Royal Template", detail: "Choose a traditional Ganesha or palace design." },
      { step: 2, title: "Fill in Details", detail: "Enter bride, groom, muhurat, and venue information." },
      { step: 3, title: "Add Location QR", detail: "Add a Google Maps QR code so guests arrive seamlessly." },
      { step: 4, title: "Download Free", detail: "Export in 300 DPI high resolution with zero watermark." },
    ],
    faqs: [
      {
        question: "Can I print this Lagna Patrika at a local printing press?",
        answer: "Yes! All cards export in 300 DPI resolution, perfect for professional offset or digital printing.",
      },
    ],
    stuffedKeywords: [
      "lagna patrika maker marathi",
      "marathi lagna patrika maker online free",
      "marathi wedding card maker online",
      "lagna nimantran patrika marathi format",
    ],
  },
  {
    category: "wedding",
    lang: "english",
    langName: "English",
    nativeScriptName: "English",
    slug: "wedding-invitation-card-maker-english",
    aliases: [
      "wedding-invitation-card-maker",
      "indian-wedding-card-maker",
      "wedding-card-maker-online",
      "wedding",
    ],
    seoTitle: "Indian Wedding Invitation Card Maker Online Free - 300 DPI Shaadi Cards",
    metaDescription:
      "Create luxury Indian wedding invitations online for free. Royal Rajasthani, South Indian temple, and modern floral templates with Google Maps QR code, Ganesh shlokas, and 300 DPI WhatsApp download.",
    keywords: [
      "wedding invitation card maker english",
      "indian wedding card maker online free",
      "digital wedding invitation card maker whatsapp",
      "hindu wedding card templates with ganesh shloka",
      "royal wedding invitation card with google maps qr code",
      "free online shaadi card maker 300 dpi print download",
    ],
    h1: "Online Indian Wedding Invitation Card Maker (100% Free)",
    heroBadge: "Royal Indian Wedding Studio",
    subtitle:
      "Design personalized Indian wedding invitations in minutes. Choose from royal palace arches, traditional temple gates, or modern minimalist florals, complete with venue Google Maps QR code.",
    introTitle: "Craft Timeless Royal Wedding Invitations Online",
    introEnglish:
      "An Indian wedding is a magnificent multi-day celebration of heritage, family love, and sacred rituals. From Ganesh Pooja and Haldi-Mehendi to Sangeet and Pheras, your wedding invitation sets the royal expectation for your big day. Our free online wedding card maker offers authentic traditional motifs like Lord Ganesha, Kalash, royal elephants, and scannable Google Maps QR codes.",
    focusCallout: {
      title: "Explore the Full Wedding Catalog & Other Categories",
      description: "Browse hundreds of templates across baby showers, birthdays, and housewarmings on our homepage.",
      homeLinkText: "Return to Homepage",
      categoryLinkText: "Browse All Wedding Templates",
    },
    sampleInvitationWording: [
      {
        type: "Royal Indian Wedding",
        title: "Traditional Hindu Wedding Invitation Wording",
        englishScriptText: `|| Shree Ganeshay Namah ||

Together with their families,
ANANYA & VIKRAM
request the pleasure of your company at their wedding celebration.

Date: Sunday, December 20, 2026 | Muhurat: 11:30 AM
Venue: The Royal Palace Ballroom, Palace Road, Jaipur
Dinner & Reception to follow
RSVP: Sharma & Singhal Family`,
      },
    ],
    features: [
      { iconName: "QrCode", title: "Google Maps Venue QR Code", description: "Direct GPS navigation to the wedding hall." },
      { iconName: "Printer", title: "300 DPI Print Quality", description: "Vector-sharp quality for wedding cardstock." },
      { iconName: "Smartphone", title: "WhatsApp & Story Ready", description: "Mobile-optimized vertical layout." },
      { iconName: "Edit3", title: "Zero Watermark", description: "100% free with unlimited downloads." },
    ],
    stepByStepGuide: [
      { step: 1, title: "Choose a Design", detail: "Select royal palace, temple border, or floral arch." },
      { step: 2, title: "Personalize", detail: "Edit couple names, family names, and event schedule." },
      { step: 3, title: "Add Location QR", detail: "Paste your Google Maps link for instant QR generation." },
      { step: 4, title: "Download in 300 DPI", detail: "Export in high resolution with zero watermark." },
    ],
    faqs: [
      {
        question: "Can I download my wedding card in print quality?",
        answer: "Yes, all cards export in 300 DPI resolution, the exact standard required by printing presses.",
      },
    ],
    stuffedKeywords: [
      "wedding invitation card maker english",
      "indian wedding card maker online free",
      "digital wedding invitation card maker whatsapp",
    ],
  },
  {
    category: "wedding",
    lang: "hindi",
    langName: "Hindi",
    nativeScriptName: "हिन्दी",
    slug: "vivah-nimantran-patrika-maker-hindi",
    aliases: [
      "shaadi-card-maker-hindi",
      "vivah-nimantran-patrika-maker",
      "hindi-wedding-card-maker",
      "shadi-card-maker-hindi",
    ],
    seoTitle: "Hindi Vivah Nimantran Patrika Maker - विवाह निमंत्रण पत्रिका (Free 300 DPI)",
    metaDescription:
      "Design traditional Hindi Vivah Nimantran Patrika (विवाह निमंत्रण पत्रिका) and Shaadi cards online for free. Lord Ganesha shlokas, royal mandap motifs, Google Maps QR code, and print-ready 300 DPI download.",
    keywords: [
      "vivah nimantran patrika maker hindi",
      "shaadi card maker in hindi online",
      "hindi wedding card maker online free",
      "shadi nimantran patrika format hindi",
      "vivah patrika wording hindi and english",
      "free shaadi card maker 300 dpi download",
    ],
    h1: "Hindi Vivah Nimantran Patrika Maker (विवाह निमंत्रण पत्रिका)",
    heroBadge: "मांगलिक विवाह • शुभ निमंत्रण पत्रिका",
    subtitle:
      "Create auspicious Hindi Vivah Nimantran and Shaadi invitation cards online. Traditional Vedic shlokas, Haldi-Sangeet schedules, Google Maps QR codes, and free 300 DPI print download.",
    introTitle: "Authentic Hindi Vivah Nimantran Patrika Online",
    introEnglish:
      "A Hindu wedding is a sacred celebration solemnized with Vedic Mantras, Saptapadi, and family blessings. Our free online Shaadi card maker allows you to design authentic Hindi Vivah Patrika with sacred Ganesha shlokas, multi-day function schedules (हल्दी, संगीत, पाणिग्रहण, प्रतिभोज), and venue Google Maps QR codes.",
    focusCallout: {
      title: "Explore the Full English Catalog & Celebrations",
      description: "Browse our complete catalog across all Indian celebrations on our homepage.",
      homeLinkText: "Return to Homepage",
      categoryLinkText: "Browse All Wedding Templates",
    },
    sampleInvitationWording: [
      {
        type: "Traditional Hindi Vivah Nimantran",
        title: "पारंपरिक हिंदी विवाह निमंत्रण पत्रिका",
        nativeScriptText: `|| ॐ श्री गणेशाय नमः ||
|| वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ ||

मांगलिक विवाह निमंत्रण
परमपिता परमेश्वर की असीम अनुकम्पा से हमारे सुपुत्र
चि. राहुल (सुपुत्र श्री सुरेश जी शर्मा)
का शुभ विवाह
आयु. पूजा (सुपुत्री श्री महेश जी वर्मा)
के साथ संपन्न होना निश्चित हुआ है।

पाणिग्रहण संस्कार: रविवार, २० दिसंबर २०२६ | सायं ७:०० बजे
स्थान: वृंदावन वाटिका, अजमेर रोड, जयपुर
दर्शनाभिलाषी: समस्त शर्मा परिवार`,
        englishScriptText: `|| Om Shree Ganeshay Namah ||

We cordially invite you with family to the wedding ceremony of
RAHUL & POOJA
Date: Sunday, December 20, 2026 | Time: 7:00 PM onwards
Venue: Vrindavan Vatika, Ajmer Road, Jaipur
RSVP: Sharma Family`,
      },
    ],
    features: [
      { iconName: "QrCode", title: "Google Maps Venue QR Code", description: "Direct GPS navigation to the wedding hall." },
      { iconName: "Printer", title: "300 DPI Print Quality", description: "High-definition export for cardstock printing." },
      { iconName: "Smartphone", title: "WhatsApp Optimized", description: "Mobile-friendly vertical layout." },
      { iconName: "Edit3", title: "Devanagari Fonts", description: "Authentic fonts for Hindi calligraphy." },
    ],
    stepByStepGuide: [
      { step: 1, title: "Choose a Template", detail: "Pick royal mandap or palace gateway." },
      { step: 2, title: "Enter Details", detail: "Fill in bride, groom, and muhurat details in Hindi." },
      { step: 3, title: "Add Location QR", detail: "Generate a Google Maps QR code for effortless arrivals." },
      { step: 4, title: "Download Free", detail: "Export in 300 DPI print-ready quality." },
    ],
    faqs: [
      {
        question: "Can I type directly in Hindi on this wedding card?",
        answer: "Yes, our editor includes genuine Devanagari fonts so you can type in Hindi or English.",
      },
    ],
    stuffedKeywords: [
      "vivah nimantran patrika maker hindi",
      "shaadi card maker in hindi online",
      "hindi wedding card maker online free",
    ],
  },

  // =========================================================================
  // 4. HOUSEWARMING (Vastu Shanti / Griha Pravesh / Housewarming)
  // =========================================================================
  {
    category: "housewarming",
    lang: "marathi",
    langName: "Marathi",
    nativeScriptName: "मराठी",
    slug: "vastu-shanti-invitation-card-maker-marathi",
    aliases: [
      "vastu-shanti-nimantran-patrika-marathi",
      "vastu-shanti-invitation-card-maker",
      "marathi-housewarming-card-maker",
      "griha-pravesh-card-marathi",
    ],
    seoTitle: "Marathi Vastu Shanti & Griha Pravesh Card Maker - वास्तु शांत (Free 300 DPI)",
    metaDescription:
      "Make Marathi Vastu Shanti (वास्तु शांत) and Griha Pravesh invitation cards online. Traditional marigold toran, Gau Mata, Kalash motifs, Google Maps QR code, and 300 DPI download.",
    keywords: [
      "vastu shanti invitation card maker marathi",
      "marathi vastu shanti invitation card maker online",
      "griha pravesh patrika in marathi format",
      "vastu pujan invitation online free",
      "marathi housewarming card maker free",
      "vastu shanti nimantran patrika marathi",
    ],
    h1: "Marathi Vastu Shanti Invitation Card Maker (वास्तु शांत निमंत्रण)",
    heroBadge: "गृहप्रवेश व वास्तु शांत • सस्नेह निमंत्रण",
    subtitle:
      "Design traditional Marathi Griha Pravesh and Vastu Shanti invitation cards with sacred Swastik, mango leaves toran, venue Google Maps QR code, and free 300 DPI download.",
    introTitle: "Auspicious Marathi Vastu Shanti & Griha Pravesh Cards",
    introEnglish:
      "Entering a new home in Maharashtra is sanctified by the Vastu Shanti Pooja and Griha Pravesh rituals. Purifying the premises with Navagraha Havan and boiling milk brings positive vibrations and abundance. Our online card studio allows you to design authentic Marathi housewarming cards with mango leaf torans, sacred Kalash, and Google Maps venue QR codes.",
    focusCallout: {
      title: "Explore the Full Housewarming Catalog",
      description: "Browse modern cottage aesthetics, traditional marigold borders, and new home invites on our homepage.",
      homeLinkText: "Return to Homepage",
      categoryLinkText: "Browse All Housewarming Templates",
    },
    sampleInvitationWording: [
      {
        type: "Traditional Marathi Vastu Shanti",
        title: "पारंपरिक मराठी वास्तु शांत निमंत्रण पत्रिका",
        nativeScriptText: `|| श्री गणेशाय नमः ||
|| कुलस्वामिनी प्रसन्न ||

'नवीन घर, नवीन स्वप्ने आणि नवीन सुरुवात'
श्रींच्या कृपेने आमच्या नूतन वास्तूचा
'गृहप्रवेश व वास्तु शांतता सोहळा' आयोजित केला आहे.

तरी या शुभप्रसंगी आपण उपस्थित राहून वास्तूला व आम्हास
आपले शुभाशीर्वाद द्यावेत, हीच नम्र विनंती.

वार: रविवार, १२ ऑक्टोबर २०२६
वास्तुपूजन: सकाळी ९:०० वाजता | स्नेहभोजन: दुपारी १२:३० वाजता
पत्ता: फ्लॅट क्र. ४०२, सिद्धिविनायक रेसिडेन्सी, बाणेर, पुणे.
निमंत्रक: सौ. व श्री. सचिन जोशी आणि परिवार`,
        englishScriptText: `With the divine blessings of the Almighty,
we cordially invite you to the
HOUSEWARMING & VASTU SHANTI CEREMONY of our new home!

Date: Sunday, October 12, 2026 | Pooja: 9:00 AM | Lunch: 12:30 PM
Address: Flat 402, Siddhivinayak Residency, Baner, Pune
Warm Regards: Sachin & Swati Joshi`,
      },
    ],
    features: [
      { iconName: "QrCode", title: "Google Maps Venue QR Code", description: "Direct GPS navigation to your new home." },
      { iconName: "Printer", title: "300 DPI Print Quality", description: "Vector-sharp quality for cardstock printing." },
      { iconName: "Smartphone", title: "WhatsApp Ready", description: "Mobile-friendly vertical aspect ratio." },
      { iconName: "Edit3", title: "Devanagari Poppins Fonts", description: "Crisp typography for Marathi text." },
    ],
    stepByStepGuide: [
      { step: 1, title: "Choose a Design", detail: "Select traditional Kalash or modern home illustration." },
      { step: 2, title: "Enter Address", detail: "Fill in pooja timings and new house address in Marathi." },
      { step: 3, title: "Add Location QR", detail: "Paste your Google Maps link for instant QR generation." },
      { step: 4, title: "Download Free", detail: "Export in 300 DPI high resolution with zero watermark." },
    ],
    faqs: [
      {
        question: "Can I add a Google Maps QR code for our new house address?",
        answer: "Yes! Paste your Google Maps link to add a scannable QR code directly on the card.",
      },
    ],
    stuffedKeywords: [
      "vastu shanti invitation card maker marathi",
      "marathi vastu shanti invitation card maker online",
      "griha pravesh patrika in marathi format",
    ],
  },
  {
    category: "housewarming",
    lang: "english",
    langName: "English",
    nativeScriptName: "English",
    slug: "housewarming-invitation-card-maker-english",
    aliases: [
      "housewarming-invitation-card-maker",
      "housewarming-card-maker",
      "griha-pravesh-invitation-card-maker",
      "housewarming",
    ],
    seoTitle: "Housewarming Invitation Card Maker Online Free - 300 DPI New Home Invites",
    metaDescription:
      "Design modern and traditional Housewarming invitation cards online for free. Add Google Maps venue QR code, custom host names, and download 300 DPI high-resolution cards.",
    keywords: [
      "housewarming invitation card maker english",
      "new home invitation card maker online free",
      "housewarming card with google maps qr code",
      "griha pravesh invitation card in english",
      "free housewarming invitation card download 300 dpi",
    ],
    h1: "Online Housewarming Invitation Card Maker (100% Free)",
    heroBadge: "New Home Blessing Studio",
    subtitle:
      "Celebrate your new address! Choose from modern cottage twilights, traditional marigold torans, or minimalist floral designs, complete with venue Google Maps QR code.",
    introTitle: "Welcome Loved Ones to Your New Home",
    introEnglish:
      "Moving into a new home is a celebration of hard work, dreams, and family love. A housewarming party welcomes loved ones into your personal sanctuary to create lifelong memories. Our free online housewarming card maker lets you personalize host names, new address details, and add a live Google Maps QR code so guests arrive seamlessly.",
    focusCallout: {
      title: "Explore the Full Catalog & Other Celebrations",
      description: "Browse our complete catalog across weddings, baby showers, and birthdays on our homepage.",
      homeLinkText: "Return to Homepage",
      categoryLinkText: "Browse All Housewarming Templates",
    },
    sampleInvitationWording: [
      {
        type: "Modern Housewarming Party",
        title: "Contemporary New Home Invitation",
        englishScriptText: `New Home, New Memories!

We have finally settled into our new home and would love to celebrate with you!
Please join us for our
HOUSEWARMING PARTY

Date: Saturday, November 7, 2026 | Time: 4:00 PM onwards
Address: Villa 24, Palm Meadows, Whitefield, Bengaluru
Hosted by: Ananya & Siddharth`,
      },
    ],
    features: [
      { iconName: "QrCode", title: "Google Maps Venue QR Code", description: "Direct GPS navigation to your doorstep." },
      { iconName: "Printer", title: "300 DPI Print Quality", description: "Sharp resolution for cardstock printing." },
      { iconName: "Smartphone", title: "WhatsApp Optimized", description: "Mobile-friendly vertical layout." },
      { iconName: "Edit3", title: "Zero Watermark", description: "100% free with unlimited downloads." },
    ],
    stepByStepGuide: [
      { step: 1, title: "Choose a Design", detail: "Select modern home illustration or traditional toran." },
      { step: 2, title: "Enter Address", detail: "Customize host names, party time, and address." },
      { step: 3, title: "Add Location QR", detail: "Paste your Google Maps link for instant QR generation." },
      { step: 4, title: "Download Free", detail: "Export in 300 DPI high resolution with zero watermark." },
    ],
    faqs: [
      {
        question: "How do guests scan the location QR code?",
        answer: "Guests simply point their smartphone camera at the QR code on the card, and Google Maps opens immediately.",
      },
    ],
    stuffedKeywords: [
      "housewarming invitation card maker english",
      "new home invitation card maker online free",
      "housewarming card with google maps qr code",
    ],
  },
  {
    category: "housewarming",
    lang: "hindi",
    langName: "Hindi",
    nativeScriptName: "हिन्दी",
    slug: "griha-pravesh-invitation-card-maker-hindi",
    aliases: [
      "griha-pravesh-invitation-card-maker",
      "vastu-pujan-card-maker-hindi",
      "housewarming-invitation-card-maker-hindi",
      "griha-pravesh",
    ],
    seoTitle: "Hindi Griha Pravesh Invitation Card Maker - गृह प्रवेश पत्रिका (Free 300 DPI)",
    metaDescription:
      "Design traditional Hindi Griha Pravesh (गृह प्रवेश) invitation cards online. Traditional Kalash, banana leaves, Lord Ganesha artwork, Google Maps QR code, and print-ready 300 DPI download.",
    keywords: [
      "griha pravesh invitation card maker hindi",
      "hindi housewarming invitation card online",
      "vastu pujan card maker free hindi",
      "griha pravesh patrika format hindi",
      "shubh griha pravesh invitation card maker",
    ],
    h1: "Hindi Griha Pravesh Invitation Card Maker (गृह प्रवेश निमंत्रण)",
    heroBadge: "गृह प्रवेश एवं वास्तु पूजन • शुभ निमंत्रण",
    subtitle:
      "Create auspicious Griha Pravesh invitation cards in Hindi and English. Customize muhurat, havan timings, and location QR in seconds with free 300 DPI download.",
    introTitle: "Auspicious Hindi Griha Pravesh & Vastu Pujan Cards",
    introEnglish:
      "Stepping into a new home is one of life's most cherished milestones. Performed in accordance with auspicious Vedic Muhurat, Griha Pravesh purifies the dwelling with sacred chants, Kalash sthapana, and family blessings. Our free online card studio allows you to design authentic Hindi Griha Pravesh cards with traditional motifs and Google Maps QR codes.",
    focusCallout: {
      title: "Explore the Full English Catalog & Celebrations",
      description: "Browse our complete catalog across all Indian celebrations on our homepage.",
      homeLinkText: "Return to Homepage",
      categoryLinkText: "Browse All Housewarming Templates",
    },
    sampleInvitationWording: [
      {
        type: "Traditional Hindi Griha Pravesh",
        title: "पारंपरिक हिंदी गृह प्रवेश निमंत्रण पत्रिका",
        nativeScriptText: `|| ॐ श्री गणेशाय नमः ||

ईश्वर की असीम अनुकम्पा एवं बड़ों के आशीर्वाद से
हमने अपने नए गृह में प्रवेश करने का संकल्प लिया है।
इस मांगलिक अवसर पर हमारे नूतन निवास के
'गृह प्रवेश एवं वास्तु पूजन' पर आप सपरिवार सादर आमंत्रित हैं।

हवन एवं पूजन: प्रातः ९:३० बजे | प्रीतिभोज: दोपहर १२:३० बजे
दिनांक: रविवार, २५ अक्टूबर २०२६
स्थान: विला नं. १२, ग्रीन वुड्स एनक्लेव, गोमती नगर, लखनऊ
विनीत: समस्त वर्मा परिवार`,
        englishScriptText: `We cordially invite you with family and friends to the
GRIHA PRAVESH & HOUSEWARMING CEREMONY of our new sweet home!
Date: Sunday, October 25, 2026 | Pooja: 9:30 AM | Lunch: 12:30 PM
Venue: Villa No. 12, Green Woods Enclave, Lucknow
Warm Regards: Verma Family`,
      },
    ],
    features: [
      { iconName: "QrCode", title: "Google Maps Venue QR Code", description: "Direct GPS navigation to your doorstep." },
      { iconName: "Printer", title: "300 DPI Print Quality", description: "High-definition export for cardstock printing." },
      { iconName: "Smartphone", title: "WhatsApp Optimized", description: "Mobile-friendly vertical layout." },
      { iconName: "Edit3", title: "Devanagari Fonts", description: "Authentic fonts for Hindi typography." },
    ],
    stepByStepGuide: [
      { step: 1, title: "Choose a Template", detail: "Select Kalash with coconut or traditional toran." },
      { step: 2, title: "Enter Details", detail: "Fill in pooja timings and new house address in Hindi." },
      { step: 3, title: "Add Location QR", detail: "Paste your Google Maps link for instant QR generation." },
      { step: 4, title: "Download Free", detail: "Export in 300 DPI print-ready quality." },
    ],
    faqs: [
      {
        question: "Can I edit the Griha Pravesh title in Hindi?",
        answer: "Yes, every text layer is 100% editable in both Hindi and English.",
      },
    ],
    stuffedKeywords: [
      "griha pravesh invitation card maker hindi",
      "hindi housewarming invitation card online",
      "vastu pujan card maker free hindi",
    ],
  },

  // =========================================================================
  // 5. BIRTHDAY (Vadhdivas / Janmadin / Birthday)
  // =========================================================================
  {
    category: "birthday",
    lang: "marathi",
    langName: "Marathi",
    nativeScriptName: "मराठी",
    slug: "vadhdivas-invitation-card-maker-marathi",
    aliases: [
      "vadhdivas-nimantran-patrika-marathi",
      "vadhdivas-invitation-card-maker",
      "marathi-birthday-card-maker",
      "birthday-card-maker-marathi",
      "birthday",
    ],
    seoTitle: "Marathi Birthday Invitation Card Maker - वाढदिवस निमंत्रण पत्रिका (Free 300 DPI)",
    metaDescription:
      "Create colorful Marathi Birthday (वाढदिवस) invitation cards online for free. First birthday milestone, jungle safari, cute baby themes, venue Google Maps QR code, and print-ready 300 DPI download.",
    keywords: [
      "vadhdivas invitation card maker marathi",
      "marathi birthday invitation card maker online free",
      "vadhdivas nimantran patrika marathi format",
      "first birthday card maker in marathi with photo",
      "baby birthday invitation card marathi",
      "whatsapp birthday invitation marathi with venue qr",
    ],
    h1: "Marathi Birthday Invitation Card Maker (वाढदिवस निमंत्रण)",
    heroBadge: "वाढदिवस सोहळा • सस्नेह निमंत्रण पत्रिका",
    subtitle:
      "Design joyful Marathi birthday invitations for kids and milestones. Customize party themes, baby photo, cake cutting time, venue Google Maps QR code, and download in print-ready 300 DPI.",
    introTitle: "Joyful Marathi Birthday Invitation Cards Online",
    introEnglish:
      "A child's birthday, especially their milestone 1st birthday, is filled with laughter, games, and cherished family memories. Our free online birthday invitation maker lets you craft vibrant cards in Marathi and English with jungle safari animals, sunny meadows, and cute baby portraits. Add cake cutting timings and a live Google Maps QR code for effortless party arrivals.",
    focusCallout: {
      title: "Explore the Full Birthday Catalog",
      description: "Browse jungle safari, sunny meadow animals, royal prince, and 1st birthday themes on our homepage.",
      homeLinkText: "Return to Homepage",
      categoryLinkText: "Browse All Birthday Templates",
    },
    sampleInvitationWording: [
      {
        type: "Baby 1st Birthday in Marathi",
        title: "पहिल्या वाढदिवसाची मराठी निमंत्रण पत्रिका",
        nativeScriptText: `|| श्री गणेशाय नमः ||

'आनंदाचा दिवस, गोड आठवणींचा सण'
आमचा लाडका बाळ
चि. अयांश
याच्या 'पहिल्या वाढदिवसाचा' सोहळा आयोजित केला आहे.
तरी आपण सहकुटुंब उपस्थित राहून बाळाला आपले शुभाशीर्वाद द्यावेत.

वार: रविवार, १५ नोव्हेंबर २०२६ | केक कटिंग: सायं ६:३० वाजता
स्थळ: मॅजिक बँक्वेट हॉल, एफसी रोड, शिवाजीनगर, पुणे.
निमंत्रक: सौ. व श्री. शिंदे परिवार`,
        englishScriptText: `A year of sweet smiles and tiny steps!
Please join us as we celebrate the
1ST BIRTHDAY of our beloved son AYANSH.

Date: Sunday, November 15, 2026 | Cake Cutting: 6:30 PM
Venue: Magic Banquet Hall, FC Road, Pune
Warm Wishes: Shinde Family`,
      },
    ],
    features: [
      { iconName: "QrCode", title: "Google Maps Venue QR Code", description: "Direct GPS navigation to the party hall." },
      { iconName: "Printer", title: "300 DPI Print Quality", description: "Sharp resolution for birthday prints." },
      { iconName: "Smartphone", title: "WhatsApp Optimized", description: "Mobile-friendly vertical layout." },
      { iconName: "Edit3", title: "Photo Upload Support", description: "Easily upload and position baby's picture." },
    ],
    stepByStepGuide: [
      { step: 1, title: "Select a Theme", detail: "Pick jungle safari, balloons, or baby animal artwork." },
      { step: 2, title: "Add Baby's Photo", detail: "Upload baby's portrait using the toolbar image button." },
      { step: 3, title: "Enter Party Details", detail: "Fill in cake cutting time and venue in Marathi or English." },
      { step: 4, title: "Download Free", detail: "Export in 300 DPI resolution with zero watermark." },
    ],
    faqs: [
      {
        question: "Can I add our baby's photo on the Marathi birthday card?",
        answer: "Yes, use the 'Add Image' button in the toolbar to upload your baby's photo easily.",
      },
    ],
    stuffedKeywords: [
      "vadhdivas invitation card maker marathi",
      "marathi birthday invitation card maker online free",
      "vadhdivas nimantran patrika marathi format",
    ],
  },
  {
    category: "birthday",
    lang: "english",
    langName: "English",
    nativeScriptName: "English",
    slug: "birthday-invitation-card-maker-english",
    aliases: [
      "birthday-invitation-card-maker",
      "first-birthday-invitation-card-maker",
      "kids-birthday-card-maker",
      "birthday",
    ],
    seoTitle: "Birthday Invitation Card Maker Online Free - 1st Birthday & Kids Invites (300 DPI)",
    metaDescription:
      "Design creative 1st birthday, kids party, and milestone birthday invitation cards online for free. Jungle safari, unicorn, superhero themes with venue Google Maps QR and 300 DPI download.",
    keywords: [
      "birthday invitation card maker english",
      "first birthday invitation card maker online free",
      "baby birthday invitation card with photo",
      "kids birthday party invitation template whatsapp",
      "jungle theme birthday invitation card",
      "1st birthday card maker 300 dpi print ready",
    ],
    h1: "Online Birthday Invitation Card Maker (100% Free)",
    heroBadge: "Kids & Milestone Birthday Studio",
    subtitle:
      "Make memorable birthday party invitation cards online. Personalize party themes, upload baby photo, add cake cutting timings, generate a Google Maps QR code, and export in 300 DPI.",
    introTitle: "Create Fun and Exciting Birthday Invitations Online",
    introEnglish:
      "Every birthday is a celebration of another year of memories, growth, and joy. Whether it is a baby's milestone first birthday, an adventurous jungle safari theme, or an elegant adult dinner party, an exciting invitation card gets everyone thrilled. Add the birthday star's photo, party theme details, and an instant venue location QR code for hassle-free guest arrivals.",
    focusCallout: {
      title: "Explore the Full Birthday Catalog & Other Categories",
      description: "Browse our complete catalog across weddings, baby showers, and naming ceremonies on our homepage.",
      homeLinkText: "Return to Homepage",
      categoryLinkText: "Browse All Birthday Templates",
    },
    sampleInvitationWording: [
      {
        type: "1st Birthday Party",
        title: "Joyful First Birthday Invitation",
        englishScriptText: `Our little cub is turning ONE!
Join us for a wild and fun adventure as we celebrate
LIAM'S 1ST BIRTHDAY!

Date: Saturday, November 14, 2026 | Time: 4:30 PM - 7:30 PM
Venue: The Jungle Clubhouse, Park Street, Bengaluru
Hosted with love by: Sarah & David`,
      },
    ],
    features: [
      { iconName: "QrCode", title: "Google Maps Venue QR Code", description: "Direct GPS navigation to the party hall." },
      { iconName: "Printer", title: "300 DPI Print Quality", description: "Sharp resolution for cardstock printing." },
      { iconName: "Smartphone", title: "WhatsApp Optimized", description: "Mobile-friendly vertical layout." },
      { iconName: "Edit3", title: "Photo Upload Support", description: "Upload the birthday child's photo easily." },
    ],
    stepByStepGuide: [
      { step: 1, title: "Choose a Theme", detail: "Select jungle safari, sunny meadow animals, or royal prince crown." },
      { step: 2, title: "Upload Photo", detail: "Add the birthday child's cute portrait with one click." },
      { step: 3, title: "Enter Details", detail: "Customize cake cutting time and party address." },
      { step: 4, title: "Download in 300 DPI", detail: "Export in high resolution with zero watermark." },
    ],
    faqs: [
      {
        question: "Can I add the child's photo?",
        answer: "Yes! Click the 'Add Image' button in the toolbar to upload and position any photo on the card.",
      },
    ],
    stuffedKeywords: [
      "birthday invitation card maker english",
      "first birthday invitation card maker online free",
      "baby birthday invitation card with photo",
    ],
  },
  {
    category: "birthday",
    lang: "hindi",
    langName: "Hindi",
    nativeScriptName: "हिन्दी",
    slug: "janmadin-invitation-card-maker-hindi",
    aliases: [
      "janmadin-nimantran-patrika-maker-hindi",
      "janmadin-invitation-card-maker",
      "birthday-invitation-card-maker-hindi",
      "birthday-card-hindi",
    ],
    seoTitle: "Hindi Birthday Invitation Card Maker - जन्मदिन निमंत्रण पत्रिका (Free 300 DPI)",
    metaDescription:
      "Design colorful Hindi Birthday (जन्मदिन) invitation cards online for free. First birthday milestone, jungle safari, baby photo upload, Google Maps QR code, and print-ready 300 DPI download.",
    keywords: [
      "janmadin invitation card maker hindi",
      "hindi birthday invitation card online free",
      "janmadin nimantran patrika format hindi",
      "1st birthday card maker in hindi with photo",
      "bacchon ke janmadin ka nimantran patra",
    ],
    h1: "Hindi Birthday Invitation Card Maker (जन्मदिन निमंत्रण)",
    heroBadge: "जन्मदिन महोत्सव • शुभ निमंत्रण पत्रिका",
    subtitle:
      "Create joyful Hindi birthday invitation cards online. Customize party themes, baby photo, cake cutting time, venue Google Maps QR code, and download in print-ready 300 DPI.",
    introTitle: "Joyful Hindi Birthday Invitations Online",
    introEnglish:
      "A child's birthday is a celebration of divine joy, milestones, and family warmth. Our free online birthday card studio lets you design festive cards in Hindi and English with cute cartoon animals, colorful balloons, and baby photos. Add cake cutting timings and a live Google Maps QR code for effortless party arrivals.",
    focusCallout: {
      title: "Explore the Full English Catalog & Celebrations",
      description: "Browse our complete catalog across weddings, baby showers, and Griha Pravesh on our homepage.",
      homeLinkText: "Return to Homepage",
      categoryLinkText: "Browse All Birthday Templates",
    },
    sampleInvitationWording: [
      {
        type: "1st Birthday in Hindi",
        title: "पहले जन्मदिन की हिंदी निमंत्रण पत्रिका",
        nativeScriptText: `|| ॐ श्री गणेशाय नमः ||

'हर्ष और उल्लास से भरा पल'
हमारे प्यारे सुपुत्र
चि. आरव के 'प्रथम जन्मोत्सव' के शुभ अवसर पर
आप सपरिवार सादर आमंत्रित हैं।

दिनांक: रविवार, १५ नवंबर २०२६ | केक कटिंग: सायं ६:०० बजे
स्थान: सेलिब्रेशन हॉल, मालवीय नगर, जयपुर
दर्शनाभिलाषी: समस्त शर्मा परिवार`,
        englishScriptText: `We are celebrating a whole year of joy!
Please join us for the
1ST BIRTHDAY CELEBRATION of our beloved son AARAV.
Date: Sunday, November 15, 2026 | Cake Cutting: 6:00 PM
Venue: Celebration Hall, Malviya Nagar, Jaipur`,
      },
    ],
    features: [
      { iconName: "QrCode", title: "Google Maps Venue QR Code", description: "Direct GPS navigation to the party hall." },
      { iconName: "Printer", title: "300 DPI Print Quality", description: "Sharp resolution for birthday prints." },
      { iconName: "Smartphone", title: "WhatsApp Optimized", description: "Mobile-friendly vertical layout." },
      { iconName: "Edit3", title: "Photo Upload Support", description: "Easily upload and position baby's picture." },
    ],
    stepByStepGuide: [
      { step: 1, title: "Choose a Template", detail: "Select balloons or jungle safari artwork." },
      { step: 2, title: "Upload Photo", detail: "Add the birthday child's photo with one click." },
      { step: 3, title: "Enter Details", detail: "Fill in cake cutting time and party address in Hindi." },
      { step: 4, title: "Download Free", detail: "Export in 300 DPI print-ready quality." },
    ],
    faqs: [
      {
        question: "Can I type birthday text in Hindi?",
        answer: "Yes, our editor supports full Devanagari Hindi text and fonts like Poppins and Rozha One.",
      },
    ],
    stuffedKeywords: [
      "janmadin invitation card maker hindi",
      "hindi birthday invitation card online free",
      "janmadin nimantran patrika format hindi",
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

export function getSeoPageForCategoryAndLang(
  category: string,
  lang: string
): MultilingualSeoPageData | undefined {
  const normCat = category.toLowerCase().trim();
  const normLang = lang.toLowerCase().trim();

  return MULTILINGUAL_SEO_PAGES.find(
    (page) => page.category === normCat && page.lang === normLang
  );
}
