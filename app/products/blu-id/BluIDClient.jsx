
"use client";

import React from "react";
import {
    Box,
    Container,
    Paper,
    Stack,
    Typography,
    Button,
} from "@mui/material";

import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AssuredWorkloadIcon from "@mui/icons-material/AssuredWorkload";
import DomainIcon from "@mui/icons-material/Domain";
import LocalPharmacyIcon from "@mui/icons-material/LocalPharmacy";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import GroupIcon from "@mui/icons-material/Group";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ShieldIcon from "@mui/icons-material/Shield";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import Image from "next/image";
import SecurityIcon from "@mui/icons-material/Security";
import { CheckCircleIcon, VerifiedIcon } from "lucide-react";

/* ============================================================
   DATA
   ============================================================ */

const leftPoints = [
    `In today's fragmented healthcare landscape, critical medical information is scattered across multiple systems, leading to redundant testing, medication errors, and delayed care. BluID™ addresses these challenges by creating a single source of truth for your complete health profile. With 30 distinct biomedical identifiers consolidated under your unique BluID™, healthcare providers gain immediate access to vital information—from allergies and medication histories to previous diagnoses and treatment protocols—enabling precision medicine tailored to your specific physiological needs.`,
    `BluID™'s hierarchical access management system enables primary cardholders to oversee the medical information of dependents under 18 and elderly family members, with seamless transfer of control upon adulthood. This integrated approach to family health management ensures continuity of care across generations while maintaining appropriate boundaries of medical privacy and autonomy as individuals mature.`,
    `The QR-enabled mobile application securely stores your BluID™ locally on your device, putting your complete medical history literally at your fingertips. This portable solution facilitates friction less information exchange during healthcare encounters, eliminating the need for repetitive intake forms and reducing administrative burden. The system's integration with ABHA (Ayushman Bharat Health Account) and national social security infrastructures ensures regulatory compliance while expanding interoperability across the healthcare ecosystem.`,
    `BluID™'s value proposition extends beyond convenience to enhanced clinical outcomes through comprehensive medical record integration. By providing clinicians with immediate access to laboratory values, imaging reports, medication reconciliation, and previous interventions, BluID™ minimizes diagnostic errors and adverse drug events while optimizing therapeutic decision-making. The system's integration with insurance platforms further streamlines claims processing, prior authorizations, and benefits verification—reducing administrative costs while improving the patient financial experience.`,
    `In an era of increasing healthcare complexity, BluID™ represents the cornerstone of patient-centered care by allowing individuals to truly manage their health, their way. One number. One identity. Complete medical transparency under your control.`,
];

const rightPoints = [
    `The clinical implications of BluID™ are profound and far-reaching. By consolidating 30 distinct biomedical identifiers into a single digital profile, healthcare providers gain immediate access to critical patient information that dramatically enhances diagnostic accuracy and treatment efficacy. In emergency situations, where minutes matter, BluID™ enables rapid access to vital patient data—allergies, current medications, comorbidities, and previous adverse reactions—potentially making the difference between life-threatening complications and optimal outcomes. The system's capacity to integrate laboratory values, diagnostic imaging, and historical treatment protocols minimizes redundant testing and iatrogenic harm while maximizing therapeutic precision.`,
    `From a healthcare economics perspective, BluID™ addresses the significant challenges of administrative waste and duplicative services that currently plague healthcare systems globally. The implementation of this universal identifier creates substantial opportunities for cost containment through streamlined registration processes, automated insurance verification, and simplified claims adjudication. The resulting decrease in administrative burden allows healthcare professionals to redirect their focus toward meaningful patient engagement and clinical excellence rather than documentation and bureaucratic processes.`,
    `What truly distinguishes BluID™ is its hierarchical access management architecture that balances individual autonomy with family care coordination. Primary cardholders maintain oversight of dependent profiles—whether minor children or elderly parents—while establishing granular permission controls that protect sensitive information. This elegant solution acknowledges the reality that healthcare often involves family support networks while preserving appropriate boundaries of medical privacy and personal agency.`,
    `In an increasingly digital healthcare landscape, BluID™ represents not just technological innovation but a philosophical commitment to patient empowerment. One identifier. Complete medical transparency. Your health, your way.`,
];

