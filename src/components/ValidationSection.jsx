import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Award, Shield, Handshake } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function ValidationSection() {
  const container = useRef();

  useGSAP(() => {
    // Infinite marquee
    gsap.to('.logo-track', {
      xPercent: -50,
      ease: 'none',
      duration: 20,
      repeat: -1
    });

    // Trust badges
    gsap.from('.trust-badge', {
      scrollTrigger: {
        trigger: '.validation-section',
        start: 'top 75%'
      },
      scale: 0.8,
      opacity: 0,
      stagger: 0.2,
      duration: 0.6
    });
  }, { scope: container });

  return (
    <section ref={container} className="validation-section relative py-32 md:py-40 px-6 bg-primary-light overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Endorsed By <span className="gradient-text">Industry Leaders</span>
          </h2>
        </div>

        {/* Partner Logos Marquee */}
        <div className="mb-16 overflow-hidden">
          <div className="logo-track flex gap-16 items-center mb-8">
            {[...Array(2)].map((_, setIndex) => (
              <div key={setIndex} className="flex gap-16 items-center flex-shrink-0">
                <div className="glass rounded-2xl px-12 py-8 min-w-[300px]">
                  <h3 className="text-3xl font-bold text-highlight text-center">
                    Paras Defence
                  </h3>
                  <p className="text-muted text-center text-sm mt-2">Defense & Aerospace</p>
                </div>
                <div className="glass rounded-2xl px-12 py-8 min-w-[300px]">
                  <h3 className="text-3xl font-bold text-highlight text-center">
                    NextLeap Aeronautics
                  </h3>
                  <p className="text-muted text-center text-sm mt-2">Data Partnership</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="trust-badge glass rounded-2xl p-8 text-center">
            <div className="w-16 h-16 mx-auto bg-highlight/20 rounded-full flex items-center justify-center mb-6">
              <Shield className="w-9 h-9 text-highlight" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Validated by Paras Defence</h3>
            <p className="text-muted">
              Letter of Recommendation from senior researchers validating our technology
            </p>
          </div>

          <div className="trust-badge glass rounded-2xl p-8 text-center">
            <div className="w-16 h-16 mx-auto bg-highlight/20 rounded-full flex items-center justify-center mb-6">
              <Award className="w-9 h-9 text-highlight" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Provisional Patent Filed</h3>
            <p className="text-muted">
              Patent-pending Environmental-Aware Adaptive Fusion (EAMF) technology
            </p>
          </div>

          <div className="trust-badge glass rounded-2xl p-8 text-center">
            <div className="w-16 h-16 mx-auto bg-highlight/20 rounded-full flex items-center justify-center mb-6">
              <Handshake className="w-9 h-9 text-highlight" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Recognition by Maharashtra State Government</h3>
            <p className="text-muted">
              Acknowledged for innovative agricultural technology solution
            </p>
          </div>
        </div>

        {/* Paras Defence Letter of Recommendation */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">
            Letter of Recommendation
          </h3>
          <p className="text-xl text-highlight mb-8 text-center font-semibold">
            Paras Defence and Space Technologies Ltd.
          </p>
          <div className="glass rounded-2xl p-4 md:p-8 overflow-hidden">
            <img
              src="/assets/images/Paras LOR.png"
              alt="Paras Defence Letter of Recommendation"
              className="w-full h-auto rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
