import { motion } from 'framer-motion';
import { animationConfig } from '../config/animation.config';
import { seoConfig } from '../config/seo.config';
import Seo from '../components/ui/Seo';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { insuranceData } from '../data/insurance.data';

const Insurance = () => {
  return (
    <motion.div
      {...animationConfig.pageTransition}
    >
      <Seo
        title={seoConfig.pages.insurance.title}
        description={seoConfig.pages.insurance.description}
        keywords={seoConfig.pages.insurance.keywords}
        url={`${seoConfig.siteUrl}/insurance`}
      />

      {/* Hero Section */}
      <motion.section
        className="pt-24 pb-16 bg-gradient-to-br from-green-50 to-emerald-50"
        {...animationConfig.sectionReveal}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Insurance - Unbiased Reviews & Policy Decoding
            </h1>
            <p className="text-xl text-neutral-600">
              We decode policy fine print, reveal hidden exclusions, and help you find coverage that actually protects you.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Categories Section */}
      <motion.section
        className="py-16 bg-white"
        {...animationConfig.sectionReveal}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">
            Insurance Types
          </h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={animationConfig.staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {insuranceData.categories.map((category) => (
              <motion.div key={category.slug} variants={animationConfig.staggerItem}>
                <Card hover>
                  <div className="p-8 text-center">
                    <div className="text-6xl mb-4">
                      {category.slug === 'term-life' ? '🛡️' : 
                       category.slug === 'health' ? '❤️' : '🚗'}
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-3">
                      {category.name}
                    </h3>
                    <p className="text-neutral-600 mb-6">{category.description}</p>
                    <Button variant="outline" fullWidth>
                      Learn More
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Top Picks Section */}
      <motion.section
        className="py-16 bg-neutral-50"
        {...animationConfig.sectionReveal}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">
            Our Top Picks
          </h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={animationConfig.staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {insuranceData.topPicks.map((policy) => (
              <motion.div key={policy.id} variants={animationConfig.staggerItem}>
                <Card hover>
                  <div className="relative h-48 bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center">
                    <span className="text-7xl">{policy.type === 'term' ? '🛡️' : '❤️'}</span>
                    <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full">
                      <span className="text-sm font-semibold text-green-600">
                        ⭐ {policy.rating}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-neutral-900 mb-1">
                      {policy.name}
                    </h3>
                    <p className="text-sm text-neutral-600 mb-4">{policy.provider}</p>

                    <div className="space-y-2 mb-4">
                      <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                        <p className="text-xs text-neutral-600 mb-1">Claim Settlement Ratio</p>
                        <p className="text-lg font-bold text-green-600">
                          {policy.claimSettlementRatio}
                        </p>
                      </div>
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                        <p className="text-xs text-neutral-600 mb-1">Premium Estimate</p>
                        <p className="text-sm font-semibold text-neutral-900">
                          {policy.premiumEstimate}
                        </p>
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-xs font-semibold text-neutral-700 mb-2">Key Benefits:</p>
                      <ul className="space-y-1">
                        {policy.pros.slice(0, 2).map((pro, i) => (
                          <li key={i} className="text-xs text-neutral-600 flex items-start">
                            <span className="text-green-500 mr-2">✓</span>
                            <span>{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-neutral-200">
                      <p className="text-xs text-neutral-500 mb-1">Best For:</p>
                      <p className="text-sm text-neutral-700 font-medium">{policy.bestFor}</p>
                    </div>

                    <Button variant="primary" fullWidth className="mt-4">
                      Get Quote
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* FAQs Section */}
      <motion.section
        className="py-16 bg-white"
        {...animationConfig.sectionReveal}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">
            Insurance FAQs
          </h2>

          <div className="space-y-6">
            {insuranceData.faqData.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-neutral-900 mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-neutral-600">{faq.answer}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="py-16 bg-gradient-to-br from-green-600 to-emerald-600 text-white"
        {...animationConfig.sectionReveal}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help Choosing?</h2>
          <p className="text-xl mb-8 text-green-100">
            Use our insurance calculator to find the right coverage for your needs.
          </p>
          <Button size="lg" variant="secondary">
            Calculate Coverage
          </Button>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Insurance;