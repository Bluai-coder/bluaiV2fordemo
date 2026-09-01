import BluHealthClient from './BluHealthClient';

export const metadata = {
  title: "BluHealth™ - AI-Powered Patient Health Management Portal | BluAI",
  description: "BluHealth™ by BluAI - Patient health management platform. Real-time monitoring, preventive diagnostics, and telemedicine integration.",
  alternates: { canonical: "https://bluai.ai/products/blu-health/" },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "BluHealth™",
  "applicationCategory": "HealthcareApplication",
  "manufacturer": { "@type": "Organization", "name": "BluAI" },
};


export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      <BluHealthClient />;
    </>
  )

}