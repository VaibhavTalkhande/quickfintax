import React from 'react';

const AnalyticsAnimation = () => {
  return (
    <div className="w-full h-full">
      <svg viewBox="0 0 400 300" className="w-full h-full">
        {/* Background Grid */}
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary/10" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />

        {/* Animated Line Graph */}
        <path
          d="M20 250L80 200L140 220L200 180L260 150L320 100L380 80"
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
          className="text-secondary"
        >
          <animate
            attributeName="d"
            values="M20 250L80 200L140 220L200 180L260 150L320 100L380 80;
                    M20 240L80 190L140 210L200 170L260 140L320 90L380 70;
                    M20 250L80 200L140 220L200 180L260 150L320 100L380 80"
            dur="3s"
            repeatCount="indefinite"
          />
        </path>

        {/* Animated Bars */}
        <g className="text-primary">
          <rect x="40" y="200" width="30" height="50" opacity="0.8">
            <animate
              attributeName="height"
              values="50;70;50"
              dur="2s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="y"
              values="200;180;200"
              dur="2s"
              repeatCount="indefinite"
            />
          </rect>
          <rect x="100" y="180" width="30" height="70" opacity="0.8">
            <animate
              attributeName="height"
              values="70;90;70"
              dur="2.5s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="y"
              values="180;160;180"
              dur="2.5s"
              repeatCount="indefinite"
            />
          </rect>
          <rect x="160" y="150" width="30" height="100" opacity="0.8">
            <animate
              attributeName="height"
              values="100;120;100"
              dur="3s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="y"
              values="150;130;150"
              dur="3s"
              repeatCount="indefinite"
            />
          </rect>
          <rect x="220" y="120" width="30" height="130" opacity="0.8">
            <animate
              attributeName="height"
              values="130;150;130"
              dur="2.7s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="y"
              values="120;100;120"
              dur="2.7s"
              repeatCount="indefinite"
            />
          </rect>
          <rect x="280" y="90" width="30" height="160" opacity="0.8">
            <animate
              attributeName="height"
              values="160;180;160"
              dur="3.2s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="y"
              values="90;70;90"
              dur="3.2s"
              repeatCount="indefinite"
            />
          </rect>
        </g>

        {/* Animated Circles */}
        <g className="text-secondary">
          <circle cx="200" cy="100" r="5" opacity="0.8">
            <animate
              attributeName="r"
              values="5;8;5"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="260" cy="80" r="5" opacity="0.8">
            <animate
              attributeName="r"
              values="5;8;5"
              dur="2.5s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="320" cy="60" r="5" opacity="0.8">
            <animate
              attributeName="r"
              values="5;8;5"
              dur="3s"
              repeatCount="indefinite"
            />
          </circle>
        </g>

        {/* Floating Elements */}
        <g className="text-primary/20">
          <path d="M50 50L70 30L90 50L70 70Z">
            <animate
              attributeName="transform"
              type="translate"
              values="0,0; 0,-10; 0,0"
              dur="4s"
              repeatCount="indefinite"
            />
          </path>
          <path d="M300 40L320 20L340 40L320 60Z">
            <animate
              attributeName="transform"
              type="translate"
              values="0,0; 0,-15; 0,0"
              dur="5s"
              repeatCount="indefinite"
            />
          </path>
        </g>
      </svg>
    </div>
  );
};

export default AnalyticsAnimation; 