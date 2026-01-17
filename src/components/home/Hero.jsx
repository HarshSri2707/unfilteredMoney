

import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative bg-neutral-900 pt-24 pb-12 md:pt-32 md:pb-16 overflow-hidden">
      {/* Background Image & Overlay */}
     <div className="absolute inset-0 z-0">
  <img
    src="/images/hero-bg.avif"
    alt="Financial background"
    className="w-full h-full object-cover opacity-80 blur-sm"
    loading="eager"
  />

  <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-neutral-900/80" />
</div>


      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          variants={containerVariants}
          initial="initial"
          animate="animate"
        >
          {/* Subtle Badge */}
          <motion.div variants={itemVariants}>
            <span className="inline-block mb-4 px-3 py-1 bg-white/10 backdrop-blur-sm text-white/80 rounded-full text-[11px] md:text-xs font-medium border border-white/5">
              🔍 Honest • Unbiased • India-Focused
            </span>
          </motion.div>

          {/* HEADING - Pehle se thoda bada lekin control mein */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight px-2"
            style={{ fontFamily: 'Lato, sans-serif' }}
          >
            Financial Products Hide <br />
            <span className="text-primary-400">Critical Fine Print</span>
          </motion.h1>

          {/* SUBHEADING - Clean and Elegant */}
          <motion.p
            variants={itemVariants}
            className="mt-4 text-xl md:text-3xl text-white font-bold  tracking-wide "
            style={{ fontFamily: 'Lato, sans-serif' }}
          >
            "We Help You See It Clearly"
          </motion.p>
          
          {/* Small Accent Line */}
          <motion.div 
            variants={itemVariants}
            className="mt-6 h-1 w-16 bg-primary-500 mx-auto rounded-full"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;