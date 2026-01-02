import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function IntroSequence() {
  const container = useRef();

  useGSAP(() => {
    // Initial states
    gsap.set('.drone-asset', {
      y: '100vh',
      scale: 0.4,
      rotation: -5
    });
    gsap.set('.hero-content', { opacity: 0, y: 60 });
    gsap.set('.category-badge', { y: 30, opacity: 0 });
    gsap.set('.hero-title-word', { y: 100, opacity: 0 });
    gsap.set('.hero-subtitle', { y: 40, opacity: 0 });
    gsap.set('.hero-stats', { y: 30, opacity: 0, scale: 0.9 });
    gsap.set('.scroll-indicator', { opacity: 0 });
    gsap.set('.farm-bg', { scale: 1.1 });

    const introTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.intro-wrapper',
        pin: true,
        scrub: 1.5,
        start: 'top top',
        end: '+=3000',
        anticipatePin: 1
      }
    });

    introTl
      // Phase 1: Farm background subtle zoom out (0-15% of scroll)
      .to('.farm-bg', {
        scale: 1,
        duration: 1,
        ease: 'none'
      })

      // Phase 2: Drone rises from bottom (15-50% of scroll)
      .to('.drone-asset', {
        y: '0vh',
        scale: 0.8,
        rotation: 0,
        duration: 2.5,
        ease: 'power2.out'
      }, '<0.5')

      // Phase 3: Drone reaches center and hovers (50-60% of scroll)
      .to('.drone-asset', {
        y: '-5vh',
        duration: 0.4,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: 1
      })

      // Phase 4: Drone shadow grows
      .to('.drone-shadow', {
        scale: 1.5,
        opacity: 0.3,
        duration: 0.5
      }, '<')

      // Phase 5: Background darkens for reveal (60-70% of scroll)
      .to('.farm-bg', {
        filter: 'brightness(0.3)',
        duration: 1
      }, 'reveal')

      // Phase 6: Drone expands and fades (60-80% of scroll)
      .to('.drone-asset', {
        scale: 4,
        opacity: 0,
        duration: 2,
        ease: 'power2.in'
      }, 'reveal')

      .to('.drone-shadow', {
        opacity: 0,
        scale: 3,
        duration: 1.5
      }, 'reveal')

      // Phase 7: Hero content reveals (70-100% of scroll)
      .to('.hero-content', {
        opacity: 1,
        y: 0,
        duration: 1
      }, 'reveal+=0.5')

      // Category badge
      .to('.category-badge', {
        y: 0,
        opacity: 1,
        duration: 0.6
      }, 'reveal+=0.6')

      // Staggered title words
      .to('.hero-title-word', {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out'
      }, 'reveal+=0.8')

      .to('.hero-subtitle', {
        y: 0,
        opacity: 1,
        duration: 0.6
      }, '-=0.4')

      .to('.hero-stats', {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.5,
        stagger: 0.1
      }, '-=0.3')

      .to('.scroll-indicator', {
        opacity: 1,
        duration: 0.3
      }, '-=0.2');

  }, { scope: container });

  return (
    <div ref={container}>
      <section className="intro-wrapper relative h-screen w-full overflow-hidden">
        {/* Farm Background Layer */}
        <div className="farm-bg absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628]/60 via-[#0A1628]/40 to-[#0A1628]/80 z-10" />
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/assets/videos/usage in farm 2.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Drone Layer */}
        <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
          <div className="relative">
            <img
              src="/assets/images/logo.png"
              alt="Niraksha Drone"
              className="drone-asset w-64 md:w-80 lg:w-96 h-auto drop-shadow-[0_25px_50px_rgba(0,0,0,0.5)]"
            />
            <div className="drone-shadow absolute -bottom-8 left-1/2 -translate-x-1/2 w-32 h-4 bg-black/20 rounded-full blur-md" />
          </div>
        </div>

        {/* Hero Content Layer (revealed after drone) */}
        <div className="hero-content absolute inset-0 flex flex-col items-center justify-center z-10 px-6 text-center">
          {/* Category Badge */}
          <div className="category-badge mb-6">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-accent/20 backdrop-blur-sm rounded-full border border-accent/30">
              <img src="/assets/images/energy.png" alt="Energy and Environment" className="w-8 h-8 object-contain" />
              <span className="text-highlight font-semibold text-lg">Energy and Environment</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 overflow-hidden">
            <span className="hero-title-word inline-block">See</span>{' '}
            <span className="hero-title-word inline-block">Pests</span>{' '}
            <span className="hero-title-word inline-block text-highlight">Before</span>{' '}
            <span className="hero-title-word inline-block">They</span>{' '}
            <span className="hero-title-word inline-block">Strike</span>
          </h1>

          <p className="hero-subtitle text-xl md:text-2xl text-muted max-w-3xl mb-12">
            AI-powered drone intelligence protecting India's 86 million smallholder farmers from crop loss
          </p>

          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            <div className="hero-stats text-center">
              <div className="text-4xl md:text-5xl font-bold text-highlight">95%</div>
              <div className="text-sm text-muted uppercase tracking-widest mt-1">Detection Accuracy</div>
            </div>
            <div className="hero-stats text-center">
              <div className="text-4xl md:text-5xl font-bold text-highlight">40-50%</div>
              <div className="text-sm text-muted uppercase tracking-widest mt-1">Less Pesticide</div>
            </div>
            <div className="hero-stats text-center">
              <div className="text-4xl md:text-5xl font-bold text-highlight">500+</div>
              <div className="text-sm text-muted uppercase tracking-widest mt-1">Acres Validated</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center">
          <span className="text-muted text-sm uppercase tracking-widest mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-muted/50 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-highlight rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </section>
    </div>
  );
}
