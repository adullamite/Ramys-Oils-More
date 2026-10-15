import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Search, Star, ShoppingBag, Check, SlidersHorizontal, X } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { useCart } from '../context/CartContext';
import { Product } from '../types';

export const ShopPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { addToCart, formatPrice } = useCart();
  const [addedId, setAddedId] = useState<string | null>(null);

  const activeCategory = searchParams.get('category') || 'All';
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');

  const categories = ['All', 'Oils', 'Butters', 'Sets'];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchesCategory =
        activeCategory === 'All' || p.category.toLowerCase() === activeCategory.toLowerCase();
      const matchesSearch =
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.botanicalSource.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.basePrice - b.basePrice;
      if (sortBy === 'price-desc') return b.basePrice - a.basePrice;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });
  }, [activeCategory, searchQuery, sortBy]);

  const handleQuickAdd = (product: Product) => {
    const defaultSize = product.variants[0]?.size || '100ml';
    addToCart(product, defaultSize, 1);
    setAddedId(String(product.id));
    setTimeout(() => setAddedId(null), 2000);
  };

  return (
    <div className="py-12 sm:py-20 bg-[#F6F1E7] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-[#747B50] font-bold">
            Certified Store Catalogue
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-[#102A22] font-normal">
            Botanical Skincare &amp; Oils
          </h1>
          <p className="text-[#595E57] text-sm sm:text-base font-light">
            Every bottle is mechanically cold-pressed below 49°C in Minna, Nigeria. Unbleached, unrefined, and lab-tested.
          </p>
        </div>

        {/* Filter and Search Bar Controls */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl border border-[#747B50]/20 shadow-sm space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
              {categories.map((cat) => {
                const isSelected = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => {
                      if (cat === 'All') {
                        searchParams.delete('category');
                      } else {
                        searchParams.set('category', cat);
                      }
                      setSearchParams(searchParams);
                    }}
                    className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all whitespace-nowrap ${
                      isSelected
                        ? 'bg-[#102A22] text-[#F6F1E7] shadow-md'
                        : 'bg-[#E8DFCD]/60 text-[#252923] hover:bg-[#E8DFCD]'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Search Input & Sort */}
            <div className="flex items-center gap-3 w-full md:w-auto">
              <div className="relative flex-1 md:w-64">
                <Search className="w-4 h-4 text-[#595E57] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search botanicals..."
                  className="w-full pl-9 pr-8 py-2 text-xs rounded-full border border-[#747B50]/30 focus:outline-none focus:border-[#C6A66B] bg-[#F6F1E7]/50"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#595E57] hover:text-[#102A22]"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              <div className="flex items-center gap-1.5 text-xs text-[#595E57] flex-shrink-0">
                <SlidersHorizontal className="w-3.5 h-3.5 text-[#747B50]" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-transparent border-none text-xs font-semibold text-[#102A22] focus:outline-none cursor-pointer"
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-[#747B50]/20 p-8 space-y-4">
            <h3 className="font-serif text-2xl text-[#102A22]">No Botanical Matches Found</h3>
            <p className="text-sm text-[#595E57]">
              Try adjusting your search criteria or resetting filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                searchParams.delete('category');
                setSearchParams(searchParams);
              }}
              className="px-6 py-2.5 rounded-full bg-[#102A22] text-[#F6F1E7] text-xs uppercase tracking-widest font-semibold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {filteredProducts.map((product) => {
              const isAdded = addedId === String(product.id);
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
                        <div className="font-serif text-lg font-bold text-[#102A22]">
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
        )}
      </div>
    </div>
  );
};
