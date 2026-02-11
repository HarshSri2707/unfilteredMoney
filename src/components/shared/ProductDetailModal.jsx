// import { motion, AnimatePresence } from 'framer-motion';
// import { useEffect } from 'react';

// const ProductDetailModal = ({ product, type, onClose }) => {
//   // Close on ESC key
//   useEffect(() => {
//     const handleEsc = (e) => {
//       if (e.key === 'Escape') onClose();
//     };
//     window.addEventListener('keydown', handleEsc);
//     return () => window.removeEventListener('keydown', handleEsc);
//   }, [onClose]);

//   // Prevent body scroll
//   useEffect(() => {
//     document.body.style.overflow = 'hidden';
//     return () => {
//       document.body.style.overflow = 'unset';
//     };
//   }, []);

//   return (
//     <AnimatePresence>
//       <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
//         {/* Backdrop */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           onClick={onClose}
//           className="absolute inset-0 bg-black/60 backdrop-blur-sm"
//         />

//         {/* Modal Content */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95, y: 20 }}
//           animate={{ opacity: 1, scale: 1, y: 0 }}
//           exit={{ opacity: 0, scale: 0.95, y: 20 }}
//           transition={{ duration: 0.3 }}
//           className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
//         >
//           {/* Close Button */}
//           <button
//             onClick={onClose}
//             className="absolute top-4 right-4 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-neutral-100 transition-colors"
//           >
//             <svg className="w-5 h-5 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           </button>

//           {/* Image Section */}
//           <div className="relative bg-gradient-to-br from-neutral-50 to-neutral-100 p-8 md:p-12 flex items-center justify-center border-b border-neutral-200">
//             <img
//               src={product.image}
//               alt={product.name}
//               className="max-h-64 max-w-full object-contain drop-shadow-2xl"
//               onError={(e) => {
//                 e.target.style.display = 'none';
//                 e.target.nextSibling.style.display = 'flex';
//               }}
//             />
//             <div className="absolute inset-0 hidden items-center justify-center">
//               <span className="text-9xl opacity-20">
//                 {type === 'credit-cards' ? '💳' : type === 'insurance' ? '🛡️' : '📈'}
//               </span>
//             </div>

//             {/* Rating Badge */}
//             <div className="absolute top-6 right-6 bg-white px-4 py-2 rounded-xl shadow-lg">
//               <div className="flex items-center gap-2">
//                 <span className="text-amber-500 text-lg">⭐</span>
//                 <span className="text-neutral-900 text-lg font-bold">{product.rating}</span>
//               </div>
//             </div>
//           </div>

//           {/* Content Section */}
//           <div className="p-6 md:p-8">
//             {/* Title & Provider */}
//             <div className="mb-6">
//               <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-2" style={{ fontFamily: 'Lato, sans-serif' }}>
//                 {product.name}
//               </h2>
//               <p className="text-lg text-neutral-600 font-semibold">
//                 {product.bank || product.provider || product.category}
//               </p>
//             </div>

//             {/* Key Info Cards */}
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
//               <div className="bg-neutral-50 rounded-xl p-4 border border-neutral-200">
//                 <p className="text-xs text-neutral-500 uppercase tracking-wide mb-1">
//                   {type === 'credit-cards' ? 'Annual Fee' : type === 'insurance' ? 'Premium' : 'Returns'}
//                 </p>
//                 <p className="text-lg font-bold text-neutral-900">
//                   {product.annualFee || product.premiumEstimate || product.returns}
//                 </p>
//               </div>

//               {product.feeWaiver && (
//                 <div className="bg-green-50 rounded-xl p-4 border border-green-200">
//                   <p className="text-xs text-green-700 uppercase tracking-wide mb-1">Fee Waiver</p>
//                   <p className="text-sm font-bold text-green-700">{product.feeWaiver}</p>
//                 </div>
//               )}

//               {product.claimSettlementRatio && (
//                 <div className="bg-green-50 rounded-xl p-4 border border-green-200">
//                   <p className="text-xs text-green-700 uppercase tracking-wide mb-1">Claims</p>
//                   <p className="text-lg font-bold text-green-600">{product.claimSettlementRatio}</p>
//                 </div>
//               )}

//               {product.expenseRatio && (
//                 <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
//                   <p className="text-xs text-blue-700 uppercase tracking-wide mb-1">Expense Ratio</p>
//                   <p className="text-lg font-bold text-blue-600">{product.expenseRatio}</p>
//                 </div>
//               )}
//             </div>

//             {/* Best For */}
//             <div className="bg-primary-50 rounded-xl p-4 mb-8 border-l-4 border-primary-500">
//               <div className="flex items-start gap-3">
//                 <span className="text-2xl">💡</span>
//                 <div>
//                   <p className="text-sm font-bold text-primary-900 mb-1">Best For</p>
//                   <p className="text-base text-primary-800">{product.bestFor}</p>
//                 </div>
//               </div>
//             </div>

