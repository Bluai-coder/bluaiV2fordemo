"use client";

import { Box, Container, Typography, Paper } from "@mui/material";
import Image from "next/image";

export default function DistributorFormSection() {

    return (
        <Box
            sx={{
                position: "relative",
                background:
                    "linear-gradient(180deg, #3d2dce 0%, #3f679b 40%, #ffffff 100%)",
                py: { xs: 8, md: 12 },
                overflow: "hidden",
            }}
        >
            <Container maxWidth="lg">
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: { xs: 6, md: 10 },
                        flexDirection: { xs: "column", md: "row" },
                    }}
                >
                    {/* ================= LEFT : PRODUCT IMAGES ================= */}
                    <Box
                        sx={{
                            position: "relative",
                            width: { xs: "100%", md: 520 },
                            height: 420,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        {/* Back Image */}
                        <Box
                            sx={{
                                position: "absolute",
                                left: 0,
                                top: 60,
                                width: 260,
                                height: 320,
                                borderRadius: 3,
                                background: "#fff",
                                boxShadow: "0 30px 80px rgba(15,23,42,0.25)",
                                p: 2,
                            }}
                        >
                            <Image
                                src="/vitals-chair-enquiry/chairone.jpg" // replace
                                alt="VitalsChair"
                                fill
                                style={{ objectFit: "contain" }}
                            />
                        </Box>

                        {/* Front Image */}
                        <Box
                            sx={{
                                position: "absolute",
                                right: 0,
                                top: 0,
                                width: 300,
                                height: 360,
                                borderRadius: 3,
                                background: "#fff",
                                boxShadow: "0 40px 90px rgba(15,23,42,0.3)",
                                p: 2,
                                zIndex: 2,
                            }}
                        >
                            <Image
                                src="/vitals-chair-enquiry/chairtwo.jpg" // replace
                                alt="VitalsChair"
                                fill
                                style={{ objectFit: "contain" }}
                            />
                        </Box>
                    </Box>

                    {/* ================= RIGHT : FORM ================= */}
                    <Box
                        sx={{
                            width: "100%",
                            maxWidth: 520,
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: 14,
                                fontWeight: 700,
                                color: "#1B4DFF",
                                mb: 1,
                            }}
                        >
                            Submit Your Details
                        </Typography>

                        <Paper
                            elevation={0}
                            sx={{
                                borderRadius: 3,
                                overflow: "hidden",
                                boxShadow: "0 25px 80px rgba(15,23,42,0.18)",
                                backgroundColor: "#fff",
                            }}
                        >
                            {/* Embedded Form */}
                            <Box
                                component="iframe"
                                src="https://docs.google.com/forms/d/e/1FAIpQLSccnsFMV6Q6tJtu6bGGwHjAiOMYf5B36txIXNHn7GpPML5lKQ/viewform?embedded=true" sx={{
                                    width: "100%",
                                    height: 640,
                                    border: "none",
                                }}
                            />
                        </Paper>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}
