import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue, useVelocity, useTransform, useScroll, AnimatePresence } from 'motion/react';
import { useCursor } from '../context/CursorContext';

export default function CustomCursor() {
  const { isCursorEnabled } = useCursor();
  const [hoverState, setHoverState] = useState<'default' | 'pointer' | 'case-study' | 'text' | 'image'>('default');
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 30, stiffness: 300, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  // Scroll velocity for subtle motion
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const skewX = useTransform(scrollVelocity, [-2000, 2000], [-20, 20]);

  useEffect(() => {
    if (!isCursorEnabled) return;

    const moveMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      const isCaseStudy = target.closest('[data-cursor="case-study"]');
      if (isCaseStudy) {
        setHoverState('case-study');
        return;
      }

      const isImage = target.tagName === 'IMG' || target.closest('[data-cursor="image"]');
      if (isImage) {
        setHoverState('image');
        return;
      }

      const isText = target.tagName === 'P' || target.tagName === 'H1' || target.tagName === 'H2' || target.tagName === 'H3' || target.tagName === 'H4' || target.tagName === 'H5' || target.tagName === 'H6' || target.tagName === 'SPAN' || target.closest('[data-cursor="text"]');
      
      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        window.getComputedStyle(target).cursor === 'pointer';
      
      if (isClickable) {
        setHoverState('pointer');
      } else if (isText) {
        setHoverState('text');
      } else {
        setHoverState('default');
      }
    };

    window.addEventListener('mousemove', moveMouse);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveMouse);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isCursorEnabled, isVisible]);

  if (!isCursorEnabled || !isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full border border-accent pointer-events-none z-[10000] mix-blend-difference flex items-center justify-center overflow-hidden"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: '-50%',
        translateY: '-50%',
        skewX,
      }}
      animate={{
        width: hoverState === 'case-study' ? 120 : (hoverState === 'pointer' ? 64 : (hoverState === 'text' ? 4 : (hoverState === 'image' ? 80 : 32))),
        height: hoverState === 'case-study' ? 120 : (hoverState === 'pointer' ? 64 : (hoverState === 'text' ? 32 : (hoverState === 'image' ? 80 : 32))),
        borderRadius: hoverState === 'text' ? '2px' : '9999px',
        backgroundColor: hoverState === 'text' ? 'rgba(198, 168, 91, 0.8)' : (hoverState !== 'default' ? 'rgba(198, 168, 91, 0.15)' : 'rgba(198, 168, 91, 0)'),
        borderColor: hoverState === 'text' ? 'transparent' : (hoverState !== 'default' ? 'rgba(198, 168, 91, 0.8)' : 'rgba(198, 168, 91, 0.5)'),
      }}
    >
      <AnimatePresence mode="wait">
        {hoverState === 'case-study' && (
          <motion.span
            key="case-study-text"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="text-[10px] font-mono uppercase tracking-tighter text-accent text-center leading-none px-2"
          >
            View Analysis
          </motion.span>
        )}
        {hoverState === 'image' && (
          <motion.span
            key="image-text"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="text-[10px] font-mono uppercase tracking-tighter text-accent text-center leading-none px-2"
          >
            View
          </motion.span>
        )}
      </AnimatePresence>
      {hoverState !== 'case-study' && hoverState !== 'image' && hoverState !== 'text' && (
        <motion.div 
          key="dot"
          animate={{
            scale: hoverState === 'pointer' ? 2 : 1,
          }}
          className="w-1 h-1 bg-accent rounded-full" 
        />
      )}
    </motion.div>
  );
}
