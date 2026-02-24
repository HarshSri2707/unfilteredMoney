// // import { useState } from 'react';
// // import { useParams } from 'react-router-dom';
// // import { motion } from 'framer-motion';
// // import { creditCardsData } from '../data/creditCards.data';
// // import { insuranceData } from '../data/insurance.data';
// // import { investmentsData } from '../data/investments.data';
// // import ProductDetailModal from '../components/shared/ProductDetailModal';

// // const CategoryPage = ({ type }) => {
  
// //   const [selectedProduct, setSelectedProduct] = useState(null);
// // const { category = "all" } = useParams();  // default "all" agar parameter nahi hai
// //   // Get data based on type
// //   const getData = () => {
// //     switch(type) {
// //       case 'credit-cards':
// //         return creditCardsData;
// //       case 'insurance':
// //         return insuranceData;
// //       case 'investments':
// //         return investmentsData;
// //       default:
// //         return null;
// //     }
// //   };

// //   const data = getData();
  
// //   // Find category info
// //   const categoryInfo = data.categories.find(cat => cat.slug === category);
  
// //   // Filter products by category
// //   const categoryProducts = data.allCards?.filter(card => card.category === category) ||
// //                           data.allPolicies?.filter(policy => policy.type === category) ||
// //                           data.allInvestments?.filter(inv => inv.type === category) ||
// //                           [];

// //   // Get page title based on type
// //   const getTypeLabel = () => {
// //     switch(type) {
// //       case 'credit-cards': return 'Credit Cards';
// //       case 'insurance': return 'Insurance';
// //       case 'investments': return 'Investments';
// //       default: return '';
// //     }
// //   };

// //   if (!categoryInfo) {
// //     return <div className="text-center py-20">Category not found</div>;
// //   }

// //   return (
// //     <>
// //       <div className="min-h-screen bg-white">
// //         {/* Hero Section */}
// //         <section className="bg-gradient-to-br from-primary-600 to-accent-600 text-white py-16">
// //           <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
// //             <motion.div
// //               initial={{ opacity: 0, y: 20 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.6 }}
// //             >
// //               <div className="text-5xl mb-4">{categoryInfo.icon}</div>
// //               <h1 className="text-3xl md:text-4xl font-bold mb-3" style={{ fontFamily: 'Lato, sans-serif', fontWeight: 900 }}>
// //                 {categoryInfo.name}
// //               </h1>
// //               <p className="text-lg text-white/90 mb-2" style={{ fontFamily: 'Lato, sans-serif' }}>
// //                 {categoryInfo.description}
// //               </p>
// //               <p className="text-white/80">
// //                 {categoryProducts.length} products available
// //               </p>
// //             </motion.div>
// //           </div>
// //         </section>

// //         {/* Products Grid */}
// //         <section className="py-12">
// //           <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
// //             <div className="mb-8">
// //               <h2 className="text-2xl font-bold text-neutral-900 mb-2" style={{ fontFamily: 'Lato, sans-serif' }}>
// //                 Browse {categoryInfo.name}
// //               </h2>
// //               <p className="text-neutral-600" style={{ fontFamily: 'Lato, sans-serif' }}>
// //                 Click any card to see detailed information
// //               </p>
// //             </div>

// //             {categoryProducts.length > 0 ? (
// //               <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
// //                 {categoryProducts.map((product, idx) => (
// //                   <motion.div
// //                     key={product.id}
// //                     initial={{ opacity: 0, y: 20 }}
// //                     animate={{ opacity: 1, y: 0 }}
// //                     transition={{ duration: 0.4, delay: idx * 0.05 }}
// //                     onClick={() => setSelectedProduct(product)}
// //                     className="cursor-pointer"
// //                   >
// //                     <div className="group bg-white border-2 border-neutral-200 rounded-xl hover:border-primary-400 hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col">
// //                       {/* Image */}
// //                       <div className="relative h-44 bg-gradient-to-br from-neutral-50 to-neutral-100 flex items-center justify-center p-4">
// //                         <img
// //                           src={product.image}
// //                           alt={product.name}
// //                           className="max-h-36 max-w-full object-contain drop-shadow-md"
// //                           onError={(e) => {
// //                             e.target.style.display = 'none';
// //                             e.target.nextSibling.style.display = 'flex';
// //                           }}
// //                         />
// //                         <div className="absolute inset-0 hidden items-center justify-center">
// //                           <span className="text-6xl opacity-20">
// //                             {type === 'credit-cards' ? '💳' : type === 'insurance' ? '🛡️' : '📈'}
// //                           </span>
// //                         </div>

