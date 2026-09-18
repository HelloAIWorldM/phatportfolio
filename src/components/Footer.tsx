import React from 'react';
import { cvData } from '../data/cvData';

export const Footer: React.FC = () => {
  return (
    <>
      {/* Cream rule: grows from left via scaleX(0) -> scaleX(1), origin left, delay 1200ms */}
      <div
        className="absolute inset-x-6 sm:inset-x-10 bottom-[5.5rem] sm:bottom-28 z-10 h-0.5 bg-cream anim-line"
      />

      {/* Desktop & Mobile Footer layout */}
      <footer className="absolute inset-x-0 bottom-0 z-30 sm:z-10 flex items-end justify-between px-6 pb-5 sm:px-10 sm:pb-8 text-xs sm:text-sm leading-relaxed font-hn text-cream select-none pointer-events-auto">
        {/* Footer left: three lines */}
        <div
          className="flex flex-col anim-fade-up"
          style={{ animationDelay: '1400ms' }}
        >
          <span className="font-medium tracking-wide">Data Scientist & Software Engineer</span>
          <span className="text-cream/80">AI & Web Solutions Crafter</span>
          <span className="text-cream/60">Nguyen Tat Thanh University 2022 — 2026</span>
        </div>

        {/* Footer right: right-aligned */}
        <div
          className="flex flex-col text-right anim-fade-up"
          style={{ animationDelay: '1550ms' }}
        >
          <span className="text-cream/60">Based in HCMC, Vietnam</span>
          <a
            href={`mailto:${cvData.email}`}
            className="hover:opacity-70 transition-opacity duration-300 underline decoration-cream/40 underline-offset-4 font-medium"
          >
            {cvData.email}
          </a>
        </div>
      </footer>
    </>
  );
};
