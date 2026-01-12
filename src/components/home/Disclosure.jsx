import { motion } from 'framer-motion';
import { animationConfig } from '../../config/animation.config';

const Disclosure = () => {
  return (
    <motion.section
      className="py-16 bg-neutral-50"
      {...animationConfig.sectionReveal}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="bg-white rounded-xl border border-neutral-200 p-8 md:p-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-start space-x-4 mb-6">
            <div className="text-4xl">🤝</div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
                How We Make Money
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                Transparency matters. Here's exactly how UnfilteredMoney operates:
              </p>
            </div>
          </div>

          <div className="space-y-6 text-neutral-700">
            <div className="flex items-start space-x-3">
              <span className="text-green-600 font-bold text-xl flex-shrink-0">✓</span>
              <div>
                <h3 className="font-semibold text-neutral-900 mb-1">Display Advertising</h3>
                <p className="text-sm">
                  We display ads from Google AdSense and similar networks. These are clearly marked and do not influence our content.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <span className="text-green-600 font-bold text-xl flex-shrink-0">✓</span>
              <div>
                <h3 className="font-semibold text-neutral-900 mb-1">Affiliate Partnerships</h3>
                <p className="text-sm">
                  When you click certain links and apply for financial products, we may earn a commission from the provider. 
                  This comes at <strong>no extra cost to you</strong> and helps keep our content free.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <span className="text-red-600 font-bold text-xl flex-shrink-0">✗</span>
              <div>
                <h3 className="font-semibold text-neutral-900 mb-1">No Paid Rankings</h3>
                <p className="text-sm">
                  We <strong>never accept payment</strong> to rank products higher. If a credit card or insurance policy is bad, 
                  we say so—regardless of commission potential.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <span className="text-red-600 font-bold text-xl flex-shrink-0">✗</span>
              <div>
                <h3 className="font-semibold text-neutral-900 mb-1">No Lead Selling</h3>
                <p className="text-sm">
                  We do not collect your personal information and sell it to banks or insurance agents. 
                  Your privacy is non-negotiable.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-neutral-200">
            <p className="text-sm text-neutral-600 leading-relaxed">
              <strong>Editorial Independence:</strong> Our review team operates independently from our business team. 
              Product recommendations are based solely on research, user experience, fees, and regulatory compliance. 
              We survive on trust, not hidden agendas.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Disclosure;