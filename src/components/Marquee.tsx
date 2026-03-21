import React from 'react';
import { motion } from 'motion/react';

interface MarqueeProps {
  items: string[];
  speed?: number;
  direction?: 'left' | 'right';
}

export default function Marquee({ items, speed = 30, direction = 'left' }: MarqueeProps) {
  return (
    <div className="overflow-hidden whitespace-nowrap py-12 border-y border-border bg-bg flex items-center relative">
      {/* Gradient masks for smooth fade edges */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-bg to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-bg to-transparent z-10" />
      
      <motion.div
        className="flex gap-16 items-center"
        animate={{ x: direction === 'left' ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ willChange: 'transform' }}
      >
        {/* Double the items to ensure smooth loop */}
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="text-[11px] md:text-sm font-semibold font-mono uppercase tracking-[0.3em] text-text-secondary hover:text-accent transition-colors cursor-default shrink-0 antialiased"
            style={{ 
              textRendering: 'optimizeLegibility',
              WebkitFontSmoothing: 'antialiased'
            }}
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
