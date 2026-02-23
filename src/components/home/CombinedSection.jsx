


// // import { motion } from 'framer-motion';
// // import { Link } from 'react-router-dom';
// // import { creditCardsData } from '../../data/creditCards.data';
// // import { insuranceData } from '../../data/insurance.data';
// // import { investmentsData } from '../../data/investments.data';

// // const CombinedSection = () => {
// //   const categories = [
// //     { 
// //       icon: '💳', 
// //       name: 'Credit Cards', 
// //       count: '50+', 
// //       link: '/credit-cards', 
// //       color: 'bg-blue-50',
// //       hoverColor: 'hover:bg-blue-100'
// //     },
// //     { 
// //       icon: '🛡️', 
// //       name: 'Insurance', 
// //       count: '100+', 
// //       link: '/insurance', 
// //       color: 'bg-green-50',
// //       hoverColor: 'hover:bg-green-100'
// //     },
// //     { 
// //       icon: '📈', 
// //       name: 'Investments', 
// //       count: '200+', 
// //       link: '/investments', 
// //       color: 'bg-purple-50',
// //       hoverColor: 'hover:bg-purple-100'
// //     },
// //   ];

// //   const topPicks = [
// //     { ...creditCardsData.topPicks[0], type: 'card', img: '/picks/HDFC-Regalia.webp' },
// //     { ...insuranceData.topPicks[0], type: 'insurance', img: '/picks/insurance-1.webp' },
// //     { ...investmentsData.topPicks[0], type: 'investment', img: '/picks/parag-fund.webp' },
// //   ];

// //   return (
// //     <>
// //       {/* Explore Categories - Simple Icon Cards */}
// //       {/* Explore Financial Products */}
// // {/* Explore Financial Products — Refined Utility */}
// // <section className="py-10 md:py-12 bg-white">
// //   <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

// //     {/* Heading */}
// //     <motion.div
// //       className="mb-8 text-center"
// //       initial={{ opacity: 0, y: 16 }}
// //       whileInView={{ opacity: 1, y: 0 }}
// //       viewport={{ once: true }}
// //     >
// //       <h2
// //         className="text-2xl md:text-3xl font-extrabold text-neutral-900"
// //         style={{ fontFamily: 'Lato, sans-serif' }}
// //       >
// //         Explore Financial Products
// //       </h2>
// //     </motion.div>

// //     {/* Icons Grid */}
// //     <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-8 gap-x-6 place-items-center">
      

// //       {categories.map((item, index) => (
// //         <motion.div
// //           key={index}
// //           whileHover={{ y: -4 }}
// //           transition={{ duration: 0.25 }}
// //           className="flex flex-col items-center text-center cursor-pointer group w-full max-w-[160px]"
// //         >
// //            <Link to={item.link}>
// //           {/* Icon Wrapper */}
// //           <div
// //             className={`
// //               w-20 h-20 md:w-24 md:h-24
// //               rounded-full
// //               flex items-center justify-center
// //               mb-3
// //               transition-transform duration-300
// //               ${item.color}
// //               group-hover:scale-105
// //             `}
// //           >
// //             <span className="text-3xl md:text-4xl">
// //               {item.icon}
// //             </span>
// //           </div>

// //           {/* Title */}
// //           <p className="text-sm md:text-base font-semibold text-neutral-900 leading-tight">
// //             {item.name}
// //           </p>

// //           {/* Subtext — force single line */}
// //           <p className="text-xs text-neutral-500 mt-0.5 whitespace-nowrap">
// //             {item.count} products
// //           </p>
// //           </Link>
// //         </motion.div>
// //       ))}

// //     </div>
// //   </div>
// // </section>




// //       {/* Top Picks - Integrated Image Design */}
// //       {/* Top Picks - CLEAN & CONSISTENT */}
// //       <section className="py-8 md:py-10 bg-white">
// //         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="mb-5 md:mb-6">
// //             <motion.h2
// //               className="text-2xl md:text-3xl font-bold text-neutral-900 mb-1"
// //               initial={{ opacity: 0, y: 20 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               viewport={{ once: true }}
// //               style={{ fontFamily: 'Lato, sans-serif', fontWeight: 900 }}
// //             >
// //               Our Top Picks
// //             </motion.h2>
// //             <p className="text-sm text-neutral-600" style={{ fontFamily: 'Lato, sans-serif' }}>
// //               Products we actually recommend this month
// //             </p>
// //           </div>

// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
// //             {topPicks.map((pick, index) => (
// //               <motion.div
// //                 key={index}
// //                 initial={{ opacity: 0, y: 20 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 viewport={{ once: true }}
// //                 transition={{ delay: index * 0.1 }}
// //                 className="h-full"
// //               >
// //                 <div className="group bg-white rounded-2xl border-2 border-neutral-200 hover:border-primary-400 hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col">
// //                   {/* Image Section */}
// //                 {/* Image Section */}
// {/* <div className="relative h-48 w-full shrink-0 overflow-hidden bg-neutral-50 flex items-center justify-center">
//   <img
//     src={pick.img}
//     alt={pick.name}
//     className="w-full h-full object-contain-cover transition-transform duration-300"
//   /> */}

// //   {/* Gradient Overlay (optional) */}
// //   <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />

// //   {/* Rating Badge */}
// //   <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full shadow-lg">
// //     <span className="text-sm font-bold text-amber-600">⭐ {pick.rating}</span>
// //   </div>
// // </div>

                  
// //                   {/* Content Section */}
// //                   <div className="p-4 md:p-5 flex flex-col flex-1">
// //                     <div className="mb-3">
// //                       <h3 className="text-lg md:text-xl font-bold text-neutral-900 mb-1 group-hover:text-primary-600 transition-colors" style={{ fontFamily: 'Lato, sans-serif' }}>
// //                         {pick.name}
// //                       </h3>
// //                       <p className="text-sm text-neutral-600">{pick.bank || pick.provider || pick.category}</p>
// //                     </div>
                    
// //                     {/* Pros */}
// //                     <div className="space-y-2 mb-4">
// //                       <p className="text-xs font-semibold text-neutral-700">Why We Picked This:</p>
// //                       {pick.pros.slice(0, 2).map((pro, i) => (
// //                         <div key={i} className="flex items-start gap-2">
// //                           <div className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
// //                             <span className="text-green-600 text-xs">✓</span>
// //                           </div>
// //                           <span className="text-sm text-neutral-700 leading-snug text-justify" style={{ fontFamily: 'Lato, sans-serif' }}>{pro}</span>
// //                         </div>
// //                       ))}
// //                     </div>
                    
// //                     {/* Best For - Always at bottom */}
// //                     <div className="pt-3 border-t border-neutral-200 mt-auto">
// //                       <p className="text-xs text-neutral-500 mb-1">Best For:</p>
// //                       <p className="text-sm font-medium text-neutral-900 leading-snug">{pick.bestFor}</p>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //     </>
// //   );
// // };

// // export default CombinedSection;


// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import { creditCardsData } from '../../data/creditCards.data';
// import { insuranceData } from '../../data/insurance.data';
// import { investmentsData } from '../../data/investments.data';

// const CombinedSection = () => {
//   const categories = [
//     {
//       icon: (
//         <svg className="w-8 h-8 md:w-9 md:h-9 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
//         </svg>
//       ),
//       name: 'Credit Cards',
//       description: 'The best for rewards & lounge access, minus the debt traps.',
//       link: '/credit-cards',
//     },
//     {
//       icon: (
//         <svg className="w-8 h-8 md:w-9 md:h-9 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
//         </svg>
//       ),
//       name: 'Insurance',
//       description: 'Term, health, and car insurance that actually pays out claims.',
//       link: '/insurance',
//     },
//     {
//       icon: (
//         <svg className="w-8 h-8 md:w-9 md:h-9 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
//         </svg>
//       ),
//       name: 'Investments',
//       description: 'Mutual funds, FDs, and Bonds vetted for risk-adjusted returns.',
//       link: '/investments',
//     },
//   ];

//   const topPicks = [
//     { ...creditCardsData.topPicks[0], type: 'card', img: '/picks/HDFC-Regalia.webp', cta: 'Apply Now', ctaLink: '/credit-cards' },
//     { ...insuranceData.topPicks[0], type: 'insurance', img: '/picks/insurance-1.webp', cta: 'Apply', ctaLink: '/insurance' },
//     { ...investmentsData.topPicks[0], type: 'investment', img: '/picks/parag-fund.webp', cta: 'Invest', ctaLink: '/investments' },
//   ];

//   return (
//     <>
//       {/* ── EXPLORE FINANCIAL PRODUCTS ── */}
//       <section className="py-10 md:py-12 bg-white">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

