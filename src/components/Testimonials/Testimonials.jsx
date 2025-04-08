import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      text: "Garima's dedication to web development and attention to detail made our project a success. Her skills in React and Node.js are impressive.",
      author: "CodeAlpha Mentor",
      position: "Project Lead",
      image: "/mentor1.jpg"
    },
    {
      text: "Working with Garima was a pleasure. Her ability to quickly grasp concepts and implement them effectively stands out.",
      author: "InternPe Supervisor",
      position: "Senior Developer",
      image: "/mentor2.jpg"
    },
    {
      text: "Garima demonstrated exceptional HR management skills and a great understanding of organizational dynamics.",
      author: "Lernx Manager",
      position: "HR Director",
      image: "/mentor3.jpg"
    }
  ];

  return (
    <div className="bg-navy-light py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-slate-light text-center mb-2">WHAT OTHERS SAY</p>
          <h2 className="text-5xl font-bold text-center text-white mb-16">Testimonials.</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-navy p-6 rounded-xl"
              >
                <div className="text-4xl text-purple-custom mb-4">"</div>
                <p className="text-slate-light mb-6">{testimonial.text}</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author} 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="text-white font-medium">@{testimonial.author}</h4>
                    <p className="text-slate-light text-sm">{testimonial.position}</p>
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

export default Testimonials;