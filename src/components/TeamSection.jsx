import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { User } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function TeamSection() {
  const container = useRef();

  useGSAP(() => {
    gsap.from('.team-card', {
      scrollTrigger: {
        trigger: '.team-section',
        start: 'top 80%',
        toggleActions: 'play none none none'
      },
      y: 80,
      opacity: 0,
      stagger: 0.2,
      duration: 1
    });
  }, { scope: container });

  const team = [
    {
      name: 'Aaditya',
      role: 'Problem Validation & Farmer Research',
      description: 'Led on-ground farmer interviews and market validation'
    },
    {
      name: 'Mrityunjay',
      role: 'Hardware & AI Development',
      description: 'Architected the tri-modal AI system and drone hardware'
    },
    {
      name: 'Ariana',
      role: 'Farmer Outreach & FPO Partnerships',
      description: 'Built relationships with 5 FPOs and 150+ farmers'
    },
    {
      name: 'Yashkit',
      role: 'Product Design',
      description: 'Designed user experience and farmer-facing interfaces'
    },
    {
      name: 'Ritwika',
      role: 'Field Data & Trials',
      description: 'Coordinated 8+ field trials and data collection'
    }
  ];

  return (
    <section ref={container} className="team-section relative py-32 md:py-40 px-6 bg-gradient-to-b from-primary-light to-primary overflow-visible">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Built by Students. <span className="gradient-text">Backed by Experts.</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted max-w-3xl mx-auto">
            Five high school students from Jaipur • 18 months of field research
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8 mb-12">
          {team.map((member, index) => (
            <div
              key={index}
              className="team-card bg-primary-light/20 rounded-2xl p-6 group hover:-translate-y-3 hover:shadow-2xl transition-all duration-300"
            >
              {/* Avatar */}
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-highlight/20 to-accent/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <User className="w-12 h-12 text-highlight" />
              </div>

              {/* Name */}
              <h3 className="text-2xl font-bold text-white mb-2 text-center">
                {member.name}
              </h3>

              {/* Role */}
              <p className="text-highlight text-sm uppercase tracking-wide mb-3 text-center font-medium">
                {member.role}
              </p>

              {/* Description */}
              <p className="text-muted text-sm text-center leading-relaxed">
                {member.description}
              </p>
            </div>
          ))}
        </div>

        {/* Footer Text */}
        <div className="text-center">
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Seeking advisors in agricultural engineering, rural distribution, and scaling.
          </p>
        </div>
      </div>
    </section>
  );
}
