/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Experience from './components/Experience';
import ResumeViewer from './components/ResumeViewer';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Dynamic Options Assets
import BentoDashboard from './components/BentoDashboard';
import ExecutiveBrief from './components/ExecutiveBrief';
import TerminalShell from './components/TerminalShell';
import { CustomStyleConfig } from './types';
import { getThemeClasses } from './themeUtils';

export default function App() {
  // Initialize dynamic theme and layout options
  const [styleConfig, setStyleConfig] = useState<CustomStyleConfig>(() => {
    try {
      const cached = localStorage.getItem('poojitha_portfolio_vibe_config');
      if (cached) {
        return JSON.parse(cached);
      }
    } catch (e) {}
    return {
      theme: 'slate',
      layout: 'scrolling',
      accent: 'blue',
      mode: 'dark'
    };
  });

  const classes = getThemeClasses(styleConfig);

  // Active section state for non-scrolling immediate tab switching
  const [activeSection, setActiveSection] = useState<string>('hero');

  // Unified immediate section-activation (no page scroll!)
  const scrollToSection = (id: string) => {
    // If we're in one of the other layouts, bring them back to the active tabbed layout
    if (styleConfig.layout !== 'scrolling') {
      const updated = { ...styleConfig, layout: 'scrolling' as const };
      setStyleConfig(updated);
      localStorage.setItem('poojitha_portfolio_vibe_config', JSON.stringify(updated));
    }
    setActiveSection(id);
    // Explicitly reset any existing scroll position instantly to keep the viewport clean
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  };

  const handleSetThemeMode = (newMode: 'dark' | 'light') => {
    const updated = { ...styleConfig, mode: newMode };
    setStyleConfig(updated);
    localStorage.setItem('poojitha_portfolio_vibe_config', JSON.stringify(updated));
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 overflow-x-hidden selection:bg-blue-500/30 selection:text-blue-200
      ${classes.bg} ${classes.fontClass}`}
    >
      {/* Absolute fixed visual decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className={`absolute top-0 inset-x-0 h-[600px] bg-gradient-to-b opacity-[0.03] 
          ${styleConfig.mode === 'dark' ? 'from-blue-500' : 'from-blue-200'}`} 
        />
      </div>

      {/* Primary Layout hierarchy */}
      <Navbar 
        theme={styleConfig.mode} 
        setTheme={handleSetThemeMode} 
        scrollToSection={scrollToSection} 
        activeSection={activeSection}
      />
      
      <main className="relative z-10">
        
        {/* Render presentation view based on layout mode */}
        {styleConfig.layout === 'scrolling' && (
          <div className="pt-24 pb-12 min-h-[calc(100vh-140px)] flex flex-col justify-start">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="w-full flex-grow"
              >
                {activeSection === 'hero' && (
                  <Hero theme={styleConfig.mode} scrollToSection={scrollToSection} />
                )}
                {activeSection === 'about' && (
                  <div className={`border-b border-slate-500/5 py-6 ${styleConfig.mode === 'dark' ? 'bg-[#0C1425]/30' : 'bg-white'}`}>
                    <About theme={styleConfig.mode} />
                  </div>
                )}
                {activeSection === 'skills' && (
                  <div className="border-b border-slate-500/5 py-6">
                    <Skills theme={styleConfig.mode} />
                  </div>
                )}
                {activeSection === 'projects' && (
                  <div className={`border-b border-slate-500/5 py-6 ${styleConfig.mode === 'dark' ? 'bg-[#0C1425]/30' : 'bg-white'}`}>
                    <Projects theme={styleConfig.mode} />
                  </div>
                )}
                {activeSection === 'certifications' && (
                  <div className="border-b border-slate-500/5 py-6">
                    <Certifications theme={styleConfig.mode} />
                  </div>
                )}
                {activeSection === 'experience' && (
                  <div className={`border-b border-slate-500/5 py-6 ${styleConfig.mode === 'dark' ? 'bg-[#0C1425]/30' : 'bg-white'}`}>
                    <Experience theme={styleConfig.mode} />
                  </div>
                )}
                {activeSection === 'resume' && (
                  <div className="border-b border-slate-500/5 py-6">
                    <ResumeViewer theme={styleConfig.mode} />
                  </div>
                )}
                {activeSection === 'contact' && (
                  <div className={`border-b border-slate-500/5 py-6 ${styleConfig.mode === 'dark' ? 'bg-[#0C1425]/30' : 'bg-white'}`}>
                    <Contact theme={styleConfig.mode} />
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        )}

        {styleConfig.layout === 'bento' && (
          <div className="pt-28 pb-16 container mx-auto px-6 max-w-6xl space-y-8 animate-fade-in">
            <div className="text-center space-y-2 mb-4">
              <span className={`text-[10px] uppercase font-mono tracking-widest font-bold ${classes.accentText}`}>Interactive Representation</span>
              <h1 className="text-3xl font-sans font-extrabold tracking-tight">Bento Portfolio Dashboard</h1>
              <p className="text-xs max-w-md mx-auto opacity-75">Click on cards, slide projects, and verify skills directly in modular widgets.</p>
            </div>
            <BentoDashboard styleConfig={styleConfig} scrollToSection={scrollToSection} />
          </div>
        )}

        {styleConfig.layout === 'brief' && (
          <div className="pt-28 pb-16 container mx-auto px-6 max-w-4xl space-y-6 animate-fade-in">
            <ExecutiveBrief styleConfig={styleConfig} scrollToSection={scrollToSection} />
          </div>
        )}

        {styleConfig.layout === 'shell' && (
          <div className="pt-28 pb-16 container mx-auto px-6 max-w-4xl space-y-4 animate-fade-in">
            <TerminalShell styleConfig={styleConfig} setStyleConfig={setStyleConfig} />
          </div>
        )}

        {/* Global Contact Form at bottom is always accessible for conversions when not in scrolling/tabbed mode */}
        {styleConfig.layout !== 'scrolling' && (
          <div className={`border-t border-slate-500/5 
            ${styleConfig.mode === 'dark' ? 'bg-[#0C1425]/50' : 'bg-white'}`}
          >
            <Contact theme={styleConfig.mode} />
          </div>
        )}
      </main>

      <Footer theme={styleConfig.mode} scrollToSection={scrollToSection} />
    </div>
  );
}
