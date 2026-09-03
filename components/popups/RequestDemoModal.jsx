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
// } from "@mui/material";
// import CloseIcon from "@mui/icons-material/Close";
// import SendIcon from "@mui/icons-material/Send";

// export default function RequestDemoModal({ open, onClose }) {
//   // Form state
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     message: "",
//     verificationCode: "",
//   });

//   // UI state
//   const [loading, setLoading] = useState(false);
//   const [isVerified, setIsVerified] = useState(true);
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");
//   const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" });

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//     // Clear errors when user types
//     if (error) setError("");
//   };

//   // Validate email format
//   const validateEmail = (email) => {
//     const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return re.test(email);
//   };



//   // Handle form submission (Send Demo Request)
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Validate required fields
//     if (!formData.fullName) {
//       setSnackbar({
//         open: true,
//         message: "Please enter your full name",
//         severity: "error",
//       });
//       return;
//     }

//     if (!formData.email || !validateEmail(formData.email)) {
//       setSnackbar({
//         open: true,
//         message: "Please enter a valid email address",
//         severity: "error",
//       });
//       return;
//     }

//     if (!formData.phone) {
//       setSnackbar({
//         open: true,
//         message: "Please enter your phone number",
//         severity: "error",
//       });
//       return;
//     }

//     if (!isVerified) {
//       setSnackbar({
//         open: true,
//         message: "Please verify your email first",
//         severity: "warning",
//       });
//       return;
//     }

//     setLoading(true);
//     setError("");

//     try {
//       // Send demo request to your backend
//       const response = await fetch(`https://vitalchairapi.bluai.ai/api/vitalchair-admin/demo`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "Accept": "application/json", // Add accept header
//         },
//         body: JSON.stringify({
//           fullName: formData.fullName,
//           email: formData.email,
//           phone: formData.phone,
//           message: formData.message || "No message provided",
//         }),
//       });

//       // Check if response is OK before parsing JSON
//       if (!response.ok) {
//         let errorMessage = "Failed to submit demo request";
//         try {
//           const errorData = await response.json();
//           errorMessage = errorData.message || errorMessage;
//         } catch (e) {
//           // If response isn't JSON, get text
//           const text = await response.text();
//           errorMessage = text || errorMessage;
//         }
//         throw new Error(errorMessage);
//       }

//       const data = await response.json();

//       setSuccess("Demo request submitted successfully!");
//       setSnackbar({
//         open: true,
//         message: "Demo request submitted! We'll contact you soon.",
//         severity: "success",
//       });

//       // Reset form
//       setFormData({
//         fullName: "",
//         email: "",
//         phone: "",
//         message: "",
//         verificationCode: "",
//       });
//       setIsVerified(false);

//       // Close modal after delay
//       setTimeout(() => {
//         onClose();
//         setSuccess("");
//       }, 3000);

//     } catch (error) {
//       console.error("Error submitting demo request:", error);

//       // More specific error messages
//       let errorMessage = error.message || "Failed to submit demo request";

//       if (error.message === "Failed to fetch") {
//         errorMessage = "Unable to connect to the server. Please check your internet connection and try again.";
//       }

//       setSnackbar({
//         open: true,
//         message: errorMessage,
//         severity: "error",
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Handle snackbar close
//   const handleSnackbarClose = () => {
//     setSnackbar({ ...snackbar, open: false });
//   };

//   return (
//     <>
//       <Dialog
//         open={open}
//         onClose={onClose}
//         fullWidth
//         maxWidth="sm"
//         PaperProps={{
//           sx: {
//             borderRadius: 4,
//             overflow: "hidden",
//           },
//         }}
//       >
//         {/* HEADER */}
//         <DialogTitle
//           sx={{
//             px: 3,
//             py: 2.2,
//             fontWeight: 800,
//             color: "#0b1c3d",
//             fontSize: 20,
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "space-between",
//             backgroundColor: "#fff",
//           }}
//         >
//           Request Demo
//           <IconButton onClick={onClose} sx={{ color: "#1f2a56" }}>
//             <CloseIcon />
//           </IconButton>
//         </DialogTitle>

//         <Divider />

//         {/* BODY */}
//         <DialogContent sx={{ p: { xs: 2.5, sm: 3 } }}>
//           {error && (
//             <Alert severity="error" sx={{ mb: 2, borderRadius: 2 }}>
//               {error}
//             </Alert>
//           )}

