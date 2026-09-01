"use client"
import {
    Box,
    Container,
    Typography,
    Button,
    Grid,
    Card,
    Avatar,
    Chip,
    Stack,
    Paper,
} from "@mui/material";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import SecurityIcon from "@mui/icons-material/Security";
import SpeedIcon from "@mui/icons-material/Speed";
import GroupsIcon from "@mui/icons-material/Groups";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import VerifiedIcon from "@mui/icons-material/Verified";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import BiotechIcon from "@mui/icons-material/Biotech";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import StorageIcon from "@mui/icons-material/Storage";
import CloudDoneIcon from "@mui/icons-material/CloudDone";
import GppGoodIcon from "@mui/icons-material/GppGood";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useState } from "react";
import RequestDemoModal from "../../../components/popups/RequestDemoModal";

// ─── Color Palette ───────────────────────────────────────────────
const COLORS = {
    navy: "#0A1628",
    navyLight: "#132038",
    navyMid: "#1B2D4A",
    blue: "#1976D2",
    blueBright: "#1d4bff",
    blueLight: "#E3F2FD",
    accent: "#1d4bff",
    accentGlow: "#FFFFFF",
    white: "#FFFFFF",
    grayBg: "#F5F7FA",
    grayText: "#6B7A90",
    grayDark: "#3A4A5C",
    success: "#4CAF50",
    gradientBlue: "linear-gradient(135deg, #1d4bff 0%, #1d4bff 100%)",
    gradientNavy:
        "linear-gradient(180deg, #0A1628 0%, #132038 50%, #1B2D4A 100%)",
    gradientHero:
        "linear-gradient(135deg, #0A1628 0%, #0D1B30 40%, #112240 100%)",
};

// ─── Reusable Section Wrapper ────────────────────────────────────
function Section({ children, sx = {}, ...props }) {
    return (
        <Box
            component="section"
            sx={{ py: { xs: 6, md: 10 }, px: { xs: 2, md: 0 }, ...sx }}
            {...props}
        >
            <Container maxWidth="lg">{children}</Container>
        </Box>
    );
}

// ─── Section Title ───────────────────────────────────────────────
function SectionTitle({ children, subtitle, light = false, sx = {} }) {
    return (
        <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 }, ...sx }}>
            <Typography
                variant="h4"
                component="h2"
                sx={{
                    fontWeight: 800,
                    color: light ? COLORS.white : COLORS.navy,
                    mb: 2,
                    fontSize: { xs: "1.6rem", md: "2.2rem" },
                    lineHeight: 1.3,
                }}
            >
                {children}
            </Typography>
            {subtitle && (
                <Typography
                    variant="body1"
                    sx={{
                        color: light ? "rgba(255,255,255,0.7)" : COLORS.grayText,
                        maxWidth: 680,
                        mx: "auto",
                        fontSize: { xs: "0.95rem", md: "1.05rem" },
                        lineHeight: 1.7,
                    }}
                >
                    {subtitle}
                </Typography>
            )}
        </Box>
    );
}

// ─── Stat Card ───────────────────────────────────────────────────
function StatCard({ value, label }) {
    return (
        <Box sx={{ textAlign: "center", px: 2 }}>
            <Typography
                variant="h3"
                sx={{
                    fontWeight: 900,
                    color: COLORS.white,
                    fontSize: { xs: "2.2rem", md: "3rem" },
                    textShadow: "0 0 30px rgba(0,188,212,0.3)",
                }}
            >
                {value}
            </Typography>
            <Typography
                variant="body2"
                sx={{
                    color: "rgba(255,255,255,0.75)",
                    mt: 0.5,
                    fontSize: "0.85rem",
                    letterSpacing: 0.5,
                }}
            >
                {label}
            </Typography>
        </Box>
    );
}

