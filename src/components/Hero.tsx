import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Bot, Code, Brain } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        
        {/* Animated Robot Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full blur-xl opacity-60 animate-pulse"></div>
            <Bot className="relative w-24 h-24 mx-auto text-cyan-400 animate-bounce" />
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6"
        >
          Pavan Ayithireddy
        </motion.h1>

        {/* Animated Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mb-8"
        >
          <h2 className="text-2xl md:text-4xl text-gray-300 mb-4 font-light">
            AI/ML Developer
          </h2>
          <div className="flex items-center justify-center gap-4 text-cyan-400">
            <Brain className="w-6 h-6 animate-pulse" />
            <span className="text-lg md:text-xl">
              Innovative Machine Learning and Python Developer
            </span>
            <Code className="w-6 h-6 animate-pulse" />
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mb-16 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-semibold text-white transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50">
            <span className="relative z-10">Explore My Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          <a href="https://ayithireddy-pavan-ml-resume.tiiny.site" target="_blank" rel="noopener noreferrer">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-green-500 to-teal-600 rounded-full font-semibold text-white transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/50">
              <span className="relative z-10">Resume</span>
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8 text-cyan-400 animate-bounce cursor-pointer" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;