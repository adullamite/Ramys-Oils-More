import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ShieldCheck, ShoppingBag, MessageCircle } from 'lucide-react';
import { PRODUCTS } from '../../data/products';
import { useCart } from '../../context/CartContext';

export const ProductSpotlight: React.FC = () => {
  const product = PRODUCTS.find((p) => p.id === 'baobab-seed-oil') || PRODUCTS[0];
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState(product.variants[0]?.size || '50ml Dropper');
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product, selectedSize, 1);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const benefits = [
    'Instant dermal absorption with zero greasy residue',
    'Reinforces lipid barrier resilience against dry Harmattan & city smog',
    'Calms reactive patches, redness, and micro-flaking',
    'Safe for facial massage, beard conditioning, and split hair ends',
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#091712] text-[#F6F1E7] relative overflow-hidden border-t border-[#C6A66B]/20">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#254C3C]/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Product Image */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="w-full aspect-square max-w-[460px] mx-auto rounded-3xl bg-[#102A22]/80 border border-[#C6A66B]/30 p-8 relative shadow-2xl flex items-center justify-center overflow-hidden group">
              {/* Ambient glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_60%,#C6A66B10_0%,transparent_70%)] pointer-events-none" />
              <img
                src={product.images.primary}
                alt={product.images.alt}
                width={400}
                height={400}
                loading="lazy"
                className="relative z-10 max-h-[360px] object-contain group-hover:scale-105 transition-transform duration-700 drop-shadow-2xl"
              />
              <div className="absolute bottom-4 inset-x-4 flex items-center justify-center text-[11px] text-[#E0CFA4]/70 bg-[#091712]/90 backdrop-blur-md px-4 py-2 rounded-full border border-[#C6A66B]/20">
                <span>Ramy's Baobab Seed Oil — 50ml &amp; 100ml sizes</span>
              </div>
            </div>
          </div>

          {/* Right Column: Product Profile */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#254C3C] border border-[#C6A66B]/30 text-xs text-[#E0CFA4] tracking-wider uppercase font-semibold">
              <ShieldCheck className="w-4 h-4 text-[#C6A66B]" />
              <span>Flagship Cold-Pressed Formulation</span>
            </div>

            <div className="space-y-2">
              <h2 className="font-serif text-3xl sm:text-5xl text-[#F6F1E7] font-normal leading-tight">
                Pure Baobab Seed Oil Spotlight
              </h2>
              <p className="font-serif italic text-lg sm:text-xl text-[#E0CFA4]/80">
                Adansonia digitata • Sourced from Northern Nigeria
              </p>
            </div>

            <p className="text-[#F6F1E7]/80 text-sm sm:text-base leading-relaxed font-light">
              Known for centuries as the &ldquo;Tree of Life,&rdquo; the African Baobab produces nutrient-packed seeds
              capable of surviving severe droughts. Our first cold mechanical press yields a silky, gold-toned lipid
              matrix loaded with vitamins A, D, E, and F.
            </p>

            {/* Benefits */}
            <div className="space-y-2.5 pt-1">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#F6F1E7]/90 font-light">
                  <CheckCircle2 className="w-4 h-4 text-[#C6A66B] flex-shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            {/* Size Variant Selector */}
            <div className="space-y-3 pt-2">
              <span className="text-xs uppercase tracking-wider text-[#E0CFA4] font-semibold block">
                Select Size:
              </span>
              <div className="flex flex-wrap gap-2.5">
                {product.variants.map((v) => {
                  const isSelected = v.size === selectedSize;
                  return (
                    <button
                      key={v.size}
                      onClick={() => setSelectedSize(v.size)}
                      className={`px-4 py-2.5 rounded-xl border text-xs font-semibold transition-all ${
                        isSelected
                          ? 'bg-[#254C3C] border-[#C6A66B] text-[#F6F1E7] shadow-lg'
                          : 'bg-[#102A22]/60 border-[#254C3C] text-[#F6F1E7]/70 hover:border-[#C6A66B]/50'
                      }`}
                    >
                      {v.size}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Price & CTA */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <div className="w-full sm:w-auto">
                <div className="text-xs text-[#F6F1E7]/50 uppercase tracking-wider">Pricing</div>
                <div className="font-serif text-xl font-semibold text-[#E0CFA4]">
                  Contact us for price
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                disabled={isAdded}
                className="w-full sm:flex-1 py-4 px-8 rounded-full bg-[#C6A66B] hover:bg-[#E0CFA4] text-[#102A22] font-semibold text-xs sm:text-sm tracking-widest uppercase flex items-center justify-center gap-2.5 transition-all shadow-xl"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>{isAdded ? 'Added to Bag!' : 'Add to Bag'}</span>
              </button>

              <Link
                to={`/product/${product.slug}`}
                className="w-full sm:w-auto p-4 rounded-full border border-[#C6A66B]/40 hover:bg-[#254C3C] text-[#E0CFA4] hover:text-white flex items-center justify-center transition-colors"
                aria-label="View Full Product Details"
              >
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Contact CTA */}
            <a
              href="https://wa.me/234000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs text-[#C6A66B] hover:text-[#E0CFA4] transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Order via WhatsApp or Instagram DM — placeholder link</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
