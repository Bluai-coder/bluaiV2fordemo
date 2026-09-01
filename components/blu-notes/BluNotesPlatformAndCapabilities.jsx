"use client";

import React, { useMemo, useState } from "react";
import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import MicNoneRoundedIcon from "@mui/icons-material/MicNoneRounded";
import GraphicEqRoundedIcon from "@mui/icons-material/GraphicEqRounded";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";

import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";

/* ---------------- MAIN EXPORT ---------------- */

export default function BluNotesPlatformAndCapabilities() {
  return (
    <Box sx={{ bgcolor: "#fff", py: { xs: 7, md: 10 } }}>
      <Container maxWidth="lg">
        <BluNotesPlatformTop />
        <Box sx={{ height: { xs: 28, md: 44 } }} />
        <CapabilitiesCarousel />
      </Container>
    </Box>
  );
}

/* ---------------- SECTION 1: BluNotes Platform ---------------- */

function BluNotesPlatformTop() {
  const platformCards = useMemo(
    () => [
      {
        title: "Rapid Integration",
        desc:
          "Partner with a leading AI company to ensure your solution stays ahead of the competition.",
      },
      {
        title: "Flexible Implementation",
        desc:
          "Embed BluNotes Assistant directly into your EHR or incorporate select capabilities while maintaining your UI.",
      },
      {
        title: "Competitive Advantage",
        desc:
          "Partner with a leading AI company to ensure your solution stays ahead of the competition.",
      },
    ],
    []
  );

  return (
    <Box>
      {/* Heading */}
      <SectionHeading
        title="BluNotes Platform"
        subtitle="AI-Enable Your Solution"
      />

      {/* Cards */}
      <Box
        sx={{
          mt: { xs: 4, md: 5 },
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
          gap: { xs: 2.2, md: 3 },
        }}
      >
        {platformCards.map((c) => (
          <PremiumInfoCard key={c.title} title={c.title} desc={c.desc} />
        ))}
      </Box>
    </Box>
  );
}

/* ---------------- SECTION 2: Capabilities (Carousel) ---------------- */

function CapabilitiesCarousel() {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  const items = useMemo(
    () => [
      {
        title: "Ambient Documentation",
        desc: `Automatically generates clinical notes by listening to patient-clinician conversations. No clicking, no typing — just natural conversation while BluNotes captures everything accurately.`,
        icon: <MicNoneRoundedIcon sx={{ fontSize: 34 }} />,
      },
      {
        title: "Voice Commands & Dictation",
        desc: `Complete tasks hands-free with voice commands. Dictate notes, pull up schedules, retrieve patient data, and navigate your EHR — all through natural voice interaction.`,
        icon: <GraphicEqRoundedIcon sx={{ fontSize: 34 }} />,
      },
      {
        title: "Intelligent Coding Support",
        desc: `Get ICD-10 and HCC coding recommendations automatically. BluNotes understands medical context and suggests appropriate codes, improving accuracy and capturing more revenue.`,
        icon: <DescriptionRoundedIcon sx={{ fontSize: 34 }} />,
      },
      {
        title: "EHR-Ready Workflow Automation",
        desc: `Streamline chart completion with structured outputs and consistent formatting built for clinician review and enterprise workflows.`,
        icon: <DescriptionRoundedIcon sx={{ fontSize: 34 }} />,
      },
      {
        title: "Clinical Intelligence",
        desc: `Surface relevant insights, clinical entities, and documentation guidance in real time — aligned with safety and compliance requirements.`,
        icon: <GraphicEqRoundedIcon sx={{ fontSize: 34 }} />,
      },
      {
        title: "Secure by Design",
        desc: `Built with enterprise-grade practices to support clinical teams with confidence while keeping workflows efficient and controlled.`,
        icon: <MicNoneRoundedIcon sx={{ fontSize: 34 }} />,
      },
    ],
    []
  );

  //  3 cards per page on desktop, 1 card per page on mobile
  const perPage = isMdUp ? 3 : 1;
  const totalPages = Math.ceil(items.length / perPage);

  const [page, setPage] = useState(0);

  const pageItems = items.slice(page * perPage, page * perPage + perPage);

  const prev = () => setPage((p) => (p === 0 ? totalPages - 1 : p - 1));
  const next = () => setPage((p) => (p === totalPages - 1 ? 0 : p + 1));

  return (
    <Box>
      {/* Heading */}
      <SectionHeading title="Complete AI Assistant Capabilities" />

      {/* Cards */}
      <Box sx={{ mt: { xs: 4, md: 5 }, position: "relative" }}>
        {/* Desktop arrows (hidden on mobile) */}
        {isMdUp && totalPages > 1 && (
          <>
            <ArrowButton side="left" onClick={prev} />
            <ArrowButton side="right" onClick={next} />
          </>
        )}

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
            gap: { xs: 2.2, md: 3 },
          }}
        >
          {pageItems.map((it) => (
            <CapabilityCard key={it.title} item={it} />
          ))}
        </Box>

        {/* Dots */}
        <Stack
          direction="row"
          spacing={1}
          justifyContent="center"
          sx={{ mt: { xs: 4, md: 5 } }}
        >
          {Array.from({ length: totalPages }).map((_, i) => {
            const active = i === page;
            return (
              <Box
                key={i}
                onClick={() => setPage(i)}
                sx={{
                  cursor: "pointer",
                  width: active ? 26 : 8,
                  height: 8,
                  borderRadius: 99,
                  transition: "all .25s ease",
                  bgcolor: active ? "#1B4DFF" : "rgba(7,18,44,0.16)",
                }}
              />
            );
          })}
        </Stack>

        {/* Mobile "Next / Prev" buttons (optional premium control) */}
        {!isMdUp && totalPages > 1 && (
          <Stack
            direction="row"
            spacing={1.2}
            justifyContent="center"
            sx={{ mt: 2.2 }}
          >
            <Button
              size="small"
              variant="outlined"
              onClick={prev}
              startIcon={<KeyboardArrowLeftRoundedIcon />}
              sx={{
                textTransform: "none",
                fontWeight: 800,
                borderRadius: 99,
                borderColor: "rgba(27,77,255,0.30)",
                color: "#1B4DFF",
                "&:hover": { borderColor: "#1B4DFF" },
              }}
            >
              Prev
            </Button>
            <Button
              size="small"
              variant="contained"
              onClick={next}
              endIcon={<KeyboardArrowRightRoundedIcon />}
              sx={{
                textTransform: "none",
                fontWeight: 800,
                borderRadius: 99,
                bgcolor: "#1B4DFF",
                boxShadow: "0 16px 35px rgba(27,77,255,0.22)",
                "&:hover": { bgcolor: "#143FE0" },
              }}
            >
              Next
            </Button>
          </Stack>
        )}
      </Box>
    </Box>
  );
}

