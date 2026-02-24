// // import { motion } from 'framer-motion';

// // const Hero = ({ data }) => {
// //   return (
// //     <section className="relative pt-40 md:pt-48 pb-28 md:pb-36 overflow-hidden">
// //       {/* Background Image */}
// //       {data.backgroundImage && (
// //         <div className="absolute inset-0 z-0">
// //           <img
// //             src={data.backgroundImage}
// //             alt="Hero background"
// //             className="w-full h-full object-cover blur-sm"
// //             style={{ objectPosition: 'center 40%' }}
// //           />
// //           {/* Dark overlay for readability */}
// //           <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/30" />
// //           <div className="absolute inset-0 bg-gradient-to-r " />
// //         </div>
// //       )}

// //       {/* Fallback gradient if no image */}
// //       {!data.backgroundImage && (
// //         <div className="absolute inset-0 z-0 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900">
// //           <div className="absolute inset-0 opacity-0">
// //             <div className="absolute top-20 right-20 w-96 h-96 bg-primary-500 rounded-full blur-3xl animate-pulse" />
// //             <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
// //           </div>
// //         </div>
// //       )}

// //       <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
// //         <motion.div
// //           initial={{ opacity: 0, y: 30 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.8, ease: 'easeOut' }}
// //         >
// //           {/* Badge */}
        

// //           {/* Main Title */}
// //           <h1
// //             className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg"
// //             style={{ fontFamily: 'Lato, sans-serif', fontWeight: 900 }}
// //           >
// //             {data.title}
// //           </h1>

// //           {/* Subtitle */}
// //           <p
// //             className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-md"
// //             style={{ fontFamily: 'Lato, sans-serif' }}
// //           >
// //             {data.subtitle}
// //           </p>
// //         </motion.div>
// //       </div>

// //       {/* Bottom wave */}
// //       <div className="absolute bottom-0 left-0 right-0 h-16 bg-white">
// //         <svg className="absolute bottom-0 w-full h-16" viewBox="0 0 1200 120" preserveAspectRatio="none">
// //           <path d="M0,0 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,120 L0,120 Z" fill="white" />
// //         </svg>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Hero;

// import { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// const Hero = ({ data }) => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const points = data?.points || [];

//   useEffect(() => {
//     if (!points.length) return;
//     const t = setInterval(() => setCurrentSlide((p) => (p + 1) % points.length), 3500);
//     return () => clearInterval(t);
//   }, [points.length]);

//   // Handle multi-line title (split on \n)
//   const titleLines = (data?.title || '').split('\n');

//   return (
//     <section className="bg-white py-8 md:py-10">
//       <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="bg-blue-50 rounded-2xl shadow-sm border border-neutral-100 p-6 md:p-8">

//           <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
//             <h1 className="text-2xl md:text-3xl font-extrabold text-neutral-900 mb-5 leading-snug" style={{ fontFamily: 'Lato, sans-serif' }}>
//               {titleLines.map((line, i) => (
//                 <span key={i}>{line}{i < titleLines.length - 1 && <br />}</span>
//               ))}
//             </h1>
//           </motion.div>

//           {data?.description && (
//             <ul className="space-y-2.5 mb-5">
//               {(Array.isArray(data.description) ? data.description : [data.description]).map((pt, i) => (
//                 <li key={i} className="flex items-start gap-2.5 text-sm text-neutral-600 leading-relaxed" style={{ fontFamily: 'Lato, sans-serif' }}>
//                   <span className="mt-2 w-1.5 h-1.5 rounded-full bg-neutral-400 flex-shrink-0" />
//                   {pt}
//                 </li>
//               ))}
//             </ul>
//           )}

