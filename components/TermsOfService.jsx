'use client';

import React, { useEffect } from 'react';
import { FileText, Mail } from 'lucide-react';

export default function TermsOfService() {
  useEffect(() => {
    document.title = 'Terms of Service - BluAI';
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Read the terms and conditions for using BluAI services.');
    }
    
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', 'https://bluai.ai/terms-of-service');
    }
  }, []);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Terms of Service - BluAI",
            "url": "https://bluai.ai/terms-of-service",
            "publisher": {
              "@type": "Organization",
              "name": "BluAI",
              "url": "https://bluai.ai"
            }
          })
        }}
      />

      <div className="min-h-screen bg-white dark:bg-gray-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-2">
              <FileText className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                Terms of Service
              </h1>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Effective Date: 2026-08-04
            </p>
          </div>

          {/* Content - EXACT from file */}
          <div className="space-y-6 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            <p>
              These Terms of Service (“Terms”) govern your use of the BluApp mobile application (“App”). By downloading, installing, or using the App, you agree to be bound by these Terms.
            </p>

            {/* Section 1 */}
            <div>
              <h2 className="font-semibold text-gray-900 dark:text-white mb-2">1. Acceptance of Terms</h2>
              <p>If you do not agree to these Terms, you must not use the App.</p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="font-semibold text-gray-900 dark:text-white mb-2">2. Description of Service</h2>
              <p>The App provides features for patient registration, document scanning, vitals tracking, face analysis, medical record viewing, and related healthcare-support workflows.</p>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="font-semibold text-gray-900 dark:text-white mb-2">3. Your Responsibilities</h2>
              <p className="mb-2">You agree that:</p>
              <ul className="space-y-1.5 pl-5">
                <li>• You will use the App only for lawful purposes.</li>
                <li>• You will provide accurate and current information when requested.</li>
                <li>• You will not upload, store, or share unlawful, misleading, abusive, or harmful content.</li>
                <li>• You are responsible for maintaining the security of your device and account credentials.</li>
                <li>• You will not attempt to reverse engineer, interfere with, or misuse the App.</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="font-semibold text-gray-900 dark:text-white mb-2">4. Medical and Health Information</h2>
              <p>The App may process personal and health-related information entered by you or generated through features such as scanning, camera capture, and analysis. This information is provided to support your use of the App, and you are responsible for ensuring that any content you submit is accurate, appropriate, and authorized for processing.</p>
              <p className="mt-2">The App does not provide medical diagnosis, treatment, or professional clinical advice. Any health-related features are informational tools only and should not replace professional medical judgment.</p>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="font-semibold text-gray-900 dark:text-white mb-2">5. Account and Data Security</h2>
              <p>We use reasonable efforts to protect your account and data, but no digital system is completely secure. You acknowledge that use of the App involves inherent risk, including the possibility of data loss, unauthorized access, or service interruption.</p>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="font-semibold text-gray-900 dark:text-white mb-2">6. User Content</h2>
              <p>You retain ownership of content you submit to the App, including scanned documents, photos, and profile information. By using the App, you grant us a limited right to store, process, and manage that content as necessary to provide the service.</p>
              <p className="mt-2">You are responsible for obtaining any required permissions or consents before uploading third-party data or sensitive personal information.</p>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="font-semibold text-gray-900 dark:text-white mb-2">7. Intellectual Property</h2>
              <p>All trademarks, software, design elements, and content associated with the App are owned by us or our licensors. You may not copy, modify, distribute, or commercially exploit the App except as expressly permitted by these Terms.</p>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="font-semibold text-gray-900 dark:text-white mb-2">8. Availability and Changes</h2>
              <p>We may update, modify, suspend, or discontinue the App or any feature at any time, with or without notice. We may also update these Terms as needed.</p>
            </div>

            {/* Section 9 */}
            <div>
              <h2 className="font-semibold text-gray-900 dark:text-white mb-2">9. Privacy</h2>
              <p>Your use of the App is also governed by our Privacy Policy. Please review that document carefully.</p>
            </div>

            {/* Section 10 */}
            <div>
              <h2 className="font-semibold text-gray-900 dark:text-white mb-2">10. Limitation of Liability</h2>
              <p>To the maximum extent permitted by law, we shall not be liable for indirect, incidental, special, consequential, or punitive damages arising from your use of the App, including loss of data, loss of business, or loss of medical records, except where required by applicable law.</p>
            </div>

            {/* Section 11 */}
            <div>
              <h2 className="font-semibold text-gray-900 dark:text-white mb-2">11. Termination</h2>
              <p>We may suspend or terminate your access to the App if you violate these Terms or use the App in a way that may harm the service, other users, or legal compliance obligations.</p>
            </div>

            {/* Section 12 */}
            <div>
              <h2 className="font-semibold text-gray-900 dark:text-white mb-2">12. Governing Law</h2>
              <p>These Terms are governed by the laws of the jurisdiction in which the App provider is established, unless otherwise required by applicable law.</p>
            </div>

            {/* Section 13 */}
            <div>
              <h2 className="font-semibold text-gray-900 dark:text-white mb-2">13. Contact</h2>
              <p className="mb-2">If you have any questions about these Terms, please contact us at:</p>
              <ul className="space-y-1 pl-5">
                <li>• Email: <a href="mailto:support@bluai.ai" className="text-gray-900 dark:text-white hover:underline">support@bluai.ai</a></li>
                <li>• App: BluApp</li>
              </ul>
              <p className="mt-2 text-gray-500 dark:text-gray-400 text-xs">This terms document is a practical baseline for app usage. For a production release, replace the contact details and legal jurisdiction with the actual provider information.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}