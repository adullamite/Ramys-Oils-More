import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Package, Sparkles, Building2, Layers } from 'lucide-react';

export const WholesaleBanner: React.FC = () => {
  return (
    <section className="py-20 bg-[#102A22] text-[#F6F1E7] relative overflow-hidden border-t border-[#C6A66B]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#091712] border border-[#C6A66B]/40 p-8 sm:p-14 lg:p-16 relative overflow-hidden shadow-2xl">
          {/* Subtle gold grid overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(#C6A66B_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#254C3C] text-[#E0CFA4] text-xs uppercase tracking-widest font-semibold border border-[#C6A66B]/30">
                <Building2 className="w-3.5 h-3.5 text-[#C6A66B]" />
                <span>Commercial &amp; B2B Partnerships</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl text-[#F6F1E7] font-normal leading-tight">
                Bulk Dispensary &amp; Wholesale Supply for Spas, Retailers &amp; Formulators.
              </h2>

              <p className="text-[#F6F1E7]/80 text-sm sm:text-base leading-relaxed font-light max-w-2xl">
                We supply premier spas, cosmetic chemists, and organic beauty brands across Nigeria and internationally with certified cold-pressed botanical oils in scalable commercial volumes.
              </p>

              {/* Tiers List */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-3.5 rounded-xl bg-[#102A22] border border-[#254C3C] space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#E0CFA4]">
                    <Package className="w-4 h-4 text-[#C6A66B]" />
                    <span>Retail Cartons</span>
                  </div>
                  <p className="text-[11px] text-[#F6F1E7]/70">24 pcs ready-to-sell retail packaging</p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#102A22] border border-[#254C3C] space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#E0CFA4]">
                    <Layers className="w-4 h-4 text-[#C6A66B]" />
                    <span>1L Dispensary</span>
                  </div>
                  <p className="text-[11px] text-[#F6F1E7]/70">Professional spa &amp; salon backbar</p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#102A22] border border-[#254C3C] space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#E0CFA4]">
                    <Sparkles className="w-4 h-4 text-[#C6A66B]" />
                    <span>Bulk Drums (25L+)</span>
                  </div>
                  <p className="text-[11px] text-[#F6F1E7]/70">Industrial cosmetic manufacturing</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center">
              <Link
                to="/wholesale"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#C6A66B] hover:bg-[#E0CFA4] text-[#102A22] font-semibold text-xs sm:text-sm uppercase tracking-widest flex items-center justify-center gap-2.5 transition-all shadow-xl hover:scale-105"
              >
                <span>Request B2B Price Catalog</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <span className="text-[11px] text-[#F6F1E7]/50 mt-3 text-center sm:text-right">
                Verified certificate of analysis (COA) provided with all commercial batches.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
