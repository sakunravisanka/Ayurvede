import React from "react";
import { motion } from "framer-motion";
import OrganicProductsImage from "../assets/images/productsection/1.png";
import HerbalSupplementsImage from "../assets/images/productsection/2.jpg";
import LifestyleWellnessImage from "../assets/images/productsection/3.png";
import BackgroundImage from "../assets/images/productsection.png"; // Your background image

const ProductSection = () => {
  // Container animation for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  // Individual card animation
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
      transition: {
        duration: 0.3,
      },
    },
  };

  // Text animation
  const textVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const productSections = [
    {
      title: "Organic Products",
      description:
        "Our natural Ceylon organic products are crafted from herbs and botanicals endemic to Sri Lanka's rich biodiversity. These sustainable, traditional remedies harness the island's unique flora to promote health, balance, and well-being naturally.",
      image: OrganicProductsImage,
    },
    {
      title: "Herbal Supplements",
      description:
        "Ceylon natural herbal supplements are crafted from Sri Lanka's unique, native botanicals. These organic, traditional remedies support overall health and well-being by combining ancient wisdom with natural, sustainable practices for a balanced, holistic lifestyle.",
      image: HerbalSupplementsImage,
    },
    {
      title: "Lifestyle and Wellness",
      description:
        "Ceylon herbal tea products are made from Sri Lanka's finest native herbs and botanicals. These organic blends offer natural wellness, combining traditional flavors with health benefits to promote relaxation, balance, and overall vitality.",
      image: LifestyleWellnessImage,
    },
  ];

  return (
    <motion.div
      className="bg-gray-100 py-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {productSections.map((section, index) => (
            <motion.div
              key={section.title}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              variants={cardVariants}
              whileHover="hover"
            >
              <motion.img
                className="w-full h-56 object-cover"
                src={section.image}
                alt={section.title}
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
              <div className="p-6">
                <motion.h3
                  className="text-xl font-bold"
                  variants={textVariants}
                >
                  {section.title}
                </motion.h3>
                <motion.p
                  className="text-gray-600 mt-4"
                  variants={textVariants}
                >
                  {section.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductSection;
