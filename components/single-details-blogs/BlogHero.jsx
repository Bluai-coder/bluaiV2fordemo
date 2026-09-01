"use client";

import { Box, Typography, useMediaQuery } from "@mui/material";
import { useMemo } from "react";
import { getTheme } from "../../theme";

export default function BlogHero({ title, description, subTitle }) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = useMemo(
    () => getTheme(prefersDarkMode ? "dark" : "light"),
    [prefersDarkMode]
  );

  // keep your approach, but FIX the comparison
  const isDark = theme.palette.mode === "dark";

  return (
    <Box textAlign="center" mb={3}>
      {/* TITLE */}
      <Typography
        className="!mb-1"
        gutterBottom
        sx={{
          textAlign: "center",
          fontWeight: 800,
          fontSize: { xs: 24, sm: 28, md: 32 },
          color: `${isDark ? "#ffffff" : "#07122C"} !important`,
          mb: { xs: 4, md: 5 },
        }}
      >
        {title}
      </Typography>

      {/* DESCRIPTION */}
      <Typography
        sx={{
          color: `${isDark ? "#ffffff" : "#07122C"} !important`,
        }}
      >
        {description}
      </Typography>

      {/* SUB TITLE */}
      <Typography
        variant="h5"
        className="!mt-5"
        fontWeight={400}
        sx={{
          color: `${isDark ? "#ffffff" : "#07122C"} !important`,
        }}
      >
        {subTitle}
      </Typography>
    </Box>
  );
}
