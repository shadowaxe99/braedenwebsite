import React, { createContext, useContext, useState, useEffect } from 'react';

interface CursorContextType {
  isCursorEnabled: boolean;
  setIsCursorEnabled: (enabled: boolean) => void;
}

const CursorContext = createContext<CursorContextType | undefined>(undefined);

export function CursorProvider({ children }: { children: React.ReactNode }) {
  const [isCursorEnabled, setIsCursorEnabled] = useState(() => {
    const saved = localStorage.getItem('cursor-enabled');
    return saved ? JSON.parse(saved) : true;
  });

  useEffect(() => {
    localStorage.setItem('cursor-enabled', JSON.stringify(isCursorEnabled));
    if (isCursorEnabled) {
      document.documentElement.classList.add('custom-cursor-active');
    } else {
      document.documentElement.classList.remove('custom-cursor-active');
    }
  }, [isCursorEnabled]);

  return (
    <CursorContext.Provider value={{ isCursorEnabled, setIsCursorEnabled }}>
      {children}
    </CursorContext.Provider>
  );
}

export function useCursor() {
  const context = useContext(CursorContext);
  if (context === undefined) {
    throw new Error('useCursor must be used within a CursorProvider');
  }
  return context;
}
