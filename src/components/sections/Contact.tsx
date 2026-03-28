"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, Phone } from "lucide-react";

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="contact" className="py-24 bg-[var(--color-brand-surface)] relative overflow-hidden" ref={ref}>
      
      {/* Abstract Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-gradient-to-r from-[var(--color-brand-emerald)]/10 via-[var(--color-brand-blue)]/10 to-[var(--color-brand-emerald)]/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10 flex flex-col items-center">
        
        <motion.div
           initial={{ opacity: 0, y: -20 }}
           animate={inView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.6 }}
           className="text-center mb-16"
        >
          <h3 className="text-[var(--color-brand-emerald)] font-mono mb-2 tracking-widest uppercase text-sm">Get In Touch</h3>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight">Let's Secure Your Next App.</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Currently open for new opportunities. Whether you have a question about my QA process, want to request an audit, or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full glass rounded-3xl p-8 md:p-12 shadow-2xl border border-[var(--color-brand-emerald)]/20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Contact Info */}
            <div className="space-y-8">
              <h4 className="text-2xl font-bold text-white mb-6 tracking-wide">Contact Details</h4>
              
              <div className="group flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--color-brand-emerald)]/20 flex items-center justify-center border border-[var(--color-brand-emerald)]/50 group-hover:scale-110 transition-transform">
                  <Mail className="text-[var(--color-brand-emerald)] w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-mono text-gray-400 uppercase tracking-widest mb-1">Email</p>
                  <a href="mailto:Mar7babusiness2100@gmail.com" className="text-lg text-white font-medium hover:text-[var(--color-brand-emerald)] transition-colors">Mar7babusiness2100@gmail.com</a>
                </div>
              </div>

              <div className="group flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--color-brand-emerald)]/20 flex items-center justify-center border border-[var(--color-brand-emerald)]/50 group-hover:scale-110 transition-transform">
                  <Phone className="text-[var(--color-brand-emerald)] w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-mono text-gray-400 uppercase tracking-widest mb-1">Phone</p>
                  <a href="tel:+201008576305" className="text-lg text-white font-medium hover:text-[var(--color-brand-emerald)] transition-colors">(+20) 1008576305</a>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10">
                <p className="text-sm font-mono text-gray-400 uppercase tracking-widest mb-4">Connect Socially</p>
                <div className="flex gap-4">
                  <a href="#" className="glass w-12 h-12 flex items-center justify-center rounded-lg hover:bg-[var(--color-brand-blue)] hover:border-transparent transition-all group">
                    <span className="font-bold text-xl group-hover:text-white transition-colors">in</span>
                  </a>
                  <a href="#" className="glass w-12 h-12 flex items-center justify-center rounded-lg hover:bg-white hover:text-black hover:border-transparent transition-all group">
                    <span className="font-bold text-xl transition-colors">gh</span>
                  </a>
                  <a href="#" className="glass w-12 h-12 flex items-center justify-center rounded-lg hover:bg-[var(--color-brand-emerald)] hover:border-transparent transition-all group">
                    <span className="font-bold text-xl group-hover:text-[var(--color-brand-bg)] transition-colors">H</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Simple Form Placeholder / CTA Box */}
            <div className="bg-black/40 rounded-2xl p-8 border border-white/5 flex flex-col justify-center text-center">
               <h4 className="text-2xl font-bold text-white mb-4 tracking-wide">Ready for Quality?</h4>
               <p className="text-gray-400 mb-8 leading-relaxed">Download my resume to review my full skill set, tool stack, and project history in detail.</p>
               
               <a
                href="/Ahmed M. ElSaid - Software Tester - Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="w-full relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-bold text-white bg-[var(--color-brand-emerald)] rounded-xl group hover:shadow-[0_0_30px_rgba(6,214,160,0.4)] transition-shadow"
              >
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-full group-hover:h-56 opacity-10"></span>
                <span className="relative flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                  Download Full Resume PDF
                </span>
              </a>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
