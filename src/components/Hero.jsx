import React, { Suspense, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Import images
import heroBackground from "../assets/images/hero.jpg";
import productImage from "../assets/images/circlenew.png"; // Your new image

// Hero Component
const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll();

  // Parallax and scroll-based transformations
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.5]);

  // Variants for staggered animations
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

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="relative w-full min-h-screen flex items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 z-10 relative px-4">
        {/* Left Content with Advanced Animations */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6 text-white"
        >
          <motion.h3
            variants={itemVariants}
            className="text-base md:text-3xl text-white"
          >
            Crafting Ayurvedic and Herbal Products Naturally for You
          </motion.h3>
          <motion.h1
            variants={itemVariants}
            className="text-2xl md:text-5xl font-bold"
          >
            Ceylon's Ayurvedic Treasures for Global Wellness
          </motion.h1>

          <motion.button
            variants={itemVariants}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.2 },
            }}
            whileTap={{
              scale: 0.9,
              transition: { duration: 0.2 },
            }}
            className="bg-primary text-white px-6 py-3 rounded-full text-lg hover:bg-green-800 transition"
          >
            Learn More
          </motion.button>
        </motion.div>

        {/* Right Content with Rotating Image */}
        <div className="flex justify-center items-center">
          <motion.img
            src={productImage}
            alt="Product"
            className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 2xl:w-96 2xl:h-96 mt-10 md:mt-0 object-cover rounded-full"
            animate={{
              rotate: 360, // Rotate 360 degrees
            }}
            transition={{
              duration: 10, // Slow speed (10 seconds for full rotation)
              repeat: Infinity, // Repeat infinitely
              repeatType: "loop", // Loop the animation
              ease: "linear", // Smooth and continuous rotation
            }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
