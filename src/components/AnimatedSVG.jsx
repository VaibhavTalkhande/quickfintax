import React, { useEffect, useState } from 'react';

const AnimatedSVG = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
      {/* Animated Background Elements with Parallax */}
      <div 
        className="absolute top-1/4 left-1/4 transition-transform duration-200 ease-out"
        style={{ transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)` }}
      >
        <svg width="80" height="80" viewBox="0 0 50 50" className="text-[#52b82f]/5">
          <path d="M25 5L45 25L25 45L5 25L25 5Z" fill="currentColor">
            <animate
              attributeName="opacity"
              values="0.1;0.2;0.1"
              dur="4s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      </div>

      <div 
        className="absolute top-1/3 right-1/4 transition-transform duration-200 ease-out"
        style={{ transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * -0.3}px)` }}
      >
        <svg width="60" height="60" viewBox="0 0 50 50" className="text-[#162d7a]/5">
          <circle cx="25" cy="25" r="20" fill="currentColor">
            <animate
              attributeName="r"
              values="18;22;18"
              dur="3s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
      </div>

      <div 
        className="absolute bottom-1/4 left-1/3 transition-transform duration-200 ease-out"
        style={{ transform: `translate(${mousePosition.x * 0.4}px, ${mousePosition.y * 0.4}px)` }}
      >
        <svg width="70" height="70" viewBox="0 0 50 50" className="text-[#52b82f]/5">
          <path d="M5 35L15 25L25 30L35 20L45 25" stroke="currentColor" strokeWidth="2" fill="none">
            <animate
              attributeName="d"
              values="M5 35L15 25L25 30L35 20L45 25;M5 30L15 20L25 25L35 15L45 20;M5 35L15 25L25 30L35 20L45 25"
              dur="5s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      </div>

      {/* Additional Animated Elements */}
      <div 
        className="absolute top-2/3 right-1/3 transition-transform duration-200 ease-out"
        style={{ transform: `translate(${mousePosition.x * -0.2}px, ${mousePosition.y * -0.2}px)` }}
      >
        <svg width="50" height="50" viewBox="0 0 50 50" className="text-[#162d7a]/5">
          <path d="M25 5L45 25L25 45L5 25L25 5Z" fill="currentColor">
            <animate
              attributeName="transform"
              type="rotate"
              values="0 25 25;360 25 25"
              dur="20s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      </div>

      <div 
        className="absolute bottom-1/3 left-1/4 transition-transform duration-200 ease-out"
        style={{ transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)` }}
      >
        <svg width="40" height="40" viewBox="0 0 50 50" className="text-[#52b82f]/5">
          <path d="M25 5C25 5 40 25 40 25C40 25 25 45 25 45C25 45 10 25 10 25C10 25 25 5 25 5Z" fill="currentColor">
            <animate
              attributeName="opacity"
              values="0.1;0.2;0.1"
              dur="4s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/0 to-white/10" />
    </div>
  );
};

export default AnimatedSVG; 