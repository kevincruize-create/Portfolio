/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronRight, 
  Menu,
  Mail,
  Phone,
  MessageSquare,
  X,
  ExternalLink
} from 'lucide-react';

// --- Shared Primitives ---

const AppleLogo = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 384 512" fill="currentColor" className={className}>
    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
  </svg>
);

const LogoMark = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 256 256" fill="white" className={className}>
    <path d="M 0 128 C 70.692 128 128 185.308 128 256 L 64 256 C 64 220.654 35.346 192 0 192 Z M 256 192 C 220.654 192 192 220.654 192 256 L 128 256 C 128 185.308 185.308 128 256 128 Z M 128 0 C 128 70.692 70.692 128 0 128 L 0 64 C 35.346 64 64 35.346 64 0 Z M 192 0 C 192 35.346 220.654 64 256 64 L 256 128 C 185.308 128 128 70.692 128 0 Z" />
  </svg>
);

const AppleButton = ({ label, full = false, onClick }: { label: string; full?: boolean; onClick?: () => void }) => (
  <button 
    onClick={onClick}
    className={`group inline-flex items-center justify-center gap-2 rounded-full bg-white text-black font-medium text-sm px-5 py-3 transition-all hover:bg-white/90 active:scale-[0.98] ${full ? 'w-full' : ''}`}
  >
    <AppleLogo className="w-4 h-4" />
    <span>{label}</span>
    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
  </button>
);

const SectionEyebrow = ({ label, tag }: { label: string; tag?: string }) => (
  <div className="flex items-center gap-3">
    <div className="flex items-center gap-2">
      <span className="w-1.5 h-1.5 rounded-full bg-white" />
      <span className="text-sm font-medium tracking-wide uppercase text-white/90">{label}</span>
    </div>
    {tag && (
      <span className="px-2 py-0.5 rounded-full border border-white/10 text-[10px] font-medium text-white/50 tracking-wider uppercase">
        {tag}
      </span>
    )}
  </div>
);

const gradientStyle = {
  backgroundImage: 'linear-gradient(to right, #091020 0%, #0B2551 12.5%, #A4F4FD 32.5%, #00d2ff 50%, #0B2551 67.5%, #091020 87.5%, #091020 100%)',
  backgroundSize: '200% auto',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  color: 'transparent',
  WebkitTextFillColor: 'transparent',
  filter: 'url(#c3-noise)',
};

// --- Components ---

