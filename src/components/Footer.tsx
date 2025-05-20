import React from 'react';
import { Twitter, Instagram, Linkedin, Youtube, Bot, ArrowUp, Brain, Cpu, Network } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-12 relative overflow-hidden">
      {/* Neural network background */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 h-full w-full">
          {[...Array(144)].map((_, i) => (
            <div key={i} className="border-[0.5px] border-blue-500/10" />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10">
            <div className="flex items-center mb-6 md:mb-0">
              <Bot className="w-8 h-8 text-blue-400 mr-2" />
              <span className="text-xl font-bold">TechTalksVirtually</span>
            </div>
            
            <div className="flex space-x-6">
              <a 
                href="https://twitter.com/gmuraliyadav6" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com/_muralig" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-pink-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/gmuraliyadav" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://www.youtube.com/@TechTalksVirtually" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-red-500 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
            <div className="text-center">
              <div className="bg-blue-900/30 p-3 rounded-lg inline-flex mb-3">
                <Bot className="w-6 h-6 text-blue-400" />
              </div>
              <h4 className="text-sm font-medium text-blue-300">AI Chatbots</h4>
            </div>
            <div className="text-center">
              <div className="bg-blue-900/30 p-3 rounded-lg inline-flex mb-3">
                <Brain className="w-6 h-6 text-blue-400" />
              </div>
              <h4 className="text-sm font-medium text-blue-300">Neural Networks</h4>
            </div>
            <div className="text-center">
              <div className="bg-blue-900/30 p-3 rounded-lg inline-flex mb-3">
                <Cpu className="w-6 h-6 text-blue-400" />
              </div>
              <h4 className="text-sm font-medium text-blue-300">ML Models</h4>
            </div>
            <div className="text-center">
              <div className="bg-blue-900/30 p-3 rounded-lg inline-flex mb-3">
                <Network className="w-6 h-6 text-blue-400" />
              </div>
              <h4 className="text-sm font-medium text-blue-300">AI Systems</h4>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                &copy; {new Date().getFullYear()} TechTalksVirtually. Pioneering AI Solutions.
              </p>
              
              <button onClick={scrollToTop} className="flex items-center text-gray-400 hover:text-white transition-colors">
                <span className="mr-2 text-sm">Back to top</span>
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;