"use client";

import React from "react";
import { Box, Container, Paper, Stack, Typography } from "@mui/material";

import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AssuredWorkloadIcon from "@mui/icons-material/AssuredWorkload";
import DomainIcon from "@mui/icons-material/Domain";
import LocalPharmacyIcon from "@mui/icons-material/LocalPharmacy";

import FactCheckIcon from "@mui/icons-material/FactCheck";
import GroupIcon from "@mui/icons-material/Group";
import SecurityIcon from "@mui/icons-material/Security";
import { CheckCircleIcon } from "lucide-react";


const leftPoints = [
    `In today's fragmented healthcare landscape, critical medical information is scattered across multiple systems, leading to redundant testing, medication errors, and delayed care. BluID™ addresses these challenges by creating a single source of truth for your complete health profile. With 30 distinct biomedical identifiers consolidated under your unique BluID™, healthcare providers gain immediate access to vital information—from allergies and medication histories to previous diagnoses and treatment protocols—enabling precision medicine tailored to your specific physiological needs.`,
    `BluID™'s hierarchical access management system enables primary cardholders to oversee the medical information of dependents under 18 and elderly family members, with seamless transfer of control upon adulthood. This integrated approach to family health management ensures continuity of care across generations while maintaining appropriate boundaries of medical privacy and autonomy as individuals mature.`,
    `
The QR-enabled mobile application securely stores your BluID™ locally on your device, putting your complete medical history literally at your fingertips. This portable solution facilitates friction less information exchange during healthcare encounters, eliminating the need for repetitive intake forms and reducing administrative burden. The system's integration with ABHA (Ayushman Bharat Health Account) and national social security infrastructures ensures regulatory compliance while expanding interoperability across the healthcare ecosystem.`,

    `
BluID™'s value proposition extends beyond convenience to enhanced clinical outcomes through comprehensive medical record integration. By providing clinicians with immediate access to laboratory values, imaging reports, medication reconciliation, and previous interventions, BluID™ minimizes diagnostic errors and adverse drug events while optimizing therapeutic decision-making. The system's integration with insurance platforms further streamlines claims processing, prior authorizations, and benefits verification—reducing administrative costs while improving the patient financial experience.`,
    `
In an era of increasing healthcare complexity, BluID™ represents the cornerstone of patient-centered care by allowing individuals to truly manage their health, their way. One number. One identity. Complete medical transparency under your control.`  ];

const rightPoints = [
    `The clinical implications of BluID™ are profound and far-reaching. By consolidating 30 distinct biomedical identifiers into a single digital profile, healthcare providers gain immediate access to critical patient information that dramatically enhances diagnostic accuracy and treatment efficacy. In emergency situations, where minutes matter, BluID™ enables rapid access to vital patient data—allergies, current medications, comorbidities, and previous adverse reactions—potentially making the difference between life-threatening complications and optimal outcomes. The system's capacity to integrate laboratory values, diagnostic imaging, and historical treatment protocols minimizes redundant testing and iatrogenic harm while maximizing therapeutic precision.`,
    `From a healthcare economics perspective, BluID™ addresses the significant challenges of administrative waste and duplicative services that currently plague healthcare systems globally. The implementation of this universal identifier creates substantial opportunities for cost containment through streamlined registration processes, automated insurance verification, and simplified claims adjudication. The resulting decrease in administrative burden allows healthcare professionals to redirect their focus toward meaningful patient engagement and clinical excellence rather than documentation and bureaucratic processes.`,
    `
What truly distinguishes BluID™ is its hierarchical access management architecture that balances individual autonomy with family care coordination. Primary cardholders maintain oversight of dependent profiles—whether minor children or elderly parents—while establishing granular permission controls that protect sensitive information. This elegant solution acknowledges the reality that healthcare often involves family support networks while preserving appropriate boundaries of medical privacy and personal agency.`,

    `
In an increasingly digital healthcare landscape, BluID™ represents not just technological innovation but a philosophical commitment to patient empowerment. One identifier. Complete medical transparency. Your health, your way.`,
];



