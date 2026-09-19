

"use client";

import { Box, Container, Paper, Stack, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Image from "next/image";
import { useRouter } from "next/navigation";

const solutions = [
  { title: "VitalsChair™", url: "/products/vitals-chair" },
  { title: "BluAccess™", url: "/products/blu-access" },
  { title: "BluHealth™", url: "/products/blu-health" },
  { title: "BluNotes™", url: "/products/blu-notes" },
  { title: "Ai Doctor™ / MedChat™", url: "#" },
  { title: "BluDMS™", url: "/products/blu-dms" },
  { title: "BluAgents™", url: "#" },
  { title: "BluID™", url: "/products/blu-id" },
  { title: "BluMail™", url: "/products/blu-mail" },
  { title: "BluBilling", url: "/blubilling" },
];

export default function OurSolutions() {
  const router = useRouter();

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "#FFFFFF" }}>
      <Container maxWidth="xl">
        {/* Header */}
        <Box  mb={{ xs: 5, md: 7 }}>
          <Typography
            sx={{
              fontWeight: 800,
              fontSize: 12,
              letterSpacing: "0.15em",
              textAlign: "center",
              textTransform: "uppercase",
              color: "#1B4DFF",
            }}
          >
            Our Solutions
          </Typography>

          <Typography
            sx={{
              mt: 2,
              fontWeight: 800,
              color: "#0A0F1F",
              textAlign: "center",
              fontSize: { xs: "1.75rem", md: "2.5rem" },
              lineHeight: 1.2,
              letterSpacing: -0.5,
            }}
          >
            Built for Enterprise Healthcare Workflows
          </Typography>

          <Typography
            sx={{
              mt: 2,
              maxWidth: "100%",
              mx: "auto",
              color: "#5A6478",
              textAlign: "center",
              fontSize: { xs: 14.5, md: 15.5 },
              lineHeight: 1.8,
            }}
          >
            Our expertise extends to connectivity and proximity technologies,ensuring your products remain secure, responsive, and always connected.
          </Typography>
        </Box>

        {/* Wrapper */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 3, md: 4 },
            alignItems: "stretch",
            borderRadius: 4,
            overflow: "hidden",
            border: "1px solid #E8ECF5",
                            background: "radial-gradient(circle at 70% 50%, #0F1E5C 0%, #060B20 45%, #040913 100%)",

          }}
        >
          {/* LEFT Image */}
          <Box
            sx={{
              flex: 1,
              position: "relative",
              minHeight: { xs: 260, md: "auto" },
              display: "flex",
              alignItems: "stretch",
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: { xs: 280, sm: 360, md: "100%" },
                minHeight: { md: 520 },
              }}
            >
              <Image
                src="/our-solutions.jpg"
                alt="Our Solutions"
                fill
                priority
                style={{ objectFit: "cover" }}
              />
            </Box>
          </Box>

          {/* RIGHT Solutions Cards */}
          <Box
            sx={{
              flex: 1,
              p: { xs: 2.5, sm: 3, md: 4 },
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              alignContent: "flex-start",
            }}
          >
            {solutions?.map((item) => (
              <Paper
                key={item.title}
                elevation={0}
                onClick={() => router.push(item.url)}
                sx={{
                  width: { xs: "100%", sm: "calc(50% - 8px)" },
                  cursor: "pointer",
                  p: 2,
                  borderRadius: 3,
                  border: "1px solid #E8ECF5",
                  bgcolor: "#FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  transition: "all 0.35s ease",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 20px 45px rgba(15, 23, 42, 0.10)",
                    borderColor: "#1B4DFF",
                  },
                }}
              >
                {/* Icon Container */}
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: 2.5,
                    bgcolor: "rgba(27,77,255,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#1B4DFF",
                    flexShrink: 0,
                  }}
                >
                  <CheckCircleIcon sx={{ fontSize: 20 }} />
                </Box>

                <Box sx={{ minWidth: 0 }}>
                  <Typography
                    sx={{
                      fontWeight: 800,
                      fontSize: 14,
                      color: "#0A0F1F",
                      lineHeight: 1.3,
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    sx={{
                      mt: 0.5,
                      fontSize: 12.5,
                      color: "#5A6478",
                    }}
                  >
                    Secure automation & integration
                  </Typography>
                </Box>
              </Paper>
            ))}

            {/* Trust Pills */}
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={1.3}
              sx={{ width: "100%", mt: 1, flexWrap: "wrap" }}
            >
              <TrustPill text="HIPAA-Compliant workflows" />
              <TrustPill text="AI + Human oversight" />
              <TrustPill text="Enterprise-grade security" />
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

/* ---------------- Trust Pill ---------------- */

function TrustPill({ text }) {
  return (
    <Box
      sx={{
        width: { xs: "100%", sm: "auto" },
        px: 2,
        py: 1,
        borderRadius: 99,
        bgcolor: "#FFFFFF",
        border: "1px solid #E8ECF5",
      }}
    >
      <Typography
        sx={{
          fontSize: 12.5,
          fontWeight: 800,
          color: "#0A0F1F",
        }}
      >
        {text}
      </Typography>
    </Box>
  );
}