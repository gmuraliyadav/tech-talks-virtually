import React from 'react';
import { Brain, Wrench, Shield, Bot } from 'lucide-react';

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">What We Do</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          
          <p className="text-center text-blue-100 max-w-3xl mx-auto mb-16">
            We develop customized AI tools tailored to your specific requirements. Our focus is on creating
            innovative solutions that solve complex problems quickly and efficiently.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-500 group">
              <div className="rounded-lg inline-flex items-center justify-center p-4 bg-blue-900/30 group-hover:bg-blue-600/50 transition-colors mb-6 relative">
                <div className="absolute inset-0 bg-blue-500/20 rounded-lg blur-xl group-hover:blur-2xl transition-all"></div>
                <Brain className="w-8 h-8 text-blue-400 group-hover:text-blue-200 transition-colors relative z-10" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Custom AI Tools</h3>
              <p className="text-blue-100">
                We create specialized AI tools that are precisely tailored to your specific needs and requirements.
              </p>
            </div>
            
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-indigo-500/20 hover:border-indigo-500/40 transition-all duration-500 group">
              <div className="rounded-lg inline-flex items-center justify-center p-4 bg-indigo-900/30 group-hover:bg-indigo-600/50 transition-colors mb-6 relative">
                <div className="absolute inset-0 bg-indigo-500/20 rounded-lg blur-xl group-hover:blur-2xl transition-all"></div>
                <Bot className="w-8 h-8 text-indigo-400 group-hover:text-indigo-200 transition-colors relative z-10" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Problem Solving</h3>
              <p className="text-blue-100">
                We help identify and solve complex technological challenges using our expertise in AI and software development.
              </p>
            </div>
            
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 group">
              <div className="rounded-lg inline-flex items-center justify-center p-4 bg-purple-900/30 group-hover:bg-purple-600/50 transition-colors mb-6 relative">
                <div className="absolute inset-0 bg-purple-500/20 rounded-lg blur-xl group-hover:blur-2xl transition-all"></div>
                <Wrench className="w-8 h-8 text-purple-400 group-hover:text-purple-200 transition-colors relative z-10" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Rapid Development</h3>
              <p className="text-blue-100">
                We pride ourselves on quick delivery without compromising on quality, ensuring your solutions are implemented efficiently.
              </p>
            </div>
            
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-teal-500/20 hover:border-teal-500/40 transition-all duration-500 group md:col-span-2 lg:col-span-3">
              <div className="rounded-lg inline-flex items-center justify-center p-4 bg-teal-900/30 group-hover:bg-teal-600/50 transition-colors mb-6 relative">
                <div className="absolute inset-0 bg-teal-500/20 rounded-lg blur-xl group-hover:blur-2xl transition-all"></div>
                <Shield className="w-8 h-8 text-teal-400 group-hover:text-teal-200 transition-colors relative z-10" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Our Approach</h3>
              <p className="text-blue-100">
                We believe in a collaborative approach where we work closely with clients to understand their unique challenges.
                By leveraging our expertise in AI, IoT, and full-stack development, we create innovative solutions that are not only
                technologically advanced but also practical and user-friendly. Our goal is to empower businesses and individuals with
                cutting-edge technology that enhances productivity and drives growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;