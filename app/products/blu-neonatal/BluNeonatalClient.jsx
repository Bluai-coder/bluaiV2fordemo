// "use client";

// import {
//     Box,
//     Container,
//     Paper,
//     Stack,
//     Typography,
//     List,
//     ListItem,
//     ListItemText,
// } from "@mui/material";

// import {
//     Table,
//     TableBody,
//     TableCell,
//     TableContainer,
//     TableHead,
//     TableRow,
//     useMediaQuery,
//     useTheme,
// } from "@mui/material";
// import Accordion from '@mui/material/Accordion';
// import AccordionActions from '@mui/material/AccordionActions';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import BluNeonatal3D from "../../../components/BluNeonatal3D";

// const specs = [
//     {
//         label: "SpO₂ Range",
//         value:
//             "0–100%, Accuracy: ±2% (70–100%), ±3% (0–69%)",
//     },
//     {
//         label: "Heart Rate Range",
//         value:
//             "30–250 bpm, Accuracy: ±3 bpm or ±2% (whichever is greater)",
//     },
//     {
//         label: "Temperature Range",
//         value: "32.0–42.0°C, Accuracy: ±0.1°C",
//     },
//     {
//         label: "Weight Capacity",
//         value: "0–10 kg, Resolution: 1 gram, Accuracy: ±5 grams",
//     },
//     {
//         label: "Respiratory Rate",
//         value: "0–150 breaths/min, Accuracy: ±2 breaths/min",
//     },
//     {
//         label: "Camera Resolution",
//         value:
//             "1080p HD (1920×1080) at 30fps, Low-light capable (<1 lux)",
//     },
//     {
//         label: "Data Sampling Rate",
//         value:
//             "All vital signs: 1Hz continuous, Waveforms: 125Hz (HR/SpO₂)",
//     },
//     {
//         label: "Display",
//         value:
//             "15-inch medical-grade touchscreen, anti-glare, cleanable surface",
//     },
//     {
//         label: "Connectivity",
//         value:
//             "Wi-Fi 6 (802.11ax), Ethernet (Gigabit), Bluetooth 5.2 LE",
//     },
//     {
//         label: "Power Supply",
//         value:
//             "100–240V AC, 50/60Hz, with 4-hour UPS battery backup",
//     },
//     {
//         label: "Data Storage",
//         value:
//             "Local: 90 days rolling storage; Cloud: Unlimited with AES-256 encryption",
//     },
// ];





// export default function BluNeoNatalModulePage() {
//     const theme = useTheme();
//     const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
//     return (
//         <Box
//             sx={{ width: "100%", backgroundColor: "#fff", pt: 0, pb: 0 }}
//         >
//             <Box
//                 sx={{
//                     width: "100%",
//                     py: { xs: 6, md: 10 },

//                     background:
//                         "radial-gradient(circle at 15% 15%, rgba(65,84,241,0.10) 0%, transparent 45%), radial-gradient(circle at 80% 20%, rgba(65,84,241,0.08) 0%, transparent 40%), linear-gradient(180deg, #ffffff 0%, #f7f9ff 100%)",
//                 }}>
//                 {/* HERO */}
//                 {/* HERO — Flex Layout */}
//                 <Container maxWidth="lg">
//                     <Box
//                         sx={{
//                             position: "relative",
//                             py: { xs: 2, md: 4 },
//                             overflow: "hidden",

//                         }}
//                     >
//                         {/* TOP FLEX SECTION */}
//                         <Box
//                             sx={{
//                                 display: "flex",
//                                 flexDirection: { xs: "column", md: "row" },
//                                 alignItems: "center",
//                                 gap: { xs: 5, md: 5 },
//                             }}
//                         >
//                             {/* LEFT — TEXT */}
//                             <Box sx={{ flex: 1 }}>
//                                 <Stack spacing={2}>
//                                     <Typography
//                                         sx={{
//                                             fontWeight: 800,
//                                             fontSize: { xs: 26, sm: 30, md: 34 },
//                                             color: "#0b1c3d",
//                                             letterSpacing: "-0.02em",
//                                         }}
//                                     >
//                                         BluNeonatal™
//                                     </Typography>

//                                     <Typography
//                                         sx={{
//                                             fontWeight: 800,
//                                             fontSize: { xs: 30, sm: 38, md: 46 },
//                                             lineHeight: 1.15,
//                                             color: "#111827",
//                                             // fontFamily: "Georgia, serif",
//                                         }}
//                                     >
//                                         AI-Powered
//                                         <br />
//                                         Autonomous Neonatal
//                                         <br />
//                                         Monitoring System
//                                     </Typography>

//                                     <Typography
//                                         sx={{
//                                             color: "#42526b",
//                                             fontWeight: 600,
//                                             fontSize: { xs: 13.5, sm: 14.5 },
//                                         }}
//                                     >
//                                         Revolutionizing NICU Care with Intelligent, Continuous Monitoring.
//                                     </Typography>

//                                     <Typography
//                                         sx={{
//                                             mt: 1,
//                                             px: 2.5,
//                                             py: 0.8,
//                                             width: "fit-content",
//                                             borderRadius: "999px",
//                                             background: "rgba(37,99,235,0.08)",
//                                             color: "#1d4ed8",
//                                             fontWeight: 600,

//                                         }}
//                                     >
//                                         Patent Pending • Medical-Grade • AI-Enabled
//                                     </Typography>
//                                 </Stack>
//                             </Box>

//                             {/* RIGHT — IMAGE */}
//                             <Box
//                                 sx={{
//                                     flex: 1,
//                                     display: "flex",
//                                     justifyContent: "center",
//                                 }}
//                             >
//                                 <Box sx={{ flex: 1, width: "100%", display: "flex", justifyContent: { xs: "center", md: "flex-end" } }}>
//                                     <BluNeonatal3D />
//                                 </Box>
//                             </Box>
//                         </Box>

//                         {/* METRICS STRIP — FLEX */}
//                         <Typography
//                             sx={{
//                                 mt: 5,
//                                 fontWeight: 900,
//                                 lineHeight: 1.1,
//                                 fontSize: { xs: "2rem", md: "1.2rem" },
//                                 color: "#0f172a",
//                                 textAlign: "center",
//                             }}
//                         >
//                             Product Overview


//                         </Typography>

//                         <Box
//                             sx={{
//                                 mt: 1,
//                                 p: 3,
//                                 borderRadius: 0,

//                                 display: "flex",
//                                 flexDirection: { xs: "column", md: "row" },
//                                 justifyContent: "space-between",
//                                 gap: 3,
//                                 textAlign: "center",
//                             }}
//                         >

//                             <Typography sx={{
//                                 color: "#334155",
//                                 lineHeight: 1.9,
//                                 fontSize: { xs: "0.95rem", md: "1.05rem" },
//                             }}>
//                                 <span style={{ color: "#1d4ed8", fontWeight: 600 }}>
//                                     BluNeonatal™
//                                 </span>{" "}
//                                 represents the next generation of neonatal intensive care monitoring.
//                                 Combining advanced medical-grade sensors, precision imaging, and
//                                 AI-powered analytics, BluNeonatal™ delivers autonomous, continuous
//                                 monitoring of premature and critically ill newborns. Built with
//                                 cutting-edge embedded systems and artificial intelligence, it provides
//                                 real-time telemetry, intelligent alarm management, and predictive
//                                 analytics to support NICU teams in delivering superior patient
//                                 outcomes while reducing alarm fatigue and improving workflow
//                                 efficiency.
//                             </Typography>
//                         </Box>
//                     </Box>
//                 </Container>
//             </Box>




//             {/* SECTION 3 (VitalsChair Title + 2 Columns Content) */}
//             <Box
//                 sx={{
//                     width: "100%",
//                     // py: { xs: 6, md: 10 },
//                     background: "linear-gradient(180deg, #ffffff 0%, #f7f9ff 100%)",
//                 }}
//             >
//                 <Container maxWidth="lg">
//                     {/* Heading */}
//                     <Box sx={{ py: { xs: 4, md: 4 } }}>
//                         <Typography
//                             sx={{
//                                 textAlign: "center",
//                                 fontWeight: 800,
//                                 fontSize: { xs: "1.3rem", md: "1.7rem" },
//                                 mb: 4,
//                                 color: "#0f172a",
//                             }}

//                         >
//                             Technical Specifications
//                         </Typography>

//                         <TableContainer
//                             component={Paper}
//                             sx={{
//                                 maxWidth: 1200,
//                                 mx: "auto",
//                                 borderRadius: 1,
//                                 overflow: "hidden",
//                                 // boxShadow: "0 10px 30px rgba(15,23,42,0.08)",
//                                 border: "1px solid rgba(15,23,42,0.06)",
//                             }}
//                         >
//                             <Table size={isMobile ? "small" : "medium"}>
//                                 <TableHead>
//                                     <TableRow
//                                         sx={{
//                                             background:
//                                                 "linear-gradient(180deg, #1d4ed8 0%, #1d4ed8 100%)",
//                                         }}
//                                     >
//                                         <TableCell
//                                             sx={{
//                                                 color: "#fff",
//                                                 fontWeight: 700,
//                                                 fontSize: { xs: 13, md: 15 },
//                                                 width: "30%",
//                                             }}
//                                         >
//                                             Parameter
//                                         </TableCell>
//                                         <TableCell
//                                             sx={{
//                                                 color: "#fff",
//                                                 fontWeight: 700,
//                                                 fontSize: { xs: 13, md: 15 },
//                                             }}
//                                         >
//                                             Specification
//                                         </TableCell>
//                                     </TableRow>
//                                 </TableHead>

//                                 <TableBody>
//                                     {specs.map((row, i) => (
//                                         <TableRow
//                                             key={i}
//                                             sx={{
//                                                 backgroundColor:
//                                                     i % 2 === 0 ? "#ffffff" : "#f8fafc",
//                                                 "&:hover": {
//                                                     backgroundColor: "#eef2ff",
//                                                 },
//                                             }}
//                                         >
//                                             <TableCell
//                                                 sx={{
//                                                     fontWeight: 600,
//                                                     fontSize: { xs: 13, md: 14.5 },
//                                                     color: "#0f172a",
//                                                     verticalAlign: "top",
//                                                 }}
//                                             >
//                                                 {row.label}
//                                             </TableCell>

//                                             <TableCell
//                                                 sx={{
//                                                     fontSize: { xs: 13, md: 14.5 },
//                                                     color: "#334155",
//                                                     lineHeight: 1.7,
//                                                 }}
//                                             >
//                                                 {row.value}
//                                             </TableCell>
//                                         </TableRow>
//                                     ))}
//                                 </TableBody>
//                             </Table>
//                         </TableContainer>
//                     </Box>
//                 </Container>
//             </Box>

//             {/* SECTION 2 (Mobile frame video + content lists) */}
//             <Box
//                 sx={{
//                     width: "100%",
//                     py: { xs: 4, md: 4 },
//                     background:
//                         "radial-gradient(circle at 40% 15%, rgba(255, 255, 255, 0.89) 0%, transparent 45%), #ffffff",
//                 }}
//             >
//                 <Container maxWidth="lg">
//                     <Box sx={{ flex: 1 }}>
//                         <Typography
//                             sx={{
//                                 textAlign: "center",
//                                 color: "#0b1c3d",
//                                 mb: 4,
//                                 fontWeight: 800,
//                                 fontSize: { xs: "1.3rem", md: "1.7rem" },

