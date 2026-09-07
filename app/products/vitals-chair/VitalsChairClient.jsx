







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
// import ProductFlow from "@/components/ProductFlow";
// import { ArrowDown, CheckCircleIcon, CheckIcon, HelpCircleIcon } from "lucide-react";
// import VitalsChair3D from "../../../components/VitalsChair3D";

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

// export default function VitalsChairLanding() {
//   const Highlights = [
//     "55+ clinically measured health parameters",
//     "Gel-free 5-lead and 12-lead ECG",
//     "Full body composition analysis via bioimpedance (BIA)",
//     "AI-generated health insights and risk detection",
//     "Cloud-synced to HIPAA-compliant BluHealth Portal",
//     "Seamless EMR/EHR/HIS integration",
//     "Single ergonomic chair — no multi-room setup required",
//     "Institutionally validated — launched under Government of India's Office of the Principal Scientific Adviser",
//   ];

//   const cardiovascularParams = [
//     { parameter: "Blood pressure (NIBP)", method: "Automated cuff", notes: "Systolic, diastolic, MAP" },
//     { parameter: "Heart rate", method: "ECG + PPG", notes: "BPM and rhythm" },
//     { parameter: "Heart rate variability (HRV)", method: "ECG", notes: "Autonomic health indicator" },
//     { parameter: "ECG — 5-lead", method: "Dry/gel-free electrodes", notes: "Real-time waveform" },
//     { parameter: "ECG — 12-lead", method: "Dry/gel-free electrodes", notes: "Full cardiac assessment" },
//     { parameter: "Arrhythmia detection", method: "AI analysis of ECG", notes: "Confirm if included" },
//   ];

//   const respiratoryParams = [
//     { parameter: "SpO2 (oxygen saturation)", method: "Pulse oximetry" },
//     { parameter: "Respiration rate", method: "Impedance / chest movement" },
//     { parameter: "EtCO2 / spirometry", method: "Confirm if lung function test is included" },

//   ];

//   const bodyCompositionParams = [
//     "Height", "Weight", "BMI (Body Mass Index)", "Visceral fat percentage",
//     "Subcutaneous fat", "Skeletal muscle mass", "Protein content",
//     "Basal metabolic rate (BMR)", "Body water percentage"
//   ];

//   const thermalParams = ["Body temperature"];

//   const pocBloodTests = [
//     { parameter: "Blood glucose", status: "Confirmed" },
//     { parameter: "HbA1c", status: "Confirmed" },
//     { parameter: "Haemoglobin", status: "Confirmed" },
//     { parameter: "Cholesterol (total / LDL / HDL)", status: "Confirmed" },
//     { parameter: "Uric acid", status: "Confirmed" },
//     { parameter: "Full blood count panel", status: "List exact POC tests supported" },
//   ];

//   const AdditionalDiagnostics = [
//     { parameter: "Vision screening", status: "Confirmed" },
//     { parameter: "Hearing screening", status: "Confirmed" },
//     { parameter: "Peripheral oxygen (SpHb)", status: "Confirmed" },
//     { parameter: "Any other parameters in your 45+ list", status: "List remaining parameters" },


//   ]
//   const aiCapabilities = [
//     "AI-generated health risk reports after each session",
//     "Early detection flagging for cardiovascular, metabolic, and respiratory risk markers",
//     "Personalized health insights based on longitudinal data",
//     "AI-enabled ECG interpretation (gel-free, real-time)",
//     "BluASHA AI assistant for patient guidance and data collection",
//     "Clinical validation: ECG sensitivity 98.2%, specificity 96.5%",
//   ];

//   const portalFeatures = [
//     "HIPAA-compliant cloud platform",
//     "Longitudinal patient health records",
//     "Clinician dashboard with trend analysis",
//     "Role-based access control",
//     "Data residency: India servers (with international options)",
//     "Mobile app available for iOS and Android",
//     "WhatsApp / email report sharing",
//     "Offline mode with local storage and auto-sync",
//   ];

//   const integrationStandards = [
//     { standard: "HL7 v2.x", status: "Confirmed" },
//     { standard: "HL7 v3", status: "Confirmed" },
//     { standard: "FHIR R4", status: "Confirmed" },
//     { standard: "FHIR R5", status: "In Development" },
//     { standard: "SMART on FHIR", status: "Confirmed" },
//     { standard: "IHE profiles (PCD-01, etc.)", status: "Confirmed" },
//     { standard: "IEEE 11073 (medical device comms)", status: "Confirmed" },
//     { standard: "DICOM", status: "Confirmed" },
//     { standard: "ADT feeds", status: "Confirmed" },
//   ];

//   const compatiblePlatforms = [
//     { platform: "Epic", status: "Available on request" },
//     { platform: "Oracle Health (Cerner)", status: "Available on request" },
//     { platform: "Bahmni (OpenMRS)", status: "Available" },
//     { platform: "eHospital Systems", status: "Available" },
//     { platform: "Practo / HealthPlix", status: "Available" },
//     { platform: "ABDM / ABHA (Ayushman Bharat)", status: "Available" },
//   ];

//   const certifications = [
//     { certification: "Patent", status: "Pending — #202411094218" },
//     { certification: "CDSCO (India) clearance", status: "In Process" },
//     { certification: "FDA clearance (USA)", status: "Planned" },
//     { certification: "CE marking (Europe)", status: "Planned" },
//     { certification: "ISO 13485 (Medical device QMS)", status: "In Progress" },
//     { certification: "HIPAA compliance", status: "Yes (BluHealth Portal)" },
//   ];

//   const technicalSpecs = [
//     { spec: "Session duration", details: "7–10 minutes" },
//     { spec: "Display", details: "15.6\" Touchscreen, 1920x1080" },
//     { spec: "Connectivity", details: "Wi-Fi 6, Gigabit LAN, 4G/LTE optional, Bluetooth 5.2" },
//     { spec: "Power", details: "100-240V AC, 50/60Hz, Integrated UPS backup" },
//     { spec: "Dimensions (W × D × H)", details: "850mm × 750mm × 1150mm" },
//     { spec: "Weight", details: "85 kg" },
//     { spec: "Operating temperature", details: "10°C to 40°C" },
//     { spec: "Data storage", details: "Cloud + 64GB local storage" },
//     { spec: "Multi-language support", details: "English, Hindi, Punjabi" },
//     { spec: "Patient ID / biometric login", details: "ABHA ID, QR code, RFID, Fingerprint optional" },
//   ];

//   const useCases = [
//     "Hospitals and multi-specialty clinics — OPD triage and pre-consultation vitals",
//     "Corporate wellness — employee health screening programs",
//     "Health camps and rural outreach — portable preventive care",
//     "Senior living communities — regular monitoring without clinical visits",
//     "Pharmacies and diagnostic labs — walk-in health check service",
//     "Insurance and wellness programs — risk stratification",
//     "Government health initiatives — ABDM / Ayushman Bharat aligned screening",
//     "Telemedicine hubs — pre-consultation data capture",
//   ];

//   const comparisonData = [
//     { feature: "Form factor", vitals: "Chair", coc: "Standing kiosk", welch: "Wheeled monitor" },
//     { feature: "Parameters", vitals: "55+", coc: "60+", welch: "~10" },
//     { feature: "Gel-free 12-lead ECG", vitals: "Yes", coc: "Not specified", welch: "No" },
//     { feature: "Body composition (BIA)", vitals: "Yes", coc: "Yes", welch: "No" },
//     { feature: "POC blood tests", vitals: "Yes", coc: "Yes", welch: "No" },
//     { feature: "AI health insights", vitals: "Yes", coc: "Yes", welch: "No" },
//     { feature: "India-made / locally supported", vitals: "Yes", coc: "Yes", welch: "No" },
//     { feature: "ABDM / ABHA integration", vitals: "Available", coc: "Partial", welch: "No" },
//   ];

//   const faqs = [
//     { q: "How long does a full assessment take?", a: "A complete checkup covering all 55+ parameters takes 7–10 minutes." },
//     { q: "Does it require trained staff to operate?", a: "The chair is designed for self-service operation with on-screen guidance. Basic training is provided for setup and maintenance." },
//     { q: "Can it work in areas with intermittent internet?", a: "Yes, the chair has local storage and can buffer data, syncing automatically when connectivity is restored." },
//     { q: "Which blood tests can be done at the point of care?", a: "Currently, blood glucose is confirmed. For comprehensive POC panels including HbA1c, lipids, and haemoglobin, please contact our team." },
//     { q: "What EMR systems is it currently integrated with?", a: "VitalsChair supports HL7 and FHIR standards, enabling integration with Epic, Cerner, Bahmni, eHospital, and other major EMR systems." },
//     { q: "Is it listed on the Government e-Marketplace (GeM)?", a: "Coming soon. Contact us for procurement inquiries." },
//     { q: "Is the device CDSCO approved?", a: "The device is in the final stages of CDSCO approval. Please contact us for the latest status." },
//     { q: "Can reports be shared with patients via WhatsApp or email?", a: "Yes, reports can be automatically shared via WhatsApp, email, or SMS through the BluHealth Portal." },
//   ];

