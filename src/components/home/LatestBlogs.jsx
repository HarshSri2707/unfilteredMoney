import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { animationConfig } from '../../config/animation.config';
import Card from '../ui/Card';
import { blogsData } from '../../data/blogs.data';

const LatestBlogs = () => {
  const uniqueBlogs = [
    ...(blogsData.recent || []),
    ...blogsData.featured,
    ...blogsData.topPicks,
  ].filter(
    (blog, index, self) =>
      index === self.findIndex((b) => b.slug === blog.slug)
  );

  const latestBlogs =
    uniqueBlogs.length >= 3
      ? uniqueBlogs
          .sort((a, b) => new Date(b.publishedDate) - new Date(a.publishedDate))
          .slice(0, 3)
      : [
          ...uniqueBlogs,
          ...blogsData.topPicks.filter(
            (b) => !uniqueBlogs.some((u) => u.slug === b.slug)
          ),
        ]
          .sort((a, b) => new Date(b.publishedDate) - new Date(a.publishedDate))
          .slice(0, 3);

  const categoryColors = {
    'credit-cards': 'bg-blue-100 text-blue-700 border-blue-300',
    insurance: 'bg-green-100 text-green-700 border-green-300',
    investments: 'bg-purple-100 text-purple-700 border-purple-300',
    'personal-finance': 'bg-orange-100 text-orange-700 border-orange-300',
  };

  return (
    <motion.section
      className="py-10 md:py-12 bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header row with title + View all */}
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <motion.h2
            className="text-2xl md:text-3xl font-extrabold text-neutral-900"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ fontFamily: 'Lato, sans-serif' }}
          >
            Blogs
          </motion.h2>
          <Link
            to="/blog"
            className="text-xs md:text-sm text-primary-600 font-semibold hover:text-primary-700 transition-colors"
            style={{ fontFamily: 'Lato, sans-serif' }}
          >
            View all
          </Link>
        </div>

        {latestBlogs.length === 0 ? (
          <div className="text-center py-12 text-neutral-600">
            <p>No recent articles available yet.</p>
          </div>
        ) : (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5"
            variants={animationConfig.staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {latestBlogs.map((blog) => (
              <motion.div
                key={blog.id}
                variants={animationConfig.staggerItem}
                className="h-full"
              >
                <Link to={`/blog/${blog.slug}`} className="block h-full">
                  <div className="group bg-white rounded-2xl border border-neutral-200 overflow-hidden h-full flex flex-col hover:shadow-lg hover:border-neutral-300 transition-all duration-300">

                    {/* Blog Image */}
                    <div className="relative w-full h-40 md:h-44 shrink-0 overflow-hidden bg-neutral-100">
                      {blog.image ? (
                        <img
                          src={blog.image}
                          alt={blog.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-neutral-100 to-neutral-200">
                          <span className="text-6xl opacity-30">
                            {blog.category === 'credit-cards'
                              ? '💳'
                              : blog.category === 'insurance'
                              ? '🛡️'
                              : blog.category === 'investments'
                              ? '📈'
                              : '💰'}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-4 flex flex-col flex-1">
                      <h3
                        className="text-sm md:text-base font-bold text-neutral-900 mb-2 leading-snug line-clamp-2 group-hover:text-primary-600 transition-colors"
                        style={{ fontFamily: 'Lato, sans-serif' }}
                      >
                        {blog.title}
                      </h3>
                      <p
                        className="text-xs text-neutral-500 leading-relaxed line-clamp-3 flex-1 mb-3"
                        style={{ fontFamily: 'Lato, sans-serif' }}
                      >
                        {blog.excerpt}
                      </p>
                      <span
                        className="text-xs text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                        style={{ fontFamily: 'Lato, sans-serif' }}
                      >
                        Read More
                      </span>
                    </div>

                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </motion.section>
  );
};

export default LatestBlogs;

// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import { animationConfig } from '../../config/animation.config';
// import Card from '../ui/Card';
// import { blogsData } from '../../data/blogs.data';

// const LatestBlogs = () => {
//  const uniqueBlogs = [
//   ...(blogsData.recent || []),
//   ...blogsData.featured,
//   ...blogsData.topPicks,
// ].filter(
//   (blog, index, self) =>
//     index === self.findIndex((b) => b.slug === blog.slug)
// );

// const latestBlogs =
//   uniqueBlogs.length >= 3
//     ? uniqueBlogs
//         .sort((a, b) => new Date(b.publishedDate) - new Date(a.publishedDate))
//         .slice(0, 3)
//     : [
//         ...uniqueBlogs,
//         ...blogsData.topPicks.filter(
//           (b) => !uniqueBlogs.some((u) => u.slug === b.slug)
//         ),
//       ]
//         .sort((a, b) => new Date(b.publishedDate) - new Date(a.publishedDate))
//         .slice(0, 3);


//   const categoryColors = {
//     'credit-cards': 'bg-blue-100 text-blue-700 border-blue-300',
//     'insurance': 'bg-green-100 text-green-700 border-green-300',
//     'investments': 'bg-purple-100 text-purple-700 border-purple-300',
//     'personal-finance': 'bg-orange-100 text-orange-700 border-orange-300',
//   };

//   return (
//     <motion.section
//       className="pb-10 pt-4 bg-white"
//       {...animationConfig.sectionReveal}
//     >
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12">
//           <motion.h2
//             className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             Latest Insights
//           </motion.h2>
//           <motion.p
//             className="text-lg text-neutral-600"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//           >
//             Honest takes on personal finance topics
//           </motion.p>
//         </div>

//         {latestBlogs.length === 0 ? (
//           <div className="text-center py-12 text-neutral-600">
//             <p>No recent articles available yet.</p>
//           </div>
//         ) : (
//           <motion.div
//             className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
//             variants={animationConfig.staggerContainer}
//             initial="initial"
//             whileInView="animate"
//             viewport={{ once: true }}
//           >
//             {latestBlogs.map((blog) => (
//               <motion.div
//                 key={blog.id}
//                 variants={animationConfig.staggerItem}
//               >
//                 <Link to={`/blog/${blog.slug}`}>
//                   <Card className="h-full flex flex-col overflow-hidden border border-neutral-200 hover:shadow-xl transition-all duration-300">
//                     {/* Blog Image Container */}
//                     <div className="relative aspect-video w-full overflow-hidden bg-neutral-100">
//                       {blog.image ? (
//                         <img
//                           src={blog.image}
//                           alt={blog.title}
//                           className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
//                           loading="lazy"
//                         />
//                       ) : (
//                         <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-neutral-100 to-neutral-200">
//                           <span className="text-6xl opacity-30">
//                             {blog.category === 'credit-cards' ? '💳' :
//                              blog.category === 'insurance' ? '🛡️' :
//                              blog.category === 'investments' ? '📈' : '💰'}
//                           </span>
//                         </div>
//                       )}

//                       {/* Category Badge */}
//                       <span
//                         className={`absolute top-3 left-3 px-3 py-1.5 rounded-full text-xs uppercase tracking-wider font-bold backdrop-blur-md shadow-sm border ${categoryColors[blog.category] || 'bg-gray-100 text-gray-700 border-gray-300'}`}
//                       >
//                         {blog.category.replace('-', ' ')}
//                       </span>
//                     </div>

//                     {/* Content */}
//                     <div className="p-5 flex flex-col flex-grow">
//                       <div className="flex items-center justify-between mb-3 text-xs text-neutral-500">
//                         <span>{blog.readTime}</span>
//                         <span>
//                           {new Date(blog.publishedDate).toLocaleDateString('en-IN', {
//                             month: 'short',
//                             year: 'numeric'
//                           })}
//                         </span>
//                       </div>

//                       <h3 className="text-lg md:text-xl font-bold text-neutral-900 mb-3 line-clamp-2 leading-snug hover:text-primary-600 transition-colors">
//                         {blog.title}
//                       </h3>

//                       <p className="text-sm text-neutral-600 mb-6 line-clamp-3 flex-grow leading-relaxed">
//                         {blog.excerpt}
//                       </p>

//                       <div className="mt-auto pt-4 border-t border-neutral-100 flex items-center justify-between">
//                         <div className="flex items-center space-x-2">
//                           <div className="w-7 h-7 rounded-full bg-primary-100 flex items-center justify-center border border-primary-200">
//                             <span className="text-xs font-bold text-primary-700">
//                               {blog.author.name.charAt(0)}
//                             </span>
//                           </div>
//                           <p className="text-xs font-semibold text-neutral-800">
//                             {blog.author.name}
//                           </p>
//                         </div>

//                         <span className="text-primary-600 font-bold text-xs flex items-center group">
//                           Read More
//                           <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
//                         </span>
//                       </div>
//                     </div>
//                   </Card>
//                 </Link>
//               </motion.div>
//             ))}
//           </motion.div>
//         )}

//         <motion.div
//           className="text-center mt-12"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//         >
//           <Link
//             to="/blog"
//             className="inline-flex items-center px-6 py-3 border-2 border-primary-600 text-primary-600 font-bold rounded-full hover:bg-primary-600 hover:text-white transition-all duration-300"
//           >
//             View All Articles
//           </Link>
//         </motion.div>
//       </div>
//     </motion.section>
//   );
// };

// export default LatestBlogs;