//           <motion.div
//             className="text-center mb-8"
//             initial={{ opacity: 0, y: 16 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//           >
//             <h2
//               className="text-2xl md:text-3xl font-extrabold text-neutral-900"
//               style={{ fontFamily: 'Lato, sans-serif' }}
//             >
//               Explore <span className="text-primary-600">Financial</span> Products
//             </h2>
//           </motion.div>

//           {/* 3 icon tiles – matching screenshot style */}
//           <div className="grid grid-cols-3 gap-3 md:gap-6">
//             {categories.map((item, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 16 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//               >
//                 <Link to={item.link}>
//                   <div className="group flex flex-col items-center text-center p-4 md:p-6 rounded-2xl  bg-white hover:bg-blue-50 hover:shadow-md transition-all duration-300 cursor-pointer h-full">
//                     {/* Icon circle */}
//                     <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary-50 flex items-center justify-center mb-3 group-hover:bg-primary-100 transition-colors">
//                       {item.icon}
//                     </div>
//                     <h3 className="text-sm md:text-base font-bold text-neutral-900 mb-1" style={{ fontFamily: 'Lato, sans-serif' }}>
//                       {item.name}
//                     </h3>
//                     <p className="text-xs text-neutral-500 leading-relaxed hidden sm:block" style={{ fontFamily: 'Lato, sans-serif' }}>
//                       {item.description}
//                     </p>
//                   </div>
//                 </Link>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ── OUR TOP PICKS ── */}
//     <section className="py-10 md:py-14 bg-gray-50">
//   <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

//     {/* Header */}
//     <div className="flex items-center justify-between mb-8">
//       <motion.h2
//         className="text-2xl md:text-3xl font-extrabold text-neutral-900"
//         initial={{ opacity: 0, y: 16 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//       >
//         Our Top Picks
//       </motion.h2>

     
//     </div>

//     {/* Cards */}
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

//       {topPicks.map((pick, index) => (
//         <motion.div
//           key={index}
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: index * 0.1 }}
//           className="h-full"
//         >
//           <div className="group bg-white rounded-2xl border-2 border-neutral-200 hover:border-primary-300 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col min-h-[520px] h-full">

//             {/* Image */}
//             <div className="relative w-full h-48 shrink-0 overflow-hidden bg-neutral-50 flex items-center justify-center">
//               <img
//                 src={pick.img}
//                 alt={pick.name}
//                 className="w-full h-full object-contain-cover transition-transform duration-500 "
//               />

//               {/* Optional Rating Badge */}
//               {pick.rating && (
//                 <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-md">
//                   <span className="text-sm font-bold text-amber-600">
//                     ⭐ {pick.rating}
//                   </span>
//                 </div>
//               )}
//             </div>

//             {/* Content */}
//             <div className="p-5 flex flex-col flex-1">

//               {/* Title */}
//               <div className="mb-4">
//                 <h3 className="text-lg font-bold text-neutral-900 mb-1 group-hover:text-primary-600 transition-colors">
//                   {pick.name}
//                 </h3>
//                 <p className="text-sm text-neutral-600">
//                   {pick.bank || pick.provider || pick.category}
//                 </p>
//               </div>

//               {/* Description */}
//               <div className="mb-6 flex-1">
//                 <p className="text-xs font-semibold text-neutral-700 mb-2">
//                   Benefits & Features
//                 </p>
//                 <p className="text-sm text-neutral-600 leading-relaxed">
//                   {pick.pros
//                     ? pick.pros.slice(0, 2).join('. ')
//                     : pick.description || ''}
//                 </p>
//               </div>

//               {/* Stats */}
//               <div className="border-t border-neutral-200 pt-4 mb-5 space-y-2">

//                 {pick.type === 'card' && (
//                   <div className="flex justify-between text-sm">
//                     <span className="text-neutral-500">Annual Fee</span>
//                     <span className="font-bold text-neutral-900">
//                       {pick.annualFee || 'NIL'}
//                     </span>
//                   </div>
//                 )}

//                 {pick.type === 'insurance' && (
//                   <>
//                     <div className="flex justify-between text-sm">
//                       <span className="text-neutral-500">Coverage</span>
//                       <span className="font-bold text-neutral-900">
//                         {pick.coverage || '5L'}
//                       </span>
//                     </div>
//                     <div className="flex justify-between text-sm">
//                       <span className="text-neutral-500">Claim Ratio</span>
//                       <span className="font-bold text-neutral-900">
//                         {pick.claimSettlement || '96.8%'}
//                       </span>
//                     </div>
//                   </>
//                 )}