// //                         {/* Rating Badge */}
// //                         <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-lg shadow-sm text-xs font-bold flex items-center gap-1">
// //                           <span className="text-amber-500">⭐</span>
// //                           {product.rating}
// //                         </div>
// //                       </div>

// //                       {/* Content */}
// //                       <div className="p-4 flex flex-col flex-1">
// //                         <h3 className="text-base font-bold text-neutral-900 mb-1 group-hover:text-primary-600 transition-colors line-clamp-1" style={{ fontFamily: 'Lato, sans-serif' }}>
// //                           {product.name}
// //                         </h3>
// //                         <p className="text-xs text-neutral-600 mb-3">
// //                           {product.bank || product.provider || product.category}
// //                         </p>

// //                         {/* Quick Info */}
// //                         <div className="flex items-center justify-between text-xs mb-3 pb-3 border-b border-neutral-200">
// //                           <span className="text-neutral-500">
// //                             {type === 'credit-cards' ? 'Fee' : type === 'insurance' ? 'Premium' : 'Returns'}
// //                           </span>
// //                           <span className="font-bold text-neutral-900">
// //                             {product.annualFee || product.premiumEstimate || product.returns}
// //                           </span>
// //                         </div>

// //                         {/* Best For */}
// //                         <div className="mt-auto">
// //                           <p className="text-xs text-neutral-500 mb-1">Best For</p>
// //                           <p className="text-xs font-semibold text-neutral-900 line-clamp-2">
// //                             {product.bestFor}
// //                           </p>
// //                         </div>

// //                         {/* Click hint */}
// //                         <div className="mt-3 pt-3 border-t border-neutral-200">
// //                           <span className="text-xs text-primary-600 font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">
// //                             View Details
// //                             <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
// //                             </svg>
// //                           </span>
// //                         </div>
// //                       </div>
// //                     </div>
// //                   </motion.div>
// //                 ))}
// //               </div>
// //             ) : (
// //               <div className="text-center py-20">
// //                 <p className="text-neutral-600 text-lg">No products found in this category.</p>
// //               </div>
// //             )}
// //           </div>
// //         </section>
// //       </div>

// //       {/* Product Detail Modal */}
// //       {selectedProduct && (
// //         <ProductDetailModal
// //           product={selectedProduct}
// //           type={type}
// //           onClose={() => setSelectedProduct(null)}
// //         />
// //       )}
// //     </>
// //   );
// // };

// // export default CategoryPage;


// import { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { creditCardsData } from '../data/creditCards.data';
// import { insuranceData } from '../data/insurance.data';
// import { investmentsData } from '../data/investments.data';
// import ProductDetailModal from '../components/shared/ProductDetailModal';

// const CategoryPage = ({ type }) => {
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const { category = 'all' } = useParams(); // default "all" if no param

//   // Get data based on type
//   const getData = () => {
//     switch (type) {
//       case 'credit-cards':
//         return creditCardsData;
//       case 'insurance':
//         return insuranceData;
//       case 'investments':
//         return investmentsData;
//       default:
//         return null;
//     }
//   };

//   const data = getData();

//   if (!data) {
//     return <div className="text-center py-20">Invalid section type</div>;
//   }

//   // Handle "all" category specially
//   const categoryInfo = category === 'all'
//     ? {
//         slug: 'all',
//         name: `All ${type === 'credit-cards' ? 'Credit Cards' : type === 'insurance' ? 'Insurance Plans' : 'Investment Options'}`,
//         description: 'Explore our complete collection of options',
//         icon: type === 'credit-cards' ? '💳' : type === 'insurance' ? '🛡️' : '📈',
//       }
//     : data.categories.find(cat => cat.slug === category);

//   // Get all products / policies / investments
//   const getAllProducts = () => {
//     if (type === 'credit-cards') return data.allCards || [];
//     if (type === 'insurance') return data.allPolicies || [];
//     if (type === 'investments') return data.allInvestments || [];
//     return [];
//   };

//   const allProducts = getAllProducts();

