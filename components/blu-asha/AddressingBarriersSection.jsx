"use client";

import React from "react";
import {
    Box,
    Container,
    Typography,
    Paper,
    Stack,
    Divider,
} from "@mui/material";

import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";
import TrackChangesOutlinedIcon from "@mui/icons-material/TrackChangesOutlined";
import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const challenges = [
    {
        title: "Paper-Based\nInefficiency",
        desc:
            "ASHA workers spend 40% of their time on manual record-keeping and reporting, reducing time available for actual healthcare delivery. Critical health data gets lost, delayed, or becomes illegible.",
        icon: <HandshakeOutlinedIcon sx={{ fontSize: 26 }} />,
    },
    {
        title: "Connectivity\nChallenges",
        desc:
            "Rural areas lack reliable internet connectivity, making digital health systems unusable when workers need them most. Existing solutions fail when connectivity is poor or absent.",
        icon: <CurrencyRupeeOutlinedIcon sx={{ fontSize: 26 }} />,
    },
    {
        title: "Fragmented Data\nSystems",
        desc:
            "Multiple disconnected systems create data silos. Health officials lack real-time visibility into field activities, making it impossible to provide timely support or accurate reporting.",
        icon: <TrackChangesOutlinedIcon sx={{ fontSize: 26 }} />,
    },
    {
        title: "Overwhelming\nCaseloads",
        desc:
            "Each ASHA worker manages 2,000–4,000 beneficiaries across multiple villages, making it difficult to track individual health needs, schedule follow-ups, and ensure comprehensive care.",
        icon: <HeadsetMicOutlinedIcon sx={{ fontSize: 26 }} />,
    },
];

const stats = [
    { value: "1M+", label: "ASHA Workers Nationwide" },
    { value: "900M+", label: "Rural Population Served" },
    { value: "100%", label: "Offline Capability" },
];

function MiniCheckPoint({ text }) {
    return (
        <Stack direction="row" spacing={1.2} alignItems="flex-start">
            <CheckCircleIcon
                sx={{
                    fontSize: 18,
                    color: "#1B4DFF",
                    mt: "3px",
                }}
            />
            <Typography
                sx={{
                    fontSize: 13.5,
                    lineHeight: 1.75,
                    color: "rgba(7,18,44,0.72)",
                }}
            >
                {text}
            </Typography>
        </Stack>
    );
}

