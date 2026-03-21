import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion, useScroll, useTransform } from 'motion/react';
import Collapsible from '../components/Collapsible';

export default function About() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  return (
    <main className="bg-bg min-h-screen relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <motion.div 
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -right-[10%] w-[70vw] h-[70vw] rounded-full bg-accent/5 blur-[120px]"
        />
        <motion.div 
          animate={{ 
            rotate: -360,
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 200, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[20%] -left-[10%] w-[60vw] h-[60vw] rounded-full bg-accent/5 blur-[100px]"
        />
      </div>

      <Navbar />
      
      <section className="pt-40 pb-24 px-6 max-w-5xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-24"
        >
          <div className="text-center mb-32 relative">
            <motion.h1 
              variants={itemVariants}
              className="text-6xl md:text-8xl font-serif mb-8 tracking-tight"
            >
              About
            </motion.h1>
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "120px" }}
              transition={{ duration: 1.2, delay: 0.8, ease: "circOut" }}
              className="h-[1px] bg-accent mx-auto"
            />
          </div>
          
          <div className="grid md:grid-cols-[1fr_2.5fr] gap-16 items-start">
            <motion.div style={{ y }} className="sticky top-32">
              <motion.div 
                variants={itemVariants}
                className="p-8 border border-border bg-card-bg/50 backdrop-blur-sm rounded-sm hover:border-accent/30 transition-colors duration-500"
              >
                <h3 className="text-[10px] font-mono uppercase tracking-[0.3em] text-accent mb-8 flex items-center gap-3">
                  <span className="w-4 h-[1px] bg-accent"></span>
                  At a Glance
                </h3>
                <ul className="space-y-8">
                  {[
                    { title: "Focus", value: "Litigation & Rights" },
                    { title: "Discipline", value: "Contract Law" },
                    { title: "Network", value: "Global Strategic" },
                    { title: "Base", value: "NY / LA / Palm Beach" }
                  ].map((item, i) => (
                    <motion.li 
                      key={i} 
                      className="group cursor-default"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <h4 className="text-text-secondary text-[9px] font-mono uppercase tracking-widest mb-2 group-hover:text-accent transition-colors duration-300">{item.title}</h4>
                      <p className="text-sm font-medium text-text-primary">{item.value}</p>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>

            <div className="space-y-12 text-lg leading-relaxed text-text-primary/90 font-light">
              <motion.p variants={itemVariants} className="text-2xl font-serif leading-snug text-text-primary">
                I operate at the intersection of talent, technology, and capital. My career has been defined by architecting structures that protect value in the volatile creator economy.
              </motion.p>
              
              <motion.p variants={itemVariants}>
                As a co-founder of TalentX and a venture partner at Animal Capital, I transitioned from identifying problems to building systems that allocate risk and enforce outcomes.
              </motion.p>
              
              <Collapsible title="The Evolution" defaultExpanded={true}>
                <div className="space-y-6">
                  <p>
                    Building companies revealed a critical inflection point: identifying a problem is an entrepreneurial skill; the ability to define rights and enforce outcomes is a legal one.
                  </p>
                  <p>
                    My transition into law is an escalation in function—moving from the deal-maker to the deal-architect, focusing on the discipline of litigation and structural thinking.
                  </p>
                </div>
              </Collapsible>
              
              <motion.div 
                variants={itemVariants}
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className="relative p-12 my-20 border border-accent/20 bg-accent/5 rounded-sm overflow-hidden group"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-accent group-hover:w-2 transition-all duration-500" />
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl group-hover:bg-accent/20 transition-colors duration-500" />
                <p className="text-accent font-serif italic text-2xl md:text-3xl leading-snug relative z-10">
                  "My work centers on the discipline of litigation—the precision required to protect value when the handshake fails."
                </p>
              </motion.div>

              <Collapsible title="The Thesis" defaultExpanded={true}>
                <div className="space-y-6">
                  <p>
                    In an era of algorithmic systems, the human advocate remains the essential anchor for justice. I view the law not just as a shield, but as a weapon capable of rectifying systemic power imbalances.
                  </p>
                  <p>
                    I am focused on structural thinking—how to build systems that align incentives for the long term. Whether it's IP rights or venture deal flow, controlled judgment is the ultimate competitive advantage.
                  </p>
                </div>
              </Collapsible>
            </div>
          </div>

          <div className="pt-32 mt-32 border-t border-border relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-16 bg-accent/30" />
            <div className="text-center mb-20">
              <h3 className="text-[10px] font-mono uppercase tracking-[0.4em] text-accent mb-6">Strategic Focus</h3>
              <h2 className="text-4xl md:text-5xl font-serif tracking-tight">The Architecture of Leverage</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { num: "01", title: "Deal-Architect", desc: "Focusing on the \"how\"—the structure. A deal is only as strong as its enforcement mechanism." },
                { num: "02", title: "Litigation Discipline", desc: "Litigation is the ultimate stress test. By understanding failure, I build more resilient frameworks." },
                { num: "03", title: "Systemic Advocacy", desc: "Leveraging the law to rebalance systemic asymmetries through rigorous advocacy and recognition." }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: i * 0.2, duration: 0.8, ease: "easeOut" }}
                  whileHover={{ y: -5, borderColor: 'rgba(198, 168, 91, 0.4)' }}
                  className="p-10 border border-border bg-card-bg/30 rounded-sm group transition-all duration-500 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/10 transition-colors duration-500 translate-x-1/2 -translate-y-1/2" />
                  <span className="text-5xl font-serif text-accent/10 group-hover:text-accent/30 transition-colors mb-8 block relative z-10">{item.num}</span>
                  <h4 className="text-xl font-serif mb-4 text-text-primary group-hover:text-accent transition-colors relative z-10">{item.title}</h4>
                  <p className="text-sm text-text-secondary leading-relaxed relative z-10">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="pt-32 mt-32 border-t border-border text-center max-w-4xl mx-auto relative"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-16 bg-accent/30" />
            <h3 className="text-[10px] font-mono uppercase tracking-[0.4em] text-accent mb-12">Differentiated Thesis</h3>
            <p className="text-3xl md:text-5xl font-serif leading-tight hover:text-accent transition-colors duration-700 cursor-default text-text-primary/90">
              "I do not view the law as a secondary function of business, but as its primary architect."
            </p>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
