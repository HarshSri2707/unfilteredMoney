import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { animationConfig } from '../../config/animation.config';
import Card from '../ui/Card';

const Tools = () => {
  const tools = [
    {
      id: 'sip-calculator',
      name: 'SIP Calculator',
      icon: '📊',
      description: 'Calculate your mutual fund returns with our advanced SIP calculator',
      path: '/tools/sip-calculator',
    },
    {
      id: 'tax-calculator',
      name: 'Income Tax Calculator',
      icon: '💰',
      description: 'Compare Old vs. New tax regime and optimize your tax savings',
      path: '/tools/tax-calculator',
    },
    {
      id: 'insurance-calculator',
      name: 'Insurance Premium Calculator',
      icon: '🛡️',
      description: 'Get instant quotes for term life and health insurance',
      path: '/tools/insurance-calculator',
    },
  ];

  return (
    <motion.section
      className="py-16 bg-neutral-50"
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
            Smart Financial Tools
          </motion.h2>
          <motion.p
            className="text-lg text-neutral-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Make informed decisions with our free calculators
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={animationConfig.staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {tools.map((tool) => (
            <motion.div
              key={tool.id}
              variants={animationConfig.staggerItem}
            >
              <Link to={tool.path}>
                <Card hover>
                  <div className="p-8 text-center">
                    <div className="text-6xl mb-4">{tool.icon}</div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-3">
                      {tool.name}
                    </h3>
                    <p className="text-neutral-600 text-sm">
                      {tool.description}
                    </p>
                    <div className="mt-6">
                      <span className="text-primary-600 font-semibold text-sm hover:text-primary-700 transition-colors">
                        Try Now →
                      </span>
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

export default Tools;