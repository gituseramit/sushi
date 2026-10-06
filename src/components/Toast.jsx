import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Toast = () => {
  const { toastMessage } = useCart();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce">
      <div className="bg-[#1C1615] text-white px-5 py-3 rounded-full shadow-dark-glow border border-[#FF5A2A]/40 flex items-center gap-3">
        <div className="w-6 h-6 rounded-full bg-[#FF5A2A] flex items-center justify-center">
          <CheckCircle2 size={14} className="text-white" />
        </div>
        <span className="text-xs font-medium tracking-wide">
          {toastMessage}
        </span>
      </div>
    </div>
  );
};
