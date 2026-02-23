

// // import { motion, AnimatePresence } from 'framer-motion';
// // import { useEffect } from 'react';

// // const ProductDetailModal = ({ product, type, onClose }) => {
// //   // Close on ESC key
// //   useEffect(() => {
// //     const handleEsc = (e) => {
// //       if (e.key === 'Escape') onClose();
// //     };
// //     window.addEventListener('keydown', handleEsc);
// //     return () => window.removeEventListener('keydown', handleEsc);
// //   }, [onClose]);

// //   // Prevent body scroll
// //   useEffect(() => {
// //     document.body.style.overflow = 'hidden';
// //     return () => {
// //       document.body.style.overflow = 'unset';
// //     };
// //   }, []);

// //   return (
// //     <AnimatePresence>
// //       <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
// //         {/* Backdrop */}
// //         <motion.div
// //           initial={{ opacity: 0 }}
// //           animate={{ opacity: 1 }}
// //           exit={{ opacity: 0 }}
// //           onClick={onClose}
// //           className="absolute inset-0 bg-black/70 backdrop-blur-sm"
// //         />

// //         {/* Modal Content */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 100 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           exit={{ opacity: 0, y: 100 }}
// //           transition={{ type: "spring", damping: 25, stiffness: 300 }}
// //           className="relative bg-white rounded-t-3xl sm:rounded-2xl shadow-2xl w-full sm:max-w-2xl max-h-[95vh] sm:max-h-[85vh] overflow-hidden flex flex-col"
// //         >
// //           {/* Header with Close Button */}
// //           <div className="relative bg-gradient-to-br from-primary-50 via-white to-accent-50 px-5 py-6 border-b border-neutral-200">
// //             {/* Close Button */}
// //             <button
// //               onClick={onClose}
// //               className="absolute top-4 right-4 z-10 w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full shadow-md flex items-center justify-center hover:bg-white transition-all"
// //             >
// //               <svg className="w-5 h-5 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
// //               </svg>
// //             </button>

// //             <div className="flex items-center gap-4">
// //               {/* Product Image */}
// //               <div className="relative flex-shrink-0">
// //                 <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-xl shadow-md flex items-center justify-center p-2">
// //                   <img
// //                     src={product.image}
// //                     alt={product.name}
// //                     className="w-full h-full object-contain"
// //                     onError={(e) => {
// //                       e.target.style.display = 'none';
// //                       e.target.nextSibling.style.display = 'flex';
// //                     }}
// //                   />
// //                   <div className="absolute inset-0 hidden items-center justify-center">
// //                     <span className="text-5xl opacity-20">
// //                       {type === 'credit-cards' ? '💳' : type === 'insurance' ? '🛡️' : '📈'}
// //                     </span>
// //                   </div>
// //                 </div>
                
// //                 {/* Rating Badge */}
// //                 {product.rating && (
// //                   <div className="absolute -top-1 -right-1 bg-yellow-400 px-2 py-1 rounded-full shadow-md">
// //                     <div className="flex items-center gap-1">
// //                       <span className="text-white text-xs">⭐</span>
// //                       <span className="text-neutral-900 text-xs font-bold">{product.rating}</span>
// //                     </div>
// //                   </div>
// //                 )}
// //               </div>

// //               {/* Title & Provider */}
// //               <div className="flex-1 pr-8">
// //                 <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-1 line-clamp-2" style={{ fontFamily: 'Lato, sans-serif' }}>
// //                   {product.name}
// //                 </h2>
// //                 {(product.bank || product.provider || product.category) && (
// //                   <p className="text-sm text-neutral-600 font-medium">
// //                     {product.bank || product.provider || product.category}
// //                   </p>
// //                 )}
// //               </div>
// //             </div>
// //           </div>

// //           {/* Scrollable Content */}
// //           <div className="flex-1 overflow-y-auto px-5 py-5">
// //             {/* Key Metrics Grid */}
// //             <div className="grid grid-cols-2 gap-3 mb-5">
// //               {/* Annual Fee / Premium / Returns */}
// //               {(product.annualFee || product.premiumEstimate || product.returns) && (
// //                 <div className="bg-neutral-50 rounded-lg p-3 border border-neutral-200">
// //                   <p className="text-xs text-neutral-500 uppercase tracking-wide mb-0.5">
// //                     {type === 'credit-cards' ? 'Annual Fee' : type === 'insurance' ? 'Premium' : 'Returns'}
// //                   </p>
// //                   <p className="text-lg font-bold text-neutral-900">
// //                     {product.annualFee || product.premiumEstimate || product.returns}
// //                   </p>
// //                 </div>
// //               )}

