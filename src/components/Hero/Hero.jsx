import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <div id="home" className="min-h-screen relative overflow-hidden pt-24"> {/* Added pt-24 for top padding */}
      {/* Background elements remain the same */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a192f] via-[#0f172a] to-[#0a192f]" />
        <div className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25px 25px, rgba(157, 78, 221, 0.15) 2px, transparent 0),
              radial-gradient(circle at 75px 75px, rgba(255, 105, 180, 0.1) 2px, transparent 0)
            `,
            backgroundSize: '100px 100px'
          }}
        />
      </div>

      <div className="container mx-auto px-8 md:px-12 lg:px-16 pt-16 pb-32 relative z-10"> {/* Adjusted pt-16 */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 text-center lg:text-left space-y-8 px-4 md:px-6"
          >
            <motion.h2 
              className="text-2xl sm:text-3xl font-semibold text-[#9D4EDD] mb-4"
            >
              Full Stack Developer & UI/UX Designer
            </motion.h2>

            <motion.h1 
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight"
            >
              <span className="text-white">Hi, I'm </span>
              <span className="text-[#9D4EDD]">Garima</span>
              <br />
              <span className="text-[#FF69B4]">Juneja</span>
            </motion.h1>

            <motion.p 
              className="text-gray-300 text-lg sm:text-xl leading-relaxed"
            >
              A passionate Computer Science student at{' '}
              <span className="text-[#9D4EDD]">NorthCap University</span>,
              <br />specializing in{' '}
              <span className="text-[#9D4EDD]">Full Stack Development</span>
            </motion.p>

            <motion.div 
              className="inline-flex items-center gap-3 bg-[#112240] px-8 py-4 rounded-full shadow-lg"
            >
              <span className="text-gray-300 text-base sm:text-lg tracking-wider flex items-center gap-4">
                <span className="text-[#9D4EDD] text-xl">🎓</span>
                <span className="text-[#9D4EDD] font-medium">B.Tech CSE</span>
                <span className="text-gray-400"> | </span>
                <span>Expected Graduation: 2026</span>
              </span>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="lg:w-1/2 relative flex justify-center lg:justify-end items-start mt-12 lg:mt-0 px-4 md:px-6"
          >
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-[380px] lg:h-[380px]">
              <div 
                className="absolute inset-0"
                style={{
                  background: 'radial-gradient(circle at center, rgba(157, 78, 221, 0.2) 0%, rgba(255, 105, 180, 0.1) 50%, transparent 70%)',
                  filter: 'blur(50px)',
                  transform: 'scale(1.5)'
                }}
              />
              <div className="relative rounded-full overflow-hidden border-2 border-[#9D4EDD]/20">
                <img 
                  src="/picture.jpg" 
                  alt="Garima Juneja" 
                  className="w-full h-full object-cover"
                  style={{ 
                    objectPosition: 'center 25%',
                    filter: 'brightness(1.05) contrast(1.05)'
                  }}
                />
              </div>
              <div 
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'radial-gradient(circle at center, transparent 60%, rgba(157, 78, 221, 0.2))',
                  boxShadow: '0 0 80px 20px rgba(157, 78, 221, 0.15)'
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;