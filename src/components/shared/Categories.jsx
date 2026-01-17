import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Categories = ({ categories, baseUrl }) => {
  const colors = [
    'from-blue-500 to-blue-600',
    'from-green-500 to-emerald-600',
    'from-purple-500 to-purple-600',
    'from-orange-500 to-orange-600',
    'from-pink-500 to-rose-600',
    'from-indigo-500 to-indigo-600',
    'from-teal-500 to-teal-600',
    'from-red-500 to-red-600'
  ];

  const totalCategories = categories.length;
  
  // Dynamic grid class based on count
  const getGridClass = () => {
    if (totalCategories === 1) return 'grid-cols-1 max-w-md mx-auto';
    if (totalCategories === 2) return 'grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto';
    if (totalCategories === 3) return 'grid-cols-1 md:grid-cols-3 max-w-4xl mx-auto';
    if (totalCategories === 4) return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4';
    if (totalCategories <= 6) return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
    // For 7+ categories
    return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4';
  };

  return (
    <section className="py-12 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-neutral-900 mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ fontFamily: 'Lato, sans-serif', fontWeight: 900 }}
        >
          Browse by Category
        </motion.h2>

        <div className={`grid ${getGridClass()} gap-5`}>
          {categories.map((category, idx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <Link to={`${baseUrl}/${category.slug}`}>
                <div className={`group relative bg-gradient-to-br ${colors[idx % colors.length]} rounded-2xl p-6 overflow-hidden h-full min-h-[180px] flex flex-col justify-end transition-transform duration-300 hover:scale-105`}>
                  {/* Decorative circle */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10" />
                  
                  <div className="relative">
                    <div className="text-4xl mb-3">{category.icon}</div>
                    <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: 'Lato, sans-serif' }}>
                      {category.name}
                    </h3>
                    <p className="text-white/90 text-sm mb-3 leading-relaxed text-justify">
                      {category.description}
                    </p>
                    <div className="flex items-center text-white font-semibold text-sm">
                      <span>Explore</span>
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Category count indicator (optional) */}
        {totalCategories > 6 && (
          <motion.p
            className="text-center text-sm text-neutral-500 mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{ fontFamily: 'Lato, sans-serif' }}
          >
            Showing all {totalCategories} categories
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default Categories;