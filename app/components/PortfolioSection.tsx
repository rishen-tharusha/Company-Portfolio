"use client";

import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Sparkles } from 'lucide-react';
import Image from 'next/image';

const PROJECTS = [
  {
    title: 'Lethal Bots 2025 QR Scanner',
    category: 'Web Development',
    image: '/images/Robot.jpg',
    description: 'A React.js web app for scanning team details from QR codes and storing them in Google Sheets, with animated UI and duplicate detection.',
    technologies: ['React', 'Google Sheets'],
    link: 'https://team-battle-indol.vercel.app/',
  },
  {
    title: 'Job-Search Mobile Application',
    category: 'Mobile Development',
    image: '/images/job.png',
    description: 'A fully functional React Native job search app fetching listings via the JSearch API, letting users apply for positions directly in-app.',
    technologies: ['React Native', 'Firebase'],
    link: 'https://www.linkedin.com/posts/rishen-lithan_react-native-job-search-app-user-can-activity-7140894862953926657-eXjz',
  },
  {
    title: 'Star-Map Navigator',
    category: 'Web Development',
    image: '/images/Nasa.webp',
    description: "A React application built on NASA's public APIs, showcasing frontend development with clean, functional components.",
    technologies: ['React.js', 'Tailwind', 'Vercel'],
    link: 'https://star-map-navigator.vercel.app/',
  },
  {
    title: 'Personal Portfolio',
    category: 'Web Development',
    image: '/images/My.png',
    description: 'A personal portfolio site built for a software engineer to showcase projects and experience.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://rishen-s-portfolio-f1a43.web.app/',
  },
];

const DELAYS = ['delay-0', 'delay-100', 'delay-200', 'delay-300'];

export const PortfolioSection = () => {
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
    <section ref={sectionRef} id="portfolio" className="relative overflow-hidden bg-linear-to-b from-white via-gray-50/50 to-white py-20 sm:py-28">
      {/* Hex grid backdrop, consistent with the rest of the page */}
      <svg aria-hidden className="pointer-events-none absolute inset-0 h-full w-full text-[#1A304F] opacity-[0.04]">
        <defs>
          <pattern id="hex-grid-portfolio" width="49.6" height="43.4" patternUnits="userSpaceOnUse">
            <polygon
              points="24.8,0 49.6,14.4 49.6,28.9 24.8,43.4 0,28.9 0,14.4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hex-grid-portfolio)" />
      </svg>

      <div className="pointer-events-none absolute left-10 top-16 h-72 w-72 rounded-full bg-[#FCDC00]/10 blur-3xl motion-safe:animate-pulse" />
      <div
        className="pointer-events-none absolute bottom-16 right-10 h-80 w-80 rounded-full bg-[#1A304F]/5 blur-3xl motion-safe:animate-pulse"
        style={{ animationDelay: '1.5s' }}
      />

      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className={`mx-auto mb-16 max-w-2xl text-center ${enterClass()}`}>
          <span className="inline-flex items-center gap-2 rounded-full border border-[#FCDC00]/30 bg-[#FCDC00]/10 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-[#1A304F]">
            <Sparkles className="h-3.5 w-3.5 text-[#FCDC00]" aria-hidden />
            Our Work
          </span>

          <h2 className="mt-6 text-3xl font-bold text-[#1A304F] sm:text-4xl lg:text-5xl">
            Our{' '}
            <span className="relative whitespace-nowrap text-[#FCDC00]">
              Portfolio
              <svg aria-hidden viewBox="0 0 200 12" className="absolute -bottom-1 left-0 w-full text-[#FCDC00]/40">
                <path d="M0 8 Q50 0 100 6 T200 4" stroke="currentColor" strokeWidth="4" fill="none" />
              </svg>
            </span>
          </h2>

          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-linear-to-r from-[#FCDC00] to-yellow-300" />

          <p className="mt-6 leading-relaxed text-gray-600 sm:text-lg">
            Explore our latest projects and see how we've helped businesses achieve their digital goals.
          </p>
        </div>

        {/* Project cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {PROJECTS.map(({ title, category, image, description, technologies, link }, i) => (
            <div
              key={title}
              className={`group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#1A304F]/10 ${DELAYS[i]} ${enterClass()}`}
            >
              <div className="relative aspect-4/3 w-full overflow-hidden">
                <Image
                  src={image}
                  alt={title}
                  fill
                  sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full border border-white/20 bg-[#1A304F]/85 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                  {category}
                </span>
              </div>

              <div className="flex flex-col gap-4 p-6">
                <div>
                  <h3 className="mb-1.5 text-lg font-bold text-[#1A304F]">{title}</h3>
                  <p className="line-clamp-3 text-sm leading-relaxed text-gray-600">{description}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-[#1A304F]/10 bg-[#1A304F]/5 px-2.5 py-1 text-xs font-medium text-[#1A304F]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-[#1A304F] transition-colors hover:text-[#FCDC00]"
                >
                  View Project
                  <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};