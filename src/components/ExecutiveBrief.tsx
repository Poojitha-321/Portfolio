import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Download, Briefcase, Award, Code, BookOpen, Send, ExternalLink, Calendar, Plus } from 'lucide-react';
import { PROFILE, SKILLS, PROJECTS, CERTIFICATIONS, EXPERIENCES } from '../data';
import { CustomStyleConfig } from '../types';
import { getThemeClasses } from '../themeUtils';

interface ExecutiveBriefProps {
  styleConfig: CustomStyleConfig;
  scrollToSection: (id: string) => void;
}

export default function ExecutiveBrief({ styleConfig, scrollToSection }: ExecutiveBriefProps) {
  const styles = getThemeClasses(styleConfig);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className={`max-w-4xl mx-auto rounded-3xl border shadow-sm p-6 sm:p-10 ${styles.cardBg} ${styles.border} ${styles.fontClass} relative overflow-hidden transition-all duration-300`}>
      {/* Decorative accent top line */}
      <div className={`absolute top-0 inset-x-0 h-2 bg-gradient-to-r ${styles.accentGradient}`} />

      {/* Grid: Header Section */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-slate-500/10 items-start">
        {/* Profile Info */}
        <div className="md:col-span-8 space-y-4">
          <div className="space-y-1">
            <span className={`text-[10px] uppercase font-mono tracking-widest font-bold ${styles.accentText}`}>Executive Recruiter Briefing</span>
            <h1 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight">{PROFILE.name}</h1>
            <p className={`text-base font-medium font-mono ${styles.accentText}`}>{PROFILE.title}</p>
          </div>
          <p className="text-xs leading-relaxed max-w-xl opacity-90">{PROFILE.detailedBio}</p>
          
          {/* Quick contact deck */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-mono">
            <a href={`mailto:${PROFILE.email}`} className="flex items-center gap-1.5 hover:underline">
              <Mail className="w-3.5 h-3.5" />
              {PROFILE.email}
            </a>
            <a href={`tel:${PROFILE.phone}`} className="flex items-center gap-1.5 hover:underline">
              <Phone className="w-3.5 h-3.5" />
              {PROFILE.phone}
            </a>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              {PROFILE.location}
            </span>
          </div>
        </div>

        {/* Action Widgets */}
        <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col gap-3 justify-end items-stretch">
          <button
            onClick={handlePrint}
            className={`px-5 py-3 rounded-xl font-mono text-center text-xs font-bold text-white bg-gradient-to-r ${styles.accentGradient} hover:opacity-95 shadow-md flex items-center justify-center gap-2 cursor-pointer transition-transform transform active:scale-95`}
          >
            <Download className="w-4 h-4" />
            Print Full Resume
          </button>
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-xl font-mono text-center text-xs font-bold border border-slate-500/15 hover:bg-slate-500/5 transition-colors flex items-center justify-center gap-2"
          >
            View LinkedIn Profile
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-5 py-3 rounded-xl font-mono text-center text-xs font-bold bg-slate-500/5 hover:bg-slate-500/10 border border-slate-500/5 transition-colors flex items-center justify-center gap-2"
          >
            Send Quick Inquiry
            <Send className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Grid: High-Impact Performance Indicators */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-8 border-b border-slate-500/10 text-center">
        <div className="space-y-1">
          <span className="block font-mono text-[10px] uppercase tracking-wider opacity-60">SQL Prowess</span>
          <p className={`text-xl sm:text-2xl font-bold ${styles.accentText}`}>Advanced</p>
          <span className="block font-mono text-[9px] opacity-50">CTEs / Optimization</span>
        </div>
        <div className="space-y-1 border-l border-slate-500/10">
          <span className="block font-mono text-[10px] uppercase tracking-wider opacity-60">BI Tooling</span>
          <p className={`text-xl sm:text-2xl font-bold ${styles.accentText}`}>Power BI</p>
          <span className="block font-mono text-[9px] opacity-50">DAX modeling</span>
        </div>
        <div className="space-y-1 border-l border-slate-500/10">
          <span className="block font-mono text-[10px] uppercase tracking-wider opacity-60">AI Integration</span>
          <p className={`text-xl sm:text-2xl font-bold ${styles.accentText}`}>LLMs / CNNs</p>
          <span className="block font-mono text-[9px] opacity-50">Gemini / PyTorch</span>
        </div>
        <div className="space-y-1 border-l border-slate-500/10">
          <span className="block font-mono text-[10px] uppercase tracking-wider opacity-60">Azure AI</span>
          <p className={`text-xl sm:text-2xl font-bold ${styles.accentText}`}>AI-900</p>
          <span className="block font-mono text-[9px] opacity-50">Certified Fundamentals</span>
        </div>
      </div>

      {/* Body Grid: Column Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-8">
        
        {/* Left Column: Work History & Projects (Saves recruiter's time scrolling) */}
        <div className="md:col-span-7 space-y-8">
          
          {/* Work Experience */}
          <div className="space-y-4">
            <h3 className="text-sm font-mono font-bold uppercase tracking-wider flex items-center gap-2">
              <Briefcase className={`w-4 h-4 ${styles.accentText}`} />
              Executive Work Log
            </h3>
            
            <div className="space-y-6">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="relative pl-4 border-l border-slate-500/20 space-y-2">
                  <div className="absolute left-[-4.5px] top-[5px] w-2 h-2 rounded-full bg-blue-500" />
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <div>
                      <h4 className="font-bold text-xs">{exp.role}</h4>
                      <p className="text-[10px] opacity-75">{exp.company} — {exp.location}</p>
                    </div>
                    <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-slate-500/5 border border-slate-500/10">{exp.period}</span>
                  </div>
                  <ul className="space-y-1 pl-4 list-disc text-[11px] opacity-85 leading-relaxed">
                    {exp.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Core Projects */}
          <div className="space-y-4">
            <h3 className="text-sm font-mono font-bold uppercase tracking-wider flex items-center gap-2">
              <Code className={`w-4 h-4 ${styles.accentText}`} />
              Selected High-Output Portfolios
            </h3>

            <div className="space-y-4">
              {PROJECTS.slice(0, 3).map((proj) => (
                <div key={proj.id} className={`p-4 rounded-xl border border-slate-500/10 space-y-2 bg-slate-500/5`}>
                  <div className="flex justify-between items-center">
                    <h4 className="font-bold text-xs">{proj.title}</h4>
                    <span className={`text-[9px] font-mono font-semibold uppercase tracking-wider text-right ${styles.accentText}`}>
                      {proj.category.replace('-', ' ')}
                    </span>
                  </div>
                  <p className="text-[11px] opacity-80 leading-relaxed">{proj.description}</p>
                  
                  {proj.businessImpact && (
                    <div className="text-[10px] border-t border-slate-500/5 pt-2 font-mono flex gap-1 items-start">
                      <span className={`font-semibold shrink-0 ${styles.accentText}`}>Impact:</span>
                      <span className="opacity-95">{proj.businessImpact}</span>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-1 pt-1">
                    {proj.technologies.slice(0, 4).map((tech) => (
                      <span key={tech} className="text-[9px] font-mono bg-slate-500/5 px-2 py-0.5 border border-slate-500/5 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column: Skills, Badges, Certifications */}
        <div className="md:col-span-5 space-y-8">
          
          {/* Skill Blocks */}
          <div className="space-y-4">
            <h3 className="text-sm font-mono font-bold uppercase tracking-wider flex items-center gap-2">
              <BookOpen className={`w-4 h-4 ${styles.accentText}`} />
              Skills Matrix
            </h3>

            <div className="space-y-3">
              {SKILLS.slice(0, 7).map((skill) => (
                <div key={skill.name} className="space-y-1">
                  <div className="flex justify-between text-[11px] font-mono">
                    <span className="font-semibold">{skill.name}</span>
                    <span className="opacity-75">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-500/10 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${styles.accentGradient}`} 
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Notable Certifications */}
          <div className="space-y-4">
            <h3 className="text-sm font-mono font-bold uppercase tracking-wider flex items-center gap-2">
              <Award className={`w-4 h-4 ${styles.accentText}`} />
              Verified Credentials
            </h3>

            <div className="space-y-3">
              {CERTIFICATIONS.slice(0, 4).map((cert) => (
                <div key={cert.id} className="p-3 rounded-lg border border-slate-500/5 bg-slate-500/5 flex items-start gap-2.5">
                  <span className={`w-1.5 h-1.5 rounded-full shrink-0 mt-2 bg-${cert.badgeColor}-500`} />
                  <div className="space-y-0.5">
                    <h4 className="font-bold text-[11px] line-clamp-1 leading-snug">{cert.title}</h4>
                    <p className="text-[9px] font-mono opacity-60">{cert.issuer} • {cert.date}</p>
                    <a 
                      href={cert.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-0.5 text-[9px] font-mono font-bold ${styles.accentText} hover:underline pt-1`}
                    >
                      Verify ID
                      <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
