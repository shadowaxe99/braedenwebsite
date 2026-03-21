import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import ClauseComparison from '../components/ClauseComparison';
import ProofLayer from '../components/ProofLayer';
import TestimonialGrid from '../components/TestimonialGrid';
import CTA from '../components/CTA';
import { CaseStudyItem } from '../components/CaseStudyItem';
import { selectedMatters } from '../lib/data';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <main ref={containerRef} className="bg-bg min-h-screen relative transition-colors duration-500">
      <Navbar />
      
      <Hero />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <ProofLayer />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <TestimonialGrid />
      </motion.div>

      {/* Narrative Section */}
      <section className="py-24 md:py-32 px-6 max-w-5xl mx-auto space-y-24">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-6 cursor-default group"
          >
            <h4 className="text-accent text-[10px] font-mono uppercase tracking-[0.4em] mb-4">The Thesis</h4>
            <p className="text-2xl md:text-3xl font-serif leading-snug text-text-primary border-l-4 border-accent pl-8 py-4 italic">
              “The first deal I ever closed taught me that leverage is temporary, but reputation is permanent.”
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 md:pt-12 cursor-default group"
          >
            <h4 className="text-accent text-[10px] font-mono uppercase tracking-[0.4em] mb-4">The Foundation</h4>
            <p className="text-text-secondary leading-relaxed text-base md:text-lg font-light">
              “My grandfather taught me that the most important part of any contract isn't the ink—it's the handshake that preceded it. In a world of digital speed, I've found that structural integrity still matters most.”
            </p>
          </motion.div>
        </div>
      </section>

      {/* Selected Matters Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div className="space-y-4">
            <h4 className="text-accent text-[10px] font-mono uppercase tracking-[0.4em]">Strategic Portfolio</h4>
            <h2 className="text-4xl md:text-6xl font-serif tracking-tighter">Selected Matters</h2>
          </div>
          <p className="text-text-secondary font-light max-w-md leading-relaxed">
            A selection of high-stakes interventions across venture capital, litigation, and complex deal architecture.
          </p>
        </motion.div>

        <div className="grid gap-px bg-border border border-border">
          {selectedMatters.map((matter, index) => (
            <CaseStudyItem 
              key={index} 
              {...matter}
              subtitle={matter.role}
            />
          ))}
        </div>
      </section>

      <ClauseComparison />

      <CTA 
        title="Ready to Architect Your Next Move?"
        subtitle="Strategic advisory for high-stakes deals, complex litigation, and venture architecture. Let's discuss how we can secure your leverage."
        primaryAction={{ label: "Get in Touch", to: "/contact" }}
        secondaryAction={{ label: "View Full Resume", href: "/cv" }}
      />
      
      <Footer />
    </main>
  );
}