export default function BluIDClient() {
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




    function PointItem({ text }) {
        return (
            <Box
                sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 2,
                }}
            >
                {/*  Fixed icon column (always aligned) */}
                <Box
                    sx={{
                        width: 34,              // fixed column width
                        display: "flex",
                        justifyContent: "center",
                        flexShrink: 0,
                        pt: "2px",              // aligns icon with first text line
                    }}
                >
                    <Box
                        sx={{
                            width: 22,
                            height: 22,
                            borderRadius: "50%",
                            // border: "2px solid rgba(7,18,44,0.35)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            bgcolor: "#fff",
                        }}
                    >
                        <CheckCircleIcon className="!text-[#1b4dff]" sx={{ fontSize: 15, color: "#1b4dff" }} />
                    </Box>
                </Box>

                {/*  Text column */}
                <Typography
                    sx={{
                        fontSize: 16,
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





    return (<>
        <Box
            sx={{
                position: "relative",
                py: { xs: 7, md: 11 },
                bgcolor: "#F7F9FF",
                overflow: "hidden",
            }}
        >


            {/*  Very light tech background */}
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

            {/*  Soft overlay fade to match screenshot */}
            <Box
                sx={{
                    position: "absolute",
                    inset: 0,
                    background:
                        "linear-gradient(180deg, rgba(247,249,255,0.8) 0%, rgba(247,249,255,0.95) 55%, rgba(247,249,255,1) 100%)",
                    pointerEvents: "none",
                }}
            />

            <Container maxWidth="lg" sx={{ position: "relative" }}>
                {/*  Title */}
                <Box textAlign="center" mb={{ xs: 4, md: 6 }}>
                    <Typography
                        sx={{
                            fontSize: { xs: "2rem", md: "2.6rem" },
                            fontWeight: 950,
                            color: "#07122C",
                            lineHeight: 1.1,
                        }}
                    >
                        BluID™
                    </Typography>

                    <Typography
                        sx={{
                            mt: 1,
                            fontSize: { xs: 18, md: 22 },
                            fontWeight: 500,
                            color: "#1B4DFF",
                        }}
                    >
                        Healthcare Ecosystem
                    </Typography>

                    <Typography
                        sx={{
                            mt: 0.7,
                            fontSize: 15,
                            color: "rgba(7,18,44,0.55)",
                        }}
                    >
                        14-digit Unique Identifier
                    </Typography>
                </Box>

                {/*  TOP ROW (5 cards) */}
                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: { xs: 2, md: 2.5 },
                        justifyContent: "center",
                    }}
                >
                    {topCards.map((card) => (
                        <EcosystemCard
                            key={card.title}
                            title={card.title}
                            subtitle={card.subtitle}
                            icon={card.icon}
                            size="small"
                        />
                    ))}
                </Box>

                {/*  BOTTOM ROW (3 large cards) */}
                <Box
                    sx={{
                        mt: { xs: 3, md: 4 },
                        display: "flex",
                        flexWrap: "wrap",
                        gap: { xs: 2, md: 2.5 },
                        justifyContent: "center",
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
        {/* about section */}
        <Box sx={{ py: { xs: 7, md: 11 }, bgcolor: "#fff" }}>
            <Container maxWidth="lg">
                {/*  Center Title */}
                <Box textAlign="center" mb={{ xs: 4, md: 6 }}>
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

                {/*  2 Columns (No Grid) */}
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
                            BluID™ is a revolutionary 14-digit unique bio-medical identifier that transforms healthcare management by centralizing your complete medical profile in one secure digital location. This unified medical identity system empowers patients with unprecedented control over their health data while streamlining healthcare delivery across the entire ecosystem of providers, laboratories, and insurers.
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
                            BluID™: Revolutionizing Healthcare Through Digital Identity Integration
                        </Typography>

                        <Typography
                            sx={{
                                fontSize: 16,
                                lineHeight: 1.85,
                                color: "rgba(7,18,44,0.70)",
                                mb: 2.6,
                            }}
                        >
                            BluID™ represents a paradigm shift in healthcare information management—a comprehensive solution that addresses the fundamental challenges of data fragmentation and accessibility in modern healthcare systems. This 14-digit unique identifier serves as the cornerstone of a patient-centric healthcare ecosystem, empowering individuals to maintain complete ownership of their medical journey while facilitating seamless information exchange across the care continuum.
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

/* ---------------- Card Component ---------------- */

function EcosystemCard({ icon, title, subtitle, size = "small" }) {
    const isLarge = size === "large";

    return (
        <Paper
            elevation={0}
            sx={{
                width: {
                    xs: "100%",
                    sm: isLarge ? "calc(50% - 10px)" : "calc(50% - 10px)",
                    md: isLarge ? "calc(33.33% - 14px)" : "calc(20% - 16px)",
                },
                minWidth: { md: isLarge ? 260 : 190 },
                borderRadius: 3,
                bgcolor: "rgba(255,255,255,0.78)",
                border: "1px solid rgba(227,232,255,0.95)",
                boxShadow: "0 18px 55px rgba(15,23,42,0.10)",
                textAlign: "center",
                px: { xs: 2.2, md: 2.4 },
                py: { xs: 3, md: 3.3 },
                transition: "0.25s ease",
                backdropFilter: "blur(14px)",
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
                    width: 46,
                    height: 46,
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
                {React.cloneElement(icon, { sx: { fontSize: 22 } })}
            </Box>

            <Typography
                sx={{
                    fontWeight: 900,
                    fontSize: 14.2,
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
