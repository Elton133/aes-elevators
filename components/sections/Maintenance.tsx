"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Settings02Icon, Call02Icon, Alert01Icon, ZapIcon } from 'hugeicons-react';

export default function Maintenance() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="maintenance" className="py-24 bg-zinc-950 text-white relative overflow-hidden">
      {/* Background radial gradient for pulse effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-600/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
             <motion.span variants={itemVariants} className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-2 block">
                Around the clock
              </motion.span>
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-extrabold mb-6 text-white">
              24/7 <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">Maintenance & Support</span>
            </motion.h2>

            <motion.p variants={itemVariants} className="text-gray-400 text-lg mb-8 leading-relaxed max-w-xl">
              Elevator failure means downtime, lost revenue, and upset tenants. Our rapid-response maintenance teams are always on standby, equipped to handle emergencies at a moment's notice. We offer comprehensive service contracts to keep your systems running at peak reliability.
            </motion.p>
            
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center border border-white/20">
                  <Call02Icon className="text-orange-400" />
                </div>
                <div>
                  <h4 className="text-xl font-bold">Emergency Dispatch</h4>
                  <p className="text-gray-400 mt-1">Guaranteed response times to minimize disruption and entrapment.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center border border-white/20">
                  <Settings02Icon className="text-orange-400" />
                </div>
                <div>
                  <h4 className="text-xl font-bold">Preventative Maintenance</h4>
                  <p className="text-gray-400 mt-1">Scheduled lubrication, adjustment, and component replacement before failure occurs.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center border border-white/20">
                  <ZapIcon className="text-orange-400" />
                </div>
                <div>
                  <h4 className="text-xl font-bold">Remote Diagnostics</h4>
                  <p className="text-gray-400 mt-1">Advanced telemetry to proactively detect electronic and mechanical faults.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* The Pulse Card */}
            <div className="relative p-8 rounded-3xl bg-zinc-900 border border-zinc-800 shadow-2xl overflow-hidden group">
              {/* Animated pulse rings */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-orange-500/20 rounded-full animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-orange-500/10 rounded-full animate-[ping_4s_cubic-bezier(0,0,0.2,1)_infinite]" />
              
              <div className="relative z-10 text-center py-12">
                <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full mx-auto mb-6 flex items-center justify-center shadow-[0_0_30px_rgba(249,115,22,0.6)]">
                   <Alert01Icon size={48} className="text-white" />
                </div>
                <h3 className="text-3xl font-black mb-2">Emergency Hotline</h3>
                <p className="text-orange-400 text-2xl font-bold tracking-wider hover:text-orange-300 cursor-pointer transition-colors mb-4">
                   050 123 4567
                </p>
                <p className="text-zinc-500 text-sm">Tap to call our 24/7 dispatch center.</p>
              </div>
              
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
