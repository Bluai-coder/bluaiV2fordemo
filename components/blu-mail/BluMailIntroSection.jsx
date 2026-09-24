// "use client";

// import React from "react";
// import { Box, Container, Grid, Paper, Stack, Typography, Divider } from "@mui/material";

// import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
// import BoltRoundedIcon from "@mui/icons-material/BoltRounded";
// import RuleRoundedIcon from "@mui/icons-material/RuleRounded";
// import ShieldRoundedIcon from "@mui/icons-material/ShieldRounded";
// import InsightsRoundedIcon from "@mui/icons-material/InsightsRounded";

// const features = [
//     {
//         icon: <BoltRoundedIcon sx={{ fontSize: 22 }} />,
//         title: "Instant Automation",
//         desc: "Reduce repetitive inbox work with AI-driven workflows.",
//     },
//     {
//         icon: <RuleRoundedIcon sx={{ fontSize: 22 }} />,
//         title: "Workflow Rules",
//         desc: "Create rules in everyday language. BluMail handles the actions.",
//     },
//     {
//         icon: <InsightsRoundedIcon sx={{ fontSize: 22 }} />,
//         title: "Analytics Dashboard",
//         desc: "Track performance, response time, and workload efficiency.",
//     },
//     {
//         icon: <ShieldRoundedIcon sx={{ fontSize: 22 }} />,
//         title: "Enterprise Ready",
//         desc: "Maintain consistent communication standards across teams.",
//     },
// ];

// export default function BluMailPremiumSection() {
//     return (
//         <Box
//             sx={{
//                 position: "relative",
//                 py: { xs: 7, md: 11 },
//                 overflow: "hidden",
//                 bgcolor: "#fff",
//             }}
//         >
//             {/*  Premium background (clean + subtle) */}
//             <Box
//                 sx={{
//                     position: "absolute",
//                     inset: 0,
//                     background:
//                         "radial-gradient(800px 520px at 18% 20%, rgba(27,77,255,0.10), transparent 60%), radial-gradient(900px 600px at 88% 30%, rgba(27,77,255,0.08), transparent 55%), linear-gradient(180deg, #ffffff 0%, #f8faff 100%)",
//                 }}
//             />

//             <Container maxWidth="lg" sx={{ position: "relative" }}>
//                 <Grid
//                     container
//                     spacing={{ xs: 4, md: 7 }}
//                     alignItems="center"
//                     justifyContent="center" //  center whole grid row
//                     sx={{ textAlign: { xs: "center", md: "center" } }} //  center text
//                 >
//                     {/* ================= LEFT CONTENT ================= */}
//                     <Grid item xs={12} md={10} lg={9}>
//                         <Box
//                             sx={{
//                                 display: "flex",
//                                 flexDirection: "column",
//                                 alignItems: "center", //  center everything inside
//                                 justifyContent: "center",
//                                 width: "100%",
//                             }}
//                         >


//                             {/* Title */}
//                             <Typography
//                                 sx={{
//                                     mt: 2.2,
//                                     fontWeight: 950,
//                                     color: "#07122C",
//                                     fontSize: { xs: "2rem", sm: "2.4rem", md: "3.1rem" },
//                                     lineHeight: 1.08,
//                                     letterSpacing: -0.8,
//                                     textAlign: "center",
//                                 }}
//                             >
//                                 BluMail™
//                             </Typography>

//                             {/* Description 1 */}
//                             <Typography
//                                 sx={{
//                                     mt: 2.2,
//                                     fontSize: { xs: 14.2, sm: 15.4 },
//                                     lineHeight: 1.95,
//                                     color: "rgba(7,18,44,0.68)",
//                                     maxWidth: 1250,
//                                     textAlign: "center",
//                                 }}
//                             >
//                                 BluMail(TM) is an AI-powered email automation system that transforms how
//                                 professionals handle their inbox. Built with React and Django, it uses
//                                 artificial intelligence to understand, respond to, and organize emails
//                                 according to your specific workflow needs. With its intuitive dashboard
//                                 and Google authentication, BluMail(TM) helps you reclaim valuable time by
//                                 automating routine email tasks while maintaining the human touch in your
//                                 communications.
//                             </Typography>

