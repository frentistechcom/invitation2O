export interface RegionalSeoContent {
  category: string;
  lang: string;
  langName: string;
  nativeScript: string;
  ceremonyName: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  heroBadge: string;
  subtitle: string;
  culturalStory: {
    title: string;
    description: string;
    rituals: { name: string; detail: string }[];
  };
  sampleWording: {
    title: string;
    regional: string;
    english: string;
  };
  faqs: {
    question: string;
    answer: string;
  }[];
  keywords: string[];
}

export const REGIONAL_SEO_PAGES: RegionalSeoContent[] = [
  // ==========================================
  // BABY SHOWER (Dohale Jevan / Godh Bharai / Seemantham)
  // ==========================================
  {
    category: "baby-shower",
    lang: "marathi",
    langName: "Marathi",
    nativeScript: "मराठी",
    ceremonyName: "Dohale Jevan (डोहळे जेवण)",
    seoTitle: "Marathi Dohale Jevan Invitation Card Maker - English & Marathi Text",
    metaDescription:
      "Make authentic Marathi Dohale Jevan (डोहळे जेवण) & Oti Bharane invitations online. Choose floral swings, green chuda designs, add Google Maps QR codes, and download 300 DPI print-ready cards for WhatsApp.",
    h1: "Marathi Dohale Jevan Invitation Card Maker",
    heroBadge: "डोहळे जेवण व ओटी भरणे सस्नेह निमंत्रण",
    subtitle:
      "Design traditional Marathi baby shower invitations in minutes. Customize parents' names, muhurat time, and venue directions in Marathi or English with instant WhatsApp sharing.",
    culturalStory: {
      title: "The Sacred Tradition of Dohale Jevan (डोहळे जेवण)",
      description:
        "In Maharashtrian culture, Dohale Jevan (also celebrated alongside Oti Bharane) takes place during the auspicious 7th month of pregnancy. Family and friends gather to shower the mother-to-be with blessings, love, and affection. The celebration includes sitting on a swing decorated with fresh marigolds and jasmine (फुलांचा पाळणा), wearing green glass bangles (हिरवा चुडा), and savoring a spread of delicious sweet treats like pedha, khoya barfi, and savory delicacies.",
      rituals: [
        {
          name: "Oti Bharane (ओटी भरणे)",
          detail: "Elders fill the mother-to-be's saree pallu with rice, coconut, supari, and fruits as a symbol of prosperity and divine blessings.",
        },
        {
          name: "Hirva Chuda (हिरवा चुडा)",
          detail: "The expectant mother wears vibrant green glass bangles, signifying nature's bounty, fertility, and marital happiness.",
        },
        {
          name: "Dhanu Pooja & Feasting",
          detail: "A fun-filled family feast where sweet delicacies hide cute baby riddles, creating memorable family moments.",
        },
      ],
    },
    sampleWording: {
      title: "Sample Marathi Dohale Jevan Wording",
      regional: `|| श्री गणेशाय नमः ||

आमच्या लाडक्या
सौ. पूजा राहुल देशमुख
यांच्या डोहाळे जेवणाचा व ओटी भरण्याचा कार्यक्रम आयोजित केला आहे.
तरी आपण सर्वांनी सहकुटुंब सहपरिवार उपस्थित राहून
भावी मातेला व बाळाला आपले शुभाशीर्वाद द्यावेत, हीच नम्र विनंती.

स्नेहभोजन: दुपारी १२:३० वाजता
वार: रविवार, १५ ऑक्टोबर २०२६
स्थळ: संस्कृती मंगल कार्यालय, कर्वे रोड, पुणे.
निमंत्रक: समस्त देशमुख व पाटील परिवार`,
      english: `Together with our families, we joyfully invite you to the
DOHALE JEVAN & BABY SHOWER CEREMONY
of our beloved
Pooja & Rahul Deshmukh

Please join us to bless the mother-to-be and the little miracle on the way!

Date: Sunday, October 15, 2026 | Time: 12:30 PM onwards
Venue: Sanskruti Banquet Hall, Karve Road, Pune
RSVP: Deshmukh & Patil Family`,
    },
    faqs: [
      {
        question: "Can I type in Marathi on the Dohale Jevan card template?",
        answer:
          "Yes! Our studio supports full Unicode Marathi text and Devanagari fonts (such as Rozha One, Yatra One, and Noto Serif Devanagari). You can simply type or copy-paste Marathi text, or use English lettering, and it will render crisply.",
      },
      {
        question: "How do I add our venue location on Google Maps?",
        answer:
          "Click the QR Code button in the editor toolbar, paste your Google Maps link from your phone or browser, and an instant scannable QR code will be placed on your card. Guests scanning the card with their smartphone camera will be navigated straight to your venue.",
      },
      {
        question: "Is this card suitable for sending on WhatsApp?",
        answer:
          "Yes! The downloaded JPG and WebP files are ultra-clear 300 DPI, optimized to look razor-sharp on mobile screens without being compressed into blurriness by WhatsApp.",
      },
    ],
    keywords: [
      "marathi dohala jevan invitation card maker",
      "dohale jevan card in marathi and english",
      "marathi baby shower invitation card online",
      "oti bharane nimantran patrika",
      "dohale jevan wording in marathi",
      "baby shower invitation maker pune mumbai",
    ],
  },
  {
    category: "baby-shower",
    lang: "hindi",
    langName: "Hindi",
    nativeScript: "हिन्दी",
    ceremonyName: "Godh Bharai (गोद भराई)",
    seoTitle: "Hindi Godh Bharai Invitation Card Maker Online - Free Templates & Wording",
    metaDescription:
      "Design traditional Hindi Godh Bharai (गोद भराई) invitation cards online. Beautiful Bal Gopal motifs, floral cradles, Devanagari script, and Google Maps venue QR codes. Download 300 DPI print-ready cards free.",
    h1: "Hindi Godh Bharai Invitation Card Maker",
    heroBadge: "गोद भराई शुभ निमंत्रण पत्रिका",
    subtitle:
      "Create warm, heartfelt Godh Bharai invitation cards in Hindi and English. Customize bride and groom family names, muhurat, and venue in seconds.",
    culturalStory: {
      title: "The Joy of Godh Bharai (गोद भराई)",
      description:
        "Godh Bharai, literally meaning 'filling the lap', is the traditional Indian baby shower held in the seventh or eighth month of pregnancy. The expecting mother is adorned in bridal finery, gifted auspicious fruits, coconut, and jewelry, and serenaded with traditional folk songs praying for the good health and long life of mother and child.",
      rituals: [
        {
          name: "Godh Bharana",
          detail: "Elders fill the mother's lap with coconuts, dry fruits, saffron sweets, and seasonal fruits while offering hearty blessings.",
        },
        {
          name: "Aarti & Sangeet",
          detail: "Women of the household perform protective Aarti with camphor and sing celebratory Godh Bharai geet.",
        },
        {
          name: "Feast & Sweet Blessings",
          detail: "A lavish vegetarian feast featuring the mom-to-be's favorite dishes and sweets shared with close kin.",
        },
      ],
    },
    sampleWording: {
      title: "Sample Hindi Godh Bharai Wording",
      regional: `|| ॐ श्री गणेशाय नमः ||

हर्षोल्लास के साथ आपको सूचित किया जाता है कि हमारी कुलवधू
सौ. स्नेहा (पत्नी श्री अमित शर्मा)
का 'गोद भराई एवं सीमंत संस्कार' निश्चित हुआ है।

कृपया इस मांगलिक अवसर पर पधारकर भावी माता एवं शिशु को
अपना स्नेहपूर्ण आशीर्वाद प्रदान कर अनुगृहीत करें।

दिनांक: रविवार, २० नवंबर २०२६ | समय: दोपहर १:०० बजे
स्थान: वृंदावन उत्सव भवन, सिविल लाइन्स, जयपुर
दर्शनाभिलाषी: समस्त शर्मा एवं वर्मा परिवार`,
      english: `We cordially invite you to celebrate the
GODH BHARAI CEREMONY
of our dear
Sneha & Amit Sharma

As we prepare to welcome a bundle of joy into our lives,
your presence and blessings will make this day truly special.

Date: Sunday, November 20, 2026 | Time: 1:00 PM onwards
Venue: Vrindavan Banquet Hall, Jaipur
With best compliments: Sharma & Verma Family`,
    },
    faqs: [
      {
        question: "Can I download my Godh Bharai card in Hindi?",
        answer:
          "Yes! Our editor includes genuine Devanagari fonts so you can type your complete invitation in Hindi, English, or a blend of both.",
      },
      {
        question: "Will the card look good when printed at a local photo shop?",
        answer:
          "Absolutely. Our export engine generates print-ready 300 DPI files that printing presses and digital photo labs can print on cardstock or textured matte paper without loss of quality.",
      },
    ],
    keywords: [
      "godh bharai invitation card maker online",
      "hindi baby shower invitation card",
      "godh bharai patrika format hindi",
      "baby shower card maker free",
      "laddu gopal baby shower invitation",
    ],
  },
  {
    category: "baby-shower",
    lang: "tamil",
    langName: "Tamil",
    nativeScript: "தமிழ்",
    ceremonyName: "Valaikappu & Seemantham (வளைகாப்பு)",
    seoTitle: "Tamil Valaikappu & Seemantham Invitation Card Maker Online",
    metaDescription:
      "Create traditional Tamil Valaikappu (வளைகாப்பு) and Seemantham invitation cards online. Elegant temple motifs, Tamil script support, Google Maps QR code, and 300 DPI download.",
    h1: "Tamil Valaikappu & Seemantham Card Maker",
    heroBadge: "வளைகாப்பு நல் அழைப்பிதழ்",
    subtitle:
      "Craft authentic Tamil Valaikappu invitation cards with traditional temple borders, colorful bangles art, and bilingual Tamil/English typography.",
    culturalStory: {
      title: "The Auspicious Valaikappu Ceremony (வளைகாப்பு)",
      description:
        "Valaikappu is an ancient Tamil ceremony held during the 7th or 9th month of pregnancy. The mother-to-be is gifted glass bangles by women of the family to ward off evil eyes and invite joy. The rhythmic sound of the bangles is believed to stimulate the baby's senses in the womb.",
      rituals: [
        {
          name: "Bangle Adornment",
          detail: "Mother-to-be's wrists are stacked with multicolored glass bangles blessed by elder Sumangalis.",
        },
        {
          name: "Chithirannam Feast",
          detail: "A grand feast serving 5 or 7 varieties of traditional rice dishes (Lemon, Tamarind, Coconut, Curd, and Sweet Pongal).",
        },
      ],
    },
    sampleWording: {
      title: "Sample Tamil Valaikappu Wording",
      regional: `|| ஸ்ரீ விநாயகர் துணை ||

எங்கள் இல்லத்து மணமகள்
சௌபாக்கியவதி மீனாட்சி அவர்களின்
வளைகாப்பு மற்றும் சீமந்த நன்னீராட்டு விழா

நிகழும் மங்களகரமான சுபகிருது வருடம், ஐப்பசி 10-ஆம் நாள் (அக்டோபர் 27, 2026)
ஞாயிற்றுக்கிழமை காலை 10:00 மணிக்கு நடைபெற இருப்பதால்,
தாங்கள் தங்கள் குடும்பத்தினருடன் வருகை தந்து வாழ்த்த வேண்டுகிறோம்.

இடம்: ஸ்ரீ ராகவேந்திரா திருமண மண்டபம், தி. நகர், சென்னை.
அன்புடன் அழைக்கும்: சுந்தரம் & ராமநாதன் குடும்பத்தினர்`,
      english: `We cordially invite you with family and friends to the
VALAIKAPPU & SEEMANTHAM CEREMONY
of our daughter-in-law
Meenakshi (W/o. Karthik)

Date: Sunday, October 27, 2026 | Time: 10:00 AM onwards
Venue: Sri Raghavendra Kalyana Mandapam, T. Nagar, Chennai
Warm Regards: Sundaram & Ramanathan Family`,
    },
    faqs: [
      {
        question: "Can I type Tamil text on this invitation card?",
        answer:
          "Yes! We provide Noto Serif Tamil fonts and full Unicode Tamil support. You can type or paste Tamil text directly into the text fields.",
      },
    ],
    keywords: [
      "tamil valaikappu invitation card maker",
      "seemantham invitation card tamil",
      "valaikappu pathirikai online",
      "baby shower invitation tamil nadu",
    ],
  },
  {
    category: "baby-shower",
    lang: "telugu",
    langName: "Telugu",
    nativeScript: "తెలుగు",
    ceremonyName: "Seemantham (శ్రీమంతం)",
    seoTitle: "Telugu Seemantham Invitation Card Maker Online - Free Templates",
    metaDescription:
      "Create Telugu Seemantham (శ్రీమంతం) invitation cards online in Telugu & English. Traditional motifs, Google Maps location QR code, and instant high-DPI download.",
    h1: "Telugu Seemantham Invitation Card Maker",
    heroBadge: "శ్రీమంతం ఆహ్వాన పత్రిక",
    subtitle:
      "Design graceful Telugu Seemantham baby shower invitation cards with traditional temple borders and bilingual wording.",
    culturalStory: {
      title: "The Sacred Seemantham Tradition (శ్రీమంతం)",
      description:
        "Seemantham is an auspicious Vedic ceremony performed to bless the mother-to-be and ensure the child's physical and spiritual well-being. Elders perform Pasupu-Kumkuma rituals and offer divine prayers to Goddess Lakshmi.",
      rituals: [
        {
          name: "Pasupu-Kumkuma",
          detail: "Sanctified turmeric and vermilion are applied to the mother-to-be with blessings for fertility and good fortune.",
        },
        {
          name: "Vedic Chants",
          detail: "Priests recite sacred hymns praying for the baby's wisdom, longevity, and righteous character.",
        },
      ],
    },
    sampleWording: {
      title: "Sample Telugu Seemantham Wording",
      regional: `|| శ్రీరస్తు - శుభమస్తు ||

మా కోడలు
చి.ల.సౌ. లక్ష్మి ప్రసన్న
శ్రీమంత మహోత్సవము

తేది: ఆదివారం, 12 నవంబర్ 2026 | సమయం: ఉదయం 11:30 ని.లకు
వేదిక: శ్రీ వెంకటేశ్వర కళ్యాణ మండపం, బంజారా హిల్స్, హైదరాబాద్
ఈ శుభ సందర్భమున మీ కుటుంబ సమేతంగా విచ్చేసి
భావి మాతను, చిన్నారిని ఆశీర్వదించవలసిందిగా కోరుచున్నాము.
ఆహ్వానించువారు: గారపాటి మరియు రావు కుటుంబ సభ్యులు`,
      english: `You are cordially invited to celebrate the auspicious
SEEMANTHAM CEREMONY
of our daughter-in-law
Lakshmi Prasanna (W/o. Ravindra)

Date: Sunday, November 12, 2026 | Time: 11:30 AM onwards
Venue: Sri Venkateswara Function Hall, Banjara Hills, Hyderabad
RSVP: Garapati & Rao Family`,
    },
    faqs: [
      {
        question: "Does the editor support Telugu script?",
        answer: "Yes, our canvas supports Telugu fonts (Noto Sans Telugu) and clean copy-pasting of Telugu text.",
      },
    ],
    keywords: [
      "telugu seemantham invitation card maker",
      "seemantham subhalekhalu online",
      "telugu baby shower card maker",
      "seemantham invitation card hyderabad",
    ],
  },
  {
    category: "baby-shower",
    lang: "gujarati",
    langName: "Gujarati",
    nativeScript: "ગુજરાતી",
    ceremonyName: "Shrimant & Kholo Bharvano (શ્રીમંત)",
    seoTitle: "Gujarati Shrimant Invitation Card Maker - Kholo Bharvano Kankotri",
    metaDescription:
      "Design Gujarati Shrimant (શ્રીમંત) & Kholo Bharvano invitation cards online. Traditional Gujarati fonts, floral cradles, venue QR codes, and free print-ready download.",
    h1: "Gujarati Shrimant Invitation Card Maker",
    heroBadge: "શ્રીમંત પ્રસંગ આમંત્રણ પત્રિકા",
    subtitle:
      "Create beautiful Gujarati Shrimant and baby shower cards with authentic festive borders, Gujarati script, and instant WhatsApp sharing.",
    culturalStory: {
      title: "The Joyous Shrimant Celebration (શ્રીમંત)",
      description:
        "In Gujarati households, Shrimant (or Kholo Bharvano) is celebrated during the seventh month. The maternal family brings Mosalu (gifts, sweets, and ornaments) to pamper the expectant mother with love and blessings.",
      rituals: [
        {
          name: "Kholo Bharvano",
          detail: "Elders fill the mother's lap with auspicious rice grains, betel nuts, coconut, and gold coins.",
        },
        {
          name: "Mosalu Welcoming",
          detail: "The grand welcoming of the maternal grandparents with sweets and traditional Garba music.",
        },
      ],
    },
    sampleWording: {
      title: "Sample Gujarati Shrimant Wording",
      regional: `|| શ્રી ગણેશાય નમઃ ||

અમારા સુપુત્ર ચિ. જય અને સુપુત્રવધૂ સૌ. નેહાના
'શ્રીમંત (ખોળો ભરવાનો પ્રસંગ)'
નિમિત્તે આપ સહપરિવાર ઉપસ્થિત રહી
ભાવિ માતા તેમજ શિશુને આપના આશીર્વાદ આપશો એવી નમ્ર વિનંતી.

તારીખ: રવિવાર, ૮ નવેમ્બર ૨૦૨૬ | સમય: સવારે ૧૧:૩૦ કલાકે
સ્થળ: સરદાર પટેલ વાડી, આશ્રમ રોડ, અમદાવાદ.
સ્નેહાધીન: પટેલ પરિવાર`,
      english: `We warmly invite you to the auspicious
SHRIMANT & BABY SHOWER CEREMONY
of our daughter-in-law
Neha (W/o. Jay Patel)

Date: Sunday, November 8, 2026 | Time: 11:30 AM onwards
Venue: Sardar Patel Hall, Ashram Road, Ahmedabad
Warm Regards: Patel Family`,
    },
    faqs: [
      {
        question: "Can I type Gujarati fonts on this card?",
        answer: "Yes, our editor comes with Noto Sans Gujarati font support for typing or pasting Gujarati text.",
      },
    ],
    keywords: [
      "gujarati shrimant invitation card maker",
      "kholo bharvano kankotri online",
      "gujarati baby shower invitation",
      "shrimant invitation wording gujarati",
    ],
  },
  {
    category: "baby-shower",
    lang: "english",
    langName: "English",
    nativeScript: "English",
    ceremonyName: "Baby Shower & Godh Bharai",
    seoTitle: "Online Baby Shower Invitation Card Maker - Free Modern & Indian Designs",
    metaDescription:
      "Make stunning Baby Shower & Godh Bharai invitations online in 2 minutes. Add Google Maps venue QR code, custom parents' names, and download 300 DPI high-resolution cards free.",
    h1: "Online Baby Shower Invitation Card Maker",
    heroBadge: "Baby Shower & Godh Bharai Studio",
    subtitle:
      "Choose from lovely pastel cradles, baby deer, stars, and floral arrangements. Download print-ready 300 DPI files or share directly on WhatsApp.",
    culturalStory: {
      title: "Celebrate the Miracle on the Way",
      description:
        "A baby shower brings together dearest friends and family to honor the expectant parents, play cheerful games, shower gifts, and shower the mom-to-be with heartfelt affection.",
      rituals: [
        {
          name: "Parent Blessing & Games",
          detail: "Interactive games, advice cards, and heartfelt blessings for the upcoming arrival.",
        },
        {
          name: "Feasting & Cake Cutting",
          detail: "Delightful treats, savory bites, and sweet celebratory cake.",
        },
      ],
    },
    sampleWording: {
      title: "Sample English Baby Shower Wording",
      regional: `A little miracle is on the way!
Please join us for a Baby Shower celebrating
ANANYA & ROHIT SHARMA

Date: Saturday, October 10, 2026 | Time: 3:00 PM - 6:00 PM
Venue: The Grand Orchid Ballroom, Indiranagar, Bengaluru
Hosted with love by the Sharma Family`,
      english: `A little miracle is on the way!
Please join us for a Baby Shower celebrating
ANANYA & ROHIT SHARMA

Date: Saturday, October 10, 2026 | Time: 3:00 PM - 6:00 PM
Venue: The Grand Orchid Ballroom, Indiranagar, Bengaluru
Hosted with love by the Sharma Family`,
    },
    faqs: [
      {
        question: "How do I print my downloaded baby shower card?",
        answer:
          "Save the card as a high-resolution 300 DPI JPEG or PDF. You can print it directly at home on photo paper or give it to any local digital print shop on 300 GSM matte cardstock.",
      },
    ],
    keywords: [
      "baby shower invitation card maker free",
      "online baby shower card maker with photo",
      "baby shower invitation whatsapp image",
      "free indian baby shower invitation maker",
    ],
  },

  // ==========================================
  // NAMING CEREMONY (Barse / Namkaran / Cradle)
  // ==========================================
  {
    category: "naming-ceremony",
    lang: "marathi",
    langName: "Marathi",
    nativeScript: "मराठी",
    ceremonyName: "Barse & Namkaran (बारसे व नामकरण)",
    seoTitle: "Marathi Barse Invitation Card Maker Online - बारसे निमंत्रण पत्रिका",
    metaDescription:
      "Design Marathi Barse (बारसे) & Namkaran invitation cards online. Traditional wooden cradle (पाळणा) themes, Devanagari fonts, Google Maps QR codes, and 300 DPI download.",
    h1: "Marathi Barse & Namkaran Invitation Card Maker",
    heroBadge: "बारसे व नामकरण सोहळा सस्नेह निमंत्रण",
    subtitle:
      "Create traditional Marathi baby naming ceremony (बारसे) invitation cards. Customize baby cradle artwork, muhurat time, and venue details in Marathi or English.",
    culturalStory: {
      title: "The Heartfelt Ceremony of Barse (बारसे)",
      description:
        "Celebrated usually on the 12th day or within the first few months after birth, the Barse ceremony marks the official naming of the newborn in Maharashtra. Women sing sweet lullabies around the decorated cradle (पाळणा गीते), and the paternal aunt (आत्या) formally whispers the chosen name into the baby's right ear.",
      rituals: [
        {
          name: "Palna Geet & Haldi Kumku",
          detail: "Elders sing traditional lullabies as the baby is placed into the adorned swing cradle.",
        },
        {
          name: "Whispering the Name (कानात नाव सांगणे)",
          detail: "The paternal aunt lovingly whispers the child's astrological or family name three times.",
        },
        {
          name: "Khirapat & Gulpani Distribution",
          detail: "Sweet puffed rice, coconut, and jaggery water are offered to all well-wishers.",
        },
      ],
    },
    sampleWording: {
      title: "Sample Marathi Barse Wording",
      regional: `|| श्री गणेशाय नमः ||

'अमृताहूनही गोड नाव'
आमच्या घरात बाळगोपाळाचे/कन्यारत्नाचे आगमन झाले असून
त्याच्या 'बारसे व नामकरण सोहळ्याचे'
औचित्य साधून स्नेहभोजनाचे आयोजन केले आहे.

तरी आपण सहकुटुंब उपस्थित राहून बाळाला आपले शुभाशीर्वाद द्यावेत.

वार: रविवार, २५ ऑक्टोबर २०२६ | वेळ: दुपारी १२:०० वाजता
स्थळ: सिद्धी मंगल कार्यालय, नवी पेठ, पुणे
निमंत्रक: समस्त कुलकर्णी व जोशी परिवार`,
      english: `Together with our family, we joyfully invite you to the
NAMING CEREMONY & BARSE
of our little bundle of joy!

Date: Sunday, October 25, 2026 | Time: 12:00 PM onwards
Venue: Siddhi Banquet Hall, Navi Peth, Pune
RSVP: Kulkarni & Joshi Family`,
    },
    faqs: [
      {
        question: "Can I include the baby's photo on the Barse card?",
        answer: "Yes, you can upload your baby's photo using the Add Image button in our canvas editor.",
      },
    ],
    keywords: [
      "marathi barse invitation card maker",
      "barse patrika format marathi",
      "namkaran ceremony card maker online",
      "baby naming ceremony invitation marathi",
    ],
  },
  {
    category: "naming-ceremony",
    lang: "hindi",
    langName: "Hindi",
    nativeScript: "हिन्दी",
    ceremonyName: "Namkaran Sanskar (नामकरण संस्कार)",
    seoTitle: "Hindi Namkaran Sanskar Invitation Card Maker Online - Free Templates",
    metaDescription:
      "Make auspicious Hindi Namkaran Sanskar (नामकरण संस्कार) invitation cards online. Traditional Vedic motifs, Bal Gopal art, Google Maps QR code, and print-ready 300 DPI download.",
    h1: "Hindi Namkaran Sanskar Invitation Card Maker",
    heroBadge: "नामकरण संस्कार शुभ निमंत्रण पत्रिका",
    subtitle:
      "Design warm, auspicious Namkaran invitation cards in Hindi and English with authentic Shlokas and cradle artwork.",
    culturalStory: {
      title: "The Auspicious Namkaran Sanskar",
      description:
        "Namkaran is one of the sixteen primary Vedic Samskaras. Performed with havan and astrological calculations, the ceremony invokes celestial blessings for the child's health, fortune, and righteousness as their formal name is announced.",
      rituals: [
        {
          name: "Vedic Havan & Pooja",
          detail: "Sacred fire ceremony to purify the home and invoke planetary deities for the infant.",
        },
        {
          name: "Name Announcement",
          detail: "Father or elder whispers the birth star name into the baby's right ear using a betel leaf.",
        },
      ],
    },
    sampleWording: {
      title: "Sample Hindi Namkaran Wording",
      regional: `|| ॐ नमः शिवाय ||

परमपिता परमेश्वर की असीम अनुकम्पा से हमारे यहाँ
पौत्र / सुपुत्र के जन्म पर
'नामकरण संस्कार एवं प्रीतिभोज'
का आयोजन किया गया है।

कृपया पधारकर नवजात शिशु को अपना स्नेह एवं शुभाशीर्वाद प्रदान करें।

दिनांक: रविवार, १८ अक्टूबर २०२६ | समय: दोपहर १:०० बजे
स्थान: रीजेंसी पैलेस, मालवीय नगर, जयपुर
दर्शनाभिलाषी: समस्त गुप्ता एवं अग्रवाल परिवार`,
      english: `With the divine blessings of the Almighty, we invite you to the
NAMING CEREMONY (NAMKARAN)
of our newborn little angel!

Date: Sunday, October 18, 2026 | Time: 1:00 PM onwards
Venue: Regency Palace, Malviya Nagar, Jaipur
Warm Wishes: Gupta & Agarwal Family`,
    },
    faqs: [
      {
        question: "Can I write Sanskrit Shlokas on the card?",
        answer: "Yes, our editor comes with pre-loaded sacred shlokas like '|| श्री गणेशाय नमः ||' and '|| ॐ नमः शिवाय ||'.",
      },
    ],
    keywords: [
      "namkaran sanskar invitation card maker online",
      "hindi namkaran card format",
      "baby naming ceremony invitation hindi",
      "naamkaran card maker free",
    ],
  },
  {
    category: "naming-ceremony",
    lang: "english",
    langName: "English",
    nativeScript: "English",
    ceremonyName: "Naming Ceremony & Cradle Celebration",
    seoTitle: "Naming Ceremony Invitation Card Maker Online - Free Digital Cards",
    metaDescription:
      "Create elegant baby Naming Ceremony invitations online. Customizable cradle swing, golden stars, family portraits, venue QR code, and print-ready 300 DPI download.",
    h1: "Naming Ceremony Invitation Card Maker",
    heroBadge: "Newborn Cradle & Naming Studio",
    subtitle:
      "Design personalized naming day invitations with cute cradle mobiles, safari animals, or traditional Indian brass cradles.",
    culturalStory: {
      title: "A Name to Cherish Forever",
      description:
        "A naming day gathers family and friends to welcome a new life into the world, announce the name they will carry with pride, and shower the infant with unconditional love.",
      rituals: [
        {
          name: "Cradle Blessing",
          detail: "Adorning the cradle with flowers, bells, and sweet lullabies.",
        },
        {
          name: "Celebration Feast",
          detail: "A joyful get-together with loved ones celebrating the little one's milestone.",
        },
      ],
    },
    sampleWording: {
      title: "Sample English Naming Ceremony Wording",
      regional: `A brand new journey begins with a name!
We joyfully invite you to the
NAMING CEREMONY
of our beloved daughter
ARIA SHARMA

Date: Sunday, October 18, 2026 | Time: 11:30 AM onwards
Venue: The Grand Pavilion, MG Road, Bengaluru
Hosted by: Priya & Vikram Sharma`,
      english: `A brand new journey begins with a name!
We joyfully invite you to the
NAMING CEREMONY
of our beloved daughter
ARIA SHARMA

Date: Sunday, October 18, 2026 | Time: 11:30 AM onwards
Venue: The Grand Pavilion, MG Road, Bengaluru
Hosted by: Priya & Vikram Sharma`,
    },
    faqs: [
      {
        question: "Can I send this card directly via WhatsApp?",
        answer:
          "Yes! Download your card as an ultra-crisp WebP or JPEG image and send it directly on WhatsApp, email, or social media.",
      },
    ],
    keywords: [
      "naming ceremony invitation card maker online",
      "baby naming ceremony card free",
      "cradle ceremony invitation online",
      "naming ceremony whatsapp invitation",
    ],
  },

  // ==========================================
  // HOUSEWARMING (Griha Pravesh / Vastu Shanti)
  // ==========================================
  {
    category: "housewarming",
    lang: "marathi",
    langName: "Marathi",
    nativeScript: "मराठी",
    ceremonyName: "Vastu Shanti & Griha Pravesh (वास्तु शांत व गृहप्रवेश)",
    seoTitle: "Marathi Vastu Shanti & Griha Pravesh Invitation Card Maker Online",
    metaDescription:
      "Make Marathi Vastu Shanti (वास्तु शांत) and Griha Pravesh invitation cards online. Traditional marigold toran, Gau Mata, Kalash motifs, Google Maps QR code, and 300 DPI download.",
    h1: "Marathi Vastu Shanti & Griha Pravesh Card Maker",
    heroBadge: "गृहप्रवेश व वास्तु शांत सस्नेह निमंत्रण",
    subtitle:
      "Design traditional Marathi Griha Pravesh invitation cards with sacred Swastik, mango leaves toran, and Google Maps venue navigation.",
    culturalStory: {
      title: "The Auspicious Vastu Shanti & Griha Pravesh (वास्तु शांत)",
      description:
        "Entering a new home in Maharashtra is sanctified by the Vastu Shanti Pooja and Griha Pravesh rituals. The ceremony appeases the Vastu Purusha, purifies the premises with Navagraha Havan, and fills the abode with positive vibrations and abundance.",
      rituals: [
        {
          name: "Gau Pooja & Toran",
          detail: "Welcoming the sacred cow (Gau Mata) at the entrance and tying a fresh mango leaf and marigold toran.",
        },
        {
          name: "Dudh Uphadane (दूध उफाळणे)",
          detail: "Boiling fresh milk until it overflows, symbolizing inexhaustible abundance and wealth in the home.",
        },
        {
          name: "Satyanarayan Mahapooja",
          detail: "Reading the sacred narrative with family and distributing sweet Sheera prasad.",
        },
      ],
    },
    sampleWording: {
      title: "Sample Marathi Vastu Shanti Wording",
      regional: `|| श्री गणेशाय नमः ||
|| कुलस्वामिनी प्रसन्न ||

'नवीन घर, नवीन स्वप्ने आणि नवीन सुरुवात'
श्रींच्या कृपेने आमच्या नूतन वास्तूचा
'गृहप्रवेश व वास्तु शांतता सोहळा'
आयोजित केला आहे.

तरी या शुभप्रसंगी आपण उपस्थित राहून वास्तूला व आम्हास
आपले शुभाशीर्वाद द्यावेत, हीच नम्र विनंती.

वार: रविवार, १२ ऑक्टोबर २०२६
वास्तुपूजन: सकाळी ९:०० वाजता | स्नेहभोजन: दुपारी १२:३० वाजता
पत्ता: फ्लॅट क्र. ४०२, सिद्धिविनायक रेसिडेन्सी, बाणेर, पुणे.
निमंत्रक: सौ. व श्री. सचिन जोशी आणि परिवार`,
      english: `With the divine blessings of the Almighty,
we cordially invite you to the
HOUSEWARMING & VASTU SHANTI CEREMONY
of our new home!

Date: Sunday, October 12, 2026
Vastu Pooja: 9:00 AM | Lunch: 12:30 PM onwards
Address: Flat 402, Siddhivinayak Residency, Baner, Pune
Warm Regards: Sachin & Swati Joshi`,
    },
    faqs: [
      {
        question: "Can I add a Google Maps QR code for our new house address?",
        answer:
          "Yes! Just paste your Google Maps location link into our QR code tool. Guests can scan the QR on the card and navigate straight to your doorstep without asking for landmarks.",
      },
    ],
    keywords: [
      "marathi vastu shanti invitation card maker",
      "griha pravesh patrika in marathi",
      "vastu pujan invitation online",
      "marathi housewarming card maker free",
    ],
  },
  {
    category: "housewarming",
    lang: "hindi",
    langName: "Hindi",
    nativeScript: "हिन्दी",
    ceremonyName: "Griha Pravesh & Vastu Pujan (गृह प्रवेश)",
    seoTitle: "Hindi Griha Pravesh Invitation Card Maker Online - Free Templates",
    metaDescription:
      "Design traditional Hindi Griha Pravesh (गृह प्रवेश) invitation cards online. Traditional Kalash, banana leaves, Lord Ganesha artwork, Google Maps QR code, and print-ready 300 DPI download.",
    h1: "Hindi Griha Pravesh Invitation Card Maker",
    heroBadge: "गृह प्रवेश एवं वास्तु पूजन निमंत्रण पत्रिका",
    subtitle:
      "Create auspicious Griha Pravesh invitation cards in Hindi and English. Customize muhurat, havan timings, and location in seconds.",
    culturalStory: {
      title: "The Holy Rites of Griha Pravesh (गृह प्रवेश)",
      description:
        "Stepping into a new home is one of life's most cherished milestones. Performed in accordance with auspicious Vedic Muhurat, Griha Pravesh purifies the dwelling with sacred chants, Kalash sthapana, and family blessings.",
      rituals: [
        {
          name: "Kalash Yatra",
          detail: "The lady of the house carries a water-filled copper Kalash adorned with coconut and mango leaves across the threshold.",
        },
        {
          name: "Vastu & Navagraha Havan",
          detail: "Lighting the holy fire to dispel negativity and sanctify all corners of the living space.",
        },
      ],
    },
    sampleWording: {
      title: "Sample Hindi Griha Pravesh Wording",
      regional: `|| ॐ श्री गणेशाय नमः ||

ईश्वर की असीम अनुकम्पा एवं बड़ों के आशीर्वाद से
हमने अपने नए गृह में प्रवेश करने का संकल्प लिया है।
इस मांगलिक अवसर पर हमारे नूतन निवास के
'गृह प्रवेश एवं वास्तु पूजन'
पर आप सपरिवार सादर आमंत्रित हैं।

दिनांक: रविवार, २५ अक्टूबर २०२६
हवन एवं पूजन: प्रातः ९:३० बजे | प्रीतिभोज: दोपहर १२:३० बजे
स्थान: विला नं. १२, ग्रीन वुड्स एनक्लेव, गोमती नगर, लखनऊ
विनीत: समस्त वर्मा परिवार`,
      english: `We cordially invite you with family and friends to the
GRIHA PRAVESH & HOUSEWARMING CEREMONY
of our new sweet home!

Date: Sunday, October 25, 2026 | Pooja: 9:30 AM | Lunch: 12:30 PM
Venue: Villa No. 12, Green Woods Enclave, Lucknow
Warm Regards: Verma Family`,
    },
    faqs: [
      {
        question: "Can I edit the Griha Pravesh title in Hindi?",
        answer: "Yes, every text layer on our templates is 100% editable in both Hindi and English.",
      },
    ],
    keywords: [
      "griha pravesh invitation card maker online",
      "hindi housewarming invitation card",
      "vastu pujan card maker free",
      "griha pravesh patrika hindi",
    ],
  },
  {
    category: "housewarming",
    lang: "english",
    langName: "English",
    nativeScript: "English",
    ceremonyName: "Housewarming & Home Blessing",
    seoTitle: "Housewarming Invitation Card Maker Online - Free Digital Cards",
    metaDescription:
      "Design modern and traditional Housewarming invitation cards online. Add Google Maps venue QR code, custom host names, and download 300 DPI high-resolution cards.",
    h1: "Housewarming Invitation Card Maker",
    heroBadge: "New Home Blessing Studio",
    subtitle:
      "Celebrate your new address! Choose from modern cottage twilights, traditional marigold torans, or minimalist floral designs.",
    culturalStory: {
      title: "Welcome to Our New Beginning",
      description:
        "Moving into a new home is a celebration of hard work, dreams, and family love. A housewarming party welcomes loved ones into your personal sanctuary to create lifelong memories.",
      rituals: [
        {
          name: "Home Blessing & Tour",
          detail: "Showing family and friends around the new spaces and garden.",
        },
        {
          name: "Celebration Feast",
          detail: "Sharing good food and laughter under your new roof.",
        },
      ],
    },
    sampleWording: {
      title: "Sample English Housewarming Wording",
      regional: `New home, new memories, new beginnings!
Please join us for our
HOUSEWARMING CELEBRATION
as we step into our new abode!

Date: Sunday, October 25, 2026 | Time: 11:30 AM onwards
Address: 402, Golden Meadows, Whitefield, Bengaluru
Hosted with joy by: Rohan & Kavita Mehta`,
      english: `New home, new memories, new beginnings!
Please join us for our
HOUSEWARMING CELEBRATION
as we step into our new abode!

Date: Sunday, October 25, 2026 | Time: 11:30 AM onwards
Address: 402, Golden Meadows, Whitefield, Bengaluru
Hosted with joy by: Rohan & Kavita Mehta`,
    },
    faqs: [
      {
        question: "Can I download this card without a watermark?",
        answer: "Yes, 100% free with zero watermarks.",
      },
    ],
    keywords: [
      "housewarming invitation card maker online",
      "new home invitation card maker free",
      "griha pravesh invitation card english",
    ],
  },

  // ==========================================
  // WEDDING & RECEPTION
  // ==========================================
  {
    category: "wedding",
    lang: "marathi",
    langName: "Marathi",
    nativeScript: "मराठी",
    ceremonyName: "Lagna Patrika (लग्नपत्रिका)",
    seoTitle: "Marathi Lagna Patrika Maker Online - मोफत लग्नपत्रिका डिझाइन",
    metaDescription:
      "Create traditional Marathi Lagna Patrika (लग्नपत्रिका) online. Royal Ganesha motifs, Devanagari calligraphy, Haldi & Sangeet details, Google Maps QR code, and 300 DPI download.",
    h1: "Marathi Lagna Patrika Maker Online",
    heroBadge: "शुभ विवाह लग्नपत्रिका सस्नेह निमंत्रण",
    subtitle:
      "Design authentic Marathi wedding invitation cards with royal arches, Shlokas, and complete wedding itinerary.",
    culturalStory: {
      title: "The Regal Maharashtrian Wedding (शुभ विवाह)",
      description:
        "Maharashtrian weddings are rooted in Vedic rituals, deep family bonds, and understated regal simplicity. From Sakharpuda to Halad, Seemant Pujan, and the sacred Antarpat ceremony with Mangalashtaka, each moment is steeped in joy.",
      rituals: [
        {
          name: "Sakharpuda & Halad",
          detail: "Engagement sugar exchange followed by traditional turmeric ceremony with family songs.",
        },
        {
          name: "Antarpat & Mangalashtaka",
          detail: "The sacred cloth separating the couple drops as holy Mangalashtakas shower blessings upon them.",
        },
      ],
    },
    sampleWording: {
      title: "Sample Marathi Lagna Patrika Wording",
      regional: `|| श्री गणेशाय नमः ||
|| वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ ||

श्रींच्या कृपेने
आमचे चिरंजीव चि. आदित्य (सुपुत्र सौ. व श्री. रमेश पाटील)
यांचा शुभविवाह
चि.कां. सौ. अक्षरा (सुपुत्री सौ. व श्री. सुरेश कुलकर्णी)
यांच्याशी करण्याचे योजिले आहे.

विवाह मुहूर्त: सोमवार, २४ नोव्हेंबर २०२६, सकाळी ११:२५ वाजता
हळद समारंभ: रविवार, २३ नोव्हेंबर २०२६, सायं. ६:०० वाजता
स्थळ: राजलक्ष्मी पॅलेस, सेनापती बापट रोड, पुणे.
निमंत्रक: समस्त पाटील व कुलकर्णी परिवार`,
      english: `Together with their families,
Aditya & Akshara
request the honor of your presence at their
WEDDING CEREMONY & RECEPTION

Muhurat: Monday, November 24, 2026 at 11:25 AM
Venue: Rajlaxmi Palace, Senapati Bapat Road, Pune
RSVP: Patil & Kulkarni Family`,
    },
    faqs: [
      {
        question: "Can I create a multi-day itinerary on this card?",
        answer: "Yes, you can add multiple text lines for Haldi, Sangeet, Wedding, and Reception.",
      },
    ],
    keywords: [
      "marathi lagna patrika maker online",
      "marathi wedding card maker free",
      "shubh vivah patrika marathi",
      "wedding invitation card marathi",
    ],
  },
  {
    category: "wedding",
    lang: "hindi",
    langName: "Hindi",
    nativeScript: "हिन्दी",
    ceremonyName: "Shubh Vivah (शुभ विवाह)",
    seoTitle: "Hindi Wedding Card Maker Online - Shubh Vivah Patrika",
    metaDescription:
      "Design regal Hindi Wedding Invitation Cards (शुभ विवाह निमंत्रण पत्रिका) online. Royal Ganesha, bride & groom portraits, Google Maps QR code, and 300 DPI download.",
    h1: "Hindi Wedding Card Maker Online",
    heroBadge: "शुभ विवाह निमंत्रण पत्रिका",
    subtitle:
      "Craft royal Indian wedding invitations with traditional borders, Devanagari shlokas, and venue navigation QR codes.",
    culturalStory: {
      title: "The Sacred Hindu Wedding",
      description:
        "A Hindu wedding is a sacred union of two souls and families sanctified by Agni Dev. Rituals like Kanyadaan, Panigrahana, and Saptapadi seal their everlasting bond.",
      rituals: [
        {
          name: "Haldi & Sangeet",
          detail: "Joyous pre-wedding musical celebration and auspicious turmeric application.",
        },
        {
          name: "Saptapadi & Pheras",
          detail: "Seven sacred vows taken around the holy fire praying for mutual love, health, and prosperity.",
        },
      ],
    },
    sampleWording: {
      title: "Sample Hindi Wedding Wording",
      regional: `|| ॐ श्री गणेशाय नमः ||

मांगलिक विवाह निमंत्रण
परमपिता परमात्मा की असीम अनुकम्पा से
हमारे सुपुत्र चि. राहुल
का शुभ विवाह
सुपुत्री चि. सौ. का. श्वेता
के साथ होना निश्चित हुआ है।

विवाह संस्कार: रविवार, १५ नवंबर २०२६ | शुभ लग्न: सायं. ७:१५ बजे
स्थान: लीला पैलेस होटल, आगरा रोड, जयपुर
दर्शनाभिलाषी: समस्त सिंघानिया परिवार`,
      english: `Two hearts, one soul, together forever.
You are cordially invited to celebrate the
WEDDING CEREMONY
of
Rahul & Shweta

Date: Sunday, November 15, 2026 | Muhurat: 7:15 PM
Venue: The Leela Palace, Jaipur
With best compliments: Singhania Family`,
    },
    faqs: [
      {
        question: "Can I print these wedding cards on physical card stock?",
        answer:
          "Yes! The 300 DPI high-DPI export produces razor-sharp prints on 300+ GSM shimmer or textured wedding card paper.",
      },
    ],
    keywords: [
      "hindi wedding card maker online",
      "shubh vivah patrika format",
      "indian wedding invitation maker free",
    ],
  },
  {
    category: "wedding",
    lang: "english",
    langName: "English",
    nativeScript: "English",
    ceremonyName: "Indian Wedding & Reception",
    seoTitle: "Indian Wedding Invitation Card Maker Online - Free Royal Designs",
    metaDescription:
      "Create high-resolution Indian Wedding Invitation Cards online. Royal palace themes, Google Maps venue QR code, customizable fonts, and print-ready 300 DPI download.",
    h1: "Indian Wedding Invitation Card Maker Online",
    heroBadge: "Royal Indian Wedding Studio",
    subtitle:
      "Design luxurious wedding invitations in 2 minutes. Elegant traditional arches, florals, and Google Maps venue navigation.",
    culturalStory: {
      title: "The Celebration of a Lifetime",
      description:
        "Celebrate your love story with a royal wedding card that honors timeless heritage and modern sophistication.",
      rituals: [
        {
          name: "Pre-Wedding Festivities",
          detail: "Haldi, Mehendi, and Sangeet celebrations filled with dance and music.",
        },
        {
          name: "Wedding Ceremony & Reception",
          detail: "Solemn vows followed by an exquisite evening banquet with family and friends.",
        },
      ],
    },
    sampleWording: {
      title: "Sample English Wedding Wording",
      regional: `Together with their parents
AARAV & ISHA
request the pleasure of your company
at the celebration of their wedding

Date: Sunday, November 15, 2026
Ceremony: 10:30 AM | Reception: 7:00 PM onwards
Venue: The Taj West End, Race Course Road, Bengaluru
RSVP: The Kapoor & Singhania Families`,
      english: `Together with their parents
AARAV & ISHA
request the pleasure of your company
at the celebration of their wedding

Date: Sunday, November 15, 2026
Ceremony: 10:30 AM | Reception: 7:00 PM onwards
Venue: The Taj West End, Race Course Road, Bengaluru
RSVP: The Kapoor & Singhania Families`,
    },
    faqs: [
      {
        question: "How do I add our Google Maps location to the card?",
        answer: "Click the QR Code button, paste your Google Maps link, and the QR code is generated instantly.",
      },
    ],
    keywords: [
      "indian wedding card maker online free",
      "wedding invitation card with google maps qr",
      "hindu wedding invitation maker",
    ],
  },

  // ==========================================
  // BIRTHDAY INVITATIONS
  // ==========================================
  {
    category: "birthday",
    lang: "first-birthday",
    langName: "1st Birthday",
    nativeScript: "1st Birthday",
    ceremonyName: "1st Birthday & Cake Smash",
    seoTitle: "1st Birthday Invitation Card Maker Online - Free Photo & Theme Cards",
    metaDescription:
      "Design adorable 1st Birthday invitation cards online. Jungle safari, cute animals, cake smash themes, venue QR code, and 300 DPI download for WhatsApp & printing.",
    h1: "1st Birthday Invitation Card Maker Online",
    heroBadge: "First Birthday Celebration Studio",
    subtitle:
      "Celebrate your little one turning ONE! Delightful cartoon animals, balloons, golden stars, and instant WhatsApp downloads.",
    culturalStory: {
      title: "Turning ONE is a Big Deal!",
      description:
        "The first birthday marks a milestone year of first smiles, first steps, and endless joy. Celebrate with a cheerful party card tailored for your toddler.",
      rituals: [
        {
          name: "Cake Smash & Fun",
          detail: "Delicious cake cutting and fun games for babies and parents alike.",
        },
      ],
    },
    sampleWording: {
      title: "Sample 1st Birthday Wording",
      regional: `Our little prince/princess is turning ONE!
Please join us for fun, cake, and celebrations
as we celebrate
AARAV'S 1ST BIRTHDAY!

Date: Saturday, October 24, 2026 | Time: 4:30 PM onwards
Venue: Playtopia Kid's Club, Indiranagar, Bengaluru
Hosted with love by: Mom & Dad`,
      english: `Our little prince/princess is turning ONE!
Please join us for fun, cake, and celebrations
as we celebrate
AARAV'S 1ST BIRTHDAY!

Date: Saturday, October 24, 2026 | Time: 4:30 PM onwards
Venue: Playtopia Kid's Club, Indiranagar, Bengaluru
Hosted with love by: Mom & Dad`,
    },
    faqs: [
      {
        question: "Can I add our baby's 1-year photo?",
        answer: "Yes! Use the Add Image tool to place your baby's photo right onto the card.",
      },
    ],
    keywords: [
      "1st birthday invitation card maker online free",
      "first birthday card maker with photo",
      "kids birthday invitation whatsapp",
    ],
  },
  {
    category: "birthday",
    lang: "marathi",
    langName: "Marathi",
    nativeScript: "मराठी",
    ceremonyName: "Vadhdivas (वाढदिवस निमंत्रण)",
    seoTitle: "Marathi Vadhdivas Invitation Card Maker Online - वाढदिवस पत्रिका",
    metaDescription:
      "Design Marathi Vadhdivas (वाढदिवस) invitation cards online. 1st birthday, 50th, 60th Abhishtachintan, Google Maps QR code, and 300 DPI download.",
    h1: "Marathi Vadhdivas Invitation Card Maker",
    heroBadge: "वाढदिवस सस्नेह निमंत्रण पत्रिका",
    subtitle:
      "Create personalized Marathi birthday cards with festive fonts, photo placement, and Google Maps venue location.",
    culturalStory: {
      title: "वाढदिवसाचे सस्नेह निमंत्रण",
      description:
        "Celebrating a milestone birthday with beloved family and friends brings lifelong blessings and joy.",
      rituals: [
        {
          name: "Aukshan & Cake Cutting",
          detail: "Traditional lamps and vermilion blessing (औक्षण) followed by cake cutting and family dinner.",
        },
      ],
    },
    sampleWording: {
      title: "Sample Marathi Birthday Wording",
      regional: `|| श्री गणेशाय नमः ||

आमचा लाडका
चि. आरव
याच्या पहिल्या वाढदिवसानिमित्त
स्नेहभोजनाचे आयोजन केले आहे.
तरी आपण उपस्थित राहून बाळाला आपले शुभाशीर्वाद द्यावेत.

वार: शनिवार, २४ ऑक्टोबर २०२६ | वेळ: सायं. ६:०० वाजता
स्थळ: नक्षत्र बॅन्क्वेट हॉल, कोथरूड, पुणे
निमंत्रक: सौ. व श्री. पाटील परिवार`,
      english: `We invite you to celebrate
Aarav's 1st Birthday!

Date: Saturday, October 24, 2026 | Time: 6:00 PM onwards
Venue: Nakshatra Banquet Hall, Kothrud, Pune
Warm Regards: Patil Family`,
    },
    faqs: [
      {
        question: "Can I type in Marathi for the birthday invitation?",
        answer: "Yes, you can easily type Marathi or copy-paste Marathi text onto the card.",
      },
    ],
    keywords: [
      "marathi vadhdivas invitation card maker",
      "birthday card maker in marathi online",
      "1st birthday marathi patrika",
    ],
  },
  {
    category: "birthday",
    lang: "english",
    langName: "English",
    nativeScript: "English",
    ceremonyName: "Birthday Party & Milestone",
    seoTitle: "Birthday Invitation Card Maker Online - Free Custom Templates",
    metaDescription:
      "Create high-resolution birthday party invitations online. Kids birthdays, milestone 50th/60th, venue QR code, and print-ready 300 DPI download.",
    h1: "Birthday Invitation Card Maker Online",
    heroBadge: "Birthday Celebration Studio",
    subtitle:
      "Design festive birthday party invitation cards in minutes. Add Google Maps venue QR code and download in 300 DPI for WhatsApp.",
    culturalStory: {
      title: "Cheers to Another Wonderful Year",
      description:
        "Whether it's a child's magical superhero party or a grand 50th golden jubilee, bring loved ones together with a stylish invitation.",
      rituals: [
        {
          name: "Party & Games",
          detail: "Music, fun party games, and delightful refreshments.",
        },
      ],
    },
    sampleWording: {
      title: "Sample English Birthday Wording",
      regional: `Let's celebrate another fantastic year!
You're invited to
AARAV'S BIRTHDAY BASH!

Date: Saturday, October 24, 2026 | Time: 5:00 PM onwards
Venue: FunZone Lounge, Indiranagar, Bengaluru
RSVP: 98765 43210`,
      english: `Let's celebrate another fantastic year!
You're invited to
AARAV'S BIRTHDAY BASH!

Date: Saturday, October 24, 2026 | Time: 5:00 PM onwards
Venue: FunZone Lounge, Indiranagar, Bengaluru
RSVP: 98765 43210`,
    },
    faqs: [
      {
        question: "Is there any limit on how many cards I can create?",
        answer: "No, create and download as many cards as you like, 100% free.",
      },
    ],
    keywords: [
      "birthday invitation card maker online free",
      "birthday party card maker with venue qr",
      "digital birthday invitation whatsapp",
    ],
  },
];

export function getSeoContent(category: string, lang: string): RegionalSeoContent | undefined {
  return REGIONAL_SEO_PAGES.find(
    (item) => item.category === category.toLowerCase() && item.lang === lang.toLowerCase()
  );
}

export function getLanguagesForCategory(category: string): RegionalSeoContent[] {
  return REGIONAL_SEO_PAGES.filter((item) => item.category === category.toLowerCase());
}

export function getAllSeoRoutes(): { category: string; lang: string }[] {
  return REGIONAL_SEO_PAGES.map((item) => ({
    category: item.category,
    lang: item.lang,
  }));
}
