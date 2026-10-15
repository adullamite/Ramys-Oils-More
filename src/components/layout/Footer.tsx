import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { FaInstagram as Instagram } from 'react-icons/fa';
import logo from '../../assets/logo-ramys.png';

const INSTAGRAM_HANDLE = 'ramysoilsandmore'; // ← update to real IG handle

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsletterSubscribed(true);
      setNewsletterEmail('');
    }
  };

  return (
    <footer className="bg-[#091712] text-[#F6F1E7] border-t border-[#C6A66B]/20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Newsletter & Brand Impact Band */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-16 border-b border-[#254C3C]">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C6A66B] font-semibold">
              Botanical Radiance Gazette
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#F6F1E7] leading-tight">
              Receive seasonal harvest dispatches, bioactive skincare rituals &amp; wholesale updates.
            </h3>
            <p className="text-[#F6F1E7]/70 text-sm max-w-lg">
              We send thoughtful formulations directly from our Minna facility. Zero spam, purely authentic botanical knowledge.
            </p>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-center">
            {newsletterSubscribed ? (
              <div className="p-4 rounded-xl bg-[#254C3C]/60 border border-[#C6A66B]/40 flex items-center gap-3 text-[#E0CFA4]">
                <CheckCircle2 className="w-5 h-5 text-[#C6A66B] flex-shrink-0" />
                <span className="text-sm">Thank you. You are subscribed to Ramy&apos;s Botanical Journal.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  required
                  className="flex-1 bg-[#102A22] border border-[#C6A66B]/30 rounded-full px-5 py-3.5 text-sm text-[#F6F1E7] placeholder-[#F6F1E7]/40 focus:outline-none focus:border-[#C6A66B] transition-colors"
                />
                <button
                  type="submit"
                  className="px-6 py-3.5 rounded-full bg-[#C6A66B] hover:bg-[#E0CFA4] text-[#102A22] font-semibold text-sm tracking-wider uppercase flex items-center justify-center gap-2 transition-colors shadow-lg"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
            <span className="text-[11px] text-[#F6F1E7]/40 mt-3">
              By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
            </span>
          </div>
        </div>

        {/* Main Footer Links Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 py-14">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-5">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#254C3C] border border-[#C6A66B]/40 p-1 flex items-center justify-center">
                <img
                  src={logo}
                  alt="Ramy's Logo"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl tracking-wider text-[#F6F1E7]">RAMY&apos;S</span>
                <span className="text-[9px] tracking-[0.2em] text-[#C6A66B] uppercase font-semibold">
                  Oils &amp; More • Nigeria
                </span>
              </div>
            </Link>

            <p className="text-[#F6F1E7]/70 text-xs sm:text-sm leading-relaxed max-w-sm">
              <strong className="text-[#F6F1E7]">Ramys &amp; Daughters Investment Limited</strong> is a certified Nigerian manufacturer bridging ancient African botanical wisdom with modern dermatological science. Pure, potent, cold-pressed oils harvested at peak vitality.
            </p>

            <div className="flex flex-col gap-2.5 text-xs text-[#E0CFA4]/90 pt-1">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C6A66B] flex-shrink-0 mt-0.5" />
                <span>Unit B2 Technology Incubation Center, off David Mark Road, Minna, Niger State, Nigeria</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C6A66B] flex-shrink-0" />
                <a href="tel:+2347088186782" className="hover:text-white transition-colors">
                  +234 (0) 708 818 6782
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C6A66B] flex-shrink-0" />
                <a href="mailto:rammysoilsandmore@gmail.com" className="hover:text-white transition-colors">
                  rammysoilsandmore@gmail.com
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={`https://www.instagram.com/${INSTAGRAM_HANDLE}/`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white text-xs font-semibold tracking-wide hover:opacity-90 transition-all shadow-md"
                aria-label="Follow Ramy's on Instagram"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>@{INSTAGRAM_HANDLE}</span>
              </a>
              <a
                href="https://wa.me/2347088186782"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366] text-white text-xs font-semibold tracking-wide hover:bg-[#1dba57] transition-all shadow-md"
                aria-label="Chat on WhatsApp"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Col 1: Shop Collections */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#C6A66B] font-semibold">
              Collections
            </h4>
            <ul className="space-y-2.5 text-sm text-[#F6F1E7]/75">
              <li>
                <Link to="/shop?category=Oils" className="hover:text-[#E0CFA4] transition-colors">
                  Cold-Pressed Facial Oils
                </Link>
              </li>
              <li>
                <Link to="/shop?category=Butters" className="hover:text-[#E0CFA4] transition-colors">
                  Raw African Shea Butters
                </Link>
              </li>
              <li>
                <Link to="/shop?category=Powders" className="hover:text-[#E0CFA4] transition-colors">
                  Botanical Micronized Powders
                </Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-[#E0CFA4] transition-colors">
                  Bestselling Formulations
                </Link>
              </li>
              <li>
                <Link to="/wholesale" className="hover:text-[#E0CFA4] transition-colors">
                  Bulk Dispensary (1L &amp; Drums)
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2: Brand & Story */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#C6A66B] font-semibold">
              Brand Story
            </h4>
            <ul className="space-y-2.5 text-sm text-[#F6F1E7]/75">
              <li>
                <Link to="/story" className="hover:text-[#E0CFA4] transition-colors">
                  Our Founding Heritage
                </Link>
              </li>
              <li>
                <Link to="/process" className="hover:text-[#E0CFA4] transition-colors">
                  Cold-Pressed Extraction (&lt; 49°C)
                </Link>
              </li>
              <li>
                <Link to="/story#sustainability" className="hover:text-[#E0CFA4] transition-colors">
                  Ethical Co-operative Sourcing
                </Link>
              </li>
              <li>
                <Link to="/wholesale" className="hover:text-[#E0CFA4] transition-colors">
                  Wholesale &amp; Private Label
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#E0CFA4] transition-colors">
                  Laboratory Visits &amp; Enquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Customer Care & Policies */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#C6A66B] font-semibold">
              Assurance &amp; Care
            </h4>
            <ul className="space-y-2.5 text-sm text-[#F6F1E7]/75">
              <li>
                <Link to="/faq" className="hover:text-[#E0CFA4] transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#E0CFA4] transition-colors">
                  Customer Assistance
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-[#E0CFA4] transition-colors">
                  Terms of Service &amp; Supply
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-[#E0CFA4] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <div className="flex items-center gap-1.5 text-xs text-[#C6A66B] pt-2">
                  <ShieldCheck className="w-4 h-4 text-[#C6A66B]" />
                  <span>NAFDAC &amp; FDA Certified</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 border-t border-[#254C3C] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F6F1E7]/50">
          <p>© {new Date().getFullYear()} Ramys &amp; Daughters Investment Limited. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a
              href={`https://www.instagram.com/${INSTAGRAM_HANDLE}/`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-[#F6F1E7]/50 hover:text-[#fcb045] transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
              <span>Instagram</span>
            </a>
            <span className="flex items-center gap-1.5 text-[#E0CFA4]/70">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C6A66B]" />
              Formulated &amp; Pressed in Nigeria
            </span>
            <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
