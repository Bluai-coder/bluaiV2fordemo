// "use client";

// import React, { useState } from "react";
// import {
//   Box,
//   Container,
//   Typography,
//   Stack,
// } from "@mui/material";
// import CircleIcon from "@mui/icons-material/Circle";

// export default function ValueAddedServicesSection() {
//   const [expandedId, setExpandedId] = useState(null);

//   const toggleExpand = (id) => {
//     setExpandedId((prev) => (prev === id ? null : id));
//   };

//   const services = [
//     {
//       id: 1,
//       title: "AI-DRIVEN PATIENT FOLLOW UP",
//       subtitle: "Intelligent Patient Engagement :",
//       summaryPoints: [
//         "AI Chatbots: 24/7 patient support with natural language understanding",
//         "Predictive Outreach: AI identifies patients needing follow-up",
//       ],
//       sections: [
//         {
//           heading: "Intelligent Appeal Strategy :",
//           points: [
//             "AI Chatbots: 24/7 patient support with natural language understanding",
//             "Predictive Outreach: AI identifies patients needing follow-up",
//             "Sentiment Analysis: Real-time detection of patient satisfaction levels",
//             "Automated Appointment Scheduling: AI manages follow-up appointments",
//           ],
//         },
//         {
//           heading: "Smart Communication Features :",
//           points: [
//             "Personalized message timing based on patient preferences",
//             "Multi-channel optimization (text, email, phone)",
//             "Automated escalation for urgent concerns",
//             "Predictive health monitoring integration",
//           ],
//         },
//       ],
//     },
//     {
//       id: 2,
//       title: "PRACTICE ENHANCER PRO - AI MARKETING SUITE",
//       subtitle: "AI-Powered Digital Presence :",
//       summaryPoints: [
//         "SEO optimization: AI continuously optimizes online content",
//         "Predictive Patient Acquisition: AI targets likely new patients",
//       ],
//       sections: [
//         {
//           heading: "AI-Powered Digital Presence :",
//           points: [
//             "SEO optimization: AI continuously optimizes online content for search rankings",
//             "Predictive Patient Acquisition: AI identifies and targets likely new patients",
//             "Automated Content Generation: AI creates engaging healthcare content",
//             "Smart Campaign Management: AI optimizes marketing spend across channels",
//           ],
//         },
//         {
//           heading: "AI-Enhanced Portal Integration :",
//           points: [
//             "Epic/MyChart • athenahealth • NextGen • eClinicalWorks • AdvancedMD",
//             "All major EHR/PM systems supported",
//           ],
//         },
//       ],
//     },
//     {
//       id: 3,
//       title: "AI-POWERED INSURANCE VERIFICATION PROCESS",
//       subtitle: "Real-time Intelligent Verification :",
//       summaryPoints: [
//         "Automated escalation for urgent concerns",
//         "Predictive health monitoring integration",
//       ],
//       sections: [
//         {
//           heading: "Intelligent Appeal Strategy :",
//           points: [
//             "Instant Multi-Payer Checking: AI verifies coverage across all payers simultaneously",
//             "Predictive Coverage Analysis: Anticipates coverage gaps and limitations",
//             "Automated Prior Authorization: AI initiates and tracks authorizations",
//             "Smart Benefits Interpretation: Plain-language explanation of complex benefits",
//           ],
//         },
//         {
//           heading: "AI-Enhanced Data Collection :",
//           points: [
//             "Automated extraction of all benefit details",
//             "Intelligent flag system for coverage issues",
//             "Predictive cost estimates for patients",
//             "Real-time eligibility monitoring throughout treatment",
//           ],
//         },
//       ],
//     },
//     {
//       id: 4,
//       title: "AI-OPTIMIZED PHYSICIAN CREDENTIALING SERVICES",
//       subtitle: "AI-Enhanced Medical Credentialing Services",
//       summaryPoints: [
//         "Automated Document Verification for credentials & licenses",
//         "Predictive Analytics for approval likelihood",
//       ],
//       sections: [
//         {
//           heading: "Our AI-powered credentialing system revolutionizes the traditional process by :",
//           points: [
//             "Automated Document Verification: AI instantly verifies credentials, licenses, and certifications against multiple databases",
//             "Predictive Analytics: AI predicts approval likelihood and identifies potential issues before submission",
//             "Smart Payer Matching: AI matches providers with optimal payer networks based on practice patterns",
//             "Real-time Status Tracking: AI-powered dashboard provides instant updates on credentialing progress across all payers",
//           ],
//         },
//         {
//           heading: "Automated Annual Physician Credentialing Maintenance :",
//           points: [
//             "AI alerts for expiring credentials 90 days in advance",
//             "Automated renewal document preparation",
//             "Intelligent workflow management for multi-payer credentialing",
//             "Predictive analytics to prevent revenue disruption",
//           ],
//         },
//       ],
//     },
//   ];

