
// "use client";

// import Image from "next/image";
// import { keyframes } from "@mui/system";
// import { useRouter } from "next/navigation";
// import { useEffect, useState, useRef } from "react";
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import { useSwipeable } from "react-swipeable";
// import RequestDemoModal from "./popups/RequestDemoModal";
// import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
// import HealingIcon from "@mui/icons-material/Healing";
// import { Box, Container, Typography, Card, CardContent, IconButton, useTheme, useMediaQuery, Button, Stack } from "@mui/material";

// // ==================== CINEMATIC ANIMATIONS ====================

// const rotateGlow = keyframes`
//   0% { transform: rotate(0deg); }
//   100% { transform: rotate(360deg); }
// `;

// const textGradient = keyframes`
//   0% { background-position: 0% 50%; }
//   50% { background-position: 100% 50%; }
//   100% { background-position: 0% 50%; }
// `;


// // ==================== DATA ====================
// const products = [
//   {
//     id: 1,
//     icon: "/logos/white/BluVital-logo.png",
//     title: "VitalsChair™",
//     image: "/hero-popup/chair.webp",
//     category: "Clinical Solutions",
//     description: "Smart patient monitoring seat for instant, multi-vital health tracking",
//     slug: "products/vitals-chair",
//     gradient: "linear-gradient(135deg, #1b4dff, #66a6ff)",
//     glow: "rgba(102,166,255, 0.55)",
//     textColor: "#89f7fe",
//   },
//   {
//     id: 9,
//     icon: "/logos/white/pole.png",
//     title: "VitalsPole™",
//     image: "/hero-popup/pole.webp",
//     category: "Clinical Solutions",
//     description: "Smart patient monitoring pole, multi-vital health tracking",
//     slug: "products/vitals-pole",
//     gradient: "linear-gradient(135deg, #1b4dff, #66a6ff)",
//     glow: "rgba(102,166,255, 0.55)",
//     textColor: "#aace46",
//   },
//   {
//     id: 10,
//     icon: "/logos/white/neonatal.png",
//     title: "BluNeonatal™",
//     image: "/hero-popup/child.webp",
//     category: "Clinical Solutions",
//     description: "Smart neonatal monitoring solution for real-time newborn vital tracki ng",
//     slug: "products/blu-neonatal",
//     gradient: "linear-gradient(135deg, #1b4dff, #66a6ff)",
//     glow: "rgba(102,166,255, 0.55)",
//     textColor: "#daa351",
//   },
//   {
//     id: 11,
//     icon: "/logos/white/briefcase.png",
//     title: "VitalsBriefcase™",
//     image: "/hero-popup/box.webp",
//     category: "Clinical Solutions",
//     description: "Smart patient monitoring Briefcase for instant, multi-vital health tracking",
//     slug: "products/vitals-briefcase",
//     gradient: "linear-gradient(135deg, #1b4dff, #66a6ff)",
//     glow: "rgba(102,166,255, 0.55)",
//     textColor: "#bb78e2",
//   },

//   {
//     id: 2,
//     icon: "/logos/white/BluNotes-logo.png",
//     title: "BluNotes™",
//     image: "/hero-popup/blunotes.webp",
//     category: "Community Health",
//     description: "Automated medical documentation from clinician-patient conversations",
//     slug: "products/blu-notes",
//     gradient: "linear-gradient(135deg, #1b4dff, #66a6ff)",
//     glow: "rgba(102,166,255, 0.55)",
//     textColor: "#f093fb",
//   },
//   {
//     id: 3,
//     icon: "/logos/white/BluAccess-logo.png",
//     image: "/hero-popup/bluaccess.webp",
//     title: "BluAccess™",
//     category: "Access & Security",
//     description: "Smart, secure access & workflow automation across hospital and industries",
//     slug: "products/blu-access",
//     gradient: "linear-gradient(135deg, #1b4dff, #66a6ff)",
//     glow: "rgba(102,166,255, 0.55)",
//     textColor: "#4facfe",
//   },
//   {
//     id: 4,
//     icon: "/logos/white/BluHealth-logo.png",
//     title: "BluHealth™",
//     image: "/hero-popup/bluhealth.webp",
//     category: "Digital Health Platform",
//     description: "Centralized health intelligence portal for real-time, connected care",
//     slug: "products/blu-health",
//     gradient: "linear-gradient(135deg, #1b4dff, #66a6ff)",
//     glow: "rgba(102,166,255, 0.55)",
//     textColor: "#43e97b",
//   },
//   {
//     id: 5,
//     icon: "/logos/white/BluId-logo.png",
//     title: "BluID™",
//     image: "/hero-popup/bluid.webp",
//     category: "Digital Identity",
//     description: "Seamless healthcare access via blockchain biometrics",
//     slug: "products/blu-id",
//     gradient: "linear-gradient(135deg, #1b4dff, #66a6ff)",
//     glow: "rgba(102,166,255, 0.55)",
//     textColor: "#fa709a",
//   },
//   {
//     id: 6,
//     icon: "/logos/white/BluMental-logo.png",
//     title: "BluMental™",
//     image: "/hero-popup/blumental.webp",
//     category: "Mental Wellness",
//     description: "An intelligent way to understand and support mental health",
//     slug: "products/blu-mental-health",
//     gradient: "linear-gradient(135deg, #1b4dff, #66a6ff)",
//     glow: "rgba(102,166,255, 0.55)",
//     textColor: "#a18cd1",
//   },
//   {
//     id: 7,
//     icon: "/logos/white/BluDms-logo.png",
//     title: "BluDMS™",
//     image: "/hero-popup/bludms.webp",
//     category: "Secure Communication",
//     description: "Intelligent document management for healthcare operations",
//     slug: "products/blu-dms",
//     gradient: "linear-gradient(135deg, #1b4dff, #66a6ff)",
//     glow: "rgba(102,166,255, 0.55)",
//     textColor: "#fccb90",
//   },
//   {
//     id: 8,
//     icon: "/logos/white/BluAsha-logo.png",
//     title: "BluASHA™",
//     image: "/hero-popup/bluasha.webp",
//     category: "AI Clinical Documentation",
//     description: "Conversational AI for patient triage and engagement using natural language",
//     slug: "products/blu-asha",
//     gradient: "linear-gradient(135deg, #1b4dff, #66a6ff)",
//     glow: "rgba(102,166,255, 0.55)",
//     textColor: "#667eea",
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

//   const cardWidth = isMobile ? 310 : isTablet ? 340 : 400; // Wider for better presence
//   const gap = isMobile ? 20 : 45; // Massive spacing for breathing room
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

