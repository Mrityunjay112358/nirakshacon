import { useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Menu, X } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Navigation() {
  const container = useRef();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useGSAP(() => {
    // Show nav after intro
    ScrollTrigger.create({
      trigger: '.problem-section',
      start: 'top 80%',
      onEnter: () => gsap.to('.main-nav', { y: 0, opacity: 1, duration: 0.5 }),
      onLeaveBack: () => gsap.to('.main-nav', { y: -100, opacity: 0, duration: 0.3 })
    });

    // Hide on scroll down, show on scroll up
    let lastScroll = 0;
    ScrollTrigger.create({
      start: 0,
      end: 'max',
      onUpdate: (self) => {
        const currentScroll = self.scroll();
        if (currentScroll > lastScroll && currentScroll > 100) {
          gsap.to('.main-nav', { y: -100, duration: 0.3 });
        } else {
          gsap.to('.main-nav', { y: 0, duration: 0.3 });
        }
        lastScroll = currentScroll;
      }
    });
  }, { scope: container });

  const navItems = [
    { label: 'Problem', href: '#problem' },
    { label: 'Solution', href: '#solution' },
    { label: 'Technology', href: '#technology' },
    { label: 'Results', href: '#results' },
    { label: 'Team', href: '#team' },
    { label: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav ref={container} className="main-nav fixed top-0 left-0 right-0 z-50 opacity-0 -translate-y-full">
      <div className="glass border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src="/assets/images/logo.png"
                alt="Niraksha"
                className="h-10 w-auto"
              />
              <span className="ml-3 text-xl font-bold text-white">Niraksha</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-muted hover:text-highlight transition-colors text-sm uppercase tracking-wider font-medium"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass border-b border-white/10">
          <div className="px-6 py-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left text-muted hover:text-highlight transition-colors text-sm uppercase tracking-wider font-medium py-2"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
