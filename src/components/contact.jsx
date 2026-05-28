import { MapPin, Phone, Mail, Clock, Instagram, ArrowRight } from 'lucide-react';

const locations = [
  {
    city: 'Warangal',
    tag: 'Our Flagship',
    address: '4th Floor, Fox Hills Complex, above Pantaloons, Nakkala Gutta, Hanamkonda, Telangana 506001',
    phone: '+91 7330962111',
    email: 'marketing.amogham@gmail.com',
    mapUrl: 'https://maps.app.goo.gl/FbR9vYUndU2dJJLk8',
  },
  {
    city: 'Hyderabad',
    tag: 'The Capital',
    address: '2nd Floor, CCPL Mall, Vimala Devi Nagar Colony, Anandbagh, Malkajgiri, Secunderabad, Telangana 500047',
    phone: '+91 80088 72112',
    email: 'marketing.amogham@gmail.com',
    mapUrl: 'https://maps.app.goo.gl/1TTMvtsVW4rtauuPA',
  },
  {
    city: 'Karimnagar',
    tag: 'City of Heritage',
    address: 'Second Floor, Kousalya Kishan Rao Complex, Ambedkar Rd, above Kidzmall, Court Chowrastha, Vavilalapally, Karimnagar, Telangana 505001',
    phone: '+91 8121278860',
    email: 'marketing.amogham@gmail.com',
    mapUrl: 'https://maps.app.goo.gl/3VQK94tm2DJ88yU48',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#050505] py-24 text-white">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.12),transparent_50%)]" />
      <div className="absolute inset-0 opacity-[0.04] bg-[url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="font-cormorant italic text-gold-400/70 text-base tracking-[0.4em] uppercase mb-3">
            Discover Our Sanctuaries
          </p>
          
          <h2 className="font-cinzel text-5xl md:text-6xl font-bold text-gold-400 tracking-tight mb-6">
            Visit Aranyam
          </h2>

          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold-500/60" />
            <div className="w-2 h-2 rounded-full bg-gold-500" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold-500/60" />
          </div>

          <p className="text-jungle-100 text-sm leading-7 max-w-2xl mx-auto font-light">
            Three sacred groves across Telangana where nature, luxury, and culinary artistry converge.
          </p>
        </div>

        {/* Opening Hours */}
        <div className="mx-auto mb-20 flex justify-center">
          <div className="flex items-center gap-4 rounded-3xl border border-gold-600/20 bg-jungle-950/80 px-8 py-5 backdrop-blur-xl">
            <Clock className="w-5 h-5 text-gold-500" />
            <div>
              <p className="font-cinzel uppercase tracking-[0.2em] text-gold-400 text-xs font-semibold">Open Daily</p>
              <p className="text-jungle-100 text-sm font-light">11:30 AM — 11:00 PM</p>
            </div>
          </div>
        </div>

        {/* Locations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {locations.map((loc, index) => (
            <div
              key={loc.city}
              className="group relative bg-jungle-900/70 border border-jungle-700/60 rounded-3xl overflow-hidden transition-all duration-700 hover:border-gold-500/30 hover:-translate-y-2 hover:shadow-2xl hover:shadow-gold-900/30"
            >
              {/* Top Accent Line */}
              <div className="h-1.5 w-full bg-gradient-to-r from-gold-500 via-amber-400 to-yellow-600" />

              <div className="p-8">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h3 className="font-cinzel text-3xl font-bold text-gold-400 tracking-tight">
                      {loc.city}
                    </h3>
                    <p className="font-cormorant italic text-jungle-400 text-sm mt-1">
                      {loc.tag}
                    </p>
                  </div>
                  <div className="w-11 h-11 rounded-2xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                    <MapPin className="w-5 h-5 text-gold-400" />
                  </div>
                </div>

                {/* Address */}
                <div className="flex gap-3 mb-6">
                  <MapPin className="w-5 h-5 text-gold-500/70 mt-1 flex-shrink-0" />
                  <p className="text-jungle-200 text-[15px] leading-relaxed font-light">
                    {loc.address}
                  </p>
                </div>

                {/* Contact Info */}
                <div className="space-y-5 mb-8">
                  <a
                    href={`tel:${loc.phone}`}
                    className="flex items-center gap-3 text-jungle-100 hover:text-gold-300 transition-colors group/item"
                  >
                    <Phone className="w-4 h-4 text-gold-500/70" />
                    <span className="font-medium tracking-wide">{loc.phone}</span>
                  </a>

                  <a
                    href={`mailto:${loc.email}`}
                    className="flex items-center gap-3 text-jungle-100 hover:text-gold-300 transition-colors group/item"
                  >
                    <Mail className="w-4 h-4 text-gold-500/70" />
                    <span className="font-medium tracking-wide break-all">{loc.email}</span>
                  </a>
                </div>

                {/* Get Directions */}
                <a
                  href={loc.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn flex items-center justify-center gap-2 w-full py-4 rounded-2xl border border-gold-600/30 bg-gold-500/5 hover:bg-gold-500/10 hover:border-gold-400 text-gold-400 hover:text-gold-300 transition-all duration-300 font-cinzel tracking-[0.15em] text-sm uppercase"
                >
                  Find on Map
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Luxury CTA */}
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl border border-gold-500/10 bg-gradient-to-br from-jungle-900 to-black p-12 md:p-16 text-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08),transparent_70%)]" />

            <div className="relative z-10">
              <p className="font-cormorant italic text-gold-400/80 tracking-[0.3em] text-sm mb-4">
                BEGIN YOUR JOURNEY
              </p>

              <h3 className="font-cinzel text-4xl md:text-5xl font-bold text-gold-300 mb-6 leading-tight">
                Ready to Step into<br />the Wild?
              </h3>

              <p className="text-jungle-100 text-sm leading-7 max-w-lg mx-auto mb-10">
                Reserve your table through WhatsApp and immerse yourself in an unparalleled jungle dining experience.
              </p>

              <a
                href="https://wa.me/917330962111"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 group px-12 py-5 bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-cinzel tracking-wider uppercase text-sm font-bold rounded-full hover:scale-105 active:scale-95 transition-all shadow-xl shadow-amber-500/30 hover:shadow-2xl hover:shadow-amber-500/40"
              >
                Reserve via WhatsApp
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
              </a>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-20">
          <a
            href="https://www.instagram.com/aranyamjunglerestaurant"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 px-8 py-4 rounded-2xl border border-jungle-700 hover:border-gold-500/40 hover:bg-jungle-900/50 transition-all"
          >
            <Instagram className="w-6 h-6 text-gold-400" />
            <span className="text-jungle-100">@aranyamjunglerestaurant</span>
          </a>

          <a
            href="mailto:marketing.amogham@gmail.com"
            className="flex items-center gap-4 px-8 py-4 rounded-2xl border border-jungle-700 hover:border-gold-500/40 hover:bg-jungle-900/50 transition-all"
          >
            <Mail className="w-6 h-6 text-gold-400" />
            <span className="text-jungle-100">marketing.amogham@gmail.com</span>
          </a>
        </div>
      </div>
    </section>
  );
}