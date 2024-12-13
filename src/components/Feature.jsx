import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldVirus,
  faFlask,
  faLeaf,
  faPills,
  faSyringe,
  faMedal,
} from "@fortawesome/free-solid-svg-icons";

const features = [
  {
    icon: faShieldVirus,
    title: "Advanced Immune Defense",
    desc: "Comprehensive immune system support targeting multiple defense pathways for holistic protection.",
  },
  {
    icon: faFlask,
    title: "Scientifically Formulated",
    desc: "Precision-engineered blend developed through rigorous research and clinical insights.",
  },
  {
    icon: faLeaf,
    title: "Natural High-Potency Ingredients",
    desc: "Premium, ethically sourced natural compounds delivering maximum nutritional benefits.",
  },
  {
    icon: faPills,
    title: "Optimal Bioavailability",
    desc: "Advanced absorption technology ensures maximum uptake of critical immune-supporting nutrients.",
  },
  {
    icon: faSyringe,
    title: "Targeted Cellular Support",
    desc: "Precise nutrient combinations that activate and optimize immune cell functionality.",
  },
  {
    icon: faMedal,
    title: "Clinically Validated Wellness",
    desc: "Backed by scientific research, ensuring a trusted approach to immune system enhancement.",
  },
];

const FeatureItem = ({ feature, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
      }}
      className="group relative bg-accent rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 overflow-hidden"
    >
      <motion.div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-highlight transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
      <div className="flex items-center mb-4">
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
          className="text-green-600 bg-green-50 dark:bg-slate-300 rounded-full w-16 h-16 flex items-center justify-center mr-6 transition-all duration-300"
        >
          <FontAwesomeIcon icon={feature.icon} className="text-3xl" />
        </motion.div>
        <h4 className="text-xl font-semibold text-black ">{feature.title}</h4>
      </div>
      <p className="text-slate-600  leading-relaxed">{feature.desc}</p>
    </motion.div>
  );
};

const ImmunixBoosterSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="py-16 md:py-24 bg-slate-50  overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Immunix Booster
          </h2>
          <p className="text-lg text-slate-600  mb-6">
            A cutting-edge supplement designed to enhance your body's natural
            defense mechanisms. Packed with powerful antioxidants and
            immune-supporting compounds, it helps you stay resilient and
            energetic.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureItem key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ImmunixBoosterSection;
