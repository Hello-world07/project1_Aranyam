2. Create React + Vite Project
Run this command:
    npm create vite@latest .

4. Install Tailwind CSS
Run: npm install tailwindcss @tailwindcss/vite


5. Configure Vite
Open vite.config.js
Replace code with:
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})


**** Yes. The fastest way is to test a Tailwind class.
Step 1 — Run Project
In terminal:
npm run dev
Open the localhost URL.
Step 2 — Open src/App.jsx
Replace everything with:
function App() {
  return (
    <div className="h-screen bg-black flex items-center justify-center">
      <h1 className="text-6xl font-bold text-green-400">
        Tailwind Working 🚀
      </h1>
    </div>
  )
}

export default App
Step 3 — Check Browser
If Tailwind is installed correctly, you will see:
Black background
Big green text in center

//prompt 

*** Create a premium, modern, luxury jungle-themed restaurant navbar for a restaurant website called “ARANYAM – Jungle Theme Restaurant”.

Tech Stack:

* React + Vite + Tailwind CSS
* Fully responsive
* Smooth animations
* Modern glassmorphism + jungle luxury aesthetic

Design Requirements:

* Dark jungle-inspired background
* Use deep green, black, earthy brown, and gold accent colors
* Navbar should feel cinematic, premium, and immersive
* Sticky navbar with slight blur/glass effect
* Smooth hover animations
* Elegant typography
* Mobile responsive hamburger menu with smooth transitions

Navbar Structure:

* Left side: Restaurant logo image (I will upload logo later)
* Next to logo: Restaurant name “ARANYAM”
* Right side menu items:

  * Home
  * About
  * Gallery
  * Contact

Extra Features:

* Add subtle jungle glow/shadow effects
* Add animated underline hover effect for nav links
* Add smooth scroll behavior
* Add active link highlight
* Add CTA button:

  * “Book Table”
  * Premium gold/green gradient style

Behavior:

* Navbar changes slightly on scroll:

  * darker background
  * smaller padding
  * smooth transition

Mobile Version:

* Elegant full-screen mobile menu
* Animated hamburger icon
* Smooth slide/fade transitions
* Large touch-friendly menu items

Code Requirements:

* Build as reusable React component
* Use Tailwind CSS only
* Clean production-ready code
* Add comments for sections
* Keep structure professional and scalable

Visual Inspiration:

* Luxury jungle resorts
* Rainforest fine dining
* Tropical cinematic websites
* Premium eco-resort UI

Important:

* Make the navbar visually impressive and unique, not a basic template
* Add premium micro-interactions and smooth animations
* Use Framer Motion if needed
* Generate complete code for Navbar component



Step 5 — Install Extra Libraries (Important)
Bolt usually uses:
Framer Motion
Lucide Icons
React Icons
If you see import errors, install them.
Framer Motion
npm install framer-motion

Lucide React
npm install lucide-react

React Icons
npm install react-icons



@@@@
You're absolutely right to push back on that. Hiding content on mobile is a lazy fix — a professional restaurant website should look equally impressive on mobile.
Here's my deep professional opinion:
The real problem is layout, not the image.
On mobile, a side-by-side grid doesn't work — but that doesn't mean hide the image. Instead, stack them vertically like this:
📱 Mobile Layout:
┌─────────────────────┐
│   OUR STORY heading │
├─────────────────────┤
│  Telugu image       │
│  (full width,       │
│   shorter height)   │
├─────────────────────┤
│  Quote + text       │
│  paragraphs         │
├─────────────────────┤
│  Location cards     │
├─────────────────────┤
│  Stats row (2x2)    │
└─────────────────────┘

🖥️ Desktop Layout:
┌──────────┬──────────┐
│  Image   │  Text    │
│  (tall)  │  Quote   │
│          │  Paras   │
│          │  Locs    │
└──────────┴──────────┘
│      Stats 4 cols   │
└─────────────────────┘
Key mobile-specific improvements:
Image goes full width with h-56 — wide and cinematic, not square
Gold corner accents stay — keeps the premium feel
Text stacks cleanly below
Location cards stay in 3 columns — they're small enough
Stats stay 2x2 grid
This is exactly how Zomato, Dineout, and premium restaurant sites handle it. Shall I generate the full code?
yes go on
9:34 PM

Ran a command, read a file
Ran a command, read a file
Replace your src/components/About.jsx. Here's exactly how it behaves now:
Mobile (< lg):
Image is full width, h-56 — wide cinematic banner
Telugu caption అరణ్యం — Aranyam appears over the image bottom
Text, location cards and stats stack cleanly below
Tablet (sm):
Image height bumps to h-72
Slightly larger fonts and padding
Desktop (lg+):
Side-by-side grid — image h-480px tall on left, text on right
Caption hidden since desktop has enough space
This is exactly how Zomato, Swiggy and premium restaurant sites handle responsive layouts — image always visible, layout adapts. ✅

About
Code · JSX 
