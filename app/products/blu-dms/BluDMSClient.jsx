
"use client";

import React from "react";
import { Box, Container, Paper, Stack, Typography } from "@mui/material";
import DocumentScannerOutlinedIcon from "@mui/icons-material/DocumentScannerOutlined";
import ManageSearchOutlinedIcon from "@mui/icons-material/ManageSearchOutlined";
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";
import HubOutlinedIcon from "@mui/icons-material/HubOutlined";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import StorageIcon from "@mui/icons-material/Storage";
import { CheckCircleIcon, VerifiedIcon } from "lucide-react";
import SecurityIcon from "@mui/icons-material/Security";
import Image from "next/image";

/* ============================================================
   DATA
   ============================================================ */

const leftPoints = [
    `Our proprietary document processing pipeline employs state-of-the-art optical character recognition algorithms specifically calibrated for complex clinical notation, transforming even the most challenging handwritten prescriptions, intricate pathology reports, and multi-page prior authorization requests into structured, semantically-rich digital assets. The system's neural network architecture has been meticulously trained on millions of medical documents to recognize specialized nomenclature across all medical subspecialties—from oncological staging protocols to complex pharmacogenomic prescribing patterns.`,
    `BluDMS™ leverages advanced machine learning algorithms to create a cognitive augmentation layer that automatically extracts SNOMED-CT, ICD-10, and CPT-coded clinical concepts while maintaining hierarchical relationships between diagnoses, interventions, and outcomes. This sophisticated medical ontology integration enables unprecedented search precision—allowing clinicians to instantly retrieve all documentation related to specific pathophysiological processes rather than merely matching lexical terms.`,
    `The platform's document intelligence engine identifies and contextualizes critical clinical data elements including medication reconciliation discrepancies, contradictory diagnostic conclusions, and incomplete documentation patterns—flagging potential medical errors before they impact on patient care. This proactive quality assurance mechanism dramatically reduces adverse events while ensuring comprehensive regulatory compliance with HIPAA, HITECH, and emerging interoperability standards.`,
    `BluDMS™ represents the convergence of medical informatics excellence and cutting-edge artificial intelligence—where document management transcends simple storage and retrieval to become an integral component of the clinical decision support ecosystem. The result is a transformative platform that not only streamlines administrative workflows but fundamentally enhances the precision and efficacy of healthcare delivery.`,
];

const rightPoints = [
    `Our proprietary document processing pipeline employs advanced neural network architecture specifically calibrated for complex clinical notation, converting diverse document types—from handwritten prescriptions and intricate pathology reports to multi-page prior authorization requests—into semantically-rich digital assets. The system's machine learning algorithms have been meticulously trained on millions of medical documents to recognize specialized terminologies across all medical subspecialties, from complex pharmacogenomic prescribing patterns to oncological staging protocols.`,
    `The BluDMS™ cognitive intelligence layer automatically extracts and contextualizes critical data elements within the SNOMED-CT, ICD-10, and CPT frameworks while maintaining hierarchical relationships between diagnoses, interventions, and outcomes. This sophisticated medical ontology integration enables unprecedented search precision—allowing clinicians to instantly retrieve documentation based on specific pathophysiological processes rather than mere lexical patterns.`,
    `With its advanced document verification capabilities, BluDMS™ proactively identifies medication reconciliation discrepancies, contradictory diagnostic conclusions, and documentation gaps—flagging potential clinical errors before they impact on patient care. This intelligent quality assurance mechanism dramatically reduces adverse events while ensuring comprehensive regulatory compliance with HIPAA, HITECH, and emerging interoperability standards.`,
    `BluDMS™ seamlessly integrates with existing EMR infrastructure through standards-based FHIR and HL7 interfaces, creating a unified clinical information environment that extends from point-of-care documentation to administrative workflow management. The system's modular architecture enables phased implementation with minimal disruption to clinical operations while providing immediate efficiency gains through automated document processing.`,
    `By transforming document management from a mere administrative function into an integral component of the clinical decision support ecosystem, BluDMS™ represents the convergence of medical informatics excellence and cutting-edge artificial intelligence—fundamentally enhancing both the operational efficiency and clinical efficacy of healthcare delivery.`,
];

const topCards = [
    {
        title: "Document Capture",
        subtitle: "Scanning Integration · Batch Processing · Multi-format Ingestion",
        icon: <DocumentScannerOutlinedIcon />,
        accent: "#1B4DFF",
    },
    {
        title: "Document Analysis",
        subtitle: "Field Extraction · Medical Coding · Clinical Summarization",
        icon: <ManageSearchOutlinedIcon />,
        accent: "#7C3AED",
    },
    {
        title: "Clinical Workflow",
        subtitle: "Approval Routing · Task Management · Consent Management",
        icon: <AccountTreeOutlinedIcon />,
        accent: "#0EA5A4",
    },
    {
        title: "System Integration",
        subtitle: "EMR Connectivity · FHIR/HL7 Support · Pharmacy/Lab Links",
        icon: <HubOutlinedIcon />,
        accent: "#F59E0B",
    },
];

