import { useState, useEffect, useRef } from 'react';
import { Menu, X, Leaf } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Menu', href: '/menu' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  const mobileMenuRef = useRef(null);

  const location = useLocation();

  /* ─────────────────────────────────────────────
     ACTIVE ROUTE DETECTION
  ───────────────────────────────────────────── */
  useEffect(() => {
    const current =
      NAV_LINKS.find((item) => item.href === location.pathname)?.label || 'Home';

    setActiveLink(current);
  }, [location.pathname]);

  /* ─────────────────────────────────────────────
     SCROLL EFFECT
  ───────────────────────────────────────────── */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* ─────────────────────────────────────────────
     CLOSE MOBILE MENU OUTSIDE CLICK
  ───────────────────────────────────────────── */
  useEffect(() => {
    const handleClick = (e) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target)
      ) {
        setMobileOpen(false);
      }
    };

    if (mobileOpen) {
      document.addEventListener('mousedown', handleClick);
    }

    return () =>
      document.removeEventListener('mousedown', handleClick);
  }, [mobileOpen]);

  /* ─────────────────────────────────────────────
     BODY SCROLL LOCK
  ───────────────────────────────────────────── */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleLinkClick = (label) => {
    setActiveLink(label);
    setMobileOpen(false);

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {/* ─────────────────────────────────────────────
          MAIN NAVBAR
      ───────────────────────────────────────────── */}
      <header
        className={`
          fixed
          top-0
          left-0
          right-0
          z-50

          transition-all
          duration-500
          ease-in-out

          ${
            scrolled
              ? `
                bg-jungle-950/92
                backdrop-blur-xl
                shadow-[0_4px_32px_rgba(0,0,0,0.65)]
                py-2
              `
              : `
                bg-gradient-to-b
                from-jungle-950/80
                to-transparent
                backdrop-blur-sm
                py-4
              `
          }
        `}
      >
        {/* Top Gold Accent */}
        <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-gold-500 to-transparent opacity-70" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between">

            {/* ───────────────── LOGO ───────────────── */}
            <Link
              to="/"
              onClick={() => handleLinkClick('Home')}
              className="flex items-center gap-3 group select-none"
              aria-label="ARANYAM – Home"
            >
              {/* Logo */}
              <div
                className={`
                  relative
                  flex-shrink-0
                  transition-all
                  duration-500

                  rounded-xl
                  overflow-hidden

                  border-2
                  border-gold-600/40

                  shadow-[0_0_14px_rgba(212,160,23,0.25)]

                  group-hover:border-gold-500/70
                  group-hover:shadow-[0_0_24px_rgba(212,160,23,0.45)]
                `}
                style={{
                  width: scrolled ? '52px' : '68px',
                  height: scrolled ? '52px' : '68px',
                }}
              >
                <img
                  src="/logo.png"
                  alt="ARANYAM logo"
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                />
              </div>

              {/* Brand Text */}
              <div className="flex flex-col leading-none gap-1">
                <span
                  className={`
                    font-cinzel
                    tracking-[0.22em]
                    text-gold-400
                    font-bold

                    group-hover:text-gold-300

                    transition-all
                    duration-300

                    ${scrolled ? 'text-base' : 'text-lg'}
                  `}
                  style={{
                    textShadow:
                      '0 0 18px rgba(212,160,23,0.45)',
                  }}
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
            </Link>

            {/* ───────────────── DESKTOP NAV ───────────────── */}
            <ul className="hidden md:flex items-center gap-1 lg:gap-2">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    to={href}
                    onClick={() => handleLinkClick(label)}
                    className={`
                      relative
                      px-4
                      py-2

                      font-cinzel
                      text-sm
                      tracking-[0.15em]
                      uppercase

                      transition-colors
                      duration-300
                      group

                      ${
                        activeLink === label
                          ? 'text-gold-400'
                          : 'text-jungle-100/80 hover:text-gold-300'
                      }
                    `}
                  >
                    {label}

                    {/* Underline */}
                    <span
                      className={`
                        absolute
                        bottom-0
                        left-1/2
                        -translate-x-1/2

                        h-[1.5px]

                        bg-gradient-to-r
                        from-transparent
                        via-gold-500
                        to-transparent

                        transition-all
                        duration-300
                        ease-out

                        ${
                          activeLink === label
                            ? 'w-4/5 opacity-100'
                            : 'w-0 opacity-0 group-hover:w-4/5 group-hover:opacity-100'
                        }
                      `}
                    />

                    {/* Dot */}
                    <span
                      className={`
                        absolute
                        -bottom-1
                        left-1/2
                        -translate-x-1/2

                        w-1
                        h-1
                        rounded-full
                        bg-gold-400

                        transition-all
                        duration-300

                        ${
                          activeLink === label
                            ? 'opacity-100 scale-100'
                            : 'opacity-0 scale-0 group-hover:opacity-70 group-hover:scale-100'
                        }
                      `}
                    />
                  </Link>
                </li>
              ))}
            </ul>

            {/* ───────────────── MOBILE TOGGLE ───────────────── */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="
                md:hidden
                relative

                w-10
                h-10

                flex
                items-center
                justify-center

                rounded-full

                border
                border-jungle-600/40

                bg-jungle-900/50
                backdrop-blur-sm

                text-gold-400

                hover:text-gold-300
                hover:border-gold-600/60
                hover:bg-jungle-800/60

                transition-all
                duration-300
              "
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              <span
                className={`
                  absolute
                  transition-all
                  duration-300

                  ${
                    mobileOpen
                      ? 'opacity-100 rotate-0'
                      : 'opacity-0 rotate-90'
                  }
                `}
              >
                <X className="w-5 h-5" />
              </span>

              <span
                className={`
                  absolute
                  transition-all
                  duration-300

                  ${
                    mobileOpen
                      ? 'opacity-0 -rotate-90'
                      : 'opacity-100 rotate-0'
                  }
                `}
              >
                <Menu className="w-5 h-5" />
              </span>
            </button>

          </nav>
        </div>

        {/* Bottom Border */}
        <div
          className={`
            absolute
            bottom-0
            left-0
            right-0

            h-[1px]

            bg-gradient-to-r
            from-transparent
            via-gold-600/40
            to-transparent

            transition-opacity
            duration-500

            ${scrolled ? 'opacity-100' : 'opacity-0'}
          `}
        />
      </header>

      {/* ─────────────────────────────────────────────
          MOBILE MENU
      ───────────────────────────────────────────── */}
      <div
        className={`
          fixed
          inset-0
          z-40
          md:hidden

          transition-all
          duration-500

          ${
            mobileOpen
              ? 'opacity-100 pointer-events-auto'
              : 'opacity-0 pointer-events-none'
          }
        `}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-jungle-950/80 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />

        {/* Drawer */}
        <div
          ref={mobileMenuRef}
          className={`
            absolute
            top-0
            right-0

            h-full
            w-4/5
            max-w-sm

            bg-gradient-to-b
            from-jungle-950
            via-jungle-900
            to-earth-800

            border-l
            border-gold-600/20

            shadow-[-8px_0_40px_rgba(0,0,0,0.7)]

            flex
            flex-col

            transition-transform
            duration-500
            ease-[cubic-bezier(0.16,1,0.3,1)]

            ${
              mobileOpen
                ? 'translate-x-0'
                : 'translate-x-full'
            }
          `}
        >
          {/* Top Border */}
          <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-gold-500 to-transparent" />

          {/* Mobile Links */}
          <ul className="flex flex-col px-6 pt-28 gap-2">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                <Link
                  to={href}
                  onClick={() => handleLinkClick(label)}
                  className={`
                    flex
                    items-center
                    gap-4

                    px-4
                    py-4

                    rounded-xl

                    font-cinzel
                    text-base
                    tracking-[0.15em]
                    uppercase

                    border

                    transition-all
                    duration-300
                    group

                    ${
                      activeLink === label
                        ? `
                          text-gold-400
                          border-gold-600/30
                          bg-gold-500/5
                        `
                        : `
                          text-jungle-100/70
                          border-transparent
                          hover:text-gold-300
                          hover:border-jungle-600/30
                          hover:bg-jungle-800/40
                        `
                    }
                  `}
                >
                  <span
                    className={`
                      w-[3px]
                      h-5
                      rounded-full

                      bg-gradient-to-b
                      from-gold-400
                      to-gold-600

                      transition-all
                      duration-300

                      ${
                        activeLink === label
                          ? 'opacity-100'
                          : 'opacity-0 group-hover:opacity-60'
                      }
                    `}
                  />

                  {label}

                  {activeLink === label && (
                    <span className="ml-auto">
                      <Leaf className="w-3.5 h-3.5 text-gold-500" />
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Bottom CTA */}
          <div className="px-6 mt-auto pb-10">
            <div className="h-[1px] bg-gradient-to-r from-transparent via-gold-600/30 to-transparent mb-6" />

            <Link
              to="/contact"
              onClick={() => handleLinkClick('Contact')}
              className="
                flex
                items-center
                justify-center
                gap-2

                w-full

                px-6
                py-4

                rounded-full

                font-cinzel
                text-sm
                tracking-[0.18em]
                uppercase

                text-jungle-950
                font-bold

                bg-gradient-to-r
                from-gold-500
                via-gold-400
                to-gold-600

                shadow-[0_0_24px_rgba(212,160,23,0.4)]

                hover:shadow-[0_0_36px_rgba(212,160,23,0.65)]

                active:scale-[0.97]

                transition-all
                duration-300
              "
            >
              <Leaf className="w-4 h-4" />
              Reserve Your Experience
            </Link>

            <p className="text-center font-cormorant italic text-jungle-400/50 text-xs mt-4 tracking-wider">
              "Where the wild dines in luxury"
            </p>
          </div>

          {/* Bottom Border */}
          <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-gold-600/40 to-transparent" />
        </div>
      </div>
    </>
  );
}