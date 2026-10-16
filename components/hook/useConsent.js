// hooks/useConsent.js
'use client';

import { useEffect, useState } from 'react';
import { getConsent } from '@/lib/consent';

export function useConsent() {
  const [consent, setConsent] = useState(null);

  useEffect(() => {
    // Read on mount (client only)
    setConsent(getConsent());

    // Listen for changes
    const handler = () => setConsent(getConsent());
    window.addEventListener('cookie-consent-changed', handler);

    return () => {
      window.removeEventListener('cookie-consent-changed', handler);
    };
  }, []);

  return consent;
}