//     const scale = Math.max(0.7, 1 - abs * 0.12);
//     const rotateY = offset * (isMobile ? 0 : 12);
//     const translateZ = abs < 0.5 ? 120 : -abs * 80; // Deep dramatic Z-depth
//     const opacity = Math.max(0.5, 1 - abs * 0.25);
//     const zIndex = Math.round(50 - abs * 5);
//     const isCenter = abs < 0.5;

//     return { visible: true, scale, rotateY, translateZ, opacity, zIndex, isCenter };
//   };

//   const renderOffsets = [];
//   for (let i = -sideCards - 1; i <= sideCards + 1; i++) {
//     renderOffsets.push(i);
//   }

//   return (
//     <Box
//       sx={{
//         minHeight: "100vh",
//         overflow: "hidden",
//         position: "relative",
//         bgcolor: "#060B16",
//       }}
//     >
//       {/* ================== IMMERSIVE AURORA BACKGROUND ================== */}
//       <Box
//         sx={{
//           position: "absolute",
//           top: "10%",
//           left: "5%",
//           opacity: 0.06,
//           transform: "rotate(-15deg)",
//           display: { xs: "none", md: "block" },
//         }}
//       >
//         <LocalHospitalIcon sx={{ fontSize: 120, color: "#ffffff" }} />
//       </Box>

//       <Box
//         sx={{
//           position: "absolute",
//           bottom: "10%",
//           right: "5%",
//           opacity: 0.06,
//           transform: "rotate(15deg)",
//           display: { xs: "none", md: "block" },
//         }}
//       >
//         <HealingIcon sx={{ fontSize: 100, color: "#fefeff" }} />
//       </Box>

//       <Box
//         sx={{
//           // position: "relative",
//           zIndex: 5,
//           width: "100%",
//           minHeight: "100svh",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         <Container maxWidth="xl" sx={{ py: { xs: 10, sm: 10, md: 12 } }}>

//           {/* ================== CINEMATIC HEADER ================== */}
//           <Box sx={{ textAlign: "center", mb: { xs: 2, sm: 2, md: 2 } }}>
//             <Typography
//               sx={{
//                 fontSize: { xs: "clamp(34px, 7vw, 50px)", sm: "clamp(44px, 6vw, 62px)", md: "clamp(52px, 5.5vw, 65px)" },
//                 fontWeight: 800,
//                 lineHeight: 1.05,
//                 color: "white",
//                 maxWidth: 1150,
//                 mx: "auto",
//                 letterSpacing: "-1.5px",
//                 textShadow: "0 10px 30px rgba(0,0,0,0.8)"
//               }}
//             >
//               Transforming Healthcare with{" "}
//               <Box
//                 component="span"
//                 sx={{
//                   background: "linear-gradient(40deg, #1b4dff, #e7edf0, #1b4dff)",
//                   backgroundSize: "300% 100%",
//                   WebkitBackgroundClip: "text",
//                   WebkitTextFillColor: "transparent",
//                   display: "inline-block",
//                   animation: `${textGradient} 8s ease infinite`,
//                 }}
//               >
//                 AI-Driven
//               </Box>{" "}
//               Innovation
//             </Typography>
//           </Box>

//           {/* ================== 3D STAGE CAROUSEL ================== */}
//           <Box
//             {...swipeHandlers}
//             sx={{
//               width: "100%",
//               position: "relative",
//               px: { xs: 0, sm: 2, md: 4 },
//               perspective: "2200px", // Wide lens for deep 3D
//               // Massive ambient stage glow 
//               "&::before": {
//                 content: '""',
//                 position: "absolute",
//                 top: "80%",
//                 left: "50%",
//                 transform: "translate(-50%, -50%)",
//                 width: { xs: "90%", md: "70%" },
//                 height: "5%",
//                 zIndex: -1,
//               }
//             }}
//           >

//             {/* ================== TRACK ================== */}
//             <Box
//               sx={{
//                 position: "relative",
//                 width: "100%",
//                 height: { xs: 500, sm: 550, md: 630 },
//                 overflow: "visible",
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
//                         transform: `translate3d(0, 0, ${t.translateZ}px) rotateY(${t.rotateY}deg) scale(${t.scale})`,
//                         opacity: t.opacity,
//                         zIndex: t.zIndex,
//                         transition: `transform 0.8s cubic-bezier(0.22, 0.61, 0.36, 1), opacity 0.6s ease, left 0.8s cubic-bezier(0.22, 0.61, 0.36, 1)`,
//                         willChange: "transform, opacity, left",
//                         backfaceVisibility: "hidden",
//                       }}
//                     >
//                       <Card
//                         onClick={() => router.push(`/${product.slug}`)}
//                         onMouseEnter={() => { setHoveredCard(product.id); setIsPaused(true); }}
//                         onMouseLeave={() => { setHoveredCard(null); setIsPaused(false); }}
//                         sx={{
//                           position: "relative",
//                           bgcolor: isActive ? "rgba(20, 25, 45, 0.7)" : "rgba(10, 15, 30, 0.6)",
//                           border: "1px solid rgba(255,255,255,0.1)",
//                           borderRadius: "28px",
//                           p: { xs: 3, md: 4 },
//                           height: "100%",
//                           minHeight: { xs: 420, md: 400 },
//                           cursor: "pointer",
//                           transition: "all 0.4s cubic-bezier(0.22, 0.61, 0.36, 1)",
//                           overflow: "hidden",

//                           "&::before": {
//                             content: '""',
//                             position: "absolute",
//                             inset: 0,
//                             background: isActive
//                               ? `linear-gradient(180deg, ${product.glow.replace("0.55", "0.3")}, transparent 40%)`
//                               : "linear-gradient(180deg, rgba(255,255,255,0.05), transparent 30%)",
//                             pointerEvents: "none",
//                             zIndex: 1
//                           },

//                           // Animated Conic Border Glow
//                           "&::after": {
//                             content: '""',
//                             position: "absolute",
//                             inset: -2,
//                             borderRadius: "inherit",
//                             padding: "2px",
//                             background: isActive
//                               ? `conic-gradient(from 0deg, transparent 10%, ${product.gradient}, transparent 90%)`
//                               : "transparent",
//                             WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
//                             WebkitMaskComposite: "xor",
//                             maskComposite: "exclude",
//                             opacity: isActive ? 1 : 0,
//                             animation: isActive ? `${rotateGlow} 6s linear infinite` : "none",
//                             pointerEvents: "none"
//                           },

//                           "&:hover": {
//                             transform: "translateY(-10px) scale(1.02)",
//                           }
//                         }}
//                       >


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
//                           {/* Image Floater */}
//                           <Box
//                             sx={{
//                               position: "relative",
//                               width: { xs: "100%", md: 340 },
//                               height: { xs: 160, md: 180 },
//                               borderRadius: "20px",
//                               overflow: "hidden",
//                               mx: "auto",
//                               transition: "filter 0.4s"
//                             }}
//                           >
//                             <Image
//                               src={product.image}
//                               alt={product.title}

