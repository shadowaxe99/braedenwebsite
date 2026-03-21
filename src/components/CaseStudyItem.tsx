import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Target, Zap, CheckCircle2, Lightbulb } from 'lucide-react';

interface CaseStudyItemProps {
  title: string;
  subtitle: string;
  description?: string;
  problem?: string;
  intervention?: string;
  outcome?: string;
  takeaway?: string;
  tags?: string[];
}

export const CaseStudyItem = ({ 
  title, 
  subtitle, 
  description,
  problem,
  intervention,
  outcome,
  takeaway,
  tags = []
}: CaseStudyItemProps) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div 
      layout
      className="border border-border rounded-sm mb-6 overflow-hidden bg-card-bg/30 hover:border-accent/30 transition-all duration-500 group"
      data-cursor="case-study"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full p-8 flex flex-col md:flex-row md:items-center justify-between text-left hover:bg-bg/20 transition-colors gap-6"
      >
        <div className="flex-1 space-y-3">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span 
                key={tag} 
                className="text-[10px] font-mono uppercase tracking-widest text-accent/60 border border-accent/20 px-2 py-0.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-2xl font-serif italic text-text-primary group-hover:text-accent transition-colors duration-300">{title}</h3>
          <p className="text-base text-text-secondary font-light leading-relaxed max-w-2xl">{subtitle}</p>
        </div>
        <span className={`text-accent transition-transform duration-500 flex-shrink-0 ${open ? 'rotate-180' : ''}`}>
          <ChevronDown size={24} strokeWidth={1.5} />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            className="overflow-hidden bg-bg/40"
          >
            <div className="p-8 border-t border-border">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Layered Storytelling */}
                <div className="space-y-10">
                  {problem && (
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-accent/80 font-mono text-xs uppercase tracking-widest">
                        <Target size={14} />
                        <span>The Problem</span>
                      </div>
                      <p className="text-text-primary/80 leading-relaxed font-light italic">
                        {problem}
                      </p>
                    </div>
                  )}

                  {intervention && (
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-accent/80 font-mono text-xs uppercase tracking-widest">
                        <Zap size={14} />
                        <span>The Intervention</span>
                      </div>
                      <p className="text-text-primary/80 leading-relaxed">
                        {intervention}
                      </p>
                    </div>
                  )}
                </div>

                <div className="space-y-10">
                  {outcome && (
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-accent/80 font-mono text-xs uppercase tracking-widest">
                        <CheckCircle2 size={14} />
                        <span>The Outcome</span>
                      </div>
                      <p className="text-text-primary/80 leading-relaxed font-medium">
                        {outcome}
                      </p>
                    </div>
                  )}

                  {takeaway && (
                    <div className="p-6 bg-accent/5 border border-accent/20 rounded-lg space-y-3">
                      <div className="flex items-center gap-2 text-accent font-mono text-xs uppercase tracking-widest">
                        <Lightbulb size={14} />
                        <span>Strategic Takeaway</span>
                      </div>
                      <p className="text-accent/90 text-sm leading-relaxed italic">
                        {takeaway}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex justify-end pt-8">
                <button 
                  onClick={() => setOpen(false)}
                  className="text-[10px] font-mono uppercase tracking-widest text-text-secondary hover:text-accent transition-colors"
                >
                  Collapse Analysis
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
