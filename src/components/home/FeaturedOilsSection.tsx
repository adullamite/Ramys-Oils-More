import React, { useState, useEffect, useCallback } from 'react';
import { X, ZoomIn } from 'lucide-react';
import flyerBaobab from '../../assets/flyer-baobab-oil-1.png';
import flyerNeem from '../../assets/flyer-neem-oil-1.png';
import flyerOlive from '../../assets/flyer-olive-oil-1.png';

interface FeaturedOil {
  id: string;
  name: string;
  tagline: string;
  flyerSrc: string;
  flyerAlt: string;
  accent: string;
}

const FEATURED_OILS: FeaturedOil[] = [
  {
    id: 'olive',
    name: 'Olive Oil 1L',
    tagline: 'Extra Virgin Cold-Pressed — Premium Mediterranean Quality',
    flyerSrc: flyerOlive,
    flyerAlt: "Ramy's Olive Oil 1L marketing flyer",
    accent: '#6b8f4e',
  },
  {
    id: 'baobab',
    name: 'Baobab Oil 1L',
    tagline: 'Tree of Life — Bulk Cold-Pressed Dispensary Size',
    flyerSrc: flyerBaobab,
    flyerAlt: "Ramy's Baobab Seed Oil 1L marketing flyer",
    accent: '#c6a66b',
  },
  {
    id: 'neem',
    name: 'Neem Oil 1L',
    tagline: 'Pure Azadirachta indica — Clarifying Dispensary Size',
    flyerSrc: flyerNeem,
    flyerAlt: "Ramy's Pure Neem Oil 1L marketing flyer",
    accent: '#4a7c59',
  },
];

export const FeaturedOilsSection: React.FC = () => {
  const [lightboxOil, setLightboxOil] = useState<FeaturedOil | null>(null);

  // Close lightbox on ESC
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape' && lightboxOil) setLightboxOil(null);
    },
    [lightboxOil]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Prevent scroll when lightbox open
  useEffect(() => {
    document.body.style.overflow = lightboxOil ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [lightboxOil]);

  return (
    <section className="py-20 sm:py-28 bg-[#F6F1E7] text-[#252923]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <span className="text-xs uppercase tracking-[0.25em] text-[#747B50] font-bold">
            Dispensary & Bulk Sizes
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#102A22] font-normal">
            Featured Oils
          </h2>
          <p className="text-[#595E57] text-sm sm:text-base font-light">
            Available in 1-litre dispensary sizes for professionals, salons, and wholesale buyers.
            Click any flyer to enlarge.
          </p>
        </div>

        {/* Flyer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          {FEATURED_OILS.map((oil) => (
            <button
              key={oil.id}
              id={`featured-oil-${oil.id}`}
              onClick={() => setLightboxOil(oil)}
              className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#C6A66B]/40 bg-[#E8DFCD] border border-[#747B50]/20 flex flex-col text-left"
              aria-label={`Enlarge ${oil.name} flyer`}
            >
              {/* Flyer Image — full, uncropped */}
              <div className="relative overflow-hidden">
                <img
                  src={oil.flyerSrc}
                  alt={oil.flyerAlt}
                  width={600}
                  height={800}
                  loading="lazy"
                  className="w-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#102A22]/0 group-hover:bg-[#102A22]/30 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-xl">
                    <ZoomIn className="w-5 h-5 text-[#102A22]" />
                  </div>
                </div>
              </div>

              {/* Caption */}
              <div className="p-4 space-y-1">
                <h3 className="font-serif text-lg text-[#102A22] font-semibold">{oil.name}</h3>
                <p className="text-xs text-[#595E57] font-light">{oil.tagline}</p>
                <span className="inline-block text-[10px] uppercase tracking-widest text-[#747B50] font-bold mt-1">
                  Tap to enlarge
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <p className="text-sm text-[#595E57] mb-4">
            Interested in bulk or wholesale pricing for 1L sizes?
          </p>
          <a
            href="/wholesale"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#102A22] hover:bg-[#254C3C] text-[#F6F1E7] font-semibold text-xs uppercase tracking-widest transition-colors shadow-lg"
          >
            Enquire About Wholesale
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOil && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`${lightboxOil.name} flyer enlarged`}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-[#091712]/90 backdrop-blur-sm"
            onClick={() => setLightboxOil(null)}
          />

          {/* Lightbox Content */}
          <div className="relative z-10 max-w-3xl w-full max-h-[90vh] flex flex-col">
            {/* Close button */}
            <button
              id="lightbox-close-btn"
              onClick={() => setLightboxOil(null)}
              className="absolute -top-12 right-0 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-20"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Full flyer image — uncropped */}
            <div className="overflow-y-auto rounded-2xl shadow-2xl">
              <img
                src={lightboxOil.flyerSrc}
                alt={lightboxOil.flyerAlt}
                className="w-full object-contain"
              />
            </div>

            <p className="text-center text-xs text-white/60 mt-3 tracking-wider">
              {lightboxOil.flyerAlt} • Press ESC or click outside to close
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
