/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Download, Printer, Database, Mail, Linkedin, Github, FileText, CheckCircle } from 'lucide-react';
import { PROFILE, SKILLS, EXPERIENCES, PROJECTS, CERTIFICATIONS } from '../data';

interface ResumeViewerProps {
  theme: 'dark' | 'light';
}

export default function ResumeViewer({ theme }: ResumeViewerProps) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="resume" className="py-20 relative overflow-hidden bg-slate-500/[0.01]">
      <div className="container mx-auto px-6 max-w-4xl z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-6">
          <div>
            <p className={`font-mono text-xs uppercase tracking-widest font-semibold mb-2
              ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}
            >
              06 / Document Reader
            </p>
            <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight">
              Interactive ATS Resume
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mt-4 rounded-full" />
          </div>

          {/* Practical action control */}
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono font-medium tracking-tight shadow-md transition-all cursor-pointer
              bg-blue-600 text-white hover:bg-blue-500 transform active:scale-95 shrink-0"
          >
            <Printer className="w-4 h-4" />
            Print / Save as PDF
          </button>
        </div>

        {/* Informative advice to recruiters */}
        <div className={`p-4 rounded-xl border flex gap-3 items-center mb-8 text-xs leading-relaxed
          ${theme === 'dark' ? 'bg-slate-900/60 border-slate-800 text-slate-400' : 'bg-slate-50 border-slate-200 text-slate-600'}`}
        >
          <FileText className="w-5 h-5 text-blue-500 shrink-0" />
          <span>
            💡 **Pro Tip:** Pressing the **Print** button compiles a clean, single-page, black-and-white, industry-standard ATS resume layout with full margins and no website navigational clutter. Try it directly!
          </span>
        </div>

        {/* Mock/Interactive Resume Card */}
        <div 
          id="printable-resume-area"
          className={`p-6 sm:p-10 rounded-3xl border shadow-xl transition-all duration-300 relative overflow-hidden print:p-0 print:border-none print:shadow-none
            ${theme === 'dark' 
              ? 'bg-slate-900/50 border-slate-800 text-slate-100 shadow-black/10' 
              : 'bg-white border-slate-200 text-slate-900 shadow-slate-100'}`}
        >
          {/* Watermark symbol in background on screen layout */}
          <div className="absolute top-0 right-0 p-8 text-[120px] font-bold text-slate-500/[0.03] select-none pointer-events-none print:hidden uppercase font-mono">
            ATS
          </div>

          <div className="space-y-8">
            
            {/* 1. Header (Name + Coordinates) */}
            <div className="text-center pb-6 border-b border-slate-500/15">
              <h3 className="text-2xl sm:text-3xl font-sans font-bold tracking-tight uppercase">
                {PROFILE.name}
              </h3>
              <p className="text-sm font-mono tracking-wide text-blue-500 mt-1 font-semibold uppercase">
                {PROFILE.title}
              </p>
              
              {/* Coordinates block */}
              <div className="flex flex-wrap items-center justify-center gap-y-1 gap-x-4 text-xs font-mono text-slate-400 mt-4">
                <span>{PROFILE.location.split(' / ')[0]}</span>
                <span className="hidden sm:inline">•</span>
                <a href={`mailto:${PROFILE.email}`} className="hover:text-blue-400 transition-colors">{PROFILE.email}</a>
                <span className="hidden sm:inline">•</span>
                <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">LinkedIn</a>
                <span className="hidden sm:inline">•</span>
                <a href={PROFILE.github} target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors">GitHub</a>
              </div>
            </div>

            {/* 2. Professional Profile Statement */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-blue-400 border-b pb-1 border-slate-500/10">
                Professional Profile
              </h4>
              <p className={`text-xs sm:text-sm leading-relaxed ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
                {PROFILE.shortBio} {PROFILE.detailedBio}
              </p>
            </div>

            {/* 3. Core Tech Competencies list */}
            <div className="space-y-4">
              <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-blue-400 border-b pb-1 border-slate-500/10">
                Technical Expertise Areas
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-xs">
                <div className="space-y-2.5">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <div><span className="font-bold">Languages:</span> SQL (PostgreSQL, MSSQL), Python (Pandas, NumPy, Scikit-Learn), advanced formulas.</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <div><span className="font-bold">Analytics & BI:</span> Power BI (Advanced DAX metrics models & M-Query Pipelines), Tableau, spreadsheet pivot models.</div>
                  </div>
                </div>
                <div className="space-y-2.5">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <div><span className="font-bold">Cloud Infrastructure:</span> Microsoft Azure, Azure AI-900 cloud operations, machine learning lifecycle automation, and Git standard pipelines.</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <div><span className="font-bold">ML Frameworks:</span> Machine Learning classification regression models, clustering profiles, A/B analytical testings.</div>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Experience Timeline */}
            <div className="space-y-4">
              <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-blue-400 border-b pb-1 border-slate-500/10">
                Work Experiences & Internships
              </h4>
              
              <div className="space-y-4">
                {EXPERIENCES.map((exp) => (
                  <div key={exp.id} className="space-y-2">
                    <div className="flex items-start justify-between text-xs sm:text-sm font-sans flex-wrap gap-1">
                      <div>
                        <span className="font-bold">{exp.role}</span> | <span className="text-blue-500 font-semibold">{exp.company}</span>
                      </div>
                      <span className={`font-mono text-xs font-semibold ${theme === 'dark' ? 'text-slate-200' : 'text-slate-500'}`}>{exp.period}</span>
                    </div>
                    {/* Descriptions */}
                    <ul className={`space-y-1 pl-4 list-disc text-xs leading-relaxed print:text-slate-800 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
                      {exp.description.map((bullet, idx) => (
                        <li key={idx}>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* 5. Key Projects */}
            <div className="space-y-4">
              <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-blue-400 border-b pb-1 border-slate-500/10">
                Selected Independent Projects
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {PROJECTS.map((proj) => (
                  <div key={proj.id} className="space-y-1 text-xs">
                    <div className="font-bold text-slate-100 print:text-black">
                      {proj.title}
                    </div>
                    <p className={`leading-relaxed print:text-slate-850 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
                      {proj.description.slice(0, 110)}...
                    </p>
                    <div className={`text-[10px] font-mono ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
                      Technologies: {proj.technologies.slice(0, 4).join(', ')}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 6. Education & Certifications */}
            <div className="space-y-4">
              <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-blue-400 border-b pb-1 border-slate-500/10">
                Education & Credentials
              </h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans">
                <div className="space-y-1">
                  <div className="font-bold">Bachelor of Technology / Computer Science & Engineering (AI/ML)</div>
                  <div className={`${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>Malla Reddy Engineering College, Secunderabad, Telangana, India | Year 2023 - 2027</div>
                  <div className={`text-xs font-mono font-bold ${theme === 'dark' ? 'text-amber-300' : 'text-blue-600'}`}>Academic Standing: 8.62 CGPA (First Class Distinction)</div>
                </div>

                <div className="space-y-1">
                  <div className="font-bold">Major Professional Accreditations</div>
                  <ul className={`space-y-0.5 list-disc pl-4 text-[11px] ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
                    <li>Microsoft Certified: Azure AI Fundamentals (AI-900)</li>
                    <li>Core Python, Data Structures & OOP Certification (TechAugusta)</li>
                    <li>Data Structures & Algorithms Training (TechAugusta)</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
