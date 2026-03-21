import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download } from 'lucide-react';

interface CTAProps {
  title: string;
  subtitle: string;
  primaryAction: { label: string; to: string };
  secondaryAction?: { label: string; href: string };
}

export default function CTA({ title, subtitle, primaryAction, secondaryAction }: CTAProps) {
  return (
    <section className="py-32 px-6 bg-bg border-y border-border relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(198,168,91,0.05),transparent_70%)]" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10 space-y-12">
        <div className="space-y-6">
          <h2 className="text-4xl md:text-7xl font-serif tracking-tighter leading-tight">
            {title}
          </h2>
          <p className="text-text-secondary text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link 
            to={primaryAction.to}
            className="group px-12 py-5 bg-accent text-bg text-xs font-mono uppercase tracking-[0.3em] hover:bg-text-primary transition-all duration-500 shadow-2xl shadow-accent/20 flex items-center gap-4"
          >
            {primaryAction.label}
            <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform duration-500" />
          </Link>

          {secondaryAction && (
            <a 
              href={secondaryAction.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group px-12 py-5 border border-border text-text-primary text-xs font-mono uppercase tracking-[0.3em] hover:border-accent transition-all duration-500 flex items-center gap-4"
            >
              <Download size={14} className="group-hover:translate-y-1 transition-transform duration-500" />
              {secondaryAction.label}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
