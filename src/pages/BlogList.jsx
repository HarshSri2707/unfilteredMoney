// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import { animationConfig } from '../config/animation.config';
// import { seoConfig } from '../config/seo.config';
// import Seo from '../components/ui/Seo';
// import Card from '../components/ui/Card';
// import { blogsData } from '../data/blogs.data';

// const BlogList = () => {
//   const [selectedCategory, setSelectedCategory] = useState('all');

//   const allBlogs = [...blogsData.featured, ...blogsData.recent];

//   const filteredBlogs = selectedCategory === 'all'
//     ? allBlogs
//     : allBlogs.filter(blog => blog.category === selectedCategory);

//   const categoryColors = {
//     'credit-cards': 'bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100',
//     'insurance': 'bg-green-50 text-green-700 border-green-200 hover:bg-green-100',
//     'investments': 'bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100',
//     'personal-finance': 'bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100',
//   };

//   return (
//     <motion.div {...animationConfig.pageTransition}>
//       <Seo
//         title="Unfiltered Money Blog | Honest Personal Finance Advice India"
//         description="No sugar-coating. Real reviews, hidden fees exposed, fine print decoded — credit cards, insurance, investments & tax-saving strategies for Indians."
//         keywords="unfiltered finance, honest credit card reviews, term vs ULIP, best mutual funds 2026, old vs new tax regime, hidden fees credit cards"
//         url={`${seoConfig.siteUrl}/blog`}
//       />

//       {/* Hero Section - Stronger brand voice */}
//       <motion.section
//   className="
//     relative
//     pt-20 pb-16 md:pt-28 md:pb-20
//     overflow-hidden
//   "
//   {...animationConfig.sectionReveal}
// >
//   {/* Background Image */}
//   <div className="absolute inset-0 z-0">
//     <img
//       src="/images/blogBanner.webp"   // 👈 apni image ka path
//       alt="Financial background"
//       className="w-full h-full object-cover"
//       loading="lazy"
//     />

//     {/* soft overlay for readability */}
//     <div className="absolute inset-0 bg-white/70" />
//   </div>

//   {/* Content */}
//   <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//     <div className="text-center max-w-4xl mx-auto">
//       <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-5 md:mb-6 leading-tight">
//         The Financial Friend Who Tells You The Ugly Truth
//       </h1>

//       <p className="text-lg md:text-xl text-neutral-700 max-w-3xl mx-auto leading-relaxed">
//         No sponsored lists. No hidden agendas.
//         <br />
//         We read the fine print so you don't get fooled — again.
//       </p>

//       <div className="mt-8 flex flex-wrap justify-center gap-4">
//         <span className="inline-flex items-center px-4 py-2 bg-white rounded-full text-sm font-medium text-neutral-700 border border-neutral-200 shadow-sm">
//           100% Unbiased
//         </span>
//         <span className="inline-flex items-center px-4 py-2 bg-white rounded-full text-sm font-medium text-neutral-700 border border-neutral-200 shadow-sm">
//           Fine Print Decoded
//         </span>
//       </div>
//     </div>
//   </div>
// </motion.section>


//       {/* Category Filter - Cleaner, more premium */}
//       {/* Category Filter */}
// <motion.section
//   className="
//     bg-white
//     border-b border-neutral-100
//     sticky
//     top-16
//     z-30
//     backdrop-blur-md
//   "
//   initial={{ opacity: 0, y: -10 }}
//   animate={{ opacity: 1, y: 0 }}
//   transition={{ duration: 0.35 }}
// >
//   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//     {/* horizontal scroll ONLY here */}
//     <div className="overflow-x-auto">
//       <div className="flex flex-nowrap md:flex-wrap gap-3 justify-start py-4">
//         <button
//           onClick={() => setSelectedCategory('all')}
//           className={`px-6 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 border ${
//             selectedCategory === 'all'
//               ? 'bg-primary-600 text-white border-primary-600 shadow-md'
//               : 'bg-white text-neutral-700 border-neutral-200 hover:border-neutral-300 hover:shadow-sm'
//           }`}
//         >
//           All Articles
//         </button>

