import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import logo from '../../assets/logo-ramys.png';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItems, setIsCartOpen } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Shop All', path: '/shop' },
    { name: 'Our Story', path: '/story' },
    { name: 'Extraction & Process', path: '/process' },
    { name: 'Wholesale B2B', path: '/wholesale' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#102A22]/95 backdrop-blur-md shadow-2xl py-3 border-b border-[#C6A66B]/20'
          : 'bg-[#102A22] py-4 sm:py-5 border-b border-[#C6A66B]/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Brand Logo & Wordmark */}
        <Link to="/" className="flex items-center gap-3 group focus:outline-none" aria-label="Ramy's Oils & More Home">
          <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden bg-[#254C3C] border border-[#C6A66B]/40 flex items-center justify-center p-1.5 shadow-md group-hover:border-[#C6A66B] transition-colors">
            <img
              src={logo}
              alt="Ramy's Logo"
              className="w-full h-full object-contain filter brightness-110"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <Sparkles className="w-5 h-5 text-[#C6A66B] absolute inset-0 m-auto pointer-events-none opacity-0 group-hover:opacity-20 transition-opacity" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg sm:text-2xl text-[#F6F1E7] tracking-wider leading-none group-hover:text-[#E0CFA4] transition-colors">
              RAMY&apos;S
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-[0.25em] text-[#C6A66B] font-semibold uppercase mt-0.5">
              OILS &amp; MORE • NIGERIA
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium tracking-wide" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`relative py-1 transition-colors ${
                  isActive
                    ? 'text-[#C6A66B] font-semibold'
                    : 'text-[#F6F1E7]/80 hover:text-[#F6F1E7]'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#C6A66B] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action Controls: Wholesale quick-action + Cart Bag */}
        <div className="flex items-center gap-3 sm:gap-4">
          <Link
            to="/wholesale"
            className="hidden md:inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#E0CFA4] hover:text-white px-3 py-1.5 rounded-full border border-[#C6A66B]/30 hover:border-[#C6A66B] transition-all bg-[#102A22]/60 hover:bg-[#254C3C]"
          >
            <span>Partner / Bulk</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#C6A66B]" />
          </Link>

          {/* Cart Trigger */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2.5 rounded-full bg-[#254C3C]/80 hover:bg-[#254C3C] text-[#F6F1E7] border border-[#C6A66B]/30 hover:border-[#C6A66B] transition-all shadow-md group focus:outline-none focus:ring-2 focus:ring-[#C6A66B]/50"
            aria-label={`View cart containing ${totalItems} items`}
          >
            <ShoppingBag className="w-5 h-5 group-hover:scale-105 transition-transform text-[#E0CFA4]" />
            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-[#C6A66B] text-[#102A22] text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-scale">
                {totalItems}
              </span>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#F6F1E7] hover:bg-[#254C3C] border border-[#C6A66B]/20 transition-colors focus:outline-none"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#C6A66B]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#102A22] border-b border-[#C6A66B]/30 px-6 py-6 transition-all animate-fadeIn">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-base font-serif tracking-wider py-2 border-b border-[#254C3C]/60 flex items-center justify-between ${
                    isActive ? 'text-[#C6A66B] font-bold' : 'text-[#F6F1E7]/90'
                  }`}
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#C6A66B]/60" />
                </Link>
              );
            })}
            <div className="pt-2 flex flex-col gap-3">
              <Link
                to="/shop"
                className="w-full text-center py-3 rounded-full bg-[#C6A66B] text-[#102A22] font-semibold text-sm tracking-wider uppercase shadow-md hover:bg-[#E0CFA4] transition-colors"
              >
                Shop Verified Collection
              </Link>
              <Link
                to="/wholesale"
                className="w-full text-center py-2.5 rounded-full border border-[#C6A66B]/50 text-[#E0CFA4] text-xs uppercase tracking-widest hover:bg-[#254C3C] transition-colors"
              >
                Wholesale Enquiry
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
