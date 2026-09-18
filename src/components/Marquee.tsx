import React from 'react';

export const Marquee: React.FC = () => {
  const marqueeText = "TRƯƠNG TẤN PHÁT \u2014 DATA & SOFTWARE";

  return (
    <div
      className="absolute inset-x-0 top-[16vh] sm:top-[14vh] z-10 overflow-hidden pointer-events-none anim-fade-up"
      style={{ animationDelay: '500ms' }}
    >
      <div
        className="marquee-track flex w-max whitespace-nowrap font-hn text-[16vh] sm:text-[26vh] leading-none text-cream tracking-tight uppercase font-medium select-none"
        style={{ animation: 'marquee 30s linear infinite' }}
      >
        {/* First half */}
        <span className="inline-block pr-[6vw]">
          {marqueeText}&nbsp;
        </span>
        {/* Second identical half for seamless infinite loop */}
        <span className="inline-block pr-[6vw]">
          {marqueeText}&nbsp;
        </span>
      </div>
    </div>
  );
};