const topCards = [
    {
        title: "Hospitals, Clinics, Physicians",
        subtitle: "Labs, Imaging, Testing Centers",
        icon: <LocalHospitalIcon />,
    },
    {
        title: "Healthcare Providers",
        subtitle: "Hospitals, Clinics, Physicians",
        icon: <FavoriteBorderIcon />,
    },
    {
        title: "Insurance Providers",
        subtitle: "Claims, Benefits, Coverage",
        icon: <AssuredWorkloadIcon />,
    },
    {
        title: "Government Integration",
        subtitle: "ABHA, Social Security, National ID",
        icon: <DomainIcon />,
    },
    {
        title: "Pharmacy Services",
        subtitle: "Medications, Prescriptions",
        icon: <LocalPharmacyIcon />,
    },
];

const bottomCards = [
    {
        title: "Patient Controls",
        subtitle: "Manage, Share, Control Access",
        icon: <FactCheckIcon />,
    },
    {
        title: "Family Management",
        subtitle: "Children, Elderly, Dependents",
        icon: <GroupIcon />,
    },
    {
        title: "Security Features",
        subtitle: "Encryption, Consent Management",
        icon: <SecurityIcon />,
    },
];

const heroBadges = [
    "14-DIGIT UNIQUE ID",
    "ABDM READY",
    "SECURE",
    "INTEROPERABLE",
];

const featureStrip = [
    {
        icon: <FingerprintIcon />,
        title: "One Identity",
        subtitle: "14-digit universal medical ID",
    },
];



