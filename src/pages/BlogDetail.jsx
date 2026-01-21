// import { motion } from 'framer-motion';
// import { Link, useParams } from 'react-router-dom';
// import { animationConfig } from '../config/animation.config';
// import { seoConfig } from '../config/seo.config';
// import Seo from '../components/ui/Seo';
// import Card from '../components/ui/Card';
// import { blogsData } from '../data/blogs.data';

// const BlogDetail = () => {
//   const { slug } = useParams();

//   // Find the current article from both featured and recent
//   const allBlogs = [...blogsData.featured, ...blogsData.recent];
//   const article = allBlogs.find((blog) => blog.slug === slug);

//   if (!article) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <h1 className="text-3xl font-bold">Article not found</h1>
//       </div>
//     );
//   }

//   // Related posts: same category, exclude current article, take 3
//   const relatedPosts = allBlogs
//     .filter((b) => b.category === article.category && b.slug !== article.slug)
//     .slice(0, 3);

//   const categoryColors = {
//     'credit-cards': 'bg-blue-100 text-blue-700',
//     'insurance': 'bg-green-100 text-green-700',
//     'investments': 'bg-purple-100 text-purple-700',
//     'personal-finance': 'bg-orange-100 text-orange-700',
//   };

//   return (
//     <motion.div {...animationConfig.pageTransition}>
//       <Seo
//         title={article.title}
//         description={article.metaDescription}
//         keywords={article.tags.join(', ')}
//         url={`${seoConfig.siteUrl}/blog/${article.slug}`}
//         type="article"
//         author={article.author.name}
//         publishedDate={article.publishedDate}
//         modifiedDate={article.updatedDate}
//       />

//       {/* Article Header */}
//       <motion.section
//         className="pt-24 pb-8 bg-gradient-to-br from-neutral-50 to-neutral-100"
//         {...animationConfig.sectionReveal}
//       >
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//           <Link to="/blog" className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-6">
//             ← Back to Blog
//           </Link>

//           <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${categoryColors[article.category]}`}>
//             {article.category.replace('-', ' ')}
//           </span>

//           <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6 leading-tight">
//             {article.title}
//           </h1>

//           <div className="flex items-center space-x-6 text-sm text-neutral-600">
//             <div className="flex items-center space-x-3">
//               <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
//                 <span className="text-lg font-semibold text-primary-600">
//                   {article.author.name.charAt(0)}
//                 </span>
//               </div>
//               <div>
//                 <p className="font-semibold text-neutral-900">{article.author.name}</p>
//                 <p className="text-xs">{article.author.bio}</p>
//               </div>
//             </div>
//             <div className="hidden md:flex items-center space-x-4">
//               <span>📅 {new Date(article.publishedDate).toLocaleDateString('en-IN', {
//                 day: 'numeric',
//                 month: 'short',
//                 year: 'numeric'
//               })}</span>
//               <span>⏱️ {article.readTime}</span>
//             </div>
//           </div>
//         </div>
//       </motion.section>

//       {/* Article Image */}
//       <motion.section
//         className="py-8"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.6 }}
//       >
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="relative h-96 rounded-xl overflow-hidden">
//             <img
//               src={article.image}
//               alt={article.title}
//               className="w-full h-full object-cover"
//               onError={(e) => {
//                 e.target.style.display = 'none';
//                 e.target.nextSibling.style.display = 'flex';
//               }}
//             />
//             {/* Fallback emoji if image fails */}
//             <div className="absolute inset-0 hidden items-center justify-center bg-gradient-to-br from-blue-100 to-primary-100">
//               <span className="text-9xl opacity-30">
//                 {article.category === 'credit-cards' ? '💳' :
//                  article.category === 'insurance' ? '🛡️' :
//                  article.category === 'investments' ? '📈' : '💰'}
//               </span>
//             </div>
//           </div>
//         </div>
//       </motion.section>

//       {/* Article Content */}
//       <motion.section
//         className="py-8"
//         {...animationConfig.sectionReveal}
//       >
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div
//             className="prose prose-lg max-w-none"
//             dangerouslySetInnerHTML={{ __html: article.content }}
//           />

