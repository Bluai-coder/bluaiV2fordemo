// ✅ Server Component - metadata allowed

import SmartPoleClient from "./SmartPoleClient";


export const metadata = {
  title: "Vitals pole™ - AI-Powered Medical Grade Health Monitoring briefcase | BluAI",
  description: "Vitals pole™ by BluAI - Medical-grade AI health monitoring pole. Measures BP, ECG, SpO2, body composition in under 10 minutes. HIPAA compliant.",
  alternates: { canonical: "https://bluai.ai/products/vitals-pole/" },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Vitals pole™",
  "applicationCategory": "HealthcareApplication",
  "manufacturer": { "@type": "Organization", "name": "BluAI" }, 
};


export default function Page() {
  return (
    <>
      {/* ✅ JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <SmartPoleClient />;

    </>

  )




}