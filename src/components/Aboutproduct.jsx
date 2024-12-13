import React, { useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  ShieldCheckIcon,
  BeakerIcon,
  StarIcon,
  BadgeCheckIcon,
} from "lucide-react";
import ProductImage from "../assets/images/aboutp.jpg";

const ProductQuickOverview = () => {
  const [activeTab, setActiveTab] = useState("benefits");
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  const productDetails = {
    benefits: [
      "Comprehensive Immune System Optimization",
      "Advanced Cellular Defense Mechanism",
      "Enhanced Antioxidant Protection",
      "Sustained Energy and Vitality Support",
    ],
    ingredients: [
      "Elderberry Extract (500mg) - Potent Antiviral Properties",
      "Vitamin C (1000mg) - High-Potency Immune Booster",
      "Zinc Gluconate (30mg) - Cellular Immune Function",
      "Echinacea Purpurea (400mg) - Natural Immune Enhancer",
      "Probiotic Blend (10 Billion CFU) - Gut-Immune Connection",
    ],
    certifications: [
      "FDA Registered Facility",
      "Third-Party Laboratory Tested",
      "Vegan & Vegetarian Compliant",
      "cGMP (Current Good Manufacturing Practice) Certified",
      "Made in USA",
    ],
    dosage: [
      "Recommended Dosage: 2 Vegetarian Capsules Daily",
      "Optimal Timing: With Morning Meal",
      "30-Day Complete Immune Support Supply",
      "Suitable for Adults 18+",
      "Consult Healthcare Professional Before Use",
    ],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
        stiffness: 300,
        damping: 24,
      },
    },
  };

  const renderTabContent = () => {
    const content = productDetails[activeTab];
    return (
      <motion.ul
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-4 text-slate-700 dark:text-slate-300"
      >
        <AnimatePresence>
          {content.map((item, index) => (
            <motion.li
              key={index}
              variants={itemVariants}
              className="flex items-center space-x-4 p-3 bg-white  rounded-xl shadow-sm"
            >
              <BadgeCheckIcon className="text-green-500 w-6 h-6 flex-shrink-0" />
              <span className="font-medium text-sm text-slate-700 md:text-base">
                {item}
              </span>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    );
  };

  const tabStyles = (tab) =>
    `px-4 py-2 text-sm font-medium transition-all duration-300 ${
      activeTab === tab
        ? "bg-green-500 text-white rounded-full"
        : "text-slate-600  hover:bg-green-100 hover:accent rounded-full"
    }`;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      className="max-w-6xl mx-auto bg-secondary  rounded-3xl shadow-2xl overflow-hidden"
      ref={ref}
    >
      <div className="grid md:grid-cols-2 gap-8 p-6 md:p-12">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
          className="flex flex-col justify-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800  mb-4">
            Immunix Booster
          </h2>
          <p className="text-slate-600  mb-6 text-base md:text-lg">
            A breakthrough immune support supplement meticulously engineered
            with scientifically validated ingredients to enhance your body's
            natural defense mechanisms and promote optimal wellness.
          </p>
          <div className="mb-6 flex space-x-2 flex-wrap">
            {["benefits", "ingredients", "certifications", "dosage"].map(
              (tab) => (
                <motion.button
                  key={tab}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveTab(tab)}
                  className={tabStyles(tab)}
                >
                  <span>{tab}</span>
                </motion.button>
              )
            )}
          </div>
          {renderTabContent()}
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
          className="flex items-center justify-center"
        >
          <img
            src={ProductImage}
            alt="Immunix Booster Product"
            className="w-full h-auto max-h-[600px] object-cover rounded-2xl shadow-xl"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProductQuickOverview;