// //               {/* Fee Waiver */}
// //               {product.feeWaiver && (
// //                 <div className="bg-green-50 rounded-lg p-3 border border-green-200">
// //                   <p className="text-xs text-green-700 uppercase tracking-wide mb-0.5">Fee Waiver</p>
// //                   <p className="text-sm font-bold text-green-700 leading-tight">{product.feeWaiver}</p>
// //                 </div>
// //               )}

// //               {/* Claim Settlement Ratio */}
// //               {product.claimSettlementRatio && (
// //                 <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
// //                   <p className="text-xs text-blue-700 uppercase tracking-wide mb-0.5">Claim Ratio</p>
// //                   <p className="text-lg font-bold text-blue-600">{product.claimSettlementRatio}</p>
// //                 </div>
// //               )}

// //               {/* Expense Ratio */}
// //               {product.expenseRatio && (
// //                 <div className="bg-purple-50 rounded-lg p-3 border border-purple-200">
// //                   <p className="text-xs text-purple-700 uppercase tracking-wide mb-0.5">Expense Ratio</p>
// //                   <p className="text-lg font-bold text-purple-600">{product.expenseRatio}</p>
// //                 </div>
// //               )}

// //               {/* Network */}
// //               {product.network && (
// //                 <div className="bg-indigo-50 rounded-lg p-3 border border-indigo-200">
// //                   <p className="text-xs text-indigo-700 uppercase tracking-wide mb-0.5">Network</p>
// //                   <p className="text-sm font-bold text-indigo-700">{product.network}</p>
// //                 </div>
// //               )}

// //               {/* AUM */}
// //               {product.aum && (
// //                 <div className="bg-orange-50 rounded-lg p-3 border border-orange-200">
// //                   <p className="text-xs text-orange-700 uppercase tracking-wide mb-0.5">AUM</p>
// //                   <p className="text-sm font-bold text-orange-700">{product.aum}</p>
// //                 </div>
// //               )}

// //               {/* Fund Manager */}
// //               {product.fundManager && (
// //                 <div className="bg-teal-50 rounded-lg p-3 border border-teal-200 col-span-2">
// //                   <p className="text-xs text-teal-700 uppercase tracking-wide mb-0.5">Fund Manager</p>
// //                   <p className="text-sm font-bold text-teal-700">{product.fundManager}</p>
// //                 </div>
// //               )}

// //               {/* Coverage Amount */}
// //               {product.coverageAmount && (
// //                 <div className="bg-pink-50 rounded-lg p-3 border border-pink-200">
// //                   <p className="text-xs text-pink-700 uppercase tracking-wide mb-0.5">Coverage</p>
// //                   <p className="text-lg font-bold text-pink-700">{product.coverageAmount}</p>
// //                 </div>
// //               )}
// //             </div>

// //             {/* Best For */}
// //             {product.bestFor && (
// //               <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-lg p-4 mb-5 border-l-4 border-primary-500">
// //                 <div className="flex items-start gap-2">
// //                   <span className="text-xl flex-shrink-0">💡</span>
// //                   <div>
// //                     <p className="text-xs font-bold text-primary-900 mb-1 uppercase tracking-wide">Best For</p>
// //                     <p className="text-sm text-primary-800 leading-relaxed" style={{ fontFamily: 'Lato, sans-serif' }}>
// //                       {product.bestFor}
// //                     </p>
// //                   </div>
// //                 </div>
// //               </div>
// //             )}

