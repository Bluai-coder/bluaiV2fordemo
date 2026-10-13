import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Stack,
} from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

// ============================================================
// FAQ DATA — Optimized for AEO
// ============================================================
const faqs = [
  {
    q: "What is BluAI?",
    a: "BluAI is an AI-powered healthcare technology company. We build medical-grade embedded systems and smart monitoring products. Our solutions help hospitals and clinics turn complex clinical data into actionable insights faster.",
  },
  {
    q: "What is VitalsChair™?",
    a: "VitalsChair™ is an AI-powered health assessment kiosk. It measures 6+ vital signs in under 60 seconds per seated session. The system syncs results to EMR and EHR platforms via HL7 and FHIR standards.",
  },
  {
    q: "Is BluAI HIPAA compliant?",
    a: "Yes. BluAI maintains HIPAA-compliant workflows and enterprise-grade security. We also hold compliance with ABDM, ISO13485, ISO-27001, CE, and FHIR standards.",
  },
  {
    q: "Does BluAI integrate with EMR, EHR, and HIS systems?",
    a: "Yes. BluAI supports seamless EMR, EHR, and HIS integration. Our cloud platforms enable real-time monitoring, diagnostics, and streamlined clinical workflows for healthcare providers.",
  },
  {
    q: "How can I contact BluAI?",
    a: "Email info@bluai.ai or call +91 172 456 8962 (India) or +1 302 238 1512 (USA). You can also schedule a demo directly through the BluAI website.",
  },
];

// ============================================================
// FAQPage SCHEMA — Auto-generated
// ============================================================
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.bluai.ai/#faq",
  mainEntity: faqs.map((item, index) => ({
    "@type": "Question",
    "@id": `https://www.bluai.ai/#faq-${index + 1}`,
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export default function FaqSection() {
  return (
    <Box
      component="section"
      id="faq"
      sx={{ py: { xs: 6, md: 0 }, bgcolor: "#fff" }}
      aria-labelledby="faq-heading"
    >
      {/* FAQPage schema — server-rendered, matches visible content */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Container maxWidth="xl" sx={{ py: { xs: 2, md: 4 } }}>
        <Stack
          spacing={1.5}
          alignItems="center"
          textAlign="center"
          mb={{ xs: 5, sm: 6, md: 8 }}
        >
          {/* Question-based H2 for AEO */}
          <Typography
            id="faq-heading"
            component="h2"
            sx={{
              fontWeight: 800,
              fontSize: { xs: 24, sm: 28, md: "2.8rem" },
              lineHeight: 1.2,
              color: "#0a1628",
              maxWidth: 780,
              px: { xs: 1, sm: 0 },
            }}
          >
            Frequently Asked Questions
          </Typography>

          <Typography
            sx={{
              color: "#555",
              fontSize: { xs: 14, md: 16 },
              maxWidth: 640,
              lineHeight: 1.6,
            }}
          >
            Quick answers about BluAI, VitalsChair™, compliance, and integrations.
          </Typography>
        </Stack>

        {faqs.map((faq, i) => (
          <Accordion
            key={i}
            sx={{
              mb: 2,
              boxShadow: "none",
              border: "1px solid #eee",
              borderRadius: 2,
              "&:before": { display: "none" },
            }}
          >
            <AccordionSummary expandIcon={<ArrowDownwardIcon />}>
              {/* Question as H3 for AEO */}
              <Typography component="h3" sx={{ fontWeight: 600 }}>
                {faq.q}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ color: "#555", lineHeight: 1.7 }}>
                {faq.a}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Box>
  );
}