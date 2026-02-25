import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CTA = ({ data }) => {
  return (
    <section className="py-12 bg-primary-600 opacity-400 ">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3" style={{ fontFamily: 'Lato, sans-serif', fontWeight: 900 }}>
            {data.title}
          </h2>
          <p className="text-lg text-white/90 mb-6" style={{ fontFamily: 'Lato, sans-serif' }}>
            {data.description}
          </p>
          <Link
            to='/contact'
            className="inline-block bg-white text-primary-600 px-8 py-3 rounded-full font-bold hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            {data.buttonText} →
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;