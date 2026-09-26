
// "use client";

// import { useState } from "react";
// import {
//   Box,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   IconButton,
//   TextField,
//   Button,
//   Stack,
//   Divider,
//   Alert,
//   CircularProgress,
//   Snackbar,
//   Typography,
//   InputAdornment,
//   Paper,
// } from "@mui/material";
// import CloseIcon from "@mui/icons-material/Close";
// import SendIcon from "@mui/icons-material/Send";
// import PersonIcon from "@mui/icons-material/Person";
// import EmailIcon from "@mui/icons-material/Email";
// import PhoneIcon from "@mui/icons-material/Phone";
// import MessageIcon from "@mui/icons-material/Message";

// // Constants
// const API_URL = "https://vitalchairapi.bluai.ai/api/vitalchair-admin/demo";
// const PRIMARY_COLOR = "#1b4dff";

// export default function RequestDemoModal({ open, onClose }) {
//   // Form state
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   // UI state
//   const [loading, setLoading] = useState(false);
//   const [snackbar, setSnackbar] = useState({
//     open: false,
//     message: "",
//     severity: "success",
//   });

//   // Validation helpers
//   const validateEmail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   const validatePhone = (phone) => {
//     const digits = phone.replace(/\D/g, "");
//     return digits.length >= 10;
//   };

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   // Show snackbar
//   const showSnackbar = (message, severity) => {
//     setSnackbar({ open: true, message, severity });
//   };

//   // Handle snackbar close
//   const handleSnackbarClose = () => {
//     setSnackbar((prev) => ({ ...prev, open: false }));
//   };

//   // Validate form
//   const validateForm = () => {
//     if (!formData.fullName.trim()) {
//       showSnackbar("Please enter your full name", "error");
//       return false;
//     }

//     if (!formData.email || !validateEmail(formData.email)) {
//       showSnackbar("Please enter a valid email address", "error");
//       return false;
//     }

//     if (!formData.phone || !validatePhone(formData.phone)) {
//       showSnackbar("Please enter a valid phone number (at least 10 digits)", "error");
//       return false;
//     }

//     return true;
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validateForm()) return;

//     setLoading(true);

//     try {
//       const response = await fetch(API_URL, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//         },
//         body: JSON.stringify({
//           fullName: formData.fullName.trim(),
//           email: formData.email.trim(),
//           phone: formData.phone.trim(),
//           message: formData.message.trim() || "No message provided",
//         }),
//       });

//       if (!response.ok) {
//         let errorMessage = "Failed to submit demo request";
//         try {
//           const errorData = await response.json();
//           errorMessage = errorData.message || errorMessage;
//         } catch {
//           const text = await response.text();
//           errorMessage = text || errorMessage;
//         }
//         throw new Error(errorMessage);
//       }

//       await response.json();

//       showSnackbar("Demo request submitted! We'll contact you soon.", "success");

//       // Reset form
//       setFormData({
//         fullName: "",
//         email: "",
//         phone: "",
//         message: "",
//       });

//       // Close modal after delay
//       setTimeout(() => {
//         onClose();
//       }, 3000);
//     } catch (error) {
//       console.error("Error submitting demo request:", error);

//       let errorMessage = error.message || "Failed to submit demo request";

//       if (errorMessage === "Failed to fetch") {
//         errorMessage = "Unable to connect to the server. Please check your internet connection and try again.";
//       }

//       showSnackbar(errorMessage, "error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Reset state when modal opens
//   const handleOpen = () => {
//     setFormData({
//       fullName: "",
//       email: "",
//       phone: "",
//       message: "",
//     });
//     setSnackbar({ open: false, message: "", severity: "success" });
//   };