//                             }}
//                         >
//                             Key Features & Capabilities:-
//                         </Typography>
//                     </Box>
//                     <Box
//                         sx={{
//                             display: "flex",
//                             flexDirection: { xs: "column", md: "row" },
//                             gap: { xs: 4, md: 6 },
//                             alignItems: "flex-start",
//                         }}
//                     >


//                         {/* RIGHT: Text Columns */}
//                         <Box sx={{ flex: 1.2, width: "100%" }}>
//                             <Box
//                                 sx={{
//                                     display: "flex",
//                                     flexDirection: { xs: "column", lg: "row" },
//                                     gap: { xs: 4, lg: 6 },
//                                 }}
//                             >
//                                 {/* Column 1 */}
//                                 <Box sx={{ flex: 1 }}>
//                                     <Accordion>
//                                         <AccordionSummary
//                                             expandIcon={<ExpandMoreIcon />}
//                                             aria-controls="panel1-content"
//                                             id="panel1-header"
//                                         >

//                                             <Typography
//                                                 sx={{
//                                                     fontWeight: 800,
//                                                     fontSize: 15.5,
//                                                     color: "#0b1c3d",
//                                                     mt: 2,
//                                                     mb: 0.7,
//                                                 }}
//                                             >
//                                                 Comprehensive Multi-Parameter Monitoring
//                                             </Typography>

//                                         </AccordionSummary>

//                                         {/* Details */}
//                                         <AccordionDetails>
//                                             <Typography
//                                                 sx={{
//                                                     fontWeight: 500,
//                                                     fontSize: { xs: 16, md: 16 },
//                                                     color: "#0b1c3d",
//                                                     mb: 1.2,
//                                                 }}
//                                             >
//                                                 BluNeonatal™ integrates a complete suite of medical-grade sensors for continuous vital signs monitoring:
//                                             </Typography>
//                                             <List
//                                                 sx={{
//                                                     pl: 2,
//                                                     "& .MuiListItem-root": {
//                                                         py: 0.7,
//                                                     },
//                                                 }}
//                                             >
//                                                 {[
//                                                     "SpO₂ (Pulse Oximetry): Continuous oxygen saturation monitoring with motion artifact rejection and perfusion index measurement.",
//                                                     "Heart Rate (HR): Real-time cardiac monitoring with arrhythmia detection and heart rate variability analysis.",
//                                                     "Body Temperature: Continuous core and skin temperature monitoring with hypothermia/hyperthermia alerts.",
//                                                     "Continuous Weight Monitoring: Integrated medical-grade load cells for precise weight tracking without patient disturbance.",
//                                                     "Respiratory Rate: Non-invasive respiratory monitoring with apnea detection and breath pattern analysis.",
//                                                 ].map((text, idx) => (
//                                                     <ListItem key={idx} disableGutters sx={{ display: "list-item" }}>
//                                                         <ListItemText
//                                                             primary={text}
//                                                             primaryTypographyProps={{
//                                                                 sx: {
//                                                                     color: "#334155",
//                                                                     fontSize: { xs: 14.2, md: 15 },
//                                                                     lineHeight: 1.7,
//                                                                 },
//                                                             }}
//                                                         />
//                                                     </ListItem>
//                                                 ))}
//                                             </List>
//                                         </AccordionDetails>
//                                     </Accordion>



//                                     {/* Sub Section 3 */}
//                                     <Accordion>
//                                         <AccordionSummary
//                                             expandIcon={<ExpandMoreIcon />}
//                                             aria-controls="panel1-content"
//                                             id="panel1-header"
//                                         >

//                                             <Typography
//                                                 sx={{
//                                                     fontWeight: 900,
//                                                     fontSize: 15.5,
//                                                     color: "#0b1c3d",
//                                                     mt: 2,
//                                                     mb: 0.7,
//                                                 }}
//                                             >
//                                                 AI-Powered Clinical Intelligence
//                                             </Typography>
//                                         </AccordionSummary>
//                                         <AccordionDetails>

//                                             <Typography
//                                                 sx={{
//                                                     fontWeight: 500,
//                                                     fontSize: { xs: 16, md: 16 },
//                                                     color: "#0b1c3d",
//                                                     mb: 1.2,
//                                                 }}
//                                             >
//                                                 BluNeonatal™ employs advanced machine learning algorithms to transform raw sensor data into actionable clinical insights:                                         </Typography>

//                                             <List sx={{ pl: 2 }}>
//                                                 {[`Predictive Early Warning System: AI algorithms detect subtle physiological changes up to 30 minutes before critical events, enabling proactive intervention `, `Intelligent Alarm Management: Machine learning reduces false alarms by 75% through contextual analysis and pattern recognition `, `Automated Trend Analysis: Real-time identification of clinically significant trends in vital signs and growth parameters.`, `Risk Stratification: Continuous assessment of patient acuity with automated risk scoring for sepsis, apnea, and cardiovascular instability.`, `Clinical Decision Support: AI-generated recommendations based on evidence-based protocols and patient-specific parameters `].map((text, idx) => (
//                                                     <ListItem key={idx} disableGutters sx={{ display: "list-item", py: 0.5 }}>
//                                                         <ListItemText
//                                                             primary={text}
//                                                             primaryTypographyProps={{
//                                                                 sx: {
//                                                                     color: "#334155",
//                                                                     fontSize: { xs: 14.2, md: 15 },
//                                                                     lineHeight: 1.7,
//                                                                 },
//                                                             }}
//                                                         />
//                                                     </ListItem>
//                                                 ))}
//                                             </List>

//                                         </AccordionDetails>


//                                     </Accordion>




//                                     {/* new  */}

//                                     <Accordion>
//                                         <AccordionSummary
//                                             expandIcon={<ExpandMoreIcon />}
//                                             aria-controls="panel1-content"
//                                             id="panel1-header"
//                                         >

//                                             <Typography
//                                                 sx={{
//                                                     fontWeight: 900,
//                                                     fontSize: 15.5,
//                                                     color: "#0b1c3d",
//                                                     mt: 2,
//                                                     mb: 0.7,
//                                                 }}
//                                             >
//                                                 Fully Autonomous Operation
//                                             </Typography>
//                                         </AccordionSummary>
//                                         <AccordionDetails>

//                                             <Typography
//                                                 sx={{
//                                                     fontWeight: 500,
//                                                     fontSize: { xs: 16, md: 16 },
//                                                     color: "#0b1c3d",
//                                                     mb: 1.2,
//                                                 }}
//                                             >
//                                                 Designed for 24/7 continuous monitoring with minimal human intervention:                                          </Typography>

//                                             <List sx={{ pl: 2 }}>
//                                                 {[`Self-Calibrating Sensors: Automatic baseline calibration and drift correction ensure measurement accuracy without manual adjustment.`,
//                                                     `Predictive Maintenance: AI monitors sensor performance and predicts component failure before it affects patient care.`,
//                                                     `Automatic Data Logging: All vital signs, events, and interventions automatically recorded with precise timestamps for comprehensive medical records.`,
//                                                     `Power Redundancy: Dual power supply with uninterruptible battery backup ensures continuous monitoring during power events.`,
//                                                     `Network Resilience: Local data buffering during network interruptions with automatic sync when connectivity restored.`].map((text, idx) => (
//                                                         <ListItem key={idx} disableGutters sx={{ display: "list-item", py: 0.5 }}>
//                                                             <ListItemText
//                                                                 primary={text}
//                                                                 primaryTypographyProps={{
//                                                                     sx: {
//                                                                         color: "#334155",
//                                                                         fontSize: { xs: 14.2, md: 15 },
//                                                                         lineHeight: 1.7,
//                                                                     },
//                                                                 }}
//                                                             />
//                                                         </ListItem>
//                                                     ))}
//                                             </List>

//                                         </AccordionDetails>


//                                     </Accordion>





//                                     {/* new */}

//                                     <Accordion>
//                                         <AccordionSummary
//                                             expandIcon={<ExpandMoreIcon />}
//                                             aria-controls="panel1-content"
//                                             id="panel1-header"
//                                         >
//                                             <Typography
//                                                 sx={{
//                                                     fontWeight: 900,
//                                                     fontSize: 15.5,
//                                                     color: "#0b1c3d",
//                                                     mt: 2,
//                                                     mb: 0.7,
//                                                 }}
//                                             >
//                                                 Neonatal Intensive Care Units (NICU)
//                                             </Typography>

//                                         </AccordionSummary>

//                                         <AccordionDetails>


//                                             <List sx={{ pl: 2 }}>
//                                                 {[`Level III/IV NICUs with extremely premature infants (<28 weeks gestational age).`,
//                                                     `Very low birth weight (VLBW) and extremely low birth weight (ELBW) monitoring.`,
//                                                     `Post-operative monitoring following neonatal surgery.`,
//                                                     `Respiratory distress syndrome (RDS) management.`,
//                                                     `Sepsis surveillance and early detection.`].map((text, idx) => (
//                                                         <ListItem key={idx} disableGutters sx={{ display: "list-item", py: 0.5 }}>
//                                                             <ListItemText
//                                                                 primary={text}
//                                                                 primaryTypographyProps={{
//                                                                     sx: {
//                                                                         color: "#334155",
//                                                                         fontSize: { xs: 14.2, md: 15 },
//                                                                         lineHeight: 1.7,
//                                                                     },
//                                                                 }}
//                                                             />
//                                                         </ListItem>
//                                                     ))}
//                                             </List>
//                                         </AccordionDetails>

//                                     </Accordion>





//                                     {/* new coloumn 1 */}

//                                     <Accordion>
//                                         <AccordionSummary
//                                             expandIcon={<ExpandMoreIcon />}
//                                             aria-controls="panel1-content"
//                                             id="panel1-header"
//                                         >

//                                             <Typography
//                                                 sx={{
//                                                     fontWeight: 900,
//                                                     fontSize: 15.5,
//                                                     color: "#0b1c3d",
//                                                     mt: 2,
//                                                     mb: 0.7,
//                                                 }}
//                                             >
//                                                 Special Care Nurseries
//                                             </Typography>

//                                         </AccordionSummary>
//                                         <AccordionDetails>

//                                             <List sx={{ pl: 2 }}>
//                                                 {[`Late preterm infants (34-37 weeks) requiring observation.`,
//                                                     `Hyperbilirubinemia (jaundice) monitoring during phototherapy.`,
//                                                     `Infants of diabetic mothers requiring glucose stability monitoring.`,
//                                                     `Term infants with transient medical issues.`,
//                                                 ].map((text, idx) => (
//                                                     <ListItem key={idx} disableGutters sx={{ display: "list-item", py: 0.5 }}>
//                                                         <ListItemText
//                                                             primary={text}
//                                                             primaryTypographyProps={{
//                                                                 sx: {
//                                                                     color: "#334155",
//                                                                     fontSize: { xs: 14.2, md: 15 },
//                                                                     lineHeight: 1.7,
//                                                                 },
//                                                             }}
//                                                         />
//                                                     </ListItem>
//                                                 ))}
//                                             </List>
//                                         </AccordionDetails>
//                                     </Accordion>







