"use client";

import AuctionCard from './AuctionCard';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

// Stable base date for demo purposes to avoid hydration mismatches
const DEMO_BASE_DATE = new Date('2026-03-07T00:00:00Z').getTime();

export const AUCTION_ITEMS = [
  {
    id: "toyota-land-cruiser-2023",
    name: "Toyota Land Cruiser",
    price: "850,000",
    image: "/1.jpg",
    year: 2023,
    mileage: "12,500 km",
    condition: "9.5/10",
    description: "Pristine 2023 Land Cruiser with full features.",
    ends_at: new Date(DEMO_BASE_DATE + 1000 * 60 * 60 * 48).toISOString(),
  },
  {
    id: "range-rover-vogue-2022",
    name: "Range Rover Vogue",
    price: "920,000",
    image: "/range-rover.png",
    year: 2022,
    mileage: "18,000 km",
    condition: "9.0/10",
    description: "Luxury SUV with exceptional off-road capability.",
    ends_at: new Date(DEMO_BASE_DATE + 1000 * 60 * 60 * 72).toISOString(),
  },
  {
    id: "lexus-lx-2021",
    name: "Lexus LX",
    price: "780,000",
    image: "/lexus-lx.png",
    year: 2021,
    mileage: "25,000 km",
    condition: "8.5/10",
    description: "Premium reliability and comfort in a full-size SUV.",
    ends_at: new Date(DEMO_BASE_DATE + 1000 * 60 * 60 * 24).toISOString(),
  },
  {
    id: "mercedes-glc-2023",
    name: "Mercedes GLC",
    price: "650,000",
    image: "/mercedes-glc.png",
    year: 2023,
    mileage: "5,000 km",
    condition: "9.8/10",
    description: "Sporty and sophisticated compact luxury SUV.",
    ends_at: new Date(DEMO_BASE_DATE + 1000 * 60 * 60 * 96).toISOString(),
  },
  {
    id: "honda-accord-2020",
    name: "Honda Accord",
    price: "180,000",
    image: "/honda-accord.png",
    year: 2020,
    mileage: "45,000 km",
    condition: "8.0/10",
    description: "Clean executive sedan with great fuel efficiency.",
    ends_at: new Date(DEMO_BASE_DATE + 1000 * 60 * 60 * 120).toISOString(),
  },
  {
    id: "toyota-hilux-2023",
    name: "Toyota Hilux",
    price: "320,000",
    image: "/toyota-hilux.png",
    year: 2023,
    mileage: "10,000 km",
    condition: "9.2/10",
    description: "Tough and dependable pickup truck for all terrains.",
    ends_at: new Date(DEMO_BASE_DATE + 1000 * 60 * 60 * 48).toISOString(),
  },
  {
    id: "hyundai-palisade-2022",
    name: "Hyundai Palisade",
    price: "420,000",
    image: "/hyundai-palisade.png",
    year: 2022,
    mileage: "15,000 km",
    condition: "9.0/10",
    description: "Spacious 3-row family SUV with modern tech.",
    ends_at: new Date(DEMO_BASE_DATE + 1000 * 60 * 60 * 72).toISOString(),
  },
  {
    id: "nissan-patrol-2023",
    name: "Nissan Patrol",
    price: "680,000",
    image: "/nissan-patrol.png",
    year: 2023,
    mileage: "8,000 km",
    condition: "9.5/10",
    description: "Iconic off-road performance and premium interior.",
    ends_at: new Date(DEMO_BASE_DATE + 1000 * 60 * 60 * 144).toISOString(),
  },
];

export default function AuctionGrid() {
  return (
    <section id="auctions" className="px-6 md:px-12 py-12 md:py-24 bg-black">
      <div className="flex items-center justify-between mb-8 md:mb-12">
        <motion.h2 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl font-bold text-white tracking-tight"
        >
          Active Auction
        </motion.h2>
        <motion.div 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center text-white cursor-pointer hover:bg-white/10 transition-all"
        >
          <ChevronRight size={20} />
        </motion.div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {AUCTION_ITEMS.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <AuctionCard 
              id={item.id}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
