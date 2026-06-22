/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, Database, BarChart3, Cloud, BrainCircuit, Sparkles } from 'lucide-react';
import { SKILLS } from '../data';
import { Skill } from '../types';

interface SkillsProps {
  theme: 'dark' | 'light';
}

export default function Skills({ theme }: SkillsProps) {
  const [activeCategory, setActiveCategory] = useState<'all' | 'software-dev' | 'data-science' | 'machine-learning' | 'ai'>('all');

  // Group mappings
  const categories = [
    { id: 'all', name: 'All Fields', icon: <Sparkles className="w-4 h-4" /> },
    { id: 'software-dev', name: 'Software Development', icon: <Terminal className="w-4 h-4" /> },
    { id: 'data-science', name: 'Data Science', icon: <Database className="w-4 h-4" /> },
    { id: 'machine-learning', name: 'Machine Learning', icon: <BarChart3 className="w-4 h-4" /> },
    { id: 'ai', name: 'Artificial Intelligence (AI)', icon: <BrainCircuit className="w-4 h-4" /> },
  ];

  const filteredSkills = activeCategory === 'all' 
    ? SKILLS 
    : SKILLS.filter(s => s.category === activeCategory);

  const getCategoryIcon = (category: string) => {
    switch(category) {
      case 'software-dev': return <Terminal className="w-4 h-4 text-blue-500" />;
      case 'data-science': return <Database className="w-4 h-4 text-cyan-500" />;
      case 'machine-learning': return <BarChart3 className="w-4 h-4 text-purple-500" />;
      case 'ai': return <BrainCircuit className="w-4 h-4 text-indigo-500" />;
      default: return <Database className="w-4 h-4 text-slate-500" />;
    }
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <p className={`font-mono text-xs uppercase tracking-widest font-semibold mb-2
              ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}
            >
              02 / Capabilities
            </p>
            <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight">
              Technical Arsenal & Strengths
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mt-4 rounded-full" />
          </div>

          {/* Quick statement on ATS readability */}
          <div className="text-xs font-mono max-w-sm text-slate-400 leading-relaxed">
            💡 <span className="font-semibold text-slate-300">ATS Optimization:</span> Skills are labeled with official industry nomenclature matching standard automated processing scanners.
          </div>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap gap-2.5 mb-10 border-b pb-4 border-slate-500/10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-medium transition-all duration-200 cursor-pointer border
                ${activeCategory === cat.id 
                  ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-600/10' 
                  : theme === 'dark'
                    ? 'bg-slate-900/40 hover:bg-slate-800 text-slate-300 border-slate-800'
                    : 'bg-white hover:bg-slate-150 text-slate-600 border-slate-200'}`}
            >
              {cat.icon}
              {cat.name}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className={`p-6 rounded-2xl border flex flex-col justify-between transition-all duration-300 group hover:shadow-xl
                  ${theme === 'dark' 
                    ? 'bg-slate-900/60 border-slate-800/80 hover:border-slate-700/80 shadow-black/10' 
                    : 'bg-white border-slate-250 shadow-slate-200/50'}`}
              >
                <div className="space-y-4">
                  {/* Title & Icon Header */}
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 bg-slate-500/5 rounded-xl group-hover:bg-blue-500/10 transition-colors">
                        {getCategoryIcon(skill.category)}
                      </div>
                      <h3 className="font-bold text-sm tracking-tight font-sans">
                        {skill.name}
                      </h3>
                    </div>
                    <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded-md
                      ${theme === 'dark' ? 'bg-slate-800 text-blue-400' : 'bg-blue-50 text-blue-700'}`}
                    >
                      {skill.level}%
                    </span>
                  </div>

                  {/* Level Slider (Animated progress indicator) */}
                  <div className="w-full h-1.5 bg-slate-500/10 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.05 }}
                    />
                  </div>

                  {/* Descriptions */}
                  <p className={`text-xs leading-relaxed
                    ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}
                  >
                    {skill.description}
                  </p>
                </div>

                {/* Recruiter Context Section (Business Use Case) */}
                <div className="mt-5 pt-4 border-t border-slate-500/10">
                  <span className={`text-[10px] font-mono tracking-widest uppercase block mb-1
                    ${theme === 'dark' ? 'text-slate-500' : 'text-slate-400'}`}>
                    Active Business Value
                  </span>
                  <p className={`text-xs italic leading-relaxed
                    ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
                    "{skill.useCase}"
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
