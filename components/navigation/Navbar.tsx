"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0D0F0E]/80 backdrop-blur-xl border-b border-white/[0.04] shadow-[0_1px_20px_rgba(0,0,0,0.3)]"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-content flex items-center justify-between px-[var(--section-px)] h-[72px]">
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-3 h-3 rounded-full bg-accent-primary group-hover:scale-110 transition-transform" />
            <span className="font-display font-bold text-[1.1rem] text-text-primary tracking-tight">
              Tall Poppy University
            </span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative px-4 py-2 text-[0.85rem] text-text-secondary hover:text-text-primary transition-colors group"
              >
                {link.label}
                <span className="absolute bottom-1.5 left-4 right-4 h-px bg-accent-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
            ))}
            <a
              href="#pricing"
              className="ml-4 inline-flex items-center px-5 py-2.5 rounded-full bg-accent-primary text-text-primary text-[0.85rem] font-display font-semibold hover:bg-accent-primary-hover hover:scale-[1.02] hover:shadow-lg hover:shadow-accent-primary/20 transition-all duration-200"
            >
              Join Tall Poppy &rarr;
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-text-primary p-2 -mr-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[#0D0F0E]/98 backdrop-blur-2xl flex flex-col items-center justify-center gap-6"
          >
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i, duration: 0.3 }}
                className="font-display text-[2rem] font-bold text-text-primary hover:text-accent-primary transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#pricing"
              onClick={() => setMobileOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.3 }}
              className="mt-4 inline-flex items-center px-8 py-4 rounded-full bg-accent-primary text-text-primary text-[1.1rem] font-display font-semibold"
            >
              Join Tall Poppy &rarr;
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
