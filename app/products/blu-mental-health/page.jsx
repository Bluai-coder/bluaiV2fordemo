"use client";

import {
    Box,
    Container,
    Paper,
    Stack,
    Typography,
    Divider,
    Chip,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PsychologyIcon from "@mui/icons-material/Psychology";
import InsightsIcon from "@mui/icons-material/Insights";
import SecurityIcon from "@mui/icons-material/Security";

const FeatureCard = ({ icon, title, subtitle }) => {
    return (
        <Paper
            elevation={0}
            sx={{
                flex: 1,
                minWidth: { xs: "100%", sm: 220, md: 240 },
                borderRadius: "16px",
                border: "1px solid",
                borderColor: "rgba(15, 23, 42, 0.08)",
                background:
                    "linear-gradient(180deg, rgba(255,255,255,0.95), rgba(248,250,252,0.95))",
                p: { xs: 2.2, sm: 2.6, md: 3 },
                transition: "0.25s ease",
                "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 18px 40px rgba(15, 23, 42, 0.10)",
                    borderColor: "rgba(37, 99, 235, 0.25)",
                },
            }}
        >
            <Box
                sx={{
                    width: 44,
                    height: 44,
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    bgcolor: "rgba(37, 99, 235, 0.08)",
                    color: "#2563eb",
                    mb: 1.6,
                }}
            >
                {icon}
            </Box>

            <Typography
                sx={{
                    fontWeight: 800,
                    fontSize: { xs: "0.98rem", sm: "1.05rem" },
                    color: "#0f172a",
                    mb: 0.5,
                }}
            >
                {title}
            </Typography>

            <Typography
                sx={{
                    fontSize: { xs: "0.86rem", sm: "0.92rem" },
                    color: "rgba(15, 23, 42, 0.65)",
                    lineHeight: 1.5,
                }}
            >
                {subtitle}
            </Typography>
        </Paper>
    );
};

const Bullet = ({ text }) => {
    return (
        <Stack direction="row" spacing={1.1} sx={{ alignItems: "flex-start" }}>
            <CheckCircleIcon
                sx={{
                    fontSize: 18,
                    mt: "2px",
                    color: "#2563eb",
                }}
            />
            <Typography
                sx={{
                    fontSize: { xs: "0.9rem", md: "0.95rem" },
                    color: "rgba(15, 23, 42, 0.72)",
                    lineHeight: 1.7,
                }}
            >
                {text}
            </Typography>
        </Stack>
    );
};




