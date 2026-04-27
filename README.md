# ☕ Espresso Club

Track and bill coffee drinkers in your espresso club. Members scan a QR code on their phone, you get a monthly tally and billing email.

## How it works

- Two QR codes on the machine (single shot / double shot)
- Members scan → phone page confirms their name and logs the shot
- First scan: member enters their name once; recognised automatically after that
- Admin dashboard: monthly tallies, member management, one-click billing email

## File structure

```
espresso-club/
├── index.html              ← redirects to admin
├── config.js               ← YOUR CREDENTIALS GO HERE
├── fingerprint.js          ← device ID utility (shared)
├── scan/
│   ├── single.html         ← QR code A points here
│   └── double.html         ← QR code B points here
├── admin/
│   └── index.html          ← your dashboard (bookmark this)
└── supabase_setup.sql      ← run once in Supabase SQL editor
```

---

## Setup (15–20 minutes)

### Step 1 — Create a Supabase project (free)

1. Go to https://supabase.com and sign up / sign in
2. Click **New project** → name it `espresso-club`
3. Choose a region close to you (e.g. West Europe)
4. Wait ~2 minutes for it to spin up

### Step 2 — Run the database schema

1. In your Supabase project, click **SQL Editor** in the left sidebar
2. Click **New query**
3. Open `supabase_setup.sql` from this repo, copy all the contents, paste and click **Run**
4. You should see "Success. No rows returned."

### Step 3 — Get your API credentials

1. In Supabase, go to **Project Settings → API**
2. Copy two values:
   - **Project URL** — looks like `https://abcdefgh.supabase.co`
   - **anon / public key** — long string starting with `eyJ...`

### Step 4 — Add credentials to config.js

Open `config.js` and fill in your values:

```js
const SUPABASE_URL  = 'https://YOUR_PROJECT_ID.supabase.co';
const SUPABASE_ANON = 'eyJ...your anon key...';
```

Also set your prices and name:

```js
const PRICE_SINGLE = 0.30;   // £ per single shot
const PRICE_DOUBLE = 0.50;   // £ per double shot
const CLUB_NAME    = 'The Espresso Club';
const ORGANISER    = 'Paul';
```

### Step 5 — Create a GitHub repo and enable Pages

1. Go to https://github.com/BrennanGroup
2. Click **New repository** → name it `espresso-club` → Public → Create
3. Upload all files (drag and drop, or use git):

```bash
git init
git add .
git commit -m "Initial espresso club"
git remote add origin https://github.com/BrennanGroup/espresso-club.git
git push -u origin main
```

4. In the repo, go to **Settings → Pages**
5. Under **Source**, select `main` branch, `/ (root)` folder → **Save**
6. Wait ~1 minute. Your site will be live at:
   `https://brennangroup.github.io/espresso-club`

### Step 6 — Update the URL in config and admin

In the admin dashboard, go to **QR Codes** tab and update the base URL to:
```
https://brennangroup.github.io/espresso-club
```

The QR codes will regenerate automatically.

### Step 7 — Print your QR codes

1. In the **QR Codes** tab of the admin dashboard
2. Click **Download PNG** for each QR code
3. Print and stick them next to the machine

---

## Usage

### For members
- Scan the appropriate QR code on their phone
- First time: enter their name → tap to confirm
- Every time after: instant confirmation, shot logged automatically

### For you (admin)
- Open `https://brennangroup.github.io/espresso-club/admin/`
- **Dashboard**: see monthly totals, switch months with the dropdown
- **Members**: add/remove members manually if needed
- **Billing**: set prices, generate the email, open directly in Gmail

---

## Notes

- **Device fingerprinting**: Uses browser attributes (user-agent, screen, timezone, language) hashed to SHA-256. Works reliably on personal phones. If someone switches phones they'll be asked to register again.
- **Security**: The scan pages use Supabase's `anon` (public) key, which is safe to expose — Row Level Security policies ensure members can only insert shots, not read others' data. The admin dashboard uses the same anon key — for a club setting this is fine. If you want stricter security, move the admin to use the service role key behind a password.
- **Supabase free tier**: Up to 500MB database, 2GB bandwidth, 50,000 monthly active users. More than enough for an espresso club.

---

## Troubleshooting

| Problem | Fix |
|---|---|
| "Could not load members" error | Check `SUPABASE_URL` and `SUPABASE_ANON` in config.js |
| QR code scan shows blank page | Make sure GitHub Pages is enabled and the URL in config.js is correct |
| Member not recognised | They need to scan on the same browser/device they registered with |
| Shot logged twice | Each page load logs one shot — tell members not to refresh |
