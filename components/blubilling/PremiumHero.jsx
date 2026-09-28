
"use client";

import {
  Box,
  Container,
  Typography,
  Stack,
  Paper,
  Button,
} from "@mui/material";
import SecurityIcon from "@mui/icons-material/Security";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import VerifiedIcon from "@mui/icons-material/Verified";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { CheckCircleIcon } from "lucide-react";

export default function BluBillingHeroBgImage() {
  const services = [
    "Medical Billing",
    "Healthcare Services",
    "Coding & Audits",
    "Claims Management",
    "Patient Services",
  ];

  const heroBadges = [
    "HIPAA-COMPLIANT",
    "AI-POWERED",
    "REAL-TIME VALIDATION",
  ];

  return (
    <Box
         sx={{
           position: "relative",
           overflow: "hidden",
           bgcolor: "#F7F9FF",
          //  py: { xs: 7, md: 11 },
         }}
       >
         {/*  Soft premium background glow */}
         <Box
           sx={{
             position: "absolute",
             inset: 0,
             opacity: 0.35,
             backgroundImage:
               "radial-gradient(rgba(27,77,255,0.22) 0.6px, transparent 0.6px)",
             backgroundSize: "20px 20px",
             pointerEvents: "none",
           }}
         />
      {/* ================= HERO ================= */}
      <Box
        sx={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          color: "#fff",
          py: { xs: 8, md: 10 },
        }}
      >
        <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1.15fr 1fr" },
              gap: { xs: 6, md: 8 },
              alignItems: "center",
            }}
          >
            {/* ================= LEFT CONTENT ================= */}
            <Box
              sx={{
                minWidth: 0,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              {/* Pill */}
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1,
                  px: 2,
                  py: 0.8,
                  borderRadius: 999,
                  bgcolor: "rgba(27,77,255,0.18)",
                  border: "1px solid rgba(27,77,255,0.4)",
                  mb: 2.5,
                  backdropFilter: "blur(8px)",
                }}
              >
                <AutoAwesomeIcon sx={{ fontSize: 14, color: "#3c71ee" }} />
                <Typography
                  sx={{
                    fontSize: 11,
                    fontWeight: 800,
                    letterSpacing: "0.14em",
                    color: "#2a64eb",
                    textTransform: "uppercase",
                  }}
                >
                  BluBilling™
                </Typography>
              </Box>

              {/* Headline */}
              <Typography
                sx={{
                  fontWeight: 900,
                  color: "black",
                  fontSize: { xs: "2rem", sm: "2.5rem", md: "3.2rem" },
                  lineHeight: 1.12,
                  letterSpacing: "-0.02em",
                  maxWidth: 640,
                  mx: { xs: "auto", md: 0 },
                }}
              >
                AI-Driven Revenue Cycle
                <br />
                Management for{" "}
                <Box
                  component="span"
                  sx={{
                    background:
                      "#1b4dff",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Healthcare.
                </Box>
              </Typography>

              {/* Subtext */}
              <Typography
                sx={{
                  mt: 2.6,
                  fontSize: { xs: 14.5, md: 16.5 },
                  lineHeight: 1.85,
                  color: "rgba(71, 70, 70, 0.78)",
                  maxWidth: 580,
                  mx: { xs: "auto", md: 0 },
                }}
              >
                BluBilling empowers healthcare organizations with intelligent,
                compliance-first automation across the entire Revenue Cycle
                Management lifecycle — reducing denials and accelerating cash
                flow.
              </Typography>

              {/* Small trust row */}
              <Stack
                direction="row"
                alignItems="center"
                spacing={2}
                sx={{ mt: 4, flexWrap: "wrap", gap: 1.5 }}
              >
                {[
                  { icon: <VerifiedIcon />, label: "HIPAA-Aligned" },
                  { icon: <SecurityIcon />, label: "Privacy-by-Design" },
                  { icon: <CheckCircleIcon />, label: "FDA CDS Guidance" },
                ].map((item) => (
                  <Stack
                    key={item.label}
                    direction="row"
                    alignItems="center"
                    spacing={0.8}
                  >
                    <Box
                      sx={{
                        color: "#2563eb",
                        display: "flex",
                        "& svg": { fontSize: 16 },
                      }}
                    >
                      {item.icon}
                    </Box>
                    <Typography
                      sx={{
                        fontSize: 12.5,
                        fontWeight: 700,
                        color: "rgba(15,23,42,0.65)",
                      }}
                    >
                      {item.label}
                    </Typography>
                  </Stack>
                ))}
              </Stack>

              {/* CTAs */}
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                sx={{ mt: 4 }}
              >
            <Button
                variant="contained"
                endIcon={<ArrowForwardIcon />}
                onClick={() => {
                  document.getElementById("read-more-section")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
                sx={{
                  bgcolor: "#1B4DFF",
                  borderRadius: 40,
                  textTransform: "none",
                  fontWeight: 700,
                  px: 3,
                  mt: 4,
                  py: 1.3,
                  boxShadow: "0 10px 25px rgba(27,77,255,0.25)",
                  "&:hover": { bgcolor: "#0a3ad0" },
                }}
              >
                Read More
              </Button>

              </Stack>

              
            </Box>

            {/* ================= RIGHT PANEL ================= */}
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "center" },
                alignItems: "center",
                width: "100%",
                minWidth: 0,
              }}
            >
              <Paper
                elevation={0}
                sx={{
                  width: "100%",
                  maxWidth: { xs: 380, sm: 440, md: 460 },
                  p: { xs: 3, md: 4 },
                  borderRadius: 5,
                  bgcolor: "rgba(255,255,255,0.97)",
                  backdropFilter: "blur(14px)",
                  color: "#07122C",
                  boxShadow: "0 40px 100px -30px rgba(0,0,0,0.7)",
                  border: "1px solid rgba(255,255,255,0.4)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Gradient top stripe */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 4,
                    background:
                      "linear-gradient(90deg, #1B4DFF 0%, #00A3FF 100%)",
                  }}
                />

                {/* Header */}
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={1.5}
                  mb={2.5}
                >
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: "12px",
                      background:
                        "linear-gradient(135deg, #1B4DFF 0%, #00A3FF 100%)",
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 10px 25px -10px rgba(27,77,255,0.8)",
                    }}
                  >
                    <VerifiedIcon fontSize="small" />
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontSize: 15,
                        fontWeight: 900,
                        color: "#07122C",
                        lineHeight: 1.2,
                      }}
                    >
                      End-to-End RCM Coverage
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: 11,
                        fontWeight: 700,
                        color: "#94A3B8",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                      }}
                    >
                      Complete Lifecycle
                    </Typography>
                  </Box>
                </Stack>

                {/* Services */}
                <Stack spacing={1.2}>
                  {services.map((item) => (
                    <Box
                      key={item}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1.4,
                        p: 1.2,
                        borderRadius: 2,
                        transition: "background 0.2s ease",
                        "&:hover": { bgcolor: "rgba(27,77,255,0.05)" },
                      }}
                    >
                      <CheckCircleOutlineIcon
                        sx={{
                          fontSize: 20,
                          color: "#1B4DFF",
                          flexShrink: 0,
                        }}
                      />
                      <Typography
                        sx={{
                          fontSize: 14.5,
                          fontWeight: 600,
                          color: "#07122C",
                        }}
                      >
                        {item}
                      </Typography>
                    </Box>
                  ))}
                </Stack>

                {/* Footer note */}
                <Box
                  sx={{
                    mt: 3,
                    pt: 2.5,
                    borderTop: "1px solid #e6e9f5",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 1.2,
                  }}
                >
                  <TrendingUpIcon
                    sx={{ fontSize: 18, color: "#1B4DFF", mt: "3px" }}
                  />
                  <Typography
                    sx={{
                      fontSize: 12.8,
                      lineHeight: 1.7,
                      color: "rgba(7,18,44,0.65)",
                    }}
                  >
                    Real-time AI validation against payer rules and clinical
                    documentation to minimize denials and maximize
                    reimbursements.
                  </Typography>
                </Box>
              </Paper>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

/* ================= SMALL COMPONENT ================= */

function TrustBadge({ icon, text }) {
  return (
    <Box
      sx={{
        display: "inline-flex",
        alignItems: "center",
        gap: 1,
        px: 1.8,
        py: 1,
        borderRadius: 99,
        bgcolor: "rgba(255,255,255,0.10)",
        border: "1px solid rgba(255,255,255,0.22)",
        backdropFilter: "blur(10px)",
        transition: "all 0.25s ease",
        "&:hover": {
          bgcolor: "rgba(255,255,255,0.16)",
          borderColor: "rgba(255,255,255,0.4)",
        },
        justifyContent: { xs: "center", sm: "flex-start" },
      }}
    >
      <Box sx={{ color: "#fff", display: "flex" }}>{icon}</Box>
      <Typography
        sx={{
          fontSize: 12.8,
          fontWeight: 700,
          color: "#ffffff",
        }}
      >
        {text}
      </Typography>
    </Box>
  );
}