// "use client";

// import React, { useState } from "react";
// import { Box, Container, Typography } from "@mui/material";

// import PersonIcon from "@mui/icons-material/Person";
// import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
// import CodeIcon from "@mui/icons-material/Code";
// import DescriptionIcon from "@mui/icons-material/Description";
// import SendIcon from "@mui/icons-material/Send";
// import PaymentsIcon from "@mui/icons-material/Payments";
// import ShieldIcon from "@mui/icons-material/Shield";
// import AutorenewIcon from "@mui/icons-material/Autorenew";
// import GavelIcon from "@mui/icons-material/Gavel";
// import CircleIcon from "@mui/icons-material/Circle";

// export default function RevenueCycleManagement() {
//   const [openId, setOpenId] = useState(1); //  first card open by default

//   const toggle = (id) => {
//     setOpenId(openId === id ? null : id);
//   };

//   const services = [
//     {
//       id: 1,
//       title: "AI-POWERED PHYSICIAN CREDENTIALING SERVICES",
//       icon: <PersonIcon />,
//       intro:
//         "Our AI-powered credentialing system revolutionizes the traditional process by :",
//       content: [
//         {
//           heading: "AI-Enhanced Medical Credentialing Services",
//           points: [
//             "Automated Document Verification: AI instantly verifies credentials, licenses, and certifications",
//             "Predictive Analytics: Identifies approval likelihood and potential issues",
//             "Smart Payer Matching: Matches providers with optimal payer networks",
//             "Real-time Status Tracking: Instant updates across all payers",
//           ],
//         },
//         {
//           heading: "Automated Annual Physician Credentialing Maintenance",
//           points: [
//             "AI alerts for expiring credentials 90 days in advance",
//             "Automated renewal document preparation",
//             "Intelligent workflow management for multi-payer credentialing",
//             "Predictive analytics to prevent revenue disruption",
//           ],
//         },
//       ],
//     },
//     {
//       id: 2,
//       title: "AI-ENHANCED PATIENT REGISTRATION",
//       icon: <PersonAddAltIcon />,
//       intro:
//         "Our AI-powered patient registration system revolutionizes the revenue cycle beginning :",
//       content: [
//         {
//           heading: "Smart Registration Automation",
//           points: [
//             "Smart Form Completion using historical patient data",
//             "Real-time Insurance Verification during registration",
//             "Automated Prior Authorization initiation",
//             "AI-driven registration questions based on payer rules",
//           ],
//         },
//       ],
//     },
//     {
//       id: 3,
//       title: "AI-POWERED MEDICAL CODING SERVICES",
//       icon: <CodeIcon />,
//       intro:
//         "Our revolutionary AI coding system delivers unprecedented accuracy and efficiency :",
//       content: [
//         {
//           heading: "AI Coding Intelligence",
//           points: [
//             "ICD-10 / CPT smart suggestions",
//             "Medical necessity and compliance checks",
//             "Reduced coding errors and denials",
//             "Faster chart-to-bill workflows",
//           ],
//         },
//       ],
//     },
//     {
//       id: 4,
//       title: "AI-AUTOMATED CHARGE ENTRY PROCESS",
//       icon: <DescriptionIcon />,
//       intro:
//         "Our AI-powered charge entry system eliminates manual errors and accelerates the revenue cycle :",
//       content: [
//         {
//           heading: "Charge Capture Automation",
//           points: [
//             "Automated charge extraction from clinical notes",
//             "Improved charge capture accuracy",
//             "Reduced missing charge leakage",
//             "Faster submission readiness",
//           ],
//         },
//       ],
//     },
//     {
//       id: 5,
//       title: "AI-DRIVEN CLAIMS SUBMISSION SERVICES",
//       icon: <SendIcon />,
//       intro:
//         "Our AI claims management system revolutionizes the submission process :",
//       content: [
//         {
//           heading: "Claims Submission Intelligence",
//           points: [
//             "Automated claim scrubbing",
//             "Payer-specific validation rules",
//             "Batch submission automation",
//             "Real-time claim status tracking",
//           ],
//         },
//       ],
//     },
//     {
//       id: 6,
//       title: "AI-ENHANCED PAYMENT POSTING SERVICES",
//       icon: <PaymentsIcon />,
//       intro:
//         "Our AI payment posting system delivers unmatched accuracy and insights :",
//       content: [
//         {
//           heading: "Smart Payment Posting",
//           points: [
//             "Automated ERA / EOB processing",
//             "Underpayment detection",
//             "Faster reconciliation",
//             "Zero-balance auditing",
//           ],
//         },
//       ],
//     },
//     {
//       id: 7,
//       title: "AI-POWERED DENIAL MANAGEMENT SERVICES",
//       icon: <ShieldIcon />,
//       intro:
//         "Our AI denial management system proactively prevents and resolves denials :",
//       content: [
//         {
//           heading: "Denial Prevention & Resolution",
//           points: [
//             "Denial root-cause analysis",
//             "Automated appeal drafting",
//             "Payer trend monitoring",
//             "Improved overturn rates",
//           ],
//         },
//       ],
//     },
//     {
//       id: 8,
//       title: "AI-AUTOMATED AR FOLLOW UP",
//       icon: <AutorenewIcon />,
//       intro: "Our AI system transforms AR management :",
//       content: [
//         {
//           heading: "Accounts Receivable Optimization",
//           points: [
//             "Smart follow-up scheduling",
//             "Collection probability scoring",
//             "Reduced days in AR",
//             "Faster cash recovery",
//           ],
//         },
//       ],
//     },
//   ];

