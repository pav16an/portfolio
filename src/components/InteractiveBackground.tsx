import React, { useState, useEffect, useRef } from 'react';

interface InteractiveBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

const InteractiveBackground: React.FC<InteractiveBackgroundProps> = ({ children, className = '' }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;
    const handleMouseMove = (e: MouseEvent) => {
      if (!ticking && containerRef.current) {
        requestAnimationFrame(() => {
          if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            setMousePos({
              x: ((e.clientX - rect.left) / rect.width) * 100,
              y: ((e.clientY - rect.top) / rect.height) * 100
            });
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    const handleClick = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const newRipple = {
          id: Date.now(),
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        };
        setRipples(prev => [...prev, newRipple]);
        setTimeout(() => {
          setRipples(prev => prev.filter(r => r.id !== newRipple.id));
        }, 1000);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      style={{
        '--mouse-x': `${mousePos.x}%`,
        '--mouse-y': `${mousePos.y}%`
      } as React.CSSProperties}
    >
      {/* Interactive Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Mouse Follower */}
        <div className="interactive-mouse-follower"></div>
        
        {/* Click Ripples */}
        {ripples.map(ripple => (
          <div
            key={ripple.id}
            className="interactive-click-ripple"
            style={{
              left: ripple.x,
              top: ripple.y
            }}
          ></div>
        ))}
        
        {/* Interactive Gradient Orbs */}
        <div className="interactive-gradient-orb interactive-orb-1"></div>
        <div className="interactive-gradient-orb interactive-orb-2"></div>
        
        {/* Floating Particles */}
        {Array.from({length: 5}).map((_, i) => (
          <div 
            key={i}
            className="interactive-floating-particle"
            style={{
              left: `${20 + i * 20}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`
            }}
          ></div>
        ))}
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default InteractiveBackground;