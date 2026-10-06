import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { 
  ArrowDown, 
  Github, 
  Linkedin, 
  Mail, 
  Cpu, 
  Activity, 
  Terminal, 
  Layers, 
  Zap, 
  ExternalLink,
  Download,
  Copy,
  Check,
  User,
  Radio,
  ShieldCheck,
  Eye
} from 'lucide-react';
import { sound } from '../utils/soundEffects';

export default function Hero({ onOpenResume }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [wavePhase, setWavePhase] = useState(0);
  const [viewMode, setViewMode] = useState('photo'); // 'photo' | 'circuit'

  // Mouse tilt effect for the visual
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-150, 150], [8, -8]);
  const rotateY = useTransform(mouseX, [-150, 150], [-8, 8]);

  // Oscilloscope animation ticker
  useEffect(() => {
    const interval = setInterval(() => {
      setWavePhase((prev) => (prev + 0.15) % (Math.PI * 2));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const handleCopyEmail = (e) => {
    e.preventDefault();
    sound.playClick();
    navigator.clipboard?.writeText('deepak9956gupta@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const scrollToProjects = () => {
    sound.playClick();
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-8 lg:px-16 pt-28 pb-16 overflow-hidden"
    >
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10 my-auto">
        
        {/* Left Side: Typography & CTAs */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col items-start gap-6"
        >
          {/* Small Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/70 dark:bg-dark-900/90 border border-cherry-500/30 text-cherry-600 dark:text-cherry-400 text-xs sm:text-sm font-mono shadow-cherry-sm backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-cherry-500 animate-pulse" />
            <span className="tracking-wide">Electrical & Electronics Engineering × Technology</span>
          </div>

          {/* Large Heading */}
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl text-slate-600 dark:text-cream-muted font-light tracking-wide mb-1">
              Hi, I'm
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-display font-extrabold tracking-tight leading-[1.05]">
              <span className="text-slate-900 dark:text-cream">ABHISHEK </span>
              <span className="bg-gradient-to-r from-cherry-500 via-rose-500 to-rose-600 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(244,63,94,0.35)]">
                GUPTA
              </span>
            </h1>
          </div>

          {/* Main Tagline */}
          <p className="text-lg sm:text-2xl font-medium text-slate-800 dark:text-cream-light font-display max-w-2xl leading-snug">
            Engineering ideas into practical technology solutions.
          </p>

          {/* Supporting Text */}
          <p className="text-sm sm:text-base text-slate-600 dark:text-gray-400 max-w-xl leading-relaxed">
            Electrical & Electronics Engineering student passionate about building practical systems across AI, cybersecurity, automation, embedded technology and engineering.
          </p>

          {/* Academic & Active Project Quick Chips */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-black/[0.04] dark:bg-white/[0.03] border border-black/[0.08] dark:border-white/[0.08] text-xs font-mono text-slate-700 dark:text-gray-300">
              <span className="text-cherry-500">●</span> NIT Nagaland
            </div>
            <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-cherry-500/10 border border-cherry-500/20 text-xs font-mono text-cherry-600 dark:text-cherry-300">
              <span>★</span> 9.11 CGPA
            </div>
            <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-600 dark:text-emerald-400">
              <ShieldCheck size={12} />
              <span>Cyber Security (Active Project)</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={scrollToProjects}
              onMouseEnter={() => sound.playHover()}
              className="px-7 py-3.5 rounded-xl font-semibold text-sm tracking-wider uppercase bg-cherry-600 hover:bg-cherry-500 text-white shadow-cherry-glow hover:shadow-cherry-lg transition-all duration-300 flex items-center gap-2.5 border border-cherry-400/40 group"
            >
              <span>Explore My Work</span>
              <Layers size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </button>

            <button
              onClick={() => {
                sound.playClick();
                if (onOpenResume) onOpenResume();
                else {
                  const el = document.getElementById('resume');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              onMouseEnter={() => sound.playHover()}
              className="px-7 py-3.5 rounded-xl font-semibold text-sm tracking-wider uppercase bg-white/80 dark:bg-dark-900/80 hover:bg-white dark:hover:bg-dark-850 text-slate-900 dark:text-cream border border-black/[0.12] dark:border-white/[0.15] hover:border-cherry-500/60 shadow-lg backdrop-blur-md transition-all duration-300 flex items-center gap-2.5"
            >
              <Download size={16} className="text-cherry-500 dark:text-cherry-400" />
              <span>Download Resume</span>
            </button>
          </div>

          {/* Social Icons (Clean placeholders with copy feedback) */}
          <div className="flex items-center gap-3 pt-3">
            <span className="text-xs font-mono text-slate-500 dark:text-gray-500 uppercase tracking-widest mr-1">
              Connect:
            </span>

            {/* GitHub Placeholder */}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playClick()}
              title="GitHub Profile"
              className="p-2.5 rounded-xl bg-black/[0.04] dark:bg-white/[0.04] border border-black/[0.08] dark:border-white/[0.08] text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white hover:border-cherry-500/50 hover:bg-cherry-500/10 transition-all duration-200"
            >
              <Github size={18} />
            </a>

            {/* LinkedIn Placeholder */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playClick()}
              title="LinkedIn Profile"
              className="p-2.5 rounded-xl bg-black/[0.04] dark:bg-white/[0.04] border border-black/[0.08] dark:border-white/[0.08] text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white hover:border-cherry-500/50 hover:bg-cherry-500/10 transition-all duration-200"
            >
              <Linkedin size={18} />
            </a>

            {/* Email Button */}
            <button
              onClick={handleCopyEmail}
              title="deepak9956gupta@gmail.com - Click to Copy"
              className="p-2.5 rounded-xl bg-black/[0.04] dark:bg-white/[0.04] border border-black/[0.08] dark:border-white/[0.08] text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white hover:border-cherry-500/50 hover:bg-cherry-500/10 transition-all duration-200 flex items-center gap-2"
            >
              {copiedEmail ? <Check size={18} className="text-emerald-500" /> : <Mail size={18} />}
              <span className="hidden sm:inline font-mono text-xs">
                {copiedEmail ? 'Copied!' : 'deepak9956gupta@gmail.com'}
              </span>
            </button>
          </div>

        </motion.div>

        {/* Right Side: Futuristic Holographic Identity Card with Photo & Engineering View */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="lg:col-span-5 relative flex justify-center perspective-[1200px]"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div
            style={{ rotateX, rotateY }}
            className="w-full max-w-[460px] rounded-3xl p-5 sm:p-6 relative bg-white/80 dark:bg-dark-900/80 border border-black/[0.08] dark:border-white/[0.12] backdrop-blur-2xl shadow-2xl overflow-hidden group"
          >
            {/* Ambient inner glow */}
            <div className="absolute -top-24 -right-24 w-60 h-60 bg-cherry-600/20 blur-3xl rounded-full pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-cyber-indigo/20 blur-3xl rounded-full pointer-events-none" />

            {/* HUD Top Bar with View Switcher */}
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-black/[0.06] dark:border-white/[0.08] font-mono text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cherry-500 animate-ping opacity-80" />
                <span className="text-cherry-600 dark:text-cherry-400 font-semibold tracking-wider">
                  SYS.ID // NIT-NGL
                </span>
              </div>

              {/* View Toggle (Photo vs Circuit) */}
              <div className="flex items-center gap-1 p-0.5 rounded-lg bg-black/[0.04] dark:bg-white/[0.05] border border-black/[0.08] dark:border-white/[0.08]">
                <button
                  onClick={() => {
                    sound.playClick();
                    setViewMode('photo');
                  }}
                  className={`px-2 py-0.5 rounded text-[10px] font-mono transition-colors ${
                    viewMode === 'photo' 
                      ? 'bg-cherry-600 text-white font-bold' 
                      : 'text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  Portrait
                </button>
                <button
                  onClick={() => {
                    sound.playClick();
                    setViewMode('circuit');
                  }}
                  className={`px-2 py-0.5 rounded text-[10px] font-mono transition-colors ${
                    viewMode === 'circuit' 
                      ? 'bg-cherry-600 text-white font-bold' 
                      : 'text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  Circuit HUD
                </button>
              </div>
            </div>

            {/* Central Display: Photo View OR Circuit/Oscilloscope View */}
            {viewMode === 'photo' ? (
              <div className="relative w-full h-[320px] rounded-2xl overflow-hidden border border-black/[0.1] dark:border-white/[0.1] bg-dark-950 flex flex-col justify-end group/img">
                
                {/* Photo of Abhishek */}
                <img 
                  src="/portrait.jpg" 
                  alt="Abhishek Gupta - Electrical & Electronics Engineering"
                  className="absolute inset-0 w-full h-full object-cover object-top filter contrast-[1.08] group-hover/img:scale-105 transition-transform duration-700"
                />

                {/* Subtle cybernetic scanline overlay */}
                <div 
                  className="absolute inset-0 pointer-events-none opacity-20"
                  style={{
                    backgroundImage: 'repeating-linear-gradient(0deg, rgba(225,29,72,0.15) 0px, transparent 2px, transparent 4px)'
                  }}
                />

                {/* Subtle vignette gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent pointer-events-none" />

                {/* Overlaid HUD Tag on Photo */}
                <div className="relative z-10 p-4 flex flex-col gap-1 text-white">
                  <div className="flex items-center justify-between">
                    <span className="font-display font-bold text-lg text-white drop-shadow-md">
                      Abhishek Gupta
                    </span>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/80 text-[10px] font-mono text-white font-bold backdrop-blur-md">
                      ACTIVE
                    </span>
                  </div>
                  <p className="font-mono text-xs text-cherry-300">
                    B.Tech EEE • NIT Nagaland
                  </p>
                  <div className="flex items-center gap-2 pt-1 font-mono text-[11px] text-gray-300">
                    <span>CGPA: <strong>9.11</strong></span>
                    <span>•</span>
                    <span className="text-emerald-300">Cyber Security Project (Ongoing)</span>
                  </div>
                </div>

                {/* Inner Tech Corner Brackets on Photo */}
                <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-cherry-400 pointer-events-none shadow-cherry-sm" />
                <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-cherry-400 pointer-events-none shadow-cherry-sm" />
                <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-cherry-400 pointer-events-none shadow-cherry-sm" />
                <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-cherry-400 pointer-events-none shadow-cherry-sm" />
              </div>
            ) : (
              /* Circuit & Oscilloscope Telemetry View */
              <div className="relative w-full h-[320px] rounded-2xl bg-slate-950 border border-white/[0.08] p-4 flex flex-col justify-between overflow-hidden">
                <div className="absolute inset-0 tech-grid-bg opacity-30 pointer-events-none" />

                {/* Glowing Traces & Neural Synapses SVG */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 320">
                  <defs>
                    <linearGradient id="traceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.85" />
                      <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.85" />
                    </linearGradient>
                  </defs>

                  {/* Circuit Traces */}
                  <path d="M 40 40 L 120 40 L 160 80 L 240 80 L 280 40 L 360 40" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
                  <path d="M 40 240 L 120 240 L 160 200 L 240 200 L 280 240 L 360 240" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />

                  {/* Active Animated Energy Path */}
                  <path 
                    d="M 60 140 Q 130 90 200 140 T 340 140" 
                    fill="none" 
                    stroke="url(#traceGrad)" 
                    strokeWidth="2.5" 
                  />

                  {/* Neural Network Nodes */}
                  <circle cx="90" cy="90" r="5" fill="#f43f5e" />
                  <circle cx="90" cy="140" r="5" fill="#f43f5e" />
                  <circle cx="90" cy="190" r="5" fill="#f43f5e" />

                  <circle cx="200" cy="80" r="6" fill="#8b5cf6" />
                  <circle cx="200" cy="140" r="7" fill="#f43f5e" />
                  <circle cx="200" cy="200" r="6" fill="#8b5cf6" />

                  <circle cx="310" cy="110" r="5" fill="#38bdf8" />
                  <circle cx="310" cy="170" r="5" fill="#38bdf8" />

                  {/* Synaptic Lines */}
                  <line x1="90" y1="90" x2="200" y2="80" stroke="rgba(244,63,94,0.3)" strokeWidth="1.2" />
                  <line x1="90" y1="140" x2="200" y2="140" stroke="rgba(244,63,94,0.5)" strokeWidth="1.5" />
                  <line x1="90" y1="190" x2="200" y2="200" stroke="rgba(244,63,94,0.3)" strokeWidth="1.2" />
                  <line x1="200" y1="140" x2="310" y2="110" stroke="rgba(244,63,94,0.4)" strokeWidth="1.5" />
                  <line x1="200" y1="140" x2="310" y2="170" stroke="rgba(244,63,94,0.4)" strokeWidth="1.5" />
                </svg>

                {/* Top HUD Micro-badges */}
                <div className="relative z-10 flex items-center justify-between font-mono text-[10px] text-gray-400">
                  <span className="flex items-center gap-1">
                    <Zap size={11} className="text-amber-400" />
                    <span>3.30V CORE</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <Cpu size={11} className="text-cherry-400" />
                    <span>AI INFERENCE: 1.2ms</span>
                  </span>
                  <span className="text-cyber-cyan font-bold">50.00 Hz</span>
                </div>

                {/* Live Oscilloscope Waveform at the bottom */}
                <div className="relative z-10 mt-auto pt-2 border-t border-white/[0.08]">
                  <div className="flex items-center justify-between text-[10px] font-mono text-gray-400 mb-1">
                    <span>SIGNAL MONITOR</span>
                    <span className="text-cherry-400 font-bold">CH1: SINE_PWM</span>
                  </div>
                  <div className="h-16 w-full bg-black/60 rounded-lg border border-white/[0.06] p-1 flex items-center relative overflow-hidden">
                    <svg className="w-full h-full relative z-10" viewBox="0 0 200 40" preserveAspectRatio="none">
                      <path
                        d={`M 0 20 ${Array.from({ length: 40 }).map((_, i) => {
                          const x = i * 5;
                          const y = 20 + Math.sin(x * 0.08 + wavePhase) * 12 + Math.cos(x * 0.16) * 3;
                          return `L ${x} ${y}`;
                        }).join(' ')}`}
                        fill="none"
                        stroke="#f43f5e"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            )}

            {/* Bottom HUD Metrics */}
            <div className="grid grid-cols-3 gap-2 mt-4 pt-2">
              <div className="p-2.5 rounded-xl bg-black/[0.03] dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.06] text-center">
                <div className="text-[10px] font-mono text-slate-500 dark:text-gray-400 uppercase">Discipline</div>
                <div className="text-xs font-bold text-slate-900 dark:text-cream mt-0.5">EEE × AI</div>
              </div>
              <div className="p-2.5 rounded-xl bg-black/[0.03] dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.06] text-center">
                <div className="text-[10px] font-mono text-slate-500 dark:text-gray-400 uppercase">Core CGPA</div>
                <div className="text-xs font-bold text-cherry-600 dark:text-cherry-400 mt-0.5">9.11</div>
              </div>
              <div className="p-2.5 rounded-xl bg-black/[0.03] dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.06] text-center">
                <div className="text-[10px] font-mono text-slate-500 dark:text-gray-400 uppercase">Innovation</div>
                <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400 mt-0.5">CYBER ML</div>
              </div>
            </div>

            {/* HUD Corner Tech Brackets */}
            <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-cherry-500/70 pointer-events-none" />
            <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-cherry-500/70 pointer-events-none" />
            <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-cherry-500/70 pointer-events-none" />
            <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-cherry-500/70 pointer-events-none" />

          </motion.div>
        </motion.div>

      </div>

      {/* Animated Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="mt-8 sm:mt-12 flex flex-col items-center gap-2 text-slate-500 dark:text-gray-400 cursor-pointer group"
        onClick={() => {
          sound.playClick();
          const el = document.getElementById('about');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="font-mono text-[11px] tracking-widest text-slate-500 dark:text-gray-400 group-hover:text-cherry-500 transition-colors uppercase">
          Scroll to explore
        </span>
        <motion.div 
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="w-7 h-10 rounded-full border border-black/[0.15] dark:border-white/[0.15] group-hover:border-cherry-500/60 flex items-start justify-center p-1.5 transition-colors"
        >
          <div className="w-1.5 h-2 rounded-full bg-cherry-500" />
        </motion.div>
      </motion.div>

    </section>
  );
}
