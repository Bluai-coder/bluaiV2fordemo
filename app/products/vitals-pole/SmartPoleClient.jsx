// 'use client';

// import {
//   Box,
//   Container,
//   Typography,
//   Stack,
//   List,
//   ListItem,
//   ListItemText,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Chip,
//   Accordion,
//   AccordionSummary,
//   AccordionDetails,
// } from "@mui/material";
// import Image from "next/image";
// import { ArrowDown, CheckCircleIcon } from "lucide-react";
// import SmartPole3D from "../../../components/SmartPole3D";

// function PointItem({ text }) {
//   return (
//     <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
//       <Box sx={{ width: 34, display: "flex", justifyContent: "center", flexShrink: 0, pt: "2px" }}>
//         <Box sx={{ width: 22, height: 22, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", bgcolor: "#fff" }}>
//           <CheckCircleIcon className="!text-[#1b4dff]" sx={{ fontSize: 15, color: "#1b4dff" }} />
//         </Box>
//       </Box>
//       <Typography sx={{ fontSize: 16, lineHeight: 1.9, color: "rgba(7,18,44,0.78)", whiteSpace: "pre-line", flex: 1 }}>
//         {text.trim()}
//       </Typography>
//     </Box>
//   );
// }

// function SectionTitle({ children }) {
//   return (
//     <Typography sx={{ fontWeight: 900, fontSize: { xs: 22, md: 28 }, color: "#0b1c3d", mb: 3, textAlign: "center" }}>
//       {children}
//     </Typography>
//   );
// }

// function SubSectionTitle({ children }) {
//   return (
//     <Typography sx={{ fontWeight: 800, fontSize: { xs: 18, md: 20 }, color: "#0b1c3d", mb: 2, mt: 3 }}>
//       {children}
//     </Typography>
//   );
// }

// export default function SmartPoleClient() {
//   const Highlights = [
//     "Multi-modal health screening station",
//     "Contactless vitals monitoring",
//     "AI-powered health risk assessment",
//     "Cloud-integrated with BluHealth Portal",
//     "Supports ABHA ID, QR, RFID login",
//     "Ideal for high-traffic public health settings",
//     "Modular design for easy deployment",
//   ];

//   const vitalsParams = [
//     { parameter: "Blood Pressure", method: "NIBP" },
//     { parameter: "Heart Rate", method: "PPG" },
//     { parameter: "SpO2", method: "Pulse Oximetry" },
//     { parameter: "Temperature", method: "Infrared" },
//     { parameter: "Respiration Rate", method: "Bio-impedance" },
//   ];

//   const bodyCompositionParams = [
//     "Height", "Weight", "BMI", "Body Fat %", "Visceral Fat",
//     "Muscle Mass", "Bone Mass", "BMR", "Body Water %",
//   ];

//   const aiCapabilities = [
//     "Real-time health anomaly detection",
//     "Predictive risk scoring",
//     "Voice-guided user interaction",
//     "BluASHA AI assistant",
//   ];

//   const portalFeatures = [
//     "HIPAA-compliant cloud platform",
//     "Longitudinal health records",
//     "Clinician dashboard with analytics",
//     "Role-based access control",
//     "WhatsApp / Email report sharing",
//     "Offline mode with auto-sync",
//   ];

//   const integrationStandards = [
//     { standard: "HL7 v2.x", status: "Confirmed" },
//     { standard: "HL7 v3", status: "Confirmed" },
//     { standard: "FHIR R4", status: "Confirmed" },
//     { standard: "SMART on FHIR", status: "Confirmed" },
//     { standard: "IHE profiles", status: "Confirmed" },
//   ];

//   const compatiblePlatforms = [
//     { platform: "Epic", status: "Available" },
//     { platform: "Oracle Health (Cerner)", status: "Available" },
//     { platform: "Bahmni (OpenMRS)", status: "Available" },
//     { platform: "ABDM / ABHA", status: "Available" },
//   ];

//   const certifications = [
//     { certification: "CDSCO (India)", status: "In Process" },
//     { certification: "FDA (USA)", status: "Planned" },
//     { certification: "CE (Europe)", status: "Planned" },
//     { certification: "ISO 13485", status: "In Progress" },
//     { certification: "HIPAA", status: "Yes (BluHealth Portal)" },
//   ];

//   const technicalSpecs = [
//     { spec: "Screen", details: "15.6\" Touchscreen" },
//     { spec: "Connectivity", details: "Wi-Fi 6, LAN, 4G, Bluetooth 5.2" },
//     { spec: "Power", details: "100-240V AC, UPS backup" },
//     { spec: "Dimensions", details: "500mm × 500mm × 1800mm" },
//     { spec: "Weight", details: "45 kg" },
//     { spec: "Operating Temp", details: "10°C to 40°C" },
//     { spec: "Storage", details: "Cloud + 64GB local" },
//     { spec: "Languages", details: "English, Hindi, Punjabi" },
//   ];

//   const useCases = [
//     "Hospitals & Clinics — OPD triage",
//     "Corporate Wellness — employee screening",
//     "Public Health Camps — mass screening",
//     "Pharmacies — walk-in health checks",
//     "Government Health Initiatives — ABDM aligned",
//     "Telemedicine Hubs — pre-consultation data",
//   ];

//   const comparisonData = [
//     { feature: "Form Factor", pole: "Standalone Kiosk", competitor1: "Wall-mounted", competitor2: "Portable" },
//     { feature: "Parameters", pole: "30+", competitor1: "10", competitor2: "15" },
//     { feature: "Contactless Vitals", pole: "Yes", competitor1: "No", competitor2: "No" },
//     { feature: "AI Insights", pole: "Yes", competitor1: "No", competitor2: "No" },
//     { feature: "ABHA Integration", pole: "Yes", competitor1: "No", competitor2: "No" },
//   ];

//   const faqs = [
//     { q: "How long does a screening take?", a: "A full screening takes 5–7 minutes." },
//     { q: "Does it require staff to operate?", a: "Designed for self-service with voice guidance." },
//     { q: "Can it work offline?", a: "Yes, with local storage and auto-sync." },
//     { q: "Which EMR systems are supported?", a: "Epic, Cerner, Bahmni, and more via FHIR." },
//     { q: "Is it GeM listed?", a: "Coming soon. Contact us for procurement." },
//   ];

