
'use client';

import { useState, useRef } from "react";
import { Box, Container, Typography, Stack, Chip, Paper, Button, Divider } from "@mui/material";
import { ArrowRight, Shield, Activity, Cloud, HeartPulse, Scale, Star, PlayCircle, CheckCircle2, Radio, BadgeCheck, Fingerprint, Cpu, Rotate3d, ChevronLeft, ChevronRight, Plus, Minus } from "lucide-react";
import VitalsBriefcase3D from "../../../components/VitalsBriefcase3D";
import RequestDemoModal from "../../../components/popups/RequestDemoModal"

// --- Premium Reusable Components ---
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
    color: light ? "#cbd5e1" : "#6b7280", fontSize: { xs: 15, md: 18 }, mb: { xs: 6, md: 8 },
    textAlign: align, maxWidth: 650, mx: "auto", lineHeight: 1.6, fontWeight: 400
  }}>
    {children}
  </Typography>
);

// --- Working FAQ Accordion ---
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
    { feature: "Form Factor", briefcase: "Standalone Kiosk", competitor1: "Wall-mounted", competitor2: "Portable" },
    { feature: "Parameters", briefcase: "30+", competitor1: "10", competitor2: "15" },
    { feature: "Contactless Vitals", briefcase: "Yes", competitor1: "No", competitor2: "No" },
    { feature: "AI Insights", briefcase: "Yes", competitor1: "No", competitor2: "No" },
    { feature: "ABHA Integration", briefcase: "Yes", competitor1: "No", competitor2: "No" },
  ];

  const faqs = [
    { q: "How long does a screening take?", a: "A full screening takes 5–7 minutes." },
    { q: "Does it require staff to operate?", a: "Designed for self-service with voice guidance." },
    { q: "Can it work offline?", a: "Yes, with local storage and auto-sync." },
    { q: "Which EMR systems are supported?", a: "Epic, Cerner, Bahmni, and more via FHIR." },
    { q: "Is it GeM listed?", a: "Coming soon. Contact us for procurement." },
  ];

  return (
    <Box sx={{ width: "100%", backgroundColor: "#fff" }}>

      {/* 1. HERO - PERFECT & UNTOUCHED */}
      <Container maxWidth="lg" sx={{ textAlign: "center", }}>
        <ProductGallery />
      </Container>



      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>


        {/* RIGHT: Minimal Text & CTA */}
        <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'center' }, width: '100%', order: { xs: 2, md: 2 } }}>


          <Typography sx={{ fontWeight: 900, fontSize: { xs: 38, sm: 48, md: 34 }, color: '#0a1a3c', letterSpacing: '-0.04em', lineHeight: 0.95, mb: 0 }}>
            Vitals briefcase™  by BluAI
          </Typography>

          <Typography sx={{ fontWeight: 900, fontSize: { xs: 20, sm: 24, md: 16 }, background: 'linear-gradient(90deg, #1b4dff, #1852ad)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', mb: 3 }}>
            Manage. My Health. My Way.™
          </Typography>

          <Typography sx={{ color: '#4b5563', fontSize: { xs: 15, md: 18 }, mb: 5, lineHeight: 1.7, mx: { xs: 'auto', md: 0 } }}>
            <b>AI-Powered | Contactless | Cloud-Connected.</b> Introducing Vitals briefcase™, a next-generation health screening kiosk designed for rapid, contactless vitals monitoring in high-traffic settings.
          </Typography>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent={{ xs: 'center', md: 'flex' }} sx={{ mb: 5 }}>
            <Button variant="contained" endIcon={<ArrowRight />}
              onClick={() => setOpenDemo(true)}
              sx={{
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
          <RequestDemoModal open={openDemo} onClose={() => setOpenDemo(false)} />

          {/* <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent={{ xs: 'center', md: 'flex-start' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                  <Shield size={18} color="#10b981" /> <Typography sx={{ fontSize: 14, fontWeight: 600, color: '#374151' }}>HIPAA Secured</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                  <Cloud size={18} color="#10b981" /> <Typography sx={{ fontSize: 14, fontWeight: 600, color: '#374151' }}>Cloud Connected</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                  <Fingerprint size={18} color="#10b981" /> <Typography sx={{ fontSize: 14, fontWeight: 600, color: '#374151' }}>Multi-Login</Typography>
                </Box>
              </Stack> */}
        </Box>
      </Container>

      {/* 2. DARK FEATURES (COMPACT & TIGHT) */}
      <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: '#0a1a3c', color: '#fff', position: 'relative', overflow: 'hidden' }}>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <SectionTitle light>Core Measurement Capabilities</SectionTitle>
          <SubHeading light>Comprehensive health data from a single, streamlined device.</SubHeading>

          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: { xs: 6, md: 8 }, alignItems: 'center' }}>
            {/* Left: Capabilities */}
            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2, width: '100%' }}>
              {[
                { icon: <HeartPulse size={24} />, title: "Smart Connectivity & Integration", desc: "Multi-Login Support: IC Card, QR Code Scanning, Fingerprint Recognition, ABHA ID. Cloud-Ready: Fully compatible with BluAI Database and BluHealth™ Portal. Developer-Friendly: Complete API suite available for seamless third-party integration." },
                { icon: <Activity size={24} />, title: "Vital Signs & Basic Metrics", desc: "Blood Pressure, Temperature, Respiration, Heart Rate, Oxygen Level (SpO2). Age, Weight, Height, BMI." },
                { icon: <Scale size={24} />, title: "Physical Composition", desc: "Body Fat (%, Subcutaneous %, Visceral Fat 1-10). Muscle/Mass Metrics (Skeletal Muscle, Lean Mass, Bone Mass, Fat Free Weight, Protein). BMR, Health Score." },
                { icon: <Radio size={24} />, title: "Monitoring & Detection", desc: "Body Posture, Emotional State Assessment. Facial monitoring & treatment effectiveness tracking." },
                { icon: <Star size={24} />, title: "Advanced Diagnostic Features", desc: "Color Blindness Detection. Eyesight Screening System. High-Resolution Integrated Display for real-time data visualization." },
              ].map((item, i) => (
                <Box key={i} className="hover-lift" sx={{
                  display: 'flex', alignItems: 'flex-start', gap: 2, p: 2.5, borderRadius: 3,
                  border: '1px solid rgba(255,255,255,0.1)', bgcolor: 'rgba(255,255,255,0.05)', width: '100%',
                  '&:hover': { bgcolor: 'rgba(255,255,255,0.1)', borderColor: '#4756d4' }
                }}>
                  <Box sx={{ p: 1.5, bgcolor: 'rgba(71,86,212,0.2)', color: '#fff', borderRadius: 2, flexShrink: 0 }}>{item.icon}</Box>
                  <Box>
                    <Typography sx={{ fontWeight: 800, fontSize: 16, mb: 0.5, color: '#fff' }}>{item.title}</Typography>
                    <Typography sx={{ color: '#94a3b8', fontSize: 13, lineHeight: 1.6 }}>{item.desc}</Typography>
                  </Box>
                </Box>
              ))}
            </Box>

            {/* Right: Image */}
            <Box sx={{ flex: 1, position: 'relative', width: '100%' }}>
              <Box sx={{ borderRadius: 4, overflow: 'hidden', boxShadow: '0 40px 80px rgba(0,0,0,0.5)', border: '8px solid rgba(255,255,255,0.1)' }}>
                <img src="/briefcase-use.png" alt="Vitals Briefcase" style={{ width: '100%', height: 'auto', display: 'block' }} />
              </Box>

            </Box>
          </Box>
        </Container>
      </Box>

      {/* 3. COMPARISON & TRUST (PREMIUM CARDS) */}
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
            mb: 12
          }}>
            {/* Competitor A */}
            <Paper elevation={0} sx={{ p: 4, borderRadius: 4, bgcolor: '#fff', border: '1px solid #e5e7eb', opacity: 0.6 }}>
              <Typography sx={{ fontWeight: 800, fontSize: 16, color: '#9ca3af', mb: 3 }}>Competitor A</Typography>
              <Stack spacing={2.5}>
                {comparisonData.map((row, i) => (
                  <Box key={i} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography sx={{ fontSize: 14, fontWeight: 600, color: '#374151' }}>{row.feature}</Typography>
                    <Typography sx={{ fontSize: 14, color: '#9ca3af' }}>{row.competitor1}</Typography>
                  </Box>
                ))}
              </Stack>
            </Paper>

            {/* Competitor B */}
            <Paper elevation={0} sx={{ p: 4, borderRadius: 4, bgcolor: '#fff', border: '1px solid #e5e7eb', opacity: 0.6 }}>
              <Typography sx={{ fontWeight: 800, fontSize: 16, color: '#9ca3af', mb: 3 }}>Competitor B</Typography>
              <Stack spacing={2.5}>
                {comparisonData.map((row, i) => (
                  <Box key={i} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography sx={{ fontSize: 14, fontWeight: 600, color: '#374151' }}>{row.feature}</Typography>
                    <Typography sx={{ fontSize: 14, color: '#9ca3af' }}>{row.competitor2}</Typography>
                  </Box>
                ))}
              </Stack>
            </Paper>

            {/* Vitals briefcase (Highlighted) */}
            <Paper elevation={0} sx={{
              p: 4, borderRadius: 4, bgcolor: '#0a1a3c', color: '#fff',
              boxShadow: '0 25px 50px -12px rgba(10,26,60,0.5)',
              border: '1px solid #4756d4', position: 'relative'
            }}>
              <Box sx={{ position: 'absolute', top: 16, right: 16, bgcolor: '#4756d4', px: 2, py: 0.5, borderRadius: 3, fontSize: 11, fontWeight: 900, letterSpacing: 1 }}>BEST</Box>
              <Typography sx={{ fontWeight: 900, fontSize: 18, color: '#fff', mb: 3 }}>Vitals briefcase™</Typography>
              <Stack spacing={2.5}>
                {comparisonData.map((row, i) => (
                  <Box key={i} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography sx={{ fontSize: 14, fontWeight: 500, color: '#cbd5e1' }}>{row.feature}</Typography>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <Typography sx={{ fontSize: 14, fontWeight: 800, color: '#4ade80' }}>{row.briefcase}</Typography>
                      <CheckCircle2 size={18} color="#4ade80" />
                    </Stack>
                  </Box>
                ))}
              </Stack>
            </Paper>
          </Box>

          {/* Trust & Compliance below */}
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

      {/* 4. VIDEO CTA (CINEMATIC) */}
      <Box sx={{ position: 'relative', py: { xs: 8, md: 10 }, display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'url(/briefcase-use.png) center/cover fixed', minHeight: { xs: 300, md: 400 } }}>
        <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, bgcolor: 'rgba(10,26,60,0.85)', backdropFilter: 'blur(5px)' }} />
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2, textAlign: 'center', px: { xs: 3, md: 4 } }}>
          <Button sx={{
            width: { xs: 70, md: 100 }, height: { xs: 70, md: 100 }, borderRadius: '50%', bgcolor: '#fff', color: '#0a1a3c',
            display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 4,
            animation: 'pulseGlow 2s infinite', border: '8px solid rgba(255,255,255,0.2)'
          }}>
            <PlayCircle size={{ xs: 36, md: 50 }} />
          </Button>
          <Typography sx={{ fontWeight: 900, fontSize: { xs: 28, md: 48 }, color: '#fff', mb: 3 }}>See Vitals briefcase™ in Action</Typography>
          <Typography sx={{ color: '#cbd5e1', fontSize: { xs: 15, md: 18 }, mb: 5, maxWidth: 550, mx: 'auto' }}>
            Watch our AI-powered health assessment platform transform diagnostics in under 60 seconds.
          </Typography>
          <Button variant="contained" sx={{ bgcolor: '#fff', color: '#0a1a3c', fontWeight: 900, px: { xs: 5, md: 8 }, py: 2, borderRadius: 3, fontSize: { xs: 15, md: 16 } }}>Watch Full Demo</Button>
        </Container>
      </Box>

      {/* 5. FAQ (WORKING) */}
      <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: '#fff' }}>
        <Container maxWidth="md">
          <SectionTitle>Frequently Asked Questions</SectionTitle>

          <Paper sx={{ p: { xs: 3, md: 5 }, borderRadius: 4, bgcolor: '#f8fafc', mb: 5, border: '1px solid #e5e7eb' }}>
            <Typography sx={{ fontWeight: 800, fontSize: 20, color: '#111827', mb: 2 }}>Why Choose Vitals briefcase™?</Typography>
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