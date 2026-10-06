import React from 'react';
import { ArrowRight, Sparkles, Flame, CheckCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { sfx } from '../utils/audio';

export const NewlyAddedPromo = () => {
  const { addToCart, setIsCartOpen } = useCart();

  const handleOrderPromo = () => {
    sfx.playChime();
    addToCart({
      id: "sushi-shamurai-salmon-cheese",
      name: "Sushi Shamurai Salmon Cheese",
      price: 260.00,
      image: "/images/salmon_cheese.jpg",
      category: "maki"
    });
    setIsCartOpen(true);
  };

  return (
    <section id="promo-banner" className="py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Asymmetric Split Section Container */}
        <div className="bg-gradient-to-br from-[#FAF6EE] to-[#F5EEDC] rounded-[2.5rem] p-8 md:p-14 lg:p-16 border border-orange-200/50 shadow-soft-card relative overflow-hidden">
          
          {/* Subtle Ambient Radial Highlight */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF5A2A]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Content (Asymmetric 5 cols) */}
            <div className="lg:col-span-5 space-y-6 text-left z-10">
              {/* Tag in Orange Cursive Script */}
              <div className="inline-flex items-center gap-2">
                <Flame size={18} className="text-[#FF5A2A]" />
                <span className="font-script text-[#FF5A2A] text-2xl md:text-3xl font-bold">
                  Newly Added
                </span>
              </div>

              {/* Title */}
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A1A] leading-tight">
                Sushi Shamurai <br />
                <span className="text-[#FF5A2A]">Salmon Cheese</span>
              </h2>

              {/* Subtext Quote */}
              <blockquote className="text-gray-600 text-sm md:text-base font-light italic border-l-2 border-[#FF5A2A]/40 pl-3 leading-relaxed">
                "I Like Food, I Like Eating, And I Don't Want To Deprive Myself Of Good Food."
              </blockquote>

              {/* Ingredients / Feature list */}
              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-2 text-xs text-gray-700 font-medium">
                  <CheckCircle size={15} className="text-[#FF5A2A]" />
                  <span>Torched Norwegian Salmon with Hokkaido Cream Cheese</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-700 font-medium">
                  <CheckCircle size={15} className="text-[#FF5A2A]" />
                  <span>Drizzled with 20-Year Aged Kabayaki Glaze</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-700 font-medium">
                  <CheckCircle size={15} className="text-[#FF5A2A]" />
                  <span>Accompanied by Shizuoka Wasabi & Pink Pickled Gari</span>
                </div>
              </div>

              {/* Price & CTA Button */}
              <div className="pt-4 flex flex-wrap items-center gap-6">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-gray-400 block font-semibold">
                    Introductory Special
                  </span>
                  <span className="font-serif text-3xl font-bold text-[#1A1A1A]">
                    $260.00
                  </span>
                </div>

                <button
                  onClick={handleOrderPromo}
                  className="group inline-flex items-center gap-3 bg-[#FF5A2A] hover:bg-[#E85A2A] text-white px-8 py-4 rounded-full font-semibold text-sm shadow-orange-glow hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
                >
                  <span>Order Now</span>
                  <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                    <ArrowRight size={13} />
                  </div>
                </button>
              </div>

            </div>

            {/* Right Visual (Asymmetric 7 cols): Isometric Chopstick Dipping Render */}
            <div className="lg:col-span-7 relative flex items-center justify-center">
              <div className="relative group w-full max-w-lg">
                {/* 3D Visual Frame */}
                <div className="relative rounded-3xl overflow-hidden shadow-elevated-card border-4 border-white bg-[#1C1615]">
                  <img
                    src="/images/salmon_cheese.jpg"
                    alt="Isometric render of chopsticks dipping a sushi roll into a bowl of soy sauce, surrounded by pickled ginger (gari) and wasabi paste"
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Live Dip Splash Label */}
                  <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full text-white text-xs font-medium flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#FF5A2A] animate-ping" />
                    <span>Soy Sauce Dip Experience</span>
                  </div>
                </div>

                {/* Floating Wasabi & Gari Accent Pill */}
                <div className="absolute -top-4 -left-4 bg-white/95 rounded-2xl shadow-elevated-card px-4 py-3 border border-orange-100 flex items-center gap-3 animate-float-gentle">
                  <span className="text-xl">🥢</span>
                  <div>
                    <div className="text-xs font-bold text-[#1A1A1A]">Handmade Gari & Wasabi</div>
                    <div className="text-[10px] text-gray-500">Pickled in-house</div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