//         {blogsData.categories.map((category) => (
//           <button
//             key={category.slug}
//             onClick={() => setSelectedCategory(category.slug)}
//             className={`px-6 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 border ${
//               selectedCategory === category.slug
//                 ? 'bg-primary-600 text-white border-primary-600 shadow-md'
//                 : `${categoryColors[category.slug]} border-transparent`
//             }`}
//           >
//             {category.name}{' '}
//             <span className="opacity-70">({category.count})</span>
//           </button>
//         ))}
//       </div>
//     </div>
//   </div>
// </motion.section>


//       {/* Blog Grid */}
//       <motion.section
//         className="py-12 md:py-16 bg-neutral-50/50"
//         {...animationConfig.sectionReveal}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           {filteredBlogs.length > 0 ? (
//             <motion.div
//               className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
//               variants={animationConfig.staggerContainer}
//               initial="initial"
//               animate="animate"
//             >
//               {filteredBlogs.map((blog) => (
//                 <motion.div
//                   key={blog.id}
//                   variants={animationConfig.staggerItem}
//                 >
//                   <Link to={`/blog/${blog.slug}`}>
//                     <Card hover className="h-full flex flex-col">
//                       <div className="relative h-48 md:h-56 overflow-hidden rounded-t-xl">
//                         <img
//                           src={blog.image}
//                           alt={blog.title}
//                           className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.08]"
//                           loading="lazy"
//                           onError={(e) => {
//                             e.target.src = '/images/fallback-blog.jpg'; // better to have real fallback
//                             e.target.style.objectFit = 'contain';
//                           }}
//                         />
//                         <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
//                       </div>

//                       <div className="p-6 flex flex-col flex-grow">
//                         <div className="flex items-center justify-between mb-4">
//                           <span
//                             className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[blog.category]} border`}
//                           >
//                             {blog.category.replace('-', ' ').toUpperCase()}
//                           </span>
//                           <span className="text-xs text-neutral-500 font-medium">
//                             {blog.readTime}
//                           </span>
//                         </div>

//                         <h3 className="text-xl font-bold text-neutral-900 mb-3 line-clamp-2">
//                           {blog.title}
//                         </h3>

//                         <p className="text-sm text-neutral-600 mb-6 line-clamp-3 flex-grow text-justify">
//                           {blog.excerpt}
//                         </p>

//                         <div className="flex items-center justify-between mt-auto pt-4 border-t border-neutral-100">
//                           <div className="flex items-center space-x-3">
//                             <div className="w-9 h-9 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-semibold text-sm">
//                               {blog.author.name.charAt(0)}
//                             </div>
//                             <div>
//                               <p className="text-sm font-medium text-neutral-800">
//                                 {blog.author.name}
//                               </p>
//                               <p className="text-xs text-neutral-500">
//                                 {new Date(blog.publishedDate).toLocaleDateString('en-IN', {
//                                   day: 'numeric',
//                                   month: 'short',
//                                   year: 'numeric',
//                                 })}
//                               </p>
//                             </div>
//                           </div>

//                           <span className="text-primary-600 font-semibold text-sm group-hover:text-primary-700 transition-colors">
//                             Read Article →
//                           </span>
//                         </div>
//                       </div>
//                     </Card>
//                   </Link>
//                 </motion.div>
//               ))}
//             </motion.div>
//           ) : (
//             <motion.div
//               className="text-center py-20"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//             >
//               <h3 className="text-2xl font-semibold text-neutral-700 mb-3">
//                 No articles found
//               </h3>
//               <p className="text-neutral-600">
//                 Try switching to another category or check back soon!
//               </p>
//             </motion.div>
//           )}
//         </div>
//       </motion.section>

