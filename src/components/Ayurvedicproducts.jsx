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
    <div className="max-w-screen-lg mx-auto py-10 px-4">
      <h1 className="text-left text-3xl font-bold mb-10 mt-10">
        OUR AYURVEDIC PRODUCTS
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 shadow-md rounded-lg"
            whileHover={{ scale: 1.02 }}
          >
            <h2 className="text-2xl font-semibold mb-2 text-center">
              {product.name}
            </h2>
            <ul className="list-disc list-inside text-gray-700">
              {product.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Ayurvedicproducts;
