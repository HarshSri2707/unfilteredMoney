


// // // import { motion } from 'framer-motion';
// // // import { Link } from 'react-router-dom'; // ← Added for "View All" link if needed

// // // const AllProducts = ({
// // //   products,
// // //   type,
// // //   title,
// // //   onProductClick,
// // //   isTeaser = false,          // ← New prop: true on landing page (limits items)
// // //   showViewAllButton = false, // ← New prop: show "View All" button on teaser
// // //   maxItems = 9,              // ← Default max items for teaser mode
// // // }) => {
// // //   // Limit products if in teaser mode
// // //   const displayedProducts = isTeaser 
// // //     ? products.slice(0, maxItems) 
// // //     : products;

// // //   const getTypeLabel = () => {
// // //     switch (type) {
// // //       case 'credit-cards': return 'Credit Card';
// // //       case 'insurance': return 'Insurance Plan';
// // //       case 'investments': return 'Investment Option';
// // //       default: return 'Product';
// // //     }
// // //   };

// // //   return (
// // //     <section className="py-10 bg-white">
// // //       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
// // //         <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
// // //           <motion.h2
// // //             className="text-2xl md:text-3xl font-bold text-neutral-900"
// // //             initial={{ opacity: 0, y: 20 }}
// // //             whileInView={{ opacity: 1, y: 0 }}
// // //             viewport={{ once: true }}
// // //             style={{ fontFamily: 'Lato, sans-serif', fontWeight: 900 }}
// // //           >
// // //             {title}
// // //           </motion.h2>

// // //           {/* Optional "View All" button when in teaser mode */}
// // //           {showViewAllButton && (
// // //             <Link
// // //               to={`/${type}/all`}
// // //               className="inline-flex items-center px-6 py-2.5 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors text-sm"
// // //             >
// // //               View All {getTypeLabel()}s
// // //               <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
// // //               </svg>
// // //             </Link>
// // //           )}
// // //         </div>

// // //         {displayedProducts.length > 0 ? (
// // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
// // //             {displayedProducts.map((product, idx) => (
// // //               <motion.div
// // //                 key={product.id}
// // //                 initial={{ opacity: 0, y: 20 }}
// // //                 whileInView={{ opacity: 1, y: 0 }}
// // //                 viewport={{ once: true }}
// // //                 transition={{ duration: 0.4, delay: idx * 0.06 }}
// // //                 onClick={() => onProductClick?.(product)}
// // //                 className="group bg-white border border-neutral-200 rounded-xl overflow-hidden hover:border-primary-400 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col h-full"
// // //               >
// // //                 {/* Optional small image banner (if you add image later) */}
// // //                 {/* <div className="h-32 bg-gradient-to-br from-neutral-50 to-neutral-100 flex items-center justify-center">
// // //                   <span className="text-5xl opacity-30">
// // //                     {type === 'credit-cards' ? '💳' : type === 'insurance' ? '🛡️' : '📈'}
// // //                   </span>
// // //                 </div> */}

// // //                 <div className="p-5 flex flex-col flex-1">
// // //                   <div className="flex items-start justify-between gap-3 mb-3">
// // //                     <div className="flex-1">
// // //                       <h3 className="text-lg font-bold text-neutral-900 group-hover:text-primary-600 transition-colors line-clamp-2">
// // //                         {product.name}
// // //                       </h3>
// // //                       <p className="text-sm text-neutral-600 mt-1">
// // //                         {product.bank || product.provider || product.company || product.category || '—'}
// // //                       </p>
// // //                     </div>

// // //                     {product.rating && (
// // //                       <div className="flex-shrink-0 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
// // //                         <span className="text-amber-700 font-bold text-sm">★ {product.rating}</span>
// // //                       </div>
// // //                     )}
// // //                   </div>

// // //                   {/* Key Info - Compact & Aligned */}
// // //                   <div className="space-y-2.5 text-sm mt-2">
// // //                     <div className="flex justify-between items-center">
// // //                       <span className="text-neutral-600">
// // //                         {type === 'credit-cards' ? 'Annual Fee' : type === 'insurance' ? 'Est. Premium' : 'Expected Returns'}
// // //                       </span>
// // //                       <span className="font-semibold text-neutral-900">
// // //                         {product.annualFee || product.premiumEstimate || product.returns || '—'}
// // //                       </span>
// // //                     </div>

