import { useEffect } from 'react';
import {
  X,
  Phone,
  MapPin,
  ExternalLink,
} from 'lucide-react';

const locations = [
  {
    city: 'Warangal',
    subtitle: 'Hanamkonda, Warangal',
    phone: '+91 73309 62111',
    tel: '+917330962111',

    swiggy:
      'https://www.swiggy.com/restaurants/aranyam-jungle-theme-restaurant-hanamkonda-koramangala-warangal-1322217/dineout?is_retargeting=true&media_source=GoogleReserve&utm_campaign=GoogleMap&utm_source=GoogleReserve',

    zomato: '',

    district: '',
  },

  {
    city: 'Hyderabad',
    subtitle: 'Malkajgiri, Hyderabad',
    phone: '+91 80088 72112',
    tel: '+918008872112',

    swiggy:
      'https://swiggy.onelink.me/BVRZ?af_dp=swiggydiners%3A%2F%2Fdetails%2F1286236%3Fsource%3Dsharing',

    zomato:
      'https://www.zomato.com/hyderabad/aranyam-the-jungle-theme-restaurant-malkajgiri-secunderabad/book',

    district:
      'https://www.district.in/dining/hyderabad/aranyam-the-jungle-theme-restaurant-malkajgiri-secunderabad/book?utm_source=rwg',
  },

  {
    city: 'Karimnagar',
    subtitle: 'Karimnagar',
    phone: '+91 81212 78860',
    tel: '+918121278860',

    swiggy: '',
    zomato: '',
    district: '',
  },
];

export default function BookingModal({
  isOpen,
  onClose,
}) {
  // LOCK BODY SCROLL
  useEffect(() => {
    document.body.style.overflow = isOpen
      ? 'hidden'
      : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // ESCAPE CLOSE
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      window.addEventListener(
        'keydown',
        handleKey
      );
    }

    return () => {
      window.removeEventListener(
        'keydown',
        handleKey
      );
    };
  }, [isOpen, onClose]);

  return (
    <>
      {/* BACKDROP */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 60,

          backgroundColor:
            'rgba(4,21,4,0.88)',

          backdropFilter: 'blur(7px)',
          WebkitBackdropFilter:
            'blur(7px)',

          opacity: isOpen ? 1 : 0,

          pointerEvents: isOpen
            ? 'auto'
            : 'none',

          transition:
            'opacity 0.4s ease',
        }}
      />

      {/* MOBILE */}
      <div
        className="md:hidden"
        style={{
          position: 'fixed',

          bottom: 0,
          left: 0,
          right: 0,

          zIndex: 70,

          borderRadius:
            '26px 26px 0 0',

          background:
            'linear-gradient(160deg, #0d400d 0%, #082808 50%, #041504 100%)',

          border:
            '1px solid rgba(212,160,23,0.25)',

          borderBottom: 'none',

          boxShadow:
            '0 -8px 60px rgba(0,0,0,0.8), 0 0 40px rgba(212,160,23,0.08)',

          transform: isOpen
            ? 'translateY(0)'
            : 'translateY(100%)',

          opacity: isOpen ? 1 : 0,

          pointerEvents: isOpen
            ? 'auto'
            : 'none',

          transition:
            'transform 0.45s cubic-bezier(0.16,1,0.3,1), opacity 0.3s ease',

          maxHeight: '90vh',

          overflowY: 'auto',
        }}
      >
        <ModalContent onClose={onClose} />
      </div>

      {/* DESKTOP */}
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
          maxWidth: '520px',

          borderRadius: '24px',

          background:
            'linear-gradient(160deg, #0d400d 0%, #082808 50%, #041504 100%)',

          border:
            '1px solid rgba(212,160,23,0.25)',

          boxShadow:
            '0 24px 80px rgba(0,0,0,0.8), 0 0 40px rgba(212,160,23,0.08)',

          opacity: isOpen ? 1 : 0,

          pointerEvents: isOpen
            ? 'auto'
            : 'none',

          transition:
            'transform 0.4s cubic-bezier(0.16,1,0.3,1), opacity 0.3s ease',
        }}
      >
        <ModalContent onClose={onClose} />
      </div>
    </>
  );
}