//   return (
//     <Box sx={{ width: "100%", backgroundColor: "#fff" }}>
//       {/* HERO SECTION - Using 3D Model */}
//       <Box sx={{
//         width: "100%",
//         py: { xs: 6, md: 10 },
//         background: "radial-gradient(circle at 15% 15%, rgba(65,84,241,0.10) 0%, transparent 45%), radial-gradient(circle at 80% 20%, rgba(65,84,241,0.08) 0%, transparent 40%), linear-gradient(180deg, #ffffff 0%, #f7f9ff 100%)",
//       }}>
//         <Container maxWidth="lg">
//           <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, alignItems: "center", justifyContent: "space-between", gap: { xs: 5, md: 4 } }}>
//             <Box sx={{ flex: 1, maxWidth: 680 }}>
//               <Stack spacing={1.5}>
//                 <Typography sx={{ fontWeight: 800, fontSize: { xs: 26, sm: 30, md: 34 }, color: "#0b1c3d", letterSpacing: "-0.02em" }}>
//                   Vitals Pole™ by BluAI
//                 </Typography>
//                 <Typography sx={{ fontWeight: 800, fontSize: { xs: 30, sm: 38, md: 46 }, lineHeight: 1.15, color: "#111827" }}>
//                   Manage. My Health. My Way.™
//                 </Typography>
//                 <Typography sx={{ color: "#42526b", fontWeight: 600, fontSize: { xs: 13.5, sm: 14.5 } }}>
//                   AI-Powered | Contactless | Cloud-Connected
//                 </Typography>
//                 <Typography sx={{ mt: 1, color: "#334155", lineHeight: 1.8, fontSize: { xs: 14.5, md: 15.5 }, maxWidth: 640 }}>
//                   Introducing Vitals Pole™, a next-generation health screening kiosk designed for rapid, contactless vitals monitoring in high-traffic settings. Powered by AI and integrated with the BluHealth™ Portal, it enables seamless health data collection and risk assessment.
//                 </Typography>
//                 <Typography sx={{ mt: 2, fontWeight: 800, fontSize: { xs: 15.5, md: 16.5 }, color: "#0b1c3d" }}>
//                   Smart Health Screening – Anywhere, Anytime
//                 </Typography>
//                 <Typography sx={{ color: "#334155", lineHeight: 1.8, fontSize: { xs: 14.5, md: 15.5 }, maxWidth: 660 }}>
//                   Vitals Pole™ is an indigenous AI-powered health kiosk that delivers rapid vitals screening from a compact, self-service unit. Ideal for hospitals, clinics, corporate campuses, and public health camps, it completes a full checkup in 5–7 minutes without requiring clinical staff.
//                 </Typography>
//               </Stack>
//             </Box>

//             <Box sx={{ flex: 1, width: "100%", display: "flex", justifyContent: { xs: "center", md: "flex-end" } }}>
//               <SmartPole3D />
//             </Box>
//           </Box>

//           <Box sx={{ display: "flex", flexWrap: "wrap", borderRadius: 3, overflow: "hidden", border: "1px solid #eee", bgcolor: "#fafbff", mt: 4 }}>
//             <Box sx={{ flex: { xs: "100%", sm: "33.33%" }, p: 3, textAlign: "center", borderRight: { sm: "1px solid #eee" }, borderBottom: { xs: "1px solid #eee", sm: "none" } }}>
//               <Typography sx={{ fontSize: { xs: 24, md: 28 }, fontWeight: 800, color: "#111" }}>12,000+</Typography>
//               <Typography sx={{ fontSize: 14, color: "#555", mt: 0.5 }}>Screenings completed</Typography>
//             </Box>
//             <Box sx={{ flex: { xs: "100%", sm: "33.33%" }, p: 3, textAlign: "center", borderRight: { sm: "1px solid #eee" }, borderBottom: { xs: "1px solid #eee", sm: "none" } }}>
//               <Typography sx={{ fontSize: { xs: 24, md: 28 }, fontWeight: 800, color: "#111" }}>98%</Typography>
//               <Typography sx={{ fontSize: 14, color: "#555", mt: 0.5 }}>User satisfaction rate</Typography>
//             </Box>
//             <Box sx={{ flex: { xs: "100%", sm: "33.33%" }, p: 3, textAlign: "center" }}>
//               <Typography sx={{ fontSize: { xs: 24, md: 28 }, fontWeight: 800, color: "#111" }}>15+</Typography>
//               <Typography sx={{ fontSize: 14, color: "#555", mt: 0.5 }}>Health parameters measured</Typography>
//             </Box>
//           </Box>
//         </Container>
//       </Box>

//       {/* KEY FEATURES SECTION - Using pole.png image in phone frame */}
//       <Box
//         sx={{
//           width: "100%",
//           py: { xs: 6, md: 10 },
//           background:
//             "radial-gradient(circle at 40% 15%, rgba(255, 255, 255, 0.89) 0%, transparent 45%), #ffffff",
//         }}
//       >
//         <Container maxWidth="lg">
//           <Box
//             sx={{
//               display: "flex",
//               flexDirection: { xs: "column", md: "row" },
//               gap: { xs: 4, md: 6 },
//               alignItems: "flex-start",
//             }}
//           >
//             {/* LEFT: Phone frame with pole.png */}
//             <Box
//               sx={{
//                 flex: 0.9,
//                 display: "flex",
//                 justifyContent: { xs: "center", md: "flex-start" },
//               }}
//             >
//               <Box
//                 sx={{
//                   position: "relative",
//                   width: { xs: 260, sm: 400, md: 720 },
//                   height: { xs: 420, sm: 580, md: 620 },
//                 }}
//               >
//                 <Box
//                   sx={{
//                     position: "absolute",
//                     left: { xs: "10.5%", sm: "10.5%", md: "1%" },
//                     width: "100%",
//                     height: "100%",
//                     overflow: "hidden",
//                   }}
//                 >
//                   <img
//                     src="/pole.png"
//                     alt="Vitals Pole Interface"
//                     style={{
//                       width: "100%",
//                       height: "100%",
//                       objectFit: "cover",
//                     }}
//                   />
//                 </Box>
//               </Box>
//             </Box>

