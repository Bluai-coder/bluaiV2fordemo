"use client";

import React, { useState } from "react";
import {
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  TextField,
  Typography,
  Button,
  Stack,
  Divider,
  Checkbox,
  FormControlLabel,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import { Verified } from "@mui/icons-material";

export default function BluNotesRequestDemoModal({ open, onClose }) {
  const [verified, setVerified] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Request demo submitted");
    onClose?.();
  };

  const inputSx = {
    borderRadius: 2,
    bgcolor: "#fff",
    "& input": { fontSize: 14 },
    "& textarea": { fontSize: 14 },
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
      PaperProps={{
        sx: {
          borderRadius: 2,
          overflow: "hidden",
          boxShadow: "0 25px 80px rgba(15,23,42,0.25)",
        },
      }}
    >
      {/* HEADER */}
      <DialogTitle
        sx={{
          px: 3,
          py: 2,
          fontWeight: 600,
          color: "#0b1c3d",
          fontSize: 18,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          bgcolor: "#fff",
        }}
      >
        Request Demo

        <IconButton onClick={onClose} sx={{ color: "#111827" }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <Divider />

      {/* BODY */}
      <DialogContent sx={{ p: 3, bgcolor: "#fff" }}>
        <Box component="form" onSubmit={handleSubmit}>
          <Stack spacing={2}>
            {/* Full name */}
            <TextField
              fullWidth
              placeholder="Full name"
              variant="outlined"
              InputProps={{ sx: inputSx }}
            />

            {/* Email */}
            <TextField
              fullWidth
              placeholder="Email address"
              variant="outlined"
              InputProps={{ sx: inputSx }}
            />

            {/* Phone */}
            <TextField
              fullWidth
              placeholder="Phone number"
              variant="outlined"
              InputProps={{ sx: inputSx }}
            />

            {/*  Verification Row (same like screenshot) */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 2,
              }}
            >
              {/* Send Verification Code */}
              <Button
                variant="outlined"
                sx={{
                  textTransform: "none",
                  fontWeight: 500,
                  borderRadius: 1.5,
                  px: 2,
                  py: 1,
                  borderColor: "#2f46ff",
                  color: "#2f46ff",
                  minWidth: 210,
                  "&:hover": {
                    borderColor: "#1b4dff",
                    bgcolor: "rgba(47,70,255,0.06)",
                  },
                }}
              >
                Send Verification Code
              </Button>

              {/* Verified */}
              {/* <FormControlLabel
                sx={{
                  m: 0,
                  flexShrink: 0,
                  "& .MuiTypography-root": {
                    fontSize: 13,
                    color: "#111827",
                  },
                }}
                control={
                  <Checkbox
                    checked={verified}
                    onChange={(e) => setVerified(e.target.checked)}
                    size="small"
                    sx={{
                      color: "#9ca3af",
                      "&.Mui-checked": { color: "#16a34a" },
                    }}
                  />
                }
                label="Verified"
              /> */}
              <Box className="">

              <Verified/> Verified
              </Box>

              {/* Resend code */}
              <Typography
                sx={{
                  fontSize: 13,
                  color: "#2f46ff",
                  cursor: "pointer",
                  userSelect: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
                onClick={() => console.log("Resend code")}
              >
                Resend code
              </Typography>
            </Box>

            {/* Verification code input */}
            <TextField
              fullWidth
              placeholder="Verification Code"
              variant="outlined"
              InputProps={{ sx: inputSx }}
            />

            {/*  Verify Code Button (green like screenshot) */}
            <Button
              fullWidth
              variant="contained"
              sx={{
                textTransform: "none",
                fontWeight: 600,
                borderRadius: 1.5,
                py: 1.1,
                bgcolor: "#0b7a4b",
                "&:hover": { bgcolor: "#0a6a41" },
              }}
            >
              Verify Code
            </Button>

            {/* Message */}
            <TextField
              fullWidth
              placeholder="Message"
              multiline
              minRows={4}
              variant="outlined"
              InputProps={{ sx: inputSx }}
            />

            {/* Submit */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 0.5,
                textTransform: "none",
                fontWeight: 700,
                py: 1.3,
                borderRadius: 999,
                fontSize: 15,
                bgcolor: "#3f5cff",
                boxShadow: "none",
                "&:hover": {
                  bgcolor: "#2f46ff",
                },
              }}
            >
              Submit
            </Button>
          </Stack>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
