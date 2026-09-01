
// "use client";

// import { Box, Container, Typography, Card, CardContent, IconButton, useTheme, useMediaQuery, Button } from "@mui/material";
// import { keyframes, Stack } from "@mui/system";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { useEffect, useState, useRef } from "react";
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import { useSwipeable } from "react-swipeable";
// import RequestDemoModal from "./popups/RequestDemoModal";

// // ==================== ANIMATIONS ====================
// const starsMove1 = keyframes`
//   0% { transform: translate3d(0, 0, 0); }
//   100% { transform: translate3d(0, 220px, 0); }
// `;
// const starsMove2 = keyframes`
//   0% { transform: translate3d(0, 0, 0); }
//   100% { transform: translate3d(0, 300px, 0); }
// `;
// const starsMove3 = keyframes`
//   0% { transform: translate3d(0, 0, 0); }
//   100% { transform: translate3d(0, 260px, 0); }
// `;
// const float = keyframes`
//   0%, 100% { transform: translateY(0px) rotate(0deg); }
//   50% { transform: translateY(-15px) rotate(2deg); }
// `;
// const breathe = keyframes`
//   0%, 100% { transform: scale(1); }
//   50% { transform: scale(1.03); }
// `;
// const shimmer = keyframes`
//   0% { background-position: -200% center; }
//   100% { background-position: 200% center; }
// `;
// const rotateGlow = keyframes`
//   0% { transform: rotate(0deg); }
//   100% { transform: rotate(360deg); }
// `;

// // ==================== DATA ====================
// const products = [
//   {
//     id: 1,
//     icon: "/logos/white/BluVital-logo.png",
//     title: "VitalsChair™",
//     image: "/hero-popup/vitalschair.webp",
//     category: "Clinical Solutions",
//     description: "Smart patient monitoring seat for instant, multi-vital health tracking",
//     slug: "products/vitals-chair",
//     gradient: "linear-gradient(135deg, #89f7fe, #66a6ff)",
//     bgGradient: "linear-gradient(135deg, rgba(137,247,254,0.22), rgba(102,166,255,0.08))",
//   },
//   {
//     id: 2,
//     icon: "/logos/white/BluNotes-logo.png",
//     title: "BluNotes™",
//     image: "/hero-popup/blunotes.webp",
//     category: "Community Health",
//     description: "Automated medical documentation from clinician-patient conversations",
//     slug: "products/blu-notes",
//     gradient: "linear-gradient(135deg, #f093fb, #f5576c)",
//     bgGradient: "linear-gradient(135deg, rgba(240,147,251,0.22), rgba(245,87,108,0.08))",
//   },
//   {
//     id: 3,
//     icon: "/logos/white/BluAccess-logo.png",
//     image: "/hero-popup/bluaccess.webp",
//     title: "BluAccess™",
//     category: "Access & Security",
//     description: "Smart, secure access & workflow automation across hospital and industries",
//     slug: "products/blu-access",
//     gradient: "linear-gradient(135deg, #4facfe, #00f2fe)",
//     bgGradient: "linear-gradient(135deg, rgba(79,172,254,0.22), rgba(0,242,254,0.08))",
//   },
//   {
//     id: 4,
//     icon: "/logos/white/BluHealth-logo.png",
//     title: "BluHealth™",
//     image: "/hero-popup/bluhealth.webp",
//     category: "Digital Health Platform",
//     description: "Centralized health intelligence portal for real-time, connected care",
//     slug: "products/blu-health",
//     gradient: "linear-gradient(135deg, #43e97b, #38f9d7)",
//     bgGradient: "linear-gradient(135deg, rgba(67,233,123,0.22), rgba(56,249,215,0.08))",
//   },
//   {
//     id: 5,
//     icon: "/logos/white/BluId-logo.png",
//     title: "BluID™",
//     image: "/hero-popup/bluid.webp",
//     category: "Digital Identity",
//     description: "Seamless healthcare access via blockchain biometrics",
//     slug: "products/blu-id",
//     gradient: "linear-gradient(135deg, #fa709a, #fee140)",
//     bgGradient: "linear-gradient(135deg, rgba(250,112,154,0.22), rgba(254,225,64,0.08))",
//   },
//   {
//     id: 6,
//     icon: "/logos/white/BluMental-logo.png",
//     title: "BluMental™",
//     image: "/hero-popup/blumental.webp",
//     category: "Mental Wellness",
//     description: "An intelligent way to understand and support mental health",
//     slug: "products/blu-mental-health",
//     gradient: "linear-gradient(135deg, #a18cd1, #fbc2eb)",
//     bgGradient: "linear-gradient(135deg, rgba(161,140,209,0.22), rgba(251,194,235,0.08))",
//   },
//   {
//     id: 7,
//     icon: "/logos/white/BluDms-logo.png",
//     title: "BluDMS™",
//     image: "/hero-popup/bludms.webp",
//     category: "Secure Communication",
//     description: "Intelligent document management for healthcare operations",
//     slug: "products/blu-dms",
//     gradient: "linear-gradient(135deg, #fccb90, #d57eeb)",
//     bgGradient: "linear-gradient(135deg, rgba(252,203,144,0.22), rgba(213,126,235,0.08))",
//   },
//   {
//     id: 8,
//     icon: "/logos/white/BluAsha-logo.png",
//     title: "BluASHA™",
//     image: "/hero-popup/bluasha.webp",
//     category: "AI Clinical Documentation",
//     description: "Conversational AI for patient triage and engagement using natural language",
//     slug: "products/blu-asha",
//     gradient: "linear-gradient(135deg, #667eea, #764ba2)",
//     bgGradient: "linear-gradient(135deg, rgba(102,126,234,0.22), rgba(118,75,162,0.08))",
//   },
// ];

// // ==================== COMPONENT ====================
// export default function HeroSection() {
//   const router = useRouter();
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
//   const isTablet = useMediaQuery(theme.breakpoints.down("md"));
//   const [isUnlocked, setIsUnlocked] = useState(false);
//   const [hoveredCard, setHoveredCard] = useState(null);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isAutoScrolling, setIsAutoScrolling] = useState(true);
//   const [isPaused, setIsPaused] = useState(false);
//   const autoScrollInterval = useRef(null);
//   const [openDemo, setOpenDemo] = useState(false);

//   const sideCards = isMobile ? 0 : isTablet ? 1 : 2;
//   const totalCards = products.length;

//   const cardWidth = isMobile ? 300 : isTablet ? 320 : 360;
//   const gap = isMobile ? 20 : 28;
//   const itemSize = cardWidth + gap;

//   useEffect(() => {
//     setIsUnlocked(true);
//   }, []);

//   useEffect(() => {
//     if (isAutoScrolling && !isPaused) {
//       autoScrollInterval.current = setInterval(() => {
//         setCurrentIndex((prev) => (prev + 1) % totalCards);
//       }, 4000);
//     }
//     return () => {
//       if (autoScrollInterval.current) clearInterval(autoScrollInterval.current);
//     };
//   }, [isAutoScrolling, isPaused, totalCards]);

