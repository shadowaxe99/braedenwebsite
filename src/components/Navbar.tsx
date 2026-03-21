import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Linkedin, Mail, Phone, Gamepad2 } from 'lucide-react';
import { cn } from '../lib/utils';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Journey', href: '#journey' },
  { name: 'Experience', href: '#experience' },
  { name: 'Vision', href: '#vision' },
  { name: 'Contact', href: '#contact' },
];

interface NavbarProps {
  onGamesClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onGamesClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 md:px-12",
        scrolled ? "py-4 bg-brand-black/80 backdrop-blur-md border-b border-white/10" : "py-8 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.a 
          href="#home" 
          className="text-xl font-display font-black tracking-tighter uppercase italic group pr-2"
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-brand-white group-hover:text-brand-accent transition-colors">B.</span>
          <span className="text-brand-white/40 group-hover:text-brand-white transition-colors">Boyles</span>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-white/60 hover:text-brand-white transition-colors relative group"
            >
              {item.name}
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-brand-accent transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          
          {onGamesClick && (
            <button 
              onClick={onGamesClick}
              className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.3em] font-bold text-brand-accent hover:text-white transition-colors group"
            >
              <Gamepad2 className="w-3 h-3 group-hover:animate-bounce" />
              <span>Games</span>
            </button>
          )}

          <div className="h-4 w-[1px] bg-white/10 mx-4"></div>
          <div className="flex items-center space-x-4">
            <a href="https://linkedin.com/in/Braeden-Boyles" target="_blank" rel="noopener noreferrer" className="text-brand-white/40 hover:text-brand-accent transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="mailto:Braedenboyles1@gmail.com" className="text-brand-white/40 hover:text-brand-accent transition-colors">
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-brand-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 right-0 bg-brand-black border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-8 space-y-6">
              {navItems.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-display font-bold uppercase tracking-widest text-brand-white/60 hover:text-brand-white"
                >
                  {item.name}
                </a>
              ))}

              {onGamesClick && (
                <button 
                  onClick={() => {
                    setIsOpen(false);
                    onGamesClick();
                  }}
                  className="flex items-center space-x-4 text-2xl font-display font-bold uppercase tracking-widest text-brand-accent"
                >
                  <Gamepad2 className="w-6 h-6" />
                  <span>Play Games</span>
                </button>
              )}

              <div className="flex items-center space-x-6 pt-6 border-t border-white/10">
                <a href="https://linkedin.com/in/Braeden-Boyles" target="_blank" rel="noopener noreferrer" className="text-brand-white/60 hover:text-brand-accent">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="mailto:Braedenboyles1@gmail.com" className="text-brand-white/60 hover:text-brand-accent">
                  <Mail className="w-6 h-6" />
                </a>
                <a href="tel:9495008929" className="text-brand-white/60 hover:text-brand-accent">
                  <Phone className="w-6 h-6" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
