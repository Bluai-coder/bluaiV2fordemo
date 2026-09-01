"use client";
import { Box, Container, Typography, Button, Stack } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "next/image";

export default function ApplyNowSection() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        minHeight: { xs: 380, sm: 420, md: 460 },
        borderRadius: { xs: 0, md: 5 },
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        backgroundColor: "#1b4dff",
      }}
    >
      {/* Background Image */}
      <Image
        src="/careers.jpg"
        alt="Apply now section"
        fill
        priority
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />

      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, rgba(5,10,20,0.85) 0%, rgba(5,10,20,0.60) 45%, rgba(5,10,20,0.25) 100%)",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 2,
          py: { xs: 6, md: 8 },
        }}
      >
        <Box
          sx={{
            maxWidth: { xs: "100%", sm: 520, md: 600 },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Stack spacing={2.2} alignItems={{ xs: "center", md: "flex-start" }}>
            {/* Title */}
            <Typography
              sx={{
                fontWeight: 800,
                color: "#fff",
                fontSize: { xs: 30, sm: 38, md: 46 },
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
              }}
            >
              Join our team
            </Typography>

            {/* Subtitle */}
            <Typography
              sx={{
                color: "rgba(255,255,255,0.78)",
                fontSize: { xs: 14.5, sm: 15.5, md: 16.5 },
                lineHeight: 1.8,
                maxWidth: 520,
              }}
            >
              Apply now to build your career with us! Work with modern
              technologies and a passionate team solving real-world challenges.
            </Typography>

            {/* CTA Button */}
            <Button
              variant="contained"
              endIcon={<ArrowForwardIcon />}
              sx={{
                mt: 1,
                px: 3.5,
                py: 1.4,
                borderRadius: 3,
                textTransform: "none",
                fontWeight: 700,
                fontSize: 15,
                backgroundColor: "#e53935",
                boxShadow: "0 14px 30px rgba(229,57,53,0.25)",
                "&:hover": {
                  backgroundColor: "#c62828",
                  boxShadow: "0 18px 36px rgba(229,57,53,0.35)",
                },
              }}
            //   onClick={() => {
            //     window.location.href = "/careers";
            //   }}
            >
              Apply Now
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
