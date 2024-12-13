import React from "react";
import { motion } from "framer-motion";
import Logo from "../assets/images/Logo.png";
import FooterBg from "../assets/images/footer.jpg";

const Footer = () => {
  // Framer Motion animations
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const linkVariants = {
    hover: { scale: 1.1, color: "#4CAF50" },
    tap: { scale: 0.95 },
  };

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

        {/* Opening Hours Section with Social Links on the Right */}
        <div className="flex justify-between items-start w-full ml-4">
          <div className="flex flex-col items-start w-full sm:w-2/3">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Opening Hours
            </h3>
            <p className="text-gray-600 mb-2">
              Monday to Saturday 8:00 am to 8:00 pm
            </p>
            <p className="text-gray-600">Sundays 12:00 noon to 8:00 pm</p>
          </div>

          {/* Social Links Section */}
          <div className="flex justify-end space-x-4 mt-4 sm:w-1/3">
            <motion.a
              href="https://www.facebook.com/ceylonmystique"
              className="text-gray-600 hover:text-blue-500"
              variants={linkVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <i className="fab fa-facebook-f"></i>
            </motion.a>
            <motion.a
              href="https://twitter.com/ceylonmystique"
              className="text-gray-600 hover:text-blue-500"
              variants={linkVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <i className="fab fa-twitter"></i>
            </motion.a>
            <motion.a
              href="https://www.instagram.com/ceylonmystique"
              className="text-gray-600 hover:text-pink-500"
              variants={linkVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <i className="fab fa-instagram"></i>
            </motion.a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
