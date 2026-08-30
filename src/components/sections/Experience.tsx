'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, School } from 'lucide-react';

const experiences = [
  {
    company: 'The Tailors',
    type: 'Software House',
    role: 'Quality Control Specialist',
    period: 'Aug 2025 – Present',
    location: 'Giza, Egypt',
    color: '#06d6a0',
    summary:
      'Leading quality assurance for high-stakes healthcare and B2B ecosystems.',
    projects: [
      { name: 'Tabib Group', focus: 'Healthcare Ecosystem' },
      { name: 'Storeus Gomla', focus: 'B2B E-Commerce' },
      { name: 'Logic', focus: 'HR Assessment Tool' },
      { name: 'Arabian Peaks', focus: 'Real Estate' },
      { name: 'CP Portal', focus: 'Client Portal' },
      { name: 'Toushka', focus: 'Agri-Tech Trading' },
    ],
    details: [
      'Executed comprehensive cross-platform testing for multi-million Riyal systems.',
      'Logged 78+ unique defects across appointment logic and mobile sync.',
      'Verified multi-tier pricing algorithms and checkout security.',
    ],
  },
  {
    company: 'Medicta',
    type: 'Healthcare Tech',
    role: 'Software QC Engineer',
    period: 'Oct 2024 – Jun 2025',
    location: 'Remote',
    color: '#118ab2',
    summary:
      'Ensuring stability across a 4-tier medical management infrastructure.',
    projects: [
      { name: 'Medicta Portal', focus: 'Provider & Admin' },
      { name: 'Mobile App', focus: 'Patient Experience' },
    ],
    details: [
      'Testing across Web, Mobile, Provider Portal, and Admin interfaces.',
      '500+ unique functional, UI/UX, and performance defects documented.',
      'Identified API redundancies reducing report loading time by ~90%.',
    ],
  },
  {
    company: 'Freelance QA',
    type: 'Independent Consultant',
    role: 'Software Tester',
    period: 'Jun 2023 – Present',
    location: 'Remote',
    color: '#ef476f',
    summary:
      'Providing specialized security and logic validation for global platforms.',
    projects: [
      { name: 'Indstrz', focus: 'B2B Procurement' },
      { name: 'Hejn', focus: 'Camel Racing' },
      { name: 'Exvaly', focus: 'FinTech Engine' },
      { name: 'S&F', focus: 'Retail Scan & Go' },
      { name: 'Tabor.live', focus: 'Live Platform' },
      { name: 'Petitions & Locaget', focus: 'Civic Tech' },
      { name: 'Dominical Wheels', focus: 'Transport' },
      { name: 'Bookmaker', focus: 'Betting' },
      { name: 'Tripper', focus: 'Travel' },
    ],
    details: [
      'Validated B2B procurement logic and UN-backed compliance rules.',
      'Identified SQL injection risks and plain-text credential leaks.',
      'Logged 76 defects in complex multi-role Laravel platforms.',
    ],
  },
];