//           {success && (
//             <Alert severity="success" sx={{ mb: 2, borderRadius: 2 }}>
//               {success}
//             </Alert>
//           )}

//           <Box component="form" onSubmit={handleSubmit}>
//             <Stack spacing={2.5}>
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
//                   sx: { borderRadius: 2.5 },
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
//                 InputProps={{
//                   sx: { borderRadius: 2.5 },
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
//                   sx: { borderRadius: 2.5 },
//                 }}
//               />

         

//               {/* Message */}
//               <TextField
//                 fullWidth
//                 name="message"
//                 label="Message (Optional)"
//                 placeholder="Tell us about your project or requirements..."
//                 multiline
//                 minRows={4}
//                 variant="outlined"
//                 value={formData.message}
//                 onChange={handleChange}
//                 disabled={loading}
//                 InputProps={{
//                   sx: { borderRadius: 2.5 },
//                 }}
//               />

//               {/* Submit Button */}
//               <Button
//                 type="submit"
//                 variant="contained"
//                 fullWidth
//                 // disabled={loading || !isVerified}
//                 startIcon={loading ? <CircularProgress size={20} color="inherit" /> : <SendIcon />}
//                 sx={{
//                   mt: 1,
//                   textTransform: "none",
//                   fontWeight: 800,
//                   py: 1.5,
//                   borderRadius: 999,
//                   fontSize: 16,
//                   backgroundColor: true ? "#6c7bff" : "#b0b0b0",
//                   boxShadow: "none",
//                   "&:hover": {
//                     backgroundColor: true ? "#1b4dff" : "#b0b0b0",
//                   },
//                 }}
//               >
//                 {loading ? "Submitting..." : "Submit Demo Request"}
//               </Button>
//             </Stack>
//           </Box>
//         </DialogContent>
//       </Dialog>

//       {/* Snackbar for notifications */}
//       <Snackbar
//         open={snackbar.open}
//         autoHideDuration={6000}
//         onClose={handleSnackbarClose}
//         anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
//       >
//         <Alert
//           onClose={handleSnackbarClose}
//           severity={snackbar.severity}
//           sx={{ width: "100%" }}
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
  Paper,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import MessageIcon from "@mui/icons-material/Message";

