import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 50]);

  return (
    <section ref={containerRef} className="min-h-screen flex items-center px-6 md:px-12 pt-20 overflow-hidden">
      <div className="max-w-5xl mx-auto w-full relative z-10">
        <motion.div
          style={{ opacity, scale, y }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="text-5xl md:text-8xl font-serif mb-8 leading-[1.1] tracking-tight animate-reveal">
            Michael Gruen
          </h1>
          
          <div className="space-y-6 mb-12">
            <div className="flex items-center gap-4 text-accent text-[10px] font-mono uppercase tracking-[0.4em] mb-4">
              <span>New York</span>
              <div className="w-1 h-1 bg-accent/30 rounded-full" />
              <span>Los Angeles</span>
              <div className="w-1 h-1 bg-accent/30 rounded-full" />
              <span>Palm Beach</span>
            </div>
            <p className="text-xl md:text-3xl text-text-primary font-serif italic leading-relaxed">
              Building companies taught me how value is created.
              <br />
              <span className="text-accent">Law allows me to protect it.</span>
            </p>
            
            <p className="text-text-secondary text-lg md:text-xl leading-relaxed font-light max-w-xl">
              Strategic Advisor & Deal Architect. Transitioning into <span className="text-accent">structural law</span> to bridge the gap between entrepreneurial vision and institutional-grade execution.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 md:gap-6">
            <Link 
              to="/experience" 
              className="w-full sm:w-auto text-center px-10 py-4 bg-accent text-bg font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] hover:bg-text-primary transition-all duration-300 shadow-xl shadow-accent/10"
            >
              Experience
            </Link>
            <Link 
              to="/contact" 
              className="w-full sm:w-auto text-center px-10 py-4 border border-border text-text-primary font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] hover:border-accent transition-all duration-300"
            >
              Inquire
            </Link>
            <Link 
              to="/cv" 
              className="w-full sm:w-auto text-center px-10 py-4 border border-accent/30 text-accent font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] hover:bg-accent/5 hover:border-accent transition-all duration-300 flex items-center justify-center gap-3"
            >
              Resume <span className="text-[10px]">→</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
