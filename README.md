# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.





# ARANYAM — Jungle Theme Restaurant
## Complete Website Redesign Documentation
### Built by: Pranith Konda | Stack: React + Vite + Tailwind CSS v3

---

## 🌿 Project Overview

**Client:** Aranyam Jungle Theme Restaurant — A Unit of Amogham Foods  
**Type:** Unsolicited redesign (freelance pitch)  
**Goal:** Redesign the existing website to impress the client and win the project  
**Stack:** React + Vite + Tailwind CSS v3 + Lucide React Icons  
**Fonts:** Cinzel (headings/nav) + Cormorant Garamond (body/taglines) — Google Fonts  

---

## 🎨 Design System

### Color Palette (tailwind.config.js)
| Token | Hex | Usage |
|---|---|---|
| `jungle-950` | `#041504` | Background base |
| `jungle-900` | `#082808` | Card backgrounds |
| `jungle-800` | `#0d400d` | Borders, hover states |
| `jungle-300` | `#7dd97d` | Subtle text |
| `gold-400` | `#f9c74f` | Primary gold |
| `gold-500` | `#d4a017` | Gold accents |
| `gold-600` | `#b8860b` | Gold borders |
| `earth-800` | `#3a1f0a` | Mobile menu gradient |

### Typography
- **Cinzel** — All headings, nav links, buttons, labels
- **Cormorant Garamond** — Body text, descriptions, taglines, quotes
- **Inter** — Utility text (fallback)

### Design Tokens
- Gold glow: `shadow-[0_0_24px_rgba(212,160,23,0.4)]`
- Gold underline: `bg-gradient-to-r from-transparent via-gold-500 to-transparent`
- Card border: `border border-jungle-700/50`
- Backdrop: `bg-black/55 backdrop-blur-sm`

---

## 📁 Project Structure

```
ARANYAM/
├── public/
│   ├── logo.png          ← Restaurant logo (white bg, kept as-is per client)
│   ├── logo2.png         ← About section background (restaurant interior)
│   ├── logo3.jpg         ← Menu section background (bamboo + lanterns)
│   ├── hero.jpg          ← Hero background photo
│   ├── about.jpg         ← Telugu script signage photo
│   ├── gallery1-4.jpg    ← Gallery photos
│   ├── video1.mp4        ← Founder story 1
│   ├── video2.mp4        ← Founder story 2
│   ├── video3.mp4        ← M.M. Keeravani celebrity review ⭐
│   ├── video4.mp4        ← Making/behind the scenes 1
│   └── video5.mp4        ← Making/behind the scenes 2
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx    ✅ Built
│   │   ├── About.jsx     ✅ Built
│   │   ├── Menu.jsx      ✅ Built
│   │   ├── Gallery.jsx   ✅ Built
│   │   └── Contact.jsx   ✅ Built
│   ├── App.jsx           ✅ Built
│   ├── main.jsx          ✅ Built
│   └── index.css         ✅ Built
│
├── tailwind.config.js    ✅ Custom colors + fonts + animations
├── vite.config.js        ✅ React plugin
├── postcss.config.js     ✅ Tailwind v3 + autoprefixer
└── package.json
```

---

## 🧭 Navbar Component
**File:** `src/components/Navbar.jsx`

### Features
- Fixed top navigation with scroll detection
- Shrinks on scroll: `py-4` → `py-2`, logo `68px` → `52px`
- Gold top accent line (1.5px gradient)
- Gold bottom accent line (appears on scroll)
- Active link tracking with gold underline + glow dot animation
- Smooth scroll to sections on click

### Logo Treatment
- White background logo kept as-is (client request)
- Styled as `rounded-xl` card with gold border `border-gold-600/40`
- Gold glow on hover: `shadow-[0_0_24px_rgba(212,160,23,0.45)]`
- Scales from 68px → 52px on scroll

### Brand Text (next to logo)
```
ARANYAM              ← Cinzel, gold-400, bold, text-shadow glow
JUNGLE THEME RESTAURANT  ← Cinzel, gold-500, semibold, 8px
A UNIT OF AMOGHAM FOODS  ← Cormorant, jungle-200/75, 10px
```

### Nav Links
```
Home | About | Menu | Gallery | Contact
```
- Cinzel font, tracked uppercase
- Active: `text-gold-400` + animated underline slides from center
- Hover: `text-gold-300` + underline preview
- Gold dot below active link

