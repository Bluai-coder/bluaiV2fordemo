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

import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";

export default function OurServicesTabsSection() {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  const tabs = useMemo(
    () => [
      {
        key: "assistant",
        label: "Complete AI Assistant",
        title: "Complete AI Assistant",
        subtitle:
          "All-in-one AI solution: ambient documentation, dictation, coding, and clinical Q&A.",
        left: {
          title: "BluAI",
          iconType: "good",
          points: [
            "Unified platform for documentation + workflows",
            "Ambient + dictation + coding assistance",
            "Faster note completion with clinician control",
          ],
        },
        right: {
          title: "Established Incumbent",
          iconType: "bad",
          points: [
            "Separate products for each feature",
            "More training + more switching across tools",
            "Higher operational cost over time",
          ],
        },
        image: "/blu-notes/service1.png", //  use your real image
      },
      {
        key: "ehr",
        label: "EHR Integration",
        title: "EHR Integration",
        subtitle:
          "Deep bi-directional workflows across major EHRs to reduce friction and improve adoption.",
        left: {
          title: "BluAI",
          iconType: "good",
          points: [
            "Bi-directional read/write integration",
            "Seamless push-to-EHR workflow",
            "Configurable mapping for templates",
          ],
        },
        right: {
          title: "Traditional Systems",
          iconType: "bad",
          points: [
            "Limited integration depth",
            "Manual copy/paste workflows",
            "Higher chart closure delays",
          ],
        },
        image: "/blu-notes/service2.jpg",
      },
      {
        key: "safety",
        label: "AI Safety",
        title: "AI Safety",
        subtitle:
          "Designed for clinical confidence: guardrails, verification, and secure AI workflows.",
        left: {
          title: "BluAI",
          iconType: "good",
          points: [
            "Clinician-reviewed outputs",
            "Safety-first summarization workflow",
            "Secure handling with auditability options",
          ],
        },
        right: {
          title: "Generic AI Tools",
          iconType: "bad",
          points: [
            "Less control over clinical outputs",
            "Inconsistent formatting",
            "No domain-specific guardrails",
          ],
        },
        image: "/blu-notes/service3.avif",
      },
      {
        key: "implementation",
        label: "Implementation",
        title: "Implementation",
        subtitle:
          "Fast onboarding with structured rollout plans and training built for healthcare teams.",
        left: {
          title: "BluAI",
          iconType: "good",
          points: [
            "Rapid setup + onboarding support",
            "Training flows for clinical staff",
            "Operational playbooks included",
          ],
        },
        right: {
          title: "Slow Rollouts",
          iconType: "bad",
          points: [
            "Long deployment cycles",
            "Fragmented training",
            "Delayed time-to-value",
          ],
        },
        image: "/blu-notes/service4.png",
      },
      {
        key: "support",
        label: "Support",
        title: "Support",
        subtitle:
          "Expert support with response SLAs to keep clinics productive and protected.",
        left: {
          title: "BluAI",
          iconType: "good",
          points: [
            "Fast response time",
            "Workflow optimization support",
            "Dedicated success assistance",
          ],
        },
        right: {
          title: "Limited Support",
          iconType: "bad",
          points: [
            "Slower response times",
            "Ticket-only interactions",
            "Lower adoption support quality",
          ],
        },
        image: "/blu-notes/service5.jpg",
      },
    ],
    []
  );

  const [activeKey, setActiveKey] = useState(tabs[0].key);
  const active = tabs.find((t) => t.key === activeKey) || tabs[0];

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
                     Our Services
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
                   <Typography
            sx={{
              mt: 2,
              fontSize: 14.2,
              color: "rgba(7,18,44,0.65)",
            }}
          >
            Why Healthcare Leaders Choose BluNotes
          </Typography>
                </Stack>

        {/*  Tabs */}
        <Paper
          elevation={0}
          sx={{
            mt: { xs: 5, md: 7 },
            p: 1,
            borderRadius: 4,
            bgcolor: "#F5F6FA",
            border: "1px solid rgba(227,232,255,0.85)",
            overflowX: "auto",
            boxShadow: "0 18px 60px rgba(15,23,42,0.06)",
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridAutoFlow: "column",
              gridAutoColumns: "minmax(160px, 1fr)",
              gap: 1,
              minWidth: { xs: 700, md: "100%" },
            }}
          >
            {tabs.map((t) => {
              const isActive = t.key === activeKey;
              return (
                <TabButton
                  key={t.key}
                  label={t.label}
                  active={isActive}
                  onClick={() => setActiveKey(t.key)}
                />
              );
            })}
          </Box>
        </Paper>

        {/*  Content Card */}
        <Paper
          elevation={0}
          sx={{
            mt: { xs: 4, md: 5 },
            borderRadius: 5,
            border: "1px solid rgba(227,232,255,0.92)",
            bgcolor: "#fff",
            overflow: "hidden",
            boxShadow: "0 30px 90px rgba(15,23,42,0.10)",
          }}
        >
          <Box
            sx={{
              p: { xs: 3, sm: 4, md: 6 },
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1.25fr 1fr" },
              gap: { xs: 4, md: 6 },
              alignItems: "center",
            }}
          >
            {/* LEFT CONTENT */}
            <Box>
              <Typography
                sx={{
                  fontWeight: 900,
                  color: "#07122C",
                  fontSize: { xs: 26, sm: 32, md: 40 },
                  lineHeight: 1.15,
                }}
              >
                {active.title}
              </Typography>

              <Typography
                sx={{
                  mt: 1.6,
                  fontSize: 14.4,
                  lineHeight: 1.9,
                  color: "rgba(7,18,44,0.65)",
                  maxWidth: 540,
                }}
              >
                {active.subtitle}
              </Typography>

              {/* Comparison */}
              <Box
                sx={{
                  mt: { xs: 3, md: 4 },
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                  gap: 2.4,
                }}
              >
                <CompareCard
                  title={active.left.title}
                  iconType={active.left.iconType}
                  points={active.left.points}
                />

                <CompareCard
                  title={active.right.title}
                  iconType={active.right.iconType}
                  points={active.right.points}
                />
              </Box>

              {/* CTA */}
              <Stack direction="row" spacing={1.6} sx={{ mt: 4 }}>
                <Button
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    fontWeight: 900,
                    borderRadius: 2.5,
                    px: 2.6,
                    py: 1.2,
                    bgcolor: "#1B4DFF",
                    boxShadow: "0 18px 40px rgba(27,77,255,0.24)",
                    "&:hover": { bgcolor: "#143FE0" },
                  }}
                >
                  Learn More
                </Button>

                <Button
                  variant="outlined"
                  sx={{
                    textTransform: "none",
                    fontWeight: 900,
                    borderRadius: 2.5,
                    px: 2.6,
                    py: 1.2,
                    borderColor: "rgba(27,77,255,0.35)",
                    color: "#1B4DFF",
                    "&:hover": { borderColor: "#1B4DFF" },
                  }}
                >
                  Get Started
                </Button>
              </Stack>
            </Box>

            {/* RIGHT IMAGE */}
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "flex-end" },
              }}
            >
              <Box
                component="img"
                src={active?.image}
                alt={active?.title}
                sx={{
                  width: "100%",
                  maxWidth: 520,
                  height: "auto",
                  display: "block",
                  borderRadius: 4,
                  boxShadow: "0 35px 90px rgba(15,23,42,0.14)",
                  transform: { xs: "none", md: "translateY(8px)" },
                }}
              />
            </Box>
          </Box>
        </Paper>

        {/*  (optional) spacing bottom like screenshot */}
        <Box sx={{ height: { xs: 14, md: 20 } }} />
      </Container>
    </Box>
  );
}

