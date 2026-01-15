import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { animationConfig } from '../config/animation.config';
import { seoConfig } from '../config/seo.config';
import Seo from '../components/ui/Seo';
import Card from '../components/ui/Card';
import { blogsData } from '../data/blogs.data';

const BlogDetail = () => {
  const { slug } = useParams();

  // Find the current article from both featured and recent
  const allBlogs = [...blogsData.featured, ...blogsData.recent];
  const article = allBlogs.find((blog) => blog.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold">Article not found</h1>
      </div>
    );
  }

  // Related posts: same category, exclude current article, take 3
  const relatedPosts = allBlogs
    .filter((b) => b.category === article.category && b.slug !== article.slug)
    .slice(0, 3);

  const categoryColors = {
    'credit-cards': 'bg-blue-100 text-blue-700',
    'insurance': 'bg-green-100 text-green-700',
    'investments': 'bg-purple-100 text-purple-700',
    'personal-finance': 'bg-orange-100 text-orange-700',
  };

  return (
    <motion.div {...animationConfig.pageTransition}>
      <Seo
        title={article.title}
        description={article.metaDescription}
        keywords={article.tags.join(', ')}
        url={`${seoConfig.siteUrl}/blog/${article.slug}`}
        type="article"
        author={article.author.name}
        publishedDate={article.publishedDate}
        modifiedDate={article.updatedDate}
      />

      {/* Article Header */}
      <motion.section
        className="pt-24 pb-8 bg-gradient-to-br from-neutral-50 to-neutral-100"
        {...animationConfig.sectionReveal}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-6">
            ← Back to Blog
          </Link>

          <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${categoryColors[article.category]}`}>
            {article.category.replace('-', ' ')}
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6 leading-tight">
            {article.title}
          </h1>

          <div className="flex items-center space-x-6 text-sm text-neutral-600">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                <span className="text-lg font-semibold text-primary-600">
                  {article.author.name.charAt(0)}
                </span>
              </div>
              <div>
                <p className="font-semibold text-neutral-900">{article.author.name}</p>
                <p className="text-xs">{article.author.bio}</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <span>📅 {new Date(article.publishedDate).toLocaleDateString('en-IN', {
                day: 'numeric',
                month: 'short',
                year: 'numeric'
              })}</span>
              <span>⏱️ {article.readTime}</span>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Article Image */}
      <motion.section
        className="py-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative h-96 rounded-xl overflow-hidden">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            {/* Fallback emoji if image fails */}
            <div className="absolute inset-0 hidden items-center justify-center bg-gradient-to-br from-blue-100 to-primary-100">
              <span className="text-9xl opacity-30">
                {article.category === 'credit-cards' ? '💳' :
                 article.category === 'insurance' ? '🛡️' :
                 article.category === 'investments' ? '📈' : '💰'}
              </span>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Article Content */}
      <motion.section
        className="py-8"
        {...animationConfig.sectionReveal}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-neutral-200">
            <h3 className="text-sm font-semibold text-neutral-700 mb-3">Tags:</h3>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-neutral-100 text-neutral-700 rounded-full text-sm hover:bg-neutral-200 transition-colors cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Author Bio */}
      <motion.section
        className="py-8"
        {...animationConfig.sectionReveal}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <div className="p-8 flex items-start space-x-4">
              <div className="w-20 h-20 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                <span className="text-3xl font-semibold text-primary-600">
                  {article.author.name.charAt(0)}
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">
                  About {article.author.name}
                </h3>
                <p className="text-neutral-600">{article.author.bio}</p>
              </div>
            </div>
          </Card>
        </div>
      </motion.section>

      {/* Related Posts */}
      <motion.section
        className="py-16 bg-neutral-50"
        {...animationConfig.sectionReveal}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">
            Related Articles
          </h2>

          {relatedPosts.length > 0 ? (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={animationConfig.staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {relatedPosts.map((post) => (
                <motion.div key={post.id} variants={animationConfig.staggerItem}>
                  <Link to={`/blog/${post.slug}`}>
                    <Card hover>
                      <div className="relative h-48 bg-gradient-to-br from-neutral-100 to-neutral-200">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-7xl opacity-20">
                            {post.category === 'credit-cards' ? '💳' :
                             post.category === 'insurance' ? '🛡️' :
                             post.category === 'investments' ? '📈' : '💰'}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${categoryColors[post.category]}`}>
                          {post.category.replace('-', ' ')}
                        </span>
                        <h3 className="text-lg font-bold text-neutral-900 mb-2 line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-sm text-neutral-600 line-clamp-2">
                          {post.excerpt}
                        </p>
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <p className="text-center text-neutral-600">No related articles found.</p>
          )}
        </div>
      </motion.section>
    </motion.div>
  );
};

export default BlogDetail;