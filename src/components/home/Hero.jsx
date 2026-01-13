// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import Button from '../ui/Button';

// const Hero = () => {
//   const containerVariants = {
//     initial: {},
//     animate: {
//       transition: {
//         staggerChildren: 0.18,
//         delayChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     initial: { opacity: 0, y: 24 },
//     animate: { opacity: 1, y: 0 },
//   };

//   return (
//     <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      
//       {/* Background Image */}
//       <img
//         src="/images/hero-bg.avif"
//         alt="Personal finance analysis background"
//         className="absolute inset-0 w-full h-full object-cover"
//         loading="eager"
//       />

//       {/* Dark Gradient Overlay (IMPORTANT) */}
//       <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />

//       {/* Subtle Decorative Blur */}
//       <div className="absolute top-10 right-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl" />
//       <div className="absolute bottom-10 left-10 w-72 h-72 bg-accent-500/20 rounded-full blur-3xl" />

//       {/* Content */}
//       <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           className="max-w-3xl mx-auto text-center"
//           variants={containerVariants}
//           initial="initial"
//           animate="animate"
//         >
//           {/* Badge */}
//           <motion.span
//             variants={itemVariants}
//             transition={{ duration: 0.5 }}
//             className="inline-block mb-6 px-4 py-2 rounded-full text-sm font-medium tracking-wide
//                        bg-white/10 text-white backdrop-blur-md"
//           >
//             Unbiased • Independent • India-focused
//           </motion.span>

//           {/* Heading */}
//           <motion.h1
//             variants={itemVariants}
//             transition={{ duration: 0.6 }}
//             className="text-4xl md:text-5xl lg:text-6xl font-semibold
//                        text-white leading-tight tracking-tight"
//           >
//             Financial products hide
//             <span className="block text-primary-300 font-medium">
//               critical fine print
//             </span>
//             <span className="block font-light text-white/90">
//               We help you see it clearly.
//             </span>
//           </motion.h1>

//           {/* Description */}
//           <motion.p
//             variants={itemVariants}
//             transition={{ duration: 0.6 }}
//             className="mt-6 text-lg md:text-xl text-white/80 leading-relaxed"
//           >
//             Compare credit cards, insurance, and investments with
//             <span className="text-white font-medium"> zero bias</span>.
//             Clear explanations, honest reviews, and practical advice
//             designed for real Indian users.
//           </motion.p>

//           {/* CTAs */}
//           <motion.div
//             variants={itemVariants}
//             transition={{ duration: 0.6 }}
//             className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
//           >
//             <Link to="/credit-cards">
//               <Button size="lg" variant="primary">
//                 Explore Credit Cards
//               </Button>
//             </Link>
//             <Link to="/blog">
//               <Button size="lg" variant="outline">
//                 Read Insights
//               </Button>
//             </Link>
//           </motion.div>

//           {/* Trust Stats */}
//           <motion.div
//             variants={itemVariants}
//             transition={{ duration: 0.6 }}
//             className="mt-14 flex flex-wrap justify-center gap-8 text-sm text-white/70"
//           >
//             <div className="flex items-center gap-2">
//               <span className="text-lg">📊</span>
//               <span>500+ products analysed</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <span className="text-lg">✓</span>
//               <span>No paid rankings</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <span className="text-lg">🇮🇳</span>
//               <span>Built for Indian users</span>
//             </div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Hero;


import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

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
    <section className="relative bg-neutral-900 pt-20 pb-10 md:pt-24 md:pb-12 overflow-hidden">
      {/* Dark Background Image */}
     <div className="absolute inset-0 z-0">
  <img
    src="/images/hero-bg.avif"
    alt="Financial background"
    className="w-full h-full object-cover"
    loading="eager"
  />

  {/* Soft light overlay for readability */}
  <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/20 to-white/30" />
</div>


      {/* Subtle Decorative Blurs */}
      <div className="absolute top-10 right-10 w-48 h-48 bg-primary-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-accent-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          variants={containerVariants}
          initial="initial"
          animate="animate"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            transition={{ duration: 0.4 }}
          >
            <span className="inline-block mb-4 px-4 py-1.5 bg-white/10 backdrop-blur-sm text-white/90 rounded-full text-xs md:text-sm font-medium">
              🔍 Honest • Unbiased • India-Focused
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-4 md:mb-5 leading-tight px-2"
            style={{ fontFamily: 'Lato, sans-serif', fontWeight: 900 }}
          >
            Financial Products Hide{' '}
            <span className="text-primary-400">Critical Fine Print</span>
            <br />
            <span className="text-white/80" style={{ fontWeight: 300 }}>
              We Help You See It Clearly
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            transition={{ duration: 0.5 }}
            className="text-base md:text-lg text-white mb-6 md:mb-7 leading-relaxed max-w-2xl mx-auto px-4"
            style={{ fontFamily: 'Lato, sans-serif' }}
          >
            Compare credit cards, insurance, and investments with{' '}
            <strong className="text-white">zero bias</strong>. Clear explanations, honest reviews.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            transition={{ duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-3 justify-center mb-6 md:mb-8 px-4"
          >
            <Link to="/credit-cards">
              <Button size="md" variant="primary" className="w-full sm:w-auto">
                Explore Credit Cards
              </Button>
            </Link>
            <Link to="/tools">
              <Button size="md" variant="outline" className="w-full sm:w-auto bg-gray-500 backdrop-blur-sm text-white border-white/30 hover:bg-white/20">
                Financial Tools
              </Button>
            </Link>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            variants={itemVariants}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-4 md:gap-6 text-xs md:text-sm text-white/90"
          >
            <div className="flex items-center gap-1.5">
              <span>📊</span>
              <span>500+ Products</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span>✓</span>
              <span>No Bias</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span>🇮🇳</span>
              <span>India-First</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;