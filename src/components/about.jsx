import { MapPin } from 'lucide-react';

export default function About() {
  const stats = [
    { number: '2023', label: 'Founded' },
    { number: '3', label: 'Locations' },
    { number: '4', label: 'Founders' },
    { number: '100+', label: 'Dishes' },
  ];

  const locations = [
    { city: 'Warangal', desc: 'Our Flagship' },
    { city: 'Karimnagar', desc: 'City of Heritage' },
    { city: 'Hyderabad', desc: 'The Capital' },
  ];

  return (
    <section
      id="about"
      className="relative py-24 overflow-hidden"
    >
      {/* ── Background photo ── */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/logo2.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div className="absolute inset-0 bg-black/75" />
      <div className="absolute inset-0 bg-gradient-to-b from-jungle-950/90 via-transparent to-jungle-950/90" />
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-jungle-950 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-jungle-950 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section heading ── */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="font-cormorant italic text-gold-400/60 text-base tracking-[0.3em] uppercase mb-3">
            Who We Are
          </p>
          <h2
            className="font-cinzel text-4xl sm:text-5xl font-bold text-gold-400"
            style={{ textShadow: '0 0 30px rgba(212,160,23,0.4)' }}
          >
            Our Story
          </h2>
          <div className="flex items-center justify-center gap-4 mt-5">
            <span className="h-[1px] w-20 bg-gradient-to-r from-transparent to-gold-600/50" />
            <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
            <span className="h-[1px] w-20 bg-gradient-to-l from-transparent to-gold-600/50" />
          </div>
        </div>

        {/* ── Main content ── */}
        {/* Mobile: stacked | Desktop: side by side */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16 lg:mb-20">

          {/* ── Image ── */}
          {/* Mobile: full width, cinematic wide | Desktop: tall left column */}
          <div className="relative group w-full">
            <div className="absolute -inset-1 sm:-inset-2 rounded-2xl bg-gold-500/10 blur-xl group-hover:bg-gold-500/20 transition-all duration-700" />
            <div className="relative rounded-2xl overflow-hidden border-2 border-gold-600/30 shadow-[0_8px_40px_rgba(0,0,0,0.7)] group-hover:border-gold-500/50 transition-all duration-500">
              <img
                src="/logo1.png"
                alt="Aranyam Telugu signage"
                className="w-full h-56 sm:h-72 lg:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Bottom gradient on image */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              {/* Image caption — visible on mobile only */}
              <div className="absolute bottom-0 left-0 right-0 px-4 py-3 lg:hidden">
                <p className="font-cinzel text-xs tracking-[0.2em] text-gold-400 uppercase text-center">
                  అరణ్యం — Aranyam
                </p>
              </div>
            </div>
            {/* Corner accents */}
            <div className="absolute -top-1.5 -left-1.5 sm:-top-2 sm:-left-2 w-7 h-7 sm:w-10 sm:h-10 border-t-2 border-l-2 border-gold-500/60 rounded-tl-lg" />
            <div className="absolute -bottom-1.5 -right-1.5 sm:-bottom-2 sm:-right-2 w-7 h-7 sm:w-10 sm:h-10 border-b-2 border-r-2 border-gold-500/60 rounded-br-lg" />
          </div>

          {/* ── Text content ── */}
          <div className="flex flex-col gap-5 lg:gap-7 w-full">

            {/* Decorative opening quote */}
            <div
              className="font-cormorant text-[70px] sm:text-[90px] lg:text-[100px] leading-none text-gold-500/25 select-none -mb-5 sm:-mb-7"
              aria-hidden="true"
            >
              "
            </div>

            {/* Paragraph 1 */}
            <p className="font-cormorant italic text-white text-lg sm:text-xl lg:text-2xl leading-loose tracking-wide">
              Aranyam was born from a shared dream — to create a destination where
              <span className="text-gold-400 font-semibold"> food, nature, and celebration </span>
              become one.
            </p>

            <div className="h-[1px] w-12 bg-gradient-to-r from-gold-500 to-transparent" />

            {/* Paragraph 2 */}
            <p className="font-cormorant text-jungle-100 text-base sm:text-lg lg:text-xl leading-loose tracking-wide">
              Four passionate individuals from diverse backgrounds came together with a single vision —
              to <span className="text-gold-400 font-semibold">redefine dining in Telangana.</span> Since
              opening our first branch in Hanamkonda in December 2023, we have grown across the state,
              each location a new chapter of the same wild story.
            </p>

            <div className="h-[1px] w-12 bg-gradient-to-r from-gold-500 to-transparent" />

            {/* Paragraph 3 */}
            <p className="font-cormorant italic text-gold-400 text-base sm:text-lg lg:text-xl leading-loose tracking-wide">
              Every corner of Aranyam tells that story.
            </p>

            {/* ── Location cards ── */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 mt-2">
              {locations.map(({ city, desc }) => (
                <div
                  key={city}
                  className="relative group/loc flex flex-col items-center text-center
                    px-2 sm:px-3 py-3 sm:py-4 rounded-xl
                    border border-gold-600/30 bg-black/50 backdrop-blur-sm
                    hover:border-gold-500/60 hover:bg-black/60
                    transition-all duration-300 overflow-hidden cursor-default"
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover/loc:opacity-100 transition-opacity duration-500"
                    style={{
                      background: 'linear-gradient(135deg, transparent 40%, rgba(212,160,23,0.08) 50%, transparent 60%)',
                    }}
                  />
                  <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold-500 mb-1.5 sm:mb-2 group-hover/loc:scale-110 transition-transform duration-300" />
                  <p className="font-cinzel text-[9px] sm:text-xs tracking-[0.1em] sm:tracking-[0.15em] text-gold-400 font-semibold uppercase leading-tight">
                    {city}
                  </p>
                  <p className="font-cormorant italic text-[9px] sm:text-xs text-jungle-200/70 mt-0.5 sm:mt-1 tracking-wide">
                    {desc}
                  </p>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover/loc:w-3/4 h-[1.5px] bg-gradient-to-r from-transparent via-gold-500 to-transparent transition-all duration-500" />
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* ── Stats row ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6">
          {stats.map(({ number, label }) => (
            <div
              key={label}
              className="relative text-center px-3 py-5 sm:p-6 rounded-2xl
                border border-gold-600/25 bg-black/50 backdrop-blur-sm
                hover:border-gold-500/50 hover:bg-black/60
                transition-all duration-300 group overflow-hidden"
            >
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(135deg, transparent 30%, rgba(212,160,23,0.07) 50%, transparent 70%)',
                }}
              />
              <p
                className="font-cinzel text-2xl sm:text-3xl lg:text-4xl font-bold text-gold-400 mb-1 sm:mb-2"
                style={{ textShadow: '0 0 20px rgba(212,160,23,0.5)' }}
              >
                {number}
              </p>
              <p className="font-cormorant text-xs sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] text-jungle-200/80 uppercase">
                {label}
              </p>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-1/2 h-[1.5px] bg-gradient-to-r from-transparent via-gold-500 to-transparent transition-all duration-500" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}