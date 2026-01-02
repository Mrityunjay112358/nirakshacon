import { useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function SDGSection() {
  const container = useRef();
  const ringRef = useRef();
  const pinRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);

  const sdgs = [
    {
      number: 3,
      title: 'Good Health and Well-being',
      image: '/assets/images/sdg3.png',
      color: '#4C9F38',
      description: 'Eliminates chronic pesticide exposure for farmers. India sees 1M+ acute poisonings annually from chemical handling. Precision targeting means farmers spray less, inhale and drink less, and handle fewer toxic substances. Crops carry lower chemical residue, reducing health risks for consumers.'
    },
    {
      number: 6,
      title: 'Clean Water and Sanitation',
      image: '/assets/images/sdg6.png',
      color: '#26BDE2',
      description: 'Prevents agricultural runoff at the source. Currently, 80% of sprayed pesticides miss targets and leach into groundwater and watersheds. By reducing pesticide volume by 40-50% and targeting only affected zones, Niraksha directly protects water quality for rural communities dependent on these sources.'
    },
    {
      number: 12,
      title: 'Responsible Consumption and Production',
      image: '/assets/images/sdg12.png',
      color: '#BF8B2E',
      description: 'Transforms wasteful blanket spraying into data-driven precision agriculture. Farmers currently waste ₹400/acre on chemicals that never reach pests. Niraksha enables targeted intervention, cutting input consumption while maintaining (and improving) crop protection outcomes.'
    },
    {
      number: 13,
      title: 'Climate Action',
      image: '/assets/images/sdg13.png',
      color: '#3F7E44',
      description: 'Healthier soil sequesters more carbon. Pesticide overuse degrades soil microbiomes and reduces organic matter, which is the earth\'s natural carbon sink. By minimizing chemical load on farmland, Niraksha preserves soil health and supports climate-resilient agricultural ecosystems across 140M hectares of Indian farmland.'
    }
  ];

  useGSAP(() => {
    const total = sdgs.length;
    const cards = gsap.utils.toArray('.sdg-detail');

    // Pin and rotate the orbit
    const rotation = gsap.to(ringRef.current, {
      rotate: 360,
      ease: 'none',
      scrollTrigger: {
        trigger: container.current,
        start: 'top center',
        end: '+=2000',
        scrub: true,
        pin: pinRef.current
      }
    });

    // Step through SDGs as user scrolls
    let current = 0;
    const stepper = ScrollTrigger.create({
      trigger: container.current,
      start: 'top center',
      end: '+=2000',
      scrub: true,
      onUpdate: (self) => {
        const segment = Math.min(total - 1, Math.floor(self.progress * total));
        if (segment !== current) {
          current = segment;
          setActiveIndex(segment);
        }
      }
    });

    // Fade in the detail block
    gsap.from(cards, {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: container.current,
        start: 'top center+=50'
      }
    });

    return () => {
      rotation.kill();
      stepper.kill();
    };
  }, { scope: container });

  const active = sdgs[activeIndex];

  return (
    <>
      <section ref={container} className="sdg-section relative py-32 md:py-40 px-6 bg-gradient-to-b from-primary to-primary-light overflow-visible">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              Aligned with UN <span className="gradient-text">Sustainable Development Goals</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted max-w-3xl mx-auto">
              Scroll to spin the SDG orbit and see how Niraksha advances each goal
            </p>
          </div>

          <div ref={pinRef} className="sdg-rotator-wrap grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Rotating Orbit */}
            <div className="flex justify-center">
              <div className="sdg-rotator">
                <div className="sdg-ring" ref={ringRef}>
                  <div className="sdg-orbit-glow" />
                  {sdgs.map((sdg, index) => (
                    <button
                      key={sdg.number}
                      className={`sdg-node ${activeIndex === index ? 'is-active' : ''}`}
                      style={{ '--angle': `${index * 90}deg`, '--badge': sdg.color }}
                      onClick={() => setActiveIndex(index)}
                    >
                      <div className="sdg-node-inner" style={{ backgroundColor: sdg.color }}>
                        <span className="text-white font-bold text-xl">SDG {sdg.number}</span>
                      </div>
                    </button>
                  ))}
                </div>

                <div className="sdg-core glass">
                  <img src={active.image} alt={`SDG ${active.number}`} className="w-24 h-24 object-contain" />
                  <p className="text-highlight font-semibold mt-4 text-center">
                    SDG {active.number}
                  </p>
                  <p className="text-white text-lg font-bold text-center leading-snug">
                    {active.title}
                  </p>
                </div>
              </div>
            </div>

            {/* Detail Panel */}
            <div className="sdg-detail glass rounded-3xl p-8 md:p-12 shadow-2xl">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full text-sm font-semibold" style={{ backgroundColor: `${active.color}22`, color: active.color }}>
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: active.color }} />
                SDG {active.number}
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mt-6 mb-4">
                {active.title}
              </h3>
              <p className="text-lg text-muted leading-relaxed mb-6">
                {active.description}
              </p>
              <p className="text-highlight text-sm uppercase tracking-wide">
                Spin the orbit or tap a badge to explore each goal →
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
