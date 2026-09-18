import React from 'react';

interface IconProps {
  className?: string;
  isAnimated?: boolean;
}

export const MicrosoftIcon: React.FC<IconProps> = ({ className = "w-6 h-6", isAnimated = true }) => (
  <svg viewBox="0 0 24 24" className={`${className} ${isAnimated ? 'group-hover:scale-110 transition-transform duration-300' : ''}`} fill="none">
    {/* Microsoft 4 squares */}
    <rect x="2" y="2" width="9" height="9" className="fill-[#F25022] transition-opacity duration-300" rx="1" />
    <rect x="13" y="2" width="9" height="9" className="fill-[#7FBA00] transition-opacity duration-300" rx="1" />
    <rect x="2" y="13" width="9" height="9" className="fill-[#00A4EF] transition-opacity duration-300" rx="1" />
    <rect x="13" y="13" width="9" height="9" className="fill-[#FFB900] transition-opacity duration-300" rx="1" />
  </svg>
);

export const PhotoshopIcon: React.FC<IconProps> = ({ className = "w-6 h-6", isAnimated = true }) => (
  <svg viewBox="0 0 24 24" className={`${className} ${isAnimated ? 'group-hover:scale-110 transition-transform duration-300' : ''}`} fill="none">
    <rect x="2" y="2" width="20" height="20" rx="4" fill="#001E36" stroke="#31A8FF" strokeWidth="1.5" />
    <path
      d="M6.5 16.5V7.5H10.2C11.6 7.5 12.6 8.5 12.6 9.8C12.6 11.1 11.6 12.1 10.2 12.1H8.3V16.5H6.5ZM8.3 10.5H10.1C10.7 10.5 11.1 10.2 11.1 9.8C11.1 9.4 10.7 9.1 10.1 9.1H8.3V10.5Z"
      fill="#31A8FF"
    />
    <path
      d="M13.5 14.8C13.8 15.6 14.6 16.2 15.7 16.2C16.8 16.2 17.5 15.6 17.5 14.7C17.5 13.9 16.9 13.5 15.6 13.1C14.1 12.7 13.2 12.1 13.2 10.8C13.2 9.5 14.3 8.5 15.7 8.5C16.8 8.5 17.7 9.1 18 10H16.6C16.4 9.6 16.1 9.4 15.6 9.4C15.1 9.4 14.7 9.7 14.7 10.1C14.7 10.6 15.1 10.9 16.2 11.2C17.7 11.7 18.7 12.2 18.7 13.6C18.7 15.1 17.4 16.8 15.7 16.8C14.3 16.8 13.2 16 12.8 14.8H13.5Z"
      fill="#31A8FF"
    />
  </svg>
);

export const CapCutIcon: React.FC<IconProps> = ({ className = "w-6 h-6", isAnimated = true }) => (
  <svg viewBox="0 0 24 24" className={`${className} ${isAnimated ? 'group-hover:scale-110 transition-transform duration-300' : ''}`} fill="none">
    <rect x="2" y="2" width="20" height="20" rx="5" fill="#121212" stroke="#FFFFFF" strokeOpacity="0.25" strokeWidth="1" />
    <path
      d="M5 8L12 12L5 16V8Z"
      fill="#FFFFFF"
    />
    <path
      d="M19 8L12 12L19 16V8Z"
      fill="#FFFFFF"
      fillOpacity="0.8"
    />
    <line x1="7" y1="12" x2="17" y2="12" stroke="#FFFFFF" strokeWidth="1.5" strokeDasharray="1.5 1.5" />
  </svg>
);

export const ChatGPTIcon: React.FC<IconProps> = ({ className = "w-6 h-6", isAnimated = true }) => (
  <svg viewBox="0 0 24 24" className={`${className} ${isAnimated ? 'group-hover:rotate-45 transition-transform duration-700 ease-out' : ''}`} fill="none">
    <rect x="2" y="2" width="20" height="20" rx="5" fill="#10A37F" fillOpacity="0.15" stroke="#10A37F" strokeWidth="1" />
    <path
      d="M12 4.5C12.8 4.5 13.6 4.8 14.2 5.3L16.5 4C17.5 5.5 17.4 7.5 16.5 9V10.2C17.5 10.6 18.2 11.5 18.5 12.6C18.8 13.7 18.4 14.8 17.6 15.6L18 18.2C16.8 19 15.2 19.1 13.8 18.4L12 19.5C10.6 19.5 9.3 18.8 8.5 17.7L6.2 18.9C5.3 17.4 5.3 15.4 6.2 13.9V12.8C5.2 12.4 4.5 11.5 4.2 10.4C3.9 9.3 4.3 8.2 5.1 7.4L4.7 4.8C5.9 4 7.5 3.9 8.9 4.6L12 4.5Z"
      stroke="#10A37F"
      strokeWidth="1.2"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="12" r="2.5" fill="#10A37F" />
  </svg>
);

