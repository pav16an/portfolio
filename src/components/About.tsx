import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { User, Target, Lightbulb, Zap } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';


const About: React.FC = () => {
  const { isDark } = useTheme();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className={`portfolio-hero-section ${isDark ? 'dark' : ''} py-20 px-6 max-w-7xl mx-auto`}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4">
          About Me
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto"></div>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        {/* Main Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mb-16"
        >
          <div className={`glassmorphism p-8 md:p-12 rounded-3xl border transition-all duration-300 ${isDark ? 'border-cyan-500/30 hover:border-cyan-400/50' : 'border-gray-300 hover:border-blue-400/50'}`}>
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/5 rounded-3xl"></div>
            
            <div className="relative flex flex-col md:flex-row items-center gap-8">

              
              {/* Profile Info */}
              <div className="flex-1 text-center md:text-left">
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className={`text-3xl md:text-4xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}
                >
                  Pavan Ayithireddy
                </motion.h3>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-xl bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent font-semibold mb-4"
                >
                  AI/ML Developer & Data Scientist
                </motion.p>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className={`text-lg leading-relaxed mb-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
                >
                  Passionate about creating intelligent solutions that bridge the gap between 
                  complex algorithms and real-world applications. Specialized in computer vision, 
                  NLP, and predictive analytics with hands-on industry experience.
                </motion.p>
                
                {/* Stats */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="flex flex-wrap justify-center md:justify-start gap-6"
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">3+</div>
                    <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">3</div>
                    <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Internships</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">7.52</div>
                    <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>CGPA</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Key Highlights Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Target,
              title: "Mission",
              description: "Developing cutting-edge AI solutions that make meaningful impact",
              color: "from-cyan-500 to-blue-600"
            },
            {
              icon: Lightbulb,
              title: "Innovation",
              description: "Exploring new technologies in machine learning and data science",
              color: "from-purple-500 to-pink-600"
            },
            {
              icon: Zap,
              title: "Expertise",
              description: "Computer vision, NLP, and predictive analytics specialist",
              color: "from-orange-500 to-red-600"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              className={`glassmorphism p-6 rounded-2xl border transition-all duration-300 group hover:scale-105 ${isDark ? 'border-gray-700/50 hover:border-cyan-400/50' : 'border-gray-200 hover:border-blue-400/50'}`}
            >
              <div className="text-center">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${item.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-3`}>{item.title}</h3>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} text-sm leading-relaxed`}>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
