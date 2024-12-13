import React from "react";
import { motion } from "framer-motion";
import Logo from "../assets/images/Logo.png";
import FooterBg from "../assets/images/footernew.png";

const Footer = () => {
  // Framer Motion animations
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        staggerChildren: 0.2, // Add stagger effect for child elements
      },
    },
  };

  const socialIconVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: {
        type: "spring",
        stiffness: 300,
      },
    },
    tap: { scale: 0.9 },
  };

  // Social links with explicit icon rendering
  const socialLinks = [
    {
      href: "https://www.facebook.com",
      icon: "facebook-f",
      color: "text-blue-600 hover:text-blue-800",
    },
    {
      href: "https://twitter.com",
      icon: "twitter",
      color: "text-sky-500 hover:text-sky-700",
    },
    {
      href: "https://www.instagram.com",
      icon: "instagram",
      color: "text-pink-600 hover:text-pink-800",
    },
  ];

  return (
    <motion.footer
      className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 w-full min-h-screen"
      style={{
        backgroundImage: `url(${FooterBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto flex flex-col items-start space-y-8 h-full">
        {/* Logo Section */}
        <div className="flex flex-col items-start ml-4">
          <img src={Logo} alt="Ceylon Mystique" className="w-40 mb-4" />
        </div>

        {/* Main Branch Section */}
        <div className="flex flex-col items-start ml-4">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Main Branch</h3>
          <p className="text-gray-600">
            Viyathpura, Pannipitiya,
            <br />
            Colombo, Sri Lanka
          </p>
          <br />
          <p className="text-gray-600 mb-2">Call: +94 76 686 1659</p>
          <p className="text-gray-600">Email: contact@ceylonmystique.com</p>
        </div>

        {/* Opening Hours Section */}
        <div className="flex flex-col items-start ml-4 w-full">
          <div className="flex flex-col items-start w-full">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Opening Hours
            </h3>
            <p className="text-gray-600 mb-2">
              Monday to Saturday 8:00 am to 8:00 pm
            </p>
            <p className="text-gray-600 mb-4">Sundays 12:00 noon to 8:00 pm</p>
          </div>

          {/* Social Links Section */}
          <div className="flex space-x-6 justify-start items-center text-2xl">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${link.color} transition-colors duration-300`}
                variants={socialIconVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <i className={`fab fa-${link.icon}`}></i>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
