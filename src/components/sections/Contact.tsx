'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone } from 'lucide-react';

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="contact"
      className="py-24 bg-[var(--color-brand-surface)] relative overflow-hidden"
      ref={ref}>
      {/* Abstract Grid Background */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-gradient-to-r from-[var(--color-brand-emerald)]/10 via-[var(--color-brand-blue)]/10 to-[var(--color-brand-emerald)]/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <h3 className="text-[var(--color-brand-emerald)] font-mono mb-2 tracking-widest uppercase text-sm">
            Get In Touch
          </h3>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight">
            Let's Secure Your Next App.
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Currently open for new opportunities. Whether you have a question
            about my QA process, want to request an audit, or just want to say
            hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full glass rounded-3xl p-8 md:p-12 shadow-2xl border border-[var(--color-brand-emerald)]/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <h4 className="text-2xl font-bold text-white mb-6 tracking-wide">
                Contact Details
              </h4>

              <div className="group flex items-center gap-4">
                <div className="w-12 h-12 flex-shrink-0 rounded-full bg-[var(--color-brand-emerald)]/20 flex items-center justify-center border border-[var(--color-brand-emerald)]/50 group-hover:scale-110 transition-transform">
                  <Mail className="text-[var(--color-brand-emerald)] w-6 h-6" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-mono text-gray-400 uppercase tracking-widest mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:Mar7babusiness2100@gmail.com"
                    className="text-sm md:text-lg text-white font-medium hover:text-[var(--color-brand-emerald)] transition-colors">
                    Mar7babusiness2100@gmail.com
                  </a>
                </div>
              </div>

              <div className="group flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--color-brand-emerald)]/20 flex items-center justify-center border border-[var(--color-brand-emerald)]/50 group-hover:scale-110 transition-transform">
                  <Phone className="text-[var(--color-brand-emerald)] w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-mono text-gray-400 uppercase tracking-widest mb-1">
                    Phone
                  </p>
                  <a
                    href="tel:+201008576305"
                    className="text-lg text-white font-medium hover:text-[var(--color-brand-emerald)] transition-colors">
                    (+20) 1008576305
                  </a>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10">
                <p className="text-sm font-mono text-gray-400 uppercase tracking-widest mb-4">
                  Connect Socially
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/ahmed-mohamed-el-said/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass w-12 h-12 flex items-center justify-center rounded-lg hover:bg-[#0A66C2] hover:border-transparent transition-all group">
                    <svg
                      className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors"
                      fill="currentColor"
                      viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a
                    href="https://github.com/AhmedMoh96"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass w-12 h-12 flex items-center justify-center rounded-lg hover:bg-white hover:border-transparent transition-all group">
                    <svg
                      className="w-5 h-5 text-gray-300 group-hover:text-black transition-colors"
                      fill="currentColor"
                      viewBox="0 0 24 24">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                  </a>
                  <a
                    href="https://www.hackerrank.com/profile/AhmedMoh96"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass w-12 h-12 flex items-center justify-center rounded-lg hover:bg-[var(--color-brand-emerald)] hover:border-transparent transition-all group">
                    <svg
                      className="w-5 h-5 text-gray-300 group-hover:text-[var(--color-brand-bg)] transition-colors"
                      fill="currentColor"
                      viewBox="0 0 512 512">
                      <path d="M477.5 128C463 103.05 285.13 0 256.16 0S49.25 102.79 34.84 128s-29.33 95.54-15.88 120.22 67.34 83.18 109.21 96 77.08 2.48 109.21-7.42c32.11 9.9 67.59 20.28 109.21 7.42s95.68-71.22 109.21-96S492 153 477.5 128zm-71.08 87.7c-6.5 12-44.26 73.15-90.35 83.63s-73.89-1.24-96.07-7.42-54.53-34.5-79.47-69.43c-7-9.89-3.73-18.07 3.73-22.89s18.07-6.22 26.25 1.24c0 0 27.49 29.79 37.39 38s22.87 9.93 38 1.24c0 0 34.5-27.49 46.78-46.78s15.53-32.61 11.8-40.8c-11.81-26.25-16.77-45.54-1.24-66.73 13-17.7 41.83-12.08 54.59 0s31.37 31.37 31.37 31.37 16.79 13 23.87 26.25-1.86 22.16-2.49 28.38a231.74 231.74 0 01-3.82 43.94z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Simple Form Placeholder / CTA Box */}
            <div className="bg-black/40 rounded-2xl p-8 border border-white/5 flex flex-col justify-center text-center">
              <h4 className="text-2xl font-bold text-white mb-4 tracking-wide">
                Ready for Quality?
              </h4>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Download my resume to review my full skill set, tool stack, and
                project history in detail.
              </p>

              <a
                href="/Ahmed M. ElSaid - Software Tester - Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="w-full relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-bold text-white bg-[var(--color-brand-emerald)] rounded-xl group hover:shadow-[0_0_30px_rgba(6,214,160,0.4)] transition-shadow">
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-full group-hover:h-56 opacity-10"></span>
                <span className="relative flex items-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                  </svg>
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
