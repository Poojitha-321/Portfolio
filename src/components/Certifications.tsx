/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Award, ExternalLink, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { CERTIFICATIONS } from '../data';

interface CertificationsProps {
  theme: 'dark' | 'light';
}

export default function Certifications({ theme }: CertificationsProps) {
  const getBadgeColorClasses = (color: string) => {
    switch (color) {
      case 'cyan':
        return 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20';
      case 'blue':
        return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
      case 'purple':
        return 'bg-purple-500/10 text-purple-400 border-purple-500/20';
      case 'indigo':
        return 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20';
      default:
        return 'bg-slate-500/10 text-slate-400 border-slate-500/20';
    }
  };

  return (
    <section id="certifications" className="py-20 relative overflow-hidden bg-slate-500/[0.01]">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <p className={`font-mono text-xs uppercase tracking-widest font-semibold mb-2
              ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}
            >
              04 / Trust & Validation
            </p>
            <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight">
              Professional Certifications
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mt-4 rounded-full" />
          </div>

          <div className="text-xs font-mono max-w-xs text-slate-400 leading-relaxed">
            🎓 All credentials are self-hosted via Microsoft Learn / Google Cloud profiles to allow rapid recruitment checks.
          </div>
        </div>

        {/* Certifications Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CERTIFICATIONS.map((cert) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className={`p-6 rounded-2xl border flex flex-col justify-between transition-all duration-300 relative overflow-hidden group
                ${theme === 'dark' 
                  ? 'bg-slate-900/40 border-slate-800 hover:border-slate-700/80' 
                  : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'}`}
            >
              {/* Top Accent glow mimicking credential issuer */}
              <div className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r
                ${cert.badgeColor === 'cyan' ? 'from-cyan-500/60 to-blue-500/60' : ''}
                ${cert.badgeColor === 'blue' ? 'from-blue-500/60 to-indigo-500/60' : ''}
                ${cert.badgeColor === 'purple' ? 'from-purple-500/60 to-pink-500/60' : ''}
                ${cert.badgeColor === 'indigo' ? 'from-indigo-500/60 to-purple-500/60' : ''}`} 
              />

              <div className="space-y-5">
                {/* Header Information */}
                <div className="flex gap-4 items-start">
                  <div className={`p-3 rounded-xl border flex items-center justify-center shrink-0
                    ${getBadgeColorClasses(cert.badgeColor)}`}
                  >
                    <Award className="w-5 h-5 animate-pulse" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-semibold">
                      {cert.issuer} Certification Suite
                    </span>
                    <h3 className="font-bold text-sm sm:text-base leading-snug tracking-tight font-sans">
                      {cert.title}
                    </h3>
                  </div>
                </div>

                {/* Verified Competencies */}
                <div className="space-y-2">
                  <span className={`text-[10px] font-mono tracking-wider uppercase block
                    ${theme === 'dark' ? 'text-slate-500' : 'text-slate-400'}`}>
                    Core Validated Competencies
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skillsVerified.map((skill) => (
                      <span
                        key={skill}
                        className={`inline-flex items-center gap-1 text-[10px] font-sans font-medium px-2 py-0.5 rounded
                          ${theme === 'dark' 
                            ? 'bg-slate-950/60 text-slate-300 border-none' 
                            : 'bg-slate-50 text-slate-700 border border-slate-200'}`}
                      >
                        <CheckCircle2 className="w-2.5 h-2.5 text-emerald-500" />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom detail action links and credential IDs */}
              <div className="mt-6 pt-4 border-t border-slate-1000/10 flex flex-wrap items-center justify-between gap-3 text-xs font-mono select-none">
                <div className="text-slate-400 flex flex-col sm:flex-row sm:gap-2">
                  <span className="font-bold">ID:</span>
                  <span className="font-medium font-sans text-slate-500 text-[11px]">{cert.credentialId || 'N/A'}</span>
                </div>

                <a
                  href={cert.verificationUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-mono font-medium border transition-all duration-200
                    ${theme === 'dark'
                      ? 'bg-slate-950 hover:bg-slate-900 border-slate-800 text-blue-400 hover:text-blue-300'
                      : 'bg-slate-50 hover:bg-slate-100 border-slate-250 text-blue-700 hover:text-blue-800'}`}
                >
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Verify Link
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
