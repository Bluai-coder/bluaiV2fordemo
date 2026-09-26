// "use client";

// import React from "react";
// import {
//   Box,
//   Button,
//   Container,
//   MenuItem,
//   Stack,
//   TextField,
//   Typography,
//   Divider,
// } from "@mui/material";

// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import CallIcon from "@mui/icons-material/Call";
// import AccessTimeIcon from "@mui/icons-material/AccessTime";
// import EmailIcon from "@mui/icons-material/Email";

// export default function ContactSectionPro() {
//   return (
//     <Box
//       sx={{
//         py: { xs: 8, md: 11 },
//         bgcolor: "#ffffff",
//         position: "relative",
//         overflow: "hidden",
//       }}
//     >
    

//       <Container maxWidth="xl" sx={{ position: "relative" }}>
//         {/* TOP: Title */}
//         <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
//           <Typography
//             sx={{
//               fontWeight: 900,
//               color: "#07122C",
//               fontSize: { xs: "1.7rem", md: "2.2rem" },
//               lineHeight: 1.15,
//             }}
//           >
//             Contact BluBilling
//           </Typography>

//           <Typography
//             sx={{
//               mt: 1.3,
//               fontSize: 13.5,
//               color: "rgba(7,18,44,0.62)",
//               maxWidth: 640,
//               mx: "auto",
//               lineHeight: 1.7,
//             }}
//           >
//             Tell us what you need — our AI-powered billing experts will connect with you
//             and guide the best workflow for your organization.
//           </Typography>
//         </Box>

//         {/* MAIN ROW (No Grid) */}
//         <Stack
//           direction={{ xs: "column", md: "row" }}
//           spacing={{ xs: 4, md: 5 }}
//           alignItems="stretch"
//           justifyContent="space-between"
//         >
//           {/* LEFT PANEL */}
//           <Box
//             sx={{
//               flex: 1,
//               minWidth: 0,
//               p: { xs: 2.5, md: 3.5 },
//               borderRadius: 4,
//               bgcolor: "#F7F9FF",
//               border: "1px solid rgba(227,232,255,0.9)",
//             }}
//           >
//             <Typography
//               sx={{
//                 fontWeight: 900,
//                 color: "#07122C",
//                 fontSize: { xs: "1.2rem", md: "1.35rem" },
//               }}
//             >
//               Let’s talk
//             </Typography>

//             <Typography
//               sx={{
//                 mt: 1.2,
//                 color: "rgba(7,18,44,0.7)",
//                 fontSize: 13.5,
//                 lineHeight: 1.75,
//               }}
//             >
//               Reach out with your requirements, service interest, or partnership
//               queries. We typically respond within 24 hours.
//             </Typography>

//             <Divider sx={{ my: 2.5 }} />

//             {/* Contact chips */}
//             <Stack spacing={1.5}>
//               <InfoChip
//                 icon={<CallIcon sx={{ fontSize: 20 }} />}
//                 title="Call us"
//                 value="US: +1 302-238-1512 | India: 0172-456-8962"
//               />
//               <InfoChip
//                 icon={<EmailIcon sx={{ fontSize: 20 }} />}
//                 title="Email"
//                 value="support@blubilling.ai"
//               />
//               <InfoChip
//                 icon={<AccessTimeIcon sx={{ fontSize: 20 }} />}
//                 title="Hours"
//                 value="Mon–Fri 9:00AM–6:00PM | Sat 9:00AM–2:00PM"
//               />
//               <InfoChip
//                 icon={<LocationOnIcon sx={{ fontSize: 20 }} />}
//                 title="Location"
//                 value="Dover, DE (USA) • Mohali, Punjab (India)"
//               />
//             </Stack>
//           </Box>

//           {/* RIGHT FORM CARD */}
//           <Box
//             sx={{
//               flex: 1.15,
//               minWidth: 0,
//               borderRadius: 4,
//               border: "1px solid rgba(227,232,255,0.95)",
//               bgcolor: "rgba(255,255,255,0.9)",
//               boxShadow: "0 24px 60px rgba(15, 23, 42, 0.08)",
//               backdropFilter: "blur(8px)",
//               p: { xs: 2.5, md: 3.5 },
//             }}
//           >
//             <Typography
//               sx={{
//                 fontWeight: 900,
//                 color: "#07122C",
//                 fontSize: { xs: "1.05rem", md: "1.2rem" },
//                 mb: 2,
//               }}
//             >
//               Send a message
//             </Typography>