//   // Filter products
//   const categoryProducts = category === 'all'
//     ? allProducts
//     : allProducts.filter(item => 
//         (item.category === category) || 
//         (item.type === category)
//       );

//   if (!categoryInfo && category !== 'all') {
//     return <div className="text-center py-20">Category not found</div>;
//   }

//   return (
//     <>
//       <div className="min-h-screen bg-white pt-4">
//         {/* Hero Section */}
//         <section className="bg-gradient-to-br from-primary-600 to-accent-600 text-white py-16">
//           <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//             >
//               <div className="text-5xl mb-4">{categoryInfo.icon}</div>
//               <h1 
//                 className="text-3xl md:text-4xl font-bold mb-3"
//                 style={{ fontFamily: 'Lato, sans-serif', fontWeight: 900 }}
//               >
//                 {categoryInfo.name}
//               </h1>
//               <p 
//                 className="text-lg text-white/90 mb-2"
//                 style={{ fontFamily: 'Lato, sans-serif' }}
//               >
//                 {categoryInfo.description}
//               </p>
//               <p className="text-white/80">
//                 {categoryProducts.length} {categoryProducts.length === 1 ? 'option' : 'options'} available
//               </p>
//             </motion.div>
//           </div>
//         </section>

//         {/* Products Grid */}
//         <section className="py-12">
//           <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="mb-8">
//               <h2 
//                 className="text-2xl font-bold text-neutral-900 mb-2"
//                 style={{ fontFamily: 'Lato, sans-serif' }}
//               >
//                 Browse {categoryInfo.name}
//               </h2>
//               <p 
//                 className="text-neutral-600"
//                 style={{ fontFamily: 'Lato, sans-serif' }}
//               >
//                 Click any {type === 'credit-cards' ? 'card' : type === 'insurance' ? 'plan' : 'option'} to see detailed information
//               </p>
//             </div>

//             {categoryProducts.length > 0 ? (
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
//                 {categoryProducts.map((product, idx) => (
//                   <motion.div
//                     key={product.id}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.4, delay: idx * 0.05 }}
//                     onClick={() => setSelectedProduct(product)}
//                     className="cursor-pointer"
//                   >
//                     <div className="group bg-white border-2 border-neutral-200 rounded-xl hover:border-primary-400 hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col">
//                       {/* Image */}
//                       <div className="relative h-44 bg-gradient-to-br from-neutral-50 to-neutral-100 flex items-center justify-center ">
//                         <img
//                           src={product.image}
//                           alt={product.name}
//                           className="w-full h-full object-contain-cover drop-shadow-md"
//                           onError={(e) => {
//                             e.target.style.display = 'none';
//                             e.target.nextSibling.style.display = 'flex';
//                           }}
//                         />
//                         <div className="absolute inset-0 hidden items-center justify-center">
//                           <span className="text-6xl opacity-20">
//                             {type === 'credit-cards' ? '💳' : type === 'insurance' ? '🛡️' : '📈'}
//                           </span>
//                         </div>

//                         {/* Rating Badge */}
//                         {product.rating && (
//                           <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-lg shadow-sm text-xs font-bold flex items-center gap-1">
//                             <span className="text-amber-500">⭐</span>
//                             {product.rating}
//                           </div>
//                         )}
//                       </div>

//                       {/* Content */}
//                       <div className="p-4 flex flex-col flex-1">
//                         <h3 
//                           className="text-base font-bold text-neutral-900 mb-1 group-hover:text-primary-600 transition-colors line-clamp-1"
//                           style={{ fontFamily: 'Lato, sans-serif' }}
//                         >
//                           {product.name}
//                         </h3>
//                         <p className="text-xs text-neutral-600 mb-3">
//                           {product.bank || product.provider || product.company || '—'}
//                         </p>

//                         {/* Quick Info */}
//                         <div className="flex items-center justify-between text-xs mb-3 pb-3 border-b border-neutral-200">
//                           <span className="text-neutral-500">
//                             {type === 'credit-cards' ? 'Fee' : type === 'insurance' ? 'Premium' : 'Returns'}
//                           </span>
//                           <span className="font-bold text-neutral-900">
//                             {product.annualFee || product.premiumEstimate || product.returns || '—'}
//                           </span>
//                         </div>