//   return (
//     <>
//       <Dialog
//         open={open}
//         onClose={onClose}
//         fullWidth
//         maxWidth="sm"
//         TransitionProps={{
//           onEnter: handleOpen,
//         }}
//         PaperProps={{
//           sx: {
//             borderRadius: 5,
//             overflow: "hidden",
//             boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
//             bgcolor: "#ffffff",
//           },
//         }}
//       >
//         {/* Header */}
//         <DialogTitle
//           sx={{
//             px: 4,
//             py: 3,
//             fontWeight: 700,
//             color: "#1a1a2e",
//             fontSize: 22,
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "space-between",
//             backgroundColor: "#ffffff",
//             borderBottom: "1px solid #f0f2f5",
//           }}
//         >
//           <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
//             <Box
//               sx={{
//                 width: 44,
//                 height: 44,
//                 borderRadius: "12px",
//                 background: PRIMARY_COLOR,
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 color: "white",
//                 fontWeight: 700,
//                 fontSize: 20,
//                 boxShadow: "0 4px 12px rgba(27, 77, 255, 0.2)",
//               }}
//             >
//               🚀
//             </Box>
//             <Box>
//               <Typography variant="h6" sx={{ fontWeight: 700, fontSize: 20, color: "#1a1a2e" }}>
//                 Request a Demo
//               </Typography>
//               <Typography variant="caption" sx={{ color: "#6b7a8f", fontSize: 12 }}>
//                 Let's get started
//               </Typography>
//             </Box>
//           </Box>
//           <IconButton
//             onClick={onClose}
//             sx={{
//               color: "#6b7a8f",
//               bgcolor: "#f5f7fa",
//               "&:hover": {
//                 backgroundColor: "#e8ecf1",
//               },
//               width: 36,
//               height: 36,
//             }}
//           >
//             <CloseIcon fontSize="small" />
//           </IconButton>
//         </DialogTitle>

//         <Divider sx={{ borderColor: "#f0f2f5" }} />

//         {/* Content */}
//         <DialogContent sx={{ p: { xs: 3, sm: 4 }, bgcolor: "#ffffff" }}>
//           <Box component="form" onSubmit={handleSubmit} noValidate>
//             <Stack spacing={3}>
//               {/* Description */}
//               <Typography
//                 variant="body2"
//                 sx={{
//                   color: "#6b7a8f",
//                   fontSize: 14,
//                   lineHeight: 1.6,
//                   bgcolor: "#f8faff",
//                   p: 2,
//                   borderRadius: 2,
//                   border: "1px solid #eef2f7",
//                 }}
//               >
//                 Fill in the details below and our team will reach out to schedule your personalized demo.
//               </Typography>

//               {/* Full Name */}
//               <TextField
//                 fullWidth
//                 required
//                 name="fullName"
//                 label="Full Name"
//                 placeholder="John Doe"
//                 variant="outlined"
//                 value={formData.fullName}
//                 onChange={handleChange}
//                 disabled={loading}
//                 InputProps={{
//                   startAdornment: (
//                     <InputAdornment position="start">
//                       <PersonIcon sx={{ color: PRIMARY_COLOR, fontSize: 20 }} />
//                     </InputAdornment>
//                   ),
//                   sx: {
//                     borderRadius: 2.5,
//                     bgcolor: "#fafbfc",
//                     "&:hover": {
//                       bgcolor: "#ffffff",
//                     },
//                   },
//                 }}
//                 sx={{
//                   "& .MuiOutlinedInput-root": {
//                     "&.Mui-focused fieldset": {
//                       borderColor: PRIMARY_COLOR,
//                       borderWidth: 2,
//                     },
//                   },
//                   "& .MuiInputLabel-root.Mui-focused": {
//                     color: PRIMARY_COLOR,
//                   },
//                 }}
//               />

//               {/* Email */}
//               <TextField
//                 fullWidth
//                 required
//                 name="email"
//                 label="Email Address"
//                 type="email"
//                 placeholder="john@example.com"
//                 variant="outlined"
//                 value={formData.email}
//                 onChange={handleChange}
//                 disabled={loading}
//                 InputProps={{
//                   startAdornment: (
//                     <InputAdornment position="start">
//                       <EmailIcon sx={{ color: PRIMARY_COLOR, fontSize: 20 }} />
//                     </InputAdornment>
//                   ),
//                   sx: {
//                     borderRadius: 2.5,
//                     bgcolor: "#fafbfc",
//                     "&:hover": {
//                       bgcolor: "#ffffff",
//                     },
//                   },
//                 }}
//                 sx={{
//                   "& .MuiOutlinedInput-root": {
//                     "&.Mui-focused fieldset": {
//                       borderColor: PRIMARY_COLOR,
//                       borderWidth: 2,
//                     },
//                   },
//                   "& .MuiInputLabel-root.Mui-focused": {
//                     color: PRIMARY_COLOR,
//                   },
//                 }}
//               />

//               {/* Phone */}
//               <TextField
//                 fullWidth
//                 required
//                 name="phone"
//                 label="Phone Number"
//                 placeholder="+1 (555) 000-0000"
//                 variant="outlined"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 disabled={loading}
//                 InputProps={{
//                   startAdornment: (
//                     <InputAdornment position="start">
//                       <PhoneIcon sx={{ color: PRIMARY_COLOR, fontSize: 20 }} />
//                     </InputAdornment>
//                   ),
//                   sx: {
//                     borderRadius: 2.5,
//                     bgcolor: "#fafbfc",
//                     "&:hover": {
//                       bgcolor: "#ffffff",
//                     },
//                   },
//                 }}
//                 sx={{
//                   "& .MuiOutlinedInput-root": {
//                     "&.Mui-focused fieldset": {
//                       borderColor: PRIMARY_COLOR,
//                       borderWidth: 2,
//                     },
//                   },
//                   "& .MuiInputLabel-root.Mui-focused": {
//                     color: PRIMARY_COLOR,
//                   },
//                 }}
//               />

//               {/* Message */}
//               <TextField
//                 fullWidth
//                 name="message"
//                 label="Message (Optional)"
//                 placeholder="Tell us about your project or requirements..."
//                 multiline
//                 minRows={3}
//                 maxRows={6}
//                 variant="outlined"
//                 value={formData.message}
//                 onChange={handleChange}
//                 disabled={loading}
//                 InputProps={{
//                   startAdornment: (
//                     <InputAdornment position="start" sx={{ alignSelf: "flex-start", mt: 1.5 }}>
//                       <MessageIcon sx={{ color: PRIMARY_COLOR, fontSize: 20 }} />
//                     </InputAdornment>
//                   ),
//                   sx: {
//                     borderRadius: 2.5,
//                     bgcolor: "#fafbfc",
//                     "&:hover": {
//                       bgcolor: "#ffffff",
//                     },
//                   },
//                 }}
//                 sx={{
//                   "& .MuiOutlinedInput-root": {
//                     "&.Mui-focused fieldset": {
//                       borderColor: PRIMARY_COLOR,
//                       borderWidth: 2,
//                     },
//                   },
//                   "& .MuiInputLabel-root.Mui-focused": {
//                     color: PRIMARY_COLOR,
//                   },
//                 }}
//               />

//               {/* Submit Button */}
//               <Button
//                 type="submit"
//                 variant="contained"
//                 fullWidth
//                 disabled={loading}
//                 startIcon={loading ? <CircularProgress size={20} color="inherit" /> : <SendIcon />}
//                 sx={{
//                   mt: 1,
//                   textTransform: "none",
//                   fontWeight: 700,
//                   py: 1.8,
//                   borderRadius: 999,
//                   fontSize: 16,
//                   bgcolor: PRIMARY_COLOR,
//                   boxShadow: "0 8px 24px rgba(27, 77, 255, 0.25)",
//                   transition: "all 0.2s ease",
//                   "&:hover": {
//                     bgcolor: "#1540cc",
//                     boxShadow: "0 12px 32px rgba(27, 77, 255, 0.35)",
//                     transform: "translateY(-2px)",
//                   },
//                   "&:active": {
//                     transform: "translateY(0)",
//                   },
//                   "&.Mui-disabled": {
//                     bgcolor: "#c5cbd5",
//                     boxShadow: "none",
//                   },
//                 }}
//               >
//                 {loading ? "Submitting..." : "Submit Demo Request"}
//               </Button>

