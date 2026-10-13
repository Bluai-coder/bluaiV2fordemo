// components/Support.jsx
'use client';

import { useState } from 'react';
import {
    Box, Container, Typography, Button, IconButton,
    Tabs, Tab, TextField, InputAdornment, Accordion,
    AccordionSummary, AccordionDetails, Chip, Stack,
    Paper, Grid
} from '@mui/material';
import {
    Mail, Clock, HelpCircle,
    ExternalLink, Headphones,
    BookOpen, Video, ThumbsUp, ThumbsDown, Search
} from 'lucide-react';
import ReactCountryFlag from 'react-country-flag';

// ============================================================
// Screenshot-style thin arrow icon
// ============================================================
const ThinArrowDown = () => (
    <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#4b5563"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M12 5v14M19 12l-7 7-7-7" />
    </svg>
);

// ============================================================
// FAQ DATA
// ============================================================
const FAQS = [
    {
        id: 1,
        category: 'Getting Started',
        q: 'How do I get started with BluAI?',
        a: 'Getting started with BluAI is easy! Simply sign up for an account, complete your profile, and schedule an onboarding call with our team. We\'ll guide you through the setup process and provide training for your staff.',
    },
    {
        id: 2,
        category: 'Getting Started',
        q: 'What are the system requirements?',
        a: 'BluAI is a cloud-based platform that works on any modern web browser (Chrome, Firefox, Safari, Edge). No special hardware required. For optimal performance, we recommend a stable internet connection of at least 10 Mbps.',
    },
    {
        id: 3,
        category: 'Features',
        q: 'How does AI-powered result analysis work?',
        a: 'Our AI algorithms analyze test results in real-time, flagging critical values, detecting anomalies, and suggesting possible diagnoses based on historical data and medical literature. This helps reduce errors and speeds up diagnosis.',
    },
    {
        id: 4,
        category: 'Features',
        q: 'Can I integrate BluAI with my existing equipment?',
        a: 'Yes! BluAI supports integration with over 200+ medical devices and instruments through HL7, ASTM, and custom APIs. Our integration team will work with you to connect your existing equipment.',
    },
    {
        id: 5,
        category: 'Security',
        q: 'Is my data secure?',
        a: 'Absolutely. BluAI is HIPAA and GDPR compliant. We use bank-level encryption (AES-256) for data at rest and TLS 1.3 for data in transit. Regular security audits ensure your data remains protected.',
    },
    {
        id: 6,
        category: 'Security',
        q: 'Who has access to my data?',
        a: 'Only authorized users within your organization have access to your data. You control user permissions and access levels. BluAI employees never access your data without explicit permission.',
    },
    {
        id: 7,
        category: 'Billing',
        q: 'What pricing plans are available?',
        a: 'We offer flexible pricing based on your organization\'s size and needs. Plans start at $199/month for small clinics. Contact our sales team for a custom quote tailored to your requirements.',
    },
    {
        id: 8,
        category: 'Billing',
        q: 'Is there a free trial?',
        a: 'Yes! We offer a 14-day free trial with full access to all features. No credit card required. Start your trial today and experience the power of BluAI.',
    }
];

// ============================================================
// FAQPage SCHEMA — auto-generated from FAQS
// ============================================================
const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: {
            "@type": "Answer",
            text: faq.a
        }
    }))
};

const RESOURCES = [
    { name: 'Documentation', icon: BookOpen, url: '#', description: 'Comprehensive guides and API reference' },
    { name: 'Video Tutorials', icon: Video, url: 'https://www.youtube.com/@BluAIPrivateLtd', description: 'Step-by-step video guides' },
];

