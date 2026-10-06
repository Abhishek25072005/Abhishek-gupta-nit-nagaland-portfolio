import React, { useState, useEffect } from 'react';
import { motion, animate } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  GraduationCap, 
  Bot, 
  ShieldCheck, 
  Zap, 
  Car, 
  Lightbulb, 
  Award, 
  Sparkles, 
  Cpu, 
  Radio, 
  Binary, 
  CheckCircle2,
  Activity
} from 'lucide-react';
import { sound } from '../utils/soundEffects';

const Counter = ({ from = 0, to, duration = 2, decimals = 0, suffix = "" }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [value, setValue] = useState(from);

  useEffect(() => {
    if (inView) {
      const controls = animate(from, to, {
        duration,
        ease: 'easeOut',
        onUpdate(v) {
          setValue(v);
        }
      });
      return () => controls.stop();
    }
  }, [from, to, duration, inView]);

  return <span ref={ref}>{value.toFixed(decimals)}{suffix}</span>;
};

const cardsData = [
  {
    icon: GraduationCap,
    title: "Electrical Engineering Student",
    badge: "NIT Nagaland",
    desc: "Rigorous training in circuit theory, electrical machines, and modern control systems backed by a 9.11 CGPA.",
    accent: "from-rose-500/20 to-cherry-600/10",
    border: "border-cherry-500/30"
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity Developer",
    badge: "Active / Ongoing",
    desc: "Architecting machine learning pipelines to classify network activity data in real-time into malicious, benign, and suspicious threat tiers.",
    accent: "from-cherry-600/20 to-rose-700/10",
    border: "border-cherry-500/30"
  },
  {
    icon: Bot,
    title: "Robotics & AI Explorer",
    badge: "Hazard Safety",
    desc: "Working on development of an AI-assisted robotic manipulator for safe remote explosive handling in opencast mining environments.",
    accent: "from-purple-500/20 to-indigo-600/10",
    border: "border-purple-500/30"
  },
  {
    icon: Zap,
    title: "Electrical Systems",
    badge: "Energy",
    desc: "Designing prototypes for smart metering and energy monitoring to enhance efficiency and power control.",
    accent: "from-amber-500/20 to-orange-600/10",
    border: "border-amber-500/30"
  },
  {
    icon: Car,
    title: "Hardware Builder",
    badge: "Prototyping",
    desc: "Hands-on integration of wireless RC vehicles, UAV drone assembly, robotic manipulators, and 3D printing.",
    accent: "from-blue-500/20 to-cyan-600/10",
    border: "border-blue-500/30"
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    badge: "Analytical",
    desc: "1st Rank Mathematical Contest holder tackling complex algorithmic and practical engineering challenges.",
    accent: "from-emerald-500/20 to-teal-600/10",
    border: "border-emerald-500/30"
  }
];

const interestsList = [
  { label: "AI / Machine Learning", icon: Bot },
  { label: "Cybersecurity (Active Project)", icon: ShieldCheck },
  { label: "Robotic Manipulators (Mining Safety)", icon: Activity },
  { label: "Electrical Systems", icon: Cpu },
  { label: "Embedded Systems", icon: Binary },
  { label: "Wireless Communication", icon: Radio },
  { label: "Robotics / Remote-Controlled Systems", icon: Car },
  { label: "Engineering Innovation", icon: Lightbulb },
];

