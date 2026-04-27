// =============================================================
// fingerprint.js — lightweight device fingerprinting
// Uses a simple hash so it works on all browsers, no crypto API needed.
// =============================================================

function getDeviceId() {
  const raw = [
    navigator.userAgent,
    navigator.language,
    screen.width + 'x' + screen.height,
    screen.colorDepth,
    Intl.DateTimeFormat().resolvedOptions().timeZone,
    navigator.hardwareConcurrency || '',
    navigator.platform || '',
  ].join('|');

  // Simple FNV-1a-like hash, returns 40 hex chars
  let h1 = 0x811c9dc5, h2 = 0xdeadbeef;
  for (let i = 0; i < raw.length; i++) {
    const c = raw.charCodeAt(i);
    h1 = Math.imul(h1 ^ c, 16777619);
    h2 = Math.imul(h2 ^ c, 2246822519);
  }
  h1 = (h1 ^ (h1 >>> 16)) >>> 0;
  h2 = (h2 ^ (h2 >>> 13)) >>> 0;
  // Mix and pad to 40 hex chars
  const hex = (h1.toString(16).padStart(8, '0') +
               h2.toString(16).padStart(8, '0') +
               (h1 ^ h2).toString(16).padStart(8, '0') +
               ((h1 + h2) >>> 0).toString(16).padStart(8, '0') +
               ((h1 * 31 + h2) >>> 0).toString(16).padStart(8, '0'));
  return hex.slice(0, 40);
}
