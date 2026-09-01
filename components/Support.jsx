// components/Support.jsx
'use client';

import { useState, useRef, useEffect } from 'react';
import {
    MessageCircle,
    Mail,
    Phone,
    Clock,
    Send,
    X,
    HelpCircle,
    FileText,
    AlertCircle,
    CheckCircle,
    Loader2,
    ChevronDown,
    ChevronUp,
    ExternalLink,
    Download,
    User,
    Building,
    Tag,
    Paperclip,
    Mic,
    Globe,
    Shield,
    Zap,
    Headphones,
    BookOpen,
    Video,
    ThumbsUp,
    ThumbsDown,
    Search
} from 'lucide-react';
import ContactSection from './ContactSection';
import ReactCountryFlag from 'react-country-flag';

// FAQ Data
const FAQS = [
    {
        id: 1,
        category: 'Getting Started',
        question: 'How do I get started with BluAI?',
        answer: 'Getting started with BluAI is easy! Simply sign up for an account, complete your profile, and schedule an onboarding call with our team. We\'ll guide you through the setup process and provide training for your staff.',
        helpful: 0
    },
    {
        id: 2,
        category: 'Getting Started',
        question: 'What are the system requirements?',
        answer: 'BluAI is a cloud-based platform that works on any modern web browser (Chrome, Firefox, Safari, Edge). No special hardware required. For optimal performance, we recommend a stable internet connection of at least 10 Mbps.',
        helpful: 0
    },
    {
        id: 3,
        category: 'Features',
        question: 'How does AI-powered result analysis work?',
        answer: 'Our AI algorithms analyze test results in real-time, flagging critical values, detecting anomalies, and suggesting possible diagnoses based on historical data and medical literature. This helps reduce errors and speeds up diagnosis.',
        helpful: 0
    },
    {
        id: 4,
        category: 'Features',
        question: 'Can I integrate BluAI with my existing equipment?',
        answer: 'Yes! BluAI supports integration with over 200+ medical devices and instruments through HL7, ASTM, and custom APIs. Our integration team will work with you to connect your existing equipment.',
        helpful: 0
    },
    {
        id: 5,
        category: 'Security',
        question: 'Is my data secure?',
        answer: 'Absolutely. BluAI is HIPAA and GDPR compliant. We use bank-level encryption (AES-256) for data at rest and TLS 1.3 for data in transit. Regular security audits ensure your data remains protected.',
        helpful: 0
    },
    {
        id: 6,
        category: 'Security',
        question: 'Who has access to my data?',
        answer: 'Only authorized users within your organization have access to your data. You control user permissions and access levels. BluAI employees never access your data without explicit permission.',
        helpful: 0
    },
    {
        id: 7,
        category: 'Billing',
        question: 'What pricing plans are available?',
        answer: 'We offer flexible pricing based on your organization\'s size and needs. Plans start at $199/month for small clinics. Contact our sales team for a custom quote tailored to your requirements.',
        helpful: 0
    },
    {
        id: 8,
        category: 'Billing',
        question: 'Is there a free trial?',
        answer: 'Yes! We offer a 14-day free trial with full access to all features. No credit card required. Start your trial today and experience the power of BluAI.',
        helpful: 0
    }
];

// Support Categories
const SUPPORT_CATEGORIES = [
    { id: 'technical', name: 'Technical Issue', icon: AlertCircle },
    { id: 'billing', name: 'Billing Question', icon: Tag },
    { id: 'feature', name: 'Feature Request', icon: Zap },
    { id: 'general', name: 'General Inquiry', icon: HelpCircle },
    { id: 'integration', name: 'Integration Help', icon: Globe }
];

// Resources
const RESOURCES = [
    { name: 'Documentation', icon: BookOpen, url: '#', description: 'Comprehensive guides and API reference' },
    { name: 'Video Tutorials', icon: Video, url: 'https://www.youtube.com/@BluAIPrivateLtd', description: 'Step-by-step video guides' },
    // { name: 'API Reference', icon: FileText, url: '/api-docs', description: 'Developer documentation' },
    // { name: 'Release Notes', icon: Zap, url: '/releases', description: 'What\'s new in each version' }
];

