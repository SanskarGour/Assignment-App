import React from 'react';
import heroImage from '../assets/1000056077.png';

const HeroSection = () => {
  return (
    <div className="px-6 py-16" style={{ backgroundColor: '#eff6ff' }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h2 className="text-2xl font-medium text-gray-500 mb-6">Welcome!</h2>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Manage your <span className="text-blue-600">Deals</span>
            </h1>
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-blue-700 transition-colors shadow-lg">
              Get Started
            </button>
          </div>

          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-96 h-96 relative">
                <div className="absolute inset-0 rounded-3xl" style={{ backgroundColor: '#eff6ff' }}></div>
                <img 
                  src={heroImage} 
                  alt="Office illustration showing people working on deals"
                  className="relative z-10 w-full h-full object-contain rounded-3xl"
                  style={{ 
                    backgroundColor: '#eff6ff'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
