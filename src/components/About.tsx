/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Target, Award, ShieldCheck, MapPin, Search } from 'lucide-react';
import { PROFILE } from '../data';

interface AboutProps {
  theme: 'dark' | 'light';
}

export default function About({ theme }: AboutProps) {
  const highlights = [
    {
      icon: <Target className="w-5 h-5 text-blue-500" />,
      title: "Targeted Intelligence",
      text: "Specializing in operational risk mitigation through proactive data anomalies tracking."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-purple-500" />,
      title: "Certified Foundation",
      text: "Certified in Microsoft Azure AI Fundamentals (AI-900), validating deep practical machine intelligence concepts."
    },
    {
      icon: <Award className="w-5 h-5 text-cyan-500" />,
      title: "Business Focused",
      text: "Dedicated to translating abstract calculations into ROI metrics easily understood by stakeholders."
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Section Header */}
        <div className="mb-14">
          <p className={`font-mono text-xs uppercase tracking-widest font-semibold mb-2
            ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}
          >
            01 / Professional Summary
          </p>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight">
            Who is Poojitha Thodupunoori?
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mt-4 rounded-full" />
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Detailed narrative block (7 columns) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className={`text-xl sm:text-2xl font-sans font-semibold tracking-tight leading-snug
              ${theme === 'dark' ? 'text-slate-100' : 'text-slate-800'}`}
            >
              Building automated data intelligence systems that optimize operation speeds and protect profit margins.
            </h3>

            <p className={`text-base leading-relaxed
              ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}
            >
              {PROFILE.detailedBio}
            </p>

            <p className={`text-base leading-relaxed
              ${theme === 'dark' ? 'text-slate-200' : 'text-slate-700'}`}
            >
              I am focused on designing modular applications, developing clean databases (SQL & MongoDB), and training neural intelligence models. Whether it's refactoring multi-table database queries, configuration of Socket.IO realtime data layers, or implementing deep learning architectures like LSTMs and Convolutional Neural Networks, I love bridging high-scale code architecture with deep neural intelligence patterns.
            </p>

            {/* Career Objective in high-fidelity callout */}
            <div className={`p-6 rounded-2xl border transition-all duration-300
              ${theme === 'dark' 
                ? 'bg-gradient-to-br from-slate-900 to-slate-950 border-slate-800/80 shadow-inner' 
                : 'bg-white border-slate-150 shadow-sm'}`}
            >
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl text-blue-500">
                  <Target className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-sm tracking-wide uppercase font-mono text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                    My Strategic Career Objective
                  </h4>
                  <p className={`text-sm leading-relaxed
                    ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}
                  >
                    To secure a challenging role as a **Software Engineer** or **Machine Learning Engineer** in an organization where I can leverage my Azure AI Fundamentals credentials, complex SQL querying expertise, and scalable React/Node.js full-stack systems engineering competencies.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick info panel & highlights (5 columns) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Metadata Card */}
            <div className={`p-6 rounded-2xl border
              ${theme === 'dark' 
                ? 'bg-slate-900/40 border-slate-800 text-slate-200' 
                : 'bg-slate-50 border-slate-150 text-slate-800'}`}
            >
              <h4 className={`text-xs font-mono uppercase tracking-widest mb-4 ${theme === 'dark' ? 'text-slate-300 font-bold' : 'text-slate-550'}`}>
                Recruiter Cheat Sheet
              </h4>
              <ul className="space-y-3 font-mono text-xs">
                <li className="flex justify-between border-b border-slate-500/5 pb-2">
                  <span className={`${theme === 'dark' ? 'text-slate-300' : 'text-slate-500'} font-medium`}>Availability:</span>
                  <span className="text-emerald-400 font-bold">Immediate (2 Weeks Notice)</span>
                </li>
                <li className="flex justify-between border-b border-slate-500/5 pb-2">
                  <span className={`${theme === 'dark' ? 'text-slate-300' : 'text-slate-500'} font-medium font-mono`}>Location:</span>
                  <span className="flex items-center gap-1 text-right">
                    <MapPin className="w-3.5 h-3.5 text-blue-500" />
                    {PROFILE.location.split(' / ')[0]}
                  </span>
                </li>
                <li className="flex justify-between border-b border-slate-500/5 pb-2">
                  <span className={`${theme === 'dark' ? 'text-slate-300' : 'text-slate-500'} font-medium`}>Work Authorization:</span>
                  <span className="text-right">India / Global Remote Ready</span>
                </li>
                <li className="flex justify-between">
                  <span className={`${theme === 'dark' ? 'text-slate-300' : 'text-slate-500'} font-medium`}>Primary Focus:</span>
                  <span className="text-right text-purple-400 font-bold">SQL + Power BI + AI Py</span>
                </li>
              </ul>
            </div>

            {/* Aesthetic highlights list */}
            <div className="space-y-4">
              {highlights.map((item, idx) => (
                <motion.div 
                  key={idx}
                  className={`p-4 rounded-xl border flex gap-4 items-start transition-all duration-200
                    ${theme === 'dark' 
                      ? 'bg-slate-900/20 border-slate-800/60 hover:border-slate-700/80' 
                      : 'bg-white border-slate-200 hover:border-slate-300'}`}
                  whileHover={{ x: 5 }}
                >
                  <div className="p-2 bg-slate-500/5 rounded-lg shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h5 className="font-sans font-bold text-sm tracking-tight mb-1">
                      {item.title}
                    </h5>
                    <p className={`text-xs leading-relaxed
                      ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}
                    >
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
