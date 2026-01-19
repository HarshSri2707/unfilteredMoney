// import { motion } from 'framer-motion';

// const Categories = ({
//   categories,
//   selectedCategory,
//   setSelectedCategory,
// }) => {
//   const allCategory = {
//     id: 'all',
//     name: 'All',
//     slug: 'all',
//     icon: '📂',
//   };

//   const finalCategories = [allCategory, ...categories];

//   return (
//     <section className="py-6 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6">

//         {/* Heading – BIG & CLEAR */}
//         <motion.h2
//           className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4 text-center"
//           initial={{ opacity: 0, y: 10 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           style={{ fontFamily: 'Lato, sans-serif', fontWeight: 900 }}
//         >
//           Browse by Category
//         </motion.h2>

//         {/* Compact but readable grid */}
//         <div
//           className="
//             grid
//             grid-cols-[repeat(auto-fit,minmax(110px,1fr))]
//             gap-x-3
//             gap-y-3
//             justify-center
//             max-w-5xl
//             mx-auto
//           "
//         >
//           {finalCategories.map((category) => {
//             const isActive = selectedCategory === category.slug;

//             return (
//               <button
//                 key={category.id}
//                 onClick={() => setSelectedCategory(category.slug)}
//                 className="flex flex-col items-center text-center"
//               >
//                 {/* Rounded square – BIGGER */}
//                 <div
//                   className={`
//                     w-20 h-20
//                     rounded-2xl
//                     flex items-center justify-center
//                     transition-colors duration-200
//                     ${
//                       isActive
//                         ? 'bg-primary-600 text-white shadow-md'
//                         : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
//                     }
//                   `}
//                 >
//                   <span className="text-3xl">
//                     {category.icon}
//                   </span>
//                 </div>

//                 {/* Category name – BIGGER */}
//                 <p
//                   className={`
//                     mt-2
//                     text-[15px] md:text-[16px]
//                     font-semibold
//                     leading-tight
//                     ${
//                       isActive
//                         ? 'text-primary-600'
//                         : 'text-neutral-800'
//                     }
//                   `}
//                   style={{ fontFamily: 'Lato, sans-serif' }}
//                 >
//                   {category.name}
//                 </p>
//               </button>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Categories;

// import { motion } from "framer-motion";

// const Categories = ({ categories, selectedCategory, setSelectedCategory }) => {
//   const allCategory = {
//     id: "all",

//     name: "All",

//     slug: "all",

//     icon: "📂",
//   };

//   const finalCategories = [allCategory, ...categories];

//   // Dynamic grid class based on count

//   const totalCategories = finalCategories.length;

//   const getGridClass = () => {
//     if (totalCategories <= 3) return "grid-cols-2 md:grid-cols-3 max-w-2xl";

//     if (totalCategories === 4) return "grid-cols-2 md:grid-cols-4 max-w-3xl";

//     if (totalCategories === 5) return "grid-cols-2 md:grid-cols-5 max-w-4xl";

//     return "grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-5xl";
//   };

//   return (
//     <section className="py-8 bg-white border-b border-neutral-200">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Heading */}

//         <motion.h2
//           className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 text-center"
//           initial={{ opacity: 0, y: 10 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           style={{ fontFamily: "Lato, sans-serif", fontWeight: 900 }}
//         >
//           Browse by Category
//         </motion.h2>

//         {/* Category Grid */}

//         <div className={`grid ${getGridClass()} gap-3 mx-auto`}>
//           {finalCategories.map((category, idx) => {
//             const isActive = selectedCategory === category.slug;

//             return (
//               <motion.button
//                 key={category.id}
//                 onClick={() => setSelectedCategory(category.slug)}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: idx * 0.05 }}
//                 className="flex flex-col items-center text-center group"
//               >
//                 {/* Icon Box */}

//                 <div
//                   className={`

//                     w-20 h-20 rounded-2xl

//                     flex items-center justify-center

//                     transition-all duration-300

//                     ${
//                       isActive
//                         ? "bg-primary-600 text-white shadow-lg scale-105"
//                         : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200 hover:scale-105"
//                     }

//                   `}
//                 >
//                   <span className="text-3xl">{category.icon}</span>
//                 </div>

//                 {/* Category Name */}

//                 <p
//                   className={`

//                     mt-2 text-sm md:text-base font-semibold

//                     ${isActive ? "text-primary-600" : "text-neutral-800"}

//                   `}
//                   style={{ fontFamily: "Lato, sans-serif" }}
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


import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Categories = ({
  categories,
  selectedCategory,      // sirf active highlight ke liye (optional)
  basePath,             // "/credit-cards", "/insurance" etc.
}) => {
  const navigate = useNavigate();

  const allCategory = {
    id: "all",
    name: "All",
    slug: "all",
    icon: "📂",
  };

  const finalCategories = [allCategory, ...categories];

  const handleClick = (slug) => {
    // Hamesha category page pe redirect karo — state ko yahan manage mat karo
    const targetPath = slug === "all" 
      ? `${basePath}/all`          // ← important: /credit-cards/all
      : `${basePath}/${slug}`;

    navigate(targetPath, { replace: true });
  };

  return (
    <section className="pt-2 pb-8 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
          Browse by Category
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mx-auto">
          {finalCategories.map((category, idx) => {
            const isActive = selectedCategory === category.slug;

            return (
              <motion.button
                key={category.id}
                onClick={() => handleClick(category.slug)}
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.04 }}
              >
                <div
                  className={`w-20 h-20 rounded-2xl flex items-center justify-center transition-all
                    ${isActive ? "bg-primary-600 text-white shadow-lg scale-105" : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"}`}
                >
                  <span className="text-3xl">{category.icon}</span>
                </div>

                <p
                  className={`mt-2 font-semibold text-sm md:text-base transition-colors
                    ${isActive ? "text-primary-600" : "text-neutral-800"}`}
                >
                  {category.name}
                </p>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;
