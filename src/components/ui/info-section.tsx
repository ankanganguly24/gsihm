"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaGlobeAmericas, FaUserTie, FaHandshake, FaTools } from "react-icons/fa";

const InfoSection = () => {
  const features = [
    {
      icon: <FaGlobeAmericas className="w-8 h-8" />,
      title: "100% Placement Guarantee",
      description: "We stand by our commitment to place every student in a role that matches their training and aspirations.",
    },
    {
      icon: <FaUserTie className="w-8 h-8" />,
      title: "Industry Mentorship",
      description: "Our faculty comprises seasoned professionals providing students with real-world insights and mentorship.",
    },
    {
      icon: <FaHandshake className="w-8 h-8" />,
      title: "Global Connections",
      description: "Partnerships with leading organizations worldwide ensure our students gain international exposure.",
    },
    {
      icon: <FaTools className="w-8 h-8" />,
      title: "Practical Training",
      description: "Our curriculum is designed for hands-on learning, equipping students with practical skills.",
    },
  ];

  return (
    <div className="py-20 px-4 md:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Main Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
            Why Choose GSIHM?
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600 mb-8">
            At Global Spectra Institute Of Hospitality Management (GSIHM), we not only provide top-tier education but also offer a unique pathway to Global Career Opportunities.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-primary mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-primary">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-white p-8 rounded-xl shadow-lg"
        >
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 mb-6">
              Our dedicated placement team works tirelessly to ensure each student achieves their career goals with a 100% Placement Assistance. We specialize in Global Placements across prominent industries, connecting students with leading Hotels, Airlines, Cruise lines, and Tourism companies worldwide.
            </p>
            <p className="text-gray-600">
              Join GSIHM and take the first step toward an exciting, successful career in Hospitality, Aviation, and beyond. Unlock your potential and achieve your dreams with a trusted partner in education and placement support.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InfoSection;