//             {/* RIGHT: Features Accordion */}
//             <Box sx={{ flex: 1.2, width: "100%" }}>
//               <Box
//                 sx={{
//                   display: "flex",
//                   flexDirection: { xs: "column", lg: "row" },
//                   gap: { xs: 4, lg: 6 },
//                 }}
//               >
//                 <Box sx={{ flex: 1 }}>
//                   <Accordion defaultExpanded sx={{ mb: 2, boxShadow: "none", border: "1px solid #eee", borderRadius: 2 }}>
//                     <AccordionSummary expandIcon={<ArrowDown />}>
//                       <Typography sx={{ fontWeight: 600 }}>Smart Connectivity & Integration</Typography>
//                     </AccordionSummary>
//                     <AccordionDetails>
//                       <Typography sx={{ color: "#555" }}>
//                         Multi-Login Support: IC Card, QR Code Scanning, Fingerprint Recognition, ABHA ID
//                       </Typography>
//                       <Typography sx={{ color: "#555", mt: 1 }}>
//                         Cloud-Ready: Fully compatible with BluAI Database and BluHealth™ Portal
//                       </Typography>
//                       <Typography sx={{ color: "#555", mt: 1 }}>
//                         Developer-Friendly: Complete API suite available for seamless third-party integration
//                       </Typography>
//                     </AccordionDetails>
//                   </Accordion>

//                   <SectionTitle>Core Measurement Capabilities</SectionTitle>

//                   <Accordion sx={{ mb: 2, boxShadow: "none", border: "1px solid #eee", borderRadius: 2 }}>
//                     <AccordionSummary expandIcon={<ArrowDown />}>
//                       <Typography sx={{ fontWeight: 600 }}>Vital Signs & Basic Metrics</Typography>
//                     </AccordionSummary>
//                     <AccordionDetails>
//                       <Typography sx={{ color: "#555" }}>
//                         Blood Pressure, Temperature, Respiration, Heart Rate, Oxygen Level (SpO2)
//                       </Typography>
//                       <Typography sx={{ color: "#555", mt: 1 }}>
//                         Age, Weight, Height, BMI
//                       </Typography>
//                     </AccordionDetails>
//                   </Accordion>

//                   <Accordion sx={{ mb: 2, boxShadow: "none", border: "1px solid #eee", borderRadius: 2 }}>
//                     <AccordionSummary expandIcon={<ArrowDown />}>
//                       <Typography sx={{ fontWeight: 600 }}>Physical Composition</Typography>
//                     </AccordionSummary>
//                     <AccordionDetails>
//                       <Typography sx={{ color: "#555" }}>
//                         Body Fat (%, Subcutaneous %, Visceral Fat 1-10)
//                       </Typography>
//                       <Typography sx={{ color: "#555", mt: 1 }}>
//                         Muscle/Mass Metrics (Skeletal Muscle, Lean Mass, Bone Mass, Fat Free Weight, Protein)
//                       </Typography>
//                       <Typography sx={{ color: "#555", mt: 1 }}>
//                         BMR, Health Score
//                       </Typography>
//                     </AccordionDetails>
//                   </Accordion>

//                   <Accordion sx={{ mb: 2, boxShadow: "none", border: "1px solid #eee", borderRadius: 2 }}>
//                     <AccordionSummary expandIcon={<ArrowDown />}>
//                       <Typography sx={{ fontWeight: 600 }}>Monitoring & Detection</Typography>
//                     </AccordionSummary>
//                     <AccordionDetails>
//                       <Typography sx={{ color: "#555" }}>
//                         Body Posture, Emotional State Assessment
//                       </Typography>
//                       <Typography sx={{ color: "#555", mt: 1 }}>
//                         Facial monitoring & treatment effectiveness tracking
//                       </Typography>
//                     </AccordionDetails>
//                   </Accordion>

//                   <Accordion sx={{ mb: 2, boxShadow: "none", border: "1px solid #eee", borderRadius: 2 }}>
//                     <AccordionSummary expandIcon={<ArrowDown />}>
//                       <Typography sx={{ fontWeight: 600 }}>Advanced Diagnostic Features</Typography>
//                     </AccordionSummary>
//                     <AccordionDetails>
//                       <Typography sx={{ color: "#555" }}>
//                         Color Blindness Detection
//                       </Typography>
//                       <Typography sx={{ color: "#555", mt: 1 }}>
//                         Eyesight Screening System
//                       </Typography>
//                       <Typography sx={{ color: "#555", mt: 1 }}>
//                         High-Resolution Integrated Display for real-time data visualization
//                       </Typography>
//                     </AccordionDetails>
//                   </Accordion>
//                 </Box>
//               </Box>
//             </Box>
//           </Box>
//         </Container>
//       </Box>



//       {/* COMPARISON TABLE */}
//       <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
//         <SectionTitle>Comparison with Alternatives</SectionTitle>
//         <TableContainer component={Paper} sx={{ boxShadow: "none", border: "1px solid #eee" }}>
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell><b>Feature</b></TableCell>
//                 <TableCell><b>Vitals Pole</b></TableCell>
//                 <TableCell><b>Competitor A</b></TableCell>
//                 <TableCell><b>Competitor B</b></TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {comparisonData.map((row, i) => (
//                 <TableRow key={i}>
//                   <TableCell>{row.feature}</TableCell>
//                   <TableCell>{row.pole}</TableCell>
//                   <TableCell>{row.competitor1}</TableCell>
//                   <TableCell>{row.competitor2}</TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </Container>

//       {/* CERTIFICATIONS & INTEGRATIONS */}
//       <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
//         <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 4 }}>
//           <Box sx={{ flex: 1 }}>
//             <SectionTitle>Certifications</SectionTitle>
//             <TableContainer component={Paper} sx={{ boxShadow: "none", border: "1px solid #eee" }}>
//               <Table size="small">
//                 <TableBody>
//                   {certifications.map((row, i) => (
//                     <TableRow key={i}>
//                       <TableCell>{row.certification}</TableCell>
//                       <TableCell>{row.status}</TableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             </TableContainer>
//           </Box>
//           <Box sx={{ flex: 1 }}>
//             <SectionTitle>Integration Standards</SectionTitle>
//             <TableContainer component={Paper} sx={{ boxShadow: "none", border: "1px solid #eee" }}>
//               <Table size="small">
//                 <TableBody>
//                   {integrationStandards.map((row, i) => (
//                     <TableRow key={i}>
//                       <TableCell>{row.standard}</TableCell>
//                       <TableCell>{row.status}</TableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             </TableContainer>
//           </Box>
//         </Box>
//       </Container>

