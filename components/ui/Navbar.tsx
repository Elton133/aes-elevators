"use client";
import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Call02Icon } from 'hugeicons-react';

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

          <button
            type="button"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            className="md:hidden inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 p-2 text-white hover:bg-white/10 transition-colors"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            <span className="sr-only">{isMobileMenuOpen ? "Close menu" : "Open menu"}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              {isMobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? "max-h-[420px] border-t border-white/10" : "max-h-0"
        }`}
      >
        <div className="px-4 pb-6 pt-4 sm:px-6 space-y-2 bg-black/95 backdrop-blur-xl">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block rounded-xl px-4 py-3 text-base font-semibold text-zinc-100 hover:bg-white/10 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="tel:+233242017545"
            className="flex items-center gap-2 rounded-xl px-4 py-3 text-base font-semibold text-zinc-100 hover:bg-white/10 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Call02Icon size={18} />
            +233 242 017 545
          </a>
          <a
            href="#contact"
            className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-bold text-black hover:bg-orange-500 hover:text-white transition-all"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get a Quote
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
