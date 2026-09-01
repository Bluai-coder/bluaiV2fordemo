import BluAccessClient from './BluAccessClient';

export const metadata = {
  title: "BluAccess™ - AI-Powered Facial Recognition Access Control | BluAI",
  description: "BluAccess™ by BluAI - AI-powered facial recognition access control system. Contactless entry with EAMMS & SAMMS integration.",
  alternates: { canonical: "https://bluai.ai/products/blu-access/" },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "BluAccess™",
  "applicationCategory": "SecurityApplication",
  "manufacturer": { "@type": "Organization", "name": "BluAI" },
};

export default function Page() {
  return (<>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
    />

    <BluAccessClient />;

  </>)



}