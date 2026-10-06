import React, { useState } from 'react';
import { ArrowRight, Star, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { sfx } from '../utils/audio';

export const Hero = () => {
  const { addToCart, setIsCartOpen } = useCart();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();
    const x = ((clientX - left) / width - 0.5) * 16;
    const y = ((clientY - top) / height - 0.5) * 16;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  const quickOrderHero = () => {
    sfx.playChime();
    addToCart({
      id: "hero-omakase-nigiri",
      name: "Tuna & Salmon Nigiri Duo",
      price: 240.00,
      image: "/images/hero_sushi.jpg",
      category: "nigiri"
    });
    setIsCartOpen(true);
  };

  return (
    <section className="relative min-h-screen pt-32 pb-20 md:pt-40 md:pb-28 flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column Content */}
          <div className="lg:col-span-6 space-y-6 md:space-y-8 z-10 text-left">
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFEDE5] border border-[#FF5A2A]/20">
              <span className="w-2 h-2 rounded-full bg-[#FF5A2A] animate-ping" />
              <span className="font-script text-[#FF5A2A] text-lg font-bold tracking-wide">
                Authentic Tokyo Omakase
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#1A1A1A] leading-[1.08]">
              Enjoy <br />
              <span className="relative inline-block text-[#FF5A2A]">
                Delicious
                {/* Decorative underline brush */}
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-[#FF5A2A]/30"
                  viewBox="0 0 200 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 8C45 3 155 3 197 9"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <br />
              Sushi Food
            </h1>

            {/* Subtext Quote */}
            <blockquote className="text-gray-600 text-base md:text-lg font-light leading-relaxed max-w-lg border-l-2 border-[#FF5A2A]/40 pl-4 italic">
              "After A Good Dinner One Can Forgive Anybody, Even One's Own Relations."
            </blockquote>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={quickOrderHero}
                className="group relative inline-flex items-center gap-3 bg-[#FF5A2A] hover:bg-[#E85A2A] text-white px-8 py-4 rounded-full font-semibold text-sm shadow-orange-glow hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
              >
                <span>Order Now</span>
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <ArrowRight size={14} />
                </div>
              </button>

              <button
                onClick={() => {
                  sfx.playClick();
                  const el = document.getElementById('popular-dishes');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 bg-white hover:bg-[#FAF6EE] text-[#1A1A1A] border border-gray-200 px-7 py-4 rounded-full font-medium text-sm shadow-soft-card hover:border-gray-300 transition-all duration-300 cursor-pointer"
              >
                <span>View Menu</span>
              </button>
            </div>

            {/* Floating Seal / Circular Rotating Badge below CTA */}
            <div className="pt-4 flex items-center gap-6">
              <div className="relative w-32 h-32 flex items-center justify-center cursor-pointer group">
                {/* Rotating Circular Text SVG */}
                <svg
                  className="w-full h-full animate-spin-slow transition-transform duration-700"
                  viewBox="0 0 160 160"
                >
                  <defs>
                    <path
                      id="textCircle"
                      d="M 80, 80 m -62, 0 a 62,62 0 1,1 124,0 a 62,62 0 1,1 -124,0"
                    />
                  </defs>
                  <text
                    fontSize="10.8"
                    fontWeight="700"
                    fill="#1C1615"
                    letterSpacing="2.8"
                    className="uppercase select-none font-sans"
                  >
                    <textPath href="#textCircle" startOffset="0%">
                      SIMPLE ISN'T EASY * TO BE GOOD FOOD IS IMPORTANT *
                    </textPath>
                  </text>
                </svg>

                {/* Center Badge Core */}
                <div className="absolute w-14 h-14 rounded-full bg-gradient-to-br from-[#FF5A2A] to-[#E85A2A] flex items-center justify-center text-white shadow-orange-glow group-hover:scale-110 transition-transform">
                  <span className="text-xl">🍣</span>
                </div>
              </div>

              {/* Social Proof / Michelin Rating micro-pill */}
              <div className="hidden sm:block space-y-1">
                <div className="flex items-center gap-1 text-[#FF5A2A]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} fill="#FF5A2A" />
                  ))}
                  <span className="text-xs font-bold text-[#1A1A1A] ml-1.5">4.9 / 5.0</span>
                </div>
                <p className="text-xs text-gray-500">
                  From 2,400+ Michelin Omakase enthusiasts
                </p>
              </div>
            </div>

          </div>

          {/* Right Column Visual: High-detail 3D Isometric Render */}
          <div
            className="lg:col-span-6 relative flex items-center justify-center"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {/* Ambient Radial Backlight Glow */}
            <div className="absolute w-80 h-80 md:w-[26rem] md:h-[26rem] rounded-full bg-gradient-to-tr from-[#FF5A2A]/25 to-[#E85A2A]/15 blur-3xl -z-10" />

            {/* Dynamic Interactive Render Wrapper */}
            <div
              className="relative w-full max-w-lg transition-transform duration-300 ease-out"
              style={{
                transform: `perspective(1000px) rotateY(${mousePos.x}deg) rotateX(${-mousePos.y}deg)`,
              }}
            >
              {/* Slate Base Drop Shadow */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-4/5 h-12 bg-black/20 rounded-[50%] blur-xl -z-10" />

              {/* Main 3D Render Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-dark-glow border-4 border-white/80 bg-[#1C1615]">
                <img
                  src="/images/hero_sushi.jpg"
                  alt="3D isometric render of chopsticks reaching down toward fresh salmon and tuna nigiri served on a sleek dark tray"
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                />

                {/* Glass Tag Overlay */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl p-4 flex items-center justify-between text-white">
                  <div>
                    <div className="font-script text-[#FF5A2A] text-lg font-bold">
                      Master Chef's Cut
                    </div>
                    <div className="font-serif text-sm font-semibold tracking-wide">
                      Bluefin Otoro & Wild King Salmon
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-gray-300 block">Fresh Today</span>
                    <span className="font-serif font-bold text-[#FF5A2A] text-base">$240.00</span>
                  </div>
                </div>
              </div>

              {/* Floating Herb Garnishes overlapping the image */}
              <div className="absolute -top-6 -right-6 w-16 h-16 rounded-2xl bg-white/90 shadow-elevated-card backdrop-blur-sm p-2 flex flex-col items-center justify-center animate-float-gentle border border-orange-100">
                <span className="text-2xl">🌿</span>
                <span className="text-[9px] font-bold text-gray-500 uppercase tracking-tighter">Fresh Herb</span>
              </div>

              <div className="absolute -bottom-5 -left-5 bg-white/95 rounded-2xl shadow-elevated-card p-3 border border-orange-100 flex items-center gap-3 animate-float-gentle-reverse">
                <div className="w-8 h-8 rounded-full bg-[#FFEDE5] flex items-center justify-center text-[#FF5A2A]">
                  <Sparkles size={16} />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-[#1A1A1A]">100% Organic Rice</div>
                  <div className="text-[9px] text-gray-500">Koshihikari Grain</div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
