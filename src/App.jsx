import Navbar from './components/Navbar';
import About from './components/About';
import Menu from './components/Menu';
import Gallery from './components/Gallery';   // ← New Import
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-jungle-950 scroll-smooth">
      <Navbar />

      {/* ─── Hero Section ─── */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/hero.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-jungle-950/60 via-transparent to-jungle-950/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(46,158,46,0.1),transparent)]" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto animate-fade-in-down">
          <p className="font-cormorant italic text-gold-400/70 text-lg tracking-[0.3em] uppercase mb-4">
            Welcome to
          </p>
          <h1
            className="font-cinzel text-6xl sm:text-7xl md:text-8xl font-bold text-gold-400 mb-4"
            style={{ textShadow: '0 0 40px rgba(212,160,23,0.4), 0 0 80px rgba(212,160,23,0.15)' }}
          >
            ARANYAM
          </h1>
          <p className="font-cormorant text-jungle-200/70 text-xl sm:text-2xl tracking-[0.2em] uppercase mb-2">
            The Jungle Theme Restaurant
          </p>

          <div className="flex items-center justify-center gap-4 mt-4 mb-10">
            <span className="h-[1px] w-16 bg-gradient-to-r from-transparent to-gold-600/50" />
            <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
            <span className="h-[1px] w-16 bg-gradient-to-l from-transparent to-gold-600/50" />
          </div>

          <p className="font-cormorant text-jungle-100/85 text-xl sm:text-2xl max-w-2xl mx-auto leading-loose tracking-wide mb-10">
            At Aranyam, every meal is a journey into the wild. Surrounded by trees, waterfalls, and cave-style seating, we serve handpicked dishes that celebrate both tradition and taste.
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 relative overflow-hidden
              px-8 py-4 rounded-full font-cinzel text-sm tracking-[0.2em] uppercase
              text-jungle-950 font-bold
              bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600
              shadow-[0_0_24px_rgba(212,160,23,0.5)]
              hover:shadow-[0_0_40px_rgba(212,160,23,0.8)]
              transition-all duration-300 hover:scale-[1.05] active:scale-[0.97] group"
          >
            <span
              className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.35) 50%, transparent 60%)',
                backgroundSize: '200% 100%',
                animation: 'shimmer 1.5s linear infinite',
              }}
            />
            <span className="relative z-10">Book a Table</span>
          </a>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-jungle-950 to-transparent" />
      </section>

      {/* ─── About ─── */}
      <About />

      {/* ─── Menu ─── */}
      <Menu />

      {/* ─── Gallery ─── */}
      <Gallery />

      {/* ─── Contact ─── */}
      <Contact />
    </div>
  );
}

export default App;