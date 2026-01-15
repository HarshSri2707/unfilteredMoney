import { motion } from 'framer-motion';

const AllProducts = ({ products, type, title }) => {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ fontFamily: 'Lato, sans-serif', fontWeight: 900 }}
        >
          {title}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="group bg-white border-2 border-neutral-200 rounded-xl p-4 hover:border-primary-300 hover:shadow-lg transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="text-base font-bold text-neutral-900 mb-1 group-hover:text-primary-600 transition-colors" style={{ fontFamily: 'Lato, sans-serif' }}>
                    {product.name}
                  </h3>
                  <p className="text-sm text-neutral-600">{product.bank || product.provider}</p>
                </div>
                <div className="bg-amber-50 px-2 py-1 rounded-lg border border-amber-200 flex-shrink-0">
                  <span className="text-amber-600 text-xs font-bold">⭐ {product.rating}</span>
                </div>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-neutral-600">
                    {type === 'credit-cards' ? 'Fee' : 'Premium'}
                  </span>
                  <span className="font-semibold text-neutral-900">
                    {product.annualFee || product.premiumEstimate}
                  </span>
                </div>
                {product.claimSettlementRatio && (
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Claims</span>
                    <span className="font-semibold text-green-600">{product.claimSettlementRatio}</span>
                  </div>
                )}
              </div>

              <div className="mt-3 pt-3 border-t border-neutral-200">
                <p className="text-xs text-neutral-500 mb-1">Best For</p>
                <p className="text-sm text-neutral-900 font-medium leading-snug">{product.bestFor}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllProducts;