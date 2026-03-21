import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { testimonials } from '../lib/data';
import { ChevronDown, ChevronUp, X, Quote } from 'lucide-react';

export default function TestimonialGrid() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState<typeof testimonials[0] | null>(null);
  
  const featuredTestimonials = testimonials.slice(0, 3);
  const remainingTestimonials = testimonials.slice(3);

  return (
    <section className="py-24 px-6 bg-card-bg relative">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-serif tracking-tight">Endorsements</h2>
          <p className="text-text-secondary mt-4 font-light">Strategic endorsements from industry leaders.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {featuredTestimonials.map((t, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setSelectedTestimonial(t)}
              className="bg-card-bg border border-border p-8 flex flex-col justify-between hover:border-accent transition-all duration-500 group cursor-pointer"
            >
              <p className="text-text-primary font-serif italic mb-8 leading-relaxed text-sm md:text-base antialiased line-clamp-4">
                "{t.quote}"
              </p>
              <div>
                <h4 className="text-accent font-medium group-hover:tracking-wider transition-all duration-500">{t.name}</h4>
                <p className="text-text-secondary text-[10px] md:text-xs uppercase tracking-widest mt-1">
                  {t.role}
                  {t.company && <><br />{t.company}</>}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <div className="grid md:grid-cols-3 gap-8 pt-8">
                {remainingTestimonials.map((t, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    onClick={() => setSelectedTestimonial(t)}
                    className="bg-card-bg border border-border p-8 flex flex-col justify-between hover:border-accent transition-all duration-500 group cursor-pointer"
                  >
                    <p className="text-text-primary font-serif italic mb-8 leading-relaxed text-sm md:text-base antialiased line-clamp-4">
                      "{t.quote}"
                    </p>
                    <div>
                      <h4 className="text-accent font-medium group-hover:tracking-wider transition-all duration-500">{t.name}</h4>
                      <p className="text-text-secondary text-[10px] md:text-xs uppercase tracking-widest mt-1">
                        {t.role}
                        {t.company && <><br />{t.company}</>}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {remainingTestimonials.length > 0 && (
          <div className="mt-12 flex justify-center">
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.3em] text-text-secondary hover:text-accent transition-colors"
            >
              {isExpanded ? (
                <>Show Less <ChevronUp size={14} /></>
              ) : (
                <>View All Endorsements <ChevronDown size={14} /></>
              )}
            </button>
          </div>
        )}
      </div>

      {/* Recommender Detail Modal */}
      <AnimatePresence>
        {selectedTestimonial && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedTestimonial(null)}
              className="absolute inset-0 bg-bg/90 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-card-bg border border-border p-8 md:p-12 shadow-2xl overflow-y-auto max-h-[90vh]"
            >
              <button 
                onClick={() => setSelectedTestimonial(null)}
                className="absolute top-6 right-6 text-text-secondary hover:text-accent transition-colors"
              >
                <X size={24} />
              </button>

              <div className="flex flex-col gap-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-full text-accent shrink-0">
                    <Quote size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-serif tracking-tight text-text-primary">{selectedTestimonial.name}</h3>
                    <p className="text-accent font-mono text-xs uppercase tracking-widest mt-2">
                      {selectedTestimonial.role}
                      {selectedTestimonial.company && <span className="text-text-secondary block mt-1">{selectedTestimonial.company}</span>}
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-[10px] uppercase tracking-[0.3em] text-text-secondary mb-3">Context</h4>
                    <p className="text-text-primary font-light leading-relaxed">
                      {selectedTestimonial.description}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-border">
                    <h4 className="text-[10px] uppercase tracking-[0.3em] text-text-secondary mb-4">Full Endorsement</h4>
                    <p className="text-text-primary font-serif italic text-lg md:text-xl leading-relaxed antialiased">
                      "{selectedTestimonial.quote}"
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
