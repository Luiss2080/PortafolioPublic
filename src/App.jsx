import React from 'react';
import Navbar from './components/Navbar';
import CommercialHero from './components/CommercialHero';
import TechCarousel from './components/TechCarousel';
import CommercialProjects from './components/CommercialProjects';
import ProfessionalSkills from './components/ProfessionalSkills';
import BusinessSolutions from './components/BusinessSolutions';
import ProfessionalTrajectory from './components/ProfessionalTrajectory';
import Certificates from './components/Certificates';
import ExecutiveProfile from './components/ExecutiveProfile';
import FloatingWidgets from './components/FloatingWidgets';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-obsidian-black text-slate-100 selection:bg-sapphire-blue selection:text-white">
      <Navbar />
      <FloatingWidgets />
      <main>
        <CommercialHero />
        <TechCarousel />
        <CommercialProjects />
        <ProfessionalSkills />
        <BusinessSolutions />
        <ProfessionalTrajectory />
        <Certificates />
        <ExecutiveProfile />
      </main>
      <Footer />
    </div>
  );
}

export default App;
