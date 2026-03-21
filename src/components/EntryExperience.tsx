import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, Trophy, Target, Zap, Activity } from 'lucide-react';
import { cn } from '../lib/utils';

interface EntryExperienceProps {
  onEnter: () => void;
  score: number;
  streak: number;
  onScore: () => void;
  onResetStreak: () => void;
}

type Sport = 'football' | 'basketball' | 'baseball' | 'hockey' | 'golf';

export const EntryExperience: React.FC<EntryExperienceProps> = ({ 
  onEnter, 
  score, 
  streak, 
  onScore, 
  onResetStreak 
}) => {
  const [selectedSport, setSelectedSport] = useState<Sport | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isScored, setIsScored] = useState(false);
  const [isMissed, setIsMissed] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);
  const [pitching, setPitching] = useState(false);
  const [wind, setWind] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setShowPrompt(true), 1500);
    const windTimer = setInterval(() => {
      setWind(Math.floor(Math.random() * 21) - 10); // -10 to 10
    }, 3000);
    return () => {
      clearTimeout(timer);
      clearInterval(windTimer);
    };
  }, []);

  const handleAction = () => {
    if (isAnimating) return;
    
    if (selectedSport === 'baseball' && !pitching) {
      setPitching(true);
      return;
    }

    setIsAnimating(true);
    
    // Check for "Miss" in timing games
    let missed = false;
    if (selectedSport === 'hockey') {
      const goaliePos = Math.sin(Date.now() / 318) * 60;
      if (Math.abs(goaliePos) < 20) missed = true;
    } else if (selectedSport === 'baseball') {
      // Baseball timing check: pitching takes 1.5s. 
      // User should swing between 1.2s and 1.5s of pitching?
      // This is hard to track without a timer.
      // Let's use a simpler "random" miss for now or just a fixed timing.
      missed = Math.random() > 0.7; // 30% chance to miss for now
    }

    // Animation sequence
    setTimeout(() => {
      if (!missed) {
        setIsScored(true);
        setIsMissed(false);
        onScore();
      } else {
        setIsScored(false);
        setIsMissed(true);
        onResetStreak();
      }
      
      setTimeout(() => {
        setIsAnimating(false);
        setIsScored(false);
        setIsMissed(false);
        if (selectedSport === 'baseball') setPitching(false);
      }, 2000);
    }, 800);
  };

  const handleSportChange = (sport: Sport | null) => {
    setSelectedSport(sport);
    setIsAnimating(false);
    setIsScored(false);
    setPitching(false);
  };

  const sports = [
    { id: 'football' as Sport, name: 'Football', icon: Trophy, color: 'text-brand-accent' },
    { id: 'basketball' as Sport, name: 'Basketball', icon: Target, color: 'text-orange-500' },
    { id: 'baseball' as Sport, name: 'Baseball', icon: Zap, color: 'text-red-500' },
    { id: 'hockey' as Sport, name: 'Hockey', icon: Activity, color: 'text-blue-500' },
    { id: 'golf' as Sport, name: 'Golf', icon: Target, color: 'text-emerald-500' },
  ];

  return (
    <motion.div 
      className="fixed inset-0 z-[100] bg-brand-black flex flex-col items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
    >
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="relative z-10 text-center space-y-12 w-full max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-8xl font-display font-black tracking-tighter uppercase italic leading-[0.85] pb-2 pr-4">
            Braeden Boyles
          </h1>
          <p className="text-brand-muted uppercase tracking-[0.4em] text-[10px] md:text-xs mt-4 font-bold">
            Preparation. Precision. Performance.
          </p>
        </motion.div>

        {!selectedSport ? (
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            {sports.map((sport) => (
              <button
                key={sport.id}
                onClick={() => handleSportChange(sport.id)}
                className="glass p-6 rounded-2xl group hover:border-brand-accent/40 transition-all duration-500 flex flex-col items-center space-y-4"
              >
                <div className={cn("w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center transition-all duration-500 group-hover:scale-110", sport.color)}>
                  <sport.icon className="w-6 h-6" />
                </div>
                <span className="text-[10px] uppercase tracking-widest font-bold text-brand-white/40 group-hover:text-brand-white">{sport.name}</span>
              </button>
            ))}
          </motion.div>
        ) : (
          <div className="relative h-96 w-full flex flex-col items-center justify-center">
            {/* Score Display */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 flex space-x-8 mb-8">
              <div className="text-center">
                <p className="text-[8px] uppercase tracking-widest text-brand-white/40 font-bold">Total Score</p>
                <p className="text-2xl font-display font-black text-brand-accent">{score}</p>
              </div>
              <div className="text-center">
                <p className="text-[8px] uppercase tracking-widest text-brand-white/40 font-bold">Streak</p>
                <p className="text-2xl font-display font-black text-brand-accent">{streak}</p>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {selectedSport === 'football' && (
                <motion.div 
                  key="football"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="relative flex items-center justify-center w-full h-full"
                >
                  {/* Wind Indicator */}
                  <div className="absolute top-0 right-0 glass px-4 py-2 rounded-lg z-30">
                    <p className="text-[8px] uppercase tracking-widest text-brand-white/40 font-bold">Wind</p>
                    <div className="flex items-center space-x-2">
                      <div className={cn("w-2 h-2 rounded-full", wind > 0 ? "bg-red-500" : wind < 0 ? "bg-blue-500" : "bg-white/20")}></div>
                      <p className="text-xs font-display font-bold">{Math.abs(wind)} MPH {wind > 0 ? '→' : wind < 0 ? '←' : ''}</p>
                    </div>
                  </div>

                  {/* Uprights */}
                  <div className="absolute top-0 flex justify-between w-48 h-40 border-x-4 border-brand-white/20 rounded-t-lg">
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-12 bg-brand-white/20"></div>
                    <div className="absolute bottom-12 left-0 right-0 h-1 bg-brand-white/20"></div>
                  </div>
                  {/* Football */}
                  <motion.div
                    className="cursor-pointer group relative z-20 mt-40"
                    onClick={handleAction}
                    animate={isAnimating ? { 
                      y: -240, 
                      x: wind * 10,
                      z: -500, 
                      scale: 0.2, 
                      rotate: 720 
                    } : { y: [0, -5, 0] }}
                    transition={isAnimating ? { duration: 0.8, ease: "easeOut" } : { duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className="w-12 h-8 bg-[#634133] rounded-[100%] border-2 border-[#4a3126] shadow-xl relative overflow-hidden">
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-1 bg-white/40 rounded-full"></div>
                    </div>
                    {!isAnimating && <p className="absolute -top-12 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-widest text-brand-accent font-bold whitespace-nowrap">Click to Kick</p>}
                  </motion.div>
                </motion.div>
              )}

              {selectedSport === 'basketball' && (
                <motion.div 
                  key="basketball"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="relative flex items-center justify-center w-full h-full"
                >
                  {/* Hoop & Backboard */}
                  <div className="absolute top-0 flex flex-col items-center">
                    {/* Backboard */}
                    <div className="w-48 h-32 bg-white/10 border-2 border-white/20 rounded-lg flex items-center justify-center relative">
                      <div className="w-20 h-16 border-2 border-white/20 mt-8"></div>
                      {/* Rim */}
                      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-20 h-20 border-4 border-orange-500 rounded-full perspective-1000 rotate-x-80">
                        {/* Net */}
                        <div className="absolute top-full left-0 right-0 h-24 bg-[repeating-linear-gradient(45deg,transparent,transparent_5px,rgba(255,255,255,0.1)_5px,rgba(255,255,255,0.1)_10px),repeating-linear-gradient(-45deg,transparent,transparent_5px,rgba(255,255,255,0.1)_5px,rgba(255,255,255,0.1)_10px)] clip-path-net"></div>
                      </div>
                    </div>
                  </div>
                  {/* Ball */}
                  <motion.div
                    className="cursor-pointer z-20 mt-40"
                    onClick={handleAction}
                    animate={isAnimating ? { 
                      y: [0, -320, -280], 
                      x: [0, 0, 0], 
                      scale: [1, 0.35, 0.3],
                      opacity: [1, 1, 0.9]
                    } : { y: [0, -10, 0] }}
                    transition={isAnimating ? { 
                      duration: 1.2, 
                      times: [0, 0.7, 1],
                      ease: "easeOut" 
                    } : { duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className="w-16 h-16 bg-orange-600 rounded-full border-2 border-orange-800 shadow-xl relative overflow-hidden">
                      <div className="absolute inset-0 border-t-2 border-orange-900/50 rounded-full translate-y-4"></div>
                      <div className="absolute inset-0 border-l-2 border-orange-900/50 rounded-full translate-x-4"></div>
                    </div>
                    {!isAnimating && <p className="absolute -top-12 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-widest text-orange-500 font-bold whitespace-nowrap">Click to Shoot</p>}
                  </motion.div>
                </motion.div>
              )}

              {selectedSport === 'baseball' && (
                <motion.div 
                  key="baseball"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="relative flex items-center justify-center w-full h-full"
                >
                  {/* Bat */}
                  <motion.div 
                    className="absolute bottom-10 right-20 w-4 h-48 bg-amber-800 rounded-full rotate-45 origin-bottom z-30"
                    animate={isAnimating ? { rotate: [-45, 60, -45] } : {}}
                    transition={{ duration: 0.3 }}
                  ></motion.div>
                  
                  {/* Pitcher (Background) */}
                  <div className="absolute top-10 w-4 h-12 bg-white/10 rounded-full"></div>
                  
                  {/* Ball */}
                  <motion.div
                    className="cursor-pointer z-20"
                    onClick={() => {
                      if (!pitching) {
                        setPitching(true);
                      } else {
                        handleAction();
                      }
                    }}
                    animate={
                      isAnimating 
                        ? { x: 600, y: -400, scale: 0.1, rotate: 360 } 
                        : pitching 
                          ? { y: [0, 150], scale: [0.2, 1], x: [0, -20, 20, 0] }
                          : { y: 0, scale: 0.2 }
                    }
                    transition={
                      isAnimating 
                        ? { duration: 0.8, ease: "easeOut" } 
                        : pitching 
                          ? { duration: 1.5, ease: "linear" }
                          : { duration: 0.5 }
                    }
                  >
                    <div className="w-10 h-10 bg-white rounded-full border-2 border-gray-200 shadow-xl relative overflow-hidden">
                      <div className="absolute top-0 left-1/2 w-0.5 h-full bg-red-500/30 rotate-45"></div>
                      <div className="absolute top-0 left-1/2 w-0.5 h-full bg-red-500/30 -rotate-45"></div>
                    </div>
                    {!pitching && !isAnimating && <p className="absolute -top-12 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-widest text-red-500 font-bold whitespace-nowrap">Click to Pitch</p>}
                    {pitching && !isAnimating && <p className="absolute -top-12 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-widest text-red-500 font-bold whitespace-nowrap">Click to Swing!</p>}
                  </motion.div>
                </motion.div>
              )}

              {selectedSport === 'hockey' && (
                <motion.div 
                  key="hockey"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="relative flex items-center justify-center w-full h-full"
                >
                  {/* Goal */}
                  <div className="absolute top-10 w-64 h-44 border-4 border-white/20 rounded-lg bg-white/5 overflow-hidden">
                    <div className="absolute inset-0 opacity-20 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,white_10px,white_11px),repeating-linear-gradient(-45deg,transparent,transparent_10px,white_10px,white_11px)]"></div>
                    {/* Goalie */}
                    <motion.div 
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-24 bg-red-600/40 rounded-t-lg border-2 border-red-500/50"
                      animate={{ x: [-60, 60, -60] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white/20"></div>
                    </motion.div>
                  </div>
                  {/* Puck */}
                  <motion.div
                    className="cursor-pointer z-20 mt-40"
                    onClick={handleAction}
                    animate={isAnimating ? { y: -200, scale: 0.6, rotate: 180 } : { x: [-30, 30, -30] }}
                    transition={isAnimating ? { duration: 0.4, ease: "easeOut" } : { duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className="w-12 h-4 bg-black rounded-sm border-b-2 border-gray-800 shadow-xl"></div>
                    {!isAnimating && <p className="absolute -top-12 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-widest text-blue-500 font-bold whitespace-nowrap">Click to Slapshot</p>}
                  </motion.div>
                </motion.div>
              )}

              {selectedSport === 'golf' && (
                <motion.div 
                  key="golf"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="relative flex items-center justify-center w-full h-full"
                >
                  {/* Green & Hole */}
                  <div className="absolute top-10 flex flex-col items-center">
                    <div className="w-64 h-32 bg-emerald-900/20 rounded-[100%] border-2 border-emerald-500/20 flex items-center justify-center relative">
                      {/* Hole */}
                      <div className="w-10 h-6 bg-black rounded-full shadow-inner"></div>
                      {/* Flag */}
                      <div className="absolute bottom-6 left-1/2 w-1 h-32 bg-white/40 origin-bottom">
                        <div className="absolute top-0 left-0 w-12 h-8 bg-red-500/60 clip-path-flag"></div>
                      </div>
                    </div>
                  </div>
                  {/* Ball */}
                  <motion.div
                    className="cursor-pointer z-20 mt-40"
                    onClick={handleAction}
                    animate={isAnimating ? { 
                      y: [-10, -180, -165], 
                      scale: [1, 0.4, 0.3],
                      opacity: [1, 1, 0.8]
                    } : { x: [-5, 5, -5] }}
                    transition={isAnimating ? { 
                      duration: 1.5, 
                      times: [0, 0.7, 1],
                      ease: "easeOut" 
                    } : { duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className="w-8 h-8 bg-white rounded-full border border-gray-300 shadow-lg flex items-center justify-center">
                      <div className="grid grid-cols-3 gap-0.5 opacity-20">
                        {[...Array(9)].map((_, i) => <div key={i} className="w-1 h-1 bg-black rounded-full"></div>)}
                      </div>
                    </div>
                    {!isAnimating && <p className="absolute -top-12 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-widest text-emerald-500 font-bold whitespace-nowrap">Click to Putt</p>}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {(isScored || isMissed) && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, y: -100 }}
                  animate={{ opacity: 1, scale: 1, y: -150 }}
                  exit={{ opacity: 0 }}
                  className={cn(
                    "absolute font-display font-black italic text-4xl uppercase",
                    isScored ? "text-brand-accent" : "text-red-500"
                  )}
                >
                  {isMissed 
                    ? (selectedSport === 'hockey' ? 'Blocked!' : 'Miss!') 
                    : (selectedSport === 'baseball' ? 'Home Run!' : selectedSport === 'basketball' ? 'Swish!' : selectedSport === 'hockey' ? 'Goal!' : 'Good!')}
                </motion.div>
              )}
            </AnimatePresence>

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-4">
              <button 
                onClick={() => handleSportChange(null)}
                className="text-[10px] uppercase tracking-widest text-brand-white/40 hover:text-brand-white transition-colors"
              >
                Change Sport
              </button>
              
              <motion.button
                onClick={onEnter}
                className="bg-brand-accent text-brand-black px-8 py-3 rounded-full font-bold uppercase tracking-widest text-xs hover:scale-105 transition-all shadow-[0_0_20px_rgba(212,175,55,0.2)]"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                Enter Site
              </motion.button>
            </div>
          </div>
        )}

        {!selectedSport && (
          <div className="flex flex-col items-center space-y-4">
            <motion.button
              onClick={onEnter}
              className="group flex items-center space-x-2 text-brand-white/60 hover:text-brand-white transition-colors uppercase tracking-widest text-[10px] font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: showPrompt ? 1 : 0 }}
            >
              <span>Skip to Experience</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        )}
      </div>
    </motion.div>
  );
};
