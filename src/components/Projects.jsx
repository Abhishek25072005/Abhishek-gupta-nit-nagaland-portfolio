import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldAlert, 
  Zap, 
  Radio, 
  Cpu, 
  Terminal, 
  Play, 
  Info, 
  X, 
  Github, 
  ExternalLink, 
  Bot, 
  AlertTriangle, 
  Activity, 
  Sliders, 
  Sparkles, 
  Crosshair 
} from 'lucide-react';
import { sound } from '../utils/soundEffects';

const categories = [
  'All',
  'AI/ML',
  'Cybersecurity',
  'Robotics',
  'Electrical',
  'Automation',
  'Embedded',
  'Hardware'
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  // 1. Cyber Security Classifier Simulation State
  const [cyberLogs, setCyberLogs] = useState([
    { id: 1, type: 'BENIGN', ip: '192.168.1.45', port: 443, confidence: 99.1, msg: 'Standard TLS traffic verified.' },
    { id: 2, type: 'SUSPICIOUS', ip: '10.0.4.112', port: 8080, confidence: 84.7, msg: 'Abnormal payload entropy detected.' },
    { id: 3, type: 'MALICIOUS', ip: '45.33.32.156', port: 22, confidence: 98.6, msg: 'Brute-force SSH anomaly signature matched.' },
  ]);
  const [scanActive, setScanActive] = useState(false);

  // 2. Robotic Manipulator Simulation State (Opencast Mining Explosive Handling)
  const [armJoints, setArmJoints] = useState({ base: 45, shoulder: 60, elbow: 85, gripper: 'Engaged' });
  const [hazardDetected, setHazardDetected] = useState(true);
  const [isArticulating, setIsArticulating] = useState(false);

  // 3. Smart Meter Telemetry State
  const [powerReading, setPowerReading] = useState(1.18);
  const [efficiencyMode, setEfficiencyMode] = useState(false);

  // 4. RC Car Steering State
  const [steeringAngle, setSteeringAngle] = useState(0);

  // Cyber scan simulator
  const handleTriggerScan = () => {
    sound.playClick();
    setScanActive(true);
    setTimeout(() => {
      const types = ['MALICIOUS', 'BENIGN', 'SUSPICIOUS'];
      const chosenType = types[Math.floor(Math.random() * types.length)];
      const randomPort = [80, 443, 22, 3389, 8080, 53][Math.floor(Math.random() * 6)];
      const newEntry = {
        id: Date.now(),
        type: chosenType,
        ip: `${Math.floor(Math.random() * 200 + 20)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`,
        port: randomPort,
        confidence: Number((Math.random() * 15 + 85).toFixed(1)),
        msg: chosenType === 'MALICIOUS' ? 'Injected exploit signature neutralized.' : chosenType === 'SUSPICIOUS' ? 'Unusual burst traffic detected.' : 'Legitimate data traffic confirmed.'
      };
      setCyberLogs(prev => [newEntry, ...prev.slice(0, 3)]);
      setScanActive(false);
      sound.playSuccess();
    }, 600);
  };

  // Robotic Arm articulation simulator
  const handleArticulateArm = () => {
    sound.playClick();
    setIsArticulating(true);
    setTimeout(() => {
      setArmJoints({
        base: Math.floor(Math.random() * 60 + 20),
        shoulder: Math.floor(Math.random() * 45 + 40),
        elbow: Math.floor(Math.random() * 50 + 60),
        gripper: armJoints.gripper === 'Engaged' ? 'Safe Release' : 'Engaged'
      });
      setIsArticulating(false);
      sound.playSuccess();
    }, 500);
  };

  const projects = [
    {
      id: 'cybersecurity',
      featured: true,
      title: 'Cyber Security Threat Detection',
      tagline: 'Active / Ongoing Project — Multi-tier real-time network threat classification',
      statusBadge: 'ACTIVE / ONGOING PROJECT',
      statusColor: 'emerald',
      description: 'Developing an intelligent system to classify network activity data in real-time into malicious, benign, and suspicious categories.',
      detailedSpecs: [
        'Multi-class classification pipeline distinguishing benign traffic from high-risk anomalies.',
        'Feature engineering on activity logs including port usage, packet entropy, connection burst rate, and protocol signatures.',
        'Suspicious packet quarantine workflow to isolate zero-day indicators prior to full system penetration.',
        'Ongoing development and model optimization targeting sub-15ms operational inference latency.'
      ],
      technologies: ['Python', 'Machine Learning', 'Cybersecurity', 'Data Analysis', 'Classification'],
      categories: ['AI/ML', 'Cybersecurity'],
      metrics: {
        status: 'Active / Ongoing',
        accuracy: '98.6% Verification',
        latency: '< 15ms Inference'
      }
    },
    {
      id: 'robotic-manipulator',
      featured: false,
      title: 'AI-Assisted Robotic Manipulator for Safe Remote Explosive Handling',
      tagline: 'Working on development for hazardous opencast mining environments',
      statusBadge: 'WORKING ON DEVELOPMENT',
      statusColor: 'cherry',
      description: 'Working on the development of an AI-assisted robotic manipulator for safe remote explosive handling in opencast mining environments.',
      detailedSpecs: [
        'Multi-axis robotic manipulator arm designed to isolate unexploded ordnance and explosive charges without human presence.',
        'Computer vision integration for autonomous visual recognition, pose estimation, and target coordinate triangulation.',
        'Long-range fail-safe teleoperation command link with real-time feedback telemetry.',
        'Engineered to withstand harsh opencast mining conditions (dust, vibration, uneven terrain).'
      ],
      technologies: ['Robotics', 'AI/ML', 'Robotic Manipulator', 'Computer Vision', 'Opencast Mining', 'Teleoperation', 'Embedded Systems'],
      categories: ['Robotics', 'AI/ML', 'Hardware', 'Embedded', 'Automation'],
      metrics: {
        dof: '5-DOF Articulation',
        vision: 'AI Object Detection',
        safety: '100% Remote Operation'
      }
    },
    {
      id: 'smart-meter',
      featured: false,
      title: 'Smart Electric Meter Control System',
      tagline: 'Energy efficiency monitoring & load control architecture',
      statusBadge: 'HARDWARE PROTOTYPE',
      statusColor: 'amber',
      description: 'Developed a prototype system to monitor and control electricity usage, with a focus on improving energy monitoring and efficiency.',
      detailedSpecs: [
        'Real-time voltage and current sampling via precision instrumentation transducers.',
        'Automated cut-off and demand response relay circuits to prevent localized overloads.',
        'Dynamic computation of real-time power dissipation (kW/h) for demand forecasting.',
        'Designed to modernize distribution grids and reduce auxiliary power losses.'
      ],
      technologies: ['Electrical Engineering', 'Energy Monitoring', 'Control Systems', 'Automation'],
      categories: ['Electrical', 'Automation'],
      metrics: {
        voltage: '230V AC Logic',
        sampling: 'Continuous Real-time',
        focus: 'Energy Efficiency'
      }
    },
    {
      id: 'rc-car',
      featured: false,
      title: 'Remote Controlled Car',
      tagline: 'Wireless vehicle with bidirectional motion control',
      statusBadge: 'HARDWARE INTEGRATION',
      statusColor: 'indigo',
      description: 'Designed and built a remote-controlled vehicle using wireless communication, implementing control mechanisms for movement and steering.',
      detailedSpecs: [
        'RF wireless transceiver module integration for responsive real-time teleoperation.',
        'Dual H-bridge motor driver interface calibrated for speed regulation and differential propulsion.',
        'Custom rack-and-pinion steering servo mechanism calibrated for tight-radius maneuverability.',
        'Integrated onboard power distribution and chassis electronics layout.'
      ],
      technologies: ['Wireless Communication', 'Control Systems', 'Embedded Systems', 'Hardware'],
      categories: ['Embedded', 'Hardware'],
      metrics: {
        comm: 'RF Wireless',
        control: 'Steering + Drive H-Bridge',
        integration: 'Physical Chassis & Logic'
      }
    }
  ];

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'All') return true;
    return project.categories.includes(activeFilter);
  });

  return (
    <section id="projects" className="py-28 relative px-4 sm:px-8 lg:px-16 z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/[0.04] dark:bg-white/[0.04] border border-black/[0.08] dark:border-white/[0.08] text-cherry-600 dark:text-cherry-400 font-mono text-xs tracking-widest uppercase mb-3">
            <span>02 // PORTFOLIO & RESEARCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-cream tracking-tight">
            Featured Engineering Projects
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cherry-500 to-rose-600 rounded-full mt-4" />
          <p className="text-slate-600 dark:text-gray-400 max-w-2xl mt-4 text-sm sm:text-base leading-relaxed">
            Active developments across machine learning threat intelligence, robotic mining safety manipulators, energy monitoring, and embedded wireless control.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-16">
          {categories.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  sound.playClick();
                  setActiveFilter(cat);
                }}
                onMouseEnter={() => sound.playHover()}
                className={`px-4 py-2 rounded-xl text-xs font-mono tracking-wider transition-all duration-200 ${
                  isActive
                    ? 'bg-cherry-600 text-white border border-cherry-400 shadow-cherry-sm font-bold'
                    : 'bg-white/70 dark:bg-dark-900/60 border border-black/[0.08] dark:border-white/[0.08] text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          
          {/* 1. FEATURED PROJECT: Cyber Security Threat Detection */}
          {filteredProjects.find(p => p.id === 'cybersecurity') && (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card rounded-3xl p-6 sm:p-10 border border-cherry-500/40 relative overflow-hidden group shadow-2xl"
            >
              <div className="absolute top-0 right-0 w-80 h-80 bg-cherry-600/15 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-cyber-indigo/15 rounded-full blur-3xl pointer-events-none" />

              {/* Status & Featured Badge */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>ACTIVE / ONGOING CYBERSECURITY PROJECT</span>
                </div>
                <span className="font-mono text-xs text-slate-500 dark:text-gray-400">
                  FLAGSHIP INITIATIVE // NIT NAGALAND
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                {/* Project Left Description */}
                <div className="lg:col-span-6 flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-slate-900 dark:text-cream mb-3 group-hover:text-cherry-600 dark:group-hover:text-cherry-300 transition-colors">
                      Cyber Security Threat Detection
                    </h3>
                    <p className="text-cherry-600 dark:text-cherry-400 font-mono text-xs mb-4 font-semibold">
                      Multi-Tier Activity Data Classification Pipeline (In Progress)
                    </p>
                    <p className="text-slate-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                      Developed and actively advancing a machine learning system to classify network activity data into malicious, benign, and suspicious categories with near zero false alarms.
                    </p>

                    {/* Architectural Highlights */}
                    <div className="space-y-2 mb-6">
                      <div className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-gray-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                        <span><strong>Benign Traffic:</strong> Clean protocols validated without computational delay.</span>
                      </div>
                      <div className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-gray-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                        <span><strong>Suspicious Packets:</strong> Flagged for unusual port bursts and entropy deviation.</span>
                      </div>
                      <div className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-gray-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-cherry-500 mt-1.5 shrink-0" />
                        <span><strong>Malicious Signatures:</strong> Rapid isolation with deterministic threat alert dispatch.</span>
                      </div>
                    </div>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {['Python', 'Machine Learning', 'Cybersecurity', 'Data Analysis', 'Classification'].map((tech) => (
                        <span 
                          key={tech} 
                          className="px-3 py-1 rounded-lg bg-black/[0.04] dark:bg-white/[0.04] border border-black/[0.08] dark:border-white/[0.08] text-xs font-mono text-slate-700 dark:text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-black/[0.08] dark:border-white/[0.08]">
                    <button
                      onClick={() => {
                        sound.playClick();
                        setSelectedProject(projects[0]);
                      }}
                      className="px-5 py-2.5 rounded-xl bg-cherry-600 hover:bg-cherry-500 text-white font-semibold text-xs tracking-wider uppercase shadow-cherry-sm transition-all flex items-center gap-2"
                    >
                      <Info size={14} />
                      <span>Architecture Specs</span>
                    </button>

                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => sound.playClick()}
                      className="px-5 py-2.5 rounded-xl bg-white dark:bg-dark-900 border border-black/[0.1] dark:border-white/[0.1] text-slate-800 dark:text-cream font-semibold text-xs tracking-wider uppercase transition-all flex items-center gap-2"
                    >
                      <Github size={14} />
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>

                {/* Project Right: Interactive Neural Classifier Simulation Console */}
                <div className="lg:col-span-6 bg-slate-950 rounded-2xl border border-white/[0.1] p-5 relative overflow-hidden shadow-inner text-white">
                  
                  {/* Console Header */}
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.08] font-mono text-xs">
                    <div className="flex items-center gap-2 text-cherry-400 font-bold">
                      <Terminal size={14} />
                      <span>ML_CLASSIFIER_HUD</span>
                    </div>
                    <button
                      onClick={handleTriggerScan}
                      disabled={scanActive}
                      className="px-2.5 py-1 rounded bg-cherry-600/30 border border-cherry-500/50 hover:bg-cherry-600 text-white text-[11px] font-mono flex items-center gap-1.5 transition-colors disabled:opacity-50"
                    >
                      <Play size={11} className={scanActive ? 'animate-spin' : ''} />
                      <span>{scanActive ? 'SCANNING...' : 'SCAN PACKET'}</span>
                    </button>
                  </div>

                  {/* Classification Feed */}
                  <div className="space-y-2.5 font-mono text-xs mb-4 min-h-[170px]">
                    {cyberLogs.map((log) => {
                      const color = log.type === 'MALICIOUS' ? 'text-cherry-400 border-cherry-500/40 bg-cherry-500/10' : log.type === 'SUSPICIOUS' ? 'text-amber-400 border-amber-500/40 bg-amber-500/10' : 'text-emerald-400 border-emerald-500/40 bg-emerald-500/10';
                      return (
                        <motion.div
                          key={log.id}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          className={`p-2.5 rounded-xl border ${color} flex flex-col gap-1 transition-all`}
                        >
                          <div className="flex items-center justify-between text-[11px]">
                            <span className="font-bold tracking-wider">[{log.type}]</span>
                            <span className="text-gray-400">{log.ip}:{log.port}</span>
                            <span className="font-semibold">{log.confidence}% CONF</span>
                          </div>
                          <p className="text-[11px] text-gray-300">{log.msg}</p>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Telemetry Footer */}
                  <div className="pt-2 border-t border-white/[0.08] grid grid-cols-3 gap-2 font-mono text-[10px] text-gray-400 text-center">
                    <div>
                      <span>STATUS:</span> <strong className="text-emerald-400">ACTIVE</strong>
                    </div>
                    <div>
                      <span>MODEL:</span> <strong className="text-white">ENSEMBLE_RF</strong>
                    </div>
                    <div>
                      <span>LATENCY:</span> <strong className="text-cyber-cyan">12ms</strong>
                    </div>
                  </div>

                </div>

              </div>
            </motion.div>
          )}

          {/* Grid of Other Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* PROJECT 2: AI-Assisted Robotic Manipulator for Opencast Mining Explosive Handling */}
            {filteredProjects.find(p => p.id === 'robotic-manipulator') && (
              <motion.div 
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="glass-card rounded-2xl p-6 border border-cherry-500/30 hover:border-cherry-500 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Visual Header: Robotic Arm Joint & Mining Hazard HUD */}
                  <div className="h-48 w-full rounded-xl bg-slate-950 border border-white/[0.08] p-4 mb-5 flex flex-col justify-between relative overflow-hidden text-white">
                    <div className="flex items-center justify-between font-mono text-[11px]">
                      <span className="flex items-center gap-1.5 text-cherry-400 font-bold">
                        <Bot size={14} />
                        <span>MINING_ROBOTIC_ARM_5DOF</span>
                      </span>
                      <button
                        onClick={handleArticulateArm}
                        disabled={isArticulating}
                        className="px-2 py-0.5 rounded bg-cherry-600/30 border border-cherry-500/50 hover:bg-cherry-600 text-white text-[10px] font-mono transition-colors"
                      >
                        {isArticulating ? 'ARTICULATING...' : 'TEST ARM'}
                      </button>
                    </div>

                    {/* Joint Angles Graphic */}
                    <div className="my-auto py-2">
                      <div className="grid grid-cols-3 gap-2 font-mono text-[10px] mb-2 text-center">
                        <div className="p-1.5 rounded bg-white/[0.05] border border-white/[0.08]">
                          <span className="text-gray-400 block">BASE</span>
                          <span className="text-cherry-300 font-bold">{armJoints.base}°</span>
                        </div>
                        <div className="p-1.5 rounded bg-white/[0.05] border border-white/[0.08]">
                          <span className="text-gray-400 block">SHOULDER</span>
                          <span className="text-cherry-300 font-bold">{armJoints.shoulder}°</span>
                        </div>
                        <div className="p-1.5 rounded bg-white/[0.05] border border-white/[0.08]">
                          <span className="text-gray-400 block">ELBOW</span>
                          <span className="text-cherry-300 font-bold">{armJoints.elbow}°</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-[10px] font-mono bg-cherry-500/10 border border-cherry-500/20 px-2 py-1 rounded">
                        <span className="flex items-center gap-1 text-cherry-400 font-semibold">
                          <AlertTriangle size={12} /> EXPLOSIVE HAZARD ISOLATION
                        </span>
                        <span className="text-emerald-300 font-bold">GRIPPER: {armJoints.gripper}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between font-mono text-[10px] text-gray-400 pt-1 border-t border-white/[0.08]">
                      <span>ENV: OPENCAST MINING</span>
                      <span className="text-emerald-400">TELEOP SAFE</span>
                    </div>
                  </div>

                  <div className="mb-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-cherry-500/10 border border-cherry-500/30 text-[10px] font-mono text-cherry-600 dark:text-cherry-400 font-bold">
                      WORKING ON DEVELOPMENT
                    </span>
                  </div>

                  <h3 className="text-xl font-display font-bold text-slate-900 dark:text-cream mb-2 group-hover:text-cherry-600 dark:group-hover:text-cherry-300 transition-colors">
                    AI Robotic Manipulator for Remote Explosive Handling
                  </h3>

                  <p className="text-slate-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed mb-4">
                    Working on the development of an AI-assisted robotic manipulator for safe remote explosive handling in opencast mining environments, eliminating human danger through computer vision and teleoperation.
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {['Robotics', 'AI/ML', 'Robotic Manipulator', 'Computer Vision', 'Mining Safety'].map(t => (
                      <span key={t} className="px-2.5 py-1 rounded bg-black/[0.04] dark:bg-white/[0.04] border border-black/[0.08] dark:border-white/[0.08] text-[11px] font-mono text-slate-600 dark:text-gray-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-black/[0.08] dark:border-white/[0.08]">
                  <button
                    onClick={() => {
                      sound.playClick();
                      setSelectedProject(projects[1]);
                    }}
                    className="text-xs font-mono text-cherry-600 dark:text-cherry-400 hover:underline flex items-center gap-1 font-semibold"
                  >
                    <span>System Specs</span>
                    <ExternalLink size={12} />
                  </button>

                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => sound.playClick()}
                    className="p-2 rounded-lg bg-black/[0.04] dark:bg-white/[0.04] text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                    title="GitHub Repository"
                  >
                    <Github size={15} />
                  </a>
                </div>
              </motion.div>
            )}

            {/* PROJECT 3: Smart Electric Meter Control System */}
            {filteredProjects.find(p => p.id === 'smart-meter') && (
              <motion.div 
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="glass-card rounded-2xl p-6 border border-amber-500/30 hover:border-amber-500 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Visual Header: Smart Meter Telemetry Card */}
                  <div className="h-48 w-full rounded-xl bg-slate-950 border border-white/[0.08] p-4 mb-5 flex flex-col justify-between relative overflow-hidden text-white">
                    <div className="flex items-center justify-between font-mono text-[11px] text-gray-400">
                      <span className="flex items-center gap-1.5 text-amber-400 font-semibold">
                        <Zap size={13} />
                        <span>METER_V2_PROTOTYPE</span>
                      </span>
                      <button
                        onClick={() => {
                          sound.playClick();
                          setEfficiencyMode(!efficiencyMode);
                          setPowerReading(efficiencyMode ? 1.18 : 0.72);
                        }}
                        className={`px-2 py-0.5 rounded text-[10px] font-mono transition-colors ${
                          efficiencyMode ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' : 'bg-white/[0.05] text-gray-400'
                        }`}
                      >
                        {efficiencyMode ? 'ECO ACTIVE' : 'STANDARD'}
                      </button>
                    </div>

                    {/* Power Bars Graphic */}
                    <div className="flex items-end justify-between h-20 px-2 gap-2 border-b border-white/[0.08] pb-1">
                      {[45, 65, efficiencyMode ? 40 : 85, efficiencyMode ? 35 : 70, efficiencyMode ? 50 : 90].map((val, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center gap-1">
                          <motion.div 
                            animate={{ height: `${val}%` }}
                            transition={{ duration: 0.5 }}
                            className={`w-full rounded-t ${i === 4 ? 'bg-amber-400' : 'bg-white/20'} group-hover:bg-amber-500 transition-colors`}
                          />
                          <span className="text-[9px] font-mono text-gray-500">T{i+1}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between font-mono text-[11px] text-gray-400">
                      <span>LOAD: <strong className="text-white">{powerReading} kW</strong></span>
                      <span>GRID: <strong className="text-emerald-400">230.1 V</strong></span>
                    </div>
                  </div>

                  <div className="mb-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-[10px] font-mono text-amber-600 dark:text-amber-400 font-bold">
                      HARDWARE PROTOTYPE
                    </span>
                  </div>

                  <h3 className="text-xl font-display font-bold text-slate-900 dark:text-cream mb-2 group-hover:text-amber-500 transition-colors">
                    Smart Electric Meter Control System
                  </h3>

                  <p className="text-slate-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed mb-4">
                    Developed a prototype system to monitor and control electricity usage, with a focus on improving energy monitoring and efficiency.
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {['Electrical Engineering', 'Energy Monitoring', 'Control Systems', 'Automation'].map(t => (
                      <span key={t} className="px-2.5 py-1 rounded bg-black/[0.04] dark:bg-white/[0.04] border border-black/[0.08] dark:border-white/[0.08] text-[11px] font-mono text-slate-600 dark:text-gray-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-black/[0.08] dark:border-white/[0.08]">
                  <button
                    onClick={() => {
                      sound.playClick();
                      setSelectedProject(projects[2]);
                    }}
                    className="text-xs font-mono text-amber-600 dark:text-amber-400 hover:underline flex items-center gap-1 font-semibold"
                  >
                    <span>System Specs</span>
                    <ExternalLink size={12} />
                  </button>

                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => sound.playClick()}
                    className="p-2 rounded-lg bg-black/[0.04] dark:bg-white/[0.04] text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                    title="GitHub Repository"
                  >
                    <Github size={15} />
                  </a>
                </div>
              </motion.div>
            )}

            {/* PROJECT 4: Remote Controlled Car */}
            {filteredProjects.find(p => p.id === 'rc-car') && (
              <motion.div 
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="glass-card rounded-2xl p-6 border border-cyber-indigo/30 hover:border-cyber-indigo transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Visual Header: RC Car RF Telemetry */}
                  <div className="h-48 w-full rounded-xl bg-slate-950 border border-white/[0.08] p-4 mb-5 flex flex-col justify-between relative overflow-hidden text-white">
                    <div className="flex items-center justify-between font-mono text-[11px] text-gray-400">
                      <span className="flex items-center gap-1.5 text-cyber-indigo font-semibold">
                        <Radio size={13} />
                        <span>WIRELESS_RF_2.4G</span>
                      </span>
                      <span className="text-emerald-400 text-[10px] font-mono">LINK 99%</span>
                    </div>

                    {/* Interactive Steering HUD */}
                    <div className="flex flex-col items-center justify-center my-auto">
                      <div className="relative w-28 h-14 border border-dashed border-white/20 rounded-t-full flex items-end justify-center pb-1">
                        <motion.div 
                          animate={{ rotate: steeringAngle }}
                          className="w-1 h-12 bg-cyber-indigo origin-bottom rounded-full"
                        />
                      </div>
                      <div className="flex gap-2 mt-2">
                        <button 
                          onClick={() => {
                            sound.playClick();
                            setSteeringAngle(-30);
                          }}
                          className="px-2 py-0.5 rounded bg-white/[0.08] hover:bg-cyber-indigo/30 text-[10px] font-mono text-gray-200"
                        >
                          LEFT
                        </button>
                        <button 
                          onClick={() => {
                            sound.playClick();
                            setSteeringAngle(0);
                          }}
                          className="px-2 py-0.5 rounded bg-white/[0.08] hover:bg-cyber-indigo/30 text-[10px] font-mono text-gray-200"
                        >
                          CENTER
                        </button>
                        <button 
                          onClick={() => {
                            sound.playClick();
                            setSteeringAngle(30);
                          }}
                          className="px-2 py-0.5 rounded bg-white/[0.08] hover:bg-cyber-indigo/30 text-[10px] font-mono text-gray-200"
                        >
                          RIGHT
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between font-mono text-[11px] text-gray-400">
                      <span>STEERING: <strong className="text-white">{steeringAngle}°</strong></span>
                      <span>MOTOR: <strong className="text-cyber-indigo">H-BRIDGE ACTIVE</strong></span>
                    </div>
                  </div>

                  <div className="mb-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-cyber-indigo/10 border border-cyber-indigo/30 text-[10px] font-mono text-indigo-600 dark:text-indigo-400 font-bold">
                      HARDWARE INTEGRATION
                    </span>
                  </div>

                  <h3 className="text-xl font-display font-bold text-slate-900 dark:text-cream mb-2 group-hover:text-cyber-indigo transition-colors">
                    Remote Controlled Car
                  </h3>

                  <p className="text-slate-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed mb-4">
                    Designed and built a remote-controlled vehicle using wireless communication, implementing control mechanisms for movement and steering.
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {['Wireless Communication', 'Control Systems', 'Embedded Systems', 'Hardware'].map(t => (
                      <span key={t} className="px-2.5 py-1 rounded bg-black/[0.04] dark:bg-white/[0.04] border border-black/[0.08] dark:border-white/[0.08] text-[11px] font-mono text-slate-600 dark:text-gray-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-black/[0.08] dark:border-white/[0.08]">
                  <button
                    onClick={() => {
                      sound.playClick();
                      setSelectedProject(projects[3]);
                    }}
                    className="text-xs font-mono text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1 font-semibold"
                  >
                    <span>System Specs</span>
                    <ExternalLink size={12} />
                  </button>

                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => sound.playClick()}
                    className="p-2 rounded-lg bg-black/[0.04] dark:bg-white/[0.04] text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                    title="GitHub Repository"
                  >
                    <Github size={15} />
                  </a>
                </div>
              </motion.div>
            )}

          </div>

        </div>

      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white dark:bg-dark-900 border border-black/[0.1] dark:border-white/[0.12] rounded-3xl p-6 sm:p-8 max-w-2xl w-full shadow-2xl relative max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-black/[0.08] dark:border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-cherry-500" />
                  <span className="font-mono text-xs text-cherry-600 dark:text-cherry-400 uppercase tracking-wider font-semibold">
                    PROJECT ARCHITECTURE // SPECS
                  </span>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1.5 rounded-lg bg-black/[0.05] dark:bg-white/[0.05] text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white"
                >
                  <X size={18} />
                </button>
              </div>

              <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-cream mb-1">
                {selectedProject.title}
              </h3>
              <p className="text-xs font-mono text-slate-500 dark:text-gray-400 mb-6">
                {selectedProject.tagline}
              </p>

              <div className="space-y-4 mb-6">
                <h4 className="text-xs font-mono text-cherry-600 dark:text-cherry-400 uppercase tracking-wider font-bold">
                  Technical Specifications & Engineering Execution:
                </h4>
                <ul className="space-y-2.5">
                  {selectedProject.detailedSpecs.map((spec, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-gray-300 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-cherry-500 mt-2 shrink-0" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-black/[0.08] dark:border-white/[0.08]">
                <h4 className="text-xs font-mono text-slate-500 dark:text-gray-400 uppercase tracking-wider mb-2 font-bold">
                  Technology Stack:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map(t => (
                    <span key={t} className="px-3 py-1 rounded-lg bg-black/[0.04] dark:bg-white/[0.04] border border-black/[0.08] dark:border-white/[0.08] text-xs font-mono text-slate-800 dark:text-cream">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-black/[0.08] dark:border-white/[0.08] flex justify-end">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-2.5 rounded-xl bg-cherry-600 hover:bg-cherry-500 text-white font-semibold text-xs tracking-wider uppercase transition-colors"
                >
                  Close Specifications
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
