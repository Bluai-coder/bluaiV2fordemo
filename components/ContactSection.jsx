
// "use client";

// import { useState } from "react";
// import {
//   Box,
//   Container,
//   Typography,
//   TextField,
//   Button,
//   Paper,
//   Stack,
//   Divider,
//   Alert,
//   CircularProgress,
//   Chip,
// } from "@mui/material";
// import PhoneIcon from "@mui/icons-material/Phone";
// import EmailIcon from "@mui/icons-material/Email";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// import SendIcon from "@mui/icons-material/Send";
// import { useForm } from "react-hook-form";
// import Image from "next/image";
// import axios from "axios";
// import { LocationTabs } from "../components/LocationTabs";

// const OFFICES = [
//   {
//     country: "USA",
//     lines: ["BluAI Inc., 8 The Green,", "Suite #17716, Dover, DE 19901"],
//   },
//   {
//     country: "USA",
//     lines: ["BluAI Inc., 143 Cadycenter,", "Suite 173, Northville, MI 48167"],
//   },
//   {
//     country: "India",
//     lines: [
//       "BluAI Private Ltd., CPM-17, Suite #317,",
//       "Center Plaza Emaar, Sector 105,",
//       "Mohali, Punjab 140307",
//     ],
//   },
// ];

// export default function ContactSection() {
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors, isSubmitting },
//   } = useForm({ mode: "onTouched" });

//   const [success, setSuccess] = useState(false);
//   const [error, setError] = useState("");
//   const [submittedName, setSubmittedName] = useState("");

//   const onSubmit = async (formdata) => {
//     setError("");
//     try {
//       const { data } = await axios.post(
//         "https://vitalchairapi.bluai.ai/api/vitalchair-admin/contactus",
//         {
//           name: formdata.name,
//           email: formdata.email,
//           mobile: formdata.mobile,
//           company: formdata.company,
//           subject: formdata.subject,
//           message: formdata.message,
//         }
//       );

//       if (data?.success) {
//         setSubmittedName(formdata.name);
//         setSuccess(true);
//         reset();
//       } else {
//         throw new Error(data?.error || "Submission failed");
//       }
//     } catch (err) {
//       console.error("Contact form error:", err);
//       setError(
//         "We couldn't send your message. Please try again or email us at info@bluai.ai"
//       );
//     }
//   };

//   return (
//     <Box component="section" sx={{ bgcolor: "#fafbff" }}>
//       {/* ================= HERO ================= */}

//       <Box
//         sx={{
//           position: "relative",
//           zIndex: 2,
//           minHeight: "inherit",
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "center",
//           textAlign: "center",
//           px: { xs: 2, sm: 3 },
//           py: 8,
//         }}
//       >

//         <Stack spacing={2} alignItems="center" textAlign="center" mt={{ xs: 4, md: 6 }}>

//           <Box
//             sx={{
//               display: "inline-flex",
//               alignItems: "center",
//               gap: 1,
//               px: 2,
//               py: 0.9,
//               borderRadius: 99,
//               bgcolor: "rgba(27,77,255,0.10)",
//               border: "1px solid rgba(27,77,255,0.18)",
//             }}
//           >
//             <Typography
//               sx={{
//                 fontWeight: 900,
//                 fontSize: 12,
//                 letterSpacing: "0.12em",
//                 textTransform: "uppercase",
//                 color: "#1B4DFF",
//               }}
//             >
//               WE'D LOVE TO HEAR FROM YOU
//             </Typography>
//           </Box>
//         </Stack>
//         <Typography
//           variant="h1"
//           sx={{
//             color: "black",
//             fontWeight: 800,
//             fontSize: { xs: 38, sm: 52, md: 64 },
//             letterSpacing: "-0.03em",
//             lineHeight: 1.05,
//             mb: 2,
//             mt: 2,
//           }}
//         >
//           Contact{" "}
//           <Box component="span" sx={{ color: "#1b4dff" }}>
//             Us
//           </Box>
//         </Typography>
//         <Typography
//           sx={{
//             color: "black",
//             fontSize: { xs: 15, md: 17 },
//             // maxWidth: 560,
//             lineHeight: 1.6,
//           }}
//         >
//           Have a question, partnership idea, or need support? Our team is
//           ready to help you get the most out of BluAI.
//         </Typography>
//       </Box>