//           {/* Tags */}
//           <div className="mt-12 pt-8 border-t border-neutral-200">
//             <h3 className="text-sm font-semibold text-neutral-700 mb-3">Tags:</h3>
//             <div className="flex flex-wrap gap-2">
//               {article.tags.map((tag) => (
//                 <span
//                   key={tag}
//                   className="px-3 py-1 bg-neutral-100 text-neutral-700 rounded-full text-sm hover:bg-neutral-200 transition-colors cursor-pointer"
//                 >
//                   {tag}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>
//       </motion.section>

//       {/* Author Bio */}
//       <motion.section
//         className="py-8"
//         {...animationConfig.sectionReveal}
//       >
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//           <Card>
//             <div className="p-8 flex items-start space-x-4">
//               <div className="w-20 h-20 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
//                 <span className="text-3xl font-semibold text-primary-600">
//                   {article.author.name.charAt(0)}
//                 </span>
//               </div>
//               <div>
//                 <h3 className="text-xl font-bold text-neutral-900 mb-2">
//                   About {article.author.name}
//                 </h3>
//                 <p className="text-neutral-600">{article.author.bio}</p>
//               </div>
//             </div>
//           </Card>
//         </div>
//       </motion.section>

//       {/* Related Posts */}
//       <motion.section
//         className="py-16 bg-neutral-50"
//         {...animationConfig.sectionReveal}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">
//             Related Articles
//           </h2>

//           {relatedPosts.length > 0 ? (
//             <motion.div
//               className="grid grid-cols-1 md:grid-cols-3 gap-8"
//               variants={animationConfig.staggerContainer}
//               initial="initial"
//               whileInView="animate"
//               viewport={{ once: true }}
//             >
//               {relatedPosts.map((post) => (
//                 <motion.div key={post.id} variants={animationConfig.staggerItem}>
//                   <Link to={`/blog/${post.slug}`}>
//                     <Card hover>
//                       <div className="relative h-48 bg-gradient-to-br from-neutral-100 to-neutral-200">
//                         <div className="absolute inset-0 flex items-center justify-center">
//                           <span className="text-7xl opacity-20">
//                             {post.category === 'credit-cards' ? '💳' :
//                              post.category === 'insurance' ? '🛡️' :
//                              post.category === 'investments' ? '📈' : '💰'}
//                           </span>
//                         </div>
//                       </div>
//                       <div className="p-6">
//                         <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${categoryColors[post.category]}`}>
//                           {post.category.replace('-', ' ')}
//                         </span>
//                         <h3 className="text-lg font-bold text-neutral-900 mb-2 line-clamp-2">
//                           {post.title}
//                         </h3>
//                         <p className="text-sm text-neutral-600 line-clamp-2 text-justify">
//                           {post.excerpt}
//                         </p>
//                       </div>
//                     </Card>
//                   </Link>
//                 </motion.div>
//               ))}
//             </motion.div>
//           ) : (
//             <p className="text-center text-neutral-600">No related articles found.</p>
//           )}
//         </div>
//       </motion.section>
//     </motion.div>
//   );
// };

// export default BlogDetail;



// import { motion } from 'framer-motion';
// import { Link, useParams } from 'react-router-dom';
// import { animationConfig } from '../config/animation.config';
// import { seoConfig } from '../config/seo.config';
// import Seo from '../components/ui/Seo';
// import { blogsData } from '../data/blogs.data';

// const BlogDetail = () => {
//   const { slug } = useParams();

//   const allBlogs = [...blogsData.featured, ...blogsData.recent];
//   const article = allBlogs.find((blog) => blog.slug === slug);

//   if (!article) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <h1 className="text-3xl font-bold">Article not found</h1>
//       </div>
//     );
//   }

//   const relatedPosts = allBlogs
//     .filter((b) => b.category === article.category && b.slug !== article.slug)
//     .slice(0, 3);

//   const categoryStyles = {
//     'credit-cards': 'bg-blue-100 text-blue-700',
//     'insurance': 'bg-green-100 text-green-700',
//     'investments': 'bg-purple-100 text-purple-700',
//     'personal-finance': 'bg-orange-100 text-orange-700',
//   };

