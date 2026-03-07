'use client'

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black flex flex-col">
      <Navbar />
      
      <div className="flex-1 py-16 md:py-24 px-6 md:px-12 relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C9922A]/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16 md:mb-24"
          >
            <h1 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter mb-6 leading-none">
              Get in <span className="text-[#C9922A]">Touch</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-medium">
              Have questions about an auction? Our team in Accra is here to help you every step of the way.
            </p>
          </motion.div>

          <div className="flex justify-center">
            {/* Contact Form Side */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="w-full"
            >
              <div className="bg-[#141414] p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] border border-white/5 relative overflow-hidden backdrop-blur-sm shadow-2xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#C9922A]/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
                
                <div className="relative z-10">
                  <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-tight mb-10 text-center">Send a Message</h2>
                  <form className="space-y-6 md:space-y-8" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                      <div className="space-y-3">
                        <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">Full Name</label>
                        <input 
                          type="text" 
                          placeholder="John Doe" 
                          className="w-full py-4 md:py-5 px-6 md:px-8 bg-black/50 border border-white/10 rounded-2xl text-white text-sm focus:outline-none focus:border-[#C9922A] focus:ring-1 focus:ring-[#C9922A]/20 transition-all placeholder:text-gray-700" 
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">Email Address</label>
                        <input 
                          type="email" 
                          placeholder="john@example.com" 
                          className="w-full py-4 md:py-5 px-6 md:px-8 bg-black/50 border border-white/10 rounded-2xl text-white text-sm focus:outline-none focus:border-[#C9922A] focus:ring-1 focus:ring-[#C9922A]/20 transition-all placeholder:text-gray-700" 
                        />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">Subject</label>
                      <input 
                        type="text" 
                        placeholder="Auction Inquiry" 
                        className="w-full py-4 md:py-5 px-6 md:px-8 bg-black/50 border border-white/10 rounded-2xl text-white text-sm focus:outline-none focus:border-[#C9922A] focus:ring-1 focus:ring-[#C9922A]/20 transition-all placeholder:text-gray-700" 
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">Your Message</label>
                      <textarea 
                        rows={6} 
                        placeholder="How can we help you?" 
                        className="w-full py-4 md:py-5 px-6 md:px-8 bg-black/50 border border-white/10 rounded-2xl text-white text-sm focus:outline-none focus:border-[#C9922A] focus:ring-1 focus:ring-[#C9922A]/20 transition-all placeholder:text-gray-700 resize-none"
                      ></textarea>
                    </div>
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-5 md:py-6 bg-[#C9922A] text-black font-black rounded-2xl text-sm uppercase tracking-widest hover:bg-[#b07e20] transition-all flex items-center justify-center space-x-3 group shadow-[0_10px_30px_rgba(201,146,42,0.2)]"
                    >
                      <span>Send Message</span>
                      <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </motion.button>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
