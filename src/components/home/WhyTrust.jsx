


// import { motion } from 'framer-motion';

// const WhyTrust = () => {
//   const reasons = [
//     {
//       icon: '🔍',
//       title: 'Fine Print',
//       description: 'T&Cs analyzed minutely for you.',
//     },
//     {
//       icon: '⚖️',
//       title: 'No Bias',
//       description: 'Bad products? We call them out.',
//     },
//     {
//       icon: '🇮🇳',
//       title: 'India-Centric',
//       description: 'Expert local market understanding.',
//     },
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.15 }
//     }
//   };

//   const cardVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
//   };

//   return (
//     <section className="pt-12 pb-16 bg-gradient-to-br from-primary-50 to-blue-50 overflow-hidden">
//       <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        
//         {/* LEFT CONTENT */}
//         <motion.div
//           initial={{ opacity: 0, x: -40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7, ease: "easeOut" }}
//         >
//           <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900 mb-4 leading-tight">
//             Why Trust <br />
//             <span className="text-primary-600">UnfilteredMoney?</span>
//           </h2>
//           <p className="text-lg text-neutral-600 leading-relaxed max-w-md text-justify">
//             We’re not here to sell you products. We’re here to protect you from the traps hidden in the fine print.
//           </p>
//           <div className="mt-6 h-1 w-16 bg-primary-600 rounded-full" />
//         </motion.div>

//         {/* RIGHT CARDS */}
//         <motion.div 
//           className="grid grid-cols-1 sm:grid-cols-2 gap-4"
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//         >
//           {reasons.map((reason, idx) => (
//             <motion.div
//               key={idx}
//               variants={cardVariants}
//               whileHover={{ y: -5, transition: { duration: 0.2 } }}
//               className={`p-5 rounded-xl border border-neutral-100 shadow-sm hover:shadow-md transition-all bg-white ${idx === 2 ? 'sm:col-span-2' : ''}`}
//             >
//               <div className="text-3xl mb-3">{reason.icon}</div>
//               <h3 className="text-md font-bold text-neutral-900 mb-1">{reason.title}</h3>
//               <p className="text-xs text-neutral-500 text-justify">{reason.description}</p>
//             </motion.div>
//           ))}
//         </motion.div>

//       </div>
//     </section>
//   );
// };

// export default WhyTrust;


import { motion } from 'framer-motion';

const WhyTrust = () => {
  const reasons = [
    {
      icon: (
        <svg className="w-7 h-7 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: 'Fine Print analyzed for you',
      description: 'We dissect 50-page legal documents to find the "gotchas" that marketers hide in asterisk notes.',
    },
    {
      icon: (
        <svg className="w-7 h-7 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      ),
      title: 'No Bias',
      description: 'Zero referral links from banks. Our revenue comes from users, not the brands we review.',
    },
    {
      icon: (
        <svg className="w-7 h-7 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'India-Centric',
      description: 'Built specifically for the Indian regulatory landscape (RBI, SEBI, IRDAI). No generic global advice.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section className="py-10 md:py-14 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading - Center aligned like screenshot */}
        <motion.div
          className="text-center mb-6 md:mb-8"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2
            className="text-2xl md:text-3xl font-extrabold text-neutral-900"
            style={{ fontFamily: 'Lato, sans-serif' }}
          >
            Why Trust{' '}
            <span className="text-primary-600">UnfilteredMoney?</span>
          </h2>
          <p className="mt-2 text-sm md:text-base text-neutral-500" style={{ fontFamily: 'Lato, sans-serif' }}>
            We're not another comparison site. We're your financial forensic team.
          </p>
        </motion.div>

        {/* 3 Cards - horizontal on md+, stacked on mobile */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="bg-white rounded-2xl border border-neutral-200 p-5 md:p-6 hover:shadow-md transition-all duration-300"
            >
              {/* Icon circle */}
              <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center mb-4">
                {reason.icon}
              </div>
              <h3 className="text-sm md:text-base font-bold text-neutral-900 mb-2" style={{ fontFamily: 'Lato, sans-serif' }}>
                {reason.title}
              </h3>
              <p className="text-xs md:text-sm text-neutral-500 leading-relaxed text-justify" style={{ fontFamily: 'Lato, sans-serif' }}>
                {reason.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default WhyTrust;