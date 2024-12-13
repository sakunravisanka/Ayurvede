import React from "react";
import { motion } from "framer-motion";

// Assuming you'll import these images
import LeftImage from "../assets/images/wherep/left.png";
import SmallImage1 from "../assets/images/wherep/K.png";
import SmallImage2 from "../assets/images/wherep/FC.png";
import SmallImage3 from "../assets/images/wherep/sg.jpg";

const WhereProduct = () => {
  // Enhanced container animation with more nuanced staggering
  const containerVariants = {
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };

  // More sophisticated image animation
  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.7,
      y: 50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 150,
        mass: 0.8,
      },
    },
    hover: {
      scale: 1.1,
      rotate: 3,
      boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
      transition: {
        type: "spring",
        stiffness: 300,
      },
    },
    tap: {
      scale: 0.95,
      transition: {
        type: "spring",
        stiffness: 300,
      },
    },
  };

  // Enhanced text animation with more dynamic enter effect
  const textVariants = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12,
      },
    },
  };

  return (
    <motion.div
      className="relative py-12 min-h-screen flex items-center overflow-hidden"
      style={{
        backgroundImage: `url(${LeftImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        {/* Left Side - Placeholder or Empty for Mobile Layout */}
        <div className="hidden md:block"></div>

        {/* Right Side - Content */}
        <div className="flex flex-col justify-center text-center md:text-right space-y-6">
          <motion.h1
            className="text-3xl md:text-4xl font-bold text-gray-800"
            variants={textVariants}
          >
            Where to buy our products
          </motion.h1>

          <motion.p
            className="text-base md:text-lg text-gray-600 mb-6"
            variants={textVariants}
            transition={{ delay: 0.2 }}
          >
            You can find our products in all major supermarket chains and
            leading pharmacies across Sri Lanka. Experience the natural goodness
            of Ceylon Mystique's Ayurvedic and herbal offerings conveniently at
            your nearest store.
          </motion.p>

          {/* Small Images Responsive Grid */}
          <motion.div
            className="grid grid-cols-3 gap-4 justify-center md:justify-end"
            variants={containerVariants}
          >
            {[
              { src: SmallImage1, alt: "Product Location 1" },
              { src: SmallImage2, alt: "Product Location 2" },
              { src: SmallImage3, alt: "Product Location 3" },
            ].map((image, index) => (
              <motion.div
                key={index}
                className="aspect-square overflow-hidden rounded-lg shadow-md"
                variants={imageVariants}
              >
                <motion.img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  whileHover="hover"
                  whileTap="tap"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Modern Overlay with Blur Effect */}
      <div className="absolute inset-0 bg-white/20 backdrop-blur-sm z-0"></div>
    </motion.div>
  );
};

export default WhereProduct;