export default function BluIDClient() {
    return (
        <>
            {/* ============ HERO ============ */}
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

                <Container maxWidth="xl" sx={{ position: "relative" }}>
                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: { xs: "1fr", md: "1.1fr 1fr" },
                            gap: { xs: 5, md: 0 },
                            alignItems: "center",
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
                                    fontSize: { xs: 36, md: 52 },
                                    fontWeight: 900,
                                    color: "#07122C",
                                    lineHeight: 1.05,
                                    letterSpacing: "-0.02em",
                                }}
                            >
                                BluID™
                                <br />
                                <Box
                                    component="span"
                                    sx={{ color: "#1B4DFF", fontWeight: 800 }}
                                >
                                    Your Unified Medical Identity.
                                </Box>
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
                                A 14-digit unique bio-medical identifier that consolidates
                                your complete medical profile in one secure digital location —
                                empowering you with unprecedented control over your health
                                data across the entire healthcare ecosystem.
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

                        {/* RIGHT — BluID image */}
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: { xs: "center", md: "flex-end" },
                                alignItems: "center",
                                width: "100%",
                                minWidth: 0, // 👈 lets it shrink inside a grid/flex parent
                            }}
                        >
                            <Box
                                sx={{
                                    position: "relative",
                                    width: "100%",
                                    maxWidth: { xs: 340, sm: 460, md: 560, lg: 720 },
                                    aspectRatio: { xs: "4 / 3", sm: "16 / 11", md: "16 / 11" },
                                    mx: "auto",
                                }}
                            >

                                {/* Inner white card */}
                                <Box
                                    sx={{
                                        position: "relative",
                                        width: "100%",
                                        height: "100%",
                                        borderRadius: "calc(20px - 1.5px)",
                                        overflow: "hidden",
                                        background:
                                            "linear-gradient(180deg, #FFFFFF 0%, #F7FAFF 100%)",
                                    }}
                                >
                                    <Image
                                        src="/bluid.png"
                                        alt="BluID — Unified Medical Identity"
                                        fill
                                        sizes="(max-width: 600px) 90vw, (max-width: 900px) 460px, (max-width: 1200px) 560px, 680px"
                                        style={{
                                            objectFit: "cover",
                                            objectPosition: "center",
                                        }}
                                        priority
                                    />

                                    {/* Soft bottom fade for optional caption overlay */}
                                    <Box
                                        sx={{
                                            position: "absolute",
                                            left: 0,
                                            right: 0,
                                            bottom: 0,
                                            height: "35%",
                                            background:
                                                "linear-gradient(180deg, rgba(11,28,61,0) 0%, rgba(11,28,61,0.35) 100%)",
                                            pointerEvents: "none",
                                        }}
                                    />

                                    {/* Optional caption */}
                                    <Box
                                        sx={{
                                            position: "absolute",
                                            left: { xs: 14, md: 20 },
                                            bottom: { xs: 14, md: 20 },
                                            right: { xs: 14, md: 20 },
                                        }}
                                    >

                                        <Typography
                                            sx={{
                                                fontWeight: 900,
                                                fontSize: { xs: 16, md: 20 },
                                                color: "#fff",
                                                lineHeight: 1.2,
                                                mt: 0.3,
                                            }}
                                        >
                                            Your Unified Medical Identity
                                        </Typography>
                                    </Box>
                                </Box>

                            </Box>
                        </Box>
                    </Box>

                    {/* Feature strip */}
                    <Box
                        sx={{
                            mt: { xs: 4, md: 0 },
                            pt: 4,
                            //   borderTop: "1px solid rgba(27,77,255,0.07)",
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

            {/* ============ ECOSYSTEM GRID ============ */}
            <Box sx={{ py: { xs: 7, md: 10 }, bgcolor: "#fff" }}>
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
                            BluID™ Ecosystem
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: { xs: "1.8rem", md: "2.4rem" },
                                fontWeight: 900,
                                color: "#07122C",
                                lineHeight: 1.15,
                            }}
                        >
                            One Identity. Everywhere It Matters.
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
                            BluID™ connects every stakeholder in your healthcare journey —
                            from hospitals and labs to insurers and pharmacies — under a
                            single, secure identifier.
                        </Typography>
                    </Box>

                    {/* TOP ROW */}
                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: {
                                xs: "1fr",
                                sm: "repeat(2,1fr)",
                                md: "repeat(5,1fr)",
                            },
                            gap: { xs: 2, md: 2.5 },
                        }}
                    >
                        {topCards.map((card) => (
                            <EcosystemCard
                                key={card.title}
                                title={card.title}
                                subtitle={card.subtitle}
                                icon={card.icon}
                            />
                        ))}
                    </Box>

                    {/* BOTTOM ROW */}
                    <Box
                        sx={{
                            mt: { xs: 3, md: 4 },
                            display: "grid",
                            gridTemplateColumns: {
                                xs: "1fr",
                                sm: "repeat(2,1fr)",
                                md: "repeat(3,1fr)",
                            },
                            gap: { xs: 2, md: 2.5 },
                        }}
                    >
                        {bottomCards.map((card) => (
                            <EcosystemCard
                                key={card.title}
                                title={card.title}
                                subtitle={card.subtitle}
                                icon={card.icon}
                                size="large"
                            />
                        ))}
                    </Box>
                </Container>
            </Box>

            {/* ============ ABOUT ============ */}
            <Box sx={{ py: { xs: 7, md: 11 }, bgcolor: "#F7F9FF" }}>
                <Container id="read-more-section" maxWidth="xl">
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
                            About BluID
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: { xs: "1.8rem", md: "2.2rem" },
                                fontWeight: 950,
                                color: "#07122C",
                                lineHeight: 1.1,
                            }}
                        >
                            About Us
                        </Typography>
                    </Box>

                    <Stack
                        direction={{ xs: "column", md: "row" }}
                        spacing={{ xs: 4.5, md: 7 }}
                        alignItems="flex-start"
                    >
                        {/* LEFT COLUMN */}
                        <Box sx={{ flex: 1, minWidth: 0 }}>
                            <Typography
                                sx={{
                                    fontWeight: 900,
                                    fontSize: { xs: "1.15rem", md: "1.3rem" },
                                    color: "#0B2FD6",
                                    mb: 1.2,
                                }}
                            >
                                BluID™: Your Unified Medical Identity
                            </Typography>

                            <Typography
                                sx={{
                                    fontSize: 16,
                                    lineHeight: 1.85,
                                    color: "rgba(7,18,44,0.70)",
                                    mb: 2.6,
                                }}
                            >
                                BluID™ is a revolutionary 14-digit unique bio-medical
                                identifier that transforms healthcare management by
                                centralizing your complete medical profile in one secure
                                digital location. This unified medical identity system empowers
                                patients with unprecedented control over their health data
                                while streamlining healthcare delivery across the entire
                                ecosystem of providers, laboratories, and insurers.
                            </Typography>

                            <Stack spacing={2.2}>
                                {leftPoints.map((text, idx) => (
                                    <PointItem key={idx} text={text} />
                                ))}
                            </Stack>
                        </Box>

                        {/* RIGHT COLUMN */}
                        <Box sx={{ flex: 1, minWidth: 0 }}>
                            <Typography
                                sx={{
                                    fontWeight: 900,
                                    fontSize: { xs: "1.15rem", md: "1.3rem" },
                                    color: "#0B2FD6",
                                    mb: 1.2,
                                }}
                            >
                                BluID™: Revolutionizing Healthcare Through Digital Identity
                                Integration
                            </Typography>

                            <Typography
                                sx={{
                                    fontSize: 16,
                                    lineHeight: 1.85,
                                    color: "rgba(7,18,44,0.70)",
                                    mb: 2.6,
                                }}
                            >
                                BluID™ represents a paradigm shift in healthcare information
                                management—a comprehensive solution that addresses the
                                fundamental challenges of data fragmentation and accessibility
                                in modern healthcare systems. This 14-digit unique identifier
                                serves as the cornerstone of a patient-centric healthcare
                                ecosystem, empowering individuals to maintain complete
                                ownership of their medical journey while facilitating seamless
                                information exchange across the care continuum.
                            </Typography>

                            <Stack spacing={2.2}>
                                {rightPoints.map((text, idx) => (
                                    <PointItem key={idx} text={text} />
                                ))}
                            </Stack>
                        </Box>
                    </Stack>

                    <Box textAlign="center" mt={6}>
                        <Typography
                            sx={{
                                fontWeight: 900,
                                fontSize: { xs: "1.15rem", md: "1.3rem" },
                                color: "#0B2FD6",
                            }}
                        >
                            One Number. One Identity. Complete Medical Transparency.
                        </Typography>
                    </Box>
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
            {/* Fixed icon column */}
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

            {/* Text column */}
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

