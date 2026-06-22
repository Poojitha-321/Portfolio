/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Download, Mail, ArrowRight, Database, Terminal, BarChart2 } from 'lucide-react';
import { PROFILE } from '../data';

interface HeroProps {
  theme: 'dark' | 'light';
  scrollToSection: (id: string) => void;
}

export default function Hero({ theme, scrollToSection }: HeroProps) {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Dynamic Background Mesh Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-1/4 -left-1/4 w-[500px] h-[500px] rounded-full blur-[120px] opacity-15 mix-blend-screen animate-pulse
          ${theme === 'dark' ? 'bg-blue-600' : 'bg-blue-400'}`} />
        <div className={`absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] rounded-full blur-[140px] opacity-15 mix-blend-screen animate-pulse delay-2000
          ${theme === 'dark' ? 'bg-purple-600' : 'bg-purple-400'}`} />
        <div className={`absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full blur-[120px] opacity-10 mix-blend-screen animate-pulse delay-4000
          ${theme === 'dark' ? 'bg-cyan-600' : 'bg-cyan-400'}`} />
        
        {/* Subtle grid pattern */}
        <div className={`absolute inset-0 bg-[linear-gradient(to_right,rgba(128,128,128,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(128,128,128,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]`} />
      </div>

      <div className="container mx-auto px-6 max-w-6xl z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left main text block */}
        <motion.div 
          className="lg:col-span-7 space-y-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Status Pills */}
          <div className="flex flex-wrap gap-3">
            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium border tracking-wider
              ${theme === 'dark' 
                ? 'bg-blue-950/40 text-blue-400 border-blue-500/20' 
                : 'bg-blue-55/60 text-blue-700 border-blue-200'}`}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              OPEN TO OFFERS
            </span>
            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium border tracking-wider
              ${theme === 'dark' 
                ? 'bg-purple-950/40 text-purple-400 border-purple-500/20' 
                : 'bg-purple-55/60 text-purple-700 border-purple-200'}`}
            >
              LOCATED: HYDERABAD / REMOTE
            </span>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-sans font-bold tracking-tight">
              Hey, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500">
                {PROFILE.name}
              </span>
            </h1>
            <h2 className={`text-xl sm:text-2xl font-mono tracking-tight font-medium
              ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}
            >
              {PROFILE.title}
            </h2>
            <p className={`text-base sm:text-lg max-w-xl leading-relaxed
              ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}
            >
              {PROFILE.tagline}
            </p>
          </div>

          {/* Quick Stats Grid to instantly capture Recruiter's attention */}
          <div className="grid grid-cols-3 gap-4 border-t border-b py-6 border-slate-500/10">
            <div className="space-y-1">
              <span className={`font-mono text-xs uppercase tracking-wider ${theme === 'dark' ? 'text-slate-500' : 'text-slate-400'}`}>SQL Expertise</span>
              <p className="text-xl sm:text-2xl font-sans font-bold text-blue-500">95%</p>
              <p className={`text-[10px] sm:text-xs font-mono ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>CTEs & Query Opt</p>
            </div>
            <div className="space-y-1 border-l pl-4 border-slate-500/10">
              <span className={`font-mono text-xs uppercase tracking-wider ${theme === 'dark' ? 'text-slate-500' : 'text-slate-400'}`}>BI Dashboarding</span>
              <p className="text-xl sm:text-2xl font-sans font-bold text-purple-500">Power BI</p>
              <p className={`text-[10px] sm:text-xs font-mono ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>DAX Modeling</p>
            </div>
            <div className="space-y-1 border-l pl-4 border-slate-500/10">
              <span className={`font-mono text-xs uppercase tracking-wider ${theme === 'dark' ? 'text-slate-500' : 'text-slate-400'}`}>Cloud Stack</span>
              <p className="text-xl sm:text-2xl font-sans font-bold text-cyan-500">Azure AI</p>
              <p className={`text-[10px] sm:text-xs font-mono ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>AI-900 Certified</p>
            </div>
          </div>

          {/* Call To Actions */}
          <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
            <button
              onClick={() => scrollToSection('resume')}
              className="px-6 py-3.5 rounded-xl font-medium shadow-lg transition-transform h-12 flex items-center justify-center gap-2 cursor-pointer
                bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90 transform active:scale-95"
            >
              <Download className="w-4 h-4" />
              View & Print Resume
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`px-6 py-3.5 rounded-xl font-medium border transition-colors h-12 flex items-center justify-center gap-2 cursor-pointer
                ${theme === 'dark' 
                  ? 'bg-slate-900/50 hover:bg-slate-800 text-slate-100 border-slate-700' 
                  : 'bg-white hover:bg-slate-100 text-slate-800 border-slate-300'}`}
            >
              <Mail className="w-4 h-4" />
              Get In Touch
            </button>
          </div>
        </motion.div>

        {/* Right Interactive Portfolio Hero Graphic / Avatar Card */}
        <motion.div 
          className="lg:col-span-5 relative flex justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Decorative glowing backplate */}
          <div className="absolute inset-x-4 inset-y-4 rounded-3xl bg-gradient-to-tr from-blue-500 via-purple-500 to-cyan-500 blur-xl opacity-30 select-none pointer-events-none" />

          {/* Premium Recruiter-Focused Face / Info Card */}
          <div className={`relative backdrop-blur-xl border w-full max-w-sm rounded-3xl overflow-hidden shadow-2xl transition-all duration-300
            ${theme === 'dark' 
              ? 'bg-slate-900/80 border-slate-800 text-slate-100 shadow-black/80' 
              : 'bg-white border-slate-200 text-slate-900 shadow-slate-200'}`}
          >
            {/* Header Visual */}
            <div className="relative h-44 overflow-hidden bg-gradient-to-r from-slate-950 to-slate-900">
              <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_24px]" />
              
              {/* Dynamic Tech elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-blue-500/10 scale-150 animate-pulse">
                  <Database className="w-40 h-40" />
                </div>
              </div>
              
              {/* Professional Face Image (GitHub high-quality profile sync) */}
              <div className="absolute bottom-4 left-6 flex items-center gap-4">
                <div className="w-20 h-20 rounded-2xl border-2 border-blue-500 overflow-hidden bg-slate-900 shadow-lg">
                  <img 
                    src={PROFILE.avatar} 
                    alt={PROFILE.name} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>

            {/* Profile Brief Info */}
            <div className="px-6 py-5 space-y-4">
              <div>
                <h3 className="font-bold text-lg tracking-tight font-sans text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                  {PROFILE.name}
                </h3>
                <p className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Technical Portfolio Card
                </p>
              </div>

              {/* Recruiter Cheat Sheet */}
              <div className="space-y-3 bg-slate-500/5 p-3.5 rounded-xl border border-slate-500/10">
                <div className="flex gap-2.5 items-start text-xs leading-relaxed">
                  <Terminal className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold">Core Expertise:</span> Analytical modeling, automated insights extraction, high performance SQL dashboard sets.
                  </div>
                </div>
                <div className="flex gap-2.5 items-start text-xs leading-relaxed border-t border-slate-500/10 pt-2">
                  <BarChart2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold">Tech Highlights:</span> Python, React, Node.js, SQL, Power BI, TensorFlow, Azure AI-900.
                  </div>
                </div>
              </div>

              {/* Minimal interactive action */}
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Verified Analytics Suite:</span>
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 font-bold tracking-tight cursor-pointer"
                >
                  Explore Work
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>

          {/* Floating Aesthetic Elements */}
          <div className="absolute -top-4 -right-4 bg-purple-600/10 border border-purple-500/20 px-3 py-1.5 rounded-xl shadow-lg backdrop-blur-md hidden sm:block">
            <span className="text-[11px] font-mono font-medium text-purple-400 tracking-wider">⚡ Azure AI (AI-900)</span>
          </div>
          <div className="absolute -bottom-4 -left-4 bg-blue-600/10 border border-blue-500/20 px-3 py-1.5 rounded-xl shadow-lg backdrop-blur-md hidden sm:block">
            <span className="text-[11px] font-mono font-medium text-blue-400 tracking-wider">💾 PostgreSQL Master</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
