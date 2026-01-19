// import { motion } from 'framer-motion';

// const AllProducts = ({ products, type, title }) => {
//   return (
//     <section className="py-10 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.h2
//           className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           style={{ fontFamily: 'Lato, sans-serif', fontWeight: 900 }}
//         >
//           {title}
//         </motion.h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           {products.map((product, idx) => (
//             <motion.div
//               key={product.id}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.3, delay: idx * 0.05 }}
//               className="group bg-white border-2 border-neutral-200 rounded-xl p-4 hover:border-primary-300 hover:shadow-lg transition-all"
//             >
//               <div className="flex items-start justify-between mb-3">
//                 <div className="flex-1">
//                   <h3 className="text-base font-bold text-neutral-900 mb-1 group-hover:text-primary-600 transition-colors" style={{ fontFamily: 'Lato, sans-serif' }}>
//                     {product.name}
//                   </h3>
//                   <p className="text-sm text-neutral-600">{product.bank || product.provider}</p>
//                 </div>
//                 <div className="bg-amber-50 px-2 py-1 rounded-lg border border-amber-200 flex-shrink-0">
//                   <span className="text-amber-600 text-xs font-bold">⭐ {product.rating}</span>
//                 </div>
//               </div>

//               <div className="space-y-2 text-sm">
//                 <div className="flex justify-between">
//                   <span className="text-neutral-600">
//                     {type === 'credit-cards' ? 'Fee' : 'Premium'}
//                   </span>
//                   <span className="font-semibold text-neutral-900">
//                     {product.annualFee || product.premiumEstimate}
//                   </span>
//                 </div>
//                 {product.claimSettlementRatio && (
//                   <div className="flex justify-between">
//                     <span className="text-neutral-600">Claims</span>
//                     <span className="font-semibold text-green-600">{product.claimSettlementRatio}</span>
//                   </div>
//                 )}
//               </div>

//               <div className="mt-3 pt-3 border-t border-neutral-200">
//                 <p className="text-xs text-neutral-500 mb-1">Best For</p>
//                 <p className="text-sm text-neutral-900 font-medium leading-snug">{product.bestFor}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AllProducts;


// import { motion } from 'framer-motion';

// const AllProducts = ({ products, type, title, onProductClick }) => {
//   return (
//     <section className="py-10 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.h2
//           className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           style={{ fontFamily: 'Lato, sans-serif', fontWeight: 900 }}
//         >
//           {title}
//         </motion.h2>

//         {products.length > 0 ? (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//             {products.map((product, idx) => (
//               <motion.div
//                 key={product.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.3, delay: idx * 0.05 }}
//                 onClick={() => onProductClick && onProductClick(product)}
//                 className="group bg-white border-2 border-neutral-200 rounded-xl p-4 hover:border-primary-300 hover:shadow-lg transition-all cursor-pointer"
//               >
//                 <div className="flex items-start justify-between mb-3">
//                   <div className="flex-1">
//                     <h3 className="text-base font-bold text-neutral-900 mb-1 group-hover:text-primary-600 transition-colors" style={{ fontFamily: 'Lato, sans-serif' }}>
//                       {product.name}
//                     </h3>
//                     <p className="text-sm text-neutral-600">{product.bank || product.provider || product.category}</p>
//                   </div>
//                   <div className="bg-amber-50 px-2 py-1 rounded-lg border border-amber-200 flex-shrink-0">
//                     <span className="text-amber-600 text-xs font-bold">⭐ {product.rating}</span>
//                   </div>
//                 </div>

//                 <div className="space-y-2 text-sm">
//                   <div className="flex justify-between">
//                     <span className="text-neutral-600">
//                       {type === 'credit-cards' ? 'Fee' : type === 'insurance' ? 'Premium' : 'Returns'}
//                     </span>
//                     <span className="font-semibold text-neutral-900">
//                       {product.annualFee || product.premiumEstimate || product.returns}
//                     </span>
//                   </div>
//                   {product.claimSettlementRatio && (
//                     <div className="flex justify-between">
//                       <span className="text-neutral-600">Claims</span>
//                       <span className="font-semibold text-green-600">{product.claimSettlementRatio}</span>
//                     </div>
//                   )}
//                 </div>

