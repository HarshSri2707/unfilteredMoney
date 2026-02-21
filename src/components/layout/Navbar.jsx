// import { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';
// import { animationConfig } from '../../config/animation.config';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState(null);
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Menu band karne ke liye jab route change ho ya scroll lock handle ho
//   useEffect(() => {
//     setIsOpen(false);
//     setActiveDropdown(null);
//     document.body.style.overflow = 'unset'; // Reset scroll
//   }, [location]);

//   // Mobile menu khulne par background scroll lock karne ke liye
//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//     if (!isOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'unset';
//     }
//   };

//   const navLinks = [
//     { name: 'Home', path: '/' },
//     {
//       name: 'Credit Cards',
//       path: '/credit-cards',
//       dropdown: [
//         { name: 'Best Lifetime Free Cards', path: '/credit-cards/lifetime-free' },
//         { name: 'Best for Travel', path: '/credit-cards/travel' },
//         { name: 'Best for Cashback', path: '/credit-cards/cashback' },
//       ],
//     },
//     {
//       name: 'Insurance',
//       path: '/insurance',
//       dropdown: [
//         { name: 'Term Life Insurance', path: '/insurance/term-life' },
//         { name: 'Health Insurance', path: '/insurance/health' },
//         { name: 'Motor Insurance', path: '/insurance/vehicle' },
//       ],
//     },
//     {
//       name: 'Investments',
//       path: '/investments',
//       dropdown: [
//         { name: 'Mutual Funds', path: '/investments/mutual-funds' },
//         { name: 'Stock Market', path: '/investments/stocks' },
//         { name: 'Fixed Income', path: '/investments/fixed-income' },
//       ],
//     },
//     { name: 'Blog', path: '/blog' },
//     { name: 'About Us', path: '/aboutus' },
//     { name: 'Contact', path: '/contact' },
//   ];

//   return (
//     <motion.nav
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         isScrolled || isOpen ? 'bg-white shadow-md' : 'bg-white'
//       }`}
//       initial={animationConfig.navbarSlide.initial}
//       animate={animationConfig.navbarSlide.animate}
//       transition={animationConfig.navbarSlide.transition}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <Link to="/" className="flex items-center space-x-2">
//             <span className="text-2xl font-bold text-primary-600">
//               Unfiltered<span className="text-neutral-900">Money</span>
//             </span>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden lg:flex items-center space-x-1">
//             {navLinks.map((link) => (
//               <div
//                 key={link.name}
//                 className="relative"
//                 onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
//                 onMouseLeave={() => setActiveDropdown(null)}
//               >
//                 <Link
//                   to={link.path}
//                   className={`px-4 py-2 rounded-lg transition-colors ${
//                     location.pathname === link.path
//                       ? 'text-primary-600 bg-primary-50'
//                       : 'text-neutral-700 hover:text-primary-600 hover:bg-neutral-50'
//                   }`}
//                 >
//                   {link.name}
//                 </Link>

//                 {link.dropdown && (
//                   <AnimatePresence>
//                     {activeDropdown === link.name && (
//                       <motion.div
//                         className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-xl border border-neutral-200 py-2"
//                         {...animationConfig.dropdown}
//                       >
//                         {link.dropdown.map((item) => (
//                           <Link
//                             key={item.name}
//                             to={item.path}
//                             className="block px-4 py-2 text-sm text-neutral-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
//                           >
//                             {item.name}
//                           </Link>
//                         ))}
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 )}
//               </div>
//             ))}
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="lg:hidden p-2 rounded-lg text-neutral-700 hover:bg-neutral-100"
//             onClick={toggleMenu}
//             aria-label="Toggle menu"
//           >
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               {isOpen ? (
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//               ) : (
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//               )}
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu - Fixed and Scrollable */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             className="fixed top-16 left-0 right-0 bottom-0 bg-white z-40 overflow-y-auto lg:hidden"
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -10 }}
//             transition={{ duration: 0.2 }}
//           >
//             <div className="px-4 py-6 space-y-4 pb-20"> {/* Bottom padding added for scroll space */}
//               {navLinks.map((link) => (
//                 <div key={link.name} className="border-b border-neutral-50 pb-2">
//                   <Link
//                     to={link.path}
//                     className={`block px-4 py-2 font-semibold text-lg ${
//                       location.pathname === link.path ? 'text-primary-600' : 'text-neutral-800'
//                     }`}
//                   >
//                     {link.name}
//                   </Link>
//                   {link.dropdown && (
//                     <div className="ml-4 mt-2 grid grid-cols-1 gap-1">
//                       {link.dropdown.map((item) => (
//                         <Link
//                           key={item.name}
//                           to={item.path}
//                           className="block px-4 py-2 text-sm text-neutral-500 active:text-primary-600 active:bg-primary-50 rounded-md"
//                         >
//                           • {item.name}
//                         </Link>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.nav>
//   );
// };

