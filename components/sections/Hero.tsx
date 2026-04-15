"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight01Icon } from 'hugeicons-react';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const text = "Elevating Modern Infrastructure".split(" ");

  return (
    <section className="relative min-h-screen w-full flex items-center bg-[#050505] overflow-hidden pt-20">
      
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)] z-0" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left: Typography & CTAs */}
        <div className="flex flex-col items-start pt-10 lg:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex items-center gap-3"
          >
            <div className="w-2 h-2 rounded-full bg-orange-500 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]" />
            <span className="text-xs uppercase tracking-widest text-zinc-300 font-bold">
              Trusted by Industry Leaders across Ghana
            </span>
          </motion.div>

          <h1 className="text-5xl sm:text-7xl lg:text-[5.5rem] leading-[1.05] font-black tracking-tighter text-white mb-6">
            {text.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.15 + 0.3,
                  ease: [0.2, 0.65, 0.3, 0.9]
                }}
                className="inline-block mr-3 lg:mr-4 last:mr-0 last:text-transparent last:bg-clip-text last:bg-gradient-to-r last:from-orange-400 last:to-yellow-500"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-lg md:text-xl text-zinc-400 max-w-lg mb-10 leading-relaxed font-medium"
          >
             Reengineering vertical traversal. We design, install, and maintain the most reliable elevator and escalator systems in West Africa.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: "spring", delay: 1.2 }}
          >
            <a href="#services" className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold overflow-hidden transition-transform hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
              <span className="relative z-10 transition-colors group-hover:text-white">Explore Solutions</span>
              <ArrowRight01Icon size={20} className="relative z-10 transition-colors group-hover:text-white group-hover:translate-x-1" />
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 z-0" />
            </a>
          </motion.div>
        </div>

        {/* Right: Abstract 3D Architecture */}
        <div className="relative h-[600px] w-full hidden lg:flex items-center justify-center perspective-[1000px]">
            <motion.div 
               className="relative w-full h-full transform-style-[preserve-3d]"
               animate={{ rotateY: mousePosition.x * 10, rotateX: mousePosition.y * -10 }}
               transition={{ type: "spring", stiffness: 50, damping: 20 }}
            >
              {/* Shaft Outline lines */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-[120%] border-x border-dashed border-white/20 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]" />
              
              {/* Floating Element 1 (Cabin Ascending) */}
              <motion.div 
                animate={{ y: ["100%", "-200%"] }}
                transition={{ duration: 15, ease: "linear", repeat: Infinity }}
                className="absolute top-1/2 left-1/2 -ml-24 w-48 h-56 bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl shadow-[0_0_50px_rgba(255,255,255,0.05)] overflow-hidden"
              >
                  <div className="w-full h-1/2 bg-gradient-to-t from-orange-500/20 to-transparent absolute bottom-0" />
                  <div className="w-1/2 h-full bg-white/5 absolute left-0" />
              </motion.div>

              {/* Floating Element 2 (Cabin Descending) */}
              <motion.div 
                animate={{ y: ["-150%", "150%"] }}
                transition={{ duration: 20, ease: "linear", repeat: Infinity, delay: 2 }}
                className="absolute top-1/2 left-1/2 ml-8 w-32 h-40 bg-orange-500/10 border border-orange-500/30 backdrop-blur-xl rounded-xl shadow-[0_0_50px_rgba(249,115,22,0.15)] flex flex-col justify-between p-4"
              >
                  <div className="w-full h-1 bg-orange-500/50 rounded-full" />
                  <div className="flex gap-2 justify-center opacity-50">
                     <div className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
                     <div className="w-2 h-2 rounded-full bg-orange-400" />
                  </div>
              </motion.div>
              
               {/* Decorative Geometric rings */}
              <motion.div 
               className="absolute top-1/4 left-1/4 w-64 h-64 border border-white/10 rounded-full"
               animate={{ rotateZ: 360, z: mousePosition.x * 50 }}
               transition={{ rotateZ: { duration: 40, repeat: Infinity, ease: "linear" }, z: { type: "spring", stiffness: 40 } }}
              />
              <motion.div 
               className="absolute bottom-1/4 right-0 w-80 h-80 border border-orange-500/20 rounded-full"
               animate={{ rotateZ: -360, z: mousePosition.y * 50 }}
               transition={{ rotateZ: { duration: 50, repeat: Infinity, ease: "linear" }, z: { type: "spring", stiffness: 30 } }}
              />

              {/* Glowing Ambient Core */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-orange-600/20 blur-[100px] rounded-full pointer-events-none" />
            </motion.div>
        </div>
      </div>
    </section>
  );
}