const Navbar = () => (
  <motion.nav 
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="fixed top-0 inset-x-0 z-50 pt-6"
  >
    <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
      <LogoMark className="w-8 h-8" />
      
      <div className="hidden md:flex items-center gap-8">
        {['Solutions', 'Pricing', 'Blog', 'Documentation', 'Careers'].map((item, i) => (
          <motion.a
            key={item}
            href="#"
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.05 }}
            className="text-white/70 text-sm font-medium hover:text-white transition-colors"
          >
            {item}
          </motion.a>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden md:block">
          <AppleButton label="Download Aura" />
        </div>
        <button className="md:hidden w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center">
          <Menu className="w-5 h-5" />
        </button>
      </div>
    </div>
  </motion.nav>
);

// --- Main App ---

export default function App() {
  const [isWorkOpen, setIsWorkOpen] = useState(false);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#0c0c0c] text-white">
      <AnimatePresence>
        {isWorkOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="liquid-glass w-full max-w-3xl max-h-[85vh] flex flex-col rounded-[32px] border border-white/10 relative overflow-hidden"
            >
              {/* Fixed Header Area */}
              <div className="p-8 md:p-12 pb-6 border-b border-white/5 relative">
                <button 
                  onClick={() => setIsWorkOpen(false)}
                  className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors z-20"
                >
                  <X className="w-5 h-5 text-white/50" />
                </button>

                <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                  What I have been <br/> <span style={gradientStyle} className="animate-shiny">Doing So Far.</span>
                </h2>
              </div>

              {/* Scrollable List Content */}
              <div className="flex-1 overflow-y-auto p-8 md:p-12 pt-10 custom-scrollbar">
                <div className="space-y-16 pb-12">
                  {/* Project 1 */}
                  <div className="group">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                      <h3 className="text-xl font-bold flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-brand" />
                        Portfolio 1: DCP Opinion Polls
                      </h3>
                      <a 
                        href="https://sprightly-speculoos-7d8698.netlify.app" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand hover:text-brand/80 transition-colors w-fit"
                      >
                        Visit Site <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                    <p className="text-white/60 leading-relaxed text-sm md:text-base">
                      This is an ongoing project for the DCP party belonging to the former Deputy Governor; Rigathi Gachagwa. Its purpose was to collect opinion polls for any general election of any country. We chose to use Typescript and Google AI studio because Typescript helped us debug things faster while as Google AI studio cut our development duration by two weeks.
                    </p>
                  </div>

                  {/* Project 2 */}
                  <div className="group">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                      <h3 className="text-xl font-bold flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#10b981]" />
                        Portfolio 2: Hostel Adventures
                      </h3>
                      <a 
                        href="https://hosteladventures.netlify.app" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#10b981] hover:text-[#10b981]/80 transition-colors w-fit"
                      >
                        Visit Site <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                    <p className="text-white/60 leading-relaxed text-sm md:text-base">
                      This project was meant to help students find the best hostels around Thika. So far, over 1000 students found it useful. It was made using React.js because we were working with dynamic data that needed fast state updates.
                    </p>
                  </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex justify-center">
                  <button 
                    onClick={() => setIsWorkOpen(false)}
                    className="text-xs font-bold uppercase tracking-widest text-white/30 hover:text-white transition-colors"
                  >
                    Back to Portfolio
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Global Background Video */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover pointer-events-none"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_064122_c4750c0e-7476-4b44-94a2-a85a65c63bf2.mp4"
        />
      </div>

      {/* Vertical Guides */}
      <div className="hidden md:block pointer-events-none fixed inset-y-0 left-1/2 -translate-x-[calc(50%+36rem)] w-px bg-white/10 z-[5]" />
      <div className="hidden md:block pointer-events-none fixed inset-y-0 left-1/2 translate-x-[calc(-50%+36rem)] w-px bg-white/10 z-[5]" />

      {/* Global SVG Noise Filters */}
      <svg className="hidden">
        <filter id="c3-noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.35 0" />
          <feComposite in2="SourceGraphic" operator="in" result="noise" />
          <feBlend in="SourceGraphic" in2="noise" mode="multiply" />
        </filter>
      </svg>

      {/* Navbar removed as requested */}

      <main className="relative z-10">
        {/* Section 2 — Hero */}
        <section className="pt-32 md:pt-48 pb-20 text-center flex flex-col items-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-4xl md:text-7xl font-semibold tracking-tight leading-[1] md:leading-[0.9]">
              <div>You Found The Right Develper</div>
              <div className="animate-shiny" style={gradientStyle}>Welcome to my Portfolio Website</div>
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-8 text-white/60 max-w-md text-base md:text-lg leading-[1.5]"
          >
            Before you is the work of the greatest front end developer in Kenya, click below to see projects I did for some clients
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-10 flex flex-col items-center gap-4"
          >
            <AppleButton 
              label="My recent Work" 
              onClick={() => setIsWorkOpen(true)}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mt-20 w-full max-w-2xl text-left"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">My Skills</h2>
            <div className="grid gap-6">
              {/* React.js */}
              <div className="liquid-glass rounded-3xl p-8 relative flex flex-col md:flex-row items-center gap-8 border border-white/10">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand" />
                    React.js Mastery
                  </h3>
                  <p className="text-white/60 leading-relaxed">
                    As a top-tier React developer, I specialize in building highly performant, scalable, and visually stunning web applications. My expertise spans across the entire React ecosystem, from deep understanding of hooks and state management to advanced patterns for optimal rendering.
                  </p>
                </div>
                <div className="flex-shrink-0 p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-12 h-12 text-[#61dafb] fill-none stroke-current stroke-[1]">
                    <circle cx="0" cy="0" r="2.05" fill="#61dafb" stroke="none" />
                    <g>
                      <ellipse rx="11" ry="4.2" />
                      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                    </g>
                  </svg>
                </div>
              </div>

              {/* Next.js */}
              <div className="liquid-glass rounded-3xl p-8 relative flex flex-col md:flex-row items-center gap-8 border border-white/10">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-white" />
                    Next.js Engineering
                  </h3>
                  <p className="text-white/60 leading-relaxed">
                    Performance is non-negotiable. I leverage Next.js to deliver blazing-fast applications with server-side rendering, static site generation, and optimized routing, providing the ultimate SEO and performance foundation for modern digital products.
                  </p>
                </div>
                <div className="flex-shrink-0 p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <svg viewBox="0 0 128 128" className="w-12 h-12 fill-white">
                    <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.4v33.3h-9.2V40.1h9.2l40.4 51.5c4.1-7.2 6.4-15.5 6.4-24.4 0-23.9-19.4-43.3-43.3-43.3-2.4 0-4.7.2-7 .6L102.3 83c6.1-5.7 10.9-12.8 13.9-20.8l.8-2.2c8.2-22.3 3.6-47.5-12.7-65.7C92.4 4.5 78.5 0 64 0zM87.5 40.1h-9.2v25.3l9.2 11.7V40.1z"/>
                  </svg>
                </div>
              </div>

              {/* TypeScript */}
              <div className="liquid-glass rounded-3xl p-8 relative flex flex-col md:flex-row items-center gap-8 border border-white/10">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#3178c6]" />
                    TypeScript Precision
                  </h3>
                  <p className="text-white/60 leading-relaxed">
                    Type-safe development is my standard. I use TypeScript to build bulletproof applications, ensuring data integrity and developer efficiency through sophisticated type definitions and robust interface architectures that scale with complexity.
                  </p>
                </div>
                <div className="flex-shrink-0 p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <svg viewBox="0 0 128 128" className="w-12 h-12 fill-[#3178c6]">
                    <path d="M1.5 63.91v48.01c0 8.35 6.75 11.08 15.09 11.08h92.8c8.35 0 15.09-2.73 15.09-11.08V11.08c0-8.35-6.75-11.08-15.09-11.08h-92.8C8.25 0 1.5 2.73 1.5 11.08v52.83zm90.31 16.14c1.19-.85 13.1-8.52 13.1-23.86 0-14.16-10.9-20.84-24.37-20.84-18.72 0-25.7 11.08-25.7 20.84 0 6.63 2.56 12.09 7.33 16.3 3.58 3.15 4.95 4.26 4.95 8.18 0 4.09-3.07 7.16-7.16 7.16-4.09 0-7.16-3.07-7.16-7.16 0-2.39.85-4.6 2.39-6.31l-8.02-5.46c-3.24 3.92-5.12 9.04-5.12 14.67 0 12.62 10.23 22.85 22.85 22.85 12.62 0 22.85-10.23 22.85-22.85 0-3.58-.85-6.82-2.39-9.55zM38.82 35.34H11.08v10.23h38.41V35.34H38.82z"/>
                  </svg>
                </div>
              </div>

              {/* Spline */}
              <div className="liquid-glass rounded-3xl p-8 relative flex flex-col md:flex-row items-center gap-8 border border-white/10">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#f87171]" />
                    Spline 3D Integration
                  </h3>
                  <p className="text-white/60 leading-relaxed">
                    I bridge the gap between 2D and 360. My expertise in Spline allows me to integrate interactive 3D elements into web experiences, creating immersive, cinematic interfaces that respond dynamically to user interaction.
                  </p>
                </div>
                <div className="flex-shrink-0 p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-12 h-12 fill-white">
                    <path d="M12 2L2 7v10l10 5l10-5V7L12 2zm0 2.8L19.3 8L12 11.2L4.7 8L12 4.8zM4 9.9l7 3.1v6.2l-7-3.5V9.9zm9 9.3v-6.2l7-3.1v5.8l-7 3.5z"/>
                  </svg>
                </div>
              </div>

              {/* Figma */}
              <div className="liquid-glass rounded-3xl p-8 relative flex flex-col md:flex-row items-center gap-8 border border-white/10">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#a259ff]" />
                    Figma Product Design
                  </h3>
                  <p className="text-white/60 leading-relaxed">
                    Design is where every great product begins. My deep proficiency in Figma enables me to craft high-fidelity prototypes and design systems that are both aesthetically pleasing and structurally sound for modern development.
                  </p>
                </div>
                <div className="flex-shrink-0 p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <svg viewBox="0 0 38 57" className="w-10 h-10">
                    <path d="M19 28.5C19 25.9837 20.0009 23.5706 21.7825 21.7891C23.564 20.0075 25.9772 19 28.4935 19C31.0098 19 33.4229 20.0075 35.2045 21.7891C36.986 23.5706 37.9869 25.9837 37.9869 28.5V38H28.4935V28.5H19Z" fill="#1ABCFE"/>
                    <path d="M0 47.5C0 44.9837 1.00089 42.5706 2.78248 40.7891C4.56408 39.0075 6.97718 38 9.49348 38H19V47.5C19 50.0163 17.9991 52.4294 16.2175 54.2109C14.4359 55.9925 12.0228 57 9.50652 57C6.99022 57 4.57712 55.9925 2.79552 54.2109C1.01392 52.4294 0 50.0163 0 47.5Z" fill="#0ACF83"/>
                    <path d="M19 0H28.5C31.0163 0 33.4294 1.00089 35.2109 2.78248C36.9925 4.56408 38 6.97718 38 9.49348C38 12.0098 36.9925 14.4229 35.2109 16.2045C33.4294 17.986 31.0163 18.9869 28.5 18.9869H19V0Z" fill="#FF7262"/>
                    <path d="M0 28.5C0 25.9837 1.00089 23.5706 2.78248 21.7891C4.56408 20.0075 6.97718 19 9.49348 19H19V38H9.49348C6.97718 38 4.56408 36.9925 2.78248 35.2109C1.00089 33.4294 0 31.0163 0 28.5Z" fill="#A259FF"/>
                    <path d="M0 9.5C0 6.9837 1.00089 4.57059 2.78248 2.78906C4.56408 1.00753 6.97718 0 9.49348 0H19V19H9.49348C6.97718 19 4.56408 17.9991 2.78248 16.2175C1.00089 14.4359 0 12.0228 0 9.5V9.5Z" fill="#F24E1E"/>
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer with Contact Details */}
      <footer className="relative z-10 max-w-6xl mx-auto px-6 py-20 border-t border-white/10">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <LogoMark className="w-6 h-6" />
              <span className="text-xl font-bold tracking-tight">Kevin Mukoya</span>
            </div>
            <p className="text-white/40 text-sm max-w-xs leading-relaxed">
              Crafting premium digital experiences through technical precision and intentional design. Based in Kenya, shipping worldwide.
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-widest font-bold text-white/30">Contact Information</h4>
            <div className="space-y-4">
              <a href="mailto:kevincruize@gmai.com" className="flex items-center gap-3 text-white/60 hover:text-white transition-colors group">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brand/20 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-sm">kevincruize@gmail.com</span>
              </a>
              <a href="tel:+254726270922" className="flex items-center gap-3 text-white/60 hover:text-white transition-colors group">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brand/20 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-sm">+254 726 270 922</span>
              </a>
              <a href="https://wa.me/254754442045" className="flex items-center gap-3 text-white/60 hover:text-white transition-colors group">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brand/20 transition-colors">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <span className="text-sm">WhatsApp: +254 754 442 045</span>
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-widest font-bold text-white/30">Availability</h4>
            <div className="liquid-glass rounded-2xl p-4 border border-white/5 bg-white/[0.02]">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
                <span className="text-xs font-semibold text-[#10b981]">Available for projects</span>
              </div>
              <p className="text-[11px] text-white/40 leading-relaxed">
                Currently taking on selective freelance work and full-time opportunities.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-[10px] text-white/20 uppercase tracking-widest font-bold">
            © 2026 Kevin Mukoya · Created by the greatest dev in Kenya
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-[10px] text-white/20 hover:text-white uppercase tracking-widest font-bold transition-all">Twitter</a>
            <a href="#" className="text-[10px] text-white/20 hover:text-white uppercase tracking-widest font-bold transition-all">GitHub</a>
            <a href="#" className="text-[10px] text-white/20 hover:text-white uppercase tracking-widest font-bold transition-all">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
