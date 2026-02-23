


// // import { motion } from 'framer-motion';

// // const TopPicks = ({ picks, type }) => {
// //   return (
// //     <section className="py-12 bg-white">
// //       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
// //         <motion.div
// //           className="mb-8"
// //           initial={{ opacity: 0, y: 20 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           transition={{ duration: 0.6 }}
// //         >
// //           <div className="flex items-center gap-3 mb-3">
// //             <div className="w-1 h-8 bg-primary-600 rounded-full" />
// //             <h2
// //               className="text-2xl md:text-3xl font-bold text-neutral-900"
// //               style={{ fontFamily: 'Lato, sans-serif', fontWeight: 900 }}
// //             >
// //                Top Picks
// //             </h2>
// //           </div>
// //           <p className="text-neutral-600 ml-7" style={{ fontFamily: 'Lato, sans-serif' }}>
// //             {type === 'credit-cards'
// //               ? 'Cards we actually recommend this month'
// //               : 'Policies with best claim settlement ratios'}
// //           </p>
// //         </motion.div>

// //         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// //           {picks.slice(0, 3).map((pick, idx) => (
// //             <motion.div
// //               key={pick.id}
// //               initial={{ opacity: 0, y: 30 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               viewport={{ once: true }}
// //               transition={{ duration: 0.5, delay: idx * 0.15 }}
// //               className="group"
// //             >
// //               <div className="bg-white rounded-2xl border-2 border-neutral-200 hover:border-primary-400 hover:shadow-2xl transition-all duration-300 overflow-hidden h-full flex flex-col">
                
// //                 {/* Image Section (icon replaced with image, UI same) */}
// //                 <div className="relative h-48 bg-gradient-to-br from-neutral-100 to-neutral-200 overflow-hidden">
// //                   <img
// //                     src={pick.image}
// //                     alt={pick.name}
// //                     className="w-full h-full object-contain-cover"
// //                     loading="lazy"
// //                   />

// //                   {/* subtle overlay (same readability feel) */}
// //                   <div className="absolute inset-0 bg-white/10" />

// //                   {/* Rating Badge */}
// //                   <div className="absolute top-4 right-4 bg-white px-3 py-2 rounded-xl shadow-lg border border-neutral-200">
// //                     <div className="flex items-center gap-1">
// //                       <span className="text-amber-500 text-sm">⭐</span>
// //                       <span className="text-neutral-900 text-sm font-bold">
// //                         {pick.rating}
// //                       </span>
// //                     </div>
// //                   </div>
// //                 </div>

// //                 {/* Content */}
// //                 <div className="p-6 flex flex-col flex-1">
// //                   <div className="mb-4">
// //                     <h3
// //                       className="text-lg font-bold text-neutral-900 mb-1 group-hover:text-primary-600 transition-colors"
// //                       style={{ fontFamily: 'Lato, sans-serif' }}
// //                     >
// //                       {pick.name}
// //                     </h3>
// //                     <p className="text-sm text-neutral-600">
// //                       {pick.bank || pick.provider}
// //                     </p>
// //                   </div>

// //                   {/* Key Info */}
// //                   <div className="mb-4 pb-4 border-b border-neutral-200">
// //                     <div className="flex items-center justify-between text-sm">
// //                       <span className="text-neutral-600">
// //                         {type === 'credit-cards' ? 'Annual Fee' : 'Premium'}
// //                       </span>
// //                       <span className="font-semibold text-neutral-900">
// //                         {pick.annualFee || pick.premiumEstimate}
// //                       </span>
// //                     </div>

// //                     {pick.claimSettlementRatio && (
// //                       <div className="flex items-center justify-between text-sm mt-2">
// //                         <span className="text-neutral-600">Claim Settlement</span>
// //                         <span className="font-semibold text-green-600">
// //                           {pick.claimSettlementRatio}
// //                         </span>
// //                       </div>
// //                     )}
// //                   </div>

