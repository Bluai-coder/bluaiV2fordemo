"use client";
import { Box, Typography, Button, Container } from "@mui/material";
import ArrowForward from "@mui/icons-material/ArrowForward";
import { useRouter } from "next/navigation";

/* ---------- Data ---------- */
const CAPABILITIES = [
    { title: "Embedded Systems", desc: "Hardware + software integration" },
    { title: "Innovation First", desc: "Research-led product building" },
    { title: "Proximity Tech", desc: "Always-connected, responsive products" },
    { title: "Applied AI", desc: "Real-time monitoring & diagnostics" },
    { title: "Cloud Platforms", desc: "EMR, EHR & HIS integration" },
    { title: "Enterprise Security", desc: "HIPAA-compliant workflows" },
];



const AboutUsSmall = () => {
    const router = useRouter();

    return (
        <Box
            component="section"
            sx={{
                width: "100%",
                background: "radial-gradient(circle at 70% 50%, #0F1E5C 0%, #060B20 45%, #040913 100%)",
                py: { xs: 6, md: 9 },
                px: { xs: 2, sm: 3, md: 4 },
                boxSizing: "border-box",
            }}
        >
            <Container maxWidth="xl">
                <Box sx={{ mx: "auto" }}>
                    {/* ---------- Intro paragraph ---------- */}
                    <Typography
                        sx={{
                            fontSize: { xs: 15, md: 16.5 },
                            lineHeight: 1.85,
                            color: "#94A3B8",
                            mb: 5,
                        }}
                    >
                        BluAI is a next-generation AI technology company transforming
                        healthcare through intelligent systems and applied innovation. We
                        design and deliver AI-powered products and embedded solutions that
                        enhance decision-making, automate complex processes, and create
                        seamless digital experiences. Our ecosystem includes{" "}
                        <Box component="span" sx={{ color: "#E2E8F0", fontWeight: 600 }}>
                            BluHealth
                        </Box>
                        ,{" "}
                        <Box component="span" sx={{ color: "#E2E8F0", fontWeight: 600 }}>
                            VitalsChair
                        </Box>
                        ,{" "}
                        <Box component="span" sx={{ color: "#E2E8F0", fontWeight: 600 }}>
                            BluASHA
                        </Box>
                        ,{" "}
                        <Box component="span" sx={{ color: "#E2E8F0", fontWeight: 600 }}>
                            BluMail
                        </Box>{" "}
                        and{" "}
                        <Box component="span" sx={{ color: "#E2E8F0", fontWeight: 600 }}>
                            BluAccess
                        </Box>{" "}
                        — built to convert data into actionable intelligence and measurable
                        impact.
                    </Typography>

                    {/* ---------- What We Do ---------- */}
                    <Typography
                        sx={{
                            fontSize: 12,
                            fontWeight: 700,
                            letterSpacing: 1.8,
                            color: "#94A3B8",
                            textTransform: "uppercase",
                            mb: 2.5,
                        }}
                    >
                        What We Do
                    </Typography>

                    <Box
                        sx={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: 1.5,
                            mb: 5,
                        }}
                    >
                        {CAPABILITIES.map((cap) => (
                            <Box
                                key={cap.title}
                                sx={{
                                    flex: { xs: "1 1 100%", sm: "1 1 45%", md: "1 1 30%" },
                                    minWidth: 0,
                                    background: "rgba(27,77,255,0.08)",
                                    border: "1px solid rgba(109,94,248,0.25)",
                                    borderRadius: 2,
                                    px: 2,
                                    py: 1.5,
                                }}
                            >
                                <Typography
                                    sx={{ fontSize: 13.5, fontWeight: 700, color: "#E2E8F0", mb: 0.3 }}
                                >
                                    {cap.title}
                                </Typography>
                                <Typography sx={{ fontSize: 12, color: "#94A3B8" }}>
                                    {cap.desc}
                                </Typography>
                            </Box>
                        ))}
                    </Box>

                    {/* ---------- Mission + Vision ---------- */}
                    <Box
                        sx={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: 3,
                            mb: 5,
                        }}
                    >
                        {[
                            {
                                title: "Our Mission",
                                body: "To develop and deploy intelligent, scalable AI solutions that solve real-world challenges across healthcare, enterprise, and connected ecosystems — making advanced AI practical, accessible, and outcome-driven for organizations worldwide.",
                            },
                            {
                                title: "Our Vision",
                                body: "To become a global leader in applied artificial intelligence, setting new standards in innovation, reliability, and ethical AI development — creating a smarter, safer, and more connected digital ecosystem.",
                            },
                        ].map((card) => (
                            <Box
                                key={card.title}
                                sx={{
                                    flex: { xs: "1 1 100%", sm: "1 1 45%", md: "1 1 0" },
                                    minWidth: 0,
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: 15,
                                        fontWeight: 700,
                                        color: "White",
                                        mb: 1,
                                    }}
                                >
                                    {card.title}
                                </Typography>
                                <Typography
                                    sx={{ fontSize: 13.5, lineHeight: 1.75, color: "#94A3B8" }}
                                >
                                    {card.body}
                                </Typography>
                            </Box>
                        ))}
                    </Box>

             

                    {/* ---------- CTA ---------- */}
                    <Box sx={{ textAlign: { xs: "left", sm: "center" } }}>
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
                                    background: "#1b4dff",
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

export default AboutUsSmall;