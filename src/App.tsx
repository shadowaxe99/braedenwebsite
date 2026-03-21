import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Writing from './pages/Writing';
import Press from './pages/Press';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import CV from './pages/CV';
import StarBackground from './components/StarBackground';
import CommandMenu from './components/CommandMenu';
import ScrollToTop from './components/ScrollToTop';
import PasswordGate from './components/PasswordGate';
import { CursorProvider } from './context/CursorContext';
import { ThemeProvider } from './context/ThemeContext';
import CustomCursor from './components/CustomCursor';

export default function App() {
  return (
    <ThemeProvider>
      <CursorProvider>
        <Router>
          <ScrollToTop />
          <CustomCursor />
          <PasswordGate>
            <div className="relative min-h-screen">
              <StarBackground className="star-background" />
              <div className="grain-overlay" />
              <CommandMenu />
              <Analytics />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/writing" element={<Writing />} />
                <Route path="/writing/:id" element={<Writing />} />
                <Route path="/press" element={<Press />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/cv" element={<CV />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </PasswordGate>
        </Router>
      </CursorProvider>
    </ThemeProvider>
  );
}