// //             {/* Pros */}
// //             {product.pros && product.pros.length > 0 && (
// //               <div className="mb-5">
// //                 <h3 className="text-base font-bold text-neutral-900 mb-3 flex items-center gap-2" style={{ fontFamily: 'Lato, sans-serif' }}>
// //                   <span className="text-green-600 text-lg">✓</span>
// //                   What's Good
// //                 </h3>
// //                 <div className="space-y-2">
// //                   {product.pros.map((pro, i) => (
// //                     <div key={i} className="flex items-start gap-2 bg-green-50 rounded-lg p-3 border border-green-100">
// //                       <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
// //                         <span className="text-white text-xs font-bold">✓</span>
// //                       </div>
// //                       <span className="text-sm text-neutral-700 leading-relaxed" style={{ fontFamily: 'Lato, sans-serif' }}>
// //                         {pro}
// //                       </span>
// //                     </div>
// //                   ))}
// //                 </div>
// //               </div>
// //             )}

// //             {/* Cons */}
// //             {product.cons && product.cons.length > 0 && (
// //               <div className="mb-4">
// //                 <h3 className="text-base font-bold text-neutral-900 mb-3 flex items-center gap-2" style={{ fontFamily: 'Lato, sans-serif' }}>
// //                   <span className="text-red-600 text-lg">✕</span>
// //                   Watch Out For
// //                 </h3>
// //                 <div className="space-y-2">
// //                   {product.cons.map((con, i) => (
// //                     <div key={i} className="flex items-start gap-2 bg-red-50 rounded-lg p-3 border border-red-100">
// //                       <div className="w-5 h-5 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0 mt-0.5">
// //                         <span className="text-white text-xs font-bold">✕</span>
// //                       </div>
// //                       <span className="text-sm text-neutral-700 leading-relaxed" style={{ fontFamily: 'Lato, sans-serif' }}>
// //                         {con}
// //                       </span>
// //                     </div>
// //                   ))}
// //                 </div>
// //               </div>
// //             )}
// //           </div>

// //           {/* Fixed Bottom CTA */}
// //           <div className="border-t border-neutral-200 px-5 py-4 bg-white">
// //             <div className="flex gap-3">
// //               <button 
// //                 onClick={onClose}
// //                 className="flex-1 bg-neutral-100 text-neutral-700 px-5 py-3 rounded-xl font-semibold hover:bg-neutral-200 transition-all text-sm"
// //               >
// //                 Close
// //               </button>
// //               <button className="flex-1 bg-gradient-to-r from-primary-600 to-primary-700 text-white px-5 py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-[1.02] transition-all text-sm">
// //                 Apply Now →
// //               </button>
// //             </div>
// //           </div>
// //         </motion.div>
// //       </div>
// //     </AnimatePresence>
// //   );
// // };

// // export default ProductDetailModal;


// import { useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// const ProductDetailModal = ({ product, type, onClose }) => {
//   // Close on ESC
//   useEffect(() => {
//     const handleEsc = (e) => { if (e.key === 'Escape') onClose(); };
//     window.addEventListener('keydown', handleEsc);
//     return () => window.removeEventListener('keydown', handleEsc);
//   }, [onClose]);

//   // Prevent body scroll
//   useEffect(() => {
//     document.body.style.overflow = 'hidden';
//     return () => { document.body.style.overflow = 'unset'; };
//   }, []);

//   if (!product) return null;

//   /* ── Helpers ── */
//   const getStatLabel = () => {
//     if (type === 'credit-cards') return 'Annual Fee';
//     if (type === 'insurance') return 'Premium';
//     return 'Returns';
//   };

//   const getStatValue = () =>
//     product.annualFee || product.premiumEstimate || product.returns || '—';

//   const getCtaText = () => {
//     if (type === 'credit-cards') return 'Apply Now';
//     if (type === 'insurance') return 'Apply';
//     return 'Invest Now';
//   };

//   // Build key stats row — icon + label + value
//   const buildStats = () => {
//     const stats = [];

//     if (type === 'credit-cards') {
//       if (product.cashback)
//         stats.push({ icon: '💸', label: 'Cashback', value: product.cashback });
//       stats.push({ icon: '💳', label: 'Annual Fee', value: product.annualFee || '₹0' });
//       if (product.welcomeBonus || product.bonus)
//         stats.push({ icon: '🎁', label: 'Bonus', value: product.welcomeBonus || product.bonus });
//       if (product.loungeAccess)
//         stats.push({ icon: '✈️', label: 'Lounge', value: product.loungeAccess });
//     }