//                             {/* Divider */}
//                             <Divider
//                                 sx={{
//                                     my: 3.2,
//                                     width: "100%",
//                                     maxWidth: 1250,
//                                     borderColor: "rgba(15,23,42,0.10)",
//                                 }}
//                             />

//                             {/* Description 2 */}
//                             <Typography
//                                 sx={{
//                                     fontSize: { xs: 14.0, sm: 15.2 },
//                                     lineHeight: 1.95,
//                                     color: "rgba(7,18,44,0.62)",
//                                     maxWidth: 1250,
//                                     textAlign: "center",
//                                 }}
//                             >
//                                 The platform allows you to create workflow rules using everyday language,
//                                 which the system translates into precise actions like identifying specific
//                                 senders, generating appropriate response drafts, and applying
//                                 organizational labels. BluMail(TM)'s comprehensive features include a
//                                 unified inbox view, performance analytics dashboard, and user management
//                                 capabilities that ensure consistent communication standards across your
//                                 organization. By automating repetitive email processes, BluMail positions
//                                 your team as responsive and organized while freeing you to focus on
//                                 meaningful engagement.
//                             </Typography>
//                         </Box>
//                     </Grid>

//                 </Grid>
//             </Container>

//         </Box>
//     );
// }



"use client";

import React from "react";
import {
    Box,
    Container,
    Paper,
    Stack,
    Typography,
    Divider,
    Button,
} from "@mui/material";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import BoltRoundedIcon from "@mui/icons-material/BoltRounded";
import RuleRoundedIcon from "@mui/icons-material/RuleRounded";
import ShieldRoundedIcon from "@mui/icons-material/ShieldRounded";
import InsightsRoundedIcon from "@mui/icons-material/InsightsRounded";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import Image from "next/image";
import { CheckCircleIcon, VerifiedIcon } from "lucide-react";
import SecurityIcon from "@mui/icons-material/Security";

/* ============================================================
   DATA
   ============================================================ */

const features = [
    {
        icon: <BoltRoundedIcon sx={{ fontSize: 24 }} />,
        title: "Instant Automation",
        desc: "Reduce repetitive inbox work with AI-driven workflows.",
        accent: "#1B4DFF",
    },
    {
        icon: <RuleRoundedIcon sx={{ fontSize: 24 }} />,
        title: "Workflow Rules",
        desc: "Create rules in everyday language. BluMail handles the actions.",
        accent: "#7C3AED",
    },
    {
        icon: <InsightsRoundedIcon sx={{ fontSize: 24 }} />,
        title: "Analytics Dashboard",
        desc: "Track performance, response time, and workload efficiency.",
        accent: "#0EA5A4",
    },
    {
        icon: <ShieldRoundedIcon sx={{ fontSize: 24 }} />,
        title: "Enterprise Ready",
        desc: "Maintain consistent communication standards across teams.",
        accent: "#F59E0B",
    },
];

const heroBadges = [
    "AI AUTOMATION",
    "WORKFLOW RULES",
    "ANALYTICS",
    "ENTERPRISE",
];

/* ============================================================
   MAIN COMPONENT
   ============================================================ */