const heroBadges = [
    "OCR ENGINE",
    "CLINICAL NLP",
    "FHIR/HL7",
    "HIPAA-COMPLIANT",
];

const stackStrip = [
    { icon: <StorageIcon />, label: "Cloud Storage" },
    { icon: <AutoAwesomeIcon />, label: "PostgreSQL" },
    { icon: <ManageSearchOutlinedIcon />, label: "Elasticsearch" },
    { icon: <DocumentScannerOutlinedIcon />, label: "HIPAA Encryption" },
];

/* ============================================================
   MAIN COMPONENT
   ============================================================ */

export default function BluDMSClient() {
    return (
        <>
            {/* ================= HERO ================= */}
            <Box
                sx={{
                    position: "relative",
                    py: { xs: 8, md: 12 },
                    bgcolor: "#F7F9FF",
                    overflow: "hidden",
                }}
            >
                {/* Dotted background */}
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
                {/* Soft fade */}
                <Box
                    sx={{
                        position: "absolute",
                        inset: 0,
                        background:
                            "linear-gradient(180deg, rgba(247,249,255,0.85) 0%, rgba(247,249,255,0.95) 55%, rgba(247,249,255,1) 100%)",
                        pointerEvents: "none",
                    }}
                />

                <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
                    {/* ─── Split grid: text left, image right ─── */}
                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: { xs: "1fr", md: "1.05fr 1fr" },
                            alignItems: "center",
                            gap: { xs: 5, md: 0 },
                            mb: { xs: 6, md: 8 },
                        }}
                    >
                        {/* LEFT — Text (FIRST on all screens) */}
                        <Box
                            sx={{
                                minWidth: 0,
                                textAlign: { xs: "center", md: "left" },
                                order: { xs: 1, md: 1 },
                                mb: { xs: 4, md: 0 },
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
                                    BluDMS™ Healthcare
                                </Typography>
                            </Box>

                            {/* Headline */}
                            <Typography
                                sx={{
                                    fontSize: { xs: "2rem", sm: "2.5rem", md: "3.5rem" },
                                    fontWeight: 900,
                                    color: "#07122C",
                                    lineHeight: 1.1,
                                    letterSpacing: "-0.02em",
                                    maxWidth: 620,
                                    mx: { xs: "auto", md: 0 },
                                }}
                            >
                                Document Intelligence{" "}
                                <Box
                                    component="span"
                                    sx={{
                                        background: "#1B4DFF",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                    }}
                                >
                                    Engine
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
                                    lineHeight: 1.7,
                                }}
                            >
                                Secure storage infrastructure that transforms medical documentation
                                into structured, searchable, semantically-rich clinical intelligence.
                            </Typography>

                            {/* Small trust row */}
                            <Stack
                                direction="row"
                                alignItems="center"
                                spacing={2}
                                sx={{
                                    mt: 4,
                                    flexWrap: "wrap",
                                    gap: 1.5,
                                    justifyContent: { xs: "center", md: "flex-start" },
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
                        </Box>

                        {/* RIGHT — Image (SECOND on all screens) */}
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
                                {/* Soft blue glow behind image */}
                                <Box
                                    sx={{
                                        position: "absolute",
                                        inset: -30,
                                        borderRadius: "50%",
                                        background:
                                            "radial-gradient(circle, rgba(27,77,255,0.16) 0%, transparent 70%)",
                                        filter: "blur(30px)",
                                        zIndex: 0,
                                    }}
                                />

                                <Image
                                    src="/hero-dms.webp"
                                    alt="BluDMS Document Intelligence"
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
                        {topCards.map((card) => (
                            <FeatureCard
                                key={card.title}
                                icon={card.icon}
                                title={card.title}
                                subtitle={card.subtitle}
                                accent={card.accent}
                            />
                        ))}
                    </Box>

                    {/* ─── Stack strip ─── */}
                    <Box
                        sx={{
                            mt: { xs: 5, md: 7 },
                            pt: 4,
                            borderTop: "1px solid rgba(27,77,255,0.08)",
                            display: "grid",
                            gridTemplateColumns: {
                                xs: "repeat(2,1fr)",
                                md: "repeat(4,1fr)",
                            },
                            gap: 2,
                        }}
                    >
                        {stackStrip.map((s) => (
                            <Paper
                                key={s.label}
                                elevation={0}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 1.4,
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
                                        "& svg": { fontSize: 22 },
                                    }}
                                >
                                    {s.icon}
                                </Box>
                                <Typography
                                    sx={{ fontSize: 12.5, fontWeight: 800, color: "#07122C" }}
                                >
                                    {s.label}
                                </Typography>
                            </Paper>
                        ))}
                    </Box>
                </Container>
            </Box>

            {/* ================= ABOUT ================= */}
            <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "#fff" }}>
                <Container maxWidth="xl">
                    {/* Center header */}
                    <Box textAlign="center" mb={{ xs: 5, md: 7 }}>
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
                            About BluDMS™
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: { xs: "1.8rem", md: "3.2rem" },
                                fontWeight: 900,
                                color: "#07122C",
                                lineHeight: 1.15,
                                letterSpacing: "-0.02em",
                            }}
                        >
                            Document Intelligence Engine
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
                            OCR · LLM · Clinical NLP · Medical Ontology Integration
                        </Typography>
                        <Typography
                            sx={{
                                mt: 1,
                                fontSize: { xs: 13, md: 14 },
                                color: "rgba(7,18,44,0.5)",
                            }}
                        >
                            Transform Medical Documentation into Clinical Intelligence
                        </Typography>
                    </Box>

                    {/* Two column */}
                    <Stack
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
                                    Revolutionizing Healthcare Document Intelligence
                                </Typography>
                            </Stack>

                            <Typography
                                sx={{
                                    fontSize: { xs: "0.94rem", md: "0.98rem" },
                                    lineHeight: 1.85,
                                    color: "rgba(7,18,44,0.7)",
                                    mb: 3,
                                }}
                            >
                                BluDMS™ represents the pinnacle of clinical document
                                architecture innovation—a sophisticated medical document
                                ecosystem that transcends traditional information management
                                paradigms through the seamless integration of artificial
                                intelligence and advanced natural language processing. This
                                revolutionary platform eliminates the cognitive burden of
                                document management that historically plagues healthcare
                                professionals, transforming unstructured clinical documentation
                                into actionable medical intelligence.
                            </Typography>

                            <Stack spacing={2.2}>
                                {leftPoints.map((text, idx) => (
                                    <PointItem key={idx} text={text} />
                                ))}
                            </Stack>
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
                                    Transforming Healthcare Documentation into Clinical
                                    Intelligence
                                </Typography>
                            </Stack>

                            <Typography
                                sx={{
                                    fontSize: { xs: "0.94rem", md: "0.98rem" },
                                    lineHeight: 1.85,
                                    color: "rgba(7,18,44,0.7)",
                                    mb: 3,
                                }}
                            >
                                BluDMS™ elevates healthcare document management beyond
                                conventional paradigms through its sophisticated integration
                                of medical artificial intelligence and clinical natural
                                language processing. This groundbreaking platform addresses the
                                fundamental documentation challenges confronting modern
                                healthcare enterprises—transforming fragmented, unstructured
                                documentation into a cohesive knowledge ecosystem that enhances
                                diagnostic precision, treatment efficacy, and administrative
                                efficiency.
                            </Typography>

                            <Stack spacing={2.2}>
                                {rightPoints.map((text, idx) => (
                                    <PointItem key={idx} text={text} />
                                ))}
                            </Stack>
                        </Box>
                    </Stack>
                </Container>
            </Box>
        </>
    );
}

/* ============================================================
   SUB-COMPONENTS
   ============================================================ */

function PointItem({ text }) {
    return (
        <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
            <Box
                sx={{
                    width: 34,
                    display: "flex",
                    justifyContent: "center",
                    flexShrink: 0,
                    pt: "2px",
                }}
            >
                <Box
                    sx={{
                        width: 22,
                        height: 22,
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        bgcolor: "#fff",
                    }}
                >
                    <CheckCircleIcon
                        className="!text-[#1b4dff]"
                        sx={{ fontSize: 15, color: "#1b4dff" }}
                    />
                </Box>
            </Box>

            <Typography
                sx={{
                    fontSize: { xs: 14.5, md: 16 },
                    lineHeight: 1.9,
                    color: "rgba(7,18,44,0.78)",
                    whiteSpace: "pre-line",
                    flex: 1,
                }}
            >
                {text.trim()}
            </Typography>
        </Box>
    );
}

function FeatureCard({ icon, title, subtitle, accent = "#1B4DFF" }) {
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
                {React.cloneElement(icon, { sx: { fontSize: 24 } })}
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
                {subtitle}
            </Typography>
        </Paper>
    );
}