//   return (
//     <Box sx={{ width: "100%", backgroundColor: "#fff" }}>
//       {/* HERO SECTION */}
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
//                   VitalsChair™ by BluAI
//                 </Typography>
//                 <Typography sx={{ fontWeight: 800, fontSize: { xs: 30, sm: 38, md: 46 }, lineHeight: 1.15, color: "#111827" }}>
//                   Manage. My Health. My Way.™
//                 </Typography>
//                 <Typography sx={{ color: "#42526b", fontWeight: 600, fontSize: { xs: 13.5, sm: 14.5 } }}>
//                   Patent Pending #202411094218 | Medical-Grade | AI-Driven | Cloud-Connected
//                 </Typography>
//                 <Typography sx={{ mt: 1, color: "#334155", lineHeight: 1.8, fontSize: { xs: 14.5, md: 15.5 }, maxWidth: 640 }}>
//                   Introducing VitalsChair™, a groundbreaking innovation in patient health assessments—designed to deliver a complete set of vital measurements in a single, effortless sitting. Built with precision, powered by AI, and seamlessly integrated with the BluHealth™ Portal, VitalsChair™ redefines the way healthcare professionals collect, analyze, and monitor patient health data.
//                 </Typography>
//                 <Typography sx={{ mt: 2, fontWeight: 800, fontSize: { xs: 15.5, md: 16.5 }, color: "#0b1c3d" }}>
//                   Comprehensive Vital Monitoring – All in One Chair
//                 </Typography>
//                 <Typography sx={{ color: "#334155", lineHeight: 1.8, fontSize: { xs: 14.5, md: 15.5 }, maxWidth: 660 }}>
//                   VitalsChair™ is an indigenous AI-powered health monitoring chair designed to deliver a complete diagnostic health assessment from a single seated position. Built for hospitals, clinics, corporate wellness programs, health camps, and senior living communities, it consolidates what traditionally requires multiple devices, rooms, and staff into one ergonomic, self-service chair — completing a full checkup in 7–10 minutes.
//                 </Typography>
//               </Stack>
//             </Box>

//             <Box sx={{ flex: 1, width: "100%", display: "flex", justifyContent: { xs: "center", md: "flex-end" } }}>
//               {/* <Box sx={{ position: "relative", width: { xs: 280, sm: 360, md: 520 }, height: { xs: 280, sm: 360, md: 560 }, borderRadius: 4 }}> */}
//               {/* <Image src="/vitalschair-chair.png" alt="VitalsChair Device" fill priority style={{ objectFit: "contain" }} />
//                  */}
//               <VitalsChair3D />
//               {/* </Box> */}

//             </Box>
//           </Box>



//           {/* STATS SECTION */}
//           <Box sx={{ display: "flex", flexWrap: "wrap", borderRadius: 3, overflow: "hidden", border: "1px solid #eee", bgcolor: "#fafbff", mt: 4 }}>
//             <Box sx={{ flex: { xs: "100%", sm: "33.33%" }, p: 3, textAlign: "center", borderRight: { sm: "1px solid #eee" }, borderBottom: { xs: "1px solid #eee", sm: "none" } }}>
//               <Typography sx={{ fontSize: { xs: 24, md: 28 }, fontWeight: 800, color: "#111" }}>20,563+</Typography>
//               <Typography sx={{ fontSize: 14, color: "#555", mt: 0.5 }}>EKG measurements</Typography>
//             </Box>
//             <Box sx={{ flex: { xs: "100%", sm: "33.33%" }, p: 3, textAlign: "center", borderRight: { sm: "1px solid #eee" }, borderBottom: { xs: "1px solid #eee", sm: "none" } }}>
//               <Typography sx={{ fontSize: { xs: 24, md: 28 }, fontWeight: 800, color: "#111" }}>365</Typography>
//               <Typography sx={{ fontSize: 14, color: "#555", mt: 0.5 }}>days measured</Typography>
//             </Box>
//             <Box sx={{ flex: { xs: "100%", sm: "33.33%" }, p: 3, textAlign: "center" }}>
//               <Typography sx={{ fontSize: { xs: 24, md: 28 }, fontWeight: 800, color: "#111" }}>20%</Typography>
//               <Typography sx={{ fontSize: 14, color: "#555", mt: 0.5 }}>of users detected an arrhythmia thanks to BluAI</Typography>
//             </Box>
//           </Box>
//         </Container>
//       </Box>

//       {/* SECTION 2 (Mobile frame video + content lists) */}
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
//             {/* LEFT: Phone frame video */}
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
//                   width: { xs: 260, sm: 400, md: 520 },
//                   height: { xs: 420, sm: 580, md: 620 },
//                 }}
//               >


//                 {/* Video inside phone */}
//                 <Box
//                   sx={{
//                     position: "absolute",
//                     // top: { xs: "10.5%", sm: "5.5%", md: "25.5%" },
//                     left: { xs: "10.5%", sm: "10.5%", md: "1%" },
//                     width: "100%",
//                     height: "100%",
//                     overflow: "hidden",
//                   }}
//                 >
//                   <img
//                     src="/new-vc-image.png"
//                     autoPlay
//                     muted
//                     loop
//                     playsInline
//                     style={{
//                       width: "100%",
//                       height: "100%",
//                       objectFit: "cover",
//                     }}
//                   />
//                 </Box>
//               </Box>
//             </Box>

//             {/* RIGHT: Text Columns */}
//             <Box sx={{ flex: 1.2, width: "100%" }}>
//               <Box
//                 sx={{
//                   display: "flex",
//                   flexDirection: { xs: "column", lg: "row" },
//                   gap: { xs: 4, lg: 6 },

//                 }}
//               >
//                 {/* Column 1 */}
//                 <Box sx={{ flex: 1 }}>



//                   <Accordion defaultExpanded sx={{ mb: 2, boxShadow: "none", border: "1px solid #eee", borderRadius: 2 }}>
//                     <AccordionSummary expandIcon={<ArrowDown />}>
//                       <Typography sx={{ fontWeight: 600 }}>Smart Connectivity & Integration</Typography>
//                     </AccordionSummary>
//                     {[`Multi-Login Support: IC Card, QR Code Scanning, Fingerprint Recognition`, `Cloud-Ready: Fully compatible with BluAI Database and BluHealth™ Portal`, `Developer-Friendly: Complete API suite available for seamless third-party integration`].map((faq, i) => (
//                       <AccordionDetails key={i}>
//                         <Typography sx={{ color: "#555" }}>{faq}</Typography>
//                       </AccordionDetails>
//                     ))}
//                   </Accordion>


//                   <SectionTitle> Core Measurement Capabilities</SectionTitle>
//                   <Accordion sx={{ mb: 2, boxShadow: "none", border: "1px solid #eee", borderRadius: 2 }}>
//                     <AccordionSummary expandIcon={<ArrowDown />}>
//                       <Typography sx={{ fontWeight: 600 }}>Vital Signs & Basic Metrics</Typography>
//                     </AccordionSummary>
//                     {[
//                       "Blood Pressure, Temperature, Respiration, Heart Rate/Pulse, Oxygen Level (SpO2)",
//                       "Age, Weight, Height, BMI",
//                       "Glucose Monitoring (Manual)",
//                     ].map((faq, i) => (
//                       <AccordionDetails key={i}>
//                         <Typography sx={{ color: "#555" }}>{faq}</Typography>
//                       </AccordionDetails>
//                     ))}
//                   </Accordion>




//                   <Accordion sx={{ mb: 2, boxShadow: "none", border: "1px solid #eee", borderRadius: 2 }}>
//                     <AccordionSummary expandIcon={<ArrowDown />}>
//                       <Typography sx={{ fontWeight: 600 }}>Physical Composition</Typography>
//                     </AccordionSummary>
//                     {[
//                       "Body Fat (%, Subcutaneous %, Visceral Fat 1-10)",
//                       "Muscle/Mass Metrics (Skeletal Muscle, Lean Mass, Bone Mass, Fat Free Weight kg/lb, Protein)",
//                       "BMR, Health Score",
//                     ].map((faq, i) => (
//                       <AccordionDetails key={i}>
//                         <Typography sx={{ color: "#555" }}>{faq}</Typography>
//                       </AccordionDetails>
//                     ))}
//                   </Accordion>



