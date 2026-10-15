import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ShoppingBag, Check } from 'lucide-react';
import { PRODUCTS } from '../../data/products';
import { useCart } from '../../context/CartContext';
import { Product } from '../../types';

export const FeaturedCollection: React.FC = () => {
  const { addToCart, formatPrice } = useCart();
  const [addedProductId, setAddedProductId] = useState<string | null>(null);

  const featured = PRODUCTS.slice(0, 4);

  const handleQuickAdd = (product: Product) => {
    const defaultSize = product.variants[0]?.size || '100ml';
    addToCart(product, defaultSize, 1);
    setAddedProductId(String(product.id));
    setTimeout(() => setAddedProductId(null), 2000);
  };

  return (
    <section className="py-20 sm:py-28 bg-[#F6F1E7] text-[#252923]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#747B50] font-bold">
              Living Botanical Concentrates
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#102A22] font-normal">
              Curated Bestsellers
            </h2>
            <p className="text-[#595E57] text-sm sm:text-base font-light max-w-xl">
              Ethically harvested and cold-pressed to dermatological standards. Certified for pure potency.
            </p>
          </div>

          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#102A22] font-bold border-b-2 border-[#C6A66B] pb-1 hover:text-[#254C3C] transition-all"
          >
            <span>View Complete Store Catalogue</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {featured.map((product) => {
            const isAdded = addedProductId === String(product.id);
            return (
              <div
                key={product.id}
                className="bg-white rounded-2xl border border-[#747B50]/20 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                {/* Image Wrap */}
                <Link
                  to={`/product/${product.slug}`}
                  className="relative aspect-[3/4] bg-[#E8DFCD]/40 p-6 flex items-center justify-center overflow-hidden"
                >
                  <img
                    src={product.images.primary}
                    alt={product.name}
                    className="max-h-[220px] object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#102A22] text-[#F6F1E7] text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full">
                    {product.category}
                  </div>
                  {product.isBestseller && (
                    <div className="absolute top-3 right-3 bg-[#C6A66B] text-[#102A22] text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full">
                      Bestseller
                    </div>
                  )}
                </Link>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-1.5">
                    {/* Rating */}
                    <div className="flex items-center gap-1.5 text-xs text-[#747B50]">
                      <div className="flex text-[#C6A66B]">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-[#C6A66B]" />
                        ))}
                      </div>
                      <span className="text-[11px] font-semibold text-[#595E57]">
                        {product.rating} ({product.reviewCount})
                      </span>
                    </div>

                    <Link to={`/product/${product.slug}`} className="block">
                      <h3 className="font-serif text-xl text-[#102A22] font-semibold group-hover:text-[#254C3C] transition-colors leading-snug">
                        {product.name}
                      </h3>
                    </Link>

                    <p className="text-xs text-[#595E57] line-clamp-2 font-light">
                      {product.tagline}
                    </p>
                  </div>

                  {/* Price & Action */}
                  <div className="pt-3 border-t border-[#E8DFCD] flex items-center justify-between gap-2">
                    <div>
                      <div className="text-[10px] uppercase tracking-wider text-[#595E57]">Price</div>
                      <div className="font-serif text-base font-bold text-[#102A22]">
                        {(product.variants[0]?.price || 0) > 0
                          ? formatPrice(product.variants[0]?.price || product.basePrice)
                          : 'Contact us'}
                      </div>
                    </div>

                    <button
                      onClick={() => handleQuickAdd(product)}
                      disabled={isAdded}
                      className={`p-3 rounded-full transition-all shadow-md flex items-center justify-center ${
                        isAdded
                          ? 'bg-[#254C3C] text-[#E0CFA4]'
                          : 'bg-[#102A22] hover:bg-[#254C3C] text-[#F6F1E7]'
                      }`}
                      aria-label={`Add ${product.name} to cart`}
                    >
                      {isAdded ? (
                        <Check className="w-4 h-4 text-[#C6A66B]" />
                      ) : (
                        <ShoppingBag className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
