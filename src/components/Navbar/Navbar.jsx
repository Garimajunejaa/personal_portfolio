import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Navbar.scss';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="navbar-content">
        <motion.div
          className="logo"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={(e) => handleClick(e, 'home')}
        >
          Portfolio<span className=" text-[#dd4e8a] "></span>
        </motion.div>
        <ul className="nav-links">
          <motion.li whileHover={{ y: -2 }}>
            <a href="#home" onClick={(e) => handleClick(e, 'home')}>Home</a>
          </motion.li>
          <motion.li whileHover={{ y: -2 }}>
            <a href="#about" onClick={(e) => handleClick(e, 'about')}>About</a>
          </motion.li>
          <motion.li whileHover={{ y: -2 }}>
            <a href="#projects" onClick={(e) => handleClick(e, 'projects')}>Projects</a>
          </motion.li>
          <motion.li whileHover={{ y: -2 }}>
            <a href="#skills" onClick={(e) => handleClick(e, 'skills')}>Skills</a>
          </motion.li>
          <motion.li whileHover={{ y: -2 }}>
            <a href="#contact" onClick={(e) => handleClick(e, 'contact')}>Contact</a>
          </motion.li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;