import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Activities from './components/Activities';
import ResumeSection from './components/ResumeSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import BackgroundEffect from './components/BackgroundEffect';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isDark, setIsDark] = useState(true);

  // Initialize theme from storage or default to dark
  useEffect(() => {
    const savedTheme = localStorage.getItem('agy_theme');
    const shouldBeDark = savedTheme ? savedTheme === 'dark' : true;
    setIsDark(shouldBeDark);
    if (shouldBeDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    const timer = setTimeout(() => {
      setLoading(false);
    }, 700);
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setIsDark(prev => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('agy_theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('agy_theme', 'light');
      }
      return next;
    });
  };

  if (loading) {
    return (
      <div className="fixed inset-0 bg-slate-50 dark:bg-dark-950 flex flex-col items-center justify-center z-50">
        <div className="relative flex flex-col items-center gap-4">
          {/* Monogram Loader */}
          <div className="relative w-16 h-16 rounded-2xl bg-white dark:bg-dark-900 border border-cherry-500/50 flex items-center justify-center font-display font-extrabold text-2xl text-slate-900 dark:text-cream shadow-cherry-glow animate-pulse">
            <span className="text-cherry-500">A</span>
            <span className="text-slate-900 dark:text-white">G</span>
            <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-cherry-500 animate-ping" />
          </div>
          
          <div className="flex flex-col items-center gap-1.5 font-mono text-xs">
            <span className="text-cherry-600 dark:text-cherry-400 tracking-widest uppercase font-semibold">
              INITIALIZING INTERFACE
            </span>
            <span className="text-slate-500 dark:text-gray-400 text-[10px]">
              NIT NAGALAND • EEE • CGPA 9.11
            </span>
          </div>

          <div className="w-36 h-1 bg-black/[0.08] dark:bg-white/[0.08] rounded-full overflow-hidden mt-2">
            <div className="h-full bg-gradient-to-r from-cherry-500 to-rose-600 animate-pulse w-full" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-slate-50 dark:bg-dark-950 text-slate-900 dark:text-cream selection:bg-cherry-600 selection:text-white overflow-x-hidden font-sans transition-colors duration-300">
      
      {/* Background Interactive Particles & Cursor Light Effect */}
      <BackgroundEffect />

      {/* Sticky / Floating Navigation */}
      <Navbar 
        onOpenResume={() => setIsResumeOpen(true)} 
        isDark={isDark}
        onToggleTheme={toggleTheme}
      />

      {/* Main Sections */}
      <main className="relative z-10 flex flex-col">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Achievements />
        <Activities />
        <ResumeSection onOpenResume={() => setIsResumeOpen(true)} />
        <Contact />
      </main>

      {/* Minimal Futuristic Footer */}
      <Footer />

      {/* Interactive AI Assistant */}
      <Chatbot />

      {/* Full Document Resume Modal */}
      <ResumeModal 
        isOpen={isResumeOpen} 
        onClose={() => setIsResumeOpen(false)} 
      />

    </div>
  );
}
