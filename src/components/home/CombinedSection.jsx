

// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import { creditCardsData } from '../../data/creditCards.data';
// import { insuranceData } from '../../data/insurance.data';
// import { investmentsData } from '../../data/investments.data';

// const CombinedSection = () => {
//   const categories = [
//     { 
//       icon: '💳', 
//       name: 'Credit Cards', 
//       count: '50+', 
//       link: '/credit-cards', 
//       color: 'from-blue-500 to-blue-600',
//       img: '/images/credit-cards.jpg'
//     },
//     { 
//       icon: '🛡️', 
//       name: 'Insurance', 
//       count: '100+', 
//       link: '/insurance', 
//       color: 'from-green-500 to-emerald-600',
//       img: '/images/insurance.jpg'
//     },
//     { 
//       icon: '📈', 
//       name: 'Investments', 
//       count: '200+', 
//       link: '/investments', 
//       color: 'from-purple-500 to-purple-600',
//       img: '/images/investments.jpg'
//     },
//   ];

//   const topPicks = [
//     { ...creditCardsData.topPicks[0], type: 'card', img: '/picks/HDFC-Regalia.webp' },
//     { ...insuranceData.topPicks[0], type: 'insurance', img: '/picks/insurance-1.webp' },
//     { ...investmentsData.topPicks[0], type: 'investment', img: '/picks/parag-fund.webp' },
//   ];

//   return (
//     <>
//       {/* Explore Categories - Image Grid */}
//       <section className="py-8 md:py-10 bg-neutral-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.h2
//             className="text-2xl md:text-3xl font-bold text-neutral-900 mb-5 md:mb-6"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             style={{ fontFamily: 'Lato, sans-serif', fontWeight: 900 }}
//           >
//             Explore Financial Products
//           </motion.h2>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
//             {categories.map((category, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, scale: 0.95 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//               >
//                 <Link to={category.link}>
//                   <div className="group relative rounded-2xl overflow-hidden h-44 md:h-52">
//                     {/* Background Image */}
//                     <div 
//                       className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
//                       style={{ backgroundImage: `url(${category.img})` }}
//                     />
                    
//                     {/* Gradient Overlay */}
//                     <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-80 group-hover:opacity-70 transition-opacity`} />
                    
//                     {/* Content */}
//                     <div className="relative h-full p-4 md:p-5 flex flex-col justify-end">
//                       <div className="text-3xl md:text-4xl mb-2">{category.icon}</div>
//                       <h3 className="text-lg md:text-xl font-bold text-white mb-1" style={{ fontFamily: 'Lato, sans-serif' }}>
//                         {category.name}
//                       </h3>
//                       <div className="flex items-center justify-between">
//                         <p className="text-white/90 text-sm">{category.count} Products</p>
//                         <div className="flex items-center text-white font-semibold text-sm">
//                           <span>Explore</span>
//                           <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                           </svg>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </Link>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Top Picks - Card Grid */}
      // <section className="py-8 md:py-10 bg-white">
      //   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      //     <div className="mb-5 md:mb-6">
      //       <motion.h2
      //         className="text-2xl md:text-3xl font-bold text-neutral-900 mb-1"
      //         initial={{ opacity: 0, y: 20 }}
      //         whileInView={{ opacity: 1, y: 0 }}
      //         viewport={{ once: true }}
      //         style={{ fontFamily: 'Lato, sans-serif', fontWeight: 900 }}
      //       >
      //         Our Top Picks
      //       </motion.h2>
      //       <p className="text-sm text-neutral-600" style={{ fontFamily: 'Lato, sans-serif' }}>
      //         Products we actually recommend this month
      //       </p>
      //     </div>

      //     <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
      //       {topPicks.map((pick, index) => (
      //         <motion.div
      //           key={index}
      //           initial={{ opacity: 0, y: 20 }}
      //           whileInView={{ opacity: 1, y: 0 }}
      //           viewport={{ once: true }}
      //           transition={{ delay: index * 0.1 }}
      //           className="h-full"
      //         >
      //           <div className="group bg-white rounded-2xl border-2 border-neutral-200 hover:border-primary-400 hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col">
      //             {/* Image Section */}
      //             <div className="relative h-48 shrink-0 overflow-hidden">
      //               <div 
      //                 className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-100"
      //                 style={{ backgroundImage: `url(${pick.img})` }}
      //               />
      //               <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    
      //               {/* Rating Badge */}
      //               <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full shadow-lg">
      //                 <span className="text-sm font-bold text-amber-600">⭐ {pick.rating}</span>
      //               </div>
      //             </div>
                  
      //             {/* Content Section */}
      //             <div className="p-4 md:p-5 flex flex-col flex-1">
      //               <div className="mb-3">
      //                 <h3 className="text-lg md:text-xl font-bold text-neutral-900 mb-1 group-hover:text-primary-600 transition-colors" style={{ fontFamily: 'Lato, sans-serif' }}>
      //                   {pick.name}
      //                 </h3>
      //                 <p className="text-sm text-neutral-600">{pick.bank || pick.provider || pick.category}</p>
      //               </div>
                    
      //               {/* Pros */}
      //               <div className="space-y-2 mb-4">
      //                 <p className="text-xs font-semibold text-neutral-700">Why We Picked This:</p>
      //                 {pick.pros.slice(0, 2).map((pro, i) => (
      //                   <div key={i} className="flex items-start gap-2">
      //                     <div className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
      //                       <span className="text-green-600 text-xs">✓</span>
      //                     </div>
      //                     <span className="text-sm text-neutral-700 leading-snug text-justify" style={{ fontFamily: 'Lato, sans-serif' }}>{pro}</span>
      //                   </div>
      //                 ))}
      //               </div>
                    
      //               {/* Best For - Always at bottom */}
      //               <div className="pt-3 border-t border-neutral-200 mt-auto">
      //                 <p className="text-xs text-neutral-500 mb-1">Best For:</p>
      //                 <p className="text-sm font-medium text-neutral-900 leading-snug">{pick.bestFor}</p>
      //               </div>
      //             </div>
      //           </div>
      //         </motion.div>
      //       ))}
      //     </div>
      //   </div>
      // </section>
