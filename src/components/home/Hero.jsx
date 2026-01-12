import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { animationConfig } from '../../config/animation.config';
import Button from '../ui/Button';

const Hero = () => {
  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  const floatingCards = [
    { icon: '💳', label: 'Credit Cards', position: 'top-16 left-8', delay: 0.2, color: 'from-blue-500 to-blue-600' },
    { icon: '🛡️', label: 'Insurance', position: 'top-32 right-12', delay: 0.4, color: 'from-green-500 to-emerald-600' },
    { icon: '📈', label: 'Investments', position: 'bottom-24 left-12', delay: 0.6, color: 'from-purple-500 to-purple-600' },
    { icon: '💰', label: 'Calculators', position: 'bottom-16 right-8', delay: 0.8, color: 'from-orange-500 to-orange-600' },
  ];

  return (
    <section className="relative bg-gradient-to-br from-primary-50 via-white to-accent-50 pt-20 pb-12 md:pt-24 md:pb-16 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero-bg.avif" 
          alt="Finance background"
          className="w-full h-full object-cover"
          loading="eager"
        />

        {/* Light Overlay */}
        <div className="absolute inset-0 bg-white/10" />

        {/* SVG Pattern Background */}
        <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="finance-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <text x="10" y="30" fontSize="24" fill="#0ea5e9" opacity="0.3">₹</text>
              <text x="70" y="80" fontSize="20" fill="#d946ef" opacity="0.3">$</text>
              <path d="M 5 50 Q 30 20, 50 40 T 95 30" stroke="#0ea5e9" strokeWidth="2" fill="none" opacity="0.2"/>
              <path d="M 10 70 L 30 60 L 50 75 L 70 55 L 90 65" stroke="#10b981" strokeWidth="1.5" fill="none" opacity="0.2"/>
              <circle cx="25" cy="25" r="2" fill="#d946ef" opacity="0.3"/>
              <circle cx="75" cy="60" r="2" fill="#0ea5e9" opacity="0.3"/>
              <circle cx="50" cy="85" r="2" fill="#10b981" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#finance-pattern)"/>
        </svg>

        {/* Abstract Financial Icons Background */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-10 left-20 text-7xl md:text-9xl">💰</div>
          <div className="absolute top-32 right-32 text-6xl md:text-8xl">📊</div>
          <div className="absolute bottom-20 left-40 text-5xl md:text-7xl">💳</div>
          <div className="absolute bottom-40 right-20 text-7xl md:text-9xl">🏦</div>
          <div className="absolute top-1/2 left-1/3 text-5xl md:text-6xl">📈</div>
          <div className="absolute top-1/3 right-1/4 text-6xl md:text-7xl">🛡️</div>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-primary-50/90 to-accent-50/95" />
      </div>
      
      {/* Decorative Gradient Blobs */}
      <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-primary-200 rounded-full blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-accent-200 rounded-full blur-3xl opacity-20 animate-pulse" />
      
      {/* Animated Lines - Hidden on mobile */}
      <svg className="hidden md:block absolute inset-0 w-full h-full opacity-10 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          d="M 100 100 Q 400 200, 800 150"
          stroke="url(#gradient1)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.3 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.path
          d="M 200 500 Q 600 300, 1000 400"
          stroke="url(#gradient2)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.3 }}
          transition={{ duration: 2.5, delay: 0.5, repeat: Infinity, repeatType: "reverse" }}
        />
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0ea5e9" />
            <stop offset="100%" stopColor="#d946ef" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>
        </defs>
      </svg>

      {/* Floating Cards - Desktop Only - Smaller Size */}
      {floatingCards.map((item, index) => (
        <motion.div
          key={index}
          className={`hidden xl:block absolute ${item.position} z-20`}
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          animate={{ 
            opacity: 0.9, 
            scale: 1,
            rotate: 0,
            y: [0, -12, 0],
          }}
          transition={{
            opacity: { duration: 0.5, delay: item.delay },
            scale: { duration: 0.5, delay: item.delay },
            rotate: { duration: 0.5, delay: item.delay },
            y: {
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: item.delay,
            }
          }}
        >
          <div className="bg-white/95 backdrop-blur-lg rounded-xl p-3 shadow-xl border border-white/70 hover:shadow-2xl transition-all duration-300">
            <div className={`w-10 h-10 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center mb-2 shadow-md`}>
              <span className="text-2xl">{item.icon}</span>
            </div>
            <div className="text-xs font-bold text-neutral-800">{item.label}</div>
            <div className="text-[10px] text-neutral-500 mt-0.5">Unbiased</div>
          </div>
        </motion.div>
      ))}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          variants={containerVariants}
          initial="initial"
          animate="animate"
        >
          <motion.div
            variants={itemVariants}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-primary-100 text-primary-700 rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6 shadow-sm">
              🔍 The Honest Friend in Personal Finance
            </span>
          </motion.div>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-neutral-900 mb-4 md:mb-6 leading-tight drop-shadow-sm px-2"
            variants={itemVariants}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            Financial Products Come With{' '}
            <span className="text-primary-600">Fine Print</span>
            <br className="hidden sm:block" />
            <span className="sm:inline"> </span>
            We Give You The{' '}
            <span className="text-accent-600">Magnifying Glass</span>
          </motion.h1>

          <motion.p
            className="text-sm sm:text-base md:text-lg text-neutral-700 mb-6 md:mb-8 leading-relaxed drop-shadow-sm px-4"
            variants={itemVariants}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            Compare credit cards, insurance policies, and investments with{' '}
            <strong className="text-neutral-900">0% bias</strong> and <strong className="text-neutral-900">100% unfiltered truth</strong>.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-6 md:mb-8 px-4"
            variants={itemVariants}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <Link to="/credit-cards">
              <Button size="md" variant="primary" className="shadow-lg hover:shadow-xl w-full sm:w-auto">
                Explore Credit Cards
              </Button>
            </Link>
            <Link to="/blog">
              <Button size="md" variant="outline" className="shadow-md hover:shadow-lg w-full sm:w-auto">
                Read Latest Insights
              </Button>
            </Link>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-3 md:gap-6 text-xs md:text-sm text-neutral-600 mb-6 md:mb-8 px-4"
            variants={itemVariants}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <div className="flex items-center space-x-1.5 bg-white/60 backdrop-blur-sm px-2.5 py-1 md:px-3 md:py-1 rounded-full shadow-sm">
              <span className="text-xs">✓</span>
              <span>Updated Daily</span>
            </div>
            <div className="flex items-center space-x-1.5 bg-white/60 backdrop-blur-sm px-2.5 py-1 md:px-3 md:py-1 rounded-full shadow-sm">
              <span className="text-xs">✓</span>
              <span>No Spam</span>
            </div>
            <div className="flex items-center space-x-1.5 bg-white/60 backdrop-blur-sm px-2.5 py-1 md:px-3 md:py-1 rounded-full shadow-sm">
              <span className="text-xs">✓</span>
              <span>No Sign-ups</span>
            </div>
          </motion.div>

          {/* Feature Cards - Compact & Responsive */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto px-4"
            variants={itemVariants}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
          >
            <motion.div 
              className="bg-white/90 backdrop-blur-md rounded-lg md:rounded-xl p-4 md:p-5 border border-white/70 shadow-lg hover:shadow-xl transition-all"
              whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.2 } }}
            >
              <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-3 shadow-md mx-auto">
                <span className="text-2xl md:text-3xl">💳</span>
              </div>
              <h3 className="font-bold text-sm md:text-base text-neutral-900 mb-1.5">Credit Cards</h3>
              <p className="text-xs md:text-sm text-neutral-600 mb-2">Compare 50+ cards</p>
              <div className="text-[10px] md:text-xs text-primary-600 font-semibold bg-primary-50 px-2 py-0.5 rounded-full inline-block">50+ Reviewed</div>
            </motion.div>

            <motion.div 
              className="bg-white/90 backdrop-blur-md rounded-lg md:rounded-xl p-4 md:p-5 border border-white/70 shadow-lg hover:shadow-xl transition-all"
              whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.2 } }}
            >
              <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-3 shadow-md mx-auto">
                <span className="text-2xl md:text-3xl">🛡️</span>
              </div>
              <h3 className="font-bold text-sm md:text-base text-neutral-900 mb-1.5">Insurance</h3>
              <p className="text-xs md:text-sm text-neutral-600 mb-2">No hidden traps</p>
              <div className="text-[10px] md:text-xs text-green-600 font-semibold bg-green-50 px-2 py-0.5 rounded-full inline-block">100+ Policies</div>
            </motion.div>

            <motion.div 
              className="bg-white/90 backdrop-blur-md rounded-lg md:rounded-xl p-4 md:p-5 border border-white/70 shadow-lg hover:shadow-xl transition-all"
              whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.2 } }}
            >
              <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-3 shadow-md mx-auto">
                <span className="text-2xl md:text-3xl">📈</span>
              </div>
              <h3 className="font-bold text-sm md:text-base text-neutral-900 mb-1.5">Investments</h3>
              <p className="text-xs md:text-sm text-neutral-600 mb-2">Funds decoded</p>
              <div className="text-[10px] md:text-xs text-purple-600 font-semibold bg-purple-50 px-2 py-0.5 rounded-full inline-block">200+ Funds</div>
            </motion.div>
          </motion.div>

          {/* Stats - Compact */}
          <motion.div
            className="mt-8 md:mt-10 flex flex-wrap justify-center gap-4 md:gap-8 text-xs md:text-sm text-neutral-700 px-4"
            variants={itemVariants}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <div className="flex items-center space-x-1.5 md:space-x-2 bg-white/70 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-lg shadow-md">
              <span className="text-lg md:text-2xl">📊</span>
              <span className="font-medium">500+ Products</span>
            </div>
            <div className="flex items-center space-x-1.5 md:space-x-2 bg-white/70 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-lg shadow-md">
              <span className="text-lg md:text-2xl">✓</span>
              <span className="font-medium">100% Unbiased</span>
            </div>
            <div className="flex items-center space-x-1.5 md:space-x-2 bg-white/70 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-lg shadow-md">
              <span className="text-lg md:text-2xl">🇮🇳</span>
              <span className="font-medium">India-Centric</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;