//                 <div className="mt-3 pt-3 border-t border-neutral-200">
//                   <p className="text-xs text-neutral-500 mb-1">Best For</p>
//                   <p className="text-sm text-neutral-900 font-medium leading-snug">{product.bestFor}</p>
//                 </div>

//                 {/* Click hint */}
//                 <div className="mt-3 pt-3 border-t border-neutral-200">
//                   <span className="text-xs text-primary-600 font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
//                     View Details
//                     <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                     </svg>
//                   </span>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         ) : (
//           <div className="text-center py-12">
//             <p className="text-neutral-600">No products found in this category.</p>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default AllProducts;


import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // ← Added for "View All" link if needed

const AllProducts = ({
  products,
  type,
  title,
  onProductClick,
  isTeaser = false,          // ← New prop: true on landing page (limits items)
  showViewAllButton = false, // ← New prop: show "View All" button on teaser
  maxItems = 9,              // ← Default max items for teaser mode
}) => {
  // Limit products if in teaser mode
  const displayedProducts = isTeaser 
    ? products.slice(0, maxItems) 
    : products;

  const getTypeLabel = () => {
    switch (type) {
      case 'credit-cards': return 'Credit Card';
      case 'insurance': return 'Insurance Plan';
      case 'investments': return 'Investment Option';
      default: return 'Product';
    }
  };

  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
          <motion.h2
            className="text-2xl md:text-3xl font-bold text-neutral-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ fontFamily: 'Lato, sans-serif', fontWeight: 900 }}
          >
            {title}
          </motion.h2>

          {/* Optional "View All" button when in teaser mode */}
          {showViewAllButton && (
            <Link
              to={`/${type}/all`}
              className="inline-flex items-center px-6 py-2.5 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors text-sm"
            >
              View All {getTypeLabel()}s
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          )}
        </div>

        {displayedProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {displayedProducts.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                onClick={() => onProductClick?.(product)}
                className="group bg-white border border-neutral-200 rounded-xl overflow-hidden hover:border-primary-400 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col h-full"
              >
                {/* Optional small image banner (if you add image later) */}
                {/* <div className="h-32 bg-gradient-to-br from-neutral-50 to-neutral-100 flex items-center justify-center">
                  <span className="text-5xl opacity-30">
                    {type === 'credit-cards' ? '💳' : type === 'insurance' ? '🛡️' : '📈'}
                  </span>
                </div> */}

                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-neutral-900 group-hover:text-primary-600 transition-colors line-clamp-2">
                        {product.name}
                      </h3>
                      <p className="text-sm text-neutral-600 mt-1">
                        {product.bank || product.provider || product.company || product.category || '—'}
                      </p>
                    </div>

                    {product.rating && (
                      <div className="flex-shrink-0 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
                        <span className="text-amber-700 font-bold text-sm">★ {product.rating}</span>
                      </div>
                    )}
                  </div>

                  {/* Key Info - Compact & Aligned */}
                  <div className="space-y-2.5 text-sm mt-2">
                    <div className="flex justify-between items-center">
                      <span className="text-neutral-600">
                        {type === 'credit-cards' ? 'Annual Fee' : type === 'insurance' ? 'Est. Premium' : 'Expected Returns'}
                      </span>
                      <span className="font-semibold text-neutral-900">
                        {product.annualFee || product.premiumEstimate || product.returns || '—'}
                      </span>
                    </div>

                    {product.claimSettlementRatio && (
                      <div className="flex justify-between items-center">
                        <span className="text-neutral-600">Claim Ratio</span>
                        <span className="font-semibold text-green-600">{product.claimSettlementRatio}</span>
                      </div>
                    )}
                  </div>

                  {/* Best For */}
                  {product.bestFor && (
                    <div className="mt-auto pt-4">
                      <p className="text-xs text-neutral-500 mb-1.5">Best For</p>
                      <p className="text-sm text-neutral-800 font-medium line-clamp-2 leading-snug">
                        {product.bestFor}
                      </p>
                    </div>
                  )}

                  {/* View Details hint */}
                  <div className="mt-4 pt-4 border-t border-neutral-100">
                    <span className="text-sm text-primary-600 font-semibold inline-flex items-center gap-1.5 group-hover:gap-2 transition-all">
                      View Details
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-neutral-50 rounded-xl">
            <p className="text-lg text-neutral-600 font-medium">
              No {getTypeLabel()}s found in this section.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default AllProducts;