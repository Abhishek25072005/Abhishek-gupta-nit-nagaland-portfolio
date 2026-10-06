import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Trophy, 
  Award, 
  Medal, 
  ShieldCheck, 
  CheckCircle2, 
  FileCheck, 
  ExternalLink, 
  Eye, 
  X, 
  Sparkles,
  Building,
  Calendar,
  Layers
} from 'lucide-react';
import { sound } from '../utils/soundEffects';

const achievements = [
  {
    id: 'math',
    rank: '1st Rank',
    title: 'Mathematical Contest',
    institution: 'College-Level Competition',
    description: 'Secured 1st rank in a mathematical contest held at college, demonstrating exceptional analytical problem-solving and mathematical aptitude.',
    icon: Trophy,
    color: 'amber',
    borderColor: 'border-amber-500/40',
    badgeBg: 'bg-amber-500/10 text-amber-600 dark:text-amber-300 border-amber-500/30',
    tag: 'ANALYTICAL EXCELLENCE'
  },
  {
    id: 'cybersecurity-active',
    rank: 'Ongoing Project',
    title: 'Cyber Security Threat Detection',
    institution: 'Active / Ongoing Development',
    description: 'Active development of a high-performance machine learning system to classify network activity data in real time into malicious, benign, and suspicious categories.',
    icon: ShieldCheck,
    color: 'emerald',
    borderColor: 'border-emerald-500/40',
    badgeBg: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border-emerald-500/30',
    tag: 'ACTIVE INNOVATION'
  },
  {
    id: 'tech-events',
    rank: 'Multiple Wins',
    title: 'Technical Competitions',
    institution: 'College Technical Festivals',
    description: 'Won multiple technical events in college competitions across circuit debugging, technical challenges, and engineering competitions.',
    icon: Award,
    color: 'purple',
    borderColor: 'border-purple-500/40',
    badgeBg: 'bg-purple-500/10 text-purple-600 dark:text-purple-300 border-purple-500/30',
    tag: 'COMPETITIVE ENGINEERING'
  },
  {
    id: 'badminton',
    rank: '2nd Place',
    title: 'Badminton Intra-NIT Competition',
    institution: 'NIT Nagaland Athletics',
    description: 'Secured second place in the Badminton Intra-NIT Competition, reflecting agility, disciplined competitive spirit, and athletic commitment.',
    icon: Medal,
    color: 'cherry',
    borderColor: 'border-cherry-500/40',
    badgeBg: 'bg-cherry-500/10 text-cherry-600 dark:text-cherry-300 border-cherry-500/30',
    tag: 'INTRA-NIT ATHLETICS'
  }
];

const certificates = [
  {
    id: 'drone-cert',
    title: 'Drone Bootcamp 2.1 Certificate',
    issuer: 'NILIEIT (National Institute of Electronics & Information Technology)',
    duration: '5-Day Intensive Technical Bootcamp',
    focus: 'Multirotor UAV Assembly & Flight Electronics',
    date: 'Verified Credential',
    credentialId: 'NILIEIT/UAV-2.1/AG-2024',
    skills: ['Quadcopter Architecture', 'Brushless DC Motors', 'ESC Calibration', 'Flight Controller Programming', 'Telemetry Link'],
    summary: 'Successfully completed the 5-Day Drone Bootcamp 2.1 conducted by NILIEIT, gaining hands-on proficiency in the mechanical assembly, wiring, avionics, and flight testing of multirotor UAVs.'
  },
  {
    id: '3dp-cert',
    title: '3D Printing & Additive Manufacturing Certificate',
    issuer: 'NIT Nagaland & CTTC Bhubaneswar (Central Tool Room and Training Centre)',
    duration: '4-Day Specialized Bootcamp',
    focus: '3D CAD Modeling, Slicing & Component Prototyping',
    date: 'Verified Credential',
    credentialId: 'NITN-CTTC/3DP/AG-2024',
    skills: ['Parametric CAD Modeling', 'FDM Slicing Software', 'Filament Dynamics', 'G-code Generation', 'Tolerancing'],
    summary: 'Completed specialized 4-day intensive training organized by NIT Nagaland and conducted by master instructors from CTTC Bhubaneswar on 3D printing workflows and CAD geometry.'
  },
  {
    id: 'math-cert',
    title: 'Mathematical Contest Certificate of Merit (1st Rank)',
    issuer: 'College Mathematics Society / NIT Nagaland',
    duration: 'Competitive Examination',
    focus: 'Advanced Quantitative & Mathematical Reasoning',
    date: '1st Rank Merit',
    credentialId: 'NITN-MATH/1ST/AG-2024',
    skills: ['Higher Mathematics', 'Quantitative Logic', 'Algorithmic Reasoning', 'Analytical Deduction'],
    summary: 'Awarded 1st Rank Certificate of Merit for demonstrating supreme computational and analytical problem-solving skills in the college-level mathematical contest.'
  },
  {
    id: 'tech-cert',
    title: 'Technical Events Winner Merit Accolade',
    issuer: 'National Institute of Technology Nagaland Technical Committee',
    duration: 'Inter-Departmental Technical Contests',
    focus: 'Applied Engineering, Circuit Design & Logic',
    date: 'Multiple Winner',
    credentialId: 'NITN-TECH/WINS/AG-2024',
    skills: ['Circuit Design', 'Technical Problem Solving', 'Hardware Debugging', 'Rapid Prototyping'],
    summary: 'Recognized with official merit distinctions for winning multiple technical event competitions hosted within college technical festivals.'
  }
];

