import { motion } from 'framer-motion';
import { insuranceData } from '../data/insurance.data';
import Hero from '../components/shared/Hero';
import Categories from '../components/shared/Categories';
import TopPicks from '../components/shared/TopPicks';
import WhyItMatters from '../components/shared/WhyItMatters';
import AllProducts from '../components/shared/AllProducts';
import FAQ from '../components/shared/FAQ';
import CTA from '../components/shared/CTA';

const Insurance = () => {
  const pageData = {
    hero: {
      badge: '🛡️ Insurance',
      title: 'Protect What Matters Most',
      subtitle: 'Unbiased reviews of term life, health, and vehicle insurance',
      backgroundImage: '/images/insuranceBanner.webp' // Add this image to public/images/hero/
    },
    whyMatters: {
      title: 'Why Insurance Matters',
      description: 'Financial protection for your loved ones when they need it most',
      points: [
        { title: 'Family Security', description: 'Future protection', icon: '👨‍👩‍👧‍👦' },
        { title: 'Medical Coverage', description: 'Quality healthcare', icon: '🏥' },
        { title: 'Tax Benefits', description: 'Save up to ₹1.5L', icon: '💵' },
        { title: 'Peace of Mind', description: 'Sleep better', icon: '😌' }
      ]
    },
    cta: {
      title: 'Not Sure Which Policy?',
      description: 'Calculate your coverage needs and get recommendations',
      buttonText: 'Calculate Coverage',
      buttonLink: '/insurance/calculator'
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
      <Hero data={pageData.hero} />
      <Categories categories={insuranceData.categories} baseUrl="/insurance" />
      <TopPicks picks={insuranceData.topPicks} type="insurance" />
      <WhyItMatters data={pageData.whyMatters} />
      <AllProducts products={insuranceData.allPolicies} type="insurance" title="All Insurance Plans" />
      <FAQ faqs={insuranceData.faqData} />
      <CTA data={pageData.cta} />
    </motion.div>
  );
};

export default Insurance;