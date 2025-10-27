"use client";

import { Code, Sparkles, Zap, Rocket, Star } from 'lucide-react';
import { useState, useEffect } from 'react';

export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="relative bg-linear-to-br from-[#1A304F] via-[#1A304F] to-[#0F1F35] text-white overflow-hidden min-h-screen">
      <div className="absolute inset-0">
        <div 
          className="absolute w-96 h-96 rounded-full bg-[#FCDC00]/20 blur-3xl animate-pulse"
          style={{
            top: `${20 + mousePosition.y * 0.05}%`,
            left: `${10 + mousePosition.x * 0.03}%`,
            transform: 'translate(-50%, -50%)'
          }}
        ></div>
        
        <div 
          className="absolute w-80 h-80 rounded-full bg-[#FCDC00]/15 blur-3xl animate-pulse"
          style={{
            bottom: `${15 + mousePosition.y * 0.03}%`,
            right: `${15 + mousePosition.x * 0.04}%`,
            transform: 'translate(50%, 50%)',
            animationDelay: '1s'
          }}
        ></div>

        <div 
          className="absolute w-60 h-60 rounded-full bg-[#FCDC00]/10 blur-2xl animate-pulse"
          style={{
            top: `${60 + mousePosition.y * 0.02}%`,
            left: `${70 + mousePosition.x * 0.02}%`,
            transform: 'translate(-50%, -50%)',
            animationDelay: '2s'
          }}
        ></div>

        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#FCDC00] rotate-45 animate-ping"></div>
        <div className="absolute top-3/4 left-3/4 w-3 h-3 bg-[#FCDC00]/70 rotate-45 animate-ping" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-1/6 w-1 h-1 bg-[#FCDC00] rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-[#FCDC00]/50 rounded-full animate-pulse" style={{ animationDelay: '2.5s' }}></div>

        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" 
            style={{
              backgroundImage: `
                linear-gradient(rgba(252, 220, 0, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(252, 220, 0, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
              }}>
          </div>
        </div>
      </div>

      <div className="container relative z-10 flex flex-col items-center px-4 py-20 mx-auto md:py-32 md:flex-row">
        <div className={`md:w-1/2 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
          <div className="inline-flex items-center px-4 py-2 mb-6 text-sm font-semibold rounded-full bg-[#FCDC00]/20 border border-[#FCDC00]/30 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 mr-2 text-[#FCDC00]" />
            <span className="text-[#FCDC00]">Innovative Solutions</span>
          </div>

          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
            We Build{' '}
            <span className="relative inline-block">
              <span className="text-[#FCDC00] relative z-10">Software</span>
              <div className="absolute -bottom-2 left-0 right-0 h-3 bg-[#FCDC00]/20 blur-sm"></div>
            </span>
            {' '}That
            <br />
            <span className="relative">
              Matters
              <div className="absolute -right-8 -top-2 text-[#FCDC00] animate-bounce">
                <Star className="w-6 h-6" fill="currentColor" />
              </div>
            </span>
          </h1>

          <p className="max-w-md mb-8 text-lg leading-relaxed text-gray-200">
            HexCoders transforms your ideas into powerful, scalable, and
            user-friendly software solutions that drive business growth.
          </p>

          <div className="flex flex-col gap-4 mb-12 sm:flex-row">
            <button className="group relative px-8 py-4 bg-[#FCDC00] text-[#1A304F] font-bold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#FCDC00]/30">
              <a href='#contact' className="relative z-10 flex items-center justify-center">
                <Rocket className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Get Started
              </a>
              <div className="absolute inset-0 bg-linear-to-r from-[#FCDC00] to-yellow-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button className="group px-8 py-4 border-2 border-[#FCDC00]/50 text-white font-semibold rounded-xl backdrop-blur-sm transition-all duration-300 hover:bg-[#FCDC00]/10 hover:border-[#FCDC00] hover:scale-105">
              <a href='#portfolio' className="flex items-center justify-center">
                <Zap className="w-5 h-5 mr-2 group-hover:text-[#FCDC00] transition-colors" />
                View Portfolio
              </a>
            </button>
          </div>

          <div className="flex gap-8 text-sm">
            <div className="text-center">
              <div className="text-2xl font-bold text-[#FCDC00]">5+</div>
              <div className="text-gray-400">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#FCDC00]">1+</div>
              <div className="text-gray-400">Years</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#FCDC00]">100%</div>
              <div className="text-gray-400">Success</div>
            </div>
          </div>
        </div>

        <div className={`md:w-1/2 flex justify-center mt-12 md:mt-0 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
          <div className="relative">
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full bg-linear-to-br from-[#FCDC00] to-yellow-300 flex items-center justify-center shadow-2xl shadow-[#FCDC00]/30 animate-pulse">
              <div className="absolute border rounded-full inset-4 bg-white/10 backdrop-blur-sm border-white/20"></div>
              
              <div className="relative z-10 transition-transform duration-300 transform hover:scale-110">
                <Code size={150} className="text-[#1A304F] drop-shadow-lg" />
              </div>

              <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#1A304F] rounded-full flex items-center justify-center animate-bounce">
                <div className="w-3 h-3 bg-[#FCDC00] rounded-full"></div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#1A304F] rounded-full flex items-center justify-center animate-bounce" style={{ animationDelay: '0.5s' }}>
                <div className="w-2 h-2 bg-[#FCDC00] rounded-full"></div>
              </div>

              <div className="absolute top-1/4 -left-6 w-4 h-4 bg-[#1A304F] rotate-45 animate-pulse"></div>
              <div className="absolute bottom-1/4 -right-6 w-3 h-3 bg-[#1A304F] rotate-45 animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
              <div className="absolute top-0 left-1/2 w-4 h-4 bg-[#FCDC00]/70 rounded-full transform -translate-x-1/2 -translate-y-8"></div>
              <div className="absolute bottom-0 left-1/2 w-3 h-3 bg-[#FCDC00]/50 rounded-full transform -translate-x-1/2 translate-y-8"></div>
              <div className="absolute top-1/2 left-0 w-2 h-2 bg-[#FCDC00]/60 rounded-full transform -translate-x-8 -translate-y-1/2"></div>
              <div className="absolute top-1/2 right-0 w-3 h-3 bg-[#FCDC00]/40 rounded-full transform translate-x-8 -translate-y-1/2"></div>
            </div>

            <div className="absolute inset-0 rounded-full border-2 border-[#FCDC00]/20 animate-ping" style={{ animationDuration: '3s' }}></div>
            <div className="absolute inset-8 rounded-full border border-[#FCDC00]/30 animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-20 text-[#FCDC00]/10" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
        </svg>
      </div>
    </section>
  );
};