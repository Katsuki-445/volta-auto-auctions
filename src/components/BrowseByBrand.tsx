"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function BrowseByBrand() {
  const brands = [
    { name: "Toyota", image: "https://cdn.simpleicons.org/toyota/FFFFFF" },
    { name: "Range Rover", image: "/landrover.svg" },
    { name: "Lexus", image: "/lexus.svg" },
    { name: "Mercedes", image: "/mercedes.svg" },
    { name: "Honda", image: "https://cdn.simpleicons.org/honda/FFFFFF" },
    { name: "Hyundai", image: "https://cdn.simpleicons.org/hyundai/FFFFFF" },
    { name: "Nissan", image: "https://cdn.simpleicons.org/nissan/FFFFFF" },
    { name: "Kia", image: "https://cdn.simpleicons.org/kia/FFFFFF" },
  ];

  return (
    <section className="bg-black py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white mb-16 text-center md:text-left tracking-tight"
        >
          Browse by Brand
        </motion.h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4 md:gap-6">
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="bg-[#141414] p-6 rounded-[2rem] flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-500 border border-white/5 hover:border-[#C9922A]/40 group aspect-square"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 mb-4 flex items-center justify-center">
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="w-full h-full object-contain opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                />
              </div>
              <span className="text-[10px] md:text-xs font-bold text-gray-500 group-hover:text-[#C9922A] transition-colors uppercase tracking-widest">
                {brand.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
