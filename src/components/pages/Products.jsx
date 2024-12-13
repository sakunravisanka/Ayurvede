import React, { Fragment } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faStar,
  faHeart,
  faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
import PropTypes from "prop-types";

const products = [
  {
    img: "https://cdn.easyfrontend.com/pictures/products/perfume2.png",
    title: "Men's Perfumes Sauvage Eau De Parfum Perfumes Long Lasting",
    price: "1300.00",
    rating: 3.5,
  },
  {
    img: "https://cdn.easyfrontend.com/pictures/products/shoe1.png",
    title: "LAOCHRA White Shoes For Men Sneakers Leather Korean Style",
    price: "1751.00",
    rating: 3.5,
  },
  {
    img: "https://cdn.easyfrontend.com/pictures/products/sofa1.png",
    title:
      "Multi-functional leather sofa small living room modern simple smart sofa combin",
    price: "751.00",
    rating: 4.5,
  },
  {
    img: "https://cdn.easyfrontend.com/pictures/products/tshirt1.png",
    title: "Spring Autumn Kids Thin Sweater Boy Clothes Cute Dinosaur",
    price: "1225.00",
    rating: 3.5,
  },
  {
    img: "https://cdn.easyfrontend.com/pictures/products/watch3.png",
    title: "Smart Watch Ultra 8 NFC Access Control Unlocking Smartwatch Series",
    price: "1524.00",
    rating: 3.5,
  },
  {
    img: "https://cdn.easyfrontend.com/pictures/products/pant3.png",
    title:
      "Boys Pants Boys Pants Solid Cargo Pants Teenage Boy Multi-Pocket Trousers",
    price: "852.00",
    rating: 4,
  },
  {
    img: "https://cdn.easyfrontend.com/pictures/products/earings2.png",
    title: "New Classic Copper Alloy Smooth Metal Hoop Earrings For Woman",
    price: "458.00",
    rating: 3.5,
  },
  {
    img: "https://cdn.easyfrontend.com/pictures/products/bag1.png",
    title: "Luxury Tassel Small Messenger Bag For Women Lingge Embroidery",
    price: "754.00",
    rating: 4.5,
  },
  {
    img: "https://cdn.easyfrontend.com/pictures/products/cap3.png",
    title: "Disney Captain America Children's Hat Baby Baseball",
    price: "547.00",
    rating: 4,
  },
  {
    img: "https://cdn.easyfrontend.com/pictures/products/bottle1.png",
    title: "Touch Rechargeable Bud Table Lamps LED Creative Mushroom",
    price: "879.00",
    rating: 4.5,
  },
  {
    img: "https://cdn.easyfrontend.com/pictures/products/sofa5.png",
    title: "Modern Lounge Chair with Ottoman Classic Designer Chair",
    price: "684.00",
    rating: 4.5,
  },
  {
    img: "https://cdn.easyfrontend.com/pictures/products/lamp5.png",
    title: "Touch Rechargeable Bud Table Lamps LED Creative Mushroom",
    price: "245.00",
    rating: 4,
  },
];

const Rating = ({ rating }) => (
  <h5 className="text-sm text-yellow-500">
    {[...Array(5)].map((_, i) => {
      const index = i + 1;
      let content = "";
      if (index <= Math.floor(rating))
        content = <FontAwesomeIcon icon={faStar} />;
      else if (rating > i && rating < index + 1)
        content = <FontAwesomeIcon icon={faStarHalfAlt} />;
      else if (index > rating) content = <FontAwesomeIcon icon={farStar} />;
      return <Fragment key={i}>{content}</Fragment>;
    })}
  </h5>
);

Rating.propTypes = {
  rating: PropTypes.number,
};

const ProductItem = ({ product }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, type: "spring", stiffness: 120 }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 10px 20px rgba(0,0,0,0.12), 0 4px 8px rgba(0,0,0,0.06)",
      }}
      className="border dark:border-slate-700 rounded-md relative p-2 h-full"
    >
      <motion.a
        href="#!"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        className="absolute top-4 right-4 z-20 text-base p-4 rounded-full bg-slate-100 flex justify-center items-center hover:text-blue-600"
      >
        <FontAwesomeIcon icon={faHeart} />
      </motion.a>

      <div className="p-4 lg:p-6">
        <div className="min-h-[210px] flex justify-center items-center h-full px-6">
          <motion.img
            src={product.img}
            alt="product image"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.2,
              duration: 0.3,
            }}
            className="max-h-[200px] max-w-full w-auto"
          />
        </div>
      </div>

      <div className="p-4 lg:p-6 h-full pt-0 text-center">
        <a href="#!">
          <motion.h5
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-base leading-5 font-medium"
          >
            {product.title}
          </motion.h5>
        </a>

        <Rating rating={product.rating} />

        <motion.h5
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-blue-600 text-base font-medium leading-none my-2"
        >
          ${product.price}
        </motion.h5>

        <motion.a
          href="#!"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="inline-block font-medium hover:text-blue-600"
        >
          <FontAwesomeIcon icon={faShoppingCart} />
        </motion.a>
      </div>
    </motion.div>
  );
};

ProductItem.propTypes = {
  product: PropTypes.object.isRequired,
};

const Products = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="ezy__epgrid4 light py-14 md:py-24 bg-white text-zinc-900 relative overflow-hidden z-10"
    >
      <div id="Products" className="container px-4 mx-auto">
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold leading-none md:text-[40px] text-center"
        >
          Our Products
        </motion.h2>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                delayChildren: 0.3,
                staggerChildren: 0.1,
              },
            },
          }}
          className="grid grid-cols-12 gap-6 text-center mt-12"
        >
          {products.map((product, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 120,
                  },
                },
              }}
              className="col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3 px-2 my-2"
            >
              <ProductItem product={product} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center mt-12"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-white font-bold py-3 px-11 bg-blue-600 hover:bg-opacity-90 rounded"
        >
          See All
        </motion.button>
      </motion.div>
    </motion.section>
  );
};

export default Products;
