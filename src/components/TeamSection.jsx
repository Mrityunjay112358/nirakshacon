import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { User } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function TeamSection() {
  const container = useRef();

  useGSAP(() => {
    const teamCards = gsap.utils.toArray('.team-card');

    gsap.fromTo(
      teamCards,
      { y: 80, opacity: 0, rotateY: -10, scale: 0.92 },
      {
        y: 0,
        opacity: 1,
        rotateY: 0,
        scale: 1,
        stagger: 0.1,
        duration: 1.2,
        ease: 'elastic.out(1, 0.7)',
        scrollTrigger: {
          trigger: '.team-section',
          start: 'top 80%',
          toggleActions: 'play none none none'
        },
        transformOrigin: 'center center'
      }
    );
  }, { scope: container });

  const team = [
    {
      name: 'Aaditya Jain',
      role: 'Hardware Prototyping'
    },
    {
      name: 'Mrityunjay Gupta',
      role: 'AI Research & Development'
    },
    {
      name: 'Ariana Agarwal',
      role: 'Financial Analysis & FPO Partnerships'
    },
    {
      name: 'Yashkit Jain',
      role: 'Product Design'
    },
    {
      name: 'Ritwika Sinver',
      role: 'Market Analysis & Field Trials'
    }
  ];

  return (
    <section id="team" ref={container} className="team-section relative py-32 md:py-40 px-6 bg-gradient-to-b from-primary-light to-primary overflow-visible">
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

        {/* Motivation Section */}
        <div className="team-card mb-16 bg-gradient-to-r from-accent/10 to-highlight/10 rounded-3xl p-8 md:p-12 border border-accent/20">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
            Our <span className="gradient-text">Motivation</span>
          </h3>
          <p className="text-lg md:text-xl text-muted leading-relaxed text-center max-w-4xl mx-auto">
            Growing up across various rural areas of Rajasthan, we saw farming up close and noticed something that didn't add up. Farmers were spending thousands on pesticides, spraying entire fields uniformly, yet still losing a significant portion of their crops to pests. The technology to detect problems early existed for large commercial farms abroad, as revealed in our research, but nothing was accessible or affordable for Indian farmers. Thus, through the combination of our technical and management skills, we set out to help close that gap.
          </p>
        </div>

        {/* Team Grid */}
        <div className="team-grid mb-12">
          {team.map((member, index) => (
            <div
              key={index}
              className="team-card rounded-2xl p-6 group"
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
              <p className="text-highlight text-sm uppercase tracking-wide text-center font-medium">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
