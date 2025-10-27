"use client";

import { useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return <nav className="sticky top-0 z-50 w-full bg-[#1A304F] shadow-md">
      <div className="container flex items-center justify-between px-4 py-4 mx-auto">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-white">
            <span className="text-[#FCDC00]">Hex</span>Coders
          </span>
        </div>
        {/* Desktop Navigation */}
        <div className="hidden px-10 space-x-8 md:flex">
          <a href="#home" className="text-white hover:text-[#FCDC00] transition-colors">
            Home
          </a>
          <a href="#about" className="text-white hover:text-[#FCDC00] transition-colors">
            About
          </a>
          <a href="#services" className="text-white hover:text-[#FCDC00] transition-colors">
            Services
          </a>
          <a href="#portfolio" className="text-white hover:text-[#FCDC00] transition-colors">
            Portfolio
          </a>
          <a href="#contact" className="text-white hover:text-[#FCDC00] transition-colors">
            Contact
          </a>
        </div>
        {/* Mobile Navigation Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
            {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && <div className="md:hidden bg-[#1A304F] py-4">
          <div className="flex flex-col items-center space-y-4">
            <a href="#home" className="text-white hover:text-[#FCDC00] transition-colors" onClick={() => setIsMenuOpen(false)}>
              Home
            </a>
            <a href="#about" className="text-white hover:text-[#FCDC00] transition-colors" onClick={() => setIsMenuOpen(false)}>
              About
            </a>
            <a href="#services" className="text-white hover:text-[#FCDC00] transition-colors" onClick={() => setIsMenuOpen(false)}>
              Services
            </a>
            <a href="#portfolio" className="text-white hover:text-[#FCDC00] transition-colors" onClick={() => setIsMenuOpen(false)}>
              Portfolio
            </a>
            <a href="#contact" className="text-white hover:text-[#FCDC00] transition-colors" onClick={() => setIsMenuOpen(false)}>
              Contact
            </a>
          </div>
        </div>}
    </nav>;
};