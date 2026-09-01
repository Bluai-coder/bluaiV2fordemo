// ✅ Server Component - metadata allowed
import VitalsChairLanding from './VitalsChairClient';

export const metadata = {
  title: "VitalsChair™ - AI-Powered Medical Grade Health Monitoring Chair | BluAI",
  description: "VitalsChair™ by BluAI - Medical-grade AI health monitoring chair. Measures BP, ECG, SpO2, body composition in under 10 minutes. HIPAA compliant.",
  alternates: { canonical: "https://bluai.ai/products/vitals-chair/" },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "BluASHA™",
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
      <VitalsChairLanding />;

    </>

  )




}