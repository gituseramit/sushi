import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, Volume2, VolumeX, Menu, X, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { sfx } from '../utils/audio';

export const Navbar = () => {
  const {
    cartTotal,
    totalItemCount,
    setIsCartOpen,
    setIsOrderTrackOpen,
    searchQuery,
    setSearchQuery,
    soundEnabled,
    setSoundEnabled
  } = useCart();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    sfx.playClick();
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav shadow-soft-card py-3 border-b border-[#FAF6EE]/80'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between gap-4">
        {/* Logo (Left): SuShi with sushi roll icon replacing 'u' */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-1.5 group select-none cursor-pointer"
        >
          <span className="font-serif text-3xl font-bold tracking-tight text-[#1A1A1A] group-hover:text-[#FF5A2A] transition-colors">
            S
          </span>
          {/* Custom Minimalist Sushi Roll Vector Graphic */}
          <div className="relative w-7 h-7 flex items-center justify-center transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
            {/* Outer seaweed nori */}
            <div className="w-7 h-7 rounded-full bg-[#1C1615] flex items-center justify-center shadow-sm">
              {/* Rice ring */}
              <div className="w-5 h-5 rounded-full bg-[#FAF6EE] flex items-center justify-center">
                {/* Salmon center */}
                <div className="w-3 h-3 rounded-full bg-[#FF5A2A] flex items-center justify-center">
                  {/* Cucumber / garnish dot */}
                  <div className="w-1 h-1 rounded-full bg-[#34D399]" />
                </div>
              </div>
            </div>
          </div>
          <span className="font-serif text-3xl font-bold tracking-tight text-[#1A1A1A] group-hover:text-[#FF5A2A] transition-colors">
            Shi
          </span>
          <span className="text-[#FF5A2A] text-2xl font-serif ml-0.5">•</span>
        </a>

        {/* Navigation Links (Center): Menu, Offer, Order Track with smooth hover underline */}
        <nav className="hidden md:flex items-center space-x-10 text-sm font-medium text-[#1A1A1A]">
          <button
            onClick={() => scrollToSection('popular-dishes')}
            className="relative py-1 group hover:text-[#FF5A2A] transition-colors"
          >
            <span>Menu</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF5A2A] rounded-full transition-all duration-300 group-hover:w-full" />
          </button>

          <button
            onClick={() => scrollToSection('promo-banner')}
            className="relative py-1 group hover:text-[#FF5A2A] transition-colors flex items-center gap-1"
          >
            <span>Offer</span>
            <span className="bg-[#FFEDE5] text-[#FF5A2A] text-[10px] font-bold px-1.5 py-0.5 rounded-full uppercase tracking-wider">
              Hot
            </span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF5A2A] rounded-full transition-all duration-300 group-hover:w-full" />
          </button>

          <button
            onClick={() => {
              sfx.playPop();
              setIsOrderTrackOpen(true);
            }}
            className="relative py-1 group hover:text-[#FF5A2A] transition-colors flex items-center gap-1"
          >
            <span>Order Track</span>
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF5A2A] rounded-full transition-all duration-300 group-hover:w-full" />
          </button>

          <button
            onClick={() => scrollToSection('about-us')}
            className="relative py-1 group hover:text-[#FF5A2A] transition-colors"
          >
            <span>About</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF5A2A] rounded-full transition-all duration-300 group-hover:w-full" />
          </button>
        </nav>

        {/* Search Bar & Action Utilities (Right) */}
        <div className="flex items-center gap-3">
          {/* Sound Effect Toggle */}
          <button
            onClick={() => {
              setSoundEnabled(!soundEnabled);
              sfx.playClick();
            }}
            title={soundEnabled ? "Mute audio haptics" : "Enable culinary audio sounds"}
            className="hidden sm:flex items-center justify-center w-9 h-9 rounded-full bg-white/80 border border-gray-200/80 text-gray-600 hover:text-[#FF5A2A] hover:border-[#FF5A2A]/40 transition-all shadow-sm"
          >
            {soundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
          </button>

          {/* Pill-shaped Search Input */}
          <div
            className={`relative hidden lg:flex items-center transition-all duration-300 ${
              searchFocused ? 'w-56' : 'w-44'
            }`}
          >
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
              className="w-full bg-white/90 border border-gray-200/80 rounded-full pl-9 pr-4 py-2 text-xs font-normal text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF5A2A]/20 focus:border-[#FF5A2A] shadow-sm transition-all"
            />
            <Search
              size={15}
              className="absolute left-3 text-gray-400 pointer-events-none"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 text-xs text-gray-400 hover:text-gray-600"
              >
                ×
              </button>
            )}
          </div>

          {/* Shopping Cart Widget */}
          <button
            onClick={() => {
              sfx.playPop();
              setIsCartOpen(true);
            }}
            className="flex items-center gap-2.5 bg-white border border-gray-200/90 rounded-full px-4 py-2 shadow-soft-card hover:shadow-orange-glow hover:border-[#FF5A2A]/50 transition-all duration-300 group cursor-pointer"
          >
            <div className="relative">
              <ShoppingBag
                size={18}
                className="text-[#1A1A1A] group-hover:text-[#FF5A2A] transition-colors"
              />
              {totalItemCount > 0 && (
                <span className="absolute -top-1.5 -right-2 bg-[#FF5A2A] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-bounce">
                  {totalItemCount}
                </span>
              )}
            </div>
            <div className="text-xs font-medium text-[#1A1A1A] whitespace-nowrap">
              <span className="hidden sm:inline text-gray-500 font-normal">Your Cart </span>
              <span className="font-bold text-[#1A1A1A] group-hover:text-[#FF5A2A] transition-colors">
                ${cartTotal}
              </span>
            </div>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full text-gray-700 hover:bg-black/5"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-b border-gray-200 px-6 py-5 shadow-lg space-y-4">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search sushi or rolls..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#FAF6EE] rounded-full pl-9 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF5A2A]"
            />
            <Search size={16} className="absolute left-3 top-2.5 text-gray-400" />
          </div>

          <div className="flex flex-col space-y-3 font-medium text-sm">
            <button
              onClick={() => scrollToSection('popular-dishes')}
              className="text-left py-2 border-b border-gray-100 flex items-center justify-between"
            >
              <span>Popular Dishes</span>
              <ArrowRight size={16} className="text-gray-400" />
            </button>
            <button
              onClick={() => scrollToSection('promo-banner')}
              className="text-left py-2 border-b border-gray-100 flex items-center justify-between"
            >
              <span>Newly Added Promo</span>
              <span className="bg-[#FFEDE5] text-[#FF5A2A] text-xs px-2 py-0.5 rounded-full">New</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsOrderTrackOpen(true);
              }}
              className="text-left py-2 border-b border-gray-100 flex items-center justify-between"
            >
              <span>Track Active Order</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
            </button>
            <button
              onClick={() => scrollToSection('about-us')}
              className="text-left py-2 flex items-center justify-between"
            >
              <span>About SuShi</span>
              <ArrowRight size={16} className="text-gray-400" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
