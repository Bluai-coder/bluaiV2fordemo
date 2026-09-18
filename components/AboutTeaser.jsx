"use client"
import { Box, Typography, Button, Container } from "@mui/material";
import ArrowForward from "@mui/icons-material/ArrowForward";
import { useRouter } from "next/navigation";
const AboutTeaser = () => {

    const router = useRouter()
    return (
        <Box
            component="section"
            sx={{
                width: "100%",
                py: { xs: 5, md: 7 },
                px: { xs: 2, sm: 3, md: 4 },
                boxSizing: "border-box",
            }}
        >
            <Container maxWidth="xl" >
                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: { xs: 3, md: 6 },
                        alignItems: "center",
                        //   maxWidth: 1200,
                        mx: "auto",
                    }}
                >



                    {/* ---------- Left: image ---------- */}
                    <Box sx={{ flex: { xs: "1 1 100%", md: "1 1 40%" }, minWidth: 0 }}>
                        <Box
                            sx={{
                                borderRadius: 3,
                                overflow: "hidden",
                                // aspectRatio: { xs: "16/10", md: "4/3" },
                                background: "#E2E8F0",
                            }}
                        >
                            <Box
                                component="img"
                                src="/about-teaser.png"
                                alt="About BluAI"
                                sx={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    display: "block",
                                }}
                            />
                        </Box>
                    </Box>

                    {/* ---------- Right: text ---------- */}
                    <Box sx={{ display: "flex-1", minWidth: 0 }}>
                        {/* Label with dot */}
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 1,
                                mb: 2,
                            }}
                        >
                            <Box
                                sx={{
                                    width: 8,
                                    height: 8,
                                    borderRadius: "2px",
                                    background: "#1b4dff",
                                    flexShrink: 0,
                                }}
                            />
                            <Typography
                                sx={{
                                    fontSize: 12,
                                    fontWeight: 700,
                                    letterSpacing: 1.8,
                                    color: "#94A3B8",
                                    textTransform: "uppercase",
                                }}
                            >
                                About Us
                            </Typography>
                        </Box>

                        {/* Heading */}
                        <Typography
                            sx={{
                                fontSize: { xs: 34, sm: 42, md: 52 },
                                fontWeight: 900,
                                lineHeight: 1.1,
                                color: "black",
                                mb: 2.5,
                                letterSpacing: "-0.02em",
                            }}
                        >
                            Transforming
                            <Box component="span" sx={{ color: "#1b4dff", display: "block" }}>
                                Healthcare With AI
                            </Box>
                        </Typography>

                        {/* Description */}
                        <Typography
                            sx={{
                                fontSize: { xs: 14, md: 15.5 },
                                lineHeight: 1.75,
                                color: "#94A3B8",
                                mb: 4,
                                maxWidth: 520,
                            }}
                        >
                            At BluAI, we craft complex embedded systems by integrating hardware, user interfaces, and advanced software. Our expertise extends to connectivity and proximity technologies, ensuring your products are always connected and responsive.
                        </Typography>

                        {/* CTA Button */}
                        <Button
                            onClick={() => router.push("/about")}
                            endIcon={<ArrowForward sx={{ fontSize: 18 }} />}
                            sx={{
                                background: "#1b4dff",
                                color: "#fff",
                                textTransform: "none",
                                fontWeight: 700,
                                fontSize: 15,
                                px: 3.5,
                                py: 1.4,
                                borderRadius: 50,
                                boxShadow: "0 8px 24px rgba(109,94,248,0.35)",
                                "&:hover": {
                                    background: "#5B4DE0",
                                    boxShadow: "0 10px 28px rgba(109,94,248,0.5)",
                                },
                            }}
                        >
                            Explore More
                        </Button>
                    </Box>

                </Box>
            </Container>
        </Box>
    );
};

export default AboutTeaser;