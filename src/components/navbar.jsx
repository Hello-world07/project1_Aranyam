import { useState, useEffect, useRef } from 'react';
import { Menu, X, Leaf } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target)) {
        setMobileOpen(false);
      }
    };
    if (mobileOpen) document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [mobileOpen]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleLinkClick = (label, href) => {
    setActiveLink(label);
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* ─── Main Navbar ─── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out
          ${scrolled
            ? 'bg-jungle-950/95 backdrop-blur-md shadow-[0_4px_32px_rgba(0,0,0,0.6)] py-2'
            : 'bg-gradient-to-b from-jungle-950/80 to-transparent backdrop-blur-sm py-4'
          }`}
      >
        {/* Gold top accent line */}
        <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-gold-500 to-transparent opacity-70" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between">

            {/* ─── Logo + Brand ─── */}
            <a
              href="#home"
              onClick={() => handleLinkClick('Home', '#home')}
              className="flex items-center gap-3 group select-none"
              aria-label="ARANYAM – Home"
            >
              {/* Logo card */}
              <div
                className={`relative flex-shrink-0 transition-all duration-500
                  rounded-xl overflow-hidden
                  border-2 border-gold-600/40
                  shadow-[0_0_14px_rgba(212,160,23,0.25)]
                  group-hover:border-gold-500/70
                  group-hover:shadow-[0_0_24px_rgba(212,160,23,0.45)]`}
                style={{ width: scrolled ? '52px' : '68px', height: scrolled ? '52px' : '68px' }}
              >
                <img
                  src="/logo.png"
                  alt="ARANYAM logo"
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                />
              </div>

              {/* Brand text */}
              <div className="flex flex-col leading-none gap-1">
                <span
                  className={`font-cinzel tracking-[0.22em] text-gold-400 font-bold
                    group-hover:text-gold-300 transition-all duration-300
                    ${scrolled ? 'text-base' : 'text-lg'}`}
                  style={{ textShadow: '0 0 18px rgba(212,160,23,0.45)' }}
                >
                  ARANYAM
                </span>
                <span className="font-cinzel text-[8px] tracking-[0.25em] text-gold-500 font-semibold uppercase">
                  Jungle Theme Restaurant
                </span>
                <span className="font-cormorant text-[10px] tracking-[0.15em] text-jungle-200/75 uppercase">
                  A Unit Of Amogham Foods
                </span>
              </div>
            </a>

            {/* ─── Desktop Nav Links ─── */}
            <ul className="hidden md:flex items-center gap-1 lg:gap-2">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <button
                    onClick={() => handleLinkClick(label, href)}
                    className={`relative px-4 py-2 font-cinzel text-sm tracking-[0.15em] uppercase
                      transition-colors duration-300 group
                      ${activeLink === label ? 'text-gold-400' : 'text-jungle-100/80 hover:text-gold-300'}`}
                  >
                    {label}
                    {/* Animated underline */}
                    <span
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[1.5px] bg-gradient-to-r from-transparent via-gold-500 to-transparent
                        transition-all duration-300 ease-out
                        ${activeLink === label ? 'w-4/5 opacity-100' : 'w-0 opacity-0 group-hover:w-4/5 group-hover:opacity-100'}`}
                    />
                    {/* Hover glow dot */}
                    <span
                      className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gold-400
                        transition-all duration-300
                        ${activeLink === label ? 'opacity-100 scale-100' : 'opacity-0 scale-0 group-hover:opacity-70 group-hover:scale-100'}`}
                    />
                  </button>
                </li>
              ))}
            </ul>

            {/* ─── Mobile Toggle only ─── */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden relative w-10 h-10 flex items-center justify-center
                rounded-full border border-jungle-600/40 bg-jungle-900/50 backdrop-blur-sm
                text-gold-400 hover:text-gold-300 hover:border-gold-600/60
                transition-all duration-300 hover:bg-jungle-800/60"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              <span className={`absolute transition-all duration-300 ${mobileOpen ? 'opacity-100 rotate-0' : 'opacity-0 rotate-90'}`}>
                <X className="w-5 h-5" />
              </span>
              <span className={`absolute transition-all duration-300 ${mobileOpen ? 'opacity-0 -rotate-90' : 'opacity-100 rotate-0'}`}>
                <Menu className="w-5 h-5" />
              </span>
            </button>

          </nav>
        </div>

        {/* Gold bottom accent line */}
        <div
          className={`absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold-600/40 to-transparent
            transition-opacity duration-500 ${scrolled ? 'opacity-100' : 'opacity-0'}`}
        />
      </header>

      {/* ─── Mobile Menu Overlay ─── */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500
          ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        aria-hidden={!mobileOpen}
      >
        <div
          className="absolute inset-0 bg-jungle-950/80 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />

        <div
          ref={mobileMenuRef}
          className={`absolute top-0 right-0 h-full w-4/5 max-w-sm
            bg-gradient-to-b from-jungle-950 via-jungle-900 to-earth-800
            border-l border-gold-600/20 shadow-[-8px_0_40px_rgba(0,0,0,0.7)]
            flex flex-col
            transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
            ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-gold-500 to-transparent" />

          {/* Mobile panel header */}
          <div className="flex items-center justify-between px-6 pt-6 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl overflow-hidden border-2 border-gold-600/40 shadow-[0_0_12px_rgba(212,160,23,0.25)] flex-shrink-0">
                <img src="/logo.png" alt="ARANYAM logo" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col leading-none gap-1">
                <span
                  className="font-cinzel text-gold-400 text-base tracking-[0.2em] font-bold"
                  style={{ textShadow: '0 0 14px rgba(212,160,23,0.5)' }}
                >
                  ARANYAM
                </span>
                <span className="font-cinzel text-[7px] tracking-[0.2em] text-gold-500 font-semibold uppercase">
                  Jungle Theme Restaurant
                </span>
                <span className="font-cormorant text-[10px] tracking-[0.12em] text-jungle-200/75 uppercase">
                  A Unit Of Amogham Foods
                </span>
              </div>
            </div>
            <button
              onClick={() => setMobileOpen(false)}
              className="w-9 h-9 flex items-center justify-center rounded-full
                border border-jungle-600/40 text-jungle-300 hover:text-gold-400
                hover:border-gold-600/40 transition-all duration-300"
              aria-label="Close menu"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="mx-6 h-[1px] bg-gradient-to-r from-transparent via-gold-600/30 to-transparent mb-6" />

          {/* Nav links */}
          <ul className="flex flex-col px-6 gap-1 flex-1">
            {NAV_LINKS.map(({ label, href }, i) => (
              <li
                key={label}
                className={`transition-all duration-500 ${mobileOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
                style={{ transitionDelay: mobileOpen ? `${120 + i * 70}ms` : '0ms' }}
              >
                <button
                  onClick={() => handleLinkClick(label, href)}
                  className={`w-full flex items-center gap-4 px-4 py-4 rounded-xl
                    font-cinzel text-base tracking-[0.15em] uppercase
                    border transition-all duration-300 group
                    ${activeLink === label
                      ? 'text-gold-400 border-gold-600/30 bg-gold-500/5 shadow-[inset_0_0_20px_rgba(212,160,23,0.07)]'
                      : 'text-jungle-100/70 border-transparent hover:text-gold-300 hover:border-jungle-600/30 hover:bg-jungle-800/40'
                    }`}
                >
                  <span
                    className={`w-[3px] h-5 rounded-full bg-gradient-to-b from-gold-400 to-gold-600 flex-shrink-0
                      transition-all duration-300
                      ${activeLink === label ? 'opacity-100' : 'opacity-0 group-hover:opacity-60'}`}
                  />
                  {label}
                  {activeLink === label && (
                    <span className="ml-auto">
                      <Leaf className="w-3.5 h-3.5 text-gold-500 animate-leaf-sway" />
                    </span>
                  )}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile CTA */}
          <div
            className={`px-6 pb-10 pt-4 transition-all duration-500 ${mobileOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: mobileOpen ? '400ms' : '0ms' }}
          >
            <div className="h-[1px] bg-gradient-to-r from-transparent via-gold-600/30 to-transparent mb-6" />
            <a
              href="#contact"
              onClick={() => handleLinkClick('Contact', '#contact')}
              className="flex items-center justify-center gap-2 w-full
                px-6 py-4 rounded-full font-cinzel text-sm tracking-[0.18em] uppercase
                text-jungle-950 font-bold
                bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600
                shadow-[0_0_24px_rgba(212,160,23,0.4)]
                hover:shadow-[0_0_36px_rgba(212,160,23,0.65)]
                active:scale-[0.97] transition-all duration-300"
            >
              <Leaf className="w-4 h-4" />
              Book a Table
            </a>
            <p className="text-center font-cormorant italic text-jungle-400/50 text-xs mt-4 tracking-wider">
              "Where the wild dines in luxury"
            </p>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-gold-600/40 to-transparent" />
        </div>
      </div>
    </>
  );
}