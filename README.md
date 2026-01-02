# Niraksha - Premium Cinematic Website

A premium, Apple-style single-page website for Niraksha, an autonomous drone-based precision pest detection system for Indian farmers.

## 🚀 Features

- **Cinematic Intro Sequence**: Scroll-driven drone reveal animation with GSAP ScrollTrigger
- **Premium Animations**: 60fps GPU-accelerated transforms and opacity animations
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **8 Scroll-Driven Sections**: Each with unique animations and interactions
- **3D Flip Cards**: Interactive technology showcase
- **Horizontal Scroll**: Multi-step "How It Works" section
- **Animated Counters**: Stats that count up on scroll
- **Glass Morphism**: Premium UI with backdrop blur effects

## 🛠️ Tech Stack

- **React 18** - Modern UI framework
- **Vite** - Lightning-fast build tool
- **GSAP 3.12** - Professional animation library
- **ScrollTrigger** - Scroll-driven animations
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library

## 📦 Installation

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

## 🎨 Design System

### Colors

```javascript
primary: '#0A1628'      // Deep navy background
primaryLight: '#0F2139' // Card backgrounds
accent: '#4A7C59'       // Forest green
accentLight: '#5B9A6F'  // Hover states
highlight: '#8FBC8F'    // CTAs and accents
warning: '#E07A3D'      // Problem statistics
muted: '#94A3B8'        // Secondary text
```

### Typography

- **Font**: Inter (400, 500, 600, 700, 800)
- **Headlines**: 700 weight, -0.02em letter-spacing
- **Body**: 400 weight, 1.7 line-height

## 📂 Project Structure

```
niraksha-website/
├── src/
│   ├── components/
│   │   ├── IntroSequence.jsx       # Hero with drone reveal
│   │   ├── ProblemSection.jsx      # Animated stat counters
│   │   ├── SolutionSection.jsx     # Before/after comparison
│   │   ├── HowItWorks.jsx          # Horizontal scroll
│   │   ├── TechnologySection.jsx   # 3D flip cards
│   │   ├── ResultsSection.jsx      # Field validation stats
│   │   ├── TeamSection.jsx         # Team showcase
│   │   ├── ValidationSection.jsx   # Partner logos
│   │   ├── Footer.jsx              # CTA and contact
│   │   └── Navigation.jsx          # Scroll-responsive nav
│   ├── App.jsx                     # Main app component
│   ├── main.jsx                    # Entry point
│   └── index.css                   # Global styles
├── assets/
│   ├── videos/                     # Drone footage
│   ├── images/                     # Photos and logos
│   └── diagrams/                   # Technical diagrams
├── public/                         # Static assets
└── package.json
```

## 🎬 Key Animations

### Intro Sequence (3000px scroll)
1. Farm background zooms out (0-15%)
2. Drone rises from bottom (15-50%)
3. Drone hovers at center (50-60%)
4. Background darkens (60-70%)
5. Drone expands and fades (60-80%)
6. Hero content reveals (70-100%)

### Problem Section
- Stat cards stagger in from bottom
- Numbers count up from 0
- Warning glow pulses

### How It Works
- Section pins while content scrolls horizontally
- Connecting line draws across steps
- Snap to each step

### Technology Cards
- Float animation on hover
- 3D flip to reveal details
- Staggered entrance

## 🎯 Performance

All animations use GPU-accelerated properties:
- ✅ `transform` (x, y, scale, rotation)
- ✅ `opacity`
- ❌ Avoid animating width, height, top, left, margin, padding

Target: **60fps** on all animations

## 📱 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile Safari iOS 14+

## 🌐 Deployment

The site is optimized for static hosting:

```bash
# Build for production
npm run build

# Output will be in /dist directory
# Deploy to Vercel, Netlify, or any static host
```

## 🎓 Credits

Built for **Project Niraksha** - Five high school students from Jaipur revolutionizing pest detection for Indian farmers.

### Team
- **Aaditya** - Problem Validation & Farmer Research
- **Mrityunjay** - Hardware & AI Development
- **Ariana** - Farmer Outreach & FPO Partnerships
- **Yashkit** - Product Design
- **Ritwika** - Field Data & Trials

## 📄 License

© 2025 Project Niraksha. All rights reserved.

---

**Made with 🌱 in Jaipur, India**
