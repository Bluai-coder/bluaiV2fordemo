

"use client";

import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  Stack,
} from "@mui/material";
import Image from "next/image";
import BusinessIcon from "@mui/icons-material/Business";
import FactoryIcon from "@mui/icons-material/Factory";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import SchoolIcon from "@mui/icons-material/School";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import HubIcon from "@mui/icons-material/Hub";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ShieldIcon from "@mui/icons-material/Shield";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import BoltIcon from "@mui/icons-material/Bolt";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useRouter } from "next/navigation";
import { CheckCircleIcon, VerifiedIcon } from "lucide-react";
import SecurityIcon from "@mui/icons-material/Security";

/* =========================================================
   DATA
========================================================= */

const modules = [
  {
    id: 1,
    code: "EAMMS",
    route: "/products/blu-access/EAMMS",
    forText: "For",
    title: "Offices",
    icon: <BusinessIcon />,
  },
  {
    id: 2,
    code: "WAMMS",
    route: "#",
    forText: "For",
    title: "Factories & Warehouses",
    icon: <FactoryIcon />,
  },
  {
    id: 3,
    code: "HAMMS",
    route: "#",
    forText: "For",
    title: "Hospitals & Clinics",
    icon: <LocalHospitalIcon />,
  },
  {
    id: 4,
    code: "SAMMS",
    route: "/products/blu-access/SAMMS",
    forText: "For",
    title: "Schools",
    icon: <SchoolIcon />,
  },
];

const quickFeatures = [
  {
    id: 101,
    title: "Admin Dashboard",
    icon: <AdminPanelSettingsIcon />,
  },
  {
    id: 102,
    title: "System Integration",
    icon: <HubIcon />,
  },
  {
    id: 103,
    title: "Mobile Access",
    icon: <SmartphoneIcon />,
  },
];

const bluAccessPoints = [
  { id: 1, text: "Customizable Access Control" },
  { id: 2, text: "Real-time Monitoring" },
  { id: 3, text: "Biometric Authentication" },
  { id: 4, text: "Scheduled Access Rules" },
  { id: 5, text: "Reporting, Alerts & Notifications" },
  { id: 6, text: "Integration Flexibility" },
  { id: 7, text: "Visitor Tracking & Badge Management" },
  { id: 8, text: "And much more..." },
];

const heroBadges = [
  "BIOMETRIC",
  "REAL-TIME",
  "SCALABLE",
  "SECURE",
];

const featureStrip = [
  {
    icon: <FingerprintIcon />,
    title: "Biometric Access",
    subtitle: "Edge-based facial recognition",
  },
  {
    icon: <ShieldIcon />,
    title: "Zero-Trust Security",
    subtitle: "End-to-end encrypted",
  },
  {
    icon: <BoltIcon />,
    title: "Real-Time Alerts",
    subtitle: "Instant anomaly detection",
  },
  {
    icon: <VisibilityIcon />,
    title: "Full Audit Trail",
    subtitle: "Compliance-ready logs",
  },
];

/* =========================================================
   REUSABLE PREMIUM CARD
========================================================= */

