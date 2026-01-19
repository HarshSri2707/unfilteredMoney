// import { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { creditCardsData } from '../data/creditCards.data';
// import { insuranceData } from '../data/insurance.data';
// import { investmentsData } from '../data/investments.data';
// import ProductDetailModal from '../components/shared/ProductDetailModal';

// const CategoryPage = ({ type }) => {
  
//   const [selectedProduct, setSelectedProduct] = useState(null);
// const { category = "all" } = useParams();  // default "all" agar parameter nahi hai
//   // Get data based on type
//   const getData = () => {
//     switch(type) {
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
  
//   // Find category info
//   const categoryInfo = data.categories.find(cat => cat.slug === category);
  
//   // Filter products by category
//   const categoryProducts = data.allCards?.filter(card => card.category === category) ||
//                           data.allPolicies?.filter(policy => policy.type === category) ||
//                           data.allInvestments?.filter(inv => inv.type === category) ||
//                           [];

//   // Get page title based on type
//   const getTypeLabel = () => {
//     switch(type) {
//       case 'credit-cards': return 'Credit Cards';
//       case 'insurance': return 'Insurance';
//       case 'investments': return 'Investments';
//       default: return '';
//     }
//   };

//   if (!categoryInfo) {
//     return <div className="text-center py-20">Category not found</div>;
//   }

//   return (
//     <>
//       <div className="min-h-screen bg-white">
//         {/* Hero Section */}
//         <section className="bg-gradient-to-br from-primary-600 to-accent-600 text-white py-16">
//           <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//             >
//               <div className="text-5xl mb-4">{categoryInfo.icon}</div>
//               <h1 className="text-3xl md:text-4xl font-bold mb-3" style={{ fontFamily: 'Lato, sans-serif', fontWeight: 900 }}>
//                 {categoryInfo.name}
//               </h1>
//               <p className="text-lg text-white/90 mb-2" style={{ fontFamily: 'Lato, sans-serif' }}>
//                 {categoryInfo.description}
//               </p>
//               <p className="text-white/80">
//                 {categoryProducts.length} products available
//               </p>
//             </motion.div>
//           </div>
//         </section>

//         {/* Products Grid */}
//         <section className="py-12">
//           <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="mb-8">
//               <h2 className="text-2xl font-bold text-neutral-900 mb-2" style={{ fontFamily: 'Lato, sans-serif' }}>
//                 Browse {categoryInfo.name}
//               </h2>
//               <p className="text-neutral-600" style={{ fontFamily: 'Lato, sans-serif' }}>
//                 Click any card to see detailed information
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
//                       <div className="relative h-44 bg-gradient-to-br from-neutral-50 to-neutral-100 flex items-center justify-center p-4">
//                         <img
//                           src={product.image}
//                           alt={product.name}
//                           className="max-h-36 max-w-full object-contain drop-shadow-md"
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
//                         <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-lg shadow-sm text-xs font-bold flex items-center gap-1">
//                           <span className="text-amber-500">⭐</span>
//                           {product.rating}
//                         </div>
//                       </div>

//                       {/* Content */}
//                       <div className="p-4 flex flex-col flex-1">
//                         <h3 className="text-base font-bold text-neutral-900 mb-1 group-hover:text-primary-600 transition-colors line-clamp-1" style={{ fontFamily: 'Lato, sans-serif' }}>
//                           {product.name}
//                         </h3>
//                         <p className="text-xs text-neutral-600 mb-3">
//                           {product.bank || product.provider || product.category}
//                         </p>

//                         {/* Quick Info */}
//                         <div className="flex items-center justify-between text-xs mb-3 pb-3 border-b border-neutral-200">
//                           <span className="text-neutral-500">
//                             {type === 'credit-cards' ? 'Fee' : type === 'insurance' ? 'Premium' : 'Returns'}
//                           </span>
//                           <span className="font-bold text-neutral-900">
//                             {product.annualFee || product.premiumEstimate || product.returns}
//                           </span>
//                         </div>

//                         {/* Best For */}
//                         <div className="mt-auto">
//                           <p className="text-xs text-neutral-500 mb-1">Best For</p>
//                           <p className="text-xs font-semibold text-neutral-900 line-clamp-2">
//                             {product.bestFor}
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
//                 <p className="text-neutral-600 text-lg">No products found in this category.</p>
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
import { motion } from 'framer-motion';
import { creditCardsData } from '../data/creditCards.data';
import { insuranceData } from '../data/insurance.data';
import { investmentsData } from '../data/investments.data';
import ProductDetailModal from '../components/shared/ProductDetailModal';