//       {/* USE CASES */}
//       <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
//         <SectionTitle>Use Cases</SectionTitle>
//         <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, justifyContent: "center" }}>
//           {useCases.map((useCase, i) => (
//             <Chip key={i} label={useCase} sx={{ bgcolor: "#f0f0f0", py: 2, px: 1, fontSize: 14 }} />
//           ))}
//         </Box>
//       </Container>

//       {/* FAQ SECTION */}
//       <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
//         <SectionTitle>Frequently Asked Questions</SectionTitle>

//         <Accordion sx={{ mb: 2, boxShadow: "none", border: "1px solid #eee", borderRadius: 2 }}>
//           <AccordionSummary expandIcon={<ArrowDown />}>
//             <Typography sx={{ fontWeight: 600 }}>Why Choose Vitals Pole™?</Typography>
//           </AccordionSummary>
//           <AccordionDetails>
//             <Typography sx={{ color: "#555" }}>Efficient: One kiosk, multiple diagnostics—reducing patient wait time and resource load.</Typography>
//             <Typography sx={{ color: "#555", mt: 1 }}>Accurate: Built with clinical-grade components and tested to medical standards.</Typography>
//             <Typography sx={{ color: "#555", mt: 1 }}>Smart: AI-powered analytics for early health risk detection.</Typography>
//             <Typography sx={{ color: "#555", mt: 1 }}>Connected: Real-time sync to cloud platforms for continuous patient records.</Typography>
//             <Typography sx={{ color: "#555", mt: 1 }}>Scalable: Easily integrable into hospitals, diagnostics labs, corporate wellness programs, and telemedicine platforms.</Typography>
//           </AccordionDetails>
//         </Accordion>

//         {faqs.map((faq, i) => (
//           <Accordion key={i} sx={{ mb: 2, boxShadow: "none", border: "1px solid #eee", borderRadius: 2 }}>
//             <AccordionSummary expandIcon={<ArrowDown />}>
//               <Typography sx={{ fontWeight: 600 }}>{faq.q}</Typography>
//             </AccordionSummary>
//             <AccordionDetails>
//               <Typography sx={{ color: "#555" }}>{faq.a}</Typography>
//             </AccordionDetails>
//           </Accordion>
//         ))}
//       </Container>
//     </Box>
//   );
// }
'use client';

import { useRef, useState } from "react";
import {
  Box, Container, Typography, Stack, Chip, Paper, Button, Table,
  TableBody, TableCell, TableContainer, TableHead, TableRow, Divider,
} from "@mui/material";
import {
  ArrowRight, Shield, Activity, Cloud, Timer, HeartPulse,
  Scale, Star, PlayCircle, BadgeCheck, Fingerprint, Cpu, Linkedin, Twitter, Facebook, Instagram,
  ChevronDown, Wifi, Sparkles, Rotate3d, ChevronLeft, ChevronRight,
  Radio, Plus, Minus, CheckCircle2
} from "lucide-react";
import SmartPole3D from "../../../components/SmartPole3D";

// --- Typography Helper ---
const SectionTitle = ({ children, align = "center", light = false }) => (
  <Typography sx={{
    fontWeight: 900, fontSize: { xs: 28, sm: 36, md: 42 }, color: light ? "#fff" : "#0a1a3c",
    textAlign: align, letterSpacing: "-0.03em", lineHeight: 1.1, mb: 2
  }}>
    {children}
  </Typography>
);

const SubHeading = ({ children, align = "center", light = false }) => (
  <Typography sx={{
    color: light ? "#cbd5e1" : "#6b7280", fontSize: { xs: 15, md: 18 }, mb: { xs: 4, md: 6 },
    textAlign: align, maxWidth: 650, mx: "auto", lineHeight: 1.6, fontWeight: 400
  }}>
    {children}
  </Typography>
);

// --- Feature Accordion ---
const FeatureAccordion = ({ icon, title, content, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <Box sx={{
      mb: 2, borderRadius: 3,
      bgcolor: 'rgba(255,255,255,0.05)',
      border: '1px solid rgba(255,255,255,0.1)',
      transition: 'all 0.3s ease',
      overflow: 'hidden',
      '&:hover': { borderColor: 'rgba(255,255,255,0.2)' }
    }}>
      <Box
        onClick={() => setIsOpen(!isOpen)}
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 2.5, cursor: 'pointer', userSelect: 'none', gap: 2 }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <Box sx={{
            p: 1, borderRadius: 2, display: 'flex',
            bgcolor: isOpen ? '#4756d4' : 'rgba(71,86,212,0.2)',
            color: isOpen ? '#fff' : '#93c5fd', transition: 'all 0.3s ease'
          }}>
            {icon}
          </Box>
          <Typography sx={{ fontWeight: 700, fontSize: { xs: 14, md: 15 }, color: '#fff' }}>{title}</Typography>
        </Box>
        <ChevronDown
          size={18} color={isOpen ? '#fff' : '#94a3b8'}
          style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}
        />
      </Box>
      <Box sx={{
        maxHeight: isOpen ? '500px' : '0px', opacity: isOpen ? 1 : 0, overflow: 'hidden',
        transition: 'max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease'
      }}>
        <Box sx={{ px: 2.5, pb: 2.5, pt: 0 }}>
          <Divider sx={{ mb: 2, borderColor: 'rgba(255,255,255,0.1)' }} />
          <Typography sx={{ color: '#94a3b8', fontSize: 13, lineHeight: 1.7 }}>{content}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

