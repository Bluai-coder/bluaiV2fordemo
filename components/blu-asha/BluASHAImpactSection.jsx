"use client";

import React, { useState } from "react";
import {
    Box,
    Container,
    Typography,
    Paper,
    Stack,
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from "@mui/material";

import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";

const stats = [
    {
        value: "85%",
        desc: "Reduction in administrative time, allowing more focus on patient care",
    },
    {
        value: "95%",
        desc: "Improvement in data accuracy and completeness for better decision-making",
    },
    {
        value: "60%",
        desc: "Faster response time to health emergencies and follow-up care",
    },
];

export default function BluASHAImpactSection() {
    const [expanded, setExpanded] = useState("panel1");

    return (
        <Box
            sx={{
                py: { xs: 6, md: 10 },
                bgcolor: "#F4F7FC",
            }}
        >
            <Container maxWidth="lg">
                {/* ---------- TOP TEXT ---------- */}
                <Stack spacing={1} textAlign="center" alignItems="center" mb={5}>
                    <Typography
                        sx={{
                            fontSize: 14,
                            fontWeight: 700,
                            color: "#1B4DFF",
                        }}
                    >
                        Transforming Healthcare Delivery
                    </Typography>

                    <Typography
                        sx={{
                            fontSize: 13.5,
                            color: "rgba(7,18,44,0.55)",
                            maxWidth: 720,
                            lineHeight: 1.8,
                        }}
                    >
                        BluASHA Portal is more than software—it’s a catalyst for improving health outcomes
                        across rural India.
                    </Typography>
                </Stack>

                {/* ---------- STATS CARDS ---------- */}
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: {
                            xs: "1fr",
                            sm: "repeat(2, 1fr)",
                            md: "repeat(3, 1fr)",
                        },
                        gap: { xs: 2, md: 3 },
                        mb: { xs: 6, md: 9 },
                    }}
                >
                    {stats.map((item, index) => (
                        <CutCornerCard
                            key={index}
                            value={item.value}
                            desc={item.desc}
                            active={index === 0} //  first card active
                        />
                    ))}
                </Box>

                {/* ---------- BOTTOM CTA + ACCORDION + IMAGE ---------- */}
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: { xs: "1fr", md: "1.05fr 0.95fr" },
                        gap: { xs: 4, md: 5 },
                        alignItems: "center",
                    }}
                >
                    {/* LEFT SIDE */}
                    <Box>
                        <Typography
                            sx={{
                                fontSize: { xs: 20, md: 22 },
                                fontWeight: 800,
                                color: "#1B4DFF",
                                mb: 0.6,
                            }}
                        >
                            Ready to Transform Rural Healthcare?
                        </Typography>

                        <Typography
                            sx={{
                                fontSize: 13.5,
                                lineHeight: 1.75,
                                color: "rgba(7,18,44,0.6)",
                                maxWidth: 520,
                                mb: 3,
                            }}
                        >
                            Join us in empowering ASHA workers with the tools they need to deliver exceptional
                            healthcare to every rural community
                        </Typography>

                        {/* ACCORDION BLOCK */}
                        <Paper
                            elevation={0}
                            sx={{
                                borderRadius: 3,
                                overflow: "hidden",
                                border: "1px solid rgba(227,232,255,0.95)",
                                boxShadow: "0 18px 60px rgba(15,23,42,0.06)",
                                bgcolor: "#fff",
                            }}
                        >
                            <Accordion
                                expanded={expanded === "panel1"}
                                onChange={() =>
                                    setExpanded((prev) => (prev === "panel1" ? false : "panel1"))
                                }
                                disableGutters
                                elevation={0}
                                sx={{
                                    "&:before": { display: "none" },
                                    borderBottom: "1px solid rgba(227,232,255,0.65)",
                                }}
                            >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreRoundedIcon />}
                                     sx={{
                                            fontWeight: 800,
                                            fontSize: 14,
                                            color: "#1B4DFF",
                                        }}
                                >
                                    <Typography sx={{ fontWeight: 800, fontSize: 14.2 }}>
                                        Explore BluASHA™ in Action
                                    </Typography>
                                </AccordionSummary>

                                <AccordionDetails sx={{ px: 2.5, py: 2.1 }}>
                                    <Typography
                                        sx={{
                                            fontSize: 13.2,
                                            lineHeight: 1.75,
                                            color: "rgba(7,18,44,0.65)",
                                        }}
                                    >
                                        See how our platform works with a hands-on product demo.

                                    </Typography>
                                </AccordionDetails>
                            </Accordion>

                            <Accordion
                                expanded={expanded === "panel2"}
                                onChange={() =>
                                    setExpanded((prev) => (prev === "panel2" ? false : "panel2"))
                                }
                                disableGutters
                                elevation={0}
                                sx={{
                                    "&:before": { display: "none" },
                                }}
                            >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreRoundedIcon />}
                                    sx={{
                                        px: 2.5,
                                        py: 1.6,
                                        bgcolor: "#fff",
                                        "& .MuiAccordionSummary-content": { margin: 0 },
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontWeight: 800,
                                            fontSize: 14,
                                            color: "#1B4DFF",
                                        }}
                                    >
                                        Let’s Talk About Your Needs
                                    </Typography>
                                </AccordionSummary>

                                <AccordionDetails sx={{ px: 2.5, py: 2.1 }}>
                                    <Typography
                                        sx={{
                                            fontSize: 13.2,
                                            lineHeight: 1.75,
                                            color: "rgba(7,18,44,0.65)",
                                        }}
                                    >
                                        Book a consultation to discuss how BluASHA™ can support your BluASHA goals.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </Paper>
                    </Box>

                    {/* RIGHT SIDE IMAGE */}
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: { xs: "center", md: "flex-end" },
                        }}
                    >
                        <Box
                            component="img"
                            src="/blu-asha/hero-asha-2.png" //  your illustration
                            alt="BluASHA Team"
                            sx={{
                                width: "100%",
                                maxWidth: { xs: 380, md: 520 },
                                height: "auto",
                                objectFit: "contain",
                                filter: "drop-shadow(0 40px 90px rgba(15,23,42,0.18))",
                            }}
                        />
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

