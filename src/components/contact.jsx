import { MapPin, Phone, Mail, Clock, Instagram } from 'lucide-react';

const locations = [
  {
    city: 'Warangal',
    tag: 'Our Flagship',
    address: '4th Floor, Fox Hills Complex, above Pantaloons, Nakkala Gutta, Hanamkonda, Telangana 506001',
    phone: '+91 7330962111',
    email: 'marketing.amogham@gmail.com',
    mapUrl: 'https://maps.app.goo.gl/FbR9vYUndU2dJJLk8',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3797.1!2d79.9!3d18.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDAwJzAwLjAiTiA3OcKwNTQnMDAuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin',
  },
  {
    city: 'Hyderabad',
    tag: 'The Capital',
    address: '2nd Floor, CCPL Mall, Vimala Devi Nagar Colony, Anandbagh, Malkajgiri, Secunderabad, Telangana 500047',
    phone: '+91 80088 72112',
    email: 'marketing.amogham@gmail.com',
    mapUrl: 'https://maps.app.goo.gl/1TTMvtsVW4rtauuPA',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.1!2d78.5!3d17.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI0JzAwLjAiTiA3OMKwMzAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin',
  },
  {
    city: 'Karimnagar',
    tag: 'City of Heritage',
    address: 'Second Floor, Kousalya Kishan Rao Complex, Ambedkar Rd, above Kidzmall, Court Chowrastha, Vavilalapally, Karimnagar, Telangana 505001',
    phone: '+91 8121278860',
    email: 'marketing.amogham@gmail.com',
    mapUrl: 'https://maps.app.goo.gl/3VQK94tm2DJ88yU48',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3793.1!2d79.1!3d18.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDI0JzAwLjAiTiA3OcKwMDYnMDAuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 overflow-hidden bg-jungle-950">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(46,158,46,0.07),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_100%_80%,rgba(212,160,23,0.05),transparent)]" />
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-jungle-950 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-jungle-950 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Heading ── */}
        <div className="text-center mb-16">
          <p className="font-cormorant italic text-gold-400/70 text-base tracking-[0.3em] uppercase mb-3">
            Find Us
          </p>
          <h2
            className="font-cinzel text-4xl sm:text-5xl font-bold text-gold-400"
            style={{ textShadow: '0 0 30px rgba(212,160,23,0.3)' }}
          >
            Visit Us
          </h2>
          <div className="flex items-center justify-center gap-4 mt-5 mb-5">
            <span className="h-[1px] w-20 bg-gradient-to-r from-transparent to-gold-600/50" />
            <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
            <span className="h-[1px] w-20 bg-gradient-to-l from-transparent to-gold-600/50" />
          </div>
          <p className="font-cormorant text-jungle-100 text-xl sm:text-2xl tracking-wide max-w-xl mx-auto leading-relaxed">
            Three locations across Telangana — each one a wild dining experience
          </p>
        </div>

        {/* ── Opening Hours Banner ── */}
        <div className="flex items-center justify-center gap-3 mb-14
          px-6 py-4 rounded-2xl
          border border-gold-600/25 bg-jungle-900/50
          max-w-sm mx-auto">
          <Clock className="w-5 h-5 text-gold-500 flex-shrink-0" />
          <div>
            <p className="font-cinzel text-xs tracking-[0.2em] text-gold-400 uppercase font-semibold">
              Open Every Day
            </p>
            <p className="font-cormorant text-jungle-100 text-base tracking-wide">
              11:30 AM – 11:00 PM
            </p>
          </div>
        </div>

        {/* ── Location Cards ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {locations.map(({ city, tag, address, phone, email, mapUrl }) => (
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
              {/* Card top gold accent */}
              <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-gold-500/60 to-transparent" />

              <div className="p-6 sm:p-7">

                {/* City + tag */}
                <div className="flex items-start justify-between mb-5">
                  <div>
                    <h3
                      className="font-cinzel text-xl sm:text-2xl font-bold text-gold-400 mb-1"
                      style={{ textShadow: '0 0 16px rgba(212,160,23,0.3)' }}
                    >
                      {city}
                    </h3>
                    <span className="font-cormorant italic text-sm text-jungle-300/70 tracking-wide">
                      {tag}
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gold-500/10 border border-gold-600/30
                    flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin className="w-4 h-4 text-gold-500" />
                  </div>
                </div>

                {/* Divider */}
                <div className="h-[1px] bg-gradient-to-r from-gold-600/30 via-gold-600/10 to-transparent mb-5" />

                {/* Address */}
                <div className="flex gap-3 mb-4">
                  <MapPin className="w-4 h-4 text-gold-500/70 flex-shrink-0 mt-1" />
                  <p className="font-cormorant text-jungle-100 text-base leading-relaxed">
                    {address}
                  </p>
                </div>

                {/* Phone */}
                <a
                  href={`tel:${phone.replace(/\s/g, '')}`}
                  className="flex gap-3 mb-4 group/link hover:text-gold-300 transition-colors duration-200"
                >
                  <Phone className="w-4 h-4 text-gold-500/70 flex-shrink-0 mt-0.5" />
                  <p className="font-cormorant text-jungle-100 text-base group-hover/link:text-gold-300 transition-colors duration-200">
                    {phone}
                  </p>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${email}`}
                  className="flex gap-3 mb-6 group/link"
                >
                  <Mail className="w-4 h-4 text-gold-500/70 flex-shrink-0 mt-0.5" />
                  <p className="font-cormorant text-jungle-100 text-base group-hover/link:text-gold-300 transition-colors duration-200 break-all">
                    {email}
                  </p>
                </a>

                {/* Get Directions Button */}
                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full
                    px-4 py-3 rounded-xl
                    border border-gold-600/30 bg-gold-500/5
                    font-cinzel text-xs tracking-[0.15em] uppercase text-gold-400
                    hover:bg-gold-500/15 hover:border-gold-500/60 hover:text-gold-300
                    transition-all duration-300 group/btn"
                >
                  <MapPin className="w-3.5 h-3.5 group-hover/btn:scale-110 transition-transform duration-300" />
                  Get Directions
                </a>
              </div>

              {/* Bottom gold accent on hover */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-3/4 h-[1.5px]
                bg-gradient-to-r from-transparent via-gold-500 to-transparent transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* ── Book a Table Form ── */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="rounded-2xl border border-jungle-700/50 bg-jungle-900/60 p-6 sm:p-8
            shadow-[0_4px_24px_rgba(0,0,0,0.4)]">

            <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-gold-400 text-center mb-2"
              style={{ textShadow: '0 0 16px rgba(212,160,23,0.3)' }}>
              Reserve Your Table
            </h3>
            <p className="font-cormorant text-jungle-100 text-base text-center mb-6 tracking-wide">
              Fill in your details and we'll confirm your booking shortly
            </p>

            <div className="h-[1px] bg-gradient-to-r from-transparent via-gold-600/30 to-transparent mb-6" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              {/* Name */}
              <div>
                <label className="font-cinzel text-[10px] tracking-[0.2em] text-gold-500 uppercase block mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-xl
                    bg-jungle-950/60 border border-jungle-600/40
                    font-cormorant text-jungle-100 text-base placeholder-jungle-400/50
                    focus:outline-none focus:border-gold-500/60 focus:bg-jungle-950/80
                    transition-all duration-300"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="font-cinzel text-[10px] tracking-[0.2em] text-gold-500 uppercase block mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full px-4 py-3 rounded-xl
                    bg-jungle-950/60 border border-jungle-600/40
                    font-cormorant text-jungle-100 text-base placeholder-jungle-400/50
                    focus:outline-none focus:border-gold-500/60 focus:bg-jungle-950/80
                    transition-all duration-300"
                />
              </div>

              {/* Date */}
              <div>
                <label className="font-cinzel text-[10px] tracking-[0.2em] text-gold-500 uppercase block mb-2">
                  Date
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-3 rounded-xl
                    bg-jungle-950/60 border border-jungle-600/40
                    font-cormorant text-jungle-100 text-base
                    focus:outline-none focus:border-gold-500/60 focus:bg-jungle-950/80
                    transition-all duration-300"
                />
              </div>

              {/* Guests */}
              <div>
                <label className="font-cinzel text-[10px] tracking-[0.2em] text-gold-500 uppercase block mb-2">
                  No. of Guests
                </label>
                <select
                  className="w-full px-4 py-3 rounded-xl
                    bg-jungle-950/60 border border-jungle-600/40
                    font-cormorant text-jungle-100 text-base
                    focus:outline-none focus:border-gold-500/60 focus:bg-jungle-950/80
                    transition-all duration-300"
                >
                  {[1,2,3,4,5,6,7,8,'8+'].map((n) => (
                    <option key={n} value={n} className="bg-jungle-950">{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Location select */}
            <div className="mb-4">
              <label className="font-cinzel text-[10px] tracking-[0.2em] text-gold-500 uppercase block mb-2">
                Preferred Location
              </label>
              <select
                className="w-full px-4 py-3 rounded-xl
                  bg-jungle-950/60 border border-jungle-600/40
                  font-cormorant text-jungle-100 text-base
                  focus:outline-none focus:border-gold-500/60 focus:bg-jungle-950/80
                  transition-all duration-300"
              >
                <option value="" className="bg-jungle-950">Select a location</option>
                <option value="warangal" className="bg-jungle-950">Warangal — Hanamkonda</option>
                <option value="hyderabad" className="bg-jungle-950">Hyderabad — Secunderabad</option>
                <option value="karimnagar" className="bg-jungle-950">Karimnagar — Court Chowrastha</option>
              </select>
            </div>

            {/* Message */}
            <div className="mb-6">
              <label className="font-cinzel text-[10px] tracking-[0.2em] text-gold-500 uppercase block mb-2">
                Special Requests (Optional)
              </label>
              <textarea
                rows={3}
                placeholder="Any special occasions, dietary requirements..."
                className="w-full px-4 py-3 rounded-xl
                  bg-jungle-950/60 border border-jungle-600/40
                  font-cormorant text-jungle-100 text-base placeholder-jungle-400/50
                  focus:outline-none focus:border-gold-500/60 focus:bg-jungle-950/80
                  transition-all duration-300 resize-none"
              />
            </div>

            {/* Submit */}
            <button
              className="w-full relative overflow-hidden
                px-8 py-4 rounded-xl font-cinzel text-sm tracking-[0.2em] uppercase
                text-jungle-950 font-bold
                bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600
                shadow-[0_0_24px_rgba(212,160,23,0.4)]
                hover:shadow-[0_0_40px_rgba(212,160,23,0.7)]
                transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] group"
            >
              <span
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.35) 50%, transparent 60%)',
                  backgroundSize: '200% 100%',
                  animation: 'shimmer 1.5s linear infinite',
                }}
              />
              <span className="relative z-10">Confirm Reservation</span>
            </button>
          </div>
        </div>

        {/* ── Social + Contact Row ── */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/aranyamjunglerestaurant"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 rounded-full
              border border-jungle-600/40 bg-jungle-900/50
              hover:border-gold-500/50 hover:bg-jungle-800/60
              transition-all duration-300 group/social"
          >
            <Instagram className="w-5 h-5 text-gold-500 group-hover/social:scale-110 transition-transform duration-300" />
            <span className="font-cinzel text-xs tracking-[0.15em] text-jungle-100 uppercase group-hover/social:text-gold-300 transition-colors duration-300">
              @aranyamjunglerestaurant
            </span>
          </a>

          {/* Email */}
          <a
            href="mailto:marketing.amogham@gmail.com"
            className="flex items-center gap-3 px-6 py-3 rounded-full
              border border-jungle-600/40 bg-jungle-900/50
              hover:border-gold-500/50 hover:bg-jungle-800/60
              transition-all duration-300 group/social"
          >
            <Mail className="w-5 h-5 text-gold-500 group-hover/social:scale-110 transition-transform duration-300" />
            <span className="font-cinzel text-xs tracking-[0.15em] text-jungle-100 uppercase group-hover/social:text-gold-300 transition-colors duration-300">
              marketing.amogham@gmail.com
            </span>
          </a>
        </div>

      </div>
    </section>
  );
}