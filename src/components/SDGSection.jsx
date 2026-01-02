import { useEffect, useMemo, useRef, useState } from 'react';

const ORBIT_SIZE = 520;
const VISIBLE_RATIO = 0.65; // show top arc only

export default function SDGSection() {
  const containerRef = useRef(null);
  const ringRef = useRef(null);
  const [rotation, setRotation] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  const sdgs = [
    {
      number: 3,
      title: 'Good Health and Well-being',
      image: '/assets/images/sdg3.png',
      description: 'Reduces farmer pesticide exposure and lowers chemical residue in crops.'
    },
    {
      number: 6,
      title: 'Clean Water and Sanitation',
      image: '/assets/images/sdg6.png',
      description: 'Prevents 40-50% of agricultural chemical runoff into groundwater.'
    },
    {
      number: 12,
      title: 'Responsible Consumption and Production',
      image: '/assets/images/sdg12.png',
      description: 'Transforms wasteful blanket spraying into precision, data-driven agriculture.'
    },
    {
      number: 13,
      title: 'Climate Action',
      image: '/assets/images/sdg13.png',
      description: 'Preserves soil health and carbon sequestration by minimizing chemical degradation.'
    }
  ];

  const segment = 360 / sdgs.length;

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
        setRotation(progress * 360);
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      media.removeEventListener('change', onMedia);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const active = sdgs[activeIndex];

  useEffect(() => {
    const normalized = ((rotation % 360) + 360) % 360;
    const snapped = Math.round(normalized / segment) % sdgs.length;
    if (snapped !== activeIndex) {
      setActiveIndex(snapped);
    }
  }, [rotation, segment, sdgs.length, activeIndex]);

  const iconNodes = useMemo(() => {
    const radius = ORBIT_SIZE * 0.38;
    return sdgs.map((sdg, index) => {
      const angle = (360 / sdgs.length) * index;
      const rad = (angle * Math.PI) / 180;
      const x = radius * Math.sin(rad);
      const y = -radius * Math.cos(rad);
      return (
        <div
          key={sdg.number}
          className={`sdg-node ${activeIndex === index ? 'is-active' : ''}`}
          style={{ transform: `translate(${x}px, ${y}px)` }}
          aria-hidden
        >
          <div className="sdg-node-inner">
            <img src={sdg.image} alt={`SDG ${sdg.number}`} className="w-full h-full object-contain" />
          </div>
        </div>
      );
    });
  }, [activeIndex, sdgs]);

  return (
    <section ref={containerRef} className="sdg-section relative h-[220vh] px-6 bg-gradient-to-b from-primary to-primary-light overflow-visible">
      <div className="max-w-6xl mx-auto h-full">
        {/* Sticky frame */}
        <div className="sticky top-0 h-screen flex flex-col">
          {/* Header */}
          <div className="pt-8 pb-4 text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-white">
              Aligned with UN <span className="gradient-text">Sustainable Development Goals</span>
            </h2>
            <p className="mt-3 text-lg md:text-xl text-muted max-w-3xl mx-auto">
              Scroll controls rotation only — the orbit stays anchored.
            </p>
          </div>

          {/* Orbit + card */}
          <div className="flex-1 flex flex-col items-center justify-center gap-8 md:gap-10">
            <div
              className="sdg-rotator relative overflow-hidden"
              style={{ width: ORBIT_SIZE, height: ORBIT_SIZE * VISIBLE_RATIO }}
            >
              <div
                className="absolute"
                style={{
                  width: ORBIT_SIZE,
                  height: ORBIT_SIZE,
                  left: 0,
                  top: -(ORBIT_SIZE * (1 - VISIBLE_RATIO)),
                }}
              >
                <div
                  ref={ringRef}
                  className="sdg-ring"
                  style={{
                    transform: `translateY(40%) ${reducedMotion ? 'rotate(0deg)' : `rotate(${rotation}deg)`}`,
                  }}
                >
                  <div className="sdg-orbit-glow" />
                  {iconNodes}
                </div>
              </div>
            </div>

            <div className="sdg-detail-card glass rounded-3xl p-8 md:p-10 shadow-2xl max-w-3xl w-full">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">{active.title}</h3>
              <p className="text-lg text-muted leading-relaxed">{active.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
