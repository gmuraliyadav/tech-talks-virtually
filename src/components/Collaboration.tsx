import React from 'react';
import { Users, CheckCircle, Send } from 'lucide-react';

const Collaboration = () => {
  return (
    <section id="collaboration" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Collaboration</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Join Our Testing Team</h3>
              <p className="text-gray-600 mb-6">
                We're looking for enthusiastic testers to help evaluate our AI models and provide valuable feedback.
                This is a great opportunity to get involved with cutting-edge technology and contribute to its development.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="mt-1 mr-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Early Access</h4>
                    <p className="text-gray-600 text-sm">Be among the first to experience our new AI tools</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Shape the Future</h4>
                    <p className="text-gray-600 text-sm">Your feedback directly influences our development</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Community</h4>
                    <p className="text-gray-600 text-sm">Connect with like-minded tech enthusiasts</p>
                  </div>
                </div>
              </div>
              
              <button 
                onClick={() => {
                  const section = document.getElementById('contact');
                  if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors flex items-center"
              >
                Contact Us
                <Send className="w-4 h-4 ml-2" />
              </button>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-10 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                <div className="rounded-full bg-blue-100 p-4 inline-flex mb-6">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                
                <h3 className="text-xl font-bold mb-4">Join Our Community</h3>
                <p className="text-gray-600 mb-6">
                  We're building a community of tech enthusiasts, AI researchers, and innovators who are passionate
                  about pushing the boundaries of what's possible with technology.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center px-4 py-3 bg-gray-50 rounded-lg">
                    <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                    <span className="text-gray-700">Active Discussions</span>
                  </div>
                  
                  <div className="flex items-center px-4 py-3 bg-gray-50 rounded-lg">
                    <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                    <span className="text-gray-700">Knowledge Sharing</span>
                  </div>
                  
                  <div className="flex items-center px-4 py-3 bg-gray-50 rounded-lg">
                    <span className="w-3 h-3 bg-purple-500 rounded-full mr-3"></span>
                    <span className="text-gray-700">Networking Opportunities</span>
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

export default Collaboration;