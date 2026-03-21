import React from 'react';
import { Linkedin, Twitter, Mail, Instagram, MapPin, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-24 px-6 border-t border-border bg-bg relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-xl font-serif text-text-primary">Michael Gruen</h3>
            <p className="text-text-secondary text-sm leading-relaxed font-light">
              Strategic Deal Architect & Deal-Architect. Transitioning from venture and talent management to the practice of structural law.
            </p>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-[10px] font-mono uppercase tracking-[0.3em] text-accent">Inquiry</h4>
            <div className="space-y-3">
              <a href="mailto:gruenm@duq.edu" className="flex items-center gap-3 text-text-secondary hover:text-accent transition-colors text-sm">
                <Mail size={14} />
                gruenm@duq.edu
              </a>
              <a href="/contact" className="flex items-center gap-3 text-text-secondary hover:text-accent transition-colors text-sm">
                <Globe size={14} />
                Contact
              </a>
              <div className="flex items-center gap-3 text-text-secondary text-sm">
                <MapPin size={14} />
                New York / Los Angeles / Palm Beach / Pittsburgh
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-[10px] font-mono uppercase tracking-[0.3em] text-accent">Network</h4>
            <div className="flex gap-6">
              <a href="https://linkedin.com/in/michael-gruen99" target="_blank" rel="noopener" className="text-text-secondary hover:text-accent transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener" className="text-text-secondary hover:text-accent transition-colors">
                <Twitter size={18} />
              </a>
              <a href="https://www.instagram.com/michaelgruen/" target="_blank" rel="noopener" className="text-text-secondary hover:text-accent transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-[10px] font-mono uppercase tracking-[0.3em] text-accent">Deployment</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-text-secondary text-[10px] font-mono uppercase tracking-widest">
                <Globe size={12} />
                v1.2.0-stable
              </div>
              <p className="text-[10px] text-text-secondary/50 font-mono uppercase tracking-widest">
                Built for high-judgment environments.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-text-secondary text-[10px] font-mono uppercase tracking-widest">
            © {new Date().getFullYear()} Michael Gruen. All rights reserved.
          </div>
          <div className="text-text-secondary/30 text-[9px] font-mono uppercase tracking-widest">
            Precision in drafting. Integrity in execution.
          </div>
        </div>
      </div>
    </footer>
  );
}
