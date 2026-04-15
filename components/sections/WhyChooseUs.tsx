"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { TickDouble02Icon, Rocket01Icon, Money01Icon, HandGripIcon } from 'hugeicons-react';

const reasons = [
  {
    title: "Certified Quality",
    description: "We strictly adhere to global safety codes on every installation.",
    icon: <TickDouble02Icon size={32} className="text-orange-500" />
  },
  {
    title: "Fast Response",
    description: "Mobile technical teams ready to deploy across the region.",
    icon: <Rocket01Icon size={32} className="text-orange-500" />
  },
  {
    title: "Fair Pricing",
    description: "Transparent quotes for parts and labor. No hidden fees.",
    icon: <Money01Icon size={32} className="text-orange-500" />
  },
  {
    title: "Long-term Partners",
    description: "We build relationships, not just elevators. Trust is key.",
    icon: <HandGripIcon size={32} className="text-orange-500" />
  }
];

export default function WhyChooseUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, duration: 0.5 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="whyus" className="py-24 bg-white text-zinc-950 relative border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
           <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-5xl font-black tracking-tight"
            >
              Why Industry Leaders <br className="md:hidden" /> Choose <span className="text-orange-500">AES</span>
           </motion.h2>
        </div>

        <motion.div
           variants={containerVariants}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: "-100px" }}
           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {reasons.map((reason, i) => (
             <motion.div
                key={i}
                variants={itemVariants}
                className="group p-8 rounded-3xl bg-zinc-50 border border-zinc-100 hover:border-orange-500/30 hover:shadow-[0_10px_40px_rgba(249,115,22,0.1)] transition-all duration-300 transform hover:-translate-y-1"
             >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-zinc-100 group-hover:scale-110 transition-transform duration-500">
                   {reason.icon}
                </div>
                <h3 className="text-xl font-bold tracking-tight mb-2 group-hover:text-orange-600 transition-colors">{reason.title}</h3>
                <p className="text-zinc-500 text-sm font-medium leading-relaxed">
                   {reason.description}
                </p>
             </motion.div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
}
