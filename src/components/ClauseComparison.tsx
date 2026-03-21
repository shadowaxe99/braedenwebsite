import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { clauseComparisons } from '../lib/data';
import { ArrowRight, Info, CheckCircle2, AlertCircle } from 'lucide-react';

export default function ClauseComparison() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 px-6 bg-bg border-t border-border">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <h4 className="text-accent text-[10px] font-mono uppercase tracking-[0.4em] mb-4">Drafting Precision</h4>
          <h2 className="text-3xl md:text-4xl font-serif tracking-tight">The Structural Improvement</h2>
          <p className="text-text-secondary mt-4 font-light max-w-2xl">Demonstrating the difference between standard boilerplate and high-judgment deal architecture.</p>
        </div>

        <div className="grid lg:grid-cols-[300px_1fr] gap-12">
          {/* Sidebar Navigation */}
          <div className="space-y-4">
            {clauseComparisons.map((clause, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`w-full text-left p-6 border transition-all duration-300 group ${
                  activeIndex === i 
                    ? 'border-accent bg-accent/5' 
                    : 'border-border hover:border-accent/50 bg-card-bg/30'
                }`}
              >
                <h4 className={`text-sm font-serif mb-1 transition-colors ${activeIndex === i ? 'text-accent' : 'text-text-primary'}`}>
                  {clause.title}
                </h4>
                <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-text-secondary">
                  <span>View Comparison</span>
                  <ArrowRight size={12} className={`transition-transform duration-300 ${activeIndex === i ? 'translate-x-1' : ''}`} />
                </div>
              </button>
            ))}
          </div>

          {/* Comparison View */}
          <div className="space-y-8 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="space-y-8"
              >
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Standard Clause */}
                  <div className="p-8 border border-border bg-card-bg/40 rounded-sm relative overflow-hidden group hover:border-red-500/30 transition-colors duration-500">
                    <div className="absolute top-0 right-0 p-2 bg-red-500/10 text-red-500 group-hover:bg-red-500/20 transition-colors duration-500">
                      <AlertCircle size={16} />
                    </div>
                    <h5 className="text-[10px] font-mono uppercase tracking-[0.2em] text-text-secondary mb-6 group-hover:text-red-400/70 transition-colors duration-500">The Standard Clause</h5>
                    <p className="text-text-primary font-serif italic leading-relaxed text-lg opacity-60 group-hover:opacity-80 transition-opacity duration-500 selection-redline line-through decoration-red-500/60 decoration-2">
                      "{clauseComparisons[activeIndex].standard}"
                    </p>
                  </div>

                  {/* Improved Clause */}
                  <div className="p-8 border border-accent/30 bg-accent/5 rounded-sm relative overflow-hidden shadow-[0_0_30px_rgba(198,168,91,0.05)] group hover:border-accent/60 hover:shadow-[0_0_40px_rgba(198,168,91,0.1)] transition-all duration-500">
                    <div className="absolute top-0 right-0 p-2 bg-accent/10 text-accent group-hover:bg-accent/20 transition-colors duration-500">
                      <CheckCircle2 size={16} />
                    </div>
                    <h5 className="text-[10px] font-mono uppercase tracking-[0.2em] text-accent mb-6">The Structural Improvement</h5>
                    <p className="text-text-primary font-serif italic leading-relaxed text-lg">
                      "{clauseComparisons[activeIndex].improved}"
                    </p>
                  </div>
                </div>

                {/* Explanation & Risk Outcome */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="p-8 bg-card-bg border-l-2 border-accent flex gap-6 items-start shadow-lg">
                    <div className="p-2 bg-accent/10 rounded-full text-accent shrink-0">
                      <Info size={20} />
                    </div>
                    <div>
                      <h5 className="text-[10px] font-mono uppercase tracking-[0.2em] text-text-secondary mb-2">Why it matters</h5>
                      <p className="text-text-primary font-light leading-relaxed text-sm">
                        {clauseComparisons[activeIndex].explanation}
                      </p>
                    </div>
                  </div>

                  {clauseComparisons[activeIndex].riskOutcome && (
                    <div className="p-8 bg-red-500/5 border-l-2 border-red-500/50 flex gap-6 items-start shadow-lg">
                      <div className="p-2 bg-red-500/10 rounded-full text-red-500 shrink-0">
                        <AlertCircle size={20} />
                      </div>
                      <div>
                        <h5 className="text-[10px] font-mono uppercase tracking-[0.2em] text-red-500/70 mb-2">Risk Outcome</h5>
                        <p className="text-text-primary/80 font-light leading-relaxed text-sm italic">
                          {clauseComparisons[activeIndex].riskOutcome}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