//   const swipeHandlers = useSwipeable({
//     onSwipedLeft: () => {
//       setCurrentIndex((prev) => (prev + 1) % totalCards);
//       setIsAutoScrolling(false);
//       setTimeout(() => setIsAutoScrolling(true), 5000);
//     },
//     onSwipedRight: () => {
//       setCurrentIndex((prev) => (prev - 1 + totalCards) % totalCards);
//       setIsAutoScrolling(false);
//       setTimeout(() => setIsAutoScrolling(true), 5000);
//     },
//     trackMouse: true,
//     preventScrollOnSwipe: true,
//   });

//   const handlePrev = () => {
//     setCurrentIndex((prev) => (prev - 1 + totalCards) % totalCards);
//     setIsAutoScrolling(false);
//     setTimeout(() => setIsAutoScrolling(true), 5000);
//   };

//   const handleNext = () => {
//     setCurrentIndex((prev) => (prev + 1) % totalCards);
//     setIsAutoScrolling(false);
//     setTimeout(() => setIsAutoScrolling(true), 5000);
//   };

//   const handleDotClick = (index) => {
//     setCurrentIndex(index);
//     setIsAutoScrolling(false);
//     setTimeout(() => setIsAutoScrolling(true), 5000);
//   };

//   const getWrappedIndex = (idx) => ((idx % totalCards) + totalCards) % totalCards;

//   const getCardStyle = (offset) => {
//     const abs = Math.abs(offset);
//     if (abs > sideCards + 0.5) return { visible: false };

//     const scale = Math.max(0.78, 1 - abs * 0.09);
//     const rotateY = offset * (isMobile ? 0 : 7);
//     const translateZ = abs < 0.5 ? 50 : -abs * 35;
//     const opacity = Math.max(0.72, 1 - abs * 0.12);
//     const zIndex = Math.round(50 - abs * 5);
//     const isCenter = abs < 0.5;

//     return { visible: true, scale, rotateY, translateZ, opacity, zIndex, isCenter };
//   };

//   const renderOffsets = [];
//   for (let i = -sideCards - 1; i <= sideCards + 1; i++) {
//     renderOffsets.push(i);
//   }

//   const showStars = !isUnlocked;

//   return (
//     <Box sx={{ bgcolor: "#0B1220", minHeight: "100vh", overflow: "hidden" }}>
    
      
//       <Box
//         onPointerDown={() => setIsUnlocked(true)}
//         onTouchStart={() => setIsUnlocked(true)}
//         sx={{
//           position: "relative",
//           width: "100%",
//           minHeight: "100svh",
//           overflow: "hidden",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >

        
//         {/* Stars */}
//         {showStars && (
//           <Box sx={{ position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none" }}>
//             <Box sx={{ position: "absolute", inset: 0, opacity: 0.55, backgroundImage: `radial-gradient(rgba(255,255,255,0.95) 1px, transparent 1px)`, backgroundSize: "120px 120px", animation: `${starsMove1} 26s linear infinite` }} />
//             <Box sx={{ position: "absolute", inset: 0, opacity: 1, backgroundImage: `radial-gradient(rgba(255,255,255,0.65) 3px, transparent 3px)`, backgroundSize: "220px 220px", backgroundPosition: "70px 40px", animation: `${starsMove2} 26s linear infinite` }} />
//             <Box sx={{ position: "absolute", inset: 0, opacity: 1, backgroundImage: `radial-gradient(rgba(0,210,255,0.55) 3px, transparent 3px), radial-gradient(rgba(165,95,255,0.45) 3px, transparent 3px)`, backgroundSize: "360px 360px, 520px 520px", backgroundPosition: "120px 140px, 40px 70px", animation: `${starsMove3} 24s linear infinite` }} />
//           </Box>
//         )}

//         {/* Particles */}
//         <Box sx={{ position: "absolute", inset: 0, zIndex: 3, pointerEvents: "none", overflow: "hidden" }}>
//           {[...Array(18)].map((_, i) => (
//             <Box
//               key={i}
//               sx={{
//                 position: "absolute",
//                 width: Math.random() * 4 + 2,
//                 height: Math.random() * 4 + 2,
//                 borderRadius: "50%",
//                 background: i % 2 === 0 ? "rgba(27,77,255,0.3)" : "rgba(0,210,255,0.2)",
//                 left: `${Math.random() * 100}%`,
//                 top: `${Math.random() * 100}%`,
//                 animation: `${float} ${Math.random() * 5 + 3}s ease-in-out infinite`,
//                 animationDelay: `${Math.random() * 3}s`,
//               }}
//             />
//           ))}
//         </Box>

//         {/* ================== CONTENT ================== */}
//         <Container maxWidth="xl" sx={{ position: "relative", zIndex: 6, py: { xs: 10, sm: 10, md: 12 } }}>
//           {/* Header */}
//           <Box sx={{ textAlign: "center", mb: { xs: 3, sm: 4, md: 6 } }}>
//             <Typography
//               sx={{
//                 fontSize: { xs: "clamp(28px, 6vw, 42px)", sm: "clamp(36px, 5vw, 52px)", md: "clamp(48px, 5vw, 58px)" },
//                 fontWeight: 800,
//                 lineHeight: 1.1,
//                 color: "#fff",
//                 maxWidth: 920,
//                 mx: "auto",
//               }}
//             >
//               Transforming Healthcare with{" "}
//               <Box
//                 component="span"
//                 sx={{
//                   background: "#1b4dff",
//                   WebkitBackgroundClip: "text",
//                   WebkitTextFillColor: "transparent",
//                   display: "inline-block",
//                   animation: `${breathe} 3s ease-in-out infinite`,
//                 }}
//               >
//                 AI-Driven
//               </Box>{" "}
//               Innovation
//             </Typography>
//           </Box>

//           {/* ================== CAROUSEL ================== */}
//           <Box
//             {...swipeHandlers}
//             sx={{
//               width: "100%",
//               position: "relative",
//               px: { xs: 0, sm: 2, md: 4 },
//               perspective: "1400px",
//               perspectiveOrigin: "50% 50%",
//             }}
//           >
//             {/* Arrows */}
//             <IconButton
//               onClick={handlePrev}
//               sx={{
//                 position: "absolute",
//                 left: { xs: 4, md: -12 },
//                 top: "50%",
//                 transform: "translateY(-50%)",
//                 zIndex: 50,
//                 bgcolor: "rgba(255,255,255,0.1)",
//                 // backdropFilter: "blur(12px)",
//                 border: "1px solid rgba(255,255,255,0.18)",
//                 color: "#fff",
//                 width: { xs: 40, md: 52 },
//                 height: { xs: 40, md: 52 },
//                 "&:hover": { bgcolor: "rgba(27,77,255,0.35)", borderColor: "#1b4dff" },
//                 display: { xs: "none", sm: "flex" },
//               }}
//             >
//               <ChevronLeftIcon fontSize="medium" />
//             </IconButton>

