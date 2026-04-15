"use client";
import React from 'react';
import { motion } from 'framer-motion';

const brands = [
  "SCHINDLER",
  "OTIS",
  "KONE",
  "MITSUBISHI",
  "THYSSENKRUPP"
];

export default function Expertise() {
  return (
    <section className="py-24 bg-white border-y border-zinc-100 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-bold tracking-[0.2em] uppercase text-zinc-400 block"
        >
          Trusted Technical Expertise
        </motion.span>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full flex overflow-x-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <motion.div
          className="flex whitespace-nowrap min-w-full"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity }}
        >
          {/* Double the array to ensure smooth infinite loop */}
          {[...brands, ...brands, ...brands, ...brands].map((brand, i) => (
            <div
              key={`${brand}-${i}`}
              className="mx-8 md:mx-16 flex items-center justify-center"
            >
              <h3 className="text-3xl md:text-5xl font-black tracking-tighter text-orange-500/80 md:text-zinc-200/50 md:hover:text-orange-500/80 transition-colors duration-500 uppercase select-none">
                {brand}
              </h3>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