//                               fill
//                               style={{
//                                 objectFit: "cover",

//                                 maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
//                                 WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 100%)"
//                               }}
//                             />
//                           </Box>

//                           <Box sx={{ height: 10 }} />

//                           {/* Icon Badge */}
//                           <Box
//                             sx={{
//                               position: "relative",
//                               width: { xs: 70, md: 140 },
//                               height: { xs: 50, md: 60 },
//                               // borderRadius : {xs:3 , md : 8},
//                               mx: "auto",
//                               mb: 1,
//                               display: "flex",
//                               justifyContent: "center",
//                               alignItems: "center",
//                               // filter: isActive ? `drop-shadow(0 0 20px ${product.glow})` : "none"
//                             }}
//                           >
//                             <Image src={product.icon} alt={product.title} fill style={{ objectFit: "contain" }} />
//                           </Box>

//                           <Typography
//                             sx={{
//                               color: isActive ? product.textColor : "rgba(255,255,255,0.4)",
//                               fontSize: "11px",
//                               fontWeight: 800,
//                               letterSpacing: "3px",
//                               textTransform: "uppercase",
//                               mb: 1,
//                               transition: "color 0.4s"
//                             }}
//                           >
//                             {product.category}
//                           </Typography>

//                           <Typography
//                             sx={{
//                               color: "#fff",
//                               fontSize: { xs: "26px", md: "30px" },
//                               fontWeight: 900,
//                               mb: 1,
//                               transition: "all 0.4s",
//                               textShadow: isActive ? `0 0 30px ${product.glow}, 0 5px 15px rgba(0,0,0,0.5)` : "0 5px 15px rgba(0,0,0,0.5)"
//                             }}
//                           >
//                             {product.title}
//                           </Typography>

//                           <Typography
//                             sx={{
//                               color: isActive ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.5)",
//                               fontSize: { xs: "13px", md: "14px" },
//                               lineHeight: 1.6,
//                               maxWidth: "90%",
//                               mx: "auto",
//                               mb: 4,
//                               display: { xs: "none", sm: "block" },
//                               fontWeight: 400
//                             }}
//                           >
//                             {product.description}
//                           </Typography>

//                           {/* Ultra-Premium Pill Button */}
//                           <Box
//                             sx={{
//                               display: "inline-flex",
//                               alignItems: "center",
//                               gap: 1.5,
//                               px: 5,
//                               py: 1.4,
//                               borderRadius: "50px",
//                               background: isActive ? product.gradient : "rgba(255,255,255,0.08)",
//                               color: isActive ? "#fff" : "rgba(255,255,255,0.7)",
//                               fontSize: "13px",
//                               fontWeight: 800,
//                               transition: "all 0.3s",
//                               border: isActive ? "none" : "1px solid rgba(255,255,255,0.2)",
//                               boxShadow: isActive ? `0 15px 40px ${product.glow}` : "none",
//                               "&:hover": {
//                                 transform: "scale(1.08) translateY(-2px)"
//                               }
//                             }}
//                           >
//                             {isMobile ? "View" : "Explore Solution"}
//                             <span style={{ fontSize: "18px", lineHeight: 1 }}>→</span>
//                           </Box>
//                         </CardContent>
//                       </Card>
//                     </Box>
//                   );
//                 })}
//               </Box>
//             </Box>

//             {/* ================== CONTROLS ================== */}
//             {/* <Box sx={{ display: "flex", justifyContent: "center", gap: 1.5, alignItems: "center" }}>
//               {products.map((_, index) => {
//                 const isActive = currentIndex === index;
//                 return (
//                   <Box
//                     key={index}
//                     onClick={() => handleDotClick(index)}
//                     sx={{
//                       width: isActive ? 44 : 8,
//                       height: 8,
//                       borderRadius: "20px",
//                       background: isActive 
//                         ? `linear-gradient(90deg, ${products[index].gradient.split(',')[0]}, ${products[index].gradient.split(',')[1]})` 
//                         : "rgba(255,255,255,0.15)",
//                       cursor: "pointer",
//                       transition: "all 0.4s cubic-bezier(0.22, 0.61, 0.36, 1)",
//                       boxShadow: isActive ? `0 0 30px ${products[index].glow}` : "none",
//                       "&:hover": {
//                         bgcolor: "rgba(255,255,255,0.4)"
//                       }
//                     }}
//                   />
//                 );
//               })}
//             </Box> */}

//             {/* ================== CTA BUTTONS ================== */}
//             <Stack
//               direction={{ xs: "column", sm: "row" }}
//               spacing={3}
//               justifyContent="center"
//               alignItems="center"
//               mt={{ xs: 6, md: 0 }}
//             >
//               <Button
//                 variant="contained"
//                 size="large"
//                 onClick={() => setOpenDemo(true)}
//                 sx={{
//                   background: " #1b4dff",
//                   color: "#fff",
//                   px: { xs: 6, md: 6 },
//                   py: 1.5,
//                   fontWeight: 900,
//                   fontSize: "17px",
//                   borderRadius: "50px",
//                   textTransform: "none",
//                   letterSpacing: "0.5px",
//                   boxShadow: "0 15px 50px rgba(27,77,255, 0.6)",
//                   border: "1px solid rgba(255,255,255,0.3)",
//                   "&:hover": {
//                     boxShadow: "0 20px 70px rgba(27,77,255, 0.9)",
//                     transform: "translateY(-4px) scale(1.02)",
//                     background: "linear-gradient(150deg, #cad5d8, #1b4dff)"
//                   }
//                 }}
//               >
//                 Schedule a Demo
//               </Button>
//               <RequestDemoModal open={openDemo} onClose={() => setOpenDemo(false)} />

//               <Button
//                 variant="outlined"
//                 size="large"
//                 onClick={() => router.push("#")}
//                 sx={{
//                   px: { xs: 6, md: 6 },
//                   py: 1.5,
//                   fontWeight: 700,
//                   fontSize: "17px",
//                   borderRadius: "50px",
//                   textTransform: "none",
//                   border: "2px solid rgba(255,255,255,0.25)",
//                   color: "#fff",
//                   bgcolor: "rgba(255,255,255,0.03)",
//                   "&:hover": {
//                     borderColor: "#fff",
//                     bgcolor: "rgba(255,255,255,0.1)",
//                     transform: "translateY(-4px)",
//                     boxShadow: "0 10px 30px rgba(255,255,255,0.1)"
//                   }
//                 }}
//               >
//                 Download Brochure
//               </Button>
//             </Stack>

