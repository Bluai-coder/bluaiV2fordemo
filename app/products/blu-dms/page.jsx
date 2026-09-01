import BluDMSClient from './BluDMSClient';

export const metadata = {
    title: "BluDMS™ - AI-Powered Document Management System | BluAI",
    description: "BluDMS™ by BluAI - AgenticAI enabled document management system. Automate document processing, extraction, and workflow.",
    alternates: { canonical: "https://bluai.ai/products/blu-dms/" },
};

const productSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "BluDMS™",
    "applicationCategory": "HealthcareApplication",
    "manufacturer": { "@type": "Organization", "name": "BluAI" },
};
export default function Page() {
  return(
    <>
    <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
    <BluDMSClient />;
    </>
  ) 
  
}