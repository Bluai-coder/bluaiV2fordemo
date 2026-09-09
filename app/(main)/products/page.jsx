// components/AllProducts.jsx
"use client";

import * as React from "react";
import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardMedia,
    CardContent,
    Chip,
    Button,
    Divider,
    Paper,
    useMediaQuery,
} from "@mui/material";
import { useRouter } from "next/navigation";
import Image from "next/image";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

// Product Data
const products = [
    {
        id: 1,
        icon: "/logos/white/BluVital-logo.png",
        title: "VitalsChair™",
        image: "/hero-popup/chair.png",
        category: "Clinical Solutions",
        type: "product",
        description: `Introducing <strong>VitalsChair™</strong>, a groundbreaking innovation in patient health assessments—designed to deliver a complete set of vital measurements in a single, effortless sitting. Built with <strong>precision</strong>, powered by <strong>AI</strong>, and seamlessly <strong>integrated</strong> with the BluHealth™ Portal, VitalsChair™ redefines the way healthcare professionals collect, analyze, and monitor patient health data.`,
        slug: "products/vitals-chair",
        gradient: "linear-gradient(135deg, #1b4dff, #66a6ff)",
        glow: "rgba(102,166,255, 0.55)",
        textColor: "#89f7fe",
        features: ["AI-Powered Analytics", "Real-time Monitoring", "Seamless Integration"],
    },
    {
        id: 9,
        icon: "/logos/white/pole.png",
        title: "VitalsPole™",
        image: "/hero-popup/pole.png",
        category: "Clinical Solutions",
        type: "product",
        description: `Smart patient monitoring pole delivering multi-vital health tracking with precision sensors and real-time data visualization. VitalsPole™ combines advanced medical-grade sensors with intelligent analytics to provide comprehensive patient monitoring in a compact, mobile form factor.`,
        slug: "products/vitals-pole",
        gradient: "linear-gradient(135deg, #1b4dff, #66a6ff)",
        glow: "rgba(102,166,255, 0.55)",
        textColor: "#aace46",
        features: ["Multi-vital Tracking", "Mobile Design", "Real-time Alerts"],
    },
    {
        id: 10,
        icon: "/logos/white/neonatal.png",
        title: "BluNeonatal™",
        image: "/hero-popup/child.png",
        category: "Clinical Solutions",
        type: "product",
        description: `BluNeonatal™ represents the next generation of neonatal intensive care monitoring. Combining advanced medical-grade sensors, precision imaging, and AI-powered analytics, BluNeonatal™ delivers autonomous, continuous monitoring of premature and critically ill newborns with intelligent alarm management and predictive analytics.`,
        slug: "products/blu-neonatal",
        gradient: "linear-gradient(135deg, #1b4dff, #66a6ff)",
        glow: "rgba(102,166,255, 0.55)",
        textColor: "#daa351",
        features: ["NICU Optimization", "Predictive Analytics", "Alarm Management"],
    },
    {
        id: 11,
        icon: "/logos/white/briefcase.png",
        title: "VitalsBriefcase™",
        image: "/hero-popup/box.png",
        category: "Clinical Solutions",
        type: "product",
        description: `Smart patient monitoring Briefcase for instant, multi-vital health tracking. VitalsBriefcase™ is a portable, all-in-one solution that enables healthcare professionals to conduct comprehensive health assessments anywhere, anytime with clinical-grade accuracy.`,
        slug: "products/vitals-briefcase",
        gradient: "linear-gradient(135deg, #1b4dff, #66a6ff)",
        glow: "rgba(102,166,255, 0.55)",
        textColor: "#bb78e2",
        features: ["Portable Design", "Instant Assessment", "Clinical Accuracy"],
    },
    {
        id: 3,
        icon: "/logos/white/BluAccess-logo.png",
        image: "/hero-popup/face.png",
        title: "BluAccess™",
        category: "Access & Security",
        type: "software",
        description: `BluAccess™ delivers unparalleled operational intelligence through its comprehensive suite of features, including customizable access zones, multi-factor authentication protocols, and dynamic permissions management—all while maintaining detailed audit trails for regulatory compliance.`,
        slug: "products/blu-access",
        gradient: "linear-gradient(135deg, #1b4dff, #66a6ff)",
        glow: "rgba(102,166,255, 0.55)",
        textColor: "#4facfe",
        features: ["Access Control", "MFA Authentication", "Audit Trails"],
    },
    {
        id: 8,
        icon: "/logos/white/BluAsha-logo.png",
        title: "BluASHA™",
        image: "/blu-asha/hero-asha-2.png",
        category: "AI Clinical Documentation",
        type: "software",
        description: `ASHA workers spend 40% of their time on manual record-keeping and reporting, reducing time available for actual healthcare delivery. BluASHA™ transforms this with AI-powered documentation that works offline, ensuring critical health data is captured accurately and efficiently.`,
        slug: "products/blu-asha",
        gradient: "linear-gradient(135deg, #1b4dff, #66a6ff)",
        glow: "rgba(102,166,255, 0.55)",
        textColor: "#667eea",
        features: ["Offline Capable", "AI Documentation", "Time Saving"],
    },
    {
        id: 2,
        icon: "/logos/white/BluNotes-logo.png",
        title: "BluNotes™",
        image: "/hero-popup/blunotes.png",
        category: "Community Health",
        type: "software",
        description: `BluNotes is an innovative medical conversation capture and documentation system that seamlessly connects mobile devices and computers to transform patient-provider conversations into structured medical documentation with AI-powered accuracy.`,
        slug: "products/blu-notes",
        gradient: "linear-gradient(135deg, #1b4dff, #66a6ff)",
        glow: "rgba(102,166,255, 0.55)",
        textColor: "#f093fb",
        features: ["Conversation Capture", "AI Documentation", "Multi-device Sync"],
    },
    {
        id: 4,
        icon: "/logos/white/BluHealth-logo.png",
        title: "BluHealth™",
        image: "/hero-popup/bluhealth.png",
        category: "Digital Health Platform",
        type: "software",
        description: `The BluHealth™ Portal represents a paradigm shift in clinical informatics—transcending traditional electronic medical record systems through sophisticated integration of artificial intelligence and patient-centric architecture. This next-generation EMR/EHR/HIS ecosystem leverages advanced large language models and agentic AI infrastructure.`,
        slug: "products/blu-health",
        gradient: "linear-gradient(135deg, #1b4dff, #66a6ff)",
        glow: "rgba(102,166,255, 0.55)",
        textColor: "#43e97b",
        features: ["AI-powered EMR", "Patient-centric", "Agentic AI"],
    },
    {
        id: 5,
        icon: "/logos/white/BluId-logo.png",
        title: "BluID™",
        image: "/hero-popup/bluid.png",
        category: "Digital Identity",
        type: "software",
        description: `BluID™ is a revolutionary 14-digit unique bio-medical identifier that transforms healthcare management by centralizing your complete medical profile in one secure digital location. This unified medical identity system empowers patients with unprecedented control over their health data.`,
        slug: "products/blu-id",
        gradient: "linear-gradient(135deg, #1b4dff, #66a6ff)",
        glow: "rgba(102,166,255, 0.55)",
        textColor: "#fa709a",
        features: [ "Data Control", "Secure Access"],
    },
    {
        id: 6,
        icon: "/logos/white/BluMental-logo.png",
        title: "BluMental™",
        image: "/hero-popup/blumental.png",
        category: "Mental Wellness",
        type: "software",
        description: `The BluHealth Mental Health module delivers real-time, AI-driven assessments that help clinicians evaluate, interpret, and act on patient mental health data with confidence. Using clinically validated screening tools enhanced by explainable AI, the platform instantly analyzes patient responses to generate structured insights.`,
        slug: "products/blu-mental-health",
        gradient: "linear-gradient(135deg, #1b4dff, #66a6ff)",
        glow: "rgba(102,166,255, 0.55)",
        textColor: "#a18cd1",
        features: ["AI Assessments", "Mental Health", "Real-time Insights"],
    },
    {
        id: 7,
        icon: "/logos/white/BluDms-logo.png",
        title: "BluDMS™",
        image: "/hero-popup/bludms.png",
        category: "Secure Communication",
        type: "software",
        description: `BluDMS™ represents the pinnacle of clinical document architecture innovation—a sophisticated medical document ecosystem that transcends traditional information management paradigms through the seamless integration of artificial intelligence and advanced natural language processing.`,
        slug: "products/blu-dms",
        gradient: "linear-gradient(135deg, #1b4dff, #66a6ff)",
        glow: "rgba(102,166,255, 0.55)",
        textColor: "#fccb90",
        features: ["AI Documentation", "Secure Communication"],
    },
];

