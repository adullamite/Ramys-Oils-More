import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQPage: React.FC = () => {
  const faqs = [
    {
      q: 'What makes cold-pressed botanical oils superior to conventional store oils?',
      a: 'Most commercial oils are extracted using extreme industrial heat (up to 150°C) and toxic petrochemical solvents (hexane) to maximize yield. This denatures delicate vitamins and oxidizes restorative fatty acids. At Ramys & Daughters, we mechanically extract seeds strictly below 49°C (120°F) without any chemicals, ensuring the resulting oil remains bioactive and living.',
    },
    {
      q: 'Are your products registered and certified by regulatory agencies?',
      a: 'Yes. Our production facility and oil formulations are certified by the National Agency for Food and Drug Administration and Control (NAFDAC) in Nigeria, registered with the US FDA, and adhere to Standards Organisation of Nigeria (SON) quality benchmarks.',
    },
    {
      q: 'Why does my Baobab or Shea butter look cloudy or solidified in cool weather?',
      a: 'This is the signature hallmark of pure, unrefined botanicals! Because we do not chemically bleach or strip natural plant sterols, natural plant waxes gently crystalize below 20°C. Warming the dropper bottle between your palms for 30 seconds immediately restores golden fluidity.',
    },
    {
      q: 'How should I store cold-pressed oils to maintain shelf life?',
      a: 'Store your dropper bottles in a cool, dry place away from direct sunlight. Because our oils are bottled in UV-protective amber glass and packed with native natural vitamin E tocopherols, unopened shelf life is typically 18 to 24 months.',
    },
    {
      q: 'Do you offer bulk wholesale supplies for spas and cosmetic brands?',
      a: 'Yes. We supply 1 Litre dispensary bottles, cartons of 24 units, and commercial 25L to 200L drums with verified Certificate of Analysis (COA) documents. Please visit our Wholesale B2B page to submit your application.',
    },
    {
      q: 'What are your delivery timelines across Nigeria and internationally?',
      a: 'Orders within Abuja, Minna, and Lagos are delivered within 24 to 48 hours. Other Nigerian states arrive in 2 to 4 business days via insured express couriers. International DHL / air cargo dispatches take 5 to 7 business days.',
    },
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div className="py-12 sm:py-20 bg-[#F6F1E7] text-[#252923] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8DFCD] text-xs uppercase tracking-widest text-[#747B50] font-bold">
            <HelpCircle className="w-4 h-4 text-[#C6A66B]" />
            <span>Assurance &amp; Knowledge Base</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#102A22] font-normal">
            Frequently Asked Questions
          </h1>
          <p className="text-[#595E57] text-sm sm:text-base font-light max-w-xl mx-auto">
            Everything you need to know about our Nigerian botanical sourcing, cold-pressed science, and order fulfillment.
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-[#747B50]/20 p-6 sm:p-10 shadow-sm divide-y divide-[#E8DFCD]">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="py-5">
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between text-left gap-4 group"
                >
                  <span className="font-serif text-lg sm:text-xl text-[#102A22] font-medium group-hover:text-[#254C3C] transition-colors">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#747B50] transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? 'rotate-180 text-[#102A22]' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <p className="text-sm text-[#595E57] font-light leading-relaxed pt-3 animate-fadeIn">
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
