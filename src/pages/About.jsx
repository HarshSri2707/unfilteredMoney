
import { motion } from 'framer-motion';
import { animationConfig } from '../config/animation.config';
import { seoConfig } from '../config/seo.config';
import Seo from '../components/ui/Seo';

const About = () => {
  const team = [
    {
      name: 'Priya Sharma',
      role: 'Co-Founder & Credit Card Expert',
      experience: '10+ years in Banking',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
    },
    {
      name: 'Rajesh Kumar',
      role: 'Co-Founder & Insurance Specialist',
      experience: '12+ years in Insurance',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop',
    },
    {
      name: 'Amit Verma',
      role: 'Investment Advisor',
      experience: 'SEBI Registered, 8+ years',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop',
    },
  ];

  const values = [
    { icon: '🎯', title: 'Transparency', description: 'We tell you the ugly truth, not just what sounds good' },
    { icon: '📊', title: 'Data-Driven', description: 'Every recommendation is backed by thorough analysis' },
    { icon: '🤝', title: 'Trust', description: 'We survive on trust, not hidden agendas' },
  ];

  const stats = [
    { number: '50K+', label: 'Monthly Readers' },
    { number: '500+', label: 'Products Reviewed' },
    { number: '30+', label: 'Years Combined Experience' },
  ];

  return (
    <motion.div {...animationConfig.pageTransition}>
      <Seo
        title={seoConfig.pages.about.title}
        description={seoConfig.pages.about.description}
        keywords={seoConfig.pages.about.keywords}
        url={`${seoConfig.siteUrl}/about`}
      />

      {/* Hero Section with Parallax Image Effect */}
      <section className="relative pt-20 md:pt-24 pb-16 md:pb-20 overflow-hidden bg-neutral-900">
        {/* Background Image with Proper Positioning */}
<div className="absolute inset-0 overflow-hidden ">
  <img
    src="/images/about-banner.webp"
    alt=""
    className="w-full h-full object-cover"
    loading="lazy"
  />

  {/* PRO OVERLAY */}
  <div className="absolute inset-0 bg-gradient-to-b 
    from-black/60 via-black/45 to-black/60" />
</div>


        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Badge */}
            

            {/* Main Heading */}
            <h1
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray mb-6 leading-tight text-white"
              style={{ fontFamily: 'Lato, sans-serif', fontWeight: 900 }}
            >
              We Are the Financial Friends Who Tell You the{' '}
              <span className="text-blackelative inline-block">
                Ugly Truth
                {/* <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
                  <path d="M0 4C50 8 150 0 200 4" stroke="currentColor" strokeWidth="3" />
                </svg> */}
              </span>
            </h1>

            {/* Subheading */}
            <p
              className="text-lg md:text-xl lg:text-2xl text-white font-bold leading-relaxed max-w-3xl mx-auto mb-8 "
              style={{ fontFamily: 'Lato, sans-serif' }}
            >
              In India, financial advice is often just a sales pitch in disguise. We're here to change that.
            </p>

            {/* Stats Row */}
           
          </motion.div>
        </div>

        {/* Bottom wave decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-white">
          <svg className="absolute bottom-0 w-full h-12" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,120 L0,120 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Story Section - With Icons */}
      <section className="pt-4 pb-6 md:pb-10 md:pt-2 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
             
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900" style={{ fontFamily: 'Lato, sans-serif', fontWeight: 900 }}>
                Our Story
              </h2>
            </div>
            
            <div className="space-y-4 text-neutral-700 leading-relaxed" style={{ fontFamily: 'Lato, sans-serif' }}>
              <p className="text-base md:text-lg text-justify">
                UnfilteredMoney.com was born out of <strong>frustration and empathy</strong>. We were tired of seeing hardworking Indians 
                (including our friends and family) lose money to hidden fees, terrible insurance exclusions, and sub-par investment schemes.
              </p>
              <p className="text-base md:text-lg text-justify">
                Your bank relationship manager wants to sell you a ULIP. Your uncle wants you to buy property. 
                The internet is flooded with "sponsored" top 10 lists. <strong>We're different.</strong>
              </p>
              
              {/* Highlighted Box */}
              <div className="bg-primary-50 border-l-4 border-primary-500 p-5 md:p-6 rounded-r-xl my-6">
                <p className="text-base md:text-lg font-semibold text-neutral-900 leading-relaxed text-justify">
                  💡 Every financial product comes with fine print. At UnfilteredMoney, we give you the magnifying glass 
                  to make well-informed decisions and secure your financial future.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section - Gradient Background */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
            
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4" style={{ fontFamily: 'Lato, sans-serif', fontWeight: 900 }}>
                Democratising Financial Intelligence
              </h2>
              <p className="text-lg md:text-xl text-neutral-700 max-w-3xl mx-auto text-justify" style={{ fontFamily: 'Lato, sans-serif' }}>
                We don't just tell you <strong>what</strong> to buy; we tell you <strong>why</strong> and, 
                more importantly, <strong className="text-primary-600">why not</strong>.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-primary-200"
                whileHover={{ y: -8 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-4xl">{value.icon}</span>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-neutral-900 mb-3" style={{ fontFamily: 'Lato, sans-serif' }}>
                  {value.title}
                </h3>
                <p className="text-sm md:text-base text-neutral-600 leading-relaxed text-justify" style={{ fontFamily: 'Lato, sans-serif' }}>
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

       {/* What Sets Us Apart - Enhanced */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 md:mb-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: 'Lato, sans-serif', fontWeight: 900 }}>
              What Sets Us Apart
            </h2>
            <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto" style={{ fontFamily: 'Lato, sans-serif' }}>
              We combine deep industry knowledge with unwavering commitment to truth
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { title: 'Experience', icon: '🎓', text: 'Deep understanding of the Indian financial system' },
              { title: 'Expertise', icon: '✅', text: 'Fact-checked against IRDAI and SEBI circulars' },
              { title: 'Trust', icon: '🔒', text: 'No product placements, no compromised advice' }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'Lato, sans-serif' }}>
                  {item.title}
                </h3>
                <p className="text-white/90 leading-relaxed text-justify" style={{ fontFamily: 'Lato, sans-serif' }}>
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section - Enhanced */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
             
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-3" style={{ fontFamily: 'Lato, sans-serif', fontWeight: 900 }}>
                Meet the Experts
              </h2>
              <p className="text-base md:text-lg text-neutral-600" style={{ fontFamily: 'Lato, sans-serif' }}>
                Ex-bankers, insurance underwriters, and registered investment advisors
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group text-center"
              >
                <div className="relative mb-5 mx-auto w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden shadow-xl ring-4 ring-white group-hover:ring-primary-200 transition-all duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="w-full h-full bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center" style={{ display: 'none' }}>
                    <span className="text-6xl">👤</span>
                  </div>
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-600/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <span className="text-white text-sm font-semibold">View Profile</span>
                  </div>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-neutral-900 mb-1" style={{ fontFamily: 'Lato, sans-serif' }}>
                  {member.name}
                </h3>
                <p className="text-sm md:text-base text-primary-600 font-semibold mb-1" style={{ fontFamily: 'Lato, sans-serif' }}>
                  {member.role}
                </p>
                <p className="text-xs md:text-sm text-neutral-600" style={{ fontFamily: 'Lato, sans-serif' }}>
                  {member.experience}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     
    </motion.div>
  );
};

export default About;