//                 {pick.type === 'investment' && (
//                   <div className="flex justify-between text-sm">
//                     <span className="text-neutral-500">Returns</span>
//                     <span className="font-bold text-neutral-900">
//                       {pick.returns || '—'}
//                     </span>
//                   </div>
//                 )}

//               </div>

//               {/* CTA */}
//               <Link
//                 to={pick.ctaLink}
//                 className="w-full block text-center py-3 rounded-xl bg-primary-600 text-white text-sm font-bold hover:bg-primary-700 active:scale-[0.98] transition-all"
//               >
//                 {pick.cta}
//               </Link>

//             </div>
//           </div>
//         </motion.div>
//       ))}

//     </div>
//   </div>
// </section>
//     </>
//   );
// };

// export default CombinedSection;


// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import { creditCardsData } from '../../data/creditCards.data';
// import { insuranceData } from '../../data/insurance.data';
// import { investmentsData } from '../../data/investments.data';

// const CombinedSection = () => {
//   const categories = [
//     { 
//       icon: '💳', 
//       name: 'Credit Cards', 
//       count: '50+', 
//       link: '/credit-cards', 
//       color: 'bg-blue-50',
//       hoverColor: 'hover:bg-blue-100'
//     },
//     { 
//       icon: '🛡️', 
//       name: 'Insurance', 
//       count: '100+', 
//       link: '/insurance', 
//       color: 'bg-green-50',
//       hoverColor: 'hover:bg-green-100'
//     },
//     { 
//       icon: '📈', 
//       name: 'Investments', 
//       count: '200+', 
//       link: '/investments', 
//       color: 'bg-purple-50',
//       hoverColor: 'hover:bg-purple-100'
//     },
//   ];

//   const topPicks = [
//     { ...creditCardsData.topPicks[0], type: 'card', img: '/picks/HDFC-Regalia.webp' },
//     { ...insuranceData.topPicks[0], type: 'insurance', img: '/picks/insurance-1.webp' },
//     { ...investmentsData.topPicks[0], type: 'investment', img: '/picks/parag-fund.webp' },
//   ];

//   return (
//     <>
//       {/* Explore Categories - Simple Icon Cards */}
//       {/* Explore Financial Products */}
// {/* Explore Financial Products — Refined Utility */}
// <section className="py-10 md:py-12 bg-white">
//   <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

//     {/* Heading */}
//     <motion.div
//       className="mb-8 text-center"
//       initial={{ opacity: 0, y: 16 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//     >
//       <h2
//         className="text-2xl md:text-3xl font-extrabold text-neutral-900"
//         style={{ fontFamily: 'Lato, sans-serif' }}
//       >
//         Explore Financial Products
//       </h2>
//     </motion.div>

//     {/* Icons Grid */}
//     <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-8 gap-x-6 place-items-center">
      

//       {categories.map((item, index) => (
//         <motion.div
//           key={index}
//           whileHover={{ y: -4 }}
//           transition={{ duration: 0.25 }}
//           className="flex flex-col items-center text-center cursor-pointer group w-full max-w-[160px]"
//         >
//            <Link to={item.link}>
//           {/* Icon Wrapper */}
//           <div
//             className={`
//               w-20 h-20 md:w-24 md:h-24
//               rounded-full
//               flex items-center justify-center
//               mb-3
//               transition-transform duration-300
//               ${item.color}
//               group-hover:scale-105
//             `}
//           >
//             <span className="text-3xl md:text-4xl">
//               {item.icon}
//             </span>
//           </div>

//           {/* Title */}
//           <p className="text-sm md:text-base font-semibold text-neutral-900 leading-tight">
//             {item.name}
//           </p>

//           {/* Subtext — force single line */}
//           <p className="text-xs text-neutral-500 mt-0.5 whitespace-nowrap">
//             {item.count} products
//           </p>
//           </Link>
//         </motion.div>
//       ))}

//     </div>
//   </div>
// </section>




//       {/* Top Picks - Integrated Image Design */}
//       {/* Top Picks - CLEAN & CONSISTENT */}
//       <section className="py-8 md:py-10 bg-white">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="mb-5 md:mb-6">
//             <motion.h2
//               className="text-2xl md:text-3xl font-bold text-neutral-900 mb-1"
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               style={{ fontFamily: 'Lato, sans-serif', fontWeight: 900 }}
//             >
//               Our Top Picks
//             </motion.h2>
//             <p className="text-sm text-neutral-600" style={{ fontFamily: 'Lato, sans-serif' }}>
//               Products we actually recommend this month
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
//             {topPicks.map((pick, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 className="h-full"
//               >
//                 <div className="group bg-white rounded-2xl border-2 border-neutral-200 hover:border-primary-400 hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col">
//                   {/* Image Section */}
//                 {/* Image Section */}
{/* <div className="relative h-48 w-full shrink-0 overflow-hidden bg-neutral-50 flex items-center justify-center">
  <img
    src={pick.img}
    alt={pick.name}
    className="w-full h-full object-contain-cover transition-transform duration-300"
  /> */}

