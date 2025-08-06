// DROPPR Events Database - 40 Fake Events
const eventsData = [
  {
    eventID: 1,
    image: "https://hypebeast.com/image/2023/07/travis-scott-jordan-1-low-olive-release-1.jpg",
    title: "Travis Scott x Jordan 1 Low 'Olive'",
    description: "Highly anticipated Travis Scott collaboration featuring olive green colorway with signature backwards Swoosh.",
    date: "2025-08-07",
    instagram: "https://instagram.com/travisscott",
    tags: ["DROP", "THIS WEEK 🔥"]
  },
  {
    eventID: 1,
    image: "https://hypebeast.com/image/2023/07/travis-scott-jordan-1-low-olive-release-1.jpg",
    title: "Travis Scott Pop-Up Camden",
    description: "Highly anticipated Travis Scott collaboration featuring olive green colorway with signature backwards Swoosh.",
    date: "2025-02-07",
    instagram: "https://instagram.com/travisscott",
    tags: ["POP-UP", "ARCHIVED"]
  },
  {
    eventID: 2,
    image: "https://hypebeast.com/image/2023/03/corteiz-nike-air-max-95-release-info-0.jpg",
    title: "Corteiz x Nike Air Max 95 'London'",
    description: "First official Nike collaboration from Corteiz featuring London-inspired colorway and exclusive packaging.",
    date: "2025-08-08",
    instagram: "https://instagram.com/corteizcrtz",
    tags: ["DROP", "THIS WEEK 🔥"]
  },
  {
    eventID: 3,
    image: "https://hypebeast.com/image/2023/07/stussy-nike-air-force-1-low-fossil-stone-release-info-1.jpg",
    title: "Stussy x Nike Pop-up Experience",
    description: "Exclusive pop-up featuring the latest Stussy x Nike collaboration with interactive installations and limited releases.",
    date: "2025-08-07",
    instagram: "https://instagram.com/stussy",
    tags: ["POP-UP", "THIS WEEK 🔥"]
  },
  {
    eventID: 4,
    image: "https://hypebeast.com/image/2023/07/corteiz-crtz-rtw-launch-london-pop-up-1.jpg",
    title: "Corteiz Pop-up Store - Shoreditch",
    description: "Three-day exclusive pop-up featuring the latest Corteiz drops with limited edition pieces only available in-store.",
    date: "2025-08-08",
    instagram: "https://instagram.com/corteizcrtz",
    tags: ["POP-UP", "THIS WEEK 🔥"]
  },
  {
    eventID: 5,
    image: "https://hypebeast.com/image/2023/08/supreme-timberland-boot-collaboration-1.jpg",
    title: "Supreme Week 1 Drop - SS25",
    description: "Season opener featuring box logo tees, accessories, and the highly anticipated Supreme x Timberland boots.",
    date: "2025-08-09",
    instagram: "https://instagram.com/supremenewyork",
    tags: ["DROP", "THIS WEEK 🔥"]
  },
  {
    eventID: 6,
    image: "https://hypebeast.com/image/2023/05/off-white-virgil-abloh-archive-sample-sale-1.jpg",
    title: "Off-White Sample Sale Pop-up",
    description: "Rare sample sale featuring Virgil Abloh archive pieces and unreleased Off-White designs at Camden Market.",
    date: "2025-08-09",
    instagram: "https://instagram.com/off____white",
    tags: ["POP-UP", "THIS WEEK 🔥"]
  },
  {
    eventID: 7,
    image: "https://hypebeast.com/image/2023/06/yeezy-boost-350-v2-granite-release-1.jpg",
    title: "Yeezy Boost 350 V2 'Granite'",
    description: "Latest Yeezy 350 V2 release featuring granite grey primeknit upper with translucent stripe detail.",
    date: "2025-08-10",
    instagram: "https://instagram.com/yeezy",
    tags: ["DROP", "THIS WEEK 🔥"]
  },
  {
    eventID: 8,
    image: "https://hypebeast.com/image/2023/04/gallery-dept-los-angeles-pop-up-1.jpg",
    title: "GALLERY DEPT. Artist Showcase",
    description: "Interactive pop-up combining art exhibition with exclusive GALLERY DEPT. pieces and customization station.",
    date: "2025-08-10",
    instagram: "https://instagram.com/gallerydept",
    tags: ["POP-UP", "THIS WEEK 🔥"]
  },
  {
    eventID: 9,
    image: "https://hypebeast.com/image/2023/09/palace-autumn-collection-1.jpg",
    title: "Palace Autumn Drop 2025",
    description: "Palace's autumn collection drops featuring signature graphics on outerwear, knitwear, and accessories.",
    date: "2025-08-12",
    instagram: "https://instagram.com/palaceskateboards",
    tags: ["DROP", "THIS WEEK 🔥"]
  },
  {
    eventID: 10,
    image: "https://hypebeast.com/image/2023/06/stone-island-shadow-project-ss23-1.jpg",
    title: "Stone Island Shadow Project Launch",
    description: "Tech-focused pop-up showcasing the latest Shadow Project innovations with AR try-on experiences.",
    date: "2025-08-12",
    instagram: "https://instagram.com/stoneisland_official",
    tags: ["POP-UP", "THIS WEEK 🔥"]
  },
  {
    eventID: 11,
    image: "https://hypebeast.com/image/2023/05/off-white-converse-chuck-70-the-ten-1.jpg",
    title: "Off-White x Converse Chuck 70 'The Ten'",
    description: "Posthumous Virgil Abloh design featuring deconstructed Chuck 70 with signature zip-tie and text.",
    date: "2025-08-14",
    instagram: "https://instagram.com/off____white",
    tags: ["DROP"]
  },
  {
    eventID: 12,
    image: "https://hypebeast.com/image/2023/08/kith-new-balance-990v6-united-arrows-1.jpg",
    title: "Kith x New Balance Pop-up Lab",
    description: "Collaborative space featuring the new Kith x New Balance collection with sneaker customization workshop.",
    date: "2025-08-14",
    instagram: "https://instagram.com/kith",
    tags: ["POP-UP"]
  },
  {
    eventID: 13,
    image: "https://hypebeast.com/image/2023/06/stone-island-shadow-project-ss23-1.jpg",
    title: "Stone Island Shadow Project AW25",
    description: "Technical autumn/winter drop featuring innovative fabrics and futuristic silhouettes in muted tones.",
    date: "2025-08-15",
    instagram: "https://instagram.com/stoneisland_official",
    tags: ["DROP"]
  },
  {
    eventID: 14,
    image: "https://hypebeast.com/image/2023/03/awge-under-armour-socks-release-1.jpg",
    title: "AWGE x Under Armour Experience",
    description: "A$AP Rocky's AWGE collective presents exclusive Under Armour collaborations in immersive warehouse setting.",
    date: "2025-08-15",
    instagram: "https://instagram.com/awgeshit",
    tags: ["POP-UP"]
  },
  {
    eventID: 15,
    image: "https://hypebeast.com/image/2023/04/kaws-uniqlo-ut-companion-collection-1.jpg",
    title: "KAWS x Uniqlo UT Collection",
    description: "Latest KAWS collaboration featuring Companion and BFF graphics on premium Uniqlo UT blanks.",
    date: "2025-08-16",
    instagram: "https://instagram.com/kaws",
    tags: ["DROP"]
  },
  {
    eventID: 16,
    image: "https://hypebeast.com/image/2023/09/fear-of-god-essentials-fall-2023-1.jpg",
    title: "Fear of God ESSENTIALS Pop-up",
    description: "Minimalist pop-up space showcasing the latest ESSENTIALS collection with exclusive London colorways.",
    date: "2025-08-16",
    instagram: "https://instagram.com/fearofgod",
    tags: ["POP-UP"]
  },
  {
    eventID: 17,
    image: "https://hypebeast.com/image/2023/05/bape-marvel-spider-man-collection-1.jpg",
    title: "BAPE x Marvel Spider-Verse Collection",
    description: "Limited collaboration celebrating Spider-Man with BAPE's signature camo and shark motifs.",
    date: "2025-08-18",
    instagram: "https://instagram.com/bape_us",
    tags: ["DROP"]
  },
  {
    eventID: 18,
    image: "https://hypebeast.com/image/2023/07/pleasures-crocs-collaboration-classic-clog-1.jpg",
    title: "Pleasures x Crocs Collaboration Launch",
    description: "Punk-inspired pop-up featuring the unexpected Pleasures x Crocs collaboration with live tattooing.",
    date: "2025-08-18",
    instagram: "https://instagram.com/pleasures",
    tags: ["POP-UP"]
  },
  {
    eventID: 19,
    image: "https://hypebeast.com/image/2023/05/neighborhood-adidas-gazelle-collaboration-1.jpg",
    title: "NEIGHBORHOOD x Adidas Gazelle 'Tokyo'",
    description: "Premium leather Gazelle collaboration featuring Tokyo-inspired colorway and co-branding.",
    date: "2025-08-20",
    instagram: "https://instagram.com/neighborhood_official",
    tags: ["DROP"]
  },
  {
    eventID: 20,
    image: "https://hypebeast.com/image/2023/08/human-made-nigo-heart-collection-1.jpg",
    title: "HUMAN MADE Heart Pop-up Cafe",
    description: "Nigo's HUMAN MADE opens themed cafe pop-up with exclusive merchandise and Japanese street food.",
    date: "2025-08-20",
    instagram: "https://instagram.com/humanmade",
    tags: ["POP-UP"]
  },
  {
    eventID: 21,
    image: "https://hypebeast.com/image/2023/06/chrome-hearts-matty-boy-collection-1.jpg",
    title: "Chrome Hearts x Matty Boy Archives",
    description: "Exclusive graphic collection featuring Matty Boy's iconic artwork on premium Chrome Hearts pieces.",
    date: "2025-08-22",
    instagram: "https://instagram.com/chromeheartsofficial",
    tags: ["DROP"]
  },
  {
    eventID: 22,
    image: "https://hypebeast.com/image/2023/05/brain-dead-optical-collection-1.jpg",
    title: "Brain Dead Optical Pop-up",
    description: "Surreal pop-up experience featuring Brain Dead's latest optical collection with virtual reality elements.",
    date: "2025-08-22",
    instagram: "https://instagram.com/wearebraindead",
    tags: ["POP-UP"]
  },
  {
    eventID: 23,
    image: "https://hypebeast.com/image/2023/08/wtaps-military-collection-1.jpg",
    title: "WTAPS Military Surplus Collection",
    description: "Military-inspired collection featuring authentic surplus materials and tactical designs.",
    date: "2025-08-25",
    instagram: "https://instagram.com/wtaps_dailypic",
    tags: ["DROP"]
  },
  {
    eventID: 24,
    image: "https://hypebeast.com/image/2023/04/neighborhood-converse-chuck-70-1.jpg",
    title: "NEIGHBORHOOD x Converse Workshop",
    description: "DIY workshop pop-up where visitors can customize NEIGHBORHOOD x Converse collaborations.",
    date: "2025-08-25",
    instagram: "https://instagram.com/neighborhood_official",
    tags: ["POP-UP"]
  },
  {
    eventID: 25,
    image: "https://hypebeast.com/image/2023/06/mastermind-japan-collection-1.jpg",
    title: "Mastermind Japan 20th Anniversary",
    description: "Special anniversary collection celebrating 20 years of Mastermind's signature skull aesthetic.",
    date: "2025-08-28",
    instagram: "https://instagram.com/mastermind_japan",
    tags: ["DROP"]
  },
  {
    eventID: 26,
    image: "https://hypebeast.com/image/2023/06/rhude-racing-collection-1.jpg",
    title: "Rhude Racing Pop-up Garage",
    description: "Automotive-themed pop-up showcasing Rhude's racing-inspired collection with vintage car displays.",
    date: "2025-08-28",
    instagram: "https://instagram.com/rhude",
    tags: ["POP-UP"]
  },
  {
    eventID: 27,
    image: "https://hypebeast.com/image/2023/07/bape-shark-hoodie-collection-1.jpg",
    title: "BAPE Shark Hoodie Anniversary",
    description: "20th anniversary shark hoodie collection featuring new colorways and premium materials.",
    date: "2025-09-01",
    instagram: "https://instagram.com/bape_us",
    tags: ["DROP"]
  },
  {
    eventID: 28,
    image: "https://hypebeast.com/image/2023/07/union-jordan-4-desert-moss-release-1.jpg",
    title: "Union x Jordan Pop-up Museum",
    description: "Museum-style pop-up celebrating Union LA's Jordan collaborations with historical sneaker exhibits.",
    date: "2025-09-01",
    instagram: "https://instagram.com/unionlosangeles",
    tags: ["POP-UP"]
  },
  {
    eventID: 29,
    image: "https://hypebeast.com/image/2023/08/carhartt-wip-collection-1.jpg",
    title: "Carhartt WIP Heritage Workshop",
    description: "Interactive workshop teaching workwear construction techniques with vintage Carhartt pieces.",
    date: "2025-09-05",
    instagram: "https://instagram.com/carhartt_wip",
    tags: ["DROP"]
  },
  {
    eventID: 30,
    image: "https://hypebeast.com/image/2023/05/chrome-hearts-jewelry-collection-1.jpg",
    title: "Chrome Hearts Jewelry Exhibition",
    description: "Luxury pop-up exhibition featuring Chrome Hearts' finest jewelry pieces and leather goods.",
    date: "2025-09-05",
    instagram: "https://instagram.com/chromeheartsofficial",
    tags: ["POP-UP"]
  },
  {
    eventID: 31,
    image: "https://hypebeast.com/image/2023/09/kapital-sashiko-denim-1.jpg",
    title: "Kapital Sashiko Masterclass",
    description: "Traditional Japanese sashiko repair workshop featuring Kapital's signature boro textiles.",
    date: "2025-09-08",
    instagram: "https://instagram.com/kapital_official",
    tags: ["DROP"]
  },
  {
    eventID: 32,
    image: "https://hypebeast.com/image/2023/08/wtaps-military-collection-1.jpg",
    title: "WTAPS Military Surplus Pop-up",
    description: "Military-inspired pop-up featuring WTAPS latest collection in authentic army surplus store setting.",
    date: "2025-09-08",
    instagram: "https://instagram.com/wtaps_dailypic",
    tags: ["POP-UP"]
  },
  {
    eventID: 33,
    image: "https://hypebeast.com/image/2023/07/stussy-nike-air-force-1-low-fossil-stone-release-info-1.jpg",
    title: "Stussy x Nike AF1 'Fossil Stone'",
    description: "Premium leather Air Force 1 collaboration with hand-painted Stussy branding details.",
    date: "2025-09-12",
    instagram: "https://instagram.com/stussy",
    tags: ["DROP"]
  },
  {
    eventID: 34,
    image: "https://hypebeast.com/image/2023/06/mastermind-japan-collection-1.jpg",
    title: "Mastermind Japan Dark Pop-up",
    description: "Gothic pop-up experience showcasing Mastermind Japan's signature skull motifs in blackout space.",
    date: "2025-09-12",
    instagram: "https://instagram.com/mastermind_japan",
    tags: ["POP-UP"]
  },
  {
    eventID: 35,
    image: "https://hypebeast.com/image/2023/04/kaws-uniqlo-ut-companion-collection-1.jpg",
    title: "KAWS x Uniqlo Holiday Collection",
    description: "Limited holiday-themed KAWS Companion graphics on premium Uniqlo UT blanks.",
    date: "2025-09-15",
    instagram: "https://instagram.com/kaws",
    tags: ["DROP"]
  },
  {
    eventID: 36,
    image: "https://hypebeast.com/image/2023/07/bape-shark-hoodie-collection-1.jpg",
    title: "BAPE Shark Pop-up Aquarium",
    description: "Aquatic-themed pop-up featuring BAPE's shark hoodie collection with live shark tank installation.",
    date: "2025-09-15",
    instagram: "https://instagram.com/bape_us",
    tags: ["POP-UP"]
  },
  {
    eventID: 37,
    image: "https://hypebeast.com/image/2023/05/neighborhood-adidas-gazelle-collaboration-1.jpg",
    title: "NEIGHBORHOOD x Adidas Final Drop",
    description: "Final release in the NEIGHBORHOOD x Adidas collaboration series featuring exclusive Tokyo Pack colorways.",
    date: "2025-09-20",
    instagram: "https://instagram.com/neighborhood_official",
    tags: ["DROP"]
  },
  {
    eventID: 38,
    image: "https://hypebeast.com/image/2023/08/carhartt-wip-collection-1.jpg",
    title: "Carhartt WIP Workshop Pop-up",
    description: "Functional workshop pop-up where visitors can learn workwear craftsmanship and customize Carhartt WIP pieces.",
    date: "2025-09-20",
    instagram: "https://instagram.com/carhartt_wip",
    tags: ["POP-UP"]
  },
  {
    eventID: 39,
    image: "https://hypebeast.com/image/2023/08/human-made-nigo-heart-collection-1.jpg",
    title: "HUMAN MADE Heart Pop-up Tokyo",
    description: "Nigo's HUMAN MADE opened exclusive Tokyo pop-up featuring heart motif collection and cafe.",
    date: "2025-09-25",
    instagram: "https://instagram.com/humanmade",
    tags: ["DROP"]
  },
  {
    eventID: 40,
    image: "https://hypebeast.com/image/2023/09/kapital-sashiko-denim-1.jpg",
    title: "Kapital Sashiko Experience",
    description: "Traditional Japanese pop-up teaching sashiko repair techniques on Kapital denim and textiles.",
    date: "2025-09-25",
    instagram: "https://instagram.com/kapital_official",
    tags: ["POP-UP"]
  }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = eventsData;
}

// Make available globally for browser use
if (typeof window !== 'undefined') {
  window.eventsData = eventsData;
}