//             <IconButton
//               onClick={handleNext}
//               sx={{
//                 position: "absolute",
//                 right: { xs: 4, md: -12 },
//                 top: "50%",
//                 transform: "translateY(-50%)",
//                 zIndex: 50,
//                 bgcolor: "rgba(255,255,255,0.1)",
//                 // backdropFilter: "blur(12px)",
//                 border: "1px solid rgba(255,255,255,0.18)",
//                 color: "#fff",
//                 width: { xs: 40, md: 52 },
//                 height: { xs: 40, md: 52 },
//                 "&:hover": { bgcolor: "rgba(27,77,255,0.35)", borderColor: "#1b4dff" },
//                 display: { xs: "none", sm: "flex" },
//               }}
//             >
//               <ChevronRightIcon fontSize="medium" />
//             </IconButton>

//             {/* Track */}
//             <Box
//               sx={{
//                 position: "relative",
//                 width: "100%",
//                 height: { xs: 480, sm: 520, md: 600 },
//                 overflow: "hidden",
//               }}
//             >
//               <Box
//                 sx={{
//                   position: "absolute",
//                   top: 0,
//                   bottom: 0,
//                   left: "50%",
//                   display: "flex",
//                   alignItems: "center",
//                   transformStyle: "preserve-3d",
//                   transform: `translateX(-${cardWidth / 2}px)`,
//                 }}
//               >
//                 {renderOffsets.map((offset) => {
//                   const realIndex = getWrappedIndex(currentIndex + offset);
//                   const product = products[realIndex];
//                   const t = getCardStyle(offset);

//                   if (!t.visible) return null;

//                   const isActive = t.isCenter || hoveredCard === product.id;

//                   return (
//                     <Box
//                       key={product.id}
//                       sx={{
//                         position: "absolute",
//                         left: `${offset * itemSize}px`,
//                         width: cardWidth,
//                         transformStyle: "preserve-3d",
//                         transform: `
//                           translate3d(0, 0, ${t.translateZ}px)
//                           rotateY(${t.rotateY}deg)
//                           scale(${t.scale})
//                         `,
//                         opacity: t.opacity,
//                         zIndex: t.zIndex,
//                         transition: `
//                           transform 0.85s cubic-bezier(0.22, 0.61, 0.36, 1),
//                           opacity 0.7s cubic-bezier(0.22, 0.61, 0.36, 1),
//                           left 0.85s cubic-bezier(0.22, 0.61, 0.36, 1)
//                         `,
//                         willChange: "transform, opacity, left",
//                         backfaceVisibility: "hidden",
//                       }}
//                     >
//                       <Card
//                         onClick={() => router.push(`/${product.slug}`)}
//                         onMouseEnter={() => {
//                           setHoveredCard(product.id);
//                           setIsPaused(true);
//                         }}
//                         onMouseLeave={() => {
//                           setHoveredCard(null);
//                           setIsPaused(false);
//                         }}
//                         sx={{
//                           position: "relative",
//                           bgcolor: isActive ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.04)",
//                           // backdropFilter: "blur(16px)",
//                           border: `2px solid ${isActive
//                             ? product.gradient
//                             : "rgba(255,255,255,0.12)"
//                             }`,
//                           borderRadius: { xs: "21px", md: "21px" },
//                           p: { xs: 3, md: 4 },
//                           height: "100%",
//                           minHeight: { xs: 380, md: 440 },
//                           cursor: "pointer",
//                           transition: `
//                             all 0.5s cubic-bezier(0.22, 0.61, 0.36, 1)
//                           `,
//                           overflow: "hidden",
//                           boxShadow: isActive
//                             ? `0 28px 60px rgba(27,77,255,0.25), 0 0 40px ${product.gradient}20`
//                             : "0 14px 40px rgba(0,0,0,0.4)",
//                           "&::before": {
//                             content: '""',
//                             position: "absolute",
//                             inset: 0,
//                             background: isActive ? product.bgGradient : "transparent",
//                             opacity: isActive ? 1 : 0,
//                             transition: "opacity 0.5s ease",
//                             borderRadius: "inherit",
//                             pointerEvents: "none",
//                           },
//                           "&::after": {
//                             content: '""',
//                             position: "absolute",
//                             inset: -2,
//                             borderRadius: "inherit",
//                             background: `conic-gradient(from 0deg, transparent, ${product.gradient}30, transparent 60%)`,
//                             opacity: isActive ? 0.3 : 0,
//                             transition: "opacity 0.5s ease",
//                             animation: isActive ? `${rotateGlow} 6s linear infinite` : "none",
//                             pointerEvents: "none",
//                             zIndex: 0,
//                           },
//                           "&:hover": {
//                             transform: "translateY(-6px)",
//                             borderColor: product.gradient,
//                             boxShadow: `0 36px 80px rgba(27,77,255,0.3), 0 0 60px ${product.gradient}20`,
//                           },
//                           "&:active": {
//                             transform: "scale(0.97)",
//                           },
//                         }}
//                       >
//                         {/* Shimmer border on hover */}
//                         {isActive && (
//                           <Box
//                             sx={{
//                               position: "absolute",
//                               top: 0,
//                               left: 0,
//                               right: 0,
//                               height: "3px",
//                               background: `linear-gradient(90deg, transparent, ${product.gradient}, transparent)`,
//                               backgroundSize: "200% 100%",
//                               animation: `${shimmer} 2s linear infinite`,
//                               zIndex: 5,
//                               borderRadius: "26px 26px 0 0",
//                             }}
//                           />
//                         )}

//                         <CardContent
//                           sx={{
//                             p: 0,
//                             textAlign: "center",
//                             position: "relative",
//                             zIndex: 2,
//                             height: "100%",
//                             display: "flex",
//                             flexDirection: "column",
//                             alignItems: "center",
//                             justifyContent: "center",
//                           }}
//                         >
//                           {/* Product Image */}
//                           <Box
//                             sx={{
//                               position: "relative",
//                               width: { xs: 250, md: 300 },
//                               height: { xs: 150, md: 180 },
//                               mx: "auto",
//                               mb: { xs: 1.5, md: 2 },
//                               "&::before": {
//                                 content: '""',
//                                 position: "absolute",
//                                 inset: "-20px",
//                                 borderRadius: "50%",
//                                 background: `radial-gradient(circle, ${product.gradient}40, transparent 70%)`,
//                                 opacity: isActive ? 1 : 0.2,
//                                 transition: "opacity 0.5s ease, transform 0.5s ease",
//                                 // filter: "blur(24px)",
//                                 transform: isActive ? "scale(1.4)" : "scale(1)",
//                               },
//                             }}
//                           >
//                             <Image
//                               src={product.image}
//                               alt={product.title}