//     if (type === 'insurance') {
//       if (product.coverageAmount)
//         stats.push({ icon: '🛡️', label: 'Coverage', value: product.coverageAmount });
//       if (product.premiumEstimate)
//         stats.push({ icon: '💰', label: 'Premium', value: product.premiumEstimate });
//       if (product.claimSettlementRatio)
//         stats.push({ icon: '✅', label: 'Claim Ratio', value: product.claimSettlementRatio });
//     }

//     if (type === 'investments') {
//       if (product.returns)
//         stats.push({ icon: '📈', label: 'Returns', value: product.returns });
//       if (product.expenseRatio)
//         stats.push({ icon: '📊', label: 'Exp. Ratio', value: product.expenseRatio });
//       if (product.aum)
//         stats.push({ icon: '🏦', label: 'AUM', value: product.aum });
//       if (product.minSip || product.minInvestment)
//         stats.push({ icon: '💵', label: 'Min SIP', value: product.minSip || product.minInvestment });
//     }

//     return stats;
//   };

//   const stats = buildStats();

//   // Core features / rewards — from pros
//   const features = product.pros || [];

//   // Eligibility — from eligibility array or cons
//   const eligibility = product.eligibility || product.criteria || [];

//   return (
//     <AnimatePresence>
//       <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
//         {/* Backdrop */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           onClick={onClose}
//           className="absolute inset-0 bg-black/60 backdrop-blur-sm"
//         />

//         {/* Modal — full screen mobile, centered card desktop */}
//         <motion.div
//           initial={{ opacity: 0, y: 60 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: 60 }}
//           transition={{ duration: 0.3, ease: 'easeOut' }}
//           className="relative bg-white w-full sm:max-w-md sm:rounded-2xl sm:mx-4 rounded-t-3xl shadow-2xl flex flex-col max-h-[95vh] sm:max-h-[90vh] overflow-hidden"
//         >
//           {/* Close button */}
//           <button
//             onClick={onClose}
//             className="absolute top-4 right-4 z-20 w-8 h-8 bg-white/90 rounded-full shadow flex items-center justify-center hover:bg-neutral-100 transition-colors"
//           >
//             <svg className="w-4 h-4 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           </button>

//           {/* ── PRODUCT IMAGE (top full width) ── */}
//           <div className="relative w-full h-44 sm:h-48 bg-neutral-100 flex-shrink-0 overflow-hidden">
//             {product.image || product.img ? (
//               <img
//                 src={product.image || product.img}
//                 alt={product.name}
//                 className="w-full h-full object-cover"
//                 onError={(e) => { e.target.style.display = 'none'; }}
//               />
//             ) : (
//               <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-50 to-blue-100">
//                 <span className="text-7xl opacity-20">
//                   {type === 'credit-cards' ? '💳' : type === 'insurance' ? '🛡️' : '📈'}
//                 </span>
//               </div>
//             )}
//           </div>

//           {/* ── SCROLLABLE CONTENT ── */}
//           <div className="flex-1 overflow-y-auto">
//             <div className="px-5 pt-4 pb-2">

//               {/* Bank / Provider name — small muted */}
//               <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-1" style={{ fontFamily: 'Lato, sans-serif' }}>
//                 {product.bank || product.provider || product.category || product.company || '—'}
//               </p>

//               {/* Product name — large bold */}
//               <h2 className="text-xl font-extrabold text-neutral-900 mb-2 leading-snug" style={{ fontFamily: 'Lato, sans-serif' }}>
//                 {product.name}
//               </h2>

//               {/* Short description */}
//               {(product.description || product.bestFor) && (
//                 <p className="text-sm text-neutral-500 leading-relaxed mb-4" style={{ fontFamily: 'Lato, sans-serif' }}>
//                   {product.description || product.bestFor}
//                 </p>
//               )}