export default function Experience() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="experience"
      className="py-28 bg-[var(--color-brand-surface)] relative overflow-hidden"
      ref={ref}>
      {/* Central Line Decor (Desktop only) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent hidden md:block"></div>

      {/* Mobile Line Decor */}
      <div className="absolute top-0 left-6 w-px h-full bg-white/5 md:hidden"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-24">
          <span className="text-[var(--color-brand-emerald)] font-mono text-xs uppercase tracking-[0.4em] mb-4 block">
            Professional Timeline
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight">
            Career Journey
          </h2>
          <div className="w-20 h-1 bg-[var(--color-brand-emerald)] mx-auto mt-6 rounded-full"></div>
        </motion.div>

        <div className="relative">
          {experiences.map((exp, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={idx}
                className={`relative flex flex-col md:flex-row items-center justify-between mb-24 md:mb-40 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                {/* 1. Content Card Side */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 80 : -80 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: idx * 0.1 }}
                  className="w-full md:w-[44%] z-10 pl-10 md:pl-0">
                  <div className="glass p-8 rounded-[2rem] border border-white/5 relative group hover:border-[var(--color-brand-emerald)]/30 transition-all duration-500 shadow-2xl">
                    {/* Time Badge */}
                    <div
                      className={`absolute -top-4 ${isEven ? 'md:-right-4 left-8 md:left-auto' : 'left-8'} group-hover:-translate-y-2 transition-transform duration-300 z-20`}>
                      <span
                        className="px-4 py-2 rounded-xl text-[10px] font-mono font-bold uppercase tracking-wider border shadow-xl"
                        style={{
                          color: exp.color,
                          borderColor: `${exp.color}40`,
                          backgroundColor: 'rgba(10,14,23,0.95)',
                        }}>
                        {exp.period}
                      </span>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-1 tracking-tight">
                        {exp.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2">
                        <span
                          className="text-lg font-medium"
                          style={{ color: exp.color }}>
                          {exp.company}
                        </span>
                        <span className="text-gray-600 hidden sm:inline">
                          |
                        </span>
                        <span className="text-sm text-gray-500 font-mono uppercase tracking-tight">
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-400 text-sm mb-6 leading-relaxed bg-white/[0.03] p-4 rounded-xl italic border-l-2 border-white/10 shadow-inner">
                      {exp.summary}
                    </p>

                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {exp.projects.map((proj, pIdx) => (
                          <span
                            key={pIdx}
                            className="text-[10px] uppercase font-mono px-2 py-1 bg-white/5 rounded border border-white/10 text-gray-400">
                            {proj.name}
                          </span>
                        ))}
                      </div>
                      <ul className="space-y-3 pt-2">
                        {exp.details.map((detail, dIdx) => (
                          <li
                            key={dIdx}
                            className="text-sm text-gray-400 flex items-start gap-3">
                            <span
                              className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                              style={{
                                backgroundColor: exp.color,
                                boxShadow: `0 0 10px ${exp.color}`,
                              }}></span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>

                {/* 2. Central Timeline Point */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-20 top-10 md:top-1/2 md:-translate-y-1/2">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{
                      type: 'spring',
                      stiffness: 200,
                      delay: idx * 0.2,
                    }}
                    className="w-10 h-10 rounded-full border-4 border-[var(--color-brand-surface)] flex items-center justify-center bg-[var(--color-brand-surface)]">
                    <div
                      className="w-full h-full rounded-full"
                      style={{
                        backgroundColor: exp.color,
                        boxShadow: `0 0 25px ${exp.color}80`,
                      }}
                    />
                  </motion.div>
                </div>

                {/* 3. Spacer Side (Desktop only) */}
                <div className="hidden md:block w-[44%]"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center mb-12">
          <span className="text-[var(--color-brand-gold)] font-mono text-xs uppercase tracking-[0.4em] mb-4 block">
            Academic Background
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
            Education
          </h2>
          <div className="w-16 h-1 bg-[var(--color-brand-gold)] mx-auto mt-5 rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass p-8 rounded-3xl border border-white/5 flex items-center gap-6 group hover:bg-white/[0.04] transition-all">
            <div className="w-16 h-16 rounded-2xl bg-[var(--color-brand-gold)]/10 flex items-center justify-center border border-[var(--color-brand-gold)]/20 group-hover:rotate-12 transition-transform">
              <GraduationCap className="text-[var(--color-brand-gold)] w-8 h-8" />
            </div>
            <div className="flex-1">
              <p className="text-[var(--color-brand-gold)] font-mono text-[10px] uppercase tracking-widest mb-1">
                Scholarship
              </p>
              <h4 className="text-xl font-bold text-white">
                ITI Software Testing
              </h4>
              <p className="text-sm text-gray-400">
                Information Technology Institute · May 2025
              </p>
            </div>
          </div>
          <div className="glass p-8 rounded-3xl border border-white/5 flex items-center gap-6 group hover:bg-white/[0.04] transition-all">
            <div className="w-16 h-16 rounded-2xl bg-[var(--color-brand-blue)]/10 flex items-center justify-center border border-[var(--color-brand-blue)]/20 group-hover:rotate-12 transition-transform">
              <School className="text-[var(--color-brand-blue)] w-8 h-8" />
            </div>
            <div className="flex-1">
              <p className="text-[var(--color-brand-blue)] font-mono text-[10px] uppercase tracking-widest mb-1">
                Bachelor Degree
              </p>
              <h4 className="text-xl font-bold text-white">BBA in Finance</h4>
              <p className="text-sm text-gray-400">
                Alexandria University · 2021
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
