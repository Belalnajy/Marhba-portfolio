"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import Image from "next/image";

interface StatItemProps {
  end: number;
  suffix?: string;
  label: string;
  color: string;
}

const stats: StatItemProps[] = [
  { end: 500, suffix: "+", label: "Defects Documented", color: "text-[var(--color-brand-emerald)]" },
  { end: 15, suffix: "+", label: "Projects Tested", color: "text-[var(--color-brand-blue)]" },
  { end: 2, suffix: "", label: "ISTQB Certifications", color: "text-[var(--color-brand-gold)]" },
  { end: 2, suffix: "+", label: "Years Experience", color: "text-[var(--color-brand-coral)]" },
];

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // Trigger when 20% visible
  });

  return (
    <section id="about" className="py-24 bg-[var(--color-brand-surface)] relative overflow-hidden" ref={ref}>
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-[var(--color-brand-emerald)]/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[var(--color-brand-blue)]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Avatar Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-5/12 relative flex justify-center"
          >
            <div className="relative w-80 h-96">
              {/* Abstract frame / background */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-brand-emerald)] to-[var(--color-brand-blue)] rounded-2xl transform rotate-3 opacity-20 blur-sm"></div>
              <div className="absolute inset-0 border-2 border-white/10 rounded-2xl transform -rotate-3 glass"></div>
              
              <Image 
                src="/images/avatar/ahmed-avatar.png"
                alt="Ahmed Portrait"
                fill
                className="object-cover rounded-2xl p-4 drop-shadow-2xl"
              />
            </div>
            
            {/* Floating badges */}
            <motion.div 
               animate={{ y: [0, -10, 0] }}
               transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
               className="absolute -bottom-6 -right-6 glass p-4 rounded-xl shadow-xl border border-[var(--color-brand-emerald)]/30 backdrop-blur-md"
            >
               <p className="text-[var(--color-brand-emerald)] font-bold tracking-wider">QC SPECIALIST</p>
            </motion.div>
          </motion.div>

          {/* Text/Content Side */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-full lg:w-7/12"
          >
            <h3 className="text-[var(--color-brand-emerald)] font-mono mb-2 track-widest uppercase">Overview</h3>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Elevating Software Quality</h2>
            
            <div className="text-gray-300 space-y-4 text-lg leading-relaxed mb-10">
              <p>
                I am an ISTQB (CTFL-V4.0 & CT-MAT) certified Software Quality Control Engineer with 
                nearly 2 years of experience analyzing and securing critical platforms across 
                <span className="text-white font-semibold"> FinTech, B2B E-commerce, and Healthcare.</span>
              </p>
              <p>
                My expertise lies in translating complex business logic into rigorous test scenarios. 
                From identifying logic flaws and payment gateway exploits to conducting UI/UX audits and 
                API verifications using Postman, I ensure zero-compromise product delivery.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, idx) => (
                <div key={idx} className="glass p-6 rounded-2xl relative overflow-hidden group">
                  <div className={`absolute top-0 left-0 w-1 h-full opacity-50 transition-all duration-300 group-hover:w-full group-hover:opacity-10 ${stat.color.replace('text', 'bg')}`}></div>
                  <h4 className={`text-4xl md:text-5xl font-display font-bold mb-2 ${stat.color}`}>
                    {inView ? <CountUp end={stat.end} duration={2.5} suffix={stat.suffix} /> : "0" + (stat.suffix || "")}
                  </h4>
                  <p className="text-sm text-gray-400 font-medium uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
