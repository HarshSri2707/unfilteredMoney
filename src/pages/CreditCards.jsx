import { motion } from 'framer-motion';
import { creditCardsData } from '../data/creditCards.data';
import Hero from '../components/shared/Hero';
import Categories from '../components/shared/Categories';
import TopPicks from '../components/shared/TopPicks';
import WhyItMatters from '../components/shared/WhyItMatters';
import AllProducts from '../components/shared/AllProducts';
import FAQ from '../components/shared/FAQ';
import CTA from '../components/shared/CTA';

const CreditCards = () => {
  const pageData = {
    hero: {
      badge: '💳 Credit Cards',
      title: 'Find Your Perfect Credit Card',
      subtitle: 'Honest reviews of 50+ cards. No sponsored rankings.',
      backgroundImage: '/images/creditcard.jpg' // Add this image to public/images/hero/
    },
    whyMatters: {
      title: 'Why Credit Cards Matter?',
      description: 'The right card saves you thousands annually through rewards and benefits',
      points: [
        { title: 'Build Credit', description: 'Improve your credit score', icon: '📈' },
        { title: 'Earn Rewards', description: 'Get 1-10% back', icon: '🎁' },
        { title: 'Flexibility', description: '45-day credit period', icon: '💰' },
        { title: 'Benefits', description: 'Lounge, insurance, more', icon: '✨' }
      ]
    },
    cta: {
      title: 'Still Confused?',
      description: 'Get personalized recommendations based on your spending',
      buttonText: 'Find My Card',
      buttonLink: '/credit-cards/calculator'
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
      <Hero data={pageData.hero} />
      <Categories categories={creditCardsData.categories} baseUrl="/credit-cards" />
      <TopPicks picks={creditCardsData.topPicks} type="credit-cards" />
      <WhyItMatters data={pageData.whyMatters} />
      <AllProducts products={creditCardsData.allCards} type="credit-cards" title="All Credit Cards" />
      <FAQ faqs={creditCardsData.faqData} />
      <CTA data={pageData.cta} />
    </motion.div>
  );
};

export default CreditCards;