### Mobile Menu
- Hamburger → X crossfade animation
- Full-height right panel slides in from right
- `cubic-bezier(0.16,1,0.3,1)` ease
- Staggered link entries (120ms + 70ms per item)
- Gold accent bar on active link
- "Book a Table" CTA at bottom of panel
- Body scroll locked when open

---

## 🌿 About Section
**File:** `src/components/About.jsx`

### Background
- Restaurant interior photo (`/logo2.png`) — bamboo, elephant, arch
- `bg-black/75` dark overlay
- Top/bottom gradient fades blend with surrounding sections

### Layout
- **Desktop:** Left image + Right text (2-column grid)
- **Mobile:** Stacked — full-width image (h-56) → text below

### Image Treatment
- Full-width on mobile: `h-56 sm:h-72 lg:h-[480px]`
- Gold corner accents (decorative L-brackets)
- `group-hover:scale-105` zoom effect
- Gold border: `border-gold-600/30`
- Telugu caption overlay on mobile: *"అరణ్యం — Aranyam"*

### Story Text (3 paragraphs)
```
Large decorative " quote mark (gold-500/25)

P1: "Aranyam was born from a shared dream — to create a destination 
    where food, nature, and celebration become one."
    [food, nature, and celebration] highlighted in gold-400

P2: "Four passionate individuals... redefine dining in Telangana."
    [redefine dining in Telangana] highlighted in gold-400

P3 (closer): "Every corner of Aranyam tells that story." — italic gold
```

### Location Cards (3 cards)
| City | Tag |
|---|---|
| Warangal | Our Flagship |
| Karimnagar | City of Heritage |
| Hyderabad | The Capital |
- MapPin icon, Cinzel city name, Cormorant italic tag
- Gold underline slides in on hover

### Stats Row (4 cards)
| Stat | Value |
|---|---|
| Founded | 2023 |
| Locations | 3 |
| Founders | 4 |
| Dishes | 100+ |
- Frosted glass: `bg-black/50 backdrop-blur-sm`
- Gold number with text-shadow glow

---

## 🍽️ Menu Section
**File:** `src/components/Menu.jsx`

### Background
- Bamboo + lanterns restaurant photo (`/logo3.jpg`)
- `backgroundAttachment: 'fixed'` — parallax effect on desktop
- Falls back to scroll on iOS mobile
- `bg-black/70` overlay for readability

### Category Tabs (7 tabs)
```
All | Starters | Biryani & Rice | Main Course | Breads | Desserts | Beverages
```
- Active: Gold gradient pill, `scale-105`
- Inactive: `text-white border border-white/30 bg-black/50 backdrop-blur-sm`
- Horizontal scroll on mobile (no scrollbar)

### Dishes (26 dishes across 6 categories)

#### Starters (6)
| Dish | Veg | Price |
|---|---|---|
| Chicken 65 | ❌ | ₹355 |
| Tandoori Chicken | ❌ | ₹375 |
| Dragon Chicken | ❌ | ₹355 |
| Paneer Tikka | ✅ | ₹348 |
| Hara Bhara Kebab | ✅ | ₹345 |
| Apollo Fish | ❌ | ₹410 |

#### Biryani & Rice (6)
| Dish | Veg | Price |
|---|---|---|
| Chicken Dum Biryani | ❌ | ₹375 |
| Spl Chicken Biryani | ❌ | ₹415 |
| Nalli Ghosh Biryani | ❌ | ₹525 |
| Paneer Biryani | ✅ | ₹355 |
| Guttivankaya Biryani | ✅ | ₹335 |
| Mutton Dum Biryani | ❌ | ₹460 |

#### Main Course (5)
| Dish | Veg | Price |
|---|---|---|
| Gongura Chicken Koora | ❌ | ₹395 |
| Miryala Kodi Koora | ❌ | ₹395 |
| Miryala Paneer Curry | ✅ | ₹290 |
| Kheema Frya | ❌ | ₹485 |
| Guttivankaya Curry | ✅ | ₹290 |

#### Breads (4)
| Dish | Price |
|---|---|
| Garlic Naan | ₹75 |
| Paneer Kulcha | ₹80 |
| Roti Basket | ₹220 |
| Laccha Paratha | ₹80 |

#### Desserts (3)
| Dish | Price |
|---|---|
| Gulab Jamun | ₹110 |
| Double Ka Meetha | ₹110 |
| Shahi Tukda | ₹110 |

#### Beverages (4)
| Dish | Price |
|---|---|
| Virgin Mojito | ₹149 |
| Mango Shake | ₹189 |
| Strawberry Delight | ₹149 |
| Butter Milk | ₹99 |