//                                     {/* new coloumn 1 */}
//                                     <Accordion>
//                                         <AccordionSummary
//                                             expandIcon={<ExpandMoreIcon />}
//                                             aria-controls="panel1-content"
//                                             id="panel1-header"
//                                         >

//                                             <Typography
//                                                 sx={{
//                                                     fontWeight: 900,
//                                                     fontSize: 15.5,
//                                                     color: "#0b1c3d",
//                                                     mt: 2,
//                                                     mb: 0.7,
//                                                 }}
//                                             >
//                                                 Transport & Emergency Settings
//                                             </Typography>
//                                         </AccordionSummary>
//                                         <AccordionDetails>


//                                             <List sx={{ pl: 2 }}>
//                                                 {[`Neonatal transport teams (ground and air ambulance).`,
//                                                     `Emergency department triage and stabilization.`,
//                                                     `Delivery room resuscitation and initial assessment.`,
//                                                 ].map((text, idx) => (
//                                                     <ListItem key={idx} disableGutters sx={{ display: "list-item", py: 0.5 }}>
//                                                         <ListItemText
//                                                             primary={text}
//                                                             primaryTypographyProps={{
//                                                                 sx: {
//                                                                     color: "#334155",
//                                                                     fontSize: { xs: 14.2, md: 15 },
//                                                                     lineHeight: 1.7,
//                                                                 },
//                                                             }}
//                                                         />
//                                                     </ListItem>
//                                                 ))}
//                                             </List>
//                                         </AccordionDetails>

//                                     </Accordion>





//                                     {/* with options  */}

//                                     {/* Sub Section 4 */}

//                                     <Accordion>
//                                         <AccordionSummary
//                                             expandIcon={<ExpandMoreIcon />}
//                                             aria-controls="panel1-content"
//                                             id="panel1-header"
//                                         >
//                                             <Typography
//                                                 sx={{
//                                                     fontWeight: 800,
//                                                     fontSize: 15.5,
//                                                     color: "#0b1c3d",
//                                                     mt: 2,
//                                                     mb: 0.7,
//                                                 }}
//                                             >
//                                                 Integration & Interoperability

//                                             </Typography>
//                                         </AccordionSummary>
//                                         <AccordionDetails>
//                                             <Typography
//                                                 sx={{
//                                                     fontWeight: 500,
//                                                     fontSize: { xs: 16, md: 16 },
//                                                     color: "#0b1c3d",
//                                                     mb: 1.2,
//                                                 }}
//                                             >
//                                                 BluNeonatal™ seamlessly integrates with existing hospital infrastructure:
//                                             </Typography>
//                                             <Typography
//                                                 sx={{
//                                                     fontWeight: 700,
//                                                     fontSize: 13.5,
//                                                     color: "#1d4ed8",
//                                                     mt: 2,
//                                                     mb: 0.7,
//                                                 }}
//                                             >
//                                                 Electronic Medical Records (EMR/EHR)
//                                             </Typography>


//                                             <List sx={{ pl: 2 }}>
//                                                 {[`HL7 v2.x and FHIR R4 standards for bi-directional data exchange.`,
//                                                     `Certified integrations: Epic, Cerner, Meditech, Allscripts.`,
//                                                     `Automatic flowsheet documentation eliminates manual data entry.`,
//                                                 ].map((text, idx) => (
//                                                     <ListItem key={idx} disableGutters sx={{ display: "list-item", py: 0.5 }}>
//                                                         <ListItemText
//                                                             primary={text}
//                                                             primaryTypographyProps={{
//                                                                 sx: {
//                                                                     color: "#334155",
//                                                                     fontSize: { xs: 14.2, md: 15 },
//                                                                     lineHeight: 1.7,
//                                                                 },
//                                                             }}
//                                                         />
//                                                     </ListItem>
//                                                 ))}
//                                             </List>
//                                             <Typography
//                                                 sx={{
//                                                     fontWeight: 700,
//                                                     fontSize: 13.5,
//                                                     color: "#1d4ed8",
//                                                     mt: 2,
//                                                     mb: 0.7,
//                                                 }}
//                                             >
//                                                 Central Monitoring & Nurse Call Systems
//                                             </Typography>


//                                             <List sx={{ pl: 2 }}>
//                                                 {[`Integration with major central monitoring platforms (Philips, GE, Draeger).`,
//                                                     `Nurse call system integration for alarm escalation.`,
//                                                     `Waveform streaming to bedside and central displays.`,
//                                                 ].map((text, idx) => (
//                                                     <ListItem key={idx} disableGutters sx={{ display: "list-item", py: 0.5 }}>
//                                                         <ListItemText
//                                                             primary={text}
//                                                             primaryTypographyProps={{
//                                                                 sx: {
//                                                                     color: "#334155",
//                                                                     fontSize: { xs: 14.2, md: 15 },
//                                                                     lineHeight: 1.7,
//                                                                 },
//                                                             }}
//                                                         />
//                                                     </ListItem>
//                                                 ))}
//                                             </List>

//                                             <Typography
//                                                 sx={{
//                                                     fontWeight: 700,
//                                                     fontSize: 13.5,
//                                                     color: "#1d4ed8",
//                                                     mt: 2,
//                                                     mb: 0.7,
//                                                 }}
//                                             >
//                                                 BluHealth™ Ecosystem Integration
//                                             </Typography>


//                                             <List sx={{ pl: 2 }}>
//                                                 {[`Native integration with BluHealth™ Portal for unified patient records.`,
//                                                     `BluID™ authentication for secure single sign-on.`,
//                                                     `BluNotes™ integration for AI-powered clinical documentation.`,
//                                                     `BluDMS™ integration for document management and regulatory compliance.`].map((text, idx) => (
//                                                         <ListItem key={idx} disableGutters sx={{ display: "list-item", py: 0.5 }}>
//                                                             <ListItemText
//                                                                 primary={text}
//                                                                 primaryTypographyProps={{
//                                                                     sx: {
//                                                                         color: "#334155",
//                                                                         fontSize: { xs: 14.2, md: 15 },
//                                                                         lineHeight: 1.7,
//                                                                     },
//                                                                 }}
//                                                             />
//                                                         </ListItem>
//                                                     ))}
//                                             </List>

//                                         </AccordionDetails>
//                                     </Accordion>





//                                 </Box>




//                                 {/* Column 2--------------------------------------------------------------------------------------------------------------------------------------- */}
//                                 <Box sx={{ flex: 1 }}>

//                                     <Accordion>
//                                         <AccordionSummary
//                                             expandIcon={<ExpandMoreIcon />}
//                                             aria-controls="panel1-content"
//                                             id="panel1-header"
//                                         >
//                                             <Typography
//                                                 sx={{
//                                                     fontWeight: 800,
//                                                     fontSize: 15.5,
//                                                     color: "#0b1c3d",
//                                                     mt: 2,
//                                                     mb: 0.7,
//                                                 }}
//                                             >
//                                                 Precision Visual Monitoring & Telemetry
//                                             </Typography>

//                                         </AccordionSummary>
//                                         <AccordionDetails>
//                                             {/* Sub Section 1 */}
//                                             <Typography
//                                                 sx={{
//                                                     fontWeight: 500,
//                                                     fontSize: { xs: 16, md: 16 },
//                                                     color: "#0b1c3d",
//                                                     mb: 1.2,
//                                                 }}
//                                             >
//                                                 Integrated medical-grade HD camera system provides continuous visual assessment:
//                                             </Typography>

//                                             <List sx={{ pl: 2 }}>
//                                                 {[
//                                                     `High-Definition Live Streaming: Real-time encrypted video feed accessible remotely via HIPAA-compliant cloud infrastructure.`,
//                                                     `Computer Vision Analytics: AI-powered analysis of infant movement patterns, skin color changes, and positional assessment.`,
//                                                     `Non-Contact Respiratory Monitoring: Vision-based respiratory rate detection as secondary validation of sensor data.`,
//                                                     `Motion & Activity Detection: Automated detection of excessive movement, seizure-like activity, or prolonged stillness.`,
//                                                     `Parental Engagement: Secure portal enabling parents to view their infant remotely, fostering bonding during extended NICU stays.`
//                                                 ].map((text, idx) => (
//                                                     <ListItem key={idx} disableGutters sx={{ display: "list-item", py: 0.5 }}>
//                                                         <ListItemText
//                                                             primary={text}
//                                                             primaryTypographyProps={{
//                                                                 sx: {
//                                                                     color: "#334155",
//                                                                     fontSize: { xs: 14.2, md: 15 },
//                                                                     lineHeight: 1.7,
//                                                                 },
//                                                             }}
//                                                         />
//                                                     </ListItem>
//                                                 ))}
//                                             </List>


//                                         </AccordionDetails>
//                                     </Accordion>




//                                     {/* Sub Section 2 */}
//                                     <Accordion>
//                                         <AccordionSummary
//                                             expandIcon={<ExpandMoreIcon />}
//                                             aria-controls="panel1-content"
//                                             id="panel1-header"
//                                         >
//                                             <Typography
//                                                 sx={{
//                                                     fontWeight: 800,
//                                                     fontSize: 15.5,
//                                                     color: "#0b1c3d",
//                                                     mt: 2,
//                                                     mb: 0.7,
//                                                 }}
//                                             >
//                                                 Intelligent Multi-Tiered Alarm System
//                                             </Typography>
//                                         </AccordionSummary>
//                                         <AccordionDetails>
//                                             <Typography
//                                                 sx={{
//                                                     fontWeight: 500,
//                                                     fontSize: { xs: 16, md: 16 },
//                                                     color: "#0b1c3d",
//                                                     mb: 1.2,
//                                                 }}
//                                             >
//                                                 BluNeonatal™'s intelligent alarm architecture eliminates alarm fatigue while ensuring critical events are never missed:                                         </Typography>

//                                             <List sx={{ pl: 2 }}>
//                                                 {[
//                                                     `Auto-Triggered Priority Alarms: Critical events (severe bradycardia, apnea >20 seconds, desaturation <85%) trigger immediate escalation with visual, audible, and mobile notifications.`,
//                                                     `Contextual Alarm Suppression: AI analyzes patient state and clinical context to suppress non-actionable alarms (e.g., during feeding, routine care).`,
//                                                     `Escalation Protocol Integration: Automatic notification cascade—bedside nurse → charge nurse → attending physician based on response time and alarm persistence.`,
//                                                     `Multi-Channel Notifications: Simultaneous alerts via bedside display, nurse station dashboard, mobile app (iOS/Android), SMS, and email.`,
//                                                     `Alarm Analytics Dashboard: Real-time visualization of alarm frequency, response times, and false alarm rates for continuous quality improvement.`
//                                                 ].map((text, idx) => (
//                                                     <ListItem key={idx} disableGutters sx={{ display: "list-item", py: 0.5 }}>
//                                                         <ListItemText
//                                                             primary={text}
//                                                             primaryTypographyProps={{
//                                                                 sx: {
//                                                                     color: "#334155",
//                                                                     fontSize: { xs: 14.2, md: 15 },
//                                                                     lineHeight: 1.7,
//                                                                 },
//                                                             }}
//                                                         />
//                                                     </ListItem>
//                                                 ))}
//                                             </List>

