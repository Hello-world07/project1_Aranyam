'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar';
import BookingModal from './components/bookingmodal';
import FloatingActionButtons from './components/floatingActionbuttons';

import Home from './pages/home';
import AboutPage from './pages/aboutpage.jsx';
import MenuPage from './pages/menupage.jsx';
import GalleryPage from './pages/gallerypage.jsx';
import ContactPage from './pages/contactpage.jsx';
import Footer from './components/footer.jsx';

/* ─────────────────────────────────────────────
   PASSWORD GATE
───────────────────────────────────────────── */
function PasswordGate({ children }) {
  const CORRECT_PASSWORD = 'aranyam2025'; // change this to whatever you want

  const [unlocked, setUnlocked] = useState(false);
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);

  const handleSubmit = () => {
    if (input === CORRECT_PASSWORD) {
      setUnlocked(true);
    } else {
      setError(true);
      setShake(true);
      setTimeout(() => setShake(false), 600);
    }
  };

  if (unlocked) return children;

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#041504',
        backgroundImage: `
          radial-gradient(ellipse 80% 60% at 50% 0%, rgba(46,158,46,0.08), transparent),
          radial-gradient(ellipse 60% 40% at 80% 80%, rgba(212,160,23,0.05), transparent)
        `,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Cormorant Garamond, serif',
      }}
    >
      <div
        style={{
          textAlign: 'center',
          padding: '3rem 2rem',
          maxWidth: '380px',
          width: '100%',
        }}
      >
        {/* Label */}
        <p style={{
          color: 'rgba(249,199,79,0.6)',
          letterSpacing: '0.35em',
          fontSize: '0.8rem',
          textTransform: 'uppercase',
          marginBottom: '0.5rem',
          fontStyle: 'italic',
        }}>
          Private Demo
        </p>

        {/* Title */}
        <h1 style={{
          fontFamily: 'Cinzel, serif',
          color: '#f9c74f',
          fontSize: 'clamp(2rem, 8vw, 3rem)',
          letterSpacing: '0.08em',
          margin: '0 0 0.25rem',
          textShadow: '0 0 30px rgba(212,160,23,0.4)',
        }}>
          ARANYAM
        </h1>

        <p style={{
          color: 'rgba(200,230,200,0.4)',
          letterSpacing: '0.2em',
          fontSize: '0.75rem',
          textTransform: 'uppercase',
          marginBottom: '2.5rem',
        }}>
          The Jungle Theme Restaurant
        </p>

        {/* Divider */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
          marginBottom: '2.5rem',
        }}>
          <span style={{ height: '1px', width: '60px', background: 'linear-gradient(to right, transparent, rgba(212,160,23,0.4))' }} />
          <span style={{ color: '#d4a017', fontSize: '0.6rem' }}>◆</span>
          <span style={{ height: '1px', width: '60px', background: 'linear-gradient(to left, transparent, rgba(212,160,23,0.4))' }} />
        </div>

        {/* Input + Button */}
        <div style={{
          animation: shake ? 'gateShake 0.5s ease' : 'none',
        }}>
          <input
            type="password"
            placeholder="Enter access password"
            value={input}
            onChange={(e) => { setInput(e.target.value); setError(false); }}
            onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
            style={{
              width: '100%',
              padding: '0.85rem 1.25rem',
              background: 'rgba(255,255,255,0.04)',
              border: error
                ? '1px solid rgba(255,80,80,0.6)'
                : '1px solid rgba(212,160,23,0.25)',
              borderRadius: '8px',
              color: '#f0e6c8',
              fontSize: '1rem',
              fontFamily: 'Cormorant Garamond, serif',
              letterSpacing: '0.1em',
              outline: 'none',
              marginBottom: '0.75rem',
              boxSizing: 'border-box',
              transition: 'border 0.3s',
            }}
          />

          {error && (
            <p style={{
              color: 'rgba(255,100,100,0.8)',
              fontSize: '0.8rem',
              marginBottom: '0.75rem',
              fontStyle: 'italic',
            }}>
              Incorrect password. Please try again.
            </p>
          )}

          <button
            onClick={handleSubmit}
            style={{
              width: '100%',
              padding: '0.85rem',
              background: 'linear-gradient(135deg, #d4a017, #f9c74f)',
              border: 'none',
              borderRadius: '8px',
              color: '#041504',
              fontFamily: 'Cinzel, serif',
              fontSize: '0.8rem',
              fontWeight: 'bold',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              boxShadow: '0 0 24px rgba(212,160,23,0.3)',
              transition: 'all 0.3s',
            }}
            onMouseEnter={e => e.target.style.boxShadow = '0 0 40px rgba(212,160,23,0.6)'}
            onMouseLeave={e => e.target.style.boxShadow = '0 0 24px rgba(212,160,23,0.3)'}
          >
            Enter
          </button>
        </div>

        {/* Footer note */}
        <p style={{
          marginTop: '2rem',
          color: 'rgba(200,230,200,0.25)',
          fontSize: '0.72rem',
          fontStyle: 'italic',
          letterSpacing: '0.05em',
        }}>
          Concept design by Pranith Konda — confidential
        </p>
      </div>

      <style>{`
        @keyframes gateShake {
          0%, 100% { transform: translateX(0); }
          20%       { transform: translateX(-10px); }
          40%       { transform: translateX(10px); }
          60%       { transform: translateX(-8px); }
          80%       { transform: translateX(8px); }
        }
      `}</style>
    </div>
  );
}

