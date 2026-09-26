// "use client";
// import { useState } from "react";
// import {
//   Box,
//   Container,
//   Typography,
//   Button,
//   List,
//   ListItem,
//   ListItemIcon,
//   Drawer,
//   Stack,
//   Divider,
// } from "@mui/material";

// // Icons
// import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
// import AISpecializedBillingServices from "../../components/blubilling/AISpecializedBillingServices";
// import { WhyChooseBluBilling } from "../../components/blubilling/WhyChooseBluBilling";
// import ContactSectionPro from "../../components/blubilling/ContactSection";
// import ValueAddedServicesSection from "../../components/blubilling/ValueAddedServicesSection";
// import RevenueCycleManagement from "../../components/blubilling/RevenueCycleManagement";
// import PremiumHero from "../../components/blubilling/PremiumHero";


// const valueData = [
//   {
//     label: "Customer Commitment",
//     text: "We develop relationships that make a positive difference in our customers' lives through AI-powered personalization and support.",
//   },
//   {
//     label: "Quality",
//     text: "We provide outstanding Healthcare RCM enhanced by AI accuracy and unsurpassed service.",
//   },
//   {
//     label: "Integrity",
//     text: "We uphold the highest standards of integrity in all our actions with transparent AI.",
//   },
//   {
//     label: "Teamwork",
//     text: "We work together with AI augmentation across boundaries to help the company win.",
//   },
//   {
//     label: "Respect for people",
//     text: "We value our people, encourage their development, and reward their performance.",
//   },
//   {
//     label: "Personal Accountability",
//     text: "We are personally accountable for delivering on our commitments.",
//   },
//   {
//     label: "Innovation",
//     text: "We continuously integrate the latest AI technologies to maximize revenue potential.",
//   },
// ];









// export default function BluBillingLanding() {
//   const [mobileOpen, setMobileOpen] = useState(false);


//   return (
//     <Box sx={{ bgcolor: "white", minHeight: "100vh" }}>
//       {/* Mobile Drawer */}
//       <Drawer anchor="right" open={mobileOpen} onClose={() => setMobileOpen(false)}>
//         <Box sx={{ width: 280, p: 2 }}>
//           <Typography sx={{ fontWeight: 900, color: "#1B4DFF", mb: 2 }}>
//             BluBilling
//           </Typography>
//           <Divider sx={{ mb: 2 }} />
//         </Box>
//       </Drawer>

//       {/* --- HERO SECTION --- */}
//       <PremiumHero />

//       {/* --- VALUES SECTION --- */}
//       {/* --- VALUES SECTION --- */}
//       <Box
//         sx={{
//           position: "relative",
//           py: { xs: 8, md: 12 },
//           bgcolor: "#fff",
//           overflow: "hidden",
//         }}
//       >
//         {/* Soft ambient glow */}
//         <Box
//           sx={{
//             position: "absolute",
//             top: "10%",
//             right: "-10%",
//             width: 520,
//             height: 520,
//             borderRadius: "50%",
//             background:
//               "radial-gradient(circle, rgba(27,77,255,0.08) 0%, transparent 65%)",
//             pointerEvents: "none",
//           }}
//         />

//         <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
//           <Box
//             sx={{
//               display: "grid",
//               gridTemplateColumns: { xs: "1fr", md: "1fr 1.05fr" },
//               alignItems: "center",
//               gap: { xs: 6, md: 8 },
//             }}
//           >
//             {/* ─── LEFT — Image ─── */}
//             <Box
//               sx={{
//                 display: "flex",
//                 justifyContent: { xs: "center", md: "flex-start" },
//                 alignItems: "center",
//                 width: "100%",
//                 minWidth: 0,
//                 order: { xs: 2, md: 1 },
//               }}
//             >
//               <Box
//                 sx={{
//                   position: "relative",
//                   width: "100%",
//                   maxWidth: { xs: 340, sm: 460, md: 560, lg: 620 },
//                   mx: { xs: "auto", md: 0 },
//                 }}
//               >



//               </Box>
//             </Box>

