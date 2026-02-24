

// // src/pages/CreditCards.jsx
// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { creditCardsData } from '../data/creditCards.data';
// import Hero from '../components/shared/Hero';
// import Categories from '../components/shared/Categories';
// import TopPicks from '../components/shared/TopPicks';
// import WhyItMatters from '../components/shared/WhyItMatters'; // ← reusing but with new data
// import AllProducts from '../components/shared/AllProducts';
// import FAQ from '../components/shared/FAQ';
// import CTA from '../components/shared/CTA';
// import ProductDetailModal from '../components/shared/ProductDetailModal';
// import Seo from '../components/ui/Seo';
// import { seoConfig } from '../config/seo.config';

// const CreditCards = () => {
//   const [selectedProduct, setSelectedProduct] = useState(null);

//   return (
//     <>
//       <Seo
//         title={seoConfig.pages.creditCards.title}
//         description={seoConfig.pages.creditCards.description}
//         keywords={seoConfig.pages.creditCards.keywords}
//         url={`${seoConfig.siteUrl}/credit-cards`}
//         image={seoConfig.defaultImage}
//       />

//       <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
//         {/* Updated Hero - matching document headline & tone */}
//         <Hero
//           data={{
//             badge: '💳 Credit Cards',
//             title: 'Swipe Smart. Earn Big.',
//            backgroundImage:
//               'https://upgradedpoints.com/wp-content/uploads/2022/09/Amex-Credit-Cards-and-Chase-Credit-Cards-Upgraded-Points-LLC-Large.jpg?auto=webp&disable=upscale&width=1420',
//           }}
//         />

//         <Categories
//           categories={creditCardsData.categories}
//           selectedCategory="all"
//           basePath="/credit-cards"
//         />

//         <TopPicks picks={creditCardsData.topPicks} type="credit-cards" />

//         {/* Replaced Why Credit Cards Matter with How to Choose */}
//        <WhyItMatters
//   data={{
//     title: 'Credit Cards: Financial Tool, Not a Debt Trap',
//     description: [
//       'If you use it correctly, credit cards can be a great financial tool in your wallet. Unlike popular opinion, it isn\'t a debt trap, but a powerful tool that offers convenience and rewards.',
//       'If used wisely, it can help you enjoy rewards like free flights, cashback on groceries, and interest-free periods. However, if used unscrupulously, it may push you towards a debt trap with high interest.',
//       'At Unfiltered Money, we help you compare and choose the right card suitable for your exact needs and stay on the winning side.'
//     ],
//     points: [
//       {
//         title: 'Travel Frequently?',
//         description: 'Look for air miles, lounge access & low forex markup cards.',
//         icon: '✈️',
//       },
//       {
//         title: 'Love Online Shopping?',
//         description: 'Choose cards with flat cashback, fuel surcharge waivers & partner rewards.',
//         icon: '🛒',
//       },
//       {
//         title: 'First-Time User?',
//         description: 'Start with "Lifetime Free" cards — no annual fees to build credit safely.',
//         icon: '🌱',
//       },
//       {
//         title: 'High Spender?',
//         description: 'Go for premium cards with milestone benefits & high reward rates.',
//         icon: '👑',
//       },
//     ],
//   }}
// />

//         {/* New Section: Unfiltered Advice - pulled from document */}
//       <motion.section
//   initial={{ y: 20, opacity: 0 }}
//   whileInView={{ y: 0, opacity: 1 }}
//   transition={{ duration: 0.5 }}
//   viewport={{ once: true }}
//   className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50"
// >
//   <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//     {/* Main Heading */}
//     <div className="text-center mb-12">
//       <div className="inline-block bg-blue-100 rounded-full p-3 mb-4">
//         <span className="text-5xl">💳</span>
//       </div>
//       <h2 className="text-4xl font-bold text-gray-900 mb-4">
//         How to Choose the Right Credit Card?
//       </h2>
//       <p className="text-gray-600 max-w-2xl mx-auto">
//         Find the perfect card that matches your lifestyle and spending habits
//       </p>
//     </div>