//               {/* Footer note */}
//               <Typography
//                 variant="caption"
//                 sx={{
//                   textAlign: "center",
//                   color: "#8a9bb5",
//                   fontSize: 12,
//                   mt: 0.5,
//                 }}
//               >
//                 By submitting, you agree to our{" "}
//                 <Box
//                   component="span"
//                   sx={{
//                     color: PRIMARY_COLOR,
//                     cursor: "pointer",
//                     fontWeight: 600,
//                     "&:hover": { textDecoration: "underline" },
//                   }}
//                 >
//                   Privacy Policy
//                 </Box>{" "}
//                 and{" "}
//                 <Box
//                   component="span"
//                   sx={{
//                     color: PRIMARY_COLOR,
//                     cursor: "pointer",
//                     fontWeight: 600,
//                     "&:hover": { textDecoration: "underline" },
//                   }}
//                 >
//                   Terms of Service
//                 </Box>
//               </Typography>

//               {/* Trust indicator */}
//               <Box
//                 sx={{
//                   display: "flex",
//                   justifyContent: "center",
//                   gap: 3,
//                   mt: 1,
//                   pt: 2,
//                   borderTop: "1px solid #f0f2f5",
//                 }}
//               >
//                 <Typography variant="caption" sx={{ color: "#8a9bb5", display: "flex", alignItems: "center", gap: 0.5 }}>
//                   🔒 Secure
//                 </Typography>
//                 <Typography variant="caption" sx={{ color: "#8a9bb5", display: "flex", alignItems: "center", gap: 0.5 }}>
//                   ⚡ 24/7 Support
//                 </Typography>
//                 <Typography variant="caption" sx={{ color: "#8a9bb5", display: "flex", alignItems: "center", gap: 0.5 }}>
//                   ✅ No Spam
//                 </Typography>
//               </Box>
//             </Stack>
//           </Box>
//         </DialogContent>
//       </Dialog>

//       {/* Snackbar */}
//       <Snackbar
//         open={snackbar.open}
//         autoHideDuration={6000}
//         onClose={handleSnackbarClose}
//         anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
//       >
//         <Alert
//           onClose={handleSnackbarClose}
//           severity={snackbar.severity}
//           variant="filled"
//           sx={{
//             width: "100%",
//             borderRadius: 2.5,
//             boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
//             "& .MuiAlert-icon": {
//               fontSize: 24,
//             },
//           }}
//         >
//           {snackbar.message}
//         </Alert>
//       </Snackbar>
//     </>
//   );
// }



"use client";

