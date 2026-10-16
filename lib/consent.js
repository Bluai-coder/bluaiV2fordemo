// lib/consent.js

export const COOKIE_CONSENT_KEY = 'bluai_cookie_consent';

export function getConsent() {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem(COOKIE_CONSENT_KEY);
}

export function setConsent(value) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(COOKIE_CONSENT_KEY, value);
  // Notify other components
  window.dispatchEvent(new Event('cookie-consent-changed'));
}

export function hasConsent() {
  return getConsent() === 'accepted';
}

export function clearNonEssentialCookies() {
  const cookiesToClear = ['_ga', '_gid', '_gat', '_fbp', 'hjSessionUser'];

  cookiesToClear.forEach((name) => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${window.location.hostname};`;
  });
}