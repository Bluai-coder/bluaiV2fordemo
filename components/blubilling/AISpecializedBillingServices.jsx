
"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Box,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
  IconButton,
  Stack,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import CircleIcon from "@mui/icons-material/Circle";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

const MotionRow = motion(Box);
const MotionCard = motion(Box);

/* ============================================================
   DATA
   ============================================================ */

const specializedServices = [
  {
    id: 1,
    title: "AI-Enhanced Internal Medicine",
    short:
      "Improve claim acceptance with intelligent coding, validation and automation.",
    accent: "#1B4DFF",
    details: [
      "Smart documentation review & validation",
      "AI-assisted CPT/ICD coding accuracy boost",
      "Reduced denials through compliance checks",
      "Faster reimbursements with clean claims",
    ],
  },
  {
    id: 2,
    title: "AI-Powered Medical Laboratory Billing",
    short:
      "Optimize panels, reduce leakage and improve reimbursement using AI-driven intelligence.",
    accent: "#7C3AED",
    details: [
      "Test Utilization Analysis: AI identifies appropriate test combinations",
      "Automated ABN Management: Intelligent advance beneficiary notices",
      "Panel Optimization: AI suggests most reimbursable test panels",
      "Billing compliance checks for first-pass success",
    ],
  },
  {
    id: 3,
    title: "AI-Driven Cardiology Medical Billing",
    short:
      "Procedure-driven automation built to reduce denials and maximize collections.",
    accent: "#0EA5A4",
    details: [
      "CPT/ICD smart suggestions",
      "Cardiac procedure coding automation",
      "Denial prevention insights",
      "Eligibility & authorization workflow support",
    ],
  },
  {
    id: 4,
    title: "AI-Enhanced Orthopedic Billing",
    short:
      "Modifier accuracy, surgical documentation checks and optimized workflows.",
    accent: "#F59E0B",
    details: [
      "Surgery claim validation & coding checks",
      "Modifier accuracy improvement",
      "Prior authorization automation",
      "Denial analytics and resolution support",
    ],
  },
  {
    id: 5,
    title: "AI-Powered ENT Billing Services",
    short: "End-to-end claim quality improvement through AI verification.",
    accent: "#EC4899",
    details: [
      "Procedure mapping support",
      "Claim scrubber automation",
      "Smarter AR follow-ups",
      "Payer behavior insights",
    ],
  },
  {
    id: 6,
    title: "AI-Enhanced Dermatology Billing",
    short:
      "AI-driven workflows for faster reimbursements and cleaner claims.",
    accent: "#06B6D4",
    details: [
      "Intelligent code suggestions",
      "Eligibility verification support",
      "Reduced rejections and denials",
      "Automation for billing efficiency",
    ],
  },
];

/* ============================================================
   MAIN COMPONENT
   ============================================================ */

