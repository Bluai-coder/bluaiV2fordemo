"use client";

import React from "react";
import { Box, Container, Paper, Stack, Typography } from "@mui/material";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AssuredWorkloadIcon from "@mui/icons-material/AssuredWorkload";
import DomainIcon from "@mui/icons-material/Domain";
import { CheckCircleIcon } from "lucide-react";


const leftPoints = [
  `By incorporating proprietary technologies like BluID™ for secure biometric authentication, BluVitals™ for continuous physiological monitoring, and BluNotes™ for automated clinical documentation with natural language processing capabilities, BluHealth™ dramatically reduces clinician cognitive load while enhancing diagnostic precision and treatment efficacy.`,
  `The platform's interoperability framework establishes friction less communication between traditionally siloed healthcare entities—enabling real-time synchronization across pharmacy systems, pathology laboratories, advanced imaging modalities, and diagnostic services. This comprehensive integration occurs within a zero-trust security architecture that places patients at the nexus of their health information ecosystem, empowering them with granular consent management while maintaining HIPAA and international regulatory compliance.`,
  `BluHealth™ represents the culmination of medical informatics evolution—where sophisticated algorithms augment clinical decision-making without replacing provider intuition, where longitudinal patient data becomes actionable intelligence, and where healthcare delivery achieves true patient-provider collaborative governance.`


]

const rightPoints = [
  `Our patented BluID™ authentication system employs multi-factor biometric verification combined with blockchain-secured credentialing to ensure unprecedented security while maintaining frictionless access across care settings. The BluVitals™ monitoring infrastructure provides continuous physiological telemetry with real-time anomaly detection, enabling preemptive clinical intervention before symptomatic manifestation—transforming reactive care models into proactive health management paradigms.`,
  `
The BluNotes™ natural language processing engine automatically generates structured clinical documentation from provider-patient interactions, eliminating redundant data entry while ensuring comprehensive capture of meaningful clinical insights. Concurrently, BluImaging™ leverages advanced computer vision algorithms to enhance radiological interpretation, providing quantitative analysis that augments diagnostic precision while seamlessly integrating with existing PACS and RIS infrastructures.
`,
  `
Healthcare interoperability achieves unprecedented sophistication through our FHIR-compliant integration framework, which establishes bidirectional communication channels between pharmacies, laboratories, imaging centers, and ancillary services. This comprehensive integration occurs within a zero-trust security architecture that maintains full HIPAA, GDPR, and international regulatory compliance while enabling granular patient control over health information exchange.`,
  `
The The MedChat™ interface provides context-aware clinical decision support at the point of care, synthesizing evidence-based guidelines with patient-specific data to generate personalized therapeutic recommendations. This cognitive augmentation dramatically reduces diagnostic latency while optimizing pharmacological selection and dosing parameters.`,
  `
BluHealth™ Portal embodies the quintessential nexus of medical science and information technology—where advanced algorithms augment clinical acumen, where longitudinal patient data transforms into actionable intelligence, and where healthcare delivery achieves unprecedented efficiency without sacrificing the fundamental humanity of the patient-provider relationship.`

]



