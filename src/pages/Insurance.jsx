

// // // // src/pages/Insurance.jsx
// // // import { useState } from 'react';
// // // import { motion } from 'framer-motion';
// // // import { insuranceData } from '../data/insurance.data';
// // // import Hero from '../components/shared/Hero';
// // // import Categories from '../components/shared/Categories';
// // // import TopPicks from '../components/shared/TopPicks';
// // // import WhyItMatters from '../components/shared/WhyItMatters'; // reused but repurposed
// // // import AllProducts from '../components/shared/AllProducts';
// // // import FAQ from '../components/shared/FAQ';
// // // import CTA from '../components/shared/CTA';
// // // import ProductDetailModal from '../components/shared/ProductDetailModal';
// // // import Seo from '../components/ui/Seo';
// // // import { seoConfig } from '../config/seo.config';

// // // const Insurance = () => {
// // //   const [selectedProduct, setSelectedProduct] = useState(null);

// // //   return (
// // //     <>
// // //       <Seo
// // //         title={seoConfig.pages.insurance.title}
// // //         description={seoConfig.pages.insurance.description}
// // //         keywords={seoConfig.pages.insurance.keywords}
// // //         url={`${seoConfig.siteUrl}/insurance`}
// // //         image={seoConfig.defaultImage}
// // //       />

// // //       <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
// // //         {/* Hero updated exactly as per document */}
// // //         <Hero
// // //           data={{
// // //             badge: '🛡️ Insurance',
// // //             title: 'Your Financial Safety Net.',
// // //               backgroundImage: '/images/insuranceBanner.webp',
// // //           }}
// // //         />

// // //         <Categories
// // //           categories={insuranceData.categories}
// // //           selectedCategory="all"
// // //           basePath="/insurance"
// // //         />

// // //         <TopPicks picks={insuranceData.topPicks} type="insurance" />


// // //         <WhyItMatters
// // //   data={{
// // //     icon: '🛡️',
// // //     title: 'Because Life Happens',
// // //     description: [
// // //       'Insurance isn\'t an investment; it\'s a shield. It ensures that a hospital bill doesn\'t wipe out your savings and that your family is secure even if you aren\'t around.',
// // //       'Protection first, growth second — that\'s the smart way to handle your finances.'
// // //     ],
// // //     points: [
// // //       {
// // //         title: 'Term Life Insurance',
// // //         description: 'Pure protection with high coverage for low premium. Non-negotiable if you have dependents.',
// // //         icon: '💙',
// // //       },
// // //       {
// // //         title: 'Health Insurance',
// // //         description: 'Medical inflation is rising. Cover hospitalization, surgeries, and critical illnesses.',
// // //         icon: '🏥',
// // //       },
// // //       {
// // //         title: 'Motor Insurance',
// // //         description: 'Mandatory by law — choose plans that actually settle claims when needed.',
// // //         icon: '🚗',
// // //       },
// // //       {
// // //         title: 'Never Mix Insurance & Investment',
// // //         description: 'Avoid endowment/money-back policies. Buy pure term and invest the rest.',
// // //         icon: '❌',
// // //       },
// // //     ],
// // //   }}
// // // />

// // //         {/* Unfiltered Advice section (from document) - replaces Why Insurance Matters */}
// // //         <motion.section
// // //   initial={{ y: 20, opacity: 0 }}
// // //   whileInView={{ y: 0, opacity: 1 }}
// // //   transition={{ duration: 0.5 }}
// // //   viewport={{ once: true }}
// // //   className="py-16 bg-gradient-to-br from-emerald-50 to-teal-50"
// // // >
// // //   <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
// // //     {/* Main Heading */}
// // //     <div className="text-center mb-12">
// // //       <div className="inline-block bg-emerald-100 rounded-full p-3 mb-4">
// // //         <span className="text-5xl">🛡️</span>
// // //       </div>
// // //       <h2 className="text-4xl font-bold text-gray-900 mb-4">
// // //         Types of Insurance You NEED
// // //       </h2>
// // //       <p className="text-gray-600 max-w-2xl mx-auto">
// // //         Essential protection for you and your loved ones — don't compromise on these
// // //       </p>
// // //     </div>

// // //     {/* Insurance Types Grid */}
// // //     <div className="grid md:grid-cols-3 gap-6 mb-16">
// // //       <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-emerald-100 group hover:border-emerald-300">
// // //         <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
// // //           <span className="text-3xl">💙</span>
// // //         </div>
// // //         <h3 className="text-xl font-bold mb-3 text-gray-900">Term Life Insurance</h3>
// // //         <div className="space-y-2 mb-4">
// // //           <div className="flex items-center gap-2">
// // //             <span className="text-green-500">✓</span>
// // //             <span className="text-sm text-gray-600">Pure protection</span>
// // //           </div>
// // //           <div className="flex items-center gap-2">
// // //             <span className="text-green-500">✓</span>
// // //             <span className="text-sm text-gray-600">High coverage for low premium</span>
// // //           </div>
// // //         </div>
// // //         <p className="text-gray-700 font-semibold text-sm bg-blue-50 p-3 rounded-lg">
// // //           If you have dependents, this is non-negotiable.
// // //         </p>
// // //       </div>

// // //       <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-emerald-100 group hover:border-emerald-300">
// // //         <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
// // //           <span className="text-3xl">🏥</span>
// // //         </div>
// // //         <h3 className="text-xl font-bold mb-3 text-gray-900">Health Insurance</h3>
// // //         <div className="space-y-2 mb-4">
// // //           <div className="flex items-center gap-2">
// // //             <span className="text-green-500">✓</span>
// // //             <span className="text-sm text-gray-600">Covers hospitalization & surgeries</span>
// // //           </div>
// // //           <div className="flex items-center gap-2">
// // //             <span className="text-green-500">✓</span>
// // //             <span className="text-sm text-gray-600">Critical illness protection</span>
// // //           </div>
// // //         </div>
// // //         <p className="text-gray-700 font-semibold text-sm bg-red-50 p-3 rounded-lg">
// // //           Medical inflation is rising — don't rely on corporate cover alone.
// // //         </p>
// // //       </div>

// // //       <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-emerald-100 group hover:border-emerald-300">
// // //         <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
// // //           <span className="text-3xl">🚗</span>
// // //         </div>
// // //         <h3 className="text-xl font-bold mb-3 text-gray-900">Motor Insurance</h3>
// // //         <div className="space-y-2 mb-4">
// // //           <div className="flex items-center gap-2">
// // //             <span className="text-green-500">✓</span>
// // //             <span className="text-sm text-gray-600">Mandatory by law</span>
// // //           </div>
// // //           <div className="flex items-center gap-2">
// // //             <span className="text-green-500">✓</span>
// // //             <span className="text-sm text-gray-600">Covers accidents & damages</span>
// // //           </div>
// // //         </div>
// // //         <p className="text-gray-700 font-semibold text-sm bg-purple-50 p-3 rounded-lg">
// // //           We help you find plans that actually pay out when needed.
// // //         </p>
// // //       </div>
// // //     </div>

// // //     {/* Unfiltered Advice Section */}
// // //     <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-3xl p-8 border-2 border-red-200">
// // //       <div className="text-center mb-8">
// // //         <div className="inline-block bg-red-100 rounded-full p-3 mb-4">
// // //           <span className="text-5xl">⚡</span>
// // //         </div>
// // //         <h3 className="text-3xl font-bold text-gray-900 mb-2">
// // //           Unfiltered Advice: Never Mix Insurance with Investment
// // //         </h3>
// // //         <p className="text-gray-700">
// // //           This is the most important rule in insurance — learn it, follow it, profit from it
// // //         </p>
// // //       </div>

// // //       <div className="grid md:grid-cols-2 gap-6">
// // //         {/* What to Avoid */}
// // //         <div className="bg-white/90 backdrop-blur p-6 rounded-xl border-2 border-red-300">
// // //           <div className="flex items-start gap-3 mb-4">
// // //             <div className="text-4xl flex-shrink-0">❌</div>
// // //             <div>
// // //               <h4 className="text-xl font-bold text-red-600 mb-2">AVOID These Products</h4>
// // //               <div className="space-y-2">
// // //                 <div className="flex items-center gap-2">
// // //                   <span className="text-red-500 font-bold">✗</span>
// // //                   <span className="text-gray-700 font-semibold">Endowment Plans</span>
// // //                 </div>
// // //                 <div className="flex items-center gap-2">
// // //                   <span className="text-red-500 font-bold">✗</span>
// // //                   <span className="text-gray-700 font-semibold">Money Back Policies</span>
// // //                 </div>
// // //                 <div className="flex items-center gap-2">
// // //                   <span className="text-red-500 font-bold">✗</span>
// // //                   <span className="text-gray-700 font-semibold">ULIPs (in most cases)</span>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //           <p className="text-sm text-gray-600 bg-red-50 p-3 rounded-lg">
// // //             <span className="font-semibold">Why?</span> They mix insurance + investment, giving you low cover for high premiums. Worst of both worlds.
// // //           </p>
// // //         </div>

// // //         {/* What to Do Instead */}
// // //         <div className="bg-white/90 backdrop-blur p-6 rounded-xl border-2 border-green-300">
// // //           <div className="flex items-start gap-3 mb-4">
// // //             <div className="text-4xl flex-shrink-0">✅</div>
// // //             <div>
// // //               <h4 className="text-xl font-bold text-green-600 mb-2">DO This Instead</h4>
// // //               <div className="space-y-2">
// // //                 <div className="flex items-center gap-2">
// // //                   <span className="text-green-500 font-bold">✓</span>
// // //                   <span className="text-gray-700 font-semibold">Buy Pure Term Insurance</span>
// // //                 </div>
// // //                 <div className="flex items-center gap-2">
// // //                   <span className="text-green-500 font-bold">✓</span>
// // //                   <span className="text-gray-700 font-semibold">Invest the Difference</span>
// // //                 </div>
// // //                 <div className="flex items-center gap-2">
// // //                   <span className="text-green-500 font-bold">✓</span>
// // //                   <span className="text-gray-700 font-semibold">Use Mutual Funds/SIPs</span>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //           <p className="text-sm text-gray-600 bg-green-50 p-3 rounded-lg">
// // //             <span className="font-semibold">Result?</span> Maximum coverage + maximum returns. Keep your insurance and investments separate.
// // //           </p>
// // //         </div>
// // //       </div>

// // //       {/* Pro Tip Banner */}
// // //       <div className="mt-6 bg-gradient-to-r from-amber-100 to-yellow-100 rounded-2xl p-6 border-2 border-amber-300">
// // //         <div className="flex items-start gap-4">
// // //           <div className="text-4xl flex-shrink-0">📊</div>
// // //           <div>
// // //             <h4 className="text-xl font-bold mb-2 text-gray-900">Pro Tip: Check Claim Settlement Ratio</h4>
// // //             <p className="text-gray-700 leading-relaxed">
// // //               Always pick insurers with a <span className="font-bold text-amber-700">95%+ claim settlement ratio</span>. This shows they actually pay claims when you need them most. A policy is only as good as the company that honors it.
// // //             </p>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   </div>
// // // </motion.section>

// // //         <AllProducts
// // //           products={insuranceData.allPolicies}
// // //           type="insurance"
// // //           title="Featured & Popular Policies"
// // //           onProductClick={setSelectedProduct}
// // //           isTeaser={true}
// // //           showViewAllButton={true}
// // //           maxItems={9}
// // //         />

// // //         {/* FAQ from insuranceData.faqData - as requested */}
// // //         <FAQ faqs={insuranceData.faqData} />

// // //         <CTA
// // //           data={{
// // //             title: 'Not Sure Which Policy?',
// // //             description: 'Calculate your coverage needs and get recommendations',
// // //             buttonText: 'Calculate Coverage',
// // //             buttonLink: '/insurance/calculator',
// // //           }}
// // //         />
// // //       </motion.div>

// // //       {selectedProduct && (
// // //         <ProductDetailModal
// // //           product={selectedProduct}
// // //           type="insurance"
// // //           onClose={() => setSelectedProduct(null)}
// // //         />
// // //       )}
// // //     </>
// // //   );
// // // };

// // // export default Insurance;


// // // src/pages/Insurance.jsx
// // import { useState } from 'react';
// // import { motion } from 'framer-motion';
// // import { insuranceData } from '../data/insurance.data';
// // import Hero from '../components/shared/Hero';
// // import FilterBar from '../components/shared/FilterBar';
// // import TopPicks from '../components/shared/TopPicks';
// // import AllProducts from '../components/shared/AllProducts';
// // import FAQ from '../components/shared/FAQ';
// // import CTA from '../components/shared/CTA';
// // import ProductDetailModal from '../components/shared/ProductDetailModal';
// // import Seo from '../components/ui/Seo';
// // import { seoConfig } from '../config/seo.config';

// // const Insurance = () => {
// //   const [selectedProduct, setSelectedProduct] = useState(null);
// //   const [selectedCategory, setSelectedCategory] = useState('all');
// //   const [searchValue, setSearchValue] = useState('');

// //   const filteredProducts =
// //     selectedCategory === 'all'
// //       ? insuranceData.allPolicies
// //       : insuranceData.allPolicies.filter(
// //           (p) => p.category === selectedCategory || p.slug === selectedCategory
// //         );

// //   return (
// //     <>
// //       <Seo
// //         title={seoConfig.pages.insurance.title}
// //         description={seoConfig.pages.insurance.description}
// //         keywords={seoConfig.pages.insurance.keywords}
// //         url={`${seoConfig.siteUrl}/insurance`}
// //         image={seoConfig.defaultImage}
// //       />