// export default Navbar;


import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { animationConfig } from '../../config/animation.config';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
    setMobileDropdown(null);
    document.body.style.overflow = 'unset';
  }, [location]);

  const toggleMenu = () => {
    const next = !isOpen;
    setIsOpen(next);
    document.body.style.overflow = next ? 'hidden' : 'unset';
  };

  const topLinks = [
    { name: 'Home', path: '/' },
    { name: 'Blogs', path: '/blog' },
    { name: 'About Us', path: '/aboutus' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const categoryLinks = [
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
  ];

  // Mobile hamburger menu - only non-category links
  const mobileOnlyLinks = [
    { name: 'Home', path: '/' },
    { name: 'Blogs', path: '/blog' },
    { name: 'About Us', path: '/aboutus' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'shadow-md' : ''
        }`}
        initial={animationConfig.navbarSlide?.initial || { opacity: 0, y: -20 }}
        animate={animationConfig.navbarSlide?.animate || { opacity: 1, y: 0 }}
        transition={animationConfig.navbarSlide?.transition || { duration: 0.4 }}
      >
        {/* ─── TOP BAR (white) ─── */}
        <div className="bg-white border-b border-neutral-100">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-14">

              {/* Logo */}
              <Link to="/" className="flex-shrink-0">
                <span
                  className="text-xl font-extrabold text-primary-600"
                  style={{ fontFamily: 'Lato, sans-serif' }}
                >
                  Unfiltered<span className="text-neutral-900">Money</span>
                </span>
              </Link>

              {/* Desktop: right-side top links */}
              <div className="hidden lg:flex items-center space-x-1">
                {topLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`px-4 py-1.5 text-sm font-semibold rounded-lg transition-colors whitespace-nowrap ${
                      location.pathname === link.path
                        ? 'text-primary-600 bg-primary-50'
                        : 'text-neutral-700 hover:text-primary-600 hover:bg-neutral-50'
                    }`}
                    style={{ fontFamily: 'Lato, sans-serif' }}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              {/* Mobile: hamburger only */}
              <button
                className="lg:hidden p-2 rounded-lg text-neutral-700 hover:bg-neutral-100 transition-colors"
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
        </div>

        {/* ─── BLUE PILL BAR — visible on ALL screen sizes always ─── */}
        <div className="bg-white border-b border-neutral-100 py-2">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-primary-600 rounded-full px-4 py-1.5 flex items-center w-full">
              {categoryLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={link.path}
                    className={`flex items-center gap-1.5 px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold rounded-full transition-colors whitespace-nowrap ${
                      location.pathname.startsWith(link.path)
                        ? 'bg-white/25 text-white'
                        : 'text-white hover:bg-white/20'
                    }`}
                    style={{ fontFamily: 'Lato, sans-serif' }}
                  >
                    {link.name}
                    <svg
                      className={`w-3 h-3 sm:w-3.5 sm:h-3.5 transition-transform duration-200 ${
                        activeDropdown === link.name ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>

                  {/* Dropdown — works on all screens on hover */}
                  <AnimatePresence>
                    {activeDropdown === link.name && (
                      <motion.div
                        className="absolute top-full left-0 mt-2 w-52 sm:w-56 bg-white rounded-xl shadow-xl border border-neutral-100 py-2 z-50"
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.15 }}
                      >
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.name}
                            to={item.path}
                            className="block px-4 py-2.5 text-sm text-neutral-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                            style={{ fontFamily: 'Lato, sans-serif' }}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ─── MOBILE HAMBURGER MENU — only non-category links ─── */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed left-0 right-0 bottom-0 bg-white z-40 overflow-y-auto lg:hidden"
              style={{ top: '112px' }} /* top-bar(56) + pill-bar(56) */
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <div className="px-4 py-3 pb-24 space-y-0.5">
                {mobileOnlyLinks.map((link) => (
                  <div key={link.name}>
                    <Link
                      to={link.path}
                      className={`block px-3 py-3.5 text-base font-semibold rounded-lg transition-colors ${
                        location.pathname === link.path
                          ? 'text-primary-600 bg-primary-50'
                          : 'text-neutral-800 hover:bg-neutral-50'
                      }`}
                      style={{ fontFamily: 'Lato, sans-serif' }}
                    >
                      {link.name}
                    </Link>
                    <div className="h-px bg-neutral-100 mx-2" />
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/*
        SPACER: pushes page content below fixed navbar
        top-bar(56px) + pill-bar(56px) = 112px on all screens
      */}
      <div className="h-[112px]" />
    </>
  );
};

export default Navbar;