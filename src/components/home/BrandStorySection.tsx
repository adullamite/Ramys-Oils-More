import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Building, Award } from 'lucide-react';
import bodyCareSet from '../../assets/body-care-set.png';

export const BrandStorySection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#F6F1E7] text-[#252923]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Story Mosaic */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-3xl overflow-hidden shadow-2xl bg-[#E8DFCD] border border-[#747B50]/20 aspect-[4/5] relative group flex items-center justify-center">
              <img
                src={bodyCareSet}
                alt="Ramy's Body Care Set — shea butter body wash, shea nut oil, body lotion, body butter"
                width={600}
                height={750}
                loading="lazy"
                className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#102A22]/80 via-transparent to-transparent flex items-end p-6">
                <div className="text-white space-y-1">
                  <div className="text-xs uppercase tracking-widest text-[#E0CFA4] font-semibold flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#C6A66B]" />
                    <span>Minna, Niger State</span>
                  </div>
                  <h4 className="font-serif text-xl font-normal">
                    Technology Incubation Center
                  </h4>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.25em] text-[#747B50] font-bold">
                Our Genesis &amp; Mission
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#102A22] font-normal leading-tight">
                Rooted in Heritage. Validated by Laboratory Science.
              </h2>
            </div>

            <p className="text-[#595E57] text-base sm:text-lg leading-relaxed font-light">
              <strong className="text-[#102A22] font-semibold">Ramys and Daughters Investment Limited</strong> was founded on an uncompromising principle: that nature already engineered the most potent skincare active ingredients—if only we harvest them ethically and extract them without destroying their living vitality.
            </p>

            <p className="text-[#595E57] text-sm sm:text-base leading-relaxed font-light">
              Operating out of our NAFDAC-certified and FDA-registered production headquarters in Minna, we directly empower rural farming collectives across Nigeria. From hand-sorting sun-dried wild Neem to cold-pressing nutrient-dense Baobab seeds, our supply chain is transparent, sustainable, and uncompromisingly pure.
            </p>

            {/* Quick Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#E8DFCD]/60 border border-[#747B50]/20 space-y-1">
                <Building className="w-5 h-5 text-[#254C3C]" />
                <div className="text-xs font-bold text-[#102A22]">Regulated Facility</div>
                <div className="text-[11px] text-[#595E57]">NAFDAC &amp; FDA Validated</div>
              </div>

              <div className="p-4 rounded-xl bg-[#E8DFCD]/60 border border-[#747B50]/20 space-y-1">
                <Award className="w-5 h-5 text-[#C6A66B]" />
                <div className="text-xs font-bold text-[#102A22]">SON Certified</div>
                <div className="text-[11px] text-[#595E57]">Standards Org of Nigeria</div>
              </div>

              <div className="p-4 rounded-xl bg-[#E8DFCD]/60 border border-[#747B50]/20 space-y-1 col-span-2 sm:col-span-1">
                <div className="text-xs font-bold text-[#102A22]">Ethical Sourcing</div>
                <div className="text-[11px] text-[#595E57]">Co-Op Economic Support</div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/story"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#102A22] hover:bg-[#254C3C] text-[#F6F1E7] font-semibold text-xs uppercase tracking-widest transition-colors shadow-lg"
              >
                <span>Read the Complete Founding Story</span>
                <ArrowRight className="w-4 h-4 text-[#C6A66B]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
