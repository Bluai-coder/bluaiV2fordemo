// "use client";

// import {
//   Box,
//   Container,
//   Typography,
//   TextField,
//   Button,
//   Paper,
//   Stack,
//   Tabs,
//   Tab,
//   IconButton,
// } from "@mui/material";
// import PhoneIcon from "@mui/icons-material/Phone";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import YouTubeIcon from "@mui/icons-material/YouTube";
// import { useForm } from "react-hook-form";
// import { useState } from "react";
// import { LocationTabs } from "../components/LocationTabs"
// import LocationOnIcon from '@mui/icons-material/LocationOn';

// import Image from "next/image";
// import axios from "axios";

// export default function ContactSection() {
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm({
//     mode: "onTouched",
//   });
//   const [tab, setTab] = useState(0);

//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(false);
//   const [error, setError] = useState('');
//   const [submittedName, setSubmittedName] = useState('');


//   const onSubmit = async (formdata) => {
//     try {
//       const data = await axios.post(
//         'https://vitalchairapi.bluai.ai/api/vitalchair-admin/contactus',
//         {
//           name: formdata.name,
//           email: formdata.email,
//           mobile: formdata.phone,
//           company: formdata.company,
//           message: formdata.message,
//           subject: formdata.subject,
//         }
//       );

//       if (data?.data?.success) {
        
//         setSuccess(true);
//         reset();
//       } else {
//         throw new Error(data.error || 'Failed to submit');
//       }
//     } catch (err) {
//       console.error('Error:', err);
//       setError(
//         'Failed to submit. Please try again or email us directly at info@bluai.ai'
//       );
//       setTimeout(() => setError(''), 5000);
//     } finally {
//       setLoading(false);
//     }
//   };


//   const closeSuccessModal = () => {
//     setSuccess(false);
//   };

//   return (
//     <Box
//     >
//       {/* Hero image */}

//       <Box
//         sx={{
//           position: "relative",
//           width: "100%",
//           minHeight: {
//             xs: "40vh",     // mobile safe
//             sm: "70vh",
//             md: "70vh",    // desktop
//           },
//           overflow: "hidden",
//         }}
//       >
//         {/* Background Image */}
//         <Image
//           src="/contact-us.jpg"
//           alt="Medical AI Hero"
//           fill
//           priority
//           sizes="100vw"
//           style={{
//             objectFit: "cover",
//           }}
//         />

//         {/* Overlay */}
//         <Box
//           sx={{
//             position: "absolute",
//             inset: 0,
//             background:
//               "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6))",
//             zIndex: 1,
//           }}
//         />

//         {/* Content */}
//         <Box
//           sx={{
//             position: "relative",
//             zIndex: 2,
//             minHeight: "inherit",
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             justifyContent: "center",
//             textAlign: "center",
//             px: { xs: 2, sm: 3 },
//             color: "#fff",
//           }}
//         >
//           <Typography

//             sx={{
//               color: "#fff",
//               fontWeight: 800,
//               fontSize: { xs: 36, sm: 46, md: 56 },
//               letterSpacing: "-0.02em",
//             }}
//           >
//             <Box component="span" className="!text-white" color="text.primary">
//               Contact{" "}
//             </Box>
//             <Box component="span" className="!text-[#1b4dff]" color="primary.main">
//               Us
//             </Box>
//           </Typography>




//         </Box>
//       </Box>

//       {/* ===== HEADER ===== */}
//       <Stack spacing={2} style={{ marginTop: 12 }} alignItems="center" textAlign="center" mb={{ xs: 4, md: 6 }}>

//         <Box
//           sx={{
//             display: "inline-flex",
//             alignItems: "center",
//             gap: 1,
//             px: 2,
//             py: 0.9,
//             borderRadius: 99,
//             bgcolor: "rgba(27,77,255,0.10)",
//             border: "1px solid rgba(27,77,255,0.18)",
//           }}
//         >
//           <Typography
//             sx={{
//               fontWeight: 900,
//               fontSize: 12,
//               letterSpacing: "0.12em",
//               textTransform: "uppercase",
//               color: "#1B4DFF",

//             }}
//           >
//             We would love to hear from you
//           </Typography>
//         </Box>
//       </Stack>

//       <Container maxWidth="lg">
//         <Stack
//           direction={{ xs: "column", md: "row" }}
//           spacing={3}
//         >



//           {/* ===== LEFT CARD ===== */}
//           <Paper
//             sx={{
//               flex: 1,
//               p: 3,
//               borderRadius: 3,
//             }}
//           >
//             <Typography variant="h6" fontWeight={600} mb={3}>
//               Get In Touch
//             </Typography>

//             <Stack spacing={2}>

//               <Stack direction="row" spacing={2} alignItems="center">
//                 <PhoneIcon color="" className="!text-[#1b4dff]" />
//                 <Typography variant="body2">
//                   India: 0172-456-8962
//                 </Typography>
//               </Stack>

//               <Typography variant="h6" fontWeight={600} mb={3}>
//                 Find us Here
//               </Typography>
//               <Stack direction="row" spacing={2} alignItems="center">
//                 <LocationOnIcon color="" className="!text-[#1b4dff]" />
//                 <Typography variant="body2">
//                   BluAI Inc., 8 The Green, Suite #17716, Dover, DE 19901, USA
//                 </Typography>
//               </Stack><Stack direction="row" spacing={2} alignItems="center">
//                 <LocationOnIcon color="" className="!text-[#1b4dff]" />
//                 <Typography variant="body2">
//                   BluAI Inc., 143 Cadycenter, Suite 173, Northville, MI 48167, USA
//                 </Typography>
//               </Stack>
//               <Stack direction="row" spacing={2} alignItems="center">
//                 <LocationOnIcon color="" className="!text-[#1b4dff]" />
//                 <Typography variant="body2">
//                   BluAI Private Ltd., CPM-17, Suite #317, Center Plaza Emaar, Sector 105, Mohali, Punjab 140307 India
//                 </Typography>
//               </Stack>

//             </Stack>
//           </Paper>


//           {/* ===== RIGHT FORM CARD ===== */}
//           <Paper
//             sx={{
//               flex: 2,
//               p: { xs: 2, md: 3 },
//               borderRadius: 3,
//             }}
//           >


//             {/* Success Modal */}
//             {success && (
//               <div
//                 className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md"
//                 onClick={closeSuccessModal}
//               >
//                 <div
//                   className="relative bg-white w-full max-w-sm mx-4 rounded-3xl p-8 shadow-2xl border border-slate-100"
//                   onClick={(e) => e.stopPropagation()}
//                 >
//                   <div className="flex justify-center mb-6">
//                     <div className="relative">
//                       <div className="absolute inset-0 bg-emerald-400/25 blur-xl rounded-full" />
//                       <div className="relative w-[68px] h-[68px] rounded-full bg-gradient-to-b from-emerald-400 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/20">
//                         <CheckCircle className="w-8 h-8 text-white" strokeWidth={2.5} />
//                       </div>
//                     </div>
//                   </div>

//                   <h2 className="text-[21px] font-semibold text-slate-900 text-center tracking-tight mb-1.5">
//                     Thank you, {submittedName.split(' ')[0]}
//                   </h2>
//                   <p className="text-[15px] text-slate-500 text-center mb-7">
//                     Your interest in BluAI means a lot to us.
//                   </p>

//                   <div className="rounded-2xl bg-slate-50 border border-slate-100 p-5 mb-7">
//                     <p className="text-[12px] font-medium text-slate-400 uppercase tracking-wider mb-3">
//                       What’s next
//                     </p>
//                     <ul className="space-y-2.5 text-[14px] text-slate-700">
//                       <li className="flex gap-2.5">
//                         <span className="text-emerald-500">✓</span>
//                         <span>Our team will review your information</span>
//                       </li>
//                       <li className="flex gap-2.5">
//                         <span className="text-emerald-500">✓</span>
//                         <span>
//                           You’ll hear from us within{' '}
//                           <span className="font-medium text-slate-900">24–48 hours</span>
//                         </span>
//                       </li>
//                     </ul>
//                   </div>

//                   <button
//                     onClick={closeSuccessModal}
//                     className="w-full h-12 rounded-2xl bg-slate-900 text-white text-[15px] font-medium hover:bg-slate-800 transition-colors"
//                   >
//                     Got it
//                   </button>

//                   <p className="text-[12px] text-slate-400 text-center mt-5">
//                     A confirmation email is on its way
//                   </p>
//                 </div>
//               </div>
//             )}


//             {/* Form */}
//             <form onSubmit={handleSubmit(onSubmit)} noValidate>
//               <Stack spacing={2}>
//                 {/* Name + Email */}
//                 <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
//                   <TextField
//                     label="Name"
//                     fullWidth
//                     error={!!errors.name}
//                     helperText={errors.name?.message}
//                     {...register("name", {
//                       required: "Name is required",
//                     })}
//                   />

//                   <TextField
//                     label="E-mail"
//                     fullWidth
//                     error={!!errors.email}
//                     helperText={errors.email?.message}
//                     {...register("email", {
//                       required: "Email is required",
//                       pattern: {
//                         value: /^\S+@\S+\.\S+$/,
//                         message: "Enter a valid email address",
//                       },
//                     })}
//                   />
//                 </Stack>

//                 {/* Mobile + Company */}
//                 <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
//                   {/* Mobile */}
//                   <TextField
//                     label="Mobile Number"
//                     fullWidth
//                     error={!!errors.mobile}
//                     helperText={errors.mobile?.message}
//                     {...register("mobile", {
//                       required: "Mobile number is required",
//                       pattern: {
//                         value: /^[0-9]{10,15}$/,
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


//                 {/* Subject */}
//                 <TextField
//                   label="Subject"
//                   fullWidth
//                   error={!!errors.subject}
//                   helperText={errors.subject?.message}
//                   {...register("subject", {
//                     required: "Subject is required",
//                   })}
//                 />
//                 {/* Message */}
//                 <TextField
//                   label="Your Message"
//                   multiline
//                   rows={4}
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

//                 {/* Submit */}
//                 <Box textAlign="center">
//                   <Button
//                     type="submit"
//                     variant="contained"
//                     sx={{
//                       mt: 2,
//                       px: 6,
//                       py: 1.2,
//                       borderRadius: 20,
//                       backgroundColor: "#1b4dff",
//                       textTransform: "none",
//                       fontWeight: 600,
//                     }}
//                   >
//                     Submit
//                   </Button>
//                 </Box>
//               </Stack>
//             </form>

//           </Paper>
//         </Stack>

//         <LocationTabs />
//       </Container>
//     </Box>
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
  Chip,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SendIcon from "@mui/icons-material/Send";
import { useForm } from "react-hook-form";
import Image from "next/image";
import axios from "axios";
import { LocationTabs } from "../components/LocationTabs";

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
    <Box component="section" sx={{ bgcolor: "#fafbff" }}>
      {/* ================= HERO ================= */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          minHeight: { xs: "42vh", sm: "58vh", md: "62vh" },
          overflow: "hidden",
        }}
      >
        <Image
          src="/contact-us.jpg"
          alt="Contact BluAI"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(9,17,45,0.85) 0%, rgba(27,77,255,0.55) 100%)",
            zIndex: 1,
          }}
        />
        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            minHeight: "inherit",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            px: { xs: 2, sm: 3 },
            py: 8,
          }}
        >
          <Chip
            label="WE'D LOVE TO HEAR FROM YOU"
            sx={{
              mb: 3,
              bgcolor: "rgba(255,255,255,0.12)",
              color: "#fff",
              fontWeight: 700,
              fontSize: 11,
              letterSpacing: "0.15em",
              border: "1px solid rgba(255,255,255,0.25)",
              backdropFilter: "blur(8px)",
              height: 32,
            }}
          />
          <Typography
            variant="h1"
            sx={{
              color: "#fff",
              fontWeight: 800,
              fontSize: { xs: 38, sm: 52, md: 64 },
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              mb: 2,
            }}
          >
            Contact{" "}
            <Box component="span" sx={{ color: "#7ea2ff" }}>
              Us
            </Box>
          </Typography>
          <Typography
            sx={{
              color: "rgba(255,255,255,0.85)",
              fontSize: { xs: 15, md: 17 },
              maxWidth: 560,
              lineHeight: 1.6,
            }}
          >
            Have a question, partnership idea, or need support? Our team is
            ready to help you get the most out of BluAI.
          </Typography>
        </Box>
      </Box>

      {/* ================= MAIN GRID ================= */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Stack direction={{ xs: "column", md: "row" }} spacing={{ xs: 3, md: 4 }}>
          {/* ---------- LEFT: INFO CARD ---------- */}
          <Paper
            elevation={0}
            sx={{
              flex: { md: "0 0 38%" },
              p: { xs: 3, md: 4 },
              borderRadius: 4,
              border: "1px solid #e8ecf5",
              bgcolor: "#fff",
              height: "fit-content",
            }}
          >
            <Typography
              variant="overline"
              sx={{
                color: "#1b4dff",
                fontWeight: 800,
                letterSpacing: "0.15em",
                fontSize: 11,
              }}
            >
              Reach Out
            </Typography>
            <Typography
              variant="h4"
              sx={{ fontWeight: 800, color: "#0b1437", mt: 0.5, mb: 1 }}
            >
              Get in touch
            </Typography>
            <Typography sx={{ color: "#5b6b8c", fontSize: 14, mb: 3 }}>
              We typically respond within 24–48 hours.
            </Typography>

            <Divider sx={{ mb: 3 }} />

            {/* Contact methods */}
            <Stack spacing={2.5} sx={{ mb: 3 }}>
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

            <Divider sx={{ mb: 3 }} />

            <Typography
              variant="subtitle2"
              sx={{
                fontWeight: 800,
                color: "#0b1437",
                letterSpacing: "0.02em",
                mb: 2,
                textTransform: "uppercase",
                fontSize: 12,
              }}
            >
              Our Offices
            </Typography>

            <Stack spacing={2.5}>
              {OFFICES.map((office, i) => (
                <Stack key={i} direction="row" spacing={1.5}>
                  <LocationOnIcon
                    sx={{ color: "#1b4dff", fontSize: 20, mt: 0.2 }}
                  />
                  <Box>
                    <Typography
                      sx={{
                        fontSize: 12,
                        fontWeight: 700,
                        color: "#1b4dff",
                        mb: 0.25,
                      }}
                    >
                      {office.country}
                    </Typography>
                    {office.lines.map((line, j) => (
                      <Typography
                        key={j}
                        sx={{ fontSize: 13.5, color: "#5b6b8c", lineHeight: 1.5 }}
                      >
                        {line}
                      </Typography>
                    ))}
                  </Box>
                </Stack>
              ))}
            </Stack>
          </Paper>

          {/* ---------- RIGHT: FORM CARD ---------- */}
          <Paper
            elevation={0}
            sx={{
              flex: 1,
              p: { xs: 3, md: 4.5 },
              borderRadius: 4,
              border: "1px solid #e8ecf5",
              bgcolor: "#fff",
            }}
          >
            <Typography
              variant="overline"
              sx={{
                color: "#1b4dff",
                fontWeight: 800,
                letterSpacing: "0.15em",
                fontSize: 11,
              }}
            >
              Send a message
            </Typography>
            <Typography
              variant="h4"
              sx={{ fontWeight: 800, color: "#0b1437", mt: 0.5, mb: 3 }}
            >
              Tell us about your project
            </Typography>

            {error && (
              <Alert severity="error" sx={{ mb: 3, borderRadius: 2 }}>
                {error}
              </Alert>
            )}

            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <Stack spacing={2.5}>
                <Stack direction={{ xs: "column", sm: "row" }} spacing={2.5}>
                  <TextField
                    label="Full Name"
                    fullWidth
                    error={!!errors.name}
                    helperText={errors.name?.message}
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
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+\.\S+$/,
                        message: "Enter a valid email",
                      },
                    })}
                  />
                </Stack>

                <Stack direction={{ xs: "column", sm: "row" }} spacing={2.5}>
                  <TextField
                    label="Mobile Number"
                    fullWidth
                    error={!!errors.mobile}
                    helperText={errors.mobile?.message}
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
                    {...register("company", {
                      required: "Company name is required",
                    })}
                  />
                </Stack>

                <TextField
                  label="Subject"
                  fullWidth
                  error={!!errors.subject}
                  helperText={errors.subject?.message}
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
                  {...register("message", {
                    required: "Message is required",
                    minLength: {
                      value: 10,
                      message: "Message must be at least 10 characters",
                    },
                  })}
                />

                <Box sx={{ pt: 1 }}>
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
                      borderRadius: 99,
                      bgcolor: "#1b4dff",
                      textTransform: "none",
                      fontWeight: 700,
                      fontSize: 15,
                      boxShadow: "0 8px 24px rgba(27,77,255,0.25)",
                      "&:hover": {
                        bgcolor: "#153dcf",
                        boxShadow: "0 10px 28px rgba(27,77,255,0.35)",
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
          </Paper>
        </Stack>

        {/* ================= LOCATIONS ================= */}
        <Box sx={{ mt: { xs: 6, md: 10 } }}>
          <Box sx={{ textAlign: "center", mb: 4 }}>
            <Typography
              variant="overline"
              sx={{
                color: "#1b4dff",
                fontWeight: 800,
                letterSpacing: "0.15em",
                fontSize: 11,
              }}
            >
              Global Presence
            </Typography>
            <Typography
              variant="h4"
              sx={{ fontWeight: 800, color: "#0b1437", mt: 0.5 }}
            >
              Find us around the world
            </Typography>
          </Box>
          <LocationTabs />
        </Box>
      </Container>

      {/* ================= SUCCESS MODAL ================= */}
      {success && (
        <SuccessModal
          name={submittedName}
          onClose={() => setSuccess(false)}
        />
      )}
    </Box>
  );
}

