"use client";

import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Stack,
} from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";

export default function ValueAddedServicesSection() {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const services = [
    {
      id: 1,
      title: "AI-DRIVEN PATIENT FOLLOW UP",
      subtitle: "Intelligent Patient Engagement :",
      summaryPoints: [
        "AI Chatbots: 24/7 patient support with natural language understanding",
        "Predictive Outreach: AI identifies patients needing follow-up",
      ],
      sections: [
        {
          heading: "Intelligent Appeal Strategy :",
          points: [
            "AI Chatbots: 24/7 patient support with natural language understanding",
            "Predictive Outreach: AI identifies patients needing follow-up",
            "Sentiment Analysis: Real-time detection of patient satisfaction levels",
            "Automated Appointment Scheduling: AI manages follow-up appointments",
          ],
        },
        {
          heading: "Smart Communication Features :",
          points: [
            "Personalized message timing based on patient preferences",
            "Multi-channel optimization (text, email, phone)",
            "Automated escalation for urgent concerns",
            "Predictive health monitoring integration",
          ],
        },
      ],
    },
    {
      id: 2,
      title: "PRACTICE ENHANCER PRO - AI MARKETING SUITE",
      subtitle: "AI-Powered Digital Presence :",
      summaryPoints: [
        "SEO optimization: AI continuously optimizes online content",
        "Predictive Patient Acquisition: AI targets likely new patients",
      ],
      sections: [
        {
          heading: "AI-Powered Digital Presence :",
          points: [
            "SEO optimization: AI continuously optimizes online content for search rankings",
            "Predictive Patient Acquisition: AI identifies and targets likely new patients",
            "Automated Content Generation: AI creates engaging healthcare content",
            "Smart Campaign Management: AI optimizes marketing spend across channels",
          ],
        },
        {
          heading: "AI-Enhanced Portal Integration :",
          points: [
            "Epic/MyChart • athenahealth • NextGen • eClinicalWorks • AdvancedMD",
            "All major EHR/PM systems supported",
          ],
        },
      ],
    },
    {
      id: 3,
      title: "AI-POWERED INSURANCE VERIFICATION PROCESS",
      subtitle: "Real-time Intelligent Verification :",
      summaryPoints: [
        "Automated escalation for urgent concerns",
        "Predictive health monitoring integration",
      ],
      sections: [
        {
          heading: "Intelligent Appeal Strategy :",
          points: [
            "Instant Multi-Payer Checking: AI verifies coverage across all payers simultaneously",
            "Predictive Coverage Analysis: Anticipates coverage gaps and limitations",
            "Automated Prior Authorization: AI initiates and tracks authorizations",
            "Smart Benefits Interpretation: Plain-language explanation of complex benefits",
          ],
        },
        {
          heading: "AI-Enhanced Data Collection :",
          points: [
            "Automated extraction of all benefit details",
            "Intelligent flag system for coverage issues",
            "Predictive cost estimates for patients",
            "Real-time eligibility monitoring throughout treatment",
          ],
        },
      ],
    },
    {
      id: 4,
      title: "AI-OPTIMIZED PHYSICIAN CREDENTIALING SERVICES",
      subtitle: "AI-Enhanced Medical Credentialing Services",
      summaryPoints: [
        "Automated Document Verification for credentials & licenses",
        "Predictive Analytics for approval likelihood",
      ],
      sections: [
        {
          heading: "Our AI-powered credentialing system revolutionizes the traditional process by :",
          points: [
            "Automated Document Verification: AI instantly verifies credentials, licenses, and certifications against multiple databases",
            "Predictive Analytics: AI predicts approval likelihood and identifies potential issues before submission",
            "Smart Payer Matching: AI matches providers with optimal payer networks based on practice patterns",
            "Real-time Status Tracking: AI-powered dashboard provides instant updates on credentialing progress across all payers",
          ],
        },
        {
          heading: "Automated Annual Physician Credentialing Maintenance :",
          points: [
            "AI alerts for expiring credentials 90 days in advance",
            "Automated renewal document preparation",
            "Intelligent workflow management for multi-payer credentialing",
            "Predictive analytics to prevent revenue disruption",
          ],
        },
      ],
    },
  ];

  return (
    <Box sx={{ bgcolor: "white", py: { xs: 8, md: 10 } }}>
      <Container maxWidth="lg">
        {/* Heading */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            sx={{
              fontWeight: 900,
              color: "#07122C",
              fontSize: { xs: "1.25rem", md: "1.45rem" },
              letterSpacing: 0.6,
              textTransform: "uppercase",
            }}
          >
            AI-POWERED VALUE ADDED SERVICES
          </Typography>

          <Box
            sx={{
              width: 60,
              height: 3,
              bgcolor: "#1B4DFF",
              mx: "auto",
              mt: 1.3,
              borderRadius: 10,
            }}
          />
        </Box>

        {/* Cards (NO Grid) */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: { xs: 2.5, md: 3 },
            justifyContent: "center",
          }}
        >
          {services.map((item) => {
            const isExpanded = expandedId === item.id;

            return (
              <Box
                key={item.id}
                sx={{
                  width: { xs: "100%", md: "calc(50% - 12px)" },
                  maxWidth: 560,
                }}
              >
                <Box
                  sx={{
                    borderRadius: 3,
                    bgcolor: "#ffffff",
                    border: "1px solid rgba(27,77,255,0.20)",
                    overflow: "hidden",
                    boxShadow: isExpanded
                      ? "0 25px 60px rgba(15, 23, 42, 0.10)"
                      : "0 14px 35px rgba(15, 23, 42, 0.05)",
                    transition: "0.25s ease",
                  }}
                >
                  {/* Header */}
                  <Box
                    sx={{
                      px: { xs: 2.3, md: 3 },
                      py: 2,
                      bgcolor: "#F7F9FF",
                      borderBottom: "1px solid rgba(227,232,255,0.75)",
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: 900,
                        color: "#07122C",
                        fontSize: 13,
                        textTransform: "uppercase",
                        letterSpacing: 0.3,
                      }}
                    >
                      {item.title}
                    </Typography>

                    <Typography
                      sx={{
                        mt: 0.9,
                        fontWeight: 800,
                        color: "#1B4DFF",
                        fontSize: 13,
                      }}
                    >
                      {item.subtitle}
                    </Typography>
                  </Box>

                  {/* Body */}
                  <Box sx={{ px: { xs: 2.3, md: 3 }, py: 2.3 }}>
                    {/* Summary bullets (always visible) */}
                    <Box component="ul" sx={{ m: 0, pl: 0 }}>
                      {item.summaryPoints.map((t) => (
                        <Box
                          component="li"
                          key={t}
                          sx={{
                            listStyle: "none",
                            display: "flex",
                            gap: 1.1,
                            alignItems: "flex-start",
                            mb: 1.1,
                          }}
                        >
                          <CircleIcon sx={{ fontSize: 7, color: "#1B4DFF", mt: "8px" }} />
                          <Typography
                            sx={{
                              fontSize: 13.2,
                              color: "rgba(7,18,44,0.75)",
                              lineHeight: 1.6,
                            }}
                          >
                            <Box component="span" sx={{ fontWeight: 900, color: "#0B1220" }}>
                              {t.split(":")[0]}
                            </Box>
                            {t.includes(":")
                              ? ` : ${t.split(":").slice(1).join(":").trim()}`
                              : ""}
                          </Typography>
                        </Box>
                      ))}
                    </Box>

                    {/* Expanded content */}
                    {isExpanded && (
                      <Box sx={{ mt: 2 }}>
                        {item.sections.map((sec) => (
                          <Box key={sec.heading} sx={{ mt: 2.2 }}>
                            <Typography
                              sx={{
                                fontWeight: 900,
                                color: "#07122C",
                                fontSize: 13.5,
                                mb: 1.2,
                              }}
                            >
                              {sec.heading}
                            </Typography>

                            <Box component="ul" sx={{ m: 0, pl: 0 }}>
                              {sec.points.map((pt) => (
                                <Box
                                  component="li"
                                  key={pt}
                                  sx={{
                                    listStyle: "none",
                                    display: "flex",
                                    gap: 1.1,
                                    alignItems: "flex-start",
                                    mb: 1,
                                  }}
                                >
                                  <CircleIcon
                                    sx={{ fontSize: 7, color: "rgba(7,18,44,0.35)", mt: "8px" }}
                                  />
                                  <Typography
                                    sx={{
                                      fontSize: 13.1,
                                      color: "rgba(7,18,44,0.72)",
                                      lineHeight: 1.6,
                                    }}
                                  >
                                    <Box component="span" sx={{ fontWeight: 800, color: "#0B1220" }}>
                                      {pt.split(":")[0]}
                                    </Box>
                                    {pt.includes(":")
                                      ? ` : ${pt.split(":").slice(1).join(":").trim()}`
                                      : ""}
                                  </Typography>
                                </Box>
                              ))}
                            </Box>
                          </Box>
                        ))}
                      </Box>
                    )}

                    {/* Read More / Less */}
                    <Typography
                      onClick={() => toggleExpand(item.id)}
                      sx={{
                        mt: 2,
                        fontSize: 13.5,
                        fontWeight: 900,
                        color: "#1B4DFF",
                        cursor: "pointer",
                        width: "fit-content",
                        userSelect: "none",
                      }}
                    >
                      {isExpanded ? "Read Less →" : "Read More →"}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}
