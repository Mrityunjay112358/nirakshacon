import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { AlertTriangle, TrendingDown, Droplets, Skull } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function ProblemSection() {
  const container = useRef();

  useGSAP(() => {
    // Stat cards stagger in
    gsap.from('.problem-card', {
      scrollTrigger: {
        trigger: '.problem-section',
        start: 'top 80%',
        end: 'top 30%',
        scrub: 1
      },
      y: 100,
      opacity: 0,
      stagger: 0.2
    });

    // Counter animation
    const counters = document.querySelectorAll('.stat-number');
    counters.forEach(counter => {
      const target = parseFloat(counter.dataset.target);
      const suffix = counter.dataset.suffix || '';

      gsap.to(counter, {
        scrollTrigger: {
          trigger: counter,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        },
        textContent: target,
        duration: 2,
        ease: 'power2.out',
        snap: { textContent: 0.01 },
        onUpdate: function() {
          const value = parseFloat(this.targets()[0].textContent);
          counter.textContent = Math.round(value) + suffix;
        }
      });
    });

    // Warning glow pulse
    gsap.to('.warning-glow', {
      opacity: 0.6,
      scale: 1.1,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });
  }, { scope: container });

  return (
    <section ref={container} className="problem-section relative py-32 md:py-40 px-6 bg-gradient-to-b from-primary to-primary-light">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            The Silent <span className="text-warning">Crisis</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted max-w-4xl mx-auto leading-relaxed">
            India's farmers spray blind. Without real-time pest visibility, they over-apply pesticides—wasting money,
            contaminating water systems, and still losing 40% of their harvest.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Card 1 */}
          <div className="problem-card relative glass rounded-2xl p-8 overflow-hidden group hover:scale-105 transition-transform duration-300">
            <div className="warning-glow absolute inset-0 bg-warning/10 rounded-2xl opacity-0" />
            <div className="relative z-10">
              <div className="w-14 h-14 bg-warning/20 rounded-xl flex items-center justify-center mb-6">
                <TrendingDown className="w-8 h-8 text-warning" />
              </div>
              <div className="stat-number text-5xl md:text-6xl font-bold text-warning mb-3" data-target="40" data-suffix="%">
                0%
              </div>
              <p className="text-lg text-muted uppercase tracking-wide">
                Annual crop yield lost to pests
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="problem-card relative glass rounded-2xl p-8 overflow-hidden group hover:scale-105 transition-transform duration-300">
            <div className="warning-glow absolute inset-0 bg-warning/10 rounded-2xl opacity-0" />
            <div className="relative z-10">
              <div className="w-14 h-14 bg-warning/20 rounded-xl flex items-center justify-center mb-6">
                <AlertTriangle className="w-8 h-8 text-warning" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-warning mb-3">
                ₹<span className="stat-number" data-target="25000">0</span>
              </div>
              <p className="text-lg text-muted uppercase tracking-wide">
                Damage cost per acre annually
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="problem-card relative glass rounded-2xl p-8 overflow-hidden group hover:scale-105 transition-transform duration-300">
            <div className="warning-glow absolute inset-0 bg-warning/10 rounded-2xl opacity-0" />
            <div className="relative z-10">
              <div className="w-14 h-14 bg-warning/20 rounded-xl flex items-center justify-center mb-6">
                <Droplets className="w-8 h-8 text-warning" />
              </div>
              <div className="stat-number text-5xl md:text-6xl font-bold text-warning mb-3" data-target="80" data-suffix="%">
                0%
              </div>
              <p className="text-lg text-muted uppercase tracking-wide">
                Pesticides miss their targets
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="problem-card relative glass rounded-2xl p-8 overflow-hidden group hover:scale-105 transition-transform duration-300">
            <div className="warning-glow absolute inset-0 bg-warning/10 rounded-2xl opacity-0" />
            <div className="relative z-10">
              <div className="w-14 h-14 bg-warning/20 rounded-xl flex items-center justify-center mb-6">
                <Skull className="w-8 h-8 text-warning" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-warning mb-3">
                <span className="stat-number" data-target="3">0</span>M
              </div>
              <p className="text-lg text-muted uppercase tracking-wide">
                Tonnes chemicals poisoning soil & water
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
