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
    <Box
      sx={{
        py: { xs: 7, md: 11 },
        bgcolor: "#fff",
        position: "relative",
        overflow: "hidden",
      }}
    >


      <Container maxWidth="lg" sx={{ position: "relative" }}>
        {/* Header */}
        <Box textAlign="center" mb={{ xs: 4, md: 6 }}>
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              px: 2,
              py: 0.9,
              borderRadius: 99,
              bgcolor: "rgba(27,77,255,0.10)",
              border: "1px solid rgba(27,77,255,0.18)",
            }}
          >
            {/* <VerifiedIcon sx={{ fontSize: 18, color: "#1B4DFF" }} /> */}
            <Typography
              sx={{
                fontSize: 12,
                fontWeight: 900,
                color: "#1B4DFF",
                letterSpacing: 0.6,
                textTransform: "uppercase",
              }}
            >
              Our Solutions
            </Typography>
          </Box>

          <Typography
            sx={{
              mt: 2,
              fontWeight: 950,
              color: "#07122C",
              fontSize: { xs: "1.7rem", md: "2.3rem" },
              lineHeight: 1.15,
            }}
          >
            {/* Built for Enterprise Healthcare Workflows */}
          </Typography>

          <Typography
            sx={{
              mt: 1.6,
              maxWidth: 760,
              mx: "auto",
              color: "rgba(7,18,44,0.65)",
              fontSize: 14,
              lineHeight: 1.8,
            }}
          >
            Our expertise extends to connectivity and proximity technologies,
            ensuring your products remain secure, responsive, and always connected.
          </Typography>
        </Box>

        {/*  Premium Wrapper */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 3, md: 4 },
            alignItems: "stretch",
            borderRadius: 5,
            overflow: "hidden",
            border: "1px solid rgba(227,232,255,0.95)",
            bgcolor: "#F7F9FF",
            boxShadow: "0 30px 90px rgba(15, 23, 42, 0.10)",
          }}
        >
          {/* LEFT Image Premium */}
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
              {/* glow overlay */}
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(135deg, rgba(27,77,255,0.25), rgba(255,255,255,0))",
                  zIndex: 1,
                }}
              />

              {/* Image */}
              <Image
                src="/our-solutions.jpg"
                alt="Our Solutions"
                fill
                priority
                style={{
                  objectFit: "cover",
                }}
              />

            </Box>
          </Box>

          {/* RIGHT Solutions Premium Cards */}
          <Box
            sx={{
              flex: 1,
              p: { xs: 2.2, sm: 3, md: 4 },
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              alignContent: "flex-start",
            }}
          >
            {solutions?.map((item) => (
              <Paper
                key={item}
                elevation={0}
                onClick={() => router.push(item?.url)}
                sx={{
                  width: { xs: "100%", sm: "calc(50% - 8px)" },
                  cursor: "pointer",
                  p: 2,
                  borderRadius: 3,
                  border: "1px solid rgba(227,232,255,0.95)",
                  bgcolor: "rgba(255,255,255,0.90)",
                  backdropFilter: "blur(10px)",
                  display: "flex",
                  alignItems: "center",
                  gap: 1.4,
                  transition: "0.25s ease",
                  boxShadow: "0 12px 28px rgba(15,23,42,0.04)",
                  "&:hover": {
                    transform: "translateY(-4px)",
                  },
                }}


              >
                {/* premium icon container */}
                <Box
                  sx={{
                    width: 38,
                    height: 38,
                    borderRadius: 2.2,
                    bgcolor: "rgba(27,77,255,0.12)",
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
                      fontWeight: 900,
                      fontSize: 13.6,
                      color: "#07122C",
                      lineHeight: 1.2,
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                    title={item}
                  >
                    {item?.title}
                  </Typography>

                  <Typography
                    sx={{
                      mt: 0.5,
                      fontSize: 12.4,
                      color: "rgba(7,18,44,0.60)",
                    }}
                  >
                    Secure automation & integration
                  </Typography>
                </Box>
              </Paper>
            ))}

            {/* bottom mini trust row */}
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={1.3}
              sx={{ width: "100%", mt: 1 }}
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

/* ---------------- small component ---------------- */

function TrustPill({ text }) {
  return (
    <Box
      sx={{
        width: { xs: "100%", sm: "auto" },
        px: 1.6,
        py: 1.05,
        borderRadius: 99,
        bgcolor: "rgba(255,255,255,0.75)",
        border: "1px solid rgba(227,232,255,0.95)",
        backdropFilter: "blur(10px)",
        boxShadow: "0 12px 28px rgba(15,23,42,0.04)",
      }}
    >
      <Typography
        sx={{
          fontSize: 12.4,
          fontWeight: 900,
          color: "rgba(7,18,44,0.78)",
        }}
      >
        {text}
      </Typography>
    </Box>
  );
}
