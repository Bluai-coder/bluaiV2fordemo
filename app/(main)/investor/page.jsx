// "use client";

// import {
//     Box,
//     Container,
//     Typography,
//     Stack,
//     useMediaQuery,
// } from "@mui/material";
// import Image from "next/image";
// ;
// import InvestorForm from "../../../components/InvestorForm";

// export default function Investor() {



//     return (
//         <Box>
//             <Box
//                 sx={{
//                     position: "relative",
//                     width: "100%",
//                     minHeight: {
//                         xs: "40vh",   // mobile
//                         sm: "50vh",
//                         md: "50vh",  // desktop
//                     },
//                     overflow: "hidden",
//                 }}
//             >
//                 {/* Background Image */}
//                 <Image
//                     src="/investor/investor-form.avif"
//                     alt="Hero background"
//                     fill
//                     priority
//                     sizes="100vw"
//                     style={{
//                         objectFit: "cover",
//                     }}
//                 />

//                 {/* Dark Overlay */}
//                 <Box
//                     sx={{
//                         position: "absolute",
//                         inset: 0,
//                         background:
//                             "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55))",
//                         zIndex: 1,
//                     }}
//                 />

//                 {/* Content */}
//                 <Box
//                     sx={{
//                         position: "relative",
//                         zIndex: 2,
//                         minHeight: "inherit",
//                         display: "flex",
//                         flexDirection: "column",
//                         alignItems: "center",
//                         justifyContent: "center",
//                         textAlign: "center",
//                         px: { xs: 2, sm: 3 },
//                         color: "#ffffff",
//                     }}
//                 >



//                     <Typography
//                         sx={{
//                             color: "#ffffff",
//                             fontWeight: 800,
//                             fontSize: { xs: 36, sm: 46, md: 56 },
//                             letterSpacing: "-0.02em",
//                         }}
//                     >
//                         <Box component="span" className="!text-[#1b4dff]" color="text.primary">
//                             BluAI  {" "}
//                         </Box>

//                         <Box component="span" className="!text-white" color="primary.main">
//                             Inc.
//                         </Box>
//                     </Typography>
//                     <Typography
//                         sx={{
//                             fontWeight: 400,
//                             fontSize: { xs: 18, sm: 28, md: 36 },
//                             letterSpacing: "-0.02em",
//                         }}
//                     >
//                         <Box component="span" className="!text-[#fff]" color="">
//                             Revolutionizing Healthcare Access Across The Globe
//                         </Box>
//                     </Typography>



//                 </Box>


//             </Box>

//             <Container maxWidth="lg">

//                 {/* HEADER BADGE */}
//                 <Stack spacing={2} alignItems="center" textAlign="center" mt={4} mb={{ xs: 4, md: 6 }}>





//                     <Typography
//                         sx={{
//                             fontWeight: 950,
//                             color: "#ffffff",
//                             fontSize: { xs: "1.7rem", md: "2.4rem" },
//                             lineHeight: 1.12,
//                             maxWidth: 960,
//                         }}
//                     >
//                         BluAI: Revolutionizing Healthcare Through Medical Data Intelligence

//                     </Typography>

//                     <Typography
//                         sx={{
//                             maxWidth: 960,
//                             color: "#ffffff",
//                             fontSize: 14.5,
//                             lineHeight: 1.85,
//                         }}
//                     >
//                         BluAI is a medical data company that solves healthcare's critical interoperability challenge. Our proprietary platform aggregates fragmented patient data from multiple sources—EHRs, imaging systems, and medical devices—into a unified, actionable intelligence layer. Built on open standards (FHIR, HL7, DICOM) with enterprise-grade security, our cloud-native architecture reduces implementation costs by 70% while delivering real-time data access across the care continuum.

//                     </Typography>
//                     <Typography
//                         sx={{
//                             maxWidth: 960,
//                             color: "#ffffff",
//                             fontSize: 14.5,
//                             lineHeight: 1.85,
//                         }}
//                     >
//                         We transform siloed medical records into a comprehensive patient data ecosystem, enabling providers to make better clinical decisions faster while giving patients seamless access to their complete health history. By eliminating data fragmentation through our proprietary medical device equipment (MDE) and intelligent orchestration layer, BluAI empowers healthcare organizations to improve outcomes, reduce costs, and deliver truly connected care.
//                     </Typography>
//                 </Stack>
//                 <InvestorForm/>

//             </Container>

//         </Box>
//     );
// }

"use client";

import {
  Box,
  Container,
  Typography,
  Stack,
  Paper,
  Chip,
  Divider,
  Button,
} from "@mui/material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import HubIcon from "@mui/icons-material/Hub";
import ShieldIcon from "@mui/icons-material/Shield";
import BoltIcon from "@mui/icons-material/Bolt";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import InvestorForm from "../../../components/InvestorForm";

