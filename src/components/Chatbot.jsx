import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, Sparkles, User, CornerDownLeft } from 'lucide-react';
import { sound } from '../utils/soundEffects';

const knowledgeBase = {
  "who is abhishek": "Abhishek Gupta is an Electrical & Electronics Engineering undergraduate at NIT Nagaland with a 9.11 CGPA. He is passionate about building practical systems across AI, cybersecurity, robotics, and embedded hardware.",
  "about": "Abhishek combines electrical engineering principles with software intelligence. His active work includes real-time machine learning threat classification, developing an AI robotic manipulator for opencast mining explosive safety, and smart energy systems.",
  "education": "Abhishek is pursuing his B.Tech in Electrical & Electronics Engineering at the National Institute of Technology Nagaland with a 9.11 CGPA. Earlier, he attended Jawahar Navodaya Vidyalaya, Maharajganj, scoring 88.4% in Class 10 and 76.2% in Class 12.",
  "cgpa": "Abhishek maintains a 9.11 cumulative CGPA in Electrical & Electronics Engineering at NIT Nagaland.",
  "projects": "His projects include:\n1. Cyber Security Threat Detection (Active / Ongoing ML classifier)\n2. AI-Assisted Robotic Manipulator for Safe Remote Explosive Handling in Opencast Mining Environments (Working on Development)\n3. Smart Electric Meter Control System (Energy monitoring prototype)\n4. Remote Controlled Car (Wireless RF communication & steering).",
  "cybersecurity": "His Cyber Security Threat Detection project is an ongoing initiative developing a machine learning pipeline to classify network activity data in real time into malicious, benign, and suspicious categories with low latency.",
  "robotic manipulator": "He is working on the development of an AI-assisted robotic manipulator designed for safe remote handling and disposal of explosives in hazardous opencast mining environments, mitigating human danger through computer vision and teleoperation.",
  "mining": "The opencast mining project involves developing an AI-assisted robotic manipulator for safe remote explosive handling to eliminate human casualties during blasting and unexploded charge management.",
  "smart meter": "The Smart Electric Meter Control System is a prototype developed to monitor and control electricity usage, focusing on energy efficiency and power optimization.",
  "rc car": "The Remote Controlled Car project involved designing and assembling a remote-controlled vehicle utilizing wireless communication and electromechanical steering mechanisms.",
  "skills": "Abhishek's skills include:\n• Programming: C, C++, Python\n• Web: HTML, CSS\n• Engineering Tools: Multisim, MATLAB, FreeCAD\n• Office: Word, PowerPoint (Proficient), Excel (Basic).",
  "drone": "Abhishek completed the 5-Day Drone Bootcamp 2.1 organized by NILIEIT, specializing in multirotor UAV assembly and flight components.",
  "3d printing": "He completed the 4-Day 3D Printing Bootcamp organized by NIT Nagaland and conducted by CTTC Bhubaneswar instructors on additive manufacturing and CAD geometry.",
  "achievements": "Key distinctions include:\n• 1st Rank in Mathematical Contest at college\n• Active ongoing Cyber Security Threat Detection project\n• Won multiple technical competitions\n• Secured 2nd Place in Badminton Intra-NIT Competition.",
  "certificates": "Verified certificates include Drone Bootcamp 2.1 (NILIEIT), 3D Printing & Additive Manufacturing (NIT Nagaland & CTTC Bhubaneswar), and Mathematical Contest Certificate of Merit (1st Rank).",
  "contact": "You can reach Abhishek directly at:\n📧 Email: deepak9956gupta@gmail.com\n📱 Mobile: +91 7408282385\n📍 Location: Nagaland, India."
};

