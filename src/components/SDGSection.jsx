import { useEffect, useMemo, useRef, useState } from 'react';

const WRAPPER_HEIGHT_VH = 240;
const ORBIT_SIZE = { min: 520, ideal: 820, max: 880 };
const ICON_SIZE = { desktop: 160, mobile: 120 };
const VISIBLE_RATIO = 0.55; // top arc only
const ORBIT_VIEWPORT_HEIGHT = null; // use orbitSize-derived height to keep orbit large

const SDGS = [
  {
    id: 3,
    title: 'Good Health and Well-being',
    description:
      'Eliminates chronic pesticide exposure for farmers. India sees 1M+ acute poisonings annually from chemical handling. Precision targeting means farmers spray less, inhale and drink less, and handle fewer toxic substances. Crops carry lower chemical residue, reducing health risks for consumers.',
    icon: '/assets/images/sdg3.png'
  },
  {
    id: 6,
    title: 'Clean Water and Sanitation',
    description:
      'Prevents agricultural runoff at the source. Currently, 80% of sprayed pesticides miss targets and leach into groundwater and watersheds. By reducing pesticide volume by 40–50% and targeting only affected zones, Niraksha directly protects water quality for rural communities dependent on these sources.',
    icon: '/assets/images/sdg6.png'
  },
  {
    id: 12,
    title: 'Responsible Consumption and Production',
    description:
      'Transforms wasteful blanket spraying into data-driven precision agriculture. Farmers currently waste ₹400/acre on chemicals that never reach pests. Niraksha enables targeted intervention, cutting input consumption while maintaining (and improving) crop protection outcomes.',
    icon: '/assets/images/sdg12.png'
  },
  {
    id: 13,
    title: 'Climate Action',
    description:
      'Healthier soil sequesters more carbon. Pesticide overuse degrades soil microbiomes and reduces organic matter, which is the earth’s natural carbon sink. By minimizing chemical load on farmland, Niraksha preserves soil health and supports climate-resilient agricultural ecosystems across 140M hectares of Indian farmland.',
    icon: '/assets/images/sdg13.png'
  }
];

export default function SDGSection() {
  const wrapperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [imageError, setImageError] = useState({});

  const orbitSize = useMemo(
    () => `clamp(${ORBIT_SIZE.min}px, ${ORBIT_SIZE.ideal}px, ${ORBIT_SIZE.max}px)`,
    []
  );
  const iconClamp = `clamp(${ICON_SIZE.mobile}px, 20vw, ${ICON_SIZE.desktop}px)`;

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(media.matches);
    const handleMedia = () => setReducedMotion(media.matches);
    media.addEventListener('change', handleMedia);

    const handle = () => {
      const el = wrapperRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const wrapperTop = window.scrollY + rect.top;
      const wrapperHeight = rect.height;
      const viewportHeight = window.innerHeight || 1;
      const scrollY = window.scrollY;
      const denom = Math.max(wrapperHeight - viewportHeight, 1);
      const progress = Math.min(Math.max((scrollY - wrapperTop) / denom, 0), 1);
      const idx = Math.round(progress * (SDGS.length - 1));
      setActiveIndex(idx);
      setRotation(progress * 360);
    };

    const onScroll = () => requestAnimationFrame(handle);
    const onResize = () => requestAnimationFrame(handle);
    handle();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      media.removeEventListener('change', handleMedia);
    };
  }, []);

  const active = SDGS[activeIndex];
  const showFallback = imageError[active.id];
  const snappedRotation = reducedMotion ? 0 : (activeIndex / SDGS.length) * 360;

  return (
    <section
      ref={wrapperRef}
      className="relative px-6 bg-gradient-to-b from-primary to-primary-light overflow-visible"
      style={{ height: `${WRAPPER_HEIGHT_VH}vh` }}
    >
      <div className="max-w-6xl mx-auto h-full">
        <div
          className="sticky top-0 h-screen grid gap-6 md:gap-8"
          style={{ gridTemplateRows: 'auto minmax(380px,1fr) auto' }}
        >
          {/* Header */}
          <div className="pt-8 pb-2 text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-white">
              Aligned with UN <span className="gradient-text">Sustainable Development Goals</span>
            </h2>
          </div>

          {/* Orbit row */}
          <div className="flex items-center justify-center">
            <div
              className="sdg-rotator relative"
              style={{
                width: orbitSize,
                height: ORBIT_VIEWPORT_HEIGHT || `calc(${orbitSize} * ${VISIBLE_RATIO})`,
                clipPath: 'inset(0 0 45% 0)'
              }}
            >
              <div
                className="absolute"
                style={{
                  width: orbitSize,
                  height: orbitSize,
                  left: 0,
                  top: `calc(-1 * ${orbitSize} * (1 - ${VISIBLE_RATIO}))`
                }}
              >
                <div
                  className="sdg-ring z-0"
                  style={{
                    transform: `translateY(42%) rotate(${snappedRotation}deg)`
                  }}
                  aria-hidden
                >
                  <div className="sdg-orbit-glow" />
                  <div className="sdg-orbit-dots" />
                </div>

                <div
                  className="absolute left-1/2 -translate-x-1/2 z-30 flex items-center justify-center"
                  style={{
                    top: `calc(${orbitSize} * (1 - ${VISIBLE_RATIO}) + ${orbitSize} * 0.10)`,
                    width: iconClamp,
                    height: iconClamp
                  }}
                >
                  <div
                    key={active.id}
                    className={`sdg-node-inner ${reducedMotion ? '' : 'sdg-icon-anim'} ${reducedMotion ? '' : 'will-change-transform'}`}
                    style={{
                      width: '100%',
                      height: '100%',
                      boxShadow: '0 18px 50px rgba(0,0,0,0.45)',
                      margin: '0 auto',
                      position: 'relative',
                      overflow: 'hidden',
                      background: 'rgba(255,255,255,0.12)',
                      border: '1px solid rgba(255,255,255,0.25)'
                    }}
                  >
                    {!showFallback ? (
                      <img
                        src={active.icon}
                        alt={`SDG ${active.id}`}
                        width={ICON_SIZE.desktop}
                        height={ICON_SIZE.desktop}
                        className="object-contain w-full h-full"
                        loading="eager"
                        onError={() => {
                          console.warn('SDG icon failed to load', active.icon);
                          setImageError((prev) => ({ ...prev, [active.id]: true }));
                        }}
                        onLoad={() => {
                          console.info('SDG icon loaded', active.icon);
                          setImageError((prev) => ({ ...prev, [active.id]: false }));
                        }}
                      />
                    ) : (
                      <div
                        className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold"
                        style={{ background: 'rgba(255,255,255,0.25)' }}
                      >
                        {active.id}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Card row */}
          <div className="flex items-start justify-center pb-10 md:pb-12">
            <div
              key={active.id}
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
