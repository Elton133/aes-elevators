"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Call02Icon, Mail01Icon, WhatsappIcon, ArrowRight01Icon } from 'hugeicons-react';

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, duration: 0.6 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="contact" className="py-24 bg-zinc-950 text-white relative border-t border-zinc-900 overflow-hidden">
      
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-orange-600/5 rounded-full blur-[100px] mix-blend-screen pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left Side: Contact Information */}
        <motion.div
           variants={containerVariants}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: "-100px" }}
           className="flex flex-col"
        >
          <motion.span variants={itemVariants} className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-2 block">
            Contact AES
          </motion.span>
          
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tighter">
            Let's discuss your vertical transport needs<span className="text-orange-500">.</span>
          </motion.h2>

          <motion.p variants={itemVariants} className="text-zinc-400 text-lg mb-12 max-w-lg leading-relaxed font-medium">
            Whether you need a new installation, emergency repair, or a maintenance contract, our team is standing by.
          </motion.p>
          
          <div className="space-y-8">
             {/* Phone */}
             <motion.div variants={itemVariants} className="flex gap-6 group">
                <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-orange-500/10 group-hover:border-orange-500/30 transition-all duration-300">
                   <Call02Icon size={24} className="text-orange-400" />
                </div>
                <div className="flex flex-col justify-center">
                   <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-500 mb-1">Phone <span className="text-xs font-normal normal-case ml-2 text-zinc-600">Mon-Fri 8am - 6pm</span></h4>
                   <a href="tel:+233242017545" className="text-2xl font-black text-white hover:text-orange-400 transition-colors">+233 242 017 545</a>
                </div>
             </motion.div>

             {/* WhatsApp */}
             <motion.div variants={itemVariants} className="flex gap-6 group">
                <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-green-500/10 group-hover:border-green-500/30 transition-all duration-300">
                   <WhatsappIcon size={28} className="text-green-500" />
                </div>
                <div className="flex flex-col justify-center">
                   <div className="flex items-center gap-3 mb-1">
                      <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-500">WhatsApp</h4>
                      <span className="bg-green-500/10 text-green-400 text-[10px] uppercase font-bold px-2 py-0.5 rounded-full border border-green-500/20">Fastest response</span>
                   </div>
                   <a href="#" className="text-lg font-bold text-white hover:text-green-400 transition-colors flex items-center gap-2 group-hover:gap-3 relative">
                      Chat with Technician <ArrowRight01Icon size={16} />
                   </a>
                </div>
             </motion.div>

             {/* Email */}
             <motion.div variants={itemVariants} className="flex gap-6 group">
                <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-blue-500/10 group-hover:border-blue-500/30 transition-all duration-300">
                   <Mail01Icon size={24} className="text-blue-400" />
                </div>
                <div className="flex flex-col justify-center">
                   <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-500 mb-1">Email <span className="text-xs font-normal normal-case ml-2 text-zinc-600">Project proposals</span></h4>
                   <a href="mailto:info@aesghana.com" className="text-xl font-bold text-white hover:text-blue-400 transition-colors">info@aesghana.com</a>
                </div>
             </motion.div>
          </div>
        </motion.div>

        {/* Right Side: Contact Form */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="bg-black border border-white/10 p-8 sm:p-10 rounded-[40px] shadow-2xl relative overflow-hidden group"
        >
           <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-orange-500/10 to-transparent pointer-events-none rounded-full blur-[60px]" />
           
           <h3 className="text-3xl font-black mb-8">Send us a message</h3>
           
           <form className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-400">Name</label>
                    <input type="text" placeholder="Your Name" className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all text-white placeholder-zinc-600 font-medium" />
                 </div>
                 <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-400">Phone</label>
                    <input type="tel" placeholder="+233..." className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all text-white placeholder-zinc-600 font-medium" />
                 </div>
              </div>

              <div className="space-y-2">
                 <label className="text-sm font-bold text-zinc-400">Service Type</label>
                 <div className="relative">
                    <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all text-white appearance-none cursor-pointer font-medium">
                       <option value="new" className="bg-zinc-900 text-white">New Installation</option>
                       <option value="maintenance" className="bg-zinc-900 text-white">Maintenance Contract</option>
                       <option value="repair" className="bg-zinc-900 text-white">Emergency Repair</option>
                       <option value="modernization" className="bg-zinc-900 text-white">Modernization</option>
                       <option value="other" className="bg-zinc-900 text-white">Other Inquiry</option>
                    </select>
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400">
                       ▼
                    </div>
                 </div>
              </div>

              <div className="space-y-2">
                 <label className="text-sm font-bold text-zinc-400">Message</label>
                 <textarea rows={4} placeholder="Tell us about your project or issue..." className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all text-white placeholder-zinc-600 resize-none font-medium" />
              </div>

              <button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-yellow-600 hover:from-orange-600 hover:to-yellow-700 text-white font-black text-lg py-5 rounded-2xl transition-all shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:shadow-[0_0_30px_rgba(249,115,22,0.5)] transform hover:-translate-y-1 active:translate-y-0 active:scale-95">
                 Send Request
              </button>
           </form>
        </motion.div>
      </div>
    </section>
  );
}
