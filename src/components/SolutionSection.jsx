import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Leaf, TrendingUp, MessageSquare, DollarSign } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function SolutionSection() {
  const container = useRef();

  useGSAP(() => {
    const solutionTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.solution-section',
        start: 'top 60%',
        end: 'top 10%',
        scrub: 1
      }
    });

    solutionTl
      .from('.solution-left', { x: -100, opacity: 0, duration: 1 })
      .from('.solution-right', { x: 100, opacity: 0, duration: 1 }, '-=0.5')
      .from('.benefit-card', { y: 50, opacity: 0, stagger: 0.15 }, '-=0.3');

    // Heatmap pulse
    gsap.to('.heatmap-image', {
      boxShadow: '0 0 60px rgba(143, 188, 143, 0.4)',
      duration: 2,
      repeat: -1,
      yoyo: true
    });
  }, { scope: container });

  return (
    <section ref={container} className="solution-section relative py-32 md:py-40 px-6 bg-primary">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Precision Intelligence for <span className="gradient-text">Every Farm</span>
          </h2>
        </div>

        {/* Before/After Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 mb-20">
          {/* LEFT: Traditional Approach */}
          <div className="solution-left">
            <div className="glass rounded-2xl p-8 md:p-10 border-2 border-red-500/20">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-red-400">
                Traditional Approach
              </h3>
              <div className="aspect-video bg-gradient-to-br from-red-900/20 to-red-950/30 rounded-xl mb-6 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 grid grid-cols-4 grid-rows-4">
                  {[...Array(16)].map((_, i) => (
                    <div key={i} className="border border-red-500/10 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-red-500/30 animate-pulse" />
                    </div>
                  ))}
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-red-400 text-6xl font-bold opacity-50">×</div>
                </div>
              </div>
              <ul className="space-y-3 text-muted">
                <li className="flex items-start">
                  <span className="text-red-400 mr-2 text-xl">×</span>
                  <span>Blanket spraying across entire fields</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2 text-xl">×</span>
                  <span>80% of pesticides miss their target</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2 text-xl">×</span>
                  <span>Reactive approach after visible damage</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2 text-xl">×</span>
                  <span>Massive environmental contamination</span>
                </li>
              </ul>
            </div>
          </div>

          {/* RIGHT: Niraksha Detection */}
          <div className="solution-right">
            <div className="glass rounded-2xl p-8 md:p-10 border-2 border-highlight/20">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-highlight">
                Niraksha Detection
              </h3>
              <div className="heatmap-image aspect-video rounded-xl mb-6 overflow-hidden">
                <img
                  src="/assets/diagrams/KML-map with pest hotspots.png"
                  alt="Pest Detection Heatmap"
                  className="w-full h-full object-cover"
                />
              </div>
              <ul className="space-y-3 text-muted">
                <li className="flex items-start">
                  <span className="text-highlight mr-2 text-xl">✓</span>
                  <span>Precise georeferenced pest hotspot mapping</span>
                </li>
                <li className="flex items-start">
                  <span className="text-highlight mr-2 text-xl">✓</span>
                  <span>95% detection accuracy with AI</span>
                </li>
                <li className="flex items-start">
                  <span className="text-highlight mr-2 text-xl">✓</span>
                  <span>Early detection before visible damage</span>
                </li>
                <li className="flex items-start">
                  <span className="text-highlight mr-2 text-xl">✓</span>
                  <span>Targeted treatment only where needed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="benefit-card glass rounded-xl p-6 hover:scale-105 transition-transform duration-300">
            <div className="w-12 h-12 bg-highlight/20 rounded-lg flex items-center justify-center mb-4">
              <Leaf className="w-7 h-7 text-highlight" />
            </div>
            <div className="text-3xl font-bold text-highlight mb-2">40-50%</div>
            <p className="text-muted">Less Pesticide</p>
          </div>

          <div className="benefit-card glass rounded-xl p-6 hover:scale-105 transition-transform duration-300">
            <div className="w-12 h-12 bg-highlight/20 rounded-lg flex items-center justify-center mb-4">
              <TrendingUp className="w-7 h-7 text-highlight" />
            </div>
            <div className="text-3xl font-bold text-highlight mb-2">10-12%</div>
            <p className="text-muted">Higher Yields</p>
          </div>

          <div className="benefit-card glass rounded-xl p-6 hover:scale-105 transition-transform duration-300">
            <div className="w-12 h-12 bg-highlight/20 rounded-lg flex items-center justify-center mb-4">
              <MessageSquare className="w-7 h-7 text-highlight" />
            </div>
            <div className="text-3xl font-bold text-highlight mb-2">Hours</div>
            <p className="text-muted">WhatsApp Reports</p>
          </div>

          <div className="benefit-card glass rounded-xl p-6 hover:scale-105 transition-transform duration-300">
            <div className="w-12 h-12 bg-highlight/20 rounded-lg flex items-center justify-center mb-4">
              <DollarSign className="w-7 h-7 text-highlight" />
            </div>
            <div className="text-3xl font-bold text-highlight mb-2">₹600-800</div>
            <p className="text-muted">Per Acre</p>
          </div>
        </div>
      </div>
    </section>
  );
}
