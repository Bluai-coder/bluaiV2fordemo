"use client";

import { useRouter } from "next/navigation";
import { Box, Button, Container, Stack, Typography } from "@mui/material";

export default function NotFound() {
  const router = useRouter();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#F7F9FF",
      }}
    >
      <Container maxWidth="sm">
        <Box
          sx={{
            p: { xs: 4, md: 6 },
            textAlign: "center",
            borderRadius: 4,
            bgcolor: "#fff",
            border: "1px solid rgba(227,232,255,0.9)",
            boxShadow: "0 35px 90px rgba(15,23,42,0.12)",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: 60, md: 88 },
              fontWeight: 900,
              color: "#1B4DFF",
              lineHeight: 1,
            }}
          >
            404
          </Typography>

          <Typography sx={{ mt: 2, fontSize: 26, fontWeight: 900, color: "#07122C" }}>
            Page Not Found
          </Typography>

          <Typography
            sx={{
              mt: 1,
              color: "rgba(7,18,44,0.65)",
              fontSize: 14.5,
              lineHeight: 1.8,
            }}
          >
            The page you are looking for doesn’t exist or has been moved.
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            justifyContent="center"
            sx={{ mt: 4 }}
          >
            <Button
              variant="contained"
              onClick={() => router.push("/")}
              sx={{
                textTransform: "none",
                fontWeight: 800,
                px: 4,
                py: 1.3,
                borderRadius: 999,
                bgcolor: "#1B4DFF",
                "&:hover": { bgcolor: "#163FE0" },
              }}
            >
              Go Home
            </Button>

            <Button
              variant="outlined"
              onClick={() => router.push("/contact")}
              sx={{
                textTransform: "none",
                fontWeight: 800,
                px: 4,
                py: 1.3,
                borderRadius: 999,
                borderColor: "rgba(27,77,255,0.35)",
                color: "#1B4DFF",
                "&:hover": { borderColor: "#1B4DFF" },
              }}
            >
              Contact Support
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