//       {/* Categories Overview - Trust building */}
//       <motion.section
//         className="py-16 md:py-20 bg-white"
//         {...animationConfig.sectionReveal}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-10 md:mb-12 text-center">
//             Choose Your Topic
//           </h2>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
//             {blogsData.categories.map((category) => (
//               <motion.div
//                 key={category.slug}
//                 variants={animationConfig.staggerItem}
//                 whileHover={{ y: -6 }}
//               >
//                 <button
//                   onClick={() => setSelectedCategory(category.slug)}
//                   className="w-full h-full text-left"
//                 >
//                   <Card hover className="h-full border border-neutral-100 hover:border-primary-200 transition-colors">
//                     <div className="p-7">
//                       <h3 className="text-xl font-bold text-neutral-900 mb-3">
//                         {category.name}
//                       </h3>
//                       <p className="text-neutral-600 mb-4 text-sm leading-relaxed text-justify">
//                         {category.description}
//                       </p>
//                       <p className="text-sm font-semibold text-primary-600">
//                         {category.count} real articles →
//                       </p>
//                     </div>
//                   </Card>
//                 </button>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </motion.section>
//     </motion.div>
//   );
// };

// export default BlogList;


// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import { animationConfig } from '../config/animation.config';
// import { seoConfig } from '../config/seo.config';
// import Seo from '../components/ui/Seo';
// import { blogsData } from '../data/blogs.data';

// const BlogList = () => {
//   const [selectedCategory, setSelectedCategory] = useState('all');
//   const [searchQuery, setSearchQuery] = useState('');
//   const [isCategoryOpen, setIsCategoryOpen] = useState(false);

//   const allBlogs = [...blogsData.featured, ...blogsData.recent];

//   const filteredBlogs = allBlogs.filter(blog => {
//     const matchesCategory = selectedCategory === 'all' || blog.category === selectedCategory;
//     const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//                          blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
//     return matchesCategory && matchesSearch;
//   });

//   const categoryStyles = {
//     'credit-cards': 'bg-blue-100 text-blue-700',
//     'insurance': 'bg-green-100 text-green-700',
//     'investments': 'bg-purple-100 text-purple-700',
//     'personal-finance': 'bg-orange-100 text-orange-700',
//   };

//   return (
//     <motion.div {...animationConfig.pageTransition}>
//       <Seo
//         title="Blog - UnfilteredMoney"
//         description="Expert insights on credit cards, insurance, and investments"
//         url={`${seoConfig.siteUrl}/blog`}
//       />

//       {/* Hero Section */}
//       <section className="bg-white border-b border-neutral-200">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
//           <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8">
//             {/* Left - Title */}
//             <div>
//               <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-3" style={{ fontFamily: 'Lato, sans-serif', fontWeight: 900 }}>
//                 All Articles
//               </h1>
//               <p className="text-lg text-neutral-600" style={{ fontFamily: 'Lato, sans-serif' }}>
//                 Honest, unbiased reviews and guides on financial products
//               </p>
//             </div>

//             {/* Right - Search + Category Dropdown */}
//             <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
//               {/* Search Bar - Compact */}
//               <div className="relative w-full sm:w-80">
//                 <input
//                   type="text"
//                   placeholder="Search articles..."
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   className="w-full pl-4 pr-12 py-3 border-2 border-neutral-300 rounded-lg focus:outline-none focus:border-primary-500 transition-colors"
//                   style={{ fontFamily: 'Lato, sans-serif' }}
//                 />
//                 <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-neutral-600 hover:text-primary-600 transition-colors">
//                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//                   </svg>
//                 </button>
//               </div>

