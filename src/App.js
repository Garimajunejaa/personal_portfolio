import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Overview from './components/Overview/Overview';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Experience from './components/Experience/Experience';
import Activities from './components/Activities/Activities';

function App() {
  return (
    <div className="bg-navy min-h-screen">
      <Navbar />
      <Hero />
      <Overview />
      <Skills />
      <Experience />
      <Projects />
      <Activities />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
