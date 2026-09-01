import React from 'react'
import BluMailIntroSection from '../../../components/blu-mail/BluMailIntroSection'
import BluMailVideoShowcase from '../../../components/blu-mail/BluMailVideoShowcase'

export const metadata = {
  title: "BluMail™ - Secure AI-Powered Email Solution | BluAI",
  description: "BluMail™ by BluAI - Secure email solution with AI-powered filtering, smart categorization, and enterprise-grade security.",
  alternates: { canonical: "https://bluai.ai/products/blu-mail/" },
};
 

const productSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "BluMail™",
  "applicationCategory": "CommunicationApplication",
  "manufacturer": { "@type": "Organization", "name": "BluAI" },
};

function page() {
  return (
    <>
      <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
            />
    <BluMailIntroSection/>
    <BluMailVideoShowcase/>
      
    </>
  )
}

export default page
