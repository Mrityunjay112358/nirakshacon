# Component Architecture

Complete breakdown of all components and their animations.

## Component Tree

```
App.jsx
├── Navigation.jsx
└── IntroSequence.jsx (wrapper)
    ├── ProblemSection.jsx
    ├── SolutionSection.jsx
    ├── HowItWorks.jsx
    ├── TechnologySection.jsx
    ├── ResultsSection.jsx
    ├── TeamSection.jsx
    ├── ValidationSection.jsx
    └── Footer.jsx
```

---

## 1. Navigation.jsx (3.7KB)

**Purpose**: Scroll-responsive navigation bar

**Animations**:
- Slides down after intro completes
- Auto-hides on scroll down, shows on scroll up
- Smooth fade in/out

**Features**:
- Desktop: Horizontal menu
- Mobile: Hamburger with slide-down menu
- Smooth scroll to sections
- Glass morphism background

**ScrollTrigger**:
```javascript
// Show after problem section
start: 'top 80%'
onEnter: slide down, fade in
onLeaveBack: slide up, fade out
```

---

## 2. IntroSequence.jsx (6.4KB)

**Purpose**: Cinematic hero with drone reveal

**Animations** (7 phases, 3000px scroll):
1. **0-15%**: Background zoom out (scale 1.1 → 1)
2. **15-50%**: Drone rises (y: 100vh → 0vh, scale 0.4 → 0.8)
3. **50-60%**: Drone hover (y: 0 → -5vh → 0, yoyo)
4. **60-70%**: Background darkens (brightness 1 → 0.3)
5. **60-80%**: Drone expands/fades (scale 0.8 → 4, opacity 1 → 0)
6. **70-100%**: Hero content reveals
7. **Stagger**: Title words, subtitle, stats animate in

**Assets Used**:
- Video: `usage in farm 2.mp4`
- Logo: `logo.png`

**Key States**:
```javascript
Initial: drone offscreen (y: 100vh, scale: 0.4, rotation: -5)
Hover: drone at center (y: -5vh, scale: 0.8)
Final: content visible (opacity: 1, y: 0)
```

---

## 3. ProblemSection.jsx (5.8KB)

**Purpose**: Alarming statistics about pest crisis

**Animations**:
- Stat cards stagger in from bottom (y: 100 → 0)
- Numbers count up from 0 with GSAP textContent animation
- Warning glow pulses infinitely (opacity, scale)

**Content**:
- 40% crop yield lost
- ₹15,000-25,000 damage per acre
- 80% pesticides miss target
- 3M tonnes chemical pollution

**Icons**: TrendingDown, AlertTriangle, Droplets, Skull

