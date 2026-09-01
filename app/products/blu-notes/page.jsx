import BluNotesClient from './BluNotesClient';

export const metadata = {
  title: "BluNotes™ - AI-Powered Clinical Documentation & Note Taking | BluAI",
  description: "BluNotes™ by BluAI - AI-powered clinical documentation assistant. Automate medical note taking, reduce documentation time by 70%.",
  alternates: { canonical: "https://bluai.ai/products/blu-notes/" },
};

// ✅ Product Schema (JSON-LD)
const productSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "BluNotes™",
  "description": "AI-powered clinical documentation assistant for healthcare professionals. Automates medical note taking, transcription, and clinical documentation.",
  "applicationCategory": "HealthcareApplication",
  "operatingSystem": "Web, iOS, Android",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "availability": "https://schema.org/PreOrder"
  },
  "manufacturer": {
    "@type": "Organization",
    "name": "BluAI"
  }
};

export default function Page() {
  return (
    <>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      <BluNotesClient />;
    </>
  )

}