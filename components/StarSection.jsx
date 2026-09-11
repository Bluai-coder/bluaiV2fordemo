"use client";

import React from "react";
import { Box, Container, Paper, Stack, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import StarIcon from "@mui/icons-material/Star";
import GroupsIcon from "@mui/icons-material/Groups";

const stats = [
  {
    icon: <PersonIcon sx={{ fontSize: 22 }} />,
    value: "800+",
    label: "Moves in the past year",
    tone: "blue",
  },
  {
    icon: <StarIcon sx={{ fontSize: 22 }} />,
    value: "4.8 / 5",
    label: "Customer satisfaction rate",
    tone: "gold",
  },
  {
    icon: <GroupsIcon sx={{ fontSize: 22 }} />,
    value: "800+",
    label: "Professional team members",
    tone: "blue",
  },
];

export default function StatsSectionPremium() {
  return (
    <Box
      sx={{
        position: "relative",
        py: { xs: 0, md: 0 },
        overflow: "hidden",
        bgcolor: "#fff",
      }}
    >
      {/* Premium background */}
      <Box
        sx={{
          position: "absolute",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="xl" sx={{ position: "relative" }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 2.2, md: 3 }}
          alignItems="stretch"
        >
          {stats.map((item, index) => {
            const isGold = item.tone === "gold";

            return (
              <Paper
                key={index}
                elevation={0}
                sx={{
                  flex: 1,
                  borderRadius: 4,
                  border: "1px solid rgba(227,232,255,0.95)",
                  bgcolor: "rgba(255,255,255,0.75)",
                  backdropFilter: "blur(14px)",
                  overflow: "hidden",
                  boxShadow: "0 18px 45px rgba(15,23,42,0.06)",
                  transition: "0.28s ease",
                  "&:hover": {
                    transform: "translateY(-6px)",
                  },
                }}
              >
                {/* Top accent line */}
                <Box
                  sx={{
                    height: 4,
                    width: "100%",
                    background: isGold
                      ? "linear-gradient(90deg, rgba(245,180,0,0.95), rgba(245,180,0,0))"
                      : "linear-gradient(90deg, rgba(27,77,255,0.95), rgba(27,77,255,0))",
                  }}
                />

                <Box
                  sx={{
                    p: { xs: 2.5, md: 3.5 },
                    display: "flex",
                    alignItems: "center",
                    gap: 2.2,
                  }}
                >
                  {/* Premium Icon Container */}
                  <Box
                    sx={{
                      width: 54,
                      height: 54,
                      borderRadius: 3,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      color: isGold ? "#B98200" : "#1B4DFF",
                      bgcolor: isGold
                        ? "rgba(245,180,0,0.14)"
                        : "rgba(27,77,255,0.12)",
                      border: isGold
                        ? "1px solid rgba(245,180,0,0.22)"
                        : "1px solid rgba(27,77,255,0.18)",
                      boxShadow: isGold
                        ? "0 14px 35px rgba(245,180,0,0.12)"
                        : "0 14px 35px rgba(27,77,255,0.12)",
                    }}
                  >
                    {item.icon}
                  </Box>

                  {/* Text */}
                  <Box sx={{ minWidth: 0 }}>
                    <Typography
                      sx={{
                        fontSize: { xs: 22, md: 26 },
                        fontWeight: 950,
                        color: "#07122C",
                        lineHeight: 1.15,
                        letterSpacing: -0.3,
                      }}
                    >
                      {item.value}
                    </Typography>

                    <Typography
                      sx={{
                        mt: 0.6,
                        fontSize: 13.5,
                        color: "rgba(7,18,44,0.62)",
                        lineHeight: 1.5,
                      }}
                    >
                      {item.label}
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            );
          })}
        </Stack>
      </Container>
    </Box>
  );
}
