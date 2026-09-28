
"use client";
import { Box, Container, Paper, Stack, Typography, Button } from "@mui/material";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import PersonIcon from "@mui/icons-material/Person";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import HealingIcon from "@mui/icons-material/Healing";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import ApartmentIcon from "@mui/icons-material/Apartment";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import ShieldIcon from "@mui/icons-material/Shield";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import GroupsIcon from "@mui/icons-material/Groups";
import DescriptionIcon from "@mui/icons-material/Description";
import LocalPharmacyIcon from "@mui/icons-material/LocalPharmacy";
import LockIcon from "@mui/icons-material/Lock";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import PsychologyIcon from "@mui/icons-material/Psychology";
import BiotechIcon from "@mui/icons-material/Biotech";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { CheckCircleIcon, VerifiedIcon } from "lucide-react";
import SecurityIcon from "@mui/icons-material/Security";
import Image from "next/image";


const featureStrip = [
  {
    icon: <GroupsIcon />,
    title: "Patient-Centric",
    subtitle: "From patients to administrators",
  },
  {
    icon: <ShieldIcon />,
    title: "ABDM Enabled",
    subtitle: "Aligned with India's digital health mission",
  },
  {
    icon: <SyncAltIcon />,
    title: "FHIR Interoperability",
    subtitle: "Seamless healthcare data exchange",
  },
  {
    icon: <VerifiedUserIcon />,
    title: "WASA Certified",
    subtitle: "SAFE TO HOST",
  },
  {
    icon: <TrendingUpIcon />,
    title: "Better Outcomes",
    subtitle: "Data-driven, Patient-centric",
  },
];

const portals = [
  {
    icon: <PersonIcon />,
    title: "Patient Portal",
    imageSrc: "/blu-health/health-in.webp",
    description:
      "Provides patients with secure access to their personal health records, vital information, appointments, prescriptions, lab reports, and other healthcare services, enabling them to conveniently manage and monitor their health journey.",
    rows: [
      ["Your Health", "All in One Place"],
      ["Appointments", "2"],
      ["Lab Reports", "3"],
      ["Prescriptions", "1"],
      ["Health Records", "5"],
    ],
  },
  {
    icon: <MedicalServicesIcon />,
    title: "Doctor Portal",
    imageSrc: "/blu-health/doctor-in.webp",
    description:
      "Enables doctors to manage patient consultations, appointments, prescriptions, clinical notes, diagnoses, medical history, and treatment plans while providing a complete view of the patient's healthcare information.",
    rows: [
      ["Today's Patients", "12"],
      ["Final Memos", "08:30 AM"],
      ["Prep Status", "05:30 AM"],
      ["OPD Slots", "5"],
      ["Referrals", "02:30 PM"],
    ],
  },
  {
    icon: <HealingIcon />,
    title: "Nurse Portal",
    imageSrc: "/blu-health/nurse-in.webp",
    description:
      "Helps nurses manage assigned patients, monitor real-time vitals, view doctor-provided medications and lab orders, update nursing records, and efficiently coordinate patient care and daily clinical activities.",
    rows: [
      ["Live Vitals", "76 bpm"],
      ["SpO2", "98%"],
      ["BP", "110/70"],
      ["Temp", "98.6°F"],
    ],
  },
  {
    icon: <SupportAgentIcon />,
    title: "Reception Portal",
    imageSrc: "/blu-health/reception-in.webp",

    description:
      "Allows reception staff to manage patient registration, appointments, OPD/IPD workflows, admissions, check-ins, payments, and other front-desk operations while ensuring smooth coordination between patients and hospital departments.",
    rows: [
      ["Check-in", "Done"],
      ["OPD / IPD", "2 / 1"],
      ["Appointments", "14"],
      ["Departments", "6"],
      ["Enquiries", "5"],
    ],
  },
  {
    icon: <ApartmentIcon />,
    title: "Hospital Portal",
    imageSrc: "/blu-health/hospital-in.webp",

    description:
      "Provides hospital administrators and staff with centralized management of hospital operations, including patients, doctors, nurses, departments, wards, appointments, OPD/IPD, billing, staff management, and operational analytics.",
    rows: [
      ["Departments", "12"],
      ["Wards", "8"],
      ["Staff Management", "42"],
      ["Billing", "Live"],
      ["Analytics", "Live"],
    ],
  },
  {
    icon: <AdminPanelSettingsIcon />,
    title: "Admin Portal",
    imageSrc: "/blu-health/admin-in.webp",

    description:
      "Provides system-level administration for managing users, roles, permissions, security settings, platform configurations, audits, and overall system operations across the BluHealth ecosystem.",
    rows: [
      ["Users", "156"],
      ["Roles & Permissions", "12"],
      ["System Settings", "On"],
      ["Audit Logs", "24"],
      ["Platform Config", "Live"],
    ],
  },
];