/* ---------------- SMALL UI COMPONENTS ---------------- */

function SectionHeading({ title, subtitle }) {
  return (
    <Box textAlign="center">
      <Stack alignItems="center" textAlign="center" spacing={1.2} sx={{ mb: { xs: 5, md: 7 } }}>
        <Typography
          sx={{
            fontSize: { xs: 24, sm: 30, md: 36 },
            fontWeight: 900,
            color: "#061534",
            letterSpacing: -0.5,
          }}
        >
          {title}
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
        {subtitle && (<Typography
          sx={{
            mt: 2,
            fontSize: 14.2,
            color: "rgba(7,18,44,0.65)",
          }}
        >
          {subtitle}
        </Typography>)}
      </Stack>
    </Box>


  );
}

function PremiumInfoCard({ title, desc }) {
  return (
    <Paper
      elevation={0}
      sx={{
        p: { xs: 2.8, md: 3.2 },
        borderRadius: 4,
        border: "1px solid rgba(227,232,255,0.95)",
        bgcolor: "#fff",
        boxShadow: "0 18px 55px rgba(15,23,42,0.08)",
        transition: "all .25s ease",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 30px 80px rgba(15,23,42,0.12)",
        },
      }}
    >
      <Typography
        sx={{
          fontWeight: 900,
          color: "#07122C",
          fontSize: { xs: 18, md: 20 },
          textAlign: "center",
          mb: 1.2,
        }}
      >
        {title}
      </Typography>

      <Typography
        sx={{
          color: "rgba(7,18,44,0.62)",
          fontSize: 13.6,
          lineHeight: 1.85,
          textAlign: "center",
          maxWidth: 360,
          mx: "auto",
        }}
      >
        {desc}
      </Typography>
    </Paper>
  );
}

function CapabilityCard({ item }) {
  return (
    <Paper
      elevation={0}
      sx={{
        p: { xs: 2.8, md: 3.2 },
        borderRadius: 4,
        border: "1px solid rgba(227,232,255,0.95)",
        bgcolor: "#fff",
        minHeight: { xs: 260, md: 280 },
        boxShadow: "0 20px 60px rgba(15,23,42,0.08)",
        transition: "all .25s ease",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0 35px 90px rgba(15,23,42,0.12)",
        },
      }}
    >
      <Stack direction="row" spacing={2.2} alignItems="flex-start">
        {/* Icon */}
        <Box
          sx={{
            width: 54,
            height: 54,
            borderRadius: 3,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#1B4DFF",
            bgcolor: "rgba(27,77,255,0.08)",
            border: "1px solid rgba(27,77,255,0.16)",
            flexShrink: 0,
          }}
        >
          {item.icon}
        </Box>

        {/* Text */}
        <Box sx={{ minWidth: 0 }}>
          <Typography
            sx={{
              fontWeight: 900,
              fontSize: 16.5,
              color: "#07122C",
              lineHeight: 1.2,
            }}
          >
            {item.title}
          </Typography>

          <Typography
            sx={{
              mt: 1.5,
              fontSize: 13.8,
              lineHeight: 1.85,
              color: "rgba(7,18,44,0.62)",
              fontStyle: "italic",
            }}
          >
            {item.desc}
          </Typography>
        </Box>
      </Stack>
    </Paper>
  );
}

function ArrowButton({ side = "left", onClick }) {
  const isLeft = side === "left";

  return (
    <Box
      onClick={onClick}
      sx={{
        position: "absolute",
        top: "45%",
        transform: "translateY(-50%)",
        left: isLeft ? -18 : "auto",
        right: isLeft ? "auto" : -18,
        width: 42,
        height: 42,
        borderRadius: "50%",
        bgcolor: "rgba(255,255,255,0.85)",
        border: "1px solid rgba(227,232,255,0.95)",
        boxShadow: "0 18px 50px rgba(15,23,42,0.12)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        zIndex: 2,
        transition: "all .2s ease",
        "&:hover": {
          bgcolor: "#fff",
          transform: "translateY(-50%) scale(1.06)",
        },
      }}
    >
      {isLeft ? (
        <KeyboardArrowLeftRoundedIcon sx={{ color: "#1B4DFF", fontSize: 26 }} />
      ) : (
        <KeyboardArrowRightRoundedIcon sx={{ color: "#1B4DFF", fontSize: 26 }} />
      )}
    </Box>
  );
}
