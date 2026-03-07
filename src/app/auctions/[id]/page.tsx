'use client'

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { History, ShieldCheck, Gavel, TrendingUp } from "lucide-react";
import { useState, useEffect, use } from "react";
import CountdownTimer from "@/components/CountdownTimer";
import { motion } from "framer-motion";
import { AUCTION_ITEMS } from "@/components/AuctionGrid";

export default function CarDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const [car, setCar] = useState<any>(null);
  const [bidAmount, setBidAmount] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const foundCar = AUCTION_ITEMS.find(c => c.id === resolvedParams.id);
    if (foundCar) {
      setCar(foundCar);
    }
  }, [resolvedParams.id]);

  const handleBid = (e: React.FormEvent) => {
    e.preventDefault();
    const amount = parseFloat(bidAmount.replace(/,/g, ''));
    const currentPrice = parseFloat(car.price.replace(/,/g, ''));

    if (amount <= currentPrice) {
      alert(`Bid must be higher than GH₵ ${car.price}`);
      return;
    }

    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
    setBidAmount("");
    alert("Demo Bid Placed! (Static Mode)");
  };

  if (!car) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white">
        <motion.div 
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-xl font-bold uppercase tracking-widest"
        >
          Loading vehicle details...
        </motion.div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left: Image and Description */}
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative aspect-[16/10] md:aspect-[16/10] bg-[#141414] rounded-[2rem] overflow-hidden border border-white/5"
            >
              <Image
                src={car.image}
                alt={car.name}
                fill
                className="object-contain p-4 md:p-8 scale-110 md:scale-100"
              />
            </motion.div>
            
            <div className="bg-[#141414] p-6 md:p-8 rounded-[2rem] border border-white/5 space-y-6">
              <h2 className="text-xl md:text-2xl font-bold text-white uppercase tracking-tight">Description</h2>
              <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                {car.description}
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/5">
                <div>
                  <p className="text-gray-500 text-[10px] md:text-sm uppercase tracking-wider mb-1 font-bold">Mileage</p>
                  <p className="text-white font-bold text-sm md:text-base">{car.mileage}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-[10px] md:text-sm uppercase tracking-wider mb-1 font-bold">Condition</p>
                  <p className="text-[#C9922A] font-bold text-sm md:text-base">{car.condition}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Bidding and History */}
          <div className="space-y-8">
            <div className="bg-[#141414] p-6 md:p-8 rounded-[2rem] border border-white/5 space-y-8">
              <div>
                <h1 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tighter mb-2 leading-tight">
                  {car.name} <span className="text-[#C9922A]">{car.year}</span>
                </h1>
                <p className="text-gray-500 font-medium text-xs md:text-sm">Lot #VAA-DEMO-{car.id?.slice(0, 3).toUpperCase()}</p>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 bg-black rounded-2xl border border-white/5 relative overflow-hidden group gap-6">
                <div className="absolute inset-0 bg-[#C9922A]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <p className="text-gray-500 text-[10px] uppercase tracking-widest mb-2 flex items-center font-bold">
                    <TrendingUp size={12} className="mr-1 text-green-500" /> Current Bid
                  </p>
                  <p className="text-2xl md:text-3xl font-black text-white tracking-tighter">GH₵ {car.price}</p>
                </div>
                <div className="text-left sm:text-right relative z-10 w-full sm:w-auto">
                  <p className="text-gray-500 text-[10px] uppercase tracking-widest mb-2 font-bold">Ends In</p>
                  <CountdownTimer targetDate={car.ends_at} />
                </div>
              </div>

              <form onSubmit={handleBid} className="space-y-4">
                <div className="relative">
                  <span className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500 font-bold">GH₵</span>
                  <input 
                    type="number"
                    value={bidAmount}
                    onChange={(e) => setBidAmount(e.target.value)}
                    placeholder="Enter amount"
                    className="w-full py-5 pl-16 pr-6 bg-black border border-white/10 rounded-2xl text-white font-bold focus:outline-none focus:border-[#C9922A] transition-all"
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full py-5 bg-[#C9922A] text-black font-black rounded-2xl text-lg uppercase tracking-widest hover:bg-[#b07e20] transition-all shadow-[0_0_30px_rgba(201,146,42,0.2)] flex items-center justify-center"
                >
                  Place Bid Now (Demo)
                </button>
              </form>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center space-x-3 text-gray-400 text-sm">
                  <ShieldCheck size={18} className="text-[#C9922A]" />
                  <span>Verified Vehicle</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400 text-sm">
                  <Gavel size={18} className="text-[#C9922A]" />
                  <span>Demo Mode Active</span>
                </div>
              </div>
            </div>

            {/* Static Bid History */}
            <div className="bg-[#141414] p-8 rounded-[2rem] border border-white/5">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-bold text-white uppercase tracking-tight flex items-center">
                  <History size={20} className="mr-2 text-[#C9922A]" /> Bid History
                </h3>
                <span className="text-xs text-gray-500 font-bold uppercase tracking-widest">Recent Bids</span>
              </div>
              
              <div className="space-y-6">
                {[
                  { name: "Kwame A.", amount: "845,000", time: "2h ago" },
                  { name: "Abena M.", amount: "840,000", time: "5h ago" },
                  { name: "Kofi B.", amount: "835,000", time: "1d ago" },
                ].map((bid, index) => (
                  <div key={index} className="flex items-center justify-between group">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white font-bold text-xs border border-white/10">
                        {bid.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-white font-bold text-sm">{bid.name}</p>
                        <p className="text-gray-600 text-xs">{bid.time}</p>
                      </div>
                    </div>
                    <p className="text-white font-black text-sm tracking-tight">
                      GH₵ {bid.amount}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}
