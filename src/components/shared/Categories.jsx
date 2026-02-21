
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";

// const Categories = ({
//   categories,
//   selectedCategory,      // sirf active highlight ke liye (optional)
//   basePath,             // "/credit-cards", "/insurance" etc.
// }) => {
//   const navigate = useNavigate();

//   const allCategory = {
//     id: "all",
//     name: "All",
//     slug: "all",
//     icon: "📂",
//   };

//   const finalCategories = [allCategory, ...categories];

//   const handleClick = (slug) => {
//     // Hamesha category page pe redirect karo — state ko yahan manage mat karo
//     const targetPath = slug === "all" 
//       ? `${basePath}/all`          // ← important: /credit-cards/all
//       : `${basePath}/${slug}`;

//     navigate(targetPath, { replace: true });
//   };

//   return (
//     <section className="pt-2 pb-8 bg-white border-b border-neutral-200">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
//           Browse by Category
//         </motion.h2>

//         <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mx-auto">
//           {finalCategories.map((category, idx) => {
//             const isActive = selectedCategory === category.slug;

//             return (
//               <motion.button
//                 key={category.id}
//                 onClick={() => handleClick(category.slug)}
//                 className="flex flex-col items-center"
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: idx * 0.04 }}
//               >
//                 <div
//                   className={`w-20 h-20 rounded-2xl flex items-center justify-center transition-all
//                     ${isActive ? "bg-primary-600 text-white shadow-lg scale-105" : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"}`}
//                 >
//                   <span className="text-3xl">{category.icon}</span>
//                 </div>

//                 <p
//                   className={`mt-2 font-semibold text-sm md:text-base transition-colors
//                     ${isActive ? "text-primary-600" : "text-neutral-800"}`}
//                 >
//                   {category.name}
//                 </p>
//               </motion.button>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Categories;


import { motion } from 'framer-motion';

const Categories = ({ categories, selectedCategory, setSelectedCategory }) => {
  const allCategory = { id: 'all', name: 'All', slug: 'all' };
  const finalCategories = [allCategory, ...( categories || [])];

  return (
    <section className="bg-white py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap items-center gap-2">
          {finalCategories.map((category, idx) => {
            const isActive = selectedCategory === category.slug;
            return (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory?.(category.slug)}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.04 }}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold border transition-all duration-200 whitespace-nowrap ${
                  isActive
                    ? 'bg-primary-600 text-white border-primary-600 shadow-sm'
                    : 'bg-white text-neutral-700 border-neutral-300 hover:border-primary-400 hover:text-primary-600'
                }`}
                style={{ fontFamily: 'Lato, sans-serif' }}
              >
                {category.name}
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;