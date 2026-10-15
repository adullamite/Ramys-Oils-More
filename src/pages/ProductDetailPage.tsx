import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Star,
  CheckCircle2,
  ShieldCheck,
  ShoppingBag,
  ArrowLeft,
} from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { useCart } from '../context/CartContext';

export const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart, formatPrice } = useCart();

  const product = PRODUCTS.find((p) => p.slug === id || String(p.id) === id) || PRODUCTS[0];

  const [selectedSize, setSelectedSize] = useState(
    product.variants[0]?.size || '100ml Dropper'
  );
  const [selectedImage, setSelectedImage] = useState(product.images.primary);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'benefits' | 'bioactives' | 'usage' | 'safety'>(
    'benefits'
  );
  const [isAdded, setIsAdded] = useState(false);

  const currentVariant =
    product.variants.find((v) => v.size === selectedSize) || product.variants[0];

  const handleAddToCart = () => {
    addToCart(product, selectedSize, quantity);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="py-10 sm:py-16 bg-[#F6F1E7] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumb Back Link */}
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#747B50] hover:text-[#102A22] font-semibold transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Botanical Formulations</span>
        </Link>

        {/* Main Product Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Gallery Column */}
          <div className="lg:col-span-6 space-y-4">
            <div className="aspect-[4/5] bg-white rounded-3xl border border-[#747B50]/20 p-8 flex items-center justify-center shadow-lg relative overflow-hidden group">
              <img
                src={selectedImage}
                alt={product.name}
                className="max-h-[380px] object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-xl"
              />
              <div className="absolute top-4 left-4 bg-[#102A22] text-[#E0CFA4] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                {product.category}
              </div>
            </div>

            {/* Thumbnail Carousel */}
            {product.images.gallery.length > 0 && (
              <div className="flex items-center gap-3 overflow-x-auto pb-2">
                {[product.images.primary, ...product.images.gallery].map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(img)}
                    className={`w-20 h-24 rounded-xl border bg-white p-2 flex-shrink-0 transition-all ${
                      selectedImage === img
                        ? 'border-[#102A22] ring-2 ring-[#C6A66B]/60'
                        : 'border-[#747B50]/30 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="Thumbnail" className="w-full h-full object-contain" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Purchasing Dossier */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#747B50]">
                <span>{product.origin}</span>
                <span>•</span>
                <span className="font-serif italic text-sm text-[#102A22]">
                  {product.botanicalSource}
                </span>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl text-[#102A22] font-normal leading-tight">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2 text-xs text-[#747B50]">
                <div className="flex text-[#C6A66B]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C6A66B]" />
                  ))}
                </div>
                <span className="font-bold text-[#102A22]">{product.rating}</span>
                <span>({product.reviewCount} verified reviews)</span>
              </div>

              <p className="text-[#595E57] text-base leading-relaxed font-light pt-2">
                {product.description}
              </p>
            </div>

            {/* Size Variants */}
            <div className="space-y-3 pt-2 border-t border-[#747B50]/20">
              <span className="text-xs uppercase tracking-wider text-[#102A22] font-bold block">
                Select Botanical Size:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {product.variants.map((v) => {
                  const isSelected = v.size === selectedSize;
                  return (
                    <button
                      key={v.size}
                      onClick={() => setSelectedSize(v.size)}
                      className={`p-3 rounded-xl border text-center transition-all ${
                        isSelected
                          ? 'bg-[#102A22] text-[#F6F1E7] border-[#102A22] shadow-md'
                          : 'bg-white text-[#252923] border-[#747B50]/30 hover:border-[#C6A66B]'
                      }`}
                    >
                      <div className="text-xs font-semibold">{v.size}</div>
                      <div
                        className={`text-xs font-bold mt-1 ${
                          isSelected ? 'text-[#C6A66B]' : 'text-[#747B50]'
                        }`}
                      >
                        {formatPrice(v.price)}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quantity and Add to Cart Button */}
            <div className="p-6 rounded-2xl bg-[#E8DFCD]/60 border border-[#747B50]/30 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs text-[#595E57] uppercase tracking-wider">Total Investment</div>
                  <div className="font-serif text-3xl font-bold text-[#102A22]">
                    {formatPrice(currentVariant.price * quantity)}
                  </div>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center border border-[#747B50]/40 rounded-full bg-white px-3 py-1.5 shadow-inner">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-2 text-sm font-bold text-[#595E57] hover:text-[#102A22]"
                  >
                    -
                  </button>
                  <span className="px-3 text-sm font-bold text-[#102A22]">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-2 text-sm font-bold text-[#595E57] hover:text-[#102A22]"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                disabled={isAdded}
                className="w-full py-4 rounded-full bg-[#102A22] hover:bg-[#254C3C] text-[#F6F1E7] font-semibold text-xs uppercase tracking-widest flex items-center justify-center gap-2.5 transition-all shadow-xl hover:scale-[1.01]"
              >
                <ShoppingBag className="w-4 h-4 text-[#C6A66B]" />
                <span>{isAdded ? 'Added to Botanical Cart!' : 'Add to Bag'}</span>
              </button>

              <div className="flex items-center justify-center gap-6 text-[11px] text-[#595E57] pt-1">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#254C3C]" />
                  NAFDAC Certified
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#254C3C]" />
                  FDA Registered Facility
                </span>
              </div>
            </div>

            {/* Technical Tab Dossiers */}
            <div className="space-y-4 pt-4 border-t border-[#747B50]/20">
              <div className="flex border-b border-[#747B50]/20 gap-6 text-xs uppercase tracking-wider font-semibold">
                {[
                  { key: 'benefits', label: 'Clinical Benefits' },
                  { key: 'bioactives', label: 'Bioactives' },
                  { key: 'usage', label: 'How to Use' },
                  { key: 'safety', label: 'Extraction' },
                ].map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key as any)}
                    className={`pb-2 border-b-2 transition-all ${
                      activeTab === tab.key
                        ? 'border-[#102A22] text-[#102A22]'
                        : 'border-transparent text-[#595E57] hover:text-[#102A22]'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="text-sm text-[#595E57] leading-relaxed font-light pt-2">
                {activeTab === 'benefits' && (
                  <ul className="space-y-2">
                    {product.benefits.map((b, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#254C3C] flex-shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {activeTab === 'bioactives' && (
                  <div className="space-y-2">
                    <p>Verified Phytochemical Profile:</p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {product.bioactiveCompounds.map((c, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-full bg-white border border-[#747B50]/30 text-xs text-[#102A22] font-medium"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'usage' && <p>{product.usageInstructions}</p>}

                {activeTab === 'safety' && (
                  <div className="space-y-2">
                    <p>
                      <strong>Protocol:</strong> {product.extractionMethod}
                    </p>
                    <p>
                      <strong>Facility:</strong> Regulated by NAFDAC and FDA in Minna, Niger State. Zero chemical hexane or industrial solvents.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
