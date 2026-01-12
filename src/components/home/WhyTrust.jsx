import { motion } from 'framer-motion';
import { animationConfig } from '../../config/animation.config';

const WhyTrust = () => {
  const reasons = [
    {
      icon: '🔍',
      title: 'We Read the Fine Print',
      description: 'We analyze T&Cs minutely, so you don\'t have to and can make decisions hassle-free!',
    },
    {
      icon: '⚖️',
      title: 'No Bias',
      description: 'If a product is bad, we say it aloud, and recommend the best alternatives so you don\'t fall for marketing gimmicks.',
    },
    {
      icon: '🇮🇳',
      title: 'India-Centric',
      description: 'Our experts understand Indian tax laws, investor emotions, and market realities to suit your specific needs.',
    },
  ];

  return (
    <motion.section
      className="py-16 bg-gradient-to-br from-primary-600 to-accent-600 text-white"
      {...animationConfig.sectionReveal}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Why Trust Us?
          </motion.h2>
          <motion.p
            className="text-lg text-primary-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            We're the financial friends who tell you the ugly truth
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={animationConfig.staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20"
              variants={animationConfig.staggerItem}
            >
              <div className="text-5xl mb-4">{reason.icon}</div>
              <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
              <p className="text-primary-100">{reason.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WhyTrust;