const suggestedQuestions = [
  "What is Abhishek's CGPA?",
  "Tell me about Cyber Security project",
  "Explain the Mining Robotic Manipulator",
  "Which tools and skills does he know?",
  "What are his certificates & achievements?"
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      sender: 'bot', 
      text: "Greetings! I'm Abhishek's Interactive Portfolio Assistant. Feel free to ask about his engineering projects, CGPA (9.11), mining robotics manipulator, or certificates." 
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, isTyping]);

  const handleSend = (userQuery) => {
    const text = userQuery || input;
    if (!text.trim()) return;

    sound.playClick();
    setMessages(prev => [...prev, { sender: 'user', text }]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const lower = text.toLowerCase();
      let reply = "Abhishek is an Electrical & Electronics Engineering student at NIT Nagaland (9.11 CGPA). You can ask about his projects (Cyber Security, Mining Robotic Manipulator, Smart Meter, RC Car), skills, or contact info!";

      for (const [key, answer] of Object.entries(knowledgeBase)) {
        if (lower.includes(key)) {
          reply = answer;
          break;
        }
      }

      if (lower.includes('internship') || lower.includes('hire') || lower.includes('available')) {
        reply = "Yes! Abhishek is actively open to internships, engineering research, and technology roles. You can contact him at deepak9956gupta@gmail.com or +91 7408282385.";
      } else if (lower.includes('school') || lower.includes('10th') || lower.includes('12th')) {
        reply = "Abhishek completed his schooling at Jawahar Navodaya Vidyalaya, Maharajganj, scoring 88.4% in Class 10 and 76.2% in Class 12.";
      }

      setIsTyping(false);
      setMessages(prev => [...prev, { sender: 'bot', text: reply }]);
      sound.playSuccess();
    }, 600);
  };

  return (
    <>
      {/* Floating Assistant Trigger Button */}
      <button
        onClick={() => {
          sound.playClick();
          setIsOpen(!isOpen);
        }}
        className="fixed bottom-6 right-6 z-40 p-3.5 rounded-2xl bg-white dark:bg-dark-900 border border-cherry-500/50 text-cherry-600 dark:text-cherry-400 hover:text-white hover:bg-cherry-600 shadow-cherry-glow transition-all duration-300 flex items-center gap-2 group"
        title="Interactive Engineering Assistant"
        aria-label="Open portfolio AI assistant"
      >
        <Bot size={22} className="group-hover:rotate-12 transition-transform" />
        <span className="hidden sm:inline font-mono text-xs font-semibold">
          Ask AI
        </span>
        <div className="w-2 h-2 rounded-full bg-cherry-500 animate-ping" />
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 25, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 25, scale: 0.95 }}
            className="fixed bottom-24 right-4 sm:right-6 z-50 w-[92vw] sm:w-[420px] h-[550px] max-h-[80vh] glass-panel border border-black/[0.1] dark:border-white/[0.15] rounded-3xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-slate-50 dark:bg-dark-950/90 border-b border-black/[0.08] dark:border-white/[0.1] flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-cherry-600/20 border border-cherry-500/50 flex items-center justify-center text-cherry-600 dark:text-cherry-400">
                  <Bot size={17} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-cream font-display">
                    Abhishek Portfolio AI
                  </h4>
                  <div className="flex items-center gap-1.5 font-mono text-[10px] text-emerald-600 dark:text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>SYSTEM ONLINE // VERIFIED</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  sound.playClick();
                  setIsOpen(false);
                }}
                className="p-1.5 rounded-lg bg-black/[0.05] dark:bg-white/[0.05] text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white"
              >
                <X size={16} />
              </button>
            </div>

            {/* Messages Scroll Area */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3 font-sans text-xs custom-scrollbar">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-2 ${
                    m.sender === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  {m.sender === 'bot' && (
                    <div className="w-6 h-6 rounded-lg bg-cherry-500/15 text-cherry-600 dark:text-cherry-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Bot size={13} />
                    </div>
                  )}

                  <div
                    className={`max-w-[85%] p-3 rounded-2xl leading-relaxed whitespace-pre-line ${
                      m.sender === 'user'
                        ? 'bg-cherry-600 text-white rounded-tr-sm shadow-cherry-sm'
                        : 'bg-black/[0.03] dark:bg-dark-950/90 border border-black/[0.06] dark:border-white/[0.08] text-slate-800 dark:text-gray-200 rounded-tl-sm'
                    }`}
                  >
                    {m.text}
                  </div>

                  {m.sender === 'user' && (
                    <div className="w-6 h-6 rounded-lg bg-black/[0.08] dark:bg-white/[0.1] text-slate-900 dark:text-cream flex items-center justify-center shrink-0 mt-0.5">
                      <User size={13} />
                    </div>
                  )}
                </div>
              ))}

              {isTyping && (
                <div className="flex items-center gap-2 text-slate-500 dark:text-gray-400 font-mono text-[11px] p-2">
                  <Bot size={14} className="text-cherry-500" />
                  <span className="animate-pulse">Accessing verified resume knowledge...</span>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Prompts */}
            <div className="px-3 py-2 bg-slate-50/80 dark:bg-dark-950/80 border-t border-black/[0.06] dark:border-white/[0.06] overflow-x-auto flex gap-1.5 custom-scrollbar">
              {suggestedQuestions.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(q)}
                  className="px-2.5 py-1 rounded-lg bg-black/[0.04] dark:bg-white/[0.04] border border-black/[0.08] dark:border-white/[0.08] text-[10px] font-mono text-slate-700 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white hover:border-cherry-500/40 whitespace-nowrap transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="p-3 bg-white dark:bg-dark-950 border-t border-black/[0.08] dark:border-white/[0.08] flex items-center gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about projects, mining robotics, skills..."
                className="flex-1 bg-black/[0.03] dark:bg-white/[0.05] border border-black/[0.1] dark:border-white/[0.1] rounded-xl px-3.5 py-2 text-xs text-slate-900 dark:text-cream placeholder-slate-400 dark:placeholder-gray-500 focus:outline-none focus:border-cherry-500 transition-colors"
              />
              <button
                type="submit"
                className="p-2 rounded-xl bg-cherry-600 hover:bg-cherry-500 text-white shadow-cherry-sm transition-colors"
                aria-label="Send query"
              >
                <Send size={15} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