// ─── Custom Timeline Item (no @mui/lab needed) ───────────────────
function CustomTimelineItem({ event, index, isLast }) {
    const isEven = index % 2 === 0;

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: { xs: "row", md: isEven ? "row" : "row-reverse" },
                alignItems: "flex-start",
                position: "relative",
                mb: isLast ? 0 : 4,
            }}
        >
            {/* Year label — shown on the opposite side on md+ */}
            <Box
                sx={{
                    flex: 1,
                    display: { xs: "none", md: "flex" },
                    justifyContent: isEven ? "flex-end" : "flex-start",
                    pr: isEven ? 4 : 0,
                    pl: isEven ? 0 : 4,
                    pt: 2.5,
                }}
            >
                <Typography
                    variant="h5"
                    sx={{
                        fontWeight: 900,
                        color: event.color,
                        opacity: 0.8,
                    }}
                >
                    {event.year}
                </Typography>
            </Box>

            {/* Center dot + connector */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    flexShrink: 0,
                    mr: { xs: 2, md: 0 },
                }}
            >
                <Avatar
                    sx={{
                        width: 44,
                        height: 44,
                        bgcolor: event.color,
                        boxShadow: `0 0 16px ${event.color}40`,
                    }}
                >
                    {event.icon}
                </Avatar>
                {!isLast && (
                    <Box
                        sx={{
                            width: 3,
                            flexGrow: 1,
                            minHeight: 60,
                            bgcolor: "rgba(0,0,0,0.08)",
                            borderRadius: 2,
                        }}
                    />
                )}
            </Box>

            {/* Card content */}
            <Box
                sx={{
                    flex: 1,
                    pl: { xs: 0, md: isEven ? 4 : 0 },
                    pr: { xs: 0, md: isEven ? 0 : 4 },
                    pb: 2,
                }}
            >
                <Card
                    elevation={0}
                    sx={{
                        p: 3,
                        borderRadius: 3,
                        bgcolor: COLORS.white,
                        border: "1px solid rgba(0,0,0,0.06)",
                        transition: "all 0.3s ease",
                        "&:hover": {
                            boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                            transform: "translateY(-2px)",
                            borderLeft: `3px solid ${event.color}`,
                        },
                    }}
                >
                    {/* Show year inside card on mobile */}
                    <Typography
                        variant="caption"
                        sx={{
                            display: { xs: "block", md: "none" },
                            color: event.color,
                            fontWeight: 800,
                            fontSize: "0.85rem",
                            mb: 0.5,
                        }}
                    >
                        {event.year}
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        sx={{ fontWeight: 700, color: COLORS.navy, mb: 1 }}
                    >
                        {event.title}
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{
                            color: COLORS.grayText,
                            lineHeight: 1.7,
                            fontSize: "0.85rem",
                        }}
                    >
                        {event.description}
                    </Typography>
                </Card>
            </Box>
        </Box>
    );
}

// ─── Timeline Data ───────────────────────────────────────────────
const timelineEvents = [
    {
        year: "2019",
        title: "The Spark",
        description:
            "BluAI was born out of a single frustration — hospital systems were stuck in the past. We set out to change that with AI-first thinking.",
        icon: <EmojiObjectsIcon />,
        color: "#FFC107",
    },
    {
        year: "2020",
        title: "First Product Launch",
        description:
            "Launched our core Hospital Management System with integrated lab, pharmacy, and billing modules. Onboarded our first 10 hospitals.",
        icon: <RocketLaunchIcon />,
        color: "#2196F3",
    },
    {
        year: "2021",
        title: "AI Integration",
        description:
            "Introduced AI-powered diagnostics support and predictive analytics for patient flow management, reducing wait times by 40%.",
        icon: <AutoGraphIcon />,
        color: "#00BCD4",
    },
    {
        year: "2022",
        title: "Scaling Nationally",
        description:
            "Expanded to 50+ hospitals across 12 states. Achieved NABH and NABL compliance integration. Partnered with leading diagnostic labs.",
        icon: <TrendingUpIcon />,
        color: "#4CAF50",
    },
    {
        year: "2023",
        title: "HL7 & FHIR Compliance",
        description:
            "Full HL7 and FHIR interoperability achieved. Seamless data exchange between any hospital system, lab instrument, or third-party app.",
        icon: <IntegrationInstructionsIcon />,
        color: "#9C27B0",
    },
    {
        year: "2024",
        title: "Cloud-Native Architecture",
        description:
            "Migrated to a fully cloud-native, microservices architecture. 99.99% uptime guarantee with automated disaster recovery.",
        icon: <CloudDoneIcon />,
        color: "#FF5722",
    },
    { 
        year: "2025",
        title: "Patient-Centric Future",
        description:
            "The 1000-hospital milestone. Launched BluAI Assist — an AI copilot for clinicians that provides real-time decision support.",
        icon: <FavoriteIcon />,
        color: "#E91E63",
    },
];

