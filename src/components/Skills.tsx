import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '../contexts/ThemeContext';
import { 
  Code2, 
  Database, 
  BarChart3, 
  GitBranch, 
  Brain, 
  PieChart,
  TrendingUp,
  Layers,
  Zap,
  Target,
  Activity
} from 'lucide-react';

const Skills: React.FC = () => {
  const { isDark } = useTheme();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const skillCategories = [
    {
      category: 'Programming Languages',
      skills: [
        { name: 'Python', icon: Code2, level: 95, color: 'from-yellow-400 to-yellow-600', description: 'Advanced ML & Data Science' },
        { name: 'C++', icon: Zap, level: 85, color: 'from-blue-400 to-blue-600', description: 'System Programming' },
        { name: 'SQL', icon: Database, level: 90, color: 'from-green-400 to-green-600', description: 'Database Management' }
      ]
    },
    {
      category: 'Data Science & ML',
      skills: [
        { name: 'Pandas', icon: BarChart3, level: 92, color: 'from-purple-400 to-purple-600', description: 'Data Manipulation' },
        { name: 'NumPy', icon: Layers, level: 88, color: 'from-red-400 to-red-600', description: 'Numerical Computing' },
        { name: 'Regression', icon: TrendingUp, level: 90, color: 'from-cyan-400 to-cyan-600', description: 'Predictive Modeling' },
        { name: 'Classification', icon: Brain, level: 87, color: 'from-pink-400 to-pink-600', description: 'Pattern Recognition' }
      ]
    },
    {
      category: 'Visualization & Tools',
      skills: [
        { name: 'Matplotlib', icon: PieChart, level: 85, color: 'from-indigo-400 to-indigo-600', description: 'Data Visualization' },
        { name: 'Seaborn', icon: Activity, level: 88, color: 'from-teal-400 to-teal-600', description: 'Statistical Plots' },
        { name: 'GitHub', icon: GitBranch, level: 92, color: 'from-gray-400 to-gray-600', description: 'Version Control' }
      ]
    }
  ];

  return (
    <section ref={ref} className={`py-20 px-6 max-w-7xl mx-auto ${isDark ? 'text-white' : 'text-gray-900'}`}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-cyan-500 bg-clip-text text-transparent mb-4">
          Skills & Expertise
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-cyan-500 mx-auto"></div>
      </motion.div>

      <div className="space-y-12">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
          >
            {/* Category Header */}
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                {category.category}
              </h3>
              <div className="w-16 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-500 mx-auto"></div>
            </div>

            {/* Skills Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.skills.map((skill, skillIndex) => {
                const globalIndex = categoryIndex * 4 + skillIndex;
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                    animate={inView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
                    transition={{ 
                      duration: 0.8, 
                      delay: categoryIndex * 0.2 + skillIndex * 0.1,
                      type: "spring",
                      stiffness: 100 
                    }}
                    className="group relative perspective-1000"
                  >
                    <div className={`glassmorphism p-6 rounded-2xl border ${isDark ? 'border-gray-700/50 hover:border-cyan-400/50' : 'border-gray-300 hover:border-blue-400/50'} transition-all duration-500 group-hover:scale-105 group-hover:rotate-1 transform-gpu`}>
                      {/* Animated background */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-all duration-500`}></div>
                      
                      {/* Floating particles */}
                      <div className="absolute top-2 right-2 w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300"></div>
                      
                      <div className="relative z-10">
                        {/* Enhanced Icon */}
                        <div className="relative mb-4">
                          <div className={`w-16 h-16 bg-gradient-to-br ${skill.color} rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-2xl`}>
                            <skill.icon className="w-8 h-8 text-white group-hover:animate-pulse" />
                          </div>
                          {/* Skill level badge */}
                          <div className={`absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r ${skill.color} rounded-full flex items-center justify-center text-xs font-bold text-white shadow-lg`}>
                            {skill.level}
                          </div>
                        </div>

                        {/* Skill Info */}
                        <h4 className={`${isDark ? 'text-white group-hover:text-cyan-400' : 'text-gray-900 group-hover:text-blue-600'} font-bold text-xl mb-2 transition-colors duration-300`}>
                          {skill.name}
                        </h4>
                        <p className={`${isDark ? 'text-gray-400 group-hover:text-gray-300' : 'text-gray-600 group-hover:text-gray-500'} text-sm mb-4 transition-colors duration-300`}>
                          {skill.description}
                        </p>

                        {/* Enhanced Progress Bar */}
                        <div className="relative">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-xs text-gray-500">Proficiency</span>
                            <span className="text-xs font-bold text-cyan-400">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                            <motion.div
                              initial={{ width: 0, x: -100 }}
                              animate={inView ? { width: `${skill.level}%`, x: 0 } : {}}
                              transition={{ 
                                duration: 1.5, 
                                delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5,
                                ease: "easeOut"
                              }}
                              className={`h-3 bg-gradient-to-r ${skill.color} rounded-full relative overflow-hidden shadow-lg`}
                            >
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                              <motion.div
                                animate={{ x: [-100, 100] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent w-1/3"
                              />
                            </motion.div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className={`absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full opacity-30`}
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + i * 10}%`,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;