

"use client";

import {
    Box,
    Container,
    Paper,
    Stack,
    Typography,
    Divider,
    Chip,
    Button,
} from "@mui/material";
import Image from "next/image";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PsychologyIcon from "@mui/icons-material/Psychology";
import InsightsIcon from "@mui/icons-material/Insights";
import SecurityIcon from "@mui/icons-material/Security";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import VerifiedIcon from "@mui/icons-material/Verified";
import LockIcon from "@mui/icons-material/Lock";

/* =========================================================
   FEATURE CARD
========================================================= */
const FeatureCard = ({ icon, title, subtitle, accent = "#2563eb" }) => (
    <Paper
        elevation={0}
        sx={{
            flex: 1,
            minWidth: 0,
            borderRadius: 4,
            border: "1px solid rgba(15,23,42,0.08)",
            background: "linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)",
            p: { xs: 2.5, md: 3 },
            transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
            position: "relative",
            overflow: "hidden",
            "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: 3,
                background: `linear-gradient(90deg, ${accent} 0%, transparent 100%)`,
                opacity: 0.8,
            },
            "&:hover": {
                transform: "translateY(-6px)",
                boxShadow: `0 30px 70px -25px ${accent}55`,
                borderColor: `${accent}44`,
            },
        }}
    >
        <Box
            sx={{
                width: 52,
                height: 52,
                borderRadius: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: `linear-gradient(135deg, ${accent} 0%, ${accent}cc 100%)`,
                color: "#fff",
                mb: 2,
                boxShadow: `0 10px 25px -10px ${accent}88`,
            }}
        >
            {icon}
        </Box>

        <Typography
            sx={{
                fontWeight: 900,
                fontSize: { xs: "1rem", md: "1.08rem" },
                color: "#0f172a",
                mb: 0.7,
                lineHeight: 1.3,
            }}
        >
            {title}
        </Typography>

        <Typography
            sx={{
                fontSize: { xs: "0.88rem", md: "0.92rem" },
                color: "rgba(15,23,42,0.65)",
                lineHeight: 1.6,
            }}
        >
            {subtitle}
        </Typography>
    </Paper>
);

