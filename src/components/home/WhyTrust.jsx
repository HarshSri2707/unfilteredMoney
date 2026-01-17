


import { motion } from 'framer-motion';

const WhyTrust = () => {
  const reasons = [
    {
      icon: '🔍',
      title: 'Fine Print',
      description: 'T&Cs analyzed minutely for you.',
    },
    {
      icon: '⚖️',
      title: 'No Bias',
      description: 'Bad products? We call them out.',
    },
    {
      icon: '🇮🇳',
      title: 'India-Centric',
      description: 'Expert local market understanding.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section className="pt-12 pb-16 bg-gradient-to-br from-primary-50 to-blue-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900 mb-4 leading-tight">
            Why Trust <br />
            <span className="text-primary-600">UnfilteredMoney?</span>
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed max-w-md text-justify">
            We’re not here to sell you products. We’re here to protect you from the traps hidden in the fine print.
          </p>
          <div className="mt-6 h-1 w-16 bg-primary-600 rounded-full" />
        </motion.div>

        {/* RIGHT CARDS */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className={`p-5 rounded-xl border border-neutral-100 shadow-sm hover:shadow-md transition-all bg-white ${idx === 2 ? 'sm:col-span-2' : ''}`}
            >
              <div className="text-3xl mb-3">{reason.icon}</div>
              <h3 className="text-md font-bold text-neutral-900 mb-1">{reason.title}</h3>
              <p className="text-xs text-neutral-500 text-justify">{reason.description}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default WhyTrust;