//   return (
//     <motion.div {...animationConfig.pageTransition}>
//       <Seo
//         title={article.title}
//         description={article.excerpt}
//         url={`${seoConfig.siteUrl}/blog/${article.slug}`}
//       />

//       {/* Breadcrumb */}
//       <section className="bg-white border-b border-neutral-200">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
//           <div className="flex items-center gap-2 text-sm text-neutral-600">
//             <Link to="/" className="hover:text-primary-600">Home</Link>
//             <span>›</span>
//             <Link to="/blog" className="hover:text-primary-600">Credit Cards</Link>
//             <span>›</span>
//             <span className="text-neutral-900 font-medium line-clamp-1">{article.title}</span>
//           </div>
//         </div>
//       </section>

//       {/* Main Content */}
//       <section className="py-12 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
//             {/* Main Article - 3 columns */}
//             <div className="lg:col-span-3">
//               {/* Article Header */}
//               <div className="mb-8">
//                 <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6 leading-tight" style={{ fontFamily: 'Lato, sans-serif', fontWeight: 900 }}>
//                   {article.title}
//                 </h1>

//                 {/* Author & Meta */}
//                 <div className="flex items-center gap-4 mb-6">
//                   <div className="flex items-center gap-3">
//                     <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
//                       <span className="text-primary-600 font-bold">
//                         {article.author.name.charAt(0)}
//                       </span>
//                     </div>
//                     <div>
//                       <p className="text-sm font-semibold text-neutral-900">{article.author.name}</p>
//                       <p className="text-xs text-neutral-600">{article.author.bio}</p>
//                     </div>
//                   </div>
//                   <div className="text-sm text-neutral-600">
//                     <p>
//                       {new Date(article.publishedDate).toLocaleDateString('en-IN', {
//                         day: 'numeric',
//                         month: 'short',
//                         year: 'numeric'
//                       })}
//                     </p>
//                   </div>
//                 </div>

//                 {/* Featured Image */}
//                 <img
//                   src={article.image}
//                   alt={article.title}
//                   className="w-full h-auto rounded-xl"
//                   loading="eager"
//                 />
//               </div>

//               {/* Article Content */}
//               <div
//                 className="prose prose-lg max-w-none mb-12"
//                 dangerouslySetInnerHTML={{ __html: article.content }}
//                 style={{ fontFamily: 'Lato, sans-serif' }}
//               />

//               {/* Tags (if any) */}
//               {article.tags && (
//                 <div className="mb-8">
//                   <h3 className="text-sm font-semibold text-neutral-700 mb-3">Tags:</h3>
//                   <div className="flex flex-wrap gap-2">
//                     {article.tags.map((tag) => (
//                       <span
//                         key={tag}
//                         className="px-3 py-1 bg-neutral-100 text-neutral-700 rounded-md text-sm"
//                       >
//                         {tag}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* Sidebar - 1 column */}
//             <div className="lg:col-span-1">
//               <div className="sticky top-24 space-y-6">
//                 {/* Credit Card Comparison Widget */}
//                 <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl p-6 border-2 border-primary-200">
//                   <div className="flex items-center gap-3 mb-4">
//                     <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center">
//                       <span className="text-2xl">🛡️</span>
//                     </div>
//                     <h3 className="text-lg font-bold text-neutral-900" style={{ fontFamily: 'Lato, sans-serif' }}>
//                       Credit Card Comparison
//                     </h3>
//                   </div>

//                   <p className="text-sm text-neutral-700 mb-4 leading-relaxed" style={{ fontFamily: 'Lato, sans-serif' }}>
//                     Compare India's Best Credit Cards
//                   </p>

//                   <ul className="space-y-2 mb-5 text-sm">
//                     <li className="flex items-center gap-2">
//                       <span className="text-green-600">✓</span>
//                       <span className="text-neutral-700">No Annual Fee</span>
//                     </li>
//                     <li className="flex items-center gap-2">
//                       <span className="text-green-600">✓</span>
//                       <span className="text-neutral-700">Best for Fuel Savings</span>
//                     </li>
//                     <li className="flex items-center gap-2">
//                       <span className="text-green-600">✓</span>
//                       <span className="text-neutral-700">Top Forex Markup Waivers</span>
//                     </li>
//                   </ul>

