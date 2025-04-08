import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaCamera, FaCloud, FaHandsHelping } from 'react-icons/fa';

const Activities = () => {
  const leadership = [
    {
      title: "Social Media Head",
      organization: "Club Yukti & Club Optica",
      description: "Managing social media presence and content strategy",
      icon: <FaUsers />
    },
    {
      title: "Graphics Team Member",
      organization: "Cloud IoT Club",
      description: "Creating visual content and promotional materials",
      icon: <FaCloud />
    }
  ];

  const events = [
    {
      title: "SPORTIFY 3.0",
      role: "Event Coordinator",
      description: "Coordinated major sports event at NorthCap University"
    },
    {
      title: "Digital Shield",
      role: "Organizer",
      description: "Organized cybercrime awareness session with police"
    },
    {
      title: "NGO Work - Yatan",
      role: "Volunteer",
      description: "Completed 30+ hours of community work, teaching children and donating supplies",
      icon: <FaHandsHelping />
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a192f] py-20">
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
            MY INVOLVEMENT
          </motion.h3>
          
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="text-7xl font-bold text-white mb-16"
          >
            Activities.
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Leadership Roles */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-white mb-8 border-b-2 border-[#9D4EDD] pb-2 inline-block">
                Leadership Roles
              </h3>
              <div className="space-y-6">
                {leadership.map((role, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    whileHover={{ scale: 1.02 }}
                    className="bg-[#112240] p-6 rounded-lg border border-[#9D4EDD]/20 hover:border-[#9D4EDD]/50 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <motion.span 
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="text-[#9D4EDD] text-3xl p-3 bg-[#9D4EDD]/10 rounded-lg"
                      >
                        {role.icon}
                      </motion.span>
                      <div>
                        <h4 className="text-xl font-bold text-white mb-1">{role.title}</h4>
                        <p className="text-[#9D4EDD] font-medium mb-2">{role.organization}</p>
                        <p className="text-gray-400 text-sm">{role.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Events & Social Work */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-white mb-8 border-b-2 border-[#9D4EDD] pb-2 inline-block">
                Events & Social Work
              </h3>
              <div className="space-y-6">
                {events.map((event, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    whileHover={{ scale: 1.02 }}
                    className="bg-[#112240] p-6 rounded-lg border border-[#9D4EDD]/20 hover:border-[#9D4EDD]/50 transition-all duration-300"
                  >
                    <h4 className="text-xl font-bold text-white mb-2">{event.title}</h4>
                    <p className="text-[#9D4EDD] font-medium mb-2">{event.role}</p>
                    <p className="text-gray-400 text-sm">{event.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Activities;