function EcosystemCard({ icon, title, subtitle, size = "small" }) {
    const isLarge = size === "large";

    return (
        <Paper
            elevation={0}
            sx={{
                width: "100%",
                minHeight: isLarge ? 150 : 170,
                borderRadius: 3,
                bgcolor: "rgba(255,255,255,0.78)",
                border: "1px solid rgba(227,232,255,0.95)",
                boxShadow: "0 18px 55px rgba(15,23,42,0.10)",
                textAlign: "center",
                px: { xs: 2.2, md: 2.4 },
                py: { xs: 3, md: 3.3 },
                transition: "0.25s ease",
                backdropFilter: "blur(14px)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                "&:hover": {
                    transform: "translateY(-6px)",
                    borderColor: "rgba(27,77,255,0.35)",
                    boxShadow: "0 30px 85px rgba(27,77,255,0.14)",
                },
            }}
        >
            {/* icon */}
            <Box
                sx={{
                    width: isLarge ? 52 : 46,
                    height: isLarge ? 52 : 46,
                    mx: "auto",
                    mb: 2,
                    borderRadius: 3,
                    bgcolor: "rgba(27,77,255,0.10)",
                    border: "1px solid rgba(27,77,255,0.14)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#1B4DFF",
                }}
            >
                {React.cloneElement(icon, { sx: { fontSize: isLarge ? 26 : 22 } })}
            </Box>

            <Typography
                sx={{
                    fontWeight: 900,
                    fontSize: isLarge ? 15 : 14.2,
                    color: "#07122C",
                    lineHeight: 1.25,
                }}
            >
                {title}
            </Typography>

            <Typography
                sx={{
                    mt: 1,
                    fontSize: 12.8,
                    color: "rgba(7,18,44,0.55)",
                    lineHeight: 1.5,
                }}
            >
                {subtitle}
            </Typography>
        </Paper>
    );
}