// =============================================================
// fingerprint.js — lightweight device fingerprinting
// Produces a stable ~40-char hex ID from browser attributes.
// Not cryptographic — suitable for a trusted club environment.
// =============================================================

async function getDeviceId() {
  const raw = [
    navigator.userAgent,
    navigator.language,
    screen.width + 'x' + screen.height,
    screen.colorDepth,
    Intl.DateTimeFormat().resolvedOptions().timeZone,
    navigator.hardwareConcurrency || '',
    navigator.platform || '',
  ].join('|');

  // SHA-256 via SubtleCrypto (available in all modern browsers over HTTPS)
  const buf  = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(raw));
  const hex  = Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2,'0')).join('');
  return hex.slice(0, 40); // 40 hex chars is plenty
}
