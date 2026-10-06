import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText, Volume2, VolumeX, Sun, Moon } from 'lucide-react';
import { sound } from '../utils/soundEffects';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'achievements', label: 'Certificates & Honors' },
  { id: 'activities', label: 'Activities' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar({ onOpenResume, isDark, onToggleTheme }) {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Scroll spy
      const scrollPos = window.scrollY + 220;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const el = document.getElementById(navItems[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    sound.playClick();
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleSound = () => {
    const nextState = sound.toggle();
    setAudioEnabled(nextState);
    if (nextState) sound.playSuccess();
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3.5 px-4 sm:px-8 ${
        scrolled 
          ? 'bg-white/80 dark:bg-dark-950/80 backdrop-blur-xl border-b border-black/[0.06] dark:border-white/[0.08] shadow-lg dark:shadow-2xl py-2.5' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo / Monogram */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group text-left focus:outline-none"
          >
            <div className="relative w-10 h-10 rounded-xl bg-white dark:bg-dark-900 border border-cherry-500/40 flex items-center justify-center font-display font-bold text-lg text-slate-900 dark:text-cream shadow-cherry-sm group-hover:border-cherry-400 group-hover:shadow-cherry-glow transition-all duration-300">
              <span className="text-cherry-500">A</span>
              <span className="text-slate-900 dark:text-white">G</span>
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-cherry-500 animate-ping opacity-75" />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-cherry-500" />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-display font-bold tracking-wider text-sm text-slate-900 dark:text-cream group-hover:text-cherry-500 transition-colors">
                ABHISHEK GUPTA
              </span>
              <span className="font-mono text-[10px] text-slate-500 dark:text-gray-400 tracking-wider">
                NIT NAGALAND • EEE (9.11)
              </span>
            </div>
          </button>

          {/* Desktop Navigation Bar */}
          <nav className="hidden xl:flex items-center gap-1 bg-white/70 dark:bg-dark-900/60 backdrop-blur-md border border-black/[0.06] dark:border-white/[0.08] rounded-full px-3 py-1.5 shadow-md">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  onMouseEnter={() => sound.playHover()}
                  className={`relative px-3 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 ${
                    isActive 
                      ? 'text-white font-semibold' 
                      : 'text-slate-600 dark:text-gray-300 hover:text-slate-900 dark:hover:text-cream hover:bg-black/[0.04] dark:hover:bg-white/[0.05]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 bg-gradient-to-r from-cherry-600 to-cherry-700 rounded-full shadow-cherry-sm"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Controls: Theme Toggle, Audio, Resume, Mobile Menu */}
          <div className="flex items-center gap-2">
            
            {/* Light / Dark Mode Toggle */}
            <button
              onClick={() => {
                sound.playClick();
                onToggleTheme();
              }}
              title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
              className="p-2 rounded-xl border border-black/[0.08] dark:border-white/[0.1] bg-white/80 dark:bg-dark-900/60 text-slate-700 dark:text-gray-300 hover:text-cherry-500 dark:hover:text-cherry-400 hover:border-cherry-500/40 transition-all flex items-center justify-center"
              aria-label="Toggle Theme"
            >
              {isDark ? (
                <Sun size={17} className="text-amber-400 hover:rotate-90 transition-transform duration-500" />
              ) : (
                <Moon size={17} className="text-indigo-600 hover:-rotate-12 transition-transform duration-500" />
              )}
            </button>

            {/* Audio Toggle */}
            <button
              onClick={toggleSound}
              title={audioEnabled ? "Disable UI Audio" : "Enable Futuristic Audio"}
              className={`p-2 rounded-xl border text-xs flex items-center gap-1.5 transition-all ${
                audioEnabled 
                  ? 'bg-cherry-500/20 border-cherry-500/50 text-cherry-500 dark:text-cherry-400 shadow-cherry-sm' 
                  : 'bg-white/80 dark:bg-dark-900/50 border-black/[0.08] dark:border-white/[0.08] text-slate-600 dark:text-gray-400 hover:border-black/20 dark:hover:border-white/20'
              }`}
            >
              {audioEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
              <span className="hidden md:inline font-mono text-[11px]">{audioEnabled ? 'SFX ON' : 'SFX'}</span>
            </button>

            {/* Resume Button */}
            <button
              onClick={() => {
                sound.playClick();
                if (onOpenResume) onOpenResume();
                else handleNavClick('resume');
              }}
              onMouseEnter={() => sound.playHover()}
              className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-cherry-600 hover:bg-cherry-500 text-white shadow-cherry-sm hover:shadow-cherry-glow transition-all duration-200 border border-cherry-400/40"
            >
              <FileText size={14} />
              <span>Resume</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => {
                sound.playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="xl:hidden p-2 rounded-xl bg-white/80 dark:bg-dark-900/80 border border-black/[0.08] dark:border-white/[0.1] text-slate-700 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white hover:border-cherry-500/40 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={20} className="text-cherry-500" /> : <Menu size={20} />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[60px] z-40 p-4 xl:hidden"
          >
            <div className="bg-white/95 dark:bg-dark-900/95 backdrop-blur-2xl border border-black/[0.08] dark:border-white/[0.12] rounded-3xl p-6 shadow-2xl max-w-lg mx-auto">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-black/[0.06] dark:border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-mono text-xs text-slate-700 dark:text-gray-300">NIT NAGALAND • CGPA 9.11</span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white p-1"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-2 mb-6">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                        isActive
                          ? 'bg-cherry-600 text-white font-semibold shadow-cherry-sm'
                          : 'bg-black/[0.03] dark:bg-white/[0.03] text-slate-700 dark:text-gray-300 hover:bg-black/[0.06] dark:hover:bg-white/[0.08]'
                      }`}
                    >
                      <span>{item.label}</span>
                      {isActive && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                    </button>
                  );
                })}
              </div>

              <div className="pt-2 border-t border-black/[0.06] dark:border-white/[0.08] flex items-center justify-between gap-3">
                <button
                  onClick={() => {
                    sound.playClick();
                    onToggleTheme();
                  }}
                  className="flex-1 py-2.5 rounded-xl text-xs font-mono border border-black/[0.1] dark:border-white/[0.1] flex items-center justify-center gap-2"
                >
                  {isDark ? <Sun size={15} className="text-amber-400" /> : <Moon size={15} className="text-indigo-600" />}
                  <span>{isDark ? 'Light Mode' : 'Dark Mode'}</span>
                </button>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (onOpenResume) onOpenResume();
                    else handleNavClick('resume');
                  }}
                  className="flex-1 py-2.5 rounded-xl font-semibold text-xs tracking-wider uppercase bg-cherry-600 text-white shadow-cherry-sm flex items-center justify-center gap-2"
                >
                  <FileText size={15} />
                  <span>Resume</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