export default function BluMailPremiumSection() {
    return (
        <Box sx={{ bgcolor: "#fff" }}>
            {/* ================= HERO ================= */}
            <Box
                sx={{
                    position: "relative",
                    py: { xs: 8, md: 12 },
                    overflow: "hidden",
                    background:
                        "radial-gradient(900px 500px at 15% 20%, rgba(27,77,255,0.10), transparent 60%), radial-gradient(900px 600px at 85% 30%, rgba(124,58,237,0.08), transparent 55%), linear-gradient(180deg, #FFFFFF 0%, #F8FAFF 100%)",
                }}
            >
                <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
                    {/* ─── Split grid: text left, image right ─── */}
                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: { xs: "1fr", md: "1.05fr 1fr" },
                            alignItems: "center",
                            gap: { xs: 5, md: 7 },
                            mb: { xs: 7, md: 10 },
                        }}
                    >
                        {/* LEFT — Text */}
                        <Box
                            sx={{
                                minWidth: 0,
                                textAlign: { xs: "center", md: "left" },
                                order: { xs: 1, md: 1 },
                            }}
                        >
                            {/* Pill */}
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
                                    BluMail™ AI
                                </Typography>
                            </Box>

                            {/* Headline */}
                            <Typography
                                sx={{
                                    fontWeight: 900,
                                    color: "#07122C",
                                    fontSize: { xs: "2rem", sm: "2.5rem", md: "3.4rem" },
                                    lineHeight: 1.08,
                                    letterSpacing: "-0.02em",
                                    maxWidth: 620,
                                    mx: { xs: "auto", md: 0 },
                                }}
                            >
                                Your Inbox,{" "}
                                <Box
                                    component="span"
                                    sx={{
                                        background:
                                            "#1B4DFF",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                    }}
                                >
                                    on Autopilot.
                                </Box>
                            </Typography>

                            {/* Subtext */}
                            <Typography
                                sx={{
                                    mt: 2.5,
                                    fontSize: { xs: 15, md: 17 },
                                    color: "rgba(7,18,44,0.62)",
                                    maxWidth: 560,
                                    mx: { xs: "auto", md: 0 },
                                    lineHeight: 1.75,
                                }}
                            >
                                AI-powered email automation that understands, responds to, and
                                organizes your inbox according to your workflow — so you can
                                focus on meaningful engagement.
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

                        {/* RIGHT — Image */}
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: { xs: "center", md: "center" },
                                alignItems: "center",
                                width: "100%",
                                minWidth: 0,
                                order: { xs: 2, md: 2 },
                            }}
                        >
                            <Box
                                sx={{
                                    position: "relative",
                                    width: "100%",
                                    maxWidth: { xs: 320, sm: 440, md: 560 },
                                    mx: { xs: "auto", md: 0 },
                                }}
                            >
                                {/* Soft glow behind image */}
                                <Box
                                    sx={{
                                        position: "absolute",
                                        inset: -30,
                                        borderRadius: "50%",
                                        background:
                                            "radial-gradient(circle, rgba(27,77,255,0.18) 0%, transparent 70%)",
                                        filter: "blur(30px)",
                                        zIndex: 0,
                                    }}
                                />

                                <Image
                                    src="/blu-mail/mail-hero.webp"
                                    alt="BluMail AI Email Automation"
                                    width={1200}
                                    height={900}
                                    sizes="(max-width: 600px) 90vw, (max-width: 900px) 440px, 560px"
                                    style={{
                                        width: "100%",
                                        height: "auto",
                                        display: "block",
                                        position: "relative",
                                        zIndex: 1,
                                        borderRadius: 16,
                                    }}
                                    priority
                                />
                            </Box>
                        </Box>
                    </Box>


                </Container>
            </Box>

            {/* ================= ABOUT ================= */}
            <Box
                sx={{
                    py: { xs: 8, md: 6 },
                    background:
                        "linear-gradient(180deg, #FFFFFF 0%, #F7FAFF 50%, #FFFFFF 100%)",
                    borderTop: "1px solid rgba(15,23,42,0.05)",
                }}
            >
                <Container maxWidth="xl">
                    {/* ─── Feature cards ─── */}
                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: {
                                xs: "1fr",
                                sm: "repeat(2,1fr)",
                                md: "repeat(4,1fr)",
                            },
                            gap: { xs: 2.5, md: 3 },
                        }}
                    >
                        {features.map((f) => (
                            <FeatureCard
                                key={f.title}
                                icon={f.icon}
                                title={f.title}
                                desc={f.desc}
                                accent={f.accent}
                            />
                        ))}
                    </Box>
                    {/* Center header */}
                    <Box textAlign="center" mt={{ xs: 5, md: 9 }} mb={{ xs: 5, md: 7 }}>
                        <Typography
                            sx={{
                                fontSize: 11,
                                fontWeight: 800,
                                letterSpacing: "0.14em",
                                color: "#1B4DFF",
                                textTransform: "uppercase",
                                mb: 1.5,
                            }}
                        >
                            About BluMail™
                        </Typography>
                        <Typography
                            sx={{
                                fontWeight: 900,
                                color: "#07122C",
                                fontSize: { xs: "1.8rem", md: "2.8rem" },
                                lineHeight: 1.15,
                                letterSpacing: "-0.02em",
                            }}
                        >
                            Transform How You Handle Email.
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
                            Built with React and Django · Google Authentication · AI-driven
                            workflow automation
                        </Typography>
                    </Box>

                    {/* Two column */}
                    <Stack

                        id="read-more-section"
                        direction={{ xs: "column", md: "row" }}
                        spacing={{ xs: 5, md: 7 }}
                        alignItems="flex-start"
                    >
                        {/* LEFT COLUMN */}
                        <Box sx={{ flex: 1, minWidth: 0 }}>
                            <Stack direction="row" alignItems="center" spacing={1.5} mb={2}>
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
                                        fontSize: { xs: "1.1rem", md: "1.25rem" },
                                        color: "#07122C",
                                        lineHeight: 1.3,
                                    }}
                                >
                                    AI-Powered Email Automation System
                                </Typography>
                            </Stack>

                            <Typography
                                sx={{
                                    fontSize: { xs: "0.94rem", md: "0.98rem" },
                                    lineHeight: 1.85,
                                    color: "rgba(7,18,44,0.7)",
                                }}
                            >
                                BluMail™ is an AI-powered email automation system that
                                transforms how professionals handle their inbox. Built with
                                React and Django, it uses artificial intelligence to
                                understand, respond to, and organize emails according to your
                                specific workflow needs. With its intuitive dashboard and
                                Google authentication, BluMail™ helps you reclaim valuable time
                                by automating routine email tasks while maintaining the human
                                touch in your communications.
                            </Typography>
                        </Box>

                        {/* RIGHT COLUMN */}
                        <Box sx={{ flex: 1, minWidth: 0 }}>
                            <Stack direction="row" alignItems="center" spacing={1.5} mb={2}>
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
                                        fontSize: { xs: "1.1rem", md: "1.25rem" },
                                        color: "#07122C",
                                        lineHeight: 1.3,
                                    }}
                                >
                                    Create Rules in Everyday Language
                                </Typography>
                            </Stack>

                            <Typography
                                sx={{
                                    fontSize: { xs: "0.94rem", md: "0.98rem" },
                                    lineHeight: 1.85,
                                    color: "rgba(7,18,44,0.7)",
                                }}
                            >
                                The platform allows you to create workflow rules using everyday
                                language, which the system translates into precise actions like
                                identifying specific senders, generating appropriate response
                                drafts, and applying organizational labels. BluMail™'s
                                comprehensive features include a unified inbox view,
                                performance analytics dashboard, and user management
                                capabilities that ensure consistent communication standards
                                across your organization. By automating repetitive email
                                processes, BluMail™ positions your team as responsive and
                                organized while freeing you to focus on meaningful engagement.
                            </Typography>
                        </Box>
                    </Stack>
                </Container>
            </Box>
        </Box>
    );
}

