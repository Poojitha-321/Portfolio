/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Database, Mail, Github, Linkedin, ArrowUp } from 'lucide-react';
import { PROFILE } from '../data';

interface FooterProps {
  theme: 'dark' | 'light';
  scrollToSection: (id: string) => void;
}

export default function Footer({ theme, scrollToSection }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`border-t py-12 transition-colors duration-300
      ${theme === 'dark' 
        ? 'bg-slate-950 border-slate-900 text-slate-400' 
        : 'bg-slate-50 border-slate-200 text-slate-600'}`}
    >
      <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row md:items-center justify-between gap-8">
        
        {/* Brand identity */}
        <div className="space-y-3">
          <button 
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-2 text-left focus:outline-none cursor-pointer"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center">
              <Database className="w-4 h-4 text-white" />
            </div>
            <span className={`font-sans font-bold text-sm tracking-tight
              ${theme === 'dark' ? 'text-slate-200' : 'text-slate-900'}`}
            >
              Poojitha Portfolio
            </span>
          </button>
          
          <p className="text-xs leading-relaxed max-w-xs font-sans">
            Aspiring Data Analyst and AI/ML professional focused on structured BI Dashboards, certified Azure workflows, and high ROI.
          </p>
        </div>

        {/* Channels Coordinate Links */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-6">
          <div className="flex items-center gap-4 text-xs font-mono font-medium">
            <a 
              href={`mailto:${PROFILE.email}`}
              className="hover:text-blue-500 transition-colors inline-flex items-center gap-1"
            >
              <Mail className="w-3.5 h-3.5" />
              Email
            </a>
            <a 
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-500 transition-colors inline-flex items-center gap-1"
            >
              <Linkedin className="w-3.5 h-3.5" />
              LinkedIn
            </a>
            <a 
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-500 transition-colors inline-flex items-center gap-1"
            >
              <Github className="w-3.5 h-3.5" />
              GitHub
            </a>
          </div>

          <button
            onClick={() => scrollToSection('hero')}
            className={`p-2 rounded-xl border flex items-center justify-center cursor-pointer transition-all hover:scale-105 active:scale-95
              ${theme === 'dark' 
                ? 'bg-slate-900 border-slate-800 hover:bg-slate-800 text-slate-100' 
                : 'bg-white border-slate-200 hover:bg-slate-100 text-slate-900'}`}
            title="Scroll To Top"
          >
            <ArrowUp className="w-4 h-4 animate-bounce" />
          </button>
        </div>

      </div>

      {/* Bottom Legal bar */}
      <div className="container mx-auto px-6 max-w-6xl mt-8 pt-6 border-t border-slate-500/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono select-none">
        <div>
          © {currentYear} {PROFILE.name}. All rights reserved.
        </div>
        <div className="text-slate-500 flex items-center gap-1">
          <span>Crafted for Recruiter Success</span>
          <span>•</span>
          <span>ATS Compliant 1.0</span>
        </div>
      </div>
    </footer>
  );
}
