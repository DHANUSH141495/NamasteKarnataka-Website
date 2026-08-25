const { app, db } = require('./server');
const http = require('http');

const PORT = 5051; // Dedicated test port
const server = http.createServer(app);

server.listen(PORT, async () => {
  console.log('🧪 Starting Namaste Karnataka Backend & Database Audit on port ' + PORT);

  async function req(path, options = {}) {
    const res = await fetch(`http://localhost:${PORT}${path}`, options);
    const data = await res.json();
    return { status: res.status, ok: res.ok, data };
  }

  let passed = 0;

  try {
    // 1. Health check
    const r1 = await req('/api/health');
    console.log('[1/6] GET /api/health -> Status ' + r1.status + ' (' + r1.data.status + ')');
    if (r1.ok) passed++;

    // 2. Register new user
    const testEmail = 'test_' + Date.now() + '@example.com';
    const r2 = await req('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: 'Explorer User', email: testEmail, password: 'Password@123' })
    });
    console.log('[2/6] POST /api/auth/register -> Status ' + r2.status + ' (Created ID: ' + r2.data.user?.id + ')');
    if (r2.ok) passed++;

    // 3. Login with registered user
    const r3 = await req('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: testEmail, password: 'Password@123' })
    });
    console.log('[3/6] POST /api/auth/login -> Status ' + r3.status + ' (Logged in: ' + r3.data.user?.name + ')');
    if (r3.ok) passed++;
    const token = r3.data.token;

    // 4. Authenticated profile check
    const r4 = await req('/api/auth/me', {
      headers: { 'Authorization': 'Bearer ' + token }
    });
    console.log('[4/6] GET /api/auth/me -> Status ' + r4.status + ' (Role: ' + r4.data.user?.role + ')');
    if (r4.ok) passed++;

    // 5. Toggle favorite
    const r5 = await req('/api/favorites/toggle', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token },
      body: JSON.stringify({ itemId: 'p4', itemType: 'place', itemName: 'Mysore Palace' })
    });
    console.log('[5/6] POST /api/favorites/toggle -> Status ' + r5.status + ' (Saved: ' + r5.data.isFavorited + ')');
    if (r5.ok) passed++;

    // 6. Submit trip inquiry
    const r6 = await req('/api/inquiries', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Dhanush Explorer',
        email: testEmail,
        phone: '9876543210',
        destination: 'Hampi & Badami Circuit',
        message: 'Looking for a 3-day guided heritage photography tour.'
      })
    });
    console.log('[6/6] POST /api/inquiries -> Status ' + r6.status + ' (Inquiry ID: ' + r6.data.inquiryId + ')');
    if (r6.ok) passed++;

    console.log('\n======================================================');
    if (passed === 6) {
      console.log('✅ ALL 6 BACKEND & SQLITE DATABASE AUDITS PASSED 100%!');
    } else {
      console.log('⚠️ Passed ' + passed + ' / 6 tests.');
    }
    console.log('======================================================');

  } catch (err) {
    console.error('Test failed with error:', err);
  } finally {
    server.close();
    process.exit(passed === 6 ? 0 : 1);
  }
});
