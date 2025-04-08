import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaDownload } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
  };

  const handleDownloadResume = () => {
    const resumeUrl = '/Garima_Resume.pdf'; // Make sure this file exists in your public folder
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Garima_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id="contact" className="min-h-screen bg-[#0a192f] py-20">
      <div className="container mx-auto px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-5xl font-bold text-center text-white mb-16">Contact.</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Get in Touch</h3>
              
              {/* Add Resume Download Button */}
              <motion.button
                onClick={handleDownloadResume}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-[#9D4EDD] text-white px-6 py-3 rounded-lg hover:bg-[#9D4EDD]/90 transition-colors"
              >
                <FaDownload className="text-lg" />
                Download Resume
              </motion.button>

              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-purple-custom text-xl" />
                <a href="mailto:your.email@example.com" className="text-slate-light hover:text-white transition-colors">
                  junejag51@gmail.com
                </a>
              </div>
              
              <div className="flex items-center space-x-4">
                <FaPhone className="text-purple-custom text-xl" />
                <a href="tel:+1234567890" className="text-slate-light hover:text-white transition-colors">
              +91 9518013430
                </a>
              </div>
              
              <div className="flex space-x-6 pt-4">
                <motion.a
                  whileHover={{ y: -3 }}
                  href="https://www.linkedin.com/in/garima-juneja-598056268/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-light hover:text-purple-custom transition-colors"
                >
                  <FaLinkedin size={24} />
                </motion.a>
                <motion.a
                  whileHover={{ y: -3 }}
                  href="https://github.com/Garimajunejaa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-light hover:text-purple-custom transition-colors"
                >
                  <FaGithub size={24} />
                </motion.a>
              </div>
            </div>

            {/* Contact Form */}
            <motion.form
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-navy-light text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-custom"
                  required
                />
              </div>
              
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-navy-light text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-custom"
                  required
                />
              </div>
              
              <div>
                <textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows="5"
                  className="w-full bg-navy-light text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-custom resize-none"
                  required
                ></textarea>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-purple-custom text-white py-3 rounded-lg font-semibold hover:bg-purple-custom/90 transition-colors"
              >
                Send Message
              </motion.button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;