//   {/* Gradient Overlay (optional) */}
//   <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />

//   {/* Rating Badge */}
//   <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full shadow-lg">
//     <span className="text-sm font-bold text-amber-600">⭐ {pick.rating}</span>
//   </div>
// </div>

                  
//                   {/* Content Section */}
//                   <div className="p-4 md:p-5 flex flex-col flex-1">
//                     <div className="mb-3">
//                       <h3 className="text-lg md:text-xl font-bold text-neutral-900 mb-1 group-hover:text-primary-600 transition-colors" style={{ fontFamily: 'Lato, sans-serif' }}>
//                         {pick.name}
//                       </h3>
//                       <p className="text-sm text-neutral-600">{pick.bank || pick.provider || pick.category}</p>
//                     </div>
                    
//                     {/* Pros */}
//                     <div className="space-y-2 mb-4">
//                       <p className="text-xs font-semibold text-neutral-700">Why We Picked This:</p>
//                       {pick.pros.slice(0, 2).map((pro, i) => (
//                         <div key={i} className="flex items-start gap-2">
//                           <div className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
//                             <span className="text-green-600 text-xs">✓</span>
//                           </div>
//                           <span className="text-sm text-neutral-700 leading-snug text-justify" style={{ fontFamily: 'Lato, sans-serif' }}>{pro}</span>
//                         </div>
//                       ))}
//                     </div>
                    
//                     {/* Best For - Always at bottom */}
//                     <div className="pt-3 border-t border-neutral-200 mt-auto">
//                       <p className="text-xs text-neutral-500 mb-1">Best For:</p>
//                       <p className="text-sm font-medium text-neutral-900 leading-snug">{pick.bestFor}</p>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//     </>
//   );
// };

// export default CombinedSection;


import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { creditCardsData } from '../../data/creditCards.data';
import { insuranceData } from '../../data/insurance.data';
import { investmentsData } from '../../data/investments.data';