//             <Box
//               component="form"
//               sx={{
//                 display: "flex",
//                 flexWrap: "wrap",
//                 gap: 2,
//               }}
//             >
//               <Box sx={{ width: { xs: "100%", sm: "calc(50% - 8px)" } }}>
//                 <TextField fullWidth label="Your Name" placeholder="John Doe" />
//               </Box>

//               <Box sx={{ width: { xs: "100%", sm: "calc(50% - 8px)" } }}>
//                 <TextField fullWidth label="Email Address" placeholder="john@example.com" />
//               </Box>

//               <Box sx={{ width: { xs: "100%", sm: "calc(50% - 8px)" } }}>
//                 <TextField fullWidth label="Phone Number" placeholder="+91 98765 43210" />
//               </Box>

//               <Box sx={{ width: { xs: "100%", sm: "calc(50% - 8px)" } }}>
//                 <TextField fullWidth select label="Select Service" defaultValue="">
//                   <MenuItem value="">Select Service</MenuItem>
//                   <MenuItem value="rcm">Revenue Cycle Management</MenuItem>
//                   <MenuItem value="medical-billing">Medical Billing</MenuItem>
//                   <MenuItem value="coding">Medical Coding</MenuItem>
//                   <MenuItem value="ar">AR Follow-Up</MenuItem>
//                   <MenuItem value="denials">Denial Management</MenuItem>
//                 </TextField>
//               </Box>

//               <Box sx={{ width: "100%" }}>
//                 <TextField
//                   fullWidth
//                   multiline
//                   minRows={4}
//                   label="Message"
//                   placeholder="Write your message..."
//                 />
//               </Box>

//               <Box sx={{ width: "100%" }}>
//                 <Button
//                   fullWidth
//                   type="submit"
//                   variant="contained"
//                   sx={{
//                     mt: 0.5,
//                     bgcolor: "#1B4DFF",
//                     textTransform: "none",
//                     fontWeight: 900,
//                     py: 1.35,
//                     borderRadius: 2.5,
//                     boxShadow: "0 18px 40px rgba(27,77,255,0.20)",
//                     "&:hover": { bgcolor: "#163FE0" },
//                   }}
//                 >
//                   Submit Message
//                 </Button>

//                 <Typography
//                   sx={{
//                     mt: 1.6,
//                     fontSize: 12.5,
//                     color: "rgba(7,18,44,0.55)",
//                     textAlign: "center",
//                     lineHeight: 1.6,
//                   }}
//                 >
//                   By submitting, you agree to be contacted by our team regarding your request.
//                 </Typography>
//               </Box>
//             </Box>
//           </Box>
//         </Stack>

//         {/* BOTTOM MINI CARDS */}
//         <Box sx={{ mt: { xs: 5, md: 7 } }}>
//           <Stack
//             direction={{ xs: "column", md: "row" }}
//             spacing={2.5}
//             alignItems="stretch"
//           >
//             <MiniCard
//               icon={<LocationOnIcon sx={{ color: "#1B4DFF" }} />}
//               title="Head Office"
//               desc="BluAI Inc., Dover, DE 19901, USA"
//             />
//             <MiniCard
//               icon={<CallIcon sx={{ color: "#1B4DFF" }} />}
//               title="Support Lines"
//               desc="US: +1 302-238-1512 | India: 0172-456-8962"
//             />
//             <MiniCard
//               icon={<AccessTimeIcon sx={{ color: "#1B4DFF" }} />}
//               title="Working Hours"
//               desc="Mon–Fri 9:00AM–6:00PM | Sat 9:00AM–2:00PM"
//             />
//           </Stack>
//         </Box>
//       </Container>
//     </Box>
//   );
// }

// /* ---------- Small Components ---------- */

// function InfoChip({ icon, title, value }) {
//   return (
//     <Box
//       sx={{
//         display: "flex",
//         gap: 1.5,
//         alignItems: "flex-start",
//         p: 1.8,
//         borderRadius: 3,
//         bgcolor: "white",
//         border: "1px solid rgba(227,232,255,0.95)",
//       }}
//     >
//       <Box
//         sx={{
//           width: 38,
//           height: 38,
//           borderRadius: 2,
//           bgcolor: "rgba(27,77,255,0.12)",
//           color: "#1B4DFF",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           flexShrink: 0,
//         }}
//       >
//         {icon}
//       </Box>

