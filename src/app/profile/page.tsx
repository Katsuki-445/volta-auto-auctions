'use client'

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { User, Gavel, History, Settings, CreditCard, Clock } from "lucide-react";

export default function ProfilePage() {
  const stats = [
    { label: "Active Bids", value: "3", icon: <Gavel size={20} /> },
    { label: "Auctions Won", value: "0", icon: <History size={20} /> },
    { label: "Saved Cars", value: "12", icon: <Clock size={20} /> },
  ];

  const recentBids = [
    { car: "Toyota Land Cruiser", amount: "850,000", status: "Winning", date: "2 hours ago" },
    { car: "Nissan Patrol", amount: "680,000", status: "Outbid", date: "5 hours ago" },
    { car: "Lexus LX", amount: "780,000", status: "Winning", date: "1 day ago" },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-4">
            <div className="bg-[#141414] p-8 rounded-[2.5rem] border border-white/5 text-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#C9922A] to-orange-500 mx-auto mb-6 flex items-center justify-center text-black text-3xl font-black">
                J
              </div>
              <h2 className="text-xl font-black text-white uppercase tracking-tighter mb-1 truncate px-2">
                Josh
              </h2>
              <p className="text-gray-500 text-xs font-bold uppercase tracking-widest truncate px-2 mb-6">
                demo@example.com
              </p>
              <button className="w-full py-3 bg-white/5 border border-white/10 rounded-2xl text-xs font-bold uppercase tracking-widest text-white hover:bg-white/10 transition-all">
                Edit Profile
              </button>
            </div>

            <nav className="bg-[#141414] p-4 rounded-[2.5rem] border border-white/5">
              {[
                { label: "Dashboard", icon: <User size={18} />, active: true },
                { label: "My Bids", icon: <Gavel size={18} /> },
                { label: "Payments", icon: <CreditCard size={18} /> },
                { label: "Settings", icon: <Settings size={18} /> },
              ].map((item, i) => (
                <button 
                  key={i}
                  className={`w-full flex items-center space-x-4 p-4 rounded-2xl text-sm font-bold transition-all ${item.active ? 'bg-[#C9922A] text-black' : 'text-gray-500 hover:text-white hover:bg-white/5'}`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stats.map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-[#141414] p-8 rounded-[2.5rem] border border-white/5 flex items-center space-x-6"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#C9922A]/10 flex items-center justify-center text-[#C9922A]">
                    {stat.icon}
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">{stat.label}</p>
                    <p className="text-2xl font-black text-white">{stat.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Recent Bids Table */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-[#141414] p-10 rounded-[2.5rem] border border-white/5"
            >
              <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-8">My Bidding History</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-white/5">
                      <th className="pb-6 text-xs font-bold text-gray-500 uppercase tracking-widest">Vehicle</th>
                      <th className="pb-6 text-xs font-bold text-gray-500 uppercase tracking-widest">My Bid</th>
                      <th className="pb-6 text-xs font-bold text-gray-500 uppercase tracking-widest">Status</th>
                      <th className="pb-6 text-xs font-bold text-gray-500 uppercase tracking-widest">Time</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {recentBids.map((bid, i) => (
                      <tr key={i} className="group hover:bg-white/[0.02] transition-colors">
                        <td className="py-6 font-bold text-white text-sm uppercase tracking-tight">{bid.car}</td>
                        <td className="py-6 font-black text-white text-sm tracking-tighter">GH₵ {bid.amount}</td>
                        <td className="py-6">
                          <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${bid.status === 'Winning' ? 'bg-green-500/10 text-green-500 border border-green-500/20' : 'bg-red-500/10 text-red-500 border border-red-500/20'}`}>
                            {bid.status}
                          </span>
                        </td>
                        <td className="py-6 text-xs text-gray-500 font-bold uppercase tracking-widest">{bid.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}
