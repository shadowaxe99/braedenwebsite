import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { 
  Search, FileText, Briefcase, User, Mail, Home, Newspaper, 
  Terminal, X
} from 'lucide-react';
import { writing, workingNotes } from '../lib/data';

export default function CommandMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(true);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navigation = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About', path: '/about', icon: User },
    { name: 'Experience', path: '/experience', icon: Briefcase },
    { name: 'Writing', path: '/writing', icon: Newspaper },
    { name: 'Press', path: '/press', icon: Newspaper },
    { name: 'Contact', path: '/contact', icon: Mail },
  ];

  const filteredItems = [
    ...navigation.map(item => ({ ...item, type: 'page' })),
    ...writing.map(item => ({ name: item.title, path: `/writing/${item.id}`, icon: FileText, type: 'article' })),
    ...workingNotes.map(item => ({ name: item.title, path: `/writing/${item.id}`, icon: Terminal, type: 'note' })),
  ].filter(item => 
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelect = (item: any) => {
    navigate(item.path);
    setIsOpen(false);
    setSearch('');
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-40 p-4 bg-accent text-bg rounded-full shadow-2xl hover:scale-110 transition-transform md:hidden flex items-center justify-center"
      >
        <Search size={24} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] px-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-bg/80 backdrop-blur-md"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="relative w-full max-w-2xl bg-card-bg border border-border shadow-2xl overflow-hidden rounded-lg"
            >
              <div className="p-6 border-b border-border flex items-center gap-4">
                <Search className="text-text-secondary" size={20} />
                <input 
                  autoFocus
                  type="text"
                  placeholder="Search pages or articles..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full bg-transparent border-none outline-none text-text-primary text-lg font-light placeholder:text-text-secondary/50"
                />
                <div className="flex items-center gap-1 px-2 py-1 bg-text-primary/5 border border-border rounded text-[10px] font-mono text-text-secondary">
                  <span>ESC</span>
                </div>
              </div>

              <div className="max-h-[60vh] overflow-y-auto p-2">
                {filteredItems.length > 0 ? (
                  <div className="space-y-1">
                    {filteredItems.map((item, i) => (
                      <button
                        key={i}
                        onClick={() => handleSelect(item)}
                        className="w-full flex items-center gap-4 p-4 hover:bg-accent/10 rounded-md transition-colors group text-left"
                      >
                        <div className="p-2 bg-text-primary/5 border border-border rounded group-hover:border-accent/50 group-hover:text-accent transition-colors">
                          <item.icon size={16} />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-text-primary group-hover:text-accent transition-colors">{item.name}</p>
                          <p className="text-[10px] uppercase tracking-widest text-text-secondary mt-0.5">
                            {item.type}
                          </p>
                        </div>
                        <ArrowRight size={14} className="text-text-secondary opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="p-12 text-center">
                    <p className="text-text-secondary font-light italic">No results found for "{search}"</p>
                  </div>
                )}
              </div>

              <div className="p-4 border-t border-border bg-bg/40 flex justify-between items-center">
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <div className="px-1.5 py-0.5 bg-text-primary/5 border border-border rounded text-[9px] font-mono text-text-secondary">↑↓</div>
                    <span className="text-[10px] text-text-secondary uppercase tracking-wider">Navigate</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="px-1.5 py-0.5 bg-text-primary/5 border border-border rounded text-[9px] font-mono text-text-secondary">ENTER</div>
                    <span className="text-[10px] text-text-secondary uppercase tracking-wider">Select</span>
                  </div>
                </div>
                <div className="text-[10px] text-text-secondary/50 font-mono">
                  CMD + K
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

function ArrowRight({ size, className }: { size: number, className?: string }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
