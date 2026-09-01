// "use client";

// import * as React from "react";
// import {
//   Box,
//   Typography,
//   IconButton,
//   Stack,
//   Container,
// } from "@mui/material";
// import Image from "next/image";

// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";


// const partners = [
//   { id: 1, name: "MSME", logo: "/partners/msms.png", des: "" },
//   { id: 2, name: "DPIIT", logo: "/partners/dpit.png", des: "" },
//   { id: 3, name: "Azure", logo: "/partners/Azure.png", des: "" },
//   { id: 4, name: "NXP", logo: "/partners/nxp.png", des: "" },
//   { id: 5, name: "Texas Instruments", logo: "/partners/Texas.png", des: "" },
// ];

// /* ---------- SETTINGS -------------- */

// const AUTO_SLIDE_DELAY = 3000;

// /* ---------- COMPONENT ------------ */

// export default function PartnerSlider() {
//   const [index, setIndex] = React.useState(0);
//   const intervalRef = React.useRef(null);

//   const total = partners.length;



//   const startAutoSlide = () => {
//     stopAutoSlide();
//     intervalRef.current = setInterval(() => {
//       setIndex((prev) => (prev + 1) % total);
//     }, AUTO_SLIDE_DELAY);
//   };

//   const stopAutoSlide = () => {
//     if (intervalRef.current) clearInterval(intervalRef.current);
//   };
//   /* Auto Slide */
//   React.useEffect(() => {
//     startAutoSlide();
//     return stopAutoSlide;
//   }, [index]);

//   const prev = () => setIndex((i) => (i - 1 + total) % total);
//   const next = () => setIndex((i) => (i + 1) % total);




//   return (
//     <Box 
//     // py={{ xs: 6, md: 10 }}
//     //  mt={5} 
//      bgcolor="#fff">
//       <Container maxWidth="lg">

//         <Stack spacing={2} alignItems="center" textAlign="center" mb={{ xs: 4, md: 6 }}>

//           <Box
//             sx={{
//               display: "inline-flex",
//               alignItems: "center",
//               gap: 1,
//               px: 2,
//               py: 0.9,
//               borderRadius: 99,
//               bgcolor: "rgba(27,77,255,0.10)",
//               border: "1px solid rgba(27,77,255,0.18)",
//             }}
//           >
//             <Typography
//               sx={{
//                 fontWeight: 900,
//                 fontSize: 12,
//                 letterSpacing: "0.12em",
//                 textTransform: "uppercase",
//                 color: "#1B4DFF",
//               }}
//             >
//               OUR PARTNER NETWORK

//             </Typography>
//           </Box>

//           <Typography
//             variant="h4"
//             sx={{
//               textAlign: "center",
//               fontWeight: 800,
//               fontSize: { xs: 24, sm: 28, md: 32 },
//               color: "#0f172a",
//               mb: { xs: 4, md: 5 },
//             }}
//           >
//             <Box component="span" className="!text-[#1f2a56]" color="text.primary">

//               Expanding Possibilities Through {" "}
//             </Box>
//             <Box component="span" className="!text-[#1b4dff]" color="primary.main">
//               Trusted Alliances
//             </Box>
//           </Typography>
//         </Stack>


//         {/* SLIDER */}
//         <Box
//           onMouseEnter={stopAutoSlide}
//           onMouseLeave={startAutoSlide}
//           sx={{
//             position: "relative",
//             overflow: "hidden",
//           }}
//         >
//           {/* Track */}
//           <Box
//             sx={{
//               display: "flex",
//               transition: "transform 0.6s ease",
//               transform: `translateX(-${index * 220}px)`,
//             }}
//           >
//             {[...partners, ...partners].map((item, i) => (
//               <Box
//                 key={i}
//                 sx={{
//                   minWidth: 220,
//                   height: 130,
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   opacity: 1,
//                   transition: "0.3s",
//                 }}
//               >


//                 <Image
//                   src={item.logo}
//                   alt={item.name}
//                   width={160}
//                   height={60}
//                   style={{ objectFit: "contain" }}
//                 />
//               </Box>
//             ))}
//           </Box>

//           {/* ARROWS */}
//           <IconButton
//             onClick={prev}
//             sx={{
//               position: "absolute",
//               left: 0,
//               top: "50%",
//               transform: "translateY(-50%)",
//               bgcolor: "#fff",
//               boxShadow: 2,
//             }}
//           >
//             <ChevronLeftIcon />
//           </IconButton>

//           <IconButton
//             onClick={next}
//             sx={{
//               position: "absolute",
//               right: 0,
//               top: "50%",
//               transform: "translateY(-50%)",
//               bgcolor: "#fff",
//               boxShadow: 2,
//             }}
//           >
//             <ChevronRightIcon />
//           </IconButton>
//         </Box>

//         {/* DOTS */}
//         <Stack direction="row" justifyContent="center" spacing={1} mt={4}>
//           {partners.map((_, i) => (
//             <Box
//               key={i}
//               onClick={() => setIndex(i)}
//               sx={{
//                 width: 10,
//                 height: 10,
//                 borderRadius: "50%",
//                 cursor: "pointer",
//                 bgcolor: i === index ? "#6c4cf1" : "#ddd",
//                 transition: "0.3s",
//               }}
//             />
//           ))}
//         </Stack>
//       </Container>
      
