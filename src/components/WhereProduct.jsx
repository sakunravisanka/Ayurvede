import React from "react";
import { motion, AnimatePresence } from "framer-motion";

// Assuming you'll import these images
import LeftImage from "../assets/images/wherep/left.png";
import SmallImage1 from "../assets/images/wherep/K.png";
import SmallImage2 from "../assets/images/wherep/FC.png";
import SmallImage3 from "../assets/images/wherep/sg.jpg";

const WhereProduct = () => {
  // Advanced container animation with staggered and cascading effects
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

  // Enhanced image animation with more dynamic interactions
  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      x: 50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 120,
        mass: 0.8,
      },
    },
    hover: {
      scale: 1.05,
      rotate: 2,
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

  // Text animation with more complex staggering
  const textVariants = {
    hidden: {
      opacity: 0,
      x: 50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <motion.div
      className="relative py-12 min-h-screen overflow-hidden"
      style={{
        backgroundImage: `url(${LeftImage})`,
        backgroundSize: "cover",
        backgroundPosition: "left",
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10 h-full">
        {/* Left Side - Background Image */}
        <div className="hidden md:block"></div>

        {/* Right Side - Content */}
        <div className="flex flex-col justify-center text-right">
          <motion.h1
            className="text-4xl font-bold mb-4 text-gray-800"
            variants={textVariants}
          >
            Where to buy our products
          </motion.h1>

          <motion.p
            className="text-gray-600 mb-8 text-lg"
            variants={textVariants}
            transition={{ delay: 0.2 }}
          >
            You can find our products in all major supermarket chains and
            leading pharmacies across Sri Lanka. Experience the natural goodness
            of Ceylon Mystique's Ayurvedic and herbal offerings conveniently at
            your nearest store.
          </motion.p>

          {/* Small Images Horizontally Aligned */}
          <motion.div
            className="flex space-x-4 justify-end mt-20"
            variants={containerVariants}
          >
            {[
              { src: SmallImage1, alt: "Small Image 1" },
              { src: SmallImage2, alt: "Small Image 2" },
              { src: SmallImage3, alt: "Small Image 3" },
            ].map((image, index) => (
              <motion.div
                key={index}
                className="flex-1 aspect-square overflow-hidden rounded-lg shadow-lg"
                variants={imageVariants}
              >
                <motion.img
                  src={image.src}
                  alt={image.alt}
                  className="w-40 h-40 object-cover"
                  whileHover="hover"
                  whileTap="tap"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Subtle Overlay */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-sm z-0"></div>
    </motion.div>
  );
};

export default WhereProduct;
