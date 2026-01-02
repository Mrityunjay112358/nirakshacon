import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Scan, Brain, MapPin } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function HowItWorks() {
  const container = useRef();

  useGSAP(() => {
    const steps = gsap.utils.toArray('.process-step');

    gsap.to(steps, {
      xPercent: -100 * (steps.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: '.process-container',
        pin: true,
        scrub: 1,
        snap: 1 / (steps.length - 1),
        end: () => '+=' + document.querySelector('.process-track').scrollWidth
      }
    });

    // Connecting line draws
    gsap.from('.connecting-line', {
      scaleX: 0,
      transformOrigin: 'left center',
      scrollTrigger: {
        trigger: '.process-container',
        start: 'top top',
        end: '+=2000',
        scrub: 1
      }
    });
  }, { scope: container });

  return (
    <section ref={container} className="relative bg-gradient-to-b from-primary-light to-primary overflow-visible z-10">
      {/* Section Header - Outside the pinned container */}
      <div className="text-center py-16 md:py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
          How It <span className="gradient-text">Works</span>
        </h2>
        <p className="text-lg md:text-xl text-muted">Three simple steps to protect your farm</p>
      </div>

      {/* Horizontal Scroll Container - This gets pinned */}
      <div className="process-container relative h-[80vh] md:h-screen">
        {/* Connecting Line */}
        <div className="connecting-line absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-highlight/50 to-highlight z-0 pointer-events-none" />

        {/* Horizontal Scroll Track */}
        <div className="process-track flex h-full relative z-20">
          {/* Step 1: SCAN */}
          <div className="process-step min-w-full h-full flex items-center justify-center px-6">
            <div className="max-w-4xl w-full">
              <div className="glass rounded-3xl p-10 md:p-16">
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-highlight/20 to-accent/20 rounded-full flex items-center justify-center relative">
                      <div className="absolute inset-0 bg-highlight/10 rounded-full animate-ping" />
                      <Scan className="w-16 h-16 md:w-20 md:h-20 text-highlight relative z-10" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center md:text-left">
                    <div className="text-highlight text-xl font-bold mb-2 uppercase tracking-widest">Step 1</div>
                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">SCAN</h3>
                    <ul className="space-y-3 text-lg text-muted mb-8">
                      <li className="flex items-start md:items-center">
                        <span className="text-highlight mr-2">•</span>
                        Autonomous flight at 30-60m altitude
                      </li>
                      <li className="flex items-start md:items-center">
                        <span className="text-highlight mr-2">•</span>
                        Covers 2.5 hectares in 15 minutes
                      </li>
                      <li className="flex items-start md:items-center">
                        <span className="text-highlight mr-2">•</span>
                        70% image overlap for complete coverage
                      </li>
                    </ul>
                    <div className="rounded-xl overflow-hidden">
                      <img
                        src="/assets/diagrams/drone-flight trajectory.png"
                        alt="Drone Flight Pattern"
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2: ANALYZE */}
          <div className="process-step min-w-full h-full flex items-center justify-center px-6">
            <div className="max-w-4xl w-full">
              <div className="glass rounded-3xl p-10 md:p-16">
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-highlight/20 to-accent/20 rounded-full flex items-center justify-center relative">
                      <div className="absolute inset-0 bg-highlight/10 rounded-full animate-pulse" />
                      <Brain className="w-16 h-16 md:w-20 md:h-20 text-highlight relative z-10" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center md:text-left">
                    <div className="text-highlight text-xl font-bold mb-2 uppercase tracking-widest">Step 2</div>
                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">ANALYZE</h3>
                    <ul className="space-y-3 text-lg text-muted mb-8">
                      <li className="flex items-start md:items-center">
                        <span className="text-highlight mr-2">•</span>
                        Tri-modal AI processes footage in real-time
                      </li>
                      <li className="flex items-start md:items-center">
                        <span className="text-highlight mr-2">•</span>
                        30+ FPS with 500ms latency
                      </li>
                      <li className="flex items-start md:items-center">
                        <span className="text-highlight mr-2">•</span>
                        Adapts to each farm's unique conditions
                      </li>
                    </ul>
                    <div className="rounded-xl overflow-hidden">
                      <img
                        src="/assets/diagrams/niraksha innovation  EAMF + TTA Pipeline.png"
                        alt="AI Architecture"
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3: ACT */}
          <div className="process-step min-w-full h-full flex items-center justify-center px-6">
            <div className="max-w-4xl w-full">
              <div className="glass rounded-3xl p-10 md:p-16">
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-highlight/20 to-accent/20 rounded-full flex items-center justify-center relative">
                      <MapPin className="w-16 h-16 md:w-20 md:h-20 text-highlight relative z-10 animate-bounce" style={{ animationDuration: '2s' }} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center md:text-left">
                    <div className="text-highlight text-xl font-bold mb-2 uppercase tracking-widest">Step 3</div>
                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">ACT</h3>
                    <ul className="space-y-3 text-lg text-muted mb-8">
                      <li className="flex items-start md:items-center">
                        <span className="text-highlight mr-2">•</span>
                        Georeferenced heatmaps via WhatsApp
                      </li>
                      <li className="flex items-start md:items-center">
                        <span className="text-highlight mr-2">•</span>
                        Precise spray/no-spray zones
                      </li>
                      <li className="flex items-start md:items-center">
                        <span className="text-highlight mr-2">•</span>
                        Actionable within hours, not days
                      </li>
                    </ul>
                    <div className="rounded-xl overflow-hidden">
                      <img
                        src="/assets/diagrams/KML-map with pest hotspots.png"
                        alt="Heatmap Output"
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
