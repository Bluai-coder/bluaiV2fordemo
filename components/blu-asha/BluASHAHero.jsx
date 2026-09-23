// "use client";

// import React, { useMemo, useState } from "react";
// import { Box, Button, Container, Stack, Typography, IconButton } from "@mui/material";
// import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
// import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
// import Image from "next/image";

// const slides = [
//   {
//     id: 1,
//     badge: "Welcome To BluASHA™",
//     title: "Empowering Rural Health, One Step at a Time",
//     subtitle:
//       "Enabling Communities with Technology-Driven Care and Dedicated Health Workers...",
//     image: "/blu-asha/hero-asha-2.png",
//   },
//   {
//     id: 2,
//     badge: "Welcome To BluASHA™",
//     title: "Digital Health Management Portal",
//     subtitle:
//       "Empowering ASHA Workers, Transforming Rural Healthcare, Building Healthier Communities...",
//     image: "/blu-asha/hero-asha-1.png",
//   },

// ];


// export default function BluASHAHero() {
//   const [index, setIndex] = useState(0);

//   const active = useMemo(() => slides[index], [index]);

//   const handlePrev = () => {
//     setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
//   };

//   const handleNext = () => {
//     setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
//   };

//   return (
//     <Box
//       sx={{
//         width: "100%",
//         bgcolor: "#2F4AA0", //  main hero blue like screenshot
//         position: "relative",
//         overflow: "hidden",
//         py: { xs: 7, md: 10 },
//       }}
//     >
//       {/*  subtle premium overlay */}
//       <Box
//         sx={{
//           position: "absolute",
//           inset: 0,
//           background:
//             "radial-gradient(900px 520px at 15% 40%, rgba(255,255,255,0.10), transparent 60%), radial-gradient(900px 520px at 85% 30%, rgba(0,0,0,0.12), transparent 60%)",
//           pointerEvents: "none",
//         }}
//       />

//       <Container maxWidth="xl" sx={{ position: "relative" }}>
//         <Stack
//           direction={{ xs: "column", md: "row" }}
//           spacing={{ xs: 6, md: 8 }}
//           alignItems="center"
//           justifyContent="space-between"
//         >
//           {/*  LEFT IMAGE */}
//           <Box
//             sx={{
//               flex: 1,
//               width: "100%",
//               display: "flex",
//               justifyContent: { xs: "center", md: "flex-start" },
//             }}
//           >
//             <Box
//               sx={{
//                 width: "100%",
//                 maxWidth: 520,
//                 position: "relative",
//               }}
//             >
//               <Image
//                 src={active.image}
//                 alt="BluASHA Hero"
//                 width={520}
//                 height={420}
//                 style={{
//                   width: "100%",
//                   height: "auto",
//                   display: "block",
//                 }}
//                 priority
//               />
//             </Box>
//           </Box>

//           {/*  RIGHT CONTENT */}
//           <Box
//             sx={{
//               flex: 1.15,
//               width: "100%",
//               textAlign: { xs: "center", md: "right" },
//             }}
//           >
//             <Typography
//               sx={{
//                 fontSize: { xs: 14, md: 18 },
//                 fontWeight: 800,
//                 color: "rgba(255,255,255,0.92)",
//                 letterSpacing: 0.3,
//                 mb: 1.2,
//               }}
//             >
//               {active.badge}
//             </Typography>

//             <Typography
//               sx={{
//                 fontWeight: 950,
//                 color: "#fff",
//                 fontSize: { xs: "2.0rem", sm: "2.7rem", md: "3.8rem" },
//                 lineHeight: 1.1,
//                 letterSpacing: -0.8,
//                 maxWidth: 650,
//                 ml: "auto",
//               }}
//             >
//               {active.title}
//             </Typography>

//             <Typography
//               sx={{
//                 mt: 2.2,
//                 fontSize: { xs: 13.5, md: 15.5 },
//                 lineHeight: 1.85,
//                 color: "rgba(255,255,255,0.85)",
//                 maxWidth: 600,
//                 ml: "auto",
//               }}
//             >
//               {active.subtitle}
//             </Typography>

