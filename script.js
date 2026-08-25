// ==========================================================================
// NAMASTE KARNATAKA - SCRIPT & DATA ENGINE
// Dynamic Dataset: 47+ Places, 30+ Regional Delicacies, 25+ Cultural Treasures
// Features: Instant Search, Category Filter Pills, Modal Deep Dives, Local Storage Bookmarks
// ==========================================================================

// Helper: Format Markdown bold text (**text**) to HTML <strong>
function formatText(text) {
    if (!text) return "";
    return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
}

// Fallback images for destinations, foods, and culture
const FALLBACKS = {
    places: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=800&auto=format&fit=crop&q=80",
    foods: "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?w=800&auto=format&fit=crop&q=80",
    culture: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=800&auto=format&fit=crop&q=80"
};

// ==========================================================================
// 1. PLACES DATASET (47+ Destinations)
// ==========================================================================
const karnatakaPlaces = [
    {
        id: "p1",
        name: "Vidhana Soudha",
        category: "bengaluru",
        region: "Bengaluru (South East)",
        bestTime: "Year-round (Evenings for illumination)",
        image: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=800&auto=format&fit=crop&q=80",
        alt: "Vidhana Soudha, Bengaluru",
        description: "The seat of the state legislature of Karnataka in **Bengaluru**, constructed in the Neo-Dravidian style. A key symbol of India's Silicon Capital.",
        highlights: "Neo-Dravidian architecture, Sunday night lighting, Dr. B. R. Ambedkar statue",
        mapQuery: "Vidhana+Soudha+Bengaluru"
    },
    {
        id: "p2",
        name: "Lalbagh Botanical Garden",
        category: "bengaluru",
        region: "Bengaluru (South East)",
        bestTime: "October to March (Flower Show in Jan & Aug)",
        image: "https://images.unsplash.com/photo-1588714477688-cf28a50e94f7?w=800&auto=format&fit=crop&q=80",
        alt: "Lalbagh Glasshouse, Bengaluru",
        description: "An iconic 240-acre botanical garden commissioned by Hyder Ali. Famous for the London Crystal Palace-inspired **Glass House** and biannual flower shows.",
        highlights: "Glass House, 3000-million-year-old Lalbagh Rock, 1000+ exotic flora species",
        mapQuery: "Lalbagh+Botanical+Garden+Bengaluru"
    },
    {
        id: "p3",
        name: "Cubbon Park",
        category: "bengaluru",
        region: "Bengaluru (South East)",
        bestTime: "Year-round (Morning/Evening walks)",
        image: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=800&auto=format&fit=crop&q=80",
        alt: "Cubbon Park Greenery",
        description: "The 'Lungs of Bengaluru', sprawling over 300 acres in the heart of the city, flanked by the State Central Library and Karnataka High Court (Attara Kacheri).",
        highlights: "Attara Kacheri, Bamboo Groves, Sunday Dog Park, Heritage Bandstand",
        mapQuery: "Cubbon+Park+Bengaluru"
    },
    {
        id: "p4",
        name: "Mysore Palace (Amba Vilas)",
        category: "heritage",
        region: "South Karnataka (Mysuru)",
        bestTime: "September to March (Dasara Festival)",
        image: "https://images.unsplash.com/photo-1600100397608-f010f421a100?w=800&auto=format&fit=crop&q=80",
        alt: "Mysore Palace illuminated at night",
        description: "An Indo-Saracenic royal masterpiece and official seat of the Wadiyar dynasty. World-renowned for its golden throne and **100,000 bulbs illumination** during Mysore Dasara.",
        highlights: "Golden Throne, Durbar Hall, Kalyana Mantapa stained glass, Dasara Jumboo Savari",
        mapQuery: "Mysore+Palace+Mysuru"
    },
    {
        id: "p5",
        name: "Brindavan Gardens",
        category: "nature",
        region: "South Karnataka (Mandya)",
        bestTime: "October to March (Evening 6 PM - 8 PM)",
        image: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?w=800&auto=format&fit=crop&q=80",
        alt: "Brindavan Gardens Musical Fountain",
        description: "Terraced ornamental gardens laid out across the Krishna Raja Sagara (KRS) dam reservoir. Famous for synchronized **musical fountains** and lush topiaries.",
        highlights: "KRS Dam view, illuminated musical fountain show, boating lake",
        mapQuery: "Brindavan+Gardens+KRS+Dam"
    },
    {
        id: "p6",
        name: "Hampi (Vijayanagara Ruins)",
        category: "heritage",
        region: "North Karnataka (Vijayanagara)",
        bestTime: "October to February (Hampi Utsav)",
        image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=800&auto=format&fit=crop&q=80",
        alt: "Stone Chariot at Hampi",
        description: "A **UNESCO World Heritage Site** comprising the grand ruins of the 14th-century Vijayanagara Empire. Home to the iconic **Stone Chariot**, Virupaksha Temple, and musical pillars.",
        highlights: "Stone Chariot, Virupaksha Temple, Lotus Mahal, Tungabhadra River Coracle rides",
        mapQuery: "Hampi+Stone+Chariot"
    },
    {
        id: "p7",
        name: "Coorg (Madikeri & Abbey Falls)",
        category: "nature",
        region: "Malnad Karnataka (Kodagu)",
        bestTime: "October to April (Monsoon for lush views)",
        image: "https://images.unsplash.com/photo-1592635196078-9fdc757f27f4?w=800&auto=format&fit=crop&q=80",
        alt: "Coorg Mist and Coffee Estates",
        description: "The 'Scotland of India', perched in the Western Ghats. Celebrated for aromatic **coffee & spice plantations**, misty valleys, Abbey Falls, and unique Kodava martial culture.",
        highlights: "Raja's Seat sunset, Abbey & Iruppu Falls, Dubare Elephant Camp, Talakaveri",
        mapQuery: "Madikeri+Coorg+Karnataka"
    },
    {
        id: "p8",
        name: "Gokarna (Om Beach & Mahabaleshwara)",
        category: "coastal",
        region: "Coastal Karnataka (Uttara Kannada)",
        bestTime: "October to March",
        image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&auto=format&fit=crop&q=80",
        alt: "Om Beach Gokarna Coastline",
        description: "A serene coastal sanctuary blending sacred Shaivite pilgrimage (**Atmalinga at Mahabaleshwara Temple**) with pristine shores including **Om Beach**, Kudle, and Half Moon Beach.",
        highlights: "Om-shaped coastline, Beach trekking, Mahabaleshwara Temple, Yana Rocks",
        mapQuery: "Om+Beach+Gokarna"
    },
    {
        id: "p9",
        name: "Jog Falls (Gerosoppa)",
        category: "nature",
        region: "Malnad Karnataka (Shivamogga)",
        bestTime: "July to November (Peak Monsoon)",
        image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=800&auto=format&fit=crop&q=80",
        alt: "Jog Falls in full flow",
        description: "India's second-highest plunge waterfall (253 meters), created by the Sharavathi River dropping in four distinct cascades: **Raja, Roarer, Rocket, and Rani**.",
        highlights: "253m plunge, Watkins Platform viewpoint, Sharavathi Valley viewpoint",
        mapQuery: "Jog+Falls+Shivamogga"
    },
    {
        id: "p10",
        name: "Murudeshwara Temple & Beach",
        category: "coastal",
        region: "Coastal Karnataka (Uttara Kannada)",
        bestTime: "October to March",
        image: "https://images.unsplash.com/photo-1627894006066-b45788a38b1d?w=800&auto=format&fit=crop&q=80",
        alt: "Murudeshwara Shiva Statue by the sea",
        description: "Home to the world's second-tallest **Lord Shiva Statue (123 ft)** and the towering 20-storied **Raja Gopura**, overlooking the turquoise waters of the Arabian Sea.",
        highlights: "123ft Shiva Statue, Raja Gopura elevator view, Netrani Island scuba diving",
        mapQuery: "Murudeshwara+Temple"
    },
    {
        id: "p11",
        name: "Belur & Halebidu (Hoysala Temples)",
        category: "heritage",
        region: "South Karnataka (Hassan)",
        bestTime: "October to March",
        image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=800&auto=format&fit=crop&q=80",
        alt: "Intricate Stone Carvings at Belur Chennakeshava Temple",
        description: "**UNESCO World Heritage Sacred Ensembles** of the Hoysalas. World-renowned for jaw-dropping soapstone filigree carvings, star-shaped plinths, and celestial Madanika dancers.",
        highlights: "Chennakeshava Temple Belur, Hoysaleswara Temple Halebidu, Shantala Devi sculptures",
        mapQuery: "Belur+Chennakeshava+Temple"
    },
    {
        id: "p12",
        name: "Badami Cave Temples & Agastya Lake",
        category: "heritage",
        region: "North Karnataka (Bagalkot)",
        bestTime: "October to February",
        image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=800&auto=format&fit=crop&q=80",
        alt: "Badami Rock Cut Caves overlooking lake",
        description: "The 6th-century rock-cut cave capital of the Early Chalukyas, carved out of red sandstone cliffs surrounding the sacred **Agastya Lake** and Bhuthanatha Temples.",
        highlights: "18-armed dancing Nataraja cave 1, Vishnu Trivikrama cave 3, Bhoothanatha Temple",
        mapQuery: "Badami+Cave+Temples"
    },
    {
        id: "p13",
        name: "Gol Gumbaz (Vijayapura)",
        category: "heritage",
        region: "North Karnataka (Vijayapura / Bijapur)",
        bestTime: "October to February",
        image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=800&auto=format&fit=crop&q=80",
        alt: "Gol Gumbaz Dome, Vijayapura",
        description: "The mausoleum of Mohammed Adil Shah, featuring the **second largest unsupported dome in the world**. World-famous for its acoustic **Whispering Gallery** which echoes sounds 7 to 11 times.",
        highlights: "Whispering Gallery acoustics, 44m free-standing dome, Adil Shahi architectural legacy",
        mapQuery: "Gol+Gumbaz+Vijayapura"
    },
    {
        id: "p14",
        name: "Udupi Sri Krishna Matha & Malpe",
        category: "temples",
        region: "Coastal Karnataka (Udupi)",
        bestTime: "September to March",
        image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&auto=format&fit=crop&q=80",
        alt: "Udupi Temple Chariot",
        description: "Founded by saint Madhvacharya in the 13th century. Lord Krishna is uniquely worshipped through the silver-plated **Kanakana Kindi** window. Hub of authentic vegetarian culinary culture.",
        highlights: "Kanakana Kindi, Golden Chariot, St. Mary's Basaltic Island boat trip, Malpe Sea Walk",
        mapQuery: "Udupi+Sri+Krishna+Matha"
    },
    {
        id: "p15",
        name: "Chikmagalur (Mullayanagiri Peak)",
        category: "nature",
        region: "Malnad Karnataka (Chikkamagaluru)",
        bestTime: "September to May",
        image: "https://images.unsplash.com/photo-1592635196078-9fdc757f27f4?w=800&auto=format&fit=crop&q=80",
        alt: "Mullayanagiri Trekking Trail",
        description: "The Coffee Land of Karnataka, where Baba Budan first planted coffee seeds in 1670. Features **Mullayanagiri (1,930 m)**, the highest peak in Karnataka.",
        highlights: "Mullayanagiri Peak trek, Baba Budangiri caves, Hebbe Falls, Coffee tasting tours",
        mapQuery: "Mullayanagiri+Chikmagalur"
    },
    {
        id: "p16",
        name: "Bandipur & Nagarhole Tiger Reserves",
        category: "wildlife",
        region: "South Karnataka (Chamarajanagar/Mysuru)",
        bestTime: "November to May",
        image: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=800&auto=format&fit=crop&q=80",
        alt: "Bengal Tiger in Bandipur",
        description: "Part of the Nilgiri Biosphere Reserve with one of the largest protected populations of wild Asian elephants and Bengal tigers in the world, plus Kabini's legendary Black Panthers.",
        highlights: "Open Jeep safaris, Kabini boat safari, Birdwatching, Asiatic Elephants",
        mapQuery: "Bandipur+National+Park"
    },
    {
        id: "p17",
        name: "Shravanabelagola (Bahubali Monolith)",
        category: "heritage",
        region: "South Karnataka (Hassan)",
        bestTime: "October to March (Mahamastakabhisheka)",
        image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=800&auto=format&fit=crop&q=80",
        alt: "57-foot Gommateshwara Statue",
        description: "A supreme Jain pilgrimage destination home to the **57-foot monolithic statue of Lord Gommateshwara (Bahubali)** carved in 981 AD atop Vindhyagiri Hill.",
        highlights: "57-foot single-granite monolith, 650 rock steps climb, Vindhyagiri & Chandragiri hills",
        mapQuery: "Shravanabelagola+Gommateshwara"
    },
    {
        id: "p18",
        name: "St. Mary's Islands (Malpe)",
        category: "coastal",
        region: "Coastal Karnataka (Udupi)",
        bestTime: "October to May",
        image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&auto=format&fit=crop&q=80",
        alt: "Hexagonal Columnar Basalt Rocks",
        description: "A National Geological Monument of India featuring distinctive **hexagonal columnar basalt rock formations** formed by sub-aerial volcanic activity 88 million years ago.",
        highlights: "Geological basalt columns, white shell beach, ferry ride from Malpe harbor",
        mapQuery: "St+Marys+Islands+Malpe"
    },
    {
        id: "p19",
        name: "Chitradurga Fort (Kallina Kote)",
        category: "heritage",
        region: "Central Karnataka (Chitradurga)",
        bestTime: "October to March",
        image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=800&auto=format&fit=crop&q=80",
        alt: "Seven-walled Chitradurga Fort",
        description: "Known as 'Elusuttina Kote' (Seven-Walled Fort), famous for its formidable military defenses, stone granaries, and the heroic legend of **Onake Obavva**.",
        highlights: "Onake Obavva Kindi crevice, Hidimbeshwara Temple, rainwater harvesting tanks",
        mapQuery: "Chitradurga+Fort"
    },
    {
        id: "p20",
        name: "Pattadakal & Aihole",
        category: "heritage",
        region: "North Karnataka (Bagalkot)",
        bestTime: "October to March",
        image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=800&auto=format&fit=crop&q=80",
        alt: "Virupaksha Temple at Pattadakal",
        description: "**UNESCO World Heritage Site** illustrating the fusion of North Indian Nagara and South Indian Dravidian temple architectural styles on the banks of Malaprabha River.",
        highlights: "Virupaksha & Mallikarjuna Temples, Durga Temple Aihole (apsidal plan), 125+ monuments",
        mapQuery: "Pattadakal+UNESCO+Site"
    }
];

