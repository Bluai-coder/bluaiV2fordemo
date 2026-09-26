// "use client";

// import React from "react";
// import { Box, Button, Container, Stack, Typography } from "@mui/material";
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";

// export function WhyChooseBluBilling() {
//   const points = [
//     {
//       strong: "99%",
//       text: "First-Pass Clean Claim Rate through AI pre-submission validation",
//     },
//     {
//       strong: "50%",
//       text: "Reduction in Denial Rates with predictive analytics",
//     },
//     {
//       strong: "75%",
//       text: "Faster Payment Posting through intelligent automation",
//     },
//     {
//       strong: "40%",
//       text: "Increase in Collections via AI-optimized workflows",
//     },
//     {
//       strong: "Real-time",
//       text: "Visibility into every aspect of your revenue cycle",
//     },
//     {
//       strong: "Continuous",
//       text: "Improvement through machine learning",
//     },
//     {
//       strong: "100%",
//       text: "HIPAA Compliant AI infrastructure",
//     },
//     {
//       strong: "24/7",
//       text: "AI Support augmenting our expert human team",
//     },
//   ];

//   return (
//     <Box
//       sx={{
//         py: { xs: 7, md: 10 },
//         bgcolor: "#ffffff",
//         position: "relative",
//         overflow: "hidden",
//       }}
//     >


//       <Container maxWidth="xl" sx={{ position: "relative" }}>
//         <Stack
//           direction={{ xs: "column", md: "row" }}
//           spacing={{ xs: 4.5, md: 6 }}
//           alignItems="center"
//           justifyContent="space-between"
//         >
//           {/* LEFT: IMAGE CARD */}
//           <Box sx={{ flex: 1, minWidth: 0, width: "100%" }}>
//             <Box
//               sx={{
//                 position: "relative",
//                 width: "100%",
//                 maxWidth: 500,
//                 mx: { xs: "auto", md: 0 },
//                 borderRadius: 5,
//                 overflow: "hidden",
//                 // border: "1px solid rgba(227,232,255,0.95)",
//                 // boxShadow: "0 30px 80px rgba(15, 23, 42, 0.12)",
//                 // bgcolor: "#F7F9FF",
//               }}
//             >
//               {/* Pattern behind image */}
//               <Box
//                 sx={{
//                   position: "absolute",
//                   inset: 0,
//                   background:
//                     "repeating-linear-gradient(135deg, rgba(27,77,255,0.08) 0px, rgba(27,77,255,0.08) 8px, rgba(27,77,255,0.02) 8px, rgba(27,77,255,0.02) 16px)",
//                   opacity: 0.55,
//                 }}
//               />

//               {/* Real image */}
//               <Box
//                 component="img"
//                 src="/blubilling/why-choose.jpg"
//                 alt="Why Choose BluBilling"
//                 sx={{
//                   position: "relative",
//                   width: "100%",
//                   height: { xs: 420, sm: 460, md: 820 }, //  fixed height so it never becomes too tall
//                   objectFit: "cover",
//                   objectPosition: "center",
//                   display: "block",
//                 }}
//               />
//             </Box>
//           </Box>

//           {/* RIGHT: CONTENT CARD */}
//           <Box sx={{ flex: 1.15, minWidth: 0, width: "100%" }}>
//             <Box
//               sx={{
//                 height: { xs: 420, sm: 460, md: 820 },
//                 borderRadius: 5,
//                 border: "1px solid rgba(227,232,255,0.95)",
//                 bgcolor: "rgba(247,249,255,0.65)",
//                 backdropFilter: "blur(10px)",
//                 boxShadow: "0 20px 60px rgba(15, 23, 42, 0.08)",
//                 p: { xs: 3, md: 4 },
//               }}
//             >
//               {/* Title */}
//               <Typography
//                 sx={{
//                   fontWeight: 900,
//                   color: "#07122C",
//                   fontSize: { xs: "1.75rem", sm: "2rem", md: "2.25rem" },
//                   lineHeight: 1.12,
//                 }}
//               >
//                 Why Choose{" "}
//                 <Box component="span" sx={{ color: "#1B4DFF" }}>
//                   AI-Powered BluBilling
//                 </Box>
//                 ?
//               </Typography>

