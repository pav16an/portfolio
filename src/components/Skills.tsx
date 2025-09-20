import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Code2, 
  Database, 
  BarChart3, 
  GitBranch, 
  Brain, 
  PieChart,
  TrendingUp,
  Layers
} from 'lucide-react';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const skills = [
    { name: 'Python', icon: Code2, level: 95, color: 'from-yellow-400 to-yellow-600' },
    { name: 'C++', icon: Code2, level: 85, color: 'from-blue-400 to-blue-600' },
    { name: 'SQL', icon: Database, level: 90, color: 'from-green-400 to-green-600' },
    { name: 'Pandas', icon: BarChart3, level: 92, color: 'from-purple-400 to-purple-600' },
    { name: 'NumPy', icon: Layers, level: 88, color: 'from-red-400 to-red-600' },
    { name: 'Regression', icon: TrendingUp, level: 90, color: 'from-cyan-400 to-cyan-600' },
    { name: 'Classification', icon: Brain, level: 87, color: 'from-pink-400 to-pink-600' },
    { name: 'Matplotlib', icon: PieChart, level: 85, color: 'from-indigo-400 to-indigo-600' },
    { name: 'Seaborn', icon: BarChart3, level: 88, color: 'from-teal-400 to-teal-600' },
    { name: 'GitHub', icon: GitBranch, level: 92, color: 'from-gray-400 to-gray-600' },
  ];

  return (
    <section ref={ref} className="py-20 px-6 max-w-7xl mx-auto">
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

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.1,
              type: "spring",
              stiffness: 100 
            }}
            className="group relative"
          >
            <div className="glassmorphism p-6 rounded-xl border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 group-hover:scale-105">
              {/* Glowing background effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-12 h-12 bg-gradient-to-r ${skill.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <skill.icon className="w-6 h-6 text-white" />
                </div>

                {/* Skill Name */}
                <h3 className="text-white font-semibold text-lg mb-3">{skill.name}</h3>

                {/* Progress Bar */}
                <div className="relative">
                  <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                      className={`h-2 bg-gradient-to-r ${skill.color} rounded-full relative overflow-hidden`}
                    >
                      <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
                    </motion.div>
                  </div>
                  <span className="text-sm text-gray-400 font-medium">{skill.level}%</span>
                </div>
              </div>
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