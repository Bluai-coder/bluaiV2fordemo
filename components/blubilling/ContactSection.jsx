"use client";

import React from "react";
import {
  Box,
  Button,
  Container,
  MenuItem,
  Stack,
  TextField,
  Typography,
  Divider,
} from "@mui/material";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EmailIcon from "@mui/icons-material/Email";

export default function ContactSectionPro() {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 11 },
        bgcolor: "#ffffff",
        position: "relative",
        overflow: "hidden",
      }}
    >
    

      <Container maxWidth="lg" sx={{ position: "relative" }}>
        {/* TOP: Title */}
        <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
          <Typography
            sx={{
              fontWeight: 900,
              color: "#07122C",
              fontSize: { xs: "1.7rem", md: "2.2rem" },
              lineHeight: 1.15,
            }}
          >
            Contact BluBilling
          </Typography>

          <Typography
            sx={{
              mt: 1.3,
              fontSize: 13.5,
              color: "rgba(7,18,44,0.62)",
              maxWidth: 640,
              mx: "auto",
              lineHeight: 1.7,
            }}
          >
            Tell us what you need — our AI-powered billing experts will connect with you
            and guide the best workflow for your organization.
          </Typography>
        </Box>

        {/* MAIN ROW (No Grid) */}
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 4, md: 5 }}
          alignItems="stretch"
          justifyContent="space-between"
        >
          {/* LEFT PANEL */}
          <Box
            sx={{
              flex: 1,
              minWidth: 0,
              p: { xs: 2.5, md: 3.5 },
              borderRadius: 4,
              bgcolor: "#F7F9FF",
              border: "1px solid rgba(227,232,255,0.9)",
            }}
          >
            <Typography
              sx={{
                fontWeight: 900,
                color: "#07122C",
                fontSize: { xs: "1.2rem", md: "1.35rem" },
              }}
            >
              Let’s talk
            </Typography>

            <Typography
              sx={{
                mt: 1.2,
                color: "rgba(7,18,44,0.7)",
                fontSize: 13.5,
                lineHeight: 1.75,
              }}
            >
              Reach out with your requirements, service interest, or partnership
              queries. We typically respond within 24 hours.
            </Typography>

            <Divider sx={{ my: 2.5 }} />

            {/* Contact chips */}
            <Stack spacing={1.5}>
              <InfoChip
                icon={<CallIcon sx={{ fontSize: 20 }} />}
                title="Call us"
                value="US: +1 302-238-1512 | India: 0172-456-8962"
              />
              <InfoChip
                icon={<EmailIcon sx={{ fontSize: 20 }} />}
                title="Email"
                value="support@blubilling.ai"
              />
              <InfoChip
                icon={<AccessTimeIcon sx={{ fontSize: 20 }} />}
                title="Hours"
                value="Mon–Fri 9:00AM–6:00PM | Sat 9:00AM–2:00PM"
              />
              <InfoChip
                icon={<LocationOnIcon sx={{ fontSize: 20 }} />}
                title="Location"
                value="Dover, DE (USA) • Mohali, Punjab (India)"
              />
            </Stack>
          </Box>

          {/* RIGHT FORM CARD */}
          <Box
            sx={{
              flex: 1.15,
              minWidth: 0,
              borderRadius: 4,
              border: "1px solid rgba(227,232,255,0.95)",
              bgcolor: "rgba(255,255,255,0.9)",
              boxShadow: "0 24px 60px rgba(15, 23, 42, 0.08)",
              backdropFilter: "blur(8px)",
              p: { xs: 2.5, md: 3.5 },
            }}
          >
            <Typography
              sx={{
                fontWeight: 900,
                color: "#07122C",
                fontSize: { xs: "1.05rem", md: "1.2rem" },
                mb: 2,
              }}
            >
              Send a message
            </Typography>

            <Box
              component="form"
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 2,
              }}
            >
              <Box sx={{ width: { xs: "100%", sm: "calc(50% - 8px)" } }}>
                <TextField fullWidth label="Your Name" placeholder="John Doe" />
              </Box>

              <Box sx={{ width: { xs: "100%", sm: "calc(50% - 8px)" } }}>
                <TextField fullWidth label="Email Address" placeholder="john@example.com" />
              </Box>

              <Box sx={{ width: { xs: "100%", sm: "calc(50% - 8px)" } }}>
                <TextField fullWidth label="Phone Number" placeholder="+91 98765 43210" />
              </Box>

              <Box sx={{ width: { xs: "100%", sm: "calc(50% - 8px)" } }}>
                <TextField fullWidth select label="Select Service" defaultValue="">
                  <MenuItem value="">Select Service</MenuItem>
                  <MenuItem value="rcm">Revenue Cycle Management</MenuItem>
                  <MenuItem value="medical-billing">Medical Billing</MenuItem>
                  <MenuItem value="coding">Medical Coding</MenuItem>
                  <MenuItem value="ar">AR Follow-Up</MenuItem>
                  <MenuItem value="denials">Denial Management</MenuItem>
                </TextField>
              </Box>

              <Box sx={{ width: "100%" }}>
                <TextField
                  fullWidth
                  multiline
                  minRows={4}
                  label="Message"
                  placeholder="Write your message..."
                />
              </Box>

              <Box sx={{ width: "100%" }}>
                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  sx={{
                    mt: 0.5,
                    bgcolor: "#1B4DFF",
                    textTransform: "none",
                    fontWeight: 900,
                    py: 1.35,
                    borderRadius: 2.5,
                    boxShadow: "0 18px 40px rgba(27,77,255,0.20)",
                    "&:hover": { bgcolor: "#163FE0" },
                  }}
                >
                  Submit Message
                </Button>

                <Typography
                  sx={{
                    mt: 1.6,
                    fontSize: 12.5,
                    color: "rgba(7,18,44,0.55)",
                    textAlign: "center",
                    lineHeight: 1.6,
                  }}
                >
                  By submitting, you agree to be contacted by our team regarding your request.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Stack>

        {/* BOTTOM MINI CARDS */}
        <Box sx={{ mt: { xs: 5, md: 7 } }}>
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={2.5}
            alignItems="stretch"
          >
            <MiniCard
              icon={<LocationOnIcon sx={{ color: "#1B4DFF" }} />}
              title="Head Office"
              desc="BluAI Inc., Dover, DE 19901, USA"
            />
            <MiniCard
              icon={<CallIcon sx={{ color: "#1B4DFF" }} />}
              title="Support Lines"
              desc="US: +1 302-238-1512 | India: 0172-456-8962"
            />
            <MiniCard
              icon={<AccessTimeIcon sx={{ color: "#1B4DFF" }} />}
              title="Working Hours"
              desc="Mon–Fri 9:00AM–6:00PM | Sat 9:00AM–2:00PM"
            />
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