// // //                     {product.claimSettlementRatio && (
// // //                       <div className="flex justify-between items-center">
// // //                         <span className="text-neutral-600">Claim Ratio</span>
// // //                         <span className="font-semibold text-green-600">{product.claimSettlementRatio}</span>
// // //                       </div>
// // //                     )}
// // //                   </div>

// // //                   {/* Best For */}
// // //                   {product.bestFor && (
// // //                     <div className="mt-auto pt-4">
// // //                       <p className="text-xs text-neutral-500 mb-1.5">Best For</p>
// // //                       <p className="text-sm text-neutral-800 font-medium line-clamp-2 leading-snug">
// // //                         {product.bestFor}
// // //                       </p>
// // //                     </div>
// // //                   )}

// // //                   {/* View Details hint */}
// // //                   <div className="mt-4 pt-4 border-t border-neutral-100">
// // //                     <span className="text-sm text-primary-600 font-semibold inline-flex items-center gap-1.5 group-hover:gap-2 transition-all">
// // //                       View Details
// // //                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
// // //                       </svg>
// // //                     </span>
// // //                   </div>
// // //                 </div>
// // //               </motion.div>
// // //             ))}
// // //           </div>
// // //         ) : (
// // //           <div className="text-center py-16 bg-neutral-50 rounded-xl">
// // //             <p className="text-lg text-neutral-600 font-medium">
// // //               No {getTypeLabel()}s found in this section.
// // //             </p>
// // //           </div>
// // //         )}
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default AllProducts;


// // // import { motion } from 'framer-motion';

// // // const AllProducts = ({ products = [], type, title, onProductClick, searchValue = '' }) => {
// // //   const getCtaText = () => {
// // //     if (type === 'credit-cards') return 'Apply Now';
// // //     if (type === 'insurance') return 'Apply';
// // //     return 'Invest';
// // //   };

// // //   const filtered = products.filter((p) => {
// // //     const q = searchValue.toLowerCase();
// // //     if (!q) return true;
// // //     return (
// // //       p.name?.toLowerCase().includes(q) ||
// // //       p.bank?.toLowerCase().includes(q) ||
// // //       p.provider?.toLowerCase().includes(q) ||
// // //       p.category?.toLowerCase().includes(q)
// // //     );
// // //   });

// // //   return (
// // //     <section className="py-6 md:py-8 bg-white">
// // //       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
// // //         {title && (
// // //           <motion.h2
// // //             className="text-lg md:text-xl font-extrabold text-neutral-900 mb-5"
// // //             initial={{ opacity: 0, y: 10 }}
// // //             whileInView={{ opacity: 1, y: 0 }}
// // //             viewport={{ once: true }}
// // //             style={{ fontFamily: 'Lato, sans-serif' }}
// // //           >
// // //             {title}
// // //           </motion.h2>
// // //         )}

// // //         {filtered.length > 0 ? (
// // //           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
// // //             {filtered.map((product, idx) => (
// // //               <motion.div
// // //                 key={product.id}
// // //                 initial={{ opacity: 0, y: 16 }}
// // //                 whileInView={{ opacity: 1, y: 0 }}
// // //                 viewport={{ once: true }}
// // //                 transition={{ duration: 0.35, delay: Math.min(idx * 0.05, 0.4) }}
// // //                 onClick={() => onProductClick?.(product)}
// // //                 className="group bg-white rounded-2xl border border-neutral-200 overflow-hidden hover:shadow-lg hover:border-neutral-300 transition-all duration-300 flex flex-col cursor-pointer"
// // //               >
// // //                 {/* Image */}
// // //                 <div className="w-full h-36 bg-neutral-50 overflow-hidden flex-shrink-0">
// // //                   {product.image || product.img ? (
// // //                     <img
// // //                       src={product.image || product.img}
// // //                       alt={product.name}
// // //                       className="w-full h-full object-contain-cover group-hover:scale-105 transition-transform duration-500"
// // //                       onError={(e) => { e.target.style.display = 'none'; }}
// // //                     />
// // //                   ) : (
// // //                     <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-50 to-blue-50">
// // //                       <span className="text-4xl opacity-20">
// // //                         {type === 'credit-cards' ? '💳' : type === 'insurance' ? '🛡️' : '📈'}
// // //                       </span>
// // //                     </div>
// // //                   )}
// // //                 </div>

