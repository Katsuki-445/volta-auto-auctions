"use client";

import { ShieldCheck, Gavel, MapPin, Truck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WhyVolta() {
  const features = [
    {
      icon: <ShieldCheck size={32} />,
      title: "Inspected Vehicles",
      description: "Every car verified before listing.",
    },
    {
      icon: <Truck size={32} />,
      title: "Ghana Customs Cleared",
      description: "No hidden import fees.",
    },
    {
      icon: <Gavel size={32} />,
      title: "Secure Bidding",
      description: "Safe and transparent auction process.",
    },
    {
      icon: <MapPin size={32} />,
      title: "Accra Based",
      description: "Local support you can trust.",
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
          Why Volta
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-[#141414] p-10 rounded-3xl flex flex-col items-center md:items-start text-center md:text-left border border-white/5 group hover:border-[#C9922A]/20 transition-all duration-500"
            >
              <div className="text-[#C9922A] mb-8 bg-[#C9922A]/10 p-5 rounded-2xl group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-tight">{feature.title}</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