/* ---------- Small Components ---------- */

function InfoChip({ icon, title, value }) {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 1.5,
        alignItems: "flex-start",
        p: 1.8,
        borderRadius: 3,
        bgcolor: "white",
        border: "1px solid rgba(227,232,255,0.95)",
      }}
    >
      <Box
        sx={{
          width: 38,
          height: 38,
          borderRadius: 2,
          bgcolor: "rgba(27,77,255,0.12)",
          color: "#1B4DFF",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        {icon}
      </Box>

      <Box sx={{ minWidth: 0 }}>
        <Typography sx={{ fontWeight: 900, fontSize: 13, color: "#07122C" }}>
          {title}
        </Typography>
        <Typography
          sx={{
            mt: 0.4,
            fontSize: 13,
            color: "rgba(7,18,44,0.7)",
            lineHeight: 1.6,
          }}
        >
          {value}
        </Typography>
      </Box>
    </Box>
  );
}

function MiniCard({ icon, title, desc }) {
  return (
    <Box
      sx={{
        flex: 1,
        minWidth: 0,
        borderRadius: 3,
        bgcolor: "white",
        border: "1px solid rgba(227,232,255,0.95)",
        p: 2.4,
        boxShadow: "0 14px 35px rgba(15, 23, 42, 0.04)",
        display: "flex",
        gap: 1.5,
        alignItems: "flex-start",
      }}
    >
      <Box
        sx={{
          width: 42,
          height: 42,
          borderRadius: 2.2,
          bgcolor: "rgba(27,77,255,0.12)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        {icon}
      </Box>

      <Box sx={{ minWidth: 0 }}>
        <Typography sx={{ fontWeight: 900, fontSize: 13.5, color: "#07122C" }}>
          {title}
        </Typography>
        <Typography
          sx={{
            mt: 0.5,
            fontSize: 13,
            color: "rgba(7,18,44,0.65)",
            lineHeight: 1.6,
          }}
        >
          {desc}
        </Typography>
      </Box>
    </Box>
  );
}
