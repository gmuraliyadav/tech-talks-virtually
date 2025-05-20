import React, { useState, useEffect } from 'react';
import { Menu, X, Code } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <nav className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Code className="w-8 h-8 text-blue-600" />
            <span className="text-xl font-bold">TechTalksVirtually</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('projects')} 
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('achievements')} 
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Achievements
            </button>
            <button 
              onClick={() => scrollToSection('collaboration')} 
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Collaborate
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white absolute left-0 right-0 shadow-lg mt-4 py-4 px-6 flex flex-col space-y-4 animate-fadeIn">
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-gray-700 hover:text-blue-600 transition-colors py-2"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="text-gray-700 hover:text-blue-600 transition-colors py-2"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('projects')} 
              className="text-gray-700 hover:text-blue-600 transition-colors py-2"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('achievements')} 
              className="text-gray-700 hover:text-blue-600 transition-colors py-2"
            >
              Achievements
            </button>
            <button 
              onClick={() => scrollToSection('collaboration')} 
              className="text-gray-700 hover:text-blue-600 transition-colors py-2"
            >
              Collaborate
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-gray-700 hover:text-blue-600 transition-colors py-2"
            >
              Contact
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;