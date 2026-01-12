import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { animationConfig } from '../../config/animation.config';
import Card from '../ui/Card';
import { creditCardsData } from '../../data/creditCards.data';
import { insuranceData } from '../../data/insurance.data';
import { investmentsData } from '../../data/investments.data';

const TopPicks = () => {
  const allPicks = [
    ...creditCardsData.topPicks.slice(0, 1),
    ...insuranceData.topPicks.slice(0, 1),
    ...investmentsData.topPicks.slice(0, 1),
  ];

  return (
    <motion.section
      className="py-16 bg-white"
      {...animationConfig.sectionReveal}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            The Top Picks
          </motion.h2>
          <motion.p
            className="text-lg text-neutral-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Products We Actually Like This Month
          </motion.p>
        </div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
          variants={animationConfig.staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {allPicks.map((pick) => (
            <motion.div
              key={pick.id}
              variants={animationConfig.staggerItem}
              className="h-full"
            >
              <Card hover className="h-full flex flex-col">
                {/* Image */}
                <div className="relative h-48 shrink-0 bg-gradient-to-br from-primary-100 to-accent-100 overflow-hidden">
                  <img
                    src={pick.image || `/images/picks/${pick.id}.jpg`}
                    alt={pick.name}
                    className="absolute inset-0 w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextSibling.style.display = 'flex';
                    }}
                  />

                  {/* Fallback Icon */}
                  <div
                    className="absolute inset-0 hidden items-center justify-center"
                  >
                    <span className="text-6xl opacity-20">
                      {pick.bank
                        ? '💳'
                        : pick.type === 'mutual-fund'
                        ? '📈'
                        : '🛡️'}
                    </span>
                  </div>

                  {/* Rating */}
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-lg">
                    <span className="text-sm font-semibold text-primary-600">
                      ⭐ {pick.rating}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">
                    {pick.name}
                  </h3>
                  <p className="text-sm text-neutral-600 mb-4">
                    {pick.bank || pick.provider || pick.category}
                  </p>

                  {/* Pros */}
                  <div className="space-y-3 mb-4">
                    <p className="text-xs font-semibold text-neutral-700">
                      Why We Picked This:
                    </p>
                    <ul className="space-y-1">
                      {pick.pros.slice(0, 2).map((pro, i) => (
                        <li
                          key={i}
                          className="text-sm text-neutral-600 flex items-start"
                        >
                          <span className="text-green-500 mr-2">✓</span>
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Best For (always bottom) */}
                  <div className="pt-4 border-t border-neutral-200 mt-auto">
                    <p className="text-xs text-neutral-500 mb-1">
                      Best For
                    </p>
                    <p className="text-sm text-neutral-700 font-medium">
                      {pick.bestFor}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            to="/credit-cards"
            className="inline-block text-primary-600 font-semibold hover:text-primary-700 transition-colors"
          >
            View All Recommendations →
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TopPicks;