//               {/* Browse by Category Dropdown */}
//               <div 
//                 className="relative"
//                 onMouseEnter={() => setIsCategoryOpen(true)}
//                 onMouseLeave={() => setIsCategoryOpen(false)}
//               >
//                 <button
//                   className="px-5 py-3 bg-neutral-100 text-neutral-900 rounded-lg font-medium hover:bg-neutral-200 transition-colors flex items-center gap-2 whitespace-nowrap"
//                 >
//                   Browse by Category
//                   <svg className={`w-4 h-4 transition-transform ${isCategoryOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                   </svg>
//                 </button>

//                 {/* Dropdown Menu */}
//                 <div 
//                   className={`absolute right-0 mt-2 w-64 bg-white rounded-xl border border-neutral-200 shadow-xl py-2 z-50 transition-all duration-200 origin-top-right ${
//                     isCategoryOpen 
//                       ? 'opacity-100 scale-100 visible' 
//                       : 'opacity-0 scale-95 invisible pointer-events-none'
//                   }`}
//                 >
//                   <div className="py-1">
//                     <button
//                       onClick={() => {
//                         setSelectedCategory('all');
//                         setIsCategoryOpen(false);
//                       }}
//                       className={`w-full text-left px-4 py-2.5 text-sm font-medium transition-colors ${
//                         selectedCategory === 'all'
//                           ? 'bg-primary-50 text-primary-700'
//                           : 'text-neutral-700 hover:bg-neutral-50'
//                       }`}
//                     >
//                       All Articles
//                     </button>
//                   </div>

//                   <div className="border-t border-neutral-100 my-1" />

//                   {blogsData.categories.map((cat) => (
//                     <button
//                       key={cat.slug}
//                       onClick={() => {
//                         setSelectedCategory(cat.slug);
//                         setIsCategoryOpen(false);
//                       }}
//                       className={`w-full text-left px-4 py-2.5 text-sm font-medium transition-colors ${
//                         selectedCategory === cat.slug
//                           ? 'bg-neutral-100 text-neutral-900'
//                           : 'text-neutral-700 hover:bg-neutral-50'
//                       }`}
//                     >
//                       {cat.name}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Blog Grid */}
//       <section className="py-12 bg-neutral-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           {filteredBlogs.length > 0 ? (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {filteredBlogs.map((blog) => (
//                 <motion.div
//                   key={blog.id}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <Link to={`/blog/${blog.slug}`}>
//                     <div className="bg-white rounded-xl overflow-hidden border border-neutral-200 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
//                       <div className="relative">
//                         <img
//                           src={blog.image}
//                           alt={blog.title}
//                           className="w-full h-48 object-cover"
//                           loading="lazy"
//                         />
//                         {blog.featured && (
//                           <div className="absolute top-3 left-3 bg-yellow-400 text-neutral-900 px-3 py-1 rounded-md text-xs font-bold">
//                             Top Pick
//                           </div>
//                         )}
//                       </div>

//                       <div className="p-5 flex flex-col flex-1">
//                         <div className="flex items-center justify-between mb-3">
//                           <span className={`px-3 py-1 rounded-md text-xs font-semibold uppercase ${categoryStyles[blog.category]}`}>
//                             {blog.category.replace('-', ' ')}
//                           </span>
//                           <span className="text-xs text-neutral-500">{blog.readTime}</span>
//                         </div>

//                         <h3 className="text-lg font-bold text-neutral-900 mb-3 line-clamp-2 hover:text-primary-600 transition-colors" style={{ fontFamily: 'Lato, sans-serif' }}>
//                           {blog.title}
//                         </h3>

//                         <p className="text-sm text-neutral-600 mb-4 line-clamp-3 flex-1" style={{ fontFamily: 'Lato, sans-serif' }}>
//                           {blog.excerpt}
//                         </p>

//                         <div className="flex items-center justify-between pt-4 border-t border-neutral-200 mt-auto">
//                           <div className="flex items-center gap-2">
//                             <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center">
//                               <span className="text-primary-600 text-xs font-bold">
//                                 {blog.author.name.charAt(0)}
//                               </span>
//                             </div>
//                             <div>
//                               <p className="text-xs font-semibold text-neutral-900">{blog.author.name}</p>
//                               <p className="text-xs text-neutral-500">
//                                 {new Date(blog.publishedDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
//                               </p>
//                             </div>
//                           </div>

