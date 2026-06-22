import React, { useState, useEffect, useRef } from 'react';
import { PROFILE, SKILLS, PROJECTS } from '../data';
import { CustomStyleConfig } from '../types';
import { Terminal } from 'lucide-react';

interface TerminalShellProps {
  styleConfig: CustomStyleConfig;
  setStyleConfig: (config: CustomStyleConfig) => void;
}

export default function TerminalShell({ styleConfig, setStyleConfig }: TerminalShellProps) {
  const [history, setHistory] = useState<string[]>([
    "POOJITHA PORTFOLIO CORE ENVIRONMENT v2.4",
    "Initializing neural frameworks ... status Green.",
    "Relational tables indices ... active.",
    "Type 'help' to see a list of terminal operations or try 'matrix'.",
    ""
  ]);
  const [inputValue, setInputValue] = useState("");
  const [matrixActive, setMatrixActive] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history, matrixActive]);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  useEffect(() => {
    focusInput();
    // Keep focus
    const interval = setInterval(() => {
      if (document.activeElement !== inputRef.current) {
        // Only focus if no other text is highlighted
        if (!window.getSelection()?.toString()) {
          inputRef.current?.focus();
        }
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const command = inputValue.trim().toLowerCase();
    if (!command) return;

    const newHistory = [...history, `guest@poojitha:~$ ${inputValue}`];
    const parts = command.split(' ');
    const baseCommand = parts[0];
    const arg = parts[1];

    switch (baseCommand) {
      case 'help':
        newHistory.push(
          "Available Commands:",
          "  about         - Display Poojitha's core biography and credentials",
          "  skills        - List technical skills with calculated metrics",
          "  projects      - Show deployed engineering projects and outcomes",
          "  experience    - Display professional corporate timelines",
          "  email         - Connect to thodupunooripoojitha321@gmail.com",
          "  theme [name]  - Set visual theme (slate, cyberpunk, luxury, forest, terminal)",
          "  layout [name] - Switch representation views (scrolling, bento, brief, shell)",
          "  matrix        - Activate screen matrix rain effect",
          "  clear         - Wipe the terminal backlog clean",
          "  exit          - Reset presentation to standard layout"
        );
        break;

      case 'about':
        newHistory.push(
          `Candidate: ${PROFILE.name}`,
          `Role:      ${PROFILE.title}`,
          `Bio:       ${PROFILE.detailedBio}`,
          `Location:  ${PROFILE.location}`,
          `Phone:     ${PROFILE.phone}`
        );
        break;

      case 'skills':
        newHistory.push("Technical Skills Matrix:");
        SKILLS.forEach(s => {
          const barLength = Math.round(s.level / 10);
          const bar = "█".repeat(barLength) + "░".repeat(10 - barLength);
          newHistory.push(`  ${s.name.padEnd(28)} [${bar}] ${s.level}% - ${s.description}`);
        });
        break;

      case 'projects':
        newHistory.push("Production-Ready Engineering Portfolios:");
        PROJECTS.forEach(p => {
          newHistory.push(
            `----------------------------------------`,
            `Title:        ${p.title}`,
            `Summary:      ${p.description}`,
            `Impact:       ${p.businessImpact || 'N/A'}`,
            `Technologies: ${p.technologies.join(', ')}`,
            `Repository:   ${p.githubUrl || 'None'}`
          );
        });
        break;

      case 'experience':
        newHistory.push("Professional Experience Logs:");
        newHistory.push(
          "1. AI/ML Engineering Lead Intern - Pocket Task",
          "   Period: January 2024 - Active | Location: Pune, Maharashtra, India",
          "   Duties: Formulating relational data schemas, building high-grade rest routers,",
          "           and training generative machine learning recommendation paths."
        );
        break;

      case 'email':
        newHistory.push(
          "thodupunooripoojitha321@gmail.com",
          "Initializing default system mail client interface ..."
        );
        window.open("mailto:thodupunooripoojitha321@gmail.com");
        break;

      case 'theme':
        if (['slate', 'cyberpunk', 'luxury', 'forest', 'terminal'].includes(arg)) {
          setStyleConfig({
            ...styleConfig,
            theme: arg as any,
            mode: arg === 'terminal' || arg === 'cyberpunk' ? 'dark' : styleConfig.mode
          });
          newHistory.push(`Theme successfully modified to [${arg}].`);
        } else {
          newHistory.push("Please provide a valid theme name: slate, cyberpunk, luxury, forest, terminal.");
        }
        break;

      case 'layout':
        if (['scrolling', 'bento', 'brief', 'shell'].includes(arg)) {
          setStyleConfig({ ...styleConfig, layout: arg as any });
          newHistory.push(`Presentation layout shifted to [${arg}].`);
        } else {
          newHistory.push("Please provide a valid layout name: scrolling, bento, brief, shell.");
        }
        break;

      case 'clear':
        setHistory([]);
        setInputValue("");
        return;

      case 'matrix':
        setMatrixActive(true);
        setTimeout(() => {
          setMatrixActive(false);
          setHistory(prev => [...prev, "Matrix stream loop terminated. Connection safe."]);
        }, 6000);
        setInputValue("");
        return;

      case 'exit':
        setStyleConfig({ ...styleConfig, layout: 'scrolling' });
        break;

      default:
        newHistory.push(`Command not found: '${baseCommand}'. Type 'help' for support.`);
    }

    setHistory(newHistory);
    setInputValue("");
  };

  return (
    <div 
      onClick={focusInput}
      className="min-h-[70vh] bg-black border-2 border-emerald-500/20 rounded-2xl p-6 font-mono text-xs text-[#22c55e] shadow-2xl relative overflow-hidden flex flex-col cursor-text select-text"
      style={{
        boxShadow: "inset 0 0 40px rgba(0, 0, 0, 0.9), 0px 10px 30px rgba(0,0,0,0.8)",
        backgroundImage: "radial-gradient(rgba(18, 16, 16, 0.4) 50%, rgba(0, 0, 0, 0.2) 100%)"
      }}
    >
      {/* Scan lines CRT overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_4px,6px_100%] z-20" />
      
      {/* Green ambient header glow */}
      <div className="flex items-center justify-between border-b border-green-950 pb-3 mb-4 select-none">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-[#22c55e] animate-pulse" />
          <span className="font-semibold tracking-wider text-xs">POOJITHA-ENGINE:~ (SHELL OVERLAY)</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-600/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/60 animate-pulse" />
        </div>
      </div>

      {matrixActive ? (
        <MatrixRain />
      ) : (
        <div className="flex-1 overflow-y-auto space-y-2 pr-2 scrollbar-thin scrollbar-thumb-green-900 scrollbar-track-transparent">
          {history.map((line, idx) => (
            <div key={idx} className="whitespace-pre-wrap leading-relaxed">
              {line}
            </div>
          ))}
          
          {/* Active Input Line */}
          <form onSubmit={handleCommand} className="flex items-center gap-2 pt-2 text-[#22c55e]">
            <span className="shrink-0">guest@poojitha:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="flex-1 bg-transparent border-none outline-none text-[#22c55e] font-mono text-xs focus:ring-0 p-0"
              autoFocus
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
            />
          </form>
          <div ref={bottomRef} />
        </div>
      )}
    </div>
  );
}

// Subcomponent: Falling Matrix Rain Overlay
function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    
    // Set sizes
    const resizeCanvas = () => {
      canvas.width = canvas.parentElement?.clientWidth || 800;
      canvas.height = canvas.parentElement?.clientHeight || 450;
    };
    resizeCanvas();

    const letters = "日ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍｦｲｸｺｿﾁﾄﾉﾌﾔﾖﾙﾚﾛﾝ0123456789X+=*<>[]#@%";
    const alphabet = letters.split("");
    const fontSize = 12;
    const columns = Math.floor(canvas.width / fontSize);

    const rainDrops: number[] = Array(columns).fill(1).map(() => Math.floor(Math.random() * -80));

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#0F0"; // Green text
      ctx.font = fontSize + "px monospace";

      for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabet[Math.floor(Math.random() * alphabet.length)];
        const x = i * fontSize;
        const y = rainDrops[i] * fontSize;

        // Draw character
        ctx.fillText(text, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          rainDrops[i] = 0;
        }
        rainDrops[i]++;
      }
    };

    const interval = setInterval(draw, 33);
    return () => {
      clearInterval(interval);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="flex-1 relative w-full h-full min-h-[350px]">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />
      <div className="absolute top-4 left-4 z-10 bg-black/80 px-3 py-1.5 border border-green-500/40 text-[10px] uppercase font-mono animate-pulse">
        [Matrix Buffer Streaming active...]
      </div>
    </div>
  );
}
