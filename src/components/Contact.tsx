/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Linkedin, Github, Send, MessageSquare, Check, User, Building, AlertCircle } from 'lucide-react';
import { PROFILE } from '../data';

interface ContactProps {
  theme: 'dark' | 'light';
}

export default function Contact({ theme }: ContactProps) {
  const [formState, setFormState] = useState({
    name: '',
    company: '',
    email: '',
    purpose: 'full-time',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    if (error) setError('');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic verification
    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setError('Please fill in all requested fields (Name, Email, Message).');
      return;
    }

    setLoading(true);

    // Create and trigger mailto link to receive real emails from recruiters
    const subject = encodeURIComponent(`[Poojitha Portfolio] Role Inquiry from ${formState.name} (${formState.company || 'Individual'})`);
    const body = encodeURIComponent(
      `Hello Poojitha,\n\n` +
      `My name is: ${formState.name}\n` +
      `Company/Organization: ${formState.company || 'N/A'}\n` +
      `Intent/Inquiry Type: ${formState.purpose}\n` +
      `Contact Email: ${formState.email}\n\n` +
      `Message Details:\n` +
      `-------------------------------------------\n` +
      `${formState.message}\n` +
      `-------------------------------------------\n\n` +
      `Best regards,\n` +
      `${formState.name}`
    );
    const mailtoUrl = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;

    // Execute sending via email client link
    window.location.href = mailtoUrl;

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      // Reset form
      setFormState({
        name: '',
        company: '',
        email: '',
        purpose: 'full-time',
        message: ''
      });
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl z-10">
        
        {/* Section Header */}
        <div className="mb-14 text-center sm:text-left">
          <p className={`font-mono text-xs uppercase tracking-widest font-semibold mb-2
            ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}
          >
            07 / Connection Hub
          </p>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight">
            Initiate Contact
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mt-4 mx-auto sm:mx-0 rounded-full" />
        </div>

        {/* Form and Channels Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Coordinates & Social Channels (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h3 className="font-sans font-bold text-xl tracking-tight leading-snug">
                Let's discuss how data intelligence can solve your business questions.
              </h3>
              <p className={`text-sm leading-relaxed
                ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}
              >
                I am actively seeking **Data Analyst** and **AI/ML Associate** roles. If you have an open requirement, want to view my analytical systems, or just want to collaborate, feel free to reach out directly through any of these avenues:
              </p>
            </div>

            {/* Inboxes details cards */}
            <div className="space-y-4">
              <a
                href={`mailto:${PROFILE.email}`}
                className={`p-4 rounded-xl border flex gap-4 items-start transition-all duration-200 group
                  ${theme === 'dark' 
                    ? 'bg-slate-900/30 border-slate-800/80 hover:bg-slate-800/30' 
                    : 'bg-white border-slate-200 hover:bg-slate-50'}`}
              >
                <div className="p-2.5 bg-blue-500/10 text-blue-400 rounded-lg shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold">Direct Email Address</h4>
                  <p className="text-sm font-bold tracking-tight mt-0.5 break-all">{PROFILE.email}</p>
                </div>
              </a>

              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                className={`p-4 rounded-xl border flex gap-4 items-start transition-all duration-200 group
                  ${theme === 'dark' 
                    ? 'bg-slate-900/30 border-slate-800/80 hover:bg-slate-800/30' 
                    : 'bg-white border-slate-200 hover:bg-slate-50'}`}
              >
                <div className="p-2.5 bg-purple-500/10 text-purple-400 rounded-lg shrink-0">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold">LinkedIn Profile</h4>
                  <p className="text-sm font-bold tracking-tight mt-0.5 break-all">linkedin.com/in/poojitha-thodupunoori28</p>
                </div>
              </a>

              <a
                href={PROFILE.github}
                target="_blank"
                rel="noreferrer"
                className={`p-4 rounded-xl border flex gap-4 items-start transition-all duration-200 group
                  ${theme === 'dark' 
                    ? 'bg-slate-900/30 border-slate-800/80 hover:bg-slate-800/30' 
                    : 'bg-white border-slate-200 hover:bg-slate-50'}`}
              >
                <div className="p-2.5 bg-cyan-500/10 text-cyan-400 rounded-lg shrink-0">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold">Github Repositories</h4>
                  <p className="text-sm font-bold tracking-tight mt-0.5 break-all">github.com/Poojitha-321</p>
                </div>
              </a>
            </div>

            {/* Professional promise card */}
            <div className={`p-4 rounded-xl border text-xs leading-relaxed font-sans
              ${theme === 'dark' 
                ? 'bg-emerald-950/20 border-emerald-500/15 text-emerald-300' 
                : 'bg-emerald-50 border-emerald-250 text-emerald-800'}`}
            >
              🔒 **Guaranteed Response:** Direct inquiries are routed securely and typically checked twice daily. I will return your message within 1 business day.
            </div>
          </div>

          {/* Right Column: Interaction Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className={`p-6 sm:p-8 rounded-3xl border h-full justify-between flex flex-col relative overflow-hidden
              ${theme === 'dark' 
                ? 'bg-slate-900/40 border-slate-800/80 shadow-black/10 shadow-2xl' 
                : 'bg-white border-slate-250 shadow-slate-100 shadow-xl'}`}
            >
              
              {/* Submitted success overlay indicator */}
              {submitted ? (
                <motion.div 
                  className="absolute inset-0 bg-slate-950/95 backdrop-blur-md flex flex-col items-center justify-center p-8 text-center z-20 space-y-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full">
                    <Check className="w-10 h-10 animate-bounce" />
                  </div>
                  <h3 className="font-bold text-xl tracking-tight text-white">Inquiry Received Successfully!</h3>
                  <p className="text-sm text-slate-450 max-w-sm leading-relaxed">
                    Thank you for reaching out! Your message was queued. I will review your recruiter invitation and respond shortly.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs font-mono rounded-xl cursor-pointer shadow-lg"
                  >
                    Send Another Inquiry
                  </button>
                </motion.div>
              ) : null}

              {/* Form implementation */}
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <h3 className="font-sans font-bold text-lg tracking-tight mb-1">Send a Message</h3>
                  <p className="text-xs text-slate-400 font-mono">Fill in the parameters below.</p>
                </div>

                {/* Name & Company Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-400 font-bold block">Your Name *</label>
                    <div className="relative">
                      <User className="absolute left-3 top-3.5 w-4 h-4 text-slate-500" />
                      <input 
                        type="text"
                        name="name"
                        value={formState.name}
                        onChange={handleInputChange}
                        required
                        placeholder="John Doe"
                        className={`w-full pl-10 pr-4 py-3 rounded-xl text-sm border focus:outline-none focus:ring-1
                          ${theme === 'dark' 
                            ? 'bg-slate-950 border-slate-800 text-slate-100 focus:ring-blue-500' 
                            : 'bg-slate-50 border-slate-200 text-slate-900 focus:ring-blue-600'}`}
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-400 font-bold block">Company Name</label>
                    <div className="relative">
                      <Building className="absolute left-3 top-3.5 w-4 h-4 text-slate-500" />
                      <input 
                        type="text"
                        name="company"
                        value={formState.company}
                        onChange={handleInputChange}
                        placeholder="Acme Analytics"
                        className={`w-full pl-10 pr-4 py-3 rounded-xl text-sm border focus:outline-none focus:ring-1
                          ${theme === 'dark' 
                            ? 'bg-slate-950 border-slate-800 text-slate-100 focus:ring-blue-500' 
                            : 'bg-slate-50 border-slate-200 text-slate-900 focus:ring-blue-600'}`}
                      />
                    </div>
                  </div>
                </div>

                {/* Email Address */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-400 font-bold block">Email Address *</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3.5 w-4 h-4 text-slate-500" />
                    <input 
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleInputChange}
                      required
                      placeholder="john@example.com"
                      className={`w-full pl-10 pr-4 py-3 rounded-xl text-sm border focus:outline-none focus:ring-1
                        ${theme === 'dark' 
                          ? 'bg-slate-950 border-slate-800 text-slate-100 focus:ring-blue-500' 
                          : 'bg-slate-50 border-slate-200 text-slate-900 focus:ring-blue-600'}`}
                    />
                  </div>
                </div>

                {/* Purpose Selection tab list */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-400 font-bold block">Inquiry Type / Intent</label>
                  <select 
                    name="purpose"
                    value={formState.purpose}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl text-sm border focus:outline-none focus:ring-1 font-mono tracking-tight
                      ${theme === 'dark' 
                        ? 'bg-slate-950 border-slate-800 text-slate-250 focus:ring-blue-500' 
                        : 'bg-slate-50 border-slate-200 text-slate-700 focus:ring-blue-600'}`}
                  >
                    <option value="full-time">📊 Hire Full-Time (Data/ML Role)</option>
                    <option value="contract">💼 Contract Work / consulting</option>
                    <option value="collaboration">👥 Team Hackathons / Networking</option>
                    <option value="other">💬 General business or informational</option>
                  </select>
                </div>

                {/* Text inquiry detail */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-400 font-bold block">Message Detail *</label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3.5 w-4 h-4 text-slate-500" />
                    <textarea 
                      name="message"
                      value={formState.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      placeholder="Describe your requirement, timelines, and technical requirements..."
                      className={`w-full pl-10 pr-4 py-3 rounded-xl text-sm border focus:outline-none focus:ring-1 resize-none
                        ${theme === 'dark' 
                          ? 'bg-slate-950 border-slate-800 text-slate-100 focus:ring-blue-500' 
                          : 'bg-slate-50 border-slate-200 text-slate-900 focus:ring-blue-600'}`}
                    />
                  </div>
                </div>

                {/* Error Banner */}
                {error && (
                  <div className="p-3 bg-red-950/20 border border-red-500/15 text-red-405 text-xs rounded-lg flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                {/* Submission button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full h-12 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 text-white font-medium text-sm transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <span className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Dispatch Conversation Link
                    </>
                  )}
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
