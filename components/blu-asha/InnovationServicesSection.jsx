"use client";

import React from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  Button,
  Stack,
} from "@mui/material";

const services = [
  {
    title: "Native Apps",
    desc:
      "Seamless native apps built for speed, reliability, and empowering rural health on the go.",
    image: "/blu-asha/native-apps.png", //  change path
  },
  {
    title: "Offline Sync",
    desc:
      "Access and update health records anytime, even without internet, ensuring continuous care delivery.",
    image: "/blu-asha/offline-sync.png", //  change path
  },
  {
    title: "Secure APIs",
    desc:
      "Protecting health data with encrypted, secure APIs that ensure safe and seamless system integration.",
    image: "/blu-asha/secure-apis.png", //  change path
  },
  {
    title: "Modern DATALAKE",
    desc:
      "Centralized, scalable datalake enables real-time insights and secure storage for rural health records.",
    image: "/blu-asha/datalake.png", //  change path
  },
];

export default function InnovationServicesSection() {
  return (
    <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: "#fff" }}>
      <Container maxWidth="lg">
        {/* Top Title */}
        <Stack spacing={1.4} alignItems="center" textAlign="center">
          <Typography
            sx={{
              fontSize: 14,
              fontWeight: 700,
              color: "#1B4DFF",
              letterSpacing: 0.2,
            }}
          >
            Built with Modern, Reliable Technology
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: 28, sm: 36, md: 44 },
              fontWeight: 950,
              color: "#07122C",
              letterSpacing: -0.8,
              lineHeight: 1.15,
              maxWidth: 820,
            }}
          >
            Driven by Innovation to <br />
            Strengthen Rural Health <br />
            Services
          </Typography>

          <Typography
            sx={{
              fontSize: 13.5,
              lineHeight: 1.8,
              color: "rgba(7,18,44,0.6)",
              maxWidth: 820,
              mt: 1,
            }}
          >
            We leverage advanced digital tools to support ASHA workers in delivering timely,
            efficient care. Our platform ensures secure, scalable, and user-friendly technology
            tailored for rural healthcare environments.
          </Typography>
        </Stack>

        {/* Cards */}
        <Box
          sx={{
            mt: { xs: 5, md: 7 },
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(4, 1fr)",
            },
            gap: { xs: 2.4, md: 2.8 },
          }}
        >
          {services.map((item) => (
            <Paper
              key={item.title}
              elevation={0}
              sx={{
                borderRadius: 5,
                overflow: "hidden",
                bgcolor: "#F6F8FF",
                border: "1px solid rgba(227,232,255,0.95)",
                boxShadow: "0 20px 65px rgba(15,23,42,0.06)",
                transition: "all .28s ease",
                "&:hover": {
                  transform: "translateY(-10px)",
                  boxShadow: "0 30px 80px rgba(15,23,42,0.10)",
                  borderColor: "rgba(27,77,255,0.35)",
                },
              }}
            >
              {/* Illustration Area */}
              <Box
                sx={{
                  height: { xs: 210, md: 190 },
                  bgcolor: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  p: 2,
                  borderBottom: "1px solid rgba(227,232,255,0.95)",
                }}
              >
                <Box
                  component="img"
                  src={item.image}
                  alt={item.title}
                  sx={{
                    width: "100%",
                    maxWidth: 220,
                    height: "auto",
                    objectFit: "contain",
                  }}
                />
              </Box>

              {/* Content */}
              <Box sx={{ p: 2.6 }}>
                <Typography
                  sx={{
                    fontWeight: 900,
                    fontSize: 18,
                    color: "#07122C",
                    mb: 1,
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
              </Box>
            </Paper>
          ))}
        </Box>

        {/* Button */}
        <Box sx={{ mt: { xs: 5, md: 6 }, textAlign: "center" }}>
          <Button
            variant="contained"
            sx={{
              textTransform: "none",
              fontWeight: 800,
              borderRadius: 999,
              px: 5,
              py: 1.3,
              bgcolor: "#0B2FD6",
              boxShadow: "0 18px 50px rgba(11,47,214,0.20)",
              "&:hover": {
                bgcolor: "#1B4DFF",
                boxShadow: "0 22px 60px rgba(27,77,255,0.28)",
              },
            }}
          >
            More Services
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
