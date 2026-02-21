// src/pages/TermsOfService.jsx
import { motion } from 'framer-motion';
import Seo from '../components/ui/Seo';
import { seoConfig } from '../config/seo.config';

const TermsOfService = () => {
  return (
    <>
      <Seo
        title="Terms of Service | Unfiltered Money"
        description="Read the terms and conditions for using Unfiltered Money's services."
        keywords="terms of service, terms and conditions, user agreement, Unfiltered Money"
        url={`${seoConfig.siteUrl}/terms-of-service`}
        image={seoConfig.defaultImage}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block bg-purple-100 rounded-full p-4 mb-6">
              <span className="text-6xl">📋</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Terms of Service
            </h1>
            <p className="text-gray-600 text-lg">
              Last Updated: February 12, 2026
            </p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8">
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
              <p className="text-gray-700 leading-relaxed">
                Welcome to Unfiltered Money. By accessing or using our website and services, you agree to be bound by these Terms of Service. Please read them carefully before using our platform.
              </p>
            </section>

            {/* Acceptance of Terms */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                By using Unfiltered Money, you agree to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Comply with all applicable laws and regulations</li>
                <li>Provide accurate and truthful information</li>
                <li>Use our services responsibly and ethically</li>
                <li>Accept any updates to these terms (continued use implies acceptance)</li>
              </ul>
            </section>

            {/* Services Description */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2. Description of Services
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Unfiltered Money provides:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Comparison tools for credit cards, investments, and insurance products</li>
                <li>Educational content and financial guidance</li>
                <li>Personalized recommendations based on your preferences</li>
                <li>Links to third-party financial service providers</li>
              </ul>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded mt-4">
                <p className="text-sm text-gray-700">
                  <strong>Important:</strong> We are a comparison and information platform. We do not provide financial advice, sell financial products directly, or act as a financial advisor.
                </p>
              </div>
            </section>

            {/* User Responsibilities */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                3. User Responsibilities
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                As a user, you agree to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Provide accurate personal and financial information</li>
                <li>Keep your account credentials secure</li>
                <li>Not misuse our platform for fraudulent activities</li>
                <li>Conduct your own due diligence before making financial decisions</li>
                <li>Read terms and conditions of third-party providers before applying</li>
              </ul>
            </section>

            {/* Disclaimer */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                4. Disclaimer of Warranties
              </h2>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Unfiltered Money provides information "as is" without warranties of any kind. We do not guarantee:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>The accuracy, completeness, or timeliness of information</li>
                  <li>Approval of applications submitted through our links</li>
                  <li>Specific financial outcomes or returns</li>
                  <li>Uninterrupted or error-free service</li>
                </ul>
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                  <p className="text-sm text-gray-700">
                    <strong>Risk Warning:</strong> All financial products carry risk. Past performance does not guarantee future results. Credit cards can lead to debt if mismanaged. Investments can lose value. Insurance may not cover all scenarios. Always read product documents carefully.
                  </p>
                </div>
              </div>
            </section>

            {/* Limitation of Liability */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                5. Limitation of Liability
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                To the fullest extent permitted by law, Unfiltered Money shall not be liable for:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Financial losses resulting from decisions made based on our content</li>
                <li>Errors, omissions, or inaccuracies in information</li>
                <li>Actions or omissions of third-party financial providers</li>
                <li>Unauthorized access to your data due to security breaches</li>
                <li>Indirect, incidental, or consequential damages</li>
              </ul>
            </section>

            {/* Third-Party Services */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                6. Third-Party Services and Links
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our platform contains links to third-party websites and services:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>We are not responsible for their content, policies, or practices</li>
                <li>Review their terms and privacy policies before engaging</li>
                <li>Applications submitted through our links are subject to their approval process</li>
                <li>We may earn commissions when you apply through our affiliate links</li>
              </ul>
            </section>

            {/* Intellectual Property */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                7. Intellectual Property
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                All content on Unfiltered Money, including text, graphics, logos, and software, is our property or licensed to us. You may not:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Copy, reproduce, or distribute our content without permission</li>
                <li>Use our trademarks or branding without authorization</li>
                <li>Scrape or extract data using automated tools</li>
                <li>Create derivative works based on our content</li>
              </ul>
            </section>

            {/* Affiliate Disclosure */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                8. Affiliate Disclosure
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Unfiltered Money may earn commissions when you click on links or apply for products through our platform. This does not affect the price you pay or our recommendations. We strive to provide unbiased comparisons, but our partnerships may influence product placement and visibility.
              </p>
            </section>

            {/* Termination */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                9. Termination
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to suspend or terminate your access to our services at any time, without notice, for violations of these terms or for any other reason we deem appropriate.
              </p>
            </section>

            {/* Governing Law */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                10. Governing Law and Dispute Resolution
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                These terms are governed by the laws of India. Any disputes shall be resolved through:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Good faith negotiation first</li>
                <li>Mediation or arbitration if negotiation fails</li>
                <li>Courts in Kanpur, Uttar Pradesh, India as a last resort</li>
              </ul>
            </section>

            {/* Changes to Terms */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                11. Changes to These Terms
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We may update these Terms of Service at any time. Changes will be posted on this page with an updated "Last Updated" date. Your continued use of our services after changes constitutes acceptance of the new terms.
              </p>
            </section>

            {/* Contact */}
            <section className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                12. Contact Information
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Questions about these Terms of Service? Contact us:
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Email:</strong> legal@unfilteredmoney.com</p>
                <p><strong>Support:</strong> support@unfilteredmoney.com</p>
                <p><strong>Address:</strong> Unfiltered Money, Mumbai, Maharashtra, India</p>
              </div>
            </section>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default TermsOfService;