// // //                 <div className="p-4 flex flex-col flex-1">
// // //                   <h3 className="text-sm font-bold text-neutral-900 mb-0.5 leading-snug group-hover:text-primary-600 transition-colors" style={{ fontFamily: 'Lato, sans-serif' }}>
// // //                     {product.name}
// // //                   </h3>
// // //                   <p className="text-xs text-neutral-500 mb-3" style={{ fontFamily: 'Lato, sans-serif' }}>
// // //                     {product.bank || product.provider || product.category}
// // //                   </p>

// // //                   <p className="text-xs font-semibold text-neutral-700 mb-1" style={{ fontFamily: 'Lato, sans-serif' }}>Benefits & Features</p>
// // //                   <p className="text-xs text-neutral-500 leading-relaxed mb-3 flex-1" style={{ fontFamily: 'Lato, sans-serif' }}>
// // //                     {product.pros ? product.pros.slice(0, 2).join('. ') : product.description || '—'}
// // //                   </p>

// // //                   <div className="border-t border-neutral-100 pt-2 mb-3 space-y-1.5">
// // //                     {type === 'insurance' && (
// // //                       <>
// // //                         <div className="flex justify-between"><span className="text-xs text-neutral-500" style={{ fontFamily: 'Lato, sans-serif' }}>Coverage</span><span className="text-xs font-bold text-neutral-900" style={{ fontFamily: 'Lato, sans-serif' }}>{product.coverageAmount || '5L'}</span></div>
// // //                         <div className="flex justify-between"><span className="text-xs text-neutral-500" style={{ fontFamily: 'Lato, sans-serif' }}>Claim Settlement</span><span className="text-xs font-bold text-neutral-900" style={{ fontFamily: 'Lato, sans-serif' }}>{product.claimSettlementRatio || '—'}</span></div>
// // //                         <div className="flex justify-between pt-1"><span className="text-xs font-semibold text-neutral-700" style={{ fontFamily: 'Lato, sans-serif' }}>Premium</span><span className="text-sm font-extrabold text-neutral-900" style={{ fontFamily: 'Lato, sans-serif' }}>{product.premiumEstimate || '—'}</span></div>
// // //                       </>
// // //                     )}
// // //                     {type === 'credit-cards' && (
// // //                       <div className="flex justify-between"><span className="text-xs font-semibold text-neutral-700" style={{ fontFamily: 'Lato, sans-serif' }}>Annual Fee</span><span className="text-sm font-extrabold text-neutral-900" style={{ fontFamily: 'Lato, sans-serif' }}>{product.annualFee || 'NIL'}</span></div>
// // //                     )}
// // //                     {type === 'investments' && product.returns && (
// // //                       <div className="flex justify-between"><span className="text-xs text-neutral-500" style={{ fontFamily: 'Lato, sans-serif' }}>Expected Returns</span><span className="text-xs font-bold text-neutral-900" style={{ fontFamily: 'Lato, sans-serif' }}>{product.returns}</span></div>
// // //                     )}
// // //                   </div>

// // //                   <button
// // //                     className="w-full py-2.5 rounded-xl bg-primary-600 text-white text-sm font-bold hover:bg-primary-700 active:scale-[0.98] transition-all"
// // //                     style={{ fontFamily: 'Lato, sans-serif' }}
// // //                     onClick={(e) => { e.stopPropagation(); onProductClick?.(product); }}
// // //                   >
// // //                     {getCtaText()}
// // //                   </button>
// // //                 </div>
// // //               </motion.div>
// // //             ))}
// // //           </div>
// // //         ) : (
// // //           <div className="text-center py-14 text-neutral-400 text-sm" style={{ fontFamily: 'Lato, sans-serif' }}>
// // //             No products found{searchValue ? ` for "${searchValue}"` : ''}.
// // //           </div>
// // //         )}
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default AllProducts;

// // import { motion } from 'framer-motion';

// // const AllProducts = ({ products = [], type, title, onProductClick, searchValue = '' }) => {

// //   const getCtaText = () => {
// //     if (type === 'credit-cards') return 'Apply Now';
// //     if (type === 'insurance') return 'Apply';
// //     return 'Invest';
// //   };