//     {/* Card Selection Grid */}
//     <div className="grid md:grid-cols-3 gap-6 mb-16">
//       <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-blue-100 group hover:border-blue-300">
//         <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
//           <span className="text-3xl">✈️</span>
//         </div>
//         <h3 className="text-xl font-bold mb-3 text-gray-900">Frequent Traveler?</h3>
//         <p className="text-gray-600 leading-relaxed">
//           Look for <span className="font-semibold text-purple-600">air miles</span> and <span className="font-semibold text-purple-600">lounge access</span> benefits to maximize your travel perks.
//         </p>
//       </div>

//       <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-blue-100 group hover:border-blue-300">
//         <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
//           <span className="text-3xl">🛒</span>
//         </div>
//         <h3 className="text-xl font-bold mb-3 text-gray-900">Online Shopper?</h3>
//         <p className="text-gray-600 leading-relaxed">
//           Look for <span className="font-semibold text-green-600">flat cashback rates</span> and <span className="font-semibold text-green-600">fuel surcharge waivers</span> on every purchase.
//         </p>
//       </div>

//       <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-blue-100 group hover:border-blue-300">
//         <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
//           <span className="text-3xl">🌱</span>
//         </div>
//         <h3 className="text-xl font-bold mb-3 text-gray-900">First-Time User?</h3>
//         <p className="text-gray-600 leading-relaxed">
//           Look for <span className="font-semibold text-blue-600">"Lifetime Free"</span> cards with <span className="font-semibold text-blue-600">no annual fees</span> to start your credit journey.
//         </p>
//       </div>
//     </div>

//     {/* Unfiltered Advice Section */}
//     <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-3xl p-8 border-2 border-red-200">
//       <div className="text-center mb-8">
//         <div className="inline-block bg-red-100 rounded-full p-3 mb-4">
//           <span className="text-5xl">⚡</span>
//         </div>
//         <h3 className="text-3xl font-bold text-gray-900 mb-2">Unfiltered Advice: Use Credit Cards Wisely</h3>
//         <p className="text-gray-700">Master these rules to enjoy benefits without falling into debt traps</p>
//       </div>

//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//         <div className="bg-white/90 backdrop-blur p-6 rounded-xl border border-red-200 hover:border-red-300 transition-colors">
//           <div className="text-4xl mb-3">✅</div>
//           <h4 className="text-xl font-bold mb-2 text-gray-900">Not a Debt Trap — If Used Right</h4>
//           <p className="text-gray-600 text-sm leading-relaxed">
//             Credit cards offer convenience, rewards (flights, cashback, interest-free periods), and build credit score when paid responsibly.
//           </p>
//         </div>

//         <div className="bg-white/90 backdrop-blur p-6 rounded-xl border border-red-200 hover:border-red-300 transition-colors">
//           <div className="text-4xl mb-3">⚠️</div>
//           <h4 className="text-xl font-bold mb-2 text-gray-900">Always Pay Full Bill Amount</h4>
//           <p className="text-gray-600 text-sm leading-relaxed">
//             Never pay only the "Minimum Amount Due" — it's a trap. You'll pay high interest (up to 3-4% per month) on the rest and may lose rewards points.
//           </p>
//         </div>

//         <div className="bg-white/90 backdrop-blur p-6 rounded-xl border border-red-200 hover:border-red-300 transition-colors">
//           <div className="text-4xl mb-3">🔥</div>
//           <h4 className="text-xl font-bold mb-2 text-gray-900">Maximize Rewards, Minimize Risk</h4>
//           <p className="text-gray-600 text-sm leading-relaxed">
//             Pay full on time → improve CIBIL score. Miss payments? Late fees, high interest, and credit score drop — making future loans harder.
//           </p>
//         </div>
//       </div>

//       {/* Golden Rule Banner */}
//       <div className="mt-6 bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl p-6 border-2 border-amber-300">
//         <div className="flex items-start gap-4">
//           <div className="text-4xl flex-shrink-0">🛡️</div>
//           <div>
//             <h4 className="text-xl font-bold mb-2 text-gray-900">Our Golden Rule</h4>
//             <p className="text-gray-700 leading-relaxed">
//               Use credit cards for planned spends you can repay in full. Compare cards on our site, apply strategically (not too many at once), and enjoy the perks without falling into debt.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </motion.section>

