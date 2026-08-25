# 🚩 Namaste Karnataka (ನಮಸ್ತೆ ಕರ್ನಾಟಕ)
### *A Full-Stack Digital Cultural Showcase & Tourism Platform for Karnataka*

[![GitHub repo](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github)](https://github.com/DHANUSH141495/NamasteKarnataka-Website)
[![Node.js](https://img.shields.io/badge/Node.js-18+-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org)
[![Express.js](https://img.shields.io/badge/Express.js-Backend-black?style=for-the-badge&logo=express)](https://expressjs.com)
[![SQLite3](https://img.shields.io/badge/SQLite3-Database-003B57?style=for-the-badge&logo=sqlite&logoColor=white)](https://sqlite.org)
[![JWT Auth](https://img.shields.io/badge/Auth-JWT%20%2B%20Bcrypt-FF5722?style=for-the-badge)](https://jwt.io)
[![HTML5 / CSS3 / ES6](https://img.shields.io/badge/Frontend-Vanilla%20HTML5%20%2B%20CSS3%20%2B%20ES6-F7DF1E?style=for-the-badge)](https://developer.mozilla.org)

---

## 📖 Overview

**Namaste Karnataka** is a full-stack, responsive web application and digital cultural chronicle created to celebrate the rich heritage, monumental tourism destinations, mouthwatering culinary diversity, and age-old folk traditions of **Karnataka (One State, Many Worlds)**.

The platform includes **user authentication (Login/Register)**, **SQLite relational database storage**, **user favorites/bookmarks sync**, **trip inquiry management**, and **interactive multi-category search engines with dedicated search triggers**.

---

## ✨ Core Features & Highlights

### 🔐 1. User Authentication & Profile Portal (`login.html`)
- **JWT & Bcrypt Hashed Security**: Secure user registration and login with encrypted password storage.
- **1-Click Quick Examiner Demo**: Instant demo login as **Dhanush** (`dhanush@gmail.com` / `Karnataka@123`).
- **Dynamic Header State**: Automatically swaps between *"🔑 Login / Sign Up"* and active user avatar badge with *"🚪 Logout"*.
- **Database Favorites Sync**: Logged-in users have their bookmarked places, dishes, and traditions synced to the SQLite database.

### 🏛️ 2. Comprehensive Destination Explorer with Search Button (`places.html`)
- **47+ Curated Tourism Destinations**: Covers Bengaluru, Mysuru, Coastal Karnataka (Karavali), Malnad, and North Karnataka (Hampi, Badami, Gol Gumbaz).
- **Explicit Search & Clear Controls**: Includes dedicated **[🔍 Search Places]** and **[✖ Clear]** buttons alongside instant typing filter.
- **Category Filter Pills**: Fast filtering across `UNESCO & Heritage`, `Coastal & Beaches`, `Nature & Hills`, `Sacred Temples`, `Wildlife Reserves`, and `Bengaluru`.
- **Interactive Modals with Google Maps Navigation**: Direct *"📍 View on Google Maps"* links and detailed historical context for every destination.

### 🍲 3. Authentic Culinary Atlas with Search (`foods.html`)
- **Filter Pills**: `🍚 Breakfast & Staples`, `🍬 Royal Sweets`, `🥥 Coastal & Karavali`, `🌾 North Karnataka`, `☕ Malnad & Coffee`.
- **Interactive Deep Dive**: Ingredients, origin stories, and flavor profiles for *Bisi Bele Bath, Mysore Pak, Neer Dosa, Jolada Rotti, Mangalore Buns, Dharwad Peda, and Filter Kaapi*.

### 🎭 4. Living Culture & Performing Arts (`culture.html`)
- **Filter Pills**: `🎭 Folk Dances & Theatre`, `🎉 Grand Festivals`, `🎨 Handicrafts & GI Tags`.
- **In-Depth Cultural Chronicle**: Deep dives into *Yakshagana, Dollu Kunitha, Mysore Dasara, Kambala Buffalo Race, Channapatna Wooden Toys, and Veeragase*.

### 📦 5. Relational SQLite Database & Backend API
- Built with **Express.js** and **better-sqlite3** in high-performance Write-Ahead-Logging (WAL) mode.
- Tables:
  - `users`: User accounts, emails, bcrypt password hashes, avatars, and timestamps.
  - `user_favorites`: Relational user bookmarks linked to destination IDs.
  - `trip_inquiries`: User tour planning inquiries and contact form submissions.
  - `reviews`: User reviews and star ratings.

---

## 🛠️ Technology Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend** | HTML5, CSS3, ES6+ JavaScript | Responsive layout, modal system, dynamic card rendering |
| **Styling** | Vanilla CSS3 (Grid & Flexbox) | Crimson/Saffron heritage design system, Google Fonts |
| **Backend** | Node.js & Express.js | REST API endpoints, JWT auth middleware, static serving |
| **Database** | SQLite 3 (`better-sqlite3`) | Relational persistence for users, favorites, and inquiries |
| **Security** | `bcryptjs` & `jsonwebtoken` | Salted password hashing and secure token generation |

---

## 📁 Repository Structure

```
NamasteKarnataka-Website/
├── server.js                    # Express.js REST API server with SQLite integration
├── auth.js                      # Client authentication & session manager
├── script.js                    # Dynamic datasets (47+ items) & multi-filter search engine
├── style.css                    # Master stylesheet (theme colors, cards, modals, auth)
├── index.html                   # Homepage: Hero banner, stats counter, categories, trivia
├── places.html                  # Destination catalog with search button & category pills
├── foods.html                   # Traditional dishes and regional cuisines explorer
├── culture.html                 # Folk arts, dances, festivals, and handicrafts guide
├── login.html                   # Dedicated user Login and Registration portal
├── test_backend.js              # Automated backend & database test suite
├── package.json                 # Node dependencies and npm scripts
├── database.sqlite              # Relational SQLite database file
├── place-images/                # Destination photography
├── food-images/                 # Culinary photography
├── culture-images/              # Folk arts and festival images
├── mysore-night.jpg             # Hero banner image of illuminated Mysore Palace
└── README.md                    # Project documentation & setup instructions
```

---

## 🚀 Quick Start Guide

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Start the Backend & Database Server
```bash
npm start
```
*Server will launch on **`http://localhost:5050`** with SQLite database automatically initialized.*

### Step 3: Run Backend Tests
```bash
npm test
```

---

## 🔑 Demo Login Credentials

- **Email**: `dhanush@gmail.com`
- **Password**: `Karnataka@123`
*(Or click **"⚡ 1-Click Login as Dhanush"** on `login.html`)*

---

## 👨‍💻 Author

- **Dhanush**
- **GitHub**: [@DHANUSH141495](https://github.com/DHANUSH141495)
- **Repository**: [NamasteKarnataka-Website](https://github.com/DHANUSH141495/NamasteKarnataka-Website)

---

## 📄 License

This project is open-source and available under the **MIT License**.