// //                   {/* Pros */}
// //                   <div className="space-y-2 mb-4 flex-1">
// //                     <p className="text-xs font-semibold text-neutral-700 uppercase tracking-wide">
// //                       Why We Picked This
// //                     </p>
// //                     {pick.pros.slice(0, 2).map((pro, i) => (
// //                       <div key={i} className="flex items-start gap-2">
// //                         <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
// //                           <span className="text-green-600 text-xs">✓</span>
// //                         </div>
// //                         <span className="text-sm text-neutral-700 leading-snug">
// //                           {pro}
// //                         </span>
// //                       </div>
// //                     ))}
// //                   </div>

// //                   {/* Best For */}
// //                   <div className="pt-4 border-t border-neutral-200">
// //                     <p className="text-xs text-neutral-500 mb-1">Best For</p>
// //                     <p className="text-sm font-medium text-neutral-900 leading-snug">
// //                       {pick.bestFor}
// //                     </p>
// //                   </div>
// //                 </div>

// //               </div>
// //             </motion.div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default TopPicks;


// // import { motion } from 'framer-motion';

// // const TopPicks = ({ picks, type, onProductClick }) => {
// //   const getCtaText = () => {
// //     if (type === 'credit-cards') return 'Apply Now';
// //     if (type === 'insurance') return 'Apply';
// //     return 'Invest';
// //   };

// //   return (
// //     <section className="py-8 md:py-10 bg-white">
// //       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
// //         <motion.h2
// //           className="text-xl md:text-2xl font-extrabold text-neutral-900 mb-5"
// //           initial={{ opacity: 0, y: 12 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           style={{ fontFamily: 'Lato, sans-serif' }}
// //         >
// //           Our Top Picks
// //         </motion.h2>

// //         <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
// //           {picks.slice(0, 3).map((pick, idx) => (
// //             <motion.div
// //               key={pick.id}
// //               initial={{ opacity: 0, y: 16 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               viewport={{ once: true }}
// //               transition={{ duration: 0.4, delay: idx * 0.1 }}
// //               className="group bg-white rounded-2xl border border-neutral-200 overflow-hidden hover:shadow-lg hover:border-neutral-300 transition-all duration-300 flex flex-col cursor-pointer"
// //               onClick={() => onProductClick?.(pick)}
// //             >
// //               {/* Image */}
// //               <div className="w-full h-36 bg-neutral-50 overflow-hidden flex-shrink-0">
// //                 {pick.image || pick.img ? (
// //                   <img
// //                     src={pick.image || pick.img}
// //                     alt={pick.name}
// //                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
// //                     onError={(e) => { e.target.style.display = 'none'; }}
// //                   />
// //                 ) : (
// //                   <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-50 to-blue-50">
// //                     <span className="text-5xl opacity-20">
// //                       {type === 'credit-cards' ? '💳' : type === 'insurance' ? '🛡️' : '📈'}
// //                     </span>
// //                   </div>
// //                 )}
// //               </div>

// //               {/* Content */}
// //               <div className="p-4 flex flex-col flex-1">
// //                 <h3 className="text-sm font-bold text-neutral-900 mb-0.5 leading-snug" style={{ fontFamily: 'Lato, sans-serif' }}>
// //                   {pick.name}
// //                 </h3>
// //                 <p className="text-xs text-neutral-500 mb-3" style={{ fontFamily: 'Lato, sans-serif' }}>
// //                   {pick.bank || pick.provider || pick.category}
// //                 </p>

// //                 <p className="text-xs font-semibold text-neutral-700 mb-1" style={{ fontFamily: 'Lato, sans-serif' }}>
// //                   Benefits & Features
// //                 </p>
// //                 <p className="text-xs text-neutral-500 leading-relaxed mb-3 flex-1" style={{ fontFamily: 'Lato, sans-serif' }}>
// //                   {pick.pros ? pick.pros.slice(0, 2).join('. ') : pick.description || '—'}
// //                 </p>

