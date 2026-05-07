'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

type Category =
  | 'All'
  | 'Healthcare'
  | 'B2B/E-Comm'
  | 'FinTech/Trading'
  | 'Other';

const projects = [
  {
    title: 'Tabib Group',
    image: '/images/projects/Tabib.png',
    category: 'Healthcare',
    description:
      'Healthcare ecosystem for Saudi market. Executed cross-platform testing (Web & Mobile). Logged 78+ unique defects.',
  },
  {
    title: 'Storeus Gomla',
    image: '/images/projects/StoreUs.png',
    category: 'B2B/E-Comm',
    description:
      'Multi-tenant B2B E-Commerce for Egypt/UAE. Validated pricing algorithms and financial checkout flows.',
  },
  {
    title: 'Medicta',
    image: '/images/projects/Medicta.png',
    category: 'Healthcare',
    description:
      '4-tier healthcare system. Performed manual profiling via DevTools and found API redundancies.',
  },
  {
    title: 'Indstrz',
    image: '/images/projects/Indstrz.png',
    category: 'B2B/E-Comm',
    description:
      'UN-Backed digital platform empowering Egyptian manufacturers. Procurement logic validation.',
  },
  {
    title: 'Logic',
    image: '/images/projects/Logic.png',
    category: 'Other',
    description:
      'HR Talent Solutions assessment tool. Audited role-based access for 6+ user levels.',
  },
  {
    title: 'Agri-Tech (Toushka)',
    image: '/Toushka.png',
    category: 'FinTech/Trading',
    description:
      'Audited Real-time trading transactions and rate commission trading engines.',
  },
  {
    title: 'Exvaly',
    image: '/Exvaly.jpg',
    category: 'FinTech/Trading',
    description:
      'FinTech Mobile app real-time currency conversion engine testing & OCR scanning.',
  },
  {
    title: 'Hejn',
    image: '/Hejn.jpg',
    category: 'Other',
    description:
      'Saudi Camel Racing Federation mobile testing for registration and localization.',
  },
];

export default function Projects() {
  const [filter, setFilter] = useState<Category>('All');
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const filteredProjects = projects.filter(
    (p) => filter === 'All' || p.category === filter,
  );

  return (
    <section
      id="projects"
      className="py-24 bg-[var(--color-brand-bg)] relative min-h-screen"
      ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <h3 className="text-[var(--color-brand-emerald)] font-mono mb-2 tracking-widest uppercase text-sm">
            Portfolio
          </h3>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">
            Selected Projects
          </h2>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {(
              [
                'All',
                'Healthcare',
                'B2B/E-Comm',
                'FinTech/Trading',
                'Other',
              ] as Category[]
            ).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full font-mono text-sm transition-all duration-300 ${
                  filter === cat
                    ? 'bg-[var(--color-brand-emerald)] text-[var(--color-brand-bg)] font-bold shadow-[0_0_15px_rgba(6,214,160,0.4)]'
                    : 'glass text-gray-300 hover:text-white hover:border-[var(--color-brand-emerald)]/50'
                }`}>
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Project Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                className="group relative h-[380px] rounded-2xl glass overflow-hidden cursor-pointer"
                style={{
                  perspective: '1000px',
                }}>
                {/* 3D Tilt Card Container */}
                <div className="w-full h-full relative transition-transform duration-500 transform-style-3d group-hover:rotate-y-12 group-hover:rotate-x-12">
                  {project.noImage ? (
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-brand-surface)] to-black/60 flex items-center justify-center border-b border-white/10 h-1/2">
                      <h4 className="text-3xl font-display font-black text-white/20 uppercase tracking-widest">
                        {project.category.split('/')[0]}
                      </h4>
                    </div>
                  ) : (
                    <div className="relative w-full h-1/2 bg-black/30">
                      <Image
                        src={project.image!}
                        alt={project.title}
                        fill
                        className="object-cover object-[100%_40%] border-b border-white/10 grayscale-[50%] group-hover:grayscale-0 transition-all duration-500"
                      />
                    </div>
                  )}

                  {/* Content below image */}
                  <div className="absolute top-1/2 bottom-0 left-0 right-0 p-6 flex flex-col justify-start">
                    <span className="text-xs font-mono text-[var(--color-brand-gold)] mb-2 uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-display font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-400 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Hover reveal bar */}
                    <div className="absolute bottom-0 left-0 h-1 w-0 bg-[var(--color-brand-emerald)] group-hover:w-full transition-all duration-500"></div>
                  </div>

                  {/* Subtle inner glow on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[inset_0_0_50px_rgba(6,214,160,0.1)] pointer-events-none"></div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