const CombinedSection = () => {
  const categories = [
    {
      icon: (
        <svg className="w-8 h-8 md:w-9 md:h-9 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      name: 'Credit Cards',
      description: 'The best for rewards & lounge access, minus the debt traps.',
      link: '/credit-cards',
    },
    {
      icon: (
        <svg className="w-8 h-8 md:w-9 md:h-9 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      name: 'Insurance',
      description: 'Term, health, and car insurance that actually pays out claims.',
      link: '/insurance',
    },
    {
      icon: (
        <svg className="w-8 h-8 md:w-9 md:h-9 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      name: 'Investments',
      description: 'Mutual funds, FDs, and Bonds vetted for risk-adjusted returns.',
      link: '/investments',
    },
  ];

  const topPicks = [
    { ...creditCardsData.topPicks[0], type: 'card', img: '/picks/HDFC-Regalia.webp', cta: 'Apply Now', ctaLink: '/credit-cards' },
    { ...insuranceData.topPicks[0], type: 'insurance', img: '/picks/insurance-1.webp', cta: 'Apply', ctaLink: '/insurance' },
    { ...investmentsData.topPicks[0], type: 'investment', img: '/picks/parag-fund.webp', cta: 'Invest', ctaLink: '/investments' },
  ];

  return (
    <>
      {/* ── EXPLORE FINANCIAL PRODUCTS ── */}
      <section className="py-10 md:py-12 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-2xl md:text-3xl font-extrabold text-neutral-900"
              style={{ fontFamily: 'Lato, sans-serif' }}
            >
              Explore <span className="text-primary-600">Financial</span> Products
            </h2>
          </motion.div>

          {/* 3 icon tiles – matching screenshot style */}
          <div className="grid grid-cols-3 gap-3 md:gap-6">
            {categories.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={item.link}>
                  <div className="group flex flex-col items-center text-center p-4 md:p-6 rounded-2xl  bg-white hover:bg-blue-50 hover:shadow-md transition-all duration-300 cursor-pointer h-full">
                    {/* Icon circle */}
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary-50 flex items-center justify-center mb-3 group-hover:bg-primary-100 transition-colors">
                      {item.icon}
                    </div>
                    <h3 className="text-sm md:text-[15px] font-bold text-neutral-900 mb-1" style={{ fontFamily: 'Lato, sans-serif' }}>
                      {item.name}
                    </h3>
                    <p className="text-[13px] md:text-[14px] font-semibold text-neutral-500 leading-relaxed hidden sm:block" style={{ fontFamily: 'Lato, sans-serif' }}>
                      {item.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR TOP PICKS ── */}
    <section className="py-10 md:py-14 bg-gray-50">
  <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

    {/* Header */}
    <div className="flex items-center justify-between mb-8">
      <motion.h2
        className="text-2xl md:text-3xl font-extrabold text-neutral-900"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Our Top Picks
      </motion.h2>

     
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

      {topPicks.map((pick, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="h-full"
        >
          <div className="group bg-white rounded-2xl border-2 border-neutral-200 hover:border-primary-300 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col min-h-[520px] h-full">

            {/* Image — same as TopPicks: p-3 outer, rounded-xl inner, object-cover */}
            <div className="relative w-full shrink-0 bg-neutral-50 p-3">
              <div className="relative h-44 w-full overflow-hidden rounded-xl">
                <img
                  src={pick.img}
                  alt={pick.name}
                  className="w-full h-full object-contain-cover  transition-transform duration-500"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
                {pick.rating && (
                  <div className="absolute top-2 right-2 bg-white px-2.5 py-1 rounded-full shadow-md">
                    <span className="text-sm font-bold text-amber-600">⭐ {pick.rating}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-1">

              {/* Title */}
              <div className="mb-4">
                <h3 className="text-lg font-bold text-neutral-900 mb-1 group-hover:text-primary-600 transition-colors">
                  {pick.name}
                </h3>
                <p className="text-sm font-semibold text-neutral-500" style={{ fontFamily: 'Lato, sans-serif' }}>
                  {pick.bank || pick.provider || pick.category}
                </p>
              </div>

              {/* Description */}
              <div className="mb-6 flex-1">
                <p className="text-[15px] font-bold text-neutral-700 mb-2" style={{ fontFamily: 'Lato, sans-serif' }}>
                  Benefits & Features
                </p>
                <p className="text-[14px] font-semibold text-neutral-500 leading-relaxed" style={{ fontFamily: 'Lato, sans-serif' }}>
                  {pick.pros
                    ? pick.pros.slice(0, 2).join('. ')
                    : pick.description || ''}
                </p>
              </div>

              {/* Stats */}
              <div className="border-t border-neutral-200 pt-4 mb-5 space-y-2">

                {pick.type === 'card' && (
                  <div className="flex justify-between text-sm">
                    <span className="font-semibold text-neutral-500" style={{ fontFamily: 'Lato, sans-serif' }}>Annual Fee</span>
                    <span className="font-bold text-neutral-900">
                      {pick.annualFee || 'NIL'}
                    </span>
                  </div>
                )}

                {pick.type === 'insurance' && (
                  <>
                    <div className="flex justify-between text-sm">
                      <span className="font-semibold text-neutral-500" style={{ fontFamily: 'Lato, sans-serif' }}>Coverage</span>
                      <span className="font-bold text-neutral-900">
                        {pick.coverage || '5L'}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="font-semibold text-neutral-500" style={{ fontFamily: 'Lato, sans-serif' }}>Claim Ratio</span>
                      <span className="font-bold text-neutral-900">
                        {pick.claimSettlement || '96.8%'}
                      </span>
                    </div>
                  </>
                )}

                {pick.type === 'investment' && (
                  <div className="flex justify-between text-sm">
                    <span className="font-semibold text-neutral-500" style={{ fontFamily: 'Lato, sans-serif' }}>Returns</span>
                    <span className="font-bold text-neutral-900">
                      {pick.returns || '—'}
                    </span>
                  </div>
                )}

              </div>

              {/* CTA */}
              <Link
                to={pick.ctaLink}
                className="w-full block text-center py-3 rounded-full bg-primary-600 text-white text-sm font-bold hover:bg-primary-700 active:scale-[0.98] transition-all"
              >
                {pick.cta}
              </Link>

            </div>
          </div>
        </motion.div>
      ))}

    </div>
  </div>
</section>
    </>
  );
};

export default CombinedSection;