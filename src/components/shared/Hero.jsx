// import { motion } from 'framer-motion';

// const Hero = ({ data }) => {
//   return (
//     <section className="relative pt-40 md:pt-48 pb-28 md:pb-36 overflow-hidden">
//       {/* Background Image */}
//       {data.backgroundImage && (
//         <div className="absolute inset-0 z-0">
//           <img
//             src={data.backgroundImage}
//             alt="Hero background"
//             className="w-full h-full object-cover blur-sm"
//             style={{ objectPosition: 'center 40%' }}
//           />
//           {/* Dark overlay for readability */}
//           <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/30" />
//           <div className="absolute inset-0 bg-gradient-to-r " />
//         </div>
//       )}

//       {/* Fallback gradient if no image */}
//       {!data.backgroundImage && (
//         <div className="absolute inset-0 z-0 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900">
//           <div className="absolute inset-0 opacity-0">
//             <div className="absolute top-20 right-20 w-96 h-96 bg-primary-500 rounded-full blur-3xl animate-pulse" />
//             <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
//           </div>
//         </div>
//       )}

//       <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: 'easeOut' }}
//         >
//           {/* Badge */}
        

//           {/* Main Title */}
//           <h1
//             className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg"
//             style={{ fontFamily: 'Lato, sans-serif', fontWeight: 900 }}
//           >
//             {data.title}
//           </h1>

//           {/* Subtitle */}
//           <p
//             className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-md"
//             style={{ fontFamily: 'Lato, sans-serif' }}
//           >
//             {data.subtitle}
//           </p>
//         </motion.div>
//       </div>

//       {/* Bottom wave */}
//       <div className="absolute bottom-0 left-0 right-0 h-16 bg-white">
//         <svg className="absolute bottom-0 w-full h-16" viewBox="0 0 1200 120" preserveAspectRatio="none">
//           <path d="M0,0 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,120 L0,120 Z" fill="white" />
//         </svg>
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

  // Handle multi-line title (split on \n)
  const titleLines = (data?.title || '').split('\n');

  return (
    <section className="bg-white py-8 md:py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-50 rounded-2xl shadow-sm border border-neutral-100 p-6 md:p-8">

          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-2xl md:text-3xl font-extrabold text-neutral-900 mb-5 leading-snug" style={{ fontFamily: 'Lato, sans-serif' }}>
              {titleLines.map((line, i) => (
                <span key={i}>{line}{i < titleLines.length - 1 && <br />}</span>
              ))}
            </h1>
          </motion.div>

          {data?.description && (
            <ul className="space-y-2.5 mb-5">
              {(Array.isArray(data.description) ? data.description : [data.description]).map((pt, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-neutral-600 leading-relaxed" style={{ fontFamily: 'Lato, sans-serif' }}>
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-neutral-400 flex-shrink-0" />
                  {pt}
                </li>
              ))}
            </ul>
          )}

          {points.length > 0 && (
            <>
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
                    className={`h-2 rounded-full transition-all duration-300 ${i === currentSlide ? 'w-6 bg-primary-600' : 'w-2 bg-neutral-300'}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;