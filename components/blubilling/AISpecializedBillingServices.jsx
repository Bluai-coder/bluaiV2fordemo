"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Box,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import CircleIcon from "@mui/icons-material/Circle";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";

const MotionRow = motion(Box);
const MotionCard = motion(Box);

export default function AISpecializedBillingServicesExpanded() {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));
  const isMdDown = useMediaQuery(theme.breakpoints.down("md"));

  const visibleCards = isXs ? 1 : isMdDown ? 2 : 3;

  const specializedServices = useMemo(
    () => [
      {
        id: 1,
        title: "AI-ENHANCED INTERNAL MEDICINE",
        short:
          "Improve claim acceptance with intelligent coding, validation and automation.",
        details: [
          "Smart documentation review & validation",
          "AI-assisted CPT/ICD coding accuracy boost",
          "Reduced denials through compliance checks",
          "Faster reimbursements with clean claims",
        ],
      },
      {
        id: 2,
        title: "AI-POWERED MEDICAL LABORATORY BILLING",
        short:
          "Optimize panels, reduce leakage and improve reimbursement using AI-driven intelligence.",
        details: [
          "Test Utilization Analysis: AI identifies appropriate test combinations",
          "Automated ABN Management: Intelligent advance beneficiary notices",
          "Panel Optimization: AI suggests most reimbursable test panels",
          "Billing compliance checks for first-pass success",
        ],
      },
      {
        id: 3,
        title: "AI-DRIVEN CARDIOLOGY MEDICAL BILLING",
        short:
          "Procedure-driven automation built to reduce denials and maximize collections.",
        details: [
          "CPT/ICD smart suggestions",
          "Cardiac procedure coding automation",
          "Denial prevention insights",
          "Eligibility & authorization workflow support",
        ],
      },
      {
        id: 4,
        title: "AI-ENHANCED ORTHOPEDIC BILLING",
        short:
          "Modifier accuracy, surgical documentation checks and optimized workflows.",
        details: [
          "Surgery claim validation & coding checks",
          "Modifier accuracy improvement",
          "Prior authorization automation",
          "Denial analytics and resolution support",
        ],
      },
      {
        id: 5,
        title: "AI-POWERED ENT BILLING SERVICES",
        short: "End-to-end claim quality improvement through AI verification.",
        details: [
          "Procedure mapping support",
          "Claim scrubber automation",
          "Smarter AR follow-ups",
          "Payer behavior insights",
        ],
      },
      {
        id: 6,
        title: "AI-ENHANCED DERMATOLOGY BILLING",
        short: "AI-driven workflows for faster reimbursements and cleaner claims.",
        details: [
          "Intelligent code suggestions",
          "Eligibility verification support",
          "Reduced rejections and denials",
          "Automation for billing efficiency",
        ],
      },
    ],
    []
  );

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

  //  autoplay (pause on hover, stop when expanded)
  useEffect(() => {
    if (totalPages <= 1) return;

    const interval = setInterval(() => {
      if (isPausedRef.current) return;
      if (expandedId) return;

      setPage((prevPage) => (prevPage + 1 >= totalPages ? 0 : prevPage + 1));
    }, 2600);

    return () => clearInterval(interval);
  }, [totalPages, expandedId]);

  const pageItems = useMemo(() => {
    const start = page * visibleCards;
    return specializedServices.slice(start, start + visibleCards);
  }, [page, visibleCards, specializedServices]);

  const swipePower = (offset, velocity) => Math.abs(offset) * velocity;

  const toggleExpand = (id) => {
    setExpandedId((prevVal) => (prevVal === id ? null : id));
  };

  //  Make expanded card centered on desktop
  const expandedCard = pageItems.find((x) => x.id === expandedId);

  const orderedItems = useMemo(() => {
    if (!expandedCard) return pageItems;
    if (visibleCards === 1) return [expandedCard];

    const others = pageItems.filter((x) => x.id !== expandedId);

    if (visibleCards === 2) return [expandedCard, ...others];
    return [others[0], expandedCard, others[1]].filter(Boolean);
  }, [pageItems, expandedCard, visibleCards, expandedId]);

  return (
    <Box sx={{ bgcolor: "#F7F9FF", py: { xs: 8, md: 10 } }}>
      <Container maxWidth="lg">
        {/* Heading */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            sx={{
              fontWeight: 900,
              color: "#07122C",
              fontSize: { xs: "1.2rem", md: "1.45rem" },
              letterSpacing: 0.6,
              textTransform: "uppercase",
            }}
          >
            AI-SPECIALIZED BILLING SERVICES
          </Typography>

          <Box
            sx={{
              width: 60,
              height: 3,
              bgcolor: "#1B4DFF",
              mx: "auto",
              mt: 1.5,
              borderRadius: 10,
            }}
          />
        </Box>

        {/* Slider */}
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            width: "100%",
            maxWidth: 1180,
            mx: "auto",
          }}
          onMouseEnter={() => (isPausedRef.current = true)}
          onMouseLeave={() => (isPausedRef.current = false)}
        >
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
                    }}
                  >
                    <MotionCard
                      layout
                      transition={{ duration: 0.25 }}
                      sx={{
                        bgcolor: "white",
                        borderRadius: 3,
                        border: isExpanded
                          ? "1px solid rgba(27,77,255,0.45)"
                          : "1px solid rgba(227,232,255,0.95)",
                        overflow: "hidden",
                        height: "100%",
                        boxShadow: isExpanded
                          ? "0 25px 60px rgba(15, 23, 42, 0.12)"
                          : "0 14px 35px rgba(15, 23, 42, 0.06)",
                        transform: isExpanded ? "translateY(-4px)" : "translateY(0px)",
                        transition: "0.25s ease",
                      }}
                    >
                      {/* Top Header */}
                      <Box
                        sx={{
                          bgcolor: "#F2F6FF",
                          px: 2.6,
                          py: 2,
                          borderBottom: "1px solid rgba(227,232,255,0.75)",
                          display: "flex",
                          alignItems: "center",
                          gap: 1.6,
                        }}
                      >
                        <Box
                          sx={{
                            width: 42,
                            height: 42,
                            borderRadius: 2.3,
                            bgcolor: "rgba(27,77,255,0.12)",
                            color: "#1B4DFF",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                          }}
                        >
                          <LocalHospitalIcon sx={{ fontSize: 22 }} />
                        </Box>

                        <Typography
                          sx={{
                            fontWeight: 900,
                            fontSize: 13,
                            color: "#07122C",
                            textTransform: "uppercase",
                            lineHeight: 1.25,
                          }}
                        >
                          {item.title}
                        </Typography>
                      </Box>

                      {/* Body */}
                      <Box
                        sx={{
                          p: 2.6,
                          minHeight: isExpanded ? 290 : 170, //  better base height
                        }}
                      >
                        {/* Collapsed preview text (NOT EMPTY) */}
                        {!isExpanded && (
                          <>
                            <Typography
                              sx={{
                                fontSize: 13.3,
                                lineHeight: 1.65,
                                color: "rgba(7,18,44,0.7)",
                                mb: 2,
                              }}
                            >
                              {item.short}
                            </Typography>

                            {/* 2 bullets preview */}
                            <Box component="ul" sx={{ m: 0, pl: 2 }}>
                              {item.details.slice(0, 2).map((t) => (
                                <Typography
                                  component="li"
                                  key={t}
                                  sx={{
                                    fontSize: 13.2,
                                    color: "rgba(7,18,44,0.8)",
                                    mb: 1,
                                  }}
                                >
                                  {t.split(":")[0]}
                                </Typography>
                              ))}
                            </Box>
                          </>
                        )}

                        {/* Expanded full list */}
                        {isExpanded && (
                          <>
                            <Typography
                              sx={{
                                fontSize: 13.5,
                                lineHeight: 1.65,
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

                            <Box component="ul" sx={{ m: 0, pl: 0 }}>
                              {item.details.map((t) => (
                                <Box
                                  component="li"
                                  key={t}
                                  sx={{
                                    listStyle: "none",
                                    display: "flex",
                                    alignItems: "flex-start",
                                    gap: 1.2,
                                    mb: 1.25,
                                  }}
                                >
                                  <CircleIcon
                                    sx={{
                                      fontSize: 8,
                                      color: "#1B4DFF",
                                      mt: "8px",
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
                                      sx={{ fontWeight: 900, color: "#0B1220" }}
                                    >
                                      {t.split(":")[0]}
                                    </Box>
                                    {t.includes(":")
                                      ? ` : ${t.split(":").slice(1).join(":").trim()}`
                                      : ""}
                                  </Typography>
                                </Box>
                              ))}
                            </Box>
                          </>
                        )}

                        {/* Read More / Less */}
                        <Typography
                          onClick={() => toggleExpand(item.id)}
                          sx={{
                            mt: 2.2,
                            fontSize: 14,
                            fontWeight: 900,
                            color: "#1B4DFF",
                            cursor: "pointer",
                            width: "fit-content",
                          }}
                        >
                          {isExpanded ? "Read Less →" : "Read More →"}
                        </Typography>
                      </Box>
                    </MotionCard>
                  </Box>
                );
              })}
            </MotionRow>
          </AnimatePresence>
        </Box>

        {/* Dots */}
        <Box sx={{ display: "flex", justifyContent: "center", mt: 3.5, gap: 1 }}>
          {Array.from({ length: totalPages }).map((_, idx) => (
            <Box
              key={idx}
              onClick={() => {
                setExpandedId(null);
                goTo(idx);
              }}
              sx={{
                width: idx === page ? 26 : 9,
                height: 9,
                borderRadius: 20,
                bgcolor: idx === page ? "#1B4DFF" : "rgba(27,77,255,0.25)",
                cursor: "pointer",
                transition: "0.25s ease",
              }}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
}