export const AntigravityIcon: React.FC<IconProps> = ({ className = "w-6 h-6", isAnimated = true }) => (
  <svg viewBox="0 0 24 24" className={`${className} ${isAnimated ? 'group-hover:scale-110 transition-transform duration-300' : ''}`} fill="none">
    {/* Deep Google Antigravity Orb with orbital Rings */}
    <circle cx="12" cy="12" r="9" stroke="#8AB4F8" strokeWidth="1.2" strokeDasharray="3 2" className="animate-[spin_12s_linear_infinite]" />
    <circle cx="12" cy="12" r="5" fill="#8AB4F8" fillOpacity="0.25" stroke="#8AB4F8" strokeWidth="1.5" />
    <path d="M12 7V17M7 12H17" stroke="#efeee9" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="12" cy="12" r="1.5" fill="#FFFFFF" />
  </svg>
);

export const PythonIcon: React.FC<IconProps> = ({ className = "w-6 h-6", isAnimated = true }) => (
  <svg viewBox="0 0 24 24" className={`${className} ${isAnimated ? 'group-hover:scale-110 transition-transform duration-300' : ''}`} fill="none">
    <path
      d="M11.8 3C8.6 3 8.8 4.4 8.8 4.4L8.8 5.8H12.2V6.3H5.7C5.7 6.3 3.5 6 3.5 9.2C3.5 12.4 5.4 12.2 5.4 12.2H6.9V10.7C6.9 8.9 8.4 8.9 8.4 8.9H11.8C13.4 8.9 13.5 7.4 13.5 7.4V4.4C13.5 4.4 13.7 3 11.8 3ZM10.5 4.1C10.9 4.1 11.2 4.4 11.2 4.8C11.2 5.2 10.9 5.5 10.5 5.5C10.1 5.5 9.8 5.2 9.8 4.8C9.8 4.4 10.1 4.1 10.5 4.1Z"
      fill="#3776AB"
    />
    <path
      d="M12.2 21C15.4 21 15.2 19.6 15.2 19.6V18.2H11.8V17.7H18.3C18.3 17.7 20.5 18 20.5 14.8C20.5 11.6 18.6 11.8 18.6 11.8H17.1V13.3C17.1 15.1 15.6 15.1 15.6 15.1H12.2C10.6 15.1 10.5 16.6 10.5 16.6V19.6C10.5 19.6 10.3 21 12.2 21ZM13.5 19.9C13.1 19.9 12.8 19.6 12.8 19.2C12.8 18.8 13.1 18.5 13.5 18.5C13.9 18.5 14.2 18.8 14.2 19.2C14.2 19.6 13.9 19.9 13.5 19.9Z"
      fill="#FFD43B"
    />
  </svg>
);