//                   <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-neutral-900 px-6 py-3 rounded-xl font-bold transition-colors">
//                     Compare Best Cards
//                   </button>

//                   <div className="flex items-center justify-center gap-3 mt-4">
//                     <img src="/images/mastercard.png" alt="Mastercard" className="h-8" />
//                     <img src="/images/visa.png" alt="Visa" className="h-8" />
//                     <img src="/images/rupay.png" alt="RuPay" className="h-8" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Related Articles */}
//       {relatedPosts.length > 0 && (
//         <section className="py-16 bg-neutral-50 border-t border-neutral-200">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-8" style={{ fontFamily: 'Lato, sans-serif', fontWeight: 900 }}>
//               You Might Also Like
//             </h2>

//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               {relatedPosts.map((post) => (
//                 <Link key={post.id} to={`/blog/${post.slug}`}>
//                   <div className="bg-white rounded-xl overflow-hidden border border-neutral-200 hover:shadow-xl transition-all h-full flex flex-col">
//                     <img
//                       src={post.image}
//                       alt={post.title}
//                       className="w-full h-48 object-cover"
//                     />

//                     <div className="p-5 flex flex-col flex-1">
//                       <span className={`px-3 py-1 rounded-md text-xs font-semibold uppercase mb-3 self-start ${categoryStyles[post.category]}`}>
//                         {post.category.replace('-', ' ')}
//                       </span>

//                       <h3 className="text-lg font-bold text-neutral-900 mb-3 line-clamp-2 hover:text-primary-600 transition-colors" style={{ fontFamily: 'Lato, sans-serif' }}>
//                         {post.title}
//                       </h3>

//                       <p className="text-sm text-neutral-600 mb-4 line-clamp-2 flex-1" style={{ fontFamily: 'Lato, sans-serif' }}>
//                         {post.excerpt}
//                       </p>

//                       <div className="flex items-center justify-between pt-4 border-t border-neutral-200">
//                         <div className="flex items-center gap-2">
//                           <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center">
//                             <span className="text-primary-600 text-xs font-bold">
//                               {post.author.name.charAt(0)}
//                             </span>
//                           </div>
//                           <div>
//                             <p className="text-xs font-semibold text-neutral-900">{post.author.name}</p>
//                             <p className="text-xs text-neutral-500">
//                               {new Date(post.publishedDate).toLocaleDateString('en-IN', {
//                                 day: 'numeric',
//                                 month: 'short',
//                                 year: 'numeric'
//                               })}
//                             </p>
//                           </div>
//                         </div>

//                         <span className="text-primary-600 font-semibold text-sm">
//                           Read Article →
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </section>
//       )}
//     </motion.div>
//   );
// };

// export default BlogDetail;


// import { motion } from 'framer-motion';
// import { Link, useParams } from 'react-router-dom';
// import { animationConfig } from '../config/animation.config';
// import { seoConfig } from '../config/seo.config';
// import Seo from '../components/ui/Seo';
// import { blogsData } from '../data/blogs.data';

// const BlogDetail = () => {
//   const { slug } = useParams();

//   // Use only featured array (no more recent array)
//   const allBlogs = [...blogsData.featured];
//   const article = allBlogs.find((blog) => blog.slug === slug);

//   if (!article) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <h1 className="text-3xl font-bold">Article not found</h1>
//       </div>
//     );
//   }

//   const relatedPosts = allBlogs
//     .filter((b) => b.category === article.category && b.slug !== article.slug)
//     .slice(0, 3);

//   const categoryStyles = {
//     'credit-cards': 'bg-blue-100 text-blue-700',
//     'insurance': 'bg-green-100 text-green-700',
//     'investments': 'bg-purple-100 text-purple-700',
//     'personal-finance': 'bg-orange-100 text-orange-700',
//   };