//                               fill
//                               style={{
//                                 objectFit: "contain",
//                                 filter: isActive
//                                   ? "brightness(1.2) drop-shadow(0 0 30px rgba(27,77,255,0.2))"
//                                   : "brightness(0.9)",
//                                 transition: "filter 0.5s ease",
//                               }}
//                             />
//                           </Box>

//                           {/* Icon Badge */}
//                           <Box
//                             sx={{
//                               position: "relative",
//                               width: { xs: 74, md: 82 },
//                               height: { xs: 54, md: 62 },
//                               mx: "auto",
//                               mb: 1,
//                               mt: -1,
//                               "&::before": {
//                                 content: '""',
//                                 position: "absolute",
//                                 inset: "-6px",
//                                 borderRadius: "50%",
//                                 background: `radial-gradient(circle, ${product.gradient}30, transparent 60%)`,
//                                 opacity: isActive ? 1 : 0.2,
//                                 transition: "opacity 0.5s ease",
//                                 // filter: "blur(10px)",
//                               },
//                             }}
//                           >
//                             <Image
//                               src={product.icon}
//                               alt={product.title}
//                               fill
//                               style={{
//                                 objectFit: "contain",
//                                 filter: isActive ? "brightness(1.3)" : "brightness(0.8)",
//                                 transition: "filter 0.4s ease",
//                               }}
//                             />
//                           </Box>

//                           {/* Category */}
//                           <Typography
//                             sx={{
//                               color: isActive
//                                 ? "rgba(255,255,255,0.9)"
//                                 : "rgba(255,255,255,0.45)",
//                               fontSize: { xs: "12px", sm: "11px", md: "11px" },
//                               fontWeight: 600,
//                               letterSpacing: "1.8px",
//                               textTransform: "uppercase",
//                               mb: 0.5,
//                               transition: "color 0.4s ease",
//                             }}
//                           >
//                             {product.category}
//                           </Typography>

//                           {/* Title */}
//                           <Typography
//                             sx={{
//                               color: "#fff",
//                               fontSize: { xs: "24px", sm: "24px", md: "22px" },
//                               fontWeight: 700,
//                               mb: 0.5,
//                               transition: "all 0.4s ease",
//                               background: isActive ? product.gradient : "none",
//                               WebkitBackgroundClip: isActive ? "text" : "none",
//                               WebkitTextFillColor: isActive ? "transparent" : "#fff",
//                             }}
//                           >
//                             {product.title}
//                           </Typography>

//                           {/* Description */}
//                           <Typography
//                             sx={{
//                               color: isActive
//                                 ? "rgba(255,255,255,0.85)"
//                                 : "rgba(255,255,255,0.5)",
//                               fontSize: { xs: "12px", sm: "13px", md: "14px" },
//                               lineHeight: 1.5,
//                               transition: "color 0.4s ease",
//                               maxWidth: "92%",
//                               mx: "auto",
//                               mb: 1.5,
//                               display: { xs: "none", sm: "block" },
//                             }}
//                           >
//                             {product.description}
//                           </Typography>

//                           {/* CTA Button */}
//                           <Box
//                             sx={{
//                               display: "inline-flex",
//                               alignItems: "center",
//                               gap: 1.2,
//                               px: { xs: 3, md: 3.5 },
//                               py: { xs: 0.9, md: 1 },
//                               borderRadius: { xs: "21px", md: "21px" },
//                               background: isActive
//                                 ? product.gradient
//                                 : "rgba(255,255,255,0.06)",
//                               color: isActive
//                                 ? "#fff"
//                                 : "rgba(255,255,255,0.5)",
//                               fontSize: { xs: "12px", md: "13px" },
//                               fontWeight: 600,
//                               transition: "all 0.4s ease",
//                               border: isActive
//                                 ? "none"
//                                 : "1px solid rgba(255,255,255,0.1)",
//                               boxShadow: isActive
//                                 ? "0 8px 24px rgba(0,0,0,0.3)"
//                                 : "none",
//                               "&:hover": {
//                                 transform: "scale(1.05)",
//                                 boxShadow: isActive
//                                   ? `0 12px 32px rgba(0,0,0,0.4)`
//                                   : "none",
//                               },
//                             }}
//                           >
//                             {isMobile ? "View" : "Explore Solution"}
//                             <span style={{ marginLeft: 4, fontSize: "16px", transition: "transform 0.3s ease" }}>→</span>
//                           </Box>
//                         </CardContent>
//                       </Card>
//                     </Box>
//                   );
//                 })}
//               </Box>
//             </Box>

//             {/* Dots */}
//             <Box
//               sx={{
//                 display: "flex",
//                 justifyContent: "center",
//                 gap: { xs: 1.1, md: 1.4 },
//                 mt: { xs: 2, md: 2.5 },
//               }}
//             >
//               {products.map((_, index) => {
//                 const isActive = currentIndex === index;
//                 return (
//                   <Box
//                     key={index}
//                     onClick={() => handleDotClick(index)}
//                     sx={{
//                       width: isActive ? { xs: 28, md: 36 } : { xs: 9, md: 10 },
//                       height: { xs: 9, md: 10 },
//                       borderRadius: "5px",
//                       background: isActive
//                         ? "linear-gradient(90deg, #1b4dff, #00d2ff)"
//                         : "rgba(255,255,255,0.2)",
//                       cursor: "pointer",
//                       transition: "all 0.3s ease",
//                       boxShadow: isActive ? "0 0 20px rgba(27,77,255,0.3)" : "none",
//                       "&:hover": {
//                         background: isActive
//                           ? "linear-gradient(90deg, #1b4dff, #00d2ff)"
//                           : "rgba(255,255,255,0.45)",
//                       },
//                     }}
//                   />
//                 );
//               })}
//             </Box>

//             {/* Auto-scroll status */}
//             <Box
//               sx={{
//                 display: "flex",
//                 justifyContent: "center",
//                 mt: { xs: 1.5, md: 2 },
//                 gap: 1,
//                 alignItems: "center",
//               }}
//             >
//               <Box
//                 sx={{
//                   width: 6,
//                   height: 6,
//                   borderRadius: "50%",
//                   bgcolor: isAutoScrolling && !isPaused ? "#1b4dff" : "rgba(255,255,255,0.2)",
//                   transition: "all 0.4s ease",
//                   animation: isAutoScrolling && !isPaused ? `${float} 2s ease-in-out infinite` : "none",
//                 }}
//               />
//               <Typography
//                 sx={{
//                   color: isAutoScrolling && !isPaused ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.2)",
//                   fontSize: { xs: "9px", md: "11px" },
//                   fontWeight: 500,
//                   letterSpacing: "1px",
//                   textTransform: "uppercase",
//                   transition: "all 0.4s ease",
//                 }}
//               >
//                 {isAutoScrolling && !isPaused ? "Auto-scrolling" : "Paused"}
//               </Typography>
//             </Box>
//           </Box>

