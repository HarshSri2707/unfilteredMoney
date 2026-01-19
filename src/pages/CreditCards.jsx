// import { motion } from 'framer-motion';
// import { creditCardsData } from '../data/creditCards.data';
// import Hero from '../components/shared/Hero';
// import Categories from '../components/shared/Categories';
// import TopPicks from '../components/shared/TopPicks';
// import WhyItMatters from '../components/shared/WhyItMatters';
// import AllProducts from '../components/shared/AllProducts';
// import FAQ from '../components/shared/FAQ';
// import CTA from '../components/shared/CTA';

// const CreditCards = () => {
//   const pageData = {
//     hero: {
//       badge: '💳 Credit Cards',
//       title: 'Find Your Perfect Credit Card',
//       subtitle: 'Honest reviews of 50+ cards. No sponsored rankings.',
//       backgroundImage: 'https://upgradedpoints.com/wp-content/uploads/2022/09/Amex-Credit-Cards-and-Chase-Credit-Cards-Upgraded-Points-LLC-Large.jpg?auto=webp&disable=upscale&width=1420' // Add this image to public/images/hero/
//     },
//     whyMatters: {
//       title: 'Why Credit Cards Matter?',
//       description: 'The right card saves you thousands annually through rewards and benefits',
//       points: [
//         { title: 'Build Credit', description: 'Improve your credit score', icon: '📈' },
//         { title: 'Earn Rewards', description: 'Get 1-10% back', icon: '🎁' },
//         { title: 'Flexibility', description: '45-day credit period', icon: '💰' },
//         { title: 'Benefits', description: 'Lounge, insurance, more', icon: '✨' }
//       ]
//     },
//     cta: {
//       title: 'Still Confused?',
//       description: 'Get personalized recommendations based on your spending',
//       buttonText: 'Find My Card',
//       buttonLink: '/credit-cards/calculator'
//     }
//   };

//   return (
//     <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
//       <Hero data={pageData.hero} />
//       <Categories categories={creditCardsData.categories} baseUrl="/credit-cards" />
//       <TopPicks picks={creditCardsData.topPicks} type="credit-cards" />
//       <WhyItMatters data={pageData.whyMatters} />
//       <AllProducts products={creditCardsData.allCards} type="credit-cards" title="All Credit Cards" />
//       <FAQ faqs={creditCardsData.faqData} />
//       <CTA data={pageData.cta} />
//     </motion.div>
//   );
// };

// export default CreditCards;


// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { creditCardsData } from '../data/creditCards.data';
// import Hero from '../components/shared/Hero';
// import Categories from '../components/shared/Categories';
// import TopPicks from '../components/shared/TopPicks';
// import WhyItMatters from '../components/shared/WhyItMatters';
// import AllProducts from '../components/shared/AllProducts';
// import FAQ from '../components/shared/FAQ';
// import CTA from '../components/shared/CTA';
// import ProductDetailModal from '../components/shared/ProductDetailModal';

// const CreditCards = () => {
//   const [selectedCategory, setSelectedCategory] = useState('all');
//   const [selectedProduct, setSelectedProduct] = useState(null);

//   const pageData = {
//     hero: {
//       badge: '💳 Credit Cards',
//       title: 'Find Your Perfect Credit Card',
//       subtitle: 'Honest reviews of 50+ cards. No sponsored rankings.',
//       backgroundImage: 'https://upgradedpoints.com/wp-content/uploads/2022/09/Amex-Credit-Cards-and-Chase-Credit-Cards-Upgraded-Points-LLC-Large.jpg?auto=webp&disable=upscale&width=1420'
//     },
//     whyMatters: {
//       title: 'Why Credit Cards Matter?',
//       description: 'The right card saves you thousands annually through rewards and benefits',
//       points: [
//         { title: 'Build Credit', description: 'Improve your credit score', icon: '📈' },
//         { title: 'Earn Rewards', description: 'Get 1-10% back', icon: '🎁' },
//         { title: 'Flexibility', description: '45-day credit period', icon: '💰' },
//         { title: 'Benefits', description: 'Lounge, insurance, more', icon: '✨' }
//       ]
//     },
//     cta: {
//       title: 'Still Confused?',
//       description: 'Get personalized recommendations based on your spending',
//       buttonText: 'Find My Card',
//       buttonLink: '/credit-cards/calculator'
//     }
//   };

