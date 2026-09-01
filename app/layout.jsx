


import BreadcrumbSchema from "../components/BreadcrumbSchema";
import "./globals.css";
import Script from "next/script";

// ✅ Metadata - Saare pages ke liye default
export const metadata = {
  title: "BluAI - AI-Powered Healthcare Solutions",
  description: "BluAI delivers AI-powered healthcare solutions including VitalsChair™ health monitoring chair, BluHealth™ portal, and smart access systems. Transforming healthcare with AI.",
  verification: {
    google: "Lp_piixKyn93igWOzUY_fPwgrrPIIiEcOZ58weYO36A",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Organization Schema - JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "BluAI",
              "legalName": "BluAI Inc.",
              "url": "https://bluai.ai",
              "logo": "https://bluai.ai/logo.png",
              "description": "AI-powered healthcare technology company transforming patient care through intelligent systems and applied innovation.",
              "foundingDate": "2023",
              "email": "info@bluai.ai",
              "address": [
                {
                  "@type": "PostalAddress",
                  "streetAddress": "8 The Green, Suite #17716",
                  "addressLocality": "Dover",
                  "addressRegion": "DE",
                  "postalCode": "19901",
                  "addressCountry": "US"
                },
                {
                  "@type": "PostalAddress",
                  "streetAddress": "CPM-17, Suite #317, Center Plaza Emaar, Sector 105",
                  "addressLocality": "Mohali",
                  "addressRegion": "Punjab",
                  "postalCode": "140307",
                  "addressCountry": "IN"
                }
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-302-238-1512",
                "contactType": "sales",
                "email": "info@bluai.ai",
                "availableLanguage": ["English", "Hindi"]
              },
              "sameAs": [
                "https://www.linkedin.com/company/bluai-ai",
                "https://www.instagram.com/bluai.ai",
                "https://x.com/BluAI_ai",
                "https://www.youtube.com/@BluAIPrivateLtd"
              ]
            })
          }}
        />

        {/* ✅ WebSite Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "BluAI",
              "url": "https://bluai.ai",
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://bluai.ai/search?q={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>

      <body>
        {/* ✅ Google Tag Manager (Script) */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];
            w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';
            j.async=true;
            j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MWM4NWTF');
          `}
        </Script>

        {/* ✅ Google Tag Manager (noscript fallback) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MWM4NWTF"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <BreadcrumbSchema />
        {children}
      </body>
    </html>
  );
}