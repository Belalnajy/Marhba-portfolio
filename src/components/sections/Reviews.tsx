"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const reviewImages = [
  "/images/reviews/Screenshot 2026-03-21 080026.png",
  "/images/reviews/Screenshot 2026-03-21 080056.png",
  "/images/reviews/Screenshot 2026-03-21 080122.png",
  "/images/reviews/Screenshot 2026-03-21 080200.png",
  "/images/reviews/Screenshot 2026-03-21 080225.png"
];

export default function Reviews() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="reviews" className="py-24 bg-[var(--color-brand-bg)] relative min-h-screen" ref={ref}>
      {/* Background decorations */}
      <div className="absolute top-40 right-20 w-[400px] h-[400px] bg-[var(--color-brand-blue)]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 mb-16">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={inView ? { opacity: 1, scale: 1 } : {}}
           transition={{ duration: 0.6 }}
           className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-white/10 pb-8"
        >
          <div className="max-w-2xl">
            <h3 className="text-[var(--color-brand-blue)] font-mono mb-2 tracking-widest uppercase text-sm">Feedback</h3>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Client Testimonials</h2>
            <p className="text-gray-400">
              Hear directly from clients and stakeholders. Consistently delivering high-quality test coverage, rigorous vulnerability checks, and transparent reporting.
            </p>
          </div>
          <div className="flex-shrink-0 flex items-center gap-2 bg-[var(--color-brand-surface)] glass px-4 py-2 rounded-full border border-white/10">
            <span className="text-[var(--color-brand-emerald)] font-bold">★ 5.0</span>
            <span className="text-sm font-mono text-gray-400">Khamsat Profile Rating</span>
          </div>
        </motion.div>
      </div>

      <div className="w-full overflow-hidden pb-12" ref={scrollRef}>
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex gap-6 overflow-x-auto px-6 md:px-24 hide-scrollbar snap-x snap-mandatory"
        >
          {reviewImages.map((src, idx) => (
            <div 
              key={idx}
              className="inline-block flex-shrink-0 w-[400px] h-[300px] md:w-[600px] md:h-[400px] glass rounded-xl relative overflow-hidden snap-center group hover:border-[var(--color-brand-emerald)]/50 transition-colors duration-300 shadow-2xl"
            >
              <Image 
                src={src}
                alt={`Client Review ${idx + 1}`}
                fill
                className="object-contain p-4 group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                <span className="glass px-6 py-2 rounded-full text-white font-mono shadow-xl border border-white/20">Verified Review</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