// //   const filtered = products.filter((p) => {
// //     const q = searchValue.toLowerCase();
// //     if (!q) return true;
// //     return (
// //       p.name?.toLowerCase().includes(q) ||
// //       p.bank?.toLowerCase().includes(q) ||
// //       p.provider?.toLowerCase().includes(q) ||
// //       p.category?.toLowerCase().includes(q)
// //     );
// //   });

// //   return (
// //     <section className="py-8 bg-white">
// //       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

// //         {title && (
// //           <motion.h2
// //             className="text-xl font-extrabold text-neutral-900 mb-6"
// //             initial={{ opacity: 0, y: 10 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //             style={{ fontFamily: 'Lato, sans-serif' }}
// //           >
// //             {title}
// //           </motion.h2>
// //         )}

// //         {filtered.length > 0 ? (
// //           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

// //             {filtered.map((product, idx) => (

// //               <motion.div
// //   key={product.id}
// //   initial={{ opacity: 0, y: 20 }}
// //   whileInView={{ opacity: 1, y: 0 }}
// //   viewport={{ once: true }}
// //   transition={{ duration: 0.35, delay: Math.min(idx * 0.05, 0.4) }}
// //   onClick={() => onProductClick?.(product)}
// //   className="h-full"
// // >
// //   <div className="group bg-white rounded-2xl border-2 border-neutral-200 hover:border-primary-400 hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col min-h-[540px]">

// //     {/* Image Section */}
// //     <div className="relative h-48 w-full shrink-0 overflow-hidden bg-neutral-50 flex items-center justify-center">
// //       {product.image ? (
// //         <img
// //           src={product.image}
// //           alt={product.name}
// //           className="w-full h-full object-contain-cover transition-transform duration-500 "
// //         />
// //       ) : (
// //         <div className="flex items-center justify-center w-full h-full bg-gradient-to-br from-primary-50 to-blue-50 text-5xl opacity-20">
// //           {type === 'credit-cards' ? '💳' : type === 'insurance' ? '🛡️' : '📈'}
// //         </div>
// //       )}

// //       {/* Rating Badge */}
// //       {product.rating && (
// //         <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full shadow-lg">
// //           <span className="text-sm font-bold text-amber-600">⭐ {product.rating}</span>
// //         </div>
// //       )}
// //     </div>

// //     {/* Content Section */}
// //     <div className="p-5 flex flex-col flex-1">

// //       <div className="mb-4">
// //         <h3 className="text-lg md:text-xl font-bold text-neutral-900 mb-1 group-hover:text-primary-600 transition-colors">
// //           {product.name}
// //         </h3>
// //         <p className="text-sm text-neutral-600">
// //           {product.bank || product.provider || product.category}
// //         </p>
// //       </div>

// //       {/* Dynamic Middle Section */}
// //       <div className="space-y-3 mb-6">

// //         {type === 'credit-cards' && (
// //           <>
// //             <div className="flex justify-between text-sm">
// //               <span className="text-neutral-500">Annual Fee</span>
// //               <span className="font-bold text-neutral-900">{product.annualFee || 'NIL'}</span>
// //             </div>
// //             {product.feeWaiver && (
// //               <div className="flex justify-between text-sm">
// //                 <span className="text-neutral-500">Fee Waiver</span>
// //                 <span className="font-medium text-neutral-800">{product.feeWaiver}</span>
// //               </div>
// //             )}
// //           </>
// //         )}

// //         {type === 'insurance' && (
// //           <>
// //             <div className="flex justify-between text-sm">
// //               <span className="text-neutral-500">Claim Ratio</span>
// //               <span className="font-bold text-neutral-900">{product.claimSettlementRatio}</span>
// //             </div>
// //             <div className="flex justify-between text-sm">
// //               <span className="text-neutral-500">Premium</span>
// //               <span className="font-bold text-neutral-900">{product.premiumEstimate}</span>
// //             </div>
// //           </>
// //         )}

// //         {type === 'investments' && (
// //           <div className="flex justify-between text-sm">
// //             <span className="text-neutral-500">5Y Returns</span>
// //             <span className="font-bold text-neutral-900">{product.returns}</span>
// //           </div>
// //         )}

// //       </div>

// //       {/* Best For - Auto pushes down */}
// //       {product.bestFor && (
// //         <div className="pt-4 border-t border-neutral-200 mt-auto mb-4">
// //           <p className="text-xs text-neutral-500 mb-1">Best For:</p>
// //           <p className="text-sm font-medium text-neutral-900 leading-snug">
// //             {product.bestFor}
// //           </p>
// //         </div>
// //       )}

