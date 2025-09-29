import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import ParticleBackground from './components/ParticleBackground';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certificates from './components/Certificates';
import Education from './components/Education';
import Extracurriculars from './components/Extracurriculars';
import Contact from './components/Contact';

function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen overflow-x-hidden">
        <ParticleBackground />
        
        <div className="relative z-10">
          <Hero />
          <div data-section="about"><About /></div>
          <div data-section="projects"><Projects /></div>
          <div data-section="experience"><Experience /></div>
          <Skills />
          <Certificates />
          <Education />
          <Extracurriculars />
          <div data-section="contact"><Contact /></div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