//         <AllProducts
//           products={creditCardsData.allCards}
//           type="credit-cards"
//           title="Featured & Popular Cards"
//           onProductClick={setSelectedProduct}
//           isTeaser={true}
//           showViewAllButton={true}
//           maxItems={9}
//         />

//         <FAQ faqs={creditCardsData.faqData} />

//         <CTA
//           data={{
//             title: 'Still Confused?',
//             description: 'Get personalized recommendations based on your spending',
//             buttonText: 'Find My Card',
//             buttonLink: '/credit-cards/calculator',
//           }}
//         />
//       </motion.div>

//       {selectedProduct && (
//         <ProductDetailModal
//           product={selectedProduct}
//           type="credit-cards"
//           onClose={() => setSelectedProduct(null)}
//         />
//       )}
//     </>
//   );
// };

// export default CreditCards;


// src/pages/CreditCards.jsx
// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { creditCardsData } from '../data/creditCards.data';
// import Hero from '../components/shared/Hero';
// import FilterBar from '../components/shared/FilterBar';
// import TopPicks from '../components/shared/TopPicks';
// import AllProducts from '../components/shared/AllProducts';
// import FAQ from '../components/shared/FAQ';
// import CTA from '../components/shared/CTA';
// import ProductDetailModal from '../components/shared/ProductDetailModal';
// import Seo from '../components/ui/Seo';
// import { seoConfig } from '../config/seo.config';

// const CreditCards = () => {
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [selectedCategory, setSelectedCategory] = useState('all');
//   const [searchValue, setSearchValue] = useState('');

//   const filteredProducts = (
//     selectedCategory === 'all'
//       ? creditCardsData.allCards
//       : creditCardsData.allCards.filter(
//           (card) => card.category === selectedCategory || card.slug === selectedCategory
//         )
//   );

//   return (
//     <>
//       <Seo
//         title={seoConfig.pages.creditCards.title}
//         description={seoConfig.pages.creditCards.description}
//         keywords={seoConfig.pages.creditCards.keywords}
//         url={`${seoConfig.siteUrl}/credit-cards`}
//         image={seoConfig.defaultImage}
//       />

//       <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>

//         {/* ── HERO ── */}
//         <Hero
//           data={{
//             title: 'Credit Cards: Financial Tool, Not a Debt Trap!',
//             description: [
//               "If you use it correctly, credit cards can be a great financial tool in your wallet. Unlike popular opinion, it isn't a debt trap, but a powerful tool that offers convenience and rewards.",
//               'If used wisely, it can help you enjoy rewards like free flights, cashback on groceries, and interest-free periods. However, if used unscrupulously, it may push you towards a debt trap with high interest.',
//               'At Unfiltered Money, we help you compare and choose the right card suitable for your exact needs and stay on the winning side.',
//             ],
//             points: [
//               { title: 'Travel Frequently?', description: 'Look for air miles, lounge access & low forex markup cards.', icon: '✈️' },
//               { title: 'Love Online Shopping?', description: 'Choose cards with flat cashback, fuel surcharge waivers & partner rewards.', icon: '🛒' },
//               { title: 'First-Time User?', description: 'Start with "Lifetime Free" cards — no annual fees to build credit safely.', icon: '🌱' },
//               { title: 'High Spender?', description: 'Go for premium cards with milestone benefits & high reward rates.', icon: '👑' },
//             ],
//           }}
//         />

//         {/* ── STICKY FILTER BAR: Search + Category dropdown ── */}
//         <FilterBar
//           categories={creditCardsData.categories}
//           selectedCategory={selectedCategory}
//           setSelectedCategory={setSelectedCategory}
//           searchValue={searchValue}
//           setSearchValue={setSearchValue}
//         />

//         {/* ── TOP PICKS ── */}
//         <TopPicks
//           picks={creditCardsData.topPicks}
//           type="credit-cards"
//           onProductClick={setSelectedProduct}
//         />

//         {/* ── ALL PRODUCTS ── */}
//         <AllProducts
//           products={filteredProducts}
//           type="credit-cards"
//           title="All Credit Cards"
//           onProductClick={setSelectedProduct}
//           searchValue={searchValue}
//         />

//         {/* ── FAQ ── */}
//         <FAQ faqs={creditCardsData.faqData} />

