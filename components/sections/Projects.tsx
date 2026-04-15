"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight01Icon } from 'hugeicons-react';

const projects = [
  {
    title: "Accra Financial Centre",
    category: "Commercial Building",
    description: "Full modernization of 4-car lift group.",
    image: "https://images.unsplash.com/photo-1541888049184-e4fc785a21db?q=80&w=2670&auto=format&fit=crop",
    className: "w-full lg:w-[25%] h-[400px]"
  },
  {
    title: "Freight Lift",
    category: "Industrial",
    description: "Installed and maintained by our expert technicians.",
    image: "https://images.unsplash.com/photo-1563214589-9a700edb3353?q=80&w=2670&auto=format&fit=crop",
    className: "w-full lg:w-[35%] h-[500px]"
  },
  {
    title: "Annual Servicing",
    category: "Maintenance",
    description: "Comprehensive preventative maintenance coverage.",
    image: "https://images.unsplash.com/photo-1574343542261-2490bdfbacc0?q=80&w=2938&auto=format&fit=crop",
    className: "w-full lg:w-[40%] h-[600px]"
  }
];

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, duration: 0.6 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <section id="projects" className="py-32 bg-zinc-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-sm font-bold tracking-widest uppercase text-orange-500 mb-2 block"
            >
              Start Your Project
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight"
            >
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">Projects</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 text-zinc-400 text-lg max-w-2xl font-medium"
            >
              Delivering excellence across Ghana.
            </motion.p>
          </div>
          
          <motion.a
            href="#contact"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 group text-orange-400 hover:text-orange-300 transition-colors uppercase text-sm tracking-widest font-bold"
          >
             Start Your Project 
             <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
                 <ArrowUpRight01Icon size={18} />
             </div>
          </motion.a>
        </div>

        {/* Big, Bigger, Biggest Staircase Layout */}
        <motion.div
           variants={containerVariants}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: "-100px" }}
           className="flex flex-col lg:flex-row items-end justify-between w-full gap-6 mt-16"
        >
             {projects.map((project, i) => (
                <motion.div
                   key={project.title}
                   variants={itemVariants}
                   className={`group relative rounded-3xl overflow-hidden cursor-pointer shrink-0 ${project.className}`}
                >
                    <img 
                       src={project.image} 
                       alt={project.title}
                       className="absolute inset-0 w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-[1200ms] ease-out brightness-75 group-hover:brightness-50"
                    />
                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80" />
                    
                    <div className="absolute inset-0 p-8 flex flex-col justify-between">
                       <div className="flex justify-between items-start">
                           <span className="px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-xs font-bold uppercase tracking-wider text-white">
                                {project.category}
                           </span>
                           <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center bg-black/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 group-hover:rotate-45 transition-all duration-500">
                               <ArrowUpRight01Icon className="text-white" size={20} />
                           </div>
                       </div>
                       
                       <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                           <h3 className="text-2xl lg:text-3xl font-black text-white mb-2">{project.title}</h3>
                           <p className="text-zinc-300 font-medium text-sm lg:text-base max-w-[90%] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-2">
                               {project.description}
                           </p>
                       </div>
                    </div>
                </motion.div>
             ))}
        </motion.div>
      </div>
    </section>
  );
}
