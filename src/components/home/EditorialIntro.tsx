import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Sparkles, Shield } from 'lucide-react';
import moringaOil from '../../assets/moringa-seed-oil-100ml.png';
import massageOilPair from '../../assets/massage-oil-50ml-pair.png';

export const EditorialIntro: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#F6F1E7] text-[#252923] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Content */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#747B50] font-bold">
              <Leaf className="w-4 h-4 text-[#254C3C]" />
              <span>Bioactive African Dermatology</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl text-[#102A22] leading-[1.15] font-normal">
              Where Ancient Botanical Wisdom Meets Modern Laboratory Science.
            </h2>

            <p className="text-[#595E57] text-base sm:text-lg leading-relaxed font-light">
              For generations, the resilient flora of the West African savannah—the venerable Baobab, bitter therapeutic Neem, restorative Carrot root, and fertile Moringa—have protected skin against intense sun and dry Harmattan winds.
            </p>

            <p className="text-[#595E57] text-sm sm:text-base leading-relaxed font-light">
              At our certified facility in Minna, Nigeria, we abandon high-heat solvent chemical extraction. Through gentle mechanical cold-pressing below 49°C, we capture the unadulterated botanical profile: living antioxidants, squalene precursors, and cellular-rebuilding fatty acids in their purest bioactive form.
            </p>

            {/* Micro Pillars */}
            <div className="grid grid-cols-2 gap-6 pt-2">
              <div className="p-4 rounded-xl bg-[#E8DFCD]/60 border border-[#747B50]/20 space-y-2">
                <div className="flex items-center gap-2 text-[#102A22] font-semibold text-sm">
                  <Shield className="w-4 h-4 text-[#254C3C]" />
                  <span>Lab Tested Safety</span>
                </div>
                <p className="text-xs text-[#595E57] leading-relaxed">
                  Every production batch is certified by NAFDAC, FDA, and SON for zero heavy metals or adulterants.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#E8DFCD]/60 border border-[#747B50]/20 space-y-2">
                <div className="flex items-center gap-2 text-[#102A22] font-semibold text-sm">
                  <Sparkles className="w-4 h-4 text-[#C6A66B]" />
                  <span>Bioactive Potency</span>
                </div>
                <p className="text-xs text-[#595E57] leading-relaxed">
                  First expeller pressing ensures maximum retention of vitamins A, D, E, F, and essential omegas.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/story"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#102A22] font-bold pb-1 border-b-2 border-[#C6A66B] hover:text-[#254C3C] hover:border-[#254C3C] transition-all"
              >
                <span>Read Our Heritage &amp; Sourcing Story</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Composition with Real Verified Imagery */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-xl aspect-[3/4] bg-[#E8DFCD] border border-[#747B50]/20 group flex items-center justify-center p-3">
                  <img
                    src={moringaOil}
                    alt="Ramy's Moringa Seed Oil 100ml dropper bottle"
                    width={300}
                    height={400}
                    loading="lazy"
                    className="max-h-[240px] object-contain group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-4 rounded-xl bg-[#102A22] text-[#F6F1E7] space-y-1">
                  <div className="font-serif text-2xl text-[#E0CFA4]">100%</div>
                  <div className="text-xs uppercase tracking-wider text-[#F6F1E7]/70">Pure Seeds Only</div>
                </div>
              </div>

              <div className="space-y-4 pt-8">
                <div className="p-4 rounded-xl bg-[#E8DFCD] border border-[#747B50]/30 space-y-1">
                  <span className="text-[11px] uppercase tracking-wider text-[#747B50] font-bold">Standard</span>
                  <div className="font-serif text-lg text-[#102A22]">&lt; 49°C Extraction</div>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl aspect-[3/4] bg-[#E8DFCD] border border-[#747B50]/20 group flex items-center justify-center p-3">
                  <img
                    src={massageOilPair}
                    alt="Ramy's Massage Oil 50ml, pair of bottles"
                    width={300}
                    height={400}
                    loading="lazy"
                    className="max-h-[240px] object-contain group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
