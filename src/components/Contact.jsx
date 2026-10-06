import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Send, 
  Check, 
  Copy, 
  ExternalLink,
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { sound } from '../utils/soundEffects';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('idle');
  const [copiedField, setCopiedField] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    sound.playClick();
    setStatus('sending');

    setTimeout(() => {
      setStatus('success');
      sound.playSuccess();
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => {
        setStatus('idle');
      }, 4000);
    }, 1000);
  };

  const copyToClipboard = (text, fieldName) => {
    sound.playClick();
    navigator.clipboard?.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  return (
    <section id="contact" className="py-28 relative px-4 sm:px-8 lg:px-16 z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/[0.04] dark:bg-white/[0.04] border border-black/[0.08] dark:border-white/[0.08] text-cherry-600 dark:text-cherry-400 font-mono text-xs tracking-widest uppercase mb-3">
            <span>09 // INQUIRIES & COLLABORATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-cream tracking-tight">
            Let's Build Something Interesting.
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cherry-500 to-rose-600 rounded-full mt-4" />
          <p className="text-slate-600 dark:text-gray-400 max-w-2xl mt-4 text-sm sm:text-base leading-relaxed">
            Have an idea, project, collaboration or opportunity? Let's talk.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Side: Direct Contact Details & Links */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-black/[0.08] dark:border-white/[0.08] shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cherry-500/10 rounded-full blur-2xl pointer-events-none" />

              <h3 className="text-xl font-display font-bold text-slate-900 dark:text-cream mb-2">
                Direct Channels
              </h3>
              <p className="text-slate-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed mb-6">
                Reach out for engineering projects, internships, robotics safety research, or technical discussions.
              </p>

              {/* Direct Info List */}
              <div className="space-y-4">
                
                {/* Email Item */}
                <div className="p-4 rounded-2xl bg-black/[0.02] dark:bg-dark-950/70 border border-black/[0.08] dark:border-white/[0.08] flex items-center justify-between group hover:border-cherry-500/40 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-cherry-500/10 border border-cherry-500/20 flex items-center justify-center text-cherry-600 dark:text-cherry-400 shrink-0">
                      <Mail size={18} />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-slate-500 dark:text-gray-400 uppercase">Primary Email</div>
                      <a 
                        href="mailto:deepak9956gupta@gmail.com" 
                        className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-cream hover:text-cherry-600 dark:hover:text-cherry-300 transition-colors break-all"
                      >
                        deepak9956gupta@gmail.com
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={() => copyToClipboard('deepak9956gupta@gmail.com', 'email')}
                    title="Copy Email"
                    className="p-2 rounded-lg bg-black/[0.04] dark:bg-white/[0.04] hover:bg-black/10 dark:hover:bg-white/10 text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition-colors shrink-0 ml-2"
                  >
                    {copiedField === 'email' ? <Check size={15} className="text-emerald-500" /> : <Copy size={15} />}
                  </button>
                </div>

                {/* Phone Item */}
                <div className="p-4 rounded-2xl bg-black/[0.02] dark:bg-dark-950/70 border border-black/[0.08] dark:border-white/[0.08] flex items-center justify-between group hover:border-cherry-500/40 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-cherry-500/10 border border-cherry-500/20 flex items-center justify-center text-cherry-600 dark:text-cherry-400 shrink-0">
                      <Phone size={18} />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-slate-500 dark:text-gray-400 uppercase">Mobile Phone</div>
                      <a 
                        href="tel:+917408282385" 
                        className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-cream hover:text-cherry-600 dark:hover:text-cherry-300 transition-colors font-mono"
                      >
                        +91 7408282385
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={() => copyToClipboard('+91 7408282385', 'phone')}
                    title="Copy Mobile"
                    className="p-2 rounded-lg bg-black/[0.04] dark:bg-white/[0.04] hover:bg-black/10 dark:hover:bg-white/10 text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition-colors shrink-0 ml-2"
                  >
                    {copiedField === 'phone' ? <Check size={15} className="text-emerald-500" /> : <Copy size={15} />}
                  </button>
                </div>

                {/* Location Item */}
                <div className="p-4 rounded-2xl bg-black/[0.02] dark:bg-dark-950/70 border border-black/[0.08] dark:border-white/[0.08] flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-black/[0.05] dark:bg-white/[0.05] border border-black/[0.08] dark:border-white/[0.08] flex items-center justify-center text-slate-600 dark:text-gray-400 shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-500 dark:text-gray-400 uppercase">Current Location</div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-cream">
                      Nagaland, India (NIT Campus)
                    </div>
                  </div>
                </div>

              </div>

              {/* Social Placeholders */}
              <div className="mt-6 pt-6 border-t border-black/[0.08] dark:border-white/[0.08]">
                <div className="text-xs font-mono text-slate-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                  Professional Profiles:
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => sound.playClick()}
                    className="p-3 rounded-xl bg-black/[0.03] dark:bg-white/[0.03] border border-black/[0.08] dark:border-white/[0.08] hover:border-cherry-500/40 text-slate-700 dark:text-gray-300 hover:text-slate-900 dark:hover:text-cream flex items-center justify-center gap-2 text-xs font-mono transition-colors"
                  >
                    <Github size={15} />
                    <span>GitHub</span>
                  </a>

                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => sound.playClick()}
                    className="p-3 rounded-xl bg-black/[0.03] dark:bg-white/[0.03] border border-black/[0.08] dark:border-white/[0.08] hover:border-cherry-500/40 text-slate-700 dark:text-gray-300 hover:text-slate-900 dark:hover:text-cream flex items-center justify-center gap-2 text-xs font-mono transition-colors"
                  >
                    <Linkedin size={15} />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Side: Interactive Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-card p-6 sm:p-10 rounded-3xl border border-black/[0.08] dark:border-white/[0.08] shadow-2xl relative"
          >
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-black/[0.08] dark:border-white/[0.08]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cherry-500" />
                <span className="font-mono text-xs text-cherry-600 dark:text-cherry-400 uppercase tracking-wider font-semibold">
                  DISPATCH_MESSAGE_FORM
                </span>
              </div>
              <span className="text-[11px] font-mono text-slate-500 dark:text-gray-400">
                STATUS: READY
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-700 dark:text-gray-300">
                    Your Name <span className="text-cherry-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Dr. Alex Mercer"
                    className="w-full bg-black/[0.03] dark:bg-dark-950/80 border border-black/[0.1] dark:border-white/[0.1] rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-cream placeholder-slate-400 dark:placeholder-gray-600 focus:outline-none focus:border-cherry-500 focus:ring-1 focus:ring-cherry-500 transition-colors"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-700 dark:text-gray-300">
                    Your Email <span className="text-cherry-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. alex@institution.org"
                    className="w-full bg-black/[0.03] dark:bg-dark-950/80 border border-black/[0.1] dark:border-white/[0.1] rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-cream placeholder-slate-400 dark:placeholder-gray-600 focus:outline-none focus:border-cherry-500 focus:ring-1 focus:ring-cherry-500 transition-colors"
                  />
                </div>

              </div>

              {/* Subject */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-700 dark:text-gray-300">
                  Subject <span className="text-cherry-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Internship Opportunity / Research Collaboration"
                  className="w-full bg-black/[0.03] dark:bg-dark-950/80 border border-black/[0.1] dark:border-white/[0.1] rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-cream placeholder-slate-400 dark:placeholder-gray-600 focus:outline-none focus:border-cherry-500 focus:ring-1 focus:ring-cherry-500 transition-colors"
                />
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-700 dark:text-gray-300">
                  Message <span className="text-cherry-500">*</span>
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share details about the idea, challenge, project, or role..."
                  className="w-full bg-black/[0.03] dark:bg-dark-950/80 border border-black/[0.1] dark:border-white/[0.1] rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-cream placeholder-slate-400 dark:placeholder-gray-600 focus:outline-none focus:border-cherry-500 focus:ring-1 focus:ring-cherry-500 transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'sending'}
                onMouseEnter={() => sound.playHover()}
                className="w-full py-4 rounded-xl font-semibold text-xs tracking-wider uppercase bg-cherry-600 hover:bg-cherry-500 text-white shadow-cherry-glow transition-all duration-300 flex items-center justify-center gap-2 border border-cherry-400/40 disabled:opacity-50"
              >
                {status === 'sending' ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Transmitting Message...</span>
                  </>
                ) : status === 'success' ? (
                  <>
                    <Check size={16} className="text-emerald-300" />
                    <span>Message Dispatched Successfully!</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <span className="text-base">→</span>
                  </>
                )}
              </button>

              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-300 text-xs font-mono text-center flex items-center justify-center gap-2"
                >
                  <Check size={14} />
                  <span>Thank you for reaching out! Abhishek will respond to your transmission promptly.</span>
                </motion.div>
              )}
            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
