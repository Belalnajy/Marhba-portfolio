"use client";

import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const certificates = [
  {
    title: "ISTQB Certified Tester – Foundation Level (CTFL v4.0)",
    image: "/images/certificates/ISTQB Foundation Level v4.0 (CTFL).jpg",
    date: "Jun 2024",
    id: "240523040",
    color: "var(--color-brand-emerald)"
  },
  {
    title: "ISTQB Certified Tester – Mobile App Testing (CT-MAT)",
    image: "/images/certificates/ISTQB Mobile Application Testing (CT-MAT).jpg",
    date: "Mar 2025",
    id: "250219023",
    color: "var(--color-brand-blue)"
  },
  {
    title: "ITI Software Testing Track Completion Certificate",
    image: "/images/certificates/ITI Software Testing Track Completion Certificate.jpg",
    date: "Nov 2024 – May 2025",
    id: "Information Technology Institute",
    color: "var(--color-brand-gold)"
  }
];

export default function Certifications() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedCert, setSelectedCert] = useState<typeof certificates[0] | null>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const userInteracting = useRef(false);
  const resumeTimeout = useRef<NodeJS.Timeout | null>(null);

  // Auto-scroll animation logic
  useEffect(() => {
    let animationFrameId: number;
    const container = scrollRef.current;
    
    const scroll = () => {
      if (container && !selectedCert && !userInteracting.current) {
        container.scrollLeft += 0.5;
        if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
          container.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (resumeTimeout.current) clearTimeout(resumeTimeout.current);
    };
  }, [selectedCert]);

  const pauseAutoScroll = () => {
    userInteracting.current = true;
    if (resumeTimeout.current) clearTimeout(resumeTimeout.current);
  };

  const resumeAutoScroll = () => {
    if (resumeTimeout.current) clearTimeout(resumeTimeout.current);
    resumeTimeout.current = setTimeout(() => {
      userInteracting.current = false;
    }, 3000);
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    const container = scrollRef.current;
    if (!container) return;
    isDragging.current = true;
    startX.current = e.clientX - container.offsetLeft;
    scrollLeft.current = container.scrollLeft;
    container.style.cursor = 'grabbing';
    pauseAutoScroll();
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    const container = scrollRef.current;
    if (!container) return;
    e.preventDefault();
    const x = e.clientX - container.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    container.scrollLeft = scrollLeft.current - walk;
  };

  const handlePointerUp = () => {
    isDragging.current = false;
    const container = scrollRef.current;
    if (container) container.style.cursor = 'grab';
    resumeAutoScroll();
  };

  return (
    <section id="certifications" className="py-24 bg-[var(--color-brand-surface)] relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <motion.div
           initial={{ opacity: 0, y: -20 }}
           animate={inView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.6 }}
           className="text-center"
        >
          <h3 className="text-[var(--color-brand-gold)] font-mono mb-2 tracking-widest uppercase text-sm">Achievements</h3>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Certifications</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Globally accredited certifications validating my structural knowledge of testing methodology and software quality assurance.
          </p>
        </motion.div>
      </div>

      {/* Horizontal Scroll Container */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.3 }}
        ref={scrollRef} 
        className="flex gap-8 overflow-x-auto pb-12 pt-4 px-6 md:px-24 snap-x snap-mandatory hide-scrollbar whitespace-nowrap select-none"
        style={{ scrollBehavior: isDragging.current ? 'auto' : 'smooth', cursor: 'grab' }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
      >
        {certificates.map((cert, idx) => (
          <motion.div 
            key={idx} 
            layoutId={`cert-${idx}`}
            onClick={() => setSelectedCert(cert)}
            className="inline-block flex-shrink-0 w-80 md:w-96 glass rounded-2xl overflow-hidden snap-center relative group cursor-pointer transform transition-all duration-500 hover:-translate-y-4 shadow-xl hover:shadow-[0_0_30px_rgba(255,209,102,0.3)]"
          >
            {/* Inner Glow */}
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 pointer-events-none transition-opacity duration-300 bg-gradient-to-t from-[${cert.color}] to-transparent z-10 
              group-hover:shadow-[inset_0_0_30px_rgba(0,0,0,0.5)]`} />

            {/* Cert Image */}
            <div className="relative w-full h-56 border-b border-white/10 overflow-hidden">
              <Image 
                src={cert.image}
                alt={cert.title}
                fill
                className="object-contain p-4 group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="glass px-4 py-2 rounded-full text-white text-xs font-mono border border-white/20">View Full Certificate</span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 whitespace-normal">
              <h3 className="text-xl font-bold font-display text-white mb-1 line-clamp-2 min-h-[56px]">{cert.title}</h3>
              <div className="flex justify-between items-center mt-4">
                <span className="text-xs font-mono bg-white/10 px-3 py-1 rounded text-[var(--color-brand-gold)]">{cert.date}</span>
                <span className="text-[10px] font-mono text-gray-400 uppercase">ID: {cert.id}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Fade Edges for Carousel */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[var(--color-brand-surface)] to-transparent pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[var(--color-brand-surface)] to-transparent pointer-events-none"></div>

      {/* Lightbox / Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-black/90 backdrop-blur-xl"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative max-w-5xl w-full h-full max-h-[90vh] glass rounded-3xl overflow-hidden shadow-2xl border border-white/10 flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="p-6 border-b border-white/10 flex justify-between items-center bg-white/5">
                <div className="min-w-0">
                  <h3 className="text-xl font-bold text-white truncate pr-4">{selectedCert.title}</h3>
                  <p className="text-sm font-mono text-[var(--color-brand-gold)] mt-1">{selectedCert.date} · ID: {selectedCert.id}</p>
                </div>
                <button 
                  onClick={() => setSelectedCert(null)}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors group"
                >
                  <span className="text-white text-2xl group-hover:scale-110 transition-transform">×</span>
                </button>
              </div>

              {/* Modal Image Area */}
              <div className="flex-1 relative bg-black/40 p-4 md:p-8 flex items-center justify-center overflow-auto">
                 <div className="relative w-full h-full min-h-[400px]">
                    <Image 
                      src={selectedCert.image}
                      alt={selectedCert.title}
                      fill
                      className="object-contain"
                      priority
                    />
                 </div>
              </div>
              
              {/* Modal Footer / Hint */}
              <div className="p-4 text-center bg-white/5 border-t border-white/10">
                <button 
                   onClick={() => setSelectedCert(null)}
                   className="text-gray-400 hover:text-white text-sm font-mono transition-colors"
                >
                   [ ESC OR CLICK OUTSIDE TO CLOSE ]
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
