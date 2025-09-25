import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Sun, Moon, Download, Github, Linkedin, Mail, ArrowDown, MapPin, Phone, Sparkles, Code, Database, Award } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Hero: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();
  const [currentWord, setCurrentWord] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const words = ['Developer', 'Innovator', 'Problem Solver', 'Data Scientist'];
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 700 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [7, -7]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-7, 7]), springConfig);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      setMousePosition({ x: clientX, y: clientY });
      mouseX.set((clientX - innerWidth / 2) / innerWidth);
      mouseY.set((clientY - innerHeight / 2) / innerHeight);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className={`min-h-screen flex flex-col justify-center relative overflow-hidden ${isDark ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'}`}>
      
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1 h-1 ${isDark ? 'bg-blue-400/30' : 'bg-blue-500/20'} rounded-full`}
            animate={{
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 200 - 100],
              scale: [0, 1, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 3
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Cursor Follower */}
      <motion.div
        className="fixed w-6 h-6 pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 500 }}
      >
        <div className="w-full h-full bg-white rounded-full opacity-50" />
      </motion.div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 p-6">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
          className={`max-w-7xl mx-auto flex justify-between items-center ${isDark ? 'bg-gray-900/80' : 'bg-white/80'} backdrop-blur-lg rounded-2xl px-6 py-4 border ${isDark ? 'border-gray-700/50' : 'border-gray-200/50'}`}
        >
          <motion.div
            className="text-2xl font-bold cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className={isDark ? 'text-white' : 'text-gray-900'}>Pavan</span>
            <motion.span 
              className="text-blue-500"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              .
            </motion.span>
          </motion.div>
          
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex items-center gap-8">
              {['About', 'Work', 'Experience', 'Contact'].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`text-sm font-medium ${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors relative group`}
                  whileHover={{ y: -2 }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  {item}
                  <motion.div
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"
                    whileHover={{ width: "100%" }}
                  />
                </motion.a>
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
      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            style={{ rotateX, rotateY }}
            transition={{ type: "spring", stiffness: 100, damping: 30 }}
          >
            {/* Greeting with Sparkle */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="space-y-4"
            >
              <motion.div 
                className="flex items-center gap-2"
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="w-6 h-6 text-blue-500" />
                </motion.div>
                <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Hello, I'm
                </p>
              </motion.div>
              
              <motion.h1 
                className={`text-6xl md:text-7xl lg:text-8xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} leading-tight`}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 100 }}
              >
                <motion.span
                  whileHover={{ scale: 1.05, color: "#3B82F6" }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="cursor-pointer"
                >
                  Pavan
                </motion.span>
                <br />
                <motion.span 
                  className="text-blue-500"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Ayithireddy
                </motion.span>
              </motion.h1>
            </motion.div>

            {/* Dynamic Role with Enhanced Animation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="h-20 flex items-center"
            >
              <span className={`text-2xl md:text-3xl font-light ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                AI/ML{' '}
                <motion.span
                  key={currentWord}
                  initial={{ opacity: 0, y: 50, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  exit={{ opacity: 0, y: -50, rotateX: 90 }}
                  transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
                  className="text-blue-500 font-medium inline-block"
                >
                  {words[currentWord]}
                </motion.span>
              </span>
            </motion.div>

            {/* Enhanced Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
              className={`text-lg leading-relaxed max-w-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
              whileHover={{ scale: 1.02 }}
            >
              Passionate about creating intelligent solutions through machine learning and data science. 
              Currently pursuing B.Tech in AI/ML with hands-on experience in building innovative projects.
            </motion.p>

            {/* Interactive Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.1 }}
              className="flex flex-wrap gap-6 text-sm"
            >
              {[
                { icon: MapPin, text: "Kakinada, AP", color: "text-green-500" },
                { icon: Phone, text: "+91 9603698176", color: "text-blue-500" },
                { icon: Mail, text: "ayithireddypavan8466@gmail.com", color: "text-purple-500" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center gap-2 cursor-pointer group"
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.3 + index * 0.1 }}
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <item.icon className={`w-4 h-4 ${item.color} group-hover:animate-pulse`} />
                  </motion.div>
                  <span className={`${isDark ? 'text-gray-400' : 'text-gray-600'} group-hover:${item.color.replace('text-', 'text-')} transition-colors`}>
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Enhanced CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-medium transition-all duration-300 relative overflow-hidden group"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10 flex items-center gap-2">
                  View My Work
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.div>
                </span>
              </motion.button>
              
              <motion.a
                href="https://ayithireddy-pavan-ml-resume.tiiny.site"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <button className={`px-8 py-4 border-2 ${isDark ? 'border-gray-600 hover:border-blue-500 text-gray-300 hover:text-white' : 'border-gray-300 hover:border-blue-500 text-gray-700 hover:text-blue-600'} rounded-xl font-medium transition-all duration-300 flex items-center gap-2 group`}>
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Download className="w-4 h-4 group-hover:animate-bounce" />
                  </motion.div>
                  Resume
                </button>
              </motion.a>
            </motion.div>

            {/* Enhanced Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.7 }}
              className="flex gap-4 pt-4"
            >
              {[
                { icon: Github, href: "https://github.com/pav16an", label: "GitHub", color: "hover:bg-gray-800" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/pavan-ayithireddy-67a487245/", label: "LinkedIn", color: "hover:bg-blue-600" },
                { icon: Mail, href: "mailto:ayithireddypavan8466@gmail.com", label: "Email", color: "hover:bg-red-500" }
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 rounded-xl ${isDark ? 'bg-gray-800/50' : 'bg-gray-100'} ${social.color} text-white transition-all duration-300 group relative overflow-hidden`}
                  whileHover={{ scale: 1.1, y: -5, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.9 + index * 0.1 }}
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <social.icon className="w-5 h-5 group-hover:animate-pulse relative z-10" />
                  </motion.div>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Enhanced Right Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.8, type: "spring", stiffness: 100 }}
            className="flex justify-center lg:justify-end relative"
          >
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Enhanced Background Elements */}
              <motion.div
                className="absolute -inset-8 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 2, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Orbiting Elements */}
              {[Code, Database, Award].map((Icon, index) => (
                <motion.div
                  key={index}
                  className={`absolute w-12 h-12 ${isDark ? 'bg-gray-800' : 'bg-white'} rounded-full shadow-lg flex items-center justify-center border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}
                  animate={{
                    rotate: [0, 360],
                    x: [0, Math.cos(index * 120 * Math.PI / 180) * 150],
                    y: [0, Math.sin(index * 120 * Math.PI / 180) * 150],
                  }}
                  transition={{
                    duration: 8 + index,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    left: '50%',
                    top: '50%',
                    transformOrigin: '0 0'
                  }}
                >
                  <Icon className="w-6 h-6 text-blue-500" />
                </motion.div>
              ))}

              {/* Main Image with Advanced Frame Effects */}
              <motion.div
                className="relative z-10"
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Geometric Frame Border */}
                <div className="absolute -inset-4 rounded-3xl">
                  <div className={`absolute inset-0 rounded-3xl border-2 ${isDark ? 'border-blue-500/30' : 'border-blue-400/40'}`} />
                  <div className={`absolute inset-2 rounded-3xl border ${isDark ? 'border-purple-500/20' : 'border-purple-400/30'}`} />
                  <div className={`absolute inset-4 rounded-3xl border ${isDark ? 'border-pink-500/10' : 'border-pink-400/20'}`} />
                </div>
                
                {/* Corner Decorations */}
                {[0, 1, 2, 3].map((corner) => (
                  <motion.div
                    key={corner}
                    className={`absolute w-6 h-6 border-2 border-blue-500 ${corner === 0 ? '-top-2 -left-2' : corner === 1 ? '-top-2 -right-2' : corner === 2 ? '-bottom-2 -left-2' : '-bottom-2 -right-2'}`}
                    style={{
                      borderRadius: corner === 0 ? '0 0 8px 0' : corner === 1 ? '0 0 0 8px' : corner === 2 ? '0 8px 0 0' : '8px 0 0 0'
                    }}
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      delay: corner * 0.2 
                    }}
                  />
                ))}
                
                {/* Animated Frame Glow */}
                <motion.div
                  className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-sm"
                  animate={{
                    opacity: [0.3, 0.7, 0.3],
                    scale: [1, 1.02, 1]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <motion.img
                  src="https://res.cloudinary.com/dvadfv5zz/image/upload/v1758367823/273A0275_burn5j.jpg"
                  alt="Pavan Ayithireddy"
                  className="w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-3xl shadow-2xl border-4 border-white/20 relative z-10"
                  whileHover={{ 
                    boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.5)",
                    borderColor: "rgba(59, 130, 246, 0.8)"
                  }}
                />
                
                {/* Overlay Pattern */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
                
                {/* Enhanced Status Indicator with Frame */}
                <motion.div
                  className="absolute -bottom-6 -right-6 bg-green-500 w-16 h-16 rounded-full border-4 border-white shadow-2xl flex items-center justify-center"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    boxShadow: ["0 0 0 0 rgba(34, 197, 94, 0.7)", "0 0 0 15px rgba(34, 197, 94, 0)", "0 0 0 0 rgba(34, 197, 94, 0)"]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {/* Status Ring */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-green-300"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.div
                    animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="w-8 h-8 bg-white rounded-full flex items-center justify-center"
                  >
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Enhanced Floating Stats */}
              {[
                { value: "3+", label: "Projects", position: "-left-12 top-20", color: "blue" },
                { value: "7.52", label: "CGPA", position: "-right-12 bottom-20", color: "purple" },
                { value: "3", label: "Internships", position: "-left-8 bottom-32", color: "green" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 2 + index * 0.2 }}
                  className={`absolute ${stat.position} ${isDark ? 'bg-gray-800/90' : 'bg-white/90'} backdrop-blur-lg p-4 rounded-2xl shadow-xl border ${isDark ? 'border-gray-700/50' : 'border-gray-200/50'} group cursor-pointer`}
                  whileHover={{ scale: 1.1, y: -5, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div 
                    className="text-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.div 
                      className={`text-2xl font-bold text-${stat.color}-500 group-hover:animate-pulse`}
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'} group-hover:text-${stat.color}-500 transition-colors`}>
                      {stat.label}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-3 cursor-pointer group"
          whileHover={{ scale: 1.1 }}
        >
          <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} group-hover:text-blue-500 transition-colors`}>
            Scroll Down
          </span>
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          >
            <ArrowDown className={`w-5 h-5 ${isDark ? 'text-gray-400' : 'text-gray-600'} group-hover:text-blue-500 transition-colors`} />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;