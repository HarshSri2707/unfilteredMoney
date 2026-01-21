// import { motion } from 'framer-motion';

// const TopPicks = ({ picks, type }) => {
//   return (
//     <section className="py-12 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           className="mb-8"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           <div className="flex items-center gap-3 mb-3">
//             <div className="w-1 h-8 bg-primary-600 rounded-full" />
//             <h2 className="text-2xl md:text-3xl font-bold text-neutral-900" style={{ fontFamily: 'Lato, sans-serif', fontWeight: 900 }}>
//               Editor's Top Picks
//             </h2>
//           </div>
//           <p className="text-neutral-600 ml-7" style={{ fontFamily: 'Lato, sans-serif' }}>
//             {type === 'credit-cards' 
//               ? 'Cards we actually recommend this month' 
//               : 'Policies with best claim settlement ratios'}
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {picks.slice(0, 3).map((pick, idx) => (
//             <motion.div
//               key={pick.id}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: idx * 0.15 }}
//               className="group"
//             >
//               <div className="bg-white rounded-2xl border-2 border-neutral-200 hover:border-primary-400 hover:shadow-2xl transition-all duration-300 overflow-hidden h-full flex flex-col">
//                 {/* Image/Icon Section */}
//                 <div className="relative h-48 bg-gradient-to-br from-neutral-100 to-neutral-200 overflow-hidden">
//                   <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary-50 to-accent-50">
//                     <span className="text-6xl opacity-40">
//                       {type === 'credit-cards' ? '💳' : '🛡️'}
//                     </span>
//                   </div>
                  
//                   {/* Rating Badge */}
//                   <div className="absolute top-4 right-4 bg-white px-3 py-2 rounded-xl shadow-lg border border-neutral-200">
//                     <div className="flex items-center gap-1">
//                       <span className="text-amber-500 text-sm">⭐</span>
//                       <span className="text-neutral-900 text-sm font-bold">{pick.rating}</span>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Content */}
//                 <div className="p-6 flex flex-col flex-1">
//                   <div className="mb-4">
//                     <h3 className="text-lg font-bold text-neutral-900 mb-1 group-hover:text-primary-600 transition-colors" style={{ fontFamily: 'Lato, sans-serif' }}>
//                       {pick.name}
//                     </h3>
//                     <p className="text-sm text-neutral-600">
//                       {pick.bank || pick.provider}
//                     </p>
//                   </div>

//                   {/* Key Info */}
//                   <div className="mb-4 pb-4 border-b border-neutral-200">
//                     <div className="flex items-center justify-between text-sm">
//                       <span className="text-neutral-600">
//                         {type === 'credit-cards' ? 'Annual Fee' : 'Premium'}
//                       </span>
//                       <span className="font-semibold text-neutral-900">
//                         {pick.annualFee || pick.premiumEstimate}
//                       </span>
//                     </div>
//                     {pick.claimSettlementRatio && (
//                       <div className="flex items-center justify-between text-sm mt-2">
//                         <span className="text-neutral-600">Claim Settlement</span>
//                         <span className="font-semibold text-green-600">{pick.claimSettlementRatio}</span>
//                       </div>
//                     )}
//                   </div>

//                   {/* Pros */}
//                   <div className="space-y-2 mb-4 flex-1">
//                     <p className="text-xs font-semibold text-neutral-700 uppercase tracking-wide">Why We Picked This</p>
//                     {pick.pros.slice(0, 2).map((pro, i) => (
//                       <div key={i} className="flex items-start gap-2">
//                         <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
//                           <span className="text-green-600 text-xs">✓</span>
//                         </div>
//                         <span className="text-sm text-neutral-700 leading-snug">{pro}</span>
//                       </div>
//                     ))}
//                   </div>

//                   {/* Best For */}
//                   <div className="pt-4 border-t border-neutral-200">
//                     <p className="text-xs text-neutral-500 mb-1">Best For</p>
//                     <p className="text-sm font-medium text-neutral-900 leading-snug">{pick.bestFor}</p>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TopPicks;


import { motion } from 'framer-motion';

const TopPicks = ({ picks, type }) => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-1 h-8 bg-primary-600 rounded-full" />
            <h2
              className="text-2xl md:text-3xl font-bold text-neutral-900"
              style={{ fontFamily: 'Lato, sans-serif', fontWeight: 900 }}
            >
               Top Picks
            </h2>
          </div>
          <p className="text-neutral-600 ml-7" style={{ fontFamily: 'Lato, sans-serif' }}>
            {type === 'credit-cards'
              ? 'Cards we actually recommend this month'
              : 'Policies with best claim settlement ratios'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {picks.slice(0, 3).map((pick, idx) => (
            <motion.div
              key={pick.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="group"
            >
              <div className="bg-white rounded-2xl border-2 border-neutral-200 hover:border-primary-400 hover:shadow-2xl transition-all duration-300 overflow-hidden h-full flex flex-col">
                
                {/* Image Section (icon replaced with image, UI same) */}
                <div className="relative h-48 bg-gradient-to-br from-neutral-100 to-neutral-200 overflow-hidden">
                  <img
                    src={pick.image}
                    alt={pick.name}
                    className="w-full h-full object-contain-cover"
                    loading="lazy"
                  />

                  {/* subtle overlay (same readability feel) */}
                  <div className="absolute inset-0 bg-white/10" />

                  {/* Rating Badge */}
                  <div className="absolute top-4 right-4 bg-white px-3 py-2 rounded-xl shadow-lg border border-neutral-200">
                    <div className="flex items-center gap-1">
                      <span className="text-amber-500 text-sm">⭐</span>
                      <span className="text-neutral-900 text-sm font-bold">
                        {pick.rating}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="mb-4">
                    <h3
                      className="text-lg font-bold text-neutral-900 mb-1 group-hover:text-primary-600 transition-colors"
                      style={{ fontFamily: 'Lato, sans-serif' }}
                    >
                      {pick.name}
                    </h3>
                    <p className="text-sm text-neutral-600">
                      {pick.bank || pick.provider}
                    </p>
                  </div>

                  {/* Key Info */}
                  <div className="mb-4 pb-4 border-b border-neutral-200">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-neutral-600">
                        {type === 'credit-cards' ? 'Annual Fee' : 'Premium'}
                      </span>
                      <span className="font-semibold text-neutral-900">
                        {pick.annualFee || pick.premiumEstimate}
                      </span>
                    </div>

                    {pick.claimSettlementRatio && (
                      <div className="flex items-center justify-between text-sm mt-2">
                        <span className="text-neutral-600">Claim Settlement</span>
                        <span className="font-semibold text-green-600">
                          {pick.claimSettlementRatio}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Pros */}
                  <div className="space-y-2 mb-4 flex-1">
                    <p className="text-xs font-semibold text-neutral-700 uppercase tracking-wide">
                      Why We Picked This
                    </p>
                    {pick.pros.slice(0, 2).map((pro, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-green-600 text-xs">✓</span>
                        </div>
                        <span className="text-sm text-neutral-700 leading-snug">
                          {pro}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Best For */}
                  <div className="pt-4 border-t border-neutral-200">
                    <p className="text-xs text-neutral-500 mb-1">Best For</p>
                    <p className="text-sm font-medium text-neutral-900 leading-snug">
                      {pick.bestFor}
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopPicks;
