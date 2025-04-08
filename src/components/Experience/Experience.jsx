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
    <div className="bg-navy py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold text-center text-white mb-16">Experience.</h2>
          
          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="mb-12 relative pl-8"
              >
                <div className="absolute left-0 top-0 h-full w-px bg-purple-custom">
                  <div className="absolute top-0 -left-2 w-5 h-5 rounded-full bg-purple-custom" />
                </div>
                
                <div className="bg-navy-light p-6 rounded-lg">
                  <span className="text-purple-custom font-medium">{exp.period}</span>
                  <h3 className="text-2xl font-bold text-white mt-2">{exp.title}</h3>
                  <p className="text-slate-light mt-2">{exp.tech}</p>
                  
                  <ul className="mt-4 space-y-2">
                    {exp.points.map((point, idx) => (
                      <li key={idx} className="text-slate-light flex items-start">
                        <span className="text-purple-custom mr-2">•</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;