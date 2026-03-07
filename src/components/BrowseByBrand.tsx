"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function BrowseByBrand() {
  const brands = [
    { name: "Toyota", image: "/1.jpg" },
    { name: "Range Rover", image: "/range-rover.png" },
    { name: "Lexus", image: "/lexus-lx.png" },
    { name: "Mercedes-Benz", image: "/mercedes-glc.png" },
    { name: "Honda", image: "/honda-accord.png" },
    { name: "Hyundai", image: "/hyundai-palisade.png" },
    { name: "Nissan", image: "/nissan-patrol.png" },
    { name: "Kia", image: "/kia-telluride.png" },
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
              className="bg-[#141414] p-6 rounded-[2rem] flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-500 border border-white/5 hover:border-[#C9922A]/40 group"
            >
              <div className="relative w-full aspect-square mb-4">
                <Image
                  src={brand.image}
                  alt={brand.name}
                  fill
                  className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 scale-125"
                />
              </div>
              <span className="text-xs md:text-sm font-bold text-gray-400 group-hover:text-white transition-colors uppercase tracking-widest">
                {brand.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