// Constants
const API_URL = "https://vitalchairapi.bluai.ai/api/vitalchair-admin/demo";
const PRIMARY_COLOR = "#1b4dff";

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
        errorMessage = "Unable to connect to the server. Please check your internet connection and try again.";
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
        TransitionProps={{
          onEnter: handleOpen,
        }}
        PaperProps={{
          sx: {
            borderRadius: 5,
            overflow: "hidden",
            boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
            bgcolor: "#ffffff",
          },
        }}
      >
        {/* Header */}
        <DialogTitle
          sx={{
            px: 4,
            py: 3,
            fontWeight: 700,
            color: "#1a1a2e",
            fontSize: 22,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#ffffff",
            borderBottom: "1px solid #f0f2f5",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            <Box
              sx={{
                width: 44,
                height: 44,
                borderRadius: "12px",
                background: PRIMARY_COLOR,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontWeight: 700,
                fontSize: 20,
                boxShadow: "0 4px 12px rgba(27, 77, 255, 0.2)",
              }}
            >
              🚀
            </Box>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 700, fontSize: 20, color: "#1a1a2e" }}>
                Request a Demo
              </Typography>
              <Typography variant="caption" sx={{ color: "#6b7a8f", fontSize: 12 }}>
                Let's get started
              </Typography>
            </Box>
          </Box>
          <IconButton
            onClick={onClose}
            sx={{
              color: "#6b7a8f",
              bgcolor: "#f5f7fa",
              "&:hover": {
                backgroundColor: "#e8ecf1",
              },
              width: 36,
              height: 36,
            }}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </DialogTitle>

        <Divider sx={{ borderColor: "#f0f2f5" }} />

        {/* Content */}
        <DialogContent sx={{ p: { xs: 3, sm: 4 }, bgcolor: "#ffffff" }}>
          <Box component="form" onSubmit={handleSubmit} noValidate>
            <Stack spacing={3}>
              {/* Description */}
              <Typography
                variant="body2"
                sx={{
                  color: "#6b7a8f",
                  fontSize: 14,
                  lineHeight: 1.6,
                  bgcolor: "#f8faff",
                  p: 2,
                  borderRadius: 2,
                  border: "1px solid #eef2f7",
                }}
              >
                Fill in the details below and our team will reach out to schedule your personalized demo.
              </Typography>

              {/* Full Name */}
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
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon sx={{ color: PRIMARY_COLOR, fontSize: 20 }} />
                    </InputAdornment>
                  ),
                  sx: {
                    borderRadius: 2.5,
                    bgcolor: "#fafbfc",
                    "&:hover": {
                      bgcolor: "#ffffff",
                    },
                  },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: PRIMARY_COLOR,
                      borderWidth: 2,
                    },
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: PRIMARY_COLOR,
                  },
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
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon sx={{ color: PRIMARY_COLOR, fontSize: 20 }} />
                    </InputAdornment>
                  ),
                  sx: {
                    borderRadius: 2.5,
                    bgcolor: "#fafbfc",
                    "&:hover": {
                      bgcolor: "#ffffff",
                    },
                  },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: PRIMARY_COLOR,
                      borderWidth: 2,
                    },
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: PRIMARY_COLOR,
                  },
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
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PhoneIcon sx={{ color: PRIMARY_COLOR, fontSize: 20 }} />
                    </InputAdornment>
                  ),
                  sx: {
                    borderRadius: 2.5,
                    bgcolor: "#fafbfc",
                    "&:hover": {
                      bgcolor: "#ffffff",
                    },
                  },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: PRIMARY_COLOR,
                      borderWidth: 2,
                    },
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: PRIMARY_COLOR,
                  },
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
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start" sx={{ alignSelf: "flex-start", mt: 1.5 }}>
                      <MessageIcon sx={{ color: PRIMARY_COLOR, fontSize: 20 }} />
                    </InputAdornment>
                  ),
                  sx: {
                    borderRadius: 2.5,
                    bgcolor: "#fafbfc",
                    "&:hover": {
                      bgcolor: "#ffffff",
                    },
                  },
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "&.Mui-focused fieldset": {
                      borderColor: PRIMARY_COLOR,
                      borderWidth: 2,
                    },
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: PRIMARY_COLOR,
                  },
                }}
              />

              {/* Submit Button */}
              <Button
                type="submit"
                variant="contained"
                fullWidth
                disabled={loading}
                startIcon={loading ? <CircularProgress size={20} color="inherit" /> : <SendIcon />}
                sx={{
                  mt: 1,
                  textTransform: "none",
                  fontWeight: 700,
                  py: 1.8,
                  borderRadius: 999,
                  fontSize: 16,
                  bgcolor: PRIMARY_COLOR,
                  boxShadow: "0 8px 24px rgba(27, 77, 255, 0.25)",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    bgcolor: "#1540cc",
                    boxShadow: "0 12px 32px rgba(27, 77, 255, 0.35)",
                    transform: "translateY(-2px)",
                  },
                  "&:active": {
                    transform: "translateY(0)",
                  },
                  "&.Mui-disabled": {
                    bgcolor: "#c5cbd5",
                    boxShadow: "none",
                  },
                }}
              >
                {loading ? "Submitting..." : "Submit Demo Request"}
              </Button>

              {/* Footer note */}
              <Typography
                variant="caption"
                sx={{
                  textAlign: "center",
                  color: "#8a9bb5",
                  fontSize: 12,
                  mt: 0.5,
                }}
              >
                By submitting, you agree to our{" "}
                <Box
                  component="span"
                  sx={{
                    color: PRIMARY_COLOR,
                    cursor: "pointer",
                    fontWeight: 600,
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
                    fontWeight: 600,
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  Terms of Service
                </Box>
              </Typography>

              {/* Trust indicator */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: 3,
                  mt: 1,
                  pt: 2,
                  borderTop: "1px solid #f0f2f5",
                }}
              >
                <Typography variant="caption" sx={{ color: "#8a9bb5", display: "flex", alignItems: "center", gap: 0.5 }}>
                  🔒 Secure
                </Typography>
                <Typography variant="caption" sx={{ color: "#8a9bb5", display: "flex", alignItems: "center", gap: 0.5 }}>
                  ⚡ 24/7 Support
                </Typography>
                <Typography variant="caption" sx={{ color: "#8a9bb5", display: "flex", alignItems: "center", gap: 0.5 }}>
                  ✅ No Spam
                </Typography>
              </Box>
            </Stack>
          </Box>
        </DialogContent>
      </Dialog>

      {/* Snackbar */}
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
            borderRadius: 2.5,
            boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
            "& .MuiAlert-icon": {
              fontSize: 24,
            },
          }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
}