export default function AISpecializedBillingServicesExpanded() {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));
  const isMdDown = useMediaQuery(theme.breakpoints.down("md"));

  const visibleCards = isXs ? 1 : isMdDown ? 2 : 3;

  const total = specializedServices.length;
  const totalPages = Math.max(1, Math.ceil(total / visibleCards));

  const [page, setPage] = useState(0);
  const [expandedId, setExpandedId] = useState(null);

  const isPausedRef = useRef(false);

  const goTo = (p) => {
    const normalized = ((p % totalPages) + totalPages) % totalPages;
    setPage(normalized);
  };

  const next = () => goTo(page + 1);
  const prev = () => goTo(page - 1);

  // Reset expansion when page or viewport changes
  useEffect(() => {
    setExpandedId(null);
  }, [page, visibleCards]);

  // Autoplay (pause on hover, stop when expanded)
  useEffect(() => {
    if (totalPages <= 1) return;

    const interval = setInterval(() => {
      if (isPausedRef.current) return;
      if (expandedId) return;

      setPage((prevPage) => (prevPage + 1 >= totalPages ? 0 : prevPage + 1));
    }, 3200);

    return () => clearInterval(interval);
  }, [totalPages, expandedId]);

  const pageItems = useMemo(() => {
    const start = page * visibleCards;
    return specializedServices.slice(start, start + visibleCards);
  }, [page, visibleCards]);

  const swipePower = (offset, velocity) => Math.abs(offset) * velocity;

  const toggleExpand = (id) => {
    setExpandedId((prevVal) => (prevVal === id ? null : id));
  };

  /* --------------------------------------------
     Ordered items so the expanded card is centered
  -------------------------------------------- */
  const expandedCard = pageItems.find((x) => x.id === expandedId);

  const orderedItems = useMemo(() => {
    if (!expandedCard) return pageItems;
    if (visibleCards === 1) return [expandedCard];

    const others = pageItems.filter((x) => x.id !== expandedId);

    if (visibleCards === 2) return [expandedCard, ...others];
    return [others[0], expandedCard, others[1]].filter(Boolean);
  }, [pageItems, expandedCard, visibleCards, expandedId]);

  return (
    <Box
      sx={{
        position: "relative",
        bgcolor: "#F7F9FF",
        py: { xs: 8, md: 11 },
        overflow: "hidden",
      }}
    >
      {/* Dotted background */}
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

      <Container  maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
        {/* ─── Section header ─── */}
        <Box textAlign="center" mb={{ xs: 5, md: 7 }}>
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              px: 2,
              py: 0.8,
              borderRadius: 999,
              bgcolor: "rgba(27,77,255,0.08)",
              border: "1px solid rgba(27,77,255,0.18)",
              mb: 2.5,
            }}
          >
            <AutoAwesomeIcon sx={{ fontSize: 14, color: "#1B4DFF" }} />
            <Typography
              sx={{
                fontSize: 11,
                fontWeight: 800,
                letterSpacing: "0.12em",
                color: "#1B4DFF",
                textTransform: "uppercase",
              }}
            >
              Specialized Services
            </Typography>
          </Box>

          <Typography
            sx={{
              fontWeight: 900,
              color: "#07122C",
              fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.8rem" },
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
              maxWidth: 820,
              mx: "auto",
            }}
          >
            AI-Specialized{" "}
            <Box
              component="span"
              sx={{
                background:
                  "linear-gradient(90deg, #1B4DFF 0%, #2F7BFF 50%, #00A3FF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Billing Services.
            </Box>
          </Typography>

          <Typography
            sx={{
              mt: 2,
              fontSize: { xs: 14, md: 16 },
              color: "rgba(7,18,44,0.6)",
              maxWidth: 640,
              mx: "auto",
              lineHeight: 1.7,
            }}
          >
            Purpose-built AI billing workflows for every medical specialty —
            from internal medicine to dermatology.
          </Typography>
        </Box>

        {/* ─── Slider ─── */}
        <Box
          sx={{ position: "relative", width: "100%", mx: "auto" }}
          onMouseEnter={() => (isPausedRef.current = true)}
          onMouseLeave={() => (isPausedRef.current = false)}
        >
          <Box sx={{ overflow: "hidden", px: { xs: 0.5, md: 1 } }}>
            <AnimatePresence mode="wait">
              <MotionRow
                key={`${page}-${visibleCards}-${expandedId}`}
                drag={expandedId ? false : "x"}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.12}
                onDragStart={() => (isPausedRef.current = true)}
                onDragEnd={(e, info) => {
                  isPausedRef.current = false;
                  if (expandedId) return;

                  const swipe = swipePower(info.offset.x, info.velocity.x);
                  if (swipe < -1400) return next();
                  if (swipe > 1400) return prev();
                }}
                initial={{ opacity: 0, x: 35 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -35 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
                sx={{
                  display: "flex",
                  gap: { xs: 2, md: 3 },
                  justifyContent: "center",
                  alignItems: "stretch",
                  userSelect: "none",
                  cursor: expandedId ? "default" : "grab",
                  "&:active": { cursor: expandedId ? "default" : "grabbing" },
                }}
              >
                {orderedItems.map((item) => {
                  const isExpanded = item.id === expandedId;

                  return (
                    <Box
                      key={item.id}
                      sx={{
                        width: {
                          xs: "100%",
                          sm: "calc(50% - 12px)",
                          md: "calc(33.33% - 16px)",
                        },
                        maxWidth: isExpanded ? 520 : 420,
                        minWidth: 0,
                        flexShrink: 0,
                      }}
                    >
                      <MotionCard
                        layout
                        transition={{ duration: 0.25 }}
                        sx={{
                          position: "relative",
                          bgcolor: "#fff",
                          borderRadius: 4,
                          border: isExpanded
                            ? `1px solid ${item.accent}66`
                            : "1px solid rgba(227,232,255,0.95)",
                          overflow: "hidden",
                          height: "100%",
                          boxShadow: isExpanded
                            ? `0 30px 80px -30px ${item.accent}55`
                            : "0 14px 35px rgba(15, 23, 42, 0.06)",
                          transform: isExpanded
                            ? "translateY(-6px)"
                            : "translateY(0px)",
                          transition: "all 0.3s ease",
                          "&::before": {
                            content: '""',
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            height: 3,
                            background: `linear-gradient(90deg, ${item.accent} 0%, transparent 100%)`,
                            opacity: isExpanded ? 1 : 0.7,
                          },
                        }}
                      >
                        {/* ─── Card header ─── */}
                        <Box
                          sx={{
                            px: { xs: 2.4, md: 2.6 },
                            py: { xs: 2, md: 2.2 },
                            borderBottom: "1px solid rgba(227,232,255,0.6)",
                            display: "flex",
                            alignItems: "flex-start",
                            gap: 1.6,
                          }}
                        >
                          <Box
                            sx={{
                              width: 44,
                              height: 44,
                              borderRadius: "14px",
                              background: `linear-gradient(135deg, ${item.accent} 0%, ${item.accent}cc 100%)`,
                              color: "#fff",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              flexShrink: 0,
                              boxShadow: `0 10px 25px -10px ${item.accent}88`,
                            }}
                          >
                            <LocalHospitalIcon sx={{ fontSize: 22 }} />
                          </Box>

                          <Typography
                            sx={{
                              fontWeight: 900,
                              fontSize: { xs: 12.5, md: 13 },
                              color: "#07122C",
                              textTransform: "uppercase",
                              lineHeight: 1.3,
                              letterSpacing: "0.01em",
                            }}
                          >
                            {item.title}
                          </Typography>
                        </Box>

                        {/* ─── Card body ─── */}
                        <Box
                          sx={{
                            p: { xs: 2.4, md: 2.6 },
                            minHeight: isExpanded ? 300 : 190,
                          }}
                        >
                          {!isExpanded && (
                            <>
                              <Typography
                                sx={{
                                  fontSize: 13.3,
                                  lineHeight: 1.7,
                                  color: "rgba(7,18,44,0.7)",
                                  mb: 2,
                                }}
                              >
                                {item.short}
                              </Typography>

                              <Box component="ul" sx={{ m: 0, pl: 2 }}>
                                {item.details.slice(0, 2).map((t) => (
                                  <Typography
                                    component="li"
                                    key={t}
                                    sx={{
                                      fontSize: 12.8,
                                      color: "rgba(7,18,44,0.75)",
                                      mb: 0.8,
                                      lineHeight: 1.55,
                                    }}
                                  >
                                    {t.split(":")[0]}
                                  </Typography>
                                ))}
                              </Box>
                            </>
                          )}

                          {isExpanded && (
                            <>
                              <Typography
                                sx={{
                                  fontSize: 13.5,
                                  lineHeight: 1.7,
                                  color: "rgba(7,18,44,0.7)",
                                  mb: 2,
                                }}
                              >
                                {item.short}
                              </Typography>

                              <Box
                                sx={{
                                  height: 1,
                                  bgcolor: "rgba(7,18,44,0.08)",
                                  mb: 2.2,
                                }}
                              />

                              <Stack spacing={1.3}>
                                {item.details.map((t) => (
                                  <Box
                                    key={t}
                                    sx={{
                                      display: "flex",
                                      alignItems: "flex-start",
                                      gap: 1.2,
                                    }}
                                  >
                                    <CircleIcon
                                      sx={{
                                        fontSize: 8,
                                        color: item.accent,
                                        mt: "8px",
                                        flexShrink: 0,
                                      }}
                                    />
                                    <Typography
                                      sx={{
                                        fontSize: 13.6,
                                        lineHeight: 1.6,
                                        color: "rgba(7,18,44,0.78)",
                                      }}
                                    >
                                      <Box
                                        component="span"
                                        sx={{
                                          fontWeight: 900,
                                          color: "#0B1220",
                                        }}
                                      >
                                        {t.split(":")[0]}
                                      </Box>
                                      {t.includes(":")
                                        ? ` : ${t
                                            .split(":")
                                            .slice(1)
                                            .join(":")
                                            .trim()}`
                                        : ""}
                                    </Typography>
                                  </Box>
                                ))}
                              </Stack>
                            </>
                          )}

                          {/* ─── Read more / less ─── */}
                          <Typography
                            onClick={() => toggleExpand(item.id)}
                            sx={{
                              mt: 2.4,
                              fontSize: 13.5,
                              fontWeight: 900,
                              color: item.accent,
                              cursor: "pointer",
                              width: "fit-content",
                              transition: "transform 0.2s ease",
                              "&:hover": { transform: "translateX(4px)" },
                            }}
                          >
                            {isExpanded ? "Read Less ←" : "Read More →"}
                          </Typography>
                        </Box>
                      </MotionCard>
                    </Box>
                  );
                })}
              </MotionRow>
            </AnimatePresence>
          </Box>

          {/* ─── Prev / Next buttons (desktop) ─── */}
          {!isMdDown && (
            <>
              <IconButton
                onClick={prev}
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: -12,
                  transform: "translateY(-50%)",
                  width: 48,
                  height: 48,
                  bgcolor: "#fff",
                  color: "#1B4DFF",
                  border: "1px solid rgba(27,77,255,0.15)",
                  boxShadow: "0 12px 30px rgba(27,77,255,0.15)",
                  "&:hover": {
                    bgcolor: "#fff",
                    borderColor: "rgba(27,77,255,0.35)",
                    boxShadow: "0 20px 45px rgba(27,77,255,0.25)",
                  },
                  zIndex: 2,
                }}
              >
                <ArrowBackRoundedIcon />
              </IconButton>

              <IconButton
                onClick={next}
                sx={{
                  position: "absolute",
                  top: "50%",
                  right: -12,
                  transform: "translateY(-50%)",
                  width: 48,
                  height: 48,
                  bgcolor: "#fff",
                  color: "#1B4DFF",
                  border: "1px solid rgba(27,77,255,0.15)",
                  boxShadow: "0 12px 30px rgba(27,77,255,0.15)",
                  "&:hover": {
                    bgcolor: "#fff",
                    borderColor: "rgba(27,77,255,0.35)",
                    boxShadow: "0 20px 45px rgba(27,77,255,0.25)",
                  },
                  zIndex: 2,
                }}
              >
                <ArrowForwardRoundedIcon />
              </IconButton>
            </>
          )}
        </Box>

        {/* ─── Slide indicator dots ─── */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: 4,
            gap: 1,
          }}
        >
          {Array.from({ length: totalPages }).map((_, idx) => (
            <Box
              key={idx}
              onClick={() => {
                setExpandedId(null);
                goTo(idx);
              }}
              sx={{
                width: idx === page ? 28 : 9,
                height: 9,
                borderRadius: 20,
                bgcolor:
                  idx === page ? "#1B4DFF" : "rgba(27,77,255,0.25)",
                cursor: "pointer",
                transition: "all 0.3s ease",
                "&:hover": {
                  bgcolor:
                    idx === page ? "#1B4DFF" : "rgba(27,77,255,0.45)",
                },
              }}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
}