"use client";

import {
    Box,
    Container,
    Typography,
    Stack,
    useMediaQuery,
} from "@mui/material";
import Image from "next/image";
;
import { useMemo } from "react";
import { getTheme } from "../../theme";
import InvestorForm from "../../components/InvestorForm";

export default function Investor() {

    const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

    const theme = useMemo(
        () => getTheme(prefersDarkMode ? "dark" : "light"),
        [prefersDarkMode]
    );
    const isDark = theme.palette.mode == "dark";

    return (
        <Box>
            <Box
                sx={{
                    position: "relative",
                    width: "100%",
                    minHeight: {
                        xs: "40vh",   // mobile
                        sm: "50vh",
                        md: "50vh",  // desktop
                    },
                    overflow: "hidden",
                }}
            >
                {/* Background Image */}
                <Image
                    src="/investor/investor-form.avif"
                    alt="Hero background"
                    fill
                    priority
                    sizes="100vw"
                    style={{
                        objectFit: "cover",
                    }}
                />

                {/* Dark Overlay */}
                <Box
                    sx={{
                        position: "absolute",
                        inset: 0,
                        background:
                            "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55))",
                        zIndex: 1,
                    }}
                />

                {/* Content */}
                <Box
                    sx={{
                        position: "relative",
                        zIndex: 2,
                        minHeight: "inherit",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                        px: { xs: 2, sm: 3 },
                        color: isDark ? "#ffffff" : "#0f172a",
                    }}
                >



                    <Typography
                        sx={{
                            color: isDark ? "#ffffff" : "#0f172a",
                            fontWeight: 800,
                            fontSize: { xs: 36, sm: 46, md: 56 },
                            letterSpacing: "-0.02em",
                        }}
                    >
                        <Box component="span" className="!text-[#1b4dff]" color="text.primary">
                            BluAI  {" "}
                        </Box>

                        <Box component="span" className="!text-white" color="primary.main">
                            Inc.
                        </Box>
                    </Typography>
                    <Typography
                        sx={{
                            fontWeight: 400,
                            fontSize: { xs: 18, sm: 28, md: 36 },
                            letterSpacing: "-0.02em",
                        }}
                    >
                        <Box component="span" className="!text-[#fff]" color="">
                            Revolutionizing Healthcare Access Across The Globe
                        </Box>
                    </Typography>


                   
                </Box>


            </Box>

            <Container maxWidth="lg">

                {/* HEADER BADGE */}
                <Stack spacing={2} alignItems="center" textAlign="center" mt={4} mb={{ xs: 4, md: 6 }}>





                    <Typography
                        sx={{
                            fontWeight: 950,
                            color: isDark ? "#ffffff" : "#0f172a",
                            fontSize: { xs: "1.7rem", md: "2.4rem" },
                            lineHeight: 1.12,
                            maxWidth: 960,
                        }}
                    >
                        BluAI: Revolutionizing Healthcare Through Medical Data Intelligence

                    </Typography>

                    <Typography
                        sx={{
                            maxWidth: 960,
                            color: isDark ? "#ffffff" : "#0f172a",
                            fontSize: 14.5,
                            lineHeight: 1.85,
                        }}
                    >
                        BluAI is a medical data company that solves healthcare's critical interoperability challenge. Our proprietary platform aggregates fragmented patient data from multiple sources—EHRs, imaging systems, and medical devices—into a unified, actionable intelligence layer. Built on open standards (FHIR, HL7, DICOM) with enterprise-grade security, our cloud-native architecture reduces implementation costs by 70% while delivering real-time data access across the care continuum.

                    </Typography>
                    <Typography
                        sx={{
                            maxWidth: 960,
                            color: isDark ? "#ffffff" : "#0f172a",
                            fontSize: 14.5,
                            lineHeight: 1.85,
                        }}
                    >
                        We transform siloed medical records into a comprehensive patient data ecosystem, enabling providers to make better clinical decisions faster while giving patients seamless access to their complete health history. By eliminating data fragmentation through our proprietary medical device equipment (MDE) and intelligent orchestration layer, BluAI empowers healthcare organizations to improve outcomes, reduce costs, and deliver truly connected care.
                    </Typography>
                </Stack>

                {/* PREMIUM WRAPPER */}

                {/* LEFT CONTENT */}

                {/* RIGHT IMAGE */}




                {/* <InvestorEnquiryForm /> */}
                <InvestorForm/>

            </Container>

        </Box>
    );
}
