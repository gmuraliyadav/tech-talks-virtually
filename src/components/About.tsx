import React from 'react';
import { Code2, Cpu, Zap, Globe } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>
          
          <div className="grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-2">
              <div className="aspect-square relative rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
                <div className="text-8xl font-bold text-blue-600 opacity-30">GY</div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white w-32 h-32 rounded-full flex items-center justify-center">
                    <span className="text-4xl font-bold text-blue-600">GM</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-3">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">G Murali Yadav</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Working as a Full Stack Software Developer in a leading software company, I bring a deep passion for technology
                and innovation to everything I do. As a technophile, I'm constantly exploring new technologies and developments
                in the tech world.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                My experience in the payment domain has equipped me with specialized knowledge in secure and efficient
                transaction systems. Beyond that, I have a particular interest in IoT development and creating cutting-edge
                AI solutions that solve real-world problems.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <Code2 className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Full Stack Dev</h4>
                    <p className="text-sm text-gray-500">End-to-end solutions</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-indigo-100 p-3 rounded-lg mr-4">
                    <Zap className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">AI Enthusiast</h4>
                    <p className="text-sm text-gray-500">Custom AI solutions</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-purple-100 p-3 rounded-lg mr-4">
                    <Cpu className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">IoT Developer</h4>
                    <p className="text-sm text-gray-500">Smart connected devices</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-teal-100 p-3 rounded-lg mr-4">
                    <Globe className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Payments Expert</h4>
                    <p className="text-sm text-gray-500">Secure transactions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;