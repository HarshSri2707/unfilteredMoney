

// // import { motion } from 'framer-motion';
// // import {
// //   Search,
// //   Scale,
// //   Landmark,
// //   BadgeCheck,
// // } from 'lucide-react';
// // import Card from '../ui/Card';

// // const HowItWorks = () => {
// //   const steps = [
// //     {
// //       title: 'Deep Research',
// //       description: 'Every policy & clause is analyzed line by line to find hidden terms.',
// //       icon: Search,
// //     },
// //     {
// //       title: 'Unbiased Comparison',
// //       description: 'No sponsored rankings. We compare products objectively and honestly.',
// //       icon: Scale,
// //     },
// //     {
// //       title: 'India-First Lens',
// //       description: 'Tax laws, RBI rules, and local market realities are always considered.',
// //       icon: Landmark,
// //     },
// //     {
// //       title: 'Zero Commission',
// //       description: 'No incentives from banks. Just brutally honest financial reviews for you.',
// //       icon: BadgeCheck,
// //     },
// //   ];

// //   return (
// //     <section className="py-10 bg-neutral-50 overflow-hidden">
// //       <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">

// //         {/* LEFT CONTENT */}
// //         <motion.div
// //           className="lg:pt-4"
// //           initial={{ opacity: 0, x: -30 }}
// //           whileInView={{ opacity: 1, x: 0 }}
// //           viewport={{ once: true }}
// //           transition={{ duration: 0.6 }}
// //         >
// //           <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900 mb-3 leading-tight">
// //             How We Evaluate <br />
// //             <span className="text-primary-600">Financial Products?</span>
// //           </h2>

// //           <p className="text-base text-neutral-600 leading-relaxed max-w-sm mb-4 text-justify">
// //             Our process is designed to expose hidden costs before they hit your wallet.
// //           </p>

// //           <div className="h-1 w-12 bg-primary-600 rounded-full" />
// //         </motion.div>

// //         {/* RIGHT CARDS */}
// //         <div className="space-y-3">
// //           {steps.map((step, idx) => {
// //             const Icon = step.icon;

// //             return (
// //               <motion.div
// //                 key={idx}
// //                 initial={{ opacity: 0, y: 15 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 viewport={{ once: true }}
// //                 transition={{ delay: idx * 0.1, duration: 0.4 }}
// //               >
// //                 <Card className="p-5 rounded-xl bg-white border border-neutral-100 hover:border-primary-200 shadow-sm transition-all">
// //                   <div className="flex items-start gap-4">

// //                     {/* ICON */}
// //                     <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center text-primary-600">
// //                       <Icon size={20} strokeWidth={2.2} />
// //                     </div>

// //                     {/* TEXT */}
// //                     <div>
// //                       <h3 className="font-bold text-lg text-neutral-900 mb-1">
// //                         {step.title}
// //                       </h3>
// //                       <p className="text-sm text-neutral-500 leading-snug text-justify">
// //                         {step.description}
// //                       </p>
// //                     </div>

// //                   </div>
// //                 </Card>
// //               </motion.div>
// //             );
// //           })}
// //         </div>

// //       </div>
// //     </section>
// //   );
// // };

// // export default HowItWorks;


// import { motion } from 'framer-motion';
// import { Search, Scale, Landmark, BadgeCheck } from 'lucide-react';

// const HowItWorks = () => {
//   const steps = [
//     {
//       title: 'Deep Research',
//       description: 'Scouring legal filings & policy words.',
//       icon: Search,
//     },
//     {
//       title: 'Unbiased Comparison',
//       description: 'Benchmarking against 100+ competitors.',
//       icon: Scale,
//     },
//     {
//       title: 'India-First Lens',
//       description: 'Adjusting for local tax & inflation.',
//       icon: Landmark,
//     },
//     {
//       title: 'Zero Commission',
//       description: 'Final score based only on value.',
//       icon: BadgeCheck,
//     },
//   ];

//   return (
//     <section className="py-10 md:py-14 bg-gradient-to-b from-white to-gray-200 overflow-hidden">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

//         {/* Heading - Center aligned like screenshot */}
//         <motion.div
//           className="text-center mb-8 md:mb-10"
//           initial={{ opacity: 0, y: 16 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//         >
//           <h2
//             className="text-2xl md:text-3xl font-extrabold text-neutral-900"
//             style={{ fontFamily: 'Lato, sans-serif' }}
//           >
//             How We Actually{' '}
//             <span className="text-primary-600">Evaluate</span>
//           </h2>
//         </motion.div>

//         {/* 4 Steps - horizontal on md+, 2x2 grid on sm, stacked on xs */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
//           {steps.map((step, idx) => {
//             const Icon = step.icon;
//             return (
//               <motion.div
//                 key={idx}
//                 className="flex flex-col items-center text-center"
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: idx * 0.1, duration: 0.4 }}
//               >
//                 {/* Circle Icon */}
//                 <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary-600 flex items-center justify-center mb-4 shadow-md">
//                   <Icon size={24} strokeWidth={2} className="text-white" />
//                 </div>