//       {/* ================= MAIN GRID ================= */}
//       <Container maxWidth="xl" sx={{ py: { xs: 3, md: 0 } }}>
//         <Stack direction={{ xs: "column", md: "row" }} spacing={{ xs: 3, md: 4 }}>
//           {/* ---------- LEFT: INFO CARD ---------- */}
//           <Paper
//             elevation={0}
//             sx={{
//               flex: { md: "0 0 38%" },
//               p: { xs: 3, md: 4 },
//               borderRadius: 4,
//               border: "1px solid #e8ecf5",
//               bgcolor: "#fff",
//               height: "fit-content",
//             }}
//           >
//             <Typography
//               variant="overline"
//               sx={{
//                 color: "#1b4dff",
//                 fontWeight: 800,
//                 letterSpacing: "0.15em",
//                 fontSize: 11,
//               }}
//             >
//               Reach Out
//             </Typography>
//             <Typography
//               variant="h4"
//               sx={{ fontWeight: 800, color: "#0b1437", mt: 0.5, mb: 1 }}
//             >
//               Get in touch
//             </Typography>
//             <Typography sx={{ color: "#5b6b8c", fontSize: 14, mb: 3 }}>
//               We typically respond within 24–48 hours.
//             </Typography>

//             <Divider sx={{ mb: 3 }} />

//             {/* Contact methods */}
//             <Stack spacing={2.5} sx={{ mb: 3 }}>
//               <ContactRow
//                 icon={<PhoneIcon />}
//                 label="Phone"
//                 value="India: 0172-456-8962"
//                 href="tel:+911724568962"
//               />
//               <ContactRow
//                 icon={<EmailIcon />}
//                 label="Email"
//                 value="info@bluai.ai"
//                 href="mailto:info@bluai.ai"
//               />
//             </Stack>

//             <Divider sx={{ mb: 3 }} />

//             <Typography
//               variant="subtitle2"
//               sx={{
//                 fontWeight: 800,
//                 color: "#0b1437",
//                 letterSpacing: "0.02em",
//                 mb: 2,
//                 textTransform: "uppercase",
//                 fontSize: 12,
//               }}
//             >
//               Our Offices
//             </Typography>

//             <Stack spacing={2.5}>
//               {OFFICES.map((office, i) => (
//                 <Stack key={i} direction="row" spacing={1.5}>
//                   <LocationOnIcon
//                     sx={{ color: "#1b4dff", fontSize: 20, mt: 0.2 }}
//                   />
//                   <Box>
//                     <Typography
//                       sx={{
//                         fontSize: 12,
//                         fontWeight: 700,
//                         color: "#1b4dff",
//                         mb: 0.25,
//                       }}
//                     >
//                       {office.country}
//                     </Typography>
//                     {office.lines.map((line, j) => (
//                       <Typography
//                         key={j}
//                         sx={{ fontSize: 13.5, color: "#5b6b8c", lineHeight: 1.5 }}
//                       >
//                         {line}
//                       </Typography>
//                     ))}
//                   </Box>
//                 </Stack>
//               ))}
//             </Stack>
//           </Paper>

//           {/* ---------- RIGHT: FORM CARD ---------- */}
//           <Paper
//             elevation={0}
//             sx={{
//               flex: 1,
//               p: { xs: 3, md: 4.5 },
//               borderRadius: 4,
//               border: "1px solid #e8ecf5",
//               bgcolor: "#fff",
//             }}
//           >
//             <Typography
//               variant="overline"
//               sx={{
//                 color: "#1b4dff",
//                 fontWeight: 800,
//                 letterSpacing: "0.15em",
//                 fontSize: 11,
//               }}
//             >
//               Send a message
//             </Typography>
//             <Typography
//               variant="h4"
//               sx={{ fontWeight: 800, color: "#0b1437", mt: 0.5, mb: 3 }}
//             >
//               Tell us about your project
//             </Typography>

//             {error && (
//               <Alert severity="error" sx={{ mb: 3, borderRadius: 2 }}>
//                 {error}
//               </Alert>
//             )}

//             <form onSubmit={handleSubmit(onSubmit)} noValidate>
//               <Stack spacing={2.5}>
//                 <Stack direction={{ xs: "column", sm: "row" }} spacing={2.5}>
//                   <TextField
//                     label="Full Name"
//                     fullWidth
//                     error={!!errors.name}
//                     helperText={errors.name?.message}
//                     {...register("name", {
//                       required: "Name is required",
//                       minLength: {
//                         value: 2,
//                         message: "Name is too short",
//                       },
//                     })}
//                   />
//                   <TextField
//                     label="Email Address"
//                     type="email"
//                     fullWidth
//                     error={!!errors.email}
//                     helperText={errors.email?.message}
//                     {...register("email", {
//                       required: "Email is required",
//                       pattern: {
//                         value: /^\S+@\S+\.\S+$/,
//                         message: "Enter a valid email",
//                       },
//                     })}
//                   />
//                 </Stack>

