// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { animationConfig } from '../../config/animation.config';

// const FAQ = () => {
//   const [openIndex, setOpenIndex] = useState(0);

//   const faqs = [
//     {
//       question: 'Are your recommendations truly unbiased?',
//       answer: 'Yes. We do not accept payment for rankings or reviews. Our team analyzes products based on merit, fees, features, and real-world usability. We may earn affiliate commissions when you click certain links, but this never influences our editorial decisions or rankings.',
//     },
//     {
//       question: 'Do I need to pay to use UnfilteredMoney?',
//       answer: 'No. All our content, reviews, comparisons, and calculators are 100% free. We believe financial literacy should be accessible to everyone. You never need to sign up, pay, or share personal data to access our resources.',
//     },
//     {
//       question: 'How often is your data updated?',
//       answer: 'We update our product reviews, interest rates, and card benefits daily. Major policy changes are reflected within 24 hours. For time-sensitive information like credit card devaluations or insurance policy changes, we publish immediate alerts.',
//     },
//     {
//       question: 'Is your advice specific to India?',
//       answer: 'Absolutely. Every review, calculator, and recommendation is tailored for Indian users. We consider Indian tax laws (80C, 80D), IRDAI & SEBI regulations, INR calculations, and India-specific financial products. Global advice does not work here.',
//     },
//     {
//       question: 'Do you sell user data?',
//       answer: 'Never. We do not collect, store, or sell your personal information. We use basic analytics to understand which content helps users most, but your privacy is sacred. No spam, no tracking pixels, no data mining.',
//     },
//     {
//       question: 'How do you make money?',
//       answer: 'We earn through display advertising and affiliate partnerships with some financial institutions. However, these partnerships never influence our editorial content. If a product is bad, we say so—regardless of commissions. Our reputation is worth more than any short-term revenue.',
//     },
//   ];

//   return (
//     <motion.section
//       className="py-16 bg-white"
//       {...animationConfig.sectionReveal}
//     >
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12">
//           <motion.h2
//             className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             Frequently Asked Questions
//           </motion.h2>
//           <motion.p
//             className="text-lg text-neutral-600"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//           >
//             Everything you need to know about UnfilteredMoney
//           </motion.p>
//         </div>

//         <div className="space-y-4">
//           {faqs.map((faq, index) => (
//             <motion.div
//               key={index}
//               className="bg-neutral-50 rounded-xl overflow-hidden border border-neutral-200"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//             >
//               <button
//                 className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-neutral-100 transition-colors"
//                 onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
//               >
//                 <h3 className="text-lg font-semibold text-neutral-900 pr-4">
//                   {faq.question}
//                 </h3>
//                 <motion.svg
//                   className="w-6 h-6 text-primary-600 flex-shrink-0"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   animate={{ rotate: openIndex === index ? 180 : 0 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                 </motion.svg>
//               </button>

//               <AnimatePresence>
//                 {openIndex === index && (
//                   <motion.div
//                     initial={{ height: 0, opacity: 0 }}
//                     animate={{ height: 'auto', opacity: 1 }}
//                     exit={{ height: 0, opacity: 0 }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     <div className="px-6 pb-5 text-neutral-700 leading-relaxed">
//                       {faq.answer}
//                     </div>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </motion.section>
//   );
// };

// export default FAQ;

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'Are your recommendations truly unbiased?',
      answer: 'Yes. We do not accept payment for rankings. Our team analyzes products based on merit, fees, and features.',
    },
    {
      question: 'Do I need to pay to use UnfilteredMoney?',
      answer: 'No. All our content, reviews, and calculators are 100% free. No sign-up required.',
    },
    {
      question: 'How often is your data updated?',
      answer: 'We update product reviews and interest rates daily. Major policy changes are reflected within 24 hours.',
    },
    {
      question: 'Is your advice specific to India?',
      answer: 'Absolutely. Every review considers Indian tax laws, IRDAI & SEBI regulations, and INR calculations.',
    },
  ];

  return (
    <motion.section
      className="py-10 md:py-12 bg-neutral-50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-10">
          <motion.h2
            className="text-2xl md:text-3xl font-bold text-neutral-900 mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ fontFamily: 'Lato, sans-serif', fontWeight: 900 }}
          >
            Frequently Asked Questions
          </motion.h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl border border-neutral-200 overflow-hidden"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <button
                className="w-full px-5 py-4 text-left flex items-center justify-between hover:bg-neutral-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <h3 className="text-sm md:text-base font-semibold text-neutral-900 pr-4" style={{ fontFamily: 'Lato, sans-serif' }}>
                  {faq.question}
                </h3>
                <motion.svg
                  className="w-5 h-5 text-primary-600 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </motion.svg>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-5 pb-4 text-sm text-neutral-700 leading-relaxed" style={{ fontFamily: 'Lato, sans-serif' }}>
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default FAQ;