/* ─────────────────────────────────────────────
   SCROLL-REVEAL HOOK
───────────────────────────────────────────── */
function useScrollReveal(options = {}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      {
        threshold: options.threshold ?? 0.15,
        rootMargin: options.rootMargin ?? '0px',
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [options.threshold, options.rootMargin]);

  return [ref, visible];
}

/* ─────────────────────────────────────────────
   HERO SECTION
───────────────────────────────────────────── */
function HeroSection({ onBookTable }) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const img = new Image();
    img.src = '/hero.jpg';
    img.onload = () => setImgLoaded(true);
  }, []);

  const parallaxOffset = scrollY * 0.35;

  return (
    <section
      id="home"
      aria-label="Hero — Welcome to Aranyam"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 will-change-transform"
        style={{
          transform: `translate3d(0, ${parallaxOffset}px, 0) scale(1.12)`,
          backgroundImage: imgLoaded ? "url('/hero.jpg')" : 'none',
          backgroundColor: '#041504',
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
          transition: imgLoaded ? 'opacity 0.8s ease' : 'none',
          opacity: imgLoaded ? 1 : 0,
        }}
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 bg-gradient-to-b from-jungle-950/70 via-transparent to-jungle-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_90%_at_50%_50%,transparent_40%,rgba(4,21,4,0.55)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(46,158,46,0.08),transparent)]" />

      {/* Hero Content */}
      <div
        className={[
          'relative z-10 text-center px-6 sm:px-10 max-w-4xl mx-auto',
          'transition-all duration-1000 ease-out',
          imgLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
        ].join(' ')}
      >
        <p className="font-cormorant italic font-semibold text-gold-400/65 text-base sm:text-lg tracking-[0.35em] uppercase mb-5 select-none">
          Welcome to
        </p>

        <h1
          className="font-cinzel font-bold text-gold-400 select-none"
          style={{
            fontSize: 'clamp(3.5rem, 14vw, 7rem)',
            lineHeight: 1,
            textShadow: '0 0 30px rgba(212,160,23,0.45), 0 0 80px rgba(212,160,23,0.15)',
            letterSpacing: '0.05em',
          }}
        >
          ARANYAM
        </h1>

        <p className="font-cormorant font-semibold text-jungle-200/65 text-lg sm:text-xl tracking-[0.22em] uppercase mt-3 mb-2 select-none">
          The Jungle Theme Restaurant
        </p>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 my-6" aria-hidden="true">
          <span className="h-px w-14 sm:w-20 bg-gradient-to-r from-transparent to-gold-500/50" />
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <circle cx="7" cy="7" r="2.5" fill="#d4a017" />
            <circle cx="7" cy="7" r="5.5" stroke="#d4a017" strokeWidth="0.6" opacity="0.4" />
          </svg>
          <span className="h-px w-14 sm:w-20 bg-gradient-to-l from-transparent to-gold-500/50" />
        </div>

        {/* Tagline */}
        <p
          className="font-cormorant font-semibold text-jungle-100/80 leading-relaxed tracking-wide mb-10 mx-auto"
          style={{ fontSize: 'clamp(1.05rem, 3vw, 1.35rem)', maxWidth: '38ch' }}
        >
          Every meal is a journey into the wild — surrounded by trees,
          waterfalls, and cave-style seating.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onBookTable}
            aria-label="Open table reservation form"
            className="
              group relative overflow-hidden inline-flex items-center gap-2
              px-8 py-4 rounded-full font-cinzel text-sm tracking-[0.18em]
              uppercase font-bold text-jungle-950
              bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600
              shadow-[0_0_24px_rgba(212,160,23,0.45)]
              hover:shadow-[0_0_44px_rgba(212,160,23,0.75)]
              transition-all duration-300 hover:scale-[1.04] active:scale-[0.97] min-h-[52px]
            "
          >
            <span
              className="absolute inset-0 rounded-full translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"
              style={{ background: 'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.28) 50%, transparent 70%)' }}
            />
            <span className="relative z-10">Reserve Your Experience</span>
          </button>

          <a
            href="#menu"
            className="
              group inline-flex items-center gap-2 px-8 py-4 rounded-full
              font-cinzel text-sm tracking-[0.18em] uppercase font-semibold
              text-gold-400 border border-gold-500/40
              hover:border-gold-400/80 hover:bg-gold-500/8 hover:text-gold-300
              transition-all duration-300 hover:scale-[1.04] active:scale-[0.97] min-h-[52px]
            "
          >
            Explore Menu
          </a>
        </div>

        {/* Trust */}
        <p className="mt-6 font-cormorant italic font-semibold text-jungle-300/50 text-base sm:text-lg tracking-wider select-none">
          Trusted by 10,000+ guests across Telangana
        </p>
      </div>

      {/* Scroll Indicator */}
      <div
        aria-hidden="true"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60"
        style={{ animation: 'scrollBounce 2.2s ease-in-out infinite' }}
      >
        <span className="font-cormorant text-gold-400/60 text-xs tracking-[0.3em] uppercase">Scroll</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f9c74f" strokeWidth="1.5">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-jungle-950 to-transparent pointer-events-none" />
    </section>
  );
}

