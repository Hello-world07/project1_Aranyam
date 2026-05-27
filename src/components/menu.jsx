import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { Search, X } from 'lucide-react';

// ==================== MENU DATA ====================
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
  { id: 1, category: 'starters', veg: false, name: 'Chicken 65', desc: 'Crispy deep-fried chicken marinated in spices and curry leaves', price: 355, image: '/chicken65.jpg' },
  { id: 2, category: 'starters', veg: false, name: 'Tandoori Chicken', desc: 'Half chicken marinated in yogurt & spices, grilled in tandoor', price: 375, image: '/Tandoori Chicken.jpg' },
  { id: 3, category: 'starters', veg: false, name: 'Dragon Chicken', desc: 'Crispy chicken tossed in spicy dragon sauce with bell peppers', price: 355, image: '/Dragon Chicken.png' },
  { id: 4, category: 'starters', veg: true, name: 'Paneer Tikka', desc: 'Soft paneer cubes marinated in spiced yogurt, grilled to perfection', price: 348, image: '/Paneer Tikka.jpg' },
  { id: 5, category: 'starters', veg: true, name: 'Hara Bhara Kebab', desc: 'Spinach & pea patties infused with herbs and green chillies', price: 345, image: '/Hara Bhara Kebab.jpg' },
  { id: 6, category: 'starters', veg: false, name: 'Apollo Fish', desc: 'Fried fish tossed in tangy sauce with fresh herbs', price: 410, image: '/Apollo Fish.jpeg' },
  { id: 7, category: 'biryani', veg: false, name: 'Chicken Dum Biryani', desc: 'Slow-cooked aromatic basmati rice with tender chicken pieces', price: 375, image: '/Chicken Dum Biryani.png' },
  { id: 8, category: 'biryani', veg: false, name: 'Spl Chicken Biryani', desc: 'Our special biryani with hand-picked spices and succulent chicken', price: 415, image: '/Spl Chicken Biryani.jpg' },
  { id: 9, category: 'biryani', veg: false, name: 'Nalli Ghosh Biryani', desc: 'Rich mutton shank biryani slow-cooked with whole spices', price: 525, image: '/Nalli Ghosh Biryani.jpg' },
  { id: 10, category: 'biryani', veg: true, name: 'Paneer Biryani', desc: 'Fragrant basmati rice layered with spiced paneer and saffron', price: 355, image: '/Paneer Biryani.jpg' },
  { id: 11, category: 'biryani', veg: true, name: 'Guttivankaya Biryani', desc: 'Traditional stuffed brinjal biryani — a Telangana specialty', price: 335, image: '/Guttivankaya Biryani.jpg' },
  { id: 12, category: 'biryani', veg: false, name: 'Mutton Dum Biryani', desc: 'Tender mutton pieces cooked in dum style with aromatic spices', price: 460, image: '/MuttonDumBiryani.jpg' },
  { id: 13, category: 'maincourse', veg: false, name: 'Gongura Chicken Koora', desc: 'Tangy Andhra-style chicken curry made with sorrel leaves', price: 395, image: '/Gongura Chicken Koora.jpg' },
  { id: 14, category: 'maincourse', veg: false, name: 'Miryala Kodi Koora', desc: 'Fiery pepper chicken curry — a bold Telangana classic', price: 395, image: '/Miryala Kodi Koora.jpg' },
  { id: 15, category: 'maincourse', veg: true, name: 'Miryala Paneer Curry', desc: 'Paneer in a rich pepper-based South Indian gravy', price: 290, image: '/Miryala Paneer Curry.jpg' },
  { id: 16, category: 'maincourse', veg: false, name: 'Keema Fry', desc: 'Spiced minced meat cooked with onions, tomatoes and fresh herbs', price: 485, image: '/Kheema Frya.jpg' },
  { id: 17, category: 'maincourse', veg: true, name: 'Guttivankaya Curry', desc: 'Whole stuffed baby brinjals in a tangy peanut-sesame gravy', price: 290, image: '/Guttivankaya Curry.jpg' },
  { id: 19, category: 'breads', veg: true, name: 'Garlic Naan', desc: 'Soft leavened bread topped with garlic and butter, baked in tandoor', price: 75, image: '/Garlic Naan.jpg' },
  { id: 20, category: 'breads', veg: true, name: 'Paneer Kulcha', desc: 'Stuffed bread with spiced paneer filling, baked in tandoor', price: 80, image: '/Paneer Kulcha.jpg' },
  { id: 21, category: 'breads', veg: true, name: 'Roti Basket', desc: 'Assorted breads — a perfect mix of roti, naan and paratha', price: 220, image: '/Roti Basket.jpg' },
  { id: 22, category: 'breads', veg: true, name: 'Laccha Paratha', desc: 'Flaky multi-layered whole wheat paratha with a crispy texture', price: 80, image: '/Laccha Paratha.jpg' },
  { id: 23, category: 'desserts', veg: true, name: 'Gulab Jamun', desc: 'Soft milk-solid dumplings soaked in rose-flavored sugar syrup', price: 110, image: '/Gulab Jamun.jpg' },
  { id: 24, category: 'desserts', veg: true, name: 'Double Ka Meetha', desc: 'Hyderabadi bread pudding soaked in milk and garnished with dry fruits', price: 110, image: '/Double Ka Meetha.jpg' },
  { id: 25, category: 'desserts', veg: true, name: 'Shahi Tukda', desc: 'Royal bread dessert with condensed milk, saffron and pistachios', price: 110, image: '/Shahi Tukda.jpg' },
  { id: 27, category: 'beverages', veg: true, name: 'Virgin Mojito', desc: 'Fresh mint, lime and soda — light, cool and refreshing', price: 149, image: '/Virgin Mojito.jpg' },
  { id: 28, category: 'beverages', veg: true, name: 'Mango Shake', desc: 'Thick and creamy Alphonso mango shake — a tropical delight', price: 189, image: '/Mango Shake.jpg' },
  { id: 29, category: 'beverages', veg: true, name: 'Strawberry Delight', desc: 'Chilled strawberry mocktail with a hint of lemon and mint', price: 149, image: '/Strawberry Delight.jpg' },
  { id: 30, category: 'beverages', veg: true, name: 'Butter Milk', desc: 'Traditional spiced chaas — Plain or Masala', price: 99, image: '/Butter Milk.jpg' },
];

