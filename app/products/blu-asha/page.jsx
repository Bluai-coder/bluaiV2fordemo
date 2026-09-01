
import BluASHAHero from '../../../components/blu-asha/BluASHAHero'
import AddressingBarriersSection from '../../../components/blu-asha/AddressingBarriersSection'
import InnovationServicesSection from '../../../components/blu-asha/InnovationServicesSection'
import BluASHAImpactSection from '../../../components/blu-asha/BluASHAImpactSection'

export const metadata = {
  title: "BluASHA™ - Digital Health Portal for ASHA Workers | BluAI",
  description: "BluASHA™ by BluAI - Digital health portal for ASHA workers. Simplify community health data collection, tracking, and reporting.",
  alternates: { canonical: "https://bluai.ai/products/blu-asha/" },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "BluASHA™",
  "applicationCategory": "HealthcareApplication",
  "manufacturer": { "@type": "Organization", "name": "BluAI" },
};

function page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <BluASHAHero/>
      <AddressingBarriersSection/>
      <InnovationServicesSection/>
      <BluASHAImpactSection/>  
    </>
  )
}

export default page
  