**Styling**: Orange (#E07A3D) warning theme

---

## 4. SolutionSection.jsx (7.2KB)

**Purpose**: Before/After comparison

**Animations**:
- Left panel slides in from left (x: -100 → 0)
- Right panel slides in from right (x: 100 → 0)
- Benefit cards stagger up (y: 50 → 0)
- Heatmap pulses (boxShadow)

**Content**:
- Traditional: Blanket spraying visualization
- Niraksha: Actual heatmap (`KML-map with pest hotspots.png`)
- 4 benefits: 40-50% less pesticide, 10-12% higher yields, WhatsApp reports, ₹600-800/acre

**Icons**: Leaf, TrendingUp, MessageSquare, DollarSign

---

## 5. HowItWorks.jsx (8.9KB)

**Purpose**: Horizontal scroll process explanation

**Animations**:
- Section pins on scroll
- 3 cards move horizontally (xPercent: -100 per card)
- Connecting line draws (scaleX: 0 → 1)
- Snap to each step

**Steps**:
1. **SCAN**: Drone icon with ping animation, flight trajectory diagram
2. **ANALYZE**: Brain icon with pulse, EAMF+TTA pipeline diagram
3. **ACT**: MapPin icon with bounce, KML heatmap

**Assets**:
- `drone-flight trajectory.png`
- `niraksha innovation EAMF + TTA Pipeline.png`
- `KML-map with pest hotspots.png`

**ScrollTrigger**:
```javascript
pin: true
scrub: 1
snap: 1/3 (each step)
end: scrollWidth of track
```

---

## 6. TechnologySection.jsx (6.5KB)

**Purpose**: 3D flip cards showing tech stack

**Animations**:
- Cards float continuously (y: 0 → -10, yoyo)
- Scroll reveal with 3D rotation (rotationX: -15 → 0)
- Hover flip (rotateY: 0 → 180deg)

**Cards**:
1. **Tri-Modal AI**: DeepLabv3+, YOLOv8-s, DINOv2
2. **EAMF**: Environmental sensors, dynamic reweighting
3. **TTA**: Test-time adaptation, +21% accuracy

**Icons**: Layers, Zap, Target

**Features**:
- Front: Icon + title
- Back: Technical bullet points
- Hardware spec bar below

**CSS**: Custom 3D transform utilities (perspective-1000, backface-hidden)

---

## 7. ResultsSection.jsx (6.8KB)

**Purpose**: Field validation proof

**Animations**:
- Large numbers count up (textContent: 0 → target)
- Photo grid scales up with random stagger
- Quote slides in from left (x: -100 → 0)

**Stats Grid (2x3)**:
- 500+ acres tested
- 150+ farmers reached
- 47 field trials
- 38% pesticide reduction
- 5 FPO partnerships
- 92% intent to adopt

**Assets**:
- `dronemaking1.jpeg`
- `dronemaking2.jpeg`
- `drone flight software.jpeg`
- `KML-map with pest hotspots.png`

**Quote**: 92% farmer adoption intent at ₹800/acre

---

## 8. TeamSection.jsx (3.5KB)

**Purpose**: Student team showcase

**Animations**:
- Cards stagger up on scroll (y: 60 → 0, stagger: 0.15)
- Hover lift (translateY: 0 → -12px)
- Avatar scale on hover

**Team Members**:
1. Aaditya - Problem Validation
2. Mrityunjay - Hardware & AI
3. Ariana - Farmer Outreach
4. Yashkit - Product Design
5. Ritwika - Field Data & Trials

**Layout**: 5 columns on desktop, responsive grid

---

## 9. ValidationSection.jsx (4.4KB)

**Purpose**: Endorsements and partnerships

**Animations**:
- Logo marquee (infinite xPercent: -50, 20s duration)
- Trust badges scale up (scale: 0.8 → 1, stagger)

**Partners**:
- Paras Defence (defense aerospace)
- NextLeap Aeronautics (drone partner)

**Trust Badges**:
- Validated by Paras Defence
- Provisional patent filed
- NextLeap partnership

**Icons**: Shield, Award, Handshake

---

## 10. Footer.jsx (3.9KB)

**Purpose**: Final CTA and contact

**Animations**:
- CTA button pulses (boxShadow glow, infinite yoyo)
- Social icons hover effects

**Sections**:
- Large CTA: "Request a Demo"
- Logo + description
- Contact email
- Social links (LinkedIn, Twitter, GitHub)
- Copyright + "Made with 🌱 in Jaipur"

---

## Animation Performance

### GPU-Accelerated Properties Used
✅ `transform: translateX/Y/Z`
✅ `transform: scale`
✅ `transform: rotate`
✅ `opacity`

### Avoided (Causes Layout Thrashing)
❌ `width`, `height`
❌ `top`, `left`, `margin`, `padding`
❌ `background-position`

### Scrub Settings
- **Intro**: 1.5s (smoothest, most dramatic)
- **Problem/Solution**: 1s (balanced)
- **How It Works**: 1s with snap
- **Others**: Trigger-based (no scrub)

---

## Asset Dependencies

Each component uses specific assets:

| Component | Assets |
|-----------|--------|
| IntroSequence | `usage in farm 2.mp4`, `logo.png` |
| SolutionSection | `KML-map with pest hotspots.png` |
| HowItWorks | All 3 diagrams |
| ResultsSection | All 4 photos + heatmap |
| Footer | `logo.png` |

---

## Responsive Breakpoints

```javascript
sm: 640px   // Mobile landscape
md: 768px   // Tablet
lg: 1024px  // Desktop
xl: 1280px  // Large desktop
```

All components adapt:
- Mobile: Vertical stacking, reduced text sizes
- Tablet: 2-column grids
- Desktop: Full multi-column layouts

---

## Total Code Stats

- **10 components**: 63KB total
- **~3000 lines** of React/JSX
- **All TypeScript-ready** (add types easily)
- **Zero external dependencies** beyond GSAP, React, Tailwind, Lucide
- **100% responsive**
- **Accessibility**: ARIA labels, semantic HTML

---

## Customization Guide

### Change Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: '#YourColor'
}
```

### Change Timings
Each component's `useGSAP` hook:
```javascript
scrub: 1.5  // Change smoothness
duration: 2  // Change animation speed
```

### Add Sections
1. Create new component in `src/components/`
2. Import in `App.jsx`
3. Add to IntroSequence children
4. Update Navigation items

---

**All components follow GSAP best practices with cleanup via useGSAP hook!** 🎬