//               {/* Highlight line */}
//               <Box
//                 sx={{
//                   mt: 2,
//                   display: "inline-flex",
//                   px: 1.3,
//                   py: 0.7,
//                   borderRadius: 99,
//                   bgcolor: "rgba(27,77,255,0.12)",
//                   border: "1px solid rgba(27,77,255,0.22)",
//                 }}
//               >
//                 <Typography
//                   sx={{
//                     fontSize: 12.2,
//                     fontWeight: 900,
//                     color: "#1B4DFF",
//                     letterSpacing: 0.6,
//                     textTransform: "uppercase",
//                   }}
//                 >
//                   Smart billing. Clean claims. Faster revenue.
//                 </Typography>
//               </Box>

//               {/* Description */}
//               <Typography
//                 sx={{
//                   mt: 2,
//                   fontSize: 13.5,
//                   lineHeight: 1.75,
//                   color: "rgba(7,18,44,0.72)",
//                   maxWidth: 560,
//                 }}
//               >
//                 BluBilling streamlines medical billing & claims with AI-driven accuracy,
//                 reduces denials, ensures compliance, and accelerates collections for
//                 healthcare providers.
//               </Typography>

//               {/* Points */}
//               <Box
//                 sx={{
//                   mt: 3,
//                   display: "flex",
//                   flexWrap: "wrap",
//                   gap: 1.6,
//                 }}
//               >
//                 {points.map((p) => (
//                   <Box
//                     key={p.strong + p.text}
//                     sx={{
//                       width: { xs: "100%", sm: "calc(50% - 10px)" }, //  2 columns on desktop
//                       borderRadius: 3,
//                       p: 1.7,
//                       bgcolor: "white",
//                       border: "1px solid rgba(227,232,255,0.95)",
//                       boxShadow: "0 10px 25px rgba(15, 23, 42, 0.04)",
//                       display: "flex",
//                       gap: 1.3,
//                       alignItems: "flex-start",
//                     }}
//                   >
//                     <CheckCircleIcon sx={{ color: "#1B4DFF", fontSize: 20, mt: "2px" }} />

//                     <Typography
//                       sx={{
//                         fontSize: 13.3,
//                         lineHeight: 1.6,
//                         color: "rgba(7,18,44,0.78)",
//                       }}
//                     >
//                       <Box component="span" sx={{ fontWeight: 900, color: "#0B1220" }}>
//                         {p.strong}
//                       </Box>{" "}
//                       {p.text}
//                     </Typography>
//                   </Box>
//                 ))}
//               </Box>

//               {/* Buttons */}
//               <Stack
//                 direction={{ xs: "column", sm: "row" }}
//                 spacing={2}
//                 sx={{ mt: 4 }}
//               >
//                 <Button
//                   variant="contained"
//                   sx={{
//                     bgcolor: "#1B4DFF",
//                     textTransform: "none",
//                     fontWeight: 900,
//                     borderRadius: 2.5,
//                     px: 3.3,
//                     py: 1.25,
//                     boxShadow: "0 18px 40px rgba(27,77,255,0.22)",
//                     "&:hover": { bgcolor: "#163FE0" },
//                   }}
//                 >
//                   Get Started
//                 </Button>

//                 <Button
//                   variant="outlined"
//                   sx={{
//                     borderColor: "rgba(27,77,255,0.35)",
//                     color: "#1B4DFF",
//                     textTransform: "none",
//                     fontWeight: 900,
//                     borderRadius: 2.5,
//                     px: 3.3,
//                     py: 1.25,
//                     "&:hover": { borderColor: "#1B4DFF" },
//                   }}
//                 >
//                   Learn More
//                 </Button>
//               </Stack>