export default function Support() {
    const [activeTab, setActiveTab] = useState(0);
    const [expandedFaq, setExpandedFaq] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [feedback, setFeedback] = useState({});

    const handleFaqHelpful = (faqId, isHelpful) => {
        setFeedback(prev => ({ ...prev, [faqId]: isHelpful }));
    };

    const filteredFaqs = FAQS.filter(faq => {
        const matchesSearch =
            faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
            faq.a.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const faqCategories = ['all', ...new Set(FAQS.map(f => f.category))];

    return (
        <Box sx={{ minHeight: '100vh', bgcolor: '#f9fafb' }}>

            {/* FAQPage schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            {/* ============ HERO ============ */}
            <Box
                sx={{
                    position: 'relative',
                    background: 'linear-gradient(135deg, #1b4dff 0%, #4f46e5 50%, #9333ea 100%)',
                    color: 'white',
                    overflow: 'hidden',
                    py: 10,
                    textAlign: 'center',
                }}
            >
                <Box sx={{ position: 'absolute', inset: 0, bgcolor: 'rgba(0,0,0,0.2)' }} />
                <Container maxWidth="xl" sx={{ position: 'relative' }}>
                    <Box
                        sx={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 64,
                            height: 64,
                            borderRadius: '50%',
                            bgcolor: 'rgba(255,255,255,0.2)',
                            backdropFilter: 'blur(8px)',
                            mb: 3,
                        }}
                    >
                        <Headphones size={32} />
                    </Box>

                    <Typography component="h1" variant="h2" sx={{ fontWeight: 700, mb: 2 }}>
                        How Can We Help You?
                    </Typography>

                    <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.9)', maxWidth: 640, mx: 'auto', fontWeight: 400 }}>
                        Get the support you need to make the most of BluAI. Our team is here 24/7.
                    </Typography>

                    <Stack direction="row" flexWrap="wrap" justifyContent="center" spacing={2} sx={{ mt: 4 }}>
                        <Button
                            href="mailto:info@bluai.ai"
                            startIcon={<Mail size={16} />}
                            sx={{ bgcolor: 'rgba(255,255,255,0.2)', color: 'white', textTransform: 'none', px: 2, py: 1, '&:hover': { bgcolor: 'rgba(255,255,255,0.3)' } }}
                        >
                            info@bluai.ai
                        </Button>
                        <Button
                            href="tel:+0172-456-8962"
                            startIcon={<ReactCountryFlag svg countryCode="IN" style={{ width: 18 }} />}
                            sx={{ bgcolor: 'rgba(255,255,255,0.2)', color: 'white', textTransform: 'none', px: 2, py: 1, '&:hover': { bgcolor: 'rgba(255,255,255,0.3)' } }}
                        >
                            0172-456-8962
                        </Button>
                        <Button
                            href="tel:+1-302-238-1512"
                            startIcon={<ReactCountryFlag svg countryCode="US" style={{ width: 18 }} />}
                            sx={{ bgcolor: 'rgba(255,255,255,0.2)', color: 'white', textTransform: 'none', px: 2, py: 1, '&:hover': { bgcolor: 'rgba(255,255,255,0.3)' } }}
                        >
                            +1 302-238-1512
                        </Button>
                        <Button
                            startIcon={<Clock size={16} />}
                            sx={{ bgcolor: 'rgba(255,255,255,0.2)', color: 'white', textTransform: 'none', px: 2, py: 1, '&:hover': { bgcolor: 'rgba(255,255,255,0.3)' } }}
                        >
                            24/7 Support
                        </Button>
                    </Stack>
                </Container>
            </Box>

            {/* ============ TABS + CONTENT ============ */}
            <Container maxWidth="xl" sx={{ py: 4 }}>

                <Tabs value={activeTab} onChange={(_, v) => setActiveTab(v)} centered sx={{ mb: 3 }}>
                    <Tab label="FAQ" />
                    <Tab label="Resources" />
                </Tabs>

                {/* ============ FAQ TAB ============ */}
                {activeTab === 0 && (
                    <Box>
                        {/* Search */}
                        <Box sx={{ maxWidth: 480, mx: 'auto', mb: 3 }}>
                            <TextField
                                fullWidth
                                placeholder="Search frequently asked questions..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                size="small"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Search size={16} color="#9ca3af" />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Box>

                        {/* Category Chips */}
                        <Stack direction="row" flexWrap="wrap" justifyContent="center" spacing={1} sx={{ mb: 3 }}>
                            {faqCategories.map(cat => (
                                <Chip
                                    key={cat}
                                    label={cat === 'all' ? 'All' : cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    color={selectedCategory === cat ? 'primary' : 'default'}
                                    variant={selectedCategory === cat ? 'filled' : 'outlined'}
                                    sx={{ textTransform: 'capitalize' }}
                                />
                            ))}
                        </Stack>

                        {/* FAQ Accordion List — screenshot style */}
                        <Box sx={{ maxWidth: 1000, mx: 'auto' }}>
                            {filteredFaqs.map((faq, i) => (
                                <Accordion
                                    key={i}
                                    elevation={0}
                                    disableGutters
                                    sx={{
                                        mb: 2,
                                        boxShadow: "none",
                                        border: "1px solid #eee",
                                        borderRadius: 2,
                                        "&:before": { display: "none" },
                                    }}
                                >
                                    <AccordionSummary expandIcon={<ThinArrowDown />}>
                                        <Typography component="h3" sx={{ fontWeight: 600 }}>
                                            {faq.q}
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography sx={{ color: "#555", lineHeight: 1.7 }}>
                                            {faq.a}
                                        </Typography>

                                        {/* Helpful buttons */}
                                        <Stack
                                            direction="row"
                                            alignItems="center"
                                            spacing={2}
                                            sx={{ pt: 2, mt: 1.5, borderTop: '1px solid #f3f4f6' }}
                                        >
                                            <Typography sx={{ fontSize: '0.75rem', color: '#6b7280' }}>
                                                Was this helpful?
                                            </Typography>
                                            <IconButton
                                                size="small"
                                                onClick={() => handleFaqHelpful(faq.id, true)}
                                                sx={{ color: feedback[faq.id] === true ? '#16a34a' : '#9ca3af' }}
                                            >
                                                <ThumbsUp size={16} />
                                            </IconButton>
                                            <IconButton
                                                size="small"
                                                onClick={() => handleFaqHelpful(faq.id, false)}
                                                sx={{ color: feedback[faq.id] === false ? '#dc2626' : '#9ca3af' }}
                                            >
                                                <ThumbsDown size={16} />
                                            </IconButton>
                                        </Stack>
                                    </AccordionDetails>
                                </Accordion>
                            ))}

                            {filteredFaqs.length === 0 && (
                                <Box sx={{ textAlign: 'center', py: 6 }}>
                                    <HelpCircle size={48} color="#9ca3af" style={{ margin: '0 auto 12px' }} />
                                    <Typography sx={{ color: '#6b7280', mb: 1 }}>
                                        No FAQs found matching your search.
                                    </Typography>
                                    <Button
                                        onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
                                        sx={{ textTransform: 'none', color: '#2563eb' }}
                                    >
                                        Clear filters
                                    </Button>
                                </Box>
                            )}
                        </Box>
                    </Box>
                )}

                {/* ============ RESOURCES TAB ============ */}
                {activeTab === 1 && (
                    <Box>
                        <Grid container spacing={3}>
                            {RESOURCES.map((resource) => {
                                const Icon = resource.icon;
                                return (
                                    <Grid item xs={12} sm={6} md={3} key={resource.name}>
                                        <Paper
                                            component="a"
                                            href={resource.url}
                                            target="_blank"
                                            elevation={0}
                                            sx={{
                                                display: 'block',
                                                p: 3,
                                                border: '1px solid #e5e7eb',
                                                borderRadius: 3,
                                                textDecoration: 'none',
                                                transition: 'all 0.3s',
                                                '&:hover': { boxShadow: 4, transform: 'translateY(-4px)' },
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    width: 48,
                                                    height: 48,
                                                    borderRadius: 2,
                                                    background: 'linear-gradient(135deg, #2563eb, #4f46e5)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    mb: 2,
                                                    color: 'white',
                                                }}
                                            >
                                                <Icon size={24} />
                                            </Box>
                                            <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                                                {resource.name}
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: '#6b7280', mb: 2 }}>
                                                {resource.description}
                                            </Typography>
                                            <Stack direction="row" alignItems="center" spacing={0.5} sx={{ color: '#2563eb', fontSize: '0.875rem' }}>
                                                <span>Learn more</span>
                                                <ExternalLink size={12} />
                                            </Stack>
                                        </Paper>
                                    </Grid>
                                );
                            })}
                        </Grid>


                    </Box>
                )}
            </Container>
        </Box>
    );
}