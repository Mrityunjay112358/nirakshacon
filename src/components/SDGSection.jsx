import { useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function SDGSection() {
  const container = useRef();
  const ringRef = useRef();
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
    const cards = gsap.utils.toArray('.sdg-detail-card');

    // Rotate the orbit purely from scroll progress (no vertical movement)
    const rotation = gsap.to(ringRef.current, {
      rotate: 360,
      ease: 'none',
      scrollTrigger: {
        trigger: container.current,
        start: 'top center+=40',
        end: 'bottom top',
        scrub: true
      }
    });

    // Step through SDGs as user scrolls
    let current = 0;
    const stepper = ScrollTrigger.create({
      trigger: container.current,
      start: 'top center+=40',
      end: 'bottom top',
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
        start: 'top center+=20'
      }
    });

    return () => {
      rotation.kill();
      stepper.kill();
    };
  }, { scope: container });

  useGSAP(() => {
    gsap.fromTo(
      '.sdg-detail-card',
      { autoAlpha: 0, y: 18 },
      { autoAlpha: 1, y: 0, duration: 0.6, ease: 'power2.out' }
    );
  }, { scope: container, dependencies: [activeIndex] });

  const active = sdgs[activeIndex];

  return (
    <>
      <section ref={container} className="sdg-section relative h-screen px-6 bg-gradient-to-b from-primary to-primary-light overflow-visible">
        <div className="max-w-6xl mx-auto h-full">
          {/* Section Header */}
          <div className="text-center mb-6 md:mb-8 pt-6">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white">
              Aligned with UN <span className="gradient-text">Sustainable Development Goals</span>
            </h2>
            <p className="text-lg md:text-xl text-muted max-w-3xl mx-auto">
              Scroll to reveal each goal — minimal UI, motion tells the story
            </p>
          </div>

          <div className="sdg-stage sticky top-0 h-[calc(100vh-96px)] flex flex-col items-center justify-start gap-8 md:gap-10">
            <div className="sdg-rotator">
              <div className="sdg-ring" ref={ringRef}>
                <div className="sdg-orbit-glow" />
                {sdgs.map((sdg, index) => (
                  <div
                    key={sdg.number}
                    className={`sdg-node ${activeIndex === index ? 'is-active' : ''}`}
                    style={{ '--angle': `${index * 90}deg` }}
                    aria-label={`SDG ${sdg.number}`}
                  >
                    <div className="sdg-node-inner">
                      <img src={sdg.image} alt={`SDG ${sdg.number}`} className="w-full h-full object-contain" />
                    </div>
                  </div>
                ))}
              </div>

              <div className="sdg-core glass">
                <img src={active.image} alt={`SDG ${active.number}`} className="w-24 h-24 object-contain" />
              </div>
            </div>

            <div className="sdg-detail-card glass rounded-3xl p-8 md:p-10 shadow-2xl max-w-3xl w-full">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {active.title}
              </h3>
              <p className="text-lg text-muted leading-relaxed">
                {active.description}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
