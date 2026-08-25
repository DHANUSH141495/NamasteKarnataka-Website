# 🚩 Namaste Karnataka (ನಮಸ್ತೆ ಕರ್ನಾಟಕ)
### *A Digital Cultural Showcase & Interactive Tourism Portal for Karnataka*

[![GitHub repo](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github)](https://github.com/DHANUSH141495/NamasteKarnataka-Website)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript ES6](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Responsive Design](https://img.shields.io/badge/Design-Responsive-success?style=for-the-badge)](https://en.wikipedia.org/wiki/Responsive_web_design)

---

## 📖 Overview

**Namaste Karnataka** is an interactive, responsive web portal created to celebrate and promote the rich heritage, breathtaking tourism destinations, mouthwatering culinary diversity, and age-old cultural traditions of the South Indian state of **Karnataka (One State, Many Worlds)**.

From the architectural wonders of **Hampi** and **Belur-Halebidu** to the serene coffee plantations of **Coorg**, pristine beaches of **Gokarna**, and royal celebrations of **Mysore Dasara**, this project provides a unified digital chronicle for travelers, students, and culture enthusiasts worldwide.

---

## ✨ Key Features

### 🏛️ 1. Comprehensive Destination Explorer (`places.html`)
- **47+ Curated Tourism Destinations**: Covers Bengaluru, Mysore, Coastal Karnataka (Karavali), Malnad, Central Karnataka, and North Karnataka heritage circuits (Badami, Aihole, Pattadakal, Gol Gumbaz).
- **Instant Client-Side Search Engine**: Filter destinations in real-time by entering names, keywords (e.g., *"Bengaluru"*, *"Waterfalls"*, *"Temple"*, *"Coastal"*), or regions without reloading the page.
- **Dynamic DOM Rendering**: Automatically creates interactive cards with responsive images, geographical regions, and detailed historical context.

### 🍲 2. Authentic Karnataka Culinary Atlas (`foods.html`)
- **Regional Gastronomy Showcase**: Features iconic dishes from across Karnataka:
  - **South Karnataka & Bengaluru**: *Bisi Bele Bath, Mysore Pak, Ragi Mudde, Thatte Idli, Maddur Vada*.
  - **Karavali & Coastal**: *Neer Dosa, Mangalore Buns, Kori Rotti, Goli Baje, Fish Curry*.
  - **North Karnataka**: *Jolada Rotti with Ennegayi (stuffed brinjal), Dharwad Peda, Belagavi Kunda, Shenga Chutney*.
  - **Malnad**: *Akki Rotti, Bamboo Shoot Curry, Kaad Todu*.
- **Interactive Food Search**: Find dishes by ingredients, tastes, or origins.

### 🎭 3. Living Cultural Heritage Chronicle (`culture.html`)
- **Traditional Performing Arts**: Deep dives into *Yakshagana, Dollu Kunitha, Veeragase, Kamsale, Bhoota Kola*, and *Carnatic Classical Music*.
- **Grand Festivals & Traditions**: Highlighting *Mysore Dasara (Jumboo Savari), Kambala (Buffalo race), Karaga Shaktyotsava, Hampi Utsava*, and *Ugadi*.
- **Handicrafts & GI Tags**: *Channapatna Wooden Toys, Mysore Silk, Ilkal Sarees, Bidriware, Sandalwood Crafts*.

### 📱 4. Sleek & Accessible User Experience
- **Responsive Layout**: Designed to work smoothly on smartphones, tablets, laptops, and wide desktop displays.
- **Pure Native Web Performance**: Zero external heavy libraries — fast load times powered by vanilla JavaScript and pure CSS3 styling.

---

## 🛠️ Technology Stack

| Component | Technology | Purpose |
| :--- | :--- | :--- |
| **Structure** | Semantic HTML5 | Clean accessibility and SEO-friendly document hierarchy |
| **Styling** | Vanilla CSS3 (Grid & Flexbox) | Modern typography, card layouts, hover effects, and responsive breakpoints |
| **Logic & Engine** | Vanilla JavaScript (ES6+) | Real-time filtering, dynamic list generation, event listeners, and search indexing |
| **Data Layer** | JS Object Data Store + CSV | Pre-indexed 47+ destinations, foods, and cultural elements |
| **Asset Utilities** | Python 3 (`download_images.py`) | Automated image asset download and resolution manager |

---

## 📁 Repository Structure

```
NamasteKarnataka-Website/
├── index.html                   # Homepage: Hero section, overview, and quick exploration links
├── places.html                  # Destination catalog with live search filter
├── foods.html                   # Traditional dishes and regional cuisines explorer
├── culture.html                 # Folk arts, dances, festivals, and handicrafts guide
├── script.js                    # Core JavaScript logic & full structured dataset (47+ items)
├── style.css                    # Master stylesheet (theme colors, grid cards, navigation)
├── karnataka_places_images.csv  # Metadata table linking places with coordinates & image sources
├── download_images.py           # Optional Python script to automate image caching
├── place-images/                # Directory containing destination photography
├── food-images/                 # Directory containing culinary photography
├── culture-images/              # Directory containing performing arts & festival images
├── mysore-night.jpg             # High-res hero banner image of illuminated Mysore Palace
└── README.md                    # Project documentation & setup instructions
```

---

## 🚀 Quick Start Guide

You can run this project locally on your machine in seconds without any complex configuration:

### Option 1: Direct File Launch
1. Clone or download this repository:
   ```bash
   git clone https://github.com/DHANUSH141495/NamasteKarnataka-Website.git
   ```
2. Navigate to the project directory:
   ```bash
   cd NamasteKarnataka-Website
   ```
3. Double-click **`index.html`** or open it in any web browser (Chrome, Edge, Firefox, Safari).

### Option 2: Live Server (VS Code)
1. Open the folder in **Visual Studio Code**.
2. Right-click `index.html` and click **"Open with Live Server"**.
3. The website will launch automatically at `http://127.0.0.1:5500`.

### Option 3: Python Built-in Server
```bash
python -m http.server 8000
```
Open your browser and visit: `http://localhost:8000`

---

## 🗺️ Roadmap & Future Enhancements
- [ ] 🗣️ **Bilingual Toggle**: Add complete Kannada language localization (`ಕನ್ನಡ / English`).
- [ ] 📍 **Interactive Map Integration**: Leaflet.js / Google Maps GPS markers for every destination.
- [ ] 🎧 **Audio Pronunciation & Heritage Stories**: Integrated native audio narrations for historical monuments.
- [ ] 🕶️ **Virtual 360° Panorama Views**: Interactive 360 tours for UNESCO World Heritage Sites (Hampi, Pattadakal, Hoysala Temples of Belur & Halebidu).

---

## 👨‍💻 Author

- **Dhanush**
- **GitHub**: [@DHANUSH141495](https://github.com/DHANUSH141495)
- **Repository**: [NamasteKarnataka-Website](https://github.com/DHANUSH141495/NamasteKarnataka-Website)

---

## 📄 License

This project is open-source and available under the **MIT License**. Contributions and suggestions are always welcome!