//           {/* CTA Buttons */}
//           <Stack
//             direction={{ xs: "column", sm: "row" }}
//             spacing={2}
//             justifyContent="center"
//             alignItems="center"
//             mt={{ xs: 3, md: 4 }}
//           >
//             <Button
//               variant="contained"
//               size="large"
//               onClick={() => setOpenDemo(true)}
//               sx={{
//                 background: "linear-gradient(135deg, #1b4dff, #0044e6)",
//                 color: "#fff",
//                 px: { xs: 4, md: 5 },
//                 py: 1.6,
//                 fontWeight: 700,
//                 fontSize: { xs: "15px", md: "16px" },
//                 borderRadius: { xs: "21px", md: "21px" },
//                 textTransform: "none",
//                 boxShadow: "0 8px 28px rgba(27,77,255,0.4)",
//                 transition: "all 0.3s ease",
//                 "&:hover": {
//                   boxShadow: "0 12px 36px rgba(27,77,255,0.55)",
//                   transform: "translateY(-2px) scale(1.02)",
//                 },
//                 "&:active": {
//                   transform: "translateY(0) scale(0.98)",
//                 },
//               }}
//             >
//               Schedule a Demo
//             </Button>
//             <RequestDemoModal open={openDemo} onClose={() => setOpenDemo(false)} />

//             <Button
//               variant="outlined"
//               size="large"
//               onClick={() => router.push("#")}
//               sx={{
//                 px: { xs: 4, md: 5 },
//                 py: 1.6,
//                 fontWeight: 600,
//                 fontSize: { xs: "15px", md: "16px" },
//                 borderRadius: { xs: "21px", md: "21px" },
//                 textTransform: "none",
//                 borderWidth: "1.5px",
//                 borderColor: "rgba(255,255,255,0.25)",
//                 color: "#fff",
//                 bgcolor: "rgba(255,255,255,0.03)",
//                 transition: "all 0.3s ease",
//                 "&:hover": {
//                   borderColor: "#1b4dff",
//                   bgcolor: "rgba(27,77,255,0.12)",
//                   boxShadow: "0 8px 24px rgba(27,77,255,0.2)",
//                   transform: "translateY(-2px)",
//                 },
//                 "&:active": {
//                   transform: "translateY(0)",
//                 },
//               }}
//             >
//               Download Product Brochure
//             </Button>
//           </Stack>
//         </Container>
//       </Box>
//     </Box>
//   );
// }





"use client";

import { Box, Container, Typography, Card, CardContent, IconButton, useTheme, useMediaQuery, Button, Stack } from "@mui/material";
import { keyframes } from "@mui/system";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useSwipeable } from "react-swipeable";
import RequestDemoModal from "./popups/RequestDemoModal";

// ==================== CINEMATIC ANIMATIONS ====================
const float = keyframes`
  0%, 100% { transform: translateY(0px) translateX(0px) scale(1); }
  33% { transform: translateY(-30px) translateX(20px) scale(1.05); }
  66% { transform: translateY(20px) translateX(-20px) scale(0.95); }
`;
const blobFloat = keyframes`
  0% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(80px, -120px) scale(1.2); }
  66% { transform: translate(-60px, 60px) scale(0.8); }
  100% { transform: translate(0, 0) scale(1); }
`;
const rotateGlow = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;
const shimmer = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;
const textGradient = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;
const pulseRing = keyframes`
  0% { transform: scale(1); opacity: 0.6; }
  100% { transform: scale(1.2); opacity: 0; }
`;

// ==================== DATA ====================
const products = [
  {
    id: 1,
    icon: "/logos/white/BluVital-logo.png",
    title: "VitalsChair™",
    image: "/hero-popup/vitalschair.webp",
    category: "Clinical Solutions",
    description: "Smart patient monitoring seat for instant, multi-vital health tracking",
    slug: "products/vitals-chair",
    gradient: "linear-gradient(135deg, #89f7fe, #66a6ff)",
    glow: "rgba(102,166,255, 0.55)",
    textColor: "#89f7fe",
  },
    {
    id: 9,
    icon: "/logos/white/pole.png",
    title: "VitalsPole™",
    image: "/hero-popup/pole.webp",
    category: "Clinical Solutions",
    description: "Smart patient monitoring pole, multi-vital health tracking",
    slug: "products/vitals-pole",
    gradient: "linear-gradient(135deg, #aace46, #66a6ff)",
    glow: "rgba(102,166,255, 0.55)",
    textColor: "#aace46",
  },
    {
    id: 10,
    icon: "/logos/white/neonatal.png",
    title: "BluNeonatal™",
    image: "/hero-popup/neonatal.webp",
    category: "Clinical Solutions",
    description: "Smart neonatal monitoring solution for real-time newborn vital tracking",
    slug: "products/blu-neonatal",
    gradient: "linear-gradient(135deg, #daa351, #66a6ff)",
    glow: "rgba(102,166,255, 0.55)",
    textColor: "#daa351",
  },
    {
    id: 11,
    icon: "/logos/white/briefcase.png",
    title: "VitalsBriefcase™",
    image: "/hero-popup/briefcase.webp",
    category: "Clinical Solutions",
    description: "Smart patient monitoring Briefcase for instant, multi-vital health tracking",
    slug: "products/vitals-briefcase",
    gradient: "linear-gradient(135deg, #bb78e2, #66a6ff)",
    glow: "rgba(102,166,255, 0.55)",
    textColor: "#bb78e2",
  },

  {
    id: 2,
    icon: "/logos/white/BluNotes-logo.png",
    title: "BluNotes™",
    image: "/hero-popup/blunotes.webp",
    category: "Community Health",
    description: "Automated medical documentation from clinician-patient conversations",
    slug: "products/blu-notes",
    gradient: "linear-gradient(135deg, #f093fb, #f5576c)",
    glow: "rgba(240,147,251, 0.55)",
    textColor: "#f093fb",
  },
  {
    id: 3,
    icon: "/logos/white/BluAccess-logo.png",
    image: "/hero-popup/bluaccess.webp",
    title: "BluAccess™",
    category: "Access & Security",
    description: "Smart, secure access & workflow automation across hospital and industries",
    slug: "products/blu-access",
    gradient: "linear-gradient(135deg, #4facfe, #00f2fe)",
    glow: "rgba(0,242,254, 0.55)",
    textColor: "#4facfe",
  },
  {
    id: 4,
    icon: "/logos/white/BluHealth-logo.png",
    title: "BluHealth™",
    image: "/hero-popup/bluhealth.webp",
    category: "Digital Health Platform",
    description: "Centralized health intelligence portal for real-time, connected care",
    slug: "products/blu-health",
    gradient: "linear-gradient(135deg, #43e97b, #38f9d7)",
    glow: "rgba(56,249,215, 0.55)",
    textColor: "#43e97b",
  },
  {
    id: 5,
    icon: "/logos/white/BluId-logo.png",
    title: "BluID™",
    image: "/hero-popup/bluid.webp",
    category: "Digital Identity",
    description: "Seamless healthcare access via blockchain biometrics",
    slug: "products/blu-id",
    gradient: "linear-gradient(135deg, #fa709a, #fee140)",
    glow: "rgba(250,112,154, 0.55)",
    textColor: "#fa709a",
  },
  {
    id: 6,
    icon: "/logos/white/BluMental-logo.png",
    title: "BluMental™",
    image: "/hero-popup/blumental.webp",
    category: "Mental Wellness",
    description: "An intelligent way to understand and support mental health",
    slug: "products/blu-mental-health",
    gradient: "linear-gradient(135deg, #a18cd1, #fbc2eb)",
    glow: "rgba(161,140,209, 0.55)",
    textColor: "#a18cd1",
  },
  {
    id: 7,
    icon: "/logos/white/BluDms-logo.png",
    title: "BluDMS™",
    image: "/hero-popup/bludms.webp",
    category: "Secure Communication",
    description: "Intelligent document management for healthcare operations",
    slug: "products/blu-dms",
    gradient: "linear-gradient(135deg, #fccb90, #d57eeb)",
    glow: "rgba(213,126,235, 0.55)",
    textColor: "#fccb90",
  },
  {
    id: 8,
    icon: "/logos/white/BluAsha-logo.png",
    title: "BluASHA™",
    image: "/hero-popup/bluasha.webp",
    category: "AI Clinical Documentation",
    description: "Conversational AI for patient triage and engagement using natural language",
    slug: "products/blu-asha",
    gradient: "linear-gradient(135deg, #667eea, #764ba2)",
    glow: "rgba(102,126,234, 0.55)",
    textColor: "#667eea",
  },
];