//                                         </AccordionDetails>
//                                     </Accordion>



//                                     {/* Add More */}
//                                     {/* Sub Section 3 */}
//                                     <Accordion>
//                                         <AccordionSummary
//                                             expandIcon={<ExpandMoreIcon />}
//                                             aria-controls="panel1-content"
//                                             id="panel1-header"
//                                         >
//                                             <Typography
//                                                 sx={{
//                                                     fontWeight: 800,
//                                                     fontSize: 15.5,
//                                                     color: "#0b1c3d",
//                                                     mt: 2,
//                                                     mb: 0.7,
//                                                 }}
//                                             >
//                                                 Safety, Compliance & Quality Standards
//                                             </Typography>

//                                         </AccordionSummary>
//                                         <AccordionDetails>
//                                             <Typography
//                                                 sx={{
//                                                     fontWeight: 500,
//                                                     fontSize: { xs: 16, md: 16 },
//                                                     color: "#0b1c3d",
//                                                     mb: 1.2,
//                                                 }}
//                                             >
//                                                 BluNeonatal™ is designed, manufactured, and tested to meet the highest international standards for medical device safety and performance:  </Typography>

//                                             <List sx={{ pl: 2 }}>
//                                                 {[`IEC 60601-1: Medical electrical equipment - General requirements for basic safety and essential performance.`,
//                                                     `IEC 60601-1-2: Electromagnetic compatibility (EMC) requirements and tests.`,
//                                                     `IEC 60601-1-8: Alarm systems - General requirements, tests, and guidance.`,
//                                                     `ISO 13485: Medical devices - Quality management systems.`,
//                                                     `ISO 14971: Application of risk management to medical devices.`,
//                                                     `HIPAA Compliance: Full compliance with US healthcare privacy and security regulations.`,
//                                                     `GDPR Compliance: European data protection and privacy standards `].map((text, idx) => (
//                                                         <ListItem key={idx} disableGutters sx={{ display: "list-item", py: 0.5 }}>
//                                                             <ListItemText
//                                                                 primary={text}
//                                                                 primaryTypographyProps={{
//                                                                     sx: {
//                                                                         color: "#334155",
//                                                                         fontSize: { xs: 14.2, md: 15 },
//                                                                         lineHeight: 1.7,
//                                                                     },
//                                                                 }}
//                                                             />
//                                                         </ListItem>
//                                                     ))}
//                                             </List>

//                                         </AccordionDetails>
//                                     </Accordion>




//                                     {/* Sub Section 4 */}
//                                     <Accordion>
//                                         <AccordionSummary
//                                             expandIcon={<ExpandMoreIcon />}
//                                             aria-controls="panel1-content"
//                                             id="panel1-header"
//                                         >
//                                             <Typography
//                                                 sx={{
//                                                     fontWeight: 800,
//                                                     fontSize: 15.5,
//                                                     color: "#0b1c3d",
//                                                     mt: 2,
//                                                     mb: 0.7,
//                                                 }}
//                                             >
//                                                 Material Safety

//                                             </Typography>

//                                         </AccordionSummary>
//                                         <AccordionDetails>
//                                             <Typography
//                                                 sx={{
//                                                     fontWeight: 500,
//                                                     fontSize: { xs: 16, md: 16 },
//                                                     color: "#0b1c3d",
//                                                     mb: 1.2,
//                                                 }}
//                                             >
//                                                 All components in contact with patients are constructed from medical-grade, hypoallergenic materials:
//                                             </Typography>


//                                             <List sx={{ pl: 2 }}>
//                                                 {[`BPA-free, phthalate-free, and latex-free materials.`,
//                                                     `Skin contact sensors: Medical-grade silicone (USP Class VI).`,
//                                                     `Surface materials: Antimicrobial, easily cleanable with standard hospital disinfectants.`,
//                                                     `No hazardous substances: RoHS and REACH compliant `].map((text, idx) => (
//                                                         <ListItem key={idx} disableGutters sx={{ display: "list-item", py: 0.5 }}>
//                                                             <ListItemText
//                                                                 primary={text}
//                                                                 primaryTypographyProps={{
//                                                                     sx: {
//                                                                         color: "#334155",
//                                                                         fontSize: { xs: 14.2, md: 15 },
//                                                                         lineHeight: 1.7,
//                                                                     },
//                                                                 }}
//                                                             />
//                                                         </ListItem>
//                                                     ))}
//                                             </List>


//                                         </AccordionDetails>
//                                     </Accordion>






//                                     {/* Sub Section 4 */}
//                                     <Accordion>
//                                         <AccordionSummary
//                                             expandIcon={<ExpandMoreIcon />}
//                                             aria-controls="panel1-content"
//                                             id="panel1-header"
//                                         >
//                                             <Typography
//                                                 sx={{
//                                                     fontWeight: 800,
//                                                     fontSize: 15.5,
//                                                     color: "#0b1c3d",
//                                                     mt: 2,
//                                                     mb: 0.7,
//                                                 }}
//                                             >
//                                                 Clinical Benefits & Outcomes

//                                             </Typography>
//                                         </AccordionSummary>
//                                         <AccordionDetails>
//                                             <Typography
//                                                 sx={{
//                                                     fontWeight: 700,
//                                                     fontSize: 13.5,
//                                                     color: "#1d4ed8",
//                                                     mt: 2,
//                                                     mb: 0.7,
//                                                 }}
//                                             >
//                                                 For Clinicians
//                                             </Typography>


//                                             <List sx={{ pl: 2 }}>
//                                                 {[`Reduced Alarm Fatigue: 75% reduction in false alarms improves staff focus on critical events.`,
//                                                     `Early Deterioration Detection: AI predicts clinical deterioration 30+ minutes in advance.`,
//                                                     `Workflow Efficiency: 40% reduction in manual charting with automatic vital signs documentation.`,
//                                                     `Remote Monitoring: Specialists can assess multiple patients simultaneously from central station or mobile device.`].map((text, idx) => (
//                                                         <ListItem key={idx} disableGutters sx={{ display: "list-item", py: 0.5 }}>
//                                                             <ListItemText
//                                                                 primary={text}
//                                                                 primaryTypographyProps={{
//                                                                     sx: {
//                                                                         color: "#334155",
//                                                                         fontSize: { xs: 14.2, md: 15 },
//                                                                         lineHeight: 1.7,
//                                                                     },
//                                                                 }}
//                                                             />
//                                                         </ListItem>
//                                                     ))}
//                                             </List>
//                                             <Typography
//                                                 sx={{
//                                                     fontWeight: 700,
//                                                     fontSize: 13.5,
//                                                     color: "#1d4ed8",
//                                                     mt: 2,
//                                                     mb: 0.7,
//                                                 }}
//                                             >
//                                                 For Patients & Families
//                                             </Typography>


//                                             <List sx={{ pl: 2 }}>
//                                                 {[`Improved Safety: Continuous autonomous monitoring reduces risk of undetected clinical events.`,
//                                                     `Minimal Disturbance: Non-invasive monitoring allows infants to rest undisturbed during critical developmental periods.`,
//                                                     `Family Engagement: Secure video access enables parents to see their infant anytime, promoting bonding and reducing anxiety.`,
//                                                     `Comprehensive Records: Complete longitudinal data supports continuity of care and long-term developmental follow-up.`].map((text, idx) => (
//                                                         <ListItem key={idx} disableGutters sx={{ display: "list-item", py: 0.5 }}>
//                                                             <ListItemText
//                                                                 primary={text}
//                                                                 primaryTypographyProps={{
//                                                                     sx: {
//                                                                         color: "#334155",
//                                                                         fontSize: { xs: 14.2, md: 15 },
//                                                                         lineHeight: 1.7,
//                                                                     },
//                                                                 }}
//                                                             />
//                                                         </ListItem>
//                                                     ))}
//                                             </List>

//                                             <Typography
//                                                 sx={{
//                                                     fontWeight: 700,
//                                                     fontSize: 13.5,
//                                                     color: "#1d4ed8",
//                                                     mt: 2,
//                                                     mb: 0.7,
//                                                 }}
//                                             >
//                                                 For Healthcare Facilities
//                                             </Typography>


//                                             <List sx={{ pl: 2 }}>
//                                                 {[`Operational Efficiency: Reduces nurse:patient ratio requirements while maintaining quality of care.`,
//                                                     `Quality Metrics: Comprehensive analytics support quality improvement initiatives and regulatory compliance.`,
//                                                     `Cost Reduction: Prevents adverse events, reduces length of stay, and minimizes readmissions.`,
//                                                     `Competitive Advantage: Cutting-edge technology attracts top clinical talent and strengthens reputation.`].map((text, idx) => (
//                                                         <ListItem key={idx} disableGutters sx={{ display: "list-item", py: 0.5 }}>
//                                                             <ListItemText
//                                                                 primary={text}
//                                                                 primaryTypographyProps={{
//                                                                     sx: {
//                                                                         color: "#334155",
//                                                                         fontSize: { xs: 14.2, md: 15 },
//                                                                         lineHeight: 1.7,
//                                                                     },
//                                                                 }}
//                                                             />
//                                                         </ListItem>
//                                                     ))}
//                                             </List>


//                                         </AccordionDetails>
//                                     </Accordion>



//                                     <Accordion>
//                                         <AccordionSummary
//                                             expandIcon={<ExpandMoreIcon />}
//                                             aria-controls="panel1-content"
//                                             id="panel1-header"
//                                         >
//                                             <Typography
//                                                 sx={{
//                                                     fontWeight: 800,
//                                                     fontSize: 15.5,
//                                                     color: "#0b1c3d",
//                                                     mt: 2,
//                                                     mb: 0.7,
//                                                 }}
//                                             >
//                                                 Implementation & Support

//                                             </Typography>

//                                         </AccordionSummary>
//                                         <AccordionDetails>

//                                             <Typography
//                                                 sx={{
//                                                     fontWeight: 700,
//                                                     fontSize: 13.5,
//                                                     color: "#1d4ed8",
//                                                     mt: 2,
//                                                     mb: 0.7,
//                                                 }}
//                                             >
//                                                 Comprehensive Deployment Services
//                                             </Typography>


