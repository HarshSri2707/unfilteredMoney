import { motion } from 'framer-motion';
import { animationConfig } from '../../config/animation.config';
import Card from '../ui/Card';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      icon: '🔍',
      title: 'Deep Research',
      description: 'We read every T&C, policy document, and fee structure line by line.',
    },
    {
      number: '02',
      icon: '⚖️',
      title: 'Unbiased Analysis',
      description: 'No sponsored rankings. We compare pros, cons, and hidden costs objectively.',
    },
    {
      number: '03',
      icon: '🇮🇳',
      title: 'India-First Focus',
      description: 'Every review considers Indian tax laws, regulations, and market realities.',
    },
    {
      number: '04',
      icon: '📊',
      title: 'Real-World Testing',
      description: 'We test eligibility, rejection rates, claim settlement, and actual costs.',
    },
    {
      number: '05',
      icon: '📝',
      title: 'Honest Verdict',
      description: 'We tell you exactly who should buy it and who should avoid it.',
    },
  ];

  return (
    <motion.section
      className="py-16 bg-neutral-50"
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
            How We Evaluate Financial Products
          </motion.h2>
          <motion.p
            className="text-lg text-neutral-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Our 5-step methodology ensures you get honest, India-specific financial advice
          </motion.p>
        </div>

        {/* Steps */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 items-stretch"
          variants={animationConfig.staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={animationConfig.staggerItem}
              className="h-full"
            >
              <Card hover className="h-full flex flex-col">
                <div className="p-6 text-center flex flex-col flex-1">
                  {/* Icon + Number */}
                  <div className="mb-4">
                    <div className="w-16 h-16 mx-auto bg-primary-100 rounded-full flex items-center justify-center mb-3">
                      <span className="text-3xl">{step.icon}</span>
                    </div>
                    <span className="text-4xl font-bold text-primary-600 opacity-20">
                      {step.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-neutral-600 mt-auto">
                    {step.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Highlight Box */}
        <motion.div
          className="mt-12 bg-blue-50 border border-blue-200 rounded-xl p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-start space-x-4">
            <div className="text-4xl">💡</div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-neutral-900 mb-2">
                What Makes Us Different?
              </h3>
              <p className="text-neutral-700">
                Unlike comparison sites that earn commissions on every click, we focus on{' '}
                <strong>editorial independence</strong>. We analyze fees & hidden charges,
                eligibility & rejection chances, long-term costs, real-world usability,
                and Indian regulations & tax impact.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HowItWorks;