//             {/*  Bottom arrow buttons like screenshot */}
//             <Stack
//               direction="row"
//               spacing={2}
//               sx={{
//                 mt: { xs: 4, md: 5 },
//                 justifyContent: { xs: "center", md: "flex-end" },
//               }}
//             >
//               <CircleArrowButton onClick={handlePrev} icon={<ArrowBackRoundedIcon />} />
//               <CircleArrowButton onClick={handleNext} icon={<ArrowForwardRoundedIcon />} />
//             </Stack>
//           </Box>
//         </Stack>
//       </Container>
//     </Box>
//   );
// }

// /* -------------------- Small Component -------------------- */

// function CircleArrowButton({ onClick, icon }) {
//   return (
//     <IconButton
//       onClick={onClick}
//       sx={{
//         width: 54,
//         height: 54,
//         borderRadius: "50%",
//         bgcolor: "rgba(255,255,255,0.95)",
//         color: "#2F4AA0",
//         border: "1px solid rgba(255,255,255,0.22)",
//         boxShadow: "0 18px 45px rgba(0,0,0,0.22)",
//         transition: "all .25s ease",
//         "&:hover": {
//           bgcolor: "#fff",
//           transform: "translateY(-2px)",
//           boxShadow: "0 25px 65px rgba(0,0,0,0.30)",
//         },
//       }}
//     >
//       {icon}
//     </IconButton>
//   );
// }

"use client";

import React, { useMemo, useState } from "react";
import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  IconButton,
} from "@mui/material";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "next/image";

const slides = [
  {
    id: 1,
    badge: "Welcome To BluASHA™",
    title: "Empowering Rural Health, One Step at a Time",
    subtitle:
      "Enabling Communities with Technology-Driven Care and Dedicated Health Workers.",
    image: "/blu-asha/hero-asha-2.png",
  },
  {
    id: 2,
    badge: "Welcome To BluASHA™",
    title: "Digital Health Management Portal",
    subtitle:
      "Empowering ASHA Workers, Transforming Rural Healthcare, Building Healthier Communities.",
    image: "/blu-asha/hero-asha-1.png",
  },
];

