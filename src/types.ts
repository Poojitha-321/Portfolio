/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  problemStatement: string;
  technologies: string[];
  keyInsights: string[];
  githubUrl?: string;
  liveUrl?: string;
  image: string;
  category: 'software-dev' | 'data-science' | 'machine-learning' | 'ai';
  businessImpact?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  verificationUrl: string;
  skillsVerified: string[];
  badgeColor: string; // e.g. blue, purple, cyan, violet
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: 'Internship' | 'Apprenticeship' | 'Freelance' | 'Project-Lead';
  description: string[];
  skillsLearned: string[];
}

export interface Achievement {
  id: string;
  title: string;
  event: string;
  category: 'Hackathon' | 'Certification' | 'Workshop' | 'Community';
  date: string;
  description: string;
  metric?: string; // e.g. "Top 5%", "Winner"
}

export interface Skill {
  name: string;
  category: 'software-dev' | 'data-science' | 'machine-learning' | 'ai';
  level: number; // Percentage
  description: string;
  useCase: string; // Recruiter context on what she uses it for
}

export type ThemeId = 'slate' | 'cyberpunk' | 'luxury' | 'forest' | 'terminal';
export type LayoutId = 'scrolling' | 'bento' | 'brief' | 'shell';
export type AccentColor = 'blue' | 'purple' | 'violet' | 'emerald' | 'amber' | 'rose' | 'phosphor';

export interface CustomStyleConfig {
  theme: ThemeId;
  layout: LayoutId;
  accent: AccentColor;
  mode: 'dark' | 'light';
}

