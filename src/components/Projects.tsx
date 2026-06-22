/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, ExternalLink, AlertTriangle, Lightbulb, BarChart2, Filter, Info } from 'lucide-react';
import { PROJECTS } from '../data';
import { Project } from '../types';

interface ProjectsProps {
  theme: 'dark' | 'light';
}

export default function Projects({ theme }: ProjectsProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'software-dev' | 'data-science' | 'machine-learning' | 'ai'>('all');
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const tabs = [
    { id: 'all', name: 'All Endeavors' },
    { id: 'software-dev', name: 'Software Development' },
    { id: 'data-science', name: 'Data Science' },
    { id: 'machine-learning', name: 'Machine Learning' },
    { id: 'ai', name: 'Artificial Intelligence (AI)' },
  ];

  const filteredProjects = activeTab === 'all' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeTab);

  const toggleExpand = (id: string) => {
    if (expandedProject === id) {
      setExpandedProject(null);
    } else {
      setExpandedProject(id);
    }
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <p className={`font-mono text-xs uppercase tracking-widest font-semibold mb-2
              ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}
            >
              03 / Creative Work
            </p>
            <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight">
              Featured Case Studies
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mt-4 rounded-full" />
          </div>

          <div className="text-xs font-mono text-slate-400 max-w-xs leading-relaxed">
            🚀 Click cards to expand **Detailed Business Insights** and deep-dive technical summaries.
          </div>
        </div>

        {/* Categories Selector */}
        <div className="flex flex-wrap gap-2.5 mb-10 pb-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 cursor-pointer border
                ${activeTab === tab.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white border-transparent shadow-lg shadow-purple-900/10'
                  : theme === 'dark'
                    ? 'bg-slate-900/40 hover:bg-slate-800 text-slate-300 border-slate-800'
                    : 'bg-white hover:bg-slate-100 text-slate-600 border-slate-200'}`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className={`flex flex-col rounded-3xl border overflow-hidden transition-all duration-300 group
                  ${expandedProject === project.id ? 'ring-2 ring-blue-500/50 scale-[1.01]' : ''}
                  ${theme === 'dark' 
                    ? 'bg-slate-900/45 border-slate-800/80 hover:border-slate-700/80 shadow-black/20' 
                    : 'bg-white border-slate-200 hover:border-slate-300 shadow-slate-100 shadow-lg'}`}
              >
                
                {/* Visual Image Header */}
                <div className="relative h-48 overflow-hidden bg-slate-950">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent z-10" />
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Category Pill */}
                  <span className={`absolute top-4 left-4 z-20 text-[10px] uppercase tracking-widest font-mono px-2.5 py-1 rounded-full border
                    ${project.category === 'software-dev' 
                      ? 'bg-blue-950/75 text-blue-400 border-blue-500/20' 
                      : project.category === 'data-science'
                        ? 'bg-cyan-950/75 text-cyan-400 border-cyan-500/20'
                        : project.category === 'machine-learning'
                          ? 'bg-purple-950/75 text-purple-400 border-purple-500/20'
                          : 'bg-indigo-950/75 text-indigo-400 border-indigo-500/20'}`}
                  >
                    {project.category === 'software-dev' 
                      ? 'Software Dev' 
                      : project.category === 'data-science' 
                        ? 'Data Science' 
                        : project.category === 'machine-learning' 
                          ? 'Machine Learning' 
                          : 'Artificial Intelligence (AI)'}
                  </span>
                </div>

                {/* Card Content Summary */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                  
                  {/* Title & Desc */}
                  <div className="space-y-2">
                    <h3 className="font-bold text-lg sm:text-xl font-sans tracking-tight group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className={`text-xs sm:text-sm leading-relaxed
                      ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}
                    >
                      {project.description}
                    </p>
                  </div>

                  {/* Problem Statement block */}
                  <div className={`p-4 rounded-xl border flex gap-3 items-start
                    ${theme === 'dark' 
                      ? 'bg-amber-950/10 border-amber-900/20 text-amber-300' 
                      : 'bg-amber-50/60 border-amber-200 text-amber-900'}`}
                  >
                    <AlertTriangle className="w-4 h-4 mt-0.5 shrink-0 text-amber-500" />
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono tracking-wider uppercase font-extrabold opacity-80">
                        Problem Statement
                      </span>
                      <p className="text-xs leading-relaxed">
                        {project.problemStatement}
                      </p>
                    </div>
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.technologies.map(tech => (
                      <span 
                        key={tech} 
                        className={`text-[10px] font-mono px-2.5 py-1 rounded-md border
                          ${theme === 'dark' 
                            ? 'bg-slate-950/50 border-slate-800 text-slate-300' 
                            : 'bg-slate-100 border-slate-200 text-slate-700'}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Expanded Insights Section */}
                  <AnimatePresence>
                    {expandedProject === project.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden space-y-4 pt-4 border-t border-slate-500/10"
                      >
                        {/* Dynamic Business Impact */}
                        {project.businessImpact && (
                          <div className={`p-4 rounded-xl border flex gap-3 items-start
                            ${theme === 'dark' 
                              ? 'bg-emerald-950/10 border-emerald-900/20 text-emerald-300' 
                              : 'bg-emerald-50/60 border-emerald-200 text-emerald-900'}`}
                          >
                            <BarChart2 className="w-4 h-4 mt-0.5 shrink-0 text-emerald-500" />
                            <div className="space-y-0.5">
                              <span className="text-[10px] font-mono tracking-wider uppercase font-extrabold opacity-80">
                                Recruiter Focus: Business Impact
                              </span>
                              <p className="text-xs leading-relaxed font-sans font-medium">
                                {project.businessImpact}
                              </p>
                            </div>
                          </div>
                        )}

                        {/* Bulleted Insights */}
                        <div className="space-y-2">
                          <span className={`text-[10px] font-mono tracking-wider uppercase block
                            ${theme === 'dark' ? 'text-slate-500' : 'text-slate-400'}`}>
                            Analytical Discoveries
                          </span>
                          <ul className="space-y-2">
                            {project.keyInsights.map((insight, idx) => (
                              <li key={idx} className="flex gap-2 items-start text-xs leading-relaxed">
                                <Lightbulb className="w-3.5 h-3.5 text-yellow-500 shrink-0 mt-0.5" />
                                <span className={theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}>
                                  {insight}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Bottom Controls / External Actions */}
                  <div className="flex items-center justify-between border-t border-slate-550/10 pt-4 text-xs font-mono select-none">
                    <button
                      onClick={() => toggleExpand(project.id)}
                      className={`inline-flex items-center gap-1.5 transition-colors cursor-pointer font-bold
                        ${expandedProject === project.id 
                          ? 'text-blue-400' 
                          : theme === 'dark' ? 'text-slate-400 hover:text-slate-300' : 'text-slate-600 hover:text-slate-800'}`}
                    >
                      <Info className="w-3.5 h-3.5" />
                      {expandedProject === project.id ? 'Hide Details' : 'Show Key Insights'}
                    </button>

                    <div className="flex gap-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className={`p-2 rounded-lg border transition-colors flex items-center justify-center
                          ${theme === 'dark' 
                            ? 'bg-slate-950/40 border-slate-800 hover:text-blue-400 text-slate-400' 
                            : 'bg-slate-50 border-slate-200 hover:text-blue-600 text-slate-600'}`}
                        title="View Code Repository"
                      >
                        <Github className="w-3.5 h-3.5" />
                      </a>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className={`p-2 rounded-lg border transition-colors flex items-center justify-center
                          ${theme === 'dark' 
                            ? 'bg-slate-950/40 border-slate-800 hover:text-blue-400 text-slate-400' 
                            : 'bg-slate-50 border-slate-200 hover:text-blue-600 text-slate-600'}`}
                        title="Open Interactive Demo/Report"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
