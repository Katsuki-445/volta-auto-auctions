import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuctionGrid from "@/components/AuctionGrid";
import { Search, Filter, ArrowUpDown } from "lucide-react";

export default function AuctionsPage() {
  return (
    <main className="min-h-screen bg-black flex flex-col">
      <Navbar />
      
      <div className="flex-1 py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
              All <span className="text-[#C9922A]">Auctions</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-medium">
              Browse through our full inventory of premium vehicles ready for auction.
            </p>
          </div>

          <div className="bg-[#141414] p-4 md:p-6 rounded-[2.5rem] border border-white/5 flex flex-col lg:flex-row items-center gap-6 shadow-2xl">
            <div className="relative flex-1 group w-full lg:w-auto">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[#C9922A] transition-colors" size={20} />
              <input type="text" placeholder="Search by model, year, or brand..." className="w-full py-5 pl-16 pr-8 bg-black border border-white/5 rounded-2xl text-white text-sm focus:outline-none focus:border-[#C9922A]/50 transition-all placeholder:text-gray-700" />
            </div>
            <div className="flex items-center gap-4 w-full lg:w-auto">
              <button className="flex-1 lg:flex-none py-5 px-8 bg-black border border-white/5 rounded-2xl text-white text-sm font-bold flex items-center justify-center gap-3 hover:bg-white/5 transition-all">
                <Filter size={18} className="text-[#C9922A]" />
                <span>Filters</span>
              </button>
              <button className="flex-1 lg:flex-none py-5 px-8 bg-black border border-white/5 rounded-2xl text-white text-sm font-bold flex items-center justify-center gap-3 hover:bg-white/5 transition-all">
                <ArrowUpDown size={18} className="text-[#C9922A]" />
                <span>Sort By</span>
              </button>
            </div>
          </div>

          <AuctionGrid />
        </div>
      </div>

      <Footer />
    </main>
  );
}