//                 <Stack direction={{ xs: "column", sm: "row" }} spacing={2.5}>
//                   <TextField
//                     label="Mobile Number"
//                     fullWidth
//                     error={!!errors.mobile}
//                     helperText={errors.mobile?.message}
//                     {...register("mobile", {
//                       required: "Mobile number is required",
//                       pattern: {
//                         value: /^[0-9+\-\s()]{10,20}$/,
//                         message: "Enter a valid mobile number",
//                       },
//                     })}
//                   />
//                   <TextField
//                     label="Company Name"
//                     fullWidth
//                     error={!!errors.company}
//                     helperText={errors.company?.message}
//                     {...register("company", {
//                       required: "Company name is required",
//                     })}
//                   />
//                 </Stack>

//                 <TextField
//                   label="Subject"
//                   fullWidth
//                   error={!!errors.subject}
//                   helperText={errors.subject?.message}
//                   {...register("subject", {
//                     required: "Subject is required",
//                   })}
//                 />

//                 <TextField
//                   label="Your Message"
//                   placeholder="Tell us how we can help..."
//                   multiline
//                   rows={5}
//                   fullWidth
//                   error={!!errors.message}
//                   helperText={errors.message?.message}
//                   {...register("message", {
//                     required: "Message is required",
//                     minLength: {
//                       value: 10,
//                       message: "Message must be at least 10 characters",
//                     },
//                   })}
//                 />

//                 <Box sx={{ pt: 1, textAlign: "center", }}>
//                   <Button
//                     type="submit"
//                     variant="contained"
//                     size="large"
//                     disabled={isSubmitting}
//                     endIcon={
//                       isSubmitting ? (
//                         <CircularProgress size={18} color="inherit" />
//                       ) : (
//                         <SendIcon />
//                       )
//                     }
//                     sx={{

//                       px: 5,
//                       py: 1.4,
//                       borderRadius: 99,
//                       bgcolor: "#1b4dff",
//                       textTransform: "none",
//                       fontWeight: 700,
//                       fontSize: 15,
//                       boxShadow: "0 8px 24px rgba(27,77,255,0.25)",
//                       "&:hover": {
//                         bgcolor: "#153dcf",
//                         boxShadow: "0 10px 28px rgba(27,77,255,0.35)",
//                       },
//                       "&.Mui-disabled": {
//                         bgcolor: "#b8c6ff",
//                         color: "#fff",
//                       },
//                     }}
//                   >
//                     {isSubmitting ? "Sending..." : "Send Message"}
//                   </Button>
//                 </Box>
//               </Stack>
//             </form>
//           </Paper>
//         </Stack>

//         {/* ================= LOCATIONS ================= */}
//         <Box sx={{ mt: { xs: 6, md: 10 } }}>
//           <Box sx={{ textAlign: "center", mb: 4 }}>
//             <Typography
//               variant="overline"
//               sx={{
//                 color: "#1b4dff",
//                 fontWeight: 800,
//                 letterSpacing: "0.15em",
//                 fontSize: 11,
//               }}
//             >
//               Global Presence
//             </Typography>
//             <Typography
//               variant="h4"
//               sx={{ fontWeight: 800, color: "#0b1437", mt: 0.5 }}
//             >
//               Find us around the world
//             </Typography>
//           </Box>
//           <LocationTabs />
//         </Box>
//       </Container>

//       {/* ================= SUCCESS MODAL ================= */}
//       {success && (
//         <SuccessModal
//           name={submittedName}
//           onClose={() => setSuccess(false)}
//         />
//       )}
//     </Box>
//   );
// }

// /* ============================================================
//    Sub-components
//    ============================================================ */