export default function AllProducts() {
    const router = useRouter();
    const isMobile = useMediaQuery("(max-width:600px)");
    const isTablet = useMediaQuery("(max-width:900px)");

    const handleNavigate = (slug) => {
        router.push(`/${slug}`);
    };

    // Group products by type
    const productsList = products.filter((p) => p.type === "product");
    const softwareList = products.filter((p) => p.type === "software");

    const ProductCard = ({ product, index }) => {
        const isEven = index % 2 === 0;
        const isProduct = product.type === "product";

        return (
            <Card
                sx={{
                    borderRadius: 4,
                    overflow: "hidden",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                    transition: "all 0.3s ease",
                    border: "1px solid rgba(15,23,42,0.06)",
                    "&:hover": {
                        transform: "translateY(-4px)",
                        boxShadow: `0 12px 40px ${isProduct ? "rgba(27,77,255,0.12)" : "rgba(255,107,107,0.12)"}`,
                        borderColor: isProduct ? "rgba(27,77,255,0.2)" : "rgba(255,107,107,0.2)",
                    },
                    display: "flex",
                    flexDirection: { xs: "column", md: isEven ? "row" : "row-reverse" },
                }}
            >
                {/* Image Section */}
                <Box
                    sx={{
                        width: { xs: "100%", md: "45%" },
                        height: { xs: 250, md: "auto" },
                        minHeight: { md: 300 },
                        bgcolor: isProduct ? "rgba(27,77,255,0.04)" : "rgba(255,107,107,0.04)",
                        position: "relative",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        p: 4,
                    }}
                >
                    <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        style={{
                            objectFit: "contain",
                            padding: 20,
                        }}
                    />
                    {/* Type Badge */}
                    <Chip
                        label={isProduct ? "🔬 Product" : "💻 Software"}
                        sx={{
                            position: "absolute",
                            top: 16,
                            right: 16,
                            fontWeight: 700,
                            fontSize: 12,
                            bgcolor: isProduct ? "rgba(27,77,255,0.9)" : "rgba(255,107,107,0.9)",
                            color: "#fff",
                            backdropFilter: "blur(10px)",
                            px: 1,
                        }}
                    />
                    {/* Category Badge */}
                    <Chip
                        label={product.category}
                        sx={{
                            position: "absolute",
                            bottom: 16,
                            left: 16,
                            fontWeight: 600,
                            fontSize: 11,
                            bgcolor: "rgba(255,255,255,0.9)",
                            backdropFilter: "blur(10px)",
                            color: "#1f2a56",
                        }}
                    />
                </Box>

                {/* Content Section */}
                <CardContent
                    sx={{
                        flex: 1,
                        p: { xs: 3, md: 4 },
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                    }}
                >
                    <Box sx={{ mb: 2 }}>
                        <Typography
                            variant="h4"
                            sx={{
                                fontWeight: 800,
                                color: "#1f2a56",
                                fontSize: { xs: 24, md: 28 },
                                mb: 1,
                                display: "flex",
                                alignItems: "center",
                                gap: 1,
                            }}
                        >
                            {product.title}
                            <Box
                                sx={{
                                    width: 8,
                                    height: 8,
                                    borderRadius: "50%",
                                    bgcolor: isProduct ? "#1b4dff" : "#ff6b6b",
                                    display: "inline-block",
                                }}
                            />
                        </Typography>
                    </Box>

                    <Typography
                        sx={{
                            color: "#5f6268",
                            fontSize: { xs: 14, md: 16 },
                            lineHeight: 1.8,
                            mb: 3,
                        }}
                        dangerouslySetInnerHTML={{ __html: product.description }}
                    />

                    {/* Features */}
                    {product.features && (
                        <Box sx={{ mb: 3 }}>
                            <Typography
                                sx={{
                                    fontWeight: 700,
                                    fontSize: 14,
                                    color: "#1f2a56",
                                    mb: 1.5,
                                }}
                            >
                                Key Features:
                            </Typography>
                            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                                {product.features.map((feature, idx) => (
                                    <Chip
                                        key={idx}
                                        icon={<CheckCircleIcon sx={{ fontSize: 14 }} />}
                                        label={feature}
                                        sx={{
                                            bgcolor: isProduct ? "rgba(27,77,255,0.06)" : "rgba(255,107,107,0.06)",
                                            color: isProduct ? "#1b4dff" : "#ff6b6b",
                                            fontWeight: 500,
                                            "& .MuiChip-icon": {
                                                color: isProduct ? "#1b4dff" : "#ff6b6b",
                                            },
                                        }}
                                    />
                                ))}
                            </Box>
                        </Box>
                    )}

                    <Button
                        variant="contained"
                        onClick={() => handleNavigate(product.slug)}
                        endIcon={<ArrowForwardIcon />}
                        sx={{
                            alignSelf: "flex-start",
                            textTransform: "none",
                            fontWeight: 700,
                            bgcolor: isProduct ? "#1b4dff" : "#ff6b6b",
                            borderRadius: 2,
                            px: 4,
                            py: 1.2,
                            "&:hover": {
                                bgcolor: isProduct ? "#1a3fcc" : "#e55555",
                                transform: "translateX(4px)",
                            },
                        }}
                    >
                        Learn More
                    </Button>
                </CardContent>
            </Card>
        );
    };

    const SectionHeader = ({ title, icon, count, color }) => (
        <Box sx={{ mb: 4  , mt :  5}}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 1 }}>
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: 800,
                        color: color || "#1f2a56",
                        fontSize: { xs: 28, md: 34 },
                        display: "flex",
                        alignItems: "center",
                        gap: 1.5,
                    }}
                >
                    {icon} {title}
                </Typography>
                <Chip
                    label={`${count} items`}
                    sx={{
                        bgcolor: color ? `${color}15` : "rgba(15,23,42,0.06)",
                        color: color || "#5f6268",
                        fontWeight: 700,
                        fontSize: 13,
                        height: 28,
                    }}
                />
            </Box>
            <Divider sx={{ bgcolor: color ? `${color}20` : "rgba(15,23,42,0.06)" }} />
        </Box>
    );

    return (
        <Box
            sx={{
                minHeight: "100vh",
                bgcolor: "#f8fafc",
                pt: { xs: 8, md: 10 },
                pb: 6,
            }}
        >
            <Container maxWidth="xl">
        

                {/* Products Section */}
                {productsList.length > 0 && (
                    <Box sx={{ mb: 6 }}>
                        <SectionHeader
                            title="Products"
                            icon="🔬"
                            count={productsList.length}
                            color="#1b4dff"
                        />
                        <Grid container spacing={4}>
                            {productsList.map((product, index) => (
                                <Grid item xs={12} key={product.id}>
                                    <ProductCard product={product} index={index} />
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                )}

                {/* Software Section */}
                {softwareList.length > 0 && (
                    <Box>
                        <SectionHeader
                            title="Software"
                            icon="💻"
                            count={softwareList.length}
                            color="#ff6b6b"
                        />
                        <Grid container spacing={4}>
                            {softwareList.map((product, index) => (
                                <Grid item xs={12} key={product.id}>
                                    <ProductCard product={product} index={index + productsList.length} />
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                )}
            </Container>

            {/* Global Styles */}
            <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        
        .product-image {
          transition: transform 0.4s ease;
        }
        
        .product-image:hover {
          transform: scale(1.05);
        }
      `}</style>
        </Box>
    );
}