// --- FAQ Accordion ---
const FAQItem = ({ question, answer, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <Box sx={{
      mb: 1.5, borderRadius: 2, border: '1px solid #e5e7eb',
      bgcolor: '#fff', overflow: 'hidden',
      transition: 'all 0.3s ease',
      '&:hover': { borderColor: '#4756d4' }
    }}>
      <Box
        onClick={() => setIsOpen(!isOpen)}
        sx={{ p: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', userSelect: 'none', gap: 2 }}
      >
        <Typography sx={{ fontWeight: 800, fontSize: { xs: 15, md: 16 }, color: '#111827' }}>{question}</Typography>
        <Box sx={{
          width: 28, height: 28, borderRadius: '50%',
          bgcolor: isOpen ? '#0a1a3c' : '#f3f4f6',
          color: isOpen ? '#fff' : '#111827', flexShrink: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'all 0.3s ease'
        }}>
          {isOpen ? <Minus size={14} /> : <Plus size={14} />}
        </Box>
      </Box>
      <Box sx={{
        maxHeight: isOpen ? '300px' : '0px', opacity: isOpen ? 1 : 0, overflow: 'hidden',
        transition: 'max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease'
      }}>
        <Box sx={{ px: 3, pb: 3, pt: 0 }}>
          <Divider sx={{ mb: 2 }} />
          <Typography sx={{ color: '#6b7280', fontSize: 14, lineHeight: 1.7 }}>{answer}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

// --- 360 Viewer ---
const ProductGallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [rotation, setRotation] = useState(0);
  const lastX = useRef(0);

  const galleryItems = [
    { type: '360', label: '360° View', src: '/pole.png' },
    { type: 'image', label: 'Side View', src: '/pole/pole1.webp', transform: 'scaleX(-1)' },
    { type: 'image', label: 'Front View', src: '/pole/pole2.webp', transform: 'scaleX(1)' },
    { type: 'image', label: 'Deployment', src: '/pole/pole3.webp', objectPosition: 'bottom' },
  ];


  const handleMouseDown = (e) => {
    if (galleryItems[activeIndex].type !== '360') return;
    setIsDragging(true);
    lastX.current = e.clientX;
  };

  const handleMouseMove = (e) => {
    if (!isDragging || galleryItems[activeIndex].type !== '360') return;
    const delta = e.clientX - lastX.current;
    setRotation(prev => prev + delta * 0.5);
    lastX.current = e.clientX;
  };

  const handleMouseUp = () => setIsDragging(false);
  const handleNext = () => setActiveIndex((prev) => (prev + 1) % galleryItems.length);
  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);

  return (
    <Box sx={{ width: '100%', maxWidth: 650, mx: 'auto', position: 'relative' }}>
      <Box
        sx={{
          position: 'relative', width: '100%', height: { xs: 350, sm: 420, md: 520 },
          borderRadius: 4, overflow: 'hidden', bgcolor: 'transparent',
          cursor: galleryItems[activeIndex].type === '360' ? (isDragging ? 'grabbing' : 'grab') : 'default',
          userSelect: 'none'
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {galleryItems[activeIndex].type === '360' ? (
          <SmartPole3D />
        ) : (
          <img
            src={galleryItems[activeIndex].src}
            alt={galleryItems[activeIndex].label}
            style={{
              width: '100%', height: '100%', objectFit: 'cover',
              transform: galleryItems[activeIndex].transform || 'none',
              objectPosition: galleryItems[activeIndex].objectPosition || 'center'
            }}
          />
        )}

        <Box sx={{ position: 'absolute', top: '50%', left: 16, transform: 'translateY(-50%)', width: 48, height: 48, borderRadius: 2, bgcolor: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 5, '&:hover': { bgcolor: 'rgba(0,0,0,0.1)' } }} onClick={handlePrev}>
          <ChevronLeft size={28} color="#111827" />
        </Box>
        <Box sx={{ position: 'absolute', top: '50%', right: 16, transform: 'translateY(-50%)', width: 48, height: 48, borderRadius: 2, bgcolor: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 5, '&:hover': { bgcolor: 'rgba(0,0,0,0.1)' } }} onClick={handleNext}>
          <ChevronRight size={28} color="#111827" />
        </Box>

        {galleryItems[activeIndex].type === '360' && (
          <Box sx={{ position: 'absolute', bottom: 20, left: '70%', transform: 'translateX(-20%)', display: 'flex', alignItems: 'center', gap: 2, bgcolor: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(10px)', px: 4, py: 1.5, borderRadius: 3, border: '1px solid rgba(255,255,255,0.1)' }}>
            <Typography sx={{ fontSize: 16, fontWeight: 800, color: '#fff' }}>360°</Typography>
            <Rotate3d size={24} color="#fff" />
          </Box>
        )}
      </Box>

      <Box sx={{ display: 'flex', gap: 2, mt: 2, overflowX: 'auto', pb: 2, '&::-webkit-scrollbar': { height: 6 }, '&::-webkit-scrollbar-thumb': { bgcolor: '#cbd5e1', borderRadius: 3 } }}>
        {galleryItems.map((item, i) => (
          <Box
            key={i}
            onClick={() => setActiveIndex(i)}
            sx={{
              position: 'relative', flex: '0 0 auto', width: { xs: 100, md: 130 }, height: { xs: 70, md: 90 },
              borderRadius: 3, overflow: 'hidden', cursor: 'pointer',
              border: activeIndex === i ? '3px solid #4756d4' : '3px solid transparent',
              boxShadow: activeIndex === i ? '0 10px 20px rgba(71,86,212,0.2)' : 'none',
              transition: 'all 0.3s ease', '&:hover': { opacity: 0.9 }
            }}
          >
            {item.type === '360' ? (
              <Box sx={{ width: '100%', height: '100%', bgcolor: '#eef2ff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                <Rotate3d size={28} color="#4756d4" />
                <Typography sx={{ fontSize: 12, fontWeight: 800, color: '#4756d4' }}>360°</Typography>
              </Box>
            ) : (
              <img src={item.src} alt={item.label} style={{ width: '100%', height: '100%', objectFit: 'cover', transform: item.transform || 'none', objectPosition: item.objectPosition || 'center' }} />
            )}
            {i === 0 && (
              <Box sx={{ position: 'absolute', top: 4, right: 4, bgcolor: '#f59e0b', color: '#fff', borderRadius: '50%', width: 18, height: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 900 }}>360</Box>
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default function SmartPoleClient() {

  const integrationStandards = [
    { standard: "HL7 v2.x", status: "Confirmed" },
    { standard: "HL7 v3", status: "Confirmed" },
    { standard: "FHIR R4", status: "Confirmed" },
    { standard: "SMART on FHIR", status: "Confirmed" },
    { standard: "IHE profiles", status: "Confirmed" },
  ];

  const certifications = [
    { certification: "CDSCO (India)", status: "In Process" },
    { certification: "FDA (USA)", status: "Planned" },
    { certification: "CE (Europe)", status: "Planned" },
    { certification: "ISO 13485", status: "In Progress" },
    { certification: "HIPAA", status: "Yes (BluHealth Portal)" },
  ];

  const useCases = [
    "Hospitals & Clinics — OPD triage",
    "Corporate Wellness — employee screening",
    "Public Health Camps — mass screening",
    "Pharmacies — walk-in health checks",
    "Government Health Initiatives — ABDM aligned",
    "Telemedicine Hubs — pre-consultation data",
  ];

  const comparisonData = [
    { feature: "Form Factor", pole: "Standalone Kiosk", competitor1: "Wall-mounted", competitor2: "Portable" },
    { feature: "Parameters", pole: "30+", competitor1: "10", competitor2: "15" },
    { feature: "Contactless Vitals", pole: "Yes", competitor1: "No", competitor2: "No" },
    { feature: "AI Insights", pole: "Yes", competitor1: "No", competitor2: "No" },
    { feature: "ABHA Integration", pole: "Yes", competitor1: "No", competitor2: "No" },
  ];

  const faqs = [
    { q: "How long does a screening take?", a: "A full screening takes 5–7 minutes." },
    { q: "Does it require staff to operate?", a: "Designed for self-service with voice guidance." },
    { q: "Can it work offline?", a: "Yes, with local storage and auto-sync." },
    { q: "Which EMR systems are supported?", a: "Epic, Cerner, Bahmni, and more via FHIR." },
    { q: "Is it GeM listed?", a: "Coming soon. Contact us for procurement." },
  ];

  return (
    <Box sx={{ width: "100%", backgroundColor: "#ffffff", fontFamily: 'Inter, sans-serif', overflowX: 'hidden' }}>

      <style>{`
        @keyframes float { 0% { transform: translateY(0px); } 50% { transform: translateY(-12px); } 100% { transform: translateY(0px); } }
        @keyframes pulseGlow { 0% { box-shadow: 0 0 0 0 rgba(71,86,212,0.5); } 70% { box-shadow: 0 0 0 20px rgba(71,86,212,0); } 100% { box-shadow: 0 0 0 0 rgba(71,86,212,0); } }
      `}</style>

      {/* 1. HERO - PERFECT & UNTOUCHED */}
      <Box sx={{
        minHeight: '100vh', display: 'flex', alignItems: 'center',
        position: 'relative', overflow: 'hidden',
        pt: { xs: 6, md: 8 }, pb: { xs: 6, md: 10 },
        background: 'linear-gradient(135deg, #f8fafc 0%, #eef2ff 50%, #ffffff 100%)'
      }}>
        <Box sx={{ position: 'absolute', top: -100, left: -100, width: 500, height: 500, bgcolor: '#4756d4', opacity: 0.1, borderRadius: '50%', filter: 'blur(100px)' }} />
        <Box sx={{ position: 'absolute', bottom: -100, right: -100, width: 500, height: 500, bgcolor: '#10b981', opacity: 0.1, borderRadius: '50%', filter: 'blur(100px)' }} />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', gap: { xs: 6, md: 8 } }}>


            <Box sx={{ flex: 1.2, width: '100%' }}>
              <ProductGallery />
            </Box>
            <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' }, width: '100%' }}>
        

              <Typography sx={{ fontWeight: 900, fontSize: { xs: 38, sm: 48, md: 48 }, color: '#0a1a3c', letterSpacing: '-0.04em', lineHeight: 0.95, mb: 4 }}>
                Vitals Pole™ <br /> by BluAI
              </Typography>

              <Typography sx={{ fontWeight: 900, fontSize: { xs: 20, sm: 24, md: 30 }, background: 'linear-gradient(90deg, #4756d4, #10b981)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', mb: 3 }}>
                Manage. My Health. My Way.™
              </Typography>

              <Typography sx={{ color: '#4b5563', fontSize: { xs: 15, md: 18 }, mb: 5, maxWidth: 500, lineHeight: 1.7, mx: { xs: 'auto', md: 0 } }}>
                A next-generation health screening kiosk for rapid, contactless vitals monitoring in high-traffic settings.
              </Typography>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent={{ xs: 'center', md: 'flex-start' }} sx={{ mb: 5 }}>
                <Button variant="contained" endIcon={<ArrowRight />} sx={{
                  bgcolor: '#0a1a3c', color: '#fff', fontWeight: 800, px: 5, py: 2, borderRadius: 3,
                  textTransform: 'none', fontSize: 16, boxShadow: '0 15px 30px rgba(10,26,60,0.3)', width: { xs: '100%', sm: 'auto' },
                  '&:hover': { bgcolor: '#1e3a8a', transform: 'translateY(-2px)', boxShadow: '0 20px 40px rgba(10,26,60,0.4)' }
                }}>
                  Request Demo
                </Button>
                <Button variant="outlined" startIcon={<PlayCircle size={20} />} sx={{
                  borderColor: '#cbd5e1', color: '#0a1a3c', fontWeight: 800, px: 5, py: 2, borderRadius: 3,
                  textTransform: 'none', fontSize: 16, bgcolor: 'rgba(255,255,255,0.8)', width: { xs: '100%', sm: 'auto' },
                  '&:hover': { borderColor: '#4756d4', color: '#4756d4', bgcolor: '#fff' }
                }}>
                  Watch Demo
                </Button>
              </Stack>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent={{ xs: 'center', md: 'flex-start' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                  <Shield size={18} color="#10b981" /> <Typography sx={{ fontSize: 14, fontWeight: 600, color: '#374151' }}>Secure & Compliant</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                  <Cloud size={18} color="#10b981" /> <Typography sx={{ fontSize: 14, fontWeight: 600, color: '#374151' }}>Cloud Connected</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                  <Fingerprint size={18} color="#10b981" /> <Typography sx={{ fontSize: 14, fontWeight: 600, color: '#374151' }}>AI-Powered</Typography>
                </Box>
              </Stack>
            </Box>


          </Box>
        </Container>
      </Box>

      {/* 2. FEATURES - TIGHT & DENSE */}
      <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: '#0a1a3c' }}>
        <Container maxWidth="lg">
          <SectionTitle light>Core Measurement Capabilities</SectionTitle>
          <SubHeading light>Tap to explore advanced health metrics in detail.</SubHeading>

          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: { xs: 6, md: 6 }, alignItems: 'center' }}>
            {/* Left: Accordions */}
            <Box sx={{ flex: 1, width: '100%' }}>
              <FeatureAccordion
                icon={<Wifi size={20} />}
                title="Smart Connectivity & Integration"
                defaultOpen={true}
                content="Multi-Login Support: IC Card, QR Code Scanning, Fingerprint Recognition, ABHA ID. Cloud-Ready: Fully compatible with BluAI Database and BluHealth™ Portal. Developer-Friendly: Complete API suite available for seamless third-party integration."
              />
              <FeatureAccordion
                icon={<Activity size={20} />}
                title="Vital Signs & Basic Metrics"
                content="Blood Pressure, Temperature, Respiration, Heart Rate, Oxygen Level (SpO2). Age, Weight, Height, BMI."
              />
              <FeatureAccordion
                icon={<Scale size={20} />}
                title="Physical Composition"
                content="Body Fat (%, Subcutaneous %, Visceral Fat 1-10). Muscle/Mass Metrics (Skeletal Muscle, Lean Mass, Bone Mass, Fat Free Weight, Protein). BMR, Health Score."
              />
              <FeatureAccordion
                icon={<Radio size={20} />}
                title="Monitoring & Detection"
                content="Body Posture, Emotional State Assessment. Facial monitoring & treatment effectiveness tracking."
              />
              <FeatureAccordion
                icon={<Sparkles size={20} />}
                title="Advanced Diagnostic Features"
                content="Color Blindness Detection. Eyesight Screening System. High-Resolution Integrated Display for real-time data visualization."
              />
            </Box>

            {/* Right: Clean Centered Image */}
            <Box sx={{ flex: 1, width: '100%', position: 'relative' }}>
              <Box sx={{ borderRadius: 4, overflow: 'hidden', boxShadow: '0 40px 80px rgba(0,0,0,0.5)', border: '8px solid rgba(255,255,255,0.1)' }}>
                <img src="/pole.png" alt="Vitals Pole" style={{ width: '100%', height: 'auto', display: 'block' }} />
              </Box>
          
            </Box>
          </Box>
        </Container>
      </Box>

      {/* 3. COMPARISON & TRUST - CLEAN VISUAL CARDS */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#f8fafc' }}>
        <Container maxWidth="lg">
          <SectionTitle>Comparison with Alternatives</SectionTitle>
          <SubHeading>The clear choice for modern healthcare infrastructure.</SubHeading>

          {/* Visual Comparison Cards */}
          <Box sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
            gap: 4,
            maxWidth: 1100,
            mx: 'auto',
            mb: 10
          }}>
            {/* Competitor A Card */}
            <Paper elevation={0} sx={{
              p: 4, borderRadius: 4, bgcolor: '#fff', border: '1px solid #e5e7eb', opacity: 0.6
            }}>
              <Typography sx={{ fontWeight: 800, fontSize: 16, color: '#9ca3af', mb: 3 }}>Competitor A</Typography>
              <Stack spacing={2.5}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography sx={{ fontSize: 14, fontWeight: 600, color: '#374151' }}>Form Factor</Typography>
                  <Typography sx={{ fontSize: 14, color: '#9ca3af' }}>Wall-mounted</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography sx={{ fontSize: 14, fontWeight: 600, color: '#374151' }}>Parameters</Typography>
                  <Typography sx={{ fontSize: 14, color: '#9ca3af' }}>10</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography sx={{ fontSize: 14, fontWeight: 600, color: '#374151' }}>Contactless Vitals</Typography>
                  <Typography sx={{ fontSize: 14, color: '#9ca3af' }}>No</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography sx={{ fontSize: 14, fontWeight: 600, color: '#374151' }}>AI Insights</Typography>
                  <Typography sx={{ fontSize: 14, color: '#9ca3af' }}>No</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography sx={{ fontSize: 14, fontWeight: 600, color: '#374151' }}>ABHA Integration</Typography>
                  <Typography sx={{ fontSize: 14, color: '#9ca3af' }}>No</Typography>
                </Box>
              </Stack>
            </Paper>

            {/* Competitor B Card */}
            <Paper elevation={0} sx={{
              p: 4, borderRadius: 4, bgcolor: '#fff', border: '1px solid #e5e7eb', opacity: 0.6
            }}>
              <Typography sx={{ fontWeight: 800, fontSize: 16, color: '#9ca3af', mb: 3 }}>Competitor B</Typography>
              <Stack spacing={2.5}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography sx={{ fontSize: 14, fontWeight: 600, color: '#374151' }}>Form Factor</Typography>
                  <Typography sx={{ fontSize: 14, color: '#9ca3af' }}>Portable</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography sx={{ fontSize: 14, fontWeight: 600, color: '#374151' }}>Parameters</Typography>
                  <Typography sx={{ fontSize: 14, color: '#9ca3af' }}>15</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography sx={{ fontSize: 14, fontWeight: 600, color: '#374151' }}>Contactless Vitals</Typography>
                  <Typography sx={{ fontSize: 14, color: '#9ca3af' }}>No</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography sx={{ fontSize: 14, fontWeight: 600, color: '#374151' }}>AI Insights</Typography>
                  <Typography sx={{ fontSize: 14, color: '#9ca3af' }}>No</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography sx={{ fontSize: 14, fontWeight: 600, color: '#374151' }}>ABHA Integration</Typography>
                  <Typography sx={{ fontSize: 14, color: '#9ca3af' }}>No</Typography>
                </Box>
              </Stack>
            </Paper>

            {/* Vitals Pole Card (Highlighted) */}
            <Paper elevation={0} sx={{
              p: 4, borderRadius: 4,
              bgcolor: '#0a1a3c', color: '#fff',
              boxShadow: '0 25px 50px -12px rgba(10,26,60,0.5)',
              border: '1px solid #4756d4',
              position: 'relative'
            }}>
              <Box sx={{
                position: 'absolute', top: 16, right: 16,
                bgcolor: '#4756d4', px: 2, py: 0.5, borderRadius: 3,
                fontSize: 11, fontWeight: 900, letterSpacing: 1
              }}>
                BEST
              </Box>
              <Typography sx={{ fontWeight: 900, fontSize: 18, color: '#fff', mb: 3 }}>Vitals Pole™</Typography>
              <Stack spacing={2.5}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography sx={{ fontSize: 14, fontWeight: 500, color: '#cbd5e1' }}>Form Factor</Typography>
                  <Typography sx={{ fontSize: 14, fontWeight: 800, color: '#4ade80' }}>Standalone Kiosk</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography sx={{ fontSize: 14, fontWeight: 500, color: '#cbd5e1' }}>Parameters</Typography>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Typography sx={{ fontSize: 14, fontWeight: 800, color: '#4ade80' }}>30+</Typography>
                    <CheckCircle2 size={18} color="#4ade80" />
                  </Stack>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography sx={{ fontSize: 14, fontWeight: 500, color: '#cbd5e1' }}>Contactless Vitals</Typography>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Typography sx={{ fontSize: 14, fontWeight: 800, color: '#4ade80' }}>Yes</Typography>
                    <CheckCircle2 size={18} color="#4ade80" />
                  </Stack>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography sx={{ fontSize: 14, fontWeight: 500, color: '#cbd5e1' }}>AI Insights</Typography>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Typography sx={{ fontSize: 14, fontWeight: 800, color: '#4ade80' }}>Yes</Typography>
                    <CheckCircle2 size={18} color="#4ade80" />
                  </Stack>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography sx={{ fontSize: 14, fontWeight: 500, color: '#cbd5e1' }}>ABHA Integration</Typography>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Typography sx={{ fontSize: 14, fontWeight: 800, color: '#4ade80' }}>Yes</Typography>
                    <CheckCircle2 size={18} color="#4ade80" />
                  </Stack>
                </Box>
              </Stack>
            </Paper>
          </Box>

          {/* Trust & Compliance Section below */}
          <Box sx={{ maxWidth: 1000, mx: 'auto' }}>
            <Divider sx={{ mb: 8 }} />
            <SectionTitle>Trusted. Certified. Ready.</SectionTitle>

            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 6 }}>
              <Box sx={{ flex: 1 }}>
                <Typography sx={{ fontWeight: 800, fontSize: 14, color: '#111827', mb: 3, textTransform: 'uppercase', letterSpacing: 0.5 }}>Certifications</Typography>
                <Stack spacing={1.5}>
                  {certifications.map((cert, i) => (
                    <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <BadgeCheck size={20} color="#10b981" />
                      <Typography sx={{ fontSize: 15, color: '#374151', fontWeight: 600 }}>{cert.certification} <span style={{ color: '#9ca3af', fontWeight: 400 }}>({cert.status})</span></Typography>
                    </Box>
                  ))}
                </Stack>
              </Box>

              <Box sx={{ flex: 1 }}>
                <Typography sx={{ fontWeight: 800, fontSize: 14, color: '#111827', mb: 3, textTransform: 'uppercase', letterSpacing: 0.5 }}>Integration Standards</Typography>
                <Stack spacing={1.5}>
                  {integrationStandards.map((std, i) => (
                    <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Fingerprint size={20} color="#4756d4" />
                      <Typography sx={{ fontSize: 15, color: '#374151', fontWeight: 600 }}>{std.standard} <span style={{ color: '#9ca3af', fontWeight: 400 }}>({std.status})</span></Typography>
                    </Box>
                  ))}
                </Stack>
              </Box>

              <Box sx={{ flex: 1 }}>
                <Typography sx={{ fontWeight: 800, fontSize: 14, color: '#111827', mb: 3, textTransform: 'uppercase', letterSpacing: 0.5 }}>Use Cases</Typography>
                <Stack spacing={1.5}>
                  {useCases.map((use, i) => (
                    <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <CheckCircle2 size={20} color="#4756d4" />
                      <Typography sx={{ fontSize: 15, color: '#374151', fontWeight: 500 }}>{use}</Typography>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* 4. VIDEO CTA - TIGHT */}
      <Box sx={{ position: 'relative', py: { xs: 8, md: 10 }, display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'url(/pole.png) center/cover fixed', minHeight: { xs: 300, md: 400 } }}>
        <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, bgcolor: 'rgba(10,26,60,0.85)' }} />
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <Button sx={{
            width: { xs: 70, md: 100 }, height: { xs: 70, md: 100 }, borderRadius: '50%', bgcolor: '#fff', color: '#0a1a3c',
            display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 4,
            animation: 'pulseGlow 2s infinite', border: '8px solid rgba(255,255,255,0.2)'
          }}>
            <PlayCircle size={{ xs: 36, md: 50 }} />
          </Button>
          <Typography sx={{ fontWeight: 900, fontSize: { xs: 28, md: 48 }, color: '#fff', mb: 3 }}>See Vitals Pole™ in Action</Typography>
          <Typography sx={{ color: '#cbd5e1', fontSize: { xs: 15, md: 18 }, mb: 5, maxWidth: 550, mx: 'auto' }}>
            Watch our AI-powered health assessment platform transform diagnostics in under 60 seconds.
          </Typography>
          <Button variant="contained" sx={{ bgcolor: '#fff', color: '#0a1a3c', fontWeight: 900, px: { xs: 5, md: 8 }, py: 2, borderRadius: 3, fontSize: { xs: 15, md: 16 } }}>Watch Full Demo</Button>
        </Container>
      </Box>

      {/* 5. FAQ - TIGHT & WORKING */}
      <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: '#fff' }}>
        <Container maxWidth="md">
          <SectionTitle>Frequently Asked Questions</SectionTitle>

          <Paper sx={{ p: { xs: 3, md: 5 }, borderRadius: 4, bgcolor: '#f8fafc', mb: 5, border: '1px solid #e5e7eb' }}>
            <Typography sx={{ fontWeight: 800, fontSize: 20, color: '#111827', mb: 2 }}>Why Choose Vitals Pole™?</Typography>
            <Stack spacing={1.5}>
              <Typography sx={{ color: '#6b7280', fontSize: 15, lineHeight: 1.6 }}>Efficient: One kiosk, multiple diagnostics—reducing patient wait time and resource load.</Typography>
              <Typography sx={{ color: '#6b7280', fontSize: 15, lineHeight: 1.6 }}>Accurate: Built with clinical-grade components and tested to medical standards.</Typography>
              <Typography sx={{ color: '#6b7280', fontSize: 15, lineHeight: 1.6 }}>Smart: AI-powered analytics for early health risk detection.</Typography>
              <Typography sx={{ color: '#6b7280', fontSize: 15, lineHeight: 1.6 }}>Connected: Real-time sync to cloud platforms for continuous patient records.</Typography>
              <Typography sx={{ color: '#6b7280', fontSize: 15, lineHeight: 1.6 }}>Scalable: Easily integrable into hospitals, diagnostics labs, corporate wellness programs, and telemedicine platforms.</Typography>
            </Stack>
          </Paper>

          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.q} answer={faq.a} defaultOpen={i === 0} />
          ))}
        </Container>
      </Box>

    </Box>
  );
}