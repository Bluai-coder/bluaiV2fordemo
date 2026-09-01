"use client";

import { Box, Container, Grid, Typography, Button } from "@mui/material";
import Image from "next/image";

export default function VitalsChairDistributorHero() {
  return (
  <Box
  sx={{
    position: "relative",
    minHeight: { xs: "auto", md: "82vh" },
    display: "flex",
    alignItems: "center",
    background:
      "radial-gradient(1200px 600px at 70% 50%, rgba(59,130,246,0.15), transparent 60%), linear-gradient(180deg, #020617 0%, #020617 100%)",
    overflow: "hidden",
  }}
>
  <Container maxWidth="lg">
    {/* ================= FLEX WRAPPER ================= */}
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        gap: { xs: 6, md: 10 },
      }}
    >
      {/* ================= LEFT CONTENT ================= */}
      <Box sx={{ flex: 1 }}>
        <Typography
          sx={{
            fontSize: { xs: 32, md: 46 },
            fontWeight: 900,
            lineHeight: 1.15,
            color: "#ffffff",
          }}
        >
          Join Our{" "}
          <Box component="span" sx={{ color: "#4F6BFF" }}>
            Medical Device
          </Box>{" "}
          Distribution Network
        </Typography>

        <Typography
          sx={{
            mt: 3,
            fontSize: { xs: 14.5, md: 16 },
            lineHeight: 1.9,
            color: "rgba(255,255,255,0.72)",
            maxWidth: 520,
          }}
        >
          Partner with us to bring innovative medical solutions to
          healthcare providers nationwide.
          <br />
          <br />
          We’re seeking established medical device distributors with
          strong hospital and clinic relationships.
        </Typography>

        <Button
          variant="contained"
          sx={{
            mt: 4,
            px: 4,
            py: 1.4,
            borderRadius: 2,
            fontWeight: 700,
            textTransform: "none",
            backgroundColor: "#4F6BFF",
            boxShadow: "0 10px 30px rgba(79,107,255,0.35)",
            "&:hover": {
              backgroundColor: "#3B5BFF",
            },
          }}
        >
          Get Started
        </Button>
      </Box>

      {/* ================= RIGHT PRODUCT ================= */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: { xs: "center", md: "flex-end" },
        }}
      >
        <Box
          sx={{
            maxWidth: 460,
            width: "100%",
            filter: "drop-shadow(0 30px 60px rgba(0,0,0,0.6))",
          }}
        >
          <Image
            src="/vitals-chair-enquiry/herovotals.png"
            alt="VitalsChair Medical Device"
            width={500}
            height={500}
            priority
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </Box>
      </Box>
    </Box>
  </Container>
</Box>

  );
}
