import React, { useState } from 'react';
import logo from '../assets/logo.png';
import FloatingContact from './FloatingContact';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="fixed w-full bg-white border-b-4 border-[#52b82f] shadow-[0_4px_0_0_#162d7a] z-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <a href="/" className="flex items-center group">
              <img src={logo} alt="QuickFintax Logo" className="h-24 lg:h-50 w-auto object-contain transform group-hover:scale-105 transition-transform duration-300" />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              <a href="#home" className="text-[#162d7a] hover:text-[#52b82f] transition-all duration-300 font-black relative group flex items-center space-x-1 text-base lg:text-lg">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span>Home</span>
                <span className="absolute -bottom-1 left-0 w-0 h-2 bg-[#52b82f] transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#about" className="text-[#162d7a] hover:text-[#52b82f] transition-all duration-300 font-black relative group flex items-center space-x-1 text-base lg:text-lg">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>About</span>
                <span className="absolute -bottom-1 left-0 w-0 h-2 bg-[#52b82f] transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#services" className="text-[#162d7a] hover:text-[#52b82f] transition-all duration-300 font-black relative group flex items-center space-x-1 text-base lg:text-lg">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Services</span>
                <span className="absolute -bottom-1 left-0 w-0 h-2 bg-[#52b82f] transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#contact" className="bg-[#52b82f] text-white px-6 py-2.5 font-black border-2 border-[#162d7a] shadow-[4px_4px_0px_0px_#162d7a] hover:shadow-[6px_6px_0px_0px_#162d7a] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300 text-base lg:text-lg flex items-center space-x-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Contact</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-[#162d7a] focus:outline-none p-2 hover:bg-[#52b82f] hover:text-white transition-all duration-300 border-2 border-[#162d7a] shadow-[2px_2px_0px_0px_#162d7a] hover:shadow-[4px_4px_0px_0px_#162d7a] hover:-translate-x-1 hover:-translate-y-1"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6 transform rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden bg-white border-2 border-[#162d7a] shadow-[4px_4px_0px_0px_#162d7a]`}>
            <div className="flex flex-col space-y-4 p-4">
              <a 
                href="#home" 
                className="text-[#162d7a] hover:text-[#52b82f] transition-all duration-300 font-black py-2 px-4 hover:bg-[#162d7a]/5 border-2 border-[#162d7a] shadow-[2px_2px_0px_0px_#162d7a] hover:shadow-[4px_4px_0px_0px_#162d7a] hover:-translate-x-1 hover:-translate-y-1 flex items-center space-x-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span>Home</span>
              </a>
              <a 
                href="#about" 
                className="text-[#162d7a] hover:text-[#52b82f] transition-all duration-300 font-black py-2 px-4 hover:bg-[#162d7a]/5 border-2 border-[#162d7a] shadow-[2px_2px_0px_0px_#162d7a] hover:shadow-[4px_4px_0px_0px_#162d7a] hover:-translate-x-1 hover:-translate-y-1 flex items-center space-x-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>About</span>
              </a>
              <a 
                href="#services" 
                className="text-[#162d7a] hover:text-[#52b82f] transition-all duration-300 font-black py-2 px-4 hover:bg-[#162d7a]/5 border-2 border-[#162d7a] shadow-[2px_2px_0px_0px_#162d7a] hover:shadow-[4px_4px_0px_0px_#162d7a] hover:-translate-x-1 hover:-translate-y-1 flex items-center space-x-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Services</span>
              </a>
              <a 
                href="#contact" 
                className="bg-[#52b82f] text-white px-6 py-3 font-black border-2 border-[#162d7a] shadow-[4px_4px_0px_0px_#162d7a] hover:shadow-[6px_6px_0px_0px_#162d7a] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300 text-center flex items-center justify-center space-x-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Contact</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
      <FloatingContact />
    </>
  );
};

export default Navbar; 