//                         {/* Best For */}
//                         <div className="mt-auto">
//                           <p className="text-xs text-neutral-500 mb-1">Best For</p>
//                           <p className="text-xs font-semibold text-neutral-900 line-clamp-2">
//                             {product.bestFor || '—'}
//                           </p>
//                         </div>

//                         {/* Click hint */}
//                         <div className="mt-3 pt-3 border-t border-neutral-200">
//                           <span className="text-xs text-primary-600 font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">
//                             View Details
//                             <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                             </svg>
//                           </span>
//                         </div>
//                       </div>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             ) : (
//               <div className="text-center py-20">
//                 <p className="text-neutral-600 text-lg">No options found in this category.</p>
//               </div>
//             )}
//           </div>
//         </section>
//       </div>

//       {/* Product Detail Modal */}
//       {selectedProduct && (
//         <ProductDetailModal
//           product={selectedProduct}
//           type={type}
//           onClose={() => setSelectedProduct(null)}
//         />
//       )}
//     </>
//   );
// };

// export default CategoryPage;


import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { creditCardsData } from '../data/creditCards.data';
import { insuranceData } from '../data/insurance.data';
import { investmentsData } from '../data/investments.data';
import ProductDetailModal from '../components/shared/ProductDetailModal';

const CategoryPage = ({ type }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { category = 'all' } = useParams();

  const getData = () => {
    switch (type) {
      case 'credit-cards':  return creditCardsData;
      case 'insurance':     return insuranceData;
      case 'investments':   return investmentsData;
      default:              return null;
    }
  };

  const data = getData();

  if (!data) return <div className="text-center py-20">Invalid section type</div>;

  const categoryInfo = category === 'all'
    ? {
        slug: 'all',
        name: type === 'credit-cards' ? 'All Credit Cards' : type === 'insurance' ? 'All Insurance Plans' : 'All Investment Options',
        description: 'Explore our complete collection of options',
        icon: type === 'credit-cards' ? '💳' : type === 'insurance' ? '🛡️' : '📈',
        bannerImage: null,
      }
    : data.categories.find(cat => cat.slug === category);

  const getAllProducts = () => {
    if (type === 'credit-cards') return data.allCards || [];
    if (type === 'insurance')    return data.allPolicies || [];
    if (type === 'investments')  return data.allInvestments || [];
    return [];
  };

  const allProducts     = getAllProducts();
  const categoryProducts = category === 'all'
    ? allProducts
    : allProducts.filter(item => item.category === category || item.type === category);

  if (!categoryInfo && category !== 'all') {
    return <div className="text-center py-20">Category not found</div>;
  }

  const statLabel = type === 'credit-cards' ? 'Annual Fee' : type === 'insurance' ? 'Premium' : 'Returns';
  const statKey   = (p) => p.annualFee || p.premiumEstimate || p.returns || '—';

  return (
    <>
      <div className="min-h-screen bg-white">

        {/* ── CATEGORY BANNER — centered, max-w-6xl, rounded (same as Hero/About/Contact) ── */}
        <section className="bg-white py-6 px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={category}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="relative max-w-6xl mx-auto rounded-2xl overflow-hidden bg-neutral-700 h-40 sm:h-48 md:h-60"
            >
              {categoryInfo?.bannerImage ? (
                <img
                  src={categoryInfo.bannerImage}
                  alt={categoryInfo.name}
                  className="absolute inset-0 w-full h-full object-cover opacity-60"
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-neutral-600 to-neutral-800" />
              )}

              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

              <div className="relative z-10 h-full flex flex-col justify-end px-6 sm:px-10 md:px-14 pb-7">
                <motion.h2
                  key={`title-${category}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="text-2xl sm:text-3xl font-extrabold text-white mb-1"
                  style={{ fontFamily: 'Lato, sans-serif' }}
                >
                  {categoryInfo?.name}
                </motion.h2>
                {categoryInfo?.description && (
                  <motion.p
                    key={`desc-${category}`}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.15 }}
                    className="text-sm text-white/80 max-w-sm leading-relaxed"
                    style={{ fontFamily: 'Lato, sans-serif' }}
                  >
                    {categoryInfo.description}
                  </motion.p>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </section>

        {/* ── SECTION HEADING + COUNT ── */}
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-7 pb-4">
          <div className="flex items-baseline gap-3">
            <h3
              className="text-xl font-extrabold text-neutral-900"
              style={{ fontFamily: 'Lato, sans-serif' }}
            >
              {categoryInfo?.name}
            </h3>
            <span
              className="text-sm text-neutral-400 font-medium"
              style={{ fontFamily: 'Lato, sans-serif' }}
            >
              ( {categoryProducts.length} available )
            </span>
          </div>
        </div>

        {/* ── PRODUCTS GRID ── */}
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          {categoryProducts.length > 0 ? (
            <AnimatePresence mode="wait">
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
              >
                {categoryProducts.map((product, idx) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: Math.min(idx * 0.05, 0.3) }}
                  >
                    {/* ── Entire card is clickable ── */}
                    <div
                      onClick={() => setSelectedProduct(product)}
                      className="cursor-pointer bg-white border border-neutral-200 rounded-2xl overflow-hidden flex flex-col h-full hover:shadow-md transition-all duration-300"
                    >

                      {/* ── Product image ── */}
                      <div className="relative w-full shrink-0 bg-neutral-50 p-3">
                        <div className="relative h-44 w-full overflow-hidden rounded-xl bg-neutral-100">
                          {product.image ? (
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'flex';
                              }}
                            />
                          ) : null}
                          <div
                            className="absolute inset-0 items-center justify-center"
                            style={{ display: product.image ? 'none' : 'flex' }}
                          >
                            <span className="text-6xl opacity-20">
                              {type === 'credit-cards' ? '💳' : type === 'insurance' ? '🛡️' : '📈'}
                            </span>
                          </div>

                          {/* Rating badge */}
                          {product.rating && (
                            <div className="absolute top-2 right-2 bg-white px-2 py-0.5 rounded-full shadow-sm text-xs font-bold flex items-center gap-1">
                              <span className="text-amber-500">⭐</span>
                              {product.rating}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* ── Content ── */}
                      <div className="px-4 pt-2 pb-4 flex flex-col flex-1">

                        {/* Name + provider */}
                        <h3
                          className="text-base font-bold text-neutral-900 mb-0.5 line-clamp-1"
                          style={{ fontFamily: 'Lato, sans-serif' }}
                        >
                          {product.name}
                        </h3>
                        <p
                          className="text-xs font-semibold text-neutral-500 mb-3"
                          style={{ fontFamily: 'Lato, sans-serif' }}
                        >
                          {product.bank || product.provider || product.company || '—'}
                        </p>

                        {/* Benefits & Features */}
                        <p
                          className="text-xs font-bold text-neutral-700 mb-1"
                          style={{ fontFamily: 'Lato, sans-serif' }}
                        >
                          Benefits & Features
                        </p>
                        <p
                          className="text-xs font-semibold text-neutral-500 leading-relaxed line-clamp-3 flex-1 mb-4"
                          style={{ fontFamily: 'Lato, sans-serif' }}
                        >
                          {product.pros
                            ? product.pros.slice(0, 2).join('. ')
                            : product.description || product.bestFor || '—'}
                        </p>

                        {/* Divider + stat */}
                        <div className="border-t border-neutral-100 pt-3 mb-4 flex items-center justify-between">
                          <span
                            className="text-xs font-semibold text-neutral-500"
                            style={{ fontFamily: 'Lato, sans-serif' }}
                          >
                            {statLabel}
                          </span>
                          <span
                            className="text-sm font-bold text-neutral-900"
                            style={{ fontFamily: 'Lato, sans-serif' }}
                          >
                            {statKey(product)}
                          </span>
                        </div>

                        {/* View button */}
                        <button
                          onClick={(e) => { e.stopPropagation(); setSelectedProduct(product); }}
                          className="w-full py-2.5 rounded-full border border-primary-500 text-primary-600 text-sm font-bold hover:bg-primary-600 hover:text-white transition-all duration-200"
                          style={{ fontFamily: 'Lato, sans-serif' }}
                        >
                          View
                        </button>

                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          ) : (
            <div className="text-center py-20 text-neutral-500">
              <p className="text-5xl mb-4">🔍</p>
              <p className="font-semibold">No options found in this category.</p>
            </div>
          )}
        </div>

      </div>

      {/* ── Modal ── */}
      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          type={type}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
};

export default CategoryPage;