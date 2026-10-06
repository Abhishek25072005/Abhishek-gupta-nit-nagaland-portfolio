import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Globe, 
  Cpu, 
  FileSpreadsheet, 
  Terminal, 
  Binary, 
  CheckCircle2, 
  Layers, 
  Sparkles,
  Bot
} from 'lucide-react';
import { sound } from '../utils/soundEffects';

const skillCategories = [
  {
    id: 'programming',
    title: 'Programming',
    subtitle: 'Core algorithmic and systems engineering languages',
    icon: Code2,
    skills: [
      { name: 'C', levelTag: 'System Foundations', note: 'Hardware-level control, algorithms, low-level memory logic' },
      { name: 'C++', levelTag: 'OOP & Performance', note: 'High-performance computing, modular structures, data structures' },
      { name: 'Python', levelTag: 'Data & Machine Learning', note: 'Machine learning pipelines, network packet classification, scripting' }
    ]
  },
  {
    id: 'web',
    title: 'Web Technologies',
    subtitle: 'Standards-compliant web markup and presentation',
    icon: Globe,
    skills: [
      { name: 'HTML', levelTag: 'Semantic Structure', note: 'Document structuring, accessible layouts, web standards' },
      { name: 'CSS', levelTag: 'Styling & Layouts', note: 'Responsive design, modern styling architectures, visual hierarchies' }
    ]
  },
  {
    id: 'engineering',
    title: 'Engineering / Technical Tools',
    subtitle: 'Simulation, modeling, and scientific computation',
    icon: Cpu,
    skills: [
      { name: 'Multisim', levelTag: 'Circuit Simulation', note: 'Schematic capture, SPICE simulation, analog/digital circuit validation' },
      { name: 'MATLAB', levelTag: 'Mathematical Modeling', note: 'Numerical analysis, signal processing, algorithm modeling' },
      { name: 'FreeCAD', levelTag: 'Parametric 3D CAD', note: 'Mechanical part design, enclosure modeling, 3D printing preparation' }
    ]
  },
  {
    id: 'office',
    title: 'Microsoft Office',
    subtitle: 'Technical documentation and data organization',
    icon: FileSpreadsheet,
    skills: [
      { name: 'Microsoft Word', levelTag: 'Documentation', note: 'Technical report authoring, academic publications, formal project writeups' },
      { name: 'PowerPoint', levelTag: 'Proficient', note: 'Technical presentation design, project defense, architecture walkthroughs' },
      { name: 'Excel', levelTag: 'Basic', note: 'Tabular data management, academic spreadsheets, basic calculation workflows' }
    ]
  }
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const displayedCategories = activeCategory === 'all' 
    ? skillCategories 
    : skillCategories.filter(c => c.id === activeCategory);

  return (
    <section id="skills" className="py-28 relative px-4 sm:px-8 lg:px-16 z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/[0.04] dark:bg-white/[0.04] border border-black/[0.08] dark:border-white/[0.08] text-cherry-600 dark:text-cherry-400 font-mono text-xs tracking-widest uppercase mb-3">
            <span>03 // CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-cream tracking-tight">
            Technical Arsenal & Tooling
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cherry-500 to-rose-600 rounded-full mt-4" />
          <p className="text-slate-600 dark:text-gray-400 max-w-2xl mt-4 text-sm sm:text-base leading-relaxed">
            Verified technical skillsets across engineering simulation, core programming, web fundamentals, and technical tooling.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => {
              sound.playClick();
              setActiveCategory('all');
            }}
            onMouseEnter={() => sound.playHover()}
            className={`px-4 py-1.5 rounded-xl text-xs font-mono tracking-wider transition-all ${
              activeCategory === 'all'
                ? 'bg-cherry-600 text-white shadow-cherry-sm font-bold'
                : 'bg-white/70 dark:bg-dark-900/60 border border-black/[0.08] dark:border-white/[0.08] text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            All Disciplines
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                sound.playClick();
                setActiveCategory(cat.id);
              }}
              onMouseEnter={() => sound.playHover()}
              className={`px-4 py-1.5 rounded-xl text-xs font-mono tracking-wider transition-all ${
                activeCategory === cat.id
                  ? 'bg-cherry-600 text-white shadow-cherry-sm font-bold'
                  : 'bg-white/70 dark:bg-dark-900/60 border border-black/[0.08] dark:border-white/[0.08] text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Skill Clusters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayedCategories.map((category, catIdx) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIdx * 0.1 }}
                className="glass-card p-6 sm:p-8 rounded-3xl relative overflow-hidden group hover:-translate-y-1 transition-all duration-300"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-black/[0.04] dark:bg-dark-950/80 border border-black/[0.08] dark:border-white/[0.1] flex items-center justify-center text-cherry-500 group-hover:text-white group-hover:bg-cherry-600 transition-all duration-300">
                      <Icon size={22} />
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-bold text-slate-900 dark:text-cream group-hover:text-cherry-600 dark:group-hover:text-cherry-300 transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-gray-400 font-mono">
                        {category.subtitle}
                      </p>
                    </div>
                  </div>
                  <span className="font-mono text-[10px] text-slate-500 dark:text-gray-400 px-2 py-0.5 rounded bg-black/[0.04] dark:bg-white/[0.04]">
                    {category.skills.length} TOOLS
                  </span>
                </div>

                {/* Glowing Skill Chips & Clusters */}
                <div className="space-y-3.5">
                  {category.skills.map((skill) => {
                    const isHovered = hoveredSkill === skill.name;
                    return (
                      <div
                        key={skill.name}
                        onMouseEnter={() => {
                          sound.playHover();
                          setHoveredSkill(skill.name);
                        }}
                        onMouseLeave={() => setHoveredSkill(null)}
                        className={`p-3.5 rounded-2xl border transition-all duration-200 cursor-default ${
                          isHovered 
                            ? 'bg-black/[0.06] dark:bg-white/[0.06] border-cherry-500/50 shadow-cherry-sm translate-x-1' 
                            : 'bg-black/[0.02] dark:bg-dark-950/60 border-black/[0.06] dark:border-white/[0.06] hover:border-black/20 dark:hover:border-white/20'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-cherry-500" />
                            <span className="font-display font-bold text-base text-slate-900 dark:text-cream">
                              {skill.name}
                            </span>
                          </div>
                          
                          {/* Qualitative Level Tag */}
                          <span className={`text-[10px] font-mono px-2 py-0.5 rounded-md border ${
                            skill.levelTag === 'Proficient' 
                              ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-600 dark:text-emerald-300 font-semibold' 
                              : skill.levelTag === 'Basic'
                              ? 'bg-amber-500/10 border-amber-500/30 text-amber-600 dark:text-amber-300'
                              : 'bg-black/[0.04] dark:bg-white/[0.04] border-black/[0.08] dark:border-white/[0.1] text-slate-700 dark:text-gray-300'
                          }`}>
                            {skill.levelTag}
                          </span>
                        </div>
                        
                        <p className="text-xs text-slate-600 dark:text-gray-400 leading-relaxed pl-4">
                          {skill.note}
                        </p>
                      </div>
                    );
                  })}
                </div>

                <div className="absolute bottom-2 right-4 font-mono text-[9px] text-slate-400 dark:text-gray-500 tracking-widest uppercase">
                  VERIFIED_RESUME_SKILL
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Note on Authenticity */}
        <div className="mt-12 text-center">
          <p className="text-xs font-mono text-slate-600 dark:text-gray-400 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-dark-900/60 border border-black/[0.06] dark:border-white/[0.06]">
            <CheckCircle2 size={13} className="text-emerald-500" />
            <span>Strictly verified toolsets based on authoritative engineering coursework & project execution.</span>
          </p>
        </div>

      </div>
    </section>
  );
}
