import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

import one from "../assets/images/products/1.jpg";
import two from "../assets/images/products/2.jpg";
import three from "../assets/images/products/03.jpg";
import four from "../assets/images/products/4.avif";
import five from "../assets/images/products/5.avif";
import six from "../assets/images/products/6.jpg";
import seven from "../assets/images/products/7.jpg";
import eight from "../assets/images/products/8.jpg";

const products = [
  {
    id: 1,
    img: one,
    title: "Moringa Leaf Cure",
  },
  {
    id: 2,
    img: two,
    title: "Herb cure",
  },
  {
    id: 3,
    img: three,
    title: "Turmeric Powder",
  },
  {
    id: 4,
    img: four,
    title: "curry leaves cure",
  },
  {
    id: 5,
    img: five,
    title: " honey Cure",
  },
  {
    id: 6,
    img: six,
    title: "Natural herbs cure",
  },
  {
    id: 7,
    img: seven,
    title: "Amla Powder ",
  },
  {
    id: 8,
    img: eight,
    title: "Kontramalli powder",
  },
];

const ProductItem = ({ product }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{
        duration: 0.4,
        type: "spring",
        stiffness: 100,
        damping: 10,
      }}
      whileHover={{
        scale: 1.025,
        boxShadow: "0 15px 25px rgba(0,0,0,0.1), 0 6px 12px rgba(0,0,0,0.08)",
        transition: { duration: 0.3 },
      }}
      className="border border-gray-200 dark:border-slate-700 rounded-lg overflow-hidden relative hover:border-blue-200 transition-all duration-300"
    >
      <motion.a
        href="#!"
        whileTap={{ scale: 0.9 }}
        whileHover={{
          scale: 1.1,
          color: "#3b82f6",
        }}
        className="absolute top-4 right-4 z-20 text-base p-3 rounded-full bg-white/70 backdrop-blur-sm flex justify-center items-center shadow-md hover:bg-white/90 transition-all"
      >
        <FontAwesomeIcon icon={faHeart} />
      </motion.a>

      <div className="p-4 lg:p-6 bg-gray-50/50">
        <div className="h-[250px] flex justify-center items-center">
          <motion.img
            src={product.img}
            alt={product.title}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.2,
              duration: 0.4,
              type: "spring",
              stiffness: 120,
            }}
            className="max-h-full max-w-full object-contain rounded-md shadow-sm hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      <div className="p-4 lg:p-6 pt-2 text-center bg-white">
        <motion.h5
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.3 }}
          className="text-base leading-6 font-medium text-gray-800 hover:text-blue-600 transition-colors"
        >
          {product.title}
        </motion.h5>
      </div>
    </motion.div>
  );
};

ProductItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

const Products = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, type: "tween" }}
      className="py-16 md:py-24 bg-white/95 backdrop-blur-sm"
    >
      <div className="container px-4 mx-auto">
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 100,
          }}
          className="text-3xl font-bold text-center mb-10 mt-10 text-gray-800 tracking-tight"
        >
          Our Products
        </motion.h2>

        <AnimatePresence>
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  delayChildren: 0.2,
                  staggerChildren: 0.1,
                },
              },
            }}
            className="grid grid-cols-12 gap-6 text-center"
          >
            {products.map((product) => (
              <motion.div
                key={product.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      type: "spring",
                      stiffness: 120,
                      damping: 10,
                    },
                  },
                }}
                className="col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3 px-2 my-2"
              >
                <ProductItem product={product} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

export default Products;
