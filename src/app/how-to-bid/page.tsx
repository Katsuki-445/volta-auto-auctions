import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { UserPlus, Search, Gavel, Wallet, Truck } from "lucide-react";

export default function HowToBidPage() {
  const steps = [
    {
      icon: <UserPlus size={40} />,
      title: "1. Create Account",
      description: "Register for free to start bidding. We'll verify your phone number and email for a secure auction experience.",
    },
    {
      icon: <Search size={40} />,
      title: "2. Find Your Car",
      description: "Browse our curated listings. Check the detailed condition reports, mileage, and high-quality images.",
    },
    {
      icon: <Gavel size={40} />,
      title: "3. Place Your Bid",
      description: "Enter your bid amount in Ghana Cedis. Our system will notify you if you're outbid by another user.",
    },
    {
      icon: <Wallet size={40} />,
      title: "4. Win and Pay",
      description: "If you're the highest bidder when the clock hits zero, you win! Complete the payment securely via bank transfer or at our Accra office.",
    },
    {
      icon: <Truck size={40} />,
      title: "5. Collect Your Car",
      description: "Once payment is confirmed, collect your vehicle and its documents from our Accra collection point. We'll assist with all the paperwork.",
    },
  ];

  return (
    <main className="min-h-screen bg-black flex flex-col">
      <Navbar />
      
      <div className="flex-1 py-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto space-y-20">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
              How to <span className="text-[#C9922A]">Bid</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
              Buying your next car should be exciting and transparent. Follow our 5-step process to win your dream vehicle.
            </p>
          </div>

          <div className="space-y-12 relative">
            {/* Connecting Line (Desktop) */}
            <div className="absolute left-[2.4rem] top-10 bottom-10 w-0.5 bg-gradient-to-b from-[#C9922A] to-white/5 hidden md:block" />

            {steps.map((step, index) => (
              <div key={index} className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-12 relative">
                <div className="w-20 h-20 rounded-[1.5rem] bg-[#C9922A] flex items-center justify-center text-black flex-shrink-0 z-10 shadow-[0_0_30px_rgba(201,146,42,0.3)]">
                  {step.icon}
                </div>
                <div className="space-y-4 pt-2">
                  <h2 className="text-2xl font-black text-white uppercase tracking-tight">
                    {step.title}
                  </h2>
                  <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#141414] p-10 md:p-16 rounded-[3rem] border border-[#C9922A]/20 text-center space-y-8 relative overflow-hidden">
             {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#C9922A]/5 to-transparent pointer-events-none" />
            
            <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter relative z-10">
              Ready to start <span className="text-[#C9922A]">bidding?</span>
            </h3>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
              <a href="/register" className="w-full sm:w-auto px-10 py-5 bg-[#C9922A] text-black font-black rounded-2xl text-sm uppercase tracking-widest hover:bg-[#b07e20] transition-all">
                Create Account
              </a>
              <a href="/#auctions" className="w-full sm:w-auto px-10 py-5 border border-white/10 text-white font-black rounded-2xl text-sm uppercase tracking-widest hover:bg-white/5 transition-all">
                View Auctions
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