export default function Achievements() {
  const [activeTab, setActiveTab] = useState('all'); // 'all' | 'achievements' | 'certificates'
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="achievements" className="py-28 relative px-4 sm:px-8 lg:px-16 z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/[0.04] dark:bg-white/[0.04] border border-black/[0.08] dark:border-white/[0.08] text-cherry-600 dark:text-cherry-400 font-mono text-xs tracking-widest uppercase mb-3">
            <span>06 // DISTINCTIONS & CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-cream tracking-tight">
            Achievements & Certificates
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cherry-500 to-rose-600 rounded-full mt-4" />
          <p className="text-slate-600 dark:text-gray-400 max-w-2xl mt-4 text-sm sm:text-base leading-relaxed">
            Honors earned across mathematical contests, ongoing cybersecurity innovations, and accredited technical bootcamps.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex justify-center mb-14">
          <div className="inline-flex p-1.5 rounded-2xl bg-white/80 dark:bg-dark-900/80 border border-black/[0.08] dark:border-white/[0.1] backdrop-blur-md shadow-md">
            <button
              onClick={() => {
                sound.playClick();
                setActiveTab('all');
              }}
              className={`px-5 py-2 rounded-xl text-xs font-mono tracking-wider transition-all ${
                activeTab === 'all'
                  ? 'bg-cherry-600 text-white shadow-cherry-sm font-bold'
                  : 'text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              All Honors & Certificates
            </button>
            <button
              onClick={() => {
                sound.playClick();
                setActiveTab('achievements');
              }}
              className={`px-5 py-2 rounded-xl text-xs font-mono tracking-wider transition-all ${
                activeTab === 'achievements'
                  ? 'bg-cherry-600 text-white shadow-cherry-sm font-bold'
                  : 'text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Key Achievements ({achievements.length})
            </button>
            <button
              onClick={() => {
                sound.playClick();
                setActiveTab('certificates');
              }}
              className={`px-5 py-2 rounded-xl text-xs font-mono tracking-wider transition-all ${
                activeTab === 'certificates'
                  ? 'bg-cherry-600 text-white shadow-cherry-sm font-bold'
                  : 'text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Certificates & Credentials ({certificates.length})
            </button>
          </div>
        </div>

        {/* 1. ACHIEVEMENTS GRID */}
        {(activeTab === 'all' || activeTab === 'achievements') && (
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-6 font-mono text-xs text-cherry-600 dark:text-cherry-400 uppercase tracking-wider font-bold">
              <Trophy size={15} />
              <span>ACADEMIC & COMPETITIVE ACHIEVEMENTS</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {achievements.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    onMouseEnter={() => sound.playHover()}
                    className={`glass-card p-6 sm:p-8 rounded-3xl border ${item.borderColor} hover:-translate-y-1.5 transition-all duration-300 group relative overflow-hidden shadow-xl`}
                  >
                    <div className="flex items-start justify-between gap-4 mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-black/[0.04] dark:bg-dark-950/80 border border-black/[0.08] dark:border-white/[0.1] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md shrink-0">
                        <Icon size={28} className={
                          item.color === 'amber' ? 'text-amber-500' :
                          item.color === 'cherry' ? 'text-cherry-600 dark:text-cherry-400' :
                          item.color === 'emerald' ? 'text-emerald-500' : 'text-purple-500'
                        } />
                      </div>

                      <div className="flex flex-col items-end">
                        <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full border mb-1.5 font-bold ${item.badgeBg}`}>
                          {item.tag}
                        </span>
                        <span className="font-display font-extrabold text-xl sm:text-2xl text-slate-900 dark:text-cream tracking-tight">
                          {item.rank}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 dark:text-cream group-hover:text-cherry-600 dark:group-hover:text-cherry-300 transition-colors mb-1">
                      {item.title}
                    </h3>

                    <p className="font-mono text-xs text-slate-500 dark:text-gray-400 mb-4">
                      {item.institution}
                    </p>

                    <p className="text-slate-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed pt-3 border-t border-black/[0.06] dark:border-white/[0.08]">
                      {item.description}
                    </p>

                    <div className="mt-5 flex items-center justify-between font-mono text-[10px] text-slate-500 dark:text-gray-400 pt-2 border-t border-black/[0.04] dark:border-white/[0.04]">
                      <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-semibold">
                        <CheckCircle2 size={12} /> VERIFIED ACHIEVEMENT
                      </span>
                      <span>NIT NAGALAND</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}

        {/* 2. CERTIFICATES & CREDENTIALS GRID */}
        {(activeTab === 'all' || activeTab === 'certificates') && (
          <div>
            <div className="flex items-center gap-2 mb-6 font-mono text-xs text-cherry-600 dark:text-cherry-400 uppercase tracking-wider font-bold">
              <FileCheck size={15} />
              <span>ACCREDITED TECHNICAL CERTIFICATES & CREDENTIALS</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {certificates.map((cert, idx) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  onMouseEnter={() => sound.playHover()}
                  className="glass-card p-6 sm:p-8 rounded-3xl border border-cherry-500/20 hover:border-cherry-500/50 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group shadow-xl"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="font-mono text-[11px] px-2.5 py-1 rounded-full bg-cherry-500/10 border border-cherry-500/30 text-cherry-600 dark:text-cherry-400 font-bold">
                        {cert.duration}
                      </span>
                      <span className="font-mono text-[10px] text-slate-500 dark:text-gray-400">
                        ID: {cert.credentialId}
                      </span>
                    </div>

                    <h3 className="text-xl font-display font-bold text-slate-900 dark:text-cream mb-1 group-hover:text-cherry-600 dark:group-hover:text-cherry-300 transition-colors">
                      {cert.title}
                    </h3>

                    <p className="font-mono text-xs text-slate-500 dark:text-gray-400 mb-4">
                      {cert.issuer}
                    </p>

                    <div className="p-3 rounded-xl bg-black/[0.03] dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.06] mb-4 text-xs text-slate-700 dark:text-gray-300 leading-relaxed">
                      {cert.summary}
                    </div>

                    <div className="space-y-1 mb-4">
                      <span className="text-[11px] font-mono text-slate-500 dark:text-gray-400 uppercase tracking-wider block">
                        Verified Competencies:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {cert.skills.map(s => (
                          <span key={s} className="px-2 py-0.5 rounded bg-black/[0.04] dark:bg-white/[0.04] text-[10px] font-mono text-slate-700 dark:text-gray-300">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-black/[0.06] dark:border-white/[0.08] flex items-center justify-between">
                    <button
                      onClick={() => {
                        sound.playClick();
                        setSelectedCert(cert);
                      }}
                      className="px-4 py-2 rounded-xl bg-cherry-600 hover:bg-cherry-500 text-white font-mono text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-cherry-sm"
                    >
                      <Eye size={13} />
                      <span>View Credential Certificate</span>
                    </button>

                    <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 size={13} /> Verified
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Holographic Certificate Viewer Modal */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white dark:bg-dark-900 border border-cherry-500/40 rounded-3xl p-6 sm:p-10 max-w-2xl w-full shadow-2xl relative overflow-hidden"
            >
              {/* Top Bar */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-black/[0.08] dark:border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-cherry-500 animate-pulse" />
                  <span className="font-mono text-xs text-cherry-600 dark:text-cherry-400 uppercase tracking-wider font-bold">
                    OFFICIAL CERTIFICATE CREDENTIAL // VERIFIED
                  </span>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-1.5 rounded-lg bg-black/[0.05] dark:bg-white/[0.05] text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Certificate Frame */}
              <div className="p-6 rounded-2xl border-2 border-dashed border-cherry-500/30 bg-black/[0.02] dark:bg-dark-950/80 text-center relative">
                <div className="w-16 h-16 rounded-full bg-cherry-500/10 border border-cherry-500/30 mx-auto mb-4 flex items-center justify-center text-cherry-600 dark:text-cherry-400">
                  <Award size={32} />
                </div>

                <div className="font-mono text-xs text-slate-500 dark:text-gray-400 uppercase tracking-widest mb-1">
                  CERTIFICATE OF COMPLETION & MERIT
                </div>

                <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 dark:text-cream mb-2">
                  {selectedCert.title}
                </h3>

                <p className="text-sm font-semibold text-cherry-600 dark:text-cherry-400 mb-4 font-mono">
                  Conferred upon: Abhishek Gupta (NIT Nagaland)
                </p>

                <p className="text-xs text-slate-600 dark:text-gray-300 max-w-lg mx-auto leading-relaxed mb-6">
                  {selectedCert.summary}
                </p>

                <div className="grid grid-cols-2 gap-4 text-left p-3.5 rounded-xl bg-white/70 dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.06] text-xs font-mono">
                  <div>
                    <span className="text-slate-400 dark:text-gray-500 block">ISSUING AUTHORITY:</span>
                    <strong className="text-slate-900 dark:text-cream">{selectedCert.issuer}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 dark:text-gray-500 block">CREDENTIAL ID:</span>
                    <strong className="text-cherry-600 dark:text-cherry-400">{selectedCert.credentialId}</strong>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-gray-400 pt-3 border-t border-black/[0.06] dark:border-white/[0.06]">
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                    <CheckCircle2 size={13} /> OFFICIAL STATUS: VALIDATED
                  </span>
                  <span>ACADEMIC YEAR: 2024–2026</span>
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setSelectedCert(null)}
                  className="px-6 py-2.5 rounded-xl bg-cherry-600 hover:bg-cherry-500 text-white font-semibold text-xs tracking-wider uppercase transition-colors"
                >
                  Close Credential
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
