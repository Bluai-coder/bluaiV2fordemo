// ✅ Server Component - metadata allowed

import VitalsBriefcaseClient from "./VitalsBriefcaseClient";

export const metadata = {
  title: "Vitals briefcase™ - AI-Powered Medical Grade Health Monitoring briefcase | BluAI",
  description: "Vitals briefcase™ by BluAI - Medical-grade AI health monitoring briefcase. Measures BP, ECG, SpO2, body composition in under 10 minutes. HIPAA compliant.",
  alternates: { canonical: "https://bluai.ai/products/vitals-briefcase/" },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Vitals briefcase™",
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
      <VitalsBriefcaseClient />;

    </>

  )




}