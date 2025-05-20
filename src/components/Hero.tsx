import React from 'react';
import { ArrowDown, Bot, Brain, Cpu, Network } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-black via-blue-950 to-indigo-950">
      {/* Neural network grid background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(24,24,64,0.2),rgba(0,0,0,0.9))]"></div>
        <div className="grid grid-cols-8 h-full w-full">
          {[...Array(64)].map((_, i) => (
            <div
              key={i}
              className="border-[0.5px] border-blue-500/5"
            />
          ))}
        </div>
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: 'linear-gradient(180deg, rgba(59,130,246,0.8) 0%, rgba(37,99,235,0.2) 100%)',
              boxShadow: '0 0 20px rgba(59,130,246,0.4)',
              animation: `float ${Math.random() * 10 + 15}s linear infinite`,
              opacity: Math.random() * 0.5 + 0.3,
            }}
          />
        ))}
      </div>

      {/* Glowing orbs */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute blur-3xl rounded-full opacity-30"
            style={{
              width: `${Math.random() * 400 + 200}px`,
              height: `${Math.random() * 400 + 200}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle at center, ${
                ['rgba(59,130,246,0.4)', 'rgba(99,102,241,0.4)', 'rgba(67,56,202,0.4)'][i]
              } 0%, transparent 70%)`,
              transform: 'translate(-50%, -50%)',
              animation: `pulse ${Math.random() * 4 + 6}s ease-in-out infinite alternate`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 opacity-0 animate-fadeInUp" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            Empowering Innovation with <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">Advanced AI</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-8 opacity-0 animate-fadeInUp" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            AI Solutions Architect | Machine Learning Expert | Neural Network Engineer
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 opacity-0 animate-fadeInUp" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            <div className="flex items-center space-x-2 text-blue-300">
              <Bot className="w-5 h-5" />
              <span>ChatBots</span>
            </div>
            <div className="flex items-center space-x-2 text-blue-300">
              <Brain className="w-5 h-5" />
              <span>Neural Nets</span>
            </div>
            <div className="flex items-center space-x-2 text-blue-300">
              <Cpu className="w-5 h-5" />
              <span>ML Models</span>
            </div>
            <div className="flex items-center space-x-2 text-blue-300">
              <Network className="w-5 h-5" />
              <span>AI Systems</span>
            </div>
          </div>
          
          <div className="opacity-0 animate-fadeInUp" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
            <button 
              onClick={scrollToAbout} 
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-full font-medium transition-all transform hover:scale-105 flex items-center group"
            >
              Explore AI Solutions
              <ArrowDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;