//               {/* Footer note */}
//               <Typography
//                 sx={{
//                   mt: 3,
//                   fontSize: 13,
//                   lineHeight: 1.75,
//                   color: "rgba(7,18,44,0.62)",
//                   maxWidth: 620,
//                 }}
//               >
//                 Our AI technology doesn’t replace human expertise — it amplifies it,
//                 allowing your team to focus on complex cases while AI handles routine
//                 tasks with speed and accuracy.
//               </Typography>
//             </Box>
//           </Box>
//         </Stack>
//       </Container>
//     </Box>
//   );
// }



"use client";

import React from "react";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import InsightsIcon from "@mui/icons-material/Insights";

/* ============================================================
   DATA
   ============================================================ */

const points = [
  {
    strong: "99%",
    text: "First-Pass Clean Claim Rate through AI pre-submission validation",
    accent: "#1B4DFF",
  },
  {
    strong: "50%",
    text: "Reduction in Denial Rates with predictive analytics",
    accent: "#7C3AED",
  },
  {
    strong: "75%",
    text: "Faster Payment Posting through intelligent automation",
    accent: "#0EA5A4",
  },
  {
    strong: "40%",
    text: "Increase in Collections via AI-optimized workflows",
    accent: "#F59E0B",
  },
  {
    strong: "Real-time",
    text: "Visibility into every aspect of your revenue cycle",
    accent: "#EC4899",
  },
  {
    strong: "Continuous",
    text: "Improvement through machine learning",
    accent: "#06B6D4",
  },
  {
    strong: "100%",
    text: "HIPAA Compliant AI infrastructure",
    accent: "#10B981",
  },
  {
    strong: "24/7",
    text: "AI Support augmenting our expert human team",
    accent: "#6366F1",
  },
];

/* ============================================================
   MAIN COMPONENT
   ============================================================ */

