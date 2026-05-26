import { useState, useEffect, useRef } from 'react';
import { ChevronUp, Search, X } from 'lucide-react';

const categories = [
  { id: 'all', label: 'All' },
  { id: 'starters', label: 'Starters' },
  { id: 'biryani', label: 'Biryani & Rice' },
  { id: 'maincourse', label: 'Main Course' },
  { id: 'breads', label: 'Breads' },
  { id: 'desserts', label: 'Desserts' },
  { id: 'beverages', label: 'Beverages' },
];

const vegFilters = [
  { id: 'all', label: 'All', dot: null },
  { id: 'veg', label: 'Veg', dot: 'green' },
  { id: 'nonveg', label: 'Non-Veg', dot: 'red' },
];

const dishes = [
  // Starters
  { id: 1, category: 'starters', veg: false, name: 'Chicken 65', desc: 'Crispy deep-fried chicken marinated in spices and curry leaves', price: 355, image: '/chicken65.jpg' },
  { id: 2, category: 'starters', veg: false, name: 'Tandoori Chicken', desc: 'Half chicken marinated in yogurt & spices, grilled in tandoor', price: 375, image: '/Tandoori Chicken.jpg' },
  { id: 3, category: 'starters', veg: false, name: 'Dragon Chicken', desc: 'Crispy chicken tossed in spicy dragon sauce with bell peppers', price: 355, image: '/Dragon Chicken.png' },
  { id: 4, category: 'starters', veg: true, name: 'Paneer Tikka', desc: 'Soft paneer cubes marinated in spiced yogurt, grilled to perfection', price: 348, image: '/Paneer Tikka.jpg' },
  { id: 5, category: 'starters', veg: true, name: 'Hara Bhara Kebab', desc: 'Spinach & pea patties infused with herbs and green chillies', price: 345, image: '/Hara Bhara Kebab.jpg' },
  { id: 6, category: 'starters', veg: false, name: 'Apollo Fish', desc: 'Fried fish tossed in tangy sauce with fresh herbs', price: 410, image: '/Apollo Fish.jpeg' },
  // Biryani & Rice
  { id: 7, category: 'biryani', veg: false, name: 'Chicken Dum Biryani', desc: 'Slow-cooked aromatic basmati rice with tender chicken pieces', price: 375, image: '/Chicken Dum Biryani.png' },
  { id: 8, category: 'biryani', veg: false, name: 'Spl Chicken Biryani', desc: 'Our special biryani with hand-picked spices and succulent chicken', price: 415, image: '/Spl Chicken Biryani.jpg' },
  { id: 9, category: 'biryani', veg: false, name: 'Nalli Ghosh Biryani', desc: 'Rich mutton shank biryani slow-cooked with whole spices', price: 525, image: '/Nalli Ghosh Biryani.jpg' },
  { id: 10, category: 'biryani', veg: true, name: 'Paneer Biryani', desc: 'Fragrant basmati rice layered with spiced paneer and saffron', price: 355, image: '/Paneer Biryani.jpg' },
  { id: 11, category: 'biryani', veg: true, name: 'Guttivankaya Biryani', desc: 'Traditional stuffed brinjal biryani — a Telangana specialty', price: 335, image: '/Guttivankaya Biryani.jpg' },
  { id: 12, category: 'biryani', veg: false, name: 'Mutton Dum Biryani', desc: 'Tender mutton pieces cooked in dum style with aromatic spices', price: 460, image: '/ MuttonDumBiryani.jpg' },
  // Main Course
  { id: 13, category: 'maincourse', veg: false, name: 'Gongura Chicken Koora', desc: 'Tangy Andhra-style chicken curry made with sorrel leaves', price: 395, image: '/Gongura Chicken Koora.jpg' },
  { id: 14, category: 'maincourse', veg: false, name: 'Miryala Kodi Koora', desc: 'Fiery pepper chicken curry — a bold Telangana classic', price: 395, image: '/Miryala Kodi Koora.jpg' },
  { id: 15, category: 'maincourse', veg: true, name: 'Miryala Paneer Curry', desc: 'Paneer in a rich pepper-based South Indian gravy', price: 290, image: '/Miryala Paneer Curry.jpg' },
  { id: 16, category: 'maincourse', veg: false, name: 'Kheema Frya', desc: 'Spiced minced meat cooked with onions, tomatoes and fresh herbs', price: 485, image: '/Kheema Frya.jpg' },
  { id: 17, category: 'maincourse', veg: true, name: 'Guttivankaya Curry', desc: 'Whole stuffed baby brinjals in a tangy peanut-sesame gravy', price: 290, image: '/Guttivankaya Curry.jpg' },
  // Breads
  { id: 19, category: 'breads', veg: true, name: 'Garlic Naan', desc: 'Soft leavened bread topped with garlic and butter, baked in tandoor', price: 75, image: '/Garlic Naan.jpg' },
  { id: 20, category: 'breads', veg: true, name: 'Paneer Kulcha', desc: 'Stuffed bread with spiced paneer filling, baked in tandoor', price: 80, image: '/Paneer Kulcha.jpg' },
  { id: 21, category: 'breads', veg: true, name: 'Roti Basket', desc: 'Assorted breads — a perfect mix of roti, naan and paratha', price: 220, image: '/Roti Basket.jpg' },
  { id: 22, category: 'breads', veg: true, name: 'Laccha Paratha', desc: 'Flaky multi-layered whole wheat paratha with a crispy texture', price: 80, image: '/Laccha Paratha.jpg' },
  // Desserts
  { id: 23, category: 'desserts', veg: true, name: 'Gulab Jamun', desc: 'Soft milk-solid dumplings soaked in rose-flavored sugar syrup', price: 110, image: '/Gulab Jamun.jpg' },
  { id: 24, category: 'desserts', veg: true, name: 'Double Ka Meetha', desc: 'Hyderabadi bread pudding soaked in milk and garnished with dry fruits', price: 110, image: '/Double Ka Meetha.jpg' },
  { id: 25, category: 'desserts', veg: true, name: 'Shahi Tukda', desc: 'Royal bread dessert with condensed milk, saffron and pistachios', price: 110, image: '/Shahi Tukda.jpg' },
  // Beverages
  { id: 27, category: 'beverages', veg: true, name: 'Virgin Mojito', desc: 'Fresh mint, lime and soda — light, cool and refreshing', price: 149, image: '/Virgin Mojito.jpg' },
  { id: 28, category: 'beverages', veg: true, name: 'Mango Shake', desc: 'Thick and creamy Alphonso mango shake — a tropical delight', price: 189, image: '/Mango Shake.jpg' },
  { id: 29, category: 'beverages', veg: true, name: 'Strawberry Delight', desc: 'Chilled strawberry mocktail with a hint of lemon and mint', price: 149, image: '/Strawberry Delight.jpg' },
  { id: 30, category: 'beverages', veg: true, name: 'Butter Milk', desc: 'Traditional spiced chaas — Plain or Masala', price: 99, image: '/Butter Milk.jpg' },
];