//                 <h3
//                   className="text-sm md:text-base font-bold text-neutral-900 mb-1"
//                   style={{ fontFamily: 'Lato, sans-serif' }}
//                 >
//                   {step.title}
//                 </h3>
//                 <p
//                   className="text-xs md:text-sm text-primary-600 leading-snug"
//                   style={{ fontFamily: 'Lato, sans-serif' }}
//                 >
//                   {step.description}
//                 </p>
//               </motion.div>
//             );
//           })}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default HowItWorks;


// import { motion } from 'framer-motion';
// import {
//   Search,
//   Scale,
//   Landmark,
//   BadgeCheck,
// } from 'lucide-react';
// import Card from '../ui/Card';

// const HowItWorks = () => {
//   const steps = [
//     {
//       title: 'Deep Research',
//       description: 'Every policy & clause is analyzed line by line to find hidden terms.',
//       icon: Search,
//     },
//     {
//       title: 'Unbiased Comparison',
//       description: 'No sponsored rankings. We compare products objectively and honestly.',
//       icon: Scale,
//     },
//     {
//       title: 'India-First Lens',
//       description: 'Tax laws, RBI rules, and local market realities are always considered.',
//       icon: Landmark,
//     },
//     {
//       title: 'Zero Commission',
//       description: 'No incentives from banks. Just brutally honest financial reviews for you.',
//       icon: BadgeCheck,
//     },
//   ];

//   return (
//     <section className="py-10 bg-neutral-50 overflow-hidden">
//       <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">

//         {/* LEFT CONTENT */}
//         <motion.div
//           className="lg:pt-4"
//           initial={{ opacity: 0, x: -30 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900 mb-3 leading-tight">
//             How We Evaluate <br />
//             <span className="text-primary-600">Financial Products?</span>
//           </h2>

//           <p className="text-base text-neutral-600 leading-relaxed max-w-sm mb-4 text-justify">
//             Our process is designed to expose hidden costs before they hit your wallet.
//           </p>

//           <div className="h-1 w-12 bg-primary-600 rounded-full" />
//         </motion.div>

//         {/* RIGHT CARDS */}
//         <div className="space-y-3">
//           {steps.map((step, idx) => {
//             const Icon = step.icon;

//             return (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, y: 15 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: idx * 0.1, duration: 0.4 }}
//               >
//                 <Card className="p-5 rounded-xl bg-white border border-neutral-100 hover:border-primary-200 shadow-sm transition-all">
//                   <div className="flex items-start gap-4">

//                     {/* ICON */}
//                     <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center text-primary-600">
//                       <Icon size={20} strokeWidth={2.2} />
//                     </div>

//                     {/* TEXT */}
//                     <div>
//                       <h3 className="font-bold text-lg text-neutral-900 mb-1">
//                         {step.title}
//                       </h3>
//                       <p className="text-sm text-neutral-500 leading-snug text-justify">
//                         {step.description}
//                       </p>
//                     </div>

//                   </div>
//                 </Card>
//               </motion.div>
//             );
//           })}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default HowItWorks;


import { motion } from 'framer-motion';
import { Search, Scale, Landmark, BadgeCheck } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      title: 'Deep Research',
      description: 'Scouring legal filings & policy words.',
      icon: Search,
    },
    {
      title: 'Unbiased Comparison',
      description: 'Benchmarking against 100+ competitors.',
      icon: Scale,
    },
    {
      title: 'India-First Lens',
      description: 'Adjusting for local tax & inflation.',
      icon: Landmark,
    },
    {
      title: 'Zero Commission',
      description: 'Final score based only on value.',
      icon: BadgeCheck,
    },
  ];

  return (
    <section className="py-10 md:py-14 bg-gradient-to-b from-white to-gray-200 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading - Center aligned like screenshot */}
        <motion.div
          className="text-center mb-8 md:mb-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2
            className="text-2xl md:text-3xl font-extrabold text-neutral-900"
            style={{ fontFamily: 'Lato, sans-serif' }}
          >
            How We Actually{' '}
            <span className="text-primary-600">Evaluate</span>
          </h2>
        </motion.div>

        {/* 4 Steps - horizontal on md+, 2x2 grid on sm, stacked on xs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
              >
                {/* Circle Icon */}
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary-600 flex items-center justify-center mb-4 shadow-md">
                  <Icon size={24} strokeWidth={2} className="text-white" />
                </div>

                <h3
                  className="text-sm md:text-base font-extrabold text-neutral-900 mb-1"
                  style={{ fontFamily: 'Lato, sans-serif' }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-xs md:text-sm font-semibold text-primary-600 leading-snug"
                  style={{ fontFamily: 'Lato, sans-serif' }}
                >
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;