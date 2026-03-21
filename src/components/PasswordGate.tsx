import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { config } from '../config';
import { Lock, ArrowRight, ShieldCheck, MousePointer2, Shield } from 'lucide-react';
import { useCursor } from '../context/CursorContext';
import { cn } from '../lib/utils';

interface PasswordGateProps {
  children: React.ReactNode;
}

export default function PasswordGate({ children }: PasswordGateProps) {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [isChecking, setIsChecking] = useState(true);
  const { isCursorEnabled, setIsCursorEnabled } = useCursor();

  useEffect(() => {
    // Check if already authorized in this session
    const authorized = sessionStorage.getItem('site_authorized');
    if (authorized === 'true' || !config.isLocked) {
      setIsAuthorized(true);
    }
    setIsChecking(false);
  }, []);

  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [loadingText, setLoadingText] = useState('');

  const loadingSteps = [
    'ANALYZING STRUCTURAL INTEGRITY...',
    'ALLOCATING RISK VECTORS...',
    'DEFINING RIGHTS FRAMEWORK...',
    'ENFORCING OUTCOME PROTOCOLS...',
    'ACCESS GRANTED.'
  ];

  const hashPassword = async (pwd: string) => {
    const msgBuffer = new TextEncoder().encode(pwd);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const hashedInput = await hashPassword(password);
    if (hashedInput === config.passwordHash) {
      setIsAuthenticating(true);
      setError(false);
      
      for (let i = 0; i < loadingSteps.length; i++) {
        setLoadingText(loadingSteps[i]);
        await new Promise(resolve => setTimeout(resolve, 600));
      }

      sessionStorage.setItem('site_authorized', 'true');
      setIsAuthorized(true);
    } else {
      setError(true);
      setPassword('');
      // Shake animation effect
      setTimeout(() => setError(false), 500);
    }
  };

  if (isChecking) return null;

  if (isAuthorized) {
    return <>{children}</>;
  }

  return (
    <div className="fixed inset-0 z-[9999] bg-bg flex items-center justify-center overflow-hidden">
      {/* Immersive Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-accent/5 blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-accent/5 blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/legal/1920/1080?blur=10')] bg-cover bg-center opacity-10 grayscale" />
        <div className="absolute inset-0 bg-gradient-to-b from-bg/80 via-bg to-bg" />
        
        {/* Scanning Line Effect */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute w-full h-[2px] bg-accent/20 shadow-[0_0_15px_rgba(198,168,91,0.5)] animate-scan" />
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-lg px-8"
      >
        <div className="text-center mb-16">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/5 border border-accent/20 relative group overflow-hidden">
              <div className="absolute inset-0 bg-accent/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <Lock className="text-accent relative z-10" size={28} />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <h4 className="text-accent text-[10px] font-mono uppercase tracking-[0.5em] mb-4">Secure Gateway</h4>
            <h1 className="text-5xl md:text-7xl font-serif mb-6 tracking-tighter">Private Access</h1>
            <div className="h-[1px] w-24 bg-accent/30 mx-auto mb-8" />
            <p className="text-text-secondary font-mono uppercase tracking-[0.2em] text-[9px] max-w-xs mx-auto leading-relaxed">
              Strategic Advisory & Deal Architecture Portfolio
            </p>
          </motion.div>
        </div>

        <motion.form 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          onSubmit={handleLogin} 
          className="space-y-8"
        >
          <div className="relative group">
            <input
              disabled={isAuthenticating}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={isAuthenticating ? "" : "Enter Access Key"}
              className={`w-full bg-card-bg/30 backdrop-blur-xl border ${error ? 'border-red-500/50' : 'border-border group-hover:border-accent/30'} rounded-sm px-8 py-6 text-center font-mono text-base tracking-[0.4em] outline-none transition-all duration-500 focus:border-accent/50 focus:bg-card-bg/50 ${isAuthenticating ? 'opacity-0' : 'opacity-100'}`}
              autoFocus
            />
            <AnimatePresence>
              {isAuthenticating && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-12 h-12 border-2 border-accent/20 border-t-accent rounded-full animate-spin" />
                    <span className="text-[10px] font-mono text-accent uppercase tracking-[0.3em] animate-pulse">
                      {loadingText}
                    </span>
                  </div>
                </motion.div>
              )}
              {error && !isAuthenticating && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="absolute -bottom-8 left-0 right-0 text-center"
                >
                  <span className="text-[10px] font-mono text-red-500 uppercase tracking-widest">Authentication Failed</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button
            disabled={isAuthenticating}
            type="submit"
            className={`w-full bg-accent text-bg font-mono text-[11px] font-bold uppercase tracking-[0.4em] py-6 rounded-sm hover:bg-text-primary transition-all duration-500 flex items-center justify-center gap-4 group relative overflow-hidden ${isAuthenticating ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            <span className="relative z-10">{isAuthenticating ? 'Authenticating...' : 'Initialize Access'}</span>
            {!isAuthenticating && <ArrowRight size={16} className="relative z-10 group-hover:translate-x-2 transition-transform duration-500" />}
          </button>
        </motion.form>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-24 pt-12 border-t border-border/30 text-center"
        >
          {/* Cursor Toggle - Premium Style */}
          <div className="flex flex-col items-center gap-6 mb-12">
            <div className="flex items-center gap-4 p-1 rounded-full bg-border/10 backdrop-blur-md border border-border/30">
              <button
                onClick={() => setIsCursorEnabled(true)}
                className={cn(
                  "flex items-center gap-2 px-5 py-2.5 rounded-full text-[9px] font-mono uppercase tracking-[0.2em] transition-all duration-500",
                  isCursorEnabled ? "bg-accent text-bg shadow-xl shadow-accent/20" : "text-text-secondary hover:text-text-primary"
                )}
              >
                <MousePointer2 size={12} />
                Custom
              </button>
              <button
                onClick={() => setIsCursorEnabled(false)}
                className={cn(
                  "flex items-center gap-2 px-5 py-2.5 rounded-full text-[9px] font-mono uppercase tracking-[0.2em] transition-all duration-500",
                  !isCursorEnabled ? "bg-accent text-bg shadow-xl shadow-accent/20" : "text-text-secondary hover:text-text-primary"
                )}
              >
                <Shield size={12} />
                Standard
              </button>
            </div>
            <p className="text-[8px] font-mono uppercase tracking-[0.3em] text-text-secondary opacity-40">
              Interface Preference
            </p>
          </div>

          <div className="flex items-center justify-center gap-3 text-[9px] font-mono text-text-secondary uppercase tracking-[0.3em]">
            <ShieldCheck size={14} className="text-accent/40" />
            <span>Encrypted Session // Protocol 4.0</span>
          </div>
          <p className="mt-10 text-text-secondary/30 text-[8px] font-mono uppercase tracking-[0.4em]">
            © {new Date().getFullYear()} Michael Gruen. All Rights Reserved.
          </p>
        </motion.div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-16 left-16 hidden lg:block">
        <div className="text-[9px] font-mono text-accent/20 uppercase tracking-[0.6em] vertical-text transform rotate-180 h-48 flex items-center justify-between">
          <span>Structural Law</span>
          <div className="w-[1px] h-12 bg-accent/20" />
          <span>Strategy</span>
        </div>
      </div>
      <div className="absolute bottom-16 right-16 hidden lg:block">
        <div className="text-[9px] font-mono text-accent/20 uppercase tracking-[0.6em] vertical-text h-48 flex items-center justify-between">
          <span>Institutional</span>
          <div className="w-[1px] h-12 bg-accent/20" />
          <span>Execution</span>
        </div>
      </div>
    </div>
  );
}
