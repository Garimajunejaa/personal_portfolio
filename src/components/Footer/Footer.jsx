import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/yourusername' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com/in/yourusername' },
    { icon: <FaTwitter />, url: 'https://twitter.com/yourusername' },
    { icon: <FaInstagram />, url: 'https://instagram.com/yourusername' }
  ];

  return (
    <footer className="bg-navy-light py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <motion.div 
            className="flex space-x-6 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-light hover:text-purple-custom text-xl transition-colors"
                whileHover={{ y: -3 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-slate-light text-sm">
              Designed & Built by <span className="text-purple-custom">Garima Juneja</span>
            </p>
            <p className="text-slate-light text-sm mt-2">
              © {currentYear} All rights reserved
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;