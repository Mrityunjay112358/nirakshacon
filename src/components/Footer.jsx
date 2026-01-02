import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Mail, Linkedin, Twitter, Github } from 'lucide-react';

export default function Footer() {
  const container = useRef();

  return (
    <footer ref={container} className="relative py-20 px-6 bg-gradient-to-b from-primary to-black">
      <div className="max-w-7xl mx-auto">

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <img
                src="/assets/images/logo.png"
                alt="Niraksha Logo"
                className="h-12 w-auto"
              />
              <span className="ml-3 text-2xl font-bold text-white">Niraksha</span>
            </div>
            <p className="text-muted mb-6">
              AI-powered precision pest detection protecting India's farmers
            </p>
          </div>

          {/* Contact Us */}
          <div className="text-center md:text-right">
            <h3 className="text-2xl font-bold text-white mb-6">Contact Us</h3>
            <div className="space-y-3">
              <a
                href="tel:+919587913732"
                className="flex items-center justify-center md:justify-end text-muted hover:text-highlight transition-colors"
              >
                <span className="mr-2">📞</span>
                +91 9587913732
              </a>
              <a
                href="mailto:mrityunjay.coder@gmail.com"
                className="flex items-center justify-center md:justify-end text-muted hover:text-highlight transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                mrityunjay.coder@gmail.com
              </a>
              <a
                href="https://instagram.com/project.niraksha"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-end text-muted hover:text-highlight transition-colors"
              >
                <span className="mr-2">📸</span>
                @project.niraksha
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="text-center text-muted text-sm">
          <p className="mb-2">Made with 🌱 in Jaipur, India</p>
          <p>© 2025 Project Niraksha. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
