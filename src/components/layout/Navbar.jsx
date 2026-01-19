import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { animationConfig } from '../../config/animation.config';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Menu band karne ke liye jab route change ho ya scroll lock handle ho
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
    document.body.style.overflow = 'unset'; // Reset scroll
  }, [location]);

  // Mobile menu khulne par background scroll lock karne ke liye
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    {
      name: 'Credit Cards',
      path: '/credit-cards',
      dropdown: [
        { name: 'Best Lifetime Free Cards', path: '/credit-cards/lifetime-free' },
        { name: 'Best for Travel', path: '/credit-cards/travel' },
        { name: 'Best for Cashback', path: '/credit-cards/cashback' },
      ],
    },
    {
      name: 'Insurance',
      path: '/insurance',
      dropdown: [
        { name: 'Term Life Insurance', path: '/insurance/term-life' },
        { name: 'Health Insurance', path: '/insurance/health' },
        { name: 'Motor Insurance', path: '/insurance/vehicle' },
      ],
    },
    {
      name: 'Investments',
      path: '/investments',
      dropdown: [
        { name: 'Mutual Funds', path: '/investments/mutual-funds' },
        { name: 'Stock Market', path: '/investments/stocks' },
        { name: 'Fixed Income', path: '/investments/fixed-income' },
      ],
    },
    { name: 'Blog', path: '/blog' },
    { name: 'About Us', path: '/aboutus' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isOpen ? 'bg-white shadow-md' : 'bg-white'
      }`}
      initial={animationConfig.navbarSlide.initial}
      animate={animationConfig.navbarSlide.animate}
      transition={animationConfig.navbarSlide.transition}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary-600">
              Unfiltered<span className="text-neutral-900">Money</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={link.path}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    location.pathname === link.path
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-neutral-700 hover:text-primary-600 hover:bg-neutral-50'
                  }`}
                >
                  {link.name}
                </Link>

                {link.dropdown && (
                  <AnimatePresence>
                    {activeDropdown === link.name && (
                      <motion.div
                        className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-xl border border-neutral-200 py-2"
                        {...animationConfig.dropdown}
                      >
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.name}
                            to={item.path}
                            className="block px-4 py-2 text-sm text-neutral-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg text-neutral-700 hover:bg-neutral-100"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu - Fixed and Scrollable */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-16 left-0 right-0 bottom-0 bg-white z-40 overflow-y-auto lg:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="px-4 py-6 space-y-4 pb-20"> {/* Bottom padding added for scroll space */}
              {navLinks.map((link) => (
                <div key={link.name} className="border-b border-neutral-50 pb-2">
                  <Link
                    to={link.path}
                    className={`block px-4 py-2 font-semibold text-lg ${
                      location.pathname === link.path ? 'text-primary-600' : 'text-neutral-800'
                    }`}
                  >
                    {link.name}
                  </Link>
                  {link.dropdown && (
                    <div className="ml-4 mt-2 grid grid-cols-1 gap-1">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className="block px-4 py-2 text-sm text-neutral-500 active:text-primary-600 active:bg-primary-50 rounded-md"
                        >
                          • {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;