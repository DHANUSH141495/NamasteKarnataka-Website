// Function from original script.js
function showMessage() {
    alert("Welcome to Namaste Karnataka! Explore its incredible places, food, and culture.");
}

// =========================================================
// 1. PLACE DATA: Expanded list of Karnataka Destinations (47 places)
//    To add a new place, just add a new object to this list!
//    NOTE: You must ensure an image exists for the path specified (e.g., place-images/mysore-palace.jpg)
// =========================================================
const karnatakaPlaces = [
    // --- BENGALURU & CENTRAL KARNATAKA (South East) ---
    {
        name: "Vidhana Soudha",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/55/Vidhana_Soudha_Front_View.jpg",
        alt: "Vidhana Soudha, Bengaluru",
        description: "The seat of the state legislature of Karnataka in **Bengaluru**, built in the Dravidian style. A key symbol of the **Silicon City**."
    },
    {
        name: "Lalbagh",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Lalbagh_Glasshouse.jpg",
        alt: "Lalbagh Botanical Garden, Bengaluru",
        description: "An iconic green space that defines the 'Garden City' identity of **Bengaluru**. Lalbagh hosts an annual flower show."
    },
    {
        name: "Cubbon Park",
        image: "https://upload.wikimedia.org/wikipedia/commons/8/82/Cubbon_Park_Bangalore.jpg",
        alt: "Cubbon Park, Bengaluru",
        description: "A central park in Bengaluru, known for its greenery and historical significance."
    },
    {
        name: "Mysore Palace",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Mysore_Palace.jpg",
        alt: "Mysore Palace at night",
        description: "An Indo-Saracenic architectural masterpiece and the official residence of the Wadiyar dynasty. Famous for its brilliant lighting during **Mysore Dasara** festival. (Region: South Karnataka, Mysore)"
    },
    {
        name: "Brindavan Gardens",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Brindavan_Gardens.jpg",
        alt: "Musical fountain show at Brindavan Gardens",
        description: "Famous ornamental gardens located adjacent to the Krishnarajasagara (KRS) Dam. Known for its spectacular **musical fountain** show. (Region: South Karnataka, Mandya)"
    },
    {
        name: "Chitradurga Fort",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Chitradurga_Fort.jpg",
        alt: "Chitradurga Fort walls",
        description: "A massive fortification ('Stone Fort') with seven concentric walls and a fascinating history of the Nayakas. (Region: Central Karnataka, Chitradurga)"
    },
    {
        name: "Nandi Hills",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Nandi_Hills.jpg",
        alt: "Sunrise view from Nandi Hills",
        description: "A popular ancient hill fortress and weekend getaway near **Bengaluru**, famous for stunning sunrise views and Tipu Sultanâ€™s drop. (Region: South Karnataka, Chikkaballapur)"
    },
    {
        name: "Shravanabelagola Gomateshwara Statue",
        image: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Shravanabelagola_Gomateshwara.jpg",
        alt: "Gomateshwara monolithic statue",
        description: "A historic Jain pilgrimage center, home to the monolithic 57-foot tall statue of Lord **Gomateshwara (Bahubali)**. (Region: South Karnataka, Hassan)"
    },
    {
        name: "Belur & Halebidu Hoysala Temples",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Hoysaleswara_Temple_Belur.jpg",
        alt: "Hoysaleswara Temple carvings",
        description: "Twin temple towns featuring the magnificent **Hoysaleswara Temple**, renowned for their extremely intricate stone sculptures and detailed friezes. (Region: South Karnataka, Hassan)"
    },
    {
        name: "Somanathapura (Keshava Temple)",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Keshava_Temple_Somanathapura.jpg",
        alt: "Keshava Temple Somanathapura",
        description: "The stunning Keshava Temple, one of the finest examples of **Hoysala architecture** with star-shaped carvings. (Region: South Karnataka, Mysore)"
    },
    {
        name: "Bandipur National Park",
        image: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Bandipur_National_Park.jpg",
        alt: "Tigers in Bandipur National Park",
        description: "One of India's most famous tiger reserves, known for its significant population of tigers, elephants, and deer. (Region: South Karnataka, Chamarajanagar)"
    },
    {
        name: "Nagarhole National Park (Kabini)",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Nagarhole_National_Park.jpg",
        alt: "Kabini River Safari",
        description: "Famous for its rich wildlife, lush forests, and serene boat safaris on the Kabini River backwaters, home to the Black Panther. (Region: South Karnataka, Mysore/Kodagu)"
    },
    {
        name: "Shivanasamudra Falls",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Shivanasamudra_Falls.jpg",
        alt: "Shivanasamudra Falls during monsoon",
        description: "A segmented waterfall on the Kaveri River, split into Gaganachukki and Bharachukki, beautiful during monsoon. (Region: South Karnataka, Mandya)"
    },
    {
        name: "Biligirirangan Hills (BR Hills)",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Biligirirangan_Hills.jpg",
        alt: "Biligirirangan Hills landscape",
        description: "A sacred hill range and Tiger Reserve, providing a unique meeting point for the Eastern and Western Ghats ecosystems. (Region: South Karnataka, Chamarajanagar)"
    },
    {
        name: "Coorg Madikeri",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Coorg.jpg",
        alt: "Coorg coffee plantations",
        description: "A pristine hill station famous for vast coffee plantations, mist-covered hills, Abbey Falls, and the Omkareshwara Temple. (Region: Malnad Karnataka, Kodagu)"
    },
    {
        name: "Chikmagalur: Coffee Land of Karnataka",
        image: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Chikmagalur.jpg",
        alt: "Chikmagalur hill view",
        description: "The birthplace of coffee cultivation in India. Home to Mullayanagiri (highest peak) and Baba Budangiri. (Region: Malnad Karnataka, Chikmagalur)"
    },
    {
        name: "Jog Falls: The Majestic Natural Wonder",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Jog_Falls.jpg",
        alt: "Jog Falls, Shivamogga",
        description: "India's second-highest plunge waterfall, created by the Sharavathi River, a spectacular sight in monsoon. (Region: Malnad Karnataka, Shivamogga)"
    },
    {
        name: "Dandeli: Adventure Capital",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Dandeli_Wildlife_Sanctuary.jpg",
        alt: "White-water rafting in Dandeli",
        description: "Famous for white-water rafting on the Kali River, jungle safaris, and the Dandeli Wildlife Sanctuary. (Region: North Karnataka, Uttara Kannada)"
    },
    {
        name: "Agumbe",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Agumbe.jpg",
        alt: "Agumbe rainforest sunset",
        description: "Known as the 'Cherrapunji of the South' for its heavy rainfall. Famous for sunset points and rainforest biodiversity. (Region: Malnad Karnataka, Shivamogga)"
    },
    {
        name: "Sakleshpur",
        image: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Sakleshpur.jpg",
        alt: "Sakleshpur green mountains",
        description: "A quiet hill station known for coffee, cardamom, and pepper plantations. Famous for the Bisle Ghat Viewpoint. (Region: Malnad Karnataka, Hassan)"
    },
    {
        name: "Kudremukh National Park",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Kudremukh_National_Park.jpg",
        alt: "Kudremukh peak trekking trail",
        description: "Named after a peak resembling a horse's face ('Kudre-mukh'). A highly biodiverse region, popular for trekking. (Region: Malnad Karnataka, Chikmagalur)"
    },
    {
        name: "Kemmanagundi",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Kemmanagundi.jpg",
        alt: "Kemmanagundi Rose Garden",
        description: "A picturesque hill station, known for beautiful gardens, Hebbe Falls, and Raj Bhavan's scenic views. (Region: Malnad Karnataka, Chikmagalur)"
    },
    {
        name: "Murudeshwara",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Murudeshwara.jpg",
        alt: "Murudeshwara Shiva statue",
        description: "Home to the world's second-tallest Shiva statue and the famous Murudeshwara Temple, overlooking the Arabian Sea. (Region: Coastal Karnataka, Uttara Kannada)"
    },
    {
        name: "Gokarna",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Gokarna.jpg",
        alt: "Om Beach Gokarna",
        description: "A peaceful town combining a major pilgrimage center (**Mahabaleshwara Temple**) with stunning beaches like **Om Beach** and Kudle Beach. (Region: Coastal Karnataka, Uttara Kannada)"
    },
    {
        name: "Udupi Sri Krishna Temple",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Udupi_Sri_Krishna_Temple.jpg",
        alt: "Udupi Sri Krishna Temple",
        description: "A holy city famous for the centuries-old Sri Krishna Temple and the birthplace of the globally renowned vegetarian **Udupi cuisine**. (Region: Coastal Karnataka, Udupi)"
    },
    {
        name: "St. Mary's Islands",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/5b/St._Mary%27s_Islands.jpg",
        alt: "Columnar basalt rocks at St. Mary's Islands",
        description: "A group of unique islands near Malpe Beach, known for their rare hexagonal **columnar basalt rock formations**. (Region: Coastal Karnataka, Udupi)"
    },
    {
        name: "Mangaluru",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Mangalore.jpg",
        alt: "Mangalore Kudroli Gokarnath Temple",
        description: "A major port city with beautiful beaches (Tannirbhavi) and famous temples like Kadri Manjunath Temple and Mangaladevi Temple. (Region: Coastal Karnataka, Dakshina Kannada)"
    },
    {
        name: "Dharmasthala",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Dharmasthala.jpg",
        alt: "Dharmasthala Manjunatha Temple",
        description: "A unique pilgrimage center known for its centuries-old Manjunatha Temple and its non-sectarian approach to worship and justice. (Region: Coastal Karnataka, Dakshina Kannada)"
    },
    {
        name: "Kapu Beach",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Kapu_Beach.jpg",
        alt: "Kapu Beach Lighthouse",
        description: "A beautiful coastal spot famous for its prominent, century-old lighthouse that offers panoramic views of the Arabian Sea. (Region: Coastal Karnataka, Udupi)"
    },
    {
        name: "Hampi",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Hampi.jpg",
        alt: "Ruins of Hampi",
        description: "The **UNESCO World Heritage Site** capital of the Vijaynagara Empire, featuring the Stone Chariot, Virupaksha Temple, and more than 500 ancient monuments. (Region: North Karnataka, Vijayanagara)"
    },
    {
        name: "Badami Cave Temples",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Badami_Cave_Temples.jpg",
        alt: "Badami Cave Temple entrance",
        description: "Famous for exquisite rock-cut cave temples dedicated to Shiva and Vishnu, dating back to the **Chalukya dynasty**. (Region: North Karnataka, Bagalkot)"
    },
    {
        name: "Gol Gumbaz",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Gol_Gumbaz.jpg",
        alt: "Gol Gumbaz dome",
        description: "The magnificent mausoleum of Mohammed Adil Shah, featuring the world's second-largest free-standing dome and a famous **Whispering Gallery**. (Region: North Karnataka, Vijayapura)"
    },
    {
        name: "Aihole",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Durga_Temple_Aihole.jpg",
        alt: "Durga Temple Aihole",
        description: "Considered the 'Cradle of Indian Rock Architecture,' featuring over 125 Chalukya temples, including the famous Durga Temple. (Region: North Karnataka, Bagalkot)"
    },
    {
        name: "Pattadakal",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Pattadakal.jpg",
        alt: "Pattadakal Temple complex",
        description: "A **UNESCO World Heritage Site** showcasing a harmonious blend of North Indian (Nagara) and South Indian (Dravida) temple architecture styles. (Region: North Karnataka, Bagalkot)"
    },
    {
        name: "Bidar Fort",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Bidar_Fort.jpg",
        alt: "Bidar Fort gateway",
        description: "A historic fort known for its impressive Iranian and Deccan architecture, and its unique water supply system (Karez). (Region: Kalyana Karnataka, Bidar)"
    },
    {
        name: "Kalaburagi Jama Masjid",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Gulbarga_Jama_Masjid.jpg",
        alt: "Gulbarga Jama Masjid interior",
        description: "One of the earliest mosques in South India, built in the Persian architectural style, notable for having no minarets. (Region: Kalyana Karnataka, Kalaburagi)"
    },
    {
        name: "Lakkundi",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Lakkundi.jpg",
        alt: "Lakkundi Temple ruins",
        description: "An archaeological site featuring about 50 temple ruins and 20 step wells (**Kalyani**), primarily from the Kalyana Chalukya period. (Region: North Karnataka, Gadag)"
    },
    {
        name: "Kudalasangama",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Kudalasangama.jpg",
        alt: "Kudalasangama bridge",
        description: "A major pilgrimage center at the confluence of the Krishna and Malaprabha rivers, the burial place of the social reformer **Basavanna**. (Region: North Karnataka, Bagalkot)"
    },
    {
        name: "Raichur Fort",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Raichur_Fort.jpg",
        alt: "Raichur Fort main entrance",
        description: "A massive fort complex with a rich history under various dynasties, featuring Persian and Arabic inscriptions. (Region: Kalyana Karnataka, Raichur)"
    },
    {
        name: "Gudavi Bird Sanctuary",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Gudavi_Bird_Sanctuary.jpg",
        alt: "Gudavi Bird Sanctuary water body",
        description: "A popular spot near Soraba known for its high density of bird species, especially during the monsoon season. (Region: North Karnataka, Shivamogga)"
    },
    {
        name: "Basavakalyana",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Basavakalyana.jpg",
        alt: "Basavakalyana Anubhava Mantapa",
        description: "A major pilgrimage site associated with **Basavanna** and the 12th-century Lingayat movement, featuring a massive statue and fort. (Region: Kalyana Karnataka, Bidar)"
    },
    {
        name: "Karwar",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Karwar.jpg",
        alt: "Karwar Beach and Kali River",
        description: "A serene coastal city on the border with Goa, famous for its picturesque beaches, the Kali River confluence, and the INS Chapal Warship Museum. (Region: Coastal Karnataka, Uttara Kannada)"
    },
];

