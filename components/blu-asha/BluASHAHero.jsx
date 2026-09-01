"use client";

import React, { useMemo, useState } from "react";
import { Box, Button, Container, Stack, Typography, IconButton } from "@mui/material";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import Image from "next/image";

const slides = [
  {
    id: 1,
    badge: "Welcome To BluASHA™",
    title: "Empowering Rural Health, One Step at a Time",
    subtitle:
      "Enabling Communities with Technology-Driven Care and Dedicated Health Workers...",
    image: "/blu-asha/hero-asha-2.png",
  },
  {
    id: 2,
    badge: "Welcome To BluASHA™",
    title: "Digital Health Management Portal",
    subtitle:
      "Empowering ASHA Workers, Transforming Rural Healthcare, Building Healthier Communities...",
    image: "/blu-asha/hero-asha-1.png",
  },

];


export default function BluASHAHero() {
  const [index, setIndex] = useState(0);

  const active = useMemo(() => slides[index], [index]);

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#2F4AA0", //  main hero blue like screenshot
        position: "relative",
        overflow: "hidden",
        py: { xs: 7, md: 10 },
      }}
    >
      {/*  subtle premium overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(900px 520px at 15% 40%, rgba(255,255,255,0.10), transparent 60%), radial-gradient(900px 520px at 85% 30%, rgba(0,0,0,0.12), transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 6, md: 8 }}
          alignItems="center"
          justifyContent="space-between"
        >
          {/*  LEFT IMAGE */}
          <Box
            sx={{
              flex: 1,
              width: "100%",
              display: "flex",
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            <Box
              sx={{
                width: "100%",
                maxWidth: 520,
                position: "relative",
              }}
            >
              <Image
                src={active.image}
                alt="BluASHA Hero"
                width={520}
                height={420}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                }}
                priority
              />
            </Box>
          </Box>

          {/*  RIGHT CONTENT */}
          <Box
            sx={{
              flex: 1.15,
              width: "100%",
              textAlign: { xs: "center", md: "right" },
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: 14, md: 18 },
                fontWeight: 800,
                color: "rgba(255,255,255,0.92)",
                letterSpacing: 0.3,
                mb: 1.2,
              }}
            >
              {active.badge}
            </Typography>

            <Typography
              sx={{
                fontWeight: 950,
                color: "#fff",
                fontSize: { xs: "2.0rem", sm: "2.7rem", md: "3.8rem" },
                lineHeight: 1.1,
                letterSpacing: -0.8,
                maxWidth: 650,
                ml: "auto",
              }}
            >
              {active.title}
            </Typography>

            <Typography
              sx={{
                mt: 2.2,
                fontSize: { xs: 13.5, md: 15.5 },
                lineHeight: 1.85,
                color: "rgba(255,255,255,0.85)",
                maxWidth: 600,
                ml: "auto",
              }}
            >
              {active.subtitle}
            </Typography>

            {/*  Bottom arrow buttons like screenshot */}
            <Stack
              direction="row"
              spacing={2}
              sx={{
                mt: { xs: 4, md: 5 },
                justifyContent: { xs: "center", md: "flex-end" },
              }}
            >
              <CircleArrowButton onClick={handlePrev} icon={<ArrowBackRoundedIcon />} />
              <CircleArrowButton onClick={handleNext} icon={<ArrowForwardRoundedIcon />} />
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

/* -------------------- Small Component -------------------- */

function CircleArrowButton({ onClick, icon }) {
  return (
    <IconButton
      onClick={onClick}
      sx={{
        width: 54,
        height: 54,
        borderRadius: "50%",
        bgcolor: "rgba(255,255,255,0.95)",
        color: "#2F4AA0",
        border: "1px solid rgba(255,255,255,0.22)",
        boxShadow: "0 18px 45px rgba(0,0,0,0.22)",
        transition: "all .25s ease",
        "&:hover": {
          bgcolor: "#fff",
          transform: "translateY(-2px)",
          boxShadow: "0 25px 65px rgba(0,0,0,0.30)",
        },
      }}
    >
      {icon}
    </IconButton>
  );
}
