"use client";

import { useEffect, useRef, useState } from 'react';
import { Award, CheckCircle, Code, Lightbulb, Target, TrendingUp, Users, Zap } from 'lucide-react';

const FEATURES = [
  { icon: CheckCircle, text: 'Agile Methodology', delay: 'delay-0' },
  { icon: Code, text: 'Clean Code', delay: 'delay-100' },
  { icon: Target, text: 'Continuous Integration', delay: 'delay-200' },
  { icon: Users, text: 'Client-First Approach', delay: 'delay-300' },
];

const CARD_VARIANTS = {
  dark: {
    card: 'bg-linear-to-br from-[#1A304F] to-[#0F1F35] border-white/10',
    title: 'text-white',
    body: 'text-slate-300',
    iconWrap: 'bg-[#FCDC00]/15 text-[#FCDC00]',
  },
  light: {
    card: 'bg-white border-gray-100',
    title: 'text-[#1A304F]',
    body: 'text-gray-600',
    iconWrap: 'bg-[#1A304F]/5 text-[#1A304F]',
  },
  accent: {
    card: 'bg-linear-to-br from-[#FCDC00] to-yellow-300 border-transparent',
    title: 'text-[#1A304F]',
    body: 'text-[#1A304F]/80',
    iconWrap: 'bg-white/40 text-[#1A304F]',
  },
} as const;

const CARDS = [
  { icon: Zap, title: 'Innovative', description: 'Pushing boundaries with cutting-edge solutions', variant: 'dark' },
  { icon: TrendingUp, title: 'Scalable', description: 'Solutions that grow with your business', variant: 'light' },
  { icon: Users, title: 'Collaborative', description: 'Working together to achieve excellence', variant: 'light' },
  { icon: Award, title: 'Reliable', description: 'Committed to quality and on-time delivery', variant: 'accent' },
] as const;

const hexClip = '[clip-path:polygon(25%_0%,75%_0%,100%_50%,75%_100%,25%_100%,0%_50%)]';

export const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.unobserve(el);
  }, []);

  const enterClass = (delay = '', axis: 'x' | 'y' = 'y', reverse = false) => {
    const hidden = axis === 'y' ? 'translate-y-10' : reverse ? 'translate-x-10' : '-translate-x-10';
    return `transition-all duration-700 ${delay} ${
      isVisible ? 'translate-x-0 translate-y-0 opacity-100' : `${hidden} opacity-0`
    }`;
  };

  return (
    <section ref={sectionRef} id="about" className="relative overflow-hidden bg-linear-to-b from-white via-gray-50/40 to-white py-20 sm:py-28">
      {/* Hex grid backdrop, echoes the hero */}
      <svg aria-hidden className="pointer-events-none absolute inset-0 h-full w-full text-[#1A304F] opacity-[0.04]">
        <defs>
          <pattern id="hex-grid-about" width="49.6" height="43.4" patternUnits="userSpaceOnUse">
            <polygon
              points="24.8,0 49.6,14.4 49.6,28.9 24.8,43.4 0,28.9 0,14.4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hex-grid-about)" />
      </svg>

      <div className="pointer-events-none absolute left-10 top-16 h-40 w-40 rounded-full bg-[#FCDC00]/10 blur-3xl motion-safe:animate-pulse" />
      <div
        className="pointer-events-none absolute bottom-16 right-10 h-48 w-48 rounded-full bg-[#1A304F]/5 blur-3xl motion-safe:animate-pulse"
        style={{ animationDelay: '1.5s' }}
      />

      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className={`mb-16 text-center ${enterClass()}`}>
          <span className="inline-flex items-center gap-2 rounded-full border border-[#FCDC00]/30 bg-[#FCDC00]/10 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-[#1A304F]">
            <Lightbulb className="h-3.5 w-3.5 text-[#FCDC00]" aria-hidden />
            Our Story
          </span>

          <h2 className="mt-6 text-3xl font-bold text-[#1A304F] sm:text-4xl lg:text-5xl">
            About{' '}
            <span className="relative whitespace-nowrap text-[#FCDC00]">
              HexCoders
              <svg aria-hidden viewBox="0 0 200 12" className="absolute -bottom-1 left-0 w-full text-[#FCDC00]/40">
                <path d="M0 8 Q50 0 100 6 T200 4" stroke="currentColor" strokeWidth="4" fill="none" />
              </svg>
            </span>
          </h2>

          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-linear-to-r from-[#FCDC00] to-yellow-300" />
        </div>

        <div className="flex flex-col gap-12 lg:flex-row lg:items-start">
          {/* Story + features */}
          <div className={`lg:w-1/2 ${enterClass('delay-200', 'x')}`}>
            <h3 className="relative mb-6 text-2xl font-bold text-[#1A304F] sm:text-3xl">
              Your Vision, Our Code
              <span className="absolute -bottom-2 left-0 h-1 w-16 rounded-full bg-[#FCDC00]" />
            </h3>

            <div className="mb-8 space-y-4">
              <p className="rounded-2xl border-l-4 border-[#FCDC00] bg-white/70 p-6 leading-relaxed text-gray-700 shadow-sm">
                Founded in 2025, HexCoders has been at the forefront of software development innovation. We're a team of passionate developers, designers, and strategists dedicated to creating exceptional digital experiences.
              </p>
              <p className="rounded-2xl border-l-4 border-[#1A304F] bg-white/70 p-6 leading-relaxed text-gray-700 shadow-sm">
                Our approach combines technical excellence with creative thinking to deliver solutions that meet your current needs and are built to evolve with your business.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {FEATURES.map(({ icon: Icon, text, delay }) => (
                <div
                  key={text}
                  className={`group flex items-center gap-3 rounded-xl border border-gray-100 bg-white/80 p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md ${delay} ${enterClass()}`}
                >
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center bg-[#FCDC00]/15 text-[#FCDC00] ${hexClip}`}>
                    <Icon size={18} />
                  </div>
                  <span className="font-medium text-gray-700 transition-colors group-hover:text-[#1A304F]">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Value cards */}
          <div className={`lg:w-1/2 ${enterClass('delay-300', 'x', true)}`}>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {CARDS.map(({ icon: Icon, title, description, variant }) => {
                const v = CARD_VARIANTS[variant];
                return (
                  <div
                    key={title}
                    className={`rounded-2xl border p-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${v.card}`}
                  >
                    <div className={`mb-4 flex h-14 w-14 items-center justify-center bg-white/10 ${v.iconWrap} ${hexClip}`}>
                      <Icon size={28} />
                    </div>
                    <h4 className={`mb-2 text-xl font-bold ${v.title}`}>{title}</h4>
                    <p className={`leading-relaxed ${v.body}`}>{description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};