// //       {/* CTA */}
// //       <button
// //         className="w-full py-3 rounded-xl bg-primary-600 text-white text-sm font-bold hover:bg-primary-700 active:scale-[0.98] transition-all"
// //         onClick={(e) => { e.stopPropagation(); onProductClick?.(product); }}
// //       >
// //         {type === 'credit-cards' ? 'Apply Now' : type === 'insurance' ? 'Apply' : 'Invest'}
// //       </button>

// //     </div>
// //   </div>
// // </motion.div>
// //             ))}

// //           </div>
// //         ) : (
// //           <div className="text-center py-16 text-neutral-400 text-sm">
// //             No products found{searchValue ? ` for "${searchValue}"` : ''}.
// //           </div>
// //         )}
// //       </div>
// //     </section>
// //   );
// // };

// // export default AllProducts;

// import { motion } from 'framer-motion';

// const AllProducts = ({ products = [], type, title, onProductClick, searchValue = '' }) => {

//   const filtered = products.filter((p) => {
//     const q = searchValue.toLowerCase();
//     if (!q) return true;
//     return (
//       p.name?.toLowerCase().includes(q) ||
//       p.bank?.toLowerCase().includes(q) ||
//       p.provider?.toLowerCase().includes(q) ||
//       p.category?.toLowerCase().includes(q)
//     );
//   });

//   return (
//     <section className="py-8 bg-white">
//       <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

//         {title && (
//           <motion.h2
//             className="text-xl font-extrabold text-neutral-900 mb-6"
//             initial={{ opacity: 0, y: 10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             style={{ fontFamily: 'Lato, sans-serif' }}
//           >
//             {title}
//           </motion.h2>
//         )}

//         {filtered.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
//             {filtered.map((product, idx) => (
//               <motion.div
//                 key={product.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.35, delay: Math.min(idx * 0.05, 0.4) }}
//                 onClick={() => onProductClick?.(product)}
//                 className="h-full"
//               >
//                 <div className="group bg-white rounded-2xl border-2 border-neutral-200 hover:border-primary-400 hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col min-h-[540px] cursor-pointer">

//                   {/* ── IMAGE — equal padding all 4 sides ── */}
//                   <div className="relative w-full shrink-0 bg-neutral-50 p-3">
//                     <div className="relative h-44 w-full overflow-hidden rounded-xl">
//                       {product.image ? (
//                         <img
//                           src={product.image}
//                           alt={product.name}
//                           className="w-full h-full object-contain-cover  transition-transform duration-500"
//                           onError={(e) => { e.target.style.display = 'none'; }}
//                         />
//                       ) : (
//                         <div className="flex items-center justify-center w-full h-full bg-gradient-to-br from-primary-50 to-blue-50 text-5xl opacity-20">
//                           {type === 'credit-cards' ? '💳' : type === 'insurance' ? '🛡️' : '📈'}
//                         </div>
//                       )}
//                       {product.rating && (
//                         <div className="absolute top-2 right-2 bg-white px-3 py-1 rounded-full shadow-lg">
//                           <span className="text-sm font-bold text-amber-600">⭐ {product.rating}</span>
//                         </div>
//                       )}
//                     </div>
//                   </div>

//                   {/* Content */}
//                   <div className="p-5 flex flex-col flex-1">

//                     <div className="mb-4">
//                       <h3
//                         className="text-lg md:text-xl font-bold text-neutral-900 mb-1 group-hover:text-primary-600 transition-colors"
//                         style={{ fontFamily: 'Lato, sans-serif' }}
//                       >
//                         {product.name}
//                       </h3>
//                       <p className="text-sm font-semibold text-neutral-500" style={{ fontFamily: 'Lato, sans-serif' }}>
//                         {product.bank || product.provider || product.category}
//                       </p>
//                     </div>

