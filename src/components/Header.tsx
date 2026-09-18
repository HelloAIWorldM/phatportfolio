import React from 'react';
import { cvData } from '../data/cvData';

interface HeaderProps {
  isMenuOpen: boolean;
  onToggleMenu: () => void;
  onOpenSection: (section: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  isMenuOpen,
  onToggleMenu,
  onOpenSection,
}) => {
  return (
    <header className="absolute inset-x-0 top-0 z-30 flex items-start justify-between px-6 pt-6 sm:px-10 sm:pt-8 select-none pointer-events-auto">
      {/* Brand / Logo link (top-left) */}
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          onOpenSection('story');
        }}
        className="font-hn text-lg tracking-wide text-cream hover:opacity-75 transition-opacity duration-300 anim-fade-up flex items-center gap-2"
        style={{ animationDelay: '800ms' }}
      >
        <span className="font-medium">Tấn Phát</span>
        <span className="text-[11px] px-1.5 py-0.5 rounded bg-cream/10 text-cream/70 tracking-widest uppercase font-mono">SE</span>
      </a>

      {/* Desktop Cluster (hidden on mobile) */}
      <div className="hidden sm:flex items-start gap-16 lg:gap-24">
        {/* Year */}
        <span
          className="text-sm font-hn text-cream anim-fade-up font-normal"
          style={{ animationDelay: '900ms' }}
        >
          2026
        </span>

        {/* Nav column: vertical stack flex-col gap-0.5 */}
        <nav className="flex flex-col gap-0.5 text-sm font-hn">
          {cvData.navLinks.map((link, idx) => (
            <button
              key={link.key}
              onClick={() => onOpenSection(link.key)}
              className="text-left text-cream hover:opacity-60 transition-opacity duration-300 anim-fade-up cursor-pointer"
              style={{ animationDelay: `${1000 + idx * 80}ms` }}
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Social column: vertical stack */}
        <div className="flex flex-col gap-0.5 text-sm font-hn">
          {cvData.socials.map((social, idx) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream hover:opacity-60 transition-opacity duration-300 anim-fade-up"
              style={{ animationDelay: `${1150 + idx * 80}ms` }}
            >
              {social.name}
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Hamburger Button (sm:hidden, z-50) */}
      <button
        type="button"
        onClick={onToggleMenu}
        className="sm:hidden relative z-50 flex items-center justify-center h-10 w-10 text-cream focus:outline-none"
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        style={{ animationDelay: '900ms' }}
      >
        <div className="relative w-6 h-4 flex flex-col justify-between items-center">
          {/* Top bar */}
          <span
            className={`block h-0.5 w-6 bg-cream transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
              isMenuOpen ? 'translate-y-[7px] rotate-45' : ''
            }`}
          />
          {/* Middle bar */}
          <span
            className={`block h-0.5 w-6 bg-cream transition-opacity duration-300 ${
              isMenuOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          {/* Bottom bar */}
          <span
            className={`block h-0.5 w-6 bg-cream transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
              isMenuOpen ? '-translate-y-[7px] -rotate-45' : ''
            }`}
          />
        </div>
      </button>
    </header>
  );
};
