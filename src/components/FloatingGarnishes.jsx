import React from 'react';

export const FloatingGarnishes = () => {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
      {/* Warm Ambient Radial Glow Circles */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#FF5A2A]/10 blur-3xl animate-glow-pulse" />
      <div className="absolute top-1/3 -right-40 w-[30rem] h-[30rem] rounded-full bg-[#FF5A2A]/8 blur-3xl animate-glow-pulse delay-2000" />
      <div className="absolute bottom-20 left-1/4 w-80 h-80 rounded-full bg-[#F5EEDC]/60 blur-2xl" />

      {/* Herb Leaf 1 - Top Left */}
      <div className="absolute top-28 left-[10%] animate-float-gentle opacity-75">
        <svg width="34" height="34" viewBox="0 0 100 100" fill="none" className="rotate-12 drop-shadow-md">
          <path d="M20,80 Q50,10 80,20 Q90,50 80,80 Q50,90 20,80 Z" fill="#2E6F40" />
          <path d="M25,75 Q50,30 75,25" stroke="#1D4C2B" strokeWidth="3" fill="none" />
          <path d="M40,55 Q55,48 65,58" stroke="#1D4C2B" strokeWidth="2" fill="none" />
        </svg>
      </div>

      {/* Herb Leaf 2 - Mid Right */}
      <div className="absolute top-[42%] right-[7%] animate-float-gentle-reverse delay-1000 opacity-80">
        <svg width="42" height="42" viewBox="0 0 100 100" fill="none" className="-rotate-45 drop-shadow-lg">
          <path d="M15,85 Q45,5 85,15 Q95,55 85,85 Q55,95 15,85 Z" fill="#3D8B4E" />
          <path d="M22,78 Q48,28 78,22" stroke="#255C33" strokeWidth="3" fill="none" />
        </svg>
      </div>

      {/* Herb Leaf 3 - Bottom Left */}
      <div className="absolute top-[75%] left-[8%] animate-float-slow delay-2000 opacity-70">
        <svg width="28" height="28" viewBox="0 0 100 100" fill="none" className="rotate-45 drop-shadow-sm">
          <path d="M20,80 Q50,10 80,20 Q90,50 80,80 Q50,90 20,80 Z" fill="#4E9F5F" />
        </svg>
      </div>

      {/* Pickled Ginger / Gari Slice - Floating Accent */}
      <div className="absolute top-[22%] right-[22%] animate-float-gentle delay-3000 opacity-60">
        <svg width="36" height="24" viewBox="0 0 100 60" fill="none" className="rotate-12">
          <path d="M10,30 Q30,5 70,10 Q95,30 80,50 Q40,55 10,30 Z" fill="#F4A7B9" fillOpacity="0.8" />
        </svg>
      </div>

      {/* Golden Sesame Seeds & Spice Specks */}
      <div className="absolute top-[18%] left-[26%] w-2 h-3 rounded-full bg-[#E5B568] rotate-45 animate-float-gentle opacity-80" />
      <div className="absolute top-[35%] left-[18%] w-1.5 h-2.5 rounded-full bg-[#E85A2A] -rotate-12 animate-float-slow opacity-60" />
      <div className="absolute top-[60%] right-[18%] w-2 h-3.5 rounded-full bg-[#E5B568] rotate-30 animate-float-gentle-reverse opacity-75" />
      <div className="absolute top-[82%] right-[28%] w-1.5 h-2 rounded-full bg-[#1C1615] rotate-12 animate-float-gentle opacity-40" />
      <div className="absolute top-[48%] left-[45%] w-2 h-2 rounded-full bg-[#FF5A2A] animate-pulse-subtle opacity-50" />
    </div>
  );
};
