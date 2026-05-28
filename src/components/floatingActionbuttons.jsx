'use client';

import { useState, useEffect, useCallback } from 'react';
import { ChevronUp } from 'lucide-react';

export default function FloatingActionButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleScroll = useCallback(() => {
    setShowScrollTop(window.scrollY > 500);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll, isMounted]);

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  if (!isMounted) return null;

  return (
    <div
      className="
        fixed
        bottom-4 sm:bottom-6
        right-4 sm:right-6
        z-[999]
        flex flex-col
        items-center
        gap-3
      "
      style={{
        paddingBottom: 'env(safe-area-inset-bottom)',
      }}
    >
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/917330962111"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="
          group
          relative

          w-11 h-11
          sm:w-12 sm:h-12

          rounded-full

          bg-white/[0.06]
          backdrop-blur-md

          border border-white/10

          flex items-center justify-center

          transition-all duration-300 ease-out

          hover:bg-white/[0.10]
          hover:border-emerald-400/20
          hover:-translate-y-0.5

          active:scale-95

          shadow-[0_4px_20px_rgba(0,0,0,0.18)]

          will-change-transform
        "
      >
        {/* subtle glow */}
        <div
          className="
            absolute inset-0
            rounded-full
            bg-emerald-400/5
            opacity-0
            group-hover:opacity-100
            transition-opacity duration-300
          "
        />

        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
          className="
            relative z-10
            opacity-90
            group-hover:opacity-100
            transition-opacity duration-300
          "
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.074-.297-.15-1.255-.463-2.39-1.485-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.372-.025-.52-.075-.149-.669-1.612-.917-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.48 0 1.463 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 2.04c-5.523 0-10 4.477-10 10 0 1.77.46 3.43 1.26 4.87L2 22l5.3-1.39C8.9 21.3 10.4 21.96 12 21.96c5.523 0 10-4.477 10-10s-4.477-10-10-10z" />
        </svg>
      </a>

      {/* Scroll To Top */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`
          group
          relative

          w-10 h-10
          sm:w-11 sm:h-11

          rounded-full

          bg-black/20
          backdrop-blur-md

          border border-white/10

          flex items-center justify-center

          transition-all duration-500 ease-out

          hover:bg-black/30
          hover:border-gold-400/20
          hover:-translate-y-0.5

          active:scale-95

          shadow-[0_4px_20px_rgba(0,0,0,0.16)]

          will-change-transform

          ${
            showScrollTop
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4 pointer-events-none'
          }
        `}
      >
        <ChevronUp
          className="
            w-4 h-4
            text-white/80
            group-hover:text-gold-300
            transition-colors duration-300
          "
        />
      </button>
    </div>
  );
}