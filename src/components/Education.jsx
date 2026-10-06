import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, School, BookOpen, Award, CheckCircle2, MapPin } from 'lucide-react';
import { sound } from '../utils/soundEffects';

export default function Education() {
  return (
    <section id="education" className="py-28 relative px-4 sm:px-8 lg:px-16 z-10">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/[0.04] dark:bg-white/[0.04] border border-black/[0.08] dark:border-white/[0.08] text-cherry-600 dark:text-cherry-400 font-mono text-xs tracking-widest uppercase mb-3">
            <span>05 // ACADEMICS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-cream tracking-tight">
            Academic Trajectory
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cherry-500 to-rose-600 rounded-full mt-4" />
          <p className="text-slate-600 dark:text-gray-400 max-w-2xl mt-4 text-sm sm:text-base leading-relaxed">
            Rigorous educational foundations from premier institutions connecting secondary schooling to national engineering excellence.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative">
          <div className="absolute left-6 sm:left-1/2 top-8 bottom-8 w-0.5 sm:-translate-x-1/2 bg-black/[0.1] dark:bg-white/[0.1]">
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              className="w-full bg-gradient-to-b from-cherry-500 via-rose-500 to-purple-600 shadow-cherry-sm"
            />
          </div>

          <div className="space-y-16">
            
            {/* 1. Higher Education: NIT Nagaland */}
            <div className="relative flex flex-col sm:flex-row items-start group">
              <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 top-0 z-20">
                <div className="w-12 h-12 rounded-full bg-white dark:bg-dark-950 border-2 border-cherry-500 flex items-center justify-center shadow-cherry-sm group-hover:scale-110 group-hover:shadow-cherry-glow transition-all duration-300">
                  <GraduationCap size={22} className="text-cherry-500" />
                </div>
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="ml-16 sm:ml-0 sm:w-[46%] sm:mr-auto sm:pr-6"
              >
                <div className="glass-card p-6 sm:p-8 rounded-3xl border border-cherry-500/30 hover:border-cherry-400 transition-all duration-300 shadow-xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-36 h-36 bg-cherry-500/10 rounded-full blur-2xl pointer-events-none" />

                  {/* Header Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs px-3 py-1 rounded-full bg-cherry-500/10 border border-cherry-500/30 text-cherry-600 dark:text-cherry-400 font-bold">
                      UNDERGRADUATE DEGREE
                    </span>
                    <span className="font-mono text-xs text-slate-500 dark:text-gray-400 flex items-center gap-1">
                      <MapPin size={12} /> Nagaland, India
                    </span>
                  </div>

                  <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-cream mb-1 group-hover:text-cherry-600 dark:group-hover:text-cherry-300 transition-colors">
                    National Institute of Technology Nagaland
                  </h3>
                  
                  <h4 className="text-sm sm:text-base font-semibold text-cherry-600 dark:text-cherry-400 mb-4">
                    B.Tech in Electrical & Electronics Engineering
                  </h4>

                  {/* CGPA Badge */}
                  <div className="p-4 rounded-2xl bg-black/[0.03] dark:bg-dark-950/80 border border-black/[0.08] dark:border-white/[0.08] flex items-center justify-between mb-5">
                    <div>
                      <div className="text-xs font-mono text-slate-500 dark:text-gray-400 uppercase">Cumulative Performance</div>
                      <div className="text-xs text-slate-700 dark:text-gray-300 mt-0.5 font-medium">Academic Record</div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl sm:text-3xl font-display font-extrabold text-cherry-600 dark:text-cherry-400 drop-shadow-sm">
                        9.11
                      </div>
                      <div className="text-[10px] font-mono text-slate-500 dark:text-gray-400">CGPA (SCALE OF 10)</div>
                    </div>
                  </div>

                  <p className="text-slate-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed mb-4">
                    Pursuing in-depth curriculum spanning analog & digital electronics, power systems, control engineering, electromagnetics, and autonomous computing.
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-black/[0.08] dark:border-white/[0.08]">
                    {['Circuit Theory', 'Control Systems', 'Microcontrollers', 'Power Electronics', 'Digital Signal Processing'].map(c => (
                      <span key={c} className="px-2.5 py-1 rounded bg-black/[0.04] dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.06] text-[11px] font-mono text-slate-700 dark:text-gray-400">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* 2. School Education */}
            <div className="relative flex flex-col sm:flex-row items-start group">
              <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 top-0 z-20">
                <div className="w-12 h-12 rounded-full bg-white dark:bg-dark-950 border-2 border-purple-500 flex items-center justify-center shadow-cyber-glow group-hover:scale-110 transition-all duration-300">
                  <School size={20} className="text-purple-500" />
                </div>
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="ml-16 sm:ml-0 sm:w-[46%] sm:ml-auto sm:pl-6"
              >
                <div className="glass-card p-6 sm:p-8 rounded-3xl border border-black/[0.08] dark:border-white/[0.08] hover:border-purple-500/40 transition-all duration-300 shadow-xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-36 h-36 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />

                  {/* Header Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-600 dark:text-purple-300 font-bold">
                      SCHOOL EDUCATION
                    </span>
                    <span className="font-mono text-xs text-slate-500 dark:text-gray-400 flex items-center gap-1">
                      <MapPin size={12} /> Maharajganj, UP
                    </span>
                  </div>

                  <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-cream mb-1 group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
                    Jawahar Navodaya Vidyalaya
                  </h3>
                  
                  <h4 className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-gray-300 mb-6 font-mono">
                    Navodaya Vidyalaya Samiti (NVS), Ministry of Education
                  </h4>

                  {/* Class 12 & Class 10 Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    
                    {/* Class 12 Card */}
                    <div className="p-4 rounded-2xl bg-black/[0.03] dark:bg-dark-950/80 border border-black/[0.08] dark:border-white/[0.08] flex flex-col justify-between">
                      <div>
                        <div className="text-xs font-mono text-purple-600 dark:text-purple-300 font-bold">CLASS 12</div>
                        <div className="text-[11px] text-slate-500 dark:text-gray-400 mt-0.5">Senior Secondary</div>
                      </div>
                      <div className="mt-3">
                        <div className="text-2xl font-display font-bold text-slate-900 dark:text-cream">76.2%</div>
                        <div className="text-[10px] font-mono text-slate-500 dark:text-gray-400">CBSE Board</div>
                      </div>
                    </div>

                    {/* Class 10 Card */}
                    <div className="p-4 rounded-2xl bg-black/[0.03] dark:bg-dark-950/80 border border-black/[0.08] dark:border-white/[0.08] flex flex-col justify-between">
                      <div>
                        <div className="text-xs font-mono text-emerald-600 dark:text-emerald-300 font-bold">CLASS 10</div>
                        <div className="text-[11px] text-slate-500 dark:text-gray-400 mt-0.5">Secondary School</div>
                      </div>
                      <div className="mt-3">
                        <div className="text-2xl font-display font-bold text-slate-900 dark:text-cream">88.4%</div>
                        <div className="text-[10px] font-mono text-slate-500 dark:text-gray-400">CBSE Board</div>
                      </div>
                    </div>

                  </div>

                  <p className="text-slate-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed">
                    Developed a robust foundation in mathematics, analytical problem solving, and science under the prestigious JNV residential schooling environment.
                  </p>
                </div>
              </motion.div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
