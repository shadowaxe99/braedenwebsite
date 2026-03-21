import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { locations } from '../lib/data';
import { MapPin, Info } from 'lucide-react';

export default function Map3D() {
  const [activeLocation, setActiveLocation] = useState<typeof locations[0] | null>(null);

  return (
    <section className="py-32 px-6 bg-bg border-y border-border overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[400px_1fr] gap-20 items-center">
          <div className="space-y-12">
            <div className="space-y-6">
              <h4 className="text-accent text-[10px] font-mono uppercase tracking-[0.4em]">Network Exposure</h4>
              <h2 className="text-4xl md:text-6xl font-serif tracking-tighter leading-tight">Professional Geography</h2>
              <p className="text-text-secondary text-lg font-light leading-relaxed max-w-md">
                Geographic exposure and network breadth across key strategic hubs. My network is concentrated in the primary centers of capital and influence.
              </p>
            </div>

            <div className="space-y-6">
              {locations.map((loc) => (
                <motion.button
                  key={loc.name}
                  onMouseEnter={() => setActiveLocation(loc)}
                  onMouseLeave={() => setActiveLocation(null)}
                  className={`w-full text-left p-6 border transition-all duration-500 group relative overflow-hidden ${
                    activeLocation?.name === loc.name 
                      ? 'border-accent bg-accent/5 translate-x-4' 
                      : 'border-border hover:border-accent/30 bg-card-bg/30'
                  }`}
                >
                  <div className="flex items-center justify-between relative z-10">
                    <div>
                      <h4 className={`text-xl font-serif transition-colors ${activeLocation?.name === loc.name ? 'text-accent' : 'text-text-primary'}`}>
                        {loc.name}
                      </h4>
                      <p className="text-[10px] font-mono uppercase tracking-widest text-text-secondary mt-1">{loc.hub}</p>
                    </div>
                    <MapPin size={18} className={activeLocation?.name === loc.name ? 'text-accent' : 'text-text-secondary/30'} />
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          <div className="relative aspect-[4/3] bg-bg/40 border border-border rounded-2xl overflow-hidden group">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(198,168,91,0.05),transparent_70%)]" />
            
            {/* Simple US Map SVG Background */}
            <svg 
              viewBox="0 0 1000 600" 
              className="absolute inset-0 w-full h-full opacity-10 group-hover:opacity-20 transition-opacity duration-1000"
              fill="currentColor"
            >
              <path d="M950,150 L900,100 L800,80 L700,100 L600,80 L500,100 L400,80 L300,100 L200,120 L100,150 L50,250 L100,350 L200,450 L300,500 L400,550 L500,580 L600,550 L700,500 L800,450 L900,350 L950,250 Z" />
            </svg>

            {/* Location Points */}
            <div className="absolute inset-0">
              {locations.map((loc) => {
                // Simple mapping for static US map
                const left = ((loc.lng + 125) / 60) * 100;
                const top = ((50 - loc.lat) / 25) * 100;
                
                return (
                  <motion.div
                    key={loc.name}
                    className="absolute z-10"
                    style={{ left: `${left}%`, top: `${top}%` }}
                    initial={false}
                    animate={{
                      scale: activeLocation?.name === loc.name ? 1.5 : 1,
                    }}
                  >
                    <div className="relative group/pin">
                      <div className={`w-3 h-3 rounded-full transition-all duration-500 ${
                        activeLocation?.name === loc.name 
                          ? 'bg-accent shadow-[0_0_20px_rgba(198,168,91,0.8)]' 
                          : 'bg-accent/40'
                      }`} />
                      
                      <AnimatePresence>
                        {activeLocation?.name === loc.name && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.9 }}
                            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-64 p-6 bg-bg border border-accent/30 rounded-lg shadow-2xl backdrop-blur-xl z-20"
                          >
                            <div className="space-y-3">
                              <h5 className="text-accent font-serif text-lg italic">{loc.name}</h5>
                              <p className="text-[10px] font-mono uppercase tracking-widest text-accent/60 border-b border-accent/10 pb-2">{loc.hub}</p>
                              <p className="text-xs text-text-secondary leading-relaxed font-light">{loc.details}</p>
                            </div>
                            <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-bg" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Grid Overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-10" 
              style={{ backgroundImage: 'radial-gradient(circle, #c6a85b 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
