import React from 'react';
import { Award, Star, TrendingUp } from 'lucide-react';

const Achievements = () => {
  return (
    <section id="achievements" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Achievements</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>
          
          <div className="text-center mb-12">
            <p className="text-gray-600 max-w-3xl mx-auto">
              We've developed multiple AI models that are being used to solve real-world problems.
              Our achievements reflect our commitment to innovation and excellence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
              <div className="flex justify-between items-start mb-6">
                <div className="rounded-lg inline-flex items-center justify-center p-3 bg-orange-100">
                  <Award className="w-6 h-6 text-orange-600" />
                </div>
                <span className="text-sm font-medium text-gray-400">01</span>
              </div>
              
              <h3 className="text-xl font-semibold mb-3">AI Model Development</h3>
              <p className="text-gray-600">
                Created several innovative AI models that help businesses automate complex processes and make
                better data-driven decisions.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
              <div className="flex justify-between items-start mb-6">
                <div className="rounded-lg inline-flex items-center justify-center p-3 bg-blue-100">
                  <Star className="w-6 h-6 text-blue-600" />
                </div>
                <span className="text-sm font-medium text-gray-400">02</span>
              </div>
              
              <h3 className="text-xl font-semibold mb-3">Recognition</h3>
              <p className="text-gray-600">
                Gained recognition for developing efficient and innovative technological solutions in the
                fields of AI and IoT applications.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
              <div className="flex justify-between items-start mb-6">
                <div className="rounded-lg inline-flex items-center justify-center p-3 bg-purple-100">
                  <TrendingUp className="w-6 h-6 text-purple-600" />
                </div>
                <span className="text-sm font-medium text-gray-400">03</span>
              </div>
              
              <h3 className="text-xl font-semibold mb-3">Growth & Impact</h3>
              <p className="text-gray-600">
                Successfully helped multiple clients implement advanced technological solutions that significantly
                improved their operational efficiency.
              </p>
            </div>
          </div>
          
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 text-white">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-2">Ready to Collaborate?</h3>
                <p className="max-w-xl text-blue-100">
                  Join us in creating the next generation of AI solutions that will transform businesses and lives.
                </p>
              </div>
              
              <button 
                onClick={() => {
                  const section = document.getElementById('collaboration');
                  if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="mt-6 md:mt-0 px-6 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;