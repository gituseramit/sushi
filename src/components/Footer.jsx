import React from 'react';
import { ArrowUp, MapPin, Clock, Phone } from 'lucide-react';
import { sfx } from '../utils/audio';

export const Footer = () => {
  const scrollToTop = () => {
    sfx.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#FAF6EE] text-[#1A1A1A] border-t border-[#EFE5CE] pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* 4 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-[#E8DFC9]">
          
          {/* Column 1 (Brand): SuShi logo + summary + social links */}
          <div className="lg:col-span-4 space-y-5 text-left">
            <div className="flex items-center gap-1.5 cursor-pointer" onClick={scrollToTop}>
              <span className="font-serif text-3xl font-bold tracking-tight text-[#1A1A1A]">
                S
              </span>
              <div className="w-6 h-6 rounded-full bg-[#1C1615] flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-[#FAF6EE] flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#FF5A2A]" />
                </div>
              </div>
              <span className="font-serif text-3xl font-bold tracking-tight text-[#1A1A1A]">
                Shi
              </span>
              <span className="text-[#FF5A2A] text-2xl font-serif ml-0.5">•</span>
            </div>

            <p className="text-gray-600 text-xs md:text-sm font-light leading-relaxed max-w-sm">
              SuShi brings timeless Edo-period sushi mastery into modern culinary luxury. Each piece is an intimate celebration of ocean seasonality and pristine craftsmanship.
            </p>

            {/* Social Links (Facebook, Twitter, Instagram) */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#facebook"
                onClick={(e) => { e.preventDefault(); sfx.playClick(); }}
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white border border-[#E8DFC9] flex items-center justify-center text-gray-700 hover:text-white hover:bg-[#FF5A2A] hover:border-[#FF5A2A] transition-all shadow-sm"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="#twitter"
                onClick={(e) => { e.preventDefault(); sfx.playClick(); }}
                aria-label="Twitter / X"
                className="w-9 h-9 rounded-full bg-white border border-[#E8DFC9] flex items-center justify-center text-gray-700 hover:text-white hover:bg-[#FF5A2A] hover:border-[#FF5A2A] transition-all shadow-sm"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="#instagram"
                onClick={(e) => { e.preventDefault(); sfx.playClick(); }}
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white border border-[#E8DFC9] flex items-center justify-center text-gray-700 hover:text-white hover:bg-[#FF5A2A] hover:border-[#FF5A2A] transition-all shadow-sm"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2 (Main Menu): Links for About, Menus, Events, Offer */}
          <div className="lg:col-span-2 space-y-4 text-left">
            <h4 className="font-serif text-base font-bold text-[#1A1A1A] tracking-wider uppercase">
              Main Menu
            </h4>
            <ul className="space-y-2.5 text-xs md:text-sm text-gray-600 font-light">
              <li><a href="#about-us" className="hover:text-[#FF5A2A] transition-colors">About</a></li>
              <li><a href="#popular-dishes" className="hover:text-[#FF5A2A] transition-colors">Menus</a></li>
              <li><a href="#events" onClick={(e) => e.preventDefault()} className="hover:text-[#FF5A2A] transition-colors">Events</a></li>
              <li><a href="#promo-banner" className="hover:text-[#FF5A2A] transition-colors">Offer</a></li>
            </ul>
          </div>

          {/* Column 3 (Information): Links for Contact, Order & Returns, Videos, Reservation */}
          <div className="lg:col-span-2 space-y-4 text-left">
            <h4 className="font-serif text-base font-bold text-[#1A1A1A] tracking-wider uppercase">
              Information
            </h4>
            <ul className="space-y-2.5 text-xs md:text-sm text-gray-600 font-light">
              <li><a href="#contact" onClick={(e) => e.preventDefault()} className="hover:text-[#FF5A2A] transition-colors">Contact</a></li>
              <li><a href="#returns" onClick={(e) => e.preventDefault()} className="hover:text-[#FF5A2A] transition-colors">Order & Returns</a></li>
              <li><a href="#videos" onClick={(e) => e.preventDefault()} className="hover:text-[#FF5A2A] transition-colors">Videos</a></li>
              <li><a href="#reservation" onClick={(e) => e.preventDefault()} className="hover:text-[#FF5A2A] transition-colors">Reservation</a></li>
            </ul>
          </div>

          {/* Column 4 (Address & Hours) */}
          <div className="lg:col-span-4 space-y-4 text-left">
            <h4 className="font-serif text-base font-bold text-[#1A1A1A] tracking-wider uppercase">
              Address & Hours
            </h4>
            <div className="space-y-3 text-xs md:text-sm text-gray-600 font-light">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-[#FF5A2A] flex-shrink-0 mt-0.5" />
                <span>2464 Royal Ln. Mesa, New Jersey 45453</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={18} className="text-[#FF5A2A] flex-shrink-0" />
                <span>Hours: 9:00AM - 5:00PM</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-[#FF5A2A] flex-shrink-0" />
                <span>(555) 392-8800</span>
              </div>
            </div>
            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#FF5A2A] hover:underline cursor-pointer"
              >
                <span>Back to Top</span>
                <ArrowUp size={13} />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright notice on left, trusted payment gateway logos on right */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            © 2026 <span className="font-semibold text-[#1A1A1A]">SuShi</span>. All rights reserved.
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[11px] text-gray-400 uppercase tracking-wider hidden md:inline">
              Payment Gateways:
            </span>
            <div className="bg-white border border-[#E8DFC9] px-2.5 py-1 rounded-md text-[11px] font-bold text-[#635BFF] shadow-xs">
              stripe
            </div>
            <div className="bg-white border border-[#E8DFC9] px-2.5 py-1 rounded-md text-[11px] font-bold text-[#1A1F71] shadow-xs">
              VISA
            </div>
            <div className="bg-white border border-[#E8DFC9] px-2.5 py-1 rounded-md text-[11px] font-bold text-[#EB001B] shadow-xs flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-[#EB001B] inline-block -mr-1.5 opacity-90" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#F79E1B] inline-block opacity-90" />
              <span className="ml-1 text-[10px] text-gray-700">Mastercard</span>
            </div>
            <div className="bg-white border border-[#E8DFC9] px-2.5 py-1 rounded-md text-[11px] font-bold text-[#1A1A1A] shadow-xs">
              Apple Pay
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
