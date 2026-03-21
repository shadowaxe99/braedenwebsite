import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Analytics } from '@vercel/analytics/react';
import { EntryExperience } from './components/EntryExperience';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About, Journey } from './components/Journey';
import { Experience, QBMindModule, LensGrid } from './components/Experience';
import { Vision, Writing, Contact } from './components/Vision';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      const isClickable = target.closest('button, a, .cursor-pointer');
      setIsHovering(!!isClickable);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      className="custom-cursor"
      style={{ 
        left: `${position.x}px`, 
        top: `${position.y}px`,
        transform: `translate(-50%, -50%) scale(${isHovering ? 1.5 : 1})`
      }}
    >
      <div className="custom-cursor-inner">
        <div className="custom-cursor-dot" />
        {isHovering && <div className="custom-cursor-ring" />}
      </div>
    </div>
  );
};

export default function App() {
  const [hasEntered, setHasEntered] = useState(false);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);

  const handleEnter = () => {
    setHasEntered(true);
  };

  const handleBackToGames = () => {
    setHasEntered(false);
  };

  const handleScore = () => {
    setScore(prev => prev + 1);
    setStreak(prev => prev + 1);
  };

  const handleResetStreak = () => {
    setStreak(0);
  };

  return (
    <div className="bg-brand-black text-brand-white min-h-screen overflow-x-hidden">
      <CustomCursor />
      <Analytics />
      <AnimatePresence mode="wait">
        {!hasEntered ? (
          <EntryExperience 
            key="entry" 
            onEnter={handleEnter} 
            score={score}
            streak={streak}
            onScore={handleScore}
            onResetStreak={handleResetStreak}
          />
        ) : (
          <motion.main
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Navbar onGamesClick={handleBackToGames} />
            <Hero />
            <About />
            <Journey />
            <Experience />
            <LensGrid />
            <QBMindModule />
            <Vision />
            <Writing />
            <Contact />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}
