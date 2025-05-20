import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Collaboration from './components/Collaboration';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Achievements />
        <Collaboration />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;