export function WhyChooseBluBilling() {
  return (
    <Box
      sx={{
        position: "relative",
        py: { xs: 8, md: 12 },
        bgcolor: "#fff",
        overflow: "hidden",
      }}
    >
      {/* Soft ambient glow */}
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          left: "-10%",
          width: 520,
          height: 520,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(27,77,255,0.08) 0%, transparent 65%)",
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
            "radial-gradient(circle, rgba(0,163,255,0.08) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "1fr 1.25fr" },
            alignItems: "stretch",
            gap: { xs: 5, md: 6, lg: 7 },
          }}
        >
          {/* ─── LEFT: IMAGE ─── */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "stretch",
              minWidth: 0,
              order: { xs: 2, lg: 1 },
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                maxWidth: { xs: 420, sm: 520, lg: "100%" },
                mx: { xs: "auto", lg: 0 },
                borderRadius: 5,
                overflow: "hidden",
                background:
                  "linear-gradient(135deg, #EEF2FF 0%, #F7FAFF 100%)",
                border: "1px solid rgba(227,232,255,0.95)",
                boxShadow: "0 30px 80px -30px rgba(27,77,255,0.25)",
                minHeight: { xs: 380, sm: 460, lg: 640 },
              }}
            >
              {/* Pattern overlay */}
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "repeating-linear-gradient(135deg, rgba(27,77,255,0.06) 0px, rgba(27,77,255,0.06) 8px, rgba(27,77,255,0.015) 8px, rgba(27,77,255,0.015) 16px)",
                  opacity: 0.7,
                  pointerEvents: "none",
                  zIndex: 1,
                }}
              />

              {/* Image */}
              <Box
                component="img"
                src="/blubilling/why-choose.jpg"
                alt="Why Choose BluBilling"
                sx={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  minHeight: { xs: 380, sm: 460, lg: 640 },
                  objectFit: "cover",
                  objectPosition: "center",
                  display: "block",
                  zIndex: 0,
                }}
              />

              {/* Floating stat badge — bottom left */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: { xs: 16, lg: 24 },
                  left: { xs: 16, lg: 24 },
                  display: "flex",
                  alignItems: "center",
                  gap: 1.4,
                  px: 2,
                  py: 1.4,
                  borderRadius: 3,
                  bgcolor: "rgba(255,255,255,0.96)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(27,77,255,0.15)",
                  boxShadow: "0 20px 45px -20px rgba(27,77,255,0.5)",
                  zIndex: 2,
                }}
              >
                <Box
                  sx={{
                    width: 36,
                    height: 36,
                    borderRadius: "10px",
                    background:
                      "linear-gradient(135deg, #1B4DFF 0%, #00A3FF 100%)",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <InsightsIcon fontSize="small" />
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontSize: 10,
                      fontWeight: 800,
                      color: "#94A3B8",
                      letterSpacing: "0.1em",
                    }}
                  >
                    AI-POWERED
                  </Typography>
                  <Typography
                    sx={{ fontSize: 13, fontWeight: 900, color: "#0B1220" }}
                  >
                    Revenue Cycle
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>

          {/* ─── RIGHT: CONTENT ─── */}
          <Box sx={{ minWidth: 0, order: { xs: 1, lg: 2 } }}>
            {/* Pill */}
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
              <AutoAwesomeIcon sx={{ fontSize: 14, color: "#1B4DFF" }} />
              <Typography
                sx={{
                  fontSize: 11,
                  fontWeight: 800,
                  letterSpacing: "0.12em",
                  color: "#1B4DFF",
                  textTransform: "uppercase",
                }}
              >
                Why BluBilling
              </Typography>
            </Box>

            {/* Headline */}
            <Typography
              sx={{
                fontWeight: 900,
                color: "#07122C",
                fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.6rem" },
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
                maxWidth: 640,
              }}
            >
              Why Choose{" "}
              <Box
                component="span"
                sx={{
                  background:
                    "linear-gradient(90deg, #1B4DFF 0%, #2F7BFF 50%, #00A3FF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                AI-Powered BluBilling?
              </Box>
            </Typography>

            {/* Subtitle */}
            <Typography
              sx={{
                mt: 2,
                fontSize: { xs: 14, md: 15.5 },
                lineHeight: 1.75,
                color: "rgba(7,18,44,0.68)",
                maxWidth: 620,
              }}
            >
              BluBilling streamlines medical billing & claims with AI-driven
              accuracy — reduces denials, ensures compliance, and accelerates
              collections for healthcare providers.
            </Typography>

            {/* Highlight chip */}
            <Box
              sx={{
                mt: 2.5,
                display: "inline-flex",
                px: 1.6,
                py: 0.9,
                borderRadius: 99,
                bgcolor: "rgba(27,77,255,0.10)",
                border: "1px solid rgba(27,77,255,0.20)",
              }}
            >
              <Typography
                sx={{
                  fontSize: 11,
                  fontWeight: 900,
                  color: "#1B4DFF",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                Smart billing · Clean claims · Faster revenue
              </Typography>
            </Box>

            {/* Stat cards grid */}
            <Box
              sx={{
                mt: 3.5,
                display: "grid",
                gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                gap: { xs: 1.6, md: 2 },
              }}
            >
              {points.map((p) => (
                <Box
                  key={p.strong + p.text}
                  sx={{
                    position: "relative",
                    borderRadius: 3,
                    p: { xs: 1.8, md: 2 },
                    bgcolor: "#fff",
                    border: "1px solid rgba(227,232,255,0.95)",
                    boxShadow: "0 10px 25px rgba(15,23,42,0.04)",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 1.4,
                    overflow: "hidden",
                    transition: "all 0.25s ease",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      bottom: 0,
                      width: 3,
                      background: `linear-gradient(180deg, ${p.accent} 0%, ${p.accent}66 100%)`,
                    },
                    "&:hover": {
                      transform: "translateY(-3px)",
                      borderColor: `${p.accent}55`,
                      boxShadow: `0 20px 45px -20px ${p.accent}55`,
                    },
                    "&:hover .stat-icon": {
                      background: `linear-gradient(135deg, ${p.accent} 0%, ${p.accent}cc 100%)`,
                      color: "#fff",
                    },
                  }}
                >
                  <Box
                    className="stat-icon"
                    sx={{
                      width: 32,
                      height: 32,
                      borderRadius: "10px",
                      bgcolor: `${p.accent}12`,
                      color: p.accent,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      transition: "all 0.25s ease",
                    }}
                  >
                    <CheckCircleIcon sx={{ fontSize: 18 }} />
                  </Box>

                  <Box sx={{ minWidth: 0, flex: 1 }}>
                    <Typography
                      sx={{
                        fontWeight: 900,
                        fontSize: 14,
                        color: p.accent,
                        mb: 0.3,
                        lineHeight: 1.2,
                      }}
                    >
                      {p.strong}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: 12.8,
                        lineHeight: 1.55,
                        color: "rgba(7,18,44,0.72)",
                      }}
                    >
                      {p.text}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>

            {/* CTAs */}
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              sx={{ mt: 4 }}
            >
              <Button
                variant="contained"
                componet="a"
                href="/contact/"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  background:
                    "linear-gradient(90deg, #2f46ff 0%, #1b4dff 100%)",
                  color: "#fff",
                  textTransform: "none",
                  fontWeight: 800,
                  fontSize: "0.95rem",
                  borderRadius: 999,
                  px: 3.2,
                  py: 1.3,
                  boxShadow: "0 14px 35px rgba(27,77,255,0.30)",
                  transition: "all 0.3s ease",
                  width: { xs: "100%", sm: "auto" },
                  maxWidth: { xs: 300, sm: "none" },
                  mx: { xs: "auto", sm: 0 },
                  display: { xs: "flex", sm: "inline-flex" },
                  "&:hover": {
                    boxShadow: "0 20px 45px rgba(27,77,255,0.40)",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                Get Started
              </Button>

              {/* <Button
                variant="outlined"
                sx={{
                  borderColor: "rgba(27,77,255,0.35)",
                  color: "#1B4DFF",
                  textTransform: "none",
                  fontWeight: 800,
                  fontSize: "0.95rem",
                  borderRadius: 999,
                  px: 3.2,
                  py: 1.3,
                  width: { xs: "100%", sm: "auto" },
                  maxWidth: { xs: 300, sm: "none" },
                  mx: { xs: "auto", sm: 0 },
                  display: { xs: "flex", sm: "inline-flex" },
                  "&:hover": {
                    borderColor: "#1B4DFF",
                    bgcolor: "rgba(27,77,255,0.04)",
                  },
                }}
              >
                Learn More
              </Button> */}
            </Stack>

            {/* Footer note */}
            <Box
              sx={{
                mt: 3.5,
                pt: 2.5,
                borderTop: "1px solid rgba(7,18,44,0.08)",
                display: "flex",
                alignItems: "flex-start",
                gap: 1.4,
              }}
            >
              <Box
                sx={{
                  width: 28,
                  height: 28,
                  borderRadius: "8px",
                  bgcolor: "rgba(27,77,255,0.08)",
                  color: "#1B4DFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  mt: "2px",
                }}
              >
                <AutoAwesomeIcon sx={{ fontSize: 16 }} />
              </Box>
              <Typography
                sx={{
                  fontSize: 12.8,
                  lineHeight: 1.7,
                  color: "rgba(7,18,44,0.62)",
                  maxWidth: 620,
                }}
              >
                Our AI technology doesn't replace human expertise — it
                amplifies it, allowing your team to focus on complex cases
                while AI handles routine tasks with speed and accuracy.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}