// ─── Standards Data ──────────────────────────────────────────────
const standards = [
    { name: "NABH", desc: "National Accreditation Board for Hospitals" },
    { name: "NABL", desc: "National Accreditation Board for Laboratories" },
    { name: "HL7", desc: "Health Level Seven International" },
    { name: "FHIR", desc: "Fast Healthcare Interoperability Resources" },
    { name: "ABDM", desc: "Ayushman Bharat Digital Mission" },
    { name: "HIPAA", desc: "Health Insurance Portability & Accountability" },
];

// ─── Success Metrics ─────────────────────────────────────────────
const successMetrics = [
    {
        icon: <SpeedIcon sx={{ fontSize: 36 , color: COLORS.blue }} />,
        title: "Patient Wait Time Reduced",
        description:
            "Our intelligent queue management and appointment scheduling have cut average patient wait times by 65% across all partner hospitals.",
        highlight: "65% Faster",
    },
    {
        icon: <VerifiedIcon sx={{ fontSize: 36 , color: COLORS.blue }} />,
        title: "Diagnostic Accuracy Improved",
        description:
            "AI-assisted diagnostics and automated lab interfacing have improved diagnostic accuracy and reduced transcription errors to near zero.",
        highlight: "99.7% Accuracy",
    },
    {
        icon: <SupportAgentIcon sx={{ fontSize: 36 , color: COLORS.blue }} />,
        title: "Staff Productivity Increased",
        description:
            "Automation of routine tasks — billing, inventory, reporting — has freed up clinical staff to focus on what matters most: patient care.",
        highlight: "3x Productivity",
    },
    {
        icon: <VolunteerActivismIcon sx={{ fontSize: 36 , color: COLORS.blue }} />,
        title: "Patient Satisfaction Score",
        description:
            "Hospitals using BluAI consistently report higher patient satisfaction scores driven by faster service and transparent billing.",
        highlight: "4.8/5 Rating",
    },
];

// ─── Facility Types ──────────────────────────────────────────────
const facilityTypes = [
    { icon: <LocalHospitalIcon />, name: "Multi-Specialty Hospitals" },
    { icon: <MedicalServicesIcon />, name: "Primary Health Centers" },
    { icon: <BiotechIcon />, name: "Diagnostic Laboratories" },
    { icon: <FavoriteIcon />, name: "Maternity & Child Care" },
    { icon: <GroupsIcon />, name: "Nursing Homes" },
    { icon: <StorageIcon />, name: "Pharmacy Chains" },
];

// ─── Security Badges ─────────────────────────────────────────────
const securityBadges = [
    "GDPR Compliant",
    "ISO 27001",
    "SOC 2 Type II",
    "AES-256 Encryption",
    "CERT-In Empanelled",
];

// ═════════════════════════════════════════════════════════════════
//  MAIN PAGE COMPONENT
// ═════════════════════════════════════════════════════════════════

