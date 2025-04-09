import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, 
  FaNodeJs, FaGithub, FaJava, FaGit 
} from 'react-icons/fa';
import { 
  SiMongodb, SiPostman, SiVisualstudiocode,
  SiSpringboot, SiMysql 
} from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: 'HTML 5', icon: <FaHtml5 className="text-[#E34F26]" /> },
    { name: 'CSS 3', icon: <FaCss3Alt className="text-[#1572B6]" /> },
    { name: 'JavaScript', icon: <FaJs className="text-[#F7DF1E]" /> },
    { name: 'React.js', icon: <FaReact className="text-[#61DAFB]" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-[#339933]" /> },
    { name: 'Spring Boot', icon: <SiSpringboot className="text-[#6DB33F]" /> },
    { name: 'Java', icon: <FaJava className="text-[#007396]" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" /> },
    { name: 'MySQL', icon: <SiMysql className="text-[#4479A1]" /> },
    { name: 'Git', icon: <FaGit className="text-[#F05032]" /> },
    { name: 'GitHub', icon: <FaGithub className="text-white" /> },
    { name: 'Postman', icon: <SiPostman className="text-[#FF6C37]" /> }
  ];

  const tools = [
    { name: 'VS Code', icon: <SiVisualstudiocode className="text-[#007ACC]" /> },
    { name: 'Postman', icon: <SiPostman className="text-[#FF6C37]" /> }
  ];

  return (
    <div id="skills" className="min-h-screen bg-[#0a192f] py-20">
      <div className="container mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-5xl font-bold text-center mb-16">
            <span className="text-white">Skills</span>
            <span className="text-[#9D4EDD]">.</span>
          </h2>
          
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 0 20px rgba(157, 78, 221, 0.2)'
                }}
                className="flex flex-col items-center p-4 bg-[#112240] rounded-lg border border-[#1a2f52] hover:border-[#9D4EDD] transition-all duration-300"
              >
                <div className="text-4xl mb-2">{skill.icon}</div>
                <p className="text-gray-300 text-sm font-medium text-center">{skill.name}</p>
              </motion.div>
            ))}
          </div>

          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-2xl font-bold text-white mt-16 mb-8 text-center"
          >
            Tools and Software
          </motion.h3>

          <div className="flex justify-center gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 0 20px rgba(157, 78, 221, 0.2)'
                }}
                className="flex flex-col items-center p-4 bg-[#112240] rounded-lg border border-[#1a2f52] hover:border-[#9D4EDD] transition-all duration-300"
              >
                <div className="text-4xl mb-2">{tool.icon}</div>
                <p className="text-gray-300 text-sm font-medium">{tool.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;