//                     <div className="space-y-3 mb-6">
//                       {type === 'credit-cards' && (
//                         <>
//                           <div className="flex justify-between text-sm">
//                             <span className="font-semibold text-neutral-500" style={{ fontFamily: 'Lato, sans-serif' }}>Annual Fee</span>
//                             <span className="font-bold text-neutral-900" style={{ fontFamily: 'Lato, sans-serif' }}>{product.annualFee || 'NIL'}</span>
//                           </div>
//                           {product.feeWaiver && (
//                             <div className="flex justify-between text-sm">
//                               <span className="font-semibold text-neutral-500" style={{ fontFamily: 'Lato, sans-serif' }}>Fee Waiver</span>
//                               <span className="font-semibold text-neutral-800" style={{ fontFamily: 'Lato, sans-serif' }}>{product.feeWaiver}</span>
//                             </div>
//                           )}
//                         </>
//                       )}
//                       {type === 'insurance' && (
//                         <>
//                           <div className="flex justify-between text-sm">
//                             <span className="font-semibold text-neutral-500" style={{ fontFamily: 'Lato, sans-serif' }}>Claim Ratio</span>
//                             <span className="font-bold text-neutral-900" style={{ fontFamily: 'Lato, sans-serif' }}>{product.claimSettlementRatio}</span>
//                           </div>
//                           <div className="flex justify-between text-sm">
//                             <span className="font-semibold text-neutral-500" style={{ fontFamily: 'Lato, sans-serif' }}>Premium</span>
//                             <span className="font-bold text-neutral-900" style={{ fontFamily: 'Lato, sans-serif' }}>{product.premiumEstimate}</span>
//                           </div>
//                         </>
//                       )}
//                       {type === 'investments' && (
//                         <div className="flex justify-between text-sm">
//                           <span className="font-semibold text-neutral-500" style={{ fontFamily: 'Lato, sans-serif' }}>5Y Returns</span>
//                           <span className="font-bold text-neutral-900" style={{ fontFamily: 'Lato, sans-serif' }}>{product.returns}</span>
//                         </div>
//                       )}
//                     </div>

//                     {product.bestFor && (
//                       <div className="pt-4 border-t border-neutral-200 mt-auto mb-4">
//                         <p className="text-xs font-bold text-neutral-500 mb-1" style={{ fontFamily: 'Lato, sans-serif' }}>Best For:</p>
//                         <p className="text-sm font-semibold text-neutral-800 leading-snug" style={{ fontFamily: 'Lato, sans-serif' }}>
//                           {product.bestFor}
//                         </p>
//                       </div>
//                     )}

//                     <button
//                       className="w-full py-3 rounded-full bg-primary-600 text-white text-sm font-bold hover:bg-primary-700 active:scale-[0.98] transition-all"
//                       style={{ fontFamily: 'Lato, sans-serif' }}
//                       onClick={(e) => { e.stopPropagation(); onProductClick?.(product); }}
//                     >
//                       {type === 'credit-cards' ? 'Apply Now' : type === 'insurance' ? 'Apply' : 'Invest'}
//                     </button>

//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         ) : (
//           <div className="text-center py-16 text-neutral-400 text-sm font-semibold" style={{ fontFamily: 'Lato, sans-serif' }}>
//             No products found{searchValue ? ` for "${searchValue}"` : ''}.
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default AllProducts;


import { motion } from 'framer-motion';

