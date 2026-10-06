import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { sound } from '../utils/soundEffects';

export default function Footer() {
  const scrollToTop = () => {
    sound.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-black/[0.08] dark:border-white/[0.08] bg-white/90 dark:bg-dark-950/90 pt-16 pb-12 px-4 sm:px-8 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        
        {/* Top Tier */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-black/[0.06] dark:border-white/[0.06]">
          
          {/* Identity & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-3 mb-2">
              <span className="font-display font-extrabold text-2xl tracking-tight text-slate-900 dark:text-cream">
                ABHISHEK GUPTA
              </span>
              {/* Animated Status */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Open to opportunities</span>
              </div>
            </div>
            <p className="text-sm text-slate-600 dark:text-gray-400 font-display">
              "Engineering ideas into practical technology."
            </p>
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playClick()}
              title="GitHub"
              className="p-2.5 rounded-xl bg-black/[0.04] dark:bg-white/[0.04] border border-black/[0.08] dark:border-white/[0.08] text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white hover:border-cherry-500/50 hover:bg-cherry-500/10 transition-all"
            >
              <Github size={18} />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sound.playClick()}
              title="LinkedIn"
              className="p-2.5 rounded-xl bg-black/[0.04] dark:bg-white/[0.04] border border-black/[0.08] dark:border-white/[0.08] text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white hover:border-cherry-500/50 hover:bg-cherry-500/10 transition-all"
            >
              <Linkedin size={18} />
            </a>

            <a
              href="mailto:deepak9956gupta@gmail.com"
              onClick={() => sound.playClick()}
              title="Email"
              className="p-2.5 rounded-xl bg-black/[0.04] dark:bg-white/[0.04] border border-black/[0.08] dark:border-white/[0.08] text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white hover:border-cherry-500/50 hover:bg-cherry-500/10 transition-all"
            >
              <Mail size={18} />
            </a>

            <button
              onClick={scrollToTop}
              title="Return to Top"
              className="p-2.5 rounded-xl bg-cherry-600/10 dark:bg-cherry-600/20 border border-cherry-500/40 text-cherry-600 dark:text-cherry-400 hover:bg-cherry-600 hover:text-white transition-all ml-2"
            >
              <ArrowUp size={18} />
            </button>
          </div>

        </div>

        {/* Bottom Tier */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-gray-400 font-mono gap-4">
          <div>
            © 2026 Abhishek Gupta. All rights reserved.
          </div>

          <div className="flex items-center gap-2">
            <span>Electrical & Electronics Engineering</span>
            <span>•</span>
            <span className="text-cherry-600 dark:text-cherry-400 font-semibold">NIT Nagaland (CGPA 9.11)</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
