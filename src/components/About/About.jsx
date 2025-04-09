import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaLaptopCode } from 'react-icons/fa';

const About = () => {
  return (
    <div id="about" className="min-h-screen bg-gradient-to-b from-[#0a192f] to-[#112240] py-32">
      <div className="container mx-auto px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <motion.h2 
            className="text-5xl font-bold text-center mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-white">About</span>
            <span className="text-[#9D4EDD]"> Me.</span>
          </motion.h2>

          <motion.div 
            className="grid md:grid-cols-2 gap-12 mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="space-y-6">
              <div className="bg-[#0a192f]/50 p-8 rounded-2xl border border-[#9D4EDD]/20 backdrop-blur-sm hover:border-[#9D4EDD]/40 transition-all duration-300">
                <p className="text-gray-300 text-lg leading-relaxed">
                  Hello! I'm <span className="text-[#9D4EDD] font-semibold">Garima Juneja</span>, 
                  a passionate Computer Science student at NorthCap University. 
                  I'm on a journey to become a Full Stack Developer with a keen interest in creating 
                  beautiful and functional web applications.
                </p>
              </div>

              <div className="bg-[#0a192f]/50 p-8 rounded-2xl border border-[#9D4EDD]/20 backdrop-blur-sm hover:border-[#9D4EDD]/40 transition-all duration-300">
                <p className="text-gray-300 text-lg leading-relaxed">
                  My focus is on modern web technologies including React, Node.js, and various other 
                  tools in the JavaScript ecosystem. I love solving complex problems and turning ideas 
                  into reality through code.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <motion.div 
                className="bg-[#112240] p-8 rounded-2xl border border-[#9D4EDD]/30 hover:border-[#9D4EDD]/50 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <FaGraduationCap className="text-3xl text-[#9D4EDD]" />
                  <h3 className="text-2xl font-semibold text-white">Education</h3>
                </div>
                <div className="space-y-3">
                  <p className="text-xl text-[#9D4EDD]">B.Tech in Computer Science Engineering</p>
                  <p className="text-gray-300">NorthCap University</p>
                  <p className="text-gray-400">2022 - 2026</p>
                </div>
              </motion.div>

              <motion.div 
                className="bg-[#112240] p-8 rounded-2xl border border-[#9D4EDD]/30 hover:border-[#9D4EDD]/50 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <FaLaptopCode className="text-3xl text-[#9D4EDD]" />
                  <h3 className="text-2xl font-semibold text-white">Interests</h3>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <FaCode className="text-[#9D4EDD]" />
                    Full Stack Development
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCode className="text-[#9D4EDD]" />
                    UI/UX Design
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCode className="text-[#9D4EDD]" />
                    Problem Solving
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;