//   // Filter products based on selected category
//   const filteredProducts = selectedCategory === 'all' 
//     ? creditCardsData.allCards 
//     : creditCardsData.allCards.filter(card => card.category === selectedCategory);

//   return (
//     <>
//       <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
//         <Hero data={pageData.hero} />
        
//         {/* Category Filter */}
//      <Categories 
//   categories={creditCardsData.categories}
//   selectedCategory={selectedCategory}
//   setSelectedCategory={setSelectedCategory}
//   basePath="/credit-cards"           // ← yeh line zaroori hai!
// />
        
//         <TopPicks picks={creditCardsData.topPicks} type="credit-cards" />
//         <WhyItMatters data={pageData.whyMatters} />
        
//         {/* Filtered Products */}
//         <AllProducts 
//           products={filteredProducts}
//           type="credit-cards"
//           title={selectedCategory === 'all' ? 'All Credit Cards' : `${creditCardsData.categories.find(c => c.slug === selectedCategory)?.name || 'Cards'}`}
//           onProductClick={setSelectedProduct}
//         />
        
//         <FAQ faqs={creditCardsData.faqData} />
//         <CTA data={pageData.cta} />
//       </motion.div>

//       {/* Product Detail Modal */}
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
// Updated version with proper handling for /credit-cards/all (now redirects to category page)
// No existing UI/structure changed — only added correct navigation & "all" handling

// CreditCards.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { creditCardsData } from '../data/creditCards.data';
import Hero from '../components/shared/Hero';
import Categories from '../components/shared/Categories';
import TopPicks from '../components/shared/TopPicks';
import WhyItMatters from '../components/shared/WhyItMatters';
import AllProducts from '../components/shared/AllProducts';
import FAQ from '../components/shared/FAQ';
import CTA from '../components/shared/CTA';
import ProductDetailModal from '../components/shared/ProductDetailModal';
import Seo from '../components/ui/Seo'; // ← Import Seo (adjust path if needed)
import { seoConfig } from '../config/seo.config'; // ← Import your seoConfig

const CreditCards = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <>
      <Seo
        title={seoConfig.pages.creditCards.title}
        description={seoConfig.pages.creditCards.description}
        keywords={seoConfig.pages.creditCards.keywords}
        url={`${seoConfig.siteUrl}/credit-cards`}
        image={seoConfig.defaultImage}
      />

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
        <Hero data={{
          badge: '💳 Credit Cards',
          title: 'Find Your Perfect Credit Card',
          subtitle: 'Honest reviews of 50+ cards. No sponsored rankings.',
          backgroundImage: 'https://upgradedpoints.com/wp-content/uploads/2022/09/Amex-Credit-Cards-and-Chase-Credit-Cards-Upgraded-Points-LLC-Large.jpg?auto=webp&disable=upscale&width=1420'
        }} />

        <Categories 
          categories={creditCardsData.categories}
          selectedCategory="all"
          basePath="/credit-cards"
        />

        <TopPicks picks={creditCardsData.topPicks} type="credit-cards" />
        <WhyItMatters data={{
          title: 'Why Credit Cards Matter?',
          description: 'The right card saves you thousands annually through rewards and benefits',
          points: [
            { title: 'Build Credit', description: 'Improve your credit score', icon: '📈' },
            { title: 'Earn Rewards', description: 'Get 1-10% back', icon: '🎁' },
            { title: 'Flexibility', description: '45-day credit period', icon: '💰' },
            { title: 'Benefits', description: 'Lounge, insurance, more', icon: '✨' }
          ]
        }} />

        <AllProducts
          products={creditCardsData.allCards}
          type="credit-cards"
          title="Featured & Popular Cards"
          onProductClick={setSelectedProduct}
          isTeaser={true}
          showViewAllButton={true}
          maxItems={9}
        />

        <FAQ faqs={creditCardsData.faqData} />
        <CTA data={{
          title: 'Still Confused?',
          description: 'Get personalized recommendations based on your spending',
          buttonText: 'Find My Card',
          buttonLink: '/credit-cards/calculator'
        }} />
      </motion.div>

      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          type="credit-cards"
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
};

export default CreditCards;