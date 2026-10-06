import React from 'react';
import { X, CheckCircle, ChefHat, Sparkles, Truck, MapPin } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { sfx } from '../utils/audio';

export const OrderTrackModal = () => {
  const { isOrderTrackOpen, setIsOrderTrackOpen } = useCart();

  if (!isOrderTrackOpen) return null;

  const steps = [
    { title: "Order Confirmed", time: "6:14 PM", completed: true, icon: CheckCircle },
    { title: "Toyosu Fish Selected & Master Knife Prep", time: "6:20 PM", completed: true, icon: ChefHat },
    { title: "Edomae Plating & Caviar Garnish", time: "6:31 PM", current: true, icon: Sparkles },
    { title: "Temperature-Insulated Bento Transit", time: "Est. 6:42 PM", completed: false, icon: Truck },
    { title: "Delivered to Residence", time: "Est. 6:50 PM", completed: false, icon: MapPin },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div
        onClick={() => {
          sfx.playClick();
          setIsOrderTrackOpen(false);
        }}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
      />

      <div className="relative bg-white rounded-3xl max-w-lg w-full shadow-2xl overflow-hidden border border-gray-100 z-10">
        <div className="bg-[#1C1615] text-white p-6 flex items-center justify-between">
          <div>
            <div className="text-xs uppercase tracking-wider text-[#FF5A2A] font-bold">
              Live Sushi Delivery Tracking
            </div>
            <h3 className="font-serif text-2xl font-bold mt-1">
              Order #SU-8921
            </h3>
          </div>
          <button
            onClick={() => {
              sfx.playClick();
              setIsOrderTrackOpen(false);
            }}
            className="p-2 rounded-full hover:bg-white/10 text-gray-300 hover:text-white"
          >
            <X size={20} />
          </button>
        </div>

        <div className="bg-[#FAF6EE] p-5 border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-[#1C1615] text-white flex items-center justify-center text-lg font-bold font-serif">
              KS
            </div>
            <div>
              <div className="text-xs font-bold text-[#1A1A1A]">Kenji Sato</div>
              <div className="text-[11px] text-gray-500">Dedicated Insulated Courier</div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Estimated Arrival</div>
            <div className="font-serif text-lg font-bold text-[#FF5A2A]">20 - 25 Mins</div>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="flex items-start gap-4 relative">
                {idx !== steps.length - 1 && (
                  <div
                    className={`absolute left-4 top-8 w-0.5 h-10 ${
                      step.completed ? 'bg-[#FF5A2A]' : 'bg-gray-200'
                    }`}
                  />
                )}
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 z-10 ${
                    step.completed
                      ? 'bg-[#FF5A2A] text-white shadow-orange-glow'
                      : step.current
                      ? 'bg-[#1C1615] text-white ring-4 ring-[#FF5A2A]/20 animate-pulse'
                      : 'bg-gray-100 text-gray-400'
                  }`}
                >
                  <Icon size={16} />
                </div>
                <div className="flex-1 pt-0.5">
                  <div className="flex items-center justify-between">
                    <h5
                      className={`text-sm font-semibold ${
                        step.completed || step.current ? 'text-[#1A1A1A]' : 'text-gray-400'
                      }`}
                    >
                      {step.title}
                    </h5>
                    <span className="text-[11px] text-gray-400 font-mono">
                      {step.time}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="p-6 bg-[#FAF6EE]/50 border-t border-gray-100">
          <div className="relative h-24 w-full rounded-2xl bg-[#E8E1D1] overflow-hidden flex items-center justify-center border border-gray-200">
            <div className="flex items-center gap-2 bg-white/95 px-4 py-2 rounded-full shadow-md text-xs font-semibold text-[#1A1A1A]">
              <Truck size={14} className="text-[#FF5A2A] animate-bounce" />
              <span>Courier is 1.8 miles away • In Transit</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
