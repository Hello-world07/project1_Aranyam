import { useEffect } from 'react';
import { X, Phone, MapPin, ExternalLink } from 'lucide-react';

const locations = [
  {
    city: 'Warangal',
    subtitle: 'Hanamkonda, Warangal',
    phone: '+91 73309 62111',
    tel: '+917330962111',
  },
  {
    city: 'Hyderabad',
    subtitle: 'Hyderabad',
    phone: '+91 80088 72112',
    tel: '+918008872112',
  },
  {
    city: 'Karimnagar',
    subtitle: 'Karimnagar',
    phone: '+91 81212 78860',
    tel: '+918121278860',
  },
];

export default function BookingModal({ isOpen, onClose }) {
  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    if (isOpen) window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  return (
    <>
      {/* ── Backdrop ── */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 60,
          backgroundColor: 'rgba(4, 21, 4, 0.85)',
          backdropFilter: 'blur(6px)',
          WebkitBackdropFilter: 'blur(6px)',
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? 'auto' : 'none',
          transition: 'opacity 0.4s ease',
        }}
      />

      {/* ── MOBILE: slide up from bottom ── */}
      <div
        className="md:hidden"
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 70,
          borderRadius: '24px 24px 0 0',
          background: 'linear-gradient(160deg, #0d400d 0%, #082808 50%, #041504 100%)',
          border: '1px solid rgba(212,160,23,0.25)',
          borderBottom: 'none',
          boxShadow: '0 -8px 60px rgba(0,0,0,0.8), 0 0 40px rgba(212,160,23,0.08)',
          transform: isOpen ? 'translateY(0)' : 'translateY(100%)',
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? 'auto' : 'none',
          transition: 'transform 0.45s cubic-bezier(0.16,1,0.3,1), opacity 0.3s ease',
          maxHeight: '90vh',
          overflowY: 'auto',
        }}
      >
        <ModalContent onClose={onClose} />
      </div>

      {/* ── DESKTOP: centered popup ── */}
      <div
        className="hidden md:block"
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: isOpen
            ? 'translate(-50%, -50%) scale(1)'
            : 'translate(-50%, -48%) scale(0.96)',
          zIndex: 70,
          width: '100%',
          maxWidth: '480px',
          borderRadius: '20px',
          background: 'linear-gradient(160deg, #0d400d 0%, #082808 50%, #041504 100%)',
          border: '1px solid rgba(212,160,23,0.25)',
          boxShadow: '0 24px 80px rgba(0,0,0,0.8), 0 0 40px rgba(212,160,23,0.1)',
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? 'auto' : 'none',
          transition: 'transform 0.4s cubic-bezier(0.16,1,0.3,1), opacity 0.3s ease',
        }}
      >
        <ModalContent onClose={onClose} />
      </div>
    </>
  );
}