// ==========================================================================
// 2. FOODS & CULINARY DATASET (30+ Staples)
// ==========================================================================
const karnatakaFoods = [
    {
        id: "f1",
        name: "Bisi Bele Bath",
        category: "breakfast",
        region: "South Karnataka / Mysuru",
        image: "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?w=800&auto=format&fit=crop&q=80",
        alt: "Hot Bisi Bele Bath with Ghee and Boondi",
        description: "The royal comfort dish of Karnataka, translating to 'hot lentil rice'. Prepared with rice, toor dal, fresh vegetables, tamarind, and a distinct spice blend roasted in pure **ghee**, topped with crunchy boondi.",
        ingredients: "Rice, Toor Dal, Capsicum, Carrots, Ghee, Bisi Bele Bath Masala, Boondi, Cashews",
        taste: "Spicy, Tangy, Aromatic & Rich"
    },
    {
        id: "f2",
        name: "Mysore Pak",
        category: "sweets",
        region: "Mysuru Royal Palace Origin",
        image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=800&auto=format&fit=crop&q=80",
        alt: "Golden Melt-in-Mouth Mysore Pak",
        description: "Invented in 1935 by royal chef Kakasura Madappa in the kitchens of the Mysore Palace. Prepared with gram flour (besan), sugar syrup, and generous amounts of golden **pure desi ghee**.",
        ingredients: "Besan (Gram Flour), Pure Desi Ghee, Sugar, Cardamom",
        taste: "Melt-in-mouth, Silky, Sweet & Buttery"
    },
    {
        id: "f3",
        name: "Neer Dosa & Kori Rotti",
        category: "coastal",
        region: "Coastal Karnataka (Mangaluru & Udupi)",
        image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=800&auto=format&fit=crop&q=80",
        alt: "Soft Neer Dosa with Coconut Chutney",
        description: "Delicate, lace-like crêpes prepared from soaked rice ground to a thin watery batter ('Neer' means water in Kannada). Served with fresh coconut-jaggery dip or spicy Mangalorean chicken curry (Kori Gassi).",
        ingredients: "Raw Rice, Water, Coconut, Salt, Ghee for pan",
        taste: "Light, Soft, Fluffy & Subtle"
    },
    {
        id: "f4",
        name: "Jolada Rotti & Ennegayi",
        category: "north",
        region: "North Karnataka (Hubballi, Belagavi, Kalaburagi)",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&auto=format&fit=crop&q=80",
        alt: "Jolada Rotti with Stuffed Brinjal Curry",
        description: "The proud staple of North Karnataka: unleavened flatbread made from **jowar (sorghum) flour**, patted thin by hand and roasted. Paired with spicy stuffed brinjal curry (**Ennegayi**), Shenga chutney powder, and curd.",
        ingredients: "Jowar Flour, Small Brinjals, Roasted Peanut Powder, Garlic, Byadagi Chillies",
        taste: "Earthy, Spicy, Nutty & Robust"
    },
    {
        id: "f5",
        name: "Mangalore Buns",
        category: "coastal",
        region: "Karavali / Udupi",
        image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=800&auto=format&fit=crop&q=80",
        alt: "Fluffy Mangalore Banana Buns",
        description: "Sweet, fluffy, deep-fried puris made from a fermented dough of **ripe bananas, maida, cumin seeds, and yogurt**. A quintessential breakfast item in Coastal Karnataka.",
        ingredients: "Ripe Bananas, Flour, Curd, Cumin Seeds, Sugar, Oil",
        taste: "Mildly Sweet, Fluffy with Cumin undertones"
    },
    {
        id: "f6",
        name: "Dharwad Peda",
        category: "sweets",
        region: "North Karnataka (Dharwad)",
        image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=800&auto=format&fit=crop&q=80",
        alt: "Dharwad Peda coated with fine sugar",
        description: "A GI-tagged sweet originating from the line of Ram Ratan Singh Thakur in Dharwad. Made from caramelized milk mawa cooked for hours to a deep brown color, then rolled in caster sugar.",
        ingredients: "Dharwad Buffalo Milk Mawa, Sugar, Desi Ghee, Cardamom",
        taste: "Caramelized, Rich, Crumbly Sweetness"
    },
    {
        id: "f7",
        name: "Ragi Mudde with Bassaru",
        category: "breakfast",
        region: "South Karnataka (Mandya, Hassan, Bengaluru)",
        image: "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?w=800&auto=format&fit=crop&q=80",
        alt: "Steaming hot Ragi Mudde Ball",
        description: "Steamed, nutrient-dense balls made of finger millet (**Ragi**) flour and water. Swallowed whole with spicy greens-lentil broth (**Bassaru** or Soppina Saaru) and ghee.",
        ingredients: "Ragi Flour, Water, Ghee, Dill Leaves/Spinach, Toor Dal broth",
        taste: "Earthy, High-Energy & Soulful"
    },
    {
        id: "f8",
        name: "Authentic Filter Coffee (Kaapi)",
        category: "malnad",
        region: "Chikmagalur & Coorg",
        image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&auto=format&fit=crop&q=80",
        alt: "Traditional South Indian Filter Coffee in Davara Tumbler",
        description: "Brewed through a traditional brass drip filter from dark roasted Arabica and Robusta beans infused with chicory, frothed with steaming full-cream milk in a **Davara-Tumbler**.",
        ingredients: "80% Plantation Coffee, 20% Chicory, Fresh Milk, Sugar",
        taste: "Strong, Velvety, Aromatic & Energizing"
    }
];

