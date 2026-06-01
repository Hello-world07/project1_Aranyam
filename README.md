# ARANYAM — Jungle Theme Restaurant

A premium, jungle-themed marketing website for **Aranyam Jungle Theme Restaurant** (a unit of Amogham Foods). Built as a concept redesign to showcase a modern, cinematic dining experience across three locations in Telangana.

**Live concept tagline:** *Where the wild dines in luxury.*

---

## Features

- **Multi-page routing** — Home, About, Menu, Gallery, and Contact
- **Password-protected demo** — Private preview gate before the site loads
- **Responsive design** — Mobile-first layouts with dedicated page variants
- **Booking modal** — Table reservations and third-party links (Swiggy, Zomato, District)
- **Rich sections**
  - Parallax hero with CTAs
  - Our Story (founders, locations, stats)
  - Menu with category filters and 26+ dishes
  - Photo gallery with lightbox
  - Vertical video grid (founder stories, celebrity review, behind the scenes)
  - Contact with three locations, hours, and reservation form
- **Floating action buttons** — Quick access to book or contact

---

## Tech Stack

| | |
|---|---|
| **Framework** | React 18 |
| **Build tool** | Vite 5 |
| **Styling** | Tailwind CSS v3 |
| **Routing** | React Router v7 |
| **Icons** | Lucide React |

**Typography:** [Cinzel](https://fonts.google.com/specimen/Cinzel) (headings, nav) · [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond) (body)

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18+ (LTS recommended)
- npm

### Install and run

```bash
git clone <repository-url>
cd ARANYAM
npm install
npm run dev
```

Open the URL shown in the terminal (typically `http://localhost:5173`).

### Demo access

The site is wrapped in a password gate for confidential previews. Use the password configured in `src/App.jsx` (`PasswordGate` component) to unlock the demo.

### Production build

```bash
npm run build
npm run preview
```

Static output is written to `dist/`.

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint |

---

## Project Structure

```
ARANYAM/
├── public/                 # Static assets (images, videos, logo)
├── src/
│   ├── components/
│   │   ├── navbar.jsx
│   │   ├── footer.jsx
│   │   ├── about.jsx
│   │   ├── menu.jsx
│   │   ├── gallery.jsx
│   │   ├── contact.jsx
│   │   ├── bookingmodal.jsx
│   │   └── floatingActionbuttons.jsx
│   ├── pages/
│   │   ├── home.jsx
│   │   ├── aboutpage.jsx
│   │   ├── menupage.jsx
│   │   ├── gallerypage.jsx
│   │   └── contactpage.jsx
│   ├── App.jsx             # Routes, hero, password gate
│   ├── main.jsx
│   └── index.css
├── tailwind.config.js      # Custom jungle / gold / earth palette
├── vite.config.js
└── package.json
```

---

## Routes

| Path | Page |
|------|------|
| `/` | Home — hero plus all sections (About, Menu, Gallery, Contact) |
| `/about` | About — story, locations, stats |
| `/menu` | Menu — categories and dishes |
| `/gallery` | Gallery — photos and videos |
| `/contact` | Contact — locations, form, social links |

---

## Design System

Custom Tailwind tokens in `tailwind.config.js`:

| Token | Role |
|-------|------|
| `jungle-*` | Deep greens and dark backgrounds (`jungle-950` base) |
| `gold-*` | Primary accents, CTAs, highlights |
| `earth-*` | Mobile menu and earthy gradients |

Animations include fade-in, shimmer, leaf-sway, and glow effects.

---

## Assets

Place media in `public/` so paths like `/hero.jpg` resolve correctly. Expected assets include:

| File | Usage |
|------|--------|
| `hero.jpg` | Hero background |
| `logo.png` | Navbar logo |
| `logo2.png`, `logo3.jpg` | About and menu backgrounds |
| `about.jpg` | About section imagery |
| `gallery1.jpg` … `gallery4.jpg` | Gallery grid |
| `video1.mp4` … `video5.mp4` | Founder, celebrity, and BTS videos |

If assets are missing, sections will show empty or placeholder backgrounds until files are added.

---

## Locations

| City | Role |
|------|------|
| Warangal | Flagship |
| Karimnagar | City of Heritage |
| Hyderabad | The Capital |

Contact details and map links are defined in `src/components/contact.jsx` and `src/components/bookingmodal.jsx`.

---

## Additional Documentation

- **`PROJECT_CONTEXT.md`** — Build notes, prompts, and setup history from development

---

## Author

**Pranith Konda** — Concept design and development

---

## License

Private / client concept work. All rights reserved unless otherwise agreed with the client.