//                   <Accordion sx={{ mb: 2, boxShadow: "none", border: "1px solid #eee", borderRadius: 2 }}>
//                     <AccordionSummary expandIcon={<ArrowDown />}>
//                       <Typography sx={{ fontWeight: 600 }}> Monitoring & Detection</Typography>
//                     </AccordionSummary>
//                     {["Body Posture, Emotional State", "Facial monitoring & treatment effectiveness", "ECG"].map((faq, i) => (
//                       <AccordionDetails key={i}>
//                         <Typography sx={{ color: "#555" }}>{faq}</Typography>
//                       </AccordionDetails>
//                     ))}
//                   </Accordion>



//                   <Accordion sx={{ mb: 2, boxShadow: "none", border: "1px solid #eee", borderRadius: 2 }}>
//                     <AccordionSummary expandIcon={<ArrowDown />}>
//                       <Typography sx={{ fontWeight: 600 }}>Advanced Diagnostic Features</Typography>
//                     </AccordionSummary>
//                     {["Color Blindness Detection", "Eyesight Screening System", "High-Resolution Integrated Display for real-time data visualization"].map((faq, i) => (
//                       <AccordionDetails key={i}>
//                         <Typography sx={{ color: "#555" }}>{faq}</Typography>
//                       </AccordionDetails>
//                     ))}
//                   </Accordion>
//                 </Box>
//               </Box>
//             </Box>
//           </Box>
//         </Container>
//       </Box>


//       {/* KEY HIGHLIGHTS & PARAMETERS MEASURED SECTION */}
//       <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
//         <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 6 }}>
//           {/* Left Column - Key Highlights */}
//           <Box sx={{ flex: 1 }}>
//             <Typography sx={{ fontWeight: 900, fontSize: { xs: 22, md: 28 }, color: "#0b1c3d", mb: 3 }}>
//               Key Highlights
//             </Typography>
//             <Stack spacing={2}>
//               {Highlights.map((text, idx) => (<PointItem key={idx} text={text} />))}
//             </Stack>

//             <SubSectionTitle>Point-of-Care Blood Tests</SubSectionTitle>
//             <TableContainer component={Paper} sx={{ mb: 3, boxShadow: "none", border: "1px solid #eee" }}>
//               <Table size="small"><TableHead><TableRow><TableCell className="w-[686px]"><b>Parameter</b></TableCell><TableCell ><b>Status</b></TableCell></TableRow></TableHead>
//                 <TableBody>{pocBloodTests.map((row, i) => (
//                   <TableRow key={i}>
//                     <TableCell>{row.parameter}</TableCell>
//                     <TableCell>

//                       {row.status === "Confirmed" ? (
//                         <CheckCircleIcon className="!text-[#4caf50]" sx={{ fontSize: 15, color: "#4caf50" }} />
//                       ) : (
//                         <Chip label={row.status} size="small" color={"warning"} />
//                       )}
//                     </TableCell>
//                   </TableRow>))}
//                 </TableBody>
//               </Table>
//             </TableContainer>

//             <SubSectionTitle>Additional Diagnostics</SubSectionTitle>
//             <TableContainer component={Paper} sx={{ mb: 3, boxShadow: "none", border: "1px solid #eee" }}>
//               <Table size="small"><TableHead><TableRow><TableCell className="w-[686px]"><b>Parameter</b></TableCell><TableCell className="!w-[276px]" ><b>Status</b></TableCell></TableRow></TableHead>
//                 <TableBody>{AdditionalDiagnostics.map((row, i) => (<TableRow key={i}><TableCell>{row.parameter}</TableCell><TableCell> {row.status === "Confirmed" ? (
//                   <CheckCircleIcon className="!text-[#4caf50]" sx={{ fontSize: 15, color: "#4caf50" }} />
//                 ) : (
//                   <Chip label={row.status} size="small" color={"warning"} />
//                 )}</TableCell></TableRow>))}</TableBody></Table>
//             </TableContainer>
//           </Box>

//           {/* Right Column - Parameters Measured */}
//           <Box sx={{ flex: 1 }}>
//             <Typography sx={{ fontWeight: 900, fontSize: { xs: 22, md: 28 }, color: "#0b1c3d", mb: 3 }}>
//               Parameters Measured
//             </Typography>

//             <SubSectionTitle>Cardiovascular</SubSectionTitle>
//             <TableContainer component={Paper} sx={{ mb: 3, boxShadow: "none", border: "1px solid #eee" }}>
//               <Table size="small">
//                 <TableHead><TableRow><TableCell><b>Parameter</b></TableCell><TableCell><b>Method</b></TableCell><TableCell><b>Notes</b></TableCell></TableRow></TableHead>
//                 <TableBody>{cardiovascularParams.map((row, i) => (<TableRow key={i}><TableCell>{row.parameter}</TableCell><TableCell>{row.method}</TableCell><TableCell>{row.notes}</TableCell></TableRow>))}</TableBody>
//               </Table>
//             </TableContainer>

//             <SubSectionTitle>Respiratory & Oxygen</SubSectionTitle>
//             <TableContainer component={Paper} sx={{ mb: 3, boxShadow: "none", border: "1px solid #eee" }}>
//               <Table size="small"><TableHead><TableRow><TableCell><b>Parameter</b></TableCell><TableCell><b>Method</b></TableCell></TableRow></TableHead>
//                 <TableBody>{respiratoryParams.map((row, i) => (<TableRow key={i}><TableCell>{row.parameter}</TableCell><TableCell>{row.method}</TableCell></TableRow>))}</TableBody></Table>
//             </TableContainer>

//             <SubSectionTitle>Anthropometric & Body Composition (BIA)</SubSectionTitle>
//             <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 3 }}>
//               {bodyCompositionParams.map((param, i) => (
//                 <Chip key={i} label={param} size="small" sx={{ bgcolor: "#f0f0f0" }} />
//               ))}
//             </Box>

//             <SubSectionTitle>Thermal</SubSectionTitle>
//             <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 3 }}>
//               {thermalParams.map((param, i) => (
//                 <Chip key={i} label={param} size="small" sx={{ bgcolor: "#f0f0f0" }} />
//               ))}
//             </Box>


//           </Box>
//         </Box>
//       </Container>






//       {/* AI CAPABILITIES SECTION */}
//       <Box >
//         <Container maxWidth="lg">

//           <Accordion sx={{ mb: 2, boxShadow: "none", border: "1px solid #eee", borderRadius: 2 }}>
//             <AccordionSummary expandIcon={<ArrowDown />}>
//               <SectionTitle> AI Capabilities</SectionTitle>
//             </AccordionSummary>
//             {aiCapabilities?.map((faq, i) => (
//               <AccordionDetails key={i} >
//                 <Box key={i} >
//                   <PointItem text={faq} />
//                 </Box>
//               </AccordionDetails>
//             ))}
//           </Accordion>
//         </Container>
//       </Box>

//       {/* BluHealth Portal SECTION */}
//       <Container maxWidth="lg" >
//         <Accordion sx={{ mb: 2, boxShadow: "none", border: "1px solid #eee", borderRadius: 2 }}>
//           <AccordionSummary expandIcon={<ArrowDown />}>
//             <SectionTitle>BluHealth Portal</SectionTitle>
//           </AccordionSummary>
//           {portalFeatures?.map((faq, i) => (
//             <AccordionDetails key={i}>
//               <Box key={i} >
//                 <PointItem text={faq} />
//               </Box>
//             </AccordionDetails>
//           ))}
//         </Accordion>
//       </Container>

//       {/* INTEGRATION SECTION */}
//       <Box >
//         <Container maxWidth="lg">
//           <Accordion sx={{ mb: 2, boxShadow: "none", border: "1px solid #eee", borderRadius: 2 }}>
//             <AccordionSummary expandIcon={<ArrowDown />}>
//               <SectionTitle>EMR / EHR / HMS / HIS Integration</SectionTitle>
//             </AccordionSummary>
//             <AccordionDetails >

//               <SubSectionTitle>Integration Standards Supported</SubSectionTitle>
//               <TableContainer component={Paper} sx={{ mb: 4, boxShadow: "none", border: "1px solid #eee" }}>
//                 <Table>
//                   <TableHead>
//                     <TableRow>
//                       <TableCell className="w-[686px]">
//                         <b>Standard</b>
//                       </TableCell>
//                       <TableCell>
//                         <b>Status</b>
//                       </TableCell>
//                     </TableRow>
//                   </TableHead>
//                   <TableBody>
//                     {integrationStandards.map((row, i) =>
//                     (<TableRow key={i}>
//                       <TableCell>{row.standard}</TableCell>
//                       <TableCell> {row.status === "Confirmed" ? (
//                         <CheckCircleIcon className="!text-[#4caf50]" sx={{ fontSize: 15, color: "#4caf50" }} />
//                       ) : (
//                         <Chip label={row.status} size="small" color={"warning"} />
//                       )}</TableCell>
//                     </TableRow>))}
//                   </TableBody>
//                 </Table>
//               </TableContainer>

