import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Trophy, Shield, Scale, Briefcase } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-brand-accent/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-brand-accent/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <span className="inline-block px-4 py-1 rounded-full border border-brand-accent/20 bg-brand-accent/5 text-brand-accent text-[10px] font-bold uppercase tracking-[0.4em] mb-4">
                Future Sports Lawyer & Agent
              </span>
              <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-display font-black tracking-tighter uppercase italic leading-[0.9]">
                Braeden <br />
                <span className="text-gradient">Boyles</span>
              </h1>
            </motion.div>

            <motion.p 
              className="max-w-xl text-lg md:text-xl text-brand-white/60 font-light leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Positioned at the intersection of athlete advocacy, contract strategy, and sports business. 
              A former quarterback bringing leadership, grit, and real-world representation experience to the next chapter of sports law.
            </motion.p>

            <motion.div 
              className="flex flex-wrap gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <a 
                href="#experience" 
                className="group flex items-center space-x-3 bg-brand-white text-brand-black px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs transition-all hover:bg-brand-accent hover:scale-105"
              >
                <span>View Experience</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#contact" 
                className="flex items-center space-x-3 border border-white/10 hover:border-brand-accent/40 px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs transition-all hover:bg-white/5"
              >
                <span>Connect</span>
              </a>
            </motion.div>
          </div>

          <div className="lg:col-span-4 hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 group"
            >
              <img 
                src="https://picsum.photos/seed/braeden-professional/600/900" 
                alt="Braeden Boyles Professional Portrait" 
                className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
                fetchPriority="high"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent opacity-60"></div>
              <div className="absolute bottom-6 left-6 right-6 p-6 glass rounded-xl role-card-hover">
                <p className="text-[10px] uppercase tracking-widest font-bold text-brand-accent mb-2">Current Role</p>
                <p className="text-sm font-display font-bold uppercase tracking-tight">Director of Special Projects</p>
                <p className="text-xs text-brand-white/60">Steinberg Sports & Entertainment</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Credibility Band */}
        <motion.div 
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 pt-12 border-t border-white/10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="flex items-center space-x-4 group">
            <div className="w-10 h-10 rounded-lg glass flex items-center justify-center group-hover:bg-brand-accent/20 transition-colors">
              <Trophy className="w-5 h-5 text-brand-accent" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest font-bold text-brand-white/40">Athletic Pedigree</p>
              <p className="text-xs font-bold uppercase tracking-tight">Benedictine QB</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 group">
            <div className="w-10 h-10 rounded-lg glass flex items-center justify-center group-hover:bg-brand-accent/20 transition-colors">
              <Briefcase className="w-5 h-5 text-brand-accent" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest font-bold text-brand-white/40">Industry Experience</p>
              <p className="text-xs font-bold uppercase tracking-tight">Steinberg Sports</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 group">
            <div className="w-10 h-10 rounded-lg glass flex items-center justify-center group-hover:bg-brand-accent/20 transition-colors">
              <Scale className="w-5 h-5 text-brand-accent" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest font-bold text-brand-white/40">Legal Trajectory</p>
              <p className="text-xs font-bold uppercase tracking-tight">Duquesne Law '29</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 group">
            <div className="w-10 h-10 rounded-lg glass flex items-center justify-center group-hover:bg-brand-accent/20 transition-colors">
              <Shield className="w-5 h-5 text-brand-accent" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest font-bold text-brand-white/40">Leadership</p>
              <p className="text-xs font-bold uppercase tracking-tight">Raven Way Leader</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 opacity-50 hidden md:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-[8px] uppercase tracking-[0.3em] font-bold text-brand-white">Scroll</span>
        <motion.div 
          className="w-[1px] h-8 bg-gradient-to-b from-brand-accent to-transparent origin-top"
          animate={{ scaleY: [0, 1, 0], translateY: [0, 8, 16] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
};
