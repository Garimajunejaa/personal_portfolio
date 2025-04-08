import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaNodeJs, 
  FaGithub, 
  FaJava,
  FaGit 
} from 'react-icons/fa';
import { 
  SiMongodb, 
  SiPostman, 
  SiVisualstudiocode,
  SiSpringboot,
  SiMysql 
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
    <div id="skills" className="bg-navy py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold text-center text-white mb-16">Skills.</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center"
              >
                <div className="text-5xl mb-2">{skill.icon}</div>
                <p className="text-slate-light text-sm">{skill.name}</p>
              </motion.div>
            ))}
          </div>

          <h3 className="text-2xl font-bold text-white mt-16 mb-8 text-center">
            Tools and Software
          </h3>

          <div className="flex justify-center gap-8">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center"
              >
                <div className="text-5xl mb-2">{tool.icon}</div>
                <p className="text-slate-light text-sm">{tool.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;