//     </>
//   );
// };

// export default CombinedSection;


import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { creditCardsData } from '../../data/creditCards.data';
import { insuranceData } from '../../data/insurance.data';
import { investmentsData } from '../../data/investments.data';

const CombinedSection = () => {
  const categories = [
    { 
      icon: '💳', 
      name: 'Credit Cards', 
      count: '50+', 
      link: '/credit-cards', 
      color: 'bg-blue-50',
      hoverColor: 'hover:bg-blue-100'
    },
    { 
      icon: '🛡️', 
      name: 'Insurance', 
      count: '100+', 
      link: '/insurance', 
      color: 'bg-green-50',
      hoverColor: 'hover:bg-green-100'
    },
    { 
      icon: '📈', 
      name: 'Investments', 
      count: '200+', 
      link: '/investments', 
      color: 'bg-purple-50',
      hoverColor: 'hover:bg-purple-100'
    },
  ];

  const topPicks = [
    { ...creditCardsData.topPicks[0], type: 'card', img: '/picks/HDFC-Regalia.webp' },
    { ...insuranceData.topPicks[0], type: 'insurance', img: '/picks/insurance-1.webp' },
    { ...investmentsData.topPicks[0], type: 'investment', img: '/picks/parag-fund.webp' },
  ];

  return (
    <>
      {/* Explore Categories - Simple Icon Cards */}
      {/* Explore Financial Products */}
{/* Explore Financial Products — Refined Utility */}
<section className="py-10 md:py-12 bg-white">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Heading */}
    <motion.div
      className="mb-8 text-center"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h2
        className="text-2xl md:text-3xl font-extrabold text-neutral-900"
        style={{ fontFamily: 'Lato, sans-serif' }}
      >
        Explore Financial Products
      </h2>
    </motion.div>

    {/* Icons Grid */}
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-8 gap-x-6 place-items-center">
      

      {categories.map((item, index) => (
        <motion.div
          key={index}
          whileHover={{ y: -4 }}
          transition={{ duration: 0.25 }}
          className="flex flex-col items-center text-center cursor-pointer group w-full max-w-[160px]"
        >
           <Link to={item.link}>
          {/* Icon Wrapper */}
          <div
            className={`
              w-20 h-20 md:w-24 md:h-24
              rounded-full
              flex items-center justify-center
              mb-3
              transition-transform duration-300
              ${item.color}
              group-hover:scale-105
            `}
          >
            <span className="text-3xl md:text-4xl">
              {item.icon}
            </span>
          </div>

          {/* Title */}
          <p className="text-sm md:text-base font-semibold text-neutral-900 leading-tight">
            {item.name}
          </p>

          {/* Subtext — force single line */}
          <p className="text-xs text-neutral-500 mt-0.5 whitespace-nowrap">
            {item.count} products
          </p>
          </Link>
        </motion.div>
      ))}

    </div>
  </div>
</section>




      {/* Top Picks - Integrated Image Design */}
      {/* Top Picks - CLEAN & CONSISTENT */}
      <section className="py-8 md:py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-5 md:mb-6">
            <motion.h2
              className="text-2xl md:text-3xl font-bold text-neutral-900 mb-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ fontFamily: 'Lato, sans-serif', fontWeight: 900 }}
            >
              Our Top Picks
            </motion.h2>
            <p className="text-sm text-neutral-600" style={{ fontFamily: 'Lato, sans-serif' }}>
              Products we actually recommend this month
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {topPicks.map((pick, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="h-full"
              >
                <div className="group bg-white rounded-2xl border-2 border-neutral-200 hover:border-primary-400 hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col">
                  {/* Image Section */}
                {/* Image Section */}
<div className="relative h-48 w-full shrink-0 overflow-hidden bg-neutral-50 flex items-center justify-center">
  <img
    src={pick.img}
    alt={pick.name}
    className="w-full h-full object-contain-cover transition-transform duration-300"
  />

  {/* Gradient Overlay (optional) */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />

  {/* Rating Badge */}
  <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full shadow-lg">
    <span className="text-sm font-bold text-amber-600">⭐ {pick.rating}</span>
  </div>
</div>

                  
                  {/* Content Section */}
                  <div className="p-4 md:p-5 flex flex-col flex-1">
                    <div className="mb-3">
                      <h3 className="text-lg md:text-xl font-bold text-neutral-900 mb-1 group-hover:text-primary-600 transition-colors" style={{ fontFamily: 'Lato, sans-serif' }}>
                        {pick.name}
                      </h3>
                      <p className="text-sm text-neutral-600">{pick.bank || pick.provider || pick.category}</p>
                    </div>
                    
                    {/* Pros */}
                    <div className="space-y-2 mb-4">
                      <p className="text-xs font-semibold text-neutral-700">Why We Picked This:</p>
                      {pick.pros.slice(0, 2).map((pro, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <div className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-green-600 text-xs">✓</span>
                          </div>
                          <span className="text-sm text-neutral-700 leading-snug text-justify" style={{ fontFamily: 'Lato, sans-serif' }}>{pro}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Best For - Always at bottom */}
                    <div className="pt-3 border-t border-neutral-200 mt-auto">
                      <p className="text-xs text-neutral-500 mb-1">Best For:</p>
                      <p className="text-sm font-medium text-neutral-900 leading-snug">{pick.bestFor}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
};

export default CombinedSection;