//   return (
//     <Box sx={{ bgcolor: "white", py: { xs: 8, md: 10 } }}>
//       <Container maxWidth="xl">
//         {/* Heading */}
//         <Box sx={{ textAlign: "center", mb: 6 }}>
//           <Typography
//             sx={{
//               fontWeight: 900,
//               color: "#07122C",
//               fontSize: { xs: "1.25rem", md: "1.45rem" },
//               letterSpacing: 0.6,
//               textTransform: "uppercase",
//             }}
//           >
//             AI-POWERED VALUE ADDED SERVICES
//           </Typography>

//           <Box
//             sx={{
//               width: 60,
//               height: 3,
//               bgcolor: "#1B4DFF",
//               mx: "auto",
//               mt: 1.3,
//               borderRadius: 10,
//             }}
//           />
//         </Box>

//         {/* Cards (NO Grid) */}
//         <Box
//           sx={{
//             display: "flex",
//             flexWrap: "wrap",
//             gap: { xs: 2.5, md: 3 },
//             justifyContent: "center",
//           }}
//         >
//           {services.map((item) => {
//             const isExpanded = expandedId === item.id;

//             return (
//               <Box
//                 key={item.id}
//                 sx={{
//                   width: { xs: "100%", md: "calc(50% - 12px)" },
//                   maxWidth: 560,
//                 }}
//               >
//                 <Box
//                   sx={{
//                     borderRadius: 3,
//                     bgcolor: "#ffffff",
//                     border: "1px solid rgba(27,77,255,0.20)",
//                     overflow: "hidden",
//                     boxShadow: isExpanded
//                       ? "0 25px 60px rgba(15, 23, 42, 0.10)"
//                       : "0 14px 35px rgba(15, 23, 42, 0.05)",
//                     transition: "0.25s ease",
//                   }}
//                 >
//                   {/* Header */}
//                   <Box
//                     sx={{
//                       px: { xs: 2.3, md: 3 },
//                       py: 2,
//                       bgcolor: "#F7F9FF",
//                       borderBottom: "1px solid rgba(227,232,255,0.75)",
//                     }}
//                   >
//                     <Typography
//                       sx={{
//                         fontWeight: 900,
//                         color: "#07122C",
//                         fontSize: 13,
//                         textTransform: "uppercase",
//                         letterSpacing: 0.3,
//                       }}
//                     >
//                       {item.title}
//                     </Typography>

//                     <Typography
//                       sx={{
//                         mt: 0.9,
//                         fontWeight: 800,
//                         color: "#1B4DFF",
//                         fontSize: 13,
//                       }}
//                     >
//                       {item.subtitle}
//                     </Typography>
//                   </Box>

//                   {/* Body */}
//                   <Box sx={{ px: { xs: 2.3, md: 3 }, py: 2.3 }}>
//                     {/* Summary bullets (always visible) */}
//                     <Box component="ul" sx={{ m: 0, pl: 0 }}>
//                       {item.summaryPoints.map((t) => (
//                         <Box
//                           component="li"
//                           key={t}
//                           sx={{
//                             listStyle: "none",
//                             display: "flex",
//                             gap: 1.1,
//                             alignItems: "flex-start",
//                             mb: 1.1,
//                           }}
//                         >
//                           <CircleIcon sx={{ fontSize: 7, color: "#1B4DFF", mt: "8px" }} />
//                           <Typography
//                             sx={{
//                               fontSize: 13.2,
//                               color: "rgba(7,18,44,0.75)",
//                               lineHeight: 1.6,
//                             }}
//                           >
//                             <Box component="span" sx={{ fontWeight: 900, color: "#0B1220" }}>
//                               {t.split(":")[0]}
//                             </Box>
//                             {t.includes(":")
//                               ? ` : ${t.split(":").slice(1).join(":").trim()}`
//                               : ""}
//                           </Typography>
//                         </Box>
//                       ))}
//                     </Box>

