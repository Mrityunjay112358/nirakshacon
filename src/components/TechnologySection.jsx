import { useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Layers, Zap, Target } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const TechCard = ({ icon: Icon, title, frontDesc, backDetails, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="tech-card perspective-1000 cursor-pointer h-full"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
        style={{
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0)'
        }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 glass rounded-2xl p-8 backface-hidden"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="flex flex-col items-center text-center h-full justify-center">
            <div className="w-20 h-20 bg-highlight/20 rounded-2xl flex items-center justify-center mb-6">
              <Icon className="w-12 h-12 text-highlight" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{title}</h3>
            <p className="text-muted text-lg">{frontDesc}</p>
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 glass rounded-2xl p-8 backface-hidden bg-primary-light/90"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          <div className="h-full flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-highlight mb-6">{title}</h3>
            <ul className="space-y-3">
              {backDetails.map((detail, i) => (
                <li key={i} className="flex items-start text-muted">
                  <span className="text-highlight mr-2 flex-shrink-0">→</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function TechnologySection() {
  const container = useRef();

  useGSAP(() => {
    // Float animation
    gsap.to('.tech-card', {
      y: -10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      stagger: { each: 0.3, from: 'random' }
    });

    // Scroll reveal
    gsap.from('.tech-card', {
      scrollTrigger: {
        trigger: '.technology-section',
        start: 'top 70%'
      },
      y: 80,
      opacity: 0,
      rotationX: -15,
      stagger: 0.2,
      duration: 1
    });
  }, { scope: container });

  const techCards = [
    {
      icon: Layers,
      title: 'Tri-Modal AI',
      frontDesc: 'Three neural networks working in concert',
      backDetails: [
        'DeepLabv3+ segmentation (89% mIoU)',
        'YOLOv8-s detection (75% mAP @ 30+ FPS)',
        'DINOv2 anomaly detection (85% F1)',
        'Ensemble fusion for maximum accuracy'
      ]
    },
    {
      icon: Zap,
      title: 'Environmental-Aware Adaptive Fusion',
      frontDesc: 'Real-time adaptation to field conditions',
      backDetails: [
        'Onboard sensors: temperature, humidity, light, pressure',
        'Dynamic model reweighting based on conditions',
        '+12-21% accuracy in variable conditions',
        'No static weights, just intelligence that responds'
      ]
    },
    {
      icon: Target,
      title: 'Test-Time Adaptation',
      frontDesc: 'Self-learning system that improves',
      backDetails: [
        'Learns new farm characteristics mid-flight',
        '+21% accuracy on novel environments',
        'No retraining required',
        'Builds farm-specific intelligence over time'
      ]
    }
  ];

  return (
    <section id="technology" ref={container} className="technology-section relative py-32 md:py-40 px-6 bg-gradient-to-b from-primary to-primary-light overflow-hidden">
      {/* Particle background effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, rgba(143, 188, 143, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Our <span className="gradient-text">Innovation</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted max-w-3xl mx-auto">
            Patent-pending adaptive AI that learns each farm's unique conditions
          </p>
        </div>

        {/* Tech Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {techCards.map((card, index) => (
            <div key={index} className="h-96">
              <TechCard {...card} index={index} />
            </div>
          ))}
        </div>

        {/* Hardware Spec Bar */}
        <div className="glass rounded-2xl p-6 md:p-8 text-center">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 text-muted">
            <div className="flex items-center">
              <span className="text-highlight mr-2">●</span>
              <span className="font-medium">$1,300 system</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-muted/30" />
            <div className="flex items-center">
              <span className="text-highlight mr-2">●</span>
              <span className="font-medium">RTK-GNSS ±0.5m precision</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-muted/30" />
            <div className="flex items-center">
              <span className="text-highlight mr-2">●</span>
              <span className="font-medium">Raspberry Pi 5 Companion Computer</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-muted/30" />
            <div className="flex items-center">
              <span className="text-highlight mr-2">●</span>
              <span className="font-medium">35-minute flight time</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
