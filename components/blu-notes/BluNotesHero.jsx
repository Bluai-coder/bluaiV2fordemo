"use client";

import React, { useRef, useState } from "react";
import {
  Box,
  Container,
  IconButton,
  Modal,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

export default function BluNotesHero() {
  const [open, setOpen] = useState(false);
  const videoRef = useRef(null);

  const videoSrc = "/blu-notes/blunotes-story.mp4"; //  put in public/videos/
  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    setOpen(false);

    //  Pause + reset video when closing (premium behavior)
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        bgcolor: "#fff",
        py: { xs: 7, md: 11 },
      }}
    >
      {/*  Soft premium background glow */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(900px 540px at 20% 25%, rgba(27,77,255,0.13), transparent 60%), radial-gradient(700px 520px at 88% 15%, rgba(27,77,255,0.10), transparent 60%), linear-gradient(180deg, #FFFFFF 0%, #F7F9FF 100%)",
        }}
      />

      {/*  floating circles */}
      <FloatingOrb top="12%" left="56%" size={260} opacity={0.18} />
      <FloatingOrb top="62%" left="72%" size={210} opacity={0.14} />
      <FloatingOrb top="22%" left="90%" size={190} opacity={0.14} />
      <FloatingOrb top="78%" left="88%" size={170} opacity={0.12} />

      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 6, md: 7 }}
          alignItems="center"
          justifyContent="space-between"
        >
          {/*  LEFT CONTENT */}
          <Box sx={{ flex: 1.05, minWidth: 0 }}>
            {/* Badge */}
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                px: 2,
                py: 0.85,
                borderRadius: 99,
                bgcolor: "rgba(27,77,255,0.10)",
                border: "1px solid rgba(27,77,255,0.18)",
                mb: 2.6,
              }}
            >
              <ShieldOutlinedIcon sx={{ fontSize: 18, color: "#1B4DFF" }} />
              <Typography
                sx={{
                  fontSize: 12,
                  fontWeight: 900,
                  color: "#1B4DFF",
                  letterSpacing: 0.3,
                }}
              >
                Welcome to BluNotes™
              </Typography>
            </Box>

            {/* Title */}
            <Typography
              sx={{
                fontWeight: 950,
                color: "#07122C",
                fontSize: { xs: "2rem", sm: "2.3rem", md: "3.0rem" },
                lineHeight: 1.1,
                letterSpacing: -0.6,
              }}
            >
              Transform{" "}
              <Box component="span" sx={{ color: "#0B2FD6" }}>
                Medical Documentation
              </Box>{" "}
              with AI-Powered Conversation Capture
            </Typography>

            {/* Description */}
            <Typography
              sx={{
                mt: 2.2,
                fontSize: 14.8,
                lineHeight: 1.95,
                color: "rgba(7,18,44,0.66)",
                maxWidth: 560,
              }}
            >
              BluNotes is an innovative medical conversation capture and documentation system
              that seamlessly connects mobile devices and computers to transform
              patient-provider conversations into structured medical documentation. Using advanced
              AI technology, BluNotes listens to medical conversations, transcribes them in
              real-time, and automatically generates clinical documentation that integrates with
              existing EMR/EHR systems.
            </Typography>

         
          </Box>

          {/*  RIGHT MOCKUP AREA */}
          <Box
            sx={{
              flex: 1,
              minWidth: 0,
              width: "100%",
              display: "flex",
              justifyContent: { xs: "center", md: "flex-end" },
            }}
          >
            <Box sx={{ position: "relative", width: "100%", maxWidth: 720 }}>
              {/* Main Glass Frame */}
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  borderRadius: 6,
                  border: "1px solid rgba(227,232,255,0.95)",
                  bgcolor: "rgba(255,255,255,0.55)",
                  backdropFilter: "blur(14px)",
                  boxShadow: "0 45px 120px rgba(15,23,42,0.18)",
                  overflow: "hidden",
                  p: { xs: 2, md: 2.5 },
                }}
              >
                <Box
                  component="img"
                  src="/hero-popup/blunotes.png"
                  alt="BluNotes Product"
                  sx={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                    borderRadius: 4,
                  }}
                />
              </Box>

              {/* Floating card: Next Available */}
              <Paper
                elevation={0}
                sx={{
                  position: "absolute",
                  top: { xs: 10, md: 20 },
                  right: { xs: 10, md: -22 },
                  width: { xs: 220, md: 260 },
                  borderRadius: 4,
                  p: 2,
                  bgcolor: "rgba(255,255,255,0.92)",
                  border: "1px solid rgba(227,232,255,0.95)",
                  boxShadow: "0 22px 60px rgba(15,23,42,0.14)",
                }}
              >
                <Stack direction="row" spacing={1.4} alignItems="center">
                  <Box
                    sx={{
                      width: 42,
                      height: 42,
                      borderRadius: 3,
                      bgcolor: "rgba(27,77,255,0.10)",
                      border: "1px solid rgba(27,77,255,0.18)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#1B4DFF",
                      flexShrink: 0,
                    }}
                  >
                    <CalendarMonthRoundedIcon sx={{ fontSize: 20 }} />
                  </Box>

                  <Box sx={{ minWidth: 0 }}>
                    <Typography sx={{ fontWeight: 950, color: "#07122C", fontSize: 13.5 }}>
                      Next Available
                    </Typography>
                    <Typography sx={{ fontWeight: 900, color: "#0B1220", fontSize: 14 }}>
                      Today 2:30 PM
                    </Typography>
                    <Typography sx={{ mt: 0.4, color: "rgba(7,18,44,0.55)", fontSize: 12.6 }}>
                      Dr. Sarah Johnson
                    </Typography>
                  </Box>
                </Stack>
              </Paper>

              {/* Floating card: Accuracy */}
              <Paper
                elevation={0}
                sx={{
                  position: "absolute",
                  bottom: { xs: 10, md: -18 },
                  left: { xs: 12, md: 26 },
                  width: { xs: 160, md: 185 },
                  borderRadius: 4,
                  p: 2.2,
                  bgcolor: "rgba(255,255,255,0.92)",
                  border: "1px solid rgba(227,232,255,0.95)",
                  boxShadow: "0 22px 60px rgba(15,23,42,0.14)",
                  textAlign: "left",
                }}
              >
                <Stack direction="row" spacing={0.4}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarRoundedIcon key={i} sx={{ fontSize: 18, color: "#F5B400" }} />
                  ))}
                </Stack>

                <Typography
                  sx={{
                    mt: 1,
                    fontWeight: 950,
                    fontSize: 24,
                    lineHeight: 1,
                    color: "#07122C",
                  }}
                >
                  99%
                </Typography>

                <Typography sx={{ mt: 0.8, fontSize: 13, color: "rgba(7,18,44,0.55)" }}>
                  Accuracy Rate
                </Typography>
              </Paper>
            </Box>
          </Box>
        </Stack>
      </Container>

      {/*  Video Popup Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: { xs: 2, md: 4 },
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "100%",
            maxWidth: 1100,
            outline: "none",
          }}
        >
          {/* Close icon */}
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: { xs: -12, md: -14 },
              right: { xs: -12, md: -14 },
              zIndex: 10,
              width: 42,
              height: 42,
              bgcolor: "rgba(0,0,0,0.55)",
              color: "#fff",
              border: "1px solid rgba(255,255,255,0.20)",
              backdropFilter: "blur(10px)",
              "&:hover": { bgcolor: "rgba(0,0,0,0.75)" },
            }}
          >
            <CloseRoundedIcon />
          </IconButton>

          {/* Video box */}
          <Box
            sx={{
              width: "100%",
              borderRadius: 4,
              overflow: "hidden",
              bgcolor: "#000",
              border: "1px solid rgba(255,255,255,0.12)",
              boxShadow: "0 40px 120px rgba(0,0,0,0.55)",
            }}
          >
            <video
              ref={videoRef}
              src={videoSrc}
              controls
              autoPlay
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                background: "#000",
              }}
            />
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}

/* ---------------- Small Background Orb ---------------- */
function FloatingOrb({ top, left, size = 220, opacity = 0.14 }) {
  return (
    <Box
      sx={{
        position: "absolute",
        top,
        left,
        width: size,
        height: size,
        borderRadius: "50%",
        bgcolor: `rgba(27,77,255,${opacity})`,
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
      }}
    />
  );
}