//             {/* Pros & Cons */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//               {/* Pros */}
//               <div>
//                 <h3 className="text-lg font-bold text-neutral-900 mb-4 flex items-center gap-2" style={{ fontFamily: 'Lato, sans-serif' }}>
//                   <span className="text-green-600">✓</span>
//                   Pros
//                 </h3>
//                 <div className="space-y-3">
//                   {product.pros?.map((pro, i) => (
//                     <div key={i} className="flex items-start gap-3">
//                       <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
//                         <span className="text-green-600 text-sm font-bold">✓</span>
//                       </div>
//                       <span className="text-base text-neutral-700 leading-relaxed" style={{ fontFamily: 'Lato, sans-serif' }}>
//                         {pro}
//                       </span>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Cons */}
//               {product.cons && product.cons.length > 0 && (
//                 <div>
//                   <h3 className="text-lg font-bold text-neutral-900 mb-4 flex items-center gap-2" style={{ fontFamily: 'Lato, sans-serif' }}>
//                     <span className="text-red-600">✕</span>
//                     Cons
//                   </h3>
//                   <div className="space-y-3">
//                     {product.cons.map((con, i) => (
//                       <div key={i} className="flex items-start gap-3">
//                         <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
//                           <span className="text-red-600 text-sm font-bold">✕</span>
//                         </div>
//                         <span className="text-base text-neutral-700 leading-relaxed" style={{ fontFamily: 'Lato, sans-serif' }}>
//                           {con}
//                         </span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* CTA Buttons */}
//             <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-neutral-200">
//               <button className="flex-1 bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 py-3 rounded-xl font-bold hover:shadow-xl transition-all">
//                 Apply Now
//               </button>
//               <button 
//                 onClick={onClose}
//                 className="flex-1 bg-neutral-100 text-neutral-700 px-6 py-3 rounded-xl font-bold hover:bg-neutral-200 transition-all"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </AnimatePresence>
//   );
// };

// export default ProductDetailModal;

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

