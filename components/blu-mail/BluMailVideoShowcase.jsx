"use client";

import React, { useRef, useState } from "react";
import { Box, Container, IconButton, Typography } from "@mui/material";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";

export default function BluMailVideoShowcase() {
    const videoRef = useRef(null);
    const [started, setStarted] = useState(false);

    //  Your video path (must be inside /public)
    const videoSrc = "/blu-mail/demo-screen.mp4";

    const handlePlay = async () => {
        try {
            setStarted(true);
            await videoRef.current?.play();
        } catch (err) {
            console.log("Video play blocked by browser:", err);
        }
    };

    return (
        <Box
            sx={{
                py: { xs: 6, md: 10 },
                bgcolor: "#fff",
            }}
        >
            <Container maxWidth="xl">
                {/* Optional heading */}
                <Box sx={{ textAlign: "center", mb: { xs: 3, md: 4 } }}>
                    <Typography
                        sx={{
                            fontWeight: 950,
                            fontSize: { xs: 22, sm: 28, md: 34 },
                            color: "#07122C",
                            letterSpacing: -0.5,
                        }}
                    >
                        BluMail™ Product Walkthrough
                    </Typography>
                    <Typography
                        sx={{
                            mt: 1,
                            fontSize: { xs: 13.5, sm: 14.5 },
                            color: "rgba(7,18,44,0.62)",
                            maxWidth: 760,
                            mx: "auto",
                            lineHeight: 1.7,
                        }}
                    >
                        Experience the dashboard, workflow rules, analytics, and how users are redirected to
                        a custom webpage.
                    </Typography>
                </Box>

                {/*  Gradient Frame */}
                <Box
                    sx={{
                        position: "relative",
                        width: "100%",
                        maxWidth: 1180,
                        mx: "auto",
                        borderRadius: { xs: 4, md: 6 },
                        boxShadow: "0 40px 120px rgba(15,23,42,0.22)",
                    }}
                >
                    {/* Inner Dark Video Card */}
                    <Box
                        sx={{
                            position: "relative",
                            borderRadius: { xs: 3.2, md: 5 },
                            overflow: "hidden",
                            bgcolor: "#070C14",
                            border: "1px solid rgba(255,255,255,0.10)",
                        }}
                    >
                        <video
                            src="/blu-mail/demo-screen.mp4"
                            autoPlay
                            muted
                            loop
                            playsInline
                            controls
                            preload="metadata"
                            style={{
                                width: "100%",
                                height: "auto",
                                display: "block",
                                background: "#000",
                            }}
                        />
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}
