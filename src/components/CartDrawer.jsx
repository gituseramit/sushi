import React, { useState } from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useCart } from '../context/CartContext';
import { sfx } from '../utils/audio';

export const CartDrawer = () => {
  const {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    updateQuantity,
    removeFromCart,
    clearCart,
    cartTotal,
    setIsOrderTrackOpen
  } = useCart();

  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  if (!isCartOpen) return null;

  const handleCheckout = () => {
    sfx.playChime();
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setOrderComplete(true);
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#FF5A2A', '#1C1615', '#FAF6EE', '#E85A2A']
        });
      } catch (err) {}
    }, 1400);
  };

  const handleFinishAndTrack = () => {
    setOrderComplete(false);
    clearCart();
    setIsCartOpen(false);
    setIsOrderTrackOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        onClick={() => {
          sfx.playClick();
          setIsCartOpen(false);
        }}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
      />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between">
          
          <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-[#FAF6EE]/50">
            <div className="flex items-center gap-2">
              <ShoppingBag className="text-[#FF5A2A]" size={20} />
              <h3 className="font-serif text-xl font-bold text-[#1A1A1A]">Your Tasting Cart</h3>
              <span className="bg-[#FFEDE5] text-[#FF5A2A] text-xs font-bold px-2 py-0.5 rounded-full">
                {cartItems.length}
              </span>
            </div>
            <button
              onClick={() => {
                sfx.playClick();
                setIsCartOpen(false);
              }}
              className="p-2 rounded-full hover:bg-black/5 text-gray-500 hover:text-gray-800 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {orderComplete ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 size={36} />
                </div>
                <h4 className="font-serif text-2xl font-bold text-[#1A1A1A]">
                  Order Confirmed!
                </h4>
                <p className="text-xs text-gray-500 max-w-xs mx-auto leading-relaxed">
                  Master sushi chef has received your order #SU-8921. Preparation is commencing immediately.
                </p>
                <div className="pt-4">
                  <button
                    onClick={handleFinishAndTrack}
                    className="w-full bg-[#FF5A2A] text-white py-3.5 rounded-full text-sm font-semibold shadow-orange-glow hover:bg-[#E85A2A] transition-all cursor-pointer"
                  >
                    Track Order Live →
                  </button>
                </div>
              </div>
            ) : cartItems.length === 0 ? (
              <div className="text-center py-16 space-y-3">
                <span className="text-5xl">🍣</span>
                <h4 className="font-serif text-lg font-bold text-[#1A1A1A]">
                  Your cart is empty
                </h4>
                <p className="text-xs text-gray-400">
                  Select gourmet nigiri or signature maki rolls to begin.
                </p>
              </div>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 p-3.5 rounded-2xl bg-[#FAF6EE]/60 border border-gray-100 hover:border-orange-100 transition-all"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-xl object-cover border border-white shadow-sm flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h5 className="font-serif text-sm font-bold text-[#1A1A1A] truncate">
                      {item.name}
                    </h5>
                    <div className="text-xs font-semibold text-[#FF5A2A] mt-0.5">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>

                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex items-center border border-gray-200 bg-white rounded-lg px-2 py-0.5">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="text-gray-500 hover:text-black p-0.5"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="text-xs font-bold px-2 text-[#1A1A1A]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="text-gray-500 hover:text-black p-0.5"
                        >
                          <Plus size={12} />
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-400 hover:text-red-500 p-1 transition-colors"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {!orderComplete && cartItems.length > 0 && (
            <div className="p-6 border-t border-gray-100 bg-[#FAF6EE]/50 space-y-4">
              <div className="space-y-2 text-xs text-gray-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-[#1A1A1A]">${cartTotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>Binchotan Insulated Packaging</span>
                  <span className="text-emerald-600 font-semibold">Complimentary</span>
                </div>
                <div className="flex justify-between border-t border-gray-200/80 pt-2 text-sm">
                  <span className="font-bold text-[#1A1A1A]">Total</span>
                  <span className="font-serif font-bold text-[#FF5A2A] text-lg">
                    ${cartTotal}
                  </span>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                disabled={isCheckingOut}
                className="w-full bg-[#FF5A2A] hover:bg-[#E85A2A] text-white py-4 rounded-full font-semibold text-sm shadow-orange-glow hover:shadow-xl hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isCheckingOut ? (
                  <span>Preparing Order...</span>
                ) : (
                  <>
                    <span>Proceed to Order Checkout</span>
                    <ArrowRight size={16} />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-gray-400">
                <ShieldCheck size={14} className="text-emerald-500" />
                <span>Freshness Guaranteed Temperature-Controlled Delivery</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