//   return (
//     <Box sx={{ bgcolor: "#F7F9FF", py: { xs: 8, md: 10 } }}>
//       <Container maxWidth="xl">
//         {/* HEADER */}
//         <Box textAlign="center" mb={6}>
//           <Typography
//             sx={{
//               fontWeight: 900,
//               fontSize: { xs: "1.4rem", md: "2.2rem" },
//               color: "#07122C",
//               textTransform: "uppercase",
//             }}
//           >
//             Revenue Cycle Management
//           </Typography>

//           <Box
//             sx={{
//               width: 70,
//               height: 3,
//               bgcolor: "#1B4DFF",
//               mx: "auto",
//               mt: 1.5,
//               borderRadius: 10,
//             }}
//           />

//           <Typography
//             sx={{
//               mt: 2,
//               fontSize: 14,
//               color: "rgba(7,18,44,0.65)",
//               maxWidth: 760,
//               mx: "auto",
//             }}
//           >
//             Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
//             consectetur velit
//           </Typography>
//         </Box>

//         {/* CARDS */}
//         <Box
//           sx={{
//             display: "flex",
//             flexWrap: "wrap",
//             gap: { xs: 2.2, md: 3 },
//             justifyContent: "center",
//             alignItems: "stretch",
//           }}
//         >
//           {services?.map((item) => {
//             const isOpen = openId === item.id;

//             return (
//               <Box
//                 key={item.id}
//                 sx={{
//                   width: { xs: "100%", md: "calc(50% - 12px)" },
//                   maxWidth: 620,
//                 }}
//               >
//                 <Box
//                   sx={{
//                     height: "100%",
//                     bgcolor: "white",
//                     borderRadius: 3,
//                     border: isOpen
//                       ? "1px solid rgba(27,77,255,0.45)"
//                       : "1px solid rgba(227,232,255,0.95)",
//                     boxShadow: isOpen
//                       ? "0 30px 70px rgba(27,77,255,0.12)"
//                       : "0 14px 35px rgba(15,23,42,0.06)",
//                     p: 3,
//                     display: "flex",
//                     flexDirection: "column",
//                     transition: "0.25s ease",
//                   }}
//                 >
//                   {/* HEADER */}
//                   <Box sx={{ display: "flex", gap: 2 }}>
//                     <Box
//                       sx={{
//                         width: 50,
//                         height: 50,
//                         borderRadius: 2.5,
//                         bgcolor: "#EEF2FF",
//                         display: "flex",
//                         alignItems: "center",
//                         justifyContent: "center",
//                         color: "#1B4DFF",
//                         flexShrink: 0,
//                       }}
//                     >
//                       {item.icon}
//                     </Box>

//                     <Box>
//                       <Typography
//                         sx={{
//                           fontWeight: 900,
//                           fontSize: 13,
//                           textTransform: "uppercase",
//                           color: "#07122C",
//                         }}
//                       >
//                         {item.title}
//                       </Typography>

