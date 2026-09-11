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
  Chip,
} from "@mui/material";
import Image from "next/image";
import { keyframes } from "@mui/system";

import HealingIcon from "@mui/icons-material/Healing";
import HealthAndSafetyIcon   from "@mui/icons-material/HealthAndSafety";
const medicalPartners = [
  { 
    id: 1, 
    name: "MSME", 
    logo: "/partners/msms.png", 
    des: "Government Initiative",
    category: "Government"
  },
  { 
    id: 2, 
    name: "DPIIT", 
    logo: "/partners/dpit.png", 
    des: "Policy Support",
    category: "Government"
  },
  { 
    id: 3, 
    name: "Microsoft Azure", 
    logo: "/partners/Azure.png", 
    des: "Cloud Healthcare",
    category: "Technology"
  },
  { 
    id: 4, 
    name: "NXP", 
    logo: "/partners/nxp.png", 
    des: "Medical IoT",
    category: "Technology"
  },
  { 
    id: 5, 
    name: "Texas Instruments", 
    logo: "/partners/Texas.png", 
    des: "Healthcare Tech",
    category: "Technology"
  },
];


const marquee = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const pulseGlow = keyframes`
  0%, 100% { opacity: 0.6; }
  50% { opacity: 1; }
`;

export default function PartnerSlider() {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));
  const isSm = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const [isPaused, setIsPaused] = React.useState(false);

  const itemWidth = isXs ? 180 : isSm ? 210 : 240;
  const itemHeight = isXs ? 130 : isSm ? 148 : 160;
  const logoW = isXs ? 115 : isSm ? 135 : 155;
  const logoH = isXs ? 48 : isSm ? 56 : 64;
  const gap = isXs ? 18 : isSm ? 22 : 28;

  const loopPartners = [...medicalPartners, ...medicalPartners];

  return (
    <Box
      sx={{
        bgcolor: "#ffffff",
        py: { xs: 8, sm: 10, md: 14 },
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Medical-themed background accents */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: `
            radial-gradient(ellipse 60% 40% at 0% 50%, rgba(27,77,255,0.03) 0%, transparent 70%),
            radial-gradient(ellipse 60% 40% at 100% 50%, rgba(27,77,255,0.03) 0%, transparent 70%)
          `,
          pointerEvents: "none",
        }}
      />

      {/* Floating medical icons decoration */}
      <Box
        sx={{
          position: "absolute",
          top: "30%",
          left: "5%",
          opacity: 0.06,
          transform: "rotate(-15deg)",
          display: { xs: "none", md: "block" },
        }}
      >
      <HealingIcon sx={{ fontSize: 100, color: "#1b4dff" }} />
      </Box>
      <Box
        sx={{
          position: "absolute",
          bottom: "10%",
          right: "5%",
          opacity: 0.06,
          transform: "rotate(15deg)",
          display: { xs: "none", md: "block" },
        }}
      >
        <HealthAndSafetyIcon   sx={{ fontSize: 120, color: "#1b4dff" }} />
      </Box>

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Stack
          spacing={1.5}
          alignItems="center"
          textAlign="center"
          mb={{ xs: 5, sm: 6, md: 8 }}
        >
        

          <Typography
            sx={{
              fontWeight: 800,
              fontSize: { xs: 24, sm: 28, md: "2.8rem" },
              lineHeight: 1.2,
              color: "#0a1628",
              maxWidth: 780,
              px: { xs: 1, sm: 0 },
            }}
          >
            <Box component="span" sx={{ color: "#0a1628" }}>
              Expanding Possibilities Through{" "}
            </Box>
            <Box
              component="span"
              sx={{
                color: "#1b4dff",
                position: "relative",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: -4,
                  left: 0,
                  right: 0,
                  height: 3,
                  borderRadius: 999,
                  background: "linear-gradient(90deg, #1b4dff, #4a7aff)",
                  animation: `${pulseGlow} 2s ease-in-out infinite`,
                },
              }}
            >
              Trusted Alliances
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
          py: 2.5,
          maskImage:
            "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "max-content",
            gap: `${gap}px`,
            animation: `${marquee} ${isXs ? 28 : 36}s linear infinite`,
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
                gap: 0.5,
                px: 2.5,
                bgcolor: "#fafcff",
                borderRadius: { xs: 3, md: 3 },
                border: "1px solid rgba(27,77,255,0.06)",
                boxShadow: "0 2px 12px rgba(27,77,255,0.04)",
                transition: "all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)",
                cursor: "default",
                position: "relative",
                overflow: "hidden",

                // Medical cross accent
                "&::before": {
                  content: '"+ "',
                  position: "absolute",
                  top: -8,
                  right: -8,
                  fontSize: 48,
                  fontWeight: 300,
                  color: "rgba(27,77,255,0.04)",
                  fontFamily: "serif",
                },

                // Default grayscale logo
                "& img": {
                  filter: "grayscale(100%)",
                  opacity: 0.5,
                  transition: "all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)",
                  transform: "scale(1)",
                },

                // Partner name (hidden by default)
                "& .partner-name": {
                  opacity: 0,
                  transform: "translateY(4px)",
                  transition: "all 0.35s ease",
                },

                "& .partner-des": {
                  opacity: 0,
                  transform: "translateY(4px)",
                  transition: "all 0.35s ease 0.05s",
                },

                // Hover → real color + lift
                "&:hover": {
                  bgcolor: "#ffffff",
                  borderColor: "rgba(27,77,255,0.2)",
                  boxShadow:
                    "0 16px 40px rgba(27,77,255,0.12), 0 0 0 1px rgba(27,77,255,0.06)",
                  transform: "translateY(-8px)",

                  "&::before": {
                    color: "rgba(27,77,255,0.08)",
                  },

                  "& img": {
                    filter: "grayscale(0%)",
                    opacity: 1,
                    transform: "scale(1.06)",
                  },

                  "& .partner-name": {
                    opacity: 1,
                    transform: "translateY(0)",
                  },

                  "& .partner-des": {
                    opacity: 1,
                    transform: "translateY(0)",
                  },

                  // Bottom accent glow
                  "&::after": {
                    opacity: 1,
                    transform: "scaleX(1)",
                  },
                },

                // Bottom accent bar
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: 0,
                  left: "20%",
                  right: "20%",
                  height: 3,
                  borderRadius: "3px 3px 0 0",
                  background: "linear-gradient(90deg, transparent, #1b4dff, transparent)",
                  opacity: 0,
                  transform: "scaleX(0.5)",
                  transition: "all 0.4s ease",
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
                  maxWidth: "80%",
                }}
              />

              {/* Partner name on hover */}
              <Typography
                className="partner-name"
                sx={{
                  fontSize: 12,
                  fontWeight: 700,
                  color: "#0a1628",
                  letterSpacing: "0.03em",
                  lineHeight: 1.2,
                  mt: 0.5,
                }}
              >
                {item.name}
              </Typography>

              {/* Partner description */}
              <Typography
                className="partner-des"
                sx={{
                  fontSize: 10,
                  fontWeight: 500,
                  color: "#4a6a8a",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  lineHeight: 1,
                }}
              >
                {item.des}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

  
    </Box>
  );
}