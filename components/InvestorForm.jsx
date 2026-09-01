// components/InvestorForm.jsx
'use client';

import { useState } from 'react';
import { Send, Loader2, CheckCircle, AlertCircle, Users, Mail, Phone, Building, MessageCircle, Sparkles } from 'lucide-react';
import axios from 'axios';

export default function InvestorForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        organization: '',
        message: '',
        source: '',
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');
    const [submittedName, setSubmittedName] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation
        if (!formData.name || !formData.email) {
            setError('Please fill in all required fields');
            setTimeout(() => setError(''), 3000);
            return;
        }

        if (!formData.email.includes('@')) {
            setError('Please enter a valid email address');
            setTimeout(() => setError(''), 3000);
            return;
        }

        setLoading(true);
        setError('');

        try {
            const data = await axios.post('https://vitalchairapi.bluai.ai/api/vitalchair-admin/investor', {
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                organization: formData.organization,
                message: formData.message,
                source: formData.source
            });
            
            if (data?.data?.success) {
                setSubmittedName(formData.name);
                setSuccess(true);
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    organization: '',
                    message: '',
                    source: '',
                });
                // Don't auto-hide - wait for user to click OK
            } else {
                throw new Error(data.error || 'Failed to submit');
            }
        } catch (err) {
            console.error('Error:', err);
            setError('Failed to submit. Please try again or email us directly at info@bluai.ai');
            setTimeout(() => setError(''), 5000);
        } finally {
            setLoading(false);
        }
    };

    const closeSuccessModal = () => {
        setSuccess(false);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8">
 
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        Join us in revolutionizing healthcare with AI-powered diagnostics
                    </p>

                </div>

                {/* Success Message - Full Screen Modal (Doesn't auto-close) */}
                {success && (
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm animate-in fade-in duration-300"
                        onClick={closeSuccessModal}
                    >
                        <div
                            className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-md mx-4 p-8 text-center animate-in zoom-in-95 duration-300"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Animated Checkmark */}
                            <div className="relative inline-flex items-center justify-center mb-6">
                                <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
                                <div className="relative w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                                    <CheckCircle className="w-12 h-12 text-white animate-bounce" />
                                </div>
                            </div>

                            {/* Greeting Text */}
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                Thank You, {submittedName.split(' ')[0]}! 🎉
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                Your interest in BluAI means the world to us.
                            </p>

                            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-4 mb-6">
                                <div className="flex items-center justify-center gap-2 mb-2">
                                    <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                                    <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">What's Next?</span>
                                    <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                                </div>
                                <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                                    <p>✅ Our team will review your information</p>
                                    <p>📅 You'll hear from us within <strong>24-48 hours</strong></p>
                                    {/* <p>📄 You'll receive our investor deck and financials</p> */}
                                </div>
                            </div>

                            <button
                                onClick={closeSuccessModal}
                                className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl font-semibold transition-all transform hover:scale-[1.02] shadow-lg"
                            >
                                Got it, thanks!
                            </button>

                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
                                A confirmation email has been sent to your inbox
                            </p>
                        </div>
                    </div>
                )}

                {/* Error Message */}
                {error && (
                    <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl animate-in slide-in-from-top-2">
                        <div className="flex items-center gap-3">
                            <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
                            <p className="text-sm text-red-800 dark:text-red-300">{error}</p>
                        </div>
                    </div>
                )}

                {/* Form Card */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
                    <form onSubmit={handleSubmit} className="p-6 space-y-6">
                        {/* Section: Personal Information */}
                        <div>
                            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                                <Users className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                Personal Information
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="John Doe"
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white transition"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                        Email Address *
                                    </label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="john@example.com"
                                            className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white transition"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                        Phone Number
                                    </label>
                                    <div className="relative">
                                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="+1 (555) 000-0000"
                                            className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white transition"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                        How did you hear about us?
                                    </label>
                                    <select
                                        name="source"
                                        value={formData.source}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white transition"
                                    >
                                        <option value="">Select source</option>
                                        <option value="LinkedIn">LinkedIn</option>
                                        <option value="Twitter/X">Twitter/X</option>
                                        <option value="Referral">Referral</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Section: Organization */}
                        <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                                <Building className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                Organization Details
                            </h2>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Organization / Firm Name
                                </label>
                                <input
                                    type="text"
                                    name="organization"
                                    value={formData.organization}
                                    onChange={handleChange}
                                    placeholder="Acme Ventures"
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white transition"
                                />
                            </div>
                        </div>

                        {/* Section: Message */}
                        <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                                <MessageCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                Message / Questions
                            </h2>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="4"
                                placeholder="Tell us about your interest in BluAI, any questions you have, or how you'd like to get involved..."
                                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white transition resize-none"
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-xl transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg"
                        >
                            {loading ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    Submitting...
                                </>
                            ) : (
                                <>
                                    <Send className="w-5 h-5" />
                                    Submit Interest
                                </>
                            )}
                        </button>

                        <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-4">
                            By submitting this form, you agree to our privacy policy. We'll never share your information.
                            <br />
                            Questions? Email us directly at <a href="mailto:info@bluai.ai" className="text-blue-600 dark:text-blue-400 hover:underline">info@bluai.ai</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}