//       <Box sx={{ minWidth: 0 }}>
//         <Typography sx={{ fontWeight: 900, fontSize: 13, color: "#07122C" }}>
//           {title}
//         </Typography>
//         <Typography
//           sx={{
//             mt: 0.4,
//             fontSize: 13,
//             color: "rgba(7,18,44,0.7)",
//             lineHeight: 1.6,
//           }}
//         >
//           {value}
//         </Typography>
//       </Box>
//     </Box>
//   );
// }

// function MiniCard({ icon, title, desc }) {
//   return (
//     <Box
//       sx={{
//         flex: 1,
//         minWidth: 0,
//         borderRadius: 3,
//         bgcolor: "white",
//         border: "1px solid rgba(227,232,255,0.95)",
//         p: 2.4,
//         boxShadow: "0 14px 35px rgba(15, 23, 42, 0.04)",
//         display: "flex",
//         gap: 1.5,
//         alignItems: "flex-start",
//       }}
//     >
//       <Box
//         sx={{
//           width: 42,
//           height: 42,
//           borderRadius: 2.2,
//           bgcolor: "rgba(27,77,255,0.12)",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           flexShrink: 0,
//         }}
//       >
//         {icon}
//       </Box>

//       <Box sx={{ minWidth: 0 }}>
//         <Typography sx={{ fontWeight: 900, fontSize: 13.5, color: "#07122C" }}>
//           {title}
//         </Typography>
//         <Typography
//           sx={{
//             mt: 0.5,
//             fontSize: 13,
//             color: "rgba(7,18,44,0.65)",
//             lineHeight: 1.6,
//           }}
//         >
//           {desc}
//         </Typography>
//       </Box>
//     </Box>
//   );
// }





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
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import BusinessIcon from "@mui/icons-material/Business";

/* ============================================================
   SHARED FIELD STYLES
   ============================================================ */

const fieldSx = {
  "& .MuiOutlinedInput-root": {
    borderRadius: 2.5,
    bgcolor: "#fff",
    transition: "all 0.2s ease",
    "& fieldset": {
      borderColor: "rgba(227,232,255,0.95)",
    },
    "&:hover fieldset": {
      borderColor: "rgba(27,77,255,0.35)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#1B4DFF",
      borderWidth: 1.5,
    },
    "&.Mui-focused": {
      boxShadow: "0 0 0 4px rgba(27,77,255,0.10)",
    },
  },
  "& .MuiInputLabel-root": {
    fontWeight: 700,
    color: "rgba(7,18,44,0.6)",
    fontSize: 13.5,
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#1B4DFF",
  },
  "& .MuiOutlinedInput-input": {
    fontSize: 14,
    fontWeight: 500,
  },
};

/* ============================================================
   MAIN COMPONENT
   ============================================================ */