// =========================================================
// 3. FOOD DATA: Karnataka Cuisines
// =========================================================
const karnatakaFoods = [
    {
        name: "Coastal Karnataka Cuisine",
        image: "food-images/food-images/coastal_staple.jpg",
        alt: "Seafood dishes from Coastal Karnataka",
        description: "Fresh seafood delicacies like fish curry, prawns, and coconut-based dishes from the Arabian Sea coast. (Region: Coastal Karnataka)"
    },
    {
        name: "North Karnataka Cuisine",
        image: "food-images/food-images/north-karnataka.jpg",
        alt: "Spicy dishes from North Karnataka",
        description: "Bold, spicy flavors with jowar-based dishes, spicy curries, and traditional sweets like jolada rotti. (Region: North Karnataka)"
    },
    {
        name: "Rameshwaram Cuisine",
        image: "food-images/food-images/rameshwaram.jpg",
        alt: "Vegetarian meals from Rameshwaram",
        description: "Simple, pure vegetarian meals served in banana leaves, famous for its sattvic food offerings. (Region: South Karnataka)"
    },
    {
        name: "South Karnataka Cuisine",
        image: "food-images/food-images/south-karnataka.jpg",
        alt: "Rice-based dishes from South Karnataka",
        description: "Rice-centric meals with sambar, rasam, and coconut chutneys, featuring dishes like bisibelebath and khara bath. (Region: South Karnataka)"
    },
    {
        name: "Bisi Bele Bath",
        image: "food-images/food-images/south-karnataka.jpg",
        alt: "Bisi Bele Bath, a spicy rice dish",
        description: "A spicy, tangy rice dish cooked with lentils, vegetables, and a special spice mix, a signature of Karnataka cuisine. (Region: South Karnataka)"
    },
    {
        name: "Mysore Pak",
        image: "food-images/food-images/south-karnataka.jpg",
        alt: "Mysore Pak sweet",
        description: "A rich, ghee-based sweet made from chickpea flour and sugar, originating from Mysore. (Region: South Karnataka)"
    },
    {
        name: "Neer Dosa",
        image: "food-images/food-images/coastal_staple.jpg",
        alt: "Neer Dosa, thin rice crepes",
        description: "Thin, crispy rice crepes made without fermentation, a delicacy from coastal Karnataka. (Region: Coastal Karnataka)"
    },
    {
        name: "Ragi Mudde",
        image: "food-images/food-images/north-karnataka.jpg",
        alt: "Ragi Mudde, finger millet balls",
        description: "Steamed finger millet balls, a nutritious staple food from North Karnataka. (Region: North Karnataka)"
    },
    {
        name: "Kachori",
        image: "food-images/food-images/north-karnataka.jpg",
        alt: "Kachori snack",
        description: "Deep-fried pastry filled with spiced lentils, a popular snack in Karnataka. (Region: North Karnataka)"
    },
    {
        name: "Chivda",
        image: "food-images/food-images/coastal_staple.jpg",
        alt: "Chivda mixture",
        description: "A crunchy snack mix made with flattened rice, nuts, and spices. (Region: Coastal Karnataka)"
    }
];

