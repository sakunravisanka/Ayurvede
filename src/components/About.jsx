import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import AboutImage from "../assets/images/lanka.png";
import BackgroundImage from "../assets/images/aboutbackground.png"; // Import the background image

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Enhanced scroll-based transformations
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [0.7, 1]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.5], [0.5, 1]);
  const imageRotate = useTransform(scrollYProgress, [0, 0.5], [10, 0]);

  const textTranslateY = useTransform(scrollYProgress, [0, 0.5], [50, 0]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative min-h-full flex items-center justify-center p-8"
    >
      {" "}
      {/* Background Image on the Left Side */}
      <div
        className="absolute top-0 left-0 w-1/2 h-full"
        style={{
          backgroundImage: `url(${BackgroundImage})`,
          backgroundSize: "cover", // Ensures it covers the entire section
          backgroundPosition: "center", // Center the background
          backgroundRepeat: "no-repeat", // Do not repeat the image
          filter: "blur(10px)", // Apply blur effect
        }}
      ></div>
      <div
        id="about"
        className="max-w-5xl w-full grid md:grid-cols-2 gap-12 items-center relative"
      >
        {/* Text Section - Left Side */}
        <motion.div
          style={{
            translateY: textTranslateY,
            opacity: textOpacity,
          }}
          className="space-y-6 order-2 md:order-1 z-10"
        >
          <motion.h1
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-4xl font-bold text-black mb-4"
          >
            The Rich History of Ceylon's Ayurvedic Medicine
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-black leading-relaxed"
          >
            Ceylon, now known as Sri Lanka, has a long and vibrant history of
            Ayurvedic practices, which originated in India over 3,000 years ago.
            The island's diverse plant life and lush landscapes contributed to a
            rich tradition of herbal medicine, with local communities using
            natural remedies to maintain balance in mind, body, and spirit.
            <br />
            <br />
            Ancient Sri Lankan healers, known as Vaidyas, used Ayurvedic
            principles and native herbs to treat a variety of ailments, focusing
            on holistic approaches that treated the root cause of illness.
          </motion.p>
        </motion.div>

        {/* Image Section - Right Side */}
        <motion.div
          style={{
            scale: imageScale,
            opacity: imageOpacity,
            rotate: imageRotate,
          }}
          className="flex justify-center order-1 md:order-2 relative"
        >
          <motion.img
            src={AboutImage}
            alt="CeylonMystique"
            className="max-w-full h-auto rounded-2xl backdrop-blur-md"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