export const CppIcon: React.FC<IconProps> = ({ className = "w-6 h-6", isAnimated = true }) => (
  <svg viewBox="0 0 24 24" className={`${className} ${isAnimated ? 'group-hover:scale-110 transition-transform duration-300' : ''}`} fill="none">
    <path d="M12 2L21 7.2V16.8L12 22L3 16.8V7.2L12 2Z" fill="#00599C" fillOpacity="0.2" stroke="#00599C" strokeWidth="1.5" />
    <path d="M11 9C9.5 9 8.5 10.3 8.5 12C8.5 13.7 9.5 15 11 15" stroke="#efeee9" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M14 12H16M15 11V13" stroke="#efeee9" strokeWidth="1.4" strokeLinecap="round" />
    <path d="M18 12H20M19 11V13" stroke="#efeee9" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

export const TypeScriptIcon: React.FC<IconProps> = ({ className = "w-6 h-6", isAnimated = true }) => (
  <svg viewBox="0 0 24 24" className={`${className} ${isAnimated ? 'group-hover:scale-110 transition-transform duration-300' : ''}`} fill="none">
    <rect x="2" y="2" width="20" height="20" rx="3" fill="#3178C6" />
    <path d="M7 9.5H13M10 9.5V17" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M14 15.5C14.5 16.2 15.3 16.7 16.3 16.7C17.5 16.7 18.2 16 18.2 15.1C18.2 13.7 16.4 13.3 15.4 12.8C14.3 12.3 14.1 11.5 14.1 10.8C14.1 9.8 15 8.8 16.4 8.8C17.4 8.8 18.1 9.2 18.5 9.8" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

export const SQLIcon: React.FC<IconProps> = ({ className = "w-6 h-6", isAnimated = true }) => (
  <svg viewBox="0 0 24 24" className={`${className} ${isAnimated ? 'group-hover:scale-110 transition-transform duration-300' : ''}`} fill="none">
    <ellipse cx="12" cy="6" rx="8" ry="3" stroke="#efeee9" strokeWidth="1.5" />
    <path d="M4 6V11C4 12.65 7.58 14 12 14C16.42 14 20 12.65 20 11V6" stroke="#efeee9" strokeWidth="1.5" />
    <path d="M4 11V16C4 17.65 7.58 19 12 19C16.42 19 20 17.65 20 16V11" stroke="#CC292B" strokeWidth="1.5" />
  </svg>
);

export const ReactIcon: React.FC<IconProps> = ({ className = "w-6 h-6", isAnimated = true }) => (
  <svg viewBox="0 0 24 24" className={`${className} ${isAnimated ? 'animate-[spin_10s_linear_infinite]' : ''}`} fill="none">
    <ellipse cx="12" cy="12" rx="3.5" ry="9.5" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(30 12 12)" />
    <ellipse cx="12" cy="12" rx="3.5" ry="9.5" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(90 12 12)" />
    <ellipse cx="12" cy="12" rx="3.5" ry="9.5" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(150 12 12)" />
    <circle cx="12" cy="12" r="1.8" fill="#61DAFB" />
  </svg>
);

export const TailwindIcon: React.FC<IconProps> = ({ className = "w-6 h-6", isAnimated = true }) => (
  <svg viewBox="0 0 24 24" className={`${className} ${isAnimated ? 'group-hover:scale-110 transition-transform duration-300' : ''}`} fill="none">
    <path
      d="M6.5 12C7.5 9 9.5 8 11.5 9C13 9.8 13.8 11 15 11C16.5 11 17.5 9.5 18 8C17 11 15 12 13 11C11.5 10.2 10.7 9 9.5 9C8 9 7 10.5 6.5 12ZM2 16C3 13 5 12 7 13C8.5 13.8 9.3 15 10.5 15C12 15 13 13.5 13.5 12C12.5 15 10.5 16 8.5 15C7 14.2 6.2 13 5 13C3.5 13 2.5 14.5 2 16Z"
      fill="#38BDF8"
    />
  </svg>
);

export const GitIcon: React.FC<IconProps> = ({ className = "w-6 h-6", isAnimated = true }) => (
  <svg viewBox="0 0 24 24" className={`${className} ${isAnimated ? 'group-hover:scale-110 transition-transform duration-300' : ''}`} fill="none">
    <path d="M19.5 10.5L13.5 4.5C12.8 3.8 11.7 3.8 11 4.5L4.5 11C3.8 11.7 3.8 12.8 4.5 13.5L10.5 19.5C11.2 20.2 12.3 20.2 13 19.5L19.5 13C20.2 12.3 20.2 11.2 19.5 10.5Z" stroke="#F05032" strokeWidth="1.5" />
    <circle cx="9" cy="12" r="1.5" fill="#F05032" />
    <circle cx="15" cy="12" r="1.5" fill="#F05032" />
    <circle cx="12" cy="9" r="1.5" fill="#F05032" />
    <line x1="9" y1="12" x2="12" y2="9" stroke="#F05032" strokeWidth="1.2" />
    <line x1="12" y1="9" x2="15" y2="12" stroke="#F05032" strokeWidth="1.2" />
  </svg>
);

export const renderTechIcon = (type: string, className?: string, isAnimated = true) => {
  switch (type) {
    case 'microsoft':
      return <MicrosoftIcon className={className} isAnimated={isAnimated} />;
    case 'photoshop':
      return <PhotoshopIcon className={className} isAnimated={isAnimated} />;
    case 'capcut':
      return <CapCutIcon className={className} isAnimated={isAnimated} />;
    case 'chatgpt':
      return <ChatGPTIcon className={className} isAnimated={isAnimated} />;
    case 'antigravity':
      return <AntigravityIcon className={className} isAnimated={isAnimated} />;
    case 'python':
      return <PythonIcon className={className} isAnimated={isAnimated} />;
    case 'cpp':
      return <CppIcon className={className} isAnimated={isAnimated} />;
    case 'typescript':
      return <TypeScriptIcon className={className} isAnimated={isAnimated} />;
    case 'sql':
      return <SQLIcon className={className} isAnimated={isAnimated} />;
    case 'react':
      return <ReactIcon className={className} isAnimated={isAnimated} />;
    case 'tailwind':
      return <TailwindIcon className={className} isAnimated={isAnimated} />;
    case 'git':
      return <GitIcon className={className} isAnimated={isAnimated} />;
    default:
      return <AntigravityIcon className={className} isAnimated={isAnimated} />;
  }
};
