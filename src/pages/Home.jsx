import { motion } from 'framer-motion';
import { animationConfig } from '../config/animation.config';
import { seoConfig } from '../config/seo.config';
import Seo from '../components/ui/Seo';
import Hero from '../components/home/Hero';
import TopPicks from '../components/home/TopPicks';
import WhyTrust from '../components/home/WhyTrust';
import HowItWorks from '../components/home/HowItWorks';
import ExploreCategories from '../components/home/ExploreCategories';
import Tools from '../components/home/Tools';
import LatestBlogs from '../components/home/LatestBlogs';
import FAQ from '../components/home/FAQ';
import Disclosure from '../components/home/Disclosure';

const Home = () => {
  return (
    <motion.div
      {...animationConfig.pageTransition}
    >
      <Seo
        title={seoConfig.pages.home.title}
        description={seoConfig.pages.home.description}
        keywords={seoConfig.pages.home.keywords}
        url={seoConfig.siteUrl}
      />
      
      <Hero />
      <TopPicks />
      <WhyTrust />
      <HowItWorks />
      <ExploreCategories />
      <Tools />
      <LatestBlogs />
      <FAQ />
      <Disclosure />
    </motion.div>
  );
};

export default Home;