import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Assuming you'll import these images
import LeftImage from "../assets/images/wherep/left.png";
import SmallImage1 from "../assets/images/wherep/K.png";
import SmallImage2 from "../assets/images/wherep/FC.png";
import SmallImage3 from "../assets/images/wherep/sg.jpg";

const WhereProduct = () => {
  // State to track screen size
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size on component mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind's md breakpoint
    };

    // Check initial screen size
    checkScreenSize();

    // Add event listener for window resize
    window.addEventListener("resize", checkScreenSize);

    // Cleanup event listener
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Desktop image variants (horizontal)
  const desktopImageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.7,
      x: 50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
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

  // Mobile image variants (vertical)
  const mobileImageVariants = {
    hidden: {
      opacity: 0,
      y: 100, // Start below the original position
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0, // Move to original position
      scale: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 150,
        mass: 0.8,
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
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

  // Container variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  // Array of small images
  const smallImages = [
    { src: SmallImage1, alt: "Product Location 1" },
    { src: SmallImage2, alt: "Product Location 2" },
    { src: SmallImage3, alt: "Product Location 3" },
  ];

  // Render different layouts based on screen size
  const renderImageGrid = () => {
    if (isMobile) {
      // Mobile View: Vertical Stacked Layout with Reduced Size
      return (
        <motion.div
          className="flex flex-col space-y-4 items-center"
          variants={containerVariants}
        >
          {smallImages.map((image, index) => (
            <motion.div
              key={index}
              className="w-full max-w-[120px] mr-28 aspect-square rounded-lg shadow-md" // Reduced max-w from 200px to 120px
              variants={mobileImageVariants}
            >
              <motion.img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover rounded-lg"
                whileHover="hover"
                whileTap="tap"
              />
            </motion.div>
          ))}
        </motion.div>
      );
    } else {
      // Desktop View: Horizontal Layout
      return (
        <motion.div
          className="grid grid-cols-3 gap-4 justify-center md:justify-end"
          variants={containerVariants}
        >
          {smallImages.map((image, index) => (
            <motion.div
              key={index}
              className="aspect-square rounded-lg shadow-md"
              variants={desktopImageVariants}
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
      );
    }
  };

  return (
    <motion.div
      className="relative py-12 h-full flex items-center overflow-hidden"
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
      <div
        id="service"
        className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10"
      >
        {/* Left Side - Placeholder or Empty for Mobile Layout */}
        <div className="hidden md:block"></div>

        {/* Right Side - Content */}
        <div className="flex flex-col justify-center text-center md:text-right space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Where to buy our products
          </h1>

          <p className="text-base md:text-lg text-gray-600 mb-6">
            You can find our products in all major supermarket chains and
            leading pharmacies across Sri Lanka. Experience the natural goodness
            of Ceylon Mystique's Ayurvedic and herbal offerings conveniently at
            your nearest store.
          </p>

          {/* Responsive Image Grid */}
          {renderImageGrid()}
        </div>
      </div>

      {/* Modern Overlay with Blur Effect */}
      <div className="absolute inset-0 bg-white/20 backdrop-blur-sm z-0"></div>
    </motion.div>
  );
};

export default WhereProduct;