const ProductDetailModal = ({ product, type, onClose }) => {
  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative bg-white rounded-t-3xl sm:rounded-2xl shadow-2xl w-full sm:max-w-2xl max-h-[95vh] sm:max-h-[85vh] overflow-hidden flex flex-col"
        >
          {/* Header with Close Button */}
          <div className="relative bg-gradient-to-br from-primary-50 via-white to-accent-50 px-5 py-6 border-b border-neutral-200">
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full shadow-md flex items-center justify-center hover:bg-white transition-all"
            >
              <svg className="w-5 h-5 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="flex items-center gap-4">
              {/* Product Image */}
              <div className="relative flex-shrink-0">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-xl shadow-md flex items-center justify-center p-2">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="absolute inset-0 hidden items-center justify-center">
                    <span className="text-5xl opacity-20">
                      {type === 'credit-cards' ? '💳' : type === 'insurance' ? '🛡️' : '📈'}
                    </span>
                  </div>
                </div>
                
                {/* Rating Badge */}
                {product.rating && (
                  <div className="absolute -top-1 -right-1 bg-yellow-400 px-2 py-1 rounded-full shadow-md">
                    <div className="flex items-center gap-1">
                      <span className="text-white text-xs">⭐</span>
                      <span className="text-neutral-900 text-xs font-bold">{product.rating}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Title & Provider */}
              <div className="flex-1 pr-8">
                <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-1 line-clamp-2" style={{ fontFamily: 'Lato, sans-serif' }}>
                  {product.name}
                </h2>
                {(product.bank || product.provider || product.category) && (
                  <p className="text-sm text-neutral-600 font-medium">
                    {product.bank || product.provider || product.category}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto px-5 py-5">
            {/* Key Metrics Grid */}
            <div className="grid grid-cols-2 gap-3 mb-5">
              {/* Annual Fee / Premium / Returns */}
              {(product.annualFee || product.premiumEstimate || product.returns) && (
                <div className="bg-neutral-50 rounded-lg p-3 border border-neutral-200">
                  <p className="text-xs text-neutral-500 uppercase tracking-wide mb-0.5">
                    {type === 'credit-cards' ? 'Annual Fee' : type === 'insurance' ? 'Premium' : 'Returns'}
                  </p>
                  <p className="text-lg font-bold text-neutral-900">
                    {product.annualFee || product.premiumEstimate || product.returns}
                  </p>
                </div>
              )}

              {/* Fee Waiver */}
              {product.feeWaiver && (
                <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                  <p className="text-xs text-green-700 uppercase tracking-wide mb-0.5">Fee Waiver</p>
                  <p className="text-sm font-bold text-green-700 leading-tight">{product.feeWaiver}</p>
                </div>
              )}

              {/* Claim Settlement Ratio */}
              {product.claimSettlementRatio && (
                <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                  <p className="text-xs text-blue-700 uppercase tracking-wide mb-0.5">Claim Ratio</p>
                  <p className="text-lg font-bold text-blue-600">{product.claimSettlementRatio}</p>
                </div>
              )}

              {/* Expense Ratio */}
              {product.expenseRatio && (
                <div className="bg-purple-50 rounded-lg p-3 border border-purple-200">
                  <p className="text-xs text-purple-700 uppercase tracking-wide mb-0.5">Expense Ratio</p>
                  <p className="text-lg font-bold text-purple-600">{product.expenseRatio}</p>
                </div>
              )}

              {/* Network */}
              {product.network && (
                <div className="bg-indigo-50 rounded-lg p-3 border border-indigo-200">
                  <p className="text-xs text-indigo-700 uppercase tracking-wide mb-0.5">Network</p>
                  <p className="text-sm font-bold text-indigo-700">{product.network}</p>
                </div>
              )}

              {/* AUM */}
              {product.aum && (
                <div className="bg-orange-50 rounded-lg p-3 border border-orange-200">
                  <p className="text-xs text-orange-700 uppercase tracking-wide mb-0.5">AUM</p>
                  <p className="text-sm font-bold text-orange-700">{product.aum}</p>
                </div>
              )}

              {/* Fund Manager */}
              {product.fundManager && (
                <div className="bg-teal-50 rounded-lg p-3 border border-teal-200 col-span-2">
                  <p className="text-xs text-teal-700 uppercase tracking-wide mb-0.5">Fund Manager</p>
                  <p className="text-sm font-bold text-teal-700">{product.fundManager}</p>
                </div>
              )}

              {/* Coverage Amount */}
              {product.coverageAmount && (
                <div className="bg-pink-50 rounded-lg p-3 border border-pink-200">
                  <p className="text-xs text-pink-700 uppercase tracking-wide mb-0.5">Coverage</p>
                  <p className="text-lg font-bold text-pink-700">{product.coverageAmount}</p>
                </div>
              )}
            </div>

            {/* Best For */}
            {product.bestFor && (
              <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-lg p-4 mb-5 border-l-4 border-primary-500">
                <div className="flex items-start gap-2">
                  <span className="text-xl flex-shrink-0">💡</span>
                  <div>
                    <p className="text-xs font-bold text-primary-900 mb-1 uppercase tracking-wide">Best For</p>
                    <p className="text-sm text-primary-800 leading-relaxed" style={{ fontFamily: 'Lato, sans-serif' }}>
                      {product.bestFor}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Pros */}
            {product.pros && product.pros.length > 0 && (
              <div className="mb-5">
                <h3 className="text-base font-bold text-neutral-900 mb-3 flex items-center gap-2" style={{ fontFamily: 'Lato, sans-serif' }}>
                  <span className="text-green-600 text-lg">✓</span>
                  What's Good
                </h3>
                <div className="space-y-2">
                  {product.pros.map((pro, i) => (
                    <div key={i} className="flex items-start gap-2 bg-green-50 rounded-lg p-3 border border-green-100">
                      <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs font-bold">✓</span>
                      </div>
                      <span className="text-sm text-neutral-700 leading-relaxed" style={{ fontFamily: 'Lato, sans-serif' }}>
                        {pro}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Cons */}
            {product.cons && product.cons.length > 0 && (
              <div className="mb-4">
                <h3 className="text-base font-bold text-neutral-900 mb-3 flex items-center gap-2" style={{ fontFamily: 'Lato, sans-serif' }}>
                  <span className="text-red-600 text-lg">✕</span>
                  Watch Out For
                </h3>
                <div className="space-y-2">
                  {product.cons.map((con, i) => (
                    <div key={i} className="flex items-start gap-2 bg-red-50 rounded-lg p-3 border border-red-100">
                      <div className="w-5 h-5 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs font-bold">✕</span>
                      </div>
                      <span className="text-sm text-neutral-700 leading-relaxed" style={{ fontFamily: 'Lato, sans-serif' }}>
                        {con}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Fixed Bottom CTA */}
          <div className="border-t border-neutral-200 px-5 py-4 bg-white">
            <div className="flex gap-3">
              <button 
                onClick={onClose}
                className="flex-1 bg-neutral-100 text-neutral-700 px-5 py-3 rounded-xl font-semibold hover:bg-neutral-200 transition-all text-sm"
              >
                Close
              </button>
              <button className="flex-1 bg-gradient-to-r from-primary-600 to-primary-700 text-white px-5 py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-[1.02] transition-all text-sm">
                Apply Now →
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProductDetailModal;