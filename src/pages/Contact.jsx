import { useState } from 'react';
import { motion } from 'framer-motion';
import { animationConfig } from '../config/animation.config';
import { seoConfig } from '../config/seo.config';
import Seo from '../components/ui/Seo';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for reaching out! We\'ll get back to you soon.');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      content: 'hello@unfilteredmoney.com',
      link: 'mailto:hello@unfilteredmoney.com',
    },
    {
      icon: '📍',
      title: 'Address',
      content: 'Mumbai, Maharashtra, India',
      link: null,
    },
    {
      icon: '💬',
      title: 'Social Media',
      content: 'Follow us on Twitter & LinkedIn',
      link: 'https://twitter.com/unfilteredmoney',
    },
  ];

  return (
    <motion.div
      {...animationConfig.pageTransition}
    >
      <Seo
        title={seoConfig.pages.contact.title}
        description={seoConfig.pages.contact.description}
        keywords={seoConfig.pages.contact.keywords}
        url={`${seoConfig.siteUrl}/contact`}
      />

      {/* Hero Section */}
      <motion.section
        className="pt-24 pb-16 bg-gradient-to-br from-primary-50 to-accent-50"
        {...animationConfig.sectionReveal}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-neutral-600">
              Have questions about financial products? Need expert advice? We're here to help.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Contact Info Cards */}
      <motion.section
        className="py-16 bg-white"
        {...animationConfig.sectionReveal}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={animationConfig.staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {contactInfo.map((info, index) => (
              <motion.div key={index} variants={animationConfig.staggerItem}>
                <Card hover>
                  <div className="p-8 text-center">
                    <div className="text-5xl mb-4">{info.icon}</div>
                    <h3 className="text-lg font-bold text-neutral-900 mb-2">
                      {info.title}
                    </h3>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-primary-600 hover:text-primary-700 transition-colors"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-neutral-600">{info.content}</p>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Form */}
      <motion.section
        className="py-16 bg-neutral-50"
        {...animationConfig.sectionReveal}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Send Us a Message
            </h2>
            <p className="text-neutral-600">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </div>

          <Card>
            <form onSubmit={handleSubmit} className="p-8 space-y-6">
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
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
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
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="john@example.com"
                />
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
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
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
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <Button type="submit" variant="primary" size="lg" fullWidth>
                Send Message
              </Button>

              <p className="text-xs text-neutral-500 text-center">
                We respect your privacy and will never share your information.
              </p>
            </form>
          </Card>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        className="py-16 bg-white"
        {...animationConfig.sectionReveal}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">
            Quick Questions?
          </h2>
          <div className="space-y-4">
            <Card>
              <div className="p-6">
                <h3 className="text-lg font-bold text-neutral-900 mb-2">
                  Do you provide personalized financial advice?
                </h3>
                <p className="text-neutral-600">
                  We provide educational content and unbiased reviews. For personalized advice, we recommend consulting with a SEBI-registered financial advisor.
                </p>
              </div>
            </Card>
            <Card>
              <div className="p-6">
                <h3 className="text-lg font-bold text-neutral-900 mb-2">
                  How do you make money?
                </h3>
                <p className="text-neutral-600">
                  We're supported by display advertising. We don't take commissions from financial products, ensuring our reviews remain unbiased.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Contact;