//   return (
//     <motion.div {...animationConfig.pageTransition}>
//       <Seo
//         title={article.title}
//         description={article.excerpt}
//         url={`${seoConfig.siteUrl}/blog/${article.slug}`}
//       />

//       {/* Breadcrumb */}
//       <section className="bg-white border-b border-neutral-200">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
//           <div className="flex items-center gap-2 text-sm text-neutral-600">
//             <Link to="/" className="hover:text-primary-600">Home</Link>
//             <span>›</span>
//             <Link to="/blog" className="hover:text-primary-600">Blog</Link>
//             <span>›</span>
//             <span className="text-neutral-900 font-medium line-clamp-1">{article.title}</span>
//           </div>
//         </div>
//       </section>

//       {/* Main Content */}
//       <section className="py-12 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
//             {/* Main Article - 3 columns */}
//             <div className="lg:col-span-3">
//               {/* Article Header */}
//               <div className="mb-8">
//                 <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6 leading-tight" style={{ fontFamily: 'Lato, sans-serif', fontWeight: 900 }}>
//                   {article.title}
//                 </h1>

//                 {/* Author & Meta */}
//                 <div className="flex items-center gap-4 mb-6">
//                   <div className="flex items-center gap-3">
//                     <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
//                       <span className="text-primary-600 font-bold">
//                         {article.author.name.charAt(0)}
//                       </span>
//                     </div>
//                     <div>
//                       <p className="text-sm font-semibold text-neutral-900">{article.author.name}</p>
//                       <p className="text-xs text-neutral-600">{article.author.bio}</p>
//                     </div>
//                   </div>
//                   <div className="text-sm text-neutral-600">
//                     <p>
//                       {new Date(article.publishedDate).toLocaleDateString('en-IN', {
//                         day: 'numeric',
//                         month: 'short',
//                         year: 'numeric'
//                       })}
//                     </p>
//                   </div>
//                 </div>

//                 {/* Featured Image */}
//                 <img
//                   src={article.image}
//                   alt={article.title}
//                   className="w-full h-auto rounded-xl"
//                   loading="eager"
//                 />
//               </div>

//               {/* Article Content */}
//               <div
//                 className="prose prose-lg max-w-none mb-12"
//                 dangerouslySetInnerHTML={{ __html: article.content }}
//                 style={{ fontFamily: 'Lato, sans-serif' }}
//               />

//               {/* Tags (if any) */}
//               {article.tags && (
//                 <div className="mb-8">
//                   <h3 className="text-sm font-semibold text-neutral-700 mb-3">Tags:</h3>
//                   <div className="flex flex-wrap gap-2">
//                     {article.tags.map((tag) => (
//                       <span
//                         key={tag}
//                         className="px-3 py-1 bg-neutral-100 text-neutral-700 rounded-md text-sm"
//                       >
//                         {tag}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* Sidebar - 1 column */}
//             <div className="lg:col-span-1">
//               <div className="sticky top-24 space-y-6">
//                 {/* Credit Card Comparison Widget */}
//                 <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl p-6 border-2 border-primary-200">
//                   <div className="flex items-center gap-3 mb-4">
//                     <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center">
//                       <span className="text-2xl">🛡️</span>
//                     </div>
//                     <h3 className="text-lg font-bold text-neutral-900" style={{ fontFamily: 'Lato, sans-serif' }}>
//                       Credit Card Comparison
//                     </h3>
//                   </div>

//                   <p className="text-sm text-neutral-700 mb-4 leading-relaxed" style={{ fontFamily: 'Lato, sans-serif' }}>
//                     Compare India's Best Credit Cards
//                   </p>

//                   <ul className="space-y-2 mb-5 text-sm">
//                     <li className="flex items-center gap-2">
//                       <span className="text-green-600">✓</span>
//                       <span className="text-neutral-700">No Annual Fee</span>
//                     </li>
//                     <li className="flex items-center gap-2">
//                       <span className="text-green-600">✓</span>
//                       <span className="text-neutral-700">Best for Fuel Savings</span>
//                     </li>
//                     <li className="flex items-center gap-2">
//                       <span className="text-green-600">✓</span>
//                       <span className="text-neutral-700">Top Forex Markup Waivers</span>
//                     </li>
//                   </ul>

