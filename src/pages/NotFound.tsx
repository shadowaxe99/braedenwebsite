import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Search } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-bg text-text-primary selection:bg-accent/30 relative overflow-hidden">
      {/* Scanning Line */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[100] overflow-hidden opacity-20">
        <div className="absolute w-full h-[1px] bg-accent/50 animate-scan shadow-[0_0_15px_rgba(198,168,91,0.5)]" />
      </div>

      <Navbar />
      
      <main className="pt-32 pb-24 px-6">
        <div className="max-w-3xl mx-auto text-center space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/10 text-accent mb-8">
              <Search size={40} />
            </div>
            
            <h1 className="text-6xl md:text-8xl font-serif tracking-tighter">404</h1>
            <h2 className="text-2xl font-serif text-text-secondary">Document Not Found</h2>
            
            <p className="text-text-secondary max-w-lg mx-auto leading-relaxed">
              The requested resource could not be located. It may have been moved, renamed, or is temporarily unavailable.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Link 
              to="/" 
              className="inline-flex items-center gap-3 px-8 py-4 bg-text-primary text-bg rounded-full font-medium hover:bg-accent hover:text-bg transition-all duration-300 group"
            >
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              Return to Safety
            </Link>
          </motion.div>

          <div className="pt-12 border-t border-border/30">
            <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-text-secondary/50">
              Error Code: ERR_RESOURCE_NOT_FOUND
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
