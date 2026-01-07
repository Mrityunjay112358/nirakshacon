import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Quote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function ResultsSection() {
  const container = useRef();

  useGSAP(() => {
    // Large number counters
    const resultNumbers = document.querySelectorAll('.result-number');
    resultNumbers.forEach(counter => {
      const target = parseFloat(counter.dataset.target);
      const suffix = counter.dataset.suffix || '';

      // Set initial value to 0
      counter.textContent = '0' + suffix;

      gsap.to(counter, {
        scrollTrigger: {
          trigger: '.results-section',
          start: 'top 60%',
          toggleActions: 'play none none reverse'
        },
        textContent: target,
        duration: 2.5,
        ease: 'power2.out',
        snap: { textContent: 1 },
        onUpdate: function() {
          const value = parseFloat(this.targets()[0].textContent);
          counter.textContent = Math.round(value) + suffix;
        }
      });
    });

    // Photo grid
    gsap.from('.result-photo', {
      scrollTrigger: {
        trigger: '.photo-grid',
        start: 'top 80%'
      },
      scale: 0.8,
      opacity: 0,
      stagger: { each: 0.1, grid: 'auto', from: 'random' },
      duration: 0.8
    });

    // Quote slide
    gsap.from('.farmer-quote', {
      scrollTrigger: {
        trigger: '.farmer-quote',
        start: 'top 85%'
      },
      x: -100,
      opacity: 0,
      duration: 1
    });
  }, { scope: container });

  return (
    <section id="results" ref={container} className="results-section relative py-32 md:py-40 px-6 bg-primary">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Validated in the <span className="gradient-text">Field</span>
          </h2>
        </div>

        {/* Large Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 mb-20">
          <div className="glass rounded-2xl p-6 md:p-8 text-center hover:scale-105 transition-transform">
            <div className="result-number text-4xl md:text-5xl font-bold text-highlight mb-2" data-target="500" data-suffix="+">
              0+
            </div>
            <p className="text-sm md:text-base text-muted uppercase tracking-wide">Acres Tested</p>
          </div>

          <div className="glass rounded-2xl p-6 md:p-8 text-center hover:scale-105 transition-transform">
            <div className="result-number text-4xl md:text-5xl font-bold text-highlight mb-2" data-target="120" data-suffix="+">
              0+
            </div>
            <p className="text-sm md:text-base text-muted uppercase tracking-wide">Farmers Reached</p>
          </div>

          <div className="glass rounded-2xl p-6 md:p-8 text-center hover:scale-105 transition-transform">
            <div className="result-number text-4xl md:text-5xl font-bold text-highlight mb-2" data-target="8" data-suffix="+">
              0+
            </div>
            <p className="text-sm md:text-base text-muted uppercase tracking-wide">Field Trials</p>
          </div>

          <div className="glass rounded-2xl p-6 md:p-8 text-center hover:scale-105 transition-transform">
            <div className="text-4xl md:text-5xl font-bold text-highlight mb-2">
              40-50%
            </div>
            <p className="text-sm md:text-base text-muted uppercase tracking-wide">Pesticide Reduction</p>
          </div>

          <div className="glass rounded-2xl p-6 md:p-8 text-center hover:scale-105 transition-transform">
            <div className="result-number text-4xl md:text-5xl font-bold text-highlight mb-2" data-target="92" data-suffix="%">
              0%
            </div>
            <p className="text-sm md:text-base text-muted uppercase tracking-wide">Intent to Adopt</p>
          </div>
        </div>

        {/* Quote */}
        <div className="farmer-quote glass rounded-2xl p-8 md:p-12 mb-16 max-w-4xl mx-auto">
          <Quote className="w-12 h-12 text-highlight mb-6" />
          <p className="text-2xl md:text-3xl text-white font-medium mb-6 leading-relaxed">
            "92% of surveyed farmers expressed strong intent to adopt at pricing below $10/acre."
          </p>
          <p className="text-muted text-lg">Field Validation Study, 2025</p>
        </div>

        {/* Video & Photo Grid */}
        <div className="photo-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Image 1 */}
          <div className="result-photo">
            <div className="rounded-xl overflow-hidden aspect-video mb-3">
              <img
                src="/assets/images/dronemaking1.jpeg"
                alt="Drone Development Process"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <p className="text-center text-muted font-medium">Drone Development Process</p>
          </div>

          {/* Image 2 */}
          <div className="result-photo">
            <div className="rounded-xl overflow-hidden aspect-video mb-3">
              <img
                src="/assets/images/dronemaking2.jpeg"
                alt="Drone Development Process"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <p className="text-center text-muted font-medium">Drone Development Process</p>
          </div>

          {/* Video 1 */}
          <div className="result-photo">
            <div className="rounded-xl overflow-hidden aspect-video mb-3">
              <video
                src="/assets/videos/initial testing.mp4"
                controls
                loop
                muted
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-center text-muted font-medium">Initial Drone Testing</p>
          </div>

          {/* Video 2 */}
          <div className="result-photo">
            <div className="rounded-xl overflow-hidden aspect-video mb-3">
              <video
                src="/assets/videos/pilot usage in real world.mp4"
                controls
                loop
                muted
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-center text-muted font-medium">Pilot Usage in Real-World Settings</p>
          </div>

          {/* Video 3 */}
          <div className="result-photo">
            <div className="rounded-xl overflow-hidden aspect-video mb-3">
              <video
                src="/assets/videos/footagefromdrone.mp4"
                controls
                loop
                muted
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-center text-muted font-medium">Footage Collected from the Drone Camera in Pilot</p>
          </div>

          {/* Video 4 */}
          <div className="result-photo">
            <div className="rounded-xl overflow-hidden aspect-video mb-3">
              <video
                src="/assets/videos/village representative using drone in farm 1 in village.mp4"
                controls
                loop
                muted
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-center text-muted font-medium">Village Representative Using Niraksha in Farm</p>
          </div>
        </div>
      </div>
    </section>
  );
}
