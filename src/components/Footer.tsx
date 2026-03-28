export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-[var(--color-brand-bg)] border-t border-white/10 text-center relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center">
        
        <p className="text-gray-400 font-mono text-sm mb-4">
          © {currentYear} Ahmed Mohamed El-Said. All rights reserved.
        </p>
        
        <div className="flex items-center gap-2 text-xs font-mono text-gray-500">
          <span>Built with</span>
          <span className="text-[var(--color-brand-emerald)]">Next.js</span>
          <span>&</span>
          <span className="text-[var(--color-brand-blue)]">Three.js</span>
        </div>
      </div>
    </footer>
  );
}