// =========================================================
// 4. CULTURE DATA: Karnataka Cultural Elements
// =========================================================
const karnatakaCulture = [
    {
        name: "Carnatic Music",
        image: "culture-images/Carnatic.jpg",
        alt: "Carnatic music performance",
        description: "The classical music tradition of South India, characterized by intricate ragas and talas, originating from Karnataka. (Category: Music)"
    },
    {
        name: "Mysore Dasara",
        image: "culture-images/mysore-dasara.jpg",
        alt: "Mysore Dasara festival procession",
        description: "The grand festival celebrating the victory of good over evil, featuring royal processions and cultural events in Mysore. (Category: Festival)"
    },
    {
        name: "Pili Vesha",
        image: "culture-images/pili-vesha.jpg",
        alt: "Pili Vesha traditional attire",
        description: "Traditional attire worn during festivals and ceremonies, featuring colorful saris and jewelry. (Category: Attire)"
    },
    {
        name: "Yakshagana",
        image: "culture-images/yakshagana.jpg",
        alt: "Yakshagana folk dance performance",
        description: "A traditional folk dance-drama from coastal Karnataka, combining music, dance, and storytelling. (Category: Dance-Drama)"
    },
    {
        name: "Kambala",
        image: "place-images/placeholder.jpg",
        alt: "Kambala buffalo race",
        description: "A traditional buffalo race held in coastal Karnataka during the monsoon season, showcasing strength and rural culture. (Category: Sport)"
    },
    {
        name: "Dollu Kunitha",
        image: "place-images/placeholder.jpg",
        alt: "Dollu Kunitha drum dance",
        description: "A folk dance from North Karnataka involving large drums and rhythmic movements, performed during festivals. (Category: Dance)"
    },
    {
        name: "Kodava Culture",
        image: "place-images/placeholder.jpg",
        alt: "Kodava traditional attire",
        description: "The unique culture of the Kodava people from Coorg, known for their martial traditions and distinctive dress. (Category: Ethnic Culture)"
    },
    {
        name: "Suggi Festival",
        image: "place-images/placeholder.jpg",
        alt: "Suggi festival celebration",
        description: "A harvest festival celebrated in North Karnataka, marking the end of the rainy season with community feasts. (Category: Festival)"
    },
    {
        name: "Kannada Language",
        image: "place-images/placeholder.jpg",
        alt: "Kannada script",
        description: "The official language of Karnataka, one of the oldest Dravidian languages with a rich literary tradition. (Category: Language)"
    },
    {
        name: "Veerashaiva Tradition",
        image: "place-images/placeholder.jpg",
        alt: "Veerashaiva lingam",
        description: "A Shaivite religious movement founded by Basavanna, emphasizing equality and devotion to Shiva. (Category: Religion)"
    }
];