/* ─────────────────────────────────────────────
   SECTION DIVIDER
───────────────────────────────────────────── */
function SectionDivider() {
  return (
    <div aria-hidden="true" className="flex items-center justify-center py-2 overflow-hidden">
      <span className="h-px flex-1 max-w-[120px] bg-gradient-to-r from-transparent to-gold-700/25" />
      <svg width="28" height="14" viewBox="0 0 28 14" fill="none" className="mx-3 opacity-50">
        <path d="M0 7 Q7 0 14 7 Q21 14 28 7" stroke="#d4a017" strokeWidth="0.8" fill="none" />
        <circle cx="14" cy="7" r="1.8" fill="#d4a017" opacity="0.7" />
      </svg>
      <span className="h-px flex-1 max-w-[120px] bg-gradient-to-l from-transparent to-gold-700/25" />
    </div>
  );
}

/* ─────────────────────────────────────────────
   APP ROOT
───────────────────────────────────────────── */
function App() {
  const [bookingOpen, setBookingOpen] = useState(false);

  const openBooking = useCallback(() => setBookingOpen(true), []);
  const closeBooking = useCallback(() => setBookingOpen(false), []);

  return (
    <PasswordGate>
      <>
        <style>{`
          @keyframes scrollBounce {
            0%, 100% { transform: translateY(0) translateX(-50%); opacity: 0.6; }
            50%       { transform: translateY(6px) translateX(-50%); opacity: 0.35; }
          }

          @keyframes shimmer {
            from { background-position: 200% center; }
            to   { background-position: -200% center; }
          }

          @media (prefers-reduced-motion: no-preference) {
            html { scroll-behavior: smooth; }
          }

          html, body { overflow-x: hidden; }

          ::-webkit-scrollbar       { width: 4px; }
          ::-webkit-scrollbar-track { background: #041504; }
          ::-webkit-scrollbar-thumb { background: #d4a017; border-radius: 2px; }

          :focus-visible {
            outline: 2px solid #f9c74f;
            outline-offset: 3px;
            border-radius: 4px;
          }
        `}</style>

        <div className="min-h-screen bg-jungle-950">
          <Navbar onBookTable={openBooking} />

          <Routes>
            <Route path="/"        element={<Home onBookTable={openBooking} HeroSection={HeroSection} />} />
            <Route path="/about"   element={<AboutPage />} />
            <Route path="/menu"    element={<MenuPage onBookTable={openBooking} />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>

          <BookingModal isOpen={bookingOpen} onClose={closeBooking} />
          <FloatingActionButtons />
          <Footer />
        </div>
      </>
    </PasswordGate>
  );
}

export default App;