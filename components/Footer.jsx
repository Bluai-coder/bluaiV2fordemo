
// "use client";

// import { useEffect, useState } from "react";
// import {
//   Box,
//   Container,
//   Typography,
//   Button,
//   IconButton,
// } from "@mui/material";
// import {
//   ArrowUpward,
//   ArrowForward,
//   MailOutline,
//   Phone,
// } from "@mui/icons-material";
// import {
//   Facebook,
//   LinkedIn,
//   Instagram,
//   YouTube,
// } from "@mui/icons-material";
// import XIcon from "@mui/icons-material/X";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import ReactCountryFlag from "react-country-flag";
// import Image from "next/image";
// import RequestDemoModal from "@/components/popups/RequestDemoModal";
// /* =========================================================
//    DATA
// ========================================================= */
// const PRODUCTS = [
//   { label: "VitalsChair™", route: "/products/vitals-chair" },
//   { label: "VitalsPole™", route: "/products/vitals-pole" },
//   { label: "VitalsBriefcase™", route: "/products/vitals-briefcase" },
//   // { label: "NeoNatal™", route: "/products/blu-neonatal" },
//   { label: "BluID™", route: "/products/blu-id" },
//   { label: "BluMental Health", route: "/products/blu-mental-health" },

// ];

// const SOLUTIONS = [
//   { label: "BluHealth™", route: "/products/blu-health" },
//   { label: "BluNotes™", route: "/products/blu-notes" },
//   {
//     label: "BluDMS™",
//     badge: "",
//     route: "/products/blu-dms",
//   },
//   { label: "BluASHA™", route: "/products/blu-asha" },
//   { label: "BluMail™", route: "/products/blu-mail" },
//   { label: "BluBilling Services", route: "/blubilling" },
//   { label: "BluAccess™", route: "/products/blu-access" },
// ];

// const COMPANY = [
//   { label: "About Us", route: "/about/" },
//   // { label: "Our Story", route: "/our-story/" },
//   {
//     label: "Careers",
//     route: "https://careerportal.bluai.ai/BLU-IXC",
//     external: true,
//   },
//   { label: "Investor", route: "/investor/" },
//   { label: "News & Media", route: "/blog/" },
//   { label: "Contact Us", route: "/contact/" },
// ];

// const RESOURCES = [
//   { label: "Blog", route: "/blog/" },
//   // { label: "Downloads", route: "#" },
//   { label: "Support", route: "/support/" },
//   { label: "Privacy Policy", route: "/privacy-policy" },
//   { label: "Terms & Conditions", route: "/terms-of-services" },
// ];

// const LOCATIONS = [
//   {
//     id: "india",
//     country: "IN",
//     label: "India – Mohali",
//     company: "BluAI Private Ltd.",
//     lat: 30.6597,
//     lng: 76.7255,
//     address:
//       "CPM-17, Suite #317, Center Plaza Emaar, Sector 105, Mohali, Punjab 140307",
//     phone: "+91 172 456 8962",
//     email: "info@bluai.ai",
//     map: "https://www.google.com/maps?q=Center+Plaza+Emaar+Mohali+Punjab&output=embed",
//     directions:
//       "https://www.google.com/maps/dir/?api=1&destination=Center+Plaza+Emaar+Sector+105+Mohali",
//   },
//   {
//     id: "delaware",
//     country: "US",
//     label: "USA – Delaware",
//     company: "BluAI Inc.",
//     lat: 39.1582,
//     lng: -75.5244,
//     address: "8 The Green, Suite #17716, Dover, DE 19901",
//     phone: "+1 302 238 1512",
//     email: "info@bluai.ai",
//     map: "https://www.google.com/maps?q=8+The+Green+Dover+DE+19901&output=embed",
//     directions:
//       "https://www.google.com/maps/dir/?api=1&destination=8+The+Green+Dover+DE+19901",
//   },
//   {
//     id: "michigan",
//     country: "US",
//     label: "USA – Michigan",
//     company: "BluAI Inc.",
//     lat: 42.4313,
//     lng: -83.4835,
//     address: "143 Cadycenter, Suite 173, Northville, MI 48167",
//     phone: "+1 302 238 1512",
//     email: "info@bluai.ai",
//     map: "https://www.google.com/maps?q=143+Cadycenter+Northville+MI+48167&output=embed",
//     directions:
//       "https://www.google.com/maps/dir/?api=1&destination=143+Cadycenter+Northville+MI+48167",
//   },
// ];

// const SOCIAL_LINKS = [
//   {
//     label: "LinkedIn",
//     href: "https://www.linkedin.com/company/bluai-ai",
//     icon: LinkedIn,
//   },
//   {
//     label: "Facebook",
//     href: "https://www.facebook.com/profile.php?id=61573756312219",
//     icon: Facebook,
//   },
//   {
//     label: "Instagram",
//     href: "https://www.instagram.com/bluai.ai",
//     icon: Instagram,
//   },
//   {
//     label: "YouTube",
//     href: "https://www.youtube.com/@BluAIPrivateLtd",
//     icon: YouTube,
//   },
//   { label: "X", href: "https://x.com/BluAI_ai", icon: XIcon },
// ];

// /* =========================================================
//    FOOTER
// ========================================================= */
// export default function Footer() {
//   const router = useRouter();
//   const [activeLocation, setActiveLocation] = useState([]);
//   const [openDemo, setOpenDemo] = useState(false);



//     const getAddressFromCoords = async (lat, lng) => {
//     const key = `${lat},${lng}`;

//     if (addressCache.has(key)) {
//       return addressCache.get(key);
//     }

//     try {
//       await new Promise((resolve) => setTimeout(resolve, 1000));

//       const response = await fetch(
//         `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=18&addressdetails=1`,
//         {
//           headers: {
//             "User-Agent": "HospitalPortal/1.0",
//           },
//           signal: AbortSignal.timeout(5000), // ✅ 5 second timeout
//         },
//       );

//       if (!response.ok) {
//         console.warn(`⚠️ Geocoding failed for ${lat},${lng}: ${response.status}`);
//         return null; // ✅ Return null instead of crashing
//       }

//       const data = await response.json();
//       addressCache.set(key, data);
//       return data;
//     } catch (error) {
//       console.warn(`⚠️ Geocoding error for ${lat},${lng}:`, error.message);
//       return null; // ✅ Return null on any error
//     }
//   };

//   useEffect(() => {