/* ============================================================
   Sub-components
   ============================================================ */

function ContactRow({ icon, label, value, href }) {
  return (
    <Stack direction="row" spacing={1.5} alignItems="center">
      <Box
        sx={{
          width: 40,
          height: 40,
          borderRadius: 2,
          bgcolor: "rgba(27,77,255,0.08)",
          color: "#1b4dff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          "& svg": { fontSize: 20 },
        }}
      >
        {icon}
      </Box>
      <Box>
        <Typography
          sx={{
            fontSize: 11,
            fontWeight: 700,
            color: "#8a96b3",
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
            fontWeight: 600,
            color: "#0b1437",
            textDecoration: "none",
            "&:hover": href ? { color: "#1b4dff" } : {},
          }}
        >
          {value}
        </Typography>
      </Box>
    </Stack>
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
          maxWidth: 420,
          borderRadius: 4,
          p: 4,
          bgcolor: "#fff",
          border: "1px solid #e8ecf5",
          boxShadow: "0 30px 80px rgba(11,20,55,0.25)",
          animation: "slideUp 0.3s ease",
          "@keyframes slideUp": {
            from: { transform: "translateY(20px)", opacity: 0 },
            to: { transform: "translateY(0)", opacity: 1 },
          },
        }}
      >
        {/* Icon */}
        <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
          <Box sx={{ position: "relative" }}>
            <Box
              sx={{
                position: "absolute",
                inset: -8,
                borderRadius: "50%",
                bgcolor: "rgba(16,185,129,0.15)",
                filter: "blur(14px)",
              }}
            />
            <Box
              sx={{
                position: "relative",
                width: 68,
                height: 68,
                borderRadius: "50%",
                background:
                  "linear-gradient(180deg, #34d399 0%, #059669 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 10px 24px rgba(5,150,105,0.3)",
              }}
            >
              <CheckCircleIcon sx={{ color: "#fff", fontSize: 36 }} />
            </Box>
          </Box>
        </Box>

        <Typography
          sx={{
            fontSize: 22,
            fontWeight: 700,
            color: "#0b1437",
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
            color: "#5b6b8c",
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
            bgcolor: "#f7f9ff",
            border: "1px solid #e8ecf5",
            p: 2.5,
            mb: 3.5,
          }}
        >
          <Typography
            sx={{
              fontSize: 11,
              fontWeight: 700,
              color: "#8a96b3",
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
            borderRadius: 2.5,
            bgcolor: "#0b1437",
            textTransform: "none",
            fontWeight: 600,
            fontSize: 15,
            "&:hover": { bgcolor: "#1a2550" },
          }}
        >
          Got it
        </Button>

        <Typography
          sx={{
            fontSize: 12,
            color: "#a3adc2",
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
        sx={{ color: "#10b981", fontSize: 18, mt: 0.15, flexShrink: 0 }}
      />
      <Typography sx={{ fontSize: 14, color: "#3d4a6b", lineHeight: 1.5 }}>
        {bold ? (
          <>
            You'll hear back within{" "}
            <Box component="span" sx={{ fontWeight: 700, color: "#0b1437" }}>
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