//           </Box>
//         </Container>

//         {/* Premium Floating Arrows */}
//         <IconButton
//           onClick={handlePrev}
//           sx={{
//             position: "absolute",
//             left: { xs: "3%", md: "8%" },
//             top: "50%",
//             zIndex: 10,
//             color: "#fff",
//             border: "1px solid rgba(255,255,255,0.2)",
//             bgcolor: "rgba(10, 15, 30, 0.5)",
//             // backdropFilter: "blur(10px)",
//             width: 60, height: 60,
//             "&:hover": { bgcolor: "rgba(13, 64, 218, 0.4)", borderColor: "#f5f8f8", boxShadow: "0 0 30px rgba(24, 48, 230, 0.4)" },
//             display: { xs: "none", sm: "flex" }
//           }}
//         >
//           <ChevronLeftIcon sx={{ fontSize: 30 }} />
//         </IconButton>
//         <IconButton
//           onClick={handleNext}
//           sx={{
//             position: "absolute",
//             right: { xs: "3%", md: "8%" },
//             top: "50%",
//             zIndex: 10,
//             color: "#fff",
//             border: "1px solid rgba(255,255,255,0.2)",
//             bgcolor: "rgba(10, 15, 30, 0.5)",
//             // backdropFilter: "blur(10px)",
//             width: 60, height: 60,
//             "&:hover": { bgcolor: "rgba(13, 64, 218, 0.4)", borderColor: "#f5f8f8", boxShadow: "0 0 30px rgba(24, 48, 230, 0.4)" },
//             display: { xs: "none", sm: "flex" }
//           }}
//         >
//           <ChevronRightIcon sx={{ fontSize: 30 }} />
//         </IconButton>
//       </Box>
//     </Box>
//   );
// }








// "use client";

// import Image from "next/image";
// import { keyframes } from "@mui/system";
// import { useRouter } from "next/navigation";
// import { useEffect, useState, useRef } from "react";
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import { useSwipeable } from "react-swipeable";
// import RequestDemoModal from "./popups/RequestDemoModal";
// import { Box, Container, Typography, IconButton, useTheme, useMediaQuery, Button, Stack } from "@mui/material";

// // ==================== CINEMATIC ANIMATIONS ====================

// const textGradient = keyframes`
//   0% { background-position: 0% 50%; }
//   50% { background-position: 100% 50%; }
//   100% { background-position: 0% 50%; }
// `;

// const fadeInUp = keyframes`
//   0% { opacity: 0; transform: translateY(30px); }
//   100% { opacity: 1; transform: translateY(0); }
// `;

// // ==================== DATA ====================
// const products = [
//   {
//     id: 1,
//     icon: "/logos/white/BluVital-logo.png",
//     title: "VitalsChair™",
//     image: "/hero-popup/chair.webp",
//     category: "Clinical Solutions",
//     description: "Smart patient monitoring seat for instant, multi-vital health tracking",
//     slug: "products/vitals-chair",
//     gradient: "linear-gradient(135deg, #1b4dff, #66a6ff)",
//     glow: "rgba(102,166,255, 0.55)",
//     textColor: "#89f7fe",
//   },
//   {
//     id: 9,
//     icon: "/logos/white/pole.png",
//     title: "VitalsPole™",
//     image: "/hero-popup/pole.webp",
//     category: "Clinical Solutions",
//     description: "Smart patient monitoring pole, multi-vital health tracking",
//     slug: "products/vitals-pole",
//     gradient: "linear-gradient(135deg, #1b4dff, #66a6ff)",
//     glow: "rgba(102,166,255, 0.55)",
//     textColor: "#aace46",
//   },
//   {
//     id: 10,
//     icon: "/logos/white/neonatal.png",
//     title: "BluNeonatal™",
//     image: "/hero-popup/child.webp",
//     category: "Clinical Solutions",
//     description: "Smart neonatal monitoring solution for real-time newborn vital tracki ng",
//     slug: "products/blu-neonatal",
//     gradient: "linear-gradient(135deg, #1b4dff, #66a6ff)",
//     glow: "rgba(102,166,255, 0.55)",
//     textColor: "#daa351",
//   },
//   {
//     id: 11,
//     icon: "/logos/white/briefcase.png",
//     title: "VitalsBriefcase™",
//     image: "/hero-popup/box.webp",
//     category: "Clinical Solutions",
//     description: "Smart patient monitoring Briefcase for instant, multi-vital health tracking",
//     slug: "products/vitals-briefcase",
//     gradient: "linear-gradient(135deg, #1b4dff, #66a6ff)",
//     glow: "rgba(102,166,255, 0.55)",
//     textColor: "#bb78e2",
//   },

//   {
//     id: 2,
//     icon: "/logos/white/BluNotes-logo.png",
//     title: "BluNotes™",
//     image: "/hero-popup/blunotes.webp",
//     category: "Community Health",
//     description: "Automated medical documentation from clinician-patient conversations",
//     slug: "products/blu-notes",
//     gradient: "linear-gradient(135deg, #1b4dff, #66a6ff)",
//     glow: "rgba(102,166,255, 0.55)",
//     textColor: "#f093fb",
//   },
//   {
//     id: 3,
//     icon: "/logos/white/BluAccess-logo.png",
//     image: "/recent-blog/blog2.webp",
//     title: "BluAccess™",
//     category: "Access & Security",
//     description: "Smart, secure access & workflow automation across hospital and industries",
//     slug: "products/blu-access",
//     gradient: "linear-gradient(135deg, #1b4dff, #66a6ff)",
//     glow: "rgba(102,166,255, 0.55)",
//     textColor: "#4facfe",
//   },
//   {
//     id: 4,
//     icon: "/logos/white/BluHealth-logo.png",
//     title: "BluHealth™",
//     image: "/hero-popup/bluhealth.webp",
//     category: "Digital Health Platform",
//     description: "Centralized health intelligence portal for real-time, connected care",
//     slug: "products/blu-health",
//     gradient: "linear-gradient(135deg, #1b4dff, #66a6ff)",
//     glow: "rgba(102,166,255, 0.55)",
//     textColor: "#43e97b",
//   },
//   {
//     id: 5,
//     icon: "/logos/white/BluId-logo.png",
//     title: "BluID™",
//     image: "/hero-popup/bluid.webp",
//     category: "Digital Identity",
//     description: "Seamless healthcare access via blockchain biometrics",
//     slug: "products/blu-id",
//     gradient: "linear-gradient(135deg, #1b4dff, #66a6ff)",
//     glow: "rgba(102,166,255, 0.55)",
//     textColor: "#fa709a",
//   },
//   {
//     id: 6,
//     icon: "/logos/white/BluMental-logo.png",
//     title: "BluMental™",
//     image: "/hero-popup/blumental.webp",
//     category: "Mental Wellness",
//     description: "An intelligent way to understand and support mental health",
//     slug: "products/blu-mental-health",
//     gradient: "linear-gradient(135deg, #1b4dff, #66a6ff)",
//     glow: "rgba(102,166,255, 0.55)",
//     textColor: "#a18cd1",
//   },
//   {
//     id: 7,
//     icon: "/logos/white/BluDms-logo.png",
//     title: "BluDMS™",
//     image: "/hero-popup/bludms.webp",
//     category: "Secure Communication",
//     description: "Intelligent document management for healthcare operations",
//     slug: "products/blu-dms",
//     gradient: "linear-gradient(135deg, #1b4dff, #66a6ff)",
//     glow: "rgba(102,166,255, 0.55)",
//     textColor: "#fccb90",
//   },
//   {
//     id: 8,
//     icon: "/logos/white/BluAsha-logo.png",
//     title: "BluASHA™",
//     image: "/hero-popup/bluasha.webp",
//     category: "AI Clinical Documentation",
//     description: "Conversational AI for patient triage and engagement using natural language",
//     slug: "products/blu-asha",
//     gradient: "linear-gradient(135deg, #1b4dff, #66a6ff)",
//     glow: "rgba(102,166,255, 0.55)",
//     textColor: "#667eea",
//   },
// ];

