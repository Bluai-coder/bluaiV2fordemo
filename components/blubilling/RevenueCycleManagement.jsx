"use client";

import React, { useState } from "react";
import { Box, Container, Typography } from "@mui/material";

import PersonIcon from "@mui/icons-material/Person";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import CodeIcon from "@mui/icons-material/Code";
import DescriptionIcon from "@mui/icons-material/Description";
import SendIcon from "@mui/icons-material/Send";
import PaymentsIcon from "@mui/icons-material/Payments";
import ShieldIcon from "@mui/icons-material/Shield";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import GavelIcon from "@mui/icons-material/Gavel";
import CircleIcon from "@mui/icons-material/Circle";

export default function RevenueCycleManagement() {
  const [openId, setOpenId] = useState(1); //  first card open by default

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const services = [
    {
      id: 1,
      title: "AI-POWERED PHYSICIAN CREDENTIALING SERVICES",
      icon: <PersonIcon />,
      intro:
        "Our AI-powered credentialing system revolutionizes the traditional process by :",
      content: [
        {
          heading: "AI-Enhanced Medical Credentialing Services",
          points: [
            "Automated Document Verification: AI instantly verifies credentials, licenses, and certifications",
            "Predictive Analytics: Identifies approval likelihood and potential issues",
            "Smart Payer Matching: Matches providers with optimal payer networks",
            "Real-time Status Tracking: Instant updates across all payers",
          ],
        },
        {
          heading: "Automated Annual Physician Credentialing Maintenance",
          points: [
            "AI alerts for expiring credentials 90 days in advance",
            "Automated renewal document preparation",
            "Intelligent workflow management for multi-payer credentialing",
            "Predictive analytics to prevent revenue disruption",
          ],
        },
      ],
    },
    {
      id: 2,
      title: "AI-ENHANCED PATIENT REGISTRATION",
      icon: <PersonAddAltIcon />,
      intro:
        "Our AI-powered patient registration system revolutionizes the revenue cycle beginning :",
      content: [
        {
          heading: "Smart Registration Automation",
          points: [
            "Smart Form Completion using historical patient data",
            "Real-time Insurance Verification during registration",
            "Automated Prior Authorization initiation",
            "AI-driven registration questions based on payer rules",
          ],
        },
      ],
    },
    {
      id: 3,
      title: "AI-POWERED MEDICAL CODING SERVICES",
      icon: <CodeIcon />,
      intro:
        "Our revolutionary AI coding system delivers unprecedented accuracy and efficiency :",
      content: [
        {
          heading: "AI Coding Intelligence",
          points: [
            "ICD-10 / CPT smart suggestions",
            "Medical necessity and compliance checks",
            "Reduced coding errors and denials",
            "Faster chart-to-bill workflows",
          ],
        },
      ],
    },
    {
      id: 4,
      title: "AI-AUTOMATED CHARGE ENTRY PROCESS",
      icon: <DescriptionIcon />,
      intro:
        "Our AI-powered charge entry system eliminates manual errors and accelerates the revenue cycle :",
      content: [
        {
          heading: "Charge Capture Automation",
          points: [
            "Automated charge extraction from clinical notes",
            "Improved charge capture accuracy",
            "Reduced missing charge leakage",
            "Faster submission readiness",
          ],
        },
      ],
    },
    {
      id: 5,
      title: "AI-DRIVEN CLAIMS SUBMISSION SERVICES",
      icon: <SendIcon />,
      intro:
        "Our AI claims management system revolutionizes the submission process :",
      content: [
        {
          heading: "Claims Submission Intelligence",
          points: [
            "Automated claim scrubbing",
            "Payer-specific validation rules",
            "Batch submission automation",
            "Real-time claim status tracking",
          ],
        },
      ],
    },
    {
      id: 6,
      title: "AI-ENHANCED PAYMENT POSTING SERVICES",
      icon: <PaymentsIcon />,
      intro:
        "Our AI payment posting system delivers unmatched accuracy and insights :",
      content: [
        {
          heading: "Smart Payment Posting",
          points: [
            "Automated ERA / EOB processing",
            "Underpayment detection",
            "Faster reconciliation",
            "Zero-balance auditing",
          ],
        },
      ],
    },
    {
      id: 7,
      title: "AI-POWERED DENIAL MANAGEMENT SERVICES",
      icon: <ShieldIcon />,
      intro:
        "Our AI denial management system proactively prevents and resolves denials :",
      content: [
        {
          heading: "Denial Prevention & Resolution",
          points: [
            "Denial root-cause analysis",
            "Automated appeal drafting",
            "Payer trend monitoring",
            "Improved overturn rates",
          ],
        },
      ],
    },
    {
      id: 8,
      title: "AI-AUTOMATED AR FOLLOW UP",
      icon: <AutorenewIcon />,
      intro: "Our AI system transforms AR management :",
      content: [
        {
          heading: "Accounts Receivable Optimization",
          points: [
            "Smart follow-up scheduling",
            "Collection probability scoring",
            "Reduced days in AR",
            "Faster cash recovery",
          ],
        },
      ],
    },
  ];

  return (
    <Box sx={{ bgcolor: "#F7F9FF", py: { xs: 8, md: 10 } }}>
      <Container maxWidth="lg">
        {/* HEADER */}
        <Box textAlign="center" mb={6}>
          <Typography
            sx={{
              fontWeight: 900,
              fontSize: { xs: "1.4rem", md: "2.2rem" },
              color: "#07122C",
              textTransform: "uppercase",
            }}
          >
            Revenue Cycle Management
          </Typography>

          <Box
            sx={{
              width: 70,
              height: 3,
              bgcolor: "#1B4DFF",
              mx: "auto",
              mt: 1.5,
              borderRadius: 10,
            }}
          />

          <Typography
            sx={{
              mt: 2,
              fontSize: 14,
              color: "rgba(7,18,44,0.65)",
              maxWidth: 760,
              mx: "auto",
            }}
          >
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </Typography>
        </Box>

        {/* CARDS */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: { xs: 2.2, md: 3 },
            justifyContent: "center",
            alignItems: "stretch",
          }}
        >
          {services.map((item) => {
            const isOpen = openId === item.id;

            return (
              <Box
                key={item.id}
                sx={{
                  width: { xs: "100%", md: "calc(50% - 12px)" },
                  maxWidth: 620,
                }}
              >
                <Box
                  sx={{
                    height: "100%",
                    bgcolor: "white",
                    borderRadius: 3,
                    border: isOpen
                      ? "1px solid rgba(27,77,255,0.45)"
                      : "1px solid rgba(227,232,255,0.95)",
                    boxShadow: isOpen
                      ? "0 30px 70px rgba(27,77,255,0.12)"
                      : "0 14px 35px rgba(15,23,42,0.06)",
                    p: 3,
                    display: "flex",
                    flexDirection: "column",
                    transition: "0.25s ease",
                  }}
                >
                  {/* HEADER */}
                  <Box sx={{ display: "flex", gap: 2 }}>
                    <Box
                      sx={{
                        width: 50,
                        height: 50,
                        borderRadius: 2.5,
                        bgcolor: "#EEF2FF",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#1B4DFF",
                        flexShrink: 0,
                      }}
                    >
                      {item.icon}
                    </Box>

                    <Box>
                      <Typography
                        sx={{
                          fontWeight: 900,
                          fontSize: 13,
                          textTransform: "uppercase",
                          color: "#07122C",
                        }}
                      >
                        {item.title}
                      </Typography>

                      <Typography
                        sx={{
                          mt: 1,
                          fontSize: 13,
                          color: "rgba(7,18,44,0.65)",
                        }}
                      >
                        {item.intro}
                      </Typography>
                    </Box>
                  </Box>

                  {/* EXPANDED CONTENT (SCROLL) */}
                  {isOpen && (
                    <Box
                      sx={{
                        mt: 2.5,
                        pt: 2,
                        borderTop: "1px solid rgba(7,18,44,0.08)",
                        maxHeight: 280,
                        overflowY: "auto",
                        pr: 1,
                        "&::-webkit-scrollbar": { width: 6 },
                        "&::-webkit-scrollbar-thumb": {
                          bgcolor: "rgba(27,77,255,0.35)",
                          borderRadius: 20,
                        },
                      }}
                    >
                      {item.content.map((sec) => (
                        <Box key={sec.heading} mb={2.2}>
                          <Typography
                            sx={{
                              fontWeight: 800,
                              fontSize: 13.5,
                              color: "#07122C",
                              mb: 1,
                            }}
                          >
                            {sec.heading}
                          </Typography>

                          {sec.points.map((p) => (
                            <Box
                              key={p}
                              sx={{
                                display: "flex",
                                gap: 1.1,
                                mb: 1,
                              }}
                            >
                              <CircleIcon
                                sx={{
                                  fontSize: 7,
                                  color: "#1B4DFF",
                                  mt: "7px",
                                }}
                              />
                              <Typography
                                sx={{
                                  fontSize: 13,
                                  color: "rgba(7,18,44,0.75)",
                                  lineHeight: 1.6,
                                }}
                              >
                                {p}
                              </Typography>
                            </Box>
                          ))}
                        </Box>
                      ))}
                    </Box>
                  )}

                  {/* FOOTER */}
                  <Typography
                    onClick={() => toggle(item.id)}
                    sx={{
                      mt: "auto",
                      pt: 2,
                      fontSize: 13.5,
                      fontWeight: 900,
                      color: "#1B4DFF",
                      cursor: "pointer",
                      width: "fit-content",
                    }}
                  >
                    {isOpen ? "Read Less →" : "Read More →"}
                  </Typography>
                </Box>
              </Box>
            );
          })}
        </Box>

        {/* LAST CENTER CARD */}
        <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
          <Box sx={{ width: { xs: "100%", md: 520 } }}>
            <Box
              sx={{
                bgcolor: "white",
                borderRadius: 3,
                border: "1px solid rgba(227,232,255,0.95)",
                boxShadow: "0 18px 45px rgba(15,23,42,0.06)",
                p: 3,
                display: "flex",
                gap: 2,
              }}
            >
              <Box
                sx={{
                  width: 50,
                  height: 50,
                  borderRadius: 2.5,
                  bgcolor: "#EEF2FF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#1B4DFF",
                }}
              >
                <GavelIcon />
              </Box>

              <Box>
                <Typography
                  sx={{
                    fontWeight: 900,
                    fontSize: 13,
                    textTransform: "uppercase",
                    color: "#07122C",
                  }}
                >
                  AI-ENHANCED APPEALS PROCESS
                </Typography>

                <Typography
                  sx={{
                    mt: 1,
                    fontSize: 13,
                    color: "rgba(7,18,44,0.65)",
                  }}
                >
                  Our AI appeals system maximizes overturn rates :
                </Typography>

                <Typography
                  sx={{
                    mt: 1.2,
                    fontSize: 13.5,
                    fontWeight: 900,
                    color: "#1B4DFF",
                  }}
                >
                  Read More →
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
