import React from 'react';
import { motion } from 'framer-motion';
import { DiCode, DiReact } from 'react-icons/di';
import { BiServer } from 'react-icons/bi';
import { AiOutlineAppstore } from 'react-icons/ai';

const Overview = () => {
  return (
    <div id="about" className="min-h-screen bg-[#0a192f] py-20">
      <div className="container mx-auto px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-6xl mx-auto"
        >
          <motion.h3 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 0.8,
              type: "spring",
              stiffness: 100 
            }}
            className="text-[#9D4EDD] text-2xl font-medium mb-3"
          >
            INTRODUCTION
          </motion.h3>
          
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8,
              type: "spring",
              bounce: 0.4
            }}
            className="text-8xl font-bold text-white mb-10 tracking-tight"
          >
            Overview.
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-gray-300 text-xl leading-relaxed mb-20 max-w-3xl"
          >
            I'm a skilled software developer with experience in JavaScript, and expertise in frameworks like{' '}
            <span className="text-[#9D4EDD]">React, Node.js, Express.js and MongoDB</span>. 
            I'm a quick learner and collaborate closely with clients to create{' '}
            <span className="text-[#9D4EDD]">efficient, scalable, and user-friendly</span> solutions that solve 
            real-world problems. Let's work together to bring your ideas to life!
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { Icon: DiCode, title: "Web Developer" },
              { Icon: DiReact, title: "React Developer" },
              { Icon: BiServer, title: "Backend Developer" },
              { Icon: AiOutlineAppstore, title: "Full Stack Developer" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5,
                  delay: 0.6 + index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(157, 78, 221, 0.05)",
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#112240] p-10 rounded-2xl border-2 border-[#112240] hover:border-[#9D4EDD]/30 transition-all duration-300 shadow-lg shadow-black/20"
              >
                <motion.div 
                  className="flex flex-col items-center text-center"
                  whileHover={{ y: -5 }}
                >
                  <motion.div
                    whileHover={{ 
                      rotate: 360,
                      scale: 1.1
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <item.Icon className="w-24 h-24 mb-8 text-[#9D4EDD] opacity-90" />
                  </motion.div>
                  <h3 className="text-white text-2xl font-semibold tracking-wide">{item.title}</h3>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Overview;