/* ------------------------------------------
   Premium Cut Corner Card Component
------------------------------------------ */

function CutCornerCard({ value, desc, active = false }) {
    return (
        <Paper
            elevation={0}
            sx={{
                position: "relative",
                p: 3,
                borderRadius: 3,
                overflow: "hidden",
                cursor: "pointer",
                minHeight: 140,

                bgcolor: "#3A55D6",
                border: active ? "1px solid #3A55D6" : "1px solid rgba(227,232,255,0.95)",

                boxShadow: active
                    ? "0 22px 70px rgba(58,85,214,0.22)"
                    : "0 22px 70px rgba(15,23,42,0.06)",

                transition: "all 0.35s ease",
                "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: active
                        ? "0 26px 80px rgba(58,85,214,0.26)"
                        : "0 26px 80px rgba(15,23,42,0.10)",
                },
            }}
        >


            {/*  CONTENT */}
            <Box sx={{ position: "relative", zIndex: 3 }}>
                <Typography
                    sx={{
                        fontSize: 34,
                        fontWeight: 900,
                        letterSpacing: "-0.8px",
                        color: "#FFFFFF", //  FIXED
                    }}
                >
                    {value}
                </Typography>

                <Typography
                    sx={{
                        mt: 1.1,
                        fontSize: 13.2,
                        lineHeight: 1.8,
                        maxWidth: 320,
                        color: "rgba(255,255,255,0.92)", //  FIXED
                    }}
                >
                    {desc}
                </Typography>
            </Box>
        </Paper>
    );
}