// function ContactRow({ icon, label, value, href }) {
//   return (
//     <Stack direction="row" spacing={1.5} alignItems="center">
//       <Box
//         sx={{
//           width: 40,
//           height: 40,
//           borderRadius: 2,
//           bgcolor: "rgba(27,77,255,0.08)",
//           color: "#1b4dff",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           flexShrink: 0,
//           "& svg": { fontSize: 20 },
//         }}
//       >
//         {icon}
//       </Box>
//       <Box>
//         <Typography
//           sx={{
//             fontSize: 11,
//             fontWeight: 700,
//             color: "#8a96b3",
//             letterSpacing: "0.08em",
//             textTransform: "uppercase",
//           }}
//         >
//           {label}
//         </Typography>
//         <Typography
//           component={href ? "a" : "p"}
//           href={href}
//           sx={{
//             fontSize: 14,
//             fontWeight: 600,
//             color: "#0b1437",
//             textDecoration: "none",
//             "&:hover": href ? { color: "#1b4dff" } : {},
//           }}
//         >
//           {value}
//         </Typography>
//       </Box>
//     </Stack>
//   );
// }

// function SuccessModal({ name, onClose }) {
//   const firstName = name?.split(" ")[0] || "there";

//   return (
//     <Box
//       onClick={onClose}
//       sx={{
//         position: "fixed",
//         inset: 0,
//         zIndex: 1400,
//         bgcolor: "rgba(11,20,55,0.6)",
//         backdropFilter: "blur(6px)",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         p: 2,
//         animation: "fadeIn 0.2s ease",
//         "@keyframes fadeIn": {
//           from: { opacity: 0 },
//           to: { opacity: 1 },
//         },
//       }}
//     >
//       <Paper
//         onClick={(e) => e.stopPropagation()}
//         elevation={0}
//         sx={{
//           position: "relative",
//           width: "100%",
//           maxWidth: 420,
//           borderRadius: 4,
//           p: 4,
//           bgcolor: "#fff",
//           border: "1px solid #e8ecf5",
//           boxShadow: "0 30px 80px rgba(11,20,55,0.25)",
//           animation: "slideUp 0.3s ease",
//           "@keyframes slideUp": {
//             from: { transform: "translateY(20px)", opacity: 0 },
//             to: { transform: "translateY(0)", opacity: 1 },
//           },
//         }}
//       >
//         {/* Icon */}
//         <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
//           <Box sx={{ position: "relative" }}>
//             <Box
//               sx={{
//                 position: "absolute",
//                 inset: -8,
//                 borderRadius: "50%",
//                 bgcolor: "rgba(16,185,129,0.15)",
//                 filter: "blur(14px)",
//               }}
//             />
//             <Box
//               sx={{
//                 position: "relative",
//                 width: 68,
//                 height: 68,
//                 borderRadius: "50%",
//                 background:
//                   "linear-gradient(180deg, #34d399 0%, #059669 100%)",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 boxShadow: "0 10px 24px rgba(5,150,105,0.3)",
//               }}
//             >
//               <CheckCircleIcon sx={{ color: "#fff", fontSize: 36 }} />
//             </Box>
//           </Box>
//         </Box>

//         <Typography
//           sx={{
//             fontSize: 22,
//             fontWeight: 700,
//             color: "#0b1437",
//             textAlign: "center",
//             letterSpacing: "-0.01em",
//             mb: 0.75,
//           }}
//         >
//           Thank you, {firstName}!
//         </Typography>
//         <Typography
//           sx={{
//             fontSize: 14.5,
//             color: "#5b6b8c",
//             textAlign: "center",
//             mb: 3.5,
//             lineHeight: 1.6,
//           }}
//         >
//           Your message has been received. We truly appreciate your interest in
//           BluAI.
//         </Typography>

//         {/* Next steps */}
//         <Box
//           sx={{
//             borderRadius: 3,
//             bgcolor: "#f7f9ff",
//             border: "1px solid #e8ecf5",
//             p: 2.5,
//             mb: 3.5,
//           }}
//         >
//           <Typography
//             sx={{
//               fontSize: 11,
//               fontWeight: 700,
//               color: "#8a96b3",
//               letterSpacing: "0.1em",
//               textTransform: "uppercase",
//               mb: 1.5,
//             }}
//           >
//             What happens next
//           </Typography>
//           <Stack spacing={1.25}>
//             <NextStep text="Our team reviews your information" />
//             <NextStep
//               text="You'll hear back within 24–48 hours"
//               bold="24–48 hours"
//             />
//           </Stack>
//         </Box>

//         <Button
//           onClick={onClose}
//           fullWidth
//           variant="contained"
//           sx={{
//             height: 48,
//             borderRadius: 2.5,
//             bgcolor: "#0b1437",
//             textTransform: "none",
//             fontWeight: 600,
//             fontSize: 15,
//             "&:hover": { bgcolor: "#1a2550" },
//           }}
//         >
//           Got it
//         </Button>

