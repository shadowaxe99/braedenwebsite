import React, { useState, useEffect, Suspense, lazy } from 'react';
import { AnimatePresence, motion, useSpring } from 'motion/react';
import { Analytics } from '@vercel/analytics/react';
import { EntryExperience } from './components/EntryExperience';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';

// Lazy load components for performance
const About = lazy(() => import('./components/Journey').then(module => ({ default: module.About })));
const Journey = lazy(() => import('./components/Journey').then(module => ({ default: module.Journey })));
const Experience = lazy(() => import('./components/Experience').then(module => ({ default: module.Experience })));
const QBMindModule = lazy(() => import('./components/Experience').then(module => ({ default: module.QBMindModule })));
const LensGrid = lazy(() => import('./components/Experience').then(module => ({ default: module.LensGrid })));
const Vision = lazy(() => import('./components/Vision').then(module => ({ default: module.Vision })));
const Writing = lazy(() => import('./components/Vision').then(module => ({ default: module.Writing })));
const Contact = lazy(() => import('./components/Vision').then(module => ({ default: module.Contact })));
const Press = lazy(() => import('./components/Press').then(module => ({ default: module.Press })));

const CustomCursor = ({ isActive }: { isActive: boolean }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const cursorX = useSpring(0, { stiffness: 1000, damping: 40 });
  const cursorY = useSpring(0, { stiffness: 1000, damping: 40 });

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsTouch(isTouchDevice);
    if (!isActive || isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16); // 16 is half of w-8 (32px)
      cursorY.set(e.clientY - 16);
      
      const target = e.target as HTMLElement;
      const isClickable = target.closest('button, a, .cursor-pointer');
      setIsHovering(!!isClickable);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [cursorX, cursorY, isActive]);

  if (!isActive || isTouch) return null;

  return (
    <motion.div 
      className="custom-cursor"
      data-hover={isHovering}
      style={{ 
        x: cursorX, 
        y: cursorY,
      }}
      animate={{
        scale: isHovering ? 1.15 : 1
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="custom-cursor-inner relative">
        {/* Sports Cursor Icon (Ultimate Iconic Football) */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={{ 
              rotate: isHovering ? 45 : -45,
              scale: isHovering ? 1.1 : 1
            }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <svg 
              viewBox="0 0 24 24" 
              className="w-10 h-10 text-brand-accent drop-shadow-[0_0_12px_rgba(212,175,55,0.6)]" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.2"
            >
              <defs>
                <linearGradient id="footballGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="currentColor" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="currentColor" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              {/* Football Body - Iconic prolate spheroid shape */}
              <path 
                d="M2 12C2 12 6 5 12 5C18 5 22 12 22 12C22 12 18 19 12 19C6 19 2 12 2 12Z" 
                fill="url(#footballGradient)"
              />
              {/* Laces - The defining feature */}
              <path d="M8 12H16" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M10 10V14" strokeWidth="1.2" strokeLinecap="round" />
              <path d="M12 10V14" strokeWidth="1.2" strokeLinecap="round" />
              <path d="M14 10V14" strokeWidth="1.2" strokeLinecap="round" />
              {/* Stripes - Classic football detail */}
              <path d="M5.5 8C6.5 9.5 6.5 14.5 5.5 16" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
              <path d="M18.5 8C17.5 9.5 17.5 14.5 18.5 16" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
            </svg>
          </motion.div>
        </div>
        <div className="custom-cursor-dot opacity-0" />
        {isHovering && <div className="custom-cursor-ring" />}
      </div>
    </motion.div>
  );
};

export default function App() {
  const [hasEntered, setHasEntered] = useState(false);
  const [useCustomCursor, setUseCustomCursor] = useState(false);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    if (useCustomCursor) {
      document.documentElement.classList.add('hide-cursor');
    } else {
      document.documentElement.classList.remove('hide-cursor');
    }
  }, [useCustomCursor]);

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

  const sections = [
    <Hero key="hero" />,
    <About key="about" />,
    <Journey key="journey" />,
    <Experience key="experience" />,
    <LensGrid key="lens" />,
    <QBMindModule key="qb" />,
    <Vision key="vision" />,
    <Writing key="writing" />,
    <Press key="press" />,
    <Contact key="contact" />,
  ];

  return (
    <div className="bg-brand-black text-brand-white min-h-screen overflow-x-hidden">
      <CustomCursor isActive={useCustomCursor} />
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
            useCustomCursor={useCustomCursor}
            onToggleCursor={() => setUseCustomCursor(!useCustomCursor)}
          />
        ) : (
          <motion.main
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Navbar 
              onGamesClick={handleBackToGames} 
              useCustomCursor={useCustomCursor}
              onToggleCursor={() => setUseCustomCursor(!useCustomCursor)}
            />
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-brand-accent text-sm uppercase tracking-widest">Loading...</div>}>
              {sections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                >
                  {section}
                </motion.div>
              ))}
            </Suspense>
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}
