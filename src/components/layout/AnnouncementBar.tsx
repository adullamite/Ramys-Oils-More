import React from 'react';
import { ShieldCheck, Truck, Sparkles } from 'lucide-react';

export const AnnouncementBar: React.FC = () => {
  return (
    <div className="bg-[#091712] border-b border-[#C6A66B]/20 text-[#E0CFA4] text-xs py-2 px-4 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="hidden sm:flex items-center gap-2 text-xs font-medium tracking-wide">
          <ShieldCheck className="w-3.5 h-3.5 text-[#C6A66B]" />
          <span>NAFDAC & FDA Registered Facility • 100% Bioactive Potency</span>
        </div>

        <div className="mx-auto sm:mx-0 flex items-center gap-2 font-medium tracking-wider text-[11px] sm:text-xs">
          <Sparkles className="w-3 h-3 text-[#C6A66B] animate-pulse" />
          <span>Cold-Pressed Mechanical Extraction Below 49°C</span>
        </div>

        <div className="hidden md:flex items-center gap-2 text-xs font-medium">
          <Truck className="w-3.5 h-3.5 text-[#C6A66B]" />
          <span>Nationwide Nigeria & Global Bulk Export</span>
        </div>
      </div>
    </div>
  );
};