// //                 {/* Stat rows — type specific */}
// //                 <div className="border-t border-neutral-100 pt-2 mb-3 space-y-1.5">
// //                   {type === 'insurance' && (
// //                     <>
// //                       <div className="flex justify-between items-center">
// //                         <span className="text-xs text-neutral-500" style={{ fontFamily: 'Lato, sans-serif' }}>Coverage</span>
// //                         <span className="text-xs font-bold text-neutral-900" style={{ fontFamily: 'Lato, sans-serif' }}>{pick.coverageAmount || '5L'}</span>
// //                       </div>
// //                       <div className="flex justify-between items-center">
// //                         <span className="text-xs text-neutral-500" style={{ fontFamily: 'Lato, sans-serif' }}>Claim Settlement</span>
// //                         <span className="text-xs font-bold text-neutral-900" style={{ fontFamily: 'Lato, sans-serif' }}>{pick.claimSettlementRatio || '—'}</span>
// //                       </div>
// //                       <div className="flex justify-between items-center pt-1">
// //                         <span className="text-xs font-semibold text-neutral-700" style={{ fontFamily: 'Lato, sans-serif' }}>Premium</span>
// //                         <span className="text-sm font-extrabold text-neutral-900" style={{ fontFamily: 'Lato, sans-serif' }}>{pick.premiumEstimate || '—'}</span>
// //                       </div>
// //                     </>
// //                   )}
// //                   {type === 'credit-cards' && (
// //                     <div className="flex justify-between items-center">
// //                       <span className="text-xs font-semibold text-neutral-700" style={{ fontFamily: 'Lato, sans-serif' }}>Annual Fee</span>
// //                       <span className="text-sm font-extrabold text-neutral-900" style={{ fontFamily: 'Lato, sans-serif' }}>{pick.annualFee || 'NIL'}</span>
// //                     </div>
// //                   )}
// //                   {type === 'investments' && (
// //                     <>
// //                       {pick.returns && (
// //                         <div className="flex justify-between items-center">
// //                           <span className="text-xs text-neutral-500" style={{ fontFamily: 'Lato, sans-serif' }}>Expected Returns</span>
// //                           <span className="text-xs font-bold text-neutral-900" style={{ fontFamily: 'Lato, sans-serif' }}>{pick.returns}</span>
// //                         </div>
// //                       )}
// //                       {pick.expenseRatio && (
// //                         <div className="flex justify-between items-center">
// //                           <span className="text-xs text-neutral-500" style={{ fontFamily: 'Lato, sans-serif' }}>Expense Ratio</span>
// //                           <span className="text-xs font-bold text-neutral-900" style={{ fontFamily: 'Lato, sans-serif' }}>{pick.expenseRatio}</span>
// //                         </div>
// //                       )}
// //                     </>
// //                   )}
// //                 </div>

// //                 {/* CTA */}
// //                 <button
// //                   className="w-full py-2.5 rounded-xl bg-primary-600 text-white text-sm font-bold hover:bg-primary-700 active:scale-[0.98] transition-all"
// //                   style={{ fontFamily: 'Lato, sans-serif' }}
// //                   onClick={(e) => { e.stopPropagation(); onProductClick?.(pick); }}
// //                 >
// //                   {getCtaText()}
// //                 </button>
// //               </div>
// //             </motion.div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default TopPicks;

// // import { motion } from 'framer-motion';

// // const TopPicks = ({ picks = [], type, onProductClick }) => {

// //   const getCtaText = () => {
// //     if (type === 'credit-cards') return 'Apply Now';
// //     if (type === 'insurance') return 'Apply';
// //     return 'Invest';
// //   };

// //   return (
// //     <section className="py-10 bg-white">
// //       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

// //         <motion.h2
// //           className="text-2xl md:text-3xl font-extrabold text-neutral-900 mb-8"
// //           initial={{ opacity: 0, y: 12 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //         >
// //           Our Top Picks
// //         </motion.h2>

