"use client";

import React from "react";
import { Box, Container, Paper, Stack, Typography } from "@mui/material";

import MicNoneRoundedIcon from "@mui/icons-material/MicNoneRounded";
import GraphicEqRoundedIcon from "@mui/icons-material/GraphicEqRounded";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import LinkRoundedIcon from "@mui/icons-material/LinkRounded";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";

const items = [
  {
    title: "Ambient Documentation",
    desc: "Automatically generate clinical notes from conversations. Focus on patients while BluNotes handles documentation.",
    icon: <MicNoneRoundedIcon />,
  },
  {
    title: "Advanced Dictation",
    desc: "Medical-tuned voice recognition designed for clinical terminology. Available on iOS, Android, web, and desktop.",
    icon: <GraphicEqRoundedIcon />,
  },
  {
    title: "ICD-10 & HCC Coding",
    desc: "Intelligent coding suggestions that improve reimbursement outcomes and ensure accurate documentation.",
    icon: <DescriptionRoundedIcon />,
  },
  {
    title: "Deepest EHR Integration",
    desc: "Bidirectional read/write capabilities with major EHRs. Pull dynamic data and send completed notes seamlessly.",
    icon: <LinkRoundedIcon />,
  },
  {
    title: "Enterprise-Grade Security",
    desc: "SOC2 Type 2 certified & HIPAA compliant. Designed to minimize risk and support clinician review.",
    icon: <ShieldOutlinedIcon />,
  },
  {
    title: "Proven ROI",
    desc: "Proven ROI by month 2. Drive incremental revenue through higher reimbursements and additional encounters.",
    icon: <TrendingUpRoundedIcon />,
  },
];

export default function CompleteAiSolutionPremium() {
  return (
    <Box
      sx={{
        py: { xs: 7, md: 11 },
        position: "relative",
        bgcolor: "#fff",
        overflow: "hidden",
      }}
    >
      {/*  Premium background glow */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(900px 500px at 20% 10%, rgba(27,77,255,0.10), transparent 55%), radial-gradient(700px 520px at 90% 10%, rgba(27,77,255,0.08), transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative" }}>
        {/*  Heading */}

         <Stack alignItems="center" textAlign="center" spacing={1.2} sx={{ mb: { xs: 5, md: 7 } }}>
          <Typography
            sx={{
              fontSize: { xs: 24, sm: 30, md: 36 },
              fontWeight: 900,
              color: "#061534",
              letterSpacing: -0.5,
            }}
          >
            Complete AI Solution for Healthcare
          </Typography>

          {/* underline */}
          <Box sx={{ width: 220, height: 2, bgcolor: "rgba(7,18,44,0.12)", borderRadius: 99 }}>
            <Box
              sx={{
                width: 56,
                height: 2,
                bgcolor: "#1B4DFF",
                borderRadius: 99,
                mx: "auto",
              }}
            />
          </Box>
        </Stack>

        {/*  Cards Grid */}
        <Box
          sx={{
            display: "grid",
            gap: { xs: 2.5, sm: 3 },
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(6, 1fr)",
            },
          }}
        >
          {items.map((item, idx) => (
            <FeatureCard key={item.title} {...item} featured={idx === 5} />
          ))}
        </Box>
      </Container>
    </Box>
  );
}

/* ---------------- Feature Card ---------------- */

function FeatureCard({ icon, title, desc, featured = false }) {
  return (
    <Paper
      elevation={0}
      sx={{
        height: "100%",
        minHeight: 250,
        borderRadius: 4,
        px: 2.2,
        py: 3,
        textAlign: "center",
        border: featured
          ? "1px solid rgba(27,77,255,0.30)"
          : "1px solid rgba(227,232,255,0.90)",
        background: featured
          ? "linear-gradient(180deg, rgba(27,77,255,0.08), rgba(255,255,255,1))"
          : "rgba(255,255,255,0.72)",
        backdropFilter: "blur(10px)",
        boxShadow: featured
          ? "0 18px 50px rgba(27,77,255,0.16)"
          : "0 14px 40px rgba(15,23,42,0.08)",
        transition: "all .25s ease",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0 22px 70px rgba(27,77,255,0.18)",
          borderColor: "rgba(27,77,255,0.28)",
        },
      }}
    >
      {/* Icon */}
      <Box
        sx={{
          width: 66,
          height: 66,
          mx: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          background: "rgba(27,77,255,0.08)",
          border: "1px solid rgba(27,77,255,0.14)",
          color: "#1B4DFF",
          mb: 2.2,
          "& svg": { fontSize: 34 },
        }}
      >
        {icon}
      </Box>

      {/* Title */}
      <Typography
        sx={{
          fontSize: 16.5,
          fontWeight: 900,
          color: "#07122C",
          lineHeight: 1.25,
          minHeight: 44,
        }}
      >
        {title}
      </Typography>

      {/* Desc */}
      <Typography
        sx={{
          mt: 1.4,
          fontSize: 13.5,
          lineHeight: 1.8,
          color: "rgba(7,18,44,0.62)",
          maxWidth: 230,
          mx: "auto",
          display: "-webkit-box",
          overflow: "hidden",
          WebkitLineClamp: 6,
          WebkitBoxOrient: "vertical",
        }}
      >
        {desc}
      </Typography>
    </Paper>
  );
}
