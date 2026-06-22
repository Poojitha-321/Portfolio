import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROFILE, SKILLS, PROJECTS, CERTIFICATIONS, EXPERIENCES } from '../data';
import { CustomStyleConfig } from '../types';
import { getThemeClasses } from '../themeUtils';
import { 
  Database, Terminal, BarChart2, Award, Mail, Phone, MapPin, 
  Linkedin, Github, ArrowRight, ArrowLeft, ExternalLink, Sparkles
} from 'lucide-react';

interface BentoDashboardProps {
  styleConfig: CustomStyleConfig;
  scrollToSection: (id: string) => void;
}

export default function BentoDashboard({ styleConfig, scrollToSection }: BentoDashboardProps) {
  const styles = getThemeClasses(styleConfig);
  const [projectIndex, setProjectIndex] = useState(0);
  const currentProject = PROJECTS[projectIndex];

  // Projects navigation
  const nextProject = () => {
    setProjectIndex((prev) => (prev + 1) % PROJECTS.length);
  };
  const prevProject = () => {
    setProjectIndex((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length);
  };

  return (
    <div className={`grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-5 max-w-6xl mx-auto px-1 ${styles.fontClass} transition-colors duration-300`}>
      
      {/* Tile 1: Profile & Bio Block (Large 2x2) */}
      <div className={`md:col-span-2 lg:col-span-8 p-6 sm:p-8 rounded-3xl border flex flex-col justify-between min-h-[340px] relative overflow-hidden group
        ${styles.cardBg} ${styles.border}`}
      >
        <div className={`absolute top-0 right-0 w-80 h-80 rounded-full blur-[100px] opacity-[0.06] bg-gradient-to-tr ${styles.accentGradient}`} />
        
        <div className="space-y-4 relative z-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-16 h-16 rounded-2xl border-2 border-blue-500 overflow-hidden bg-slate-900 shadow-md">
              <img 
                src={PROFILE.avatar} 
                alt={PROFILE.name} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <span className={`inline-flex items-center gap-1 text-[10px] uppercase font-mono tracking-widest font-bold ${styles.accentText}`}>
                <Sparkles className="w-3 h-3 animate-pulse" />
                Data & AI Engine Specialist
              </span>
              <h2 className="text-2xl sm:text-3xl font-sans font-bold tracking-tight">{PROFILE.name}</h2>
              <p className="text-xs font-mono font-medium opacity-75">{PROFILE.title}</p>
            </div>
          </div>

          <p className="text-xs sm:text-sm leading-relaxed max-w-2xl opacity-90">
            {PROFILE.detailedBio}
          </p>
        </div>

        {/* Dynamic bottom panel */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-500/10 mt-6 relative z-10 text-xs font-mono">
          <div className="flex items-center gap-2">
            <MapPin className={`w-4 h-4 shrink-0 opacity-70 ${styles.accentText}`} />
            <span className="opacity-80">{PROFILE.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className={`w-4 h-4 shrink-0 opacity-70 ${styles.accentText}`} />
            <a href={`mailto:${PROFILE.email}`} className="truncate hover:underline opacity-80">{PROFILE.email}</a>
          </div>
          <div className="flex items-center gap-2">
            <LinkIcon className={`w-4 h-4 shrink-0 opacity-70 ${styles.accentText}`} />
            <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline opacity-80">Connect Secure</a>
          </div>
        </div>
      </div>

      {/* Tile 2: Fast Stats Counter (1x2 on large screen) */}
      <div className={`md:col-span-2 lg:col-span-4 p-6 rounded-3xl border flex flex-col justify-between
        ${styles.cardBg} ${styles.border}`}
      >
        <div>
          <span className="text-[10px] uppercase font-mono font-bold opacity-60 tracking-wider">Skill Spectrum</span>
          <h3 className="text-lg font-sans font-bold tracking-tight mt-1">Core Expertise</h3>
        </div>

        <div className="space-y-4 my-4">
          <div className="flex justify-between items-center text-xs border-b border-slate-500/15 pb-2">
            <span className="font-mono flex items-center gap-1.5"><Database className="w-3.5 h-3.5" /> SQL/DAX Modeling</span>
            <span className="font-mono font-bold text-emerald-400">95%</span>
          </div>
          <div className="flex justify-between items-center text-xs border-b border-slate-500/15 pb-2">
            <span className="font-mono flex items-center gap-1.5"><Terminal className="w-3.5 h-3.5" /> Python Pipelines</span>
            <span className="font-mono font-bold text-blue-400">95%</span>
          </div>
          <div className="flex justify-between items-center text-xs border-b border-slate-500/15 pb-2">
            <span className="font-mono flex items-center gap-1.5"><BarChart2 className="w-3.5 h-3.5" /> BI Visualization</span>
            <span className="font-mono font-bold text-violet-400">Power BI</span>
          </div>
          <div className="flex justify-between items-center text-xs">
            <span className="font-mono flex items-center gap-1.5"><Award className="w-3.5 h-3.5" /> AI & GenAI models</span>
            <span className="font-mono font-bold text-amber-400">Gemini/Keras</span>
          </div>
        </div>

        <button 
          onClick={() => scrollToSection('skills')}
          className={`w-full py-2.5 rounded-xl font-mono text-[10px] text-center font-bold border transition-all hover:bg-slate-500/5 ${styles.accentText} ${styles.border}`}
        >
          VIEW DETAILED MATRIX
        </button>
      </div>

      {/* Tile 3: Projects Interactive Carousel Widget (Large 2x2, taking 8 columns) */}
      <div className={`md:col-span-4 lg:col-span-7 p-6 rounded-3xl border flex flex-col justify-between min-h-[380px]
        ${styles.cardBg} ${styles.border}`}
      >
        <div className="flex justify-between items-center pb-4 border-b border-slate-500/10">
          <div>
            <span className="text-[10px] uppercase font-mono font-bold opacity-60 tracking-wider">Featured Projects</span>
            <h3 className="text-base font-sans font-bold tracking-tight">Interactive Showroom</h3>
          </div>
          <div className="flex items-center gap-2">
            <button 
              onClick={prevProject}
              className="p-1.5 rounded-lg border border-slate-500/15 hover:bg-slate-500/5 cursor-pointer text-xs"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
            </button>
            <span className="text-xs font-mono">{projectIndex + 1}/{PROJECTS.length}</span>
            <button 
              onClick={nextProject}
              className="p-1.5 rounded-lg border border-slate-500/15 hover:bg-slate-500/5 cursor-pointer text-xs"
            >
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Carousel Content */}
        <div className="flex-1 py-4 flex flex-col justify-center space-y-3">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-2"
            >
              <div className="flex justify-between items-start flex-wrap gap-2">
                <h4 className="font-bold text-sm leading-snug">{currentProject.title}</h4>
                <span className={`text-[9px] font-mono px-2 py-0.5 rounded-full border ${styles.badgeClass}`}>
                  {currentProject.category.replace('-', ' ')}
                </span>
              </div>
              
              <p className="text-xs opacity-85 leading-relaxed truncate-3-lines">
                {currentProject.description}
              </p>

              {currentProject.businessImpact && (
                <div className="text-[10px] font-mono bg-slate-500/5 border border-slate-500/5 p-2 rounded-lg flex gap-1 items-start">
                  <span className={`font-semibold text-[9px] shrink-0 ${styles.accentText}`}>IMPACT:</span>
                  <span className="opacity-90">{currentProject.businessImpact}</span>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Footer Buttons */}
        <div className="flex items-center justify-between border-t border-slate-500/10 pt-4">
          <div className="flex flex-wrap gap-1 leading-none">
            {currentProject.technologies.slice(0, 3).map(tech => (
              <span key={tech} className="text-[9px] font-mono bg-slate-500/5 px-2 py-0.5 rounded border border-slate-500/5">
                {tech}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-2">
            {currentProject.githubUrl && (
              <a 
                href={currentProject.githubUrl} 
                target="_blank" 
                rel="noreferrer"
                className="p-1.5 bg-slate-500/5 rounded-lg border border-slate-500/10 hover:bg-slate-500/10"
                title="Codebase"
              >
                <Github className="w-3.5 h-3.5" />
              </a>
            )}
            <a 
              href={currentProject.liveUrl} 
              target="_blank" 
              rel="noreferrer"
              className={`p-1.5 rounded-lg text-white bg-gradient-to-tr ${styles.accentGradient} hover:opacity-90 flex items-center gap-1 text-[10px] font-mono font-bold`}
            >
              DEPLOY
              <ExternalLink className="w-2.5 h-2.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Tile 4: Work Timeline Widget (Medium 2x2, taking 5 columns) */}
      <div className={`md:col-span-4 lg:col-span-5 p-6 rounded-3xl border flex flex-col justify-between
        ${styles.cardBg} ${styles.border}`}
      >
        <div className="pb-4 border-b border-slate-500/10">
          <span className="text-[10px] uppercase font-mono font-bold opacity-60 tracking-wider">Career Log</span>
          <h3 className="text-base font-sans font-bold tracking-tight">Timeline Briefing</h3>
        </div>

        <div className="flex-grow py-5 space-y-4">
          {EXPERIENCES.map(exp => (
            <div key={exp.id} className="relative pl-4 border-l border-slate-500/20 space-y-1">
              <span className="absolute left-[-4px] top-1.5 w-2 h-2 rounded-full bg-blue-500" />
              <div className="flex justify-between items-start text-xs flex-wrap gap-1">
                <span className="font-bold text-[11px] leading-tight">{exp.role}</span>
                <span className="text-[9px] font-mono opacity-60">{exp.period}</span>
              </div>
              <p className="text-[10px] opacity-75">{exp.company} — {exp.location}</p>
              <p className="text-[10px] opacity-80 leading-snug line-clamp-2">
                {exp.description[0]}
              </p>
            </div>
          ))}
        </div>

        <button 
          onClick={() => scrollToSection('experience')}
          className={`w-full py-2.5 rounded-xl font-mono text-[10px] text-center font-bold border transition-all hover:bg-slate-500/5 ${styles.accentText} ${styles.border}`}
        >
          EXPLORE COMPLETE HISTORY
        </button>
      </div>

      {/* Tile 5: verified credentials marquee (4 columns) */}
      <div className={`md:col-span-2 lg:col-span-6 p-6 rounded-3xl border flex flex-col justify-between
        ${styles.cardBg} ${styles.border}`}
      >
        <div>
          <span className="text-[10px] uppercase font-mono font-bold opacity-60 tracking-wider">Verifiable Credentials</span>
          <h3 className="text-base font-sans font-bold tracking-tight">Security Certificates</h3>
        </div>

        <div className="space-y-3 my-4">
          {CERTIFICATIONS.slice(0, 3).map((cert) => (
            <div key={cert.id} className="flex justify-between items-center text-xs p-2.5 rounded-xl bg-slate-500/5 border border-slate-500/10 gap-4">
              <div className="space-y-0.5 truncate">
                <h4 className="font-bold text-[11px] truncate leading-snug">{cert.title}</h4>
                <p className="text-[9px] font-mono opacity-60">{cert.issuer}</p>
              </div>
              <a 
                href={cert.verificationUrl} 
                target="_blank" 
                rel="noreferrer"
                className={`text-[9px] font-mono font-bold ${styles.accentText} whitespace-nowrap hover:underline flex items-center gap-0.5`}
              >
                VERIFY
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
            </div>
          ))}
        </div>

        <button 
          onClick={() => scrollToSection('certifications')}
          className={`w-full py-2.5 rounded-xl font-mono text-[10px] text-center font-bold border transition-all hover:bg-slate-500/5 ${styles.accentText} ${styles.border}`}
        >
          VIEW ALL CREDENTIALS
        </button>
      </div>

      {/* Tile 6: Connection Desk & Direct Actions (6 columns) */}
      <div className={`md:col-span-2 lg:col-span-6 p-6 rounded-3xl border flex flex-col justify-between relative overflow-hidden group
        ${styles.cardBg} ${styles.border}`}
      >
        <div>
          <span className="text-[10px] uppercase font-mono font-bold opacity-60 tracking-wider">Connection Desk</span>
          <h3 className="text-base font-sans font-bold tracking-tight">Open Channels</h3>
        </div>

        <div className="grid grid-cols-2 gap-3 my-4">
          <a 
            href={`mailto:${PROFILE.email}`} 
            className="p-3 rounded-xl border border-slate-500/10 hover:border-blue-500/40 hover:bg-blue-500/5 transition-all flex flex-col gap-2 cursor-pointer"
          >
            <Mail className="w-4 h-4 text-blue-500" />
            <div>
              <span className="block text-[10px] font-mono opacity-60 leading-none">INBOX DIRECT</span>
              <span className="block font-sans font-bold text-xs mt-1 truncate">Email Client</span>
            </div>
          </a>
          <a 
            href={`tel:${PROFILE.phone}`} 
            className="p-3 rounded-xl border border-slate-500/10 hover:border-purple-500/40 hover:bg-purple-500/5 transition-all flex flex-col gap-2 cursor-pointer"
          >
            <Phone className="w-4 h-4 text-purple-500" />
            <div>
              <span className="block text-[10px] font-mono opacity-60 leading-none">VOICE/TEXT</span>
              <span className="block font-sans font-bold text-xs mt-1 truncate">{PROFILE.phone}</span>
            </div>
          </a>
          <a 
            href={PROFILE.linkedin} 
            target="_blank" 
            rel="noreferrer" 
            className="p-3 rounded-xl border border-slate-500/10 hover:border-cyan-500/40 hover:bg-cyan-500/5 transition-all flex flex-col gap-2"
          >
            <Linkedin className="w-4 h-4 text-cyan-400" />
            <div>
              <span className="block text-[10px] font-mono opacity-60 leading-none">PROFESSIONAL</span>
              <span className="block font-sans font-bold text-xs mt-1 truncate">LinkedIn Connect</span>
            </div>
          </a>
          <a 
            href={PROFILE.github} 
            target="_blank" 
            rel="noreferrer" 
            className="p-3 rounded-xl border border-slate-500/10 hover:border-pink-500/40 hover:bg-pink-500/5 transition-all flex flex-col gap-2"
          >
            <Github className="w-4 h-4 text-pink-400" />
            <div>
              <span className="block text-[10px] font-mono opacity-60 leading-none">REPOSITORIES</span>
              <span className="block font-sans font-bold text-xs mt-1 truncate">Github Hub</span>
            </div>
          </a>
        </div>

        <button 
          onClick={() => scrollToSection('contact')}
          className={`w-full py-3 bg-gradient-to-r text-white font-mono text-[10px] text-center font-bold rounded-xl transition-all hover:opacity-90 shadow-md ${styles.accentGradient}`}
        >
          CONTACT ENQUIRIES SECURE
        </button>
      </div>

    </div>
  );
}

// Subcomponent: Custom helper component
function LinkIcon({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
    </svg>
  );
}
