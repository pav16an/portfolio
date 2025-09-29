import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Mail, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import './Hero.css';

const Hero: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [ripples, setRipples] = useState([]);
  const [showNav, setShowNav] = useState(true);
  const heroRef = useRef(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePos({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100
        });
      }
    };

    const handleClick = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
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

    let timeout;
    const handleScroll = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        const currentScrollY = window.scrollY;
        const diff = currentScrollY - lastScrollY.current;
        if (diff < -10) {
          setShowNav(true);
        } else if (currentScrollY > 100 && diff > 10) {
          setShowNav(false);
        }
        lastScrollY.current = currentScrollY;
      }, 10);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('click', handleClick);
    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('click', handleClick);
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section 
      ref={heroRef}
      className={`portfolio-hero-section ${isDark ? 'dark' : ''} min-h-screen flex flex-col justify-center relative`}
      style={{
        '--mouse-x': `${mousePos.x}%`,
        '--mouse-y': `${mousePos.y}%`
      }}
    >
      {/* Interactive Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Mouse Follower */}
        <div className="mouse-follower"></div>
        
        {/* Click Ripples */}
        {ripples.map(ripple => (
          <div
            key={ripple.id}
            className="click-ripple"
            style={{
              left: ripple.x,
              top: ripple.y
            }}
          ></div>
        ))}
        
        {/* Interactive Gradient Orbs */}
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
        
        {/* Floating Particles */}
        {Array.from({length: 12}).map((_, i) => (
          <div 
            key={i}
            className="floating-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>
      
      {/* Enhanced Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 p-4">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ 
            y: showNav ? 0 : -100, 
            opacity: showNav ? 1 : 0 
          }}
          transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
          whileHover={{ scale: 1.02, y: -2 }}
          className={`max-w-5xl mx-auto flex justify-between items-center ${isDark ? 'bg-gradient-to-r from-gray-900/95 via-gray-800/95 to-gray-900/95' : 'bg-gradient-to-r from-white/95 via-gray-50/95 to-white/95'} backdrop-blur-2xl rounded-full px-8 py-4 border ${isDark ? 'border-cyan-400/30 shadow-cyan-500/20' : 'border-blue-400/30 shadow-blue-500/20'} shadow-2xl hover:shadow-3xl transition-all duration-500`}
        >
          <motion.div
            className="text-3xl font-bold cursor-pointer relative group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <motion.div
              className="absolute -inset-2 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <span className={`relative ${isDark ? 'text-white' : 'text-gray-900'} drop-shadow-lg`}>Pavan</span>
            <motion.span 
              className="relative bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg"
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              .
            </motion.span>
          </motion.div>
          
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex items-center gap-2">
              {[
                { name: 'About', section: 'about' },
                { name: 'Projects', section: 'projects' },
                { name: 'Experience', section: 'experience' },
                { name: 'Contact', section: 'contact' }
              ].map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => {
                    const element = document.querySelector(`[data-section="${item.section}"]`);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 relative group overflow-hidden ${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
                  whileHover={{ y: -3, scale: 1.08 }}
                  whileTap={{ scale: 0.92 }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-purple-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.2 }}
                  />
                  <motion.div
                    className={`absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    style={{ padding: '1px' }}
                  >
                    <div className={`w-full h-full rounded-full ${isDark ? 'bg-gray-900' : 'bg-white'}`} />
                  </motion.div>
                  <span className="relative z-10">{item.name}</span>
                  <motion.div
                    className="absolute bottom-0 left-1/2 w-0 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-500 transform -translate-x-1/2 rounded-full"
                  />
                </motion.button>
              ))}
            </nav>
            
            <motion.button
              onClick={toggleTheme}
              className={`p-3 rounded-full ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'} transition-all duration-300 group`}
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                animate={{ rotate: isDark ? 0 : 180 }}
                transition={{ duration: 0.5 }}
              >
                {isDark ? <Sun className="w-5 h-5 text-yellow-400 group-hover:animate-pulse" /> : <Moon className="w-5 h-5 group-hover:animate-pulse" />}
              </motion.div>
            </motion.button>
          </div>
        </motion.div>
      </nav>
      
      {/* Main Content */}
      <div className="container">
        <div className="hero-content-wrapper">
          
          <div className="hero-text-area">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Hi, I'm <br />
              <span className="text-highlight">Pavan Ayithireddy</span> <br />
              AI/ML Developer
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="description"
            >
              Building intelligent solutions with machine learning and data science. 
              Specialized in computer vision, NLP, and predictive analytics.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="cta-buttons"
            >
              <motion.a
                href="https://ayithireddy-pavan-ml-resume.tiiny.site"
                target="_blank"
                rel="noopener noreferrer"
                className="btn primary-btn"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-4 h-4" /> Download CV
              </motion.a>
              
              <motion.button
                onClick={() => {
                  const element = document.querySelector('[data-section="contact"]');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="btn secondary-btn"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Connect →
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex gap-4 mt-8"
            >
              {[
                { icon: Github, href: "https://github.com/pav16an", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/pavan-ayithireddy-67a487245/", label: "LinkedIn" },
                { icon: Mail, href: "mailto:ayithireddypavan8466@gmail.com", label: "Email" }
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-white/10 backdrop-blur-sm border border-gray-300/20 hover:bg-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center justify-center"
          >
            <div className="profile-ring-container flex items-center justify-center">
              <img 
                src="/images/profile.png" 
                alt="Pavan Ayithireddy" 
                className="profile-image transform transition-all duration-300 hover:scale-[1.02]"
                onError={(e) => {
                  e.target.src = 'https://placehold.co/800x800/808080/FFFFFF?text=PA';
                }}
              />
            </div>
          </motion.div>

        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="stats-row"
        >
          <motion.div 
            className="stat-item"
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <span className="stat-number">3+</span>
            <span className="stat-label">Projects</span>
          </motion.div>
          
          <motion.div 
            className="stat-item"
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <span className="stat-number">3</span>
            <span className="stat-label">Internships</span>
          </motion.div>
          
          <motion.div 
            className="stat-item"
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <span className="stat-number">5+</span>
            <span className="stat-label">Certifications</span>
          </motion.div>
          
          <motion.div 
            className="trust-message-container"
            whileHover={{ scale: 1.02 }}
          >
            <p>Building the future with <strong>AI/ML innovation</strong></p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;