// ==================== COMPONENT ====================
export default function HeroSection() {
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const autoScrollInterval = useRef(null);
  const [openDemo, setOpenDemo] = useState(false);

  const sideCards = isMobile ? 0 : isTablet ? 1 : 2;
  const totalCards = products.length;

  const cardWidth = isMobile ? 310 : isTablet ? 340 : 400; // Wider for better presence
  const gap = isMobile ? 20 : 45; // Massive spacing for breathing room
  const itemSize = cardWidth + gap;

  useEffect(() => {
    setIsUnlocked(true);
  }, []);

  useEffect(() => {
    if (isAutoScrolling && !isPaused) {
      autoScrollInterval.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % totalCards);
      }, 4000);
    }
    return () => {
      if (autoScrollInterval.current) clearInterval(autoScrollInterval.current);
    };
  }, [isAutoScrolling, isPaused, totalCards]);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      setCurrentIndex((prev) => (prev + 1) % totalCards);
      setIsAutoScrolling(false);
      setTimeout(() => setIsAutoScrolling(true), 5000);
    },
    onSwipedRight: () => {
      setCurrentIndex((prev) => (prev - 1 + totalCards) % totalCards);
      setIsAutoScrolling(false);
      setTimeout(() => setIsAutoScrolling(true), 5000);
    },
    trackMouse: true,
    preventScrollOnSwipe: true,
  });

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalCards) % totalCards);
    setIsAutoScrolling(false);
    setTimeout(() => setIsAutoScrolling(true), 5000);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalCards);
    setIsAutoScrolling(false);
    setTimeout(() => setIsAutoScrolling(true), 5000);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
    setIsAutoScrolling(false);
    setTimeout(() => setIsAutoScrolling(true), 5000);
  };

  const getWrappedIndex = (idx) => ((idx % totalCards) + totalCards) % totalCards;

  const getCardStyle = (offset) => {
    const abs = Math.abs(offset);
    if (abs > sideCards + 0.5) return { visible: false };

    const scale = Math.max(0.7, 1 - abs * 0.12);
    const rotateY = offset * (isMobile ? 0 : 12);
    const translateZ = abs < 0.5 ? 120 : -abs * 80; // Deep dramatic Z-depth
    const opacity = Math.max(0.5, 1 - abs * 0.25);
    const zIndex = Math.round(50 - abs * 5);
    const isCenter = abs < 0.5;

    return { visible: true, scale, rotateY, translateZ, opacity, zIndex, isCenter };
  };

  const renderOffsets = [];
  for (let i = -sideCards - 1; i <= sideCards + 1; i++) {
    renderOffsets.push(i);
  }

  return (
    <Box 
      sx={{ 
        minHeight: "100vh", 
        overflow: "hidden", 
        position: "relative",
        bgcolor: "#05060A", // Deep void black base
        background: "radial-gradient(circle at 50% 40%, #151A2E 0%, #0A0D1C 60%, #05060A 100%)"
      }}
    >
      {/* ================== IMMERSIVE AURORA BACKGROUND ================== */}
      <Box sx={{ position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none", overflow: "hidden" }}>
        {/* Core Aurora Left */}
        <Box sx={{ 
          position: "absolute", top: "-20%", left: "-15%", width: "60vw", height: "60vw", 
          borderRadius: "50%", 
          background: "conic-gradient(from 180deg, rgba(27,77,255,0.3), rgba(137,247,254,0.2), transparent 60%)",
          filter: "blur(120px)", animation: `${blobFloat} 25s ease-in-out infinite` 
        }} />
        
        {/* Core Aurora Right */}
        <Box sx={{ 
          position: "absolute", top: "20%", right: "-20%", width: "50vw", height: "50vw", 
          borderRadius: "50%", 
          background: "conic-gradient(from 0deg, rgba(240,147,251,0.2), rgba(102,126,234,0.4), transparent 70%)",
          filter: "blur(120px)", animation: `${blobFloat} 35s ease-in-out infinite reverse` 
        }} />

        {/* Floor reflection glow */}
        <Box sx={{ 
          position: "absolute", bottom: "-30%", left: "25%", width: "50vw", height: "30vw",
          borderRadius: "50%", 
          background: "radial-gradient(ellipse, rgba(0, 212, 255, 0.15), transparent 70%)",
          filter: "blur(80px)", animation: `${float} 15s ease-in-out infinite`
        }} />
      </Box>

      <Box
        sx={{
          position: "relative",
          zIndex: 5,
          width: "100%",
          minHeight: "100svh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container maxWidth="xl" sx={{ py: { xs: 10, sm: 10, md: 12 } }}>
          
          {/* ================== CINEMATIC HEADER ================== */}
          <Box sx={{ textAlign: "center", mb: { xs: 6, sm: 8, md: 10 } }}>
            <Typography
              sx={{
                fontSize: { xs: "clamp(34px, 7vw, 50px)", sm: "clamp(44px, 6vw, 62px)", md: "clamp(52px, 5.5vw, 65px)" },
                fontWeight: 900,
                lineHeight: 1.05,
                color: "#fff",
                maxWidth: 950,
                mx: "auto",
                letterSpacing: "-1.5px",
                textShadow: "0 10px 30px rgba(0,0,0,0.8)"
              }}
            >
              Transforming Healthcare with{" "}
              <Box
                component="span"
                sx={{
                  background: "linear-gradient(90deg, #1b4dff, #eceff0, #1b4dff)",
                  backgroundSize: "300% 100%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  display: "inline-block",
                  animation: `${textGradient} 8s ease infinite`,
                }}
              >
                AI-Driven
              </Box>{" "}
              Innovation
            </Typography>
          </Box>

          {/* ================== 3D STAGE CAROUSEL ================== */}
          <Box
            {...swipeHandlers}
            sx={{
              width: "100%",
              position: "relative",
              px: { xs: 0, sm: 2, md: 4 },
              perspective: "2200px", // Wide lens for deep 3D
              // Massive ambient stage glow 
              "&::before": {
                content: '""',
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: { xs: "90%", md: "70%" },
                height: "90%",
                background: "radial-gradient(ellipse, rgba(0, 212, 255, 0.2), rgba(27,77,255, 0.1) 50%, transparent 80%)",
                // filter: "blur(80px)",
                zIndex: -1,
              }
            }}
          >
            
            {/* ================== TRACK ================== */}
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: { xs: 500, sm: 550, md: 680 },
                overflow: "visible",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  bottom: 0,
                  left: "50%",
                  display: "flex",
                  alignItems: "center",
                  transformStyle: "preserve-3d",
                  transform: `translateX(-${cardWidth / 2}px)`,
                }}
              >
                {renderOffsets.map((offset) => {
                  const realIndex = getWrappedIndex(currentIndex + offset);
                  const product = products[realIndex];
                  const t = getCardStyle(offset);

                  if (!t.visible) return null;

                  const isActive = t.isCenter || hoveredCard === product.id;

                  return (
                    <Box
                      key={product.id}
                      sx={{
                        position: "absolute",
                        left: `${offset * itemSize}px`,
                        width: cardWidth,
                        transformStyle: "preserve-3d",
                        transform: `translate3d(0, 0, ${t.translateZ}px) rotateY(${t.rotateY}deg) scale(${t.scale})`,
                        opacity: t.opacity,
                        zIndex: t.zIndex,
                        transition: `transform 0.8s cubic-bezier(0.22, 0.61, 0.36, 1), opacity 0.6s ease, left 0.8s cubic-bezier(0.22, 0.61, 0.36, 1)`,
                        willChange: "transform, opacity, left",
                        backfaceVisibility: "hidden",
                      }}
                    >
                      <Card
                        onClick={() => router.push(`/${product.slug}`)}
                        onMouseEnter={() => { setHoveredCard(product.id); setIsPaused(true); }}
                        onMouseLeave={() => { setHoveredCard(null); setIsPaused(false); }}
                        sx={{
                          position: "relative",
                          bgcolor: isActive ? "rgba(20, 25, 45, 0.7)" : "rgba(10, 15, 30, 0.6)",
                          // backdropFilter: "blur(25px)",
                          border: "1px solid rgba(255,255,255,0.1)",
                          borderRadius: "28px",
                          p: { xs: 3, md: 4 },
                          height: "100%",
                          minHeight: { xs: 420, md: 400 },
                          cursor: "pointer",
                          transition: "all 0.4s cubic-bezier(0.22, 0.61, 0.36, 1)",
                          overflow: "hidden",
                     
                          "&::before": {
                            content: '""',
                            position: "absolute",
                            inset: 0,
                            background: isActive 
                              ? `linear-gradient(180deg, ${product.glow.replace("0.55", "0.3")}, transparent 40%)` 
                              : "linear-gradient(180deg, rgba(255,255,255,0.05), transparent 30%)",
                            pointerEvents: "none",
                            zIndex: 1
                          },
                          
                          // Animated Conic Border Glow
                          "&::after": {
                            content: '""',
                            position: "absolute",
                            inset: -2,
                            borderRadius: "inherit",
                            padding: "2px",
                            background: isActive 
                              ? `conic-gradient(from 0deg, transparent 10%, ${product.gradient}, transparent 90%)` 
                              : "transparent",
                            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                            WebkitMaskComposite: "xor",
                            maskComposite: "exclude",
                            opacity: isActive ? 1 : 0,
                            animation: isActive ? `${rotateGlow} 6s linear infinite` : "none",
                            pointerEvents: "none"
                          },
                          
                          "&:hover": {
                            transform: "translateY(-10px) scale(1.02)",
                            boxShadow: `0 50px 120px ${product.glow}, 0 0 60px rgba(0,0,0,0.8)`
                          }
                        }}
                      >
                        {/* Shimmer Top Bar on Hover/Active */}
                        {isActive && (
                          <Box sx={{
                            position: "absolute",
                            top: 0, left: 0, right: 0, height: "4px",
                            background: `linear-gradient(90deg, transparent, ${product.gradient}, transparent)`,
                            backgroundSize: "200% 100%",
                            animation: `${shimmer} 2s linear infinite`,
                            zIndex: 5,
                            borderRadius: "28px 28px 0 0"
                          }} />
                        )}

                        {/* Center Pulse Ring */}
                        {isActive && (
                          <Box sx={{
                            position: "absolute", top: "50%", left: "50%",
                            transform: "translate(-50%, -50%)",
                            width: "80%", height: "80%",
                            border: `1px solid ${product.glow}`,
                            borderRadius: "50%",
                            animation: `${pulseRing} 3s ease-out infinite`,
                            pointerEvents: "none"
                          }} />
                        )}

                        <CardContent
                          sx={{
                            p: 0,
                            textAlign: "center",
                            position: "relative",
                            zIndex: 2,
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          {/* Image Floater */}
                          <Box
                            sx={{
                              position: "relative",
                              width: { xs: 280, md: 340 },
                              height: { xs: 160, md: 200 },
                              mx: "auto",
                              mb: { xs: 1, md: 2 },
                              // filter: isActive ? `drop-shadow(0 20px 30px ${product.glow})` : "drop-shadow(0 10px 20px rgba(0,0,0,0.5))",
                              transition: "filter 0.4s"
                            }}
                          >
                            <Image
                              src={product.image}
                              alt={product.title}
                              fill
                              style={{
                                objectFit: "contain",
                                borderRadius: "12px",
                                maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
                                WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 100%)"
                              }}
                            />
                          </Box>

                          <Box sx={{ height: 10 }} />
                          
                          {/* Icon Badge */}
                          <Box
                            sx={{
                              position: "relative",
                              width: { xs: 70, md: 140 },
                              height: { xs: 50, md: 60 },
                              // borderRadius : {xs:3 , md : 8},
                              mx: "auto",
                              mb: 1,
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              // filter: isActive ? `drop-shadow(0 0 20px ${product.glow})` : "none"
                            }}
                          >
                            <Image src={product.icon} alt={product.title} fill style={{ objectFit: "contain" }} />
                          </Box>

                          <Typography
                            sx={{
                              color: isActive ? product.textColor : "rgba(255,255,255,0.4)",
                              fontSize: "11px",
                              fontWeight: 800,
                              letterSpacing: "3px",
                              textTransform: "uppercase",
                              mb: 1,
                              transition: "color 0.4s"
                            }}
                          >
                            {product.category}
                          </Typography>

                          <Typography
                            sx={{
                              color: "#fff",
                              fontSize: { xs: "26px", md: "30px" },
                              fontWeight: 900,
                              mb: 1,
                              transition: "all 0.4s",
                              textShadow: isActive ? `0 0 30px ${product.glow}, 0 5px 15px rgba(0,0,0,0.5)` : "0 5px 15px rgba(0,0,0,0.5)"
                            }}
                          >
                            {product.title}
                          </Typography>

                          <Typography
                            sx={{
                              color: isActive ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.5)",
                              fontSize: { xs: "13px", md: "14px" },
                              lineHeight: 1.6,
                              maxWidth: "90%",
                              mx: "auto",
                              mb: 4,
                              display: { xs: "none", sm: "block" },
                              fontWeight: 400
                            }}
                          >
                            {product.description}
                          </Typography>

                          {/* Ultra-Premium Pill Button */}
                          <Box
                            sx={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: 1.5,
                              px: 5,
                              py: 1.4,
                              borderRadius: "50px",
                              background: isActive ? product.gradient : "rgba(255,255,255,0.08)",
                              color: isActive ? "#fff" : "rgba(255,255,255,0.7)",
                              fontSize: "13px",
                              fontWeight: 800,
                              transition: "all 0.3s",
                              border: isActive ? "none" : "1px solid rgba(255,255,255,0.2)",
                              boxShadow: isActive ? `0 15px 40px ${product.glow}` : "none",
                              "&:hover": {
                                transform: "scale(1.08) translateY(-2px)"
                              }
                            }}
                          >
                            {isMobile ? "View" : "Explore Solution"}
                            <span style={{ fontSize: "18px", lineHeight: 1 }}>→</span>
                          </Box>
                        </CardContent>
                      </Card>
                    </Box>
                  );
                })}
              </Box>
            </Box>

            {/* ================== CONTROLS ================== */}
            <Box sx={{ display: "flex", justifyContent: "center", mt: 7, gap: 1.5, alignItems: "center" }}>
              {products.map((_, index) => {
                const isActive = currentIndex === index;
                return (
                  <Box
                    key={index}
                    onClick={() => handleDotClick(index)}
                    sx={{
                      width: isActive ? 44 : 8,
                      height: 8,
                      borderRadius: "20px",
                      background: isActive 
                        ? `linear-gradient(90deg, ${products[index].gradient.split(',')[0]}, ${products[index].gradient.split(',')[1]})` 
                        : "rgba(255,255,255,0.15)",
                      cursor: "pointer",
                      transition: "all 0.4s cubic-bezier(0.22, 0.61, 0.36, 1)",
                      boxShadow: isActive ? `0 0 30px ${products[index].glow}` : "none",
                      "&:hover": {
                        bgcolor: "rgba(255,255,255,0.4)"
                      }
                    }}
                  />
                );
              })}
            </Box>

            {/* ================== CTA BUTTONS ================== */}
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={3}
              justifyContent="center"
              alignItems="center"
              mt={{ xs: 6, md: 8 }}
            >
              <Button
                variant="contained"
                size="large"
                onClick={() => setOpenDemo(true)}
                sx={{
                  background: " #1b4dff",
                  color: "#fff",
                  px: { xs: 6, md: 7 },
                  py: 2,
                  fontWeight: 900,
                  fontSize: "17px",
                  borderRadius: "50px",
                  textTransform: "none",
                  letterSpacing: "0.5px",
                  boxShadow: "0 15px 50px rgba(27,77,255, 0.6)",
                  border: "1px solid rgba(255,255,255,0.3)",
                  "&:hover": {
                    boxShadow: "0 20px 70px rgba(27,77,255, 0.9)",
                    transform: "translateY(-4px) scale(1.02)",
                    background: "linear-gradient(150deg, #cad5d8, #1b4dff)"
                  }
                }}
              >
                Schedule a Demo
              </Button>
              <RequestDemoModal open={openDemo} onClose={() => setOpenDemo(false)} />

              <Button
                variant="outlined"
                size="large"
                onClick={() => router.push("#")}
                sx={{
                  px: { xs: 6, md: 7 },
                  py: 2,
                  fontWeight: 700,
                  fontSize: "17px",
                  borderRadius: "50px",
                  textTransform: "none",
                  border: "2px solid rgba(255,255,255,0.25)",
                  color: "#fff",
                  bgcolor: "rgba(255,255,255,0.03)",
                  "&:hover": {
                    borderColor: "#fff",
                    bgcolor: "rgba(255,255,255,0.1)",
                    transform: "translateY(-4px)",
                    boxShadow: "0 10px 30px rgba(255,255,255,0.1)"
                  }
                }}
              >
                Download Brochure
              </Button>
            </Stack>

          </Box>
        </Container>
        
        {/* Premium Floating Arrows */}
        <IconButton 
          onClick={handlePrev} 
          sx={{ 
            position: "absolute", 
            left: {xs: "3%", md: "8%"}, 
            top: "50%", 
            zIndex: 10, 
            color: "#fff", 
            border: "1px solid rgba(255,255,255,0.2)", 
            bgcolor: "rgba(10, 15, 30, 0.5)",
            // backdropFilter: "blur(10px)",
            width: 60, height: 60,
            "&:hover": { bgcolor: "rgba(27,77,255, 0.4)", borderColor: "#00d2ff", boxShadow: "0 0 30px rgba(27,77,255, 0.4)" },
            display: { xs: "none", sm: "flex" }
          }}
        >
          <ChevronLeftIcon sx={{ fontSize: 30 }} />
        </IconButton>
        <IconButton 
          onClick={handleNext} 
          sx={{ 
            position: "absolute", 
            right: {xs: "3%", md: "8%"}, 
            top: "50%", 
            zIndex: 10, 
            color: "#fff", 
            border: "1px solid rgba(255,255,255,0.2)", 
            bgcolor: "rgba(10, 15, 30, 0.5)",
            // backdropFilter: "blur(10px)",
            width: 60, height: 60,
            "&:hover": { bgcolor: "rgba(27,77,255, 0.4)", borderColor: "#00d2ff", boxShadow: "0 0 30px rgba(27,77,255, 0.4)" },
            display: { xs: "none", sm: "flex" }
          }}
        >
          <ChevronRightIcon sx={{ fontSize: 30 }} />
        </IconButton>
      </Box>
    </Box>
  );
}