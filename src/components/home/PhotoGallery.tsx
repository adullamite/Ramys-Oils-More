import React, { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

// Gallery photos — using all cutout PNGs (the 'originals' were not separately
// provided; these are the same product photos used in a natural masonry layout)
import baobabOilPack from '../../assets/ramys-baobab-oil-pack.webp';
import bodyCareSet from '../../assets/body-care-set.png';
import carrotOil from '../../assets/ramys-carrot-oil-pack.webp';
import hibiscusTrio from '../../assets/hibiscus-zobo-seed-oil-trio.png';
import hibiscus50ml from '../../assets/hibiscus-seed-oil-50ml.png';
import massageOilPair from '../../assets/massage-oil-50ml-pair.png';
import moringaOil from '../../assets/moringa-seed-oil-100ml.png';
import neemLeaves from '../../assets/neem-leaves.webp';
import neemOilPack from '../../assets/ramys-neem-oil-pack.webp';
import neemOilSingle from '../../assets/ramys-neem-oil.webp';
import seeds from '../../assets/seeds-ramys.webp';
import sheaButter from '../../assets/ramys-shea-butter.webp';

interface GalleryPhoto {
  src: string;
  alt: string;
  caption: string;
}

const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    src: hibiscusTrio,
    alt: "Ramy's Hibiscus (Zobo) Seed Oil, three 100ml bottles",
    caption: 'Hibiscus (Zobo) Seed Oil',
  },
  {
    src: sheaButter,
    alt: "Ramy's Shea Butter 400g jar held in hand",
    caption: 'Shea Butter 400g',
  },
  {
    src: bodyCareSet,
    alt: "Ramy's Body Care Set — body wash, shea nut oil, body lotion, body butter",
    caption: "Ramy's Body Care Set",
  },
  {
    src: baobabOilPack,
    alt: "Ramy's Baobab Seed Oil in multiple bottle sizes",
    caption: 'Baobab Seed Oil',
  },
  {
    src: neemOilPack,
    alt: "Ramy's Neem Seed Oil in multiple bottle sizes",
    caption: 'Neem Seed Oil Collection',
  },
  {
    src: neemOilSingle,
    alt: "Ramy's Neem Seed Oil one-litre bottle",
    caption: 'Neem Seed Oil 1L',
  },
  {
    src: neemLeaves,
    alt: 'Fresh green neem leaves',
    caption: 'Neem Leaves',
  },
  {
    src: seeds,
    alt: 'Seeds displayed in a wooden bowl',
    caption: 'Botanical Seeds',
  },
  {
    src: moringaOil,
    alt: "Ramy's Moringa Seed Oil 100ml dropper bottle",
    caption: 'Moringa Seed Oil 100ml',
  },
  {
    src: carrotOil,
    alt: "Ramy's Carrot Oil dropper bottle",
    caption: 'Carrot Oil',
  },
  {
    src: massageOilPair,
    alt: "Ramy's Massage Oil 50ml, two bottles",
    caption: "Ramy's Massage Oil 50ml",
  },
  {
    src: hibiscus50ml,
    alt: "Ramy's Hibiscus Seed Oil 50ml bottle",
    caption: 'Hibiscus Seed Oil 50ml',
  },
];

export const PhotoGallery: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const goNext = useCallback(() => {
    if (activeIndex === null) return;
    setActiveIndex((i) => ((i! + 1) % GALLERY_PHOTOS.length));
  }, [activeIndex]);

  const goPrev = useCallback(() => {
    if (activeIndex === null) return;
    setActiveIndex((i) => ((i! - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length));
  }, [activeIndex]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (activeIndex === null) return;
      if (e.key === 'Escape') setActiveIndex(null);
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    },
    [activeIndex, goNext, goPrev]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    document.body.style.overflow = activeIndex !== null ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [activeIndex]);

  return (
    <section className="py-20 sm:py-28 bg-[#102A22] text-[#F6F1E7] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C6A66B]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C6A66B] font-semibold">
            Product Gallery
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#F6F1E7] font-normal">
            The Collection in Detail
          </h2>
          <p className="text-[#F6F1E7]/70 text-sm sm:text-base font-light">
            Click any photo to open the full-size gallery viewer.
          </p>
        </div>

        {/* Responsive Masonry-Style Grid */}
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4 [column-fill:balance]">
          {GALLERY_PHOTOS.map((photo, idx) => (
            <button
              key={idx}
              id={`gallery-photo-${idx}`}
              onClick={() => setActiveIndex(idx)}
              className="group relative w-full rounded-2xl overflow-hidden bg-[#254C3C]/30 border border-[#C6A66B]/10 hover:border-[#C6A66B]/40 transition-all duration-300 shadow-md hover:shadow-xl break-inside-avoid focus:outline-none focus:ring-2 focus:ring-[#C6A66B]"
              aria-label={`View ${photo.caption}`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="w-full object-contain bg-[#1a3d30] group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#091712]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                <span className="text-xs text-[#E0CFA4] font-semibold tracking-wider">
                  {photo.caption}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={GALLERY_PHOTOS[activeIndex].alt}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-[#091712]/95 backdrop-blur-md"
            onClick={() => setActiveIndex(null)}
          />

          {/* Lightbox Container */}
          <div className="relative z-10 max-w-2xl w-full flex flex-col items-center gap-4">
            {/* Close */}
            <button
              id="gallery-lightbox-close"
              onClick={() => setActiveIndex(null)}
              className="absolute -top-12 right-0 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Close gallery"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Image */}
            <div className="w-full rounded-2xl overflow-hidden shadow-2xl bg-[#1a3d30] border border-[#C6A66B]/20">
              <img
                src={GALLERY_PHOTOS[activeIndex].src}
                alt={GALLERY_PHOTOS[activeIndex].alt}
                className="w-full max-h-[70vh] object-contain"
              />
            </div>

            {/* Caption & nav */}
            <div className="flex items-center justify-between w-full">
              <button
                id="gallery-prev-btn"
                onClick={goPrev}
                className="p-3 rounded-full bg-[#254C3C] hover:bg-[#C6A66B] text-white hover:text-[#102A22] transition-colors shadow-lg"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="text-center">
                <p className="font-serif text-lg text-[#F6F1E7]">{GALLERY_PHOTOS[activeIndex].caption}</p>
                <p className="text-xs text-[#F6F1E7]/50 mt-0.5">
                  {activeIndex + 1} / {GALLERY_PHOTOS.length}
                </p>
              </div>

              <button
                id="gallery-next-btn"
                onClick={goNext}
                className="p-3 rounded-full bg-[#254C3C] hover:bg-[#C6A66B] text-white hover:text-[#102A22] transition-colors shadow-lg"
                aria-label="Next photo"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