//                       <Typography
//                         sx={{
//                           mt: 1,
//                           fontSize: 13,
//                           color: "rgba(7,18,44,0.65)",
//                         }}
//                       >
//                         {item.intro}
//                       </Typography>
//                     </Box>
//                   </Box>

//                   {/* EXPANDED CONTENT (SCROLL) */}
//                   {isOpen && (
//                     <Box
//                       sx={{
//                         mt: 2.5,
//                         pt: 2,
//                         borderTop: "1px solid rgba(7,18,44,0.08)",
//                         maxHeight: 280,
//                         overflowY: "auto",
//                         pr: 1,
//                         "&::-webkit-scrollbar": { width: 6 },
//                         "&::-webkit-scrollbar-thumb": {
//                           bgcolor: "rgba(27,77,255,0.35)",
//                           borderRadius: 20,
//                         },
//                       }}
//                     >
//                       {item.content.map((sec) => (
//                         <Box key={sec.heading} mb={2.2}>
//                           <Typography
//                             sx={{
//                               fontWeight: 800,
//                               fontSize: 13.5,
//                               color: "#07122C",
//                               mb: 1,
//                             }}
//                           >
//                             {sec.heading}
//                           </Typography>

//                           {sec.points.map((p) => (
//                             <Box
//                               key={p}
//                               sx={{
//                                 display: "flex",
//                                 gap: 1.1,
//                                 mb: 1,
//                               }}
//                             >
//                               <CircleIcon
//                                 sx={{
//                                   fontSize: 7,
//                                   color: "#1B4DFF",
//                                   mt: "7px",
//                                 }}
//                               />
//                               <Typography
//                                 sx={{
//                                   fontSize: 13,
//                                   color: "rgba(7,18,44,0.75)",
//                                   lineHeight: 1.6,
//                                 }}
//                               >
//                                 {p}
//                               </Typography>
//                             </Box>
//                           ))}
//                         </Box>
//                       ))}
//                     </Box>
//                   )}

//                   {/* FOOTER */}
//                   <Typography
//                     onClick={() => toggle(item.id)}
//                     sx={{
//                       mt: "auto",
//                       pt: 2,
//                       fontSize: 13.5,
//                       fontWeight: 900,
//                       color: "#1B4DFF",
//                       cursor: "pointer",
//                       width: "fit-content",
//                     }}
//                   >
//                     {isOpen ? "Read Less →" : "Read More →"}
//                   </Typography>
//                 </Box>
//               </Box>
//             );
//           })}
//         </Box>

//         {/* LAST CENTER CARD */}
//         <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
//           <Box sx={{ width: { xs: "100%", md: 520 } }}>
//             <Box
//               sx={{
//                 bgcolor: "white",
//                 borderRadius: 3,
//                 border: "1px solid rgba(227,232,255,0.95)",
//                 boxShadow: "0 18px 45px rgba(15,23,42,0.06)",
//                 p: 3,
//                 display: "flex",
//                 gap: 2,
//               }}
//             >
//               <Box
//                 sx={{
//                   width: 50,
//                   height: 50,
//                   borderRadius: 2.5,
//                   bgcolor: "#EEF2FF",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   color: "#1B4DFF",
//                 }}
//               >
//                 <GavelIcon />
//               </Box>

//               <Box>
//                 <Typography
//                   sx={{
//                     fontWeight: 900,
//                     fontSize: 13,
//                     textTransform: "uppercase",
//                     color: "#07122C",
//                   }}
//                 >
//                   AI-ENHANCED APPEALS PROCESS
//                 </Typography>

//                 <Typography
//                   sx={{
//                     mt: 1,
//                     fontSize: 13,
//                     color: "rgba(7,18,44,0.65)",
//                   }}
//                 >
//                   Our AI appeals system maximizes overturn rates :
//                 </Typography>

//                 <Typography
//                   sx={{
//                     mt: 1.2,
//                     fontSize: 13.5,
//                     fontWeight: 900,
//                     color: "#1B4DFF",
//                   }}
//                 >
//                   Read More →
//                 </Typography>
//               </Box>
//             </Box>
//           </Box>
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
  Chip,
} from "@mui/material";

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
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

