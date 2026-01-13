// import { motion } from 'framer-motion';
// import { animationConfig } from '../../config/animation.config';
// import Card from '../ui/Card';

// const HowItWorks = () => {
//   const steps = [
//     {
//       number: '01',
//       icon: '🔍',
//       title: 'Deep Research',
//       description: 'We read every T&C, policy document, and fee structure line by line.',
//     },
//     {
//       number: '02',
//       icon: '⚖️',
//       title: 'Unbiased Analysis',
//       description: 'No sponsored rankings. We compare pros, cons, and hidden costs objectively.',
//     },
//     {
//       number: '03',
//       icon: '🇮🇳',
//       title: 'India-First Focus',
//       description: 'Every review considers Indian tax laws, regulations, and market realities.',
//     },
//     {
//       number: '04',
//       icon: '📊',
//       title: 'Real-World Testing',
//       description: 'We test eligibility, rejection rates, claim settlement, and actual costs.',
//     },
//     {
//       number: '05',
//       icon: '📝',
//       title: 'Honest Verdict',
//       description: 'We tell you exactly who should buy it and who should avoid it.',
//     },
//   ];

//   return (
//     <motion.section
//       className="py-16 bg-neutral-50"
//       {...animationConfig.sectionReveal}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Heading */}
//         <div className="text-center mb-12">
//           <motion.h2
//             className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             How We Evaluate Financial Products
//           </motion.h2>
//           <motion.p
//             className="text-lg text-neutral-600 max-w-3xl mx-auto"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//           >
//             Our 5-step methodology ensures you get honest, India-specific financial advice
//           </motion.p>
//         </div>

//         {/* Steps */}
//         <motion.div
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 items-stretch"
//           variants={animationConfig.staggerContainer}
//           initial="initial"
//           whileInView="animate"
//           viewport={{ once: true }}
//         >
//           {steps.map((step, index) => (
//             <motion.div
//               key={index}
//               variants={animationConfig.staggerItem}
//               className="h-full"
//             >
//               <Card hover className="h-full flex flex-col">
//                 <div className="p-6 text-center flex flex-col flex-1">
//                   {/* Icon + Number */}
//                   <div className="mb-4">
//                     <div className="w-16 h-16 mx-auto bg-primary-100 rounded-full flex items-center justify-center mb-3">
//                       <span className="text-3xl">{step.icon}</span>
//                     </div>
//                     <span className="text-4xl font-bold text-primary-600 opacity-20">
//                       {step.number}
//                     </span>
//                   </div>

//                   {/* Title */}
//                   <h3 className="text-lg font-bold text-neutral-900 mb-2">
//                     {step.title}
//                   </h3>

//                   {/* Description */}
//                   <p className="text-sm text-neutral-600 mt-auto">
//                     {step.description}
//                   </p>
//                 </div>
//               </Card>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Highlight Box */}
//         <motion.div
//           className="mt-12 bg-blue-50 border border-blue-200 rounded-xl p-8"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//         >
//           <div className="flex items-start space-x-4">
//             <div className="text-4xl">💡</div>
//             <div className="flex-1">
//               <h3 className="text-xl font-bold text-neutral-900 mb-2">
//                 What Makes Us Different?
//               </h3>
//               <p className="text-neutral-700">
//                 Unlike comparison sites that earn commissions on every click, we focus on{' '}
//                 <strong>editorial independence</strong>. We analyze fees & hidden charges,
//                 eligibility & rejection chances, long-term costs, real-world usability,
//                 and Indian regulations & tax impact.
//               </p>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </motion.section>
//   );
// };

// export default HowItWorks;


import { motion } from 'framer-motion';
import Card from '../ui/Card';

const HowItWorks = () => {
  const steps = [
    {
      icon: '🔍',
      title: 'Deep Research',
      description: 'Every policy & clause is analyzed line by line.',
    },
    {
      icon: '⚖️',
      title: 'Unbiased Comparison',
      description: 'No sponsored rankings or paid placements.',
    },
    {
      icon: '🇮🇳',
      title: 'India-First Lens',
      description: 'Tax laws & RBI rules are always considered.',
    },
  ];

  return (
    <section className="py-24 bg-neutral-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT STEPS (Animated from Left) */}
        <div className="space-y-6 order-2 lg:order-1">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
            >
              <Card hover className="p-6 flex gap-5 items-center bg-white border-none shadow-sm group">
                <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                <div>
                  <h3 className="font-bold text-neutral-900 text-lg">
                    {step.title}
                  </h3>
                  <p className="text-sm text-neutral-600">
                    {step.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* RIGHT CONTENT (Animated from Right) */}
        <motion.div
          className="order-1 lg:order-2"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-900 mb-6 leading-tight">
            How We Evaluate <br />
            <span className="text-primary-600">Financial Products</span>
          </h2>

          <p className="text-xl text-neutral-600 leading-relaxed mb-8">
            Our process is designed to expose hidden costs and marketing traps 
            before they hit your wallet.
          </p>

          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-primary-600 p-6 rounded-2xl shadow-lg text-white"
          >
            <p className="text-lg font-medium">
              💡 <strong>No commissions. No incentives.</strong><br />
              <span className="opacity-90">Just brutally honest financial reviews.</span>
            </p>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default HowItWorks;
