import React, { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingCart, Search } from "lucide-react";
import logo from "../assets/images/Logo.png";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [searchQuery, setSearchQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Home", href: "/#home", route: "/" },
    { label: "Product", href: "/products", route: "/products" },
    { label: "About", href: "/#about", route: "/" },
    { label: "Service", href: "/#service", route: "/" },
    { label: "Contact", href: "/#contact", route: "/" },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: -30 },
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

  const linkVariants = {
    hidden: { opacity: 0, x: -20, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
    hover: {
      scale: 1.05,
      transition: { type: "spring", stiffness: 300 },
    },
    tap: { scale: 0.95 },
  };

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      x: "100%",
      transition: { duration: 0.4, ease: "easeInOut" },
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={`fixed h-20 top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg shadow-md ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-md"
          : "bg-white/95 backdrop-blur-sm shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-1 flex justify-between items-center relative">
        {/* Logo */}
        <Link to="/">
          <motion.div
            variants={linkVariants}
            className="flex items-center space-x-2"
          >
            <img
              src={logo}
              alt="Logo"
              className={`h-16 filter brightness-90 contrast-125 saturate-150 hue-rotate-15 transform transition-all duration-300 ${
                scrolled ? "h-12 md:h-14" : "h-16 md:h-18"
              }`}
            />
          </motion.div>
        </Link>

        {/* Desktop Navigation Centered */}
        <div className="hidden lg:flex flex-grow justify-center items-center space-x-8">
          {menuItems.map((item) => (
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
                    ? "text-green-600"
                    : "text-gray-700 hover:text-green-500"
                }`}
              >
                <span className="font-medium transition-colors duration-300">
                  {item.label}
                </span>
                {activeLink === item.label && (
                  <motion.span
                    layoutId="underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-green-600"
                  />
                )}
              </motion.div>
            </HashLink>
          ))}
        </div>

        {/* Search Bar */}
        <motion.form
          variants={linkVariants}
          onSubmit={handleSearch}
          className="hidden lg:flex items-center relative mx-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
        >
          <motion.div
            className="relative flex items-center"
            whileFocus={{ scale: 1.02, transition: { duration: 0.2 } }}
          >
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 w-64 bg-transparent focus:outline-none placeholder-gray-500 text-gray-700"
            />
            <motion.div
              className="absolute left-2 text-gray-500"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Search size={20} />
            </motion.div>
            {/* Animated Underline */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-[1px] bg-green-500 origin-left"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
            />
          </motion.div>
        </motion.form>

        {/* Shop Cart Button - Right Corner */}
        <motion.button
          variants={linkVariants}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          }}
          whileTap={{ scale: 0.95 }}
          className="hidden lg:flex items-center absolute right-10 top-1/2 -translate-y-1/2 bg-primary text-white px-4 py-2 rounded-full space-x-2 hover:bg-green-800 transition"
        >
          <ShoppingCart size={20} />
          <span className="text-sm font-medium">Shop</span>
        </motion.button>

        {/* Mobile Menu Toggle */}
        <motion.button
          variants={linkVariants}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-gray-800"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={mobileMenuVariants}
            className="lg:hidden fixed top-20 right-0 w-72 bg-white/95 backdrop-blur-lg shadow-2xl rounded-bl-2xl border-l border-b border-green-50"
          >
            {/* Search Bar for Mobile */}
            <motion.form
              onSubmit={handleSearch}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 pb-0"
            >
              <motion.div
                className="relative flex items-center bg-gray-100 rounded-full px-4 py-2"
                whileFocus={{ scale: 1.02, transition: { duration: 0.2 } }}
              >
                <Search size={20} className="text-gray-500 mr-2" />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent focus:outline-none placeholder-gray-500 text-gray-700"
                />
              </motion.div>
            </motion.form>

            <motion.div variants={containerVariants} className="p-6 space-y-4">
              {menuItems.map((item) => (
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
                    className={`flex items-center justify-between p-3 rounded-lg transition-all duration-300 ${
                      activeLink === item.label
                        ? "bg-green-50 text-green-700"
                        : "hover:bg-green-50/50 hover:text-green-600"
                    }`}
                  >
                    <span className="text-lg font-medium">{item.label}</span>
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      className={`h-2 w-2 rounded-full ${
                        activeLink === item.label
                          ? "bg-green-600"
                          : "bg-transparent"
                      }`}
                    />
                  </motion.div>
                </HashLink>
              ))}

              {/* Mobile Shop Button */}
              <motion.button
                variants={linkVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                }}
                whileTap={{ scale: 0.95 }}
                className="w-full flex items-center justify-center bg-primary text-white px-4 py-3 rounded-full space-x-2 hover:bg-green-900 transition"
              >
                <ShoppingCart size={20} />
                <span className="text-sm font-medium">Shop Now</span>
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default NavigationBar;
