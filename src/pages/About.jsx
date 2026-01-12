import { motion } from 'framer-motion';
import { animationConfig } from '../config/animation.config';
import { seoConfig } from '../config/seo.config';
import Seo from '../components/ui/Seo';
import Card from '../components/ui/Card';

const About = () => {
  const team = [
    {
      name: 'Priya Sharma',
      role: 'Co-Founder & Credit Card Expert',
      experience: '10+ years in Banking & Credit Operations',
      image: '👩‍💼',
    },
    {
      name: 'Rajesh Kumar',
      role: 'Co-Founder & Insurance Specialist',
      experience: '12+ years in Insurance Underwriting',
      image: '👨‍💼',
    },
    {
      name: 'Amit Verma',
      role: 'Investment Advisor',
      experience: 'SEBI Registered, 8+ years in Wealth Management',
      image: '👨‍💻',
    },
  ];

  const values = [
    {
      icon: '🎯',
      title: 'Transparency',
      description: 'We tell you the ugly truth, not just what sounds good.',
    },
    {
      icon: '📊',
      title: 'Data-Driven',
      description: 'Every recommendation is backed by thorough analysis.',
    },
    {
      icon: '🤝',
      title: 'Trust',
      description: 'We survive on trust, not hidden agendas or commissions.',
    },
  ];

  return (
    <motion.div
      {...animationConfig.pageTransition}
    >
      <Seo
        title={seoConfig.pages.about.title}
        description={seoConfig.pages.about.description}
        keywords={seoConfig.pages.about.keywords}
        url={`${seoConfig.siteUrl}/about`}
      />

      {/* Hero Section */}
      <motion.section
        className="pt-24 pb-16 bg-gradient-to-br from-primary-50 to-accent-50"
        {...animationConfig.sectionReveal}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            We Are the Financial Friends Who Tell You the Ugly Truth
          </h1>
          <p className="text-xl text-neutral-600 leading-relaxed">
            In India, financial advice is often just a sales pitch in disguise. Your bank relationship manager wants to sell you a ULIP. Your uncle wants you to buy property. The internet is flooded with "sponsored" top 10 lists.
          </p>
        </div>
      </motion.section>

      {/* Story Section */}
      <motion.section
        className="py-16 bg-white"
        {...animationConfig.sectionReveal}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-neutral-900 mb-6">Our Story</h2>
          <div className="prose prose-lg max-w-none text-neutral-600">
            <p className="mb-4">
              UnfilteredMoney.com was born out of frustration and empathy for people like you. We were tired of seeing hardworking Indians (including our friends and family members) lose money to hidden fees, terrible insurance exclusions, and sub-par investment schemes.
            </p>
            <p>
              Every financial product comes with fine print. At UnfilteredMoney, we give you the magnifying glass to make well-informed decisions and secure your financial future.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Mission & Values */}
      <motion.section
        className="py-16 bg-neutral-50"
        {...animationConfig.sectionReveal}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">Our Mission</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              To democratize transparent financial intelligence. We don't just tell you what to buy; we tell you <strong>why</strong> and, more importantly, <strong>why not</strong>.
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
            variants={animationConfig.staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {values.map((value, index) => (
              <motion.div key={index} variants={animationConfig.staggerItem}>
                <Card>
                  <div className="p-8 text-center">
                    <div className="text-5xl mb-4">{value.icon}</div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-neutral-600">{value.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section
        className="py-16 bg-white"
        {...animationConfig.sectionReveal}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">Meet the Team</h2>
            <p className="text-lg text-neutral-600">
              Ex-bankers, insurance underwriters, and registered investment advisors
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={animationConfig.staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {team.map((member, index) => (
              <motion.div key={index} variants={animationConfig.staggerItem}>
                <Card>
                  <div className="p-8 text-center">
                    <div className="text-7xl mb-4">{member.image}</div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-primary-600 font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-sm text-neutral-600">{member.experience}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Expertise Section */}
      <motion.section
        className="py-16 bg-gradient-to-br from-primary-600 to-accent-600 text-white"
        {...animationConfig.sectionReveal}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">What Sets Us Apart</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-2">Experience</h3>
              <p className="text-primary-100">
                Our team comprises ex-bankers, insurance underwriters, and registered investment advisors who understand the nitty-gritty of the Indian financial system.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Expertise</h3>
              <p className="text-primary-100">
                Every piece of information is fact-checked against IRDAI and SEBI circulars and is verifiable.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Trust</h3>
              <p className="text-primary-100">
                We survive on trust, not hidden agendas. No product placements, no affiliate links that compromise our advice.
              </p>
            </div>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default About;