// //       <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
// //         <Hero
// //           data={{
// //             title: 'Insurance\nBecause Life Happens',
// //             description: [
// //               "Insurance isn't an investment; it's a shield. It ensures that a hospital bill doesn't wipe out your savings and that your family is secure even if you aren't around.",
// //               "Protection first, growth second — that's the smart way to handle your finances.",
// //             ],
// //             points: [
// //               { title: 'Term Life Insurance', description: 'Pure protection with high coverage for low premium. Non-negotiable if you have dependents.', icon: '💙' },
// //               { title: 'Health Insurance', description: 'Medical inflation is rising. Cover hospitalization, surgeries, and critical illnesses.', icon: '🏥' },
// //               { title: 'Motor Insurance', description: 'Mandatory by law — choose plans that actually settle claims when needed.', icon: '🚗' },
// //               { title: 'Never Mix Insurance & Investment', description: 'Avoid endowment/money-back policies. Buy pure term and invest the rest.', icon: '❌' },
// //             ],
// //           }}
// //         />

// //         <FilterBar
// //           categories={insuranceData.categories}
// //           selectedCategory={selectedCategory}
// //           setSelectedCategory={setSelectedCategory}
// //           searchValue={searchValue}
// //           setSearchValue={setSearchValue}
// //         />

// //         <TopPicks picks={insuranceData.topPicks} type="insurance" onProductClick={setSelectedProduct} />

// //         <AllProducts
// //           products={filteredProducts}
// //           type="insurance"
// //           title="All Insurance Plans"
// //           onProductClick={setSelectedProduct}
// //           searchValue={searchValue}
// //         />

// //         <FAQ faqs={insuranceData.faqData} />

// //         <CTA data={{ title: 'Still Confused? Connect with us', buttonText: 'Contact Us', buttonLink: '/contact' }} />
// //       </motion.div>

// //       {selectedProduct && (
// //         <ProductDetailModal product={selectedProduct} type="insurance" onClose={() => setSelectedProduct(null)} />
// //       )}
// //     </>
// //   );
// // };

// // export default Insurance;

// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { insuranceData } from '../data/insurance.data';
// import Hero from '../components/shared/Hero';
// import FilterBar from '../components/shared/FilterBar';
// import TopPicks from '../components/shared/TopPicks';
// import AllProducts from '../components/shared/AllProducts';
// import FAQ from '../components/shared/FAQ';
// import CTA from '../components/shared/CTA';
// import ProductDetailModal from '../components/shared/ProductDetailModal';
// import Seo from '../components/ui/Seo';
// import { seoConfig } from '../config/seo.config';

// const Insurance = () => {
//   const [selectedProduct, setSelectedProduct]   = useState(null);
//   const [selectedCategory, setSelectedCategory] = useState('all');
//   const [searchValue, setSearchValue]           = useState('');

//   const isFiltered = selectedCategory !== 'all' || searchValue.trim() !== '';

//   const filteredProducts = insuranceData.allPolicies.filter((p) => {
//     const matchCat = selectedCategory === 'all' ||
//       p.category === selectedCategory ||
//       p.slug === selectedCategory;
//     const matchSearch = !searchValue ||
//       p.name?.toLowerCase().includes(searchValue.toLowerCase()) ||
//       p.provider?.toLowerCase().includes(searchValue.toLowerCase());
//     return matchCat && matchSearch;
//   });

