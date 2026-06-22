import { useState, useEffect } from 'react';
import { CustomStyleConfig, ThemeId, LayoutId, AccentColor } from '../types';
import { getThemeClasses } from '../themeUtils';
import { 
  Paintbrush, Sparkles, Terminal, Database, Columns, LayoutGrid, 
  Settings, Check, Moon, Sun, Monitor, RefreshCw, Layers, Briefcase, Eye 
} from 'lucide-react';

interface StyleSelectorProps {
  styleConfig: CustomStyleConfig;
  setStyleConfig: (config: CustomStyleConfig) => void;
}

export default function StyleSelector({ styleConfig, setStyleConfig }: StyleSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const classes = getThemeClasses(styleConfig);

  // Configuration pre-loaded options
  const layouts: { id: LayoutId; name: string; desc: string; icon: any }[] = [
    { id: 'scrolling', name: 'Classic Scroll', desc: 'Standard narrative page structure', icon: <Layers className="w-4 h-4" /> },
    { id: 'bento', name: 'Bento Dashboard', desc: 'Modular responsive interactive bento', icon: <LayoutGrid className="w-4 h-4" /> },
    { id: 'brief', name: 'Recruiter Brief', desc: 'Compact metrics-driven profile brief', icon: <Briefcase className="w-4 h-4" /> },
    { id: 'shell', name: 'Developer CLI', desc: 'Simulated retro terminal emulator', icon: <Terminal className="w-4 h-4" /> },
  ];

  const themes: { id: ThemeId; name: string; bgLabel: string; borderLabel: string }[] = [
    { id: 'slate', name: 'Slate Blue', bgLabel: 'bg-slate-900 border-slate-700', borderLabel: 'border-slate-500' },
    { id: 'cyberpunk', name: 'Cyber Neon', bgLabel: 'bg-[#090514] border-pink-500/40', borderLabel: 'border-pink-500' },
    { id: 'luxury', name: 'Obsidian Gold', bgLabel: 'bg-[#0E0D0C] border-amber-600/30', borderLabel: 'border-amber-500' },
    { id: 'forest', name: 'Zen Sage', bgLabel: 'bg-[#0B100E] border-emerald-500/20', borderLabel: 'border-emerald-500' },
    { id: 'terminal', name: 'Retro Amber', bgLabel: 'bg-black border-green-500/30', borderLabel: 'border-green-500' },
  ];

  const accents: { id: AccentColor; color: string; label: string }[] = [
    { id: 'blue', color: 'bg-blue-500', label: 'Tech Blue' },
    { id: 'purple', color: 'bg-purple-500', label: 'Indigo' },
    { id: 'violet', color: 'bg-[#ff007f]', label: 'Vibrant' },
    { id: 'emerald', color: 'bg-emerald-500', label: 'Zen Green' },
    { id: 'amber', color: 'bg-amber-500', label: 'Bronze' },
    { id: 'rose', color: 'bg-rose-500', label: 'Crimson' },
  ];

  const updateConfig = (key: keyof CustomStyleConfig, value: any) => {
    const newConfig = { ...styleConfig, [key]: value };
    // Auto-align mode for dark terminal or cyberpunk theme
    if (key === 'theme' && (value === 'terminal' || value === 'cyberpunk')) {
      newConfig.mode = 'dark';
    }
    setStyleConfig(newConfig);
    localStorage.setItem('poojitha_portfolio_vibe_config', JSON.stringify(newConfig));
  };

  const handleReset = () => {
    const defaultConfig: CustomStyleConfig = {
      theme: 'slate',
      layout: 'scrolling',
      accent: 'blue',
      mode: 'dark'
    };
    setStyleConfig(defaultConfig);
    localStorage.setItem('poojitha_portfolio_vibe_config', JSON.stringify(defaultConfig));
  };

  return (
    <>
      {/* Floating Studio Trigger Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`flex items-center gap-2 px-4 py-3 rounded-full font-mono text-xs font-bold text-white shadow-xl shadow-blue-900/10 hover:scale-105 active:scale-95 transition-all bg-gradient-to-r cursor-pointer ${classes.accentGradient}`}
          style={{ textShadow: "0 1px 2px rgba(0,0,0,0.2)" }}
        >
          <Paintbrush className="w-4 h-4 animate-spin-slow" />
          CUSTOMIZE PORTFOLIO
        </button>
      </div>

      {/* Slide-out Customizer Drawer Panel */}
      {isOpen && (
        <div className="fixed inset-0 bg-transparent z-45 flex justify-end" onClick={() => setIsOpen(false)}>
          <div 
            onClick={(e) => e.stopPropagation()}
            className={`w-full max-w-sm h-full backdrop-blur-xl border-l p-6 flex flex-col justify-between overflow-y-auto shadow-2xl relative z-50 transition-all duration-300
              ${styleConfig.mode === 'dark' ? 'bg-slate-950/95 border-slate-800 text-slate-100' : 'bg-white/95 border-slate-200 text-slate-900'}`}
          >
            <div className="space-y-6">
              {/* Header */}
              <div className="flex justify-between items-center pb-4 border-b border-slate-500/15">
                <div className="flex items-center gap-2">
                  <Settings className={`w-5 h-5 animate-spin-slow ${classes.accentText}`} />
                  <div>
                    <h3 className="font-sans font-bold text-sm tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                      Portfolio Customizer
                    </h3>
                    <p className="text-[10px] uppercase font-mono tracking-wider opacity-60">Layout & Vibe Controller</p>
                  </div>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-1 px-2 text-xs font-mono border border-slate-500/20 rounded-lg hover:bg-slate-500/5"
                >
                  Close
                </button>
              </div>

              {/* presentation layout list */}
              <div className="space-y-3">
                <span className="block text-[11px] font-mono font-bold uppercase tracking-wider opacity-60 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5" />
                  Select Layout Vibe
                </span>
                
                <div className="grid grid-cols-1 gap-2">
                  {layouts.map((lay) => {
                    const isSelected = styleConfig.layout === lay.id;
                    return (
                      <button
                        key={lay.id}
                        onClick={() => updateConfig('layout', lay.id)}
                        className={`p-3 rounded-xl border text-left flex items-start gap-3 transition-all cursor-pointer group
                          ${isSelected 
                            ? `border-blue-500 bg-blue-500/10 shadow-[0_4px_12px_rgba(59,130,246,0.08)]` 
                            : 'border-slate-500/10 hover:bg-slate-500/5'}`}
                      >
                        <div className={`p-2 rounded-lg border ${isSelected ? 'border-blue-500 bg-blue-500/10' : 'border-slate-500/10 group-hover:border-blue-500/30'}`}>
                          {lay.icon}
                        </div>
                        <div>
                          <span className="block text-xs font-sans font-bold leading-tight flex items-center gap-1">
                            {lay.name}
                            {isSelected && <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500" />}
                          </span>
                          <span className="block text-[10px] opacity-70 mt-0.5 leading-snug">{lay.desc}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Theme Selector Section */}
              <div className="space-y-3">
                <span className="block text-[11px] font-mono font-bold uppercase tracking-wider opacity-60 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Select Theme Presets
                </span>

                <div className="grid grid-cols-2 gap-2">
                  {themes.map((th) => {
                    const isSelected = styleConfig.theme === th.id;
                    return (
                      <button
                        key={th.id}
                        onClick={() => updateConfig('theme', th.id)}
                        className={`p-2.5 rounded-xl border text-left flex flex-col gap-1 transition-all cursor-pointer
                          ${isSelected ? `border-blue-500 bg-blue-500/5` : 'border-slate-500/10 hover:bg-slate-500/5'}`}
                      >
                        <span className="text-[11px] font-semibold leading-none">{th.name}</span>
                        <div className="flex gap-1.5 mt-1 items-center">
                          <div className={`w-4 h-4 rounded-sm border ${th.bgLabel}`} />
                          <span className="text-[9px] opacity-60">Preview</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Accent Color Palettes (Hidden in Terminal) */}
              {styleConfig.theme !== 'terminal' && (
                <div className="space-y-3">
                  <span className="block text-[11px] font-mono font-bold uppercase tracking-wider opacity-60 flex items-center gap-1.5">
                    <Monitor className="w-3.5 h-3.5" />
                    Color Accents
                  </span>

                  <div className="grid grid-cols-6 gap-2">
                    {accents.map((ac) => {
                      const isSelected = styleConfig.accent === ac.id;
                      return (
                        <button
                          key={ac.id}
                          onClick={() => updateConfig('accent', ac.id)}
                          className={`w-full aspect-square rounded-full transition-transform hover:scale-110 flex items-center justify-center relative cursor-pointer ${ac.color}`}
                          title={ac.label}
                        >
                          {isSelected && (
                            <Check className="w-3.5 h-3.5 text-white" style={{ filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.4))" }} />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Light/Dark Toggle (Not applied to Terminal / Cyberpunk) */}
              {styleConfig.theme !== 'terminal' && styleConfig.theme !== 'cyberpunk' && (
                <div className="space-y-3">
                  <span className="block text-[11px] font-mono font-bold uppercase tracking-wider opacity-60">Canvas Mode</span>
                  <div className="grid grid-cols-2 gap-2 border border-slate-500/15 p-1 rounded-xl">
                    <button
                      onClick={() => updateConfig('mode', 'dark')}
                      className={`py-2 rounded-lg text-xs font-mono flex items-center justify-center gap-1 cursor-pointer transition-all
                        ${styleConfig.mode === 'dark' ? 'bg-slate-500/10 font-bold' : 'opacity-60'}`}
                    >
                      <Moon className="w-3.5 h-3.5" /> Dark Mode
                    </button>
                    <button
                      onClick={() => updateConfig('mode', 'light')}
                      className={`py-2 rounded-lg text-xs font-mono flex items-center justify-center gap-1 cursor-pointer transition-all
                        ${styleConfig.mode === 'light' ? 'bg-slate-500/10 font-bold' : 'opacity-60'}`}
                    >
                      <Sun className="w-3.5 h-3.5" /> Light Mode
                    </button>
                  </div>
                </div>
              )}

            </div>

            {/* Footer Control Info */}
            <div className="border-t border-slate-500/15 pt-4 mt-6">
              <button
                onClick={handleReset}
                className="w-full py-2.5 rounded-xl border border-dashed border-slate-500/20 text-xs font-mono hover:bg-slate-500/5 cursor-pointer flex items-center justify-center gap-1.5"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                Reset Workspace Defaults
              </button>
              <span className="block text-center text-[9px] font-mono opacity-50 mt-3">
                Poojitha Portfolio Studio v2.4
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