//   }, [])

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const navigate = (route, external = false) => {
//     if (!route) return;
//     if (external) {
//       window.open(route, "_blank");
//     } else {
//       router.push(route);
//     }
//   };



//   return (
//     <Box
//       sx={{
//         width: "100%",
//         bgcolor: "#0B1220",
//         position: "relative",
//         overflow: "hidden",
//         pt: { xs: 6, md: 8 },
//       }}
//     >
//       {/* soft glow accents */}
//       <Box
//         sx={{
//           position: "absolute",
//           top: -80,
//           right: -60,
//           width: 420,
//           height: 420,
//           borderRadius: "50%",
//           background: "radial-gradient(circle, rgba(59,130,246,0.18) 0%, transparent 70%)",
//           pointerEvents: "none",
//         }}
//       />
//       <Box
//         sx={{
//           position: "absolute",
//           bottom: -100,
//           left: -40,
//           width: 360,
//           height: 360,
//           borderRadius: "50%",
//           background: "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)",
//           pointerEvents: "none",
//         }}
//       />

//       <Container maxWidth="xl" >
//         {/* =====================================================
//             TOP SECTION
//         ===================================================== */}
//         <Box
//           sx={{
//             display: "grid",
//             gridTemplateColumns: {
//               xs: "1fr",
//               md: "1.4fr 1fr 1fr 1fr 1fr 0.9fr",
//             },
//             gap: { xs: 5, md: 3, lg: 4 },
//             pb: 6,
//           }}
//         >
//           {/* Brand + CTA */}
//           <Box>
//             <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 3 }}>

//               <Image src="/logo.png" alt="BluAI" width={80} height={80} />

//             </Box>

//             <Typography
//               sx={{
//                 fontSize: { xs: 20, md: 22 },
//                 fontWeight: 600,
//                 lineHeight: 1.3,
//                 color: "#F8FAFC",
//                 mb: 1.5,
//               }}
//             >
//               Manage. My Health.
//               <br />
//               My Way.™
//             </Typography>



//             {/* CTA Buttons */}
//             <Box sx={{ display: "flex", gap: 1.5, flexWrap: "wrap", mb: 3 }}>
//               <Button
//                 variant="contained"
//                 endIcon={<ArrowForward sx={{ fontSize: 16 }} />}
//                 onClick={() => setOpenDemo(true)}
//                 sx={{
//                   background: "#1b4dff",
//                   color: "#fff",
//                   textTransform: "none",
//                   fontWeight: 600,
//                   fontSize: 13.5,
//                   px: 2.2,
//                   py: 1,
//                   borderRadius: 2,
//                   "&:hover": { background: "#123fd6" },
//                 }}
//               >
//                 Schedule a Demo
//               </Button>

//             </Box>
//             <RequestDemoModal open={openDemo} onClose={() => setOpenDemo(false)} />


//           </Box>

//           {/* PRODUCTS */}
//           <Box>
//             <FooterTitle>PRODUCTS</FooterTitle>
//             <FooterLinks>
//               {PRODUCTS.map((item) => (
//                 <FooterLink
//                   key={item.label}
//                   onClick={() => navigate(item.route)}
//                 >
//                   {item.label}
//                 </FooterLink>
//               ))}
//             </FooterLinks>
//           </Box>

//           {/* SOLUTIONS */}
//           <Box>
//             <FooterTitle>SOLUTIONS</FooterTitle>
//             <FooterLinks>
//               {SOLUTIONS.map((item) => (
//                 <Box
//                   key={item.label}
//                   onClick={() => navigate(item.route)}
//                   sx={{
//                     display: "flex",
//                     alignItems: "center",
//                     gap: 1,
//                     cursor: "pointer",
//                     color: "rgba(226,232,240,0.75)",
//                     fontSize: 13.5,
//                     "&:hover": { color: "#60A5FA" },
//                   }}
//                 >
//                   <span>{item.label}</span>
//                   {item.badge && (
//                     <Box
//                       sx={{
//                         fontSize: 10,
//                         px: 0.8,
//                         py: 0.2,
//                         borderRadius: 1,
//                         background: "rgba(27,77,255,0.25)",
//                         color: "#93C5FD",
//                         border: "1px solid rgba(59,130,246,0.35)",
//                       }}
//                     >
//                       {item.badge}
//                     </Box>
//                   )}
//                 </Box>
//               ))}
//             </FooterLinks>
//           </Box>

//           {/* COMPANY */}
//           <Box>
//             <FooterTitle>COMPANY</FooterTitle>
//             <FooterLinks>
//               {COMPANY.map((item) => (
//                 <FooterLink
//                   key={item.label}
//                   onClick={() => navigate(item.route, item.external)}
//                 >
//                   {item.label}
//                 </FooterLink>
//               ))}
//             </FooterLinks>
//           </Box>

//           {/* RESOURCES */}
//           <Box>
//             <FooterTitle>RESOURCES</FooterTitle>
//             <FooterLinks>
//               {RESOURCES.map((item) => (
//                 <FooterLink
//                   key={item.label}
//                   onClick={() => navigate(item.route)}
//                 >
//                   {item.label}
//                 </FooterLink>
//               ))}
//             </FooterLinks>
//           </Box>

//           {/* Contact Info */}
//           <Box>
//             <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
//               <ContactPill
//                 icon={<MailOutline sx={{ fontSize: 16 }} />}
//                 href="mailto:info@bluai.ai"
//               >
//                 info@bluai.ai
//               </ContactPill>
//               <ContactPill
//                 icon={<Phone sx={{ fontSize: 16 }} />}
//                 href="tel:+911724568962"
//               >
//                 +91 172 456 8962
//                 <br />
//                 <Typography
//                   component="span"
//                   sx={{ fontSize: 11, opacity: 0.7 }}
//                 >
//                   (India)
//                 </Typography>
//               </ContactPill>
//               <ContactPill
//                 icon={<Phone sx={{ fontSize: 16 }} />}
//                 href="tel:+13022381512"
//               >
//                 +1 302 238 1512
//                 <br />
//                 <Typography
//                   component="span"
//                   sx={{ fontSize: 11, opacity: 0.7 }}
//                 >
//                   (USA)
//                 </Typography>
//               </ContactPill>
//               {/* Social */}
//               <Box sx={{ display: "flex", gap: 2 }}>
//                 {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
//                   <IconButton
//                     key={label}
//                     component="a"
//                     href={href}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label={label}
//                     sx={{
//                       width: 42,
//                       height: 42,
//                       color: "#94A3B8",
//                       border: "1px solid rgba(148,163,184,0.25)",
//                       "&:hover": {
//                         color: "#fff",
//                         borderColor: "#1b4dff",
//                         background: "rgba(27,77,255,0.15)",
//                       },
//                     }}
//                   >
//                     <Icon sx={{ fontSize: 18 }} />
//                   </IconButton>
//                 ))}
//               </Box>
//             </Box>
//           </Box>
//         </Box>

//         {/* =====================================================
//       OUR GLOBAL OFFICES + CERTIFICATIONS
//       ===================================================== */}
//         <Box
//           sx={{
//             borderTop: "1px solid rgba(148,163,184,0.1)",
//             pt: { xs: 5, md: 6 },
//             pb: { xs: 5, md: 6 },
//             color: "#e2e8f0",
//           }}
//         >
//           <Box
//             sx={{
//               display: "grid",
//               gridTemplateColumns: {
//                 xs: "1fr",
//                 lg: "minmax(280px, 1fr) 2.2fr",
//               },
//               gap: { xs: 3, lg: 4 },
//               alignItems: "stretch",
//             }}
//           >
//             {/* ===================== LEFT: CERTIFICATIONS ===================== */}
//             <Box
//               sx={{
//                 background: "rgba(15, 23, 42, 0.55)",
//                 border: "1px solid rgba(148, 163, 184, 0.12)",
//                 borderRadius: 3,
//                 p: { xs: 3, sm: 3.5 },
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//                 height: "100%",
//               }}
//             >
//               <Typography
//                 sx={{
//                   fontSize: 12.5,
//                   fontWeight: 700,
//                   letterSpacing: 1.4,
//                   color: "#60A5FA",
//                   textTransform: "uppercase",
//                   textAlign: "center",
//                   mb: 3.5,
//                 }}
//               >
//                 Certifications & Compliance
//               </Typography>

//               <Box
//                 sx={{
//                   display: "flex",
//                   justifyContent: "center",
//                   alignItems: "flex-start",
//                   width: "100%",
//                   gap: { xs: 4, sm: 5 },
//                   flex: 1,
//                 }}
//               >
//                 {/* ABDM */}
//                 <Box
//                   sx={{
//                     display: "flex",
//                     flexDirection: "column",
//                     alignItems: "center",
//                     textAlign: "center",
//                     minWidth: 90,
//                   }}
//                 >
//                   <Box
//                     component="img"
//                     src="/certification/abdm.webp"
//                     alt="ABDM"
//                     sx={{
//                       height: { xs: 64, sm: 72 },
//                       width: "auto",
//                       objectFit: "contain",
//                       mb: 1.5,
//                       borderRadius: "50%",
//                     }}
//                   />
//                   <Typography
//                     sx={{
//                       fontSize: 14,
//                       fontWeight: 700,
//                       color: "#F8FAFC",
//                       mb: 0.4,
//                     }}
//                   >
//                     ABDM
//                   </Typography>
//                   <Typography
//                     sx={{
//                       fontSize: 12,
//                       color: "rgba(148,163,184,0.75)",
//                       fontWeight: 500,
//                     }}
//                   >
//                     Compliant
//                   </Typography>
//                 </Box>

//                 {/* HIPAA */}
//                 <Box
//                   sx={{
//                     display: "flex",
//                     flexDirection: "column",
//                     alignItems: "center",
//                     textAlign: "center",
//                     minWidth: 90,
//                   }}
//                 >
//                   <Box
//                     component="img"
//                     src="/certification/hippa.jpg"
//                     alt="HIPAA"
//                     sx={{
//                       height: { xs: 64, sm: 72 },
//                       width: "auto",
//                       objectFit: "contain",
//                       mb: 1.5,
//                       borderRadius: "50%",
//                     }}
//                   />
//                   <Typography
//                     sx={{
//                       fontSize: 14,
//                       fontWeight: 700,
//                       color: "#F8FAFC",
//                       mb: 0.4,
//                     }}
//                   >
//                     HIPAA
//                   </Typography>
//                   <Typography
//                     sx={{
//                       fontSize: 12,
//                       color: "rgba(148,163,184,0.75)",
//                       fontWeight: 500,
//                     }}
//                   >
//                     Compliant
//                   </Typography>
//                 </Box>
//               </Box>
//             </Box>

//             {/* ===================== RIGHT: OUR LOCATION ===================== */}
//             <Box
//               sx={{
//                 background: "rgba(15, 23, 42, 0.55)",
//                 border: "1px solid rgba(148, 163, 184, 0.12)",
//                 borderRadius: 3,
//                 p: { xs: 3, sm: 3.5 },
//                 display: "flex",
//                 flexDirection: "column",
//                 height: "100%",
//               }}
//             >
//               <Typography
//                 sx={{
//                   fontSize: 12.5,
//                   fontWeight: 700,
//                   letterSpacing: 1.4,
//                   color: "#60A5FA",
//                   textTransform: "uppercase",
//                   textAlign: "center",
//                   mb: 3.5,
//                 }}
//               >
//                 Our Location
//               </Typography>

//               <Box
//                 sx={{
//                   display: "grid",
//                   gridTemplateColumns: {
//                     xs: "1fr",
//                     sm: "1fr 1fr",
//                     md: "repeat(3, 1fr)",
//                   },
//                   gap: 2,
//                   flex: 1,
//                 }}
//               >
//                 {LOCATIONS.map((loc) => {
//                   const isActive = activeLocation.id === loc.id;

//                   const handleCopy = (e, text) => {
//                     e.preventDefault();
//                     e.stopPropagation();
//                     navigator.clipboard.writeText(text);

//                     // Simple visual feedback
//                     const btn = e.currentTarget;
//                     btn.style.opacity = "0.4";
//                     setTimeout(() => {
//                       btn.style.opacity = "1";
//                     }, 350);
//                   };

//                   return (
//                     <Box
//                       key={loc.id}
//                       component="a"
//                       href={loc.directions}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       sx={{
//                         display: "flex",
//                         flexDirection: "column",
//                         gap: 1.2,
//                         p: 2.2,
//                         borderRadius: 2.5,
//                         background: isActive
//                           ? "rgba(30, 41, 59, 0.75)"
//                           : "rgba(15, 23, 42, 0.45)",
//                         border: "1px solid",
//                         borderColor: isActive
//                           ? "rgba(96, 165, 250, 0.35)"
//                           : "rgba(148, 163, 184, 0.1)",
//                         cursor: "pointer",
//                         textDecoration: "none",
//                         color: "inherit",
//                         transition: "all 0.2s ease",
//                         height: "100%",
//                         "&:hover": {
//                           background: "rgba(30, 41, 59, 0.7)",
//                           borderColor: "rgba(148, 163, 184, 0.22)",
//                           transform: "translateY(-1px)",
//                         },
//                       }}
//                     >
//                       {/* Company + Flag */}
//                       <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
//                         <ReactCountryFlag
//                           svg
//                           countryCode={loc.country}
//                           style={{
//                             width: 22,
//                             height: 16,
//                             borderRadius: 2,
//                             flexShrink: 0,
//                           }}
//                         />
//                         <Typography
//                           sx={{
//                             fontSize: 14.5,
//                             fontWeight: 650,
//                             color: "#F8FAFC",
//                             lineHeight: 1.3,
//                           }}
//                         >
//                           {loc.label}
//                         </Typography>
//                       </Box>

//                       {/* Address + Copy */}
//                       <Box
//                         sx={{
//                           display: "flex",
//                           alignItems: "flex-start",
//                           gap: 1,
//                           pl: 0.2,
//                         }}
//                       >
//                         <Typography
//                           sx={{
//                             fontSize: 12.5,
//                             color: "rgba(148,163,184,0.78)",
//                             lineHeight: 1.45,
//                             flex: 1,
//                           }}
//                         >
//                           {loc.address}
//                         </Typography>

//                         <Box
//                           onClick={(e) => handleCopy(e, loc.address)}
//                           title="Copy address"
//                           sx={{
//                             display: "flex",
//                             alignItems: "center",
//                             justifyContent: "center",
//                             width: 20,
//                             height: 20,
//                             borderRadius: 1,
//                             cursor: "pointer",
//                             color: "rgba(148,163,184,0.55)",
//                             flexShrink: 0,
//                             mt: 0.2,
//                             transition: "all 0.2s ease",
//                             "&:hover": {
//                               color: "#60A5FA",
//                               background: "rgba(96, 165, 250, 0.1)",
//                             },
//                           }}
//                         >
//                           <svg
//                             width="13"
//                             height="13"
//                             viewBox="0 0 24 24"
//                             fill="none"
//                             stroke="currentColor"
//                             strokeWidth="2"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                           >
//                             <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
//                             <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
//                           </svg>
//                         </Box>
//                       </Box>

//                       {/* Phone Number + Copy */}
//                       <Box
//                         sx={{
//                           display: "flex",
//                           alignItems: "center",
//                           gap: 1,
//                           pl: 0.2,
//                         }}
//                       >
//                         <Typography
//                           component="a"
//                           href={`tel:${loc.phone.replace(/\s+/g, "")}`}
//                           onClick={(e) => e.stopPropagation()}
//                           sx={{
//                             fontSize: 12.5,
//                             color: "#60A5FA",
//                             lineHeight: 1.45,
//                             textDecoration: "none",
//                             fontWeight: 500,
//                             transition: "color 0.2s ease",
//                             "&:hover": {
//                               color: "#93C5FD",
//                               textDecoration: "underline",
//                             },
//                           }}
//                         >
//                           {loc.phone}
//                         </Typography>

//                         <Box
//                           onClick={(e) => handleCopy(e, loc.phone.replace(/\s+/g, ""))}
//                           title="Copy phone number"
//                           sx={{
//                             display: "flex",
//                             alignItems: "center",
//                             justifyContent: "center",
//                             width: 20,
//                             height: 20,
//                             borderRadius: 1,
//                             cursor: "pointer",
//                             color: "rgba(148,163,184,0.55)",
//                             transition: "all 0.2s ease",
//                             "&:hover": {
//                               color: "#60A5FA",
//                               background: "rgba(96, 165, 250, 0.1)",
//                             },
//                           }}
//                         >
//                           <svg
//                             width="13"
//                             height="13"
//                             viewBox="0 0 24 24"
//                             fill="none"
//                             stroke="currentColor"
//                             strokeWidth="2"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                           >
//                             <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
//                             <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
//                           </svg>
//                         </Box>
//                       </Box>
//                     </Box>
//                   );
//                 })}
//               </Box>
//             </Box>
//           </Box>
//         </Box>
//       </Container>

//       {/* =====================================================
//           BOTTOM BAR
//       ===================================================== */}
//       <Box
//         sx={{
//           borderTop: "1px solid rgba(148,163,184,0.12)",
//           py: 2.5,
//           background: "#060B16",
//         }}
//       >
//         <Container
//           maxWidth="xl"
//           sx={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "space-between",
//             gap: 3,
//             flexWrap: "",
//           }}
//         >
//           <Typography sx={{ fontSize: 12.5, color: "rgba(148,163,184,0.6)" }}>
//             © 2026 BluAI Inc. & BluAI Private Limited.

//             All Rights Reserved.
//           </Typography>


//           <Box sx={{ display: "flex", alignItems: "center", gap: 2.5 }}>
//             <Link href="/privacy-policy" style={bottomLinkStyle}>
//               Privacy Policy
//             </Link>
//             <Link href="/terms-of-services" style={bottomLinkStyle}>
//               Terms & Conditions
//             </Link>
//             <Link href="#" style={bottomLinkStyle}>
//               Cookies Policy
//             </Link>

//             <IconButton
//               onClick={scrollToTop}
//               aria-label="Back to top"
//               sx={{
//                 width: 36,
//                 height: 36,
//                 ml: 1,
//                 color: "#fff",
//                 background: "#1b4dff",
//                 "&:hover": { background: "#123fd6" },
//               }}
//             >
//               <ArrowUpward sx={{ fontSize: 17 }} />
//             </IconButton>
//           </Box>
//         </Container>
//       </Box>
//     </Box>
//   );
// }

// /* =========================================================
//    HELPERS
// ========================================================= */
// function FooterTitle({ children }) {
//   return (
//     <Typography
//       sx={{
//         mb: 2,
//         fontSize: 12,
//         fontWeight: 700,
//         letterSpacing: 1,
//         color: "#60A5FA",
//         textTransform: "uppercase",
//       }}
//     >
//       {children}
//     </Typography>
//   );
// }

// function FooterLinks({ children }) {
//   return (
//     <Box sx={{ display: "flex", flexDirection: "column", gap: 1.35 }}>
//       {children}
//     </Box>
//   );
// }

// function FooterLink({ children, onClick }) {
//   return (
//     <Typography
//       onClick={onClick}
//       sx={{
//         width: "fit-content",
//         cursor: "pointer",
//         fontSize: 13.5,
//         color: "rgba(226,232,240,0.75)",
//         display: "flex",
//         alignItems: "center",
//         gap: 0.8,
//         transition: "color 0.2s",
//         "&:hover": { color: "#60A5FA" },
//         "&::after": {
//           content: '"›"',
//           opacity: 0.5,
//           fontSize: 15,
//         },
//       }}
//     >
//       {children}
//     </Typography>
//   );
// }

// function ContactPill({ children, href, icon }) {
//   return (
//     <Box
//       component="a"
//       href={href}
//       sx={{
//         display: "flex",
//         alignItems: "flex-start",
//         gap: 1.3,
//         color: "rgba(226,232,240,0.85)",
//         textDecoration: "none",
//         fontSize: 13.5,
//         lineHeight: 1.4,
//         "&:hover": { color: "#60A5FA" },
//       }}
//     >
//       <Box
//         sx={{
//           width: 32,
//           height: 32,
//           borderRadius: "50%",
//           background: "#1b4dff",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           color: "#fff",
//           flexShrink: 0,
//         }}
//       >
//         {icon}
//       </Box>
//       <Box>{children}</Box>
//     </Box>
//   );
// }

// const bottomLinkStyle = {
//   color: "rgba(148,163,184,0.7)",
//   textDecoration: "none",
//   fontSize: 12.5,
// };



"use client";

import { useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import {
  ArrowUpward,
  ArrowForward,
  MailOutline,
  Phone,
} from "@mui/icons-material";
import {
  Facebook,
  LinkedIn,
  Instagram,
  YouTube,
} from "@mui/icons-material";
import XIcon from "@mui/icons-material/X";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ReactCountryFlag from "react-country-flag";
import Image from "next/image";
import RequestDemoModal from "@/components/popups/RequestDemoModal";

/* =========================================================
   DATA
========================================================= */
const PRODUCTS = [
  { label: "VitalsChair™", route: "/products/vitals-chair" },
  { label: "VitalsPole™", route: "/products/vitals-pole" },
  { label: "VitalsBriefcase™", route: "/products/vitals-briefcase" },
  { label: "BluID™", route: "/products/blu-id" },
  { label: "BluMental Health", route: "/products/blu-mental-health" },
];

const SOLUTIONS = [
  { label: "BluHealth™", route: "/products/blu-health" },
  { label: "BluNotes™", route: "/products/blu-notes" },
  { label: "BluDMS™", badge: "", route: "/products/blu-dms" },
  { label: "BluASHA™", route: "/products/blu-asha" },
  { label: "BluMail™", route: "/products/blu-mail" },
  { label: "BluBilling Services", route: "/blubilling" },
  { label: "BluAccess™", route: "/products/blu-access" },
];

const COMPANY = [
  { label: "About Us", route: "/about/" },
  {
    label: "Careers",
    route: "https://careerportal.bluai.ai/BLU-IXC",
    external: true,
  },
  { label: "Investor", route: "/investor/" },
  { label: "News & Media", route: "/blog/" },
  { label: "Contact Us", route: "/contact/" },
];

const RESOURCES = [
  { label: "Blog", route: "/blog/" },
  { label: "Support", route: "/support/" },
  { label: "Privacy Policy", route: "/privacy-policy" },
  { label: "Terms & Conditions", route: "/terms-of-services" },
];

const LOCATIONS = [
  {
    id: "india",
    country: "IN",
    label: "India – Mohali",
    company: "BluAI Private Ltd.",
    lat: 30.6597,
    lng: 76.7255,
    address:
      "CPM-17, Suite #317, Center Plaza Emaar, Sector 105, Mohali, Punjab 140307",
    phone: "+91 172 456 8962",
    email: "info@bluai.ai",
    map: "https://www.google.com/maps?q=Center+Plaza+Emaar+Mohali+Punjab&output=embed",
    directions:
      "https://www.google.com/maps/dir/?api=1&destination=Center+Plaza+Emaar+Sector+105+Mohali",
  },
  {
    id: "delaware",
    country: "US",
    label: "USA – Delaware",
    company: "BluAI Inc.",
    lat: 39.1582,
    lng: -75.5244,
    address: "8 The Green, Suite #17716, Dover, DE 19901",
    phone: "+1 302 238 1512",
    email: "info@bluai.ai",
    map: "https://www.google.com/maps?q=8+The+Green+Dover+DE+19901&output=embed",
    directions:
      "https://www.google.com/maps/dir/?api=1&destination=8+The+Green+Dover+DE+19901",
  },
  {
    id: "michigan",
    country: "US",
    label: "USA – Michigan",
    company: "BluAI Inc.",
    lat: 42.4313,
    lng: -83.4835,
    address: "143 Cadycenter, Suite 173, Northville, MI 48167",
    phone: "+1 302 238 1512",
    email: "info@bluai.ai",
    map: "https://www.google.com/maps?q=143+Cadycenter+Northville+MI+48167&output=embed",
    directions:
      "https://www.google.com/maps/dir/?api=1&destination=143+Cadycenter+Northville+MI+48167",
  },
];

const CERTIFICATIONS = [
  {
    label: "ABDM",
    src: "/certification/abdm.webp",
    alt: "ABDM",
  },
  {
    label: "HIPAA",
    src: "/certification/hippa.jpg",
    alt: "HIPAA",
  },
  {
    label: "ISO13485",
    src: "/certification/iso.jpg",
    alt: "ISO13485",
  },
  {
    label: "ISO-27001",
    src: "/certification/ISO-27001.png",
    alt: "ISO-27001",
  },
  {
    label: "CE",
    src: "/certification/ce.avif",
    alt: "ce",
  }, ,
  {
    label: "FHIR ",
    src: "/certification/fhir-logo-r4.png",
    alt: "FHIR ",
  },
];

const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/bluai-ai",
    icon: LinkedIn,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61573756312219",
    icon: Facebook,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/bluai.ai",
    icon: Instagram,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@BluAIPrivateLtd",
    icon: YouTube,
  },
  { label: "X", href: "https://x.com/BluAI_ai", icon: XIcon },
];