// //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

// //           {picks.slice(0, 3).map((pick, idx) => (

// //             <motion.div
// //               key={pick.id}
// //               initial={{ opacity: 0, y: 20 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               viewport={{ once: true }}
// //               transition={{ duration: 0.4, delay: idx * 0.1 }}
// //               onClick={() => onProductClick?.(pick)}
// //               className="h-full"
// //             >

// //               <div className="group bg-white rounded-2xl border-2 border-neutral-200 hover:border-primary-400 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col min-h-[520px] h-full cursor-pointer">

// //                 {/* Image Section */}
// //                 <div className="relative h-48 w-full shrink-0 overflow-hidden bg-neutral-50 flex items-center justify-center">

// //                   {pick.image || pick.img ? (
// //                     <img
// //                       src={pick.image || pick.img}
// //                       alt={pick.name}
// //                       className="w-full h-full object-contain-cover transition-transform duration-500 "
// //                       onError={(e) => { e.target.style.display = 'none'; }}
// //                     />
// //                   ) : (
// //                     <div className="flex items-center justify-center w-full h-full bg-gradient-to-br from-primary-50 to-blue-50 text-5xl opacity-20">
// //                       {type === 'credit-cards' ? '💳' : type === 'insurance' ? '🛡️' : '📈'}
// //                     </div>
// //                   )}

// //                   {/* Rating Badge */}
// //                   {pick.rating && (
// //                     <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-md">
// //                       <span className="text-sm font-bold text-amber-600">
// //                         ⭐ {pick.rating}
// //                       </span>
// //                     </div>
// //                   )}
// //                 </div>

// //                 {/* Content */}
// //                 <div className="p-5 flex flex-col flex-1">

// //                   {/* Title */}
// //                   <div className="mb-4">
// //                     <h3 className="text-lg md:text-xl font-bold text-neutral-900 mb-1 group-hover:text-primary-600 transition-colors">
// //                       {pick.name}
// //                     </h3>
// //                     <p className="text-sm text-neutral-600">
// //                       {pick.bank || pick.provider || pick.category}
// //                     </p>
// //                   </div>

// //                   {/* Description */}
// //                   <div className="mb-5 space-y-2 flex-1">
// //                     <p className="text-xs font-semibold text-neutral-700">
// //                       Why We Picked This:
// //                     </p>
// //                     <p className="text-sm text-neutral-600 leading-relaxed">
// //                       {pick.pros
// //                         ? pick.pros.slice(0, 2).join('. ')
// //                         : pick.description || '—'}
// //                     </p>
// //                   </div>

// //                   {/* Stats Section */}
// //                   <div className="border-t border-neutral-200 pt-4 mb-5 space-y-2">

// //                     {type === 'credit-cards' && (
// //                       <div className="flex justify-between text-sm">
// //                         <span className="text-neutral-500">Annual Fee</span>
// //                         <span className="font-bold text-neutral-900">
// //                           {pick.annualFee || 'NIL'}
// //                         </span>
// //                       </div>
// //                     )}

// //                     {type === 'insurance' && (
// //                       <>
// //                         <div className="flex justify-between text-sm">
// //                           <span className="text-neutral-500">Claim Ratio</span>
// //                           <span className="font-bold text-neutral-900">
// //                             {pick.claimSettlementRatio}
// //                           </span>
// //                         </div>
// //                         <div className="flex justify-between text-sm">
// //                           <span className="text-neutral-500">Premium</span>
// //                           <span className="font-bold text-neutral-900">
// //                             {pick.premiumEstimate}
// //                           </span>
// //                         </div>
// //                       </>
// //                     )}

// //                     {type === 'investments' && (
// //                       <div className="flex justify-between text-sm">
// //                         <span className="text-neutral-500">Returns</span>
// //                         <span className="font-bold text-neutral-900">
// //                           {pick.returns}
// //                         </span>
// //                       </div>
// //                     )}