function OurStoryPage() {
    const [openDemo, setOpenDemo] = useState(false);
    return (
        <Box sx={{ bgcolor: COLORS.white, overflowX: "hidden" }}>
            {/* ──────────── HERO SECTION ──────────── */}
            <Box
                sx={{
                    background: COLORS.gradientHero,
                    position: "relative",
                    overflow: "hidden",
                    pt: { xs: 10, md: 16 },
                    pb: { xs: 10, md: 16 },
                    "&::before": {
                        content: '""',
                        position: "absolute",
                        top: "-50%",
                        right: "-20%",
                        width: "600px",
                        height: "600px",
                        borderRadius: "50%",
                        background:
                            "radial-gradient(circle, rgba(0,188,212,0.08) 0%, transparent 70%)",
                        pointerEvents: "none",
                    },
                    "&::after": {
                        content: '""', 
                        position: "absolute",
                        bottom: "-30%",
                        left: "-10%",
                        width: "400px",
                        height: "400px",
                        borderRadius: "50%",
                        background:
                            "radial-gradient(circle, rgba(25,118,210,0.06) 0%, transparent 70%)",
                        pointerEvents: "none",
                    },
                }}   
            >
                <Container maxWidth="md">
                    <Box sx={{ textAlign: "center", position: "relative", zIndex: 1 }}>
                        <Chip
                            label="OUR STORY"
                            size="small" 
                            sx={{
                                bgcolor: "rgba(0,188,212,0.15)",
                                color: COLORS.accentGlow,
                                fontWeight: 700,
                                letterSpacing: 2,
                                fontSize: "0.7rem",
                                mb: 3,
                                border: "1px solid rgba(0,188,212,0.25)",
                            }}
                        />
                        <Typography
                            variant="h2"
                            component="h1"
                            sx={{
                                fontWeight: 900,
                                color: COLORS.white,
                                mb: 3,
                                fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3.2rem" },
                                lineHeight: 1.2,
                                "& span": {
                                    background: COLORS.gradientBlue,
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                },
                            }}
                        >
                            Built For Hospitals That{" "}
                            <span>REFUSE To Stand Still</span>
                        </Typography>
                        <Typography
                            variant="h6"
                            sx={{
                                color: "rgba(255,255,255,0.65)",
                                fontWeight: 400,
                                mb: 5,
                                maxWidth: 560,
                                mx: "auto",
                                fontSize: { xs: "0.95rem", md: "1.1rem" },
                                lineHeight: 1.7,
                            }}
                        >
                            BluAI was created to give every hospital — large or small — the
                            power of intelligent automation, seamless interoperability, and
                            patient-first technology.
                        </Typography>
                        <Button
                            variant="contained"
                            size="large"
                            endIcon={<ArrowForwardIcon />}
                            onClick={() => setOpenDemo(true)}
                            sx={{
                                background: COLORS.gradientBlue,
                                color: COLORS.white,
                                fontWeight: 700,
                                px: 5,
                                py: 1.5,
                                borderRadius: "50px",
                                textTransform: "none",
                                fontSize: "1rem",
                                boxShadow: "0 4px 20px rgba(25,118,210,0.35)",
                                "&:hover": {
                                    boxShadow: "0 6px 28px rgba(25,118,210,0.5)",
                                    transform: "translateY(-1px)",
                                },
                                transition: "all 0.3s ease",
                            }}
                        >
                            Schedule a Demo
                        </Button>
                        <RequestDemoModal open={openDemo} onClose={() => setOpenDemo(false)} />
                    </Box>
                </Container>
            </Box>

            {/* ──────────── STANDARDS SECTION ──────────── */}
            <Section sx={{ bgcolor: COLORS.grayBg }}>
                <SectionTitle subtitle="Our platform is designed to meet and exceed the most rigorous healthcare compliance and interoperability standards worldwide.">
                    Built On Global Standards Your Hospital Management System Can Trust
                </SectionTitle>

                <Grid container spacing={3} justifyContent="center">
                    {standards.map((std) => (
                        <Grid item xs={6} sm={4} md={2} key={std.name}>
                            <Paper
                                elevation={0}
                                sx={{
                                    textAlign: "center",
                                    p: 3,
                                    borderRadius: 3,
                                    bgcolor: COLORS.white,
                                    border: "1px solid rgba(0,0,0,0.06)",
                                    transition: "all 0.3s ease",
                                    "&:hover": {
                                        boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                                        transform: "translateY(-4px)",
                                        borderColor: COLORS.blueBright,
                                    },
                                }}
                            >
                                <Box
                                    sx={{
                                        width: 50,
                                        height: 50,
                                        borderRadius: "12px",
                                        background: COLORS.gradientBlue,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        mx: "auto",
                                        mb: 1.5,
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            color: COLORS.white,
                                            fontWeight: 900,
                                            fontSize: "0.75rem",
                                        }}
                                    >
                                        {std.name}
                                    </Typography>
                                </Box>
                                <Typography
                                    variant="caption"
                                    sx={{
                                        color: COLORS.grayText,
                                        fontSize: "0.7rem",
                                        lineHeight: 1.3,
                                        display: "block",
                                    }}
                                >
                                    {std.desc}
                                </Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Section>

            {/* ──────────── PROBLEM SECTION ──────────── */}
            <Section>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        gap: 6,
                        alignItems: "center",
                    }}
                >
                    {/* Left Column */}
                    <Box sx={{ flex: { xs: "1 1 auto", md: "0 0 41.666%" }, maxWidth: { md: "41.666%" } }}>
                        {/* <Box
                            sx={{
                                width: 100,
                                height: 100,
                                borderRadius: "50%",
                                background: COLORS.gradientBlue,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                mb: 3,
                                boxShadow: "0 8px 30px rgba(25,118,210,0.25)",
                            }}
                        >
                            <LocalHospitalIcon sx={{ fontSize: 44, color: COLORS.white }} />
                        </Box> */}
                        <Typography
                            variant="h4"
                            sx={{
                                fontWeight: 800,
                                color: COLORS.navy,
                                mb: 2,
                                fontSize: { xs: "1.5rem", md: "2rem" },
                                lineHeight: 1.3,
                            }}
                        >
                            The Management Of Your Hospital Was Operating On Hope And Spreadsheets
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{ color: COLORS.grayText, lineHeight: 1.8, mb: 2 }}
                        >
                            Before BluAI, hospital administrators were drowning in disconnected
                            systems — paper records piling up, lab results getting lost, billing
                            errors going unnoticed, and critical patient data trapped in silos.
                        </Typography>
                    </Box>

                    {/* Right Column - Cards Grid */}
                    <Box
                        sx={{
                            flex: { xs: "1 1 auto", md: "0 0 58.333%" },
                            maxWidth: { md: "58.333%" },
                            display: "grid",
                            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                            gap: 2,
                        }}
                    >
                        {[
                            {
                                title: "Fragmented Systems",
                                desc: "Multiple disconnected software for OPD, IPD, labs, pharmacy, and billing with no unified view.",
                            },
                            {
                                title: "Manual Data Entry",
                                desc: "Staff spending hours transcribing results, creating invoices, and managing inventory by hand.",
                            },
                            {
                                title: "Data Silos",
                                desc: "Critical patient information locked in department-specific systems with no interoperability.",
                            },
                            {
                                title: "Compliance Gaps",
                                desc: "Struggling to meet NABH, NABL, and ABDM requirements without purpose-built digital workflows.",
                            },
                        ].map((item, i) => (
                            <Card
                                key={i}
                                elevation={0}
                                sx={{
                                    p: 2.5,
                                    borderRadius: 3,
                                    height: "100%",
                                    border: "1px solid rgba(0,0,0,0.06)",
                                    transition: "all 0.3s ease",
                                    "&:hover": {
                                        borderColor: "#E53935",
                                        boxShadow: "0 4px 16px rgba(229,57,53,0.1)",
                                    },
                                }}
                            >
                                <Typography
                                    variant="subtitle2"
                                    sx={{ fontWeight: 700, color: COLORS.navy, mb: 1 }}
                                >
                                    {item.title}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: COLORS.grayText,
                                        lineHeight: 1.6,
                                        fontSize: "0.82rem",
                                    }}
                                >
                                    {item.desc}
                                </Typography>
                            </Card>
                        ))}
                    </Box>
                </Box>
            </Section>

            {/* ──────────── PIVOTAL MOMENT ──────────── */}
            <Box sx={{ background: COLORS.gradientNavy, py: { xs: 6, md: 8 } }}>
                <Container maxWidth="md">
                    <Box sx={{ textAlign: "center" }}>
                        <Avatar
                            sx={{
                                width: 80,
                                height: 80,
                                mx: "auto",
                                mb: 3,
                                background: COLORS.gradientBlue,
                                boxShadow: "0 0 40px rgba(0,188,212,0.2)",
                            }}
                        >
                            <EmojiObjectsIcon sx={{ fontSize: 40 }} />
                        </Avatar>
                        <Typography
                            variant="h4"
                            sx={{
                                fontWeight: 800,
                                color: COLORS.white,
                                mb: 3,
                                fontSize: { xs: "1.5rem", md: "2rem" },
                            }}
                        >
                            One Moment in 2019 Changed Everything
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                color: "rgba(255,255,255,0.7)",
                                maxWidth: 620,
                                mx: "auto",
                                lineHeight: 1.9,
                                fontSize: "1rem",
                            }}
                        >
                            Our founder walked into a 200-bed hospital and saw three nurses
                            manually copying lab results from printed sheets into a billing
                            system. A single typo in a blood report almost led to a wrong
                            prescription. That day, BluAI was conceived — not as a software
                            product, but as a promise: no hospital should ever risk a
                            patient&apos;s life because of broken technology.
                        </Typography>
                    </Box>
                </Container>
            </Box>

            {/* ──────────── TIMELINE SECTION (Custom — no @mui/lab) ──────────── */}
            <Section sx={{ bgcolor: COLORS.grayBg }}>
                <SectionTitle subtitle="From a bold idea in a small office to powering 1000+ hospitals — here's how we got here.">
                    Founded in 2019, Still Building, Still Growing
                </SectionTitle>

                <Box sx={{ maxWidth: 900, mx: "auto", position: "relative" }}>
                    {/* Vertical center line — visible on md+ */}
                    <Box
                        sx={{
                            display: { xs: "none", md: "block" },
                            position: "absolute",
                            left: "50%",
                            top: 0,
                            bottom: 0,
                            width: 3,
                            bgcolor: "rgba(0,0,0,0.06)",
                            transform: "translateX(-50%)",
                            borderRadius: 2,
                            zIndex: 0,
                        }}
                    />

                    {timelineEvents.map((event, index) => (
                        <CustomTimelineItem
                            key={event.year}
                            event={event}
                            index={index}
                            isLast={index === timelineEvents.length - 1}
                        />
                    ))}
                </Box>
            </Section>

            {/* ──────────── SUCCESS METRICS ──────────── */}
            <Section>
                <SectionTitle subtitle="We don't count features shipped. We count lives improved, errors eliminated, and hours given back to caregivers.">
                    We Measure Success By What Happens To The Patient
                </SectionTitle>

                <Grid container spacing={3}>
                    {successMetrics.map((metric, i) => (
                        <Grid item xs={12} sm={6} key={i}>
                            <Card
                                elevation={0}
                                sx={{
                                    p: 3.5,
                                    borderRadius: 3,
                                    height: "100%",
                                    border: "1px solid rgba(0,0,0,0.06)",
                                    position: "relative",
                                    overflow: "hidden",
                                    transition: "all 0.3s ease",
                                    "&:hover": {
                                        boxShadow: "0 12px 32px rgba(0,0,0,0.08)",
                                        transform: "translateY(-4px)",
                                        "& .metric-highlight": {
                                            transform: "scale(1.05)",
                                        },
                                    },
                                }}
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "flex-start",
                                        gap: 2,
                                        mb: 2,
                                    }}
                                >
                                    <Box
                                        sx={{
                                            color: COLORS.blue,
                                            flexShrink: 0,
                                            mt: 0.5,
                                        }}
                                    >
                                        {metric.icon}
                                    </Box>
                                    <Box>
                                        <Typography
                                            variant="subtitle1"
                                            sx={{
                                                fontWeight: 700,
                                                color: COLORS.navy,
                                                mb: 0.5,
                                            }}
                                        >
                                            {metric.title}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                color: COLORS.grayText,
                                                lineHeight: 1.7,
                                                fontSize: "0.85rem",
                                            }}
                                        >
                                            {metric.description}
                                        </Typography>
                                    </Box>
                                </Box>
                                <Chip
                                    className="metric-highlight"
                                    label={metric.highlight}
                                    size="small"
                                    sx={{
                                        bgcolor: COLORS.blueLight,
                                        color: COLORS.blue,
                                        fontWeight: 700,
                                        fontSize: "0.75rem",
                                        transition: "transform 0.3s ease",
                                    }}
                                />
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Section>

            {/* ──────────── STATS BANNER ──────────── */}
            <Box
                sx={{
                    background: COLORS.gradientBlue,
                    py: { xs: 5, md: 7 },
                    position: "relative",
                    overflow: "hidden",
                    "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background:
                            "repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 80px)",
                        pointerEvents: "none",
                    },
                }}
            >
                <Container maxWidth="md">
                    <Typography
                        variant="h5"
                        sx={{
                            fontWeight: 800,
                            color: COLORS.white,
                            textAlign: "center",
                            mb: 5,
                            fontSize: { xs: "1.2rem", md: "1.5rem" },
                        }}
                    >
                        Every Number Is A Hospital That Chose To Do Better
                    </Typography>
                    <Grid container spacing={4} justifyContent="center">
                        <Grid item xs={6} sm={3}>
                            <StatCard value="100+" label="Hospitals Onboarded" />
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <StatCard value="50+" label="Labs Integrated" />
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <StatCard value="11+" label="Cities Covered" />
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <StatCard value="20+" label="Instrument Brands" />
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* ──────────── FACILITY TYPES ──────────── */}
            <Section>
                <SectionTitle subtitle="Whether you're a 10-bed nursing home or a 1000-bed multi-specialty chain, BluAI adapts to your needs — not the other way around.">
                    Any Kind Of Facility That Cares About Patient Care Has The Right To
                    Have The Right Hospital Management System
                </SectionTitle>

                <Grid container spacing={3} justifyContent="center">
                    {facilityTypes.map((f, i) => (
                        <Grid item xs={6} sm={4} md={2} key={i}>
                            <Paper
                                elevation={0}
                                sx={{
                                    textAlign: "center",
                                    p: 3,
                                    borderRadius: 3,
                                    border: "1px solid rgba(0,0,0,0.06)",
                                    transition: "all 0.3s ease",
                                    cursor: "default",
                                    "&:hover": {
                                        borderColor: COLORS.blueBright,
                                        boxShadow: "0 8px 24px rgba(25,118,210,0.1)",
                                        transform: "translateY(-4px)",
                                        "& .facility-icon": {
                                            background: COLORS.gradientBlue,
                                            color: COLORS.white,
                                        },
                                    },
                                }}
                            >
                                <Avatar
                                    className="facility-icon"
                                    sx={{
                                        width: 56,
                                        height: 56,
                                        mx: "auto",
                                        mb: 1.5,
                                        bgcolor: COLORS.blueLight,
                                        color: COLORS.blue,
                                        transition: "all 0.3s ease",
                                    }}
                                >
                                    {f.icon}
                                </Avatar>
                                <Typography
                                    variant="caption"
                                    sx={{
                                        fontWeight: 600,
                                        color: COLORS.grayDark,
                                        fontSize: "0.75rem",
                                        lineHeight: 1.3,
                                        display: "block",
                                    }}
                                >
                                    {f.name}
                                </Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Section>

            {/* ──────────── BEST HMS + SECURITY ──────────── */}
            <Box sx={{ bgcolor: COLORS.navy, py: { xs: 6, md: 8 } }}>
                <Container maxWidth="lg">
                    <Grid container spacing={6}>
                        {/* Best HMS */}
                        <Grid item xs={12} md={6}>
                            <Typography
                                variant="h5"
                                sx={{
                                    fontWeight: 800,
                                    color: COLORS.white,
                                    mb: 2,
                                    fontSize: { xs: "1.2rem", md: "1.4rem" },
                                }}
                            >
                                The Best Hospital Management System For Healthcare
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{
                                    color: "rgba(255,255,255,0.6)",
                                    lineHeight: 1.8,
                                    mb: 3,
                                }}
                            >
                                BluAI combines decades of healthcare domain expertise with
                                cutting-edge AI to deliver a platform that&apos;s not just
                                powerful — it&apos;s intuitive. From OPD registration to
                                discharge summary, every workflow is designed to save time and
                                reduce errors.
                            </Typography>
                            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                                {[
                                    "OPD/IPD",
                                    "Laboratory",
                                    "Pharmacy",
                                    "Radiology",
                                    "Billing",
                                    "Inventory",
                                    "HR & Payroll",
                                    "Telemedicine",
                                ].map((mod) => (
                                    <Chip
                                        key={mod}
                                        label={mod}
                                        size="small"
                                        sx={{
                                            bgcolor: "rgba(255,255,255,0.08)",
                                            color: "rgba(255,255,255,0.8)",
                                            fontSize: "0.7rem",
                                            fontWeight: 600,
                                            mb: 1,
                                            border: "1px solid rgba(255,255,255,0.1)",
                                        }}
                                    />
                                ))}
                            </Stack>
                        </Grid>

                        {/* Data Security */}
                        <Grid item xs={12} md={6}>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 1.5,
                                    mb: 2,
                                }}
                            >
                                <GppGoodIcon
                                    sx={{ color: COLORS.accentGlow, fontSize: 28 }}
                                />
                                <Typography
                                    variant="h5"
                                    sx={{
                                        fontWeight: 800,
                                        color: COLORS.white,
                                        fontSize: { xs: "1.2rem", md: "1.4rem" },
                                    }}
                                >
                                    We Secure Your Data Like It&apos;s Our Own
                                </Typography>
                            </Box>
                            <Typography
                                variant="body2"
                                sx={{
                                    color: "rgba(255,255,255,0.6)",
                                    lineHeight: 1.8,
                                    mb: 3,
                                }}
                            >
                                Patient data is sacred. BluAI employs enterprise-grade security
                                with end-to-end encryption, role-based access control, automated
                                audit trails, and compliance with global data protection
                                regulations.
                            </Typography>
                            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                                {securityBadges.map((badge) => (
                                    <Chip
                                        key={badge}
                                        icon={
                                            <SecurityIcon
                                                sx={{
                                                    fontSize: 14,
                                                    color: "rgba(0,229,255,0.8) !important",
                                                }}
                                            />
                                        }
                                        label={badge}
                                        size="small"
                                        sx={{
                                            bgcolor: "rgba(0,188,212,0.1)",
                                            color: COLORS.accentGlow,
                                            fontSize: "0.7rem",
                                            fontWeight: 600,
                                            mb: 1,
                                            border: "1px solid rgba(0,188,212,0.2)",
                                        }}
                                    />
                                ))}
                            </Stack>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* ──────────── FINAL CTA ──────────── */}
            {/* <Box
                sx={{
                    background: COLORS.gradientBlue,
                    py: { xs: 5, md: 6 },
                    textAlign: "center",
                }}
            >
                <Container maxWidth="sm">
                    <Typography
                        variant="h5"
                        sx={{
                            fontWeight: 800,
                            color: COLORS.white,
                            mb: 2,
                            fontSize: { xs: "1.2rem", md: "1.5rem" },
                        }}
                    >
                        Ready To Write Your Hospital&apos;s Next Chapter?
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{
                            color: "rgba(255,255,255,0.75)",
                            mb: 4,
                            lineHeight: 1.7,
                        }}
                    >
                        Join 1000+ hospitals that chose BluAI to transform their operations,
                        delight their patients, and future-proof their practice.
                    </Typography>
                    <Stack
                        direction={{ xs: "column", sm: "row" }}
                        spacing={2}
                        justifyContent="center"
                    >
                        <Button
                            variant="contained"
                            size="large"
                            sx={{
                                bgcolor: COLORS.white,
                                color: COLORS.blue,
                                fontWeight: 700,
                                px: 4,
                                py: 1.5,
                                borderRadius: "50px",
                                textTransform: "none",
                                "&:hover": {
                                    bgcolor: "rgba(255,255,255,0.9)",
                                    transform: "translateY(-1px)",
                                },
                                transition: "all 0.3s ease",
                            }}
                        >
                            Schedule a Demo
                        </Button>
                        <Button
                            variant="outlined"
                            size="large"
                            sx={{
                                borderColor: "rgba(255,255,255,0.4)",
                                color: COLORS.white,
                                fontWeight: 700,
                                px: 4,
                                py: 1.5,
                                borderRadius: "50px",
                                textTransform: "none",
                                "&:hover": {
                                    borderColor: COLORS.white,
                                    bgcolor: "rgba(255,255,255,0.08)",
                                    transform: "translateY(-1px)",
                                },
                                transition: "all 0.3s ease",
                            }}
                        >
                            Contact Sales
                        </Button>
                    </Stack>
                </Container>
            </Box> */}
        </Box>
    );
}

export default OurStoryPage;