export default function Menu({ onBookTable }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [vegFilter, setVegFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const searchRef = useRef(null);

  const handleSearchChange = useCallback((e) => {
    setSearchQuery(e.target.value);
  }, []);

  const clearSearch = () => {
    setSearchQuery('');
    searchRef.current?.focus();
  };

  const resetAll = () => {
    setActiveCategory('all');
    setVegFilter('all');
    setSearchQuery('');
  };

  const filteredDishes = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return dishes.filter((dish) => {
      const matchCategory = activeCategory === 'all' || dish.category === activeCategory;
      const matchVeg = vegFilter === 'all' ||
        (vegFilter === 'veg' && dish.veg) ||
        (vegFilter === 'nonveg' && !dish.veg);
      const matchSearch = q === '' ||
        dish.name.toLowerCase().includes(q) ||
        dish.desc.toLowerCase().includes(q);
      return matchCategory && matchVeg && matchSearch;
    });
  }, [activeCategory, vegFilter, searchQuery]);

  const hasActiveFilters = activeCategory !== 'all' || vegFilter !== 'all' || searchQuery !== '';

  return (
    <>
      <section id="menu" className="relative py-24 overflow-hidden bg-jungle-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(46,158,46,0.07),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_100%_80%,rgba(212,160,23,0.05),transparent)]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-12">
            <p className="font-cormorant italic text-gold-400/70 text-base tracking-[0.3em] uppercase mb-3">Explore Our</p>
            <h2 className="font-cinzel text-4xl sm:text-5xl font-bold text-gold-400">Menu</h2>
            <div className="flex items-center justify-center gap-4 mt-5 mb-5">
              <span className="h-[1px] w-20 bg-gradient-to-r from-transparent to-gold-600/50" />
              <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
              <span className="h-[1px] w-20 bg-gradient-to-l from-transparent to-gold-600/50" />
            </div>
            <p className="font-cormorant text-jungle-100 text-xl sm:text-2xl tracking-wide max-w-xl mx-auto">
              From tandoor to dum — every dish tells a story of tradition and taste
            </p>
          </div>

          {/* Search */}
          <div className="max-w-xl mx-auto mb-6">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gold-500/70 group-focus-within:text-gold-400 transition-colors" />
              <input
                ref={searchRef}
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search dishes..."
                className="w-full pl-11 pr-11 py-3.5 bg-jungle-900/70 border border-jungle-600/50 rounded-full font-cormorant text-lg text-jungle-100 placeholder:text-jungle-400/60 focus:outline-none focus:border-gold-500/60 focus:bg-jungle-900/90 focus:shadow-[0_0_20px_rgba(212,160,23,0.15)] transition-all"
              />
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-jungle-600/60 hover:bg-gold-500/80 flex items-center justify-center"
                  aria-label="Clear search"
                >
                  <X className="w-3 h-3 text-jungle-100" />
                </button>
              )}
            </div>
          </div>

          {/* Veg Filters */}
          <div className="flex justify-center gap-3 mb-6">
            {vegFilters.map(({ id, label, dot }) => (
              <button
                key={id}
                onClick={() => setVegFilter(id)}
                className={`flex items-center gap-2 px-5 py-2 rounded-full font-cinzel text-xs tracking-widest uppercase transition-all ${
                  vegFilter === id
                    ? 'text-jungle-950 bg-gradient-to-r from-gold-500 to-gold-600 shadow-lg shadow-gold-500/50 font-bold scale-105'
                    : 'text-jungle-100 border border-jungle-600/50 hover:border-gold-500/50'
                }`}
              >
                {dot && <span className={`w-2.5 h-2.5 rounded-full ${dot === 'green' ? 'bg-green-400' : 'bg-red-500'}`} />}
                {label}
              </button>
            ))}
          </div>

          {/* ==================== CATEGORY TABS - SCROLL ON MOBILE, CENTERED ON DESKTOP ==================== */}
          <div className="mb-8">
            <div className="flex gap-3 sm:gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory 
                            lg:justify-center lg:overflow-x-visible lg:pb-0 -mx-2 px-2 lg:mx-0 lg:px-0">
              {categories.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => setActiveCategory(id)}
                  className={`
                    flex-shrink-0
                    relative
                    overflow-hidden
                    rounded-full
                    px-6 py-3
                    font-cinzel
                    text-sm
                    tracking-[0.16em]
                    uppercase
                    whitespace-nowrap
                    transition-all duration-300
                    active:scale-95
                    snap-start
                    ${
                      activeCategory === id
                        ? `
                          bg-gradient-to-r from-gold-500 via-amber-400 to-gold-600
                          text-jungle-950
                          shadow-[0_0_24px_rgba(212,160,23,0.38)]
                          font-bold
                          scale-[1.03]
                        `
                        : `
                          border border-jungle-600/50
                          bg-jungle-900/40
                          text-jungle-100
                          hover:border-gold-500/50
                          hover:bg-jungle-800/50
                          hover:text-gold-300
                        `
                    }
                  `}
                >
                  <span className="relative z-10">{label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Results */}
          <div className="flex justify-between mb-8 px-1">
            <p className="font-cormorant text-jungle-300">
              {filteredDishes.length} {filteredDishes.length === 1 ? 'dish' : 'dishes'} found
            </p>
            {hasActiveFilters && (
              <button
                onClick={resetAll}
                className="text-jungle-400 hover:text-gold-400 flex items-center gap-1 text-sm"
              >
                <X className="w-3.5 h-3.5" /> Reset
              </button>
            )}
          </div>

          {/* Dishes Grid */}
          {filteredDishes.length === 0 ? (
            <div className="text-center py-20">
              <Search className="w-16 h-16 mx-auto text-jungle-500 mb-4" />
              <p className="text-xl text-gold-400/70">No dishes found</p>
              <button
                onClick={resetAll}
                className="mt-6 px-8 py-3 bg-gold-500 text-jungle-950 rounded-full font-bold"
              >
                Show All
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDishes.map((dish) => (
                <div
                  key={dish.id}
                  className="group relative rounded-3xl overflow-hidden bg-jungle-900 border border-jungle-700/70 hover:border-gold-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/60"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={dish.image}
                      alt={`${dish.name} - ${dish.desc}`}
                      loading="lazy"
                      className="w-full h-full object-cover transition-all duration-[800ms] ease-out group-hover:scale-[1.08]"
                      style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', transform: 'translateZ(0)' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-jungle-950 via-jungle-950/60 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
                    <div className="absolute top-4 left-4">
                      <div className={`w-6 h-6 rounded border-2 flex items-center justify-center bg-black/70 ${dish.veg ? 'border-green-400' : 'border-red-500'}`}>
                        <div className={`w-3 h-3 rounded-full ${dish.veg ? 'bg-green-400' : 'bg-red-500'}`} />
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="font-cinzel font-bold text-sm bg-gradient-to-br from-gold-400 to-amber-500 text-jungle-950 px-4 py-1.5 rounded-full shadow-lg">
                        ₹{dish.price}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-cinzel text-xl text-gold-300 group-hover:text-gold-100 transition-colors">
                      {dish.name}
                    </h3>
                    <p className="mt-2 text-jungle-100/80 text-[15px] leading-relaxed line-clamp-2">
                      {dish.desc}
                    </p>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform origin-center" />
                </div>
              ))}
            </div>
          )}

          {/* CTA */}
          {filteredDishes.length > 0 && (
            <div className="text-center mt-16">
              <button
                onClick={onBookTable}
                className="group relative px-10 py-5 bg-gradient-to-r from-gold-500 via-amber-400 to-gold-600 text-jungle-950 font-cinzel tracking-widest text-sm uppercase rounded-2xl overflow-hidden hover:scale-105 active:scale-95 transition-all shadow-xl shadow-gold-500/30"
              >
                Reserve Your Table
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}