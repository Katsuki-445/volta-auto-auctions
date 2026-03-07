import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

interface AuctionCardProps {
  id: string;
  name: string;
  price: string;
  image: string;
}

export default function AuctionCard({ id, name, price, image }: AuctionCardProps) {
  return (
    <Link href={`/auctions/${id}`} className="relative flex flex-col p-5 md:p-6 bg-[#141414] rounded-[1.5rem] md:rounded-[2rem] group hover:bg-[#1a1a1a] transition-all border border-white/5">
      {/* Small gold circle icon top-left */}
      <div className="absolute top-4 md:top-5 left-4 md:left-5 w-7 h-7 md:w-8 md:h-8 bg-[#E5D8B0] rounded-full flex items-center justify-center text-black">
        <ChevronRight size={14} className="md:w-4 md:h-4" />
      </div>

      {/* Car image */}
      <div className="my-4 md:my-6 h-40 md:h-52 flex items-center justify-center">
        <div className="relative w-full h-full scale-125">
          <Image
            src={image}
            alt={name}
            fill
            className="object-contain transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      </div>

      {/* Car details */}
      <div className="mt-2 md:mt-4 flex flex-col">
        <h3 className="text-base md:text-lg font-semibold text-[#FDFCF2] line-clamp-1">{name}</h3>
        <p className="text-xs md:text-sm text-gray-500 mt-0.5 md:mt-1">Ghana</p>
        
        <div className="mt-3 md:mt-4 flex items-center justify-between">
          <span className="text-lg md:text-xl font-bold text-[#FDFCF2]">GH₵ {price}</span>
          <button className="px-4 md:px-6 py-1.5 md:py-2 bg-[#E5D8B0] text-black font-bold rounded-lg md:rounded-xl text-xs md:text-sm hover:bg-[#d4c59a] transition-colors">
            Bid Now
          </button>
        </div>
      </div>
    </Link>
  );
}
