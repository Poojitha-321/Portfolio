import { CustomStyleConfig } from './types';

export function getThemeClasses(config: CustomStyleConfig) {
  const isDark = config.mode === 'dark';
  const theme = config.theme;
  const accent = config.accent;

  // 1. Base Class Resolution
  let bg = '';
  let textPrimary = '';
  let textSecondary = '';
  let cardBg = '';
  let border = '';
  let fontClass = 'font-sans';
  let badgeClass = '';

  // Theme overrides
  switch (theme) {
    case 'cyberpunk':
      bg = 'bg-[#090514] text-[#f1eaff]';
      cardBg = 'bg-[#150d2c]/85 border-[#ff007f]/30 shadow-[0_4px_20px_rgba(255,0,127,0.08)]';
      textPrimary = 'text-[#f5f1ff]';
      textSecondary = 'text-purple-300/70';
      border = 'border-[#ff007f]/20';
      fontClass = 'font-mono';
      badgeClass = 'bg-pink-950/45 text-pink-400 border-pink-500/30';
      break;

    case 'luxury':
      // Rich champagne gold and obsidian / warm chalk white
      bg = isDark ? 'bg-[#0E0D0C] text-[#F3EFE9]' : 'bg-[#FCFBFA] text-[#1E1B18]';
      cardBg = isDark 
        ? 'bg-[#181614] border-amber-600/30 shadow-[0_4px_30px_rgba(217,119,6,0.05)]' 
        : 'bg-[#F6F4F0]/90 border-amber-900/10 shadow-sm';
      textPrimary = isDark ? 'text-amber-50/95 font-serif' : 'text-stone-900 font-serif';
      textSecondary = isDark ? 'text-stone-300' : 'text-stone-600';
      border = isDark ? 'border-amber-900/40' : 'border-stone-200';
      fontClass = 'font-serif';
      badgeClass = isDark ? 'bg-amber-950/60 text-amber-200 border-amber-600/35' : 'bg-amber-50 text-amber-900 border-amber-200';
      break;

    case 'forest':
      // Serene deep moss and soft cream slate
      bg = isDark ? 'bg-[#080d0b] text-[#ECF3ED]' : 'bg-[#F5F7F5] text-[#14231E]';
      cardBg = isDark 
        ? 'bg-[#101915] border-emerald-500/20 shadow-md' 
        : 'bg-white border-emerald-950/10 shadow-sm';
      textPrimary = isDark ? 'text-[#EDF5F0]' : 'text-emerald-950';
      textSecondary = isDark ? 'text-emerald-200' : 'text-emerald-900/80';
      border = isDark ? 'border-emerald-900/50' : 'border-emerald-150';
      fontClass = 'font-sans';
      badgeClass = isDark ? 'bg-emerald-950/60 text-emerald-300 border-emerald-500/30' : 'bg-emerald-50 text-emerald-800 border-emerald-200';
      break;

    case 'terminal':
      // CRT computer terminal
      bg = 'bg-black text-[#22c55e]';
      cardBg = 'bg-black border border-green-500/30 shadow-[inset_0_1px_10px_rgba(34,197,94,0.05)]';
      textPrimary = 'text-[#22c55e] font-mono';
      textSecondary = 'text-green-600 font-mono';
      border = 'border-green-500/20';
      fontClass = 'font-mono';
      badgeClass = 'bg-black text-[#22c55e] border-green-500/40';
      break;

    case 'slate':
    default:
      // High-Contrast Midnight Sapphire Blue
      bg = isDark ? 'bg-[#030712] text-slate-100' : 'bg-[#FAFAFA] text-[#0F172A]';
      cardBg = isDark 
        ? 'bg-[#0B1528] border-slate-700/50 shadow-[0_4px_30px_rgba(30,58,138,0.25)]' 
        : 'bg-white border-slate-200/80 shadow-md';
      textPrimary = isDark ? 'text-white' : 'text-slate-900';
      textSecondary = isDark ? 'text-slate-200' : 'text-slate-600';
      border = isDark ? 'border-slate-800' : 'border-slate-200';
      fontClass = 'font-sans';
      badgeClass = isDark ? 'bg-blue-950/60 text-blue-300 border-blue-500/30' : 'bg-blue-50 text-blue-900 border-blue-200';
      break;
  }

  // 2. Accent Color Resolve (text colors, hover, borders)
  let accentText = '';
  let accentBg = '';
  let accentGradient = '';
  let accentHover = '';

  const actualAccent = theme === 'terminal' ? 'phosphor' : theme === 'cyberpunk' ? 'violet' : accent;

  switch (actualAccent) {
    case 'purple':
      accentText = 'text-purple-500';
      accentBg = 'bg-purple-600';
      accentGradient = 'from-purple-600 to-indigo-600';
      accentHover = 'hover:text-purple-400';
      break;
    case 'violet':
      accentText = 'text-[#ff007f]';
      accentBg = 'bg-[#ff007f]';
      accentGradient = 'from-[#ff007f] via-purple-600 to-cyan-400';
      accentHover = 'hover:text-pink-400';
      break;
    case 'emerald':
      accentText = 'text-emerald-500';
      accentBg = 'bg-emerald-600';
      accentGradient = 'from-emerald-600 to-teal-500';
      accentHover = 'hover:text-emerald-400';
      break;
    case 'amber':
      accentText = 'text-amber-500';
      accentBg = 'bg-amber-600';
      accentGradient = 'from-amber-500 via-yellow-500 to-amber-600';
      accentHover = 'hover:text-amber-400';
      break;
    case 'rose':
      accentText = 'text-rose-500';
      accentBg = 'bg-rose-600';
      accentGradient = 'from-rose-500 to-pink-600';
      accentHover = 'hover:text-rose-400';
      break;
    case 'phosphor':
      accentText = 'text-[#22c55e]';
      accentBg = 'bg-[#166534]';
      accentGradient = 'from-[#15803d] to-[#166534]';
      accentHover = 'hover:text-green-400';
      break;
    case 'blue':
    default:
      accentText = 'text-blue-500';
      accentBg = 'bg-blue-600';
      accentGradient = 'from-blue-600 to-purple-600';
      accentHover = 'hover:text-blue-400';
      break;
  }

  return {
    bg,
    textPrimary,
    textSecondary,
    cardBg,
    border,
    fontClass,
    badgeClass,
    accentText,
    accentBg,
    accentGradient,
    accentHover
  };
}
