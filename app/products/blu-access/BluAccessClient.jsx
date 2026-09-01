"use client";

import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  Stack,
  Chip,
} from "@mui/material";
import Image from "next/image";

import BusinessIcon from "@mui/icons-material/Business";
import FactoryIcon from "@mui/icons-material/Factory";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import SchoolIcon from "@mui/icons-material/School";

import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import HubIcon from "@mui/icons-material/Hub";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import { useRouter } from "next/navigation";

/* =========================================================
    Dynamic Arrays (Your requirement)
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

/* =========================================================
    Reusable Premium Card
========================================================= */

function PremiumTile({ children, sx }) {
  return (
    <Card
      elevation={0}
      sx={{
        cursor: "pointer", // ✅ correct property
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
  const router = useRouter()

  return (
    <Box sx={{ width: "100%", bgcolor: "#fff" }}>
      {/* ===================================================== */}
      {/* HERO */}
      {/* ===================================================== */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          minHeight: { xs: "78vh", md: "92vh" },
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          py: { xs: 6, md: 9 },
          background:
            "radial-gradient(circle at 20% 20%, rgba(65,84,241,0.22) 0%, transparent 55%), radial-gradient(circle at 90% 10%, rgba(0,163,255,0.18) 0%, transparent 50%), linear-gradient(180deg, #f7fbff 0%, #eef4ff 55%, #ffffff 100%)",
        }}
      >
        {/* Decorative background blobs */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 30% 40%, rgba(65,84,241,0.12) 0%, transparent 40%), radial-gradient(circle at 75% 60%, rgba(0,120,255,0.14) 0%, transparent 38%)",
            pointerEvents: "none",
          }}
        />

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              justifyContent: "space-between",
              gap: { xs: 5, md: 6 },
            }}
          >
            {/* LEFT TEXT */}
            <Box sx={{ flex: 1, width: "100%", maxWidth: 680 }}>
              <Typography
                sx={{
                  fontWeight: 900,
                  color: "#0b1c3d",
                  fontSize: { xs: 34, sm: 42, md: 54 },
                  letterSpacing: "-0.02em",
                  lineHeight: 1.05,
                }}
              >
                BluAccess™
              </Typography>

              <Typography
                sx={{
                  mt: 1.3,
                  fontWeight: 600,
                  color: "#35507b",
                  fontSize: { xs: 14.5, md: 18 },
                  lineHeight: 1.6,
                  maxWidth: 620,
                }}
              >
                Redefining Access Control for Modern Facilities
              </Typography>

              <Stack
                direction="row"
                spacing={2}
                sx={{ mt: 3, flexWrap: "wrap" }}
              >
                <Button
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    fontWeight: 800,
                    px: 3.2,
                    py: 1.2,
                    borderRadius: 999,
                    background:
                      "linear-gradient(90deg, #2f46ff 0%, #1b4dff 50%, #2f7bff 100%)",
                    boxShadow: "0 18px 45px rgba(47,70,255,0.25)",
                    "&:hover": {
                      boxShadow: "0 26px 60px rgba(47,70,255,0.35)",
                    },
                  }}
                >
                  BluAccess™
                </Button>
              </Stack>
            </Box>

            {/* RIGHT PHONE MOCKUPS */}
            <Box
              sx={{
                flex: 1,
                width: "100%",
                display: "flex",
                justifyContent: { xs: "center", md: "flex-end" },
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: { xs: 280, sm: 360, md: 440 },
                  height: { xs: 320, sm: 420, md: 500 },
                }}
              >
                {/* back phone */}
                <Box
                  sx={{
                    position: "absolute",
                    right: { xs: 40, md: 80 },
                    top: { xs: 10, md: 10 },
                    width: { xs: 180, sm: 220, md: 260 },
                    height: { xs: 240, sm: 310, md: 500 },
                    borderRadius: 6,
                    background:
                      "linear-gradient(180deg, rgba(220,235,255,0.9) 0%, rgba(255,255,255,0.75) 100%)",
                    border: "1px solid rgba(15,23,42,0.08)",
                    boxShadow: "0 22px 60px rgba(15,23,42,0.14)",
                  }}
                />

                {/* front phone */}
                <Box
                  sx={{
                    position: "absolute",
                    right: { xs: 0, md: 0 },
                    top: { xs: 0, md: 0 },
                    width: { xs: 220, sm: 280, md: 320 },
                    height: { xs: 280, sm: 380, md: 540 },
                    borderRadius: 6,
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(245,250,255,0.88) 100%)",
                    border: "1px solid rgba(15,23,42,0.10)",
                    boxShadow: "0 30px 80px rgba(15,23,42,0.18)",
                    overflow: "hidden",
                  }}
                >
                  {/* screen content image (optional) */}
                  <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
                    <Image
                      src="/blu-acc/phone_1.jpg"
                      alt="BluAccess App"
                      fill
                      sizes="(max-width: 600px) 220px, 320px"
                      style={{ objectFit: "cover" }}
                    />
                  </Box>
                </Box>

              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ===================================================== */}
      {/* MODULES SECTION (Dynamic) */}
      {/* ===================================================== */}
      <Box sx={{ py: { xs: 6, md: 9 }, bgcolor: "#fff" }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", lg: "row" },
              gap: { xs: 4, lg: 5 },
              alignItems: "stretch",
            }}
          >
            {/* LEFT POINTS */}
            <PremiumTile sx={{ flex: 1, p: { xs: 3, md: 4 } }}>
              <Typography
                sx={{
                  fontWeight: 900,
                  fontSize: { xs: 22, md: 26 },
                  color: "#0b1c3d",
                }}
              >
                BluAccess™
              </Typography>

              <Box sx={{ mt: 2 }}>
                {bluAccessPoints.map((p) => (
                  <Typography
                    key={p.id}
                    sx={{
                      fontSize: { xs: 14.5, md: 15.2 },
                      color: "#334155",
                      lineHeight: 1.9,
                    }}
                  >
                    {p.id}. {p.text}
                  </Typography>
                ))}
              </Box>
            </PremiumTile>

            {/* RIGHT MODULES */}
            <Box sx={{ flex: 2 }}>
              {/* Top 4 modules */}
              <Box
                sx={{
                  pointer : "cursor !important",
                  display: "flex",
                  flexWrap: "wrap",
                  gap: { xs: 2.2, md: 3 },
                }}
              >
                {modules.map((m) => (
                  <PremiumTile
                    key={m.id}
                    sx={{
                      width: {
                        xs: "100%",
                        sm: "calc(50% - 12px)",
                        lg: "calc(25% - 18px)",
                      },
                      p: { xs: 2.5, md: 3 },
                      textAlign: "center",
                      transition: "all 0.28s ease",
                      "&:hover": {
                        transform: "translateY(-6px)",
                        boxShadow: "0 26px 70px rgba(15,23,42,0.12)",
                      },
                    }}
                    route={router}
                  >
                    <Box
                      onClick={() => router.push(m?.route)}
                      sx={{
                        width: 54,
                        height: 54,
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mx: "auto",
                        mb: 1.5,
                        background:
                          "linear-gradient(180deg, rgba(65,84,241,0.12) 0%, rgba(65,84,241,0.06) 100%)",
                        color: "#1b4dff",
                      }}
                    >
                      {m.icon}
                    </Box>

                    <Typography
                      sx={{
                        fontWeight: 900,
                        color: "#0b1c3d",
                        fontSize: 18,
                      }}
                    >
                      {m.code}
                    </Typography>

                    <Typography sx={{ mt: 0.6, color: "#6b7280", fontSize: 13 }}>
                      {m.forText}
                    </Typography>

                    <Typography
                      sx={{
                        fontWeight: 800,
                        mt: 0.3,
                        color: "#0b1c3d",
                        fontSize: 16,
                      }}
                    >
                      {m.title}
                    </Typography>
                  </PremiumTile>
                ))}
              </Box>

              {/* Quick features */}
              <Box
                sx={{
                  mt: { xs: 2.2, md: 3 },
                  display: "flex",
                  flexWrap: "wrap",
                  gap: { xs: 2.2, md: 3 },
                }}
              >
                {quickFeatures.map((q) => (
                  <PremiumTile
                    key={q.id}
                    sx={{
                      width: { xs: "100%", md: "calc(33.333% - 16px)" },
                      p: { xs: 2.6, md: 3 },
                      textAlign: "center",
                      transition: "all 0.28s ease",
                      "&:hover": {
                        transform: "translateY(-6px)",
                        boxShadow: "0 26px 70px rgba(15,23,42,0.12)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: 54,
                        height: 54,
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mx: "auto",
                        mb: 1.4,
                        background:
                          "linear-gradient(180deg, rgba(47,70,255,0.12) 0%, rgba(47,70,255,0.06) 100%)",
                        color: "#2f46ff",
                      }}
                    >
                      {q.icon}
                    </Box>

                    <Typography
                      sx={{
                        fontWeight: 900,
                        fontSize: 16.5,
                        color: "#0b1c3d",
                      }}
                    >
                      {q.title}
                    </Typography>
                  </PremiumTile>
                ))}
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ===================================================== */}
      {/* FEATURES SECTION */}
      {/* ===================================================== */}
      <Box
        sx={{
          py: { xs: 7, md: 10 },
          background:
            "linear-gradient(180deg, #ffffff 0%, #f7fbff 55%, #ffffff 100%)",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            sx={{
              textAlign: "center",
              fontWeight: 900,
              fontSize: { xs: 26, md: 32 },
              color: "#0b1c3d",
            }}
          >
            Features
          </Typography>

          <Box
            sx={{
              mt: { xs: 4, md: 6 },
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              gap: { xs: 4, md: 6 },
            }}
          >
            {/* LEFT TEXT */}
            <Box sx={{ flex: 1 }}>
              <Typography
                sx={{
                  fontWeight: 900,
                  fontSize: { xs: 18, md: 22 },
                  color: "#0b1c3d",
                }}
              >
                Redefining Access Control for Modern Facilities
              </Typography>

              <Typography
                sx={{
                  mt: 1.5,
                  color: "#475569",
                  lineHeight: 1.9,
                  fontSize: { xs: 14.5, md: 15.5 },
                }}
              >
                In today’s security-conscious environment, traditional access
                management systems fall short, relying on outdated badge systems,
                paper logs, and manual verification processes that create
                significant vulnerabilities and inefficiencies. BluAccess™
                revolutionizes facility security through advanced biometric
                authentication, employing military-grade facial recognition
                algorithms that operate at the network edge to ensure both
                robust security and user privacy. This cutting-edge platform
                seamlessly integrates with existing security infrastructure while
                providing end-to-end encryption and real-time threat detection,
                addressing the critical gap between physical security demands and
                digital transformation initiatives across industries.
              </Typography>

              <Typography
                sx={{
                  mt: 2,
                  color: "#475569",
                  lineHeight: 1.9,
                  fontSize: { xs: 14.5, md: 15.5 },
                }}
              >
                BluAccess™ delivers unparalleled operational intelligence through
                its comprehensive suite of features, including customizable
                access zones, multi-factor authentication protocols, and dynamic
                permissions management—all while maintaining detailed audit
                trails for regulatory compliance. The system’s AI-powered anomaly
                detection identifies potential security breaches before they
                occur, while its intuitive dashboard provides security
                administrators with instant access to critical metrics, including
                dwell time analysis, occupancy rates, and unauthorized access
                attempts. By eliminating the vulnerabilities of traditional
                systems, BluAccess™ not only enhances security posture but also
                drives operational efficiency through automated time tracking,
                seamless visitor management, and frictionless emergency
                mustering capabilities—transforming access control from a
                necessary expense into a strategic business asset.
              </Typography>
            </Box>

            {/* RIGHT ILLUSTRATION */}
            <Box
              sx={{
                flex: 1,
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <PremiumTile
                sx={{
                  width: "100%",
                  maxWidth: 520,
                  p: { xs: 2.5, md: 3 },
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: { xs: 260, sm: 320, md: 360 },
                    borderRadius: 3,
                    overflow: "hidden",
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
              </PremiumTile>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