const realScreens = [
  {
    title: "AI-Powered Medical Imaging",
    imageSrc: "/blu-health/ai.webp",
    subtitle: "View and analyse radiology images with advanced AI support for faster, more accurate diagnosis.",
    tag: "Clinical Imaging",
    icon: <PsychologyIcon />,
  },
  {
    title: "Wound & Stitch Analysis",
    imageSrc: "/blu-health/wound.webp",

    subtitle: "AI-driven wound assessment with image analysis and healing progress tracking.",
    tag: "Wound Analysis",
    icon: <BiotechIcon />,
  },
  {
    title: "ECG Visualization",
    imageSrc: "/blu-health/ecg.webp",

    subtitle: "Multi-lead ECG visualization with real-time analysis and interpretation.",
    tag: "ECG Analysis",
    icon: <MonitorHeartIcon />,
  },
];

const keyHighlights = [
  {
    icon: <ShieldIcon />,
    title: "ABDM Enabled",
    subtitle: "Aligned with India's digital health mission",
  },
  {
    icon: <SyncAltIcon />,
    title: "FHIR-based Interoperability",
    subtitle: "Seamless healthcare data exchange",
  },
  {
    icon: <VerifiedUserIcon />,
    title: "WASA Security Certified",
    subtitle: "SAFE TO HOST — assessed by CERT-In empanelled organisation",
  },
  {
    icon: <GroupsIcon />,
    title: "Role-Based Healthcare Portals",
    subtitle: "Purpose-built for every healthcare stakeholder",
  },
  {
    icon: <DescriptionIcon />,
    title: "Patient Health Record Management",
    subtitle: "Complete and secure health information",
  },
  {
    icon: <LocalHospitalIcon />,
    title: "Hospital & Clinical Workflow Management",
    subtitle: "Streamlined operations for better efficiency",
  },
  {
    icon: <LocalPharmacyIcon />,
    title: "Laboratory, Pharmacy & Billing Integration",
    subtitle: "Unified healthcare services ecosystem",
  },
  {
    icon: <LockIcon />,
    title: "Secure Healthcare Data Management",
    subtitle: "Privacy, compliance and trust",
  },
];

/* ============================================================
   MAIN COMPONENT
   ============================================================ */

