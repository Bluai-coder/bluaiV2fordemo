
"use client";

import { useState, useEffect } from "react";
import { Box, Container, Typography, Button, Card, CardContent } from "@mui/material";
import { useRouter } from "next/navigation";

// Single images that will slide one by one


export default function PortfolioShowcase() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);



  return (
    <Box sx={{ width: "100%" }}>
      {/* ===== HERO / BANNER ===== */}
      <Box
        sx={{
          width: "100%",
          background: "radial-gradient(circle at 70% 50%, #0F1E5C 0%, #060B20 45%, #040913 100%)",
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

        <Container maxWidth="xl">
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              gap: { xs: 5, md: 6 },

              // px: { xs: 2, sm: 4, md: 7 },
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
                  maxWidth: 540,
                  mb: 3.5,
                  mx: { xs: "auto", md: 0 },
                }}
              >
                Discover our latest projects, case studies, and innovations
                that are shaping the future of healthcare technology.
              </Typography>

              <Button
                onClick={() => router.push("/gallery")}
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
                  // boxShadow: "0 20px 50px rgba(0,0,0,0.3)",
                }}
              >
                <Box
                  component="img"
                  src={"/hero-popup/work.png"}
                  alt={"alt"}
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