//                   <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-neutral-900 px-6 py-3 rounded-xl font-bold transition-colors">
//                     Compare Best Cards
//                   </button>

//                   <div className="flex items-center justify-center gap-3 mt-4">
//                     <img src="/images/mastercard.png" alt="Mastercard" className="h-8" />
//                     <img src="/images/visa.png" alt="Visa" className="h-8" />
//                     <img src="/images/rupay.png" alt="RuPay" className="h-8" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Related Articles */}
//       {relatedPosts.length > 0 && (
//         <section className="py-16 bg-neutral-50 border-t border-neutral-200">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-8" style={{ fontFamily: 'Lato, sans-serif', fontWeight: 900 }}>
//               You Might Also Like
//             </h2>

//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               {relatedPosts.map((post) => (
//                 <Link key={post.id} to={`/blog/${post.slug}`}>
//                   <div className="bg-white rounded-xl overflow-hidden border border-neutral-200 hover:shadow-xl transition-all h-full flex flex-col">
//                     <img
//                       src={post.image}
//                       alt={post.title}
//                       className="w-full h-48 object-cover"
//                     />

//                     <div className="p-5 flex flex-col flex-1">
//                       <span className={`px-3 py-1 rounded-md text-xs font-semibold uppercase mb-3 self-start ${categoryStyles[post.category]}`}>
//                         {post.category.replace('-', ' ')}
//                       </span>

//                       <h3 className="text-lg font-bold text-neutral-900 mb-3 line-clamp-2 hover:text-primary-600 transition-colors" style={{ fontFamily: 'Lato, sans-serif' }}>
//                         {post.title}
//                       </h3>

//                       <p className="text-sm text-neutral-600 mb-4 line-clamp-2 flex-1" style={{ fontFamily: 'Lato, sans-serif' }}>
//                         {post.excerpt}
//                       </p>

//                       <div className="flex items-center justify-between pt-4 border-t border-neutral-200">
//                         <div className="flex items-center gap-2">
//                           <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center">
//                             <span className="text-primary-600 text-xs font-bold">
//                               {post.author.name.charAt(0)}
//                             </span>
//                           </div>
//                           <div>
//                             <p className="text-xs font-semibold text-neutral-900">{post.author.name}</p>
//                             <p className="text-xs text-neutral-500">
//                               {new Date(post.publishedDate).toLocaleDateString('en-IN', {
//                                 day: 'numeric',
//                                 month: 'short',
//                                 year: 'numeric'
//                               })}
//                             </p>
//                           </div>
//                         </div>

//                         <span className="text-primary-600 font-semibold text-sm">
//                           Read Article →
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </section>
//       )}
//     </motion.div>
//   );
// };

// export default BlogDetail;


import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { animationConfig } from '../config/animation.config';
import { seoConfig } from '../config/seo.config';
import Seo from '../components/ui/Seo';
import { blogsData } from '../data/blogs.data';