/* ============================================================
   DATA
   ============================================================ */

const services = [
  {
    id: 1,
    title: "AI-Powered Physician Credentialing",
    icon: <PersonIcon />,
    accent: "#1B4DFF",
    intro:
      "Our AI-powered credentialing system revolutionizes the traditional process.",
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
        heading: "Automated Annual Credentialing Maintenance",
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
    title: "AI-Enhanced Patient Registration",
    icon: <PersonAddAltIcon />,
    accent: "#7C3AED",
    intro:
      "Our AI-powered patient registration system revolutionizes the revenue cycle from the beginning.",
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
    title: "AI-Powered Medical Coding Services",
    icon: <CodeIcon />,
    accent: "#0EA5A4",
    intro:
      "Our revolutionary AI coding system delivers unprecedented accuracy and efficiency.",
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
    title: "AI-Automated Charge Entry Process",
    icon: <DescriptionIcon />,
    accent: "#F59E0B",
    intro:
      "Our AI-powered charge entry system eliminates manual errors and accelerates the revenue cycle.",
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
    title: "AI-Driven Claims Submission",
    icon: <SendIcon />,
    accent: "#EC4899",
    intro:
      "Our AI claims management system revolutionizes the submission process.",
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
    title: "AI-Enhanced Payment Posting",
    icon: <PaymentsIcon />,
    accent: "#06B6D4",
    intro:
      "Our AI payment posting system delivers unmatched accuracy and insights.",
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
    title: "AI-Powered Denial Management",
    icon: <ShieldIcon />,
    accent: "#EF4444",
    intro:
      "Our AI denial management system proactively prevents and resolves denials.",
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
    title: "AI-Automated AR Follow Up",
    icon: <AutorenewIcon />,
    accent: "#10B981",
    intro: "Our AI system transforms AR management end-to-end.",
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

const appealsCard = {
  id: 9,
  title: "AI-Enhanced Appeals Process",
  icon: <GavelIcon />,
  accent: "#6366F1",
  intro: "Our AI appeals system maximizes overturn rates.",
  content: [
    {
      heading: "Intelligent Appeal Strategy",
      points: [
        "Automated appeal letter drafting with payer-specific language",
        "Evidence-based clinical documentation pulling",
        "Predictive success scoring for appeals prioritization",
        "Real-time tracking of appeal outcomes and payer trends",
      ],
    },
    {
      heading: "Closed-Loop Analytics",
      points: [
        "Root-cause feedback into upstream coding and documentation",
        "Denial pattern detection across payers",
        "Continuous learning from overturn and rejection outcomes",
        "Executive dashboards for revenue recovery metrics",
      ],
    },
  ],
};

/* ============================================================
   MAIN COMPONENT
   ============================================================ */

export default function RevenueCycleManagement() {
  const [openId, setOpenId] = useState(1);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

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
          opacity: 0.3,
          backgroundImage:
            "radial-gradient(rgba(27,77,255,0.20) 0.6px, transparent 0.6px)",
          backgroundSize: "22px 22px",
          pointerEvents: "none",
        }}
      />

      <Container id="read-more-section" maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
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
              Full Lifecycle Coverage
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
              Revenue Cycle Management.
            </Box>
          </Typography>

          <Typography
            sx={{
              mt: 2,
              fontSize: { xs: 14, md: 16 },
              color: "rgba(7,18,44,0.6)",
              maxWidth: 720,
              mx: "auto",
              lineHeight: 1.7,
            }}
          >
            End-to-end intelligent automation across the entire RCM
            lifecycle — from patient registration to final reimbursement.
          </Typography>

          {/* Quick stat chips */}
          <Stack
            direction="row"
            spacing={1.5}
            sx={{
              mt: 3,
              flexWrap: "wrap",
              gap: 1.5,
              justifyContent: "center",
            }}
          >
            {[
              "8 RCM Modules",
              "AI-Driven",
              "HIPAA-Compliant",
              "Faster Cash Flow",
            ].map((tag) => (
              <Chip
                key={tag}
                label={tag}
                size="small"
                sx={{
                  bgcolor: "rgba(27,77,255,0.08)",
                  color: "#1B4DFF",
                  fontWeight: 800,
                  fontSize: 11,
                  letterSpacing: "0.04em",
                  border: "1px solid rgba(27,77,255,0.18)",
                  height: 28,
                }}
              />
            ))}
          </Stack>
        </Box>

        {/* ─── Services grid ─── */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: { xs: 2.5, md: 3 },
            alignItems: "start",
          }}
        >
          {services.map((item) => (
            <ServiceCard
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onToggle={() => toggle(item.id)}
            />
          ))}

          {/* Appeals card — spans both columns and centers */}
          <Box
            sx={{
              gridColumn: { xs: "span 1", md: "1 / -1" },
              display: "flex",
              justifyContent: "center",
              mt: { xs: 0, md: 1 },
            }}
          >
            <Box sx={{ width: "100%", maxWidth: { xs: "100%", md: 720 } }}>
              <ServiceCard
                item={appealsCard}
                isOpen={openId === appealsCard.id}
                onToggle={() => toggle(appealsCard.id)}
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

