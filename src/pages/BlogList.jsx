


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
      <section className="py-12 pt-24 bg-gradient-to-b from-neutral-50 to-white">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* ===== Header ===== */}
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
      <div>
        <h2
          className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-2"
          style={{ fontFamily: 'Lato, sans-serif', fontWeight: 900 }}
        >
          Top Picks
        </h2>
        <p
          className="text-neutral-600 text-sm sm:text-base"
          style={{ fontFamily: 'Lato, sans-serif' }}
        >
          Editor's choice articles you shouldn't miss
        </p>
      </div>

      {/* ===== Filters ===== */}
      <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-4 w-full lg:w-auto">

        {/* Search */}
        <div className="relative w-full sm:w-72">
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-4 pr-12 py-3 border-2 border-neutral-300 rounded-lg focus:outline-none focus:border-primary-500 transition-colors"
            style={{ fontFamily: 'Lato, sans-serif' }}
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-neutral-600 hover:text-primary-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>

        {/* Category Dropdown */}
        <div
          ref={dropdownRef}
          className="relative w-full sm:w-auto"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button
            onClick={() => setIsCategoryOpen(!isCategoryOpen)}
            className="w-full sm:w-auto px-5 py-3 bg-neutral-100 text-neutral-900 rounded-lg font-medium hover:bg-neutral-200 transition-colors flex items-center justify-between gap-2"
          >
            <span>Browse by Category</span>
            <svg
              className={`w-4 h-4 transition-transform ${isCategoryOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <div
            className={`absolute right-0 mt-2 w-full sm:w-64 bg-white rounded-xl border border-neutral-200 shadow-xl py-2 z-50 transition-all origin-top-right ${
              isCategoryOpen
                ? 'opacity-100 scale-100 visible'
                : 'opacity-0 scale-95 invisible pointer-events-none'
            }`}
          >
            <button
              onClick={() => handleCategorySelect('all')}
              className={`w-full text-left px-4 py-2.5 text-sm font-medium ${
                selectedCategory === 'all'
                  ? 'bg-primary-50 text-primary-700'
                  : 'hover:bg-neutral-50'
              }`}
            >
              All Articles
            </button>

            <div className="border-t border-neutral-100 my-1" />

            {blogsData.categories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => handleCategorySelect(cat.slug)}
                className={`w-full text-left px-4 py-2.5 text-sm font-medium ${
                  selectedCategory === cat.slug
                    ? 'bg-neutral-100 text-neutral-900'
                    : 'hover:bg-neutral-50 text-neutral-700'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* ===== Cards Grid ===== */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogsData.topPicks.map((blog, index) => (
        <motion.div
          key={blog.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <Link to={`/blog/${blog.slug}`}>
            <div className="bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col relative">

              <div className="absolute top-3 left-3 bg-yellow-400 text-neutral-900 px-3 py-1 rounded-md text-xs font-bold z-10">
                ⭐ Top Pick
              </div>

              <div className="relative aspect-video w-full overflow-hidden bg-neutral-100">
                {blog.image ? (
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-6xl opacity-30">📄</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex justify-between mb-3">
                  <span className={`px-3 py-1 rounded-md text-xs font-semibold ${categoryStyles[blog.category]}`}>
                    {blog.category.replace('-', ' ')}
                  </span>
                  <span className="text-xs text-neutral-500">{blog.readTime}</span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold mb-3 line-clamp-2">
                  {blog.title}
                </h3>

                <p className="text-sm text-neutral-600 line-clamp-3 flex-1">
                  {blog.excerpt}
                </p>

                <div className="flex justify-between items-center pt-4 border-t mt-4">
                  <p className="text-xs text-neutral-500">
                    {new Date(blog.publishedDate).toLocaleDateString('en-IN')}
                  </p>
                  <span className="text-primary-600 font-semibold text-sm">Read →</span>
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
      <section className="py-6 bg-neutral-50">
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