export default function ContactSectionPro() {
  return (
    <Box
      sx={{
        position: "relative",
        py: { xs: 8, md: 12 },
        bgcolor: "#fff",
        overflow: "hidden",
      }}
    >
      {/* Ambient glows */}
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
        {/* ─── Header ─── */}
        <Box textAlign="center" mb={{ xs: 5, md: 7 }}>
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
            <SupportAgentIcon sx={{ fontSize: 14, color: "#1B4DFF" }} />
            <Typography
              sx={{
                fontSize: 11,
                fontWeight: 800,
                letterSpacing: "0.12em",
                color: "#1B4DFF",
                textTransform: "uppercase",
              }}
            >
              Contact Us
            </Typography>
          </Box>

          <Typography
            sx={{
              fontWeight: 900,
              color: "#07122C",
              fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.8rem" },
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              maxWidth: 820,
              mx: "auto",
            }}
          >
            Contact{" "}
            <Box
              component="span"
              sx={{
                background:
                  "linear-gradient(90deg, #1B4DFF 0%, #2F7BFF 50%, #00A3FF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              BluBilling.
            </Box>
          </Typography>

          <Typography
            sx={{
              mt: 2,
              fontSize: { xs: 14, md: 16 },
              color: "rgba(7,18,44,0.6)",
              maxWidth: 640,
              mx: "auto",
              lineHeight: 1.7,
            }}
          >
            Tell us what you need — our AI-powered billing experts will connect
            with you and guide the best workflow for your organization.
          </Typography>
        </Box>

        {/* ─── Main row ─── */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "1fr 1.25fr" },
            gap: { xs: 4, md: 5 },
            alignItems: "stretch",
          }}
        >
          {/* ─── LEFT: Contact info panel ─── */}
          <Box
            sx={{
              position: "relative",
              p: { xs: 3, md: 4 },
              borderRadius: 5,
              background:
                "linear-gradient(160deg, #F7F9FF 0%, #EEF2FF 100%)",
              border: "1px solid rgba(227,232,255,0.95)",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
            }}
          >
            {/* Decorative corner glow */}
            <Box
              sx={{
                position: "absolute",
                top: -60,
                right: -60,
                width: 220,
                height: 220,
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(27,77,255,0.15) 0%, transparent 65%)",
                pointerEvents: "none",
              }}
            />

            <Box sx={{ position: "relative" }}>
              <Stack direction="row" alignItems="center" spacing={1.5} mb={1.5}>
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: "12px",
                    background:
                      "linear-gradient(135deg, #1B4DFF 0%, #00A3FF 100%)",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 10px 25px -10px rgba(27,77,255,0.8)",
                  }}
                >
                  <AutoAwesomeIcon fontSize="small" />
                </Box>
                <Typography
                  sx={{
                    fontWeight: 900,
                    color: "#07122C",
                    fontSize: { xs: "1.2rem", md: "1.4rem" },
                  }}
                >
                  Let's talk
                </Typography>
              </Stack>

              <Typography
                sx={{
                  mt: 1.5,
                  color: "rgba(7,18,44,0.7)",
                  fontSize: 13.8,
                  lineHeight: 1.75,
                }}
              >
                Reach out with your requirements, service interest, or
                partnership queries. We typically respond within{" "}
                <Box component="span" sx={{ fontWeight: 800, color: "#1B4DFF" }}>
                  24 hours
                </Box>
                .
              </Typography>

              <Divider sx={{ my: 3, borderColor: "rgba(27,77,255,0.10)" }} />

              <Stack spacing={1.6}>
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
          </Box>

          {/* ─── RIGHT: Form card ─── */}
          <Box
            sx={{
              position: "relative",
              borderRadius: 5,
              border: "1px solid rgba(227,232,255,0.95)",
              bgcolor: "#fff",
              boxShadow: "0 30px 80px -30px rgba(27,77,255,0.20)",
              overflow: "hidden",
            }}
          >
            {/* Gradient top stripe */}
            <Box
              sx={{
                height: 4,
                background:
                  "linear-gradient(90deg, #1B4DFF 0%, #00A3FF 100%)",
              }}
            />

            <Box sx={{ p: { xs: 3, md: 4 } }}>
              <Typography
                sx={{
                  fontWeight: 900,
                  color: "#07122C",
                  fontSize: { xs: "1.15rem", md: "1.35rem" },
                  mb: 0.6,
                }}
              >
                Send a message
              </Typography>
              <Typography
                sx={{
                  fontSize: 13,
                  color: "rgba(7,18,44,0.6)",
                  mb: 3,
                }}
              >
                Fill in the details below and we'll get back to you shortly.
              </Typography>

              <Box
                component="form"
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                  gap: 2,
                }}
              >
                <TextField
                  fullWidth
                  label="Your Name"
                  placeholder="John Doe"
                  sx={fieldSx}
                />
                <TextField
                  fullWidth
                  label="Email Address"
                  placeholder="john@example.com"
                  sx={fieldSx}
                />
                <TextField
                  fullWidth
                  label="Phone Number"
                  placeholder="+91 98765 43210"
                  sx={fieldSx}
                />
                <TextField
                  fullWidth
                  select
                  label="Select Service"
                  defaultValue=""
                  sx={fieldSx}
                >
                  <MenuItem value="">Select Service</MenuItem>
                  <MenuItem value="rcm">Revenue Cycle Management</MenuItem>
                  <MenuItem value="medical-billing">Medical Billing</MenuItem>
                  <MenuItem value="coding">Medical Coding</MenuItem>
                  <MenuItem value="ar">AR Follow-Up</MenuItem>
                  <MenuItem value="denials">Denial Management</MenuItem>
                </TextField>

                <Box sx={{ gridColumn: { xs: "span 1", sm: "span 2" } }}>
                  <TextField
                    fullWidth
                    multiline
                    minRows={4}
                    label="Message"
                    placeholder="Write your message..."
                    sx={fieldSx}
                  />
                </Box>

                <Box sx={{ gridColumn: { xs: "span 1", sm: "span 2" } }}>
                  <Button
                    fullWidth
                    type="submit"
                    variant="contained"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      mt: 0.5,
                      background:
                        "linear-gradient(90deg, #2f46ff 0%, #1b4dff 100%)",
                      color: "#fff",
                      textTransform: "none",
                      fontWeight: 800,
                      fontSize: "0.95rem",
                      py: 1.4,
                      borderRadius: 999,
                      boxShadow: "0 14px 35px rgba(27,77,255,0.30)",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        boxShadow: "0 20px 45px rgba(27,77,255,0.40)",
                        transform: "translateY(-2px)",
                      },
                    }}
                  >
                    Submit Message
                  </Button>

                  <Typography
                    sx={{
                      mt: 1.8,
                      fontSize: 12.5,
                      color: "rgba(7,18,44,0.55)",
                      textAlign: "center",
                      lineHeight: 1.6,
                    }}
                  >
                    By submitting, you agree to be contacted by our team
                    regarding your request.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* ─── Bottom mini cards ─── */}
        <Box sx={{ mt: { xs: 5, md: 7 } }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" },
              gap: { xs: 2.5, md: 3 },
            }}
          >
            <MiniCard
              icon={<BusinessIcon sx={{ fontSize: 22 }} />}
              title="Head Office"
              desc="BluAI Inc., Dover, DE 19901, USA"
            />
            <MiniCard
              icon={<CallIcon sx={{ fontSize: 22 }} />}
              title="Support Lines"
              desc="US: +1 302-238-1512 | India: 0172-456-8962"
            />
            <MiniCard
              icon={<AccessTimeIcon sx={{ fontSize: 22 }} />}
              title="Working Hours"
              desc="Mon–Fri 9:00AM–6:00PM | Sat 9:00AM–2:00PM"
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

