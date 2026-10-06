import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Compass, 
  Layers, 
  Users, 
  Gamepad2, 
  Briefcase, 
  Award, 
  CheckCircle2, 
  Sparkles,
  Cpu,
  Calendar,
  Building,
  Target
} from 'lucide-react';
import { sound } from '../utils/soundEffects';

export default function Activities() {
  const [activeTab, setActiveTab] = useState('workshops');

  return (
    <section id="activities" className="py-28 relative px-4 sm:px-8 lg:px-16 z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/[0.04] dark:bg-white/[0.04] border border-black/[0.08] dark:border-white/[0.08] text-cherry-600 dark:text-cherry-400 font-mono text-xs tracking-widest uppercase mb-3">
            <span>07 // ENGAGEMENT & LEADERSHIP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-cream tracking-tight">
            Workshops & Responsibilities
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cherry-500 to-rose-600 rounded-full mt-4" />
          <p className="text-slate-600 dark:text-gray-400 max-w-2xl mt-4 text-sm sm:text-base leading-relaxed">
            Hands-on technical bootcamps in UAV assembly and additive manufacturing, complemented by campus leadership roles.
          </p>
        </div>

        {/* View Toggle */}
        <div className="flex justify-center mb-14">
          <div className="inline-flex p-1.5 rounded-2xl bg-white/80 dark:bg-dark-900/80 border border-black/[0.08] dark:border-white/[0.1] backdrop-blur-md shadow-md">
            <button
              onClick={() => {
                sound.playClick();
                setActiveTab('workshops');
              }}
              className={`px-6 py-2.5 rounded-xl text-xs font-mono tracking-wider transition-all ${
                activeTab === 'workshops'
                  ? 'bg-cherry-600 text-white shadow-cherry-sm font-bold'
                  : 'text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Technical Bootcamps & Workshops
            </button>
            <button
              onClick={() => {
                sound.playClick();
                setActiveTab('leadership');
              }}
              className={`px-6 py-2.5 rounded-xl text-xs font-mono tracking-wider transition-all ${
                activeTab === 'leadership'
                  ? 'bg-cherry-600 text-white shadow-cherry-sm font-bold'
                  : 'text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Positions & Responsibility
            </button>
          </div>
        </div>

        {/* 1. TECHNICAL BOOTCAMPS & WORKSHOPS */}
        {activeTab === 'workshops' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Workshop 1: Drone Bootcamp 2.1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="glass-card p-6 sm:p-8 rounded-3xl border border-cherry-500/30 hover:border-cherry-400 transition-all duration-300 shadow-xl flex flex-col justify-between group"
            >
              <div>
                {/* Visual Header: Technical Drone Illustration */}
                <div className="h-52 w-full rounded-2xl bg-slate-950 border border-white/[0.08] p-4 mb-6 relative overflow-hidden flex flex-col justify-between text-white">
                  <div className="flex items-center justify-between font-mono text-[11px] text-gray-400">
                    <span className="text-cherry-400 font-bold flex items-center gap-1.5">
                      <Cpu size={13} /> UAV_ASSEMBLY_SCHEMATIC
                    </span>
                    <span className="px-2 py-0.5 rounded bg-cherry-500/20 text-cherry-300 border border-cherry-500/30 font-mono text-[10px]">
                      5-DAY INTENSIVE
                    </span>
                  </div>

                  {/* Multirotor UAV Drone Schematic Drawing */}
                  <div className="relative w-full h-32 flex items-center justify-center">
                    <svg viewBox="0 0 300 130" className="w-full h-full stroke-cherry-400 fill-none">
                      {/* Central Drone Frame */}
                      <rect x="130" y="50" width="40" height="30" rx="6" stroke="#f43f5e" strokeWidth="2" fill="rgba(244,63,94,0.15)" />
                      <circle cx="150" cy="65" r="5" fill="#f43f5e" />
                      
                      {/* Arms */}
                      <line x1="130" y1="50" x2="80" y2="25" stroke="#ffffff" strokeWidth="2.5" />
                      <line x1="170" y1="50" x2="220" y2="25" stroke="#ffffff" strokeWidth="2.5" />
                      <line x1="130" y1="80" x2="80" y2="105" stroke="#ffffff" strokeWidth="2.5" />
                      <line x1="170" y1="80" x2="220" y2="105" stroke="#ffffff" strokeWidth="2.5" />

                      {/* Motor Mounts & Propeller Discs */}
                      <circle cx="80" cy="25" r="14" stroke="#f43f5e" strokeWidth="1.5" strokeDasharray="3 2" />
                      <circle cx="80" cy="25" r="4" fill="#38bdf8" />
                      
                      <circle cx="220" cy="25" r="14" stroke="#f43f5e" strokeWidth="1.5" strokeDasharray="3 2" />
                      <circle cx="220" cy="25" r="4" fill="#38bdf8" />

                      <circle cx="80" cy="105" r="14" stroke="#f43f5e" strokeWidth="1.5" strokeDasharray="3 2" />
                      <circle cx="80" cy="105" r="4" fill="#38bdf8" />

                      <circle cx="220" cy="105" r="14" stroke="#f43f5e" strokeWidth="1.5" strokeDasharray="3 2" />
                      <circle cx="220" cy="25" r="4" fill="#38bdf8" />
                    </svg>
                  </div>

                  <div className="flex items-center justify-between font-mono text-[10px] text-gray-400 border-t border-white/[0.06] pt-1">
                    <span>FRAME: CARBON FIBER QUAD</span>
                    <span>FLIGHT CONTROLLER: CONFIGURED</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 font-mono text-xs text-cherry-600 dark:text-cherry-400 mb-2 font-bold">
                  <Calendar size={13} />
                  <span>5-DAY TECHNICAL BOOTCAMP</span>
                </div>

                <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-cream mb-1 group-hover:text-cherry-600 dark:group-hover:text-cherry-300 transition-colors">
                  Drone Bootcamp 2.1
                </h3>

                <p className="font-mono text-xs text-slate-500 dark:text-gray-400 mb-4">
                  Organized by NILIEIT (National Institute of Electronics & IT)
                </p>

                <div className="p-3.5 rounded-2xl bg-black/[0.03] dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.08] mb-4">
                  <span className="text-xs font-mono text-cherry-600 dark:text-cherry-400 font-semibold block mb-1">
                    Primary Engineering Focus:
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-cream">
                    Multirotor UAV Assembly & Flight Electronics Integration
                  </p>
                </div>

                <p className="text-slate-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed mb-4">
                  Acquired practical exposure in quadcopter architecture, ESC calibration, brushless DC motor integration, power distribution boards, and transmitter-receiver binding.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-black/[0.06] dark:border-white/[0.08]">
                {['Multirotor UAV', 'UAV Assembly', 'Brushless Motors', 'ESCs', 'NILIEIT Certified'].map(t => (
                  <span key={t} className="px-2.5 py-1 rounded bg-black/[0.04] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.08] text-[11px] font-mono text-slate-700 dark:text-gray-300">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Workshop 2: 3D Printing Bootcamp */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass-card p-6 sm:p-8 rounded-3xl border border-purple-500/30 hover:border-purple-400 transition-all duration-300 shadow-xl flex flex-col justify-between group"
            >
              <div>
                {/* Visual Header: Technical 3D Printer Illustration */}
                <div className="h-52 w-full rounded-2xl bg-slate-950 border border-white/[0.08] p-4 mb-6 relative overflow-hidden flex flex-col justify-between text-white">
                  <div className="flex items-center justify-between font-mono text-[11px] text-gray-400">
                    <span className="text-purple-400 font-bold flex items-center gap-1.5">
                      <Layers size={13} /> ADDITIVE_MANUFACTURING_CAD
                    </span>
                    <span className="px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30 font-mono text-[10px]">
                      4-DAY INTENSIVE
                    </span>
                  </div>

                  {/* 3D Printer Extruder Drawing */}
                  <div className="relative w-full h-32 flex items-center justify-center">
                    <svg viewBox="0 0 300 130" className="w-full h-full stroke-purple-400 fill-none">
                      <line x1="70" y1="20" x2="70" y2="110" stroke="#6366f1" strokeWidth="2.5" />
                      <line x1="230" y1="20" x2="230" y2="110" stroke="#6366f1" strokeWidth="2.5" />
                      <line x1="70" y1="25" x2="230" y2="25" stroke="#ffffff" strokeWidth="2" />
                      <line x1="150" y1="25" x2="150" y2="110" stroke="#a855f7" strokeWidth="1.5" strokeDasharray="3 2" />

                      <line x1="70" y1="65" x2="230" y2="65" stroke="#ffffff" strokeWidth="2" />
                      <rect x="135" y="55" width="30" height="20" rx="3" fill="rgba(168,85,247,0.2)" stroke="#a855f7" strokeWidth="1.5" />
                      <polygon points="146,75 154,75 150,83" fill="#f43f5e" stroke="#f43f5e" />
                      <rect x="90" y="95" width="120" height="8" rx="2" fill="rgba(255,255,255,0.1)" stroke="#38bdf8" strokeWidth="1.5" />
                      <polygon points="135,95 150,84 165,95" fill="rgba(168,85,247,0.4)" stroke="#a855f7" strokeWidth="1" />
                    </svg>
                  </div>

                  <div className="flex items-center justify-between font-mono text-[10px] text-gray-400 border-t border-white/[0.06] pt-1">
                    <span>TECHNOLOGY: FDM / SLICING</span>
                    <span>CAD: PARAMETRIC MODELING</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 font-mono text-xs text-purple-600 dark:text-purple-400 mb-2 font-bold">
                  <Calendar size={13} />
                  <span>4-DAY TECHNICAL BOOTCAMP</span>
                </div>

                <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-cream mb-1 group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
                  3D Printing Bootcamp
                </h3>

                <p className="font-mono text-xs text-slate-500 dark:text-gray-400 mb-4">
                  Organized by NIT Nagaland & Conducted by CTTC Bhubaneswar Instructors
                </p>

                <div className="p-3.5 rounded-2xl bg-black/[0.03] dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.08] mb-4">
                  <span className="text-xs font-mono text-purple-600 dark:text-purple-400 font-semibold block mb-1">
                    Primary Engineering Focus:
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-cream">
                    Additive Manufacturing, 3D CAD Modeling & Prototyping
                  </p>
                </div>

                <p className="text-slate-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed mb-4">
                  Trained under expert CTTC Bhubaneswar instructors covering CAD geometry preparation, slicing software parameters, filament dynamics, and precision component fabrication.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-black/[0.06] dark:border-white/[0.08]">
                {['3D Printing', 'CTTC Bhubaneswar', 'NIT Nagaland', 'CAD Geometry', 'Rapid Prototyping'].map(t => (
                  <span key={t} className="px-2.5 py-1 rounded bg-black/[0.04] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.08] text-[11px] font-mono text-slate-700 dark:text-gray-300">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>

          </div>
        )}

        {/* 2. POSITIONS OF RESPONSIBILITY */}
        {activeTab === 'leadership' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Position 1: Co-Organizer PUBG Event */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="glass-card p-6 sm:p-8 rounded-3xl border border-black/[0.08] dark:border-white/[0.08] hover:border-cherry-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-black/[0.04] dark:bg-dark-950/80 border border-black/[0.08] dark:border-white/[0.1] flex items-center justify-center text-cherry-500 group-hover:scale-110 transition-transform shadow-md">
                    <Gamepad2 size={26} />
                  </div>
                  <span className="font-mono text-xs px-3 py-1 rounded-full bg-cherry-500/10 border border-cherry-500/30 text-cherry-600 dark:text-cherry-400 font-bold">
                    CAMPUS EVENT
                  </span>
                </div>

                <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-cream mb-1 group-hover:text-cherry-600 dark:group-hover:text-cherry-300 transition-colors">
                  Co-Organizer — PUBG Event
                </h3>

                <h4 className="text-xs sm:text-sm font-semibold text-slate-500 dark:text-gray-400 font-mono mb-4">
                  National Institute of Technology Nagaland
                </h4>

                <p className="text-slate-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed mb-6">
                  Helped organize the competitive gaming event, managed registered participants, scheduled brackets, and handled technical tournament logistics seamlessly.
                </p>

                <div className="space-y-2 mb-6 pt-3 border-t border-black/[0.06] dark:border-white/[0.08]">
                  <span className="text-xs font-mono text-slate-500 dark:text-gray-400 uppercase tracking-wider block">
                    Leadership Competencies Demonstrated:
                  </span>
                  <div className="flex items-center gap-2 text-xs text-slate-700 dark:text-gray-300">
                    <CheckCircle2 size={13} className="text-cherry-500" />
                    <span>Participant & Schedule Coordination</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-700 dark:text-gray-300">
                    <CheckCircle2 size={13} className="text-cherry-500" />
                    <span>Operations & Logistics Management</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-700 dark:text-gray-300">
                    <CheckCircle2 size={13} className="text-cherry-500" />
                    <span>Clear Interpersonal Communication</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-black/[0.06] dark:border-white/[0.08]">
                {['Leadership', 'Event Management', 'Coordination', 'Communication'].map(t => (
                  <span key={t} className="px-3 py-1 rounded-lg bg-black/[0.04] dark:bg-white/[0.04] border border-black/[0.08] dark:border-white/[0.08] text-xs font-mono text-slate-800 dark:text-cream font-medium">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Position 2: Volunteer PM SHRI Schools Bootcamp */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass-card p-6 sm:p-8 rounded-3xl border border-black/[0.08] dark:border-white/[0.08] hover:border-emerald-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-black/[0.04] dark:bg-dark-950/80 border border-black/[0.08] dark:border-white/[0.1] flex items-center justify-center text-emerald-500 group-hover:scale-110 transition-transform shadow-md">
                    <Users size={26} />
                  </div>
                  <span className="font-mono text-xs px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 font-bold">
                    EDUCATIONAL OUTREACH
                  </span>
                </div>

                <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-cream mb-1 group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors">
                  Volunteer — Innovation Entrepreneurship Bootcamp
                </h3>

                <h4 className="text-xs sm:text-sm font-semibold text-slate-500 dark:text-gray-400 font-mono mb-4">
                  PM SHRI Schools Initiative
                </h4>

                <p className="text-slate-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed mb-6">
                  Assisted in running the specialized entrepreneurship and innovation bootcamp organized for school principals and teachers, providing logistical and technical support.
                </p>

                <div className="space-y-2 mb-6 pt-3 border-t border-black/[0.06] dark:border-white/[0.08]">
                  <span className="text-xs font-mono text-slate-500 dark:text-gray-400 uppercase tracking-wider block">
                    Leadership Competencies Demonstrated:
                  </span>
                  <div className="flex items-center gap-2 text-xs text-slate-700 dark:text-gray-300">
                    <CheckCircle2 size={13} className="text-emerald-500" />
                    <span>Innovation Framework Dissemination</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-700 dark:text-gray-300">
                    <CheckCircle2 size={13} className="text-emerald-500" />
                    <span>Stakeholder Engagement (Principals & Teachers)</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-700 dark:text-gray-300">
                    <CheckCircle2 size={13} className="text-emerald-500" />
                    <span>Organizational Execution & Support</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-black/[0.06] dark:border-white/[0.08]">
                {['Innovation', 'Leadership', 'Coordination', 'Communication', 'Event Execution'].map(t => (
                  <span key={t} className="px-3 py-1 rounded-lg bg-black/[0.04] dark:bg-white/[0.04] border border-black/[0.08] dark:border-white/[0.08] text-xs font-mono text-slate-800 dark:text-cream font-medium">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>

          </div>
        )}

      </div>
    </section>
  );
}