// //                   </div>

// //                   {/* CTA */}
// //                   <button
// //                     className="w-full py-3 rounded-xl bg-primary-600 text-white text-sm font-bold hover:bg-primary-700 active:scale-[0.98] transition-all"
// //                     onClick={(e) => { e.stopPropagation(); onProductClick?.(pick); }}
// //                   >
// //                     {getCtaText()}
// //                   </button>

// //                 </div>

// //               </div>
// //             </motion.div>

// //           ))}

// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default TopPicks;


// import { motion, AnimatePresence } from 'framer-motion';

// // TopPicks hides smoothly when user filters/searches
// // Pass isFiltered={true} from parent when category != 'all' OR searchValue != ''
// const TopPicks = ({ picks = [], type, onProductClick, isFiltered = false }) => {

//   const getCtaText = () => {
//     if (type === 'credit-cards') return 'Apply Now';
//     if (type === 'insurance') return 'Apply';
//     return 'Invest';
//   };

//   return (
//     <AnimatePresence initial={false}>
//       {!isFiltered && (
//         <motion.section
//           key="top-picks"
//           initial={{ opacity: 0, height: 0 }}
//           animate={{ opacity: 1, height: 'auto' }}
//           exit={{
//             opacity: 0,
//             height: 0,
//             transition: { duration: 0.3, ease: 'easeInOut' }
//           }}
//           transition={{ duration: 0.35, ease: 'easeInOut' }}
//           className="overflow-hidden bg-white"
//         >
//           <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

//             <motion.h2
//               className="text-xl md:text-2xl font-extrabold text-neutral-900 mb-6"
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.3, delay: 0.1 }}
//               style={{ fontFamily: 'Lato, sans-serif' }}
//             >
//               Our Top Picks
//             </motion.h2>

//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
//               {picks.slice(0, 3).map((pick, idx) => (
//                 <motion.div
//                   key={pick.id}
//                   initial={{ opacity: 0, y: 16 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.35, delay: idx * 0.08 }}
//                   onClick={() => onProductClick?.(pick)}
//                   className="h-full"
//                 >
//                   <div className="group bg-white rounded-2xl border-2 border-neutral-200 hover:border-primary-400 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full cursor-pointer">

//                     {/* Image */}
//                     <div className="relative h-44 w-full shrink-0 overflow-hidden bg-neutral-50 flex items-center justify-center">
//                       {pick.image || pick.img ? (
//                         <img
//                           src={pick.image || pick.img}
//                           alt={pick.name}
//                           className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                           onError={(e) => { e.target.style.display = 'none'; }}
//                         />
//                       ) : (
//                         <div className="flex items-center justify-center w-full h-full bg-gradient-to-br from-primary-50 to-blue-50 text-5xl opacity-20">
//                           {type === 'credit-cards' ? '💳' : type === 'insurance' ? '🛡️' : '📈'}
//                         </div>
//                       )}
//                       {pick.rating && (
//                         <div className="absolute top-3 right-3 bg-white px-2.5 py-1 rounded-full shadow-md">
//                           <span className="text-sm font-bold text-amber-600">⭐ {pick.rating}</span>
//                         </div>
//                       )}
//                     </div>

//                     {/* Content */}
//                     <div className="p-5 flex flex-col flex-1">
//                       <div className="mb-3">
//                         <h3 className="text-base font-bold text-neutral-900 mb-0.5 group-hover:text-primary-600 transition-colors"
//                           style={{ fontFamily: 'Lato, sans-serif' }}>
//                           {pick.name}
//                         </h3>
//                         <p className="text-xs text-neutral-500" style={{ fontFamily: 'Lato, sans-serif' }}>
//                           {pick.bank || pick.provider || pick.category}
//                         </p>
//                       </div>

