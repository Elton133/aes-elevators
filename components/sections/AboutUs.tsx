"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function AboutUs() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="py-24 bg-zinc-950 text-white relative flex items-center min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Text Content */}
          <div>
            <motion.div variants={itemVariants} className="mb-2">
              <span className="text-orange-500 font-bold tracking-widest uppercase text-sm">
                The Foundation
              </span>
            </motion.div>
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-extrabold mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">AES Elevators</span>
            </motion.h2>

            <motion.p variants={itemVariants} className="text-gray-400 text-lg mb-6 leading-relaxed">
              Allotey Engineering Services (AES) is a premier provider of vertical transportation solutions. With decades of combined expertise, we specialize in the installation, modernization, repair, and maintenance of all major types of elevators and escalators.
            </motion.p>

            <motion.p variants={itemVariants} className="text-gray-400 text-lg mb-8 leading-relaxed">
              Our mission is to ensure the absolute safety, profound reliability, and seamless movement of people in the buildings that shape our skylines. From commercial high-rises to residential complexes, we deliver excellence at every floor.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex grid grid-cols-2 gap-6 pt-4 border-t border-zinc-800">
              <div>
                <h4 className="text-4xl font-black text-white mb-2">15+</h4>
                <p className="text-sm text-zinc-500 font-medium tracking-wide">YEARS EXPERIENCE</p>
              </div>
              <div>
                <h4 className="text-4xl font-black text-white mb-2">500+</h4>
                <p className="text-sm text-zinc-500 font-medium tracking-wide">PROJECTS COMPLETED</p>
              </div>
            </motion.div>
          </div>

          {/* Visual Content / Geometric Shapes */}
          <motion.div
            variants={itemVariants}
            className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl group"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-600/20 to-transparent z-10 mix-blend-overlay group-hover:opacity-50 transition-opacity duration-700" />
            <img
              src="https://images.unsplash.com/photo-1541888049184-e4fc785a21db?q=80&w=2670&auto=format&fit=crop"
              alt="Elevator Shaft Engineering"
              className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
            />
            {/* Overlay badge */}
            <div className="absolute bottom-8 left-8 z-20 bg-black/60 backdrop-blur-md border border-white/10 p-6 rounded-xl shadow-xl transform group-hover:-translate-y-2 transition-transform duration-500">
              <h5 className="text-xl font-bold text-white mb-1">Certified Excellence</h5>
              <p className="text-sm text-gray-300">ISO 9001:2015 Compliant</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
