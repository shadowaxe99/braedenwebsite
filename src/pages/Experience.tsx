import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { experience, advisoryActivities, honorsRecognition, communityLeadership } from '../lib/data';
import { motion } from 'motion/react';
import { ExternalLink, Award, Users, Briefcase } from 'lucide-react';
import Collapsible from '../components/Collapsible';

export default function Experience() {
  return (
    <main className="bg-bg min-h-screen relative overflow-hidden">
      <Navbar />
      
      <section className="pt-40 pb-24 px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-24">
            <h4 className="text-accent text-[10px] font-mono uppercase tracking-[0.4em] mb-4">Professional History</h4>
            <h1 className="text-5xl md:text-7xl font-serif tracking-tight">Experience</h1>
          </div>
          
          {/* Main Experience Timeline */}
          <div className="space-y-12 mb-40">
            {experience.map((exp, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group rounded-xl p-6 -mx-6 transition-all duration-300 relative"
              >
                <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 py-6 border-b border-border group-last:border-0">
                  <div className="space-y-2">
                    <span className="text-accent text-xs font-mono uppercase tracking-widest">{exp.period}</span>
                    <h3 className="text-text-secondary text-xs uppercase tracking-wider">{exp.role}</h3>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex justify-between items-start">
                      <h2 className="text-3xl font-serif group-hover:text-accent transition-colors">
                        {exp.link ? (
                          <a href={exp.link} target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-8 decoration-accent/30">
                            {exp.company}
                          </a>
                        ) : exp.company}
                      </h2>
                      {exp.link && (
                        <a href={exp.link} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors pt-2">
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                    <p className="text-text-primary text-lg leading-relaxed max-w-2xl font-light">{exp.description}</p>
                    
                    <Collapsible defaultExpanded={true}>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3">
                        {exp.points.map((p, j) => (
                          <li key={j} className="text-sm text-text-secondary flex items-start gap-3">
                            <span className="w-1.5 h-1.5 bg-accent/40 rounded-full mt-1.5 shrink-0" />
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </Collapsible>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Advisory & Investment Activities */}
          <div className="mb-40">
            <div className="flex items-center gap-6 mb-16">
              <h2 className="text-3xl md:text-4xl font-serif tracking-tight whitespace-nowrap">Advisory & Investment</h2>
              <div className="h-[1px] w-full bg-border" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {advisoryActivities.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 border border-border bg-card-bg/30 hover:border-accent/30 hover:bg-accent/5 transition-all duration-500 group rounded-sm"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-2 bg-accent/10 rounded-sm text-accent">
                      <Briefcase size={16} />
                    </div>
                    <ExternalLink size={14} className="text-text-secondary group-hover:text-accent transition-colors" />
                  </div>
                  <h3 className="text-xl font-serif mb-3 group-hover:text-accent transition-colors">{item.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed font-light">{item.description}</p>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Honors & Recognition */}
          <div className="mb-40">
            <div className="flex items-center gap-6 mb-16">
              <h2 className="text-3xl md:text-4xl font-serif tracking-tight whitespace-nowrap">Honors & Recognition</h2>
              <div className="h-[1px] w-full bg-border" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {honorsRecognition.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="p-8 border border-border bg-card-bg/30 flex gap-8 items-start group hover:border-accent/30 transition-all duration-500"
                >
                  <div className="p-3 bg-accent/10 rounded-full text-accent shrink-0 mt-1">
                    <Award size={20} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-serif text-text-primary group-hover:text-accent transition-colors">
                      {item.link ? (
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="hover:underline decoration-accent/30">
                          {item.title}
                        </a>
                      ) : item.title}
                    </h3>
                    <p className="text-sm text-text-secondary font-mono uppercase tracking-widest">{item.category}</p>
                    {item.links && (
                      <div className="flex flex-wrap gap-4 mt-4">
                        {item.links.map((link, j) => (
                          <a 
                            key={j} 
                            href={link.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-[10px] font-mono text-accent hover:text-text-primary transition-colors uppercase tracking-widest border-b border-accent/30 pb-1"
                          >
                            {link.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Community Leadership & Advocacy */}
          <div className="mb-24">
            <div className="flex items-center gap-6 mb-16">
              <h2 className="text-3xl md:text-4xl font-serif tracking-tight whitespace-nowrap">Leadership & Advocacy</h2>
              <div className="h-[1px] w-full bg-border" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {communityLeadership.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="space-y-4 p-8 border border-border bg-card-bg/30 hover:border-accent/30 transition-all duration-500 rounded-sm"
                >
                  <div className="flex items-center gap-4 text-accent">
                    <Users size={18} />
                    <h3 className="text-xl font-serif text-text-primary">{item.title}</h3>
                  </div>
                  {item.role && <p className="text-xs font-mono text-accent/70 uppercase tracking-widest">{item.role}</p>}
                  <p className="text-sm text-text-secondary leading-relaxed font-light">{item.description}</p>
                  {item.link && (
                    <a 
                      href={item.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-2 text-[10px] font-mono text-accent hover:text-text-primary transition-colors uppercase tracking-widest mt-4"
                    >
                      View Details <ExternalLink size={10} />
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
      
      <Footer />
    </main>
  );
}