//             {/* ─── RIGHT — Content ─── */}
//             <Box sx={{ minWidth: 0, order: { xs: 1, md: 2 } }}>
//               {/* Pill badge */}
//               <Box
//                 sx={{
//                   display: "inline-flex",
//                   alignItems: "center",
//                   gap: 1,
//                   px: 2,
//                   py: 0.8,
//                   borderRadius: 999,
//                   bgcolor: "rgba(27,77,255,0.08)",
//                   border: "1px solid rgba(27,77,255,0.18)",
//                   mb: 2.5,
//                 }}
//               >
//                 <Box
//                   sx={{
//                     width: 6,
//                     height: 6,
//                     borderRadius: "50%",
//                     bgcolor: "#1B4DFF",
//                   }}
//                 />
//                 <Typography
//                   sx={{
//                     fontSize: 11,
//                     fontWeight: 800,
//                     letterSpacing: "0.12em",
//                     color: "#1B4DFF",
//                     textTransform: "uppercase",
//                   }}
//                 >
//                   Our Values
//                 </Typography>
//               </Box>

//               {/* Headline */}
//               <Typography
//                 sx={{
//                   fontWeight: 900,
//                   color: "#07122C",
//                   fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.6rem" },
//                   lineHeight: 1.15,
//                   letterSpacing: "-0.02em",
//                   mb: 3,
//                   maxWidth: 620,
//                 }}
//               >
//                 Our Values reflect who we are and what we{" "}
//                 <Box
//                   component="span"
//                   sx={{
//                     background:
//                       "#1B4DFF",
//                     WebkitBackgroundClip: "text",
//                     WebkitTextFillColor: "transparent",
//                   }}
//                 >
//                   stand for.
//                 </Box>
//               </Typography>

//               {/* Values list */}
//               <Stack spacing={1.8}>
//                 {valueData?.map((val, idx) => (
//                   <Box
//                     key={val.label}
//                     sx={{
//                       display: "flex",
//                       alignItems: "flex-start",
//                       gap: 2,
//                       p: 1.6,
//                       borderRadius: 3,
//                       transition: "all 0.25s ease",
//                       "&:hover": {
//                         bgcolor: "rgba(27,77,255,0.04)",
//                         transform: "translateX(4px)",
//                       },
//                       "&:hover .value-number": {
//                         background:
//                           "linear-gradient(135deg, #1B4DFF 0%, #00A3FF 100%)",
//                         color: "#fff",
//                         borderColor: "transparent",
//                         boxShadow: "0 8px 20px -6px rgba(27,77,255,0.5)",
//                       },
//                     }}
//                   >
//                     {/* Numbered chip */}
//                     <Box
//                       className="value-number"
//                       sx={{
//                         width: 34,
//                         height: 34,
//                         borderRadius: "10px",
//                         bgcolor: "rgba(27,77,255,0.08)",
//                         border: "1px solid rgba(27,77,255,0.18)",
//                         color: "#1B4DFF",
//                         display: "flex",
//                         alignItems: "center",
//                         justifyContent: "center",
//                         fontWeight: 900,
//                         fontSize: 13,
//                         flexShrink: 0,
//                         transition: "all 0.3s ease",
//                       }}
//                     >
//                       {String(idx + 1).padStart(2, "0")}
//                     </Box>

//                     {/* Text */}
//                     <Box sx={{ minWidth: 0, pt: 0.5 }}>
//                       <Typography
//                         sx={{
//                           fontSize: 14,
//                           fontWeight: 900,
//                           color: "#0B1220",
//                           mb: 0.4,
//                           lineHeight: 1.35,
//                         }}
//                       >
//                         {val.label}
//                       </Typography>
//                       <Typography
//                         sx={{
//                           fontSize: 13.5,
//                           color: "rgba(7,18,44,0.68)",
//                           lineHeight: 1.7,
//                         }}
//                       >
//                         {val.text}
//                       </Typography>
//                     </Box>
//                   </Box>
//                 ))}
//               </Stack>