//               {/* ── KEY STATS ROW ── */}
//               {stats.length > 0 && (
//                 <div className={`grid gap-3 mb-5 ${stats.length >= 3 ? 'grid-cols-3' : 'grid-cols-2'}`}>
//                   {stats.map((stat, i) => (
//                     <div key={i} className="bg-neutral-50 rounded-xl p-3 border border-neutral-100 text-center">
//                       <div className="text-lg mb-0.5">{stat.icon}</div>
//                       <p className="text-xs text-neutral-400 mb-0.5" style={{ fontFamily: 'Lato, sans-serif' }}>{stat.label}</p>
//                       <p className="text-sm font-bold text-neutral-900" style={{ fontFamily: 'Lato, sans-serif' }}>{stat.value}</p>
//                     </div>
//                   ))}
//                 </div>
//               )}

//               {/* ── CORE FEATURES / REWARDS ── */}
//               {features.length > 0 && (
//                 <div className="mb-5">
//                   <h3 className="text-sm font-bold text-neutral-900 mb-3" style={{ fontFamily: 'Lato, sans-serif' }}>
//                     {type === 'credit-cards' ? 'Core Rewards' : type === 'insurance' ? 'Key Benefits' : 'Fund Highlights'}
//                   </h3>
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
//                     {features.map((feature, i) => (
//                       <div key={i} className="flex items-start gap-2.5 bg-neutral-50 rounded-xl p-3 border border-neutral-100">
//                         <div className="w-7 h-7 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0 mt-0.5">
//                           <span className="text-xs">
//                             {type === 'credit-cards' ? '✈️' : type === 'insurance' ? '✅' : '📊'}
//                           </span>
//                         </div>
//                         <p className="text-xs text-neutral-700 leading-relaxed" style={{ fontFamily: 'Lato, sans-serif' }}>
//                           {feature}
//                         </p>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}

//               {/* ── CONS / WATCH OUT ── */}
//               {product.cons && product.cons.length > 0 && (
//                 <div className="mb-5">
//                   <h3 className="text-sm font-bold text-neutral-900 mb-3" style={{ fontFamily: 'Lato, sans-serif' }}>
//                     Watch Out For
//                   </h3>
//                   <div className="space-y-2">
//                     {product.cons.map((con, i) => (
//                       <div key={i} className="flex items-start gap-2.5 bg-red-50 rounded-xl p-3 border border-red-100">
//                         <div className="w-5 h-5 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0 mt-0.5">
//                           <span className="text-white text-xs font-bold">✕</span>
//                         </div>
//                         <p className="text-xs text-neutral-700 leading-relaxed" style={{ fontFamily: 'Lato, sans-serif' }}>{con}</p>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}

//               {/* ── ELIGIBILITY CRITERIA ── */}
//               {eligibility.length > 0 && (
//                 <div className="mb-5">
//                   <h3 className="text-sm font-bold text-neutral-900 mb-3" style={{ fontFamily: 'Lato, sans-serif' }}>
//                     Eligibility Criteria
//                   </h3>
//                   <div className="space-y-2">
//                     {eligibility.map((item, i) => (
//                       <div key={i} className="flex items-center gap-3">
//                         <div className="w-5 h-5 rounded-full border-2 border-primary-400 flex items-center justify-center flex-shrink-0">
//                           <svg className="w-3 h-3 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
//                           </svg>
//                         </div>
//                         <p className="text-sm text-neutral-700" style={{ fontFamily: 'Lato, sans-serif' }}>{item}</p>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}

//               {/* ── BEST FOR ── */}
//               {product.bestFor && (
//                 <div className="mb-5 bg-primary-50 border-l-4 border-primary-500 rounded-r-xl p-4">
//                   <div className="flex items-start gap-2">
//                     <span className="text-lg flex-shrink-0">💡</span>
//                     <div>
//                       <p className="text-xs font-bold text-primary-900 mb-0.5 uppercase tracking-wide" style={{ fontFamily: 'Lato, sans-serif' }}>
//                         Best For
//                       </p>
//                       <p className="text-sm text-primary-800 leading-relaxed" style={{ fontFamily: 'Lato, sans-serif' }}>
//                         {product.bestFor}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               )}

//               {/* Extra spacing before fixed bottom */}
//               <div className="h-2" />
//             </div>
//           </div>