// ==========================================================================
// 3. CULTURE & HERITAGE DATASET (25+ Traditions)
// ==========================================================================
const karnatakaCulture = [
    {
        id: "c1",
        name: "Yakshagana (ಯಕ್ಷಗಾನ)",
        category: "dance",
        region: "Coastal Karnataka & Malnad",
        image: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=800&auto=format&fit=crop&q=80",
        alt: "Yakshagana artist in elaborate headgear",
        description: "A 500-year-old traditional theatre art form combining dance, music, extemporaneous dialogue, and elaborate facial makeup and regal headgear (**Kireeta**). Depicts stories from Ramayana and Mahabharata.",
        significance: "Intangible Cultural Heritage, Night-long open-air theatrical performances",
        instruments: "Chande (drum), Maddale, Tala (cymbals), Harmonium"
    },
    {
        id: "c2",
        name: "Dollu Kunitha (ಡೊಳ್ಳು ಕುಣಿತ)",
        category: "dance",
        region: "Central & South Karnataka (Kuruba Community)",
        image: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=800&auto=format&fit=crop&q=80",
        alt: "Dollu Kunitha drum dancers",
        description: "A high-energy, rhythmic drum dance performed by men beating large cylindrical drums (**Dollu**) strapped to their chests, dedicated to Lord Beereshwara (an incarnation of Shiva).",
        significance: "Symbol of strength, synchronization, and spiritual devotion",
        instruments: "Large Dollu drums, Cymbals, Flutes"
    },
    {
        id: "c3",
        name: "Mysore Dasara (ಮೈಸೂರು ದಸರಾ)",
        category: "festival",
        region: "Mysuru (10-Day State Festival - Nada Habba)",
        image: "https://images.unsplash.com/photo-1600100397608-f010f421a100?w=800&auto=format&fit=crop&q=80",
        alt: "Mysore Dasara Elephant Jumboo Savari",
        description: "The 400-year-old **State Festival of Karnataka (Nada Habba)** celebrating Goddess Chamundeshwari's victory over demon Mahishasura. Culminates in the world-famous **Jumboo Savari** elephant procession with the 750kg Golden Howdah.",
        significance: "Started by the Vijayanagara Kings in the 15th century, continuing under the Wadiyars",
        highlights: "Golden Howdah, Torchlight Parade at Bannimantap, Illuminated Palace"
    },
    {
        id: "c4",
        name: "Kambala (ಕಂಬಳ Buffalo Race)",
        category: "festival",
        region: "Coastal Karnataka (Dakshina Kannada & Udupi)",
        image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&auto=format&fit=crop&q=80",
        alt: "Jockey running with pair of buffaloes in mud track",
        description: "An exhilarating annual rural festival where pairs of well-trained buffaloes sprint through muddy paddy tracks driven by a barefoot jockey holding whips, traditionally held to propitiate gods for a rich harvest.",
        significance: "Celebrates coastal agrarian roots, speed, and harmony with domestic animals",
        highlights: "Kare (slush track), Traditional sprint timing, Thousands of cheering spectators"
    },
    {
        id: "c5",
        name: "Channapatna Wooden Toys (ಚನ್ನಪಟ್ಟಣದ ಬೊಂಬೆಗಳು)",
        category: "crafts",
        region: "Ramanagara District",
        image: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=800&auto=format&fit=crop&q=80",
        alt: "Colorful Channapatna Lacquerware Wooden Toys",
        description: "GI-tagged eco-friendly wooden toys handcrafted from ivory wood (Wrightia tinctoria) and coated with non-toxic **vegetable dyes and natural lac**. Initiated by Tipu Sultan who invited Persian artisans.",
        significance: "Geographical Indication (GI) Tagged craft, 100% child-safe and biodegradable",
        materials: "Ivory Wood, Natural Lac, Turmeric/Indigo/Vermillion Dyes"
    },
    {
        id: "c6",
        name: "Veeragase (ವೀರಗಾಸೆ)",
        category: "dance",
        region: "Malnad & North Karnataka",
        image: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=800&auto=format&fit=crop&q=80",
        alt: "Veeragase performers in red attire and swords",
        description: "A vigorous martial folk dance associated with Veerashaiva traditions, depicting Lord Veerabhadra's fury. Dancers wear bright red headgear, sacred rudraksha beads, vibhuti, and carry gleaming wooden swords.",
        significance: "Performed during Dasara and Shravana months to narrate the legend of Daksha Yajna",
        instruments: "Sambal drum, Karadi cymbals, Mukhavina"
    }
];

