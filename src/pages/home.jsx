import About from '../components/about';
import Menu from '../components/menu';
import Gallery from '../components/gallery';
import Contact from '../components/contact';

function SectionDivider() {
  return (
    <div
      aria-hidden="true"
      className="flex items-center justify-center py-2 overflow-hidden"
    >
      <span className="h-px flex-1 max-w-[120px] bg-gradient-to-r from-transparent to-gold-700/25" />

      <svg
        width="28"
        height="14"
        viewBox="0 0 28 14"
        fill="none"
        className="mx-3 opacity-50"
      >
        <path
          d="M0 7 Q7 0 14 7 Q21 14 28 7"
          stroke="#d4a017"
          strokeWidth="0.8"
          fill="none"
        />

        <circle
          cx="14"
          cy="7"
          r="1.8"
          fill="#d4a017"
          opacity="0.7"
        />
      </svg>

      <span className="h-px flex-1 max-w-[120px] bg-gradient-to-l from-transparent to-gold-700/25" />
    </div>
  );
}

export default function Home({ onBookTable, HeroSection }) {
  return (
    <>
      <HeroSection onBookTable={onBookTable} />

      <SectionDivider />

      <About />

      <SectionDivider />

      <Menu onBookTable={onBookTable} />

      <SectionDivider />

      <Gallery />

      <SectionDivider />

      <Contact />
    </>
  );
}