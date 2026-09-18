import React, { useState } from 'react';
import { techItems, type TechItem } from '../data/cvData';
import { renderTechIcon } from './TechIcons';

interface TechShowcaseProps {
  onOpenStackModal: () => void;
}

export const TechShowcase: React.FC<TechShowcaseProps> = ({ onOpenStackModal }) => {
  const [activeHover, setActiveHover] = useState<TechItem | null>(null);

  return (
    <div
      className="absolute bottom-[6.2rem] sm:bottom-[7.5rem] inset-x-4 sm:inset-x-10 z-30 flex flex-col items-center pointer-events-auto anim-fade-up select-none"
      style={{ animationDelay: '1300ms' }}
    >
      {/* Floating Tooltip if hovering an icon */}
      <div className="h-6 mb-1.5 flex items-center justify-center transition-all duration-300">
        {activeHover ? (
          <div className="flex items-center gap-2 px-3 py-0.5 rounded-full bg-[#161616]/90 border border-cream/20 text-cream text-[11px] sm:text-xs tracking-wider backdrop-blur-md animate-fadeIn shadow-lg">
            <span className="font-semibold text-cream">{activeHover.name}</span>
            <span className="text-cream/40">|</span>
            <span className="text-cream/80">{activeHover.badge}</span>
          </div>
        ) : (
          <button
            onClick={onOpenStackModal}
            className="group flex items-center gap-1.5 text-[11px] sm:text-xs text-cream/60 hover:text-cream tracking-[0.18em] uppercase transition-colors duration-300"
          >
            <span>Software & Engineering Stack</span>
            <span className="text-[10px] text-cream/40 group-hover:translate-x-0.5 transition-transform duration-300">→</span>
          </button>
        )}
      </div>

      {/* Floating Icons Dock / Ribbon */}
      <div className="max-w-full overflow-x-auto no-scrollbar py-1 px-3 rounded-2xl bg-black/40 border border-cream/15 backdrop-blur-md shadow-2xl flex items-center gap-2.5 sm:gap-4">
        {techItems.map((item, index) => {
          // Staggered floating delays
          const floatDelayClass = index % 3 === 0 ? 'animate-float-subtle' : index % 3 === 1 ? 'animate-float-slow' : 'animate-float-subtle';
          const styleDelay = { animationDelay: `${(index * 180)}ms` };

          return (
            <div
              key={item.id}
              className="relative group py-1"
              onMouseEnter={() => setActiveHover(item)}
              onMouseLeave={() => setActiveHover(null)}
              onClick={onOpenStackModal}
            >
              <button
                type="button"
                className={`flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#181818]/80 hover:bg-[#252525] border border-cream/10 hover:border-cream/40 transition-all duration-300 cursor-pointer shadow-sm ${floatDelayClass}`}
                style={styleDelay}
                aria-label={item.name}
              >
                {renderTechIcon(item.iconType, "w-4 h-4 sm:w-5 sm:h-5 text-cream", true)}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
