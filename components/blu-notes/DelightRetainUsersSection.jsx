"use client";

import React from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

import PsychologyRoundedIcon from "@mui/icons-material/PsychologyRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import HeadphonesRoundedIcon from "@mui/icons-material/HeadphonesRounded";

export default function DelightRetainUsersSection() {
  const points = [
    {
      strong: "Ambient Documentation:",
      text: "Automatically generate comprehensive clinical notes from natural conversations.",
    },
    {
      strong: "Speech Recognition:",
      text: "Medical-grade voice recognition tuned for healthcare terminology.",
    },
    {
      strong: "Natural Voice Interaction:",
      text: "Enable intuitive voice commands and queries within your application.",
    },
    {
      strong: "Form Filling:",
      text: "Streamline data entry with intelligent form completion.",
    },
    {
      strong: "Customizable Integration:",
      text: "Maintain your existing UI while adding powerful AI features.",
    },
  ];

  const cards = [
    {
      title: "Better User Experience",
      desc: "Enable clinicians to access AI capabilities and ambiently generate notes directly within your solution.",
      icon: <AutoAwesomeRoundedIcon sx={{ fontSize: 28 }} />,
    },
    {
      title: "Stay Competitive",
      desc: "Partner with a leading AI company to ensure a competitive edge over your competitors.",
      icon: <PsychologyRoundedIcon sx={{ fontSize: 28 }} />,
    },
    {
      title: "Drive Higher Adoption",
      desc: "Offer modern, easy-to-use AI capabilities so clinicians use your EHR to their full potential.",
      icon: <TrendingUpRoundedIcon sx={{ fontSize: 28 }} />,
    },
    {
      title: "Ambient Listening",
      desc: "Built directly within your application for seamless documentation.",
      icon: <HeadphonesRoundedIcon sx={{ fontSize: 28 }} />,
    },
  ];

  return (
    <Box
      sx={{
        position: "relative",
        py: { xs: 7, md: 10 },
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
            "radial-gradient(950px 520px at 15% 10%, rgba(27,77,255,0.12), transparent 60%), radial-gradient(820px 520px at 85% 20%, rgba(27,77,255,0.08), transparent 60%), linear-gradient(180deg, #ffffff 0%, #fbfcff 100%)",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative" }}>
        {/*  Section Title */}
                     <Stack alignItems="center" textAlign="center" spacing={1.2} sx={{ mb: { xs: 5, md: 7 } }}>
                          <Typography
                            sx={{
                              fontSize: { xs: 24, sm: 30, md: 36 },
                              fontWeight: 900,
                              color: "#061534",
                              letterSpacing: -0.5,
                            }}
                          >
                              Delight and retain your users with AI
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

        {/*  Top 2 columns */}
        <Box sx={{ mt: { xs: 5, md: 6 } }}>
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={{ xs: 5, md: 6 }}
            alignItems="stretch"
          >
            {/* LEFT */}
            <Paper
              elevation={0}
              sx={{
                flex: 1,
                p: { xs: 3, md: 4 },
                borderRadius: 5,
                border: "1px solid rgba(227,232,255,0.95)",
                bgcolor: "rgba(255,255,255,0.80)",
                backdropFilter: "blur(12px)",
                boxShadow: "0 22px 70px rgba(15,23,42,0.08)",
              }}
            >
              <IconBadge icon={<PsychologyRoundedIcon />} />

              <Typography
                sx={{
                  mt: 2.2,
                  fontSize: { xs: 20, md: 22 },
                  fontWeight: 500,
                  color: "#0B1220",
                }}
              >
                Transform Your Healthcare Application
              </Typography>

              <Typography
                sx={{
                  mt: 2,
                  fontSize: 14.2,
                  lineHeight: 1.9,
                  color: "rgba(7,18,44,0.65)",
                  maxWidth: 560,
                }}
              >
                BluNotes Platform offers a robust SDK and suite of APIs to integrate
                powerful AI and ambient capabilities into your healthcare applications.
                Whether you want to incorporate world-class ambient documentation,
                natural voice interaction, or medically-tuned dictation capabilities,
                BluNotes Platform allows you to augment your solutions with AI and voice.
              </Typography>

              <LearnMoreLink />
            </Paper>

            {/* RIGHT */}
            <Paper
              elevation={0}
              sx={{
                flex: 1,
                p: { xs: 3, md: 4 },
                borderRadius: 5,
                border: "1px solid rgba(227,232,255,0.95)",
                bgcolor: "rgba(255,255,255,0.80)",
                backdropFilter: "blur(12px)",
                boxShadow: "0 22px 70px rgba(15,23,42,0.08)",
              }}
            >
              <IconBadge icon={<FavoriteRoundedIcon />} />

              <Typography
                sx={{
                  mt: 2.2,
                  fontSize: { xs: 20, md: 22 },
                  fontWeight: 500,
                  color: "#0B1220",
                }}
              >
                Transform Your Healthcare Application
              </Typography>

              <Stack spacing={1.35} sx={{ mt: 2.2 }}>
                {points.map((p) => (
                  <PointItem key={p.strong} strong={p.strong} text={p.text} />
                ))}
              </Stack>

              <LearnMoreLink />
            </Paper>
          </Stack>
        </Box>

        {/*  Bottom Cards */}
        <Box sx={{ mt: { xs: 6, md: 7 } }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                lg: "repeat(4, 1fr)",
              },
              gap: { xs: 2.5, md: 3 },
            }}
          >
            {cards.map((c) => (
              <Paper
                key={c.title}
                elevation={0}
                sx={{
                  p: { xs: 3, md: 3.2 },
                  borderRadius: 5,
                  border: "1px solid rgba(227,232,255,0.95)",
                  bgcolor: "rgba(255,255,255,0.88)",
                  backdropFilter: "blur(10px)",
                  boxShadow: "0 18px 60px rgba(15,23,42,0.07)",
                  transition: "all .25s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 32px 90px rgba(15,23,42,0.12)",
                    borderColor: "rgba(27,77,255,0.22)",
                  },
                }}
              >
                <Box
                  sx={{
                    width: 52,
                    height: 52,
                    borderRadius: 4,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    bgcolor: "rgba(27,77,255,0.10)",
                    border: "1px solid rgba(27,77,255,0.18)",
                    color: "#1B4DFF",
                  }}
                >
                  {c.icon}
                </Box>

                <Typography
                  sx={{
                    mt: 2.2,
                    fontSize: 18,
                    fontWeight: 500,
                    color: "#07122C",
                    lineHeight: 1.25,
                  }}
                >
                  {c.title}
                </Typography>

                <Typography
                  sx={{
                    mt: 1.4,
                    fontSize: 13.8,
                    lineHeight: 1.85,
                    color: "rgba(7,18,44,0.65)",
                  }}
                >
                  {c.desc}
                </Typography>

                <Box sx={{ mt: 2.2 }}>
                  <LearnMoreLink small />
                </Box>
              </Paper>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

/* ---------------- Small Components ---------------- */

function IconBadge({ icon }) {
  return (
    <Box
      sx={{
        width: 52,
        height: 52,
        borderRadius: 4,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "rgba(27,77,255,0.10)",
        border: "1px solid rgba(27,77,255,0.18)",
        color: "#1B4DFF",
      }}
    >
      {React.cloneElement(icon, { sx: { fontSize: 26 } })}
    </Box>
  );
}

function PointItem({ strong, text }) {
  return (
    <Stack direction="row" spacing={1.2} alignItems="flex-start">
      <CheckCircleRoundedIcon
        sx={{
          fontSize: 20,
          mt: "2px",
          color: "#1B4DFF",
          flexShrink: 0,
        }}
      />

      <Typography
        sx={{
          fontSize: 13.7,
          lineHeight: 1.85,
          color: "rgba(7,18,44,0.72)",
        }}
      >
        <Box component="span" sx={{ fontWeight: 900, color: "#0B1220" }}>
          {strong}
        </Box>{" "}
        {text}
      </Typography>
    </Stack>
  );
}

function LearnMoreLink({ small = false }) {
  return (
    <Button
      variant="text"
      endIcon={<ArrowForwardRoundedIcon />}
      sx={{
        mt: small ? 0 : 3.2,
        px: 0,
        minWidth: "auto",
        width: "fit-content",
        textTransform: "none",
        fontWeight: 800,
        fontSize: small ? 13.2 : 13.5,
        color: "#1B4DFF",
        "&:hover": { bgcolor: "transparent" },
        "& .MuiButton-endIcon": {
          transition: "transform .2s ease",
        },
        "&:hover .MuiButton-endIcon": {
          transform: "translateX(3px)",
        },
      }}
    >
      Learn More
    </Button>
  );
}
