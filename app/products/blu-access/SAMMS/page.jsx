"use client";

import React from "react";
import Image from "next/image";

import {
    Box,
    Container,
    Typography,
    Button,
    Card,
    CardContent,
    Stack,
    Chip,
} from "@mui/material";

import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";

import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";

import AnalyticsOutlinedIcon from "@mui/icons-material/AnalyticsOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import EventAvailableOutlinedIcon from "@mui/icons-material/EventAvailableOutlined";
import CloudSyncOutlinedIcon from "@mui/icons-material/CloudSyncOutlined";

const COLORS = {
    primary: "#2F46FF",
    ink: "#0B1C3D",
    muted: "#64748B",
    border: "rgba(226,232,240,1)", // light border like screenshot
};

const howSammsWorks = [
    {
        id: 1,
        icon: <PeopleAltOutlinedIcon />,
        title: "Face Scan at Entry/Exit",
        desc: "Students perform a quick face scan to mark attendance.",
    },
    {
        id: 2,
        icon: <AccessTimeOutlinedIcon />,
        title: "Automatic Logging",
        desc: "The system records precise swipe-in and swipe-out times automatically.",
    },
    {
        id: 3,
        icon: <DashboardCustomizeOutlinedIcon />,
        title: "Admin Dashboard Access",
        desc: "Administrators can view, manage, and export attendance reports instantly.",
    },
    {
        id: 4,
        icon: <SecurityOutlinedIcon />,
        title: "Secure Early Pickup",
        desc: "Only authorized parents can complete pickups after face or ID verification.",
    },
];

const keyHighlights = [
    {
        id: 1,
        icon: <LoginOutlinedIcon />,
        title: "Instant Face Recognition",
        desc: "2–3 second student verification using advanced AI.",
    },
    {
        id: 2,
        icon: <SettingsOutlinedIcon />,
        title: "Customizable Admin Portal",
        desc: "Tailor design, theme, and branding effortlessly.",
    },
    {
        id: 3,
        icon: <EditNoteOutlinedIcon />,
        title: "Smart Attendance Logs",
        desc: "Automatic swipe-in and swipe-out records.",
    },
    {
        id: 4,
        icon: <EditNoteOutlinedIcon />,
        title: "Error-Free Records",
        desc: "Correct or update data instantly via the admin dashboard.",
    },
    {
        id: 5,
        icon: <TimelineOutlinedIcon />,
        title: "Real-Time Monitoring",
        desc: "Admins get live insights into daily attendance patterns.",
    },
    {
        id: 6,
        icon: <CloudOutlinedIcon />,
        title: "Cloud-Based Security",
        desc: "All data is encrypted and securely stored.",
    },
];

const benefits = [
    {
        id: 1,
        title: "Automated Attendance Tracking",
        desc: "reduces manual effort.",
    },
    {
        id: 2,
        title: "Secure & Verified Access",
        desc: "powered by facial recognition.",
    },
    {
        id: 3,
        title: "Time-Saving & Efficient",
        desc: "instant updates and easy reporting.",
    },
    {
        id: 4,
        title: "Customizable Interface",
        desc: "school-branded portal.",
    },
    {
        id: 5,
        title: "Data Accuracy & Transparency",
        desc: "eliminates human error.",
    },
];

const comingSoon = [
    {
        id: 1,
        icon: <AnalyticsOutlinedIcon />,
        title: "Attendance analytics dashboard",
        desc: "with visual reports.",
    },
    {
        id: 2,
        icon: <NotificationsActiveOutlinedIcon />,
        title: "Real-time SMS/email notifications",
        desc: "for parents.",
    },
    {
        id: 3,
        icon: <EventAvailableOutlinedIcon />,
        title: "Integration with school timetables",
        desc: "and exam schedules.",
    },
    {
        id: 4,
        icon: <CloudSyncOutlinedIcon />,
        title: "Cloud synchronization",
        desc: "for multi-campus schools.",
    },
];

