"use client";

import React from "react";
import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import TranslateRoundedIcon from "@mui/icons-material/TranslateRounded";

import MicRoundedIcon from "@mui/icons-material/MicRounded";
import BluetoothRoundedIcon from "@mui/icons-material/BluetoothRounded";
import PsychologyRoundedIcon from "@mui/icons-material/PsychologyRounded";
import ArticleRoundedIcon from "@mui/icons-material/ArticleRounded";
import HubRoundedIcon from "@mui/icons-material/HubRounded";

import ShieldRoundedIcon from "@mui/icons-material/ShieldRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import DevicesRoundedIcon from "@mui/icons-material/DevicesRounded";
import RecordVoiceOverRoundedIcon from "@mui/icons-material/RecordVoiceOverRounded";
import QuestionAnswerRoundedIcon from "@mui/icons-material/QuestionAnswerRounded";
import LockRoundedIcon from "@mui/icons-material/LockRounded";

export default function BluNotesDocumentationSection() {
  const features = [
    {
      title: "Ambient Documentation",
      desc: "Automatically capture and generate clinical notes from patient conversations in real-time.",
      icon: <AccessTimeRoundedIcon />,
    },
    {
      title: "ICD-10 & HCC Coding",
      desc: "Automated coding suggestions to ensure accurate billing and maximize reimbursements.",
      icon: <ShieldRoundedIcon />,
    },
    {
      title: "Multi-Platform Access",
      desc: "Available on iOS, Android, web, and desktop for seamless workflow integration.",
      icon: <DevicesRoundedIcon />,
    },
    {
      title: "AI-Powered Dictation",
      desc: "Advanced voice recognition designed specifically for medical terminology and workflows.",
      icon: <RecordVoiceOverRoundedIcon />,
    },
    {
      title: "Intelligent Q&A",
      desc: "Get instant answers to clinical questions and access relevant medical information.",
      icon: <QuestionAnswerRoundedIcon />,
    },
    {
      title: "Enterprise Security",
      desc: "SOC2 Type 2 aligned and HIPAA ready with advanced AI safety measures.",
      icon: <LockRoundedIcon />,
    },
  ];

  const steps = [
    { n: "1", title: "Capture", sub: "Record on mobile", icon: <MicRoundedIcon /> },
    { n: "2", title: "Stream", sub: "Bluetooth transfer", icon: <BluetoothRoundedIcon /> },
    { n: "3", title: "Process", sub: "AI enhancement", icon: <PsychologyRoundedIcon /> },
    { n: "4", title: "Structure", sub: "SOAP notes", icon: <ArticleRoundedIcon /> },
    { n: "5", title: "Integrate", sub: "EMR/EHR system", icon: <HubRoundedIcon /> },
  ];

  return (
    <Box
      sx={{
        position: "relative",
        py: { xs: 7, md: 11 },
        bgcolor: "#fff",
        overflow: "hidden",
      }}
    >
      {/*  Premium light background */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(800px 500px at 18% 25%, rgba(27,77,255,0.12), transparent 60%), radial-gradient(720px 520px at 80% 18%, rgba(27,77,255,0.10), transparent 60%), linear-gradient(180deg, #FFFFFF 0%, #F6F8FF 100%)",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative" }}>
        {/*  TOP SECTION HEADING */}
        <Stack alignItems="center" textAlign="center" spacing={1.4} sx={{ mb: { xs: 5, md: 7 } }}>
          <Typography
            sx={{
              fontSize: { xs: 22, sm: 28, md: 36 },
              fontWeight: 900,
              color: "#061534",
              letterSpacing: -0.6,
            }}
          >
            The Most Advanced AI Assistant for Healthcare
          </Typography>

          {/* underline */}
          <Box sx={{ width: 220, height: 2, bgcolor: "rgba(7,18,44,0.12)", borderRadius: 99 }}>
            <Box
              sx={{
                width: 60,
                height: 2,
                bgcolor: "#1B4DFF",
                borderRadius: 99,
                mx: "auto",
              }}
            />
          </Box>
        </Stack>

        {/*  HERO CONTENT (NO GRID) */}
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 5, md: 7 }}
          alignItems="center"
          justifyContent="space-between"
          sx={{ mb: { xs: 5, md: 7 } }}
        >
          {/* LEFT */}
          <Box sx={{ flex: 1.05, minWidth: 0 }}>
            <Stack spacing={2.4}>
              <Typography
                sx={{
                  fontSize: { xs: 28, sm: 36, md: 48 },
                  fontWeight: 950,
                  lineHeight: 1.1,
                  color: "#061534",
                  letterSpacing: -0.9,
                }}
              >
                Complete Healthcare
                <br />
                Documentation Solution
              </Typography>

              <Typography
                sx={{
                  fontSize: 16,
                  lineHeight: 1.9,
                  color: "rgba(7,18,44,0.62)",
                  maxWidth: 520,
                }}
              >
                All-in-one AI assistant for ambient documentation, dictation, coding, and more
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: 24, sm: 30, md: 40 },
                  fontWeight: 950,
                  lineHeight: 1.15,
                  color: "#061534",
                  mt: 1,
                }}
              >
                Deepest{" "}
                <Box component="span" sx={{ color: "#1B4DFF" }}>
                  EHR Integration
                </Box>{" "}
                in
                <br />
                the Industry
              </Typography>

              <Typography
                sx={{
                  fontSize: 15,
                  lineHeight: 1.9,
                  color: "rgba(7,18,44,0.62)",
                  maxWidth: 560,
                }}
              >
                Only BluNotes offers bidirectional, read/write capabilities with all major
                EHRs. Prechart in your EHR and finish in BluNotes. Pull the latest vitals
                directly into your notes. Send completed documentation back seamlessly.
                Experience ultimate convenience and flexibility that no other vendor can match.
              </Typography>

              <Box>
                <Button
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    fontWeight: 900,
                    borderRadius: 2.2,
                    px: 3.2,
                    py: 1.2,
                    bgcolor: "#1B4DFF",
                    boxShadow: "0 16px 35px rgba(27,77,255,0.28)",
                    "&:hover": { bgcolor: "#123DE1" },
                  }}
                >
                  Learn More About Us
                </Button>
              </Box>
            </Stack>
          </Box>

          {/* RIGHT IMAGE */}
          <Box sx={{ flex: 1, minWidth: 0, width: "100%" }}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                maxWidth: 650,
                mx: { xs: "auto", md: "0" },
              }}
            >
              {/* Glass frame */}
              <Box
                sx={{
                  borderRadius: 4,
                  overflow: "hidden",
                  border: "1px solid rgba(227,232,255,0.95)",
                  bgcolor: "rgba(255,255,255,0.65)",
                  backdropFilter: "blur(12px)",
                  boxShadow: "0 40px 100px rgba(15,23,42,0.18)",
                }}
              >
                <Box
                  component="img"
                  src="/blu-notes/clinic.webp" //  change this image
                  alt="Healthcare Experience"
                  sx={{
                    width: "100%",
                    height: { xs: 260, sm: 320, md: 360 },
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </Box>

              {/* Top-right badge */}
              <Paper
                elevation={0}
                sx={{
                  position: "absolute",
                  top: 16,
                  right: 14,
                  px: 2.1,
                  py: 1.1,
                  borderRadius: 2.5,
                  bgcolor: "#2E55FF",
                  color: "#fff",
                  boxShadow: "0 18px 55px rgba(46,85,255,0.35)",
                }}
              >
                <Typography sx={{ fontSize: 12.5, fontWeight: 800 }}>
                  Years of Trusted Care
                </Typography>
              </Paper>

              {/* Bottom-left floating card */}
              <Paper
                elevation={0}
                sx={{
                  position: "absolute",
                  left: 16,
                  bottom: -18,
                  px: 2,
                  py: 1.4,
                  borderRadius: 3,
                  bgcolor: "rgba(255,255,255,0.95)",
                  border: "1px solid rgba(227,232,255,0.95)",
                  boxShadow: "0 22px 60px rgba(15,23,42,0.16)",
                  display: "flex",
                  alignItems: "center",
                  gap: 1.2,
                }}
              >
                <Box
                  sx={{
                    width: 42,
                    height: 42,
                    borderRadius: 2.3,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    bgcolor: "rgba(27,77,255,0.10)",
                    border: "1px solid rgba(27,77,255,0.18)",
                    color: "#1B4DFF",
                  }}
                >
                  <TranslateRoundedIcon />
                </Box>

                <Box>
                  <Typography sx={{ fontSize: 13, fontWeight: 900, color: "#061534" }}>
                    80+
                  </Typography>
                  <Typography sx={{ fontSize: 12.5, color: "rgba(7,18,44,0.58)" }}>
                    Languages Supported
                  </Typography>
                </Box>
              </Paper>
            </Box>
          </Box>
        </Stack>

        {/*  FEATURE CARDS (NO GRID - responsive using flexWrap) */}
        <Box sx={{ mt: { xs: 5, md: 8 } }}>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 3,
              justifyContent: "center",
            }}
          >
            {features.map((item) => (
              <Paper
                key={item.title}
                elevation={0}
                sx={{
                  width: {
                    xs: "100%",
                    sm: "calc(50% - 12px)",
                    md: "calc(33.33% - 16px)",
                  },
                  p: 3,
                  borderRadius: 3.5,
                  bgcolor: "rgba(255,255,255,0.92)",
                  border: "1px solid rgba(227,232,255,0.95)",
                  transition: "all .25s ease",
                  boxShadow: "0 16px 40px rgba(15,23,42,0.06)",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 28px 70px rgba(15,23,42,0.12)",
                    borderColor: "rgba(27,77,255,0.28)",
                  },
                }}
              >
                <Box
                  sx={{
                    width: 54,
                    height: 54,
                    borderRadius: "50%",
                    bgcolor: "#1B4DFF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    mx: "auto",
                    mb: 2,
                    boxShadow: "0 16px 35px rgba(27,77,255,0.25)",
                  }}
                >
                  {item.icon}
                </Box>

                <Typography
                  sx={{
                    textAlign: "center",
                    fontSize: 15.5,
                    fontWeight: 900,
                    color: "#061534",
                  }}
                >
                  {item.title}
                </Typography>

                <Typography
                  sx={{
                    mt: 1,
                    textAlign: "center",
                    fontSize: 13.2,
                    lineHeight: 1.8,
                    color: "rgba(7,18,44,0.62)",
                    maxWidth: 290,
                    mx: "auto",
                  }}
                >
                  {item.desc}
                </Typography>
              </Paper>
            ))}
          </Box>
        </Box>

        {/*  BIG PREMIUM PROCESS BAR */}
        <Box sx={{ mt: { xs: 6, md: 9 } }}>
          <Box
            sx={{
              width: "100%",
              borderRadius: 4,
              p: { xs: 3, md: 4 },
              bgcolor: "linear-gradient(180deg, #2C4FFF 0%, #1B4DFF 100%)",
              background: "linear-gradient(180deg, #2C4FFF 0%, #1B4DFF 100%)",
              boxShadow: "0 40px 110px rgba(27,77,255,0.35)",
              overflow: "hidden",
              position: "relative",
            }}
          >
            {/* glow */}
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(800px 250px at 20% 40%, rgba(255,255,255,0.14), transparent 65%)",
              }}
            />

            <Box sx={{ position: "relative" }}>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                sx={{
                  flexWrap: "wrap",
                  gap: { xs: 2.5, md: 0 },
                }}
              >
                {steps.map((s) => (
                  <Box
                    key={s.title}
                    sx={{
                      flex: { xs: "1 1 46%", sm: "1 1 30%", md: "1 1 0" },
                      minWidth: { xs: 150, md: 0 },
                      textAlign: "center",
                      color: "#fff",
                    }}
                  >
                    <Box
                      sx={{
                        width: 52,
                        height: 52,
                        borderRadius: "50%",
                        bgcolor: "rgba(255,255,255,0.16)",
                        border: "1px solid rgba(255,255,255,0.22)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mx: "auto",
                        mb: 1.4,
                        backdropFilter: "blur(10px)",
                      }}
                    >
                      {s.icon}
                    </Box>

                    <Typography sx={{ fontWeight: 900, fontSize: 13.5 }}>
                      {s.n}. {s.title}
                    </Typography>

                    <Typography sx={{ fontSize: 12.2, opacity: 0.9 }}>
                      {s.sub}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
