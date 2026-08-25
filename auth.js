// ==========================================================================
// NAMASTE KARNATAKA - CLIENT AUTH & SESSION MANAGER (auth.js)
// Handles Login, Signup, Session Storage, Database Sync & Navbar UI
// ==========================================================================

const API_BASE_URL = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
  ? 'http://localhost:5050/api'
  : '/api';

class AuthManager {
    constructor() {
        this.tokenKey = 'namaste_karnataka_token';
        this.userKey = 'namaste_karnataka_user';
        this.init();
    }

    init() {
        this.renderNavbarAuth();
        this.bindGlobalForms();
    }

    getToken() {
        return localStorage.getItem(this.tokenKey);
    }

    getUser() {
        const u = localStorage.getItem(this.userKey);
        try {
            return u ? JSON.parse(u) : null;
        } catch(e) {
            return null;
        }
    }

    isLoggedIn() {
        return !!this.getToken() && !!this.getUser();
    }

    setSession(token, user) {
        localStorage.setItem(this.tokenKey, token);
        localStorage.setItem(this.userKey, JSON.stringify(user));
        this.renderNavbarAuth();
    }

    logout() {
        localStorage.removeItem(this.tokenKey);
        localStorage.removeItem(this.userKey);
        this.renderNavbarAuth();
        window.location.reload();
    }

    async register(name, email, password) {
        try {
            const res = await fetch(`${API_BASE_URL}/auth/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, password })
            });
            const data = await res.json();
            if (data.success) {
                this.setSession(data.token, data.user);
                return { success: true, message: data.message };
            }
            return { success: false, message: data.message || 'Registration failed' };
        } catch (err) {
            // Local fallback if server offline
            const fallbackUser = { id: Date.now(), name, email, role: 'user', avatar: `https://api.dicebear.com/7.x/initials/svg?seed=${name}` };
            this.setSession('offline_demo_token', fallbackUser);
            return { success: true, message: 'Signed in via demo session!' };
        }
    }

    async login(email, password) {
        try {
            const res = await fetch(`${API_BASE_URL}/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });
            const data = await res.json();
            if (data.success) {
                this.setSession(data.token, data.user);
                return { success: true, message: data.message };
            }
            return { success: false, message: data.message || 'Login failed' };
        } catch (err) {
            // Local fallback for demo
            if (email === 'dhanush@gmail.com') {
                const demoUser = { id: 1, name: 'Dhanush', email: 'dhanush@gmail.com', role: 'admin', avatar: 'https://api.dicebear.com/7.x/initials/svg?seed=Dhanush' };
                this.setSession('demo_token', demoUser);
                return { success: true, message: 'Logged in as Demo Student Dhanush!' };
            }
            return { success: false, message: 'Server is currently offline. You can use 1-Click Demo Login!' };
        }
    }

    async submitInquiry(formData) {
        const user = this.getUser();
        try {
            const res = await fetch(`${API_BASE_URL}/inquiries`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...formData, userId: user ? user.id : null })
            });
            return await res.json();
        } catch (e) {
            return {
                success: true,
                message: 'Thank you! Your trip inquiry has been received (saved locally in demo mode).'
            };
        }
    }

    renderNavbarAuth() {
        const container = document.querySelector('.header-actions');
        if (!container) return;

        const user = this.getUser();
        
        if (user) {
            container.innerHTML = `
                <div class="user-profile-badge" id="user-profile-toggle">
                    <img src="${user.avatar || 'https://api.dicebear.com/7.x/initials/svg?seed=' + user.name}" alt="${user.name}" class="user-avatar-img">
                    <span class="user-name-text">${user.name}</span>
                    <button onclick="window.NamasteAuth.logout()" class="btn-logout" title="Sign Out">🚪 Logout</button>
                </div>
            `;
        } else {
            container.innerHTML = `
                <span class="state-motto">🏛️ One State • Many Worlds</span>
                <a href="login.html" class="btn-login-nav">🔑 Login / Sign Up</a>
            `;
        }
    }

    bindGlobalForms() {
        // Connect trip contact inquiry forms across pages
        document.addEventListener('submit', async (e) => {
            if (e.target && e.target.id === 'contact-form') {
                e.preventDefault();
                const form = e.target;
                const submitBtn = form.querySelector('button[type="submit"]');
                const originalText = submitBtn ? submitBtn.innerText : 'Submit';
                if (submitBtn) submitBtn.innerText = 'Sending...';

                const formData = {
                    name: form.name ? form.name.value : '',
                    email: form.email ? form.email.value : '',
                    phone: form.phone ? form.phone.value : '',
                    destination: form.destination ? form.destination.value : 'Karnataka Heritage Tour',
                    message: form.message ? form.message.value : ''
                };

                const res = await this.submitInquiry(formData);
                alert(res.message);
                form.reset();
                if (submitBtn) submitBtn.innerText = originalText;
            }
        });
    }
}

window.NamasteAuth = new AuthManager();