export default function BluHealthClient() {
  return (
    <>
      {/* ============ HERO ============ */}
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          bgcolor: "#F7F9FF",
          py: { xs: 7, md: 11 },
        }}
      >
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
        <Container maxWidth="xl" sx={{ position: "relative" }}>


          {/* Hero grid */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: { xs: 5, md: 6 },
              alignItems: "center",
            }}
          >
            {/* LEFT */}
            <Box>
              <Stack
                direction="row"
                spacing={1.5}
                sx={{ flexWrap: "wrap", gap: 1, mb: 2.5 }}
              >
                {["ABDM ENABLED", "FHIR READY", "SECURE", "SCALABLE"].map(
                  (tag) => (
                    <Typography
                      key={tag}
                      sx={{
                        fontSize: 10,
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
                  )
                )}
              </Stack>

              <Typography
                sx={{
                  fontSize: { xs: 30, md: 52 },
                  fontWeight: 900,
                  color: "#07122C",
                  lineHeight: 1.05,
                  letterSpacing: "-0.02em",
                }}
              >
                Smarter Healthcare
                <br />
                for <span style={{ color: "#1B4DFF" }}>Healthier Lives.</span>
              </Typography>

              <Typography
                sx={{
                  mt: 3,
                  fontSize: { xs: 15, md: 17 },
                  color: "rgba(7,18,44,0.68)",
                  lineHeight: 1.7,
                  maxWidth: 520,
                }}
              >
                An integrated digital healthcare platform connecting patients,
                doctors, nurses, reception teams, hospitals, laboratories,
                pharmacies and administrators through a unified health
                ecosystem.
              </Typography>
              {/* Small trust row */}
              <Stack
                direction="row"
                alignItems="center"
                spacing={2}
                sx={{ mt: 4, flexWrap: "wrap", gap: 1.5 }}
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
                    spacing={0.8}
                  >
                    <Box
                      sx={{
                        color: "#2563eb",
                        display: "flex",
                        "& svg": { fontSize: 16 },
                      }}
                    >
                      {item.icon}
                    </Box>
                    <Typography
                      sx={{
                        fontSize: 12.5,
                        fontWeight: 700,
                        color: "rgba(15,23,42,0.65)",
                      }}
                    >
                      {item.label}
                    </Typography>
                  </Stack>
                ))}
              </Stack>


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
            </Box>

            {/* RIGHT — mock dashboard with background image */}
            <Box
              sx={{
                position: "relative",
                borderRadius: 5,
                p: { xs: 2, md: 3 },
                border: "1px solid rgba(27,77,255,0.1)",
                minHeight: { xs: 320, md: 380 },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                backgroundColor: "#EEF2FF", // fallback while image loads
              }}
            >
              {/* ─── Background image ─── */}
              <Image
                src="/blu-health/bluhealth-bg.webp"
                alt=""
                fill
                priority
                sizes="(max-width: 900px) 100vw, 50vw"
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                  zIndex: 0,
                }}
              />




              {/* ─── Floating card ─── */}
              <Paper
                elevation={0}
                sx={{
                  position: "absolute",
                  zIndex: 2, // 👈 above image + overlay
                  bottom: { xs: 10, md: 18 },
                  right: { xs: 10, md: 18 },
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  px: 2,
                  py: 1.5,
                  borderRadius: 3,
                  bgcolor: "rgba(255,255,255,0.95)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(27,77,255,0.1)",
                  boxShadow: "0 16px 40px rgba(15,23,42,0.12)",
                  maxWidth: 210,
                }}
              >
                <PsychologyIcon sx={{ color: "#1B4DFF", fontSize: 28 }} />
                <Box>
                  <Typography sx={{ fontSize: 12, fontWeight: 800, color: "#07122C" }}>
                    AI-Powered
                  </Typography>
                  <Typography sx={{ fontSize: 10, color: "#94A3B8" }}>
                    Faster, more accurate.
                  </Typography>
                </Box>
              </Paper>
            </Box>
          </Box>

          {/* Feature strip */}
          <Box
            sx={{
              mt: { xs: 6, md: 8 },
              pt: 4,
              borderTop: "1px solid rgba(27,77,255,0.07)",
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2,1fr)",
                md: "repeat(5,1fr)",
              },
              gap: 2,
            }}
          >
            {featureStrip.map((f) => (
              <Paper
                key={f.title}
                elevation={0}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  p: 2,
                  borderRadius: 3,
                  bgcolor: "#fff",
                  border: "1px solid rgba(27,77,255,0.08)",
                  boxShadow: "0 4px 12px rgba(15,23,42,0.03)",
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
              </Paper>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ============ ROLE-BASED PORTALS ============ */}
      <Box sx={{ py: { xs: 7, md: 10 }, bgcolor: "#fff" }}>
        <Container maxWidth="xl">
          <Box textAlign="center" mb={{ xs: 4, md: 6 }}>
            <Typography
              sx={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.08em",
                color: "#1B4DFF",
                bgcolor: "rgba(27,77,255,0.07)",
                px: 2,
                py: 0.7,
                borderRadius: 20,
                display: "inline-block",
                textTransform: "uppercase",
                mb: 1.5,
              }}
            >
              Our Portals
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "1.8rem", md: "2.4rem" },
                fontWeight: 900,
                color: "#07122C",
                lineHeight: 1.15,
              }}
            >
              Role-Based Portals for Every Healthcare Stakeholder
            </Typography>
            <Typography
              sx={{
                mt: 1.5,
                fontSize: { xs: 14, md: 16 },
                color: "rgba(7,18,44,0.55)",
                maxWidth: 640,
                mx: "auto",
              }}
            >
              Dedicated portals designed for seamless collaboration, efficient
              workflows, and better patient outcomes.
            </Typography>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2,1fr)",
                md: "repeat(3,1fr)",
                lg: "repeat(3,1fr)",
              },
              gap: 3.5,
            }}
          >
            {portals.map((portal) => (
              <PortalCard key={portal.title} {...portal} />
            ))}
          </Box>
        </Container>
      </Box>

      {/* ============ REAL SCREENS ============ */}
      <Box sx={{ py: { xs: 7, md: 0 }, bgcolor: "#fff" }}>
        <Container maxWidth="xl">
          <Box textAlign="center" mb={{ xs: 4, md: 6 }}>
            <Typography
              sx={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.08em",
                color: "#1B4DFF",
                textTransform: "uppercase",
                mb: 1,
              }}
            >
              See BluHealth in Action
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "1.8rem", md: "2.4rem" },
                fontWeight: 900,
                color: "#07122C",
                lineHeight: 1.15,
              }}
            >
              Real Screens. Real Impact.
            </Typography>
            <Typography
              sx={{
                mt: 1.5,
                fontSize: { xs: 14, md: 16 },
                color: "rgba(7,18,44,0.55)",
              }}
            >
              A glimpse into the BluHealth platform — powerful tools for better care.
            </Typography>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "repeat(3,1fr)" },
              gap: 3,
            }}
          >
            {realScreens.map((screen) => (
              <Paper
                key={screen.title}
                elevation={0}
                sx={{
                  borderRadius: 4,
                  overflow: "hidden",
                  bgcolor: "#F8FAFC",
                  border: "1px solid #EEF2F6",
                  transition: "0.25s ease",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 18px 45px rgba(27,77,255,0.08)",
                  },
                }}
              >
                {/* ─── Image / preview header ─── */}
                <Box
                  sx={{
                    height: 200,
                    position: "relative",
                    overflow: "hidden",
                    backgroundColor: "#0F172A", // fallback while image loads
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                  }}
                >
                  {/* Background image */}
                  {screen.imageSrc && (
                    <Image
                      src={screen.imageSrc}
                      alt=""
                      fill
                      sizes="(max-width: 900px) 100vw, 33vw"
                      style={{
                        objectFit: "cover",
                        objectPosition: "center",
                        zIndex: 0,
                      }}
                    />
                  )}

                  {/* Soft dark overlay so tag + icon stay readable */}
                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(180deg, rgba(15,23,42,0.45) 0%, rgba(15,23,42,0.75) 100%)",
                      zIndex: 0.3,
                      pointerEvents: "none",
                    }}
                  />

                  {/* Tag badge */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: 14,
                      left: 14,
                      zIndex: 4, // 👈 above image + overlay
                      fontSize: 10,
                      fontWeight: 700,
                      bgcolor: "rgba(27,77,255,0.9)",
                      px: 1.4,
                      py: 0.5,
                      borderRadius: 20,
                      backdropFilter: "blur(6px)",
                    }}
                  >
                    {screen.tag}
                  </Box>


                </Box>

                {/* ─── Body ─── */}
                <Box sx={{ p: 2.5 }}>
                  <Typography
                    sx={{ fontSize: 16, fontWeight: 800, color: "#07122C", mb: 0.7 }}
                  >
                    {screen.title}
                  </Typography>
                  <Typography
                    sx={{ fontSize: 13, color: "#64748B", lineHeight: 1.6 }}
                  >
                    {screen.subtitle}
                  </Typography>
                </Box>
              </Paper>
            ))}
          </Box>
        </Container>
      </Box>


      {/* ============ KEY HIGHLIGHTS ============ */}
      <Box id="read-more-section" sx={{ py: { xs: 7, md: 10 }, bgcolor: "#fff" }}>
        <Container maxWidth="xl">
          <Box textAlign="center" mb={{ xs: 4, md: 6 }}>
            <Typography
              sx={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.08em",
                color: "#1B4DFF",
                textTransform: "uppercase",
                mb: 1,
              }}
            >
              Key Highlights
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "1.8rem", md: "2.4rem" },
                fontWeight: 900,
                color: "#07122C",
                lineHeight: 1.15,
              }}
            >
              Built for Interoperability, Security and Better Care
            </Typography>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2,1fr)",
                md: "repeat(4,1fr)",
              },
              gap: 2.5,
            }}
          >
            {keyHighlights.map((h) => (
              <Paper
                key={h.title}
                elevation={0}
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 1.5,
                  p: 2.5,
                  borderRadius: 3,
                  bgcolor: "#fff",
                  border: "1px solid rgba(227,232,255,0.9)",
                  boxShadow: "0 8px 24px rgba(15,23,42,0.03)",
                  transition: "0.2s ease",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    borderColor: "rgba(27,77,255,0.3)",
                    boxShadow: "0 16px 40px rgba(27,77,255,0.08)",
                  },
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
                  {h.icon}
                </Box>
                <Box>
                  <Typography
                    sx={{ fontSize: 13.5, fontWeight: 800, color: "#07122C", mb: 0.4 }}
                  >
                    {h.title}
                  </Typography>
                  <Typography sx={{ fontSize: 11.5, color: "#64748B", lineHeight: 1.5 }}>
                    {h.subtitle}
                  </Typography>
                </Box>
              </Paper>
            ))}
          </Box>
        </Container>
      </Box>
    </>
  );
}