//     </Box>
//   );
// }
"use client";

import * as React from "react";
import {
  Box,
  Typography,
  Stack,
  Container,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import { keyframes } from "@mui/system";

const partners = [
  { id: 1, name: "MSME", logo: "/partners/msms.png", des: "" },
  { id: 2, name: "DPIIT", logo: "/partners/dpit.png", des: "" },
  { id: 3, name: "Azure", logo: "/partners/Azure.png", des: "" },
  { id: 4, name: "NXP", logo: "/partners/nxp.png", des: "" },
  { id: 5, name: "Texas Instruments", logo: "/partners/Texas.png", des: "" },
];

const marquee = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

export default function PartnerSlider() {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));
  const isSm = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const [isPaused, setIsPaused] = React.useState(false);

  const itemWidth = isXs ? 160 : isSm ? 190 : 220;
  const itemHeight = isXs ? 110 : 128;
  const logoW = isXs ? 105 : isSm ? 125 : 145;
  const logoH = isXs ? 42 : isSm ? 50 : 56;
  const gap = isXs ? 16 : isSm ? 20 : 24;

  const loopPartners = [...partners, ...partners];

  return (
    <Box
      sx={{
        bgcolor: "#fff",
        py: { xs: 6, sm: 7, md: 10 },
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Soft background accent */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(27,77,255,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Stack
          spacing={1.5}
          alignItems="center"
          textAlign="center"
          mb={{ xs: 4.5, sm: 5.5, md: 7 }}
        >


          <Typography
            sx={{
              fontWeight: 800,
              fontSize: { xs: 22, sm: 26, md: 34 },
              lineHeight: 1.25,
              color: "#0f172a",
              maxWidth: 780,
              px: { xs: 1, sm: 0 },
            }}
          >
            <Box component="span" color="text.primary">
              EXPANDING POSSIBILITIES THROUGH {" "}
            </Box>
            <Box component="span" sx={{ color: "#1b4dff" }}>
              TRUSTED ALLIANCES
            </Box>
          </Typography>
        </Stack>
      </Container>

      {/* Marquee */}
      <Box
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
        sx={{
          position: "relative",
          width: "100%",
          overflow: "hidden",
          py: 1.5,
          maskImage:
            "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "max-content",
            gap: `${gap}px`,
            animation: `${marquee} ${isXs ? 24 : 32}s linear infinite`,
            animationPlayState: isPaused ? "paused" : "running",
            willChange: "transform",
          }}
        >
          {loopPartners.map((item, i) => (
            <Box
              key={`${item.id}-${i}`}
              sx={{
                width: itemWidth,
                height: itemHeight,
                flexShrink: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 1,
                px: 2,
                bgcolor: "#f8fafc",
                borderRadius: { xs: "21px", md: "21px" },
                border: "1px solid rgba(15, 23, 42, 0.06)",
                boxShadow: "0 2px 8px rgba(15, 23, 42, 0.03)",
                transition: "all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)",
                cursor: "default",
                position: "relative",
                overflow: "hidden",

                // Default grayscale logo
                "& img": {
                  filter: "grayscale(100%)",
                  opacity: 0.6,
                  transition: "all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)",
                  transform: "scale(1)",
                },

                // Name label (hidden by default)
                "& .partner-name": {
                  opacity: 0,
                  transform: "translateY(6px)",
                  transition: "all 0.35s ease",
                },

                // Hover → real color + lift
                "&:hover": {
                  bgcolor: "#ffffff",
                  borderColor: "rgba(27, 77, 255, 0.25)",
                  boxShadow:
                    "0 12px 32px rgba(27, 77, 255, 0.14), 0 0 0 1px rgba(27, 77, 255, 0.08)",
                  transform: "translateY(-6px)",

                  "& img": {
                    filter: "grayscale(0%)",
                    opacity: 1,
                    transform: "scale(1.08)",
                  },

                  "& .partner-name": {
                    opacity: 1,
                    transform: "translateY(0)",
                  },

                  // Soft blue glow at bottom
                  "&::after": {
                    opacity: 1,
                  },
                },

                // Bottom accent glow
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: 0,
                  left: "15%",
                  right: "15%",
                  height: 3,
                  borderRadius: "3px 3px 0 0",
                  background: "linear-gradient(90deg, transparent, #1b4dff, transparent)",
                  opacity: 0,
                  transition: "opacity 0.4s ease",
                },
              }}
            >
              <Image
                src={item.logo}
                alt={item.name}
                width={logoW}
                height={logoH}
                style={{
                  objectFit: "contain",
                  maxWidth: "78%",
                }}
              />

              {/* Partner name on hover */}
              <Typography
                className="partner-name"
                sx={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: "#1b4dff",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  lineHeight: 1,
                  mt: 0.25,
                }}
              >
                {item.name}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}