/* ============================================================
   SUB-COMPONENTS
   ============================================================ */

function FeatureCard({ icon, title, desc, accent = "#1B4DFF" }) {
    return (
        <Paper
            elevation={0}
            sx={{
                position: "relative",
                borderRadius: 4,
                bgcolor: "rgba(255,255,255,0.85)",
                border: "1px solid rgba(227,232,255,0.95)",
                boxShadow: "0 18px 55px rgba(15,23,42,0.08)",
                backdropFilter: "blur(14px)",
                p: { xs: 2.6, md: 3 },
                overflow: "hidden",
                transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
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
                    borderColor: `${accent}55`,
                    boxShadow: `0 30px 70px -25px ${accent}55`,
                },
            }}
        >
            <Box
                sx={{
                    width: 50,
                    height: 50,
                    borderRadius: "16px",
                    mb: 2,
                    background: `linear-gradient(135deg, ${accent} 0%, ${accent}cc 100%)`,
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: `0 10px 25px -10px ${accent}88`,
                }}
            >
                {icon}
            </Box>

            <Typography
                sx={{
                    fontWeight: 900,
                    fontSize: 15,
                    color: "#07122C",
                    lineHeight: 1.3,
                    mb: 1,
                }}
            >
                {title}
            </Typography>

            <Typography
                sx={{
                    fontSize: 12.5,
                    color: "rgba(7,18,44,0.6)",
                    lineHeight: 1.55,
                }}
            >
                {desc}
            </Typography>
        </Paper>
    );
}