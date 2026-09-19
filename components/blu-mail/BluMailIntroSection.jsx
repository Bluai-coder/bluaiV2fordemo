"use client";

import React from "react";
import { Box, Container, Grid, Paper, Stack, Typography, Divider } from "@mui/material";

import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import BoltRoundedIcon from "@mui/icons-material/BoltRounded";
import RuleRoundedIcon from "@mui/icons-material/RuleRounded";
import ShieldRoundedIcon from "@mui/icons-material/ShieldRounded";
import InsightsRoundedIcon from "@mui/icons-material/InsightsRounded";

const features = [
    {
        icon: <BoltRoundedIcon sx={{ fontSize: 22 }} />,
        title: "Instant Automation",
        desc: "Reduce repetitive inbox work with AI-driven workflows.",
    },
    {
        icon: <RuleRoundedIcon sx={{ fontSize: 22 }} />,
        title: "Workflow Rules",
        desc: "Create rules in everyday language. BluMail handles the actions.",
    },
    {
        icon: <InsightsRoundedIcon sx={{ fontSize: 22 }} />,
        title: "Analytics Dashboard",
        desc: "Track performance, response time, and workload efficiency.",
    },
    {
        icon: <ShieldRoundedIcon sx={{ fontSize: 22 }} />,
        title: "Enterprise Ready",
        desc: "Maintain consistent communication standards across teams.",
    },
];

export default function BluMailPremiumSection() {
    return (
        <Box
            sx={{
                position: "relative",
                py: { xs: 7, md: 11 },
                overflow: "hidden",
                bgcolor: "#fff",
            }}
        >
            {/*  Premium background (clean + subtle) */}
            <Box
                sx={{
                    position: "absolute",
                    inset: 0,
                    background:
                        "radial-gradient(800px 520px at 18% 20%, rgba(27,77,255,0.10), transparent 60%), radial-gradient(900px 600px at 88% 30%, rgba(27,77,255,0.08), transparent 55%), linear-gradient(180deg, #ffffff 0%, #f8faff 100%)",
                }}
            />

            <Container maxWidth="lg" sx={{ position: "relative" }}>
                <Grid
                    container
                    spacing={{ xs: 4, md: 7 }}
                    alignItems="center"
                    justifyContent="center" //  center whole grid row
                    sx={{ textAlign: { xs: "center", md: "center" } }} //  center text
                >
                    {/* ================= LEFT CONTENT ================= */}
                    <Grid item xs={12} md={10} lg={9}>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center", //  center everything inside
                                justifyContent: "center",
                                width: "100%",
                            }}
                        >
                        

                            {/* Title */}
                            <Typography
                                sx={{
                                    mt: 2.2,
                                    fontWeight: 950,
                                    color: "#07122C",
                                    fontSize: { xs: "2rem", sm: "2.4rem", md: "3.1rem" },
                                    lineHeight: 1.08,
                                    letterSpacing: -0.8,
                                    textAlign: "center",
                                }}
                            >
                                BluMail™
                            </Typography>

                            {/* Description 1 */}
                            <Typography
                                sx={{
                                    mt: 2.2,
                                    fontSize: { xs: 14.2, sm: 15.4 },
                                    lineHeight: 1.95,
                                    color: "rgba(7,18,44,0.68)",
                                    maxWidth: 1250,
                                    textAlign: "center",
                                }}
                            >
                                BluMail(TM) is an AI-powered email automation system that transforms how
                                professionals handle their inbox. Built with React and Django, it uses
                                artificial intelligence to understand, respond to, and organize emails
                                according to your specific workflow needs. With its intuitive dashboard
                                and Google authentication, BluMail(TM) helps you reclaim valuable time by
                                automating routine email tasks while maintaining the human touch in your
                                communications.
                            </Typography>

                            {/* Divider */}
                            <Divider
                                sx={{
                                    my: 3.2,
                                    width: "100%",
                                    maxWidth: 1250,
                                    borderColor: "rgba(15,23,42,0.10)",
                                }}
                            />

                            {/* Description 2 */}
                            <Typography
                                sx={{
                                    fontSize: { xs: 14.0, sm: 15.2 },
                                    lineHeight: 1.95,
                                    color: "rgba(7,18,44,0.62)",
                                    maxWidth: 1250,
                                    textAlign: "center",
                                }}
                            >
                                The platform allows you to create workflow rules using everyday language,
                                which the system translates into precise actions like identifying specific
                                senders, generating appropriate response drafts, and applying
                                organizational labels. BluMail(TM)'s comprehensive features include a
                                unified inbox view, performance analytics dashboard, and user management
                                capabilities that ensure consistent communication standards across your
                                organization. By automating repetitive email processes, BluMail positions
                                your team as responsive and organized while freeing you to focus on
                                meaningful engagement.
                            </Typography>
                        </Box>
                    </Grid>

                </Grid>
            </Container>

        </Box>
    );
}