//   return (
//     <>
//       <Seo
//         title={seoConfig.pages.insurance?.title}
//         description={seoConfig.pages.insurance?.description}
//         keywords={seoConfig.pages.insurance?.keywords}
//         url={`${seoConfig.siteUrl}/insurance`}
//         image={seoConfig.defaultImage}
//       />
//       <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
//         <Hero
//           data={{
//             title: 'Insurance\nBecause Life Happens',
//             description: [
//               "Insurance isn't an investment; it's a shield. It ensures that a hospital bill doesn't wipe out your savings.",
//               "Protection first, growth second — that's the smart way to handle your finances.",
//             ],
//             points: [
//               { title: 'Term Life Insurance', description: 'Pure protection with high coverage for low premium.', icon: '💙' },
//               { title: 'Health Insurance', description: 'Medical inflation is rising. Cover hospitalization & surgeries.', icon: '🏥' },
//               { title: 'Motor Insurance', description: 'Mandatory by law — choose plans that actually settle claims.', icon: '🚗' },
//               { title: 'Never Mix Insurance & Investment', description: 'Avoid endowment/money-back policies.', icon: '❌' },
//             ],
//           }}
//         />
//         <FilterBar
//           categories={insuranceData.categories}
//           selectedCategory={selectedCategory}
//           setSelectedCategory={setSelectedCategory}
//           searchValue={searchValue}
//           setSearchValue={setSearchValue}
//         />
//         <TopPicks
//           picks={insuranceData.topPicks}
//           type="insurance"
//           onProductClick={setSelectedProduct}
//           isFiltered={isFiltered}
//         />
//         <AllProducts
//           products={filteredProducts}
//           type="insurance"
//           title={isFiltered ? `Results (${filteredProducts.length})` : 'All Insurance Plans'}
//           onProductClick={setSelectedProduct}
//           searchValue={searchValue}
//         />
//         <FAQ faqs={insuranceData.faqData} />
//         <CTA data={{ title: 'Still Confused? Connect with us', buttonText: 'Contact Us', buttonLink: '/contact' }} />
//       </motion.div>
//       {selectedProduct && (
//         <ProductDetailModal product={selectedProduct} type="insurance" onClose={() => setSelectedProduct(null)} />
//       )}
//     </>
//   );
// };

// export default Insurance;


import { useState } from 'react';
import { motion } from 'framer-motion';
import { insuranceData } from '../data/insurance.data';
import Hero from '../components/shared/Hero';
import FilterBar from '../components/shared/FilterBar';
import TopPicks from '../components/shared/TopPicks';
import AllProducts from '../components/shared/AllProducts';
import FAQ from '../components/shared/FAQ';
import CTA from '../components/shared/CTA';
import ProductDetailModal from '../components/shared/ProductDetailModal';
import Seo from '../components/ui/Seo';
import { seoConfig } from '../config/seo.config';

const Insurance = () => {
  const [selectedProduct, setSelectedProduct]   = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchValue, setSearchValue]           = useState('');

  const isFiltered = selectedCategory !== 'all' || searchValue.trim() !== '';

  const filteredProducts = insuranceData.allPolicies.filter((p) => {
    const matchCat = selectedCategory === 'all' ||
      p.category === selectedCategory ||
      p.slug === selectedCategory;
    const matchSearch = !searchValue ||
      p.name?.toLowerCase().includes(searchValue.toLowerCase()) ||
      p.provider?.toLowerCase().includes(searchValue.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <>
      <Seo
        title={seoConfig.pages.insurance?.title}
        description={seoConfig.pages.insurance?.description}
        keywords={seoConfig.pages.insurance?.keywords}
        url={`${seoConfig.siteUrl}/insurance`}
        image={seoConfig.defaultImage}
      />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
        <Hero
          data={{
            title: 'Insurance\nBecause Life Happens',
            highlightWord: 'Life Happens',
            heroImage: 'images/banner/Insurance main page image.png',
            description: [
              "Insurance isn't an investment; it's a shield. It ensures that a hospital bill doesn't wipe out your savings.",
              "Protection first, growth second — that's the smart way to handle your finances.",
            ],
            points: [
              { title: 'Term Life Insurance',              description: 'Pure protection with high coverage for low premium.',            icon: '💙' },
              { title: 'Health Insurance',                 description: 'Medical inflation is rising. Cover hospitalization & surgeries.', icon: '🏥' },
              { title: 'Motor Insurance',                  description: 'Mandatory by law — choose plans that actually settle claims.',    icon: '🚗' },
              { title: 'Never Mix Insurance & Investment', description: 'Avoid endowment/money-back policies.',                           icon: '❌' },
            ],
            tip: {
              label: 'New to insurance?',
              text: 'Start with Term Life & Health Insurance — the two most essential covers for every Indian.',
            },
          }}
        />
        <FilterBar
          categories={insuranceData.categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <TopPicks
          picks={insuranceData.topPicks}
          type="insurance"
          onProductClick={setSelectedProduct}
          isFiltered={isFiltered}
        />
        <AllProducts
          products={filteredProducts}
          type="insurance"
          title={isFiltered ? `Results (${filteredProducts.length})` : 'All Insurance Plans'}
          onProductClick={setSelectedProduct}
          searchValue={searchValue}
        />
        <FAQ faqs={insuranceData.faqData} />
        <CTA data={{ title: 'Still Confused? Connect with us', buttonText: 'Contact Us', buttonLink: '/contact' }} />
      </motion.div>
      {selectedProduct && (
        <ProductDetailModal product={selectedProduct} type="insurance" onClose={() => setSelectedProduct(null)} />
      )}
    </>
  );
};

export default Insurance;