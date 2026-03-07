import Link from 'next/link';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0A0A0A] border-t border-white/5 pt-20 pb-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {/* Logo & About */}
          <div className="flex flex-col space-y-6">
            <div className="text-xl font-bold text-white tracking-wider uppercase">
              VOLTA AUTO AUCTION
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs font-medium">
              Ghana's premier online vehicle auction platform. We bring transparent, secure, and accessible car auctions to your fingertips.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-[#C9922A] hover:bg-[#C9922A]/10 transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-[#C9922A] hover:bg-[#C9922A]/10 transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-[#C9922A] hover:bg-[#C9922A]/10 transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contact Us</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <div className="text-[#C9922A] mt-1 p-2 bg-[#C9922A]/10 rounded-lg">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-white font-bold text-sm mb-1 uppercase tracking-tight">Location</p>
                  <p className="text-gray-500 text-sm leading-relaxed font-medium">
                    123 Spintex Road, Accra<br />Near Palace Mall, Ghana
                  </p>
                </div>
              </div>
              <div className="flex flex-col space-y-6">
                <div className="flex items-center space-x-4 group">
                  <div className="text-[#C9922A] p-2 bg-[#C9922A]/10 rounded-lg group-hover:scale-110 transition-transform">
                    <Phone size={20} />
                  </div>
                  <p className="text-gray-500 text-sm font-medium hover:text-white transition-colors cursor-pointer">+233 24 123 4567</p>
                </div>
                <div className="flex items-center space-x-4 group">
                  <div className="text-[#C9922A] p-2 bg-[#C9922A]/10 rounded-lg group-hover:scale-110 transition-transform">
                    <Mail size={20} />
                  </div>
                  <p className="text-gray-500 text-sm font-medium hover:text-white transition-colors cursor-pointer">info@voltaauctions.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-600 text-xs uppercase tracking-widest font-bold">
            © 2026 Volta Auto Auction. All rights reserved.
          </p>
          <div className="flex space-x-8">
            <Link href="#" className="text-gray-600 hover:text-white text-xs uppercase tracking-widest transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-gray-600 hover:text-white text-xs uppercase tracking-widest transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
