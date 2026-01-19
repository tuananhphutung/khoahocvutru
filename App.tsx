
import React, { useState } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import SolarSystem from './components/SolarSystem.tsx';
import SpaceTech from './components/SpaceTech.tsx';
import SkyAtlas from './components/SkyAtlas.tsx';
import Multimedia from './components/Multimedia.tsx';
import Community from './components/Community.tsx';
import Newsletter from './components/Newsletter.tsx';
import Footer from './components/Footer.tsx';
import LiveStatus from './components/LiveStatus.tsx';
import AISpaceModal from './components/AISpaceModal.tsx';

const App: React.FC = () => {
  const [showAI, setShowAI] = useState(false);

  return (
    <div className="relative min-h-screen bg-bg-dark font-sans selection:bg-primary selection:text-white">
      {/* Background Star Field */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 star-field"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-orange/5 blur-[150px] rounded-full"></div>
      </div>

      <Navbar onAIClick={() => setShowAI(true)} />
      
      <main className="relative z-10">
        <Hero />
        <SolarSystem />
        <SpaceTech />
        <SkyAtlas />
        <Multimedia />
        <Community />
        <Newsletter />
      </main>

      <Footer />
      <LiveStatus />

      {showAI && <AISpaceModal onClose={() => setShowAI(false)} />}
    </div>
  );
};

export default App;
