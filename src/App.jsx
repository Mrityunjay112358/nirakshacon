import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// Components
import Navigation from './components/Navigation';
import IntroSequence from './components/IntroSequence';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import HowItWorks from './components/HowItWorks';
import TechnologySection from './components/TechnologySection';
import ErrorSourcesSection from './components/ErrorSourcesSection';
import ResultsSection from './components/ResultsSection';
import TeamSection from './components/TeamSection';
import ValidationSection from './components/ValidationSection';
import SDGSection from './components/SDGSection';
import Footer from './components/Footer';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, useGSAP);

function App() {
  useEffect(() => {
    // GSAP global config
    gsap.config({
      nullTargetWarn: false
    });

    // Default ease for all animations
    gsap.defaults({
      ease: 'power3.out',
      duration: 1
    });

    // Refresh ScrollTrigger on resize
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="App">
      <Navigation />

      <IntroSequence />

      <div id="problem">
        <ProblemSection />
      </div>

      <div id="solution">
        <SolutionSection />
      </div>

      <div id="how-it-works">
        <HowItWorks />
      </div>

      <div id="technology">
        <TechnologySection />
      </div>

      <ErrorSourcesSection />

      <div id="results">
        <ResultsSection />
      </div>

      <div id="sdg">
        <SDGSection />
      </div>

      <div id="team">
        <TeamSection />
      </div>

      <div id="validation">
        <ValidationSection />
      </div>

      <div id="contact">
        <Footer />
      </div>
    </div>
  );
}

export default App;
