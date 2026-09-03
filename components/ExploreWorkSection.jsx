
"use client";

import { useState, useEffect } from "react";
import { Box, Container, Typography, Button, Card, CardContent } from "@mui/material";
import { useRouter } from "next/navigation";

// Single images that will slide one by one
const sliderImages = [
  { src: "/hero-popup/chair.webp", alt: "Team working" },
  { src: "/hero-popup/pole.webp", alt: "Healthcare tech" },
  { src: "/hero-popup/child.webp", alt: "Tablet interface" },
  { src: "/hero-popup/box.webp", alt: "Lab equipment" },
];

const projects = [
  {
    name: "Smart Pole™",
    description: "AI-enabled health kiosk for public spaces and rural communities.",
    iconBg: "#F3E8FF",
    iconColor: "#7C3AED",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3z" stroke="currentColor" strokeWidth="1.8" fill="none" />
        <circle cx="12" cy="11" r="2.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "BluNotes™",
    description: "AI medical scribe that automates clinical notes and documentation.",
    iconBg: "#FEE2E2",
    iconColor: "#DC2626",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" stroke="currentColor" strokeWidth="1.8" fill="none" />
        <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    name: "BluAccess™",
    description: "Secure patient portal for seamless data access and engagement.",
    iconBg: "#FFEDD5",
    iconColor: "#EA580C",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <rect x="5" y="11" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M8 11V8a4 4 0 018 0v3" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    name: "BluDMS™",
    description: "Intelligent document management for healthcare enterprises.",
    iconBg: "#FEF3C7",
    iconColor: "#D97706",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" stroke="currentColor" strokeWidth="1.8" fill="none" />
      </svg>
    ),
  },
];

export default function PortfolioShowcase() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  // Auto slide one image at a time
  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % sliderImages.length);
        setIsFading(false);
      }, 400);
    }, 3500); // change every 3.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Box sx={{ width: "100%" }}>
      {/* ===== HERO / BANNER ===== */}
      <Box
        sx={{
          width: "100%",
          bgcolor: "#0B1220",
          position: "relative",
          overflow: "hidden",
          py: { xs: 6, md: 9 },
        }}
      >
        {/* soft glow accents */}
        <Box
          sx={{
            position: "absolute",
            top: -80,
            right: -60,
            width: 420,
            height: 420,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(59,130,246,0.18) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: -100,
            left: -40,
            width: 360,
            height: 360,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              gap: { xs: 5, md: 6 },
            }}
          >
            {/* Left content */}
            <Box
              sx={{
                width: { xs: "100%", md: "48%" },
                textAlign: { xs: "center", md: "left" },
                zIndex: 1,
              }}
            >
              {/* OUR WORK badge */}
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1,
                  mb: 2.5,
                }}
              >
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: "2px",
                    bgcolor: "#1b4dff",
                  }}
                />
                <Typography
                  sx={{
                    color: "#94A3B8",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  Our Work
                </Typography>
              </Box>

              {/* Title */}
              <Typography
                component="h2"
                sx={{
                  fontWeight: 800,
                  fontSize: {
                    xs: "2.1rem",
                    sm: "2.5rem",
                    md: "2.85rem",
                    lg: "3.15rem",
                  },
                  lineHeight: 1.15,
                  mb: 2.5,
                  letterSpacing: "-0.02em",
                }}
              >
                <Box component="span" sx={{ color: "#FFFFFF" }}>
                  Explore Our
                </Box>
                <br />
                <Box component="span" sx={{ color: "#1b4dff" }}>
                  Latest Work
                </Box>
              </Typography>

              <Typography
                sx={{
                  color: "#94A3B8",
                  fontSize: { xs: "0.95rem", md: "1.05rem" },
                  lineHeight: 1.65,
                  maxWidth: 440,
                  mb: 3.5,
                  mx: { xs: "auto", md: 0 },
                }}
              >
                Discover our latest projects, case studies, and innovations
                that are shaping the future of healthcare technology.
              </Typography>

              <Button
                onClick={() => router.push("/portfolio")}
                variant="contained"
                sx={{
                  bgcolor: "#1b4dff",
                  color: "#fff",
                  px: 3.5,
                  py: 1.35,
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  borderRadius: { xs: "21px", md: "21px" },
                  textTransform: "none",
                  boxShadow: "0 8px 24px rgba(27,77,255,0.35)",
                  "&:hover": {
                    bgcolor: "#163ed6",
                    boxShadow: "0 12px 28px rgba(27,77,255,0.45)",
                  },
                }}
              >
                Explore More →
              </Button>
            </Box>

            {/* Right side – SINGLE IMAGE AUTO SLIDER */}
            <Box
              sx={{
                width: { xs: "100%", md: "52%" },
                position: "relative",
                zIndex: 1,
              }}
            >
              {/* Main image container */}
              <Box
                sx={{
                  position: "relative",
                  borderRadius: 3,
                  overflow: "hidden",
                  height: { xs: 280, sm: 340, md: 400 },
                  boxShadow: "0 20px 50px rgba(0,0,0,0.3)",
                }}
              >
                <Box
                  component="img"
                  src={sliderImages[currentIndex].src}
                  alt={sliderImages[currentIndex].alt}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    opacity: isFading ? 0.25 : 1,
                    transition: "opacity 0.4s ease",
                  }}
                />
              </Box>

          
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ===== PRODUCT CARDS ===== */}
      <Box sx={{ bgcolor: "#F8FAFC", py: { xs: 6, md: 8 } }}>
    
      </Box>
    </Box>
  );
}