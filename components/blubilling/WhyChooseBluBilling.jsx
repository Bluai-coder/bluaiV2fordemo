"use client";

import React from "react";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export function WhyChooseBluBilling() {
  const points = [
    {
      strong: "99%",
      text: "First-Pass Clean Claim Rate through AI pre-submission validation",
    },
    {
      strong: "50%",
      text: "Reduction in Denial Rates with predictive analytics",
    },
    {
      strong: "75%",
      text: "Faster Payment Posting through intelligent automation",
    },
    {
      strong: "40%",
      text: "Increase in Collections via AI-optimized workflows",
    },
    {
      strong: "Real-time",
      text: "Visibility into every aspect of your revenue cycle",
    },
    {
      strong: "Continuous",
      text: "Improvement through machine learning",
    },
    {
      strong: "100%",
      text: "HIPAA Compliant AI infrastructure",
    },
    {
      strong: "24/7",
      text: "AI Support augmenting our expert human team",
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 7, md: 10 },
        bgcolor: "#ffffff",
        position: "relative",
        overflow: "hidden",
      }}
    >
   

      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 4.5, md: 6 }}
          alignItems="center"
          justifyContent="space-between"
        >
          {/* LEFT: IMAGE CARD */}
          <Box sx={{ flex: 1, minWidth: 0, width: "100%" }}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                maxWidth: 500,
                mx: { xs: "auto", md: 0 },
                borderRadius: 5,
                overflow: "hidden",
                border: "1px solid rgba(227,232,255,0.95)",
                boxShadow: "0 30px 80px rgba(15, 23, 42, 0.12)",
                bgcolor: "#F7F9FF",
              }}
            >
              {/* Pattern behind image */}
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "repeating-linear-gradient(135deg, rgba(27,77,255,0.08) 0px, rgba(27,77,255,0.08) 8px, rgba(27,77,255,0.02) 8px, rgba(27,77,255,0.02) 16px)",
                  opacity: 0.55,
                }}
              />

              {/* Real image */}
              <Box
                component="img"
                src="/blubilling/why-choose.jpg"
                alt="Why Choose BluBilling"
                sx={{
                  position: "relative",
                  width: "100%",
                  height: { xs: 420, sm: 460, md: 820 }, //  fixed height so it never becomes too tall
                  objectFit: "cover",
                  objectPosition: "center",
                  display: "block",
                }}
              />
            </Box>
          </Box>

          {/* RIGHT: CONTENT CARD */}
          <Box sx={{ flex: 1.15, minWidth: 0, width: "100%" }}>
            <Box
              sx={{
                height: { xs: 420, sm: 460, md: 820 },
                borderRadius: 5,
                border: "1px solid rgba(227,232,255,0.95)",
                bgcolor: "rgba(247,249,255,0.65)",
                backdropFilter: "blur(10px)",
                boxShadow: "0 20px 60px rgba(15, 23, 42, 0.08)",
                p: { xs: 3, md: 4 },
              }}
            >
              {/* Title */}
              <Typography
                sx={{
                  fontWeight: 900,
                  color: "#07122C",
                  fontSize: { xs: "1.75rem", sm: "2rem", md: "2.25rem" },
                  lineHeight: 1.12,
                }}
              >
                Why Choose{" "}
                <Box component="span" sx={{ color: "#1B4DFF" }}>
                  AI-Powered BluBilling
                </Box>
                ?
              </Typography>

              {/* Highlight line */}
              <Box
                sx={{
                  mt: 2,
                  display: "inline-flex",
                  px: 1.3,
                  py: 0.7,
                  borderRadius: 99,
                  bgcolor: "rgba(27,77,255,0.12)",
                  border: "1px solid rgba(27,77,255,0.22)",
                }}
              >
                <Typography
                  sx={{
                    fontSize: 12.2,
                    fontWeight: 900,
                    color: "#1B4DFF",
                    letterSpacing: 0.6,
                    textTransform: "uppercase",
                  }}
                >
                  Smart billing. Clean claims. Faster revenue.
                </Typography>
              </Box>

              {/* Description */}
              <Typography
                sx={{
                  mt: 2,
                  fontSize: 13.5,
                  lineHeight: 1.75,
                  color: "rgba(7,18,44,0.72)",
                  maxWidth: 560,
                }}
              >
                BluBilling streamlines medical billing & claims with AI-driven accuracy,
                reduces denials, ensures compliance, and accelerates collections for
                healthcare providers.
              </Typography>

              {/* Points */}
              <Box
                sx={{
                  mt: 3,
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 1.6,
                }}
              >
                {points.map((p) => (
                  <Box
                    key={p.strong + p.text}
                    sx={{
                      width: { xs: "100%", sm: "calc(50% - 10px)" }, //  2 columns on desktop
                      borderRadius: 3,
                      p: 1.7,
                      bgcolor: "white",
                      border: "1px solid rgba(227,232,255,0.95)",
                      boxShadow: "0 10px 25px rgba(15, 23, 42, 0.04)",
                      display: "flex",
                      gap: 1.3,
                      alignItems: "flex-start",
                    }}
                  >
                    <CheckCircleIcon sx={{ color: "#1B4DFF", fontSize: 20, mt: "2px" }} />

                    <Typography
                      sx={{
                        fontSize: 13.3,
                        lineHeight: 1.6,
                        color: "rgba(7,18,44,0.78)",
                      }}
                    >
                      <Box component="span" sx={{ fontWeight: 900, color: "#0B1220" }}>
                        {p.strong}
                      </Box>{" "}
                      {p.text}
                    </Typography>
                  </Box>
                ))}
              </Box>

              {/* Buttons */}
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                sx={{ mt: 4 }}
              >
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#1B4DFF",
                    textTransform: "none",
                    fontWeight: 900,
                    borderRadius: 2.5,
                    px: 3.3,
                    py: 1.25,
                    boxShadow: "0 18px 40px rgba(27,77,255,0.22)",
                    "&:hover": { bgcolor: "#163FE0" },
                  }}
                >
                  Get Started
                </Button>

                <Button
                  variant="outlined"
                  sx={{
                    borderColor: "rgba(27,77,255,0.35)",
                    color: "#1B4DFF",
                    textTransform: "none",
                    fontWeight: 900,
                    borderRadius: 2.5,
                    px: 3.3,
                    py: 1.25,
                    "&:hover": { borderColor: "#1B4DFF" },
                  }}
                >
                  Learn More
                </Button>
              </Stack>

              {/* Footer note */}
              <Typography
                sx={{
                  mt: 3,
                  fontSize: 13,
                  lineHeight: 1.75,
                  color: "rgba(7,18,44,0.62)",
                  maxWidth: 620,
                }}
              >
                Our AI technology doesn’t replace human expertise — it amplifies it,
                allowing your team to focus on complex cases while AI handles routine
                tasks with speed and accuracy.
              </Typography>
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
