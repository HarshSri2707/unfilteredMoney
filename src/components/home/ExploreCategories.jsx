import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { animationConfig } from '../../config/animation.config';
import Card from '../ui/Card';

const ExploreCategories = () => {
  const categories = [
    {
      icon: '💳',
      title: 'Credit Cards',
      description: 'Compare rewards, fees, and benefits across 50+ cards',
      link: '/credit-cards',
      color: 'from-blue-500 to-blue-600',
      stats: '50+ Cards Reviewed',
      image: '/images/categories/credit-cards.svg',
    },
    {
      icon: '🛡️',
      title: 'Insurance',
      description: 'Find the right coverage without hidden exclusions',
      link: '/insurance',
      color: 'from-green-500 to-emerald-600',
      stats: '100+ Policies Analyzed',
      image: '/images/categories/insurance.svg',
    },
    {
      icon: '📈',
      title: 'Investments',
      description: 'Mutual funds, stocks, and fixed income options decoded',
      link: '/investments',
      color: 'from-purple-500 to-purple-600',
      stats: '200+ Funds Tracked',
      image: '/images/categories/investments.svg',
    },
    {
      icon: '💰',
      title: 'Calculators',
      description: 'Tax, SIP, and insurance calculators for smart planning',
      link: '/tools',
      color: 'from-orange-500 to-orange-600',
      stats: '10+ Free Tools',
      image: '/images/categories/calculators.svg',
    },
  ];

  return (
    <motion.section
      className="py-16 bg-white"
      {...animationConfig.sectionReveal}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Explore Financial Products
          </motion.h2>
          <motion.p
            className="text-lg text-neutral-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Everything you need to make informed financial decisions
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={animationConfig.staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {categories.map((category, index) => (
            <motion.div
              key={index}
              variants={animationConfig.staggerItem}
            >
              <Link to={category.link}>
                <Card hover>
                  <div className="relative overflow-hidden">
                    <div className={`h-32 bg-gradient-to-br ${category.color} flex items-center justify-center relative`}>
                      <span className="text-6xl">{category.icon}</span>
                      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                        <span className="text-xs font-semibold text-neutral-700">
                          {category.stats}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-neutral-900 mb-2">
                      {category.title}
                    </h3>
                    <p className="text-sm text-neutral-600 mb-4">
                      {category.description}
                    </p>
                    <div className="flex items-center text-primary-600 font-semibold text-sm hover:text-primary-700 transition-colors">
                      <span>Explore Now</span>
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
    </motion.section>
  );
};

export default ExploreCategories;