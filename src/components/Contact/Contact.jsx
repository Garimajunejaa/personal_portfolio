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
    const resumeUrl = '/GarimaJuneja_Resume.pdf'; // Make sure this file exists in your public folder
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'GarimaJuneja_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id="contact" className="min-h-screen bg-gradient-to-b from-[#0a192f] to-[#112240] py-32">
      <div className="container mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <motion.h2 
            className="text-6xl font-bold text-center mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <span className="text-white">Get in </span>
            <span className="text-[#9D4EDD]">Touch</span>
            <span className="text-white">.</span>
          </motion.h2>

          <motion.p 
            className="text-gray-400 text-center mb-16 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Feel free to reach out for collaborations or just a friendly hello
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              className="space-y-8 bg-[#112240]/50 p-8 rounded-2xl border border-[#9D4EDD]/20 backdrop-blur-sm"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-3xl font-semibold text-white mb-8">Contact Info</h3>
              
              <motion.button
                onClick={handleDownloadResume}
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(157, 78, 221, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 bg-gradient-to-r from-[#9D4EDD] to-[#7B2CBF] text-white px-6 py-3 rounded-lg transition-all duration-300"
              >
                <FaDownload className="text-lg" />
                Download Resume
              </motion.button>

              <div className="space-y-6">
                <motion.a 
                  href="mailto:junejag51@gmail.com"
                  className="flex items-center space-x-4 text-gray-300 hover:text-[#9D4EDD] transition-colors duration-300"
                  whileHover={{ x: 10 }}
                >
                  <FaEnvelope className="text-[#9D4EDD] text-2xl" />
                  <span>junejag51@gmail.com</span>
                </motion.a>
                
                <motion.a 
                  href="tel:+919518013430"
                  className="flex items-center space-x-4 text-gray-300 hover:text-[#9D4EDD] transition-colors duration-300"
                  whileHover={{ x: 10 }}
                >
                  <FaPhone className="text-[#9D4EDD] text-2xl" />
                  <span>+91 9518013430</span>
                </motion.a>
              </div>
              
              <div className="flex space-x-6 pt-6">
                <motion.a
                  whileHover={{ y: -5, color: '#9D4EDD' }}
                  href="https://www.linkedin.com/in/garima-juneja-598056268/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 text-3xl transition-colors duration-300"
                >
                  <FaLinkedin />
                </motion.a>
                <motion.a
                  whileHover={{ y: -5, color: '#9D4EDD' }}
                  href="https://github.com/Garimajunejaa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 text-3xl transition-colors duration-300"
                >
                  <FaGithub />
                </motion.a>
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              onSubmit={handleSubmit}
              className="space-y-6 bg-[#112240]/50 p-8 rounded-2xl border border-[#9D4EDD]/20 backdrop-blur-sm"
            >
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#0a192f]/70 text-white px-6 py-4 rounded-lg border border-[#9D4EDD]/30 focus:border-[#9D4EDD] focus:outline-none transition-all duration-300"
                  required
                />
              </div>
              
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#0a192f]/70 text-white px-6 py-4 rounded-lg border border-[#9D4EDD]/30 focus:border-[#9D4EDD] focus:outline-none transition-all duration-300"
                  required
                />
              </div>
              
              <div>
                <textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows="5"
                  className="w-full bg-[#0a192f]/70 text-white px-6 py-4 rounded-lg border border-[#9D4EDD]/30 focus:border-[#9D4EDD] focus:outline-none transition-all duration-300 resize-none"
                  required
                ></textarea>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(157, 78, 221, 0.3)' }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-[#9D4EDD] to-[#7B2CBF] text-white py-4 rounded-lg font-semibold transition-all duration-300"
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