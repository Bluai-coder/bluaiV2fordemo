"use client";
import React from "react";
import { Box, Container, Paper, Stack, Typography } from "@mui/material";
import DocumentScannerOutlinedIcon from "@mui/icons-material/DocumentScannerOutlined"; // Document Capture
import ManageSearchOutlinedIcon from "@mui/icons-material/ManageSearchOutlined";       // Document Analysis
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";         // Clinical Workflow
import HubOutlinedIcon from "@mui/icons-material/HubOutlined";                         // System Integration
import { CheckCircleIcon } from "lucide-react";


const leftPoints = [
    `Our proprietary document processing pipeline employs state-of-the-art optical character recognition algorithms specifically calibrated for complex clinical notation, transforming even the most challenging handwritten prescriptions, intricate pathology reports, and multi-page prior authorization requests into structured, semantically-rich digital assets. The system's neural network architecture has been meticulously trained on millions of medical documents to recognize specialized nomenclature across all medical subspecialties—from oncological staging protocols to complex pharmacogenomic prescribing patterns.
`,
    `BluDMS™ leverages advanced machine learning algorithms to create a cognitive augmentation layer that automatically extracts SNOMED-CT, ICD-10, and CPT-coded clinical concepts while maintaining hierarchical relationships between diagnoses, interventions, and outcomes. This sophisticated medical ontology integration enables unprecedented search precision—allowing clinicians to instantly retrieve all documentation related to specific pathophysiological processes rather than merely matching lexical terms.
`,
    `The platform's document intelligence engine identifies and contextualizes critical clinical data elements including medication reconciliation discrepancies, contradictory diagnostic conclusions, and incomplete documentation patterns—flagging potential medical errors before they impact on patient care. This proactive quality assurance mechanism dramatically reduces adverse events while ensuring comprehensive regulatory compliance with HIPAA, HITECH, and emerging interoperability standards.
`,
    `BluDMS™ represents the convergence of medical informatics excellence and cutting-edge artificial intelligence—where document management transcends simple storage and retrieval to become an integral component of the clinical decision support ecosystem. The result is a transformative platform that not only streamlines administrative workflows but fundamentally enhances the precision and efficacy of healthcare delivery.
`

]

const rightPoints = [
    `Our proprietary document processing pipeline employs advanced neural network architecture specifically calibrated for complex clinical notation, converting diverse document types—from handwritten prescriptions and intricate pathology reports to multi-page prior authorization requests—into semantically-rich digital assets. The system's machine learning algorithms have been meticulously trained on millions of medical documents to recognize specialized terminologies across all medical subspecialties, from complex pharmacogenomic prescribing patterns to oncological staging protocols.
`,
    `The BluDMS™ cognitive intelligence layer automatically extracts and contextualizes critical data elements within the SNOMED-CT, ICD-10, and CPT frameworks while maintaining hierarchical relationships between diagnoses, interventions, and outcomes. This sophisticated medical ontology integration enables unprecedented search precision—allowing clinicians to instantly retrieve documentation based on specific pathophysiological processes rather than mere lexical patterns.
`,
    `With its advanced document verification capabilities, BluDMS™ proactively identifies medication reconciliation discrepancies, contradictory diagnostic conclusions, and documentation gaps—flagging potential clinical errors before they impact on patient care. This intelligent quality assurance mechanism dramatically reduces adverse events while ensuring comprehensive regulatory compliance with HIPAA, HITECH, and emerging interoperability standards.
`,
    `BluDMS™ seamlessly integrates with existing EMR infrastructure through standards-based FHIR and HL7 interfaces, creating a unified clinical information environment that extends from point-of-care documentation to administrative workflow management. The system's modular architecture enables phased implementation with minimal disruption to clinical operations while providing immediate efficiency gains through automated document processing.
`,
    `By transforming document management from a mere administrative function into an integral component of the clinical decision support ecosystem, BluDMS™ represents the convergence of medical informatics excellence and cutting-edge artificial intelligence—fundamentally enhancing both the operational efficiency and clinical efficacy of healthcare delivery.
`
]



export default function BluDMSClient() {
    const topCards = [
        {
            title: "Document Capture",
            subtitle: "Scanning Integration Batch Processing Multi-format Ingestion",
            icon: <DocumentScannerOutlinedIcon />,
        },
        {
            title: "Document Analysis",
            subtitle: "Field Extraction Medical Coding Clinical Summarization",
            icon: <ManageSearchOutlinedIcon />,
        },
        {
            title: "Clinical Workflow",
            subtitle: "Approval Routing Task Management Consent Management",
            icon: <AccountTreeOutlinedIcon />,
        },
        {
            title: "System Integration",
            subtitle: "EMR Connectivity FHIR/HL7 Support Pharmacy/Lab Links",
            icon: <HubOutlinedIcon />,
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
                        BluDMS™ Healthcare
                    </Typography>

                    <Typography
                        sx={{
                            mt: 1,
                            fontSize: { xs: 18, md: 22 },
                            fontWeight: 500,
                            color: "#1B4DFF",
                        }}
                    >
                        Secure Storage Infrastructure

                    </Typography>

                    <Typography
                        sx={{
                            mt: 0.7,
                            fontSize: 15,
                            color: "rgba(7,18,44,0.55)",
                        }}
                    >
                        Cloud Storage · PostgreSQL · Elasticsearch · HIPAA Compliant Encryption

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

                    <Typography
                        sx={{
                            mt: 1,
                            fontSize: { xs: 18, md: 22 },
                            fontWeight: 500,
                            color: "#1B4DFF",
                        }}
                    >
                        Document Intelligence Engine

                    </Typography>
                    <Typography
                        sx={{
                            mt: 0.7,
                            fontSize: { xs: 16, md: 18 },
                            fontWeight: "200 !important",
                            color: "#1B4DFF",
                        }}
                    >
                        OCR · LLM · Clinical NLP · Medical Ontology Integration


                    </Typography>

                    <Typography
                        sx={{
                            mt: 0.7,
                            fontSize: 15,
                            color: "rgba(7,18,44,0.55)",
                        }}
                    >
                        "Transform Medical Documentation into Clinical Intelligence"



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
                            BluDMS™: Revolutionizing Healthcare Document Intelligence

                        </Typography>

                        <Typography
                            sx={{
                                fontSize: 16,
                                lineHeight: 1.85,
                                color: "rgba(7,18,44,0.70)",
                                mb: 2.6,
                            }}
                        >
                            BluDMS™ represents the pinnacle of clinical document architecture innovation—a sophisticated medical document ecosystem that transcends traditional information management paradigms through the seamless integration of artificial intelligence and advanced natural language processing. This revolutionary platform eliminates the cognitive burden of document management that historically plagues healthcare professionals, transforming unstructured clinical documentation into actionable medical intelligence.

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
                            BluDMS™: Transforming Healthcare Documentation into Clinical Intelligence
                        </Typography>

                        <Typography
                            sx={{
                                fontSize: 16,
                                lineHeight: 1.85,
                                color: "rgba(7,18,44,0.70)",
                                mb: 2.6,
                            }}
                        >
                            BluDMS™ elevates healthcare document management beyond conventional paradigms through its sophisticated integration of medical artificial intelligence and clinical natural language processing. This groundbreaking platform addresses the fundamental documentation challenges confronting modern healthcare enterprises—transforming fragmented, unstructured documentation into a cohesive knowledge ecosystem that enhances diagnostic precision, treatment efficacy, and administrative efficiency.                        </Typography>

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