/* =========================================================
   MAIN PAGE
========================================================= */
export default function MentalHealthModulePage() {
    return (
        <Box sx={{ minHeight: "100vh", bgcolor: "#ffffff" }}>
            {/* ================= HERO (split: text left, image right) ================= */}
            <Box
                sx={{
                    position: "relative",
                    pt: { xs: 7, md: 11 },
                    pb: { xs: 8, md: 12 },
                    overflow: "hidden",
                    background:
                        "radial-gradient(1200px 500px at 20% 0%, rgba(37,99,235,0.12), transparent 60%), linear-gradient(180deg, #ffffff 0%, #f8fbff 100%)",
                    borderBottom: "1px solid rgba(15,23,42,0.06)",
                }}
            >
                {/* Ambient blobs */}
                <Box
                    sx={{
                        position: "absolute",
                        top: "-15%",
                        left: "-10%",
                        width: 480,
                        height: 480,
                        borderRadius: "50%",
                        background:
                            "radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 65%)",
                        pointerEvents: "none",
                    }}
                />
                <Box
                    sx={{
                        position: "absolute",
                        bottom: "-25%",
                        right: "-10%",
                        width: 560,
                        height: 560,
                        borderRadius: "50%",
                        background:
                            "radial-gradient(circle, rgba(0,163,255,0.10) 0%, transparent 65%)",
                        pointerEvents: "none",
                    }}
                />

                <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: { xs: "1fr", md: "1.05fr 1fr" },
                            alignItems: "center",
                            gap: { xs: 6, md: 8 },
                        }}
                    >
                        {/* ─── LEFT: Text ─── */}
                        <Box sx={{ minWidth: 0 }}>
                            {/* Pill */}
                            <Box
                                sx={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: 1,
                                    px: 2,
                                    py: 0.8,
                                    borderRadius: 999,
                                    bgcolor: "rgba(37,99,235,0.08)",
                                    border: "1px solid rgba(37,99,235,0.18)",
                                    mb: 2.5,
                                }}
                            >
                                <AutoAwesomeIcon sx={{ fontSize: 14, color: "#2563eb" }} />
                                <Typography
                                    sx={{
                                        fontSize: 11,
                                        fontWeight: 800,
                                        letterSpacing: "0.12em",
                                        color: "#2563eb",
                                        textTransform: "uppercase",
                                    }}
                                >
                                    BluHealth™ Mental Health
                                </Typography>
                            </Box>

                            {/* Headline */}
                            <Typography
                                sx={{
                                    fontWeight: 900,
                                    letterSpacing: "-0.02em",
                                    color: "#0f172a",
                                    fontSize: { xs: "2rem", sm: "2.3rem", md: "3.2rem" },
                                    lineHeight: 1.1,
                                }}
                            >
                                AI-Powered Mental Health{" "}
                                <Box
                                    component="span"
                                    sx={{
                                        background:
                                            "#1B4DFF",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                    }}
                                >
                                    Assessments.
                                </Box>
                                <br />
                                Real-Time Clinical Intelligence.
                            </Typography>

                            {/* Subtext */}
                            <Typography
                                sx={{
                                    mt: 3,
                                    maxWidth: 560,
                                    color: "rgba(15,23,42,0.65)",
                                    fontSize: { xs: "1rem", md: "1.08rem" },
                                    lineHeight: 1.75,
                                }}
                            >
                                Explainable AI at the point of care — validating screening
                                tools, supporting clinician judgment, and turning mental health
                                data into actionable insight.
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

                            {/* CTAs */}
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

                        {/* ─── RIGHT: Image ─── */}
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: { xs: "center", md: "flex-end" },
                                alignItems: "center",
                                width: "100%",
                                minWidth: 0,
                            }}
                        >
                            <Box
                                sx={{
                                    position: "relative",
                                    width: "100%",
                                    maxWidth: { xs: 380, sm: 500, md: 560, lg: 620 },
                                    aspectRatio: { xs: "4 / 3", sm: "16 / 11", md: "16 / 11" },
                                    mx: "auto",
                                }}
                            >
                                {/* Soft glow behind image */}
                                <Box
                                    sx={{
                                        position: "absolute",
                                        inset: -30,
                                        borderRadius: "50%",
                                        background:
                                            "radial-gradient(circle at 50% 50%, rgba(37,99,235,0.20) 0%, transparent 65%)",
                                        filter: "blur(30px)",
                                        zIndex: 0,
                                    }}
                                />

                                {/* Gradient frame */}
                                <Box
                                    sx={{
                                        position: "absolute",
                                        inset: 0,
                                        borderRadius: { xs: 3, sm: 4, md: 5 },
                                        p: "1.5px",

                                        zIndex: 1,
                                    }}
                                >
                                    <Box
                                        sx={{
                                            position: "relative",
                                            width: "100%",
                                            height: "100%",
                                            borderRadius: "calc(20px - 1.5px)",
                                            overflow: "hidden",

                                        }}
                                    >
                                        <Image
                                            src="/hero-popup/blumental.png"
                                            alt="BluHealth Mental Health Module"
                                            fill
                                            sizes="(max-width: 600px) 90vw, (max-width: 900px) 500px, (max-width: 1200px) 560px, 620px"
                                            style={{
                                                objectFit: "cover",
                                                objectPosition: "center",
                                            }}
                                            priority
                                        />
                                    </Box>
                                </Box>

                                {/* Floating stat card — top left */}
                                <Paper
                                    elevation={0}
                                    sx={{
                                        position: "absolute",
                                        top: { xs: 14, md: 20 },
                                        left: { xs: -8, md: -20 },
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 1.5,
                                        px: 2,
                                        py: 1.4,
                                        borderRadius: 3,
                                        bgcolor: "rgba(255,255,255,0.96)",
                                        backdropFilter: "blur(8px)",
                                        border: "1px solid rgba(27,77,255,0.12)",
                                        boxShadow: "0 20px 45px -20px rgba(27,77,255,0.5)",
                                        zIndex: 2,
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: 34,
                                            height: 34,
                                            borderRadius: "10px",
                                            background:
                                                "linear-gradient(135deg, #1B4DFF 0%, #00A3FF 100%)",
                                            color: "#fff",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <PsychologyIcon fontSize="small" />
                                    </Box>
                                    <Box>
                                        <Typography
                                            sx={{
                                                fontSize: 10,
                                                fontWeight: 800,
                                                color: "#94A3B8",
                                                letterSpacing: "0.1em",
                                            }}
                                        >
                                            AI-ASSISTED
                                        </Typography>
                                        <Typography
                                            sx={{ fontSize: 13, fontWeight: 900, color: "#0f172a" }}
                                        >
                                            Real-Time Scoring
                                        </Typography>
                                    </Box>
                                </Paper>

                                {/* Floating stat card — bottom right */}
                                <Paper
                                    elevation={0}
                                    sx={{
                                        position: "absolute",
                                        bottom: { xs: 14, md: 24 },
                                        right: { xs: -8, md: -20 },
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 1.5,
                                        px: 2,
                                        py: 1.4,
                                        borderRadius: 3,
                                        background:
                                            "linear-gradient(135deg, #0B1C3D 0%, #1B4DFF 100%)",
                                        color: "#fff",
                                        boxShadow: "0 20px 45px -20px rgba(11,28,61,0.7)",
                                        zIndex: 2,
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: 34,
                                            height: 34,
                                            borderRadius: "10px",
                                            bgcolor: "rgba(255,255,255,0.15)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <VerifiedIcon fontSize="small" />
                                    </Box>
                                    <Box>
                                        <Typography
                                            sx={{
                                                fontSize: 10,
                                                fontWeight: 800,
                                                color: "rgba(255,255,255,0.65)",
                                                letterSpacing: "0.1em",
                                            }}
                                        >
                                            EXPLAINABLE
                                        </Typography>
                                        <Typography
                                            sx={{ fontSize: 13, fontWeight: 900, color: "#fff" }}
                                        >
                                            Clinician-Led AI
                                        </Typography>
                                    </Box>
                                </Paper>
                            </Box>
                        </Box>
                    </Box>


                </Container>
            </Box>
            <Box sx={{ py: { xs: 6, md: 5 } }}>
                <Container maxWidth="xl">


                    {/* Feature cards below hero */}
                    <Box sx={{ width: "100%", mt: { xs: 6, md: 8 } }}>
                        <Stack
                            direction={{ xs: "column", md: "row" }}
                            spacing={2.5}
                            sx={{ width: "100%" }}
                        >
                            <FeatureCard
                                icon={<PsychologyIcon />}
                                title="AI-Assisted Assessment"
                                subtitle="Real-time analysis of validated screening tools with clinician-friendly scoring."
                                accent="#1B4DFF"
                            />
                            <FeatureCard
                                icon={<InsightsIcon />}
                                title="Explainable Clinical Insights"
                                subtitle="Transparent interpretation that supports — not replaces — clinical judgment."
                                accent="#7C3AED"
                            />
                            <FeatureCard
                                icon={<SecurityIcon />}
                                title="Secure & HIPAA-Aligned"
                                subtitle="Privacy-by-design workflows and audit-ready data handling for enterprise use."
                                accent="#0EA5A4"
                            />
                        </Stack>
                    </Box>
                </Container>
            </Box>

            {/* ================= TAGLINE PILLS ================= */}
            <Box sx={{ py: { xs: 6, md: 5 } }}>
                <Container maxWidth="xl">


                    <Stack
                        direction="row"
                        sx={{
                            justifyContent: "center",
                            flexWrap: "wrap",
                            gap: { xs: 1.5, sm: 2 },
                            px: { xs: 1, sm: 0 },
                        }}
                    >
                        {[
                            "AI-Powered Mental Health Intelligence. Clinician-Led Care.",
                            "Real-Time Assessments. Smarter Clinical Decisions.",
                            "Where Clinical Expertise Meets Explainable AI.",
                            "Turning Mental Health Data into Actionable Insight.",
                        ].map((t, i) => {
                            const accents = ["#1B4DFF", "#7C3AED", "#0EA5A4", "#F59E0B"];
                            const a = accents[i % accents.length];
                            return (
                                <Paper
                                    key={t}
                                    elevation={0}
                                    sx={{
                                        px: { xs: 2, sm: 2.4 },
                                        py: { xs: 1, sm: 1.1 },
                                        borderRadius: 999,
                                        border: `1px solid ${a}33`,
                                        bgcolor: `${a}0A`,
                                        transition: "all 0.25s ease",
                                        "&:hover": {
                                            transform: "translateY(-3px)",
                                            boxShadow: `0 20px 45px -20px ${a}55`,
                                            borderColor: `${a}55`,
                                        },
                                        width: { xs: "100%", sm: "auto" },
                                        maxWidth: { xs: 520, md: "unset" },
                                        display: "flex",
                                        justifyContent: "center",
                                    }}
                                >
                                    <Stack direction="row" alignItems="center" spacing={1}>
                                        <Box
                                            sx={{
                                                width: 6,
                                                height: 6,
                                                borderRadius: "50%",
                                                bgcolor: a,
                                            }}
                                        />
                                        <Typography
                                            sx={{
                                                fontWeight: 700,
                                                color: "#0f172a",
                                                fontSize: { xs: "0.85rem", sm: "0.9rem" },
                                                textAlign: "center",
                                                lineHeight: 1.4,
                                            }}
                                        >
                                            {t}
                                        </Typography>
                                    </Stack>
                                </Paper>
                            );
                        })}
                    </Stack>
                </Container>
            </Box>

            {/* ================= TWO CARDS ================= */}
            <Box sx={{ pb: { xs: 6, md: 9 } }}>
                <Container maxWidth="xl">
                    <Stack
                        direction={{ xs: "column", md: "row" }}
                        spacing={3}
                        alignItems="stretch"
                    >
                        {/* LEFT — Insights */}
                        <Box sx={{ flex: 1, display: "flex" }}>
                            <Paper
                                elevation={0}
                                sx={{
                                    width: "100%",
                                    p: { xs: 2.8, md: 3.5 },
                                    borderRadius: 4,
                                    border: "1px solid rgba(15,23,42,0.08)",
                                    bgcolor: "#fff",
                                    boxShadow: "0 18px 60px rgba(15,23,42,0.06)",
                                    display: "flex",
                                    flexDirection: "column",
                                    transition: "all 0.3s ease",
                                    "&:hover": {
                                        transform: "translateY(-4px)",
                                        boxShadow: "0 30px 80px -30px rgba(27,77,255,0.4)",
                                        borderColor: "rgba(27,77,255,0.25)",
                                    },
                                }}
                            >
                                <Stack spacing={2} sx={{ flex: 1 }}>
                                    <Stack direction="row" alignItems="center" spacing={1.5}>
                                        <Box
                                            sx={{
                                                width: 40,
                                                height: 40,
                                                borderRadius: "12px",
                                                background:
                                                    "linear-gradient(135deg, #1B4DFF 0%, #00A3FF 100%)",
                                                color: "#fff",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                        >
                                            <InsightsIcon fontSize="small" />
                                        </Box>
                                        <Typography
                                            sx={{
                                                fontWeight: 900,
                                                color: "#0f172a",
                                                fontSize: { xs: "1.05rem", md: "1.18rem" },
                                                lineHeight: 1.25,
                                                letterSpacing: "-0.02em",
                                            }}
                                        >
                                            Assessment Results & Clinical Insights
                                        </Typography>
                                    </Stack>

                                    <Typography
                                        sx={{
                                            color: "rgba(15,23,42,0.68)",
                                            fontSize: { xs: "0.92rem", md: "0.96rem" },
                                            lineHeight: 1.7,
                                        }}
                                    >
                                        AI-enhanced interpretation of assessment results, presented
                                        with clear scoring, severity indicators, and recommended
                                        clinical considerations.
                                    </Typography>

                                    <Divider sx={{ borderColor: "rgba(15,23,42,0.08)" }} />

                                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                                        {[
                                            "Structured insights to guide counseling conversations",
                                            "Supports longitudinal tracking and outcome monitoring",
                                            "Optimized for clinical documentation and care planning",
                                        ].map((label) => (
                                            <Chip
                                                key={label}
                                                label={label}
                                                sx={{
                                                    height: 32,
                                                    fontWeight: 700,
                                                    borderRadius: 999,
                                                    bgcolor: "rgba(37,99,235,0.08)",
                                                    color: "#1d4ed8",
                                                    border: "1px solid rgba(37,99,235,0.18)",
                                                    "& .MuiChip-label": {
                                                        px: 1.2,
                                                        fontSize: "0.82rem",
                                                    },
                                                }}
                                            />
                                        ))}
                                    </Box>

                                    <Divider sx={{ borderColor: "rgba(15,23,42,0.08)" }} />

                                    <Stack direction="row" alignItems="flex-start" spacing={1.2}>
                                        <VerifiedIcon
                                            sx={{ fontSize: 18, color: "#1B4DFF", mt: "3px" }}
                                        />
                                        <Typography
                                            sx={{
                                                color: "rgba(15,23,42,0.62)",
                                                fontSize: { xs: "0.9rem", md: "0.93rem" },
                                                lineHeight: 1.75,
                                            }}
                                        >
                                            AI insights are explainable and designed to assist
                                            clinical interpretation — final decisions remain with the
                                            clinician.
                                        </Typography>
                                    </Stack>
                                </Stack>
                            </Paper>
                        </Box>

                        {/* RIGHT — Disclaimer */}
                        <Box sx={{ flex: 1, display: "flex" }}>
                            <Paper
                                elevation={0}
                                sx={{
                                    width: "100%",
                                    p: { xs: 2.8, md: 3.5 },
                                    borderRadius: 4,
                                    border: "1px solid rgba(15,23,42,0.08)",
                                    background:
                                        "linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 70%)",
                                    boxShadow: "0 18px 60px rgba(15,23,42,0.06)",
                                    display: "flex",
                                    flexDirection: "column",
                                    transition: "all 0.3s ease",
                                    "&:hover": {
                                        transform: "translateY(-4px)",
                                        boxShadow: "0 30px 80px -30px rgba(124,58,237,0.4)",
                                        borderColor: "rgba(124,58,237,0.25)",
                                    },
                                }}
                            >
                                <Stack spacing={2} sx={{ flex: 1 }}>
                                    <Stack direction="row" alignItems="center" spacing={1.5}>
                                        <Box
                                            sx={{
                                                width: 40,
                                                height: 40,
                                                borderRadius: "12px",
                                                background:
                                                    "linear-gradient(135deg, #7C3AED 0%, #A78BFA 100%)",
                                                color: "#fff",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                        >
                                            <LockIcon fontSize="small" />
                                        </Box>
                                        <Typography
                                            sx={{
                                                fontWeight: 900,
                                                color: "#0f172a",
                                                fontSize: { xs: "1.05rem", md: "1.18rem" },
                                                lineHeight: 1.25,
                                                letterSpacing: "-0.02em",
                                            }}
                                        >
                                            Regulatory & Clinical Use Disclaimer
                                        </Typography>
                                    </Stack>

                                    <Divider sx={{ borderColor: "rgba(15,23,42,0.08)" }} />

                                    <Typography
                                        sx={{
                                            color: "rgba(15,23,42,0.68)",
                                            fontSize: { xs: "0.92rem", md: "0.96rem" },
                                            lineHeight: 1.85,
                                        }}
                                    >
                                        BluHealth's Mental Health module is a clinical
                                        decision-support tool designed to assist qualified
                                        healthcare professionals. It does not independently
                                        diagnose, treat, or replace clinical judgment. All
                                        assessments and AI-generated insights are intended to
                                        support — not substitute — professional evaluation and care
                                        decisions.
                                        <br />
                                        <br />
                                        The platform is designed in alignment with HIPAA security
                                        and privacy principles and follows FDA guidance for
                                        Clinical Decision Support (CDS) software. Final diagnosis
                                        and treatment decisions remain solely with the licensed
                                        clinician.
                                    </Typography>
                                </Stack>
                            </Paper>
                        </Box>
                    </Stack>
                </Container>
            </Box>

            {/* ================= ABOUT ================= */}
            <Box
                sx={{
                    py: { xs: 8, md: 11 },
                    background:
                        "linear-gradient(180deg, #FFFFFF 0%, #F7FAFF 50%, #FFFFFF 100%)",
                    borderTop: "1px solid rgba(15,23,42,0.06)",
                }}
            >
                <Container id="read-more-section" maxWidth="xl">
                    <Stack
                        spacing={1.5}
                        sx={{ textAlign: "center", mb: { xs: 5, md: 7 } }}
                    >
                        <Box
                            sx={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: 1,
                                px: 2,
                                py: 0.7,
                                borderRadius: 999,
                                bgcolor: "rgba(37,99,235,0.08)",
                                border: "1px solid rgba(37,99,235,0.15)",
                                alignSelf: "center",
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: 11,
                                    fontWeight: 800,
                                    letterSpacing: "0.12em",
                                    color: "#2563eb",
                                    textTransform: "uppercase",
                                }}
                            >
                                About
                            </Typography>
                        </Box>

                        <Typography
                            sx={{
                                fontWeight: 900,
                                color: "#0f172a",
                                fontSize: { xs: "1.6rem", md: "2.2rem" },
                                letterSpacing: "-0.02em",
                                lineHeight: 1.15,
                            }}
                        >
                            About the Mental Health Module
                        </Typography>

                        <Typography
                            sx={{
                                color: "rgba(15,23,42,0.55)",
                                fontSize: { xs: "0.92rem", md: "1rem" },
                                maxWidth: 620,
                                mx: "auto",
                            }}
                        >
                            Standardized, compliant, AI-driven intelligence — delivered at
                            the point of care
                        </Typography>
                    </Stack>

                    <Stack
                        direction={{ xs: "column", md: "row" }}
                        spacing={{ xs: 4, md: 5 }}
                        alignItems="flex-start"
                    >
                        {/* LEFT COLUMN */}
                        <Box sx={{ flex: 1, minWidth: 0 }}>
                            <Stack direction="row" alignItems="center" spacing={1.5} mb={1.8}>
                                <Box
                                    sx={{
                                        width: 4,
                                        height: 28,
                                        borderRadius: 1,
                                        background:
                                            "linear-gradient(180deg, #1B4DFF 0%, #00A3FF 100%)",
                                    }}
                                />
                                <Typography
                                    sx={{
                                        fontWeight: 900,
                                        color: "#0f172a",
                                        fontSize: { xs: "1.1rem", md: "1.25rem" },
                                        lineHeight: 1.3,
                                    }}
                                >
                                    AI-Powered Mental Health Assessments. Real-Time Clinical
                                    Intelligence.
                                </Typography>
                            </Stack>

                            <Typography
                                sx={{
                                    color: "rgba(15,23,42,0.7)",
                                    fontSize: { xs: "0.94rem", md: "0.98rem" },
                                    lineHeight: 1.85,
                                    mb: 2.2,
                                }}
                            >
                                The BluHealth Mental Health module delivers real-time, AI-driven
                                assessments that help clinicians evaluate, interpret, and act
                                on patient mental health data with confidence. Using clinically
                                validated screening tools enhanced by explainable AI, the
                                platform instantly analyzes patient responses to generate
                                structured insights, severity scoring, and care guidance—right
                                at the point of care.
                            </Typography>
                            <Typography
                                sx={{
                                    color: "rgba(15,23,42,0.7)",
                                    fontSize: { xs: "0.94rem", md: "0.98rem" },
                                    lineHeight: 1.85,
                                }}
                            >
                                Designed with security, privacy, and regulatory compliance at
                                its core, BluHealth supports HIPAA-aligned workflows and
                                clinical documentation standards. The result is faster
                                assessments, more informed clinical conversations, and improved
                                patient outcomes—powered by BluAI's trusted healthcare
                                intelligence.
                            </Typography>
                        </Box>

                        {/* RIGHT COLUMN */}
                        <Box sx={{ flex: 1, minWidth: 0 }}>
                            <Stack direction="row" alignItems="center" spacing={1.5} mb={1.8}>
                                <Box
                                    sx={{
                                        width: 4,
                                        height: 28,
                                        borderRadius: 1,
                                        background:
                                            "linear-gradient(180deg, #7C3AED 0%, #A78BFA 100%)",
                                    }}
                                />
                                <Typography
                                    sx={{
                                        fontWeight: 900,
                                        color: "#0f172a",
                                        fontSize: { xs: "1.1rem", md: "1.25rem" },
                                        lineHeight: 1.3,
                                    }}
                                >
                                    Standardized, Compliant, AI-Driven Mental Health Intelligence
                                    at Scale.
                                </Typography>
                            </Stack>

                            <Typography
                                sx={{
                                    color: "rgba(15,23,42,0.7)",
                                    fontSize: { xs: "0.94rem", md: "0.98rem" },
                                    lineHeight: 1.85,
                                    mb: 2.2,
                                }}
                            >
                                The BluHealth Mental Health module enables healthcare
                                organizations to modernize mental health delivery through
                                secure, AI-driven clinical intelligence. By combining validated
                                assessment frameworks with real-time analytics, the platform
                                standardizes evaluations, reduces diagnostic variability, and
                                accelerates time-to-care—while maintaining clinician oversight
                                and explainability.
                            </Typography>
                            <Typography
                                sx={{
                                    color: "rgba(15,23,42,0.7)",
                                    fontSize: { xs: "0.94rem", md: "0.98rem" },
                                    lineHeight: 1.85,
                                }}
                            >
                                Designed for enterprise deployment, BluHealth adheres to
                                HIPAA-aligned security principles, audit-ready data handling,
                                and privacy-by-design architecture. The platform improves
                                clinical efficiency, reduces operational burden, and supports
                                scalable, value-based mental health services—delivering
                                measurable improvements in care quality, clinician
                                productivity, and patient engagement.
                            </Typography>
                        </Box>
                    </Stack>
                </Container>
            </Box>
        </Box>
    );
}