//           {points.length > 0 && (
//             <>
//               <div className="min-h-[56px] mb-3">
//                 <AnimatePresence mode="wait">
//                   <motion.div
//                     key={currentSlide}
//                     initial={{ opacity: 0, x: 16 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     exit={{ opacity: 0, x: -16 }}
//                     transition={{ duration: 0.3 }}
//                     className="flex items-start gap-3"
//                   >
//                     <span className="text-xl flex-shrink-0">{points[currentSlide]?.icon}</span>
//                     <div>
//                       <p className="text-sm font-bold text-neutral-800" style={{ fontFamily: 'Lato, sans-serif' }}>
//                         {points[currentSlide]?.title}
//                       </p>
//                       <p className="text-xs text-neutral-500 leading-relaxed" style={{ fontFamily: 'Lato, sans-serif' }}>
//                         {points[currentSlide]?.description}
//                       </p>
//                     </div>
//                   </motion.div>
//                 </AnimatePresence>
//               </div>

//               <div className="flex items-center gap-2">
//                 {points.map((_, i) => (
//                   <button
//                     key={i}
//                     onClick={() => setCurrentSlide(i)}
//                     className={`h-2 rounded-full transition-all duration-300 ${i === currentSlide ? 'w-6 bg-primary-600' : 'w-2 bg-neutral-300'}`}
//                   />
//                 ))}
//               </div>
//             </>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = ({ data }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const points = data?.points || [];

  useEffect(() => {
    if (!points.length) return;
    const t = setInterval(() => setCurrentSlide((p) => (p + 1) % points.length), 3500);
    return () => clearInterval(t);
  }, [points.length]);

  // Split title on \n for multi-line, and find highlight word from data
  const titleLines = (data?.title || '').split('\n');
  const highlightWord = data?.highlightWord || null;

  // Render title with optional highlighted word in primary blue
  const renderTitle = (line) => {
    if (!highlightWord || !line.includes(highlightWord)) return line;
    const parts = line.split(highlightWord);
    return (
      <>
        {parts[0]}
        <span className="text-primary-600">{highlightWord}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <section className="bg-white py-8 md:py-10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── 2-col layout: left content | right image ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* ── LEFT ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Title */}
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-neutral-900 mb-6 leading-tight"
              style={{ fontFamily: 'Lato, sans-serif' }}
            >
              {titleLines.map((line, i) => (
                <span key={i}>
                  {renderTitle(line)}
                  {i < titleLines.length - 1 && <br />}
                </span>
              ))}
            </h1>

            {/* Bullet points */}
            {data?.description && (
              <ul className="space-y-3 mb-7">
                {(Array.isArray(data.description) ? data.description : [data.description]).map((pt, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-neutral-600 leading-relaxed"
                    style={{ fontFamily: 'Lato, sans-serif' }}
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-neutral-400 flex-shrink-0" />
                    {pt}
                  </li>
                ))}
              </ul>
            )}

            {/* Animated points carousel (if present) */}
            {points.length > 0 && (
              <div className="mb-7">
                <div className="min-h-[56px] mb-3">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentSlide}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -16 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-start gap-3"
                    >
                      <span className="text-xl flex-shrink-0">{points[currentSlide]?.icon}</span>
                      <div>
                        <p className="text-sm font-bold text-neutral-800" style={{ fontFamily: 'Lato, sans-serif' }}>
                          {points[currentSlide]?.title}
                        </p>
                        <p className="text-xs text-neutral-500 leading-relaxed" style={{ fontFamily: 'Lato, sans-serif' }}>
                          {points[currentSlide]?.description}
                        </p>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
                <div className="flex items-center gap-2">
                  {points.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentSlide(i)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        i === currentSlide ? 'w-6 bg-primary-600' : 'w-2 bg-neutral-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* First time user? tip card */}
          
          </motion.div>

          {/* ── RIGHT: product/hero image ── */}
          {data?.heroImage && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-sm lg:max-w-md">
                {/* Soft background blob */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-neutral-100 to-neutral-200 scale-95 blur-2xl opacity-60" />
                <img
                  src={data.heroImage}
                  alt={data.title}
                  className="relative z-10 w-full h-auto object-contain drop-shadow-2xl rounded-2xl"
                />
              </div>
            </motion.div>
          )}

        </div>
      </div>
    </section>
  );
};

export default Hero;