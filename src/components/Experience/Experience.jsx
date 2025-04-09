import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      period: "2024",
      title: "CodeAlpha - Web Developer Intern",
      tech: "HTML, CSS, JavaScript",
      points: [
        "Developed Expense Tracker application with budget management features",
        "Created Social Media Dashboard for analytics visualization",
        "Built responsive Portfolio Website showcasing projects and skills"
      ]
    },
    {
      period: "2024",
      title: "InternPe - Web Developer Intern",
      tech: "HTML, CSS, JavaScript, React.js",
      points: [
        "Developed Connect Four Game with interactive user interface",
        "Created To-Do List application with data persistence",
        "Built E-commerce Website with product catalog and cart functionality"
      ]
    },
    {
      period: "2024",
      title: "Lernx - HRM Intern",
      tech: "Human Resource Management",
      points: [
        "Managed recruitment processes and candidate screening",
        "Coordinated training programs and employee development",
        "Gained practical experience in HR operations and management"
      ]
    },
    {
      period: "2024",
      title: "Younity",
      tech: "Achievement",
      points: [
        "Selected in Top 400 out of 7,000 applicants",
        "Demonstrated exceptional skills and potential",
        "Recognized for outstanding performance in internship assessments"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a192f] to-[#112240] py-32">
      <div className="container mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <motion.h2 
            className="text-6xl font-bold text-center mb-20"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <span className="text-white">Experience</span>
            <span className="text-[#9D4EDD]">.</span>
          </motion.h2>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="relative pl-12 md:pl-16"
              >
                {/* Timeline line and dot */}
                <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-[#9D4EDD] to-[#7B2CBF]">
                  <motion.div 
                    className="absolute -left-[10px] w-[22px] h-[22px] rounded-full bg-[#9D4EDD] border-4 border-[#0a192f]"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.2 + 0.2 }}
                  />
                </div>
                
                <motion.div 
                  className="bg-[#112240]/80 p-8 rounded-2xl border border-[#9D4EDD]/20 backdrop-blur-sm hover:border-[#9D4EDD]/40 transition-all duration-300"
                  whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(157, 78, 221, 0.2)' }}
                >
                  <span className="text-[#9D4EDD] font-medium text-lg">{exp.period}</span>
                  <h3 className="text-2xl font-bold text-white mt-2">{exp.title}</h3>
                  <div className="inline-block px-4 py-1 rounded-full bg-[#9D4EDD]/10 border border-[#9D4EDD]/30 text-[#9D4EDD] text-sm mt-3">
                    {exp.tech}
                  </div>
                  
                  <ul className="mt-6 space-y-3">
                    {exp.points.map((point, idx) => (
                      <motion.li 
                        key={idx} 
                        className="text-gray-300 flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2 + idx * 0.1 }}
                      >
                        <span className="text-[#9D4EDD] text-xl">•</span>
                        <span className="leading-relaxed">{point}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;