function ModalContent({ onClose }) {
  return (
    <div style={{ position: 'relative' }}>

      {/* Gold top accent */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0,
        height: '1.5px',
        borderRadius: '24px 24px 0 0',
        background: 'linear-gradient(to right, transparent, #d4a017, transparent)',
      }} />

      {/* Mobile drag handle */}
      <div className="flex justify-center pt-3 pb-1 md:hidden">
        <div style={{
          width: 40, height: 4,
          borderRadius: 99,
          backgroundColor: 'rgba(46,158,46,0.4)',
        }} />
      </div>

      <div style={{ padding: '20px 28px 32px' }} className="md:pt-7">

        {/* ── Header ── */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 20 }}>
          <div>
            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: 'italic',
              color: 'rgba(212,160,23,0.75)',
              fontSize: 12,
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              marginBottom: 4,
            }}>
              Make a Reservation
            </p>
            <h2 style={{
              fontFamily: "'Cinzel', serif",
              fontSize: 26,
              fontWeight: 700,
              color: '#f9c74f',
              textShadow: '0 0 20px rgba(212,160,23,0.4)',
              margin: 0,
            }}>
              Reserve Your Table
            </h2>
          </div>
          <button
            onClick={onClose}
            style={{
              width: 36, height: 36,
              borderRadius: '50%',
              border: '1px solid rgba(46,158,46,0.4)',
              background: 'transparent',
              color: '#7dd97d',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer',
              flexShrink: 0,
              marginTop: 2,
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'rgba(212,160,23,0.6)';
              e.currentTarget.style.color = '#f9c74f';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(46,158,46,0.4)';
              e.currentTarget.style.color = '#7dd97d';
            }}
            aria-label="Close"
          >
            <X size={16} />
          </button>
        </div>

        {/* Divider */}
        <div style={{
          height: 1,
          background: 'linear-gradient(to right, transparent, rgba(212,160,23,0.3), transparent)',
          marginBottom: 20,
        }} />

        {/* ── Swiggy Dineout Card ── */}
        <a
          href="https://www.swiggy.com/restaurants/aranyam-jungle-theme-restaurant-hanamkonda-koramangala-warangal-1322217/dineout?is_retargeting=true&media_source=GoogleReserve&utm_campaign=GoogleMap&utm_source=GoogleReserve"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '14px 16px',
            borderRadius: 16,
            border: '1px solid rgba(255,100,0,0.35)',
            backgroundColor: 'rgba(255,100,0,0.07)',
            textDecoration: 'none',
            marginBottom: 20,
            transition: 'all 0.3s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = 'rgba(255,100,0,0.65)';
            e.currentTarget.style.backgroundColor = 'rgba(255,100,0,0.13)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = 'rgba(255,100,0,0.35)';
            e.currentTarget.style.backgroundColor = 'rgba(255,100,0,0.07)';
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            {/* Swiggy S logo */}
            <div style={{
              width: 48, height: 48,
              borderRadius: 12,
              backgroundColor: '#fc8019',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
              boxShadow: '0 0 16px rgba(252,128,25,0.4)',
            }}>
              <span style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 900,
                fontSize: 22,
                color: 'white',
              }}>S</span>
            </div>
            <div>
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: 14,
                color: '#ffffff',
                margin: '0 0 3px',
                letterSpacing: '0.02em',
              }}>
                Swiggy Dineout
              </p>
              <p style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 16,
                color: 'rgba(220,255,220,0.75)',
                margin: 0,
              }}>
                Book instantly — confirmed in seconds
              </p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#fc8019', flexShrink: 0 }}>
            <span style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}>
              Book
            </span>
            <ExternalLink size={15} />
          </div>
        </a>

        {/* ── OR divider ── */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
          <div style={{ flex: 1, height: 1, background: 'linear-gradient(to right, transparent, rgba(46,158,46,0.4))' }} />
          <span style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: 'italic',
            color: 'rgba(125,217,125,0.6)',
            fontSize: 14,
            letterSpacing: '0.1em',
            whiteSpace: 'nowrap',
          }}>
            or call us directly
          </span>
          <div style={{ flex: 1, height: 1, background: 'linear-gradient(to left, transparent, rgba(46,158,46,0.4))' }} />
        </div>

        {/* ── Location Phone Cards ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {locations.map(({ city, subtitle, phone, tel }) => (
            <a
              key={city}
              href={`tel:${tel}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 14px',
                borderRadius: 14,
                border: '1px solid rgba(46,158,46,0.3)',
                backgroundColor: 'rgba(13,64,13,0.5)',
                textDecoration: 'none',
                transition: 'all 0.25s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(212,160,23,0.5)';
                e.currentTarget.style.backgroundColor = 'rgba(13,64,13,0.8)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(46,158,46,0.3)';
                e.currentTarget.style.backgroundColor = 'rgba(13,64,13,0.5)';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{
                  width: 34, height: 34,
                  borderRadius: '50%',
                  backgroundColor: 'rgba(8,40,8,0.9)',
                  border: '1px solid rgba(212,160,23,0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <MapPin size={14} color="#d4a017" />
                </div>
                <div>
                  <p style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 600,
                    fontSize: 13,
                    color: '#f9c74f',
                    margin: '0 0 2px',
                    letterSpacing: '0.06em',
                  }}>
                    {city}
                  </p>
                  <p style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: 11,
                    color: 'rgba(125,217,125,0.65)',
                    margin: 0,
                    letterSpacing: '0.02em',
                  }}>
                    {subtitle}
                  </p>
                </div>
              </div>
              {/* Phone number — Inter font, fully visible */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 7, flexShrink: 0 }}>
                <Phone size={13} color="#d4a017" />
                <span style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 500,
                  fontSize: 13,
                  color: '#e8f5e8',
                  letterSpacing: '0.03em',
                }}>
                  {phone}
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Footer tagline */}
        <p style={{
          textAlign: 'center',
          fontFamily: "'Cormorant Garamond', serif",
          fontStyle: 'italic',
          color: 'rgba(125,217,125,0.4)',
          fontSize: 13,
          marginTop: 20,
          letterSpacing: '0.05em',
        }}>
          "Where the wild dines in luxury"
        </p>

      </div>

      {/* Gold bottom accent */}
      <div style={{
        position: 'absolute',
        bottom: 0, left: 0, right: 0,
        height: 1,
        borderRadius: '0 0 20px 20px',
        background: 'linear-gradient(to right, transparent, rgba(212,160,23,0.3), transparent)',
      }} />
    </div>
  );
}