//         <Typography
//           sx={{
//             fontSize: 12,
//             color: "#a3adc2",
//             textAlign: "center",
//             mt: 2,
//           }}
//         >
//           A confirmation email is on its way
//         </Typography>
//       </Paper>
//     </Box>
//   );
// }

// function NextStep({ text, bold }) {
//   return (
//     <Stack direction="row" spacing={1.25} alignItems="flex-start">
//       <CheckCircleIcon
//         sx={{ color: "#10b981", fontSize: 18, mt: 0.15, flexShrink: 0 }}
//       />
//       <Typography sx={{ fontSize: 14, color: "#3d4a6b", lineHeight: 1.5 }}>
//         {bold ? (
//           <>
//             You'll hear back within{" "}
//             <Box component="span" sx={{ fontWeight: 700, color: "#0b1437" }}>
//               {bold}
//             </Box>
//           </>
//         ) : (
//           text
//         )}
//       </Typography>
//     </Stack>
//   );
// }



"use client";

import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Stack,
  Divider,
  Alert,
  CircularProgress,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SendIcon from "@mui/icons-material/Send";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import BusinessIcon from "@mui/icons-material/Business";
import { useForm } from "react-hook-form";
import axios from "axios";
import { LocationTabs } from "../components/LocationTabs";

/* ============================================================
   DATA
   ============================================================ */

const OFFICES = [
  {
    country: "USA",
    lines: ["BluAI Inc., 8 The Green,", "Suite #17716, Dover, DE 19901"],
  },
  {
    country: "USA",
    lines: ["BluAI Inc., 143 Cadycenter,", "Suite 173, Northville, MI 48167"],
  },
  {
    country: "India",
    lines: [
      "BluAI Private Ltd., CPM-17, Suite #317,",
      "Center Plaza Emaar, Sector 105,",
      "Mohali, Punjab 140307",
    ],
  },
];

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