export default function BluHealthClient() {
  const topCards = [
    {
      title: "AI powered Clinical Module",
      subtitle: "BluNotes™ Clinical Decision Support Clinician's Order Management",
      icon: <LocalHospitalIcon />,
    },
    {
      title: "AI powered Diagnostics Module",
      subtitle: "BluImaging™ Laboratory Results Pathology Integration",
      icon: <FavoriteBorderIcon />,
    },
    {
      title: "AI powered Patient Module",
      subtitle: "BluVitals™ Health Timeline Consent Management",
      icon: <AssuredWorkloadIcon />,
    },
    {
      title: "AI powered Administrative Module",
      subtitle: "BluAccess™ Billing and Claims Resource Management",
      icon: <DomainIcon />,
    },

  ];




  function PointItem({ text }) {






  

    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          gap: 2,
        }}
      >

        {/*  Fixed icon column (always aligned) */}
        <Box
          sx={{
            width: 34,              // fixed column width
            display: "flex",
            justifyContent: "center",
            flexShrink: 0,
            pt: "2px",              // aligns icon with first text line
          }}
        >
          <Box
            sx={{
              width: 22,
              height: 22,
              borderRadius: "50%",
              // border: "2px solid rgba(7,18,44,0.35)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: "#fff",
            }}
          >
            <CheckCircleIcon className="!text-[#1b4dff]" sx={{ fontSize: 15, color: "#1b4dff" }} />
          </Box>
        </Box>

        {/*  Text column */}
        <Typography
          sx={{
            fontSize: 16,
            lineHeight: 1.9,
            color: "rgba(7,18,44,0.78)",
            whiteSpace: "pre-line",
            flex: 1,
          }}
        >
          {text.trim()}
        </Typography>
      </Box>
    );
  }





  return (<>
    <Box
      sx={{
        position: "relative",
        py: { xs: 7, md: 11 },
        bgcolor: "#F7F9FF",
        overflow: "hidden",
      }}
    >
      {/*  Very light tech background */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          opacity: 0.35,
          backgroundImage:
            "radial-gradient(rgba(27,77,255,0.22) 0.6px, transparent 0.6px)",
          backgroundSize: "20px 20px",
          pointerEvents: "none",
        }}
      />

      {/*  Soft overlay fade to match screenshot */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(247,249,255,0.8) 0%, rgba(247,249,255,0.95) 55%, rgba(247,249,255,1) 100%)",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative" }}>
        {/*  Title */}
        <Box textAlign="center" mb={{ xs: 4, md: 6 }}>
          <Typography
            sx={{
              fontSize: { xs: "2rem", md: "2.6rem" },
              fontWeight: 950,
              color: "#07122C",
              lineHeight: 1.1,
            }}
          >
            BluHealth™ Portal

          </Typography>

          <Typography
            sx={{
              mt: 1,
              fontSize: { xs: 18, md: 22 },
              fontWeight: 500,
              color: "#1B4DFF",
            }}
          >
            Healthcare Intelligence Engine is built

          </Typography>

          <Typography
            sx={{
              mt: 0.7,
              fontSize: 15,
              color: "rgba(7,18,44,0.55)",
            }}
          >
            on modern day LLMs and Agentic AI


          </Typography>
        </Box>

        {/*  TOP ROW (5 cards) */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: { xs: 2, md: 2.5 },
            justifyContent: "center",
          }}
        >
          {topCards.map((card) => (
            <EcosystemCard
              key={card.title}
              title={card.title}
              subtitle={card.subtitle}
              icon={card.icon}
              size="small"
            />
          ))}
        </Box>

        {/*  BOTTOM ROW (3 large cards) */}

      </Container>
    </Box>
    {/* about section */}
    <Box sx={{ py: { xs: 7, md: 11 }, bgcolor: "#fff" }}>
      <Container maxWidth="lg">
        {/*  Center Title */}
        <Box textAlign="center" mb={{ xs: 4, md: 6 }}>
          <Typography
            sx={{
              fontSize: { xs: "1.8rem", md: "2.2rem" },
              fontWeight: 950,
              color: "#07122C",
              lineHeight: 1.1,
            }}
          >
            About Us

          </Typography>
          <Typography
            sx={{
              fontWeight: 100,
              fontSize: { xs: "1 rem", md: "1 rem" },
              color: "#948e8e",
              mb: 1.2,
            }}
          >
            BluHealth™ Portal: Redefining Healthcare Informatics


          </Typography>
        </Box>

        {/*  2 Columns (No Grid) */}
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 4.5, md: 7 }}
          alignItems="flex-start"
        >
          {/* LEFT COLUMN */}
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Typography
              sx={{
                fontWeight: 900,
                fontSize: { xs: "1.15rem", md: "1.3rem" },
                color: "#0B2FD6",
                mb: 1.2,
              }}
            >
              BluHealth™ Portal: Redefining Healthcare Informatics
            </Typography>

            <Typography
              sx={{
                fontSize: 16,
                lineHeight: 1.85,
                color: "rgba(7,18,44,0.70)",
                mb: 2.6,
              }}
            >
              The BluHealth™ Portal represents a paradigm shift in clinical informatics—transcending traditional electronic medical record systems through sophisticated integration of artificial intelligence and patient-centric architecture. This next-generation EMR/EHR/HIS ecosystem leverages advanced large language models and agentic AI infrastructure to create a seamless healthcare delivery platform that operates with unprecedented reliability and efficiency.            </Typography>

            <Stack spacing={2.2}>
              {leftPoints.map((text, idx) => (
                <PointItem key={idx} text={text} />
              ))}
            </Stack>
          </Box>

          {/* RIGHT COLUMN */}
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Typography
              sx={{
                fontWeight: 900,
                fontSize: { xs: "1.15rem", md: "1.3rem" },
                color: "#0B2FD6",
                mb: 1.2,
              }}
            >
              BluHealth™: Revolutionizing Healthcare Informatics
            </Typography>

            <Typography
              sx={{
                fontSize: 16,
                lineHeight: 1.85,
                color: "rgba(7,18,44,0.70)",
                mb: 2.6,
              }}
            >
              BluHealth™ Portal represents the quintessential evolution in healthcare information systems—a sophisticated convergence of advanced artificial intelligence, clinical expertise, and patient empowerment. This revolutionary platform transcends traditional EMR/EHR/HIS architectures by seamlessly integrating proprietary machine learning algorithms with agentic AI workflows, creating a synergistic ecosystem that eliminates operational inefficiencies while dramatically enhancing clinical outcomes.            </Typography>

            <Stack spacing={2.2}>
              {rightPoints.map((text, idx) => (
                <PointItem key={idx} text={text} />
              ))}
            </Stack>
          </Box>
        </Stack>
        <Box className='!text-center mt-5' sx={{ minWidth: 0 }}>
          <Typography
            sx={{
              fontWeight: 900,
              fontSize: { xs: "1.15rem", md: "1.3rem" },
              color: "#0B2FD6",
              mb: 1.2,
            }}
          >
            Manage. My Health. My Way.™
          </Typography>



        </Box>
      </Container>
    </Box>



  </>
  );
}

