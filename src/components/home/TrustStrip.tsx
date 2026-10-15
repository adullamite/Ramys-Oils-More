import React from 'react';

export const TrustStrip: React.FC = () => {
  const certifications = [
    'NAFDAC Certified',
    'FDA Registered Facility',
    '100% Organic Sourcing',
    'Cold-Pressed Potency (< 49°C)',
    'Sustainably Harvested in Nigeria',
    'Cruelty Free & Unbleached',
    'Standards Organisation of Nigeria (SON) Verified',
    'Zero Hexane or Chemical Solvents',
  ];

  return (
    <div className="bg-[#091712] py-4 sm:py-5 overflow-hidden border-y border-[#C6A66B]/20 relative z-20">
      <div className="flex animate-marquee whitespace-nowrap">
        {/* Double copy for seamless infinite loop */}
        {[...certifications, ...certifications].map((item, index) => (
          <div key={index} className="flex items-center gap-6 sm:gap-8 mx-4 sm:mx-6">
            <span className="font-serif italic text-base sm:text-lg text-[#E0CFA4]/80 tracking-wide font-light">
              {item}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#C6A66B]/60 flex-shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
};
