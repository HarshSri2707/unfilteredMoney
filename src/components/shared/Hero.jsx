import { motion } from 'framer-motion';

const Hero = ({ data }) => {
  return (
    <section className="relative pt-40 md:pt-48 pb-28 md:pb-36 overflow-hidden">
      {/* Background Image */}
      {data.backgroundImage && (
        <div className="absolute inset-0 z-0">
          <img
            src={data.backgroundImage}
            alt="Hero background"
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 40%' }}
          />
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r " />
        </div>
      )}

      {/* Fallback gradient if no image */}
      {!data.backgroundImage && (
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900">
          <div className="absolute inset-0 opacity-0">
            <div className="absolute top-20 right-20 w-96 h-96 bg-primary-500 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      )}

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Badge */}
        

          {/* Main Title */}
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg"
            style={{ fontFamily: 'Lato, sans-serif', fontWeight: 900 }}
          >
            {data.title}
          </h1>

          {/* Subtitle */}
          <p
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-md"
            style={{ fontFamily: 'Lato, sans-serif' }}
          >
            {data.subtitle}
          </p>
        </motion.div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white">
        <svg className="absolute bottom-0 w-full h-16" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,120 L0,120 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;