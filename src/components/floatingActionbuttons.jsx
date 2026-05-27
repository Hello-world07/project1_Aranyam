'use client';
import { useState, useEffect, useCallback } from 'react';
import { ChevronUp } from 'lucide-react';

export default function FloatingActionButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleScroll = useCallback(() => {
    setShowScrollTop(window.scrollY > 350);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll, isMounted]);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  if (!isMounted) return null;

  return (
    <div className="fixed bottom-8 right-8 z-[9999] flex flex-col items-center gap-4 pointer-events-auto">
      
      {/* 1. WhatsApp Button - Always Visible & Stable */}
      <a
        href="https://wa.me/917330962111"// ← Update with your number
        target="_blank"
        rel="noopener noreferrer"
        className="group w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center
                   shadow-xl shadow-black/70 hover:shadow-emerald-600/40
                   transition-all duration-300 hover:scale-110 active:scale-95
                   focus:outline-none focus:ring-4 focus:ring-emerald-400/30"
        aria-label="Chat with us on WhatsApp"
      >
        <svg 
          width="28" 
          height="28" 
          viewBox="0 0 24 24" 
          fill="white" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.074-.297-.15-1.255-.463-2.39-1.485-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.372-.025-.52-.075-.149-.669-1.612-.917-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.48 0 1.463 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 2.04c-5.523 0-10 4.477-10 10 0 1.77.46 3.43 1.26 4.87L2 22l5.3-1.39C8.9 21.3 10.4 21.96 12 21.96c5.523 0 10-4.477 10-10s-4.477-10-10-10z" />
        </svg>
      </a>

      {/* 2. Scroll-to-Top Button - Independent Animation */}
      <button
        onClick={scrollToTop}
        className={`group relative w-14 h-14 rounded-full 
                   bg-gradient-to-br from-jungle-900 via-jungle-950 to-black
                   backdrop-blur-2xl border border-emerald-400/30
                   flex items-center justify-center 
                   shadow-2xl shadow-black/70
                   transition-all duration-500 ease-out
                   hover:-translate-y-1 hover:shadow-emerald-500/25
                   focus:outline-none focus:ring-4 focus:ring-emerald-400/30
                   ${showScrollTop 
                     ? 'opacity-100 translate-y-0' 
                     : 'opacity-0 translate-y-12 pointer-events-none'
                   }`}
        aria-label="Scroll to top"
        style={{ willChange: 'transform, opacity' }}
      >
        {/* Subtle Cinematic Border Glow */}
        <div className="absolute inset-[-3px] rounded-full border border-gold-400/20 group-hover:border-gold-400/40 transition-colors duration-400" />

        <div className="relative flex items-center justify-center">
          <ChevronUp className="w-7 h-7 text-emerald-300 group-hover:text-gold-300 transition-colors duration-300" />
          
          {/* Inner Premium Glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-400/10 to-transparent opacity-0 group-hover:opacity-75 transition-opacity duration-300" />
        </div>
      </button>
    </div>
  );
}