import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Eye, CheckCircle2, Sparkles } from 'lucide-react';
import { sound } from '../utils/soundEffects';

export default function ResumeSection({ onOpenResume }) {
  const handleDownload = () => {
    sound.playClick();
    if (onOpenResume) {
      onOpenResume();
      setTimeout(() => {
        window.print();
      }, 500);
    }
  };

  return (
    <section id="resume" className="py-28 relative px-4 sm:px-8 lg:px-16 z-10">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/[0.04] dark:bg-white/[0.04] border border-black/[0.08] dark:border-white/[0.08] text-cherry-600 dark:text-cherry-400 font-mono text-xs tracking-widest uppercase mb-3">
            <span>08 // CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-cream tracking-tight">
            My Resume
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cherry-500 to-rose-600 rounded-full mt-4" />
          <p className="text-slate-600 dark:text-gray-400 max-w-xl mt-4 text-sm sm:text-base leading-relaxed">
            Comprehensive curriculum vitae reflecting academic distinction, hardware engineering projects, and technical proficiencies.
          </p>
        </div>

        {/* Document Preview Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 sm:p-12 rounded-3xl border border-cherry-500/30 hover:border-cherry-400/60 shadow-2xl relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-72 h-72 bg-cherry-600/10 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />
          <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-cyber-indigo/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            
            {/* Left: Animated Document Visual & Info */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6">
              
              {/* Document Icon */}
              <div className="relative group/doc shrink-0">
                <div className="w-20 h-24 rounded-2xl bg-white dark:bg-dark-950 border border-cherry-500/40 flex flex-col items-center justify-center text-cherry-500 dark:text-cherry-400 shadow-cherry-sm group-hover:shadow-cherry-glow transition-all duration-300">
                  <motion.div
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <FileText size={36} />
                  </motion.div>
                  <span className="font-mono text-[9px] text-slate-500 dark:text-gray-400 mt-1 uppercase">PDF // ATS</span>
                </div>
                <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-cherry-500 rounded-full animate-ping opacity-75" />
                <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-cherry-500 rounded-full" />
              </div>

              {/* Particulars */}
              <div className="flex flex-col">
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-1">
                  <span className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-cream tracking-tight">
                    Abhishek Gupta
                  </span>
                  <span className="font-mono text-[10px] px-2 py-0.5 rounded-full bg-cherry-500/10 border border-cherry-500/30 text-cherry-600 dark:text-cherry-400 font-bold">
                    VERIFIED
                  </span>
                </div>

                <p className="text-cherry-600 dark:text-cherry-400 font-mono text-xs sm:text-sm font-semibold mb-1">
                  Electrical & Electronics Engineering
                </p>

                <p className="text-slate-600 dark:text-gray-300 text-xs sm:text-sm font-medium mb-3">
                  National Institute of Technology Nagaland
                </p>

                <div className="flex items-center justify-center sm:justify-start gap-3">
                  <div className="px-3 py-1 rounded-xl bg-black/[0.04] dark:bg-white/[0.04] border border-black/[0.08] dark:border-white/[0.08] text-xs font-mono text-slate-800 dark:text-cream flex items-center gap-1.5">
                    <span className="text-cherry-600 dark:text-cherry-400 font-bold">CGPA:</span>
                    <strong className="text-cherry-600 dark:text-cherry-300">9.11</strong>
                  </div>
                  <div className="px-3 py-1 rounded-xl bg-black/[0.04] dark:bg-white/[0.04] border border-black/[0.08] dark:border-white/[0.08] text-xs font-mono text-slate-500 dark:text-gray-400">
                    B.Tech Undergraduate
                  </div>
                </div>
              </div>

            </div>

            {/* Right: Action Buttons */}
            <div className="flex flex-col sm:flex-row md:flex-col gap-3 w-full sm:w-auto shrink-0">
              <button
                onClick={() => {
                  sound.playClick();
                  if (onOpenResume) onOpenResume();
                }}
                onMouseEnter={() => sound.playHover()}
                className="px-6 py-3.5 rounded-xl font-semibold text-xs tracking-wider uppercase bg-cherry-600 hover:bg-cherry-500 text-white shadow-cherry-sm hover:shadow-cherry-glow transition-all duration-300 flex items-center justify-center gap-2 border border-cherry-400/40"
              >
                <Eye size={15} />
                <span>View Resume</span>
              </button>

              <button
                onClick={handleDownload}
                onMouseEnter={() => sound.playHover()}
                className="px-6 py-3.5 rounded-xl font-semibold text-xs tracking-wider uppercase bg-white dark:bg-dark-900/90 hover:bg-slate-50 dark:hover:bg-dark-850 text-slate-900 dark:text-cream border border-black/[0.12] dark:border-white/[0.12] hover:border-cherry-500/50 shadow-md transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Download size={15} className="text-cherry-600 dark:text-cherry-400" />
                <span>Download Resume</span>
              </button>
            </div>

          </div>

          {/* Quick Footer */}
          <div className="mt-8 pt-6 border-t border-black/[0.08] dark:border-white/[0.08] flex flex-wrap items-center justify-between text-xs text-slate-500 dark:text-gray-400 font-mono gap-2">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={13} className="text-emerald-500" />
              <span>Official Academic Curriculum Vitae</span>
            </span>
            <span>
              UPDATED: 2026 // OPEN TO INTERNSHIPS & RESEARCH
            </span>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
