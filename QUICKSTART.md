# Niraksha Website - Quick Start Guide

## 🚀 Getting Started

The premium Niraksha website is now ready! Here's everything you need to know:

## ✅ What's Been Built

A complete, production-ready single-page website featuring:

### 🎬 Section 0: Cinematic Intro Sequence
- **3000px scroll journey** - Drone rises from bottom, expands, and reveals hero content
- **7-phase animation timeline** with precise choreography
- Background video with farm landscape
- Staggered text reveals with word-by-word animation
- Scroll indicator with smooth fade-in

### 🚨 Section 1: Problem Section
- **4 animated stat cards** with counter animations
- Pulsing warning glows on hover
- Icons from Lucide React
- Stats: 40% crop loss, ₹25K damage, 80% pesticide waste, 3M tonnes pollution

### ✨ Section 2: Solution Section
- **Before/After split comparison** with slide-in animations
- Actual heatmap imagery from your assets
- 4 benefit cards with icons
- Pulsing heatmap effect

### 🔄 Section 3: How It Works
- **Horizontal scroll pinned section** - Desktop Tesla-style
- 3 full-viewport steps: SCAN → ANALYZE → ACT
- Connecting line that draws across
- Snap to each step for smooth transitions
- Technical diagrams from your assets

### 🧠 Section 4: Technology
- **3D flip cards** - Hover to reveal technical details
- Tri-Modal AI, EAMF, and TTA innovations
- Floating animation for depth
- Hardware spec bar at bottom
- Patent-pending badge

### 📊 Section 5: Results
- **Animated dashboard** with counting stats
- 6 key metrics: 500+ acres, 150+ farmers, 92% adoption intent
- Photo grid with hover zoom
- Farmer quote testimonial
- Real field deployment images

### 👥 Section 6: Team
- **5 team member cards** with lift effect on hover
- Clean avatar placeholders
- Role descriptions for each member
- Call for advisors

### 🏆 Section 7: Validation
- **Infinite logo marquee** - Paras Defence & NextLeap
- 3 trust badges with icons
- Endorsement quote
- Patent status

### 📧 Section 8: Footer/CTA
- **Pulsing CTA button** with glow effect
- Logo and description
- Contact email
- Social media placeholders
- "Made with 🌱 in Jaipur"

### 🧭 Navigation
- **Auto-hiding navigation** - Slides down on intro completion
- Hides on scroll down, shows on scroll up
- Smooth scroll to sections
- Mobile-responsive hamburger menu

## 🎨 Design Quality

✅ **Premium Brand Colors** - Deep navy (#0A1628) with forest green accents (#4A7C59)
✅ **Inter Font** - Professional sans-serif at multiple weights
✅ **Glass Morphism** - Backdrop blur effects on all cards
✅ **60fps Animations** - GPU-accelerated transforms only
✅ **Responsive** - Mobile, tablet, and desktop optimized
✅ **Accessibility** - Semantic HTML and ARIA labels

## 🎯 Performance

- ⚡️ Vite for instant hot module replacement
- 🎭 GSAP 3.12 for professional animations
- 🎨 Tailwind CSS for minimal bundle size
- 🖼️ Optimized asset loading
- 📱 Mobile-first responsive design

## 🌐 View Your Site

**Development Server Running:**
- Local: http://localhost:3000/
- Press `Ctrl+C` in terminal to stop

## 📝 Next Steps

### 1. **Test the Animations**
Open http://localhost:3000/ and scroll through:
- Watch the drone rise and reveal
- See stats count up
- Horizontal scroll through How It Works
- Flip the technology cards
- Test navigation hide/show

### 2. **Customize Content**
Edit these files to update content:
- `src/components/IntroSequence.jsx` - Hero text and stats
- `src/components/ProblemSection.jsx` - Problem statistics
- `src/components/TeamSection.jsx` - Team member names
- `src/components/Footer.jsx` - Contact email

### 3. **Update Assets**
Your assets are already linked! The website uses:
- `/assets/videos/usage in farm 2.mp4` - Hero background
- `/assets/images/logo.png` - Logo throughout
- `/assets/diagrams/KML-map with pest hotspots.png` - Heatmaps
- `/assets/diagrams/niraksha innovation  EAMF + TTA Pipeline.png` - Architecture
- `/assets/images/dronemaking1.jpeg` - Field photos

### 4. **Deploy to Production**

**Option A: Vercel (Recommended)**
```bash
npm install -g vercel
vercel
```

**Option B: Netlify**
```bash
npm run build
# Drag /dist folder to Netlify
```

**Option C: GitHub Pages**
```bash
npm run build
# Push /dist to gh-pages branch
```

## 🛠️ Development Commands

```bash
# Start dev server (already running)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Install new dependency
npm install package-name
```

## 🐛 Troubleshooting

**Animations not smooth?**
- Check browser GPU acceleration is enabled
- Close other tabs for better performance

**Images not loading?**
- Verify files exist in `/assets/` folder
- Check file paths match names exactly

**Horizontal scroll not working?**
- Desktop only feature (mobile shows vertical cards)
- Try scrolling faster to trigger snap points

## 📊 File Structure

```
niraksha-website/
├── src/
│   ├── components/        # All 9 sections + nav
│   ├── App.jsx           # Main component
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── assets/               # Your media files
├── public/               # Static files
├── package.json          # Dependencies
└── vite.config.js        # Build config
```

## 🎓 Animation Details

### Intro Timeline (3000px scroll distance)
1. **0-15%**: Background zoom out
2. **15-50%**: Drone rises from bottom
3. **50-60%**: Drone hover animation
4. **60-70%**: Background darkens
5. **60-80%**: Drone expands and fades
6. **70-100%**: Hero content reveals with stagger

### Scrub Settings
- Intro: `scrub: 1.5` (1.5s smooth catch-up)
- Problem: `scrub: 1` (1s catch-up)
- How It Works: `scrub: 1` with snap points
- All other sections: `scrub: true` (instant)

## 🎨 Brand Guidelines

**Colors:**
- Primary: `#0A1628` (Deep Navy)
- Accent: `#4A7C59` (Forest Green)
- Highlight: `#8FBC8F` (Light Green)
- Warning: `#E07A3D` (Orange)

**Typography:**
- Headlines: Inter 700, -0.02em tracking
- Body: Inter 400, 1.7 line-height
- Labels: Inter 500, 0.1em tracking, uppercase

## 💡 Tips

1. **Scroll slowly** through intro for full effect
2. **Hover over tech cards** to see flip animation
3. **Resize browser** to test responsive design
4. **Check mobile** with Chrome DevTools
5. **Test in Safari** for iOS compatibility

## 📞 Support

If you need to modify animations or add sections:
1. All sections are in `src/components/`
2. GSAP docs: https://gsap.com/docs/v3/
3. Tailwind docs: https://tailwindcss.com/docs

---

**Your premium Niraksha website is ready to impress investors, judges, and farmers! 🚀🌱**

Server running at: http://localhost:3000/