function PortalCard({ icon, title, description, rows, imageSrc }) {
  return (
    <Paper
      elevation={0}
      sx={{
        borderRadius: 4,
        overflow: "hidden",
        bgcolor: "#fff",
        border: "1px solid rgba(227,232,255,0.95)",
        boxShadow: "0 18px 55px rgba(15,23,42,0.06)",
        transition: "0.25s ease",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 30px 85px rgba(27,77,255,0.10)",
        },
      }}
    >
      {/* ─── Image / panel header ─── */}
      <Box
        sx={{
          height: 250,
          position: "relative",
          overflow: "hidden",
          borderBottom: "1px solid rgba(227,232,255,0.8)",
          backgroundColor: "#EEF2FF", // fallback while image loads
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Background image */}
        {imageSrc && (
          <Image
            src={imageSrc}
            alt=""
            fill
            sizes="(max-width: 900px) 100vw, 33vw"
            style={{
              objectFit: "fill",
              objectPosition: "center",
              zIndex: 0,
            }}
          />
        )}



        {/* Mock rows panel */}

      </Box>

      {/* ─── Body ─── */}
      <Box sx={{ p: 2.8 }}>
        <Stack
          direction="row"
          alignItems="center"
          spacing={1.5}
          sx={{ mb: 1.2 }}
        >
          <Box
            sx={{
              width: 38,
              height: 38,
              borderRadius: 2,
              bgcolor: "rgba(27,77,255,0.08)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#1B4DFF",
              "& svg": { fontSize: 22 },
            }}
          >
            {icon}
          </Box>
          <Typography sx={{ fontSize: 17, fontWeight: 800, color: "#07122C" }}>
            {title}
          </Typography>
        </Stack>

        <Typography
          sx={{
            fontSize: 13.5,
            color: "rgba(7,18,44,0.65)",
            lineHeight: 1.7,
            mb: 2,
          }}
        >
          {description}
        </Typography>
      </Box>
    </Paper>
  );
}