//               {/* CTA */}
//               {/* <Button
//                 variant="contained"
//                 sx={{
//                   mt: 4,
//                   background:
//                     "linear-gradient(90deg, #2f46ff 0%, #1b4dff 100%)",
//                   color: "#fff",
//                   textTransform: "none",
//                   fontWeight: 800,
//                   fontSize: "0.95rem",
//                   borderRadius: 999,
//                   px: 3.2,
//                   py: 1.3,
//                   boxShadow: "0 14px 35px rgba(27,77,255,0.30)",
//                   transition: "all 0.3s ease",
//                   width: { xs: "100%", sm: "auto" },
//                   maxWidth: { xs: 300, sm: "none" },
//                   mx: { xs: "auto", md: 0 },
//                   display: { xs: "flex", sm: "inline-flex" },
//                   "&:hover": {
//                     boxShadow: "0 20px 45px rgba(27,77,255,0.40)",
//                     transform: "translateY(-2px)",
//                   },
//                 }}
//               >
//                 Read More
//               </Button> */}
//             </Box>
//           </Box>
//         </Container>
//       </Box>

//       <RevenueCycleManagement />
//       <ValueAddedServicesSection />
//       <AISpecializedBillingServices />
//       <WhyChooseBluBilling />
//       <ContactSectionPro />
//     </Box>
//   );
// }




"use client";

import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Drawer,
  Stack,
  Divider,
} from "@mui/material";

import AISpecializedBillingServices from "../../components/blubilling/AISpecializedBillingServices";
import { WhyChooseBluBilling } from "../../components/blubilling/WhyChooseBluBilling";
import ContactSectionPro from "../../components/blubilling/ContactSection";
import ValueAddedServicesSection from "../../components/blubilling/ValueAddedServicesSection";
import RevenueCycleManagement from "../../components/blubilling/RevenueCycleManagement";
import PremiumHero from "../../components/blubilling/PremiumHero";

/* ============================================================
   DATA
   ============================================================ */

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
    label: "Respect for People",
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

/* ============================================================
   MAIN COMPONENT
   ============================================================ */