//                                             <List sx={{ pl: 2 }}>
//                                                 {[`Site Assessment: Pre-deployment evaluation of network infrastructure, power requirements, and workflow analysis.`,
//                                                     `Installation & Configuration: Professional installation by certified technicians with EMR integration setup.`,
//                                                     `Clinical Training: Comprehensive hands-on training for clinical staff, biomedical engineers, and IT teams.`,
//                                                 ].map((text, idx) => (
//                                                     <ListItem key={idx} disableGutters sx={{ display: "list-item", py: 0.5 }}>
//                                                         <ListItemText
//                                                             primary={text}
//                                                             primaryTypographyProps={{
//                                                                 sx: {
//                                                                     color: "#334155",
//                                                                     fontSize: { xs: 14.2, md: 15 },
//                                                                     lineHeight: 1.7,
//                                                                 },
//                                                             }}
//                                                         />
//                                                     </ListItem>
//                                                 ))}
//                                             </List>
//                                             <Typography
//                                                 sx={{
//                                                     fontWeight: 700,
//                                                     fontSize: 13.5,
//                                                     color: "#1d4ed8",
//                                                     mt: 2,
//                                                     mb: 0.7,
//                                                 }}
//                                             >
//                                                 Ongoing Support & Maintenance
//                                             </Typography>


//                                             <List sx={{ pl: 2 }}>
//                                                 {[`24/7 Technical Support: Round-the-clock access to clinical engineering support team.`,
//                                                     `Preventive Maintenance: Quarterly scheduled maintenance and calibration services.`,
//                                                     `Software Updates: Regular OTA firmware and AI algorithm updates with enhanced features.`,
//                                                     `Loaner Equipment: Immediate replacement units during repair or maintenance.`,
//                                                     `Clinical Consultation: Access to clinical specialists for optimization and best practices.`
//                                                 ].map((text, idx) => (
//                                                     <ListItem key={idx} disableGutters sx={{ display: "list-item", py: 0.5 }}>
//                                                         <ListItemText
//                                                             primary={text}
//                                                             primaryTypographyProps={{
//                                                                 sx: {
//                                                                     color: "#334155",
//                                                                     fontSize: { xs: 14.2, md: 15 },
//                                                                     lineHeight: 1.7,
//                                                                 },
//                                                             }}
//                                                         />
//                                                     </ListItem>
//                                                 ))}
//                                             </List>


//                                         </AccordionDetails>
//                                     </Accordion>




//                                     <Accordion>
//                                         <AccordionSummary
//                                             expandIcon={<ExpandMoreIcon />}
//                                             aria-controls="panel1-content"
//                                             id="panel1-header"
//                                         >
//                                             <Typography
//                                                 sx={{
//                                                     fontWeight: 800,
//                                                     fontSize: 15.5,
//                                                     color: "#0b1c3d",
//                                                     mt: 2,
//                                                     mb: 0.7,
//                                                 }}
//                                             >
//                                                 Why Choose BluNeonatal™?
//                                             </Typography>

//                                         </AccordionSummary>
//                                         <AccordionDetails>
//                                             <List sx={{ pl: 2 }}>
//                                                 {[`Next-Generation Technology: Most advanced AI-enabled neonatal monitoring system available.`,
//                                                     `Proven Clinical Impact: Demonstrated reduction in adverse events and improved patient outcomes.`,
//                                                     `Medical-Grade Reliability: Designed for 24/7 operation in critical care environments.`,
//                                                     `Comprehensive Support: Full lifecycle support from implementation through long-term operation.`,
//                                                     `Future-Ready Platform: Continuous AI improvements and feature enhancements via software updates.`,
//                                                     `Seamless Integration: Works with existing hospital systems and BluAI ecosystem.`,
//                                                     `Regulatory Excellence: Full compliance with global medical device and data security standards.`
//                                                 ].map((text, idx) => (
//                                                     <ListItem key={idx} disableGutters sx={{ display: "list-item", py: 0.5 }}>
//                                                         <ListItemText
//                                                             primary={text}
//                                                             primaryTypographyProps={{
//                                                                 sx: {
//                                                                     color: "#334155",
//                                                                     fontSize: { xs: 14.2, md: 15 },
//                                                                     lineHeight: 1.7,
//                                                                 },
//                                                             }}
//                                                         />
//                                                     </ListItem>
//                                                 ))}
//                                             </List>

//                                         </AccordionDetails>
//                                     </Accordion>




//                                 </Box>
//                             </Box>
//                         </Box>
//                     </Box>
//                 </Container>
//             </Box>


//         </Box>
//     );
// }








"use client";

import {
    Box,
    Container,
    Paper,
    Stack,
    Typography,
    List,
    ListItem,
    ListItemText,
    Chip,
} from "@mui/material";

import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BluNeonatal3D from "../../../components/BluNeonatal3D";
import { ChevronLeft, ChevronRight, Cloud, Cpu, Fingerprint, Rotate3d, Shield } from "lucide-react";
import { useRef, useState } from "react";

const specs = [
    {
        label: "SpO₂ Range",
        value:
            "0–100%, Accuracy: ±2% (70–100%), ±3% (0–69%)",
    },
    {
        label: "Heart Rate Range",
        value:
            "30–250 bpm, Accuracy: ±3 bpm or ±2% (whichever is greater)",
    },
    {
        label: "Temperature Range",
        value: "32.0–42.0°C, Accuracy: ±0.1°C",
    },
    {
        label: "Weight Capacity",
        value: "0–10 kg, Resolution: 1 gram, Accuracy: ±5 grams",
    },
    {
        label: "Respiratory Rate",
        value: "0–150 breaths/min, Accuracy: ±2 breaths/min",
    },
    {
        label: "Camera Resolution",
        value:
            "1080p HD (1920×1080) at 30fps, Low-light capable (<1 lux)",
    },
    {
        label: "Data Sampling Rate",
        value:
            "All vital signs: 1Hz continuous, Waveforms: 125Hz (HR/SpO₂)",
    },
    {
        label: "Display",
        value:
            "15-inch medical-grade touchscreen, anti-glare, cleanable surface",
    },
    {
        label: "Connectivity",
        value:
            "Wi-Fi 6 (802.11ax), Ethernet (Gigabit), Bluetooth 5.2 LE",
    },
    {
        label: "Power Supply",
        value:
            "100–240V AC, 50/60Hz, with 4-hour UPS battery backup",
    },
    {
        label: "Data Storage",
        value:
            "Local: 90 days rolling storage; Cloud: Unlimited with AES-256 encryption",
    },
];


