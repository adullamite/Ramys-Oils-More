import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ThermometerSnowflake, ShieldCheck } from 'lucide-react';

export const ProcessPage: React.FC = () => {
  return (
    <div className="py-12 sm:py-20 bg-[#F6F1E7] text-[#252923]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] text-[#747B50] font-bold">
            Laboratory Protocol &amp; Science
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-[#102A22] font-normal leading-tight">
            The Cold-Pressed Extraction Standard
          </h1>
          <p className="text-[#595E57] text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Why mechanical pressure below 49°C preserves 99.9% of biological nutrients, enzymes, and essential fatty acids.
          </p>
        </div>

        {/* Industrial vs Ramy's Comparison Table */}
        <div className="bg-white rounded-3xl border border-[#747B50]/20 p-6 sm:p-10 shadow-lg space-y-8">
          <div className="text-center space-y-1">
            <h2 className="font-serif text-2xl sm:text-3xl text-[#102A22]">
              Commercial Extraction vs. Ramy&apos;s Mechanical Cold-Press
            </h2>
            <p className="text-xs sm:text-sm text-[#595E57]">
              Understanding what happens at the molecular level inside your bottle.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-[#747B50]/20 text-[#102A22]">
                  <th className="py-4 font-bold uppercase tracking-wider">Parameter</th>
                  <th className="py-4 font-bold text-red-700 uppercase tracking-wider">
                    Standard Industrial Method
                  </th>
                  <th className="py-4 font-bold text-[#254C3C] uppercase tracking-wider">
                    Ramy&apos;s Cold-Pressed Standard
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E8DFCD]">
                <tr>
                  <td className="py-4 font-semibold text-[#102A22]">Operating Temperature</td>
                  <td className="py-4 text-[#595E57]">80°C to 150°C (Steam &amp; friction heat)</td>
                  <td className="py-4 font-bold text-[#254C3C]">Strictly below 49°C (120°F)</td>
                </tr>
                <tr>
                  <td className="py-4 font-semibold text-[#102A22]">Chemical Solvents</td>
                  <td className="py-4 text-[#595E57]">Hexane or petrochemical solvents used for 98% yield</td>
                  <td className="py-4 font-bold text-[#254C3C]">0% Hexane — Pure mechanical hydraulic force</td>
                </tr>
                <tr>
                  <td className="py-4 font-semibold text-[#102A22]">Refining &amp; Bleaching</td>
                  <td className="py-4 text-[#595E57]">Acid-washing and charcoal bleaching to deodorize</td>
                  <td className="py-4 font-bold text-[#254C3C]">Natural double-cloth gravity filtration only</td>
                </tr>
                <tr>
                  <td className="py-4 font-semibold text-[#102A22]">Vitamins &amp; Sterols</td>
                  <td className="py-4 text-[#595E57]">Thermally oxidized, destroyed, or depleted</td>
                  <td className="py-4 font-bold text-[#254C3C]">100% Retained living bioactives (Vitamins A, D, E, F)</td>
                </tr>
                <tr>
                  <td className="py-4 font-semibold text-[#102A22]">Antioxidant Stability</td>
                  <td className="py-4 text-[#595E57]">Requires synthetic BHT/BHA preservatives</td>
                  <td className="py-4 font-bold text-[#254C3C]">Naturally self-preserving via native tocopherols</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 4 Pillars of Science */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-2xl bg-white border border-[#747B50]/20 space-y-4">
            <div className="w-10 h-10 rounded-full bg-[#E8DFCD] flex items-center justify-center text-[#254C3C]">
              <ThermometerSnowflake className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-2xl text-[#102A22]">Thermal Threshold Monitoring</h3>
            <p className="text-sm text-[#595E57] leading-relaxed font-light">
              Continuous thermal probes monitor our expeller barrel. If friction temperatures rise near 45°C, flow speed is automatically reduced. This guarantees that double bonds in sensitive linoleic and alpha-linolenic acids do not denature.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-[#747B50]/20 space-y-4">
            <div className="w-10 h-10 rounded-full bg-[#E8DFCD] flex items-center justify-center text-[#254C3C]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-2xl text-[#102A22]">Microbial &amp; Heavy Metal Assays</h3>
            <p className="text-sm text-[#595E57] leading-relaxed font-light">
              Each production run is certified by accredited laboratories for zero aerobic bacteria, yeast, mould, lead, or arsenic. Every batch meets both Nigerian NAFDAC and international FDA criteria.
            </p>
          </div>
        </div>

        {/* Technical Note on Cloudiness */}
        <div className="p-6 rounded-2xl bg-[#E8DFCD] border border-[#747B50]/30 space-y-2">
          <h4 className="font-serif text-lg text-[#102A22] font-semibold">
            Botanical Note: Why Cold-Pressed Oil May Look Cloudy
          </h4>
          <p className="text-xs sm:text-sm text-[#595E57] leading-relaxed">
            In cooler room temperatures (below 20°C), authentic cold-pressed Baobab or Shea oil may develop soft cloudiness or sediment. This is biological proof of retained natural phytosterols, ceramides, and plant waxes. Warming the bottle between your hands for 30 seconds instantly restores clear golden viscosity.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center pt-4">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#102A22] text-[#F6F1E7] font-semibold text-xs uppercase tracking-widest hover:bg-[#254C3C] transition-colors"
          >
            <span>Discover Cold-Pressed Products</span>
            <ArrowRight className="w-4 h-4 text-[#C6A66B]" />
          </Link>
        </div>
      </div>
    </div>
  );
};
