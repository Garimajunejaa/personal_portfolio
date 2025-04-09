import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed w-full z-50 py-6 transition-all duration-300 ${
        scrolled ? 'bg-[#0a192f]/90 shadow-lg backdrop-blur-sm' : 'bg-transparent'
      }`}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-8 flex justify-between items-center">
        <motion.div
          className="text-3xl font-bold cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <span className="text-white">Port</span>
          <span className="text-[#9D4EDD]">folio</span>
        </motion.div>
        <ul className="hidden md:flex space-x-10">
          {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
            <motion.li
              key={item}
              className="text-lg font-medium text-gray-300 hover:text-[#9D4EDD] cursor-pointer transition-colors duration-300"
              whileHover={{ y: -2 }}
            >
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;