/* ------------------------------------------------------------------ */
/*  Data                                                              */
/* ------------------------------------------------------------------ */

const HIGHLIGHTS = [
  {
    icon: <HubIcon />,
    label: "Unified Data Layer",
    desc: "EHRs, imaging, and devices — one source of truth.",
  },
  {
    icon: <ShieldIcon />,
    label: "Enterprise Security",
    desc: "FHIR, HL7 & DICOM. HIPAA-aligned by design.",
  },
  {
    icon: <BoltIcon />,
    label: "70% Lower Cost",
    desc: "Cloud-native architecture, real-time access.",
  },
  {
    icon: <TrendingUpIcon />,
    label: "Better Outcomes",
    desc: "Faster clinical decisions at national scale.",
  },
];

const STATS = [
  { value: "70%", label: "Lower implementation cost" },
  { value: "3+", label: "Open standards supported" },
  { value: "24/7", label: "Real-time data access" },
  { value: "100%", label: "Patient-data ownership" },
];

const PILLARS = [
  "FHIR, HL7, and DICOM native",
  "Cloud-native, HIPAA-aligned",
  "Proprietary MDE orchestration",
  "Zero-fragmentation architecture",
];

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */

export default function Investor() {
  return (
    <Box sx={{ bgcolor: "#f8fafc", minHeight: "100vh", overflow: "hidden" }}>
      {/* ============ HERO ============ */}
      <Box
        sx={{
          position: "relative",
          pt: { xs: 12, md: 16 },
          pb: { xs: 8, md: 10 },
          background:
            "radial-gradient(1400px 600px at 50% -20%, rgba(27,77,255,0.14), transparent 60%), #f8fafc",
        }}
      >
        {/* Grid pattern */}
        <Box
          aria-hidden
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(15,23,42,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.04) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage:
              "radial-gradient(ellipse at 50% 20%, #000 45%, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at 50% 20%, #000 45%, transparent 80%)",
            pointerEvents: "none",
          }}
        />

        <Container maxWidth="xl" sx={{ position: "relative" }}>
          <Stack spacing={3.5} alignItems="center" textAlign="center">
            <Chip
              label="INVESTOR RELATIONS"
              sx={{
                bgcolor: "rgba(27,77,255,0.08)",
                color: "#1b4dff",
                fontWeight: 800,
                fontSize: 11,
                letterSpacing: "0.16em",
                height: 30,
                border: "1px solid rgba(27,77,255,0.18)",
              }}
            />

            <Typography
              component="h1"
              sx={{
                fontWeight: 800,
                color: "#0b1437",
                fontSize: { xs: 30, sm: 42, md: 54 },
                lineHeight: 1.08,
                letterSpacing: "-0.035em",
                maxWidth: 960,
              }}
            >
              Revolutionizing healthcare through{" "}
              <Box
                component="span"
                sx={{
                  position: "relative",
                  whiteSpace: "nowrap",
                  background:
                    "#1b4dff",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                medical data intelligence
              </Box>
            </Typography>

            <Typography
              sx={{
                maxWidth: 700,
                color: "#475569",
                fontSize: { xs: 15.5, sm: 17 },
                lineHeight: 1.7,
              }}
            >
              BluAI aggregates fragmented patient data into a unified,
              actionable intelligence layer — so providers can deliver faster,
              smarter, more connected care.
            </Typography>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={1.5}
              sx={{ pt: 1 }}
            >
              <Button
                href="#investor-form"
                variant="contained"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  px: 3.5,
                  py: 1.2,
                  borderRadius: 99,
                  bgcolor: "#1b4dff",
                  textTransform: "none",
                  fontWeight: 700,
                  fontSize: 14.5,
                  boxShadow: "0 10px 26px rgba(27,77,255,0.28)",
                  "&:hover": {
                    bgcolor: "#153dcf",
                    boxShadow: "0 14px 32px rgba(27,77,255,0.35)",
                  },
                }}
              >
                Request Investor Deck
              </Button>
              <Button
                href="#narrative"
                variant="text"
                sx={{
                  px: 2.5,
                  py: 1.2,
                  borderRadius: 99,
                  color: "#0b1437",
                  textTransform: "none",
                  fontWeight: 600,
                  fontSize: 14.5,
                  "&:hover": { bgcolor: "rgba(15,23,42,0.05)" },
                }}
              >
                Learn more
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>

      {/* ============ STATS STRIP ============ */}
      <Container maxWidth="xl">
        <Paper
          elevation={0}
          sx={{
            borderRadius: 4,
            border: "1px solid #e8ecf5",
            bgcolor: "#fff",
            p: { xs: 3, md: 4 },
            boxShadow: "0 20px 40px -20px rgba(15,23,42,0.10)",
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(2, 1fr)",
                md: "repeat(4, 1fr)",
              },
              gap: { xs: 3, md: 2 },
              "& > *:not(:last-child)": {
                borderRight: {
                  md: "1px solid #eef2f8",
                },
              },
            }}
          >
            {STATS.map((s, i) => (
              <Box
                key={i}
                sx={{
                  textAlign: "center",
                  px: { md: 2 },
                  borderRight: {
                    xs:
                      i % 2 === 0 && i !== STATS.length - 1
                        ? "1px solid #eef2f8"
                        : "none",
                    md: i !== STATS.length - 1 ? "1px solid #eef2f8" : "none",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 800,
                    fontSize: { xs: 28, md: 34 },
                    letterSpacing: "-0.03em",
                    background:
                      "linear-gradient(180deg, #1b4dff 0%, #0b1437 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    mb: 0.5,
                  }}
                >
                  {s.value}
                </Typography>
                <Typography
                  sx={{
                    fontSize: 12.5,
                    color: "#64748b",
                    fontWeight: 500,
                    letterSpacing: "0.01em",
                  }}
                >
                  {s.label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Paper>
      </Container>

      {/* ============ HIGHLIGHTS ============ */}
      <Container maxWidth="xl" sx={{ pt: { xs: 8, md: 10 } }}>
        <Stack spacing={1.5} alignItems="center" textAlign="center" mb={5}>
          <Typography
            variant="overline"
            sx={{
              color: "#1b4dff",
              fontWeight: 800,
              letterSpacing: "0.16em",
              fontSize: 11,
            }}
          >
            Why BluAI
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 800,
              color: "#0b1437",
              letterSpacing: "-0.025em",
              fontSize: { xs: 24, md: 30 },
            }}
          >
            Built for the future of connected care
          </Typography>
        </Stack>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(4, 1fr)",
            },
            gap: 2.5,
          }}
        >
          {HIGHLIGHTS.map((item, i) => (
            <Paper
              key={item.label}
              elevation={0}
              sx={{
                position: "relative",
                p: 3,
                borderRadius: 3,
                bgcolor: "#fff",
                border: "1px solid #e8ecf5",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                overflow: "hidden",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 2,
                  background:
                    "linear-gradient(90deg, #1b4dff, #6a8dff, transparent)",
                  opacity: 0,
                  transition: "opacity 0.3s ease",
                },
                "&:hover": {
                  transform: "translateY(-4px)",
                  borderColor: "rgba(27,77,255,0.30)",
                  boxShadow: "0 20px 40px -16px rgba(27,77,255,0.20)",
                  "&::before": { opacity: 1 },
                },
              }}
            >
              <Typography
                sx={{
                  position: "absolute",
                  top: 14,
                  right: 18,
                  fontSize: 11,
                  fontWeight: 800,
                  color: "#cbd5e1",
                  letterSpacing: "0.05em",
                }}
              >
                0{i + 1}
              </Typography>

              <Box
                sx={{
                  width: 44,
                  height: 44,
                  borderRadius: 2,
                  background:
                    "linear-gradient(180deg, rgba(27,77,255,0.10) 0%, rgba(27,77,255,0.04) 100%)",
                  color: "#1b4dff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 2,
                  "& svg": { fontSize: 22 },
                }}
              >
                {item.icon}
              </Box>

              <Typography
                sx={{
                  fontWeight: 700,
                  color: "#0b1437",
                  fontSize: 15,
                  mb: 0.75,
                  letterSpacing: "-0.01em",
                }}
              >
                {item.label}
              </Typography>
              <Typography
                sx={{ fontSize: 13.5, color: "#64748b", lineHeight: 1.6 }}
              >
                {item.desc}
              </Typography>
            </Paper>
          ))}
        </Box>
      </Container>

      {/* ============ NARRATIVE ============ */}
      <Container maxWidth="xl" id="narrative" sx={{ pt: { xs: 8, md: 12 } }}>
        <Paper
          elevation={0}
          sx={{
            borderRadius: 4,
            border: "1px solid #e8ecf5",
            bgcolor: "#fff",
            overflow: "hidden",
            boxShadow: "0 20px 40px -24px rgba(15,23,42,0.10)",
          }}
        >
          {/* Header bar */}
          <Box
            sx={{
              px: { xs: 3, md: 5 },
              py: 2.5,
              borderBottom: "1px solid #eef2f8",
              bgcolor: "#fafbff",
              display: "flex",
              alignItems: "center",
              gap: 1.5,
            }}
          >
            <Box
              sx={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                bgcolor: "#1b4dff",
                boxShadow: "0 0 0 4px rgba(27,77,255,0.15)",
              }}
            />
            <Typography
              sx={{
                fontSize: 12,
                fontWeight: 700,
                color: "#64748b",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              The BluAI Story
            </Typography>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            }}
          >
            {/* Challenge */}
            <Box
              sx={{
                p: { xs: 3.5, md: 5 },
                borderRight: { md: "1px solid #eef2f8" },
                borderBottom: { xs: "1px solid #eef2f8", md: "none" },
              }}
            >
              <Typography
                variant="overline"
                sx={{
                  color: "#ef4444",
                  fontWeight: 800,
                  letterSpacing: "0.16em",
                  fontSize: 11,
                }}
              >
                The Challenge
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 800,
                  color: "#0b1437",
                  mt: 0.75,
                  mb: 2.25,
                  letterSpacing: "-0.025em",
                  lineHeight: 1.25,
                }}
              >
                Fragmented data.
                <br />
                Delayed care.
              </Typography>
              <Typography sx={{ color: "#475569", fontSize: 15, lineHeight: 1.8 }}>
                BluAI is a medical data company that solves healthcare's
                critical interoperability challenge. Our proprietary platform
                aggregates fragmented patient data from multiple
                sources—EHRs, imaging systems, and medical devices—into a
                unified, actionable intelligence layer. Built on open standards
                (FHIR, HL7, DICOM) with enterprise-grade security, our
                cloud-native architecture reduces implementation costs by{" "}
                <Box component="span" sx={{ fontWeight: 700, color: "#0b1437" }}>
                  70%
                </Box>{" "}
                while delivering real-time data access across the care
                continuum.
              </Typography>
            </Box>

            {/* Solution */}
            <Box sx={{ p: { xs: 3.5, md: 5 } }}>
              <Typography
                variant="overline"
                sx={{
                  color: "#10b981",
                  fontWeight: 800,
                  letterSpacing: "0.16em",
                  fontSize: 11,
                }}
              >
                The Solution
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 800,
                  color: "#0b1437",
                  mt: 0.75,
                  mb: 2.25,
                  letterSpacing: "-0.025em",
                  lineHeight: 1.25,
                }}
              >
                One ecosystem.
                <br />
                Zero fragmentation.
              </Typography>
              <Typography sx={{ color: "#475569", fontSize: 15, lineHeight: 1.8 }}>
                We transform siloed medical records into a comprehensive
                patient data ecosystem, enabling providers to make better
                clinical decisions faster while giving patients seamless access
                to their complete health history. By eliminating data
                fragmentation through our proprietary medical device equipment
                (
                <Box component="span" sx={{ fontWeight: 700, color: "#0b1437" }}>
                  MDE
                </Box>
                ) and intelligent orchestration layer, BluAI empowers
                healthcare organizations to improve outcomes, reduce costs, and
                deliver truly connected care.
              </Typography>
            </Box>
          </Box>
        </Paper>

        {/* Pillars under narrative */}
        <Box
          sx={{
            mt: 3,
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(4, 1fr)" },
            gap: 1.5,
          }}
        >
          {PILLARS.map((p) => (
            <Stack
              key={p}
              direction="row"
              spacing={1.25}
              alignItems="center"
              sx={{
                p: 1.75,
                borderRadius: 2.5,
                bgcolor: "#fff",
                border: "1px solid #e8ecf5",
              }}
            >
              <CheckCircleIcon sx={{ color: "#1b4dff", fontSize: 18 }} />
              <Typography sx={{ fontSize: 13.5, color: "#334155", fontWeight: 500 }}>
                {p}
              </Typography>
            </Stack>
          ))}
        </Box>
      </Container>

      {/* ============ FORM ============ */}
      <Box
        id="investor-form"
        sx={{
          pt: { xs: 10, md: 0 },
          pb: { xs: 10, md: 14 },
          mt: { xs: 8, md: 12 },
          position: "relative",
          background:
            "linear-gradient(180deg, #f8fafc 0%, #eef2fb 60%, #e6ecfa 100%)",
        }}
      >
        <Container maxWidth="xl">
          <Stack spacing={1.5} alignItems="center" textAlign="center" mb={5}>
            <Chip
              label="GET STARTED"
              sx={{
                bgcolor: "rgba(27,77,255,0.08)",
                color: "#1b4dff",
                fontWeight: 800,
                fontSize: 11,
                letterSpacing: "0.16em",
                height: 28,
                border: "1px solid rgba(27,77,255,0.18)",
              }}
            />
            <Typography
              variant="h4"
              sx={{
                fontWeight: 800,
                color: "#0b1437",
                letterSpacing: "-0.025em",
                fontSize: { xs: 26, md: 34 },
              }}
            >
              Request investor information
            </Typography>
            <Typography
              sx={{
                color: "#64748b",
                fontSize: 15.5,
                maxWidth: "100%",
                lineHeight: 1.7,
              }}
            >
              Share a few details and our team will get back to you within
              24–48 hours with the full investor deck and next steps.
            </Typography>
          </Stack>

          <InvestorForm />
        </Container>
      </Box>
    </Box>
  );
}