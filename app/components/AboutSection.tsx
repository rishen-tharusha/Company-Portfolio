"use client";

import { useState, useEffect, useRef } from 'react';
import { CheckCircle, TrendingUp, Users, Zap, Code, Lightbulb, Target, Award } from 'lucide-react';

export const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const sectionRef = useRef(null);

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

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const features = [
    { icon: CheckCircle, text: "Agile Methodology", delay: "0s" },
    { icon: Code, text: "Clean Code", delay: "0.1s" },
    { icon: Target, text: "Continuous Integration", delay: "0.2s" },
    { icon: Users, text: "Client-First Approach", delay: "0.3s" }
  ];

  const cards = [
    {
      id: 1,
      icon: Zap,
      title: "Innovative",
      description: "Pushing boundaries with cutting-edge solutions",
      bgColor: "bg-gradient-to-br from-[#1A304F] to-[#0F1F35]",
      textColor: "text-white",
      iconColor: "text-[#FCDC00]",
      glow: "shadow-[#1A304F]/30"
    },
    {
      id: 2,
      icon: TrendingUp,
      title: "Scalable",
      description: "Solutions that grow with your business",
      bgColor: "bg-gradient-to-br from-white to-gray-50",
      textColor: "text-[#1A304F]",
      iconColor: "text-[#1A304F]",
      glow: "shadow-gray-200"
    },
    {
      id: 3,
      icon: Users,
      title: "Collaborative",
      description: "Working together to achieve excellence",
      bgColor: "bg-gradient-to-br from-white to-gray-50",
      textColor: "text-[#1A304F]",
      iconColor: "text-[#1A304F]",
      glow: "shadow-gray-200"
    },
    {
      id: 4,
      icon: Award,
      title: "Reliable",
      description: "Committed to quality and on-time delivery",
      bgColor: "bg-gradient-to-br from-[#FCDC00] to-yellow-300",
      textColor: "text-[#1A304F]",
      iconColor: "text-[#1A304F]",
      glow: "shadow-[#FCDC00]/30"
    }
  ];

  return (
    <section ref={sectionRef} id="about" className="relative py-20 overflow-hidden bg-linear-to-b from-white via-gray-50/30 to-white">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-[#FCDC00]/5 blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-[#1A304F]/5 blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 rounded-full bg-[#FCDC00]/3 blur-xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        
        <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-[#FCDC00]/20 rotate-45 animate-ping"></div>
        <div className="absolute bottom-1/3 left-1/5 w-2 h-2 bg-[#1A304F]/20 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/6 w-4 h-4 bg-[#FCDC00]/15 rotate-45 animate-ping" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container relative z-10 px-4 mx-auto">
        <div className={`mb-16 text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center px-4 py-2 mb-6 text-sm font-semibold rounded-full bg-[#FCDC00]/10 border border-[#FCDC00]/20 backdrop-blur-sm">
            <Lightbulb className="w-4 h-4 mr-2 text-[#FCDC00]" />
            <span className="text-[#1A304F]">Our Story</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A304F] mb-4 relative">
            About <span className="relative">
              <span className="text-[#FCDC00] relative z-10">HexCoders</span>
              <div className="absolute -bottom-1 left-0 right-0 h-3 bg-[#FCDC00]/20 blur-sm"></div>
            </span>
            <div className="absolute -top-4 -right-4 text-[#FCDC00] animate-bounce">
              <div className="w-3 h-3 bg-[#FCDC00] rounded-full"></div>
            </div>
          </h2>
          
          <div className="relative mx-auto w-20 h-1 bg-linear-to-r from-[#FCDC00] to-yellow-300 rounded-full">
            <div className="absolute inset-0 bg-linear-to-r from-[#FCDC00] to-yellow-300 rounded-full animate-pulse"></div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-12 lg:flex-row">
          <div className={`lg:w-1/2 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="relative">
              <h3 className="text-2xl md:text-3xl font-bold text-[#1A304F] mb-6 relative">
                Your Vision, Our Code
                <div className="absolute -bottom-2 left-0 w-16 h-1 bg-[#FCDC00] rounded-full"></div>
              </h3>
              
              <div className="mb-8 space-y-6">
                <div className="relative p-6 border border-gray-100 shadow-lg bg-white/60 backdrop-blur-sm rounded-2xl">
                  <p className="leading-relaxed text-gray-700">
                    Founded in 2025, HexCoders has been at the forefront of software
                    development innovation. We're a team of passionate developers,
                    designers, and strategists dedicated to creating exceptional
                    digital experiences that solve real-world problems.
                  </p>
                  <div className="absolute top-0 left-0 w-1 h-full bg-linear-to-b from-[#FCDC00] to-transparent rounded-l-2xl"></div>
                </div>
                
                <div className="relative p-6 border border-gray-100 shadow-lg bg-white/60 backdrop-blur-sm rounded-2xl">
                  <p className="leading-relaxed text-gray-700">
                    Our approach combines technical excellence with creative thinking
                    to deliver solutions that not only meet your current needs but are
                    built to evolve with your business.
                  </p>
                  <div className="absolute top-0 left-0 w-1 h-full bg-linear-to-b from-[#1A304F] to-transparent rounded-l-2xl"></div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={index}
                      className={`group flex items-start p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-100 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}
                      style={{ transitionDelay: feature.delay }}
                    >
                      <div className="shrink-0 w-10 h-10 bg-[#FCDC00]/20 rounded-full flex items-center justify-center mr-3 group-hover:bg-[#FCDC00]/30 transition-colors">
                        <Icon className="text-[#FCDC00] group-hover:scale-110 transition-transform" size={20} />
                      </div>
                      <div className="flex-1">
                        <span className="text-gray-700 font-medium group-hover:text-[#1A304F] transition-colors">
                          {feature.text}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className={`lg:w-1/2 transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {cards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.id}
                    className={`group relative p-8 ${card.bgColor} rounded-2xl border border-white/20 shadow-xl hover:shadow-2xl hover:${card.glow} transition-all duration-500 cursor-pointer transform hover:scale-105 hover:-rotate-1 ${activeCard === card.id ? 'scale-105 -rotate-1' : ''}`}
                    
                    onMouseLeave={() => setActiveCard(null)}
                    style={{ 
                      animationDelay: `${index * 0.1}s`,
                      transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)'
                    }}
                  >
                    <div className="absolute inset-0 transition-opacity duration-500 opacity-0 rounded-2xl bg-linear-to-r from-transparent via-white/5 to-transparent group-hover:opacity-100"></div>
                    
                    <div className={`inline-flex items-center justify-center w-16 h-16 mb-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      <Icon className={`${card.iconColor} group-hover:animate-pulse`} size={32} />
                    </div>
                    
                    <h4 className={`text-xl font-bold ${card.textColor} mb-3 group-hover:scale-105 transition-transform`}>
                      {card.title}
                    </h4>
                    
                    <p className={`${card.textColor === 'text-white' ? 'text-gray-200' : 'text-gray-700'} leading-relaxed group-hover:${card.textColor} transition-colors`}>
                      {card.description}
                    </p>

                    <div className="absolute w-2 h-2 rounded-full top-4 right-4 bg-white/20 animate-ping"></div>
                    <div className="absolute w-1 h-1 rounded-full bottom-4 left-4 bg-white/30 animate-pulse"></div>
                    
                    <div className="absolute inset-0 transition-all duration-300 opacity-0 pointer-events-none rounded-2xl bg-linear-to-br from-transparent via-white/5 to-white/10 group-hover:opacity-100"></div>
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