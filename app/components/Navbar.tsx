"use client";

import { useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';

const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#contact', label: 'Contact' },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#1A304F] shadow-md">
      <div className="container flex items-center justify-between px-4 py-4 mx-auto">
        <span className="text-2xl font-bold text-white">
          <span className="text-[#FCDC00]">Hex</span>Coders
        </span>

        <div className="hidden px-10 space-x-8 md:flex">
          {NAV_LINKS.map(({ href, label }) => (
            <a key={href} href={href} className="text-white hover:text-[#FCDC00] transition-colors">
              {label}
            </a>
          ))}
        </div>

        <button
          className="text-white md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="flex flex-col items-center py-4 space-y-4 md:hidden bg-[#1A304F]">
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-white hover:text-[#FCDC00] transition-colors"
              onClick={closeMenu}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};