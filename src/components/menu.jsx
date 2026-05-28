import React, {
  useState,
  useRef,
  useMemo,
  useEffect,
} from 'react';

import {
  Search,
  X,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

// ======================================================
// CONFIGURATION DATA MATRICES (28 Premium Curated Items)
// ======================================================
const CATEGORIES = [
  { id: 'all', label: 'All', icon: '✨' },
  { id: 'starters', label: 'Starters', icon: '🔥' },
  { id: 'biryani', label: 'Biryani', icon: '🍚' },
  { id: 'maincourse', label: 'Curries', icon: '🍛' },
  { id: 'breads', label: 'Breads', icon: '🫓' },
  { id: 'desserts', label: 'Desserts', icon: '🍮' },
  { id: 'beverages', label: 'Drinks', icon: '🥤' },
];

const DISHES = [
  // --- STARTERS ---
  { id: 1, category: 'starters', veg: false, name: 'Chicken 65', desc: 'Crispy deep-fried chicken marinated in custom hand-ground southern spices', price: 355, image: '/chicken65.jpg' },
  { id: 2, category: 'starters', veg: false, name: 'Dragon Chicken', desc: 'Crispy premium chicken strips tossed in spicy, tangy signature oriental dragon sauce', price: 355, image: '/Dragon Chicken.png' },
  { id: 3, category: 'starters', veg: true, name: 'Paneer Tikka', desc: 'Soft organic paneer cubes slow-grilled to perfection in a traditional clay tandoor oven', price: 348, image: '/Paneer Tikka.jpg' },
  { id: 10, category: 'starters', veg: false, name: 'Apollo Fish', desc: 'Tangy, spicy wok-tossed fish preparation finished with regional curry leaves', price: 410, image: '/Apollo Fish.jpeg' },
  { id: 11, category: 'starters', veg: true, name: 'Hara Bhara Kebab', desc: 'Delicately pan-fried medallions crafted from blended garden spinach, green peas, and local spices', price: 345, image: '/Hara Bhara Kebab.jpg' },

  // --- BIRYANI ---
  { id: 4, category: 'biryani', veg: false, name: 'Chicken Dum Biryani', desc: 'Slow-cooked aged basmati rice layered with succulent bone-in marinated chicken and aromatic saffron', price: 375, image: '/Chicken Dum Biryani.png' },
  { id: 5, category: 'biryani', veg: false, name: 'Nalli Ghosh Biryani', desc: 'Rich, luxurious lamb shank biryani prepared with select premium spices and long-grain basmati rice', price: 525, image: '/Nalli Ghosh Biryani.jpg' },
  { id: 12, category: 'biryani', veg: true, name: 'Paneer Biryani', desc: 'Fragrant saffron rice dum-cooked with marinated premium paneer cottage cheese blocks', price: 355, image: '/Paneer Biryani.jpg' },
  { id: 13, category: 'biryani', veg: false, name: 'Mutton Dum Biryani', desc: 'Highly aromatic authentic long-grain rice layered with tender chunks of seasoned goat meat', price: 460, image: '/ MuttonDumBiryani.jpg' },

  // --- MAIN COURSE / CURRIES ---
  { id: 6, category: 'maincourse', veg: false, name: 'Gongura Chicken', desc: 'Tangy and fiery classic Andhra style chicken curry simmered with authentic sorrel leaves', price: 395, image: '/Gongura Chicken Koora.jpg' },
  { id: 14, category: 'maincourse', veg: true, name: 'Paneer Curry', desc: 'Premium paneer cubes simmered in a dense, velvety freshly crushed black pepper sauce', price: 290, image: '/Miryala Paneer Curry.jpg' },

  // --- BREADS ---
  { id: 7, category: 'breads', veg: true, name: 'Garlic Naan', desc: 'Soft leavened tandoor-baked flatbread infused with minced garlic cloves and dynamic dairy butter', price: 75, image: '/Garlic Naan.jpg' },
  { id: 24, category: 'breads', veg: true, name: 'Butter Naan', desc: 'Classic fluffy refined-flour flatbread multi-layered with premium melted pure butter', price: 65, image: '/butter-naan.jpg' },
  { id: 25, category: 'breads', veg: true, name: 'Tandoori Roti', desc: 'Traditional whole wheat stone-ground flatbread baked along the clay walls of our open tandoor', price: 45, image: '/tandoori-roti.jpg' },

  // --- DESSERTS ---
  { id: 8, category: 'desserts', veg: true, name: 'Gulab Jamun', desc: 'Deep-fried golden milk-solid dumplings soaked in aromatic cardamom-infused warm sugar syrup', price: 110, image: '/Gulab Jamun.jpg' },
  { id: 15, category: 'desserts', veg: true, name: 'Shahi Tukda', desc: 'Royal Mughlai bread pudding crisp fried in ghee, topped with condensed rabri milk cream and pistachios', price: 110, image: '/Shahi Tukda.jpg' },

  // --- BEVERAGES ---
  { id: 9, category: 'beverages', veg: true, name: 'Virgin Mojito', desc: 'Refreshing muddled presentation of fresh garden mint leaves, lime wedges, simple syrup, and fizzy soda', price: 149, image: '/Virgin Mojito.jpg' },
  { id: 16, category: 'beverages', veg: true, name: 'Mango Shake', desc: 'Thick, creamy gourmet milkshake blended exclusively from sweet Alphonso mango pulps', price: 189, image: '/Mango Shake.jpg' },
  { id: 27, category: 'beverages', veg: true, name: 'Masala Spiced Buttermilk', desc: 'Traditional diluted churned yogurt cooling refresher infused with ginger, green chillies, and fresh coriander', price: 85, image: '/buttermilk.jpg' },
  { id: 28, category: 'beverages', veg: true, name: 'Fresh Lime Soda', desc: 'Zesty custom fresh-squeezed lime preparation available in your absolute preference of salt or sugar balance', price: 95, image: '/lime-soda.jpg' },
];

const VEG_FILTERS = [
  { id: 'all', label: 'All Palette' },
  { id: 'veg', label: 'Pure Veg' },
  { id: 'nonveg', label: 'Non-Veg' },
];

// ======================================================
// FOOD TYPE INDICATOR ICON (MATCHING SCREENSHOT)
// ======================================================
const VegIndicator = React.memo(({ veg }) => (
  <div 
    className={`p-0.5 rounded border bg-[#05140b]/90 shadow-md ${
      veg ? 'border-emerald-500/60' : 'border-rose-500/60'
    }`}
    aria-label={veg ? "Vegetarian" : "Non-Vegetarian"}
  >
    <div className={`w-2 h-2 rounded-sm ${veg ? 'bg-emerald-500' : 'bg-rose-500'}`} />
  </div>
));
VegIndicator.displayName = 'VegIndicator';

// ======================================================
// REFRESHED DUAL-LAYOUT RESPONSIVE PREMIUM CARD
// ======================================================
const DishCard = React.memo(({ dish }) => {
  return (
    <article className="group relative flex flex-row lg:flex-col overflow-hidden rounded-2xl border border-emerald-900/30 bg-[#06190e]/60 p-2 lg:p-0 hover:border-[#dfba6b]/40 hover:bg-[#0a2315] transition-all duration-300 shadow-lg">
      
      {/* Media Window - Square Aspect ratio on mobile, landscape wide on desktop */}
      <div className="relative w-24 h-24 sm:w-28 sm:h-28 lg:w-full lg:h-52 rounded-xl lg:rounded-b-none overflow-hidden flex-shrink-0">
        <img
          src={dish.image}
          alt={dish.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#05140b]/40 via-transparent to-transparent" />
        
        {/* Absolute float food marker badge */}
        <div className="absolute top-2 left-2 z-10">
          <VegIndicator veg={dish.veg} />
        </div>
      </div>

      {/* Description Meta Content Blocks (Zero Text Truncation Strategy) */}
      <div className="pl-4 pr-2 py-1 lg:p-5 flex flex-row lg:flex-col justify-between flex-grow gap-2 items-center lg:items-stretch">
        <div className="flex-grow">
          <h3 className="font-serif text-[15px] sm:text-base lg:text-lg text-emerald-100 font-bold tracking-wide transition-colors duration-300 group-hover:text-[#dfba6b] mb-1">
            {dish.name}
          </h3>
          <p className="text-emerald-200/50 text-xs sm:text-sm font-light leading-relaxed">
            {dish.desc}
          </p>
        </div>

        {/* Highlighted Right/Bottom Aligned Cost Badge Pill */}
        <div className="flex-shrink-0 ml-3 lg:ml-0 lg:mt-3">
          <span className="inline-block text-xs sm:text-sm font-bold text-[#dfba6b] whitespace-nowrap bg-[#dfba6b]/10 px-3 py-1 rounded-full border border-[#dfba6b]/20 min-w-[55px] text-center">
            ₹{dish.price}
          </span>
        </div>
      </div>
    </article>
  );
});
DishCard.displayName = 'DishCard';

// ======================================================
// COMPONENT MAIN SITE STRUCTURE
// ======================================================
export default function Menu() {
  const [activeCat, setActiveCat] = useState('all');
  const [vegFilter, setVegFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  const navContainerRef = useRef(null);

  // Filter processing implementation
  const filteredDishes = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return DISHES.filter((dish) => {
      if (activeCat !== 'all' && dish.category !== activeCat) return false;
      if (vegFilter === 'veg' && !dish.veg) return false;
      if (vegFilter === 'nonveg' && dish.veg) return false;
      
      return !query || 
        dish.name.toLowerCase().includes(query) || 
        dish.desc.toLowerCase().includes(query);
    });
  }, [activeCat, vegFilter, searchQuery]);

  // Counts grouping matrix
  const catCounts = useMemo(() => {
    const counts = { all: DISHES.length };
    DISHES.forEach((d) => {
      counts[d.category] = (counts[d.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Premium Carousel Indicator Engine
  const executeNavScroll = (direction) => {
    if (navContainerRef.current) {
      const offset = direction === 'left' ? -220 : 220;
      navContainerRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <section id="menu" className="relative h-screen flex flex-col overflow-hidden bg-[#05140b] text-emerald-50 antialiased selection:bg-[#dfba6b]/30">
      
      {/* Background Ambience Layers */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(223,186,107,0.12),transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(5,20,11,0.6))]" />
      </div>

      {/* ======================================================
          STICKY CONTEXT HEADER ENGINE
      ====================================================== */}
      <header className="relative z-10 flex-shrink-0 border-b border-emerald-900/30 bg-[#05130b]/95 backdrop-blur-xl">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-5">
          
          {/* Reference Recreated Premium Title Layout */}
          <div className="flex flex-col items-center justify-center mb-8 select-none">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-[0.18em] text-[#dfba6b] uppercase text-center">
              EXPLORE OUR MENU
            </h2>
            <div className="w-full max-w-[280px] sm:max-w-[420px] flex items-center justify-center mt-3 opacity-80">
              <div className="h-[1px] bg-gradient-to-r from-transparent to-[#dfba6b]/60 flex-grow" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#dfba6b] mx-3 shadow-[0_0_8px_#dfba6b]" />
              <div className="h-[1px] bg-gradient-to-l from-transparent to-[#dfba6b]/60 flex-grow" />
            </div>
          </div>

          {/* Filtering Layout Block */}
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center md:justify-between">
            
            {/* Search Implementation */}
            <div className="relative flex-grow max-w-lg">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-600" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search menu plates, items, ingredients..."
                className="w-full pl-10 pr-10 py-3 text-sm rounded-xl border border-emerald-900/60 bg-[#06190e]/80 text-emerald-100 placeholder:text-emerald-700/80 focus:outline-none focus:border-[#dfba6b]/50 focus:ring-1 focus:ring-[#dfba6b]/20 transition-all shadow-inner"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-0.5 rounded-full hover:bg-emerald-900/40 text-emerald-400 hover:text-emerald-100"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Segment Type Filter Pill Controls */}
            <div className="flex gap-1.5 p-1 rounded-xl bg-[#030d07]/90 border border-emerald-900/40 self-start md:self-auto shadow-md">
              {VEG_FILTERS.map((filter) => {
                const isSelected = vegFilter === filter.id;
                return (
                  <button
                    key={filter.id}
                    onClick={() => setVegFilter(filter.id)}
                    className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wider transition-all duration-200 whitespace-nowrap ${
                      isSelected 
                        ? 'bg-[#dfba6b]/10 border border-[#dfba6b]/30 text-[#dfba6b]' 
                        : 'text-emerald-400/70 hover:text-emerald-100 border border-transparent'
                    }`}
                  >
                    {filter.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ======================================================
            DYNAMIC BUTTON TRIGGERED HORIZONTAL NAV RAIL
        ====================================================== */}
        <div className="relative border-t border-emerald-900/20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center group">
          
          {/* Left Arrow Action Indicator */}
          <button
            onClick={() => executeNavScroll('left')}
            className="absolute left-1 z-20 p-1.5 rounded-full bg-[#05140b]/95 border border-emerald-800/60 text-[#dfba6b] shadow-xl transition-all duration-200 hover:bg-[#dfba6b] hover:text-[#05140b]"
            aria-label="Scroll Categories Left"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Hidden Scrollbar Category Hub */}
          <nav 
            ref={navContainerRef}
            className="flex overflow-x-auto scrollbar-none gap-1 py-1 -mb-[1px] w-full px-6 scroll-smooth"
          >
            {CATEGORIES.map((cat) => {
              const isActive = activeCat === cat.id;
              const hasCount = catCounts[cat.id] || 0;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCat(cat.id)}
                  className={`flex items-center gap-2.5 px-5 py-4 text-xs font-bold uppercase tracking-widest transition-all border-b-2 whitespace-nowrap ${
                    isActive
                      ? 'border-[#dfba6b] text-[#dfba6b]'
                      : 'border-transparent text-emerald-400/60 hover:text-emerald-100'
                  }`}
                >
                  <span className="text-sm">{cat.icon}</span>
                  <span>{cat.label}</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-sans transition-colors ${
                    isActive ? 'bg-[#dfba6b]/20 text-[#dfba6b]' : 'bg-[#040f08] text-emerald-700'
                  }`}>
                    {hasCount}
                  </span>
                </button>
              );
            })}
          </nav>

          {/* Right Arrow Action Indicator */}
          <button
            onClick={() => executeNavScroll('right')}
            className="absolute right-1 z-20 p-1.5 rounded-full bg-[#05140b]/95 border border-emerald-800/60 text-[#dfba6b] shadow-xl transition-all duration-200 hover:bg-[#dfba6b] hover:text-[#05140b]"
            aria-label="Scroll Categories Right"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* ======================================================
          GRID & LIST HYBRID MAIN VIEWPORT
      ====================================================== */}
      <main className="relative z-10 flex-grow overflow-y-auto custom-scrollbar">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          
          <div className="flex items-center justify-between mb-4 px-1">
            <span className="text-xs text-emerald-600/90 font-medium tracking-wide">
              Showing {filteredDishes.length} refined menu matches
            </span>
          </div>

          {/* Response Responsive Architecture: List format for Mobile, Grid for Desktop */}
          {filteredDishes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
              {filteredDishes.map((dish) => (
                <DishCard key={dish.id} dish={dish} />
              ))}
            </div>
          ) : (
            <div className="py-28 text-center rounded-2xl border border-dashed border-emerald-900/40 bg-[#06170d]/30">
              <p className="text-emerald-400/60 text-sm">No culinary items match your filter criteria.</p>
              <button 
                onClick={() => { setActiveCat('all'); setVegFilter('all'); setSearchQuery(''); }}
                className="mt-4 text-xs font-bold uppercase tracking-wider text-[#dfba6b] hover:underline"
              >
                Reset Layout Filters
              </button>
            </div>
          )}
        </div>
      </main>
    </section>
  );
}