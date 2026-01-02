import { useEffect, useMemo, useRef, useState } from 'react';

const WRAPPER_HEIGHT = 220; // vh
const ORBIT_SIZE = { min: 480, ideal: 820, max: 880 }; // px (larger orbit)
const ICON_SIZE = { min: 140, ideal: 170, max: 190 }; // px (larger active icon)
const VISIBLE_RATIO = 0.55; // tighter crop to avoid peeking

const SDGS = [
  {
    number: 3,
    title: 'Good Health and Well-being',
    description:
      'Eliminates chronic pesticide exposure for farmers. India sees 1M+ acute poisonings annually from chemical handling. Precision targeting means farmers spray less, inhale and drink less, and handle fewer toxic substances. Crops carry lower chemical residue, reducing health risks for consumers.',
    image: '/sdg/03.png'
  },
  {
    number: 6,
    title: 'Clean Water and Sanitation',
    description:
      'Prevents agricultural runoff at the source. Currently, 80% of sprayed pesticides miss targets and leach into groundwater and watersheds. By reducing pesticide volume by 40–50% and targeting only affected zones, Niraksha directly protects water quality for rural communities dependent on these sources.',
    image: '/sdg/06.png'
  },
  {
    number: 12,
    title: 'Responsible Consumption and Production',
    description:
      'Transforms wasteful blanket spraying into data-driven precision agriculture. Farmers currently waste ₹400/acre on chemicals that never reach pests. Niraksha enables targeted intervention, cutting input consumption while maintaining (and improving) crop protection outcomes.',
    image: '/sdg/12.png'
  },
  {
    number: 13,
    title: 'Climate Action',
    description:
      'Healthier soil sequesters more carbon. Pesticide overuse degrades soil microbiomes and reduces organic matter, which is the earth’s natural carbon sink. By minimizing chemical load on farmland, Niraksha preserves soil health and supports climate-resilient agricultural ecosystems across 140M hectares of Indian farmland.',
    image: '/sdg/13.png'
  }
];

export default function SDGSection() {
  const containerRef = useRef(null);
  const [rotation, setRotation] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const snapTimeout = useRef(null);

  const segment = 360 / SDGS.length;

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(media.matches);
    const onMedia = () => setReducedMotion(media.matches);
    media.addEventListener('change', onMedia);

    if (media.matches) {
      return () => media.removeEventListener('change', onMedia);
    }

    let frame = null;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = null;
        const el = containerRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const viewport = window.innerHeight || 1;
        const total = rect.height - viewport;
        if (total <= 0) return;
        const progress = Math.min(Math.max((viewport - rect.top) / total, 0), 1);
        const nextRotation = progress * 360;
        setRotation(nextRotation);

        const idx = Math.round((progress * (SDGS.length - 1)));
        if (idx !== activeIndex) setActiveIndex(idx);

        if (snapTimeout.current) clearTimeout(snapTimeout.current);
        snapTimeout.current = setTimeout(() => {
          const snappedRotation = (idx / SDGS.length) * 360;
          setRotation(snappedRotation);
        }, 120);
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      media.removeEventListener('change', onMedia);
      if (frame) cancelAnimationFrame(frame);
      if (snapTimeout.current) clearTimeout(snapTimeout.current);
    };
  }, [activeIndex]);

  const active = SDGS[activeIndex];

  const iconSize = useMemo(
    () => `clamp(${ICON_SIZE.min}px, ${ICON_SIZE.ideal}px, ${ICON_SIZE.max}px)`,
    []
  );
  const orbitSize = useMemo(
    () => `clamp(${ORBIT_SIZE.min}px, ${ORBIT_SIZE.ideal}px, ${ORBIT_SIZE.max}px)`,
    []
  );

  return (
    <section
      ref={containerRef}
      className="sdg-section relative px-6 bg-gradient-to-b from-primary to-primary-light overflow-visible"
      style={{ height: `${WRAPPER_HEIGHT}vh` }}
    >
      <div className="max-w-6xl mx-auto h-full">
        <div className="sticky top-0 h-screen flex flex-col">
          {/* Header */}
          <div className="pt-8 pb-4 text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-white">
              Aligned with UN <span className="gradient-text">Sustainable Development Goals</span>
            </h2>
            <p className="mt-3 text-lg md:text-xl text-muted max-w-3xl mx-auto">
              Scroll to rotate — one goal at a time.
            </p>
          </div>

          {/* Orbit + card */}
          <div className="flex-1 flex flex-col items-center justify-center gap-10">
            <div
              className="sdg-rotator relative"
              style={{
                width: orbitSize,
                height: `calc(${orbitSize} * ${VISIBLE_RATIO})`,
                clipPath: 'inset(0 0 45% 0)', // tighter crop ensures only top arc shows
              }}
            >
              <div
                className="absolute"
                style={{
                  width: orbitSize,
                  height: orbitSize,
                  left: 0,
                  top: `calc(-1 * ${orbitSize} * (1 - ${VISIBLE_RATIO}))`,
                }}
              >
                <div
                  className="sdg-ring"
                  style={{
                    transform: `translateY(42%) ${reducedMotion ? 'rotate(0deg)' : `rotate(${rotation}deg)`}`,
                  }}
                  aria-hidden
                >
                  <div className="sdg-orbit-glow" />
                  <div className="sdg-orbit-dots" />
                </div>

                {/* Active icon only */}
                <div
                  className="absolute left-1/2 -translate-x-1/2"
                  style={{
                    top: `calc(${orbitSize} * 0.02)`, // pull icon closer to arc apex
                  }}
                >
                  <div
                    className={`sdg-node-inner ${reducedMotion ? '' : 'transition-all duration-500 ease-out'} ${reducedMotion ? '' : 'will-change-transform'}`}
                    style={{
                      width: iconSize,
                      height: iconSize,
                      boxShadow: '0 18px 50px rgba(0,0,0,0.45)',
                      margin: '0 auto',
                    }}
                  >
                    <img
                      src={active.image}
                      alt={`SDG ${active.number}`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div
              key={active.number}
              className="sdg-detail-card glass rounded-3xl shadow-2xl border border-white/10 transition-all duration-500 ease-out"
              style={{ width: 'min(1000px, 92vw)' }}
            >
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">{active.title}</h3>
              <p className="text-lg md:text-xl text-muted leading-relaxed">{active.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