/* ---------------- Tab Button ---------------- */

function TabButton({ label, active, onClick }) {
  return (
    <Box
      onClick={onClick}
      role="button"
      sx={{
        position: "relative",
        cursor: "pointer",
        userSelect: "none",
        px: 2.2,
        py: 2,
        borderRadius: 3,
        bgcolor: active ? "#3D50F5" : "transparent",
        color: active ? "#fff" : "rgba(7,18,44,0.75)",
        fontWeight: 900,
        textAlign: "center",
        transition: "all .2s ease",
        "&:hover": {
          bgcolor: active ? "#3346F0" : "rgba(27,77,255,0.06)",
        },

        /* keeps height stable */
        minHeight: 56,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography sx={{ fontWeight: 900, fontSize: 14 }}>{label}</Typography>

      {/*  Pointer Arrow */}
      {active && (
        <Box
          sx={{
            position: "absolute",
            left: "50%",
            bottom: -10,
            transform: "translateX(-50%)",
            width: 0,
            height: 0,
            borderLeft: "12px solid transparent",
            borderRight: "12px solid transparent",
            borderTop: "12px solid #3D50F5",
          }}
        />
      )}
    </Box>
  );
}

/* ---------------- Compare Card ---------------- */

function CompareCard({ title, iconType = "good", points = [] }) {
  const icon =
    iconType === "good" ? (
      <VerifiedRoundedIcon sx={{ fontSize: 22, color: "#1B4DFF" }} />
    ) : iconType === "bad" ? (
      <CloseRoundedIcon sx={{ fontSize: 22, color: "#1B4DFF" }} />
    ) : (
      <WarningAmberRoundedIcon sx={{ fontSize: 22, color: "#1B4DFF" }} />
    );

  return (
    <Box
      sx={{
        display: "flex",
        gap: 1.6,
        alignItems: "flex-start",
      }}
    >
      {/* Icon */}
      <Box
        sx={{
          width: 52,
          height: 52,
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "rgba(27,77,255,0.08)",
          border: "1px solid rgba(27,77,255,0.14)",
          flexShrink: 0,
        }}
      >
        {icon}
      </Box>

      {/* Text */}
      <Box sx={{ minWidth: 0 }}>
        <Typography
          sx={{
            fontSize: 16,
            fontWeight: 950,
            color: "#07122C",
            lineHeight: 1.2,
          }}
        >
          {title}
        </Typography>

        <Stack spacing={1} sx={{ mt: 1.4 }}>
          {points.map((p) => (
            <Stack
              key={p}
              direction="row"
              spacing={1}
              alignItems="flex-start"
              sx={{ minWidth: 0 }}
            >
              <CheckCircleRoundedIcon
                sx={{ fontSize: 18, mt: "2px", color: "#1B4DFF" }}
              />
              <Typography
                sx={{
                  fontSize: 13.6,
                  lineHeight: 1.7,
                  color: "rgba(7,18,44,0.65)",
                }}
              >
                {p}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Box>
    </Box>
  );
}
