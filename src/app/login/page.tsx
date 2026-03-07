'use client'

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Mail, Lock, ChevronRight, Loader2 } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Simulate demo login
    setTimeout(() => {
      setLoading(false);
      router.push('/');
    }, 1000);
  };

  return (
    <main className="min-h-screen bg-black flex flex-col">
      <Navbar />
      
      <div className="flex-1 flex items-center justify-center py-20 px-6">
        <div className="w-full max-w-md bg-[#141414] p-10 rounded-[2.5rem] border border-white/5 space-y-10 relative overflow-hidden">
          {/* Subtle Glow Background */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-[#C9922A]/10 blur-[80px] rounded-full -translate-y-1/2 -translate-x-1/2" />
          
          <div className="text-center space-y-4">
            <h1 className="text-3xl font-black text-white uppercase tracking-tighter">
              Welcome <span className="text-[#C9922A]">Back</span>
            </h1>
            <p className="text-gray-500 text-sm font-medium">Log in to manage your bids and account</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-4">
              {/* Email Address */}
              <div className="relative group">
                <div className="absolute inset-y-0 left-5 flex items-center text-gray-500 group-focus-within:text-[#C9922A] transition-colors">
                  <Mail size={18} />
                </div>
                <input 
                  name="email"
                  type="email" 
                  required
                  placeholder="Email Address" 
                  className="w-full py-4 px-6 bg-black border border-white/5 rounded-2xl text-white text-sm focus:outline-none focus:border-[#C9922A]/50 transition-all placeholder:text-gray-700"
                />
              </div>

              {/* Password */}
              <div className="relative group">
                <div className="absolute inset-y-0 left-5 flex items-center text-gray-500 group-focus-within:text-[#C9922A] transition-colors">
                  <Lock size={18} />
                </div>
                <input 
                  name="password"
                  type="password" 
                  required
                  placeholder="Password" 
                  className="w-full py-4 px-6 bg-black border border-white/5 rounded-2xl text-white text-sm focus:outline-none focus:border-[#C9922A]/50 transition-all placeholder:text-gray-700"
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-xs px-2">
              <label className="flex items-center text-gray-500 cursor-pointer select-none">
                <input type="checkbox" className="mr-2 accent-[#C9922A]" />
                Remember Me
              </label>
              <Link href="#" className="text-[#C9922A] font-bold hover:text-white transition-colors">Forgot Password?</Link>
            </div>

            <button 
              disabled={loading}
              type="submit"
              className="w-full py-5 bg-[#C9922A] text-black font-black rounded-2xl text-sm uppercase tracking-widest hover:bg-[#b07e20] transition-all flex items-center justify-center space-x-2 group disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <Loader2 size={18} className="animate-spin" />
              ) : (
                <>
                  <span>Log In Now</span>
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          <div className="text-center">
            <p className="text-gray-500 text-sm">
              Don't have an account? <Link href="/register" className="text-white font-bold hover:text-[#C9922A] transition-colors">Register Here</Link>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
