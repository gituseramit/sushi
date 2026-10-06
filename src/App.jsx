import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { CartProvider } from './context/CartContext';
import { FloatingGarnishes } from './components/FloatingGarnishes';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { PopularDishes } from './components/PopularDishes';
import { NewlyAddedPromo } from './components/NewlyAddedPromo';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { OrderTrackModal } from './components/OrderTrackModal';
import { StoryModal } from './components/StoryModal';
import { Toast } from './components/Toast';

export function AppContent() {
  // Initialize Lenis smooth inertia scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.25,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.1,
      touchMultiplier: 1.5,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#FDFBF7] via-[#FAF6EE] to-[#FAF6EE] text-[#1A1A1A] selection:bg-[#FF5A2A]/20 selection:text-[#FF5A2A]">
      {/* Floating Background Ambient Garnishes */}
      <FloatingGarnishes />

      {/* Sticky Top Navbar */}
      <Navbar />

      {/* Main Landing Page Content */}
      <main className="relative z-10">
        <Hero />
        <AboutUs />
        <PopularDishes />
        <NewlyAddedPromo />
        <Newsletter />
      </main>

      {/* Footer */}
      <Footer />

      {/* Slide-over Cart Drawer */}
      <CartDrawer />

      {/* Order Tracking Modal */}
      <OrderTrackModal />

      {/* Craft Documentary Story Modal */}
      <StoryModal />

      {/* Dynamic Toast Feedback */}
      <Toast />
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}
