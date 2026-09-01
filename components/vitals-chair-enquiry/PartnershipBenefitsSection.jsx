"use client";

import {
    Box,
    Container,
    Typography,
    Button,
    Stack,
    Paper,
} from "@mui/material";

import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import HandshakeIcon from "@mui/icons-material/Handshake";

const benefits = [
    {
        title: "Healthcare Network",
        desc: "Established relationships with hospitals, clinics, and healthcare facilities",
        icon: <LocalHospitalIcon />,
    },
    {
        title: "Regulatory Compliance",
        desc: "Valid GST registration and CIN documentation",
        icon: <VerifiedUserIcon />,
    },
    {
        title: "Market Experience",
        desc: "Proven track record in medical device distribution",
        icon: <TrendingUpIcon />,
    },
    {
        title: "Partnership Commitment",
        desc: "Dedicated support and inventory management",
        icon: <HandshakeIcon />,
    },
];

export default function PartnershipBenefitsSection() {
    return (
        <Box
            sx={{
                py: { xs: 8, md: 14 },
                background:
                    "radial-gradient(900px 500px at 80% 30%, rgba(79,107,255,0.22), transparent 60%), linear-gradient(180deg, #f5f7ff 0%, #eef1ff 100%)",
            }}
        >
            <Container maxWidth="lg">
                <Box
                    sx={{
                        display: "flex",
                        gap: { xs: 6, md: 10 },
                        alignItems: "center",
                        flexDirection: { xs: "column", md: "row" },
                    }}
                >
                    {/* ================= LEFT CONTENT ================= */}
                    <Box sx={{ flex: 1, maxWidth: 560 }}>
                        <Typography
                            sx={{
                                fontSize: 13,
                                fontWeight: 800,
                                color: "#4F6BFF",
                                mb: 1,
                            }}
                        >
                            Partnership Requirements
                        </Typography>

                        <Typography
                            sx={{
                                fontSize: { xs: 30, md: 40 },
                                fontWeight: 900,
                                lineHeight: 1.15,
                                color: "#07122C",
                            }}
                        >
                            Partnership{" "}
                            <Box component="span" sx={{ color: "#4F6BFF" }}>
                                Benefits
                            </Box>{" "}
                            What You Need…
                        </Typography>

                        <Stack spacing={1.3} sx={{ mt: 3 }}>
                            {[
                                "Exclusive territory rights and competitive margins",
                                "Comprehensive product training and technical support",
                                "Marketing materials and sales support",
                                "Regular product updates and innovation pipeline access",
                                "24/7 technical assistance and customer support",
                            ].map((item) => (
                                <Typography
                                    key={item}
                                    sx={{
                                        fontSize: 14.5,
                                        color: "rgba(7,18,44,0.75)",
                                    }}
                                >
                                    • {item}
                                </Typography>
                            ))}
                        </Stack>

                        <Button
                            variant="contained"
                            sx={{
                                mt: 4,
                                px: 4,
                                py: 1.4,
                                fontWeight: 800,
                                textTransform: "none",
                                borderRadius: 2,
                                backgroundColor: "#4F6BFF",
                                boxShadow: "0 16px 40px rgba(79,107,255,0.35)",
                                "&:hover": {
                                    backgroundColor: "#3B5BFF",
                                },
                            }}
                        >
                            Distributor Application Form
                        </Button>
                    </Box>

                    <Box
  sx={{
    flex: 1,
    maxWidth: 820,            // wider container for 2 columns
    display: "flex",
    flexWrap: "wrap",
    gap: 3,
    justifyContent: "flex-end", // keeps block aligned right
  }}
>
  {benefits?.map((b) => (
    <Paper
      key={b.title}
      elevation={0}
      sx={{
        width: {
          xs: "100%",
          sm: "calc(50% - 12px)", // perfect 2-column balance
        },
        p: 3,
        borderRadius: 3,
        backgroundColor: "#ffffff",
        boxShadow: "0 14px 40px rgba(15,23,42,0.08)",
        transition: "all 0.25s ease",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 22px 50px rgba(15,23,42,0.14)",
        },
      }}
    >
      {/* Icon */}
      <Box
        sx={{
          width: 40,
          height: 40,
          borderRadius: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#4F6BFF",
          color: "#fff",
          mb: 2,
        }}
      >
        {b.icon}
      </Box>

      {/* Title */}
      <Typography
        sx={{
          fontWeight: 800,
          fontSize: 15,
          color: "#07122C",
          mb: 0.6,
        }}
      >
        {b.title}
      </Typography>

      {/* Description */}
      <Typography
        sx={{
          fontSize: 13,
          lineHeight: 1.6,
          color: "rgba(7,18,44,0.65)",
        }}
      >
        {b.desc}
      </Typography>
    </Paper>
  ))}
</Box>

                </Box>
            </Container>
        </Box>
    );
}
