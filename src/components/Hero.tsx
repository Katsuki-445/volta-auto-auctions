"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center h-[60vh] md:h-[85vh] w-full overflow-hidden bg-black">
      {/* Background Text Layer (Behind the car) */}
      <motion.div 
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden px-4"
      >
        <h1 className="text-[18vw] sm:text-[22vw] font-[1000] text-white/[0.07] tracking-tighter uppercase leading-none text-center whitespace-nowrap">
          BID. WIN. DRIVE.
        </h1>
      </motion.div>

      {/* Glow Effect Layer (behind the car) */}
      <motion.div 
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[900px] h-[200px] md:h-[400px] bg-orange-500/20 blur-[80px] md:blur-[180px] rounded-full z-0" 
      />

      {/* The Car Layer (In front of the text) */}
      <motion.div 
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
        className="relative z-10 w-full max-w-7xl px-4 md:px-8"
      >
        <div className="relative w-full aspect-[2/1] scale-125 md:scale-110">
          <Image
            src="/land-cruiser.png"
            alt="Toyota Land Cruiser"
            fill
            className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)] md:drop-shadow-[0_30px_60px_rgba(0,0,0,0.9)]"
            priority
          />
        </div>
      </motion.div>
    </section>
  );
}
