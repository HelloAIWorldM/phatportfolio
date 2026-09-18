import React from 'react';

export const Portrait: React.FC = () => {
  return (
    <>
      {/* Background image: full-bleed, behind everything, z-0 */}
      <img
        src="/bg_check.webp"
        alt=""
        className="absolute inset-0 h-full w-full object-cover anim-fade-in select-none pointer-events-none"
        loading="eager"
      />

      {/* Front portrait cutout overlay of Trương Tấn Phát (Full arms, ultra-sharp), above marquee, z-20 */}
      <img
        src="/phat_full_arms_4k.png"
        alt="Trương Tấn Phát"
        className="absolute inset-0 h-full w-full object-cover z-20 pointer-events-none anim-rise-in select-none"
        loading="eager"
      />
    </>
  );
};
