import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, Sparkles, Award } from 'lucide-react';
import hibiscusTrio from '../../assets/hibiscus-zobo-seed-oil-trio.png';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] lg:min-h-[96vh] bg-[#102A22] text-[#F6F1E7] overflow-hidden flex flex-col justify-between pt-8 sm:pt-14 pb-8">
      {/* Botanical Background Nuances & Radial Forest Vignette */}
      <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(circle_at_70%_40%,#254C3C_0%,transparent_60%)]" />
      <div className="absolute inset-0 pointer-events-none opacity-25 bg-[radial-gradient(circle_at_20%_80%,#747B50_0%,transparent_50%)]" />

      {/* Decorative ambient subtle ring */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-[#C6A66B]/10 pointer-events-none blur-[1px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center flex-1 my-auto">
        {/* Left Editorial Copy */}
        <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
          {/* Subtle certification pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#254C3C]/80 border border-[#C6A66B]/30 text-xs text-[#E0CFA4] tracking-wider uppercase">
            <Award className="w-3.5 h-3.5 text-[#C6A66B]" />
            <span>NAFDAC &amp; FDA Certified • Nigerian Botanical Potency</span>
          </div>

          <div className="space-y-3">
            <h1 className="font-serif text-4xl sm:text-6xl xl:text-7xl leading-[1.08] text-[#F6F1E7] font-normal">
              Pure, Living Oils <br />
              <span className="italic font-light text-[#E0CFA4]">Cold-Pressed</span> for Radiant Skin.
            </h1>
          </div>

          <p className="text-[#F6F1E7]/80 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
            Harnessing wild-harvested Baobab, Neem, Carrot, Hibiscus and Moringa from Nigerian soils.
            Mechanically extracted below 49°C to protect vital bioactive enzymes, vitamins, and restorative lipids.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
            <Link
              to="/shop"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#C6A66B] hover:bg-[#E0CFA4] text-[#102A22] font-semibold text-xs sm:text-sm tracking-widest uppercase flex items-center justify-center gap-2.5 transition-all shadow-xl hover:shadow-[#C6A66B]/20 hover:scale-[1.02]"
            >
              <span>Explore The Collection</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/story"
              className="w-full sm:w-auto px-7 py-4 rounded-full border border-[#C6A66B]/40 hover:border-[#C6A66B] text-[#F6F1E7] hover:bg-[#254C3C]/60 text-xs sm:text-sm tracking-widest uppercase transition-all flex items-center justify-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#C6A66B]" />
              <span>Our Extraction Story</span>
            </Link>
          </div>

          {/* Quick Quality Indicators */}
          <div className="pt-4 grid grid-cols-3 gap-4 border-t border-[#254C3C]/80 max-w-lg mx-auto lg:mx-0 text-left">
            <div>
              <div className="font-serif text-xl sm:text-2xl text-[#E0CFA4] font-medium">&lt; 49°C</div>
              <div className="text-[11px] text-[#F6F1E7]/60 uppercase tracking-wider mt-0.5">Heat-Free Press</div>
            </div>
            <div>
              <div className="font-serif text-xl sm:text-2xl text-[#E0CFA4] font-medium">100%</div>
              <div className="text-[11px] text-[#F6F1E7]/60 uppercase tracking-wider mt-0.5">Raw Purity</div>
            </div>
            <div>
              <div className="font-serif text-xl sm:text-2xl text-[#E0CFA4] font-medium">0%</div>
              <div className="text-[11px] text-[#F6F1E7]/60 uppercase tracking-wider mt-0.5">Chemical Solvents</div>
            </div>
          </div>
        </div>

        {/* Right Hero Product Image */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
          <div className="w-full max-w-[420px] lg:max-w-none relative flex items-center justify-center">
            {/* Soft ambient glow behind product */}
            <div className="absolute inset-0 rounded-full bg-[#C6A66B]/10 blur-3xl scale-75 pointer-events-none" />
            <img
              src={hibiscusTrio}
              alt="Ramy's Hibiscus (Zobo) Seed Oil, three 100ml bottles with red labels"
              width={600}
              height={700}
              className="relative z-10 w-full max-h-[540px] object-contain drop-shadow-2xl animate-soft-pulse"
              fetchPriority="high"
            />
          </div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="w-full flex flex-col items-center justify-center gap-1.5 text-xs text-[#E0CFA4]/60 pt-4 z-10 pointer-events-none">
        <span className="tracking-[0.2em] uppercase text-[10px]">Discover Botanical Science</span>
        <ChevronDown className="w-4 h-4 text-[#C6A66B] animate-bounce" />
      </div>
    </section>
  );
};
