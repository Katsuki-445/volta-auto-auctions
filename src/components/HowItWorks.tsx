"use client";

import { motion } from 'framer-motion';

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Browse Listings",
      description: "Find your ideal vehicle from our curated auction inventory.",
    },
    {
      number: "02",
      title: "Place Your Bid",
      description: "Register and bid securely in Ghana cedis.",
    },
    {
      number: "03",
      title: "Win & Collect",
      description: "Pay securely and collect your vehicle in Accra.",
    },
  ];

  return (
    <section className="bg-black py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white mb-16 text-center md:text-left"
        >
          How It Works
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col"
            >
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-16 h-16 rounded-2xl bg-[#C9922A]/10 flex items-center justify-center text-[#C9922A] text-2xl font-black mb-8 border border-[#C9922A]/20"
              >
                {step.number}
              </motion.div>
              <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
              <p className="text-gray-400 leading-relaxed max-w-xs">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