const BlogDetail = () => {
  const { slug } = useParams();
  const [loading, setLoading] = useState(true);

  // Simulate loading for better UX
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [slug]);

  // All articles combine karo taaki sab categories ke articles load ho
  const allBlogs = [
    ...(blogsData.recent || []),
    ...blogsData.featured,
    ...blogsData.topPicks,
  ].filter(
    (blog, index, self) =>
      index === self.findIndex((b) => b.slug === blog.slug)
  );

  const article =
    blogsData.topPicks.find((b) => b.slug === slug) ||
    blogsData.featured.find((b) => b.slug === slug) ||
    blogsData.recent?.find((b) => b.slug === slug);

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        {/* Breadcrumb Skeleton */}
        <section className="bg-white border-b border-neutral-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center gap-2">
              <div className="h-4 w-12 bg-neutral-200 rounded animate-pulse"></div>
              <span>›</span>
              <div className="h-4 w-12 bg-neutral-200 rounded animate-pulse"></div>
              <span>›</span>
              <div className="h-4 w-48 bg-neutral-200 rounded animate-pulse"></div>
            </div>
          </div>
        </section>

        {/* Main Content Skeleton */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              <div className="lg:col-span-3">
                {/* Title Skeleton */}
                <div className="mb-8">
                  <div className="h-12 bg-neutral-200 rounded animate-pulse mb-4"></div>
                  <div className="h-8 bg-neutral-200 rounded animate-pulse w-3/4 mb-6"></div>

                  {/* Author Skeleton */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-neutral-200 animate-pulse"></div>
                    <div className="flex-1">
                      <div className="h-4 bg-neutral-200 rounded animate-pulse w-32 mb-2"></div>
                      <div className="h-3 bg-neutral-200 rounded animate-pulse w-48"></div>
                    </div>
                  </div>

                  {/* Image Skeleton */}
                  <div className="mb-8 rounded-xl overflow-hidden bg-neutral-200 animate-pulse" style={{ paddingTop: '56.25%' }}></div>
                </div>

                {/* Content Skeleton */}
                <div className="space-y-4">
                  <div className="h-4 bg-neutral-200 rounded animate-pulse"></div>
                  <div className="h-4 bg-neutral-200 rounded animate-pulse"></div>
                  <div className="h-4 bg-neutral-200 rounded animate-pulse w-5/6"></div>
                  <div className="h-4 bg-neutral-200 rounded animate-pulse"></div>
                  <div className="h-4 bg-neutral-200 rounded animate-pulse w-4/5"></div>
                </div>
              </div>

              {/* Sidebar Skeleton */}
              <div className="lg:col-span-1">
                <div className="bg-neutral-100 rounded-xl p-6 animate-pulse">
                  <div className="h-32 bg-neutral-200 rounded mb-4"></div>
                  <div className="h-4 bg-neutral-200 rounded mb-2"></div>
                  <div className="h-4 bg-neutral-200 rounded w-3/4"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral-50">
        <div className="text-center p-8">
          <h1 className="text-3xl font-bold text-neutral-900 mb-4">Article Not Found</h1>
          <p className="text-lg text-neutral-600 mb-6">The article you're looking for doesn't exist or has been moved.</p>
          <Link
            to="/blog"
            className="inline-block px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = allBlogs
    .filter((b) => b.category === article.category && b.slug !== article.slug)
    .sort((a, b) => new Date(b.publishedDate) - new Date(a.publishedDate))
    .slice(0, 3);

  const categoryStyles = {
    'credit-cards': 'bg-blue-100 text-blue-700',
    'insurance': 'bg-green-100 text-green-700',
    'investments': 'bg-purple-100 text-purple-700',
    'personal-finance': 'bg-orange-100 text-orange-700',
  };

  return (
    <motion.div {...animationConfig.pageTransition}>
      <Seo
        title={article.title}
        description={article.metaDescription || article.excerpt}
        url={`${seoConfig.siteUrl}/blog/${article.slug}`}
        image={article.image}
      />

      {/* Breadcrumb */}
      <section className="bg-white border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-neutral-600 flex-wrap">
            <Link to="/" className="hover:text-primary-600 transition-colors">Home</Link>
            <span>›</span>
            <Link to="/blog" className="hover:text-primary-600 transition-colors">Blog</Link>
            <span>›</span>
            <span className="text-neutral-900 font-medium line-clamp-1">{article.title}</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Article */}
            <div className="lg:col-span-3">
              {/* Header */}
              <div className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6 leading-tight" style={{ fontFamily: 'Lato, sans-serif', fontWeight: 900 }}>
                  {article.title}
                </h1>

                {/* Author & Meta */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 font-bold text-lg">
                      {article.author.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-neutral-900">{article.author.name}</p>
                      <p className="text-xs text-neutral-600">{article.author.bio}</p>
                    </div>
                  </div>
                  <div className="text-sm text-neutral-600">
                    <p>
                      {new Date(article.publishedDate).toLocaleDateString('en-IN', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric'
                      })}
                      • {article.readTime}
                    </p>
                  </div>
                </div>

                {/* Featured Image – Improved */}
                <div className="mb-8 rounded-xl overflow-hidden shadow-md bg-neutral-100">
                  <div className="relative w-full pt-[56.25%]"> {/* 16:9 aspect ratio */}
                    <img
                      src={article.image}
                      alt={article.title}
                      className="absolute inset-0 w-full h-full object-contain-cover transition-transform duration-500 hover:scale-105"
                      loading="eager"
                      onError={(e) => {
                        e.target.src = '/images/placeholder-blog.jpg';
                        e.target.className = "absolute inset-0 w-full h-full object-contain bg-neutral-200";
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Excerpt */}
              <p className="text-lg md:text-xl text-neutral-700 mb-8 leading-relaxed font-medium text-justify" style={{ fontFamily: 'Lato, sans-serif' }}>
                {article.excerpt}
              </p>

              {/* Main Article Content */}
              <div
                className="prose prose-base max-w-none mb-12 prose-neutral prose-headings:text-neutral-900 text-justify prose-a:text-primary-600 hover:prose-a:text-primary-700"
                style={{ fontFamily: 'Lato, sans-serif' }}
                dangerouslySetInnerHTML={{ __html: article.content }}
              />

              {/* Tags */}
              {article.tags && article.tags.length > 0 && (
                <div className="mt-10 pt-6 border-t border-neutral-200">
                  <h4 className="text-sm font-semibold text-neutral-600 mb-3 uppercase tracking-wide">
                    Tags
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-neutral-100 text-neutral-700 rounded-full text-sm"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Credit Card Comparison Widget */}
                <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl p-6 border border-primary-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center text-white text-2xl">
                      🛡️
                    </div>
                    <h3 className="text-lg font-bold text-neutral-900" style={{ fontFamily: 'Lato, sans-serif' }}>
                      Credit Card Comparison
                    </h3>
                  </div>

                  <p className="text-sm text-neutral-700 mb-5 leading-relaxed">
                    Compare India's Best Credit Cards – No Bias, No Hidden Fees
                  </p>

                  <ul className="space-y-3 mb-6 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span className="text-neutral-700">Lifetime Free Options</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span className="text-neutral-700">Best Reward Rates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span className="text-neutral-700">Zero Forex Markup Cards</span>
                    </li>
                  </ul>

                  <Link
                    to="/credit-cards"
                    className="block w-full bg-primary-600 hover:bg-primary-700 text-white text-center py-3 rounded-xl font-semibold transition-colors"
                  >
                    Compare Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-neutral-50 border-t border-neutral-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-neutral-900 mb-10 text-center" style={{ fontFamily: 'Lato, sans-serif', fontWeight: 900 }}>
              Related Articles
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {relatedPosts.map((post) => (
                <Link key={post.id} to={`/blog/${post.slug}`}>
                  <div className="bg-white rounded-2xl overflow-hidden border border-neutral-200 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                    <div className="relative">
                      <div className="relative pt-[56.25%] overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="absolute inset-0 w-full h-full object-contain-cover"
                          loading="lazy"
                        />
                      </div>
                      {post.featured && (
                        <div className="absolute top-4 left-4 bg-yellow-400 text-neutral-900 px-3 py-1 rounded-md text-xs font-bold shadow-sm">
                          Featured
                        </div>
                      )}
                    </div>

                    <div className="p-6 flex flex-col flex-1">
                      <span className={`px-3 py-1 rounded-md text-xs font-semibold uppercase mb-3 self-start ${categoryStyles[post.category]}`}>
                        {post.category.replace('-', ' ')}
                      </span>

                      <h3 className="text-xl font-bold text-neutral-900 mb-3 line-clamp-2 hover:text-primary-600 transition-colors" style={{ fontFamily: 'Lato, sans-serif' }}>
                        {post.title}
                      </h3>

                      <p className="text-base text-neutral-600 mb-6 line-clamp-3 flex-1 leading-relaxed text-justify">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-neutral-200 mt-auto">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 font-bold">
                            {post.author.name.charAt(0)}
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-neutral-900">{post.author.name}</p>
                            <p className="text-xs text-neutral-500">
                              {new Date(post.publishedDate).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })}
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
              ))}
            </div>
          </div>
        </section>
      )}
    </motion.div>
  );
};

export default BlogDetail;