// // ==================== COMPONENT ====================
// export default function HeroSection() {
//   const router = useRouter();
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("md"));
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isAutoScrolling, setIsAutoScrolling] = useState(true);
//   const [isPaused, setIsPaused] = useState(false);
//   const autoScrollInterval = useRef(null);
//   const [openDemo, setOpenDemo] = useState(false);

//   const totalCards = products.length;

//   // Auto-scroll function
//   useEffect(() => {
//     if (isAutoScrolling && !isPaused) {
//       autoScrollInterval.current = setInterval(() => {
//         setCurrentIndex((prev) => (prev + 1) % totalCards);
//       }, 5000);
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

//   const activeProduct = products[currentIndex];

//   return (
//     <Box
//       {...swipeHandlers}
//       sx={{
//         height: "100vh", // Full screen height
//         width: "100%",
//         overflow: "hidden",
//         position: "relative",
//        background:
//       "radial-gradient(1200px 600px at 70% 50%, rgba(59,130,246,0.15), transparent 60%), linear-gradient(180deg, #020617 0%, #020617 100%)",
//         marginTop: 9,
//       }}
//     >



//       {/* ================== FULL-SCREEN BACKGROUND IMAGES (Crossfade) ================== */}
//       {products.map((product, index) => (
//         <Box
//           key={product.id}
//           sx={{
//             position: "absolute",
//             inset: 0,
//             zIndex: 1,
//             opacity: currentIndex === index ? 1 : 0,
//             pointerEvents: currentIndex === index ? "auto" : "none",
//           }}
//         >
//           <Image
//             src={product.image}
//             alt={product.title}
//             fill
//             priority={index === 0}
//             sizes="100vw"
//             style={{
//               objectFit: "fill",
//               objectPosition: "center",
//             }}
//           />

//           {/* DARK OVERLAY FOR TEXT READABILITY */}
//           <Box
//             sx={{
//               position: "absolute",
//               inset: 0,
//               background: "linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.1) 100%)",
//             }}
//           />
//         </Box>
//       ))}

//       {/* ================== OVERLAID CONTENT ================== */}
//       <Container
//         maxWidth="xl"
//         sx={{
//           position: "relative",
//           zIndex: 2,
//           height: "100%",
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//           alignItems: "flex-start",
//           px: { xs: 4, md: 8 },
//         }}
//       >
//         <Box
//           key={currentIndex}
//           sx={{
//             maxWidth: { xs: "100%", md: "60%" },
//             textAlign: "left",
//           }}
//         >
//           <Typography
//             sx={{
//               display: "inline-flex",
//               alignItems: "center",
//               gap: 1,
//               fontSize: "13px",
//               fontWeight: 700,
//               letterSpacing: "3px",
//               textTransform: "uppercase",
//               color: "rgba(255,255,255,0.8)",
//               mb: 4,
//               animation: `${fadeInUp} 0.6s ease-out both`,
//             }}
//           >
//             <Box component="span" sx={{ width: 30, height: 1, bgcolor: activeProduct.textColor }} />
//             {activeProduct.category}
//           </Typography>

//           <Typography
//             sx={{
//               fontSize: { xs: "clamp(45px, 8vw, 70px)", md: "clamp(60px, 7vw, 100px)" },
//               fontWeight: 900,
//               lineHeight: 1.05,
//               color: "white",
//               letterSpacing: "-3px",
//               mb: 4,
//               textShadow: "0 10px 30px rgba(0,0,0,0.5)",
//               animation: `${fadeInUp} 0.6s ease-out 0.1s both`,
//             }}
//           >
//             {activeProduct.title}
//           </Typography>

//           <Typography
//             sx={{
//               color: "rgba(255,255,255,0.9)",
//               fontSize: { xs: "16px", md: "20px" },
//               maxWidth: "550px",
//               mb: 6,
//               lineHeight: 1.7,
//               textShadow: "0 4px 10px rgba(0,0,0,0.8)",
//               animation: `${fadeInUp} 0.6s ease-out 0.2s both`,
//             }}
//           >
//             {activeProduct.description}
//           </Typography>

//           {/* CTA Buttons */}
//           <Stack
//             direction={{ xs: "column", sm: "row" }}
//             spacing={2}
//             alignItems="flex-start"
//             sx={{
//               animation: `${fadeInUp} 0.6s ease-out 0.3s both`,
//             }}
//           >
//             <Button
//               variant="contained"
//               size="large"
//               onClick={() => setOpenDemo(true)}
//               sx={{
//                 background: "#1b4dff",
//                 color: "white",
//                 px: 5,
//                 py: 1.5,
//                 fontWeight: 800,
//                 fontSize: "16px",
//                 borderRadius: "50px",
//                 textTransform: "none",
//                 boxShadow: "0 10px 40px rgba(255,255,255,0.2)",
//                 "&:hover": { transform: "translateY(-3px)", background: "#566ec5" }
//               }}
//             >
//               Request a Demo →
//             </Button>
//             <Button
//               variant="outlined"
//               size="large"
//               onClick={() => router.push(`/${activeProduct.slug}`)}
//               sx={{
//                 px: 5,
//                 py: 1.5,
//                 fontWeight: 700,
//                 fontSize: "16px",
//                 borderRadius: "50px",
//                 textTransform: "none",
//                 border: "2px solid rgba(255,255,255,0.5)",
//                 color: "#fff",
//                 bgcolor: "rgba(255,255,255,0.05)",
//                 backdropFilter: "blur(5px)",
//                 "&:hover": { borderColor: "#fff", bgcolor: "rgba(255,255,255,0.15)" }
//               }}
//             >
//               Explore Product
//             </Button>
//           </Stack>
//         </Box>
//       </Container>

