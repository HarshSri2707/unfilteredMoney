import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { animationConfig } from '../../config/animation.config';
import Card from '../ui/Card';
import { blogsData } from '../../data/blogs.data';

const LatestBlogs = () => {
  const latestBlogs = [...blogsData.featured, ...blogsData.recent].slice(0, 3);

  const categoryColors = {
    'credit-cards': 'bg-blue-100 text-blue-700',
    'insurance': 'bg-green-100 text-green-700',
    'investments': 'bg-purple-100 text-purple-700',
    'personal-finance': 'bg-orange-100 text-orange-700',
  };

  return (
    <motion.section
      className="py-16 bg-white"
      {...animationConfig.sectionReveal}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Latest Insights
          </motion.h2>
          <motion.p
            className="text-lg text-neutral-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Honest takes on personal finance topics
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={animationConfig.staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {latestBlogs.map((blog) => (
            <motion.div
              key={blog.id}
              variants={animationConfig.staggerItem}
            >
              <Link to={`/blog/${blog.slug}`}>
                <Card hover>
                  {/* Blog Image */}
                  <div className="relative h-48 overflow-hidden">
                    {blog.image ? (
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-neutral-100 to-neutral-200 flex items-center justify-center">
                        <span className="text-6xl opacity-30">
                          {blog.category === 'credit-cards' ? '💳' :
                           blog.category === 'insurance' ? '🛡️' :
                           blog.category === 'investments' ? '📈' : '💰'}
                        </span>
                      </div>
                    )}

                    {/* Category Badge on Image */}
                    <span
                      className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm bg-white/80 ${categoryColors[blog.category]}`}
                    >
                      {blog.category.replace('-', ' ')}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs text-neutral-500">{blog.readTime}</span>
                      <span className="text-xs text-neutral-500">
                        {new Date(blog.publishedDate).toLocaleDateString('en-IN', {
                          month: 'short',
                          year: 'numeric'
                        })}
                      </span>
                    </div>

                    <h3 className="text-lg font-semibold text-neutral-900 mb-3 line-clamp-2">
                      {blog.title}
                    </h3>

                    <p className="text-sm text-neutral-600 mb-4 line-clamp-2">
                      {blog.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-neutral-200">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center">
                          <span className="text-sm font-semibold text-primary-600">
                            {blog.author.name.charAt(0)}
                          </span>
                        </div>
                        <p className="text-xs font-medium text-neutral-700">
                          {blog.author.name}
                        </p>
                      </div>

                      <span className="text-primary-600 font-semibold text-sm hover:text-primary-700 transition-colors">
                        Read →
                      </span>
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            to="/blog"
            className="inline-block text-primary-600 font-semibold hover:text-primary-700 transition-colors"
          >
            View All Articles →
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default LatestBlogs;