//               <SubSectionTitle>Confirmed Compatible Platforms</SubSectionTitle>
//               <TableContainer component={Paper} sx={{ mb: 4, boxShadow: "none", border: "1px solid #eee" }}>
//                 <Table><TableHead><TableRow><TableCell><b>Platform</b></TableCell><TableCell><b>Status</b></TableCell></TableRow></TableHead>
//                   <TableBody>{compatiblePlatforms.map((row, i) => (<TableRow key={i}><TableCell>{row.platform}</TableCell><TableCell> {row.status === "Available" ? (
//                     <CheckCircleIcon className="!text-[#4caf50]" sx={{ fontSize: 15, color: "#4caf50" }} />
//                   ) : (
//                     <Chip label={row.status} size="small" color={"info"} />
//                   )}</TableCell></TableRow>))}</TableBody></Table>
//               </TableContainer>

//               <SubSectionTitle>Integration Architecture</SubSectionTitle>
//               <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
//                 {["REST API / HL7 messaging engine", "OAuth 2.0 / API key authentication", "Real-time / batch / webhook data push", "Integration guide available on request", "No middleware required"].map((item, i) => (
//                   <Box key={i} sx={{ width: { xs: "100%", md: "48%" } }}><PointItem text={item} /></Box>
//                 ))}
//               </Box>

//             </AccordionDetails>
//           </Accordion>
//         </Container>


//       </Box>

//       {/* REGULATORY & CERTIFICATIONS */}
//       <Container maxWidth="lg">
//         <Accordion sx={{ mb: 2, boxShadow: "none", border: "1px solid #eee", borderRadius: 2 }}>
//           <AccordionSummary expandIcon={<ArrowDown />}>
//             <SectionTitle>Regulatory & Certifications</SectionTitle>
//           </AccordionSummary>

//           <AccordionDetails>
//             <TableContainer component={Paper} sx={{ boxShadow: "none", border: "1px solid #eee" }}>
//               <Table><TableHead><TableRow><TableCell className="w-[686px]"><b>Certification</b></TableCell><TableCell><b>Status</b></TableCell></TableRow></TableHead>
//                 <TableBody>{certifications.map((row, i) => (<TableRow key={i}><TableCell>{row.certification}</TableCell><TableCell><Chip label={row.status} size="small" color={row.status.includes("Pending") ? "warning" : row.status === "Yes" ? "success" : "info"} /></TableCell></TableRow>))}</TableBody></Table>
//             </TableContainer>
//           </AccordionDetails>
//         </Accordion>
//       </Container>



//       {/* USE CASES */}
//       <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
//         <SectionTitle> Use Cases</SectionTitle>
//         <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
//           {useCases.map((useCase, i) => (
//             <Box key={i} sx={{ width: { xs: "100%", md: "31%" } }}>
//               <PointItem text={useCase} />
//             </Box>
//           ))}
//         </Box>
//       </Container>

//       {/* COMPARISON TABLE */}
//       <Box sx={{ bgcolor: "#f7f9ff", py: { xs: 6, md: 8 } }}>
//         <Container maxWidth="lg">
//           <SectionTitle>Comparison vs Competing Systems</SectionTitle>
//           <TableContainer component={Paper} sx={{ overflowX: "auto", boxShadow: "none", border: "1px solid #eee" }}>
//             <Table size="small"><TableHead><TableRow><TableCell><b>Feature</b></TableCell><TableCell><b>VitalsChair (BluAI)</b></TableCell><TableCell><b>COC Health Kiosk</b></TableCell><TableCell><b>Welch Allyn Connex VSM</b></TableCell></TableRow></TableHead>
//               <TableBody>
//                 {comparisonData.map((row, i) => (<TableRow key={i}><TableCell>{row.feature}</TableCell><TableCell> {row.vitals === "Yes" || row.vitals === "Available" ? (
//                   <CheckCircleIcon className="!text-[#4caf50]" sx={{ fontSize: 15, color: "#4caf50" }} />
//                 ) : (
//                   <Chip label={row.vitals} size="small" color="success" />
//                 )}</TableCell><TableCell>{row.coc}</TableCell><TableCell>{row.welch}</TableCell></TableRow>))}
//               </TableBody></Table>
//           </TableContainer>
//         </Container>
//       </Box>

//       {/* FAQ SECTION */}
//       <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
//         <SectionTitle> Frequently Asked Questions</SectionTitle>


//         <Accordion sx={{ mb: 2, boxShadow: "none", border: "1px solid #eee", borderRadius: 2 }}>

//           <AccordionSummary expandIcon={<ArrowDown />}>
//             <Typography sx={{ fontWeight: 600 }}>Why Choose VitalsChair™ ?</Typography>
//           </AccordionSummary>
//           {[
//             "Efficient: One chair, multiple diagnostics—reducing patient wait time and resource load.",
//             "Accurate: Built with clinical-grade components and tested to medical standards.",
//             "Smart: AI-powered analytic for early health risk detection.",
//             "Connected: Real-time sync to cloud platforms for continuous patient records.",
//             "Scalable: Easily integrable into hospitals, diagnostics labs, corporate wellness programs, and telemedicine platforms.",
//           ].map((faq) => (
//             <AccordionDetails>
//               <Typography sx={{ color: "#555" }}>{faq}</Typography>
//             </AccordionDetails>
//           ))}
//         </Accordion>

//         {faqs.map((faq, i) => (
//           <Accordion key={i} sx={{ mb: 2, boxShadow: "none", border: "1px solid #eee", borderRadius: 2 }}>
//             <AccordionSummary expandIcon={<ArrowDown />}><Typography sx={{ fontWeight: 600 }}>{faq.q}</Typography></AccordionSummary>
//             <AccordionDetails><Typography sx={{ color: "#555" }}>{faq.a}</Typography></AccordionDetails>
//           </Accordion>

//         ))}



//       </Container>

//       {/* CONTACT SECTION */}
//       <Box sx={{ bgcolor: "#0b1c3d", color: "white", py: { xs: 6, md: 8 }, textAlign: "center" }}>
//         <Container maxWidth="lg">
//           <Typography sx={{ fontWeight: 800, fontSize: { xs: 28, md: 36 }, mb: 2 }}>Ready to Transform Healthcare?</Typography>
//           <Typography sx={{ fontSize: 16, mb: 4, color: "#ccc" }}>Contact our team for a demo, quote, or more information about VitalsChair™</Typography>
//           <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent="center">
//             <Chip label="Email: info@bluai.ai" sx={{ bgcolor: "#1b4dff", color: "white", py: 2, px: 3, fontSize: 16, borderRadius: 2 }} />
//             <Chip label="India: +91-76968-84778" sx={{ bgcolor: "#1b4dff", color: "white", py: 2, px: 3, fontSize: 16, borderRadius: 2 }} />
//             <Chip label="USA: +1-248-662-6658" sx={{ bgcolor: "#1b4dff", color: "white", py: 2, px: 3, fontSize: 16, borderRadius: 2 }} />
//           </Stack>
//           {/* <Typography sx={{ mt: 4, fontSize: 14, color: "#888" }}>© 2024 BluAI. All rights reserved. | Patent Pending #202411094218</Typography> */}
//         </Container>
//       </Box>

//       <ProductFlow />
//     </Box>
//   )
// }


























'use client';

import {
  Box,
  Container,
  Typography,
  Stack,
  List,
  ListItem,
  ListItemText,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  Tabs,
  Tab
} from "@mui/material";
import Image from "next/image";
import ProductFlow from "@/components/ProductFlow";
import { ArrowDown, ArrowRight, CheckCircleIcon, CheckIcon, ChevronLeft, ChevronRight, Cloud, Cpu, Fingerprint, HelpCircleIcon, PlayCircle, Rotate3d, Shield } from "lucide-react";
import VitalsChair3D from "../../../components/VitalsChair3D";
import { useRef, useState } from "react";