//       {/* ================== SLIDER OPTIONS (Bottom Right) ================== */}
//       <Box
//         sx={{
//           position: "absolute",
//           bottom: "100px",
//           right: { xs: "20px", md: "60px" },
//           zIndex: 10,
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "flex-end",
//           gap: 2,
//         }}
//       >
//         {/* Navigation Arrows */}
//         <Stack direction="row" spacing={1}>
//           <IconButton
//             onClick={handlePrev}
//             sx={{
//               color: "#fff",
//               border: "1px solid rgba(255,255,255,0.3)",
//               bgcolor: "rgba(0,0,0,0.4)",
//               backdropFilter: "blur(10px)",
//               width: 55,
//               height: 55,
//               "&:hover": { bgcolor: "rgba(255,255,255,0.2)" },
//             }}
//           >
//             <ChevronLeftIcon />
//           </IconButton>
//           <IconButton
//             onClick={handleNext}
//             sx={{
//               color: "#fff",
//               border: "1px solid rgba(255,255,255,0.3)",
//               bgcolor: "rgba(0,0,0,0.4)",
//               backdropFilter: "blur(10px)",
//               width: 55,
//               height: 55,
//               "&:hover": { bgcolor: "rgba(255,255,255,0.2)" },
//             }}
//           >
//             <ChevronRightIcon />
//           </IconButton>
//         </Stack>

//         {/* Progress Indicators / Dots */}
//         <Stack direction="row" spacing={1} alignItems="center">
//           {products.map((_, index) => {
//             const isActive = currentIndex === index;
//             return (
//               <Box
//                 key={index}
//                 onClick={() => {
//                   setCurrentIndex(index);
//                   setIsAutoScrolling(false);
//                   setTimeout(() => setIsAutoScrolling(true), 5000);
//                 }}
//                 sx={{
//                   width: isActive ? 50 : 10,
//                   height: 10,
//                   borderRadius: "50px",
//                   background: isActive
//                     ? `linear-gradient(90deg, ${products[index].textColor}, #ffffff)`
//                     : "rgba(255,255,255,0.4)",
//                   cursor: "pointer",
//                   transition: "all 0.4s cubic-bezier(0.22, 0.61, 0.36, 1)",
//                   boxShadow: isActive ? `0 0 15px ${products[index].glow}` : "none",
//                   "&:hover": { bgcolor: "rgba(255,255,255,0.9)" }
//                 }}
//               />
//             );
//           })}
//         </Stack>
//       </Box>

//       <RequestDemoModal open={openDemo} onClose={() => setOpenDemo(false)} />
//     </Box>
//   );
// }












"use client";

import Image from "next/image";
import { keyframes } from "@mui/system";
import { useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useSwipeable } from "react-swipeable";
import RequestDemoModal from "./popups/RequestDemoModal";
import { Box, Container, Typography, IconButton, useTheme, useMediaQuery, Button, Stack } from "@mui/material";

// ==================== CINEMATIC ANIMATIONS ====================
const textGradient = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const fadeInUp = keyframes`
  0% { opacity: 0; transform: translateY(30px); }
  100% { opacity: 1; transform: translateY(0); }
`;

