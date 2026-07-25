"use client";

import { ArrowRight, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

const STATS = [
  { value: '5+', label: 'Projects' },
  { value: '1+', label: 'Years' },
  { value: '100%', label: 'Success' },
];

type CodeSegment = { text: string; className?: string };
const CODE_LINES: CodeSegment[][] = [
  [
    { text: 'import ', className: 'text-[#FF7B72]' },
    { text: '{ Idea } ' },
    { text: 'from ', className: 'text-[#FF7B72]' },
    { text: "'hexcoders'", className: 'text-[#7EE787]' },
  ],
  [],
  [
    { text: 'export function ', className: 'text-[#FF7B72]' },
    { text: 'build', className: 'text-[#79C0FF]' },
    { text: '() {' },
  ],
  [
    { text: '  return ', className: 'text-[#FF7B72]' },
    { text: '<Product ready />', className: 'text-[#7EE787]' },
  ],
  [{ text: '}' }],
];

export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const enterClass = (delay = '') =>
    `transition-all duration-700 ${delay} motion-reduce:transition-none motion-reduce:transform-none ${
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
    }`;

  return (
    <section id="home" className="relative isolate overflow-hidden bg-linear-to-br from-[#1A304F] via-[#1A304F] to-[#0F1F35] py-20 text-white sm:py-28 lg:py-32">
      {/* Hex grid backdrop */}
      <svg aria-hidden className="pointer-events-none absolute inset-0 h-full w-full text-[#FCDC00] opacity-[0.06]">
        <defs>
          <pattern id="hex-grid" width="49.6" height="43.4" patternUnits="userSpaceOnUse">
            <polygon
              points="24.8,0 49.6,14.4 49.6,28.9 24.8,43.4 0,28.9 0,14.4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hex-grid)" />
      </svg>

      {/* Ambient glow */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#FCDC00]/20 blur-3xl motion-safe:animate-pulse sm:h-96 sm:w-96" />
      <div
        className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[#FCDC00]/10 blur-3xl motion-safe:animate-pulse sm:h-96 sm:w-96"
        style={{ animationDelay: '1s' }}
      />

      <div className="container relative z-10 mx-auto grid gap-14 px-4 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
        {/* Copy */}
        <div className={`mx-auto max-w-xl text-center lg:mx-0 lg:text-left ${enterClass()}`}>
          <span className="inline-flex items-center gap-2 rounded-full border border-[#FCDC00]/30 bg-[#FCDC00]/10 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-[#FCDC00]">
            <Sparkles className="h-3.5 w-3.5" aria-hidden />
            Software Studio
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            We build{' '}
            <span className="relative whitespace-nowrap text-[#FCDC00]">
              software
              <svg aria-hidden viewBox="0 0 200 12" className="absolute -bottom-1 left-0 w-full text-[#FCDC00]/40">
                <path d="M0 8 Q50 0 100 6 T200 4" stroke="currentColor" strokeWidth="4" fill="none" />
              </svg>
            </span>{' '}
            that matters.
          </h1>

          <p className="mt-6 text-base leading-relaxed text-slate-300 sm:text-lg">
            HexCoders turns your ideas into powerful, scalable, and user-friendly software that drives real business growth.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#FCDC00] px-6 py-3.5 font-bold text-[#1A304F] transition-transform hover:scale-[1.03] hover:shadow-lg hover:shadow-[#FCDC00]/30"
            >
              Get Started
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/20 px-6 py-3.5 font-semibold text-white transition-colors hover:border-[#FCDC00]/60 hover:bg-white/5"
            >
              View Portfolio
            </a>
          </div>

          <div className="mt-12 flex justify-center gap-8 lg:justify-start">
            {STATS.map(({ value, label }) => (
              <div key={label} className="text-center lg:text-left">
                <div className="font-mono text-2xl font-bold text-[#FCDC00]">{value}</div>
                <div className="text-sm text-slate-400">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Code editor mock */}
        <div className={`relative mx-auto w-full max-w-md lg:max-w-none ${enterClass('delay-200')}`}>
          <div
            aria-hidden
            className="absolute -right-6 -top-6 hidden h-16 w-16 rotate-12 bg-[#FCDC00]/80 sm:block [clip-path:polygon(25%_0%,75%_0%,100%_50%,75%_100%,25%_100%,0%_50%)]"
          />

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0B1524] shadow-2xl shadow-black/40">
            <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-[#FF5F56]" />
              <span className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
              <span className="h-3 w-3 rounded-full bg-[#27C93F]" />
              <span className="ml-3 font-mono text-xs text-slate-400">hero.tsx</span>
            </div>

            <div className="space-y-1.5 overflow-x-auto px-5 py-6 font-mono text-sm leading-relaxed sm:text-base">
              {CODE_LINES.map((segments, i) => (
                <div key={i} className="flex gap-4">
                  <span className="select-none text-slate-600">{String(i + 1).padStart(2, '0')}</span>
                  <span className="whitespace-pre">
                    {segments.map((seg, j) => (
                      <span key={j} className={seg.className ?? 'text-slate-300'}>
                        {seg.text}
                      </span>
                    ))}
                    {i === CODE_LINES.length - 1 && (
                      <span
                        aria-hidden
                        className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 bg-[#FCDC00] align-middle motion-safe:animate-pulse"
                      />
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};