import React, { useState } from 'react';
import { ShoppingBag, Star, Sparkles, Filter, Check } from 'lucide-react';
import { SUSHI_MENU, CATEGORIES } from '../data/sushiData';
import { useCart } from '../context/CartContext';
import { sfx } from '../utils/audio';

export const PopularDishes = () => {
  const { addToCart, searchQuery } = useCart();
  const [activeCategory, setActiveCategory] = useState('all');
  const [addedAnimationId, setAddedAnimationId] = useState(null);

  const handleAddToCart = (dish) => {
    sfx.playChime();
    addToCart(dish);
    setAddedAnimationId(dish.id);
    setTimeout(() => {
      setAddedAnimationId(null);
    }, 1200);
  };

  const filteredDishes = SUSHI_MENU.filter((item) => {
    const matchesCategory =
      activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch =
      !searchQuery ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="popular-dishes" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <span className="font-script text-[#FF5A2A] text-2xl font-bold tracking-wide">
            Chef's Recommendations
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-5xl font-bold text-[#1A1A1A] tracking-tight">
            Popular Dishes
          </h2>
          <div className="w-16 h-1 bg-[#FF5A2A] mx-auto rounded-full mt-2" />
          <p className="text-gray-500 text-sm md:text-base font-light pt-2">
            Handcrafted daily with pristine seasonal fish delivered fresh by air from Tokyo's Toyosu Market.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  sfx.playClick();
                  setActiveCategory(cat.id);
                }}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#1C1615] text-white shadow-soft-card scale-105'
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-[#FF5A2A]/40 hover:text-[#FF5A2A]'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* 3-Column Interactive Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDishes.map((dish, index) => {
            const isAdded = addedAnimationId === dish.id;

            return (
              <div
                key={dish.id}
                className="group relative bg-white rounded-3xl p-6 shadow-soft-card hover:shadow-elevated-card transition-all duration-300 border border-gray-100 flex flex-col justify-between"
                style={{
                  transform: 'translateY(0px)',
                  transition: 'transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0px)';
                }}
              >
                {/* Top Badge & Rating */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="bg-[#FAF6EE] text-[#FF5A2A] text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {dish.tags[0] || 'Omakase'}
                  </span>
                  <div className="flex items-center gap-1 bg-[#FAF6EE] px-2.5 py-1 rounded-full">
                    <Star size={13} className="text-[#FF5A2A] fill-[#FF5A2A]" />
                    <span className="text-xs font-bold text-[#1A1A1A]">{dish.rating}</span>
                    <span className="text-[10px] text-gray-400">({dish.reviews})</span>
                  </div>
                </div>

                {/* 3D Isometric Food Render Thumbnail */}
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-[#FAF6EE] mb-6 flex items-center justify-center p-2 group-hover:scale-[1.02] transition-transform duration-500">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover rounded-xl shadow-sm"
                  />
                  {/* Subtle radial sheen */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Pieces info pill */}
                  <span className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md text-white text-[11px] font-medium px-2.5 py-1 rounded-lg">
                    {dish.pieces}
                  </span>
                </div>

                {/* Content Block */}
                <div className="space-y-2 flex-1">
                  <h3 className="font-serif text-xl font-bold text-[#1A1A1A] group-hover:text-[#FF5A2A] transition-colors">
                    {dish.name}
                  </h3>
                  <div className="text-[11px] text-gray-400 font-sans tracking-wide">
                    {dish.japanese}
                  </div>
                  <p className="text-gray-500 text-xs font-light leading-relaxed line-clamp-2">
                    {dish.shortDesc || dish.description}
                  </p>
                </div>

                {/* Price & Right-Aligned Circular Shopping Bag Button */}
                <div className="pt-6 mt-4 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-gray-400 block font-semibold">
                      Price
                    </span>
                    <span className="font-serif text-2xl font-bold text-[#1A1A1A]">
                      ${dish.price.toFixed(2)}
                    </span>
                  </div>

                  {/* Circular Add-To-Cart Bag Button */}
                  <button
                    onClick={() => handleAddToCart(dish)}
                    aria-label={`Add ${dish.name} to cart`}
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-soft-card cursor-pointer ${
                      isAdded
                        ? 'bg-emerald-500 text-white scale-110 shadow-lg'
                        : 'bg-[#FAF6EE] text-[#1A1A1A] hover:bg-[#FF5A2A] hover:text-white hover:shadow-orange-glow hover:scale-110 active:scale-95'
                    }`}
                  >
                    {isAdded ? (
                      <Check size={20} className="animate-bounce" />
                    ) : (
                      <ShoppingBag size={18} />
                    )}
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Empty Search Fallback */}
        {filteredDishes.length === 0 && (
          <div className="text-center py-16 bg-white rounded-3xl border border-gray-100 p-8 max-w-md mx-auto shadow-soft-card">
            <span className="text-4xl">🍣</span>
            <h3 className="font-serif text-lg font-bold text-[#1A1A1A] mt-3">
              No sushi match found
            </h3>
            <p className="text-xs text-gray-500 mt-1">
              Try searching for "Nigiri", "Maki", or "Platter".
            </p>
          </div>
        )}

      </div>
    </section>
  );
};
