// =============================================================
// ESPRESSO CLUB — Configuration
// Fill in your Supabase credentials below, then save.
// Find these in: Supabase → Project Settings → API
// =============================================================

const SUPABASE_URL  = 'https://dxbyocmnvtrnsgtfdjhq.supabase.co';
// const SUPABASE_ANON = 'sb_publishable_VQpPSdbokPzddFcss1hcYg_aVDVEQNc';
const SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR4YnlvY21udnRybnNndGZkamhxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzcyODQzOTUsImV4cCI6MjA5Mjg2MDM5NX0.37WfslVF-083s8uZaqioa2Pk_tzh4ky9CIGzmXV5aOU';

// Prices in GBP
const PRICE_SINGLE = 0.50;
const PRICE_DOUBLE = 0.75;

// Your club name (appears in the billing email)
const CLUB_NAME     = 'Espresso Club';
const ORGANISER     = 'Paul';

// Admin password hash (SHA-256 of "espresso-club-v1" + password)
// Do NOT commit the plain password here.
const ADMIN_PW_HASH = '7334c6ef074e40ce874c87f5eccf6e8613440499571d25ffe5635b3988d089e6';