export default function MentalHealthModulePage() {
    return (
        <Box
            sx={{
                minHeight: "100vh",
                bgcolor: "#ffffff",
            }}
        >
            {/* HERO */}
            <Box
                sx={{
                    position: "relative",
                    pt: { xs: 7, sm: 9, md: 10 },
                    pb: { xs: 8, sm: 10, md: 12 },
                    overflow: "hidden",
                    background:
                        "radial-gradient(1200px 500px at 50% 0%, rgba(37,99,235,0.10), transparent 60%), linear-gradient(180deg, #ffffff 0%, #f8fbff 100%)",
                    borderBottom: "1px solid rgba(15, 23, 42, 0.06)",
                }}
            >
                <Container maxWidth="lg">
                    <Stack spacing={2} sx={{ alignItems: "center", textAlign: "center" }}>
                        <Typography
                            sx={{
                                fontWeight: 900,
                                letterSpacing: "-0.02em",
                                color: "#0f172a",
                                fontSize: {
                                    xs: "1.55rem",
                                    sm: "2rem",
                                    md: "2.35rem",
                                },
                            }}
                        >
                            {/* BluHealth™  */}
                            Mental Health
                            {/* Module */}
                        </Typography>

                        <Typography
                            sx={{
                                maxWidth: 860,
                                color: "rgba(15, 23, 42, 0.65)",
                                fontSize: { xs: "0.95rem", sm: "1.02rem", md: "1.05rem" },
                                lineHeight: 1.7,
                            }}
                        >
                            AI-Powered Mental Health Assessments. Real-Time Clinical Intelligence.
                        </Typography>

                        {/* CARDS */}
                        <Box sx={{ width: "100%", mt: { xs: 3.5, sm: 4.2 } }}>
                            <Stack
                                direction={{ xs: "column", sm: "row" }}
                                spacing={2}
                                sx={{
                                    width: "100%",
                                    justifyContent: "center",
                                    alignItems: "stretch",
                                }}
                            >
                                <FeatureCard
                                    icon={<PsychologyIcon />}
                                    title="AI-Assisted Assessment"
                                    subtitle="Real-time analysis of validated screening tools with clinician-friendly scoring."
                                />

                                <FeatureCard
                                    icon={<InsightsIcon />}
                                    title="Explainable Clinical Insights"
                                    subtitle="Transparent interpretation that supports — not replaces — clinical judgment."
                                />

                                <FeatureCard
                                    icon={<SecurityIcon />}
                                    title="Secure & HIPAA-Aligned"
                                    subtitle="Privacy-by-design workflows and audit-ready data handling for enterprise use."
                                />
                            </Stack>
                        </Box>
                    </Stack>
                </Container>
            </Box>

            {/* Primary Taglines */}
            <Box
                sx={{
                    py: { xs: 7, sm: 5, md: 5 }, // Open Positions more vertical spacing
                }}
            >
                <Container maxWidth="lg">
                    <Stack
                        spacing={{ xs: 2.5, sm: 3 }}
                        sx={{
                            textAlign: "center",
                            alignItems: "center",
                        }}
                    >

                        {/* Pills */}
                        <Stack
                            direction="row"
                            sx={{
                                width: "100%",
                                justifyContent: "center",
                                
                                alignItems: "center",
                                flexWrap: "wrap",
                                gap: { xs: 1.5, sm: 2 }, // Open Positions perfect responsive spacing
                                px: { xs: 1, sm: 0 }, // Open Positions keeps pills inside container on mobile

                            }}
                        >
                            {[
                                "AI-Powered Mental Health Intelligence. Clinician-Led Care.",
                                "Real-Time Assessments. Smarter Clinical Decisions.",
                                "Where Clinical Expertise Meets Explainable AI.",
                                "Turning Mental Health Data into Actionable Insight.",
                            ].map((t) => (
                                <Paper
                                    key={t}
                                    elevation={0}
                                    sx={{
                                        px: { xs: 2, sm: 2.4 },
                                        py: { xs: 1, sm: 1.1 },
                                        borderRadius: "999px",
                                        border: "1px solid rgba(37, 99, 235, 0.18)",
                                        boxShadow: "0 18px 60px rgba(15, 23, 42, 0.06)",
                                    transition: "all 220ms ease",
                                    "&:hover": {
                                        transform: "translateY(-3px)",
                                        boxShadow: "0 26px 90px rgba(15, 23, 42, 0.10)",
                                        borderColor: "rgba(37, 99, 235, 0.20)",
                                    },
                                        bgcolor: "rgba(37, 99, 235, 0.05)",


                                        // Open Positions 100% Responsive behavior
                                        width: { xs: "100%", sm: "550px" },
                                        maxWidth: { xs: "520px", md: "unset" },

                                        display: "flex",
                                        justifyContent: "center",
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontWeight: 800,
                                            color: "#0f172a",
                                            fontSize: { xs: "0.88rem", sm: "0.9rem" },
                                            textAlign: "center",
                                            lineHeight: 1.4,
                                        }}
                                    >
                                        {t}
                                    </Typography>
                                </Paper>
                            ))}
                        </Stack>
                    </Stack>
                </Container>
            </Box>



            <Box
                sx={{
                    py: { xs: 7, sm: 5, md: 0},
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                <Container maxWidth="lg">
                    <Stack
                        direction={{ xs: "column", md: "row" }}
                        spacing={{ xs: 3, sm: 3.5, md: 4 }}
                        sx={{
                            alignItems: "stretch", // Open Positions equal height columns on desktop
                        }}
                    >
                        {/* LEFT CARD */}
                        <Box sx={{ flex: 1, display: "flex" }}>
                            <Paper
                                elevation={0}
                                sx={{
                                    width: "100%",
                                    p: { xs: 2.4, sm: 3, md: 3.4 },
                                    borderRadius: { xs: "18px", sm: "22px" },
                                    border: "1px solid rgba(15, 23, 42, 0.08)",
                                    bgcolor: "#fff",
                                    boxShadow: "0 18px 60px rgba(15, 23, 42, 0.06)",
                                    transition: "all 220ms ease",
                                    "&:hover": {
                                        transform: "translateY(-3px)",
                                        boxShadow: "0 26px 90px rgba(15, 23, 42, 0.10)",
                                        borderColor: "rgba(37, 99, 235, 0.20)",
                                    },
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            >
                                <Stack spacing={1.6} sx={{ flex: 1 }}>
                                    {/* Title */}
                                    <Stack spacing={0.7}>
                                        <Typography
                                            sx={{
                                                fontWeight: 900,
                                                color: "#0f172a",
                                                fontSize: { xs: "1.05rem", sm: "1.15rem", md: "1.2rem" },
                                                lineHeight: 1.25,
                                                letterSpacing: "-0.02em",
                                            }}
                                        >
                                            Assessment Results & Clinical Insights
                                        </Typography>

                                        <Typography
                                            sx={{
                                                color: "rgba(15, 23, 42, 0.68)",
                                                fontSize: { xs: "0.92rem", sm: "0.95rem" },
                                                lineHeight: 1.7,
                                                maxWidth: 520,
                                            }}
                                        >
                                            AI-enhanced interpretation of assessment results, presented with clear scoring, severity indicators, and recommended clinical considerations.
                                        </Typography>
                                    </Stack>

                                    <Divider sx={{ borderColor: "rgba(15, 23, 42, 0.08)" }} />

                                    {/* Chips */}
                                    <Box
                                        sx={{
                                            display: "flex",
                                            flexWrap: "wrap",
                                            gap: 1, // Open Positions much better than spacing for wrap
                                        }}
                                    >
                                        {[
                                            "Structured insights to guide counseling conversations ",
                                            "Supports longitudinal tracking and outcome monitoring ",
                                            "Optimized for clinical documentation and care planning",
                                        ].map((label) => (
                                            <Chip
                                                key={label}
                                                label={label}
                                                sx={{
                                                    height: 32,
                                                    fontWeight: 700,
                                                    borderRadius: "999px",
                                                    bgcolor: "rgba(37, 99, 235, 0.08)",
                                                    color: "#1d4ed8",
                                                    border: "1px solid rgba(37, 99, 235, 0.18)",
                                                    "& .MuiChip-label": {
                                                        px: 1.2,
                                                        fontSize: "0.82rem",
                                                    },
                                                }}
                                            />
                                        ))}
                                    </Box>

                                    <Divider sx={{ borderColor: "rgba(15, 23, 42, 0.08)" }} />

                                    {/* Footer text */}
                                    <Typography
                                        sx={{
                                            color: "rgba(15, 23, 42, 0.62)",
                                            fontSize: { xs: "0.9rem", sm: "0.92rem" },
                                            lineHeight: 1.75,
                                        }}
                                    >
                                        AI insights are explainable and designed to assist clinical interpretation —
                                        final decisions remain with the clinician.
                                    </Typography>
                                </Stack>
                            </Paper>
                        </Box>

                        {/* RIGHT CARD */}
                        <Box sx={{ flex: 1, display: "flex" }}>
                            <Paper
                                elevation={0}
                                sx={{
                                    width: "100%",
                                    p: { xs: 2.4, sm: 3, md: 3.4 },
                                    borderRadius: { xs: "18px", sm: "22px" },
                                    border: "1px solid rgba(15, 23, 42, 0.08)",
                                    background:
                                        "linear-gradient(180deg, rgba(248,250,252,1) 0%, rgba(255,255,255,1) 70%)",
                                    boxShadow: "0 18px 60px rgba(15, 23, 42, 0.06)",
                                    transition: "all 220ms ease",
                                    "&:hover": {
                                        transform: "translateY(-3px)",
                                        boxShadow: "0 26px 90px rgba(15, 23, 42, 0.10)",
                                        borderColor: "rgba(37, 99, 235, 0.20)",
                                    },
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            >
                                <Stack spacing={1.4} sx={{ flex: 1 }}>
                                    <Typography
                                        sx={{
                                            fontWeight: 900,
                                            color: "#0f172a",
                                            fontSize: { xs: "1.05rem", sm: "1.15rem", md: "1.2rem" },
                                            lineHeight: 1.25,
                                            letterSpacing: "-0.02em",
                                        }}
                                    >
                                        Regulatory & Clinical Use Disclaimer
                                    </Typography>

                                    <Divider sx={{ borderColor: "rgba(15, 23, 42, 0.08)" }} />

                                    <Typography
                                        sx={{
                                            color: "rgba(15, 23, 42, 0.68)",
                                            fontSize: { xs: "0.92rem", sm: "0.95rem" },
                                            lineHeight: 1.8,
                                        }}
                                    >
                                        BluHealth’s Mental Health module is a clinical decision-support tool designed to
                                        assist qualified healthcare professionals. It does not independently diagnose,
                                        treat, or replace clinical judgment. All assessments and AI-generated insights are
                                        intended to support — not substitute — professional evaluation and care decisions.
                                        <br />
                                        <br />
                                        The platform is designed in alignment with HIPAA security and privacy principles
                                        and follows FDA guidance for Clinical Decision Support (CDS) software. Final
                                        diagnosis and treatment decisions remain solely with the licensed clinician.
                                    </Typography>
                                </Stack>
                            </Paper>
                        </Box>
                    </Stack>
                </Container>
            </Box>





            {/* ABOUT SECTION */}
            <Box sx={{ py: { xs: 7, sm: 9, md: 10 } }}>
                <Container maxWidth="lg">
                    <Stack spacing={1.2} sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
                        <Typography
                            sx={{
                                fontWeight: 900,
                                color: "#0f172a",
                                fontSize: { xs: "1.35rem", sm: "1.55rem", md: "1.75rem" },
                                letterSpacing: "-0.02em",
                            }}
                        >
                            About the Mental Health Module
                        </Typography>

                        <Typography
                            sx={{
                                color: "rgba(15, 23, 42, 0.55)",
                                fontSize: { xs: "0.9rem", sm: "0.95rem" },
                            }}
                        >
                            Standardized, compliant, AI-driven intelligence — delivered at the point of care
                        </Typography>
                    </Stack>

                    {/* two-column without Grid */}
                    <Stack
                        direction={{ xs: "column", md: "row" }}
                        spacing={{ xs: 4, md: 4.5 }}
                        sx={{ alignItems: "flex-start" }}
                    >
                        {/* LEFT COLUMN */}
                        <Box sx={{ flex: 1 }}>
                            <Typography
                                sx={{
                                    fontWeight: 900,
                                    color: "#2563eb",
                                    fontSize: { xs: "1.05rem", md: "1.12rem" },
                                    mb: 1.4,
                                }}
                            >
                                AI-Powered Mental Health Assessments. Real-Time Clinical Intelligence.
                            </Typography>

                            <Typography
                                sx={{
                                    color: "rgba(15, 23, 42, 0.7)",
                                    fontSize: { xs: "0.93rem", md: "0.98rem" },
                                    lineHeight: 1.8,
                                    mb: 2.4,
                                }}
                            >
                                The BluHealth Mental Health module delivers real-time, AI-driven assessments that help clinicians evaluate, interpret, and act on patient mental health data with confidence. Using clinically validated screening tools enhanced by explainable AI, the platform instantly analyzes patient responses to generate structured insights, severity scoring, and care guidance—right at the point of care.

                            </Typography>
                            <Typography
                                sx={{
                                    color: "rgba(15, 23, 42, 0.7)",
                                    fontSize: { xs: "0.93rem", md: "0.98rem" },
                                    lineHeight: 1.8,
                                    mb: 2.4,
                                }}
                            >
                                Designed with security, privacy, and regulatory compliance at its core, BluHealth supports HIPAA-aligned workflows and clinical documentation standards. The result is faster assessments, more informed clinical conversations, and improved patient outcomes—powered by BluAI’s trusted healthcare intelligence.
                            </Typography>
                            {/* 
                            <Stack spacing={1.3}>
                                <Bullet text="Patient responses are analyzed in real time to surface clinically relevant patterns and severity indicators." />
                                <Bullet text="AI insights are explainable and designed to assist clinical interpretation — final decisions remain with the clinician." />
                                <Bullet text="Secure workflows support longitudinal tracking, progress monitoring, and structured documentation." />
                            </Stack> */}

                            {/* two */}

                        </Box>

                        {/* RIGHT COLUMN */}
                        <Box sx={{ flex: 1 }}>
                            <Typography
                                sx={{
                                    fontWeight: 900,
                                    color: "#2563eb",
                                    fontSize: { xs: "1.05rem", md: "1.12rem" },
                                    mb: 1.4,
                                }}
                            >
                                Standardized, Compliant, AI-Driven Mental Health Intelligence at Scale.
                            </Typography>

                            <Typography
                                sx={{
                                    color: "rgba(15, 23, 42, 0.7)",
                                    fontSize: { xs: "0.93rem", md: "0.98rem" },
                                    lineHeight: 1.8,
                                    mb: 2.4,
                                }}
                            >
                                The BluHealth Mental Health module enables healthcare organizations to modernize mental health delivery through secure, AI-driven clinical intelligence. By combining validated assessment frameworks with real-time analytics, the platform standardizes evaluations, reduces diagnostic variability, and accelerates time-to-care—while maintaining clinician oversight and explainability.
                            </Typography>
                            <Typography
                                sx={{
                                    color: "rgba(15, 23, 42, 0.7)",
                                    fontSize: { xs: "0.93rem", md: "0.98rem" },
                                    lineHeight: 1.8,
                                    mb: 2.4,
                                }}
                            >
                                Designed for enterprise deployment, BluHealth adheres to HIPAA-aligned security principles, audit-ready data handling, and privacy-by-design architecture. The platform improves clinical efficiency, reduces operational burden, and supports scalable, value-based mental health services—delivering measurable improvements in care quality, clinician productivity, and patient engagement.                             </Typography>

                            {/* <Stack spacing={1.3} sx={{ mb: 3 }}>
                                <Bullet text="Standardized screening with real-time clinical intelligence" />
                                <Bullet text="Secure, HIPAA-aligned data handling" />
                                <Bullet text="Designed to support clinician-led decision making" />
                            </Stack> */}


                        </Box>
                    </Stack>



                </Container>
            </Box>
        </Box>
    );
}
