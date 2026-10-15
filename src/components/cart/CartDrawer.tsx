import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, ShieldCheck } from 'lucide-react';
import { FaInstagram as Instagram } from 'react-icons/fa';
import { useCart } from '../../context/CartContext';

const INSTAGRAM_HANDLE = 'ramysoilsandmore'; // ← update to real IG handle if different

export const CartDrawer: React.FC = () => {
  const { items, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, subtotal, formatPrice } =
    useCart();

  const FREE_SHIPPING_THRESHOLD = 30000;
  const progressPercent = Math.min(100, Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100));
  const amountRemaining = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);

  const openInstagramDM = () => {
    const itemLines = items
      .map((item) => `• ${item.product.name} (${item.selectedSize}) x${item.quantity} = ${formatPrice(item.unitPrice * item.quantity)}`)
      .join('\n');
    const message = `Hi Ramy's! I'd like to place an order 🌿\n\nItems:\n${itemLines}\n\nSubtotal: ${formatPrice(subtotal)}\n\nPlease send me the payment details. Thank you!`;
    const encoded = encodeURIComponent(message);
    // Instagram DM pre-fill via direct link
    window.open(`https://ig.me/m/${INSTAGRAM_HANDLE}?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  // Close drawer on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isCartOpen) {
        setIsCartOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isCartOpen, setIsCartOpen]);

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" role="dialog" aria-modal="true" aria-label="Shopping Cart">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#091712]/70 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#F6F1E7] border-l border-[#C6A66B]/30 shadow-2xl flex flex-col">
          {/* Header */}
          <div className="px-6 py-5 bg-[#102A22] text-[#F6F1E7] flex items-center justify-between border-b border-[#C6A66B]/30">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5 text-[#C6A66B]" />
              <h2 className="font-serif text-xl tracking-wide">Your Botanical Selection</h2>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 rounded-full text-[#F6F1E7]/70 hover:text-white hover:bg-[#254C3C] transition-colors"
              aria-label="Close Cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Indicator */}
          <div className="bg-[#E8DFCD] px-6 py-3 border-b border-[#747B50]/20 text-xs">
            {amountRemaining > 0 ? (
              <p className="text-[#252923] mb-1.5">
                Add <span className="font-bold text-[#102A22]">{formatPrice(amountRemaining)}</span> more to unlock <span className="font-semibold text-[#254C3C]">Free Nationwide Delivery</span>
              </p>
            ) : (
              <p className="text-[#254C3C] font-semibold mb-1.5 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#254C3C]" />
                You have qualified for Free Express Delivery!
              </p>
            )}
            <div className="w-full h-1.5 bg-[#C6A66B]/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#254C3C] rounded-full transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto px-6 py-6 divide-y divide-[#E8DFCD]">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 rounded-full bg-[#E8DFCD] flex items-center justify-center mb-4 text-[#747B50]">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl text-[#102A22] mb-2">Your Bag is Empty</h3>
                <p className="text-sm text-[#595E57] max-w-xs mb-6">
                  Experience the cellular potency of our pure cold-pressed botanical oils.
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="px-6 py-3 rounded-full bg-[#102A22] text-[#F6F1E7] font-semibold text-xs uppercase tracking-widest hover:bg-[#254C3C] transition-colors"
                >
                  Explore Collection
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div key={item.id} className="py-4 flex gap-4 items-center">
                  {/* Thumbnail */}
                  <img
                    src={item.product.images.primary}
                    alt={item.product.name}
                    className="w-16 h-20 object-cover rounded-lg bg-[#E8DFCD] border border-[#747B50]/20 flex-shrink-0"
                  />

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-serif text-base text-[#102A22] truncate font-semibold">
                      {item.product.name}
                    </h4>
                    <span className="inline-block text-[11px] uppercase tracking-wider text-[#747B50] font-semibold bg-[#E8DFCD] px-2 py-0.5 rounded mt-0.5">
                      {item.selectedSize}
                    </span>
                    <div className="text-sm font-semibold text-[#102A22] mt-1.5">
                      {formatPrice(item.unitPrice)}
                    </div>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center border border-[#747B50]/30 rounded-full bg-white px-2 py-0.5">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 text-[#595E57] hover:text-[#102A22]"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-semibold text-[#102A22]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 text-[#595E57] hover:text-[#102A22]"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-1.5 text-[#595E57] hover:text-red-700 transition-colors ml-auto"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Subtotal & Checkout Footer */}
          {items.length > 0 && (
            <div className="px-6 py-5 bg-[#E8DFCD] border-t border-[#747B50]/30 space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-[#595E57]">Estimated Subtotal</span>
                <span className="font-serif text-xl font-bold text-[#102A22]">
                  {formatPrice(subtotal)}
                </span>
              </div>
              <p className="text-[11px] text-[#595E57]">
                Taxes and delivery calculated at checkout. Confirm via WhatsApp or Instagram DM.
              </p>

              <div className="flex flex-col gap-2.5">
                <Link
                  to="/checkout"
                  onClick={() => setIsCartOpen(false)}
                  className="w-full py-3.5 rounded-full bg-[#102A22] hover:bg-[#254C3C] text-[#F6F1E7] font-semibold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-colors shadow-lg"
                >
                  <span>Proceed to Secure Checkout</span>
                  <ArrowRight className="w-4 h-4 text-[#C6A66B]" />
                </Link>

                {/* Instagram DM quick-order button */}
                <button
                  onClick={openInstagramDM}
                  className="w-full py-3 rounded-full bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white font-semibold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all hover:opacity-90 hover:shadow-lg shadow-md"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Order via Instagram DM</span>
                </button>

                <button
                  onClick={() => setIsCartOpen(false)}
                  className="w-full py-2.5 text-center text-xs font-semibold text-[#102A22] hover:underline"
                >
                  Continue Browsing
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
