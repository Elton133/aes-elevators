"use client";
import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Call02Icon } from 'hugeicons-react';

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setIsScrolled(latest > 50);
  });

  const links = [
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Why Us', href: '#whyus' },
  ];

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 w-full z-[100] transition-colors duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-xl border-b border-white/10 text-white' : 'bg-transparent text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center gap-2">
              <span className="text-2xl font-black tracking-tighter text-white">
                AES<span className="text-orange-500">.</span>
              </span>
            </a>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-baseline space-x-8">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-4 border-l border-white/20 pl-8">
              <a href="tel:+233242017545" className="flex items-center gap-2 text-gray-300 hover:text-orange-400 transition-colors">
                <Call02Icon size={20} />
                <span className="text-sm font-bold block whitespace-nowrap">+233 242 017 545</span>
              </a>
              <a href="#contact" className="bg-white text-black hover:bg-orange-500 hover:text-white px-5 py-2.5 rounded-full text-sm font-bold transition-all shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] whitespace-nowrap">
                Get a Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
