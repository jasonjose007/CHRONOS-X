# CHRONOS-X

A premium luxury watch product landing page built with React and GSAP. Features scroll-driven animations, an interactive exploded-view diagram, horizontal image gallery, and a full technical specifications section — all rendered in a dark, cinematic aesthetic.

## Features

- **Cinematic Preloader** — Animated counter with progress bar before page reveal
- **Scroll Progress Indicator** — Fixed top bar tracking page scroll position
- **Hero Section** — Animated watch face built entirely with CSS/React (no images), with parallax scroll effects
- **Infinite Marquee** — Auto-scrolling text band with pause-on-hover
- **Exploded View** — Scroll-pinned interactive diagram that separates watch components (sapphire crystal, bezel, dial, movement, case back, titanium case) with 3D perspective transforms
- **Feature Cards** — Six technology cards with hover effects and stat highlights
- **Horizontal Gallery** — Scroll-pinned horizontal image carousel with zoom-on-hover
- **Tech Specs Table** — Responsive specification grid with row hover states
- **Glass Navbar** — Transparent navbar that transitions to frosted glass on scroll
- **Noise + Grid Overlays** — Subtle texture layers for visual depth

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 19 |
| Build Tool | Vite 8 |
| Animations | GSAP + ScrollTrigger |
| Smooth Scroll | Lenis |
| Styling | Tailwind CSS 4 + Inline Styles |
| Icons | Lucide React |
| Linting | Oxlint |

## Project Structure

```
src/
├── App.jsx                 # Root component, Lenis smooth scroll setup
├── main.jsx                # Entry point
├── index.css               # Global styles, animations, overlays
├── assets/
│   └── hero.png            # Hero background asset
└── components/
    ├── Preloader.jsx        # Loading screen with animated counter
    ├── ScrollProgress.jsx   # Top scroll progress bar
    ├── Navbar.jsx           # Fixed glass-morphism navigation
    ├── Hero.jsx             # CSS-only watch face with parallax
    ├── Marquee.jsx          # Infinite scrolling text band
    ├── ExplodedView.jsx     # Scroll-pinned component breakdown
    ├── Features.jsx         # 6 technology feature cards
    ├── Gallery.jsx          # Horizontal scroll image gallery
    ├── TechSpecs.jsx        # Specification table with badges
    └── Footer.jsx           # Page footer
```

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Design System

- **Background**: Obsidian `#0A0A0C`
- **Primary Accent**: Cyan `#00F0FF`
- **Secondary Accent**: Lime `#D4FF00`
- **Text**: Crisp White `#F8F9FA`
- **Muted**: `#8E95A5`
- **Borders**: `#22242A`
- **Fonts**: Syne (headings), Inter (body), Space Mono (labels)