export default function About() {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <section id="about" className="py-28 relative px-4 sm:px-8 lg:px-16 z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/[0.04] dark:bg-white/[0.04] border border-black/[0.08] dark:border-white/[0.08] text-cherry-600 dark:text-cherry-400 font-mono text-xs tracking-widest uppercase mb-3">
            <span>01 // IDENTITY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-cream tracking-tight">
            Engineering Beyond the Classroom
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cherry-500 to-rose-600 rounded-full mt-4" />
          <p className="text-slate-600 dark:text-gray-400 max-w-2xl mt-4 text-sm sm:text-base leading-relaxed">
            Where foundational electrical principles meet applied software intelligence and practical hardware realization.
          </p>
        </div>

        {/* Narrative & Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          {/* Biography Narrative */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-card p-8 rounded-3xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-cherry-500/10 rounded-full blur-2xl pointer-events-none" />
            
            <h3 className="text-xl sm:text-2xl font-display font-semibold text-slate-900 dark:text-cream mb-4 flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-cherry-500" />
              Bridging Theory & Practical Systems
            </h3>
            
            <p className="text-slate-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
              I am an <strong className="text-slate-900 dark:text-cream font-semibold">Electrical & Electronics Engineering student at National Institute of Technology Nagaland</strong> with a relentless passion for building functional, high-impact systems. Maintaining a strong academic track record with a <strong className="text-cherry-600 dark:text-cherry-400 font-semibold">9.11 CGPA</strong>, I translate analytical theory into real-world technological solutions.
            </p>

            <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
              My engineering journey is driven by practical execution—including an <strong className="text-emerald-600 dark:text-emerald-400 font-semibold">ongoing Cyber Security Threat Detection project</strong> classifying activity traffic into malicious, benign, and suspicious tiers, developing an <strong className="text-cherry-600 dark:text-cherry-400 font-semibold">AI-assisted robotic manipulator for safe remote explosive handling in opencast mining</strong>, wireless remote-controlled vehicles, and smart electric metering.
            </p>

            {/* Interest Tags */}
            <div className="pt-2 border-t border-black/[0.08] dark:border-white/[0.08]">
              <span className="text-xs font-mono text-slate-500 dark:text-gray-400 uppercase tracking-wider block mb-3">
                Core Domains of Interest & Execution:
              </span>
              <div className="flex flex-wrap gap-2">
                {interestsList.map((item, idx) => (
                  <span 
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black/[0.03] dark:bg-white/[0.03] border border-black/[0.08] dark:border-white/[0.08] text-xs font-medium text-slate-700 dark:text-gray-300 hover:border-cherry-500/40 hover:text-cherry-600 dark:hover:text-cream transition-colors"
                  >
                    <item.icon size={13} className="text-cherry-500" />
                    <span>{item.label}</span>
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Key Facts Highlight Box */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col gap-4"
          >
            <div className="glass-card p-6 rounded-2xl border border-cherry-500/20 relative">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-cherry-500/20 text-cherry-500">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-cream">Active Research & Development</h4>
                  <p className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold">Cyber Security Threat Classification (In Progress)</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 dark:text-gray-400 mt-2 leading-relaxed">
                Actively training machine learning algorithms to categorize real-time data packets into malicious, benign, and suspicious threat tiers for autonomous incident response.
              </p>
            </div>

            <div className="glass-card p-6 rounded-2xl">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs text-slate-500 dark:text-gray-400">FOUNDATIONAL SCHOOLING</span>
                <span className="text-xs px-2 py-0.5 rounded bg-black/[0.04] dark:bg-white/[0.05] text-slate-700 dark:text-gray-300 font-mono">CBSE</span>
              </div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-cream">Jawahar Navodaya Vidyalaya, Maharajganj</h4>
              <div className="grid grid-cols-2 gap-3 mt-3 pt-3 border-t border-black/[0.06] dark:border-white/[0.06]">
                <div>
                  <div className="text-[11px] font-mono text-slate-500 dark:text-gray-400">Class 10 Score</div>
                  <div className="text-base font-bold text-slate-900 dark:text-cream">88.4%</div>
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-500 dark:text-gray-400">Class 12 Score</div>
                  <div className="text-base font-bold text-slate-900 dark:text-cream">76.2%</div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* 6 Interactive Information Cards */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <h3 className="text-lg font-mono text-slate-500 dark:text-gray-400 uppercase tracking-widest">
              // Multi-Disciplinary Roles & Archetypes
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cardsData.map((card, idx) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08, duration: 0.5 }}
                  onMouseEnter={() => {
                    sound.playHover();
                    setActiveCard(idx);
                  }}
                  onMouseLeave={() => setActiveCard(null)}
                  className={`glass-card p-6 rounded-2xl transition-all duration-300 relative overflow-hidden group cursor-default ${
                    activeCard === idx 
                      ? `${card.border} shadow-cherry-sm -translate-y-1.5` 
                      : 'hover:border-cherry-500/40'
                  }`}
                >
                  <div className="relative z-10 flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-black/[0.04] dark:bg-dark-950/80 border border-black/[0.08] dark:border-white/[0.1] flex items-center justify-center text-cherry-500 group-hover:text-white group-hover:bg-cherry-600 transition-all duration-300 shadow-md">
                      <Icon size={22} />
                    </div>
                    <span className="font-mono text-[11px] px-2.5 py-1 rounded-full bg-black/[0.04] dark:bg-white/[0.04] border border-black/[0.08] dark:border-white/[0.08] text-slate-600 dark:text-gray-400 group-hover:text-slate-900 dark:group-hover:text-cream transition-colors">
                      {card.badge}
                    </span>
                  </div>

                  <h4 className="relative z-10 text-lg font-display font-bold text-slate-900 dark:text-cream group-hover:text-cherry-600 dark:group-hover:text-cherry-300 transition-colors mb-2">
                    {card.title}
                  </h4>
                  <p className="relative z-10 text-xs sm:text-sm text-slate-600 dark:text-gray-400 leading-relaxed group-hover:text-slate-700 dark:group-hover:text-gray-300 transition-colors">
                    {card.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Animated Statistics Bar (SIH replaced with Cyber Security ongoing) */}
        <div className="glass-card p-8 rounded-3xl shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 tech-grid-bg opacity-15 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-2 md:grid-cols-5 gap-6 divide-y md:divide-y-0 md:divide-x divide-black/[0.08] dark:divide-white/[0.08]">
            
            {/* Stat 1: 9.11 CGPA */}
            <div className="flex flex-col items-center text-center px-4 py-2">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-cherry-600 dark:text-cherry-400 drop-shadow-sm">
                <Counter from={0} to={9.11} decimals={2} duration={1.8} />
              </div>
              <div className="font-mono text-xs font-semibold text-slate-900 dark:text-cream mt-2">Cumulative CGPA</div>
              <div className="text-[11px] text-slate-500 dark:text-gray-400 mt-0.5">NIT Nagaland Academic Merit</div>
            </div>

            {/* Stat 2: 4+ Projects */}
            <div className="flex flex-col items-center text-center px-4 py-2 pt-4 md:pt-2">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-slate-900 dark:text-cream">
                <Counter from={0} to={4} suffix="+" duration={1.5} />
              </div>
              <div className="font-mono text-xs font-semibold text-slate-900 dark:text-cream mt-2">Engineered Systems</div>
              <div className="text-[11px] text-slate-500 dark:text-gray-400 mt-0.5">AI, Robotics & Energy</div>
            </div>

            {/* Stat 3: 1st Rank */}
            <div className="flex flex-col items-center text-center px-4 py-2 pt-4 md:pt-2">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-amber-500 dark:text-amber-400">
                1st Rank
              </div>
              <div className="font-mono text-xs font-semibold text-slate-900 dark:text-cream mt-2">Mathematical Contest</div>
              <div className="text-[11px] text-slate-500 dark:text-gray-400 mt-0.5">Held at College Level</div>
            </div>

            {/* Stat 4: Cyber Security (Ongoing Project - Replaced SIH) */}
            <div className="flex flex-col items-center text-center px-4 py-2 pt-4 md:pt-2">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-emerald-600 dark:text-emerald-400">
                Active ML
              </div>
              <div className="font-mono text-xs font-semibold text-slate-900 dark:text-cream mt-2">Cyber Security</div>
              <div className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold mt-0.5">Threat Detection Ongoing</div>
            </div>

            {/* Stat 5: Multiple Wins */}
            <div className="col-span-2 md:col-span-1 flex flex-col items-center text-center px-4 py-2 pt-4 md:pt-2">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-purple-600 dark:text-purple-400">
                Multiple
              </div>
              <div className="font-mono text-xs font-semibold text-slate-900 dark:text-cream mt-2">Tech Competitions</div>
              <div className="text-[11px] text-slate-500 dark:text-gray-400 mt-0.5">College Technical Wins</div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
