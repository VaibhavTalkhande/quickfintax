import React from 'react';
import AnimatedTitle from './AnimatedTitle';

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-white relative">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#162d7a]/5 transform -skew-x-12"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-[#52b82f]/5 transform skew-x-12"></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative">
        <AnimatedTitle>
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-[#162d7a] mb-6">
              About <span className="relative inline-block">
                <span className="relative z-10 text-[#52b82f]">QuickFintax</span>
                <span className="absolute -bottom-2 left-0 w-full h-4 bg-[#162d7a]/10 -rotate-1"></span>
              </span>
            </h2>
            <p className="text-[#162d7a] max-w-2xl mx-auto text-lg sm:text-xl font-medium">
              Your trusted partner in financial excellence since 2024
            </p>
          </div>
        </AnimatedTitle>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <AnimatedTitle>
            <div className="relative">
              <div className="bg-white p-8 border-4 border-[#162d7a] shadow-[12px_12px_0px_0px_#162d7a] transform hover:-rotate-1 transition-all duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Team working" 
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#52b82f] border-4 border-[#162d7a] shadow-[8px_8px_0px_0px_#162d7a] transform rotate-12"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#162d7a] border-4 border-[#52b82f] shadow-[8px_8px_0px_0px_#52b82f] transform -rotate-12"></div>
            </div>
          </AnimatedTitle>

          {/* Right Column - Content */}
          <div className="space-y-6">
            <AnimatedTitle>
              <div className="bg-white p-6 border-4 border-[#162d7a] shadow-[8px_8px_0px_0px_#162d7a] hover:shadow-[12px_12px_0px_0px_#162d7a] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-2xl font-black text-[#162d7a] mb-4">Our Mission</h3>
                <p className="text-[#162d7a]/80">
                  To provide comprehensive financial solutions that empower businesses to achieve their goals through expert guidance and innovative strategies. We focus on building long-term relationships based on trust and delivering measurable results.
                </p>
              </div>
            </AnimatedTitle>

            <AnimatedTitle>
              <div className="bg-white p-6 border-4 border-[#162d7a] shadow-[8px_8px_0px_0px_#162d7a] hover:shadow-[12px_12px_0px_0px_#162d7a] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-2xl font-black text-[#162d7a] mb-4">Our Vision</h3>
                <p className="text-[#162d7a]/80">
                  To be the most trusted financial partner for businesses, known for our integrity, expertise, and commitment to client success. We aim to be at the forefront of financial innovation while maintaining the highest standards of professional excellence.
                </p>
              </div>
            </AnimatedTitle>

            <AnimatedTitle>
              <div className="bg-white p-6 border-4 border-[#162d7a] shadow-[8px_8px_0px_0px_#162d7a] hover:shadow-[12px_12px_0px_0px_#162d7a] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-2xl font-black text-[#162d7a] mb-4">Why Choose Us</h3>
                <ul className="space-y-3">
                  {[
                    'Expert team with 7+ years of experience',
                    '100+ regular clients served successfully',
                    '75+ business funding and loan assistance cases',
                    'Comprehensive financial solutions',
                    'Personalized approach to each client'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center space-x-2 text-[#162d7a]/80">
                      <svg className="w-5 h-5 text-[#52b82f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedTitle>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 