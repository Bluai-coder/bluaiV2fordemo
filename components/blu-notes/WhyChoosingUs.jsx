"use client";

import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import GraphicEqRoundedIcon from "@mui/icons-material/GraphicEqRounded";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import LocalHospitalRoundedIcon from "@mui/icons-material/LocalHospitalRounded";

export default function WhyChoosingUs() {
  const [active, setActive] = useState("Emergency Care");

  const reasons = [
    {
      title: "Save Time",
      icon: <AccessTimeRoundedIcon />,
      points: [
        "Reduce documentation time by 60%",
        "Eliminate after-hours charting",
        "Automate repetitive documentation tasks",
        "Focus more time on patient care",
      ],
    },
    {
      title: "Enhance Patient Experience",
      icon: <FavoriteBorderRoundedIcon />,
      points: [
        "Maintain eye contact and engagement",
        "Demonstrate active listening",
        "Provide more personalized care",
        "Improve patient satisfaction scores",
      ],
    },
    {
      title: "Improve Quality",
      icon: <VerifiedRoundedIcon />,
      points: [
        "Ensure comprehensive documentation",
        "Reduce transcription errors",
        "Capture detailed patient information",
        "Support better clinical decision-making",
      ],
    },
  ];

  const bottomCards = [
    {
      title: "Real-Time Transcription",
      icon: <GraphicEqRoundedIcon />,
      points: [
        "Instantly converts speech to text with 98%+ accuracy",
        "Identifies different speakers for clear attribution",
        "Supports specialized medical terminology across specialties",
      ],
    },
    {
      title: "AI-Powered Documentation",
      icon: <DescriptionRoundedIcon />,
      points: [
        "Automatically generates structured SOAP notes",
        "Extracts medical entities (symptoms, diagnoses, medications)",
        "Creates visit summaries and follow-up recommendations",
        "Provides clinical documentation suggestions",
      ],
    },
  ];

  return (
    <Box sx={{ py: { xs: 7, md: 11 }, bgcolor: "#fff" }}>
      <Container maxWidth="lg">
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
            Why Choosing Us!
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

          <Typography sx={{ fontSize: 13.5, color: "rgba(7,18,44,0.65)" }}>
            Few Reasons Why People Choosing Us!
          </Typography>
        </Stack>

        {/*  Main layout: Left Image Card + Right Reasons */}
        <Stack
          direction={{ xs: "column", lg: "row" }}
          spacing={{ xs: 4, md: 5 }}
          alignItems="stretch"
          justifyContent="space-between"
        >
          {/*  LEFT SIDE */}
          <Box sx={{ flex: 1.25, minWidth: 0 }}>
            {/* Image Card */}
            <Box sx={{ position: "relative", borderRadius: 4, overflow: "hidden" }}>
              <Box
                component="img"
                src="/blu-notes/why-choose1.webp" //  change this path
                alt="Why Choosing Us"
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  borderRadius: "16px",
                }}
              />

              {/* Premium overlay tint */}
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(90deg, rgba(27,77,255,0.55) 0%, rgba(27,77,255,0.20) 30%, rgba(0,0,0,0.00) 70%)",
                }}
              />

              {/* Floating Badge */}
              <Paper
                elevation={0}
                sx={{
                  position: "absolute",
                  top: 26,
                  left: 28,
                  px: 2.2,
                  py: 1.3,
                  borderRadius: 99,
                  bgcolor: "rgba(255,255,255,0.92)",
                  border: "1px solid rgba(227,232,255,0.95)",
                  boxShadow: "0 18px 55px rgba(15,23,42,0.18)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1.2,
                }}
              >
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    bgcolor: "rgba(27,77,255,0.10)",
                    border: "1px solid rgba(27,77,255,0.20)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#1B4DFF",
                    flexShrink: 0,
                  }}
                >
                  <LocalHospitalRoundedIcon sx={{ fontSize: 20 }} />
                </Box>

                <Typography sx={{ fontWeight: 900, color: "#061534", fontSize: 13.5 }}>
                  {active}
                </Typography>
              </Paper>
            </Box>

            {/*  Bottom Cards */}
            <Box sx={{ mt: { xs: 4, md: 5 } }}>
              <Stack
                direction={{ xs: "column", md: "row" }}
                spacing={3}
                alignItems="stretch"
              >
                {bottomCards.map((card) => (
                  <Paper
                    key={card.title}
                    elevation={0}
                    sx={{
                      flex: 1,
                      p: { xs: 2.4, md: 3 },
                      borderRadius: 4,
                      border: "1px solid rgba(227,232,255,0.95)",
                      boxShadow: "0 14px 40px rgba(15,23,42,0.06)",
                      bgcolor: "rgba(255,255,255,0.95)",
                      transition: "all .25s ease",
                      "&:hover": {
                        transform: "translateY(-6px)",
                        borderColor: "rgba(27,77,255,0.30)",
                        boxShadow: "0 28px 70px rgba(15,23,42,0.12)",
                      },
                    }}
                  >
                    <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 2 }}>
                      <Box
                        sx={{
                          width: 46,
                          height: 46,
                          borderRadius: "50%",
                          bgcolor: "rgba(27,77,255,0.10)",
                          border: "1px solid rgba(27,77,255,0.20)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#1B4DFF",
                          flexShrink: 0,
                        }}
                      >
                        {card.icon}
                      </Box>

                      <Typography sx={{ fontWeight: 900, color: "#061534", fontSize: 16 }}>
                        {card.title}
                      </Typography>
                    </Stack>

                    <Stack spacing={1.2}>
                      {card.points.map((p) => (
                        <PointItem key={p} text={p} />
                      ))}
                    </Stack>

                    <Button
                      variant="text"
                      sx={{
                        mt: 2.3,
                        textTransform: "none",
                        fontWeight: 800,
                        color: "#1B4DFF",
                        px: 0,
                        justifyContent: "flex-start",
                        "&:hover": { bgcolor: "transparent" },
                      }}
                    >
                      Learn More
                    </Button>
                  </Paper>
                ))}
              </Stack>
            </Box>
          </Box>

          {/*  RIGHT SIDE */}
          <Box sx={{ flex: 0.85, minWidth: 0 }}>
            <Stack spacing={3}>
              {reasons.map((r, idx) => (
                <Paper
                  key={r.title}
                  elevation={0}
                  onMouseEnter={() => setActive(r.title)}
                  sx={{
                    p: { xs: 2.5, md: 3 },
                    borderRadius: 4,
                    bgcolor: "transparent",
                    border: "1px solid transparent",
                    transition: "all .25s ease",
                    cursor: "default",
                    "&:hover": {
                      borderColor: "rgba(27,77,255,0.18)",
                      bgcolor: "rgba(27,77,255,0.02)",
                    },
                  }}
                >
                  <Stack direction="row" spacing={2.2} alignItems="flex-start">
                    <Box
                      sx={{
                        width: 54,
                        height: 54,
                        borderRadius: "50%",
                        bgcolor: "rgba(27,77,255,0.10)",
                        border: "1px solid rgba(27,77,255,0.22)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#1B4DFF",
                        flexShrink: 0,
                      }}
                    >
                      {r.icon}
                    </Box>

                    <Box sx={{ flex: 1 }}>
                      <Typography
                        sx={{
                          fontWeight: 900,
                          fontSize: 18,
                          color: "#061534",
                        }}
                      >
                        {r.title}
                      </Typography>

                      <Stack spacing={1.1} sx={{ mt: 1.6 }}>
                        {r.points.map((p) => (
                          <PointItem key={p} text={p} />
                        ))}
                      </Stack>

                      <Button
                        variant="text"
                        sx={{
                          mt: 2.2,
                          textTransform: "none",
                          fontWeight: 800,
                          color: "#1B4DFF",
                          px: 0,
                          justifyContent: "flex-start",
                          "&:hover": { bgcolor: "transparent" },
                        }}
                      >
                        Learn More
                      </Button>

                      {/* divider line like screenshot */}
                      {idx !== reasons.length - 1 && (
                        <Divider sx={{ mt: 3, borderColor: "rgba(7,18,44,0.10)" }} />
                      )}
                    </Box>
                  </Stack>
                </Paper>
              ))}
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

/*  Bullet Point Item (Aligned Correct) */
function PointItem({ text }) {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 1.2,
        alignItems: "flex-start",
      }}
    >
      <CheckCircleRoundedIcon
        sx={{
          fontSize: 19,
          mt: "2px",
          color: "#1B4DFF",
          flexShrink: 0,
        }}
      />

      <Typography
        sx={{
          fontSize: 13.7,
          lineHeight: 1.85,
          color: "rgba(7,18,44,0.70)",
        }}
      >
        {text}
      </Typography>
    </Box>
  );
}