function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      tabIndex={0}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function PointItem({ text }) {
  return (
    <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
      <Box sx={{ width: 34, display: "flex", justifyContent: "center", flexShrink: 0, pt: "2px" }}>
        <Box sx={{ width: 22, height: 22, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", bgcolor: "#fff" }}>
          <CheckCircleIcon className="!text-[#1b4dff]" sx={{ fontSize: 15, color: "#1b4dff" }} />
        </Box>
      </Box>
      <Typography sx={{ fontSize: 16, lineHeight: 1.9, color: "rgba(7,18,44,0.78)", whiteSpace: "pre-line", flex: 1 }}>
        {text.trim()}
      </Typography>
    </Box>
  );
}

function SectionTitle({ children }) {
  return (
    <Typography sx={{ fontWeight: 900, fontSize: { xs: 22, md: 28 }, color: "#0b1c3d", mb: 3, textAlign: "center" }}>
      {children}
    </Typography>
  );
}

function SubSectionTitle({ children }) {
  return (
    <Typography sx={{ fontWeight: 800, fontSize: { xs: 18, md: 20 }, color: "#0b1c3d", mb: 2, mt: 3 }}>
      {children}
    </Typography>
  );
}


// --- 360 Viewer ---
const ProductGallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [rotation, setRotation] = useState(0);
  const lastX = useRef(0);

  const galleryItems = [
    { type: '360', label: '360° View', src: '/pole.png' },
    { type: 'image', label: 'Side View', src: '/chair/1.webp', transform: 'bottom' },
    { type: 'image', label: 'Front View', src: '/chair/2.webp', transform: 'bottom' },
    // { type: 'image', label: 'Interface', src: '/pole.png', objectPosition: 'top' },
    { type: 'image', label: 'Deployment', src: '/chair/3.webp', objectPosition: 'bottom' },
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
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: "column", md: 'row' }, overflow: { xs: "hidden", sm: 'auto', md: 'auto' }, width: '100%', mx: 'auto', position: 'relative', gap: 2 }}>
      <Box
        sx={{
          position: 'relative', width: '100%',
          borderRadius: 4, overflow: 'hidden', bgcolor: 'transparent',
          cursor: galleryItems[activeIndex].type === '360' ? (isDragging ? 'grabbing' : 'grab') : 'default',
          userSelect: 'none',
          mt: { xs: 4, sm: 6, md: 6 }
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {galleryItems[activeIndex].type === '360' ? (
          <VitalsChair3D />
        ) : (
          <img
            src={galleryItems[activeIndex].src}
            alt={galleryItems[activeIndex].label}
            style={{
              width: '100%', height: '100%', objectFit: 'fill',
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


      </Box>

      <Box sx={{ mt: 8, pb: 2, gap: 4, display: "flex", flexDirection: { xs: 'row', sm: 'row', md: 'column' }, overflow: { xs: "auto", sm: 'auto', md: 'hidden' } }}>
        {galleryItems.map((item, i) => (
          <Box
            key={i}
            onClick={() => setActiveIndex(i)}
            sx={{

              position: 'relative', flex: '0 0 auto', height: { xs: 70, sm: 80, md: 90 }, width: { xs: 70, sm: 70, md: "auto" },
              borderRadius: 3, overflow: 'hidden', cursor: 'pointer',
              border: activeIndex === i ? '3px solid #4756d4' : '3px solid transparent',
              boxShadow: activeIndex === i ? '0 10px 20px rgba(71,86,212,0.2)' : 'none',
              transition: 'all 0.3s ease', '&:hover': { opacity: 0.9 },
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

export default function VitalsChairLanding() {
  const Highlights = [
    "55+ clinically measured health parameters",
    "Gel-free 5-lead and 12-lead ECG",
    "Full body composition analysis via bioimpedance (BIA)",
    "AI-generated health insights and risk detection",
    "Cloud-synced to HIPAA-compliant BluHealth Portal",
    "Seamless EMR/EHR/HIS integration",
    "Single ergonomic chair — no multi-room setup required",
    "Institutionally validated — launched under Government of India's Office of the Principal Scientific Adviser",
  ];

  const cardiovascularParams = [
    { parameter: "Blood pressure (NIBP)", method: "Automated cuff", notes: "Systolic, diastolic, MAP" },
    { parameter: "Heart rate", method: "ECG + PPG", notes: "BPM and rhythm" },
    { parameter: "Heart rate variability (HRV)", method: "ECG", notes: "Autonomic health indicator" },
    { parameter: "ECG — 5-lead", method: "Dry/gel-free electrodes", notes: "Real-time waveform" },
    { parameter: "ECG — 12-lead", method: "Dry/gel-free electrodes", notes: "Full cardiac assessment" },
    { parameter: "Arrhythmia detection", method: "AI analysis of ECG", notes: "Confirm if included" },
  ];

  const respiratoryParams = [
    { parameter: "SpO2 (oxygen saturation)", method: "Pulse oximetry" },
    { parameter: "Respiration rate", method: "Impedance / chest movement" },
    { parameter: "EtCO2 / spirometry", method: "Confirm if lung function test is included" },

  ];

  const bodyCompositionParams = [
    "Height", "Weight", "BMI (Body Mass Index)", "Visceral fat percentage",
    "Subcutaneous fat", "Skeletal muscle mass", "Protein content",
    "Basal metabolic rate (BMR)", "Body water percentage"
  ];

  const thermalParams = ["Body temperature"];

  const pocBloodTests = [
    { parameter: "Blood glucose", status: "Confirmed" },
    { parameter: "HbA1c", status: "Confirmed" },
    { parameter: "Haemoglobin", status: "Confirmed" },
    { parameter: "Cholesterol (total / LDL / HDL)", status: "Confirmed" },
    { parameter: "Uric acid", status: "Confirmed" },
    { parameter: "Full blood count panel", status: "List exact POC tests supported" },
  ];

  const AdditionalDiagnostics = [
    { parameter: "Vision screening", status: "Confirmed" },
    { parameter: "Hearing screening", status: "Confirmed" },
    { parameter: "Peripheral oxygen (SpHb)", status: "Confirmed" },
    { parameter: "Any other parameters in your 45+ list", status: "List remaining parameters" },


  ]
  const aiCapabilities = [
    "AI-generated health risk reports after each session",
    "Early detection flagging for cardiovascular, metabolic, and respiratory risk markers",
    "Personalized health insights based on longitudinal data",
    "AI-enabled ECG interpretation (gel-free, real-time)",
    "BluASHA AI assistant for patient guidance and data collection",
    "Clinical validation: ECG sensitivity 98.2%, specificity 96.5%",
  ];

  const portalFeatures = [
    "HIPAA-compliant cloud platform",
    "Longitudinal patient health records",
    "Clinician dashboard with trend analysis",
    "Role-based access control",
    "Data residency: India servers (with international options)",
    "Mobile app available for iOS and Android",
    "WhatsApp / email report sharing",
    "Offline mode with local storage and auto-sync",
  ];

  const integrationStandards = [
    { standard: "HL7 v2.x", status: "Confirmed" },
    { standard: "HL7 v3", status: "Confirmed" },
    { standard: "FHIR R4", status: "Confirmed" },
    { standard: "FHIR R5", status: "In Development" },
    { standard: "SMART on FHIR", status: "Confirmed" },
    { standard: "IHE profiles (PCD-01, etc.)", status: "Confirmed" },
    { standard: "IEEE 11073 (medical device comms)", status: "Confirmed" },
    { standard: "DICOM", status: "Confirmed" },
    { standard: "ADT feeds", status: "Confirmed" },
  ];

  const compatiblePlatforms = [
    { platform: "Epic", status: "Available on request" },
    { platform: "Oracle Health (Cerner)", status: "Available on request" },
    { platform: "Bahmni (OpenMRS)", status: "Available" },
    { platform: "eHospital Systems", status: "Available" },
    { platform: "Practo / HealthPlix", status: "Available" },
    { platform: "ABDM / ABHA (Ayushman Bharat)", status: "Available" },
  ];

  const certifications = [
    { certification: "Patent", status: "Pending — #202411094218" },
    { certification: "CDSCO (India) clearance", status: "In Process" },
    { certification: "FDA clearance (USA)", status: "Planned" },
    { certification: "CE marking (Europe)", status: "Planned" },
    { certification: "ISO 13485 (Medical device QMS)", status: "In Progress" },
    { certification: "HIPAA compliance", status: "Yes (BluHealth Portal)" },
  ];

  const technicalSpecs = [
    { spec: "Session duration", details: "7–10 minutes" },
    { spec: "Display", details: "15.6\" Touchscreen, 1920x1080" },
    { spec: "Connectivity", details: "Wi-Fi 6, Gigabit LAN, 4G/LTE optional, Bluetooth 5.2" },
    { spec: "Power", details: "100-240V AC, 50/60Hz, Integrated UPS backup" },
    { spec: "Dimensions (W × D × H)", details: "850mm × 750mm × 1150mm" },
    { spec: "Weight", details: "85 kg" },
    { spec: "Operating temperature", details: "10°C to 40°C" },
    { spec: "Data storage", details: "Cloud + 64GB local storage" },
    { spec: "Multi-language support", details: "English, Hindi, Punjabi" },
    { spec: "Patient ID / biometric login", details: "ABHA ID, QR code, RFID, Fingerprint optional" },
  ];

  const useCases = [
    "Hospitals and multi-specialty clinics — OPD triage and pre-consultation vitals",
    "Corporate wellness — employee health screening programs",
    "Health camps and rural outreach — portable preventive care",
    "Senior living communities — regular monitoring without clinical visits",
    "Pharmacies and diagnostic labs — walk-in health check service",
    "Insurance and wellness programs — risk stratification",
    "Government health initiatives — ABDM / Ayushman Bharat aligned screening",
    "Telemedicine hubs — pre-consultation data capture",
  ];

  const comparisonData = [
    { feature: "Form factor", vitals: "Chair", coc: "Standing kiosk", welch: "Wheeled monitor" },
    { feature: "Parameters", vitals: "55+", coc: "60+", welch: "~10" },
    { feature: "Gel-free 12-lead ECG", vitals: "Yes", coc: "Not specified", welch: "No" },
    { feature: "Body composition (BIA)", vitals: "Yes", coc: "Yes", welch: "No" },
    { feature: "POC blood tests", vitals: "Yes", coc: "Yes", welch: "No" },
    { feature: "AI health insights", vitals: "Yes", coc: "Yes", welch: "No" },
    { feature: "India-made / locally supported", vitals: "Yes", coc: "Yes", welch: "No" },
    { feature: "ABDM / ABHA integration", vitals: "Available", coc: "Partial", welch: "No" },
  ];

  const faqs = [
    { q: "How long does a full assessment take?", a: "A complete checkup covering all 55+ parameters takes 7–10 minutes." },
    { q: "Does it require trained staff to operate?", a: "The chair is designed for self-service operation with on-screen guidance. Basic training is provided for setup and maintenance." },
    { q: "Can it work in areas with intermittent internet?", a: "Yes, the chair has local storage and can buffer data, syncing automatically when connectivity is restored." },
    { q: "Which blood tests can be done at the point of care?", a: "Currently, blood glucose is confirmed. For comprehensive POC panels including HbA1c, lipids, and haemoglobin, please contact our team." },
    { q: "What EMR systems is it currently integrated with?", a: "VitalsChair supports HL7 and FHIR standards, enabling integration with Epic, Cerner, Bahmni, eHospital, and other major EMR systems." },
    { q: "Is it listed on the Government e-Marketplace (GeM)?", a: "Coming soon. Contact us for procurement inquiries." },
    { q: "Is the device CDSCO approved?", a: "The device is in the final stages of CDSCO approval. Please contact us for the latest status." },
    { q: "Can reports be shared with patients via WhatsApp or email?", a: "Yes, reports can be automatically shared via WhatsApp, email, or SMS through the BluHealth Portal." },
  ];
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  return (
    <Box sx={{ width: "100%", backgroundColor: "#fff" }}>

      {/* 1. HERO - PERFECT & UNTOUCHED */}
      <Container maxWidth="lg" sx={{ textAlign: "center", }}>
        <ProductGallery />
      </Container>





        <Container maxWidth="lg"
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          display: "flex",
          justifyContent: "center",
          width: "100%",
          mb: 3,
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          centered
          aria-label="basic tabs example"
          sx={{
            "& .MuiTabs-flexContainer": {
              justifyContent: "center",
            },
            "& .MuiTabs-indicator": {
              height: 3,
              borderRadius: 2,
            },
            "& .MuiTab-root": {
              textTransform: "none",
              fontSize: "1rem",
              fontWeight: 600,
              color: "#080808",
              px: 4,
              py: 1.5,
              minHeight: 56,
            },
            "& .Mui-selected": {
              color: "#000",
            },
          }}
        >
          <Tab label="Description" {...a11yProps(0)} />
          <Tab label="Additional Information" {...a11yProps(1)} />
        </Tabs>
      </Container>

      <CustomTabPanel value={value} index={0}>

        <Container maxWidth="lg" sx={{ textAlign: "center", mt: { xs: 4, sm: 0, md: 0 }, mb: { xs: 4, sm: 6, md: 6 } }}>
          <Box >


            <Typography sx={{ fontWeight: 900, textAlign: "center", fontSize: { xs: 38, sm: 48, md: 48 }, color: '#0a1a3c', letterSpacing: '-0.04em', lineHeight: 0.95, mb: 0 }}>
              VitalsChair™  by BluAI
            </Typography>

            <Typography sx={{ fontWeight: 900, textAlign: "center", fontSize: { xs: 20, sm: 24, md: 18 }, background: 'linear-gradient(90deg, #1b4dff, #1852ad)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', mb: 3 }}>
              Manage. My Health. My Way.™
            </Typography>
            <Typography sx={{ color: "#0b1c3d", textAlign: "start", fontWeight: 900, fontSize: { xs: 13.5, sm: 14.5 } }}>
              Patent Pending #202411094218 | Medical-Grade | AI-Driven | Cloud-Connected
            </Typography>
            <Typography sx={{ mt: 1, color: "#334155", textAlign: "start", lineHeight: 1.8, fontSize: { xs: 14.5, md: 15.5 } }}>
              Introducing VitalsChair™, a groundbreaking innovation in patient health assessments—designed to deliver a complete set of vital measurements in a single, effortless sitting. Built with precision, powered by AI, and seamlessly integrated with the BluHealth™ Portal, VitalsChair™ redefines the way healthcare professionals collect, analyze, and monitor patient health data.
            </Typography>
            <Typography sx={{ mt: 2, fontWeight: 800, textAlign: "start", fontSize: { xs: 15.5, md: 16.5 }, color: "#0b1c3d" }}>
              Comprehensive Vital Monitoring – All in One Chair
            </Typography>
            <Typography sx={{ color: "#334155", textAlign: "start", lineHeight: 1.8, fontSize: { xs: 14.5, md: 15.5 } }}>
              VitalsChair™ is an indigenous AI-powered health monitoring chair designed to deliver a complete diagnostic health assessment from a single seated position. Built for hospitals, clinics, corporate wellness programs, health camps, and senior living communities, it consolidates what traditionally requires multiple devices, rooms, and staff into one ergonomic, self-service chair — completing a full checkup in 7–10 minutes.
            </Typography>
          </Box>
        </Container>



        <Container maxWidth="lg">
          {/* STATS SECTION */}
          <Box sx={{ display: "flex", flexWrap: "wrap", borderRadius: 3, overflow: "hidden", border: "1px solid #eee", bgcolor: "#fafbff", mt: 4 }}>
            <Box sx={{ flex: { xs: "100%", sm: "33.33%" }, p: 3, textAlign: "center", borderRight: { sm: "1px solid #eee" }, borderBottom: { xs: "1px solid #eee", sm: "none" } }}>
              <Typography sx={{ fontSize: { xs: 24, md: 28 }, fontWeight: 800, color: "#111" }}>20,563+</Typography>
              <Typography sx={{ fontSize: 14, color: "#555", mt: 0.5 }}>EKG measurements</Typography>
            </Box>
            <Box sx={{ flex: { xs: "100%", sm: "33.33%" }, p: 3, textAlign: "center", borderRight: { sm: "1px solid #eee" }, borderBottom: { xs: "1px solid #eee", sm: "none" } }}>
              <Typography sx={{ fontSize: { xs: 24, md: 28 }, fontWeight: 800, color: "#111" }}>365</Typography>
              <Typography sx={{ fontSize: 14, color: "#555", mt: 0.5 }}>days measured</Typography>
            </Box>
            <Box sx={{ flex: { xs: "100%", sm: "33.33%" }, p: 3, textAlign: "center" }}>
              <Typography sx={{ fontSize: { xs: 24, md: 28 }, fontWeight: 800, color: "#111" }}>20%</Typography>
              <Typography sx={{ fontSize: 14, color: "#555", mt: 0.5 }}>of users detected an arrhythmia thanks to BluAI</Typography>
            </Box>
          </Box>
        </Container>



        {/* SECTION 2 (Mobile frame video + content lists) */}
        <Box
          sx={{
            width: "100%",
            py: { xs: 6, md: 10 },
            background:
              "radial-gradient(circle at 40% 15%, rgba(255, 255, 255, 0.89) 0%, transparent 45%), #ffffff",
          }}
        >
          <Container maxWidth="lg">
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap: { xs: 4, md: 6 },
                alignItems: "flex-start",
              }}
            >
              {/* LEFT: Phone frame video */}
              <Box
                sx={{
                  flex: 0.9,
                  display: "flex",
                  justifyContent: { xs: "center", md: "flex-start" },
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    width: { xs: 260, sm: 400, md: 520 },
                    height: { xs: 420, sm: 580, md: 620 },
                  }}
                >


                  {/* Video inside phone */}
                  <Box
                    sx={{
                      position: "absolute",
                      // top: { xs: "10.5%", sm: "5.5%", md: "25.5%" },
                      left: { xs: "10.5%", sm: "10.5%", md: "1%" },
                      width: "100%",
                      height: "100%",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src="/new-vc-image.png"
                      autoPlay
                      muted
                      loop
                      playsInline
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                </Box>
              </Box>

              {/* RIGHT: Text Columns */}
              <Box sx={{ flex: 1.2, width: "100%" }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", lg: "row" },
                    gap: { xs: 4, lg: 6 },

                  }}
                >
                  {/* Column 1 */}
                  <Box sx={{ flex: 1 }}>



                    <Accordion defaultExpanded sx={{ mb: 2, boxShadow: "none", border: "1px solid #eee", borderRadius: 2 }}>
                      <AccordionSummary expandIcon={<ArrowDown />}>
                        <Typography sx={{ fontWeight: 600 }}>Smart Connectivity & Integration</Typography>
                      </AccordionSummary>
                      {[`Multi-Login Support: IC Card, QR Code Scanning, Fingerprint Recognition`, `Cloud-Ready: Fully compatible with BluAI Database and BluHealth™ Portal`, `Developer-Friendly: Complete API suite available for seamless third-party integration`].map((faq, i) => (
                        <AccordionDetails key={i}>
                          <Typography sx={{ color: "#555" }}>{faq}</Typography>
                        </AccordionDetails>
                      ))}
                    </Accordion>


                    <SectionTitle> Core Measurement Capabilities</SectionTitle>
                    <Accordion sx={{ mb: 2, boxShadow: "none", border: "1px solid #eee", borderRadius: 2 }}>
                      <AccordionSummary expandIcon={<ArrowDown />}>
                        <Typography sx={{ fontWeight: 600 }}>Vital Signs & Basic Metrics</Typography>
                      </AccordionSummary>
                      {[
                        "Blood Pressure, Temperature, Respiration, Heart Rate/Pulse, Oxygen Level (SpO2)",
                        "Age, Weight, Height, BMI",
                        "Glucose Monitoring (Manual)",
                      ].map((faq, i) => (
                        <AccordionDetails key={i}>
                          <Typography sx={{ color: "#555" }}>{faq}</Typography>
                        </AccordionDetails>
                      ))}
                    </Accordion>




                    <Accordion sx={{ mb: 2, boxShadow: "none", border: "1px solid #eee", borderRadius: 2 }}>
                      <AccordionSummary expandIcon={<ArrowDown />}>
                        <Typography sx={{ fontWeight: 600 }}>Physical Composition</Typography>
                      </AccordionSummary>
                      {[
                        "Body Fat (%, Subcutaneous %, Visceral Fat 1-10)",
                        "Muscle/Mass Metrics (Skeletal Muscle, Lean Mass, Bone Mass, Fat Free Weight kg/lb, Protein)",
                        "BMR, Health Score",
                      ].map((faq, i) => (
                        <AccordionDetails key={i}>
                          <Typography sx={{ color: "#555" }}>{faq}</Typography>
                        </AccordionDetails>
                      ))}
                    </Accordion>



                    <Accordion sx={{ mb: 2, boxShadow: "none", border: "1px solid #eee", borderRadius: 2 }}>
                      <AccordionSummary expandIcon={<ArrowDown />}>
                        <Typography sx={{ fontWeight: 600 }}> Monitoring & Detection</Typography>
                      </AccordionSummary>
                      {["Body Posture, Emotional State", "Facial monitoring & treatment effectiveness", "ECG"].map((faq, i) => (
                        <AccordionDetails key={i}>
                          <Typography sx={{ color: "#555" }}>{faq}</Typography>
                        </AccordionDetails>
                      ))}
                    </Accordion>



                    <Accordion sx={{ mb: 2, boxShadow: "none", border: "1px solid #eee", borderRadius: 2 }}>
                      <AccordionSummary expandIcon={<ArrowDown />}>
                        <Typography sx={{ fontWeight: 600 }}>Advanced Diagnostic Features</Typography>
                      </AccordionSummary>
                      {["Color Blindness Detection", "Eyesight Screening System", "High-Resolution Integrated Display for real-time data visualization"].map((faq, i) => (
                        <AccordionDetails key={i}>
                          <Typography sx={{ color: "#555" }}>{faq}</Typography>
                        </AccordionDetails>
                      ))}
                    </Accordion>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={1}>


        {/* KEY HIGHLIGHTS & PARAMETERS MEASURED SECTION */}
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 0 } }}>
          <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 6 }}>
            {/* Left Column - Key Highlights */}
            <Box sx={{ flex: 1 }}>
              <Typography sx={{ fontWeight: 900, fontSize: { xs: 22, md: 28 }, color: "#0b1c3d", mb: 3 }}>
                Key Highlights
              </Typography>
              <Stack spacing={2}>
                {Highlights.map((text, idx) => (<PointItem key={idx} text={text} />))}
              </Stack>

              <SubSectionTitle>Point-of-Care Blood Tests</SubSectionTitle>
              <TableContainer component={Paper} sx={{ mb: 3, boxShadow: "none", border: "1px solid #eee" }}>
                <Table size="small"><TableHead><TableRow><TableCell className="w-[686px]"><b>Parameter</b></TableCell><TableCell ><b>Status</b></TableCell></TableRow></TableHead>
                  <TableBody>{pocBloodTests.map((row, i) => (
                    <TableRow key={i}>
                      <TableCell>{row.parameter}</TableCell>
                      <TableCell>

                        {row.status === "Confirmed" ? (
                          <CheckCircleIcon className="!text-[#4caf50]" sx={{ fontSize: 15, color: "#4caf50" }} />
                        ) : (
                          <Chip label={row.status} size="small" color={"warning"} />
                        )}
                      </TableCell>
                    </TableRow>))}
                  </TableBody>
                </Table>
              </TableContainer>

              <SubSectionTitle>Additional Diagnostics</SubSectionTitle>
              <TableContainer component={Paper} sx={{ mb: 3, boxShadow: "none", border: "1px solid #eee" }}>
                <Table size="small"><TableHead><TableRow><TableCell className="w-[686px]"><b>Parameter</b></TableCell><TableCell className="!w-[276px]" ><b>Status</b></TableCell></TableRow></TableHead>
                  <TableBody>{AdditionalDiagnostics.map((row, i) => (<TableRow key={i}><TableCell>{row.parameter}</TableCell><TableCell> {row.status === "Confirmed" ? (
                    <CheckCircleIcon className="!text-[#4caf50]" sx={{ fontSize: 15, color: "#4caf50" }} />
                  ) : (
                    <Chip label={row.status} size="small" color={"warning"} />
                  )}</TableCell></TableRow>))}</TableBody></Table>
              </TableContainer>
            </Box>

            {/* Right Column - Parameters Measured */}
            <Box sx={{ flex: 1 }}>
              <Typography sx={{ fontWeight: 900, fontSize: { xs: 22, md: 28 }, color: "#0b1c3d", mb: 3 }}>
                Parameters Measured
              </Typography>

              <SubSectionTitle>Cardiovascular</SubSectionTitle>
              <TableContainer component={Paper} sx={{ mb: 3, boxShadow: "none", border: "1px solid #eee" }}>
                <Table size="small">
                  <TableHead><TableRow><TableCell><b>Parameter</b></TableCell><TableCell><b>Method</b></TableCell><TableCell><b>Notes</b></TableCell></TableRow></TableHead>
                  <TableBody>{cardiovascularParams.map((row, i) => (<TableRow key={i}><TableCell>{row.parameter}</TableCell><TableCell>{row.method}</TableCell><TableCell>{row.notes}</TableCell></TableRow>))}</TableBody>
                </Table>
              </TableContainer>

              <SubSectionTitle>Respiratory & Oxygen</SubSectionTitle>
              <TableContainer component={Paper} sx={{ mb: 3, boxShadow: "none", border: "1px solid #eee" }}>
                <Table size="small"><TableHead><TableRow><TableCell><b>Parameter</b></TableCell><TableCell><b>Method</b></TableCell></TableRow></TableHead>
                  <TableBody>{respiratoryParams.map((row, i) => (<TableRow key={i}><TableCell>{row.parameter}</TableCell><TableCell>{row.method}</TableCell></TableRow>))}</TableBody></Table>
              </TableContainer>

              <SubSectionTitle>Anthropometric & Body Composition (BIA)</SubSectionTitle>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 3 }}>
                {bodyCompositionParams.map((param, i) => (
                  <Chip key={i} label={param} size="small" sx={{ bgcolor: "#f0f0f0" }} />
                ))}
              </Box>

              <SubSectionTitle>Thermal</SubSectionTitle>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 3 }}>
                {thermalParams.map((param, i) => (
                  <Chip key={i} label={param} size="small" sx={{ bgcolor: "#f0f0f0" }} />
                ))}
              </Box>


            </Box>
          </Box>
        </Container>






        {/* AI CAPABILITIES SECTION */}
        <Box >
          <Container maxWidth="lg">

            <Accordion sx={{ mb: 2, boxShadow: "none", border: "1px solid #eee", borderRadius: 2 }}>
              <AccordionSummary expandIcon={<ArrowDown />}>
                <SectionTitle> AI Capabilities</SectionTitle>
              </AccordionSummary>
              {aiCapabilities?.map((faq, i) => (
                <AccordionDetails key={i} >
                  <Box key={i} >
                    <PointItem text={faq} />
                  </Box>
                </AccordionDetails>
              ))}
            </Accordion>
          </Container>
        </Box>

        {/* BluHealth Portal SECTION */}
        <Container maxWidth="lg" >
          <Accordion sx={{ mb: 2, boxShadow: "none", border: "1px solid #eee", borderRadius: 2 }}>
            <AccordionSummary expandIcon={<ArrowDown />}>
              <SectionTitle>BluHealth Portal</SectionTitle>
            </AccordionSummary>
            {portalFeatures?.map((faq, i) => (
              <AccordionDetails key={i}>
                <Box key={i} >
                  <PointItem text={faq} />
                </Box>
              </AccordionDetails>
            ))}
          </Accordion>
        </Container>

        {/* INTEGRATION SECTION */}
        <Box >
          <Container maxWidth="lg">
            <Accordion sx={{ mb: 2, boxShadow: "none", border: "1px solid #eee", borderRadius: 2 }}>
              <AccordionSummary expandIcon={<ArrowDown />}>
                <SectionTitle>EMR / EHR / HMS / HIS Integration</SectionTitle>
              </AccordionSummary>
              <AccordionDetails >

                <SubSectionTitle>Integration Standards Supported</SubSectionTitle>
                <TableContainer component={Paper} sx={{ mb: 4, boxShadow: "none", border: "1px solid #eee" }}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell className="w-[686px]">
                          <b>Standard</b>
                        </TableCell>
                        <TableCell>
                          <b>Status</b>
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {integrationStandards.map((row, i) =>
                      (<TableRow key={i}>
                        <TableCell>{row.standard}</TableCell>
                        <TableCell> {row.status === "Confirmed" ? (
                          <CheckCircleIcon className="!text-[#4caf50]" sx={{ fontSize: 15, color: "#4caf50" }} />
                        ) : (
                          <Chip label={row.status} size="small" color={"warning"} />
                        )}</TableCell>
                      </TableRow>))}
                    </TableBody>
                  </Table>
                </TableContainer>

                <SubSectionTitle>Confirmed Compatible Platforms</SubSectionTitle>
                <TableContainer component={Paper} sx={{ mb: 4, boxShadow: "none", border: "1px solid #eee" }}>
                  <Table><TableHead><TableRow><TableCell><b>Platform</b></TableCell><TableCell><b>Status</b></TableCell></TableRow></TableHead>
                    <TableBody>{compatiblePlatforms.map((row, i) => (<TableRow key={i}><TableCell>{row.platform}</TableCell><TableCell> {row.status === "Available" ? (
                      <CheckCircleIcon className="!text-[#4caf50]" sx={{ fontSize: 15, color: "#4caf50" }} />
                    ) : (
                      <Chip label={row.status} size="small" color={"info"} />
                    )}</TableCell></TableRow>))}</TableBody></Table>
                </TableContainer>

                <SubSectionTitle>Integration Architecture</SubSectionTitle>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
                  {["REST API / HL7 messaging engine", "OAuth 2.0 / API key authentication", "Real-time / batch / webhook data push", "Integration guide available on request", "No middleware required"].map((item, i) => (
                    <Box key={i} sx={{ width: { xs: "100%", md: "48%" } }}><PointItem text={item} /></Box>
                  ))}
                </Box>

              </AccordionDetails>
            </Accordion>
          </Container>


        </Box>

        {/* REGULATORY & CERTIFICATIONS */}
        <Container maxWidth="lg">
          <Accordion sx={{ mb: 2, boxShadow: "none", border: "1px solid #eee", borderRadius: 2 }}>
            <AccordionSummary expandIcon={<ArrowDown />}>
              <SectionTitle>Regulatory & Certifications</SectionTitle>
            </AccordionSummary>

            <AccordionDetails>
              <TableContainer component={Paper} sx={{ boxShadow: "none", border: "1px solid #eee" }}>
                <Table><TableHead><TableRow><TableCell className="w-[686px]"><b>Certification</b></TableCell><TableCell><b>Status</b></TableCell></TableRow></TableHead>
                  <TableBody>{certifications.map((row, i) => (<TableRow key={i}><TableCell>{row.certification}</TableCell><TableCell><Chip label={row.status} size="small" color={row.status.includes("Pending") ? "warning" : row.status === "Yes" ? "success" : "info"} /></TableCell></TableRow>))}</TableBody></Table>
              </TableContainer>
            </AccordionDetails>
          </Accordion>
        </Container>



        {/* USE CASES */}
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
          <SectionTitle> Use Cases</SectionTitle>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
            {useCases.map((useCase, i) => (
              <Box key={i} sx={{ width: { xs: "100%", md: "31%" } }}>
                <PointItem text={useCase} />
              </Box>
            ))}
          </Box>
        </Container>

        {/* COMPARISON TABLE */}
        <Box sx={{ bgcolor: "#f7f9ff", py: { xs: 6, md: 8 } }}>
          <Container maxWidth="lg">
            <SectionTitle>Comparison vs Competing Systems</SectionTitle>
            <TableContainer component={Paper} sx={{ overflowX: "auto", boxShadow: "none", border: "1px solid #eee" }}>
              <Table size="small"><TableHead><TableRow><TableCell><b>Feature</b></TableCell><TableCell><b>VitalsChair (BluAI)</b></TableCell><TableCell><b>COC Health Kiosk</b></TableCell><TableCell><b>Welch Allyn Connex VSM</b></TableCell></TableRow></TableHead>
                <TableBody>
                  {comparisonData.map((row, i) => (<TableRow key={i}><TableCell>{row.feature}</TableCell><TableCell> {row.vitals === "Yes" || row.vitals === "Available" ? (
                    <CheckCircleIcon className="!text-[#4caf50]" sx={{ fontSize: 15, color: "#4caf50" }} />
                  ) : (
                    <Chip label={row.vitals} size="small" color="success" />
                  )}</TableCell><TableCell>{row.coc}</TableCell><TableCell>{row.welch}</TableCell></TableRow>))}
                </TableBody></Table>
            </TableContainer>
          </Container>
        </Box>
      </CustomTabPanel>



      {/* FAQ SECTION */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        <SectionTitle> Frequently Asked Questions</SectionTitle>


        <Accordion sx={{ mb: 2, boxShadow: "none", border: "1px solid #eee", borderRadius: 2 }}>

          <AccordionSummary expandIcon={<ArrowDown />}>
            <Typography sx={{ fontWeight: 600 }}>Why Choose VitalsChair™ ?</Typography>
          </AccordionSummary>
          {[
            "Efficient: One chair, multiple diagnostics—reducing patient wait time and resource load.",
            "Accurate: Built with clinical-grade components and tested to medical standards.",
            "Smart: AI-powered analytic for early health risk detection.",
            "Connected: Real-time sync to cloud platforms for continuous patient records.",
            "Scalable: Easily integrable into hospitals, diagnostics labs, corporate wellness programs, and telemedicine platforms.",
          ].map((faq) => (
            <AccordionDetails>
              <Typography sx={{ color: "#555" }}>{faq}</Typography>
            </AccordionDetails>
          ))}
        </Accordion>

        {faqs.map((faq, i) => (
          <Accordion key={i} sx={{ mb: 2, boxShadow: "none", border: "1px solid #eee", borderRadius: 2 }}>
            <AccordionSummary expandIcon={<ArrowDown />}><Typography sx={{ fontWeight: 600 }}>{faq.q}</Typography></AccordionSummary>
            <AccordionDetails><Typography sx={{ color: "#555" }}>{faq.a}</Typography></AccordionDetails>
          </Accordion>

        ))}



      </Container>



      <ProductFlow />
    </Box>
  )
}