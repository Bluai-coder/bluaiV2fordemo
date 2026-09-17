
"use client";

import Image from "next/image";
import { keyframes } from "@mui/system";
import { useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useSwipeable } from "react-swipeable";
import RequestDemoModal from "./popups/RequestDemoModal";
import { Box, Container, Typography, IconButton, useTheme, useMediaQuery, Button, Stack, Chip } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";




const fadeInUp = keyframes`
  0% { opacity: 0; transform: translateY(30px); }
  100% { opacity: 1; transform: translateY(0); }
`;

// ==================== DATA (COMPLETELY UNCHANGED FROM YOUR ORIGINAL) ====================
const products = [
  {
    id: 1,
    icon: "/logos/white/BluVital-logo.png",
    title: "VitalsChair™",
    image: "/hero-popup/chair.png",
    category: "Clinical Solutions",
    description: `Introducing <strong> VitalsChair™ </strong>, a groundbreaking innovation in patient health assessments—designed to deliver a complete set of vital measurements in a single, effortless sitting. Built with <strong>precision </strong>, powered by <strong>AI</strong>, and seamlessly <strong>integrated </strong> with the BluHealth™ Portal, VitalsChair™ redefines the way healthcare professionals collect, analyze, and monitor patient health data.`,
    slug: "products/vitals-chair",
    gradient: "linear-gradient(135deg, #1b4dff, #66a6ff)",
    glow: "rgba(102,166,255, 0.55)",
    textColor: "#89f7fe",
    features: ["AI-Powered Analytics", "Real-time Monitoring", "Seamless Integration"],
  },
  {
    id: 9,
    icon: "/logos/white/pole.png",
    title: "VitalsPole™",
    image: "/hero-popup/pole.png",
    category: "Clinical Solutions",
    description: `Smart patient monitoring pole, multi-vital health tracking`,
    slug: "products/vitals-pole",
    gradient: "linear-gradient(135deg, #1b4dff, #66a6ff)",
    glow: "rgba(102,166,255, 0.55)",
    textColor: "#aace46",
    features: ["Multi-vital Tracking", "Mobile Design", "Real-time Alerts"],
  },
  // {
  //   id: 10,
  //   icon: "/logos/white/neonatal.png",
  //   title: "BluNeonatal™",
  //   image: "/hero-popup/child.png",
  //   category: "Clinical Solutions",
  //   description: `BluNeonatal represents the next generation of neonatal intensive care monitoring. Combining advanced medical-grade sensors, precision imaging, and AI-powered analytics, BluNeonatal™ delivers autonomous, continuous monitoring of premature and critically ill newborns. Built with cutting-edge embedded systems and artificial intelligence, it provides real-time telemetry, intelligent alarm management, and predictive analytics to support NICU teams in delivering superior patient outcomes while reducing alarm fatigue and improving workflow efficiency.`,
  //   slug: "products/blu-neonatal",
  //   gradient: "linear-gradient(135deg, #1b4dff, #66a6ff)",
  //   glow: "rgba(102,166,255, 0.55)",
  //   textColor: "#daa351",
  //   features: ["NICU Optimization", "Predictive Analytics", "Alarm Management"],
  // },
  {
    id: 11,
    icon: "/logos/white/briefcase.png",
    title: "VitalsBriefcase™",
    image: "/hero-popup/box.png",
    category: "Clinical Solutions",
    description: `Smart patient monitoring Briefcase for instant, multi-vital health tracking`,
    slug: "products/vitals-briefcase",
    gradient: "linear-gradient(135deg, #1b4dff, #66a6ff)",
    glow: "rgba(102,166,255, 0.55)",
    textColor: "#bb78e2",
    features: ["Portable Design", "Instant Assessment", "Clinical Accuracy"],
  },


  {
    id: 4,
    icon: "/logos/white/BluHealth-logo.png",
    title: "BluHealth™",
    image: "/hero-popup/bluhealth.png",
    category: "Digital Health Platform",
    description: `The BluHealth™ Portal represents a paradigm shift in clinical informatics—transcending traditional electronic medical record systems through sophisticated integration of artificial intelligence and patient-centric architecture. This next-generation EMR/EHR/HIS ecosystem leverages advanced large language models and agentic AI infrastructure to create a seamless healthcare delivery platform that operates with unprecedented reliability and efficiency.`,
    slug: "products/blu-health",
    gradient: "linear-gradient(135deg, #1b4dff, #66a6ff)",
    glow: "rgba(102,166,255, 0.55)",
    textColor: "#43e97b",
    features: ["AI-powered EMR", "Patient-centric", "Agentic AI"],
  },
  {
    id: 2,
    icon: "/logos/white/BluNotes-logo.png",
    title: "BluNotes™",
    image: "/hero-popup/blunotes.png",
    category: "Community Health",
    description: `BluNotes is an innovative medical conversation capture and documentation system that seamlessly connects mobile devices and computers to transform patient-provider conversations into structured medical documentation.`,
    slug: "products/blu-notes",
    gradient: "linear-gradient(135deg, #1b4dff, #66a6ff)",
    glow: "rgba(102,166,255, 0.55)",
    textColor: "#f093fb",
    features: ["Conversation Capture", "AI Documentation", "Multi-device Sync"],
  },
  {
    id: 6,
    icon: "/logos/white/BluMental-logo.png",
    title: "BluMental™",
    image: "/hero-popup/blumental.png",
    category: "Mental Wellness",
    description: `The BluHealth Mental Health module delivers real-time, AI-driven assessments that help clinicians evaluate, interpret, and act on patient mental health data with confidence. Using clinically validated screening tools enhanced by explainable AI, the platform instantly analyzes patient responses to generate structured insights, severity scoring, and care guidance—right at the point of care.`,
    slug: "products/blu-mental-health",
    gradient: "linear-gradient(135deg, #1b4dff, #66a6ff)",
    glow: "rgba(102,166,255, 0.55)",
    textColor: "#a18cd1",
    features: ["AI Assessments", "Mental Health", "Real-time Insights"],
  },

  {
    id: 3,
    icon: "/logos/white/BluAccess-logo.png",
    image: "/hero-popup/face.png",
    title: "BluAccess™",
    category: "Access & Security",
    description: `BluAccess™ delivers unparalleled operational intelligence through its comprehensive suite of features, including customizable access zones, multi-factor authentication protocols, and dynamic permissions management—all while maintaining detailed audit trails for regulatory compliance`,
    slug: "products/blu-access",
    gradient: "linear-gradient(135deg, #1b4dff, #66a6ff)",
    glow: "rgba(102,166,255, 0.55)",
    textColor: "#4facfe",
    features: ["Access Control", "MFA Authentication", "Audit Trails"],
  },

  {
    id: 8,
    icon: "/logos/white/BluAsha-logo.png",
    title: "BluASHA™",
    image: "/blu-asha/hero-asha-2.png",
    category: "AI Clinical Documentation",
    description: `ASHA workers spend 40% of their time on manual record-keeping and reporting, reducing time available for actual healthcare delivery. Critical health data gets lost, delayed, or becomes illegible.Rural areas lack reliable internet connectivity, making digital health systems unusable when workers need them most. Existing solutions fail when connectivity is poor or absent.`,
    slug: "products/blu-asha",
    gradient: "linear-gradient(135deg, #1b4dff, #66a6ff)",
    glow: "rgba(102,166,255, 0.55)",
    textColor: "#667eea",
    features: ["Offline Capable", "AI Documentation", "Time Saving"],
  },




  {
    id: 5,
    icon: "/logos/white/BluId-logo.png",
    title: "BluID™",
    image: "/hero-popup/bluid.png",
    category: "Digital Identity",
    description: `BluID™ is a revolutionary 14-digit unique bio-medical identifier that transforms healthcare management by centralizing your complete medical profile in one secure digital location. This unified medical identity system empowers patients with unprecedented control over their health data while streamlining healthcare delivery across the entire ecosystem of providers, laboratories, and insurers.`,
    slug: "products/blu-id",
    gradient: "linear-gradient(135deg, #1b4dff, #66a6ff)",
    glow: "rgba(102,166,255, 0.55)",
    textColor: "#fa709a",
    features: ["Data Control", "Secure Access"],

  },


  {
    id: 7,
    icon: "/logos/white/BluDms-logo.png",
    title: "BluDMS™",
    image: "/hero-popup/bludms.png",
    category: "Secure Communication",
    description: `BluDMS™ represents the pinnacle of clinical document architecture innovation—a sophisticated medical document ecosystem that transcends traditional information management paradigms through the seamless integration of artificial intelligence and advanced natural language processing. This revolutionary platform eliminates the cognitive burden of document management that historically plagues healthcare professionals, transforming unstructured clinical documentation into actionable medical intelligence.`,
    slug: "products/blu-dms",
    gradient: "linear-gradient(135deg, #1b4dff, #66a6ff)",
    glow: "rgba(102,166,255, 0.55)",
    textColor: "#fccb90",
    features: ["AI Documentation", "Secure Communication"],

  },

];



