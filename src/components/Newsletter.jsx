import React, { useState } from 'react';
import { ArrowRight, Mail, CheckCircle2, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sfx } from '../utils/audio';

export const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    sfx.playChime();
    setIsSubscribed(true);

    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#FF5A2A', '#FAF6EE', '#E85A2A', '#F59E0B']
      });
    } catch (err) {}
  };

  return (
    <section className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Dark Espresso Banner Card */}
        <div className="relative bg-[#1C1615] rounded-3xl lg:rounded-[2.5rem] shadow-dark-glow overflow-visible border border-white/10 mt-12 md:mt-20">
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#FF5A2A]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-12 lg:p-16">
            
            {/* Bleeding 3D Salmon Nigiri Visual Overlay */}
            <div className="lg:col-span-5 relative order-2 lg:order-1 flex justify-center lg:justify-start">
              <div className="relative -mt-16 sm:-mt-24 lg:-mt-36 lg:-ml-10 w-64 sm:w-80 lg:w-96 max-w-full">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#FAF6EE] bg-[#2A2220] transform hover:scale-105 transition-transform duration-500">
                  <img
                    src="/images/newsletter_salmon.jpg"
                    alt="Salmon nigiri with lemon slice and mint leaf"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-white text-[11px] font-medium flex items-center gap-1.5">
                    <Sparkles size={12} className="text-[#FF5A2A]" />
                    <span>Lemon Zest Salmon Nigiri</span>
                  </div>
                </div>
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-black/40 blur-xl rounded-full -z-10" />
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-7 space-y-6 text-left order-1 lg:order-2">
              <div className="flex items-center gap-2">
                <span className="font-script text-[#FF5A2A] text-2xl md:text-3xl font-bold">
                  Newsletter
                </span>
                <div className="w-10 h-0.5 bg-[#FF5A2A]/50 rounded-full" />
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-white leading-tight">
                Subscribe for <span className="font-semibold text-[#FF5A2A]">Offer Updates</span>
              </h2>

              <p className="text-gray-400 text-sm md:text-base font-light max-w-lg leading-relaxed">
                Receive secret seasonal omakase invitations, master chef tasting menus, and a 20% privilege code on your inaugural order.
              </p>

              {isSubscribed ? (
                <div className="bg-white/10 border border-[#FF5A2A]/40 rounded-full p-4 flex items-center gap-3 text-white max-w-md">
                  <CheckCircle2 size={24} className="text-[#FF5A2A]" />
                  <div>
                    <div className="text-sm font-bold">Arigatou Gozaimasu! You're Subscribed</div>
                    <div className="text-xs text-gray-300">Check your inbox for exclusive omakase offers.</div>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="relative max-w-lg w-full flex flex-col sm:flex-row items-center gap-2 sm:gap-0 bg-white rounded-full p-1.5 shadow-2xl"
                >
                  <div className="flex items-center w-full pl-4 py-2 sm:py-0">
                    <Mail size={18} className="text-gray-400 mr-2 flex-shrink-0" />
                    <input
                      type="email"
                      required
                      placeholder="Enter Mail Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-transparent text-sm text-[#1A1A1A] placeholder-gray-400 focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-[#FF5A2A] hover:bg-[#E85A2A] text-white px-7 py-3 rounded-full text-xs font-semibold whitespace-nowrap shadow-orange-glow hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Subscribe</span>
                    <ArrowRight size={14} />
                  </button>
                </form>
              )}

              <div className="flex items-center gap-6 pt-2 text-xs text-gray-400 font-light">
                <span>✓ Weekly Japanese Fish Arrivals</span>
                <span>✓ Zero Spam Guaranteed</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