export default function ContactSection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ mode: "onTouched" });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  const onSubmit = async (formdata) => {
    setError("");
    try {
      const { data } = await axios.post(
        "https://vitalchairapi.bluai.ai/api/vitalchair-admin/contactus",
        {
          name: formdata.name,
          email: formdata.email,
          mobile: formdata.mobile,
          company: formdata.company,
          subject: formdata.subject,
          message: formdata.message,
        }
      );

      if (data?.success) {
        setSubmittedName(formdata.name);
        setSuccess(true);
        reset();
      } else {
        throw new Error(data?.error || "Submission failed");
      }
    } catch (err) {
      console.error("Contact form error:", err);
      setError(
        "We couldn't send your message. Please try again or email us at info@bluai.ai"
      );
    }
  };

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        bgcolor: "#fff",
        overflow: "hidden",
      }}
    >
      {/* ───────── Ambient glows ───────── */}
      <Box
        sx={{
          position: "absolute",
          top: "5%",
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
          bottom: "10%",
          right: "-10%",
          width: 560,
          height: 560,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0,163,255,0.08) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      {/* ================= HERO ================= */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          px: { xs: 2, sm: 3 },
          pt: { xs: 8, md: 12 },
          pb: { xs: 5, md: 7 },
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={2.5} alignItems="center">
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                px: 2,
                py: 0.9,
                borderRadius: 999,
                bgcolor: "rgba(27,77,255,0.08)",
                border: "1px solid rgba(27,77,255,0.18)",
              }}
            >
              <SupportAgentIcon sx={{ fontSize: 14, color: "#1B4DFF" }} />
              <Typography
                sx={{
                  fontWeight: 800,
                  fontSize: 11,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#1B4DFF",
                }}
              >
                We'd Love To Hear From You
              </Typography>
            </Box>

            <Typography
              sx={{
                color: "#07122C",
                fontWeight: 900,
                fontSize: { xs: "2rem", sm: "2.8rem", md: "3.4rem" },
                letterSpacing: "-0.03em",
                lineHeight: 1.08,
                maxWidth: 820,
                mx: "auto",
              }}
            >
              Contact{" "}
              <Box
                component="span"
                sx={{
                  background:
                    "#1B4DFF",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Us.
              </Box>
            </Typography>

            <Typography
              sx={{
                color: "rgba(7,18,44,0.65)",
                fontSize: { xs: 15, md: 16.5 },
                lineHeight: 1.7,
                maxWidth: 620,
                mx: "auto",
              }}
            >
              Have a question, partnership idea, or need support? Our team is
              ready to help you get the most out of BluAI.
            </Typography>
          </Stack>
        </Container>
      </Box>

      {/* ================= MAIN GRID ================= */}
      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1, pb: { xs: 3, md: 4 } }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "1fr 1.5fr" },
            gap: { xs: 3, md: 4 },
            alignItems: "start",
          }}
        >
          {/* ---------- LEFT: INFO CARD ---------- */}
          <Paper
            elevation={0}
            sx={{
              position: "relative",
              p: { xs: 3, md: 4 },
              borderRadius: 5,
              background:
                "linear-gradient(160deg, #F7F9FF 0%, #EEF2FF 100%)",
              border: "1px solid rgba(227,232,255,0.95)",
              overflow: "hidden",
              height: "fit-content",
            }}
          >
            {/* Corner glow */}
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
                    fontSize: { xs: "1.15rem", md: "1.3rem" },
                  }}
                >
                  Get in touch
                </Typography>
              </Stack>

              <Typography
                sx={{
                  color: "rgba(7,18,44,0.7)",
                  fontSize: 13.8,
                  lineHeight: 1.7,
                  mb: 0,
                }}
              >
                We typically respond within{" "}
                <Box component="span" sx={{ fontWeight: 800, color: "#1B4DFF" }}>
                  24–48 hours
                </Box>
                .
              </Typography>


              {/* Contact methods */}
              <Stack spacing={2}>
                <ContactRow
                  icon={<PhoneIcon />}
                  label="Phone"
                  value="India: 0172-456-8962"
                  href="tel:+911724568962"
                />
                <ContactRow
                  icon={<EmailIcon />}
                  label="Email"
                  value="info@bluai.ai"
                  href="mailto:info@bluai.ai"
                />
              </Stack>

              <Divider sx={{ my: 3, borderColor: "rgba(27,77,255,0.10)" }} />

              <Stack direction="row" alignItems="center" spacing={1.2} mb={2}>
                <BusinessIcon sx={{ fontSize: 16, color: "#1B4DFF" }} />
                <Typography
                  sx={{
                    fontWeight: 900,
                    color: "#07122C",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    fontSize: 11.5,
                  }}
                >
                  Our Offices
                </Typography>
              </Stack>

              <Stack spacing={2.2}>
                {OFFICES.map((office, i) => (
                  <Stack key={i} direction="row" spacing={1.5}>
                    <LocationOnIcon
                      sx={{ color: "#1B4DFF", fontSize: 18, mt: 0.3, flexShrink: 0 }}
                    />
                    <Box>
                      <Typography
                        sx={{
                          fontSize: 11,
                          fontWeight: 800,
                          color: "#1B4DFF",
                          letterSpacing: "0.06em",
                          textTransform: "uppercase",
                          mb: 0.4,
                        }}
                      >
                        {office.country}
                      </Typography>
                      {office.lines.map((line, j) => (
                        <Typography
                          key={j}
                          sx={{
                            fontSize: 13,
                            color: "rgba(7,18,44,0.68)",
                            lineHeight: 1.55,
                          }}
                        >
                          {line}
                        </Typography>
                      ))}
                    </Box>
                  </Stack>
                ))}
              </Stack>
            </Box>
          </Paper>

          {/* ---------- RIGHT: FORM CARD ---------- */}
          <Paper
            elevation={0}
            sx={{
              position: "relative",
              borderRadius: 5,
              border: "1px solid rgba(227,232,255,0.95)",
              bgcolor: "#fff",
              boxShadow: "0 30px 80px -40px rgba(27,77,255,0.20)",
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

            <Box sx={{ p: { xs: 3, md: 4.5 } }}>
              <Typography
                sx={{
                  color: "#1B4DFF",
                  fontWeight: 800,
                  letterSpacing: "0.14em",
                  fontSize: 11,
                  textTransform: "uppercase",
                  mb: 0.8,
                }}
              >
                Send a Message
              </Typography>
              <Typography
                sx={{
                  fontWeight: 900,
                  color: "#07122C",
                  fontSize: { xs: "1.4rem", md: "1.7rem" },
                  letterSpacing: "-0.01em",
                  mb: 3,
                }}
              >
                Tell us about your project
              </Typography>

              {error && (
                <Alert severity="error" sx={{ mb: 3, borderRadius: 2.5 }}>
                  {error}
                </Alert>
              )}

              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <Stack spacing={2.5}>
                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                      gap: 2.5,
                    }}
                  >
                    <TextField
                      label="Full Name"
                      fullWidth
                      error={!!errors.name}
                      helperText={errors.name?.message}
                      sx={fieldSx}
                      {...register("name", {
                        required: "Name is required",
                        minLength: {
                          value: 2,
                          message: "Name is too short",
                        },
                      })}
                    />
                    <TextField
                      label="Email Address"
                      type="email"
                      fullWidth
                      error={!!errors.email}
                      helperText={errors.email?.message}
                      sx={fieldSx}
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^\S+@\S+\.\S+$/,
                          message: "Enter a valid email",
                        },
                      })}
                    />
                    <TextField
                      label="Mobile Number"
                      fullWidth
                      error={!!errors.mobile}
                      helperText={errors.mobile?.message}
                      sx={fieldSx}
                      {...register("mobile", {
                        required: "Mobile number is required",
                        pattern: {
                          value: /^[0-9+\-\s()]{10,20}$/,
                          message: "Enter a valid mobile number",
                        },
                      })}
                    />
                    <TextField
                      label="Company Name"
                      fullWidth
                      error={!!errors.company}
                      helperText={errors.company?.message}
                      sx={fieldSx}
                      {...register("company", {
                        required: "Company name is required",
                      })}
                    />
                  </Box>

                  <TextField
                    label="Subject"
                    fullWidth
                    error={!!errors.subject}
                    helperText={errors.subject?.message}
                    sx={fieldSx}
                    {...register("subject", {
                      required: "Subject is required",
                    })}
                  />

                  <TextField
                    label="Your Message"
                    placeholder="Tell us how we can help..."
                    multiline
                    rows={5}
                    fullWidth
                    error={!!errors.message}
                    helperText={errors.message?.message}
                    sx={fieldSx}
                    {...register("message", {
                      required: "Message is required",
                      minLength: {
                        value: 10,
                        message: "Message must be at least 10 characters",
                      },
                    })}
                  />

                  <Box sx={{ pt: 1, textAlign: "center" }}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      disabled={isSubmitting}
                      endIcon={
                        isSubmitting ? (
                          <CircularProgress size={18} color="inherit" />
                        ) : (
                          <SendIcon />
                        )
                      }
                      sx={{
                        px: 5,
                        py: 1.4,
                        borderRadius: 999,
                        background:
                          "linear-gradient(90deg, #2f46ff 0%, #1b4dff 100%)",
                        textTransform: "none",
                        fontWeight: 800,
                        fontSize: 15,
                        boxShadow: "0 14px 35px rgba(27,77,255,0.35)",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          boxShadow: "0 20px 45px rgba(27,77,255,0.45)",
                          transform: "translateY(-2px)",
                        },
                        "&.Mui-disabled": {
                          bgcolor: "#b8c6ff",
                          color: "#fff",
                        },
                      }}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </Box>
                </Stack>
              </form>
            </Box>
          </Paper>
        </Box>
      </Container>

      {/* ================= LOCATIONS ================= */}

      <Container maxWidth="xl">
        <LocationTabs />
      </Container>

      {/* ================= SUCCESS MODAL ================= */}
      {success && (
        <SuccessModal name={submittedName} onClose={() => setSuccess(false)} />
      )}
    </Box>
  );
}