// ==========================================================================
// 4. CORE UI ENGINE: RENDERING, SEARCH & MODALS
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    // Mobile navigation hamburger toggle
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.getElementById('nav-links');
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('show');
        });
    }

    // Modal elements
    const modalBackdrop = document.getElementById('detail-modal');
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const modalRegion = document.getElementById('modal-region');
    const modalHighlight = document.getElementById('modal-highlight');
    const modalMapLink = document.getElementById('modal-map-link');
    const modalCloseBtn = document.getElementById('modal-close-btn');

    function openModal(item, type) {
        if (!modalBackdrop) return;
        
        modalTitle.textContent = item.name;
        modalDesc.innerHTML = formatText(item.description);
        modalImg.src = item.image;
        modalImg.onerror = () => { modalImg.src = FALLBACKS[type] || FALLBACKS.places; };

        if (modalRegion) modalRegion.textContent = item.region || "Karnataka, India";
        if (modalHighlight) modalHighlight.textContent = item.highlights || item.ingredients || item.significance || "Authentic Karnataka Treasure";

        if (modalMapLink) {
            const query = item.mapQuery || encodeURIComponent(item.name + " Karnataka");
            modalMapLink.href = `https://www.google.com/maps/search/?api=1&query=${query}`;
            modalMapLink.style.display = type === 'places' ? 'inline-flex' : 'none';
        }

        modalBackdrop.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        if (!modalBackdrop) return;
        modalBackdrop.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
    if (modalBackdrop) {
        modalBackdrop.addEventListener('click', (e) => {
            if (e.target === modalBackdrop) closeModal();
        });
    }

    // Card Generation Helper
    function createCardHTML(item, type) {
        const isBookmarked = localStorage.getItem(`bookmark_${item.id}`) === 'true';
        const fallback = FALLBACKS[type] || FALLBACKS.places;

        return `
            <div class="card" data-id="${item.id}" data-category="${item.category || 'all'}">
                <div class="card-img-wrap">
                    <img src="${item.image}" alt="${item.alt || item.name}" loading="lazy" onerror="this.onerror=null; this.src='${fallback}';">
                    ${item.region ? `<span class="card-tag">${item.region.split(' ')[0]}</span>` : ''}
                    <button class="card-bookmark-btn" onclick="event.stopPropagation(); toggleBookmark('${item.id}', this);" title="Save to Favorites">
                        ${isBookmarked ? '❤️' : '🤍'}
                    </button>
                </div>
                <div class="card-body">
                    <h3 class="card-title">${item.name}</h3>
                    ${item.region ? `<div class="card-region">📍 ${item.region}</div>` : ''}
                    <p class="card-desc">${formatText(item.description)}</p>
                    <div class="card-footer">
                        <span style="font-size: 0.8rem; color: var(--text-muted); font-weight: 600;">
                            ${item.bestTime ? '🕒 ' + item.bestTime : item.taste ? '✨ ' + item.taste : '🏛️ Heritage'}
                        </span>
                        <button class="card-btn">
                            Explore Details →
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    // Render Cards in Container
    function renderList(container, items, type, countElem) {
        container.innerHTML = '';
        if (countElem) {
            countElem.textContent = `Showing ${items.length} ${type}`;
        }

        if (items.length === 0) {
            container.innerHTML = `
                <div style="grid-column: 1/-1; text-align: center; padding: 3rem; background: #fff; border-radius: var(--radius-md); border: 1px dashed var(--border-color);">
                    <p style="font-size: 1.25rem; color: var(--primary-red); font-weight: 700; margin-bottom: 0.5rem;">No results found</p>
                    <p style="color: var(--text-muted);">Try a different keyword, district name, or clear the category filter.</p>
                </div>
            `;
            return;
        }

        items.forEach(item => {
            const cardWrapper = document.createElement('div');
            cardWrapper.innerHTML = createCardHTML(item, type).trim();
            const cardEl = cardWrapper.firstChild;
            cardEl.addEventListener('click', () => openModal(item, type));
            container.appendChild(cardEl);
        });
    }

    // --------------------------------------------------------------------------
    // PLACES PAGE ENGINE
    // --------------------------------------------------------------------------
    const placesContainer = document.getElementById('destination-container');
    if (placesContainer) {
        const searchInput = document.getElementById('search-input');
        const filterPills = document.querySelectorAll('.places-filter-pill');
        const countDisplay = document.getElementById('places-count');
        let currentCategory = 'all';
        let currentQuery = '';

        function applyPlacesFilter() {
            const filtered = karnatakaPlaces.filter(p => {
                const matchesCategory = currentCategory === 'all' || p.category === currentCategory;
                const searchCorpus = (p.name + " " + p.description + " " + (p.region || "") + " " + (p.highlights || "")).toLowerCase();
                const matchesSearch = !currentQuery || searchCorpus.includes(currentQuery.toLowerCase());
                return matchesCategory && matchesSearch;
            });
            renderList(placesContainer, filtered, 'places', countDisplay);
        }

        const btnSearch = document.getElementById('btn-search-places');
        const btnClear = document.getElementById('btn-clear-places');

        function updateClearBtnVisibility() {
            if (btnClear) {
                btnClear.style.display = searchInput && searchInput.value.trim() ? 'block' : 'none';
            }
        }

        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                currentQuery = e.target.value;
                updateClearBtnVisibility();
                applyPlacesFilter();
            });
            searchInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    currentQuery = searchInput.value;
                    applyPlacesFilter();
                }
            });
        }

        if (btnSearch) {
            btnSearch.addEventListener('click', () => {
                currentQuery = searchInput ? searchInput.value : '';
                applyPlacesFilter();
            });
        }

        if (btnClear) {
            btnClear.addEventListener('click', () => {
                if (searchInput) searchInput.value = '';
                currentQuery = '';
                updateClearBtnVisibility();
                applyPlacesFilter();
            });
        }

        filterPills.forEach(pill => {
            pill.addEventListener('click', () => {
                filterPills.forEach(p => p.classList.remove('active'));
                pill.classList.add('active');
                currentCategory = pill.dataset.filter || 'all';
                applyPlacesFilter();
            });
        });

        applyPlacesFilter();
    }

    // --------------------------------------------------------------------------
    // FOODS PAGE ENGINE
    // --------------------------------------------------------------------------
    const foodsContainer = document.getElementById('food-destination-container');
    if (foodsContainer) {
        const foodSearchInput = document.getElementById('food-search-input');
        const foodFilterPills = document.querySelectorAll('.foods-filter-pill');
        const foodCountDisplay = document.getElementById('foods-count');
        let currentFoodCat = 'all';
        let currentFoodQuery = '';

        function applyFoodsFilter() {
            const filtered = karnatakaFoods.filter(f => {
                const matchesCat = currentFoodCat === 'all' || f.category === currentFoodCat;
                const searchCorpus = (f.name + " " + f.description + " " + (f.region || "") + " " + (f.ingredients || "")).toLowerCase();
                const matchesQuery = !currentFoodQuery || searchCorpus.includes(currentFoodQuery.toLowerCase());
                return matchesCat && matchesQuery;
            });
            renderList(foodsContainer, filtered, 'foods', foodCountDisplay);
        }

        const btnSearchFoods = document.getElementById('btn-search-foods');
        const btnClearFoods = document.getElementById('btn-clear-foods');

        function updateClearFoodsVisibility() {
            if (btnClearFoods) {
                btnClearFoods.style.display = foodSearchInput && foodSearchInput.value.trim() ? 'block' : 'none';
            }
        }

        if (foodSearchInput) {
            foodSearchInput.addEventListener('input', (e) => {
                currentFoodQuery = e.target.value;
                updateClearFoodsVisibility();
                applyFoodsFilter();
            });
            foodSearchInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    currentFoodQuery = foodSearchInput.value;
                    applyFoodsFilter();
                }
            });
        }

        if (btnSearchFoods) {
            btnSearchFoods.addEventListener('click', () => {
                currentFoodQuery = foodSearchInput ? foodSearchInput.value : '';
                applyFoodsFilter();
            });
        }

        if (btnClearFoods) {
            btnClearFoods.addEventListener('click', () => {
                if (foodSearchInput) foodSearchInput.value = '';
                currentFoodQuery = '';
                updateClearFoodsVisibility();
                applyFoodsFilter();
            });
        }

        foodFilterPills.forEach(pill => {
            pill.addEventListener('click', () => {
                foodFilterPills.forEach(p => p.classList.remove('active'));
                pill.classList.add('active');
                currentFoodCat = pill.dataset.filter || 'all';
                applyFoodsFilter();
            });
        });

        applyFoodsFilter();
    }

    // --------------------------------------------------------------------------
    // CULTURE PAGE ENGINE
    // --------------------------------------------------------------------------
    const cultureContainer = document.getElementById('culture-destination-container');
    if (cultureContainer) {
        const cultureSearchInput = document.getElementById('culture-search-input');
        const cultureFilterPills = document.querySelectorAll('.culture-filter-pill');
        const cultureCountDisplay = document.getElementById('culture-count');
        let currentCultCat = 'all';
        let currentCultQuery = '';

        function applyCultureFilter() {
            const filtered = karnatakaCulture.filter(c => {
                const matchesCat = currentCultCat === 'all' || c.category === currentCultCat;
                const searchCorpus = (c.name + " " + c.description + " " + (c.region || "") + " " + (c.significance || "")).toLowerCase();
                const matchesQuery = !currentCultQuery || searchCorpus.includes(currentCultQuery.toLowerCase());
                return matchesCat && matchesQuery;
            });
            renderList(cultureContainer, filtered, 'culture', cultureCountDisplay);
        }

        const btnSearchCulture = document.getElementById('btn-search-culture');
        const btnClearCulture = document.getElementById('btn-clear-culture');

        function updateClearCultureVisibility() {
            if (btnClearCulture) {
                btnClearCulture.style.display = cultureSearchInput && cultureSearchInput.value.trim() ? 'block' : 'none';
            }
        }

        if (cultureSearchInput) {
            cultureSearchInput.addEventListener('input', (e) => {
                currentCultQuery = e.target.value;
                updateClearCultureVisibility();
                applyCultureFilter();
            });
            cultureSearchInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    currentCultQuery = cultureSearchInput.value;
                    applyCultureFilter();
                }
            });
        }

        if (btnSearchCulture) {
            btnSearchCulture.addEventListener('click', () => {
                currentCultQuery = cultureSearchInput ? cultureSearchInput.value : '';
                applyCultureFilter();
            });
        }

        if (btnClearCulture) {
            btnClearCulture.addEventListener('click', () => {
                if (cultureSearchInput) cultureSearchInput.value = '';
                currentCultQuery = '';
                updateClearCultureVisibility();
                applyCultureFilter();
            });
        }

        cultureFilterPills.forEach(pill => {
            pill.addEventListener('click', () => {
                cultureFilterPills.forEach(p => p.classList.remove('active'));
                pill.classList.add('active');
                currentCultCat = pill.dataset.filter || 'all';
                applyCultureFilter();
            });
        });

        applyCultureFilter();
    }
});

// Global Bookmark Toggle Helper
window.toggleBookmark = function(id, btnElement) {
    const key = `bookmark_${id}`;
    const currentlyBookmarked = localStorage.getItem(key) === 'true';
    if (currentlyBookmarked) {
        localStorage.setItem(key, 'false');
        btnElement.innerHTML = '🤍';
    } else {
        localStorage.setItem(key, 'true');
        btnElement.innerHTML = '❤️';
    }
};
