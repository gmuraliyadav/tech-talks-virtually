import React from 'react';
import { Cloud, ArrowRight, Users, Server } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>
          
          <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-2xl overflow-hidden shadow-xl mb-16">
            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="p-4 bg-white/10 rounded-xl">
                  <Cloud className="w-12 h-12 text-blue-200" />
                </div>
                
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">AI Universe Clouds</h3>
                  <p className="text-blue-200 mb-6 max-w-2xl">
                    Our flagship project that simplifies system integration through advanced AI. This platform allows
                    seamless connection between different systems and services, making technology adoption easier
                    than ever before.
                  </p>
                  
                  <div className="flex flex-wrap gap-4">
                    <div className="bg-white/10 px-4 py-2 rounded-full text-sm text-white">
                      AI-Powered
                    </div>
                    <div className="bg-white/10 px-4 py-2 rounded-full text-sm text-white">
                      Easy Integration
                    </div>
                    <div className="bg-white/10 px-4 py-2 rounded-full text-sm text-white">
                      Scalable Architecture
                    </div>
                    <div className="bg-white/10 px-4 py-2 rounded-full text-sm text-white">
                      Cloud-Based
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-white/20">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="flex items-start">
                    <div className="bg-white/10 p-2 rounded-lg mr-3">
                      <Users className="w-5 h-5 text-blue-200" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">Multiple Users</h4>
                      <p className="text-sm text-blue-200">Support for team collaboration</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-white/10 p-2 rounded-lg mr-3">
                      <Server className="w-5 h-5 text-blue-200" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">API Ecosystem</h4>
                      <p className="text-sm text-blue-200">Connect with any service</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center mt-4 md:mt-0 md:justify-end">
                    <button className="text-white group flex items-center">
                      <span className="mr-2">Coming Soon</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-gray-600 mb-6">
              Want to know more about why people visit our page? 
            </p>
            <h3 className="text-xl font-semibold mb-6">Why Visitors Land Here</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="font-medium text-gray-900 mb-2">AI Integration</h4>
                <p className="text-gray-600 text-sm">
                  Looking for custom AI solutions for their business needs.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="font-medium text-gray-900 mb-2">Technical Expertise</h4>
                <p className="text-gray-600 text-sm">
                  Seeking professionals with deep knowledge in cutting-edge technologies.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="font-medium text-gray-900 mb-2">Collaboration</h4>
                <p className="text-gray-600 text-sm">
                  Interested in partnering on innovative tech projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;