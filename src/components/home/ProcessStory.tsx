import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ThermometerSnowflake, Sprout, Sparkles } from 'lucide-react';

export const ProcessStory: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Ethical Wild Harvest',
      subtitle: 'Peak Seasonal Maturity',
      icon: Sprout,
      description:
        'We partner directly with sustainable smallholder farm cooperatives across Niger, Kaduna, and Plateau states. Seeds are harvested exclusively at peak physiological maturity to ensure maximal oil yield and nutrient concentration.',
    },
    {
      step: '02',
      title: 'Sub-49°C Mechanical Press',
      subtitle: 'Zero Thermal Degradation',
      icon: ThermometerSnowflake,
      description:
        'Most industrial commercial oils employ scorching steam or toxic petrochemical hexane solvents. We utilize slow, continuous hydraulic mechanical expellers strictly calibrated below 49°C (120°F) to avoid oxidizing delicate fatty acids.',
    },
    {
      step: '03',
      title: 'Bioactive Potency & Double Decant',
      subtitle: '100% Living Nutrients',
      icon: Sparkles,
      description:
        'The freshly pressed botanical oil undergoes natural physical filtration through micron cloth filters. No chemical bleaching, deodorizing, or synthetic preservatives. Every drop is living and bioactive.',
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#102A22] text-[#F6F1E7] relative overflow-hidden">
      {/* Decorative ambient subtle divider line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C6A66B]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C6A66B] font-semibold">
            The Cold-Pressed Difference
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#F6F1E7] font-normal leading-tight">
            Why Temperature Determines Biological Efficacy.
          </h2>
          <p className="text-[#F6F1E7]/70 text-sm sm:text-base font-light">
            When oil is exposed to high industrial heat, essential vitamins decompose and fatty acids oxidize into free radicals. Our mechanical protocol preserves nature’s living blueprint intact.
          </p>
        </div>

        {/* 3 Step Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#091712] border border-[#254C3C] hover:border-[#C6A66B]/40 rounded-2xl p-8 space-y-6 transition-all duration-300 relative group"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#254C3C]/80 border border-[#C6A66B]/20 flex items-center justify-center text-[#E0CFA4] group-hover:border-[#C6A66B] transition-colors">
                    <Icon className="w-6 h-6 text-[#C6A66B]" />
                  </div>
                  <span className="font-serif text-3xl text-[#747B50]/40 font-light group-hover:text-[#C6A66B]/60 transition-colors">
                    {item.step}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <span className="text-[11px] uppercase tracking-wider text-[#C6A66B] font-semibold">
                    {item.subtitle}
                  </span>
                  <h3 className="font-serif text-2xl text-[#F6F1E7] font-normal">
                    {item.title}
                  </h3>
                </div>

                <p className="text-sm text-[#F6F1E7]/70 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA to Detailed Process Page */}
        <div className="mt-14 text-center">
          <Link
            to="/process"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-[#C6A66B]/50 hover:bg-[#254C3C] text-[#E0CFA4] hover:text-white text-xs uppercase tracking-widest font-semibold transition-colors"
          >
            <span>Explore The Technical Extraction Protocol</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
