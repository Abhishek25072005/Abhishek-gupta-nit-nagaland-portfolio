import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Cpu, 
  Radio, 
  Zap, 
  Layers, 
  Terminal, 
  CheckCircle2, 
  Bot, 
  Activity 
} from 'lucide-react';
import { sound } from '../utils/soundEffects';

const experiences = [
  {
    id: 'cybersecurity-dev',
    title: 'Cyber Security Threat Detection',
    role: 'Project Developer (Ongoing)',
    period: 'Active Project Initiative',
    category: 'AI & Cybersecurity',
    description: 'Developed and actively advancing a machine learning classification system to classify activity data into malicious, benign, and suspicious categories.',
    deliverables: [
      'Processed high-dimensional network telemetry and extracted discriminating packet entropy signatures.',
      'Constructed machine learning classification models capable of identifying malicious vs. legitimate network flows.',
      'Implemented suspicious-activity categorization to isolate ambiguous packet patterns for deeper inspection.',
      'Continuously benchmarking model performance and inference latency for near real-time operational effectiveness.'
    ],
    technologies: ['Python', 'Machine Learning', 'Data Analysis', 'Threat Classification'],
    icon: ShieldCheck,
    accent: 'cherry'
  },
  {
    id: 'engineering-dev',
    title: 'Engineering & Hardware Development',
    role: 'Hardware & Systems Builder',
    period: 'Practical Hardware Exposure',
    category: 'Robotics, Embedded & Electrical',
    description: 'Hands-on design, circuit assembly, and testing of practical robotics, wireless teleoperation, and electrical metering prototypes.',
    subProjects: [
      {
        title: 'AI Robotic Manipulator for Mining Safety',
        icon: Bot,
        desc: 'Working on development of a remote robotic manipulator for safe explosive handling in opencast mining environments using vision and multi-axis articulation.'
      },
      {
        title: 'Remote-Controlled Vehicle',
        icon: Radio,
        desc: 'Implemented wireless RF communication protocols, steering servos, and H-bridge motor driver circuits for responsive movement.'
      },
      {
        title: 'Smart Electric Meter Control',
        icon: Zap,
        desc: 'Constructed an energy monitoring prototype to track electricity consumption in real time and evaluate energy efficiency.'
      }
    ],
    deliverables: [
      'Engineered physical hardware prototypes bridging electronic sensors with electromechanical actuators.',
      'Tested and debugged analog/digital circuit boards, power delivery rails, and control interfaces.',
      'Implemented fail-safe mechanisms and response timing loops in hardware circuits.'
    ],
    technologies: ['Robotics', 'Sensors', 'Automation', 'Control Circuits', 'Embedded Systems', 'Wireless RF'],
    icon: Cpu,
    accent: 'indigo'
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-28 relative px-4 sm:px-8 lg:px-16 z-10">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/[0.04] dark:bg-white/[0.04] border border-black/[0.08] dark:border-white/[0.08] text-cherry-600 dark:text-cherry-400 font-mono text-xs tracking-widest uppercase mb-3">
            <span>04 // TIMELINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-cream tracking-tight">
            Practical Experience & Projects
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cherry-500 to-rose-600 rounded-full mt-4" />
          <p className="text-slate-600 dark:text-gray-400 max-w-2xl mt-4 text-sm sm:text-base leading-relaxed">
            Applied engineering development focused on machine learning classification systems, mining safety robotics, and tangible hardware prototyping.
          </p>
        </div>

        {/* Futuristic Vertical Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 sm:-translate-x-1/2 bg-black/[0.1] dark:bg-white/[0.1]">
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              className="w-full bg-gradient-to-b from-cherry-500 via-rose-500 to-cyber-indigo shadow-cherry-sm"
            />
          </div>

          <div className="space-y-16">
            {experiences.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              const Icon = exp.icon;
              return (
                <div key={exp.id} className="relative flex flex-col sm:flex-row items-start group">
                  
                  {/* Timeline Glowing Node */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-0 z-20 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-white dark:bg-dark-950 border-2 border-cherry-500 flex items-center justify-center shadow-cherry-sm group-hover:scale-110 group-hover:shadow-cherry-glow transition-all duration-300">
                      <Icon size={18} className="text-cherry-500" />
                    </div>
                  </div>

                  {/* Content Card */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className={`ml-12 sm:ml-0 sm:w-[45%] ${
                      isEven ? 'sm:mr-auto sm:pr-8' : 'sm:ml-auto sm:pl-8'
                    }`}
                  >
                    <div className="glass-card p-6 sm:p-8 rounded-3xl border border-black/[0.08] dark:border-white/[0.08] hover:border-cherry-500/40 transition-all duration-300 group-hover:-translate-y-1 shadow-xl">
                      
                      {/* Card Header */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="font-mono text-xs text-cherry-600 dark:text-cherry-400 font-semibold px-2.5 py-0.5 rounded-full bg-cherry-500/10 border border-cherry-500/20">
                          {exp.role}
                        </span>
                        <span className="font-mono text-[11px] text-slate-500 dark:text-gray-400">
                          {exp.category}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 dark:text-cream mb-2 group-hover:text-cherry-600 dark:group-hover:text-cherry-300 transition-colors">
                        {exp.title}
                      </h3>

                      <p className="text-slate-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      {/* Sub-projects list */}
                      {exp.subProjects && (
                        <div className="space-y-3 mb-5 pt-3 border-t border-black/[0.08] dark:border-white/[0.08]">
                          <span className="text-xs font-mono text-slate-500 dark:text-gray-400 uppercase tracking-wider block">
                            Key Integrated Systems:
                          </span>
                          {exp.subProjects.map((sub, sI) => {
                            const SubIcon = sub.icon;
                            return (
                              <div key={sI} className="p-3 rounded-xl bg-black/[0.03] dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.06] flex items-start gap-3">
                                <div className="p-2 rounded-lg bg-black/[0.05] dark:bg-dark-950 text-cherry-500 shrink-0">
                                  <SubIcon size={14} />
                                </div>
                                <div>
                                  <h4 className="text-xs font-bold text-slate-900 dark:text-cream">{sub.title}</h4>
                                  <p className="text-[11px] text-slate-600 dark:text-gray-400 mt-0.5 leading-snug">{sub.desc}</p>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}

                      {/* Deliverables */}
                      <div className="space-y-2 mb-5 pt-2 border-t border-black/[0.08] dark:border-white/[0.08]">
                        <span className="text-xs font-mono text-slate-500 dark:text-gray-400 uppercase tracking-wider block mb-2">
                          Core Contributions:
                        </span>
                        {exp.deliverables.map((del, dI) => (
                          <div key={dI} className="flex items-start gap-2 text-xs text-slate-700 dark:text-gray-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-cherry-500 mt-1.5 shrink-0" />
                            <span>{del}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Chips */}
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-black/[0.08] dark:border-white/[0.08]">
                        {exp.technologies.map(t => (
                          <span key={t} className="px-2.5 py-1 rounded bg-black/[0.04] dark:bg-white/[0.04] border border-black/[0.08] dark:border-white/[0.08] text-[11px] font-mono text-slate-700 dark:text-gray-400">
                            {t}
                          </span>
                        ))}
                      </div>

                    </div>
                  </motion.div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
