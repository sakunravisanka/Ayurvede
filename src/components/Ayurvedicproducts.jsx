import React from "react";
import { motion } from "framer-motion";

const Ayurvedicproducts = () => {
  const products = [
    {
      name: "Paspanguwa",
      items: [
        "වේදනාවල්ගාව",
        "කොන්ත්‍රමල්ලි",
        "පත්නාදීගම්",
        "ඉඟුරු",
        "එලවළු",
        "කැවුම්කෑබලු",
        "ගම්මිරිස්",
        "විශ්නුක්රාන්ති",
      ],
    },
    {
      name: "Thalasadi",
      items: ["තාලසදී", "මි පෑනි"],
    },
    {
      name: "Kottamalli",
      items: ["කොත්තමල්ලි", "ඉඟුරු"],
    },
    {
      name: "ImmuniX",
      items: ["කහ", "මි පෑනි"],
    },
    {
      name: "Gastritis",
      items: ["අවිපත්තිකර", "නෙශකර"],
    },
    {
      name: "Obesity",
      items: ["ගෝරාකා", "සුදු එළු", "කරවින්ද", "කුලුදු"],
    },
    {
      name: "Cadiac",
      items: ["කරිවිල", "ගම්මිරිස්", "සුදු එළු"],
    },
    {
      name: "Thripala",
      items: ["අරළු", "බුලු", "නෙලි"],
    },
  ];

  return (
    <div className="bg-white from-emerald-50 to-teal-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-left text-4xl font-extrabold text-black mb-12 tracking-tight">
          OUR AYURVEDIC PRODUCTS
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                scale: 1.05,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
            >
              <div className="p-6">
                <h2 className="text-2xl font-bold text-primary mb-4 text-center border-b-2 border-green-900 pb-2">
                  {product.name}
                </h2>
                <ul className="space-y-2 text-gray-700">
                  {product.items.map((item, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <svg
                        className="w-4 h-4 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ayurvedicproducts;
