"use client";

import {
  ArrowUp,
  Brain,
  Cloud,
  Code,
  Cpu,
  Github,
  Globe,
  Instagram,
  Link as LinkIcon,
  Linkedin,
  Monitor,
  Rocket,
  Smartphone,
  Twitter,
} from 'lucide-react';
import type { ComponentType } from 'react';

const SERVICES = [
  { name: 'Web Development', icon: Globe },
  { name: 'Mobile Development', icon: Smartphone },
  { name: 'Cloud Services', icon: Cloud },
  { name: 'Desktop Applications', icon: Monitor },
  { name: 'AI / ML Integration', icon: Brain },
  { name: 'IoT Integration', icon: Cpu },
];

const QUICK_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Contact', href: '#contact' },
];

const SOCIAL_LINKS = [
  { name: 'GitHub', icon: Github, href: '#', hover: 'hover:bg-gray-800' },
  { name: 'LinkedIn', icon: Linkedin, href: '#', hover: 'hover:bg-blue-600' },
  { name: 'Twitter', icon: Twitter, href: '#', hover: 'hover:bg-sky-500' },
  { name: 'Instagram', icon: Instagram, href: '#', hover: 'hover:bg-pink-600' },
];

const hexClip = '[clip-path:polygon(25%_0%,75%_0%,100%_50%,75%_100%,25%_100%,0%_50%)]';

const CardBadge = ({ icon: Icon, label }: { icon: ComponentType<{ size?: number }>; label: string }) => (
  <div className="absolute -top-4 left-6 flex items-center gap-2 rounded-full bg-[#FCDC00] px-4 py-2 text-[#1A304F] shadow-lg">
    <Icon size={16} />
    <span className="font-mono text-xs font-bold uppercase tracking-wide">{label}</span>
  </div>
);

export const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative overflow-hidden bg-linear-to-br from-[#1A304F] via-[#1A304F]/95 to-[#0f1a2e] text-white">
      {/* Hex grid backdrop, consistent with the rest of the page */}
      <svg aria-hidden className="pointer-events-none absolute inset-0 h-full w-full text-[#FCDC00] opacity-[0.05]">
        <defs>
          <pattern id="hex-grid-footer" width="49.6" height="43.4" patternUnits="userSpaceOnUse">
            <polygon
              points="24.8,0 49.6,14.4 49.6,28.9 24.8,43.4 0,28.9 0,14.4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hex-grid-footer)" />
      </svg>

      <div className="pointer-events-none absolute -left-40 -top-40 h-80 w-80 rounded-full bg-[#FCDC00]/10 blur-3xl motion-safe:animate-pulse" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-[#FCDC00]/5 blur-3xl" />

      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="absolute right-4 top-6 z-20 rounded-full bg-[#FCDC00] p-3 text-[#1A304F] shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:right-8 sm:top-8 sm:p-4"
      >
        <ArrowUp size={22} />
      </button>

      <div className="container relative z-10 mx-auto px-4 pb-8 pt-24 sm:pt-28">
        <div className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-12">
          {/* Brand */}
          <div className="relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-colors duration-500 hover:bg-white/10 lg:col-span-1">
            <CardBadge icon={Code} label="HexCoders" />

            <div className="mt-6">
              <h3 className="mb-4 text-2xl font-bold sm:text-3xl">
                <span className="relative text-[#FCDC00]">
                  Hex
                  <svg aria-hidden viewBox="0 0 60 8" className="absolute -bottom-1 left-0 w-full">
                    <path d="M2 6c12-2 24-2 56 0" stroke="#FCDC00" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
                  </svg>
                </span>
                Coders
              </h3>
              <p className="mb-8 leading-relaxed text-gray-300">
                Transforming ideas into powerful software solutions that drive{' '}
                <span className="font-semibold text-[#FCDC00]">business growth</span>.
              </p>

              <div className="flex gap-3">
                {SOCIAL_LINKS.map(({ name, icon: Icon, href, hover }) => (
                  <a
                    key={name}
                    href={href}
                    aria-label={name}
                    className={`rounded-2xl border border-white/20 bg-white/10 p-3 transition-all duration-300 hover:scale-110 hover:shadow-lg ${hover}`}
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Services + quick links */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2">
            <div className="relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-colors duration-500 hover:bg-white/10">
              <CardBadge icon={Rocket} label="Services" />
              <ul className="mt-6 space-y-2">
                {SERVICES.map(({ name, icon: Icon }) => (
                  <li key={name}>
                    <a href="#services" className="group flex items-center gap-3 rounded-xl p-2.5 transition-colors hover:bg-white/10">
                      <span className={`flex h-8 w-8 shrink-0 items-center justify-center bg-[#FCDC00]/15 text-[#FCDC00] ${hexClip}`}>
                        <Icon size={16} />
                      </span>
                      <span className="font-medium text-gray-300 transition-colors group-hover:text-[#FCDC00]">
                        {name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-colors duration-500 hover:bg-white/10">
              <CardBadge icon={LinkIcon} label="Quick Links" />
              <ul className="mt-6 space-y-2">
                {QUICK_LINKS.map(({ name, href }) => (
                  <li key={name}>
                    <a href={href} className="group flex items-center gap-3 rounded-xl p-2.5 transition-colors hover:bg-white/10">
                      <span className="h-2 w-2 shrink-0 rounded-full bg-[#FCDC00] transition-transform group-hover:scale-150" />
                      <span className="font-medium text-gray-300 transition-colors group-hover:text-[#FCDC00]">
                        {name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-6 border-t border-white/20 pt-8 md:flex-row">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} <span className="font-semibold text-[#FCDC00]">HexCoders</span>. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <a key={item} href="#" className="group relative text-sm text-gray-400 transition-colors hover:text-[#FCDC00]">
                {item}
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#FCDC00] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};