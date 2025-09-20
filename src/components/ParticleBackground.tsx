import React from 'react';

const ParticleBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>
      
      {/* Circuit-like lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10">
        <defs>
          <linearGradient id="circuit-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00ffff" />
            <stop offset="50%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
        </defs>
        <path
          d="M0,100 Q150,50 300,100 T600,100 L600,200 Q450,150 300,200 T0,200 Z"
          fill="none"
          stroke="url(#circuit-gradient)"
          strokeWidth="1"
          opacity="0.3"
        />
        <path
          d="M100,300 Q250,250 400,300 T700,300 L700,400 Q550,350 400,400 T100,400 Z"
          fill="none"
          stroke="url(#circuit-gradient)"
          strokeWidth="1"
          opacity="0.2"
        />
      </svg>
    </div>
  );
};

export default ParticleBackground;