//           {/* ── FIXED BOTTOM CTA ── */}
//           <div className="border-t border-neutral-100 px-5 py-4 bg-white flex-shrink-0">
//             <button
//               className="w-full py-3.5 rounded-xl bg-primary-600 text-white text-sm font-bold hover:bg-primary-700 active:scale-[0.98] transition-all"
//               style={{ fontFamily: 'Lato, sans-serif' }}
//               onClick={() => {
//                 if (product.applyLink) window.open(product.applyLink, '_blank');
//                 else onClose();
//               }}
//             >
//               {getCtaText()}
//             </button>
//           </div>
//         </motion.div>
//       </div>
//     </AnimatePresence>
//   );
// };

// export default ProductDetailModal;


import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProductDetailModal = ({ product, type, onClose }) => {
  useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'unset'; };
  }, []);

  if (!product) return null;

  const getCtaText = () => {
    if (type === 'credit-cards') return 'Apply Now';
    if (type === 'insurance') return 'Apply';
    return 'Invest Now';
  };

  const buildStats = () => {
    const stats = [];
    if (type === 'credit-cards') {
      if (product.cashback)
        stats.push({ icon: '💸', label: 'Cashback', value: product.cashback });
      stats.push({ icon: '💳', label: 'Annual Fee', value: product.annualFee || '₹0' });
      if (product.welcomeBonus || product.bonus)
        stats.push({ icon: '🎁', label: 'Bonus', value: product.welcomeBonus || product.bonus });
      if (product.loungeAccess)
        stats.push({ icon: '✈️', label: 'Lounge', value: product.loungeAccess });
    }
    if (type === 'insurance') {
      if (product.coverageAmount)
        stats.push({ icon: '🛡️', label: 'Coverage', value: product.coverageAmount });
      if (product.premiumEstimate)
        stats.push({ icon: '💰', label: 'Premium', value: product.premiumEstimate });
      if (product.claimSettlementRatio)
        stats.push({ icon: '✅', label: 'Claim Ratio', value: product.claimSettlementRatio });
    }
    if (type === 'investments') {
      if (product.returns)
        stats.push({ icon: '📈', label: 'Returns', value: product.returns });
      if (product.expenseRatio)
        stats.push({ icon: '📊', label: 'Exp. Ratio', value: product.expenseRatio });
      if (product.aum)
        stats.push({ icon: '🏦', label: 'AUM', value: product.aum });
      if (product.minSip || product.minInvestment)
        stats.push({ icon: '💵', label: 'Min SIP', value: product.minSip || product.minInvestment });
    }
    return stats;
  };

  const stats       = buildStats();
  const features    = product.pros || [];
  const eligibility = product.eligibility || product.criteria || [];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 60 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative bg-white w-full sm:max-w-md sm:rounded-2xl sm:mx-4 rounded-t-3xl shadow-2xl flex flex-col max-h-[95vh] sm:max-h-[90vh] overflow-hidden"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-8 h-8 bg-white/90 rounded-full shadow flex items-center justify-center hover:bg-neutral-100 transition-colors"
          >
            <svg className="w-4 h-4 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* ── IMAGE — same as TopPicks/AllProducts: p-3 outer, rounded-xl inner, object-cover ── */}
          <div className="relative w-full shrink-0 bg-neutral-50 p-3">
            <div className="relative h-44 w-full overflow-hidden rounded-xl">
              {product.image || product.img ? (
                <img
                  src={product.image || product.img}
                  alt={product.name}
                  className="w-full h-full object-contain-cover"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-50 to-blue-100">
                  <span className="text-7xl opacity-20">
                    {type === 'credit-cards' ? '💳' : type === 'insurance' ? '🛡️' : '📈'}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* ── SCROLLABLE CONTENT ── */}
          <div className="flex-1 overflow-y-auto">
            <div className="px-5 pt-4 pb-2">

              {/* Provider */}
              <p
                className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-1"
                style={{ fontFamily: 'Lato, sans-serif' }}
              >
                {product.bank || product.provider || product.category || product.company || '—'}
              </p>

              {/* Product name */}
              <h2
                className="text-xl font-extrabold text-neutral-900 mb-2 leading-snug"
                style={{ fontFamily: 'Lato, sans-serif' }}
              >
                {product.name}
              </h2>

              {/* Description */}
              {(product.description || product.bestFor) && (
                <p
                  className="text-sm font-semibold text-neutral-600 leading-relaxed mb-4"
                  style={{ fontFamily: 'Lato, sans-serif' }}
                >
                  {product.description || product.bestFor}
                </p>
              )}

              {/* ── KEY STATS ── */}
              {stats.length > 0 && (
                <div className={`grid gap-3 mb-5 ${stats.length >= 3 ? 'grid-cols-3' : 'grid-cols-2'}`}>
                  {stats.map((stat, i) => (
                    <div key={i} className="bg-neutral-50 rounded-xl p-3 border border-neutral-100 text-center">
                      <div className="text-lg mb-0.5">{stat.icon}</div>
                      <p className="text-xs font-semibold text-neutral-400 mb-0.5" style={{ fontFamily: 'Lato, sans-serif' }}>
                        {stat.label}
                      </p>
                      <p className="text-sm font-bold text-neutral-900" style={{ fontFamily: 'Lato, sans-serif' }}>
                        {stat.value}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* ── CORE FEATURES ── */}
              {features.length > 0 && (
                <div className="mb-5">
                  <h3 className="text-sm font-bold text-neutral-900 mb-3" style={{ fontFamily: 'Lato, sans-serif' }}>
                    {type === 'credit-cards' ? 'Core Rewards' : type === 'insurance' ? 'Key Benefits' : 'Fund Highlights'}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2.5 bg-neutral-50 rounded-xl p-3 border border-neutral-100">
                        <div className="w-7 h-7 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs">
                            {type === 'credit-cards' ? '✈️' : type === 'insurance' ? '✅' : '📊'}
                          </span>
                        </div>
                        <p className="text-xs font-semibold text-neutral-700 leading-relaxed" style={{ fontFamily: 'Lato, sans-serif' }}>
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ── CONS ── */}
              {product.cons && product.cons.length > 0 && (
                <div className="mb-5">
                  <h3 className="text-sm font-bold text-neutral-900 mb-3" style={{ fontFamily: 'Lato, sans-serif' }}>
                    Watch Out For
                  </h3>
                  <div className="space-y-2">
                    {product.cons.map((con, i) => (
                      <div key={i} className="flex items-start gap-2.5 bg-red-50 rounded-xl p-3 border border-red-100">
                        <div className="w-5 h-5 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white text-xs font-bold">✕</span>
                        </div>
                        <p className="text-xs font-semibold text-neutral-700 leading-relaxed" style={{ fontFamily: 'Lato, sans-serif' }}>
                          {con}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ── ELIGIBILITY ── */}
              {eligibility.length > 0 && (
                <div className="mb-5">
                  <h3 className="text-sm font-bold text-neutral-900 mb-3" style={{ fontFamily: 'Lato, sans-serif' }}>
                    Eligibility Criteria
                  </h3>
                  <div className="space-y-2">
                    {eligibility.map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full border-2 border-primary-400 flex items-center justify-center flex-shrink-0">
                          <svg className="w-3 h-3 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="text-sm font-semibold text-neutral-700" style={{ fontFamily: 'Lato, sans-serif' }}>
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ── BEST FOR ── */}
              {product.bestFor && (
                <div className="mb-5 bg-primary-50 border-l-4 border-primary-500 rounded-r-xl p-4">
                  <div className="flex items-start gap-2">
                    <span className="text-lg flex-shrink-0">💡</span>
                    <div>
                      <p className="text-xs font-bold text-primary-900 mb-0.5 uppercase tracking-wide" style={{ fontFamily: 'Lato, sans-serif' }}>
                        Best For
                      </p>
                      <p className="text-sm font-semibold text-primary-800 leading-relaxed" style={{ fontFamily: 'Lato, sans-serif' }}>
                        {product.bestFor}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <div className="h-2" />
            </div>
          </div>

          {/* ── FIXED BOTTOM CTA ── */}
          <div className="border-t border-neutral-100 px-5 py-4 bg-white flex-shrink-0">
            <button
              className="w-full py-3.5 rounded-xl bg-primary-600 text-white text-sm font-bold hover:bg-primary-700 active:scale-[0.98] transition-all"
              style={{ fontFamily: 'Lato, sans-serif' }}
              onClick={() => {
                if (product.applyLink) window.open(product.applyLink, '_blank');
                else onClose();
              }}
            >
              {getCtaText()}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProductDetailModal;