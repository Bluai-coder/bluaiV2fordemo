"use client";

import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  Card,
  Divider,
  Chip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  IconButton,
  Grid,
} from "@mui/material";

import Image from "next/image";

// Icons
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import PsychologyRoundedIcon from "@mui/icons-material/PsychologyRounded";
import CloudDoneRoundedIcon from "@mui/icons-material/CloudDoneRounded";
import AdminPanelSettingsRoundedIcon from "@mui/icons-material/AdminPanelSettingsRounded";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

/* =========================================
    DATA (SAME CONTENT)
========================================= */

const hero = {
  tag: "EAMMS",
  title: "Employee Attendance Management and Monitoring System",
  subtitle:
    "Streamline employee attendance, leave management, and digital registration with secure, automated features for efficient workforce management.",
  cta: "Get Started Today →",
  image: "/eamms/hero1.jpg",
};

const keyHighlights = [
  { id: 1, text: "Real-Time Attendance Tracking" },
  { id: 2, text: "Secure Face Recognition" },
  { id: 3, text: "Centralized Admin Control" },
  { id: 4, text: "Leave & Payroll Integration" },
  { id: 5, text: "Multi-Office Management Support" },
];

const about = {
  leftTitle: "About",
  leftText:
    "EAMMS is a smart AI-driven attendance management platform that simplifies and automates workforce operations.",
  rightText:
    "EAMMS is an intelligent attendance management platform developed by BluAI. It is designed to modernize employee and workforce tracking, leave management, and HR operations — all through a single, secure system.\n\nCore objective: To eliminate manual attendance processes, reduce HR workload, and enhance workforce efficiency using automation and AI-driven insights.",
};

const keyModules = [
  {
    id: 1,
    title: "User Login & Access",
    points: [
      "Secure login via Email/Password with CAPTCHA",
      "Face Recognition login in 2–3 seconds",
      "Get single sign-in and secure auth through OTP and face scan",
    ],
  },
  {
    id: 2,
    title: "Employee Portal",
    points: [
      "Dashboard showing attendance, leave, announcements, and personal info",
      "Attendance summary and regularization options",
      "Leave application (Casual, Earned, Restricted, Short Leave)",
      "Holiday list and support ticket system",
    ],
  },
  {
    id: 3,
    title: "Admin Portal",
    points: [
      "Manage employees, attendance, and leave approvals",
      "Role & permissions control",
      "Leaves, logs and branch synchronization",
      "Multi-office location settings",
      "Export attendance reports (CSV, JSON)",
    ],
  },
  {
    id: 4,
    title: "Payroll Module Highlights",
    points: [
      "Auto-calculate salaries, overtime, and deductions",
      "Integrates leave and attendance data for accurate payroll",
      "Generates payslips and payment summaries instantly",
      "Ensures compliance with company and government policies",
      "Sync with salary payout records for future audits",
    ],
  },
];

const adminFeatures = [
  {
    id: 1,
    title: "Comprehensive Management Controls",
    points: [
      "Add/edit employees and admins",
      "Approve or reject leaves and regularization requests",
      "Customize office settings, emails, and announcements",
    ],
  },
  {
    id: 2,
    title: "Roles & Permissions",
    points: [
      "Assign user roles like Admin, HR, or Employee",
      "Define permissions for each functionality",
      "Maintain secure, organized system access",
    ],
  },
  {
    id: 3,
    title: "Customizable Settings",
    points: [
      "Office location mapping with GPS coordinates",
      "Theme & branding options",
      "Leave type configuration (Casual, Sick, Earned, etc.)",
    ],
  },
];

const benefits = {
  title: "Benefits & Use Cases",
  caption:
    "Smarter, faster, and more connected — experience next-level workforce efficiency.",
  orgTitle: "For Organizations:",
  orgPoints: [
    "Accurate biometric attendance",
    "Automated HR workflows",
    "Centralized data management",
    "Easy leave tracking & approvals",
    "Multi-location synchronization",
  ],
  suitedTitle: "Best Suited For:",
  suitedPoints: [
    "Corporates & SMEs",
    "Educational Institutions",
    "Healthcare & IT Firms",
    "Government Offices",
    "Multi-Branch Enterprises",
  ],
  image: "/eamms/benefits.jpg",
};

const galleryItems = Array.from({ length: 14 }).map((_, i) => ({
  id: i + 1,
  src: `/eamms/gallery${i + 1}.jpg`,
  alt: `EAMMS Gallery ${i + 1}`,
}));

const faqs = [
  {
    id: 1,
    q: "What is EAMMS, and how does it improve attendance tracking?",
    a: "EAMMS (Employee Attendance Management & Monitoring System) automates attendance recording using face recognition. It eliminates manual entries, reduces errors, and provides real-time workforce monitoring and reporting.",
  },
  {
    id: 2,
    q: "How secure is the face recognition feature?",
    a: "EAMMS uses encrypted face recognition, ensuring data privacy and compliance with security standards. Only authorized personnel can access sensitive data.",
  },
  {
    id: 3,
    q: "How does the leave management feature work?",
    a: "Employees can apply for different leave types through the portal. Requests are routed automatically to the reporting manager/admin for approval, and notifications are sent to users.",
  },
  {
    id: 4,
    q: "Can EAMMS integrate with HR or payroll systems?",
    a: "Yes. EAMMS can seamlessly integrate with HRMS & payroll systems to synchronize attendance, leave, and salary data for automated payroll processing.",
  },
  {
    id: 5,
    q: "Can administrators manage multiple office locations?",
    a: "Yes. Admins can manage multiple office locations through a centralized dashboard, view attendance, and configure settings for each location.",
  },
];

/* =========================================
    PREMIUM UI HELPERS
========================================= */

const BRAND = {
  navy: "#070B18",
  ink: "#0B1639",
  blue: "#2F46FF",
  blue2: "#00A3FF",
  text: "#0B1C3D",
  muted: "#64748B",
  border: "rgba(148,163,184,0.26)",
};

function PremiumSection({ children, sx }) {
  return (
    <Box
      sx={{
        py: { xs: 7, md: 10 },
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}

function SectionHead({ title, subtitle }) {
  return (
    <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
      <Typography
        sx={{
          fontWeight: 900,
          fontSize: { xs: 22, sm: 28, md: 36 },
          letterSpacing: "-0.03em",
          color: BRAND.text,
        }}
      >
        {title}
      </Typography>

      {subtitle ? (
        <Typography
          sx={{
            mt: 1.2,
            maxWidth: 850,
            mx: "auto",
            fontSize: { xs: 14.5, md: 15.8 },
            lineHeight: 1.9,
            color: BRAND.muted,
          }}
        >
          {subtitle}
        </Typography>
      ) : null}
    </Box>
  );
}

function PremiumCard({ children, sx }) {
  return (
    <Card
      elevation={0}
      sx={{
        borderRadius: 4,
        border: `1px solid ${BRAND.border}`,
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.96) 0%, rgba(248,250,255,0.90) 100%)",
        boxShadow:
          "0 18px 60px rgba(2, 6, 23, 0.08), 0 1px 0 rgba(255,255,255,0.6) inset",
        overflow: "hidden",
        ...sx,
      }}
    >
      {children}
    </Card>
  );
}

function Bullet({ text }) {
  return (
    <Box sx={{ display: "flex", gap: 1.2, alignItems: "flex-start" }}>
      <CheckCircleRoundedIcon sx={{ fontSize: 18, mt: "2px", color: BRAND.blue }} />
      <Typography
        sx={{
          fontSize: { xs: 14.2, md: 15.2 },
          lineHeight: 1.85,
          color: "#334155",
        }}
      >
        {text}
      </Typography>
    </Box>
  );
}

/* =========================================
    PREMIUM GALLERY (Center Focus + Phone Frame Feel)
========================================= */

function PremiumGallery({ items }) {
  const [active, setActive] = React.useState(3);
  const refs = React.useRef([]);

  const scrollToIndex = (idx) => {
    const el = refs.current[idx];
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  };

  const next = () => {
    setActive((p) => {
      const n = (p + 1) % items.length;
      requestAnimationFrame(() => scrollToIndex(n));
      return n;
    });
  };

  const prev = () => {
    setActive((p) => {
      const n = (p - 1 + items.length) % items.length;
      requestAnimationFrame(() => scrollToIndex(n));
      return n;
    });
  };

  React.useEffect(() => {
    scrollToIndex(active);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box sx={{ position: "relative" }}>
      {/* Desktop arrows */}
      <IconButton
        onClick={prev}
        sx={{
          display: { xs: "none", md: "flex" },
          position: "absolute",
          left: -14,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 5,
          width: 48,
          height: 48,
          bgcolor: "#fff",
          border: `1px solid ${BRAND.border}`,
          boxShadow: "0 18px 55px rgba(2,6,23,0.14)",
          "&:hover": { bgcolor: "#F6F9FF" },
        }}
      >
        <ChevronLeftRoundedIcon />
      </IconButton>

      <IconButton
        onClick={next}
        sx={{
          display: { xs: "none", md: "flex" },
          position: "absolute",
          right: -14,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 5,
          width: 48,
          height: 48,
          bgcolor: "#fff",
          border: `1px solid ${BRAND.border}`,
          boxShadow: "0 18px 55px rgba(2,6,23,0.14)",
          "&:hover": { bgcolor: "#F6F9FF" },
        }}
      >
        <ChevronRightRoundedIcon />
      </IconButton>

      {/* Slider */}
      <Box
        sx={{
          display: "flex",

          gap: { xs: 2, md: 3.2 },
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          pb: 2,
          px: { xs: 0.5, md: 2 },
          WebkitOverflowScrolling: "touch",
          "&::-webkit-scrollbar": { display: "none" },
          scrollbarWidth: "none",
        }}
      >
        {items.map((item, i) => {
          const isActive = active === i;

          return (
            <Box
              key={item.id}
              ref={(el) => (refs.current[i] = el)}
              onClick={() => {
                setActive(i);
                scrollToIndex(i);
              }}
              sx={{
                flex: "0 0 auto",
                marginTop: 5,
                scrollSnapAlign: "center",
                cursor: "pointer",
                borderRadius: 5,
                width: { xs: 220, sm: 250, md: 280, lg: 210 },
                transition: "0.28s ease",
                transform: isActive ? "scale(1.04)" : "scale(0.98)",
                opacity: isActive ? 1 : 0.72,
                boxShadow: isActive
                  ? "0 28px 90px rgba(47,70,255,0.28)"
                  : "0 18px 50px rgba(2,6,23,0.14)",
                border: isActive ? "3px solid #2F46FF" : `1px solid ${BRAND.border}`,
                background: "#fff",
                overflow: "hidden",
              }}
            >
              {/* Phone frame style */}
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: { xs: 320, sm: 360, md: 420, lg: 460 },
                  background:
                    "linear-gradient(180deg, rgba(15,23,42,0.02), rgba(15,23,42,0.06))",
                }}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 600px) 220px, (max-width: 900px) 250px, 310px"
                  style={{ objectFit: "cover" }}
                />

                {/* subtle top gloss */}
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0) 40%)",
                    pointerEvents: "none",
                  }}
                />
              </Box>
            </Box>
          );
        })}
      </Box>

      {/* dots */}
      <Box
        sx={{
          mt: 2.2,
          display: "flex",
          justifyContent: "center",
          gap: 1,
          flexWrap: "wrap",
        }}
      >
        {items?.map((_, idx) => {
          const isActive = active === idx;
          return (
            <Box
              key={idx}
              onClick={() => {
                setActive(idx);
                scrollToIndex(idx);
              }}
              sx={{
                width: isActive ? 10 : 8,
                height: isActive ? 10 : 8,
                borderRadius: "50%",
                cursor: "pointer",
                transition: "0.2s",
                bgcolor: isActive ? BRAND.blue : "rgba(15,23,42,0.22)",
                boxShadow: isActive ? "0 0 0 6px rgba(47,70,255,0.12)" : "none",
              }}
            />
          );
        })}
      </Box>
    </Box>
  );
}

/* =========================================
    FULL PAGE
========================================= */

export default function EAMMSPagePremium() {
  return (
    <Box sx={{ width: "100%", bgcolor: "#fff" }}>
      {/* ================= HERO (PREMIUM) ================= */}
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          py: { xs: 8, md: 12 },
          background: `
            radial-gradient(circle at 15% 10%, rgba(47,70,255,0.18) 0%, transparent 55%),
            radial-gradient(circle at 85% 15%, rgba(0,163,255,0.14) 0%, transparent 55%),
            linear-gradient(180deg, #ffffff 0%, #f6f9ff 45%, #ffffff 100%)
          `,
        }}
      >
        {/* premium blur blobs */}
        <Box
          sx={{
            position: "absolute",
            top: -140,
            right: -200,
            width: 420,
            height: 420,
            bgcolor: "rgba(47,70,255,0.18)",
            filter: "blur(90px)",
            borderRadius: "50%",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: -180,
            left: -220,
            width: 500,
            height: 500,
            bgcolor: "rgba(0,163,255,0.16)",
            filter: "blur(110px)",
            borderRadius: "50%",
          }}
        />

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: { xs: 5, md: 7 },
              alignItems: "center",
            }}
          >
            {/* LEFT */}
            <Box sx={{ flex: 1, maxWidth: 720 }}>
              <Chip
                label={hero.tag}
                sx={{
                  mb: 2,
                  px: 1.5,
                  py: 2.2,
                  fontWeight: 900,
                  letterSpacing: 1,
                  color: BRAND.blue,
                  bgcolor: "rgba(47,70,255,0.08)",
                  border: "1px solid rgba(47,70,255,0.18)",
                }}
              />

              <Typography
                sx={{
                  fontWeight: 950,
                  fontSize: { xs: 28, sm: 40, md: 54 },
                  lineHeight: 1.05,
                  letterSpacing: "-0.045em",
                  color: BRAND.text,
                }}
              >
                {hero.title}
              </Typography>

              <Typography
                sx={{
                  mt: 2.2,
                  fontSize: { xs: 14.6, md: 16.4 },
                  lineHeight: 1.95,
                  color: BRAND.muted,
                  maxWidth: 640,
                }}
              >
                {hero.subtitle}
              </Typography>

              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={1.5}
                sx={{ mt: 3 }}
              >
                <Button
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    fontWeight: 900,
                    borderRadius: 2.5,
                    px: 3,
                    py: 1.3,
                    bgcolor: BRAND.blue,
                    boxShadow: "0 22px 60px rgba(47,70,255,0.28)",
                    "&:hover": {
                      bgcolor: "#2338FF",
                      boxShadow: "0 26px 70px rgba(47,70,255,0.35)",
                    },
                  }}
                >
                  {hero.cta}
                </Button>

                <Button
                  variant="outlined"
                  sx={{
                    textTransform: "none",
                    fontWeight: 900,
                    borderRadius: 2.5,
                    px: 3,
                    py: 1.3,
                    borderColor: "rgba(47,70,255,0.35)",
                    color: BRAND.blue,
                    "&:hover": {
                      borderColor: "rgba(47,70,255,0.65)",
                      bgcolor: "rgba(47,70,255,0.06)",
                    },
                  }}
                >
                  Request a Demo
                </Button>
              </Stack>

              {/* Trust chips */}
              <Stack
                direction="row"
                flexWrap="wrap"
                spacing={1}
                sx={{ mt: 3.2 }}
              >
                <Chip
                  icon={<VerifiedRoundedIcon />}
                  label="Secure Authentication"
                  sx={{ fontWeight: 800 }}
                />
                <Chip
                  icon={<PsychologyRoundedIcon />}
                  label="AI Enabled"
                  sx={{ fontWeight: 800 }}
                />
                <Chip
                  icon={<CloudDoneRoundedIcon />}
                  label="Cloud Ready"
                  sx={{ fontWeight: 800 }}
                />
                <Chip
                  icon={<AdminPanelSettingsRoundedIcon />}
                  label="Admin Control"
                  sx={{ fontWeight: 800 }}
                />
              </Stack>

              {/* highlights */}
              <Box sx={{ mt: 3.2 }}>
                <Typography
                  sx={{
                    fontWeight: 950,
                    color: BRAND.text,
                    fontSize: 16,
                  }}
                >
                  Key Highlights:
                </Typography>

                <Stack spacing={1.2} sx={{ mt: 1.6 }}>
                  {keyHighlights.map((x) => (
                    <Bullet key={x.id} text={x.text} />
                  ))}
                </Stack>
              </Box>
            </Box>

            {/* RIGHT IMAGE */}
            <Box sx={{ flex: 1, width: "100%" }}>
              <PremiumCard
                sx={{
                  width: "100%",
                  maxWidth: 560,
                  mx: { xs: "auto", md: "unset" },
                  p: 1.4,
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: { xs: 260, sm: 320, md: 420 },
                    borderRadius: 4,
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={hero.image}
                    alt="EAMMS Hero"
                    fill
                    priority
                    sizes="(max-width: 900px) 100vw, 560px"
                    style={{ objectFit: "cover" }}
                  />

                  {/* dark overlay for premium */}
                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(180deg, rgba(10,14,30,0.00) 0%, rgba(10,14,30,0.18) 75%, rgba(10,14,30,0.28) 100%)",
                    }}
                  />
                </Box>
              </PremiumCard>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ================= ABOUT ================= */}
      <PremiumSection sx={{ bgcolor: "#fff" }}>
        <Container maxWidth="lg">
          <SectionHead title={about.leftTitle} />

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: { xs: 2.5, md: 3 },
              alignItems: "stretch",
            }}
          >
            <PremiumCard sx={{ flex: 1, p: { xs: 3, md: 3.6 } }}>
              <Typography
                sx={{
                  fontWeight: 950,
                  fontSize: { xs: 16, md: 17 },
                  color: BRAND.text,
                }}
              >
                {about.leftText}
              </Typography>
            </PremiumCard>

            <PremiumCard sx={{ flex: 2, p: { xs: 3, md: 3.6 } }}>
              <Typography
                sx={{
                  fontSize: { xs: 14.5, md: 15.4 },
                  lineHeight: 1.95,
                  color: BRAND.muted,
                  whiteSpace: "pre-line",
                }}
              >
                {about.rightText}
              </Typography>
            </PremiumCard>
          </Box>
        </Container>
      </PremiumSection>

      {/* ================= KEY MODULES ================= */}
      <PremiumSection
        sx={{
          background:
            "linear-gradient(180deg, #ffffff 0%, #f6f9ff 55%, #ffffff 100%)",
        }}
      >
        <Container maxWidth="lg">
          <SectionHead
            title="Key Modules"
            subtitle="Explore the core modules that streamline employee management, enhance productivity, and simplify organizational workflows."
          />

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", lg: "row" },
              gap: { xs: 4, lg: 5 },
              alignItems: "flex-start",
            }}
          >
            {/* Image */}
            <Box sx={{ flex: 1, width: "100%" }}>
              <PremiumCard
                sx={{
                  width: "100%",
                  maxWidth: 520,
                  mx: { xs: "auto", lg: 0 },
                  p: 1.2,
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: { xs: 260, sm: 320, md: 420 },
                    borderRadius: 4,
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src="/eamms/keymodules.jpg"
                    alt="EAMMS Key Modules"
                    fill
                    sizes="(max-width: 900px) 100vw, 520px"
                    style={{ objectFit: "cover" }}
                  />
                </Box>
              </PremiumCard>
            </Box>

            {/* Modules */}
            <Box sx={{ flex: 1.2, width: "100%" }}>
              <Stack spacing={2.2}>
                {keyModules.map((m) => (
                  <PremiumCard key={m.id} sx={{ p: { xs: 3, md: 3.4 } }}>
                    <Typography
                      sx={{
                        fontWeight: 950,
                        fontSize: { xs: 16, md: 17.5 },
                        color: BRAND.text,
                      }}
                    >
                      {m.title}
                    </Typography>

                    <Divider sx={{ my: 2 }} />

                    <Stack spacing={1.1}>
                      {m.points.map((p, idx) => (
                        <Bullet key={idx} text={p} />
                      ))}
                    </Stack>
                  </PremiumCard>
                ))}
              </Stack>
            </Box>
          </Box>
        </Container>
      </PremiumSection>

      {/* ================= ADMIN FEATURES ================= */}
      <PremiumSection sx={{ bgcolor: "#fff" }}>
        <Container maxWidth="lg">
          <SectionHead
            title="Admin Features"
            subtitle="Empower your organization with complete control over users, roles, and settings — from a single, easy-to-manage admin dashboard."
          />

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: { xs: 2.2, md: 3 },
              justifyContent: "center",
            }}
          >
            {adminFeatures.map((f) => (
              <PremiumCard
                key={f.id}
                sx={{
                  width: { xs: "100%", md: "calc(33.333% - 16px)" },
                  p: { xs: 3, md: 3.4 },
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 950,
                    color: BRAND.text,
                    fontSize: { xs: 16, md: 17.2 },
                  }}
                >
                  {f.title}
                </Typography>

                <Stack spacing={1.1} sx={{ mt: 2 }}>
                  {f.points.map((p, idx) => (
                    <Bullet key={idx} text={p} />
                  ))}
                </Stack>
              </PremiumCard>
            ))}
          </Box>
        </Container>
      </PremiumSection>

      {/* ================= BENEFITS ================= */}
      <PremiumSection
        sx={{
          background:
            "linear-gradient(180deg, #ffffff 0%, #f6f9ff 55%, #ffffff 100%)",
        }}
      >
        <Container maxWidth="lg">
          <SectionHead title={benefits.title} subtitle={benefits.caption} />

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", lg: "row" },
              gap: { xs: 4, lg: 6 },
              alignItems: "center",
            }}
          >
            <Box sx={{ flex: 1, width: "100%" }}>
              <PremiumCard sx={{ p: { xs: 3, md: 3.4 } }}>
                <Typography sx={{ fontWeight: 950, color: BRAND.text }}>
                  {benefits.orgTitle}
                </Typography>

                <Stack spacing={1.1} sx={{ mt: 2 }}>
                  {benefits.orgPoints.map((p, idx) => (
                    <Bullet key={idx} text={p} />
                  ))}
                </Stack>

                <Divider sx={{ my: 3 }} />

                <Typography sx={{ fontWeight: 950, color: BRAND.text }}>
                  {benefits.suitedTitle}
                </Typography>

                <Stack spacing={1.1} sx={{ mt: 2 }}>
                  {benefits.suitedPoints.map((p, idx) => (
                    <Bullet key={idx} text={p} />
                  ))}
                </Stack>
              </PremiumCard>
            </Box>

            <Box sx={{ flex: 1, width: "100%" }}>
              <PremiumCard
                sx={{
                  width: "100%",
                  maxWidth: 560,
                  mx: { xs: "auto", lg: "unset" },
                  p: 1.2,
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: { xs: 260, sm: 320, md: 420 },
                    borderRadius: 4,
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={benefits.image}
                    alt="EAMMS Benefits"
                    fill
                    sizes="(max-width: 900px) 100vw, 560px"
                    style={{ objectFit: "cover" }}
                  />
                </Box>
              </PremiumCard>
            </Box>
          </Box>
        </Container>
      </PremiumSection>

      {/* ================= GALLERY ================= */}
      <PremiumSection sx={{ bgcolor: "#fff" }}>
        <Container maxWidth="lg">
          <SectionHead
            title="Gallery"
            subtitle="Take a look at our gallery to see how we bring ideas to life through creativity, technology, and dedication."
          />

          <PremiumGallery items={galleryItems} />
        </Container>
      </PremiumSection>

      {/* ================= FAQ ================= */}
      <PremiumSection
        sx={{
          background:
            "linear-gradient(180deg, #ffffff 0%, #f6f9ff 55%, #ffffff 100%)",
        }}
      >
        <Container maxWidth="lg">
          <SectionHead title="Frequently Asked Questions" />
          <Grid
            container
            spacing={4}
            justifyContent="center"
          >
            {faqs.map((item, index) => (
              <Grid
                item
                xs={12}
                md={6}
                key={index}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Accordion
                  elevation={0}
                  sx={{
                    width: "100%",          //  SAME WIDTH
                    maxWidth: 520,          //  CONTROLLED COLUMN WIDTH
                    borderBottom: "1px solid #e5e7eb",
                    "&:before": { display: "none" },
                  }}
                >
                  <AccordionSummary
                    expandIcon={
                      <ExpandMoreIcon sx={{ color: "#1b4dff" }} />
                    }
                  >
                    <Typography fontWeight={600} color="#0b1b5c">
                      {item.q}
                    </Typography>
                  </AccordionSummary>

                  <AccordionDetails>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                    >
                      {item.a}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Grid>
            ))}
          </Grid>
        </Container>
      </PremiumSection>
    </Box>
  );
}