export default function Support() {
    const [activeTab, setActiveTab] = useState('faq'); // contact, faq, tickets
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        category: '',
        subject: '',
        message: '',
        priority: 'normal',
        attachment: null
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');
    const [expandedFaq, setExpandedFaq] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [feedback, setFeedback] = useState({});
    const [tickets, setTickets] = useState([]);
    const [showNewTicketForm, setShowNewTicketForm] = useState(false);
    const fileInputRef = useRef(null);

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // Handle file attachment
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file && file.size <= 5 * 1024 * 1024) { // 5MB limit
            setFormData(prev => ({ ...prev, attachment: file }));
        } else {
            setError('File size must be less than 5MB');
        }
    };




    useEffect(() => {
        const faqSchema = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": FAQS.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answer
                }
            }))
        };

        let script = document.querySelector('#faq-schema');
        if (script) {
            script.innerHTML = JSON.stringify(faqSchema);
        } else {
            script = document.createElement('script');
            script.id = 'faq-schema';
            script.type = 'application/ld+json';
            script.innerHTML = JSON.stringify(faqSchema);
            document.head.appendChild(script);
        }
    }, []);




    // Handle FAQ helpful feedback
    const handleFaqHelpful = (faqId, isHelpful) => {
        setFeedback(prev => ({ ...prev, [faqId]: isHelpful }));
        // In real app, send this to API
        console.log(`FAQ ${faqId} was ${isHelpful ? 'helpful' : 'not helpful'}`);
    };

    // Filter FAQs based on search and category
    const filteredFaqs = FAQS.filter(faq => {
        const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    // Get unique categories from FAQs
    const faqCategories = ['all', ...new Set(FAQS.map(f => f.category))];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
            {/* Hero Section */}
            <div className="relative bg-[#1b4dff] via-indigo-600 to-purple-600 text-white overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm mb-6">
                        <Headphones className="w-8 h-8 text-white" />
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                        How Can We Help You?
                    </h1>
                    <p className="text-xl text-white/90 max-w-2xl mx-auto">
                        Get the support you need to make the most of BluAI. Our team is here 24/7.
                    </p>

                    {/* Quick Contact Options */}
                    <div className="flex flex-wrap justify-center gap-4 mt-8">
                        <a href="mailto:info@bluai.ai" className="flex items-center gap-2 px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30 transition">
                            <Mail className="w-4 h-4" />
                            info@bluai.ai
                        </a>
                        <a href="tel:+0172-456-8962" className="flex items-center gap-2 px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30 transition">
                            <ReactCountryFlag svg countryCode="IN" style={{ width: 18 }} />
                            0172-456-8962
                        </a>
                        <a href="tel:+1-302-238-1512" className="flex items-center gap-2 px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30 transition">
                            <ReactCountryFlag svg countryCode="US" style={{ width: 18 }} />
                            +1 302-238-1512
                        </a>
                        <div className="flex items-center gap-2 px-4 py-2 bg-white/20 rounded-lg">
                            <Clock className="w-4 h-4" />
                            24/7 Support
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 dark:from-gray-900"></div>
            </div>

            {/* Tabs */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-wrap justify-center gap-4 mt-8">

                    <button
                        onClick={() => setActiveTab('faq')}
                        className={`px-6 py-3 text-sm font-medium rounded-t-lg transition ${activeTab === 'faq'
                            ? 'bg-white dark:bg-gray-800 text-blue-600 border-b-2 border-blue-600'
                            : 'text-gray-500 hover:text-gray-700 dark:text-gray-400'
                            }`}
                    >
                        FAQ
                    </button>
                    <button
                        onClick={() => setActiveTab('resources')}
                        className={`px-6 py-3 text-sm font-medium rounded-t-lg transition ${activeTab === 'resources'
                            ? 'bg-white dark:bg-gray-800 text-blue-600 border-b-2 border-blue-600'
                            : 'text-gray-500 hover:text-gray-700 dark:text-gray-400'
                            }`}
                    >
                        Resources
                    </button>
                </div>

                {/* Contact Support Tab */}
                {activeTab === 'contact' && (
                    <div className="mt-8 1grid grid-cols-2 lg:grid-cols-2 gap-8">
                        {/* Contact Form */}
                        <div className="lg:col-span-2">

                            {/* <ContactSection/> */}
                        </div>

                        {/* Contact Info Sidebar */}
                        <div className="space-y-6">
                            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                                    Other Ways to Reach Us
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                                            <Mail className="w-5 h-5 text-blue-600" />
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-900 dark:text-white">Email Support</p>
                                            <a href="info@bluai.ai" className="text-sm text-blue-600 hover:underline">
                                                info@bluai.ai
                                            </a>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                                            <Phone className="w-5 h-5 text-green-600" />
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-900 dark:text-white">Phone Support</p>
                                            <a href="tel:+0172-456-8962" className="text-sm text-blue-600 hover:underline">
                                                0172-456-8962
                                            </a>
                                            <a href="tel:+1-302-238-1512" className="text-sm text-blue-600 hover:underline">
                                                +1 302-238-1512
                                            </a>
                                            <p className="text-xs text-gray-500">Available 24/7</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                                            <MessageCircle className="w-5 h-5 text-purple-600" />
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-900 dark:text-white">Live Chat</p>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">Click the chat icon in bottom right</p>
                                            <p className="text-xs text-gray-500">Available 9 AM - 6 PM EST</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-6">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                    Average Response Time
                                </h3>
                                <div className="flex items-baseline gap-2 mb-4">
                                    <span className="text-3xl font-bold text-blue-600">&lt; 4</span>
                                    <span className="text-gray-600 dark:text-gray-400">hours</span>
                                </div>
                                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                                    <p>✓ Emergency issues: 1 hour</p>
                                    <p>✓ High priority: 2 hours</p>
                                    <p>✓ Normal: 4 hours</p>
                                    <p>✓ Low: 24 hours</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* FAQ Tab */}
                {activeTab === 'faq' && (
                    <div className="mt-8">
                        {/* Search Bar */}
                        <div className="mb-6">
                            <div className="relative max-w-md mx-auto">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="Search frequently asked questions..."
                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700"
                                />
                            </div>
                        </div>

                        {/* Category Filters */}
                        <div className="flex flex-wrap gap-2 mb-6 justify-center">
                            {faqCategories.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition ${selectedCategory === cat
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200'
                                        }`}
                                >
                                    {cat === 'all' ? 'All' : cat}
                                </button>
                            ))}
                        </div>

                        {/* FAQ List */}
                        <div className="max-w-3xl mx-auto space-y-4">
                            {filteredFaqs.map((faq) => (
                                <div
                                    key={faq.id}
                                    className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden"
                                >
                                    <button
                                        onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                                        className="w-full px-6 py-4 flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700/50 transition"
                                    >
                                        <span className="font-medium text-gray-900 dark:text-white text-left">
                                            {faq.question}
                                        </span>
                                        {expandedFaq === faq.id ? (
                                            <ChevronUp className="w-5 h-5 text-gray-500" />
                                        ) : (
                                            <ChevronDown className="w-5 h-5 text-gray-500" />
                                        )}
                                    </button>

                                    {expandedFaq === faq.id && (
                                        <div className="px-6 pb-4">
                                            <p className="text-gray-600 dark:text-gray-400 mb-4">
                                                {faq.answer}
                                            </p>
                                            <div className="flex items-center gap-4 pt-3 border-t border-gray-100 dark:border-gray-700">
                                                <span className="text-xs text-gray-500">Was this helpful?</span>
                                                <button
                                                    onClick={() => handleFaqHelpful(faq.id, true)}
                                                    className={`p-1 rounded hover:bg-green-100 transition ${feedback[faq.id] === true ? 'text-green-600' : 'text-gray-400'
                                                        }`}
                                                >
                                                    <ThumbsUp className="w-4 h-4" />
                                                </button>
                                                <button
                                                    onClick={() => handleFaqHelpful(faq.id, false)}
                                                    className={`p-1 rounded hover:bg-red-100 transition ${feedback[faq.id] === false ? 'text-red-600' : 'text-gray-400'
                                                        }`}
                                                >
                                                    <ThumbsDown className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}

                            {filteredFaqs.length === 0 && (
                                <div className="text-center py-12">
                                    <HelpCircle className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                                    <p className="text-gray-500">No FAQs found matching your search.</p>
                                    <button
                                        onClick={() => {
                                            setSearchQuery('');
                                            setSelectedCategory('all');
                                        }}
                                        className="mt-2 text-blue-600 hover:underline"
                                    >
                                        Clear filters
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* Resources Tab */}
                {activeTab === 'resources' && (
                    <div className="mt-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {RESOURCES.map((resource) => (
                                <a
                                    key={resource.name}
                                    href={resource.url}
                                    target="_blank"
                                    className="group bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-all hover:-translate-y-1"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center mb-4 group-hover:scale-110 transition">
                                        <resource.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                        {resource.name}
                                    </h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                                        {resource.description}
                                    </p>
                                    <span className="inline-flex items-center gap-1 text-sm text-blue-600 group-hover:gap-2 transition">
                                        Learn more <ExternalLink className="w-3 h-3" />
                                    </span>
                                </a>
                            ))}
                        </div>

                        {/* Additional Resources */}
                        <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8 text-center">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                Need More Help?
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-6">
                                Schedule a one-on-one session with our support team
                            </p>
                            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition">
                                Schedule a Call
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Floating Chat Button */}
            {/* <div className="fixed bottom-6 right-6">
        <button className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg flex items-center justify-center transition-all hover:scale-110">
          <MessageCircle className="w-6 h-6" />
        </button>
      </div> */}
        </div>
    );
}