function PremiumTile({ children, sx, onClick }) {
  return (
    <Card
      elevation={0}
      onClick={onClick}
      sx={{
        cursor: onClick ? "pointer" : "default",
        borderRadius: 4,
        border: "1px solid rgba(15,23,42,0.08)",
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.82) 100%)",
        boxShadow: "0 16px 45px rgba(15,23,42,0.08)",
        backdropFilter: "blur(10px)",
        overflow: "hidden",
        ...sx,
      }}
    >
      {children}
    </Card>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function BluAccessPage() {
  const router = useRouter();

  return (
    <Box sx={{ width: "100%", bgcolor: "#fff" }}>
      {/* ===================================================== */}
      {/* HERO */}
      {/* ===================================================== */}
      <Box
        sx={{
          position: "relative",
          bgcolor: "#F7F9FF",
          pt: { xs: 7, md: 10 },
          pb: { xs: 6, md: 8 },
          overflow: "hidden",
        }}
      >
        {/* Dotted tech background */}
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
        {/* Fade overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(247,249,255,0.8) 0%, rgba(247,249,255,0.95) 55%, rgba(247,249,255,1) 100%)",
            pointerEvents: "none",
          }}
        />

        <Container maxWidth="xl" sx={{ position: "relative", zIndex: 2 }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1.1fr 1fr" },
              alignItems: "center",
              gap: { xs: 5, md: 0 },
            }}
          >
            {/* LEFT — copy */}
            <Box>
              <Stack
                direction="row"
                spacing={1}
                sx={{ flexWrap: "wrap", gap: 1, mb: 2.5 }}
              >
                {heroBadges.map((tag) => (
                  <Typography
                    key={tag}
                    sx={{
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: "0.05em",
                      color: "#1B4DFF",
                      bgcolor: "rgba(27,77,255,0.08)",
                      px: 1.6,
                      py: 0.7,
                      borderRadius: 20,
                    }}
                  >
                    {tag}
                  </Typography>
                ))}
              </Stack>

              <Typography
                sx={{
                  fontWeight: 900,
                  color: "#0b1c3d",
                  fontSize: { xs: 36, sm: 44, md: 66 },
                  letterSpacing: "-0.02em",
                  lineHeight: 1.05,
                }}
              >
                BluAccess™
              </Typography>

              <Typography
                sx={{
                  mt: 1.3,
                  fontWeight: 800,
                  color: "#1B4DFF",
                  fontSize: { xs: 18, md: 53 },
                  lineHeight: 1.4,
                }}
              >
                Redefining Access Control for Modern Facilities
              </Typography>

              <Typography
                sx={{
                  mt: 2.5,
                  fontWeight: 500,
                  color: "rgba(7,18,44,0.68)",
                  fontSize: { xs: 15, md: 16.5 },
                  lineHeight: 1.75,
                  maxWidth: 560,
                }}
              >
                Advanced biometric authentication, real-time monitoring, and
                intelligent access management — engineered for offices,
                factories, hospitals, and schools.
              </Typography>
              {/* Small trust row */}
              <Stack
                direction="row"
                alignItems="center"
                justifyContent={{ xs: "center", sm: "flex-start" }}
                useFlexGap
                sx={{
                  mt: { xs: 0, md: 4 },
                  flexWrap: "wrap",
                  gap: { xs: 0.4, sm: 1, md: 1.5 },
                  rowGap: { xs: 0, md: 1 },
                  width: { xs: "auto", sm: "auto" },
                  maxWidth: "100%",
                }}
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
                    useFlexGap
                    sx={{
                      gap: { xs: 0.4, sm: 0.6, md: 0.8 },
                      flexShrink: 0,
                      minWidth: 0,
                    }}
                  >
                    <Box
                      sx={{
                        color: "#2563eb",
                        display: "flex",
                        flexShrink: 0,
                        "& svg": {
                          fontSize: "clamp(13px, 0.6vw + 8px, 16px)",
                        },
                      }}
                    >
                      {item.icon}
                    </Box>
                    <Typography
                      sx={{
                        fontSize: "clamp(10.5px, 0.6vw + 8px, 12.5px)",
                        fontWeight: 700,
                        color: "rgba(15,23,42,0.65)",
                        lineHeight: 1.2,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {item.label}
                    </Typography>
                  </Stack>
                ))}
              </Stack>

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

            {/* RIGHT — phone mockups */}
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "flex-end" },
                alignItems: "center",
                width: "100%",
                minWidth: 0, // 👈 critical for grid children to shrink properly
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  maxWidth: { xs: 340, sm: 480, md: 620, lg: 980 },
                  // Aspect ratio keeps the container from collapsing on mobile
                  aspectRatio: { xs: "4 / 3", sm: "16 / 10", md: "16 / 9" },
                  mx: "auto",
                }}
              >
                {/* Front phone */}
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0, // 👈 fills the aspect-ratio container
                    borderRadius: { xs: 3, sm: 4, md: 6 },
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(245,250,255,0.88) 100%)",
                    border: "1px solid rgba(15,23,42,0.10)",
                    boxShadow: {
                      xs: "0 18px 45px rgba(15,23,42,0.14)",
                      md: "0 30px 80px rgba(15,23,42,0.18)",
                    },
                    overflow: "hidden",
                  }}
                >
                  <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
                    <Image
                      src="/blu-acc/access.webp"
                      alt="BluAccess App"
                      fill
                      sizes="(max-width: 600px) 90vw, (max-width: 900px) 480px, (max-width: 1200px) 620px, 720px"
                      style={{
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                      priority
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>

          {/* Feature strip */}
          <Box
            sx={{
              mt: { xs: 0, md: 2 },
              pt: 4,
              // borderTop: "1px solid rgba(27,77,255,0.07)",
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2,1fr)",
                md: "repeat(4,1fr)",
              },
              gap: 2,
            }}
          >
            {featureStrip.map((f) => (
              <PremiumTile
                key={f.title}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  p: 2,
                  borderRadius: 3,
                }}
              >
                <Box
                  sx={{
                    color: "#1B4DFF",
                    display: "flex",
                    alignItems: "center",
                    "& svg": { fontSize: 26 },
                  }}
                >
                  {f.icon}
                </Box>
                <Box>
                  <Typography
                    sx={{ fontSize: 12.5, fontWeight: 800, color: "#07122C" }}
                  >
                    {f.title}
                  </Typography>
                  <Typography sx={{ fontSize: 10.5, color: "#94A3B8" }}>
                    {f.subtitle}
                  </Typography>
                </Box>
              </PremiumTile>
            ))}
          </Box>
        </Container>
      </Box>


      {/* ===================================================== */}
      {/* MODULES SECTION — EAMMS / WAMMS / HAMMS / SAMMS */}
      {/* ===================================================== */}
      <Box
        sx={{
          position: "relative",
          py: { xs: 8, md: 12 },
          background:
            "linear-gradient(180deg, #FFFFFF 0%, #F7FAFF 40%, #EEF3FF 100%)",
          overflow: "hidden",
        }}
      >
        {/* Decorative background glows */}
        <Box
          sx={{
            position: "absolute",
            top: "-10%",
            left: "-5%",
            width: 480,
            height: 480,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(47,70,255,0.10) 0%, transparent 65%)",
            pointerEvents: "none",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: "-15%",
            right: "-8%",
            width: 560,
            height: 560,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(0,163,255,0.10) 0%, transparent 65%)",
            pointerEvents: "none",
          }}
        />

        <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
          {/* ─── Section header ─── */}
          <Box textAlign="center" mb={{ xs: 6, md: 8 }}>
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                px: 2,
                py: 0.8,
                borderRadius: 999,
                bgcolor: "rgba(27,77,255,0.08)",
                border: "1px solid rgba(27,77,255,0.15)",
                mb: 2.5,
              }}
            >
              <Box
                sx={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  bgcolor: "#1B4DFF",
                }}
              />
              <Typography
                sx={{
                  fontSize: 11,
                  fontWeight: 800,
                  letterSpacing: "0.12em",
                  color: "#1B4DFF",
                  textTransform: "uppercase",
                }}
              >
                BluAccess™ Modules
              </Typography>
            </Box>

            <Typography
              sx={{
                fontSize: { xs: "2rem", md: "3rem" },
                fontWeight: 900,
                color: "#0b1c3d",
                lineHeight: 1.08,
                letterSpacing: "-0.02em",
              }}
            >
              Four Modules.
              <br />
              <Box
                component="span"
                sx={{
                  background:
                    "#1B4DFF",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Every Environment.
              </Box>
            </Typography>

            <Typography
              sx={{
                mt: 2.5,
                fontSize: { xs: 15, md: 17 },
                color: "rgba(7,18,44,0.6)",
                maxWidth: 620,
                mx: "auto",
                lineHeight: 1.7,
              }}
            >
              Purpose-built access management for offices, factories, hospitals, and
              schools — one platform, tailored to each environment.
            </Typography>
          </Box>

          {/* ─── THE 4 MAIN MODULES ─── */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2,1fr)",
                lg: "repeat(4,1fr)",
              },
              gap: { xs: 2.5, md: 3 },
            }}
          >
            {modules.map((m, idx) => {
              // Per-module accent color for a subtle variety
              const accents = [
                { from: "#1B4DFF", to: "#5B8CFF" }, // EAMMS — blue
                { from: "#7C3AED", to: "#A78BFA" }, // WAMMS — violet
                { from: "#0EA5A4", to: "#5EEAD4" }, // HAMMS — teal
                { from: "#F59E0B", to: "#FBBF24" }, // SAMMS — amber
              ];
              const accent = accents[idx % accents.length];

              return (
                <Box
                  key={m.id}
                  onClick={() => m.route !== "#" && router.push(m.route)}
                  sx={{
                    position: "relative",
                    cursor: m.route !== "#" ? "pointer" : "default",
                    borderRadius: 5,
                    p: "1.5px", // gradient border thickness
                    background: `linear-gradient(135deg, ${accent.from} 0%, ${accent.to} 100%)`,
                    transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                    "&:hover": {
                      transform: "translateY(-10px)",
                      boxShadow: `0 40px 90px -20px ${accent.from}55`,
                    },
                    "&:hover .module-inner": {
                      background:
                        "linear-gradient(180deg, #FFFFFF 0%, #F7FAFF 100%)",
                    },
                    "&:hover .module-icon": {
                      background: `linear-gradient(135deg, ${accent.from} 0%, ${accent.to} 100%)`,
                      color: "#fff",
                      borderColor: "transparent",
                      transform: "scale(1.08) rotate(-4deg)",
                    },
                    "&:hover .module-arrow": {
                      background: `linear-gradient(135deg, ${accent.from} 0%, ${accent.to} 100%)`,
                      color: "#fff",
                      transform: "translateX(6px)",
                    },
                    "&:hover .module-glow": {
                      opacity: 1,
                    },
                  }}
                >
                  {/* Inner card */}
                  <Box
                    className="module-inner"
                    sx={{
                      position: "relative",
                      borderRadius: "calc(20px - 1.5px)",
                      bgcolor: "#fff",
                      background:
                        "linear-gradient(180deg, #FFFFFF 0%, #FCFDFF 100%)",
                      p: { xs: 3, md: 3.5 },
                      height: "100%",
                      textAlign: "center",
                      overflow: "hidden",
                      transition: "background 0.35s ease",
                    }}
                  >
                    {/* Soft glow behind icon */}
                    <Box
                      className="module-glow"
                      sx={{
                        position: "absolute",
                        top: 24,
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: 140,
                        height: 140,
                        borderRadius: "50%",
                        background: `radial-gradient(circle, ${accent.from}22 0%, transparent 70%)`,
                        opacity: 0.6,
                        transition: "opacity 0.35s ease",
                        pointerEvents: "none",
                      }}
                    />

                    {/* Icon */}
                    <Box
                      className="module-icon"
                      sx={{
                        position: "relative",
                        width: 72,
                        height: 72,
                        borderRadius: "22px", // squircle, modern
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mx: "auto",
                        mb: 2.5,
                        bgcolor: `${accent.from}14`,
                        color: accent.from,
                        border: `1px solid ${accent.from}22`,
                        transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                        "& svg": { fontSize: 34 },
                      }}
                    >
                      {m.icon}
                    </Box>

                    {/* Code */}
                    <Typography
                      sx={{
                        position: "relative",
                        fontWeight: 900,
                        color: "#0b1c3d",
                        fontSize: { xs: 26, md: 28 },
                        letterSpacing: "-0.01em",
                        lineHeight: 1,
                      }}
                    >
                      {m.code}
                    </Typography>

                    {/* Divider */}
                    <Box
                      sx={{
                        width: 32,
                        height: 3,
                        borderRadius: 2,
                        mx: "auto",
                        my: 1.8,
                        background: `linear-gradient(90deg, ${accent.from} 0%, ${accent.to} 100%)`,
                      }}
                    />

                    {/* "For" label */}
                    <Typography
                      sx={{
                        fontSize: 10.5,
                        fontWeight: 800,
                        letterSpacing: "0.14em",
                        color: "#94A3B8",
                        textTransform: "uppercase",
                      }}
                    >
                      {m.forText}
                    </Typography>

                    {/* Environment name */}
                    <Typography
                      sx={{
                        mt: 0.6,
                        fontWeight: 800,
                        color: "#0b1c3d",
                        fontSize: { xs: 15.5, md: 16 },
                        lineHeight: 1.35,
                        minHeight: { md: 42 },
                      }}
                    >
                      {m.title}
                    </Typography>

                    {/* Arrow */}
                    <Box
                      className="module-arrow"
                      sx={{
                        mt: 3,
                        mx: "auto",
                        width: 40,
                        height: 40,
                        borderRadius: "50%",
                        bgcolor: `${accent.from}12`,
                        color: accent.from,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                      }}
                    >
                      <ArrowForwardIcon sx={{ fontSize: 18 }} />
                    </Box>
                  </Box>
                </Box>
              );
            })}
          </Box>
          {/* ─── CAPABILITIES + QUICK FEATURES — Timeline ─── */}
          <Box
            sx={{
              mt: { xs: 6, md: 9 },
              display: "grid",
              gridTemplateColumns: { xs: "1fr", lg: "1.2fr 1fr" },
              gap: { xs: 3, lg: 4 },
              alignItems: "stretch",
            }}
          >
            {/* LEFT — Timeline capabilities */}
            <Box
              sx={{
                position: "relative",
                borderRadius: 5,
                p: { xs: 3, md: 4.5 },
                overflow: "hidden",
                background:
                  "linear-gradient(160deg, #0B1C3D 0%, #142a5c 55%, #0B1C3D 100%)",
              }}
            >


              <Box sx={{ position: "relative", zIndex: 1 }}>
                <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 1 }}>
                  <Box
                    sx={{
                      width: 38,
                      height: 38,
                      borderRadius: "12px",
                      background: "linear-gradient(135deg, #1B4DFF 0%, #00A3FF 100%)",
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 17,
                      fontWeight: 900,
                      boxShadow: "0 8px 20px rgba(27,77,255,0.4)",
                    }}
                  >
                    B
                  </Box>
                  <Typography
                    sx={{
                      fontWeight: 900,
                      fontSize: { xs: 20, md: 22 },
                      color: "#fff",
                    }}
                  >
                    BluAccess™
                  </Typography>
                </Stack>

                <Typography
                  sx={{
                    mt: 1,
                    fontSize: 11,
                    color: "rgba(255,255,255,0.5)",
                    fontWeight: 800,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                  }}
                >
                  Core Capabilities
                </Typography>

                {/* Timeline */}
                <Box sx={{ mt: 3, position: "relative" }}>
                  {/* Vertical line */}
                  <Box
                    sx={{
                      position: "absolute",
                      left: 15,
                      top: 12,
                      bottom: 12,
                      width: 2,
                      background:
                        "linear-gradient(180deg, rgba(27,77,255,0.5) 0%, rgba(0,163,255,0.15) 100%)",
                    }}
                  />
                  {bluAccessPoints.map((p) => (
                    <Stack
                      key={p.id}
                      direction="row"
                      spacing={2}
                      alignItems="flex-start"
                      sx={{
                        mb: 2,
                        position: "relative",
                        "&:hover .tl-dot": {
                          transform: "scale(1.15)",
                          boxShadow: "0 0 0 6px rgba(27,77,255,0.18)",
                        },
                      }}
                    >
                      <Box
                        className="tl-dot"
                        sx={{
                          width: 32,
                          height: 32,
                          borderRadius: "50%",
                          background:
                            "linear-gradient(135deg, #1B4DFF 0%, #00A3FF 100%)",
                          color: "#fff",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: 12,
                          fontWeight: 900,
                          flexShrink: 0,
                          zIndex: 1,
                          boxShadow: "0 0 0 4px rgba(11,28,61,1)",
                          transition: "all 0.3s ease",
                        }}
                      >
                        {p.id}
                      </Box>
                      <Typography
                        sx={{
                          fontSize: { xs: 14.5, md: 15 },
                          color: "rgba(255,255,255,0.9)",
                          lineHeight: 1.7,
                          fontWeight: 500,
                          pt: 0.7,
                        }}
                      >
                        {p.text}
                      </Typography>
                    </Stack>
                  ))}
                </Box>
              </Box>
            </Box>

            {/* RIGHT — Quick features stacked */}
            <Stack spacing={{ xs: 2.5, md: 3 }}>
              {quickFeatures.map((q, i) => {
                const accents = [
                  { from: "#1B4DFF", to: "#5B8CFF" },
                  { from: "#7C3AED", to: "#A78BFA" },
                  { from: "#0EA5A4", to: "#5EEAD4" },
                ];
                const a = accents[i % accents.length];

                return (
                  <Box
                    key={q.id}
                    sx={{
                      position: "relative",
                      flex: 1,
                      borderRadius: 5,
                      p: "1.5px",
                      background: `linear-gradient(135deg, ${a.from} 0%, ${a.to} 100%)`,
                      transition: "all 0.35s ease",
                      "&:hover": {
                        transform: "translateX(6px)",
                        boxShadow: `0 30px 60px -20px ${a.from}55`,
                      },
                      "&:hover .qf-icon": {
                        background: `linear-gradient(135deg, ${a.from} 0%, ${a.to} 100%)`,
                        color: "#fff",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        borderRadius: "calc(20px - 1.5px)",
                        bgcolor: "#fff",
                        p: { xs: 2.5, md: 3 },
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        gap: 2.5,
                      }}
                    >
                      <Box
                        className="qf-icon"
                        sx={{
                          width: 60,
                          height: 60,
                          borderRadius: "18px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          bgcolor: `${a.from}14`,
                          color: a.from,
                          flexShrink: 0,
                          transition: "all 0.35s ease",
                          "& svg": { fontSize: 28 },
                        }}
                      >
                        {q.icon}
                      </Box>
                      <Box>
                        <Typography
                          sx={{
                            fontSize: 10.5,
                            fontWeight: 800,
                            letterSpacing: "0.1em",
                            color: "#94A3B8",
                            textTransform: "uppercase",
                          }}
                        >
                          Feature {String(i + 1).padStart(2, "0")}
                        </Typography>
                        <Typography
                          sx={{
                            fontWeight: 900,
                            fontSize: { xs: 17, md: 18 },
                            color: "#0b1c3d",
                            mt: 0.4,
                          }}
                        >
                          {q.title}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                );
              })}
            </Stack>
          </Box>

        </Container>
      </Box>

      {/* ===================================================== */}
      {/* FEATURES SECTION — Editorial Split */}
      {/* ===================================================== */}
      <Box
        sx={{
          position: "relative",
          py: { xs: 8, md: 12 },
          background:
            "linear-gradient(180deg, #FFFFFF 0%, #F7FAFF 45%, #EEF3FF 100%)",
          overflow: "hidden",
        }}
      >
        {/* Decorative glows */}
        <Box
          sx={{
            position: "absolute",
            top: "10%",
            left: "-10%",
            width: 420,
            height: 420,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(27,77,255,0.10) 0%, transparent 65%)",
            pointerEvents: "none",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: "-15%",
            right: "-10%",
            width: 500,
            height: 500,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(0,163,255,0.10) 0%, transparent 65%)",
            pointerEvents: "none",
          }}
        />

        <Container id="read-more-section" maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
          {/* Header */}
          <Box textAlign="center" mb={{ xs: 6, md: 8 }}>
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                px: 2,
                py: 0.8,
                borderRadius: 999,
                bgcolor: "rgba(27,77,255,0.08)",
                border: "1px solid rgba(27,77,255,0.15)",
                mb: 2.5,
              }}
            >
              <Box
                sx={{ width: 6, height: 6, borderRadius: "50%", bgcolor: "#1B4DFF" }}
              />
              <Typography
                sx={{
                  fontSize: 11,
                  fontWeight: 800,
                  letterSpacing: "0.12em",
                  color: "#1B4DFF",
                  textTransform: "uppercase",
                }}
              >
                Features
              </Typography>
            </Box>

            <Typography
              sx={{
                fontWeight: 900,
                fontSize: { xs: "2rem", md: "3rem" },
                color: "#0b1c3d",
                lineHeight: 1.08,
                letterSpacing: "-0.02em",
              }}
            >
              Built for Modern
              <br />
              <Box
                component="span"
                sx={{
                  background:
                    "#1B4DFF",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Security Demands.
              </Box>
            </Typography>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1.05fr 1fr" },
              alignItems: "center",
              gap: { xs: 6, md: 8 },
            }}
          >
            {/* LEFT — Text */}
            <Box>
              <Typography
                sx={{
                  fontWeight: 900,
                  fontSize: { xs: 22, md: 28 },
                  color: "#0b1c3d",
                  lineHeight: 1.25,
                  letterSpacing: "-0.01em",
                }}
              >
                Redefining Access Control for Modern Facilities
              </Typography>

              <Box
                sx={{
                  mt: 2.5,
                  width: 64,
                  height: 4,
                  borderRadius: 2,
                  background:
                    "linear-gradient(90deg, #1B4DFF 0%, #00A3FF 100%)",
                }}
              />

              <Typography
                sx={{
                  mt: 3,
                  color: "#475569",
                  lineHeight: 1.85,
                  fontSize: { xs: 14.5, md: 15.5 },
                }}
              >
                In today's security-conscious environment, traditional access
                management systems fall short, relying on outdated badge systems,
                paper logs, and manual verification processes that create significant
                vulnerabilities and inefficiencies. BluAccess™ revolutionizes
                facility security through advanced biometric authentication,
                employing military-grade facial recognition algorithms that operate
                at the network edge to ensure both robust security and user privacy.
                This cutting-edge platform seamlessly integrates with existing
                security infrastructure while providing end-to-end encryption and
                real-time threat detection, addressing the critical gap between
                physical security demands and digital transformation initiatives
                across industries.
              </Typography>

              <Typography
                sx={{
                  mt: 2.5,
                  color: "#475569",
                  lineHeight: 1.85,
                  fontSize: { xs: 14.5, md: 15.5 },
                }}
              >
                BluAccess™ delivers unparalleled operational intelligence through
                its comprehensive suite of features, including customizable access
                zones, multi-factor authentication protocols, and dynamic permissions
                management—all while maintaining detailed audit trails for regulatory
                compliance. The system's AI-powered anomaly detection identifies
                potential security breaches before they occur, while its intuitive
                dashboard provides security administrators with instant access to
                critical metrics, including dwell time analysis, occupancy rates, and
                unauthorized access attempts. By eliminating the vulnerabilities of
                traditional systems, BluAccess™ not only enhances security posture
                but also drives operational efficiency through automated time
                tracking, seamless visitor management, and frictionless emergency
                mustering capabilities—transforming access control from a necessary
                expense into a strategic business asset.
              </Typography>
            </Box>

            {/* RIGHT — Image with floating stat cards */}
            <Box sx={{ position: "relative", minHeight: { xs: 380, md: 520 } }}>
              {/* Image card */}
              <Box
                sx={{
                  position: "relative",
                  borderRadius: 5,
                  p: "1.5px",
                  background:
                    "linear-gradient(135deg, #1B4DFF 0%, #00A3FF 100%)",
                  boxShadow: "0 40px 100px -40px rgba(27,77,255,0.5)",
                  ml: { md: 4 },
                }}
              >
                <Box
                  sx={{
                    borderRadius: "calc(20px - 1.5px)",
                    background: "linear-gradient(180deg, #FFFFFF 0%, #F7FAFF 100%)",
                    p: { xs: 2.5, md: 3 },
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      width: "100%",
                      height: { xs: 320, sm: 400, md: 480 },
                      borderRadius: 3,
                      overflow: "hidden",
                      bgcolor: "#EEF4FF",
                    }}
                  >
                    <Image
                      src="/blu-acc/phone_2.jpg"
                      alt="BluAccess Illustration"
                      fill
                      sizes="(max-width: 900px) 100vw, 520px"
                      style={{ objectFit: "contain" }}
                    />
                  </Box>
                </Box>
              </Box>

              {/* Floating stat card — top left */}
              <Box
                sx={{
                  position: "absolute",
                  top: { xs: 10, md: 20 },
                  left: { xs: -8, md: -10 },
                  bgcolor: "#fff",
                  borderRadius: 3,
                  px: 2,
                  py: 1.5,
                  boxShadow: "0 20px 50px -20px rgba(27,77,255,0.5)",
                  border: "1px solid rgba(27,77,255,0.12)",
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  zIndex: 2,
                }}
              >
                <Box
                  sx={{
                    width: 34,
                    height: 34,
                    borderRadius: "10px",
                    background: "linear-gradient(135deg, #1B4DFF 0%, #00A3FF 100%)",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 16,
                  }}
                >
                  <ShieldIcon fontSize="small" />
                </Box>
                <Box>
                  <Typography
                    sx={{ fontSize: 10, color: "#94A3B8", fontWeight: 700 }}
                  >
                    ENCRYPTION
                  </Typography>
                  <Typography
                    sx={{ fontSize: 13, fontWeight: 900, color: "#0b1c3d" }}
                  >
                    End-to-End
                  </Typography>
                </Box>
              </Box>

              {/* Floating stat card — bottom right */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: { xs: 10, md: 30 },
                  right: { xs: -8, md: -10 },
                  bgcolor: "#0b1c3d",
                  color: "#fff",
                  borderRadius: 3,
                  px: 2.2,
                  py: 1.8,
                  boxShadow: "0 20px 50px -20px rgba(11,28,61,0.6)",
                  zIndex: 2,
                }}
              >
                <Typography
                  sx={{
                    fontSize: 10,
                    color: "rgba(255,255,255,0.6)",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                  }}
                >
                  THREAT DETECTION
                </Typography>
                <Typography sx={{ fontSize: 15, fontWeight: 900, mt: 0.3 }}>
                  Real-Time AI
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>


    </Box>
  );
}