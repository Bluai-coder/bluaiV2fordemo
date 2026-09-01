"use client";

import {
  Box,
  Container,
  Typography,
  Stack,
  Paper,
} from "@mui/material";
import SecurityIcon from "@mui/icons-material/Security";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

export default function BluBillingHeroBgImage() {
  const services = [
    "Medical Billing",
    "Healthcare Services",
    "Coding & Audits",
    "Claims Management",
    "Patient Services",
  ];

  return (
    <Box
      sx={{
       
        position: "relative",
        minHeight: { xs: "100vh", md: "85vh" },
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        color: "#fff",
        backgroundImage: `
          linear-gradient(
            90deg,
            rgba(2,6,23,0.92) 0%,
            rgba(2,6,23,0.75) 45%,
            rgba(2,6,23,0.45) 100%
          ),
          url("/blubilling/hero-img.webp")
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 6, md: 10 },
            alignItems: "center",
          }}
        >
          {/* ================= LEFT CONTENT ================= */}
          <Box sx={{ flex: 1, maxWidth: 640 }}>
            <Typography
              sx={{
                fontSize: 13,
                fontWeight: 800,
                letterSpacing: 0.6,
                textTransform: "uppercase",
                color: "#1B4DFF",
              }}
            >
              BluBilling
            </Typography>

            <Typography
              sx={{
                mt: 2,
                fontSize: { xs: "2rem", md: "2.9rem" },
                fontWeight: 900,
                lineHeight: 1.15,
              }}
            >
              AI-Driven Revenue Cycle
              <br />
              Management for Healthcare
            </Typography>

            <Typography
              sx={{
                mt: 2.4,
                fontSize: 15.5,
                lineHeight: 1.9,
                color: "rgba(255,255,255,0.78)",
                maxWidth: 560,
              }}
            >
              BluBilling empowers healthcare organizations with intelligent,
              compliance-first automation across the entire Revenue Cycle
              Management lifecycle—reducing denials and accelerating cash flow.
            </Typography>

            {/* Trust badges */}
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              sx={{ mt: 3 }}
            >
              <TrustBadge
                icon={<SecurityIcon />}
                text="HIPAA & compliance-first architecture"
              />
              <TrustBadge
                icon={<WorkspacePremiumIcon />}
                text="15+ years RCM expertise"
              />
            </Stack>
          </Box>

          {/* ================= RIGHT PANEL ================= */}
          <Paper
            elevation={0}
            sx={{
              flex: 1,
              maxWidth: 420,
              p: { xs: 3, md: 4 },
              borderRadius: 4,
              bgcolor: "rgba(255,255,255,0.96)",
              color: "#07122C",
              boxShadow: "0 30px 80px rgba(0,0,0,0.45)",
            }}
          >
            <Typography
              sx={{
                fontSize: 14,
                fontWeight: 800,
                mb: 2,
              }}
            >
              End-to-End RCM Coverage
            </Typography>

            <Stack spacing={1.5}>
              {services.map((item) => (
                <Box
                  key={item}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.2,
                  }}
                >
                  <CheckCircleOutlineIcon
                    sx={{ fontSize: 20, color: "#1B4DFF" }}
                  />
                  <Typography
                    sx={{
                      fontSize: 14.5,
                      fontWeight: 600,
                    }}
                  >
                    {item}
                  </Typography>
                </Box>
              ))}
            </Stack>

            <Typography
              sx={{
                mt: 3,
                pt: 2,
                borderTop: "1px solid #e6e9f5",
                fontSize: 13,
                lineHeight: 1.7,
                color: "rgba(7,18,44,0.65)",
              }}
            >
              Real-time AI validation against payer rules and clinical
              documentation to minimize denials and maximize reimbursements.
            </Typography>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
}

/* ================= SMALL COMPONENT ================= */

function TrustBadge({ icon, text }) {
  return (
    <Box
      sx={{
        display: "inline-flex",
        alignItems: "center",
        gap: 1,
        px: 1.6,
        py: 0.9,
        borderRadius: 99,
        bgcolor: "rgba(255,255,255,0.12)",
        border: "1px solid rgba(255,255,255,0.25)",
        backdropFilter: "blur(8px)",
      }}
    >
      <Box sx={{ color: "#ffffff" }}>{icon}</Box>
      <Typography
        sx={{
          fontSize: 12.8,
          fontWeight: 700,
          color: "#ffffff",
        }}
      >
        {text}
      </Typography>
    </Box>
  );
}
