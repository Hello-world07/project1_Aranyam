import {
  Instagram,
  Facebook,
  MapPin,
  Phone,
  Mail,
  Clock,
  ChevronRight,
  Trees,
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-yellow-500/10 bg-[#050505] text-white">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.12),transparent_45%)]" />

      {/* Jungle Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 lg:px-12">

        {/* Top Grid */}
        <div className="grid gap-14 border-b border-white/10 pb-14 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <div className="mb-5 flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-yellow-500/30 bg-yellow-500/10 backdrop-blur-sm">
                <Trees className="h-6 w-6 text-yellow-400" />
              </div>

              <div>
                <h2 className="text-2xl font-bold tracking-wide text-yellow-400">
                  Aranyam
                </h2>

                <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                  Jungle Restaurant
                </p>
              </div>
            </div>

            <p className="max-w-sm text-sm leading-7 text-gray-300">
              Every meal is a journey into the wild — surrounded by trees,
              waterfalls, cave-style seating, and luxury jungle ambiance.
            </p>

            {/* Socials */}
            <div className="mt-6 flex items-center gap-4">

              <a
                href="https://www.instagram.com/aranyamjunglerestaurant?igsh=bHNqMGdwODNhdDNv&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/10 bg-white/5 p-3 text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/40 hover:bg-yellow-400/10 hover:text-yellow-400"
              >
                <Instagram size={18} />
              </a>

              <a
                href="#"
                className="rounded-full border border-white/10 bg-white/5 p-3 text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/40 hover:bg-yellow-400/10 hover:text-yellow-400"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-yellow-400">
              Quick Links
            </h3>

            <ul className="space-y-4 text-sm text-gray-300">

              {['Home', 'About', 'Menu', 'Gallery', 'Contact'].map((item) => (

                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="group flex items-center gap-2 transition-all duration-300 hover:text-yellow-400"
                  >
                    <ChevronRight className="h-4 w-4 text-yellow-500 transition-transform duration-300 group-hover:translate-x-1" />

                    {item}
                  </a>
                </li>

              ))}

            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-yellow-400">
              Contact
            </h3>

            <div className="space-y-5 text-sm text-gray-300">

              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 text-yellow-400" />

                <p>
                  Hyderabad • Karimnagar • Warangal
                  <br />
                  Telangana, India
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-yellow-400" />

                <a
                  href="tel:+918008872112"
                  className="transition hover:text-yellow-400"
                >
                  +91 80088 72112
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-yellow-400" />

                <a
                  href="mailto:marketing.amogham@gmail.com"
                  className="transition hover:text-yellow-400 break-all"
                >
                  marketing.amogham@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Timing */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-yellow-400">
              Opening Hours
            </h3>

            <div className="rounded-3xl border border-yellow-500/10 bg-white/5 p-6 backdrop-blur-md">

              <div className="mb-4 flex items-center gap-3">
                <Clock className="h-5 w-5 text-yellow-400" />

                <span className="font-medium text-white">
                  Open Daily
                </span>
              </div>

              <div className="space-y-3 text-sm text-gray-300">

                {[
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday',
                  'Saturday',
                  'Sunday',
                ].map((day) => (

                  <div
                    key={day}
                    className="flex items-center justify-between border-b border-white/10 pb-2 last:border-none"
                  >
                    <span>{day}</span>

                    <span className="text-yellow-400">
                      11:45 AM — 11 PM
                    </span>
                  </div>

                ))}

              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-center md:flex-row md:text-left">

          <p className="text-sm text-gray-500">
            © 2026 Aranyam Jungle Restaurant. All rights reserved.
          </p>

          <p className="text-xs tracking-[0.25em] text-yellow-500/60 uppercase">
            Crafted With Cinematic Luxury Experience
          </p>

        </div>
      </div>
    </footer>
  );
}