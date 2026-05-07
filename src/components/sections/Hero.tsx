'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import Image from 'next/image';
import { Award, Bug, Clock } from 'lucide-react';

// Import Three.js scene dynamically to avoid SSR window errors
const HeroScene = dynamic(() => import('@/components/three/HeroScene'), {
  ssr: false,
});

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full h-screen overflow-hidden bg-[var(--color-brand-bg)]">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Suspense
          fallback={
            <div className="w-full h-full bg-[var(--color-brand-bg)] animate-pulse" />
          }>
          <HeroScene />
        </Suspense>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center pointer-events-none">
        {/* Avatar */}
        <div className="relative w-40 h-40 mb-6 rounded-full overflow-hidden border-4 border-[var(--color-brand-emerald)] shadow-[0_0_30px_rgba(6,214,160,0.5)] pointer-events-auto transition-transform hover:scale-105 duration-300">
          <Image
            src="/images/avatar/ahmed-3d.png" // using the 3D generated avatar for better fit
            alt="Ahmed Mohamed El-Said"
            fill
            className="object-cover bg-white/10"
            priority
          />
        </div>

        {/* Name & Title */}
        <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4 tracking-tight">
          Ahmed Mohamed El-Said
        </h1>

        <div className="h-10 mb-6">
          <h2 className="text-lg md:text-2xl font-mono text-[var(--color-brand-blue)] typing-effect whitespace-nowrap">
            Software Tester | QC Engineer
          </h2>
        </div>

        {/* Tagline chips */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 pointer-events-auto">
          <span className="glass px-4 py-2 rounded-full text-sm font-medium text-[var(--color-brand-gold)] border border-[var(--color-brand-gold)]/20 shadow-[0_0_10px_rgba(255,209,102,0.2)] flex items-center gap-2">
            <Award size={16} />
            ISTQB Certified
          </span>
          <span className="glass px-4 py-2 rounded-full text-sm font-medium text-[var(--color-brand-coral)] border border-[var(--color-brand-coral)]/20 shadow-[0_0_10px_rgba(239,71,111,0.2)] flex items-center gap-2">
            <Bug size={16} />
            1000+ Bugs Found
          </span>
          <span className="glass px-4 py-2 rounded-full text-sm font-medium text-[var(--color-brand-emerald)] border border-[var(--color-brand-emerald)]/20 shadow-[0_0_10px_rgba(6,214,160,0.2)] flex items-center gap-2">
            <Clock size={16} />
            2+ Years Exp.
          </span>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 pointer-events-auto">
          <a
            href="#projects"
            className="px-8 py-3 rounded-full bg-[var(--color-brand-emerald)] text-[var(--color-brand-bg)] font-bold tracking-wide hover:bg-[#05b586] transition-all shadow-[0_0_20px_rgba(6,214,160,0.4)] hover:shadow-[0_0_30px_rgba(6,214,160,0.6)] hover:-translate-y-1">
            View My Work
          </a>
          <a
            href="/Ahmed M. ElSaid - Software Tester - Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="px-8 py-3 rounded-full glass text-white font-bold tracking-wide hover:bg-white/10 transition-all border border-white/20 hover:border-white/40 hover:-translate-y-1">
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