export default function BluASHAHero() {
  const [index, setIndex] = useState(0);

  const active = useMemo(() => slides[index], [index]);

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <Box
      sx={{
        position: "relative",
        bgcolor: "#F7F9FF",
        pt: { xs: 7, md: 10 },
        pb: { xs: 6, md: 8 },
        overflow: "hidden",
      }}
    >
      {/* Dotted tech background */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          opacity: 0.35,
          backgroundImage:
            "radial-gradient(rgba(27,77,255,0.22) 0.6px, transparent 0.6px)",
          backgroundSize: "20px 20px",
          pointerEvents: "none",
        }}
      />
      {/* Fade overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(247,249,255,0.8) 0%, rgba(247,249,255,0.95) 55%, rgba(247,249,255,1) 100%)",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1.05fr 1fr" },
            alignItems: "center",
            gap: { xs: 6, md: 8 },
          }}
        >
          {/* ─── LEFT: Text ─── */}
          <Box
            sx={{
              minWidth: 0,
              textAlign: { xs: "center", md: "left" },
              order: { xs: 2, md: 1 },
            }}
          >
            {/* Badge */}
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                px: 2,
                py: 0.8,
                borderRadius: 999,
                bgcolor: "rgba(27,77,255,0.08)",
                border: "1px solid rgba(27,77,255,0.18)",
                mb: 2.5,
              }}
            >
              <Box
                sx={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  bgcolor: "#1B4DFF",
                }}
              />
              <Typography
                sx={{
                  fontSize: { xs: 11, md: 12 },
                  fontWeight: 800,
                  color: "#1B4DFF",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}
              >
                {active.badge}
              </Typography>
            </Box>

            {/* Title */}
            <Typography
              sx={{
                fontWeight: 950,
                color: "#07122C",
                fontSize: { xs: "1.5rem", sm: "2.6rem", md: "3.4rem" },
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                maxWidth: 620,
                mx: { xs: "auto", md: 0 },
              }}
            >
              {active.title}
            </Typography>

            {/* Subtitle */}
            <Typography
              sx={{
                mt: { xs: 2, md: 2.4 },
                fontSize: { xs: 12, md: 16.5 },
                lineHeight: 1.8,
                color: "rgba(7,18,44,0.68)",
                maxWidth: 560,
                mx: { xs: "auto", md: 0 },
              }}
            >
              {active.subtitle}
            </Typography>

            {/* CTA + Arrows row */}
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 1, sm: 3 }}
              alignItems="center"
              justifyContent={{ xs: "center", md: "flex-start" }}
              sx={{ mt: { xs: 1.5, md: 5 } }}
            >
              <Button
                variant="contained"
                endIcon={<ArrowForwardIcon />}
                onClick={() => {
                  document
                    .getElementById("read-more-section")
                    ?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                }}
                sx={{
                  bgcolor: "#1B4DFF",
                  borderRadius: 40,
                  textTransform: "none",
                  fontWeight: 800,
                  px: 3.2,
                  py: 1.3,
                  boxShadow: "0 10px 25px rgba(27,77,255,0.25)",
                  "&:hover": {
                    bgcolor: "#0a3ad0",
                    transform: "translateY(-2px)",
                    boxShadow: "0 14px 30px rgba(27,77,255,0.35)",
                  },
                }}
              >
                Read More
              </Button>

              {/* Arrows */}
              <Stack direction="row" spacing={1.5}>
                <CircleArrowButton
                  onClick={handlePrev}
                  icon={<ArrowBackRoundedIcon />}
                />
                <CircleArrowButton
                  onClick={handleNext}
                  icon={<ArrowForwardRoundedIcon />}
                />
              </Stack>
            </Stack>

            {/* Slide indicator */}
            <Stack
              direction="row"
              spacing={1}
              sx={{
                mt: 4,
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              {slides.map((s, i) => (
                <Box
                  key={s.id}
                  onClick={() => setIndex(i)}
                  sx={{
                    width: i === index ? 28 : 10,
                    height: 6,
                    borderRadius: 999,
                    bgcolor:
                      i === index ? "#1B4DFF" : "rgba(27,77,255,0.25)",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      bgcolor:
                        i === index ? "#1B4DFF" : "rgba(27,77,255,0.45)",
                    },
                  }}
                />
              ))}
            </Stack>
          </Box>

          {/* ─── RIGHT: Image ─── */}
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-end" },
              alignItems: "center",
              width: "100%",
              minWidth: 0,
              order: { xs: 1, md: 2 },
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                maxWidth: { xs: 300, sm: 480, md: 560, lg: 640 },
                aspectRatio: { xs: "4 / 2.8", sm: "16 / 11", md: "16 / 10" },
                mx: "auto",
              }}
            >
              {/* Soft blue glow behind image */}
              <Box
                sx={{
                  position: "absolute",
                  inset: -40,
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle at 50% 50%, rgba(27,77,255,0.18) 0%, transparent 65%)",
                  filter: "blur(30px)",
                  zIndex: 0,
                }}
              />

              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  zIndex: 1,
                }}
              >
                <Image
                  src={active.image}
                  alt="BluASHA Hero"
                  fill
                  sizes="(max-width: 600px) 90vw, (max-width: 900px) 480px, (max-width: 1200px) 560px, 640px"
                  style={{
                    objectFit: "contain",
                    objectPosition: "center",
                  }}
                  priority
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

/* -------------------- Small Component -------------------- */

function CircleArrowButton({ onClick, icon }) {
  return (
    <IconButton
      onClick={onClick}
      sx={{
        width: { xs: 48, md: 54 },
        height: { xs: 48, md: 54 },
        borderRadius: "50%",
        bgcolor: "#fff",
        color: "#1B4DFF",
        border: "1px solid rgba(27,77,255,0.18)",
        boxShadow: "0 12px 30px rgba(27,77,255,0.15)",
        transition: "all 0.25s ease",
        "&:hover": {
          bgcolor: "#fff",
          transform: "translateY(-2px)",
          borderColor: "rgba(27,77,255,0.35)",
          boxShadow: "0 20px 45px rgba(27,77,255,0.25)",
        },
      }}
    >
      {icon}
    </IconButton>
  );
}