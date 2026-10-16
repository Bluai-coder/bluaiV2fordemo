// components/Analytics.jsx
'use client';

import Script from 'next/script';
import { useConsent } from './hook/useConsent';

export default function Analytics() {
    const consent = useConsent();

    if (consent !== 'accepted') return null;
    // G-MWM4NWTF
    return (
        <>
            {/* Google Analytics 4 */}
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-DDYMMJVCJT"
                strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-DDYMMJVCJT', {
            anonymize_ip: true,
          });
        `}
            </Script>

            {/* Add Meta Pixel, Hotjar, etc. here */}
        </>
    );
}