import React from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import About from './components/About/About.jsx';
import Projects from './components/Projects/Projects.jsx';
import Skills from './components/Skills/Skills.jsx';
import Experience from './components/Experience/Experience.jsx';
import Activities from './components/Activities/Activities.jsx';
import Contact from './components/Contact/Contact.jsx';

const App = () => {
  return (
    <div className="bg-[#0a192f]">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Activities />
      <Contact />
    </div>
  );
};

export default App;