// ==================== DATA (COMPLETELY UNCHANGED FROM YOUR ORIGINAL) ====================
const products = [
  {
    id: 1,
    icon: "/logos/white/BluVital-logo.png",
    title: "VitalsChair™",
    image: "/hero-popup/chair.png",
    category: "Clinical Solutions",
    description: "Introducing VitalsChair™, a groundbreaking innovation in patient health assessments—designed to deliver a complete set of vital measurements in a single, effortless sitting. Built with precision, powered by AI, and seamlessly integrated with the BluHealth™ Portal, VitalsChair™ redefines the way healthcare professionals collect, analyze, and monitor patient health data.",
    slug: "products/vitals-chair",
    gradient: "linear-gradient(135deg, #1b4dff, #66a6ff)",
    glow: "rgba(102,166,255, 0.55)",
    textColor: "#89f7fe",
  },
  {
    id: 9,
    icon: "/logos/white/pole.png",
    title: "VitalsPole™",
    image: "/hero-popup/pole.png",
    category: "Clinical Solutions",
    description: "Smart patient monitoring pole, multi-vital health tracking",
    slug: "products/vitals-pole",
    gradient: "linear-gradient(135deg, #1b4dff, #66a6ff)",
    glow: "rgba(102,166,255, 0.55)",
    textColor: "#aace46",
  },
  {
    id: 10,
    icon: "/logos/white/neonatal.png",
    title: "BluNeonatal™",
    image: "/hero-popup/child.png",
    category: "Clinical Solutions",
    description: "BluNeonatal represents the next generation of neonatal intensive care monitoring. Combining advanced medical-grade sensors, precision imaging, and AI-powered analytics, BluNeonatal™ delivers autonomous, continuous monitoring of premature and critically ill newborns. Built with cutting-edge embedded systems and artificial intelligence, it provides real-time telemetry, intelligent alarm management, and predictive analytics to support NICU teams in delivering superior patient outcomes while reducing alarm fatigue and improving workflow efficiency.",
    slug: "products/blu-neonatal",
    gradient: "linear-gradient(135deg, #1b4dff, #66a6ff)",
    glow: "rgba(102,166,255, 0.55)",
    textColor: "#daa351",
  },
  {
    id: 11,
    icon: "/logos/white/briefcase.png",
    title: "VitalsBriefcase™",
    image: "/hero-popup/box.png",
    category: "Clinical Solutions",
    description: "Smart patient monitoring Briefcase for instant, multi-vital health tracking",
    slug: "products/vitals-briefcase",
    gradient: "linear-gradient(135deg, #1b4dff, #66a6ff)",
    glow: "rgba(102,166,255, 0.55)",
    textColor: "#bb78e2",
  },
  
  {
    id: 3,
    icon: "/logos/white/BluAccess-logo.png",
    image: "/hero-popup/face.png",
    title: "BluAccess™",
    category: "Access & Security",
    description: "BluAccess™ delivers unparalleled operational intelligence through its comprehensive suite of features, including customizable access zones, multi-factor authentication protocols, and dynamic permissions management—all while maintaining detailed audit trails for regulatory compliance",
    slug: "products/blu-access",
    gradient: "linear-gradient(135deg, #1b4dff, #66a6ff)",
    glow: "rgba(102,166,255, 0.55)",
    textColor: "#4facfe",
  },

   {
    id: 8,
    icon: "/logos/white/BluAsha-logo.png",
    title: "BluASHA™",
    image: "/blu-asha/hero-asha-2.png",
    category: "AI Clinical Documentation",
    description: "ASHA workers spend 40% of their time on manual record-keeping and reporting, reducing time available for actual healthcare delivery. Critical health data gets lost, delayed, or becomes illegible.Rural areas lack reliable internet connectivity, making digital health systems unusable when workers need them most. Existing solutions fail when connectivity is poor or absent.",
    slug: "products/blu-asha",
    gradient: "linear-gradient(135deg, #1b4dff, #66a6ff)",
    glow: "rgba(102,166,255, 0.55)",
    textColor: "#667eea",
  },

  {
    id: 2,
    icon: "/logos/white/BluNotes-logo.png",
    title: "BluNotes™",
    image: "/hero-popup/blunotes.png",
    category: "Community Health",
    description: "BluNotes is an innovative medical conversation capture and documentation system that seamlessly connects mobile devices and computers to transform patient-provider conversations into structured medical documentation.",
    slug: "products/blu-notes",
    gradient: "linear-gradient(135deg, #1b4dff, #66a6ff)",
    glow: "rgba(102,166,255, 0.55)",
    textColor: "#f093fb",
  },

  {
    id: 4,
    icon: "/logos/white/BluHealth-logo.png",
    title: "BluHealth™",
    image: "/hero-popup/bluhealth.png",
    category: "Digital Health Platform",
    description: "The BluHealth™ Portal represents a paradigm shift in clinical informatics—transcending traditional electronic medical record systems through sophisticated integration of artificial intelligence and patient-centric architecture. This next-generation EMR/EHR/HIS ecosystem leverages advanced large language models and agentic AI infrastructure to create a seamless healthcare delivery platform that operates with unprecedented reliability and efficiency.",
    slug: "products/blu-health",
    gradient: "linear-gradient(135deg, #1b4dff, #66a6ff)",
    glow: "rgba(102,166,255, 0.55)",
    textColor: "#43e97b",
  },
  {
    id: 5,
    icon: "/logos/white/BluId-logo.png",
    title: "BluID™",
    image: "/hero-popup/bluid.webp",
    category: "Digital Identity",
    description: "BluID™ is a revolutionary 14-digit unique bio-medical identifier that transforms healthcare management by centralizing your complete medical profile in one secure digital location. This unified medical identity system empowers patients with unprecedented control over their health data while streamlining healthcare delivery across the entire ecosystem of providers, laboratories, and insurers.",
    slug: "products/blu-id",
    gradient: "linear-gradient(135deg, #1b4dff, #66a6ff)",
    glow: "rgba(102,166,255, 0.55)",
    textColor: "#fa709a",
  },
  {
    id: 6,
    icon: "/logos/white/BluMental-logo.png",
    title: "BluMental™",
    image: "/hero-popup/blumental.png",
    category: "Mental Wellness",
    description: "The BluHealth Mental Health module delivers real-time, AI-driven assessments that help clinicians evaluate, interpret, and act on patient mental health data with confidence. Using clinically validated screening tools enhanced by explainable AI, the platform instantly analyzes patient responses to generate structured insights, severity scoring, and care guidance—right at the point of care.",
    slug: "products/blu-mental-health",
    gradient: "linear-gradient(135deg, #1b4dff, #66a6ff)",
    glow: "rgba(102,166,255, 0.55)",
    textColor: "#a18cd1",
  },
 
  {
    id: 7,
    icon: "/logos/white/BluDms-logo.png",
    title: "BluDMS™",
    image: "/hero-popup/bludms.webp",
    category: "Secure Communication",
    description: "BluDMS™ represents the pinnacle of clinical document architecture innovation—a sophisticated medical document ecosystem that transcends traditional information management paradigms through the seamless integration of artificial intelligence and advanced natural language processing. This revolutionary platform eliminates the cognitive burden of document management that historically plagues healthcare professionals, transforming unstructured clinical documentation into actionable medical intelligence.",
    slug: "products/blu-dms",
    gradient: "linear-gradient(135deg, #1b4dff, #66a6ff)",
    glow: "rgba(102,166,255, 0.55)",
    textColor: "#fccb90",
  },

];

