import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ShieldCheck, FileText, Lock, Truck, RefreshCw, ChevronRight } from 'lucide-react';

export const LegalPage: React.FC = () => {
  const { pathname } = useLocation();
  const [activeTab, setActiveTab] = useState<'terms' | 'privacy' | 'shipping' | 'returns'>('terms');

  useEffect(() => {
    if (pathname.includes('privacy')) {
      setActiveTab('privacy');
    } else if (pathname.includes('shipping')) {
      setActiveTab('shipping');
    } else if (pathname.includes('returns')) {
      setActiveTab('returns');
    } else {
      setActiveTab('terms');
    }
  }, [pathname]);

  return (
    <div className="bg-[#F6F1E7] min-h-screen pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Breadcrumb */}
        <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#747B50] mb-4">
          <Link to="/" className="hover:text-[#254C3C]">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#254C3C] font-semibold">Governance &amp; Policies</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl text-[#102A22] tracking-tight mb-4">
          Consumer Trust &amp; Legal Framework
        </h1>
        <p className="text-sm sm:text-base text-[#595E57] max-w-2xl mb-10 leading-relaxed">
          Ramys &amp; Daughters Investment Limited upholds uncompromising standards in organic cosmetic compliance, consumer data privacy, cold-chain transport integrity, and fair trade botanical sourcing.
        </p>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 border-b border-[#254C3C]/15 pb-4 mb-8">
          <button
            type="button"
            onClick={() => setActiveTab('terms')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
              activeTab === 'terms'
                ? 'bg-[#102A22] text-[#E0CFA4] shadow-md'
                : 'bg-white/80 text-[#595E57] hover:bg-white hover:text-[#102A22]'
            }`}
          >
            <FileText className="w-4 h-4" />
            Terms of Supply
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('privacy')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
              activeTab === 'privacy'
                ? 'bg-[#102A22] text-[#E0CFA4] shadow-md'
                : 'bg-white/80 text-[#595E57] hover:bg-white hover:text-[#102A22]'
            }`}
          >
            <Lock className="w-4 h-4" />
            Privacy &amp; Data
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('shipping')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
              activeTab === 'shipping'
                ? 'bg-[#102A22] text-[#E0CFA4] shadow-md'
                : 'bg-white/80 text-[#595E57] hover:bg-white hover:text-[#102A22]'
            }`}
          >
            <Truck className="w-4 h-4" />
            Cold-Chain Shipping
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('returns')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
              activeTab === 'returns'
                ? 'bg-[#102A22] text-[#E0CFA4] shadow-md'
                : 'bg-white/80 text-[#595E57] hover:bg-white hover:text-[#102A22]'
            }`}
          >
            <RefreshCw className="w-4 h-4" />
            Guarantee &amp; Returns
          </button>
        </div>

        {/* Content Box */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#254C3C]/10 shadow-sm leading-relaxed text-[#252923] text-sm sm:text-base space-y-6">
          
          {activeTab === 'terms' && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-[#254C3C]/10">
                <ShieldCheck className="w-6 h-6 text-[#C6A66B]" />
                <h2 className="font-serif text-2xl text-[#102A22]">Terms &amp; Conditions of Commercial Sale</h2>
              </div>
              <p>
                Welcome to Ramy&apos;s Oils &amp; More. These Terms and Conditions govern your purchase of natural cold-pressed botanical oils, raw cosmetic butters, and therapeutic powders from Ramys &amp; Daughters Investment Limited (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;).
              </p>
              
              <h3 className="font-serif text-xl text-[#102A22] pt-2">1. Cosmetic &amp; Topical Grade Usage</h3>
              <p>
                Our pure botanical oils (such as Baobab, Neem, Carrot, Turmeric) and African Shea Butters are 100% natural, unadulterated cold-press extractions intended for cosmetic, dermatological, and topical hair/skin nourishment. While botanical oils are pure plant extractions, customers with known nut or seed allergies should perform a 24-hour patch test prior to full topical application.
              </p>

              <h3 className="font-serif text-xl text-[#102A22] pt-2">2. Pricing, Invoicing &amp; Currencies</h3>
              <p>
                All retail consumer orders are quoted and settled in Nigerian Naira (₦). For wholesale transactions, export consignments, or bulk barrel orders, pro-forma invoices may be negotiated in USD or NGN with bank transfer or verified card settlement before cold-storage dispatch.
              </p>

              <h3 className="font-serif text-xl text-[#102A22] pt-2">3. Product Purity &amp; Batch Variations</h3>
              <p>
                Because our oils undergo raw mechanical extraction under 49°C without chemical bleaching, deodorizing, or synthetic stabilizing agents, slight natural variations in golden amber hue, aroma intensity, and cold precipitation (e.g. cloudiness in cold weather) are authentic hallmarks of unrefined botanical purity.
              </p>

              <h3 className="font-serif text-xl text-[#102A22] pt-2">4. Regulatory Registration</h3>
              <p>
                All finished formulations and facilities are governed under the National Agency for Food and Drug Administration and Control (NAFDAC) protocols and FDA Facility Registration compliance standards.
              </p>
            </div>
          )}

          {activeTab === 'privacy' && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-[#254C3C]/10">
                <Lock className="w-6 h-6 text-[#C6A66B]" />
                <h2 className="font-serif text-2xl text-[#102A22]">Privacy Policy &amp; Data Protection</h2>
              </div>
              <p>
                We respect your personal privacy. We collect only the information necessary to fulfill your botanical oil delivery, generate dispatch manifests, and communicate shipment tracking.
              </p>

              <h3 className="font-serif text-xl text-[#102A22] pt-2">1. Information We Collect</h3>
              <p>
                When ordering on our site or via our official WhatsApp VIP Concierge (+234 708 818 6782), we record:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#595E57]">
                <li>Full Name and recipient contact phone numbers for dispatch couriers.</li>
                <li>Physical delivery address, city, state, and postal coordinates.</li>
                <li>Email address for order confirmations and digital batch analysis certificates.</li>
                <li>Wholesale corporate details for bulk B2B commercial licensing.</li>
              </ul>

              <h3 className="font-serif text-xl text-[#102A22] pt-2">2. Payment Security</h3>
              <p>
                We do not store complete debit/credit card numbers on our servers. All digital payments are processed through PCI-DSS Level 1 compliant gateway partners or direct interbank RTGS transfers.
              </p>

              <h3 className="font-serif text-xl text-[#102A22] pt-2">3. Third-Party Sharing</h3>
              <p>
                We never sell, rent, or trade your contact or order details to advertising brokers. Data is shared exclusively with accredited logistics carriers (e.g. GIG Logistics, DHL Express) solely to execute delivery.
              </p>
            </div>
          )}

          {activeTab === 'shipping' && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-[#254C3C]/10">
                <Truck className="w-6 h-6 text-[#C6A66B]" />
                <h2 className="font-serif text-2xl text-[#102A22]">Shipping &amp; Cold-Chain Handling Policy</h2>
              </div>
              <p>
                To preserve delicate bioactive botanical fatty acids and antioxidants, every order is hand-inspected and sealed in UV-protective amber glass or food-grade bulk containers at our facility in Minna, Niger State.
              </p>

              <h3 className="font-serif text-xl text-[#102A22] pt-2">1. Delivery Timelines</h3>
              <ul className="list-disc pl-6 space-y-2 text-[#595E57]">
                <li><strong>Abuja / FCT &amp; Niger State:</strong> 24 to 48 business hours.</li>
                <li><strong>Lagos &amp; South-West Hubs:</strong> 2 to 3 business days via priority air/road parcel.</li>
                <li><strong>Port Harcourt, Kano, Kaduna &amp; Nationwide:</strong> 3 to 5 business days.</li>
                <li><strong>International Export:</strong> 5 to 9 business days via DHL Express with phytosanitary clearance.</li>
              </ul>

              <h3 className="font-serif text-xl text-[#102A22] pt-2">2. Amber Glass Protection &amp; Shock Packaging</h3>
              <p>
                Each 100ml dropper bottle is wrapped in biodegradable honeycomb shock cushions and nested in rigid thermal insulation to shield bioactive oils from transit temperature spikes and kinetic impact.
              </p>
            </div>
          )}

          {activeTab === 'returns' && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-[#254C3C]/10">
                <RefreshCw className="w-6 h-6 text-[#C6A66B]" />
                <h2 className="font-serif text-2xl text-[#102A22]">Purity Guarantee &amp; Return Policy</h2>
              </div>
              <p>
                We stand behind the uncompromising purity of every botanical oil extracted under our sub-49°C cold-press protocol.
              </p>

              <h3 className="font-serif text-xl text-[#102A22] pt-2">1. Transit Damage or Broken Seals</h3>
              <p>
                If a bottle arrives with a broken tamper-evident neck band or cracked glass pipette, notify our support team within 48 hours of courier delivery with a photo of the package. We will immediately dispatch a fresh replacement bottle at zero additional shipping cost.
              </p>

              <h3 className="font-serif text-xl text-[#102A22] pt-2">2. 14-Day Botanical Authenticity Assurance</h3>
              <p>
                If our oils fail to meet the purity and therapeutic standards stated in our analytical monographs, contact our Minna quality laboratory at <a href="mailto:rammysoilsandmore@gmail.com" className="text-[#254C3C] underline font-semibold">rammysoilsandmore@gmail.com</a> or via phone at <a href="tel:+2347088186782" className="text-[#254C3C] underline font-semibold">+234 708 818 6782</a> for prompt resolution.
              </p>
            </div>
          )}

        </div>

        {/* Support Box */}
        <div className="mt-8 p-6 rounded-2xl bg-[#254C3C]/10 border border-[#254C3C]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-serif text-lg text-[#102A22]">Have specific regulatory or wholesale compliance inquiries?</h4>
            <p className="text-xs text-[#595E57] mt-1">Our compliance team at the Minna Incubation Center is available Monday &ndash; Friday.</p>
          </div>
          <Link
            to="/contact"
            className="px-6 py-2.5 rounded-full bg-[#102A22] text-[#E0CFA4] text-xs font-semibold uppercase tracking-wider hover:bg-[#254C3C] transition-all flex-shrink-0"
          >
            Contact Governance Team
          </Link>
        </div>

      </div>
    </div>
  );
};
