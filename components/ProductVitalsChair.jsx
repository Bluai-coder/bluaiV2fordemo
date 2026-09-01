"use client";

import {
  Box,
  Container,
  Typography,
  Stack,
  Button,
} from "@mui/material";
import { useRouter } from "next/navigation";
import RequestDemoModal from "./popups/RequestDemoModal";
import { useState } from "react";

export default function VitalsChairSection() {
  const [openDemo, setOpenDemo] = useState(false);

  const router = useRouter();
  return (
    <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: "#fff" }}>
      <Container maxWidth="lg">

        {/* Header */}
        <Stack
          spacing={2}
          alignItems="center"
          textAlign="center"
          mb={{ xs: 4, md: 6 }}
        >
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: 26, sm: 32, md: 36 },
              fontWeight: 800,
              lineHeight: 1.2,
              color: "#1f2a56",
            }}
          >
            <Box
              onClick={() => router.push("/products/vitals-chair")}
              component="span"
              sx={{ color: "#1b4dff", cursor: "pointer" }}
            >
              VitalsChair™
            </Box>
            <Box component="span" sx={{ color: "#1f2a56" }}>
              {" "}
              – Manage. My Health. My Way.™
            </Box>
          </Typography>
        </Stack>

        {/* CTA Buttons — place immediately below the main headline */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          justifyContent="center"
          alignItems="center"
          mt={3}
        >
          {/* Primary CTA */}
          <Button
            variant="contained"
            size="large"
            onClick={() => setOpenDemo(true)}
            sx={{
              bgcolor: "#1b4dff",
              px: 4,
              py: 1.5,
              fontWeight: 700,
              borderRadius: 2,
              textTransform: "none",
              boxShadow: "0 6px 20px rgba(27,77,255,0.25)",
              "&:hover": {
                bgcolor: "#163ed6",
              },
            }}
          >
            Schedule a Demo
          </Button>
          <RequestDemoModal open={openDemo} onClose={() => setOpenDemo(false)} />

          {/* Secondary CTA */}
          <Button
            variant="outlined"
            size="large"
            onClick={() => router.push("#")}
            sx={{
              px: 4,
              py: 1.5,
              fontWeight: 600,
              borderRadius: 2,
              textTransform: "none",
              borderColor: "#cfd6ff",
              color: "#1f2a56",
              "&:hover": {
                borderColor: "#1b4dff",
                bgcolor: "rgba(27,77,255,0.05)",
              },
            }}
          >
            Download Product Brochure
          </Button>
        </Stack>

      </Container>
    </Box>

  );
}