// ==================== COMPONENT ====================
export default function HeroSection() {
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const autoScrollInterval = useRef(null);
  const [openDemo, setOpenDemo] = useState(false);

  const totalCards = products.length;

  // Auto-scroll
  // useEffect(() => {
  //   if (isAutoScrolling && !isPaused) {
  //     autoScrollInterval.current = setInterval(() => {
  //       setCurrentIndex((prev) => (prev + 1) % totalCards);
  //     }, 6000);
  //   }
  //   return () => {
  //     if (autoScrollInterval.current) clearInterval(autoScrollInterval.current);
  //   };
  // }, [isAutoScrolling, isPaused, totalCards]);

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

  const activeProduct = products[currentIndex];

  return (
    <Box
      {...swipeHandlers}
      sx={{
        height: "100vh",
        width: "100%",
        overflow: "hidden",
        position: "relative",
        // EXACT DEEP BLUE CINEMATIC GRADIENT FROM REFERENCE
        background: "radial-gradient(circle at 70% 50%, #0F1E5C 0%, #060B20 45%, #040913 100%)",
        color: "#fff",
      }}
    >
      {/* ================== SUBTLE GLOW ORBS (Background texture) ================== */}
      <Box sx={{ position: "absolute", top: "10%", right: "20%", width: 600, height: 600, bgcolor: "rgba(27, 77, 255, 0.1)", borderRadius: "50%", filter: "blur(100px)", zIndex: 0 }} />
      <Box sx={{ position: "absolute", bottom: "10%", left: "10%", width: 400, height: 400, bgcolor: "rgba(255, 255, 255, 0.05)", borderRadius: "50%", filter: "blur(80px)", zIndex: 0 }} />

      {/* ================== CONTENT WRAPPER ================== */}
      <Container
        maxWidth="xl"
        sx={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          display: "flex",
          alignItems: "center",
          px: { xs: 4, md: 10 },
        }}
      >
        {/* LEFT SIDE: DYNAMIC PRODUCT TEXT */}
        <Box
          key={currentIndex} // Re-mounts to trigger animations when slide changes
          sx={{
            width: { xs: "100%", md: "55%" },
            textAlign: "left",
            pr: { md: 4 },
          }}
        >
          {/* Top Small Category (Uses activeProduct.category) */}
          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "#1b4dff",
              mb: 3,
              display: "flex",
              alignItems: "center",
              gap: 1,
              animation: `${fadeInUp} 0.6s ease-out both`,
            }}
          >
            AI • {activeProduct.category.toUpperCase()}
          </Typography>

          {/* Dynamic Product Title */}
          <Typography
            sx={{
              fontSize: { xs: "clamp(50px, 9vw, 80px)", md: "clamp(70px, 8vw, 80px)" },
              fontWeight: 800,
              lineHeight: 0.95,
              color: "white",
              letterSpacing: "-3px",
              mb: 5,
              animation: `${fadeInUp} 0.6s ease-out 0.1s both`,
            }}
          >
            {activeProduct.title}
          </Typography>

          {/* Dynamic Description */}
          <Typography
            sx={{
              color: "rgba(255,255,255,0.7)",
              fontSize: { xs: "16px", md: "20px" },
              maxWidth: "600px",
              mb: 6,
              lineHeight: 1.6,
              fontWeight: 400,
              animation: `${fadeInUp} 0.6s ease-out 0.2s both`,
            }}
          >
            {activeProduct.description}
          </Typography>

          {/* CTA Buttons */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            alignItems="flex-start"
            sx={{
              animation: `${fadeInUp} 0.6s ease-out 0.3s both`,
            }}
          >
            <Button
              variant="contained"
              size="large"
              onClick={() => setOpenDemo(true)}
              sx={{
                background: "#ffffff",
                color: "#040913",
                px: 4,
                py: 1.5,
                fontWeight: 700,
                fontSize: "15px",
                borderRadius: "50px",
                textTransform: "none",
                boxShadow: "0 10px 40px rgba(255,255,255,0.2)",
                "&:hover": { transform: "translateY(-2px)", background: "#e0e0e0" }
              }}
            >
              Request a demo →
            </Button>

            <Button
              variant="outlined"
              size="large"
              onClick={() => router.push(`/${activeProduct.slug}`)}
              sx={{
                px: 4,
                py: 1.5,
                fontWeight: 700,
                fontSize: "15px",
                borderRadius: "50px",
                textTransform: "none",
                border: "1px solid rgba(255,255,255,0.4)",
                color: "#fff",
                bgcolor: "rgba(255,255,255,0.05)",
                "&:hover": { borderColor: "#fff", bgcolor: "rgba(255,255,255,0.1)" }
              }}
            >
              Explore our products →
            </Button>
          </Stack>

          {/* ================== BOTTOM CATEGORY NAV (Static Labels) ================== */}
          <Stack
            direction="row"
            spacing={4}
            sx={{
              mt: 8,
              pt: 3,
              borderTop: "1px solid rgba(255,255,255,0.15)",
              width: "100%",
              maxWidth: "600px",
            }}
          >
            {["Clinical Devices", "Health Platforms", "Secure Access"].map((item) => (
              <Typography
                key={item}
                sx={{
                  fontSize: "12px",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.4)",
                  cursor: "pointer",
                  transition: "color 0.3s",
                  "&:hover": { color: "#fff" }
                }}
              >
                {item}
              </Typography>
            ))}
          </Stack>
        </Box>

        {/* RIGHT SIDE: FLOATING PRODUCT IMAGE */}
        <Box
          sx={{
            width: { xs: "100%", md: "45%" },
            height: { xs: "40vh", md: "70vh" },
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            mt: { xs: 4, md: 0 },
          }}
        >
          <Box
            key={currentIndex} // Re-trigger animation on slide change
            sx={{
              position: "relative",
              width: "100%",
              height: "100%",
              animation: `${fadeInUp} 0.8s ease-out 0.4s both`,
            }}
          >
            <Image
              src={activeProduct.image}
              alt={activeProduct.title}
              fill
              priority
              sizes="50vw"
              style={{
                objectFit: "contain",
                filter: "drop-shadow(0 30px 60px rgba(0,0,0,0.6))",
              }}
            />
          </Box>

          {/* ================== FEATURED SYSTEM LABEL (Dynamic) ================== */}
          <Box
            key={`label-${currentIndex}`}
            sx={{
              position: "absolute",
              bottom: -10,
              right: "5%",
              textAlign: "left",
              borderLeft: `2px solid ${activeProduct.textColor}`,
              pl: 2,
              animation: `${fadeInUp} 0.6s ease-out 0.5s both`,
            }}
          >
            <Typography sx={{ fontSize: "10px", fontWeight: 800, letterSpacing: "1.5px", color: activeProduct.textColor, mb: 0.5 }}>
              FEATURED SYSTEM
            </Typography>
            <Typography sx={{ fontSize: "14px", fontWeight: 800, color: "#fff", mb: 0.5 }}>
              {activeProduct.title}
            </Typography>
           
          </Box>
        </Box>
      </Container>

      {/* ================== CAROUSEL CONTROLS (Bottom Right) ================== */}
      <Box
        sx={{
          position: "absolute",
          bottom: "50px",
          right: { xs: "30px", md: "60px" },
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Stack direction="row" spacing={1} alignItems="center">
          {products.map((_, index) => {
            const isActive = currentIndex === index;
            return (
              <Box
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoScrolling(false);
                  setTimeout(() => setIsAutoScrolling(true), 5000);
                }}
                sx={{
                  width: isActive ? 40 : 8,
                  height: 8,
                  borderRadius: "50px",
                  background: isActive ? "#1b4dff" : "rgba(255,255,255,0.3)",
                  cursor: "pointer",
                  transition: "all 0.4s cubic-bezier(0.22, 0.61, 0.36, 1)",
                  "&:hover": { bgcolor: "rgba(255,255,255,0.7)" }
                }}
              />
            );
          })}
        </Stack>
        <Stack direction="row" spacing={1}>
          <IconButton
            onClick={handlePrev}
            sx={{
              color: "#fff",
              border: "1px solid rgba(255,255,255,0.2)",
              bgcolor: "rgba(255,255,255,0.05)",
              width: 45,
              height: 45,
              "&:hover": { bgcolor: "rgba(255,255,255,0.15)" },
            }}
          >
            <ChevronLeftIcon />
          </IconButton>
          <IconButton
            onClick={handleNext}
            sx={{
              color: "#fff",
              border: "1px solid rgba(255,255,255,0.2)",
              bgcolor: "rgba(255,255,255,0.05)",
              width: 45,
              height: 45,
              "&:hover": { bgcolor: "rgba(255,255,255,0.15)" },
            }}
          >
            <ChevronRightIcon />
          </IconButton>

        </Stack>


      </Box>

      <RequestDemoModal open={openDemo} onClose={() => setOpenDemo(false)} />
    </Box>
  );
}