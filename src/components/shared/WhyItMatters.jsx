import { motion } from 'framer-motion';

const WhyItMatters = ({ data }) => {
  return (
    <section className="py-10 bg-gradient-to-br from-primary-50 to-accent-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left: Heading */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-3" style={{ fontFamily: 'Lato, sans-serif', fontWeight: 900 }}>
              {data.title}
            </h2>
            <p className="text-neutral-700 leading-relaxed text-justify" style={{ fontFamily: 'Lato, sans-serif' }}>
              {data.description}
            </p>
          </motion.div>

          {/* Right: Points Grid */}
          <div className="grid grid-cols-2 gap-4">
            {data.points.map((point, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white rounded-xl p-4 border border-neutral-200 hover:border-primary-300 hover:shadow-md transition-all"
              >
                <div className="text-3xl mb-2">{point.icon}</div>
                <h3 className="text-sm font-bold text-neutral-900 mb-1" style={{ fontFamily: 'Lato, sans-serif' }}>
                  {point.title}
                </h3>
                <p className="text-xs text-neutral-600 leading-snug">{point.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyItMatters;