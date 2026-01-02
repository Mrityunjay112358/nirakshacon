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
    <section ref={container} className="error-sources-section relative py-16 md:py-20 px-6 bg-primary/30">
      <div className="max-w-5xl mx-auto">
        {/* Compact Note */}
        <div className="glass rounded-2xl p-6 md:p-8 border-l-4 border-warning/50">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-warning flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                Sources of Error
              </h3>
              <p className="text-muted text-sm md:text-base leading-relaxed">
                <span className="text-warning font-semibold">~80%</span> operator handling, <span className="text-warning font-semibold">~10%</span> environmental conditions, <span className="text-warning font-semibold">~7%</span> technical limitations, <span className="text-warning font-semibold">~3%</span> data edge cases. We're continuously improving through field trials and enhanced training.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
