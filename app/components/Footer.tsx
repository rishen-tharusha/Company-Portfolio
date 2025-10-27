"use client";

import { Github, Linkedin, Twitter, Instagram, ArrowUp, Code, Rocket } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    { name: "Web Development", icon: "🌐" },
    { name: "Mobile Development", icon: "📱" },
    { name: "Database Solutions", icon: "🗄️" },
    { name: "Cloud Services", icon: "☁️" },
    { name: "Security Consulting", icon: "🔐" }
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" }
  ];

  const socialLinks = [
    { name: "GitHub", icon: Github, href: "#", color: "hover:bg-gray-800" },
    { name: "LinkedIn", icon: Linkedin, href: "#", color: "hover:bg-blue-600" },
    { name: "Twitter", icon: Twitter, href: "#", color: "hover:bg-sky-500" },
    { name: "Instagram", icon: Instagram, href: "#", color: "hover:bg-pink-600" }
  ];

  return (
    <footer className="relative bg-linear-to-br from-[#1A304F] via-[#1A304F]/95 to-[#0f1a2e] text-white overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-[#FCDC00]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-[#FCDC00]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-20 right-1/4 w-2 h-2 bg-[#FCDC00] rounded-full animate-ping"></div>
        <div className="absolute w-1 h-1 bg-white rounded-full bottom-40 left-1/3 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-1.5 h-1.5 bg-[#FCDC00]/60 rounded-full animate-pulse"></div>
      </div>

      <button
        onClick={scrollToTop}
        className="absolute top-8 right-8 p-4 bg-[#FCDC00] text-[#1A304F] rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 group z-10"
      >
        <ArrowUp size={24} className="transition-transform duration-300 group-hover:scale-110" />
      </button>

      <div className="container relative px-4 pt-20 pb-8 mx-auto">
        <div className="grid grid-cols-1 gap-12 mb-16 lg:grid-cols-3">
          
          <div className="lg:col-span-1">
            <div className="relative p-8 transition-all duration-500 border bg-white/5 backdrop-blur-sm rounded-3xl border-white/10 hover:bg-white/10">
              <div className="absolute -top-4 left-6">
                <div className="flex items-center gap-2 px-4 py-2 bg-[#FCDC00] text-[#1A304F] rounded-full shadow-lg">
                  <Code size={18} />
                  <span className="text-sm font-bold">HEX CODERS</span>
                </div>
              </div>
              
              <div className="mt-6">
                <h3 className="mb-6 text-3xl font-bold">
                  <span className="text-[#FCDC00] relative">
                    Hex
                    <svg className="absolute left-0 w-full h-2 -bottom-1" viewBox="0 0 100 8" fill="none">
                      <path d="M2 6c20-2 40-2 96 0" stroke="#FCDC00" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
                    </svg>
                  </span>
                  Coders
                </h3>
                <p className="mb-8 text-lg leading-relaxed text-gray-300">
                  Transforming ideas into powerful software solutions that drive
                  <span className="text-[#FCDC00] font-semibold"> business growth</span>.
                </p>
                
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className={`group relative p-3 bg-white/10 rounded-2xl border border-white/20 ${social.color} transition-all duration-300 hover:transform hover:scale-110 hover:shadow-lg`}
                    >
                      <social.icon size={20} className="text-white transition-colors duration-300 group-hover:text-white" />
                      <div className="absolute inset-0 bg-linear-to-r from-[#FCDC00]/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              
              <div className="relative p-8 transition-all duration-500 border bg-white/5 backdrop-blur-sm rounded-3xl border-white/10 hover:bg-white/10">
                <div className="absolute -top-4 left-6">
                  <div className="flex items-center gap-2 px-4 py-2 text-white rounded-full shadow-lg bg-linear-to-r from-purple-500 to-pink-500">
                    <Rocket size={16} />
                    <span className="text-sm font-bold">SERVICES</span>
                  </div>
                </div>
                
                <div className="mt-6">
                  <ul className="space-y-4">
                    {services.map((service, index) => (
                      <li key={index}>
                        <a
                          className="flex items-center gap-4 p-3 transition-all duration-300 group rounded-xl hover:bg-white/10 hover:transform hover:translate-x-2"
                        >
                          <span className="text-2xl transition-transform duration-300 group-hover:scale-110">
                            {service.icon}
                          </span>
                          <span className="text-gray-300 group-hover:text-[#FCDC00] font-medium transition-colors duration-300">
                            {service.name}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="relative p-8 transition-all duration-500 border bg-white/5 backdrop-blur-sm rounded-3xl border-white/10 hover:bg-white/10">
                <div className="absolute -top-4 left-6">
                  <div className="flex items-center gap-2 px-4 py-2 text-white rounded-full shadow-lg bg-linear-to-r from-blue-500 to-cyan-500">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <span className="text-sm font-bold">QUICK LINKS</span>
                  </div>
                </div>
                
                <div className="mt-6">
                  <ul className="space-y-4">
                    {quickLinks.map((link, index) => (
                      <li key={index}>
                        <a 
                          href={link.href} 
                          className="flex items-center gap-4 p-3 transition-all duration-300 group rounded-xl hover:bg-white/10 hover:transform hover:translate-x-2"
                        >
                          <div className="w-2 h-2 bg-[#FCDC00] rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                          <span className="text-gray-300 group-hover:text-[#FCDC00] font-medium transition-colors duration-300">
                            {link.name}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-linear-to-r from-[#FCDC00]/20 via-transparent to-[#FCDC00]/20 blur-xl"></div>
          <div className="relative pt-8 border-t border-white/20">
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-[#FCDC00] rounded-full animate-pulse"></div>
                <p className="text-gray-400">
                  &copy; {new Date().getFullYear()} <span className="text-[#FCDC00] font-semibold">HexCoders</span>. All rights reserved.
                </p>
              </div>
              <div className="flex gap-6">
                {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item, index) => (
                  <a
                    key={index}
                    href="#"
                    className="relative text-sm text-gray-400 hover:text-[#FCDC00] transition-colors duration-300 group"
                  >
                    {item}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FCDC00] group-hover:w-full transition-all duration-300"></span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};