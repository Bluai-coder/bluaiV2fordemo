
'use client';

import { useRef, useState } from "react";
;
import {
  ChevronDown, Rotate3d, ChevronLeft, ChevronRight, Plus, Minus, CheckCircleIcon, ArrowDown
} from "lucide-react";

import {
  Box,
  Container,
  Typography,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  Accordion,
  Divider,
  AccordionSummary,
  AccordionDetails,
  Button,
  Tabs,
  Tab
} from "@mui/material";

import VitalsBriefcase3D from "../../../components/VitalsBriefcase3D";
import RequestDemoModal from "../../../components/popups/RequestDemoModal"


// --- Typography Helper ---
const SectionTitle = ({ children, align = "center", light = false }) => (
  <Typography sx={{
    fontWeight: 900, fontSize: { xs: 28, sm: 36, md: 42 }, color: light ? "#fff" : "#0a1a3c",
    textAlign: align, letterSpacing: "-0.03em", lineHeight: 1.1, mb: 2
  }}>
    {children}
  </Typography>
);


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

function SubSectionTitle({ children }) {
  return (
    <Typography sx={{ fontWeight: 800, fontSize: { xs: 18, md: 20 }, color: "#0b1c3d", mb: 2, mt: 3 }}>
      {children}
    </Typography>
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
// --- 360 Viewer ---
const ProductGallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [rotation, setRotation] = useState(0);
  const lastX = useRef(0);

  const galleryItems = [
    { type: '360', label: '360° View', src: '/briefcase-use.png' },
    { type: 'image', label: 'Side View', src: '/briefcase/briefcase-1.webp', transform: 'bottom)' },
    { type: 'image', label: 'Front View', src: '/briefcase/briefcase-2.webp', transform: 'bottom' },
    { type: 'image', label: 'Deployment', src: '/briefcase/briefcase-5.webp', objectPosition: 'bottom' },
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
          <VitalsBriefcase3D />
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

export default function VitalsBriefcaseClient() {
  const [openDemo, setOpenDemo] = useState(false);



  const useCases = [
    "Hospitals & Clinics — OPD triage",
    "Corporate Wellness — employee screening",
    "Public Health Camps — mass screening",
    "Pharmacies — walk-in health checks",
    "Government Health Initiatives — ABDM aligned",
    "Telemedicine Hubs — pre-consultation data",
  ];

  const comparisonData = [
    { feature: "Form factor", vitals: "Briefcase", coc: "-", welch: "-" },
    { feature: "Parameters", vitals: "55+", coc: "60+", welch: "~10" },
    { feature: "Gel-free 12-lead ECG", vitals: "Yes", coc: "Not specified", welch: "No" },
    { feature: "Body composition (BIA)", vitals: "Yes", coc: "Yes", welch: "No" },
    { feature: "POC blood tests", vitals: "Yes", coc: "Yes", welch: "No" },
    { feature: "AI health insights", vitals: "Yes", coc: "Yes", welch: "No" },
    { feature: "India-made / locally supported", vitals: "Yes", coc: "Yes", welch: "No" },
    { feature: "ABDM / ABHA integration", vitals: "Available", coc: "Partial", welch: "No" },
  ];

  const faqs = [
    { q: "How long does a screening take?", a: "A full screening takes 5–7 minutes." },
    // { q: "Does it require staff to operate?", a: "Designed for self-service with voice guidance." },
    { q: "Can it work offline?", a: "Yes, with local storage and auto-sync." },
    // { q: "Which EMR systems are supported?", a: "Epic, Cerner, Bahmni, and more via FHIR." },
    // { q: "Is it GeM listed?", a: "Coming soon. Contact us for procurement." },
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
              Briefcase™  by BluAI
            </Typography>

            <Typography sx={{ fontWeight: 900, textAlign: "center", fontSize: { xs: 20, sm: 24, md: 18 }, background: 'linear-gradient(90deg, #1b4dff, #1852ad)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', mb: 3 }}>
              Manage. My Health. My Way.™
            </Typography>
            <Typography sx={{ color: "#0b1c3d", textAlign: "start", fontWeight: 900, fontSize: { xs: 13.5, sm: 14.5 } }}>
              Patent Pending #202411094218 | Medical-Grade | AI-Driven | Cloud-Connected
            </Typography>
            <Typography sx={{ mt: 1, color: "#334155", textAlign: "start", lineHeight: 1.8, fontSize: { xs: 14.5, md: 15.5 } }}>
              Introducing Briefcase™, a groundbreaking innovation in patient health assessments—designed to deliver a complete set of vital measurements in a single, effortless sitting. Built with precision, powered by AI, and seamlessly integrated with the BluHealth™ Portal, Briefcase™ redefines the way healthcare professionals collect, analyze, and monitor patient health data.
            </Typography>
            <Typography sx={{ mt: 2, fontWeight: 800, textAlign: "start", fontSize: { xs: 15.5, md: 16.5 }, color: "#0b1c3d" }}>
              Comprehensive Vital Monitoring – All in One Chair
            </Typography>
            <Typography sx={{ color: "#334155", textAlign: "start", lineHeight: 1.8, fontSize: { xs: 14.5, md: 15.5 } }}>
              Briefcase™ is an indigenous AI-powered health monitoring chair designed to deliver a complete diagnostic health assessment from a single seated position. Built for hospitals, clinics, corporate wellness programs, health camps, and senior living communities, it consolidates what traditionally requires multiple devices, rooms, and staff into one ergonomic, self-service chair — completing a full checkup in 7–10 minutes.
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
                      src="/briefcase-use.png"
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
                      {[`Multi-Login Support: IC Card, QR Code Scanning, Fingerprint Recognition`, `Cloud-Ready: Fully compatible with BluAI Database and BluHealth™ Portal`, `Developer-Friendly: Complete API suite available for seamless third-party integration`]?.map((faq, i) => (
                        <AccordionDetails key={i}>
                          <Typography sx={{ color: "#555" }}>{faq}</Typography>
                        </AccordionDetails>
                      ))}
                    </Accordion>


                    <Accordion sx={{ mb: 2, boxShadow: "none", border: "1px solid #eee", borderRadius: 2 }}>
                      <AccordionSummary expandIcon={<ArrowDown />}>
                        <Typography sx={{ fontWeight: 600 }}>Vital Signs & Basic Metrics</Typography>
                      </AccordionSummary>
                      {[
                        "Blood Pressure, Temperature, Respiration, Heart Rate/Pulse, Oxygen Level (SpO2)",
                        "Age, Weight, Height, BMI",
                        "Glucose Monitoring (Manual)",
                      ]?.map((faq, i) => (
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
                      ]?.map((faq, i) => (
                        <AccordionDetails key={i}>
                          <Typography sx={{ color: "#555" }}>{faq}</Typography>
                        </AccordionDetails>
                      ))}
                    </Accordion>



                    <Accordion sx={{ mb: 2, boxShadow: "none", border: "1px solid #eee", borderRadius: 2 }}>
                      <AccordionSummary expandIcon={<ArrowDown />}>
                        <Typography sx={{ fontWeight: 600 }}> Monitoring & Detection</Typography>
                      </AccordionSummary>
                      {["Body Posture, Emotional State", "Facial monitoring & treatment effectiveness", "ECG"]?.map((faq, i) => (
                        <AccordionDetails key={i}>
                          <Typography sx={{ color: "#555" }}>{faq}</Typography>
                        </AccordionDetails>
                      ))}
                    </Accordion>



                    <Accordion sx={{ mb: 2, boxShadow: "none", border: "1px solid #eee", borderRadius: 2 }}>
                      <AccordionSummary expandIcon={<ArrowDown />}>
                        <Typography sx={{ fontWeight: 600 }}>Advanced Diagnostic Features</Typography>
                      </AccordionSummary>
                      {["Color Blindness Detection", "Eyesight Screening System", "High-Resolution Integrated Display for real-time data visualization"]?.map((faq, i) => (
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

        {/* REGULATORY & CERTIFICATIONS */}
        <Container maxWidth="lg">
          {/* <Accordion sx={{ mb: 2, boxShadow: "none", border: "1px solid #eee", borderRadius: 2 }}>
            <AccordionSummary expandIcon={<ArrowDown />}>
              <SectionTitle>Regulatory & Certifications</SectionTitle>
            </AccordionSummary>

            <AccordionDetails>
              <TableContainer component={Paper} sx={{ boxShadow: "none", border: "1px solid #eee" }}>
                <Table><TableHead><TableRow><TableCell className="w-[686px]"><b>Certification</b></TableCell><TableCell><b>Status</b></TableCell></TableRow></TableHead>
                  <TableBody>{certifications?.map((row, i) => (<TableRow key={i}><TableCell>{row.certification}</TableCell><TableCell><Chip label={row.status} size="small" color={row.status.includes("Pending") ? "warning" : row.status === "Yes" ? "success" : "info"} /></TableCell></TableRow>))}</TableBody></Table>
              </TableContainer>
            </AccordionDetails>
          </Accordion> */}
        </Container>

        {/* USE CASES */}
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
          <SectionTitle> Use Cases</SectionTitle>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
            {useCases?.map((useCase, i) => (
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
              <Table size="small"><TableHead><TableRow><TableCell><b>Feature</b></TableCell><TableCell><b>Briefcase</b></TableCell><TableCell><b>Other Devices</b></TableCell></TableRow></TableHead>
                <TableBody>
                  {comparisonData?.map((row, i) => (<TableRow key={i}><TableCell>{row.feature}</TableCell><TableCell> {row.vitals === "Yes" || row.vitals === "Available" ? (
                    <CheckCircleIcon className="!text-[#4caf50]" sx={{ fontSize: 15, color: "#4caf50" }} />
                  ) : (
                    <Chip label={row.vitals} size="small" color="success" />
                  )}</TableCell><TableCell>{row.welch}</TableCell></TableRow>))}
                </TableBody></Table>
            </TableContainer>
          </Container>
        </Box>
      </CustomTabPanel>

      {/* 5. FAQ - TIGHT & WORKING */}
      <Box sx={{ py: { xs: 6, md: 0 }, bgcolor: '#fff' }}>

        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
          <SectionTitle> Frequently Asked Questions</SectionTitle>


          <Accordion sx={{ mb: 2, boxShadow: "none", border: "1px solid #eee", borderRadius: 2 }}>

            <AccordionSummary expandIcon={<ArrowDown />}>
              <Typography sx={{ fontWeight: 600 }}>Why Choose Briefcase™ ?</Typography>
            </AccordionSummary>
            {[
              "Efficient: One chair, multiple diagnostics—reducing patient wait time and resource load.",
              "Accurate: Built with clinical-grade components and tested to medical standards.",
              "Smart: AI-powered analytic for early health risk detection.",
              "Connected: Real-time sync to cloud platforms for continuous patient records.",
              "Scalable: Easily integrable into hospitals, diagnostics labs, corporate wellness programs, and telemedicine platforms.",
            ]?.map((faq, i) => (
              <AccordionDetails key={i}>
                <Typography sx={{ color: "#555" }}>{faq}</Typography>
              </AccordionDetails>
            ))}
          </Accordion>

          {faqs?.map((faq, i) => (
            <Accordion key={i} sx={{ mb: 2, boxShadow: "none", border: "1px solid #eee", borderRadius: 2 }}>
              <AccordionSummary expandIcon={<ArrowDown />}><Typography sx={{ fontWeight: 600 }}>{faq.q}</Typography></AccordionSummary>
              <AccordionDetails><Typography sx={{ color: "#555" }}>{faq.a}</Typography></AccordionDetails>
            </Accordion>

          ))}



        </Container>
      </Box>


    </Box>
  );
}