import { useState } from "react";
import {
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  TextField,
  Button,
  Stack,
  Divider,
  Alert,
  CircularProgress,
  Snackbar,
  Typography,
  InputAdornment,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import MessageIcon from "@mui/icons-material/Message";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import LockIcon from "@mui/icons-material/Lock";
import BoltIcon from "@mui/icons-material/Bolt";
import VerifiedIcon from "@mui/icons-material/Verified";

// Constants
const API_URL = "https://vitalchairapi.bluai.ai/api/vitalchair-admin/demo";
const PRIMARY_COLOR = "#1b4dff";

/* ============================================================
   SHARED FIELD STYLES
   ============================================================ */

const fieldSx = {
  "& .MuiOutlinedInput-root": {
    borderRadius: 2.5,
    bgcolor: "#FAFBFC",
    transition: "all 0.2s ease",
    "& fieldset": {
      borderColor: "rgba(227,232,255,0.95)",
    },
    "&:hover": {
      bgcolor: "#fff",
      "& fieldset": { borderColor: "rgba(27,77,255,0.35)" },
    },
    "&.Mui-focused": {
      bgcolor: "#fff",
      boxShadow: "0 0 0 4px rgba(27,77,255,0.10)",
      "& fieldset": {
        borderColor: PRIMARY_COLOR,
        borderWidth: 1.5,
      },
    },
  },
  "& .MuiInputLabel-root": {
    fontWeight: 700,
    color: "rgba(7,18,44,0.6)",
    fontSize: 13.5,
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: PRIMARY_COLOR,
  },
  "& .MuiOutlinedInput-input": {
    fontSize: 14.5,
    fontWeight: 500,
  },
};

/* ============================================================
   MAIN COMPONENT
   ============================================================ */

export default function RequestDemoModal({ open, onClose }) {
  // Form state
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  // UI state
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  // Validation helpers
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const digits = phone.replace(/\D/g, "");
    return digits.length >= 10;
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Show snackbar
  const showSnackbar = (message, severity) => {
    setSnackbar({ open: true, message, severity });
  };

  // Handle snackbar close
  const handleSnackbarClose = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  // Validate form
  const validateForm = () => {
    if (!formData.fullName.trim()) {
      showSnackbar("Please enter your full name", "error");
      return false;
    }

    if (!formData.email || !validateEmail(formData.email)) {
      showSnackbar("Please enter a valid email address", "error");
      return false;
    }

    if (!formData.phone || !validatePhone(formData.phone)) {
      showSnackbar("Please enter a valid phone number (at least 10 digits)", "error");
      return false;
    }

    return true;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          fullName: formData.fullName.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          message: formData.message.trim() || "No message provided",
        }),
      });

      if (!response.ok) {
        let errorMessage = "Failed to submit demo request";
        try {
          const errorData = await response.json();
          errorMessage = errorData.message || errorMessage;
        } catch {
          const text = await response.text();
          errorMessage = text || errorMessage;
        }
        throw new Error(errorMessage);
      }

      await response.json();

      showSnackbar("Demo request submitted! We'll contact you soon.", "success");

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        message: "",
      });

      // Close modal after delay
      setTimeout(() => {
        onClose();
      }, 3000);
    } catch (error) {
      console.error("Error submitting demo request:", error);

      let errorMessage = error.message || "Failed to submit demo request";

      if (errorMessage === "Failed to fetch") {
        errorMessage =
          "Unable to connect to the server. Please check your internet connection and try again.";
      }

      showSnackbar(errorMessage, "error");
    } finally {
      setLoading(false);
    }
  };

  // Reset state when modal opens
  const handleOpen = () => {
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      message: "",
    });
    setSnackbar({ open: false, message: "", severity: "success" });
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={onClose}
        fullWidth
        maxWidth="sm"
        TransitionProps={{ onEnter: handleOpen }}
        PaperProps={{
          sx: {
            borderRadius: 5,
            overflow: "hidden",
            boxShadow: "0 40px 100px -30px rgba(11,28,61,0.5)",
            bgcolor: "#fff",
            backgroundImage: "none",
          },
        }}
      >
        {/* ─── Header ─── */}
        <DialogTitle
          sx={{
            position: "relative",
            px: { xs: 3, sm: 4 },
            py: { xs: 3, sm: 3.5 },
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            background:
              "linear-gradient(160deg, #0B1C3D 0%, #142a5c 55%, #0B1C3D 100%)",
            overflow: "hidden",
          }}
        >
          {/* Ambient glow */}
          <Box
            sx={{
              position: "absolute",
              top: "-60%",
              right: "-15%",
              width: 320,
              height: 320,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(27,77,255,0.45) 0%, transparent 65%)",
              pointerEvents: "none",
            }}
          />

          <Box
            sx={{
              position: "relative",
              zIndex: 1,
              display: "flex",
              alignItems: "center",
              gap: 1.8,
              flex: 1,
              minWidth: 0,
            }}
          >
            <Box
              sx={{
                width: 48,
                height: 48,
                borderRadius: "14px",
                background:
                  "linear-gradient(135deg, #1B4DFF 0%, #00A3FF 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                flexShrink: 0,
                boxShadow: "0 12px 30px -8px rgba(27,77,255,0.8)",
              }}
            >
              <AutoAwesomeIcon sx={{ fontSize: 24 }} />
            </Box>
            <Box sx={{ minWidth: 0 }}>
              <Typography
                sx={{
                  fontWeight: 900,
                  fontSize: { xs: 17, sm: 19 },
                  color: "#fff",
                  lineHeight: 1.2,
                  letterSpacing: "-0.01em",
                }}
              >
                Request a Demo
              </Typography>
              <Typography
                sx={{
                  fontSize: 12,
                  color: "rgba(255,255,255,0.7)",
                  fontWeight: 600,
                  mt: 0.3,
                }}
              >
                Let's get started — it takes 30 seconds
              </Typography>
            </Box>
          </Box>

          <IconButton
            onClick={onClose}
            sx={{
              position: "relative",
              zIndex: 1,
              color: "#fff",
              bgcolor: "rgba(255,255,255,0.10)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.18)",
              width: 36,
              height: 36,
              flexShrink: 0,
              "&:hover": {
                bgcolor: "rgba(255,255,255,0.18)",
              },
            }}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </DialogTitle>

        {/* ─── Content ─── */}
        <DialogContent
          sx={{
            p: { xs: 3, sm: 4 },
            bgcolor: "#fff",
            "&.MuiDialogContent-root": { pt: { xs: 3, sm: 3.5 } },
          }}
        >
          <Box component="form" onSubmit={handleSubmit} noValidate>
            <Stack spacing={2.5}>
              {/* Info banner */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 1.4,
                  p: 1.8,
                  borderRadius: 3,
                  bgcolor: "rgba(27,77,255,0.06)",
                  border: "1px solid rgba(27,77,255,0.15)",
                }}
              >
                <Box
                  sx={{
                    width: 28,
                    height: 28,
                    borderRadius: "8px",
                    background:
                      "linear-gradient(135deg, #1B4DFF 0%, #00A3FF 100%)",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    mt: "1px",
                  }}
                >
                  <AutoAwesomeIcon sx={{ fontSize: 16 }} />
                </Box>
                <Typography
                  sx={{
                    fontSize: 13.5,
                    color: "rgba(7,18,44,0.72)",
                    lineHeight: 1.6,
                  }}
                >
                  Fill in the details below and our team will reach out to
                  schedule your personalized demo.
                </Typography>
              </Box>

              {/* Name */}
              <TextField
                fullWidth
                required
                name="fullName"
                label="Full Name"
                placeholder="John Doe"
                variant="outlined"
                value={formData.fullName}
                onChange={handleChange}
                disabled={loading}
                sx={fieldSx}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon
                        sx={{ color: PRIMARY_COLOR, fontSize: 20 }}
                      />
                    </InputAdornment>
                  ),
                }}
              />

              {/* Email */}
              <TextField
                fullWidth
                required
                name="email"
                label="Email Address"
                type="email"
                placeholder="john@example.com"
                variant="outlined"
                value={formData.email}
                onChange={handleChange}
                disabled={loading}
                sx={fieldSx}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon
                        sx={{ color: PRIMARY_COLOR, fontSize: 20 }}
                      />
                    </InputAdornment>
                  ),
                }}
              />

              {/* Phone */}
              <TextField
                fullWidth
                required
                name="phone"
                label="Phone Number"
                placeholder="+1 (555) 000-0000"
                variant="outlined"
                value={formData.phone}
                onChange={handleChange}
                disabled={loading}
                sx={fieldSx}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PhoneIcon
                        sx={{ color: PRIMARY_COLOR, fontSize: 20 }}
                      />
                    </InputAdornment>
                  ),
                }}
              />

              {/* Message */}
              <TextField
                fullWidth
                name="message"
                label="Message (Optional)"
                placeholder="Tell us about your project or requirements..."
                multiline
                minRows={3}
                maxRows={6}
                variant="outlined"
                value={formData.message}
                onChange={handleChange}
                disabled={loading}
                sx={fieldSx}
                InputProps={{
                  startAdornment: (
                    <InputAdornment
                      position="start"
                      sx={{ alignSelf: "flex-start", mt: 1.5 }}
                    >
                      <MessageIcon
                        sx={{ color: PRIMARY_COLOR, fontSize: 20 }}
                      />
                    </InputAdornment>
                  ),
                }}
              />

              {/* Submit button */}
              <Button
                type="submit"
                variant="contained"
                fullWidth
                disabled={loading}
                startIcon={
                  loading ? (
                    <CircularProgress size={20} color="inherit" />
                  ) : (
                    <SendIcon />
                  )
                }
                sx={{
                  mt: 0.5,
                  textTransform: "none",
                  fontWeight: 800,
                  py: 1.6,
                  borderRadius: 999,
                  fontSize: 15.5,
                  background:
                    "linear-gradient(90deg, #2f46ff 0%, #1b4dff 100%)",
                  boxShadow: "0 14px 35px rgba(27,77,255,0.35)",
                  transition: "all 0.25s ease",
                  "&:hover": {
                    boxShadow: "0 20px 45px rgba(27,77,255,0.45)",
                    transform: "translateY(-2px)",
                  },
                  "&:active": {
                    transform: "translateY(0)",
                  },
                  "&.Mui-disabled": {
                    bgcolor: "#c5cbd5",
                    background:
                      "linear-gradient(90deg, #b8c6ff 0%, #a3b6ff 100%)",
                    color: "#fff",
                    boxShadow: "none",
                  },
                }}
              >
                {loading ? "Submitting..." : "Submit Demo Request"}
              </Button>

              {/* Privacy note */}
              <Typography
                sx={{
                  textAlign: "center",
                  color: "rgba(7,18,44,0.55)",
                  fontSize: 12,
                  mt: 0.5,
                  lineHeight: 1.6,
                }}
              >
                By submitting, you agree to our{" "}
                <Box
                  component="span"
                  sx={{
                    color: PRIMARY_COLOR,
                    cursor: "pointer",
                    fontWeight: 700,
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  Privacy Policy
                </Box>{" "}
                and{" "}
                <Box
                  component="span"
                  sx={{
                    color: PRIMARY_COLOR,
                    cursor: "pointer",
                    fontWeight: 700,
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  Terms of Service
                </Box>
              </Typography>

              {/* Trust indicators */}
              <Stack
                direction="row"
                spacing={{ xs: 2, sm: 3 }}
                sx={{
                  justifyContent: "center",
                  mt: 0.5,
                  pt: 2,
                  borderTop: "1px solid rgba(7,18,44,0.08)",
                  flexWrap: "wrap",
                  gap: 1.5,
                }}
              >
                <TrustItem
                  icon={<LockIcon sx={{ fontSize: 14 }} />}
                  text="Secure"
                />
                <TrustItem
                  icon={<BoltIcon sx={{ fontSize: 14 }} />}
                  text="24/7 Support"
                />
                <TrustItem
                  icon={<VerifiedIcon sx={{ fontSize: 14 }} />}
                  text="No Spam"
                />
              </Stack>
            </Stack>
          </Box>
        </DialogContent>
      </Dialog>

      {/* ─── Snackbar ─── */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbar.severity}
          variant="filled"
          sx={{
            width: "100%",
            borderRadius: 3,
            boxShadow: "0 20px 45px -15px rgba(0,0,0,0.3)",
            fontWeight: 600,
            "& .MuiAlert-icon": {
              fontSize: 22,
            },
          }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
}

/* ============================================================
   SUB-COMPONENT
   ============================================================ */

function TrustItem({ icon, text }) {
  return (
    <Box
      sx={{
        display: "inline-flex",
        alignItems: "center",
        gap: 0.6,
        color: "rgba(7,18,44,0.55)",
      }}
    >
      <Box sx={{ display: "flex", color: "#1B4DFF" }}>{icon}</Box>
      <Typography sx={{ fontSize: 12, fontWeight: 700 }}>{text}</Typography>
    </Box>
  );
}