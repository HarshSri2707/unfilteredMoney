

// import { motion } from 'framer-motion';

// const WhyTrust = () => {
//   const reasons = [
//     {
//       icon: '🔍',
//       title: 'We Read the Fine Print',
//       description: 'T&Cs analyzed minutely so you make hassle-free decisions',
//     },
//     {
//       icon: '⚖️',
//       title: 'No Bias',
//       description: 'Bad products? We say it loud. Only real recommendations',
//     },
//     {
//       icon: '🇮🇳',
//       title: 'India-Centric',
//       description: 'Expert understanding of Indian tax laws and market realities',
//     },
//   ];

//   return (
//     <section className="py-8 md:py-10 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
//       {/* Decorative elements */}
//       <div className="absolute top-0 left-0 w-64 h-64 bg-blue-200 rounded-full blur-3xl opacity-20" />
//       <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-200 rounded-full blur-3xl opacity-20" />
      
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
//         <motion.h2
//           className="text-2xl md:text-3xl font-bold text-neutral-900 text-center mb-6 md:mb-8"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           style={{ fontFamily: 'Lato, sans-serif', fontWeight: 900 }}
//         >
//           Why Trust UnfilteredMoney?
//         </motion.h2>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           {reasons.map((reason, idx) => (
//             <motion.div
//               key={idx}
//               className="relative bg-white/60 backdrop-blur-md rounded-2xl p-5 border border-white/40 shadow-lg hover:shadow-xl transition-all duration-300"
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ delay: idx * 0.1 }}
//               whileHover={{ y: -8 }}
//             >
//               {/* Gradient blob */}
//               <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-2xl" />
              
//               <div className="relative">
//                 <div className="text-4xl mb-3">{reason.icon}</div>
//                 <h3 className="text-lg font-bold text-neutral-900 mb-2" style={{ fontFamily: 'Lato, sans-serif' }}>
//                   {reason.title}
//                 </h3>
//                 <p className="text-sm text-neutral-600 leading-relaxed" style={{ fontFamily: 'Lato, sans-serif' }}>
//                   {reason.description}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyTrust;

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
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        
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
          <p className="text-lg text-neutral-600 leading-relaxed max-w-md">
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
              <p className="text-xs text-neutral-500">{reason.description}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default WhyTrust;