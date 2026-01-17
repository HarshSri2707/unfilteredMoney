

import { motion } from 'framer-motion';
import {
  Search,
  Scale,
  Landmark,
  BadgeCheck,
} from 'lucide-react';
import Card from '../ui/Card';

const HowItWorks = () => {
  const steps = [
    {
      title: 'Deep Research',
      description: 'Every policy & clause is analyzed line by line to find hidden terms.',
      icon: Search,
    },
    {
      title: 'Unbiased Comparison',
      description: 'No sponsored rankings. We compare products objectively and honestly.',
      icon: Scale,
    },
    {
      title: 'India-First Lens',
      description: 'Tax laws, RBI rules, and local market realities are always considered.',
      icon: Landmark,
    },
    {
      title: 'Zero Commission',
      description: 'No incentives from banks. Just brutally honest financial reviews for you.',
      icon: BadgeCheck,
    },
  ];

  return (
    <section className="py-10 bg-neutral-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">

        {/* LEFT CONTENT */}
        <motion.div
          className="lg:pt-4"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900 mb-3 leading-tight">
            How We Evaluate <br />
            <span className="text-primary-600">Financial Products?</span>
          </h2>

          <p className="text-base text-neutral-600 leading-relaxed max-w-sm mb-4 text-justify">
            Our process is designed to expose hidden costs before they hit your wallet.
          </p>

          <div className="h-1 w-12 bg-primary-600 rounded-full" />
        </motion.div>

        {/* RIGHT CARDS */}
        <div className="space-y-3">
          {steps.map((step, idx) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
              >
                <Card className="p-5 rounded-xl bg-white border border-neutral-100 hover:border-primary-200 shadow-sm transition-all">
                  <div className="flex items-start gap-4">

                    {/* ICON */}
                    <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center text-primary-600">
                      <Icon size={20} strokeWidth={2.2} />
                    </div>

                    {/* TEXT */}
                    <div>
                      <h3 className="font-bold text-lg text-neutral-900 mb-1">
                        {step.title}
                      </h3>
                      <p className="text-sm text-neutral-500 leading-snug text-justify">
                        {step.description}
                      </p>
                    </div>

                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