//         {/* ── CTA ── */}
//         <CTA data={{ title: 'Still Confused? Connect with us', buttonText: 'Contact Us', buttonLink: '/contact' }} />
//       </motion.div>

//       {selectedProduct && (
//         <ProductDetailModal
//           product={selectedProduct}
//           type="credit-cards"
//           onClose={() => setSelectedProduct(null)}
//         />
//       )}
//     </>
//   );
// };

// export default CreditCards;

// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { creditCardsData } from '../data/creditCards.data';
// import Hero from '../components/shared/Hero';
// import FilterBar from '../components/shared/FilterBar';
// import TopPicks from '../components/shared/TopPicks';
// import AllProducts from '../components/shared/AllProducts';
// import FAQ from '../components/shared/FAQ';
// import CTA from '../components/shared/CTA';
// import ProductDetailModal from '../components/shared/ProductDetailModal';
// import Seo from '../components/ui/Seo';
// import { seoConfig } from '../config/seo.config';

// const CreditCards = () => {
//   const [selectedProduct, setSelectedProduct]   = useState(null);
//   const [selectedCategory, setSelectedCategory] = useState('all');
//   const [searchValue, setSearchValue]           = useState('');

//   const isFiltered = selectedCategory !== 'all' || searchValue.trim() !== '';

//   const filteredProducts = creditCardsData.allCards.filter((card) => {
//     const matchCat = selectedCategory === 'all' ||
//       card.category === selectedCategory ||
//       card.slug === selectedCategory;
//     const matchSearch = !searchValue ||
//       card.name?.toLowerCase().includes(searchValue.toLowerCase()) ||
//       card.bank?.toLowerCase().includes(searchValue.toLowerCase());
//     return matchCat && matchSearch;
//   });

//   return (
//     <>
//       <Seo
//         title={seoConfig.pages.creditCards?.title}
//         description={seoConfig.pages.creditCards?.description}
//         keywords={seoConfig.pages.creditCards?.keywords}
//         url={`${seoConfig.siteUrl}/credit-cards`}
//         image={seoConfig.defaultImage}
//       />
//       <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
//        <Hero
//           data={{
//             title: 'Credit Cards: Financial Tool, Not a Debt Trap!',
//             description: [
//               "If you use it correctly, credit cards can be a great financial tool in your wallet. Unlike popular opinion, it isn't a debt trap, but a powerful tool that offers convenience and rewards.",
//               'If used wisely, it can help you enjoy rewards like free flights, cashback on groceries, and interest-free periods. However, if used unscrupulously, it may push you towards a debt trap with high interest.',
//               'At Unfiltered Money, we help you compare and choose the right card suitable for your exact needs and stay on the winning side.',
//             ],
//             points: [
//               { title: 'Travel Frequently?', description: 'Look for air miles, lounge access & low forex markup cards.', icon: '✈️' },
//               { title: 'Love Online Shopping?', description: 'Choose cards with flat cashback, fuel surcharge waivers & partner rewards.', icon: '🛒' },
//               { title: 'First-Time User?', description: 'Start with "Lifetime Free" cards — no annual fees to build credit safely.', icon: '🌱' },
//               { title: 'High Spender?', description: 'Go for premium cards with milestone benefits & high reward rates.', icon: '👑' },
//             ],
//           }}
//         />
//         <FilterBar
//           categories={creditCardsData.categories}
//           selectedCategory={selectedCategory}
//           setSelectedCategory={setSelectedCategory}
//           searchValue={searchValue}
//           setSearchValue={setSearchValue}
//         />
//         <TopPicks
//           picks={creditCardsData.topPicks}
//           type="credit-cards"
//           onProductClick={setSelectedProduct}
//           isFiltered={isFiltered}
//         />
//         <AllProducts
//           products={filteredProducts}
//           type="credit-cards"
//           title={isFiltered ? `Results (${filteredProducts.length})` : 'All Credit Cards'}
//           onProductClick={setSelectedProduct}
//           searchValue={searchValue}
//         />
//         <FAQ faqs={creditCardsData.faqData} />
//         <CTA data={{ title: 'Still Confused? Connect with us', buttonText: 'Contact Us', buttonLink: '/contact' }} />
//       </motion.div>
//       {selectedProduct && (
//         <ProductDetailModal product={selectedProduct} type="credit-cards" onClose={() => setSelectedProduct(null)} />
//       )}
//     </>
//   );
// };