export default function Menu({ onBookTable }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [vegFilter, setVegFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const searchRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const clearSearch = () => {
    setSearchQuery('');
    searchRef.current?.focus();
  };

  const filtered = dishes.filter((dish) => {
    const matchCategory = activeCategory === 'all' || dish.category === activeCategory;
    const matchVeg =
      vegFilter === 'all' ||
      (vegFilter === 'veg' && dish.veg) ||
      (vegFilter === 'nonveg' && !dish.veg);
    const q = searchQuery.toLowerCase().trim();
    const matchSearch =
      q === '' ||
      dish.name.toLowerCase().includes(q) ||
      dish.desc.toLowerCase().includes(q);

    return matchCategory && matchVeg && matchSearch;
  });

  const hasActiveFilters = activeCategory !== 'all' || vegFilter !== 'all' || searchQuery !== '';

  const resetAll = () => {
    setActiveCategory('all');
    setVegFilter('all');
    setSearchQuery('');
  };

  return (
    <>
      <section id="menu" className="relative py-24 overflow-hidden bg-jungle-950">
        {/* Background gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(46,158,46,0.07),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_100%_80%,rgba(212,160,23,0.05),transparent)]" />
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-jungle-950 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-jungle-950 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <div className="text-center mb-12">
            <p className="font-cormorant italic text-gold-400/70 text-base tracking-[0.3em] uppercase mb-3">
              Explore Our
            </p>
            <h2 className="font-cinzel text-4xl sm:text-5xl font-bold text-gold-400" style={{ textShadow: '0 0 30px rgba(212,160,23,0.3)' }}>
              Menu
            </h2>
            <div className="flex items-center justify-center gap-4 mt-5 mb-5">
              <span className="h-[1px] w-20 bg-gradient-to-r from-transparent to-gold-600/50" />
              <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
              <span className="h-[1px] w-20 bg-gradient-to-l from-transparent to-gold-600/50" />
            </div>
            <p className="font-cormorant text-jungle-100 text-xl sm:text-2xl tracking-wide max-w-xl mx-auto leading-relaxed">
              From tandoor to dum — every dish tells a story of tradition and taste
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto mb-6">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gold-500/70 group-focus-within:text-gold-400 transition-colors duration-300" />
              <input
                ref={searchRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search dishes..."
                className="w-full pl-11 pr-11 py-3.5 bg-jungle-900/70 border border-jungle-600/50 rounded-full font-cormorant text-lg text-jungle-100 placeholder:text-jungle-400/60 focus:outline-none focus:border-gold-500/60 focus:bg-jungle-900/90 focus:shadow-[0_0_20px_rgba(212,160,23,0.15)] transition-all duration-300"
              />
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-jungle-600/60 hover:bg-gold-500/80 flex items-center justify-center transition-all duration-200 hover:scale-110"
                  aria-label="Clear search"
                >
                  <X className="w-3 h-3 text-jungle-100" />
                </button>
              )}
            </div>
          </div>

          {/* Veg / Non-Veg Filter Pills */}
          <div className="flex items-center justify-center gap-3 mb-6">
            {vegFilters.map(({ id, label, dot }) => (
              <button
                key={id}
                onClick={() => setVegFilter(id)}
                className={`flex items-center gap-2 px-5 py-2 rounded-full font-cinzel text-xs tracking-[0.12em] uppercase transition-all duration-300 ${
                  vegFilter === id
                    ? 'text-jungle-950 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 shadow-[0_0_16px_rgba(212,160,23,0.5)] font-bold scale-105'
                    : 'text-jungle-100 border border-jungle-600/50 bg-jungle-900/50 hover:text-gold-300 hover:border-gold-600/50'
                }`}
              >
                {dot && (
                  <span className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${dot === 'green' ? 'bg-green-400' : 'bg-red-500'}`} />
                )}
                {label}
              </button>
            ))}
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-3 mb-6" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {categories.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => setActiveCategory(id)}
                className={`relative flex-shrink-0 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full font-cinzel text-xs sm:text-sm tracking-[0.12em] uppercase transition-all duration-300 whitespace-nowrap ${
                  activeCategory === id
                    ? 'text-jungle-950 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 shadow-[0_0_16px_rgba(212,160,23,0.5)] font-bold scale-105'
                    : 'text-jungle-100 border border-jungle-600/50 bg-jungle-900/50 hover:text-gold-300 hover:border-gold-600/50'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Results count + Reset */}
          <div className="flex items-center justify-between mb-8 px-1">
            <p className="font-cormorant text-jungle-300 text-base sm:text-lg">
              {filtered.length === 0 ? (
                'No dishes found'
              ) : (
                <>
                  <span className="text-gold-400 font-semibold">{filtered.length}</span>{' '}
                  {filtered.length === 1 ? 'dish' : 'dishes'} found
                </>
              )}
            </p>
            {hasActiveFilters && (
              <button
                onClick={resetAll}
                className="flex items-center gap-1.5 font-cinzel text-xs tracking-[0.1em] uppercase text-jungle-400 hover:text-gold-400 transition-colors duration-200"
              >
                <X className="w-3 h-3" />
                Reset
              </button>
            )}
          </div>

          {/* Dishes Grid */}
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-jungle-900/60 border border-jungle-700/50 flex items-center justify-center">
                <Search className="w-7 h-7 text-jungle-500" />
              </div>
              <p className="font-cinzel text-gold-400/60 text-lg tracking-[0.15em] mb-2">No Dishes Found</p>
              <p className="font-cormorant text-jungle-400 text-lg">Try a different search or filter</p>
              <button
                onClick={resetAll}
                className="mt-6 px-6 py-2.5 rounded-full font-cinzel text-xs tracking-[0.15em] uppercase text-jungle-950 font-bold bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 shadow-[0_0_16px_rgba(212,160,23,0.4)] hover:shadow-[0_0_28px_rgba(212,160,23,0.7)] transition-all duration-300 hover:scale-105"
              >
                Show All Dishes
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {filtered.map((dish) => (
                <div
                  key={dish.id}
                  className="relative group rounded-2xl overflow-hidden border border-jungle-700/50 bg-jungle-900/70 hover:border-gold-600/50 transition-all duration-500 shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.7),0_0_20px_rgba(212,160,23,0.12)] hover:-translate-y-1"
                >
                  {/* Dish image */}
                  <div className="relative overflow-hidden h-48 sm:h-52 bg-jungle-900">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      style={{ backgroundColor: '#082808' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-jungle-950 via-jungle-950/30 to-transparent" />

                    {/* Veg / Non-veg Indicator */}
                    <div className="absolute top-3 left-3">
                      <div className={`w-5 h-5 rounded-sm border-2 flex items-center justify-center bg-black/80 ${dish.veg ? 'border-green-400' : 'border-red-500'}`}>
                        <div className={`w-2.5 h-2.5 rounded-full ${dish.veg ? 'bg-green-400' : 'bg-red-500'}`} />
                      </div>
                    </div>

                    {/* Price badge */}
                    <div className="absolute top-3 right-3">
                      <span className="font-cinzel text-xs font-bold text-jungle-950 bg-gradient-to-r from-gold-500 to-gold-600 px-3 py-1 rounded-full shadow-[0_0_12px_rgba(212,160,23,0.5)]">
                        ₹{dish.price}
                      </span>
                    </div>
                  </div>

                  {/* Card content - UPDATED */}
                  <div className="p-4 sm:p-5">
                    <h3
                      className="font-cinzel text-sm sm:text-base
                      tracking-[0.1em]
                      text-gold-400
                      font-semibold
                      mb-2
                      group-hover:text-gold-300
                      transition-colors duration-300"
                    >
                      {dish.name}
                    </h3>
                    <p
                      className="font-inter
                      text-jungle-100/90
                      text-sm sm:text-base
                      font-medium
                      leading-relaxed
                      tracking-wide
                      line-clamp-2"
                    >
                      {dish.desc}
                    </p>
                  </div>

                  {/* Bottom gold accent */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-3/4 h-[1.5px] bg-gradient-to-r from-transparent via-gold-500 to-transparent transition-all duration-500" />
                </div>
              ))}
            </div>
          )}

          {/* CTA */}
          {filtered.length > 0 && (
            <div className="text-center mt-14">
              <p className="font-cormorant text-jungle-100 text-lg sm:text-xl mb-6 tracking-wide">
                Explore 100+ dishes across all categories
              </p>
              <button
                onClick={onBookTable}
                className="inline-flex items-center gap-2 relative overflow-hidden px-8 py-4 rounded-full font-cinzel text-sm tracking-[0.2em] uppercase text-jungle-950 font-bold bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 shadow-[0_0_24px_rgba(212,160,23,0.4)] hover:shadow-[0_0_40px_rgba(212,160,23,0.7)] transition-all duration-300 hover:scale-[1.05] active:scale-[0.97] group"
              >
                <span
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.35) 50%, transparent 60%)',
                    backgroundSize: '200% 100%',
                    animation: 'shimmer 1.5s linear infinite',
                  }}
                />
                <span className="relative z-10">Reserve Your Table</span>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 text-jungle-950 flex items-center justify-center shadow-[0_0_20px_rgba(212,160,23,0.5)] hover:shadow-[0_0_32px_rgba(212,160,23,0.8)] hover:scale-110 active:scale-95 transition-all duration-300 ${
          showScrollTop ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <ChevronUp className="w-5 h-5 stroke-[2.5]" />
      </button>
    </>
  );
}