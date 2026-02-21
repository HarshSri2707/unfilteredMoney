


// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { investmentsData } from '../data/investments.data';
// import Hero from '../components/shared/Hero';
// import Categories from '../components/shared/Categories';
// import TopPicks from '../components/shared/TopPicks';
// import AllProducts from '../components/shared/AllProducts';
// import FAQ from '../components/shared/FAQ';
// import CTA from '../components/shared/CTA';
// import ProductDetailModal from '../components/shared/ProductDetailModal';
// import WhyItMatters from '../components/shared/WhyItMatters';
// import Seo from '../components/ui/Seo';
// import { seoConfig } from '../config/seo.config';

// const Investments = () => {
//   const [selectedProduct, setSelectedProduct] = useState(null);

//   return (
//     <>
//       <Seo
//         title={seoConfig.pages.investments.title}
//         description={seoConfig.pages.investments.description}
//         keywords={seoConfig.pages.investments.keywords}
//         url={`${seoConfig.siteUrl}/investments`}
//         image={seoConfig.defaultImage}
//       />

//       <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
//         {/* Hero updated as per document */}
//         <Hero
//           data={{
//             badge: '📈 Investments',
//             title: 'Make Your Money Work While You Sleep.',
//           backgroundImage:
//               'https://www.livemint.com/lm-img/img/2023/11/22/600x338/NRI-investments-in-India-primarily-consist-of-fixe_1697992340325_1700673128374.jpg',
//           }}
//         />

//         <Categories
//           categories={investmentsData.categories}
//           selectedCategory="all"
//           basePath="/investments"
//         />


//          <TopPicks picks={investmentsData.topPicks} type="investments" />

//         {/* WhyItMatters Component */}
//         <WhyItMatters
//           data={{
//             icon: '📈',
//             title: 'Why Save When You Can Grow?',
//             description: [
//               'Keeping cash in a savings account actually loses you money due to inflation. Investing is the only way to build real wealth over time.',
//               'Whether you are risk-averse or a risk-taker, there is an asset class for you.'
//             ],
//             points: [
//               {
//                 title: 'Mutual Funds & SIPs',
//                 description: 'Turn small monthly savings into large corpus with disciplined investing.',
//                 icon: '📊',
//               },
//               {
//                 title: 'Stock Market',
//                 description: 'Own shares of companies you believe in. High risk, high reward.',
//                 icon: '📈',
//               },
//               {
//                 title: 'Gold & Fixed Income',
//                 description: 'Safe havens for preserving wealth with stable returns.',
//                 icon: '🪙',
//               },
//               {
//                 title: 'Start Early',
//                 description: 'Compounding works best when you give it time — even small amounts grow massively.',
//                 icon: '⏳',
//               },
//             ],
//           }}
//         />

       

//         {/* New Unfiltered Advice / Golden Rule section */}
//        <motion.section
//   initial={{ y: 20, opacity: 0 }}
//   whileInView={{ y: 0, opacity: 1 }}
//   transition={{ duration: 0.5 }}
//   viewport={{ once: true }}
//   className="py-16 bg-gradient-to-br from-gray-50 to-gray-100"
// >
//   <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//     <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
//       What We Cover
//     </h2>
//     <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
//       Your complete guide to building wealth through smart investments
//     </p>

//     {/* Investment Options Grid */}
//     <div className="grid md:grid-cols-3 gap-6 mb-16">
//       <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200 group">
//         <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
//           <span className="text-3xl">📊</span>
//         </div>
//         <h3 className="text-2xl font-bold mb-3 text-gray-900">Mutual Funds & SIPs</h3>
//         <p className="text-gray-600 leading-relaxed">
//           The disciplined way to turn small monthly savings into a large corpus. Perfect for beginners.
//         </p>
//       </div>

//       <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200 group">
//         <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
//           <span className="text-3xl">📈</span>
//         </div>
//         <h3 className="text-2xl font-bold mb-3 text-gray-900">Stock Market</h3>
//         <p className="text-gray-600 leading-relaxed">
//           Own a piece of the companies you love. High risk, high reward.
//         </p>
//       </div>

//       <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200 group">
//         <div className="w-14 h-14 bg-yellow-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
//           <span className="text-3xl">🪙</span>
//         </div>
//         <h3 className="text-2xl font-bold mb-3 text-gray-900">Gold & Fixed Income</h3>
//         <p className="text-gray-600 leading-relaxed">
//           Safe harbors for your hard-earned money.
//         </p>
//       </div>
//     </div>

//     {/* Golden Rules Section */}
//     <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-3xl p-8 ">
//       <div className="text-center mb-8">
//         <div className="inline-block bg-amber-100 rounded-full p-3 mb-4">
//           <span className="text-5xl">✨</span>
//         </div>
//         <h3 className="text-3xl font-bold text-gray-900 mb-2">The Golden Rule of Investing</h3>
//         <p className="text-gray-700">Three principles that can transform your financial future</p>
//       </div>