//                           <span className="text-primary-600 font-semibold text-sm">
//                             Read →
//                           </span>
//                         </div>
//                       </div>
//                     </div>
//                   </Link>
//                 </motion.div>
//               ))}
//             </div>
//           ) : (
//             <div className="text-center py-20">
//               <p className="text-neutral-600 text-lg">No articles found matching your criteria</p>
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Choose Your Topic */}
//       <section className="py-16 bg-white border-t border-neutral-200">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-bold text-neutral-900 mb-10 text-center" style={{ fontFamily: 'Lato, sans-serif', fontWeight: 900 }}>
//             Choose Your Topic
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {blogsData.categories.map((category) => (
//               <div key={category.slug} className="bg-white border border-neutral-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
//                 <h3 className="text-xl font-bold text-neutral-900 mb-3" style={{ fontFamily: 'Lato, sans-serif' }}>
//                   {category.name}
//                 </h3>
//                 <p className="text-sm text-neutral-600 mb-4 leading-relaxed" style={{ fontFamily: 'Lato, sans-serif' }}>
//                   {category.description}
//                 </p>
//                 <button
//                   onClick={() => setSelectedCategory(category.slug)}
//                   className="text-sm font-semibold text-primary-600 hover:text-primary-700"
//                 >
//                   See all articles →
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </motion.div>
//   );
// };

// export default BlogList;


import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { animationConfig } from '../config/animation.config';
import { seoConfig } from '../config/seo.config';
import Seo from '../components/ui/Seo';
import { blogsData } from '../data/blogs.data';

const BlogList = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  // Sort featured blogs by date (most recent first)
  const sortedFeatured = [...blogsData.featured].sort(
    (a, b) => new Date(b.publishedDate) - new Date(a.publishedDate)
  );

  const filteredBlogs = sortedFeatured.filter(blog => {
    const matchesCategory = selectedCategory === 'all' || blog.category === selectedCategory;
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categoryStyles = {
    'credit-cards': 'bg-blue-100 text-blue-700',
    'insurance': 'bg-green-100 text-green-700',
    'investments': 'bg-purple-100 text-purple-700',
    'personal-finance': 'bg-orange-100 text-orange-700',
  };

  // Handle dropdown with delay
  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsCategoryOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsCategoryOpen(false);
    }, 200);
  };

  const handleCategorySelect = (slug) => {
    setSelectedCategory(slug);
    setIsCategoryOpen(false);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <motion.div {...animationConfig.pageTransition}>
      <Seo
        title="Blog - UnfilteredMoney"
        description="Expert insights on credit cards, insurance, and investments"
        url={`${seoConfig.siteUrl}/blog`}
      />

      {/* Hero Section */}
    

      {/* Top Picks Section */}
      <section className="py-12 pt-24 bg-gradient-to-b from-neutral-50 to-white border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-2" style={{ fontFamily: 'Lato, sans-serif', fontWeight: 900 }}>
                Top Picks
              </h2>
              <p className="text-neutral-600" style={{ fontFamily: 'Lato, sans-serif' }}>
                Editor's choice articles you shouldn't miss
              </p>
            </div>
           <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                {/* Search Bar */}
                <div className="relative w-full sm:w-80">
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-4 pr-12 py-3 border-2 border-neutral-300 rounded-lg focus:outline-none focus:border-primary-500 transition-colors"
                    style={{ fontFamily: 'Lato, sans-serif' }}
                  />
                  <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-neutral-600 hover:text-primary-600 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </div>

                {/* Browse by Category Dropdown */}
                <div 
                  ref={dropdownRef}
                  className="relative"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className="w-full sm:w-auto px-5 py-3 bg-neutral-100 text-neutral-900 rounded-lg font-medium hover:bg-neutral-200 transition-colors flex items-center justify-between sm:justify-center gap-2 whitespace-nowrap"
                    onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                  >
                    <span>Browse by Category</span>
                    <svg className={`w-4 h-4 transition-transform duration-200 ${isCategoryOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Dropdown Menu */}
                  <div 
                    className={`absolute right-0 mt-2 w-64 bg-white rounded-xl border border-neutral-200 shadow-xl py-2 z-50 transition-all duration-200 origin-top-right ${
                      isCategoryOpen 
                        ? 'opacity-100 scale-100 visible' 
                        : 'opacity-0 scale-95 invisible pointer-events-none'
                    }`}
                  >
                    <div className="py-1">
                      <button
                        onClick={() => handleCategorySelect('all')}
                        className={`w-full text-left px-4 py-2.5 text-sm font-medium transition-colors ${
                          selectedCategory === 'all'
                            ? 'bg-primary-50 text-primary-700'
                            : 'text-neutral-700 hover:bg-neutral-50'
                        }`}
                      >
                        All Articles
                      </button>
                    </div>

                    <div className="border-t border-neutral-100 my-1" />

                    {blogsData.categories.map((cat) => (
                      <button
                        key={cat.slug}
                        onClick={() => handleCategorySelect(cat.slug)}
                        className={`w-full text-left px-4 py-2.5 text-sm font-medium transition-colors ${
                          selectedCategory === cat.slug
                            ? 'bg-neutral-100 text-neutral-900'
                            : 'text-neutral-700 hover:bg-neutral-50'
                        }`}
                      >
                        {cat.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogsData.topPicks.map((blog, index) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link to={`/blog/${blog.slug}`}>
                  <div className="bg-white rounded-xl overflow-hidden  hover:shadow-2xl transition-all duration-300 h-full flex flex-col relative">
                    {/* Top Pick Badge */}
                    <div className="absolute top-3 left-3 bg-yellow-400 text-neutral-900 px-3 py-1 rounded-md text-xs font-bold z-10 shadow-md">
                      ⭐ Top Pick
                    </div>

                    <div className="relative aspect-video w-full overflow-hidden bg-neutral-100">
                      {blog.image ? (
                        <img
                          src={blog.image}
                          alt={blog.title}
                          className="w-full h-full object-contain-cover transition-transform duration-500 hover:scale-105"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-neutral-100 to-neutral-200">
                          <span className="text-6xl opacity-30">
                            {blog.category === 'credit-cards' ? '💳' :
                             blog.category === 'insurance' ? '🛡️' :
                             blog.category === 'investments' ? '📈' : '💰'}
                          </span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                    </div>

                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <span className={`px-3 py-1 rounded-md text-xs font-semibold uppercase ${categoryStyles[blog.category]}`}>
                          {blog.category.replace('-', ' ')}
                        </span>
                        <span className="text-xs text-neutral-500">{blog.readTime}</span>
                      </div>

                      <h3 className="text-xl font-bold text-neutral-900 mb-3 line-clamp-2 hover:text-primary-600 transition-colors" style={{ fontFamily: 'Lato, sans-serif' }}>
                        {blog.title}
                      </h3>

                      <p className="text-sm text-neutral-600 mb-4 line-clamp-3 flex-1" style={{ fontFamily: 'Lato, sans-serif' }}>
                        {blog.excerpt}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-neutral-200 mt-auto">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center">
                            <span className="text-primary-600 text-xs font-bold">
                              {blog.author.name.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <p className="text-xs font-semibold text-neutral-900">{blog.author.name}</p>
                            <p className="text-xs text-neutral-500">
                              {new Date(blog.publishedDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                            </p>
                          </div>
                        </div>

                        <span className="text-primary-600 font-semibold text-sm">
                          Read →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles Section with Filter */}
      <section className="py-12 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header with Search and Filter */}
          <div className="mb-8">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-6">
              <div>
                <h2 className="text-3xl font-bold text-neutral-900 mb-2" style={{ fontFamily: 'Lato, sans-serif', fontWeight: 900 }}>
                  All Articles
                </h2>
                <p className="text-neutral-600" style={{ fontFamily: 'Lato, sans-serif' }}>
                  {selectedCategory === 'all' 
                    ? 'Browse all our financial guides and reviews' 
                    : `${blogsData.categories.find(c => c.slug === selectedCategory)?.name} articles`
                  }
                </p>
              </div>

              {/* Search + Category Filter */}
             
            </div>
          </div>

          {/* Articles Grid */}
          {filteredBlogs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredBlogs.map((blog) => (
                <motion.div
                  key={blog.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link to={`/blog/${blog.slug}`}>
                    <div className="bg-white rounded-xl overflow-hidden border border-neutral-200 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                      <div className="relative aspect-video w-full overflow-hidden bg-neutral-100">
                        {blog.image ? (
                          <img
                            src={blog.image}
                            alt={blog.title}
                            className="w-full h-full object-contain-cover transition-transform duration-500 hover:scale-105"
                            loading="lazy"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-neutral-100 to-neutral-200">
                            <span className="text-6xl opacity-30">
                              {blog.category === 'credit-cards' ? '💳' :
                               blog.category === 'insurance' ? '🛡️' :
                               blog.category === 'investments' ? '📈' : '💰'}
                            </span>
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                      </div>

                      <div className="p-5 flex flex-col flex-1">
                        {blog.featured && (
                          <div className="mb-3">
                           
                          </div>
                        )}
                        <div className="flex items-center justify-between mb-3">
                          <span className={`px-3 py-1 rounded-md text-xs font-semibold uppercase ${categoryStyles[blog.category]}`}>
                            {blog.category.replace('-', ' ')}
                          </span>
                          <span className="text-xs text-neutral-500">{blog.readTime}</span>
                        </div>

                        <h3 className="text-lg font-bold text-neutral-900 mb-3 line-clamp-2 hover:text-primary-600 transition-colors" style={{ fontFamily: 'Lato, sans-serif' }}>
                          {blog.title}
                        </h3>

                        <p className="text-sm text-neutral-600 mb-4 line-clamp-3 flex-1 text-justify" style={{ fontFamily: 'Lato, sans-serif' }}>
                          {blog.excerpt}
                        </p>

                        <div className="flex items-center justify-between pt-4 border-t border-neutral-200 mt-auto">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center">
                              <span className="text-primary-600 text-xs font-bold">
                                {blog.author.name.charAt(0)}
                              </span>
                            </div>
                            <div>
                              <p className="text-xs font-semibold text-neutral-900">{blog.author.name}</p>
                              <p className="text-xs text-neutral-500">
                                {new Date(blog.publishedDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                              </p>
                            </div>
                          </div>

                          <span className="text-primary-600 font-semibold text-sm">
                            Read →
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-neutral-600 text-lg">No articles found matching your criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Choose Your Topic */}
      <section className="py-16 bg-white border-t border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-neutral-900 mb-10 text-center" style={{ fontFamily: 'Lato, sans-serif', fontWeight: 900 }}>
            Choose Your Topic
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {blogsData.categories.map((category) => (
              <div key={category.slug} className="bg-white border border-neutral-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-neutral-900 mb-3" style={{ fontFamily: 'Lato, sans-serif' }}>
                  {category.name}
                </h3>
                <p className="text-sm text-neutral-600 mb-4 leading-relaxed" style={{ fontFamily: 'Lato, sans-serif' }}>
                  {category.description}
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory(category.slug);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-sm font-semibold text-primary-600 hover:text-primary-700"
                >
                  See all articles →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default BlogList;