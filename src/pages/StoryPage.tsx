import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Award, Building, Heart } from 'lucide-react';

export const StoryPage: React.FC = () => {
  return (
    <div className="py-12 sm:py-20 bg-[#F6F1E7] text-[#252923]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] text-[#747B50] font-bold">
            The Living Heritage
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-[#102A22] font-normal leading-tight">
            Our Story: Bridging Ancient African Secret &amp; Clinical Science.
          </h1>
          <p className="text-[#595E57] text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Founded in Nigeria with a singular conviction: to produce raw, unadulterated botanical oils with authentic medicinal and dermatological potency.
          </p>
        </div>

        {/* Hero Visual */}
        <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[16/9] bg-[#E8DFCD] border border-[#747B50]/20 relative">
          <img
            src="https://ramysoilsandmore.com/wp-content/uploads/2026/02/419.webp"
            alt="Ramy's & Daughters Production Facility"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#091712]/90 via-transparent to-transparent flex items-end p-8 sm:p-12">
            <div className="text-white space-y-2">
              <span className="text-xs uppercase tracking-widest text-[#E0CFA4] font-semibold flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#C6A66B]" />
                <span>Minna, Niger State, Nigeria</span>
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-white font-normal">
                Ramys &amp; Daughters Investment Limited
              </h2>
            </div>
          </div>
        </div>

        {/* Narrative Chapters */}
        <div className="space-y-12 text-[#595E57] leading-relaxed text-base sm:text-lg font-light">
          <div className="space-y-4">
            <h3 className="font-serif text-2xl sm:text-3xl text-[#102A22] font-normal">
              1. The Origin of Our Conviction
            </h3>
            <p>
              For centuries, communities across the Nigerian savannah understood how to treat severe skin dryness, soothe burns, and foster lustrous hair using raw indigenous tree extracts. But as commercial skincare industrialized, these time-tested botanicals were substituted with petroleum derivatives, synthetic silicones, and bleached oils stripped of their enzymes by high-heat chemical expellers.
            </p>
            <p>
              Ramys &amp; Daughters was established to reverse this compromise. By pairing traditional wild harvesting with state-of-the-art cold-press machinery, we deliver living oils whose bioactive fatty acids, carotenoids, and polyphenols remain undamaged.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6">
            <div className="p-6 rounded-2xl bg-white border border-[#747B50]/20 shadow-sm space-y-2">
              <Building className="w-6 h-6 text-[#254C3C]" />
              <h4 className="font-serif text-lg text-[#102A22] font-semibold">Minna Technology Hub</h4>
              <p className="text-xs text-[#595E57] leading-relaxed">
                Operating inside Unit B2 at the Technology Incubation Center, Niger State.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#747B50]/20 shadow-sm space-y-2">
              <Award className="w-6 h-6 text-[#C6A66B]" />
              <h4 className="font-serif text-lg text-[#102A22] font-semibold">Regulatory Certifications</h4>
              <p className="text-xs text-[#595E57] leading-relaxed">
                Rigorously certified by NAFDAC, FDA, and the Standards Organisation of Nigeria (SON).
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#747B50]/20 shadow-sm space-y-2">
              <Heart className="w-6 h-6 text-[#254C3C]" />
              <h4 className="font-serif text-lg text-[#102A22] font-semibold">Fair Farmer Co-ops</h4>
              <p className="text-xs text-[#595E57] leading-relaxed">
                We trade directly with regional seed gathering cooperatives, guaranteeing premium income for women harvesters.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-serif text-2xl sm:text-3xl text-[#102A22] font-normal">
              2. Commitment to Mechanical Purity
            </h3>
            <p>
              We enforce a strict ceiling: extraction temperatures never exceed 49°C (120°F). When you dispense a dropper of Ramy&apos;s Baobab or Neem oil, you smell the authentic unbleached botanical aroma and witness the natural amber gold tint that signifies unadulterated bioactive nourishment.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#102A22] text-[#F6F1E7] text-center space-y-6 shadow-xl">
          <h3 className="font-serif text-2xl sm:text-4xl text-[#F6F1E7] font-normal">
            Experience Living Botanical Skincare
          </h3>
          <p className="text-sm sm:text-base text-[#F6F1E7]/70 max-w-xl mx-auto font-light">
            Discover the tangible difference cold-pressed Nigerian botanicals make to your daily ritual.
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#C6A66B] hover:bg-[#E0CFA4] text-[#102A22] font-semibold text-xs uppercase tracking-widest transition-colors shadow-lg"
          >
            <span>Explore The Store</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
