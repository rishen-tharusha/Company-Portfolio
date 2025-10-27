"use client";

import { useState, useEffect, useRef } from 'react';
import { ExternalLink, Sparkles, Star, Eye, Code } from 'lucide-react';
import Image from 'next/image'

export const PortfolioSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const projects = [
    {
      title: 'Lethal Bots 2025 QR Scanner',
      category: 'Web Development',
      image: '/images/Robot.jpg',
      description: ' React.js web app for scanning team details from QR codes and storing them in Google Sheets with animated UI and duplicate detection.',
      technologies: ['React', 'Google Sheets'],
      delay: '0s',
      link: 'https://team-battle-indol.vercel.app/'
    },
    {
      title: 'Job - Search Mobile Application',
      category: 'Mobile Development',
      image: '/images/job.png',
      description: 'A fully functional React Native job search app fetching jobs via JSearch Rapid API, enabling users to apply for positions directly through the app.',
      technologies: ['React Native', 'Firebase'],
      delay: '0.1s',
      link: 'https://www.linkedin.com/posts/rishen-lithan_react-native-job-search-app-user-can-activity-7140894862953926657-eXjz?utm_source=share&utm_medium=member_desktop&rcm=ACoAADZj7eoBCd742CQ8TU8lS52jGUVTilGUirk'
    },
    {
      title: 'Start-Map Navigator',
      category: 'Web Development',
      image: '/images/Nasa.webp',
      description: "A React application utilizing NASA's public APIs to showcase frontend development with functional components.",
      technologies: ['React.js', 'Tailwind', 'Vercel'],
      delay: '0.2s',
      link: 'https://star-map-navigator.vercel.app/'
    },
    {
      title: 'Personal Portfolio',
      category: 'Web Development',
      image: '/images/My.png',
      description: 'A Personal Portfolio for a Software Engineer',
      technologies: ['HTML', 'CSS', 'Java Script'],
      delay: '0.3s',
      link: 'https://rishen-s-portfolio-f1a43.web.app/'
    },
  ];

  return (
    <section 
      ref={sectionRef} 
      id="portfolio" 
      className="relative py-20 overflow-hidden bg-linear-to-br from-white via-gray-50/50 to-white"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute w-96 h-96 rounded-full bg-[#FCDC00]/8 blur-3xl animate-pulse"
          style={{
            top: `${15 + mousePosition.y * 0.03}%`,
            left: `${5 + mousePosition.x * 0.02}%`,
            transform: 'translate(-50%, -50%)'
          }}
        ></div>
        
        <div 
          className="absolute w-80 h-80 rounded-full bg-[#1A304F]/5 blur-3xl animate-pulse"
          style={{
            bottom: `${10 + mousePosition.y * 0.02}%`,
            right: `${10 + mousePosition.x * 0.03}%`,
            transform: 'translate(50%, 50%)',
            animationDelay: '1.5s'
          }}
        ></div>

        <div className="absolute top-1/6 left-1/4 w-4 h-4 bg-[#FCDC00]/20 rotate-45 animate-ping"></div>
        <div className="absolute bottom-1/4 right-1/3 w-3 h-3 bg-[#1A304F]/15 rounded-full animate-pulse"></div>
        <div className="absolute top-2/3 left-1/5 w-2 h-2 bg-[#FCDC00]/30 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-1/6 w-3 h-3 bg-[#1A304F]/20 rotate-45 animate-ping" style={{ animationDelay: '3s' }}></div>

        <div className="absolute inset-0 opacity-[0.015]">
          <div className="w-full h-full" 
               style={{
                 backgroundImage: `
                   linear-gradient(rgba(252, 220, 0, 0.3) 1px, transparent 1px),
                   linear-gradient(90deg, rgba(252, 220, 0, 0.3) 1px, transparent 1px)
                 `,
                 backgroundSize: '80px 80px'
               }}>
          </div>
        </div>
      </div>

      <div className="container relative z-10 px-4 mx-auto">
        <div className={`mb-16 text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center px-4 py-2 mb-6 text-sm font-semibold rounded-full bg-[#FCDC00]/10 border border-[#FCDC00]/20 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 mr-2 text-[#FCDC00]" />
            <span className="text-[#1A304F]">Our Work</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A304F] mb-6 relative">
            Our <span className="relative">
              <span className="text-[#FCDC00] relative z-10">Portfolio</span>
              <div className="absolute -bottom-2 left-0 right-0 h-3 bg-[#FCDC00]/20 blur-sm"></div>
            </span>
            <div className="absolute -top-4 -right-8 animate-bounce">
              <Star className="w-6 h-6 text-[#FCDC00]" fill="currentColor" />
            </div>
          </h2>
          
          <div className="relative mx-auto w-24 h-1 bg-linear-to-r from-transparent via-[#FCDC00] to-transparent rounded-full mb-6">
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-[#FCDC00] to-transparent rounded-full animate-pulse"></div>
          </div>
          
          <p className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-700">
            Explore our latest projects and see how we've helped businesses
            achieve their digital goals with cutting-edge solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-[#1A304F]/20 transition-all duration-700 cursor-pointer transform hover:scale-105 hover:-translate-y-2 ${hoveredProject === index ? 'scale-105 -translate-y-2' : ''}`}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{ 
                animationDelay: project.delay,
                transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.9)',
                opacity: isVisible ? 1 : 0,
                transition: `all 0.8s ease-out ${project.delay}`
              }}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-64 transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                />

                <div className="absolute top-4 left-4 px-3 py-1 bg-[#1A304F]/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-white/20">
                  {project.category}
                </div>

                <div className="absolute inset-0 bg-linear-to-t from-[#1A304F]/95 via-[#1A304F]/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                
                <div className="absolute flex gap-2 transition-all duration-300 transform translate-y-2 opacity-0 top-4 right-4 group-hover:opacity-100 group-hover:translate-y-0">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-[#FCDC00] hover:text-[#1A304F] transition-colors cursor-pointer">
                    <Eye className="w-4 h-4" />
                  </div>
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-[#FCDC00] hover:text-[#1A304F] transition-colors cursor-pointer">
                    <Code className="w-4 h-4" />
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transition-all duration-500 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-[#FCDC00] transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="mb-4 text-sm leading-relaxed text-gray-200">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-white/20 backdrop-blur-sm border-white/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a 
                  href={project.link}
                  className="inline-flex items-center text-[#FCDC00] font-semibold hover:text-white transition-colors duration-300 group/link"
                >
                  <span>View Project</span>
                  <ExternalLink className="w-4 h-4 ml-2 transition-transform transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                </a>
              </div>

              <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-[#FCDC00] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-[#FCDC00] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-200"></div>
              
              <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-[#FCDC00]/10 via-transparent to-[#1A304F]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};