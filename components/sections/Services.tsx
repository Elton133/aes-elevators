"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Settings02Icon, Shield02Icon, ArrowUp02Icon, CheckmarkCircle01Icon } from 'hugeicons-react';

const services = [
  {
    num: "01",
    title: "New Installation",
    description: "State-of-the-art residential and commercial elevator and escalator installations, designed for seamless integration, energy efficiency, and modern architectural aesthetics.",
    icon: <ArrowUp02Icon size={32} className="text-orange-500" />,
    className: "md:col-span-2",
  },
  {
    num: "02",
    title: "Modernization",
    description: "Upgrade aging elevator systems with advanced microprocessor controls.",
    icon: <Settings02Icon size={32} className="text-orange-500" />,
    className: "md:col-span-1",
  },
  {
    num: "03",
    title: "Consultation",
    description: "Expert traffic analysis and optimal vertical planning.",
    icon: <CheckmarkCircle01Icon size={32} className="text-orange-500" />,
    className: "md:col-span-1",
  },
  {
    num: "04",
    title: "Safety Compliance",
    description: "Comprehensive audits and structural testing to ensure your vertical transportation systems meet or exceed all international safety and building codes.",
    icon: <Shield02Icon size={32} className="text-orange-500" />,
    className: "md:col-span-2",
  }
];

export default function Services() {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8
      }
    })
  };

  return (
    <section id="services" className="py-32 bg-zinc-50 text-zinc-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row gap-8 justify-between items-start md:items-end mb-16">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-sm font-black tracking-widest uppercase text-orange-600 mb-4 block"
            >
              Our Disciplines
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-black tracking-tighter"
            >
              Engineered for <br/> <span className="text-orange-500">Excellence.</span>
            </motion.h2>
          </div>
          <motion.p
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="text-zinc-500 max-w-md text-left md:text-right"
          >
             Comprehensive vertical transportation solutions engineered for uncompromising performance, safety, and operational longevity.
          </motion.p>
        </div>

        {/* Masonry Grid 2x2 with asymmetry */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className={`relative bg-white border border-zinc-200/60 p-10 rounded-3xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] transition-all duration-500 group overflow-hidden flex flex-col justify-between min-h-[300px] ${service.className}`}
            >
              {/* Giant Background Number */}
              <div className="absolute -right-8 -bottom-10 text-[180px] font-black text-zinc-50/80 tracking-tighter leading-none select-none z-0 group-hover:scale-110 group-hover:text-orange-50/50 transition-all duration-700">
                {service.num}
              </div>

              <div className="relative z-10">
                <div className="w-14 h-14 bg-zinc-50 rounded-2xl flex items-center justify-center mb-8 border border-zinc-100 group-hover:bg-orange-50 group-hover:border-orange-100 group-hover:scale-110 transition-all duration-500 shadow-sm">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-orange-600 transition-colors">{service.title}</h3>
                <p className="text-zinc-500 leading-relaxed font-medium">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
