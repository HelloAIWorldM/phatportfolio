import { useState } from 'react';
import { Portrait } from './components/Portrait';
import { Marquee } from './components/Marquee';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { TechShowcase } from './components/TechShowcase';
import { ContentDrawer } from './components/ContentDrawer';
import { MobileDrawer } from './components/MobileDrawer';

export function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDrawerSection, setActiveDrawerSection] = useState<string | null>(null);

  const handleOpenSection = (section: string) => {
    setActiveDrawerSection(section);
    setIsMobileMenuOpen(false);
  };

  const handleCloseDrawer = () => {
    setActiveDrawerSection(null);
  };

  return (
    <main className="relative h-[100dvh] w-full overflow-hidden bg-[#0c0c0c] text-cream font-hn select-none">
      {/* 1. Background & Front Cutout Portrait Layers (z-0 and z-20) */}
      <Portrait />

      {/* 2. Marquee Name Track (z-10, letters scroll behind front portrait) */}
      <Marquee />

      {/* 3. Cream Rule & Desktop Footer (z-10 / z-30) */}
      <Footer />

      {/* 4. Tech & Software Showcase Floating Dock (z-30) */}
      <TechShowcase onOpenStackModal={() => handleOpenSection('stack')} />

      {/* 5. Header: Brand, Year, Desktop Nav/Social, Hamburger (z-30 / z-50) */}
      <Header
        isMenuOpen={isMobileMenuOpen}
        onToggleMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        onOpenSection={handleOpenSection}
      />

      {/* 6. Mobile Navigation Drawer (z-40, sm:hidden) */}
      <MobileDrawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onSelectSection={handleOpenSection}
      />

      {/* 7. Detailed CV Editorial Content Drawer (Story, Projects, Experience, Stack, Message) */}
      <ContentDrawer
        activeSection={activeDrawerSection}
        onClose={handleCloseDrawer}
        onSelectSection={handleOpenSection}
      />
    </main>
  );
}

export default App;
