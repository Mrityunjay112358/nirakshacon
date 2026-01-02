import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { AlertTriangle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function ErrorSourcesSection() {
  const container = useRef();

  useGSAP(() => {
    gsap.from('.error-card', {
      scrollTrigger: {
        trigger: '.error-sources-section',
        start: 'top 80%',
        toggleActions: 'play none none none'
      },
      y: 60,
      opacity: 0,
      stagger: 0.15,
      duration: 0.8
    });
  }, { scope: container });

  const errorSources = [
    {
      source: 'Human Error',
      percentage: '~80%',
      description: 'Pilot mistakes, improper drone operation, incorrect flight paths, and mishandling during deployment'
    },
    {
      source: 'Environmental Factors',
      percentage: '~10%',
      description: 'Wind interference, poor lighting conditions, dust, and unexpected weather changes affecting flight stability'
    },
    {
      source: 'Technical Limitations',
      percentage: '~7%',
      description: 'GPS drift, camera calibration issues, battery performance in extreme temperatures, and sensor accuracy'
    },
    {
      source: 'Data Quality',
      percentage: '~3%',
      description: 'Image blur from motion, occlusion by crops, edge cases not in training data, and rare pest species'
    }
  ];

  return (
    <section ref={container} className="error-sources-section relative py-32 md:py-40 px-6 bg-gradient-to-b from-primary-light to-primary">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <AlertTriangle className="w-10 h-10 text-warning" />
            <h2 className="text-5xl md:text-7xl font-bold text-white">
              Main Sources of <span className="gradient-text">Error</span>
            </h2>
          </div>
          <p className="text-xl md:text-2xl text-muted max-w-3xl mx-auto">
            Our device can't be perfect realistically. Understanding where errors come from helps us improve.
          </p>
        </div>

        {/* Error Sources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {errorSources.map((error, index) => (
            <div
              key={index}
              className="error-card glass rounded-2xl p-8 group hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-highlight transition-colors">
                  {error.source}
                </h3>
                <div className="text-4xl md:text-5xl font-bold text-warning ml-4">
                  {error.percentage}
                </div>
              </div>
              <p className="text-muted text-lg leading-relaxed">
                {error.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center">
          <p className="text-lg text-muted max-w-3xl mx-auto">
            We're continuously improving our system through field trials, better training data, and enhanced operator training programs.
          </p>
        </div>
      </div>
    </section>
  );
}
