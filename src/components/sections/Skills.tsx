"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { ShieldCheck, Settings, Briefcase, Code2 } from "lucide-react";

type TabKey = "testing" | "automation" | "tools" | "core";

const tabs: { key: TabKey; label: string; icon: any; color: string; glow: string }[] = [
  { key: "testing", label: "Testing", icon: ShieldCheck, color: "#06d6a0", glow: "rgba(6,214,160,0.4)" },
  { key: "automation", label: "Automation & API", icon: Settings, color: "#118ab2", glow: "rgba(17,138,178,0.4)" },
  { key: "tools", label: "Tools & Ops", icon: Briefcase, color: "#ef476f", glow: "rgba(239,71,111,0.4)" },
  { key: "core", label: "Core Tech", icon: Code2, color: "#ffd166", glow: "rgba(255,209,102,0.4)" },
];

const skillData: Record<TabKey, { name: string; level: number; desc: string }[]> = {
  testing: [
    { name: "Functional Testing", level: 95, desc: "Black-box test design including BVA, EP, decision tables" },
    { name: "Regression Testing", level: 90, desc: "Full regression suites for critical release cycles" },
    { name: "Exploratory Testing", level: 88, desc: "Session-based exploratory testing for edge-case discovery" },
    { name: "E2E Testing", level: 85, desc: "End-to-end flow validation across multi-tier systems" },
    { name: "UI/UX Auditing", level: 92, desc: "Figma-to-Web pixel verification & accessibility checks" },
    { name: "Performance Profiling", level: 80, desc: "DevTools-based API & rendering performance audits" },
  ],
  automation: [
    { name: "Selenium WebDriver", level: 78, desc: "Cross-browser automation with POM architecture" },
    { name: "Postman & Newman", level: 92, desc: "API contract testing, environment chains, collection runs" },
    { name: "RestAssured", level: 72, desc: "Java-based API automation with assertion libraries" },
    { name: "TestNG", level: 78, desc: "Test orchestration, parallel execution, data providers" },
    { name: "Page Object Model", level: 82, desc: "Maintainable test architecture with reusable page objects" },
    { name: "Data-Driven Testing", level: 80, desc: "Parameterized tests with external data sources" },
  ],
  tools: [
    { name: "Jira & Trello", level: 92, desc: "Sprint planning, defect lifecycle, Kanban workflows" },
    { name: "Allure & Spark Reports", level: 85, desc: "Rich visual test execution reports with history trends" },
    { name: "Git & GitHub", level: 88, desc: "Branching strategies, PRs, and collaborative version control" },
    { name: "Jenkins (CI/CD)", level: 62, desc: "Pipeline configuration and automated test triggers" },
    { name: "Maven", level: 80, desc: "Dependency management and build lifecycle configuration" },
    { name: "Figma", level: 85, desc: "UI spec verification, component inspection, design QA" },
  ],
  core: [
    { name: "Java & OOP", level: 78, desc: "Object-oriented design, inheritance, polymorphism" },
    { name: "SQL & MySQL", level: 82, desc: "Complex queries, joins, data validation, schema testing" },
    { name: "HTML & CSS", level: 78, desc: "Semantic markup, responsive layouts, accessibility" },
    { name: "Agile & SDLC", level: 92, desc: "Scrum ceremonies, sprint planning, retrospectives" },
    { name: "Cross-Platform QA", level: 90, desc: "Web, iOS, Android — device farms & responsive testing" },
  ],
};

function SkillRing({ level, color, size = 72 }: { level: number; color: string; size?: number }) {
  const radius = (size - 8) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (level / 100) * circumference;

  return (
    <svg width={size} height={size} className="flex-shrink-0 -rotate-90">
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="rgba(255,255,255,0.06)"
        strokeWidth={4}
      />
      <motion.circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke={color}
        strokeWidth={4}
        strokeLinecap="round"
        strokeDasharray={circumference}
        initial={{ strokeDashoffset: circumference }}
        animate={{ strokeDashoffset: offset }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        style={{ filter: `drop-shadow(0 0 6px ${color})` }}
      />
      <text
        x={size / 2}
        y={size / 2}
        textAnchor="middle"
        dominantBaseline="central"
        fill="white"
        fontSize={14}
        fontWeight="bold"
        fontFamily="var(--font-mono)"
        transform={`rotate(90 ${size / 2} ${size / 2})`}
      >
        {level}
      </text>
    </svg>
  );
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState<TabKey>("testing");
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const currentTab = tabs.find((t) => t.key === activeTab)!;
  const currentSkills = skillData[activeTab];

  return (
    <section id="skills" className="py-28 bg-[var(--color-brand-bg)] relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]" style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
      <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] rounded-full blur-[180px] pointer-events-none" style={{ backgroundColor: currentTab.glow, opacity: 0.15, transition: "background-color 0.6s" }} />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h3 className="text-[var(--color-brand-emerald)] font-mono mb-2 tracking-widest uppercase text-sm">Expertise</h3>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Technical Proficiency</h2>
          <p className="text-gray-400 max-w-xl mx-auto text-lg">Tap a category to explore detailed skill breakdowns with proficiency indicators.</p>
        </motion.div>

        {/* Tab Selector */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.15 }} className="flex flex-wrap justify-center gap-3 mb-14">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className="relative px-6 py-3 rounded-2xl font-medium text-sm transition-all duration-300 border flex items-center gap-2 group"
                style={{
                  backgroundColor: isActive ? `${tab.color}15` : "rgba(255,255,255,0.03)",
                  borderColor: isActive ? tab.color : "rgba(255,255,255,0.08)",
                  color: isActive ? tab.color : "#94a3b8",
                  boxShadow: isActive ? `0 0 25px ${tab.glow}` : "none",
                }}
              >
                <tab.icon size={18} strokeWidth={2.5} />
                {tab.label}
              </button>
            );
          })}
        </motion.div>

        {/* Skill Cards Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {currentSkills.map((skill, sIdx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: sIdx * 0.07 }}
              className="glass rounded-2xl p-6 flex items-start gap-5 group border border-white/5 hover:border-white/15 transition-all duration-300 relative overflow-hidden"
            >
              {/* Hover accent top-line */}
              <div className="absolute top-0 left-0 w-full h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-400" style={{ background: `linear-gradient(90deg, transparent, ${currentTab.color}, transparent)` }} />

              <SkillRing level={skill.level} color={currentTab.color} />

              <div className="flex-1 min-w-0">
                <h4 className="text-white font-bold text-base mb-1 tracking-tight">{skill.name}</h4>
                <p className="text-gray-400 text-xs leading-relaxed">{skill.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Summary Bar */}
        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.8 }} className="mt-14 glass rounded-2xl p-6 flex flex-wrap justify-center gap-x-12 gap-y-4 border border-white/5">
          {[
            { label: "Testing Types", value: "6+", color: "#06d6a0" },
            { label: "Automation Tools", value: "5+", color: "#118ab2" },
            { label: "Platforms", value: "Web · Mobile · API", color: "#ef476f" },
            { label: "Methodologies", value: "Agile · SDLC", color: "#ffd166" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl font-bold font-display" style={{ color: stat.color }}>{stat.value}</p>
              <p className="text-xs text-gray-500 font-mono uppercase tracking-wider mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
