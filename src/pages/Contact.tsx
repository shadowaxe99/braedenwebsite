import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'motion/react';
import { Mail, ArrowRight } from 'lucide-react';

export default function Contact() {
  const email = "gruenm@duq.edu";
  const subject = "Professional Inquiry - Michael Gruen";
  const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}`;

  return (
    <main className="bg-bg min-h-screen relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[10%] right-[5%] w-[40vw] h-[40vw] rounded-full bg-accent/5 blur-[100px]" />
        <div className="absolute bottom-[10%] left-[5%] w-[30vw] h-[30vw] rounded-full bg-accent/5 blur-[80px]" />
      </div>

      <Navbar />
      
      <section className="pt-32 md:pt-40 pb-24 px-6 max-w-5xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 md:space-y-12"
          >
            <div className="space-y-6">
              <h4 className="text-accent text-[10px] font-mono uppercase tracking-[0.4em]">Inquiry</h4>
              <h1 className="text-4xl md:text-7xl font-serif tracking-tight">Contact</h1>
              <p className="text-text-secondary text-base md:text-lg leading-relaxed font-light max-w-md">
                For strategic advisory, legal inquiries, or professional opportunities, please reach out directly via the professional inquiry portal.
              </p>
            </div>

            <div className="space-y-8">
              <div className="group cursor-default">
                <h4 className="text-[10px] font-mono uppercase tracking-widest text-accent mb-2">Location</h4>
                <p className="text-lg md:text-xl font-serif group-hover:text-text-primary transition-colors">New York / Los Angeles / Palm Beach / Pittsburgh</p>
              </div>
              <div className="group cursor-default">
                <h4 className="text-[10px] font-mono uppercase tracking-widest text-accent mb-2">Email</h4>
                <p className="text-lg md:text-xl font-serif group-hover:text-text-primary transition-colors">{email}</p>
              </div>
              <div className="group cursor-default">
                <h4 className="text-[10px] font-mono uppercase tracking-widest text-accent mb-2">Social</h4>
                <div className="flex flex-wrap gap-4 md:gap-6 mt-2">
                  <a href="https://twitter.com/michaelgruen" target="_blank" rel="noopener noreferrer" className="text-sm md:text-base text-text-secondary hover:text-accent transition-colors">Twitter</a>
                  <a href="https://linkedin.com/in/michaelgruen" target="_blank" rel="noopener noreferrer" className="text-sm md:text-base text-text-secondary hover:text-accent transition-colors">LinkedIn</a>
                  <a href="https://instagram.com/michaelgruen" target="_blank" rel="noopener noreferrer" className="text-sm md:text-base text-text-secondary hover:text-accent transition-colors">Instagram</a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <a 
              href={mailtoUrl}
              className="block group"
            >
              <div className="p-8 md:p-12 border border-border bg-card-bg/50 backdrop-blur-md rounded-sm hover:border-accent/50 transition-all duration-500 group-hover:translate-y-[-4px] shadow-lg hover:shadow-accent/5">
                <div className="flex justify-between items-start mb-12">
                  <div className="p-4 bg-accent/10 rounded-full text-accent group-hover:scale-110 transition-transform duration-500">
                    <Mail size={32} />
                  </div>
                  <div className="text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-x-4 group-hover:translate-x-0">
                    <ArrowRight size={24} />
                  </div>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-serif mb-4 group-hover:text-accent transition-colors">Professional Inquiry</h3>
                <p className="text-text-secondary font-light leading-relaxed mb-8">
                  Click to open your secure email client and initiate a professional dialogue. The subject line will be pre-filled for prioritized handling.
                </p>
                
                <div className="flex items-center gap-3 text-[10px] font-mono text-accent uppercase tracking-[0.2em] border-t border-border pt-6">
                  <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                  Direct Response Channel
                </div>
              </div>
            </a>
            
            <div className="mt-8 p-6 border border-border/50 bg-accent/5 rounded-sm">
              <p className="text-[10px] font-mono text-text-secondary uppercase tracking-widest leading-loose">
                Note: All communications are handled with strict professional confidentiality. Response times vary based on current matter priority.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
