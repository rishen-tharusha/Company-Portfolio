"use client";

import { useState, useEffect, useRef } from 'react';
import { Globe, Smartphone, Database, Cloud, Shield, Brain, Sparkles, Star, Zap } from 'lucide-react';

export const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState<number | null>(null);
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

  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern frameworks and technologies.',
      color: 'from-blue-500 to-blue-600',
      delay: '0s',
      features: ['React/Vue/Angular', 'Full-Stack Solutions', 'Responsive Design']
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android devices.',
      color: 'from-green-500 to-green-600',
      delay: '0.1s',
      features: ['React Native', 'Flutter', 'Native iOS/Android']
    },
    {
      icon: Database,
      title: 'Database Solutions',
      description: 'Efficient database design, optimization, and management for your applications.',
      color: 'from-purple-500 to-purple-600',
      delay: '0.2s',
      features: ['SQL/NoSQL', 'Performance Tuning', 'Data Migration']
    },
    {
      icon: Cloud,
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure and deployment solutions for your business.',
      color: 'from-cyan-500 to-cyan-600',
      delay: '0.3s',
      features: ['AWS/Azure/GCP', 'DevOps', 'Auto-Scaling']
    },
    {
      icon: Shield,
      title: 'Security Consulting',
      description: 'Comprehensive security audits and implementation of best practices.',
      color: 'from-red-500 to-red-600',
      delay: '0.4s',
      features: ['Security Audits', 'Penetration Testing', 'Compliance']
    },
    {
      icon: Brain,
      title: 'AI Integration',
      description: 'Intelligent solutions leveraging machine learning and artificial intelligence.',
      color: 'from-orange-500 to-orange-600',
      delay: '0.5s',
      features: ['Machine Learning', 'NLP', 'Deep Learning']
    }
  ];

  return (
    <section 
      ref={sectionRef} 
      id="services" 
      className="relative py-20 overflow-hidden bg-linear-to-br from-gray-50 via-white to-gray-50"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute w-96 h-96 rounded-full bg-[#FCDC00]/5 blur-3xl animate-pulse"
          style={{
            top: `${20 + mousePosition.y * 0.02}%`,
            left: `${10 + mousePosition.x * 0.01}%`,
            transform: 'translate(-50%, -50%)'
          }}
        ></div>
        
        <div 
          className="absolute w-80 h-80 rounded-full bg-[#1A304F]/5 blur-3xl animate-pulse"
          style={{
            bottom: `${15 + mousePosition.y * 0.01}%`,
            right: `${15 + mousePosition.x * 0.02}%`,
            transform: 'translate(50%, 50%)',
            animationDelay: '2s'
          }}
        ></div>

        <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-[#FCDC00]/30 rotate-45 animate-ping"></div>
        <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-[#1A304F]/20 rounded-full animate-pulse"></div>
        <div className="absolute top-2/3 left-1/6 w-4 h-4 bg-[#FCDC00]/20 rotate-45 animate-ping" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/6 right-1/3 w-2 h-2 bg-[#1A304F]/15 rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>

        <div className="absolute inset-0 opacity-[0.02]">
          <div className="w-full h-full" 
               style={{
                 backgroundImage: `
                   linear-gradient(rgba(26, 48, 79, 0.1) 1px, transparent 1px),
                   linear-gradient(90deg, rgba(26, 48, 79, 0.1) 1px, transparent 1px)
                 `,
                 backgroundSize: '60px 60px'
               }}>
          </div>
        </div>
      </div>

      <div className="container relative z-10 lg:px-16 px-4 mx-auto">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center px-4 py-2 mb-6 text-sm font-semibold rounded-full bg-[#FCDC00]/10 border border-[#FCDC00]/20 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 mr-2 text-[#FCDC00]" />
            <span className="text-[#1A304F]">What We Do</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A304F] mb-6 relative">
            Our <span className="relative">
              <span className="text-[#FCDC00] relative z-10">Services</span>
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
            We offer a comprehensive range of software development services to
            help businesses transform their digital presence and operations.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`group relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-100 hover:border-[#FCDC00]/30 shadow-lg hover:shadow-2xl hover:shadow-[#FCDC00]/10 transition-all duration-500 cursor-pointer transform hover:scale-105 hover:-translate-y-2 ${activeService === index ? 'scale-105 -translate-y-2' : ''}`}
                onMouseEnter={() => setActiveService(index)}
                onMouseLeave={() => setActiveService(null)}
                style={{ 
                  animationDelay: service.delay,
                  transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.9)',
                  opacity: isVisible ? 1 : 0,
                  transition: `all 0.6s ease-out ${service.delay}`
                }}
              >
                <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-[#FCDC00]/20 via-transparent to-[#1A304F]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                <div className="absolute top-0 left-8 right-8 h-1 bg-linear-to-r from-transparent via-[#FCDC00] to-transparent rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                
                <div className="relative mb-6">
                  <div className={`w-20 h-20 rounded-2xl bg-linear-to-br from-[#1A304F] to-[#0F1F35] flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg group-hover:shadow-xl group-hover:shadow-[#1A304F]/30`}>
                    <Icon size={40} className="text-[#FCDC00] group-hover:animate-pulse" />
                  </div>
                  
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#FCDC00]/20 rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-[#1A304F]/20 rotate-45 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ animationDelay: '0.5s' }}></div>
                </div>

                <h3 className="text-xl font-bold text-[#1A304F] mb-3 group-hover:text-[#FCDC00] transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="mb-4 leading-relaxed text-gray-700 transition-colors duration-300 group-hover:text-gray-900">
                  {service.description}
                </p>

                <div className="mb-6 space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-600 transition-colors duration-300 group-hover:text-gray-800">
                      <div className="w-2 h-2 bg-[#FCDC00] rounded-full mr-3 group-hover:animate-pulse"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-[#FCDC00]/5 via-transparent to-[#1A304F]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                <div className="absolute top-4 right-4 w-2 h-2 bg-[#FCDC00]/30 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-[#1A304F]/40 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300"></div>
              </div>
            );
          })}
        </div>

        <div className={`text-center mt-16 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="relative inline-block">
            <button className="group px-8 py-4 bg-linear-to-r from-[#1A304F] to-[#0F1F35] text-white font-bold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#1A304F]/30">
              <a href='#contact' className="relative z-10 flex items-center justify-center">
                <Zap className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Start Your Project Today
              </a>
              <div className="absolute inset-0 bg-linear-to-r from-[#FCDC00] to-yellow-300 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </button>
            
            <div className="absolute -top-2 -left-2 w-3 h-3 bg-[#FCDC00] rotate-45 animate-ping"></div>
            <div className="absolute -bottom-2 -right-2 w-2 h-2 bg-[#1A304F] rounded-full animate-pulse"></div>
          </div>
          
          <p className="mt-4 text-gray-600">
            Ready to transform your business? Let's discuss your project requirements.
          </p>
        </div>
      </div>
    </section>
  );
};