// export default CreditCards;


import { useState } from 'react';
import { motion } from 'framer-motion';
import { creditCardsData } from '../data/creditCards.data';
import Hero from '../components/shared/Hero';
import FilterBar from '../components/shared/FilterBar';
import TopPicks from '../components/shared/TopPicks';
import AllProducts from '../components/shared/AllProducts';
import FAQ from '../components/shared/FAQ';
import CTA from '../components/shared/CTA';
import ProductDetailModal from '../components/shared/ProductDetailModal';
import Seo from '../components/ui/Seo';
import { seoConfig } from '../config/seo.config';

const CreditCards = () => {
  const [selectedProduct, setSelectedProduct]   = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchValue, setSearchValue]           = useState('');

  const isFiltered = selectedCategory !== 'all' || searchValue.trim() !== '';

  const filteredProducts = creditCardsData.allCards.filter((card) => {
    const matchCat = selectedCategory === 'all' ||
      card.category === selectedCategory ||
      card.slug === selectedCategory;
    const matchSearch = !searchValue ||
      card.name?.toLowerCase().includes(searchValue.toLowerCase()) ||
      card.bank?.toLowerCase().includes(searchValue.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <>
      <Seo
        title={seoConfig.pages.creditCards?.title}
        description={seoConfig.pages.creditCards?.description}
        keywords={seoConfig.pages.creditCards?.keywords}
        url={`${seoConfig.siteUrl}/credit-cards`}
        image={seoConfig.defaultImage}
      />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>

        <Hero
          data={{
            // \n se title break hoga, highlightWord blue mein dikhega
            title: 'Credit Cards:\nFinancial Tool, Not a Debt Trap!',
            highlightWord: 'Debt Trap!',

            // Right side pe dikhne wali hero image — apna path daal do
            heroImage: 'images/banner/Credit card main page image.png',

            // Left side bullet points
            description: [
              "If you use it correctly, credit cards can be a great financial tool in your wallet. Unlike popular opinion, it isn't a debt trap, but a powerful tool that offers convenience and rewards.",
              'If used wisely, it can help you enjoy rewards like free flights, cashback on groceries, and interest-free periods. However, if used unscrupulously, it may push you towards a debt trap with high interest.',
              'At Unfiltered Money, we help you compare and choose the right card suitable for your exact needs and stay on the winning side.',
            ],

            // Auto-rotating carousel (bullets ke niche)
            points: [
              { title: 'Travel Frequently?',    description: 'Look for air miles, lounge access & low forex markup cards.',             icon: '✈️' },
              { title: 'Love Online Shopping?', description: 'Choose cards with flat cashback, fuel surcharge waivers & partner rewards.', icon: '🛒' },
              { title: 'First-Time User?',      description: 'Start with "Lifetime Free" cards — no annual fees to build credit safely.',  icon: '🌱' },
              { title: 'High Spender?',         description: 'Go for premium cards with milestone benefits & high reward rates.',         icon: '👑' },
            ],

            // White tip card — bottom left (image mein "First time user?" wala)
            tip: {
              label: 'First time user?',
              text: 'Start with "Lifetime Free" cards — no annual fees to build credit safely',
            },
          }}
        />

        <FilterBar
          categories={creditCardsData.categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />

        <TopPicks
          picks={creditCardsData.topPicks}
          type="credit-cards"
          onProductClick={setSelectedProduct}
          isFiltered={isFiltered}
        />
        <AllProducts
          products={filteredProducts}
          type="credit-cards"
          title={isFiltered ? `Results (${filteredProducts.length})` : 'All Credit Cards'}
          onProductClick={setSelectedProduct}
          searchValue={searchValue}
        />
        <FAQ faqs={creditCardsData.faqData} />
        <CTA data={{ title: 'Still Confused? Connect with us', buttonText: 'Contact Us', buttonLink: '/contact' }} />

      </motion.div>

      {selectedProduct && (
        <ProductDetailModal product={selectedProduct} type="credit-cards" onClose={() => setSelectedProduct(null)} />
      )}
    </>
  );
};

export default CreditCards;