const AllProducts = ({ products = [], type, title, onProductClick, searchValue = '' }) => {

  const filtered = products.filter((p) => {
    const q = searchValue.toLowerCase();
    if (!q) return true;
    return (
      p.name?.toLowerCase().includes(q) ||
      p.bank?.toLowerCase().includes(q) ||
      p.provider?.toLowerCase().includes(q) ||
      p.category?.toLowerCase().includes(q)
    );
  });

  return (
    <section className="py-8 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

        {title && (
          <motion.h2
            className="text-xl font-extrabold text-neutral-900 mb-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ fontFamily: 'Lato, sans-serif' }}
          >
            {title}
          </motion.h2>
        )}

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: Math.min(idx * 0.05, 0.4) }}
                onClick={() => onProductClick?.(product)}
                className="h-full"
              >
                <div className="group bg-white rounded-2xl border-2 border-neutral-200 hover:border-primary-400 hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col min-h-[540px] cursor-pointer">

                  {/* ── IMAGE — equal padding all 4 sides ── */}
                  <div className="relative w-full shrink-0 bg-neutral-50 p-3">
                    <div className="relative h-44 w-full overflow-hidden rounded-xl">
                      {product.image ? (
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-contain-cover  transition-transform duration-500"
                          onError={(e) => { e.target.style.display = 'none'; }}
                        />
                      ) : (
                        <div className="flex items-center justify-center w-full h-full bg-gradient-to-br from-primary-50 to-blue-50 text-5xl opacity-20">
                          {type === 'credit-cards' ? '💳' : type === 'insurance' ? '🛡️' : '📈'}
                        </div>
                      )}
                      {product.rating && (
                        <div
                          className="absolute bottom-2.5 right-2.5 flex items-center gap-1.5 px-3 py-1.5 rounded-full"
                          style={{
                            background: 'rgba(30, 30, 30, 0.55)',
                            backdropFilter: 'blur(12px)',
                            WebkitBackdropFilter: 'blur(12px)',
                            border: '1px solid rgba(255, 255, 255, 0.15)',
                          }}
                        >
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="#FBBF24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                          </svg>
                          <span className="text-white text-xs font-bold tracking-wide">{product.rating}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">

                    <div className="mb-4">
                      <h3
                        className="text-lg md:text-xl font-bold text-neutral-900 mb-1 group-hover:text-primary-600 transition-colors"
                        style={{ fontFamily: 'Lato, sans-serif' }}
                      >
                        {product.name}
                      </h3>
                      <p className="text-sm font-semibold text-neutral-500" style={{ fontFamily: 'Lato, sans-serif' }}>
                        {product.bank || product.provider || product.category}
                      </p>
                    </div>

                    <div className="space-y-3 mb-6">
                      {type === 'credit-cards' && (
                        <>
                          <div className="flex justify-between text-sm">
                            <span className="font-semibold text-neutral-500" style={{ fontFamily: 'Lato, sans-serif' }}>Annual Fee</span>
                            <span className="font-bold text-neutral-900" style={{ fontFamily: 'Lato, sans-serif' }}>{product.annualFee || 'NIL'}</span>
                          </div>
                          {product.feeWaiver && (
                            <div className="flex justify-between text-sm">
                              <span className="font-semibold text-neutral-500" style={{ fontFamily: 'Lato, sans-serif' }}>Fee Waiver</span>
                              <span className="font-semibold text-neutral-800" style={{ fontFamily: 'Lato, sans-serif' }}>{product.feeWaiver}</span>
                            </div>
                          )}
                        </>
                      )}
                      {type === 'insurance' && (
                        <>
                          <div className="flex justify-between text-sm">
                            <span className="font-semibold text-neutral-500" style={{ fontFamily: 'Lato, sans-serif' }}>Claim Ratio</span>
                            <span className="font-bold text-neutral-900" style={{ fontFamily: 'Lato, sans-serif' }}>{product.claimSettlementRatio}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="font-semibold text-neutral-500" style={{ fontFamily: 'Lato, sans-serif' }}>Premium</span>
                            <span className="font-bold text-neutral-900" style={{ fontFamily: 'Lato, sans-serif' }}>{product.premiumEstimate}</span>
                          </div>
                        </>
                      )}
                      {type === 'investments' && (
                        <div className="flex justify-between text-sm">
                          <span className="font-semibold text-neutral-500" style={{ fontFamily: 'Lato, sans-serif' }}>5Y Returns</span>
                          <span className="font-bold text-neutral-900" style={{ fontFamily: 'Lato, sans-serif' }}>{product.returns}</span>
                        </div>
                      )}
                    </div>

                    {product.bestFor && (
                      <div className="pt-4 border-t border-neutral-200 mt-auto mb-4">
                        <p className="text-xs font-bold text-neutral-500 mb-1" style={{ fontFamily: 'Lato, sans-serif' }}>Best For:</p>
                        <p className="text-sm font-semibold text-neutral-800 leading-snug" style={{ fontFamily: 'Lato, sans-serif' }}>
                          {product.bestFor}
                        </p>
                      </div>
                    )}

                    <button
                      className="w-full py-3 rounded-full bg-primary-600 text-white text-sm font-bold hover:bg-primary-700 active:scale-[0.98] transition-all"
                      style={{ fontFamily: 'Lato, sans-serif' }}
                      onClick={(e) => { e.stopPropagation(); onProductClick?.(product); }}
                    >
                      {type === 'credit-cards' ? 'Apply Now' : type === 'insurance' ? 'Apply' : 'Invest'}
                    </button>

                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-neutral-400 text-sm font-semibold" style={{ fontFamily: 'Lato, sans-serif' }}>
            No products found{searchValue ? ` for "${searchValue}"` : ''}.
          </div>
        )}
      </div>
    </section>
  );
};

export default AllProducts;