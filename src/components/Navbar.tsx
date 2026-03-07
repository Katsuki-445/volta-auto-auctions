'use client'

import Link from 'next/link';
import { Menu, User as UserIcon, LogOut, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  
  // Static Demo State (Set to null to show Register button)
  const user = null;

  const signOut = () => {
    alert("Sign out clicked (Demo Mode)");
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Auctions', href: '/auctions' },
    { name: 'How to Bid', href: '/how-to-bid' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="flex items-center justify-between px-6 md:px-12 py-6 md:py-8 bg-black/50 sticky top-0 z-[100] border-b border-white/5 backdrop-blur-xl">
      <Link href="/" className="text-lg md:text-xl font-black text-white tracking-tighter uppercase group flex items-center">
        <span className="bg-[#C9922A] text-black px-2 py-0.5 rounded mr-2 group-hover:scale-110 transition-transform">V</span>
        VOLTA <span className="text-[#C9922A] ml-1.5">AUCTION</span>
      </Link>
      
      {/* Desktop Links */}
      <div className="hidden md:flex items-center space-x-10">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link 
              key={link.name}
              href={link.href} 
              className={`text-sm font-bold transition-colors ${isActive ? 'text-[#C9922A]' : 'text-gray-400 hover:text-white'}`}
            >
              {link.name}
            </Link>
          );
        })}

        {user ? (
          <div className="relative">
            <button 
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center space-x-3 bg-white/5 border border-white/10 pl-4 pr-3 py-2 rounded-2xl hover:bg-white/10 transition-all group"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#C9922A] to-orange-500 flex items-center justify-center text-black font-black text-xs">
                {user.user_metadata?.full_name?.charAt(0) || user.email?.charAt(0).toUpperCase()}
              </div>
              <span className="text-sm font-bold text-white max-w-[100px] truncate">
                {user.user_metadata?.full_name?.split(' ')[0] || 'Profile'}
              </span>
              <ChevronDown size={14} className={`text-gray-500 transition-transform ${isProfileOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {isProfileOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute right-0 mt-4 w-56 bg-[#141414] border border-white/10 rounded-3xl p-3 shadow-2xl backdrop-blur-2xl"
                >
                  <Link 
                    href="/profile"
                    onClick={() => setIsProfileOpen(false)}
                    className="flex items-center space-x-3 w-full p-4 text-sm font-bold text-gray-400 hover:text-white hover:bg-white/5 rounded-2xl transition-all"
                  >
                    <UserIcon size={18} className="text-[#C9922A]" />
                    <span>My Dashboard</span>
                  </Link>
                  <button 
                    onClick={() => {
                      signOut();
                      setIsProfileOpen(false);
                    }}
                    className="flex items-center space-x-3 w-full p-4 text-sm font-bold text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-2xl transition-all mt-1"
                  >
                    <LogOut size={18} />
                    <span>Logout</span>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ) : (
          <Link 
            href="/register" 
            className="px-8 py-3 text-sm font-black text-black bg-[#C9922A] rounded-2xl hover:bg-[#b07e20] transition-all shadow-[0_0_20px_rgba(201,146,42,0.2)]"
          >
            Register
          </Link>
        )}
      </div>

      {/* Mobile Toggle */}
      <div className="md:hidden flex items-center space-x-4">
        {user && (
          <Link 
            href="/profile" 
            className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C9922A] to-orange-500 flex items-center justify-center text-black font-black text-xs"
          >
            {user.user_metadata?.full_name?.charAt(0) || user.email?.charAt(0).toUpperCase()}
          </Link>
        )}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-white p-2 hover:bg-white/5 rounded-xl transition-all"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-[#0A0A0A] border-b border-white/10 md:hidden overflow-hidden"
          >
            <div className="p-6 space-y-6">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link 
                    key={link.name}
                    href={link.href} 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block text-lg font-bold transition-colors ${isActive ? 'text-[#C9922A]' : 'text-gray-400 hover:text-white'}`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              {!user && (
                <Link 
                  href="/register" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full py-4 bg-[#C9922A] text-black text-center font-black rounded-2xl uppercase tracking-widest text-sm"
                >
                  Register
                </Link>
              )}
              {user && (
                <button 
                  onClick={() => {
                    signOut();
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full py-4 bg-red-500/10 text-red-400 text-center font-bold rounded-2xl uppercase tracking-widest text-sm border border-red-500/20"
                >
                  Logout
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
