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

  const founders = [
    {
      name: 'Rakesh Reddy',
      image: '/founder1.jpg',
    },
    {
      name: 'Arun Kumar K',
      image: '/founder2.jpg',
    },
    {
      name: 'Bhuvan B',
      image: '/founder3.jpg',
    },
    {
      name: 'Sandeep Goud',
      image: '/founder4.jpg',
    },
  ];

  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        bg-jungle-950
        py-20
        sm:py-24
        lg:py-28
      "
    >
      {/* ───────────────── PREMIUM MENU-LIKE BACKGROUND ───────────────── */}

      {/* Main Jungle Base */}
      <div className="absolute inset-0 bg-jungle-950" />

      {/* Top Ambient Green Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(46,158,46,0.07),transparent)]" />

      {/* Bottom Gold Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_100%_80%,rgba(212,160,23,0.05),transparent)]" />

      {/* Extra Cinematic Depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20" />

      {/* ───────────────── CONTENT ───────────────── */}

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-14 text-center lg:mb-16">

          <p className="mb-3 font-cormorant text-base italic uppercase tracking-[0.3em] text-gold-400/60">
            Who We Are
          </p>

          <h2
            className="font-cinzel text-4xl font-bold text-gold-400 sm:text-5xl"
            style={{
              textShadow: '0 0 30px rgba(212,160,23,0.35)',
            }}
          >
            Our Story
          </h2>

          <div className="mt-5 flex items-center justify-center gap-4">
            <span className="h-px w-20 bg-gradient-to-r from-transparent to-gold-600/50" />
            <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
            <span className="h-px w-20 bg-gradient-to-l from-transparent to-gold-600/50" />
          </div>
        </div>

        {/* Main Content */}
        <div className="mb-20 grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* Image */}
          <div className="relative w-full group">

            <div
              className="
                relative
                overflow-hidden
                rounded-3xl
                border
                border-gold-600/20
                bg-black/30
                shadow-[0_10px_40px_rgba(0,0,0,0.55)]
              "
            >
              {/* Exact Ratio */}
              <div className="aspect-[3/2] w-full">

                <img
                  src="/logo1.png"
                  alt="Aranyam Restaurant"
                  loading="lazy"
                  decoding="async"
                  className="
                    h-full
                    w-full
                    object-contain
                    object-center
                    transition-transform
                    duration-700
                    will-change-transform
                    group-hover:scale-[1.02]
                  "
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />

              {/* Mobile Branding */}
              <div className="absolute bottom-0 left-0 right-0 px-4 py-4 lg:hidden">
                <p className="text-center font-cinzel text-xs uppercase tracking-[0.2em] text-gold-400">
                  అరణ్యం — Aranyam
                </p>
              </div>
            </div>

            {/* Premium Corners */}
            <div
              className="
                absolute
                -left-2
                -top-2
                h-10
                w-10
                rounded-tl-lg
                border-l-2
                border-t-2
                border-gold-500/50
              "
              aria-hidden="true"
            />

            <div
              className="
                absolute
                -bottom-2
                -right-2
                h-10
                w-10
                rounded-br-lg
                border-b-2
                border-r-2
                border-gold-500/50
              "
              aria-hidden="true"
            />
          </div>

          {/* Text Content */}
          <div className="flex flex-col gap-6">

            <div
              className="
                select-none
                font-cormorant
                text-6xl
                leading-none
                text-gold-500/20
                sm:text-7xl
                lg:text-8xl
              "
              aria-hidden="true"
            >
              "
            </div>

            <p className="font-cormorant text-lg italic leading-loose tracking-wide text-white sm:text-xl lg:text-2xl">
              Aranyam was born from a shared dream — to create a destination where
              <span className="font-semibold text-gold-400">
                {' '}food, nature, and celebration{' '}
              </span>
              become one.
            </p>

            <div className="h-px w-14 bg-gradient-to-r from-gold-500 to-transparent" />

            <p className="font-cormorant text-base leading-loose tracking-wide text-jungle-100 sm:text-lg lg:text-xl">
              Four passionate individuals from diverse backgrounds came together
              with a single vision — to
              <span className="font-semibold text-gold-400">
                {' '}redefine dining in Telangana.
              </span>

              Since opening our first branch in Hanamkonda in December 2023,
              we have grown across the state, each location becoming a new chapter
              of the same wild story.
            </p>

            <div className="h-px w-14 bg-gradient-to-r from-gold-500 to-transparent" />

            <p className="font-cormorant text-base italic leading-loose tracking-wide text-gold-400 sm:text-lg lg:text-xl">
              Every corner of Aranyam tells that story.
            </p>

            {/* Locations */}
            <div className="mt-2 grid grid-cols-3 gap-3 sm:gap-4">

              {locations.map(({ city, desc }) => (
                <div
                  key={city}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-2xl
                    border
                    border-gold-600/20
                    bg-black/30
                    px-3
                    py-4
                    text-center
                    transition-all
                    duration-300
                    hover:border-gold-500/50
                  "
                >
                  <div
                    className="
                      absolute
                      inset-x-0
                      bottom-0
                      h-px
                      origin-center
                      scale-x-0
                      bg-gradient-to-r
                      from-transparent
                      via-gold-500
                      to-transparent
                      transition-transform
                      duration-500
                      group-hover:scale-x-100
                    "
                    aria-hidden="true"
                  />

                  <MapPin
                    className="
                      mx-auto
                      mb-2
                      h-4
                      w-4
                      text-gold-500
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    "
                    aria-hidden="true"
                  />

                  <p className="font-cinzel text-xs font-semibold uppercase tracking-[0.15em] text-gold-400">
                    {city}
                  </p>

                  <p className="mt-1 font-cormorant text-xs italic tracking-wide text-jungle-200/70">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mb-20 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">

          {stats.map(({ number, label }) => (
            <div
              key={label}
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-gold-600/20
                bg-black/30
                px-4
                py-6
                text-center
                transition-all
                duration-300
                hover:border-gold-500/50
              "
            >
              <div
                className="
                  absolute
                  inset-x-0
                  bottom-0
                  h-px
                  origin-center
                  scale-x-0
                  bg-gradient-to-r
                  from-transparent
                  via-gold-500
                  to-transparent
                  transition-transform
                  duration-500
                  group-hover:scale-x-100
                "
                aria-hidden="true"
              />

              <p
                className="
                  mb-2
                  font-cinzel
                  text-2xl
                  font-bold
                  text-gold-400
                  sm:text-3xl
                  lg:text-4xl
                "
                style={{
                  textShadow: '0 0 18px rgba(212,160,23,0.45)',
                }}
              >
                {number}
              </p>

              <p className="font-cormorant text-xs uppercase tracking-[0.2em] text-jungle-200/80 sm:text-sm">
                {label}
              </p>
            </div>
          ))}
        </div>

        {/* Team */}
        <div>

          {/* Team Heading */}
          <div className="mb-14 text-center">

            <p className="mb-3 font-cormorant text-base italic uppercase tracking-[0.3em] text-gold-400/60">
              The Minds Behind Aranyam
            </p>

            <h3
              className="font-cinzel text-3xl font-bold text-gold-400 sm:text-4xl lg:text-5xl"
              style={{
                textShadow: '0 0 30px rgba(212,160,23,0.35)',
              }}
            >
              Meet Our Team
            </h3>

            <div className="mt-6 flex items-center justify-center gap-4">
              <span className="h-px w-20 bg-gradient-to-r from-transparent to-gold-600/50" />
              <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
              <span className="h-px w-20 bg-gradient-to-l from-transparent to-gold-600/50" />
            </div>
          </div>

          {/* Founder Cards */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {founders.map((founder) => (
              <article
                key={founder.name}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-gold-600/20
                  bg-black/30
                  transition-all
                  duration-500
                  hover:border-gold-500/50
                "
              >
                <div className="relative overflow-hidden">

                  <div className="aspect-[4/5] overflow-hidden">

                    <img
                      src={founder.image}
                      alt={founder.name}
                      loading="lazy"
                      decoding="async"
                      className="
                        h-full
                        w-full
                        object-cover
                        object-top
                        transition-transform
                        duration-700
                        will-change-transform
                        group-hover:scale-[1.04]
                      "
                    />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 text-center">

                  <h4 className="font-cinzel text-xl tracking-wide text-white">
                    {founder.name}
                  </h4>

                  <div
                    className="
                      mx-auto
                      mt-4
                      h-px
                      w-16
                      origin-center
                      scale-x-0
                      bg-gradient-to-r
                      from-transparent
                      via-gold-500
                      to-transparent
                      transition-transform
                      duration-500
                      group-hover:scale-x-100
                    "
                    aria-hidden="true"
                  />
                </div>
              </article>
            ))}
          </div>

          {/* Quote */}
          <div className="mt-16 text-center">
            <p className="font-cormorant text-xl italic tracking-wide text-gold-400 sm:text-2xl">
              “Every experience at Aranyam begins with passion and ends with memories.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}