/* ============================================================
   SUB-COMPONENTS
   ============================================================ */

function ContactRow({ icon, label, value, href }) {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 1.6,
        alignItems: "center",
        p: 1.6,
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
          "& svg": { fontSize: 20 },
        }}
      >
        {icon}
      </Box>
      <Box sx={{ minWidth: 0 }}>
        <Typography
          sx={{
            fontSize: 10.5,
            fontWeight: 800,
            color: "#1B4DFF",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          {label}
        </Typography>
        <Typography
          component={href ? "a" : "p"}
          href={href}
          sx={{
            fontSize: 14,
            fontWeight: 700,
            color: "#0B1220",
            textDecoration: "none",
            lineHeight: 1.4,
            "&:hover": href ? { color: "#1B4DFF" } : {},
          }}
        >
          {value}
        </Typography>
      </Box>
    </Box>
  );
}

function SuccessModal({ name, onClose }) {
  const firstName = name?.split(" ")[0] || "there";

  return (
    <Box
      onClick={onClose}
      sx={{
        position: "fixed",
        inset: 0,
        zIndex: 1400,
        bgcolor: "rgba(11,20,55,0.6)",
        backdropFilter: "blur(6px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
        animation: "fadeIn 0.2s ease",
        "@keyframes fadeIn": {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      }}
    >
      <Paper
        onClick={(e) => e.stopPropagation()}
        elevation={0}
        sx={{
          position: "relative",
          width: "100%",
          maxWidth: 440,
          borderRadius: 5,
          p: 4,
          bgcolor: "#fff",
          border: "1px solid #e8ecf5",
          boxShadow: "0 40px 100px -30px rgba(11,20,55,0.5)",
          overflow: "hidden",
          animation: "slideUp 0.3s ease",
          "@keyframes slideUp": {
            from: { transform: "translateY(20px)", opacity: 0 },
            to: { transform: "translateY(0)", opacity: 1 },
          },
        }}
      >
        {/* Gradient top stripe */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 4,
            background: "linear-gradient(90deg, #10B981 0%, #34D399 100%)",
          }}
        />

        {/* Icon */}
        <Box sx={{ display: "flex", justifyContent: "center", mb: 3, mt: 1 }}>
          <Box sx={{ position: "relative" }}>
            <Box
              sx={{
                position: "absolute",
                inset: -10,
                borderRadius: "50%",
                bgcolor: "rgba(16,185,129,0.15)",
                filter: "blur(14px)",
              }}
            />
            <Box
              sx={{
                position: "relative",
                width: 72,
                height: 72,
                borderRadius: "50%",
                background:
                  "linear-gradient(180deg, #34D399 0%, #059669 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 12px 30px -10px rgba(5,150,105,0.5)",
              }}
            >
              <CheckCircleIcon sx={{ color: "#fff", fontSize: 38 }} />
            </Box>
          </Box>
        </Box>

        <Typography
          sx={{
            fontSize: 22,
            fontWeight: 900,
            color: "#07122C",
            textAlign: "center",
            letterSpacing: "-0.01em",
            mb: 0.75,
          }}
        >
          Thank you, {firstName}!
        </Typography>
        <Typography
          sx={{
            fontSize: 14.5,
            color: "rgba(7,18,44,0.62)",
            textAlign: "center",
            mb: 3.5,
            lineHeight: 1.6,
          }}
        >
          Your message has been received. We truly appreciate your interest in
          BluAI.
        </Typography>

        {/* Next steps */}
        <Box
          sx={{
            borderRadius: 3,
            bgcolor: "#F7F9FF",
            border: "1px solid #E8ECF5",
            p: 2.5,
            mb: 3.5,
          }}
        >
          <Typography
            sx={{
              fontSize: 11,
              fontWeight: 800,
              color: "#1B4DFF",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              mb: 1.5,
            }}
          >
            What happens next
          </Typography>
          <Stack spacing={1.25}>
            <NextStep text="Our team reviews your information" />
            <NextStep
              text="You'll hear back within 24–48 hours"
              bold="24–48 hours"
            />
          </Stack>
        </Box>

        <Button
          onClick={onClose}
          fullWidth
          variant="contained"
          sx={{
            height: 48,
            borderRadius: 999,
            background: "linear-gradient(90deg, #2f46ff 0%, #1b4dff 100%)",
            textTransform: "none",
            fontWeight: 800,
            fontSize: 15,
            boxShadow: "0 14px 35px rgba(27,77,255,0.30)",
            "&:hover": {
              boxShadow: "0 20px 45px rgba(27,77,255,0.40)",
              transform: "translateY(-2px)",
            },
          }}
        >
          Got it
        </Button>

        <Typography
          sx={{
            fontSize: 12,
            color: "rgba(7,18,44,0.45)",
            textAlign: "center",
            mt: 2,
          }}
        >
          A confirmation email is on its way
        </Typography>
      </Paper>
    </Box>
  );
}

function NextStep({ text, bold }) {
  return (
    <Stack direction="row" spacing={1.25} alignItems="flex-start">
      <CheckCircleIcon
        sx={{ color: "#10B981", fontSize: 18, mt: 0.15, flexShrink: 0 }}
      />
      <Typography
        sx={{ fontSize: 14, color: "#3d4a6b", lineHeight: 1.5 }}
      >
        {bold ? (
          <>
            You'll hear back within{" "}
            <Box component="span" sx={{ fontWeight: 800, color: "#0B1220" }}>
              {bold}
            </Box>
          </>
        ) : (
          text
        )}
      </Typography>
    </Stack>
  );
}