/* ============================================================
   SUB-COMPONENTS
   ============================================================ */

function InfoChip({ icon, title, value }) {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 1.6,
        alignItems: "flex-start",
        p: { xs: 1.6, md: 1.8 },
        borderRadius: 3,
        bgcolor: "#fff",
        border: "1px solid rgba(227,232,255,0.95)",
        boxShadow: "0 6px 16px rgba(15,23,42,0.03)",
        transition: "all 0.25s ease",
        "&:hover": {
          transform: "translateY(-2px)",
          borderColor: "rgba(27,77,255,0.30)",
          boxShadow: "0 14px 30px -10px rgba(27,77,255,0.20)",
        },
      }}
    >
      <Box
        sx={{
          width: 40,
          height: 40,
          borderRadius: "12px",
          background:
            "linear-gradient(135deg, #1B4DFF 0%, #00A3FF 100%)",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          boxShadow: "0 8px 20px -8px rgba(27,77,255,0.7)",
        }}
      >
        {icon}
      </Box>

      <Box sx={{ minWidth: 0 }}>
        <Typography
          sx={{
            fontWeight: 900,
            fontSize: 12,
            color: "#1B4DFF",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            mt: 0.4,
            fontSize: 13,
            color: "rgba(7,18,44,0.75)",
            lineHeight: 1.55,
            fontWeight: 500,
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
        borderRadius: 4,
        bgcolor: "#fff",
        border: "1px solid rgba(227,232,255,0.95)",
        p: { xs: 2.4, md: 2.8 },
        boxShadow: "0 14px 35px rgba(15,23,42,0.04)",
        display: "flex",
        gap: 1.8,
        alignItems: "flex-start",
        transition: "all 0.25s ease",
        "&:hover": {
          transform: "translateY(-3px)",
          borderColor: "rgba(27,77,255,0.30)",
          boxShadow: "0 20px 50px -20px rgba(27,77,255,0.25)",
        },
        "&:hover .mini-icon": {
          background:
            "linear-gradient(135deg, #1B4DFF 0%, #00A3FF 100%)",
          color: "#fff",
        },
      }}
    >
      <Box
        className="mini-icon"
        sx={{
          width: 44,
          height: 44,
          borderRadius: "14px",
          bgcolor: "rgba(27,77,255,0.10)",
          color: "#1B4DFF",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          transition: "all 0.25s ease",
        }}
      >
        {icon}
      </Box>

      <Box sx={{ minWidth: 0 }}>
        <Typography
          sx={{
            fontWeight: 900,
            fontSize: 14,
            color: "#07122C",
            mb: 0.4,
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            fontSize: 12.8,
            color: "rgba(7,18,44,0.68)",
            lineHeight: 1.6,
          }}
        >
          {desc}
        </Typography>
      </Box>
    </Box>
  );
}
