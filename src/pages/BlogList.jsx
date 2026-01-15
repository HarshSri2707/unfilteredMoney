import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { animationConfig } from '../config/animation.config';
import { seoConfig } from '../config/seo.config';
import Seo from '../components/ui/Seo';
import Card from '../components/ui/Card';
import { blogsData } from '../data/blogs.data';

const BlogList = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const allBlogs = [...blogsData.featured, ...blogsData.recent];

  const filteredBlogs = selectedCategory === 'all'
    ? allBlogs
    : allBlogs.filter(blog => blog.category === selectedCategory);

  const categoryColors = {
    'credit-cards': 'bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100',
    'insurance': 'bg-green-50 text-green-700 border-green-200 hover:bg-green-100',
    'investments': 'bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100',
    'personal-finance': 'bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100',
  };

  return (
    <motion.div {...animationConfig.pageTransition}>
      <Seo
        title="Unfiltered Money Blog | Honest Personal Finance Advice India"
        description="No sugar-coating. Real reviews, hidden fees exposed, fine print decoded — credit cards, insurance, investments & tax-saving strategies for Indians."
        keywords="unfiltered finance, honest credit card reviews, term vs ULIP, best mutual funds 2026, old vs new tax regime, hidden fees credit cards"
        url={`${seoConfig.siteUrl}/blog`}
      />

      {/* Hero Section - Stronger brand voice */}
      <motion.section
  className="
    relative
    pt-20 pb-16 md:pt-28 md:pb-20
    overflow-hidden
  "
  {...animationConfig.sectionReveal}
>
  {/* Background Image */}
  <div className="absolute inset-0 z-0">
    <img
      src="/images/blogBanner.webp"   // 👈 apni image ka path
      alt="Financial background"
      className="w-full h-full object-cover"
      loading="lazy"
    />

    {/* soft overlay for readability */}
    <div className="absolute inset-0 bg-white/70" />
  </div>

  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-5 md:mb-6 leading-tight">
        The Financial Friend Who Tells You The Ugly Truth
      </h1>

      <p className="text-lg md:text-xl text-neutral-700 max-w-3xl mx-auto leading-relaxed">
        No sponsored lists. No hidden agendas.
        <br />
        We read the fine print so you don't get fooled — again.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <span className="inline-flex items-center px-4 py-2 bg-white rounded-full text-sm font-medium text-neutral-700 border border-neutral-200 shadow-sm">
          100% Unbiased
        </span>
        <span className="inline-flex items-center px-4 py-2 bg-white rounded-full text-sm font-medium text-neutral-700 border border-neutral-200 shadow-sm">
          Fine Print Decoded
        </span>
      </div>
    </div>
  </div>
</motion.section>


      {/* Category Filter - Cleaner, more premium */}
      <motion.section
        className="py-8 md:py-10 bg-white border-b border-neutral-100 sticky top-0 z-10 backdrop-blur-sm"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-auto">
          <div className="flex flex-nowrap md:flex-wrap gap-3 justify-center md:justify-start pb-2 md:pb-0">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 border ${
                selectedCategory === 'all'
                  ? 'bg-primary-600 text-white border-primary-600 shadow-md'
                  : 'bg-white text-neutral-700 border-neutral-200 hover:border-neutral-300 hover:shadow-sm'
              }`}
            >
              All Articles
            </button>

            {blogsData.categories.map((category) => (
              <button
                key={category.slug}
                onClick={() => setSelectedCategory(category.slug)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 border ${
                  selectedCategory === category.slug
                    ? 'bg-primary-600 text-white border-primary-600 shadow-md'
                    : `${categoryColors[category.slug]} border-transparent`
                }`}
              >
                {category.name} <span className="opacity-70">({category.count})</span>
              </button>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Blog Grid */}
      <motion.section
        className="py-12 md:py-16 bg-neutral-50/50"
        {...animationConfig.sectionReveal}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredBlogs.length > 0 ? (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
              variants={animationConfig.staggerContainer}
              initial="initial"
              animate="animate"
            >
              {filteredBlogs.map((blog) => (
                <motion.div
                  key={blog.id}
                  variants={animationConfig.staggerItem}
                >
                  <Link to={`/blog/${blog.slug}`}>
                    <Card hover className="h-full flex flex-col">
                      <div className="relative h-48 md:h-56 overflow-hidden rounded-t-xl">
                        <img
                          src={blog.image}
                          alt={blog.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.08]"
                          loading="lazy"
                          onError={(e) => {
                            e.target.src = '/images/fallback-blog.jpg'; // better to have real fallback
                            e.target.style.objectFit = 'contain';
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                      </div>

                      <div className="p-6 flex flex-col flex-grow">
                        <div className="flex items-center justify-between mb-4">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[blog.category]} border`}
                          >
                            {blog.category.replace('-', ' ').toUpperCase()}
                          </span>
                          <span className="text-xs text-neutral-500 font-medium">
                            {blog.readTime}
                          </span>
                        </div>

                        <h3 className="text-xl font-bold text-neutral-900 mb-3 line-clamp-2">
                          {blog.title}
                        </h3>

                        <p className="text-sm text-neutral-600 mb-6 line-clamp-3 flex-grow">
                          {blog.excerpt}
                        </p>

                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-neutral-100">
                          <div className="flex items-center space-x-3">
                            <div className="w-9 h-9 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-semibold text-sm">
                              {blog.author.name.charAt(0)}
                            </div>
                            <div>
                              <p className="text-sm font-medium text-neutral-800">
                                {blog.author.name}
                              </p>
                              <p className="text-xs text-neutral-500">
                                {new Date(blog.publishedDate).toLocaleDateString('en-IN', {
                                  day: 'numeric',
                                  month: 'short',
                                  year: 'numeric',
                                })}
                              </p>
                            </div>
                          </div>

                          <span className="text-primary-600 font-semibold text-sm group-hover:text-primary-700 transition-colors">
                            Read Article →
                          </span>
                        </div>
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <h3 className="text-2xl font-semibold text-neutral-700 mb-3">
                No articles found
              </h3>
              <p className="text-neutral-600">
                Try switching to another category or check back soon!
              </p>
            </motion.div>
          )}
        </div>
      </motion.section>

      {/* Categories Overview - Trust building */}
      <motion.section
        className="py-16 md:py-20 bg-white"
        {...animationConfig.sectionReveal}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-10 md:mb-12 text-center">
            Choose Your Topic
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {blogsData.categories.map((category) => (
              <motion.div
                key={category.slug}
                variants={animationConfig.staggerItem}
                whileHover={{ y: -6 }}
              >
                <button
                  onClick={() => setSelectedCategory(category.slug)}
                  className="w-full h-full text-left"
                >
                  <Card hover className="h-full border border-neutral-100 hover:border-primary-200 transition-colors">
                    <div className="p-7">
                      <h3 className="text-xl font-bold text-neutral-900 mb-3">
                        {category.name}
                      </h3>
                      <p className="text-neutral-600 mb-4 text-sm leading-relaxed">
                        {category.description}
                      </p>
                      <p className="text-sm font-semibold text-primary-600">
                        {category.count} real articles →
                      </p>
                    </div>
                  </Card>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default BlogList;