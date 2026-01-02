import { useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { X } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function SDGSection() {
  const container = useRef();
  const [selectedSDG, setSelectedSDG] = useState(null);

  useGSAP(() => {
    const sdgCards = gsap.utils.toArray('.sdg-card');

    gsap.fromTo(
      sdgCards,
      { y: 80, opacity: 0, rotate: -4, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        rotate: 0,
        scale: 1,
        stagger: 0.12,
        duration: 1.2,
        ease: 'elastic.out(1, 0.7)',
        scrollTrigger: {
          trigger: '.sdg-section',
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    );
  }, { scope: container });

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
              Our technology directly contributes to 4 critical global goals
            </p>
          </div>

          {/* SDG Grid */}
          <div className="sdg-grid">
            {sdgs.map((sdg) => (
              <div
                key={sdg.number}
                className="sdg-card cursor-pointer group"
                onClick={() => setSelectedSDG(sdg)}
              >
                <div className="aspect-square rounded-xl overflow-hidden mb-4 group-hover:shadow-2xl transition-shadow" style={{ backgroundColor: sdg.color }}>
                  <img
                    src={sdg.image}
                    alt={`SDG ${sdg.number}: ${sdg.title}`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 text-center">
                  SDG {sdg.number}
                </h3>
                <p className="text-muted text-sm text-center leading-tight">
                  {sdg.title}
                </p>
                <p className="text-highlight text-xs text-center mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  Click to learn more →
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedSDG && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          onClick={() => setSelectedSDG(null)}
        >
          <div
            className="glass rounded-3xl p-8 md:p-12 max-w-3xl w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedSDG(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-muted/20 hover:bg-highlight/20 rounded-full flex items-center justify-center transition-colors group"
            >
              <X className="w-6 h-6 text-muted group-hover:text-highlight transition-colors" />
            </button>

            {/* Content */}
            <div className="flex flex-col md:flex-row gap-8">
              {/* SDG Image */}
              <div className="flex-shrink-0">
                <img
                  src={selectedSDG.image}
                  alt={`SDG ${selectedSDG.number}`}
                  className="w-48 h-48 rounded-xl"
                />
              </div>

              {/* Text Content */}
              <div className="flex-1">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
                  SDG {selectedSDG.number}
                </h3>
                <h4 className="text-xl md:text-2xl text-highlight mb-6 font-semibold">
                  {selectedSDG.title}
                </h4>
                <p className="text-lg text-muted leading-relaxed">
                  {selectedSDG.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
