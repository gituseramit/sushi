import React, { createContext, useContext, useState, useEffect } from 'react';
import { SUSHI_MENU } from '../data/sushiData';
import { sfx } from '../utils/audio';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([
    {
      ...SUSHI_MENU[0],
      quantity: 1
    }
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isOrderTrackOpen, setIsOrderTrackOpen] = useState(false);
  const [isStoryModalOpen, setIsStoryModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [toastMessage, setToastMessage] = useState(null);

  useEffect(() => {
    sfx.enabled = soundEnabled;
  }, [soundEnabled]);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((current) => (current === msg ? null : current));
    }, 3200);
  };

  const addToCart = (item, quantity = 1) => {
    sfx.playChime();
    setCartItems(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i =>
          i.id === item.id ? { ...i, quantity: i.quantity + quantity } : i
        );
      }
      return [...prev, { ...item, quantity }];
    });
    showToast(`Added ${item.name} to cart`);
  };

  const removeFromCart = (id) => {
    sfx.playClick();
    setCartItems(prev => prev.filter(i => i.id !== id));
  };

  const updateQuantity = (id, delta) => {
    sfx.playPop();
    setCartItems(prev =>
      prev
        .map(i => {
          if (i.id === id) {
            const newQ = i.quantity + delta;
            return newQ > 0 ? { ...i, quantity: newQ } : null;
          }
          return i;
        })
        .filter(Boolean)
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartTotalNumber = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const cartTotal = cartTotalNumber.toFixed(2);
  const totalItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartTotal,
        cartTotalNumber,
        totalItemCount,
        isCartOpen,
        setIsCartOpen,
        isOrderTrackOpen,
        setIsOrderTrackOpen,
        isStoryModalOpen,
        setIsStoryModalOpen,
        searchQuery,
        setSearchQuery,
        soundEnabled,
        setSoundEnabled,
        toastMessage,
        showToast
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
