import React from "react";
import { motion } from "framer-motion";
import { Tractor, Leaf, Droplet, Sprout } from "lucide-react";

const ServiceCard = ({ icon: Icon, title, description }) => {
  return (
    <motion.div
      className="bg-white p-6 rounded-lg shadow-md"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="flex items-center mb-4">
        <Icon className="w-12 h-12 text-green-600 mr-4" />
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const Service = () => {
  const services = [
    {
      icon: Tractor,
      title: "Advanced Farming Equipment",
      description:
        "State-of-the-art agricultural machinery for precision farming, increasing efficiency and crop yield.",
    },
    {
      icon: Leaf,
      title: "Sustainable Agriculture",
      description:
        "Eco-friendly farming practices that minimize environmental impact and promote soil health.",
    },
    {
      icon: Droplet,
      title: "Water Management",
      description:
        "Innovative irrigation solutions and water conservation techniques for optimal crop growth.",
    },
    {
      icon: Sprout, // Use Sprout instead of Wheat
      title: "Crop Optimization",
      description:
        "Data-driven crop selection and management strategies to maximize agricultural productivity.",
    },
  ];

  return (
    <motion.div
      className="container mx-auto px-4 py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h2
        className="text-4xl font-bold text-center mb-12 text-gray-900"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Our Advanced Agricultural Services
      </motion.h2>

      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.3,
            },
          },
        }}
      >
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Service;
