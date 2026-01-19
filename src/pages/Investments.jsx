// import { motion } from 'framer-motion';
// import { investmentsData } from '../data/investments.data';
// import Hero from '../components/shared/Hero';
// import Categories from '../components/shared/Categories';
// import TopPicks from '../components/shared/TopPicks';
// import WhyItMatters from '../components/shared/WhyItMatters';
// import AllProducts from '../components/shared/AllProducts';
// import FAQ from '../components/shared/FAQ';
// import CTA from '../components/shared/CTA';

// const Investments = () => {
//   const pageData = {
//     hero: {
//       badge: '📈 Investments',
//       title: 'Grow Your Wealth Smartly',
//       subtitle: 'Unbiased reviews of mutual funds, NPS, PPF, and investment options',
//       backgroundImage: '/images/hero/investments-hero.jpg' // Add this image to public/images/hero/
//     },
//     whyMatters: {
//       title: 'Why Smart Investing Matters',
//       description: 'The right investment strategy can help you beat inflation and build long-term wealth',
//       points: [
//         { title: 'Beat Inflation', description: 'Grow money faster than rising prices', icon: '📈' },
//         { title: 'Tax Savings', description: 'Save up to ₹1.5L under 80C', icon: '💰' },
//         { title: 'Compound Growth', description: 'Let time work for you', icon: '⏰' },
//         { title: 'Financial Goals', description: 'Retirement, education, home', icon: '🎯' }
//       ]
//     },
//     cta: {
//       title: 'Not Sure Where to Invest?',
//       description: 'Get personalized investment recommendations based on your goals',
//       buttonText: 'Find Best Investments',
//       buttonLink: '/investments/calculator'
//     }
//   };

//   return (
//     <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
//       <Hero data={pageData.hero} />
//       <Categories categories={investmentsData.categories} baseUrl="/investments" />
//       <TopPicks picks={investmentsData.topPicks} type="investments" />
//       <WhyItMatters data={pageData.whyMatters} />
//       <AllProducts products={investmentsData.allInvestments} type="investments" title="All Investment Options" />
//       <FAQ faqs={investmentsData.faqData} />
//       <CTA data={pageData.cta} />
//     </motion.div>
//   );
// };

// export default Investments;


// Updated Investments.jsx - Same consistent pattern
// - Category click → CategoryPage pe redirect
// - Landing page pe saare investments dikhenge
// - "All" click → /investments/all pe jayega

// Investments.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { investmentsData } from '../data/investments.data';
import Hero from '../components/shared/Hero';
import Categories from '../components/shared/Categories';
import TopPicks from '../components/shared/TopPicks';
import WhyItMatters from '../components/shared/WhyItMatters';
import AllProducts from '../components/shared/AllProducts';
import FAQ from '../components/shared/FAQ';
import CTA from '../components/shared/CTA';
import ProductDetailModal from '../components/shared/ProductDetailModal';
import Seo from '../components/ui/Seo'; // ← Import Seo
import { seoConfig } from '../config/seo.config'; // ← Import seoConfig

const Investments = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

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
        <Hero data={{
          badge: '📈 Investments',
          title: 'Grow Your Wealth Smartly',
          subtitle: 'Unbiased reviews of mutual funds, NPS, PPF, and investment options',
          backgroundImage: 'https://www.livemint.com/lm-img/img/2023/11/22/600x338/NRI-investments-in-India-primarily-consist-of-fixe_1697992340325_1700673128374.jpg'
        }} />

        <Categories 
          categories={investmentsData.categories}
          selectedCategory="all"
          basePath="/investments"
        />

        <TopPicks picks={investmentsData.topPicks} type="investments" />
        <WhyItMatters data={{
          title: 'Why Smart Investing Matters',
          description: 'The right investment strategy can help you beat inflation and build long-term wealth',
          points: [
            { title: 'Beat Inflation', description: 'Grow money faster than rising prices', icon: '📈' },
            { title: 'Tax Savings', description: 'Save up to ₹1.5L under 80C', icon: '💰' },
            { title: 'Compound Growth', description: 'Let time work for you', icon: '⏰' },
            { title: 'Financial Goals', description: 'Retirement, education, home', icon: '🎯' }
          ]
        }} />

        <AllProducts
          products={investmentsData.allInvestments}
          type="investments"
          title="Featured & Popular Investments"
          onProductClick={setSelectedProduct}
          isTeaser={true}
          showViewAllButton={true}
          maxItems={9}
        />

        <FAQ faqs={investmentsData.faqData} />
        <CTA data={{
          title: 'Not Sure Where to Invest?',
          description: 'Get personalized investment recommendations based on your goals',
          buttonText: 'Find Best Investments',
          buttonLink: '/investments/calculator'
        }} />
      </motion.div>

      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          type="investments"
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
};

export default Investments;