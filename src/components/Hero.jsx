import React from 'react';
import AnalyticsAnimation from './AnalyticsAnimation';
import AnimatedTitle from './AnimatedTitle';

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 sm:pt-40 sm:pb-28 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-32 bg-[#162d7a] transform -skew-y-3"></div>
        <div className="absolute bottom-0 right-0 w-full h-32 bg-[#52b82f] transform skew-y-3"></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            <AnimatedTitle>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#162d7a] mb-6 leading-tight">
                Building Trust,{' '}
                <span className="relative inline-block">
                  <span className="relative z-10 text-[#52b82f]">Growing Wealth</span>
                  <span className="absolute -bottom-2 left-0 w-full h-4 bg-amber-300 -rotate-1"></span>
                </span>
              </h1>
            </AnimatedTitle>
            <AnimatedTitle>
              <h2 className="text-2xl sm:text-3xl font-black text-[#162d7a] mb-6">
                Empowering Your Financial Future
              </h2>
            </AnimatedTitle>
            <AnimatedTitle>
              <p className="text-lg sm:text-xl text-[#162d7a]/80 mb-8 max-w-2xl mx-auto lg:mx-0">
                Welcome to QuickFintax, your trusted partner in financial excellence. We are a full-spectrum financial services firm offering solutions that range from accounting and auditing to project finance, tax planning, and global advisory. With a deep understanding of local and international finance, we're here to simplify complexity, maximize compliance, and accelerate your financial growth.
              </p>
            </AnimatedTitle>
            <AnimatedTitle>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a 
                  href="#contact" 
                  className="bg-[#52b82f] text-white px-8 py-4 font-black text-lg border-4 border-[#162d7a] shadow-[8px_8px_0px_0px_#162d7a] hover:shadow-[12px_12px_0px_0px_#162d7a] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300"
                >
                  Get Started
                </a>
                <a 
                  href="#services" 
                  className="bg-white text-[#162d7a] px-8 py-4 font-black text-lg border-4 border-[#162d7a] shadow-[8px_8px_0px_0px_#162d7a] hover:shadow-[12px_12px_0px_0px_#162d7a] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300"
                >
                  Our Services
                </a>
              </div>
            </AnimatedTitle>
          </div>

          {/* Right Column - Animation */}
          <div className="relative">
            <div className="bg-white p-8 border-4 border-[#162d7a] shadow-[12px_12px_0px_0px_#162d7a] transform hover:-rotate-1 transition-all duration-300">
              <AnalyticsAnimation />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#52b82f] border-4 border-[#162d7a] shadow-[8px_8px_0px_0px_#162d7a] transform rotate-12"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#162d7a] border-4 border-[#52b82f] shadow-[8px_8px_0px_0px_#52b82f] transform -rotate-12"></div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {[
            { number: '7+', label: 'Years Experience' },
            { number: '100+', label: 'Regular Clients' },
            { number: '75+', label: 'Business Funding' },
            { number: '24/7', label: 'Support' }
          ].map((item, index) => (
            <AnimatedTitle key={index}>
              <div 
                className="bg-white h-full p-6 border-4 border-[#162d7a] shadow-[8px_8px_0px_0px_#162d7a] hover:shadow-[12px_12px_0px_0px_#162d7a] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-3xl sm:text-4xl font-black text-[#52b82f] mb-2">{item.number}</div>
                <div className="text-[#162d7a] font-black flex-grow">{item.label}</div>
              </div>
            </AnimatedTitle>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero; 