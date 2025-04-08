import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "Personal Portfolio",
      description: "Modern and responsive portfolio website built with React and Tailwind CSS. Features smooth animations, dynamic content rendering, and interactive UI components.",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "JavaScript"],
      github: "https://github.com/yourusername/portfolio",
      live: "https://github.com/Garimajunejaa/personal_portfolio",
      image: "/portfolio.png"
    },
    {
      title: "GuildHub",
      description: "Contributed to 'GuildHub,' a social media platform for gamers, as part of a group project. Developed the 'Local Events' page using React.js, enabling users to discover and engage with gaming events in their area. Implemented interactive UI components and optimized performance for a seamless user experience.",
      technologies: ["Flutter", "Dart", "Firebase", "React.js"],
      github: "https://github.com/Garimajunejaa/guildhub",
      live: "#",
      image: "/guildhub.png"
    },
    {
      title: "Job Portal",
      description: "A comprehensive job portal with separate interfaces for students and recruiters. Features include job listings, application tracking, and admin dashboard for platform management.",
      technologies: ["React", "Node.js", "MongoDB", "Express.js"],
      github: "https://github.com/Garimajunejaa/JobPortal",
      live: "https://jobportall-1-gylx.onrender.com",
      image: "/jobportal.png"
    },
    {
      title: "Expense Tracker",
      description: "A web application to track personal expenses and manage budgets. Built during CodeAlpha internship with focus on user experience and responsive design.",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Garimajunejaa/CodeAlpha_expense-tracker_Garima",
      live: "https://garimajunejaa.github.io/CodeAlpha_expense-tracker_Garima/",
      image: "/expensetracker.jpg"
    },
    {
      title: "Social Media Dashboard",
      description: "Interactive dashboard for monitoring social media analytics and metrics visualization. Developed as part of web development internship with focus on data visualization.",
      technologies: ["React", "CSS", "JavaScript"],
      github: "https://github.com/Garimajunejaa/CodeAlpha_social_media_dashboard_Garima",
      live: "https://garimajunejaa.github.io/CodeAlpha_social_media_dashboard_Garima/",
      image: "/socialmedia.jpg"
    },
    {
      title: "Connect Four Game",
      description: "Interactive game developed during InternPe internship. Features include player vs player mode, win detection, and responsive design for multiple screen sizes.",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Garimajunejaa/connectfourgame",
      live: "https://garimajunejaa.github.io/connectfourgame/",
      image: "/connectfourgame.jpg"
    }
  ];
  return (
    <div id="projects" className="min-h-screen bg-[#0a192f] py-20">
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
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="text-[#9D4EDD] text-2xl font-medium mb-3"
          >
            MY WORK
          </motion.h3>
          
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="text-8xl font-bold text-white mb-8"
          >
            Projects.
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-gray-300 text-lg leading-relaxed mb-16 max-w-3xl"
          >
            Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
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
                whileHover={{ y: -5 }}
                className="group bg-[#112240] rounded-lg overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-3 right-3 flex gap-2">
                    <motion.a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="bg-black/70 p-2 rounded-full hover:bg-[#9D4EDD]/80 transition-all duration-200"
                    >
                      <FaGithub className="w-4 h-4 text-white" />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="bg-black/70 p-2 rounded-full hover:bg-[#9D4EDD]/80 transition-all duration-200"
                    >
                      <FaExternalLinkAlt className="w-4 h-4 text-white" />
                    </motion.a>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-3 line-clamp-6 h-20">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="text-[#9D4EDD] text-xs"
                      >
                        #{tech.toLowerCase().replace(/\s+/g, '')}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;