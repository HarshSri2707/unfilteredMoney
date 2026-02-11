// import { motion } from 'framer-motion';

// const WhyItMatters = ({ data }) => {
//   return (
//     <section className="py-10 bg-gradient-to-br from-primary-50 to-accent-50">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
//           {/* Left: Heading */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-3" style={{ fontFamily: 'Lato, sans-serif', fontWeight: 900 }}>
//               {data.title}
//             </h2>
//             <p className="text-neutral-700 leading-relaxed text-justify" style={{ fontFamily: 'Lato, sans-serif' }}>
//               {data.description}
//             </p>
//           </motion.div>

//           {/* Right: Points Grid */}
//           <div className="grid grid-cols-2 gap-4">
//             {data.points.map((point, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.4, delay: idx * 0.1 }}
//                 className="bg-white rounded-xl p-4 border border-neutral-200 hover:border-primary-300 hover:shadow-md transition-all"
//               >
//                 <div className="text-3xl mb-2">{point.icon}</div>
//                 <h3 className="text-sm font-bold text-neutral-900 mb-1" style={{ fontFamily: 'Lato, sans-serif' }}>
//                   {point.title}
//                 </h3>
//                 <p className="text-xs text-neutral-600 leading-snug">{point.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyItMatters;


import { motion } from 'framer-motion';

const WhyItMatters = ({ data }) => {
  return (
    <section className="py-16 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Heading & Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-24"
          >
            {/* Icon */}
          
            
            {/* Title */}
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight" 
              style={{ fontFamily: 'Lato, sans-serif' }}
            >
              {data.title}
            </h2>
            
            {/* Description */}
            <div className="space-y-4">
              {Array.isArray(data.description) ? (
                data.description.map((para, idx) => (
                  <p 
                    key={idx}
                    className="text-gray-700 text-lg leading-relaxed" 
                    style={{ fontFamily: 'Lato, sans-serif' }}
                  >
                    {para}
                  </p>
                ))
              ) : (
                <p 
                  className="text-gray-700 text-lg leading-relaxed" 
                  style={{ fontFamily: 'Lato, sans-serif' }}
                >
                  {data.description}
                </p>
              )}
            </div>

            {/* Optional CTA */}
            {data.cta && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 px-8 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                {data.cta}
              </motion.button>
            )}
          </motion.div>

          {/* Right: Points Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {data.points.map((point, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -5, shadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-primary-400 shadow-md hover:shadow-xl transition-all group"
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-gradient-to-br from-primary-100 to-accent-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-3xl">{point.icon}</span>
                </div>
                
                {/* Title */}
                <h3 
                  className="text-lg font-bold text-gray-900 mb-2" 
                  style={{ fontFamily: 'Lato, sans-serif' }}
                >
                  {point.title}
                </h3>
                
                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyItMatters;