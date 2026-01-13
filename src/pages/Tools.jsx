import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { animationConfig } from '../config/animation.config';
import { seoConfig } from '../config/seo.config';
import Seo from '../components/ui/Seo';
import Card from '../components/ui/Card';
import { calculatorsData } from '../data/calculators.data';

const Tools = () => {
  return (
    <motion.div {...animationConfig.pageTransition}>
      <Seo
        title="Financial Calculators & Tools | UnfilteredMoney"
        description="Free financial calculators for SIP, income tax, insurance and more. Plan your finances with accurate calculations."
        keywords="financial calculators, sip calculator, tax calculator, insurance calculator"
        url={`${seoConfig.siteUrl}/tools`}
      />

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl mb-6 shadow-lg">
              <span className="text-4xl">🧮</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              Financial Calculators & Tools
            </h1>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Free, accurate calculators to help you plan your financial future. Make informed decisions with confidence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Calculators Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={animationConfig.staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {calculatorsData.calculators.map((calc, index) => (
              <motion.div
                key={calc.id}
                variants={animationConfig.staggerItem}
              >
                <Link to={`/tools/${calc.slug}`}>
                  <Card hover>
                    <div className={`h-32 bg-gradient-to-br ${calc.color} flex items-center justify-center relative`}>
                      <span className="text-7xl">{calc.icon}</span>
                      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                        <span className="text-xs font-semibold text-neutral-700 capitalize">
                          {calc.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-neutral-900 mb-2">
                        {calc.name}
                      </h3>
                      <p className="text-sm text-neutral-600 mb-4">
                        {calc.description}
                      </p>
                      <div className="flex items-center text-primary-600 font-semibold text-sm hover:text-primary-700 transition-colors">
                        <span>Calculate Now</span>
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Use Section */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Why Use Our Calculators?
            </h2>
            <p className="text-lg text-neutral-600">
              Accurate, easy-to-use tools built for Indian financial planning
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={animationConfig.staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={animationConfig.staggerItem}>
              <Card>
                <div className="p-8 text-center">
                  <div className="text-5xl mb-4">⚡</div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">
                    Instant Results
                  </h3>
                  <p className="text-neutral-600">
                    Get calculations in real-time as you adjust values. No waiting, no delays.
                  </p>
                </div>
              </Card>
            </motion.div>

            <motion.div variants={animationConfig.staggerItem}>
              <Card>
                <div className="p-8 text-center">
                  <div className="text-5xl mb-4">🎯</div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">
                    Accurate Formulas
                  </h3>
                  <p className="text-neutral-600">
                    Based on actual tax slabs, insurance rates, and compound interest calculations.
                  </p>
                </div>
              </Card>
            </motion.div>

            <motion.div variants={animationConfig.staggerItem}>
              <Card>
                <div className="p-8 text-center">
                  <div className="text-5xl mb-4">🇮🇳</div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">
                    India-Specific
                  </h3>
                  <p className="text-neutral-600">
                    Built for Indian tax laws, insurance regulations, and investment products.
                  </p>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Tools;