const CategoryPage = ({ type }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { category = 'all' } = useParams(); // default "all" if no param

  // Get data based on type
  const getData = () => {
    switch (type) {
      case 'credit-cards':
        return creditCardsData;
      case 'insurance':
        return insuranceData;
      case 'investments':
        return investmentsData;
      default:
        return null;
    }
  };

  const data = getData();

  if (!data) {
    return <div className="text-center py-20">Invalid section type</div>;
  }

  // Handle "all" category specially
  const categoryInfo = category === 'all'
    ? {
        slug: 'all',
        name: `All ${type === 'credit-cards' ? 'Credit Cards' : type === 'insurance' ? 'Insurance Plans' : 'Investment Options'}`,
        description: 'Explore our complete collection of options',
        icon: type === 'credit-cards' ? '💳' : type === 'insurance' ? '🛡️' : '📈',
      }
    : data.categories.find(cat => cat.slug === category);

  // Get all products / policies / investments
  const getAllProducts = () => {
    if (type === 'credit-cards') return data.allCards || [];
    if (type === 'insurance') return data.allPolicies || [];
    if (type === 'investments') return data.allInvestments || [];
    return [];
  };

  const allProducts = getAllProducts();

  // Filter products
  const categoryProducts = category === 'all'
    ? allProducts
    : allProducts.filter(item => 
        (item.category === category) || 
        (item.type === category)
      );

  if (!categoryInfo && category !== 'all') {
    return <div className="text-center py-20">Category not found</div>;
  }

  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-600 to-accent-600 text-white py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-5xl mb-4">{categoryInfo.icon}</div>
              <h1 
                className="text-3xl md:text-4xl font-bold mb-3"
                style={{ fontFamily: 'Lato, sans-serif', fontWeight: 900 }}
              >
                {categoryInfo.name}
              </h1>
              <p 
                className="text-lg text-white/90 mb-2"
                style={{ fontFamily: 'Lato, sans-serif' }}
              >
                {categoryInfo.description}
              </p>
              <p className="text-white/80">
                {categoryProducts.length} {categoryProducts.length === 1 ? 'option' : 'options'} available
              </p>
            </motion.div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 
                className="text-2xl font-bold text-neutral-900 mb-2"
                style={{ fontFamily: 'Lato, sans-serif' }}
              >
                Browse {categoryInfo.name}
              </h2>
              <p 
                className="text-neutral-600"
                style={{ fontFamily: 'Lato, sans-serif' }}
              >
                Click any {type === 'credit-cards' ? 'card' : type === 'insurance' ? 'plan' : 'option'} to see detailed information
              </p>
            </div>

            {categoryProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {categoryProducts.map((product, idx) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    onClick={() => setSelectedProduct(product)}
                    className="cursor-pointer"
                  >
                    <div className="group bg-white border-2 border-neutral-200 rounded-xl hover:border-primary-400 hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col">
                      {/* Image */}
                      <div className="relative h-44 bg-gradient-to-br from-neutral-50 to-neutral-100 flex items-center justify-center ">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-contain-cover drop-shadow-md"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        <div className="absolute inset-0 hidden items-center justify-center">
                          <span className="text-6xl opacity-20">
                            {type === 'credit-cards' ? '💳' : type === 'insurance' ? '🛡️' : '📈'}
                          </span>
                        </div>

                        {/* Rating Badge */}
                        {product.rating && (
                          <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-lg shadow-sm text-xs font-bold flex items-center gap-1">
                            <span className="text-amber-500">⭐</span>
                            {product.rating}
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="p-4 flex flex-col flex-1">
                        <h3 
                          className="text-base font-bold text-neutral-900 mb-1 group-hover:text-primary-600 transition-colors line-clamp-1"
                          style={{ fontFamily: 'Lato, sans-serif' }}
                        >
                          {product.name}
                        </h3>
                        <p className="text-xs text-neutral-600 mb-3">
                          {product.bank || product.provider || product.company || '—'}
                        </p>

                        {/* Quick Info */}
                        <div className="flex items-center justify-between text-xs mb-3 pb-3 border-b border-neutral-200">
                          <span className="text-neutral-500">
                            {type === 'credit-cards' ? 'Fee' : type === 'insurance' ? 'Premium' : 'Returns'}
                          </span>
                          <span className="font-bold text-neutral-900">
                            {product.annualFee || product.premiumEstimate || product.returns || '—'}
                          </span>
                        </div>

                        {/* Best For */}
                        <div className="mt-auto">
                          <p className="text-xs text-neutral-500 mb-1">Best For</p>
                          <p className="text-xs font-semibold text-neutral-900 line-clamp-2">
                            {product.bestFor || '—'}
                          </p>
                        </div>

                        {/* Click hint */}
                        <div className="mt-3 pt-3 border-t border-neutral-200">
                          <span className="text-xs text-primary-600 font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                            View Details
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-neutral-600 text-lg">No options found in this category.</p>
              </div>
            )}
          </div>
        </section>
      </div>

      {/* Product Detail Modal */}
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