//                       <div className="mb-4 flex-1">
//                         <p className="text-xs font-semibold text-neutral-600 mb-1" style={{ fontFamily: 'Lato, sans-serif' }}>
//                           Why We Picked This:
//                         </p>
//                         <p className="text-xs text-neutral-500 leading-relaxed" style={{ fontFamily: 'Lato, sans-serif' }}>
//                           {pick.pros ? pick.pros.slice(0, 2).join('. ') : pick.description || '—'}
//                         </p>
//                       </div>

//                       {/* Stats */}
//                       <div className="border-t border-neutral-100 pt-3 mb-4 space-y-1.5">
//                         {type === 'credit-cards' && (
//                           <div className="flex justify-between text-sm">
//                             <span className="text-neutral-500" style={{ fontFamily: 'Lato, sans-serif' }}>Annual Fee</span>
//                             <span className="font-bold text-neutral-900" style={{ fontFamily: 'Lato, sans-serif' }}>{pick.annualFee || 'NIL'}</span>
//                           </div>
//                         )}
//                         {type === 'insurance' && (
//                           <>
//                             <div className="flex justify-between text-sm">
//                               <span className="text-neutral-500" style={{ fontFamily: 'Lato, sans-serif' }}>Claim Ratio</span>
//                               <span className="font-bold text-neutral-900" style={{ fontFamily: 'Lato, sans-serif' }}>{pick.claimSettlementRatio || '—'}</span>
//                             </div>
//                             <div className="flex justify-between text-sm">
//                               <span className="text-neutral-500" style={{ fontFamily: 'Lato, sans-serif' }}>Premium</span>
//                               <span className="font-bold text-neutral-900" style={{ fontFamily: 'Lato, sans-serif' }}>{pick.premiumEstimate || '—'}</span>
//                             </div>
//                           </>
//                         )}
//                         {type === 'investments' && (
//                           <div className="flex justify-between text-sm">
//                             <span className="text-neutral-500" style={{ fontFamily: 'Lato, sans-serif' }}>Returns</span>
//                             <span className="font-bold text-neutral-900" style={{ fontFamily: 'Lato, sans-serif' }}>{pick.returns || '—'}</span>
//                           </div>
//                         )}
//                       </div>

//                       <button
//                         className="w-full py-2.5 rounded-xl bg-primary-600 text-white text-sm font-bold hover:bg-primary-700 active:scale-[0.98] transition-all"
//                         style={{ fontFamily: 'Lato, sans-serif' }}
//                         onClick={(e) => { e.stopPropagation(); onProductClick?.(pick); }}
//                       >
//                         {getCtaText()}
//                       </button>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </motion.section>
//       )}
//     </AnimatePresence>
//   );
// };

// export default TopPicks;


import { motion, AnimatePresence } from 'framer-motion';