//                     {/* Expanded content */}
//                     {isExpanded && (
//                       <Box sx={{ mt: 2 }}>
//                         {item.sections.map((sec) => (
//                           <Box key={sec.heading} sx={{ mt: 2.2 }}>
//                             <Typography
//                               sx={{
//                                 fontWeight: 900,
//                                 color: "#07122C",
//                                 fontSize: 13.5,
//                                 mb: 1.2,
//                               }}
//                             >
//                               {sec.heading}
//                             </Typography>

//                             <Box component="ul" sx={{ m: 0, pl: 0 }}>
//                               {sec.points.map((pt) => (
//                                 <Box
//                                   component="li"
//                                   key={pt}
//                                   sx={{
//                                     listStyle: "none",
//                                     display: "flex",
//                                     gap: 1.1,
//                                     alignItems: "flex-start",
//                                     mb: 1,
//                                   }}
//                                 >
//                                   <CircleIcon
//                                     sx={{ fontSize: 7, color: "rgba(7,18,44,0.35)", mt: "8px" }}
//                                   />
//                                   <Typography
//                                     sx={{
//                                       fontSize: 13.1,
//                                       color: "rgba(7,18,44,0.72)",
//                                       lineHeight: 1.6,
//                                     }}
//                                   >
//                                     <Box component="span" sx={{ fontWeight: 800, color: "#0B1220" }}>
//                                       {pt.split(":")[0]}
//                                     </Box>
//                                     {pt.includes(":")
//                                       ? ` : ${pt.split(":").slice(1).join(":").trim()}`
//                                       : ""}
//                                   </Typography>
//                                 </Box>
//                               ))}
//                             </Box>
//                           </Box>
//                         ))}
//                       </Box>
//                     )}

//                     {/* Read More / Less */}
//                     <Typography
//                       onClick={() => toggleExpand(item.id)}
//                       sx={{
//                         mt: 2,
//                         fontSize: 13.5,
//                         fontWeight: 900,
//                         color: "#1B4DFF",
//                         cursor: "pointer",
//                         width: "fit-content",
//                         userSelect: "none",
//                       }}
//                     >
//                       {isExpanded ? "Read Less →" : "Read More →"}
//                     </Typography>
//                   </Box>
//                 </Box>
//               </Box>
//             );
//           })}
//         </Box>
//       </Container>
//     </Box>
//   );
// }



"use client";

import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Stack,
  Paper,
} from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import CampaignIcon from "@mui/icons-material/Campaign";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import BadgeIcon from "@mui/icons-material/Badge";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

/* ============================================================
   DATA
   ============================================================ */