// =========================================================
// 5. RENDERING and SEARCH LOGIC (Dynamic Card Generation)
// =========================================================

document.addEventListener('DOMContentLoaded', () => {
    // Function to generate the HTML for a single card
    function createCardHTML(item) {
        return `
            <div class="destination-card">
                <img src="${item.image}" alt="${item.alt}">
                <div class="card-content">
                    <h3>${item.name}</h3>
                    <p>${item.description}</p>
                </div>
            </div>
        `;
    }

    function renderItems(container, itemsToRender, noResultsMessage) {
        container.innerHTML = '';

        if (itemsToRender.length === 0) {
            container.innerHTML = `<p class="no-results">${noResultsMessage}</p>`;
        } else {
            itemsToRender.forEach(item => {
                container.innerHTML += createCardHTML(item);
            });
        }
    }

    // Handle Places page
    const placesContainer = document.getElementById('destination-container');
    if (placesContainer) {
        const searchInput = document.getElementById('search-input');

        renderItems(placesContainer, karnatakaPlaces, 'No destinations match your search. Try a different region or landmark!');

        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                const searchTerm = e.target.value.toLowerCase();
                const filteredPlaces = karnatakaPlaces.filter(place => {
                    const searchableText = (place.name + " " + place.description + " " + place.alt).toLowerCase();
                    return searchableText.includes(searchTerm);
                });
                renderItems(placesContainer, filteredPlaces, 'No destinations match your search. Try a different region or landmark!');
            });
        }

        const searchForm = document.getElementById('search-form');
        if (searchForm) {
            searchForm.addEventListener('submit', (e) => {
                e.preventDefault();
            });
        }
    }

    // Handle Foods page
    const foodsContainer = document.getElementById('food-destination-container');
    if (foodsContainer) {
        const foodSearchInput = document.getElementById('food-search-input');

        renderItems(foodsContainer, karnatakaFoods, 'No food items match your search. Try a different dish or region!');

        if (foodSearchInput) {
            foodSearchInput.addEventListener('input', (e) => {
                const searchTerm = e.target.value.toLowerCase();
                const filteredFoods = karnatakaFoods.filter(food => {
                    const searchableText = (food.name + " " + food.description + " " + food.alt).toLowerCase();
                    return searchableText.includes(searchTerm);
                });
                renderItems(foodsContainer, filteredFoods, 'No food items match your search. Try a different dish or region!');
            });
        }

        const foodSearchForm = document.getElementById('food-search-form');
        if (foodSearchForm) {
            foodSearchForm.addEventListener('submit', (e) => {
                e.preventDefault();
            });
        }
    }

    // Handle Culture page
    const cultureContainer = document.getElementById('culture-destination-container');
    if (cultureContainer) {
        const cultureSearchInput = document.getElementById('culture-search-input');

        renderItems(cultureContainer, karnatakaCulture, 'No cultural elements match your search. Try a different dance, music, or festival!');

        if (cultureSearchInput) {
            cultureSearchInput.addEventListener('input', (e) => {
                const searchTerm = e.target.value.toLowerCase();
                const filteredCulture = karnatakaCulture.filter(culture => {
                    const searchableText = (culture.name + " " + culture.description + " " + culture.alt).toLowerCase();
                    return searchableText.includes(searchTerm);
                });
                renderItems(cultureContainer, filteredCulture, 'No cultural elements match your search. Try a different dance, music, or festival!');
            });
        }

        const cultureSearchForm = document.getElementById('culture-search-form');
        if (cultureSearchForm) {
            cultureSearchForm.addEventListener('submit', (e) => {
                e.preventDefault();
            });
        }
    }
});
