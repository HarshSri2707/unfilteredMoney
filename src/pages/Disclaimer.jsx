// src/pages/Disclaimer.jsx
import { motion } from 'framer-motion';
import Seo from '../components/ui/Seo';
import { seoConfig } from '../config/seo.config';

const Disclaimer = () => {
  return (
    <>
      <Seo
        title="Disclaimer | Unfiltered Money"
        description="Important disclaimers and limitations regarding Unfiltered Money's services and information."
        keywords="disclaimer, legal notice, limitations, Unfiltered Money"
        url={`${seoConfig.siteUrl}/disclaimer`}
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
            <div className="inline-block bg-orange-100 rounded-full p-4 mb-6">
              <span className="text-6xl">⚠️</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Disclaimer
            </h1>
            <p className="text-gray-600 text-lg">
              Last Updated: February 12, 2026
            </p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8">
            {/* General Disclaimer */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                General Disclaimer
              </h2>
              <p className="text-gray-700 leading-relaxed">
                The information provided on Unfiltered Money is for general informational and educational purposes only. It should not be considered as professional financial, investment, legal, or tax advice. Always consult qualified professionals before making financial decisions.
              </p>
            </section>

            {/* Not Financial Advice */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                1. Not Financial Advice
              </h2>
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded mb-4">
                <p className="text-gray-700 leading-relaxed font-semibold">
                  Unfiltered Money is NOT a registered financial advisor, investment advisor, or broker-dealer. We do not provide personalized financial advice tailored to your specific circumstances.
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Our content, comparisons, and recommendations are general in nature and may not be suitable for everyone. You should evaluate your own financial situation, risk tolerance, and goals before making any financial decisions.
              </p>
            </section>

            {/* Accuracy of Information */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2. Accuracy of Information
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                While we strive to provide accurate and up-to-date information:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Product features, rates, and terms may change without notice</li>
                <li>Information may become outdated between updates</li>
                <li>Errors or omissions may occur despite our best efforts</li>
                <li>Always verify current details directly with the financial provider</li>
              </ul>
            </section>

            {/* Investment Risks */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                3. Investment Risks
              </h2>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded mb-4">
                <p className="text-gray-700 leading-relaxed">
                  <strong>Risk Warning:</strong> All investments carry risk, including the potential loss of principal. Past performance does not guarantee future results.
                </p>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li><strong>Mutual Funds & Stocks:</strong> Market volatility can lead to losses</li>
                <li><strong>Gold:</strong> Prices fluctuate based on global factors</li>
                <li><strong>Fixed Income:</strong> Interest rate changes affect returns</li>
                <li>Returns mentioned are historical and not guaranteed for the future</li>
              </ul>
            </section>

            {/* Credit Card Risks */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                4. Credit Card Risks
              </h2>
              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded mb-4">
                <p className="text-gray-700 leading-relaxed">
                  <strong>Debt Warning:</strong> Credit cards can lead to significant debt if not managed responsibly.
                </p>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Interest rates can be as high as 36-48% per annum</li>
                <li>Paying only minimum dues leads to accumulating interest</li>
                <li>Late payments damage your credit score</li>
                <li>Over-application can result in credit rejections</li>
              </ul>
            </section>

            {/* Insurance Limitations */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                5. Insurance Limitations
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Insurance policies have specific terms, conditions, and exclusions:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Not all medical conditions or scenarios are covered</li>
                <li>Pre-existing conditions may have waiting periods</li>
                <li>Claim settlements depend on policy terms and insurer discretion</li>
                <li>Read policy documents carefully before purchasing</li>
              </ul>
            </section>

            {/* Third-Party Products */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                6. Third-Party Products and Services
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Unfiltered Money is a comparison platform that:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Does not sell financial products directly</li>
                <li>Redirects you to third-party providers for applications</li>
                <li>Is not responsible for approval, rejection, or terms offered</li>
                <li>Cannot guarantee customer service quality of providers</li>
                <li>May earn affiliate commissions on referrals</li>
              </ul>
            </section>

            {/* No Guarantee of Approval */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                7. No Guarantee of Approval
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Applications submitted through our links are subject to the provider's approval process. We do not guarantee approval for any credit card, loan, insurance policy, or investment product. Eligibility depends on your credit score, income, age, and other criteria set by the provider.
              </p>
            </section>

            {/* User Responsibility */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                8. User Responsibility
              </h2>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded mb-4">
                <p className="text-gray-700 leading-relaxed">
                  <strong>Your Due Diligence:</strong> You are solely responsible for verifying information, conducting research, and making informed financial decisions.
                </p>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Read all product documents and fine print</li>
                <li>Understand fees, charges, and penalties</li>
                <li>Assess your own financial situation and risk tolerance</li>
                <li>Seek professional advice when needed</li>
              </ul>
            </section>

            {/* External Links */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                9. External Links
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Our website contains links to external websites. We are not responsible for the content, privacy practices, or availability of these sites. Clicking on external links is at your own risk.
              </p>
            </section>

            {/* Changes to Information */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                10. Changes to Information
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to modify or remove any information on our website at any time without notice. We are not obligated to update historical content, even if circumstances change.
              </p>
            </section>

            {/* Limitation of Liability */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                11. Limitation of Liability
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                To the maximum extent permitted by law, Unfiltered Money and its affiliates, employees, and partners shall not be liable for:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Any financial losses resulting from using our information</li>
                <li>Decisions made based on our content or recommendations</li>
                <li>Actions or omissions of third-party providers</li>
                <li>Errors, inaccuracies, or outdated information</li>
                <li>Direct, indirect, incidental, or consequential damages</li>
              </ul>
            </section>

            {/* Consult Professionals */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                12. Consult Qualified Professionals
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Before making any significant financial decision, we strongly recommend consulting:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li><strong>Financial Advisors:</strong> For investment and wealth management</li>
                <li><strong>Tax Consultants:</strong> For tax implications</li>
                <li><strong>Legal Advisors:</strong> For contractual matters</li>
                <li><strong>Insurance Agents:</strong> For detailed policy guidance</li>
              </ul>
            </section>

            {/* Contact */}
            <section className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6 border border-orange-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Questions or Concerns?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have questions about this disclaimer or our content:
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Email:</strong> support@unfilteredmoney.com</p>
                <p><strong>Address:</strong> Unfiltered Money, Mumbai, Maharashtra, India</p>
              </div>
            </section>

            {/* Final Note */}
            <div className="bg-gray-100 rounded-xl p-6 border-2 border-gray-300">
              <p className="text-gray-700 leading-relaxed text-center font-semibold">
                By using Unfiltered Money, you acknowledge that you have read, understood, and agreed to this disclaimer. If you do not agree, please discontinue use of our services immediately.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Disclaimer;