/* =========================================================
   HELPERS
========================================================= */
const addressCache = new Map();

// Haversine formula to calculate distance in km
const getDistance = (lat1, lng1, lat2, lng2) => {
  const R = 6371; // Earth's radius in km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lng2 - lng1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
    Math.cos((lat2 * Math.PI) / 180) *
    Math.sin(dLng / 2) *
    Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

// Find the nearest location given lat/lng
const findNearestLocation = (lat, lng) => {
  let nearest = null;
  let minDistance = Infinity;

  LOCATIONS.forEach((loc) => {
    const distance = getDistance(lat, lng, loc.lat, loc.lng);
    if (distance < minDistance) {
      minDistance = distance;
      nearest = { ...loc, distance };
    }
  });

  return nearest;
};

// IP-based geolocation (no permission popup)
const getCoordsFromIP = async () => {
  try {
    const res = await fetch("https://ipwho.is/", {
      signal: AbortSignal.timeout(5000),
    });
    if (!res.ok) return null;

    const data = await res.json();
    if (!data.success || !data.latitude || !data.longitude) return null;

    return {
      lat: data.latitude,
      lng: data.longitude,
      city: data.city,
      country: data.country,
    };
  } catch (err) {
    console.warn("⚠️ IP geolocation failed:", err.message);
    return null;
  }
};

const getAddressFromCoords = async (lat, lng) => {
  const key = `${lat},${lng}`;

  if (addressCache.has(key)) {
    return addressCache.get(key);
  }

  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=18&addressdetails=1`,
      {
        headers: {
          "User-Agent": "HospitalPortal/1.0",
        },
        signal: AbortSignal.timeout(5000),
      },
    );

    if (!response.ok) {
      console.warn(`⚠️ Geocoding failed for ${lat},${lng}: ${response.status}`);
      return null;
    }

    const data = await response.json();
    addressCache.set(key, data);
    return data;
  } catch (error) {
    console.warn(`⚠️ Geocoding error for ${lat},${lng}:`, error.message);
    return null;
  }
};

/* =========================================================
   FOOTER
========================================================= */
export default function Footer() {
  const router = useRouter();
  const [activeLocation, setActiveLocation] = useState(null);
  const [nearestLocationId, setNearestLocationId] = useState(null);
  const [userCoords, setUserCoords] = useState(null);
  const [openDemo, setOpenDemo] = useState(false);

  useEffect(() => {
    const detectNearestLocation = async () => {
      // IP-based lookup — silent, no permission popup
      const coords = await getCoordsFromIP();

      // If IP lookup fails, quietly do nothing (footer still renders)
      if (!coords) return;

      setUserCoords({ lat: coords.lat, lng: coords.lng });

      const nearest = findNearestLocation(coords.lat, coords.lng);
      if (!nearest) return;

      setNearestLocationId(nearest.id);
      setActiveLocation(nearest);

      // Optional: reverse-geocode the IP coords (cached, non-blocking)
      await getAddressFromCoords(coords.lat, coords.lng);
    };

    detectNearestLocation();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigate = (route, external = false) => {
    if (!route) return;
    if (external) {
      window.open(route, "_blank");
    } else {
      router.push(route);
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#0B1220",
        position: "relative",
        overflow: "hidden",
        pt: { xs: 6, md: 8 },
      }}
    >
      {/* soft glow accents */}
      <Box
        sx={{
          position: "absolute",
          top: -80,
          right: -60,
          width: 420,
          height: 420,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(59,130,246,0.18) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: -100,
          left: -40,
          width: 360,
          height: 360,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="xl">
        {/* =====================================================
            TOP SECTION
        ===================================================== */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr 1fr",
              sm: "1fr 1fr 1fr",
              md: "1.4fr 1fr 1fr 1fr 1fr 0.9fr",
            },
            gap: { xs: 4, md: 3, lg: 4 },
            pb: 2,
          }}
        >
          {/* Brand + CTA */}
          <Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 5, mb: 1 }}>
              <Image src="/logo.png" alt="BluAI" width={90} height={100} />
            </Box>

            <Typography
              sx={{
                fontSize: { xs: 20, md: 22 },
                fontWeight: 600,
                lineHeight: 1.3,
                color: "#F8FAFC",
                mb: 5,
              }}
            >
              Manage. My Health.
              <br />
              My Way.™
            </Typography>

            <Box sx={{ display: "flex", gap: 4, flexWrap: "wrap", mb: 3 }}>
              <Button
                variant="contained"
                endIcon={<ArrowForward sx={{ fontSize: 16 }} />}
                onClick={() => setOpenDemo(true)}
                sx={{
                  background: "#1b4dff",
                  color: "#fff",
                  textTransform: "none",
                  fontWeight: 600,
                  fontSize: 13.5,
                  px: 2.2,
                  py: 1,
                  borderRadius: 2,
                  "&:hover": { background: "#123fd6" },
                }}
              >
                Schedule a Demo
              </Button>
            </Box>
            <RequestDemoModal
              open={openDemo}
              onClose={() => setOpenDemo(false)}
            />
          </Box>

          {/* PRODUCTS */}
          <Box>
            <FooterTitle>PRODUCTS</FooterTitle>
            <FooterLinks>
              {PRODUCTS.map((item) => (
                <FooterLink
                  key={item.label}
                  onClick={() => navigate(item.route)}
                >
                  {item.label}
                </FooterLink>
              ))}
            </FooterLinks>
          </Box>

          {/* SOLUTIONS */}
          <Box>
            <FooterTitle>SOLUTIONS</FooterTitle>
            <FooterLinks>
              {SOLUTIONS.map((item) => (
                <Box
                  key={item.label}
                  onClick={() => navigate(item.route)}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    cursor: "pointer",
                    color: "rgba(226,232,240,0.75)",
                    fontSize: 13.5,
                    "&:hover": { color: "#60A5FA" },
                  }}
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <Box
                      sx={{
                        fontSize: 10,
                        px: 0.8,
                        py: 0.2,
                        borderRadius: 1,
                        background: "rgba(27,77,255,0.25)",
                        color: "#93C5FD",
                        border: "1px solid rgba(59,130,246,0.35)",
                      }}
                    >
                      {item.badge}
                    </Box>
                  )}
                </Box>
              ))}
            </FooterLinks>
          </Box>

          {/* COMPANY */}
          <Box>
            <FooterTitle>COMPANY</FooterTitle>
            <FooterLinks>
              {COMPANY.map((item) => (
                <FooterLink
                  key={item.label}
                  onClick={() => navigate(item.route, item.external)}
                >
                  {item.label}
                </FooterLink>
              ))}
            </FooterLinks>
          </Box>

          {/* RESOURCES */}
          <Box>
            <FooterTitle>RESOURCES</FooterTitle>
            <FooterLinks>
              {RESOURCES.map((item) => (
                <FooterLink
                  key={item.label}
                  onClick={() => navigate(item.route)}
                >
                  {item.label}
                </FooterLink>
              ))}
            </FooterLinks>
          </Box>

          {/* Contact Info */}
          <Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <ContactPill
                icon={<MailOutline sx={{ fontSize: 16 }} />}
                href="mailto:info@bluai.ai"
              >
                info@bluai.ai
              </ContactPill>
              <ContactPill
                icon={<Phone sx={{ fontSize: 16 }} />}
                href="tel:+911724568962"
              >
                +91 172 456 8962
                <br />
                <Typography component="span" sx={{ fontSize: 11, opacity: 0.7 }}>
                  (India)
                </Typography>
              </ContactPill>
              <ContactPill
                icon={<Phone sx={{ fontSize: 16 }} />}
                href="tel:+13022381512"
              >
                +1 302 238 1512
                <br />
                <Typography component="span" sx={{ fontSize: 11, opacity: 0.7 }}>
                  (USA)
                </Typography>
              </ContactPill>
              {/* Social */}
              <Box sx={{ display: "flex", gap: 2 }}>
                {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                  <IconButton
                    key={label}
                    component="a"
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    sx={{
                      width: {xs : 22 , md : 42 , lg : 42 , xl: 42},
                      height: {xs : 22 , md : 42 , lg : 42 , xl: 42},
                      color: "#94A3B8",
                      border: "1px solid rgba(148,163,184,0.25)",
                      "&:hover": {
                        color: "#fff",
                        borderColor: "#1b4dff",
                        background: "rgba(27,77,255,0.15)",
                      },
                    }}
                  >
                    <Icon sx={{ fontSize: 18 }} />
                  </IconButton>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
        {/* =====================================================
            OUR GLOBAL OFFICES + CERTIFICATIONS
        ===================================================== */}
        <Box
          sx={{
            borderTop: "1px solid rgba(148,163,184,0.1)",
            pt: { xs: 2, md: 2 },
            pb: { xs: 2, md: 2 },
            color: "#e2e8f0",
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                lg: "minmax(320px, 1fr) 2.2fr",
              },
              gap: { xs: 3, lg: 4 },
              alignItems: "flex-start",
            }}
          >
            {/* ===================== LEFT: CERTIFICATIONS (horizontal auto-scroll) ===================== */}
            <Box
              sx={{
                background: "rgba(15, 23, 42, 0.55)",
                border: "1px solid rgba(148, 163, 184, 0.12)",
                borderRadius: 3,
                p: { xs: 3, sm: 3.5 },
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                height: 237,
                overflow: "hidden",
                position: "relative",
              }}
            >
              <Typography
                sx={{
                  fontSize: 12.5,
                  fontWeight: 700,
                  letterSpacing: 1.4,
                  color: "#60A5FA",
                  textTransform: "uppercase",
                  textAlign: "center",
                  mb: 3,
                  flexShrink: 0,
                }}
              >
                Certifications & Compliance
              </Typography>

              {/* Horizontal scroll viewport */}
              <Box
                sx={{
                  flex: 1,
                  width: "100%",
                  overflow: "hidden",
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  maskImage:
                    "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
                  WebkitMaskImage:
                    "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
                  "&:hover .cert-track": {
                    animationPlayState: "paused",
                  },
                }}
              >
                {/* Horizontal scrolling track — duplicated for seamless loop */}
                <Box
                  className="cert-track"
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 3,
                    width: "max-content",
                    animation: "certScrollX 30s linear infinite",
                    "@keyframes certScrollX": {
                      "0%": { transform: "translateX(0)" },
                      "100%": { transform: "translateX(-50%)" },
                    },
                  }}
                >
                  {/* First copy */}
                  {CERTIFICATIONS.map((cert) => (
                    <CertificationBadge key={`a-${cert.label}`} {...cert} />
                  ))}
                  {/* Duplicate copy for seamless loop */}
                  {CERTIFICATIONS.map((cert) => (
                    <CertificationBadge key={`b-${cert.label}`} {...cert} />
                  ))}
                </Box>
              </Box>
            </Box>

            {/* ===================== RIGHT: OUR LOCATION ===================== */}
            <Box
              sx={{
                background: "rgba(15, 23, 42, 0.55)",
                border: "1px solid rgba(148, 163, 184, 0.12)",
                borderRadius: 3,
                p: { xs: 3, sm: 3.5 },
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                sx={{
                  fontSize: 12.5,
                  fontWeight: 700,
                  letterSpacing: 1.4,
                  color: "#60A5FA",
                  textTransform: "uppercase",
                  textAlign: "center",
                  mb: 3.5,
                }}
              >
                Our Location
              </Typography>

              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "1fr",
                    sm: "1fr 1fr",
                    md: "repeat(3, 1fr)",
                  },
                  gap: 2,
                  alignItems: "start",
                }}
              >
                {[...LOCATIONS]
                  .sort((a, b) => {
                    if (a.id === nearestLocationId) return -1;
                    if (b.id === nearestLocationId) return 1;
                    return 0;
                  })
                  .map((loc) => {
                    const isActive = activeLocation?.id === loc.id;
                    const isNearest = nearestLocationId === loc.id;

                    const handleCopy = (e, text) => {
                      e.preventDefault();
                      e.stopPropagation();
                      navigator.clipboard.writeText(text);

                      const btn = e.currentTarget;
                      btn.style.opacity = "0.4";
                      setTimeout(() => {
                        btn.style.opacity = "1";
                      }, 350);
                    };

                    return (
                      <Box
                        key={loc.id}
                        component="a"
                        href={loc.directions}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          position: "relative",
                          display: "flex",
                          flexDirection: "column",
                          gap: 1.2,
                          p: 2.2,
                          borderRadius: 2.5,
                          background: isActive
                            ? "rgba(30, 41, 59, 0.75)"
                            : "rgba(15, 23, 42, 0.45)",
                          border: "1px solid",
                          borderColor: isNearest
                            ? "white"
                            : isActive
                              ? "rgba(96, 165, 250, 0.35)"
                              : "rgba(148, 163, 184, 0.1)",
                          cursor: "pointer",
                          textDecoration: "none",
                          color: "inherit",
                          transition: "all 0.2s ease",
                          "&:hover": {
                            background: "rgba(30, 41, 59, 0.7)",
                            borderColor: isNearest
                              ? "white"
                              : "rgba(148, 163, 184, 0.22)",
                            transform: "translateY(-1px)",
                          },
                        }}
                      >
                        {/* Company + Flag */}
                        <Box
                          sx={{ display: "flex", alignItems: "center", gap: 1.5 }}
                        >
                          <ReactCountryFlag
                            svg
                            countryCode={loc.country}
                            style={{
                              width: 22,
                              height: 16,
                              borderRadius: 2,
                              flexShrink: 0,
                            }}
                          />
                          <Typography
                            sx={{
                              fontSize: 14.5,
                              fontWeight: 650,
                              color: "#F8FAFC",
                              lineHeight: 1.3,
                            }}
                          >
                            {loc.label}
                          </Typography>
                        </Box>

                        {/* Address + Copy */}
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: .5,
                            pl: 0.2,
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: 12.5,
                              color: "rgba(148,163,184,0.78)",
                              lineHeight: 1.45,
                              flex: 1,
                            }}
                          >
                            {loc.address}
                          </Typography>

                          <Box
                            onClick={(e) => handleCopy(e, loc.address)}
                            title="Copy address"
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              width: 20,
                              height: 20,
                              borderRadius: 1,
                              cursor: "pointer",
                              color: "rgba(148,163,184,0.55)",
                              flexShrink: 0,
                              mt: 0.2,
                              transition: "all 0.2s ease",
                              "&:hover": {
                                color: "#60A5FA",
                                background: "rgba(96, 165, 250, 0.1)",
                              },
                            }}
                          >
                            <svg
                              width="13"
                              height="13"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <rect
                                x="9"
                                y="9"
                                width="13"
                                height="13"
                                rx="2"
                                ry="2"
                              />
                              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                            </svg>
                          </Box>
                        </Box>

                        {/* Phone Number + Copy */}
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                            pl: 0.2,
                          }}
                        >
                          <Typography
                            component="a"
                            href={`tel:${loc.phone.replace(/\s+/g, "")}`}
                            onClick={(e) => e.stopPropagation()}
                            sx={{
                              fontSize: 12.5,
                              color: "#60A5FA",
                              lineHeight: 1.45,
                              textDecoration: "none",
                              fontWeight: 500,
                              transition: "color 0.2s ease",
                              "&:hover": {
                                color: "#93C5FD",
                                textDecoration: "underline",
                              },
                            }}
                          >
                            {loc.phone}
                          </Typography>

                          <Box
                            onClick={(e) =>
                              handleCopy(e, loc.phone.replace(/\s+/g, ""))
                            }
                            title="Copy phone number"
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              width: 20,
                              height: 20,
                              borderRadius: 1,
                              cursor: "pointer",
                              color: "rgba(148,163,184,0.55)",
                              transition: "all 0.2s ease",
                              "&:hover": {
                                color: "#60A5FA",
                                background: "rgba(96, 165, 250, 0.1)",
                              },
                            }}
                          >
                            <svg
                              width="13"
                              height="13"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <rect
                                x="9"
                                y="9"
                                width="13"
                                height="13"
                                rx="2"
                                ry="2"
                              />
                              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                            </svg>
                          </Box>
                        </Box>
                      </Box>
                    );
                  })}
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>

      {/* =====================================================
          BOTTOM BAR
      ===================================================== */}
      <Box
        sx={{
          borderTop: "1px solid rgba(148,163,184,0.12)",
          py: 2.5,
          background: "#060B16",
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row", md: "row", lg: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: 3,
            flexWrap: "",
          }}
        >
          <Typography sx={{ fontSize: 12.5, color: "rgba(148,163,184,0.6)" }}>
            © 2026 BluAI Inc. & BluAI Private Limited. All Rights Reserved.
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2.5 }}>
            <Link href="/privacy-policy" style={bottomLinkStyle}>
              Privacy Policy
            </Link>
            <Link href="/terms-of-services" style={bottomLinkStyle}>
              Terms & Conditions
            </Link>
            <Link href="#" style={bottomLinkStyle}>
              Cookies Policy
            </Link>

            <IconButton
              onClick={scrollToTop}
              aria-label="Back to top"
              sx={{
                width: 36,
                height: 36,
                ml: 1,
                color: "#fff",
                background: "#1b4dff",
                "&:hover": { background: "#123fd6" },
              }}
            >
              <ArrowUpward sx={{ fontSize: 17 }} />
            </IconButton>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

/* =========================================================
   HELPERS
========================================================= */
function FooterTitle({ children }) {
  return (
    <Typography
      sx={{
        mb: 2,
        fontSize: 12,
        fontWeight: 700,
        letterSpacing: 1,
        color: "#60A5FA",
        textTransform: "uppercase",
      }}
    >
      {children}
    </Typography>
  );
}

function FooterLinks({ children }) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1.35 }}>
      {children}
    </Box>
  );
}

function FooterLink({ children, onClick }) {
  return (
    <Typography
      onClick={onClick}
      sx={{
        width: "fit-content",
        cursor: "pointer",
        fontSize: 13.5,
        color: "rgba(226,232,240,0.75)",
        display: "flex",
        alignItems: "center",
        gap: 0.8,
        transition: "color 0.2s",
        "&:hover": { color: "#60A5FA" },
        "&::after": {
          content: '"›"',
          opacity: 0.5,
          fontSize: 15,
        },
      }}
    >
      {children}
    </Typography>
  );
}

function ContactPill({ children, href, icon }) {
  return (
    <Box
      component="a"
      href={href}
      sx={{
        display: "flex",
        alignItems: "flex-start",
        gap: 1.3,
        color: "rgba(226,232,240,0.85)",
        textDecoration: "none",
        fontSize: 13.5,
        lineHeight: 1.4,
        "&:hover": { color: "#60A5FA" },
      }}
    >
      <Box
        sx={{
          width: 32,
          height: 32,
          borderRadius: "50%",
          background: "#1b4dff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          flexShrink: 0,
        }}
      >
        {icon}
      </Box>
      <Box>{children}</Box>
    </Box>
  );
}

function CertificationBadge({ src, alt, label }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        flexShrink: 0,
        transition: "transform 0.2s ease",
        "&:hover": {
          transform: "translateY(-3px)",
        },
      }}
    >
      <Box
        component="img"
        src={src}
        alt={alt}
        loading="lazy"
        sx={{
          height: { xs: 48, sm: 56, md: 64 },
          width: { xs: 48, sm: 56, md: 64 },
          objectFit: "contain",
          bgcolor: "white",
          borderRadius: "50%",
          mb: 1.5,
          flexShrink: 0,
        }}
      />
      <Typography
        sx={{
          fontSize: { xs: 12.5, sm: 13.5 },
          fontWeight: 700,
          color: "#F8FAFC",
          lineHeight: 1.2,
          whiteSpace: "nowrap",
          mb: 0.3,
        }}
      >
        {label}
      </Typography>
      <Typography
        sx={{
          fontSize: 11,
          color: "rgba(148,163,184,0.75)",
          fontWeight: 500,
          whiteSpace: "nowrap",
        }}
      >
        Compliant
      </Typography>
    </Box>
  );
}

const bottomLinkStyle = {
  color: "rgba(148,163,184,0.7)",
  textDecoration: "none",
  fontSize: 12.5,
};