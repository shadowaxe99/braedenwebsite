import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ChevronUp, Plus, Minus } from 'lucide-react';

interface CollapsibleProps {
  children: React.ReactNode;
  title?: string;
  defaultExpanded?: boolean;
  className?: string;
}

export default function Collapsible({ 
  children, 
  title, 
  defaultExpanded = true, 
  className = ""
}: CollapsibleProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <div className={`collapsible-container ${className}`}>
      {title && (
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-between py-4 border-b border-border/50 group hover:border-accent/30 transition-colors"
        >
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-text-secondary group-hover:text-accent transition-colors">
            {title}
          </span>
          <div className="text-accent/50 group-hover:text-accent transition-colors">
            {isExpanded ? <Minus size={14} /> : <Plus size={14} />}
          </div>
        </button>
      )}
      
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="overflow-hidden"
          >
            <div className={title ? "py-6" : ""}>
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!isExpanded && !title && (
        <button 
          onClick={() => setIsExpanded(true)}
          className="text-[10px] font-mono uppercase tracking-widest text-accent hover:text-text-primary transition-colors mt-4 flex items-center gap-2"
        >
          Expand Details <Plus size={10} />
        </button>
      )}
    </div>
  );
}