function LightCard({ children, sx }) {
    return (
        <Card
            elevation={0}
            sx={{
                borderRadius: 2,
                border: `1px solid ${COLORS.border}`,
                backgroundColor: "#fff",
                boxShadow: "0 8px 24px rgba(15,23,42,0.08)",
                ...sx,
            }}
        >
            {children}
        </Card>
    );
}

export default function SAMMSPage() {
    return (
        <Box sx={{ width: "100%", bgcolor: "#fff" }}>
            {/* ================= HERO (SAME AS SCREENSHOT) ================= */}
            <Box
                sx={{
                    position: "relative",
                    width: "100%",
                    minHeight: { xs: 520, md: 720 },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                }}
            >
                {/* Background Image */}
                <Image
                    src="/samms/hero-bg.jpg"
                    alt="SAMMS Hero Background"
                    fill
                    priority
                    sizes="100vw"
                    style={{ objectFit: "cover" }}
                />

                {/* Dark overlay */}
                <Box
                    sx={{
                        position: "absolute",
                        inset: 0,
                        bgcolor: "rgba(0,0,0,0.55)",
                    }}
                />

                {/* Hero Content */}
                <Container
                    maxWidth="lg"
                    sx={{
                        position: "relative",
                        zIndex: 2,
                        textAlign: "center",
                        pt: { xs: 0, md: 9 },
                    }}
                >
                    <Typography
                        sx={{
                            fontWeight: 800,
                            color: "#fff",
                            fontSize: { xs: "1.6rem", sm: "2.2rem", md: "3.6rem" },
                            lineHeight: 1.25,
                        }}
                    >
                        Student Attendance
                        <br />
                        Management & Monitoring
                        <br />
                        System (SAMMS)
                    </Typography>

                    <Typography
                        sx={{
                            mt: 1.2,
                            color: "rgba(255,255,255,0.85)",
                            fontSize: { xs: "0.95rem", md: "1.6rem" },
                        }}
                    >
                        Smart, Secure, and Seamless Attendance Automation for Modern Schools
                    </Typography>

                    {/* Button placement like screenshot (left-ish) */}

                </Container>

                {/* Bottom White Space for overlap cards */}
                <Box
                    sx={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        height: 90,
                        bgcolor: "#fff",
                    }}
                />
            </Box>

            {/* ================= OVERLAP CARDS (4 cards row) ================= */}
            <Container maxWidth="lg" sx={{ mt: { xs: -6, md: -7 }, position: "relative", zIndex: 5 }}>

                <Box>
                    <Typography
                        sx={{
                            marginBottom : 3,
                            textAlign: "center",
                            fontWeight: 800,
                            fontSize: { xs: 22, md: 26 },
                            color: COLORS.primary,
                        }}
                    >
                        How SAMMS Works
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        gap: 2,
                        flexWrap: "wrap",
                        justifyContent: "center",
                    }}
                >
                    {howSammsWorks.map((item) => (
                        <LightCard
                            key={item.id}
                            sx={{
                                width: { xs: "100%", sm: "48%", md: "23%" },
                                minHeight: 120,
                            }}
                        >
                            <CardContent sx={{ p: 2.5, textAlign: "center" }}>
                                <Box
                                    sx={{
                                        width: 44,
                                        height: 44,
                                        borderRadius: 999,
                                        bgcolor: "rgba(47,70,255,0.10)",
                                        color: COLORS.primary,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        mx: "auto",
                                        mb: 1.5,
                                        "& svg": { fontSize: 24 },
                                    }}
                                >
                                    {item.icon}
                                </Box>

                                <Typography sx={{ fontWeight: 700, fontSize: 13.5, color: COLORS.ink }}>
                                    {item.title}
                                </Typography>

                                <Typography sx={{ mt: 0.7, color: COLORS.muted, fontSize: 12.5, lineHeight: 1.6 }}>
                                    {item.desc}
                                </Typography>
                            </CardContent>
                        </LightCard>
                    ))}
                </Box>
            </Container>

            {/* ================= GET STARTED STRIP (same style) ================= */}
            <Box sx={{ mt: 4, bgcolor: "#EEF2F7", py: 2.2 }}>
                <Container maxWidth="lg">
                    <Box
                        sx={{
                            display: "flex",
                            gap: 2,
                            flexDirection: { xs: "column", md: "row" },
                            alignItems: { xs: "flex-start", md: "center" },
                            justifyContent: "space-between",
                        }}
                    >
                        <Box>
                            <Typography sx={{ fontWeight: 800, color: COLORS.ink, fontSize: 15 }}>
                                Get Started Today
                            </Typography>
                            <Typography sx={{ mt: 0.4, color: COLORS.muted, fontSize: 13.2, lineHeight: 1.6 }}>
                                Transform your institution with SAMMS – the smart attendance system that saves time,
                                enhances security, and simplifies administration. Book a Demo | Request a Quote | Talk
                                to Our Experts
                            </Typography>
                        </Box>

                        <Button
                            variant="contained"
                            sx={{
                                textTransform: "none",
                                fontWeight: 700,
                                borderRadius: 999,
                                px: 3,
                                bgcolor: COLORS.primary,
                                "&:hover": { bgcolor: "#2338FF" },
                            }}
                        >
                            Register
                        </Button>
                    </Box>
                </Container>
            </Box>

            {/* ================= ABOUT SECTION ================= */}
            <Box sx={{ py: { xs: 6, md: 9 } }}>
                <Container maxWidth="lg">
                    <Box
                        sx={{
                            display: "flex",
                            gap: { xs: 4, md: 5 },
                            flexDirection: { xs: "column", md: "row" },
                            alignItems: "center",
                        }}
                    >
                        {/* Left */}
                        <Box sx={{ flex: 1 }}>
                            <Typography sx={{ fontWeight: 800, color: COLORS.primary, fontSize: 20 }}>
                                Revolutionize Attendance with AI-
                                <br />
                                Powered Automation
                            </Typography>

                            <Typography sx={{ mt: 1.6, color: COLORS.muted, fontSize: 13.5, lineHeight: 1.85 }}>
                                SAMMS (Student Attendance Management & Monitoring System) brings the power of facial
                                recognition and smart administration to educational institutions — making attendance
                                faster, safer, and fully automated. With SAMMS, schools can track attendance in real
                                time, manage early pickups securely, and empower administrators with data-driven
                                insights — all in one integrated platform.
                            </Typography>

                            <Button
                                variant="contained"
                                sx={{
                                    mt: 2.4,
                                    textTransform: "none",
                                    fontWeight: 700,
                                    borderRadius: 999,
                                    px: 3,
                                    bgcolor: COLORS.primary,
                                    "&:hover": { bgcolor: "#2338FF" },
                                }}
                            >
                                Learn More About Us →
                            </Button>
                        </Box>

                        {/* Right Image */}
                        <Box sx={{ flex: 1, width: "100%" }}>
                            <Box
                                sx={{
                                    position: "relative",
                                    width: "100%",
                                    height: { xs: 220, sm: 280, md: 300 },
                                    borderRadius: 3,
                                    overflow: "hidden",
                                    boxShadow: "0 12px 30px rgba(15,23,42,0.12)",
                                }}
                            >
                                <Image
                                    src="/samms/campus1.webp"
                                    alt="SAMMS Campus"
                                    fill
                                    sizes="(max-width: 900px) 100vw, 520px"
                                    style={{ objectFit: "cover" }}
                                />
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>

            {/* ================= KEY HIGHLIGHTS (same layout) ================= */}
            <Box sx={{ py: { xs: 6, md: 9 }, bgcolor: "#fff" }}>
                <Container maxWidth="lg">
                    <Typography
                        sx={{
                            textAlign: "center",
                            fontWeight: 800,
                            fontSize: { xs: 22, md: 26 },
                            color: COLORS.primary,
                        }}
                    >
                        Key Highlights
                    </Typography>

                    <Typography
                        sx={{
                            textAlign: "center",
                            mt: 1,
                            color: COLORS.muted,
                            fontSize: 13.5,
                        }}
                    >
                        Discover the innovative features that make attendance tracking smarter and safer.
                    </Typography>

                    {/* 2-column list like screenshot */}
                    <Box
                        sx={{
                            mt: 4,
                            display: "flex",
                            flexDirection: { xs: "column", md: "row" },
                            gap: 3,
                            justifyContent: "center",
                        }}
                    >
                        {/* Left Column */}
                        <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 2 }}>
                            {keyHighlights.slice(0, 3).map((x) => (
                                <LightCard key={x.id} sx={{ p: 0 }}>
                                    <CardContent sx={{ display: "flex", gap: 1.5, alignItems: "flex-start" }}>
                                        <Box
                                            sx={{
                                                width: 44,
                                                height: 44,
                                                borderRadius: 2,
                                                bgcolor: "rgba(47,70,255,0.10)",
                                                color: COLORS.primary,
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                "& svg": { fontSize: 24 },
                                                flexShrink: 0,
                                            }}
                                        >
                                            {x.icon}
                                        </Box>

                                        <Box>
                                            <Typography sx={{ fontWeight: 800, color: COLORS.ink, fontSize: 14 }}>
                                                {x.title}
                                            </Typography>
                                            <Typography sx={{ mt: 0.4, color: COLORS.muted, fontSize: 13, lineHeight: 1.6 }}>
                                                {x.desc}
                                            </Typography>
                                        </Box>
                                    </CardContent>
                                </LightCard>
                            ))}
                        </Box>

                        {/* Right Column */}
                        <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 2 }}>
                            {keyHighlights.slice(3, 6).map((x) => (
                                <LightCard key={x.id} sx={{ p: 0 }}>
                                    <CardContent sx={{ display: "flex", gap: 1.5, alignItems: "flex-start" }}>
                                        <Box
                                            sx={{
                                                width: 44,
                                                height: 44,
                                                borderRadius: 2,
                                                bgcolor: "rgba(47,70,255,0.10)",
                                                color: COLORS.primary,
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                "& svg": { fontSize: 24 },
                                                flexShrink: 0,
                                            }}
                                        >
                                            {x.icon}
                                        </Box>

                                        <Box>
                                            <Typography sx={{ fontWeight: 800, color: COLORS.ink, fontSize: 14 }}>
                                                {x.title}
                                            </Typography>
                                            <Typography sx={{ mt: 0.4, color: COLORS.muted, fontSize: 13, lineHeight: 1.6 }}>
                                                {x.desc}
                                            </Typography>
                                        </Box>
                                    </CardContent>
                                </LightCard>
                            ))}
                        </Box>
                    </Box>
                </Container>
            </Box>

            {/* ================= Students Life + Benefits ================= */}
            <Box sx={{ py: { xs: 7, md: 10 }, bgcolor: "#fff" }}>
                <Container maxWidth="lg">
                    <Typography
                        sx={{
                            textAlign: "center",
                            fontWeight: 800,
                            fontSize: { xs: 22, md: 26 },
                            color: COLORS.primary,
                        }}
                    >
                        Students Life
                    </Typography>

                    <Typography sx={{ textAlign: "center", mt: 1, color: COLORS.muted, fontSize: 13.5 }}>
                        Empowering schools with smarter tools to simplify student life and management.
                    </Typography>

                    <Box
                        sx={{
                            mt: 6,
                            display: "flex",
                            gap: 4,
                            flexDirection: { xs: "column", md: "row" },
                            alignItems: "flex-start",
                        }}
                    >
                        {/* Left */}
                        <Box sx={{ flex: 1 }}>
                            <Typography
                                sx={{
                                    fontWeight: 700,
                                    fontSize: 12,
                                    color: COLORS.primary,
                                    textTransform: "uppercase",
                                }}
                            >
                                Student Life
                            </Typography>

                            <Typography sx={{ mt: 1, fontWeight: 300, fontSize: { xs: 28, md: 34 }, color: COLORS.primary }}>
                                Powerful Admin Portal
                            </Typography>

                            <Typography sx={{ mt: 2, color: COLORS.muted, fontSize: 13.5, lineHeight: 1.9 }}>
                                SAMMS comes with a comprehensive admin dashboard designed for simplicity and
                                control. It includes sidebar navigation (Home, Students, Early Pickup, Manual
                                Attendance, Settings), student registration with live photo capture, OTP-based contact
                                verification, manual attendance management, and full branding customization with logo
                                and color themes.
                            </Typography>
                        </Box>

                        {/* Right */}
                        <Box sx={{ flex: 1 }}>
                            <Typography sx={{ fontWeight: 800, color: COLORS.primary, fontSize: 18 }}>
                                Benefits
                            </Typography>

                            <Box sx={{ mt: 2, display: "flex", flexDirection: "column", gap: 1.4 }}>
                                {benefits.map((b) => (
                                    <Box key={b.id} sx={{ display: "flex", gap: 1 }}>
                                        <Box
                                            sx={{
                                                mt: "6px",
                                                width: 8,
                                                height: 8,
                                                borderRadius: 999,
                                                bgcolor: COLORS.primary,
                                                flexShrink: 0,
                                            }}
                                        />
                                        <Typography sx={{ color: COLORS.ink, fontWeight: 700, fontSize: 13.5 }}>
                                            {b.title}{" "}
                                            <Box component="span" sx={{ fontWeight: 400, color: COLORS.muted }}>
                                                — {b.desc}
                                            </Box>
                                        </Typography>
                                    </Box>
                                ))}
                            </Box>

                            {/* Small images row */}
                            <Box
                                sx={{
                                    mt: 3,
                                    display: "flex",
                                    gap: 2,
                                    flexWrap: "wrap",
                                }}
                            >
                                {["/samms/student1.webp", "/samms/student2.webp"].map((img, i) => (
                                    <Box
                                        key={i}
                                        sx={{
                                            position: "relative",
                                            width: { xs: "100%", sm: "48%" },
                                            height: 120,
                                            borderRadius: 2,
                                            overflow: "hidden",
                                            border: `1px solid ${COLORS.border}`,
                                        }}
                                    >
                                        <Image
                                            src={img}
                                            alt={`benefit-${i}`}
                                            fill
                                            sizes="(max-width: 600px) 100vw, 280px"
                                            style={{ objectFit: "cover" }}
                                        />
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>

            {/* ================= Coming Soon ================= */}
            <Box sx={{ py: { xs: 7, md: 10 }, bgcolor: "#fff" }}>
                <Container maxWidth="lg">
                    <Typography
                        sx={{
                            textAlign: "center",
                            fontWeight: 800,
                            fontSize: { xs: 22, md: 26 },
                            color: COLORS.primary,
                        }}
                    >
                        Future-Ready Features (Coming Soon)
                    </Typography>

                    <Typography sx={{ textAlign: "center", mt: 1, color: COLORS.muted, fontSize: 13.5 }}>
                        Experience the next generation of smart, automated features designed to enhance efficiency and security.
                    </Typography>

                    <Box
                        sx={{
                            mt: 5,
                            display: "flex",
                            gap: 2.2,
                            flexWrap: "wrap",
                            justifyContent: "center",
                        }}
                    >
                        {comingSoon.map((x) => (
                            <LightCard
                                key={x.id}
                                sx={{
                                    width: { xs: "100%", sm: "48%", md: "23%" },
                                    textAlign: "center",
                                    p: 0,
                                }}
                            >
                                <CardContent sx={{ p: 3 }}>
                                    <Box
                                        sx={{
                                            width: 54,
                                            height: 54,
                                            borderRadius: 2,
                                            bgcolor: "rgba(47,70,255,0.10)",
                                            color: COLORS.primary,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            mx: "auto",
                                            mb: 1.5,
                                            "& svg": { fontSize: 26 },
                                        }}
                                    >
                                        {x.icon}
                                    </Box>

                                    <Typography sx={{ fontWeight: 800, color: COLORS.ink, fontSize: 13.5 }}>
                                        {x.title}
                                    </Typography>

                                    <Typography sx={{ mt: 0.6, color: COLORS.muted, fontSize: 12.6, lineHeight: 1.6 }}>
                                        {x.desc}
                                    </Typography>
                                </CardContent>
                            </LightCard>
                        ))}
                    </Box>
                </Container>
            </Box>
        </Box>
    );
}
