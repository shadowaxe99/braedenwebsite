import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'motion/react';
import { press } from '../lib/data';

export default function Press() {
  return (
    <main className="bg-bg min-h-screen relative overflow-hidden">
      <Navbar />
      
      <section className="pt-40 pb-24 px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <h1 className="text-5xl font-serif">Press & Recognition</h1>
            <p className="text-text-secondary text-sm font-mono uppercase tracking-widest">Selected Features & Honors</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {press.map((item, i) => (
              <motion.a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group bg-card-bg border border-border p-10 hover:border-accent/30 transition-all duration-500 flex flex-col justify-between h-full relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 blur-[100px] group-hover:bg-accent/10 transition-colors" />
                
                <div>
                  <div className="flex justify-between items-start mb-8">
                    <span className="text-accent text-xs font-mono uppercase tracking-widest">{item.category}</span>
                    <span className="text-text-secondary text-xs font-mono">{item.outlet}</span>
                  </div>
                  <h2 className="text-2xl font-serif mb-6 leading-tight group-hover:text-accent transition-colors">{item.title}</h2>
                  <p className="text-text-secondary text-base leading-relaxed mb-10 line-clamp-4">{item.description}</p>
                </div>
                
                <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest group-hover:gap-5 transition-all">
                  Read Feature <span className="text-accent">→</span>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </section>
      
      <Footer />
    </main>
  );
}
