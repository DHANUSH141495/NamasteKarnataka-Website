const express = require('express');
const cors = require('cors');
const path = require('path');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Database = require('better-sqlite3');

const app = express();
const PORT = process.env.PORT || 5050;
const JWT_SECRET = process.env.JWT_SECRET || 'namaste_karnataka_secret_key_2026';

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

// Initialize SQLite Database
const dbPath = path.join(__dirname, 'database.sqlite');
const db = new Database(dbPath);
db.pragma('journal_mode = WAL');

// Create Relational Schema
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    avatar TEXT,
    role TEXT DEFAULT 'user',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS user_favorites (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    item_id TEXT NOT NULL,
    item_type TEXT NOT NULL,
    item_name TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE,
    UNIQUE(user_id, item_id)
  );

  CREATE TABLE IF NOT EXISTS trip_inquiries (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    destination TEXT,
    travelers INTEGER DEFAULT 1,
    message TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE SET NULL
  );

  CREATE TABLE IF NOT EXISTS reviews (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    user_name TEXT NOT NULL,
    place_id TEXT NOT NULL,
    place_name TEXT NOT NULL,
    rating INTEGER CHECK(rating >= 1 AND rating <= 5),
    comment TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
  );
`);

// Seed Default Demo User (Dhanush)
const checkUser = db.prepare('SELECT id FROM users WHERE email = ?').get('dhanush@gmail.com');
if (!checkUser) {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync('Karnataka@123', salt);
  db.prepare(`
    INSERT INTO users (name, email, password_hash, avatar, role)
    VALUES (?, ?, ?, ?, ?)
  `).run(
    'Dhanush',
    'dhanush@gmail.com',
    hash,
    'https://api.dicebear.com/7.x/initials/svg?seed=Dhanush',
    'admin'
  );
  console.log('✅ Seeded demo user: dhanush@gmail.com / Karnataka@123');
}

// Auth Middleware Helper
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.status(401).json({ success: false, message: 'Authentication token required.' });

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ success: false, message: 'Invalid or expired session token.' });
    req.user = decoded;
    next();
  });
}

// ----------------------------------------------------------------------------
// API ROUTES
// ----------------------------------------------------------------------------

// Health Check
app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    status: 'online',
    project: 'Namaste Karnataka Platform API',
    database: 'SQLite 3 (WAL mode)',
    time: new Date().toISOString()
  });
});

// 1. Register User
app.post('/api/auth/register', (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ success: false, message: 'Name, email, and password are required.' });
    }

    const emailClean = email.trim().toLowerCase();
    const existing = db.prepare('SELECT id FROM users WHERE email = ?').get(emailClean);
    if (existing) {
      return res.status(409).json({ success: false, message: 'An account with this email already exists.' });
    }

    const salt = bcrypt.genSaltSync(10);
    const password_hash = bcrypt.hashSync(password, salt);
    const avatar = `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(name)}`;

    const result = db.prepare(`
      INSERT INTO users (name, email, password_hash, avatar, role)
      VALUES (?, ?, ?, ?, 'user')
    `).run(name.trim(), emailClean, password_hash, avatar);

    const user = {
      id: result.lastInsertRowid,
      name: name.trim(),
      email: emailClean,
      avatar,
      role: 'user'
    };

    const token = jwt.sign(user, JWT_SECRET, { expiresIn: '7d' });
    res.status(201).json({ success: true, message: 'Account registered successfully!', user, token });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// 2. Login User
app.post('/api/auth/login', (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ success: false, message: 'Email and password are required.' });
    }

    const emailClean = email.trim().toLowerCase();
    const user = db.prepare('SELECT * FROM users WHERE email = ?').get(emailClean);
    if (!user) {
      return res.status(401).json({ success: false, message: 'Invalid email or password.' });
    }

    const isValid = bcrypt.compareSync(password, user.password_hash);
    if (!isValid) {
      return res.status(401).json({ success: false, message: 'Invalid email or password.' });
    }

    const payload = {
      id: user.id,
      name: user.name,
      email: user.email,
      avatar: user.avatar,
      role: user.role
    };

    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' });
    res.json({ success: true, message: 'Login successful!', user: payload, token });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// 3. Get Active User Profile
app.get('/api/auth/me', authenticateToken, (req, res) => {
  try {
    const user = db.prepare('SELECT id, name, email, avatar, role, created_at FROM users WHERE id = ?').get(req.user.id);
    if (!user) return res.status(404).json({ success: false, message: 'User not found.' });

    const favoritesCount = db.prepare('SELECT COUNT(*) as count FROM user_favorites WHERE user_id = ?').get(req.user.id);
    res.json({ success: true, user: { ...user, favoritesCount: favoritesCount.count } });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// 4. Get User Favorites
app.get('/api/favorites', authenticateToken, (req, res) => {
  try {
    const favorites = db.prepare('SELECT * FROM user_favorites WHERE user_id = ? ORDER BY created_at DESC').all(req.user.id);
    res.json({ success: true, favorites });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// 5. Toggle Favorite / Bookmark
app.post('/api/favorites/toggle', authenticateToken, (req, res) => {
  try {
    const { itemId, itemType, itemName } = req.body;
    if (!itemId) return res.status(400).json({ success: false, message: 'Item ID is required.' });

    const existing = db.prepare('SELECT id FROM user_favorites WHERE user_id = ? AND item_id = ?').get(req.user.id, itemId);

    if (existing) {
      db.prepare('DELETE FROM user_favorites WHERE id = ?').run(existing.id);
      return res.json({ success: true, isFavorited: false, message: 'Removed from favorites' });
    } else {
      db.prepare(`
        INSERT INTO user_favorites (user_id, item_id, item_type, item_name)
        VALUES (?, ?, ?, ?)
      `).run(req.user.id, itemId, itemType || 'place', itemName || 'Karnataka Landmark');
      return res.json({ success: true, isFavorited: true, message: 'Saved to favorites' });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// 6. Submit Trip Inquiry
app.post('/api/inquiries', (req, res) => {
  try {
    const { name, email, phone, destination, travelers, message, userId } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: 'Name, email, and message are required.' });
    }

    const result = db.prepare(`
      INSERT INTO trip_inquiries (user_id, name, email, phone, destination, travelers, message)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `).run(userId || null, name.trim(), email.trim().toLowerCase(), phone || '', destination || 'Karnataka General', parseInt(travelers) || 1, message.trim());

    res.status(201).json({
      success: true,
      inquiryId: result.lastInsertRowid,
      message: 'Thank you! Your trip inquiry has been received. Our Karnataka tourism guide will contact you shortly.'
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// 7. Get All Inquiries (Admin View)
app.get('/api/inquiries', (req, res) => {
  try {
    const inquiries = db.prepare('SELECT * FROM trip_inquiries ORDER BY created_at DESC').all();
    res.json({ success: true, count: inquiries.length, inquiries });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// 8. Add & Get Reviews
app.get('/api/reviews/:placeId', (req, res) => {
  try {
    const reviews = db.prepare('SELECT * FROM reviews WHERE place_id = ? ORDER BY created_at DESC').all(req.params.placeId);
    res.json({ success: true, reviews });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

app.post('/api/reviews', authenticateToken, (req, res) => {
  try {
    const { placeId, placeName, rating, comment } = req.body;
    if (!placeId || !rating || !comment) {
      return res.status(400).json({ success: false, message: 'Place, rating, and comment are required.' });
    }

    const result = db.prepare(`
      INSERT INTO reviews (user_id, user_name, place_id, place_name, rating, comment)
      VALUES (?, ?, ?, ?, ?, ?)
    `).run(req.user.id, req.user.name, placeId, placeName || 'Karnataka Destination', parseInt(rating), comment.trim());

    res.status(201).json({ success: true, reviewId: result.lastInsertRowid, message: 'Review published successfully!' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// 9. Aggregate Statistics
app.get('/api/stats', (req, res) => {
  try {
    const totalUsers = db.prepare('SELECT COUNT(*) as count FROM users').get().count;
    const totalFavorites = db.prepare('SELECT COUNT(*) as count FROM user_favorites').get().count;
    const totalInquiries = db.prepare('SELECT COUNT(*) as count FROM trip_inquiries').get().count;
    res.json({
      success: true,
      stats: {
        totalUsers,
        totalFavorites,
        totalInquiries,
        curatedDestinations: 47,
        traditionalDishes: 50,
        districts: 31
      }
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Start Server
if (require.main === module) {
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`======================================================`);
    console.log(`🚩 Namaste Karnataka Server running on http://localhost:${PORT}`);
    console.log(`📦 Relational SQLite Database: ${dbPath}`);
    console.log(`🔑 Demo Login: dhanush@gmail.com / Karnataka@123`);
    console.log(`======================================================`);
  });
}

module.exports = { app, db };
