"use client";
import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  List,
  ListItem,
  ListItemIcon,
  Drawer,
  Stack,
  Divider,
} from "@mui/material";

// Icons
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import AISpecializedBillingServices from "../../components/blubilling/AISpecializedBillingServices";
import { WhyChooseBluBilling } from "../../components/blubilling/WhyChooseBluBilling";
import ContactSectionPro from "../../components/blubilling/ContactSection";
import ValueAddedServicesSection from "../../components/blubilling/ValueAddedServicesSection";
import RevenueCycleManagement from "../../components/blubilling/RevenueCycleManagement";
import PremiumHero from "../../components/blubilling/PremiumHero";

const valueData = [
  {
    label: "Customer Commitment",
    text: "We develop relationships that make a positive difference in our customers' lives through AI-powered personalization and support.",
  },
  {
    label: "Quality",
    text: "We provide outstanding Healthcare RCM enhanced by AI accuracy and unsurpassed service.",
  },
  {
    label: "Integrity",
    text: "We uphold the highest standards of integrity in all our actions with transparent AI.",
  },
  {
    label: "Teamwork",
    text: "We work together with AI augmentation across boundaries to help the company win.",
  },
  {
    label: "Respect for people",
    text: "We value our people, encourage their development, and reward their performance.",
  },
  {
    label: "Personal Accountability",
    text: "We are personally accountable for delivering on our commitments.",
  },
  {
    label: "Innovation",
    text: "We continuously integrate the latest AI technologies to maximize revenue potential.",
  },
];









export default function BluBillingLanding() {
  const [mobileOpen, setMobileOpen] = useState(false);


  return (
    <Box sx={{ bgcolor: "white", minHeight: "100vh" }}>
      {/* Mobile Drawer */}
      <Drawer anchor="right" open={mobileOpen} onClose={() => setMobileOpen(false)}>
        <Box sx={{ width: 280, p: 2 }}>
          <Typography sx={{ fontWeight: 900, color: "#1B4DFF", mb: 2 }}>
            BluBilling
          </Typography>
          <Divider sx={{ mb: 2 }} />
        </Box>
      </Drawer>

      {/* --- HERO SECTION --- */}
      <PremiumHero />

      {/* --- VALUES SECTION --- */}
      <Box sx={{ py: { xs: 7, md: 10 },  }}>
        <Container maxWidth="lg">
          <Stack
            direction={{ xs: "column-reverse", md: "row" }}
            spacing={{ xs: 6, md: 8 }}
            alignItems="center"
            justifyContent="space-between"
          >
            {/* Left Image */}
            <Box sx={{ flex: 1, minWidth: 0 }}>
              <Box
                component="img"
                src="/values-img.png"
                alt="Values"
                sx={{
                  width: "100%",
                  maxWidth: 620,
                  height: "auto",
                  display: "block",
                  mx: { xs: "auto", md: 0 },
                }}
              />
            </Box>

            {/* Right Content */}
            <Box sx={{ flex: 1, minWidth: 0 }}>
              <Typography
                sx={{
                  fontSize: 11,
                  fontWeight: 900,
                  letterSpacing: 1.2,
                  color: "#1B4DFF",
                  mb: 1,
                }}
              >
                OUR VALUES
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: "1.6rem", sm: "2rem", md: "2.2rem" },
                  fontWeight: 900,
                  color: "#07122C",
                  lineHeight: 1.2,
                  mb: 3,
                }}
              >
                Our Values reflect who we are and what we stand for as a company
              </Typography>

              <List sx={{ p: 0, m: 0 }}>
                {valueData?.map((val) => (
                  <ListItem
                    key={val.label}
                    disableGutters
                    sx={{ alignItems: "flex-start", py: 1 }}
                  >
                    <ListItemIcon sx={{ minWidth: 30, mt: 0.4 }}>
                      <CheckCircleOutlineIcon sx={{ color: "#1B4DFF" }} />
                    </ListItemIcon>

                    <Typography sx={{ fontSize: 13.2, color: "#0B1220" }}>
                      <Box component="span" sx={{ fontWeight: 800 }}>
                        {val.label}:
                      </Box>{" "}
                      <Box component="span" sx={{ color: "rgba(7,18,44,0.7)" }}>
                        {val.text}
                      </Box>
                    </Typography>
                  </ListItem>
                ))}
              </List>

              <Button
                variant="contained"
                sx={{
                  mt: 3,
                  bgcolor: "#1B4DFF",
                  textTransform: "none",
                  fontWeight: 700,
                  borderRadius: 2,
                  px: 2.5,
                  "&:hover": { bgcolor: "#163FE0" },
                }}
              >
                Read More →
              </Button>
            </Box>
          </Stack>
        </Container>
      </Box>

      <RevenueCycleManagement />
      <ValueAddedServicesSection />
      <AISpecializedBillingServices />
      <WhyChooseBluBilling />
      <ContactSectionPro />
    </Box>
  );
}
