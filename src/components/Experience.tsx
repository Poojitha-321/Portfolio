/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin, Award, BookOpen, Star, ExternalLink } from 'lucide-react';
import { EXPERIENCES, ACHIEVEMENTS } from '../data';

interface ExperienceProps {
  theme: 'dark' | 'light';
}

export default function Experience({ theme }: ExperienceProps) {
  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Section Header */}
        <div className="mb-14">
          <p className={`font-mono text-xs uppercase tracking-widest font-semibold mb-2
            ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}
          >
            05 / Background & Milestones
          </p>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight">
            Work Milestones & Achievements
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mt-4 rounded-full" />
        </div>

        {/* Master Double-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Timeline (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center gap-2 mb-2">
              <Briefcase className="w-5 h-5 text-blue-500" />
              <h3 className="font-bold text-lg tracking-tight font-sans">
                Professional Engagements
              </h3>
            </div>

            {/* Timeline wrapper */}
            <div className="relative border-l-2 pl-6 sm:pl-8 border-slate-500/10 space-y-12">
              {EXPERIENCES.map((exp, idx) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative group"
                >
                  {/* Floating Date Marker Pin */}
                  <span className={`absolute -left-[35px] sm:-left-[43px] top-1 w-4 h-4 rounded-full border-2 transition-all duration-300 group-hover:scale-125
                    bg-slate-950 border-blue-500`} 
                  />

                  {/* Header metadata */}
                  <div className="space-y-1.5 mb-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <h4 className="font-bold text-base sm:text-lg tracking-tight font-sans">
                        {exp.role}
                      </h4>
                      <span className={`text-[10px] uppercase font-mono font-bold px-2 py-0.5 rounded-full border
                        ${exp.type === 'Apprenticeship' 
                          ? 'bg-blue-950/40 text-blue-400 border-blue-500/20' 
                          : exp.type === 'Internship'
                            ? 'bg-purple-950/40 text-purple-400 border-purple-500/20'
                            : 'bg-cyan-950/40 text-cyan-400 border-cyan-500/25'}`}
                      >
                        {exp.type}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs font-mono text-slate-400">
                      <div className="flex items-center gap-1.5">
                        <span className="font-semibold text-blue-400">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-slate-500" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-slate-500" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description bullet lists */}
                  <ul className="space-y-2.5 mb-4 pl-1">
                    {exp.description.map((bullet, bIdx) => (
                      <li 
                        key={bIdx} 
                        className={`text-xs sm:text-sm leading-relaxed list-disc list-outside ml-4
                          ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  {/* Skills Tagged for this experience */}
                  <div className="flex flex-wrap gap-1.5 pl-1">
                    {exp.skillsLearned.map((skill) => (
                      <span
                        key={skill}
                        className={`text-[9px] font-mono font-medium px-2 py-0.5 rounded
                          ${theme === 'dark' 
                            ? 'bg-slate-900 text-slate-400 border border-slate-800' 
                            : 'bg-slate-50 text-slate-600 border border-slate-200'}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Achievements & Events (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center gap-2 mb-2">
              <Award className="w-5 h-5 text-purple-400" />
              <h3 className="font-bold text-lg tracking-tight font-sans">
                Honors & Community Impact
              </h3>
            </div>

            {/* Achievements vertical list */}
            <div className="space-y-6">
              {ACHIEVEMENTS.map((ach, idx) => (
                <motion.div
                  key={ach.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`p-5 rounded-2xl border transition-all duration-300 group hover:shadow-lg
                    ${theme === 'dark' 
                      ? 'bg-slate-900/30 border-slate-800/80 hover:border-slate-700/80' 
                      : 'bg-white border-slate-200 hover:border-slate-350 shadow-sm'}`}
                >
                  <div className="flex gap-4 items-start">
                    {/* Category Icon */}
                    <div className="p-2.5 rounded-lg bg-slate-500/5 text-purple-400 shrink-0">
                      {ach.category === 'Hackathon' ? (
                        <Star className="w-5 h-5" />
                      ) : ach.category === 'Community' ? (
                        <Award className="w-5 h-5" />
                      ) : (
                        <BookOpen className="w-5 h-5" />
                      )}
                    </div>

                    <div className="space-y-2 flex-grow">
                      {/* Badge and date row */}
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-semibold">
                          {ach.category}
                        </span>
                        <span className="text-[10px] font-mono text-slate-500 text-right">
                          {ach.date}
                        </span>
                      </div>

                      {/* Title information */}
                      <h4 className="font-bold text-sm tracking-tight leading-snug group-hover:text-blue-400 transition-colors">
                        {ach.title}
                      </h4>

                      <p className={`text-xs leading-relaxed
                        ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                        {ach.description}
                      </p>

                      {/* Numerical representation / Proof points */}
                      {ach.metric && (
                        <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-mono border font-semibold
                          ${theme === 'dark'
                            ? 'bg-emerald-950/20 text-emerald-400 border-emerald-500/20'
                            : 'bg-emerald-50 text-emerald-700 border-emerald-200'}`}
                        >
                          🏅 Proof: {ach.metric}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Fun Fact / Additional Value Card */}
            <div className={`p-5 rounded-2xl border text-xs leading-relaxed space-y-2
              ${theme === 'dark'
                ? 'bg-blue-950/10 border-blue-500/10 text-slate-300'
                : 'bg-blue-55/40 border-blue-200 text-slate-700'}`}
            >
              <h5 className="font-bold font-mono text-[10px] tracking-widest uppercase text-blue-500">
                🚀 MS Ambassadors Outreach
              </h5>
              <p>
                Leading tech outreach as a Microsoft Student Ambassador has honed my communication, community alignment, and product presentation skills. It gives me a unique advantage in translating raw data parameters into persuasive product stories.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
