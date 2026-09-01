'use client';

import React, { useEffect } from 'react';
import { Shield, Mail } from 'lucide-react';

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = 'Privacy Policy - BluAI';
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Learn how BluAI protects your privacy and handles your personal and medical data securely.');
    }
    
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', 'https://bluai.ai/privacy-policy');
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
            "name": "Privacy Policy - BluAI",
            "url": "https://bluai.ai/privacy-policy",
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
              <Shield className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                Privacy Policy
              </h1>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Effective Date: 2026-08-04
            </p>
          </div>

          {/* Content - EXACT from file */}
          <div className="space-y-6 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            <p>
              This Privacy Policy explains how BluApp (“we”, “our”, or “the App”) collects, uses, stores, shares, and protects information when you use our mobile application.
            </p>

            {/* Section 1 */}
            <div>
              <h2 className="font-semibold text-gray-900 dark:text-white mb-2">1. Information We Collect</h2>
              <p className="mb-2">We may collect the following categories of information:</p>
              <ul className="space-y-1.5 pl-5">
                <li>• Account and profile information, such as your name, phone number, email address, patient or user identifier, date of birth, and profile photo.</li>
                <li>• Medical and health-related information that you enter or upload in the App, including medical history, vitals, scanned documents, and related records.</li>
                <li>• Image and camera data, including photos, scans, document images, and face-related analysis data captured through the App’s camera and scanner features.</li>
                <li>• Device information, such as device model, operating system, app version, unique device identifiers, and technical diagnostics.</li>
                <li>• Usage information, such as feature usage, timestamps, error logs, and interaction data needed to improve App performance.</li>
              </ul>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="font-semibold text-gray-900 dark:text-white mb-2">2. How We Use Your Information</h2>
              <p className="mb-2">We use the information we collect to:</p>
              <ul className="space-y-1.5 pl-5">
                <li>• Create and manage your account.</li>
                <li>• Provide core App features, including registration, document scanning, patient record management, vitals tracking, and face analysis.</li>
                <li>• Process and store your health or medical information securely for your personal use and for the services you request.</li>
                <li>• Improve, maintain, and troubleshoot the App.</li>
                <li>• Comply with legal, regulatory, and security obligations.</li>
                <li>• Communicate with you about important service updates, account notices, or support requests.</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="font-semibold text-gray-900 dark:text-white mb-2">3. Camera, Photos, and Scanner Permissions</h2>
              <p>The App may request access to your camera, photos, storage, and related device permissions to enable document scanning, image capture, and face analysis features. These permissions are used only to provide the requested features.</p>
              <p className="mt-2">We do not use your camera or photos for unrelated purposes, and we do not sell or rent your personal or medical data.</p>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="font-semibold text-gray-900 dark:text-white mb-2">4. Data Storage and Processing</h2>
              <p>Your information may be stored locally on your device and/or on secure servers operated by us or by trusted third-party service providers. We use reasonable administrative, technical, and organizational safeguards to protect your data from unauthorized access, loss, misuse, or disclosure.</p>
              <p className="mt-2">Some data processing may occur through cloud services or APIs used to support authentication, storage, document processing, or analytics.</p>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="font-semibold text-gray-900 dark:text-white mb-2">5. Sharing of Information</h2>
              <p className="mb-2">We may share your information only in the following limited circumstances:</p>
              <ul className="space-y-1.5 pl-5">
                <li>• With service providers that help us operate, host, secure, or improve the App.</li>
                <li>• When required by law, court order, emergency, or government request.</li>
                <li>• With your explicit consent, where you choose to share records or information with another person, clinic, doctor, or authorized party.</li>
                <li>• To protect the rights, safety, and security of our users or the App.</li>
              </ul>
              <p className="mt-2 font-medium text-gray-800 dark:text-gray-200">We do not sell your personal or health information.</p>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="font-semibold text-gray-900 dark:text-white mb-2">6. Data Retention</h2>
              <p>We retain your information only for as long as necessary to provide the services, meet legal obligations, resolve disputes, and enforce our agreements. If you delete your account or request deletion of your data, we will remove it where reasonably possible, subject to legal, regulatory, or security requirements.</p>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="font-semibold text-gray-900 dark:text-white mb-2">7. Your Rights and Choices</h2>
              <p className="mb-2">Depending on applicable law, you may have rights to:</p>
              <ul className="space-y-1.5 pl-5">
                <li>• Access the personal information we hold about you.</li>
                <li>• Request correction of inaccurate information.</li>
                <li>• Request deletion or withdrawal of consent for certain data collection uses.</li>
                <li>• Restrict or object to some processing activities.</li>
                <li>• Receive a copy of your data in a portable format.</li>
              </ul>
              <p className="mt-2">To exercise these rights, please contact us using the details provided below.</p>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="font-semibold text-gray-900 dark:text-white mb-2">8. Children’s Privacy</h2>
              <p>The App is not intended for children under the age of 18 without appropriate parental or guardian consent, and we do not knowingly collect personal data from children without lawful basis and appropriate safeguards.</p>
            </div>

            {/* Section 9 */}
            <div>
              <h2 className="font-semibold text-gray-900 dark:text-white mb-2">9. International Transfers</h2>
              <p>If your information is transferred outside your country or region for hosting, support, or processing, we will take reasonable steps to ensure that such transfers are protected in accordance with applicable privacy laws.</p>
            </div>

            {/* Section 10 */}
            <div>
              <h2 className="font-semibold text-gray-900 dark:text-white mb-2">10. Changes to This Policy</h2>
              <p>We may update this Privacy Policy from time to time to reflect changes in the App, legal requirements, or our data practices. The updated version will be posted in the App or on our website, and the effective date will be revised accordingly.</p>
            </div>

            {/* Section 11 */}
            <div>
              <h2 className="font-semibold text-gray-900 dark:text-white mb-2">11. Contact Us</h2>
              <p className="mb-2">If you have any questions or concerns about this Privacy Policy or how your information is handled, please contact us at:</p>
              <ul className="space-y-1 pl-5">
                <li>• Email: <a href="mailto:support@bluai.ai" className="text-gray-900 dark:text-white hover:underline">support@bluai.ai</a></li>
                <li>• App: BluApp</li>
              </ul>
              <p className="mt-2 text-gray-500 dark:text-gray-400 text-xs">This policy is intended to provide a clear explanation of how the App handles personal and health-related information. For a production release, the contact details, company name, and legal jurisdiction should be replaced with the actual provider information.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}