"use client";

import { Box, Container, Stack, Typography } from "@mui/material";
import { keyframes } from "@mui/material/styles";

// ✅ Background glow movement
const bgMove = keyframes`
  0%   { background-position: 0% 50%, 100% 50%, 50% 50%; }
  50%  { background-position: 100% 50%, 0% 50%, 50% 50%; }
  100% { background-position: 0% 50%, 100% 50%, 50% 50%; }
`;

// ✅ Floating orbs
const float1 = keyframes`
  0%   { transform: translate(0px, 0px) scale(1); }
  50%  { transform: translate(30px, -18px) scale(1.05); }
  100% { transform: translate(0px, 0px) scale(1); }
`;

const float2 = keyframes`
  0%   { transform: translate(0px, 0px) scale(1); }
  50%  { transform: translate(-24px, 16px) scale(1.08); }
  100% { transform: translate(0px, 0px) scale(1); }
`;

// ✅ Title glow shimmer
const titleGlow = keyframes`
  0%   { text-shadow: 0 0 0 rgba(27,77,255,0); transform: translateY(6px); opacity: 0; }
  100% { text-shadow: 0 10px 40px rgba(27,77,255,0.35); transform: translateY(0px); opacity: 1; }
`;

// ✅ Bottom wave movement
const waveMove = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

export default function CareersHero() {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: { xs: 630, sm: 630, md: 695 },
        display: "flex",
        alignItems: "center",
        overflow: "hidden",

        // ✅ Animated background gradient
        background:
          "radial-gradient(circle at 20% 10%, rgba(146, 149, 173, 0.55) 0%, transparent 45%), radial-gradient(circle at 70% 20%, rgba(65, 84, 241, 0.45) 0%, transparent 45%), linear-gradient(180deg, #07070b 0%, #12121a 100%)",
        backgroundSize: "140% 140%, 140% 140%, 100% 100%",
        animation: `${bgMove} 10s ease-in-out infinite`,
      }}
    >
      {/* ✅ Floating blur orbs */}
      <Box
        sx={{
          position: "absolute",
          top: { xs: "18%", md: "14%" },
          left: { xs: "-40px", md: "60px" },
          width: { xs: 180, md: 260 },
          height: { xs: 180, md: 260 },
          borderRadius: "50%",
          background: "rgba(14, 110, 236, 0.3)",
          filter: "blur(40px)",
          animation: `${float1} 6s ease-in-out infinite`,
          pointerEvents: "none",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          bottom: { xs: "15%", md: "22%" },
          right: { xs: "-50px", md: "90px" },
          width: { xs: 220, md: 320 },
          height: { xs: 220, md: 320 },
          borderRadius: "50%",
          background: "rgba(16, 73, 231, 0.22)",
          filter: "blur(55px)",
          animation: `${float2} 7s ease-in-out infinite`,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <Stack className="!text-center" spacing={1.2}>
          <Typography
            sx={{
              color: "#fff",
              fontWeight: 900,
              fontSize: { xs: 38, sm: 50, md: 64 },
              letterSpacing: "-0.02em",

              // ✅ Smooth entrance + glow
              animation: `${titleGlow} 700ms ease-out forwards`,
            }}
          >
            Careers
          </Typography>

          {/* ✅ Optional subtitle (recommended for corporate feel) */}
          <Typography
            sx={{
              color: "rgba(255,255,255,0.78)",
              maxWidth: 760,
              mx: "auto",
              fontSize: { xs: 14, sm: 16, md: 18 },
              lineHeight: 1.65,
            }}
          >
          
          </Typography>
        </Stack>
      </Container>

      {/* ✅ Animated bottom wave */}
      <Box
        sx={{
          position: "absolute",
          bottom: -1,
          width: "100%",
          overflow: "hidden",
          lineHeight: 0,
          zIndex: 3,
        }}
      >
        <Box
          sx={{
            width: "200%",
            animation: `${waveMove} 8s linear infinite`,
          }}
        >
          <svg
            viewBox="0 0 1000 60"
            preserveAspectRatio="none"
            style={{ width: "100%", height: 60, display: "block" }}
          >
            <path
              d="M0,0 C150,50 350,0 500,40 C650,80 850,20 1000,40 L1000,60 L0,60 Z"
              style={{ fill: "#ffffff" }}
            />
          </svg>
        </Box>
      </Box>
    </Box>
  );
}
