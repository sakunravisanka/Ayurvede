import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingCart } from "lucide-react"; // Import the ShoppingCart icon
import logo from "../assets/images/Logo.png"; // Import your logo image

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const menuItems = [
    { label: "Home", href: "/#home", route: "/", icon: null },
    { label: "Product", href: "/products", route: "/products", icon: null }, // Removed icon
    { label: "About", href: "/#about", route: "/", icon: null },
    { label: "Service", href: "/#service", route: "/", icon: null },
    { label: "Contact", href: "/#contact", route: "/", icon: null },
  ];

  const containerVariants = {
    hidden: {
      opacity: 0,
      y: -30,
      transition: {
        staggerChildren: 0.1,
        type: "tween",
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
        type: "spring",
        stiffness: 120,
        damping: 15,
      },
    },
  };

  const menuVariants = {
    hidden: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };

  const linkVariants = {
    hidden: {
      opacity: 0,
      x: -20,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 300,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="fixed h-20 top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg shadow-md"
    >
      <div className="max-w-7xl mx-auto px-4 py-1 flex justify-between items-center">
        {/* Logo with Link to Home */}
        <Link to="/">
          <motion.div
            variants={linkVariants}
            className="flex items-center space-x-2"
          >
            <img src={logo} alt="Logo" className="h-20" />
            {/* Logo Image */}
          </motion.div>
        </Link>

        {/* Desktop Product Action Button with Icon */}
        <motion.button
          variants={linkVariants}
          whileHover="hover"
          className="hidden md:flex items-center mr-10 bg-primary text-white px-4 py-2 rounded-full space-x-2 hover:bg-green-800 transition justify-center mx-auto md:ml-0"
        >
          <ShoppingCart size={20} /> {/* ShoppingCart Icon */}
          <span className="text-sm font-medium">Shop</span>
        </motion.button>

        {/* Mobile Menu Toggle */}
        <motion.button
          variants={linkVariants}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-800"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex mr-4 space-x-6 items-center ml-auto">
            {menuItems.map((item) => {
              return (
                <HashLink
                  key={item.label}
                  to={item.href}
                  scroll={(el) => el.scrollIntoView({ behavior: "smooth" })}
                >
                  <motion.div
                    variants={linkVariants}
                    whileHover="hover"
                    whileTap="tap"
                    onClick={() => setActiveLink(item.label)}
                    className={`flex items-center space-x-2 relative group ${
                      activeLink === item.label
                        ? "text-primary"
                        : "text-gray-700"
                    }`}
                  >
                    <span className="font-medium">{item.label}</span>
                    {activeLink === item.label && (
                      <motion.span
                        layoutId="underline"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-highlight"
                      />
                    )}
                  </motion.div>
                </HashLink>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
            className="md:hidden fixed top-16 right-0 w-64 bg-white shadow-2xl rounded-lg p-4"
          >
            <motion.div variants={containerVariants} className="space-y-4">
              {menuItems.map((item) => {
                return (
                  <HashLink
                    key={item.label}
                    to={item.href}
                    scroll={(el) => el.scrollIntoView({ behavior: "smooth" })}
                  >
                    <motion.div
                      variants={linkVariants}
                      onClick={() => {
                        setActiveLink(item.label);
                        setIsOpen(false);
                      }}
                      className={`flex items-center space-x-3 p-3 rounded-md transition-colors ${
                        activeLink === item.label
                          ? "bg-blue-50 text-blue-600"
                          : "hover:bg-gray-100"
                      }`}
                    >
                      <span className="text-lg">{item.label}</span>
                    </motion.div>
                  </HashLink>
                );
              })}

              {/* Mobile Shop Button */}
              <motion.button
                variants={linkVariants}
                whileHover="hover"
                className="flex items-center bg-primary text-white px-4 py-2 rounded-full space-x-2 hover:bg-green-800 transition justify-center mx-auto"
              >
                <ShoppingCart size={20} /> {/* ShoppingCart Icon */}
                <span className="text-sm font-medium">Shop</span>
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default NavigationBar;
