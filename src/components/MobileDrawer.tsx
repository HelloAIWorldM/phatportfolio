import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { cvData } from '../data/cvData';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectSection: (section: string) => void;
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({
  isOpen,
  onClose,
  onSelectSection,
}) => {
  // Lock body overflow while open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <div className="sm:hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-500 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Slide-in Panel */}
      <div
        className={`fixed inset-y-0 right-0 z-40 w-[80%] max-w-sm bg-[#141414] px-8 py-10 flex flex-col justify-between transition-transform duration-600 ease-[cubic-bezier(0.76,0,0.24,1)] ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close Button: Lucide X, absolute right-6 top-6 */}
        <button
          onClick={onClose}
          className={`absolute right-6 top-6 text-cream transition-all duration-300 ${
            isOpen ? 'rotate-0 opacity-100 delay-300' : 'rotate-90 opacity-0'
          }`}
          aria-label="Close drawer"
        >
          <X size={26} strokeWidth={1.5} />
        </button>

        {/* Top Section: Site Index */}
        <div className="mt-8 space-y-6">
          {/* Site Index Label */}
          <div
            className={`uppercase tracking-[0.2em] text-cream/50 text-xs font-hn transition-all duration-500 ${
              isOpen ? 'translate-y-0 opacity-100 delay-[250ms]' : 'translate-y-4 opacity-0'
            }`}
          >
            Site Index
          </div>

          {/* Navigation links: text-4xl font-hn */}
          <nav className="flex flex-col gap-3 font-hn">
            {cvData.navLinks.map((link, idx) => (
              <button
                key={link.key}
                onClick={() => {
                  onSelectSection(link.key);
                }}
                className={`text-left text-3xl sm:text-4xl text-cream hover:opacity-60 transition-all duration-500 ${
                  isOpen
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-6 opacity-0'
                }`}
                style={{
                  transitionDelay: isOpen ? `${300 + idx * 80}ms` : '0ms',
                }}
              >
                {link.name}
              </button>
            ))}
          </nav>
        </div>

        {/* Bottom Section: Find Me */}
        <div className="space-y-4">
          <div
            className={`uppercase tracking-[0.2em] text-cream/50 text-xs font-hn transition-all duration-500 ${
              isOpen ? 'translate-y-0 opacity-100 delay-[500ms]' : 'translate-y-4 opacity-0'
            }`}
          >
            Find Me
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 font-hn text-sm">
            {cvData.socials.map((social, idx) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-cream hover:opacity-60 transition-all duration-500 ${
                  isOpen
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-4 opacity-0'
                }`}
                style={{
                  transitionDelay: isOpen ? `${550 + idx * 60}ms` : '0ms',
                }}
              >
                {social.name}
              </a>
            ))}
          </div>

          {/* Short Bio blurb in mobile drawer */}
          <div className="pt-4 border-t border-cream/10 text-[11px] text-cream/50">
            Trương Tấn Phát &mdash; Data Scientist & Software Engineer
          </div>
        </div>
      </div>
    </div>
  );
};