/* ---------------- Card Component ---------------- */

function EcosystemCard({ icon, title, subtitle, size = "small" }) {
  const isLarge = size === "large";

  return (
    <Paper
      elevation={0}
      sx={{
        width: {
          xs: "100%",
          sm: isLarge ? "calc(50% - 10px)" : "calc(50% - 10px)",
          md: isLarge ? "calc(33.33% - 14px)" : "calc(20% - 16px)",
        },
        minWidth: { md: isLarge ? 260 : 190 },
        borderRadius: 3,
        bgcolor: "rgba(255,255,255,0.78)",
        border: "1px solid rgba(227,232,255,0.95)",
        boxShadow: "0 18px 55px rgba(15,23,42,0.10)",
        textAlign: "center",
        px: { xs: 2.2, md: 2.4 },
        py: { xs: 3, md: 3.3 },
        transition: "0.25s ease",
        backdropFilter: "blur(14px)",
        "&:hover": {
          transform: "translateY(-6px)",
          borderColor: "rgba(27,77,255,0.35)",
          boxShadow: "0 30px 85px rgba(27,77,255,0.14)",
        },
      }}
    >
      {/* icon */}
      <Box
        sx={{
          width: 46,
          height: 46,
          mx: "auto",
          mb: 2,
          borderRadius: 3,
          bgcolor: "rgba(27,77,255,0.10)",
          border: "1px solid rgba(27,77,255,0.14)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#1B4DFF",
        }}
      >
        {React.cloneElement(icon, { sx: { fontSize: 22 } })}
      </Box>

      <Typography
        sx={{
          fontWeight: 900,
          fontSize: 14.2,
          color: "#07122C",
          lineHeight: 1.25,
        }}
      >
        {title}
      </Typography>

      <Typography
        sx={{
          mt: 1,
          fontSize: 12.8,
          color: "rgba(7,18,44,0.55)",
          lineHeight: 1.5,
        }}
      >
        {subtitle}
      </Typography>
    </Paper>
  );
}