/* ============================================================
   SERVICE CARD
   ============================================================ */

function ServiceCard({ item, isOpen, onToggle }) {
  return (
    <Paper
      elevation={0}
      sx={{
        position: "relative",
        borderRadius: 4,
        bgcolor: "#fff",
        border: isOpen
          ? `1px solid ${item.accent}55`
          : "1px solid rgba(227,232,255,0.95)",
        overflow: "hidden",
        boxShadow: isOpen
          ? `0 30px 80px -30px ${item.accent}55`
          : "0 14px 35px rgba(15, 23, 42, 0.06)",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          background: `linear-gradient(90deg, ${item.accent} 0%, transparent 100%)`,
          opacity: isOpen ? 1 : 0.7,
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
              mt: 0.8,
              fontSize: 12.8,
              color: "rgba(7,18,44,0.62)",
              lineHeight: 1.55,
            }}
          >
            {item.intro}
          </Typography>
        </Box>
      </Box>

      {/* ─── Expanded content ─── */}
      {isOpen && (
        <Box
          sx={{
            px: { xs: 2.4, md: 3 },
            py: { xs: 2.4, md: 2.6 },
            borderTop: "1px solid rgba(227,232,255,0.6)",
            maxHeight: 320,
            overflowY: "auto",
            pr: { xs: 1.4, md: 2 },
            "&::-webkit-scrollbar": { width: 6 },
            "&::-webkit-scrollbar-thumb": {
              bgcolor: `${item.accent}66`,
              borderRadius: 20,
            },
            "&::-webkit-scrollbar-track": {
              bgcolor: "rgba(27,77,255,0.06)",
              borderRadius: 20,
            },
          }}
        >
          <Stack spacing={2.4}>
            {item.content.map((sec) => (
              <Box key={sec.heading}>
                <Typography
                  sx={{
                    fontWeight: 900,
                    fontSize: 13.5,
                    color: "#07122C",
                    mb: 1.4,
                    lineHeight: 1.4,
                  }}
                >
                  {sec.heading}
                </Typography>

                <Stack spacing={1}>
                  {sec.points.map((p) => (
                    <Box
                      key={p}
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
                          fontSize: 13,
                          color: "rgba(7,18,44,0.75)",
                          lineHeight: 1.6,
                        }}
                      >
                        <Box
                          component="span"
                          sx={{ fontWeight: 900, color: "#0B1220" }}
                        >
                          {p.split(":")[0]}
                        </Box>
                        {p.includes(":")
                          ? ` : ${p.split(":").slice(1).join(":").trim()}`
                          : ""}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </Box>
            ))}
          </Stack>
        </Box>
      )}

      {/* ─── Footer / toggle ─── */}
      <Box
        onClick={onToggle}
        sx={{
          mt: "auto",
          px: { xs: 2.4, md: 3 },
          py: { xs: 1.8, md: 2 },
          borderTop: "1px solid rgba(227,232,255,0.6)",
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
        {isOpen ? "Read Less" : "Read More"}
        <ExpandMoreIcon
          sx={{
            fontSize: 18,
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease",
          }}
        />
      </Box>
    </Paper>
  );
}