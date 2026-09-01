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
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import VerifiedIcon from "@mui/icons-material/Verified";

export default function RequestDemoModal({ open, onClose }) {
  // Form state
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
    verificationCode: "",
  });

  // UI state
  const [loading, setLoading] = useState(false);
  const [verificationLoading, setVerificationLoading] = useState(false);
  const [isVerified, setIsVerified] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear errors when user types
    if (error) setError("");
  };

  // Validate email format
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  // Send verification code
  const handleSendVerification = async () => {
    // Validate email first
    if (!formData.email) {
      setSnackbar({
        open: true,
        message: "Please enter your email address first",
        severity: "error",
      });
      return;
    }

    if (!validateEmail(formData.email)) {
      setSnackbar({
        open: true,
        message: "Please enter a valid email address",
        severity: "error",
      });
      return;
    }

    setVerificationLoading(true);
    setError("");

    try {
      const response = await fetch(`https://vitalchairapi.bluai.ai/api/vitalchair-admin/demo`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          name: formData.fullName || "User",
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsVerified(true);
        setSnackbar({
          open: true,
          message: "Verification code sent to your email!",
          severity: "success",
        });
      } else {
        throw new Error(data.message || "Failed to send verification code");
      }
    } catch (error) {
      console.error("Verification error:", error);
      setSnackbar({
        open: true,
        message: error.message || "Failed to send verification code",
        severity: "error",
      });
    } finally {
      setVerificationLoading(false);
    }
  };

  // Handle form submission (Send Demo Request)
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate required fields
    if (!formData.fullName) {
      setSnackbar({
        open: true,
        message: "Please enter your full name",
        severity: "error",
      });
      return;
    }

    if (!formData.email || !validateEmail(formData.email)) {
      setSnackbar({
        open: true,
        message: "Please enter a valid email address",
        severity: "error",
      });
      return;
    }

    if (!formData.phone) {
      setSnackbar({
        open: true,
        message: "Please enter your phone number",
        severity: "error",
      });
      return;
    }

    if (!isVerified) {
      setSnackbar({
        open: true,
        message: "Please verify your email first",
        severity: "warning",
      });
      return;
    }

    setLoading(true);
    setError("");

    try {
      // Send demo request to your backend
      const response = await fetch(`https://vitalchairapi.bluai.ai/api/vitalchair-admin/demo`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json", // Add accept header
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          message: formData.message || "No message provided",
        }),
      });

      // Check if response is OK before parsing JSON
      if (!response.ok) {
        let errorMessage = "Failed to submit demo request";
        try {
          const errorData = await response.json();
          errorMessage = errorData.message || errorMessage;
        } catch (e) {
          // If response isn't JSON, get text
          const text = await response.text();
          errorMessage = text || errorMessage;
        }
        throw new Error(errorMessage);
      }

      const data = await response.json();

      setSuccess("Demo request submitted successfully!");
      setSnackbar({
        open: true,
        message: "Demo request submitted! We'll contact you soon.",
        severity: "success",
      });

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        message: "",
        verificationCode: "",
      });
      setIsVerified(false);

      // Close modal after delay
      setTimeout(() => {
        onClose();
        setSuccess("");
      }, 3000);

    } catch (error) {
      console.error("Error submitting demo request:", error);

      // More specific error messages
      let errorMessage = error.message || "Failed to submit demo request";

      if (error.message === "Failed to fetch") {
        errorMessage = "Unable to connect to the server. Please check your internet connection and try again.";
      }

      setSnackbar({
        open: true,
        message: errorMessage,
        severity: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  // Handle snackbar close
  const handleSnackbarClose = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={onClose}
        fullWidth
        maxWidth="sm"
        PaperProps={{
          sx: {
            borderRadius: 4,
            overflow: "hidden",
          },
        }}
      >
        {/* HEADER */}
        <DialogTitle
          sx={{
            px: 3,
            py: 2.2,
            fontWeight: 800,
            color: "#0b1c3d",
            fontSize: 20,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#fff",
          }}
        >
          Request Demo
          <IconButton onClick={onClose} sx={{ color: "#1f2a56" }}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <Divider />

        {/* BODY */}
        <DialogContent sx={{ p: { xs: 2.5, sm: 3 } }}>
          {error && (
            <Alert severity="error" sx={{ mb: 2, borderRadius: 2 }}>
              {error}
            </Alert>
          )}

          {success && (
            <Alert severity="success" sx={{ mb: 2, borderRadius: 2 }}>
              {success}
            </Alert>
          )}

          <Box component="form" onSubmit={handleSubmit}>
            <Stack spacing={2.5}>
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
                  sx: { borderRadius: 2.5 },
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
                disabled={loading || verificationLoading}
                InputProps={{
                  sx: { borderRadius: 2.5 },
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
                  sx: { borderRadius: 2.5 },
                }}
              />

              {/* Send Verification Code Button */}
              {/* <Box sx={{ display: "flex", justifyContent: "flex-start", alignItems: "center", gap: 2 }}>
                <Button
                  variant="outlined"
                  onClick={handleSendVerification}
                  disabled={verificationLoading || loading || isVerified}
                  startIcon={isVerified ? <VerifiedIcon /> : null}
                  sx={{
                    textTransform: "none",
                    fontWeight: 700,
                    borderRadius: 2,
                    px: 2.2,
                    py: 1,
                    borderColor: isVerified ? "#4caf50" : "#1b4dff",
                    color: isVerified ? "#4caf50" : "#1b4dff",
                    "&:hover": {
                      borderColor: isVerified ? "#4caf50" : "#2f46ff",
                      backgroundColor: isVerified
                        ? "rgba(76, 175, 80, 0.06)"
                        : "rgba(65,84,241,0.06)",
                    },
                  }}
                >
                  {verificationLoading ? (
                    <CircularProgress size={24} />
                  ) : isVerified ? (
                    "Verified ✓"
                  ) : (
                    "Send Verification Code"
                  )}
                </Button>
                {isVerified && (
                  <Box sx={{ color: "#4caf50", fontSize: 14, fontWeight: 600 }}>
                    Email verified ✓
                  </Box>
                )}
              </Box> */}

              {/* Message */}
              <TextField
                fullWidth
                name="message"
                label="Message (Optional)"
                placeholder="Tell us about your project or requirements..."
                multiline
                minRows={4}
                variant="outlined"
                value={formData.message}
                onChange={handleChange}
                disabled={loading}
                InputProps={{
                  sx: { borderRadius: 2.5 },
                }}
              />

              {/* Submit Button */}
              <Button
                type="submit"
                variant="contained"
                fullWidth
                // disabled={loading || !isVerified}
                startIcon={loading ? <CircularProgress size={20} color="inherit" /> : <SendIcon />}
                sx={{
                  mt: 1,
                  textTransform: "none",
                  fontWeight: 800,
                  py: 1.5,
                  borderRadius: 999,
                  fontSize: 16,
                  backgroundColor: true ? "#6c7bff" : "#b0b0b0",
                  boxShadow: "none",
                  "&:hover": {
                    backgroundColor: true ? "#1b4dff" : "#b0b0b0",
                  },
                }}
              >
                {loading ? "Submitting..." : "Submit Demo Request"}
              </Button>
            </Stack>
          </Box>
        </DialogContent>
      </Dialog>

      {/* Snackbar for notifications */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
}