import { motion } from 'framer-motion';
import { animationConfig } from '../config/animation.config';
import { seoConfig } from '../config/seo.config';
import Seo from '../components/ui/Seo';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { creditCardsData } from '../data/creditCards.data';

const CreditCards = () => {
  return (
    <motion.div
      {...animationConfig.pageTransition}
    >
      <Seo
        title={seoConfig.pages.creditCards.title}
        description={seoConfig.pages.creditCards.description}
        keywords={seoConfig.pages.creditCards.keywords}
        url={`${seoConfig.siteUrl}/credit-cards`}
      />

      {/* Hero Section */}
      <motion.section
        className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-primary-50"
        {...animationConfig.sectionReveal}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Credit Cards - Honest Reviews & Comparisons
            </h1>
            <p className="text-xl text-neutral-600">
              We decode the fine print, reveal hidden fees, and help you find the perfect card for your spending pattern.
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
            Browse by Category
          </h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={animationConfig.staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {creditCardsData.categories.map((category) => (
              <motion.div key={category.slug} variants={animationConfig.staggerItem}>
                <Card hover>
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-neutral-900 mb-3">
                      {category.name}
                    </h3>
                    <p className="text-neutral-600 mb-6">{category.description}</p>
                    <Button variant="outline" fullWidth>
                      Explore Category
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={animationConfig.staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {creditCardsData.topPicks.map((card) => (
              <motion.div key={card.id} variants={animationConfig.staggerItem}>
                <Card hover>
                  <div className="relative h-48 bg-gradient-to-br from-blue-100 to-primary-100 flex items-center justify-center">
                    <span className="text-7xl">💳</span>
                    <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full">
                      <span className="text-sm font-semibold text-primary-600">
                        ⭐ {card.rating}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-neutral-900 mb-1">
                      {card.name}
                    </h3>
                    <p className="text-sm text-neutral-600 mb-4">{card.bank}</p>

                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-neutral-600">Annual Fee:</span>
                        <span className="font-semibold">{card.annualFee}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-neutral-600">Fee Waiver:</span>
                        <span className="font-semibold text-green-600">{card.feeWaiver}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-xs font-semibold text-neutral-700 mb-2">Pros:</p>
                      <ul className="space-y-1">
                        {card.pros.slice(0, 2).map((pro, i) => (
                          <li key={i} className="text-xs text-neutral-600 flex items-start">
                            <span className="text-green-500 mr-2">✓</span>
                            <span>{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-neutral-200">
                      <p className="text-xs text-neutral-500 mb-1">Best For:</p>
                      <p className="text-sm text-neutral-700 font-medium">{card.bestFor}</p>
                    </div>

                    <Button variant="primary" fullWidth className="mt-4">
                      View Details
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
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {creditCardsData.faqData.map((faq, index) => (
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
    </motion.div>
  );
};

export default CreditCards;