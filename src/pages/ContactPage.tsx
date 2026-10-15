import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, ShieldCheck } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Enquiry',
    message: '',
  });

  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.name && form.email && form.message) {
      setSent(true);
    }
  };

  return (
    <div className="py-12 sm:py-20 bg-[#F6F1E7] text-[#252923] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-[#747B50] font-bold">
            Customer Care &amp; Headquarters
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-[#102A22] font-normal">
            Contact Ramys &amp; Daughters
          </h1>
          <p className="text-[#595E57] text-sm sm:text-base font-light">
            We welcome inquiries from skincare enthusiasts, retail partners, and dermatological clinics.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Official Contact Dossier */}
          <div className="lg:col-span-5 bg-[#102A22] text-[#F6F1E7] rounded-3xl p-8 sm:p-10 shadow-xl border border-[#C6A66B]/30 space-y-8">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#C6A66B] font-semibold">
                Headquarters
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-white mt-1">
                Ramys &amp; Daughters Ltd
              </h2>
              <p className="text-xs text-[#F6F1E7]/70 mt-2 font-light leading-relaxed">
                Registered natural oils and skincare manufacturer bridging ancient botanical wisdom with modern dermatological science.
              </p>
            </div>

            <div className="space-y-6 text-sm text-[#F6F1E7]/90 font-light">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C6A66B] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Production Facility</div>
                  <div className="text-xs text-[#F6F1E7]/70">
                    Unit B2 Technology Incubation Center, off David Mark Road, Minna, Niger State, Nigeria (920101)
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#C6A66B] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Customer Desk &amp; WhatsApp</div>
                  <a href="tel:+2347088186782" className="text-xs text-[#E0CFA4] hover:underline">
                    +234 (0) 708 818 6782
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#C6A66B] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Direct Email</div>
                  <a href="mailto:rammysoilsandmore@gmail.com" className="text-xs text-[#E0CFA4] hover:underline">
                    rammysoilsandmore@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#C6A66B] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Operating Hours</div>
                  <div className="text-xs text-[#F6F1E7]/70">
                    Monday – Friday: 8:00 AM – 6:00 PM (WAT)<br />
                    Saturday: 9:00 AM – 3:00 PM
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#254C3C] text-xs text-[#E0CFA4] flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#C6A66B]" />
              <span>NAFDAC Certified • FDA Registered Facility</span>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-[#747B50]/20 p-8 sm:p-10 shadow-sm space-y-6">
            <h3 className="font-serif text-2xl text-[#102A22]">Send a Direct Message</h3>

            {sent ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#E8DFCD] text-[#254C3C] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8 text-[#254C3C]" />
                </div>
                <h4 className="font-serif text-2xl text-[#102A22]">Message Received</h4>
                <p className="text-sm text-[#595E57] max-w-sm mx-auto">
                  Thank you, <strong>{form.name}</strong>. A botanical specialist will review your note and respond within 24 business hours.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="px-6 py-2 rounded-full border border-[#747B50]/30 text-xs uppercase font-semibold text-[#102A22] hover:bg-[#E8DFCD]"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#102A22]">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="e.g., Zainab Adams"
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
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="zainab@example.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-[#747B50]/30 text-sm focus:outline-none focus:border-[#C6A66B] bg-[#F6F1E7]/30"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#102A22]">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+234 ..."
                      className="w-full px-4 py-2.5 rounded-xl border border-[#747B50]/30 text-sm focus:outline-none focus:border-[#C6A66B] bg-[#F6F1E7]/30"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#102A22]">
                      Enquiry Subject
                    </label>
                    <select
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#747B50]/30 text-sm focus:outline-none focus:border-[#C6A66B] bg-[#F6F1E7]/30"
                    >
                      <option value="General Enquiry">General Botanical Enquiry</option>
                      <option value="Product Formulation">Product Formulation Advice</option>
                      <option value="Existing Order">Existing Order Assistance</option>
                      <option value="Wholesale">Wholesale &amp; Bulk Partnership</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#102A22]">
                    Message Details *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="How can our clinical botanical team assist you today?"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#747B50]/30 text-sm focus:outline-none focus:border-[#C6A66B] bg-[#F6F1E7]/30"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#102A22] hover:bg-[#254C3C] text-[#F6F1E7] font-semibold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-md"
                >
                  <Send className="w-4 h-4 text-[#C6A66B]" />
                  <span>Transmit Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
