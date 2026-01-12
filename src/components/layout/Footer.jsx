import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { animationConfig } from '../../config/animation.config';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    products: {
      title: 'Products',
      links: [
        { name: 'Credit Cards', path: '/credit-cards' },
        { name: 'Insurance', path: '/insurance' },
        { name: 'Investments', path: '/investments' },
        { name: 'Tools & Calculators', path: '/tools' },
      ],
    },
    resources: {
      title: 'Resources',
      links: [
        { name: 'Blog', path: '/blog' },
        { name: 'About Us', path: '/about' },
        { name: 'Contact', path: '/contact' },
        { name: 'FAQs', path: '/faq' },
      ],
    },
    legal: {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', path: '/privacy' },
        { name: 'Terms of Service', path: '/terms' },
        { name: 'Disclaimer', path: '/disclaimer' },
      ],
    },
  };

  const socialLinks = [
    { name: 'Twitter', icon: '𝕏', url: 'https://twitter.com/unfilteredmoney' },
    { name: 'LinkedIn', icon: 'in', url: 'https://linkedin.com/company/unfilteredmoney' },
    { name: 'Instagram', icon: '📷', url: 'https://instagram.com/unfilteredmoney' },
    { name: 'YouTube', icon: '▶', url: 'https://youtube.com/@unfilteredmoney' },
  ];

  return (
    <motion.footer
      className="bg-neutral-900 text-neutral-300"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-4">
              Unfiltered<span className="text-primary-500">Money</span>
            </h3>
            <p className="text-sm mb-4">
              Your honest friend in personal finance. We read the fine print so you don't have to.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-neutral-800 hover:bg-primary-600 transition-colors"
                  aria-label={social.name}
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key}>
              <h4 className="text-white font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-sm hover:text-primary-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-neutral-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-neutral-400">
              © {currentYear} UnfilteredMoney. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-xs text-neutral-400">
              <span>🔒 SSL Secure</span>
              <span>✓ SEBI Registered</span>
              <span>✓ 100% Verified</span>
            </div>
          </div>
          <p className="text-xs text-neutral-500 mt-4 text-center">
            Disclaimer: UnfilteredMoney is an educational initiative. Investments are subject to market risks. Please read all scheme-related documents carefully.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;