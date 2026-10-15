import React, { useState } from 'react';
import { Building2, Package, Layers, Sparkles, CheckCircle2, Send, PhoneCall, ShieldCheck } from 'lucide-react';
import { WholesaleEnquiry } from '../types';

export const WholesalePage: React.FC = () => {
  const [formData, setFormData] = useState<WholesaleEnquiry>({
    fullName: '',
    businessName: '',
    email: '',
    phone: '',
    businessType: 'Spa & Wellness',
    productsOfInterest: ['Pure Baobab Seed Oil'],
    estimatedVolume: 'Cartons (24-100 pcs)',
    deliveryLocation: '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const productOptions = [
    'Pure Baobab Seed Oil',
    'Pure Neem Seed Oil',
    'Pure Carrot Seed Oil',
    'Pure Raw African Shea Butter',
    'Pure Moringa Seed Oil',
    'Pure Black Seed Oil',
    'Pure Turmeric Botanical Powder',
  ];

  const handleProductToggle = (productName: string) => {
    setFormData((prev) => {
      const exists = prev.productsOfInterest.includes(productName);
      if (exists) {
        return {
          ...prev,
          productsOfInterest: prev.productsOfInterest.filter((p) => p !== productName),
        };
      } else {
        return {
          ...prev,
          productsOfInterest: [...prev.productsOfInterest, productName],
        };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.fullName && formData.email && formData.businessName) {
      setSubmitted(true);
    }
  };

  const generateWhatsAppLink = () => {
    const text = `*Ramy's Oils Wholesale Inquiry*%0A*Name:* ${formData.fullName}%0A*Business:* ${formData.businessName}%0A*Type:* ${formData.businessType}%0A*Volume:* ${formData.estimatedVolume}%0A*Products:* ${formData.productsOfInterest.join(', ')}%0A*Location:* ${formData.deliveryLocation}`;
    return `https://wa.me/2347088186782?text=${text}`;
  };

  return (
    <div className="py-12 sm:py-20 bg-[#F6F1E7] text-[#252923]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8DFCD] border border-[#747B50]/30 text-xs uppercase tracking-widest text-[#254C3C] font-bold">
            <Building2 className="w-3.5 h-3.5 text-[#C6A66B]" />
            <span>Commercial &amp; B2B Distribution</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl text-[#102A22] font-normal leading-tight">
            Wholesale, Bulk Supply &amp; Private Partnership
          </h1>

          <p className="text-[#595E57] text-base sm:text-lg font-light leading-relaxed">
            Supplying luxury spas, dermatological clinics, boutique retailers, and cosmetic formulators across Nigeria and globally with verified cold-pressed botanical oils.
          </p>
        </div>

        {/* 3 Commercial Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 rounded-3xl bg-white border border-[#747B50]/20 space-y-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-2xl bg-[#E8DFCD] flex items-center justify-center text-[#254C3C]">
              <Package className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl text-[#102A22]">Retail Stockist Cartons</h3>
            <p className="text-sm text-[#595E57] font-light leading-relaxed">
              Cartons of 24 units (50ml or 100ml dropper bottles) packaged with tamper-evident seals and barcode labeling ready for boutique shelves.
            </p>
            <div className="text-xs font-semibold text-[#747B50]">MOQ: 1 Carton (24 pcs)</div>
          </div>

          <div className="p-8 rounded-3xl bg-[#102A22] text-[#F6F1E7] space-y-4 shadow-xl border border-[#C6A66B]/30 relative">
            <div className="w-12 h-12 rounded-2xl bg-[#254C3C] flex items-center justify-center text-[#E0CFA4]">
              <Layers className="w-6 h-6" />
            </div>
            <div className="inline-block text-[10px] uppercase font-bold tracking-widest text-[#C6A66B] bg-[#091712] px-2.5 py-0.5 rounded-full">
              Popular with Spas
            </div>
            <h3 className="font-serif text-2xl text-[#F6F1E7]">1 Litre Dispensary</h3>
            <p className="text-sm text-[#F6F1E7]/70 font-light leading-relaxed">
              Specially bottled in high-density light-protective amber containers for professional massage backbars, esthetician treatments, and compounding.
            </p>
            <div className="text-xs font-semibold text-[#E0CFA4]">MOQ: 2 Litres</div>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-[#747B50]/20 space-y-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-2xl bg-[#E8DFCD] flex items-center justify-center text-[#254C3C]">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl text-[#102A22]">Bulk Drums (25L - 200L)</h3>
            <p className="text-sm text-[#595E57] font-light leading-relaxed">
              Industrial-grade food-grade drums for commercial cosmetic manufacturing, private label skincare formulation, and international export.
            </p>
            <div className="text-xs font-semibold text-[#747B50]">MOQ: 25 Litres</div>
          </div>
        </div>

        {/* Interactive B2B Form Section */}
        <div className="bg-white rounded-3xl border border-[#747B50]/20 p-8 sm:p-12 shadow-xl">
          {submitted ? (
            <div className="text-center py-12 space-y-6 max-w-lg mx-auto">
              <div className="w-16 h-16 rounded-full bg-[#E8DFCD] text-[#254C3C] flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10 text-[#254C3C]" />
              </div>
              <h2 className="font-serif text-3xl text-[#102A22]">Wholesale Dossier Received</h2>
              <p className="text-sm text-[#595E57] leading-relaxed">
                Thank you, <strong>{formData.fullName}</strong>. Our commercial team at Ramys &amp; Daughters has logged your request for <strong>{formData.businessName}</strong>.
              </p>
              <div className="p-4 rounded-xl bg-[#F6F1E7] border border-[#747B50]/30 text-xs text-[#102A22] space-y-1">
                <div>Estimated Volume: <strong>{formData.estimatedVolume}</strong></div>
                <div>Destination: <strong>{formData.deliveryLocation || 'Nigeria Nationwide'}</strong></div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={generateWhatsAppLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 rounded-full bg-[#254C3C] text-[#E0CFA4] hover:bg-[#102A22] font-semibold text-xs uppercase tracking-widest flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Connect with B2B WhatsApp Desk</span>
                </a>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-3 rounded-full border border-[#747B50]/40 text-[#102A22] text-xs font-semibold uppercase tracking-widest hover:bg-[#E8DFCD]"
                >
                  Submit Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="border-b border-[#747B50]/20 pb-4">
                <h3 className="font-serif text-2xl text-[#102A22]">Commercial Enquiry Application</h3>
                <p className="text-xs sm:text-sm text-[#595E57] mt-1">
                  Complete the fields below to receive our official B2B wholesale pricing schedule and Certificate of Analysis (COA).
                </p>
              </div>

              {/* Grid 1: Business & Contact Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#102A22]">
                    Contact Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g., Dr. Amina Bello"
                    className="w-full px-4 py-3 rounded-xl border border-[#747B50]/30 text-sm focus:outline-none focus:border-[#C6A66B] bg-[#F6F1E7]/40"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#102A22]">
                    Registered Business Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    placeholder="e.g., L’Eclat Wellness Spa Ltd"
                    className="w-full px-4 py-3 rounded-xl border border-[#747B50]/30 text-sm focus:outline-none focus:border-[#C6A66B] bg-[#F6F1E7]/40"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#102A22]">
                    Corporate Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="procurement@yourcompany.com"
                    className="w-full px-4 py-3 rounded-xl border border-[#747B50]/30 text-sm focus:outline-none focus:border-[#C6A66B] bg-[#F6F1E7]/40"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#102A22]">
                    Direct Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+234 800 000 0000"
                    className="w-full px-4 py-3 rounded-xl border border-[#747B50]/30 text-sm focus:outline-none focus:border-[#C6A66B] bg-[#F6F1E7]/40"
                  />
                </div>
              </div>

              {/* Grid 2: Business Classification & Volumes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#102A22]">
                    Industry Sector
                  </label>
                  <select
                    value={formData.businessType}
                    onChange={(e) => setFormData({ ...formData, businessType: e.target.value as any })}
                    className="w-full px-4 py-3 rounded-xl border border-[#747B50]/30 text-sm focus:outline-none focus:border-[#C6A66B] bg-[#F6F1E7]/40"
                  >
                    <option value="Spa & Wellness">Spa &amp; Wellness Clinic</option>
                    <option value="Cosmetic Formulator">Cosmetic Formulator / Chemist</option>
                    <option value="Retail Boutique">Retail Beauty Boutique / Pharmacy</option>
                    <option value="Bulk Distributor">Bulk Distributor / Wholesaler</option>
                    <option value="Other">Other Enterprise</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#102A22]">
                    Estimated Initial Order Volume
                  </label>
                  <select
                    value={formData.estimatedVolume}
                    onChange={(e) => setFormData({ ...formData, estimatedVolume: e.target.value as any })}
                    className="w-full px-4 py-3 rounded-xl border border-[#747B50]/30 text-sm focus:outline-none focus:border-[#C6A66B] bg-[#F6F1E7]/40"
                  >
                    <option value="Sample Kit">Sample Kit Evaluation (Trial sizes)</option>
                    <option value="Cartons (24-100 pcs)">Cartons (24 – 100 units)</option>
                    <option value="Bulk Drums (25L - 200L)">Bulk Drums (25L – 200L)</option>
                    <option value="Custom Export">Custom Export FCL / LCL</option>
                  </select>
                </div>
              </div>

              {/* Products of Interest Checkboxes */}
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-wider text-[#102A22] block">
                  Select Botanicals of Interest:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {productOptions.map((prod) => {
                    const isChecked = formData.productsOfInterest.includes(prod);
                    return (
                      <label
                        key={prod}
                        className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                          isChecked
                            ? 'bg-[#102A22] text-[#F6F1E7] border-[#102A22]'
                            : 'bg-[#F6F1E7]/50 border-[#747B50]/20 text-[#252923] hover:bg-[#E8DFCD]'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => handleProductToggle(prod)}
                          className="rounded text-[#C6A66B] focus:ring-0"
                        />
                        <span className="text-xs font-semibold">{prod}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Location & Message */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#102A22]">
                    Delivery Destination State / Country *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.deliveryLocation}
                    onChange={(e) => setFormData({ ...formData, deliveryLocation: e.target.value })}
                    placeholder="e.g., Abuja FCT, Nigeria"
                    className="w-full px-4 py-3 rounded-xl border border-[#747B50]/30 text-sm focus:outline-none focus:border-[#C6A66B] bg-[#F6F1E7]/40"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#102A22]">
                    Specific Requirements or Formulations (Optional)
                  </label>
                  <textarea
                    rows={1}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Private label requests, packaging specifics..."
                    className="w-full px-4 py-3 rounded-xl border border-[#747B50]/30 text-sm focus:outline-none focus:border-[#C6A66B] bg-[#F6F1E7]/40"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-[#595E57]">
                  <ShieldCheck className="w-4 h-4 text-[#254C3C]" />
                  <span>Confidential commercial NDA protection ensured</span>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#102A22] hover:bg-[#254C3C] text-[#F6F1E7] font-semibold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-xl hover:scale-105"
                >
                  <Send className="w-4 h-4 text-[#C6A66B]" />
                  <span>Transmit Wholesale Application</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
