"use client";
import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

export default function ElevatorIndicator() {
  const { scrollYProgress } = useScroll();
  const [mounted, setMounted] = useState(false);

  // Smooth out the scroll animation for the "elevator car"
  const springScroll = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Transform scroll progress to vertical translation (0% to calc(100% - height))
  const yRange = useTransform(springScroll, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed right-6 md:right-12 top-1/4 bottom-1/4 w-1 bg-zinc-800/20 rounded-full z-[100] hidden md:block">
      {/* The Elevator Shaft */}
      <div className="absolute inset-x-0 top-0 bottom-0 bg-transparent" />
      
      {/* The Elevator Car */}
      <motion.div
        className="absolute top-0 left-1/2 -ml-1.5 w-3 h-10 bg-gradient-to-b from-orange-400 to-orange-600 rounded shadow-[0_0_15px_rgba(249,115,22,0.5)] flex items-center justify-center -translate-y-[100%]"
        style={{
          top: yRange,
        }}
      >
        <div className="w-1 h-3 bg-white/50 rounded-full animate-pulse" />
      </motion.div>

      {/* Floor Indicators (approximate scroll positions) */}
      <div className="absolute top-[5%] -left-6 text-[10px] text-zinc-400 font-mono hidden group-hover:block">01</div>
      <div className="absolute top-[25%] -left-6 text-[10px] text-zinc-400 font-mono hidden group-hover:block">02</div>
      <div className="absolute top-[50%] -left-6 text-[10px] text-zinc-400 font-mono hidden group-hover:block">03</div>
      <div className="absolute top-[75%] -left-6 text-[10px] text-zinc-400 font-mono hidden group-hover:block">04</div>
      <div className="absolute top-[95%] -left-6 text-[10px] text-zinc-400 font-mono hidden group-hover:block">05</div>
    </div>
  );
}