const services = [
  {
    id: 1,
    title: "AI-Driven Patient Follow Up",
    subtitle: "Intelligent Patient Engagement",
    icon: <PersonSearchIcon />,
    accent: "#1B4DFF",
    summaryPoints: [
      "AI Chatbots: 24/7 patient support with natural language understanding",
      "Predictive Outreach: AI identifies patients needing follow-up",
    ],
    sections: [
      {
        heading: "Intelligent Appeal Strategy",
        points: [
          "AI Chatbots: 24/7 patient support with natural language understanding",
          "Predictive Outreach: AI identifies patients needing follow-up",
          "Sentiment Analysis: Real-time detection of patient satisfaction levels",
          "Automated Appointment Scheduling: AI manages follow-up appointments",
        ],
      },
      {
        heading: "Smart Communication Features",
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
    title: "Practice Enhancer Pro — AI Marketing Suite",
    subtitle: "AI-Powered Digital Presence",
    icon: <CampaignIcon />,
    accent: "#7C3AED",
    summaryPoints: [
      "SEO optimization: AI continuously optimizes online content",
      "Predictive Patient Acquisition: AI targets likely new patients",
    ],
    sections: [
      {
        heading: "AI-Powered Digital Presence",
        points: [
          "SEO optimization: AI continuously optimizes online content for search rankings",
          "Predictive Patient Acquisition: AI identifies and targets likely new patients",
          "Automated Content Generation: AI creates engaging healthcare content",
          "Smart Campaign Management: AI optimizes marketing spend across channels",
        ],
      },
      {
        heading: "AI-Enhanced Portal Integration",
        points: [
          "Epic/MyChart • athenahealth • NextGen • eClinicalWorks • AdvancedMD",
          "All major EHR/PM systems supported",
        ],
      },
    ],
  },
  {
    id: 3,
    title: "AI-Powered Insurance Verification",
    subtitle: "Real-time Intelligent Verification",
    icon: <VerifiedUserIcon />,
    accent: "#0EA5A4",
    summaryPoints: [
      "Automated escalation for urgent concerns",
      "Predictive health monitoring integration",
    ],
    sections: [
      {
        heading: "Intelligent Appeal Strategy",
        points: [
          "Instant Multi-Payer Checking: AI verifies coverage across all payers simultaneously",
          "Predictive Coverage Analysis: Anticipates coverage gaps and limitations",
          "Automated Prior Authorization: AI initiates and tracks authorizations",
          "Smart Benefits Interpretation: Plain-language explanation of complex benefits",
        ],
      },
      {
        heading: "AI-Enhanced Data Collection",
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
    title: "AI-Optimized Physician Credentialing",
    subtitle: "AI-Enhanced Credentialing Services",
    icon: <BadgeIcon />,
    accent: "#F59E0B",
    summaryPoints: [
      "Automated Document Verification for credentials & licenses",
      "Predictive Analytics for approval likelihood",
    ],
    sections: [
      {
        heading:
          "Our AI-powered credentialing system revolutionizes the traditional process by",
        points: [
          "Automated Document Verification: AI instantly verifies credentials, licenses, and certifications against multiple databases",
          "Predictive Analytics: AI predicts approval likelihood and identifies potential issues before submission",
          "Smart Payer Matching: AI matches providers with optimal payer networks based on practice patterns",
          "Real-time Status Tracking: AI-powered dashboard provides instant updates on credentialing progress across all payers",
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
];

/* ============================================================
   MAIN COMPONENT
   ============================================================ */

export default function ValueAddedServicesSection() {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <Box
      sx={{
        position: "relative",
        bgcolor: "#fff",
        py: { xs: 8, md: 11 },
        overflow: "hidden",
      }}
    >
      {/* Dotted tech background */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          opacity: 0.3,
          backgroundImage:
            "radial-gradient(rgba(27,77,255,0.20) 0.6px, transparent 0.6px)",
          backgroundSize: "22px 22px",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
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
              Value-Added Services
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
            AI-Powered{" "}
            <Box
              component="span"
              sx={{
                background:
                  "linear-gradient(90deg, #1B4DFF 0%, #2F7BFF 50%, #00A3FF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Value-Added Services.
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
            Beyond billing — intelligent patient engagement, marketing,
            verification, and credentialing workflows engineered for modern
            healthcare practices.
          </Typography>
        </Box>

        {/* ─── Cards grid ─── */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: { xs: 2.5, md: 3.5 },
            alignItems: "start",
          }}
        >
          {services.map((item) => {
            const isExpanded = expandedId === item.id;

            return (
              <Paper
                key={item.id}
                elevation={0}
                sx={{
                  position: "relative",
                  borderRadius: 4,
                  bgcolor: "#fff",
                  border: isExpanded
                    ? `1px solid ${item.accent}55`
                    : "1px solid rgba(227,232,255,0.95)",
                  overflow: "hidden",
                  boxShadow: isExpanded
                    ? `0 30px 80px -30px ${item.accent}55`
                    : "0 14px 35px rgba(15, 23, 42, 0.05)",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
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
                {/* ─── Header ─── */}
                <Box
                  sx={{
                    px: { xs: 2.4, md: 3 },
                    py: { xs: 2.2, md: 2.4 },
                    bgcolor: "#FAFBFF",
                    borderBottom: "1px solid rgba(227,232,255,0.75)",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 1.8,
                  }}
                >
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: "14px",
                      background: `linear-gradient(135deg, ${item.accent} 0%, ${item.accent}cc 100%)`,
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      boxShadow: `0 10px 25px -10px ${item.accent}88`,
                      "& svg": { fontSize: 24 },
                    }}
                  >
                    {item.icon}
                  </Box>

                  <Box sx={{ minWidth: 0, flex: 1 }}>
                    <Typography
                      sx={{
                        fontWeight: 900,
                        color: "#07122C",
                        fontSize: { xs: 13.5, md: 14.5 },
                        textTransform: "uppercase",
                        letterSpacing: "0.01em",
                        lineHeight: 1.3,
                      }}
                    >
                      {item.title}
                    </Typography>

                    <Typography
                      sx={{
                        mt: 0.6,
                        fontWeight: 800,
                        color: item.accent,
                        fontSize: 12.5,
                        letterSpacing: "0.02em",
                      }}
                    >
                      {item.subtitle}
                    </Typography>
                  </Box>
                </Box>

                {/* ─── Body ─── */}
                <Box sx={{ px: { xs: 2.4, md: 3 }, py: { xs: 2.4, md: 2.8 } }}>
                  {/* Summary points — always visible */}
                  <Stack spacing={1.2}>
                    {item.summaryPoints.map((t) => (
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
                            fontSize: 7,
                            color: item.accent,
                            mt: "8px",
                            flexShrink: 0,
                          }}
                        />
                        <Typography
                          sx={{
                            fontSize: 13.3,
                            color: "rgba(7,18,44,0.78)",
                            lineHeight: 1.6,
                          }}
                        >
                          <Box
                            component="span"
                            sx={{ fontWeight: 900, color: "#0B1220" }}
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

                  {/* Expanded content */}
                  {isExpanded && (
                    <Box sx={{ mt: 3 }}>
                      {item.sections.map((sec) => (
                        <Box key={sec.heading} sx={{ mt: 2.5 }}>
                          <Typography
                            sx={{
                              fontWeight: 900,
                              color: "#07122C",
                              fontSize: 13.5,
                              mb: 1.4,
                              lineHeight: 1.4,
                            }}
                          >
                            {sec.heading}
                          </Typography>

                          <Stack spacing={1}>
                            {sec.points.map((pt) => (
                              <Box
                                key={pt}
                                sx={{
                                  display: "flex",
                                  alignItems: "flex-start",
                                  gap: 1.2,
                                }}
                              >
                                <CircleIcon
                                  sx={{
                                    fontSize: 7,
                                    color: "rgba(7,18,44,0.3)",
                                    mt: "8px",
                                    flexShrink: 0,
                                  }}
                                />
                                <Typography
                                  sx={{
                                    fontSize: 13.1,
                                    color: "rgba(7,18,44,0.72)",
                                    lineHeight: 1.6,
                                  }}
                                >
                                  <Box
                                    component="span"
                                    sx={{ fontWeight: 800, color: "#0B1220" }}
                                  >
                                    {pt.split(":")[0]}
                                  </Box>
                                  {pt.includes(":")
                                    ? ` : ${pt
                                        .split(":")
                                        .slice(1)
                                        .join(":")
                                        .trim()}`
                                    : ""}
                                </Typography>
                              </Box>
                            ))}
                          </Stack>
                        </Box>
                      ))}
                    </Box>
                  )}

                  {/* ─── Read More / Less ─── */}
                  <Box
                    onClick={() => toggleExpand(item.id)}
                    sx={{
                      mt: 2.6,
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 0.6,
                      fontSize: 13.5,
                      fontWeight: 900,
                      color: item.accent,
                      cursor: "pointer",
                      userSelect: "none",
                      transition: "all 0.2s ease",
                      "&:hover": { gap: 1 },
                    }}
                  >
                    {isExpanded ? "Read Less" : "Read More"}
                    <ExpandMoreIcon
                      sx={{
                        fontSize: 18,
                        transform: isExpanded
                          ? "rotate(180deg)"
                          : "rotate(0deg)",
                        transition: "transform 0.3s ease",
                      }}
                    />
                  </Box>
                </Box>
              </Paper>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}