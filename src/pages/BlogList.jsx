import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { animationConfig } from '../config/animation.config';
import Seo from '../components/ui/Seo';
import { blogsData } from '../data/blogs.data';

const categoryStyles = {
  'credit-cards':     'bg-blue-100 text-blue-700',
  'insurance':        'bg-emerald-100 text-emerald-700',
  'investments':      'bg-violet-100 text-violet-700',
  'personal-finance': 'bg-orange-100 text-orange-700',
};
const categoryLabel = {
  'credit-cards':     'Credit Card',
  'insurance':        'Insurance',
  'investments':      'Finance',
  'personal-finance': 'Personal',
};

const sortedBlogs = [...(blogsData.featured || [])].sort(
  (a, b) => new Date(b.publishedDate) - new Date(a.publishedDate)
);

const PILL_CATS = [
  { slug: 'all',              name: 'All Posts' },
  { slug: 'credit-cards',     name: 'Credit Card' },
  { slug: 'insurance',        name: 'Insurance' },
  { slug: 'investments',      name: 'Finance' },
  { slug: 'personal-finance', name: 'Personal' },
];

const BlogList = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery]           = useState('');
  const [debouncedSearch, setDebouncedSearch]   = useState('');
  const [showAll, setShowAll]                   = useState(false);
  const [navbarHeight, setNavbarHeight]         = useState(0);

  const filterBarRef = useRef(null);
  const gridRef      = useRef(null);
  const isInitial    = useRef(true);

  const measureNavbar = useCallback(() => {
    const navbar =
      document.querySelector('[data-navbar]') ||
      document.querySelector('nav')           ||
      document.querySelector('header');
    if (navbar) {
      setNavbarHeight(navbar.getBoundingClientRect().height);
    }
  }, []);

  useEffect(() => {
    measureNavbar();
    window.addEventListener('resize', measureNavbar);
    return () => window.removeEventListener('resize', measureNavbar);
  }, [measureNavbar]);

  useEffect(() => {
    const t = setTimeout(() => setDebouncedSearch(searchQuery), 350);
    return () => clearTimeout(t);
  }, [searchQuery]);

  useEffect(() => {
    if (isInitial.current) { isInitial.current = false; return; }
    if (!gridRef.current) return;
    const filterH = filterBarRef.current?.getBoundingClientRect().height || 72;
    const top = gridRef.current.getBoundingClientRect().top + window.scrollY - navbarHeight - filterH - 8;
    window.scrollTo({ top, behavior: 'smooth' });
  }, [debouncedSearch, selectedCategory, navbarHeight]);

  const isFiltered = debouncedSearch !== '' || selectedCategory !== 'all';

  const filtered = sortedBlogs.filter((b) => {
    const matchCat    = selectedCategory === 'all' || b.category === selectedCategory;
    const matchSearch =
      b.title.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
      b.excerpt.toLowerCase().includes(debouncedSearch.toLowerCase());
    return matchCat && matchSearch;
  });

  const featuredBlog = !isFiltered && filtered.length > 0 ? filtered[0] : null;
  const gridBlogs    = !isFiltered ? filtered.slice(1) : filtered;
  const visibleGrid  = showAll ? gridBlogs : gridBlogs.slice(0, 6);

  const formatDate = (d) =>
    new Date(d).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });

  return (
    <motion.div {...animationConfig.pageTransition} className="min-h-screen bg-neutral-50">
      <Seo title="Blog – UnfilteredMoney" description="Expert financial insights" />

      {/* ══════ HERO ══════ */}
      <section className="bg-white pt-8 pb-6 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h1
            className="text-3xl sm:text-4xl font-extrabold text-neutral-900 mb-1.5"
            style={{ fontFamily: 'Lato, sans-serif' }}
          >
            Blogs
          </h1>
          <p className="text-neutral-500 text-sm sm:text-base" style={{ fontFamily: 'Lato, sans-serif' }}>
            Stay ahead with expert tips, strategies, and trends in marketing
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════
          STICKY FILTER BAR
          Desktop (lg+): pills left + search right (single row)
          Mobile/Tablet: pills row 1 + search row 2
      ════════════════════════════════════════ */}
      <div
        ref={filterBarRef}
        className="sticky z-30 bg-white border-b border-neutral-100 shadow-sm"
        style={{ top: navbarHeight > 0 ? `${navbarHeight}px` : '0px' }}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

          {/* ── DESKTOP (lg+): single row — pills left, search right ── */}
          <div className="hidden lg:flex items-center gap-3 py-2.5">
            {/* Pills */}
            <div
              className="flex items-center gap-2 overflow-x-auto min-w-0 flex-1"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', maxWidth: 'calc(100% - 420px)' }}
            >
              {PILL_CATS.map((cat) => {
                const active = selectedCategory === cat.slug;
                return (
                  <button
                    key={cat.slug}
                    onClick={() => { setSelectedCategory(cat.slug); setShowAll(false); }}
                    className={`flex-shrink-0 px-4 py-2.5 rounded-full text-sm font-semibold border transition-all duration-150 ${
                      active
                        ? 'bg-primary-600 text-white border-primary-600 shadow-sm'
                        : 'bg-white text-neutral-600 border-neutral-200 hover:bg-primary-600 hover:text-white hover:border-primary-600'
                    }`}
                    style={{ fontFamily: 'Lato, sans-serif' }}
                  >
                    {cat.name}
                  </button>
                );
              })}
            </div>
            {/* Search bar — fixed right, wider */}
            <div className="relative flex-shrink-0 w-96">
              {/* Search icon left */}
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg className="w-4 h-4" fill="none" stroke="#525252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <circle cx="11" cy="11" r="7" />
                  <line x1="16.5" y1="16.5" x2="22" y2="22" />
                </svg>
              </span>
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => { setSearchQuery(e.target.value); setShowAll(false); }}
                className="w-full pl-10 pr-9 py-2.5 rounded-full border border-neutral-200 bg-white text-sm text-neutral-700 placeholder:text-neutral-400 focus:outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-100 transition-all"
                style={{ fontFamily: 'Lato, sans-serif' }}
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </div>

          {/* ── MOBILE / TABLET (<lg): 2 rows ── */}
          <div className="lg:hidden py-2.5 flex flex-col gap-2">
            {/* Row 1: Pills */}
            <div
              className="flex items-center gap-2 overflow-x-auto min-w-0"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {PILL_CATS.map((cat) => {
                const active = selectedCategory === cat.slug;
                return (
                  <button
                    key={cat.slug}
                    onClick={() => { setSelectedCategory(cat.slug); setShowAll(false); }}
                    className={`flex-shrink-0 px-3 py-2 rounded-full text-xs font-semibold border transition-all duration-150 ${
                      active
                        ? 'bg-primary-600 text-white border-primary-600 shadow-sm'
                        : 'bg-white text-neutral-600 border-neutral-200 hover:bg-primary-600 hover:text-white hover:border-primary-600'
                    }`}
                    style={{ fontFamily: 'Lato, sans-serif' }}
                  >
                    {cat.name}
                  </button>
                );
              })}
            </div>
            {/* Row 2: Search full width */}
            <div className="relative w-full">
              {/* Search icon left */}
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg className="w-4 h-4" fill="none" stroke="#525252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <circle cx="11" cy="11" r="7" />
                  <line x1="16.5" y1="16.5" x2="22" y2="22" />
                </svg>
              </span>
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => { setSearchQuery(e.target.value); setShowAll(false); }}
                className="w-full pl-10 pr-9 py-2 rounded-full border border-neutral-200 bg-white text-sm text-neutral-700 placeholder:text-neutral-400 focus:outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-100 transition-all"
                style={{ fontFamily: 'Lato, sans-serif' }}
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </div>

        </div>
      </div>

      {/* ══════ BODY ══════ */}
      <div className="max-w-[1200px] mx-auto px-4 pb-8">

        {/* Section label */}
        <div className="flex items-center gap-3 pt-6 pb-5" ref={gridRef}>
          <h2
            className="text-base font-extrabold text-neutral-900 whitespace-nowrap"
            style={{ fontFamily: 'Lato, sans-serif' }}
          >
            {isFiltered
              ? `Results${filtered.length ? ` (${filtered.length})` : ''}`
              : 'Latest Articles'}
          </h2>
          <div className="h-px flex-1 bg-neutral-200" />
          {isFiltered && (
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('all'); setShowAll(false); }}
              className="text-xs text-primary-600 font-semibold hover:underline flex-shrink-0"
              style={{ fontFamily: 'Lato, sans-serif' }}
            >
              Clear
            </button>
          )}
        </div>

        <AnimatePresence mode="wait">
          {filtered.length > 0 ? (
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >

              {/* ── FEATURED HERO CARD ── */}
              {featuredBlog && (
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="mb-8"
                >
                  <Link to={`/blog/${featuredBlog.slug}`} className="group block">
                    <div className="relative rounded-[24px] overflow-hidden bg-[#333333] flex flex-col md:flex-row min-h-[220px] md:min-h-[260px]">

                      <div className="w-full md:w-[55%] p-5 sm:p-6 md:p-8 flex flex-col justify-center order-1">
                        <span className="inline-block w-fit bg-white/10 backdrop-blur-sm border border-white/20 text-white text-[8px] font-bold px-2.5 py-0.5 rounded-full mb-3 uppercase tracking-[0.15em]">
                          Featured
                        </span>
                        <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-extrabold leading-tight mb-2 group-hover:text-primary-200 transition-colors" style={{ fontFamily: 'Lato, sans-serif' }}>
                          {featuredBlog.title}
                        </h2>
                        <p className="text-white/70 text-xs md:text-sm leading-relaxed line-clamp-2 mb-4" style={{ fontFamily: 'Lato, sans-serif' }}>
                          {featuredBlog.excerpt}
                        </p>
                        <div className="flex items-center gap-3 mb-4 text-white/50 text-[10px] md:text-xs">
                          <span className="flex items-center gap-1">📅 {formatDate(featuredBlog.publishedDate)}</span>
                          <span className="text-white/20">•</span>
                          <span className="flex items-center gap-1">⏱ {featuredBlog.readTime}</span>
                        </div>
                        <div className="flex items-center justify-between mt-auto gap-3">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary-400 overflow-hidden flex-shrink-0 border border-white/10">
                              {featuredBlog.author?.image ? (
                                <img src={featuredBlog.author.image} alt="" className="w-full h-full object-cover" />
                              ) : (
                                <div className="w-full h-full flex items-center justify-center text-[10px] font-bold text-white bg-neutral-700">
                                  {featuredBlog.author?.name?.[0]}
                                </div>
                              )}
                            </div>
                            <div>
                              <p className="text-white/40 text-[9px] uppercase tracking-wider leading-none">Written by</p>
                              <p className="text-white font-bold text-xs md:text-sm">{featuredBlog.author?.name}</p>
                            </div>
                          </div>
                          <span className="bg-white text-neutral-900 text-[10px] md:text-xs font-bold px-4 md:px-6 py-2 rounded-full transition-all group-hover:bg-primary-600 group-hover:text-white shadow-md">
                            Read Article
                          </span>
                        </div>
                      </div>

                      <div className="w-full md:w-[45%] h-48 sm:h-56 md:h-auto order-2 overflow-hidden">
                        <img
                          src={featuredBlog.image}
                          alt={featuredBlog.title}
                          className="w-full h-full object-contain-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                        />
                      </div>

                    </div>
                  </Link>
                </motion.div>
              )}

              {/* ── ARTICLES GRID ── */}
              {visibleGrid.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {visibleGrid.map((blog, idx) => (
                    <motion.div
                      key={blog.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25, delay: Math.min(idx * 0.06, 0.3) }}
                    >
                      <Link
                        to={`/blog/${blog.slug}`}
                        className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-neutral-100 hover:border-primary-200 hover:shadow-md transition-all duration-300"
                      >
                        <div className="relative aspect-video overflow-hidden bg-neutral-100">
                          <img
                            src={blog.image}
                            alt={blog.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />
                          <span className={`absolute top-2.5 left-2.5 text-[9px] font-bold px-2 py-0.5 rounded-full shadow-sm ${categoryStyles[blog.category] || 'bg-neutral-100 text-neutral-600'}`}>
                            {categoryLabel[blog.category] || blog.category?.replace(/-/g, ' ')}
                          </span>
                        </div>
                        <div className="p-4 flex flex-col flex-1">
                          <div className="flex items-center gap-1.5 mb-2">
                            <span className="text-[10px] text-neutral-400" style={{ fontFamily: 'Lato, sans-serif' }}>
                              {formatDate(blog.publishedDate)}
                            </span>
                            <span className="text-neutral-200 text-[10px]">•</span>
                            <span className="text-[10px] text-neutral-400" style={{ fontFamily: 'Lato, sans-serif' }}>
                              ⏱ {blog.readTime}
                            </span>
                          </div>
                          <h3
                            className="text-[15px] font-bold text-neutral-900 mb-1.5 leading-snug line-clamp-2 group-hover:text-primary-600 transition-colors"
                            style={{ fontFamily: 'Lato, sans-serif' }}
                          >
                            {blog.title}
                          </h3>
                          <p
                            className="text-neutral-500 text-[14px] leading-relaxed line-clamp-2 mb-3 flex-1"
                            style={{ fontFamily: 'Lato, sans-serif' }}
                          >
                            {blog.excerpt}
                          </p>
                          <div className="pt-3 border-t border-neutral-50 flex items-center justify-between">
                            <div className="flex items-center gap-1.5">
                              <div className="w-5 h-5 rounded-full bg-neutral-100 overflow-hidden flex-shrink-0">
                                {blog.author?.image ? (
                                  <img src={blog.author.image} alt="" className="w-full h-full object-cover"
                                    onError={(e) => { e.target.style.display = 'none'; }} />
                                ) : (
                                  <div className="w-full h-full flex items-center justify-center text-[9px] font-bold text-neutral-500">
                                    {blog.author?.name?.[0] || 'A'}
                                  </div>
                                )}
                              </div>
                              <span className="text-[10px] text-neutral-500 truncate max-w-[90px]" style={{ fontFamily: 'Lato, sans-serif' }}>
                                {blog.author?.name}
                              </span>
                            </div>
                            <span className="text-primary-600 text-xs font-bold group-hover:translate-x-0.5 transition-transform" style={{ fontFamily: 'Lato, sans-serif' }}>
                              Read More →
                            </span>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              )}

              {/* Load More */}
              {!showAll && gridBlogs.length > 6 && (
                <div className="mt-10 flex justify-center">
                  <button
                    onClick={() => setShowAll(true)}
                    className="px-8 py-2.5 rounded-full border border-neutral-300 text-sm font-semibold text-neutral-600 hover:border-primary-400 hover:text-primary-600 transition-all"
                    style={{ fontFamily: 'Lato, sans-serif' }}
                  >
                    Load More Articles
                  </button>
                </div>
              )}

            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 bg-white rounded-2xl border border-dashed border-neutral-200"
            >
              <p className="text-3xl mb-3">🔍</p>
              <p className="text-neutral-400 text-sm font-medium" style={{ fontFamily: 'Lato, sans-serif' }}>
                No articles found
              </p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
                className="mt-3 text-primary-600 font-semibold text-sm hover:underline"
                style={{ fontFamily: 'Lato, sans-serif' }}
              >
                Clear filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ══════ CTA ══════ */}
      <section className="py-12 bg-blue-50">
        <div className="max-w-xl mx-auto px-4 text-center">
          <h2
            className="text-xl sm:text-2xl font-extrabold text-neutral-900 mb-5"
            style={{ fontFamily: 'Lato, sans-serif' }}
          >
            Still Confused?{' '}
            <span className="font-normal">Connect with us</span>
          </h2>
          <Link
            to="/contact"
            className="inline-block bg-primary-600 text-white px-10 py-3 rounded-full font-bold text-sm hover:bg-primary-700 transition-colors"
            style={{ fontFamily: 'Lato, sans-serif' }}
          >
            Contact Us
          </Link>
        </div>
      </section>

    </motion.div>
  );
};

export default BlogList;



// import { useState, useRef, useEffect, useCallback } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import { animationConfig } from '../config/animation.config';
// import Seo from '../components/ui/Seo';
// import { blogsData } from '../data/blogs.data';

// const categoryStyles = {
//   'credit-cards':     'bg-blue-100 text-blue-700',
//   'insurance':        'bg-emerald-100 text-emerald-700',
//   'investments':      'bg-violet-100 text-violet-700',
//   'personal-finance': 'bg-orange-100 text-orange-700',
// };
// const categoryLabel = {
//   'credit-cards':     'Credit Card',
//   'insurance':        'Insurance',
//   'investments':      'Finance',
//   'personal-finance': 'Personal',
// };

// const sortedBlogs = [...(blogsData.featured || [])].sort(
//   (a, b) => new Date(b.publishedDate) - new Date(a.publishedDate)
// );

// const PILL_CATS = [
//   { slug: 'all',              name: 'All Posts' },
//   { slug: 'credit-cards',     name: 'Credit Card' },
//   { slug: 'insurance',        name: 'Insurance' },
//   { slug: 'investments',      name: 'Finance' },
//   { slug: 'personal-finance', name: 'Personal' },
// ];

// const BlogList = () => {
//   const [selectedCategory, setSelectedCategory] = useState('all');
//   const [searchQuery, setSearchQuery]           = useState('');
//   const [debouncedSearch, setDebouncedSearch]   = useState('');
//   const [showAll, setShowAll]                   = useState(false);
//   const [navbarHeight, setNavbarHeight]         = useState(0);

//   const filterBarRef = useRef(null);
//   const gridRef      = useRef(null);
//   const isInitial    = useRef(true);

//   // Dynamically measure actual navbar height — works on every screen/device
//   const measureNavbar = useCallback(() => {
//     const navbar =
//       document.querySelector('[data-navbar]') ||
//       document.querySelector('nav')           ||
//       document.querySelector('header');
//     if (navbar) {
//       setNavbarHeight(navbar.getBoundingClientRect().height);
//     }
//   }, []);

//   useEffect(() => {
//     measureNavbar();
//     window.addEventListener('resize', measureNavbar);
//     return () => window.removeEventListener('resize', measureNavbar);
//   }, [measureNavbar]);

//   // Debounce search
//   useEffect(() => {
//     const t = setTimeout(() => setDebouncedSearch(searchQuery), 350);
//     return () => clearTimeout(t);
//   }, [searchQuery]);

//   // Scroll to grid on filter/search change
//   useEffect(() => {
//     if (isInitial.current) { isInitial.current = false; return; }
//     if (!gridRef.current) return;
//     const filterH = filterBarRef.current?.getBoundingClientRect().height || 72;
//     const top = gridRef.current.getBoundingClientRect().top + window.scrollY - navbarHeight - filterH - 8;
//     window.scrollTo({ top, behavior: 'smooth' });
//   }, [debouncedSearch, selectedCategory, navbarHeight]);

//   const isFiltered = debouncedSearch !== '' || selectedCategory !== 'all';

//   const filtered = sortedBlogs.filter((b) => {
//     const matchCat    = selectedCategory === 'all' || b.category === selectedCategory;
//     const matchSearch =
//       b.title.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
//       b.excerpt.toLowerCase().includes(debouncedSearch.toLowerCase());
//     return matchCat && matchSearch;
//   });

//   const featuredBlog = !isFiltered && filtered.length > 0 ? filtered[0] : null;
//   const gridBlogs    = !isFiltered ? filtered.slice(1) : filtered;
//   const visibleGrid  = showAll ? gridBlogs : gridBlogs.slice(0, 6);

//   const formatDate = (d) =>
//     new Date(d).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });

//   return (
//     <motion.div {...animationConfig.pageTransition} className="min-h-screen bg-neutral-50">
//       <Seo title="Blog – UnfilteredMoney" description="Expert financial insights" />

//       {/* ══════ HERO ══════ */}
//       <section className="bg-white pt-8 pb-6 px-4">
//         <div className="max-w-2xl mx-auto text-center">
//           <h1
//             className="text-3xl sm:text-4xl font-extrabold text-neutral-900 mb-1.5"
//             style={{ fontFamily: 'Lato, sans-serif' }}
//           >
//             Blogs
//           </h1>
//           <p className="text-neutral-500 text-sm sm:text-base" style={{ fontFamily: 'Lato, sans-serif' }}>
//             Stay ahead with expert tips, strategies, and trends in marketing
//           </p>
//         </div>
//       </section>

//       {/* ══════════════════════════════════════════
//           STICKY FILTER BAR
//           Row 1 → category pills (horizontal scroll)
//           Row 2 → search bar (full width)
//           top = dynamically measured navbar height
//       ══════════════════════════════════════════ */}
//       {/* ════════════════════════════════════════
//           STICKY FILTER BAR
//           Desktop (lg+): pills left + search right (single row)
//           Mobile/Tablet: pills row 1 + search row 2
//       ════════════════════════════════════════ */}
//       <div
//         ref={filterBarRef}
//         className="sticky z-30 bg-white border-b border-neutral-100 shadow-sm"
//         style={{ top: navbarHeight > 0 ? `${navbarHeight}px` : '0px' }}
//       >
//         <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

//           {/* ── DESKTOP (lg+): single row — pills left, search right ── */}
//           <div className="hidden lg:flex items-center gap-3 py-2.5">
//             {/* Pills */}
//             <div
//               className="flex items-center gap-2 overflow-x-auto min-w-0 flex-1"
//               style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', maxWidth: 'calc(100% - 340px)' }}
//             >
//               {PILL_CATS.map((cat) => {
//                 const active = selectedCategory === cat.slug;
//                 return (
//                   <button
//                     key={cat.slug}
//                     onClick={() => { setSelectedCategory(cat.slug); setShowAll(false); }}
//                     className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-semibold border transition-all duration-150 ${
//                       active
//                         ? 'bg-primary-600 text-white border-primary-600 shadow-sm'
//                         : 'bg-white text-neutral-600 border-neutral-200 hover:bg-primary-600 hover:text-white hover:border-primary-600'
//                     }`}
//                     style={{ fontFamily: 'Lato, sans-serif' }}
//                   >
//                     {cat.name}
//                   </button>
//                 );
//               })}
//             </div>
//             {/* Search bar — fixed right */}
//             <div className="relative flex-shrink-0 w-80">
//               <input
//                 type="text"
//                 placeholder="Search articles..."
//                 value={searchQuery}
//                 onChange={(e) => { setSearchQuery(e.target.value); setShowAll(false); }}
//                 className="w-full pl-5 pr-10 py-2 rounded-full border border-neutral-200 bg-white text-sm text-neutral-700 placeholder:text-neutral-400 focus:outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-100 transition-all"
//                 style={{ fontFamily: 'Lato, sans-serif' }}
//               />
//               {searchQuery ? (
//                 <button onClick={() => setSearchQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600">
//                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
//                   </svg>
//                 </button>
//               ) : (
//                 <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1116.65 16.65z" />
//                 </svg>
//               )}
//             </div>
//           </div>

//           {/* ── MOBILE / TABLET (<lg): 2 rows with small gap ── */}
//           <div className="lg:hidden py-2.5 flex flex-col gap-2">
//             {/* Row 1: Pills */}
//             <div
//               className="flex items-center gap-2 overflow-x-auto min-w-0"
//               style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
//             >
//               {PILL_CATS.map((cat) => {
//                 const active = selectedCategory === cat.slug;
//                 return (
//                   <button
//                     key={cat.slug}
//                     onClick={() => { setSelectedCategory(cat.slug); setShowAll(false); }}
//                     className={`flex-shrink-0 px-3 py-1 rounded-full text-xs font-semibold border transition-all duration-150 ${
//                       active
//                         ? 'bg-primary-600 text-white border-primary-600 shadow-sm'
//                         : 'bg-white text-neutral-600 border-neutral-200 hover:bg-primary-600 hover:text-white hover:border-primary-600'
//                     }`}
//                     style={{ fontFamily: 'Lato, sans-serif' }}
//                   >
//                     {cat.name}
//                   </button>
//                 );
//               })}
//             </div>
//             {/* Row 2: Search full width */}
//             <div className="relative w-full">
//               <input
//                 type="text"
//                 placeholder="Search articles..."
//                 value={searchQuery}
//                 onChange={(e) => { setSearchQuery(e.target.value); setShowAll(false); }}
//                 className="w-full pl-4 pr-9 py-2 rounded-full border border-neutral-200 bg-white text-sm text-neutral-700 placeholder:text-neutral-400 focus:outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-100 transition-all"
//                 style={{ fontFamily: 'Lato, sans-serif' }}
//               />
//               {searchQuery ? (
//                 <button onClick={() => setSearchQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600">
//                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
//                   </svg>
//                 </button>
//               ) : (
//                 <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1116.65 16.65z" />
//                 </svg>
//               )}
//             </div>
//           </div>

//         </div>
//       </div>

//       {/* ══════ BODY ══════ */}
//       <div className="max-w-[1200px] mx-auto px-4 pb-8">

//         {/* Section label */}
//         <div className="flex items-center gap-3 pt-6 pb-5" ref={gridRef}>
//           <h2
//             className="text-base font-extrabold text-neutral-900 whitespace-nowrap"
//             style={{ fontFamily: 'Lato, sans-serif' }}
//           >
//             {isFiltered
//               ? `Results${filtered.length ? ` (${filtered.length})` : ''}`
//               : 'Latest Articles'}
//           </h2>
//           <div className="h-px flex-1 bg-neutral-200" />
//           {isFiltered && (
//             <button
//               onClick={() => { setSearchQuery(''); setSelectedCategory('all'); setShowAll(false); }}
//               className="text-xs text-primary-600 font-semibold hover:underline flex-shrink-0"
//               style={{ fontFamily: 'Lato, sans-serif' }}
//             >
//               Clear
//             </button>
//           )}
//         </div>

//         <AnimatePresence mode="wait">
//           {filtered.length > 0 ? (
//             <motion.div
//               key="content"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.2 }}
//             >

//               {/* ── FEATURED HERO CARD ── */}
// {featuredBlog && (
//   <motion.div
//     initial={{ opacity: 0, y: 14 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.4 }}
//     className="mb-8" // Margin bottom thoda kam kiya
//   >
//     <Link to={`/blog/${featuredBlog.slug}`} className="group block">
//       {/* Container: min-h ko 300px se ghata kar 220px-260px range mein kiya hai */}
//       <div className="relative rounded-[24px] overflow-hidden bg-[#333333] flex flex-col md:flex-row min-h-[220px] md:min-h-[260px]">
        
//         {/* 1. Text Content: Padding ko kam kiya (p-6 aur md:p-8) */}
//         <div className="w-full md:w-[55%] p-5 sm:p-6 md:p-8 flex flex-col justify-center order-1">
//           <span className="inline-block w-fit bg-white/10 backdrop-blur-sm border border-white/20 text-white text-[8px] font-bold px-2.5 py-0.5 rounded-full mb-3 uppercase tracking-[0.15em]">
//             Featured
//           </span>
          
//           {/* Title size ko desktop par thoda compress kiya (md:text-3xl) */}
//           <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-extrabold leading-tight mb-2 group-hover:text-primary-200 transition-colors" style={{ fontFamily: 'Lato, sans-serif' }}>
//             {featuredBlog.title}
//           </h2>
          
//           {/* Excerpt ki lines aur margin kam ki */}
//           <p className="text-white/70 text-xs md:text-sm leading-relaxed line-clamp-2 mb-4" style={{ fontFamily: 'Lato, sans-serif' }}>
//             {featuredBlog.excerpt}
//           </p>

//           <div className="flex items-center gap-3 mb-4 text-white/50 text-[10px] md:text-xs">
//             <span className="flex items-center gap-1">📅 {formatDate(featuredBlog.publishedDate)}</span>
//             <span className="text-white/20">•</span>
//             <span className="flex items-center gap-1">⏱ {featuredBlog.readTime}</span>
//           </div>

//           <div className="flex items-center justify-between mt-auto gap-3">
//             <div className="flex items-center gap-2">
//               <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary-400 overflow-hidden flex-shrink-0 border border-white/10">
//                 {featuredBlog.author?.image ? (
//                   <img src={featuredBlog.author.image} alt="" className="w-full h-full object-cover" />
//                 ) : (
//                   <div className="w-full h-full flex items-center justify-center text-[10px] font-bold text-white bg-neutral-700">
//                     {featuredBlog.author?.name?.[0]}
//                   </div>
//                 )}
//               </div>
//               <div>
//                 <p className="text-white/40 text-[9px] uppercase tracking-wider leading-none">Written by</p>
//                 <p className="text-white font-bold text-xs md:text-sm">{featuredBlog.author?.name}</p>
//               </div>
//             </div>
            
//             <span className="bg-white text-neutral-900 text-[10px] md:text-xs font-bold px-4 md:px-6 py-2 rounded-full transition-all group-hover:bg-primary-600 group-hover:text-white shadow-md">
//               Read Article
//             </span>
//           </div>
//         </div>

//         {/* 2. Image: Height ko fixed rakha hai taaki zyada space na le */}
//         <div className="w-full md:w-[45%] h-48 sm:h-56 md:h-auto order-2 overflow-hidden">
//           <img
//             src={featuredBlog.image}
//             alt={featuredBlog.title}
//             className="w-full h-full object-contain-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
//           />
//         </div>

//       </div>
//     </Link>
//   </motion.div>
// )}
//               {/* ── ARTICLES GRID ── */}
//               {visibleGrid.length > 0 && (
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//                   {visibleGrid.map((blog, idx) => (
//                     <motion.div
//                       key={blog.id}
//                       initial={{ opacity: 0, y: 10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.25, delay: Math.min(idx * 0.06, 0.3) }}
//                     >
//                       <Link
//                         to={`/blog/${blog.slug}`}
//                         className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-neutral-100 hover:border-primary-200 hover:shadow-md transition-all duration-300"
//                       >
//                         <div className="relative aspect-video overflow-hidden bg-neutral-100">
//                           <img
//                             src={blog.image}
//                             alt={blog.title}
//                             className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                             loading="lazy"
//                           />
//                           <span className={`absolute top-2.5 left-2.5 text-[9px] font-bold px-2 py-0.5 rounded-full shadow-sm ${categoryStyles[blog.category] || 'bg-neutral-100 text-neutral-600'}`}>
//                             {categoryLabel[blog.category] || blog.category?.replace(/-/g, ' ')}
//                           </span>
//                         </div>
//                         <div className="p-4 flex flex-col flex-1">
//                           <div className="flex items-center gap-1.5 mb-2">
//                             <span className="text-[10px] text-neutral-400" style={{ fontFamily: 'Lato, sans-serif' }}>
//                               {formatDate(blog.publishedDate)}
//                             </span>
//                             <span className="text-neutral-200 text-[10px]">•</span>
//                             <span className="text-[10px] text-neutral-400" style={{ fontFamily: 'Lato, sans-serif' }}>
//                               ⏱ {blog.readTime}
//                             </span>
//                           </div>
//                           <h3
//                             className="text-[15px] font-bold text-neutral-900 mb-1.5 leading-snug line-clamp-2 group-hover:text-primary-600 transition-colors"
//                             style={{ fontFamily: 'Lato, sans-serif' }}
//                           >
//                             {blog.title}
//                           </h3>
//                           <p
//                             className="text-neutral-500 text-[14px] leading-relaxed line-clamp-2 mb-3 flex-1"
//                             style={{ fontFamily: 'Lato, sans-serif' }}
//                           >
//                             {blog.excerpt}
//                           </p>
//                           <div className="pt-3 border-t border-neutral-50 flex items-center justify-between">
//                             <div className="flex items-center gap-1.5">
//                               <div className="w-5 h-5 rounded-full bg-neutral-100 overflow-hidden flex-shrink-0">
//                                 {blog.author?.image ? (
//                                   <img src={blog.author.image} alt="" className="w-full h-full object-cover"
//                                     onError={(e) => { e.target.style.display = 'none'; }} />
//                                 ) : (
//                                   <div className="w-full h-full flex items-center justify-center text-[9px] font-bold text-neutral-500">
//                                     {blog.author?.name?.[0] || 'A'}
//                                   </div>
//                                 )}
//                               </div>
//                               <span className="text-[10px] text-neutral-500 truncate max-w-[90px]" style={{ fontFamily: 'Lato, sans-serif' }}>
//                                 {blog.author?.name}
//                               </span>
//                             </div>
//                             <span className="text-primary-600 text-xs font-bold group-hover:translate-x-0.5 transition-transform" style={{ fontFamily: 'Lato, sans-serif' }}>
//                               Read More →
//                             </span>
//                           </div>
//                         </div>
//                       </Link>
//                     </motion.div>
//                   ))}
//                 </div>
//               )}

//               {/* Load More */}
//               {!showAll && gridBlogs.length > 6 && (
//                 <div className="mt-10 flex justify-center">
//                   <button
//                     onClick={() => setShowAll(true)}
//                     className="px-8 py-2.5 rounded-full border border-neutral-300 text-sm font-semibold text-neutral-600 hover:border-primary-400 hover:text-primary-600 transition-all"
//                     style={{ fontFamily: 'Lato, sans-serif' }}
//                   >
//                     Load More Articles
//                   </button>
//                 </div>
//               )}

//             </motion.div>
//           ) : (
//             <motion.div
//               key="empty"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               className="text-center py-20 bg-white rounded-2xl border border-dashed border-neutral-200"
//             >
//               <p className="text-3xl mb-3">🔍</p>
//               <p className="text-neutral-400 text-sm font-medium" style={{ fontFamily: 'Lato, sans-serif' }}>
//                 No articles found
//               </p>
//               <button
//                 onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
//                 className="mt-3 text-primary-600 font-semibold text-sm hover:underline"
//                 style={{ fontFamily: 'Lato, sans-serif' }}
//               >
//                 Clear filters
//               </button>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>

//       {/* ══════ CTA ══════ */}
//       <section className="py-12 bg-blue-50">
//         <div className="max-w-xl mx-auto px-4 text-center">
//           <h2
//             className="text-xl sm:text-2xl font-extrabold text-neutral-900 mb-5"
//             style={{ fontFamily: 'Lato, sans-serif' }}
//           >
//             Still Confused?{' '}
//             <span className="font-normal">Connect with us</span>
//           </h2>
//           <Link
//             to="/contact"
//             className="inline-block bg-primary-600 text-white px-10 py-3 rounded-full font-bold text-sm hover:bg-primary-700 transition-colors"
//             style={{ fontFamily: 'Lato, sans-serif' }}
//           >
//             Contact Us
//           </Link>
//         </div>
//       </section>

//     </motion.div>
//   );
// };

// export default BlogList;

// import { useState, useRef, useEffect } from 'react';
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
//   const dropdownRef = useRef(null);
//   const timeoutRef = useRef(null);

//   // Sort featured blogs by date (most recent first)
//   const sortedFeatured = [...blogsData.featured].sort(
//     (a, b) => new Date(b.publishedDate) - new Date(a.publishedDate)
//   );

//   const filteredBlogs = sortedFeatured.filter(blog => {
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

//   // Handle dropdown with delay
//   const handleMouseEnter = () => {
//     if (timeoutRef.current) {
//       clearTimeout(timeoutRef.current);
//     }
//     setIsCategoryOpen(true);
//   };

//   const handleMouseLeave = () => {
//     timeoutRef.current = setTimeout(() => {
//       setIsCategoryOpen(false);
//     }, 200);
//   };

//   const handleCategorySelect = (slug) => {
//     setSelectedCategory(slug);
//     setIsCategoryOpen(false);
//     if (timeoutRef.current) {
//       clearTimeout(timeoutRef.current);
//     }
//   };

//   useEffect(() => {
//     return () => {
//       if (timeoutRef.current) {
//         clearTimeout(timeoutRef.current);
//       }
//     };
//   }, []);

//   return (
//     <motion.div {...animationConfig.pageTransition}>
//       <Seo
//         title="Blog - UnfilteredMoney"
//         description="Expert insights on credit cards, insurance, and investments"
//         url={`${seoConfig.siteUrl}/blog`}
//       />

//       {/* Hero Section */}
    

//       {/* Top Picks Section */}
//       <section className="py-12  bg-gradient-to-b from-neutral-50 to-white">
//   <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

//     {/* ===== Header ===== */}
//     <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
//       <div>
//         <h2
//           className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-2"
//           style={{ fontFamily: 'Lato, sans-serif', fontWeight: 900 }}
//         >
//           Top Picks
//         </h2>
//         <p
//           className="text-neutral-600 text-sm sm:text-base"
//           style={{ fontFamily: 'Lato, sans-serif' }}
//         >
//           Editor's choice articles you shouldn't miss
//         </p>
//       </div>

//       {/* ===== Filters ===== */}
//       <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-4 w-full lg:w-auto">

//         {/* Search */}
//         <div className="relative w-full sm:w-72">
//           <input
//             type="text"
//             placeholder="Search articles..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="w-full pl-4 pr-12 py-3 border-2 border-neutral-300 rounded-lg focus:outline-none focus:border-primary-500 transition-colors"
//             style={{ fontFamily: 'Lato, sans-serif' }}
//           />
//           <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-neutral-600 hover:text-primary-600">
//             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//             </svg>
//           </button>
//         </div>

//         {/* Category Dropdown */}
//         <div
//           ref={dropdownRef}
//           className="relative w-full sm:w-auto"
//           onMouseEnter={handleMouseEnter}
//           onMouseLeave={handleMouseLeave}
//         >
//           <button
//             onClick={() => setIsCategoryOpen(!isCategoryOpen)}
//             className="w-full sm:w-auto px-5 py-3 bg-neutral-100 text-neutral-900 rounded-lg font-medium hover:bg-neutral-200 transition-colors flex items-center justify-between gap-2"
//           >
//             <span>Browse by Category</span>
//             <svg
//               className={`w-4 h-4 transition-transform ${isCategoryOpen ? 'rotate-180' : ''}`}
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//             </svg>
//           </button>

//           <div
//             className={`absolute right-0 mt-2 w-full sm:w-64 bg-white rounded-xl border border-neutral-200 shadow-xl py-2 z-50 transition-all origin-top-right ${
//               isCategoryOpen
//                 ? 'opacity-100 scale-100 visible'
//                 : 'opacity-0 scale-95 invisible pointer-events-none'
//             }`}
//           >
//             <button
//               onClick={() => handleCategorySelect('all')}
//               className={`w-full text-left px-4 py-2.5 text-sm font-medium ${
//                 selectedCategory === 'all'
//                   ? 'bg-primary-50 text-primary-700'
//                   : 'hover:bg-neutral-50'
//               }`}
//             >
//               All Articles
//             </button>

//             <div className="border-t border-neutral-100 my-1" />

//             {blogsData.categories.map((cat) => (
//               <button
//                 key={cat.slug}
//                 onClick={() => handleCategorySelect(cat.slug)}
//                 className={`w-full text-left px-4 py-2.5 text-sm font-medium ${
//                   selectedCategory === cat.slug
//                     ? 'bg-neutral-100 text-neutral-900'
//                     : 'hover:bg-neutral-50 text-neutral-700'
//                 }`}
//               >
//                 {cat.name}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>

//     {/* ===== Cards Grid ===== */}
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//       {blogsData.topPicks.map((blog, index) => (
//         <motion.div
//           key={blog.id}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.3, delay: index * 0.1 }}
//         >
//           <Link to={`/blog/${blog.slug}`}>
//             <div className="bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col relative">

//               <div className="absolute top-3 left-3 bg-yellow-400 text-neutral-900 px-3 py-1 rounded-md text-xs font-bold z-10">
//                 ⭐ Top Pick
//               </div>

//               <div className="relative aspect-video w-full overflow-hidden bg-neutral-100">
//                 {blog.image ? (
//                   <img
//                     src={blog.image}
//                     alt={blog.title}
//                     className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
//                     loading="lazy"
//                   />
//                 ) : (
//                   <div className="w-full h-full flex items-center justify-center">
//                     <span className="text-6xl opacity-30">📄</span>
//                   </div>
//                 )}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
//               </div>

//               <div className="p-6 flex flex-col flex-1">
//                 <div className="flex justify-between mb-3">
//                   <span className={`px-3 py-1 rounded-md text-xs font-semibold ${categoryStyles[blog.category]}`}>
//                     {blog.category.replace('-', ' ')}
//                   </span>
//                   <span className="text-xs text-neutral-500">{blog.readTime}</span>
//                 </div>

//                 <h3 className="text-lg sm:text-xl font-bold mb-3 line-clamp-2">
//                   {blog.title}
//                 </h3>

//                 <p className="text-sm text-neutral-600 line-clamp-3 flex-1">
//                   {blog.excerpt}
//                 </p>

//                 <div className="flex justify-between items-center pt-4 border-t mt-4">
//                   <p className="text-xs text-neutral-500">
//                     {new Date(blog.publishedDate).toLocaleDateString('en-IN')}
//                   </p>
//                   <span className="text-primary-600 font-semibold text-sm">Read →</span>
//                 </div>
//               </div>
//             </div>
//           </Link>
//         </motion.div>
//       ))}
//     </div>

//   </div>
// </section>


//       {/* All Articles Section with Filter */}
//       <section className="py-6 bg-neutral-50">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           {/* Section Header with Search and Filter */}
//           <div className="mb-8">
//             <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-6">
//               <div>
//                 <h2 className="text-3xl font-bold text-neutral-900 mb-2" style={{ fontFamily: 'Lato, sans-serif', fontWeight: 900 }}>
//                   All Articles
//                 </h2>
//                 <p className="text-neutral-600" style={{ fontFamily: 'Lato, sans-serif' }}>
//                   {selectedCategory === 'all' 
//                     ? 'Browse all our financial guides and reviews' 
//                     : `${blogsData.categories.find(c => c.slug === selectedCategory)?.name} articles`
//                   }
//                 </p>
//               </div>

//               {/* Search + Category Filter */}
             
//             </div>
//           </div>

//           {/* Articles Grid */}
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
//                       <div className="relative aspect-video w-full overflow-hidden bg-neutral-100">
//                         {blog.image ? (
//                           <img
//                             src={blog.image}
//                             alt={blog.title}
//                             className="w-full h-full object-contain-cover transition-transform duration-500 hover:scale-105"
//                             loading="lazy"
//                           />
//                         ) : (
//                           <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-neutral-100 to-neutral-200">
//                             <span className="text-6xl opacity-30">
//                               {blog.category === 'credit-cards' ? '💳' :
//                                blog.category === 'insurance' ? '🛡️' :
//                                blog.category === 'investments' ? '📈' : '💰'}
//                             </span>
//                           </div>
//                         )}
//                         <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
//                       </div>

//                       <div className="p-5 flex flex-col flex-1">
//                         {blog.featured && (
//                           <div className="mb-3">
                           
//                           </div>
//                         )}
//                         <div className="flex items-center justify-between mb-3">
//                           <span className={`px-3 py-1 rounded-md text-xs font-semibold uppercase ${categoryStyles[blog.category]}`}>
//                             {blog.category.replace('-', ' ')}
//                           </span>
//                           <span className="text-xs text-neutral-500">{blog.readTime}</span>
//                         </div>

//                         <h3 className="text-lg font-bold text-neutral-900 mb-3 line-clamp-2 hover:text-primary-600 transition-colors" style={{ fontFamily: 'Lato, sans-serif' }}>
//                           {blog.title}
//                         </h3>

//                         <p className="text-sm text-neutral-600 mb-4 line-clamp-3 flex-1 text-justify" style={{ fontFamily: 'Lato, sans-serif' }}>
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
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
//                   onClick={() => {
//                     setSelectedCategory(category.slug);
//                     window.scrollTo({ top: 0, behavior: 'smooth' });
//                   }}
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



// import { useState, useRef, useEffect, useCallback } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import { animationConfig } from '../config/animation.config';
// import Seo from '../components/ui/Seo';
// import { blogsData } from '../data/blogs.data';

// const categoryStyles = {
//   'credit-cards':     'bg-blue-100 text-blue-700',
//   'insurance':        'bg-emerald-100 text-emerald-700',
//   'investments':      'bg-violet-100 text-violet-700',
//   'personal-finance': 'bg-orange-100 text-orange-700',
// };
// const categoryLabel = {
//   'credit-cards':     'Credit Card',
//   'insurance':        'Insurance',
//   'investments':      'Finance',
//   'personal-finance': 'Personal',
// };

// const sortedBlogs = [...(blogsData.featured || [])].sort(
//   (a, b) => new Date(b.publishedDate) - new Date(a.publishedDate)
// );

// const PILL_CATS = [
//   { slug: 'all',              name: 'All Posts' },
//   { slug: 'credit-cards',     name: 'Credit Card' },
//   { slug: 'insurance',        name: 'Insurance' },
//   { slug: 'investments',      name: 'Finance' },
//   { slug: 'personal-finance', name: 'Personal' },
// ];

// const BlogList = () => {
//   const [selectedCategory, setSelectedCategory] = useState('all');
//   const [searchQuery, setSearchQuery]           = useState('');
//   const [debouncedSearch, setDebouncedSearch]   = useState('');
//   const [showAll, setShowAll]                   = useState(false);
//   const [navbarHeight, setNavbarHeight]         = useState(0);

//   const filterBarRef = useRef(null);
//   const gridRef      = useRef(null);
//   const isInitial    = useRef(true);

//   // Dynamically measure actual navbar height — works on every screen/device
//   const measureNavbar = useCallback(() => {
//     const navbar =
//       document.querySelector('[data-navbar]') ||
//       document.querySelector('nav')           ||
//       document.querySelector('header');
//     if (navbar) {
//       setNavbarHeight(navbar.getBoundingClientRect().height);
//     }
//   }, []);

//   useEffect(() => {
//     measureNavbar();
//     window.addEventListener('resize', measureNavbar);
//     return () => window.removeEventListener('resize', measureNavbar);
//   }, [measureNavbar]);

//   // Debounce search
//   useEffect(() => {
//     const t = setTimeout(() => setDebouncedSearch(searchQuery), 350);
//     return () => clearTimeout(t);
//   }, [searchQuery]);

//   // Scroll to grid on filter/search change
//   useEffect(() => {
//     if (isInitial.current) { isInitial.current = false; return; }
//     if (!gridRef.current) return;
//     const filterH = filterBarRef.current?.getBoundingClientRect().height || 72;
//     const top = gridRef.current.getBoundingClientRect().top + window.scrollY - navbarHeight - filterH - 8;
//     window.scrollTo({ top, behavior: 'smooth' });
//   }, [debouncedSearch, selectedCategory, navbarHeight]);

//   const isFiltered = debouncedSearch !== '' || selectedCategory !== 'all';

//   const filtered = sortedBlogs.filter((b) => {
//     const matchCat    = selectedCategory === 'all' || b.category === selectedCategory;
//     const matchSearch =
//       b.title.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
//       b.excerpt.toLowerCase().includes(debouncedSearch.toLowerCase());
//     return matchCat && matchSearch;
//   });

//   const featuredBlog = !isFiltered && filtered.length > 0 ? filtered[0] : null;
//   const gridBlogs    = !isFiltered ? filtered.slice(1) : filtered;
//   const visibleGrid  = showAll ? gridBlogs : gridBlogs.slice(0, 6);

//   const formatDate = (d) =>
//     new Date(d).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });

//   return (
//     <motion.div {...animationConfig.pageTransition} className="min-h-screen bg-neutral-50">
//       <Seo title="Blog – UnfilteredMoney" description="Expert financial insights" />

//       {/* ══════ HERO ══════ */}
//       <section className="bg-white pt-8 pb-6 px-4">
//         <div className="max-w-2xl mx-auto text-center">
//           <h1
//             className="text-3xl sm:text-4xl font-extrabold text-neutral-900 mb-1.5"
//             style={{ fontFamily: 'Lato, sans-serif' }}
//           >
//             Blogs
//           </h1>
//           <p className="text-neutral-500 text-sm sm:text-base" style={{ fontFamily: 'Lato, sans-serif' }}>
//             Stay ahead with expert tips, strategies, and trends in marketing
//           </p>
//         </div>
//       </section>

//       {/* ══════════════════════════════════════════
//           STICKY FILTER BAR
//           Row 1 → category pills (horizontal scroll)
//           Row 2 → search bar (full width)
//           top = dynamically measured navbar height
//       ══════════════════════════════════════════ */}
//       <div
//         ref={filterBarRef}
//         className="sticky z-30 bg-white border-b border-neutral-100 shadow-sm"
//         style={{ top: navbarHeight > 0 ? `${navbarHeight}px` : '0px' }}
//       >
//         <div className="max-w-[1200px] mx-auto px-4 pt-2.5 pb-2.5 flex flex-col gap-2">

//           {/* ── ROW 1: Category pills ── */}
//           <div
//             className="flex items-center gap-2 overflow-x-auto"
//             style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
//           >
//             {PILL_CATS.map((cat) => {
//               const active = selectedCategory === cat.slug;
//               return (
//                 <button
//                   key={cat.slug}
//                   onClick={() => { setSelectedCategory(cat.slug); setShowAll(false); }}
//                   className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-semibold border transition-all duration-150 ${
//                     active
//                       ? 'bg-primary-600 text-white border-primary-600 shadow-sm'
//                       : 'bg-white text-neutral-600 border-neutral-200 hover:bg-primary-600 hover:text-white hover:border-primary-600'
//                   }`}
//                   style={{ fontFamily: 'Lato, sans-serif' }}
//                 >
//                   {cat.name}
//                 </button>
//               );
//             })}
//           </div>

//           {/* ── ROW 2: Search bar (full width) ── */}
//           <div className="relative w-full">
//             <input
//               type="text"
//               placeholder="Search"
//               value={searchQuery}
//               onChange={(e) => { setSearchQuery(e.target.value); setShowAll(false); }}
//               className="w-full pl-4 pr-9 py-2 rounded-full border border-neutral-200 bg-neutral-50 text-sm text-neutral-700 placeholder:text-neutral-400 focus:outline-none focus:border-primary-400 focus:bg-white transition-all"
//               style={{ fontFamily: 'Lato, sans-serif' }}
//             />
//             {searchQuery ? (
//               <button
//                 onClick={() => setSearchQuery('')}
//                 className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
//               >
//                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               </button>
//             ) : (
//               <svg
//                 className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 pointer-events-none"
//                 fill="none" stroke="currentColor" viewBox="0 0 24 24"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
//                   d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1116.65 16.65z" />
//               </svg>
//             )}
//           </div>

//         </div>
//       </div>

//       {/* ══════ BODY ══════ */}
//       <div className="max-w-[1200px] mx-auto px-4 pb-8">

//         {/* Section label */}
//         <div className="flex items-center gap-3 pt-6 pb-5" ref={gridRef}>
//           <h2
//             className="text-base font-extrabold text-neutral-900 whitespace-nowrap"
//             style={{ fontFamily: 'Lato, sans-serif' }}
//           >
//             {isFiltered
//               ? `Results${filtered.length ? ` (${filtered.length})` : ''}`
//               : 'Latest Articles'}
//           </h2>
//           <div className="h-px flex-1 bg-neutral-200" />
//           {isFiltered && (
//             <button
//               onClick={() => { setSearchQuery(''); setSelectedCategory('all'); setShowAll(false); }}
//               className="text-xs text-primary-600 font-semibold hover:underline flex-shrink-0"
//               style={{ fontFamily: 'Lato, sans-serif' }}
//             >
//               Clear
//             </button>
//           )}
//         </div>

//         <AnimatePresence mode="wait">
//           {filtered.length > 0 ? (
//             <motion.div
//               key="content"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.2 }}
//             >

//               {/* ── FEATURED HERO CARD ── */}
// {featuredBlog && (
//   <motion.div
//     initial={{ opacity: 0, y: 14 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.4 }}
//     className="mb-8" // Margin bottom thoda kam kiya
//   >
//     <Link to={`/blog/${featuredBlog.slug}`} className="group block">
//       {/* Container: min-h ko 300px se ghata kar 220px-260px range mein kiya hai */}
//       <div className="relative rounded-[24px] overflow-hidden bg-[#333333] flex flex-col md:flex-row min-h-[220px] md:min-h-[260px]">
        
//         {/* 1. Text Content: Padding ko kam kiya (p-6 aur md:p-8) */}
//         <div className="w-full md:w-[55%] p-5 sm:p-6 md:p-8 flex flex-col justify-center order-1">
//           <span className="inline-block w-fit bg-white/10 backdrop-blur-sm border border-white/20 text-white text-[8px] font-bold px-2.5 py-0.5 rounded-full mb-3 uppercase tracking-[0.15em]">
//             Featured
//           </span>
          
//           {/* Title size ko desktop par thoda compress kiya (md:text-3xl) */}
//           <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-extrabold leading-tight mb-2 group-hover:text-primary-200 transition-colors" style={{ fontFamily: 'Lato, sans-serif' }}>
//             {featuredBlog.title}
//           </h2>
          
//           {/* Excerpt ki lines aur margin kam ki */}
//           <p className="text-white/70 text-xs md:text-sm leading-relaxed line-clamp-2 mb-4" style={{ fontFamily: 'Lato, sans-serif' }}>
//             {featuredBlog.excerpt}
//           </p>

//           <div className="flex items-center gap-3 mb-4 text-white/50 text-[10px] md:text-xs">
//             <span className="flex items-center gap-1">📅 {formatDate(featuredBlog.publishedDate)}</span>
//             <span className="text-white/20">•</span>
//             <span className="flex items-center gap-1">⏱ {featuredBlog.readTime}</span>
//           </div>

//           <div className="flex items-center justify-between mt-auto gap-3">
//             <div className="flex items-center gap-2">
//               <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary-400 overflow-hidden flex-shrink-0 border border-white/10">
//                 {featuredBlog.author?.image ? (
//                   <img src={featuredBlog.author.image} alt="" className="w-full h-full object-cover" />
//                 ) : (
//                   <div className="w-full h-full flex items-center justify-center text-[10px] font-bold text-white bg-neutral-700">
//                     {featuredBlog.author?.name?.[0]}
//                   </div>
//                 )}
//               </div>
//               <div>
//                 <p className="text-white/40 text-[9px] uppercase tracking-wider leading-none">Written by</p>
//                 <p className="text-white font-bold text-xs md:text-sm">{featuredBlog.author?.name}</p>
//               </div>
//             </div>
            
//             <span className="bg-white text-neutral-900 text-[10px] md:text-xs font-bold px-4 md:px-6 py-2 rounded-full transition-all group-hover:bg-primary-600 group-hover:text-white shadow-md">
//               Read Article
//             </span>
//           </div>
//         </div>

//         {/* 2. Image: Height ko fixed rakha hai taaki zyada space na le */}
//         <div className="w-full md:w-[45%] h-48 sm:h-56 md:h-auto order-2 overflow-hidden">
//           <img
//             src={featuredBlog.image}
//             alt={featuredBlog.title}
//             className="w-full h-full object-contain-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
//           />
//         </div>

//       </div>
//     </Link>
//   </motion.div>
// )}
//               {/* ── ARTICLES GRID ── */}
//               {visibleGrid.length > 0 && (
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//                   {visibleGrid.map((blog, idx) => (
//                     <motion.div
//                       key={blog.id}
//                       initial={{ opacity: 0, y: 10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.25, delay: Math.min(idx * 0.06, 0.3) }}
//                     >
//                       <Link
//                         to={`/blog/${blog.slug}`}
//                         className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-neutral-100 hover:border-primary-200 hover:shadow-md transition-all duration-300"
//                       >
//                         <div className="relative aspect-video overflow-hidden bg-neutral-100">
//                           <img
//                             src={blog.image}
//                             alt={blog.title}
//                             className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                             loading="lazy"
//                           />
//                           <span className={`absolute top-2.5 left-2.5 text-[9px] font-bold px-2 py-0.5 rounded-full shadow-sm ${categoryStyles[blog.category] || 'bg-neutral-100 text-neutral-600'}`}>
//                             {categoryLabel[blog.category] || blog.category?.replace(/-/g, ' ')}
//                           </span>
//                         </div>
//                         <div className="p-4 flex flex-col flex-1">
//                           <div className="flex items-center gap-1.5 mb-2">
//                             <span className="text-[10px] text-neutral-400" style={{ fontFamily: 'Lato, sans-serif' }}>
//                               {formatDate(blog.publishedDate)}
//                             </span>
//                             <span className="text-neutral-200 text-[10px]">•</span>
//                             <span className="text-[10px] text-neutral-400" style={{ fontFamily: 'Lato, sans-serif' }}>
//                               ⏱ {blog.readTime}
//                             </span>
//                           </div>
//                           <h3
//                             className="text-[15px] font-bold text-neutral-900 mb-1.5 leading-snug line-clamp-2 group-hover:text-primary-600 transition-colors"
//                             style={{ fontFamily: 'Lato, sans-serif' }}
//                           >
//                             {blog.title}
//                           </h3>
//                           <p
//                             className="text-neutral-500 text-[14px] leading-relaxed line-clamp-2 mb-3 flex-1"
//                             style={{ fontFamily: 'Lato, sans-serif' }}
//                           >
//                             {blog.excerpt}
//                           </p>
//                           <div className="pt-3 border-t border-neutral-50 flex items-center justify-between">
//                             <div className="flex items-center gap-1.5">
//                               <div className="w-5 h-5 rounded-full bg-neutral-100 overflow-hidden flex-shrink-0">
//                                 {blog.author?.image ? (
//                                   <img src={blog.author.image} alt="" className="w-full h-full object-cover"
//                                     onError={(e) => { e.target.style.display = 'none'; }} />
//                                 ) : (
//                                   <div className="w-full h-full flex items-center justify-center text-[9px] font-bold text-neutral-500">
//                                     {blog.author?.name?.[0] || 'A'}
//                                   </div>
//                                 )}
//                               </div>
//                               <span className="text-[10px] text-neutral-500 truncate max-w-[90px]" style={{ fontFamily: 'Lato, sans-serif' }}>
//                                 {blog.author?.name}
//                               </span>
//                             </div>
//                             <span className="text-primary-600 text-xs font-bold group-hover:translate-x-0.5 transition-transform" style={{ fontFamily: 'Lato, sans-serif' }}>
//                               Read More →
//                             </span>
//                           </div>
//                         </div>
//                       </Link>
//                     </motion.div>
//                   ))}
//                 </div>
//               )}

//               {/* Load More */}
//               {!showAll && gridBlogs.length > 6 && (
//                 <div className="mt-10 flex justify-center">
//                   <button
//                     onClick={() => setShowAll(true)}
//                     className="px-8 py-2.5 rounded-full border border-neutral-300 text-sm font-semibold text-neutral-600 hover:border-primary-400 hover:text-primary-600 transition-all"
//                     style={{ fontFamily: 'Lato, sans-serif' }}
//                   >
//                     Load More Articles
//                   </button>
//                 </div>
//               )}

//             </motion.div>
//           ) : (
//             <motion.div
//               key="empty"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               className="text-center py-20 bg-white rounded-2xl border border-dashed border-neutral-200"
//             >
//               <p className="text-3xl mb-3">🔍</p>
//               <p className="text-neutral-400 text-sm font-medium" style={{ fontFamily: 'Lato, sans-serif' }}>
//                 No articles found
//               </p>
//               <button
//                 onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
//                 className="mt-3 text-primary-600 font-semibold text-sm hover:underline"
//                 style={{ fontFamily: 'Lato, sans-serif' }}
//               >
//                 Clear filters
//               </button>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>

//       {/* ══════ CTA ══════ */}
//       <section className="py-12 bg-blue-50">
//         <div className="max-w-xl mx-auto px-4 text-center">
//           <h2
//             className="text-xl sm:text-2xl font-extrabold text-neutral-900 mb-5"
//             style={{ fontFamily: 'Lato, sans-serif' }}
//           >
//             Still Confused?{' '}
//             <span className="font-normal">Connect with us</span>
//           </h2>
//           <Link
//             to="/contact"
//             className="inline-block bg-primary-600 text-white px-10 py-3 rounded-full font-bold text-sm hover:bg-primary-700 transition-colors"
//             style={{ fontFamily: 'Lato, sans-serif' }}
//           >
//             Contact Us
//           </Link>
//         </div>
//       </section>

//     </motion.div>
//   );
// };

// export default BlogList;

