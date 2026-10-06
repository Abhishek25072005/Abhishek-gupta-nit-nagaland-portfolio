import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Printer, 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  GraduationCap, 
  Briefcase, 
  Award, 
  Cpu, 
  CheckCircle2,
  FileText
} from 'lucide-react';
import { sound } from '../utils/soundEffects';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    sound.playClick();
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="bg-white dark:bg-dark-900 border border-black/[0.1] dark:border-white/[0.15] rounded-3xl w-full max-w-4xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden my-auto"
        >
          {/* Modal Header Actions */}
          <div className="no-print p-4 sm:p-5 bg-slate-50 dark:bg-dark-950/90 border-b border-black/[0.08] dark:border-white/[0.1] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-3 h-3 rounded-full bg-cherry-500 animate-pulse" />
              <span className="font-mono text-xs sm:text-sm text-slate-900 dark:text-cream font-bold">
                DOCUMENT PREVIEW // RESUME_ABHISHEK_GUPTA.PDF
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="px-4 py-2 rounded-xl bg-cherry-600 hover:bg-cherry-500 text-white font-mono text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-cherry-sm"
              >
                <Printer size={14} />
                <span>Print / Save PDF</span>
              </button>

              <button
                onClick={() => {
                  sound.playClick();
                  onClose();
                }}
                className="p-2 rounded-xl bg-black/[0.05] dark:bg-white/[0.05] hover:bg-black/10 dark:hover:bg-white/10 text-slate-700 dark:text-gray-300 transition-colors"
                aria-label="Close resume preview"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Printable Document Body */}
          <div className="p-6 sm:p-10 overflow-y-auto bg-white dark:bg-dark-950 text-slate-800 dark:text-cream resume-printable custom-scrollbar space-y-8 font-sans">
            
            {/* 1. Header */}
            <div className="border-b border-black/[0.1] dark:border-white/[0.1] pb-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
              <div>
                <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
                  ABHISHEK GUPTA
                </h1>
                <p className="text-cherry-600 dark:text-cherry-400 font-mono text-xs sm:text-sm mt-1 font-semibold">
                  Electrical & Electronics Engineering Student | AI/ML Enthusiast | Technology Builder
                </p>
                <p className="text-slate-600 dark:text-gray-400 text-xs mt-1">
                  National Institute of Technology Nagaland
                </p>
              </div>

              <div className="flex flex-col text-xs font-mono text-slate-600 dark:text-gray-300 space-y-1">
                <div className="flex items-center gap-2">
                  <Mail size={13} className="text-cherry-500" />
                  <span>deepak9956gupta@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={13} className="text-cherry-500" />
                  <span>+91 7408282385</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={13} className="text-cherry-500" />
                  <span>Nagaland, India</span>
                </div>
              </div>
            </div>

            {/* 2. Education */}
            <div>
              <h2 className="text-sm font-mono text-cherry-600 dark:text-cherry-400 font-bold uppercase tracking-wider mb-3 flex items-center gap-2">
                <GraduationCap size={16} />
                <span>Education</span>
              </h2>
              
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">National Institute of Technology Nagaland</h3>
                    <p className="text-xs text-slate-600 dark:text-gray-300">B.Tech in Electrical & Electronics Engineering</p>
                  </div>
                  <div className="sm:text-right">
                    <span className="font-mono text-xs font-bold text-cherry-600 dark:text-cherry-400 bg-cherry-500/10 px-2.5 py-1 rounded-md border border-cherry-500/20">
                      CGPA: 9.11
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">Jawahar Navodaya Vidyalaya, Maharajganj</h3>
                    <p className="text-xs text-slate-600 dark:text-gray-300">CBSE Secondary & Senior Secondary</p>
                  </div>
                  <div className="flex gap-3 sm:text-right font-mono text-xs">
                    <span className="bg-black/[0.04] dark:bg-white/[0.05] px-2.5 py-1 rounded text-slate-800 dark:text-gray-200">Class 12: <strong>76.2%</strong></span>
                    <span className="bg-black/[0.04] dark:bg-white/[0.05] px-2.5 py-1 rounded text-slate-800 dark:text-gray-200">Class 10: <strong>88.4%</strong></span>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Projects */}
            <div>
              <h2 className="text-sm font-mono text-cherry-600 dark:text-cherry-400 font-bold uppercase tracking-wider mb-3 flex items-center gap-2">
                <Briefcase size={16} />
                <span>Engineering Projects & Practical Exposure</span>
              </h2>

              <div className="space-y-4">
                {/* Cyber Security */}
                <div className="p-4 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.06]">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">Cyber Security Threat Detection</h3>
                    <span className="font-mono text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold">Active / Ongoing Project</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-gray-300 mb-2 leading-relaxed">
                    Developed a machine learning system to classify network activity data in real time into malicious, benign, and suspicious categories.
                  </p>
                  <p className="text-[11px] font-mono text-slate-500 dark:text-gray-400">
                    Technologies: Python, Machine Learning, Cybersecurity, Data Analysis, Classification
                  </p>
                </div>

                {/* Robotic Manipulator */}
                <div className="p-4 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.06]">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">AI-Assisted Robotic Manipulator for Opencast Mining Explosive Handling</h3>
                    <span className="font-mono text-[11px] text-cherry-600 dark:text-cherry-400 font-semibold">Working on Development</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-gray-300 mb-2 leading-relaxed">
                    Working on the development of an AI-assisted robotic manipulator for safe remote explosive handling in opencast mining environments, mitigating human hazard through computer vision and teleoperation.
                  </p>
                  <p className="text-[11px] font-mono text-slate-500 dark:text-gray-400">
                    Technologies: Robotics, AI/ML, Robotic Manipulator, Computer Vision, Teleoperation, Mining Safety
                  </p>
                </div>

                {/* Smart Meter */}
                <div className="p-4 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.06]">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1">Smart Electric Meter Control System</h3>
                  <p className="text-xs text-slate-600 dark:text-gray-300 mb-2 leading-relaxed">
                    Developed a prototype system to monitor and control electricity usage, with a focus on improving energy monitoring and efficiency.
                  </p>
                  <p className="text-[11px] font-mono text-slate-500 dark:text-gray-400">
                    Technologies: Electrical Engineering, Energy Monitoring, Control Systems, Automation
                  </p>
                </div>

                {/* RC Car */}
                <div className="p-4 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.06]">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1">Remote Controlled Car</h3>
                  <p className="text-xs text-slate-600 dark:text-gray-300 mb-2 leading-relaxed">
                    Designed and built a remote-controlled vehicle using wireless communication, implementing control mechanisms for movement and steering.
                  </p>
                  <p className="text-[11px] font-mono text-slate-500 dark:text-gray-400">
                    Technologies: Wireless Communication, Control Systems, Embedded Systems, Hardware
                  </p>
                </div>
              </div>
            </div>

            {/* 4. Skills */}
            <div>
              <h2 className="text-sm font-mono text-cherry-600 dark:text-cherry-400 font-bold uppercase tracking-wider mb-3 flex items-center gap-2">
                <Cpu size={16} />
                <span>Technical Skills</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-lg bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.06]">
                  <span className="font-mono text-slate-500 dark:text-gray-400 block mb-1">Programming:</span>
                  <span className="text-slate-900 dark:text-white font-medium">C, C++, Python</span>
                </div>
                <div className="p-3 rounded-lg bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.06]">
                  <span className="font-mono text-slate-500 dark:text-gray-400 block mb-1">Web Technologies:</span>
                  <span className="text-slate-900 dark:text-white font-medium">HTML, CSS</span>
                </div>
                <div className="p-3 rounded-lg bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.06]">
                  <span className="font-mono text-slate-500 dark:text-gray-400 block mb-1">Engineering / Technical Tools:</span>
                  <span className="text-slate-900 dark:text-white font-medium">Multisim, MATLAB, FreeCAD</span>
                </div>
                <div className="p-3 rounded-lg bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.06]">
                  <span className="font-mono text-slate-500 dark:text-gray-400 block mb-1">Microsoft Office:</span>
                  <span className="text-slate-900 dark:text-white font-medium">Microsoft Word, PowerPoint (Proficient), Excel (Basic)</span>
                </div>
              </div>
            </div>

            {/* 5. Achievements */}
            <div>
              <h2 className="text-sm font-mono text-cherry-600 dark:text-cherry-400 font-bold uppercase tracking-wider mb-3 flex items-center gap-2">
                <Award size={16} />
                <span>Achievements & Honors</span>
              </h2>

              <ul className="space-y-2 text-xs text-slate-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-cherry-500 font-bold">●</span>
                  <span><strong>Mathematical Contest (1st Rank):</strong> Secured 1st rank in a mathematical contest held at college.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold">●</span>
                  <span><strong>Cyber Security Threat Detection (Active Project):</strong> Ongoing innovation building a real-time network anomaly classification system.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 font-bold">●</span>
                  <span><strong>Technical Competitions:</strong> Won multiple technical events in college competitions.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cherry-500 font-bold">●</span>
                  <span><strong>Badminton (2nd Place):</strong> Secured second place in the Badminton Intra-NIT Competition.</span>
                </li>
              </ul>
            </div>

            {/* 6. Workshops & Responsibilities */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div>
                <h3 className="font-mono text-xs text-cherry-600 dark:text-cherry-400 font-bold uppercase mb-2">
                  Workshops & Technical Bootcamps
                </h3>
                <ul className="space-y-1.5 text-xs text-slate-700 dark:text-gray-300">
                  <li>• <strong>Drone Bootcamp 2.1:</strong> 5-Day Bootcamp organized by NILIEIT (Multirotor UAV Assembly).</li>
                  <li>• <strong>3D Printing Bootcamp:</strong> 4-Day Bootcamp by NIT Nagaland & CTTC Bhubaneswar instructors.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-mono text-xs text-cherry-600 dark:text-cherry-400 font-bold uppercase mb-2">
                  Positions & Responsibility
                </h3>
                <ul className="space-y-1.5 text-xs text-slate-700 dark:text-gray-300">
                  <li>• <strong>Co-Organizer — PUBG Event:</strong> NIT Nagaland (logistics, participant coordination).</li>
                  <li>• <strong>Volunteer — Innovation Bootcamp:</strong> PM SHRI Schools (bootcamp assistance for principals & teachers).</li>
                </ul>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