// ==================== COMPONENT ====================
export default function HeroSection() {
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [openDemo, setOpenDemo] = useState(false);

  const totalCards = products.length;


  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      setCurrentIndex((prev) => (prev + 1) % totalCards);
      setIsAutoScrolling(false);
      setTimeout(() => setIsAutoScrolling(true), 5000);
    },
    onSwipedRight: () => {
      setCurrentIndex((prev) => (prev - 1 + totalCards) % totalCards);
      setIsAutoScrolling(false);
      setTimeout(() => setIsAutoScrolling(true), 5000);
    },
    trackMouse: true,
    preventScrollOnSwipe: true,
  });

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalCards) % totalCards);
    setIsAutoScrolling(false);
    setTimeout(() => setIsAutoScrolling(true), 5000);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalCards);
    setIsAutoScrolling(false);
    setTimeout(() => setIsAutoScrolling(true), 5000);
  };

  const activeProduct = products[currentIndex];

  return (
    <Box
      {...swipeHandlers}
      sx={{
        height: { xs: "100vh", sm: "70vh", md: "100vh" },
        width: "100%",
        overflow: "hidden",
        position: "relative",
        background: "radial-gradient(circle at 70% 50%, #0F1E5C 0%, #060B20 45%, #040913 100%)",
        color: "#fff",
      }}
    >
      {/* ================== SUBTLE GLOW ORBS ================== */}
      <Box sx={{
        position: "absolute",
        top: { xs: "5%", sm: "10%" },
        right: { xs: "10%", sm: "20%" },
        width: { xs: 300, sm: 400, md: 600 },
        height: { xs: 300, sm: 400, md: 600 },
        bgcolor: "rgba(27, 77, 255, 0.1)",
        borderRadius: "50%",
        filter: "blur(100px)",
        zIndex: 0
      }} />
      <Box sx={{
        position: "absolute",
        bottom: { xs: "5%", sm: "10%" },
        left: { xs: "5%", sm: "10%" },
        width: { xs: 200, sm: 300, md: 400 },
        height: { xs: 200, sm: 300, md: 400 },
        bgcolor: "rgba(255, 255, 255, 0.05)",
        borderRadius: "50%",
        filter: "blur(80px)",
        zIndex: 0
      }} />

      {/* ================== CONTENT WRAPPER ================== */}
      <Container
        maxWidth="xl"
        sx={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          display: "flex",
          alignItems: "center",
          flexDirection: { xs: "column", sm: "row" },
          py: { xs: 2, sm: 0 },
          marginTop: { xs: 3, sm: 0, md: 4, lg: 8, xl: 0 }
        }}
      >
        {/* LEFT SIDE: DYNAMIC PRODUCT TEXT */}
        <Box
          key={currentIndex}
          sx={{
            width: { xs: "100%", sm: "55%", md: "55%" },
            textAlign: { xs: "center", sm: "left" },
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", sm: "flex-start" },
            justifyContent: "center",
            height: { xs: "50%", sm: "100%" },
            mt: { xs: 4, sm: 0, md: 0 }
          }}
        >
          {/* Top Small Category */}
          <Typography
            sx={{
              fontSize: { xs: "10px", sm: "12px" },
              fontWeight: 700,
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "#1b4dff",
              mb: { xs: 1.5, sm: 2, md: 3 },
              display: "flex",
              alignItems: "center",
              gap: 1,
              animation: `${fadeInUp} 0.6s ease-out both`,
            }}
          >
            AI • {activeProduct.category.toUpperCase()}
          </Typography>

          {/* Dynamic Product Title */}
          <Typography
            sx={{
              fontSize: {
                xs: "clamp(24px, 5vw, 32px)",
                sm: "clamp(40px, 6vw, 50px)",
                md: "clamp(60px, 7vw, 80px)"
              },
              fontWeight: 800,
              lineHeight: { xs: 1.1, sm: 0.95 },
              color: "white",
              letterSpacing: { xs: "-1px", sm: "-2px", md: "-3px" },
              mb: { xs: 1.5, sm: 2, md: 3 },
              textAlign: { xs: "center", sm: "left" },
              animation: `${fadeInUp} 0.6s ease-out 0.1s both`,
            }}
          >
            {activeProduct.title}
          </Typography>

          {/* Dynamic Description */}
          <Typography
            sx={{
              color: "rgba(255,255,255,0.8)",
              fontSize: { xs: "12px", sm: "16px", md: "20px" },
              maxWidth: { xs: "90%", sm: "400px", md: "550px" },
              mb: { xs: 3, sm: 4, md: 6 },
              lineHeight: 1.6,
              fontWeight: 400,
              textAlign: { xs: "center", sm: "left" },
              animation: `${fadeInUp} 0.6s ease-out 0.2s both`,
            }}
            dangerouslySetInnerHTML={{
              __html: activeProduct.description.substring(0, 297) + ".",
            }}


          >

          </Typography>

          {/* CTA Buttons */}
          <Stack
            direction={{ xs: "row", sm: "row" }}
            spacing={{ xs: 1, sm: 2 }}
            alignItems={{ xs: "center", sm: "flex-start" }}
            sx={{
              width: { xs: "100%", sm: "auto" },
              animation: `${fadeInUp} 0.6s ease-out 0.3s both`,
            }}
          >
            <Button
              variant="contained"
              size="large"
              onClick={() => setOpenDemo(true)}
              sx={{
                background: "#ffffff",
                color: "#040913",
                px: { xs: 3, sm: 4 },
                py: { xs: 1, sm: 1.5 },
                fontWeight: 700,
                fontSize: { xs: "9px", sm: "15px" },
                borderRadius: "50px",
                textTransform: "none",
                width: { xs: "100%", sm: "auto" },
                boxShadow: "0 10px 40px rgba(255,255,255,0.2)",
                "&:hover": { transform: "translateY(-2px)", background: "#e0e0e0" }
              }}
            >
              Request a demo →
            </Button>

            <Button
              variant="outlined"
              size="large"
              onClick={() => router.push(`/${activeProduct.slug}`)}
              sx={{
                px: { xs: 3, sm: 4 },
                py: { xs: 1, sm: 1.5 },
                fontWeight: 700,
                fontSize: { xs: "9px", sm: "15px" },
                borderRadius: "50px",
                textTransform: "none",
                width: { xs: "100%", sm: "auto" },
                border: "1px solid rgba(255,255,255,0.4)",
                color: "#fff",
                bgcolor: "rgba(255,255,255,0.05)",
                "&:hover": { borderColor: "#fff", bgcolor: "rgba(255,255,255,0.1)" }
              }}
            >
              Explore our products →
            </Button>
          </Stack>

          <Stack

            direction="row"
            spacing={{ sx: 2, sm: 4, md: 4 }}
            sx={{
              display: {
                xs: "none",
                sm: "flex",
                md: "flex",
                lg: "flex",
                xl: "flex",

              },
              marginTop: { xs: 2, sm: 4, md: 6 },
              padding: {
                xs: 2,
                sm: 3,
                md: 4
              },
              borderTop: "1px solid rgba(255,255,255,0.15)",
              width: "100%",
              maxWidth: "100%",
              alignItems: "flex-start",
            }}

          >


            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
              {activeProduct.features.map((feature, idx) => (
                <Chip
                  key={idx}
                  icon={<CheckCircleIcon sx={{ fontSize: 14 }} />}
                  label={feature ? feature : "Feature not available"}
                  sx={{
                    bgcolor: feature ? "rgba(49, 123, 207, 0.3)" : "rgba(255,107,107,0.06)",
                    color: feature ? "white" : "#ff6b6b",
                    fontWeight: 500,
                    "& .MuiChip-icon": {
                      color: feature ? "white" : "#ff6b6b",
                    },
                  }}
                />
              ))}
            </Box>

          </Stack>

        </Box>

        {/* RIGHT SIDE: FLOATING PRODUCT IMAGE */}
        <Box
          sx={{
            width: { xs: "100%", sm: "45%", md: "45%" },
            height: { xs: "33vh", sm: "60vh", md: "70vh" },
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: { xs: "center", sm: "flex-end" },
            mt: { xs: -3, sm: -5, md: 0 },
            mb: { xs: 2, sm: 0 },
          }}
        >
          {products.map((product, idx) => (
            <Box
              key={product.id}
              sx={{
                position: "absolute",
                inset: 0,
                opacity: idx === currentIndex ? 1 : 0,
                transition: "opacity 0.5s ease",
                pointerEvents: idx === currentIndex ? "auto" : "none",
              }}
            >
              <Image
                src={product.image}
                alt={product.title}
                fill
                sizes="(max-width: 600px) 80vw, 45vw"
                priority={idx === 0}            // only the first one
                loading={idx === 0 ? "eager" : "lazy"}
                style={{ objectFit: "contain", filter: "drop-shadow(0 30px 60px rgba(0,0,0,0.6))" }}
              />
            </Box>
          ))}


          {activeProduct.title === "BluNotes™" && (
            <Box
              component="a"
              href="https://blunotes.bluai.ai/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                position: "absolute",
                bottom: { xs: 4, sm: -10, md: 0, lg: -15 , xl : 0 },
                right: { xs: 16, sm: 140, md: 180, lg : "60%", xl: 190 },
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "flex-start", sm: "flex-start" },
                maxWidth: { xs: "100%", sm: 260, md: 300 },
                pl: { xs: 0, sm: 2, md: 2 },
                textDecoration: "none",
                cursor: "pointer",
                zIndex: 3,
                animation: `${fadeInUp} 0.6s ease-out 0.5s both`,
                transition: "all 0.3s ease",

                "&:hover": {
                  transform: "translateY(-2px)",
                },

                "&:hover .title": {
                  color: activeProduct.textColor,
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "7px", sm: "10px", md: "11px" },
                  fontWeight: 700,
                  letterSpacing: { xs: "1.5px", md: "2px" },
                  textTransform: "uppercase",
                  color: activeProduct.textColor,
                  opacity: 0.9,
                  mb: 0.5,
                  whiteSpace: "nowrap",
                }}
              >
                LIVE DEMO
              </Typography>

              <Typography
                className="title"
                sx={{
                  fontSize: { xs: "11px", sm: "14px", md: "16px", lg: "18px" },
                  fontWeight: 800,
                  color: "#fff",
                  lineHeight: 1.25,
                  transition: "color 0.3s ease",
                  textShadow: "0 1px 6px rgba(0,0,0,0.35)",
                  wordBreak: "break-word",
                }}
              >
                Experience BluNotes™
              </Typography>
            </Box>
          )}

          {/* ================== FEATURED SYSTEM LABEL ================== */}
          <Box
            key={`label-${currentIndex}`}
            sx={{
              position: "absolute",
              bottom: { xs: -5, sm: -10, md: -10, lg: -20, xl: -10 },
              right: { xs: "10%", sm: "10%", md: "5%", lg : "100%", xl: "5%" },
              textAlign: "left",
              borderLeft: `2px solid ${activeProduct.textColor}`,
              pl: 2,
              animation: `${fadeInUp} 0.6s ease-out 0.5s both`,
              display: { xs: "none", sm: "block" },
            }}
          >
            <Typography sx={{
              fontSize: { xs: "8px", sm: "10px" },
              fontWeight: 800,
              letterSpacing: "1.5px",
              color: activeProduct.textColor,
              mb: 0.5
            }}>
              FEATURED SYSTEM
            </Typography>
            <Typography sx={{
              fontSize: { xs: "11px", sm: "14px" },
              fontWeight: 800,
              color: "#fff",
              mb: 0.5
            }}>
              {activeProduct.title}
            </Typography>
          </Box>
        </Box>
      </Container>

      {/* ================== CAROUSEL CONTROLS ================== */}
      <Box
        sx={{
          position: "absolute",
          bottom: { xs: "20px", sm: "30px", md: "50px" , lg : "5px", xl: "50px" },
          right: { xs: "50%", sm: "30px", md: "60px" , lg : "60px", xl: "60px" },
          transform: { xs: "translateX(50%)", sm: "none" },
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          gap: { xs: 1.5, sm: 2 },
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <Stack direction="row" spacing={1} alignItems="center">
          {products.map((_, index) => {
            const isActive = currentIndex === index;
            return (
              <Box
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoScrolling(false);
                  setTimeout(() => setIsAutoScrolling(true), 5000);
                }}
                sx={{
                  width: { xs: isActive ? 30 : 6, sm: isActive ? 40 : 8 },
                  height: { xs: 6, sm: 8 },
                  borderRadius: "50px",
                  background: isActive ? "#1b4dff" : "rgba(255,255,255,0.3)",
                  cursor: "pointer",
                  transition: "all 0.4s cubic-bezier(0.22, 0.61, 0.36, 1)",
                  "&:hover": { bgcolor: "rgba(255,255,255,0.7)" }
                }}
              />
            );
          })}
        </Stack>
        <Stack direction="row" spacing={1}>
          <IconButton
            onClick={handlePrev}
            sx={{
              color: "#fff",
              border: "1px solid rgba(255,255,255,0.2)",
              bgcolor: "rgba(255,255,255,0.05)",
              width: { xs: 35, sm: 40, md: 45 },
              height: { xs: 35, sm: 40, md: 45 },
              "&:hover": { bgcolor: "rgba(255,255,255,0.15)" },
            }}
          >
            <ChevronLeftIcon sx={{ fontSize: { xs: 20, sm: 24 } }} />
          </IconButton>
          <IconButton
            onClick={handleNext}
            sx={{
              color: "#fff",
              border: "1px solid rgba(255,255,255,0.2)",
              bgcolor: "rgba(255,255,255,0.05)",
              width: { xs: 35, sm: 40, md: 45 },
              height: { xs: 35, sm: 40, md: 45 },
              "&:hover": { bgcolor: "rgba(255,255,255,0.15)" },
            }}
          >
            <ChevronRightIcon sx={{ fontSize: { xs: 20, sm: 24 } }} />
          </IconButton>
        </Stack>
      </Box>

      <RequestDemoModal open={openDemo} onClose={() => setOpenDemo(false)} />
    </Box>
  );
}