export default function AddressingBarriersSection() {
    return (
        <Box
            sx={{
                py: { xs: 6, md: 10 },
                bgcolor: "#F6F8FF",
            }}
        >
            <Container maxWidth="lg">
                {/* Title */}
                <Stack spacing={1.2} textAlign="center" alignItems="center" mb={6}>
                    <Typography
                        sx={{
                            fontSize: 14,
                            fontWeight: 700,
                            color: "#1B4DFF",
                            letterSpacing: 0.2,
                        }}
                    >
                        The Challenge

                    </Typography>
                    <Typography
                        sx={{
                            fontWeight: 900,
                            fontSize: { xs: 26, sm: 32, md: 40 },
                            lineHeight: 1.2,
                            color: "#07122C",
                            letterSpacing: -0.5,
                        }}
                    >
                        Addressing Barriers in Rural <br />
                        Health Delivery
                    </Typography>

                    <Typography
                        sx={{
                            maxWidth: 780,
                            fontSize: 13.8,
                            lineHeight: 1.7,
                            color: "rgba(7,18,44,0.55)",
                        }}
                    >
                        ASHA workers face critical barriers that limit their effectiveness in delivering
                        healthcare to India’s rural communities
                    </Typography>
                </Stack>

                {/* Top Cards */}
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: {
                            xs: "1fr",
                            sm: "repeat(2, 1fr)",
                            md: "repeat(4, 1fr)",
                        },
                        gap: 2.4,
                    }}
                >
                    {challenges.map((item) => (
                        <Paper
                            key={item.title}
                            elevation={0}
                            sx={{
                                p: 2.4,
                                borderRadius: 4,
                                bgcolor: "#fff",
                                border: "1px solid rgba(227,232,255,0.9)",
                                boxShadow: "0 18px 48px rgba(15, 23, 42, 0.06)",
                                transition: "0.25s ease",
                                "&:hover": {
                                    transform: "translateY(-6px)",
                                    boxShadow: "0 28px 70px rgba(15,23,42,0.10)",
                                    borderColor: "rgba(27,77,255,0.35)",
                                },
                            }}
                        >
                            {/* Icon */}
                            <Box
                                sx={{
                                    width: 44,
                                    height: 44,
                                    borderRadius: 3,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "#1B4DFF",
                                    bgcolor: "rgba(27,77,255,0.10)",
                                    border: "1px solid rgba(27,77,255,0.18)",
                                    mb: 1.8,
                                }}
                            >
                                {item.icon}
                            </Box>

                            <Typography
                                sx={{
                                    fontWeight: 900,
                                    fontSize: 15.5,
                                    color: "#07122C",
                                    lineHeight: 1.2,
                                    whiteSpace: "pre-line",
                                    mb: 1.2,
                                }}
                            >
                                {item.title}
                            </Typography>

                            <Typography
                                sx={{
                                    fontSize: 13,
                                    lineHeight: 1.75,
                                    color: "rgba(7,18,44,0.62)",
                                }}
                            >
                                {item.desc}
                            </Typography>
                        </Paper>
                    ))}
                </Box>

                {/* Stats Strip */}
                <Paper
                    elevation={0}
                    sx={{
                        mt: { xs: 4, md: 5 },
                        p: { xs: 2.2, md: 2.5 },
                        borderRadius: 4,
                        bgcolor: "#fff",
                        border: "1px solid rgba(227,232,255,0.95)",
                        boxShadow: "0 18px 60px rgba(15,23,42,0.06)",
                    }}
                >
                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" },
                            gap: 2,
                            alignItems: "center",
                        }}
                    >
                        {stats.map((s, i) => (
                            <Box
                                key={s.label}
                                sx={{
                                    px: { xs: 1.5, md: 2 },
                                    py: 1.6,
                                    borderRadius: 3,
                                    bgcolor: "rgba(27,77,255,0.04)",
                                    border: "1px solid rgba(27,77,255,0.10)",
                                    textAlign: { xs: "left", sm: "center" },
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontWeight: 950,
                                        fontSize: 18,
                                        color: "#0B2FD6",
                                        mb: 0.4,
                                    }}
                                >
                                    {s.value}
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: 13,
                                        color: "rgba(7,18,44,0.7)",
                                        fontWeight: 600,
                                    }}
                                >
                                    {s.label}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </Paper>

                {/* Bottom Grid */}
                <Box
                    sx={{
                        mt: { xs: 4, md: 5 },
                        display: "grid",
                        gridTemplateColumns: { xs: "1fr", md: "1.15fr 0.85fr" },
                        gap: 3,
                    }}
                >
                    {/* Left Big Card */}
                    <Paper
                        elevation={0}
                        sx={{
                            p: { xs: 2.5, md: 3.2 },
                            borderRadius: 5,
                            bgcolor: "#fff",
                            border: "1px solid rgba(227,232,255,0.95)",
                            boxShadow: "0 20px 65px rgba(15,23,42,0.07)",
                        }}
                    >
                        <Typography
                            sx={{
                                fontWeight: 900,
                                fontSize: 14.5,
                                color: "#0B2FD6",
                                mb: 1,
                            }}
                        >
                            Offline-First Mobile App
                        </Typography>

                        <Typography
                            sx={{
                                fontSize: 13.5,
                                lineHeight: 1.75,
                                color: "rgba(7,18,44,0.62)",
                                mb: 2,
                                maxWidth: 620,
                            }}
                        >
                            Complete functionality without internet connection. Smart synchronization
                            when connectivity returns.
                        </Typography>

                        <Stack spacing={1.2} mb={3}>
                            <MiniCheckPoint text="Works 100% offline" />
                            <MiniCheckPoint text="Intelligent data sync" />
                            <MiniCheckPoint text="Battery optimized" />
                            <MiniCheckPoint text="Low-end device support" />
                        </Stack>

                        <Typography
                            sx={{
                                fontWeight: 900,
                                fontSize: 14.5,
                                color: "#0B2FD6",
                                mb: 1,
                            }}
                        >
                            Comprehensive Beneficiary Management
                        </Typography>

                        <Typography
                            sx={{
                                fontSize: 13.5,
                                lineHeight: 1.75,
                                color: "rgba(7,18,44,0.62)",
                                mb: 2,
                            }}
                        >
                            Streamlined tracking of all assigned beneficiaries with smart categorization
                            and quick access tools.
                        </Typography>

                        <Stack spacing={1.2}>
                            <MiniCheckPoint text="Assigned beneficiary lists" />
                            <MiniCheckPoint text="Favorites and recent access" />
                            <MiniCheckPoint text="Family relationship mapping" />
                            <MiniCheckPoint text="Health status tracking" />
                        </Stack>
                    </Paper>

                    {/* Right Impact Card */}
                    <Paper
                        elevation={0}
                        sx={{
                            p: { xs: 2.5, md: 3.2 },
                            borderRadius: 5,
                            bgcolor: "#fff",
                            border: "1px solid rgba(227,232,255,0.95)",
                            boxShadow: "0 20px 65px rgba(15,23,42,0.07)",
                        }}
                    >
                        <Typography
                            sx={{
                                fontWeight: 900,
                                fontSize: 14.5,
                                color: "#0B2FD6",
                                mb: 2,
                            }}
                        >
                            The Real Impact of These Challenges
                        </Typography>

                        {/* Replace image path below */}
                        <Box
                            component="img"
                            src="/blu-asha/impact.png"
                            alt="Impact"
                            sx={{
                                width: "100%",
                                height: "auto",
                                borderRadius: 4,
                                border: "1px solid rgba(227,232,255,0.9)",
                                mb: 2.2,
                            }}
                        />

                        <Box
                            sx={{
                                display: "grid",
                                gridTemplateColumns: "repeat(2, 1fr)",
                                gap: 1.4,
                                mb: 1.4,
                            }}
                        >
                            <Paper
                                elevation={0}
                                sx={{
                                    p: 1.6,
                                    borderRadius: 3,
                                    border: "1px solid rgba(227,232,255,0.95)",
                                    bgcolor: "rgba(27,77,255,0.035)",
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontWeight: 950,
                                        fontSize: 18,
                                        color: "#0B2FD6",
                                    }}
                                >
                                    60%
                                </Typography>
                                <Typography sx={{ fontSize: 13, color: "rgba(7,18,44,0.68)" }}>
                                    Missed Follow-ups
                                </Typography>
                            </Paper>

                            <Paper
                                elevation={0}
                                sx={{
                                    p: 1.6,
                                    borderRadius: 3,
                                    border: "1px solid rgba(227,232,255,0.95)",
                                    bgcolor: "rgba(27,77,255,0.035)",
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontWeight: 950,
                                        fontSize: 18,
                                        color: "#0B2FD6",
                                    }}
                                >
                                    70%
                                </Typography>
                                <Typography sx={{ fontSize: 13, color: "rgba(7,18,44,0.68)" }}>
                                    Delayed Reporting
                                </Typography>
                            </Paper>
                        </Box>

                        <Paper
                            elevation={0}
                            sx={{
                                p: 1.6,
                                borderRadius: 3,
                                border: "1px solid rgba(227,232,255,0.95)",
                                bgcolor: "rgba(27,77,255,0.035)",
                                textAlign: "center",
                            }}
                        >
                            <Typography sx={{ fontWeight: 950, fontSize: 18, color: "#0B2FD6" }}>
                                80%
                            </Typography>
                            <Typography sx={{ fontSize: 13, color: "rgba(7,18,44,0.68)" }}>
                                Data Inaccuracy
                            </Typography>
                        </Paper>
                    </Paper>
                </Box>
            </Container>
        </Box>
    );
}
