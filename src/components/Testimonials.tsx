"use client";

import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Kwame Asante",
      text: "Found my Toyota Land Cruiser on Volta and the bidding process was incredibly transparent. Highly recommend!",
    },
    {
      name: "Abena Mensah",
      text: "As a first-time bidder, I was nervous, but the team in Accra guided me through every step. Great experience.",
    },
    {
      name: "Kofi Boateng",
      text: "Finally, an auction site that deals in Ghana Cedis. No more guessing exchange rates during a bid.",
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
          What Our Clients Say
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="flex flex-col bg-[#141414] p-10 rounded-3xl border border-white/5 relative overflow-hidden group hover:bg-[#1a1a1a] transition-all duration-300"
            >
              <Quote className="text-[#C9922A] absolute -top-4 -right-4 w-24 h-24 opacity-5 group-hover:opacity-10 transition-opacity" />
              <div className="text-[#C9922A] mb-8">
                <Quote size={40} />
              </div>
              <p className="text-white text-lg leading-relaxed italic mb-10">
                "{testimonial.text}"
              </p>
              <div className="mt-auto flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C9922A] to-[#8a631d] flex items-center justify-center text-black font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <h4 className="text-white font-bold text-lg">{testimonial.name}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
