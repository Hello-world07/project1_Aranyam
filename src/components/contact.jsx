import { MapPin, Phone, Mail, Clock, Instagram } from 'lucide-react';

const locations = [
  {
    city: 'Warangal',
    tag: 'Our Flagship',
    address:
      '4th Floor, Fox Hills Complex, above Pantaloons, Nakkala Gutta, Hanamkonda, Telangana 506001',
    phone: '+91 7330962111',
    email: 'marketing.amogham@gmail.com',
    mapUrl: 'https://maps.app.goo.gl/FbR9vYUndU2dJJLk8',
  },

  {
    city: 'Hyderabad',
    tag: 'The Capital',
    address:
      '2nd Floor, CCPL Mall, Vimala Devi Nagar Colony, Anandbagh, Malkajgiri, Secunderabad, Telangana 500047',
    phone: '+91 80088 72112',
    email: 'marketing.amogham@gmail.com',
    mapUrl: 'https://maps.app.goo.gl/1TTMvtsVW4rtauuPA',
  },

  {
    city: 'Karimnagar',
    tag: 'City of Heritage',
    address:
      'Second Floor, Kousalya Kishan Rao Complex, Ambedkar Rd, above Kidzmall, Court Chowrastha, Vavilalapally, Karimnagar, Telangana 505001',
    phone: '+91 8121278860',
    email: 'marketing.amogham@gmail.com',
    mapUrl: 'https://maps.app.goo.gl/3VQK94tm2DJ88yU48',
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-24 overflow-hidden bg-jungle-950"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(46,158,46,0.07),transparent)]" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_100%_80%,rgba(212,160,23,0.05),transparent)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="font-cormorant italic text-gold-400/70 text-base tracking-[0.3em] uppercase mb-3">
            Find Us
          </p>

          <h2
            className="font-cinzel text-4xl sm:text-5xl font-bold text-gold-400"
            style={{
              textShadow: '0 0 30px rgba(212,160,23,0.3)',
            }}
          >
            Visit Us
          </h2>

          <div className="flex items-center justify-center gap-4 mt-5 mb-5">
            <span className="h-[1px] w-20 bg-gradient-to-r from-transparent to-gold-600/50" />

            <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />

            <span className="h-[1px] w-20 bg-gradient-to-l from-transparent to-gold-600/50" />
          </div>

          <p className="text-jungle-100 text-lg sm:text-xl leading-relaxed font-light max-w-2xl mx-auto">
            Three locations across Telangana offering an immersive jungle-inspired
            dining experience crafted with ambience, flavor, and unforgettable moments.
          </p>
        </div>

        {/* Opening Hours */}
        <div
          className="flex items-center justify-center gap-3 mb-16
          px-6 py-4 rounded-2xl
          border border-gold-600/25 bg-jungle-900/50
          max-w-sm mx-auto"
        >
          <Clock className="w-5 h-5 text-gold-500 flex-shrink-0" />

          <div>
            <p className="font-cinzel text-xs tracking-[0.2em] text-gold-400 uppercase font-semibold">
              Open Every Day
            </p>

            <p className="text-jungle-100 text-sm tracking-wide font-medium">
              11:30 AM – 11:00 PM
            </p>
          </div>
        </div>

        {/* Location Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-24">

          {locations.map(
            ({ city, tag, address, phone, email, mapUrl }) => (

              <div
                key={city}
                className="relative group rounded-2xl overflow-hidden
                border border-jungle-700/50 bg-jungle-900/60
                hover:border-gold-600/40
                transition-all duration-500
                shadow-[0_4px_24px_rgba(0,0,0,0.4)]
                hover:shadow-[0_8px_36px_rgba(0,0,0,0.6),0_0_20px_rgba(212,160,23,0.1)]
                hover:-translate-y-1"
              >

                {/* Top Accent */}
                <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-gold-500/60 to-transparent" />

                <div className="p-6 sm:p-7">

                  {/* City */}
                  <div className="flex items-start justify-between mb-5">

                    <div>
                      <h3
                        className="font-cinzel text-xl sm:text-2xl font-bold text-gold-400 mb-1"
                        style={{
                          textShadow:
                            '0 0 16px rgba(212,160,23,0.3)',
                        }}
                      >
                        {city}
                      </h3>

                      <span className="font-cormorant italic text-sm text-jungle-300/70 tracking-wide">
                        {tag}
                      </span>
                    </div>

                    <div
                      className="w-8 h-8 rounded-full bg-gold-500/10 border border-gold-600/30
                      flex items-center justify-center flex-shrink-0 mt-1"
                    >
                      <MapPin className="w-4 h-4 text-gold-500" />
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-[1px] bg-gradient-to-r from-gold-600/30 via-gold-600/10 to-transparent mb-5" />

                  {/* Address */}
                  <div className="flex gap-3 mb-4">

                    <MapPin className="w-4 h-4 text-gold-500/70 flex-shrink-0 mt-1" />

                    <p className="text-jungle-100 text-[15px] leading-relaxed font-light">
                      {address}
                    </p>
                  </div>

                  {/* Phone */}
                  <a
                    href={`tel:${phone.replace(/\s/g, '')}`}
                    className="flex gap-3 mb-4 group/link"
                  >
                    <Phone className="w-4 h-4 text-gold-500/70 flex-shrink-0 mt-0.5" />

                    <p className="text-jungle-100 text-sm font-medium tracking-wide group-hover/link:text-gold-300 transition-colors duration-200">
                      {phone}
                    </p>
                  </a>

                  {/* Email */}
                  <a
                    href={`mailto:${email}`}
                    className="flex gap-3 mb-6 group/link"
                  >
                    <Mail className="w-4 h-4 text-gold-500/70 flex-shrink-0 mt-0.5" />

                    <p className="text-sm font-medium tracking-wide text-jungle-100 break-all group-hover/link:text-gold-300 transition-colors duration-200">
                      {email}
                    </p>
                  </a>

                  {/* Directions Button */}
                  <a
                    href={mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full
                    px-4 py-3 rounded-xl
                    border border-gold-600/30 bg-gold-500/5
                    font-cinzel text-xs tracking-[0.15em] uppercase text-gold-400
                    hover:bg-gold-500/15 hover:border-gold-500/60 hover:text-gold-300
                    transition-all duration-300"
                  >
                    <MapPin className="w-3.5 h-3.5" />

                    Get Directions
                  </a>
                </div>
              </div>
            )
          )}
        </div>

        {/* WhatsApp CTA */}
        <div className="max-w-3xl mx-auto text-center mb-20">

          <div
            className="relative overflow-hidden rounded-3xl
            border border-gold-600/20
            bg-gradient-to-br from-jungle-900/80 to-jungle-950/90
            p-10 sm:p-14
            shadow-[0_8px_40px_rgba(0,0,0,0.5)]"
          >

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,160,23,0.08),transparent_60%)]" />

            <div className="relative z-10">

              <p className="font-cormorant italic text-gold-400 tracking-[0.25em] uppercase text-sm mb-4">
                Reserve Instantly
              </p>

              <h3
                className="font-cinzel text-3xl sm:text-4xl text-gold-400 font-bold mb-6"
                style={{
                  textShadow: '0 0 24px rgba(212,160,23,0.25)',
                }}
              >
                Ready For The Experience?
              </h3>

              <p className="text-jungle-100 text-lg leading-relaxed font-light max-w-2xl mx-auto mb-10">
                Reserve your table instantly through WhatsApp and experience
                the magical ambience, signature flavors, and immersive jungle-inspired
                dining at Aranyam.
              </p>

              {/* Reserve Button */}
              <a
                href="https://wa.me/917330962111"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3
                px-10 py-5 rounded-full
                bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600
                text-jungle-950 font-cinzel text-sm tracking-[0.2em] uppercase font-bold
                shadow-[0_0_30px_rgba(212,160,23,0.35)]
                hover:scale-105 hover:shadow-[0_0_45px_rgba(212,160,23,0.55)]
                transition-all duration-300"
              >
                Reserve Your Table
              </a>
            </div>
          </div>
        </div>

        {/* Social Row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">

          {/* Instagram */}
          <a
            href="https://www.instagram.com/aranyamjunglerestaurant"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 px-7 py-4 rounded-full
            border border-jungle-600/40 bg-jungle-900/50
            hover:border-gold-500/50 hover:bg-jungle-800/60
            transition-all duration-300"
          >
            <Instagram className="w-5 h-5 text-gold-500" />

            <span className="text-sm font-medium tracking-wide text-jungle-100">
              @aranyamjunglerestaurant
            </span>
          </a>

          {/* Email */}
          <a
            href="mailto:marketing.amogham@gmail.com"
            className="flex items-center gap-4 px-7 py-4 rounded-full
            border border-jungle-600/40 bg-jungle-900/50
            hover:border-gold-500/50 hover:bg-jungle-800/60
            transition-all duration-300"
          >
            <Mail className="w-5 h-5 text-gold-500" />

            <span className="text-sm font-medium tracking-wide text-jungle-100">
              marketing.amogham@gmail.com
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}