function ModalContent({ onClose }) {
  return (
    <div
      style={{
        position: 'relative',
      }}
    >
      {/* TOP GOLD LINE */}
      <div
        style={{
          position: 'absolute',

          top: 0,
          left: 0,
          right: 0,

          height: '1.5px',

          borderRadius:
            '24px 24px 0 0',

          background:
            'linear-gradient(to right, transparent, #d4a017, transparent)',
        }}
      />

      {/* MOBILE HANDLE */}
      <div className="flex justify-center pt-3 pb-1 md:hidden">
        <div
          style={{
            width: 42,
            height: 4,

            borderRadius: 99,

            backgroundColor:
              'rgba(46,158,46,0.4)',
          }}
        />
      </div>

      <div
        style={{
          padding: '22px 28px 34px',
        }}
      >
        {/* HEADER */}
        <div
          style={{
            display: 'flex',

            justifyContent:
              'space-between',

            alignItems: 'flex-start',

            marginBottom: 20,
          }}
        >
          <div>
            <p
              style={{
                fontFamily:
                  "'Cormorant Garamond', serif",

                fontStyle: 'italic',

                color:
                  'rgba(212,160,23,0.75)',

                fontSize: 12,

                letterSpacing: '0.28em',

                textTransform:
                  'uppercase',

                marginBottom: 4,
              }}
            >
              Make a Reservation
            </p>

            <h2
              style={{
                fontFamily:
                  "'Cinzel', serif",

                fontSize: 28,

                fontWeight: 700,

                color: '#f9c74f',

                margin: 0,

                textShadow:
                  '0 0 20px rgba(212,160,23,0.35)',
              }}
            >
              Reserve Your Table
            </h2>
          </div>

          {/* CLOSE BUTTON */}
          <button
            onClick={onClose}
            style={{
              width: 38,
              height: 38,

              borderRadius: '50%',

              border:
                '1px solid rgba(46,158,46,0.35)',

              background: 'transparent',

              color: '#7dd97d',

              display: 'flex',

              alignItems: 'center',

              justifyContent: 'center',

              cursor: 'pointer',

              transition:
                'all 0.25s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor =
                'rgba(212,160,23,0.55)';

              e.currentTarget.style.color =
                '#f9c74f';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor =
                'rgba(46,158,46,0.35)';

              e.currentTarget.style.color =
                '#7dd97d';
            }}
          >
            <X size={16} />
          </button>
        </div>

        {/* DIVIDER */}
        <div
          style={{
            height: 1,

            background:
              'linear-gradient(to right, transparent, rgba(212,160,23,0.35), transparent)',

            marginBottom: 22,
          }}
        />

        {/* LOCATION CARDS */}
        <div
          style={{
            display: 'flex',

            flexDirection: 'column',

            gap: 14,
          }}
        >
          {locations.map((location) => (
            <div
              key={location.city}
              style={{
                border:
                  '1px solid rgba(46,158,46,0.28)',

                borderRadius: 18,

                background:
                  'rgba(13,64,13,0.48)',

                padding: '16px',
              }}
            >
              {/* TOP */}
              <div
                style={{
                  display: 'flex',

                  justifyContent:
                    'space-between',

                  alignItems: 'flex-start',

                  gap: 16,

                  marginBottom: 14,
                }}
              >
                {/* LEFT */}
                <div
                  style={{
                    display: 'flex',
                    gap: 12,
                  }}
                >
                  <div
                    style={{
                      width: 38,
                      height: 38,

                      borderRadius:
                        '50%',

                      background:
                        'rgba(8,40,8,0.9)',

                      border:
                        '1px solid rgba(212,160,23,0.28)',

                      display: 'flex',

                      alignItems: 'center',

                      justifyContent:
                        'center',

                      flexShrink: 0,
                    }}
                  >
                    <MapPin
                      size={15}
                      color="#d4a017"
                    />
                  </div>

                  <div>
                    <p
                      style={{
                        fontFamily:
                          'Inter, sans-serif',

                        fontWeight: 700,

                        fontSize: 14,

                        color: '#f9c74f',

                        margin:
                          '0 0 3px',

                        letterSpacing:
                          '0.08em',
                      }}
                    >
                      {location.city}
                    </p>

                    <p
                      style={{
                        fontFamily:
                          'Inter, sans-serif',

                        fontSize: 12,

                        color:
                          'rgba(125,217,125,0.7)',

                        margin: 0,
                      }}
                    >
                      {location.subtitle}
                    </p>
                  </div>
                </div>

                {/* PHONE */}
                <a
                  href={`tel:${location.tel}`}
                  style={{
                    display: 'flex',

                    alignItems: 'center',

                    gap: 6,

                    textDecoration:
                      'none',

                    flexShrink: 0,
                  }}
                >
                  <Phone
                    size={13}
                    color="#d4a017"
                  />

                  <span
                    style={{
                      fontFamily:
                        'Inter, sans-serif',

                      fontWeight: 500,

                      fontSize: 13,

                      color: '#e8f5e8',
                    }}
                  >
                    {location.phone}
                  </span>
                </a>
              </div>

              {/* ACTION BUTTONS */}
              <div
                style={{
                  display: 'flex',

                  gap: 10,

                  flexWrap: 'wrap',
                }}
              >
                {/* SWIGGY */}
                {location.swiggy ? (
                  <a
                    href={location.swiggy}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={
                      actionButtonStyle
                    }
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/1/13/Swiggy_logo.png"
                      alt="Swiggy"
                      style={{
                        width: 16,
                        height: 16,

                        objectFit:
                          'contain',
                      }}
                    />

                    <span>Swiggy</span>

                    <ExternalLink
                      size={13}
                    />
                  </a>
                ) : (
                  <div
                    style={
                      disabledButtonStyle
                    }
                  >
                    <span>
                      Swiggy Soon
                    </span>
                  </div>
                )}

                {/* ZOMATO */}
                {location.zomato ? (
                  <a
                    href={location.zomato}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={
                      actionButtonStyle
                    }
                  >
                    <div
                      style={{
                        width: 16,
                        height: 16,

                        borderRadius: 4,

                        background:
                          '#e23744',

                        display: 'flex',

                        alignItems:
                          'center',

                        justifyContent:
                          'center',

                        fontSize: 10,

                        fontWeight: 700,

                        color: 'white',

                        fontFamily:
                          'Inter, sans-serif',
                      }}
                    >
                      Z
                    </div>

                    <span>Zomato</span>

                    <ExternalLink
                      size={13}
                    />
                  </a>
                ) : (
                  <div
                    style={
                      disabledButtonStyle
                    }
                  >
                    <span>
                      Zomato Soon
                    </span>
                  </div>
                )}

                {/* DISTRICT */}
                {location.district ? (
                  <a
                    href={location.district}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={
                      actionButtonStyle
                    }
                  >
                    <div
                      style={{
                        width: 16,
                        height: 16,

                        borderRadius: 4,

                        background:
                          '#6d5dfc',

                        display: 'flex',

                        alignItems:
                          'center',

                        justifyContent:
                          'center',

                        fontSize: 10,

                        fontWeight: 700,

                        color: 'white',

                        fontFamily:
                          'Inter, sans-serif',
                      }}
                    >
                      D
                    </div>

                    <span>District</span>

                    <ExternalLink
                      size={13}
                    />
                  </a>
                ) : null}
              </div>
            </div>
          ))}
        </div>

        {/* FOOTER TEXT */}
        <p
          style={{
            textAlign: 'center',

            fontFamily:
              "'Cormorant Garamond', serif",

            fontSize: 15,

            fontWeight: 500,

            color:
              'rgba(249,199,79,0.72)',

            marginTop: 26,

            letterSpacing: '0.08em',

            lineHeight: 1.6,

            textShadow:
              '0 0 12px rgba(212,160,23,0.12)',
          }}
        >
          Where the wild dines in
          luxury
        </p>
      </div>

      {/* BOTTOM GOLD LINE */}
      <div
        style={{
          position: 'absolute',

          bottom: 0,
          left: 0,
          right: 0,

          height: 1,

          borderRadius:
            '0 0 20px 20px',

          background:
            'linear-gradient(to right, transparent, rgba(212,160,23,0.3), transparent)',
        }}
      />
    </div>
  );
}

const actionButtonStyle = {
  display: 'flex',

  alignItems: 'center',

  gap: 8,

  padding: '10px 14px',

  borderRadius: 12,

  border:
    '1px solid rgba(212,160,23,0.28)',

  background: 'rgba(8,40,8,0.92)',

  color: '#f5f5f5',

  textDecoration: 'none',

  fontFamily: 'Inter, sans-serif',

  fontSize: 13,

  fontWeight: 600,

  transition: 'all 0.25s ease',

  cursor: 'pointer',
};

const disabledButtonStyle = {
  display: 'flex',

  alignItems: 'center',

  padding: '10px 14px',

  borderRadius: 12,

  border:
    '1px dashed rgba(125,217,125,0.2)',

  background:
    'rgba(255,255,255,0.02)',

  color: 'rgba(220,255,220,0.4)',

  fontFamily: 'Inter, sans-serif',

  fontSize: 13,

  fontWeight: 500,
};