import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowLeft, CheckCircle2, PhoneCall, Building2, Truck, ArrowRight } from 'lucide-react';
import { FaInstagram as Instagram } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const INSTAGRAM_HANDLE = 'ramysoilsandmore'; // ← update to real IG handle

export const CheckoutPage: React.FC = () => {
  const { items, subtotal, formatPrice, clearCart } = useCart();

  const [customer, setCustomer] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: 'FCT Abuja',
    deliveryNotes: '',
    paymentMethod: 'whatsapp',
  });

  const [orderComplete, setOrderComplete] = useState(false);
  const [orderReference, setOrderReference] = useState('');

  const shippingFee = subtotal >= 30000 || items.length === 0 ? 0 : 3500;
  const grandTotal = subtotal + shippingFee;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customer.fullName || !customer.phone || !customer.address) return;

    const ref = `RMY-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderReference(ref);
    setOrderComplete(true);
  };

  const generateWhatsAppOrderLink = () => {
    const itemList = items
      .map((item) => `- ${item.product.name} (${item.selectedSize}) x${item.quantity} = ${formatPrice(item.unitPrice * item.quantity)}`)
      .join('%0A');

    const msg = `*NEW ORDER: ${orderReference}*%0A*Customer:* ${customer.fullName}%0A*Phone:* ${customer.phone}%0A*Delivery Address:* ${customer.address}, ${customer.city}, ${customer.state}%0A%0A*Items:*%0A${itemList}%0A%0A*Subtotal:* ${formatPrice(subtotal)}%0A*Delivery:* ${formatPrice(shippingFee)}%0A*Total:* ${formatPrice(grandTotal)}%0A*Payment Preference:* ${customer.paymentMethod.toUpperCase()}`;

    return `https://wa.me/2347088186782?text=${msg}`;
  };

  const generateInstagramOrderLink = () => {
    const itemLines = items
      .map((item) => `• ${item.product.name} (${item.selectedSize}) x${item.quantity} = ${formatPrice(item.unitPrice * item.quantity)}`)
      .join('\n');

    const message = `Hi Ramy’s! 🌿 I’d like to confirm my order:\n\nOrder Ref: ${orderReference}\nName: ${customer.fullName}\nPhone: ${customer.phone}\nDelivery: ${customer.address}, ${customer.city}, ${customer.state}\n\nItems:\n${itemLines}\n\nSubtotal: ${formatPrice(subtotal)}\nDelivery: ${formatPrice(shippingFee)}\nTotal: ${formatPrice(grandTotal)}\nPayment: ${customer.paymentMethod.toUpperCase()}\n\nPlease confirm and share payment details. Thank you!`;

    return `https://ig.me/m/${INSTAGRAM_HANDLE}?text=${encodeURIComponent(message)}`;
  };

  if (orderComplete) {
    return (
      <div className="py-16 sm:py-24 bg-[#F6F1E7] min-h-screen">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <div className="w-16 h-16 rounded-full bg-[#254C3C] text-[#E0CFA4] flex items-center justify-center mx-auto shadow-xl">
            <CheckCircle2 className="w-10 h-10 text-[#C6A66B]" />
          </div>

          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#747B50] font-bold">
              Order Reference #{orderReference}
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl text-[#102A22]">
              Order Successfully Registered
            </h1>
            <p className="text-sm text-[#595E57] max-w-md mx-auto">
              Thank you, <strong>{customer.fullName}</strong>. Your cold-pressed botanical selection is ready for dispatch from our Minna dispensary.
            </p>
          </div>

          {/* Pro-forma breakdown card */}
          <div className="bg-white rounded-2xl border border-[#747B50]/20 p-6 text-left space-y-4 shadow-sm">
            <h3 className="font-serif text-lg text-[#102A22] font-semibold border-b border-[#E8DFCD] pb-2">
              Dispatch Summary
            </h3>
            <div className="text-xs text-[#595E57] space-y-1.5">
              <div><strong>Recipient:</strong> {customer.fullName} ({customer.phone})</div>
              <div><strong>Delivery Destination:</strong> {customer.address}, {customer.city}, {customer.state}</div>
              <div><strong>Order Total:</strong> <span className="text-sm font-bold text-[#102A22]">{formatPrice(grandTotal)}</span></div>
            </div>

            <div className="pt-2 flex flex-col gap-2.5">
              <a
                href={generateWhatsAppOrderLink()}
                target="_blank"
                rel="noreferrer"
                className="w-full py-4 rounded-full bg-[#254C3C] hover:bg-[#102A22] text-[#E0CFA4] hover:text-white font-semibold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-colors shadow-lg"
              >
                <PhoneCall className="w-4 h-4 text-[#C6A66B]" />
                <span>Confirm via WhatsApp</span>
              </a>
              <a
                href={generateInstagramOrderLink()}
                target="_blank"
                rel="noreferrer"
                className="w-full py-4 rounded-full bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white font-semibold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all hover:opacity-90 shadow-md"
              >
                <Instagram className="w-4 h-4" />
                <span>Confirm via Instagram DM</span>
              </a>
            </div>
          </div>

          <div className="pt-4">
            <Link
              to="/shop"
              onClick={() => clearCart()}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#102A22] font-bold hover:underline"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Return to Store Catalogue</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="py-20 bg-[#F6F1E7] min-h-screen text-center">
        <div className="max-w-md mx-auto px-4 space-y-4">
          <h1 className="font-serif text-3xl text-[#102A22]">Your Cart is Empty</h1>
          <p className="text-sm text-[#595E57]">
            Please select at least one botanical formulation before proceeding to checkout.
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#102A22] text-[#F6F1E7] text-xs uppercase tracking-widest font-semibold"
          >
            <span>Explore Collection</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 sm:py-20 bg-[#F6F1E7] min-h-screen text-[#252923]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex items-center justify-between border-b border-[#747B50]/20 pb-4">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#747B50] hover:text-[#102A22] font-semibold"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Continue Shopping</span>
          </Link>
          <div className="flex items-center gap-1.5 text-xs text-[#254C3C] font-semibold">
            <ShieldCheck className="w-4 h-4 text-[#254C3C]" />
            <span>256-Bit Encrypted Secure Checkout</span>
          </div>
        </div>

        <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Customer and Delivery Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-[#747B50]/20 p-6 sm:p-10 shadow-sm space-y-8">
            <div className="space-y-1">
              <h2 className="font-serif text-2xl text-[#102A22]">1. Delivery &amp; Contact Details</h2>
              <p className="text-xs text-[#595E57]">
                Provide your destination in Nigeria or internationally for express courier dispatch.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5 sm:col-span-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#102A22]">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={customer.fullName}
                  onChange={(e) => setCustomer({ ...customer, fullName: e.target.value })}
                  placeholder="e.g., Fatima Ibrahim"
                  className="w-full px-4 py-2.5 rounded-xl border border-[#747B50]/30 text-sm focus:outline-none focus:border-[#C6A66B] bg-[#F6F1E7]/30"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-[#102A22]">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={customer.email}
                  onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
                  placeholder="fatima@example.com"
                  className="w-full px-4 py-2.5 rounded-xl border border-[#747B50]/30 text-sm focus:outline-none focus:border-[#C6A66B] bg-[#F6F1E7]/30"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-[#102A22]">
                  Phone (WhatsApp) *
                </label>
                <input
                  type="tel"
                  required
                  value={customer.phone}
                  onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
                  placeholder="080 0000 0000"
                  className="w-full px-4 py-2.5 rounded-xl border border-[#747B50]/30 text-sm focus:outline-none focus:border-[#C6A66B] bg-[#F6F1E7]/30"
                />
              </div>

              <div className="space-y-1.5 sm:col-span-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#102A22]">
                  Physical Street Address *
                </label>
                <input
                  type="text"
                  required
                  value={customer.address}
                  onChange={(e) => setCustomer({ ...customer, address: e.target.value })}
                  placeholder="House number, Street name, Estate / Landmark"
                  className="w-full px-4 py-2.5 rounded-xl border border-[#747B50]/30 text-sm focus:outline-none focus:border-[#C6A66B] bg-[#F6F1E7]/30"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-[#102A22]">
                  City / Town *
                </label>
                <input
                  type="text"
                  required
                  value={customer.city}
                  onChange={(e) => setCustomer({ ...customer, city: e.target.value })}
                  placeholder="e.g., Wuse II, Abuja"
                  className="w-full px-4 py-2.5 rounded-xl border border-[#747B50]/30 text-sm focus:outline-none focus:border-[#C6A66B] bg-[#F6F1E7]/30"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-[#102A22]">
                  State / Region *
                </label>
                <select
                  value={customer.state}
                  onChange={(e) => setCustomer({ ...customer, state: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#747B50]/30 text-sm focus:outline-none focus:border-[#C6A66B] bg-[#F6F1E7]/30"
                >
                  <option value="FCT Abuja">FCT Abuja</option>
                  <option value="Lagos">Lagos State</option>
                  <option value="Niger">Niger State (Minna)</option>
                  <option value="Rivers">Rivers State (Port Harcourt)</option>
                  <option value="Kano">Kano State</option>
                  <option value="Kaduna">Kaduna State</option>
                  <option value="Oyo">Oyo State (Ibadan)</option>
                  <option value="Enugu">Enugu State</option>
                  <option value="Other Nigeria">Other State (Nigeria)</option>
                  <option value="International">International Export</option>
                </select>
              </div>
            </div>

            {/* Payment Method Selector */}
            <div className="space-y-3 pt-4 border-t border-[#747B50]/20">
              <h3 className="font-serif text-xl text-[#102A22]">2. Payment &amp; Confirmation Method</h3>

              <div className="space-y-2.5">
                <label
                  className={`flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition-all ${
                    customer.paymentMethod === 'whatsapp'
                      ? 'border-[#254C3C] bg-[#E8DFCD]/40'
                      : 'border-[#747B50]/20 hover:bg-[#F6F1E7]'
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    value="whatsapp"
                    checked={customer.paymentMethod === 'whatsapp'}
                    onChange={() => setCustomer({ ...customer, paymentMethod: 'whatsapp' })}
                    className="mt-1 text-[#254C3C] focus:ring-0"
                  />
                  <div>
                    <div className="text-xs font-bold text-[#102A22] flex items-center gap-1.5">
                      <PhoneCall className="w-4 h-4 text-[#254C3C]" />
                      <span>Direct Official WhatsApp Pro-Forma &amp; Bank Transfer (Recommended)</span>
                    </div>
                    <p className="text-[11px] text-[#595E57] mt-0.5">
                      Instant order verification with direct pro-forma invoice sent directly to our headquarters desk.
                    </p>
                  </div>
                </label>

                <label
                  className={`flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition-all ${
                    customer.paymentMethod === 'transfer'
                      ? 'border-[#254C3C] bg-[#E8DFCD]/40'
                      : 'border-[#747B50]/20 hover:bg-[#F6F1E7]'
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    value="transfer"
                    checked={customer.paymentMethod === 'transfer'}
                    onChange={() => setCustomer({ ...customer, paymentMethod: 'transfer' })}
                    className="mt-1 text-[#254C3C] focus:ring-0"
                  />
                  <div>
                    <div className="text-xs font-bold text-[#102A22] flex items-center gap-1.5">
                      <Building2 className="w-4 h-4 text-[#C6A66B]" />
                      <span>Corporate Bank Account Invoice (Ramys &amp; Daughters Ltd)</span>
                    </div>
                    <p className="text-[11px] text-[#595E57] mt-0.5">
                      Invoice details provided for commercial internet banking or teller transfer.
                    </p>
                  </div>
                </label>

                {/* Instagram DM option */}
                <label
                  className={`flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition-all ${
                    customer.paymentMethod === 'instagram'
                      ? 'border-[#833ab4] bg-purple-50/30'
                      : 'border-[#747B50]/20 hover:bg-[#F6F1E7]'
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    value="instagram"
                    checked={customer.paymentMethod === 'instagram'}
                    onChange={() => setCustomer({ ...customer, paymentMethod: 'instagram' })}
                    className="mt-1 focus:ring-0"
                  />
                  <div>
                    <div className="text-xs font-bold text-[#102A22] flex items-center gap-1.5">
                      <Instagram className="w-4 h-4 text-[#833ab4]" />
                      <span>Instagram DM (@{INSTAGRAM_HANDLE})</span>
                    </div>
                    <p className="text-[11px] text-[#595E57] mt-0.5">
                      After checkout, a pre-filled Instagram DM with your full order opens automatically.
                    </p>
                  </div>
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-full bg-[#102A22] hover:bg-[#254C3C] text-[#F6F1E7] font-semibold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-xl"
            >
              <span>Complete Order Confirmation ({formatPrice(grandTotal)})</span>
              <ArrowRight className="w-4 h-4 text-[#C6A66B]" />
            </button>
          </div>

          {/* Right Column: Order Summary */}
          <div className="lg:col-span-5 bg-white rounded-3xl border border-[#747B50]/20 p-6 sm:p-8 space-y-6 shadow-sm">
            <h3 className="font-serif text-2xl text-[#102A22] border-b border-[#E8DFCD] pb-3">
              Order Summary ({items.length} {items.length === 1 ? 'item' : 'items'})
            </h3>

            <div className="divide-y divide-[#E8DFCD] max-h-80 overflow-y-auto pr-1">
              {items.map((item) => (
                <div key={item.id} className="py-3 flex items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.product.images.primary}
                      alt={item.product.name}
                      className="w-12 h-14 object-cover rounded bg-[#E8DFCD] flex-shrink-0"
                    />
                    <div>
                      <div className="font-serif text-sm font-bold text-[#102A22]">
                        {item.product.name}
                      </div>
                      <div className="text-[11px] text-[#595E57]">
                        Size: {item.selectedSize} × {item.quantity}
                      </div>
                    </div>
                  </div>
                  <div className="font-bold text-[#102A22] flex-shrink-0">
                    {formatPrice(item.unitPrice * item.quantity)}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-[#E8DFCD] space-y-2 text-xs">
              <div className="flex justify-between text-[#595E57]">
                <span>Botanical Subtotal</span>
                <span className="font-semibold text-[#102A22]">{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between text-[#595E57]">
                <span className="flex items-center gap-1">
                  <Truck className="w-3.5 h-3.5" />
                  Express Delivery Fee
                </span>
                <span className="font-semibold text-[#102A22]">
                  {shippingFee === 0 ? 'FREE' : formatPrice(shippingFee)}
                </span>
              </div>
              <div className="flex justify-between text-base font-bold text-[#102A22] pt-2 border-t border-[#E8DFCD]">
                <span>Total Amount</span>
                <span className="font-serif text-xl text-[#254C3C]">{formatPrice(grandTotal)}</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#E8DFCD]/40 border border-[#747B50]/20 text-[11px] text-[#595E57] flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#254C3C] flex-shrink-0" />
              <span>Full dispatch insurance and tracking number issued upon handover.</span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