const TopPicks = ({ picks = [], type, onProductClick, isFiltered = false }) => {

  const getCtaText = () => {
    if (type === 'credit-cards') return 'Apply Now';
    if (type === 'insurance') return 'Apply';
    return 'Invest';
  };

  return (
    <AnimatePresence initial={false}>
      {!isFiltered && (
        <motion.section
          key="top-picks"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0, transition: { duration: 0.3, ease: 'easeInOut' } }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
          className="overflow-hidden bg-white"
        >
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8">

            <motion.h2
              className="text-xl md:text-2xl font-extrabold text-neutral-900 mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              style={{ fontFamily: 'Lato, sans-serif' }}
            >
              Our Top Picks
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {picks.slice(0, 3).map((pick, idx) => (
                <motion.div
                  key={pick.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: idx * 0.08 }}
                  onClick={() => onProductClick?.(pick)}
                  className="h-full"
                >
                  <div className="group bg-white rounded-2xl border-2 border-neutral-200 hover:border-primary-400 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full cursor-pointer">

                    {/* ── IMAGE — equal padding all 4 sides ── */}
                    <div className="relative w-full shrink-0 bg-neutral-50 p-3">
                      <div className="relative h-44 w-full overflow-hidden rounded-xl">
                        {pick.image || pick.img ? (
                          <img
                            src={pick.image || pick.img}
                            alt={pick.name}
                            className="w-full h-full object-contain-cover  transition-transform duration-500"
                            onError={(e) => { e.target.style.display = 'none'; }}
                          />
                        ) : (
                          <div className="flex items-center justify-center w-full h-full bg-gradient-to-br from-primary-50 to-blue-50 text-5xl opacity-20">
                            {type === 'credit-cards' ? '💳' : type === 'insurance' ? '🛡️' : '📈'}
                          </div>
                        )}
                        {pick.rating && (
                          <div className="absolute top-2 right-2 bg-white px-2.5 py-1 rounded-full shadow-md">
                            <span className="text-sm font-bold text-amber-600">⭐ {pick.rating}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 flex flex-col flex-1">
                      <div className="mb-3">
                        <h3
                          className="text-base font-bold text-neutral-900 mb-0.5 group-hover:text-primary-600 transition-colors"
                          style={{ fontFamily: 'Lato, sans-serif' }}
                        >
                          {pick.name}
                        </h3>
                        <p className="text-xs font-semibold text-neutral-500" style={{ fontFamily: 'Lato, sans-serif' }}>
                          {pick.bank || pick.provider || pick.category}
                        </p>
                      </div>

                      <div className="mb-4 flex-1">
                        <p className="text-[15px] font-bold text-neutral-600 mb-1" style={{ fontFamily: 'Lato, sans-serif' }}>
                          Why We Picked This:
                        </p>
                        <p className="text-[14px] font-semibold text-neutral-500 leading-relaxed" style={{ fontFamily: 'Lato, sans-serif' }}>
                          {pick.pros ? pick.pros.slice(0, 2).join('. ') : pick.description || '—'}
                        </p>
                      </div>

                      <div className="border-t border-neutral-100 pt-3 mb-4 space-y-1.5">
                        {type === 'credit-cards' && (
                          <div className="flex justify-between text-sm">
                            <span className="font-semibold text-neutral-500" style={{ fontFamily: 'Lato, sans-serif' }}>Annual Fee</span>
                            <span className="font-bold text-neutral-900" style={{ fontFamily: 'Lato, sans-serif' }}>{pick.annualFee || 'NIL'}</span>
                          </div>
                        )}
                        {type === 'insurance' && (
                          <>
                            <div className="flex justify-between text-sm">
                              <span className="font-semibold text-neutral-500" style={{ fontFamily: 'Lato, sans-serif' }}>Claim Ratio</span>
                              <span className="font-bold text-neutral-900" style={{ fontFamily: 'Lato, sans-serif' }}>{pick.claimSettlementRatio || '—'}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="font-semibold text-neutral-500" style={{ fontFamily: 'Lato, sans-serif' }}>Premium</span>
                              <span className="font-bold text-neutral-900" style={{ fontFamily: 'Lato, sans-serif' }}>{pick.premiumEstimate || '—'}</span>
                            </div>
                          </>
                        )}
                        {type === 'investments' && (
                          <div className="flex justify-between text-sm">
                            <span className="font-semibold text-neutral-500" style={{ fontFamily: 'Lato, sans-serif' }}>Returns</span>
                            <span className="font-bold text-neutral-900" style={{ fontFamily: 'Lato, sans-serif' }}>{pick.returns || '—'}</span>
                          </div>
                        )}
                      </div>

                      <button
                        className="w-full py-2.5 rounded-full bg-primary-600 text-white text-sm font-bold hover:bg-primary-700 active:scale-[0.98] transition-all"
                        style={{ fontFamily: 'Lato, sans-serif' }}
                        onClick={(e) => { e.stopPropagation(); onProductClick?.(pick); }}
                      >
                        {getCtaText()}
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default TopPicks;