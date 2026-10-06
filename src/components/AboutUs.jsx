import React from 'react';
import { Play, Sparkles, HeartHandshake, ShieldCheck } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { sfx } from '../utils/audio';

export const AboutUs = () => {
  const { setIsStoryModalOpen } = useCart();

  const handleOpenStory = () => {
    sfx.playChime();
    setIsStoryModalOpen(true);
  };

  return (
    <section id="about-us" className="relative py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: 3D Rendering of Three Tall Maki Rolls with Caviar & Geometric Line-Art */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            {/* Ambient Warm Glow */}
            <div className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full bg-[#FF5A2A]/15 blur-3xl -z-10" />

            {/* Glowing Geometric Line-Art Paths encircling the image */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center -z-0">
              <svg className="w-[110%] h-[110%] opacity-40 animate-spin-slow" viewBox="0 0 400 400" fill="none">
                <polygon
                  points="200,20 370,105 370,295 200,380 30,295 30,105"
                  stroke="#FF5A2A"
                  strokeWidth="1.5"
                  strokeDasharray="6 6"
                />
                <circle cx="200" cy="200" r="160" stroke="#E85A2A" strokeWidth="1" strokeDasharray="3 3" />
                <rect
                  x="60"
                  y="60"
                  width="280"
                  height="280"
                  stroke="#FF5A2A"
                  strokeWidth="1"
                  className="rotate-45 origin-center"
                />
              </svg>
            </div>

            {/* Main Visual Container */}
            <div className="relative group max-w-md w-full">
              {/* Outer Card / Marble Slab Visual */}
              <div className="relative rounded-3xl overflow-hidden shadow-dark-glow border-4 border-white bg-[#1C1615]">
                <img
                  src="/images/about_maki.jpg"
                  alt="3D rendering of three tall maki rolls topped with red caviar/tobiko, encircled by thin geometric line-art paths"
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                {/* Floating Tobiko Badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-md flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5A2A] animate-ping" />
                  <span className="text-xs font-bold text-[#1C1615] tracking-wide">Wild Toyosu Tobiko</span>
                </div>
              </div>

              {/* Floating Pill on bottom right */}
              <div className="absolute -bottom-6 -right-4 bg-white rounded-2xl shadow-elevated-card p-4 border border-orange-100/80 flex items-center gap-3 animate-float-gentle">
                <div className="w-10 h-10 rounded-full bg-[#FFEDE5] flex items-center justify-center text-[#FF5A2A]">
                  <Sparkles size={20} />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#1A1A1A]">Edomae Artistry</div>
                  <div className="text-[10px] text-gray-500">Over 300 years of tradition</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-6 space-y-6 md:space-y-8 text-left">
            {/* Tagline in Orange Cursive Script */}
            <div className="flex items-center gap-2">
              <span className="font-script text-[#FF5A2A] text-2xl md:text-3xl font-bold">
                About us
              </span>
              <div className="w-12 h-0.5 bg-[#FF5A2A]/40 rounded-full" />
            </div>

            {/* Main Title */}
            <h2 className="font-serif text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] tracking-tight leading-[1.15]">
              We Provide Healthy food 🍣
            </h2>

            {/* Body Copy */}
            <p className="text-gray-600 text-base md:text-lg font-light leading-relaxed">
              "Food For Us Comes From Our Relatives, Whether They Have Wings Or Fins Or Roots. That Is How We Consider Food. Food Has A Culture, It Has A History, It Has A Story, It Has Relationships."
            </p>

            {/* Philosophy highlights */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-gray-100 shadow-soft-card">
                <div className="w-9 h-9 rounded-xl bg-[#FFEDE5] flex items-center justify-center text-[#FF5A2A]">
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#1A1A1A]">Daily Fresh Airway</div>
                  <div className="text-[10px] text-gray-500">From Tokyo Bay Market</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-gray-100 shadow-soft-card">
                <div className="w-9 h-9 rounded-xl bg-[#FFEDE5] flex items-center justify-center text-[#FF5A2A]">
                  <HeartHandshake size={18} />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#1A1A1A]">Omotenashi Spirit</div>
                  <div className="text-[10px] text-gray-500">Unconditional Hospitality</div>
                </div>
              </div>
            </div>

            {/* CTA: Circular orange play button followed by text 'Explore More' */}
            <div className="pt-4 flex items-center gap-5">
              <button
                onClick={handleOpenStory}
                className="group flex items-center gap-4 cursor-pointer focus:outline-none"
              >
                <div className="relative w-14 h-14 rounded-full bg-[#FF5A2A] hover:bg-[#E85A2A] text-white flex items-center justify-center shadow-orange-glow group-hover:scale-110 active:scale-95 transition-all duration-300">
                  <Play size={20} className="fill-white translate-x-0.5" />
                  {/* Subtle pulsing wave */}
                  <span className="absolute inset-0 rounded-full border border-[#FF5A2A] animate-ping opacity-40" />
                </div>
                <div className="text-left">
                  <span className="font-serif text-lg font-bold text-[#1A1A1A] group-hover:text-[#FF5A2A] transition-colors block">
                    Explore More
                  </span>
                  <span className="text-xs text-gray-500 font-light block">
                    Watch our master chef craft documentary
                  </span>
                </div>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
