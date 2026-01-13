import { lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Skeleton, { CardSkeleton } from '../components/ui/Skeleton';

// Lazy load pages for better performance
const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const CreditCards = lazy(() => import('../pages/CreditCards'));
const Insurance = lazy(() => import('../pages/Insurance'));
const Investments = lazy(() => import('../pages/Investments'));
const BlogList = lazy(() => import('../pages/BlogList'));
const BlogDetail = lazy(() => import('../pages/BlogDetail'));
const Contact = lazy(() => import('../pages/Contact'));
const Tools = lazy(() => import('../pages/Tools'));
const SIPCalculator = lazy(() => import('../pages/SIPCalculator'));
const TaxCalculator = lazy(() => import('../pages/TaxCalculator'));
const InsuranceCalculator = lazy(() => import('../pages/InsuranceCalculator'));

// Loading component for page transitions
const PageLoader = () => (
  <div className="min-h-screen pt-24 pb-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Skeleton variant="title" width="60%" className="mb-6" />
      <Skeleton variant="text" width="80%" className="mb-8" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
    </div>
  </div>
);

const AppRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<PageLoader />}>
        <Routes location={location} key={location.pathname}>
          {/* Main Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* Credit Cards Routes */}
          <Route path="/credit-cards" element={<CreditCards />} />
          <Route path="/credit-cards/lifetime-free" element={<CreditCards />} />
          <Route path="/credit-cards/travel" element={<CreditCards />} />
          <Route path="/credit-cards/cashback" element={<CreditCards />} />

          {/* Insurance Routes */}
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/insurance/term-life" element={<Insurance />} />
          <Route path="/insurance/health" element={<Insurance />} />
          <Route path="/insurance/motor" element={<Insurance />} />

          {/* Investment Routes */}
          <Route path="/investments" element={<Investments />} />
          <Route path="/investments/mutual-funds" element={<Investments />} />
          <Route path="/investments/stocks" element={<Investments />} />
          <Route path="/investments/fixed-income" element={<Investments />} />

          {/* Blog Routes */}
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />

          {/* Tools Routes */}
          <Route path="/tools" element={<Tools />} />
          <Route path="/tools/sip-calculator" element={<SIPCalculator />} />
          <Route path="/tools/tax-calculator" element={<TaxCalculator />} />
          <Route path="/tools/insurance-calculator" element={<InsuranceCalculator />} />

          {/* 404 - Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};

// 404 Page Component
const NotFound = () => (
  <div className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-neutral-50 to-neutral-100">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h1 className="text-9xl font-bold text-primary-600 mb-4">404</h1>
      <h2 className="text-3xl font-bold text-neutral-900 mb-4">Page Not Found</h2>
      <p className="text-xl text-neutral-600 mb-8">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <a
        href="/"
        className="inline-block px-8 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
      >
        Go Back Home
      </a>
    </div>
  </div>
);

export default AppRoutes;