//       <div className="grid md:grid-cols-3 gap-6">
//         <div className="bg-white/80 backdrop-blur p-6 rounded-xl border border-blue-200">
//           <div className="text-4xl mb-3">⏳</div>
//           <h4 className="text-xl font-bold mb-2 text-gray-900">Start Early</h4>
//           <p className="text-gray-600 text-sm leading-relaxed">
//             The power of compounding works best when you begin young — even small amounts grow massively over decades.
//           </p>
//         </div>

//         <div className="bg-white/80 backdrop-blur p-6 rounded-xl border border-blue-200">
//           <div className="text-4xl mb-3">🔄</div>
//           <h4 className="text-xl font-bold mb-2 text-gray-900">Stay Consistent</h4>
//           <p className="text-gray-600 text-sm leading-relaxed">
//             Use SIPs in mutual funds — invest fixed amounts monthly regardless of market ups/downs for rupee-cost averaging.
//           </p>
//         </div>

//         <div className="bg-white/80 backdrop-blur p-6 rounded-xl border border-blue-200">
//           <div className="text-4xl mb-3">🧠</div>
//           <h4 className="text-xl font-bold mb-2 text-gray-900">Invest Wisely</h4>
//           <p className="text-gray-600 text-sm leading-relaxed">
//             Never invest in what you don't understand. Stick to simple, transparent options like mutual funds, index funds, or gold.
//           </p>
//         </div>
//       </div>
//     </div>
//   </div>
// </motion.section>

//         <AllProducts
//           products={investmentsData.allInvestments}
//           type="investments"
//           title="Featured & Popular Investments"
//           onProductClick={setSelectedProduct}
//           isTeaser={true}
//           showViewAllButton={true}
//           maxItems={9}
//         />

//         <FAQ faqs={investmentsData.faqData} />

//         <CTA
//           data={{
//             title: 'Not Sure Where to Invest?',
//             description: 'Get personalized recommendations based on your goals & risk level',
//             buttonText: 'Find Best Investments',
//             buttonLink: '/investments/calculator',
//           }}
//         />
//       </motion.div>

//       {selectedProduct && (
//         <ProductDetailModal
//           product={selectedProduct}
//           type="investments"
//           onClose={() => setSelectedProduct(null)}
//         />
//       )}
//     </>
//   );
// };

// export default Investments;

// src/pages/Investments.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { investmentsData } from '../data/investments.data';
import Hero from '../components/shared/Hero';
import FilterBar from '../components/shared/FilterBar';
import TopPicks from '../components/shared/TopPicks';
import AllProducts from '../components/shared/AllProducts';
import FAQ from '../components/shared/FAQ';
import CTA from '../components/shared/CTA';
import ProductDetailModal from '../components/shared/ProductDetailModal';
import Seo from '../components/ui/Seo';
import { seoConfig } from '../config/seo.config';

const Investments = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchValue, setSearchValue] = useState('');

  const filteredProducts =
    selectedCategory === 'all'
      ? investmentsData.allInvestments
      : investmentsData.allInvestments.filter(
          (p) => p.category === selectedCategory || p.slug === selectedCategory
        );

  return (
    <>
      <Seo
        title={seoConfig.pages.investments.title}
        description={seoConfig.pages.investments.description}
        keywords={seoConfig.pages.investments.keywords}
        url={`${seoConfig.siteUrl}/investments`}
        image={seoConfig.defaultImage}
      />

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
        <Hero
          data={{
            title: 'Investments\nMake Your Money Work While You Sleep.',
            description: [
              'Keeping cash in a savings account actually loses you money due to inflation. Investing is the only way to build real wealth over time.',
              'Whether you are risk-averse or a risk-taker, there is an asset class for you.',
            ],
            points: [
              { title: 'Mutual Funds & SIPs', description: 'Turn small monthly savings into large corpus with disciplined investing.', icon: '📊' },
              { title: 'Stock Market', description: 'Own shares of companies you believe in. High risk, high reward.', icon: '📈' },
              { title: 'Gold & Fixed Income', description: 'Safe havens for preserving wealth with stable returns.', icon: '🪙' },
              { title: 'Start Early', description: 'Compounding works best when you give it time — even small amounts grow massively.', icon: '⏳' },
            ],
          }}
        />

        <FilterBar
          categories={investmentsData.categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />

        <TopPicks picks={investmentsData.topPicks} type="investments" onProductClick={setSelectedProduct} />

        <AllProducts
          products={filteredProducts}
          type="investments"
          title="All Investments"
          onProductClick={setSelectedProduct}
          searchValue={searchValue}
        />

        <FAQ faqs={investmentsData.faqData} />

        <CTA data={{ title: 'Still Confused? Connect with us', buttonText: 'Contact Us', buttonLink: '/contact' }} />
      </motion.div>

      {selectedProduct && (
        <ProductDetailModal product={selectedProduct} type="investments" onClose={() => setSelectedProduct(null)} />
      )}
    </>
  );
};

export default Investments;