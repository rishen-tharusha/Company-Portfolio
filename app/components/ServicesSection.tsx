"use client";

import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Brain, Cloud, Cpu, Globe, Monitor, Smartphone, Sparkles } from 'lucide-react';

const SERVICES = [
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Fast, modern websites and web apps that make a strong first impression and keep working long after launch.',
    features: ['100% Mobile Responsive', 'Delivered in 7 Days', 'Free Hosting for 1 Year', 'SEO Support'],
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Native-feeling apps for iOS and Android that customers actually keep on their home screen.',
    features: ['Android & iOS Apps', 'Cross-Platform with React Native', 'Native Apps with Kotlin & Swift', 'App Store & Play Store Launch',],
  },
  {
    icon: Cloud,
    title: 'Cloud Services',
    description: 'Infrastructure that scales with demand and stays online, so growth never turns into downtime.',
    features: ['AWS / Azure / GCP Setup', 'Auto-Scaling Infrastructure', '24/7 Monitoring & Backups'],
  },
  {
    icon: Monitor,
    title: 'Desktop Applications',
    description: 'Purpose-built desktop software for the tools your team relies on every day, from tills to dashboards.',
    features: ['POS Systems', 'Custom Admin Dashboards', 'Windows & macOS Support'],
  },
  {
    icon: Brain,
    title: 'AI / ML Integration',
    description: 'Practical machine learning that automates decisions and surfaces the insight hiding in your data.',
    features: ['Predictive Analytics', 'Computer Vision & NLP', 'Custom Model Training & Deployment'],
  },
  {
    icon: Cpu,
    title: 'IoT Integration',
    description: 'Connect devices and sensors to real-time dashboards that turn hardware data into action.',
    features: ['Device & Sensor Connectivity', 'Real-Time Data Dashboards', 'Smart Automation Systems'],
  },
];

const DELAYS = ['delay-0', 'delay-75', 'delay-150', 'delay-200', 'delay-300', 'delay-500'];

const hexClip = '[clip-path:polygon(25%_0%,75%_0%,100%_50%,75%_100%,25%_100%,0%_50%)]';

export const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

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

  const enterClass = (delay = '') =>
    `transition-all duration-700 ${delay} motion-reduce:transition-none motion-reduce:transform-none ${
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
    }`;

  return (
    <section ref={sectionRef} id="services" className="relative overflow-hidden bg-linear-to-b from-gray-50 via-white to-gray-50 py-20 sm:py-28">
      {/* Hex grid backdrop */}
      <svg aria-hidden className="pointer-events-none absolute inset-0 h-full w-full text-[#1A304F] opacity-[0.04]">
        <defs>
          <pattern id="hex-grid-services" width="49.6" height="43.4" patternUnits="userSpaceOnUse">
            <polygon
              points="24.8,0 49.6,14.4 49.6,28.9 24.8,43.4 0,28.9 0,14.4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hex-grid-services)" />
      </svg>

      <div className="pointer-events-none absolute left-10 top-16 h-72 w-72 rounded-full bg-[#FCDC00]/10 blur-3xl motion-safe:animate-pulse" />
      <div
        className="pointer-events-none absolute bottom-16 right-10 h-80 w-80 rounded-full bg-[#1A304F]/5 blur-3xl motion-safe:animate-pulse"
        style={{ animationDelay: '2s' }}
      />

      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className={`mx-auto mb-16 max-w-2xl text-center ${enterClass()}`}>
          <span className="inline-flex items-center gap-2 rounded-full border border-[#FCDC00]/30 bg-[#FCDC00]/10 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-[#1A304F]">
            <Sparkles className="h-3.5 w-3.5 text-[#FCDC00]" aria-hidden />
            What We Do
          </span>

          <h2 className="mt-6 text-3xl font-bold text-[#1A304F] sm:text-4xl lg:text-5xl">
            Our{' '}
            <span className="relative whitespace-nowrap text-[#FCDC00]">
              Services
              <svg aria-hidden viewBox="0 0 200 12" className="absolute -bottom-1 left-0 w-full text-[#FCDC00]/40">
                <path d="M0 8 Q50 0 100 6 T200 4" stroke="currentColor" strokeWidth="4" fill="none" />
              </svg>
            </span>
          </h2>

          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-linear-to-r from-[#FCDC00] to-yellow-300" />

          <p className="mt-6 leading-relaxed text-gray-600 sm:text-lg">
            A comprehensive range of software development services to help your business transform its digital presence and operations.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, description, features }, i) => (
            <div
              key={title}
              className={`group rounded-2xl border border-gray-100 bg-white/80 p-8 shadow-md backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#FCDC00]/40 hover:shadow-xl hover:shadow-[#FCDC00]/10 ${DELAYS[i]} ${enterClass()}`}
            >
              <div className={`mb-6 flex h-16 w-16 items-center justify-center bg-linear-to-br from-[#1A304F] to-[#0F1F35] text-[#FCDC00] transition-transform duration-300 group-hover:scale-110 ${hexClip}`}>
                <Icon size={30} />
              </div>

              <h3 className="mb-2 text-xl font-bold text-[#1A304F] transition-colors group-hover:text-[#FCDC00]">
                {title}
              </h3>

              <p className="mb-5 leading-relaxed text-gray-600">{description}</p>

              <ul className="space-y-2">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-gray-600">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#FCDC00]" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`mt-16 text-center ${enterClass('delay-500')}`}>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-[#1A304F] to-[#0F1F35] px-8 py-4 font-bold text-white transition-transform hover:scale-[1.03] hover:shadow-xl hover:shadow-[#1A304F]/30"
          >
            Start Your Project Today
            <ArrowRight className="h-4 w-4" aria-hidden />
          </a>
          <p className="mt-4 text-gray-600">
            Ready to transform your business? Let's discuss your project requirements.
          </p>
        </div>
      </div>
    </section>
  );
};