import { useState } from 'react';
import { motion } from 'framer-motion';
import { animationConfig } from '../config/animation.config';
import { seoConfig } from '../config/seo.config';
import Seo from '../components/ui/Seo';
import Button from '../components/ui/Button';
import { AnimatePresence } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Form submitted:', formData);
    alert('Thank you for reaching out! We\'ll get back to you within 24 hours.');
    
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [openIndex, setOpenIndex] = useState(null);

const toggleFaq = (index) => {
  setOpenIndex(openIndex === index ? null : index);
};


  const contactInfo = [
    {
      icon: '📧',
      title: 'Email Us',
      content: 'hello@unfilteredmoney.com',
      subtitle: 'We reply within 24 hours',
      link: 'mailto:hello@unfilteredmoney.com',
    },
    {
      icon: '💬',
      title: 'Social Media',
      content: 'Follow us for daily updates',
      subtitle: 'Twitter & LinkedIn',
      link: 'https://twitter.com/unfilteredmoney',
    },
    {
      icon: '📍',
      title: 'Location',
      content: 'Mumbai, Maharashtra',
      subtitle: 'India',
      link: null,
    },
  ];

  const faqs = [
    {
      q: 'Do you provide personalized financial advice?',
      a: 'We provide educational content and unbiased reviews. For personalized advice, consult with a SEBI-registered financial advisor.'
    },
    {
      q: 'How do you make money?',
      a: 'We\'re supported by display advertising. We don\'t take commissions from financial products, ensuring unbiased reviews.'
    },
    {
      q: 'Can I request a product review?',
      a: 'Yes! We welcome suggestions. Use the form above to tell us which products you\'d like us to review.'
    }
  ];

  return (
    <motion.div {...animationConfig.pageTransition}>
      <Seo
        title={seoConfig.pages.contact.title}
        description={seoConfig.pages.contact.description}
        keywords={seoConfig.pages.contact.keywords}
        url={`${seoConfig.siteUrl}/contact`}
      />

      {/* Hero Section - Enhanced */}
      <section className="relative pt-20 md:pt-24 pb-16 overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600">
        {/* Animated background elements */}
  <div className="absolute inset-0 overflow-hidden">
  <img
    src="/images/contact.avif"
    alt=""
    className="w-full h-full object-cover blur-sm"
    loading="lazy"
  />

  {/* PRO OVERLAY */}
  <div className="absolute inset-0 bg-gradient-to-b 
    from-black/60 via-black/45 to-black/60" />
</div>




        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <span className="inline-block px-4 py-2 bg-white/80 text-neutral-900 backdrop-blur-sm  rounded-full text-sm font-semibold mb-6 shadow-lg">
              💬 Get in Touch
            </span>

            {/* Main Heading */}
            <h1
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: 'Lato, sans-serif', fontWeight: 900 }}
            >
              Have Questions?<br />We're Here to Help
            </h1>

            {/* Subheading */}
            <p
              className="text-lg md:text-2xl text-white max-w-2xl mx-auto mb-8 leading-relaxed"
              style={{ fontFamily: 'Lato, sans-serif' }}
            >
              Whether you need expert advice or have feedback, our team is ready to assist you.
            </p>

            {/* Quick Stats */}
          
          </motion.div>
        </div>

        {/* Wave decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-white">
          <svg className="absolute bottom-0 w-full h-12" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,120 L0,120 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Contact Form & Info - Side by Side */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left: Form (2/3 width on desktop) */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-2" style={{ fontFamily: 'Lato, sans-serif', fontWeight: 900 }}>
                    Send Us a Message
                  </h2>
                  <p className="text-neutral-600 text-justify" style={{ fontFamily: 'Lato, sans-serif' }}>
                    Fill out the form and we'll respond within 24 hours
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-neutral-700 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-neutral-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-neutral-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                      placeholder="Credit Card Recommendation"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-neutral-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border-2 border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="primary" 
                    size="lg" 
                    fullWidth
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message →'}
                  </Button>

                  <p className="text-xs text-neutral-500 text-center" style={{ fontFamily: 'Lato, sans-serif' }}>
                    🔒 We respect your privacy and will never share your information
                  </p>
                </form>
              </motion.div>
            </div>

            {/* Right: Contact Info Cards (1/3 width on desktop) */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-4"
              >
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-5 border-2 border-primary-100 hover:border-primary-300 transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                        <span className="text-2xl">{info.icon}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-base font-bold text-neutral-900 mb-1" style={{ fontFamily: 'Lato, sans-serif' }}>
                          {info.title}
                        </h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-sm text-primary-600 hover:text-primary-700 font-semibold block mb-1"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-sm text-neutral-700 font-medium mb-1">{info.content}</p>
                        )}
                        <p className="text-xs text-neutral-600">{info.subtitle}</p>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Office Hours Card */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-5 border-2 border-green-200">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                      <span className="text-2xl">⏰</span>
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-neutral-900 mb-1" style={{ fontFamily: 'Lato, sans-serif' }}>
                        Response Hours
                      </h3>
                      <p className="text-sm text-neutral-700 font-medium">Mon - Sat</p>
                      <p className="text-xs text-neutral-600">9:00 AM - 7:00 PM IST</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Accordion Style */}
   <section className="py-10 bg-neutral-50">
  <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.h2
      className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6 text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      style={{ fontFamily: 'Lato, sans-serif', fontWeight: 900 }}
    >
      Frequently Asked Questions
    </motion.h2>

    <div className="space-y-3">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="bg-white rounded-xl border-2 border-neutral-200 overflow-hidden"
          >
            {/* QUESTION */}
            <button
              onClick={() => toggleFaq(index)}
              className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-neutral-50 transition-colors"
            >
              <span
                className="text-base font-bold text-neutral-900 pr-4"
                style={{ fontFamily: 'Lato, sans-serif' }}
              >
                {faq.q}
              </span>

              <motion.svg
                className="w-5 h-5 text-primary-600 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.25 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </motion.svg>
            </button>

            {/* ANSWER */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div
                    className="px-5 pb-4 pt-4 border-t border-neutral-200 text-sm text-neutral-700 leading-relaxed text-justify"
                    style={{ fontFamily: 'Lato, sans-serif' }}
                  >
                    {faq.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  </div>
</section>


    </motion.div>
  );
};

export default Contact;