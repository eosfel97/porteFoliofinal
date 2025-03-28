import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import SplashScreen from './components/SplashScreen';

const App: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash ? (
        <SplashScreen onFinish={() => setShowSplash(false)} />
      ) : (
        <div className="min-h-screen bg-slate-950 text-white">
          <Navbar />
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ExperienceSection />
          <ContactSection />
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
