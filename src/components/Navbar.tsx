/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sun, Moon, Database } from 'lucide-react';
import { PROFILE } from '../data';

interface NavbarProps {
  theme: 'dark' | 'light';
  setTheme: (theme: 'dark' | 'light') => void;
  scrollToSection: (id: string) => void;
  activeSection?: string;
}

export default function Navbar({ theme, setTheme, scrollToSection, activeSection }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "About", target: "about" },
    { name: "Skills", target: "skills" },
    { name: "Certificates", target: "certifications" },
    { name: "Projects", target: "projects" },
    { name: "Experience", target: "experience" },
    { name: "Resume", target: "resume" },
    { name: "Contact", target: "contact" }
  ];

  // Track scrolled state for glassmorphism styles
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b
        ${scrolled 
          ? theme === 'dark' 
            ? 'bg-slate-950/80 backdrop-blur-md border-slate-900/60' 
            : 'bg-white/80 backdrop-blur-md border-slate-100'
          : 'bg-transparent border-transparent'}`}
      >
        <div className="container mx-auto px-6 max-w-6xl h-20 flex items-center justify-between">
          
          {/* Logo Brand Link */}
          <button 
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-2 group cursor-pointer text-left focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center shadow-md">
              <Database className="w-5 h-5 text-white group-hover:rotate-12 transition-transform" />
            </div>
            <div>
              <span className="block font-sans font-bold text-sm tracking-tight">Poojitha Portfolio</span>
              <span className="block font-mono text-[9px] uppercase tracking-wider text-slate-400">Software & AI Engine</span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = activeSection === link.target;
              return (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.target)}
                  className={`text-xs font-mono font-medium hover:text-blue-500 transition-colors uppercase tracking-wider cursor-pointer relative py-1.5 px-3 rounded-lg 
                    ${isActive 
                      ? 'text-blue-500 font-bold bg-blue-500/5' 
                      : theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span 
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-3 right-3 h-[2px] bg-blue-500 rounded-full"
                    />
                  )}
                </button>
              );
            })}

            {/* Vertical separator */}
            <span className="h-4 w-[1px] bg-slate-500/15" />

            {/* Direct Contact Button */}
            <button
              onClick={() => scrollToSection('contact')}
              className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 text-white font-mono font-bold text-xs rounded-xl cursor-pointer shadow-md shadow-blue-900/10"
            >
              HIRE ME
            </button>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-xl border transition-colors cursor-pointer
                ${theme === 'dark' 
                  ? 'bg-slate-900/60 border-slate-800 hover:bg-slate-800 text-yellow-400' 
                  : 'bg-slate-50 border-slate-200 hover:bg-slate-100 text-indigo-900'}`}
              title={theme === 'dark' ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>

          {/* Mobile Right Bar */}
          <div className="flex items-center gap-3 lg:hidden">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-xl border transition-colors cursor-pointer
                ${theme === 'dark' 
                  ? 'bg-slate-900/60 border-slate-800 text-yellow-400' 
                  : 'bg-slate-50 border-slate-200 text-indigo-900'}`}
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Hamburger button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-xl border transition-colors cursor-pointer
                ${theme === 'dark' 
                  ? 'bg-slate-900/60 border-slate-800 text-slate-100' 
                  : 'bg-slate-50 border-slate-200 text-slate-900'}`}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`fixed top-20 left-0 right-0 z-40 border-b shadow-2xl overflow-hidden lg:hidden
              ${theme === 'dark' ? 'bg-slate-950 border-slate-900 text-slate-100' : 'bg-white border-slate-100 text-slate-900'}`}
          >
            <div className="px-6 py-6 space-y-4">
              {navLinks.map((link) => {
                const isActive = activeSection === link.target;
                return (
                  <button
                    key={link.name}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      // short wait for height transition
                      setTimeout(() => scrollToSection(link.target), 300);
                    }}
                    className={`block w-full text-left font-mono font-medium text-xs uppercase py-2.5 px-3 rounded-lg cursor-pointer transition-colors
                      ${isActive 
                        ? 'text-blue-400 bg-blue-500/10 font-bold border-l-2 border-blue-500' 
                        : theme === 'dark' ? 'text-slate-300 hover:text-blue-400 hover:bg-slate-900' : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'}`}
                  >
                    {link.name}
                  </button>
                );
              })}

              <div className="h-[1px] bg-slate-500/10 pt-1" />

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setTimeout(() => scrollToSection('contact'), 300);
                }}
                className="w-full text-center py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 text-white font-mono font-bold text-xs rounded-xl cursor-pointer"
              >
                HIRE ME NOW
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
