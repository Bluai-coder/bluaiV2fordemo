import BluIDClient from './BluIDClient';

export const metadata = {
    title: "BluID™ - AI Biometric Identity & Access Management | BluAI",
    description: "BluID™ by BluAI - AI-powered biometric identity management. Facial recognition, secure authentication, and access control.",
    alternates: { canonical: "https://bluai.ai/products/blu-id/" },
};

const productSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "BluID™",
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

            <BluIDClient />;
        </>
    )

}