### Dish Card Design
- `loading="lazy" decoding="async"` — fast loading on slow internet
- Dark bg placeholder while loading: `bg-jungle-950` (#082808)
- Veg/Non-veg indicator: **LEFT** top corner (Indian standard green/red dot)
- Price badge: **RIGHT** top corner (gold gradient pill)
- Dish name: Cinzel gold-400
- Description: Cormorant text-white (fully visible)
- Hover: lift `-translate-y-1` + gold border glow
- Gold underline slides from center on hover

### Scroll to Top Button
- Fixed bottom-right corner
- Appears after scrolling 400px
- Gold gradient, `ChevronUp` icon
- Fade + slide animation

---

## 🖼️ Gallery Section
**File:** `src/components/Gallery.jsx`

### Part 1 — Photo Grid

#### Desktop (CSS Grid, 520px height)
```
┌──────────┬──────┬──────┐
│          │ img2 │ img3 │
│  img1    ├──────┴──────┤
│ (tall    │  img4       │
│  2 rows) │  (wide 2col)│
└──────────┴─────────────┘
```

#### Mobile (2-column)
```
┌─────────────────────┐
│     img1 (full)     │ ← col-span-2, h-48
├──────────┬──────────┤
│   img2   │   img3   │ ← h-36 each
├──────────┴──────────┤
│        img4         │ ← h-36
└─────────────────────┘
```

### Lightbox
- Full screen overlay `bg-black/95`
- Prev/Next navigation with `ChevronLeft/Right`
- Photo counter: "1 / 4"
- Click outside to close

### Part 2 — Video Section

#### M.M. Keeravani Highlight Banner
- Gold gradient banner above video tabs
- "⭐ Celebrity Review" — Oscar-winning composer featured prominently
- This is the key credibility booster for the client pitch

#### Video Category Tabs
```
All | Founder Story | Celebrity Review | Behind the Scenes
```

#### Video Cards (9:16 vertical — Instagram format)
- `aspectRatio: '9/16'` — perfect for Instagram downloaded videos
- Click to play/pause
- Mute/unmute button (appears on hover)
- `preload="metadata"` — fast initial load
- Play button: gold gradient circle

#### Videos
| # | Title | Category |
|---|---|---|
| 1 | Our Vision | Founder Story |
| 2 | Our Journey | Founder Story |
| 3 | M.M. Keeravani Reviews Aranyam ⭐ | Celebrity Review |
| 4 | The Making | Behind the Scenes |
| 5 | From Wild to Plate | Behind the Scenes |

#### Grid Layout
- Mobile: 2 columns
- Tablet: 3 columns
- Desktop: 4-5 columns

---

## 📞 Contact Section
**File:** `src/components/Contact.jsx`

### Opening Hours Banner
- Centered card with Clock icon
- "Open Every Day — 11:30 AM – 11:00 PM"

### 3 Location Cards
| Location | Address | Phone |
|---|---|---|
| Warangal (Flagship) | 4th Floor, Fox Hills Complex, above Pantaloons, Nakkala Gutta, Hanamkonda, TG 506001 | +91 7330962111 |
| Hyderabad (The Capital) | 2nd Floor, CCPL Mall, Vimala Devi Nagar Colony, Anandbagh, Malkajgiri, Secunderabad, TG 500047 | +91 80088 72112 |
| Karimnagar (City of Heritage) | 2nd Floor, Kousalya Kishan Rao Complex, Ambedkar Rd, above Kidzmall, Court Chowrastha, TG 505001 | +91 8121278860 |

**Email (all locations):** marketing.amogham@gmail.com

### Google Maps Links
- Warangal: https://maps.app.goo.gl/FbR9vYUndU2dJJLk8
- Hyderabad: https://maps.app.goo.gl/1TTMvtsVW4rtauuPA
- Karimnagar: https://maps.app.goo.gl/3VQK94tm2DJ88yU48

### Reservation Form Fields
1. Your Name
2. Phone Number
3. Date
4. No. of Guests (1–8+)
5. Preferred Location (dropdown)
6. Special Requests (textarea)
7. "Confirm Reservation" gold CTA button

### Social Links
- Instagram: @aranyamjunglerestaurant
  https://www.instagram.com/aranyamjunglerestaurant
- Email: marketing.amogham@gmail.com

---

## 🔧 Technical Setup

### Dependencies
```json
{
  "react": "^18.x",
  "react-dom": "^18.x",
  "vite": "^5.x",
  "tailwindcss": "^3.x",
  "postcss": "^8.x",
  "autoprefixer": "^10.x",
  "lucide-react": "^1.x",
  "framer-motion": "latest"
}
```

### vite.config.js
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({ plugins: [react()] })
```

### postcss.config.js
```js
export default {
  plugins: { tailwindcss: {}, autoprefixer: {} }
}
```

### index.css
```css
@import url('Google Fonts — Cinzel + Cormorant Garamond + Inter');
@tailwind base;
@tailwind components;
@tailwind utilities;
/* + custom scrollbar, shimmer animation, focus ring */
```

### Key Tailwind Config (custom additions)
```js
colors: { jungle, gold, earth }
fontFamily: { cinzel, cormorant, inter }
keyframes: { fade-in-down, fade-in-up, slide-in-right, shimmer, leaf-sway, glow }
animation: { fade-in-down, shimmer, leaf-sway, glow }
```

---

## 🐛 Issues Fixed During Build

| Issue | Fix |
|---|---|
| Tailwind v4 vs v3 mismatch (Bolt uses v3) | Downgraded to Tailwind v3, removed @tailwindcss/vite |
| `bg-linear-to-r` not working | Reverted to v3: `bg-gradient-to-r` |
| `h-px`, `shrink-0`, `w-0.75` warnings | Reverted to v3: `h-[1px]`, `flex-shrink-0`, `w-[3px]` |
| `main.tsx` → `main.jsx` (non-null assertion `!`) | Removed `!`, renamed file, updated index.html |
| `App.tsx` → `App.jsx` | Renamed, updated imports |
| `navbar.tsx` ghost tab warnings | Closed ghost tabs in VS Code, deleted old files |
| `tsconfig` warnings | Deleted tsconfig files (pure JSX project) |
| PostCSS conflict with @tailwindcss/vite | Deleted postcss.config.js, reverted to v3 setup |
| Vite 5 incompatible with @tailwindcss/vite | Reverted to standard Tailwind v3 + PostCSS |
| Logo white square on dark navbar | Styled as intentional rounded card with gold border |
| Menu background too tall, image not fitting | Added `backgroundAttachment: 'fixed'` (parallax) |
| Gallery/Contact not showing | Fixed App.jsx — removed placeholder sections, added real imports |
| `BookingModal` import crash | Removed BookingModal (not built), simplified App.jsx |

---

## 📱 Responsive Strategy

| Screen | Breakpoint | Key Changes |
|---|---|---|
| Mobile | `< 640px` | Stacked layouts, full-width images, 1-2 col grids |
| Tablet | `sm: 640px+` | 2 col grids, larger text |
| Desktop | `lg: 1024px+` | Side-by-side layouts, 3+ col grids, full masonry |

### Mobile-First Principles Used
- Image always visible on mobile (never hidden) — stacked layout
- Horizontal scroll tabs (no scrollbar) for categories
- 9:16 video cards in 2-col grid on mobile
- Lightbox with touch-friendly prev/next buttons
- Body scroll lock on mobile menu open

---

## 💡 Key Design Decisions

### Why Tailwind v3 (not v4)
Bolt.new uses Tailwind v3 with `tailwind.config.js`. The custom `gold-*` and `jungle-*` colors are defined there. v4 can't read `tailwind.config.js` the same way.

### Why logo kept as white square
Client specifically said "don't change anything in the logo." Styled it as an intentional branded card with gold border instead of trying to remove the background.

### Why M.M. Keeravani video gets special treatment
Oscar-winning composer = massive credibility for the restaurant. Featured in a highlighted banner above the video grid. This is the strongest marketing asset the client has.

### Why parallax on Menu background
Section is very tall (30 dishes). A fixed background image looks premium and never stretches/repeats regardless of content height.

### Why 9:16 vertical video cards
Instagram videos are portrait format (1080×1920). Forcing them into 16:9 would crop and distort. Vertical cards match the native format perfectly.

---

## 🚀 How to Run

```bash
cd ~/Desktop/ARANYAM
npm install
npm run dev
# Open http://localhost:5173
```

---

## 📋 Page Flow (Final)

```
🏠 Hero
  ↓ Scroll
🌿 About (Our Story)
  ↓
🍽️ Menu (26 dishes, 7 categories, parallax bg)
  ↓
🖼️ Gallery (4 photos + 5 videos incl. M.M. Keeravani)
  ↓
📞 Contact (3 locations + reservation form)
```

---

*Built with passion for Aranyam — The Jungle Theme Restaurant*  
*"Where the wild dines in luxury"*