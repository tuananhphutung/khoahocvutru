
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SolarSystem from './components/SolarSystem';
import SpaceTech from './components/SpaceTech';
import SkyAtlas from './components/SkyAtlas';
import Multimedia from './components/Multimedia';
import Community from './components/Community';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import LiveStatus from './components/LiveStatus';
import AISpaceModal from './components/AISpaceModal';

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