export default function BluBillingLanding() {

  return (
    <Box sx={{ bgcolor: "#fff" }}>
      {/* ───────── HERO ───────── */}
      <PremiumHero />

      {/* ───────── VALUES SECTION ───────── */}
      <Box
        sx={{
          position: "relative",
          py: { xs: 8, md: 13 },
          bgcolor: "#fff",
          overflow: "hidden",
        }}
      >
        {/* Ambient glows */}
        <Box
          sx={{
            position: "absolute",
            top: "8%",
            left: "-10%",
            width: 520,
            height: 520,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(27,77,255,0.10) 0%, transparent 65%)",
            pointerEvents: "none",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: "-15%",
            right: "-10%",
            width: 560,
            height: 560,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(0,163,255,0.10) 0%, transparent 65%)",
            pointerEvents: "none",
          }}
        />

        {/* Dotted pattern */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            opacity: 0.25,
            backgroundImage:
              "radial-gradient(rgba(27,77,255,0.22) 0.6px, transparent 0.6px)",
            backgroundSize: "22px 22px",
            pointerEvents: "none",
          }}
        />

        <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>

          {/* LEFT — Heading */}
          <Box sx={{ textAlign: { xs: "center", md: "center" } , mb: 4,}}>
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                px: 2,
                py: 0.8,
                borderRadius: 999,
                bgcolor: "rgba(27,77,255,0.08)",
                border: "1px solid rgba(27,77,255,0.18)",
                mb: 2.5,
              }}
            >
              <Box
                sx={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  bgcolor: "#1B4DFF",
                }}
              />
              <Typography
                sx={{
                  fontSize: 11,
                  fontWeight: 800,
                  letterSpacing: "0.14em",
                  color: "#1B4DFF",
                  textTransform: "uppercase",
                }}
              >
                Our Values
              </Typography>
            </Box>

            <Typography
              sx={{
                fontWeight: 900,
                color: "#07122C",
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                lineHeight: 1.08,
                letterSpacing: "-0.02em",
                mx: { xs: "auto", md: 0 },
              }}
            >
              The Principles{" "}
              <Box
                component="span"
                sx={{
                  background:
                    "linear-gradient(90deg, #1B4DFF 0%, #2F7BFF 50%, #00A3FF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Behind BluBilling.
              </Box>
            </Typography>

            <Typography
              sx={{
                mt: 2.5,
                fontSize: { xs: 14.5, md: 16 },
                color: "rgba(7,18,44,0.65)",
                lineHeight: 1.75,
                mx: { xs: "auto", md: 0 },
              }}
            >
              Seven commitments that guide every decision we make — from how we
              build our AI to how we treat our clients, our people, and each
              other.
            </Typography>
          </Box>

          {/* ─── Values grid ─── */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "1fr 1fr",
                lg: "repeat(3, 1fr)",
              },
              gap: { xs: 2.2, md: 2.6 },
            }}
          >
            {valueData.map((val, idx) => {
              // Rotate through 7 accents
              const accents = [
                "#1B4DFF",
                "#7C3AED",
                "#0EA5A4",
                "#F59E0B",
                "#EC4899",
                "#06B6D4",
                "#10B981",
              ];
              const accent = accents[idx % accents.length];

              // Feature the last card (Innovation) as full-width on lg
              const isFeatured = idx === valueData.length - 1;

              return (
                <Box
                  key={val.label}
                  sx={{
                    position: "relative",
                    gridColumn: {
                      xs: "span 1",
                      sm: "span 1",
                      lg: isFeatured ? "1 / -1" : "span 1",
                    },
                    borderRadius: 4,
                    bgcolor: "#fff",
                    border: "1px solid rgba(227,232,255,0.95)",
                    boxShadow: "0 10px 30px -10px rgba(15,23,42,0.06)",
                    p: { xs: 2.6, md: 3 },
                    overflow: "hidden",
                    display: "flex",
                    gap: 2,
                    alignItems: "flex-start",
                    transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 3,
                      background: `linear-gradient(90deg, ${accent} 0%, transparent 100%)`,
                      opacity: 0.85,
                    },
                    "&:hover": {
                      transform: "translateY(-6px)",
                      borderColor: `${accent}55`,
                      boxShadow: `0 30px 70px -25px ${accent}55`,
                    },
                    "&:hover .value-number": {
                      background: `linear-gradient(135deg, ${accent} 0%, ${accent}cc 100%)`,
                      color: "#fff",
                      borderColor: "transparent",
                      boxShadow: `0 10px 25px -10px ${accent}99`,
                    },
                  }}
                >
                  {/* Numbered chip */}
                  <Box
                    className="value-number"
                    sx={{
                      width: 42,
                      height: 42,
                      borderRadius: "12px",
                      bgcolor: `${accent}12`,
                      border: `1px solid ${accent}22`,
                      color: accent,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 900,
                      fontSize: 14,
                      flexShrink: 0,
                      transition: "all 0.3s ease",
                    }}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </Box>

                  {/* Text */}
                  <Box sx={{ minWidth: 0, flex: 1 }}>
                    <Typography
                      sx={{
                        fontSize: { xs: 15, md: 15.5 },
                        fontWeight: 900,
                        color: "#0B1220",
                        mb: 0.6,
                        lineHeight: 1.3,
                      }}
                    >
                      {val.label}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: 13.5,
                        color: "rgba(7,18,44,0.68)",
                        lineHeight: 1.7,
                      }}
                    >
                      {val.text}
                    </Typography>
                  </Box>
                </Box>
              );
            })}
          </Box>

          {/* ─── Closing line ─── */}
          <Box textAlign="center" mt={{ xs: 6, md: 2 }}>
            <Typography
              sx={{
                fontSize: { xs: 15, md: 17 },
                // fontWeight: 600,
                color: "#54575e",
                // fontStyle: "italic",
                mx: "auto",
                lineHeight: 1.6,
              }}
            >
              "These aren't aspirations. They're how we operate — every claim, every
              client, every day."
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* ───────── OTHER SECTIONS ───────── */}
      <RevenueCycleManagement />
      <ValueAddedServicesSection />
      <AISpecializedBillingServices />
      <WhyChooseBluBilling />
      {/* <ContactSectionPro /> */}
    </Box>
  );
}