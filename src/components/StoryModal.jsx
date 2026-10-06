import React from 'react';
import { X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { sfx } from '../utils/audio';

export const StoryModal = () => {
  const { isStoryModalOpen, setIsStoryModalOpen } = useCart();

  if (!isStoryModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div
        onClick={() => {
          sfx.playClick();
          setIsStoryModalOpen(false);
        }}
        className="fixed inset-0 bg-black/70 backdrop-blur-md"
      />

      <div className="relative bg-[#1C1615] text-white rounded-3xl max-w-2xl w-full shadow-2xl overflow-hidden border border-white/10 z-10 my-8">
        <div className="relative p-6 sm:p-8 border-b border-white/10 flex items-center justify-between">
          <div>
            <span className="font-script text-[#FF5A2A] text-2xl font-bold">
              The Craft & Philosophy
            </span>
            <h3 className="font-serif text-3xl font-bold mt-1">
              Omotenashi at SuShi
            </h3>
          </div>
          <button
            onClick={() => {
              sfx.playClick();
              setIsStoryModalOpen(false);
            }}
            className="p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white"
          >
            <X size={22} />
          </button>
        </div>

        <div className="relative aspect-video w-full overflow-hidden bg-black">
          <img
            src="/images/about_maki.jpg"
            alt="Sushi master craft presentation"
            className="w-full h-full object-cover opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C1615] via-transparent to-transparent" />
          <div className="absolute bottom-4 left-6 right-6">
            <span className="bg-[#FF5A2A] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Documentary Short
            </span>
            <h4 className="font-serif text-xl font-bold mt-2 text-white">
              The Art of Single-Cut Hon-Maguro
            </h4>
          </div>
        </div>

        <div className="p-6 sm:p-8 space-y-6 text-left">
          <blockquote className="font-serif italic text-lg text-gray-300 border-l-2 border-[#FF5A2A] pl-4">
            "Sushi is not merely seafood on rice. It is the respectful preservation of life through knife speed, temperature balance, and spiritual mindfulness."
          </blockquote>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="bg-white/5 border border-white/10 p-4 rounded-2xl">
              <span className="font-serif text-2xl font-bold text-[#FF5A2A] block">04:30 AM</span>
              <span className="text-xs text-gray-400">Daily auction bidding at Toyosu Wholesalers</span>
            </div>
            <div className="bg-white/5 border border-white/10 p-4 rounded-2xl">
              <span className="font-serif text-2xl font-bold text-[#FF5A2A] block">38.5°C</span>
              <span className="text-xs text-gray-400">Exact shari body-temperature rice serving target</span>
            </div>
            <div className="bg-white/5 border border-white/10 p-4 rounded-2xl">
              <span className="font-serif text-2xl font-bold text-[#FF5A2A] block">300 Yrs</span>
              <span className="text-xs text-gray-400">Heritage Edomae aging technique preservation</span>
            </div>
          </div>

          <div className="pt-2 flex justify-end">
            <button
              onClick={() => {
                sfx.playClick();
                setIsStoryModalOpen(false);
              }}
              className="bg-[#FF5A2A] hover:bg-[#E85A2A] text-white px-8 py-3 rounded-full text-xs font-semibold shadow-orange-glow transition-all cursor-pointer"
            >
              Close Story
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
