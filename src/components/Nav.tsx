"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-md py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="text-2xl font-display font-bold text-white tracking-widest relative group">
          AH<span className="text-[var(--color-brand-emerald)]">MED</span>
          <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[var(--color-brand-emerald)] transition-all group-hover:w-full"></span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-[var(--color-brand-emerald)] transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[var(--color-brand-emerald)] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a 
            href="/Ahmed M. ElSaid - Software Tester - Resume.pdf" 
            target="_blank"
            download
            className="px-4 py-2 border border-[var(--color-brand-emerald)] text-[var(--color-brand-emerald)] hover:bg-[var(--color-brand-emerald)] hover:text-[var(--color-brand-bg)] rounded-md transition-all text-sm font-bold"
          >
            CV
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-white transition-transform ${mobileMenuOpen ? "rotate-45 translate-y-2.5" : ""}`}></span>
            <span className={`w-full h-0.5 bg-white transition-opacity ${mobileMenuOpen ? "opacity-0" : ""}`}></span>
            <span className={`w-full h-0.5 bg-white transition-transform ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full glass border-t border-white/10 py-6 px-6 flex flex-col gap-6 md:hidden shadow-2xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-white hover:text-[var(--color-brand-emerald)]"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="/Ahmed M. ElSaid - Software Tester - Resume.pdf" 
              target="_blank"
              download
              onClick={() => setMobileMenuOpen(false)}
              className="text-center w-full px-4 py-3 bg-[var(--color-brand-emerald)] text-[var(--color-brand-bg)] rounded-md transition-all text-lg font-bold mt-4"
            >
              Download CV
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
