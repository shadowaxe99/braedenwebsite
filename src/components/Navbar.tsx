import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import { Menu, X, MousePointer2, Sun, Moon } from 'lucide-react';
import { useCursor } from '../context/CursorContext';
import { useTheme } from '../context/ThemeContext';

const navItems = [
  { name: 'About', path: '/about' },
  { name: 'Experience', path: '/experience' },
  { name: 'Writing', path: '/writing' },
  { name: 'Press', path: '/press' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isCursorEnabled, setIsCursorEnabled } = useCursor();
  const { isLightMode, setIsLightMode } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('mobile-nav-open');
    } else {
      document.body.classList.remove('mobile-nav-open');
    }
  }, [isMobileMenuOpen]);

  const handleLogoClick = (e: React.MouseEvent) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-6 px-6 md:px-12 flex justify-between items-center',
        isScrolled ? 'bg-bg/80 backdrop-blur-xl border-b border-border py-4 shadow-lg' : 'bg-transparent'
      )}
    >
      <Link 
        to="/" 
        onClick={handleLogoClick}
        className="text-xl font-serif font-bold tracking-tight hover:text-accent transition-colors relative z-50 flex items-center gap-4"
      >
        <div className="flex items-center gap-2">
          <span className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-bg text-xs font-mono">MG</span>
          <span className="hidden sm:inline">Michael Gruen</span>
        </div>
        <div className="hidden xl:flex items-center gap-3 text-[8px] font-mono text-text-secondary uppercase tracking-[0.3em] border-l border-border pl-4">
          <span>NY</span>
          <div className="w-1 h-1 bg-accent/30 rounded-full" />
          <span>LA</span>
        </div>
      </Link>

      <div className="hidden md:flex gap-8 items-center">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={cn(
              'text-[10px] font-mono uppercase tracking-[0.2em] transition-all relative group',
              location.pathname === item.path ? 'text-accent' : 'text-text-secondary hover:text-accent'
            )}
          >
            {item.name}
            <span
              className={cn(
                'absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full',
                location.pathname === item.path && 'w-full'
              )}
            />
          </Link>
        ))}
        
        <div className="w-[1px] h-4 bg-border mx-2" />
        
        <div className="flex items-center gap-2">
          <div className="relative group/theme">
            <button
              onClick={() => setIsLightMode(!isLightMode)}
              className={cn(
                "p-2 rounded-full transition-all hover:bg-text-primary/5",
                isLightMode ? "text-accent" : "text-text-secondary"
              )}
            >
              {isLightMode ? <Moon size={16} /> : <Sun size={16} />}
            </button>
            <div className="absolute top-full right-0 mt-2 px-3 py-1 bg-bg border border-border text-[8px] font-mono uppercase tracking-widest text-text-secondary opacity-0 group-hover/theme:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-[60]">
              {isLightMode ? "Dark Mode" : "Light Mode"}
            </div>
          </div>

          <div className="relative group/cursor">
            <button
              onClick={() => setIsCursorEnabled(!isCursorEnabled)}
              className={cn(
                "p-2 rounded-full transition-all hover:bg-text-primary/5",
                isCursorEnabled ? "text-accent" : "text-text-secondary"
              )}
            >
              <MousePointer2 size={16} />
            </button>
            <div className="absolute top-full right-0 mt-2 px-3 py-1 bg-bg border border-border text-[8px] font-mono uppercase tracking-widest text-text-secondary opacity-0 group-hover/cursor:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-[60]">
              {isCursorEnabled ? "Disable Custom Cursor" : "Enable Custom Cursor"}
            </div>
          </div>
        </div>

        <div className="w-[1px] h-4 bg-border mx-2" />
        
        <Link 
          to="/" 
          onClick={handleLogoClick}
          className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-bg text-xs font-mono hover:scale-110 transition-transform duration-300 shadow-lg shadow-accent/20"
        >
          MG
        </Link>

        <Link 
          to="/cv" 
          className="ml-4 px-6 py-2 border border-accent text-accent text-[10px] font-mono uppercase tracking-widest hover:bg-accent hover:text-bg transition-all duration-500 rounded-sm"
        >
          Resume
        </Link>
      </div>

      {/* Mobile Controls */}
      <div className="md:hidden flex items-center gap-2 relative z-50">
        <button
          onClick={() => setIsLightMode(!isLightMode)}
          className={cn(
            "p-2 rounded-full transition-all",
            isLightMode ? "text-accent" : "text-text-secondary"
          )}
        >
          {isLightMode ? <Moon size={18} /> : <Sun size={18} />}
        </button>
        <button
          onClick={() => setIsCursorEnabled(!isCursorEnabled)}
          className={cn(
            "p-2 rounded-full transition-all",
            isCursorEnabled ? "text-accent" : "text-text-secondary"
          )}
        >
          <MousePointer2 size={18} />
        </button>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-text-primary p-2"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

    </nav>
    <AnimatePresence>
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed inset-0 bg-bg z-[60] flex flex-col items-center justify-start py-32 gap-8 md:hidden overflow-y-auto"
        >
          <div className="fixed inset-0 opacity-5 pointer-events-none -z-10">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent rounded-full blur-[120px]" />
          </div>

          {navItems.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  'text-4xl font-serif transition-all relative group',
                  location.pathname === item.path ? 'text-accent' : 'text-text-primary hover:text-accent'
                )}
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.div 
                    layoutId="mobile-nav-indicator"
                    className="absolute -left-6 top-1/2 -translate-y-1/2 w-2 h-2 bg-accent rounded-full"
                  />
                )}
              </Link>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: navItems.length * 0.1 }}
          >
            <Link 
              to="/cv" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-8 inline-block px-10 py-4 border border-accent text-accent text-xs font-mono uppercase tracking-[0.3em] hover:bg-accent hover:text-bg transition-all duration-500 rounded-sm"
            >
              View Resume
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
}