// --- 360 Viewer ---
const ProductGallery = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [rotation, setRotation] = useState(0);
    const lastX = useRef(0);

    const galleryItems = [
        { type: '360', label: '360° View', src: '/pole.png' },
        { type: 'image', label: 'Side View', src: '/neonatal/1.webp', transform: 'scaleX(-1)' },
        { type: 'image', label: 'Front View', src: '/neonatal/2.webp', transform: 'scaleX(1)' },
        // { type: 'image', label: 'Interface', src: '/pole.png', objectPosition: 'top' },
        { type: 'image', label: 'Deployment', src: '/neonatal/3.webp', objectPosition: 'bottom' },
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
                    <BluNeonatal3D />
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


export default function BluNeonatalClient() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    return (
          <Box sx={{ width: "100%", backgroundColor: "#fff" }}>
       
       
       
             {/* 1. HERO - PERFECT & UNTOUCHED */}
             <Box sx={{
               minHeight: '100vh', display: 'flex', alignItems: 'center',
               position: 'relative', overflow: 'hidden',
               pt: { xs: 6, md: 18 }, pb: { xs: 6, md: 10 },
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
                                BluNeonatal™ <br /> by BluAI
                            </Typography>

                            <Typography sx={{ fontWeight: 900, fontSize: { xs: 20, sm: 24, md: 30 }, background: 'linear-gradient(90deg, #4756d4, #10b981)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', mb: 3 }}>
                                Manage. My Health. My Way.™
                            </Typography>
                            <Typography
                                sx={{
                                    fontWeight: 800,
                                    fontSize: { xs: 30, sm: 38, md: 40 },
                                    lineHeight: 1.15,
                                    color: "#111827",
                                    // fontFamily: "Georgia, serif",
                                }}
                            >
                                AI-Powered
                              
                                Autonomous Neonatal
                               
                                Monitoring System
                            </Typography>
                            <Typography
                                sx={{
                                    color: "#42526b",
                                    fontWeight: 600,
                                    fontSize: { xs: 13.5, sm: 14.5 },
                                }}
                            >
                                Revolutionizing NICU Care with Intelligent, Continuous Monitoring.
                            </Typography>

                            <Typography
                                sx={{
                                    mt: 1,
                                    px: 2.5,
                                    py: 0.8,
                                    width: "fit-content",
                                    borderRadius: "999px",
                                    background: "rgba(37,99,235,0.08)",
                                    color: "#1d4ed8",
                                    fontWeight: 600,

                                }}
                            >
                                Patent Pending • Medical-Grade • AI-Enabled
                            </Typography>

                            {/* <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent={{ xs: 'center', md: 'flex-start' }} sx={{ mb: 5 }}>
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
                          </Stack> */}

                     
                            
                        </Box>
                        
                        


                    </Box>

                    <Box>

                              {/* METRICS STRIP — FLEX */}
                        <Typography
                            sx={{
                                mt: 5,
                                fontWeight: 900,
                                lineHeight: 1.1,
                                fontSize: { xs: "2rem", md: "1.2rem" },
                                color: "#0f172a",
                                textAlign: "center",
                            }}
                        >
                            Product Overview


                        </Typography>

                        <Box
                            sx={{
                                mt: 1,
                                p: 3,
                                borderRadius: 0,

                                display: "flex",
                                flexDirection: { xs: "column", md: "row" },
                                justifyContent: "space-between",
                                gap: 3,
                                textAlign: "center",
                            }}
                        >

                            <Typography sx={{
                                color: "#334155",
                                lineHeight: 1.9,
                                fontSize: { xs: "0.95rem", md: "1.05rem" },
                            }}>
                                <span style={{ color: "#1d4ed8", fontWeight: 600 }}>
                                    BluNeonatal™
                                </span>{" "}
                                represents the next generation of neonatal intensive care monitoring.
                                Combining advanced medical-grade sensors, precision imaging, and
                                AI-powered analytics, BluNeonatal™ delivers autonomous, continuous
                                monitoring of premature and critically ill newborns. Built with
                                cutting-edge embedded systems and artificial intelligence, it provides
                                real-time telemetry, intelligent alarm management, and predictive
                                analytics to support NICU teams in delivering superior patient
                                outcomes while reducing alarm fatigue and improving workflow
                                efficiency.
                            </Typography>
                        </Box>
                    </Box>
                </Container>
            </Box>




            {/* SECTION 3 (VitalsChair Title + 2 Columns Content) */}
            <Box
                sx={{
                    width: "100%",
                    // py: { xs: 6, md: 10 },
                    background: "linear-gradient(180deg, #ffffff 0%, #f7f9ff 100%)",
                }}
            >
                <Container maxWidth="lg">
                    {/* Heading */}
                    <Box sx={{ py: { xs: 4, md: 4 } }}>
                        <Typography
                            sx={{
                                textAlign: "center",
                                fontWeight: 800,
                                fontSize: { xs: "1.3rem", md: "1.7rem" },
                                mb: 4,
                                color: "#0f172a",
                            }}

                        >
                            Technical Specifications
                        </Typography>

                        <TableContainer
                            component={Paper}
                            sx={{
                                maxWidth: 1200,
                                mx: "auto",
                                borderRadius: 1,
                                overflow: "hidden",
                                // boxShadow: "0 10px 30px rgba(15,23,42,0.08)",
                                border: "1px solid rgba(15,23,42,0.06)",
                            }}
                        >
                            <Table size={isMobile ? "small" : "medium"}>
                                <TableHead>
                                    <TableRow
                                        sx={{
                                            background:
                                                "linear-gradient(180deg, #1d4ed8 0%, #1d4ed8 100%)",
                                        }}
                                    >
                                        <TableCell
                                            sx={{
                                                color: "#fff",
                                                fontWeight: 700,
                                                fontSize: { xs: 13, md: 15 },
                                                width: "30%",
                                            }}
                                        >
                                            Parameter
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                color: "#fff",
                                                fontWeight: 700,
                                                fontSize: { xs: 13, md: 15 },
                                            }}
                                        >
                                            Specification
                                        </TableCell>
                                    </TableRow>
                                </TableHead>

                                <TableBody>
                                    {specs.map((row, i) => (
                                        <TableRow
                                            key={i}
                                            sx={{
                                                backgroundColor:
                                                    i % 2 === 0 ? "#ffffff" : "#f8fafc",
                                                "&:hover": {
                                                    backgroundColor: "#eef2ff",
                                                },
                                            }}
                                        >
                                            <TableCell
                                                sx={{
                                                    fontWeight: 600,
                                                    fontSize: { xs: 13, md: 14.5 },
                                                    color: "#0f172a",
                                                    verticalAlign: "top",
                                                }}
                                            >
                                                {row.label}
                                            </TableCell>

                                            <TableCell
                                                sx={{
                                                    fontSize: { xs: 13, md: 14.5 },
                                                    color: "#334155",
                                                    lineHeight: 1.7,
                                                }}
                                            >
                                                {row.value}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>
                </Container>
            </Box>

            {/* SECTION 2 (Mobile frame video + content lists) */}
            <Box
                sx={{
                    width: "100%",
                    py: { xs: 4, md: 4 },
                    background:
                        "radial-gradient(circle at 40% 15%, rgba(255, 255, 255, 0.89) 0%, transparent 45%), #ffffff",
                }}
            >
                <Container maxWidth="lg">
                    <Box sx={{ flex: 1 }}>
                        <Typography
                            sx={{
                                textAlign: "center",
                                color: "#0b1c3d",
                                mb: 4,
                                fontWeight: 800,
                                fontSize: { xs: "1.3rem", md: "1.7rem" },

                            }}
                        >
                            Key Features & Capabilities:-
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: { xs: "column", md: "row" },
                            gap: { xs: 4, md: 6 },
                            alignItems: "flex-start",
                        }}
                    >


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
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1-content"
                                            id="panel1-header"
                                        >

                                            <Typography
                                                sx={{
                                                    fontWeight: 800,
                                                    fontSize: 15.5,
                                                    color: "#0b1c3d",
                                                    mt: 2,
                                                    mb: 0.7,
                                                }}
                                            >
                                                Comprehensive Multi-Parameter Monitoring
                                            </Typography>

                                        </AccordionSummary>

                                        {/* Details */}
                                        <AccordionDetails>
                                            <Typography
                                                sx={{
                                                    fontWeight: 500,
                                                    fontSize: { xs: 16, md: 16 },
                                                    color: "#0b1c3d",
                                                    mb: 1.2,
                                                }}
                                            >
                                                BluNeonatal™ integrates a complete suite of medical-grade sensors for continuous vital signs monitoring:
                                            </Typography>
                                            <List
                                                sx={{
                                                    pl: 2,
                                                    "& .MuiListItem-root": {
                                                        py: 0.7,
                                                    },
                                                }}
                                            >
                                                {[
                                                    "SpO₂ (Pulse Oximetry): Continuous oxygen saturation monitoring with motion artifact rejection and perfusion index measurement.",
                                                    "Heart Rate (HR): Real-time cardiac monitoring with arrhythmia detection and heart rate variability analysis.",
                                                    "Body Temperature: Continuous core and skin temperature monitoring with hypothermia/hyperthermia alerts.",
                                                    "Continuous Weight Monitoring: Integrated medical-grade load cells for precise weight tracking without patient disturbance.",
                                                    "Respiratory Rate: Non-invasive respiratory monitoring with apnea detection and breath pattern analysis.",
                                                ].map((text, idx) => (
                                                    <ListItem key={idx} disableGutters sx={{ display: "list-item" }}>
                                                        <ListItemText
                                                            primary={text}
                                                            primaryTypographyProps={{
                                                                sx: {
                                                                    color: "#334155",
                                                                    fontSize: { xs: 14.2, md: 15 },
                                                                    lineHeight: 1.7,
                                                                },
                                                            }}
                                                        />
                                                    </ListItem>
                                                ))}
                                            </List>
                                        </AccordionDetails>
                                    </Accordion>



                                    {/* Sub Section 3 */}
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1-content"
                                            id="panel1-header"
                                        >

                                            <Typography
                                                sx={{
                                                    fontWeight: 900,
                                                    fontSize: 15.5,
                                                    color: "#0b1c3d",
                                                    mt: 2,
                                                    mb: 0.7,
                                                }}
                                            >
                                                AI-Powered Clinical Intelligence
                                            </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>

                                            <Typography
                                                sx={{
                                                    fontWeight: 500,
                                                    fontSize: { xs: 16, md: 16 },
                                                    color: "#0b1c3d",
                                                    mb: 1.2,
                                                }}
                                            >
                                                BluNeonatal™ employs advanced machine learning algorithms to transform raw sensor data into actionable clinical insights:                                         </Typography>

                                            <List sx={{ pl: 2 }}>
                                                {[`Predictive Early Warning System: AI algorithms detect subtle physiological changes up to 30 minutes before critical events, enabling proactive intervention `, `Intelligent Alarm Management: Machine learning reduces false alarms by 75% through contextual analysis and pattern recognition `, `Automated Trend Analysis: Real-time identification of clinically significant trends in vital signs and growth parameters.`, `Risk Stratification: Continuous assessment of patient acuity with automated risk scoring for sepsis, apnea, and cardiovascular instability.`, `Clinical Decision Support: AI-generated recommendations based on evidence-based protocols and patient-specific parameters `].map((text, idx) => (
                                                    <ListItem key={idx} disableGutters sx={{ display: "list-item", py: 0.5 }}>
                                                        <ListItemText
                                                            primary={text}
                                                            primaryTypographyProps={{
                                                                sx: {
                                                                    color: "#334155",
                                                                    fontSize: { xs: 14.2, md: 15 },
                                                                    lineHeight: 1.7,
                                                                },
                                                            }}
                                                        />
                                                    </ListItem>
                                                ))}
                                            </List>

                                        </AccordionDetails>


                                    </Accordion>




                                    {/* new  */}

                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1-content"
                                            id="panel1-header"
                                        >

                                            <Typography
                                                sx={{
                                                    fontWeight: 900,
                                                    fontSize: 15.5,
                                                    color: "#0b1c3d",
                                                    mt: 2,
                                                    mb: 0.7,
                                                }}
                                            >
                                                Fully Autonomous Operation
                                            </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>

                                            <Typography
                                                sx={{
                                                    fontWeight: 500,
                                                    fontSize: { xs: 16, md: 16 },
                                                    color: "#0b1c3d",
                                                    mb: 1.2,
                                                }}
                                            >
                                                Designed for 24/7 continuous monitoring with minimal human intervention:                                          </Typography>

                                            <List sx={{ pl: 2 }}>
                                                {[`Self-Calibrating Sensors: Automatic baseline calibration and drift correction ensure measurement accuracy without manual adjustment.`,
                                                    `Predictive Maintenance: AI monitors sensor performance and predicts component failure before it affects patient care.`,
                                                    `Automatic Data Logging: All vital signs, events, and interventions automatically recorded with precise timestamps for comprehensive medical records.`,
                                                    `Power Redundancy: Dual power supply with uninterruptible battery backup ensures continuous monitoring during power events.`,
                                                    `Network Resilience: Local data buffering during network interruptions with automatic sync when connectivity restored.`].map((text, idx) => (
                                                        <ListItem key={idx} disableGutters sx={{ display: "list-item", py: 0.5 }}>
                                                            <ListItemText
                                                                primary={text}
                                                                primaryTypographyProps={{
                                                                    sx: {
                                                                        color: "#334155",
                                                                        fontSize: { xs: 14.2, md: 15 },
                                                                        lineHeight: 1.7,
                                                                    },
                                                                }}
                                                            />
                                                        </ListItem>
                                                    ))}
                                            </List>

                                        </AccordionDetails>


                                    </Accordion>





                                    {/* new */}

                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1-content"
                                            id="panel1-header"
                                        >
                                            <Typography
                                                sx={{
                                                    fontWeight: 900,
                                                    fontSize: 15.5,
                                                    color: "#0b1c3d",
                                                    mt: 2,
                                                    mb: 0.7,
                                                }}
                                            >
                                                Neonatal Intensive Care Units (NICU)
                                            </Typography>

                                        </AccordionSummary>

                                        <AccordionDetails>


                                            <List sx={{ pl: 2 }}>
                                                {[`Level III/IV NICUs with extremely premature infants (<28 weeks gestational age).`,
                                                    `Very low birth weight (VLBW) and extremely low birth weight (ELBW) monitoring.`,
                                                    `Post-operative monitoring following neonatal surgery.`,
                                                    `Respiratory distress syndrome (RDS) management.`,
                                                    `Sepsis surveillance and early detection.`].map((text, idx) => (
                                                        <ListItem key={idx} disableGutters sx={{ display: "list-item", py: 0.5 }}>
                                                            <ListItemText
                                                                primary={text}
                                                                primaryTypographyProps={{
                                                                    sx: {
                                                                        color: "#334155",
                                                                        fontSize: { xs: 14.2, md: 15 },
                                                                        lineHeight: 1.7,
                                                                    },
                                                                }}
                                                            />
                                                        </ListItem>
                                                    ))}
                                            </List>
                                        </AccordionDetails>

                                    </Accordion>





                                    {/* new coloumn 1 */}

                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1-content"
                                            id="panel1-header"
                                        >

                                            <Typography
                                                sx={{
                                                    fontWeight: 900,
                                                    fontSize: 15.5,
                                                    color: "#0b1c3d",
                                                    mt: 2,
                                                    mb: 0.7,
                                                }}
                                            >
                                                Special Care Nurseries
                                            </Typography>

                                        </AccordionSummary>
                                        <AccordionDetails>

                                            <List sx={{ pl: 2 }}>
                                                {[`Late preterm infants (34-37 weeks) requiring observation.`,
                                                    `Hyperbilirubinemia (jaundice) monitoring during phototherapy.`,
                                                    `Infants of diabetic mothers requiring glucose stability monitoring.`,
                                                    `Term infants with transient medical issues.`,
                                                ].map((text, idx) => (
                                                    <ListItem key={idx} disableGutters sx={{ display: "list-item", py: 0.5 }}>
                                                        <ListItemText
                                                            primary={text}
                                                            primaryTypographyProps={{
                                                                sx: {
                                                                    color: "#334155",
                                                                    fontSize: { xs: 14.2, md: 15 },
                                                                    lineHeight: 1.7,
                                                                },
                                                            }}
                                                        />
                                                    </ListItem>
                                                ))}
                                            </List>
                                        </AccordionDetails>
                                    </Accordion>







                                    {/* new coloumn 1 */}
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1-content"
                                            id="panel1-header"
                                        >

                                            <Typography
                                                sx={{
                                                    fontWeight: 900,
                                                    fontSize: 15.5,
                                                    color: "#0b1c3d",
                                                    mt: 2,
                                                    mb: 0.7,
                                                }}
                                            >
                                                Transport & Emergency Settings
                                            </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>


                                            <List sx={{ pl: 2 }}>
                                                {[`Neonatal transport teams (ground and air ambulance).`,
                                                    `Emergency department triage and stabilization.`,
                                                    `Delivery room resuscitation and initial assessment.`,
                                                ].map((text, idx) => (
                                                    <ListItem key={idx} disableGutters sx={{ display: "list-item", py: 0.5 }}>
                                                        <ListItemText
                                                            primary={text}
                                                            primaryTypographyProps={{
                                                                sx: {
                                                                    color: "#334155",
                                                                    fontSize: { xs: 14.2, md: 15 },
                                                                    lineHeight: 1.7,
                                                                },
                                                            }}
                                                        />
                                                    </ListItem>
                                                ))}
                                            </List>
                                        </AccordionDetails>

                                    </Accordion>





                                    {/* with options  */}

                                    {/* Sub Section 4 */}

                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1-content"
                                            id="panel1-header"
                                        >
                                            <Typography
                                                sx={{
                                                    fontWeight: 800,
                                                    fontSize: 15.5,
                                                    color: "#0b1c3d",
                                                    mt: 2,
                                                    mb: 0.7,
                                                }}
                                            >
                                                Integration & Interoperability

                                            </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography
                                                sx={{
                                                    fontWeight: 500,
                                                    fontSize: { xs: 16, md: 16 },
                                                    color: "#0b1c3d",
                                                    mb: 1.2,
                                                }}
                                            >
                                                BluNeonatal™ seamlessly integrates with existing hospital infrastructure:
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    fontWeight: 700,
                                                    fontSize: 13.5,
                                                    color: "#1d4ed8",
                                                    mt: 2,
                                                    mb: 0.7,
                                                }}
                                            >
                                                Electronic Medical Records (EMR/EHR)
                                            </Typography>


                                            <List sx={{ pl: 2 }}>
                                                {[`HL7 v2.x and FHIR R4 standards for bi-directional data exchange.`,
                                                    `Certified integrations: Epic, Cerner, Meditech, Allscripts.`,
                                                    `Automatic flowsheet documentation eliminates manual data entry.`,
                                                ].map((text, idx) => (
                                                    <ListItem key={idx} disableGutters sx={{ display: "list-item", py: 0.5 }}>
                                                        <ListItemText
                                                            primary={text}
                                                            primaryTypographyProps={{
                                                                sx: {
                                                                    color: "#334155",
                                                                    fontSize: { xs: 14.2, md: 15 },
                                                                    lineHeight: 1.7,
                                                                },
                                                            }}
                                                        />
                                                    </ListItem>
                                                ))}
                                            </List>
                                            <Typography
                                                sx={{
                                                    fontWeight: 700,
                                                    fontSize: 13.5,
                                                    color: "#1d4ed8",
                                                    mt: 2,
                                                    mb: 0.7,
                                                }}
                                            >
                                                Central Monitoring & Nurse Call Systems
                                            </Typography>


                                            <List sx={{ pl: 2 }}>
                                                {[`Integration with major central monitoring platforms (Philips, GE, Draeger).`,
                                                    `Nurse call system integration for alarm escalation.`,
                                                    `Waveform streaming to bedside and central displays.`,
                                                ].map((text, idx) => (
                                                    <ListItem key={idx} disableGutters sx={{ display: "list-item", py: 0.5 }}>
                                                        <ListItemText
                                                            primary={text}
                                                            primaryTypographyProps={{
                                                                sx: {
                                                                    color: "#334155",
                                                                    fontSize: { xs: 14.2, md: 15 },
                                                                    lineHeight: 1.7,
                                                                },
                                                            }}
                                                        />
                                                    </ListItem>
                                                ))}
                                            </List>

                                            <Typography
                                                sx={{
                                                    fontWeight: 700,
                                                    fontSize: 13.5,
                                                    color: "#1d4ed8",
                                                    mt: 2,
                                                    mb: 0.7,
                                                }}
                                            >
                                                BluHealth™ Ecosystem Integration
                                            </Typography>


                                            <List sx={{ pl: 2 }}>
                                                {[`Native integration with BluHealth™ Portal for unified patient records.`,
                                                    `BluID™ authentication for secure single sign-on.`,
                                                    `BluNotes™ integration for AI-powered clinical documentation.`,
                                                    `BluDMS™ integration for document management and regulatory compliance.`].map((text, idx) => (
                                                        <ListItem key={idx} disableGutters sx={{ display: "list-item", py: 0.5 }}>
                                                            <ListItemText
                                                                primary={text}
                                                                primaryTypographyProps={{
                                                                    sx: {
                                                                        color: "#334155",
                                                                        fontSize: { xs: 14.2, md: 15 },
                                                                        lineHeight: 1.7,
                                                                    },
                                                                }}
                                                            />
                                                        </ListItem>
                                                    ))}
                                            </List>

                                        </AccordionDetails>
                                    </Accordion>





                                </Box>




                                {/* Column 2--------------------------------------------------------------------------------------------------------------------------------------- */}
                                <Box sx={{ flex: 1 }}>

                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1-content"
                                            id="panel1-header"
                                        >
                                            <Typography
                                                sx={{
                                                    fontWeight: 800,
                                                    fontSize: 15.5,
                                                    color: "#0b1c3d",
                                                    mt: 2,
                                                    mb: 0.7,
                                                }}
                                            >
                                                Precision Visual Monitoring & Telemetry
                                            </Typography>

                                        </AccordionSummary>
                                        <AccordionDetails>
                                            {/* Sub Section 1 */}
                                            <Typography
                                                sx={{
                                                    fontWeight: 500,
                                                    fontSize: { xs: 16, md: 16 },
                                                    color: "#0b1c3d",
                                                    mb: 1.2,
                                                }}
                                            >
                                                Integrated medical-grade HD camera system provides continuous visual assessment:
                                            </Typography>

                                            <List sx={{ pl: 2 }}>
                                                {[
                                                    `High-Definition Live Streaming: Real-time encrypted video feed accessible remotely via HIPAA-compliant cloud infrastructure.`,
                                                    `Computer Vision Analytics: AI-powered analysis of infant movement patterns, skin color changes, and positional assessment.`,
                                                    `Non-Contact Respiratory Monitoring: Vision-based respiratory rate detection as secondary validation of sensor data.`,
                                                    `Motion & Activity Detection: Automated detection of excessive movement, seizure-like activity, or prolonged stillness.`,
                                                    `Parental Engagement: Secure portal enabling parents to view their infant remotely, fostering bonding during extended NICU stays.`
                                                ].map((text, idx) => (
                                                    <ListItem key={idx} disableGutters sx={{ display: "list-item", py: 0.5 }}>
                                                        <ListItemText
                                                            primary={text}
                                                            primaryTypographyProps={{
                                                                sx: {
                                                                    color: "#334155",
                                                                    fontSize: { xs: 14.2, md: 15 },
                                                                    lineHeight: 1.7,
                                                                },
                                                            }}
                                                        />
                                                    </ListItem>
                                                ))}
                                            </List>


                                        </AccordionDetails>
                                    </Accordion>




                                    {/* Sub Section 2 */}
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1-content"
                                            id="panel1-header"
                                        >
                                            <Typography
                                                sx={{
                                                    fontWeight: 800,
                                                    fontSize: 15.5,
                                                    color: "#0b1c3d",
                                                    mt: 2,
                                                    mb: 0.7,
                                                }}
                                            >
                                                Intelligent Multi-Tiered Alarm System
                                            </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography
                                                sx={{
                                                    fontWeight: 500,
                                                    fontSize: { xs: 16, md: 16 },
                                                    color: "#0b1c3d",
                                                    mb: 1.2,
                                                }}
                                            >
                                                BluNeonatal™'s intelligent alarm architecture eliminates alarm fatigue while ensuring critical events are never missed:                                         </Typography>

                                            <List sx={{ pl: 2 }}>
                                                {[
                                                    `Auto-Triggered Priority Alarms: Critical events (severe bradycardia, apnea >20 seconds, desaturation <85%) trigger immediate escalation with visual, audible, and mobile notifications.`,
                                                    `Contextual Alarm Suppression: AI analyzes patient state and clinical context to suppress non-actionable alarms (e.g., during feeding, routine care).`,
                                                    `Escalation Protocol Integration: Automatic notification cascade—bedside nurse → charge nurse → attending physician based on response time and alarm persistence.`,
                                                    `Multi-Channel Notifications: Simultaneous alerts via bedside display, nurse station dashboard, mobile app (iOS/Android), SMS, and email.`,
                                                    `Alarm Analytics Dashboard: Real-time visualization of alarm frequency, response times, and false alarm rates for continuous quality improvement.`
                                                ].map((text, idx) => (
                                                    <ListItem key={idx} disableGutters sx={{ display: "list-item", py: 0.5 }}>
                                                        <ListItemText
                                                            primary={text}
                                                            primaryTypographyProps={{
                                                                sx: {
                                                                    color: "#334155",
                                                                    fontSize: { xs: 14.2, md: 15 },
                                                                    lineHeight: 1.7,
                                                                },
                                                            }}
                                                        />
                                                    </ListItem>
                                                ))}
                                            </List>

                                        </AccordionDetails>
                                    </Accordion>



                                    {/* Add More */}
                                    {/* Sub Section 3 */}
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1-content"
                                            id="panel1-header"
                                        >
                                            <Typography
                                                sx={{
                                                    fontWeight: 800,
                                                    fontSize: 15.5,
                                                    color: "#0b1c3d",
                                                    mt: 2,
                                                    mb: 0.7,
                                                }}
                                            >
                                                Safety, Compliance & Quality Standards
                                            </Typography>

                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography
                                                sx={{
                                                    fontWeight: 500,
                                                    fontSize: { xs: 16, md: 16 },
                                                    color: "#0b1c3d",
                                                    mb: 1.2,
                                                }}
                                            >
                                                BluNeonatal™ is designed, manufactured, and tested to meet the highest international standards for medical device safety and performance:  </Typography>

                                            <List sx={{ pl: 2 }}>
                                                {[`IEC 60601-1: Medical electrical equipment - General requirements for basic safety and essential performance.`,
                                                    `IEC 60601-1-2: Electromagnetic compatibility (EMC) requirements and tests.`,
                                                    `IEC 60601-1-8: Alarm systems - General requirements, tests, and guidance.`,
                                                    `ISO 13485: Medical devices - Quality management systems.`,
                                                    `ISO 14971: Application of risk management to medical devices.`,
                                                    `HIPAA Compliance: Full compliance with US healthcare privacy and security regulations.`,
                                                    `GDPR Compliance: European data protection and privacy standards `].map((text, idx) => (
                                                        <ListItem key={idx} disableGutters sx={{ display: "list-item", py: 0.5 }}>
                                                            <ListItemText
                                                                primary={text}
                                                                primaryTypographyProps={{
                                                                    sx: {
                                                                        color: "#334155",
                                                                        fontSize: { xs: 14.2, md: 15 },
                                                                        lineHeight: 1.7,
                                                                    },
                                                                }}
                                                            />
                                                        </ListItem>
                                                    ))}
                                            </List>

                                        </AccordionDetails>
                                    </Accordion>




                                    {/* Sub Section 4 */}
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1-content"
                                            id="panel1-header"
                                        >
                                            <Typography
                                                sx={{
                                                    fontWeight: 800,
                                                    fontSize: 15.5,
                                                    color: "#0b1c3d",
                                                    mt: 2,
                                                    mb: 0.7,
                                                }}
                                            >
                                                Material Safety

                                            </Typography>

                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography
                                                sx={{
                                                    fontWeight: 500,
                                                    fontSize: { xs: 16, md: 16 },
                                                    color: "#0b1c3d",
                                                    mb: 1.2,
                                                }}
                                            >
                                                All components in contact with patients are constructed from medical-grade, hypoallergenic materials:
                                            </Typography>


                                            <List sx={{ pl: 2 }}>
                                                {[`BPA-free, phthalate-free, and latex-free materials.`,
                                                    `Skin contact sensors: Medical-grade silicone (USP Class VI).`,
                                                    `Surface materials: Antimicrobial, easily cleanable with standard hospital disinfectants.`,
                                                    `No hazardous substances: RoHS and REACH compliant `].map((text, idx) => (
                                                        <ListItem key={idx} disableGutters sx={{ display: "list-item", py: 0.5 }}>
                                                            <ListItemText
                                                                primary={text}
                                                                primaryTypographyProps={{
                                                                    sx: {
                                                                        color: "#334155",
                                                                        fontSize: { xs: 14.2, md: 15 },
                                                                        lineHeight: 1.7,
                                                                    },
                                                                }}
                                                            />
                                                        </ListItem>
                                                    ))}
                                            </List>


                                        </AccordionDetails>
                                    </Accordion>






                                    {/* Sub Section 4 */}
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1-content"
                                            id="panel1-header"
                                        >
                                            <Typography
                                                sx={{
                                                    fontWeight: 800,
                                                    fontSize: 15.5,
                                                    color: "#0b1c3d",
                                                    mt: 2,
                                                    mb: 0.7,
                                                }}
                                            >
                                                Clinical Benefits & Outcomes

                                            </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography
                                                sx={{
                                                    fontWeight: 700,
                                                    fontSize: 13.5,
                                                    color: "#1d4ed8",
                                                    mt: 2,
                                                    mb: 0.7,
                                                }}
                                            >
                                                For Clinicians
                                            </Typography>


                                            <List sx={{ pl: 2 }}>
                                                {[`Reduced Alarm Fatigue: 75% reduction in false alarms improves staff focus on critical events.`,
                                                    `Early Deterioration Detection: AI predicts clinical deterioration 30+ minutes in advance.`,
                                                    `Workflow Efficiency: 40% reduction in manual charting with automatic vital signs documentation.`,
                                                    `Remote Monitoring: Specialists can assess multiple patients simultaneously from central station or mobile device.`].map((text, idx) => (
                                                        <ListItem key={idx} disableGutters sx={{ display: "list-item", py: 0.5 }}>
                                                            <ListItemText
                                                                primary={text}
                                                                primaryTypographyProps={{
                                                                    sx: {
                                                                        color: "#334155",
                                                                        fontSize: { xs: 14.2, md: 15 },
                                                                        lineHeight: 1.7,
                                                                    },
                                                                }}
                                                            />
                                                        </ListItem>
                                                    ))}
                                            </List>
                                            <Typography
                                                sx={{
                                                    fontWeight: 700,
                                                    fontSize: 13.5,
                                                    color: "#1d4ed8",
                                                    mt: 2,
                                                    mb: 0.7,
                                                }}
                                            >
                                                For Patients & Families
                                            </Typography>


                                            <List sx={{ pl: 2 }}>
                                                {[`Improved Safety: Continuous autonomous monitoring reduces risk of undetected clinical events.`,
                                                    `Minimal Disturbance: Non-invasive monitoring allows infants to rest undisturbed during critical developmental periods.`,
                                                    `Family Engagement: Secure video access enables parents to see their infant anytime, promoting bonding and reducing anxiety.`,
                                                    `Comprehensive Records: Complete longitudinal data supports continuity of care and long-term developmental follow-up.`].map((text, idx) => (
                                                        <ListItem key={idx} disableGutters sx={{ display: "list-item", py: 0.5 }}>
                                                            <ListItemText
                                                                primary={text}
                                                                primaryTypographyProps={{
                                                                    sx: {
                                                                        color: "#334155",
                                                                        fontSize: { xs: 14.2, md: 15 },
                                                                        lineHeight: 1.7,
                                                                    },
                                                                }}
                                                            />
                                                        </ListItem>
                                                    ))}
                                            </List>

                                            <Typography
                                                sx={{
                                                    fontWeight: 700,
                                                    fontSize: 13.5,
                                                    color: "#1d4ed8",
                                                    mt: 2,
                                                    mb: 0.7,
                                                }}
                                            >
                                                For Healthcare Facilities
                                            </Typography>


                                            <List sx={{ pl: 2 }}>
                                                {[`Operational Efficiency: Reduces nurse:patient ratio requirements while maintaining quality of care.`,
                                                    `Quality Metrics: Comprehensive analytics support quality improvement initiatives and regulatory compliance.`,
                                                    `Cost Reduction: Prevents adverse events, reduces length of stay, and minimizes readmissions.`,
                                                    `Competitive Advantage: Cutting-edge technology attracts top clinical talent and strengthens reputation.`].map((text, idx) => (
                                                        <ListItem key={idx} disableGutters sx={{ display: "list-item", py: 0.5 }}>
                                                            <ListItemText
                                                                primary={text}
                                                                primaryTypographyProps={{
                                                                    sx: {
                                                                        color: "#334155",
                                                                        fontSize: { xs: 14.2, md: 15 },
                                                                        lineHeight: 1.7,
                                                                    },
                                                                }}
                                                            />
                                                        </ListItem>
                                                    ))}
                                            </List>


                                        </AccordionDetails>
                                    </Accordion>



                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1-content"
                                            id="panel1-header"
                                        >
                                            <Typography
                                                sx={{
                                                    fontWeight: 800,
                                                    fontSize: 15.5,
                                                    color: "#0b1c3d",
                                                    mt: 2,
                                                    mb: 0.7,
                                                }}
                                            >
                                                Implementation & Support

                                            </Typography>

                                        </AccordionSummary>
                                        <AccordionDetails>

                                            <Typography
                                                sx={{
                                                    fontWeight: 700,
                                                    fontSize: 13.5,
                                                    color: "#1d4ed8",
                                                    mt: 2,
                                                    mb: 0.7,
                                                }}
                                            >
                                                Comprehensive Deployment Services
                                            </Typography>


                                            <List sx={{ pl: 2 }}>
                                                {[`Site Assessment: Pre-deployment evaluation of network infrastructure, power requirements, and workflow analysis.`,
                                                    `Installation & Configuration: Professional installation by certified technicians with EMR integration setup.`,
                                                    `Clinical Training: Comprehensive hands-on training for clinical staff, biomedical engineers, and IT teams.`,
                                                ].map((text, idx) => (
                                                    <ListItem key={idx} disableGutters sx={{ display: "list-item", py: 0.5 }}>
                                                        <ListItemText
                                                            primary={text}
                                                            primaryTypographyProps={{
                                                                sx: {
                                                                    color: "#334155",
                                                                    fontSize: { xs: 14.2, md: 15 },
                                                                    lineHeight: 1.7,
                                                                },
                                                            }}
                                                        />
                                                    </ListItem>
                                                ))}
                                            </List>
                                            <Typography
                                                sx={{
                                                    fontWeight: 700,
                                                    fontSize: 13.5,
                                                    color: "#1d4ed8",
                                                    mt: 2,
                                                    mb: 0.7,
                                                }}
                                            >
                                                Ongoing Support & Maintenance
                                            </Typography>


                                            <List sx={{ pl: 2 }}>
                                                {[`24/7 Technical Support: Round-the-clock access to clinical engineering support team.`,
                                                    `Preventive Maintenance: Quarterly scheduled maintenance and calibration services.`,
                                                    `Software Updates: Regular OTA firmware and AI algorithm updates with enhanced features.`,
                                                    `Loaner Equipment: Immediate replacement units during repair or maintenance.`,
                                                    `Clinical Consultation: Access to clinical specialists for optimization and best practices.`
                                                ].map((text, idx) => (
                                                    <ListItem key={idx} disableGutters sx={{ display: "list-item", py: 0.5 }}>
                                                        <ListItemText
                                                            primary={text}
                                                            primaryTypographyProps={{
                                                                sx: {
                                                                    color: "#334155",
                                                                    fontSize: { xs: 14.2, md: 15 },
                                                                    lineHeight: 1.7,
                                                                },
                                                            }}
                                                        />
                                                    </ListItem>
                                                ))}
                                            </List>


                                        </AccordionDetails>
                                    </Accordion>




                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1-content"
                                            id="panel1-header"
                                        >
                                            <Typography
                                                sx={{
                                                    fontWeight: 800,
                                                    fontSize: 15.5,
                                                    color: "#0b1c3d",
                                                    mt: 2,
                                                    mb: 0.7,
                                                }}
                                            >
                                                Why Choose BluNeonatal™?
                                            </Typography>

                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <List sx={{ pl: 2 }}>
                                                {[`Next-Generation Technology: Most advanced AI-enabled neonatal monitoring system available.`,
                                                    `Proven Clinical Impact: Demonstrated reduction in adverse events and improved patient outcomes.`,
                                                    `Medical-Grade Reliability: Designed for 24/7 operation in critical care environments.`,
                                                    `Comprehensive Support: Full lifecycle support from implementation through long-term operation.`,
                                                    `Future-Ready Platform: Continuous AI improvements and feature enhancements via software updates.`,
                                                    `Seamless Integration: Works with existing hospital systems and BluAI ecosystem.`,
                                                    `Regulatory Excellence: Full compliance with global medical device and data security standards.`
                                                ].map((text, idx) => (
                                                    <ListItem key={idx} disableGutters sx={{ display: "list-item", py: 0.5 }}>
                                                        <ListItemText
                                                            primary={text}
                                                            primaryTypographyProps={{
                                                                sx: {
                                                                    color: "#334155",
                                                                    fontSize: { xs: 14.2, md: 15 },
                                                                    lineHeight: 1.7,
                                                                },
                                                            }}
                                                        />
                                                    </ListItem>
                                                ))}
                                            </List>

                                        </AccordionDetails>
                                    </Accordion>




                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>


        </Box>
    );
}
